
![Header](financiaai.webp)

# Financia.AI (Fintech)
[https://financiaai.vercel.app/](https://financiaai.vercel.app/)


## Descripción del Proyecto
Financia.AI es una plataforma fintech diseñada para resolver problemas de acceso a financiamiento y oportunidades de inversión. 
La startup ofrece préstamos a personas que desean comprar terrenos, proporcionando un proceso transparente y accesible para obtener financiamiento. 
Además, Financia.AI presenta un producto para inversionistas similar a un plazo fijo, donde el dinero de los inversionistas se utiliza para otorgar estos préstamos. 

Tecnologías Utilizadas
- Frontend: React, Tailwind CSS, Swiper, etc 
- Backend: SpringBoot, Docker, etc
- Base de Datos: Postgress
- Herramientas de Desarrollo: Vite, TypeScript, Swagger, etc 

Arquitectura Distribuida:
- Frontend:  Vercel 
- Backend: Render 
- Base de Datos: Neon
- Files: Cloudinary 

## Enlaces Relevantes
- Documentación Backend: https://api-deploy-lastest.onrender.com/swagger-ui/index.html
- Figma Diseño: https://www.figma.com/design/YfDilW3qRO4MSPlhQ7qNj2/Financia.ai--WEB-3-(COMPARTIDO)?node-id=0-1&node-type=canvas&t=tKe5HWtAwrevGuJG-0
- Figma Backend: https://www.figma.com/board/BneUi23r574kUciTxFukvH/Backend?node-id=0-1&t=YwwjkO2Xn6nQIky5-1
- Repositorio GitHub: https://github.com/No-Country-simulation/equipo-h3-25-proptech
- Deploy frontend: https://financiaai.vercel.app/

Video de presentación: [financia.ia YouTube](https://www.youtube.com/watch?v=M-recfKYTuk)

## Colaboradores

#### UI/UX
-  **Christian R. Kase** [LinkedIn](www.linkedin.com/in/christian-kase23) [Github](https://github.com/ChristianKase)
-  **Lizeth Velasco (Liz)** [LinkedIn](https://www.linkedin.com/in/lizeth-velasco98/) 
#### Backend
- **Christian Ivan Cachero**  [LinkedIn](https://www.linkedin.com/in/christian-cachero/) [Github](https://github.com/Christian-Cachero)
- **Christian Arias** [Github](https://github.com/christ774)
- **Ricardo Andres Tolomei** [Github]()
#### Frontend
- **Santiago Gonzales**  [LinkedIn](https://www.linkedin.com/in/santiagogonzalez0892/) [Github](https://github.com/SantiagoGonzalez0892)
- **Fabio Roldan**  [LinkedIn](https://www.linkedin.com/in/fabio-roldan/) [Github](https://github.com/fabioroldan)

## Instrucciones para Instalar y Ejecutar el Proyecto Localmente

1. **Clonar el repositorio:**
```bash
   git clone https://github.com/No-Country-simulation/equipo-h3-25-proptech.git
```

### Configuración del Backend

2. Abrir el proyecto con tu IDE preferido

3. Configurar las variables de entorno:

Crea un archivo .env dentro de la carpeta /backend y añade las siguientes variables de entorno:

```env
DB_URL= db url ej. jdbc:postgresql://xxx/xxx?xxx
DB_PASSWORD= db pasword
DB_USERNAME= db username
FRONTEND_URL= url del frontend
```

Iniciar la aplicación ▶️ con tu IDE preferido


### Configuración del Frontend

2. Navegar al directorio del frontend:
```bash
cd ..
cd frontend
```

3. Instalar las dependencias:

```bash
npm install
```

4. Configurar las variables de entorno:

Crea un archivo .env dentro de la carpeta /frontend y añade las siguientes variables de entorno:

```env
VITE_API_BASE_URL=http://localhost:3000/api/
VITE_CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
VITE_CLOUDINARY_UPLOAD_PRESET=YOUR_UPLOAD_PRESET
```

Iniciar la aplicación:

```bash
npm run dev
```
--- 

