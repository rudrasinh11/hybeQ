export interface Product {
  id: string;
  name: string;
  category: 'tile-fixing' | 'waterproofing' | 'repairs' | 'grouts' | 'precast';
  categoryLabel: string;
  shortDesc: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  packaging: string;
  features: string[];
  specs: { [key: string]: string };
  coverage: string;
  standards: string;
  applications: string[];
  type: 'sack' | 'bucket' | 'drum';
  image?: string;
}

export function getProductImage(product: Product): string {
  if (product.image) return product.image;
  if (product.id === 'hycera-505') return '/images/hybeq_live/product_hycera-505170.png';
  if (product.id === 'hyintra-507') return '/images/hybeq_live/product_hyintra-507435.png';
  if (product.id === 'hyultra-515') return '/images/hybeq_live/product_Hyultra-515901.png';
  if (product.id === 'hymax-525') return '/images/hybeq_live/product_hymax-525147.png';
  if (product.category === 'waterproofing') return '/images/product-waterproof-bucket.png';
  if (product.category === 'grouts') return '/images/product-epoxy-grout.png';
  return '/images/hybeq_live/product_hycera-505170.png';
}

export const PRODUCTS: Product[] = [
  // --- TILE & STONE FIXING ---
  {
    id: 'hycera-505',
    name: 'Hycera 505',
    category: 'tile-fixing',
    categoryLabel: 'Tile & Stone Fixing',
    shortDesc: 'Premium polymer-modified thin-set adhesive formulated for internal ceramic and small vitrified floor & wall installations.',
    badge: 'IS 15477 Type 1',
    rating: 4.9,
    reviewsCount: 142,
    packaging: '20 kg Moisture-Proof Bag',
    features: ['High Grab & Zero Vertical Slip', 'Extended Open Time (25 Mins)', 'Self-Curing Formulation', 'Superior Bonding Strength'],
    specs: {
      'Bed Thickness': '3 - 6 mm',
      'Open Time': '20 - 25 minutes at 27°C',
      'Pot Life': 'Approx. 2.5 hours',
      'Tensile Adhesion': '> 1.2 N/mm² (Dry)',
      'Shear Strength': '> 10 kN'
    },
    coverage: 'Approx. 45 - 50 sq.ft per 20 kg bag at 3mm bed thickness',
    standards: 'IS 15477:2019 Type 1, EN 12004 C1T',
    applications: ['Internal ceramic floor tiles', 'Subway wall tiles', 'Cementitious screeds and plasters', 'Residential and light commercial areas'],
    type: 'sack'
  },
  {
    id: 'hyintra-507',
    name: 'Hyintra 507',
    category: 'tile-fixing',
    categoryLabel: 'Tile & Stone Fixing',
    shortDesc: 'High-strength polymer adhesive engineered for vitrified, semi-vitrified tiles and porous natural stones on horizontal & vertical surfaces.',
    badge: 'IS 15477 Type 2',
    rating: 4.95,
    reviewsCount: 188,
    packaging: '20 kg Moisture-Proof Bag',
    features: ['Engineered for Vitrified Formats', 'High Shear Adhesion', 'Water & Thermal Shock Resistant', 'Zero Sag on Vertical Walls'],
    specs: {
      'Bed Thickness': '3 - 8 mm',
      'Open Time': '30 minutes at 27°C',
      'Pot Life': 'Approx. 3 hours',
      'Tensile Adhesion': '> 1.5 N/mm²',
      'Shear Strength': '> 14 kN'
    },
    coverage: 'Approx. 40 - 45 sq.ft per 20 kg bag at 3mm bed thickness',
    standards: 'IS 15477:2019 Type 2, EN 12004 C2TE',
    applications: ['Large format vitrified tiles up to 4x2 ft', 'Natural granite and marble slabs', 'Bathrooms, kitchens, and wet areas', 'Commercial showrooms and offices'],
    type: 'sack'
  },
  {
    id: 'hyultra-515',
    name: 'Hyultra 515',
    category: 'tile-fixing',
    categoryLabel: 'Tile & Stone Fixing',
    shortDesc: 'Deformable S1 class high-polymer adhesive specifically engineered for external facade cladding, glass mosaics, and large slab installations.',
    badge: 'IS 15477 Type 3 / S1',
    rating: 5.0,
    reviewsCount: 210,
    packaging: '20 kg Moisture-Proof Bag',
    features: ['Deformable S1 Class Flexibility', 'Withstands Thermal Expansion Cycles', 'External Facade Certified', 'Submerged Area Compatible'],
    specs: {
      'Bed Thickness': '3 - 12 mm',
      'Deformability': '> 2.5 mm (Class S1)',
      'Tensile Adhesion': '> 2.0 N/mm²',
      'Heat Ageing Adhesion': '> 1.5 N/mm²',
      'Freeze-Thaw Durability': 'Certified Pass'
    },
    coverage: 'Approx. 35 - 40 sq.ft per 20 kg bag at 4mm notch trowel',
    standards: 'IS 15477:2019 Type 3, EN 12004 C2TE S1',
    applications: ['External wall facade cladding up to 10m height', 'Swimming pools and water bodies', 'Underfloor heating screeds', 'Slim porcelain slabs up to 8x4 ft'],
    type: 'sack'
  },
  {
    id: 'hymax-525',
    name: 'Hymax 525',
    category: 'tile-fixing',
    categoryLabel: 'Tile & Stone Fixing',
    shortDesc: 'Extreme performance tile-on-tile adhesive formulated for fixing new tiles over existing glazed tiles without chipping or surface profiling.',
    badge: 'Tile-On-Tile Pro',
    rating: 4.88,
    reviewsCount: 96,
    packaging: '20 kg Moisture-Proof Bag',
    features: ['No Demolition or Chipping Required', 'Chemical Bond with Glazed Substrates', 'Rapid Return to Service', 'Vibration Resistant'],
    specs: {
      'Bed Thickness': '3 - 6 mm',
      'Open Time': '25 minutes',
      'Tensile Adhesion over Glaze': '> 1.8 N/mm²',
      'Compressive Strength': '> 18 MPa'
    },
    coverage: 'Approx. 45 sq.ft per 20 kg bag at 3mm thickness',
    standards: 'IS 15477:2019 Type 2 & Type 4',
    applications: ['Refurbishment projects', 'Tile-on-tile floor applications', 'Commercial retail renovation', 'High-traffic corridors'],
    type: 'sack'
  },
  {
    id: 'hy-epoxy-grout',
    name: 'Hy Epoxy Grout 3K',
    category: 'tile-fixing',
    categoryLabel: 'Tile & Stone Fixing',
    shortDesc: 'Three-component high-performance chemical-resistant epoxy grout for stain-proof, waterproof, and hygienic joint filling.',
    badge: '3-Component Chemical Resistant',
    rating: 4.97,
    reviewsCount: 164,
    packaging: '1 kg & 5 kg Pail Kits',
    features: ['100% Stain-Proof & Impermeable', 'Resistant to Acids, Bleach & Alkalis', 'No Color Fading or Yellowing', 'Bacterial & Fungal Growth Inhibitor'],
    specs: {
      'Joint Width': '1.5 mm to 12 mm',
      'Pot Life': '45 minutes at 27°C',
      'Chemical Resistance': 'Classified Superior (pH 2 - 13)',
      'Water Absorption': '< 0.05%'
    },
    coverage: 'Varies with tile dimensions and joint width (approx. 100 sq.ft for 600x600 tile with 3mm joint per 5kg kit)',
    standards: 'EN 13888 RG, ANSI A118.3',
    applications: ['Kitchen countertops and backsplashes', 'Commercial food processing units', 'Hospitals and clean rooms', 'Swimming pools and jacuzzis'],
    type: 'bucket'
  },

  // --- WATERPROOFING ---
  {
    id: 'hy-dampproof-ultra',
    name: 'Hy Dampproof Ultra',
    category: 'waterproofing',
    categoryLabel: 'Waterproofing Systems',
    shortDesc: 'Single-component elastomeric polyurethane-hybrid liquid waterproofing membrane with extreme tensile elongation and UV reflectivity.',
    badge: '100% PU Hybrid Membrane',
    rating: 4.96,
    reviewsCount: 230,
    packaging: '4L & 20L Heavy-Duty Pails',
    features: ['Elongation > 500%', 'Seamless Monolithic Membrane', 'High Solar Reflectance Index (SRI > 105)', 'Puddle & Standing Water Resistant'],
    specs: {
      'Tensile Strength': '> 2.8 N/mm²',
      'Elongation at Break': '> 500%',
      'Crack Bridging': 'Up to 2.5 mm',
      'Solid Content': '> 68%',
      'Touch Dry Time': '3 - 4 hours'
    },
    coverage: 'Approx. 18 - 20 sq.ft per liter in two coats (1.2 mm dry film thickness)',
    standards: 'ASTM D412, ASTM D6083, ASTM C836',
    applications: ['Exposed flat roofs and terraces', 'Parapet walls and balconies', 'Podiums and roof gardens', 'Metal deck and asbestos roofs'],
    type: 'bucket'
  },
  {
    id: 'hy-waterseal-wh',
    name: 'Hy Waterseal WH',
    category: 'waterproofing',
    categoryLabel: 'Waterproofing Systems',
    shortDesc: 'Advanced integral crystalline waterproofing coating that permanently reactivates inside concrete pores to block water penetration under hydrostatic pressure.',
    badge: 'Crystalline Active',
    rating: 4.92,
    reviewsCount: 175,
    packaging: '25 kg Moisture-Barrier Bag',
    features: ['Permanent Self-Healing of Microcracks', 'Deep Penetration into Capillary Pores', 'Resists Positive & Negative Hydrostatic Head', 'Non-Toxic & Potable Water Safe'],
    specs: {
      'Hydrostatic Pressure Resistance': '> 12 bar (120m water head)',
      'Capillary Water Permeability': '> 85% reduction vs control concrete',
      'Self-Healing Capacity': 'Cracks up to 0.4 mm width'
    },
    coverage: 'Approx. 1.0 - 1.2 kg/m² per coat (2 coats required)',
    standards: 'CRD-C 48-73, BS EN 12390-8',
    applications: ['Basement retaining walls', 'Water reservoirs and sewage tanks', 'Foundation slabs and lift pits', 'Tunnels and underground culverts'],
    type: 'sack'
  },
  {
    id: 'hy-flexicoat-2c',
    name: 'Hy Flexicoat 2C',
    category: 'waterproofing',
    categoryLabel: 'Waterproofing Systems',
    shortDesc: 'Two-component acrylic-polymer modified cementitious coating with superior flexibility and substrate adhesion for sunken slabs and terraces.',
    badge: 'Polymer Cementitious 2C',
    rating: 4.89,
    reviewsCount: 112,
    packaging: '15 kg Kit (10kg Powder + 5kg Liquid)',
    features: ['Pre-Batched Two-Component Reliability', 'High Bonding to Damp Concrete', 'Breathable (Vapor Permeable)', 'Can Be Tiled Directly Over'],
    specs: {
      'Mixing Ratio': '2:1 (Powder:Liquid by weight)',
      'Adhesion to Concrete': '> 1.5 N/mm²',
      'Elongation': '> 60%',
      'Water Permeability': 'Nil at 5 bar'
    },
    coverage: 'Approx. 1.6 - 1.8 kg/m² for 1mm dry thickness in two coats',
    standards: 'BS 1881-122, EN 14891',
    applications: ['Sunken slabs of bathrooms and toilets', 'Balconies and chajjas', 'Water tanks and planter boxes', 'Retaining structures'],
    type: 'bucket'
  },
  {
    id: 'hybeq-sbr-latex',
    name: 'Hybeq SBR Latex 44',
    category: 'waterproofing',
    categoryLabel: 'Waterproofing Systems',
    shortDesc: 'Styrene butadiene copolymer latex emulsion engineered as an all-in-one bonding agent, waterproof slurry additive, and repair modifier.',
    badge: 'SBR Modifier & Bond',
    rating: 4.94,
    reviewsCount: 145,
    packaging: '1L, 5L, 20L & 200L Barrels',
    features: ['Exceptional Slurry Bond Strength', 'Reduces Water Permeability of Screeds', 'Increases Flexural & Tensile Strength', 'Alkali Resistant'],
    specs: {
      'Specific Gravity': '1.02 ± 0.02',
      'pH': '8.5 - 9.5',
      'Solid Content': '42 ± 1%'
    },
    coverage: 'Bond coat: Approx. 45 - 50 sq.ft per liter when mixed with cement 1:1.5',
    standards: 'ASTM C1059 Type II',
    applications: ['Structural cold joint bonding', 'Waterproof plaster screeds', 'Polymer modified repair mortars', 'Terrace slurry waterproof coat'],
    type: 'drum'
  },

  // --- REPAIRS & MORTARS ---
  {
    id: 'hy-microconcrete-m40',
    name: 'Hy Microconcrete M40',
    category: 'repairs',
    categoryLabel: 'Repairs & Mortars',
    shortDesc: 'Single-component non-shrink free-flowing self-compacting microconcrete designed for structural jacketing, beam repair, and column encasement.',
    badge: 'M40 Structural Grade',
    rating: 4.98,
    reviewsCount: 160,
    packaging: '25 kg Moisture-Barrier Bag',
    features: ['Free Flowing & Self-Compacting', 'Controlled Expansion Compensates Shrinkage', 'Compressive Strength > 40 MPa at 28 days', 'Pre-Mixed Factory Formulation'],
    specs: {
      'Flow Table Diameter': '> 650 mm (Self-Levelling)',
      '1 Day Compressive Strength': '> 18 MPa',
      '7 Days Compressive Strength': '> 30 MPa',
      '28 Days Compressive Strength': '> 45 MPa',
      'Expansion': '+0.5% to +1.5%'
    },
    coverage: 'Approx. 13 liters of fresh fluid mortar per 25 kg bag',
    standards: 'ASTM C1107 Grade C, EN 1504-3 R4 Class',
    applications: ['Column jacketing and strengthening', 'Damaged beam rehabilitation', 'Deep section concrete restoration (50mm - 250mm)', 'Machinery foundation pads'],
    type: 'sack'
  },
  {
    id: 'hy-microconcrete-m70',
    name: 'Hy Microconcrete M70',
    category: 'repairs',
    categoryLabel: 'Repairs & Mortars',
    shortDesc: 'Ultra-high strength microconcrete with synthetic fibers for severe seismic rehabilitation, bridge pier retrofitting, and heavy civil structures.',
    badge: 'M70 Heavy Duty Grade',
    rating: 5.0,
    reviewsCount: 88,
    packaging: '25 kg Bag',
    features: ['Compressive Strength > 70 MPa', 'Synthetic Polypropylene Microfibers', 'High Dynamic Load Resistance', 'Ultra-Low Permeability'],
    specs: {
      '28 Days Compressive Strength': '> 75 MPa',
      'Flexural Strength': '> 9.5 MPa',
      'Modulus of Elasticity': '> 32 GPa'
    },
    coverage: 'Approx. 12.8 liters per 25 kg bag',
    standards: 'ASTM C1107, EN 1504-3 Class R4',
    applications: ['Bridge decks and pier caps', 'Heavy industrial plant rehabilitation', 'Crane gantry pads', 'Seismic retrofitting'],
    type: 'sack'
  },
  {
    id: 'hy-blockcrete-mortar',
    name: 'Hy Blockcrete AAC Mortar',
    category: 'repairs',
    categoryLabel: 'Repairs & Mortars',
    shortDesc: 'High-strength thin-bed jointing mortar for AAC blocks, fly ash bricks, and concrete masonry units with zero shrinkage cracks.',
    badge: 'AAC Jointing Mortar',
    rating: 4.86,
    reviewsCount: 104,
    packaging: '40 kg Heavy-Duty Bag',
    features: ['Thin Bed Application (3mm replaces 15mm cement mortar)', 'Saves Labor & Material Transport', 'Tensile Split Strength Exceeds AAC Blocks', 'No Curing Needed'],
    specs: {
      'Joint Thickness': '2 - 4 mm',
      'Tensile Splitting Strength': '> 0.48 N/mm²',
      'Compressive Strength': '> 12 MPa'
    },
    coverage: 'Approx. 120 - 150 sq.ft of 600x200x150 mm AAC blocks per 40 kg bag',
    standards: 'ASTM C1660-09, IS 2250',
    applications: ['AAC block masonry walls', 'Fly-ash brick jointing', 'Cellular lightweight concrete block walls', 'Precast panel joining'],
    type: 'sack'
  },

  // --- GROUTS & SEALANTS ---
  {
    id: 'hy-chemgrout-60',
    name: 'Hy Chemgrout 60',
    category: 'grouts',
    categoryLabel: 'Grouts & Sealants',
    shortDesc: 'Precision non-shrink cementitious grout delivering 60 MPa compressive strength for turbine baseplates, anchor bolts, and precast connections.',
    badge: '60 MPa Precision Grout',
    rating: 4.97,
    reviewsCount: 135,
    packaging: '25 kg Moisture-Proof Bag',
    features: ['Dual Expansion Mechanism', 'Zero Bleed & Rapid Fluid Flow', 'Withstands Severe Dynamic Shock Loads', 'High Early Strength'],
    specs: {
      '1 Day Compressive Strength': '> 25 MPa',
      '28 Days Compressive Strength': '> 65 MPa',
      'Modulus of Rupture': '> 5.5 MPa',
      'Effective Bearing Area': '> 90%'
    },
    coverage: 'Approx. 13.5 liters per 25 kg bag mixed to flowable consistency',
    standards: 'ASTM C1107 Grade B/C, CRD-C 621',
    applications: ['Heavy machinery and turbine base plates', 'Bridge bearing pads and anchor bolts', 'Precast column base pockets', 'Steel stanchions and crane rails'],
    type: 'sack'
  },
  {
    id: 'hybeq-jointseal-pu',
    name: 'Hybeq Jointseal PU',
    category: 'grouts',
    categoryLabel: 'Grouts & Sealants',
    shortDesc: 'Single-component high-modulus polyurethane elastomeric sealant for expansion joints, precast panels, and building perimeter sealing.',
    badge: 'Elastomeric PU Sealant',
    rating: 4.93,
    reviewsCount: 120,
    packaging: '600 ml Foil Sausage',
    features: ['Movement Accommodation Factor ±25%', 'Bubble-Free Curing in Humid Climates', 'Excellent Adhesion without Primer', 'Paintable Formulation'],
    specs: {
      'Shore A Hardness': '35 - 40',
      'Elongation at Break': '> 600%',
      'Skin Formation Time': '50 - 70 mins',
      'Service Temperature': '-40°C to +80°C'
    },
    coverage: 'Approx. 6 running meters per 600ml sausage for a 10mm x 10mm joint',
    standards: 'ISO 11600 Type F Class 25LM, ASTM C920 Type S',
    applications: ['Building expansion joints in floors & walls', 'Precast concrete facade joints', 'Window and door perimeter sealing', 'Industrial warehouse floor joints'],
    type: 'bucket'
  },

  // --- PRECAST & FLOORING ---
  {
    id: 'hy-fastset-ac',
    name: 'Hy Fastset AC',
    category: 'precast',
    categoryLabel: 'Precast & Flooring',
    shortDesc: 'Hybrid polycarboxylate ether (PCE) superplasticizer and de-molding accelerator engineered for high early strength in precast elements.',
    badge: 'Precast PCE Accelerator',
    rating: 4.99,
    reviewsCount: 95,
    packaging: '200L Barrel & 1000L IBC Tank',
    features: ['Water Reduction up to 35%', 'Accelerates De-Molding by 40%', 'Enables Steam Curing Reduction', 'Superior Self-Compacting Flow'],
    specs: {
      'Specific Gravity': '1.08 ± 0.02',
      'Chloride Content': '< 0.05% (Nil)',
      'Dosage': '0.6% - 1.5% by weight of cementitious material'
    },
    coverage: 'Engineered dosage per cubic meter of concrete mix design',
    standards: 'ASTM C494 Type F & E, IS 9103:1999',
    applications: ['Precast hollow core slabs and girders', 'Railway concrete sleepers', 'Ready-mix self-compacting concrete (SCC)', 'Fast-track paving tiles'],
    type: 'drum'
  },
  {
    id: 'hy-hardtop-330',
    name: 'Hy Hardtop 330',
    category: 'precast',
    categoryLabel: 'Precast & Flooring',
    shortDesc: 'Non-metallic mineral aggregate dry-shake floor hardener providing extreme abrasion resistance for heavy industrial warehouses and logistics hubs.',
    badge: 'Abrasion Class AR 0.5',
    rating: 4.91,
    reviewsCount: 78,
    packaging: '25 kg Moisture-Resistant Bag',
    features: ['Increases Abrasion Resistance by 300%', 'Monolithic Bond with Green Concrete', 'Resists Oil & Grease Penetration', 'Dust-Proof Surface'],
    specs: {
      'Mohs Hardness': '> 7.5',
      'Böhme Abrasion Resistance': '< 5 cm³/50 cm²',
      'Compressive Strength': '> 70 MPa'
    },
    coverage: 'Light duty: 3.5 kg/m² | Medium duty: 5.0 kg/m² | Heavy duty: 7.0 kg/m²',
    standards: 'EN 13813 CT-C70-F7-AR0.5, BS 8204',
    applications: ['Warehouses and distribution centers', 'Automobile service stations and workshops', 'Manufacturing plants and loading docks', 'Basement car parking lots'],
    type: 'sack'
  }
];
