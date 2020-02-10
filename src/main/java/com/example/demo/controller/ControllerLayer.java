package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerLayer {

	@GetMapping("/home")
	public String getHomePage() {
		return "index";
	}
	@GetMapping("/index")
	public String getIndexPage() {
		return "index";
	}
	
	@GetMapping("/hitPython")
	public String executePythonFile() {
		return "index";
	}
}
