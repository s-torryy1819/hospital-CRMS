package com.example.demo.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

    Optional<Patient> findUserByUsername(String username);

}
