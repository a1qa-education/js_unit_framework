import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import DataTablesPage from '../pageObjects/DataTablesPage.js'
import { assert } from 'chai'

const expectedSum = 251;
const currencySign = '$';

describe('Data Table test', function () {
    it('Check sum if column lines', async function () {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');

        await MainPage.clickNavigationLink('Sortable Data Tables');
        assert.isTrue(await DataTablesPage.isPageOpened(), 'Data Tables Page is not opened');

        const dueArray = await (await DataTablesPage.getColumnValues()).map(element => parseFloat(element.replace(currencySign, '')));
        const dueSum = dueArray.reduce((accumulator, currentValue) => accumulator + currentValue);
        
        assert.strictEqual(dueSum, expectedSum, 'Sum of due column values is not correct');
    })
})