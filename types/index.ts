export interface UserCredentials {
    username: string;
    password: string;
}

export type Environment = 'dev' |'staging' | 'production'; 

export interface BookingData {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: {
        checkin: string;
        checkout: string;
    };
    additionalneeds?: string;
}

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';