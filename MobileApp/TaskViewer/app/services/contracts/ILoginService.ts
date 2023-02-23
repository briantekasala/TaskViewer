export interface ILoginService {
  checkUser(loginCredentials: ILoginService): Promise<ILoginService[]>;
  signUpUser(signUpUserCredentials: ILoginService): Promise<boolean>;
}
