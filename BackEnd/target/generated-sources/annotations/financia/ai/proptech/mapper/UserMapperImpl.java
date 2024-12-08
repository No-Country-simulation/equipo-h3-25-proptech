package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.UserDto;
import financia.ai.proptech.emuns.Roles;
import financia.ai.proptech.model.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-06T22:49:03-0500",
    comments = "version: 1.6.3, compiler: javac, environment: Java 21.0.1 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User toUser(UserDto userDto) {
        if ( userDto == null ) {
            return null;
        }

        User user = new User();

        user.setId( userDto.id() );
        user.setName( userDto.name() );
        user.setLastName( userDto.lastName() );
        user.setDni( userDto.dni() );
        user.setEmail( userDto.email() );
        user.setPassword( userDto.password() );
        user.setActive( userDto.active() );
        user.setRoles( userDto.roles() );

        return user;
    }

    @Override
    public List<UserDto> toUserDto(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserDto> list = new ArrayList<UserDto>( users.size() );
        for ( User user : users ) {
            list.add( toUserDto( user ) );
        }

        return list;
    }

    @Override
    public UserDto toUserDto(User user) {
        if ( user == null ) {
            return null;
        }

        Long id = null;
        String name = null;
        String lastName = null;
        Integer dni = null;
        String email = null;
        String password = null;
        Boolean active = null;
        Roles roles = null;

        id = user.getId();
        name = user.getName();
        lastName = user.getLastName();
        dni = user.getDni();
        email = user.getEmail();
        password = user.getPassword();
        active = user.getActive();
        roles = user.getRoles();

        UserDto userDto = new UserDto( id, name, lastName, dni, email, password, active, roles );

        return userDto;
    }
}
