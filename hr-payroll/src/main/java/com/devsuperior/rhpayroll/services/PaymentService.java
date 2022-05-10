package com.devsuperior.rhpayroll.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.rhpayroll.entities.Payment;
import com.devsuperior.rhpayroll.entities.Worker;
import com.devsuperior.rhpayroll.services.feingClients.WorkersFeingClient;

@Service
public class PaymentService {
    
    //@Value("${hr-worker-host-url}")
    //private String workerHostUrl;
    
   // @Autowired
    //private RestTemplate restTemplate;
    
    @Autowired
    private WorkersFeingClient  workersFeingClient;
    
    public Payment getPayment(long workerId, int days) {
        /*
         * Map<String, String> uri = new HashMap<>(); uri.put("id", "" + workerId);
         * 
         * Worker worker = restTemplate.getForObject(workerHostUrl+ "/workers/{id}", Worker.class, uri);
         */
        Worker worker = workersFeingClient.findById(workerId).getBody();
        System.out.println(worker);
        return new Payment(worker.getName(), worker.getDailyIncome(), days);
    }
}
