package financia.ai.proptech.service;

import financia.ai.proptech.dto.DocumentsDto;

import java.util.List;
import java.util.Optional;

public interface DocumentsService {

    Optional<DocumentsDto> create (DocumentsDto documentsDto);

    Optional<DocumentsDto> update (Long id, DocumentsDto documentsDto);

    Optional<List<DocumentsDto>> documents();

    Optional<DocumentsDto> documentsId (Long id);

    void delete (Long id);
}
