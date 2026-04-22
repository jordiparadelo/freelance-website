export type ProcessSteps = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

export const PROCESS_STEPS: ProcessSteps[] = [
  {
    id: "step-1",
    title: "Discovery",
    description:
      "Understand the client's needs, project goals, and target audience through discussions and research.",
    // icon: "search",
  },
  {
    id: "step-2",
    title: "Strategy",
    description:
      "Analyze gathered information to define project requirements, create a clear roadmap, and set measurable objectives.",
    // icon: "strategy",
  },
  {
    id: "step-3",
    title: "Design",
    description:
      "Translate insights and strategy into visual concepts, wireframes, and prototypes, ensuring a cohesive brand identity.",
    // icon: "design",
  },
  {
    id: "step-4",
    title: "Implementation",
    description:
      "Collaborate with development to bring designs to life, perform quality checks, and refine based on feedback before launch.",
    // icon: "implementation",
  },
];
