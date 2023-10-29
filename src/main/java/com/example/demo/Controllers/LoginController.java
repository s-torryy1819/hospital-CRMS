package com.example.demo.Controllers;

import java.security.Principal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

    @GetMapping(value = { "/", "/login" })
    public ModelAndView login(Principal principal) {

        ModelAndView modelAndView = new ModelAndView();

        if (principal != null) {
            modelAndView.setViewName("index");
        } else {
            modelAndView.setViewName("login");
        }

        return modelAndView;
    }
}
