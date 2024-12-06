import {
  buyer_coin,
  buyer_image,
  chat_icon,
  checkbox_icon,
  clock_icon,
  clockWarning_icon,
  dolar_icon,
  finance_icon,
  handshake_icon,
  inversor_coin,
  inversor_image,
  piggyBank_icon,
  saver_coin,
  saver_image,
  security_icon,
  signalBars_icon
} from "../assets";





export interface CardProps {
  title: string;
  icon: string;
  description: string;
}

interface UserData {
  title: string;
  image: string;
  coin: string;
  description: string;
  cards: CardProps[];
}

const usersData: UserData[] = [
  {
    title: "INVERSOR",
    image: inversor_image,
    coin: inversor_coin,
    description: "Como inversor, puedes aprovechar nuestra plataforma para un análisis y seguimiento detallado de tu inversión, con altos rendimientos y seguridad.",
    cards: [
      {
        title: "RENTABILIDAD",
        description: "Algoritmos optimizan oportunidades para maximizar retornos.",
        icon: signalBars_icon,
      },
      {
        title: "DIVERSIFICACIÓN DE ACTIVOS",
        description: "Gestiona activos variados desde una plataforma centralizada.",
        icon: clockWarning_icon,
      },
      {
        title: "TRANSPARENCIA",
        description: "Informes claros y métricas en tiempo real.",
        icon: checkbox_icon,
      },
      {
        title: "ACUERDO MUTUO",
        description: "Soluciones adaptadas a objetivos y confianza mutua.",
        icon: handshake_icon,
      }
    ]
  },
  {
    title: "COMPRADOR",
    image: buyer_image,
    coin: buyer_coin,
    description: "Como comprador, puedes acceder a opciones de financiamiento accesibles y adaptadas a tus necesidades, con una plataforma fácil de usar, te brindamos condiciones claras y flexibles para hacer que tu financiación sea segura y sin complicaciones.",
    cards: [
      {
        title: "FINANCIAMIENTO ACCESIBLE",
        description: "Planes accesibles y personalizados.",
        icon: dolar_icon,
      },
      {
        title: "PLAZOS SEGÚN CLIENTE",
        description: "Opciones flexibles adaptadas al cliente.",
        icon: clock_icon,
      },
      {
        title: "CHAT BOT",
        description: "Asistencia 24/7 durante todo el proceso.",
        icon: chat_icon,
      },
      {
        title: "REFINANCIACIÓN",
        description: "Posibilidad de renegociar pagos según necesidades.",
        icon: finance_icon,
      }
    ]
  },
  {
    title: "AHORRADOR",
    image: saver_image,
    coin: saver_coin,
    description: "Si buscas maximizar el rendimiento de tus ahorros, nuestra plataforma te ofrece oportunidades seguras para invertir con un alto potencial de revalorización a mediano plazo. Somos una opción sólida para hacer crecer tu capital de manera sencilla y confiable.",
    cards: [
      {
        title: "CAPITALIZACIÓN DE AHORROS",
        description: "Maximiza el valor de sus ahorros con tasas competitivas",
        icon: piggyBank_icon,
      },
      {
        title: "SEGURIDAD GARANTIZADA",
        description: "Fondos protegidos con respaldo confiable.",
        icon: security_icon,
      },
      {
        title: "REINVERSION FÁCIL",
        description: "Fácil y ágil para un crecimiento continuo.",
        icon: signalBars_icon,
      },
      {
        title: "DOCUMENTO FIRMADO",
        description: "Contrato formal que garantiza transparencia.",
        icon: handshake_icon,
      }
    ]
  }
];

export default usersData;
