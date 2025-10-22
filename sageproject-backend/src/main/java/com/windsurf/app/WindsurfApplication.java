package com.windsurf.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class WindsurfApplication {
    public static void main(String[] args) {
        SpringApplication.run(WindsurfApplication.class, args);
    }
}
