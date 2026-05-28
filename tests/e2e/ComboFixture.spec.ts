import {test,expect }from '../../fixtures/fixtures';

test('Fixture ComboGifts Test', async ({ comboPage }) => {

    await comboPage.goto();
    console.log( await comboPage.getProductTitle());
    console.log( await comboPage.getProductPrice());
});