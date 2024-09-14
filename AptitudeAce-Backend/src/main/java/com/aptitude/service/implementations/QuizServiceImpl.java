package com.aptitude.service.implementations;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aptitude.entity.SubCategory;
import com.aptitude.dto.QuizDto;
import com.aptitude.entity.Quiz;
import com.aptitude.repository.QuizRepository;
import com.aptitude.repository.SubCategoryRepository;
import com.aptitude.service.QuizService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class QuizServiceImpl implements QuizService {
	
    @Autowired
    private QuizRepository quizRepository;
    
    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Override
    public Quiz addQuiz(QuizDto quizDto) {
    	
    	SubCategory subCategory = subCategoryRepository.findById(quizDto.getSubCategoryId()).get();
    	Quiz quiz = new Quiz();
    	quiz.setTitle(quizDto.getTitle());
    	quiz.setDescription(quizDto.getDescription());
    	quiz.setActive(quizDto.isActive());
    	quiz.setMaxMarks(quizDto.getMaxMarks());
    	quiz.setNumberOfQuestions(quizDto.getNumberOfQuestions());
    	quiz.setCategory(subCategory);
        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Set<Quiz> getQuizzes() {
        return new HashSet<>(this.quizRepository.findAll());
    }

    @Override
    public Quiz getQuiz(Long quizId) {
        return this.quizRepository.findById(quizId).get();
    }

    @Override
    public void deleteQuiz(Long quizId) {
        this.quizRepository.deleteById(quizId);
    }

    @Override
    public List<Quiz> getQuizzesOfSubCategory(SubCategory SubCategory) {
        return this.quizRepository.findBySubCategory(SubCategory);
    }


    //get active quizzes

    @Override
    public List<Quiz> getActiveQuizzes() {
        return this.quizRepository.findByActive(true);
    }

    @Override
    public List<Quiz> getActiveQuizzesOfSubCategory(SubCategory c) {
        return this.quizRepository.findBySubCategoryAndActive(c, true);
    }

}
