package financia.ai.proptech.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonFormat;

import financia.ai.proptech.emuns.DepositMethod;
import financia.ai.proptech.emuns.Gender;
import financia.ai.proptech.emuns.Roles;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

   private String profileImage;

   private String country;

   private String postalCode;

   private String phoneNumber;

   @Enumerated(EnumType.STRING)
   private Gender gender;

   private String citizenship;

   private String address;

   private Integer numbering;

   @Enumerated(EnumType.STRING)
   private DepositMethod depositMethod;

   
   private String name;

   private String lastName;

   private Integer dni;

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
   private LocalDateTime creationDate;

   @CreationTimestamp
   @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
   private LocalDate dateOfBirth;
}
