package com.backend.avisos.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.avisos.model.Avisos;
import com.backend.avisos.service.AvisosService;

@RestController
@RequestMapping("/avisos/")
public class AvisosREST {

	@Autowired
	private AvisosService avisosService;

	@GetMapping
	private ResponseEntity<List<Avisos>> getAllAvisos() {
		return ResponseEntity.ok(avisosService.findAll());
	}

	@PostMapping
	private ResponseEntity<Avisos> saveAvisoEntity(@RequestBody Avisos aviso) {
		try {
			Avisos avisoSalvo = avisosService.save(aviso);
			return ResponseEntity.created(new URI("/avisos/" + avisoSalvo.getId())).body(avisoSalvo);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@DeleteMapping(value = "delete/{id}")
	private ResponseEntity<Boolean> deleteAvisoEntity(@PathVariable("id") Long id) {
		avisosService.deleteById(id);
		return ResponseEntity.ok(!(avisosService.findById(id) != null));
	}

}
