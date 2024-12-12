package financia.ai.proptech.dto;

import financia.ai.proptech.emuns.DepositMethod;
import financia.ai.proptech.emuns.Gender;
import financia.ai.proptech.emuns.Roles;

import java.time.LocalDate;


public record UserDto(
        Long id,
        String country,
        Integer zipCode,
        Integer phoneNumber,
        Gender gender,
        String citizenship,
        String address,
        Integer numbering,
        DepositMethod depositMethod,
        Integer postalCode,
        String name,
        String lastName,
        Integer dni,
        String email,
        String password,
        Boolean active,
        Roles roles,
        LocalDate dateOfBirth) {
}
