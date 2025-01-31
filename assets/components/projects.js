fetch('/assets/config.json')
    .then(response => response.json())
    .then(data => {
        const projects = data["projects"];
        if (!Array.isArray(projects)) {
            throw new TypeError("projects is not an array");
        }
        
        let id = 1;
        const content = projects.map(project => {
            const imageElements = project.images.map(image => `
                <div class="swiper-slide">
                    <picture>
                        <source
                            data-srcset="${image}"
                            type="image/webp"
                            srcset="${image}">
                        <source
                            data-srcset="${image}"
                            type="image/jpeg"
                            srcset="${image}">
                        <img data-srcset="${image}"
                            src="${image}"
                            width="" height="" alt="Quentin Hocdé">
                    </picture>
                </div>
            `).join("");

            const projectContent = `
            <article class="c-projects_list_item c-accordion_item" data-href="#project-${id}"
                id="project-${id}" data-accordion="item">
                <header class="c-projects_list_item_header">
                    <div class="c-projects_list_item_images_grid u-none@to-medium">
                        <div class="o-container">
                            <div class="o-layout -gutter-small">
                                <div class="o-layout_item u-1/4@from-small"></div>
                                <div class="o-layout_item u-1/4@from-small"></div>
                            </div>
                        </div>
                    </div>
                    <div class="c-projects_list_item_header_inner o-container c-accordion_item_toggler"
                        data-accordion="toggler">
                        <div class="o-layout -gutter-small">
                            <div class="o-layout_item u-1/2@from-small">
                                <h3 class="c-projects_list_item_title u-text-big u-text-uppercase">
                                    ${project.title}
                                </h3>
                            </div>
                            <div class="o-layout_item u-1/4@from-small u-none@to-medium">
                                <p class="u-text-big">
                                    ${project.description}
                                </p>
                            </div>
                            <div class="o-layout_item u-1/4@from-small u-none@to-medium">
                                <time class="u-text-big">
                                    ${project.year}
                                </time>
                            </div>
                        </div>
                        <span class="c-projects_list_item_header_icon">
                            <svg role="img">
                                <use
                                    href="assets/svgs/sprite.svg#arrow-down">
                                </use>
                            </svg>
                        </span>
                    </div>
                </header>
                <div class="c-projects_list_item_content c-accordion_item_content"
                    data-accordion="content">
                    <div data-accordion="inner">
                        <div class="c-projects_list_item_container o-container">
                            <div class="o-layout -gutter-small -reverse">
                                <div class="o-layout_item u-none@from-medium">
                                    <div class="o-layout">
                                        <div class="o-layout_item u-1/2">
                                            <p class="u-text-big">
                                                ${project.description}
                                            </p>
                                        </div>
                                        <div class="o-layout_item u-1/2 u-text-right">
                                            <time class="u-text-big">
                                                ${project.year}
                                            </time>
                                        </div>
                                    </div>
                                    <p class="u-padding-small-y c-projects_list_item_description">
                                        ${project.role}
                                    </p>
                                </div>
                                <div class="o-layout_item u-1/4@from-medium">
                                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="c-projects_list_item_button c-button">
                                        Visit
                                    </a>
                                </div>
                                <div class="o-layout_item u-1/4@from-medium u-none@to-medium">
                                    <p class="c-projects_list_item_description">
                                        ${project.role}
                                    </p>
                                </div>
                                <div class="o-layout_item u-1/2@from-medium">
                                    <div class="c-projects_list_item_images_slider swiper"
                                        data-module-slider="project-${project.id}">
                                        <div class="c-projects_list_item_images swiper-wrapper">
                                            ${imageElements}
                                        </div>
                                        <div class="swiper-pagination" data-slider="pagination">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            `;
            id++;
            return projectContent;
        }).join("");

        const container = document.createElement('div');
        container.innerHTML = content;
        document.querySelector("#project-list").appendChild(container);
    })
    .catch(error => console.error('Error fetching projects:', error));