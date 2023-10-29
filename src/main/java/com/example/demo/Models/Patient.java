package com.example.demo.Models;

import java.util.List;

public class Patient {
    private Integer id;
    private String name;
    private String surname;
    private Integer yearOfBirth;
    private String address;
    private String phone;
    private String workAddress;
    private Boolean disability;
    private List<String> chronicDiseases;

    // TODO: for each new Patient automatically set id
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

    public Patient(Integer id, String name, String surname, Integer yearOfBirth, String address, String phone,
            String workAddress, Boolean disability, List<String> chronicDiseases) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.workAddress = workAddress;
        this.disability = disability;
        this.chronicDiseases = chronicDiseases;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
