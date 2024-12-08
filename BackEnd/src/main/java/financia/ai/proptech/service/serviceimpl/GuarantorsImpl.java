package financia.ai.proptech.service.serviceimpl;

import financia.ai.proptech.dto.GuarantorsDto;
import financia.ai.proptech.exception.ExceptionRequest;
import financia.ai.proptech.mapper.GuarantorsMapper;
import financia.ai.proptech.model.Guarantors;
import financia.ai.proptech.repository.GuarantorsRepository;
import financia.ai.proptech.service.GuarantorsService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
public class GuarantorsImpl implements GuarantorsService {

    final GuarantorsMapper guarantorsMapper;
    final GuarantorsRepository guarantorsRepository;



    public GuarantorsImpl(GuarantorsMapper guarantorsMapper, GuarantorsRepository guarantorsRepository) {
        this.guarantorsMapper = guarantorsMapper;
        this.guarantorsRepository = guarantorsRepository;
    }
    @Transactional
    @Override
    public void createGuarantors(GuarantorsDto guarantorsDto) {
        System.out.println("Received GuarantorsDto: " + guarantorsDto);
        Guarantors guarantors = guarantorsMapper.toEntityGuarantors(guarantorsDto);
        System.out.println("Mapped Guarantors entity: " + guarantors);
        guarantorsRepository.save(guarantors);

    }
    @Transactional
    @Override
    public void updateGuarantors(GuarantorsDto guarantorsDto) {
        Guarantors existingGuarantors = guarantorsRepository.findById(guarantorsDto.id())
                .orElseThrow(() -> new ExceptionRequest("No puedo ser encontrado ese garante con id " + guarantorsDto.id()));

        existingGuarantors.setName(guarantorsDto.name());
        existingGuarantors.setLastname(guarantorsDto.lastname());
        existingGuarantors.setEmail(guarantorsDto.email());
        existingGuarantors.setDni(guarantorsDto.dni());

        guarantorsRepository.save(existingGuarantors);

        guarantorsMapper.toGuarantorsDto(existingGuarantors);

    }

    @Override
    public void disableGuarantorsById(Long id) {
        Optional<Guarantors> optionalGuarantors= guarantorsRepository.findById(id);
        if (optionalGuarantors.isPresent()){
            optionalGuarantors.get().setActive(false);

            guarantorsRepository.save(optionalGuarantors.get());
        }else {
            throw new ExceptionRequest("el id "+id+ " no es valido");
        }


    }

    @Override
    public List<GuarantorsDto> getAllGurantors() {
        List <Guarantors> lotList= guarantorsRepository.findAll();
        return lotList.stream()
                .filter(guarantors -> Boolean.TRUE.equals(guarantors.getActive()))
                .map(guarantorsMapper::toGuarantorsDto)
                .collect(Collectors.toList());

    }
}
