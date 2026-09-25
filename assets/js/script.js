const projectsData = [
  {
    title: "TAKANAWA MUSIC FESTIVAL",
    location: "体育館2階",
    description:
      "クラスによる合唱と多彩なパフォーマンスが楽しめる、歌と笑顔と感動にあふれた高輪学園恒例の音楽フェスティバルです。",
    category: "c1",
    image: "./assets/images/projects/grade/c1/c1-01.webp",
  },
  {
    title: "ボウリング、射撃チャレンジ",
    location: "424教室",
    description:
      "様々なコースのボウリングと射撃が一度に楽しめるところになっています。ぜひチャレンジしにきてみてください。",
    category: "c2",
    image: "./assets/images/projects/grade/c2/c2-01.webp",
  },
  {
    title: "謎のお化けの巣窟",
    location: "425教室",
    description:
      "今宵、貴方は2-Bの幽霊達の巣窟へと誘われる。そしてゴールするまで様々なミッションを達成しなければならない。最後まで生きて帰れるのか、全て自分たちの運命である...。",
    category: "c2",
    image: "./assets/images/projects/grade/c2/c2-02.webp",
  },
  {
    title: "ウマ男",
    location: "431教室",
    description:
      "マイナースポーツの体験ゲームで馬券をゲット！生徒が走る競馬で、実際に賭けて応援しよう！ぜひ来てください！",
    category: "c2",
    image: "./assets/images/projects/grade/c2/c2-03.webp",
  },
  {
    title: "オフラインカジノ",
    location: "432教室",
    description:
      "スポーツを基調とした空間で、ポーカーやルーレット、独自のMinnerを体験。合法的なスポーツ賭博と伝統ゲームを融合し、競技の熱狂とカジノの戦略性を存分に楽しめる新たなスポットです。",
    category: "c2",
    image: "./assets/images/projects/grade/c2/c2-04.webp",
  },
  {
    title: "段ボールSports!!",
    location: "433教室",
    description:
      "段ボールで作られた野球盤、サッカー盤、エアホッケーを参加者に提供します。クラスの生徒対参加者の構図にします。",
    category: "c2",
    image: "./assets/images/projects/grade/c2/c2-05.webp",
  },
  {
    title: "BATTLE ZONE",
    location: "434教室",
    description:
      "来場者の方々でチームを組むチーム戦です！味方と協力して対戦相手に勝利しよう！中学2年F組にぜひ来てください！",
    category: "c2",
    image: "./assets/images/projects/grade/c2/c2-06.webp",
  },
  {
    title: "まぁ、メイドカフェ",
    location: "324教室",
    description:
      "沖縄のかわいい人魚たちがメイドになって、沖縄と言えばのお菓子や飲み物でお客様をおもてなしします！",
    category: "c3",
    image: "./assets/images/projects/grade/c3/c3-07.webp",
  },
  {
    title: "沖縄塩焼きそば",
    location: "グラウンド",
    description:
      "沖縄そばの麺を使った特製塩焼きそば！スパムと野菜の旨みがぎゅっと詰まった、文化祭限定の一皿をぜひお召し上がりください！",
    category: "c3",
    image: "./assets/images/projects/grade/c3/c3-05.webp",
  },
  {
    title: "中学3年エイサー",
    location: "322教室",
    description:
      "中学三年生の生徒によるエイサーです。昼のステージや後夜祭などでも披露します。ぜひご覧ください！",
    category: "c3",
    image: "./assets/images/projects/grade/c3/c3-06.webp",
  },
  {
    title: "中三線〜ちゅらいぶ〜",
    location: "322教室",
    description:
      "今年の中3の三線では、伝統的な民謡から人気の沖縄ソングまで3曲を披露します。教室に南国の風を吹かせます！ぜひ321教室にめんそーれ！",
    category: "c3",
    image: "./assets/images/projects/grade/c3/c3-01.webp",
  },
  {
    title: "タカナワンチュ展",
    location: "321教室",
    description: "沖縄を題材とした装飾や展示を廊下や教室内で行います。",
    category: "c3",
    image: "./assets/images/projects/grade/c3/c3-03.webp",
  },
  {
    title: "琉球ハリケーン",
    location: "325教室",
    description:
      "琉球をコンセプトにした完全人力のコーヒーカップです！僕たちの全力パワーが巻き起こす、スリルの渦をぜひ体験しにきてください。",
    category: "c3",
    image: "./assets/images/projects/grade/c3/c3-04.webp",
  },
  {
    title: "天空の首里ちゅらピュタ",
    location: "323教室",
    description:
      "沖縄に転校してきた波津夫が空から降ってきた不思議な少女しーこと共に、天空のちゅらピュタにあるという首里グスクを探すのだが･･･。",
    category: "c3",
    image: "./assets/images/projects/grade/c3/c3-02.webp",
  },
  {
    title: "メイド喫茶・LOVE注入 ～ Love Injection ～",
    location: "308教室",
    description:
      "高1の益荒男たちが心を込めてお出迎え。 ご主人様、お嬢様のお帰りをお待ちしております💗",
    category: "h1",
    image: "./assets/images/projects/grade/h1/h1-03.webp",
  },
  {
    title: "にし串（にしぐし）",
    location: "グラウンド",
    description: "焼き鳥（もも）の販売します。是非ご賞味ください！",
    category: "h1",
    image: "./assets/images/projects/grade/h1/h1-04.webp",
  },
  {
    title: "TAKANAWA SONIC 2026",
    location: "307教室",
    description:
      "TAKANAWA SONIC が2年ぶりに復刻！前回でも大人気だった出展です！高一学年が送るパフォーマンスをぜひご覧ください！",
    category: "h1",
    image: "./assets/images/projects/grade/h1/h1-05.webp",
  },
  {
    title: "禍 ー変な屋敷ー",
    location: "301・302教室",
    description:
      "生者と死者の境が曖昧なこの季節。妖怪が出ると噂の屋敷で肝試しを開催！禍々し過ぎる和風ホラー、一度訪れてみませんか…？",
    category: "h1",
    image: "./assets/images/projects/grade/h1/h1-06.webp",
  },
  {
    title: "GALAXY MISSION ～暗黒宙域の制覇～",
    location: "303教室",
    description:
      "宇宙を舞台に戦闘機に乗って様々な敵を撃ち倒すシューティングゲームです。暗い宇宙への没入感や、世界観が魅力的です。一緒に敵を倒しましょう！",
    category: "h1",
    image: "./assets/images/projects/grade/h1/h1-02.webp",
  },
  {
    title: "縁日でハピハピ",
    location: "304教室前方コモンスペース",
    description:
      "縁日気分を満喫できる楽しい企画を用意しています！友達やご家族と一緒に、ぜひお気軽にお立ち寄りください！",
    category: "h1",
    image: "./assets/images/projects/grade/h1/h1-01.webp",
  },
  {
    title: "賭輪グルイ",
    location: "421教室",
    description:
      "運と戦略で勝利をつかめ！チップを賭けて楽しむカジノ体験型カフェ『賭輪グルイ』",
    category: "h2",
    image: "./assets/images/projects/grade/h2/h2-01.webp",
  },
  {
    title: "S&Yハンバーガーショップ",
    location: "グラウンド",
    description:
      "玉ねぎをたっぷり入れたハンバーガーを販売しています。美味しいのでぜひ食べに来てください！",
    category: "h2",
    image: "./assets/images/projects/grade/h2/h2-06.webp",
  },
  {
    title: "港区男子",
    location: "403教室",
    description:
      "ダンスだけじゃ終わらない！歌や演出も交えた熱いステージ。最高のパフォーマンスで、会場を全力で盛り上げます！",
    category: "h2",
    image: "./assets/images/projects/grade/h2/h2-05.webp",
  },
  {
    title: "Don't touch MANsion",
    location: "401・402教室",
    description:
      "鬼頭亭から1年…高校2年生の集大成を、2教室分の絶望と恐怖を、さあDon't touch MANsionへようこそ",
    category: "h2",
    image: "./assets/images/projects/grade/h2/h2-03.webp",
  },
  {
    title: "Mine Coaster",
    location: "404教室",
    description:
      "昨年度も好評のロマン溢れるジェットコースター 今年は、「鉱山」がモチーフです！ 校内最高最速を自負してます！ 是非来てください!",
    category: "h2",
    image: "./assets/images/projects/grade/h2/h2-04.webp",
  },
  {
    title: "12の怒れる男たち",
    location: "422教室",
    description:
      "12人の男が殺人事件の容疑者である1人の黒人少年の無罪を巡って争う!?検察の証拠には合理的疑問があるか!?",
    category: "h2",
    image: "./assets/images/projects/grade/h2/h2-02.webp",
  },
  {
    title: "フライドポテト",
    location: "グラウンド",
    description:
      "フライドポテトを皆さんへ提供する為に、夏の受験勉強へ全力を注ぎました。これが学園生活の最後の楽しみなのです！是非ご賞味ください！",
    category: "h3",
    image: "./assets/images/projects/grade/h3/h3-01.webp",
  },
  {
    title: "けんどーなつ",
    location: "剣道場",
    description:
      "こんにちは！剣道部です。午前中の紅白戦・招待試合が終わってからの午後にドーナツの販売を行ってます！ぜひ校庭へ買いにきてください！！",
    category: "sports",
    image: "./assets/images/projects/sports/sports-05.webp",
  },
  {
    title: "ディップスじゃなくてディッピンドッツね！",
    location: "グラウンド",
    description:
      "-196℃のアイスクリームを食べてください！ディップスもやってみてね！？",
    category: "sports",
    image: "./assets/images/projects/sports/sports-03.webp",
  },

  {
    title: "バスケットボール部OB戦",
    location: "体育館3階",
    description:
      "高輪バスケ部OBと現役生で試合を行います。皆さんの大きな応援で盛り上げてください！",
    category: "sports",
    image: "./assets/images/projects/sports/sports-04.webp",
  },
  {
    title: "バレーボール部OB戦",
    location: "体育館3階",
    description:
      "OB戦",
    category: "sports",
    image: "./assets/images/projects/sports/sports-02.webp",
  },
  {
    title: "高輪C.C.",
    location: "4階テラス",
    description:
      "4つのステージを巡り、合計打数の少なさを競います！どなたでも気軽にプレイでき、好スコアを記録すると豪華賞品をゲットできるかもしれません！",
    category: "sports",
    image: "./assets/images/projects/sports/sports-01.webp",
  },
  {
    title: "ジュラシック・ブラス～新たなる音～",
    location: "講堂",
    description:
      "映画「ジュラシック・パーク」のテーマをはじめ、吹奏楽・ポップスなど様々なジャンルの曲を演奏します！ぜひお越しください！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-13.webp",
  },
  {
    title: "プラネタリウムTAKANAWA",
    location: "223教室",
    description:
      "完全自作のプラネタリウムを楽しめます。星の事をよく知らないと言う方でも大丈夫！天文部員の解説付きです。座って一休みしたいという方にも是非。",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-02.webp",
  },
  {
    title: "写真部展示会",
    location: "224教室",
    description:
      "この展示会では生徒がプライベートで撮った写真を展示しています。またクイズもあるので景品獲得を目指してがんばってください！！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-10.webp",
  },
  {
    title: "モケイブ2026",
    location: "225教室",
    description:
      "小学生向けにガンプラの製作体験(抽選制)をしています！部員の作品も展示しているので是非お越しください！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-11.webp",
  },
  {
    title: "鏡花水月",
    location: "231教室前方コモンスペース",
    description:
      "タイトルを見て「！？」と思った人も「なるほど」と思った人も是非一度お越しください！ オリジナルしおり、おみくじもお配りしています！！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-06.webp",
  },
  {
    title: "TDC2026",
    location: "333教室",
    description:
      "毎年大人気のダーツライブホームを体験することができます。ダーツの魅力をぜひ知ってください！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-01.webp",
  },
  {
    title: "社歴 日本ふしぎ発見！",
    location: "423教室",
    description:
      "社会歴史研究部です！今年は動画発表に挑戦します！動画にちなんだクイズも開催し、豪華な景品をご用意しています。ぜひお越しください！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-08.webp",
  },
  {
    title: "Shall we play shogi?",
    location: "334教室",
    description:
      "初心者も、腕に自信のある人も大歓迎！全国に進んだ部長への挑戦も待ってます。",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-03.webp",
  },
  {
    title: "鉄すぎて滅❣",
    location: "331教室",
    description:
      "3階で鉄研の部員がとてもvery很정말一生懸命作ったBVEや模型の運転体験を実施します❢是非、立ち寄ってください❢",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-12.webp",
  },
  {
    title: "高輪の魔術師",
    location: "4階北校舎コモンスペース",
    description:
      "高輪の魔術師たちが、いつも何かしら不思議なことやってます。いつでもお気軽にどうぞ。",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-15.webp",
  },
  {
    title: "第12回定期演奏会前進 ～GENGAKU CHALLENGE～",
    location: "音楽室",
    description:
      "ヴァイオリンやチェロなどの美しいアンサンブル演奏をお届けします。",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-04.webp",
  },
  {
    title: "美術廻戦 ～最高画力でブチ抜いたる！～",
    location: "美術室",
    description:
      "部員の製作した作品展示、プラ板でのキーホルダー作り体験をしています。どけ！！！！俺は美術部員だぞ！！！！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-09.webp",
  },
  {
    title: "おいでよ! 理科研の森",
    location: "生物室・化学室",
    description:
      "生物・化学の展示、体験実験をやってます！！君もきっと好奇心がくすぐられるはず！！ワクワクドキドキな理科研の森に、おいでよ！！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-07.webp",
  },
  {
    title: "まるけん",
    location: "パソコン室・5階中廊下",
    description:
      "マルチメディア研究部部員が作ったゲームやVR体験があります。ぜひ遊びに来てください！",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-14.webp",
  },
  {
    title: "すうがくであそぼ",
    location: "305教室",
    description:
      "来年度の高輪の入試予想問題などさまざまな算数の問題があるので是非！（小学生にはお菓子もあるよ！）",
    category: "club",
    image: "./assets/images/projects/club/club-02.webp",
  },
  {
    title: "早押し体験",
    location: "306教室",
    description:
      "参加者に早押しクイズを30問ほど体験させます。また、結果が良かった人には賞品があります。",
    category: "club",
    image: "./assets/images/projects/club/club-06.webp",
  },
  {
    title: "ウチナーライブ2026",
    location: "421教室",
    description: "高2パフォーマンス教室にて、今年も沖縄の風をお届けします。",
    category: "club",
    image: "./assets/images/projects/club/club-04.webp",
  },
  {
    title: "超おりがみ姫",
    location: "332教室",
    description:
      "今年の高学祭、新たな巨大作品を作成して、折り紙同好会が帰ってきた‼︎部員たちのの躍動感あふれる作品をぜひご覧ください‼︎",
    category: "club",
    image: "./assets/images/projects/club/club-03.webp",
  },
  {
    title: "DANCING TAKANAWA",
    location: "外ステージ",
    description:
      "高輪ダンス同好会です。今年はHIP-HOPをメインにダンスを披露します。練習を重ねて作ったダンスを是非一度見に来てください。",
    category: "club",
    image: "./assets/images/projects/club/club-05.webp",
  },
  {
    title: "マケドニア料理ケバピ",
    location: "グラウンド",
    description:
      "日本で食べられるのはココだけ？！マケドニア料理を是非味わってみてください。",
    category: "club",
    image: "./assets/images/projects/club/club-01.webp",
  },
  {
    title: "映研",
    location: "英会話教室",
    description: "部員が制作したオリジナル短編映画の上映を行っています。",
    category: "culture",
    image: "./assets/images/projects/cultural/cultural-05.webp",
  },
  {
    title: "ESS Movie＆短期留学video",
    location: "英会話教室",
    description:
      "ESSで撮影したMovieと短期留学videoを5階の英会話教室にて展示します。",
    category: "club",
    image: "./assets/images/projects/club/club-07.webp",
  },
  {
    title: "TAKATAI高学祭特別号",
    location: "3階北校舎コモンスペース",
    description:
      "校内紙TAKATAIの配布、校内ニュースの放映をしています。 新聞サークル3年の集大成をぜひご覧ください。",
    category: "committee",
    image: "./assets/images/projects/committee/committee-06.webp",
  },
  {
    title: "バザー・制服リサイクル",
    location: "会議室",
    description:
      "制服リサイクル&日用品バザーを開催します！何があるかは当日のお楽しみ♪皆様のご来場をお待ちしています！",
    category: "committee",
    image: "./assets/images/projects/committee/committee-02.webp",
  },
  {
    title: "高学祭パンフレット・ロゴ商品販売",
    location: "地下ホール",
    description:
      "高輪学園ロゴ入りの文明堂どら焼き・バウムクーヘン・サブレ・リサイクルエプロンなどを販売しています！ぜひお越しください！！",
    category: "committee",
    image: "./assets/images/projects/committee/committee-03.webp",
  },
  {
    title: "入試相談",
    location: "503教室",
    description:
      "個別に入試相談にお答えします。「学校案内・資料」はここで配布しています。",
    category: "committee",
    image: "./assets/images/projects/committee/committee-05.webp",
  },
  {
    title: "帰ってきた、フランクフルト",
    location: "グラウンド",
    description:
      "高学祭に数年ぶりにフランクフルトが帰ってきました！ 「安い！早い！うまい！」をモットーに高学祭執行部OBが真心込めて作ります。ぜひご賞味あれ！",
    category: "committee",
    image: "./assets/images/projects/committee/committee-09.webp",
  },
  {
    title: "展望喫茶",
    location: "501・502教室",
    description:
      "校舎最上階から臨む、変貌著しい高輪の眺望を同窓会伝統のコーヒーとともに是非、お楽しみください！！",
    category: "committee",
    image: "./assets/images/projects/committee/committee-07.webp",
  },
  {
    title: "語学研修",
    location: "英会話教室",
    description:
      "アメリカサンタクルーズ短期、長期、及びニュージーランドウェリントンの短期、ターム留学の紹介をします。",
    category: "committee",
    image: "./assets/images/projects/committee/committee-04.webp",
  },
  {
    title: "高輪PR界隈～楽しすぎて滅～",
    location: "503教室",
    description: "ゲームを通じて高輪を疑似体験しよう！景品もあるよ！",
    category: "committee",
    image: "./assets/images/projects/committee/committee-08.webp",
  },
  {
    title: "赤い羽根募金",
    location: "事務室付近",
    description:
      "募金活動をしています。ご協力いただいた方に赤い羽根をお渡ししています。",
    category: "committee",
    image: "./assets/images/projects/committee/committee-01.webp",
  },
];

