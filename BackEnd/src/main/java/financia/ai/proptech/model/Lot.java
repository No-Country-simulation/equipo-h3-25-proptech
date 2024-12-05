package financia.ai.proptech.model;

import financia.ai.proptech.emuns.LotStatus;
import jakarta.persistence.*;
import lombok.Data;



@Data
@Entity
@Table(name = "lot")
public class Lot {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String location;
    private String size;
    private double price;
    private String address;
    private String surface;
    private String coordinates;
   // private byte [] pictures;
   // private String map;//si aplica
    @Enumerated(EnumType.STRING)
    private LotStatus status;
    private Boolean active;





}
