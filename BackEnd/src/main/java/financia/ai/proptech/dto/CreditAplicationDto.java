package financia.ai.proptech.dto;

import financia.ai.proptech.model.User;

import java.time.LocalDateTime;

public record CreditAplicationDto(Long id,
    User buyer,
    Double requestedAmount,
    // Document[] document,
    Double monthlyIncome,
    //StatusRequest statusRequest,
    LocalDateTime RequestDate)
{


}
