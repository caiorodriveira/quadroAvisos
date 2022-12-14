package com.backend.avisos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class CrudBackendAvisosApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudBackendAvisosApplication.class, args);
	}@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override	
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:4200", "http://10.0.0.15:4200").allowedMethods("*").allowedHeaders("*");
			}
		};
	}

}
