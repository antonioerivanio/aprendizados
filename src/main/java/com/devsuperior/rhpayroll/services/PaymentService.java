package com.devsuperior.rhpayroll.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.devsuperior.rhpayroll.entities.Payment;
import com.devsuperior.rhpayroll.entities.Worker;

@Service
public class PaymentService {
    
    @Value("${hr-worker-host-url}")
    private String workerHostUrl;
    
    @Autowired
    private RestTemplate restTemplate;
    
    public Payment getPayment(long workerId, int days) {
        Map<String, String> uri = new HashMap<>();
        uri.put("id", "" + workerId);
        
        Worker worker = restTemplate.getForObject(workerHostUrl+ "/workers/{id}", Worker.class, uri);
        System.out.println(worker);
        return new Payment(worker.getName(), worker.getDailyIncome(), days);
    }
}
