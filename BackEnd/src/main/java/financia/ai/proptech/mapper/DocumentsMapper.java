package financia.ai.proptech.mapper;

import financia.ai.proptech.dto.DocumentsDto;
import financia.ai.proptech.model.Documents;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DocumentsMapper {

    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "pathFile", target = "pathFile"),
            @Mapping(source = "investmentApplication", target = "investmentApplication")
    })
    Documents toDocuments (DocumentsDto documentsDto);

    List<DocumentsDto> toDocumentsDto(List<Documents> documents);

    @InheritInverseConfiguration
    DocumentsDto toDocumentsDto(Documents documents);
}
