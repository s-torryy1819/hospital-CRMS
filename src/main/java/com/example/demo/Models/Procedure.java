package com.example.demo.Models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Procedure {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer procedureId;

    private String description;
    private Double price;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cabinet_id", insertable = false, updatable = false)
    private Cabinet cabinet;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Doctor doctor;

    public Procedure() {
        // FOR SPRING | DO NOT DELETE
    }

    public Procedure(String description, Double price, Cabinet cabinet, Doctor doctor) {
        this.description = description;
        this.price = price;
        this.cabinet = cabinet;
        this.doctor = doctor;
    }

    public Integer getProcedureId() {
        return procedureId;
    }

    public void setProcedureId(Integer id) {
        this.procedureId = id;
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

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Cabinet getCabinet() {
        return cabinet;
    }

    public void setCabinet(Cabinet cabinet) {
        this.cabinet = cabinet;
    }

}
