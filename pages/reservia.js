const render = async () => {
    await fetch("../assets/data.json")
        .then(response => response.json())
        .then(jsondata => {
            const reservia = jsondata.projects[0];
            let challengesHtml = '';
            reservia.challenges.forEach(challenge => {
                challengesHtml += `<li>${challenge.value}</li>`
            });
            document.querySelector('.highlights').innerHTML = `
            <aside class="title">${reservia.name}</aside>
            <div>${reservia.description}</div>
            <ul>${challengesHtml}</ul>
            <a href="${reservia.url}" target="_blank" noopener noreferrer>Lien Github</a>`
            console.log(reservia);
        })
}
render()