package financia.ai.proptech.controller;


import financia.ai.proptech.dto.GuarantorsDto;

import financia.ai.proptech.service.GuarantorsService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guarantors")
public class GuarantorsController {

    final GuarantorsService guarantorsService;

    public GuarantorsController(GuarantorsService guarantorsService) {
        this.guarantorsService = guarantorsService;

    }
    @GetMapping("/enlistarGuarantors")
    public ResponseEntity<List<GuarantorsDto>> getGuarantors() {
        List<GuarantorsDto> guarantors = guarantorsService.getAllGurantors();
        return ResponseEntity.ok(guarantors);
    }
    @PostMapping("/guardarGuarantors")
    public ResponseEntity<Void> createGuarantors(@RequestBody GuarantorsDto guarantorsDto) {
        guarantorsService.createGuarantors(guarantorsDto);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/actualizarGuarantors")
    public ResponseEntity<Void> updateGuarantors(@RequestBody GuarantorsDto guarantorsDto) {
        guarantorsService.updateGuarantors(guarantorsDto);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/eliminarGuarantors/{id}")
    public ResponseEntity<Void>disableGuarantorsById(@PathVariable long id){
        guarantorsService.disableGuarantorsById(id);
        return ResponseEntity.ok().build();
    }


}
