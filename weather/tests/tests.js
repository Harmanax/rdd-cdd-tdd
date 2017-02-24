'use strict';

const chai = require('chai');
chai.should();

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

	describe("linkTo", function(){
		expect(pkg.linkTo).to.exist;
	})
});
