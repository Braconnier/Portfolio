window.addEventListener("DOMContentLoaded", render());

async function render() {
  await fetch("../assets/data.json")
    .then((response) => response.json())
    .then((jsondata) => {
      const reservia = jsondata.projects[0];
      let challengesHtml = "";
      reservia.challenges.forEach((challenge) => {
        challengesHtml += `<li>${challenge.value}</li>`;
      });
      document.querySelector(".highlights").innerHTML = `
        <div class="about">
            <div class="aside__description">
                <h2>Description</h2>
                <div class="aside__description--summary">${reservia.description}</div>
            </div>
            <ul>${challengesHtml}</ul>
            <h3>Lien Github
                <a href="${reservia.url}" target="_blank" noopener noreferrer>
                    <span class="icon">
                        <i class="fab fa-github-square"></i>
                    </span>
                </a>
            </h3>
            <h4 class="constraints">contrainte(s): ${reservia.constraints}</h4>
            </div>
        <div class="line"></div>
        `;
    });
}
