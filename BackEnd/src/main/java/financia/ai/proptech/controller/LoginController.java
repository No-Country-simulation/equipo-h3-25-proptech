package financia.ai.proptech.controller;

import financia.ai.proptech.dto.AuthUserDto;
import financia.ai.proptech.model.User;

import financia.ai.proptech.service.serviceimpl.CustomUserDetailsServiceImpl;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class LoginController {

    private final CustomUserDetailsServiceImpl customUserDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public LoginController(CustomUserDetailsServiceImpl customUserDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.customUserDetailsService = customUserDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @PostMapping("/iniciarsesion")
    public ResponseEntity<String> login(@RequestBody AuthUserDto authUserDto) {
        Optional<User> optionalUser = customUserDetailsService.findByUserName(authUserDto.email(),authUserDto.dni());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (bCryptPasswordEncoder.matches(authUserDto.password(), user.getPassword())) {

                // Autenticación exitosa; generar y devolver un token o mensaje de éxito
                return ResponseEntity.ok("Inicio de sesión exitoso");
            } else {
                // Contraseña incorrecta
                return ResponseEntity.status(401).body("Contraseña es incorrecta");
            }
        } else {
            // dni o emailson incorrecto
            return ResponseEntity.status(404).body("Por favor revisa el dni o el correo");
        }
    }
    @PostMapping("/cerrarsesion")
    public ResponseEntity<String> cerrarSesion(HttpServletRequest request) {
        try {
            request.logout();
            return ResponseEntity.ok("sesion cerrada con exito");
        } catch (ServletException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Logout Failed");
        }
    }

}
