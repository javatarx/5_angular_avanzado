import { browser, by, element } from "protractor";

export class AppPage {
	navigateTo() {
		return browser.get("/");
	}

	getParagraphText() {
		return element(
			by.css("cf-root cf-nav cf-title a")
		).getText();
	}
}
