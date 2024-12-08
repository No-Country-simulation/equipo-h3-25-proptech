import React, { useState, useMemo } from 'react';
import Input from '../components/input';
import InputCheck from '../components/inputCheck';
import InputRadio from '../components/inputRadio';
import Button from '../components/button';

interface AmortizationRow {
  month: number;
  payment: string;
  principalPayment: string;
  interest: string;
  totalInterest: string;
  balance: string;
}

const FinancingCalculator: React.FC = () => {
  // Estados iniciales con valores por defecto
  const [amount, setAmount] = useState<number>(26600);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [downPayment, setDownPayment] = useState<number>(17000);
  const [term, setTerm] = useState<number>(6);
  const [termType, setTermType] = useState<'months' | 'years'>('months');
  const [includeVehicle, setIncludeVehicle] = useState<boolean>(false);
  const [vehicleAmount, setVehicleAmount] = useState<number>(0);
  const [sendEmail, setSendEmail] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [amortizationTable, setAmortizationTable] = useState<AmortizationRow[]>([]);
  const [error, setError] = useState<string>('');

  // Validaciones de entrada
  const validateInputs = (): boolean => {
    let errorMessages: string[] = [];

    if (amount <= 0) errorMessages.push('El monto debe ser mayor a 0');
    if (vehicleAmount <= 0 && includeVehicle) errorMessages.push('El monto del vehiculo debe ser mayor a 0');
    if (interestRate < 0 || interestRate > 100) errorMessages.push('La tasa de interés debe estar entre 0 y 100');
    if (downPayment < 0 || downPayment >= amount) errorMessages.push('El anticipo debe ser menor al monto total');
    if (term <= 0) errorMessages.push('El plazo debe ser mayor a 0');

    if (errorMessages.length > 0) {
      setError(errorMessages.join('. '));
      return false;
    }

    setError('');
    return true;
  };

  // Cálculo de pago mensual memoizado
  const monthlyPayment = useMemo(() => {
    if (!validateInputs()) return null;

    let principal = amount - downPayment;
    if (includeVehicle) {
      principal -= vehicleAmount * (1 - 0.15);
    }
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = termType === 'years' ? term * 12 : term;

    const payment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return payment.toFixed(2);
  }, [amount, downPayment, interestRate, term, termType, includeVehicle, vehicleAmount]);

  // Generación de tabla de amortización
  const generateAmortizationTable = () => {
    if (!validateInputs()) return;

    let principal = amount - downPayment;
    if (includeVehicle) {
      principal -= vehicleAmount * (1 - 0.15);
    }

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = termType === 'years' ? term * 12 : term;

    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    const table: AmortizationRow[] = [];
    let totalInterest = 0;
    let currentBalance = principal;

    for (let i = 0; i < numberOfPayments; i++) {
      const interest = currentBalance * monthlyInterestRate;
      let principalPayment = monthlyPayment - interest;

      // Ajuste para el último pago para garantizar que el saldo sea exactamente 0
      if (i === numberOfPayments - 1) {
        principalPayment = currentBalance + interest;
        currentBalance = 0;
      } else {
        currentBalance -= principalPayment;
      }

      totalInterest += interest;

      table.push({
        month: i + 1,
        payment: monthlyPayment.toFixed(2),
        principalPayment: principalPayment.toFixed(2),
        interest: interest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        balance: currentBalance.toFixed(2)
      });
    }

    setAmortizationTable(table);
  };

  // Manejadores de eventos
  const handleCalculate = () => {
    if (validateInputs()) {
      generateAmortizationTable();
    }
  };

  const handleSendReport = async () => {
    if (!validateInputs()) return;

    if (sendEmail && !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError('Por favor, introduce un email válido');
      return;
    }

    try {
      const response = await fetch('https://api.example.com/send-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          interestRate,
          downPayment,
          term,
          termType,
          result: monthlyPayment,
          email
        })
      });

      if (!response.ok) {
        throw new Error('Error al enviar el informe');
      }

      alert('Informe enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar el informe:', error);
      alert('No se pudo enviar el informe');
    }
  };

  const handleApplyLoan = () => {
    localStorage.setItem('loanData', JSON.stringify({ amount, interestRate, downPayment, term, termType, result }));
    window.location.href = '/register';
  };

  // const handleReset = () => {
  //   setAmount(26600);
  //   setInterestRate(5.00);
  //   setDownPayment(17000);
  //   setTerm(6);
  //   setTermType('months');
  //   setIncludeVehicle(false);
  //   setVehicleAmount(0);
  //   setResult(null);
  //   setAmortizationTable([]);
  //   setError('');
  // };

  return (
    <div className="financing-calculator p-10 py bg-white rounded-lg max-w-3xl m-auto">
      <h3 className="font-Exo2 font-bold text-2xl text-black">Calculadora de</h3>
      <h1 className="font-Exo2 font-bold text-5xl text-primary-500">FINANCIACIÓN</h1>
      <p className="mt-8 mb-5">Utilizando nuestra calculadora de financiación, puede determinar rápidamente los pagos mensuales de su hipoteca, préstamo o cualquier tipo de financiación para su propiedad.</p>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          {error}
        </div>
      )}

      <div className="mb-4">
        <Input
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          name="financing-amount"
          type="number"
          label="Monto de financiación"
          placeholder="26600"
        />
        <small
          id="financing-amount-help"
          className="text-gray-600 text-sm"
        >
          Ingrese el monto total del préstamo
        </small>
      </div>

      <div className="mb-4">
        <Input
          value={interestRate}
          name="interest-rate"
          type="number"
          label="Tasa de Interés Anual (%):"
          placeholder="26600"
          readOnly
        />
        <small
          id="interest-rate-help"
          className="text-gray-600 text-sm"
        >
          Tasa de interés actual no modificable
        </small>
      </div>
      <div className="mb-4">
        <Input
          value={downPayment}
          onChange={(e) => setDownPayment(parseFloat(e.target.value))}
          name="down-payment"
          type="number"
          label="Anticipo del Préstamo (Monto):"
          placeholder="Ejemplo: 17000"
        />
        <small
          id="down-payment-help"
          className="text-gray-600 text-sm"
        >
          Ingrese el monto que pagará como anticipo
        </small>
      </div>
      <div className="mb-5">
        <label className="block text-gray-700 mb-1">Plazo:</label>
        <div
          role="group"
          aria-labelledby="term-type-label"
          className="flex items-center mb-2 gap-5"
        >
          <span id="term-type-label" className="sr-only">Seleccione el tipo de plazo</span>
          <InputRadio
            name="term-type-years"
            label="Años"
            valueSelected={termType}
            value="years"
            onChange={() => setTermType('years')}
            size='small'
          />
          <InputRadio
            name="term-type-months"
            label="Meses"
            valueSelected={termType}
            value="months"
            onChange={() => setTermType('months')}
            size='small'
          />
        </div>
        <Input
          value={term}
          onChange={(e) => setTerm(parseInt(e.target.value, 10))}
          name="term-length"
          type="number"
          label="Monto de financiación"
          placeholder="Ejemplo: 6"
        />
        <small
          id="term-length-help"
          className="text-gray-600 text-sm"
        >
          Ingrese el número de años o meses del préstamo
        </small>
      </div>
      <div className="mb-4">
        <InputCheck
          name="include-vehicle"
          checked={includeVehicle}
          onChange={() => setIncludeVehicle(!includeVehicle)}
          label="Incluir vehículo como parte de pago"
        />
        <small
          id="include-vehicle-help"
          className="block text-gray-600 text-sm"
        >
          Active esta opción si desea incluir un vehículo como parte del pago
        </small>
      </div>
      {includeVehicle && (
        <div className="mb-4">
          <label
            htmlFor="vehicle-amount"
            className="block text-gray-700"
          >
            Valor del Vehículo:
          </label>
          <Input
            name="vehicle-amount"
            type="number"
            value={vehicleAmount}
            onChange={(e) => setVehicleAmount(parseFloat(e.target.value))}
            placeholder="10000"
          />
          <small
            id="vehicle-amount-help"
            className="text-gray-600 text-sm"
          >
            Valor del vehículo con descuento del 15%: $ {(vehicleAmount * (1 - 0.15)).toFixed(2)}
          </small>
        </div>
      )}
      <div className="mb-4">
        <InputCheck
          name="send-email"
          checked={sendEmail}
          onChange={() => setSendEmail(!sendEmail)}
          label="Enviar informe a su email"
        />
        <small
          id="send-email-help"
          className="block text-gray-600 text-sm"
        >
          Active esta opción para recibir un informe detallado por correo electrónico
        </small>
      </div>
      {sendEmail && (
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700"
          >
            Correo Electrónico:
          </label>
          <Input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
          />
          <small
            id="email-help"
            className="text-gray-600 text-sm"
          >
            Ingrese su correo electrónico para recibir el informe
          </small>
          <div className="flex justify-end">

            <Button
              variant="secondary"
              onClick={handleSendReport}
              disabled={email == ''}
            >
              Enviar Informe
            </Button>
          </div>
        </div>
      )}
      {monthlyPayment && (
        <div className="mb-5 p-5 rounded-md bg-neutral-50 ">
          <h3 className="text-lg font-semibold text-center">Pago Mensual: ${monthlyPayment}</h3>
        </div>
      )}
      <div className="my-5 flex gap-5 justify-end">
        <Button
          variant="secondary"
          onClick={handleCalculate}

        >
          Mostrar cuadro de amortización
        </Button>

        <Button
          variant="primary"
          onClick={handleApplyLoan}
        >
          Pedir Crédito
        </Button>
      </div>


      {amortizationTable.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <h3 className="text-lg font-bold mb-2">Cuadro de Amortización</h3>
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">Pago N°</th>
                <th className="border px-4 py-2">Pago</th>
                <th className="border px-4 py-2">Capital (C)</th>
                <th className="border px-4 py-2">Interés (I)</th>
                <th className="border px-4 py-2">Interés Total</th>
                <th className="border px-4 py-2">Saldo Final</th>
              </tr>
            </thead>
            <tbody>
              {amortizationTable.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2 text-center">{row.month}</td>
                  <td className="border px-4 py-2 text-right">${row.payment}</td>
                  <td className="border px-4 py-2 text-right">${row.principalPayment}</td>
                  <td className="border px-4 py-2 text-right">${row.interest}</td>
                  <td className="border px-4 py-2 text-right">${row.totalInterest}</td>
                  <td className="border px-4 py-2 text-right">${row.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p><span className="text-primary-400">Aviso:</span> Los resultados proporcionados por esta calculadora son solo estimaciones. No podemos asegurar la precisión de los resultados ni su aplicabilidad a su situación financiera.</p>
    </div>
  );
};

export default FinancingCalculator;
