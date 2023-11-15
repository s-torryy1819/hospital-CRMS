package com.example.demo.Repositories;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;
import com.example.demo.Models.Patient;
import com.example.demo.Models.Visit;

public interface VisitRepository extends JpaRepository<Visit, Integer> {

    // Visit addVisitHistory(Visit visit);

    // Visit deleteVisitHistory(Visit visit);

    // Visit editVisitHistory(Visit visit, Patient patient, Date date, String
    // disease, Doctor doctor, Cabinet cabinet);
}
