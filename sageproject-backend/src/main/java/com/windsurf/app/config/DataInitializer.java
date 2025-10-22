package com.windsurf.app.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.windsurf.app.model.ERole;
import com.windsurf.app.model.Role;
import com.windsurf.app.repository.RoleRepository;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner seedRoles(RoleRepository roleRepository) {
        return args -> {
            roleRepository.findByName(ERole.ROLE_USER)
                    .or(() -> {
                        roleRepository.save(new Role(ERole.ROLE_USER));
                        return roleRepository.findByName(ERole.ROLE_USER);
                    });
            roleRepository.findByName(ERole.ROLE_ADMIN)
                    .or(() -> {
                        roleRepository.save(new Role(ERole.ROLE_ADMIN));
                        return roleRepository.findByName(ERole.ROLE_ADMIN);
                    });
        };
    }
}
