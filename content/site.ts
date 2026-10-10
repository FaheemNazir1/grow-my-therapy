/**
 * Single source of truth for all site copy, links and image slots.
 * Content for: Dr. Maya Reynolds, PsyD (fictional) — see docs/maya-profile.md.
 *
 * Conventions used by the components:
 *   *word*   -> rendered in the accent script font (ScriptText)
 *   _phrase_ -> rendered in italics (ItalicText)
 *
 * Contact details that were NOT in the profile are clearly marked placeholders
 * (see `footer.contact`). Replace them before launch.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

export interface ImageSlot {
  id: string;
  src: string;
  alt: string;
  aspectRatio: string;
  width: number;
  height: number;
  /** CSS object-position, used to crop a shared photo differently per slot */
  objectPosition?: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaButton: {
    label: string;
    href: string;
  };
  images: {
    primary: ImageSlot;
    secondary: ImageSlot;
  };
}

export interface PhilosophyContent {
  heading: string;
  eyebrow: string;
  paragraphs: string[];
  image: ImageSlot;
}

export interface AudienceCard {
  id: string;
  title: string;
  description: string;
  image: ImageSlot;
}

export interface WhoWeHelpContent {
  heading: string;
  cards: AudienceCard[];
}

export interface QuoteContent {
  quote: string;
  backgroundImage: ImageSlot;
}

export interface ExpertiseContent {
  heading: string;
  areas: string[];
}

export interface HowWeWorkContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
  ctaButton: {
    label: string;
    href: string;
  };
  image: ImageSlot;
}

export interface StatementContent {
  heading: string;
  image: ImageSlot;
}

export interface SpecialtyBlock {
  id: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface SpecialtiesContent {
  heading: string;
  blocks: SpecialtyBlock[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
}

export interface ScheduleCTAContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  ctaButton: {
    label: string;
    href: string;
  };
  images: {
    leftAccent: ImageSlot;
    rightPortrait: ImageSlot;
  };
}

export interface OfficeContent {
  eyebrow: string;
  heading: string;
  description: string;
  infoRow: {
    locationLabel: string;
    location: string;
    availabilityLabel: string;
    availability: string;
    privacyLabel: string;
    privacyNote: string;
  };
  images: ImageSlot[];
}

export interface FooterContent {
  brandMessage: string;
  navHeading: string;
  navLinks: NavLink[];
  specialtiesHeading: string;
  specialtyLinks: NavLink[];
  contactHeading: string;
  contact: {
    addressLines: string[];
    /** Optional: rendered in the footer only when a real value is provided. */
    email?: string;
    phone?: string;
    servingAreas: string;
  };
  legalLinks: NavLink[];
  copyright: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    siteName: string;
  };
  navigation: {
    wordmark: {
      name: string;
      tagline: string;
    };
    links: NavDropdownItem[];
    ctaButton: {
      label: string;
      href: string;
    };
  };
  hero: HeroContent;
  philosophy: PhilosophyContent;
  whoWeHelp: WhoWeHelpContent;
  quote: QuoteContent;
  expertise: ExpertiseContent;
  howWeWork: HowWeWorkContent;
  statement: StatementContent;
  specialties: SpecialtiesContent;
  faq: FaqContent;
  scheduleCTA: ScheduleCTAContent;
  office: OfficeContent;
  footer: FooterContent;
}

/** Real photos supplied with the assignment (public/images/maya). */
const IMG = {
  portrait: "/images/maya/maya-reynolds.png",
  officeSofa: "/images/maya/office-1.jpeg",
  officeLounge: "/images/maya/office-2.jpeg",
};

