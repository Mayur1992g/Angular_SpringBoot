package com.example.angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.angular.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
