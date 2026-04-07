export const API_ENV_CONFIG = {
    dev: {
        baseURL: "https://restful-booker.herokuapp.com"
    },
    staging: {
        baseURL: "https://restful-booker.herokuapp.com"
    },
    production: {
        baseURL: "https://restful-booker.herokuapp.com"
    }
};

export const UI_ENV_CONFIG = {
    dev: {
        baseURL: "https://www.saucedemo.com/"
    },
    staging: {
        baseURL: "https://www.saucedemo.com/"
    },
    production: {
        baseURL: "https://www.saucedemo.com/"
    }
};

export const TIMEOUTS = {
    DEFAULT : 30_000,
    SLOW_API: 60_000,
    ANIMATION : 500
} as const;

export const TAGS = {
    SMOKE: '@smoke',
    REGRESSION: '@regression',
    API: '@api',
    UI: '@ui'
} as const;