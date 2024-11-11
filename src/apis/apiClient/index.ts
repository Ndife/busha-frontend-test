import type { IResponse } from "../handlers/interfaces";

interface RequestOptions extends RequestInit {
  retry?: boolean;
}

interface RequestInput {
  url: string;
  data?: any;
  options?: RequestOptions;
}

interface MutationRequestInput extends RequestInput {
  data: any;
}

export class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async post<T>({ url, data, options }: MutationRequestInput): Promise<T> {
    return this.request<T>("POST", url, data, options);
  }

  async get<T>({ url, data, options }: RequestInput): Promise<T> {
    return this.request<T>("GET", url, data, options);
  }

  private async request<T>(
    method: string,
    url: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<T> {
    const fullUrl = new URL(url, this.baseURL).toString();
    const requestOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    if (data) {
      requestOptions.body = JSON.stringify(data);
    }

    try {
      const response: Response = await fetch(fullUrl, requestOptions);
      const responseData: IResponse = await response.json();
      if (!response.ok) {
        throw new Error(
          responseData.message || `Request failed with status ${response.status}`,
        );
      }
      return responseData as unknown as T;
    } catch (error: any) {
      throw error; // Remove retry logic
    }
  }
}
