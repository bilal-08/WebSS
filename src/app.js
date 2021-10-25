const puppeteer = require('puppeteer');
const getSS= async(url)=> {
    try {
        const browser = await puppeteer.launch({
            args : ['--no-sandbox']
        });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        await page.goto(url,{waitUntil :'load'});
        const img =await page.screenshot({fullPage : true});
        await browser.close();
        return img     
    } catch (error) {
        console.error(error)
    }
   
}
module.exports = getSS;