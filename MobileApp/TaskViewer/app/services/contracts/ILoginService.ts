import { ILogin } from "../../utils/Ilogin";

export interface ILoginService {
  checkUser(loginCredentials: ILogin): Promise<ILogin[]>;
  signUpUser(signUpUserCredentials: ILoginService): Promise<boolean>;
}
