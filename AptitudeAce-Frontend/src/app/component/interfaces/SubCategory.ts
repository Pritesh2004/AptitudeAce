import { Category } from "./Category";
import { Quiz } from "./Quiz";


export interface SubCategory {
  cid: number;          // Assuming 'cid' is a number; adjust if necessary
  title: string;
  description: string;
  category: Category;  // Reference to the Category interface
  quizzes: Quiz[];     // Array of Quiz objects
}