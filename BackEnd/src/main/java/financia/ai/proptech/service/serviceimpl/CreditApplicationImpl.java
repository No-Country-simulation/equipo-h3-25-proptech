package financia.ai.proptech.service.serviceimpl;

import financia.ai.proptech.dto.CreditApplicationDto;
import financia.ai.proptech.exception.ExceptionRequest;
import financia.ai.proptech.mapper.CreditApplicationMapper;
import financia.ai.proptech.model.CreditApplication;
import financia.ai.proptech.repository.CreditApplicationRepository;
import financia.ai.proptech.service.CreditApplicationService;
import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class CreditApplicationImpl  implements CreditApplicationService {
    final CreditApplicationMapper creditApplicationMapper;
    final CreditApplicationRepository creditApplicationRepository;



    public CreditApplicationImpl(CreditApplicationMapper creditApplicationMapper, CreditApplicationRepository creditApplicationRepository) {
        this.creditApplicationMapper = creditApplicationMapper;
        this.creditApplicationRepository = creditApplicationRepository;
    }

    @Transactional
    @Override
    public void createCreditApplication(CreditApplicationDto creditApplicationDto) {
        System.out.println("Received CreditApplicationDto: " + creditApplicationDto);
        CreditApplication creditApplication = creditApplicationMapper.toEntityCreditApplication(creditApplicationDto);
        System.out.println("Mapped CreditApplication entity: " + creditApplication);
        creditApplicationRepository.save(creditApplication);
     }
    @Transactional
    @Override
    public CreditApplicationDto updateCreditApplication(CreditApplicationDto creditApplicationDto) {
        CreditApplication existingCreditApplication = CreditApplicationRepository.findById(creditApplicationDto.id())
                .orElseThrow(() -> new ExceptionRequest("No puedo ser encontrado ese credito con id " + creditApplicationDto.id()));
        existingCreditApplication.setBuyer(creditApplicationDto.buyer());
        existingCreditApplication.setMonthlyIncome(creditApplicationDto.monthlyIncome());
        existingCreditApplication.setRequestedAmount(creditApplicationDto.requestedAmount());
        existingCreditApplication.setRequestDate(creditApplicationDto.RequestDate());

        creditApplicationRepository.save(existingCreditApplication);

        return creditApplicationMapper.toCreditApplicationDto(existingCreditApplication);

    }

    @Override
    public void disableCreditAppById(Long id) {
        Optional<CreditApplication> optionalCreditApplication= creditApplicationRepository.findById(id);
        if (optionalCreditApplication.isPresent()){
            optionalCreditApplication.get().setActive(false);

            creditApplicationRepository.save(optionalCreditApplication.get());
        }else {
            throw new ExceptionRequest("el id "+id+ " no es valido");
        }



    }

    @Override
    public List<CreditApplicationDto> getAllcreditApplication() {
        List <CreditApplication> lotList= creditApplicationRepository.findAll();
        return lotList.stream()
                .filter(creditApplication -> Boolean.TRUE.equals(creditApplication.getActive()))
                .map(creditApplicationMapper::toCreditApplicationDto)
                .collect(Collectors.toList());
        ;
    }
}
