document.querySelector("footer").innerHTML = `
    <div class="o-container">
        <div class="c-footer_main" id="contact">
            <div class="o-layout">
                <div class="c-footer_item o-layout_item u-1/4@from-small">
                    <h3 class="u-text-big u-anim -delay-3" data-scroll="item">
                        Contacts
                    </h3>
                    <ul class="c-footer_list" data-scroll="item">
                        <li class="u-anim -delay-4 -parent">
                            <a href="mailto:kenndeclouv@gmail.com"
                                target="_blank" rel="noopener" class="u-text-label">
                                kenndeclouv@gmail.com
                                <svg role="img">
                                    <use
                                        href="assets/svgs/sprite.svg#arrow-right">
                                    </use>
                                </svg>
                            </a>
                        </li>
                        <li class="u-anim -delay-5 -parent">
                            <a href="https://www.instagram.com/kenndeclouv/" target="_blank"
                                rel="noopener" class="u-text-label">
                                Instagram
                                <svg role="img">
                                    <use
                                        href="assets/svgs/sprite.svg#arrow-right">
                                    </use>
                                </svg>
                            </a>
                        </li>
                        <li class="u-anim -delay-6 -parent">
                            <a href="https://www.behance.net/luzizullezazel" target="_blank"
                                rel="noopener" class="u-text-label">
                                Behance
                                <svg role="img">
                                    <use
                                        href="assets/svgs/sprite.svg#arrow-right">
                                    </use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- <div class="c-footer_item o-layout_item u-1/4@from-small">
                    <h3 class="u-text-big u-anim -delay-4" data-scroll="item">
                        Crédits
                    </h3>
                    <ul class="c-footer_list -credits" data-scroll="item">
                        <li>
                            <div class="o-layout -gutter-small">
                                <div class="o-layout_item u-1/2">
                                    <a href="https://instagram.com/quentin_internet" target="_blank"
                                        rel="noopener" class="u-text-label">
                                        Quentin Hocdé
                                        <svg role="img">
                                            <use
                                                href="assets/svgs/sprite.svg#arrow-right">
                                            </use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="o-layout_item u-1/2">
                                    <p class="u-text-label">Développement</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="o-layout -gutter-small">
                                <div class="o-layout_item u-1/2">
                                    <p class="u-text-label">Kenndeclouv Le Meur</p>
                                </div>
                                <div class="o-layout_item u-1/2">
                                    <p class="u-text-label">DA & Design</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="o-layout -gutter-small">
                                <div class="o-layout_item u-1/2">
                                    <a href="https://pangrampangram.com" target="_blank" rel="noopener"
                                        class="u-text-label">
                                        Pangram Pangram
                                        <svg role="img">
                                            <use
                                                href="assets/svgs/sprite.svg#arrow-right">
                                            </use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="o-layout_item u-1/2">
                                    <p class="u-text-label">Typographie</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> -->
                <div class="o-layout_item u-1/4@from-small"></div>
                <div class="c-footer_item o-layout_item u-1/4@from-small">
                    <h3 class="c-footer_becots u-text-big" data-scroll="item" data-scroll-repeat=""
                        data-module-split="" data-split-type="words">KENNDECLOUV</h3>
                </div>
            </div>
        </div>
        <div class="c-footer_secondary u-padding-small-y">
            <p class="u-text-label">
                Website created in <span id="year"></span> at Surabaya Jawa Timur Indonesia
            </p>
            <script>
                document.getElementById('year').textContent = new Date().getFullYear();
            </script>
        </div>
    </div>
`;