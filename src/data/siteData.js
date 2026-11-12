// 董勳遠主任個人網站 - 核心資料庫 (完整整合自 116年校長甄試公務人員履歷表)

export const personalInfo = {
  name: "董勳遠",
  nameEn: "Tung, Hsun-Yuan",
  title: "南投縣立南投國中 學務主任",
  roles: "前教育部杏壇芬芳獎得主 · 全國大愛菁師獎得主 · 國家級曲棍球金牌教練",
  birthplace: "南投縣竹山鎮",
  phone: "0921-641967",
  email: "a0921641967@gmail.com",
  currentSchool: "南投縣立南投國民中學",
  motto: "愛，讓孩子比昨天更優秀",
  subMotto: "打造一所不怕失敗！讓孩子擁有「韌性與夢想」的學校！",
  deskMotto: "今天要勝過昨天；明天勝過今天！",
  lifePoem: "千錘萬鑿出深山，烈火焚燒若等閒；粉身碎骨渾不怕，要留卓越在教育！",
};

export const keyStats = [
  { value: "23+", label: "年教育基層深耕", desc: "導師、組長、教務、學務、補校全方位歷練" },
  { value: "14", label: "年學務輔導長才", desc: "帶領逆風少年翻轉人生，創造高峰心流" },
  { value: "6", label: "座全國大賽冠軍", desc: "中正盃與全國協會盃曲棍球國男組冠軍" },
  { value: "2", label: "座國際大賽金牌", desc: "美國加州盃16歲組國際冠軍 · 澳洲國際錦標賽冠軍" },
  { value: "450萬", label: "貸款買房育才", desc: "為了球隊與弱勢孩子，自掏腰包提供溫暖家園" },
  { value: "650", label: "頂點年功俸點", desc: "連續多年考績優良，治學獲親師生高度肯定" },
];

export const flywheels = [
  {
    id: "character",
    name: "品格賦能",
    eng: "Character & Virtue",
    color: "from-amber-500 to-red-500",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    icon: "HeartHandshake",
    summary: "以孝道為根、日行一善，從心念翻轉行為，培育仁愛利他的有感少年",
    highlights: [
      "晨間日行一善引導與文昌帝君陰騭文小故事啟發良知",
      "辦理「馨月天空校際品格音樂會」，打造孝德育才文化氛圍",
      "每季表揚「品格之星」，型塑校園模範標竿",
      "推動社會關懷：為植物人、華山基金會獨居老人募款募發票、寒士吃尾牙",
      "建立友善校園零霸凌，透過童軍日行一善翻轉校園次文化"
    ],
    image: "./images/stories/scouts_service.jpg",
    imageCaption: "帶領孩子參與偏鄉服務與童軍日行一善，啟發利他能量"
  },
  {
    id: "international",
    name: "國際翅膀",
    eng: "Global Wings",
    color: "from-blue-600 to-cyan-500",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    icon: "Globe",
    summary: "穿上國家隊戰袍征戰世界，跨國交流開拓視野，培育具備全球素養的世界公民",
    highlights: [
      "率領中華代表隊勇奪美國加州盃國際曲棍球錦標賽 16 歲組國際冠軍",
      "遠征澳洲國際錦標賽勇奪冠軍，帶孩子參訪雪梨歌劇院與奧運田徑場",
      "主辦日本栗原市國際教育桌球友誼賽交流，開拓國際友誼",
      "深化新加坡南華中學教育交流，兩校體育與文化深度融合",
      "推動雙語教育與在地創生國際研討會，涵養在地出發的國際視野"
    ],
    image: "./images/stories/singapore_exchange.jpg",
    imageCaption: "新加坡南華中學與南投國中體育文化交流，術德雙修、文武合一"
  },
  {
    id: "tech",
    name: "科技斜槓",
    eng: "Tech & Innovation",
    color: "from-cyan-600 to-indigo-600",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    icon: "Cpu",
    summary: "科技前導深耕、跨域創客實作，培養孩子面對未來的問題解決力",
    highlights: [
      "擔任十二年國教「科技前導學校」核心團隊，推動智慧校園與數位素養",
      "帶領學生參加全國「STEAM之星競賽」榮獲亞軍",
      "參加全國行動學習計劃競賽，集結教師智慧勇奪「金杏獎」殊榮",
      "引進故宮科技團隊入校協作：雷雕、毛公鼎跨域課程教學",
      "iPad自主學習教案深耕SDGs跨域課程，讓科技真正服務學習"
    ],
    image: "./images/flywheel/tech_pioneer.jpg",
    imageCaption: "推動行動學習與科技前導學校，AI智慧助教輔助自主探索"
  },
  {
    id: "reading",
    name: "閱讀立志",
    eng: "Reading & Literacy",
    color: "from-emerald-600 to-teal-600",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    icon: "BookOpen",
    summary: "營造書香環境、推動增A去C衝刺會考，用閱讀餵養心靈，賦予孩子飛翔翅膀",
    highlights: [
      "協力爭取 250 萬元改造校園圖書館，打造誠品風「社區共讀站」",
      "導入慈濟靜思書軒活化閱讀，新住民學子與親師共讀共學",
      "推動會考「增A去C衝刺計劃」：承諾5A致贈紀念衫，那年親手送出17件！",
      "邀請滿級分榜首學長姐返校傳授讀書策略，建立正向學習鷹架",
      "跨領域協同教學：手做「悅讀書架」，STEAM動手做培養自信心"
    ],
    image: "./images/flywheel/reading_steam.jpg",
    imageCaption: "跨領域協同教學：親手打造悅讀書架，結合工藝與閱讀"
  }
];

