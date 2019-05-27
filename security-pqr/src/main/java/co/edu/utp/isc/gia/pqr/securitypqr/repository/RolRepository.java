/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.pqr.securitypqr.repository;

import co.edu.utp.isc.gia.pqr.securitypqr.model.Rol;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
// *
 * @author Usuario UTP
 */
@Repository
public interface RolRepository extends MongoRepository<Rol, Integer> {
	
}
