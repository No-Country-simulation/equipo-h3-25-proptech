package financia.ai.proptech.service;

import financia.ai.proptech.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

    Optional<UserDto> create (UserDto userDto);

    Optional<UserDto> update (Long id, UserDto userDto);

    Optional<List<UserDto>> users();

    Optional<UserDto> userId (Long id);

    void delete (Long id);

    boolean isUserIdDuplicate(Long id);
}
