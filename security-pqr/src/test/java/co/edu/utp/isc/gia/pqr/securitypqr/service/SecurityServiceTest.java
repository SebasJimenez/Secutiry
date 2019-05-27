/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.pqr.securitypqr.service;

import co.edu.utp.isc.gia.pqr.securitypqr.model.Rol;
import co.edu.utp.isc.gia.pqr.securitypqr.model.User;
import co.edu.utp.isc.gia.pqr.securitypqr.repository.RolRepository;
import co.edu.utp.isc.gia.pqr.securitypqr.repository.UserRepository;
import co.edu.utp.isc.gia.pqr.securitypqr.web.dto.RolResponse;
import java.util.List;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author Sebastian Jimenez
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class SecurityServiceTest {
	
	@Autowired
	private UserRepository userRepository; 
	@Autowired
	private RolRepository rolRepository;
	@Autowired
	private SecurityService securityService;
	
	public SecurityServiceTest() {
	}

	@Test
	public void insertUser_Return_OK() {
		List<User> users = userRepository.findAll();
		Long userCon = users.size() + 1L;
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(userCon, "sebas", "123", "jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		userRepository.save(userNew);
		User userCreate = securityService.createUser(userNew);
		assertNotNull(userCreate);
	}
	
	@Test
	public void insertRol_Return_OK() {
		List<Rol> roles = rolRepository.findAll();
		Integer rolCon = roles.size() + 1;
		Rol rolNew = new Rol(rolCon, "Encargado");
		rolRepository.save(rolNew);
		Rol rolCreate = securityService.createRol(rolNew);
		assertNotNull(rolCreate);
	}
	
	@Test
	public void modifyRol_Return_OK() {
		Rol rolNew = new Rol(1, "Encargado");
		rolRepository.save(rolNew);
		Rol rolModify = securityService.modifyRol(rolNew);
		assertNotNull(rolModify);
	}
	
	@Test
	public void modifyUser_Return_OK() {
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(1L, "sebas", "123","jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		userRepository.save(userNew);
		User userModify = securityService.modifyUser(userNew);
		assertNotNull(userModify);
	}
	
	@Test
	public void deleteUser_Return_OK(){
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(1L, "sebas", "123","jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		userRepository.save(userNew);
		Boolean userDelete = securityService.deleteUser(1L);
		userRepository.deleteById(1L);
		assertTrue(userDelete);
	}
	
	@Test
	public void deleteRol_Return_OK(){
		Rol rolNew = new Rol(1, "Encargado");
		rolRepository.save(rolNew);
		Boolean rolDelete = securityService.deleteRol(1);
		rolRepository.deleteById(1);
		assertTrue(rolDelete);
	}
	
	@Test
	public void consultUser_Return_OK(){
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(1L, "sebas", "123","jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		userRepository.save(userNew);
		List<User> list = securityService.consultUser();
		userRepository.delete(userNew);
		assertFalse(list.isEmpty());    
	}
	
	@Test
	public void consultRol_Return_OK(){
		Rol rolNew = new Rol(1, "Encargado");
		rolRepository.save(rolNew);
		List<Rol> list = securityService.consultRol();
		rolRepository.delete(rolNew);
		assertFalse(list.isEmpty());
	}
	
	@Test
	public void login_Return_OK(){
		String estado = "Funcionario";
		String pass = "3256";
		String user = "miguel";
		List<User> userR = userRepository.findAll();
		RolResponse rol = securityService.loginUser(user, pass);
		assertNotNull(rol);
	}
	
}
