const appForm = document.forms.searchForm;
const searchResult = document.querySelector('.search-result__wrapper');

appForm.addEventListener('submit', handleFormSubmit)

async function handleFormSubmit (e){
	const searchText = appForm.searchInput.value
	e.preventDefault();
	
  const reposItems = await getRepos(searchText)
	.then(reposList => reposList.items)
	.then(reposItems => reposItems.slice(0, 10))
	reposItems.length > 0 ? drawResult(reposItems) : drawError(searchResult,'Ничего не найдено')


	e.target.reset()
	appForm.searchInput.blur()
}

async function getRepos(searchText){
	const headers = {
			'Content-Type': 'application/json'
		}
	this.url = 'https://api.github.com/search/'
	this.listOrg = 'repositories?q='
	let response = await fetch(`${this.url}${this.listOrg}${searchText}`,{
		method:'GET',
		headers: headers
	})
	if (response.ok){
		return await response.json()
	}else{
		console.log('HTML error status: ', response.status)
	}
}

function drawResult(reposItems){
	// Update
	while (searchResult.firstChild){
		searchResult.removeChild(searchResult.firstChild);
	}
	// Render
	reposItems.forEach((item, id) => {
		const result = validation(item)
		searchResult.insertAdjacentHTML(
			"beforeend",
			`<div class = "search__result search-result" id = "${id}">
				<a href = '${result.user.loginLink}' class = "search-result__loginLink">
					<img class = "${result.user.loginAvatarSelector}" src="${result.user.loginAvatar}">
					<p class = "${result.user.loginSelector}">${item.owner.login}</p>
				</a>
				<a href = '${result.rep.nameLink}' class = "${result.rep.nameSelector}">Репозиторий: ${result.rep.name}</a>
				<p class = "${result.rep.descSelector}">Описание:<br>${result.rep.desc}</p>
				<div class = "search-result__footer">
					<p class = "${result.rep.languageSelector}">Язык программирования: ${result.rep.language}</p>
					<p class = "${result.rep.updatedSelector}">Последняя дата обновления: ${result.rep.updated}</p>
				</div>
			</div>`
		)
	});
}
function drawError(element , error){
	while (searchResult.firstChild){
		searchResult.removeChild(searchResult.firstChild);
	}
	element.insertAdjacentHTML(
		"afterbegin",
		`<div class = "search-result_error">
			${error}
		</div>`
	);
}

function validation (item){
	let resultCfg = {
		user: {
			login: item.ownerlogin,
			loginAvatar: item.owner.avatar_url,
			loginSelector: 'search-result__login',
			loginAvatarSelector: 'search-result__img',
			loginLink : item.owner.html_url
		},
		rep:{
			name: item.name,
			desc:  item.description,
			language: item.language,
			updated: item.updated_at,
			nameSelector: 'search-result__name',
			descSelector: 'search-result__description',
			languageSelector: 'search-result__language',
			updatedSelector: 'search-result__dateUpdate',
			nameLink: item.html_url

		}
	}
	resultCfg.rep.desc == null ? resultCfg.rep.descSelector += ' _hidden': true
	resultCfg.rep.language == null ? resultCfg.rep.languageSelector += ' _hidden': true
	resultCfg.rep.updated = resultCfg.rep.updated.slice(0, 10)

	return resultCfg
}