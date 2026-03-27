export interface ResumeSection {
  id: string;
  title: string;
  subtitle: string;
  photo: string;
  color: string;
  items: {
    category: string;
    entries: {
      title: string;
      subtitle?: string;
      details?: string;
    }[];
  }[];
}

export const resumeSections: ResumeSection[] = [
  {
    id: "acting",
    title: "Acting",
    subtitle: "Stage & Screen",
    photo: "/images/acting.jpg",
    color: "#e63946",
    items: [
      {
        category: "Film & Television",
        entries: [
          { title: "Project Title", subtitle: "Role", details: "Director / Production" },
        ],
      },
      {
        category: "Theatre",
        entries: [
          { title: "Show Title", subtitle: "Role", details: "Theatre Company" },
        ],
      },
      {
        category: "Training",
        entries: [
          { title: "Acting Program", subtitle: "Institution" },
        ],
      },
      {
        category: "Special Skills",
        entries: [
          { title: "Dialects, Stage Combat, Improv, Singing" },
        ],
      },
    ],
  },
  {
    id: "tech-theatre",
    title: "Tech Theatre",
    subtitle: "Behind the Curtain",
    photo: "/images/tech-theatre.jpg",
    color: "#457b9d",
    items: [
      {
        category: "Sound Design",
        entries: [
          { title: "Show Title", subtitle: "Sound Designer", details: "Theatre Company" },
        ],
      },
      {
        category: "Lighting Design",
        entries: [
          { title: "Show Title", subtitle: "Lighting Designer", details: "Theatre Company" },
        ],
      },
      {
        category: "Stage Management",
        entries: [
          { title: "Show Title", subtitle: "Stage Manager", details: "Theatre Company" },
        ],
      },
      {
        category: "Technical Skills",
        entries: [
          { title: "QLab, ETC EOS, Vectorworks, Dante, X32/M32" },
        ],
      },
    ],
  },
  {
    id: "professional",
    title: "Professional",
    subtitle: "Industry & Technology",
    photo: "/images/professional.jpg",
    color: "#2a9d8f",
    items: [
      {
        category: "Experience",
        entries: [
          { title: "Job Title", subtitle: "Company", details: "Date Range" },
        ],
      },
      {
        category: "Education",
        entries: [
          { title: "Degree", subtitle: "Institution", details: "Year" },
        ],
      },
      {
        category: "Certifications",
        entries: [
          { title: "Certification Name", subtitle: "Issuing Organization" },
        ],
      },
      {
        category: "Skills",
        entries: [
          { title: "Web Development, Audio Engineering, Virtual Production, IT Administration" },
        ],
      },
    ],
  },
];
