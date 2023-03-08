package com.example.demo.Student;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Bank")
public class Bank {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "id")
	private Long customer_id;
	
//	@Column(name = "customerName")
	private String customerName;
	private String BranchName;
//	@Column(name = "mobile_number")
	private long mobile_number;
//	@Column(name = "mail_id")
	private String mail_id;
//	@Column(name = "customer_address")
	private String customer_address;
	

	


	public Long getCustomer_id() {
		return customer_id;
	}





	public void setCustomer_id(Long customer_id) {
		this.customer_id = customer_id;
	}





	public String getCustomerName() {
		return customerName;
	}





	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}





	public String getBranchName() {
		return BranchName;
	}





	public void setBranchName(String branchName) {
		this.BranchName = branchName;
	}





	public long getMobile_number() {
		return mobile_number;
	}





	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
	}





	public String getMail_id() {
		return mail_id;
	}





	public void setMail_id(String mail_id) {
		this.mail_id = mail_id;
	}





	public String getCustomer_address() {
		return customer_address;
	}





	public void setCustomer_address(String customer_address) {
		this.customer_address = customer_address;
	}





	public Bank(Long customer_id, String customerName, String branchName, long mobile_number, String mail_id,
			String customer_address) {
		super();
		this.customer_id = customer_id;
		this.customerName = customerName;
		BranchName = branchName;
		this.mobile_number = mobile_number;
		this.mail_id = mail_id;
		this.customer_address = customer_address;
	}





	public Bank() {}
	
	
}
