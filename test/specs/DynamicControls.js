import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import DynamicControlsPage from '../pageObjects/DynamicControlsPage.js'
import { assert } from 'chai'

describe('Dynamic Controls Test', () => {
    it('Check state of Dynamic control', async () => {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');

        await MainPage.clickNavigationLink('Dynamic Controls');
        assert.isTrue(await DynamicControlsPage.isPageOpened(), 'Dynamic Controls Page is not opened');

        await DynamicControlsPage.clickEnableButton();
        assert.isTrue(await DynamicControlsPage.isInputFieldEnabled(), 'Input field on Dynamic Controls Page is not enabled');

        const randomString = crypto.randomUUID();
        await DynamicControlsPage.inputTextIntoInputField(randomString);
         assert.strictEqual(await DynamicControlsPage.getText(), randomString, 'Wrong text into input field');
    })
})