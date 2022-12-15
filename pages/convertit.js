window.addEventListener("DOMContentLoaded", render());

async function render() {
  await fetch("../assets/data.json")
    .then((response) => response.json())
    .then((jsondata) => {
      const convertit = jsondata.projects[6];
      console.log(convertit);
      let challengesHtml = "";
      convertit.challenges.forEach((challenge) => {
        challengesHtml += `<li>${challenge.value}</li>`;
      });
      document.querySelector(".highlights").innerHTML = `
        <div class="about">
            <div class="aside__description">
                <h2>Description</h2>
                <div>${convertit.description}</div>
            </div>
            <ul>${challengesHtml}</ul>
            <h3>Lien Github
                <a href="${convertit.url}" target="_blank" noopener noreferrer>
                    <span class="icon">
                        <i class="fab fa-github-square"></i>
                    </span>
                </a>
            </h3>
            <h4 class="constraints">contrainte(s): ${convertit.constraints}</h4>
            </div>
        <div class="line"></div>
        `;
    });
}
