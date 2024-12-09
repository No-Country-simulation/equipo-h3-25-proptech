# Etapa de compilación
FROM amazoncorretto:21 AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para la configuración de Maven
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Descargar dependencias para compilación offline
RUN ./mvnw dependency:go-offline

# Copiar el código fuente del proyecto
COPY src ./src

# Compilar y empaquetar el proyecto
RUN ./mvnw clean package -DskipTests

# Etapa de ejecución
FROM amazoncorretto:21

# Copiar el JAR compilado desde la etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto donde se ejecutará la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/app.jar"]
