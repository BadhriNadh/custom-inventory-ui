import {Component, inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-count-submit-dialog',
  templateUrl: './count-submit-dialog.component.html',
  styleUrls: ['./count-submit-dialog.component.css']
})
export class CountSubmitDialogComponent {
  readonly submitRef = inject(MatDialogRef<CountSubmitDialogComponent>);

  onSaveClick() {
    this.submitRef.close();
  }
}
