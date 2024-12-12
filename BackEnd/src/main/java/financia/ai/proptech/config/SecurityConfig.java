package financia.ai.proptech.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.SessionManagementConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.HeaderWriterLogoutHandler;
import org.springframework.security.web.header.writers.ClearSiteDataHeaderWriter;
import static org.springframework.security.web.header.writers.ClearSiteDataHeaderWriter.Directive.COOKIES;
import org.springframework.web.cors.CorsConfigurationSource;

import financia.ai.proptech.service.serviceimpl.CustomUserDetailsServiceImpl;

@Configuration
public class SecurityConfig {

    @Autowired
    private CorsConfigurationSource corsConfigurationSource;
    final CustomUserDetailsServiceImpl userDetailsService;

    public SecurityConfig(CustomUserDetailsServiceImpl userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(cors -> cors.configurationSource(corsConfigurationSource)) // Usa el bean de CorsConfigurationSource
                .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/css/**", "/images/**", "/js/**", "/**")
                .permitAll().anyRequest().authenticated()
                )
                .formLogin(formLogin -> formLogin.loginPage("/iniciarsesion")
                .loginProcessingUrl("/logincheck")
                .usernameParameter("email")
                .passwordParameter("password")
                .permitAll())
                .logout(logout -> logout.logoutUrl("/cerrarsesion").logoutSuccessUrl("/")
                .deleteCookies("JSESSIONID")
                .deleteCookies("our-custom-cookie")
                .addLogoutHandler(
                        new HeaderWriterLogoutHandler(
                                new ClearSiteDataHeaderWriter(
                                        COOKIES)))
                .permitAll())
                .sessionManagement((session) -> session
                .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                .invalidSessionUrl("/invalidSession") // invalida la sesion cuando no se utiliza en tiempo determinado
                .maximumSessions(1) // Numero de sesiones permitidas
                .maxSessionsPreventsLogin(false)
                .sessionRegistry(sessionRegistry()))
                .sessionManagement((session) -> session.sessionFixation(
                SessionManagementConfigurer.SessionFixationConfigurer::newSession))
                .httpBasic(AbstractHttpConfigurer::disable);

        return http.build();
    }

    @Bean
    public SessionRegistry sessionRegistry() {
        return new SessionRegistryImpl();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

        auth.userDetailsService(userDetailsService).passwordEncoder(new BCryptPasswordEncoder());
    }
}
