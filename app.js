const itinerary = [
  {
    date: "2026-09-29",
    city: "香港 → 法兰克福",
    cityEn: "Hong Kong to Frankfurt",
    overnight: "航班",
    transport: "LH797 · 香港 23:25 → 法兰克福 06:20（次日）",
    transportIcon: "plane-takeoff",
    activities: [
      ["20:25", "抵达香港机场", "预留约 3 小时办理值机和安检", "Hong Kong International Airport"],
      ["23:25", "搭乘 LH797", "夜航前往法兰克福", "Frankfurt Airport"]
    ]
  },
  {
    date: "2026-09-30",
    city: "法兰克福 → 卢森堡",
    cityEn: "Frankfurt to Luxembourg",
    overnight: "卢森堡",
    transport: "LH797 06:20 抵达法兰克福；准点且行李直挂时可安排约 2 小时 City Walk；LH5642 13:10 → 卢森堡 14:00。",
    transportIcon: "plane-landing",
    activities: [
      ["06:20", "抵达法兰克福", "先确认行李直挂、下一程登机牌与航班状态", "Frankfurt Airport"],
      ["07:45", "搭乘 S8 / S9 进城", "Frankfurt Flughafen Regionalbahnhof → Hauptwache，约 15 分钟", "Hauptwache Frankfurt"],
      ["08:10", "罗马广场与新老城", "木筋建筑、正义喷泉与法兰克福大教堂", "Romerberg Frankfurt"],
      ["09:00", "铁桥与美因河畔", "过桥短暂观景后原路返回老城", "Eiserner Steg Frankfurt"],
      ["09:30", "老城早餐", "可在 Kleinmarkthalle 周边快速用餐", "Kleinmarkthalle Frankfurt"],
      ["10:15", "搭乘 S8 / S9 返回机场", "建议 10:40 左右抵达机场；若 08:00 前未能进城则取消 City Walk", "Frankfurt Airport"],
      ["13:10", "搭乘 LH5642", "法兰克福 → 卢森堡", "Luxembourg Airport"],
      ["14:00", "抵达卢森堡", "前往 Youth Hostel Luxembourg City 放行李并办理入住", "Youth Hostel Luxembourg City"],
      ["16:30", "老城短途漫步", "按体力调整，早些休息", "Chemin de la Corniche Luxembourg"]
    ]
  },
  {
    date: "2026-10-01",
    city: "卢森堡 → 巴塞罗那",
    cityEn: "Luxembourg to Barcelona",
    overnight: "巴塞罗那",
    transport: "FR3109 · 卢森堡 13:25 → 巴塞罗那 15:20。",
    transportIcon: "plane",
    activities: [
      ["08:30", "卢森堡半日游", "老城、宪法广场与 Corniche", "Luxembourg Old Town"],
      ["11:00", "前往卢森堡机场", "预留值机与安检时间", "Luxembourg Airport"],
      ["13:25", "搭乘 FR3109", "LUX → BCN", "Barcelona-El Prat Airport"],
      ["15:20", "抵达巴塞罗那", "前往 TOC Hostel Barcelona 办理入住", "TOC Hostel Barcelona"]
    ]
  },
  {
    date: "2026-10-02",
    city: "巴塞罗那",
    cityEn: "Barcelona",
    overnight: "巴塞罗那",
    transport: "地铁与步行，全天游览。",
    transportIcon: "footprints",
    activities: [
      ["09:00", "圣家堂", "建议提前预约时段", "Sagrada Familia Barcelona"],
      ["11:30", "圣保罗医院与格拉西亚大道", "建筑散步", "Passeig de Gracia Barcelona"],
      ["14:30", "哥特区", "老城巷道与主教座堂", "Gothic Quarter Barcelona"],
      ["18:00", "海边与港口", "按天气安排晚餐", "Barceloneta Beach"]
    ]
  },
  {
    date: "2026-10-03",
    city: "巴塞罗那 → 慕尼黑",
    cityEn: "Barcelona to Munich",
    overnight: "慕尼黑",
    transport: "VY1812 · 巴塞罗那 07:30 → 慕尼黑 09:40；S-Bahn 前往 Giesing。",
    transportIcon: "plane",
    activities: [
      ["07:30", "搭乘 VY1812", "BCN → MUC", "Munich Airport"],
      ["09:40", "抵达慕尼黑", "MUC → S8 Rosenheimer Platz → S3 Giesing", "Munich Giesing"],
      ["13:00", "朋友家入住", "完整住址保留在私人行程表", "Munich Giesing"],
      ["15:00", "慕尼黑老城", "玛利亚广场周边步行", "Marienplatz Munich"]
    ]
  },
  {
    date: "2026-10-04",
    city: "慕尼黑 → 耶拿",
    cityEn: "Munich to Jena",
    overnight: "耶拿",
    transport: "U2 至 München Hbf；ICE1100 09:19 → Erfurt 11:44；11:52 → Jena West 12:20。",
    transportIcon: "train-front",
    activities: [
      ["08:15", "前往慕尼黑中央车站", "U2 Giesing → München Hbf；留意适用票区", "Munich Hauptbahnhof"],
      ["09:19", "搭乘 ICE1100", "München Hbf → Erfurt Hbf", "Erfurt Hauptbahnhof"],
      ["11:52", "换乘区域列车", "Erfurt Hbf → Jena West，换乘仅 8 分钟", "Jena West Station"],
      ["12:20", "抵达耶拿", "入住朋友家，下午游览", "Jena city centre"]
    ]
  },
  {
    date: "2026-10-05",
    city: "耶拿 → 布拉格",
    cityEn: "Jena to Prague",
    overnight: "布拉格",
    transport: "FlixBus · 耶拿 08:10 → 布拉格 14:00。",
    transportIcon: "bus-front",
    activities: [
      ["07:40", "抵达巴士站", "核对站台与电子车票", "Jena Bus Station"],
      ["08:10", "搭乘 FlixBus", "Jena → Prague", "Prague Florenc Bus Station"],
      ["14:00", "抵达布拉格", "前往 Luma Terra Prague Hostel 办理入住", "Luma Terra Prague Hostel"],
      ["16:30", "老城广场", "轻松步行，欣赏傍晚街景", "Old Town Square Prague"]
    ]
  },
  {
    date: "2026-10-06",
    city: "布拉格",
    cityEn: "Prague",
    overnight: "布拉格",
    transport: "电车、地铁与步行，全天游览。",
    transportIcon: "footprints",
    activities: [
      ["09:00", "布拉格城堡", "圣维特主教座堂与城堡区", "Prague Castle"],
      ["12:30", "小城区午餐", "沿坡道前往伏尔塔瓦河", "Mala Strana Prague"],
      ["14:00", "查理大桥", "步行返回老城", "Charles Bridge Prague"],
      ["17:00", "老城与天文钟", "傍晚自由活动", "Prague Astronomical Clock"]
    ]
  },
  {
    date: "2026-10-07",
    city: "布拉格 → 德累斯顿",
    cityEn: "Prague to Dresden",
    overnight: "德累斯顿",
    transport: "RegioJet · 布拉格 12:30 → 德累斯顿 14:25。",
    transportIcon: "bus-front",
    activities: [
      ["09:00", "布拉格自由活动", "退房并寄存行李", "Prague Old Town"],
      ["12:30", "搭乘 RegioJet", "Prague → Dresden", "Dresden Hauptbahnhof"],
      ["14:25", "抵达德累斯顿", "前往 Hostel Lollis Homestay Dresden 办理入住", "Hostel Lollis Homestay Dresden"],
      ["16:30", "易北河畔散步", "布吕尔平台与老城夜景", "Bruhl's Terrace Dresden"]
    ]
  },
  {
    date: "2026-10-08",
    city: "德累斯顿 → 卢森堡",
    cityEn: "Dresden to Luxembourg",
    overnight: "夜间巴士",
    transport: "FlixBus · 德累斯顿 18:00 → 卢森堡 03:45（次日）。",
    transportIcon: "bus-front",
    activities: [
      ["09:00", "德累斯顿老城", "圣母教堂、王侯队列与茨温格宫", "Dresden Old Town"],
      ["15:30", "取行李并前往车站", "补充饮水与夜间巴士食物", "Dresden Hauptbahnhof"],
      ["18:00", "搭乘 FlixBus", "夜间前往卢森堡", "Luxembourg Gare"]
    ]
  },
  {
    date: "2026-10-09",
    city: "卢森堡 → 苏黎世",
    cityEn: "Luxembourg to Zurich",
    overnight: "返程航班",
    transport: "LX751 · 卢森堡 10:15 → 苏黎世 11:15；转机约 11 小时，可安排约 5 小时 City Walk；LX138 22:30 → 香港。",
    transportIcon: "plane-takeoff",
    activities: [
      ["03:45", "抵达卢森堡", "从夜间巴士下车后休整", "Luxembourg Gare"],
      ["10:15", "搭乘 LX751", "LUX → ZUR", "Zurich Airport"],
      ["11:15", "抵达苏黎世", "确认行李直挂香港与 LX138 状态后再进城", "Zurich Airport"],
      ["12:45", "搭火车前往市区", "Zurich Flughafen → Zürich HB，车程约 10–15 分钟", "Zurich Hauptbahnhof"],
      ["13:15", "班霍夫大街与阅兵广场", "从中央车站向湖边轻松步行", "Bahnhofstrasse Zurich"],
      ["14:15", "林登霍夫与苏黎世老城", "俯瞰利马特河，穿行 Niederdorf", "Lindenhof Zurich"],
      ["15:30", "大教堂与湖畔", "经 Grossmünster 前往 Bürkliplatz", "Burkliplatz Zurich"],
      ["16:30", "老城早晚餐", "预留机动时间，不安排需排队的项目", "Niederdorf Zurich"],
      ["18:15", "返回苏黎世机场", "建议最晚 18:30 左右上车，预留约 3 小时办理出境与登机", "Zurich Airport"],
      ["22:30", "搭乘 LX138", "苏黎世 → 香港", "Hong Kong International Airport"]
    ]
  },
  {
    date: "2026-10-10",
    city: "苏黎世 → 香港",
    cityEn: "Zurich to Hong Kong",
    overnight: "到家",
    transport: "LX138 · 香港时间 16:35 抵达。",
    transportIcon: "plane-landing",
    activities: [
      ["16:35", "抵达香港", "入境、取行李并返家", "Hong Kong International Airport"]
    ]
  }
];

const dailyTransportHighlights = {
  "2026-09-29": {
    time: "23:25",
    route: "HONG KONG → FRANKFURT",
    title: "搭乘 LH797 出发",
    description: "香港 23:25 起飞，次日 06:20 抵达法兰克福，再转机前往卢森堡。",
    query: "Hong Kong International Airport",
    mode: "flight"
  },
  "2026-09-30": {
    time: "13:10",
    route: "FRANKFURT → LUXEMBOURG",
    title: "搭乘 LH5642 前往卢森堡",
    description: "06:20 抵达法兰克福；13:10 起飞，14:00 抵达卢森堡。City Walk 仅在入境和航班状态允许时执行。",
    query: "Frankfurt Airport",
    mode: "flight"
  },
  "2026-10-01": {
    time: "13:25",
    route: "LUXEMBOURG → BARCELONA",
    title: "搭乘 FR3109 前往巴塞罗那",
    description: "建议 11:00 前往卢森堡机场；13:25 起飞，15:20 抵达巴塞罗那。",
    query: "Luxembourg Airport",
    mode: "flight"
  },
  "2026-10-02": {
    time: "全天",
    route: "BARCELONA · NO TRANSFER",
    title: "今日无跨城交通",
    description: "全天使用地铁与步行游览；下一段 VY1812 将于明日 07:30 起飞。",
    query: "Barcelona",
    mode: "stay"
  },
  "2026-10-03": {
    time: "07:30",
    route: "BARCELONA → MUNICH",
    title: "搭乘 VY1812 前往慕尼黑",
    description: "07:30 从巴塞罗那起飞，09:40 抵达慕尼黑；随后搭 S-Bahn 前往 Giesing。",
    query: "Barcelona-El Prat Airport",
    mode: "flight"
  },
  "2026-10-04": {
    time: "09:19",
    route: "MUNICH → ERFURT → JENA",
    title: "搭乘 ICE1100 前往耶拿",
    description: "09:19 从慕尼黑中央车站出发，11:44 抵达 Erfurt；11:52 换乘，12:20 抵达 Jena West。",
    query: "Munich Hauptbahnhof",
    mode: "train"
  },
  "2026-10-05": {
    time: "08:10",
    route: "JENA → PRAGUE",
    title: "搭乘 FlixBus 前往布拉格",
    description: "建议 07:40 抵达巴士站核对站台；08:10 出发，14:00 抵达 Prague Florenc。",
    query: "Jena Bus Station",
    mode: "bus"
  },
  "2026-10-06": {
    time: "全天",
    route: "PRAGUE · NO TRANSFER",
    title: "今日无跨城交通",
    description: "全天使用电车、地铁与步行游览；下一段 RegioJet 将于明日 12:30 出发。",
    query: "Prague",
    mode: "stay"
  },
  "2026-10-07": {
    time: "12:30",
    route: "PRAGUE → DRESDEN",
    title: "搭乘 RegioJet 前往德累斯顿",
    description: "退房后先寄存行李；12:30 从布拉格出发，14:25 抵达 Dresden Hauptbahnhof。",
    query: "Prague Main Station",
    mode: "bus"
  },
  "2026-10-08": {
    time: "18:00",
    route: "DRESDEN → LUXEMBOURG",
    title: "搭乘 FlixBus 夜巴前往卢森堡",
    description: "15:30 开始取行李并补给；18:00 出发，次日 03:45 抵达 Luxembourg Gare。",
    query: "Dresden Hauptbahnhof",
    mode: "bus"
  },
  "2026-10-09": {
    time: "10:15",
    route: "LUXEMBOURG → ZURICH → HONG KONG",
    title: "搭乘 LX751 转 LX138 返程",
    description: "10:15 飞往苏黎世，11:15 抵达；22:30 搭乘 LX138 返回香港，18:15 开始返机场。",
    query: "Luxembourg Airport",
    mode: "flight"
  }
};

const completedTransportHighlight = {
  time: "16:35",
  route: "ZURICH → HONG KONG",
  title: "抵达香港 · 行程完成",
  description: "LX138 于 10 月 10 日香港时间 16:35 抵达；完成入境、取行李并返家。",
  query: "Hong Kong International Airport",
  mode: "complete"
};

