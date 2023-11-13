package com.example.demo.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.demo.Models.Doctor;

@EnableJpaRepositories
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    Optional<Doctor> findUserByUsername(String username);

}
