import { APIClient } from "../../apiClient";
import { IResponse } from "../interfaces";
import { IWallets } from "./interfaces";

export class WalletService {
  private apiClient: APIClient;

  constructor() {
    if (!process.env.REACT_APP_BASE_URL) throw Error("Wallet URL not found");
    this.apiClient = new APIClient(process.env.REACT_APP_BASE_URL);
  }

  public async getWallets(): Promise<IWallets[]> {
    const response = await this.apiClient.get<Partial<IResponse>>({ url: `/bushaHQ/busha-frontend-test/wallets` });
    if (response.error) throw new Error(response.message || "Failed to fetch wallet records");
    return response as IWallets[];
  }
}
