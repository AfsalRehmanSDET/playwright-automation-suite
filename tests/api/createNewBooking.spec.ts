import { expect, test } from "@playwright/test"
import createBookingDetails from "../../test-data/api/createBooking.json";


test(`Create new Booking and Capture Details @create`, async ({ request }) => {
    const response = await request.post("/booking", { headers: { "Content-Type": "application/json" }, data: createBookingDetails }); 
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Booking Details: ", responseBody);
    const BookingId = responseBody.bookingid;
    console.log("Booking ID: ", BookingId);
});
