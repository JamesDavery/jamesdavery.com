export interface ResumeSection {
  id: string;
  title: string;
  subtitle: string;
  photo: string;
  color: string;
  award?: string;
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
        category: "Theatre",
        entries: [
          { title: "Red Hot Patriot", subtitle: "The Helper", details: "Austin Playhouse" },
          { title: "Emma", subtitle: "Robert Martin", details: "Austin Playhouse" },
          { title: "The Spitfire Grill", subtitle: "The Stranger", details: "Austin Playhouse" },
          { title: "She Stoops to Conquer", subtitle: "George Hastings", details: "Austin Playhouse" },
          { title: "Fool For Love", subtitle: "Understudy", details: "Capital T Theatre" },
        ],
      },
      {
        category: "Theatre (cont.)",
        entries: [
          { title: "Waiting for the Bus", subtitle: "Ricky", details: "Art Spark Texas" },
          { title: "Pocatello", subtitle: "Max", details: "Streetcorner Arts" },
          { title: "Waiting For Lefty", subtitle: "Sid", details: "Streetcorner Arts" },
          { title: "Skin of our Teeth", subtitle: "Henry Antrobus", details: "Wimberly Players" },
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
    award: "B. Iden Payne Award Winner - Best Running Crew",
    items: [
      {
        category: "Stage Management",
        entries: [
          { title: "Dirty Rotten Scoundrels", subtitle: "Stage Manager", details: "Austin Playhouse" },
          { title: "The Heart Sellers", subtitle: "Stage Manager", details: "Austin Playhouse" },
          { title: "Every Brilliant Thing", subtitle: "Stage Manager", details: "Austin Playhouse" },
          { title: "Cyndi's Radio Hour", subtitle: "Stage Manager", details: "Austin Playhouse" },
          { title: "Waiting for the Bus", subtitle: "ASM", details: "Art Spark Texas" },
        ],
      },
      {
        category: "Crew & Operations",
        entries: [
          { title: "The Norweigans", subtitle: "Sound Board Op", details: "Austin Playhouse" },
          { title: "Describe the Night", subtitle: "Backstage Crew Lead", details: "Austin Playhouse" },
          { title: "Baskerville", subtitle: "Backstage Crew*", details: "Austin Playhouse" },
          { title: "Murder on the Links", subtitle: "Backstage Crew", details: "Austin Playhouse" },
          { title: "Big Fish", subtitle: "Backstage Crew", details: "Austin Playhouse" },
          { title: "Matilda", subtitle: "Spotlight", details: "Zilker Theatre Productions" },
          { title: "John", subtitle: "Backstage Crew", details: "Hyde Park Theatre" },
          { title: "Julius Caesar", subtitle: "Substitute A1", details: "Austin Shakespeare" },
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
          { title: "RVS Software", subtitle: "Software Support", details: "Mar 2026 - Present" },
          { title: "Career Strategies, Inc.", subtitle: "Helpdesk Technician", details: "Apr 2023 - Jul 2025" },
          { title: "Boon-Chapman", subtitle: "Helpdesk Technician", details: "May 2022 - Apr 2023" },
          { title: "The Austonian Condominiums", subtitle: "Lead Logistics" },
          { title: "Game On! ATX", subtitle: "Manager" },
        ],
      },
      {
        category: "Additional Experience",
        entries: [
          { title: "Video and Audio Center", subtitle: "TV Salesman", details: "2016 - Jan 2017" },
          { title: "Target", subtitle: "Night Stocker", details: "May 2015" },
          { title: "Staples", subtitle: "Back Stocker" },
          { title: "The Salt Lick", subtitle: "Line Worker / Dishes" },
        ],
      },
    ],
  },
];
