import {Builder, By} from "selenium-webdriver"
class mangaIdScrap{
     mangakakalotIdByName = async (url: string) => {
        let driver = await new Builder().forBrowser('firefox').usingServer('http://unobola2001.me:4444/wd/hub').build();
        try {
            await driver.get('http://www.example.org/');
            return await driver.findElement(By.xpath("/html/body/div/h1")).getText()

        }
        finally{
            console.log("sspo")
        }

        
    }
    static mangakakalotIdByName: Function;
}
export default mangaIdScrap