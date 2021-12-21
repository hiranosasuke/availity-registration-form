import { Injectable } from '@angular/core';
import { ClientResponse } from '../../shared/client-response.model';
import { WebRequestService } from '../web-request.service';
import { Person } from '../../interfaces/user.interface';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private webReqService: WebRequestService,
    private http: HttpClient
  ) {}

  signup(user: Person): Promise<Person> {
    return new Promise((resolve, reject) => {
      this.webReqService.post('users', user).subscribe(
        (res: ClientResponse<Person>) => {
          if (res.isSuccess) {
            resolve(res.result);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getAllUsers(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      this.webReqService.get('users').subscribe(
        (res: ClientResponse<Person[]>) => {
          if (res.isSuccess) {
            resolve(res.result);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getUserByEmail(email: string): Promise<Person> {
    return new Promise((resolve, reject) => {
      this.webReqService.get('users/email?email=' + email).subscribe(
        (res: ClientResponse<Person>) => {
          if (res.isSuccess) {
            resolve(res.result);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  uploadFile(files: FileList) {
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload);

    return this.http
      .post('https://localhost:5001/csvavaility', formData, {
        responseType: 'blob',
      })
      .pipe(catchError(this.parseErrorBlob));
  }

  parseErrorBlob(err: HttpErrorResponse): Observable<any> {
    const reader: FileReader = new FileReader();

    const obs = new Observable((observer: any) => {
      reader.onloadend = (e) => {
        var stringifyObj = JSON.stringify(reader.result);
        var obj = JSON.parse(stringifyObj);

        observer.error(obj);
        observer.complete();
      };
    });

    reader.readAsText(err.error);
    return obs;
  }
}
