export class ClientResponse<T> {
  isSuccess!: boolean;
  result!: T;
  message!: string;
}
