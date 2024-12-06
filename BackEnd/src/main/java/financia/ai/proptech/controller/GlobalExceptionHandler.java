package financia.ai.proptech.controller;

import financia.ai.proptech.exception.ExceptionRequest;
import financia.ai.proptech.exception.ExceptionResponse;
import financia.ai.proptech.exception.MyException;
import financia.ai.proptech.exception.UserNoExistsException;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.tomcat.util.http.fileupload.impl.SizeException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import java.io.IOException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<ExceptionResponse> handleMaxSizeException(MaxUploadSizeExceededException exception) {
        ExceptionResponse exceptionResponse = new ExceptionResponse("Error en la solicitud: " + exception.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exceptionResponse);
    }
    @ExceptionHandler(SizeException.class)
    public ResponseEntity<ExceptionResponse> SizeException(SizeException exception) {
        ExceptionResponse exceptionResponse = new ExceptionResponse("Error en la solicitud: " + exception.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exceptionResponse);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ExceptionResponse> Exception(Exception exception) {
        ExceptionResponse exceptionResponse = new ExceptionResponse("Error en la solicitud: " + exception.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exceptionResponse);
    }
    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ExceptionResponse> handleNullPointerException(NullPointerException exception) {
        ExceptionResponse exceptionResponse = new ExceptionResponse("Error en la solicitud: " + exception.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exceptionResponse);
    }

    @ExceptionHandler(ExceptionRequest.class)
    public ResponseEntity<ExceptionResponse> handleRequestException(ExceptionRequest exception) {
        ExceptionResponse exceptionResponse = new ExceptionResponse("Error en la solicitud: " + exception.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exceptionResponse);
    }

    @ExceptionHandler(IOException.class)
    public ResponseEntity<ExceptionResponse> handleIOException(IOException exception) {
        ExceptionResponse exceptionResponse = new ExceptionResponse("Error de E/S: " + exception.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exceptionResponse);
    }
    @ResponseBody
    @ExceptionHandler(MyException.class)
    public ResponseEntity<?> handleControllerException(HttpServletRequest request, Throwable ex) {
        HttpStatus status = getStatus(request);
        return new ResponseEntity<>(new ExceptionResponse(status.value(), ex.getMessage()), status);
    }

    private HttpStatus getStatus(HttpServletRequest request) {
        Integer code = (Integer) request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        HttpStatus status = HttpStatus.resolve(code);
        return (status != null) ? status : HttpStatus.INTERNAL_SERVER_ERROR;
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionResponse> handleValidationException(MethodArgumentNotValidException ex) {
        // Construir un mensaje con los errores de validación
        StringBuilder errorMessage = new StringBuilder("Errores de validación: ");
        ex.getBindingResult().getFieldErrors().forEach(error ->
                errorMessage.append(String.format("[%s: %s] ", error.getField(), error.getDefaultMessage()))
        );

        ExceptionResponse exceptionResponse = new ExceptionResponse(errorMessage.toString());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(exceptionResponse);
    }
    @ExceptionHandler(UserNoExistsException.class)
    public ResponseEntity<String> handleUserNoExistsException(UserNoExistsException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}

