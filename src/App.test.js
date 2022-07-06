import '@testing-library/jest-dom';

// RIP. commenting out the above import will resolve the issue
// since css.escape no longer polyfills... css.escape,
// leaving window.CSS undefined since it is not implemented
// in JSDOM
test('window.CSS is not present', () => {
  expect(() => {
    if (window.CSS && !window.CSS.supports) {
      throw new Error('window.CSS is present')
    }
  }).not.toThrow()
});
