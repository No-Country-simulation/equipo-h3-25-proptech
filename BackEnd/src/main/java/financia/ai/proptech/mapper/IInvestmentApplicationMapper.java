package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.InvestmentApplicationDto;
import financia.ai.proptech.model.InvestmentApplication;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IInvestmentApplicationMapper {
    InvestmentApplication toEntity(InvestmentApplicationDto applicationDto);
    InvestmentApplicationDto toDto(InvestmentApplication application);
}