export const touchingStories = [
  {
    id: "crazy-teacher",
    tag: "金牌教練的無悔承諾",
    title: "被稱作「教育瘋子」的背後：再貸款 450 萬買房子給孩子住",
    summary: "「教練，我們穿上 CHINESE TAIPEI 就是要贏，您大膽操吧！」為了一群放牛班孩子，他用全副身家與生命托舉他們的未來。",
    content: [
      "董勳遠主任常笑稱自己求學歷程曾是「國中放牛班7科總分132分」的後段班孩子。幸運的是，在人生的十字路口遇到了伯樂老師與校長師父，拉他一把走向體育競技之路，成為國家代表隊國手，進而攻讀碩士、投身教職。",
      "分發回到家鄉南投任教時，曲棍球隊多數孩子來自單親、隔代教養、經濟弱勢甚至家暴環境。看到孩子們在不穩定的環境中掙扎，董主任在自己已有房貸的情況下，毅然決定再貸款450萬購買一棟房子，提供給球隊孩子免費住宿與培力。",
      "「我老婆常說我是教育的瘋子！」董主任帶著太太親自煮三餐給選手補充營養，夜間陪孩子寫功課、讀書。他對孩子說：「夢想是團隊的靈魂！我們要稱霸全國冠軍，教練帶大家去美國迪士尼樂園找米老鼠！」",
      "孩子們咬緊牙關挺過魔鬼訓練，果真連奪中正盃全國總冠軍，並代表國家赴美勇奪加州盃16歲組國際冠軍、赴澳奪得國際錦標賽冠軍！那一刻，所有師生與家長在異國球場相擁落淚。"
    ],
    highlightQuote: "「教練是那個比我自己，還更相信自己會拿冠軍的人！」",
    image: "./images/stories/us_champions.jpg",
    caption: "赴美勇奪國際錦標賽冠軍，實現帶孩子去迪士尼與米老鼠合照的承諾"
  },
  {
    id: "turning-lives",
    tag: "14年學務逆風輔導",
    title: "「要一起變好」的承諾書與紅手印：拉住一個孩子，等於救一個家庭",
    summary: "面對被記滿3大過、險些被退學的「惡虎腸龍」，董主任不用處罰代替教導，而是用15個月的陪伴與日行一善，翻轉了孩子的生命旅程。",
    content: [
      "在學務處長達14年的歲月中，董主任見證過形形色色的迷惘少年。曾有一屆班級被視為「惡虎腸龍」，帶頭的敬驊同學人緣極佳、領導力強，但因衝動抗拒而大過滿身，面臨強迫轉學的命運。",
      "董主任沒有放棄，他把孩子找來，在學務處大樹下簽下了一張具名的「要一起變好的承諾書」，孩子們親自蓋上紅指印。董主任用整整15個月的時間，每天中午不睡午覺陪伴他們愛校服務、共讀文昌帝君陰騭文啟迪良知。",
      "董主任任命敬驊為童軍大隊長：「孩子，放對位置就是大將之才！」帶領他們去仁愛鄉偏鄉服務、為創世基金會植物人募款、為華山基金會獨居老人送年菜。這群孩子從自卑叛逆，蛻變成榮獲全縣童軍績優小隊長的優秀青年。",
      "每逢下課，董主任廣播總會響起：「記得回家日行一善，為爸爸、媽媽、阿公、阿嬤盛一碗熱飯、熱湯！」這句叮嚀，深植在成千上萬投中學子的心中。"
    ],
    highlightQuote: "「教育不是把全部的孩子排成一條線，而是拉成一條橫線，發揮每一位孩子的天賦將才！」",
    image: "./images/letters/rec_tseng.jpg",
    caption: "曾敬驊同學親筆推薦函與當年的承諾書：我相信，董哥一定是一位好校長！"
  },
  {
    id: "school-as-home",
    tag: "卓越治理與團隊凝聚",
    title: "以校為家、同仁即家人：有溫度的行政領導與跨域社群",
    summary: "擔任教師會理事長、三處室主任，他深知「一個人的力量有限，一群人的力量無窮」，用真誠服務行政，帶領教師走出單打獨鬥。",
    content: [
      "在行政與教學領導上，董主任始終堅持「以身作則、真誠關懷」。每逢過年、寒流來襲，董主任總會在辦公室準備驚喜熱湯與圍爐，感謝團隊夥伴一整年對學校的無私奉獻。",
      "擔任教師會理事長期間，他悉心關照同仁權益與退休榮譽，親手打造「立德育才」專屬獎座致贈榮退教師；同仁或代理老師考取正式教職、司法人員，他更是第一位舉杯祝賀的溫暖大家長。",
      "在課綱轉型與教學創新上，他籌組跨領域教師學習社群，推動備課、觀課、議課，甚至邀請南投名師王政忠老師蒞校觀課對話，引進故宮科技團隊。他常說：「以戰養戰，無形中全面提升團隊戰鬥力，而且有經費挹注學校設備，何樂而不為？」"
    ],
    highlightQuote: "「施振榮說：如果領導人無法不斷學習成長，將成為組織進步的障礙。校長即是終身學習者！」",
    image: "./images/flywheel/music_night.jpg",
    caption: "跨校策動馨月天空校際音樂會，凝聚親師生與社區的磅礡能量"
  }
];

