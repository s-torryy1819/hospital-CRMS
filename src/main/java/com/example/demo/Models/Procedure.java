package com.example.demo.Models;

public class Procedure {
    private Integer id;
    private String description;
    private Double price;
    private Integer cabinetNumber;
    private Doctor doctor;

    public Procedure(Integer id, String description, Double price, Integer cabinetNumber, Doctor doctor) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.cabinetNumber = cabinetNumber;
        this.doctor = doctor;
    }

    // TODO: for each new Procedure automatically set id
    public Procedure(String description, Double price, Integer cabinetNumber, Doctor doctor) {
        this.description = description;
        this.price = price;
        this.cabinetNumber = cabinetNumber;
        this.doctor = doctor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getCabinetNumber() {
        return cabinetNumber;
    }

    public void setCabinetNumber(Integer cabinetNumber) {
        this.cabinetNumber = cabinetNumber;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

}
