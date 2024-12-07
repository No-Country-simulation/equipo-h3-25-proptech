import { doc_icon, dolar_icon, handshake_icon, user_icon } from "../assets";


const financingData = {
  requirements: [
    <p>Ser mayor de <strong>18 años.</strong></p>,
    <p>Tener <strong>ingresos comprobables.</strong></p>,
    <p>Documento de <strong>identidad vigente.</strong></p>,
    <p>Reporte crediticio <strong>limpio.</strong></p>,
    <p>Contar con <strong>2 garantes</strong></p>,
    <p>Cada uno debe tener <strong>ingreso igual o mayor a 3 cuotas</strong></p>,
  ],
  financingSteps: [
    {
      icon: user_icon,
      title: "VALIDACIÓN  DE IDENTIDAD",
      description: "Deberas completar un formulario con datos personales y la información de dos garantes",
      step: 1
    }, {
      icon: dolar_icon,
      title: "SOLICITAR FINANCIAMIENTO",
      description: "Podrás solicitar el financiamiento deseado directamente desde la plataforma.",
      step: 2
    }, {
      icon: doc_icon,
      title: "ESTADO DE PRESTAMO",
      description: "El estado de tu préstamo estará en pendiente, ya que el equipo de análisis revisará los datos.",
      step: 3
    }, {
      icon: handshake_icon,
      title: "FIRMA Y ENVÍO DEL ACUERDO",
      description: "Descarga el documento de mutuo acuerdo, firmalo, y subelo a la plataforma. Al aprobarlo recibes el financiamiento",
      step: 4
    }
  ]
}

export default financingData;
