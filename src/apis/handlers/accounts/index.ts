import { APIClient } from "../../apiClient";
import { IResponse } from "../interfaces";
import { IAccounts, ICreateAccountInput } from "./interfaces";

export class AccountService {
  private apiClient: APIClient;

  constructor() {
    if (!process.env.REACT_APP_BASE_URL) throw Error("Account URL not found");
    this.apiClient = new APIClient(process.env.REACT_APP_BASE_URL);
  }

  public async getAccounts(): Promise<IAccounts[]> {
    const response = await this.apiClient.get<Partial<IResponse>>({ url: `/bushaHQ/busha-frontend-test/accounts` });
    if (response.error) throw new Error(response.message || "Failed to fetch account records");
    return response as IAccounts[];
  }

  public async createAccount({ currency }: ICreateAccountInput): Promise<IAccounts[]> {
    const response = await this.apiClient.post<Partial<IResponse>>({ url: `/bushaHQ/busha-frontend-test/accounts`, data: {currency}});
    if (response.error) throw new Error(response.message || "Failed to fetch account records");
    return response as IAccounts[];
  }
}

