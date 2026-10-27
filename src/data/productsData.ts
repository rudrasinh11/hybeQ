export interface Product {
  id: string;
  name: string;
  category: string;
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
  // Authoritative calculation parameters for Part 5 synchronization
  calcEligible?: boolean;
  packSizeKg?: number;
  packUnitName?: string;
  calcFormulaType?: 'tile' | 'membrane' | 'mortar' | 'grout' | 'sealant' | 'hardener' | 'liquid';
}

// Exactly 14 Categories in the strict order requested in Part 8.1
export interface ProductCategory {
  id: string;
  label: string;
  aliases?: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: 'tile-fixing', label: 'TILE & STONE FIXING' },
  { id: 'precast-additives', label: 'PRECAST ADDITIVES', aliases: ['precast'] },
  { id: 'waterproofing', label: 'WATERPROOFING' },
  { id: 'plasticizers', label: 'PLASTICIZERS RMC/PQC' },
  { id: 'grouts', label: 'GROUTING SYSTEMS' },
  { id: 'surface-treatment', label: 'SURFACE TREATMENT' },
  { id: 'bonding-agent', label: 'BONDING AGENT' },
  { id: 'structural-repair', label: 'STRUCTURAL REPAIR', aliases: ['repairs'] },
  { id: 'sealants', label: 'SEALANTS' },
  { id: 'decorative-floor-wall', label: 'DECORATIVE FLOOR & WALL' },
  { id: 'drymix-mortar', label: 'DRYMIX MORTAR' },
  { id: 'curing-compounds', label: 'CURING COMPOUNDS' },
  { id: 'epoxy-flooring', label: 'EPOXY FLOORING' },
  { id: 'epoxy-screed', label: 'EPOXY SCREED' }
];

export function normalizeCategorySlug(slug?: string): string {
  if (!slug || slug === 'all') return 'all';
  const clean = slug.toLowerCase().trim();
  const directMatch = PRODUCT_CATEGORIES.find(c => c.id === clean);
  if (directMatch) return directMatch.id;
  const aliasMatch = PRODUCT_CATEGORIES.find(c => c.aliases && c.aliases.includes(clean));
  if (aliasMatch) return aliasMatch.id;
  return clean;
}

export function getCategoryLabel(catId: string): string {
  const normalized = normalizeCategorySlug(catId);
  const found = PRODUCT_CATEGORIES.find(c => c.id === normalized);
  return found ? found.label : catId.toUpperCase();
}

