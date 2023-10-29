package com.example.demo.Exceptions;

public enum DoctorExceptionReason {
    DATE_ALREADY_BLOCKED("This Date has already been blocked"),
    BLOCKED_DATE_NOT_EXIST("This Date has never been blocked"),
    DATE_IS_ALREADY_AVAILABLE("This date is already in a list of available ones");

    private final String mesage;

    DoctorExceptionReason(String mesage) {
        this.mesage = mesage;
    }

    public String getMesage() {
        return mesage;
    }

}
