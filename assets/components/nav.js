const path = window.location.pathname === "/" ? true : false;

document.querySelector(".c-menu").innerHTML = `
    <div class="o-layout -middle">
        <div class="o-layout_item u-1/2">
            <a href="#a-propos" data-module-scroll-to="" class="c-menu_logo" data-scroll-to-offset="0">
                Kenndeclouv
            </a>
        </div>
        <div class="o-layout_item u-1/2 u-none@to-medium">
            <div class="o-layout">
                <div class="o-layout_item u-1/4">
                    <a href="${path ? '#home' : '/'}" data-scroll="to" class="c-menu_link u-text-label">
                        <span class="c-menu_link_label -main c-split" data-module-split=""
                            data-split-fixed="">Home</span>
                        <span class="c-menu_link_label -hover c-split" data-module-split=""
                            data-split-fixed="">Home</span>
                    </a>
                </div>
                <div class="o-layout_item u-1/4">
                    <a href="/cv" data-scroll="to" data-scroll-to-offset="-70"
                        class="c-menu_link u-text-label">
                        <span class="c-menu_link_label -main c-split" data-module-split=""
                            data-split-fixed="">CV</span>
                        <span class="c-menu_link_label -hover c-split" data-module-split=""
                            data-split-fixed="">CV</span>
                    </a>
                </div>
                <div class="o-layout_item u-1/4">
                    <a href="/tools" data-scroll="to" class="c-menu_link u-text-label">
                        <span class="c-menu_link_label -main c-split" data-module-split=""
                            data-split-fixed="">Tools</span>
                        <span class="c-menu_link_label -hover c-split" data-module-split=""
                            data-split-fixed="">Tools</span>
                    </a>
                </div>
                <div class="o-layout_item u-1/4">
                    <a href="/join" class="c-menu_link u-text-label">
                        <span class="c-menu_link_label -main c-split" data-module-split=""
                            data-split-fixed="">Join me!</span>
                        <span class="c-menu_link_label -hover c-split" data-module-split=""
                            data-split-fixed="">Join me!</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="o-layout_item u-1/2 u-text-right u-none@from-medium">
            <button class="c-menu_burger" aria-label="Menu" data-module-nav-button="" type="button">
                <span></span>
            </button>
        </div>
    </div>
`;

document.querySelector(".c-nav").innerHTML = `
    <div class="c-nav_inner">
        <ul class="c-nav_list">
            <li class="c-nav_list_item">
                <a href="${path ? '#home' : '/'}" data-module-scroll-to="" class="u-text-huge">
                    Home
                </a>
            </li>
            <li class="c-nav_list_item">
                <a href="/cv" data-module-scroll-to="" class="u-text-huge">
                    CV
                </a>
            </li>
            <li class="c-nav_list_item">
                <a href="/tools" data-module-scroll-to="" class="u-text-huge">
                    Tools
                </a>
            </li>
            <li class="c-nav_list_item">
                <a href="/join" data-module-scroll-to="" class="u-text-huge">
                    Join Me!
                </a>
            </li>
        </ul>
        <ul class="c-nav_list -contact">
            <li class="c-nav_list_item">
                <a href="mailto:kenndeclouv@gmail.com"
                    target="_blank" rel="noopener" class="u-text-label">
                    kenndeclouv@gmail.com
                </a>
            </li>
            <li class="c-nav_list_item">
                <a href="https://www.instagram.com/kenndeclouv/" target="_blank" rel="noopener"
                    class="u-text-label">
                    Instagram
                </a>
            </li>
            <li class="c-nav_list_item">
                <a href="https://www.behance.net/kenndeclouv" target="_blank" rel="noopener"
                    class="u-text-label">
                    Behance
                </a>
            </li>
        </ul>
    </div>
`