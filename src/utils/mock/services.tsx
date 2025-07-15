import { ServiceCardProps } from "@/app/components/ServiceCard/ServiceCard";
import { 
  FaGlobe, 
  FaBalanceScale, 
  FaGavel, 
  FaBriefcase, 
  FaGraduationCap, 
  FaShieldAlt 
} from "react-icons/fa";

export const servicesMock: ServiceCardProps[] = [
  {
    image: "/images/justice.jpg",
    icon: <FaGlobe />,
    title: "Consultoria Empresarial",
    description: "Soluções práticas e rápidas para o seu negócio."
  },
  {
    image: "/images/justice.jpg",
    icon: <FaBalanceScale />,
    title: "Direito Civil",
    description: "Defesa e orientação em causas cíveis e contratos."
  },
  {
    image: "/images/justice.jpg",
    icon: <FaGavel />,
    title: "Direito Criminal",
    description: "Atuação estratégica em processos criminais."
  },
  {
    image: "/images/justice.jpg",
    icon: <FaBriefcase />,
    title: "Direito Trabalhista",
    description: "Assessoria completa em demandas trabalhistas."
  },
  {
    image: "/images/justice.jpg",
    icon: <FaGraduationCap />,
    title: "Direito Educacional",
    description: "Soluções jurídicas para instituições e estudantes."
  },
  {
    image: "/images/justice.jpg",
    icon: <FaShieldAlt />,
    title: "Direito Previdenciário",
    description: "Auxílio e planejamento de benefícios do INSS."
  }
];
