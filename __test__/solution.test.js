
'use strict';

const isPalindrome = require('../solution.js');
require('jest');

let goodLinkList = { value: 10, next: { value: 12, next: { value: 15, next: { value: 12, next: { value: 10 } } } } }
let badLinkList = { value: 10, next: { value: 123, next: { value: 20200, next: { value: 30300, next: { value: 10 } } } } }

describe('Palindrome Function', function () {
  it('should return true when the LL is a palindrome', function () {
    expect(isPalindrome(goodLinkList)).toBe(true);
  });
  it('should throw an error when there is no ll provided', function () {
    expect(() => {
      return isPalindrome();
    }).toThrow();
  });
  it('should return fail when the LL is not a palindrome', function () {
    expect(isPalindrome(badLinkList)).toBe(false);
  })
})