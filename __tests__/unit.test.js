// unit.test.js

const { unregisterCustomQueryHandler } = require('puppeteer');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//testing isPhoneNumber
test('parenthesis phone number: true', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});
  
test('no parenthesis phone number: true', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('string: false', () => {
    expect(functions.isPhoneNumber("number")).toBe(false);
});

test('number: false', () => {
    expect(functions.isPhoneNumber('000')).toBe(false);
});

//testing isEmail
test('valid email 1: true', () => {
    expect(functions.isEmail('s2pai@ucsd.edu')).toBe(true);
});
  
test('valid email 2: true', () => {
    expect(functions.isEmail('xyz@gmail.com')).toBe(true);
});

test('invalid email 1: false', () => {
    expect(functions.isEmail('a@)')).toBe(false);
});

test('invalid email 2: false', () => {
    expect(functions.isEmail('1234')).toBe(false);
});

//testing StrongPassword
test('lowercase password: true', () => {
    expect(functions.isStrongPassword('a12345')).toBe(true);
});
  
test('uppercase password: true', () => {
    expect(functions.isStrongPassword('A12345')).toBe(true);
});

test('no starting letter: false', () => {
    expect(functions.isStrongPassword('1abcfd')).toBe(false);
});

test('too long: false', () => {
    expect(functions.isStrongPassword('aerd1234567891089')).toBe(false);
});

//testing isDate
test('valid date 1: true', () => {
    expect(functions.isDate('12/12/2012')).toBe(true);
});
  
test('valid date 2: true', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});

test('invalid year: false', () => {
    expect(functions.isDate('1/1/98')).toBe(false);
});

test('wrong symbol: false', () => {
    expect(functions.isDate('01-02-9000')).toBe(false);
});

//testing isHexColor
test('valid hex 1: true', () => {
    expect(functions.isHexColor('123456')).toBe(true);
});
  
test('vald hex 2: true', () => {
    expect(functions.isHexColor('abcdef')).toBe(true);
});

test('too long: false', () => {
    expect(functions.isHexColor('abcdefg')).toBe(false);
});

test('too short: false', () => {
    expect(functions.isHexColor('12')).toBe(false);
});
