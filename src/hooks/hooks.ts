import { Browser, chromium } from "playwright";
import { pageFixture } from "./pageFixture";
import { Before,BeforeAll,AfterAll,After,setDefaultTimeout, Status } from "@cucumber/cucumber";
import dotenv from "dotenv";
import { logger } from "../logger/logger";

let browser: Browser;

setDefaultTimeout(60*1000);

BeforeAll(async function () {
    dotenv.config({path: `{process.cwd()}/env/.env/${process.env.environment ?? "dev"}`});
    console.log(`Running tests on environment: ${process.env.environment ?? "dev"}`);

    browser = await chromium.launch({ 
        headless: process.env.HEADLESSS?.toLowerCase() == "true",
    });
    logger.info("Browser launched successfully");
});

Before(async function (scenario) {
    const context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    this.attach(`----scenario started: ${scenario.pickle.name} ----`);
    logger.info(`Scenario started: ${scenario.pickle.name}`);

});

After(async function (scenario) {
    const shortName= scenario.pickle.name.substring(0,30);
    logger.info(`scenario ended: ${shortName}...`);
    logger.info(`<<< scenario status: ${scenario.result?.status} >>>>>`);
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await pageFixture.page.screenshot({  
            path: `./test-results/screenshots/${shortName}.png`, 
            fullPage: true 
        });
        this.attach(screenshot, "image/png");
    }
    await pageFixture.page.close();
    logger.info(`Scenario ended: ${shortName} with status: ${scenario.result?.status}`);
});

AfterAll(async function () { 
    await browser.close();
    logger.info("Browser closed successfully");
});      