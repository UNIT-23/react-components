const chalk = require("chalk")
const NodeEnvironment = require("jest-environment-node")
const puppeteer = require("puppeteer")
const fs = require("fs")
const os = require("os")
const path = require("path")

const DIR = path.join(os.tmpdir(), "jest_puppeteer_global_setup")

class PuppeteerEnvironment extends NodeEnvironment {
	async setup () {
		/* eslint no-console: 0 */
		console.log(chalk.yellow("Setup Test Environment."))
		await super.setup()
		const wsEndpoint = fs.readFileSync(path.join(DIR, "wsEndpoint"), "utf8")
		if (!wsEndpoint) {
			throw new Error("wsEndpoint not found")
		}

		/* eslint no-underscore-dangle: 0 */
		this.global.__BROWSER__ = await puppeteer.connect({
			browserWSEndpoint: wsEndpoint
		})
	}

	async teardown () {
		console.log(chalk.yellow("Teardown Test Environment."))
		await super.teardown()
	}

	runScript (script) {
		return super.runScript(script)
	}
}

module.exports = PuppeteerEnvironment
