interface Sector {
  id: string;
  name: string;
  phone: string;
}

export const sectors: Sector[] = [
  { id: "s4", name: "Previdência", phone: "+5511966666666" },
  { id: "s1", name: "Criminal", phone: "+5511999999999" },
  { id: "s2", name: "Trabalhista", phone: "+5511988888888" },
  { id: "s3", name: "Civil", phone: "+5511977777777" },
];


export const AboutDescription = `Somos um escritório de advocacia dedicado a oferecer soluções jurídicas eficazes e personalizadas para cada cliente. Nossa equipe alia conhecimento técnico e experiência prática, especialmente na área previdenciária, garantindo um atendimento humanizado e focado nos melhores resultados. Priorizamos a transparência, o diálogo aberto e a ética profissional para construir relações de confiança duradouras. Atendemos pessoas físicas e jurídicas com estratégias sob medida, buscando sempre a proteção dos direitos e o alcance dos objetivos de nossos clientes.`;
