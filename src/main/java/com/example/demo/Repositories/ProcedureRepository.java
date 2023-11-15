package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;
import com.example.demo.Models.HealthProcedure;

public interface ProcedureRepository extends JpaRepository<HealthProcedure, Integer> {

    // HealthProcedure addProcedure(HealthProcedure procedure);

    // HealthProcedure deleteProcedure(HealthProcedure procedure);

    // HealthProcedure editProcedure(HealthProcedure procedure, String description,
    // Double price, Cabinet cabinet,
    // Doctor doctor);

}
