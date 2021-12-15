import { Injectable } from '@angular/core';
import { ClientResponse } from '../../shared/client-response.model';
import { WebRequestService } from '../web-request.service';
import { Person } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private webReqService: WebRequestService) {}

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
}
