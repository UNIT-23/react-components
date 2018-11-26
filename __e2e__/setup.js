const chalk = require("chalk")
const puppeteer = require("puppeteer")
const fs = require("fs")
const mkdirp = require("mkdirp")
const os = require("os")
const path = require("path")

const DIR = path.join(os.tmpdir(), "jest_puppeteer_global_setup")

module.exports = async function () {
	/* eslint no-console: 0 */
	console.log(chalk.green("Setup Puppeteer"))
	const browser = await puppeteer.launch({
		args: ["--no-sandbox", "--disable-setuid-sandbox"]
	})
	// This global is not available inside tests but only in global teardown
	/* eslint no-underscore-dangle: 0 */
	global.__BROWSER_GLOBAL__ = browser
	// Instead, we expose the connection details via file system to be used in tests
	mkdirp.sync(DIR)
	fs.writeFileSync(path.join(DIR, "wsEndpoint"), browser.wsEndpoint())
}
