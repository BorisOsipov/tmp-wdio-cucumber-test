import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I am on the (\w+) page$/, async (page) => {
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
});

