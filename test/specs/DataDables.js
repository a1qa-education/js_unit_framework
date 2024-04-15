import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import DataTablesPage from '../pageObjects/DataTablesPage.js'
import { assert } from 'chai'

describe('Data Table test', () => {
    it('Check sum if column lines', async () => {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');

        await MainPage.clickNavigationLink('Sortable Data Tables');
        assert.isTrue(await DataTablesPage.isPageOpened(), 'Data Tables Page is not opened');
    })
})