export const recommendationLetters = [
  {
    id: "chen",
    name: "陳恒旭 校長",
    title: "南投縣立南投國民中學 現任校長",
    relationship: "行政長官 · 治校同行者",
    quote: "「以孝德為矩，點亮孩子心燈的教育提燈人，其孩子的成就就是董主任一生的資產！」",
    summary: "董勳遠主任是真正的『教育瘋子』！為了弱勢、早親、隔代教養的孩子，自掏腰包買房陪讀；在長達22年的教育歷程中，他像水牛犁田，在翻出深層泥土中播下天賦與夢想種子。他是真誠無私、心口合一的好夥伴！",
    image: "./images/letters/rec_chen.jpg"
  },
  {
    id: "you",
    name: "游顥 縣議員 / 立法委員",
    title: "南投縣救國團團友會長 · 民意代表",
    relationship: "社會賢達 · 地方教育夥伴",
    quote: "「不放棄每一個小手的大愛金牌教練！是南投教育界的標竿與典範！」",
    summary: "一位國中聯考7科總分132分的放牛班學生，因教育而翻轉人生；返鄉後更將這份大愛奉獻給每一個邊緣孩子。自掏腰包借貸450萬為孩子築夢，孩子存錢為他買蛋糕慶生，這份真情就是教育最動人的模樣。",
    image: "./images/letters/rec_you.jpg"
  },
  {
    id: "wu",
    name: "吳政緯 會長",
    title: "救國團南投縣團友會總會長",
    relationship: "公益夥伴 · 社會教育前輩",
    quote: "「把學生當自己孩子照顧的大愛將師！如《麥田捕手》守護在懸崖邊緣。」",
    summary: "當教育面臨行政逃亡潮時，董主任卻始終一本初心，蹲點學務輔導弱勢。他帶領的『千里馬團隊』讓全校師生心悅誠服，是不可多得的卓越學校領航者！",
    image: "./images/letters/rec_wu.jpg"
  },
  {
    id: "jian",
    name: "簡淑玲 老師",
    title: "南投國中資深優良導師",
    relationship: "班級教學夥伴 · 親歷見證者",
    quote: "「一位心裝著孩子和學校未來的良師校長！小董主任的教育魔法令人由衷佩服！」",
    summary: "面對班級最頭痛的頑皮孩子，小董主任用15個月的愛校服務與陰騭文晨讀，讓孩子們心甘情願寫下承諾書並蓋手印。他以身作則，是我們文化改變的燈塔，堪稱教育之光！",
    image: "./images/letters/rec_jian.jpg"
  },
  {
    id: "tseng",
    name: "曾敬驊 同學",
    title: "曾任南投國中童軍大隊長 · 現就讀僑泰高中",
    relationship: "逆風翻轉受輔學生",
    quote: "「我相信，董哥一定是一位好校長！董主任拉了我一把，改變了我一生。」",
    summary: "國二時我是個大屁孩，記過速度比銷過還快，面臨被退學。董哥找我簽承諾書，給我重新開始的機會，還任命我當童軍大隊長。董哥請我們吃好康、買勵志書給我，他自掏腰包的愛，成為我堅持下去的最大動力！",
    image: "./images/letters/rec_tseng.jpg"
  },
  {
    id: "yang",
    name: "楊富翔 國手 / 教師",
    title: "前曲棍球國手 · 現任代課教師",
    relationship: "冠軍隊長 · 教育傳承者",
    quote: "「亦師亦友，如兄如父！教練是那個比我自己還更相信我會拿冠軍的人！」",
    summary: "92年董教練接手球隊，第一句話就是：『我們要一起稱霸全國冠軍！』教練開自己車載我們去外縣市集訓，甚至自己借貸450萬買房給我們住。受教練影響，我也走上體育與教育之路，教練是我們永遠的榜樣！",
    image: "./images/letters/rec_yang.jpg"
  }
];

