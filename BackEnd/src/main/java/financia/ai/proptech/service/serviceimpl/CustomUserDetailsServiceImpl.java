package financia.ai.proptech.service.serviceimpl;

import financia.ai.proptech.model.User;
import financia.ai.proptech.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class CustomUserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;



    public CustomUserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()){
            User user = optionalUser.get();
            List<GrantedAuthority> permisos = new ArrayList<>();
            // Asegúrate de que `getRol()` devuelve el rol correcto
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority("ROLE_" + user.getRoles().name());
            permisos.add(grantedAuthority);
            System.out.println("Tipo de usuario: " + user.getRoles().name());
            System.out.println("Rol asignado: " + grantedAuthority.getAuthority());
            // Devolvemos un objeto User de Spring Security
            return new org.springframework.security.core.userdetails.User(optionalUser.get().getEmail(), optionalUser.get().getPassword(), permisos);


        } else {
            throw new UsernameNotFoundException("Usuario con el correo " + email + " no encontrado.");

        }

    }
    public Optional<User> findByUserName(String mail,Integer dni) {
        return userRepository.findByEmailAndDni(mail,dni);
    }
}
