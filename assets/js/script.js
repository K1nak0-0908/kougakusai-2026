const projectsData = [
    {
        id: 1,
        title: "ダーツ部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-01.webp",
    },
    {
        id: 2,
        title: "天文部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-02.webp",
    },
    {
        id: 3,
        title: "将棋部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-03.webp",
    },
    {
        id: 4,
        title: "弦楽部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-04.webp",
    },
    {
        id: 5,
        title: "映画研究部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-05.webp",
    },
    {
        id: 6,
        title: "書道部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-06.webp",
    },
    {
        id: 7,
        title: "理科研究部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-07.webp",
    },
    {
        id: 8,
        title: "社会歴史研究部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-08.webp",
    },
    {
        id: 9,
        title: "美術部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-09.webp",
    },
    {
        id: 10,
        title: "ゴルフ部",
        location: "出展場所",
        category: "sports",
        image: "./assets/images/projects/sports/sports-01.webp",
    },
    {
        id: 11,
        title: "バレーボール部",
        location: "出展場所",
        category: "sports",
        image: "./assets/images/projects/sports/sports-02.webp",
    },
    {
        id: 12,
        title: "マケドニア同好会",
        location: "出展場所",
        category: "club",
        image: "./assets/images/projects/club/club-01.webp",
    },
    {
        id: 13,
        title: "数学同好会",
        location: "出展場所",
        category: "club",
        image: "./assets/images/projects/club/club-02.webp",
    },
    {
        id: 14,
        title: "じぶんの町を良くするしくみ",
        location: "出展場所",
        category: "committee",
        image: "./assets/images/projects/じぶんの町を良くするしくみ.webp",
    },
    {
        id: 15,
        title: "父母の会バザー",
        location: "出展場所",
        category: "committee",
        image: "./assets/images/projects/父母の会バザー.webp",
    },
    {
        id: 16,
        title: "高学祭パンフレット・ロゴ商品販売",
        location: "出展場所",
        category: "committee",
        image: "./assets/images/projects/高学祭ﾊﾟﾝﾌﾚｯﾄ_ﾛｺﾞ商品販売.webp",
    },
    {
        id: 17,
        title: "中三三線",
        location: "出展場所",
        category: "c3",
        image: "./assets/images/projects/中三三線.webp",
    },
    {
        id: 18,
        title: "中三劇",
        location: "出展場所",
        category: "c3",
        image: "./assets/images/projects/中三劇.webp",
    },
    {
        id: 19,
        title: "高一学年展示",
        location: "出展場所",
        category: "h1",
        image: "./assets/images/projects/高一.webp",
    },
    {
        id: 20,
        title: "高三校外飲食",
        location: "出展場所",
        category: "h3",
        image: "./assets/images/projects/高三校外飲食.webp",
    },
    {
        id: 21,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-01.webp",
    },
    {
        id: 22,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-02.webp",
    },
    {
        id: 23,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-03.webp",
    },
    {
        id: 24,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-04.webp",
    },
    {
        id: 25,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-05.webp",
    },
    {
        id: 26,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-06.webp",
    },
    {
        id: 27,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-07.webp",
    },
    {
        id: 28,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image:
            "./assets/images/projects/ディップスじゃなくてディッピンドッツね.webp",
    },
];

const INITIAL_SHOW_COUNT = 8;
let currentCategory = "all";
let currentSearchQuery = "";
let isExpanded = false;
let lastFocusedElement = null;

let els = {};

function getScrollBehavior() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
}

