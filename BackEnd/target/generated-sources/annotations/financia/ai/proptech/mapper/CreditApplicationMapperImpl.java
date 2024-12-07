package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.CreditApplicationDto;
import financia.ai.proptech.model.CreditApplication;
import financia.ai.proptech.model.User;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-06T22:39:44-0500",
    comments = "version: 1.6.3, compiler: javac, environment: Java 21.0.1 (Amazon.com Inc.)"
)
@Component
public class CreditApplicationMapperImpl implements CreditApplicationMapper {

    @Override
    public CreditApplicationDto toCreditApplicationDto(CreditApplication creditApplication) {
        if ( creditApplication == null ) {
            return null;
        }

        Long id = null;
        Double requestedAmount = null;
        Double monthlyIncome = null;

        id = creditApplication.getId();
        requestedAmount = creditApplication.getRequestedAmount();
        monthlyIncome = creditApplication.getMonthlyIncome();

        User buyer = null;
        LocalDateTime requestDate = null;

        CreditApplicationDto creditApplicationDto = new CreditApplicationDto( id, buyer, requestedAmount, monthlyIncome, requestDate );

        return creditApplicationDto;
    }

    @Override
    public CreditApplication toEntityCreditApplication(CreditApplicationDto creditApplicationDto) {
        if ( creditApplicationDto == null ) {
            return null;
        }

        CreditApplication.CreditApplicationBuilder creditApplication = CreditApplication.builder();

        creditApplication.id( creditApplicationDto.id() );
        creditApplication.requestedAmount( creditApplicationDto.requestedAmount() );
        creditApplication.monthlyIncome( creditApplicationDto.monthlyIncome() );
        creditApplication.RequestDate( creditApplicationDto.RequestDate() );

        return creditApplication.build();
    }

    @Override
    public List<CreditApplicationDto> toCreditApplicationDto(List<CreditApplication> creditApplication) {
        if ( creditApplication == null ) {
            return null;
        }

        List<CreditApplicationDto> list = new ArrayList<CreditApplicationDto>( creditApplication.size() );
        for ( CreditApplication creditApplication1 : creditApplication ) {
            list.add( toCreditApplicationDto( creditApplication1 ) );
        }

        return list;
    }

    @Override
    public List<CreditApplication> toCreditApplication(List<CreditApplicationDto> creditApplicationDto) {
        if ( creditApplicationDto == null ) {
            return null;
        }

        List<CreditApplication> list = new ArrayList<CreditApplication>( creditApplicationDto.size() );
        for ( CreditApplicationDto creditApplicationDto1 : creditApplicationDto ) {
            list.add( toEntityCreditApplication( creditApplicationDto1 ) );
        }

        return list;
    }
}