const cityProfiles = [
  {
    id: "frankfurt",
    name: "法兰克福",
    nameEn: "Frankfurt",
    country: "德国",
    coordinates: [50.1109, 8.6821],
    role: "去程转机窗口",
    stay: "约 2 小时 City Walk",
    priority: 6,
    match: 3,
    fame: "地标级老城",
    season: "秋季适配高",
    energy: "中等；红眼航班后量力",
    summary: "中世纪老城与现代金融天际线的强烈对照，适合用短时间完成一条建筑主线。",
    fit: "罗马广场、新老城与美因河可串成紧凑闭环，与你的建筑兴趣高度相关。",
    caution: "只有在行李直挂、下一程登机牌已拿到且 08:00 前能进城时执行；否则留在机场。",
    lodging: "不住宿；转机期间不离开市中心主线。",
    food: "Kleinmarkthalle 周边快速早餐；不为网红店排队。",
    localTransport: "机场 Regionalbahnhof 搭 S8 / S9 至 Hauptwache。",
    betweenTransport: "LH797 抵达，LH5642 前往卢森堡。",
    nightlife: "不安排；夜航后以转机安全和体力为先。",
    safety: "中央车站周边部分街段观感复杂；本路线不经 Bahnhofsviertel 深处，贵重物品贴身。",
    image: "./assets/frankfurt-romer.jpg",
    imageAlt: "法兰克福罗马市政厅立面",
    imageSource: "https://commons.wikimedia.org/wiki/File:Frankfurter_R%C3%B6mer_2019.jpg",
    imageCredit: "Thomas Wolf · CC BY-SA 3.0 DE",
    attractions: [
      { name: "罗马广场与 Römer", type: "建筑", note: "短转机的第一优先，木筋建筑与市政厅集中。", query: "Römerberg Frankfurt", url: "https://frankfurt.de/english/discover-and-experience/sightseeing/places/roemerberg" },
      { name: "法兰克福大教堂", type: "建筑", note: "从罗马广场步行可达，适合并入老城主线。", query: "Frankfurt Cathedral", url: "https://www.dom-frankfurt.de/" },
      { name: "施泰德博物馆", type: "博物馆", note: "馆藏重要，但这次转机窗口不足，不建议硬塞。", query: "Städel Museum Frankfurt", url: "https://www.staedelmuseum.de/en" },
      { name: "Kleinmarkthalle", type: "美食", note: "适合早餐补给；营业日与时段需临行核对。", query: "Kleinmarkthalle Frankfurt", url: "https://www.kleinmarkthalle.de/" }
    ]
  },
  {
    id: "luxembourg",
    name: "卢森堡",
    nameEn: "Luxembourg",
    country: "卢森堡",
    coordinates: [49.6116, 6.1319],
    role: "首站停留与返程中转",
    stay: "1 晚 + 返程凌晨中转",
    priority: 7,
    match: 3,
    fame: "世界遗产老城",
    season: "秋季适配高",
    energy: "中等；地形起伏",
    summary: "峡谷、堡垒与高低城叠在一起，城市尺度小但空间层次很强。",
    fit: "老城、Corniche 和 Grund 能在半天内形成高密度建筑与城市景观体验。",
    caution: "博克炮台通道与部分博物馆开放时间有季节变化；返程凌晨只做交通中转。",
    lodging: "Pfaffenthal / 老城北侧，已订 Youth Hostel Luxembourg City。",
    food: "老城或 Grund 选择卢森堡菜；机场日前避免耗时的正式套餐。",
    localTransport: "公共交通目前对普通乘客免费；跨境头等座等例外以官方规则为准。",
    betweenTransport: "由法兰克福飞抵；FR3109 前往巴塞罗那；返程由夜巴抵达后飞往苏黎世。",
    nightlife: "Clausen 酒吧区可选，但首晚受时差影响，不建议独自逗留至深夜。",
    safety: "总体风险较低；Gare 周边深夜保持警觉，返程凌晨在照明和有人流处等候。",
    image: "./assets/luxembourg-bock.jpg",
    imageAlt: "卢森堡老城建筑与城墙",
    imageSource: "https://commons.wikimedia.org/wiki/File:Luxembourg_(Old_city_panorama).JPG",
    imageCredit: "Nikilux · CC BY-SA 3.0 LU",
    attractions: [
      { name: "博克炮台", type: "建筑", note: "地下防御体系是城市空间的核心；开放时段待核验。", query: "Bock Casemates Luxembourg", url: "https://www.luxembourg-city.com/en/place/monuments/bock-casemates" },
      { name: "Chemin de la Corniche", type: "城市景观", note: "俯瞰 Grund 的连续步行线，适合建筑摄影。", query: "Chemin de la Corniche Luxembourg", url: "https://www.luxembourg-city.com/en/place/walking/chemin-de-la-corniche" },
      { name: "Mudam Luxembourg", type: "博物馆", note: "贝聿铭建筑与当代艺术；本次时间紧，作为雨天替代。", query: "Mudam Luxembourg", url: "https://www.mudam.com/" },
      { name: "Grund 河谷区", type: "建筑", note: "低城肌理与高架桥景观，傍晚氛围更好。", query: "Grund Luxembourg", url: "https://www.luxembourg-city.com/en/place/walking/the-grund" }
    ]
  },
  {
    id: "barcelona",
    name: "巴塞罗那",
    nameEn: "Barcelona",
    country: "西班牙",
    coordinates: [41.3874, 2.1686],
    role: "建筑与夜生活核心站",
    stay: "2 晚",
    priority: 1,
    match: 5,
    fame: "世界级地标",
    season: "初秋适配高",
    energy: "高；全天步行与夜间活动",
    summary: "现代主义建筑、密集博物馆、市场与深夜城市生活在同一套步行和地铁网络里。",
    fit: "与你的四项偏好同时高度匹配，是全程最值得投入预约资源与夜间时间的城市。",
    caution: "热门建筑必须预约；La Rambla、地铁和海滩是扒窃高发场景，避免深夜独走 Raval 偏巷。",
    lodging: "Eixample，已订 TOC Hostel Barcelona，便于早班机场交通与跨区移动。",
    food: "Sant Antoni 市场周边午餐，El Born 晚餐；不在 La Rambla 主街追餐厅。",
    localTransport: "地铁 + 步行；手机和钱包不要放在外侧口袋。",
    betweenTransport: "FR3109 飞抵；VY1812 清晨飞往慕尼黑。",
    nightlife: "El Born 或 Eixample 选一个区域活动；返程使用正规出租车或叫车平台。",
    safety: "独行重点防扒窃与饮品离手；海滩夜间不带贵重物品，不走人少巷道。",
    image: "./assets/barcelona-sagrada.jpg",
    imageAlt: "巴塞罗那圣家堂外观",
    imageSource: "https://commons.wikimedia.org/wiki/File:La_Sagrada_Familia,_Barcelona,_Spain_-_panoramio_(66).jpg",
    imageCredit: "sandexx · CC BY 3.0",
    attractions: [
      { name: "圣家堂", type: "建筑", note: "全程建筑第一优先；只使用官方渠道预约。", query: "Sagrada Familia Barcelona", url: "https://sagradafamilia.org/en/" },
      { name: "圣保罗现代主义建筑群", type: "建筑", note: "与圣家堂步行衔接，形成清晰现代主义主线。", query: "Recinte Modernista de Sant Pau Barcelona", url: "https://santpaubarcelona.org/en" },
      { name: "毕加索博物馆", type: "博物馆", note: "适合从哥特区过渡到 El Born；预约与开放时段待核验。", query: "Museu Picasso Barcelona", url: "https://museupicassobcn.cat/en" },
      { name: "巴塞罗那当代艺术博物馆", type: "博物馆", note: "建筑与当代艺术兼顾，可作为雨天替代。", query: "MACBA Barcelona", url: "https://www.macba.cat/en" }
    ]
  },
  {
    id: "munich",
    name: "慕尼黑",
    nameEn: "Munich",
    country: "德国",
    coordinates: [48.1351, 11.582],
    role: "建筑、博物馆与朋友停留",
    stay: "1 晚",
    priority: 4,
    match: 4,
    fame: "世界级博物馆群",
    season: "秋季适配高",
    energy: "中高；航班后半日",
    summary: "王宫、教堂、现代艺术馆与成熟的啤酒文化并存，半天也能做出清晰主题。",
    fit: "建筑和博物馆质量高，Glockenbachviertel 也能补上夜生活体验。",
    caution: "10 月 3 日恰逢德国统一日，且可能处于 Oktoberfest 尾声；开放、交通和拥挤情况待核验。",
    lodging: "Giesing 朋友家；完整地址仅保存在私人行程表。",
    food: "Viktualienmarkt 周边或老城选择巴伐利亚菜，避免在节庆高峰无预约久候。",
    localTransport: "S-Bahn / U-Bahn + 步行；Giesing 往返老城直接。",
    betweenTransport: "VY1812 飞抵；次日 ICE1100 经 Erfurt 前往耶拿。",
    nightlife: "优先 Glockenbachviertel；若 Oktoberfest 人流过大则不前往 Theresienwiese。",
    safety: "总体可控；节庆场景看管饮品和随身物，深夜使用主干道与公共交通。",
    image: "./assets/munich-pinakothek.jpg",
    imageAlt: "慕尼黑现代绘画陈列馆建筑",
    imageSource: "https://commons.wikimedia.org/wiki/File:Pinakothek_der_Moderne_Nord.jpg",
    imageCredit: "Wikimedia contributor · CC BY-SA 3.0",
    attractions: [
      { name: "慕尼黑王宫", type: "建筑 / 博物馆", note: "老城内的核心室内参观；闭馆日和票种待核验。", query: "Munich Residenz", url: "https://www.residenz-muenchen.de/englisch/residenc/" },
      { name: "现代绘画陈列馆", type: "博物馆", note: "建筑、设计与现代艺术高度匹配。", query: "Pinakothek der Moderne", url: "https://www.pinakothek.de/en/visit/pinakothek-der-moderne" },
      { name: "德意志博物馆", type: "博物馆", note: "科技馆体量大，本次只能专题式参观。", query: "Deutsches Museum Munich", url: "https://www.deutsches-museum.de/en" },
      { name: "阿萨姆教堂", type: "建筑", note: "体量小、装饰密度高，适合嵌入老城步行线。", query: "Asamkirche Munich", url: "https://www.muenchen.de/sehenswuerdigkeiten/kirchen-und-kloester/asamkirche-st-johann-nepomuk" }
    ]
  },
  {
    id: "jena",
    name: "耶拿",
    nameEn: "Jena",
    country: "德国",
    coordinates: [50.9271, 11.5892],
    role: "朋友停留与光学主题站",
    stay: "1 晚",
    priority: 8,
    match: 3,
    fame: "专业兴趣型",
    season: "秋季适配中高",
    energy: "中等",
    summary: "大学城、光学工业与山谷城市共同构成一条小众但鲜明的知识城市线。",
    fit: "不是传统大城市夜生活，但光学、科学史和现代城市景观有独特性。",
    caution: "德国光学博物馆的重建与开放进度需核验；不要把未确认场次写死进日程。",
    lodging: "Jena West 附近朋友家；完整地址仅保存在私人行程表。",
    food: "Marktplatz 周边用餐；晚间可看 Café Wagner 当日节目。",
    localTransport: "市中心主要靠步行与电车。",
    betweenTransport: "由慕尼黑经 Erfurt 换乘抵达；FlixBus 前往布拉格。",
    nightlife: "Café Wagner 等学生文化场所按当日节目选择，不单独跨城追夜生活。",
    safety: "总体风险较低；晚间从活动场所返住处走主路，注意末班车。",
    image: "./assets/jena-city.jpg",
    imageAlt: "耶拿集市广场与城市建筑",
    imageSource: "https://commons.wikimedia.org/wiki/File:Jena-46-Marktplatz-2023-gje.jpg",
    imageCredit: "Gerd Eichmann · CC BY-SA 4.0",
    attractions: [
      { name: "蔡司天文馆", type: "建筑 / 科学", note: "耶拿主题首选；具体节目与语言待核验。", query: "Zeiss Planetarium Jena", url: "https://www.planetarium-jena.de/" },
      { name: "德国光学博物馆", type: "博物馆", note: "与城市身份最契合，但重开日期必须临行确认。", query: "Deutsches Optisches Museum Jena", url: "https://www.deutsches-optisches-museum.de/en/" },
      { name: "Romantikerhaus", type: "博物馆", note: "聚焦早期浪漫主义，适合雨天小体量参观。", query: "Romantikerhaus Jena", url: "https://www.jena.de/en/romantikerhaus" },
      { name: "JenTower 与市中心", type: "建筑", note: "现代天际线与老城尺度的对照。", query: "JenTower Jena", url: "https://www.visit-jena.de/en/see-and-experience/sights/jentower/" }
    ]
  },
  {
    id: "prague",
    name: "布拉格",
    nameEn: "Prague",
    country: "捷克",
    coordinates: [50.0755, 14.4378],
    role: "建筑、博物馆与夜生活核心站",
    stay: "2 晚",
    priority: 2,
    match: 5,
    fame: "世界级历史城市",
    season: "秋季适配高",
    energy: "高；石板路与坡道",
    summary: "从哥特、巴洛克到捷克立体主义，建筑连续性极强，博物馆和夜间文化也足够密集。",
    fit: "两晚可形成老城、城堡与现代艺术三条相互衔接的体验，是第二核心城市。",
    caution: "老城广场、查理大桥与电车注意扒窃；不要在街头换汇或使用标识不清的 ATM。",
    lodging: "Vinohrady / 新城边缘，已订 Luma Terra Prague Hostel。",
    food: "优先 Vinohrady 或 Dlouhá 周边捷克菜；旅游核心区先看菜单与币种。",
    localTransport: "电车 + 地铁 + 步行；城堡区从高处向河边下行更省力。",
    betweenTransport: "FlixBus 由耶拿抵达；RegioJet 前往德累斯顿。",
    nightlife: "选 Náplavka、Vinohrady 或有固定演出的爵士场所；避开招徕式酒吧。",
    safety: "夜间仍走主街，拒绝陌生人换汇和代操作 ATM；护照原件尽量留在安全处。",
    image: "./assets/prague-charles-bridge.jpg",
    imageAlt: "布拉格查理大桥与城堡天际线",
    imageSource: "https://commons.wikimedia.org/wiki/File:Old_Town,_110_00_Prague-Prague_1,_Czech_Republic_-_panoramio_(166).jpg",
    imageCredit: "bogdan1971 · CC BY-SA 3.0",
    attractions: [
      { name: "布拉格城堡与圣维特大教堂", type: "建筑", note: "全日主线起点；预约和安检时间待核验。", query: "Prague Castle", url: "https://www.hrad.cz/en/prague-castle-for-visitors" },
      { name: "黑圣母之屋", type: "建筑 / 博物馆", note: "捷克立体主义代表，适合接入老城动线。", query: "House of the Black Madonna Prague", url: "https://www.upm.cz/house-at-the-black-madonna/" },
      { name: "布拉格国家美术馆贸易展览宫", type: "博物馆", note: "现代艺术与功能主义建筑兼得。", query: "Trade Fair Palace Prague", url: "https://www.ngprague.cz/en/about/buildings/trade-fair-palace" },
      { name: "查理大桥", type: "城市景观", note: "清晨或傍晚通过，不在正午人流中久停。", query: "Charles Bridge Prague", url: "https://www.prague.eu/en/objevujte/charles-bridge-karluv-most/" }
    ]
  },
  {
    id: "dresden",
    name: "德累斯顿",
    nameEn: "Dresden",
    country: "德国",
    coordinates: [51.0504, 13.7373],
    role: "建筑与艺术收藏核心站",
    stay: "1 晚 + 次日白天",
    priority: 3,
    match: 5,
    fame: "世界级艺术收藏",
    season: "秋季适配高",
    energy: "高；夜巴前留休息",
    summary: "重建老城、王室收藏与 Neustadt 夜生活形成非常鲜明的日夜对照。",
    fit: "对建筑与博物馆的匹配度极高，且住宿就在 Neustadt，便于加入一晚本地夜生活。",
    caution: "10 月 8 日晚需搭夜巴，白天不能排满到最后；至少预留 2 小时取行李和补给。",
    lodging: "Äußere Neustadt，已订 Hostel Lollis Homestay Dresden。",
    food: "Neustadt 餐饮密集；夜巴日前提前正餐并准备水和轻食。",
    localTransport: "老城步行，老城与 Neustadt 之间用电车。",
    betweenTransport: "RegioJet 由布拉格抵达；FlixBus 夜间前往卢森堡。",
    nightlife: "首晚留在 Äußere Neustadt 主街区；夜巴当晚不饮酒。",
    safety: "总体可控；Neustadt 夜间回青旅走照明主路，车站取行李时不离开视线。",
    image: "./assets/dresden-zwinger.jpg",
    imageAlt: "德累斯顿茨温格宫庭院与建筑",
    imageSource: "https://commons.wikimedia.org/wiki/File:20060516020DR_Dresden_Dresdner_Zwinger_Glockenspielpavillon.jpg",
    imageCredit: "Jörg Blobelt · CC BY-SA 4.0",
    attractions: [
      { name: "茨温格宫与古代大师画廊", type: "建筑 / 博物馆", note: "全程博物馆优先级最高之一；预约与开放时段待核验。", query: "Zwinger Dresden Old Masters Picture Gallery", url: "https://gemaeldegalerie.skd.museum/en/" },
      { name: "德累斯顿王宫与绿穹珍宝馆", type: "博物馆", note: "历史绿穹通常需定时票，临行用官方渠道确认。", query: "Dresden Royal Palace Green Vault", url: "https://gruenes-gewoelbe.skd.museum/en/" },
      { name: "圣母教堂", type: "建筑", note: "重建史与城市天际线的关键节点。", query: "Frauenkirche Dresden", url: "https://www.frauenkirche-dresden.de/" },
      { name: "Albertinum", type: "博物馆", note: "近现代艺术，可作为恶劣天气替代。", query: "Albertinum Dresden", url: "https://albertinum.skd.museum/en/" }
    ]
  },
  {
    id: "zurich",
    name: "苏黎世",
    nameEn: "Zurich",
    country: "瑞士",
    coordinates: [47.3769, 8.5417],
    role: "返程长转机窗口",
    stay: "约 5 小时 City Walk",
    priority: 5,
    match: 4,
    fame: "国家级馆藏",
    season: "秋季适配中高",
    energy: "中高；夜巴与航班后",
    summary: "紧凑老城、湖岸和高质量美术馆在中央车站周边形成适合转机的城市切片。",
    fit: "老城建筑与 Kunsthaus 可在有限窗口内二选一或快速组合，适合你的高强度节奏。",
    caution: "只有在行李直挂、入境顺利且航班正常时进城；18:15 开始返机场，不追求晚餐或排队项目。",
    lodging: "不住宿；行李应直挂香港，否则取消进城。",
    food: "Niederdorf 早晚餐，选择出餐快的位置；避免为名店排队。",
    localTransport: "机场火车至 Zürich HB，市中心步行；车次以 SBB 当日信息为准。",
    betweenTransport: "LX751 飞抵；LX138 返回香港。",
    nightlife: "不安排；返程航班优先。",
    safety: "总体风险较低；中央车站与购物街防范顺手盗窃，准时返机场。",
    image: "./assets/zurich-grossmunster.jpg",
    imageAlt: "苏黎世老城教堂与利马特河",
    imageSource: "https://commons.wikimedia.org/wiki/File:Ansicht_von_der_%27Quaibr%C3%BCcke%27_auf_einige_Sehensw%C3%BCrdigkeiten_der_Altstadt_beidseits_der_Limmat_in_Z%C3%BCrich_2012-03-27_17-10-29_(P7000).JPG",
    imageCredit: "Roland zh · CC BY-SA 3.0",
    attractions: [
      { name: "苏黎世美术馆", type: "博物馆", note: "转机窗口内唯一建议考虑的室内重点；开放时间待核验。", query: "Kunsthaus Zürich", url: "https://www.kunsthaus.ch/en/" },
      { name: "Grossmünster", type: "建筑", note: "老城天际线核心，适合并入 Niederdorf 步行线。", query: "Grossmünster Zürich", url: "https://www.grossmuenster.ch/" },
      { name: "瑞士国家博物馆", type: "博物馆", note: "紧邻中央车站，是雨天与时间不足时的稳妥选择。", query: "Swiss National Museum Zürich", url: "https://www.landesmuseum.ch/en" },
      { name: "Pavillon Le Corbusier", type: "建筑", note: "建筑兴趣强相关，但离转机主线较远，开放季待核验。", query: "Pavillon Le Corbusier Zürich", url: "https://pavillon-le-corbusier.ch/en/" }
    ]
  }
];

