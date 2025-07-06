package com.cognizant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.entity.Employee;
import com.cognizant.service.EmployeeService;

@SpringBootApplication
public class EmployeeManagementApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementApplication.class, args);
	}
	 @Autowired
	 private EmployeeService employeeService;

	   

	    @Override
	    public void run(String... args) {
	        Employee employee = new Employee();
	        employee.setId(3);
	        employee.setName("John");
	        employee.setDepartment("Accounts");
	        employeeService.addEmployee(employee);
	    }

}
