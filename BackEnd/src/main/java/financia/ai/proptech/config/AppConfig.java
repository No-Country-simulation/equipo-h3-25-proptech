package financia.ai.proptech.config;


import financia.ai.proptech.mapper.ILotMapper;
import financia.ai.proptech.repository.LotRepository;
import financia.ai.proptech.repository.UserRepository;
import financia.ai.proptech.service.LotServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    private final LotRepository lotRepository;
    private final ILotMapper iLotMapper;

    public AppConfig(LotRepository lotRepository, ILotMapper iLotMapper) {
        this.lotRepository = lotRepository;
        this.iLotMapper = iLotMapper;
    }

    @Bean
    public LotServiceImpl lotServiceImpl() {
        return new LotServiceImpl(lotRepository, iLotMapper);
    }


}