const cityExperiences = {
  frankfurt: [
    { name: "罗马广场与新老城晨间漫步", type: "转机首选", note: "用最短动线看木筋建筑、市政厅与重建街区。", query: "Römerberg Frankfurt" },
    { name: "登上铁桥看美因河天际线", type: "城市景观", note: "从老城步行数分钟，同时看到教堂与金融区。", query: "Eiserner Steg Frankfurt" },
    { name: "逛 Kleinmarkthalle 市场", type: "在地美食", note: "适合快速早餐或补给，先核对当天营业时间。", query: "Kleinmarkthalle Frankfurt" },
    { name: "走进法兰克福大教堂", type: "历史建筑", note: "与罗马广场顺路，短停也能完成的建筑重点。", query: "Frankfurt Cathedral" },
    { name: "在施泰德博物馆看欧洲艺术", type: "博物馆", note: "馆藏体量大，只有延长停留时再安排。", query: "Städel Museum Frankfurt" },
    { name: "从 Main Tower 俯瞰金融区", type: "城市景观", note: "传统老城与摩天楼对照最直观的视角。", query: "Main Tower Frankfurt" },
    { name: "参观歌德故居", type: "文化历史", note: "了解歌德成长环境，适合文学与室内建筑兴趣。", query: "Goethe House Frankfurt" },
    { name: "沿博物馆河岸散步", type: "城市漫步", note: "天气好时沿河串联桥梁、博物馆与城市轮廓。", query: "Museumsufer Frankfurt" },
    { name: "在萨克森豪森尝苹果酒", type: "饮食文化", note: "完整停留时体验本地酒馆，转机日不饮酒。", query: "Alt-Sachsenhausen Frankfurt" },
    { name: "从老歌剧院走到金融区", type: "建筑路线", note: "古典立面、公共空间与现代塔楼连续出现。", query: "Alte Oper Frankfurt" }
  ],
  luxembourg: [
    { name: "沿 Corniche 俯瞰 Grund", type: "城市首选", note: "高低城关系最清楚的一段步行，也是经典摄影位。", query: "Chemin de la Corniche Luxembourg" },
    { name: "探索博克炮台", type: "世界遗产", note: "穿行地下防御系统，开放时段需在出发前核对。", query: "Bock Casemates Luxembourg" },
    { name: "漫步 Grund 河谷低城", type: "城市漫步", note: "沿阿尔泽特河看桥梁、修道院与山崖上的老城。", query: "Grund Luxembourg" },
    { name: "乘 Pfaffenthal 全景电梯", type: "城市景观", note: "免费连接高低城，用很少体力获得开阔视野。", query: "Pfaffenthal Panoramic Elevator" },
    { name: "走 Wenzel 环线", type: "建筑路线", note: "串联城墙、塔楼与河谷，适合半日深度步行。", query: "Wenzel Walk Luxembourg" },
    { name: "看大公宫与老城广场", type: "历史建筑", note: "在紧凑市中心观察王室建筑与城市日常。", query: "Grand Ducal Palace Luxembourg" },
    { name: "参观 Mudam 与三橡果堡", type: "当代艺术", note: "贝聿铭建筑与旧堡垒形成鲜明对话。", query: "Mudam Luxembourg" },
    { name: "走进圣母主教座堂", type: "宗教建筑", note: "哥特结构与后期装饰并存，可与金色女郎纪念碑串联。", query: "Notre Dame Cathedral Luxembourg" },
    { name: "在国家历史与艺术博物馆看城史", type: "博物馆", note: "雨天理解卢森堡城市演变的稳妥选择。", query: "Nationalmusée um Fëschmaart Luxembourg" },
    { name: "在老城尝一顿卢森堡菜", type: "在地美食", note: "从肉类炖菜或季节菜单入手，不为热门店久候。", query: "Place d'Armes Luxembourg restaurants" }
  ],
  barcelona: [
    { name: "进入圣家堂感受光与结构", type: "建筑首选", note: "全程优先级最高，务必通过官方渠道预约。", query: "Sagrada Familia Barcelona" },
    { name: "从圣家堂步行到圣保罗医院", type: "现代主义", note: "把高迪与多梅内克的代表作连成一条建筑线。", query: "Recinte Modernista de Sant Pau" },
    { name: "夜看米拉之家或巴特罗之家", type: "建筑体验", note: "选择一处深入参观，避免同日重复排队。", query: "Casa Batlló Barcelona" },
    { name: "清晨走进桂尔公园", type: "建筑景观", note: "早时段人流较少，可同时看马赛克与城市全景。", query: "Park Güell Barcelona" },
    { name: "穿行哥特区的小巷与广场", type: "城市漫步", note: "从主教座堂一路走向 El Born，避开过度商业化支路。", query: "Gothic Quarter Barcelona" },
    { name: "在毕加索博物馆看早期作品", type: "博物馆", note: "适合与 El Born 连排，提前核对预约时段。", query: "Museu Picasso Barcelona" },
    { name: "从 MNAC 台阶看城市日落", type: "城市景观", note: "蒙锥克的视野适合放在傍晚，留意返程时间。", query: "Museu Nacional d'Art de Catalunya" },
    { name: "逛 Sant Antoni 市场并吃午餐", type: "在地美食", note: "比兰布拉大道更贴近日常，也靠近你的住宿区域。", query: "Mercat de Sant Antoni Barcelona" },
    { name: "沿 Barceloneta 海边散步", type: "滨海体验", note: "放在傍晚并轻装前往，手机和钱包始终贴身。", query: "Barceloneta Beach" },
    { name: "在 El Born 体验塔帕斯与夜生活", type: "夜生活", note: "选择一个区域停留，返程使用正规出租车或地铁。", query: "El Born Barcelona" }
  ],
  munich: [
    { name: "从玛利亚广场开始老城漫步", type: "城市首选", note: "新市政厅、圣母教堂与步行街都在短距离内。", query: "Marienplatz Munich" },
    { name: "参观慕尼黑王宫", type: "宫殿博物馆", note: "用一处建筑理解巴伐利亚王室历史与收藏。", query: "Munich Residenz" },
    { name: "在现代绘画陈列馆看设计与艺术", type: "博物馆", note: "建筑、设计与现代艺术最贴合本次兴趣。", query: "Pinakothek der Moderne" },
    { name: "专题式逛德意志博物馆", type: "科技博物馆", note: "馆区很大，提前选航空、交通或科学展区。", query: "Deutsches Museum Munich" },
    { name: "在谷物市场吃一顿巴伐利亚午餐", type: "在地美食", note: "适合老城动线中途补给，节庆日避免久候。", query: "Viktualienmarkt Munich" },
    { name: "走进阿萨姆教堂", type: "巴洛克建筑", note: "空间不大但装饰密度极高，可快速加入老城路线。", query: "Asamkirche Munich" },
    { name: "在英国花园看河道冲浪", type: "城市生活", note: "从 Eisbachwelle 感受慕尼黑独特的公共空间。", query: "Eisbachwelle Munich" },
    { name: "参观 BMW Welt 与建筑群", type: "工业设计", note: "适合汽车与现代建筑兴趣，可与奥林匹克公园串联。", query: "BMW Welt Munich" },
    { name: "感受啤酒节城市氛围", type: "季节限定", note: "2026 场次和开放安排需核对，人流过大时及时取消。", query: "Theresienwiese Munich" },
    { name: "在 Glockenbachviertel 度过夜晚", type: "夜生活", note: "餐吧密集、回程方便，适合朋友聚会后短暂停留。", query: "Glockenbachviertel Munich" }
  ],
  jena: [
    { name: "在蔡司天文馆看一场节目", type: "城市首选", note: "最能代表耶拿光学传统，提前确认语言和场次。", query: "Zeiss Planetarium Jena" },
    { name: "登 JenTower 看山谷城市", type: "城市景观", note: "从高处理解耶拿被山地包围的城市格局。", query: "JenTower Jena" },
    { name: "参观德国光学博物馆", type: "科学博物馆", note: "主题与城市高度相关，必须临行确认重开进度。", query: "Deutsches Optisches Museum Jena" },
    { name: "在集市广场观察城市日常", type: "老城漫步", note: "市政厅、大学氛围和餐饮集中，适合慢慢停留。", query: "Marktplatz Jena" },
    { name: "走进耶拿植物园", type: "自然科学", note: "规模紧凑，可与天文馆和市中心安排在一起。", query: "Botanical Garden Jena" },
    { name: "探访席勒花园故居", type: "文学历史", note: "用一处安静庭院连接席勒与耶拿的文化记忆。", query: "Schillers Gartenhaus Jena" },
    { name: "在浪漫主义之家看专题展", type: "博物馆", note: "小体量、主题明确，是下雨时的合适选择。", query: "Romantikerhaus Jena" },
    { name: "沿萨勒河散步", type: "城市自然", note: "从密集市中心切换到河岸与山谷风景。", query: "Paradiespark Jena" },
    { name: "走上 Landgrafen 看日落", type: "轻徒步", note: "天气和体力允许时选择，穿防滑鞋并在天黑前下山。", query: "Landgrafen Jena" },
    { name: "到 Café Wagner 看当晚节目", type: "学生夜生活", note: "按演出日历决定，结束后沿主路返回住处。", query: "Café Wagner Jena" }
  ],
  prague: [
    { name: "清晨走过查理大桥", type: "城市首选", note: "避开正午人潮，看伏尔塔瓦河与城堡天际线。", query: "Charles Bridge Prague" },
    { name: "从布拉格城堡走进圣维特大教堂", type: "世界遗产", note: "从高处开始向河边下行，更省体力也更顺路。", query: "Prague Castle" },
    { name: "穿行小城区与坎帕岛", type: "城市漫步", note: "巴洛克街区、河岸与公共艺术集中在一条慢行线。", query: "Kampa Island Prague" },
    { name: "看老城广场与天文钟报时", type: "历史城市", note: "短暂停留感受广场尺度，注意人群中的随身物。", query: "Prague Astronomical Clock" },
    { name: "走读犹太区历史", type: "文化历史", note: "犹太博物馆各场馆分散，提前规划联票与开放时间。", query: "Jewish Museum in Prague" },
    { name: "在黑圣母之屋看捷克立体主义", type: "建筑博物馆", note: "建筑、家具与咖啡馆可组合成完整主题体验。", query: "House of the Black Madonna Prague" },
    { name: "参观贸易展览宫的现代艺术", type: "博物馆", note: "功能主义建筑与国家美术馆收藏兼得。", query: "Trade Fair Palace Prague" },
    { name: "在 Letná 公园看日落", type: "城市景观", note: "俯瞰多座桥梁，傍晚注意保暖与下坡路面。", query: "Letná Park Prague" },
    { name: "在 Vinohrady 吃捷克菜", type: "在地美食", note: "离住宿区域近，比老城核心区更适合从容用餐。", query: "Vinohrady Prague restaurants" },
    { name: "听一场爵士或逛 Náplavka 河岸", type: "夜生活", note: "查看当天节目，拒绝街头招徕与不明换汇。", query: "Náplavka Prague" }
  ],
  dresden: [
    { name: "参观茨温格宫与古代大师画廊", type: "城市首选", note: "建筑与艺术收藏同时满足，优先确认开放馆区。", query: "Zwinger Dresden" },
    { name: "在王宫看绿穹珍宝馆", type: "博物馆", note: "历史绿穹常需定时票，务必提前通过官方渠道确认。", query: "Green Vault Dresden" },
    { name: "进入圣母教堂理解城市重建", type: "历史建筑", note: "从建筑细节看战争破坏、保留材料与重建过程。", query: "Frauenkirche Dresden" },
    { name: "沿布吕尔平台眺望易北河", type: "城市景观", note: "可与老城核心景点连成不绕路的河岸步行线。", query: "Brühl's Terrace Dresden" },
    { name: "看森帕歌剧院的建筑细节", type: "建筑体验", note: "没有演出票也可外观参观，导览场次需提前核对。", query: "Semperoper Dresden" },
    { name: "在 Albertinum 看近现代艺术", type: "博物馆", note: "靠近河岸，是雨天或临时调整时的稳妥选择。", query: "Albertinum Dresden" },
    { name: "寻找王侯出征图的历史人物", type: "城市细节", note: "巨幅瓷砖壁画位于老城主线，适合短停细看。", query: "Fürstenzug Dresden" },
    { name: "穿行 Kunsthofpassage 艺术庭院", type: "创意街区", note: "从老城切换到 Neustadt 的当代生活与小店。", query: "Kunsthofpassage Dresden" },
    { name: "在外新城吃饭并体验夜生活", type: "夜生活", note: "以住宿周边主街为活动范围，夜间按原路返回。", query: "Äußere Neustadt Dresden" },
    { name: "到蓝色奇迹桥看易北河谷", type: "城市远景", note: "只在时间充裕时前往，夜巴当日需为取行李留足余量。", query: "Blue Wonder Bridge Dresden" }
  ],
  zurich: [
    { name: "从中央车站沿班霍夫大街走向湖边", type: "转机首选", note: "路线清晰、不易超时，能快速感受城市中心。", query: "Bahnhofstrasse Zurich" },
    { name: "在林登霍夫俯瞰利马特河", type: "城市景观", note: "从购物街稍作绕行即可到达，是老城最佳短停点。", query: "Lindenhof Zurich" },
    { name: "穿行 Niederdorf 老城", type: "城市漫步", note: "沿步行街看窄巷、行会建筑与本地餐饮。", query: "Niederdorf Zurich" },
    { name: "走进苏黎世大教堂", type: "历史建筑", note: "双塔是城市标志，可与河岸和老城顺路安排。", query: "Grossmünster Zürich" },
    { name: "看圣母大教堂的夏加尔彩窗", type: "艺术建筑", note: "参观时间短但辨识度高，开放与票务需临行核对。", query: "Fraumünster Church Zurich" },
    { name: "在苏黎世美术馆看瑞士艺术", type: "博物馆", note: "转机时间充足时的室内首选，不与国家博物馆同时安排。", query: "Kunsthaus Zürich" },
    { name: "参观瑞士国家博物馆", type: "博物馆", note: "紧邻中央车站，天气差或时间收紧时最容易执行。", query: "Swiss National Museum Zürich" },
    { name: "在 Bürkliplatz 看湖与远山", type: "湖畔体验", note: "从老城走到湖边后及时折返，不临时增加游船。", query: "Bürkliplatz Zurich" },
    { name: "看柯布西耶馆的彩色建筑", type: "现代建筑", note: "与主线有距离，只在开放且时间明显富余时选择。", query: "Pavillon Le Corbusier Zurich" },
    { name: "用瑞士甜点结束 City Walk", type: "在地美食", note: "在阅兵广场或老城快速休息，按计划时间返回机场。", query: "Paradeplatz Zurich confectionery" }
  ]
};

const routeCityIds = ["frankfurt", "luxembourg", "barcelona", "munich", "jena", "prague", "dresden", "luxembourg", "zurich"];

