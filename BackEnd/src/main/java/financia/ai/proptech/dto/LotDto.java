package financia.ai.proptech.dto;

import financia.ai.proptech.emuns.LotStatus;

public record LotDto(Long id,
                     String title,
                     String description,
                     String location,
                     String size,
                     double price,
                     String address,
                     String surface,
                     String coordinates,
                     LotStatus status,
                     Boolean active) {
}
