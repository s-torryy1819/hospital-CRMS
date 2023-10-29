package com.example.demo.Exceptions;

public enum MedicineExceptionReason {
    QUANTITY_NOT_ACCEPTABLE("Product quantity should be greater than 0");

    private final String mesage;

    MedicineExceptionReason(String mesage) {
        this.mesage = mesage;
    }

    public String getMesage() {
        return mesage;
    }
}
