package financia.ai.proptech.repository;

import financia.ai.proptech.model.Documents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentsRepository extends JpaRepository<Documents, Long> {
}
