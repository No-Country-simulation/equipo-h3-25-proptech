package financia.ai.proptech.exception;

//Excepción más general para responder cuando una entidad no se encuentra en la BD.
public class EntityNoExistsException extends RuntimeException{
    public EntityNoExistsException (String message){
        super(message);
    }

}
