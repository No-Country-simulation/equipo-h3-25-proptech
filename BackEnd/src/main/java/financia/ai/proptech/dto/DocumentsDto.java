package financia.ai.proptech.dto;

import financia.ai.proptech.model.InvestmentApplication;

public record DocumentsDto(Long id, String pathFile, InvestmentApplication investmentApplication) {
}
