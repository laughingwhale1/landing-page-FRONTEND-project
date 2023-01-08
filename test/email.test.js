// const assert = require('assert');
// const {validate} = require('../src/email.js')

import {assert, expect} from 'chai';
import {validate, validateWithThrow, validateWithLog} from '../src/email.js';
import {validateAsync} from '../src/email.js';
import {sinon} from 'sinon';


describe('the validate function itself', () => {
    it('g@gmail.com should return true', () => {
        const result = validate('g@gmail.com')
        assert.equal(result, true)
    });
    it('g@gmail should return false', () => {
        const result = validate('g@gmail')
        assert.equal(result, false)
    });
    it('g@yandex.ru should return true', () => {
        const result = validate('g@yandex.ru')
        assert.equal(result, true)
    });
    it('g@outlook.com should return true', () => {
        const result = validate('g@outlook.com')
        assert.equal(result, true)
    });
});

describe('the validate async function', () => {
    it('g@gmail.com should return true', async () => {
        return validateAsync('g@gmail.com')
        .then(res => res, true)
    });
    it('g@gmail should return false', async () => {
        const result = await validateAsync('g@gmail')
        assert.equal(result, false)
    });
    it('g@yandex.ru should return true', async () => {
        const result = await validateAsync('g@yandex.ru')
        assert.equal(result, true)
    });
    it('g@outlook.com should return true', async () => {
        const result = await validateAsync('g@outlook.com')
        assert.equal(result, true)
    });
})

describe('the validate function with error throwing', () => {
    let sinon = require('sinon');
    it('g@gmail.com should return true', () => {
        const result = validateWithThrow('g@gmail.com')
        assert.equal(result, true)
    });
    it('g@gmail should throw error', () => {
        expect(() => validateWithThrow('g@gmail')).to.throw(Error, "Email invalid")
        // assert.throws(validateWithThrow('g@gmail'), Error, 'Email invalid')
    })
});

describe('the validate function with console.log', () => {
    let sinon = require('sinon');
    const prev = console.log
    it('g@gmail.co should log false', () => {
        console.log = prev
        let spy = sinon.spy(console, "log");
        validateWithLog('g@gmail.co')
        assert.equal(spy.calledWith(false), true)
    });
    it('g@gmail.com should log true', () => {
        console.log = prev
        let spy = sinon.spy(console, "log");
        validateWithLog('g@gmail.com')
        assert.equal(spy.calledWith(true), true)
    });
});