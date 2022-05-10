package com.aula10.ms.hrworks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@EnableEurekaClient
//@RibbonClient(name="hr-worker")
@SpringBootApplication
public class HrWorksApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrWorksApplication.class, args);
	}

}
