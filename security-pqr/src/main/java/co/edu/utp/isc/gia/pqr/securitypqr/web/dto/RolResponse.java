/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.utp.isc.gia.pqr.securitypqr.web.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Sebastian Jimenez
 */
@Builder
@Getter
@Setter
public class RolResponse {
    private String name;
    
    public RolResponse(String estado){
        this.name = estado;
    }
}
