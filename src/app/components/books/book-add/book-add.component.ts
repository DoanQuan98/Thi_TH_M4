import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../../services/book.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  formAddBook: FormGroup | undefined

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    })
  }

  submit() {
    let data = this.formAddBook?.value;
    this.bookService.creat(data).subscribe(()=>{
      this.router.navigate(['books'])
    });
  }

  back() {
    this.location.back()
  }
}
