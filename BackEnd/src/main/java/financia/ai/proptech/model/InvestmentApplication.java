package financia.ai.proptech.model;


import financia.ai.proptech.emuns.StatusInvestment;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "investmentapplication")
public class InvestmentApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private Double amount;
    private String occupation;
    private Integer seniority;
    private String company;
    private Double monthlyIncome;
    private Double monthlyExpenses;
    private Double assets;
    private String lastSalaryReceipts;
    private String cuit;
    private String publicServices;

    @Enumerated(EnumType.STRING)
    private StatusInvestment status;
    private Boolean active;
}
