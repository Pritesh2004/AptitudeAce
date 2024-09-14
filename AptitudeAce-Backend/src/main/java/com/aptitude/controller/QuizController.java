package com.aptitude.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aptitude.entity.SubCategory;
import com.aptitude.dto.QuizDto;
import com.aptitude.entity.Quiz;
import com.aptitude.service.QuizService;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
	
    @Autowired
    private QuizService quizService;

    //add quiz service
    @PostMapping("/")
    public ResponseEntity<Quiz> add(@RequestBody QuizDto quiz) {
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    //update quiz

    @PutMapping("/")
    public ResponseEntity<Quiz> update(@RequestBody Quiz quiz) {
        return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }

    //get quiz
    @GetMapping("/getAll")
    public ResponseEntity<?> quizzes() {
        return ResponseEntity.ok(this.quizService.getQuizzes());
    }

    //get single quiz
    @GetMapping("/getById/{qid}")
    public Quiz quiz(@PathVariable("qid") Long qid) {
        return this.quizService.getQuiz(qid);
    }

    //delete the quiz
    @DeleteMapping("/{qid}")
    public void delete(@PathVariable("qid") Long qid) {
        this.quizService.deleteQuiz(qid);
    }

    @GetMapping("/getBySubCategory/{cid}")
    public List<Quiz> getQuizzesOfSubCategory(@PathVariable("cid") Long cid) {
        SubCategory SubCategory = new SubCategory();
        SubCategory.setCid(cid);
        return this.quizService.getQuizzesOfSubCategory(SubCategory);
    }

    //get active quizzes
    @GetMapping("/active")
    public List<Quiz> getActiveQuizzes() {
        return this.quizService.getActiveQuizzes();
    }

    //get active quizzes of SubCategory
    @GetMapping("/subCategory/active/{cid}")
    public List<Quiz> getActiveQuizzes(@PathVariable("cid") Long cid) {
        SubCategory SubCategory = new SubCategory();
        SubCategory.setCid(cid);
        return this.quizService.getActiveQuizzesOfSubCategory(SubCategory);
    }




}
