package financia.ai.proptech.dto;

import java.time.LocalDate;

import financia.ai.proptech.emuns.DepositMethod;
import financia.ai.proptech.emuns.Gender;
import financia.ai.proptech.emuns.Roles;


public record UserDto(
        Long id,
        String country,
        String phoneNumber,
        Gender gender,
        String citizenship,
        String address,
        String postalCode,
        Integer numbering,
        DepositMethod depositMethod,
        String name,
        String lastName,
        Integer dni,
        String email,
        String password,
        Boolean active,
        Roles roles,
        LocalDate dateOfBirth) {
}
