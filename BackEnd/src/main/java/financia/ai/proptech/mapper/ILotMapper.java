package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.LotDto;
import financia.ai.proptech.model.Lot;
import org.mapstruct.Mapper;



import java.util.List;

@Mapper(componentModel = "spring")
public interface ILotMapper {

    LotDto toLotDto(Lot lot);

    Lot toEntityLot(LotDto lotDto);

    List<LotDto> toLotDto(List<Lot> lots);
    List<Lot> toLots(List<LotDto> lotDtos);

}