const adsData = [
  {
    image: "./assets/images/ads/ads-06.webp",
    projectTitle: "中三エイサー",
  },
  {
    image: "./assets/images/ads/ads-04.webp",
    projectTitle: "天空の首里ちゅらピュタ",
  },
  {
    image: "./assets/images/ads/ads-05.webp",
    projectTitle: "沖縄塩焼きそば",
  },
  {
    image: "./assets/images/ads/ads-07.webp",
    projectTitle: "琉球ハリケーン",
  },
  {
    image: "./assets/images/ads/ads-08.webp",
    projectTitle: "まぁ、メイドカフェ",
  },
  {
    image: "./assets/images/ads/ads-01.webp",
    projectTitle: "TAKANAWA SONIC 2026",
  },
  {
    image: "./assets/images/ads/ads-02.webp",
    projectTitle: "メイド喫茶・LOVE注入 ～ Love Injection ～",
  },
  {
    image: "./assets/images/ads/ads-03.webp",
    projectTitle: "禍 ー変な屋敷ー",
  },
  {
    image: "./assets/images/ads/ads-09.webp",
    projectTitle: "プラネタリウムTAKANAWA",
  },
  {
    image: "./assets/images/ads/ads-10.webp",
    projectTitle: "Shall we play shogi?",
  },
  {
    image: "./assets/images/ads/ads-11.webp",
    projectTitle: "けんどーなつ",
  },
  {
    image: "./assets/images/ads/ads-12.webp",
    projectTitle: "美術廻戦 ～最高画力でブチ抜いたる！～",
  },
  {
    image: "./assets/images/ads/ads-13.webp",
    projectTitle: "鏡花水月",
  },
  {
    image: "./assets/images/ads/ads-14.webp",
    projectTitle: "映画研究部",
  },
  {
    image: "./assets/images/ads/ads-15.webp",
    projectTitle: "モケイブ2026",
  },
  {
    image: "./assets/images/ads/ads-16.webp",
    projectTitle: "鉄すぎて滅❣",
  },
  {
    image: "./assets/images/ads/ads-17.webp",
    projectTitle: "まるけん",
  },
  {
    image: "./assets/images/ads/ads-18.webp",
    projectTitle: "12の怒れる男たち",
  },
  {
    image: "./assets/images/ads/ads-19.webp",
    projectTitle: "君のハートに狙い撃ち❤️",
    noModal: true,
  },
];