export const honorsList = [
  { year: "115年", title: "大台中好人好事暨社會教育奉獻楷模獎", org: "大台中好人好事協會", highlight: true },
  { year: "114年", title: "黃昆輝教授教育基金會之大愛教師獎", org: "財團法人黃昆輝教授教育基金會", highlight: true },
  { year: "112年", title: "教育部杏壇芬芳獎", org: "中華民國教育部", desc: "國中組全縣僅3人入選，全國19人，獲教育部高規格表揚", highlight: true },
  { year: "112年", title: "第十二屆全國教育大愛「菁師獎」", org: "教育大愛菁師獎委員會", desc: "民間師鐸獎最高榮譽，前總統馬英九先生親自頒獎表揚", highlight: true },
  { year: "112年", title: "南投縣杏壇芬芳獎", org: "南投縣政府", desc: "許淑華縣長親自頒發表揚，肯定對偏鄉與弱勢學生之卓越奉獻", highlight: true },
  { year: "112年", title: "國立彰化師範大學 52 週年傑出校友之杏壇芬芳獎", org: "國立彰化師範大學", desc: "陳明飛校長親自頒贈，感謝母校培育並為校爭光", highlight: true },
  { year: "歷年", title: "南投縣特殊優良教師獎", org: "南投縣政府" },
  { year: "歷年", title: "南投縣學務有功人員", org: "南投縣政府" },
  { year: "歷年", title: "救國團學校教育服務獎", org: "中國青年救國團" },
  { year: "歷年", title: "南投縣傑出教練獎", org: "南投縣體育會" },
  { year: "歷年", title: "台灣省體育優秀青年", org: "台灣省體育會" },
  { year: "競賽", title: "美國加州盃國際曲棍球錦標賽 16 歲組國際冠軍", org: "國際曲棍球總會認證", highlight: true },
  { year: "競賽", title: "澳洲國際曲棍球錦標賽 C 組國際冠軍", org: "澳洲曲棍球協會" },
  { year: "競賽", title: "全國中正盃與全國協會盃曲棍球錦標賽 6 次冠軍", org: "中華民國曲棍球協會" }
];

