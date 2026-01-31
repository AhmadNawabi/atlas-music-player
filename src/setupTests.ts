const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

console.warn = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('HTMLMediaElement')) return;
  originalConsoleWarn(...args);
};

console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('HTMLMediaElement')) return;
  originalConsoleError(...args);
};

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
