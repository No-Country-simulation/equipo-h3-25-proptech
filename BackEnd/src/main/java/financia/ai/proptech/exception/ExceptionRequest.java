package financia.ai.proptech.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(HttpStatus.NOT_FOUND)
public class ExceptionRequest extends RuntimeException{
    public ExceptionRequest(String message){
        super(message);
    }
    public ExceptionRequest(String message, Throwable cause){
        super(message,cause);
    }
}