let currentCategory = "all";
let currentSearchQuery = "";
let lastFocusedElement = null;

const projectIndexByTitle = new Map(
  projectsData.map((project, index) => [project.title, index])
);

const timetableEventProjectMap = {
  "書道部「鏡花水月」": "鏡花水月",
  "ダンス同好会「dancingtakanawa」": "DANCING TAKANAWA",
  "高2パフォーマンス「港区男子」": "港区男子",
  "高1パフォーマンス「takanawasonic2026」": "TAKANAWA SONIC 2026",
  "弦楽部「第12回定期演奏会「前進～gengakuchallenge～」」":
    "第12回定期演奏会前進 ～GENGAKU CHALLENGE～",
  "中三パフォーマンス「エイサー」": "中学3年エイサー",
  "吹奏楽部「ジュラシック・プラス～新たなる音～」":
    "ジュラシック・ブラス～新たなる音～",
  "バレーボール部「バレーボール部ob戦」": "バレーボール部OB戦",
  "バスケットボール部「バスケットボール部ob戦」": "バスケットボール部OB戦",
};

const LOCATION_ICON_SVG = `
  <svg class="location-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
    />
  </svg>
`;

const venueColorMap = {
  外ステージ: "hsl(356, 100%, 40%)",
  体育館3階: "hsl(140, 90%, 33%)",
  講堂: "hsl(215, 95%, 42%)",
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char];
  });
}

