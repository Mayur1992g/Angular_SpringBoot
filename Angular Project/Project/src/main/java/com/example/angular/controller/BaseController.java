package com.example.angular.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BaseController {

	
	@GetMapping(path = "/hello")
	public String getData() {
		return "Hello";
	}
	
}
