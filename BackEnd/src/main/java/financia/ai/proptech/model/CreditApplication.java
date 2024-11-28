package financia.ai.proptech.model;

import java.time.LocalDateTime;

import lombok.*;
//@Entity
//@Table(name ="creditApplication")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@ToString
@Builder


public class CreditApplication {

    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private User comprador;
    private Double montoSolicitado;
   // private Documento[] documento;
    private Double ingresosMensuales;
    //private EstadoSolicitud estadoSolicitud;
    private LocalDateTime fechaSolicitud;



}
