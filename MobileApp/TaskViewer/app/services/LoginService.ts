import { ILoginService } from "./contracts/ILoginService";

export class LoginService implements ILoginService {
  url: string;
  constructor(apiURl: string) {
    this.url = apiURl;
  }

  async checkUser(loginCredentials: ILoginService): Promise<ILoginService[]> {
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

      const userLoginResult: ILoginService[] = await checkUserLogin.json();
      return userLoginResult;
    } catch (error) {
      throw new Error("error", { cause: error });
    }
  }

  signUpUser(signUpUserCredentials: ILoginService): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
