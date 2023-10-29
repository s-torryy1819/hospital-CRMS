package com.example.demo.Models;

import com.example.demo.Exceptions.MedicineException;
import com.example.demo.Exceptions.MedicineExceptionReason;

public class Medicine {
    private Integer medicineId;
    private String nameOfMedicine;
    private String description;
    private Integer availableInStock;
    private Double price;
    private Boolean needReceipt;

    // TODO: for each new Medicine automatically set id
    public Medicine(String nameOfMedicine, String description, Integer availableInStock, Double price,
            Boolean needReceipt) {
        this.nameOfMedicine = nameOfMedicine;
        this.description = description;
        this.availableInStock = availableInStock;
        this.price = price;
        this.needReceipt = needReceipt;
    }

    public Medicine(Integer medicineId, String nameOfMedicine, String description, Integer availableInStock,
            Double price, Boolean needReceipt) {
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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getNeedReceipt() {
        return needReceipt;
    }

    public void setNeedReceipt(Boolean needReceipt) {
        this.needReceipt = needReceipt;
    }

}
