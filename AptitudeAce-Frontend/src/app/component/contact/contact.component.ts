import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userQuery: any = {
    name: '',
    email: '',
    query: ''
  };

  constructor(private service: UserService) { }

  onSubmit(): void {
    this.service.postUserQuery(this.userQuery).subscribe(
      (response) => {
        console.log('Query submitted successfully', response);
        alert('Your query has been submitted successfully!');
        this.resetForm();
      },
      (error) => {
        console.error('Error submitting query', error);
        alert('There was an error submitting your query. Please try again.');
      }
    );
  }

  resetForm(): void {
    this.userQuery = {
      name: '',
      email: '',
      query: ''
    };
  }
}