const practicalInfo = [
  { icon: "badge-check", label: "签证", value: "德国、卢森堡、西班牙、捷克与瑞士均在申根区。本次所需签证取决于所持护照；个人适用性待人工确认。" },
  { icon: "coins", label: "货币", value: "德国、卢森堡、西班牙使用欧元；捷克使用捷克克朗；瑞士使用瑞士法郎。" },
  { icon: "languages", label: "语言", value: "英语可覆盖主要旅行场景；本地语言包括德语、卢森堡语、法语、西班牙语/加泰罗尼亚语、捷克语。" },
  { icon: "wifi", label: "网络", value: "欧盟漫游方案未必包含瑞士；购买 eSIM 前逐国核对覆盖，并保存离线地图和车票。" },
  { icon: "credit-card", label: "支付", value: "刷卡普遍，但德国和捷克的个别小店可能偏好现金；两张卡分开放，保留少量当地现金。" },
  { icon: "cloud-sun", label: "季节", value: "9 月底至 10 月初温差和降雨概率增加，巴塞罗那通常更暖；出发前 3 天按城市更新分层衣物。" },
  { icon: "shield-alert", label: "安全", value: "重点防范巴塞罗那和布拉格景区/公共交通扒窃；夜间不走偏巷，饮品不离手，证件与备用卡分开。" }
];

const auditItems = [
  { status: "已核验", tone: "ok", title: "城市与核心景点", note: "页面中的景点、博物馆和住宿名称均对应真实地点，并提供地图或官方入口。" },
  { status: "已核验", tone: "ok", title: "城市图片", note: "8 张图片互不重复，图文对应；来源和许可链接保留在每个城市详情中。" },
  { status: "待人工确认", tone: "pending", title: "2026 开放时间与预约", note: "博物馆闭馆日、定时票、节庆安排和现场节目须在出发前通过官方页面复核。" },
  { status: "待人工确认", tone: "pending", title: "交通与订单状态", note: "时刻来自行程表，不等于实时运行信息；航班、铁路、巴士、站台和行李直挂需临行确认。" },
  { status: "待人工确认", tone: "pending", title: "个人签证适用性", note: "基础申根范围已核对，但尚未知所持护照与签证状态。" },
  { status: "已修复", tone: "ok", title: "评分、价格与评论", note: "页面不展示无法核验的评分、评论、价格或时刻表推断。" }
];

const dayRecommendations = {
  "2026-09-29": {
    mainline: "顺利出境并保住夜航睡眠",
    lodging: "LH797 航班",
    intensity: "低",
    food: "安检后完成正餐并补水；随身留一份轻食。",
    fallback: "如值机或安检排队，取消机场内购物，优先登机。",
    safety: "护照、钱包与登机牌放同一贴身小包。"
  },
  "2026-09-30": {
    mainline: "法兰克福老城建筑短线 → 卢森堡老城",
    lodging: "Pfaffenthal · Youth Hostel Luxembourg City",
    intensity: "中高",
    food: "Kleinmarkthalle 周边早餐；卢森堡老城早晚餐。",
    nightlife: "不安排正式夜生活，优先恢复时差。",
    fallback: "若 08:00 前不能进城，取消法兰克福 City Walk；卢森堡下雨则改 Mudam 或直接休息。",
    safety: "不进入法兰克福中央车站西侧偏街；10:15 开始返机场。"
  },
  "2026-10-01": {
    mainline: "卢森堡高低城建筑线 → 抵达巴塞罗那",
    lodging: "Eixample · TOC Hostel Barcelona",
    intensity: "中高",
    food: "上午老城咖啡；抵达后在 Sant Antoni / Eixample 晚餐。",
    nightlife: "只在住宿附近小酌，不跨区到深夜。",
    fallback: "雨天将 Corniche 改为城市历史博物馆；航班延误则取消晚间活动。",
    safety: "巴塞罗那机场交通与地铁开始启用防扒窃模式。"
  },
  "2026-10-02": {
    mainline: "高迪与现代主义 → 哥特老城 → El Born 夜间",
    lodging: "Eixample · TOC Hostel Barcelona",
    intensity: "高",
    food: "Sant Antoni 午餐；El Born 提前晚餐，中段安排咖啡休息。",
    nightlife: "El Born 或 Eixample 二选一，使用正规交通返回。",
    fallback: "雨天保留圣家堂和毕加索博物馆；太累则取消海边，不取消预约项目。",
    safety: "La Rambla、地铁和海边看紧手机，不独走 Raval 偏巷。",
    activities: [
      ["09:00", "圣家堂", "建筑第一优先；仅官方渠道预约", "Sagrada Familia Barcelona"],
      ["11:30", "圣保罗现代主义建筑群", "从圣家堂步行衔接", "Recinte Modernista de Sant Pau Barcelona"],
      ["14:30", "哥特区与主教座堂", "沿老城主线向 El Born 移动", "Gothic Quarter Barcelona"],
      ["16:30", "毕加索博物馆", "开放与预约待核验", "Museu Picasso Barcelona"],
      ["19:00", "El Born 晚餐与夜生活", "控制饮酒，返程使用正规交通", "El Born Barcelona"]
    ]
  },
  "2026-10-03": {
    mainline: "抵达慕尼黑 → 王宫与老城 → Glockenbach 夜间",
    lodging: "Giesing · 朋友家",
    intensity: "高",
    food: "Viktualienmarkt 周边晚午餐；晚间选 Glockenbachviertel。",
    nightlife: "Glockenbachviertel；不在人流过密时硬闯 Oktoberfest。",
    fallback: "雨天把老城外观改为王宫或现代绘画陈列馆；航班延误则只保留老城。",
    safety: "统一日与节庆人流可能改变交通；朋友住址继续保持私密。",
    activities: [
      ["07:30", "搭乘 VY1812", "BCN → MUC", "Munich Airport"],
      ["09:40", "抵达慕尼黑", "S8 至 Rosenheimer Platz，转 S3 至 Giesing", "Munich Giesing"],
      ["13:00", "朋友家放行李", "完整住址保留在私人行程表", "Munich Giesing"],
      ["14:30", "慕尼黑王宫与老城", "馆内参观以节假日实际开放为准", "Munich Residenz"],
      ["17:30", "阿萨姆教堂与 Viktualienmarkt", "建筑短点后就近用餐", "Asamkirche Munich"],
      ["20:00", "Glockenbachviertel", "选择一处场所，不跨区续摊", "Glockenbachviertel Munich"]
    ]
  },
  "2026-10-04": {
    mainline: "铁路转场 → 耶拿光学与大学城",
    lodging: "Jena West 附近 · 朋友家",
    intensity: "中高",
    food: "抵达后 Marktplatz 午餐；晚间与朋友用餐。",
    nightlife: "查看 Café Wagner 当日节目后决定。",
    fallback: "若 8 分钟换乘失败，按 DB 当日方案改签；雨天选天文馆或 Romantikerhaus。",
    safety: "在 Erfurt 换乘时先找站台，不停留购物；朋友地址不公开。",
    activities: [
      ["08:15", "前往慕尼黑中央车站", "U2 Giesing → München Hbf", "Munich Hauptbahnhof"],
      ["09:19", "搭乘 ICE1100", "München Hbf → Erfurt Hbf", "Erfurt Hauptbahnhof"],
      ["11:52", "换乘区域列车", "换乘仅 8 分钟，提前看站台", "Jena West Station"],
      ["12:20", "抵达耶拿并放行李", "入住朋友家", "Jena West Station"],
      ["14:30", "JenTower、Marktplatz 与光学主题", "天文馆节目或光学博物馆开放待核验", "JenTower Jena"],
      ["20:00", "Café Wagner 可选", "仅在有合适当日节目时前往", "Café Wagner Jena"]
    ]
  },
  "2026-10-05": {
    mainline: "抵达布拉格 → 立体主义建筑 → 老城夜间",
    lodging: "Vinohrady · Luma Terra Prague Hostel",
    intensity: "中高",
    food: "Dlouhá 或 Vinohrady 捷克菜；避开老城广场招徕店。",
    nightlife: "老城固定演出或 Náplavka 二选一。",
    fallback: "下雨改黑圣母之屋；巴士延误则直接用餐，不追查理大桥夜景。",
    safety: "Florenc 到住宿段看紧行李；不街头换汇。",
    activities: [
      ["07:40", "抵达巴士站", "核对站台与电子车票", "Jena Bus Station"],
      ["08:10", "搭乘 FlixBus", "Jena → Prague", "Prague Florenc Bus Station"],
      ["14:00", "抵达并办理入住", "前往 Luma Terra Prague Hostel", "Luma Terra Prague Hostel"],
      ["16:00", "黑圣母之屋与老城", "捷克立体主义切入老城主线", "House of the Black Madonna Prague"],
      ["18:30", "Dlouhá 一带晚餐", "先看菜单、价格与币种", "Dlouhá Prague"],
      ["20:30", "爵士演出或河岸夜间", "按官方节目选择，不去招徕式酒吧", "Náplavka Prague"]
    ]
  },
  "2026-10-06": {
    mainline: "布拉格城堡高处起步 → 小城 → 查理大桥 → 老城",
    lodging: "Vinohrady · Luma Terra Prague Hostel",
    intensity: "高",
    food: "小城区午餐；Vinohrady 晚餐并安排下午咖啡休息。",
    nightlife: "Vinohrady 或有明确演出信息的爵士场所。",
    fallback: "雨天缩短城堡室外段，增加宫殿展馆；太累则从小城区搭电车返回。",
    safety: "城堡、查理大桥和天文钟周边防扒；ATM 只用银行网点设备。"
  },
  "2026-10-07": {
    mainline: "布拉格现代艺术 → 德累斯顿老城 → Neustadt 夜间",
    lodging: "Äußere Neustadt · Hostel Lollis Homestay Dresden",
    intensity: "高",
    food: "布拉格早午餐；德累斯顿 Neustadt 晚餐。",
    nightlife: "只在 Äußere Neustadt 主街区活动，步行返回青旅。",
    fallback: "若博物馆不开则改 Holešovice 建筑散步；巴士延误则取消德累斯顿夜景。",
    safety: "跨境巴士看紧证件；Neustadt 夜间走 Alaunstraße / Görlitzer Straße 等有人流路段。",
    activities: [
      ["09:00", "贸易展览宫", "现代艺术与功能主义建筑；开放待核验", "Trade Fair Palace Prague"],
      ["11:15", "取行李并前往车站", "提前核对 RegioJet 站点", "Prague Main Station"],
      ["12:30", "搭乘 RegioJet", "Prague → Dresden", "Dresden Hauptbahnhof"],
      ["14:25", "抵达并办理入住", "前往 Hostel Lollis Homestay Dresden", "Hostel Lollis Homestay Dresden"],
      ["16:30", "布吕尔平台与圣母教堂", "老城建筑与易北河夜景", "Brühl's Terrace Dresden"],
      ["20:00", "Äußere Neustadt", "晚餐与夜生活，步行返回青旅", "Äußere Neustadt Dresden"]
    ]
  },
  "2026-10-08": {
    mainline: "茨温格宫与王室收藏 → 夜巴补给",
    lodging: "FlixBus 夜间巴士",
    intensity: "高",
    food: "中午正式用餐；16:00 前完成早晚餐并补充水和轻食。",
    nightlife: "不安排；夜巴当晚不饮酒。",
    fallback: "雨天保留博物馆；太累则只看茨温格宫一馆，14:30 回青旅休息。",
    safety: "15:30 起只做取行李和转场，电子设备充满电，车站不离开行李。",
    activities: [
      ["09:00", "茨温格宫与古代大师画廊", "建筑与馆藏双主线，预约待核验", "Zwinger Dresden"],
      ["12:30", "老城午餐与咖啡休息", "避免夜巴前空腹", "Dresden Old Town"],
      ["13:45", "王宫或 Albertinum 二选一", "不要同时硬塞两馆", "Dresden Royal Palace"],
      ["15:30", "取行李并前往车站", "补充饮水、轻食和保暖物品", "Dresden Hauptbahnhof"],
      ["18:00", "搭乘 FlixBus", "夜间前往卢森堡", "Luxembourg Gare"]
    ]
  },
  "2026-10-09": {
    mainline: "返程航班 → 苏黎世老城与美术馆转机短线",
    lodging: "LX138 返程航班",
    intensity: "中高",
    food: "Niederdorf 选择出餐快的位置，16:30 前完成早晚餐。",
    nightlife: "不安排；18:15 开始返机场。",
    fallback: "若未行李直挂、入境延误或航班异常，取消进城；雨天改瑞士国家博物馆。",
    safety: "进城前确认 LX138；18:15 无条件返机场，至少预留 3 小时。",
    activities: [
      ["03:45", "抵达卢森堡", "在照明且有人流处休整", "Luxembourg Gare"],
      ["10:15", "搭乘 LX751", "LUX → ZRH", "Zurich Airport"],
      ["11:15", "抵达苏黎世", "确认行李直挂和返程航班后再进城", "Zurich Airport"],
      ["12:45", "火车前往 Zürich HB", "车次以 SBB 当日信息为准", "Zurich Hauptbahnhof"],
      ["13:15", "林登霍夫与 Grossmünster", "老城建筑主线", "Lindenhof Zurich"],
      ["15:00", "苏黎世美术馆或国家博物馆", "只选一馆，开放时间待核验", "Kunsthaus Zürich"],
      ["16:30", "Niederdorf 早晚餐", "不排队，预留机动时间", "Niederdorf Zurich"],
      ["18:15", "返回苏黎世机场", "至少预留 3 小时办理出境与登机", "Zurich Airport"],
      ["22:30", "搭乘 LX138", "苏黎世 → 香港", "Hong Kong International Airport"]
    ]
  },
  "2026-10-10": {
    mainline: "入境香港并安全返家",
    lodging: "到家",
    intensity: "低",
    food: "机上用餐后按状态补水。",
    fallback: "如行李延误，现场完成申报并保留回执。",
    safety: "确认全部随身物品后再离开到达大厅。"
  }
};

const flights = [
  {
    id: "lh797",
    number: "LH797",
    airline: "汉莎航空",
    duration: "12小时55分",
    departure: { code: "HKG", city: "香港", airport: "香港国际机场", date: "9月29日", time: "23:25", iso: "2026-09-29T23:25:00+08:00" },
    arrival: { code: "FRA", city: "法兰克福", airport: "法兰克福机场", date: "9月30日", time: "06:20", iso: "2026-09-30T06:20:00+02:00" }
  },
  {
    id: "lh5642",
    number: "LH5642",
    airline: "汉莎航空",
    duration: "50分钟",
    departure: { code: "FRA", city: "法兰克福", airport: "法兰克福机场", date: "9月30日", time: "13:10", iso: "2026-09-30T13:10:00+02:00" },
    arrival: { code: "LUX", city: "卢森堡", airport: "卢森堡机场", date: "9月30日", time: "14:00", iso: "2026-09-30T14:00:00+02:00" }
  },
  {
    id: "fr3109",
    number: "FR3109",
    airline: "瑞安航空",
    duration: "1小时55分",
    departure: { code: "LUX", city: "卢森堡", airport: "卢森堡机场", date: "10月1日", time: "13:25", iso: "2026-10-01T13:25:00+02:00" },
    arrival: { code: "BCN", city: "巴塞罗那", airport: "巴塞罗那埃尔普拉特机场", date: "10月1日", time: "15:20", iso: "2026-10-01T15:20:00+02:00" }
  },
  {
    id: "vy1812",
    number: "VY1812",
    airline: "伏林航空",
    duration: "2小时10分",
    departure: { code: "BCN", city: "巴塞罗那", airport: "巴塞罗那埃尔普拉特机场", date: "10月3日", time: "07:30", iso: "2026-10-03T07:30:00+02:00" },
    arrival: { code: "MUC", city: "慕尼黑", airport: "慕尼黑机场", date: "10月3日", time: "09:40", iso: "2026-10-03T09:40:00+02:00" }
  },
  {
    id: "lx751",
    number: "LX751",
    airline: "瑞士国际航空",
    duration: "1小时",
    departure: { code: "LUX", city: "卢森堡", airport: "卢森堡机场", date: "10月9日", time: "10:15", iso: "2026-10-09T10:15:00+02:00" },
    arrival: { code: "ZRH", city: "苏黎世", airport: "苏黎世机场", date: "10月9日", time: "11:15", iso: "2026-10-09T11:15:00+02:00" }
  },
  {
    id: "lx138",
    number: "LX138",
    airline: "瑞士国际航空",
    duration: "12小时05分",
    departure: { code: "ZRH", city: "苏黎世", airport: "苏黎世机场", date: "10月9日", time: "22:30", iso: "2026-10-09T22:30:00+02:00" },
    arrival: { code: "HKG", city: "香港", airport: "香港国际机场", date: "10月10日", time: "16:35", iso: "2026-10-10T16:35:00+08:00" }
  }
];

