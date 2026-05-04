/* global React, ReactDOM */
const Icon = ({
  name,
  size = 18,
  stroke = 1.6
}) => {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "bolt":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M13 2 4 14h7l-1 8 9-12h-7l1-8z"
      }));
    case "lock":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "4",
        y: "11",
        width: "16",
        height: "10",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 11V7a4 4 0 0 1 8 0v4"
      }));
    case "sparkle":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
      }));
    case "cloud":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M7 18a5 5 0 1 1 .5-9.97A6 6 0 0 1 19 11a4 4 0 0 1 0 8H7z"
      }));
    case "search":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m20 20-4-4"
      }));
    case "image":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "10",
        r: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m4 18 6-6 8 8"
      }));
    case "tag":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M3 13V4a1 1 0 0 1 1-1h9l8 8-9 9-9-9z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "8",
        cy: "8",
        r: "1.5"
      }));
    case "mic":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "3",
        width: "6",
        height: "12",
        rx: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 11a7 7 0 0 0 14 0M12 18v3"
      }));
    case "doc":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 3v6h6"
      }));
    case "key":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "8",
        cy: "15",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m11 12 9-9M16 7l3 3M14 9l3 3"
      }));
    case "palette":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "7.5",
        cy: "10.5",
        r: "1"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "6.5",
        r: "1"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "16",
        cy: "9",
        r: "1"
      }));
    case "arrow-right":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      }));
    case "download":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v12m-5-5 5 5 5-5M4 21h16"
      }));
    default:
      return null;
  }
};
const Nav = () => /*#__PURE__*/React.createElement("nav", {
  className: "nav"
}, /*#__PURE__*/React.createElement("div", {
  className: "nav-inner"
}, /*#__PURE__*/React.createElement("a", {
  href: "index.html",
  className: "nav-logo"
}, /*#__PURE__*/React.createElement("span", {
  className: "nav-logo-mark"
}), "ClearSky"), /*#__PURE__*/React.createElement("div", {
  className: "nav-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "voicebee.html"
}, "VoiceBee"), /*#__PURE__*/React.createElement("a", {
  href: "jotbee.html",
  style: {
    color: "#fff"
  }
}, "JotBee"), /*#__PURE__*/React.createElement("a", {
  href: "index.html#blog"
}, "Blog"), /*#__PURE__*/React.createElement("a", {
  href: "index.html#about"
}, "\u5173\u4E8E"))));
const SubNav = () => /*#__PURE__*/React.createElement("div", {
  className: "subnav"
}, /*#__PURE__*/React.createElement("div", {
  className: "subnav-inner"
}, /*#__PURE__*/React.createElement("span", {
  className: "subnav-name"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/jotbee-icon.png",
  alt: ""
}), " JotBee"), /*#__PURE__*/React.createElement("div", {
  className: "subnav-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "#features"
}, "\u529F\u80FD"), /*#__PURE__*/React.createElement("a", {
  href: "#privacy"
}, "\u9690\u79C1"), /*#__PURE__*/React.createElement("a", {
  href: "#ai"
}, "AI"), /*#__PURE__*/React.createElement("a", {
  href: "#story"
}, "\u6545\u4E8B"), /*#__PURE__*/React.createElement("a", {
  href: "#download"
}, "\u4E0B\u8F7D"))));
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-dark",
  style: {
    paddingBottom: "40px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner center"
}, /*#__PURE__*/React.createElement("div", {
  className: "product-hero"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/jotbee-icon.png",
  alt: "JotBee",
  className: "product-hero-icon"
}), /*#__PURE__*/React.createElement("h1", null, "JotBee"), /*#__PURE__*/React.createElement("p", {
  className: "product-hero-tag"
}, "\u968F\u624B\u8BB0\u5F55\uFF0C\u917F\u9020\u751F\u6D3B\u3002", /*#__PURE__*/React.createElement("br", null), "\u6253\u5F00\u5C31\u5199\uFF0C\u5173\u6389\u5C31\u8D70\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "cta-buttons"
}, /*#__PURE__*/React.createElement("a", {
  href: "#download",
  className: "btn btn-primary"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "download",
  size: 14
}), "App Store \u4E0B\u8F7D"), /*#__PURE__*/React.createElement("a", {
  href: "#features",
  className: "btn btn-ghost"
}, "\u4E86\u89E3\u66F4\u591A")), /*#__PURE__*/React.createElement("div", {
  className: "product-hero-meta"
}, "v1.1.0 \xB7 iOS 17.0+ \xB7 macOS 14.0+ \xB7 \u5B8C\u5168\u514D\u8D39")), /*#__PURE__*/React.createElement("div", {
  className: "devices-row",
  style: {
    maxWidth: "720px",
    margin: "56px auto 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mac-mock"
}, /*#__PURE__*/React.createElement("div", {
  className: "mac-mock-bar"
}, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
  className: "mac-mock-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-date",
  style: {
    color: "#a89a82"
  }
}, "2026 \xB7 05 \xB7 04 \xB7 MON"), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-title",
  style: {
    color: "#2a241a"
  }
}, "\u5173\u4E8E\u65E9\u6668\u7684\u4E00\u676F\u5496\u5561"), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line medium"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line short"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-emoji",
  style: {
    marginTop: "16px"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "mock-jotbee-tag"
}, "\u65E5\u5E38"), /*#__PURE__*/React.createElement("span", {
  className: "mock-jotbee-tag"
}, "\u5496\u5561")))), /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock"
}, /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock-screen"
}, /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock-line med"
}), /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock-line"
}), /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock-line short"
}), /*#__PURE__*/React.createElement("div", {
  className: "iphone-reflect"
}, /*#__PURE__*/React.createElement("div", {
  className: "iphone-reflect-label"
}, "AI REFLECT"), /*#__PURE__*/React.createElement("div", {
  className: "iphone-reflect-line"
}), /*#__PURE__*/React.createElement("div", {
  className: "iphone-reflect-line short"
})))))));
const FeatureBlock = ({
  eyebrow,
  title,
  desc,
  dark
}) => /*#__PURE__*/React.createElement("section", {
  className: `section ${dark ? "section-dark" : "section-white"}`
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner center"
}, /*#__PURE__*/React.createElement("div", {
  className: "feature-block"
}, eyebrow && /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", {
  className: "subtitle"
}, desc))));
const Stats = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-light",
  style: {
    paddingTop: "60px",
    paddingBottom: "60px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "stats"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "3s"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "\u5B8C\u6210\u4E00\u6761\u8BB0\u5F55")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "iCloud"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "\u7167\u7247\u8DE8\u8BBE\u5907\u540C\u6B65")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "7+"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "AI \u5F15\u64CE\u53EF\u9009")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "\u514D\u8D39"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "\u65E0\u5185\u8D2D\u65E0\u5E7F\u544A")))));
const FeaturesGrid = () => {
  const items = [{
    icon: "mic",
    title: "语音写日记",
    desc: "与 VoiceBee 联动，按住说话松开就变成文字。"
  }, {
    icon: "doc",
    title: "导出自由",
    desc: "PDF、Markdown 导出。数据永远在你手中。"
  }, {
    icon: "search",
    title: "快速检索",
    desc: "全文搜索，按日期、标签筛选。"
  }, {
    icon: "palette",
    title: "主题配色",
    desc: "8 套主题，5 级字号，找到你的舒适区。"
  }, {
    icon: "key",
    title: "用你的 Key",
    desc: "AI 用你自己的 API Key，费用透明。"
  }, {
    icon: "cloud",
    title: "iCloud 同步",
    desc: "照片通过 iCloud 在 iPhone 和 Mac 间自动同步。"
  }, {
    icon: "tag",
    title: "标签管理",
    desc: "用标签整理记忆，按时间或主题回看。"
  }, {
    icon: "image",
    title: "照片记录",
    desc: "随手拍的瞬间，跟文字一起留下来。"
  }, {
    icon: "lock",
    title: "本地存储",
    desc: "日记数据本地存储，不运营服务器。"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    className: "section section-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\u66F4\u591A\u7EC6\u8282"), /*#__PURE__*/React.createElement("h2", null, "\u6BCF\u4E00\u4E2A\u529F\u80FD\uFF0C\u90FD\u4E3A\u65E5\u5E38\u800C\u751F\u3002")), /*#__PURE__*/React.createElement("div", {
    className: "features-grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    className: "feature-card",
    key: it.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-card-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", null, it.desc))))));
};
const Story = () => /*#__PURE__*/React.createElement("section", {
  id: "story",
  className: "section section-dark"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "about-strip"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "\u4E3A\u4EC0\u4E48\u505A JotBee"), /*#__PURE__*/React.createElement("h2", null, "\u627E\u4E0D\u5230\uFF0C\u90A3\u5C31", /*#__PURE__*/React.createElement("br", null), "\u81EA\u5DF1\u9020\u4E00\u4E2A\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "about-strip-aside"
}, /*#__PURE__*/React.createElement("p", null, "\u7528\u4E86\u5F88\u4E45\u7684\u65E5\u8BB0 App \u4E0D\u518D\u7EF4\u62A4\u4E86\uFF0C\u5361\u987F\u5230\u6253\u4E0D\u5F00\u3002\u5728 App Store \u627E\u4E86\u4E00\u5708\uFF0C\u6CA1\u6709\u6EE1\u610F\u7684\u2014\u2014\u592A\u590D\u6742\u7684\u4E0D\u8981\uFF0C\u8981\u6CE8\u518C\u8D26\u53F7\u7684\u4E0D\u8981\uFF0C\u754C\u9762\u4E11\u7684\u4E0D\u8981\u3002"), /*#__PURE__*/React.createElement("p", null, "\u4E00\u5F00\u59CB\u53EB BabyJournal\uFF0C\u56E0\u4E3A\u6700\u521D\u662F\u7ED9\u5B9D\u5B9D\u505A\u6210\u957F\u8BB0\u5F55\u3002\u540E\u6765\u53D1\u73B0\uFF0C\u8BB0\u5F55\u8FD9\u4EF6\u4E8B\u4E0D\u8BE5\u53EA\u5C5E\u4E8E\u7238\u5988\u3002\u6BCF\u4E2A\u4EBA\u90FD\u503C\u5F97\u4E00\u53EA\u5E2E\u4F60\u91C7\u96C6\u751F\u6D3B\u7684\u5C0F\u871C\u8702\u3002"), /*#__PURE__*/React.createElement("p", null, "\u6211\u4E0D\u662F\u7A0B\u5E8F\u5458\u3002\u6211\u5728\u4FDD\u9669\u516C\u53F8\u505A\u5185\u52E4\uFF0C\u4E0D\u662F\u8BA1\u7B97\u673A\u4E13\u4E1A\u51FA\u8EAB\u3002\u4F46\u6211\u5F88\u6E05\u695A\u81EA\u5DF1\u8981\u4EC0\u4E48\u3002AI \u662F\u6211\u7684\u5F00\u53D1\u642D\u6863\u2014\u2014\u6211\u8D1F\u8D23\u5B9A\u4E49\u9700\u6C42\u3001\u628A\u63A7\u4F53\u9A8C\uFF0CAI \u8D1F\u8D23\u5199\u4EE3\u7801\u3002"), /*#__PURE__*/React.createElement("p", {
  style: {
    color: "var(--accent)",
    marginTop: "24px"
  }
}, "\u50CF\u88C5\u4FEE\u623F\u5B50\uFF1A\u6211\u4E0D\u4F1A\u780C\u5899\uFF0C\u4F46\u6211\u975E\u5E38\u6E05\u695A\u6211\u8981\u4EC0\u4E48\u6837\u7684\u623F\u5B50\u3002")))));
const CTA = () => /*#__PURE__*/React.createElement("section", {
  id: "download",
  className: "section section-light",
  style: {
    padding: "100px 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner center"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "\u5F00\u59CB\u8BB0\u5F55"), /*#__PURE__*/React.createElement("h2", {
  className: "headline-section"
}, "\u5B8C\u5168\u514D\u8D39\uFF0C\u4E0B\u8F7D\u5373\u7528\u3002"), /*#__PURE__*/React.createElement("p", {
  className: "subtitle",
  style: {
    margin: "16px auto 0"
  }
}, "\u65E0\u8BD5\u7528\u671F\uFF0C\u65E0\u5185\u8D2D\uFF0C\u65E0\u5E7F\u544A\u3002"), /*#__PURE__*/React.createElement("div", {
  className: "cta-buttons"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://apps.apple.com/app/jotbee/id6761894417",
  className: "btn btn-primary"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "download",
  size: 14
}), "App Store \u4E0B\u8F7D"), /*#__PURE__*/React.createElement("a", {
  href: "voicebee.html",
  className: "btn btn-ghost"
}, "\u770B\u770B VoiceBee"))));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-brand-col"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-brand"
}, "ClearSky"), /*#__PURE__*/React.createElement("p", {
  className: "footer-tagline"
}, "\u72EC\u7ACB\u5DE5\u4F5C\u5BA4\u3002\u4E00\u4EBA + AI\uFF0C\u505A\u81EA\u5DF1\u9700\u8981\u7684\u5DE5\u5177\u3002")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Products"), /*#__PURE__*/React.createElement("a", {
  href: "voicebee.html"
}, "VoiceBee"), /*#__PURE__*/React.createElement("a", {
  href: "jotbee.html"
}, "JotBee")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Resources"), /*#__PURE__*/React.createElement("a", {
  href: "index.html#blog"
}, "Blog"), /*#__PURE__*/React.createElement("a", {
  href: "index.html#about"
}, "\u5173\u4E8E")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("a", {
  href: "privacy.html"
}, "Privacy"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:hi@tangzhihong.com"
}, "Email"))), /*#__PURE__*/React.createElement("div", {
  className: "footer-legal"
}, /*#__PURE__*/React.createElement("span", null, "Copyright \xA9 2026 ClearSky. All rights reserved."), /*#__PURE__*/React.createElement("a", {
  href: "privacy.html"
}, "\u9690\u79C1\u653F\u7B56")));
const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(SubNav, null), /*#__PURE__*/React.createElement("main", {
  id: "main"
}, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(FeatureBlock, {
  eyebrow: "\u5373\u5F00\u5373\u5199",
  title: "\u539F\u751F SwiftUI\uFF0C\u79D2\u5F00\u79D2\u5199\u3002",
  desc: "\u542F\u52A8\u79D2\u5F00\u3002\u6253\u5F00\u5C31\u662F\u7F16\u8F91\u5668\uFF0C3 \u79D2\u5B8C\u6210\u4E00\u6761\u8BB0\u5F55\u3002\u4E0D\u95EE\u4F60\u8981\u4EC0\u4E48\uFF0C\u76F4\u63A5\u8BA9\u4F60\u5199\u3002"
}), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(FeatureBlock, {
  eyebrow: "\u9690\u79C1",
  title: "\u4F60\u7684\u65E5\u8BB0\uFF0C\u53EA\u5C5E\u4E8E\u4F60\u3002",
  desc: "\u65E5\u8BB0\u6570\u636E\u672C\u5730\u5B58\u50A8\uFF0C\u4E0D\u8FD0\u8425\u670D\u52A1\u5668\uFF0C\u6211\u4EEC\u65E0\u6CD5\u63A5\u89E6\u4F60\u7684\u4EFB\u4F55\u6570\u636E\u3002\u7167\u7247\u901A\u8FC7 iCloud \u5728 iPhone \u548C Mac \u4E4B\u95F4\u81EA\u52A8\u540C\u6B65\uFF0C\u5B89\u5168\u7531 Apple \u4FDD\u969C\u3002",
  dark: true
}), /*#__PURE__*/React.createElement(FeatureBlock, {
  eyebrow: "AI Reflect",
  title: "AI \u5E2E\u4F60\u56DE\u5FC6\u3002",
  desc: "\u5199\u5B8C\u65E5\u8BB0\uFF0CAI Reflect \u7ED9\u4F60\u6E29\u6696\u7684\u56DE\u5E94\u3002\u50CF\u4E00\u4E2A\u61C2\u4F60\u7684\u670B\u53CB\uFF0C\u966A\u4F60\u91CD\u65B0\u770B\u89C1\u90A3\u4E9B\u503C\u5F97\u8BB0\u4F4F\u7684\u77AC\u95F4\u3002"
}), /*#__PURE__*/React.createElement(FeaturesGrid, null), /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(CTA, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));