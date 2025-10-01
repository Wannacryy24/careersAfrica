// stepsData.js
import { FiClipboard, FiSearch, FiUserCheck, FiCheckCircle } from "react-icons/fi";

export const stepsData = [
  {
    id: 1,
    title: "Share Your Requirement",
    description: "Tell us what role, skills, and experience you need. We’ll start mapping your requirements immediately.",
    icon: FiClipboard, // 👈 store component, not JSX
  },
  {
    id: 2,
    title: "We Source & Screen Candidates",
    description: "We leverage our network and tools to find the best candidates, rigorously screening each profile.",
    icon: FiSearch,
  },
  {
    id: 3,
    title: "You Interview & Select",
    description: "We share a shortlist of vetted candidates. You interview and choose the ones who best fit your organization.",
    icon: FiUserCheck,
  },
  {
    id: 4,
    title: "Candidate Joins + Guarantee",
    description: "Once your candidate joins, we provide ongoing support — with a free replacement within 3 months if needed.",
    icon: FiCheckCircle,
  },
];
