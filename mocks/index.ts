/* eslint-disable global-require */
if (typeof window !== 'undefined') {
  const { worker } = require('./browser');
  worker.start();
}

export {};
