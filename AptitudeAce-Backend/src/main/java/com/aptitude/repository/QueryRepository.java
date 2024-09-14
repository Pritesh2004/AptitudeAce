package com.aptitude.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aptitude.entity.UserQuery;

public interface QueryRepository extends JpaRepository<UserQuery, Long>{

}
