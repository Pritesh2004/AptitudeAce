package com.aptitude.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.aptitude.service.SubCategoryService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/subCategories")
@CrossOrigin("*")
public class SubCategoryController {

    private static final Logger logger = LoggerFactory.getLogger(SubCategoryController.class);

    @Autowired
    private SubCategoryService SubCategoryService;

    // Add SubCategory
    @PostMapping("/add")
    public ResponseEntity<?> addSubCategory(@RequestBody SubCategory subCategory) {
        try {
            System.out.println("Received SubCategory: " + subCategory); // Log to verify data
            SubCategory addedSubCategory = SubCategoryService.addSubCategory(subCategory);
            return ResponseEntity.status(HttpStatus.CREATED).body(addedSubCategory);
        } catch (Exception e) {
            logger.error("Error adding SubCategory: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding SubCategory");
        }
    }

    // Get SubCategory
    @GetMapping("/getById/{id}")
    public ResponseEntity<?> getSubCategory(@PathVariable("id") Long id) {
        try {
            SubCategory SubCategory = SubCategoryService.getSubCategory(id);
            if (SubCategory == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("SubCategory not found");
            }
            return ResponseEntity.ok(SubCategory);
        } catch (Exception e) {
            logger.error("Error retrieving SubCategory: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving SubCategory");
        }
    }

    // Get all categories
    @GetMapping("/getAll")
    public ResponseEntity<?> getCategories() {
        try {
            return ResponseEntity.ok(SubCategoryService.getCategories());
        } catch (Exception e) {
            logger.error("Error retrieving categories: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving categories");
        }
    }

    // Update SubCategory
    @PutMapping("/")
    public ResponseEntity<?> updateSubCategory(@RequestBody SubCategory SubCategory) {
        try {
            SubCategory updatedSubCategory = SubCategoryService.updateSubCategory(SubCategory);
            return ResponseEntity.ok(updatedSubCategory);
        } catch (Exception e) {
            logger.error("Error updating SubCategory: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating SubCategory");
        }
    }

    // Delete SubCategory
    @DeleteMapping("/delete/{id}")
    public void deleteSubCategory(@PathVariable("id") Long id) {
        SubCategoryService.deleteSubCategory(id);
    }
}
