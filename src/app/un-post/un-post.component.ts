import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-un-post',
  templateUrl: './un-post.component.html',
  styleUrls: ['./un-post.component.scss']
})
export class UnPostComponent implements OnInit {

  isAuth = false;

  @Input() postName: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;

  constructor() {
      this.isAuth = true;
  }

  ngOnInit() {
  }
  getColor() {
    if (this.loveIts > 0) {
       return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }

  onLoveIt() {
    this.loveIts++;
  }
  onDontLoveIt() {
    this.loveIts--;
  }

}
