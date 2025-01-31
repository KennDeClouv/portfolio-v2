fetch('/assets/config.json')
    .then(response => response.json())
    .then(images => {
        const heroImages = images["hero-images"];
        const imageElements = heroImages.map(image => `
    <div class="c-home_background_item" data-header-slider="item">
        <div class="c-home_background_item_line">
            <picture>
                <source
                    data-srcset="${image}"
                    type="image/webp"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <source
                    data-srcset="${image}"
                    type="image/jpeg"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <img data-srcset="${image}"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="">
            </picture>
        </div>
        <div class="c-home_background_item_line">
            <picture>
                <source
                    data-srcset="${image}"
                    type="image/webp"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <source
                    data-srcset="${image}"
                    type="image/jpeg"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <img data-srcset="${image}"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="">
            </picture>
        </div>
        <div class="c-home_background_item_line">
            <picture>
                <source
                    data-srcset="${image}"
                    type="image/webp"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <source
                    data-srcset="${image}"
                    type="image/jpeg"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <img data-srcset="${image}"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="">
            </picture>
        </div>
        <div class="c-home_background_item_line">
            <picture>
                <source
                    data-srcset="${image}"
                    type="image/webp"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <source
                    data-srcset="${image}"
                    type="image/jpeg"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <img data-srcset="${image}"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="">
            </picture>
        </div>
        <div class="c-home_background_item_line">
            <picture>
                <source
                    data-srcset="${image}"
                    type="image/webp"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <source
                    data-srcset="${image}"
                    type="image/jpeg"
                    srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
                <img data-srcset="${image}"
                    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    alt="">
            </picture>
    `).join("");

    const container = document.createElement('div');
    container.innerHTML = imageElements;
    document.querySelector(".c-home_background_inner").appendChild(container);
})