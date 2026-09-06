document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
    <header>
        <img src="https://static.igem.wiki/teams/6059/wiki/members/sting.svg" alt="STING Logo" class="logo">
        <nav>
            <!-- 1. HOME -->
            <div class="nav-item">
                <a href="#" class="nav-link">HOME</a>
            </div>
            
            <!-- 2. TEAM -->
            <div class="nav-item">
                <a href="#" class="nav-link">TEAM</a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Members</a>
                    <a href="#" class="dropdown-item">Attributions</a>
                    <a href="#" class="dropdown-item">Notebook</a>
                    <a href="#" class="dropdown-item">Experiments</a>
                    <a href="#" class="dropdown-item">Safety</a>
                    <a href="#" class="dropdown-item">Collaborations</a>
                </div>
            </div>

            <!-- 3. PROJECT -->
            <div class="nav-item">
                <a href="#" class="nav-link">PROJECT</a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Description</a>
                    <a href="#" class="dropdown-item">Design</a>
                    <a href="#" class="dropdown-item">Engineering<br>Success</a>
                    <a href="#" class="dropdown-item">Results</a>
                    <a href="#" class="dropdown-item">Proof of<br>Concept</a>
                    <a href="#" class="dropdown-item">Proposed<br>Implementation</a>
                </div>
            </div>

            <!-- 4. DRYLAB -->
            <div class="nav-item">
                <a href="#" class="nav-link">DRYLAB</a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Model</a>
                    <a href="#" class="dropdown-item">SOP</a>
                    <a href="#" class="dropdown-item">LCA</a>
                </div>
            </div>

            <!-- 5. PARTS -->
            <div class="nav-item">
                <a href="#" class="nav-link">PARTS</a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Parts</a>
                    <a href="#" class="dropdown-item">Contribution</a>
                    <a href="#" class="dropdown-item">Parts<br>Collection</a>
                </div>
            </div>

            <!-- 6. HP -->
            <div class="nav-item">
                <a href="#" class="nav-link">HP</a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Human<br>Practices</a>
                    <a href="#" class="dropdown-item">Integrated<br>Human Practices</a>
                </div>
            </div>

            <!-- 7. AWARD -->
            <div class="nav-item">
                <a href="#" class="nav-link">AWARD</a>
                <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">Integrated<br>Human Practices</a>
                    <a href="#" class="dropdown-item">Model</a>
                    <a href="#" class="dropdown-item">Parts<br>Collection</a>
                </div>
            </div>
        </nav>
    </header>`;

    const footerHTML = `
    <footer>
        <div class="footer-container">
            <!-- Top Row: Logos (Left: xmu_1.png, Middle: xmu-china.png, Right: https://static.igem.wiki/teams/6059/wiki/members/sting.svg.png) -->
            <div class="footer-logos-container">
                <img src="https://static.igem.wiki/teams/6059/wiki/head-foot/xmu.svg" alt="XMU Logo" class="footer-logo">
                <img src="https://static.igem.wiki/teams/6059/wiki/head-foot/xmu-china.svg" alt="XMU China Logo" class="footer-logo">
                <img src="https://static.igem.wiki/teams/6059/wiki/head-foot/sting.svg" alt="STING Logo" class="footer-logo">
            </div>

            <!-- Middle Row: Address & Social Media Placeholders -->
            <div class="footer-middle-container">
                <div class="footer-address">
                    <p>Xiamen University, Fujian, China</p>
                    <p>No.422, Siming South Road, Fujian,</p>
                    <p>P.R.China 361005</p>
                </div>
                
                <!-- 5 个并排社交图标，依次放入 1.png ~ 5.png -->
                <div class="footer-social-container">
                    <div class="social-icon-placeholder">
                        <img src="https://static.igem.wiki/teams/6059/wiki/head-foot/1.avif" alt="Social 1" class="social-icon-img">
                    </div>
                    <div class="social-icon-placeholder">
                        <img src="https://static.igem.wiki/teams/6059/wiki/head-foot/2.avif" alt="Social 2" class="social-icon-img">
                    </div>
                    <div class="social-icon-placeholder">
                        <img src="https://static.igem.wiki/teams/6059/wiki/head-foot/3.avif" alt="Social 3" class="social-icon-img">
                    </div>
                    <div class="social-icon-placeholder">
                        <img src="https://static.igem.wiki/teams/6059/wiki/head-foot/4.avif" alt="Social 4" class="social-icon-img">
                    </div>
                    <div class="social-icon-placeholder">
                        <img src="https://static.igem.wiki/teams/6059/wiki/head-foot/5.avif" alt="Social 5" class="social-icon-img">
                    </div>
                </div>
            </div>

            <!-- Bottom Row: Copyright text & Contact Us button -->
            <div class="footer-bottom-container">
                <div class="footer-copyright">
                    <span>STING iGEM 2026 &middot; XMU-China</span>
                    <span class="copyright-right">&copy; 2026 STING TEAM</span>
                </div>
                <a href="#contact" class="footer-contact-btn">Contact Us</a>
            </div>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});