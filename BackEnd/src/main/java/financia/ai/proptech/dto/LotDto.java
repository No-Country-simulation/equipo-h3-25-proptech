package financia.ai.proptech.dto;

import financia.ai.proptech.emuns.LotStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record LotDto(Long id,
                     @NotBlank(message = "El título no puede ser nulo o vacío") String title,
                     @NotBlank(message = "El Descripcion no puede ser nulo o vacío") String description,
                     String location,
                     String size,
                     @Positive(message = "El precio debe ser un valor positivo")double price,
                     @NotBlank(message = "El direccion no puede ser nulo o vacío") String address,
                     String surface,
                     String coordinates,
                     @NotNull(message = "El estado es obligatorio")  LotStatus status,
                     Boolean active) {


}
