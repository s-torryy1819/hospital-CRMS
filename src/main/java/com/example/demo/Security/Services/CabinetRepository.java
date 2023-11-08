package com.example.demo.Security.Services;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;

public interface CabinetRepository {

    Cabinet addCabinet(Cabinet cabinet);

    Cabinet deleteCabinet(Cabinet cabinet);

    Cabinet editCabinet(Cabinet cabinet, String description, Doctor doctor);
}
