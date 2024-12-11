import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: "https://app-fe8itjcv4qcd.frontegg.com",
        env: {
          loginUrl: "/oauth/account/login",
        },
      },
    })