export const careerTimeline = [
  {
    period: "114.08 ~ 迄今",
    school: "南投縣立南投國中",
    role: "學務主任（一級主管）",
    desc: "深化校園品格與安全治理，推動友善校園零霸凌、正向輔導管教與童軍偏鄉服務。"
  },
  {
    period: "111.08 ~ 114.07",
    school: "南投縣立南投國中",
    role: "補校校務主任（一級主管）",
    desc: "推動新住民成人終身學習、補校學力檢定、跨齡共學與社區共讀站深耕。"
  },
  {
    period: "109.08 ~ 111.07",
    school: "南投縣立南投國中",
    role: "學務主任（一級主管）",
    desc: "回鍋掌舵學務，成功引導逆風青少年回歸正軌，推行日行一善與社會公益募款。"
  },
  {
    period: "107.08 ~ 108.07",
    school: "南投縣立南投國中",
    role: "教務主任（一級主管）",
    desc: "推動十二年國教科技前導學校、行動學習、誠品風圖書館改造與增A去C衝刺計劃。"
  },
  {
    period: "104.08 ~ 107.07",
    school: "南投縣立南投國中",
    role: "學務主任（一級主管）",
    desc: "策劃馨月天空孝親校際音樂會、國樂口琴雙料優等、全縣環保與反毒反霸凌示範學校。"
  },
  {
    period: "100.08 ~ 104.07",
    school: "南投縣立延和國中",
    role: "教學組長 · 體育組長 · 體育教師",
    desc: "兼任教師會理事長、曲棍球國家代表隊教練，率隊在國內外錦標賽屢創佳績。"
  },
  {
    period: "92.07 ~ 100.07",
    school: "南投縣立延和國中",
    role: "生活教育組長 · 體育組長 · 導師",
    desc: "基層深耕歷練，獲南投縣正向輔導管教優良範例優選、全國運動會優良教練。"
  },
  {
    period: "89.08 ~ 90.06",
    school: "臺中市立雙十國中",
    role: "實習教師",
    desc: "完成中等教育實習與教師資格檢定合格。"
  }
];

export const licenses = [
  { name: "中等學校體育教師證", no: "中字第 9000322 號", auth: "教育部" },
  { name: "中等學校教育學程", no: "教程字第 0033 號", auth: "國立台灣體育學院" },
  { name: "曲棍球 A 級教練證", no: "證號 002448", auth: "台灣省體育會" },
  { name: "曲棍球 A 級裁判證", no: "證號 004735", auth: "台灣省體育會" },
  { name: "羽球 B 級教練證", no: "投羽鴻字第 147 號", auth: "南投縣體育會" },
  { name: "羽球 B 級裁判證", no: "投羽鴻字第 152 號", auth: "南投縣體育會" },
  { name: "學校衛生教育種子師資", no: "進證字第 002554 號", auth: "國立台灣師範大學" },
  { name: "國民體適能檢測員證", no: "T1031007", auth: "中華民國體育學會" },
  { name: "性侵害性騷擾調查初階人員", no: "教輔特字第 1120183259 號", auth: "南投縣政府" },
];

export const mediaNews = [
  {
    title: "南投國中補校主任董勳遠榮獲教育部杏壇芬芳獎 接受頒獎表揚",
    source: "中國時報 / 地方專訪",
    date: "112年6月27日",
    summary: "投入教育界已擁有22年資歷的南投國中補校主任董勳遠，熱中教育的他早年因帶曲棍球隊，再為學生貸款450萬購買一棟房子供球隊居住，被形容為『教育瘋子』，實至名歸榮獲教育部杏壇芬芳獎肯定！",
    image: "./images/news/news_xintan.jpg"
  },
  {
    title: "彰師大52週年校慶 南投國中補校主任董勳遠返校領獎 感謝長官肯定",
    source: "中央社 / 教育新聞",
    date: "112年10月28日",
    summary: "國立彰化師範大學52週年校慶，頒發傑出校友杏壇芬芳獎。董勳遠主任在夫人陳雅琪陪同下出席領獎，校長陳明飛親自頒發獎座，肯定其投身基層教育、成就無數學子。",
    image: "./images/news/news_ncue.jpg"
  },
  {
    title: "學生募款請客 寒士吃尾牙",
    source: "地方創生新聞報導",
    date: "創世基金會公益實錄",
    summary: "董勳遠主任率領南投國中學子發起愛心募款，為創世基金會與弱勢街友籌募尾牙餐費。阿龍同學在學校是獨霸一方的霸王，今天卻留下男兒淚，學會關懷、互助與社會責任！",
    image: "./images/news/news_charity.jpg"
  }
];

