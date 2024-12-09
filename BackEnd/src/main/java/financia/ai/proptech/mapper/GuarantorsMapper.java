package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.CreditApplicationDto;
import financia.ai.proptech.dto.GuarantorsDto;
import financia.ai.proptech.model.CreditApplication;
import financia.ai.proptech.model.Guarantors;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GuarantorsMapper {

    GuarantorsDto toGuarantorsDto(Guarantors guarantors);

    Guarantors toEntityGuarantors(GuarantorsDto guarantorsDto);

    List<GuarantorsDto> toGuarantorsDto(List<Guarantors> guarantors);
    List<Guarantors> toGuarantors(List<GuarantorsDto> guarantorsDto);

}
