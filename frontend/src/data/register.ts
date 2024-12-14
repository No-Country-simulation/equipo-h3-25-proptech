import { saver_coin, award_highicon, coin_highicon, buyer_coin, inversor_coin, requirements_highicon, wallet_highicon } from "../assets";



export type Roles = "INVERSOR" | "AHORRADOR" | "COMPRADOR";
export const rolesValues: Roles[] = ["INVERSOR", "COMPRADOR", "AHORRADOR"];
export interface RoleOption {
  value: Roles;
  label: string;
}
export const rolesOptions: RoleOption[] = [
  { value: "INVERSOR", label: "Inversor" },
  { value: "COMPRADOR", label: "Comprador de terreno" },
  { value: "AHORRADOR", label: "Ahorrador con capacidad de inversion" }
];



export type Countries =  "Argentina" | "Colombia" | "Brasil" | "Chile" | "Venezuela" | "Peru" | "Bolivia" | "Paraguay" | "Uruguay";
export const countriesValues: Countries[] = ["Argentina", "Colombia", "Brasil", "Chile", "Venezuela", "Peru", "Bolivia", "Paraguay", "Uruguay"];
export interface CountryOption {
  value: Countries;
  label: string;
}
export const countriesOptions: CountryOption[] = [
  { value: "Argentina", label: "Argentina" },
  { value: "Colombia", label: "Colombia" },
  { value: "Brasil", label: "Brasil" },
  { value: "Chile", label: "Chile" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Peru", label: "Perú" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Uruguay", label: "Uruguay" }
]



export type Gender = "MASCULINO" | "FEMENINO";
export const genderValues: Gender[] = ["MASCULINO", "FEMENINO"];



export type Citizenship = "Argentino" | "Colombiano" | "Brasileño" | "Chileno" | "Venezolano" | "Peruano" | "Boliviano" | "Paraguayo" | "Uruguayo";
export const citizenshipValues: Citizenship[] = ["Argentino", "Colombiano", "Brasileño", "Chileno", "Venezolano", "Peruano", "Boliviano", "Paraguayo", "Uruguayo"];
export interface CitizenshipOption {
  value: Citizenship;
  label: string;
}
export const citizenshipOptions: CitizenshipOption[] = [
  { value: "Argentino", label: "Argentino" },
  { value: "Colombiano", label: "Colombiano" },
  { value: "Brasileño", label: "Brasileño" },
  { value: "Chileno", label: "Chileno" },
  { value: "Venezolano", label: "Venezolano" },
  { value: "Peruano", label: "Peruano" },
  { value: "Boliviano", label: "Boliviano" },
  { value: "Paraguayo", label: "Paraguayo" },
  { value: "Uruguayo", label: "Uruguayo" }
]



export type DepositMethod = "TRANSFERENCIA_ELECTRONICA" | "EFECTIVO" | "CHEQUE";
export const depositMethodValues: DepositMethod[] = ["TRANSFERENCIA_ELECTRONICA", "EFECTIVO", "CHEQUE"];




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
