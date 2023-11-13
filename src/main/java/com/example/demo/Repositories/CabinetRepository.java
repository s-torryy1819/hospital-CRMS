package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Models.Cabinet;

public interface CabinetRepository extends JpaRepository<Cabinet, Integer> {

}
