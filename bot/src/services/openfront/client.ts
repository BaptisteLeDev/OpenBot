import { config } from '../../config';

interface GameOptions {
  userId: string;
  guildId: string;
}

export class OpenFrontClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = config.openfront.url;
    this.apiKey = config.openfront.apiKey;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
      ...options.headers,
    };

    try {
      const response = await fetch(url, { ...options, headers });
      if (!response.ok) {
        throw new Error(`OpenFront API Error: ${response.status} ${response.statusText}`);
      }
      return await response.json() as T;
    } catch (error) {
      console.error(`Failed to fetch ${url}:`, error);
      throw error;
    }
  }

  public async startGame(payload: GameOptions) {
    return this.request('/games/start', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  public async stopGame(payload: GameOptions) {
    return this.request('/games/stop', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  public async getStatus() {
    return this.request<{ status: string }>('/status');
  }
}

export const openFront = new OpenFrontClient();
