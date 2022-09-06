package com.backend.avisos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.avisos.model.Avisos;

public interface IAvisosRepository extends JpaRepository<Avisos, Long>{

}
