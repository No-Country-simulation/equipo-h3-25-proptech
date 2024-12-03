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
    date = "2024-12-03T11:34:06-0300",
    comments = "version: 1.6.3, compiler: javac, environment: Java 22.0.2 (Oracle Corporation)"
)
@Component
public class CreditApplicationMapperImpl implements CreditApplicationMapper {

    @Override
    public CreditApplicationDto toCreditApplicationDto(CreditApplication creditApplication) {
        if ( creditApplication == null ) {
            return null;
        }

        Long id = null;
        User buyer = null;
        Double requestedAmount = null;
        Double monthlyIncome = null;
        LocalDateTime requestDate = null;

        CreditApplicationDto creditApplicationDto = new CreditApplicationDto( id, buyer, requestedAmount, monthlyIncome, requestDate );

        return creditApplicationDto;
    }

    @Override
    public CreditApplication toEntityCreditApplication(CreditApplicationDto creditApplicationDto) {
        if ( creditApplicationDto == null ) {
            return null;
        }

        CreditApplication creditApplication = new CreditApplication();

        return creditApplication;
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
