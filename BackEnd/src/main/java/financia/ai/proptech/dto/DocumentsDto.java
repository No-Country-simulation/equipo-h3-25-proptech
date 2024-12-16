package financia.ai.proptech.dto;

import financia.ai.proptech.validation.Create;
import jakarta.validation.constraints.NotNull;

public record DocumentsDto(
        Long id,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        String pathFile) {
}
