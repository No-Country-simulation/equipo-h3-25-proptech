package financia.ai.proptech.exception;

public class UserNoExistsException extends RuntimeException{

    public UserNoExistsException (String message){
        super(message);
    }
}
