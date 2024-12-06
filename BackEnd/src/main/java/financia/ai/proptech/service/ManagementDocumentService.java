package financia.ai.proptech.service;

import financia.ai.proptech.exception.ExceptionRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.UUID;

public class ManagementDocumentService {

    // La ubicacion de la ruta se puede cambiar el archivo application.properties

    @Value("${upload.dir}")
    public static String uploadDir;

    public static String saveFile(MultipartFile file, String subDir, String fileType) {
        try {
            String fileName = file.getOriginalFilename();
            String extension = getExtension(fileName);
            String newFileName = generateUniqueFileName(fileType, extension);
            String basePath = System.getProperty("user.dir");
            String filePath = Paths.get(basePath, uploadDir, subDir, newFileName).toString();
            // crear ruta automatica si no existe
            File directory = new File(filePath);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            File dest = new File(filePath);
            file.transferTo(dest);
            return filePath;
        } catch (IOException e) {
            e.printStackTrace();
            throw new ExceptionRequest("La Ruta del Archivo No Se Encuentra", e);
        } catch (MaxUploadSizeExceededException exception) {
            throw new ExceptionRequest("El tamaño máximo de carga del archivo ha sido excedido", exception);
        }
    }

    public static String getExtension(String fileName) {
        int dotIndex = fileName.lastIndexOf(".");
        if (dotIndex != -1 && dotIndex < fileName.length() - 1) {
            return fileName.substring(dotIndex + 1).toLowerCase();
        }
        return "";
    }

    public static String generateUniqueFileName(String fileType,String extension) {
        String timestamp = String.valueOf(System.currentTimeMillis());
        String randomString = UUID.randomUUID().toString().substring(0, 8);
        return fileType.toLowerCase() + "_" + timestamp + "_" + randomString + "."+ extension;
    }
}