const bookings = [
  {
    id: "outbound-flights",
    city: "去程航班",
    hotel: "LH797 · LH5642",
    stay: "9/29–9/30",
    nights: "2 段",
    address: "Hong Kong International Airport"
  },
  {
    id: "lux-stay",
    city: "卢森堡住宿",
    hotel: "Youth Hostel Luxembourg City",
    stay: "9/30–10/1",
    nights: "1 晚",
    address: "2, rue du Fort Olisy, Pfaffenthal, 2261 Luxembourg, Luxembourg"
  },
  {
    id: "fr3109",
    city: "欧洲航班",
    hotel: "FR3109 · LUX → BCN",
    stay: "10/1 · 13:25",
    nights: "1 段",
    address: "Luxembourg Airport"
  },
  {
    id: "bcn-stay",
    city: "巴塞罗那住宿",
    hotel: "TOC Hostel Barcelona",
    stay: "10/1–10/3",
    nights: "2 晚",
    address: "Calle Gran Via de les Corts Catalanes 580, Eixample, 08011 Barcelona, Spain"
  },
  {
    id: "vy1812",
    city: "欧洲航班",
    hotel: "VY1812 · BCN → MUC",
    stay: "10/3 · 07:30",
    nights: "1 段",
    address: "Barcelona-El Prat Airport"
  },
  {
    id: "munich-stay",
    city: "慕尼黑住宿",
    hotel: "朋友家 · Giesing 区",
    stay: "10/3–10/4",
    nights: "1 晚",
    address: "Munich Giesing"
  },
  {
    id: "ice1100",
    city: "德国铁路",
    hotel: "ICE1100 + Erfurt 换乘",
    stay: "10/4 · 09:19",
    nights: "2 段",
    address: "Munich Hauptbahnhof"
  },
  {
    id: "jena-stay",
    city: "耶拿住宿",
    hotel: "朋友家 · Jena West 附近",
    stay: "10/4–10/5",
    nights: "1 晚",
    address: "Jena West Station"
  },
  {
    id: "jena-prague-bus",
    city: "长途巴士",
    hotel: "FlixBus · Jena → Prague",
    stay: "10/5 · 08:10",
    nights: "1 段",
    address: "Jena Bus Station"
  },
  {
    id: "prague-stay",
    city: "布拉格住宿",
    hotel: "Luma Terra Prague Hostel",
    stay: "10/5–10/7",
    nights: "2 晚",
    address: "72 Legerova, Prague, 120 00, Czech Republic"
  },
  {
    id: "prague-dresden",
    city: "跨境巴士",
    hotel: "RegioJet · Prague → Dresden",
    stay: "10/7 · 12:30",
    nights: "1 段",
    address: "Prague Main Station"
  },
  {
    id: "dresden-stay",
    city: "德累斯顿住宿",
    hotel: "Hostel Lollis Homestay Dresden",
    stay: "10/7–10/8",
    nights: "1 晚",
    address: "Görlitzer Str. 34, Neustadt, 01099 Dresden, Germany"
  },
  {
    id: "dresden-lux-bus",
    city: "夜间巴士",
    hotel: "FlixBus · Dresden → Luxembourg",
    stay: "10/8 · 18:00",
    nights: "1 夜",
    address: "Dresden Hauptbahnhof"
  },
  {
    id: "return-flights",
    city: "返程航班",
    hotel: "LX751 · LX138",
    stay: "10/9–10/10",
    nights: "2 段",
    address: "Luxembourg Airport"
  }
];

const preflightTasks = [
  ["passport", "证件与签证", "核对护照、签证、保险和所有复印件", "出发前 7 天"],
  ["reservations", "交通与住宿", "核对航班、住宿、DB、RegioJet 和 FlixBus 订单；保存离线版本", "出发前 7 天"],
  ["german-tickets", "德国交通", "确认慕尼黑市内票区、ICE1100 与 Erfurt 换乘车票规则", "出发前 7 天"],
  ["addresses", "住宿", "将朋友家完整地址单独保存到手机离线备忘", "出发前 7 天"],
  ["payment", "支付", "确认信用卡境外支付功能；准备小额欧元现金", "出发前 5 天"],
  ["network", "网络", "安装 eSIM 或开通漫游；下载离线地图", "出发前 3 天"],
  ["weather", "行李", "查询卢森堡、西班牙、德国、捷克和苏黎世天气，调整衣物", "出发前 3 天"],
  ["night-bus", "交通", "准备 10 月 8 日夜间巴士所需的颈枕、饮水和保暖衣物", "出发前 3 天"],
  ["frankfurt-stopover", "转机", "确认法兰克福行李直挂、S8 / S9 车次及 08:00 未进城即取消的备用方案", "出发前 3 天"],
  ["zurich-stopover", "转机", "确认行李直挂香港，下载 SBB 车次，并为 LX138 保留至少 3 小时返机场时间", "出发前 3 天"],
  ["weight", "行李", "称量托运与随身行李；充电宝放入随身包", "出发前 1 天"],
  ["medicine", "药品", "确认处方药原包装及英文说明或处方", "出发前 1 天"],
  ["checkin", "航班", "完成在线值机（如航司开放）", "出发前 24 小时"],
  ["airport", "航班", "再次确认机场出发时间、证件和登机牌", "出发当天"]
].map(([id, category, task, when]) => ({ id, category, task, when }));

const packingItems = [
  ["passport-original", "证件与预订", "护照（有效期至少覆盖返程后 3 个月）", 1, "随身小包", "原件随身携带"],
  ["passport-copies", "证件与预订", "签证页、护照首页复印件", 2, "随身小包", "纸质 + 手机备份"],
  ["flight-docs", "证件与预订", "往返机票及登机信息", 1, "手机/随身小包", "保存离线版本"],
  ["hotel-docs", "证件与预订", "酒店确认单", 1, "手机/随身小包", "与签证材料保持一致"],
  ["train-docs", "证件与预订", "DB / RegioJet / FlixBus 订单", 1, "手机/随身小包", "保存二维码、站台信息及订单号"],
  ["insurance", "证件与预订", "申根旅行保险保单", 1, "手机/随身小包", "纸质 + 电子版"],
  ["itinerary-contacts", "证件与预订", "行程单及紧急联系人", 1, "随身小包", "含住宿地址和联系电话"],
  ["id-photos", "证件与预订", "证件照", 2, "随身小包", "备用"],
  ["payment-cards", "支付与财物", "可境外使用的信用卡 / 借记卡", 2, "随身小包", "两张卡分开放置"],
  ["euro-cash", "支付与财物", "欧元现金", 1, "随身小包", "建议小额现金"],
  ["backup-card", "支付与财物", "备用银行卡", 1, "行李内层", "与主卡分开"],
  ["wallet", "支付与财物", "钱包及零钱包", 1, "随身小包", "避免放后裤袋"],
  ["luggage-tag", "支付与财物", "行李锁及行李牌", 1, "托运行李", "写英文姓名和联系方式"],
  ["phone", "电子与网络", "手机", 1, "随身小包", "出发前充满电"],
  ["phone-charger", "电子与网络", "手机充电线及充电头", 1, "随身小包", "建议快充"],
  ["eu-adapter", "电子与网络", "欧标转换插头（Type C/E/F）", 1, "随身小包", "本次欧洲路线适用"],
  ["power-bank", "电子与网络", "充电宝（100Wh 以下）", 1, "随身小包", "不可托运"],
  ["esim", "电子与网络", "欧洲 eSIM / 国际漫游", 1, "手机", "出发前安装并测试"],
  ["earphones", "电子与网络", "耳机", 1, "随身小包", "机上和火车使用"],
  ["camera", "电子与网络", "相机及充电设备（如需要）", 1, "随身小包", "可选"],
  ["rain-jacket", "衣物与鞋履", "防水外套 / 冲锋衣", 1, "行李箱", "早晚偏凉、可能下雨"],
  ["down-layer", "衣物与鞋履", "轻薄羽绒服或保暖中层", 1, "行李箱", "早晚或降温时使用"],
  ["knitwear", "衣物与鞋履", "针织衫 / 抓绒衣", 2, "行李箱", "便于叠穿"],
  ["long-sleeves", "衣物与鞋履", "长袖上衣", 3, "行李箱", "日常换洗"],
  ["tshirts", "衣物与鞋履", "短袖上衣", 2, "行李箱", "室内或晴天使用"],
  ["trousers", "衣物与鞋履", "长裤", 2, "行李箱", "舒适、易搭配"],
  ["underwear", "衣物与鞋履", "内衣裤", 11, "行李箱", "按 11 晚准备"],
  ["socks", "衣物与鞋履", "袜子", 11, "行李箱", "含较厚款 1–2 双"],
  ["travel-pillow", "随身与行李", "旅行颈枕", 1, "随身", "10 月 8 日夜间巴士使用"],
  ["walking-shoes", "衣物与鞋履", "舒适防水步行鞋", 1, "脚上穿", "行程步行较多"],
  ["spare-shoes", "衣物与鞋履", "备用轻便鞋", 1, "行李箱", "可选"],
  ["sleepwear", "衣物与鞋履", "睡衣", 1, "行李箱", ""],
  ["scarf", "衣物与鞋履", "围巾 / 薄帽", 1, "随身小包", "早晚保暖"],
  ["umbrella", "衣物与鞋履", "折叠雨伞", 1, "随身小包", "建议随身带"],
  ["dental", "洗护与健康", "牙刷、牙膏、牙线", 1, "洗漱包", "液体和凝胶需符合航空规定"],
  ["toiletries", "洗护与健康", "护肤品及洗护小样", 1, "洗漱包", "单瓶不超过 100ml"],
  ["skincare", "洗护与健康", "防晒霜、润唇膏、护手霜", 1, "随身小包", "秋季仍建议防晒"],
  ["glasses", "洗护与健康", "眼镜 / 隐形眼镜及护理液", 1, "随身小包", "备用眼镜建议随身"],
  ["prescriptions", "洗护与健康", "个人处方药", 1, "随身小包", "原包装；备英文处方或说明"],
  ["med-kit", "洗护与健康", "常用药：退烧、感冒、肠胃、抗过敏", 1, "随身小包", "按个人需要准备"],
  ["first-aid", "洗护与健康", "创可贴、消毒湿巾、口罩", 1, "随身小包", "少量即可"],
  ["day-bag", "随身与行李", "双肩包 / 防盗斜挎包", 1, "随身", "放证件、贵重物品和雨伞"],
  ["shopping-bag", "随身与行李", "可折叠购物袋", 1, "随身小包", "购物或装外套"],
  ["water-bottle", "随身与行李", "水瓶", 1, "随身小包", "过安检后装水"],
  ["sunglasses", "随身与行李", "太阳镜", 1, "随身小包", ""],
  ["packing-bags", "随身与行李", "洗衣袋 / 压缩袋", 2, "行李箱", "分隔干净衣物和换洗衣物"],
  ["luggage-scale", "随身与行李", "行李秤", 1, "行李箱", "返程前称重"],
  ["tissues", "随身与行李", "小型纸巾、湿巾", 1, "随身小包", "每日补充"]
].map(([id, category, item, qty, bag, note]) => ({ id, category, item, qty, bag, note }));

const defaultMemoTodos = [
  { id: "memo-stays", text: "核对 4 家青旅订单、入住时间和取消政策", completed: false },
  { id: "memo-zurich", text: "确认苏黎世转机行李直挂与进城条件", completed: false },
  { id: "memo-food", text: "补充想去的餐厅、咖啡店和购物点", completed: false }
];

const STORAGE_KEY = "europe-trip-2026-20260908-state-v1";
const LOCAL_UPDATED_KEY = `${STORAGE_KEY}-updated-at`;
const LOCAL_PENDING_KEY = `${STORAGE_KEY}-pending-cloud-sync`;
const TRIP_SYNC_ID = "europe-trip-2026";
const SUPABASE_URL = "https://rpswfigfnseofehxkfie.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_LnoBI1cTWU9g5s2MZNtFng_Uffo24E7";
const defaultState = {
  tasks: {},
  taskEdits: {},
  deletedTasks: [],
  customTasks: [],
  packing: {},
  packingEdits: {},
  deletedPacking: [],
  bookings: {},
  notes: "",
  customPacking: [],
  memoTodos: defaultMemoTodos
};

const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storageKey: "europe-trip-2026-auth-v1"
  }
});

let state = loadState();
let localUpdatedAt = Number(localStorage.getItem(LOCAL_UPDATED_KEY)) || 0;
let activeCategory = "全部";
let editingTaskId = null;
let editingPackingId = null;
let toastTimer;
let activeCityId = "barcelona";
let cityMapInstance;
const cityMarkers = new Map();
let cloudSession = null;
let activeSyncUserId = null;
let cloudChannel = null;
let cloudSaveTimer = null;
let cloudSaveInFlight = null;
let cloudSaveQueued = false;
let cloudLastUpdatedAt = 0;
let currentSyncState = "local";

function normalizeState(saved = {}) {
  const source = saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  let memoTodos;

  if (Array.isArray(source.memoTodos)) {
    memoTodos = source.memoTodos
      .filter((item) => item && typeof item.text === "string")
      .map((item, index) => ({
        id: String(item.id || `memo-saved-${index}`),
        text: item.id === "memo-stays" && item.text === "确认卢森堡、布拉格和德累斯顿住宿"
          ? "核对 4 家青旅订单、入住时间和取消政策"
          : item.text,
        completed: Boolean(item.completed)
      }));
  } else if (typeof source.notes === "string" && source.notes.trim()) {
    memoTodos = source.notes
      .split(/\r?\n/)
      .map((text) => text.trim())
      .filter(Boolean)
      .map((text, index) => ({ id: `memo-migrated-${index}`, text, completed: false }));
  } else {
    memoTodos = defaultMemoTodos.map((item) => ({ ...item }));
  }

  return {
    ...defaultState,
    ...source,
    tasks: source.tasks && typeof source.tasks === "object" && !Array.isArray(source.tasks) ? source.tasks : {},
    taskEdits: source.taskEdits && typeof source.taskEdits === "object" && !Array.isArray(source.taskEdits) ? source.taskEdits : {},
    deletedTasks: Array.isArray(source.deletedTasks) ? source.deletedTasks.map(String) : [],
    customTasks: Array.isArray(source.customTasks)
      ? source.customTasks.filter((item) => item && typeof item.task === "string")
      : [],
    packing: source.packing && typeof source.packing === "object" && !Array.isArray(source.packing) ? source.packing : {},
    packingEdits: source.packingEdits && typeof source.packingEdits === "object" && !Array.isArray(source.packingEdits) ? source.packingEdits : {},
    deletedPacking: Array.isArray(source.deletedPacking) ? source.deletedPacking.map(String) : [],
    bookings: source.bookings && typeof source.bookings === "object" && !Array.isArray(source.bookings) ? source.bookings : {},
    customPacking: Array.isArray(source.customPacking)
      ? source.customPacking.filter((item) => item && typeof item.item === "string")
      : [],
    notes: "",
    memoTodos
  };
}

function loadState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {});
  } catch {
    return normalizeState();
  }
}

