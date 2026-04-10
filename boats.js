/**
 * SentYacht — Boat Inventory Data
 * Single source of truth for all boat listings.
 * Update this file when inventory changes.
 */
const boats = [
  {
    slug: "astondoa-82-glx-2008",
    name: "Astondoa 82 GLX",
    brand: "Astondoa",
    type: "motor",
    year: 2008,
    price: 1300000,
    length: 24.99,
    beam: 6.20,
    draft: 1.50,
    location: "Barcelona",
    condition: "used",
    badges: [],
    engines: "2x MTU 10V 2000 M93 — 5.396 CV",
    fuel: "Diesel",
    cabins: 7,
    berths: 8,
    heads: 8,
    description: {
      es: "Astondoa 82 GLX construido por encargo. Un solo propietario desde su botadura.\n\nCinco cabinas, gran salón-comedor con mesa de cristal y sofás retapizados, cocina a medida. Flybridge de grandes dimensiones con techo y toldo extensible, jacuzzi con agua caliente y de mar, cinco zonas de estar independientes.\n\nPlataforma de baño hidráulica de 2,40 m, nueva pasarela, puerta de acceso eléctrica. Parquet especial en toda la embarcación. Decoración interior moderna y exclusiva, teca en muy buen estado. Barandillas de acero inoxidable en flybridge, alarma y cámaras de seguridad, sistema de música especial.\n\nEstabilizadores de alta gama con Seakeeper, potabilizadora de gran capacidad. Motores MTU revisados, generadores con revisión de 5.000 horas realizada. Nueva radiobaliza EPIRB y balsa salvavidas. Lista 6 e impuestos pagados. Pintado completo en 2018.\n\nNumerosas renovaciones recientes: nuevas bombas de agua y aire acondicionado, hidráulicos de plataforma renovados, nueva pasarela, nuevo calentador de agua, nuevas tuberías y depósito de aguas negras, baterías nuevas, instalación eléctrica y cargadores nuevos, nuevas bombas de sentina.",
      en: "Astondoa 82 GLX custom built. Single owner since launch.\n\nFive cabins, large salon-dining room with crystal table and reupholstered sofas, custom galley. Large flybridge with roof and extendable awning, jacuzzi with hot water and seawater, five independent seating zones.\n\n2.40m hydraulic swim platform, new gangway, electric access door. Special parquet throughout. Modern exclusive interior decor, teak in very good condition. Stainless steel railings on flybridge, alarm and security cameras, special music system.\n\nHigh-end stabilizers with Seakeeper, large capacity watermaker. MTU engines serviced, generators with 5,000h revision completed. New EPIRB and life raft. Lista 6 and taxes paid. Fully painted in 2018.\n\nNumerous recent renovations: new water and AC pumps, renewed platform hydraulics, new gangway, new water heater, new black water pipes and tank, new batteries, new electrical installation and chargers, new bilge pumps."
    },
    specs: {
      es: { "Eslora": "24,99 m", "Manga": "6,20 m", "Calado": "1,50 m", "Motor": "2x MTU 10V 2000 M93 — 5.396 CV", "Combustible": "Diesel", "Cabinas": "7", "Literas": "8", "Baños": "8", "Año": "2008", "Puerto": "Barcelona" },
      en: { "Length": "24.99 m", "Beam": "6.20 m", "Draft": "1.50 m", "Engine": "2x MTU 10V 2000 M93 — 5,396 HP", "Fuel": "Diesel", "Cabins": "7", "Berths": "8", "Heads": "8", "Year": "2008", "Port": "Barcelona" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente', 'Generador', 'Inversor'],
        'Electrónica': ['Sonda', 'Radar', 'Corredera', 'Detector de radar', 'Instrumentos de viento', 'Repetidores', 'TV', 'Centro de navegacion', 'Plotter', 'DVD', 'Piloto automatico', 'Radio', 'Compas', 'CD', 'GPS', 'Altavoces de banera', 'VHF', 'TV pantalla plana', 'AIS'],
        'Interior': ['Estabilizador Seakeeper', 'Helice de popa', 'Lavavajillas', 'Helice de proa', 'Lavadora', 'Bombas de sentina electricas/manuales', 'Horno', 'Microondas', 'WC marino', 'Aire acondicionado', 'WC electrico', 'Calefacción', 'Agua caliente', 'Frigorifico', 'Potabilizadora', 'Congelador', 'Bomba de agua salada', 'Cargador de baterias'],
        'Exterior': ['Teca en banera', 'Ducha de banera', 'Teca en pasillos laterales', 'Molinete electrico', 'Joystick', 'Pasarela', 'Pescantes', 'Pasarela hidraulica', 'Reflector de radar', 'Neumatica', 'Balsa salvavidas', 'Cojines de banera', 'Mesa de banera', 'Escalera de bano', 'Sistema de surf'],
        'Adicional': ['Moto de agua', 'Luces subacuaticas', 'Juguetes acuaticos', 'Grua', 'Bodega de vinos', 'Garaje', 'Walkaround', 'Jacuzzi']
      },
      en: {
        'Electrical': ['Shore power', 'Generator', 'Inverter'],
        'Electronics': ['Depth sounder', 'Radar', 'Log/speed', 'Radar detector', 'Wind instruments', 'Repeaters', 'TV', 'Nav center', 'Plotter', 'DVD', 'Autopilot', 'Radio', 'Compass', 'CD', 'GPS', 'Cockpit speakers', 'VHF', 'Flat screen TV', 'AIS'],
        'Interior': ['Seakeeper stabilizer', 'Stern thruster', 'Dishwasher', 'Bow thruster', 'Washing machine', 'Electric/manual bilge pumps', 'Oven', 'Microwave', 'Marine WC', 'Air conditioning', 'Electric WC', 'Heating', 'Hot water', 'Fridge', 'Water purifier', 'Freezer', 'Saltwater pump', 'Battery charger'],
        'Exterior': ['Teak cockpit', 'Cockpit shower', 'Teak side decks', 'Electric windlass', 'Joystick', 'Gangway', 'Davits', 'Hydraulic gangway', 'Radar reflector', 'Tender', 'Life raft', 'Cockpit cushions', 'Cockpit table', 'Bathing ladder', 'Surf system'],
        'Additional': ['Jet ski', 'Underwater lights', 'Water toys', 'Crane', 'Wine cellar', 'Garage', 'Walkaround', 'Jacuzzi']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'MTU', modelo: '10V 2000 M93', potencia: '2.698 CV', horas: '1.923', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '4 palas, bronce' },
          { marca: 'MTU', modelo: '10V 2000 M93', potencia: '2.698 CV', horas: '1.923', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '4 palas, bronce' }
        ],
        potenciaTotal: '5.396 CV'
      },
      en: {
        motors: [
          { brand: 'MTU', model: '10V 2000 M93', power: '2,698 HP', hours: '1,923', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '4 blades, bronze' },
          { brand: 'MTU', model: '10V 2000 M93', power: '2,698 HP', hours: '1,923', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '4 blades, bronze' }
        ],
        totalPower: '5,396 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '24,99 m', 'Manga': '6,20 m', 'Calado': '1,50 m', 'Capacidad': '12 personas', 'Casco': 'Fibra de vidrio, Deep V', 'Instalación eléctrica': '24V', 'Cabinas': '7', 'Banos': '8' },
      en: { 'LOA': '24.99 m', 'Beam': '6.20 m', 'Draft': '1.50 m', 'Capacity': '12 persons', 'Hull': 'Fiberglass, Deep V', 'Electrical': '24V', 'Cabins': '7', 'Heads': '8' }
    },
    highlights: {
      es: [
        'Motorización 2x MTU 10V 2000 M93 — 5.396 CV con 1.923 horas',
        'Estabilizadores Seakeeper de alta gama',
        'Flybridge con jacuzzi y cinco zonas de estar independientes',
        'Plataforma de baño hidráulica de 2,40 m y nueva pasarela',
        'Pintado completo en 2018 y numerosas renovaciones recientes',
      ],
      en: [
        '2x MTU 10V 2000 M93 engines — 5,396 HP with 1,923 hours',
        'High-end Seakeeper stabilizers',
        'Flybridge with jacuzzi and five independent seating zones',
        '2.40m hydraulic swim platform and new gangway',
        'Fully painted in 2018 with numerous recent renovations',
      ],
    },
    images: ["imagenes web/astondoa-82-glx/hf_20260319_000722_d82a7c01-5837-4611-bbc7-05fbc82e88eb.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_074217_7841eb70-71ec-453e-9df4-3e591d645326.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_075750_461ba11f-a5b1-49bc-acbf-fd05b6baf84d.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_091715_3605e909-4718-4eaf-b37a-ee36898427c2.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_093037_8fc882d3-7419-464f-b31e-863dc3bb07b7.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_093247_47acaeba-947e-488e-b003-e39804c315f3.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_094432_c27bc0ea-814b-4197-b29b-7d9a9ab04543.png", "imagenes web/astondoa-82-glx/hf_20260318_095211_d5dbe489-827b-4dd3-a2c5-f190d7932662.png", "imagenes web/astondoa-82-glx/hf_20260318_095506_abde0d23-ce1d-4df4-9391-748714e858f6.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_122443_ac7c8afb-8c9e-4329-a75b-486a56f41189.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_123018_843626bd-5cac-4e29-9882-b1b8016b0288.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_123114_59c29253-fbc3-4f3e-b2cc-323a8d20038b.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_123436_ac0b0150-e696-451c-96f2-837421ebeb4e.png", "imagenes web/astondoa-82-glx/hf_20260318_124735_1a7769cb-0b52-405f-bcb1-7e87b1c3fba6.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_125017_2f0ab261-9426-4499-b829-4a824070f78d.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_125200_6086b758-0621-4f34-a046-08b62cc92c9b.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_125453_b0300c92-b299-4fe3-b6c9-b35c18983299.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_130007_ba048f9a-349d-42b3-8e34-a959871cf4a9.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_131021_0f911edd-de3d-480a-b928-1b5ee1bb9862.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_132307_feffbfdc-6f98-4f9e-be9b-42f21258623d.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_140012_a3cd0c81-9ddd-4c4b-a0ce-90cbb292556e.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_064453_acb97b32-e90a-401b-9d43-5b0bb7ed4701.jpeg", "imagenes web/astondoa-82-glx/z.jpeg"]
  },
  {
    slug: "astondoa-72-glx-2003",
    name: "Astondoa 72 GLX",
    brand: "Astondoa",
    type: "motor",
    year: 2003,
    price: 950000,
    length: 22.00,
    beam: 5.45,
    draft: 2.10,
    location: "Alicante",
    condition: "used",
    badges: ["new"],
    engines: "2x MAN 1.300 CV — 2.600 CV",
    fuel: "Diesel",
    cabins: 5,
    berths: 8,
    heads: 4,
    description: {
      es: "Astondoa 72 GLX representa la combinación de lujo, rendimiento y diseño clásico. Una embarcación de gran eslora con prestaciones excepcionales y detalles cuidados al máximo.\n\nCon una eslora total de 22 metros y una manga generosa, ofrece estabilidad y espacio interior. Su casco está diseñado para facilitar una navegación suave y segura incluso en condiciones adversas, gracias a su arquitectura naval pensada para maximizar la eficiencia y la comodidad a bordo.\n\nLos acabados interiores reflejan la calidad y el lujo característicos de Astondoa: maderas nobles, tapizados elegantes y un cuidado diseño en cada rincón. Los amplios ventanales permiten la entrada de luz natural, creando un ambiente acogedor y abierto.\n\nLa motorización MAN ofrece un rendimiento excelente tanto en velocidad de crucero como en velocidad máxima. Cinco cabinas, cuatro baños. Ideal para travesías y vacaciones.",
      en: "Astondoa 72 GLX represents the combination of luxury, performance and classic design. A large-length vessel with exceptional capabilities and meticulous attention to detail.\n\nWith a total length of 22 metres and a generous beam, she offers stability and interior space. Her hull is designed for smooth and safe navigation even in adverse conditions, thanks to naval architecture focused on maximising efficiency and comfort on board.\n\nThe interior finishes reflect the quality and luxury characteristic of Astondoa: noble woods, elegant upholstery and careful design in every corner. Large windows allow natural light in, creating a warm and open atmosphere.\n\nThe MAN engines deliver excellent performance in both cruising and top speed. Five cabins, four heads. Ideal for cruises and holidays."
    },
    specs: {
      es: { "Eslora": "22,00 m", "Manga": "5,45 m", "Calado": "2,10 m", "Motor": "2x MAN 1.300 CV", "Combustible": "Diesel", "Cabinas": "5", "Literas": "8", "Baños": "4", "Año": "2003", "Puerto": "Alicante" },
      en: { "Length": "22.00 m", "Beam": "5.45 m", "Draft": "2.10 m", "Engine": "2x MAN 1,300 HP", "Fuel": "Diesel", "Cabins": "5", "Berths": "8", "Heads": "4", "Year": "2003", "Port": "Alicante" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente'],
        'Electrónica': ['Sonda', 'Radar', 'Corredera', 'Ordenador', 'TV', 'Centro de navegacion', 'Plotter', 'DVD', 'Piloto automatico', 'Radio', 'Compas', 'CD', 'GPS', 'Altavoces de banera', 'VHF', 'TV pantalla plana', 'WiFi', 'AIS'],
        'Interior': ['Estabilizador Seakeeper', 'Helice de popa', 'Lavavajillas', 'Helice de proa', 'Lavadora', 'Bombas de sentina electricas/manuales', 'Horno', 'Microondas', 'Compresor de aire', 'WC marino', 'Aire acondicionado', 'WC electrico', 'Calefacción', 'WC quimico', 'Agua caliente', 'Frigorifico', 'Potabilizadora', 'Congelador', 'Bomba de agua salada', 'Cargador de baterias'],
        'Exterior': ['Teca en banera', 'Ducha de banera', 'Teca en pasillos laterales', 'Molinete electrico', 'Soporte fueraborda', 'Pasarela', 'Joystick', 'Pasarela hidraulica', 'Panel solar', 'Balsa salvavidas', 'Cojines de banera', 'Mesa de banera', 'Escalera de bano', 'Escalera hidraulica', 'Tangones electricos', 'Estabilizadores', 'Estabilizador de aletas', 'Sistema de surf', 'Plataforma de bano hidraulica']
      },
      en: {
        'Electrical': ['Shore power'],
        'Electronics': ['Depth sounder', 'Radar', 'Log/speed', 'Computer', 'TV', 'Nav center', 'Plotter', 'DVD', 'Autopilot', 'Radio', 'Compass', 'CD', 'GPS', 'Cockpit speakers', 'VHF', 'Flat screen TV', 'WiFi', 'AIS'],
        'Interior': ['Seakeeper', 'Stern thruster', 'Dishwasher', 'Bow thruster', 'Washing machine', 'Electric/manual bilge pumps', 'Oven', 'Microwave', 'Air compressor', 'Marine WC', 'Air conditioning', 'Electric WC', 'Heating', 'Chemical WC', 'Hot water', 'Fridge', 'Water purifier', 'Freezer', 'Saltwater pump', 'Battery charger'],
        'Exterior': ['Teak cockpit', 'Cockpit shower', 'Teak side decks', 'Electric windlass', 'Outboard bracket', 'Gangway', 'Joystick', 'Hydraulic gangway', 'Solar panel', 'Life raft', 'Cockpit cushions', 'Cockpit table', 'Bathing ladder', 'Hydraulic ladder', 'Electric poles', 'Stabilizers', 'Fin stabilizer', 'Surf system', 'Hydraulic swim platform']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'MAN', modelo: '', potencia: '1.300 CV', horas: '2.000', combustible: 'Diesel', tipo: 'Interior', transmision: 'Transmision directa', helice: '' },
          { marca: 'MAN', modelo: '', potencia: '1.300 CV', horas: '2.000', combustible: 'Diesel', tipo: 'Interior', transmision: 'Transmision directa', helice: '' }
        ],
        potenciaTotal: '2.600 CV'
      },
      en: {
        motors: [
          { brand: 'MAN', model: '', power: '1,300 HP', hours: '2,000', fuel: 'Diesel', type: 'Inboard', transmission: 'Direct drive', propeller: '' },
          { brand: 'MAN', model: '', power: '1,300 HP', hours: '2,000', fuel: 'Diesel', type: 'Inboard', transmission: 'Direct drive', propeller: '' }
        ],
        totalPower: '2,600 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '22,00 m', 'Eslora de cubierta': '21,68 m', 'Manga': '5,45 m', 'Calado': '2,10 m', 'Francobordo': '2,00 m', 'Línea de flotación': '18,50 m', 'Capacidad': '12 personas', 'Casco': 'Fibra de vidrio, Deep V', 'Agua dulce': '800 L', 'Combustible': '4.500 L', 'Cabinas': '5', 'Banos': '4', 'Velocidad crucero': '24 nudos', 'Velocidad máxima': '30 nudos', 'Autonomía': '300 mn' },
      en: { 'LOA': '22.00 m', 'Deck length': '21.68 m', 'Beam': '5.45 m', 'Draft': '2.10 m', 'Headroom': '2.00 m', 'Waterline': '18.50 m', 'Capacity': '12 persons', 'Hull': 'Fiberglass, Deep V', 'Freshwater': '800 L', 'Fuel': '4,500 L', 'Cabins': '5', 'Heads': '4', 'Cruising speed': '24 kn', 'Max speed': '30 kn', 'Range': '300 nm' }
    },
    highlights: {
      es: [
        'Motorización 2x MAN 1.300 CV con 2.000 horas, transmisión directa',
        'Estabilizador Seakeeper y hélice de proa y popa',
        '5 cabinas, 4 baños — distribución amplia para 12 personas',
        'Plataforma de baño hidráulica y pasarela hidráulica',
        'Velocidad de crucero 24 nudos, máxima 30 nudos, autonomía 300 mn',
      ],
      en: [
        '2x MAN 1,300 HP engines with 2,000 hours, direct drive',
        'Seakeeper stabilizer plus bow and stern thrusters',
        '5 cabins, 4 heads — spacious layout for 12 persons',
        'Hydraulic swim platform and hydraulic gangway',
        'Cruising speed 24 kn, max 30 kn, range 300 nm',
      ],
    },
    images: ["imagenes web/astondoa-72-glx/hf_20260320_234050_7d480890-144f-41d3-a83e-11cf130524ee.jpeg", "imagenes web/astondoa-72-glx/hf_20260320_234417_bde8b9e5-8d06-4443-8c16-5fda168b2281.jpeg", "imagenes web/astondoa-72-glx/hf_20260320_234718_7842a2ee-0c67-45b8-889d-e3fd4589c8f6.jpeg", "imagenes web/astondoa-72-glx/hf_20260320_235113_7470390e-f764-4b12-9080-9a80874db721.jpeg", "imagenes web/astondoa-72-glx/hf_20260320_235205_67717869-bf40-4dd3-91c2-d27e5d639f0f.jpeg", "imagenes web/astondoa-72-glx/hf_20260320_235516_a993143f-3479-4490-ae7a-4eac197feb1b.png", "imagenes web/astondoa-72-glx/hf_20260320_235856_63ccd66d-5bc2-4fd0-bd90-98e438fa1ae0.png", "imagenes web/astondoa-72-glx/hf_20260321_000348_7d633ea1-4d2f-4a82-9eed-41d392d66cb7.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_000754_8670f63a-b45b-410c-b751-cfe9bdc12c95.png", "imagenes web/astondoa-72-glx/hf_20260321_001255_1d9e6e6a-a0e9-4707-891d-0bfca4b2ea0b.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_001609_bd92e027-4073-4464-8014-f571885de6d0.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_002548_6c9ceeaa-2277-4bad-b1dc-a1faf67b4c28.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_003129_d815fc56-c485-4b0d-8d6a-59aec808e1d2.png", "imagenes web/astondoa-72-glx/hf_20260321_003750_e48f9858-5132-4b3c-9d62-124358ef781c.png", "imagenes web/astondoa-72-glx/hf_20260321_005801_b0559e3e-d51c-468b-ada8-45ee17516e8f.png", "imagenes web/astondoa-72-glx/hf_20260321_010706_d89c685d-c47b-4930-a42d-356159d2c5ff.png", "imagenes web/astondoa-72-glx/hf_20260321_011936_f0b79b6a-3277-466c-98cc-7ce65ab178d2.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_012128_0a436bde-b4f5-4170-b139-442751c343e8.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_012408_2b8a931b-67b9-41d5-93a4-a259acebcc0b.png", "imagenes web/astondoa-72-glx/hf_20260321_012721_b85f5365-7bb2-43f7-a056-bf02ae5a3a65.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_012909_f19174a6-9f9e-40a5-9c75-11b3265bcc30.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_013126_ff65d6f1-9ec5-4199-9257-7152c5cda687.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_013337_a9658b53-8a8b-49a3-8141-09d1215f1a87.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_013755_c3d320f6-3566-4743-8906-644235743060.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_022011_917e9b7a-80c4-4dc7-a4b6-c19496df7f81.png", "imagenes web/astondoa-72-glx/hf_20260321_025220_4b8088f9-21b4-4473-bead-c1bfbd737245.jpeg", "imagenes web/astondoa-72-glx/hf_20260321_025246_1d7f54eb-b8a3-4d8f-8176-4e561b1b4ab1.jpeg"]
  },
  {
    slug: "astondoa-53-glx-1993",
    name: "Astondoa 53 GLX",
    brand: "Astondoa",
    type: "motor",
    year: 1993,
    price: 195000,
    length: 15.85,
    beam: 4.72,
    draft: 2.45,
    location: "Barcelona",
    condition: "used",
    badges: [],
    engines: "2x Detroit 550 CV — 1.100 CV",
    fuel: "Diesel",
    cabins: 3,
    berths: 6,
    heads: 2,
    description: {
      es: "Astondoa 53 GLX, crucero monocasco de fibra de vidrio con 15,85 metros de eslora, manga de 4,72 metros y calado de 2,45 metros. Desplazamiento de 30.270 kg.\n\nTres cabinas, cocina completa, dos baños. Doble tripulación. Motores Detroit 2 × 550 CV con generador. 850 horas de motor.\n\nBuen estado general, mantenimiento al día. Velocidad de crucero 27 nudos, velocidad máxima 32 nudos.\n\nEquipado con radar, piloto automático, sonda, VHF, hélice de proa, controles eléctricos, GPS plotter, molinete eléctrico, pasarela hidráulica, neumática con motor fueraborda, toldo de fly.",
      en: "Astondoa 53 GLX, fiberglass cruiser monohull with 15.85m LOA, 4.72m beam and 2.45m draft. Displacement 30,270 kg.\n\nThree cabins, full galley, two heads. Double crew quarters. Detroit 2 × 550 HP engines with generator. 850 engine hours.\n\nGood overall condition, maintenance up to date. Cruising speed 27 knots, max speed 32 knots.\n\nEquipped with radar, autopilot, sounder, VHF, bow thruster, electric controls, GPS plotter, electric windlass, hydraulic gangway, tender with outboard motor, fly cover."
    },
    specs: {
      es: { "Eslora": "15,85 m", "Manga": "4,72 m", "Calado": "2,45 m", "Motor": "2x Detroit 550 CV", "Combustible": "Diesel", "Cabinas": "3", "Literas": "6", "Baños": "2", "Año": "1993", "Puerto": "Barcelona" },
      en: { "Length": "15.85 m", "Beam": "4.72 m", "Draft": "2.45 m", "Engine": "2x Detroit 550 HP", "Fuel": "Diesel", "Cabins": "3", "Berths": "6", "Heads": "2", "Year": "1993", "Port": "Barcelona" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Generador'],
        'Electrónica': ['Sonda', 'Centro de navegacion', 'Plotter', 'Piloto automatico', 'Compas', 'GPS', 'VHF'],
        'Interior': ['Helice de proa'],
        'Exterior': ['Neumatica']
      },
      en: {
        'Electrical': ['Generator'],
        'Electronics': ['Depth sounder', 'Nav center', 'Plotter', 'Autopilot', 'Compass', 'GPS', 'VHF'],
        'Interior': ['Bow thruster'],
        'Exterior': ['Tender']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Detroit', modelo: '', potencia: '550 CV', horas: '850', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '' },
          { marca: 'Detroit', modelo: '', potencia: '550 CV', horas: '850', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '' }
        ],
        potenciaTotal: '1.100 CV'
      },
      en: {
        motors: [
          { brand: 'Detroit', model: '', power: '550 HP', hours: '850', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '' },
          { brand: 'Detroit', model: '', power: '550 HP', hours: '850', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '' }
        ],
        totalPower: '1,100 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '15,85 m', 'Manga': '4,72 m', 'Calado': '2,45 m', 'Desplazamiento': '30.270 kg', 'Casco': 'Fibra de vidrio', 'Agua dulce': '2.000 L', 'Combustible': '2.000 L', 'Cabinas': '3', 'Banos': '2' },
      en: { 'LOA': '15.85 m', 'Beam': '4.72 m', 'Draft': '2.45 m', 'Displacement': '30,270 kg', 'Hull': 'Fiberglass', 'Freshwater': '2,000 L', 'Fuel': '2,000 L', 'Cabins': '3', 'Heads': '2' }
    },
    highlights: {
      es: [
        'Motores Detroit 2x 550 CV con solo 850 horas',
        '3 cabinas, 2 baños, doble tripulación',
        'Velocidad de crucero 27 nudos, máxima 32 nudos',
        'Hélice de proa, pasarela hidráulica, neumática con fueraborda',
        'Generador y electrónica completa con radar y piloto automático',
      ],
      en: [
        'Detroit 2x 550 HP engines with only 850 hours',
        '3 cabins, 2 heads, double crew quarters',
        'Cruising speed 27 knots, max 32 knots',
        'Bow thruster, hydraulic gangway, tender with outboard',
        'Generator and full electronics with radar and autopilot',
      ],
    },
    images: ["imagenes web/astondoa-53-glx/hf_20260318_152203_06971b46-ec2d-45eb-b214-42c28430a710.jpeg", "imagenes web/astondoa-53-glx/hf_20260318_154621_98d47afa-447e-48f6-a1a2-91a1f1fb876b.jpeg", "imagenes web/astondoa-53-glx/hf_20260318_222742_3f2c0831-2db5-4e3e-9be8-b3584222526c.jpeg", "imagenes web/astondoa-53-glx/hf_20260318_223.jpeg", "imagenes web/astondoa-53-glx/hf_20260318_225042_48a20b9d-0843-4a27-81c8-3fcb7c12e14c.jpeg", "imagenes web/astondoa-53-glx/hf_20260319_001438_666fff2e-09cd-444c-92fe-39335314b2ba.jpeg", "imagenes web/astondoa-53-glx/hf_20260319_004541_3e882324-13f8-40f5-b41d-f3b005500c91.jpeg", "imagenes web/astondoa-53-glx/hf_20260319_010830_066768e0-22fd-4357-9f37-7ff1f92a8c83.png", "imagenes web/astondoa-53-glx/hf_20260320_050148_a5fd9830-46a5-4f9a-8856-6d9910b8a854.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_054600_26253869-6f9d-4aa1-8a07-e8e565d90eae.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_054850_efdd587a-29af-4b0b-a5d7-ce64f5212122.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_060122_030ef460-e3f5-4308-8241-01521599e1a6.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_060146_9095530f-9f4b-4c19-908c-ca21b1ebaf39.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_072038_55ae2195-2484-4778-b0e8-1cfc8008461d.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_072218_e61929db-426b-4514-bba2-977350592868.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_072821_7bf0e1ba-6a43-45c6-ae7e-6c9fb0aa7169.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_072908_1e4fc728-ffa8-4681-af55-788130b91c91.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_073444_f42973c3-3767-4bf3-a863-6742032a6218.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_073958_72da10a4-2678-4836-ade8-960a26e71ab1.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_074034_11abb227-6b53-4427-91cb-6cbc0908c38a.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_074546_2e26cc95-e96d-4e3d-9c9e-bb7bd7bc20e3.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_074721_3879f069-18a3-4ed8-93bf-cceabe20c44f.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_074900_3df7b7f1-63b0-4a2f-99d9-cb9686bf0666.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_075213_e3a8eba4-53c0-4886-b76d-06fb1e1848ff.jpeg", "imagenes web/astondoa-53-glx/hf_20260320_075825_6635e1a4-46f4-4106-931f-56e4e26d9f44.jpeg"]
  },
  {
    slug: "astondoa-39-2002",
    name: "Astondoa 39",
    brand: "Astondoa",
    type: "motor",
    year: 2002,
    price: 135000,
    length: 11.95,
    beam: 4.00,
    draft: 1.10,
    location: "El Masnou",
    condition: "used",
    badges: ["stock", "price-drop"],
    engines: "2x Volvo TAMD 63PA — 732 CV",
    fuel: "Diesel",
    cabins: 2,
    berths: 4,
    heads: 1,
    description: {
      es: "Astondoa 39, embarcación compacta y manejable con 11,95 metros de eslora. Perfecta para escapadas de fin de semana.\n\nDos cabinas, un baño, bañera amplia con teca. Motores Volvo TAMD 63PA con potencia total de 732 CV. Velocidad de crucero 20 nudos, máxima 25 nudos.\n\nEquipado con aire acondicionado, calefacción, hélice de proa, generador, inversor. Pasarela hidráulica, balsa salvavidas. Electrónica completa con radar, piloto automático, GPS plotter, sonda, VHF.\n\nAmarre disponible en el Port Esportiu de El Masnou.",
      en: "Astondoa 39, compact and manageable boat with 11.95m LOA. Perfect for weekend getaways.\n\nTwo cabins, one head, spacious teak cockpit. Volvo TAMD 63PA engines with 732 HP total power. Cruising speed 20 knots, max 25 knots.\n\nEquipped with air conditioning, heating, bow thruster, generator, inverter. Hydraulic gangway, life raft. Full electronics with radar, autopilot, GPS plotter, sounder, VHF.\n\nBerth available at Port Esportiu de El Masnou."
    },
    specs: {
      es: { "Eslora": "11,95 m", "Manga": "4,00 m", "Calado": "1,10 m", "Motor": "2x Volvo TAMD 63PA — 732 CV", "Combustible": "Diesel", "Cabinas": "2", "Literas": "4", "Baños": "1", "Año": "2002", "Puerto": "El Masnou" },
      en: { "Length": "11.95 m", "Beam": "4.00 m", "Draft": "1.10 m", "Engine": "2x Volvo TAMD 63PA — 732 HP", "Fuel": "Diesel", "Cabins": "2", "Berths": "4", "Heads": "1", "Year": "2002", "Port": "El Masnou" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente', 'Generador', 'Inversor'],
        'Electrónica': ['Sonda', 'Radar', 'Corredera', 'Detector de radar', 'Instrumentos de viento', 'TV', 'Plotter', 'Piloto automatico', 'Radio', 'Compas', 'CD', 'GPS', 'Altavoces de banera', 'VHF'],
        'Interior': ['Helice de proa', 'Bombas de sentina electricas/manuales', 'Aire acondicionado', 'WC electrico', 'Calefacción', 'Agua caliente', 'Frigorifico', 'Congelador', 'Cargador de baterias'],
        'Exterior': ['Teca en banera', 'Pasarela hidraulica', 'Balsa salvavidas']
      },
      en: {
        'Electrical': ['Shore power', 'Generator', 'Inverter'],
        'Electronics': ['Depth sounder', 'Radar', 'Log/speed', 'Radar detector', 'Wind instruments', 'TV', 'Plotter', 'Autopilot', 'Radio', 'Compass', 'CD', 'GPS', 'Cockpit speakers', 'VHF'],
        'Interior': ['Bow thruster', 'Electric/manual bilge pumps', 'Air conditioning', 'Electric WC', 'Heating', 'Hot water', 'Fridge', 'Freezer', 'Battery charger'],
        'Exterior': ['Teak cockpit', 'Hydraulic gangway', 'Life raft']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Volvo', modelo: 'TAMD 63PA', potencia: '366 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '' },
          { marca: 'Volvo', modelo: 'TAMD 63PA', potencia: '366 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '' }
        ],
        potenciaTotal: '732 CV'
      },
      en: {
        motors: [
          { brand: 'Volvo', model: 'TAMD 63PA', power: '366 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '' },
          { brand: 'Volvo', model: 'TAMD 63PA', power: '366 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '' }
        ],
        totalPower: '732 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '11,95 m', 'Manga': '4,00 m', 'Casco': 'Fibra de vidrio, monocasco', 'Velocidad crucero': '20 nudos', 'Velocidad máxima': '25 nudos' },
      en: { 'LOA': '11.95 m', 'Beam': '4.00 m', 'Hull': 'Fiberglass, monohull', 'Cruising speed': '20 kn', 'Max speed': '25 kn' }
    },
    highlights: {
      es: [
        'Motores Volvo TAMD 63PA — 732 CV total',
        'Aire acondicionado, calefacción, generador e inversor',
        'Hélice de proa y pasarela hidráulica',
        'Electrónica completa: radar, piloto automático, GPS plotter',
        'Amarre disponible en El Masnou',
      ],
      en: [
        'Volvo TAMD 63PA engines — 732 HP total',
        'Air conditioning, heating, generator and inverter',
        'Bow thruster and hydraulic gangway',
        'Full electronics: radar, autopilot, GPS plotter',
        'Berth available at El Masnou',
      ],
    },
    images: ["imagenes web/astondoa-39/hf_20260324_004843_15fba525-6b07-4778-8e8a-8d19dbcba4cc.jpeg", "imagenes web/astondoa-39/hf_20260324_004938_432eec0c-5e9f-4b7e-a29b-90aabe41f7fa.jpeg", "imagenes web/astondoa-39/hf_20260324_005337_8154186a-b5f7-4f2e-806e-31ba992a5c34.jpeg", "imagenes web/astondoa-39/hf_20260324_005457_0715ec97-ae87-44bf-80c1-328ec8baa1d0.jpeg", "imagenes web/astondoa-39/hf_20260324_005839_7689154a-9a16-489e-9a62-74dc73c43df3.jpeg", "imagenes web/astondoa-39/hf_20260324_010001_a621edfb-a988-44b3-84ba-0512d1ee1208.jpeg", "imagenes web/astondoa-39/hf_20260324_010352_19613452-e98e-48f5-9d61-c562a92a8f82.jpeg", "imagenes web/astondoa-39/hf_20260324_010556_ca382bc9-031f-4370-8283-8cf695179e57.jpeg", "imagenes web/astondoa-39/hf_20260324_010904_8449f1d9-1597-401a-8688-46d153436b1a.jpeg", "imagenes web/astondoa-39/hf_20260324_011118_463b71e0-20b3-491f-9020-f040bebdd90e.jpeg", "imagenes web/astondoa-39/hf_20260324_011449_07d5b33c-da6b-4d66-8e26-2883e79dbd37.png", "imagenes web/astondoa-39/hf_20260324_011617_f7e371bb-a843-452a-9483-e1519d15ebcd.png", "imagenes web/astondoa-39/hf_20260324_012001_77fbae40-1ec0-4b8d-a9c2-16b72bbefc65.jpeg", "imagenes web/astondoa-39/hf_20260324_012121_9f6bf161-bf16-49a8-a2cd-c366b54eb826.jpeg", "imagenes web/astondoa-39/hf_20260324_012537_b6837ac5-0600-4618-9503-bd4e6bc0120b.jpeg", "imagenes web/astondoa-39/hf_20260324_013102_97b7095f-6c19-4021-ad01-f375635d271f.jpeg", "imagenes web/astondoa-39/hf_20260324_013144_5ca800e8-b0a1-426a-b9bc-b3a3233f1870.jpeg", "imagenes web/astondoa-39/hf_20260324_020342_feb45fdf-7b23-4b72-8ac9-6ee9e405cb27.jpeg", "imagenes web/astondoa-39/hf_20260324_020939_8ce1f72d-bceb-48b5-b333-3a5f3e09e1a2.jpeg", "imagenes web/astondoa-39/z.jpeg"]
  },
  {
    slug: "navalia-60-2006",
    name: "Navalia 60",
    brand: "Navalia",
    type: "motor",
    year: 2006,
    price: 360000,
    length: 18.00,
    beam: 5.20,
    draft: 1.50,
    location: "Barcelona",
    condition: "used",
    badges: [],
    engines: "2x Caterpillar — 1.073 CV",
    fuel: "Diesel",
    cabins: 4,
    berths: 6,
    heads: 2,
    description: {
      es: "Navalia 60 de fabricación española, año 2006. Crucero de 18 metros de eslora con casco de fibra de vidrio.\n\nCuatro cabinas, dos baños. Motores Caterpillar en muy buen estado con velocidad de crucero de 20 nudos y velocidad máxima de 30 nudos. Molinete eléctrico.\n\nTeca en bañera y pasillos laterales. Equipado con joystick, pasarela hidráulica, ducha de bañera, neumática, cojines de bañera y mesa. Electrónica con radar, piloto automático, GPS plotter, sonda, VHF, detector de radar.\n\nRevisada y lista para vacaciones largas.",
      en: "Spanish-built Navalia 60, year 2006. Cruiser with 18m LOA and fiberglass hull.\n\nFour cabins, two heads. Caterpillar engines in very good condition with cruising speed of 20 knots and max speed of 30 knots. Electric windlass.\n\nTeak cockpit and side decks. Equipped with joystick, hydraulic gangway, cockpit shower, tender, cockpit cushions and table. Electronics with radar, autopilot, GPS plotter, sounder, VHF, radar detector.\n\nSurveyed and ready for extended holidays."
    },
    specs: {
      es: { "Eslora": "18,00 m", "Manga": "5,20 m", "Calado": "1,50 m", "Motor": "2x Caterpillar — 1.073 CV", "Combustible": "Diesel", "Cabinas": "4", "Literas": "6", "Baños": "2", "Año": "2006", "Puerto": "Barcelona" },
      en: { "Length": "18.00 m", "Beam": "5.20 m", "Draft": "1.50 m", "Engine": "2x Caterpillar — 1,073 HP", "Fuel": "Diesel", "Cabins": "4", "Berths": "6", "Heads": "2", "Year": "2006", "Port": "Barcelona" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente', 'Generador'],
        'Electrónica': ['Sonda', 'Radar', 'Detector de radar', 'Repetidores', 'Plotter', 'Piloto automatico', 'Radio', 'Compas', 'CD', 'GPS', 'Altavoces de banera', 'VHF'],
        'Interior': ['Helice de proa', 'Bombas de sentina electricas/manuales', 'Microondas', 'WC marino', 'Aire acondicionado', 'WC electrico', 'Calefacción', 'Agua caliente', 'Frigorifico', 'Congelador', 'Bomba de agua salada', 'Cargador de baterias'],
        'Exterior': ['Teca en banera', 'Ducha de banera', 'Teca en pasillos laterales', 'Soporte fueraborda', 'Joystick', 'Pasarela hidraulica', 'Reflector de radar', 'Neumatica', 'Cojines de banera', 'Mesa de banera', 'Escalera de bano']
      },
      en: {
        'Electrical': ['Shore power', 'Generator'],
        'Electronics': ['Depth sounder', 'Radar', 'Radar detector', 'Repeaters', 'Plotter', 'Autopilot', 'Radio', 'Compass', 'CD', 'GPS', 'Cockpit speakers', 'VHF'],
        'Interior': ['Bow thruster', 'Electric/manual bilge pumps', 'Microwave', 'Marine WC', 'Air conditioning', 'Electric WC', 'Heating', 'Hot water', 'Fridge', 'Freezer', 'Saltwater pump', 'Battery charger'],
        'Exterior': ['Teak cockpit', 'Cockpit shower', 'Teak side decks', 'Outboard bracket', 'Joystick', 'Hydraulic gangway', 'Radar reflector', 'Tender', 'Cockpit cushions', 'Cockpit table', 'Bathing ladder']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Caterpillar', modelo: '', potencia: '536 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '4 palas, bronce' },
          { marca: 'Caterpillar', modelo: '', potencia: '536 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '4 palas, bronce' }
        ],
        potenciaTotal: '1.073 CV'
      },
      en: {
        motors: [
          { brand: 'Caterpillar', model: '', power: '536 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '4 blades, bronze' },
          { brand: 'Caterpillar', model: '', power: '536 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '4 blades, bronze' }
        ],
        totalPower: '1,073 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '18,00 m', 'Manga': '5,20 m', 'Calado': '1,50 m', 'Casco': 'Fibra de vidrio', 'Cabinas': '4', 'Banos': '2', 'Velocidad crucero': '20 nudos', 'Velocidad máxima': '30 nudos' },
      en: { 'LOA': '18.00 m', 'Beam': '5.20 m', 'Draft': '1.50 m', 'Hull': 'Fiberglass', 'Cabins': '4', 'Heads': '2', 'Cruising speed': '20 kn', 'Max speed': '30 kn' }
    },
    highlights: {
      es: [
        'Motores Caterpillar 2x 536 CV en muy buen estado',
        '4 cabinas, 2 baños — fabricación española',
        'Teca en bañera y pasillos laterales',
        'Joystick, pasarela hidráulica, hélice de proa',
        'Velocidad de crucero 20 nudos, máxima 30 nudos',
      ],
      en: [
        'Caterpillar 2x 536 HP engines in very good condition',
        '4 cabins, 2 heads — Spanish built',
        'Teak cockpit and side decks',
        'Joystick, hydraulic gangway, bow thruster',
        'Cruising speed 20 kn, max 30 kn',
      ],
    },
    images: ["imagenes web/navalia-60/hf_20260324_003017_844a0ce5-ee3a-440c-975b-3be2b4e0c292.jpeg", "imagenes web/navalia-60/hf_20260323_233714_0cc996f8-37da-4cc2-9117-cbfa7ece3026.jpeg", "imagenes web/navalia-60/hf_20260323_234733_f453537f-7899-4361-9481-7db2c5af5937.jpeg", "imagenes web/navalia-60/hf_20260323_234756_f68ddf7b-66f0-4208-aef9-32e83c61e237.jpeg", "imagenes web/navalia-60/hf_20260323_235343_39de4c0f-a9f0-403a-9d8a-08bfe907fbdc.jpeg", "imagenes web/navalia-60/hf_20260323_235839_d28541bf-1907-4235-9759-917b9540917e.jpeg", "imagenes web/navalia-60/hf_20260323_235929_9ad8ce81-78bf-4064-b806-ee9126ca4b98.jpeg", "imagenes web/navalia-60/hf_20260324_000339_2dd3b889-d129-4ae4-b140-c3ac68ae9eca.jpeg", "imagenes web/navalia-60/hf_20260324_000847_37c4af14-4ff9-4ab2-b458-8ae4293d2ac9.jpeg", "imagenes web/navalia-60/hf_20260324_001351_109f27ff-5f95-4fdb-ab3b-3b3320817830.jpeg", "imagenes web/navalia-60/hf_20260324_001845_a8f50f4e-ce0a-42f3-a624-373974cf7210.png", "imagenes web/navalia-60/hf_20260324_002452_72ebec1c-9e75-4337-a97c-4be913ef03d2.png", "imagenes web/navalia-60/hf_20260323_233241_b67cdada-061a-4c59-9645-3cbe11a9a06d.jpeg", "imagenes web/navalia-60/hf_20260324_003751_14a2db9b-748e-49b1-b441-5214bcc01785.jpeg"]
  },
  {
    slug: "sunseeker-manhattan-50-2004",
    name: "Sunseeker Manhattan 50",
    brand: "Sunseeker",
    type: "motor",
    year: 2004,
    price: 359000,
    length: 15.66,
    beam: 4.53,
    draft: 1.17,
    location: "El Masnou",
    condition: "used",
    badges: ["stock"],
    engines: "2x MAN D2876LE405 — 888 CV",
    fuel: "Diesel",
    cabins: 4,
    berths: 6,
    heads: 2,
    description: {
      es: "Sunseeker Manhattan 50, un icono del diseño británico en buen estado y con mantenimiento al día. 15,66 metros de eslora.\n\nFlybridge con solárium y asientos envolventes. Interior luminoso con salón de acabados en madera noble, cocina totalmente equipada. Tres cómodas cabinas incluyendo suite principal con baño privado.\n\nMotores MAN D2876LE405 con 888 CV de potencia total. Transmisión directa. Velocidad de crucero 18 nudos, máxima 28 nudos.\n\nEquipado con hélice de proa, aire acondicionado, calefacción, generador, inversor. Teca en bañera. Pasarela hidráulica, neumática, balsa salvavidas. Electrónica completa con radar, piloto automático, GPS plotter, sonda, VHF.",
      en: "Sunseeker Manhattan 50, an icon of British design in good condition with maintenance up to date. 15.66m LOA.\n\nFlybridge with solarium and enveloping seats. Luminous interior with salon finished in noble woods, fully equipped galley. Three comfortable cabins including master suite with private bathroom.\n\nMAN D2876LE405 engines with 888 HP total power. Direct drive transmission. Cruising speed 18 knots, max 28 knots.\n\nEquipped with bow thruster, air conditioning, heating, generator, inverter. Teak cockpit. Hydraulic gangway, tender, life raft. Full electronics with radar, autopilot, GPS plotter, sounder, VHF."
    },
    specs: {
      es: { "Eslora": "15,66 m", "Manga": "4,53 m", "Calado": "1,17 m", "Motor": "2x MAN D2876LE405 — 888 CV", "Combustible": "Diesel", "Cabinas": "4", "Literas": "6", "Baños": "2", "Año": "2004", "Puerto": "El Masnou" },
      en: { "Length": "15.66 m", "Beam": "4.53 m", "Draft": "1.17 m", "Engine": "2x MAN D2876LE405 — 888 HP", "Fuel": "Diesel", "Cabins": "4", "Berths": "6", "Heads": "2", "Year": "2004", "Port": "El Masnou" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente', 'Generador', 'Inversor'],
        'Electrónica': ['Sonda', 'Radar', 'Corredera', 'Detector de radar', 'Repetidores', 'TV', 'Plotter', 'Piloto automatico', 'Radio', 'Compas', 'GPS', 'Altavoces de banera', 'VHF'],
        'Interior': ['Helice de proa', 'Bombas de sentina electricas/manuales', 'Horno', 'Microondas', 'Aire acondicionado', 'WC electrico', 'Calefacción', 'Agua caliente', 'Frigorifico', 'Congelador', 'Bomba de agua salada', 'Cargador de baterias'],
        'Exterior': ['Teca en banera', 'Ducha de banera', 'Pasarela hidraulica', 'Reflector de radar', 'Neumatica', 'Balsa salvavidas', 'Cojines de banera', 'Mesa de banera', 'Escalera de bano']
      },
      en: {
        'Electrical': ['Shore power', 'Generator', 'Inverter'],
        'Electronics': ['Depth sounder', 'Radar', 'Log/speed', 'Radar detector', 'Repeaters', 'TV', 'Plotter', 'Autopilot', 'Radio', 'Compass', 'GPS', 'Cockpit speakers', 'VHF'],
        'Interior': ['Bow thruster', 'Electric/manual bilge pumps', 'Oven', 'Microwave', 'Air conditioning', 'Electric WC', 'Heating', 'Hot water', 'Fridge', 'Freezer', 'Saltwater pump', 'Battery charger'],
        'Exterior': ['Teak cockpit', 'Cockpit shower', 'Hydraulic gangway', 'Radar reflector', 'Tender', 'Life raft', 'Cockpit cushions', 'Cockpit table', 'Bathing ladder']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'MAN', modelo: 'D2876LE405', potencia: '444 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: 'Transmision directa', helice: '4 palas, bronce' },
          { marca: 'MAN', modelo: 'D2876LE405', potencia: '444 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: 'Transmision directa', helice: '4 palas, bronce' }
        ],
        potenciaTotal: '888 CV'
      },
      en: {
        motors: [
          { brand: 'MAN', model: 'D2876LE405', power: '444 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: 'Direct drive', propeller: '4 blades, bronze' },
          { brand: 'MAN', model: 'D2876LE405', power: '444 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: 'Direct drive', propeller: '4 blades, bronze' }
        ],
        totalPower: '888 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '15,66 m', 'Manga': '4,53 m', 'Casco': 'Fibra de vidrio', 'Molinete electrico': 'Si', 'Agua dulce': '500 L', 'Combustible': '2 x 1.250 L', 'Cabinas': '4', 'Velocidad crucero': '18 nudos', 'Velocidad máxima': '28 nudos' },
      en: { 'LOA': '15.66 m', 'Beam': '4.53 m', 'Hull': 'Fiberglass', 'Electric windlass': 'Yes', 'Freshwater': '500 L', 'Fuel': '2 x 1,250 L', 'Cabins': '4', 'Cruising speed': '18 kn', 'Max speed': '28 kn' }
    },
    highlights: {
      es: [
        'Motores MAN D2876LE405 — 888 CV, transmisión directa',
        'Flybridge con solárium y asientos envolventes',
        '4 cabinas incluyendo suite principal con baño privado',
        'Hélice de proa, aire acondicionado, calefacción, generador e inversor',
        'Velocidad de crucero 18 nudos, máxima 28 nudos',
      ],
      en: [
        'MAN D2876LE405 engines — 888 HP, direct drive',
        'Flybridge with solarium and enveloping seats',
        '4 cabins including master suite with private bathroom',
        'Bow thruster, air conditioning, heating, generator and inverter',
        'Cruising speed 18 kn, max 28 kn',
      ],
    },
    images: ["imagenes web/sunseeker-manhattan-50/hf_20260322_045807_b5c241f0-672b-4c58-9cf9-6040a6f6d9c4.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_030928_2c51028c-a633-41a8-a377-a4e615a93366.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_031639_85a5ea5d-fa8f-4b45-8888-1218473ac2dc.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_031722_78a3b27d-685b-4fd0-a7ed-4daeb5f69aa3.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_032334_d56b132c-30af-443a-b940-15750b2f7173.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_032404_a97b73a5-6015-4f38-a2c0-8693133af8be.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_032853_73267fd5-5c29-4323-8b21-c41f8089b2f5.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_033134_e0061bb2-99f8-4499-8394-90e5eafcb77e.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_033519_7cc3978e-a54c-4f16-adae-9a0f994faed5.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_033551_a0410061-6681-4a40-964b-f13f28df845a.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_034107_bf1424dd-59c9-4bc9-991d-4efb2c37a99e.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_034227_4c35739c-f7b2-402d-9535-4748d4e16cba.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_034729_e637e0fc-8624-43cc-acf9-2a96b6338cd2.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_034818_9a0a420c-94a8-4988-ba5b-974846aa4d2b.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_035224_b600550a-ae19-4074-b3aa-fff0e65e24fe.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_035431_11d7983c-abf9-43d3-8326-36359a0a6b8d.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_043101_3e5fdbde-2829-4f63-a647-c4afccf72f86.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_030855_5430fefe-a3bb-4554-9aaa-3ece892f6f50.jpeg"]
  },
  {
    slug: "hanse-470-2007",
    name: "Hanse 470",
    brand: "Hanse",
    type: "sail",
    year: 2007,
    price: 210000,
    length: 14.30,
    beam: 4.51,
    draft: 2.60,
    location: "Barcelona",
    condition: "used",
    badges: [],
    engines: "1x Volvo 101 CV",
    fuel: "Diesel",
    cabins: 3,
    berths: 6,
    heads: 2,
    description: {
      es: "Hanse 470, velero monocasco de fibra de vidrio con 14,30 metros de eslora. Astillero alemán de referencia.\n\nTres cabinas, dos baños. Motor interior Volvo de 101 CV con transmisión saildrive. Molinete eléctrico. Instalación eléctrica de 12V.\n\nVelas: mayor y génova enrollables. Teca en bañera y pasillos laterales. Equipado con ducha de bañera, pescantes, reflector de radar, balsa salvavidas, cojines y mesa de bañera, escalera de baño.\n\nElectrónica completa: radar, piloto automático, centro de navegación, GPS plotter, sonda, corredera, detector de radar, instrumentos de viento, VHF.\n\nDiseñado para navegación de calidad y estilo.",
      en: "Hanse 470, fiberglass monohull sailing yacht with 14.30m LOA. Leading German shipyard.\n\nThree cabins, two heads. Interior Volvo engine with 101 HP, sail drive transmission. Electric windlass. 12V electrical system.\n\nSails: roller furling mainsail and genoa. Teak cockpit and side decks. Equipped with cockpit shower, davits, radar reflector, life raft, cockpit cushions and table, bathing ladder.\n\nFull electronics: radar, autopilot, navigation center, GPS plotter, sounder, log/speed, radar detector, wind instruments, VHF.\n\nDesigned for quality and style sailing."
    },
    specs: {
      es: { "Eslora": "14,30 m", "Manga": "4,51 m", "Calado": "2,60 m", "Motor": "1x Volvo 101 CV", "Combustible": "Diesel", "Cabinas": "3", "Literas": "6", "Baños": "2", "Año": "2007", "Puerto": "Barcelona" },
      en: { "Length": "14.30 m", "Beam": "4.51 m", "Draft": "2.60 m", "Engine": "1x Volvo 101 HP", "Fuel": "Diesel", "Cabins": "3", "Berths": "6", "Heads": "2", "Year": "2007", "Port": "Barcelona" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente'],
        'Electrónica': ['Sonda', 'Radar', 'Corredera', 'Detector de radar', 'Instrumentos de viento', 'Centro de navegacion', 'Plotter', 'Piloto automatico', 'Radio', 'Compas', 'CD', 'GPS', 'VHF'],
        'Interior': ['Bombas de sentina electricas/manuales', 'Horno', 'Microondas', 'WC marino', 'Calefacción', 'Agua caliente', 'Frigorifico', 'Bomba de agua salada', 'Cargador de baterias'],
        'Exterior': ['Teca en banera', 'Ducha de banera', 'Teca en pasillos laterales', 'Pasarela', 'Pescantes', 'Reflector de radar', 'Balsa salvavidas', 'Cojines de banera', 'Mesa de banera', 'Escalera de bano'],
        'Velas': ['Mayor enrollable', 'Genova enrollable']
      },
      en: {
        'Electrical': ['Shore power'],
        'Electronics': ['Depth sounder', 'Radar', 'Log/speed', 'Radar detector', 'Wind instruments', 'Nav center', 'Plotter', 'Autopilot', 'Radio', 'Compass', 'CD', 'GPS', 'VHF'],
        'Interior': ['Electric/manual bilge pumps', 'Oven', 'Microwave', 'Marine WC', 'Heating', 'Hot water', 'Fridge', 'Saltwater pump', 'Battery charger'],
        'Exterior': ['Teak cockpit', 'Cockpit shower', 'Teak side decks', 'Gangway', 'Davits', 'Radar reflector', 'Life raft', 'Cockpit cushions', 'Cockpit table', 'Bathing ladder'],
        'Sails': ['Roller furling mainsail', 'Roller furling genoa']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Volvo', modelo: '', potencia: '101 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: 'Saildrive', helice: '3 palas, aluminio' }
        ],
        potenciaTotal: '101 CV'
      },
      en: {
        motors: [
          { brand: 'Volvo', model: '', power: '101 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: 'Sail drive', propeller: '3 blades, aluminum' }
        ],
        totalPower: '101 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '14,30 m', 'Manga': '4,51 m', 'Calado': '2,60 m', 'Casco': 'Fibra de vidrio, monocasco', 'Molinete electrico': 'Si', 'Instalación eléctrica': '12V', 'Agua dulce': '400 L', 'Combustible': '250 L', 'Cabinas': '3', 'Banos': '2' },
      en: { 'LOA': '14.30 m', 'Beam': '4.51 m', 'Draft': '2.60 m', 'Hull': 'Fiberglass, monohull', 'Electric windlass': 'Yes', 'Electrical': '12V', 'Freshwater': '400 L', 'Fuel': '250 L', 'Cabins': '3', 'Heads': '2' }
    },
    highlights: {
      es: [
        'Velero Hanse 470 — astillero alemán de referencia',
        'Velas enrollables: mayor y génova',
        '3 cabinas, 2 baños — motor Volvo 101 CV con saildrive',
        'Teca en bañera y pasillos laterales',
        'Electrónica completa: radar, piloto automático, centro de navegación',
      ],
      en: [
        'Hanse 470 sailing yacht — leading German shipyard',
        'Roller furling mainsail and genoa',
        '3 cabins, 2 heads — Volvo 101 HP engine with sail drive',
        'Teak cockpit and side decks',
        'Full electronics: radar, autopilot, navigation center',
      ],
    },
    images: ["imagenes web/hanse-470/a.jpeg", "imagenes web/hanse-470/hf_20260322_074429_999836f6-29c8-4f55-94d3-c1e88aea7c40.png", "imagenes web/hanse-470/hf_20260322_075028_203fa6d8-dddd-464b-8b08-36cc31b84610.jpeg", "imagenes web/hanse-470/hf_20260322_082819_e08ab6c5-23ac-4a1f-84a9-75d61071f68d.jpeg", "imagenes web/hanse-470/hf_20260322_083342_ff16d777-b624-4869-bfde-0458b3af4163.jpeg", "imagenes web/hanse-470/hf_20260322_083551_cf7d2883-9e32-4ecb-a2d6-496525badc8a.png", "imagenes web/hanse-470/hf_20260322_084151_c20629aa-81f3-4219-b753-28f91e164ff8.png", "imagenes web/hanse-470/hf_20260322_084635_b32e4b59-6201-47d3-9b25-96ba0a0606b2.png", "imagenes web/hanse-470/hf_20260322_085700_60bcea76-5bff-43dc-8140-94b6e9174510.png", "imagenes web/hanse-470/hf_20260322_092104_9bd53bd9-f200-4a5a-b856-e8a3c482fdec.png", "imagenes web/hanse-470/hf_20260322_092157_c211f027-59c4-423c-a111-2d415bcaac22.png", "imagenes web/hanse-470/hf_20260322_093318_1e7e0306-5219-44b7-a281-55247eac66a2.jpeg", "imagenes web/hanse-470/hf_20260322_140750_ec6c1d96-f329-4ebd-9da0-43a7f3a4f1c1.jpeg", "imagenes web/hanse-470/hf_20260323_121437_d927f023-31bd-4051-9b02-98363dad8fd0.png", "imagenes web/hanse-470/hf_20260323_122402_da5b760d-4621-450d-98ec-5f570ec38ba4.jpeg", "imagenes web/hanse-470/hf_20260323_122508_ff76b5b8-8525-4436-a2df-c9b43ecde781.png", "imagenes web/hanse-470/hf_20260323_122905_7783ead4-c9e8-417e-b800-a17eff36a9f4.jpeg", "imagenes web/hanse-470/hf_20260323_123032_433c4b7e-7835-46ec-a55a-8f0c6e80ad68.jpeg", "imagenes web/hanse-470/hf_20260323_123400_6d1dcf11-9193-428d-904d-8f4ba961ead4.jpeg", "imagenes web/hanse-470/hf_20260323_123535_b8b756e7-538a-442c-adc0-38dbe3289744.jpeg", "imagenes web/hanse-470/hf_20260323_123928_461792b7-7315-499d-9fa0-3108df592aba.jpeg", "imagenes web/hanse-470/hf_20260323_124431_41103dc4-6d0b-48e9-88b7-aa5833e8f4b3.jpeg", "imagenes web/hanse-470/hf_20260323_125418_017fcf30-082a-4503-93b3-d9e0a6c6c507.jpeg", "imagenes web/hanse-470/hf_20260323_125747_ff40cae4-b34b-4bbb-b17b-776dac4e2b87.jpeg"]
  },
  {
    slug: "grand-banks-38-eastbay-ex-2002",
    name: "Grand Banks 38 Eastbay EX",
    brand: "Grand Banks",
    type: "motor",
    year: 2002,
    price: 175000,
    length: 12.45,
    beam: 4.00,
    draft: 1.18,
    location: "El Masnou",
    condition: "used",
    badges: ["new"],
    engines: "2x Caterpillar 3126B — 900 CV",
    fuel: "Diesel",
    cabins: 2,
    berths: 4,
    heads: 2,
    description: {
      es: "Grand Banks 38 Eastbay EX, una referencia atemporal en trawlers de calidad. Elegancia, calidad y estabilidad.\n\nCasco Deep V para una navegación suave y segura. Dos motores Caterpillar 3126B de 450 CV cada uno con solo 1.306 horas. Velocidad de crucero 22 nudos, máxima 28 nudos. Autonomía de 300 millas náuticas.\n\nEstilo Eastbay inconfundible: líneas clásicas, perfil bajo, cubierta de teca. Amplia bañera abierta con ducha. Madera maciza, detalles en latón, acabados tradicionales. Salón elevado con ventanas panorámicas.\n\nDos cabinas, dos baños. Hélice de popa, cocina eléctrica, microondas. Electrónica con radar, GPS, sonda, compás, VHF. Disponible para visita en El Masnou.",
      en: "Grand Banks 38 Eastbay EX, a timeless benchmark in quality trawlers. Elegance, quality and stability.\n\nDeep V hull for smooth and safe navigation. Two Caterpillar 3126B engines with 450 HP each and only 1,306 hours. Cruising speed 22 knots, max 28 knots. Range 300 nautical miles.\n\nUnmistakable Eastbay style: classic lines, low profile, teak deck. Wide open cockpit with shower. Solid wood, brass details, traditional finishes. Elevated salon with panoramic windows.\n\nTwo cabins, two heads. Stern thruster, electric galley, microwave. Electronics with radar, GPS, sounder, compass, VHF. Available for viewing in El Masnou."
    },
    specs: {
      es: { "Eslora": "12,45 m", "Manga": "4,00 m", "Calado": "1,18 m", "Motor": "2x Caterpillar 3126B — 900 CV", "Combustible": "Diesel", "Cabinas": "2", "Literas": "4", "Baños": "2", "Año": "2002", "Puerto": "El Masnou" },
      en: { "Length": "12.45 m", "Beam": "4.00 m", "Draft": "1.18 m", "Engine": "2x Caterpillar 3126B — 900 HP", "Fuel": "Diesel", "Cabins": "2", "Berths": "4", "Heads": "2", "Year": "2002", "Port": "El Masnou" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente'],
        'Electrónica': ['Sonda', 'Radar', 'Detector de radar', 'Compas', 'GPS', 'Altavoces de banera', 'VHF'],
        'Interior': ['Helice de popa', 'Bombas de sentina electricas/manuales', 'Horno electrico', 'Microondas', 'WC electrico', 'Agua caliente', 'Frigorifico', 'Cargador de baterias'],
        'Exterior': ['Teca en banera', 'Ducha de banera', 'Teca en pasillos laterales', 'Pasarela', 'Reflector de radar', 'Neumatica', 'Cojines de banera', 'Mesa de banera', 'Escalera de bano']
      },
      en: {
        'Electrical': ['Shore power'],
        'Electronics': ['Depth sounder', 'Radar', 'Radar detector', 'Compass', 'GPS', 'Cockpit speakers', 'VHF'],
        'Interior': ['Stern thruster', 'Electric/manual bilge pumps', 'Oven (electric)', 'Microwave', 'Electric WC', 'Hot water', 'Fridge', 'Battery charger'],
        'Exterior': ['Teak cockpit', 'Cockpit shower', 'Teak side decks', 'Gangway', 'Radar reflector', 'Tender', 'Cockpit cushions', 'Cockpit table', 'Bathing ladder']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Caterpillar', modelo: '3126B', potencia: '450 CV', horas: '1.306', combustible: 'Diesel', tipo: 'Interior', transmision: 'Transmision directa', helice: '3 palas, bronce' },
          { marca: 'Caterpillar', modelo: '3126B', potencia: '450 CV', horas: '1.306', combustible: 'Diesel', tipo: 'Interior', transmision: 'Transmision directa', helice: '3 palas, bronce' }
        ],
        potenciaTotal: '900 CV'
      },
      en: {
        motors: [
          { brand: 'Caterpillar', model: '3126B', power: '450 HP', hours: '1,306', fuel: 'Diesel', type: 'Inboard', transmission: 'Direct drive', propeller: '3 blades, bronze' },
          { brand: 'Caterpillar', model: '3126B', power: '450 HP', hours: '1,306', fuel: 'Diesel', type: 'Inboard', transmission: 'Direct drive', propeller: '3 blades, bronze' }
        ],
        totalPower: '900 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '12,45 m', 'Manga': '4,00 m', 'Calado': '1,18 m', 'Capacidad': '12 personas', 'Casco': 'Fibra de vidrio, Deep V', 'Instalación eléctrica': '24V', 'Molinete electrico': 'Si', 'Agua dulce': '380 L', 'Combustible': '1.306 L', 'Cabinas': '2', 'Banos': '2', 'Velocidad crucero': '22 nudos', 'Velocidad máxima': '28 nudos', 'Autonomía': '300 mn' },
      en: { 'LOA': '12.45 m', 'Beam': '4.00 m', 'Draft': '1.18 m', 'Capacity': '12 persons', 'Hull': 'Fiberglass, Deep V', 'Electrical': '24V', 'Electric windlass': 'Yes', 'Freshwater': '380 L', 'Fuel': '1,306 L', 'Cabins': '2', 'Heads': '2', 'Cruising speed': '22 kn', 'Max speed': '28 kn', 'Range': '300 nm' }
    },
    highlights: {
      es: [
        '2x Caterpillar 3126B — 900 CV con solo 1.306 horas',
        'Casco Deep V para navegación suave y segura',
        'Estilo Eastbay: cubierta de teca, madera maciza, detalles en latón',
        'Hélice de popa, velocidad de crucero 22 nudos, autonomía 300 mn',
        'Salón elevado con ventanas panorámicas',
      ],
      en: [
        '2x Caterpillar 3126B — 900 HP with only 1,306 hours',
        'Deep V hull for smooth and safe navigation',
        'Eastbay style: teak deck, solid wood, brass details',
        'Stern thruster, cruising speed 22 kn, range 300 nm',
        'Elevated salon with panoramic windows',
      ],
    },
    images: ["imagenes web/grand-banks-38-eastbay-ex/hf_20260322_060419_71948115-6161-48cb-b2d3-1f30de97800c.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_060446_cec57698-e726-4c9f-a21e-c86a682580a1.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_063038_c3f1f7e4-0951-40e4-beca-bc21a40d56ff.png", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_063047_5912da85-a6b8-4197-94a2-fd59ad9a2673.png", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_063850_fd07af78-eed5-4e1a-9b7c-969b219dae45.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_064512_acb34304-2efe-44b1-9ec0-825c4edf8256.png", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_064516_e82594d7-6baf-4ca7-9191-4cdc29d12a47.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_071027_8125a8cf-f145-40f9-932a-4c78b07a0fe4.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_072024_11014cf4-ac6f-4911-b960-183faf8d253e.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_072200_0296a96d-c872-4fb6-9d4a-18ecd930d26f.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_072629_afeb84d5-1a83-456d-838a-cfb625753ce1.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_072841_12470802-7b1a-43b0-9a74-ea55d0ac3f02.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_073208_a4ad450f-0ff5-448b-a7c7-2bc593130b45.jpeg", "imagenes web/grand-banks-38-eastbay-ex/hf_20260322_073426_7e56792d-a318-4543-b81f-bf470ef2ce63.jpeg"]
  },
  {
    slug: "rodman-900-flybridge-1996",
    name: "Rodman 900 FLY",
    brand: "Rodman",
    type: "motor",
    year: 1996,
    price: 39000,
    length: 9.00,
    beam: 3.30,
    draft: 0.90,
    location: "El Masnou",
    condition: "used",
    badges: ["stock", "price-drop"],
    engines: "1x Volvo 200 CV",
    fuel: "Diesel",
    cabins: 1,
    berths: 4,
    heads: 1,
    description: {
      es: "Rodman 900 Flybridge, embarcación española fiable y marinera. 9 metros de eslora, manga 3,30 metros.\n\nUna cabina, un baño, flybridge con buena visibilidad. Motor Volvo de 200 CV, diésel, instalación interior. Hélice de 3 palas en bronce.\n\nIdeal para salidas de fin de semana y pesca deportiva.\n\nEquipada con radar, piloto automático, sonda, corredera, detector de radar, GPS plotter, compás, VHF, altavoces en bañera. Balsa salvavidas. Toma de corriente.",
      en: "Rodman 900 Flybridge, a reliable and seaworthy Spanish boat. 9m LOA, 3.30m beam.\n\nOne cabin, one head, flybridge with good visibility. Volvo 200 HP diesel engine, inboard installation. 3-blade bronze propeller.\n\nIdeal for weekend outings and sport fishing.\n\nEquipped with radar, autopilot, sounder, log/speed, radar detector, GPS plotter, compass, VHF, cockpit speakers. Life raft. Shore power connection."
    },
    specs: {
      es: { "Eslora": "9,00 m", "Manga": "3,30 m", "Calado": "0,90 m", "Motor": "1x Volvo 200 CV", "Combustible": "Diesel", "Cabinas": "1", "Literas": "4", "Baños": "1", "Año": "1996", "Puerto": "El Masnou" },
      en: { "Length": "9.00 m", "Beam": "3.30 m", "Draft": "0.90 m", "Engine": "1x Volvo 200 HP", "Fuel": "Diesel", "Cabins": "1", "Berths": "4", "Heads": "1", "Year": "1996", "Port": "El Masnou" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente'],
        'Electrónica': ['Sonda', 'Radar', 'Corredera', 'Detector de radar', 'Plotter', 'Piloto automatico', 'Radio', 'Compas', 'GPS', 'Altavoces de banera', 'VHF'],
        'Exterior': ['Balsa salvavidas']
      },
      en: {
        'Electrical': ['Shore power'],
        'Electronics': ['Depth sounder', 'Radar', 'Log/speed', 'Radar detector', 'Plotter', 'Autopilot', 'Radio', 'Compass', 'GPS', 'Cockpit speakers', 'VHF'],
        'Exterior': ['Life raft']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Volvo', modelo: '', potencia: '200 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '3 palas, bronce' }
        ],
        potenciaTotal: '200 CV'
      },
      en: {
        motors: [
          { brand: 'Volvo', model: '', power: '200 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '3 blades, bronze' }
        ],
        totalPower: '200 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '9,00 m', 'Manga': '3,30 m', 'Casco': 'Fibra de vidrio' },
      en: { 'LOA': '9.00 m', 'Beam': '3.30 m', 'Hull': 'Fiberglass' }
    },
    highlights: {
      es: [
        'Motor Volvo 200 CV diésel, hélice de 3 palas en bronce',
        'Flybridge con buena visibilidad',
        'Electrónica completa: radar, piloto automático, GPS plotter, sonda',
        'Ideal para salidas de fin de semana y pesca deportiva',
      ],
      en: [
        'Volvo 200 HP diesel engine, 3-blade bronze propeller',
        'Flybridge with good visibility',
        'Full electronics: radar, autopilot, GPS plotter, sounder',
        'Ideal for weekend outings and sport fishing',
      ],
    },
    images: ["imagenes web/rodman-900-fly/hf_20260321_084916_b5456049-1e90-4e88-90a1-8b3064d7d7cb.jpeg", "imagenes web/rodman-900-fly/hf_20260321_074456_9b8a89d7-2f2a-410e-93ac-c2de6a49c5d0.jpeg", "imagenes web/rodman-900-fly/hf_20260321_074709_dbfea83a-9648-4e27-ae48-47c439fbbb2a.jpeg", "imagenes web/rodman-900-fly/hf_20260321_075359_e297c435-f731-4554-b2ba-a379615bf96f.jpeg", "imagenes web/rodman-900-fly/hf_20260321_075519_96f7c57a-b18a-4a16-88d7-73726c227541.jpeg", "imagenes web/rodman-900-fly/hf_20260321_080133_269dca23-f857-4a1f-a077-256c9c714d7a.jpeg", "imagenes web/rodman-900-fly/hf_20260321_080352_9316b141-8c90-4082-b6a9-7c66516254a8.jpeg", "imagenes web/rodman-900-fly/hf_20260321_080619_152d1480-1a97-48bc-8d99-b2229358e30a.jpeg", "imagenes web/rodman-900-fly/hf_20260321_081914_1d641430-21fa-4fd3-ba7f-c415295ab408.jpeg", "imagenes web/rodman-900-fly/hf_20260321_082406_842e8349-c110-462b-9d84-6e2639ed9cc8.jpeg", "imagenes web/rodman-900-fly/hf_20260321_082650_426bf1f4-5d86-4079-8a60-5c29cb77e767.png", "imagenes web/rodman-900-fly/hf_20260321_083012_e693f406-1796-4758-8ce3-0a5cfa3ca405.png", "imagenes web/rodman-900-fly/hf_20260321_083227_f0655709-5887-42bd-b55e-e7f288765a5e.png", "imagenes web/rodman-900-fly/hf_20260321_083646_c6d50367-b771-4a36-90fc-37946e35592c.jpeg", "imagenes web/rodman-900-fly/hf_20260321_083819_6840dd29-e29b-4075-8107-fe4c8d721cbe.jpeg", "imagenes web/rodman-900-fly/hf_20260321_073715_656d2341-d671-4ec2-b08b-246da7a6f441.png"]
  },
  {
    slug: "fjord-900-1990",
    name: "Fjord 900",
    brand: "Fjord",
    type: "motor",
    year: 1990,
    price: 29500,
    length: 9.00,
    beam: 3.00,
    draft: 0.80,
    location: "El Masnou",
    condition: "used",
    badges: ["stock"],
    engines: "2x Volvo 200 CV — 400 CV",
    fuel: "Diesel",
    cabins: 2,
    berths: 2,
    heads: 1,
    description: {
      es: "Fjord 900, diseño escandinavo funcional y robusto. Monocasco de fibra de vidrio con 9 metros de eslora, 3 metros de manga y calado de 0,80 metros. Desplazamiento de 3 toneladas.\n\nDos cabinas, doble tripulación, un baño, cocina equipada. Capacidad de agua 100 litros, combustible 800 litros.\n\nDos motores Volvo de 200 CV. GPS plotter, VHF, sonda, molinete eléctrico, escalera de baño, toldos.\n\nITV vigente. La embarcación más accesible de nuestra cartera.",
      en: "Fjord 900, functional and robust Scandinavian design. Fiberglass monohull with 9m LOA, 3m beam and 0.80m draft. Displacement 3 tonnes.\n\nTwo cabins, double crew, one head, equipped galley. Water capacity 100 litres, fuel capacity 800 litres.\n\nTwo Volvo 200 HP engines. GPS plotter, VHF, sounder, electric windlass, bathing ladder, awnings.\n\nSurvey valid. The most accessible vessel in our portfolio."
    },
    specs: {
      es: { "Eslora": "9,00 m", "Manga": "3,00 m", "Calado": "0,80 m", "Motor": "2x Volvo 200 CV", "Combustible": "Diesel", "Cabinas": "2", "Literas": "2", "Baños": "1", "Año": "1990", "Puerto": "El Masnou" },
      en: { "Length": "9.00 m", "Beam": "3.00 m", "Draft": "0.80 m", "Engine": "2x Volvo 200 HP", "Fuel": "Diesel", "Cabins": "2", "Berths": "2", "Heads": "1", "Year": "1990", "Port": "El Masnou" }
    },
    equipment: {
      es: {
        'Electrónica': ['GPS plotter', 'VHF', 'Sonda'],
        'Exterior': ['Molinete electrico', 'Escalera de bano', 'Toldos']
      },
      en: {
        'Electronics': ['GPS plotter', 'VHF', 'Depth sounder'],
        'Exterior': ['Electric windlass', 'Bathing ladder', 'Awnings']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Volvo', modelo: '', potencia: '200 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '' },
          { marca: 'Volvo', modelo: '', potencia: '200 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '' }
        ],
        potenciaTotal: '400 CV'
      },
      en: {
        motors: [
          { brand: 'Volvo', model: '', power: '200 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '' },
          { brand: 'Volvo', model: '', power: '200 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '' }
        ],
        totalPower: '400 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '9,00 m', 'Manga': '3,00 m', 'Calado': '0,80 m', 'Desplazamiento': '3 t', 'Casco': 'Fibra de vidrio', 'Agua dulce': '100 L', 'Combustible': '800 L', 'Cabinas': '2', 'Banos': '1' },
      en: { 'LOA': '9.00 m', 'Beam': '3.00 m', 'Draft': '0.80 m', 'Displacement': '3 t', 'Hull': 'Fiberglass', 'Freshwater': '100 L', 'Fuel': '800 L', 'Cabins': '2', 'Heads': '1' }
    },
    highlights: {
      es: [
        'Diseño escandinavo funcional y robusto',
        '2x Volvo 200 CV — 400 CV total',
        '2 cabinas, 1 baño, cocina equipada',
        'GPS plotter, VHF, sonda, molinete eléctrico',
        'ITV vigente — la embarcación más accesible de la cartera',
      ],
      en: [
        'Functional and robust Scandinavian design',
        '2x Volvo 200 HP — 400 HP total',
        '2 cabins, 1 head, equipped galley',
        'GPS plotter, VHF, sounder, electric windlass',
        'Survey valid — the most accessible vessel in the portfolio',
      ],
    },
    images: ["imagenes web/fjord-900/hf_20260321_054728_e2717c99-daec-4cf0-95b7-759fea3ae8cf.jpeg", "imagenes web/fjord-900/hf_20260321_061125_a2e23b00-1738-475d-a4e3-7ad1434354a0.jpeg", "imagenes web/fjord-900/hf_20260321_062024_f721e49d-4275-4e3c-9c70-e4de1967a1e2.jpeg", "imagenes web/fjord-900/hf_20260321_062559_978cd2a7-e9b0-45a6-b097-d67e7406fadc.jpeg", "imagenes web/fjord-900/hf_20260321_063538_00d7ec65-7f68-496c-8aea-666d129fc9b0.jpeg", "imagenes web/fjord-900/hf_20260321_063808_be3fcda6-7613-48e5-9650-583848c7b305.jpeg", "imagenes web/fjord-900/hf_20260321_063925_9a359b6d-33be-4fba-9738-602d38fef60a.jpeg", "imagenes web/fjord-900/hf_20260321_064129_c56d8166-5344-453c-9119-548a0a75f699.jpeg", "imagenes web/fjord-900/hf_20260321_064905_d9847d3e-c262-4413-809b-d6e2ece66df9.jpeg", "imagenes web/fjord-900/hf_20260321_065411_2527ebc3-3718-4dad-85e9-967e5207f088.jpeg", "imagenes web/fjord-900/hf_20260321_070003_113fe412-e8b9-46b7-a823-1db2757dc4d0.jpeg", "imagenes web/fjord-900/hf_20260321_073035_8ef11707-8bd6-4955-b15f-15cac42fbdc1.jpeg"]
  },
  {
    slug: "finnyacht-35-1972",
    name: "Finnyacht FINM Cleaper 35",
    brand: "Finnyacht",
    type: "sail",
    year: 1972,
    price: 28000,
    length: 10.44,
    beam: 3.12,
    draft: 1.69,
    location: "El Masnou",
    condition: "used",
    badges: ["stock", "price-drop"],
    engines: "1x Vetus 67 CV",
    fuel: "Diesel",
    cabins: 1,
    berths: 5,
    heads: 1,
    description: {
      es: "Finnyacht 35, velero nórdico de construcción sólida. 10,44 metros de eslora, manga 3,12 metros, calado 1,69 metros. Quilla corrida.\n\nGran bañera de popa. Velocidad de crucero 7-8 nudos, gran autonomía de 300 millas náuticas. Ideal para vivir a bordo.\n\nMotor Vetus de 67 CV seminuevo con solo 52 horas. Depósitos de combustible completamente limpios, bancada del motor en acero inoxidable.\n\nVelas: mayor y génova enrollables. Panel solar. Equipado con GPS plotter, VHF, compás, radio, TV pantalla plana. Horno, frigorífico, WC marino. Inversor, toma de corriente, cargador de baterías.",
      en: "Finnyacht 35, solidly built Nordic sailboat. 10.44m LOA, 3.12m beam, 1.69m draft. Full keel.\n\nLarge stern cockpit. Cruising speed 7-8 knots, great range of 300 nautical miles. Ideal for liveaboard.\n\nSemi-new Vetus 67 HP engine with only 52 hours. Completely clean fuel tanks, stainless steel engine beds.\n\nSails: roller furling mainsail and genoa. Solar panel. Equipped with GPS plotter, VHF, compass, radio, flat screen TV. Oven, fridge, marine WC. Inverter, shore power, battery charger."
    },
    specs: {
      es: { "Eslora": "10,44 m", "Manga": "3,12 m", "Calado": "1,69 m", "Motor": "1x Vetus 67 CV", "Combustible": "Diesel", "Cabinas": "1", "Literas": "5", "Baños": "1", "Año": "1972", "Puerto": "El Masnou" },
      en: { "Length": "10.44 m", "Beam": "3.12 m", "Draft": "1.69 m", "Engine": "1x Vetus 67 HP", "Fuel": "Diesel", "Cabins": "1", "Berths": "5", "Heads": "1", "Year": "1972", "Port": "El Masnou" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente', 'Inversor'],
        'Electrónica': ['TV', 'Plotter', 'Radio', 'Compas', 'CD', 'GPS', 'Altavoces de banera', 'VHF', 'TV pantalla plana'],
        'Interior': ['Bomba de sentina electrica', 'Horno', 'WC marino', 'Frigorifico', 'Cargador de baterias'],
        'Exterior': ['Pescantes', 'Reflector de radar', 'Panel solar', 'Cojines de banera', 'Escalera de bano'],
        'Velas': ['Mayor enrollable', 'Genova enrollable']
      },
      en: {
        'Electrical': ['Shore power', 'Inverter'],
        'Electronics': ['TV', 'Plotter', 'Radio', 'Compass', 'CD', 'GPS', 'Cockpit speakers', 'VHF', 'Flat screen TV'],
        'Interior': ['Electric bilge pump', 'Oven', 'Marine WC', 'Fridge', 'Battery charger'],
        'Exterior': ['Davits', 'Radar reflector', 'Solar panel', 'Cockpit cushions', 'Bathing ladder'],
        'Sails': ['Roller furling mainsail', 'Roller furling genoa']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Vetus', modelo: '', potencia: '67 CV', horas: '52', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '3 palas, bronce' }
        ],
        potenciaTotal: '67 CV'
      },
      en: {
        motors: [
          { brand: 'Vetus', model: '', power: '67 HP', hours: '52', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '3 blades, bronze' }
        ],
        totalPower: '67 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '10,44 m', 'Manga': '3,12 m', 'Calado': '1,69 m', 'Casco': 'Fibra de vidrio, quilla corrida', 'Cabinas': '1', 'Banos': '1', 'Velocidad crucero': '8 nudos', 'Velocidad máxima': '9,5 nudos', 'Autonomía': '300 mn' },
      en: { 'LOA': '10.44 m', 'Beam': '3.12 m', 'Draft': '1.69 m', 'Hull': 'Fiberglass, full keel', 'Cabins': '1', 'Heads': '1', 'Cruising speed': '8 kn', 'Max speed': '9.5 kn', 'Range': '300 nm' }
    },
    highlights: {
      es: [
        'Motor Vetus 67 CV seminuevo con solo 52 horas',
        'Depósitos de combustible limpios, bancada de motor en acero inoxidable',
        'Velas enrollables: mayor y génova, panel solar',
        'Gran bañera de popa — ideal para vivir a bordo',
        'Autonomía de 300 millas náuticas',
      ],
      en: [
        'Semi-new Vetus 67 HP engine with only 52 hours',
        'Clean fuel tanks, stainless steel engine beds',
        'Roller furling mainsail and genoa, solar panel',
        'Large stern cockpit — ideal for liveaboard',
        'Range of 300 nautical miles',
      ],
    },
    images: ["imagenes web/finnyacht-finm-cleaper-35/hf_20260322_024534_f39c2e12-d76c-488a-a368-933f0bbba243.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_001057_8f9605c8-b38a-4244-8e32-1f1d6a25a084.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_002226_63efba28-92b8-4446-b975-080889035f7d.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_002623_b19e639e-a4d9-403f-8139-3c33a35872d5.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_003035_9495b51a-a420-4560-91b7-4915b402b1f2.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_003407_e7775876-f385-4999-9e10-a6e02d112974.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_010335_2c5f4568-ede9-4693-8c16-a2fe1e6b44ff.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_010402_1fd01a83-7394-4abf-9939-5ad194eaab9f.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_011352_b59e7a95-7c82-4b4e-a223-a03e96eea3f0.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_011428_d4176f8a-a813-4c43-bfe2-cb5bdd65b512.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_012453_c0f0589f-9867-41cf-9e38-968daefde199.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_013414_de699fb1-148b-4b31-9fff-53cc1b3fc624.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_013933_22ceee01-5430-4b79-b3c8-3cd7ac544867.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_000503_64042838-41b9-4025-be99-57b6e6001e34.jpeg"]
  },
  {
    slug: "ketch-nordic-36-classic-1981",
    name: "Ketch Nordic 36 Classic",
    brand: "Ketch",
    type: "sail",
    year: 1981,
    price: 39500,
    length: 10.85,
    beam: 3.35,
    draft: 1.41,
    location: "El Masnou",
    condition: "used",
    badges: ["new"],
    engines: "1x Bukh 36 CV",
    fuel: "Diesel",
    cabins: 2,
    berths: 5,
    heads: 1,
    description: {
      es: "Ketch Nordic 36 Classic, elegancia atemporal. Líneas clásicas que combinan el encanto de la navegación tradicional con la robustez oceánica.\n\nDiseñado para travesías largas con total seguridad. Navegación equilibrada, ideal para parejas y familias. Capacidad para 8 personas.\n\n10,85 metros de eslora, manga 3,35 metros, calado 1,41 metros. Motor Bukh de 36 CV. Molinete eléctrico. Depósito de combustible de 200 litros.\n\nDistribución cálida y funcional con maderas nobles. Teca bien mantenida en pasillos laterales. Dos cabinas, un baño. Balsa salvavidas.\n\nPara quien valora el carácter, la autenticidad y la autonomía en el mar. Disponible en El Masnou.",
      en: "Ketch Nordic 36 Classic, timeless elegance. Classic lines combining traditional sailing charm with oceanic robustness.\n\nDesigned for long passages with full safety. Balanced navigation, ideal for couples and families. Capacity for 8 people.\n\n10.85m LOA, 3.35m beam, 1.41m draft. Bukh 36 HP engine. Electric windlass. 200-litre fuel tank.\n\nWarm functional layout with noble woods. Well-maintained teak side decks. Two cabins, one head. Life raft.\n\nA boat for those who value character, authenticity, and autonomy at sea. Available in El Masnou."
    },
    specs: {
      es: { "Eslora": "10,85 m", "Manga": "3,35 m", "Calado": "1,41 m", "Motor": "1x Bukh 36 CV", "Combustible": "Diesel", "Cabinas": "2", "Literas": "5", "Baños": "1", "Año": "1981", "Puerto": "El Masnou" },
      en: { "Length": "10.85 m", "Beam": "3.35 m", "Draft": "1.41 m", "Engine": "1x Bukh 36 HP", "Fuel": "Diesel", "Cabins": "2", "Berths": "5", "Heads": "1", "Year": "1981", "Port": "El Masnou" }
    },
    equipment: {
      es: {
        'Eléctrico': ['Toma de corriente'],
        'Electrónica': ['Radar', 'TV', 'Centro de navegacion', 'Plotter', 'Radio', 'Compas', 'VHF', 'TV pantalla plana'],
        'Interior': ['Bomba de sentina electrica automatica', 'WC electrico'],
        'Exterior': ['Teca en pasillos laterales', 'Balsa salvavidas']
      },
      en: {
        'Electrical': ['Shore power'],
        'Electronics': ['Radar', 'TV', 'Nav center', 'Plotter', 'Radio', 'Compass', 'VHF', 'Flat screen TV'],
        'Interior': ['Automatic electric bilge pump', 'Electric WC'],
        'Exterior': ['Teak side decks', 'Life raft']
      }
    },
    propulsion: {
      es: {
        motors: [
          { marca: 'Bukh', modelo: '', potencia: '36 CV', horas: '', combustible: 'Diesel', tipo: 'Interior', transmision: '', helice: '3 palas' }
        ],
        potenciaTotal: '36 CV'
      },
      en: {
        motors: [
          { brand: 'Bukh', model: '', power: '36 HP', hours: '', fuel: 'Diesel', type: 'Inboard', transmission: '', propeller: '3 blades' }
        ],
        totalPower: '36 HP'
      }
    },
    measurements: {
      es: { 'Eslora total': '10,85 m', 'Manga': '3,35 m', 'Calado': '1,41 m', 'Capacidad': '8 personas', 'Casco': 'Fibra de vidrio', 'Molinete electrico': 'Si', 'Instalación eléctrica': '220V', 'Combustible': '200 L', 'Cabinas': '2', 'Banos': '1' },
      en: { 'LOA': '10.85 m', 'Beam': '3.35 m', 'Draft': '1.41 m', 'Capacity': '8 persons', 'Hull': 'Fiberglass', 'Electric windlass': 'Yes', 'Electrical': '220V', 'Fuel': '200 L', 'Cabins': '2', 'Heads': '1' }
    },
    highlights: {
      es: [
        'Ketch nórdico clásico — diseñado para travesías largas',
        'Motor Bukh 36 CV, molinete eléctrico',
        'Teca bien mantenida en pasillos laterales',
        'Distribución cálida con maderas nobles — 2 cabinas',
        'Capacidad para 8 personas, balsa salvavidas',
      ],
      en: [
        'Classic Nordic ketch — designed for long passages',
        'Bukh 36 HP engine, electric windlass',
        'Well-maintained teak side decks',
        'Warm layout with noble woods — 2 cabins',
        'Capacity for 8 persons, life raft',
      ],
    },
    images: ["imagenes web/ketch-nordic-36-classic/hf_20260321_045336_92a17267-5552-41ab-aa7a-a1b71e12cf74.png", "imagenes web/ketch-nordic-36-classic/hf_20260321_045338_82c0773e-4303-4010-bdd4-71ef22194fbb.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_045826_4811e00d-6622-4bc6-864d-a735456c4d8b.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_045904_ca313916-23ac-419e-8c8d-a85f2b3d7d86.png", "imagenes web/ketch-nordic-36-classic/hf_20260321_050651_6d334c5b-01b4-4b35-9052-389e04480476.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_050812_02cafa5d-badb-4d11-b21f-b874fae7eb38.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_051249_a72b0cbe-1eb6-440f-8c6e-d1c003ffbc79.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_051323_d38b69a1-4634-46e8-924b-feac2fda08d5.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_051819_61800e5d-3134-4a22-a6b9-b0e6fb6f12b1.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_052214_c5f8ab55-1634-4b75-a519-ed97ac0e1e70.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_052637_86d2c0a9-639f-4508-a6f2-9bb3d1feaf23.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_053917_d7cc620e-5720-48b9-a918-b7a0692cf34c.jpeg"]
  }
];

/* --- Helper Functions --- */

/** Format price with European locale: 1.300.000 EUR */
function formatPrice(price) {
  return price.toLocaleString('es-ES') + ' \u20ac';
}

/** Get boats filtered by criteria */
function filterBoats(filters = {}) {
  return boats.filter(boat => {
    if (filters.type && boat.type !== filters.type) return false;
    if (filters.brand && boat.brand !== filters.brand) return false;
    if (filters.location && boat.location !== filters.location) return false;
    if (filters.minPrice && boat.price < filters.minPrice) return false;
    if (filters.maxPrice && boat.price > filters.maxPrice) return false;
    if (filters.minLength && boat.length < filters.minLength) return false;
    if (filters.maxLength && boat.length > filters.maxLength) return false;
    if (filters.minYear && boat.year < filters.minYear) return false;
    if (filters.maxYear && boat.year > filters.maxYear) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const searchable = `${boat.name} ${boat.brand} ${boat.location}`.toLowerCase();
      if (!searchable.includes(q)) return false;
    }
    return true;
  });
}

/** Get unique values for filter options */
function getFilterOptions() {
  return {
    brands: [...new Set(boats.map(b => b.brand))].sort(),
    locations: [...new Set(boats.map(b => b.location))].sort(),
    types: [...new Set(boats.map(b => b.type))],
    priceRange: { min: Math.min(...boats.map(b => b.price)), max: Math.max(...boats.map(b => b.price)) },
    lengthRange: { min: Math.min(...boats.map(b => b.length)), max: Math.max(...boats.map(b => b.length)) },
    yearRange: { min: Math.min(...boats.map(b => b.year)), max: Math.max(...boats.map(b => b.year)) }
  };
}

/** Get a boat by slug */
function getBoatBySlug(slug) {
  return boats.find(b => b.slug === slug) || null;
}

/** Get similar boats (same type or similar price, excluding current) */
function getSimilarBoats(slug, count = 3) {
  const current = getBoatBySlug(slug);
  if (!current) return [];
  return boats
    .filter(b => b.slug !== slug)
    .sort((a, b) => {
      const aScore = (a.type === current.type ? 2 : 0) + (1 / (1 + Math.abs(a.price - current.price) / 100000));
      const bScore = (b.type === current.type ? 2 : 0) + (1 / (1 + Math.abs(b.price - current.price) / 100000));
      return bScore - aScore;
    })
    .slice(0, count);
}

/** Sort boats by field */
function sortBoats(boatList, field, direction = 'desc') {
  return [...boatList].sort((a, b) => {
    const va = a[field], vb = b[field];
    return direction === 'asc' ? va - vb : vb - va;
  });
}
