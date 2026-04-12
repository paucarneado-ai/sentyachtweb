# ── Stage 1: Compile Tailwind CSS ──
# The committed HTML in es/ and en/ is the source of truth and is NOT regenerated.
# We only compile Tailwind so its output matches the classes actually used in the committed HTML.
FROM node:22-alpine AS build

WORKDIR /build

# Install only what's needed for Tailwind
COPY package.json .
RUN npm install --include=dev --no-audit --no-fund

# Copy Tailwind config + everything its content globs scan
COPY tailwind.config.js .
COPY src/ src/
COPY es/ es/
COPY en/ en/

# Compile Tailwind to dist/styles/tailwind.css
RUN npx tailwindcss -i src/styles/tailwind-input.css -o dist/styles/tailwind.css --minify

# ── Stage 2: Serve with nginx ──
FROM nginx:alpine

# Clean default nginx content and config
RUN rm /etc/nginx/conf.d/default.conf && rm -rf /usr/share/nginx/html/*

# Nginx server config
COPY nginx.conf /etc/nginx/conf.d/sentyacht.conf

# Static root files
COPY index.html /usr/share/nginx/html/
COPY 404.html /usr/share/nginx/html/
COPY 404-en.html /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/
COPY robots.txt /usr/share/nginx/html/
COPY boats.js /usr/share/nginx/html/

# Committed HTML pages (source of truth, NOT regenerated)
COPY es/ /usr/share/nginx/html/es/
COPY en/ /usr/share/nginx/html/en/

# Images and assets (originals only; no optimize pipeline)
COPY assets/ /usr/share/nginx/html/assets/

# Compiled Tailwind CSS from build stage
COPY --from=build /build/dist/ /usr/share/nginx/html/dist/

# Main custom CSS (served as /src/styles/main.css)
COPY src/styles/main.css /usr/share/nginx/html/src/styles/main.css

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
