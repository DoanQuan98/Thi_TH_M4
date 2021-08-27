import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './book-list/book-list.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {AppRoutingModule} from "../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    BookEditComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule {
}
