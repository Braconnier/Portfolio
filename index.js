window.addEventListener('load', render())

async function render() {
    await fetch("./assets/data.json")
        .then(response => response.json())
        .then(data => {
            const projects = data.projects
            let html = ''
            projects.forEach(project => {

                let challengesHtml = ''
                project.challenges.forEach(challenge => {
                    challengesHtml += `<br/>${challenge.value}<br/>`
                })

                projectHtml = `<article class="project">
                                    <a href="${project.localUrl}" class="project__title">
                                        <div class="project__title__container">
                                            <h3>${project.name}</h3>
                                            <h4 class="description">${project.description}</h4>
                                            <div class="line"></div>
                                        </div>
                                    </a>
                                    <div class="open-btn btn" title="info">i</div>
                                    <dialog class="project__body modal">
                                        <div class="close-btn btn">x</div>
                                        <h5>
                                        ${project.name}
                                        <br />
                                        <br />
                                        challenges :
                                        <br />
                                        <br />
                                        ${challengesHtml}
                                        </h5>
                                    </dialog>
                                </article>`
                html += projectHtml
            })
            document.querySelector('.main__content').innerHTML = html
        });


    const btnToggle = document.querySelector('.btn-toggle');

    btnToggle.addEventListener('click', () => {

        const body = document.body;

        if (body.classList.contains('dark')) {

            body.classList.add('light')
            body.classList.remove('dark')
            btnToggle.innerHTML = "dark"

        } else if (body.classList.contains('light')) {

            body.classList.add('dark')
            body.classList.remove('light')
            btnToggle.innerHTML = "light"

        }

    })


    document.querySelectorAll('.open-btn').forEach(el => {

        const modal = el.parentElement.lastElementChild;
        const closeModal = modal.firstChild.nextSibling;

        el.addEventListener('click', () => {
            modal.showModal()
        });

        closeModal.addEventListener('click', () => {
            modal.close();
        })
    });
}





