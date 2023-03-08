package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.BankRepository;
import com.example.demo.Student.Bank;

@Service
public class BankService {
	
	@Autowired
	private BankRepository stu;

	public Bank saveDetails(Bank s) {
		return stu.save(s);
	}
	

	public List<Bank> getAllDetails() {
		List<Bank> arr = new ArrayList<>();
		arr = (List<Bank>) stu.findAll();
		return arr;
	}

	public void deleteDepartmentById(Long id) {
		stu.deleteById(id);
	}
	public Bank update(long id,Bank s) {
		
		return stu.saveAndFlush(s);
	}

	public Optional<Bank> findById(Long id) {
		Optional<Bank> stud = stu.findById(id);
		return stud;
	}

}
