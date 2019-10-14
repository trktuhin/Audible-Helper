import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../_services/review.service';
import { AlertifyService } from '../_services/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-fetch-review',
  templateUrl: './fetch-review.component.html',
  styleUrls: ['./fetch-review.component.css']
})
export class FetchReviewComponent implements OnInit {
  normalTask = {
    country: 'us',
    bookAsin: '',
    minimumDate: new Date()
  };
  fileToUpload: File = null;
  country = 'us';
  bookAsin = '';
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private reviewService: ReviewService, private alertify: AlertifyService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  AddReviews() {
    if (this.bookAsin === '') {
      this.alertify.error('Please enter the book asin first');
      return;
    }
    const extension = this.fileToUpload.name.split('.').pop();
    if (extension.toLowerCase() !== 'xlsx') {
      this.alertify.error('Only .xlsx files allowed!');
      return;
    }
    this.spinner.show();
    this.reviewService.addReviews(this.fileToUpload, this.country, this.bookAsin).subscribe(data => {
      this.alertify.success(data + ' reviews added');
    }, err => {
      this.alertify.error('Could not add reviews');
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    });
  }

  AddNormalReviews() {
    if (this.normalTask.bookAsin === '') {
      this.alertify.error('Please enter the book asin first');
      return;
    }
    this.spinner.show();
    this.reviewService.addReviewByDate(this.normalTask.bookAsin,
      this.normalTask.country, this.normalTask.minimumDate).subscribe(data => {
      this.alertify.success(data + ' reviews added');
    }, err => {
      this.alertify.error('Could not add reviews');
      this.spinner.hide();
    }, () => {
      this.spinner.hide();
    });
  }

}
