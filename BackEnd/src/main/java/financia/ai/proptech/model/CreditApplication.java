package financia.ai.proptech.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;
@Data
@Entity
@Table(name ="creditApplication")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@ToString
@Builder


public class CreditApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private User buyer;
    private Double requestedAmount;
   // private Document[] document;
    private Double monthlyIncome;
    //private StatusRequest statusRequest;
    private LocalDateTime RequestDate;
    private Boolean active;



}
