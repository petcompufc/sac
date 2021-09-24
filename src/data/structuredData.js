/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable quote-props */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  "name": "Semana Acadêmica da Computação",
  "eventSchedule": {
    "@type": "Schedule",
    "startDate": "2021-10-25",
    "endDate": "2021-10-29",
    "byDay": [
      "https://schema.org/Monday",
      "https://schema.org/Tuesday",
      "https://schema.org/Wednesday",
      "https://schema.org/Thursday",
      "https://schema.org/Friday"
    ]
  },
  "url": "www.petcomp.ufc.br",
  "location": {
    "@type": "VirtualLocation"
  },
  "description": "A SAC é um evento anual organizado pelo PET Computação como projeto de extensão do Departamento de Computação da UFC. A SAC explora as diversas áreas da computação, como Data Science, Empreendedorismo e Desenvolvimento Web",
  "organizer": {
    "@type": "Organization",
    "name": "PET-Computação UFC",
    "url": "www.petcomp.ufc.br"
  }
};

export default JSON.stringify(structuredData);
