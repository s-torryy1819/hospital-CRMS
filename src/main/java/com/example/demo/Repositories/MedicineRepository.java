package com.example.demo.Repositories;

import com.example.demo.Models.Medicine;

public interface MedicineRepository {

    Medicine addMedicine(Medicine medicine);

    Medicine deleteMedicine(Medicine medicine);

    Medicine editMedicine(Medicine medicine, String nameOfMedicine, String description, Integer availableInStock,
            Double price,
            Boolean needReceipt);
}
