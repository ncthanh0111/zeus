export const ENV: any = process.env.ENV_NAME;
export const ENV_CONFIG: JSON = require('./env-config.json')[ENV];
export const SERVER_URL: string = ENV_CONFIG["serverUrl"];