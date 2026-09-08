const itinerary = [
  {
    date: "2026-09-30",
    city: "卢森堡",
    cityEn: "Luxembourg",
    overnight: "卢森堡",
    transport: "14:00 抵达卢森堡机场；乘 29 路巴士前往 Luxembourg Gare。",
    transportIcon: "plane-landing",
    activities: [
      ["14:00", "抵达卢森堡机场", "LUX · 入境与取行李", "Luxembourg Airport"],
      ["15:30", "前往市区", "29 路巴士至 Luxembourg Gare", "Luxembourg Gare"],
      ["16:30", "酒店入住", "Novotel Luxembourg Centre", "Novotel Luxembourg Centre"]
    ]
  },
  {
    date: "2026-10-01",
    city: "卢森堡",
    cityEn: "Luxembourg",
    overnight: "卢森堡",
    transport: "步行与当地公共交通。",
    transportIcon: "footprints",
    activities: [
      ["09:30", "老城区与宪法广场", "从城市核心开始步行", "Place de la Constitution Luxembourg"],
      ["11:00", "大公宫与威廉广场", "外观参观", "Grand Ducal Palace Luxembourg"],
      ["14:00", "博克要塞地下通道", "预留 1.5 小时", "Bock Casemates"],
      ["16:00", "Corniche 与 Grund", "河谷观景步道", "Chemin de la Corniche Luxembourg"]
    ]
  },
  {
    date: "2026-10-02",
    city: "布鲁塞尔",
    cityEn: "Brussels",
    overnight: "布鲁塞尔",
    transport: "上午乘火车从 Luxembourg Gare 前往 Brussels-Midi，约 3 小时 20 分。",
    transportIcon: "train-front",
    activities: [
      ["08:30", "前往布鲁塞尔", "Luxembourg Gare → Brussels-Midi", "Brussels-Midi"],
      ["13:00", "酒店入住", "Motel One Brussels", "Motel One Brussels"],
      ["14:30", "布鲁塞尔大广场", "步行游览城市核心", "Grand Place Brussels"],
      ["16:00", "皇家拱廊与撒尿小童", "傍晚市中心用餐", "Royal Gallery of Saint Hubert"]
    ]
  },
  {
    date: "2026-10-03",
    city: "布鲁塞尔",
    cityEn: "Brussels",
    overnight: "布鲁塞尔",
    transport: "地铁与步行。",
    transportIcon: "tram-front",
    activities: [
      ["09:30", "原子球塔", "上午参观与周边漫步", "Atomium Brussels"],
      ["13:30", "艺术山与皇家广场", "城市景观与建筑", "Mont des Arts"],
      ["15:30", "萨布隆区", "皇家美术博物馆外观", "Sablon Brussels"],
      ["17:00", "自由活动", "购物或休息", "Brussels city centre"]
    ]
  },
  {
    date: "2026-10-04",
    city: "布鲁日",
    cityEn: "Bruges",
    overnight: "布鲁塞尔",
    transport: "从布鲁塞尔乘火车往返布鲁日，单程约 1 小时。",
    transportIcon: "train-front",
    activities: [
      ["08:30", "出发前往布鲁日", "Brussels → Bruges", "Brugge Station"],
      ["10:00", "市集广场与钟楼", "步行游览城堡广场", "Markt Bruges"],
      ["13:30", "贝居安会院与爱之湖", "安静步行区", "Begijnhof Bruges"],
      ["15:30", "运河游船", "视天气与现场运营决定", "Bruges Canal Tours"]
    ]
  },
  {
    date: "2026-10-05",
    city: "根特",
    cityEn: "Ghent",
    overnight: "布鲁塞尔",
    transport: "从布鲁塞尔乘火车往返根特，单程约 35 分钟。",
    transportIcon: "train-front",
    activities: [
      ["08:45", "出发前往根特", "Brussels → Gent-Sint-Pieters", "Gent-Sint-Pieters"],
      ["10:00", "圣巴夫主教座堂", "老城区步行起点", "Saint Bavo's Cathedral Ghent"],
      ["12:00", "Graslei 与 Korenlei", "运河两岸午餐与漫步", "Graslei Ghent"],
      ["14:30", "伯爵城堡", "预留 1.5 小时", "Gravensteen"]
    ]
  },
  {
    date: "2026-10-06",
    city: "巴黎",
    cityEn: "Paris",
    overnight: "巴黎",
    transport: "上午乘 Eurostar 从 Brussels-Midi 前往 Paris Gare du Nord，约 1 小时 25 分。",
    transportIcon: "train-front",
    activities: [
      ["08:30", "乘 Eurostar 前往巴黎", "Brussels-Midi → Gare du Nord", "Gare du Nord"],
      ["11:30", "酒店入住", "ibis Paris Bastille Opera", "ibis Paris Bastille Opera 11eme"],
      ["14:00", "玛黑区与孚日广场", "街区漫步", "Place des Vosges"],
      ["17:00", "巴黎圣母院与塞纳河", "傍晚可参加游船", "Notre-Dame de Paris"]
    ]
  },
  {
    date: "2026-10-07",
    city: "巴黎",
    cityEn: "Paris",
    overnight: "巴黎",
    transport: "地铁与步行。",
    transportIcon: "train-front-tunnel",
    activities: [
      ["09:00", "卢浮宫", "建议提前预约时段", "Louvre Museum"],
      ["14:00", "杜乐丽花园与协和广场", "向西步行", "Tuileries Garden"],
      ["16:00", "香榭丽舍大街", "自由活动", "Champs-Elysees"],
      ["19:00", "特罗卡德罗与埃菲尔铁塔", "欣赏夜景", "Trocadero Eiffel Tower"]
    ]
  },
  {
    date: "2026-10-08",
    city: "巴黎 → 卢森堡",
    cityEn: "Paris to Luxembourg",
    overnight: "卢森堡",
    transport: "下午从 Paris Est 乘直达火车返回 Luxembourg Gare，约 2 小时 15 分。",
    transportIcon: "train-front",
    activities: [
      ["09:00", "蒙马特与圣心大教堂", "上午轻松游览", "Sacre-Coeur Paris"],
      ["13:30", "前往巴黎东站", "预留进站时间", "Gare de l'Est"],
      ["14:30", "返回卢森堡", "直达火车约 2 小时 15 分", "Luxembourg Gare"],
      ["17:30", "酒店入住与休息", "Novotel Luxembourg Centre", "Novotel Luxembourg Centre"]
    ]
  },
  {
    date: "2026-10-09",
    city: "卢森堡 → 香港",
    cityEn: "Luxembourg to Hong Kong",
    overnight: "返程",
    transport: "乘公共交通前往卢森堡机场，经转机返回香港。",
    transportIcon: "plane-takeoff",
    activities: [
      ["待定", "酒店退房", "核对证件与登机牌", "Novotel Luxembourg Centre"],
      ["待定", "前往卢森堡机场", "预留充足值机时间", "Luxembourg Airport"],
      ["待定", "搭乘返程航班", "经转机返回香港", "Luxembourg Airport"]
    ]
  }
];

