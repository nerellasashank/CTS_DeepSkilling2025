package com.cognizant.service;

import com.cognizant.entity.Employee;
import com.cognizant.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

	
}