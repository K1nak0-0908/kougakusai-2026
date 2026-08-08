const projectsData = [
    {
        title: "TAKANAWA MUSIC FESTIVAL",
        organization: "中学1年学年出展",
        description: "クラスによる合唱と多彩なパフォーマンスが楽しめる、歌と笑顔と感動にあふれた高輪学園恒例の音楽フェスティバルです。",
        category: "c1",
        image: "./assets/images/projects/grade/c1/c1-01.webp",
    },
    {
        title: "ボウリング、射撃チャレンジ",
        organization: "中学2年A組",
        description: "様々なコースのボウリングと射撃が一度に楽しめるところになっています。ぜひチャレンジしにきてみてください。",
        category: "c2",
        image: "./assets/images/projects/grade/c2/c2-01.webp",
    },
    {
        title: "謎のお化けの巣窟",
        organization: "中学2年B組",
        description: " 今宵、貴方は2-Bの幽霊達の巣窟へと誘われる。そしてゴールするまで様々なミッションを達成しないければならない。最後まで生きて帰れるのか、全て自分たちの運命である...。　(仮ですので、変更する可能性があります)",
        category: "c2",
        image: "./assets/images/projects/grade/c2/c2-02.webp",
    },
    {
        title: "ウマ男",
        organization: "中学2年C組",
        description: " マイナースポーツの体験ゲームで馬券をゲット！生徒が走る競馬で、実際に賭けて応援しよう！ぜひ来てください！",
        category: "c2",
        image: "./assets/images/projects/grade/c2/c2-03.webp",
    },
    {
        title: "オフラインカジノ",
        organization: "中学2年D組",
        description: "スポーツを基調とした空間で、ポーカーやルーレット、独自のMinnerを体験。合法的なスポーツ賭博と伝統ゲームを融合し、競技の熱狂とカジノの戦略性を存分に楽しめる新たなスポットです。",
        category: "c2",
        image: "./assets/images/projects/grade/c2/c2-04.webp",
    },
    {
        title: "段ボールSports!!",
        organization: "中学2年E組",
        description: "段ボールで作られた野球盤、サッカー盤、エアホッケーを参加者に提供します。クラスの生徒対参加者の構図にします。",
        category: "c2",
        image: "./assets/images/projects/grade/c2/c2-05.webp",
    },
    {
        title: "BATTLE ZONE",
        organization: "中学2年F組",
        description: "来場者の方々でチームを組むチーム戦です！味方と協力して対戦相手に勝利しよう！中学2年F組にぜひ来てください！",
        category: "c2",
        image: "./assets/images/projects/grade/c2/c2-06.webp",
    },
    {
        title: "中三線〜ちゅらいぶ〜",
        organization: "中学3年学年出展",
        description: "今年の中3の三線では、伝統的な民謡から人気の沖縄ソングまで3曲を披露します。教室に南国の風を吹かせます！ぜひ321教室にめんそーれ！",
        category: "c3",
        image: "./assets/images/projects/grade/c3/c3-01.webp",
    },
    {
        title: "天空の首里ちゅらピュタ",
        organization: "中学3年学年展示",
        description: "沖縄に転校してきた波津夫が空から降ってきた不思議な少女しーこと共に、天空のちゅらピュタにあるという首里グスクを探すのだが･･･。",
        category: "c3",
        image: "./assets/images/projects/grade/c3/c3-02.webp",
    },
    {
        title: "タカナワンチュ展",
        organization: "中学3年学年展示",
        description: "沖縄を題材とした装飾や展示を廊下や教室内で行います。",
        category: "c3",
        image: "./assets/images/projects/grade/c3/c3-03.webp",
    },
    {
        title: "琉球ハリケーン",
        organization: "中学3年学年展示",
        description: "琉球をコンセプトにした完全人力のコーヒーカップです！僕たちの全力パワーが巻き起こす、スリルの渦をぜひ体験しにきてください。",
        category: "c3",
        image: "./assets/images/projects/grade/c3/c3-04.webp",
    },
    {
        title: "沖縄塩焼きそば",
        organization: "中学3年学年展示",
        description: "沖縄そばの麺を使った特製塩焼きそば！スパムと野菜の旨みがぎゅっと詰まった、文化祭限定の一皿をぜひお召し上がりください！",
        category: "c3",
        image: "./assets/images/projects/grade/c3/c3-05.webp",
    },
    {
        title: "中三エイサー",
        organization: "中学3年学年展示",
        description: "中学三年生の生徒によるエイサーです。昼のステージや後夜祭などでも披露しますぜひご覧ください！",
        category: "c3",
        image: "./assets/images/projects/grade/c3/c3-06.webp",
    },
    {
        title: "まぁ、メイドカフェ",
        organization: "中学3年学年展示",
        description: "沖縄のかわいい人魚たちがメイドになって、沖縄と言えばのお菓子や飲み物でお客様をおもてなしします！",
        category: "c3",
        image: "./assets/images/projects/grade/c3/c3-07.webp",
    },
    {
        title: "縁日でハピハピ",
        organization: "高校1年学年出展",
        description: "縁日気分を満喫できる楽しい企画を用意しています！友達やご家族と一緒に、ぜひお気軽にお立ち寄りください！",
        category: "h1",
        image: "./assets/images/projects/grade/h1/h1-01.webp",
    },
    {
        title: "GALAXY MISSION ～暗黒宙域の制覇～",
        organization: "高校1年学年出展",
        description: "宇宙を舞台に戦闘機に乗って様々な敵を撃ち倒すシューティングゲームです。暗い宇宙への没入感や、世界観が魅力的です。一緒に敵を倒しましょう！",
        category: "h1",
        image: "./assets/images/projects/grade/h1/h1-02.webp",
    },
    {
        title: "メイド喫茶・LOVE注入 ～ Love Injection ～",
        organization: "高校1年学年出展",
        description: "高1の益荒男たちが心を込めてお出迎え。 ご主人様、お嬢様のお帰りをお待ちしております💗",
        category: "h1",
        image: "./assets/images/projects/grade/h1/h1-03.webp",
    },
    {
        title: "にし串（にしぐし）",
        organization: "高校1年学年出展",
        description: "焼き鳥（もも）の販売します。是非ご賞味ください！",
        category: "h1",
        image: "./assets/images/projects/grade/h1/h1-04.webp",
    },
    {
        title: "TAKANAWA SONIC 2026",
        organization: "高校1年学年出展",
        description: "TAKANAWA SONIC が2年ぶりに復刻！前回でも大人気だった出展です！高一学年が送るパフォーマンスをぜひご覧ください！",
        category: "h1",
        image: "./assets/images/projects/grade/h1/h1-05.webp",
    },
    {
        title: "賭輪グルイ",
        organization: "高校2年学年出展",
        description: "運と戦略で勝利をつかめ！チップを賭けて楽しむカジノ体験型カフェ『賭輪グルイ』",
        category: "h2",
        image: "./assets/images/projects/grade/h2/h2-01.webp",
    },
    {
        title: "12の怒れる男たち",
        organization: "高校2年学年出展",
        description: "12人の男が殺人事件の容疑者である1人の黒人少年の無罪を巡って争う!?検察の証拠には合理的疑問があるか!?",
        category: "h2",
        image: "./assets/images/projects/grade/h2/h2-02.webp",
    },
    {
        title: "Don't touch MANsion",
        organization: "高校2年学年展示",
        description: "鬼頭亭から1年…高校2年生の集大成を、2教室分の絶望と恐怖を、さあDon't touch MANsionへようこそ",
        category: "h2",
        image: "./assets/images/projects/grade/h2/h2-03.webp",
    },
    {
        title: "Mine Coaster",
        organization: "高校2年学年展示",
        description: "昨年度も好評のロマン溢れるジェットコースター 今年は、「鉱山」がモチーフです！ 校内最高最速を自負してます！ 是非来てください!",
        category: "h2",
        image: "./assets/images/projects/grade/h2/h2-04.webp",
    },
    {
        title: "港区男子",
        organization: "高校2年学年展示",
        description: "ダンスだけじゃ終わらない！歌や演出も交えた熱いステージ。最高のパフォーマンスで、会場を全力で盛り上げます！",
        category: "h2",
        image: "./assets/images/projects/grade/h2/h2-05.webp",
    },
    {
        title: "S&Yハンバーガーショップ",
        organization: "高校2年学年展示",
        description: "玉ねぎをたっぷり入れたハンバーガーを販売しています。美味しいのでぜひ食べに来てください！",
        category: "h2",
        image: "./assets/images/projects/grade/h2/h2-06.webp",
    },
    {
        title: "フライドポテト",
        organization: "高校3年学年出展",
        description: "フライドポテトを皆さんへ提供する為に、夏の受験勉強へ全力を注ぎました。これが学園生活の最後の楽しみなのです！是非ご賞味ください！",
        category: "h3",
        image: "./assets/images/projects/grade/h3/h3-01.webp",
    },
    {
        title: "TDC2026",
        organization: "ダーツ部",
        description: "毎年大人気のダーツライブホームを体験することができます。ダーツの魅力をぜひ知ってください！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-01.webp",
    },
    {
        title: "プラネタリウムTAKANAWA",
        organization: "天文部",
        description: "完全自作のプラネタリウムを楽しめます。星の事をよく知らないと言う方でも大丈夫！天文部員の解説付きです。座って一休みしたいという方にも是非。",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-02.webp",
    },
    {
        title: "Shall we play shogi?",
        organization: "将棋部",
        description: "初心者も、腕に自信のある人も大歓迎！全国に進んだ部長への挑戦も待ってます。",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-03.webp",
    },
    {
        title: "第12回定期演奏会前進 ～GENGAKU CHALLENGE～",
        organization: "弦楽部",
        description: "ヴァイオリンやチェロなどの美しいアンサンブル演奏をお届けします。",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-04.webp",
    },
    {
        title: "映画研究部",
        organization: "映画研究部",
        description: "部員が制作したオリジナル短編映画の上映を行っています。",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-05.webp",
    },
    {
        title: "鏡花水月",
        organization: "書道部",
        description: "タイトルを見て「！？」と思った人も「なるほど」と思った人も是非一度お越しください！ オリジナルしおり、おみくじもお配りしています！！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-06.webp",
    },
    {
        title: "おいでよ! 理科研の森",
        organization: "理科研究部",
        description: "生物・化学の展示、体験実験をやってます！！君もきっと好奇心がくすぐられるはず！！ワクワクドキドキな理科研の森に、おいでよ！！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-07.webp",
    },
    {
        title: "社歴 日本ふしぎ発見！",
        organization: "社会歴史研究部",
        description: "社会歴史研究部です！今年は動画発表に挑戦します！動画にちなんだクイズも開催し、豪華な景品をご用意しています。ぜひお越しください！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-08.webp",
    },
    {
        title: "美術廻戦 ～最高画力でブチ抜いたる！～",
        organization: "美術部",
        description: "部員の製作した作品展示、プラ板でのキーホルダー作り体験をしています。どけ！！！！俺は美術部員だぞ！！！！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-09.webp",
    },
    {
        title: "写真部展示会",
        organization: "写真部",
        description: "この展示会では生徒がプライベートで撮った写真を展示しています。またクイズもあるので景品獲得を目指してがんばってください！！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-10.webp",
    },
    {
        title: "モケイブ2026",
        organization: "模型部",
        description: "小学生向けにガンプラの製作体験(抽選制)をしています！部員の作品も展示しているので是非お越しください！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-11.webp",
    },
    {
        title: "鉄すぎて滅❣",
        organization: "旅行･鉄道研究部",
        description: "3階で鉄研の部員がとてもvery很정말一生懸命作ったBVEや模型の運転体験を実施します❢是非、立ち寄ってください❢",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-12.webp",
    },
    {
        title: "ジュラシック・ブラス～新たなる音～",
        organization: "吹奏楽部",
        description: "映画「ジュラシック・パーク」のテーマをはじめ、吹奏楽・ポップスなど様々なジャンルの曲を演奏します！ぜひお越しください！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-13.webp",
    },
    {
        title: "まるけん",
        organization: "マルチメディア研究部",
        description: "マルチメディア研究部部員が作ったゲームやVR体験があります。ぜひ遊びに来てください！",
        category: "culture",
        image: "./assets/images/projects/cultural/cultural-14.webp",
    },
    {
        title: "高輪C.C.",
        organization: "ゴルフ部",
        description: "4つのステージを巡り、合計打数の少なさを競います！どなたでも気軽にプレイでき、好スコアを記録すると豪華賞品をゲットできるかもしれません！",
        category: "sports",
        image: "./assets/images/projects/sports/sports-01.webp",
    },
    {
        title: "OB戦",
        organization: "バレーボール部",
        description: "OB戦",
        category: "sports",
        image: "./assets/images/projects/sports/sports-02.webp",
    },
    {
        title: "ディップスじゃなくてディッピンドッツね！",
        organization: "柔道部",
        description: "-196℃のアイスクリームを食べてください！ディップスもやってみてね！？",
        category: "sports",
        image: "./assets/images/projects/sports/sports-03.webp",
    },
    {
        title: "マケドニア料理ケバピ",
        organization: "マケドニア同好会",
        description: "日本で食べられるのはココだけ？！マケドニア料理を是非味わってみてください。",
        category: "club",
        image: "./assets/images/projects/club/club-01.webp",
    },
    {
        title: "すうがくであそぼ",
        organization: "数学同好会",
        description: "来年度の高輪の入試予想問題などさまざまな算数の問題があるので是非！（小学生にはお菓子もあるよ！）",
        category: "club",
        image: "./assets/images/projects/club/club-02.webp",
    },
    {
        title: "超おりがみ姫",
        organization: "折り紙同好会",
        description: "今年の高学祭、新たな巨大作品を作成して、折り紙同好会が帰ってきた‼︎部員たちのの躍動感あふれる作品をぜひご覧ください‼︎",
        category: "club",
        image: "./assets/images/projects/club/club-03.webp",
    },
    {
        title: "ウチナーライブ2026",
        organization: "三線同好会",
        description: "高2パフォーマンス教室にて、今年も沖縄の風をお届けします。",
        category: "club",
        image: "./assets/images/projects/club/club-04.webp",
    },
    {
        title: "DANCING TAKANAWA",
        organization: "ダンス同好会",
        description: "高輪ダンス同好会です。今年はHIP-HOPをメインにダンスを披露します。練習を重ねて作ったダンスを是非一度見に来てください。",
        category: "club",
        image: "./assets/images/projects/club/club-05.webp",
    },
    {
        title: "早押しクイズ体験",
        organization: "クイズ研究同好会",
        description: "参加者に早押しクイズを30問ほど体験させます。また、結果が良かった人には賞品があります。",
        category: "club",
        image: "./assets/images/projects/club/club-05.webp",
    },
    {
        title: "赤い羽根募金",
        organization: "保健委員会",
        description: "募金活動をしています。ご協力いただいた方に赤い羽根をお渡ししています。",
        category: "committee",
        image: "./assets/images/projects/committee/committee-01.webp",
    },
    {
        title: "バザー・制服リサイクル",
        organization: "父母の会",
        description: "制服リサイクル&日用品バザーを開催します！何があるかは当日のお楽しみ♪皆様のご来場をお待ちしています！",
        category: "committee",
        image: "./assets/images/projects/committee/committee-02.webp",
    },
    {
        title: "高学祭パンフレット・ロゴ商品販売",
        organization: "父母の会",
        description: "高輪学園ロゴ入りの文明堂どら焼き・バウムクーヘン・サブレ・リサイクルエプロンなどを販売しています！ぜひお越しください！！",
        category: "committee",
        image: "./assets/images/projects/committee/committee-03.webp",
    },
    {
        title: "語学研修",
        organization: "学校出展",
        description: "アメリカサンタクルーズ短期、長期、及びニュージーランドウェリントンの短期、ターム留学の紹介をします。",
        category: "committee",
        image: "./assets/images/projects/committee/committee-04.webp",
    },
    {
        title: "入試相談",
        organization: "入試広報部",
        description: "個別に入試相談にお答えします。「学校案内・資料」はここで配布しています。",
        category: "committee",
        image: "./assets/images/projects/committee/committee-05.webp",
    },
];

