import { Frame, Input } from '../../../framework/elements/index.js'
import BasePage from '../../../framework/page/BasePage.js'

class IFrame extends BasePage {
    constructor() {
        super(new Frame('//*[@title="Rich Text Area"]', 'Text Area IFrame'));

        this.inputField = new Input('//*[@id="tinymce"]', 'Input field');
    }

    async inputTextIntoTextArea(text) {
        await this.inputField.typeText(text);
    }

    async getTextFromInputField() {
        return await this.inputField.getText();
    }
}

export default new IFrame();