export const photoGallery = [
  {
    title: "前總統馬英九親自頒發 全國大愛菁師獎",
    category: "honors",
    image: "./images/awards/award_president_ma.jpg",
    desc: "112年第十二屆教育大愛菁師獎頒獎典禮，榮獲國中組大獎"
  },
  {
    title: "南投縣長許淑華親頒 杏壇芬芳獎",
    category: "honors",
    image: "./images/awards/award_magistrate_hsu.jpg",
    desc: "感謝縣長對基層教育與弱勢輔導的大力肯定與支持"
  },
  {
    title: "前教育部長吳清基勉勵：更上一層樓，擴大教育服務",
    category: "honors",
    image: "./images/awards/award_minister_wu.jpg",
    desc: "大愛菁師獎頒獎會場，部長親切期勉為教育奉獻更多心力"
  },
  {
    title: "彰師大 52 週年校慶 傑出校友表揚",
    category: "honors",
    image: "./images/awards/award_ncue_52.jpg",
    desc: "母校校長親自頒贈傑出校友之杏壇芬芳獎"
  },
  {
    title: "榮獲大愛菁師獎「遠滿全家福」",
    category: "honors",
    image: "./images/portrait/family_award.jpg",
    desc: "感謝最愛的家人與妻子無條件的支持，成為最強大的教育後盾"
  },
  {
    title: "美國加州盃國際曲棍球錦標賽 勇奪16歲組冠軍",
    category: "sports",
    image: "./images/stories/us_champions.jpg",
    desc: "率領延和國中孩子穿上 CHINESE TAIPEI 戰袍擊敗歐美強隊，揚威加州"
  },
  {
    title: "新加坡南華中學 VS 南投國中 體育運動交流",
    category: "international",
    image: "./images/stories/singapore_exchange.jpg",
    desc: "術德雙修、文武合一，用心接待每一位國際學子"
  },
  {
    title: "童軍考驗工程營暨偏鄉服務體驗營",
    category: "character",
    image: "./images/stories/scouts_service.jpg",
    desc: "讓逆風孩子走進偏鄉，用雙手服務別人，體悟施比受更有福"
  },
  {
    title: "行動學習推動計畫 全國參展團隊",
    category: "tech",
    image: "./images/flywheel/tech_pioneer.jpg",
    desc: "導入AI智慧機器人與數位載具，榮獲教育部金杏獎肯定"
  },
  {
    title: "跨領域協同教學：悅讀書架動手做",
    category: "reading",
    image: "./images/flywheel/reading_steam.jpg",
    desc: "STEAM動手做結合閱讀推廣，培養跨域解決問題的實踐力"
  },
  {
    title: "南投國中 105 學年度馨月天空校際品格音樂會",
    category: "character",
    image: "./images/flywheel/music_night.jpg",
    desc: "策動國中小三校五隊音樂聯盟演出，感念偉大母親"
  },
  {
    title: "為孩子的脊椎而設計：全新運動服與護脊書包革新",
    category: "management",
    image: "./images/flywheel/backpack_design.jpg",
    desc: "親師生共同參與設計，兼具美感與人體工學的品牌再造"
  },
  {
    title: "座右銘：今天要勝過昨天；明天勝過今天！",
    category: "portrait",
    image: "./images/portrait/desk_motto.jpg",
    desc: "辦公桌上永遠燃燒的教育熱情，時時自我惕勵與陪伴孩子"
  }
];