let currentCategory = "all";
let currentSearchQuery = "";
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
            item.organization.includes(currentSearchQuery) ||
            item.description.includes(currentSearchQuery);

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
        return;
    }

    filtered.forEach((item) => {
        const index = projectsData.indexOf(item);
        const article = document.createElement("article");
        article.className = "project-card";
        article.dataset.id = index;
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

        const title = document.createElement("h3");
        title.className = "project-title";
        title.textContent = item.title;

        const organization = document.createElement("span");
        organization.className = "project-organization";
        organization.textContent = item.organization;

        const desc = document.createElement("p");
        desc.className = "project-desc";

        desc.textContent =
            item.description.length > 30
                ? item.description.slice(0, 30) + "..."
                : item.description;

        body.append(title, organization, desc);

        article.append(body, imgWrap);

        els.grid.appendChild(article);
    });
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

function trapFocus(event, container) {
    const focusable = container?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

function openProjectModal(index) {
    const item = projectsData[index];
    if (!item || !els.modalOverlay || !els.modalBody) return;

    els.modalBody.replaceChildren();

    const wrap = document.createElement("div");
    wrap.className = "modal-img-wrap";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.onerror = () => showImageUnavailable(wrap, img);

    wrap.appendChild(img);

    const organization = document.createElement("span");
    organization.className = "modal-organization";
    organization.textContent = item.organization;

    const title = document.createElement("h3");
    title.className = "modal-title";
    title.id = "js-modal-title";
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.className = "modal-desc";
    desc.textContent = item.description;

    els.modalBody.append(wrap, organization, title, desc);

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

    const updateScrollUi = () => {
        const scrollY = window.scrollY;
        if (els.header) els.header.classList.toggle("scrolled", scrollY > 50);
        if (els.backToTop) {
            els.backToTop.classList.toggle("is-show", scrollY > 200);
        }
    };

    let ticking = false;
    window.addEventListener(
        "scroll",
        () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                updateScrollUi();
                ticking = false;
            });
        },
        { passive: true }
    );
    window.addEventListener("pageshow", updateScrollUi);
    updateScrollUi();

    if (els.backToTop) {
        els.backToTop.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: getScrollBehavior() });
        });
    }

    const scrollTargets = document.querySelectorAll(".scroll-fade");
    if ("IntersectionObserver" in window) {
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
    } else {
        scrollTargets.forEach((target) => target.classList.add("is-show"));
    }

    const openMenu = () => {
        if (els.mobileMenu) els.mobileMenu.classList.add("is-active");
        if (els.menuOverlay) els.menuOverlay.classList.add("is-active");
        els.mobileMenu?.setAttribute("aria-hidden", "false");
        els.mobileMenu?.removeAttribute("inert");
        els.openBtn?.setAttribute("aria-expanded", "true");
        updateScrollLock();
        els.closeBtn?.focus();
    };

    const closeMenu = () => {
        if (els.mobileMenu) els.mobileMenu.classList.remove("is-active");
        if (els.menuOverlay) els.menuOverlay.classList.remove("is-active");
        els.mobileMenu?.setAttribute("aria-hidden", "true");
        els.mobileMenu?.setAttribute("inert", "");
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

        if (e.key === "Tab") {
            if (els.modalOverlay?.classList.contains("is-active")) {
                trapFocus(e, els.modalContent);
            } else if (els.mobileMenu?.classList.contains("is-active")) {
                trapFocus(e, els.mobileMenu);
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
            categoryBtns.forEach((b) => b.setAttribute("aria-pressed", "false"));
            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");
            currentCategory = btn.dataset.filter;
            renderProjects();
        });
    });

    if (els.searchInput) {
        els.searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.trim();
            renderProjects();
        });
    }

    renderProjects();
});