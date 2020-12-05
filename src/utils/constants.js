export const CATEGORIES = [
  { name: "Basic Algebra Skills", id: "basic-alegebra-skills" },
  { name: "Word Problem Skills", id: "word-problem-solving-skills" },
  { name: "Solving Equations", id: "solving-equations" },
  { name: "Sketching Functions", id: "sketching-functions" },
  { name: "Learning Diagrams", id: "learning-diagrams" },
  { name: "Understanding Calculus", id: "understanding-calculus" },
  { name: "Selective Placement Training", id: "selective-placment-training" },
  { name: "Opportunity Class Training", id: "opportunity-class-training" },
];

export const COURSES = Array.from({ length: 5 }, (v, i) => ({
  name: `Course ${i + 1}`,
  id: i.toString(),
  tags: ["Core Skills", "Maths", "Maths", "Maths", "Maths"],
  category: CATEGORIES[0],
}));
