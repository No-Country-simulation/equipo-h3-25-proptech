import {
  buyer_coin,
  buyer_image,
  inversor_coin,
  inversor_image,
  saver_coin,
  saver_image,
} from "../assets";
import { SymbolCodepoints } from "react-material-symbols";

export interface CardProps {
  title: string;
  icon: SymbolCodepoints;
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
        icon: 'signal_cellular_alt',
      },
      {
        title: "DIVERSIFICACIÓN DE ACTIVOS",
        description: "Gestiona activos variados desde una plataforma centralizada.",
        icon: 'running_with_errors',
      },
      {
        title: "TRANSPARENCIA",
        description: "Informes claros y métricas en tiempo real.",
        icon: 'check_box',
      },
      {
        title: "ACUERDO MUTUO",
        description: "Soluciones adaptadas a objetivos y confianza mutua.",
        icon: 'handshake',
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
        icon: 'paid',
      },
      {
        title: "PLAZOS SEGÚN CLIENTE",
        description: "Opciones flexibles adaptadas al cliente.",
        icon: 'schedule',
      },
      {
        title: "CHAT BOT",
        description: "Asistencia 24/7 durante todo el proceso.",
        icon: 'forum',
      },
      {
        title: "REFINANCIACIÓN",
        description: "Posibilidad de renegociar pagos según necesidades.",
        icon: 'currency_exchange',
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
        icon: 'savings',
      },
      {
        title: "SEGURIDAD GARANTIZADA",
        description: "Fondos protegidos con respaldo confiable.",
        icon: 'security',
      },
      {
        title: "REINVERSION FÁCIL",
        description: "Fácil y ágil para un crecimiento continuo.",
        icon: 'signal_cellular_alt',
      },
      {
        title: "DOCUMENTO FIRMADO",
        description: "Contrato formal que garantiza transparencia.",
        icon: 'handshake',
      }
    ]
  }
];

export default usersData;
