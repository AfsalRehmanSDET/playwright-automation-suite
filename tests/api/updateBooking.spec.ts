import { expect, test } from "../../fixtures"
import updateBookingDetails from "../../test-data/api/updateBooking.json";
import createBookingDetails from "../../test-data/api/createBooking.json";
import { TAGS } from "../../constants";



test(`Update Booking @update ${TAGS.API}`, async ({ apiHelper }) => {
    const createResponse = await apiHelper.createBooking(createBookingDetails);
    const BookingId = createResponse.bookingid;
    const updateResponse = await apiHelper.updateBooking(BookingId, updateBookingDetails);
    expect(updateResponse.totalprice).toBe(updateBookingDetails.totalprice);
    expect(updateResponse.additionalneeds).toBe(updateBookingDetails.additionalneeds);
});