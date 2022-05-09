package com.devsuperior.hrEurekaServer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class HrErukaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrErukaServerApplication.class, args);
	}

}
