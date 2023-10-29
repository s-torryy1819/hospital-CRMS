package com.example.demo.Models;

import java.util.List;

import com.example.demo.Security.Models.User;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;

@Entity
public class Patient extends User {

    private String name;
    private String surname;
    private Integer yearOfBirth;
    private String address;
    private String phone;
    private String workAddress;
    private Boolean disability;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> chronicDiseases;

    public Patient() {
        // FOR SPRING | DO NOT DELETE
    }

    public Patient(String name, String surname, Integer yearOfBirth, String address, String phone, String workAddress,
            Boolean disability, List<String> chronicDiseases) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.workAddress = workAddress;
        this.disability = disability;
        this.chronicDiseases = chronicDiseases;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Integer getYearOfBirth() {
        return yearOfBirth;
    }

    public void setYearOfBirth(Integer yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWorkAddress() {
        return workAddress;
    }

    public void setWorkAddress(String workAddress) {
        this.workAddress = workAddress;
    }

    public Boolean getDisability() {
        return disability;
    }

    public void setDisability(Boolean disability) {
        this.disability = disability;
    }

    public List<String> getChronicDiseases() {
        return chronicDiseases;
    }

    public void setChronicDiseases(List<String> chronicDiseases) {
        this.chronicDiseases = chronicDiseases;
    }

}
