import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.scss'],
})
export class CsvReaderComponent implements OnInit {
  @ViewChild('file') files!: ElementRef;

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  uploadFile(files: FileList | null) {
    if (!files) return;

    this.userService.uploadFile(files).subscribe(
      (info: any) => {
        const blob = new Blob([info], {
          type: 'application/zip',
        });

        const fileURL = URL.createObjectURL(blob);
        const fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.download = 'availity.zip';
        fileLink.click();
      },
      (error) => {
        this._snackBar.open(error, 'Close', {
          duration: 3000,
          verticalPosition: 'top',
        });
      }
    );
  }
}
