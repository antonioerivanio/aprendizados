
package com.aula10.ms.hrworks.resources;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aula10.ms.hrworks.domains.Worker;
import com.aula10.ms.hrworks.repositories.WorkerRepository;


@RestController
@RequestMapping(value = "/workers")
public class ResouceController {  
    
    private Logger logger = LoggerFactory.getLogger(ResouceController.class);
    
    @Autowired
    private Environment environment;
    
    @Autowired
    WorkerRepository repositoryWork;
    
    @GetMapping
    public ResponseEntity<List<Worker>> findAll(){
        
        Iterable<Worker> resultIt = repositoryWork.findAll();
                
        return ResponseEntity.ok((List)resultIt);
    }
    
    @GetMapping(value = "/{id}")
    public ResponseEntity<Worker> findById(@PathVariable Long id){
        logger.info("PORT: " +  environment.getProperty("local.server.port"));
        
        Optional<Worker> bean = repositoryWork.findById(id);
                
        return ResponseEntity.ok(bean.get());
    }
    
}
