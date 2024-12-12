import React, { useState } from 'react';

const HttpRequestTester: React.FC = () => {
  const [baseUrl, setBaseUrl] = useState(import.meta.env.VITE_API_BASE_URL || '');
  const [endpoint, setEndpoint] = useState('');
  const [id, setId] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');


  const endpoints = [
    // lot-controller
    { value: 'PUT /lot/actualizar' },
    { value: 'POST /lot/guardarlote' },
    { value: 'GET /lot/enlistar' },
    { value: 'DELETE /lot/eliminar/{id}' },
    // investment-application-controller
    { value: 'PUT /inversion/actualizar' },
    { value: 'POST /inversion/registrar' },
    { value: 'GET /inversion/enlistar' },
    { value: 'DELETE /inversion/eliminar/{id}' },
    { value: 'DELETE /inversion/desactivar/{id}' },
    // guarantors-controller
    { value: 'PUT /guarantors/actualizarGuarantors' },
    { value: 'POST /guarantors/guardarGuarantors' },
    { value: 'GET /guarantors/enlistarGuarantors' },
    { value: 'DELETE /guarantors/eliminarGuarantors/{id}' },
    // credit-application-controller
    { value: 'PUT /creditApp/actualizarCreditApp' },
    { value: 'POST /creditApp/guardarCreditApp' },
    { value: 'GET /creditApp/enlistarCreditApp' },
    { value: 'DELETE /creditApp/eliminarCreditApp/{id}' },
    // user-controller
    { value: 'GET /api/user/{id}' },
    { value: 'PUT /api/user/{id}' },
    { value: 'DELETE /api/user/{id}' },
    { value: 'GET /api/user' },
    { value: 'POST /api/user' },
    // documents-controller
    { value: 'GET /api/docs/{id}' },
    { value: 'PUT /api/docs/{id}' },
    { value: 'DELETE /api/docs/{id}' },
    { value: 'GET /api/docs' },
    { value: 'POST /api/docs' },
    // login-controller
    { value: 'POST /iniciarsesion' },
    { value: 'POST /cerrarsesion' },
  ];

  const handleSendRequest = async () => {
    try {
      // Validar que el JSON sea válido
      const parsedBody = body ? JSON.parse(body) : {};

      const EPArray = endpoint.split(' ');
      const method = EPArray[0]
      const path = EPArray[1]

      let finalEndpoint = path;
      if (id) {
        finalEndpoint = path.replace('{id}', id);
      }
      console.log(path, finalEndpoint, method)
      const fullUrl = `${baseUrl}${finalEndpoint}`;

      const requestOptions: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: method !== 'GET' ? JSON.stringify(parsedBody) : undefined,
      };
      setIsLoading(true)
      const fetchResponse = await fetch(fullUrl, requestOptions);
      console.log(fullUrl)
      console.log(requestOptions)
      if (!fetchResponse.ok) {
        throw new Error(`HTTP error! status: ${fetchResponse.status}`);
      }

      const responseData = await fetchResponse.json();
      setResponse(JSON.stringify(responseData, null, 2));
      setError('');
      setIsLoading(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setResponse('');
      setIsLoading(false)
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">HTTP Request Tester</h2>
      <div className="mb-4">
        Documentación: <a href="https://api-deploy-lastest.onrender.com/swagger-ui/index.html" className='text-blue-600'>https://api-deploy-lastest.onrender.com/swagger-ui/index.html</a>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Base URL</label>
        <input
          type="text"
          value={baseUrl}
          onChange={(e) => setBaseUrl(e.target.value)}
          placeholder="Enter base URL"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Endpoint</label>
        <select
          title="Endpoint"
          value={endpoint}
          onChange={(e) => { setEndpoint(e.target.value); console.log(e.target.value) }}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {endpoints.map((ep) => (
            <option key={ep.value} value={ep.value} className="flex flex-row gap-5 uppercase"
            >
              {getColorForMethod(ep.value.split(' ')[0])}  {ep.value}
            </option>
          ))}
        </select>
      </div>

      {endpoint.includes('{id}') && (
        <div className="mb-4">
          <label className="block mb-2 font-medium">ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block mb-2 font-medium">Request Body (JSON)</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter JSON body (optional)"
          className="w-full min-h-[150px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleSendRequest}
        className={`relative overflow-hidden w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 `}
        disabled={isLoading}
      >
        <div className={`absolute top-0 left-0 ${isLoading && 'animate-load'}  w-full h-full`}></div>
        {isLoading ? 'Loading...' : 'Send Request'}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-800 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      {response && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Response:</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
};

const getColorForMethod = (method: string) => {
  switch (method) {
    case 'GET':
      return '🟦';
    case 'POST':
      return '🟩';
    case 'PUT':
      return '🟧';
    case 'DELETE':
      return '🟥';
    default:
      return '⬜';
  }
};

export default HttpRequestTester;
