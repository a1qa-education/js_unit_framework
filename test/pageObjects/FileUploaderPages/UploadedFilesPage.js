import BasePage from '../../../framework/page/BasePage.js'
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js'
import { Label } from '../../../framework/elements/index.js'

class UploadedFilesPage extends BasePage{
    constructor(){
        super((PreciseTextLocator('JavaScript Alerts')), 'JavaScript Alerts Page');

        this.uploadedFilesLabel = new Label('[id="uploaded-files"]', 'Uploaded Files Label');
    }

    async getUploadedFilesList() {
        return await this.uploadedFilesLabel.getText();
    }
}

export default new UploadedFilesPage();