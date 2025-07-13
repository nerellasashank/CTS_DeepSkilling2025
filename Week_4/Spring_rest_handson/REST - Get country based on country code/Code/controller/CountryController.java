package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.models.Country;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController {
	private static final Logger LOGGER = LoggerFactory.getLogger(HelloWorldController.class);
	
	@RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.debug("START getCountryIndia");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);

        LOGGER.debug("END getCountryIndia: {}", country);
        return country;
    }

    
    @Autowired
    private CountryService countryService;
    @GetMapping("/country/{code}")
    public Country getCountry(@PathVariable String code) {
    	LOGGER.info("START - getCountry()");
    	Country country = countryService.getCountry(code);
        
        LOGGER.info("END - getCountry()");
        return country;
    }
}
