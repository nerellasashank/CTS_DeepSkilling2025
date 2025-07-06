package com.cognizant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.models.Country;
import com.cognizant.repository.CountryRepository;

@Service
public class CountryServiceImpl implements CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Override
    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }
}