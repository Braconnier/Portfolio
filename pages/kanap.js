window.addEventListener('DOMContentLoaded', render())

async function render() {
    await fetch("../assets/data.json")
        .then(response => response.json())
        .then(jsondata => {
            const kanap = jsondata.projects[3];
            console.log(kanap);
            let challengesHtml = '';
            kanap.challenges.forEach(challenge => {
                challengesHtml += `<li>${challenge.value}</li>`
            });
            document.querySelector('.highlights').innerHTML = `
                <div class="about">
                    <div class="aside__description">
                        <h2>Description</h2>
                        <div>${kanap.description}</div>
                    </div>
                    <ul>${challengesHtml}</ul>
                    <h3>Lien Github
                        <a href="${kanap.url}" target="_blank" noopener noreferrer>
                            <span class="icon">
                                <i class="fab fa-github-square"></i>
                            </span>
                        </a>
                    </h3>
                    <h4 class="constraints">contrainte(s): ${kanap.constraints}</h4>
                    </div>
                    <div class="line"></div>
                `
        })
}