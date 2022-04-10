window.addEventListener('DOMContentLoaded', render())

async function render() {
    await fetch("../assets/data.json")
        .then(response => response.json())
        .then(jsondata => {
            const agence = jsondata.projects[2];
            console.log(agence);
            let challengesHtml = '';
            agence.challenges.forEach(challenge => {
                challengesHtml += `<li>${challenge.value}</li>`
            });
            document.querySelector('.highlights').innerHTML = `
                <div class="about">
                    <div class="aside__description">
                        <h2>Description</h2>
                        <div>${agence.description}</div>
                    </div>
                    <ul>${challengesHtml}</ul>
                    <h3>Lien Github
                        <a href="${agence.url}" target="_blank" noopener noreferrer>
                            <span class="icon">
                                <i class="fab fa-github-square"></i>
                            </span>
                        </a>
                    </h3>
                    <h4 class="constraints">contrainte(s): ${agence.constraints}</h4>
                    </div>
                    <div class="line"></div>
                `
        })
}