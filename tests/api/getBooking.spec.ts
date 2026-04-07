import { expect, test } from "../../fixtures"
import { TAGS } from "../../constants";


test(`Get Booking Details ${TAGS.API}`, async ({ apiHelper }) => {
    const bookingDetails = await apiHelper.getBookings(1);
    console.log("Booking Details: ", bookingDetails);
    await expect(bookingDetails).toHaveProperty("firstname");
    await expect(bookingDetails).toHaveProperty("lastname");
    await expect(bookingDetails).toHaveProperty("totalprice");
    await expect(bookingDetails).toHaveProperty("depositpaid");
    await expect(bookingDetails).toHaveProperty("bookingdates");
    await expect(bookingDetails.firstname).not.toBe("");
});