function normalizeEventKey(value) {
  return String(value)
    .replace(/[\s\u3000]/g, "")
    .toLowerCase();
}

function getProjectIndexForEvent(eventName) {
  if (!eventName) return -1;

  const projectTitle = timetableEventProjectMap[normalizeEventKey(eventName)];

  if (!projectTitle) return -1;

  const index = projectIndexByTitle.get(projectTitle);

  return index === undefined ? -1 : index;
}

function getEventColor(venue) {
  return venueColorMap[venue] || "#fff";
}

let els = {};

function getScrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

function renderProjects() {
  if (!els.grid) return;

  const query = currentSearchQuery.trim().toLowerCase();

  const filtered = [];

  for (let i = 0; i < projectsData.length; i++) {
    const item = projectsData[i];

    const matchCategory =
      currentCategory === "all" || item.category === currentCategory;

    const matchSearch =
      query === "" ||
      item.title.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    if (matchCategory && matchSearch) {
      filtered.push({ item, index: i });
    }
  }

  if (els.count) {
    els.count.textContent = `該当する出展: ${filtered.length}件`;
  }

  if (filtered.length === 0) {
    els.grid.innerHTML =
      '<p class="no-projects">該当する出展が見つかりませんでした。</p>';
    return;
  }

  const html = filtered
    .map(({ item, index }) => {
      const chars = Array.from(item.description);

      const desc =
        chars.length > 30
          ? chars.slice(0, 30).join("") + "..."
          : item.description;

      return `
        <article class="project-card" data-id="${index}" tabindex="0" role="button"
          aria-label="${escapeHTML(item.title)}の詳細を表示">
          <div class="project-body">
            <h3 class="project-title">${escapeHTML(item.title)}</h3>
            <span class="project-location">${LOCATION_ICON_SVG}<span>${escapeHTML(item.location)}</span></span>
            <p class="project-desc">${escapeHTML(desc)}</p>
          </div>
          <div class="project-img-wrap">
            <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" decoding="async" />
          </div>
        </article>
      `;
    })
    .join("");

  els.grid.innerHTML = html;
}

