package com.example.demo.Models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "health_procedure")
public class HealthProcedure {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer procedureId;

    private String description;
    private Integer price;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cabinetId")
    private Cabinet cabinet;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private Doctor doctor;

    public HealthProcedure() {
        // FOR SPRING | DO NOT DELETE
    }

    public HealthProcedure(String description, Cabinet cabinet, Integer price, Doctor doctor) {
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

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
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
