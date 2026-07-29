export type FaqItem = {
  q: string;
  a: string;
  category: "General" | "Deployment" | "Platform" | "Partners";
};

export const faqCategories = ["All", "General", "Deployment", "Platform", "Partners"] as const;

export type FaqCategoryFilter = (typeof faqCategories)[number];

export const faqs: FaqItem[] = [
  {
    category: "General",
    q: "Are Book a Demo and Contact the same?",
    a: "No. Demo requests and contact messages are separate flows and are stored in separate ERP streams — so the right team can follow up with the right context.",
  },
  {
    category: "Deployment",
    q: "Do you support multi-site deployments?",
    a: "Yes. The platform is designed for multi-facility operations with shared policies and local context, so central teams and site operators stay aligned.",
  },
  {
    category: "Partners",
    q: "How do partners get certified?",
    a: "Training and certification tracks will publish under Partner Resources as program rules finalize. Until then, connect with our partner team to get started.",
  },
  {
    category: "Platform",
    q: "Can OrionAlerts work with our existing cameras?",
    a: "Yes. OrionAlerts is built to unify existing camera infrastructure into a single operations layer — so you can modernize workflows without a rip-and-replace project.",
  },
  {
    category: "Deployment",
    q: "Can we start with one site and expand later?",
    a: "Absolutely. Most teams begin with a pilot site or critical zone, prove operator value, then roll out across plants, campuses, or regions.",
  },
];
