import { expect, test } from "@playwright/test"
import updateBookingDetails from "../../test-data/api/updateBooking.json";
import { getAuthToken } from "../../utils/api/apiHelper";
import createBookingDetails from "../../test-data/api/createBooking.json";


test(`Update Booking @update`, async ({ request }) => {
    const createResponse = await request.post("/booking", { headers: { "Content-Type": "application/json" }, data: createBookingDetails }); 
    expect(createResponse.status()).toBe(200);
    const createResponseBody = await createResponse.json();
    console.log("Booking Details: ");
    const BookingId = createResponseBody.bookingid;
    console.log("Booking ID: ", BookingId);
    const token = await getAuthToken(request);
    const updateresponse = await request.put("/booking/" + BookingId, { headers: { "Content-Type": "application/json", "Accept": "application/json", "Cookie": "token=" + token  }, data: updateBookingDetails }); 
    expect(updateresponse.status()).toBe(200);
    const updateResponseBody = await updateresponse.json();
    console.log("Updated Booking Details: ");

    test.expect(updateResponseBody.totalprice).toBe(updateBookingDetails.totalprice);
    test.expect(updateResponseBody.additionalneeds).toBe(updateBookingDetails.additionalneeds);

    console.log("Total Price: ", updateResponseBody.totalprice);
    console.log("Additional Needs : ", updateResponseBody.additionalneeds);
    console.log("Booking Details Updated Successfully");

    const deleteResponse = await request.delete("/booking/" + BookingId, { headers: { "Cookie": "token=" + token  } });
    expect(deleteResponse.status()).toBe(201);
    console.log("Booking Deleted Successfully");

});