package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.GuarantorsDto;
import financia.ai.proptech.model.Guarantors;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-06T15:37:13-0300",
    comments = "version: 1.6.3, compiler: javac, environment: Java 22.0.2 (Oracle Corporation)"
)
@Component
public class GuarantorsMapperImpl implements GuarantorsMapper {

    @Override
    public GuarantorsDto toGuarantorsDto(Guarantors guarantors) {
        if ( guarantors == null ) {
            return null;
        }

        Long id = null;
        String name = null;
        String lastname = null;
        Integer dni = null;
        String email = null;

        id = guarantors.getId();
        name = guarantors.getName();
        lastname = guarantors.getLastname();
        dni = guarantors.getDni();
        email = guarantors.getEmail();

        GuarantorsDto guarantorsDto = new GuarantorsDto( id, name, lastname, dni, email );

        return guarantorsDto;
    }

    @Override
    public Guarantors toEntityGuarantors(GuarantorsDto guarantorsDto) {
        if ( guarantorsDto == null ) {
            return null;
        }

        Guarantors.GuarantorsBuilder guarantors = Guarantors.builder();

        guarantors.id( guarantorsDto.id() );
        guarantors.name( guarantorsDto.name() );
        guarantors.lastname( guarantorsDto.lastname() );
        guarantors.dni( guarantorsDto.dni() );
        guarantors.email( guarantorsDto.email() );

        return guarantors.build();
    }

    @Override
    public List<GuarantorsDto> toGuarantorsDto(List<Guarantors> guarantors) {
        if ( guarantors == null ) {
            return null;
        }

        List<GuarantorsDto> list = new ArrayList<GuarantorsDto>( guarantors.size() );
        for ( Guarantors guarantors1 : guarantors ) {
            list.add( toGuarantorsDto( guarantors1 ) );
        }

        return list;
    }

    @Override
    public List<Guarantors> toGuarantors(List<GuarantorsDto> guarantorsDto) {
        if ( guarantorsDto == null ) {
            return null;
        }

        List<Guarantors> list = new ArrayList<Guarantors>( guarantorsDto.size() );
        for ( GuarantorsDto guarantorsDto1 : guarantorsDto ) {
            list.add( toEntityGuarantors( guarantorsDto1 ) );
        }

        return list;
    }
}
