import { ILogin } from "../utils/ILogin";
import { ILoginService } from "./contracts/ILoginService";

export class LoginService implements ILoginService {
  url: string;
  constructor(apiURl: string) {
    this.url = apiURl;
  }

  async checkUser(loginCredentials: ILogin): Promise<ILogin[]> {
    try {
      const checkUserLogin = await fetch(`${this.url}/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(loginCredentials),
      });

      if (!checkUserLogin.ok) {
        throw new Error(await checkUserLogin.text());
      }

      const userLoginResult: ILogin[] = await checkUserLogin.json();
      return userLoginResult;
    } catch (error) {
      throw new Error("error", { cause: error });
    }
  }

  async signUpUser(signUpUserCredentials: ILogin): Promise<boolean> {
    try {
      const createUser = await fetch(`${this.url}/signUp`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(signUpUserCredentials),
      });

      if (!createUser.ok) {
        throw new Error(await createUser.text());
      }
      return createUser.ok;
    } catch (error) {
      throw new Error("error", { cause: error });
    }
  }
}
