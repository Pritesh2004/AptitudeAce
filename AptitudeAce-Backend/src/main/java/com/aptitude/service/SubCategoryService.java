package com.aptitude.service;

import java.util.Set;

import com.aptitude.entity.SubCategory;

public interface SubCategoryService {
	
    public SubCategory addSubCategory(SubCategory SubCategory);

    public SubCategory updateSubCategory(SubCategory SubCategory);

    public Set<SubCategory> getCategories();

    public SubCategory getSubCategory(Long SubCategoryId);

    public void deleteSubCategory(Long SubCategoryId);
}