export function getProductImage(product: Product): string {
  if (product.image) return product.image;
  if (product.id === 'hycera-505') return '/images/hybeq_live/product_hycera-505170.png';
  if (product.id === 'hyintra-507') return '/images/hybeq_live/product_hyintra-507435.png';
  if (product.id === 'hyultra-515') return '/images/hybeq_live/product_Hyultra-515901.png';
  if (product.id === 'hymax-525') return '/images/hybeq_live/product_hymax-525147.png';
  if (product.category === 'waterproofing' || product.type === 'bucket') return '/images/product-waterproof-bucket.png';
  if (product.category === 'grouts') return '/images/product-epoxy-grout.png';
  if (product.type === 'drum') return '/images/hybeq_live/product_hyintra-507435.png';
  return '/images/hybeq_live/product_hycera-505170.png';
}

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. TILE & STONE FIXING
  // ==========================================
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
    type: 'sack',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Bags (20 kg)',
    calcFormulaType: 'tile'
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
    type: 'sack',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Bags (20 kg)',
    calcFormulaType: 'tile'
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
    type: 'sack',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Bags (20 kg)',
    calcFormulaType: 'tile'
  },
  {
    id: 'hymax-525',
    name: 'Hymax 525',
    category: 'tile-fixing',
    categoryLabel: 'Tile & Stone Fixing',
    shortDesc: 'Extreme performance tile-on-tile adhesive formulated for fixing new tiles over existing glazed tiles without chipping or surface profiling.',
    badge: 'IS 15477 Type 4',
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
    type: 'sack',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Bags (20 kg)',
    calcFormulaType: 'tile'
  },
  {
    id: 'hy-spot-bond',
    name: 'Hy Spot Bond (750)',
    category: 'tile-fixing',
    categoryLabel: 'Tile & Stone Fixing',
    shortDesc: 'High-strength two-component epoxy adhesive designed for spot fixing and dry cladding of heavy granite, marble, and engineered stone slabs.',
    badge: 'Epoxy Spot Cladding',
    rating: 4.93,
    reviewsCount: 74,
    packaging: '3 kg & 6 kg Kit',
    features: ['Non-Sag Paste Formulation', 'Extreme Tensile Adhesion', 'Interior & Exterior Wall Facades', 'Rapid Cure Under Normal Ambient'],
    specs: {
      'Tensile Adhesion': '> 3.5 N/mm²',
      'Pot Life': '30 minutes at 30°C',
      'Sag Resistance': 'Zero sag up to 10mm thickness'
    },
    coverage: 'Varies with spot density (approx. 20 - 25 spots per kg)',
    standards: 'ASTM C881 Type I & IV',
    applications: ['Mechanical dry cladding backup', 'Heavy marble wall installations', 'Overhead stone spot fixing'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 3,
    packUnitName: 'Kits (3 kg)',
    calcFormulaType: 'mortar'
  },
  {
    id: 'hy-masterflex-70',
    name: 'Hy Masterflex 70',
    category: 'tile-fixing',
    categoryLabel: 'Tile & Stone Fixing',
    shortDesc: 'Ultra-flexible polymer-fortified thin-set adhesive designed for extreme vibration, drywall partitions, and large format slab applications.',
    badge: 'IS 15477 Type 3 / S2',
    rating: 4.96,
    reviewsCount: 82,
    packaging: '20 kg Bag',
    features: ['Super Deformable Class S2', 'Absorbs Substrate Deflections', 'Excellent Wet Area Adhesion', 'Fiber-Reinforced Matrix'],
    specs: {
      'Deformability': '> 5.0 mm (Class S2)',
      'Tensile Adhesion': '> 2.2 N/mm²'
    },
    coverage: 'Approx. 35 - 40 sq.ft per 20 kg bag at 4mm notch',
    standards: 'IS 15477:2019 Type 3, EN 12004 C2TE S2',
    applications: ['Plywood and cement board partitions', 'High-rise external facades', 'Swimming pool surrounds'],
    type: 'sack',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Bags (20 kg)',
    calcFormulaType: 'tile'
  },

  // ==========================================
  // 2. PRECAST ADDITIVES
  // ==========================================
  {
    id: 'hy-fastset-ac',
    name: 'Hy Fastset AC',
    category: 'precast-additives',
    categoryLabel: 'Precast Additives',
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
    coverage: 'Engineered dosage per cubic meter of concrete mix design (approx. 0.8% - 1.2% by cement wt)',
    standards: 'ASTM C494 Type F & E, IS 9103:1999',
    applications: ['Precast hollow core slabs and girders', 'Railway concrete sleepers', 'Ready-mix self-compacting concrete (SCC)', 'Fast-track paving tiles'],
    type: 'drum',
    calcEligible: true,
    packSizeKg: 200,
    packUnitName: 'Barrels (200 Ltr)',
    calcFormulaType: 'liquid'
  },
  {
    id: 'hy-fastset-ac-hybrid',
    name: 'Hy Fastset AC Hybrid',
    category: 'precast-additives',
    categoryLabel: 'Precast Additives',
    shortDesc: 'High-performance multi-functional hardening accelerator and plasticizer for precast concrete block and paver manufacturing.',
    badge: 'High Early Strength',
    rating: 4.94,
    reviewsCount: 68,
    packaging: '200L Drum',
    features: ['Reduces Cycle Time by 50%', 'Crisp Edge Formation in Blocks', 'Increased Early Compressive Strength', 'Non-Corrosive Formula'],
    specs: {
      'Specific Gravity': '1.12 ± 0.02',
      'pH': '6.5 - 8.5',
      'Dosage': '0.5% - 1.2% by weight of cement'
    },
    coverage: 'Approx. 0.5 - 1.0 kg per 100 kg of cementitious binder',
    standards: 'ASTM C494 Type C, IS 9103',
    applications: ['Precast paver blocks and kerbstones', 'Solid & hollow concrete blocks', 'Precast prestressed beams'],
    type: 'drum',
    calcEligible: true,
    packSizeKg: 200,
    packUnitName: 'Drums (200 kg)',
    calcFormulaType: 'liquid'
  },
  {
    id: 'hy-shine-lacquer',
    name: 'Hy Shine Lacquer 01',
    category: 'precast-additives',
    categoryLabel: 'Precast Additives',
    shortDesc: 'Solvent-based clear acrylic gloss coating for enhancing color depth and water repellency of precast pavers and concrete tiles.',
    badge: 'Gloss Protective Sealer',
    rating: 4.88,
    reviewsCount: 46,
    packaging: '20L Pail & 200L Drum',
    features: ['High UV Gloss Retention', 'Resists Oil & Grease Stains', 'Prevents Surface Efflorescence', 'Easy Spray or Roller Application'],
    specs: {
      'Specific Gravity': '0.92 ± 0.02',
      'Drying Time': '20 - 30 minutes',
      'VOC Content': '< 350 g/L'
    },
    coverage: 'Approx. 60 - 80 sq.ft per liter per coat (2 coats recommended)',
    standards: 'ASTM C309 Type I Class B',
    applications: ['Precast interlocking paving blocks', 'Stamped concrete walkways', 'Exposed aggregate wall panels'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Pails (20 Ltr)',
    calcFormulaType: 'liquid'
  },

  // ==========================================
  // 3. WATERPROOFING
  // ==========================================
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
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Pails (20 Ltr / 20 kg)',
    calcFormulaType: 'membrane'
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
    type: 'sack',
    calcEligible: true,
    packSizeKg: 25,
    packUnitName: 'Bags (25 kg)',
    calcFormulaType: 'membrane'
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
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 15,
    packUnitName: 'Kits (15 kg)',
    calcFormulaType: 'membrane'
  },
  {
    id: 'hy-rainseal-f1',
    name: 'Hy Rainseal F1',
    category: 'waterproofing',
    categoryLabel: 'Waterproofing Systems',
    shortDesc: 'Silicone-based penetrating water repellent for exterior masonry, exposed concrete, and brick facades preventing rain dampness and algae.',
    badge: 'Silicone Penetrating',
    rating: 4.9,
    reviewsCount: 88,
    packaging: '5L & 20L Cans',
    features: ['Invisible Breathable Protection', 'High Water Droplet Beading', 'Prevents White Efflorescence', 'UV & Weather Proof'],
    specs: {
      'Specific Gravity': '0.82 ± 0.02',
      'Flash Point': '> 38°C',
      'Penetration Depth': '3 - 5 mm in porous masonry'
    },
    coverage: 'Approx. 40 - 50 sq.ft per liter depending on substrate porosity',
    standards: 'ASTM E514, BS 6477',
    applications: ['Exposed brick and clay tile facades', 'Natural stone claddings', 'Exterior cement plaster walls'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Cans (20 Ltr)',
    calcFormulaType: 'liquid'
  },

  // ==========================================
  // 4. PLASTICIZERS RMC/PQC
  // ==========================================
  {
    id: 'hy-superconcrete-650',
    name: 'Hy Superconcrete 650',
    category: 'plasticizers',
    categoryLabel: 'Plasticizers RMC/PQC',
    shortDesc: 'High-performance polycarboxylate ether (PCE) superplasticizer for ready-mix concrete with extended slump retention and rapid strength development.',
    badge: 'PCE RMC Superplasticizer',
    rating: 4.97,
    reviewsCount: 92,
    packaging: '200L Drum & 1000L IBC',
    features: ['High Slump Retention up to 120 Minutes', 'Water Reduction Exceeding 30%', 'High Early & 28-Day Compressive Strength', 'Ideal for High-Rise Pumping'],
    specs: {
      'Specific Gravity': '1.08 ± 0.02',
      'pH': '6.0 - 7.5',
      'Chloride Content': '< 0.05%'
    },
    coverage: 'Dosage: 0.5% - 1.5% by weight of total cementitious material',
    standards: 'IS 9103:1999, ASTM C494 Type G',
    applications: ['Ready-mix concrete for long haul transit', 'High-grade concrete (M40 to M80)', 'Heavily reinforced structural members'],
    type: 'drum',
    calcEligible: true,
    packSizeKg: 200,
    packUnitName: 'Drums (200 Ltr)',
    calcFormulaType: 'liquid'
  },
  {
    id: 'hy-superconcrete-p750',
    name: 'Hy Superconcrete P-750',
    category: 'plasticizers',
    categoryLabel: 'Plasticizers RMC/PQC',
    shortDesc: 'Heavy-duty water-reducing and set-retarding admixture engineered specifically for Pavement Quality Concrete (PQC) in highways and airport runways.',
    badge: 'PQC Highway Formulation',
    rating: 4.95,
    reviewsCount: 78,
    packaging: '220 kg Drum',
    features: ['Prevents Cold Joints in Continuous Paving', 'Optimized Flexural Strength', 'Controlled Set Retardation in High Heat', 'Improves Slip-Form Finish'],
    specs: {
      'Specific Gravity': '1.14 ± 0.02',
      'Water Reduction': '18% - 25%',
      'Chloride Content': 'Nil'
    },
    coverage: 'Dosage: 0.3% - 0.8% by weight of cementitious binder',
    standards: 'MoRTH Section 1000, IS 9103, ASTM C494 Type D',
    applications: ['Expressway and highway concrete pavements', 'Airport runway slabs and aprons', 'Industrial container yard pavements'],
    type: 'drum',
    calcEligible: true,
    packSizeKg: 220,
    packUnitName: 'Drums (220 kg)',
    calcFormulaType: 'liquid'
  },

  // ==========================================
  // 5. GROUTING SYSTEMS
  // ==========================================
  {
    id: 'hy-chemgrout-60',
    name: 'Hy Chemgrout 60',
    category: 'grouts',
    categoryLabel: 'Grouting Systems',
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
    coverage: 'Approx. 13.5 liters of fluid grout per 25 kg bag mixed with water',
    standards: 'ASTM C1107 Grade B/C, CRD-C 621',
    applications: ['Heavy machinery and turbine base plates', 'Bridge bearing pads and anchor bolts', 'Precast column base pockets', 'Steel stanchions and crane rails'],
    type: 'sack',
    calcEligible: true,
    packSizeKg: 25,
    packUnitName: 'Bags (25 kg)',
    calcFormulaType: 'mortar'
  },
  {
    id: 'hy-chemgrout-70',
    name: 'Hy Chemgrout 70',
    category: 'grouts',
    categoryLabel: 'Grouting Systems',
    shortDesc: 'Ultra-high strength precision non-shrink engineering grout reaching > 70 MPa for heavy industrial stamping presses and turbine installations.',
    badge: '70 MPa Ultra Grout',
    rating: 4.99,
    reviewsCount: 84,
    packaging: '25 kg Bag',
    features: ['Exceptional Ultimate Compressive Strength', 'High Dynamic Vibration Damping', 'Zero Shrinkage Guaranteed', 'Fluid Placement into Complex Pockets'],
    specs: {
      '3 Days Compressive Strength': '> 45 MPa',
      '28 Days Compressive Strength': '> 75 MPa',
      'Expansion': '+0.2% to +1.0%'
    },
    coverage: 'Approx. 13.0 liters per 25 kg bag',
    standards: 'ASTM C1107 Grade C',
    applications: ['Turbine pedestals and generators', 'Steel rolling mill stands', 'High-load anchor bolt grouting'],
    type: 'sack',
    calcEligible: true,
    packSizeKg: 25,
    packUnitName: 'Bags (25 kg)',
    calcFormulaType: 'mortar'
  },
  {
    id: 'hy-epoxy-grout',
    name: 'Hy Epoxy Grout 3K',
    category: 'grouts',
    categoryLabel: 'Grouting Systems',
    shortDesc: 'Three-component high-performance chemical-resistant epoxy grout for stain-proof, waterproof, and hygienic joint filling.',
    badge: '3K Chemical Resistant',
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
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 5,
    packUnitName: 'Buckets (5 kg)',
    calcFormulaType: 'grout'
  },

  // ==========================================
  // 6. SURFACE TREATMENT
  // ==========================================
  {
    id: 'hybeq-metacor',
    name: 'Hybeq Metacor',
    category: 'surface-treatment',
    categoryLabel: 'Surface Treatment',
    shortDesc: 'Zinc-rich epoxy primer and active corrosion inhibitor designed to protect structural reinforcing steel during repair and refurbishment.',
    badge: 'Zinc-Rich Rebar Primer',
    rating: 4.91,
    reviewsCount: 65,
    packaging: '1L & 5L Pack',
    features: ['Active Galvanic Cathodic Protection', 'High Bond to Concrete and Steel', 'Rapid Recoat Window', 'Solvent-Free Safety'],
    specs: {
      'Zinc Content in Dry Film': '> 85%',
      'Adhesion to Steel': '> 5.0 N/mm²',
      'Drying Time': '30 - 45 minutes'
    },
    coverage: 'Approx. 8 - 10 m² per liter per coat (75 microns DFT)',
    standards: 'BS 4652, ASTM A775',
    applications: ['Exposed rusted rebar treatment', 'Bridge pier and column spalling repair', 'Coastal structure concrete restoration'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 5,
    packUnitName: 'Packs (5 Ltr)',
    calcFormulaType: 'liquid'
  },
  {
    id: 'hybeq-floorloc',
    name: 'Hybeq Floorloc',
    category: 'surface-treatment',
    categoryLabel: 'Surface Treatment',
    shortDesc: 'Lithium silicate based concrete hardener, densifier, and chemical dustproofer for industrial warehouse concrete floors.',
    badge: 'Lithium Silicate Densifier',
    rating: 4.93,
    reviewsCount: 71,
    packaging: '20L Pail & 200L Drum',
    features: ['Deep Chemical Penetration', 'Eliminates Concrete Dusting Forever', 'Increases Abrasion Resistance by 40%', 'Produces Silky Reflective Sheen with Burnishing'],
    specs: {
      'Active Solids': '> 15% Lithium Silicate',
      'Specific Gravity': '1.10 ± 0.02',
      'VOC': '0 g/L (Water-Based)'
    },
    coverage: 'Approx. 150 - 200 sq.ft per liter depending on concrete porosity',
    standards: 'ASTM C779, Green Building Certified',
    applications: ['Warehouses and logistics centers', 'Automotive manufacturing shop floors', 'Commercial parking basements'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Pails (20 Ltr)',
    calcFormulaType: 'liquid'
  },

  // ==========================================
  // 7. BONDING AGENT
  // ==========================================
  {
    id: 'hybeq-sbr-latex',
    name: 'Hybeq SBR Latex 44',
    category: 'bonding-agent',
    categoryLabel: 'Bonding Agent',
    shortDesc: 'High-solids styrene butadiene copolymer latex emulsion engineered as an all-in-one bonding agent, waterproof slurry additive, and repair modifier.',
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
    type: 'drum',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Pails (20 Ltr)',
    calcFormulaType: 'liquid'
  },
  {
    id: 'hybeq-hack-aid',
    name: 'Hybeq Hack Aid',
    category: 'bonding-agent',
    categoryLabel: 'Bonding Agent',
    shortDesc: 'Single-component polymeric bonding agent with graded quartz aggregates that eliminates the need for manual mechanical hacking on smooth RCC surfaces.',
    badge: 'RCC Mechanical Key',
    rating: 4.89,
    reviewsCount: 89,
    packaging: '20 kg Bucket',
    features: ['Replaces Manual Surface Hacking', 'Coarse Quartz Aggregate Keying', 'Prevents Plaster Debonding', 'Ready-To-Apply Roller System'],
    specs: {
      'Tensile Pull-Off Strength': '> 1.8 N/mm²',
      'Specific Gravity': '1.45 ± 0.05',
      'Open Window for Plastering': 'Up to 7 days'
    },
    coverage: 'Approx. 80 - 100 sq.ft per kg on smooth concrete surfaces',
    standards: 'ASTM C1059',
    applications: ['Monolithic ceiling plaster bonding', 'Shear walls and precast columns', 'Aluminium formwork concrete walls'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Buckets (20 kg)',
    calcFormulaType: 'liquid'
  },

  // ==========================================
  // 8. STRUCTURAL REPAIR
  // ==========================================
  {
    id: 'hy-microconcrete-m40',
    name: 'Hy Microconcrete M40',
    category: 'structural-repair',
    categoryLabel: 'Structural Repair',
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
    coverage: 'Approx. 13 liters of fresh fluid mortar per 25 kg bag (approx. 2.2 kg/m² per 1mm thickness)',
    standards: 'ASTM C1107 Grade C, EN 1504-3 R4 Class',
    applications: ['Column jacketing and strengthening', 'Damaged beam rehabilitation', 'Deep section concrete restoration (50mm - 250mm)', 'Machinery foundation pads'],
    type: 'sack',
    calcEligible: true,
    packSizeKg: 25,
    packUnitName: 'Bags (25 kg)',
    calcFormulaType: 'mortar'
  },
  {
    id: 'hy-microconcrete-m70',
    name: 'Hy Microconcrete M70',
    category: 'structural-repair',
    categoryLabel: 'Structural Repair',
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
    type: 'sack',
    calcEligible: true,
    packSizeKg: 25,
    packUnitName: 'Bags (25 kg)',
    calcFormulaType: 'mortar'
  },
  {
    id: 'hybeq-pluggfast',
    name: 'Hybeq Pluggfast',
    category: 'structural-repair',
    categoryLabel: 'Structural Repair',
    shortDesc: 'Ultra-rapid setting hydraulic cement compound designed to plug active water leaks and gusher springs in concrete basements within 60 to 90 seconds.',
    badge: '60-Sec Water Plug',
    rating: 4.96,
    reviewsCount: 110,
    packaging: '5 kg & 15 kg Pails',
    features: ['Sets Under Running Water in 60 Secs', 'High Early Compressive Strength', 'Non-Toxic & Potable Water Approved', 'Expands During Cure for Tight Seal'],
    specs: {
      'Initial Set Time': '60 - 90 seconds',
      'Final Set Time': '3 minutes',
      'Compressive Strength (1 Hour)': '> 12 MPa'
    },
    coverage: 'Approx. 1 kg fills 0.6 liters of cavity volume',
    standards: 'ASTM C109, ASTM C191',
    applications: ['Active water gushers in basements', 'Leaking joints in water reservoirs', 'Tunnel and sewer pipe leak stoppage'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 5,
    packUnitName: 'Pails (5 kg)',
    calcFormulaType: 'mortar'
  },

  // ==========================================
  // 9. SEALANTS
  // ==========================================
  {
    id: 'hybeq-jointseal-pu',
    name: 'Hybeq Jointseal PU',
    category: 'sealants',
    categoryLabel: 'Sealants',
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
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 1,
    packUnitName: 'Sausages (600 ml)',
    calcFormulaType: 'sealant'
  },
  {
    id: 'hybeq-jointseal-ms',
    name: 'Hybeq Jointseal MS',
    category: 'sealants',
    categoryLabel: 'Sealants',
    shortDesc: 'Solvent-free modified silane polymer sealant with extreme UV resistance and non-staining properties for natural stone and facade expansion joints.',
    badge: 'Non-Staining MS Polymer',
    rating: 4.95,
    reviewsCount: 64,
    packaging: '600 ml Sausage',
    features: ['Zero Silicone Oil Bleed (No Stone Staining)', '100% UV Resistant & Weatherproof', 'Low VOC & Isocyanate Free', 'Over-Paintable with Acrylic Coatings'],
    specs: {
      'Elongation': '> 700%',
      'Shore A Hardness': '25 - 30',
      'Movement Capability': '±35%'
    },
    coverage: 'Approx. 6 running meters per 600ml sausage for 10x10mm joint',
    standards: 'ISO 11600 Type F 25LM, ASTM C920',
    applications: ['Natural marble and granite facade joints', 'Cleanrooms and green buildings', 'Curtain wall perimeter sealing'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 1,
    packUnitName: 'Sausages (600 ml)',
    calcFormulaType: 'sealant'
  },

  // ==========================================
  // 10. DECORATIVE FLOOR & WALL
  // ==========================================
  {
    id: 'hy-hardtop-330',
    name: 'Hy Hardtop 330',
    category: 'decorative-floor-wall',
    categoryLabel: 'Decorative Floor & Wall',
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
    type: 'sack',
    calcEligible: true,
    packSizeKg: 25,
    packUnitName: 'Bags (25 kg)',
    calcFormulaType: 'hardener'
  },
  {
    id: 'hybeq-microcement-wall',
    name: 'Hybeq Microcement Wall Finish',
    category: 'decorative-floor-wall',
    categoryLabel: 'Decorative Floor & Wall',
    shortDesc: 'Polymer-infused architectural microcement system creating seamless, continuous industrial concrete aesthetic finishes for interior walls and furniture.',
    badge: 'Seamless Microcement',
    rating: 4.92,
    reviewsCount: 55,
    packaging: '15 kg Kit (Base + Liquid)',
    features: ['Ultra-Thin Application (2mm)', 'Continuous Seamless Aesthetic', 'High Scratch & Stain Resistance', 'Customizable Concrete Textures'],
    specs: {
      'Application Thickness': '1.5 - 2.5 mm',
      'Adhesion to Substrate': '> 2.0 N/mm²',
      'Flexural Strength': '> 8.5 MPa'
    },
    coverage: 'Approx. 1.8 - 2.2 kg/m² for 2mm complete system in two coats',
    standards: 'EN 13813, ISO 9001',
    applications: ['Luxury boutique interior walls', 'Bathroom and shower wall surfaces', 'Architectural countertops and retail spaces'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 15,
    packUnitName: 'Kits (15 kg)',
    calcFormulaType: 'membrane'
  },

  // ==========================================
  // 11. DRYMIX MORTAR
  // ==========================================
  {
    id: 'hy-blockcrete-mortar',
    name: 'Hy Blockcrete AAC Mortar',
    category: 'drymix-mortar',
    categoryLabel: 'Drymix Mortar',
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
    type: 'sack',
    calcEligible: true,
    packSizeKg: 40,
    packUnitName: 'Bags (40 kg)',
    calcFormulaType: 'mortar'
  },
  {
    id: 'co-superplast-pb',
    name: 'Co Superplast PB',
    category: 'drymix-mortar',
    categoryLabel: 'Drymix Mortar',
    shortDesc: 'Pre-mixed polymer modified plastering mortar engineered for crack-free interior and exterior wall rendering with superior workability.',
    badge: 'Crack-Free Ready Plaster',
    rating: 4.88,
    reviewsCount: 62,
    packaging: '40 kg Bag',
    features: ['Eliminates On-Site Sand Sieving & Washing', 'Controlled Shrinkage Formula', 'High Water Retentivity', 'Super Smooth Finishing Quality'],
    specs: {
      'Compressive Strength': '> 7.5 MPa',
      'Tensile Adhesion': '> 0.5 N/mm²',
      'Thickness': '8 - 15 mm'
    },
    coverage: 'Approx. 20 - 24 sq.ft per 40 kg bag at 12mm thickness',
    standards: 'IS 1661, IS 2250',
    applications: ['Internal brick wall plastering', 'External weather-resistant facade plaster', 'Ceiling rendering'],
    type: 'sack',
    calcEligible: true,
    packSizeKg: 40,
    packUnitName: 'Bags (40 kg)',
    calcFormulaType: 'mortar'
  },

  // ==========================================
  // 12. CURING COMPOUNDS
  // ==========================================
  {
    id: 'hy-supercure-w1',
    name: 'Hy Supercure W1',
    category: 'curing-compounds',
    categoryLabel: 'Curing Compounds',
    shortDesc: 'Water-based wax-emulsion concrete curing compound that forms an impermeable moisture-retention film for large-scale concrete flatwork.',
    badge: 'Moisture Barrier Curing',
    rating: 4.91,
    reviewsCount: 52,
    packaging: '20L Pail & 200L Drum',
    features: ['Curing Efficiency > 85%', 'Eliminates Manual Water Ponding & Hessian Bags', 'Reduces Shrinkage Cracking', 'Environmentally Friendly Water-Based'],
    specs: {
      'Water Retention Efficiency': '> 85%',
      'Specific Gravity': '0.98 ± 0.02',
      'Drying Time': '2 - 3 hours'
    },
    coverage: 'Approx. 4.5 - 5.5 m² per liter (45 - 55 sq.ft/L)',
    standards: 'ASTM C309 Type 1 Class A, BS 7542',
    applications: ['Highway pavements and bridge decks', 'Airport aprons and parking slabs', 'Industrial concrete floor slabs'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Pails (20 Ltr)',
    calcFormulaType: 'liquid'
  },
  {
    id: 'hy-supercure-ar',
    name: 'Hy Supercure AR',
    category: 'curing-compounds',
    categoryLabel: 'Curing Compounds',
    shortDesc: 'Clear acrylic resin curing and sealing compound that cures, hardens, and dustproofs concrete in a single operation without yellowing.',
    badge: 'Dual Cure & Seal',
    rating: 4.93,
    reviewsCount: 44,
    packaging: '20L Pail & 200L Drum',
    features: ['Cures and Seals in One Step', 'Non-Yellowing UV Resistant', 'Compatible with Future Coatings', 'Enhances Surface Compressive Strength'],
    specs: {
      'Water Retention': '> 80%',
      'Active Solids': '18 ± 1%',
      'Film Type': 'Clear Transparent'
    },
    coverage: 'Approx. 5.0 - 6.0 m² per liter',
    standards: 'ASTM C309 Type 1 Class B, ASTM C1315',
    applications: ['Architectural exposed concrete', 'Industrial warehouse floors', 'Precast concrete components'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 20,
    packUnitName: 'Pails (20 Ltr)',
    calcFormulaType: 'liquid'
  },

  // ==========================================
  // 13. EPOXY FLOORING
  // ==========================================
  {
    id: 'hybeq-epoxy-selflevel-500',
    name: 'Hybeq Epoxy Self Level 500',
    category: 'epoxy-flooring',
    categoryLabel: 'Epoxy Flooring',
    shortDesc: 'Solvent-free high-gloss four-component self-levelling epoxy floor topping for sterile pharmaceutical cleanrooms and automotive assembly plants.',
    badge: 'Cleanroom Grade Epoxy',
    rating: 4.98,
    reviewsCount: 86,
    packaging: '15 kg Multi-Part Pack',
    features: ['Mirror Smooth Seamless Surface', 'Extreme Chemical & Acid Resistance', 'Anti-Microbial & Easily Sanitized', 'High Wear and Scratch Tolerance'],
    specs: {
      'Application Thickness': '1.5 mm to 3.0 mm',
      'Compressive Strength': '> 70 MPa',
      'Tensile Strength': '> 25 MPa',
      'Shore D Hardness': '> 80'
    },
    coverage: 'Approx. 1.8 kg/m² per 1mm thickness',
    standards: 'EN 13813 SR-B2.0-AR0.5-IR20, ISO 14644 Cleanroom Class',
    applications: ['Pharmaceutical formulation plants', 'Electronics cleanrooms and labs', 'Automobile assembly lines', 'Hospital operating theatres'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 15,
    packUnitName: 'Packs (15 kg)',
    calcFormulaType: 'membrane'
  },

  // ==========================================
  // 14. EPOXY SCREED
  // ==========================================
  {
    id: 'hybeq-epoxy-screed-finish',
    name: 'Hybeq Epoxy Screed Finish',
    category: 'epoxy-screed',
    categoryLabel: 'Epoxy Screed',
    shortDesc: 'Heavy-duty three-component high-build epoxy resin screed formulated to repair and protect concrete floors subject to continuous heavy impact and chemical washdowns.',
    badge: 'Heavy Impact Screed',
    rating: 4.96,
    reviewsCount: 58,
    packaging: '25 kg Multi-Component Kit',
    features: ['High Compressive Strength > 85 MPa', 'Resists Heavy Forklift & Steel Wheel Traffic', 'Thermal Shock Resistance to 90°C', 'Seamless Chemical Resistant Matrix'],
    specs: {
      'Application Thickness': '4 mm to 8 mm',
      'Compressive Strength': '> 85 MPa',
      'Flexural Strength': '> 30 MPa',
      'Bond Strength to Concrete': '> 3.5 N/mm² (Concrete Fails)'
    },
    coverage: 'Approx. 2.1 kg/m² per 1mm thickness (approx. 10.5 kg/m² at 5mm screed)',
    standards: 'EN 1504-2, BS 8204 Part 6',
    applications: ['Chemical processing plants', 'Heavy engineering workshops', 'Beverage and dairy processing bays', 'Loading docks and forklift ramps'],
    type: 'bucket',
    calcEligible: true,
    packSizeKg: 25,
    packUnitName: 'Kits (25 kg)',
    calcFormulaType: 'mortar'
  }
];
