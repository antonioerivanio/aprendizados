
package com.aula10.ms.hrworks.repositories;

import org.springframework.data.repository.CrudRepository;

import com.aula10.ms.hrworks.domains.Worker;

public interface RepositoryWork extends CrudRepository<Worker, Long>{  
    

}
