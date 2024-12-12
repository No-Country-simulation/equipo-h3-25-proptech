package financia.ai.proptech.repository;


import financia.ai.proptech.model.Guarantors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuarantorsRepository extends JpaRepository<Guarantors,Long> {
}
