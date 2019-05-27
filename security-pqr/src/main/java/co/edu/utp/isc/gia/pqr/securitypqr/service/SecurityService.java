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
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Sebastian Jimenez
 */
@Service
public class SecurityService {

	@Autowired
	UserRepository userRepository;
	@Autowired
	RolRepository rolRepository;

	public User createUser(User user) {
		List<User> users = userRepository.findAll();
		Long userCon = users.size() + 1L;
		for (int i = 0; i < users.size(); i++) {
			if (users.get(i).getId().equals(userCon)) {
				userCon++;
			}
		}
		User userNew = new User(userCon, user.getUser(), user.getPassword(), user.getEmail(), user.getNameC(), user.getRol());
		System.out.println(userNew);
		userNew = userRepository.save(userNew);
		return userNew;
	}

	public User modifyUser(User user) {
		List<User> users = userRepository.findAll();
		User userNew = new User();
		if (users != null) {
			for (int i = 0; i < users.size(); i++) {
				if (users.get(i).getId().equals(user.getId())) {
					users.get(i).setPassword(user.getPassword());
					users.get(i).setRol(user.getRol());
					users.get(i).setUser(user.getUser());
					users.get(i).setEmail(user.getEmail());
					users.get(i).setNameC(user.getNameC());
					userNew = userRepository.save(users.get(i));
				}
			}
		}
		return userNew;
	}

	public Boolean deleteUser(Long id) {
		userRepository.deleteById(id);
		return true;
	}

	public Boolean deleteRol(Integer id) {
		rolRepository.deleteById(id);
		return true;
	}

	public Rol createRol(Rol roles) {
		List<Rol> rol = rolRepository.findAll();
		Integer rolCon = rol.size() + 1;
		for (int i = 0; i < rol.size(); i++) {
			if (rol.get(i).getId().equals(rolCon)) {
				rolCon++;
			}
		}
		Rol rolNew = new Rol(rolCon, roles.getName());
		rolNew = rolRepository.save(rolNew);
		return rolNew;
	}

	public List<Rol> consultRol() {
		List<Rol> rol = rolRepository.findAll();
		return rol;
	}

	public Rol modifyRol(Rol rol) {
		List<Rol> roles = rolRepository.findAll();
		Rol rolNew = new Rol();
		if (roles != null) {
			for (int i = 0; i < roles.size(); i++) {
				if (roles.get(i).getId().equals(rol.getId())) {
					roles.get(i).setName(rol.getName());
					rolNew = rolRepository.save(roles.get(i));
				}
			}
		}
		return rolNew;
	}

	public List<User> consultUser() {
		List<User> user = userRepository.findAll();
		return user;
	}

	String estado;

	public RolResponse loginUser(String user, String pass) {
		List<User> userR = userRepository.findAll();
		//System.out.println(userR);
		RolResponse rols = new RolResponse(estado);
		if (userR != null) {
			for (int i = 0; i < userR.size(); i++) {
				//System.out.println(userR.get(i).getPassword());
				if (userR.get(i).getUser().equals(user) && userR.get(i).getPassword().equals(pass)
						&& userR.get(i).getRol().getName().equals(userR.get(i).getRol().getName())) {
					estado = userR.get(i).getRol().getName();
				}
			}
		}
		rols.setName(estado);
		return rols;
	}
}
