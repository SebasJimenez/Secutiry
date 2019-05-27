/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.pqr.securitypqr.web.rest;

import co.edu.utp.isc.gia.pqr.securitypqr.service.SecurityService;
import co.edu.utp.isc.gia.pqr.securitypqr.web.dto.RolResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import co.edu.utp.isc.gia.pqr.securitypqr.model.Rol;
import co.edu.utp.isc.gia.pqr.securitypqr.model.User;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Sebastian Jimenez
 */
@RestController
@RequestMapping("api/security")
public class SecurityController {

	@Autowired
	SecurityService securityService;

	@PostMapping("/login")
	public ResponseEntity<?> consultSecurity(@RequestParam("user") String user, @RequestParam("pass") String pass) {
		RolResponse security = securityService.loginUser(user, pass);
		if (security != null) {
			return ResponseEntity.ok(security);
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/delete")
	public ResponseEntity<?> deleteSecurity(@RequestParam("id") Long id) {
		Boolean security = securityService.deleteUser(id);
		if (security != null) {
			return ResponseEntity.ok(security);
		}
		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/rol")
	public ResponseEntity<?> deleteRol(@RequestParam("id") Integer id) {
		Boolean security = securityService.deleteRol(id);
		if (security != null) {
			return ResponseEntity.ok(security);
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/rol")
	public ResponseEntity<?> modifyRol(@RequestBody Rol rol) {
		Rol security = securityService.modifyRol(rol);
		if (security != null) {
			return ResponseEntity.ok(security);
		}
		return ResponseEntity.notFound().build();
	}

	@PutMapping("/user")
	public ResponseEntity<?> modifySecurity(@RequestBody User user) {
		User security = securityService.modifyUser(user);
		if (security != null) {
			return ResponseEntity.ok(security);
		}
		return ResponseEntity.notFound().build();
	}

	@GetMapping("/roles")
	public ResponseEntity<?> consultRol() {
		List<Rol> rol = securityService.consultRol();
		if (rol != null) {
			return ResponseEntity.ok(rol);
		}
		return ResponseEntity.notFound().build();
	}

	@GetMapping("/users")
	public ResponseEntity<?> consultUser() {
		List<User> user = securityService.consultUser();
		if (user != null) {
			return ResponseEntity.ok(user);
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping("/rol")
	public ResponseEntity<?> createRol(@RequestBody Rol rol) {
		Rol roles = securityService.createRol(rol);
		if (roles == null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(roles);
	}

	@PostMapping("/user")
	public ResponseEntity<?> createSecurity(@RequestBody User user) {
		//System.out.println(pass);
		User userNew = securityService.createUser(user);
		if (userNew == null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(userNew);
	}
}
