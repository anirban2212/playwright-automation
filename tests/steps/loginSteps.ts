import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/loginPage';
const loginPage=new LoginPage();

         Given('User navigates to the login page', async function () {
           await loginPage.navigateToLoginPage();
         });

         When('User enters username {string} and password {string}', async function (string, string2) {
           
         });

         When('User clicks on the login button', async function () {
          
         });

         Then('User should be logged in successfully', async function () {
          
         });
    