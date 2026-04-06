import { expect, test } from "@playwright/test"

test("Get Details of Booking Id 1", async ({ request }) => {
    const response = await request.get("/booking/1"); 
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Booking Details: ", responseBody);
    await expect(responseBody).toHaveProperty("firstname");
    await expect(responseBody).toHaveProperty("lastname");
    await expect(responseBody).toHaveProperty("totalprice");
    await expect(responseBody).toHaveProperty("depositpaid");
    await expect(responseBody).toHaveProperty("bookingdates");
    await expect(responseBody.firstname).not.toBe("");
});