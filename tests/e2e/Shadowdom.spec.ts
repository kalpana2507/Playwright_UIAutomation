import {test,expect }from '../../fixtures/fixtures';

test('Shadow DOM Test', async ({ shadowPage }) => {

    await shadowPage.isLoaded();
    await shadowPage.enterShadowText('Hello Shadow DOM');
    await shadowPage.enterNestedShadowText('Hello Nested Shadow DOM');
});