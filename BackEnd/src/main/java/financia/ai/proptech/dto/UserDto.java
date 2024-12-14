package financia.ai.proptech.dto;

import financia.ai.proptech.emuns.DepositMethod;
import financia.ai.proptech.emuns.Gender;
import financia.ai.proptech.emuns.Roles;
import financia.ai.proptech.validation.Create;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;


public record UserDto(
        Long id,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        String country,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        Integer zipCode,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        Integer phoneNumber,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        Gender gender,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        String citizenship,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        String address,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        Integer numbering,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        DepositMethod depositMethod,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        Integer postalCode,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        String name,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        String lastName,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        Integer dni,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        String email,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        String password,
        Boolean active,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        Roles roles,
        @NotNull(groups = Create.class, message = "Este campo no puede ser nulo")
        LocalDate dateOfBirth) {
}
