/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.pqr.securitypqr.model;

import com.mongodb.lang.NonNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author Usuario UTP
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "User")
public class User {

	@Id
	 private Long id;

	private String user;

	private String password;

	private String email;

	private String nameC;

	private Rol rol;
}
