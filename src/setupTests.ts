if (typeof window !== 'undefined') {
  const noop = () => {};

  const mediaProto = window.HTMLMediaElement?.prototype;
  
  if (mediaProto) {

    (mediaProto as any).play = noop;
    (mediaProto as any).pause = noop;
    (mediaProto as any).load = noop;
    (mediaProto as any).canPlayType = () => '';
    (mediaProto as any).fastSeek = noop;
    (mediaProto as any).addTextTrack = noop;
    
    // Patch properties
    Object.defineProperty(mediaProto, 'volume', {
      get: () => 1,
      set: () => {},
      configurable: true
    });
    
    Object.defineProperty(mediaProto, 'muted', {
      get: () => false,
      set: () => {},
      configurable: true
    });
  }
}

// MSW SETUP
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