let adsCurrentIndex = 0;
let adsAutoplayTimer = null;
let adsSlides = [];

function renderAdsSlider() {
  const track = els.adsTrack;

  if (!track || adsData.length === 0) return;

  track.innerHTML = adsData
    .map((ad, i) => {
      const projectIndex = projectIndexByTitle.get(ad.projectTitle) ?? -1;

      const label = ad.noModal
        ? `広告: ${ad.projectTitle}`
        : `広告: ${ad.projectTitle}の詳細を見る`;

      return `
        <button type="button" class="ads-slide"
          data-project-index="${projectIndex}"
          ${ad.noModal ? 'data-no-modal="true"' : ""}
          aria-label="${escapeHTML(label)}">
          <img src="${escapeHTML(ad.image)}" alt="${escapeHTML(ad.projectTitle)}"
            loading="${i === 0 ? "eager" : "lazy"}" decoding="async" />
        </button>
      `;
    })
    .join("");

  if (els.adsTotal) {
    els.adsTotal.textContent = adsData.length;
  }

  adsSlides = Array.from(track.children);

  goToAdSlide(0);
  startAdsAutoplay();
}

function goToAdSlide(index) {
  const n = adsSlides.length;

  if (!n) return;

  adsCurrentIndex = (index + n) % n;

  adsSlides.forEach((s, i) => {
    let diff = (i - adsCurrentIndex + n) % n;

    if (diff > n / 2) {
      diff -= n;
    }

    s.classList.remove("is-active", "is-prev", "is-next", "is-hidden");

    s.tabIndex = diff === 0 ? 0 : -1;

    if (diff === 0) {
      s.classList.add("is-active");
    } else if (diff === 1) {
      s.classList.add("is-next");
    } else if (diff === -1) {
      s.classList.add("is-prev");
    } else {
      s.classList.add("is-hidden");
    }
  });

  if (els.adsNow) {
    els.adsNow.textContent = String(adsCurrentIndex + 1).padStart(2, "0");
  }
}

