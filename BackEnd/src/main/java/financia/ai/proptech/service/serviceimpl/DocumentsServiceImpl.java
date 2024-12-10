package financia.ai.proptech.service.serviceimpl;

import financia.ai.proptech.dto.DocumentsDto;
import financia.ai.proptech.exception.EntityNoExistsException;
import financia.ai.proptech.mapper.DocumentsMapper;
import financia.ai.proptech.model.Documents;
import financia.ai.proptech.repository.DocumentsRepository;
import financia.ai.proptech.service.DocumentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentsServiceImpl implements DocumentsService {

    @Autowired
    private DocumentsRepository documentsRepository;

    @Autowired
    private DocumentsMapper documentsMapper;

    @Override
    public Optional<DocumentsDto> create(DocumentsDto documentsDto) {

        String pathFile = documentsDto.pathFile();

        if (pathFile == null || (!pathFile.endsWith(".pdf") && !pathFile.endsWith(".jpg"))){
            throw new IllegalArgumentException("El archivo debe ser un PDF o un imagen JPG");
        }

        return Optional.of(documentsMapper.toDocumentsDto(documentsRepository
                .save(documentsMapper.toDocuments(documentsDto))));
    }

    @Override
    public Optional<DocumentsDto> update(Long id, DocumentsDto documentsDto) {
        return Optional.ofNullable(documentsRepository.findById(id).map(docsToModify -> {
            if (documentsDto.pathFile() != null){
                docsToModify.setPathFile(documentsDto.pathFile());
            }

            /*if (documentsDto.investmentApplication() != null){
                docsToModify.setInvestmentApplication(documentsDto.investmentApplication());
            }*/

            Documents docModified = documentsRepository.save(docsToModify);
            return documentsMapper.toDocumentsDto(docModified);
        }).orElseThrow(() -> new EntityNoExistsException("El documento/s seleccionado no existe")));
    }

    @Override
    public Optional<List<DocumentsDto>> documents() {
        return Optional.of(documentsMapper.toDocumentsDto(documentsRepository.findAll()));
    }

    @Override
    public Optional<DocumentsDto> documentsId(Long id) {
        return documentsRepository.findById(id).map(documentsMapper::toDocumentsDto);
    }

    @Override
    public void delete(Long id) {
        if (!documentsRepository.existsById(id)){
            throw new EntityNoExistsException("El documento cone el ID " + id + " no existe");
        }
        documentsRepository.deleteById(id);
    }
}
