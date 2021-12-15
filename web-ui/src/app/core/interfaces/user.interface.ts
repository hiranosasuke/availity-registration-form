interface IPerson {
  firstName: string;
  lastName: string;
  npiNumber: string;
  businessAddress: string;
  phoneNumber: string;
  emailAddress: string;
}

export class Person implements IPerson {
  public firstName: string;
  public lastName: string;
  public npiNumber: string;
  public businessAddress: string;
  public phoneNumber: string;
  public emailAddress: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.npiNumber = '';
    this.businessAddress = '';
    this.phoneNumber = '';
    this.emailAddress = '';
  }
}
