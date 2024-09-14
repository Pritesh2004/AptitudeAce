import { Question } from "./Question";
import { SubCategory } from "./SubCategory";


export interface Quiz {
    qId: number;               // Assuming 'qId' is a number; adjust if necessary
    title: string;
    description: string;
    maxMarks: string;
    numberOfQuestions: string;
    active: boolean;
    subCategory: SubCategory; // Reference to the SubCategory interface
    questions: Question[];    // Array of Question objects
  }