import { test, expect } from '@playwright/test';

test.describe('Portfolio smoke tests', () => {
  test('homepage loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ronald P/);
  });

  test('navigation links are visible on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Skills' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Experience' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
  });

  test('skills section renders all categories', async ({ page }) => {
    await page.goto('/');
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeVisible();
    await expect(skillsSection.getByText('Languages & Frameworks')).toBeVisible();
    await expect(skillsSection.getByText('Machine Learning & AI')).toBeVisible();
    await expect(skillsSection.getByText('DevOps & Tools')).toBeVisible();
  });

  test('experience section shows work roles', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Alpine Formula One Team')).toBeVisible();
    await expect(page.getByText('Pineamite')).toBeVisible();
  });

  test('project cards link to case studies', async ({ page }) => {
    await page.goto('/');
    const projectLink = page.getByRole('link', { name: 'F1 Performance Statistics Pipeline', exact: true });
    await expect(projectLink).toBeVisible();
    await expect(projectLink).toHaveAttribute('href', '/projects/f1-performance-pipeline/');
  });

  test('case study page loads correctly', async ({ page }) => {
    await page.goto('/projects/f1-performance-pipeline/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('F1 Performance Statistics Pipeline');
    await expect(page.getByText('Back to Projects')).toBeVisible();
  });

  test('skip link is accessible', async ({ page }) => {
    await page.goto('/');
    const skipLink = page.getByText('Skip to main content');
    await expect(skipLink).toBeAttached();
  });

  test('mobile nav toggle works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const toggleBtn = page.locator('#nav-toggle');
    const menu = page.locator('#nav-menu');
    await expect(menu).toHaveClass(/hidden/);
    await toggleBtn.click();
    await expect(menu).toBeVisible();
  });

  test('CV download link exists', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    const cvLink = page.getByRole('link', { name: 'Download CV' }).first();
    await expect(cvLink).toBeVisible();
    await expect(cvLink).toHaveAttribute('href', '/assets/cv.pdf');
  });
});
