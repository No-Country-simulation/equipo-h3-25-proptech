import { saver_coin, award_highicon, coin_highicon, buyer_coin, inversor_coin, requirements_highicon, wallet_highicon } from "../assets";

export type TypeOfUserValue = 
  | "inversor"
  | "comprador" 
  | "ahorrador";

export interface TypeOfUser {
  value: TypeOfUserValue;
  label: string;
}
export const typeOfUsers: TypeOfUser[] = [
  {
    value: "inversor",
    label: "Inversor"
  },{
    value: "comprador",
    label: "Comprador de terreno"
  }, {
    value: "ahorrador",
    label: "Ahorrador con capacidad de inversion"
  }
];



export type CountryValue = 
  | "argentina" 
  | "colombia" 
  | "brasil" 
  | "chile" 
  | "venezuela" 
  | "peru" 
  | "bolivia" 
  | "paraguay" 
  | "uruguay";

export interface Countries {
  value: CountryValue;
  label: string;
}
export const countries: Countries[] = [
  { value: "argentina", label: "Argentina" },
  { value: "colombia", label: "Colombia" },
  { value: "brasil", label: "Brasil" },
  { value: "chile", label: "Chile" },
  { value: "venezuela", label: "Venezuela" },
  { value: "peru", label: "Perú" },
  { value: "bolivia", label: "Bolivia" },
  { value: "paraguay", label: "Paraguay" },
  { value: "uruguay", label: "Uruguay" }
]



export interface InfoSection {
  image: string;
  title?: string;
  description: string;
  link?: string;
}

export interface RegisterStep {
  title: string;
  subtitle: string;
  info: {
    title?: string;
    sections: InfoSection[];
  };
}

export const registerSteps : RegisterStep[] = [
  {
    title: "NUEVA CUENTA",
    subtitle: "Crea tu cuenta para tener muchos beneficios. ¡Conecta con el terreno de tu sueños!",
    info: {
      sections: [
        {
          image: inversor_coin,
          title: "Inversor",
          description: "Personas o entidades que buscan diversificar su portafolio mediante la financiación de terrenos en Latinoamérica.",
          link: "#"
        },
        {
          image: buyer_coin,
          title: "Comprador de terreno",
          description: "Individuos interesados en adquirir terrenos, que necesitan opciones de financiamiento accesibles.",
          link: "#"
        },
        {
          image: saver_coin,
          title: "Ahorrador con capacidad de inversion",
          description: "Personas que buscan alternativas seguras para capitalizar sus ahorros a mediano plazo mediante la revalorización de terrenos.",
          link: "#"
        }
      ]
    }
  },
  {
    title: "INVERSOR",
    subtitle: "Crea tu cuenta para tener muchos beneficios. ¡Conecta con el terreno de tu sueños!",
    info: {
      title: "Beneficios de registrarse con FINANCIA.AI",
      sections: [
        {
          image: award_highicon,
          description: "Abrir tu cuenta con Financia.ai no tiene ningún costo ni comisiones. Puedes depositar o retirar fondos cuando lo desees, sin cargos adicionales.",
        },
        {
          image: wallet_highicon,
          description: "Al completar el registro, tendrás acceso a dashboard privado para gestionar tus inversiones o financiamientos.",
        },
        {
          image: requirements_highicon,
          description: "Explora métricas detalladas y obtén información clave de manera simple y segura.",
        },
        {
          image: coin_highicon,
          description: "Empieza a financiar desde USD 15,000 y aprovecha una experiencia rápida, accesible y confiable.",
        },
      ]
    }
  },
  {
    title: "INVERSOR",
    subtitle: "Crea tu cuenta para tener muchos beneficios. ¡Conecta con el terreno de tu sueños!",
    info: {
      title: "Beneficios de registrarse con FINANCIA.AI",
      sections: [
        {
          image: award_highicon,
          description: "Abrir tu cuenta con Financia.ai no tiene ningún costo ni comisiones. Puedes depositar o retirar fondos cuando lo desees, sin cargos adicionales.",
        },
        {
          image: wallet_highicon,
          description: "Al completar el registro, tendrás acceso a dashboard privado para gestionar tus inversiones o financiamientos.",
        },
        {
          image: requirements_highicon,
          description: "Explora métricas detalladas y obtén información clave de manera simple y segura.",
        },
        {
          image: coin_highicon,
          description: "Empieza a financiar desde USD 15,000 y aprovecha una experiencia rápida, accesible y confiable.",
        },
      ]
    }
  }
]
