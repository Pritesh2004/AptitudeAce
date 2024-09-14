package com.aptitude.service.implementations;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aptitude.entity.Category;
import com.aptitude.entity.SubCategory;
import com.aptitude.repository.SubCategoryRepository;
import com.aptitude.service.SubCategoryService;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Override
    public SubCategory addSubCategory(SubCategory subCategory) {
    	SubCategory newSubCategory = new SubCategory();
    	newSubCategory.setTitle(subCategory.getTitle());
    	newSubCategory.setDescription(subCategory.getDescription());
    	Category category = new Category();
    	category.setId(subCategory.getCategory().getId());
    	newSubCategory.setCategory(category);
        return this.subCategoryRepository.save(newSubCategory);
    }

    @Override
    public SubCategory updateSubCategory(SubCategory SubCategory) {
        return this.subCategoryRepository.save(SubCategory);
    }

    @Override
    public Set<SubCategory> getCategories() {
        return new LinkedHashSet<>(this.subCategoryRepository.findAll());
    }

    @Override
    public SubCategory getSubCategory(Long SubCategoryId) {
        return this.subCategoryRepository.findById(SubCategoryId).get();
    }

    @Override
    public void deleteSubCategory(Long SubCategoryId) {
        SubCategory SubCategory = new SubCategory();
        SubCategory.setCid(SubCategoryId);
        this.subCategoryRepository.delete(SubCategory);
    }
    
   
}
