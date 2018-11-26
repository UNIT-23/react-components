describe("Duck", () => {
	let page
	beforeAll(async () => {
		/* eslint no-underscore-dangle: 0 */
		page = await global.__BROWSER__.newPage()
		await page.goto("https://duckduckgo.com", { waitUntil: "networkidle2" })
	})

	it('should display "Duck" text on page', async () => {
		await expect(page).toMatch("The search")
	})
})
