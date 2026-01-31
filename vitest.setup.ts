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
