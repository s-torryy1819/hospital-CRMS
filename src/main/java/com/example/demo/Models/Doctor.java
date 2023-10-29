package com.example.demo.Models;

import java.sql.Date;
import java.util.List;

import com.example.demo.Exceptions.DoctorException;
import com.example.demo.Exceptions.DoctorExceptionReason;

public class Doctor {
    private Integer id;
    private String name;
    private String surname;
    private Integer yearOfBirth;
    private String address;
    private String phone;
    private String department;
    private String speciality;
    private Boolean childDoctor;
    private Integer pricePerVisit;
    private List<Date> availableTime;
    private List<Date> blockedTime;

    // TODO: for each new Doctor automatically set id
    public Doctor(String name, String surname, Integer yearOfBirth, String address, String phone, String department,
            String speciality, Boolean childDoctor, Integer pricePerVisit, List<Date> availableTime,
            List<Date> blockedTime) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.department = department;
        this.speciality = speciality;
        this.childDoctor = childDoctor;
        this.pricePerVisit = pricePerVisit;
        this.availableTime = availableTime;
        this.blockedTime = blockedTime;
    }

    public Doctor(Integer id, String name, String surname, Integer yearOfBirth, String address, String phone,
            String department, String speciality, Boolean childDoctor, Integer pricePerVisit, List<Date> availableTime,
            List<Date> blockedTime) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.address = address;
        this.phone = phone;
        this.department = department;
        this.speciality = speciality;
        this.childDoctor = childDoctor;
        this.pricePerVisit = pricePerVisit;
        this.availableTime = availableTime;
        this.blockedTime = blockedTime;
    }

    public boolean setNewAppointmentDate(Date date) throws DoctorException {
        if (!availableTime.contains(date))
            throw new DoctorException("Unfortunatelly this date is already blocked, please choose another one.",
                    DoctorExceptionReason.DATE_ALREADY_BLOCKED);

        availableTime.remove(date);
        blockedTime.add(date);
        return true;
    }

    public boolean deleteAppointmentDate(Date date) throws DoctorException {
        if (!blockedTime.contains(date))
            throw new DoctorException(
                    "This Date has never been blocked, you can not delete an Appointment with a non-existing Date. Please check information one more time.",
                    DoctorExceptionReason.BLOCKED_DATE_NOT_EXIST);

        availableTime.add(date);
        blockedTime.remove(date);
        return true;
    }

    public boolean addNewAvailableDate(Date date) throws DoctorException {
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

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
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

    public Integer getPricePerVisit() {
        return pricePerVisit;
    }

    public void setPricePerVisit(Integer pricePerVisit) {
        this.pricePerVisit = pricePerVisit;
    }

    public List<Date> getAvailableTime() {
        return availableTime;
    }

    public void setAvailableTime(List<Date> availableTime) {
        this.availableTime = availableTime;
    }

    public List<Date> getBlockedTime() {
        return blockedTime;
    }

    public void setBlockedTime(List<Date> blockedTime) {
        this.blockedTime = blockedTime;
    }

}
