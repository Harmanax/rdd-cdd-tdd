'use strict';

const chai = require('chai');
chai.should();

var expect = require("chai").expect;

var assert = require('assert');
const meow = require('meow');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

const weather = require('../index.js');


describe('Weather', () => {
	it('should get the weather', function() {
		assert.notEqual(undefined, meow);
    	assert.notEqual(undefined, chalk);
    	assert.notEqual(undefined, updateNotifier);
	});

	it("linkTo", function(){
		expect(pkg).to.exist;
		expect(weather).to.exist;
	});
});
