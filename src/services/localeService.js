const contentInitializer = async (selectedLocale) => {
	let locale = selectedLocale;
	let content  = await import(`./../locale/${locale}.json`);
	if (!content) {
		console.log(`${selectedLocale} locales not found, falling back to default en locales !!!`);
		locale = 'en';
		content = await import('./../locale/en.json')
	}
	return {
		locale,
		getContent: function(key) {
			return content[key] || key;
		}
	}
}

export default {
	contentInitializer
};

