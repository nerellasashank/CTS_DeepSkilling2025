package com.cognizant.springlearn.controller;


import com.cognizant.springlearn.SpringLearnApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    private final SpringLearnApplication springLearnApplication;

    private static final Logger LOGGER = LoggerFactory.getLogger(HelloWorldController.class);

    HelloWorldController(SpringLearnApplication springLearnApplication) {
        this.springLearnApplication = springLearnApplication;
    }

    @GetMapping("/hello")
    public String sayHello() {
        LOGGER.debug("START");
        String response = "Hello World!!";
        LOGGER.debug(response);
        LOGGER.debug("END");
        return response;
    }
}
