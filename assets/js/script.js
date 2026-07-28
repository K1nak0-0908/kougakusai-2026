const projectsData = [
    {
        id: 1,
        title: "dummy",
        location: "dummy",
        category: "dummy",
        image: "./assets/images/projects/2026-07-25 17.26.32 - 北島聡一郎（Kuri）.png"
    },
    {
        id: 2,
        title: "dummy",
        location: "dummy",
        category: "dummy",
        image: "./assets/images/projects/56DE1A6E-0BEC-4B07-9861-6E59819DC945 - 瀧澤正樹.png"
    },
    {
        id: 3,
        title: "dummy",
        location: "dummy",
        category: "dummy",
        image: "./assets/images/projects/IMG_0510 - Junichi Yokoo.jpeg"
    },
    {
        id: 4,
        title: "dummy",
        location: "dummy",
        category: "dummy",
        image: "./assets/images/projects/IMG_3806 - Yuto Watanabe.jpeg"
    },
    {
        id: 5,
        title: "dummy",
        location: "dummy",
        category: "dummy",
        image: "./assets/images/projects/IMG_5314 - さくらもち.jpeg"
    },
    {
        id: 6,
        title: "dummy",
        location: "dummy",
        category: "dummy",
        image: "./assets/images/projects/IMG_6706 - 矢澤祥真.jpeg"
    },
    {
        id: 7,
        title: "dummy",
        location: "dummy",
        category: "dummy",
        image: "./assets/images/projects/WIN_20260718_10_10_31_Pro - 土岐一瑳.jpg"
    },
    {
        id: 8,
        title: "ゴルフ部",
        location: "dummy",
        category: "sports",
        image: "./assets/images/projects/ゴルフ部.png"
    },
    {
        id: 9,
        title: "じぶんの町を良くするしくみ",
        location: "dummy",
        category: "committee",
        image: "./assets/images/projects/じぶんの町を良くするしくみ.jpg"
    },
    {
        id: 10,
        title: "ダーツ部",
        location: "dummy",
        category: "sports",
        image: "./assets/images/projects/ダーツ部.jpeg"
    },
    {
        id: 11,
        title: "ディップスじゃなくてディッピンドッツね",
        location: "dummy",
        category: "c3",
        image: "./assets/images/projects/ディップスじゃなくてディッピンドッツね.png"
    },
    {
        id: 12,
        title: "バレーボール部",
        location: "dummy",
        category: "sports",
        image: "./assets/images/projects/バレーボール部.jpeg"
    },
    {
        id: 13,
        title: "マケドニア同好会",
        location: "dummy",
        category: "club",
        image: "./assets/images/projects/マケドニア同好会.JPG"
    },
    {
        id: 14,
        title: "中三三線",
        location: "dummy",
        category: "c3",
        image: "./assets/images/projects/中三三線.jpg"
    },
    {
        id: 15,
        title: "中三劇",
        location: "dummy",
        category: "c3",
        image: "./assets/images/projects/中三劇.png"
    },
    {
        id: 16,
        title: "天文部",
        location: "dummy",
        category: "culture",
        image: "./assets/images/projects/天文部.png"
    },
    {
        id: 17,
        title: "将棋部",
        location: "dummy",
        category: "culture",
        image: "./assets/images/projects/将棋部.png"
    },
    {
        id: 18,
        title: "弦楽部",
        location: "dummy",
        category: "culture",
        image: "./assets/images/projects/弦楽部.png"
    },
    {
        id: 19,
        title: "数学同好会",
        location: "dummy",
        category: "club",
        image: "./assets/images/projects/数学同好会.png"
    },
    {
        id: 20,
        title: "映画研究部",
        location: "dummy",
        category: "culture",
        image: "./assets/images/projects/映画研究部.jpg"
    },
    {
        id: 21,
        title: "書道部",
        location: "dummy",
        category: "culture",
        image: "./assets/images/projects/書道部.jpg"
    },
    {
        id: 22,
        title: "父母の会バザー",
        location: "dummy",
        category: "committee",
        image: "./assets/images/projects/父母の会バザー.png"
    },
    {
        id: 23,
        title: "理科研究部",
        location: "dummy",
        category: "culture",
        image: "./assets/images/projects/理科研究部.png"
    },
    {
        id: 24,
        title: "社会歴史研究部",
        location: "dummy",
        category: "culture",
        image: "./assets/images/projects/社会歴史研究部.png"
    },
    {
        id: 25,
        title: "美術部",
        location: "dummy",
        category: "culture",
        image: "./assets/images/projects/美術部.png"
    },
    {
        id: 26,
        title: "高一学年展示",
        location: "dummy",
        category: "h1",
        image: "./assets/images/projects/高一.jpg"
    },
    {
        id: 27,
        title: "高三校外飲食",
        location: "dummy",
        category: "h3",
        image: "./assets/images/projects/高三校外飲食.png"
    },
    {
        id: 28,
        title: "高学祭パンフレット・ロゴ商品販売",
        location: "dummy",
        category: "committee",
        image: "./assets/images/projects/高学祭ﾊﾟﾝﾌﾚｯﾄ_ﾛｺﾞ商品販売.png"
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
        countEl.textContent = `該当する企画: ${filtered.length}件`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `<p class="no-projects">該当する企画が見つかりませんでした。</p>`;
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
          onerror="this.src='./assets/images/no-image.jpg'" 
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
      <img src="${item.image}" alt="${item.title}" onerror="this.src='./assets/images/no-image.jpg'" />
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