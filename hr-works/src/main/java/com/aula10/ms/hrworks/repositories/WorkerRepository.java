
package com.aula10.ms.hrworks.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aula10.ms.hrworks.domains.Worker;

@Repository
public interface WorkerRepository extends JpaRepository<Worker, Long> {
}
