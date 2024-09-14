package com.aptitude.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aptitude.entity.Quiz;
import com.aptitude.entity.SubCategory;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
	
    public List<Quiz> findBySubCategory(SubCategory category);

    public List<Quiz> findByActive(Boolean b);

    public List<Quiz> findBySubCategoryAndActive(SubCategory c, Boolean b);
}
