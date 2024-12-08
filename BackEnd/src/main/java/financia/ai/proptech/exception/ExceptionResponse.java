package financia.ai.proptech.exception;

public class ExceptionResponse {
    private String message;
    private Integer statusCode;

    public ExceptionResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ExceptionResponse(Integer statusCode, String message) {
        this.statusCode = statusCode;
        this.message = message;
    }
}
