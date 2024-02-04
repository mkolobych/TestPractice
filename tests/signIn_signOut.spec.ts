import { test, expect } from '@playwright/test';
import { SignInPage } from '../pageObjects/signInPage';
import { email, password } from '../pageObjects/signInPage';

test.beforeEach(async ({ page }) => {
  await page.goto("https://portal-01.hub.dev.vids.dev/auth/sign-in");
});

test.describe("Sign-in flows", () => {
  test("User can Sign-in/Sign-out from the Portal", async ({ page }) => {
    const signInPage = new SignInPage(page);
    await signInPage.loginEmailField.fill(email);
    await signInPage.loginPasswordField.fill(password);
    await signInPage.sigInButton.click();
    await expect(signInPage.dashboardTitle).toHaveText("Dashboard");

    await signInPage.signOutButton.click();
    await expect(page).toHaveTitle("Sign In - Interac Verification Service");
  });

});


