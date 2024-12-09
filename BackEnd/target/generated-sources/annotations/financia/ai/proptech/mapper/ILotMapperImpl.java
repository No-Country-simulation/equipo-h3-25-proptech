package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.LotDto;
import financia.ai.proptech.emuns.LotStatus;
import financia.ai.proptech.model.Lot;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-04T23:32:39-0500",
    comments = "version: 1.6.3, compiler: javac, environment: Java 21.0.1 (Amazon.com Inc.)"
)
@Component
public class ILotMapperImpl implements ILotMapper {

    @Override
    public LotDto toLotDto(Lot lot) {
        if ( lot == null ) {
            return null;
        }

        Long id = null;
        String title = null;
        String description = null;
        String location = null;
        String size = null;
        double price = 0.0d;
        String address = null;
        String surface = null;
        String coordinates = null;
        LotStatus status = null;
        Boolean active = null;

        id = lot.getId();
        title = lot.getTitle();
        description = lot.getDescription();
        location = lot.getLocation();
        size = lot.getSize();
        price = lot.getPrice();
        address = lot.getAddress();
        surface = lot.getSurface();
        coordinates = lot.getCoordinates();
        status = lot.getStatus();
        active = lot.getActive();

        LotDto lotDto = new LotDto( id, title, description, location, size, price, address, surface, coordinates, status, active );

        return lotDto;
    }

    @Override
    public Lot toEntityLot(LotDto lotDto) {
        if ( lotDto == null ) {
            return null;
        }

        Lot lot = new Lot();

        lot.setId( lotDto.id() );
        lot.setTitle( lotDto.title() );
        lot.setDescription( lotDto.description() );
        lot.setLocation( lotDto.location() );
        lot.setSize( lotDto.size() );
        lot.setPrice( lotDto.price() );
        lot.setAddress( lotDto.address() );
        lot.setSurface( lotDto.surface() );
        lot.setCoordinates( lotDto.coordinates() );
        lot.setStatus( lotDto.status() );
        lot.setActive( lotDto.active() );

        return lot;
    }

    @Override
    public List<LotDto> toLotDto(List<Lot> lots) {
        if ( lots == null ) {
            return null;
        }

        List<LotDto> list = new ArrayList<LotDto>( lots.size() );
        for ( Lot lot : lots ) {
            list.add( toLotDto( lot ) );
        }

        return list;
    }

    @Override
    public List<Lot> toLots(List<LotDto> lotDtos) {
        if ( lotDtos == null ) {
            return null;
        }

        List<Lot> list = new ArrayList<Lot>( lotDtos.size() );
        for ( LotDto lotDto : lotDtos ) {
            list.add( toEntityLot( lotDto ) );
        }

        return list;
    }
}
