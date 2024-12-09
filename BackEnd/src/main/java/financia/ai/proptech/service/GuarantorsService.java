package financia.ai.proptech.service;

import financia.ai.proptech.dto.CreditApplicationDto;
import financia.ai.proptech.dto.GuarantorsDto;

import java.util.List;

public interface GuarantorsService {
    void createGuarantors (GuarantorsDto guarantorsDto);

    void updateGuarantors(GuarantorsDto guarantorsDto);

    void disableGuarantorsById (Long id);

    List<GuarantorsDto> getAllGurantors ();

}
