package financia.ai.proptech.serviceImpl;

import financia.ai.proptech.dto.UserDto;
import financia.ai.proptech.exception.UserNoExistsException;
import financia.ai.proptech.mapper.UserMapper;
import financia.ai.proptech.model.User;
import financia.ai.proptech.repository.UserRepository;
import financia.ai.proptech.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private final UserMapper userMapper;

    @Override
    public Optional<UserDto> create(UserDto userDto) {
        return Optional.of(userMapper.toUserDto(userRepository
                .save(userMapper.toUser(userDto))));
    }

    @Override
    public Optional<UserDto> update(Long id, UserDto userDto) {
        return userRepository.findById(id).map(userToModify -> {
            if (userDto.name() != null) {
                userToModify.setName(userDto.name());
            }

            if (userDto.email() != null) {
                userToModify.setEmail(userDto.email());
            }

            if (userDto.password() != null) {
                userToModify.setPassword(userDto.password());
            }

            User userModified = userRepository.save(userToModify);
            return userMapper.toUserDto(userModified);
        }).or(() -> {
            throw new UserNoExistsException("El usuario seleccionado no existe");
        });
    }

    @Override
    public Optional<List<UserDto>> users() {
        return Optional.of(userMapper.toUserDto(userRepository.findAll()));
    }

    @Override
    public Optional<UserDto> userId(Long id) {
        return userRepository.findById(id).map(userMapper::toUserDto);
    }

    @Override
    public void delete(Long id) {
        if (!userRepository.existsById(id)){
            throw new UserNoExistsException("El usuario con ID " + id + " no existe.");
        }
        userRepository.deleteById(id);
    }

    @Override
    public boolean isUserIdDuplicate(Long id) {

        // Implementa la lógica para verificar si el nombre está duplicado en la base de datos
        // Puedes usar el repositorio (repository) para realizar la consulta
        // Retorna true si el nombre está duplicado, false en caso contrario
        Optional<User> existingTable = userRepository.findById(id);
        return existingTable.isPresent();
    }
}
