export class ClientResponse {
  isSuccess: boolean | undefined;
  result: Object | undefined;
  message: string | undefined;

  constructor(isSuccess?: boolean, result?: Object, message?: string) {
    this.isSuccess = isSuccess;
    this.result = result;
    this.message = message;
  }
}
