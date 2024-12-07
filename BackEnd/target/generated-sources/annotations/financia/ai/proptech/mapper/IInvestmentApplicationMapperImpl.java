package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.InvestmentApplicationDto;
import financia.ai.proptech.emuns.StatusInvestment;
import financia.ai.proptech.model.InvestmentApplication;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-06T22:39:44-0500",
    comments = "version: 1.6.3, compiler: javac, environment: Java 21.0.1 (Amazon.com Inc.)"
)
@Component
public class IInvestmentApplicationMapperImpl implements IInvestmentApplicationMapper {

    @Override
    public InvestmentApplication toEntity(InvestmentApplicationDto applicationDto) {
        if ( applicationDto == null ) {
            return null;
        }

        InvestmentApplication investmentApplication = new InvestmentApplication();

        investmentApplication.setId( applicationDto.id() );
        investmentApplication.setAmount( applicationDto.amount() );
        investmentApplication.setOccupation( applicationDto.occupation() );
        investmentApplication.setSeniority( applicationDto.seniority() );
        investmentApplication.setCompany( applicationDto.company() );
        investmentApplication.setMonthlyIncome( applicationDto.monthlyIncome() );
        investmentApplication.setMonthlyExpenses( applicationDto.monthlyExpenses() );
        investmentApplication.setAssets( applicationDto.assets() );
        investmentApplication.setLastSalaryReceipts( applicationDto.lastSalaryReceipts() );
        investmentApplication.setCuit( applicationDto.cuit() );
        investmentApplication.setPublicServices( applicationDto.publicServices() );
        investmentApplication.setStatus( applicationDto.status() );
        investmentApplication.setActive( applicationDto.active() );

        return investmentApplication;
    }

    @Override
    public InvestmentApplicationDto toDto(InvestmentApplication application) {
        if ( application == null ) {
            return null;
        }

        Long id = null;
        Double amount = null;
        String occupation = null;
        Integer seniority = null;
        String company = null;
        Double monthlyIncome = null;
        Double monthlyExpenses = null;
        Double assets = null;
        String lastSalaryReceipts = null;
        String cuit = null;
        String publicServices = null;
        StatusInvestment status = null;
        Boolean active = null;

        id = application.getId();
        amount = application.getAmount();
        occupation = application.getOccupation();
        seniority = application.getSeniority();
        company = application.getCompany();
        monthlyIncome = application.getMonthlyIncome();
        monthlyExpenses = application.getMonthlyExpenses();
        assets = application.getAssets();
        lastSalaryReceipts = application.getLastSalaryReceipts();
        cuit = application.getCuit();
        publicServices = application.getPublicServices();
        status = application.getStatus();
        active = application.getActive();

        InvestmentApplicationDto investmentApplicationDto = new InvestmentApplicationDto( id, amount, occupation, seniority, company, monthlyIncome, monthlyExpenses, assets, lastSalaryReceipts, cuit, publicServices, status, active );

        return investmentApplicationDto;
    }
}
