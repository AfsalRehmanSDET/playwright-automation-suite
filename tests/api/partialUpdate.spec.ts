import { expect, test } from "../../fixtures"
import partialUpdate from "../../test-data/api/partialUpdate.json";
import { TAGS } from "../../constants";
import createBookingDetails from "../../test-data/api/createBooking.json";

test(`Update Partial Booking Details @partialUpdate ${TAGS.API}`, async ({ apiHelper }) => {
    const createResponse = await apiHelper.createBooking(createBookingDetails);
    const BookingId = createResponse.bookingid;
    const updateResponse = await apiHelper.updatePartialBooking(BookingId, partialUpdate);
    expect(updateResponse.totalprice).toBe(partialUpdate.totalprice);
    expect(updateResponse.firstname).toBe(partialUpdate.firstname);
    expect(updateResponse.lastname).toBe(partialUpdate.lastname);
    expect(updateResponse.depositpaid).toBe(partialUpdate.depositpaid);
    const deleteResponse = await apiHelper.deleteBooking(BookingId);
});

