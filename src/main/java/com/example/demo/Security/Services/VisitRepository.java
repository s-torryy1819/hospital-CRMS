package com.example.demo.Security.Services;

import java.util.Date;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;
import com.example.demo.Models.Patient;
import com.example.demo.Models.Visit;

public interface VisitRepository {

    Visit addVisitHistory(Visit visit);

    Visit deleteVisitHistory(Visit visit);

    Visit editVisitHistory(Visit visit, Patient patient, Date date, String disease, Doctor doctor, Cabinet cabinet);
}
