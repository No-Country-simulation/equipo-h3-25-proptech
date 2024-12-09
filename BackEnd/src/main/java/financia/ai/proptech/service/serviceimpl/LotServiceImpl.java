package financia.ai.proptech.service.serviceimpl;

import financia.ai.proptech.dto.LotDto;
import financia.ai.proptech.exception.ExceptionRequest;
import financia.ai.proptech.mapper.ILotMapper;
import financia.ai.proptech.model.Lot;
import financia.ai.proptech.repository.LotRepository;

import financia.ai.proptech.service.ILotService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LotServiceImpl implements ILotService {
    final ILotMapper lotMapper;
    final LotRepository lotRepository;

    public LotServiceImpl(LotRepository lotRepository,ILotMapper lotMapper) {
        this.lotMapper = lotMapper;
        this.lotRepository = lotRepository;
    }
    @Transactional
    @Override
    public void createLot(LotDto lotDto) {

        Lot lot = lotMapper.toEntityLot(lotDto);
        lot.setActive(true);
        lotRepository.save(lot);
    }
    @Transactional
    @Override
    public void updateLot(LotDto lotDto) {
        Lot existingLot = lotRepository.findById(lotDto.id())
                .orElseThrow(() -> new ExceptionRequest("No puedo ser encontrado ese terreno con id " + lotDto.id()));
        existingLot.setTitle(lotDto.title());
        existingLot.setDescription(lotDto.description());
        existingLot.setLocation(lotDto.location());
        existingLot.setSize(lotDto.size());
        existingLot.setPrice(lotDto.price());
        existingLot.setAddress(lotDto.address());
        existingLot.setSurface(lotDto.surface());
        existingLot.setCoordinates(lotDto.coordinates());
        existingLot.setStatus(lotDto.status());

        lotRepository.save(existingLot);

        lotMapper.toLotDto(existingLot);
    }

    @Override
    public Lot getLotById(int id) {
        return null;
    }

    @Override
    public List<LotDto> getAllLots() {
        List <Lot> lotList= lotRepository.findAll();
        return lotList.stream()
               .filter(lot -> Boolean.TRUE.equals(lot.getActive()))
                .map(lotMapper::toLotDto)
                .collect(Collectors.toList());
    }

    @Override
    public void disableLotById(long id) {
        Optional<Lot> optionalLot= lotRepository.findById(id);
        if (optionalLot.isPresent()){
            optionalLot.get().setActive(false);

            lotRepository.save(optionalLot.get());
        }else {
            throw new ExceptionRequest("el id "+id+ " no es valido");
        }


    }
}
