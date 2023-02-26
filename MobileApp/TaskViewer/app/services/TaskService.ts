import { ITaskList } from "../utils/ITaskList";
import { ITaskService } from "./contracts/ITaskService";

export class TaskService implements ITaskService {
  url: string;
  constructor(apiURl: string) {
    this.url = apiURl;
  }
  async getTaskList(): Promise<ITaskList[]> {
    try {
      const user = await fetch(`${this.url}/schedule`, {
        method: "GET",
      });
      if (!user.ok) {
        throw new Error(await user.text());
      }

      const scheduleList: ITaskList[] = await user.json();

      return scheduleList;
    } catch (error) {
      throw new Error("error", { cause: error });
    }
  }
}
