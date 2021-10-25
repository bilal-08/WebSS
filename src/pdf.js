const puppeteer = require('puppeteer');
const fs = require('fs');

const getPDF = async(url) =>{

    try {
            const browser = await puppeteer.launch({
                args : ['--no-sandbox']
            });
            const page = await browser.newPage();
            await page.goto(`http://${url}`, {
              waitUntil: 'networkidle2',
            });
            await page.pdf({ path: `./temp/${url}.pdf`, format: 'a4' });
            const pdfBuffer = fs.readFileSync(`./temp/${url}.pdf`);
            await browser.close();
            
            return pdfBuffer;
    } catch (error) {
        console.error(error);
    }
   
}
module.exports = getPDF;