/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.pqr.securitypqr.web.rest;

import co.edu.utp.isc.gia.pqr.securitypqr.model.Rol;
import co.edu.utp.isc.gia.pqr.securitypqr.model.User;
import co.edu.utp.isc.gia.pqr.securitypqr.service.SecurityService;
import co.edu.utp.isc.gia.pqr.securitypqr.web.dto.RolResponse;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import static org.mockito.BDDMockito.given;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author Sebastian Jimenez
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class SecurityControllerTest {

	@Mock
	private SecurityService securityService;

	@InjectMocks
	private SecurityController securityController;

	public SecurityControllerTest() {
	}

	@Test
	public void testConsultSecurity_ReturnNotFound() {
		String user = "sebastian";
		String pass = "12344";
		given(securityService.loginUser(user, pass)).willReturn(null);
		ResponseEntity<?> rol = securityController.consultSecurity(user, pass);
		assertEquals(rol.getStatusCode(), HttpStatus.NOT_FOUND);
	}

	@Test
	public void testConsultSecurity_Return_OK() {
		String estado = "Encargado";
		String user = "sebas";
		String pass = "123";
		given(securityService.loginUser(user, pass)).willReturn(RolResponse.builder()
				.name(estado)
				.build()
		);
		ResponseEntity<?> rol = securityController.consultSecurity(user, pass);
		assertEquals(rol.getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testDeleteSecurity_ReturnNotFound() {
		Long id = 10L;
		given(securityService.deleteUser(id)).willReturn(null);
		ResponseEntity<?> user = securityController.deleteSecurity(id);
		assertEquals(user.getStatusCode(), HttpStatus.NOT_FOUND);
	}

	@Test
	public void testDeleteSecurity_ReturnOk() {
		Long id = 1L;
		given(securityService.deleteUser(id)).willReturn(true);
		ResponseEntity<?> user = securityController.deleteSecurity(id);
		assertEquals(user.getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testDeleteRol_ReturnNotFound() {
		Integer id = 10;
		given(securityService.deleteRol(id)).willReturn(null);
		ResponseEntity<?> rol = securityController.deleteRol(id);
		assertEquals(rol.getStatusCode(), HttpStatus.NOT_FOUND);
	}

	@Test
	public void testDeleteRol_ReturnOk() {
		Integer id = 1;
		given(securityService.deleteRol(id)).willReturn(true);
		ResponseEntity<?> rol = securityController.deleteRol(id);
		assertEquals(rol.getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testModifySecurity_ReturnNotFound() {
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(1L, "sebas", "123","jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		given(securityService.modifyUser(userNew)).willReturn(null);
		ResponseEntity<?> user = securityController.modifySecurity(userNew);
		assertEquals(user.getStatusCode(), HttpStatus.NOT_FOUND);
	}

	@Test
	public void testModifySecurity_ReturnOk() {
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(1L, "sebas", "123","jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		given(securityService.modifyUser(userNew)).willReturn(userNew);
		ResponseEntity<?> user = securityController.modifySecurity(userNew);
		assertEquals(user.getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testModifyRol_ReturnNotFound() {
		Rol rolNew = new Rol(1, "Encargado");
		given(securityService.modifyRol(rolNew)).willReturn(null);
		ResponseEntity<?> rol = securityController.modifyRol(rolNew);
		assertEquals(rol.getStatusCode(), HttpStatus.NOT_FOUND);
	}

	@Test
	public void testModifyRol_ReturnOk() {
		Rol rolNew = new Rol(1, "Encargado");
		given(securityService.modifyRol(rolNew)).willReturn(rolNew);
		ResponseEntity<?> rol = securityController.modifyRol(rolNew);
		assertEquals(rol.getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void testConsultUser_ReturnNotFound() {
		given(securityService.consultUser()).willReturn(null);
		ResponseEntity<?> lista = securityController.consultUser();
		assertEquals(lista.getStatusCode(), HttpStatus.NOT_FOUND);
	}
	
	@Test
	public void testConsultUser_Return_Ok() {
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(1L, "sebas", "123","jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		given(securityService.consultUser()).willReturn(Arrays.asList(userNew));
		ResponseEntity<?> lista = securityController.consultUser();
		assertEquals(lista.getStatusCode(), HttpStatus.OK);
	}
	
	@Test
	public void testConsultRol_ReturnNotFound() {
		given(securityService.consultRol()).willReturn(null);
		ResponseEntity<?> lista = securityController.consultRol();
		assertEquals(lista.getStatusCode(), HttpStatus.NOT_FOUND);
	}
	
	@Test
	public void testConsultRol_Return_Ok() {
		Rol rolNew = new Rol(1, "Encargado");
		given(securityService.consultRol()).willReturn(Arrays.asList(rolNew));
		ResponseEntity<?> lista = securityController.consultRol();
		assertEquals(lista.getStatusCode(), HttpStatus.OK);
	}
	
	@Test
	public void testCreateUser_Return_Ok() {
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(5L, "johan", "1234","jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		given(securityService.createUser(userNew)).willReturn(userNew);
		ResponseEntity<?> user = securityController.createSecurity(userNew);
		assertEquals(user.getStatusCode(), HttpStatus.OK);
	}
	
	@Test
	public void testCreateUser_ReturnNoContent() {
		Rol rolNew = new Rol(1, "Encargado");
		User userNew = new User(5L, "johan", "1234","jsjc@gmail.com", "Johan Sebastian Jimenez", rolNew);
		given(securityService.createUser(userNew)).willReturn(null);
		ResponseEntity<?> user = securityController.createSecurity(userNew);
		assertEquals(user.getStatusCode(), HttpStatus.NO_CONTENT);
	}
	
	@Test
	public void testCreateRol_Return_Ok() {
		Rol rolNew = new Rol(1, "Encargado");
		given(securityService.createRol(rolNew)).willReturn(rolNew);
		ResponseEntity<?> rol = securityController.createRol(rolNew);
		assertEquals(rol.getStatusCode(), HttpStatus.OK);
	}
	
	@Test
	public void testCreateRol_ReturnNoContent() {
		Rol rolNew = new Rol(1, "Encargado");
		given(securityService.createRol(rolNew)).willReturn(null);
		ResponseEntity<?> rol = securityController.createRol(rolNew);
		assertEquals(rol.getStatusCode(), HttpStatus.NO_CONTENT);
	}
}
