import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import JavaScriptAlertsPage from '../pageObjects/JavaScriptAlertsPage.js'
import { assert } from 'chai'

const successfulMessage = 'You successfully clicked an alert';

describe('Alert Tests', () => {
    it('Interation with JavaScript Alert', async () => {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');

        await MainPage.clickNavigationLink('JavaScript Alerts');
        assert.isTrue(await JavaScriptAlertsPage.isPageOpened(), 'JavaScript Alerts Page is not opened');

        await JavaScriptAlertsPage.clickForJSAlertButton();
        await JavaScriptAlertsPage.acceptJSAlert();
        assert.strictEqual(await JavaScriptAlertsPage.getResultText(), successfulMessage, 'Wrong result of interation with JSAlert');
    })
})