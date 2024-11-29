package financia.ai.proptech.controller;

import financia.ai.proptech.dto.CreditAplicationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/creditApp")

public class CreditApplicationController {
    @Autowired
    final ICreditApplicationService creditApplicationService;
    public CreditApplicationController(ICreditApplicationService creditApplicationService) {
        this.creditApplicationService = creditApplicationService;


    }
    @GetMapping("/enlistarCreditApp")
    public ResponseEntity<List<CreditAplicationDto>> getAllCreditApp() {
        List<CreditAplicationDto> creditAplication = creditApplicationService.getAllcreditApplication();
        return ResponseEntity.ok(creditApplication);
    }
    @PostMapping("/guardarCreditApp")
    public ResponseEntity<Void> createLot(@RequestBody CreditAplicationDto creditApplicationDto) {
        creditApplicationService.createCreditApplication(creditApplicationDto);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/actualizarCreditApp")
    public ResponseEntity<Void> updateCreditApplication(@RequestBody CreditApplicationDto creditApplicationDto) {
        creditApplicationService.updateCreditApplication(creditApplicationDto);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/eliminarCredittApp/{id}")
    public ResponseEntity<Void>disableCreditAppById(@PathVariable long id){
        creditApplicationService.disableCreditAppById(id);
        return ResponseEntity.ok().build();
    }

}
