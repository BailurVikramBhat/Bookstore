import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { IBook } from '../../models/IBook';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-home.component.html',
  styleUrl: './book-home.component.css',
})
export class BookHomeComponent implements OnInit, OnDestroy {
  books: IBook[] = [];
  subscription!: Subscription;
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.subscription = this.service.getAllBooks().subscribe({
      next: (returnedBooks) => {
        this.books = returnedBooks;
      },
      error: (error) => console.log(error),
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSubtitle(book: IBook) {
    return book.author.authorName + ', ' + book.edition;
  }
}
