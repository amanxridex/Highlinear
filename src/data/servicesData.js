export const servicesData = {
  construction: {
    hero: {
      title: "Building Excellence, One Project at a Time",
      subtitle: "From residential homes to large-scale commercial developments, we deliver projects with unmatched quality, precision, and reliability.",
      videoUrl: "https://videos.pexels.com/video-files/4255140/4255140-hd_1920_1080_30fps.mp4",
      imageUrl: "https://images.unsplash.com/photo-1541888082416-a7ae8fc69b35?q=80&w=1600&auto=format&fit=crop"
    },
    overview: {
      experience: "25+ Years",
      philosophy: "We believe in building structures that stand the test of time, marrying innovative techniques with traditional craftsmanship."
    },
    categories: [
      { title: "Residential Construction", items: ["Luxury homes", "Apartments", "Farmhouses", "Independent villas"] },
      { title: "Commercial Construction", items: ["Office buildings", "Shopping malls", "Hotels", "Retail stores", "Business parks"] },
      { title: "Industrial Construction", items: ["Factories", "Warehouses", "Manufacturing units", "Cold storage", "Industrial parks"] },
      { title: "Infrastructure", items: ["Roads", "Bridges", "Public buildings", "Utilities", "Government projects"] }
    ],
    process: ["Consultation", "Site Survey", "Planning", "Architectural Design", "Approvals", "Construction", "Quality Inspection", "Handover", "Maintenance"],
    tech: ["BIM", "Drone Survey", "3D Modeling", "AI Project Planning", "Smart Construction Monitoring", "Modern Machinery"],
    whyChooseUs: ["Experienced Team", "High Quality Materials", "On-Time Delivery", "Transparent Pricing", "Safety Standards", "Sustainable Construction"],
    equipment: ["Tower Cranes", "Excavators", "Concrete Pumps", "Loaders", "Earth Movers", "Hydraulic Lifts"],
    industries: ["Residential", "Commercial", "Industrial", "Healthcare", "Education", "Hospitality", "Government"]
  },
  architecture: {
    hero: {
      title: "Designing Spaces That Inspire Generations",
      subtitle: "Creating timeless designs that balance aesthetics, functionality, and sustainability.",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
    },
    overview: {
      philosophy: "Our architectural designs are rooted in a deep understanding of human needs, environmental context, and visionary aesthetics."
    },
    categories: [
      { title: "Our Services", items: ["Architectural Planning", "Master Planning", "Urban Planning", "3D Visualization", "Landscape Design", "Structural Design", "Interior Space Planning", "Building Information Modeling (BIM)"] }
    ],
    process: ["Discovery", "Concept", "Sketches", "3D Models", "Construction Drawings", "Approval", "Execution"],
    styles: ["Modern", "Minimal", "Luxury", "Industrial", "Traditional", "Contemporary"],
    software: ["AutoCAD", "Revit", "SketchUp", "Lumion", "3ds Max", "Rhino"],
    industries: ["Residential", "Commercial", "Cultural", "Civic"]
  },
  interiorDesign: {
    hero: {
      title: "Creating Beautiful Spaces That Feel Like Home",
      subtitle: "Transforming interiors into functional works of art.",
      imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
    },
    categories: [
      { title: "Residential", items: ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Dining", "Home Office", "Kids Room", "Balcony"] },
      { title: "Commercial", items: ["Office", "Reception", "Conference Room", "Restaurant", "Cafe", "Retail", "Hotel", "Clinic"] }
    ],
    styles: ["Luxury", "Minimal", "Modern", "Classic", "Industrial", "Scandinavian", "Bohemian"],
    materials: ["Wood", "Marble", "Granite", "Glass", "Steel", "Concrete", "Wallpaper", "Fabric"],
    industries: ["Residential", "Commercial", "Corporate", "Hospitality", "Retail", "Healthcare"]
  },
  renovation: {
    hero: {
      title: "Giving Existing Spaces a New Life",
      subtitle: "Revitalize your property with our expert renovation services.",
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
    },
    categories: [
      { title: "Core Services", items: ["Home Renovation", "Office Renovation", "Kitchen Remodeling", "Bathroom Remodeling", "Exterior Renovation", "Painting", "Flooring", "Waterproofing", "Roof Repairs", "Electrical", "Plumbing", "Structural Repair"] }
    ],
    process: ["Inspection", "Planning", "Budget", "Demolition", "Construction", "Interior Finish", "Cleaning", "Handover"],
    industries: ["Residential", "Commercial", "Industrial"]
  },
  consultancy: {
    hero: {
      title: "Expert Guidance for Successful Construction Projects",
      subtitle: "Strategic insights to mitigate risks and maximize ROI.",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop"
    },
    categories: [
      { title: "Consultancy Services", items: ["Project Planning", "Cost Estimation", "Tender Management", "Legal Documentation", "Building Approvals", "Structural Review", "Site Selection", "Risk Assessment", "Construction Audits", "Quality Audits", "Technical Due Diligence", "Project Feasibility"] }
    ],
    whoWeHelp: ["Homeowners", "Builders", "Developers", "Government", "Corporates", "Investors"],
    process: ["Book Meeting", "Site Visit", "Analysis", "Report", "Recommendations", "Execution Support"],
    experts: ["Architects", "Civil Engineers", "Structural Engineers", "Project Managers", "Legal Advisors", "Financial Consultants"]
  },
  projectManagement: {
    hero: {
      title: "Managing Every Detail, Delivering Every Promise",
      subtitle: "Ensuring projects are completed on time, within budget, and to the highest standards.",
      imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=1600&auto=format&fit=crop"
    },
    categories: [
      { title: "What We Manage", items: ["Planning", "Scheduling", "Procurement", "Budget", "Quality", "Safety", "Resources", "Documentation", "Vendor Coordination", "Client Communication", "Risk Management", "Reporting"] }
    ],
    process: ["Initiation", "Planning", "Execution", "Monitoring", "Quality Control", "Completion", "Maintenance"],
    software: ["Primavera", "Microsoft Project", "Procore", "Autodesk Construction Cloud", "ERP", "BIM"],
    kpis: ["Project Completion Rate", "On-Time Delivery", "Budget Accuracy", "Safety Compliance", "Client Satisfaction"]
  },
  turnkey: {
    hero: {
      title: "From Concept to Completion—Everything Under One Roof",
      subtitle: "Hassle-free, end-to-end execution managed by a single contractor.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
    },
    whatIsTurnkey: "Clients work with one contractor who handles the entire project from planning and design to construction, interiors, approvals, and final handover.",
    categories: [
      { title: "What's Included", items: ["Site Survey", "Architecture", "Engineering", "Approvals", "Civil Construction", "Electrical", "Plumbing", "HVAC", "Interior Design", "Furniture", "Landscaping", "Quality Inspection", "Final Handover"] }
    ],
    process: ["Consultation", "Planning", "Design", "Approvals", "Procurement", "Construction", "Interior Fit-Out", "Testing", "Handover", "Post-Delivery Support"],
    benefits: ["Single Point of Contact", "Fixed Budget", "Time Savings", "Quality Assurance", "Reduced Risk", "Transparent Communication", "End-to-End Accountability"],
    industries: ["Residential", "Commercial", "Industrial", "Hospitality", "Healthcare", "Educational Institutions", "Government Projects"]
  }
};
