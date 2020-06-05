import { WebElement } from 'selenium-webdriver';

export class mangaUtils {
    static async get_values_byElem(elems: WebElement[], elemAttribute: string): Promise<any> {
        const mangaObj = [];
        for (const mangaWebElem of elems) {
            mangaObj.push(await mangaWebElem.getAttribute(elemAttribute));
        }
        return mangaObj;
    }
}

export default mangaUtils;
