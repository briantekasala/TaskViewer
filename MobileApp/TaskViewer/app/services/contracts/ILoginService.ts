import { ILogin } from "../../utils/ILogin";

export interface ILoginService {
  checkUser(loginCredentials: ILogin): Promise<ILogin[]>;
  signUpUser(signUpUserCredentials: ILogin): Promise<boolean>;
}