function renderProjects() {
    if (!els.grid) return;

    const filtered = projectsData.filter((item) => {
        const matchCategory =
            currentCategory === "all" || item.category === currentCategory;
        const matchSearch =
            currentSearchQuery === "" ||
            item.title.includes(currentSearchQuery) ||
            item.location.includes(currentSearchQuery);

        return matchCategory && matchSearch;
    });

    if (els.count) {
        els.count.textContent = `該当する出展: ${filtered.length}件`;
    }

    els.grid.replaceChildren();

    if (filtered.length === 0) {
        const p = document.createElement("p");
        p.className = "no-projects";
        p.textContent = "該当する出展が見つかりませんでした。";
        els.grid.appendChild(p);
        removeToggleButton();
        return;
    }

    const displayItems = isExpanded
        ? filtered
        : filtered.slice(0, INITIAL_SHOW_COUNT);

    displayItems.forEach((item) => {
        const article = document.createElement("article");
        article.className = "project-card";
        article.dataset.id = item.id;
        article.tabIndex = 0;
        article.setAttribute("role", "button");
        article.setAttribute("aria-label", `${item.title}の詳細を表示`);

        const imgWrap = document.createElement("div");
        imgWrap.className = "project-img-wrap";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title;
        img.loading = "lazy";
        img.onerror = () => showImageUnavailable(imgWrap, img);

        imgWrap.appendChild(img);

        const body = document.createElement("div");
        body.className = "project-body";

        const location = document.createElement("span");
        location.className = "project-location";
        location.textContent = item.location;

        const title = document.createElement("h3");
        title.className = "project-title";
        title.textContent = item.title;

        body.append(location, title);
        article.append(imgWrap, body);
        els.grid.appendChild(article);
    });

    const remainingCount = filtered.length - INITIAL_SHOW_COUNT;
    if (filtered.length > INITIAL_SHOW_COUNT) {
        renderToggleButton(remainingCount);
    } else {
        removeToggleButton();
    }
}

function renderToggleButton(remainingCount) {
    let btnContainer = document.getElementById("js-more-btn-container");

    if (!btnContainer) {
        btnContainer = document.createElement("div");
        btnContainer.id = "js-more-btn-container";
        btnContainer.style.width = "100%";
        btnContainer.style.display = "flex";
        btnContainer.style.justifyContent = "center";
        btnContainer.style.marginTop = "30px";
        els.grid.parentNode.insertBefore(btnContainer, els.grid.nextSibling);
    }

    btnContainer.replaceChildren();

    const button = document.createElement("button");
    button.id = "js-toggle-btn";
    button.className = "filter-btn";
    button.textContent = !isExpanded ? `他${remainingCount}件を表示` : "閉じる";

    button.addEventListener("click", () => {
        isExpanded = !isExpanded;
        renderProjects();

        if (!isExpanded) {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: getScrollBehavior() });
            }
        }
    });

    btnContainer.appendChild(button);
}

function removeToggleButton() {
    const btnContainer = document.getElementById("js-more-btn-container");
    if (btnContainer) {
        btnContainer.remove();
    }
}

function showImageUnavailable(container, img) {
    img.remove();
    container.classList.add("image-unavailable");
    container.setAttribute("aria-label", "画像準備中");
}

function updateScrollLock() {
    const isModalOpen = els.modalOverlay?.classList.contains("is-active");
    const isMenuOpen = els.mobileMenu?.classList.contains("is-active");
    document.body.style.overflow = isModalOpen || isMenuOpen ? "hidden" : "";
}

function openProjectModal(id) {
    const item = projectsData.find((p) => p.id === id);
    if (!item || !els.modalOverlay || !els.modalBody) return;

    els.modalBody.replaceChildren();

    const wrap = document.createElement("div");
    wrap.className = "modal-img-wrap";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.onerror = () => showImageUnavailable(wrap, img);

    wrap.appendChild(img);

    const location = document.createElement("span");
    location.className = "modal-location";
    location.textContent = item.location;

    const title = document.createElement("h3");
    title.className = "modal-title";
    title.id = "js-modal-title";
    title.textContent = item.title;

    els.modalBody.append(wrap, location, title);

    lastFocusedElement = document.activeElement;
    els.modalOverlay.classList.add("is-active");
    els.modalOverlay.setAttribute("aria-hidden", "false");
    updateScrollLock();
    els.modalCloseBtn?.focus();
}

function closeProjectModal() {
    if (!els.modalOverlay) return;
    els.modalOverlay.classList.remove("is-active");
    els.modalOverlay.setAttribute("aria-hidden", "true");
    updateScrollLock();
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
    lastFocusedElement = null;
}

