import { Quiz } from "./Quiz";

export interface Question {
    quesId: number;         // Assuming 'quesId' is a number; adjust if necessary
    content: string;
    image: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
    givenAnswer?: string;   // Marked as optional since it's transient
    quiz: Quiz;             // Reference to the Quiz interface
  }