export const siteContent: SiteContent = {
  meta: {
    title: "Therapist in Santa Monica, CA | Anxiety & Trauma Therapy | Dr. Maya Reynolds, PsyD",
    description:
      "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist offering anxiety, trauma, and burnout therapy for adults in Santa Monica, CA, with secure telehealth across California.",
    siteName: "Dr. Maya Reynolds, PsyD",
  },
  navigation: {
    wordmark: {
      name: "Maya Reynolds",
      tagline: "CLINICAL PSYCHOLOGIST",
    },
    links: [
      {
        label: "ABOUT",
        href: "#about",
      },
      {
        label: "SPECIALTIES",
        children: [
          { label: "Anxiety & Stress Therapy", href: "#specialties" },
          { label: "Trauma-Informed Therapy", href: "#specialties" },
          { label: "Burnout & Perfectionism Support", href: "#specialties" },
        ],
      },
      {
        label: "APPROACH",
        children: [
          { label: "CBT", href: "#approach" },
          { label: "EMDR", href: "#approach" },
          { label: "Mindfulness-Based Practices", href: "#approach" },
          { label: "Body-Oriented Techniques", href: "#approach" },
        ],
      },
      {
        label: "FAQS",
        href: "#faqs",
      },
    ],
    ctaButton: {
      label: "CONTACT",
      href: "#contact",
    },
  },
  hero: {
    eyebrow: "IN-PERSON IN SANTA MONICA & ONLINE ACROSS CALIFORNIA",
    title: "Anxiety and trauma therapy in Santa Monica, CA, so you can feel *grounded* again.",
    description:
      "Dr. Maya Reynolds is a licensed clinical psychologist offering warm, thoughtfully paced therapy for adults carrying constant worry, tension, and pressure.",
    ctaButton: {
      label: "REQUEST AN APPOINTMENT",
      href: "#contact",
    },
    images: {
      primary: {
        id: "hero-primary",
        src: IMG.officeSofa,
        alt: "A sunlit therapy room in Dr. Maya Reynolds' Santa Monica office with a grey sofa, brick wall and tall windows",
        aspectRatio: "497 / 572",
        width: 497,
        height: 572,
        objectPosition: "42% 50%",
      },
      secondary: {
        id: "hero-secondary",
        src: IMG.officeLounge,
        alt: "An olive tree and sheer curtains beside the window in the office",
        aspectRatio: "115 / 378",
        width: 115,
        height: 378,
        objectPosition: "26% 50%",
      },
    },
  },
  philosophy: {
    eyebrow: "ABOUT DR. MAYA REYNOLDS, PSYD, LICENSED CLINICAL PSYCHOLOGIST IN SANTA MONICA.",
    heading: "You can be capable and driven, and still feel like you’re running on empty.",
    paragraphs: [
      "I’m a licensed clinical psychologist with an office in Santa Monica, California. Many of the adults I work with are high-achieving, self-aware professionals, entrepreneurs, and creatives who are living with constant worry, tension in the body, trouble sleeping, or a mind that will not slow down.",
      "Whether you’re facing anxiety and panic, the lasting effects of past experiences, or burnout and the pressure to get everything right, my approach is warm, collaborative, and paced with care. Together we start with safety and stabilization, then work toward relief, insight, resilience, and a stronger relationship with yourself.",
    ],
    image: {
      id: "philosophy-portrait",
      src: IMG.portrait,
      alt: "Portrait of Dr. Maya Reynolds, a licensed clinical psychologist in Santa Monica",
      aspectRatio: "436 / 626",
      width: 436,
      height: 626,
      objectPosition: "50% 20%",
    },
  },
  whoWeHelp: {
    heading: "How I can *help*",
    cards: [
      {
        id: "anxiety-stress",
        title: "Anxiety & Stress Therapy",
        description:
          "Anxiety therapy in Santa Monica for adults whose worry never really switches off. We’ll work on the patterns behind anxiety, panic, and chronic stress using CBT, mindfulness-based practices, and body-oriented tools, so your mind and body can begin to settle.",
        image: {
          id: "service-anxiety",
          src: IMG.officeSofa,
          alt: "Calm seating area with soft art in the Santa Monica therapy office",
          aspectRatio: "364 / 416",
          width: 364,
          height: 416,
          objectPosition: "12% 55%",
        },
      },
      {
        id: "trauma-informed",
        title: "Trauma-Informed Therapy",
        description:
          "Trauma therapy in Santa Monica for single events and for longer-term patterns from childhood, relationships, or ongoing stress. The work is paced carefully, with safety and stabilization first and EMDR where it’s a good fit.",
        image: {
          id: "service-trauma",
          src: IMG.officeLounge,
          alt: "Quiet corner of the therapy office with a lounge chair, plant and framed art",
          aspectRatio: "364 / 416",
          width: 364,
          height: 416,
          objectPosition: "52% 60%",
        },
      },
      {
        id: "burnout-perfectionism",
        title: "Burnout & Perfectionism Support",
        description:
          "For people who hold themselves to a very high standard and feel the cost. We’ll untangle burnout, perfectionism, and constant overthinking, and build a steadier, kinder relationship with yourself.",
        image: {
          id: "service-burnout",
          src: IMG.officeSofa,
          alt: "Armchair by a large window with natural light in the therapy office",
          aspectRatio: "364 / 416",
          width: 364,
          height: 416,
          objectPosition: "88% 62%",
        },
      },
    ],
  },
  quote: {
    quote:
      "You deserve a space where your mind can slow down and your body can feel safe. _Healing can move at a pace that is right for you._",
    backgroundImage: {
      id: "quote-background",
      src: "/images/coast/quote-coast.jpg",
      alt: "Calm waves rolling onto a quiet beach at sunset",
      aspectRatio: "4 / 3",
      width: 2048,
      height: 1536,
      objectPosition: "50% 58%",
    },
  },
  expertise: {
    heading: "Areas of *focus*",
    areas: [
      "ANXIETY",
      "PANIC",
      "CHRONIC STRESS",
      "TRAUMA",
      "BURNOUT",
      "PERFECTIONISM",
      "OVERTHINKING",
      "CONSTANT WORRY",
      "BODY TENSION",
      "TROUBLE SLEEPING",
      "RELATIONSHIPS & CONFIDENCE",
      "SENSE OF SAFETY",
    ],
  },
  howWeWork: {
    eyebrow: "MY APPROACH",
    heading: "Warm, collaborative, and paced with care.",
    subheading:
      "STRUCTURED ENOUGH TO MOVE FORWARD, SPACIOUS ENOUGH TO REFLECT.",
    paragraphs: [
      "Therapy with me is a partnership. Sessions have a clear structure, so you leave with something practical, and there is room to make sense of what you’re feeling and why. We set the pace together, especially when the work touches on trauma, where safety and stabilization always come first.",
      "I draw on cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, choosing what fits you rather than following a script. The goals are symptom relief, deeper insight, greater resilience, and a stronger relationship with yourself.",
    ],
    ctaButton: {
      label: "LEARN MORE ABOUT ME",
      href: "#about",
    },
    image: {
      id: "how-we-work-portrait",
      src: IMG.officeLounge,
      alt: "Sheer white curtains and an olive tree in the therapy office",
      aspectRatio: "326 / 688",
      width: 326,
      height: 688,
      objectPosition: "18% 50%",
    },
  },
  statement: {
    heading: "Easing the pressure you carry *&* building steadier ground to stand on.",
    image: {
      id: "statement-office",
      src: IMG.officeLounge,
      alt: "Dr. Reynolds' Santa Monica therapy office with a sofa, bookshelf and natural light",
      aspectRatio: "769 / 533",
      width: 769,
      height: 533,
      objectPosition: "50% 55%",
    },
  },
  specialties: {
    heading: "My *approaches* include…",
    blocks: [
      {
        id: "cbt",
        title: "Cognitive-Behavioral Therapy (CBT)",
        description:
          "CBT helps you notice the thought and behavior patterns that keep anxiety, worry, and perfectionism going, and practice practical new ways of responding so they loosen their hold.",
        cta: { label: "ASK ABOUT THIS", href: "#contact" },
      },
      {
        id: "emdr",
        title: "EMDR",
        description:
          "Eye Movement Desensitization and Reprocessing (EMDR) is a structured therapy that can help your brain process distressing experiences so they feel less overwhelming. It is introduced with careful preparation and pacing.",
        cta: { label: "ASK ABOUT THIS", href: "#contact" },
      },
      {
        id: "mindfulness",
        title: "Mindfulness-Based Practices",
        description:
          "Simple, grounded practices that help you notice what’s happening in the moment without being swept away by it, so you can step out of overthinking and respond with more steadiness.",
        cta: { label: "ASK ABOUT THIS", href: "#contact" },
      },
      {
        id: "body-oriented",
        title: "Body-Oriented Techniques",
        description:
          "Stress and past experiences often show up in the body as tension, restlessness, or trouble sleeping. Body-oriented techniques help you notice and settle those sensations, building a stronger sense of safety.",
        cta: { label: "ASK ABOUT THIS", href: "#contact" },
      },
    ],
  },
  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    heading: "Questions you may *have*",
    items: [
      {
        question: "Do you offer in-person and online therapy?",
        answer:
          "Yes. Dr. Reynolds sees clients in person at her office in Santa Monica, California, and offers secure telehealth sessions for clients who are located in California.",
      },
      {
        question: "Who do you work with?",
        answer:
          "Adults. Many of her clients are high-achieving, self-aware professionals, entrepreneurs, and creatives who are dealing with anxiety, panic, trauma, burnout, perfectionism, or chronic stress.",
      },
      {
        question: "What can I expect in sessions?",
        answer:
          "A warm, collaborative style with enough structure to keep moving forward and enough space to reflect. The aim is symptom relief, insight, resilience, and a stronger relationship with yourself.",
      },
      {
        question: "Which approaches do you use?",
        answer:
          "Cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, chosen to fit what you need rather than a one-size-fits-all plan.",
      },
      {
        question: "I’ve been through trauma. Will we go into it right away?",
        answer:
          "No. Trauma work is paced carefully, with safety and stabilization first. You stay in the driver’s seat and we move at a speed that feels manageable.",
      },
      {
        question: "How do I get started?",
        answer:
          "Use the contact details below to reach out. Details such as scheduling will be confirmed directly with Dr. Reynolds’ office.",
      },
    ],
  },
  scheduleCTA: {
    eyebrow: "SCHEDULE AN APPOINTMENT",
    heading: "Take the first step toward feeling *steadier*.",
    paragraphs: [
      "Reaching out can feel like a lot when you’re already stretched thin. Dr. Reynolds offers in-person therapy at her Santa Monica office and secure telehealth for clients located in California. If anxiety, trauma, or burnout has been wearing you down, you don’t have to keep carrying it on your own.",
      "Click the button below to get in touch.",
    ],
    ctaButton: {
      label: "GET IN TOUCH",
      href: "#contact",
    },
    images: {
      leftAccent: {
        id: "schedule-left",
        src: IMG.officeSofa,
        alt: "Sheer curtains and brick wall beside a tall window",
        aspectRatio: "170 / 489",
        width: 170,
        height: 489,
        objectPosition: "60% 30%",
      },
      rightPortrait: {
        id: "schedule-right",
        src: IMG.portrait,
        alt: "Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica, CA",
        aspectRatio: "497 / 606",
        width: 497,
        height: 606,
        objectPosition: "50% 18%",
      },
    },
  },
  office: {
    eyebrow: "OUR OFFICE",
    heading: "A calm space to *begin*",
    description:
      "Dr. Reynolds’ Santa Monica office is quiet, private, and naturally lit, with a comfortable, uncluttered feel designed to help you feel at ease from the moment you arrive. Sessions are available in person in Santa Monica, or through secure telehealth if you’re located in California.",
    infoRow: {
      locationLabel: "Location",
      location: "123th Street 45 W, Santa Monica, CA 90401",
      availabilityLabel: "Availability",
      availability: "In-person in Santa Monica and secure telehealth for clients located in California",
      privacyLabel: "Privacy & comfort",
      privacyNote: "A quiet, private, naturally lit space",
    },
    images: [
      {
        id: "office-1",
        src: IMG.officeSofa,
        alt: "Sunlit therapy room in Dr. Reynolds’ Santa Monica office with a grey sofa, abstract art, a brick wall and tall windows with sheer curtains",
        aspectRatio: "4 / 3",
        width: 1500,
        height: 1125,
      },
      {
        id: "office-2",
        src: IMG.officeLounge,
        alt: "Second seating area in the office with an olive tree, framed beach print, bookshelf and a glass coffee table",
        aspectRatio: "4 / 3",
        width: 1500,
        height: 1125,
      },
    ],
  },
  footer: {
    brandMessage:
      "We want to make getting started simple. Dr. Maya Reynolds offers in-person therapy in Santa Monica and secure telehealth for clients located in California.",
    navHeading: "Navigate",
    navLinks: [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "FAQs", href: "#faqs" },
      { label: "Contact", href: "#contact" },
    ],
    specialtiesHeading: "Specialties",
    specialtyLinks: [
      { label: "Anxiety & Stress Therapy", href: "#specialties" },
      { label: "Trauma-Informed Therapy", href: "#specialties" },
      { label: "Burnout & Perfectionism Support", href: "#specialties" },
      { label: "EMDR", href: "#approach" },
      { label: "CBT", href: "#approach" },
    ],
    contactHeading: "Contact",
    contact: {
      addressLines: ["123th Street 45 W", "Santa Monica, CA 90401"],
      // email / phone intentionally omitted: not provided in the profile.
      servingAreas:
        "In-person in Santa Monica, CA. Telehealth for clients located in California.",
    },
    legalLinks: [
      { label: "Terms", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
    copyright: "© 2026 Dr. Maya Reynolds, PsyD",
  },
};
