package com.planeta.pfum.repository;

import com.planeta.pfum.domain.Professeur;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;


/**
 * Spring Data  repository for the Professeur entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProfesseurRepository extends JpaRepository<Professeur, Long> {

    Optional<Professeur> findOneByUserId(Long id);
}
