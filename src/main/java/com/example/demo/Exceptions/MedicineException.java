package com.example.demo.Exceptions;

public class MedicineException extends Exception {
    String message;
    MedicineExceptionReason reason;

    public MedicineException(String message, MedicineExceptionReason reason) {
        this.message = message;
        this.reason = reason;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public MedicineExceptionReason getReason() {
        return reason;
    }

    public void setReason(MedicineExceptionReason reason) {
        this.reason = reason;
    }
}
