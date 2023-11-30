package com.example.demo.Models;

import java.util.ArrayList;
import java.util.Collections;
import java.time.LocalDate;
import java.util.List;

import com.example.demo.Exceptions.DoctorException;
import com.example.demo.Exceptions.DoctorExceptionReason;
import com.example.demo.Security.Models.User;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

@Entity
public class Doctor extends User {

    private String name;
    private String surname;
    private String yearOfBirth;
    private String address;
    private String phone;
    private String speciality;
    private Boolean childDoctor;
    private String pricePerVisit;

    @OneToMany(mappedBy = "Doctor")
    List<Cabinet> cabinets = new ArrayList<>();
    @OneToMany(mappedBy = "doctor")
    List<DoctorAppointment> appointments = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<LocalDate> availableTime;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<LocalDate> blockedTime;

    public Doctor() {
        // FOR SPRING | DO NOT DELETE
    }

    public Doctor(String name, String surname, String yearOfBirth, String address, String phone,
            String speciality, Boolean childDoctor, String pricePerVisit, List<LocalDate> availableTime,
            List<LocalDate> blockedTime) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.speciality = speciality;
        this.childDoctor = childDoctor;
        this.pricePerVisit = pricePerVisit;
        this.availableTime = availableTime;
        this.blockedTime = blockedTime;
    }

    public Doctor(String name, String surname, String yearOfBirth, String address, String phone,
            String speciality, Boolean childDoctor, String pricePerVisit) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.speciality = speciality;
        this.childDoctor = childDoctor;
        this.pricePerVisit = pricePerVisit;
        this.availableTime = getAvailableTimeForNewDoc();
        this.blockedTime = Collections.EMPTY_LIST;
    }

    public List<LocalDate> getAvailableTimeForNewDoc() {
        List<LocalDate> list = new ArrayList<>();
        for (int i = 1; i < 91; i++) {
            list.add(LocalDate.now().plusDays(i));
        }
        return list;
    }

    public boolean setNewAppointmentDate(LocalDate date) throws DoctorException {
        if (!availableTime.contains(date))
            throw new DoctorException("Unfortunatelly this date is already blocked, please choose another one.",
                    DoctorExceptionReason.DATE_ALREADY_BLOCKED);

        availableTime.remove(date);
        blockedTime.add(date);
        return true;
    }

    public boolean deleteAppointmentDate(LocalDate date) throws DoctorException {
        if (!blockedTime.contains(date))
            throw new DoctorException(
                    "This Date has never been blocked, you can not delete an Appointment with a non-existing Date. Please check information one more time.",
                    DoctorExceptionReason.BLOCKED_DATE_NOT_EXIST);

        availableTime.add(date);
        blockedTime.remove(date);
        return true;
    }

    public boolean addNewAvailableDate(LocalDate date) throws DoctorException {
        if (availableTime.contains(date))
            throw new DoctorException("This Date has already been added to Available Time",
                    DoctorExceptionReason.DATE_IS_ALREADY_AVAILABLE);
        else if (blockedTime.contains(date))
            throw new DoctorException(
                    "This Date has already been blocked, you can not add it to the List of available dates",
                    DoctorExceptionReason.DATE_ALREADY_BLOCKED);

        availableTime.add(date);
        return true;
    }

    public void setNewData(String name, String surname, String yearOfBirth, String address, String phone,
            String speciality, Boolean childDoctor, String pricePerVisit) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.speciality = speciality;
        this.childDoctor = childDoctor;
        this.pricePerVisit = pricePerVisit;
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

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public Boolean getChildDoctor() {
        return childDoctor;
    }

    public void setChildDoctor(Boolean childDoctor) {
        this.childDoctor = childDoctor;
    }

    public String getPricePerVisit() {
        return pricePerVisit;
    }

    public void setPricePerVisit(String pricePerVisit) {
        this.pricePerVisit = pricePerVisit;
    }

    public List<LocalDate> getAvailableTime() {
        return availableTime;
    }

    public void setAvailableTime(List<LocalDate> availableTime) {
        this.availableTime = availableTime;
    }

    public List<LocalDate> getBlockedTime() {
        return blockedTime;
    }

    public void setBlockedTime(List<LocalDate> blockedTime) {
        this.blockedTime = blockedTime;
    }

}
