package net.spirngboot.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.spirngboot.backend.model.Employee;

@Repository
public interface EmployeeRepository	extends JpaRepository<Employee,	Long> {

}
