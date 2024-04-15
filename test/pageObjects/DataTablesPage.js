import { Label } from '../../framework/elements/index.js'
import BasePage from '../../framework/page/BasePage.js'
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js'

class DataTablesPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('Data Tables')), 'Data Tables Page');
        
    }


}

export default new DataTablesPage();