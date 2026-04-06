import { APIRequestContext, expect } from '@playwright/test';
import authData from "../../test-data/api/auth.json";

export async function getAuthToken(request: APIRequestContext) {
    const response = await request.post("/auth", {
        data: authData
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    return body.token;
}