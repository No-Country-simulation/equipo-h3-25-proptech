// 404.tsx
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4 mb-8 text-gray-700">Página No Encontrada</p>
        <a href="/" className="text-blue-500 hover:underline">Volver a la página principal</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
