package financia.ai.proptech.repository;

import financia.ai.proptech.model.CreditApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditApplicationRepository extends JpaRepository <CreditApplication,Long> {
}
