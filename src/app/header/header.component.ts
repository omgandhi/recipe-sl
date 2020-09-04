import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private snackBar: MatSnackBar) {}
  /*
  onSaveData() {
    this.dataStorageService.storeRecipes();
  } */

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe(data => {
      console.log(data);
    },
      error => this.snackBar.open(error));
  }
}