function saveState({ queueCloud = true, modifiedAt = Date.now() } = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  localUpdatedAt = modifiedAt;
  localStorage.setItem(LOCAL_UPDATED_KEY, String(localUpdatedAt));
  localStorage.setItem(LOCAL_PENDING_KEY, queueCloud ? "1" : "0");
  updateProgress();
  updateMemoProgress();
  if (queueCloud) scheduleCloudSave();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function hasPendingCloudChanges() {
  return localStorage.getItem(LOCAL_PENDING_KEY) === "1";
}

function setSyncDialogMessage(message, icon = "info", stateName = currentSyncState) {
  const status = document.getElementById("syncDialogStatus");
  if (!status) return;
  status.dataset.state = stateName;
  status.innerHTML = `<i data-lucide="${icon}"></i><span>${escapeHtml(message)}</span>`;
  refreshIcons();
}

function updateSyncStatus(stateName, detail) {
  const statuses = {
    local: { icon: "cloud-off", label: "本机保存", detail: "当前保存在本机", title: "登录后开启跨设备同步" },
    syncing: { icon: "refresh-cw", label: "同步中", detail: "正在读取云端数据", title: "正在同步" },
    saving: { icon: "loader-circle", label: "正在保存", detail: "正在保存所有修改", title: "正在保存到云端" },
    synced: { icon: "cloud-check", label: "云端已同步", detail: "所有修改已同步", title: "已同步到云端" },
    offline: { icon: "wifi-off", label: "等待联网", detail: "离线修改将在联网后同步", title: "当前离线" },
    error: { icon: "triangle-alert", label: "同步失败", detail: "同步失败，请稍后重试", title: "打开同步设置" }
  };
  const next = statuses[stateName] || statuses.local;
  currentSyncState = stateName;

  const button = document.getElementById("syncStatusButton");
  if (button) {
    button.dataset.state = stateName;
    button.title = next.title;
    button.innerHTML = `<i data-lucide="${next.icon}"></i><span id="syncStatusText">${next.label}</span>`;
  }
  setSyncDialogMessage(detail || next.detail, next.icon, stateName);
  refreshIcons();
}

function updateSyncAccount(session) {
  const loginForm = document.getElementById("syncLoginForm");
  const account = document.getElementById("syncAccount");
  const email = document.getElementById("syncUserEmail");
  const signedIn = Boolean(session?.user);
  loginForm.hidden = signedIn;
  account.hidden = !signedIn;
  email.textContent = signedIn ? session.user.email || "已登录" : "";
}

function renderSynchronizedState() {
  editingTaskId = null;
  editingPackingId = null;
  renderBookings();
  renderTasks();
  renderPacking();
  renderMemoTodos();
  updateProgress();
  refreshIcons();
}

function applyCloudRecord(record, notify = false) {
  state = normalizeState(record.state);
  cloudLastUpdatedAt = Date.parse(record.updated_at) || Date.now();
  saveState({ queueCloud: false, modifiedAt: cloudLastUpdatedAt });
  renderSynchronizedState();
  updateSyncStatus("synced");
  if (notify) showToast("已同步另一台设备的更新");
}

function scheduleCloudSave(delay = 650) {
  window.clearTimeout(cloudSaveTimer);
  if (!cloudSession || !supabaseClient) {
    updateSyncStatus("local");
    return;
  }
  if (!navigator.onLine) {
    updateSyncStatus("offline");
    return;
  }
  updateSyncStatus("saving");
  cloudSaveTimer = window.setTimeout(() => {
    pushCloudState();
  }, delay);
}

async function pushCloudState() {
  if (!cloudSession || !supabaseClient) {
    updateSyncStatus("local");
    return false;
  }
  if (!navigator.onLine) {
    updateSyncStatus("offline");
    return false;
  }
  if (cloudSaveInFlight) {
    cloudSaveQueued = true;
    return cloudSaveInFlight;
  }

  window.clearTimeout(cloudSaveTimer);
  cloudSaveTimer = null;
  cloudSaveQueued = false;
  const snapshot = JSON.parse(JSON.stringify(state));
  const snapshotJson = JSON.stringify(snapshot);
  const sentAt = localUpdatedAt;
  updateSyncStatus("saving");

  cloudSaveInFlight = (async () => {
    const { data, error } = await supabaseClient
      .from("trip_states")
      .upsert({
        user_id: cloudSession.user.id,
        trip_id: TRIP_SYNC_ID,
        state: snapshot
      }, { onConflict: "user_id,trip_id" })
      .select("updated_at")
      .single();

    if (error) throw error;
    cloudLastUpdatedAt = Date.parse(data.updated_at) || Date.now();
    const unchanged = sentAt === localUpdatedAt && snapshotJson === JSON.stringify(state);
    if (unchanged) {
      localStorage.setItem(LOCAL_PENDING_KEY, "0");
      localUpdatedAt = cloudLastUpdatedAt;
      localStorage.setItem(LOCAL_UPDATED_KEY, String(localUpdatedAt));
      updateSyncStatus("synced");
    } else {
      cloudSaveQueued = true;
    }
    return true;
  })();

  try {
    return await cloudSaveInFlight;
  } catch {
    updateSyncStatus(navigator.onLine ? "error" : "offline");
    return false;
  } finally {
    cloudSaveInFlight = null;
    if (cloudSaveQueued) scheduleCloudSave(200);
  }
}

async function synchronizeCloudState() {
  if (!cloudSession || !supabaseClient) return false;
  if (!navigator.onLine) {
    updateSyncStatus("offline");
    return false;
  }

  updateSyncStatus("syncing");
  const { data, error } = await supabaseClient
    .from("trip_states")
    .select("state,updated_at")
    .eq("user_id", cloudSession.user.id)
    .eq("trip_id", TRIP_SYNC_ID)
    .maybeSingle();

  if (error) {
    updateSyncStatus("error", "无法读取云端数据，请检查后重试");
    return false;
  }

  if (!data) return pushCloudState();
  const remoteUpdatedAt = Date.parse(data.updated_at) || 0;
  if (hasPendingCloudChanges() && localUpdatedAt >= remoteUpdatedAt) return pushCloudState();
  applyCloudRecord(data);
  return true;
}

function stopCloudSubscription() {
  if (cloudChannel && supabaseClient) supabaseClient.removeChannel(cloudChannel);
  cloudChannel = null;
}

function subscribeToCloudState() {
  stopCloudSubscription();
  if (!cloudSession || !supabaseClient) return;

  cloudChannel = supabaseClient
    .channel(`trip-state-${cloudSession.user.id}`)
    .on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "trip_states",
      filter: `user_id=eq.${cloudSession.user.id}`
    }, (payload) => {
      const record = payload.new;
      if (!record || record.trip_id !== TRIP_SYNC_ID) return;
      const incoming = normalizeState(record.state);
      const sameState = JSON.stringify(incoming) === JSON.stringify(state);
      cloudLastUpdatedAt = Math.max(cloudLastUpdatedAt, Date.parse(record.updated_at) || 0);
      if (sameState) {
        if (!cloudSaveQueued) localStorage.setItem(LOCAL_PENDING_KEY, "0");
        updateSyncStatus("synced");
        return;
      }
      if (!hasPendingCloudChanges()) applyCloudRecord(record, true);
    })
    .subscribe((status) => {
      if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
        updateSyncStatus(navigator.onLine ? "error" : "offline");
      }
    });
}

async function setCloudSession(session) {
  const nextUserId = session?.user?.id || null;
  cloudSession = session;
  updateSyncAccount(session);

  if (!nextUserId) {
    activeSyncUserId = null;
    stopCloudSubscription();
    updateSyncStatus("local");
    return;
  }
  if (activeSyncUserId === nextUserId) return;

  activeSyncUserId = nextUserId;
  subscribeToCloudState();
  await synchronizeCloudState();
}

function setupCloudSync() {
  const dialog = document.getElementById("syncDialog");
  const statusButton = document.getElementById("syncStatusButton");
  const closeButton = document.getElementById("closeSyncDialog");
  const loginForm = document.getElementById("syncLoginForm");
  const syncNowButton = document.getElementById("syncNowButton");
  const signOutButton = document.getElementById("syncSignOutButton");

  updateSyncAccount(null);
  updateSyncStatus("local");
  statusButton.addEventListener("click", () => dialog.showModal());
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = document.getElementById("syncEmail");
    const submitButton = loginForm.querySelector("button[type='submit']");
    const email = input.value.trim();
    if (!email || !supabaseClient) return;

    submitButton.disabled = true;
    submitButton.textContent = "发送中";
    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo, shouldCreateUser: true }
    });
    submitButton.disabled = false;
    submitButton.textContent = "发送登录链接";
    if (error) {
      setSyncDialogMessage("登录链接发送失败，请稍后重试", "triangle-alert", "error");
      return;
    }
    setSyncDialogMessage("登录链接已发送，请查看邮箱", "mail-check", "local");
  });

  syncNowButton.addEventListener("click", async () => {
    syncNowButton.disabled = true;
    syncNowButton.classList.add("is-loading");
    await synchronizeCloudState();
    syncNowButton.disabled = false;
    syncNowButton.classList.remove("is-loading");
  });

  signOutButton.addEventListener("click", async () => {
    signOutButton.disabled = true;
    const { error } = await supabaseClient.auth.signOut({ scope: "local" });
    signOutButton.disabled = false;
    if (error) {
      setSyncDialogMessage("退出失败，请稍后重试", "triangle-alert", "error");
      return;
    }
    dialog.close();
    showToast("已退出云端同步");
  });

  window.addEventListener("offline", () => {
    if (cloudSession) updateSyncStatus("offline");
  });
  window.addEventListener("online", () => {
    if (cloudSession) {
      if (hasPendingCloudChanges()) scheduleCloudSave(100);
      else synchronizeCloudState();
    }
  });

  if (!supabaseClient) {
    updateSyncStatus("error", "云端同步组件加载失败");
    return;
  }

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => setCloudSession(session), 0);
  });
  supabaseClient.auth.getSession().then(({ data, error }) => {
    if (error) updateSyncStatus("error", "无法读取登录状态");
    else setCloudSession(data.session);
  });
}

function matchMeter(value) {
  return `<span class="match-meter" role="img" aria-label="偏好匹配度 ${value} 星（满分 5 星）">${Array.from({ length: 5 }, (_, index) => `<i class="${index < value ? "is-filled" : ""}"></i>`).join("")}</span>`;
}

function renderCitySwitcher() {
  const switcher = document.getElementById("citySwitcher");
  switcher.innerHTML = cityProfiles.map((city) => `
    <button class="${city.id === activeCityId ? "is-active" : ""}" type="button" data-city-id="${city.id}" aria-pressed="${city.id === activeCityId}">
      <strong>${escapeHtml(city.name)}</strong><span>${escapeHtml(city.country)}</span>
    </button>
  `).join("");

  switcher.onclick = (event) => {
    const button = event.target.closest("[data-city-id]");
    if (button) selectCity(button.dataset.cityId, true);
  };
}

function renderCityDetail() {
  const city = cityProfiles.find((item) => item.id === activeCityId) || cityProfiles[0];
  const attractions = city.attractions.map((attraction, index) => `
    <div class="attraction-row">
      <span class="attraction-index">${String(index + 1).padStart(2, "0")}</span>
      <div><strong>${escapeHtml(attraction.name)}</strong><small>${escapeHtml(attraction.type)} · ${escapeHtml(attraction.note)}</small></div>
      <div class="attraction-actions">
        <a href="${mapsUrl(attraction.query)}" target="_blank" rel="noreferrer" title="在地图中打开 ${escapeHtml(attraction.name)}" aria-label="在地图中打开 ${escapeHtml(attraction.name)}"><i data-lucide="map-pin"></i></a>
        <a href="${escapeHtml(attraction.url)}" target="_blank" rel="noreferrer" title="打开 ${escapeHtml(attraction.name)} 官方页面" aria-label="打开 ${escapeHtml(attraction.name)} 官方页面"><i data-lucide="external-link"></i></a>
      </div>
    </div>
  `).join("");

  document.getElementById("cityDetail").innerHTML = `
    <figure class="city-visual">
      <img src="${escapeHtml(city.image)}" alt="${escapeHtml(city.imageAlt)}" />
      <figcaption><a href="${escapeHtml(city.imageSource)}" target="_blank" rel="noreferrer">图片：${escapeHtml(city.imageCredit)}</a></figcaption>
    </figure>
    <div class="city-detail__heading">
      <div><span>${escapeHtml(city.nameEn.toUpperCase())} · ${escapeHtml(city.country)}</span><h3>${escapeHtml(city.name)}</h3></div>
      <div class="city-fit"><span>偏好匹配</span>${matchMeter(city.match)}</div>
    </div>
    <p class="city-summary">${escapeHtml(city.summary)}</p>
    <div class="city-facts">
      <div><span>行程角色</span><strong>${escapeHtml(city.role)}</strong></div>
      <div><span>建议停留</span><strong>${escapeHtml(city.stay)}</strong></div>
      <div><span>季节适配</span><strong>${escapeHtml(city.season)}</strong></div>
      <div><span>体力消耗</span><strong>${escapeHtml(city.energy)}</strong></div>
    </div>
    <div class="fit-analysis">
      <p><i data-lucide="circle-check-big"></i><span><strong>适合你的原因</strong>${escapeHtml(city.fit)}</span></p>
      <p><i data-lucide="triangle-alert"></i><span><strong>需要收敛</strong>${escapeHtml(city.caution)}</span></p>
    </div>
    <section class="city-subsection" aria-labelledby="attractions-${city.id}">
      <div class="subheading-row"><h4 id="attractions-${city.id}">核心景点</h4><span>推荐指数 ${city.match} / 5</span></div>
      <div class="attraction-list">${attractions}</div>
    </section>
    <section class="city-subsection" aria-label="${escapeHtml(city.name)}衣食住行">
      <div class="info-row"><i data-lucide="bed-double"></i><span><strong>住宿区域</strong>${escapeHtml(city.lodging)}</span></div>
      <div class="info-row"><i data-lucide="utensils"></i><span><strong>美食</strong>${escapeHtml(city.food)}</span></div>
      <div class="info-row"><i data-lucide="tram-front"></i><span><strong>市内交通</strong>${escapeHtml(city.localTransport)}</span></div>
      <div class="info-row"><i data-lucide="route"></i><span><strong>城市间交通</strong>${escapeHtml(city.betweenTransport)}</span></div>
      <div class="info-row"><i data-lucide="moon-star"></i><span><strong>夜生活</strong>${escapeHtml(city.nightlife)}</span></div>
      <div class="info-row info-row--safety"><i data-lucide="shield-alert"></i><span><strong>独行安全</strong>${escapeHtml(city.safety)}</span></div>
    </section>
  `;
  refreshIcons();
}

