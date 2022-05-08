package com.devsuperior.rhpayroll.services.feingClients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.devsuperior.rhpayroll.entities.Worker;

@Component
@FeignClient(name="hr-worker", url="http://localhost:8081", path = "workers")
public interface WorkersFeingClient {
    
    @GetMapping(value = "/{id}")
    ResponseEntity<Worker> findById(@PathVariable Long id);

}