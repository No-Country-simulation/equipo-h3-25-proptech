package financia.ai.proptech.controller;

import financia.ai.proptech.dto.DocumentsDto;
import financia.ai.proptech.exception.EntityNoExistsException;
import financia.ai.proptech.service.DocumentsService;
import financia.ai.proptech.validation.Create;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/docs")
public class DocumentsController {

    @Autowired
    private DocumentsService docsService;

    @PostMapping
    public ResponseEntity<DocumentsDto> create(@RequestBody @Validated(Create.class) DocumentsDto docsDto){
        return docsService.create(docsDto)
                .map(docs -> new ResponseEntity<>(docs, HttpStatus.OK))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<DocumentsDto>> getDocs(){
        return docsService.documents()
                .map(docs -> new ResponseEntity<>(docs, HttpStatus.OK))
                .orElseGet(() -> ResponseEntity.noContent().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DocumentsDto> getDoc(@PathVariable Long id){
        return  docsService.documentsId(id)
                .map(doc -> new ResponseEntity<>(doc, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DocumentsDto> updateDocs(@PathVariable Long id, @RequestBody DocumentsDto docsDto){
        return docsService.update(id, docsDto)
                .map(doc -> new ResponseEntity<>(doc, HttpStatus.ACCEPTED))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDoc(@PathVariable Long id){
        try {
            docsService.delete(id);
            return ResponseEntity.ok("El documento fue eliminado correctamente");
        }catch(EntityNoExistsException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("El documento no existe");
        }
    }

}
