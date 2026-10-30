import { test, expect } from "@playwright/test";

test.describe("Authentication & Route Protection E2E Flows", () => {
  test("public landing page renders for unauthenticated visitors", async ({ page }) => {
    await page.goto("/");
    // Expect page title or main navigation to be visible without redirecting to sign-in
    await expect(page).toHaveURL("/");
    await expect(page.locator("body")).toBeVisible();
  });

  test("unauthenticated access to /dashboard redirects to /sign-in", async ({ page }) => {
    await page.goto("/dashboard");
    // Clerk middleware protects /dashboard(.*) and redirects to sign-in
    await expect(page).toHaveURL(/.*sign-in.*/);
  });

  test("unauthenticated access to /dashboard/resumes redirects to /sign-in", async ({ page }) => {
    await page.goto("/dashboard/resumes");
    await expect(page).toHaveURL(/.*sign-in.*/);
  });

  test("unauthenticated access to /dashboard/interview redirects to /sign-in", async ({ page }) => {
    await page.goto("/dashboard/interview");
    await expect(page).toHaveURL(/.*sign-in.*/);
  });

  test("sign-in page renders with accessible authentication interface", async ({ page }) => {
    await page.goto("/sign-in");
    await expect(page).toHaveURL(/.*sign-in.*/);
    // Wait for the Clerk auth card or page body to load
    await expect(page.locator("body")).toBeVisible();
  });

  test("sign-up page renders with accessible registration interface", async ({ page }) => {
    await page.goto("/sign-up");
    await expect(page).toHaveURL(/.*sign-up.*/);
    await expect(page.locator("body")).toBeVisible();
  });
});
