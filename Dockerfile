# ── Stage 1: Build ──
# Run build.mjs to generate all static HTML pages, sitemap, and robots.txt
# Then compile Tailwind CSS from utility classes into a single minified file
FROM node:22-alpine AS build

WORKDIR /build

# Copy package files first for better layer caching
COPY package.json .

# Install dependencies (tailwindcss needed for CSS compilation)
RUN npm install --include=dev

# Copy what the build script needs
COPY build.mjs .
COPY boats.js .
COPY src/ src/
COPY tailwind.config.js .
COPY scripts/ scripts/
COPY assets/ assets/

# Step 1: Optimize images (WebP, responsive sizes, blur placeholders)
RUN node scripts/optimize-images.mjs

# Step 2: Generate static HTML (reads image manifest for srcset)
RUN node build.mjs

# Step 3: Compile Tailwind CSS (scans generated HTML for used classes)
RUN npx tailwindcss -i src/styles/tailwind-input.css -o dist/styles/tailwind.css --minify

# ── Stage 2: Serve ──
# nginx:alpine serves the generated static files
FROM nginx:alpine

# Remove default nginx config and content
RUN rm /etc/nginx/conf.d/default.conf && rm -rf /usr/share/nginx/html/*

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/sentyacht.conf

# Copy static root files
COPY index.html /usr/share/nginx/html/
COPY 404.html /usr/share/nginx/html/

# Copy generated output from build stage
COPY --from=build /build/es/ /usr/share/nginx/html/es/
COPY --from=build /build/en/ /usr/share/nginx/html/en/
COPY --from=build /build/sitemap.xml /usr/share/nginx/html/
COPY --from=build /build/robots.txt /usr/share/nginx/html/

# Copy compiled CSS from build stage
COPY --from=build /build/dist/ /usr/share/nginx/html/dist/

# Copy client-side runtime files
COPY boats.js /usr/share/nginx/html/

# Copy optimized images from build stage (not raw originals)
COPY --from=build /build/assets/opt/ /usr/share/nginx/html/assets/opt/
# Copy non-image assets (logo, etc.)
COPY assets/logo.png /usr/share/nginx/html/assets/logo.png

# Copy styles (main.css still served as-is)
COPY src/styles/ /usr/share/nginx/html/src/styles/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
