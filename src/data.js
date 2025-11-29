import sherise from "./assets/SheRise.jpg";
import medimart from "./assets/Medimart.jpg";
import urbanest from "./assets/urbanNest.jpg";
import fetal from "./assets/fetal.jpg";

export const projects = [
  {
    title: "SheRise",
    description:
      "React-based platform empowering women with education, employment and donations.",
    tech: "React.js • HTML • CSS • JavaScript",
    link: "https://github.com/avleen19/sherise-react-app.git",
    image: sherise,
  },
  {
    title: "Medimart",
    description:
      "Full MERN e-commerce for medical equipment with search, filters, Stripe and admin.",
    tech: "React • Redux Toolkit • Node • Express • MongoDB • Stripe",
    link: "https://projectmedimartwebsite-frontendd.onrender.com/",
    image: medimart,
  },
  {
    title: "UrbanNest",
    description:
      "Furniture e-commerce with filtering, secure payments and SQL/Sequelize backend.",
    tech: "React • Node • MySQL • Sequelize • Stripe",
    link: "https://github.com/avleen19/UrbanNest-fullpro.git",
    image: urbanest,
  },
  {
    title: "Fetal Health Classifier",
    description:
      "ML model to classify fetal health outcomes for predictive diagnostics.",
    tech: "Python • scikit-learn • pandas • numpy",
    link: "https://github.com/avleen19/fetal-health-classifier-project-AI-ML-.git",
    image: fetal,
  },
];
