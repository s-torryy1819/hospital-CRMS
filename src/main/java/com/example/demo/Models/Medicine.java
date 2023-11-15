package com.example.demo.Models;

import com.example.demo.Exceptions.MedicineException;
import com.example.demo.Exceptions.MedicineExceptionReason;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "medicine")
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer medicineId;

    private String nameOfMedicine;
    private String description;
    private Integer availableInStock;
    private Integer price;
    private Boolean needReceipt;

    public Medicine() {
        // FOR SPRING | DO NOT DELETE
    }

    public Medicine(String nameOfMedicine, String description, Integer availableInStock, Integer price,
            Boolean needReceipt) {
        this.nameOfMedicine = nameOfMedicine;
        this.description = description;
        this.availableInStock = availableInStock;
        this.price = price;
        this.needReceipt = needReceipt;
    }

    public Medicine(Integer medicineId, String nameOfMedicine, String description, Integer availableInStock,
            Integer price, Boolean needReceipt) {
        this.medicineId = medicineId;
        this.nameOfMedicine = nameOfMedicine;
        this.description = description;
        this.availableInStock = availableInStock;
        this.price = price;
        this.needReceipt = needReceipt;
    }

    public Boolean addToStock(Integer quantityToAdd) throws MedicineException {
        if (quantityToAdd < 0) {
            throw new MedicineException("Quantity of medicine should be greater than 0. Please check your input data.",
                    MedicineExceptionReason.QUANTITY_NOT_ACCEPTABLE);
        }
        availableInStock += quantityToAdd;
        return true;
    }

    public Integer getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(Integer medicineId) {
        this.medicineId = medicineId;
    }

    public String getNameOfMedicine() {
        return nameOfMedicine;
    }

    public void setNameOfMedicine(String nameOfMedicine) {
        this.nameOfMedicine = nameOfMedicine;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getAvailableInStock() {
        return availableInStock;
    }

    public void setAvailableInStock(Integer availableInStock) {
        this.availableInStock = availableInStock;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Boolean getNeedReceipt() {
        return needReceipt;
    }

    public void setNeedReceipt(Boolean needReceipt) {
        this.needReceipt = needReceipt;
    }

}
