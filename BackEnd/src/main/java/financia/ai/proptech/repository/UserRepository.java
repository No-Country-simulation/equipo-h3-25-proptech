package financia.ai.proptech.repository;

import financia.ai.proptech.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmailAndDni(String email, Integer dni);
    Optional<User> findByEmail(String email);

}
