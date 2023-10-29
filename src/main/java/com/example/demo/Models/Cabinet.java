package com.example.demo.Models;

public class Cabinet {
    private Integer id;
    private String Description;
    private Doctor Doctor;

    public Cabinet(Integer id, String description, com.example.demo.Models.Doctor doctor) {
        this.id = id;
        Description = description;
        Doctor = doctor;
    }

    // TODO: for each new cabinet automatically set id
    public Cabinet(String description, com.example.demo.Models.Doctor doctor) {
        Description = description;
        Doctor = doctor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Doctor getDoctor() {
        return Doctor;
    }

    public void setDoctor(Doctor doctor) {
        Doctor = doctor;
    }

}
