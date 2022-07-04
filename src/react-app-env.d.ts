/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_OPEN_WEATHER_MAP_KEY: string;
    REACT_APP_OPEN_WEATHER_MAP_URL: string;
  }
}
