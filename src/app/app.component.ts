import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'Gandhi Library';

  bookList: Array<Book>;

  constructor(private _dataService: DataService) {

    this._dataService.getBooks()
      .subscribe(res => this.bookList = res);

  }

}
