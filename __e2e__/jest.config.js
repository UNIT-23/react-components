module.exports = {
	preset         : "jest-puppeteer",
	globalSetup    : "./setup.js",
	globalTeardown : "./teardown.js",
	testEnvironment: "./puppeteer_environment.js",
	reporters      : ["default", "jest-junit"]
}
