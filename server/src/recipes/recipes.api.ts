import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecipesApi {
    private readonly baseUrl: string;

    constructor(
        private readonly http: HttpService,
        private readonly config: ConfigService,
    ) {
        this.baseUrl = this.config.get<string>('MEALDB_API_BASE_URL') || 'https://www.themealdb.com/api/json/v1/1';
    }

    async get(path: string): Promise<any> {
        const url = `${this.baseUrl}${path}`;

        try {
            const { data } = await firstValueFrom(this.http.get(url));
            return data;
        } catch (error) {
            console.error('[RecipesApi] Failed to fetch:', url, error?.message);
            throw error;
        }
    }

    async getById(id: string): Promise<any> {
        return this.get(`/lookup.php?i=${id}`);
    }
}
