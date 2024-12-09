package financia.ai.proptech.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name ="guarantors")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@ToString
@Builder
public class Guarantors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    private Integer dni;
    private String email;
    private Boolean active;

    // private Document[] document;


}