const bookings = [
  {
    id: "lux-hotel",
    city: "卢森堡",
    hotel: "Novotel Luxembourg Centre",
    stay: "9/30–10/2，10/8–10/9",
    nights: "3 晚",
    address: "35 Rue du Laboratoire, L-1911 Luxembourg City, Luxembourg"
  },
  {
    id: "bru-hotel",
    city: "布鲁塞尔",
    hotel: "Motel One Brussels",
    stay: "10/2–10/6",
    nights: "4 晚",
    address: "Rue Royale 120, 1000 Brussels, Belgium"
  },
  {
    id: "par-hotel",
    city: "巴黎",
    hotel: "ibis Paris Bastille Opera 11eme",
    stay: "10/6–10/8",
    nights: "2 晚",
    address: "15 Rue Breguet, 75011 Paris, France"
  }
];

const preflightTasks = [
  ["passport", "证件与签证", "核对护照、签证、保险和所有复印件", "出发前 7 天"],
  ["reservations", "交通与住宿", "核对航班、酒店、火车和 Eurostar 订单；保存离线版本", "出发前 7 天"],
  ["payment", "支付", "确认信用卡境外支付功能；准备小额欧元现金", "出发前 5 天"],
  ["network", "网络", "安装 eSIM 或开通漫游；下载离线地图", "出发前 3 天"],
  ["weather", "行李", "查询卢森堡、布鲁塞尔和巴黎天气，调整衣物", "出发前 3 天"],
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
  ["train-docs", "证件与预订", "欧洲火车票 / Eurostar 订单", 1, "手机/随身小包", "保存二维码及订单号"],
  ["insurance", "证件与预订", "申根旅行保险保单", 1, "手机/随身小包", "纸质 + 电子版"],
  ["itinerary-contacts", "证件与预订", "行程单及紧急联系人", 1, "随身小包", "含酒店地址和电话"],
  ["id-photos", "证件与预订", "证件照", 2, "随身小包", "备用"],
  ["payment-cards", "支付与财物", "可境外使用的信用卡 / 借记卡", 2, "随身小包", "两张卡分开放置"],
  ["euro-cash", "支付与财物", "欧元现金", 1, "随身小包", "建议小额现金"],
  ["backup-card", "支付与财物", "备用银行卡", 1, "行李内层", "与主卡分开"],
  ["wallet", "支付与财物", "钱包及零钱包", 1, "随身小包", "避免放后裤袋"],
  ["luggage-tag", "支付与财物", "行李锁及行李牌", 1, "托运行李", "写英文姓名和联系方式"],
  ["phone", "电子与网络", "手机", 1, "随身小包", "出发前充满电"],
  ["phone-charger", "电子与网络", "手机充电线及充电头", 1, "随身小包", "建议快充"],
  ["eu-adapter", "电子与网络", "欧标转换插头（Type C/E/F）", 1, "随身小包", "三地均适用"],
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
  ["underwear", "衣物与鞋履", "内衣裤", 9, "行李箱", "按 9 晚准备"],
  ["socks", "衣物与鞋履", "袜子", 9, "行李箱", "含较厚款 1–2 双"],
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

const STORAGE_KEY = "europe-trip-2026-state-v1";
const defaultState = {
  tasks: {},
  packing: {},
  bookings: {},
  notes: "",
  customPacking: []
};

let state = loadState();
let activeCategory = "全部";
let toastTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateProgress();
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

function updateCountdown() {
  const start = new Date("2026-09-30T00:00:00+08:00");
  const end = new Date("2026-10-10T00:00:00+08:00");
  const now = new Date();
  const value = document.getElementById("countdownValue");
  const label = document.getElementById("countdownLabel");

  if (now < start) {
    value.textContent = Math.max(0, Math.ceil((start - now) / 86400000));
    label.textContent = "天后出发";
  } else if (now < end) {
    value.textContent = Math.min(10, Math.floor((now - start) / 86400000) + 1);
    label.textContent = "旅程第几天";
  } else {
    value.textContent = "✓";
    label.textContent = "旅程完成";
  }
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
    const activities = day.activities.map(([time, title, note, query]) => `
      <div class="activity">
        <time>${escapeHtml(time)}</time>
        <div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(note)}</small></div>
        <a href="${mapsUrl(query)}" target="_blank" rel="noreferrer" title="在地图中打开 ${escapeHtml(title)}" aria-label="在地图中打开 ${escapeHtml(title)}"><i data-lucide="map-pin"></i></a>
      </div>`).join("");

    return `<article class="day-plan" id="day-${index}" data-day-index="${index}">
      <div class="day-plan__head">
        <div><span class="city-label">DAY ${index + 1} · ${escapeHtml(day.cityEn.toUpperCase())}</span><h3>${escapeHtml(day.city)}</h3></div>
        <time datetime="${day.date}">${dateText}</time>
      </div>
      <p class="day-plan__transport"><i data-lucide="${day.transportIcon}"></i><span>${escapeHtml(day.transport)}</span></p>
      <div class="activity-list">${activities}</div>
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

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = preflightTasks.map((task) => {
    const checked = Boolean(state.tasks[task.id]);
    return `<label class="check-item">
      <input type="checkbox" data-task-id="${task.id}" ${checked ? "checked" : ""} />
      <span class="check-control"><i data-lucide="check"></i></span>
      <span class="check-item__copy"><strong>${escapeHtml(task.task)}</strong><span>${escapeHtml(task.category)}</span></span>
      <span class="check-item__tag">${escapeHtml(task.when)}</span>
    </label>`;
  }).join("");

  list.addEventListener("change", (event) => {
    const input = event.target.closest("[data-task-id]");
    if (!input) return;
    state.tasks[input.dataset.taskId] = input.checked;
    saveState();
  });
}

function allPackingItems() {
  return [
    ...packingItems,
    ...state.customPacking.map((item) => ({ ...item, category: "自定义", qty: 1, bag: "待安排", note: "" }))
  ];
}

function renderCategoryFilter() {
  const categories = ["全部", ...new Set(allPackingItems().map((item) => item.category))];
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
    const isCustom = item.category === "自定义";
    const meta = [item.bag, item.note].filter(Boolean).join(" · ");
    const inputId = `packing-${item.id}`;
    return `<div class="check-item">
      <input id="${inputId}" type="checkbox" data-packing-id="${item.id}" ${checked ? "checked" : ""} />
      <label class="check-control" for="${inputId}"><i data-lucide="check"></i></label>
      <label class="check-item__copy" for="${inputId}"><strong>${escapeHtml(item.item)}${item.qty > 1 ? ` × ${item.qty}` : ""}</strong><span>${escapeHtml(meta)}</span></label>
      ${isCustom ? `<button class="delete-item" type="button" data-delete-packing="${item.id}" title="删除 ${escapeHtml(item.item)}" aria-label="删除 ${escapeHtml(item.item)}"><i data-lucide="trash-2"></i></button>` : `<span class="check-item__tag">${escapeHtml(item.category)}</span>`}
    </div>`;
  }).join("");

  list.onchange = (event) => {
    const input = event.target.closest("[data-packing-id]");
    if (!input) return;
    state.packing[input.dataset.packingId] = input.checked;
    saveState();
  };

  list.onclick = (event) => {
    const button = event.target.closest("[data-delete-packing]");
    if (!button) return;
    const id = button.dataset.deletePacking;
    state.customPacking = state.customPacking.filter((item) => item.id !== id);
    delete state.packing[id];
    if (activeCategory === "自定义" && state.customPacking.length === 0) activeCategory = "全部";
    saveState();
    renderPacking();
    refreshIcons();
  };

  refreshIcons();
  updateProgress();
}

function updateProgress() {
  const items = allPackingItems();
  const packed = items.filter((item) => state.packing[item.id]).length;
  const taskDone = preflightTasks.filter((task) => state.tasks[task.id]).length;
  const bookingDone = bookings.filter((booking) => state.bookings[booking.id]).length;
  const total = items.length + preflightTasks.length + bookings.length;
  const done = packed + taskDone + bookingDone;
  const percent = total ? Math.round((done / total) * 100) : 0;

  document.getElementById("packingProgressText").textContent = `${packed} / ${items.length}`;
  document.getElementById("packingProgressBar").style.width = `${items.length ? (packed / items.length) * 100 : 0}%`;
  document.getElementById("prepareSummary").textContent = `${taskDone + packed} 项已完成`;
  document.getElementById("overallPercent").textContent = `${percent}% 已完成`;
  document.getElementById("overallProgress").style.width = `${percent}%`;

  const next = preflightTasks.find((task) => !state.tasks[task.id]);
  if (next) {
    const action = document.querySelector(".next-action");
    action.querySelector("small").textContent = next.when;
    action.querySelector("strong").textContent = next.task;
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

function setupPreparationTabs() {
  document.querySelector(".segmented-control").addEventListener("click", (event) => {
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

  document.getElementById("addPackingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("newPackingItem");
    const value = input.value.trim();
    if (!value) return;
    state.customPacking.push({ id: `custom-${Date.now()}`, item: value });
    input.value = "";
    activeCategory = "自定义";
    saveState();
    renderPacking();
    showToast("已添加到行李清单");
  });
}

function setupNotes() {
  const notes = document.getElementById("tripNotes");
  const saved = document.getElementById("notesSaved");
  let timer;
  notes.value = state.notes || "";
  if (state.notes) saved.textContent = "已从本机载入";

  notes.addEventListener("input", () => {
    saved.textContent = "保存中…";
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      state.notes = notes.value;
      saveState();
      saved.textContent = `已保存 ${new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit" }).format(new Date())}`;
    }, 350);
  });

  document.getElementById("clearNotes").addEventListener("click", () => {
    if (!notes.value || !window.confirm("确定清空旅行备忘吗？")) return;
    notes.value = "";
    state.notes = "";
    saveState();
    saved.textContent = "已清空";
  });
}

function setupShare() {
  document.getElementById("shareTrip").addEventListener("click", async () => {
    const payload = { title: document.title, text: "2026 欧洲旅行计划", url: window.location.href };
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

updateCountdown();
renderItinerary();
renderBookings();
renderTasks();
renderPacking();
setupNavigation();
setupPreparationTabs();
setupNotes();
setupShare();
updateProgress();
refreshIcons();
