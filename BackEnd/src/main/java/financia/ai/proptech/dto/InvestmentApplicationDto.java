package financia.ai.proptech.dto;

import financia.ai.proptech.emuns.StatusInvestment;
import jakarta.validation.constraints.*;

public record InvestmentApplicationDto(

        Long id,

        @NotNull(message = "El monto es obligatorio.")
        @Positive(message = "El monto debe ser un valor positivo.")
        Double amount,

        @NotNull(message = "La ocupación es obligatoria.")
        @Size(max = 100, message = "La ocupación no puede exceder los 100 caracteres.")
        String occupation,

        @NotNull(message = "La antigüedad es obligatoria.")
        @Min(value = 0, message = "La antigüedad no puede ser negativa.")
        @Max(value = 100, message = "La antigüedad no puede ser mayor a 100 años.")
        Integer seniority,

        @NotNull(message = "La empresa es obligatoria.")
        @Size(max = 100, message = "El nombre de la empresa no puede exceder los 100 caracteres.")
        String company,

        @NotNull(message = "El ingreso mensual es obligatorio.")
        @Positive(message = "El ingreso mensual debe ser un valor positivo.")
        Double monthlyIncome,

        @NotNull(message = "Los gastos mensuales son obligatorios.")
        @Positive(message = "Los gastos mensuales deben ser un valor positivo.")
        Double monthlyExpenses,

        @NotNull(message = "Los activos son obligatorios.")
        @Positive(message = "Los activos deben ser un valor positivo.")
        Double assets,

        @NotNull(message = "Los recibos de salario son obligatorios.")
        @Size(max = 255, message = "La URL de los recibos de salario no puede exceder los 255 caracteres.")
        String lastSalaryReceipts,

        @NotNull(message = "El CUIT es obligatorio.")
        @Pattern(regexp = "\\d{11}", message = "El CUIT debe tener exactamente 11 dígitos.")
        String cuit,

       @NotNull(message = "El servicio público es obligatorio.")
        @Size(max = 255, message = "La URL del servicio público no puede exceder los 255 caracteres.")
        String publicServices,

        StatusInvestment status,


        Boolean active
) {
}