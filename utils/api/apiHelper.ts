import { APIRequestContext, expect } from '@playwright/test';
import authData from "../../test-data/api/auth.json";
import { logger } from './logger';
import { BookingData } from '../../types';

export class APIHelper {
    private request: APIRequestContext;
    private token: string = '';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getAuthToken(request: APIRequestContext) {
        logger.info("Fetching auth token...");
        const response = await request.post("/auth", {
            data: authData
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        this.token = body.token;
        logger.info("Auth token fetched successfully.");
        return this.token;
    }

    private getAuthHeaders() {
        return {
            'Content-Type': 'application/json',
            'Cookie': `token=${this.token}`
        };
    }

    async getBookings(bookingId: number) {
        logger.info(`Fetching booking with ID: ${bookingId}...`);
        const response = await this.request.get(`/booking/${bookingId}`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        logger.info(`Booking with ID: ${bookingId} fetched successfully.`);
        return body;
    }

    async createBooking(data: BookingData) {
        logger.info("Creating booking...");
        const response = await this.request.post("/booking", {
            data: data,
            headers: this.getAuthHeaders()
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        logger.info(`Booking created with ID: ${body.bookingid}`);
        return body;
    }

    async updateBooking(bookingId: number, data: BookingData) {
        logger.info(`Updating booking with ID: ${bookingId}...`);
        const response = await this.request.put(`/booking/${bookingId}`, {
            data: data,
            headers: this.getAuthHeaders()
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        logger.info(`Booking with ID: ${bookingId} updated successfully.`);
        return body;
    }

    async updatePartialBooking(bookingId: number, data: BookingData) {
        logger.info(`Updating booking with ID: ${bookingId}...`);
        const response = await this.request.patch(`/booking/${bookingId}`, {
            data: data,
            headers: this.getAuthHeaders()
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        logger.info(`Booking with ID: ${bookingId} updated successfully.`);
        console.log("Updated Booking Details: ", body);
        return body;
    }

    async deleteBooking(bookingId: number) {
        logger.info(`Deleting booking with ID: ${bookingId}...`);
        const response = await this.request.delete(`/booking/${bookingId}`, {
            headers: this.getAuthHeaders()
        });
        expect(response.status()).toBe(201);
        logger.info(`Booking with ID: ${bookingId} deleted successfully.`);
    }

}

