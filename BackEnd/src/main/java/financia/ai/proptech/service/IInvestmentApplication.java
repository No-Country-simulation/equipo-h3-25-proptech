package financia.ai.proptech.service;

import financia.ai.proptech.dto.InvestmentApplicationDto;
import financia.ai.proptech.model.InvestmentApplication;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IInvestmentApplication {
    void createInvestmentApplication(InvestmentApplicationDto investmentApplicationDto);
    void updateInvestmentApplication(InvestmentApplicationDto investmentApplicationDto);
    void disableInvestmentApplicationById(Long id);
    void deleteInvestmentApplication(Long investmentApplicationId);
    List<InvestmentApplicationDto> getAllInvestmentApplications();
}
