const projectsData = [
    // cultural
    {
        id: 1,
        title: "ダーツ部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-01.webp"
    },
    {
        id: 2,
        title: "天文部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-02.webp"
    },
    {
        id: 3,
        title: "将棋部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-03.webp"
    },
    {
        id: 4,
        title: "弦楽部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-04.webp"
    },
    {
        id: 5,
        title: "映画研究部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-05.webp"
    },
    {
        id: 6,
        title: "書道部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-06.webp"
    },
    {
        id: 7,
        title: "理科研究部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-07.webp"
    },
    {
        id: 8,
        title: "社会歴史研究部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-08.webp"
    },
    {
        id: 9,
        title: "美術部",
        location: "出展場所",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-09.webp"
    },

    // sports
    {
        id: 10,
        title: "ゴルフ部",
        location: "出展場所",
        category: "sports",
        image: "./assets/images/projects/sports/sports-01.webp"
    },
    {
        id: 11,
        title: "バレーボール部",
        location: "出展場所",
        category: "sports",
        image: "./assets/images/projects/sports/sports-02.webp"
    },

    // club
    {
        id: 12,
        title: "マケドニア同好会",
        location: "出展場所",
        category: "club",
        image: "./assets/images/projects/club/club-01.webp"
    },
    {
        id: 13,
        title: "数学同好会",
        location: "出展場所",
        category: "club",
        image: "./assets/images/projects/club/club-02.webp"
    },

    // committee
    {
        id: 14,
        title: "じぶんの町を良くするしくみ",
        location: "出展場所",
        category: "committee",
        image: "./assets/images/projects/じぶんの町を良くするしくみ.webp"
    },
    {
        id: 15,
        title: "父母の会バザー",
        location: "出展場所",
        category: "committee",
        image: "./assets/images/projects/父母の会バザー.webp"
    },
    {
        id: 16,
        title: "高学祭パンフレット・ロゴ商品販売",
        location: "出展場所",
        category: "committee",
        image: "./assets/images/projects/高学祭ﾊﾟﾝﾌﾚｯﾄ_ﾛｺﾞ商品販売.webp"
    },

    // --- 学年展示 (category: "c3", "h1", "h3") ---
    {
        id: 17,
        title: "中三三線",
        location: "出展場所",
        category: "c3",
        image: "./assets/images/projects/中三三線.webp"
    },
    {
        id: 18,
        title: "中三劇",
        location: "出展場所",
        category: "c3",
        image: "./assets/images/projects/中三劇.webp"
    },
    {
        id: 19,
        title: "高一学年展示",
        location: "出展場所",
        category: "h1",
        image: "./assets/images/projects/高一.webp"
    },
    {
        id: 20,
        title: "高三校外飲食",
        location: "出展場所",
        category: "h3",
        image: "./assets/images/projects/高三校外飲食.webp"
    },

    // dummy
    {
        id: 21,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-01.webp"
    },
    {
        id: 22,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-02.webp"
    },
    {
        id: 23,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-03.webp"
    },
    {
        id: 24,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-04.webp"
    },
    {
        id: 25,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-05.webp"
    },
    {
        id: 26,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-06.webp"
    },
    {
        id: 27,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/project-07.webp"
    },
    {
        id: 28,
        title: "dummy",
        location: "出展場所",
        category: "dummy",
        image: "./assets/images/projects/ディップスじゃなくてディッピンドッツね.webp"
    }
];

const INITIAL_SHOW_COUNT = 8;

let currentCategory = "all";
let currentSearchQuery = "";
let isExpanded = false;

