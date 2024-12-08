package financia.ai.proptech.controller;

import financia.ai.proptech.dto.InvestmentApplicationDto;


import financia.ai.proptech.service.serviceimpl.InvestmentApplicationServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/inversion")
public class InvestmentApplicationController {

    private final InvestmentApplicationServiceImpl investmentApplicationService;

    public InvestmentApplicationController(InvestmentApplicationServiceImpl investmentApplicationService) {
        this.investmentApplicationService = investmentApplicationService;
    }
    @GetMapping("/enlistar")
    public ResponseEntity<List<InvestmentApplicationDto>> getAllInvestmentApplications() {
        List<InvestmentApplicationDto> investmentApplicationDtos = investmentApplicationService.getAllInvestmentApplications();
        return ResponseEntity.ok(investmentApplicationDtos);
    }

    @PostMapping("/registrar")
    public ResponseEntity<String> createInvestmentApplication(@RequestBody @Valid InvestmentApplicationDto investmentApplicationDto) {
        investmentApplicationService.createInvestmentApplication(investmentApplicationDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("LA Solicitud de inversion  se creado exitosamente.");
    }
    @PutMapping("/actualizar")
    public ResponseEntity<String> updateInvestmentApplication(@Valid @RequestBody InvestmentApplicationDto updateDto) {
        investmentApplicationService.updateInvestmentApplication(updateDto);
        return ResponseEntity.ok("La solictud de inversion  se ha actualizadp exitosamente.");
    }
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> deleteInvestmentApplication(@PathVariable Long id) {
        investmentApplicationService.deleteInvestmentApplication(id);
        return ResponseEntity.ok("Solicitud de inversión eliminada exitosamente.");
    }
    @DeleteMapping("/desactivar/{id}")
    public ResponseEntity<String>disableLotById(@PathVariable long id){
        investmentApplicationService.disableInvestmentApplicationById(id);
        return ResponseEntity.ok("El resgitro se ha desactivado exitosamente.");
    }
}
