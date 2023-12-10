(() => {

	const outputElement = document.getElementById('output');

	const getURLList = async () => {

		const windows = await chrome.windows.getAll({ populate: true });

		// 
		const urlList = windows
			.map(w => w.tabs
				.map(tab => `// ${tab.title}\n${tab.url}`)
				.join('\n')
			)
			.join('\n\n');

		await navigator.clipboard.writeText(urlList);

		outputElement.innerHTML = 'コピーしました。';

	};

	// 
	const buttonGet = document.getElementById('get-button');

	buttonGet.addEventListener('click', async event => {
		await getURLList();
	});

})();
