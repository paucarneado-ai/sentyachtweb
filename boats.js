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
    beam: 5.90,
    draft: 1.80,
    location: "Barcelona",
    condition: "used",
    badges: [],
    engines: "2× MAN 1360 CV",
    fuel: "Diésel",
    cabins: 4,
    berths: 8,
    heads: 4,
    description: {
      es: "Yate flybridge de gran eslora en excelente estado. Cuatro cabinas, cuatro baños, amplio salón y flybridge con bimini. Mantenimiento al día con revisiones anuales. Ideal para cruceros largos por el Mediterráneo.",
      en: "Large flybridge yacht in excellent condition. Four cabins, four heads, spacious saloon and flybridge with bimini. Fully maintained with annual surveys. Ideal for extended Mediterranean cruising."
    },
    specs: {
      es: { "Eslora": "24,99 m", "Manga": "5,90 m", "Calado": "1,80 m", "Motor": "2× MAN 1360 CV", "Combustible": "Diésel", "Cabinas": "4", "Literas": "8", "Baños": "4", "Año": "2008", "Puerto": "Barcelona" },
      en: { "Length": "24.99 m", "Beam": "5.90 m", "Draft": "1.80 m", "Engine": "2× MAN 1360 HP", "Fuel": "Diesel", "Cabins": "4", "Berths": "8", "Heads": "4", "Year": "2008", "Port": "Barcelona" }
    },
    images: ["imagenes web/astondoa-82-glx/hf_20260318_064453_acb97b32-e90a-401b-9d43-5b0bb7ed4701.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_074217_7841eb70-71ec-453e-9df4-3e591d645326.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_075750_461ba11f-a5b1-49bc-acbf-fd05b6baf84d.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_091715_3605e909-4718-4eaf-b37a-ee36898427c2.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_093037_8fc882d3-7419-464f-b31e-863dc3bb07b7.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_093247_47acaeba-947e-488e-b003-e39804c315f3.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_094432_c27bc0ea-814b-4197-b29b-7d9a9ab04543.png", "imagenes web/astondoa-82-glx/hf_20260318_095211_d5dbe489-827b-4dd3-a2c5-f190d7932662.png", "imagenes web/astondoa-82-glx/hf_20260318_095506_abde0d23-ce1d-4df4-9391-748714e858f6.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_122443_ac7c8afb-8c9e-4329-a75b-486a56f41189.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_123018_843626bd-5cac-4e29-9882-b1b8016b0288.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_123114_59c29253-fbc3-4f3e-b2cc-323a8d20038b.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_123436_ac0b0150-e696-451c-96f2-837421ebeb4e.png", "imagenes web/astondoa-82-glx/hf_20260318_124735_1a7769cb-0b52-405f-bcb1-7e87b1c3fba6.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_125017_2f0ab261-9426-4499-b829-4a824070f78d.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_125200_6086b758-0621-4f34-a046-08b62cc92c9b.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_125453_b0300c92-b299-4fe3-b6c9-b35c18983299.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_130007_ba048f9a-349d-42b3-8e34-a959871cf4a9.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_131021_0f911edd-de3d-480a-b928-1b5ee1bb9862.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_132307_feffbfdc-6f98-4f9e-be9b-42f21258623d.jpeg", "imagenes web/astondoa-82-glx/hf_20260318_140012_a3cd0c81-9ddd-4c4b-a0ce-90cbb292556e.jpeg", "imagenes web/astondoa-82-glx/hf_20260319_000722_d82a7c01-5837-4611-bbc7-05fbc82e88eb.jpeg", "imagenes web/astondoa-82-glx/z.jpeg"]
  },
  {
    slug: "astondoa-72-glx-2003",
    name: "Astondoa 72 GLX",
    brand: "Astondoa",
    type: "motor",
    year: 2003,
    price: 950000,
    length: 22.00,
    beam: 5.50,
    draft: 1.70,
    location: "Alicante",
    condition: "used",
    badges: ["new"],
    engines: "2× MAN 1100 CV",
    fuel: "Diésel",
    cabins: 4,
    berths: 8,
    heads: 3,
    description: {
      es: "Astondoa 72 GLX con amplio flybridge y cuatro cabinas. Construcción sólida del astillero español de referencia. Mecánica revisada y lista para navegar. Amarre en Alicante.",
      en: "Astondoa 72 GLX with spacious flybridge and four cabins. Solid build from Spain's premier shipyard. Mechanically surveyed and ready to cruise. Berth in Alicante."
    },
    specs: {
      es: { "Eslora": "22,00 m", "Manga": "5,50 m", "Calado": "1,70 m", "Motor": "2× MAN 1100 CV", "Combustible": "Diésel", "Cabinas": "4", "Literas": "8", "Baños": "3", "Año": "2003", "Puerto": "Alicante" },
      en: { "Length": "22.00 m", "Beam": "5.50 m", "Draft": "1.70 m", "Engine": "2× MAN 1100 HP", "Fuel": "Diesel", "Cabins": "4", "Berths": "8", "Heads": "3", "Year": "2003", "Port": "Alicante" }
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
    beam: 4.60,
    draft: 1.30,
    location: "Barcelona",
    condition: "used",
    badges: [],
    engines: "2× MAN 570 CV",
    fuel: "Diésel",
    cabins: 3,
    berths: 6,
    heads: 2,
    description: {
      es: "Clásico Astondoa 53 GLX con líneas atemporales. Tres cabinas, dos baños, salón luminoso. Un referente de la construcción naval española. Mantenimiento impecable para su antigüedad.",
      en: "Classic Astondoa 53 GLX with timeless lines. Three cabins, two heads, bright saloon. A benchmark of Spanish shipbuilding. Impeccably maintained for her age."
    },
    specs: {
      es: { "Eslora": "15,85 m", "Manga": "4,60 m", "Calado": "1,30 m", "Motor": "2× MAN 570 CV", "Combustible": "Diésel", "Cabinas": "3", "Literas": "6", "Baños": "2", "Año": "1993", "Puerto": "Barcelona" },
      en: { "Length": "15.85 m", "Beam": "4.60 m", "Draft": "1.30 m", "Engine": "2× MAN 570 HP", "Fuel": "Diesel", "Cabins": "3", "Berths": "6", "Heads": "2", "Year": "1993", "Port": "Barcelona" }
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
    beam: 3.90,
    draft: 1.10,
    location: "El Masnou",
    condition: "used",
    badges: ["stock", "price-drop"],
    engines: "2× Volvo 310 CV",
    fuel: "Diésel",
    cabins: 2,
    berths: 4,
    heads: 1,
    description: {
      es: "Astondoa 39 compacto y manejable, perfecto para escapadas de fin de semana. Dos cabinas, un baño, bañera amplia. Amarre disponible en el Port Esportiu de El Masnou.",
      en: "Compact and manageable Astondoa 39, perfect for weekend getaways. Two cabins, one head, spacious cockpit. Berth available at Port Esportiu de El Masnou."
    },
    specs: {
      es: { "Eslora": "11,95 m", "Manga": "3,90 m", "Calado": "1,10 m", "Motor": "2× Volvo 310 CV", "Combustible": "Diésel", "Cabinas": "2", "Literas": "4", "Baños": "1", "Año": "2002", "Puerto": "El Masnou" },
      en: { "Length": "11.95 m", "Beam": "3.90 m", "Draft": "1.10 m", "Engine": "2× Volvo 310 HP", "Fuel": "Diesel", "Cabins": "2", "Berths": "4", "Heads": "1", "Year": "2002", "Port": "El Masnou" }
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
    engines: "2× Caterpillar 800 CV",
    fuel: "Diésel",
    cabins: 3,
    berths: 6,
    heads: 2,
    description: {
      es: "Navalia 60 de fabricación española con diseño mediterráneo. Tres cabinas, amplio salón con buena visibilidad y plataforma de baño generosa. Mantenimiento profesional desde su botadura.",
      en: "Spanish-built Navalia 60 with Mediterranean design. Three cabins, spacious saloon with good visibility and generous bathing platform. Professionally maintained since launch."
    },
    specs: {
      es: { "Eslora": "18,00 m", "Manga": "5,20 m", "Calado": "1,50 m", "Motor": "2× Caterpillar 800 CV", "Combustible": "Diésel", "Cabinas": "3", "Literas": "6", "Baños": "2", "Año": "2006", "Puerto": "Barcelona" },
      en: { "Length": "18.00 m", "Beam": "5.20 m", "Draft": "1.50 m", "Engine": "2× Caterpillar 800 HP", "Fuel": "Diesel", "Cabins": "3", "Berths": "6", "Heads": "2", "Year": "2006", "Port": "Barcelona" }
    },
    images: ["imagenes web/navalia-60/hf_20260323_233241_b67cdada-061a-4c59-9645-3cbe11a9a06d.jpeg", "imagenes web/navalia-60/hf_20260323_233714_0cc996f8-37da-4cc2-9117-cbfa7ece3026.jpeg", "imagenes web/navalia-60/hf_20260323_234733_f453537f-7899-4361-9481-7db2c5af5937.jpeg", "imagenes web/navalia-60/hf_20260323_234756_f68ddf7b-66f0-4208-aef9-32e83c61e237.jpeg", "imagenes web/navalia-60/hf_20260323_235343_39de4c0f-a9f0-403a-9d8a-08bfe907fbdc.jpeg", "imagenes web/navalia-60/hf_20260323_235839_d28541bf-1907-4235-9759-917b9540917e.jpeg", "imagenes web/navalia-60/hf_20260323_235929_9ad8ce81-78bf-4064-b806-ee9126ca4b98.jpeg", "imagenes web/navalia-60/hf_20260324_000339_2dd3b889-d129-4ae4-b140-c3ac68ae9eca.jpeg", "imagenes web/navalia-60/hf_20260324_000847_37c4af14-4ff9-4ab2-b458-8ae4293d2ac9.jpeg", "imagenes web/navalia-60/hf_20260324_001351_109f27ff-5f95-4fdb-ab3b-3b3320817830.jpeg", "imagenes web/navalia-60/hf_20260324_001845_a8f50f4e-ce0a-42f3-a624-373974cf7210.png", "imagenes web/navalia-60/hf_20260324_002452_72ebec1c-9e75-4337-a97c-4be913ef03d2.png", "imagenes web/navalia-60/hf_20260324_003017_844a0ce5-ee3a-440c-975b-3be2b4e0c292.jpeg", "imagenes web/navalia-60/hf_20260324_003751_14a2db9b-748e-49b1-b441-5214bcc01785.jpeg"]
  },
  {
    slug: "sunseeker-manhattan-50-2004",
    name: "Sunseeker Manhattan 50",
    brand: "Sunseeker",
    type: "motor",
    year: 2004,
    price: 359000,
    length: 15.66,
    beam: 4.42,
    draft: 1.17,
    location: "El Masnou",
    condition: "used",
    badges: ["stock"],
    engines: "2× MAN 800 CV",
    fuel: "Diésel",
    cabins: 3,
    berths: 6,
    heads: 2,
    description: {
      es: "Sunseeker Manhattan 50, un icono del diseño británico. Tres cabinas, dos baños, flybridge práctico. Mecánica revisada y en buen estado general. Disponible para visita inmediata en El Masnou.",
      en: "Sunseeker Manhattan 50, an icon of British design. Three cabins, two heads, practical flybridge. Mechanically surveyed and in good overall condition. Available for immediate viewing in El Masnou."
    },
    specs: {
      es: { "Eslora": "15,66 m", "Manga": "4,42 m", "Calado": "1,17 m", "Motor": "2× MAN 800 CV", "Combustible": "Diésel", "Cabinas": "3", "Literas": "6", "Baños": "2", "Año": "2004", "Puerto": "El Masnou" },
      en: { "Length": "15.66 m", "Beam": "4.42 m", "Draft": "1.17 m", "Engine": "2× MAN 800 HP", "Fuel": "Diesel", "Cabins": "3", "Berths": "6", "Heads": "2", "Year": "2004", "Port": "El Masnou" }
    },
    images: ["imagenes web/sunseeker-manhattan-50/hf_20260322_030855_5430fefe-a3bb-4554-9aaa-3ece892f6f50.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_030928_2c51028c-a633-41a8-a377-a4e615a93366.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_031639_85a5ea5d-fa8f-4b45-8888-1218473ac2dc.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_031722_78a3b27d-685b-4fd0-a7ed-4daeb5f69aa3.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_032334_d56b132c-30af-443a-b940-15750b2f7173.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_032404_a97b73a5-6015-4f38-a2c0-8693133af8be.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_032853_73267fd5-5c29-4323-8b21-c41f8089b2f5.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_033134_e0061bb2-99f8-4499-8394-90e5eafcb77e.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_033519_7cc3978e-a54c-4f16-adae-9a0f994faed5.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_033551_a0410061-6681-4a40-964b-f13f28df845a.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_034107_bf1424dd-59c9-4bc9-991d-4efb2c37a99e.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_034227_4c35739c-f7b2-402d-9535-4748d4e16cba.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_034729_e637e0fc-8624-43cc-acf9-2a96b6338cd2.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_034818_9a0a420c-94a8-4988-ba5b-974846aa4d2b.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_035224_b600550a-ae19-4074-b3aa-fff0e65e24fe.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_035431_11d7983c-abf9-43d3-8326-36359a0a6b8d.png", "imagenes web/sunseeker-manhattan-50/hf_20260322_043101_3e5fdbde-2829-4f63-a647-c4afccf72f86.jpeg", "imagenes web/sunseeker-manhattan-50/hf_20260322_045807_b5c241f0-672b-4c58-9cf9-6040a6f6d9c4.png"]
  },
  {
    slug: "hanse-470-2007",
    name: "Hanse 470",
    brand: "Hanse",
    type: "sail",
    year: 2007,
    price: 210000,
    length: 14.19,
    beam: 4.36,
    draft: 2.10,
    location: "Barcelona",
    condition: "used",
    badges: [],
    engines: "1× Yanmar 55 CV",
    fuel: "Diésel",
    cabins: 3,
    berths: 6,
    heads: 2,
    description: {
      es: "Hanse 470, velero de crucero de alto rendimiento del astillero alemán. Tres cabinas, dos baños, cockpit amplio. Jarcia y velas en buen estado. Ideal para regatas y cruceros largos.",
      en: "Hanse 470, high-performance cruising sailboat from the German shipyard. Three cabins, two heads, spacious cockpit. Rigging and sails in good condition. Ideal for racing and extended cruising."
    },
    specs: {
      es: { "Eslora": "14,19 m", "Manga": "4,36 m", "Calado": "2,10 m", "Motor": "1× Yanmar 55 CV", "Combustible": "Diésel", "Cabinas": "3", "Literas": "6", "Baños": "2", "Año": "2007", "Puerto": "Barcelona" },
      en: { "Length": "14.19 m", "Beam": "4.36 m", "Draft": "2.10 m", "Engine": "1× Yanmar 55 HP", "Fuel": "Diesel", "Cabins": "3", "Berths": "6", "Heads": "2", "Year": "2007", "Port": "Barcelona" }
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
    beam: 4.05,
    draft: 1.02,
    location: "El Masnou",
    condition: "used",
    badges: ["new"],
    engines: "2× Caterpillar 420 CV",
    fuel: "Diésel",
    cabins: 2,
    berths: 4,
    heads: 1,
    description: {
      es: "Grand Banks 38 Eastbay EX, referencia en trawlers de calidad. Construcción robusta, dos cabinas, un baño. Navegación eficiente y cómoda. Perfecto para crucero costero y vivir a bordo.",
      en: "Grand Banks 38 Eastbay EX, the benchmark in quality trawlers. Robust construction, two cabins, one head. Efficient and comfortable cruising. Perfect for coastal cruising and liveaboard."
    },
    specs: {
      es: { "Eslora": "12,45 m", "Manga": "4,05 m", "Calado": "1,02 m", "Motor": "2× Caterpillar 420 CV", "Combustible": "Diésel", "Cabinas": "2", "Literas": "4", "Baños": "1", "Año": "2002", "Puerto": "El Masnou" },
      en: { "Length": "12.45 m", "Beam": "4.05 m", "Draft": "1.02 m", "Engine": "2× Caterpillar 420 HP", "Fuel": "Diesel", "Cabins": "2", "Berths": "4", "Heads": "1", "Year": "2002", "Port": "El Masnou" }
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
    beam: 3.10,
    draft: 0.90,
    location: "El Masnou",
    condition: "used",
    badges: ["stock", "price-drop"],
    engines: "2× Volvo 150 CV",
    fuel: "Diésel",
    cabins: 1,
    berths: 4,
    heads: 1,
    description: {
      es: "Rodman 900 Flybridge, embarcación española fiable y marinera. Una cabina, un baño, flybridge con buena visibilidad. Opción accesible para iniciarse en la náutica.",
      en: "Rodman 900 Flybridge, a reliable and seaworthy Spanish boat. One cabin, one head, flybridge with good visibility. An accessible option for newcomers to boating."
    },
    specs: {
      es: { "Eslora": "9,00 m", "Manga": "3,10 m", "Calado": "0,90 m", "Motor": "2× Volvo 150 CV", "Combustible": "Diésel", "Cabinas": "1", "Literas": "4", "Baños": "1", "Año": "1996", "Puerto": "El Masnou" },
      en: { "Length": "9.00 m", "Beam": "3.10 m", "Draft": "0.90 m", "Engine": "2× Volvo 150 HP", "Fuel": "Diesel", "Cabins": "1", "Berths": "4", "Heads": "1", "Year": "1996", "Port": "El Masnou" }
    },
    images: ["imagenes web/rodman-900-fly/hf_20260321_073715_656d2341-d671-4ec2-b08b-246da7a6f441.png", "imagenes web/rodman-900-fly/hf_20260321_074456_9b8a89d7-2f2a-410e-93ac-c2de6a49c5d0.jpeg", "imagenes web/rodman-900-fly/hf_20260321_074709_dbfea83a-9648-4e27-ae48-47c439fbbb2a.jpeg", "imagenes web/rodman-900-fly/hf_20260321_075359_e297c435-f731-4554-b2ba-a379615bf96f.jpeg", "imagenes web/rodman-900-fly/hf_20260321_075519_96f7c57a-b18a-4a16-88d7-73726c227541.jpeg", "imagenes web/rodman-900-fly/hf_20260321_080133_269dca23-f857-4a1f-a077-256c9c714d7a.jpeg", "imagenes web/rodman-900-fly/hf_20260321_080352_9316b141-8c90-4082-b6a9-7c66516254a8.jpeg", "imagenes web/rodman-900-fly/hf_20260321_080619_152d1480-1a97-48bc-8d99-b2229358e30a.jpeg", "imagenes web/rodman-900-fly/hf_20260321_081914_1d641430-21fa-4fd3-ba7f-c415295ab408.jpeg", "imagenes web/rodman-900-fly/hf_20260321_082406_842e8349-c110-462b-9d84-6e2639ed9cc8.jpeg", "imagenes web/rodman-900-fly/hf_20260321_082650_426bf1f4-5d86-4079-8a60-5c29cb77e767.png", "imagenes web/rodman-900-fly/hf_20260321_083012_e693f406-1796-4758-8ce3-0a5cfa3ca405.png", "imagenes web/rodman-900-fly/hf_20260321_083227_f0655709-5887-42bd-b55e-e7f288765a5e.png", "imagenes web/rodman-900-fly/hf_20260321_083646_c6d50367-b771-4a36-90fc-37946e35592c.jpeg", "imagenes web/rodman-900-fly/hf_20260321_083819_6840dd29-e29b-4075-8107-fe4c8d721cbe.jpeg", "imagenes web/rodman-900-fly/hf_20260321_084916_b5456049-1e90-4e88-90a1-8b3064d7d7cb.jpeg"]
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
    draft: 0.85,
    location: "El Masnou",
    condition: "used",
    badges: ["stock"],
    engines: "1× Volvo 130 CV",
    fuel: "Diésel",
    cabins: 1,
    berths: 2,
    heads: 1,
    description: {
      es: "Fjord 900 noruego, diseño nórdico funcional y robusto. Una cabina, un baño, cockpit espacioso. Construcción sólida ideal para la navegación costera. La embarcación más accesible de nuestra cartera.",
      en: "Norwegian Fjord 900, functional and robust Nordic design. One cabin, one head, spacious cockpit. Solid construction ideal for coastal navigation. The most accessible vessel in our portfolio."
    },
    specs: {
      es: { "Eslora": "9,00 m", "Manga": "3,00 m", "Calado": "0,85 m", "Motor": "1× Volvo 130 CV", "Combustible": "Diésel", "Cabinas": "1", "Literas": "2", "Baños": "1", "Año": "1990", "Puerto": "El Masnou" },
      en: { "Length": "9.00 m", "Beam": "3.00 m", "Draft": "0.85 m", "Engine": "1× Volvo 130 HP", "Fuel": "Diesel", "Cabins": "1", "Berths": "2", "Heads": "1", "Year": "1990", "Port": "El Masnou" }
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
    beam: 3.20,
    draft: 1.80,
    location: "El Masnou",
    condition: "used",
    badges: ["stock", "price-drop"],
    engines: "1× Volvo 28 CV",
    fuel: "Diésel",
    cabins: 2,
    berths: 5,
    heads: 1,
    description: {
      es: "Velero clásico finlandés Finnyacht 35 con carácter y encanto. Dos cabinas, un baño, bañera protegida. Construcción nórdica robusta pensada para navegación oceánica. Un velero con historia.",
      en: "Classic Finnish sailboat Finnyacht 35 with character and charm. Two cabins, one head, protected cockpit. Robust Nordic construction designed for ocean sailing. A sailboat with history."
    },
    specs: {
      es: { "Eslora": "10,44 m", "Manga": "3,20 m", "Calado": "1,80 m", "Motor": "1× Volvo 28 CV", "Combustible": "Diésel", "Cabinas": "2", "Literas": "5", "Baños": "1", "Año": "1972", "Puerto": "El Masnou" },
      en: { "Length": "10.44 m", "Beam": "3.20 m", "Draft": "1.80 m", "Engine": "1× Volvo 28 HP", "Fuel": "Diesel", "Cabins": "2", "Berths": "5", "Heads": "1", "Year": "1972", "Port": "El Masnou" }
    },
    images: ["imagenes web/finnyacht-finm-cleaper-35/hf_20260322_000503_64042838-41b9-4025-be99-57b6e6001e34.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_001057_8f9605c8-b38a-4244-8e32-1f1d6a25a084.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_002226_63efba28-92b8-4446-b975-080889035f7d.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_002623_b19e639e-a4d9-403f-8139-3c33a35872d5.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_003035_9495b51a-a420-4560-91b7-4915b402b1f2.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_003407_e7775876-f385-4999-9e10-a6e02d112974.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_010335_2c5f4568-ede9-4693-8c16-a2fe1e6b44ff.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_010402_1fd01a83-7394-4abf-9939-5ad194eaab9f.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_011352_b59e7a95-7c82-4b4e-a223-a03e96eea3f0.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_011428_d4176f8a-a813-4c43-bfe2-cb5bdd65b512.jpeg", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_012453_c0f0589f-9867-41cf-9e38-968daefde199.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_013414_de699fb1-148b-4b31-9fff-53cc1b3fc624.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_013933_22ceee01-5430-4b79-b3c8-3cd7ac544867.png", "imagenes web/finnyacht-finm-cleaper-35/hf_20260322_024534_f39c2e12-d76c-488a-a368-933f0bbba243.jpeg"]
  },
  {
    slug: "ketch-nordic-36-classic-1981",
    name: "Ketch Nordic 36 Classic",
    brand: "Ketch",
    type: "sail",
    year: 1981,
    price: 39500,
    length: 10.97,
    beam: 3.20,
    draft: 1.65,
    location: "El Masnou",
    condition: "used",
    badges: ["new"],
    engines: "1× Volvo 28 CV",
    fuel: "Diésel",
    cabins: 2,
    berths: 5,
    heads: 1,
    description: {
      es: "Ketch Nordic 36 Classic, velero clásico con aparejo de ketch ideal para navegación oceánica. Dos cabinas, un baño. Construcción nórdica robusta. Disponible en El Masnou.",
      en: "Ketch Nordic 36 Classic, a classic ketch-rigged sailboat ideal for ocean sailing. Two cabins, one head. Robust Nordic construction. Available in El Masnou."
    },
    specs: {
      es: { "Eslora": "10,97 m", "Manga": "3,20 m", "Calado": "1,65 m", "Motor": "1× Volvo 28 CV", "Combustible": "Diésel", "Cabinas": "2", "Literas": "5", "Baños": "1", "Año": "1981", "Puerto": "El Masnou" },
      en: { "Length": "10.97 m", "Beam": "3.20 m", "Draft": "1.65 m", "Engine": "1× Volvo 28 HP", "Fuel": "Diesel", "Cabins": "2", "Berths": "5", "Heads": "1", "Year": "1981", "Port": "El Masnou" }
    },
    images: ["imagenes web/ketch-nordic-36-classic/hf_20260321_045336_92a17267-5552-41ab-aa7a-a1b71e12cf74.png", "imagenes web/ketch-nordic-36-classic/hf_20260321_045338_82c0773e-4303-4010-bdd4-71ef22194fbb.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_045826_4811e00d-6622-4bc6-864d-a735456c4d8b.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_045904_ca313916-23ac-419e-8c8d-a85f2b3d7d86.png", "imagenes web/ketch-nordic-36-classic/hf_20260321_050651_6d334c5b-01b4-4b35-9052-389e04480476.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_050812_02cafa5d-badb-4d11-b21f-b874fae7eb38.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_051249_a72b0cbe-1eb6-440f-8c6e-d1c003ffbc79.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_051323_d38b69a1-4634-46e8-924b-feac2fda08d5.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_051819_61800e5d-3134-4a22-a6b9-b0e6fb6f12b1.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_052214_c5f8ab55-1634-4b75-a519-ed97ac0e1e70.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_052637_86d2c0a9-639f-4508-a6f2-9bb3d1feaf23.jpeg", "imagenes web/ketch-nordic-36-classic/hf_20260321_053917_d7cc620e-5720-48b9-a918-b7a0692cf34c.jpeg"]
  }
];

/* ─── Helper Functions ─── */

/** Format price with European locale: 1.300.000 € */
function formatPrice(price) {
  return price.toLocaleString('es-ES') + ' €';
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
