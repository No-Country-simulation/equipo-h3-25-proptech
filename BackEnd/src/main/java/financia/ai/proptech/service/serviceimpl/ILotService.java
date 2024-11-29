package financia.ai.proptech.service.serviceimpl;

import financia.ai.proptech.dto.LotDto;

import financia.ai.proptech.model.Lot;

import java.util.List;

public interface ILotService {

     void createLot(LotDto lotDto);
     LotDto updateLot(LotDto lotDto);
     Lot getLotById(int id);
     List<LotDto> getAllLots();
     void disableLotById(long id);
}
