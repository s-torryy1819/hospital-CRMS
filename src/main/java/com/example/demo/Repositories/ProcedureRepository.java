package com.example.demo.Repositories;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;
import com.example.demo.Models.HeathProcedure;

public interface ProcedureRepository {

    HeathProcedure addProcedure(HeathProcedure procedure);

    HeathProcedure deleteProcedure(HeathProcedure procedure);

    HeathProcedure editProcedure(HeathProcedure procedure, String description, Double price, Cabinet cabinet,
            Doctor doctor);

}
