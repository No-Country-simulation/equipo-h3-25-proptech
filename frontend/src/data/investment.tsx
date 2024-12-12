import { SymbolCodepoints } from "react-material-symbols";

export interface InvestmentStep {
  icon: SymbolCodepoints,
  title: string,
  description: string,
  step: number
}

const investmentData = {
  requirements: [
    <p>Ser mayor de <strong>18 años.</strong></p>,
    <p>Tener <strong>ingresos comprobables.</strong></p>,
    <p>Documento de <strong>identidad vigente.</strong></p>,
    <p>Reporte crediticio <strong>limpio.</strong></p>,
    <p>Contar con <strong>2 garantes</strong></p>,
    <p>Cada uno debe tener <strong>ingreso igual o mayor a 3 cuotas</strong></p>,
  ] as React.ReactNode[],

  steps: [
    {
      icon: 'person',
      title: "VALIDACIÓN  DE IDENTIDAD",
      description: "Verifica tu identidad cargando información y documentos requeridos.",
      step: 1
    }, {
      icon: 'inventory',
      title: "Confirmación",
      description: "Acepta términos de inversión como cuotas, plazos y tasas, entre otros.",
      step: 2
    }, {
      icon: 'payments',
      title: "Inversión Realizada",
      description: "Completa la operación y recibe una notificación de éxito.",
      step: 3
    }, {
      icon: 'handshake',
      title: "Seguimiento de inversión",
      description: "Monitorea el rendimiento de tu inversión en el panel",
      step: 4
    }
  ] as InvestmentStep[]
};


export default investmentData;