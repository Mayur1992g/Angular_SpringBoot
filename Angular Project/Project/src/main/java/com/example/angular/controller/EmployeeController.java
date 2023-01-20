package com.example.angular.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.angular.exception.ResourceNotFoundException;
import com.example.angular.model.Employee;
import com.example.angular.repository.EmployeeRepository;

@RequestMapping(value = "/api/v1/")
@RestController
@CrossOrigin
public class EmployeeController {

	@Autowired
	EmployeeRepository empRepo;

	@GetMapping("/employees")
	public List<Employee> getAllEmployee() {
		return empRepo.findAll();
	}

	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee emp) {
		return empRepo.save(emp);
	}

	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = empRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Id Not Found : " + id));
		return ResponseEntity.ok(employee);
	}

	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {

		Employee employe = empRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Id Not Found : " + id));
		employe.setEmailId(employee.getEmailId());
		employe.setFirstName(employee.getFirstName());
		employe.setLastName(employee.getLastName());
		Employee employeeOut = empRepo.save(employe);
		return ResponseEntity.ok(employeeOut);

	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String ,Boolean>> deleteEmployee(@PathVariable Long id) {
		Employee employee = empRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Id Not Found : " + id));
		
		empRepo.delete(employee);
		Map<String,Boolean>  map = new HashMap<>();
		map.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(map);
		
		
	}
	

}
