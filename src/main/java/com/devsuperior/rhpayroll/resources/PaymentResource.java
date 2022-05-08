package com.devsuperior.rhpayroll.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.rhpayroll.entities.Payment;
import com.devsuperior.rhpayroll.services.PaymentService;

@RestController
@RequestMapping("/payments")
public class PaymentResource {
    
    @Autowired
    private PaymentService paymentService;
    
    @GetMapping("/{workerId}/days/{days}")
    public ResponseEntity<Payment> getPayment(@PathVariable long workerId, @PathVariable int days) {
     Payment payment = paymentService.getPayment(workerId, days);
     return ResponseEntity.ok(payment);
    }
}
