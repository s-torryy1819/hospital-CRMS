package com.example.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Integer> {

    // Medicine addMedicine(Medicine medicine);

    // Medicine deleteMedicine(Medicine medicine);

    // Medicine editMedicine(Medicine medicine, String nameOfMedicine, String
    // description, Integer availableInStock,
    // Double price,
    // Boolean needReceipt);
}
