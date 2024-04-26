import { IAuthor } from './IAuthor';
import { IGenre } from './IGenre';
import { IPublisher } from './IPublisher';
export interface IBook {
  bookId: number;
  title: string;
  cover: string;
  author: IAuthor;
  genre: IGenre;
  publicationDate: string;
  isbn: string;
  publisher: IPublisher;
  edition: string;
  language: string;
  pageCount: number;
  format: string;
  description: string;
  averageRating: number;
  numberOfRatings: number;
  price: number;
  availability: string;
}
