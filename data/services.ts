export interface Service {
  slug: 'cartons' | 'labels' | 'leaflets' | 'decorative' | 'healthcare' | 'sustainable' | 'pre-press';
  title: string;
  intro: string;
  description: string;
  features: string[];
  process: { step: string; description: string }[];
  gallery: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'cartons',
    title: 'Folding Cartons',
    intro: 'Premium packaging solutions for pharmaceuticals and consumer goods',
    description: 'Our state-of-the-art carton production combines precision engineering with sustainable materials to deliver packaging that protects your products and enhances your brand.',
    features: [
      'Pharmaceutical-grade quality',
      'Child-resistant closures',
      'Braille embossing',
      'Foil stamping',
      'Soft-touch lamination',
      'Spot UV coating',
      'Window patching',
      'Tamper evidence'
    ],
    process: [
      { step: 'Design & Pre-Press', description: 'Color management and proofing' },
      { step: 'Printing', description: 'High-quality offset and digital printing' },
      { step: 'Converting', description: 'Die-cutting and folding operations' },
      { step: 'Finishing', description: 'Foiling, embossing, and coating' },
      { step: 'Quality Control', description: 'Rigorous inspection and testing' },
      { step: 'Packaging & Delivery', description: 'Secure logistics and on-time delivery' }
    ],
    gallery: [
      'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg',
      'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg',
      'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg'
    ],
    icon: '📦'
  },
  {
    slug: 'labels',
    title: 'Labels & Stickers',
    intro: 'Adhesive solutions that stick with your brand',
    description: 'From product labels to promotional stickers, we deliver high-impact adhesive solutions with superior print quality and durability.',
    features: [
      'Waterproof materials',
      'Security features',
      'Variable data printing',
      'Holographic effects',
      'Peel & reveal',
      'Removable adhesives',
      'Temperature resistant',
      'FDA compliant materials'
    ],
    process: [
      { step: 'Material Selection', description: 'Choose optimal substrate and adhesive' },
      { step: 'Digital/Flexographic Print', description: 'High-speed, high-quality printing' },
      { step: 'Converting', description: 'Die-cutting to precise specifications' },
      { step: 'Finishing', description: 'Lamination and special effects' },
      { step: 'Quality Assurance', description: 'Adhesion and print quality testing' },
      { step: 'Roll or Sheet Delivery', description: 'Format to match your application needs' }
    ],
    gallery: [
      'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg',
      'https://images.pexels.com/photos/4386400/pexels-photo-4386400.jpeg',
      'https://images.pexels.com/photos/4386420/pexels-photo-4386420.jpeg'
    ],
    icon: '🏷️'
  },
  {
    slug: 'leaflets',
    title: 'Leaflets & Inserts',
    intro: 'Essential information delivered with precision',
    description: 'Pharmaceutical leaflets and product inserts that meet strict regulatory requirements while remaining user-friendly and accessible.',
    features: [
      'Regulatory compliance',
      'Multi-language printing',
      'Micro-text capability',
      'Folding expertise',
      'Tear-resistant papers',
      'Easy-read formats',
      'Serialization ready',
      'Braille compatibility'
    ],
    process: [
      { step: 'Content Review', description: 'Regulatory and linguistic verification' },
      { step: 'Typesetting', description: 'Precise text layout and formatting' },
      { step: 'Proofing', description: 'Multiple approval stages' },
      { step: 'High-Volume Printing', description: 'Efficient web-fed production' },
      { step: 'Folding & Cutting', description: 'Automated finishing processes' },
      { step: 'Packaging', description: 'Clean room environment packaging' }
    ],
    gallery: [
      'https://images.pexels.com/photos/4386301/pexels-photo-4386301.jpeg',
      'https://images.pexels.com/photos/4386310/pexels-photo-4386310.jpeg',
      'https://images.pexels.com/photos/4386340/pexels-photo-4386340.jpeg'
    ],
    icon: '📋'
  },
  {
    slug: 'decorative',
    title: 'Decorative Packaging',
    intro: 'Luxury finishing that elevates your brand',
    description: 'Transform ordinary packaging into extraordinary brand experiences with our premium decorative techniques and luxury finishing options.',
    features: [
      'Foil stamping',
      'Embossing & debossing',
      'Soft-touch coating',
      'Spot UV effects',
      'Metallic inks',
      'Texture effects',
      'Window applications',
      'Premium substrates'
    ],
    process: [
      { step: 'Design Consultation', description: 'Collaborate on visual impact strategies' },
      { step: 'Sample Creation', description: 'Physical prototypes for approval' },
      { step: 'Tooling Preparation', description: 'Custom dies and plates creation' },
      { step: 'Production Setup', description: 'Precision equipment calibration' },
      { step: 'Decorative Application', description: 'Expert finishing techniques' },
      { step: 'Final Inspection', description: 'Luxury quality standards verification' }
    ],
    gallery: [
      'https://images.pexels.com/photos/4386290/pexels-photo-4386290.jpeg',
      'https://images.pexels.com/photos/4386350/pexels-photo-4386350.jpeg',
      'https://images.pexels.com/photos/4386380/pexels-photo-4386380.jpeg'
    ],
    icon: '✨'
  },
  {
    slug: 'healthcare',
    title: 'Healthcare Packaging',
    intro: 'GMP-compliant solutions for pharmaceutical products',
    description: 'Specialized packaging for healthcare and pharmaceutical products, meeting the highest standards for safety, compliance, and patient accessibility.',
    features: [
      'GMP facility certification',
      'Serialization support',
      'Child-resistant packaging',
      'Senior-friendly designs',
      'Anti-counterfeiting features',
      'Temperature indicators',
      'Moisture barriers',
      'Regulatory artwork services'
    ],
    process: [
      { step: 'Compliance Review', description: 'Regulatory requirements analysis' },
      { step: 'Risk Assessment', description: 'Safety and security evaluation' },
      { step: 'Controlled Production', description: 'GMP-certified manufacturing' },
      { step: 'Serialization', description: 'Track and trace implementation' },
      { step: 'Validation Testing', description: 'Performance and safety verification' },
      { step: 'Secure Distribution', description: 'Chain of custody maintenance' }
    ],
    gallery: [
      'https://images.pexels.com/photos/4386450/pexels-photo-4386450.jpeg',
      'https://images.pexels.com/photos/4386460/pexels-photo-4386460.jpeg',
      'https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg'
    ],
    icon: '🏥'
  },
  {
    slug: 'sustainable',
    title: 'Sustainable Solutions',
    intro: 'Eco-friendly packaging for a better tomorrow',
    description: 'Leading the way in sustainable packaging with recyclable materials, carbon-neutral processes, and innovative eco-friendly solutions.',
    features: [
      'FSC certified materials',
      'Recyclable substrates',
      'Water-based inks',
      'Biodegradable options',
      'Carbon neutral printing',
      'Minimal packaging design',
      'Renewable energy powered',
      'Circular economy solutions'
    ],
    process: [
      { step: 'Sustainability Audit', description: 'Environmental impact assessment' },
      { step: 'Material Selection', description: 'Eco-friendly substrate choices' },
      { step: 'Clean Production', description: 'Renewable energy manufacturing' },
      { step: 'Waste Minimization', description: 'Zero-to-landfill processes' },
      { step: 'Carbon Offsetting', description: 'Tree planting and carbon capture' },
      { step: 'Lifecycle Tracking', description: 'End-to-end sustainability metrics' }
    ],
    gallery: [
      'https://images.pexels.com/photos/4386280/pexels-photo-4386280.jpeg',
      'https://images.pexels.com/photos/4386330/pexels-photo-4386330.jpeg',
      'https://images.pexels.com/photos/4386360/pexels-photo-4386360.jpeg'
    ],
    icon: '🌱'
  },
  {
    slug: 'pre-press',
    title: 'Pre-Press Services',
    intro: 'Expert color management and proofing',
    description: 'Professional pre-press services ensuring perfect color reproduction and print quality from concept to final production.',
    features: [
      'Color management',
      'Digital proofing',
      'File optimization',
      'Plate production',
      'Quality control',
      'Brand color matching',
      'Artwork verification',
      'Press-ready files'
    ],
    process: [
      { step: 'File Reception', description: 'Artwork intake and analysis' },
      { step: 'Pre-flight Check', description: 'Technical file verification' },
      { step: 'Color Management', description: 'Profile application and correction' },
      { step: 'Proofing', description: 'Digital and physical proof creation' },
      { step: 'Plate Generation', description: 'High-resolution plate production' },
      { step: 'Press Approval', description: 'Final quality verification' }
    ],
    gallery: [
      'https://images.pexels.com/photos/4386390/pexels-photo-4386390.jpeg',
      'https://images.pexels.com/photos/4386410/pexels-photo-4386410.jpeg',
      'https://images.pexels.com/photos/4386440/pexels-photo-4386440.jpeg'
    ],
    icon: '🎨'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}