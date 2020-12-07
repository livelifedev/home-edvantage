export const CATEGORIES = [
  {
    name: "Basic Algebra Skills",
    id: "basic-alegebra-skills",
    description:
      "Learning the core basics to working with algebra and the easiest ways to solve questions.",
  },
  {
    name: "Word Problem Skills",
    id: "word-problem-solving-skills",
    description:
      "Find the key steps and skills in solving word problems and the easiest way to get the answer.",
  },
  {
    name: "Solving Equations",
    id: "solving-equations",
    description:
      "Learn the fundamental techniques in solving unknowns in any given equation. ",
  },
  {
    name: "Sketching Functions",
    id: "sketching-functions",
    description:
      "We teach you the easiest steps and skills you need to draw any function or curve you want!",
  },
  {
    name: "Learning Diagrams",
    id: "learning-diagrams",
    description:
      "We show you how to understand and use various graphs, tables and diagrams through various topics.",
  },
  {
    name: "Understanding Calculus",
    id: "understanding-calculus",
    description:
      "Get the right head start you need from now til the end. Calculus doesn’t have to be as hard as it sound.",
  },
  {
    name: "Selective Placement Training",
    id: "selective-placment-training",
    description:
      "We provide free and premium training for Year 5 and 6 students that undergo the Selective School Exam.",
  },
  {
    name: "Opportunity Class Training",
    id: "opportunity-class-training",
    description:
      "We also give free and premium training for Year 3 and 4 students that applied for the O.C. Placement Exam.",
  },
];

export const COURSES = Array.from({ length: 5 }, (v, i) => ({
  name: `Course ${i + 1}`,
  id: i.toString(),
  tags: ["Core Skills", "Maths", "Maths", "Maths", "Maths"],
  category: CATEGORIES[0],
}));