function renderProjects() {
    const container = document.getElementById("js-project-grid");
    const countEl = document.getElementById("js-project-count");
    if (!container) return;

    const filtered = projectsData.filter((item) => {
        const matchCategory =
            currentCategory === "all" || item.category === currentCategory;
        const matchSearch =
            currentSearchQuery === "" ||
            item.title.toLowerCase().includes(currentSearchQuery) ||
            item.location.toLowerCase().includes(currentSearchQuery);

        return matchCategory && matchSearch;
    });

    if (countEl) {
        countEl.textContent = `該当する出展: ${filtered.length}件`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `<p class="no-projects">該当する出展が見つかりませんでした。</p>`;
        removeToggleButton();
        return;
    }

    const displayItems = isExpanded ? filtered : filtered.slice(0, INITIAL_SHOW_COUNT);

    container.innerHTML = displayItems
        .map(
            (item) => `
    <article class="project-card" data-id="${item.id}">
      <div class="project-img-wrap">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          loading="lazy"
          onerror="this.src='./assets/images/no-image.webp'" 
        />
      </div>
      <div class="project-body">
        <span class="project-location">${item.location}</span>
        <h3 class="project-title">${item.title}</h3>
      </div>
    </article>
  `
        )
        .join("");

    const cards = container.querySelectorAll(".project-card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const id = Number(card.dataset.id);
            openProjectModal(id);
        });
    });

    const remainingCount = filtered.length - INITIAL_SHOW_COUNT;
    if (filtered.length > INITIAL_SHOW_COUNT) {
        renderToggleButton(container, remainingCount);
    } else {
        removeToggleButton();
    }
}

function renderToggleButton(container, remainingCount) {
    let btnContainer = document.getElementById("js-more-btn-container");

    if (!btnContainer) {
        btnContainer = document.createElement("div");
        btnContainer.id = "js-more-btn-container";
        btnContainer.style.width = "100%";
        btnContainer.style.display = "flex";
        btnContainer.style.justifyContent = "center";
        btnContainer.style.marginTop = "30px";
        container.parentNode.insertBefore(btnContainer, container.nextSibling);
    }

    if (!isExpanded) {
        btnContainer.innerHTML = `
            <button id="js-toggle-btn" class="filter-btn">
                他${remainingCount}件を表示
            </button>
        `;
    } else {
        btnContainer.innerHTML = `
            <button id="js-toggle-btn" class="filter-btn">
                閉じる
            </button>
        `;
    }

    document.getElementById("js-toggle-btn").addEventListener("click", () => {
        isExpanded = !isExpanded;
        renderProjects();

        if (!isExpanded) {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
}

function removeToggleButton() {
    const btnContainer = document.getElementById("js-more-btn-container");
    if (btnContainer) {
        btnContainer.remove();
    }
}

function openProjectModal(id) {
    const item = projectsData.find((p) => p.id === id);
    if (!item) return;

    const modalOverlay = document.getElementById("js-modal-overlay");
    const modalBody = document.getElementById("js-modal-body");

    if (!modalOverlay || !modalBody) return;

    modalBody.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${item.image}" alt="${item.title}" onerror="this.src='./assets/images/no-image.webp'" />
    </div>
    <span class="modal-location">${item.location}</span>
    <h3 class="modal-title">${item.title}</h3>
  `;

    modalOverlay.classList.add("is-active");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    const modalOverlay = document.getElementById("js-modal-overlay");
    if (!modalOverlay) return;
    modalOverlay.classList.remove("is-active");
    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener(
        "scroll",
        () => {
            const scrollY = window.scrollY;
            if (header) header.classList.toggle("scrolled", scrollY > 50);
            if (backToTopBtn) backToTopBtn.classList.toggle("is-show", scrollY > 200);
        },
        { passive: true }
    );

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
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

    const openBtn = document.getElementById("js-hamburger-open");
    const closeBtn = document.getElementById("js-hamburger-close");
    const mobileMenu = document.getElementById("js-mobile-menu");
    const menuOverlay = document.getElementById("js-menu-overlay");
    const mobileLinks = document.querySelectorAll(".js-mobile-link");

    const openMenu = () => {
        mobileMenu.classList.add("is-active");
        menuOverlay.classList.add("is-active");
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        mobileMenu.classList.remove("is-active");
        menuOverlay.classList.remove("is-active");
        document.body.style.overflow = "";
    };

    if (openBtn && closeBtn && mobileMenu) {
        openBtn.addEventListener("click", openMenu);
        closeBtn.addEventListener("click", closeMenu);
        if (menuOverlay) menuOverlay.addEventListener("click", closeMenu);
        mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
    }

    const modalCloseBtn = document.getElementById("js-modal-close");
    const modalOverlay = document.getElementById("js-modal-overlay");

    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) closeProjectModal();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeProjectModal();
    });

    renderProjects();

    const categoryBtns = document.querySelectorAll(".project-filters .filter-btn");
    categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.filter;
            isExpanded = false;
            renderProjects();
        });
    });

    const searchInput = document.getElementById("js-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.trim().toLowerCase();
            isExpanded = false;
            renderProjects();
        });
    }
});