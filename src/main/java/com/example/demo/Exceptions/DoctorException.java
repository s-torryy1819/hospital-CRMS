package com.example.demo.Exceptions;

public class DoctorException extends Exception {
    String message;
    DoctorExceptionReason reason;

    public DoctorException(String message, DoctorExceptionReason reason) {
        this.message = message;
        this.reason = reason;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public DoctorExceptionReason getReason() {
        return reason;
    }

    public void setReason(DoctorExceptionReason reason) {
        this.reason = reason;
    }

}
