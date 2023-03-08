package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Student.Bank;

public interface BankRepository extends JpaRepository<Bank, Long>{

}