function selectCity(cityId, moveMap = false) {
  const city = cityProfiles.find((item) => item.id === cityId);
  if (!city) return;
  activeCityId = cityId;
  document.querySelectorAll("[data-city-id]").forEach((button) => {
    const active = button.dataset.cityId === cityId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  cityMarkers.forEach((marker, id) => marker.setStyle({
    radius: id === cityId ? 9 : 6,
    weight: id === cityId ? 4 : 2,
    fillColor: id === cityId ? "#b83a38" : "#173a33",
    fillOpacity: id === cityId ? 1 : 0.82
  }));
  if (moveMap && cityMapInstance) cityMapInstance.panTo(city.coordinates, { animate: true });
  renderCityDetail();
  renderCityExperiences();
}

function initCityMap() {
  const mapElement = document.getElementById("cityMap");
  if (!mapElement) return;
  if (cityMapInstance) {
    cityMapInstance.invalidateSize();
    return;
  }
  if (!window.L) {
    mapElement.innerHTML = `<div class="map-unavailable"><i data-lucide="map-pinned"></i><strong>地图暂未载入</strong><span>仍可通过下方城市按钮查看全部资料。</span></div>`;
    refreshIcons();
    return;
  }

  cityMapInstance = L.map(mapElement, {
    zoomControl: true,
    scrollWheelZoom: false,
    minZoom: 3,
    maxZoom: 12
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(cityMapInstance);

  const routePoints = routeCityIds.map((id) => cityProfiles.find((city) => city.id === id).coordinates);
  L.polyline(routePoints, { color: "#b83a38", weight: 3, opacity: 0.78 }).addTo(cityMapInstance);
  cityProfiles.forEach((city) => {
    const marker = L.circleMarker(city.coordinates, {
      radius: city.id === activeCityId ? 9 : 6,
      color: "#ffffff",
      weight: city.id === activeCityId ? 4 : 2,
      fillColor: city.id === activeCityId ? "#b83a38" : "#173a33",
      fillOpacity: city.id === activeCityId ? 1 : 0.82
    }).addTo(cityMapInstance);
    marker.bindTooltip(city.name, { direction: "top", offset: [0, -8] });
    marker.on("click", () => selectCity(city.id));
    cityMarkers.set(city.id, marker);
  });
  cityMapInstance.fitBounds(L.latLngBounds(routePoints).pad(0.12), { maxZoom: 5 });
}

function renderCityExperiences() {
  const city = cityProfiles.find((item) => item.id === activeCityId) || cityProfiles[0];
  const experiences = cityExperiences[city.id] || [];
  document.getElementById("experienceCityLabel").textContent = city.name;
  document.getElementById("experienceIntro").textContent = `${city.name}推荐体验按本次旅行偏好与可执行性排序；点击地点可直接打开地图。`;
  document.getElementById("experienceList").innerHTML = experiences.map((experience, index) => `
    <a class="experience-row" href="${mapsUrl(experience.query)}" target="_blank" rel="noreferrer" aria-label="在地图中打开 ${escapeHtml(experience.name)}">
      <span class="experience-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="experience-copy">
        <strong>${escapeHtml(experience.name)}</strong>
        <small><span>${escapeHtml(experience.type)}</span>${escapeHtml(experience.note)}</small>
      </span>
      <span class="experience-map" title="打开地图"><i data-lucide="map-pin"></i></span>
    </a>
  `).join("");
  refreshIcons();
}

function renderPracticalInfo() {
  document.getElementById("practicalGrid").innerHTML = practicalInfo.map((item) => `
    <div class="practical-item"><i data-lucide="${item.icon}"></i><p><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.value)}</span></p></div>
  `).join("");
  document.getElementById("auditList").innerHTML = auditItems.map((item) => `
    <div class="audit-item"><span class="audit-status audit-status--${item.tone}">${escapeHtml(item.status)}</span><p><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.note)}</span></p></div>
  `).join("");
}

function renderCustomAttractions() {
  const city = cityProfiles.find((item) => item.id === document.getElementById("customCity").value) || cityProfiles[0];
  document.getElementById("customAttractions").innerHTML = city.attractions.map((item, index) => `
    <label><input type="checkbox" value="${index}" checked /><span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.type)}</small></span></label>
  `).join("");
}

function generateCustomPlan() {
  const city = cityProfiles.find((item) => item.id === document.getElementById("customCity").value) || cityProfiles[0];
  const intensity = document.getElementById("customIntensity").value;
  const intensityConfig = {
    relaxed: { label: "轻松", limit: 2, times: ["10:00", "14:30"] },
    balanced: { label: "适中", limit: 3, times: ["09:30", "12:30", "15:30"] },
    fast: { label: "紧凑", limit: 4, times: ["09:00", "11:30", "14:30", "17:00"] }
  }[intensity];
  const selectedIndexes = [...document.querySelectorAll("#customAttractions input:checked")].map((input) => Number(input.value));
  if (!selectedIndexes.length) {
    document.getElementById("generatedPlan").innerHTML = `<p class="generator-error" role="alert">请至少选择一个地点。</p>`;
    return;
  }
  const selected = selectedIndexes.slice(0, intensityConfig.limit).map((index) => city.attractions[index]);
  const indoor = city.attractions.find((item) => item.type.includes("博物馆"));
  const steps = selected.map((item, index) => `
    <div class="generated-step"><time>${intensityConfig.times[index]}</time><span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.note)}</small></span><a href="${mapsUrl(item.query)}" target="_blank" rel="noreferrer" title="在地图中打开 ${escapeHtml(item.name)}" aria-label="在地图中打开 ${escapeHtml(item.name)}"><i data-lucide="map-pin"></i></a></div>
  `).join("");
  const omitted = selectedIndexes.length - selected.length;
  document.getElementById("generatedPlan").innerHTML = `
    <div class="generated-plan__head"><div><span>${escapeHtml(city.nameEn.toUpperCase())}</span><h3>${escapeHtml(city.name)} · ${intensityConfig.label}</h3></div><strong>${selected.length} 个核心点</strong></div>
    <p class="generated-route"><i data-lucide="route"></i>${escapeHtml(selected.map((item) => item.name).join(" → "))}</p>
    <div class="generated-steps">${steps}</div>
    ${omitted > 0 ? `<p class="generator-notice">为匹配“${intensityConfig.label}”强度，已收敛 ${omitted} 个地点。</p>` : ""}
    <div class="generated-support">
      <p><strong>交通</strong><span>${escapeHtml(city.localTransport)}</span></p>
      <p><strong>餐饮 / 休息</strong><span>${escapeHtml(city.food)}</span></p>
      <p><strong>住宿</strong><span>${escapeHtml(city.lodging)}</span></p>
      <p><strong>雨天 / 太累</strong><span>${escapeHtml(indoor ? `优先保留 ${indoor.name}；其余室外点按体力删减。` : "保留最优先地点，其余改为室内咖啡和休息。")}</span></p>
      <p class="generated-safety"><strong>独行安全</strong><span>${escapeHtml(city.safety)}</span></p>
    </div>
    <small class="generator-disclaimer">时间为路线建议，不是场馆预约或交通时刻；提交前请核对官方开放信息。</small>
  `;
  refreshIcons();
}

function setupCustomItinerary() {
  const citySelect = document.getElementById("customCity");
  citySelect.innerHTML = cityProfiles.map((city) => `<option value="${city.id}"${city.id === "barcelona" ? " selected" : ""}>${escapeHtml(city.name)} · ${escapeHtml(city.country)}</option>`).join("");
  citySelect.addEventListener("change", () => {
    renderCustomAttractions();
    generateCustomPlan();
  });
  document.getElementById("customItineraryForm").addEventListener("submit", (event) => {
    event.preventDefault();
    generateCustomPlan();
  });
  renderCustomAttractions();
  generateCustomPlan();
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dailyTransportDateKey() {
  const previewDate = new URLSearchParams(window.location.search).get("previewDate");
  return /^2026-(09|10)-\d{2}$/.test(previewDate || "") ? previewDate : localDateKey();
}

function formatTripDate(dateKey) {
  const [, month, day] = dateKey.split("-");
  return `${Number(month)} 月 ${Number(day)} 日`;
}

function renderDailyTransport() {
  const currentDate = dailyTransportDateKey();
  const firstTravelDate = "2026-09-29";
  const lastTravelDate = "2026-10-09";
  let heading;
  let displayDate;
  let highlight;

  if (currentDate < firstTravelDate) {
    heading = "出发日";
    displayDate = firstTravelDate;
    highlight = dailyTransportHighlights[firstTravelDate];
  } else if (currentDate <= lastTravelDate) {
    heading = "今日交通";
    displayDate = currentDate;
    highlight = dailyTransportHighlights[currentDate];
  } else {
    heading = "行程完成";
    displayDate = "2026-10-10";
    highlight = completedTransportHighlight;
  }

  if (!highlight) return;
  const dateLabel = formatTripDate(displayDate);
  const dateElement = document.getElementById("dailyTransportDate");
  const card = document.getElementById("dailyTransportCard");
  document.getElementById("dailyTransportTitle").textContent = heading;
  dateElement.dateTime = displayDate;
  dateElement.textContent = dateLabel;
  document.getElementById("dailyTransportTime").textContent = highlight.time;
  document.getElementById("dailyTransportRoute").textContent = highlight.route;
  document.getElementById("dailyTransportName").textContent = highlight.title;
  document.getElementById("dailyTransportDescription").textContent = highlight.description;
  document.getElementById("dailyTransportMap").href = mapsUrl(highlight.query);
  card.dataset.mode = highlight.mode;
  card.setAttribute("aria-label", `${dateLabel}${highlight.title}`);
}

function updateCountdown() {
  const start = new Date("2026-09-29T23:25:00+08:00");
  const end = new Date("2026-10-10T16:35:00+08:00");
  const now = new Date();
  const value = document.getElementById("countdownValue");
  const label = document.getElementById("countdownLabel");

  if (now < start) {
    value.textContent = Math.max(0, Math.ceil((start - now) / 86400000));
    label.textContent = "天后出发";
  } else if (now < end) {
    value.textContent = Math.min(12, Math.floor((now - start) / 86400000) + 1);
    label.textContent = "旅程第几天";
  } else {
    value.textContent = "✓";
    label.textContent = "旅程完成";
  }
}

function formatFlightCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const clock = [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");

  return days > 0 ? `${days}天 ${clock}` : clock;
}

function getFlightCountdown(flight, now) {
  const departureTime = new Date(flight.departure.iso).getTime();
  const arrivalTime = new Date(flight.arrival.iso).getTime();

  if (now >= arrivalTime) return { label: "航班状态", value: "已抵达", className: "is-complete" };
  if (now >= departureTime) return { label: "距离抵达还剩", value: formatFlightCountdown(arrivalTime - now), className: "is-live" };
  return { label: "距离起飞还剩", value: formatFlightCountdown(departureTime - now), className: "" };
}

function updateFlightCountdowns() {
  const now = Date.now();
  document.querySelectorAll("[data-flight-countdown]").forEach((element) => {
    const flight = flights.find((item) => item.id === element.dataset.flightCountdown);
    if (!flight) return;
    const countdown = getFlightCountdown(flight, now);
    element.className = `flight-countdown${countdown.className ? ` ${countdown.className}` : ""}`;
    element.querySelector("span").textContent = countdown.label;
    element.querySelector("strong").textContent = countdown.value;
  });
}

function renderFlights() {
  const carousel = document.getElementById("flightCarousel");
  carousel.innerHTML = flights.map((flight, index) => `
    <article class="flight-card" data-flight-card aria-label="第 ${index + 1} 段航班，${escapeHtml(flight.number)}，${escapeHtml(flight.departure.city)}至${escapeHtml(flight.arrival.city)}">
      <div class="flight-card__head">
        <div class="flight-card__identity">
          <span class="flight-card__sequence">FLIGHT ${String(index + 1).padStart(2, "0")} / ${String(flights.length).padStart(2, "0")}</span>
          <span class="flight-card__airline">${escapeHtml(flight.airline)}</span>
        </div>
        <strong class="flight-card__number">${escapeHtml(flight.number)}</strong>
      </div>
      <div class="flight-card__route">
        <div class="flight-point">
          <strong>${escapeHtml(flight.departure.code)}</strong>
          <span>${escapeHtml(flight.departure.city)}</span>
        </div>
        <div class="flight-path"><span>直飞</span><div class="flight-path__line"><i data-lucide="plane"></i></div></div>
        <div class="flight-point">
          <strong>${escapeHtml(flight.arrival.code)}</strong>
          <span>${escapeHtml(flight.arrival.city)}</span>
        </div>
      </div>
      <div class="flight-card__schedule">
        <div><span>${escapeHtml(flight.departure.date)}</span><strong><time datetime="${escapeHtml(flight.departure.iso)}">${escapeHtml(flight.departure.time)}</time> 起飞</strong></div>
        <div><span>飞行时间</span><strong>${escapeHtml(flight.duration)}</strong></div>
        <div><span>${escapeHtml(flight.arrival.date)}</span><strong><time datetime="${escapeHtml(flight.arrival.iso)}">${escapeHtml(flight.arrival.time)}</time> 抵达</strong></div>
      </div>
      <p class="flight-card__airports"><i data-lucide="map-pin"></i><span>${escapeHtml(flight.departure.airport)} → ${escapeHtml(flight.arrival.airport)}</span></p>
      <div class="flight-countdown" data-flight-countdown="${escapeHtml(flight.id)}"><span>距离起飞还剩</span><strong>--:--:--</strong></div>
    </article>
  `).join("");
  updateFlightCountdowns();
}

function setupFlightCarousel() {
  const carousel = document.getElementById("flightCarousel");
  const previous = document.getElementById("previousFlight");
  const next = document.getElementById("nextFlight");
  const position = document.getElementById("flightPosition");
  let activeIndex = 0;
  let frame;

  function updateControls() {
    const cards = [...carousel.querySelectorAll("[data-flight-card]")];
    const padding = Number.parseFloat(getComputedStyle(carousel).paddingLeft) || 0;
    const marker = carousel.scrollLeft + padding;
    activeIndex = cards.reduce((closest, card, index) => (
      Math.abs(card.offsetLeft - marker) < Math.abs(cards[closest].offsetLeft - marker) ? index : closest
    ), 0);
    position.textContent = `${activeIndex + 1} / ${cards.length}`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === cards.length - 1;
  }

  function goTo(index) {
    const cards = [...carousel.querySelectorAll("[data-flight-card]")];
    const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
    const padding = Number.parseFloat(getComputedStyle(carousel).paddingLeft) || 0;
    carousel.scrollTo({ left: target.offsetLeft - padding, behavior: "smooth" });
  }

  carousel.addEventListener("scroll", () => {
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(updateControls);
  }, { passive: true });
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    if (event.key === "ArrowRight") goTo(activeIndex + 1);
  });
  previous.addEventListener("click", () => goTo(activeIndex - 1));
  next.addEventListener("click", () => goTo(activeIndex + 1));
  updateControls();
}

function renderItinerary() {
  const picker = document.getElementById("dayPicker");
  const list = document.getElementById("itineraryList");
  const dateFormatter = new Intl.DateTimeFormat("zh-CN", { month: "numeric", day: "numeric", weekday: "short" });

  picker.innerHTML = itinerary.map((day, index) => {
    const parts = dateFormatter.formatToParts(new Date(`${day.date}T12:00:00`));
    const month = parts.find((part) => part.type === "month")?.value;
    const date = parts.find((part) => part.type === "day")?.value;
    const weekday = parts.find((part) => part.type === "weekday")?.value;
    return `<button class="day-chip${index === 0 ? " is-active" : ""}" type="button" data-day-target="day-${index}" aria-label="${month}月${date}日 ${weekday}">
      <strong>${month}/${date}</strong><span>${weekday}</span>
    </button>`;
  }).join("");

  list.innerHTML = itinerary.map((day, index) => {
    const dateText = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "short" }).format(new Date(`${day.date}T12:00:00`));
    const recommendation = dayRecommendations[day.date] || {};
    const activities = (recommendation.activities || day.activities).map(([time, title, note, query]) => `
      <div class="activity">
        <time>${escapeHtml(time)}</time>
        <div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(note)}</small></div>
        <a href="${mapsUrl(query)}" target="_blank" rel="noreferrer" title="在地图中打开 ${escapeHtml(title)}" aria-label="在地图中打开 ${escapeHtml(title)}"><i data-lucide="map-pin"></i></a>
      </div>`).join("");
    const nightlife = recommendation.nightlife
      ? `<div><i data-lucide="moon-star"></i><span><strong>夜生活</strong>${escapeHtml(recommendation.nightlife)}</span></div>`
      : "";

    return `<article class="day-plan" id="day-${index}" data-day-index="${index}">
      <div class="day-plan__head">
        <div><span class="city-label">DAY ${index + 1} · ${escapeHtml(day.cityEn.toUpperCase())}</span><h3>${escapeHtml(day.city)}</h3></div>
        <time datetime="${day.date}">${dateText}</time>
      </div>
      <div class="day-mainline"><span>今日主线</span><strong>${escapeHtml(recommendation.mainline || day.city)}</strong></div>
      <div class="day-meta">
        <div><span>住宿区域</span><strong>${escapeHtml(recommendation.lodging || day.overnight)}</strong></div>
        <div><span>体力强度</span><strong class="intensity intensity--${recommendation.intensity === "高" ? "high" : recommendation.intensity === "低" ? "low" : "medium"}">${escapeHtml(recommendation.intensity || "中")}</strong></div>
      </div>
      <p class="day-plan__transport"><i data-lucide="${day.transportIcon}"></i><span>${escapeHtml(day.transport)}</span></p>
      <div class="activity-list">${activities}</div>
      <div class="day-support">
        <div><i data-lucide="utensils"></i><span><strong>餐饮 / 休息</strong>${escapeHtml(recommendation.food || "按转场节奏就近安排。")}</span></div>
        ${nightlife}
        <div><i data-lucide="cloud-rain"></i><span><strong>雨天 / 太累</strong>${escapeHtml(recommendation.fallback || "缩短室外步行，优先保留已预约项目。")}</span></div>
        <div class="day-support__safety"><i data-lucide="shield-alert"></i><span><strong>独行安全</strong>${escapeHtml(recommendation.safety || "贵重物品贴身，夜间走照明主路。")}</span></div>
      </div>
    </article>`;
  }).join("");

  picker.addEventListener("click", (event) => {
    const button = event.target.closest("[data-day-target]");
    if (!button) return;
    picker.querySelectorAll(".day-chip").forEach((chip) => chip.classList.toggle("is-active", chip === button));
    document.getElementById(button.dataset.dayTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function renderBookings() {
  const list = document.getElementById("bookingList");
  list.innerHTML = bookings.map((booking) => {
    const confirmed = Boolean(state.bookings[booking.id]);
    return `<article class="booking-card">
      <div class="booking-card__accent"></div>
      <div class="booking-card__body">
        <div class="booking-card__top">
          <div><p class="booking-card__city">${escapeHtml(booking.city)}</p><h3>${escapeHtml(booking.hotel)}</h3></div>
          <button class="status-button${confirmed ? " is-confirmed" : ""}" type="button" data-booking-id="${booking.id}" aria-pressed="${confirmed}">${confirmed ? "已确认" : "待核对"}</button>
        </div>
        <div class="booking-meta"><div><span>入住日期</span><strong>${escapeHtml(booking.stay)}</strong></div><div><span>晚数</span><strong>${escapeHtml(booking.nights)}</strong></div></div>
        <p class="booking-address"><i data-lucide="map-pin"></i><a href="${mapsUrl(booking.address)}" target="_blank" rel="noreferrer">${escapeHtml(booking.address)}</a></p>
      </div>
    </article>`;
  }).join("");

  list.onclick = (event) => {
    const button = event.target.closest("[data-booking-id]");
    if (!button) return;
    const id = button.dataset.bookingId;
    state.bookings[id] = !state.bookings[id];
    saveState();
    renderBookings();
    refreshIcons();
  };

  const pending = bookings.filter((booking) => !state.bookings[booking.id]).length;
  document.getElementById("pendingBookingCount").textContent = `${pending} 项`;
}

function allPreflightTasks() {
  const builtIn = preflightTasks
    .filter((task) => !state.deletedTasks.includes(task.id))
    .map((task) => ({ ...task, task: state.taskEdits[task.id] || task.task }));
  return [...builtIn, ...state.customTasks];
}

function renderTasks() {
  const list = document.getElementById("taskList");
  const tasks = allPreflightTasks();

  list.innerHTML = tasks.map((task) => {
    const checked = Boolean(state.tasks[task.id]);
    const editing = editingTaskId === task.id;
    const inputId = `task-${task.id}`;
    const copy = editing
      ? `<div class="check-item__copy"><input class="prep-edit-input" type="text" maxlength="80" value="${escapeHtml(task.task)}" data-task-edit-input="${escapeHtml(task.id)}" aria-label="编辑待办内容" /><span>${escapeHtml(task.category)}</span></div>`
      : `<label class="check-item__copy" for="${escapeHtml(inputId)}"><strong>${escapeHtml(task.task)}</strong><span>${escapeHtml(task.category)}</span></label>`;
    const actions = editing
      ? `<button class="prep-item-action" type="button" data-save-task="${escapeHtml(task.id)}" title="保存修改" aria-label="保存修改"><i data-lucide="check"></i></button>
         <button class="prep-item-action" type="button" data-cancel-task="${escapeHtml(task.id)}" title="取消修改" aria-label="取消修改"><i data-lucide="x"></i></button>`
      : `<button class="prep-item-action" type="button" data-edit-task="${escapeHtml(task.id)}" title="编辑 ${escapeHtml(task.task)}" aria-label="编辑 ${escapeHtml(task.task)}"><i data-lucide="pencil"></i></button>
         <button class="prep-item-action prep-item-action--delete" type="button" data-delete-task="${escapeHtml(task.id)}" title="删除 ${escapeHtml(task.task)}" aria-label="删除 ${escapeHtml(task.task)}"><i data-lucide="trash-2"></i></button>`;

    return `<div class="check-item${editing ? " is-editing" : ""}">
      <input id="${escapeHtml(inputId)}" type="checkbox" data-task-id="${escapeHtml(task.id)}" ${checked ? "checked" : ""} />
      <label class="check-control" for="${escapeHtml(inputId)}"><i data-lucide="check"></i></label>
      ${copy}
      <div class="check-item__side"><span class="check-item__tag">${escapeHtml(task.when)}</span><span class="prep-item-actions">${actions}</span></div>
    </div>`;
  }).join("");

  function commitTaskEdit(id) {
    const input = list.querySelector("[data-task-edit-input]");
    const value = input?.value.trim();
    if (!value) {
      showToast("待办内容不能为空");
      input?.focus();
      return;
    }
    const custom = state.customTasks.find((task) => task.id === id);
    if (custom) custom.task = value;
    else {
      const original = preflightTasks.find((task) => task.id === id);
      if (original?.task === value) delete state.taskEdits[id];
      else state.taskEdits[id] = value;
    }
    editingTaskId = null;
    saveState();
    renderTasks();
    showToast("待办已更新");
  }

  list.onchange = (event) => {
    const input = event.target.closest("[data-task-id]");
    if (!input) return;
    state.tasks[input.dataset.taskId] = input.checked;
    saveState();
  };

  list.onclick = (event) => {
    const editButton = event.target.closest("[data-edit-task]");
    const saveButton = event.target.closest("[data-save-task]");
    const cancelButton = event.target.closest("[data-cancel-task]");
    const deleteButton = event.target.closest("[data-delete-task]");

    if (editButton) {
      editingTaskId = editButton.dataset.editTask;
      renderTasks();
      list.querySelector("[data-task-edit-input]")?.focus();
    } else if (saveButton) {
      commitTaskEdit(saveButton.dataset.saveTask);
    } else if (cancelButton) {
      editingTaskId = null;
      renderTasks();
    } else if (deleteButton) {
      const id = deleteButton.dataset.deleteTask;
      const task = tasks.find((item) => item.id === id);
      if (!task || !window.confirm(`删除“${task.task}”？`)) return;
      if (state.customTasks.some((item) => item.id === id)) {
        state.customTasks = state.customTasks.filter((item) => item.id !== id);
      } else if (!state.deletedTasks.includes(id)) {
        state.deletedTasks.push(id);
      }
      delete state.tasks[id];
      delete state.taskEdits[id];
      editingTaskId = null;
      saveState();
      renderTasks();
      showToast("已删除待办");
    }
  };

  list.onkeydown = (event) => {
    if (!event.target.matches("[data-task-edit-input]")) return;
    if (event.key === "Enter") {
      event.preventDefault();
      commitTaskEdit(event.target.dataset.taskEditInput);
    } else if (event.key === "Escape") {
      editingTaskId = null;
      renderTasks();
    }
  };

  refreshIcons();
}

function updateMemoProgress() {
  const items = state.memoTodos || [];
  const completed = items.filter((item) => item.completed).length;
  const text = document.getElementById("memoProgressText");
  const bar = document.getElementById("memoProgressBar");
  const empty = document.getElementById("memoEmpty");

  text.textContent = `${completed} / ${items.length} 已完成`;
  bar.style.width = `${items.length ? (completed / items.length) * 100 : 0}%`;
  empty.hidden = items.length > 0;
}

function renderMemoTodos() {
  const list = document.getElementById("memoTodoList");
  list.innerHTML = state.memoTodos.map((todo, index) => {
    const inputId = `memo-check-${index}`;
    return `<div class="check-item memo-item">
      <input id="${inputId}" type="checkbox" data-memo-check="${escapeHtml(todo.id)}" ${todo.completed ? "checked" : ""} />
      <label class="check-control" for="${inputId}"><i data-lucide="check"></i></label>
      <input class="memo-item__input" type="text" maxlength="80" value="${escapeHtml(todo.text)}" data-memo-text="${escapeHtml(todo.id)}" aria-label="编辑待办：${escapeHtml(todo.text)}" />
      <button class="delete-item" type="button" data-delete-memo="${escapeHtml(todo.id)}" title="删除 ${escapeHtml(todo.text)}" aria-label="删除 ${escapeHtml(todo.text)}"><i data-lucide="trash-2"></i></button>
    </div>`;
  }).join("");

  list.onchange = (event) => {
    const checkbox = event.target.closest("[data-memo-check]");
    if (!checkbox) return;
    const todo = state.memoTodos.find((item) => item.id === checkbox.dataset.memoCheck);
    if (!todo) return;
    todo.completed = checkbox.checked;
    saveState();
    checkbox.closest(".memo-item")?.classList.toggle("is-complete", checkbox.checked);
  };

  list.oninput = (event) => {
    const input = event.target.closest("[data-memo-text]");
    if (!input) return;
    const todo = state.memoTodos.find((item) => item.id === input.dataset.memoText);
    if (!todo) return;
    todo.text = input.value;
    saveState();
  };

  list.onclick = (event) => {
    const button = event.target.closest("[data-delete-memo]");
    if (!button) return;
    state.memoTodos = state.memoTodos.filter((item) => item.id !== button.dataset.deleteMemo);
    saveState();
    renderMemoTodos();
    showToast("已删除待办");
  };

  updateMemoProgress();
  refreshIcons();
}

function allPackingItems() {
  const builtIn = packingItems
    .filter((item) => !state.deletedPacking.includes(item.id))
    .map((item) => ({ ...item, item: state.packingEdits[item.id] || item.item }));
  const custom = state.customPacking.map((item) => ({ ...item, category: "自定义", qty: 1, bag: "待安排", note: "" }));
  return [...builtIn, ...custom];
}

function renderCategoryFilter() {
  const categories = ["全部", ...new Set(allPackingItems().map((item) => item.category))];
  if (!categories.includes(activeCategory)) activeCategory = "全部";
  document.getElementById("categoryFilter").innerHTML = categories.map((category) => `
    <button class="${category === activeCategory ? "is-active" : ""}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
  `).join("");
}

function renderPacking() {
  renderCategoryFilter();
  const items = allPackingItems().filter((item) => activeCategory === "全部" || item.category === activeCategory);
  const list = document.getElementById("packingList");

  list.innerHTML = items.map((item) => {
    const checked = Boolean(state.packing[item.id]);
    const editing = editingPackingId === item.id;
    const meta = [item.bag, item.note].filter(Boolean).join(" · ");
    const inputId = `packing-${item.id}`;
    const copy = editing
      ? `<div class="check-item__copy"><input class="prep-edit-input" type="text" maxlength="80" value="${escapeHtml(item.item)}" data-packing-edit-input="${escapeHtml(item.id)}" aria-label="编辑物品名称" /><span>${escapeHtml(meta)}</span></div>`
      : `<label class="check-item__copy" for="${escapeHtml(inputId)}"><strong>${escapeHtml(item.item)}${item.qty > 1 ? ` × ${item.qty}` : ""}</strong><span>${escapeHtml(meta)}</span></label>`;
    const actions = editing
      ? `<button class="prep-item-action" type="button" data-save-packing="${escapeHtml(item.id)}" title="保存修改" aria-label="保存修改"><i data-lucide="check"></i></button>
         <button class="prep-item-action" type="button" data-cancel-packing="${escapeHtml(item.id)}" title="取消修改" aria-label="取消修改"><i data-lucide="x"></i></button>`
      : `<button class="prep-item-action" type="button" data-edit-packing="${escapeHtml(item.id)}" title="编辑 ${escapeHtml(item.item)}" aria-label="编辑 ${escapeHtml(item.item)}"><i data-lucide="pencil"></i></button>
         <button class="prep-item-action prep-item-action--delete" type="button" data-delete-packing="${escapeHtml(item.id)}" title="删除 ${escapeHtml(item.item)}" aria-label="删除 ${escapeHtml(item.item)}"><i data-lucide="trash-2"></i></button>`;

    return `<div class="check-item${editing ? " is-editing" : ""}">
      <input id="${inputId}" type="checkbox" data-packing-id="${item.id}" ${checked ? "checked" : ""} />
      <label class="check-control" for="${inputId}"><i data-lucide="check"></i></label>
      ${copy}
      <div class="check-item__side"><span class="check-item__tag">${escapeHtml(item.category)}</span><span class="prep-item-actions">${actions}</span></div>
    </div>`;
  }).join("");

  function commitPackingEdit(id) {
    const input = list.querySelector("[data-packing-edit-input]");
    const value = input?.value.trim();
    if (!value) {
      showToast("物品名称不能为空");
      input?.focus();
      return;
    }
    const custom = state.customPacking.find((item) => item.id === id);
    if (custom) custom.item = value;
    else {
      const original = packingItems.find((item) => item.id === id);
      if (original?.item === value) delete state.packingEdits[id];
      else state.packingEdits[id] = value;
    }
    editingPackingId = null;
    saveState();
    renderPacking();
    showToast("物品已更新");
  }

  list.onchange = (event) => {
    const input = event.target.closest("[data-packing-id]");
    if (!input) return;
    state.packing[input.dataset.packingId] = input.checked;
    saveState();
  };

  list.onclick = (event) => {
    const editButton = event.target.closest("[data-edit-packing]");
    const saveButton = event.target.closest("[data-save-packing]");
    const cancelButton = event.target.closest("[data-cancel-packing]");
    const deleteButton = event.target.closest("[data-delete-packing]");

    if (editButton) {
      editingPackingId = editButton.dataset.editPacking;
      renderPacking();
      list.querySelector("[data-packing-edit-input]")?.focus();
    } else if (saveButton) {
      commitPackingEdit(saveButton.dataset.savePacking);
    } else if (cancelButton) {
      editingPackingId = null;
      renderPacking();
    } else if (deleteButton) {
      const id = deleteButton.dataset.deletePacking;
      const item = items.find((entry) => entry.id === id);
      if (!item || !window.confirm(`删除“${item.item}”？`)) return;
      if (state.customPacking.some((entry) => entry.id === id)) {
        state.customPacking = state.customPacking.filter((entry) => entry.id !== id);
      } else if (!state.deletedPacking.includes(id)) {
        state.deletedPacking.push(id);
      }
      delete state.packing[id];
      delete state.packingEdits[id];
      editingPackingId = null;
      saveState();
      renderPacking();
      showToast("已删除物品");
    }
  };

  list.onkeydown = (event) => {
    if (!event.target.matches("[data-packing-edit-input]")) return;
    if (event.key === "Enter") {
      event.preventDefault();
      commitPackingEdit(event.target.dataset.packingEditInput);
    } else if (event.key === "Escape") {
      editingPackingId = null;
      renderPacking();
    }
  };

  refreshIcons();
  updateProgress();
}

function updateProgress() {
  const items = allPackingItems();
  const tasks = allPreflightTasks();
  const packed = items.filter((item) => state.packing[item.id]).length;
  const taskDone = tasks.filter((task) => state.tasks[task.id]).length;
  const bookingDone = bookings.filter((booking) => state.bookings[booking.id]).length;
  const memoDone = state.memoTodos.filter((item) => item.completed).length;
  const total = items.length + tasks.length + bookings.length + state.memoTodos.length;
  const done = packed + taskDone + bookingDone + memoDone;
  const percent = total ? Math.round((done / total) * 100) : 0;

  document.getElementById("packingProgressText").textContent = `${packed} / ${items.length}`;
  document.getElementById("packingProgressBar").style.width = `${items.length ? (packed / items.length) * 100 : 0}%`;
  document.getElementById("prepareSummary").textContent = `${taskDone + packed} 项已完成`;
  document.getElementById("overallPercent").textContent = `${percent}% 已完成`;
  document.getElementById("overallProgress").style.width = `${percent}%`;

  const next = tasks.find((task) => !state.tasks[task.id]);
  const action = document.querySelector(".next-action");
  if (next) {
    action.querySelector("small").textContent = next.when;
    action.querySelector("strong").textContent = next.task;
  } else {
    action.querySelector("small").textContent = "准备完成";
    action.querySelector("strong").textContent = "所有出发前待办均已完成";
  }
}

function setupNavigation() {
  function openView(name) {
    document.querySelectorAll(".view").forEach((view) => {
      const active = view.dataset.view === name;
      view.hidden = !active;
      view.classList.toggle("is-active", active);
    });
    document.querySelectorAll("[data-nav-view]").forEach((button) => {
      const active = button.dataset.navView === name;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    document.querySelector(".app-shell").classList.toggle("is-inner-view", name !== "overview");
    if (name === "explore") window.requestAnimationFrame(initCityMap);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelector(".bottom-nav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-nav-view]");
    if (button) openView(button.dataset.navView);
  });

  document.querySelectorAll("[data-open-view]").forEach((button) => {
    button.addEventListener("click", () => openView(button.dataset.openView));
  });
}

function setupItineraryTabs() {
  document.querySelector(".itinerary-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-itinerary-pane]");
    if (!button) return;
    const name = button.dataset.itineraryPane;
    document.querySelectorAll("[data-itinerary-pane]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll("[data-itinerary-content]").forEach((pane) => {
      pane.hidden = pane.dataset.itineraryContent !== name;
    });
  });
}

function setupPreparationTabs() {
  document.querySelector("#view-prepare .segmented-control").addEventListener("click", (event) => {
    const button = event.target.closest("[data-prep-pane]");
    if (!button) return;
    const name = button.dataset.prepPane;
    document.querySelectorAll("[data-prep-pane]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll("[data-prep-content]").forEach((pane) => {
      pane.hidden = pane.dataset.prepContent !== name;
    });
  });

  document.getElementById("categoryFilter").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderPacking();
  });

  document.getElementById("addTaskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("newTaskItem");
    const value = input.value.trim();
    if (!value) return;
    state.customTasks.push({ id: `custom-task-${Date.now()}`, category: "自定义", task: value, when: "自行安排" });
    input.value = "";
    editingTaskId = null;
    saveState();
    renderTasks();
    showToast("已添加出发前待办");
  });

  document.getElementById("addPackingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("newPackingItem");
    const value = input.value.trim();
    if (!value) return;
    state.customPacking.push({ id: `custom-${Date.now()}`, item: value });
    input.value = "";
    activeCategory = "自定义";
    editingPackingId = null;
    saveState();
    renderPacking();
    showToast("已添加到行李清单");
  });
}

