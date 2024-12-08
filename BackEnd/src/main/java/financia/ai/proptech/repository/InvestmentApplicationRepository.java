package financia.ai.proptech.repository;

import financia.ai.proptech.model.InvestmentApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestmentApplicationRepository extends JpaRepository<InvestmentApplication, Long> {
}
