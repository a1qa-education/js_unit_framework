import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import JavaScriptAlertsPage from '../pageObjects/JavaScriptAlertsPage.js'
import { assert } from 'chai'

const successfulMessage = 'You successfully clicked an alert';

describe('Alert Tests', function () {
    it('Interation with JavaScript Alert', async function () {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        await MainPage.clickNavigationLink('JavaScript Alerts');
        
        await JavaScriptAlertsPage.clickForJSAlertButton();
        
        await JavaScriptAlertsPage.acceptJSAlert();
        assert.strictEqual(await JavaScriptAlertsPage.getResultText(), successfulMessage, 'Wrong result of interation with JSAlert');
    })
})