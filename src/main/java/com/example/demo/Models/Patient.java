package com.example.demo.Models;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.Security.Models.User;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

@Entity
public class Patient extends User {

    private String name;
    private String surname;
    private String yearOfBirth;
    private String address;
    private String phone;
    private String workAddress;
    private Boolean disability;
    private String chronicDiseases;

    @Column(name = "visitHistoryIdList", nullable = false)
    @ElementCollection(fetch = FetchType.EAGER)
    private List<Integer> visitHistoryIdList;

    @OneToMany(mappedBy = "patient")
    List<DoctorAppointment> appointments = new ArrayList<>();

    public Patient() {
        // FOR SPRING | DO NOT DELETE
    }

    public Patient(String name, String surname, String yearOfBirth, String address, String phone, String workAddress,
            Boolean disability, String chronicDiseases, List<Integer> visitHistoryIdList) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.workAddress = workAddress;
        this.disability = disability;
        this.chronicDiseases = chronicDiseases;
        this.visitHistoryIdList = visitHistoryIdList;
    }

    public Patient(String name, String surname, String yearOfBirth, String address, String phone, String workAddress,
            Boolean disability, String chronicDiseases) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.workAddress = workAddress;
        this.disability = disability;
        this.chronicDiseases = chronicDiseases;
    }

    public void setNewData(String name, String surname, String yearOfBirth, String address, String phone,
            String workAddress,
            Boolean disability, String chronicDiseases) {
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

    public String getYearOfBirth() {
        return yearOfBirth;
    }

    public void setYearOfBirth(String yearOfBirth) {
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

    public String getChronicDiseases() {
        return chronicDiseases;
    }

    public void setChronicDiseases(String chronicDiseases) {
        this.chronicDiseases = chronicDiseases;
    }

    public List<Integer> getVisitHistoryIdList() {
        return visitHistoryIdList;
    }

    public void setVisitHistoryIdList(List<Integer> visitHistoryIdList) {
        this.visitHistoryIdList = visitHistoryIdList;
    }

}
