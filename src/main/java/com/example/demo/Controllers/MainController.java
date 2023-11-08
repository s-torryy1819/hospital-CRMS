package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.Security.Services.SecurityUserDetailsService;

@RestController
public class MainController {

    @Autowired
    private SecurityUserDetailsService userDetailsManager;

    @GetMapping("/index")
    public ModelAndView getIndex() {

        // userDetailsManager.createUser("Egon", "123xa",
        // Arrays.asList(Authorities.ADMIN));
        // userDetailsManager.createUser("Vicky", "Vicky",
        // Arrays.asList(Authorities.ADMIN));

        // userDetailsManager.createUser("doc", "123xa",
        // Arrays.asList(Authorities.DOCTOR));
        // userDetailsManager.createUser("patient", "123xa",
        // Arrays.asList(Authorities.PATIENT));

        return new ModelAndView("index");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/egon")
    public String getEgon() {
        return "Egon !";
    }

    @GetMapping(value = "/username")
    @ResponseBody
    public String currentUserName(Authentication authentication) {

        if (authentication != null)
            return authentication.getName();
        else
            return "";
    }

}