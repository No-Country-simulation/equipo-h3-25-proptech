package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.UserDto;
import financia.ai.proptech.model.User;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;
@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "lastName", target = "lastName"),
            @Mapping(source = "dni", target = "dni"),
            @Mapping(source = "email", target = "email"),
            @Mapping(source = "password", target = "password"),
            @Mapping(source = "active", target = "active"),
            @Mapping(source = "roles", target = "roles")
    })
    User toUser (UserDto userDto);

    List<UserDto> toUserDto(List<User> users);

    @InheritInverseConfiguration
    UserDto toUserDto(User user);
}