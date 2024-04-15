import Browser from '../../framework/browser/Browser.js'
import MainPage from '../pageObjects/MainPage.js'
import FileDownloaderPage from '../pageObjects/FileDownloaderPage.js'
import { assert } from 'chai'
import { downloadDir } from '../../framework/configs/main.wdio.conf.js'
import * as path from 'path'

const fileName = 'test.txt';
const downloadedFilePath = path.join(downloadDir, fileName);

describe('File Download Test', () => {
    it('Check that file downloaded', async () => {
        await Browser.openUrl('https://the-internet.herokuapp.com/');
        assert.isTrue(await MainPage.isPageOpened(), 'Main Page is not opened');

        await MainPage.clickNavigationLink('File Download');
        assert.isTrue(await FileDownloaderPage.isPageOpened(), 'File Downloader Page is not opened');

        await FileDownloaderPage.downloadFile(fileName);
        assert.isTrue(await Browser.File.isFileExist(downloadedFilePath), 'File is not downloaded');
    })
})