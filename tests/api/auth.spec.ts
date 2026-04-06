import { expect, test } from "@playwright/test"
import { getAuthToken } from "../../utils/api/apiHelper";

test("Generate auth token", async ({ request }) => {
    const token = await getAuthToken(request);
    console.log("Token: ", token);
    expect(token).toBeDefined();
});