import { Label, Input, Button } from '../../framework/elements/index.js'
import BasePage from '../../framework/page/BasePage.js'
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js'

class DynamicControlsPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Dynamic Controls')), 'Dynamic Controls Page');

        this.enableButton = new Button('//*[@onclick="swapInput()"]', 'Enable Button');
        this.inputField = new Input('//input[@type="text"]', 'Input Field');
    }

    async clickEnableButton() {
        await this.enableButton.click();
    }

    async isInputFieldEnabled() {
        return await this.inputField.state().waitForEnabled();
    }

    async inputTextIntoInputField(text) {
        await this.inputField.type(text);
    }

    async getText() {
        return await this.inputField.getText();
    }
}

export default new DynamicControlsPage();