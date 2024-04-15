import Browser from '../../../framework/browser/Browser.js'
import { Frame, Input, Label, Button } from '../../../framework/elements/index.js'
import BasePage from '../../../framework/page/BasePage.js'
import { PartialTextLocator } from '../../../framework/utils/locatorHelper.js'

class IFrame extends BasePage {
    constructor() {
        super(new Label(PartialTextLocator('An iFrame')), 'iFrame Page');

        this.iFrame = new Frame('//*[@title="Rich Text Area"]', 'Text Area IFrame');
        this.inputField = new Input('//*[@id="tinymce"]', 'Input field');
        this.editButton = new Button('//*[text()="Edit"]', 'Edit button');
        this.undoButton = new Button('//div[@title="Undo"]', 'Undo button');
    }

    async inputTextIntoTextArea(text) {
        await Browser.IFrame.switchToFrame(this.iFrame);
        await this.inputField.typeText(text);
        await Browser.IFrame.switchToParentFrame();
    }

    async getTextFromInputField() {
        await Browser.IFrame.switchToFrame(this.iFrame);
        const text = await this.inputField.getText();
        await Browser.IFrame.switchToParentFrame();
        return text;
    }

    async undoChanges() {
        await this.editButton.click();
        await this.undoButton.click();
    }

    async #performaActionInFrame(action) {
        await Browser.IFrame.switchToFrame(this.iFrame);
        action();
        await Browser.IFrame.switchToParentFrame();
    }
}

export default new IFrame();