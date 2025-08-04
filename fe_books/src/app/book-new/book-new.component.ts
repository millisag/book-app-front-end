import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  standalone: true,
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  imports: [CommonModule, FormsModule]
})
export class BookNewComponent {
  title = '';
  author = '';
  read = false;
  errorMessage = '';

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit() {
    const newBook = { title: this.title, author: this.author, read: this.read };

    this.bookService.createBook(newBook).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => this.errorMessage = 'Failed to create book. Please try again.'
    });
  }
}
