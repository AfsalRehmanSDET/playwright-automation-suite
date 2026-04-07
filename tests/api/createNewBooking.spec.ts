import { TAGS } from "../../constants";
import { expect, test } from "../../fixtures"
import createBookingDetails from "../../test-data/api/createBooking.json";


test(`Create new Booking and Capture Details @create ${TAGS.API}`, async ({ apiHelper }) => {
    const bookingResponse = await apiHelper.createBooking(createBookingDetails);
    console.log("Booking Details: ", bookingResponse);
    const BookingId = bookingResponse.bookingid;
    console.log("Booking ID: ", BookingId);
    expect(BookingId).not.toBe("")
});