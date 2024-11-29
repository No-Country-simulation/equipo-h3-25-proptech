package financia.ai.proptech.mapper;
import financia.ai.proptech.dto.CreditApplicationDto;
import financia.ai.proptech.model.CreditApplication;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")

public interface CreditApplicationMapper {

    CreditApplicationDto toCreditApplicationDto(CreditApplication creditApplication);

    CreditApplication toEntityCreditApplication(CreditApplicationDto creditApplicationDto);

    List<CreditApplicationDto> toCreditApplicationDto(List<CreditApplication> creditApplication);
    List<CreditApplication> toCreditApplication(List<CreditApplicationDto> creditApplicationDto);
}
