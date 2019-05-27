/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.pqr.securitypqr.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author Usuario UTP
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Rol")
public class Rol {

  @Id
  private Integer id;

  private String name;
}
