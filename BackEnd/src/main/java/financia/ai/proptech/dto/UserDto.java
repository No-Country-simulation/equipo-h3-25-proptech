package financia.ai.proptech.dto;

import financia.ai.proptech.emuns.Roles;


public record UserDto(
        Long id,
        String name,
        String lastName,
        Integer dni,
        String email,
        String password,
        Boolean active,
        Roles roles) {
}
