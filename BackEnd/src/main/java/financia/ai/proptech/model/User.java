package financia.ai.proptech.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import financia.ai.proptech.emuns.Roles;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Table(name = "userEntity")
public class User {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private String name;

   private String lastName;

   private Integer DNI;

   private String email;

   private String password;

   private Boolean active = true;

   @Enumerated(EnumType.STRING)
   private Roles roles;

   //@OneToMany
   //private List<Documents> documents;

   //hace que se genere auto, y le da un formato día/mes/año.
   @CreationTimestamp
   @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm:ss")
   private LocalDateTime CreationDate;
}