function stopAdsAutoplay() {
  if (adsAutoplayTimer) {
    clearInterval(adsAutoplayTimer);
    adsAutoplayTimer = null;
  }
}

function restartAdsAutoplay() {
  stopAdsAutoplay();
  startAdsAutoplay();
}

function startAdsAutoplay() {
  const slider = els.adsSlider;

  if (!slider || adsData.length <= 1) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  stopAdsAutoplay();

  adsAutoplayTimer = setInterval(() => {
    goToAdSlide(adsCurrentIndex + 1);
  }, 4000);

  if (!slider.dataset.adsBound) {
    slider.dataset.adsBound = "true";

    slider.addEventListener("mouseenter", stopAdsAutoplay);
    slider.addEventListener("mouseleave", startAdsAutoplay);
    slider.addEventListener("focusin", stopAdsAutoplay);
    slider.addEventListener("focusout", startAdsAutoplay);
  }
}

function initAdsSwipe() {
  const slider = els.adsSlider;

  if (!slider || adsData.length <= 1) return;

  let startX = null;
  let startY = null;
  let pointerId = null;

  const reset = () => {
    startX = null;
    startY = null;
    pointerId = null;
  };

  slider.addEventListener(
    "pointerdown",
    (e) => {
      if (!e.isPrimary) return;

      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
    },
    { passive: true }
  );

  slider.addEventListener(
    "pointerup",
    (e) => {
      if (e.pointerId !== pointerId || startX === null) {
        return;
      }

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      const didSwipe = Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.1;

      reset();

      if (!didSwipe) return;

      slider.addEventListener(
        "click",
        (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
        },
        {
          capture: true,
          once: true,
        }
      );

      if (dx < 0) {
        goToAdSlide(adsCurrentIndex + 1);
      } else {
        goToAdSlide(adsCurrentIndex - 1);
      }

      restartAdsAutoplay();
    },
    { passive: true }
  );

  slider.addEventListener("pointercancel", reset, { passive: true });
}

