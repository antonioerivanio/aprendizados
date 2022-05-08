
package com.aula10.ms.hrworks.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
    
    @Autowired
    WorkerRepository repositoryWork;
    
    @GetMapping
    public ResponseEntity<List<Worker>> findAll(){
        Iterable<Worker> resultIt = repositoryWork.findAll();
                
        return ResponseEntity.ok((List)resultIt);
    }
    
    @GetMapping(value = "/{id}")
    public ResponseEntity<Worker> findById(@PathVariable Long id){
        Optional<Worker> bean = repositoryWork.findById(id);
                
        return ResponseEntity.ok(bean.get());
    }
    
}
