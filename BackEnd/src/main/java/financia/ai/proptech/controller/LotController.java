package financia.ai.proptech.controller;

import financia.ai.proptech.dto.LotDto;
import financia.ai.proptech.service.serviceimpl.ILotService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lot")
public class LotController {

    final ILotService lotService;

    public LotController(ILotService lotService) {
        this.lotService = lotService;
    }
    @GetMapping("/enlistar")
    public ResponseEntity<List<LotDto>> getAllLots() {
        List<LotDto> lots = lotService.getAllLots();
        return ResponseEntity.ok(lots);
    }
    @PostMapping("/guardarlote")
    public ResponseEntity<Void> createLot(@Valid @RequestBody LotDto lotDto) {
       lotService.createLot(lotDto);
       return ResponseEntity.ok().build();
    }

    @PutMapping("/actualizar")
    public ResponseEntity<Void> updateLot(@Valid@RequestBody LotDto lotDto) {
        lotService.updateLot(lotDto);
        return ResponseEntity.ok().build();
    }
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Void>disableLotById(@PathVariable long id){
        lotService.disableLotById(id);
        return ResponseEntity.ok().build();
    }
}
