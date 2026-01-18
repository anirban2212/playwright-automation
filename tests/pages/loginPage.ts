import { pageFixture } from "../../src/hooks/pageFixture";
import { logger } from "../../src/logger/logger";

export default class LoginPage {
    // Define selectors using getter methods
 private loginPageElements = {
        usernameInput: 'input#username',
        passwordInput: 'input#password',
        loginButton: 'button#login',
        errorMessage: 'div.error-message'
    };

    // Method to navigate to the login page
    async navigateToLoginPage() {
        let url: any = process.env.BASEURL!;
        await pageFixture.page.goto(url, { waitUntil: 'domcontentloaded' });
        logger.info(`Navigated to login page: ${url}`);
    }
}