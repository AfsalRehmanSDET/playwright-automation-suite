import { expect, test } from "@playwright/test"
import partialUpdate from "../../test-data/api/partialUpdate.json";
import { getAuthToken } from "../../utils/api/apiHelper";
import createBookingDetails from "../../test-data/api/createBooking.json";


test(`Update Partial Booking Details @partialUpdate`, async ({ request }) => {
    const createResponse = await request.post("/booking", { headers: { "Content-Type": "application/json" }, data: createBookingDetails }); 
    expect(createResponse.status()).toBe(200);
    const createResponseBody = await createResponse.json();
    const BookingId = createResponseBody.bookingid;
    console.log("Booking ID: ", BookingId);
    const token = await getAuthToken(request);
    const updateresponse = await request.patch("/booking/" + BookingId, { headers: { "Content-Type": "application/json", "Accept": "application/json", "Cookie": "token=" + token  }, data: partialUpdate }); 
    expect(updateresponse.status()).toBe(200);
    const updateResponseBody = await updateresponse.json();
    console.log("Updated Booking Details");

    test.expect(updateResponseBody.totalprice).toBe(partialUpdate.totalprice);
    test.expect(updateResponseBody.firstname).toBe(partialUpdate.firstname);
    test.expect(updateResponseBody.lastname).toBe(partialUpdate.lastname);
    test.expect(updateResponseBody.depositpaid).toBe(partialUpdate.depositpaid);

    console.log("Total Price: ", updateResponseBody.totalprice);
    console.log("Firstname : ", updateResponseBody.firstname);
    console.log("Lastname : ", updateResponseBody.lastname);
    console.log("Deposit Paid : ", updateResponseBody.depositpaid);
    console.log("Booking Details Partially Updated Successfully");

    const deleteResponse = await request.delete("/booking/" + BookingId, { headers: { "Cookie": "token=" + token  } });
    expect(deleteResponse.status()).toBe(201);
    console.log("Booking Deleted Successfully");
});