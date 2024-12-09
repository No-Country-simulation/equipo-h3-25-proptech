package financia.ai.proptech.service.serviceimpl;

import financia.ai.proptech.dto.InvestmentApplicationDto;

import financia.ai.proptech.emuns.StatusInvestment;
import financia.ai.proptech.exception.ExceptionRequest;
import financia.ai.proptech.mapper.IInvestmentApplicationMapper;
import financia.ai.proptech.model.InvestmentApplication;
import financia.ai.proptech.repository.InvestmentApplicationRepository;

import financia.ai.proptech.service.IInvestmentApplication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;



@Service
public class InvestmentApplicationServiceImpl implements IInvestmentApplication {
    final IInvestmentApplicationMapper investmentApplicationMapper;

    final InvestmentApplicationRepository investmentApplicationRepository;

    public InvestmentApplicationServiceImpl(InvestmentApplicationRepository investmentApplicationRepository,
                                            IInvestmentApplicationMapper investmentApplicationMapper) {
        this.investmentApplicationMapper = investmentApplicationMapper;
        this.investmentApplicationRepository = investmentApplicationRepository;
    }

    @Transactional
    @Override
    public void createInvestmentApplication(InvestmentApplicationDto investmentApplicationDto) {

        InvestmentApplication investmentApplication = investmentApplicationMapper.toEntity(investmentApplicationDto);
        investmentApplication.setStatus(StatusInvestment.PENDIENTE);
        investmentApplication.setActive(true);
        investmentApplicationRepository.save(investmentApplication);

    }

    @Transactional
    @Override
    public void updateInvestmentApplication(InvestmentApplicationDto updateDto) {

        InvestmentApplication existingApplication = investmentApplicationRepository.findById(updateDto.id())
                .orElseThrow(() -> new ExceptionRequest("La solicitud de inversión con ID " + updateDto.id() + " no existe."));

        // Actualizar los campos directamente del DTO
        existingApplication.setAmount(updateDto.amount());
        existingApplication.setOccupation(updateDto.occupation());
        existingApplication.setSeniority(updateDto.seniority());
        existingApplication.setCompany(updateDto.company());
        existingApplication.setMonthlyIncome(updateDto.monthlyIncome());
        existingApplication.setMonthlyExpenses(updateDto.monthlyExpenses());
        existingApplication.setAssets(updateDto.assets());
        existingApplication.setLastSalaryReceipts(updateDto.lastSalaryReceipts());
        existingApplication.setCuit(updateDto.cuit());
        existingApplication.setPublicServices(updateDto.publicServices());
        existingApplication.setStatus(updateDto.status());

        // Guardar la entidad actualizada
        investmentApplicationRepository.save(existingApplication);
    }



    @Override
    public void disableInvestmentApplicationById(Long investmentApplicationId) {
        Optional<InvestmentApplication> optionalInvestmentApplication = investmentApplicationRepository.findById(investmentApplicationId);
        if (optionalInvestmentApplication.isPresent()) {
            optionalInvestmentApplication.get().setActive(false);

            investmentApplicationRepository.save(optionalInvestmentApplication.get());
        } else {
            throw new ExceptionRequest("el id " + investmentApplicationId + " no es valido");

        }

    }

    @Override
    public void deleteInvestmentApplication(Long investmentApplicationId) {

        InvestmentApplication investmentApplication = investmentApplicationRepository.findById(investmentApplicationId)
                .orElseThrow(() -> new ExceptionRequest("No se encontró la solicitud de inversión con ID: " + investmentApplicationId));
        // Eliminar la solicitud
        investmentApplicationRepository.delete(investmentApplication);

    }

    @Override
    public List<InvestmentApplicationDto> getAllInvestmentApplications() {
        List<InvestmentApplication> investmentApplicationList = investmentApplicationRepository.findAll();
        return investmentApplicationList.stream()
                .filter(investmentApplication -> Boolean.TRUE.equals(investmentApplication.getActive()))
                .map(investmentApplicationMapper::toDto)
                .collect(Collectors.toList());
    }
}
