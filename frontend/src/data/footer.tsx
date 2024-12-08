import { Link } from "react-router-dom";


interface FooterData {
  id: number,
  title: string,
  description: React.ReactNode
}

const data: FooterData[] = [
  {
    id: 0,
    title: "LINKS",
    description: <ul className="flex flex-col gap-1">
      <li><Link to="/acerca-de">Quienes somos</Link></li>
      <li><Link to="/ayuda">Preguntas frecuentes</Link></li>
      <li><Link to="/privacidad">Politicas de protección</Link></li>
    </ul>
  }, {
    id: 1,
    title: "TE AYUDAMOS",
    description: <p>Facilitamos el acceso a financiamiento e inversión ágil y seguro en Latinoamérica, apoyando a quienes buscan alcanzar sus metas financieras.</p>
  }, {
    id: 2,
    title: "SUCURSALES",
    description: <ul>
      <li><strong>CABA, Argentina:</strong> Avenida Libertador 1234, CABA.</li>
      <li><strong>Bogotá, Colombia:</strong> Carrera 15 #45-67, Chapinero.</li>
      <li><strong>Ciudad de México, México:</strong> Paseo de la Reforma 567.</li>
    </ul>
  }, {
    id: 3,
    title: "CONTACTANOS",
    description: <ul>
      <li><strong>Argentina:</strong> +54 11 4567-8901</li>
      <li><strong>Colombia:</strong> +57 1 234-5678</li>
      <li><strong>México:</strong> +52 55 6789-1234</li>
    </ul>
  }
]

export default data;
