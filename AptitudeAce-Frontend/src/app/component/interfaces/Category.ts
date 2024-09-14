import { SubCategory } from "./SubCategory";

export interface Category {
    id: number;          // Assuming 'id' is a number; adjust if necessary
    title: string;
    subCategories: SubCategory[]; // Array of SubCategory objects
  }