document.addEventListener("DOMContentLoaded", () => {
    els = {
        grid: document.getElementById("js-project-grid"),
        count: document.getElementById("js-project-count"),
        modalOverlay: document.getElementById("js-modal-overlay"),
        modalBody: document.getElementById("js-modal-body"),
        modalCloseBtn: document.getElementById("js-modal-close"),
        header: document.querySelector("header"),
        backToTop: document.getElementById("back-to-top"),
        searchInput: document.getElementById("js-search-input"),
        openBtn: document.getElementById("js-hamburger-open"),
        closeBtn: document.getElementById("js-hamburger-close"),
        mobileMenu: document.getElementById("js-mobile-menu"),
        menuOverlay: document.getElementById("js-menu-overlay"),
        modalContent: document.querySelector(".modal-content"),
    };

    let ticking = false;
    window.addEventListener(
        "scroll",
        () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                if (els.header) els.header.classList.toggle("scrolled", scrollY > 50);
                if (els.backToTop)
                    els.backToTop.classList.toggle("is-show", scrollY > 200);
                ticking = false;
            });
        },
        { passive: true }
    );

    if (els.backToTop) {
        els.backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: getScrollBehavior() });
        });
    }

    const scrollTargets = document.querySelectorAll(".scroll-fade");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px 0px -10% 0px" }
    );
    scrollTargets.forEach((target) => observer.observe(target));

    const openMenu = () => {
        if (els.mobileMenu) els.mobileMenu.classList.add("is-active");
        if (els.menuOverlay) els.menuOverlay.classList.add("is-active");
        els.mobileMenu?.setAttribute("aria-hidden", "false");
        els.openBtn?.setAttribute("aria-expanded", "true");
        updateScrollLock();
        els.closeBtn?.focus();
    };

    const closeMenu = () => {
        if (els.mobileMenu) els.mobileMenu.classList.remove("is-active");
        if (els.menuOverlay) els.menuOverlay.classList.remove("is-active");
        els.mobileMenu?.setAttribute("aria-hidden", "true");
        els.openBtn?.setAttribute("aria-expanded", "false");
        updateScrollLock();
        els.openBtn?.focus();
    };

    if (els.openBtn && els.closeBtn && els.mobileMenu) {
        els.openBtn.addEventListener("click", openMenu);
        els.closeBtn.addEventListener("click", closeMenu);
        if (els.menuOverlay) els.menuOverlay.addEventListener("click", closeMenu);

        const mobileLinks = document.querySelectorAll(".js-mobile-link");
        mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
    }

    if (els.modalCloseBtn) {
        els.modalCloseBtn.addEventListener("click", closeProjectModal);
    }

    if (els.modalOverlay) {
        els.modalOverlay.addEventListener("click", (e) => {
            if (e.target === els.modalOverlay) closeProjectModal();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (els.modalOverlay?.classList.contains("is-active")) {
                closeProjectModal();
            } else if (els.mobileMenu?.classList.contains("is-active")) {
                closeMenu();
            }
        }

        if (e.key === "Tab" && els.modalOverlay?.classList.contains("is-active")) {
            const focusable = els.modalContent?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            if (!focusable?.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    if (els.grid) {
        els.grid.addEventListener("click", (e) => {
            const card = e.target.closest(".project-card");
            if (!card) return;
            openProjectModal(Number(card.dataset.id));
        });

        els.grid.addEventListener("keydown", (e) => {
            if (e.key !== "Enter" && e.key !== " ") return;
            const card = e.target.closest(".project-card");
            if (!card) return;
            e.preventDefault();
            openProjectModal(Number(card.dataset.id));
        });
    }

    const categoryBtns = document.querySelectorAll(
        ".project-filters .filter-btn"
    );
    categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.filter;
            isExpanded = false;
            renderProjects();
        });
    });

    if (els.searchInput) {
        els.searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.trim();
            isExpanded = false;
            renderProjects();
        });
    }

    renderProjects();
});
