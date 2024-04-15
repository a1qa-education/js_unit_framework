import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import FramesPage from '../pageObjects/FramePages/FramesPage.js'
import IFramePage from '../pageObjects/FramePages/IFramePage.js'
import {assert} from 'chai'

const defaultInputText = 'Your content goes here.';

describe('iFrame test', () => {
    it('Interaction with text iFrame', async() => {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');

        await MainPage.clickNavigationLink('Frames');
        assert.isTrue(await FramesPage.isPageOpened(), 'Frames Page is not opened');

        await FramesPage.clickIFrameButton();
        assert.isTrue(await IFramePage.isPageOpened(), 'iFrame Page is not opened');

        const randomString = crypto.randomUUID();
        await IFramePage.inputTextIntoTextArea(randomString);
        assert.strictEqual(await IFramePage.getTextFromInputField(), `${defaultInputText}${randomString}`, 'Wrong message into input field');

        await IFramePage.undoChanges();
        assert.strictEqual(await IFramePage.getTextFromInputField(), `${defaultInputText}`, 'Wrong message into input field');
    })
})