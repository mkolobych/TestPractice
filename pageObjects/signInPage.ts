import { expect, type Locator, type Page } from '@playwright/test';

export let email = "marian.kolobych+1@euristiq.com", password = "Marian12UA";

export class SignInPage {
    readonly page: Page;
    readonly loginEmailField: Locator;
    readonly loginPasswordField: Locator;
    readonly sigInButton: Locator;
    readonly dashboardTitle: Locator;
    readonly signOutButton: Locator;
    readonly signInTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginEmailField = page.locator('#email');
        this.loginPasswordField = page.locator('#password');
        this.sigInButton = page.locator('.mat-mdc-button-touch-target');
        this.dashboardTitle = page.locator('h1[class="heading-4"]');
        this.signOutButton = page.locator('.sign-out.link.secondary');
        this.signInTitle = page.locator('.heading-4');
    }

    /*async login(useremail: string, password: string) {
        await this.emailField.type(useremail);
        await this.passwordField.type(password);
        await this.submitLogIn.click();
    }*/



}