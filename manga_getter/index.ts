import {Builder, By} from 'selenium-webdriver';







const myAsynFunction = async () => {
    let driver = await new Builder().forBrowser('firefox').usingServer('http://unobola2001.me:4444/wd/hub').build();
    try {
        await driver.get('http://www.example.org/');
        console.log(await (await driver.findElement(By.xpath("/html/body/div/h1"))).getText())
    } finally {
    }
}
myAsynFunction()