function showImageUnavailable(container, img) {
  img.remove();
  container.classList.add("image-unavailable");
  container.setAttribute("aria-label", "NO IMAGE");
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

function getTimetableVenueName(location) {
  const venueMap = {
    外ステージ: "外ステージ",
    体育館3階: "体育館3階",
    講堂: "講堂",
  };

  return venueMap[location] || location;
}

function getTimetableVenueFromEvent(eventEl) {
  const dayPanel = eventEl.closest(".timetable-day");
  const column = eventEl.closest(".timetable-column");
  const columns = Array.from(dayPanel?.querySelectorAll(".timetable-column") ?? []);
  const headers = Array.from(dayPanel?.querySelectorAll(".timetable-header-col") ?? []);

  const columnIndex = columns.indexOf(column);

  return getTimetableVenueName(
    headers[columnIndex]?.textContent?.trim() || ""
  );
}

function openModal() {
  lastFocusedElement = document.activeElement;

  els.modalOverlay.classList.add("is-active");
  els.modalOverlay.setAttribute("aria-hidden", "false");

  updateScrollLock();

  els.modalCloseBtn?.focus();
}

function openProjectModal(index, venue) {
  const item = projectsData[index];

  if (!item || !els.modalOverlay || !els.modalBody) {
    return;
  }

  const locationName = getTimetableVenueName(venue || item.location);

  els.modalBody.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" decoding="async" />
    </div>
    <span class="modal-location">${LOCATION_ICON_SVG}<span>${escapeHTML(locationName)}</span></span>
    <h3 class="modal-title" id="js-modal-title">${escapeHTML(item.title)}</h3>
    <p class="modal-desc">${escapeHTML(item.description)}</p>
  `;

  openModal();
}

function openTimetableFallbackModal(eventEl) {
  if (!els.modalOverlay || !els.modalBody) return;

  const location = getTimetableVenueFromEvent(eventEl);

  const eventName =
    eventEl.querySelector(".timetable-event-name")?.textContent?.trim() || "";

  const titleText = String(eventEl.title || "");

  const timeMatch = titleText.match(/^\s*(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);

  const timeRange = timeMatch
    ? `${timeMatch[1]}～${timeMatch[2]}`
    : (eventEl.querySelector(".timetable-event-time")?.textContent?.trim() || "");

  const descHTML = timeRange
    ? `<p class="modal-desc">開催時間: ${escapeHTML(timeRange)}</p>`
    : "";

  els.modalBody.innerHTML = `
    <div class="modal-img-wrap image-unavailable"></div>
    <span class="modal-location">${LOCATION_ICON_SVG}<span>${escapeHTML(location)}</span></span>
    <h3 class="modal-title" id="js-modal-title">${escapeHTML(eventName)}</h3>
    ${descHTML}
  `;

  openModal();
}

function closeProjectModal() {
  if (!els.modalOverlay) return;

  els.modalOverlay.classList.remove("is-active");
  els.modalOverlay.setAttribute("aria-hidden", "true");

  updateScrollLock();

  if (lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }

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
    adsTrack: document.getElementById("js-ads-track"),
    adsSlider: document.getElementById("js-ads-slider"),
    adsNow: document.getElementById("js-ads-counter-now"),
    adsTotal: document.getElementById("js-ads-counter-total"),
    adsPrev: document.getElementById("js-ads-prev"),
    adsNext: document.getElementById("js-ads-next"),
  };

  document.addEventListener(
    "error",
    (e) => {
      const img = e.target;

      if (!img || img.tagName !== "IMG") return;

      const wrap = img.closest(
        ".project-img-wrap, .ads-slide, .modal-img-wrap"
      );

      if (wrap) {
        showImageUnavailable(wrap, img);
      }
    },
    true
  );

  const updateScrollUi = () => {
    const scrollY = window.scrollY;

    if (els.header) {
      els.header.classList.toggle("scrolled", scrollY > 50);
    }

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

      window.scrollTo({
        top: 0,
        behavior: getScrollBehavior(),
      });
    });
  }

  const CONGESTION_EMBED_BASE =
    "https://docs.google.com/presentation/d/e/2PACX-1vQhOG_Ce2BnsZnILWwObQKjCxzOWXOEchWvVbnLHnXPNxKA0D5g33QyrrY2y7dwB_YztBlMG0_eZXwu/pubembed?rm=minimal&slide=";

  const congestionTabs = document.querySelectorAll(".congestion-tab");

  const congestionFrame = document.getElementById("js-congestion-frame");

  if (congestionTabs.length && congestionFrame) {
    const loadedSlides = new Set();

    const activateTab = (tab) => {
      congestionTabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const slideId = tab.dataset.slide;

      if (!slideId) return;

      loadedSlides.add(slideId);

      congestionFrame.src = CONGESTION_EMBED_BASE + slideId;
    };

    congestionTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        if (tab.classList.contains("is-active")) {
          return;
        }

        activateTab(tab);
      });
    });

    const initialTab = document.querySelector(".congestion-tab.is-active");

    if (initialTab?.dataset.slide) {
      loadedSlides.add(initialTab.dataset.slide);

      congestionFrame.src = CONGESTION_EMBED_BASE + initialTab.dataset.slide;
    }
  }

  const timetableTabs = document.querySelectorAll(".timetable-tab");

  const timetableDays = document.querySelectorAll(".timetable-day");

  if (timetableTabs.length && timetableDays.length) {
    const activateDay = (tab) => {
      timetableTabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const day = tab.dataset.day;

      timetableDays.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.dayPanel === day);
      });
    };

    timetableTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        if (tab.classList.contains("is-active")) {
          return;
        }

        activateDay(tab);
      });
    });
  }

  const timetableEvents = document.querySelectorAll(".timetable-event");

  timetableEvents.forEach((eventEl) => {
    const eventName =
      eventEl.querySelector(".timetable-event-name")?.textContent.trim() || "";

    const venue = getTimetableVenueFromEvent(eventEl);

    eventEl.style.setProperty("--tt-event-color", getEventColor(venue));

    const projectIndex = getProjectIndexForEvent(eventName);

    const openModalFn =
      projectIndex < 0
        ? () => openTimetableFallbackModal(eventEl)
        : () => openProjectModal(projectIndex, venue);

    eventEl.classList.add("is-clickable");
    eventEl.tabIndex = 0;
    eventEl.setAttribute("role", "button");
    eventEl.setAttribute("aria-label", `${eventName}の詳細を表示`);

    eventEl.addEventListener("click", openModalFn);

    eventEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModalFn();
      }
    });
  });

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
      {
        rootMargin: "0px 0px -10% 0px",
      }
    );

    scrollTargets.forEach((target) => observer.observe(target));
  } else {
    scrollTargets.forEach((target) => target.classList.add("is-show"));
  }

  const openMenu = () => {
    if (els.mobileMenu) {
      els.mobileMenu.classList.add("is-active");
    }

    if (els.menuOverlay) {
      els.menuOverlay.classList.add("is-active");
    }

    els.mobileMenu?.setAttribute("aria-hidden", "false");
    els.mobileMenu?.removeAttribute("inert");
    els.openBtn?.setAttribute("aria-expanded", "true");

    updateScrollLock();

    els.closeBtn?.focus();
  };

  const closeMenu = () => {
    if (els.mobileMenu) {
      els.mobileMenu.classList.remove("is-active");
    }

    if (els.menuOverlay) {
      els.menuOverlay.classList.remove("is-active");
    }

    els.mobileMenu?.setAttribute("aria-hidden", "true");
    els.mobileMenu?.setAttribute("inert", "");
    els.openBtn?.setAttribute("aria-expanded", "false");

    updateScrollLock();

    els.openBtn?.focus();
  };

  if (els.openBtn && els.closeBtn && els.mobileMenu) {
    els.openBtn.addEventListener("click", openMenu);
    els.closeBtn.addEventListener("click", closeMenu);

    if (els.menuOverlay) {
      els.menuOverlay.addEventListener("click", closeMenu);
    }
  }

  const scrollLinks = document.querySelectorAll(".js-scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const target = document.getElementById(link.dataset.scrollTarget);

      if (!target) return;

      target.scrollIntoView({
        behavior: getScrollBehavior(),
        block: "start",
      });

      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );

      if (link.classList.contains("js-mobile-link")) {
        closeMenu();
      }
    });
  });

  if (els.modalCloseBtn) {
    els.modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (els.modalOverlay) {
    els.modalOverlay.addEventListener("click", (e) => {
      if (e.target === els.modalOverlay) {
        closeProjectModal();
      }
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
      if (e.key !== "Enter" && e.key !== " ") {
        return;
      }

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
    let searchTimer = null;

    els.searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.trim();

      clearTimeout(searchTimer);

      searchTimer = setTimeout(renderProjects, 150);
    });
  }

  if (els.adsTrack) {
    els.adsTrack.addEventListener("click", (e) => {
      const slide = e.target.closest(".ads-slide");

      if (!slide || slide.dataset.noModal === "true") return;

      const projectIndex = Number(slide.dataset.projectIndex);

      if (projectIndex >= 0) {
        openProjectModal(projectIndex);
      }
    });
  }

  if (els.adsPrev) {
    els.adsPrev.addEventListener("click", () => {
      goToAdSlide(adsCurrentIndex - 1);
      restartAdsAutoplay();
    });
  }

  if (els.adsNext) {
    els.adsNext.addEventListener("click", () => {
      goToAdSlide(adsCurrentIndex + 1);
      restartAdsAutoplay();
    });
  }

  renderProjects();
  renderAdsSlider();
  initAdsSwipe();

  if (els.adsSlider && adsData.length > 1 && "IntersectionObserver" in window) {
    let adsHasStarted = els.adsSlider.dataset.adsStarted === "true";

    const adsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!adsHasStarted) {
              adsHasStarted = true;

              els.adsSlider.dataset.adsStarted = "true";

              goToAdSlide(0);
            }

            startAdsAutoplay();
          } else {
            stopAdsAutoplay();
          }
        });
      },
      {
        rootMargin: "0px 0px 0px 0px",
      }
    );

    adsObserver.observe(els.adsSlider);
  }
});