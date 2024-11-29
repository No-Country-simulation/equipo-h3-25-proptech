package financia.ai.proptech.service;

import financia.ai.proptech.dto.CreditApplicationDto;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface CreditApplicationService {

    void createCreditApplication (CreditApplicationDto creditApplicationDto);



    CreditApplicationDto updateCreditApplication( CreditApplicationDto creditApplicationDto);

    void disableCreditAppById (Long id);

    List<CreditApplicationDto> getAllcreditApplication ();
}
