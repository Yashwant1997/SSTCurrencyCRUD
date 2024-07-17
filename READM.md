


//locators for HomePage: click lookups

  await page.getByRole('link', { name: 'Lookups' }).click();

// CUrrencyPage: click currency, click create currency
  await page.locator('a').filter({ hasText: 'CURRENCY' }).click();
  await page.getByRole('button', { name: 'Create Currency' }).click();


//Currency Page: Fill currency related box and do validations
  await page.locator('tlmv-container').getByRole('textbox').first().click();
  await page.locator('tlmv-form-field').filter({ hasText: 'Currency This field is' }).getByRole('textbox').click();
  await page.locator('tlmv-form-field').filter({ hasText: 'Currency This field is' }).getByRole('textbox').fill('YSP');
  await page.locator('tlmv-form-field').filter({ hasText: 'Decimal Places' }).getByRole('textbox').click();
  await page.locator('#cdk-overlay-55').getByText('2').click();
  
  await page.locator('tlmv-form-field').filter({ hasText: 'Redenomination Currency' }).getByRole('textbox').click();
  await page.locator('tlmv-form-field').filter({ hasText: 'Redenomination Currency' }).getByRole('textbox').fill('LOK');

  await page.locator('tlmv-form-field').filter({ hasText: 'Redenomination Rate' }).getByRole('textbox').click();
  await page.locator('tlmv-form-field').filter({ hasText: 'Redenomination Rate' }).getByRole('textbox').fill('2.76');

  await page.locator('textarea').click();
  await page.locator('textarea').fill('Created ');

// currency Page: save and read msg
  //*[@data-locator="currency-form-button-toolbar" ]//span[contains(text(),'Save')]