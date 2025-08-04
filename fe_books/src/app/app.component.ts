import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';  
import { NavbarComponent } from './components/navbar/navbar.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, BookListComponent, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'fe_books';
}