function setupNotes() {
  document.getElementById("addMemoForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("newMemoItem");
    const value = input.value.trim();
    if (!value) return;
    state.memoTodos.push({ id: `memo-${Date.now()}`, text: value, completed: false });
    input.value = "";
    saveState();
    renderMemoTodos();
    showToast("已添加旅行待办");
  });
}

function setupShare() {
  document.getElementById("shareTrip").addEventListener("click", async () => {
    const payload = { title: document.title, text: "2026 国庆欧洲旅行计划", url: window.location.href };
    try {
      if (navigator.share) await navigator.share(payload);
      else {
        await navigator.clipboard.writeText(window.location.href);
        showToast("链接已复制");
      }
    } catch (error) {
      if (error?.name !== "AbortError") showToast("请从浏览器地址栏复制链接");
    }
  });
}

renderDailyTransport();
updateCountdown();
renderFlights();
renderCitySwitcher();
renderCityDetail();
renderCityExperiences();
renderPracticalInfo();
renderItinerary();
renderBookings();
renderTasks();
renderPacking();
renderMemoTodos();
setupCustomItinerary();
setupNavigation();
setupItineraryTabs();
setupPreparationTabs();
setupNotes();
setupShare();
setupCloudSync();
updateProgress();
refreshIcons();
setupFlightCarousel();
window.setInterval(updateFlightCountdowns, 1000);
window.setInterval(updateCountdown, 60000);
window.setInterval(renderDailyTransport, 60000);
