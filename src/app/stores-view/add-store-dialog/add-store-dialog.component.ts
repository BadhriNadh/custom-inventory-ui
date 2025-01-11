import {Component, inject, signal} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {merge} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AccessApiService} from "../../users-view/service/access/access-api.service";
import {StoresApiService} from "../service/stores-api.service";
import {User} from "../../users-view/request-models/user";
import {CreateStoreData} from "../request-models/create-store-data";
import {SessionStorageService} from "../../memory/session-storage.service";
import {ApiResponse} from "../../models/api-response";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-store-dialog',
  templateUrl: './add-store-dialog.component.html',
  styleUrls: ['./add-store-dialog.component.css']
})
export class AddStoreDialogComponent {
  readonly infoRef = inject(MatDialogRef<AddStoreDialogComponent>);

  readonly storeName = new FormControl('', [Validators.required]);
  readonly address = new FormControl('');

  errorStoreNameMessage = signal('');

  constructor(
    private storesApiService: StoresApiService,
    private sessionStorageService: SessionStorageService
  ){
    merge(this.storeName.statusChanges, this.storeName.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.updateStoreNameErrorMessage();
      });
  }

  updateStoreNameErrorMessage() {
    if (this.storeName.hasError('required')) {
      this.errorStoreNameMessage.set('You must enter store name');
    }else{
      this.errorStoreNameMessage.set('');
    }
  }

  onAddClick(): void {
    if (this.storeName.invalid ) {
      return;
    }

    const createStoreData: CreateStoreData = {
      userId: this.sessionStorageService.getLoginUserId()!,
      storeName: this.storeName.value!,
      address: this.address.value!
    };

    this.storesApiService.createStore(createStoreData).subscribe({
      next: (response) => {
        if(response.status === 201){
          console.log('Store created');
          this.infoRef.close();
          // TODO open new store
        }
      },
      error: (error) => {
        console.log('Store not created');
      },
    });


  }
}
