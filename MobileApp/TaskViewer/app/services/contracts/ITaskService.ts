import { ITaskList } from "../../utils/ITaskList";

export interface ITaskService {
  getTaskList(): Promise<ITaskList[]>;
}
