import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sitation-success',
  templateUrl: './sitation-success.component.html',
  styleUrls: ['./sitation-success.component.scss']
})
export class SitationSuccessComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<SitationSuccessComponent>) { }

  ngOnInit() {
  }
  onclose() {
    this.thisDialogRef.close();
  }
}
