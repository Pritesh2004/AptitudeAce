package com.aptitude.service;

import java.util.List;
import java.util.Set;

import com.aptitude.entity.SubCategory;
import com.aptitude.dto.QuizDto;
import com.aptitude.entity.Quiz;

public interface QuizService {

    public Quiz addQuiz(QuizDto quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getQuizzes();

    public Quiz getQuiz(Long quizId);

    public void deleteQuiz(Long quizId);

    public List<Quiz> getQuizzesOfSubCategory(SubCategory SubCategory);

    public List<Quiz> getActiveQuizzes();

    public List<Quiz> getActiveQuizzesOfSubCategory(SubCategory c);
}
