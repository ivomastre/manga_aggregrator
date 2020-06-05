import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { mangaUtils } from '../../utils/scraping/mangaIdUtils';
import { link } from 'fs';
import { url } from 'inspector';
export default class mangaIdScrap {
    mangakakalot = {
        test: function (): string {
            return 'fudue';
        },
        mangakakalotIdByName: async function (mangaName: string): Promise<any> {
            const painelMangaXPATH = '/html/body/div[1]/div[2]/div[1]/div[3]/div/div/a';
            const mangaNameXPATH = '/html/body/div[1]/div[2]/div[1]/div[3]/div/div/div/h3/a';
            const linkUrl = 'https://mangakakalot.com/search/';
            const driver = await new Builder()
                .forBrowser('firefox')
                .usingServer('http://unobola2001.me:4444/wd/hub')
                .build();
            try {
                const mangaNameUrl = mangaName.replace(' ', '_');
                await driver.get(linkUrl.concat(mangaNameUrl));
                const painelMangaScrap = await driver.wait(until.elementsLocated(By.xpath(painelMangaXPATH)), 500);
                const mangaInfosScrap = await driver.wait(until.elementsLocated(By.xpath(mangaNameXPATH)), 500);
                const mangaUrls = await mangaUtils.get_values_byElem(painelMangaScrap, 'href');
                const mangaNames = await mangaUtils.get_values_byElem(mangaInfosScrap, 'text');
                const result = [];

                for (let index = 0; index < mangaUrls.length; index++) {
                    result.push({ mangaName: mangaNames[index], mangaUrls: mangaUrls[index] });
                }

                return result;
            } finally {
                driver.close();
            }
        },
    };
    static mangakakalot: string;
}
