package financia.ai.proptech.controller;

import financia.ai.proptech.dto.UserDto;
import financia.ai.proptech.exception.EntityNoExistsException;
import financia.ai.proptech.service.UserService;
import financia.ai.proptech.validation.Create;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserDto> create (@RequestBody @Validated(Create.class) UserDto userDto){
            return userService.create(userDto)
                    .map(user -> new ResponseEntity<>(user, HttpStatus.CREATED))
                    .orElse(new ResponseEntity<>(HttpStatus.CONFLICT));
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getUsers (){
        return userService.users()
                .map(users -> new ResponseEntity<>(users, HttpStatus.OK))
                .orElseGet(() -> ResponseEntity.noContent().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUser (@PathVariable Long id){
        return userService.userId(id).map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDto> updateUser (@PathVariable Long id, @RequestBody UserDto userDto){
        return userService.update(id, userDto)
                .map(user -> new ResponseEntity<>(user, HttpStatus.ACCEPTED))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser (@PathVariable Long id){
        try{
            userService.delete(id);
            return ResponseEntity.ok("El usuario fue eliminado correctamente");
        }catch (EntityNoExistsException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("El usuario no existe");
        }
    }
}
