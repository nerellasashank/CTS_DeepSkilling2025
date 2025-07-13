package com.cognizant.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cognizant.jwt.util.JWTUtil;


@RestController
public class AuthController {


    @Autowired
    private JWTUtil jwtUtil;

    @GetMapping("/authenticate")
    public String authenticate(@RequestParam String username, @RequestParam String password) {
        if ("user".equals(username) && "pwd".equals(password)) {
            String token = jwtUtil.generateToken(username);
            return "{\"token\":\"" + token + "\"}";
        } else {
            return "Invalid Credentials";
        }
    }

}
