package com.backend.avisos.model;

import java.sql.Date;

import javax.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "avisos")
public class Avisos {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String titulo;
	private String descricao;
	private Date data;
	
	public Avisos(String titulo, String descricao, Date data) {
		super();
		this.titulo = titulo;
		this.descricao = descricao;
		this.data = data;
	}
	
}