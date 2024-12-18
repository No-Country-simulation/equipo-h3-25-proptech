import { SymbolCodepoints } from "react-material-symbols";
import React from 'react'; // Asegúrate de importar React

export interface FinancingStep {
  icon: SymbolCodepoints,
  title: string,
  description: string,
  step: number
}

const financingData = {
  requirements: [
    <p>Ser mayor de <strong>18 años.</strong></p>,
    <p>Tener <strong>ingresos comprobables.</strong></p>,
    <p>Documento de <strong>identidad vigente.</strong></p>,
    <p>Reporte crediticio <strong>limpio.</strong></p>,
    <p>Contar con <strong>2 garantes</strong></p>,
    <p>Cada uno debe tener <strong>ingreso igual o mayor a 3 cuotas</strong></p>,
  ] as React.ReactNode[],
  financingSteps: [
    {
      icon: 'person',
      title: "VALIDACIÓN  DE IDENTIDAD",
      description: "Deberas completar un formulario con datos personales y la información de dos garantes",
      step: 1
    }, {
      icon: 'payments',
      title: "SOLICITAR FINANCIAMIENTO",
      description: "Podrás solicitar el financiamiento deseado directamente desde la plataforma.",
      step: 2
    }, {
      icon: 'inventory',
      title: "ESTADO DE PRESTAMO",
      description: "El estado de tu préstamo estará en pendiente, ya que el equipo de análisis revisará los datos.",
      step: 3
    }, {
      icon: 'handshake',
      title: "FIRMA Y ENVÍO DEL ACUERDO",
      description: "Descarga el documento de mutuo acuerdo, firmalo, y subelo a la plataforma. Al aprobarlo recibes el financiamiento",
      step: 4
    }
  ] as FinancingStep[]
}

export default financingData;