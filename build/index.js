var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toESM(require("react-dom/server"));
var import_remix = __toESM(require_remix());
var import_styled_components = require("styled-components");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components.ServerStyleSheet();
  let markup = import_server.default.renderToString(sheet.collectStyles(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/index.css
var app_default = "/build/_assets/index-R6MKYZV7.css";

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\root.tsx
var meta = () => {
  return { title: "SEND FREIGHT" };
};
var links = () => {
  return [
    { rel: "stylesheet", href: app_default },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  meta: () => meta2
});
init_react();
var import_react15 = __toESM(require("react"));
var import_styled_components18 = __toESM(require("styled-components"));

// app/components/MainContent.tsx
init_react();
var import_react8 = __toESM(require("react"));
var import_styled_components11 = __toESM(require("styled-components"));

// app/styles/ColorStyles.tsx
init_react();
var SendTheme = {
  smokeWhite: "#E9ECF1",
  offWhite: "#F2F4F7",
  white: "#fff",
  black: "#000",
  snowWhite: "#F9FAFC",
  stroke: "#81868C",
  gray: "#78797A",
  dark: "#303030",
  blue: "#0747A6",
  border: "#e4e6ea",
  catColor: "#737a91",
  tableStroke: "#f5f5f5",
  catBG: "rgba(233, 236, 241, 0.6)",
  orange: "#F7C244",
  green: "#5CC685"
};

// app/components/maincontent/Filter.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_styled_components5 = __toESM(require("styled-components"));

// app/utils/TableData.tsx
init_react();
var tableData = [
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  }
];

// app/components/maincontent/Categories.tsx
init_react();
var import_react = __toESM(require("react"));
var import_styled_components3 = __toESM(require("styled-components"));

// app/styles/TextStyles.tsx
init_react();
var import_styled_components2 = __toESM(require("styled-components"));
var Header1 = import_styled_components2.default.h1`
  font-family: "Inter";

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
var Header2 = import_styled_components2.default.h2`
  font-family: "Inter";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
`;
var SidebarText = import_styled_components2.default.h3`
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
`;
var CaptionLarge = import_styled_components2.default.h6`
  font-family: "Inter";

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;
var CaptionSmall = import_styled_components2.default.h6`
  font-family: "Inter";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
`;

// app/components/maincontent/Categories.tsx
var Categories = (props) => {
  const { onItemSelect, items, selectedItem, data } = props;
  return /* @__PURE__ */ import_react.default.createElement(Body, null, /* @__PURE__ */ import_react.default.createElement(Cover, null, data && data.map((data2, index) => /* @__PURE__ */ import_react.default.createElement(CategoryName, {
    key: index,
    onClick: () => onItemSelect(data2.name)
  }, /* @__PURE__ */ import_react.default.createElement(CategoryCover, null, /* @__PURE__ */ import_react.default.createElement(CategoryText, null, data2.name), /* @__PURE__ */ import_react.default.createElement(CategoryCount, null, data2.count)), selectedItem === data2.name && /* @__PURE__ */ import_react.default.createElement(ActivePane, null)))));
};
var Body = import_styled_components3.default.div`
  width: 100%;
  height: 20px;
  max-width: 400px;
`;
var Cover = import_styled_components3.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .active {
    color: ${SendTheme.blue};
  }
`;
var CategoryName = import_styled_components3.default.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px 0 0;
  cursor: pointer;
`;
var CategoryCover = import_styled_components3.default.div`
  display: flex;
  flex-direction: row;
`;
var CategoryText = (0, import_styled_components3.default)(SidebarText)`
  margin: 0 8px 0 0;
  color: ${SendTheme.stroke};
`;
var CategoryCount = import_styled_components3.default.span`
  font-family: "Inter";
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 26px;
  border-radius: 8px;
  padding: 4px;
  background: ${SendTheme.catBG};
  color: ${SendTheme.catColor};
`;
var ActivePane = import_styled_components3.default.span`
  height: 3px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${SendTheme.blue};
  margin: 8px 0 0 0;
`;
var Categories_default = Categories;

// app/components/maincontent/Pagination.tsx
init_react();
var import_react2 = __toESM(require("react"));
var import_styled_components4 = __toESM(require("styled-components"));
var Pagination = (props) => {
  const { postPerPage, totalPosts, first, last, paginate, currentNumber } = props;
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return /* @__PURE__ */ import_react2.default.createElement(Body2, null, /* @__PURE__ */ import_react2.default.createElement(Cover2, null, /* @__PURE__ */ import_react2.default.createElement(PageText, null, "Showing ", first + 1, " - ", last, " of ", totalPosts, " results"), /* @__PURE__ */ import_react2.default.createElement(Counter, null, pageNumbers.map((number) => /* @__PURE__ */ import_react2.default.createElement(CountNumber, {
    className: `${currentNumber === number && "active"}`,
    onClick: () => paginate(number),
    key: number
  }, number)))));
};
var Body2 = import_styled_components4.default.div`
  display: flex;
  flex-direction: row;
`;
var Cover2 = import_styled_components4.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
var PageText = (0, import_styled_components4.default)(CaptionLarge)`
  color: ${SendTheme.stroke};
`;
var Counter = import_styled_components4.default.div`
  display: flex;
  flex-direction: row;

  .active {
    color: ${SendTheme.dark};
  }
`;
var CountNumber = (0, import_styled_components4.default)(SidebarText)`
  color: ${SendTheme.dark};
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${SendTheme.gray};
`;
var Pagination_default = Pagination;

// app/components/maincontent/Filter.tsx
var Filter = (props) => {
  const {
    paginate,
    postPerPage,
    totalPosts,
    onItemSelect,
    selectedItem,
    first,
    last,
    currentNumber
  } = props;
  const data = [
    { name: "All", count: tableData.length },
    {
      name: "Pending",
      count: tableData.filter((data2) => data2.status === "pending").length
    },
    {
      name: "Ready",
      count: tableData.filter((data2) => data2.status === "ready").length
    },
    {
      name: "Booked",
      count: tableData.filter((data2) => data2.status === "booked").length
    }
  ];
  return /* @__PURE__ */ import_react3.default.createElement(Body3, null, /* @__PURE__ */ import_react3.default.createElement(Cover3, null, /* @__PURE__ */ import_react3.default.createElement(Categories_default, {
    data,
    onItemSelect,
    selectedItem
  }), /* @__PURE__ */ import_react3.default.createElement(Pagination_default, {
    first,
    last,
    paginate,
    totalPosts,
    postPerPage,
    currentNumber
  })), /* @__PURE__ */ import_react3.default.createElement(FilterLine, null));
};
var Body3 = import_styled_components5.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
var Cover3 = import_styled_components5.default.div`
  height: 46px;
  max-width: 1206px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 24px auto;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;
var FilterLine = import_styled_components5.default.span`
  height: 1px;
  width: 100%;

  background: ${SendTheme.border};
`;
var Filter_default = Filter;

// app/components/maincontent/Header.tsx
init_react();
var import_react4 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));

// app/styles/ButtonStyles.tsx
init_react();
var import_styled_components6 = __toESM(require("styled-components"));
var MainButton = import_styled_components6.default.button`
  height: 46px;
  max-width: 119px;
  width: 100%;
  border-radius: 4px;
  padding: 12px 14px;
  border: none;
  cursor: pointer;
  color: ${SendTheme.white};
  background: ${SendTheme.blue};
  font-family: "Inter";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0em;
  text-align: center;
`;

// app/components/maincontent/Header.tsx
var Header = () => {
  return /* @__PURE__ */ import_react4.default.createElement(Body4, null, /* @__PURE__ */ import_react4.default.createElement(Cover4, null, /* @__PURE__ */ import_react4.default.createElement(HeaderTextWrap, null, /* @__PURE__ */ import_react4.default.createElement(HeaderText, null, "Quotes")), /* @__PURE__ */ import_react4.default.createElement(HeaderButtonWrap, null, /* @__PURE__ */ import_react4.default.createElement(HeaderButton, null, "Create New"))));
};
var Body4 = import_styled_components7.default.div`
  width: 100%;
  padding: 0px 40px;
`;
var Cover4 = import_styled_components7.default.div`
  height: 46px;
  max-width: 1206px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 24px auto;
  align-items: center;
  justify-content: space-between;
`;
var HeaderTextWrap = (0, import_styled_components7.default)(Header1)`
  color: ${SendTheme.dark};
`;
var HeaderText = import_styled_components7.default.div``;
var HeaderButtonWrap = import_styled_components7.default.div``;
var HeaderButton = (0, import_styled_components7.default)(MainButton)``;
var Header_default = Header;

// app/components/maincontent/Table.tsx
init_react();
var import_react7 = __toESM(require("react"));
var import_styled_components10 = __toESM(require("styled-components"));

// app/components/Skeleton.tsx
init_react();
var import_react5 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));
var Skeleton = () => {
  return /* @__PURE__ */ import_react5.default.createElement(Body5, null, /* @__PURE__ */ import_react5.default.createElement(Shimmer, null, /* @__PURE__ */ import_react5.default.createElement(ShimmerHalf, null)));
};
var Body5 = import_styled_components8.default.div`
  height: 60px;
  width: 100%;
  max-width: 1500px;
  background: #f2f2f2;
  margin: 8px 0;
  padding: 8px 40px;
  overflow: hidden;
  position: relative;
`;
var animationLoading = import_styled_components8.keyframes`
0%{
transform: translateX(-150%);
}

50%{
    transform: translateX(-60%);
}
100%{
    transform: translateX(150%);
}
`;
var Shimmer = import_styled_components8.default.div`
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  position: absolute;
  animation: ${animationLoading} 1.5s infinite;
`;
var ShimmerHalf = import_styled_components8.default.div`
  width: 50%;
  height: 100%;
  transform: skewX(-20deg);
  background: rgba(255, 255, 255, 0.8);
`;
var Image = import_styled_components8.default.div`
  height: 180px;
  width: 100%;
  margin: 16px 0;
  background: #ddd;
`;
var Text = import_styled_components8.default.div`
  height: 30px;
  margin: 8px 0;
  width: 100%;
  background: #ddd;
`;
var SmallText = import_styled_components8.default.div`
  height: 10px;
  width: 50%;
  margin: 8px 0;
  background: #ddd;
`;
var Skeleton_default = Skeleton;

// app/components/maincontent/TableContent.tsx
init_react();
var import_react6 = __toESM(require("react"));
var import_styled_components9 = __toESM(require("styled-components"));
var TableContent = (props) => {
  const { name, category, fromName, fromDate, toName, toDate, amount, status } = props;
  return /* @__PURE__ */ import_react6.default.createElement(Body6, null, /* @__PURE__ */ import_react6.default.createElement(Import, null, /* @__PURE__ */ import_react6.default.createElement(NameRow, null, /* @__PURE__ */ import_react6.default.createElement(Title, null, /* @__PURE__ */ import_react6.default.createElement(Icon, null, /* @__PURE__ */ import_react6.default.createElement("svg", {
    width: "36",
    height: "32",
    viewBox: "0 0 36 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M7.89806 21.6096C8.01381 21.8713 8.24041 22.081 8.52799 22.1925C8.81558 22.3039 9.14059 22.308 9.43155 22.2039C9.7225 22.0997 9.95555 21.8959 10.0794 21.6372C10.2033 21.3784 10.2079 21.086 10.0921 20.8243L8.77097 17.8315L16.6036 16.2715V21.3124C16.6036 21.5939 16.7278 21.8638 16.9491 22.0629C17.1703 22.2619 17.4703 22.3737 17.7832 22.3737C18.096 22.3737 18.396 22.2619 18.6173 22.0629C18.8385 21.8638 18.9628 21.5939 18.9628 21.3124V16.2715L26.7953 17.8315L25.4742 20.8243C25.4167 20.9539 25.3882 21.0924 25.3903 21.2319C25.3925 21.3714 25.4251 21.5092 25.4865 21.6373C25.5478 21.7655 25.6367 21.8815 25.7479 21.9787C25.8592 22.0759 25.9906 22.1524 26.1348 22.2039C26.2737 22.2533 26.4218 22.2785 26.5712 22.2782C26.8075 22.2784 27.0384 22.2148 27.2339 22.0955C27.4295 21.9763 27.5808 21.807 27.6683 21.6096L29.4966 17.4601C29.5594 17.3166 29.5866 17.1625 29.5765 17.0085C29.5663 16.8545 29.5189 16.7044 29.4377 16.5686C29.3588 16.4333 29.2485 16.3149 29.1141 16.2215C28.9798 16.1281 28.8246 16.0619 28.6591 16.0274L24.8608 15.2739V10.6999C24.8608 10.4184 24.7365 10.1485 24.5153 9.94947C24.2941 9.75044 23.994 9.63863 23.6812 9.63863H21.322V6.45487C21.322 6.17341 21.1977 5.90347 20.9765 5.70445C20.7553 5.50543 20.4552 5.39362 20.1424 5.39362H15.4239C15.1111 5.39362 14.8111 5.50543 14.5898 5.70445C14.3686 5.90347 14.2443 6.17341 14.2443 6.45487V9.63863H11.8851C11.5723 9.63863 11.2722 9.75044 11.051 9.94947C10.8298 10.1485 10.7055 10.4184 10.7055 10.6999V15.2739L6.90719 16.0062C6.74176 16.0406 6.58657 16.1069 6.4522 16.2003C6.31784 16.2937 6.20747 16.4121 6.12865 16.5474C6.04741 16.6832 6.00005 16.8333 5.98986 16.9873C5.97967 17.1412 6.00691 17.2953 6.06967 17.4389L7.89806 21.6096ZM16.6036 7.51612H18.9628V9.63863H16.6036V7.51612ZM13.0647 11.7611H22.5016V14.7963L18.0427 13.8836H17.5236L13.0647 14.7963V11.7611ZM28.0575 23.7321C27.6436 23.8462 27.2473 24.0066 26.8779 24.2097C26.5021 24.4074 26.0747 24.5116 25.6393 24.5116C25.204 24.5116 24.7765 24.4074 24.4008 24.2097C23.5836 23.7949 22.6613 23.577 21.723 23.577C20.7848 23.577 19.8625 23.7949 19.0453 24.2097C18.6644 24.4051 18.2335 24.5078 17.795 24.5078C17.3564 24.5078 16.9255 24.4051 16.5446 24.2097C15.7267 23.7969 14.8046 23.5801 13.8669 23.5801C12.9291 23.5801 12.007 23.7969 11.1892 24.2097C10.8134 24.4074 10.3859 24.5116 9.95057 24.5116C9.51525 24.5116 9.08777 24.4074 8.71199 24.2097C8.34257 24.0066 7.94627 23.8462 7.53238 23.7321C7.37542 23.6819 7.20843 23.6622 7.04239 23.6742C6.87634 23.6862 6.71502 23.7298 6.56904 23.802C6.42305 23.8742 6.29572 23.9734 6.19541 24.093C6.09511 24.2127 6.02411 24.3501 5.9871 24.4962C5.89903 24.765 5.93271 25.0542 6.08077 25.3007C6.22884 25.5473 6.47927 25.7311 6.77743 25.8121C7.01496 25.87 7.24158 25.9595 7.44981 26.0775C8.16548 26.4553 8.97925 26.6566 9.80902 26.6612C10.6708 26.6613 11.5174 26.4563 12.2626 26.0668C12.725 25.8374 13.2444 25.717 13.7725 25.717C14.3006 25.717 14.82 25.8374 15.2824 26.0668C16.0224 26.4475 16.86 26.6478 17.7124 26.6478C18.5648 26.6478 19.4024 26.4475 20.1424 26.0668C20.6047 25.8374 21.1242 25.717 21.6523 25.717C22.1803 25.717 22.6998 25.8374 23.1622 26.0668C23.8933 26.4594 24.7289 26.6667 25.5804 26.6667C26.4318 26.6667 27.2674 26.4594 27.9985 26.0668C28.2068 25.9489 28.4334 25.8594 28.6709 25.8015C28.8279 25.773 28.9768 25.7159 29.1085 25.6339C29.2401 25.5519 29.3519 25.4466 29.4369 25.3245C29.5219 25.2023 29.5783 25.0659 29.6028 24.9235C29.6273 24.7811 29.6192 24.6357 29.5792 24.4962C29.5417 24.3526 29.4714 24.2176 29.3726 24.0998C29.2739 23.982 29.1489 23.884 29.0058 23.8121C28.8626 23.7402 28.7043 23.696 28.541 23.6822C28.3777 23.6684 28.2131 23.6854 28.0575 23.7321Z",
    fill: "#81868C"
  }))), /* @__PURE__ */ import_react6.default.createElement(Name, null, name), /* @__PURE__ */ import_react6.default.createElement("svg", {
    width: "5",
    height: "4",
    viewBox: "0 0 5 4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react6.default.createElement("ellipse", {
    cx: "2.72072",
    cy: "2",
    rx: "2.22304",
    ry: "2",
    fill: "#303030"
  })), /* @__PURE__ */ import_react6.default.createElement(Cat, null, category)), /* @__PURE__ */ import_react6.default.createElement(ImportTag, null, "IMPORT")), /* @__PURE__ */ import_react6.default.createElement(LocationRow, null, /* @__PURE__ */ import_react6.default.createElement(FromLocation, null, /* @__PURE__ */ import_react6.default.createElement(FromText, null, fromName), /* @__PURE__ */ import_react6.default.createElement(FromDate, null, fromDate)), /* @__PURE__ */ import_react6.default.createElement("svg", {
    width: "17",
    height: "8",
    viewBox: "0 0 17 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M15.9148 4.35355C16.1101 4.15829 16.1101 3.84171 15.9148 3.64645L12.7329 0.46447C12.5376 0.269208 12.221 0.269208 12.0258 0.46447C11.8305 0.659732 11.8305 0.976315 12.0258 1.17157L14.8542 4L12.0258 6.82843C11.8305 7.02369 11.8305 7.34027 12.0258 7.53553C12.221 7.7308 12.5376 7.7308 12.7329 7.53553L15.9148 4.35355ZM0 4.5H15.5613V3.5H0V4.5Z",
    fill: "black"
  })), /* @__PURE__ */ import_react6.default.createElement(FromLocation, null, /* @__PURE__ */ import_react6.default.createElement(FromText, null, toName), /* @__PURE__ */ import_react6.default.createElement(FromDate, null, toDate))), /* @__PURE__ */ import_react6.default.createElement(AmountRow, null, /* @__PURE__ */ import_react6.default.createElement(AmountText, null, "\u20A6", Number(parseFloat(`${amount}`).toFixed(3)).toLocaleString())), /* @__PURE__ */ import_react6.default.createElement(StatusRow, null, status === "pending" && /* @__PURE__ */ import_react6.default.createElement(StatusText, {
    className: "pending"
  }, status), " ", status === "booked" && /* @__PURE__ */ import_react6.default.createElement(StatusText, {
    className: "booked"
  }, status), " ", status === "ready" && /* @__PURE__ */ import_react6.default.createElement(StatusText, {
    className: "ready"
  }, status))), /* @__PURE__ */ import_react6.default.createElement(TableLine, null));
};
var Body6 = import_styled_components9.default.div`
  width: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-direction: column;

  :hover {
    background: ${SendTheme.snowWhite};
  }
`;
var Import = import_styled_components9.default.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  padding: 8px 40px;
  display: grid;
  grid-template-columns: 2fr 3fr 1fr 0.5fr;
  gap: 16px;
  grid-gap: 16px;
`;
var TableLine = import_styled_components9.default.span`
  width: 100%;
  max-width: 1500px;
  height: 1px;
  background: ${SendTheme.tableStroke};
`;
var NameRow = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
var ImportTag = (0, import_styled_components9.default)(CaptionSmall)`
  height: 20px;
  width: 63px;
  margin: 8px 0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${SendTheme.stroke};
  border: 1px solid ${SendTheme.stroke};
  cursor: pointer;
`;
var Title = import_styled_components9.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
var Icon = import_styled_components9.default.div`
  height: 32px;
  width: 35px;

  border-radius: 0px;
`;
var Name = (0, import_styled_components9.default)(Header2)`
  color: ${SendTheme.blue};
`;
var Cat = (0, import_styled_components9.default)(SidebarText)`
  color: ${SendTheme.dark};
`;
var LocationRow = import_styled_components9.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
var FromLocation = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
`;
var FromText = (0, import_styled_components9.default)(Header2)`
  color: ${SendTheme.dark};
`;
var FromDate = (0, import_styled_components9.default)(SidebarText)`
  color: ${SendTheme.stroke};
  margin: 8px 0;
`;
var AmountRow = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var AmountText = (0, import_styled_components9.default)(Header2)`
  color: ${SendTheme.dark};
`;
var StatusRow = import_styled_components9.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pending {
    color: ${SendTheme.orange};
  }
  .ready {
    color: ${SendTheme.green};
  }
  .booked {
    color: ${SendTheme.gray};
  }
`;
var StatusText = (0, import_styled_components9.default)(SidebarText)`
  text-transform: capitalize;
`;
var TableContent_default = TableContent;

// app/components/maincontent/Table.tsx
var Table = (props) => {
  const { posts, loading } = props;
  return /* @__PURE__ */ import_react7.default.createElement(Body7, null, /* @__PURE__ */ import_react7.default.createElement(Cover5, null, /* @__PURE__ */ import_react7.default.createElement(TableRow, null, loading ? /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(SkeletonCover, null, loading && [1, 2, 3, 4, 5, 6].map((data, index) => /* @__PURE__ */ import_react7.default.createElement(Skeleton_default, {
    key: index
  })))) : /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, posts.length > 0 ? posts.map((post) => /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(TableContent_default, {
    name: post.title,
    category: post.category,
    fromName: post.fromName,
    fromDate: post.fromDate,
    toName: post.toName,
    toDate: post.toDate,
    amount: post.amount,
    status: post.status
  }))) : /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, "No item in selected status")))));
};
var Body7 = import_styled_components10.default.div`
  width: 100%;
`;
var Cover5 = import_styled_components10.default.div`
  max-width: 1206px;
  width: 100%;
  margin: 24px auto;
`;
var TableRow = import_styled_components10.default.div`
  display: flex;
  flex-direction: column;
`;
var SkeletonCover = import_styled_components10.default.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
`;
var Table_default = Table;

// app/components/MainContent.tsx
var MainContent = (props) => {
  const {
    paginate,
    postPerPage,
    totalPosts,
    posts,
    onItemSelect,
    selectedItem,
    first,
    last,
    loading,
    currentNumber
  } = props;
  return /* @__PURE__ */ import_react8.default.createElement(Body8, null, /* @__PURE__ */ import_react8.default.createElement(Header_default, null), /* @__PURE__ */ import_react8.default.createElement(Filter_default, {
    selectedItem,
    onItemSelect,
    paginate,
    totalPosts,
    postPerPage,
    first,
    last,
    currentNumber
  }), /* @__PURE__ */ import_react8.default.createElement(Table_default, {
    loading,
    posts
  }));
};
var Body8 = import_styled_components11.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: ${SendTheme.white};
`;
var MainContent_default = MainContent;

// app/components/Sidebar.tsx
init_react();
var import_react14 = __toESM(require("react"));
var import_styled_components17 = __toESM(require("styled-components"));

// app/components/sidebar/Name.tsx
init_react();
var import_react9 = __toESM(require("react"));
var import_styled_components12 = __toESM(require("styled-components"));
var Name2 = () => {
  return /* @__PURE__ */ import_react9.default.createElement(Body9, null, /* @__PURE__ */ import_react9.default.createElement(Cover6, null, /* @__PURE__ */ import_react9.default.createElement(NameWrap, null, /* @__PURE__ */ import_react9.default.createElement("svg", {
    width: "22",
    height: "12",
    viewBox: "0 0 22 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M5.11344 11.5454C3.91176 11.5454 2.92577 11.2065 2.15546 10.5286C1.38515 9.85073 1 8.94177 1 7.80171V0.54541H3.11064V7.63225C3.11064 8.20741 3.27498 8.65932 3.60364 8.98799C3.94258 9.30638 4.44584 9.46558 5.11344 9.46558C5.78105 9.46558 6.27918 9.30638 6.60784 8.98799C6.94678 8.65932 7.11625 8.20741 7.11625 7.63225V0.54541H9.2423V7.80171C9.2423 8.94177 8.85714 9.85073 8.08683 10.5286C7.31653 11.2065 6.3254 11.5454 5.11344 11.5454Z",
    fill: "white"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M16.6785 5.78351L20.8228 11.3297H18.3732L14.5216 6.2765V11.3297H12.3956V0.54541H14.5216V5.30591L18.2191 0.54541H20.6687L16.6785 5.78351Z",
    fill: "white"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M5.11344 11.5454C3.91176 11.5454 2.92577 11.2065 2.15546 10.5286C1.38515 9.85073 1 8.94177 1 7.80171V0.54541H3.11064V7.63225C3.11064 8.20741 3.27498 8.65932 3.60364 8.98799C3.94258 9.30638 4.44584 9.46558 5.11344 9.46558C5.78105 9.46558 6.27918 9.30638 6.60784 8.98799C6.94678 8.65932 7.11625 8.20741 7.11625 7.63225V0.54541H9.2423V7.80171C9.2423 8.94177 8.85714 9.85073 8.08683 10.5286C7.31653 11.2065 6.3254 11.5454 5.11344 11.5454Z",
    stroke: "white",
    "stroke-width": "0.5"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M16.6785 5.78351L20.8228 11.3297H18.3732L14.5216 6.2765V11.3297H12.3956V0.54541H14.5216V5.30591L18.2191 0.54541H20.6687L16.6785 5.78351Z",
    stroke: "white",
    "stroke-width": "0.5"
  }))), /* @__PURE__ */ import_react9.default.createElement(NameText, null, /* @__PURE__ */ import_react9.default.createElement(NameHeader, null, "Mati Industries"), /* @__PURE__ */ import_react9.default.createElement(NameEmail, null, /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "mailto:Lanremati@gmail.com"
  }, "Lanremati@gmail.com"))), /* @__PURE__ */ import_react9.default.createElement(NameIcon, null, /* @__PURE__ */ import_react9.default.createElement("svg", {
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react9.default.createElement("rect", {
    width: "24",
    height: "24",
    transform: "translate(0 0.5)",
    fill: "#F2F4F7"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M8 10.5L12 14.5L16 10.5",
    stroke: "#A0AEC0",
    "stroke-width": "1.33333",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))));
};
var Body9 = import_styled_components12.default.div`
  height: 69px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${SendTheme.offWhite};
  padding: 16px;
  border-radius: 0px;
`;
var Cover6 = import_styled_components12.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  max-width: 190px;
  margin: 0 auto;
`;
var NameWrap = import_styled_components12.default.div`
  background: ${SendTheme.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;

  border-radius: 8px;
`;
var NameText = import_styled_components12.default.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;
var NameHeader = (0, import_styled_components12.default)(CaptionLarge)`
  text-align: left;
  color: ${SendTheme.dark};
`;
var NameEmail = (0, import_styled_components12.default)(CaptionSmall)`
  text-align: left;

  a {
    color: ${SendTheme.gray};
  }
`;
var NameIcon = import_styled_components12.default.span`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
var Name_default = Name2;

// app/assets/logo.svg
var logo_default = "/build/_assets/logo-EIDL4KY2.svg";

// app/components/sidebar/Section.tsx
init_react();
var import_react13 = __toESM(require("react"));
var import_styled_components16 = __toESM(require("styled-components"));

// app/components/sidebar/Billing.tsx
init_react();
var import_react10 = __toESM(require("react"));
var import_styled_components13 = __toESM(require("styled-components"));

// app/components/sidebar/Data.tsx
init_react();
var DashboardData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M8.11111 19.4547H15.8889C17.6 19.4547 19 18.073 19 16.3842V11.3946C19 10.3967 18.5333 9.55231 17.7556 8.93821L13.8667 6.02121C12.7778 5.25358 11.2222 5.25358 10.1333 6.09798L6.24444 8.93821C5.46667 9.55231 5 10.3967 5 11.3946V16.3842C5 18.073 6.4 19.4547 8.11111 19.4547ZM6.55556 11.3946C6.55556 10.934 6.78889 10.4735 7.17778 10.1664L11.0667 7.24942C11.3778 7.01913 11.6889 6.94237 12 6.94237C12.3111 6.94237 12.6222 7.01913 12.9333 7.24942L16.8222 10.1664C17.2111 10.4735 17.4444 10.934 17.4444 11.3946V16.3842C17.4444 17.2286 16.7444 17.9195 15.8889 17.9195H8.11111C7.25556 17.9195 6.55556 17.2286 6.55556 16.3842V11.3946Z",
      fill: "#78797A"
    })),
    name: "Dashboard"
  },
  {
    classname: "active",
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M13.2 5.45474H7.60001C7.22871 5.45474 6.87261 5.60224 6.61006 5.86479C6.34751 6.12734 6.20001 6.48344 6.20001 6.85474V18.0547C6.20001 18.426 6.34751 18.7821 6.61006 19.0447C6.87261 19.3072 7.22871 19.4547 7.60001 19.4547H16C16.3713 19.4547 16.7274 19.3072 16.99 19.0447C17.2525 18.7821 17.4 18.426 17.4 18.0547V9.65474L13.2 5.45474Z",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M14.6001 15.9547H9.00006",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M14.6001 13.1547H9.00006",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M10.4001 10.355H9.70006H9.00006",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M13.2001 5.45474V9.65474H17.4001",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })),
    name: "Quotes"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M16.5 5.00003H9C8.20435 5.00003 7.44129 5.3161 6.87868 5.87871C6.31607 6.44132 6 7.20438 6 8.00003V17C6 17.7957 6.31607 18.5587 6.87868 19.1214C7.44129 19.684 8.20435 20 9 20H16.5C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8979 18 18.5V6.50003C18 6.10221 17.842 5.72067 17.5607 5.43937C17.2794 5.15807 16.8978 5.00003 16.5 5.00003ZM7.5 8.00003C7.5 7.60221 7.65804 7.22067 7.93934 6.93937C8.22064 6.65807 8.60218 6.50003 9 6.50003H16.5V14H9C8.47128 14.0022 7.95299 14.1474 7.5 14.42V8.00003ZM9 18.5C8.60218 18.5 8.22064 18.342 7.93934 18.0607C7.65804 17.7794 7.5 17.3979 7.5 17C7.5 16.6022 7.65804 16.2207 7.93934 15.9394C8.22064 15.6581 8.60218 15.5 9 15.5H16.5V18.5H9ZM10.5 9.50003H13.5C13.6989 9.50003 13.8897 9.42101 14.0303 9.28036C14.171 9.13971 14.25 8.94894 14.25 8.75003C14.25 8.55112 14.171 8.36035 14.0303 8.2197C13.8897 8.07905 13.6989 8.00003 13.5 8.00003H10.5C10.3011 8.00003 10.1103 8.07905 9.96967 8.2197C9.82902 8.36035 9.75 8.55112 9.75 8.75003C9.75 8.94894 9.82902 9.13971 9.96967 9.28036C10.1103 9.42101 10.3011 9.50003 10.5 9.50003Z",
      fill: "#78797A"
    })),
    name: "Bookings"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5.32922 16.6619C5.40733 16.8582 5.56022 17.0155 5.75427 17.099C5.94832 17.1826 6.16763 17.1857 6.36395 17.1076C6.56027 17.0295 6.71752 16.8766 6.80111 16.6826C6.8847 16.4885 6.88778 16.2692 6.80967 16.0729L5.91822 13.8283L11.2033 12.6583V16.439C11.2033 16.6501 11.2871 16.8526 11.4364 17.0018C11.5857 17.1511 11.7881 17.235 11.9992 17.235C12.2103 17.235 12.4128 17.1511 12.562 17.0018C12.7113 16.8526 12.7951 16.6501 12.7951 16.439V12.6583L18.0802 13.8283L17.1887 16.0729C17.15 16.1701 17.1307 16.274 17.1322 16.3786C17.1336 16.4832 17.1556 16.5866 17.197 16.6827C17.2384 16.7788 17.2984 16.8658 17.3734 16.9387C17.4485 17.0116 17.5372 17.069 17.6345 17.1076C17.7282 17.1447 17.8282 17.1636 17.929 17.1633C18.0884 17.1635 18.2442 17.1158 18.3761 17.0264C18.5081 16.937 18.6102 16.81 18.6692 16.6619L19.9029 13.5498C19.9452 13.4421 19.9636 13.3265 19.9567 13.2111C19.9499 13.0956 19.9179 12.983 19.8631 12.8812C19.8099 12.7797 19.7354 12.6909 19.6448 12.6208C19.5541 12.5508 19.4494 12.5011 19.3378 12.4752L16.7749 11.9101V8.47961C16.7749 8.26852 16.691 8.06606 16.5417 7.9168C16.3925 7.76753 16.19 7.68367 15.9789 7.68367H14.387V5.29585C14.387 5.08475 14.3032 4.8823 14.1539 4.73303C14.0046 4.58377 13.8022 4.49991 13.5911 4.49991H10.4073C10.1962 4.49991 9.99378 4.58377 9.84451 4.73303C9.69524 4.8823 9.61139 5.08475 9.61139 5.29585V7.68367H8.0195C7.80841 7.68367 7.60596 7.76753 7.45669 7.9168C7.30742 8.06606 7.22356 8.26852 7.22356 8.47961V11.9101L4.66063 12.4593C4.54901 12.4852 4.44429 12.5348 4.35363 12.6049C4.26297 12.675 4.1885 12.7638 4.13531 12.8652C4.0805 12.9671 4.04854 13.0797 4.04167 13.1952C4.03479 13.3106 4.05317 13.4262 4.09552 13.5338L5.32922 16.6619ZM11.2033 6.09179H12.7951V7.68367H11.2033V6.09179ZM8.81544 9.27555H15.183V11.5519L12.1743 10.8674H11.8241L8.81544 11.5519V9.27555ZM18.9318 18.2538C18.6526 18.3393 18.3852 18.4597 18.1359 18.6119C17.8823 18.7602 17.5939 18.8384 17.3002 18.8384C17.0064 18.8384 16.718 18.7602 16.4644 18.6119C15.9131 18.3009 15.2907 18.1374 14.6576 18.1374C14.0246 18.1374 13.4022 18.3009 12.8509 18.6119C12.5938 18.7585 12.3031 18.8356 12.0072 18.8356C11.7113 18.8356 11.4205 18.7585 11.1635 18.6119C10.6116 18.3024 9.98945 18.1398 9.35668 18.1398C8.72392 18.1398 8.10177 18.3024 7.5499 18.6119C7.29634 18.7602 7.00789 18.8384 6.71416 18.8384C6.42043 18.8384 6.13198 18.7602 5.87842 18.6119C5.62916 18.4597 5.36175 18.3393 5.08248 18.2538C4.97658 18.2161 4.8639 18.2013 4.75186 18.2103C4.63982 18.2194 4.53097 18.252 4.43247 18.3062C4.33396 18.3603 4.24804 18.4347 4.18036 18.5245C4.11268 18.6142 4.06478 18.7172 4.0398 18.8268C3.98038 19.0284 4.0031 19.2453 4.10301 19.4302C4.20291 19.6151 4.3719 19.753 4.57308 19.8138C4.73335 19.8572 4.88626 19.9243 5.02677 20.0128C5.50967 20.2962 6.05876 20.4472 6.61865 20.4506C7.20016 20.4507 7.77135 20.2969 8.27421 20.0048C8.58619 19.8327 8.9367 19.7425 9.29301 19.7425C9.64932 19.7425 9.99982 19.8327 10.3118 20.0048C10.8111 20.2903 11.3763 20.4405 11.9515 20.4405C12.5266 20.4405 13.0918 20.2903 13.5911 20.0048C13.9031 19.8327 14.2536 19.7425 14.6099 19.7425C14.9662 19.7425 15.3167 19.8327 15.6287 20.0048C16.122 20.2993 16.6859 20.4547 17.2604 20.4547C17.8349 20.4547 18.3987 20.2993 18.8921 20.0048C19.0326 19.9163 19.1855 19.8493 19.3457 19.8058C19.4517 19.7844 19.5521 19.7416 19.641 19.6801C19.7298 19.6186 19.8052 19.5397 19.8626 19.4481C19.9199 19.3564 19.958 19.2541 19.9745 19.1473C19.991 19.0405 19.9856 18.9315 19.9586 18.8268C19.9333 18.7191 19.8858 18.6179 19.8192 18.5295C19.7526 18.4412 19.6683 18.3677 19.5717 18.3138C19.475 18.2599 19.3682 18.2267 19.2581 18.2163C19.1479 18.206 19.0368 18.2187 18.9318 18.2538Z",
      fill: "#78797A"
    })),
    name: "Shipments"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M16.9001 8.95472H16.2001V8.25471C16.2001 7.69775 15.9788 7.1636 15.585 6.76977C15.1912 6.37594 14.657 6.15469 14.1001 6.15469H7.10002C6.54306 6.15469 6.00891 6.37594 5.61508 6.76977C5.22125 7.1636 5 7.69775 5 8.25471V16.6548C5 17.2117 5.22125 17.7459 5.61508 18.1397C6.00891 18.5335 6.54306 18.7548 7.10002 18.7548H16.9001C17.4571 18.7548 17.9912 18.5335 18.385 18.1397C18.7789 17.7459 19.0001 17.2117 19.0001 16.6548V11.0547C19.0001 10.4978 18.7789 9.96363 18.385 9.5698C17.9912 9.17597 17.4571 8.95472 16.9001 8.95472ZM7.10002 7.5547H14.1001C14.2857 7.5547 14.4638 7.62845 14.595 7.75973C14.7263 7.89101 14.8001 8.06906 14.8001 8.25471V8.95472H7.10002C6.91436 8.95472 6.73631 8.88096 6.60504 8.74969C6.47376 8.61841 6.40001 8.44036 6.40001 8.25471C6.40001 8.06906 6.47376 7.89101 6.60504 7.75973C6.73631 7.62845 6.91436 7.5547 7.10002 7.5547ZM17.6001 14.5548H16.9001C16.7144 14.5548 16.5364 14.481 16.4051 14.3497C16.2738 14.2185 16.2001 14.0404 16.2001 13.8548C16.2001 13.6691 16.2738 13.4911 16.4051 13.3598C16.5364 13.2285 16.7144 13.1547 16.9001 13.1547H17.6001V14.5548ZM17.6001 11.7547H16.9001C16.3431 11.7547 15.809 11.976 15.4152 12.3698C15.0213 12.7636 14.8001 13.2978 14.8001 13.8548C14.8001 14.4117 15.0213 14.9459 15.4152 15.3397C15.809 15.7335 16.3431 15.9548 16.9001 15.9548H17.6001V16.6548C17.6001 16.8404 17.5263 17.0185 17.3951 17.1498C17.2638 17.281 17.0857 17.3548 16.9001 17.3548H7.10002C6.91436 17.3548 6.73631 17.281 6.60504 17.1498C6.47376 17.0185 6.40001 16.8404 6.40001 16.6548V10.2357C6.6249 10.3148 6.86162 10.3551 7.10002 10.3547H16.9001C17.0857 10.3547 17.2638 10.4285 17.3951 10.5598C17.5263 10.691 17.6001 10.8691 17.6001 11.0547V11.7547Z",
      fill: "#78797A"
    })),
    name: "Trade Finance"
  }
];
var BillingData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5 10.5047C4.6134 10.5047 4.3 10.8181 4.3 11.2047C4.3 11.5913 4.6134 11.9047 5 11.9047V10.5047ZM18.75 11.9047C19.1366 11.9047 19.45 11.5913 19.45 11.2047C19.45 10.8181 19.1366 10.5047 18.75 10.5047V11.9047ZM6.25 8.15474H17.5V6.75474H6.25V8.15474ZM17.5 8.15474C17.8038 8.15474 18.05 8.40099 18.05 8.70474H19.45C19.45 7.62779 18.577 6.75474 17.5 6.75474V8.15474ZM18.05 8.70474V16.2047H19.45V8.70474H18.05ZM18.05 16.2047C18.05 16.5085 17.8038 16.7547 17.5 16.7547V18.1547C18.577 18.1547 19.45 17.2817 19.45 16.2047H18.05ZM17.5 16.7547H6.25V18.1547H17.5V16.7547ZM6.25 16.7547C5.94624 16.7547 5.7 16.5085 5.7 16.2047H4.3C4.3 17.2817 5.17304 18.1547 6.25 18.1547V16.7547ZM5.7 16.2047V8.70474H4.3V16.2047H5.7ZM5.7 8.70474C5.7 8.40099 5.94624 8.15474 6.25 8.15474V6.75474C5.17304 6.75474 4.3 7.62779 4.3 8.70474H5.7ZM5 11.9047H18.75V10.5047H5V11.9047Z",
      fill: "#78797A"
    })),
    name: "Billings"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M16.1996 8.94559C16.1996 8.80697 16.1585 8.67147 16.0815 8.55622C16.0045 8.44096 15.895 8.35113 15.7669 8.29809C15.6389 8.24504 15.498 8.23116 15.362 8.25821C15.2261 8.28525 15.1012 8.352 15.0032 8.45001C14.9052 8.54803 14.8384 8.67291 14.8114 8.80886C14.7843 8.94481 14.7982 9.08573 14.8512 9.21379C14.9043 9.34185 14.9941 9.45131 15.1094 9.52832C15.2246 9.60533 15.3601 9.64643 15.4987 9.64643C15.6846 9.64643 15.8629 9.57259 15.9943 9.44116C16.1258 9.30973 16.1996 9.13146 16.1996 8.94559ZM12.1487 19.2551L18.7787 12.611C18.8492 12.5457 18.9054 12.4665 18.944 12.3785C18.9826 12.2905 19.0027 12.1955 19.003 12.0994V7.89432C19.0035 7.80208 18.9858 7.71065 18.951 7.62526C18.9161 7.53987 18.8647 7.4622 18.7997 7.39671L17.0546 5.6446C16.9891 5.57964 16.9115 5.52825 16.8261 5.49337C16.7407 5.45849 16.6493 5.44082 16.557 5.44135H12.3519C12.1664 5.44393 11.9886 5.51653 11.8543 5.6446L5.19628 12.2956C5.06822 12.4299 4.99562 12.6077 4.99304 12.7932C4.99251 12.8855 5.01018 12.9769 5.04506 13.0623C5.07994 13.1477 5.13133 13.2254 5.19628 13.2908L11.1605 19.2551C11.226 19.32 11.3036 19.3714 11.389 19.4063C11.4744 19.4412 11.5659 19.4588 11.6581 19.4583C11.8412 19.454 12.0162 19.3815 12.1487 19.2551ZM6.67507 12.7932L12.6323 6.84304H16.2697L17.6013 8.17465V11.805L11.6511 17.7622L6.67507 12.7932Z",
      fill: "#78797A"
    })),
    name: "Products"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M20.2726 13.8299C20.2696 13.7856 20.2625 13.7416 20.2513 13.6985L18.5124 9.06798C18.8288 8.86329 19.0891 8.5827 19.2695 8.25176C19.4498 7.92081 19.5445 7.55002 19.545 7.17313C19.545 6.97302 19.4656 6.7811 19.3241 6.6396C19.1826 6.4981 18.9906 6.41861 18.7905 6.41861C18.5904 6.41861 18.3985 6.4981 18.257 6.6396C18.1155 6.7811 18.036 6.97302 18.036 7.17313C18.0359 7.34127 17.9797 7.50458 17.8763 7.63714C17.7729 7.76971 17.6282 7.86395 17.4651 7.90491C17.302 7.94587 17.1299 7.93121 16.9761 7.86324C16.8223 7.79528 16.6956 7.67791 16.6161 7.52976C16.4225 7.18608 16.1394 6.90129 15.7969 6.70564C15.4544 6.50999 15.0652 6.4108 14.6709 6.41861H12.7544V5.66409C12.7544 5.46398 12.6749 5.27207 12.5334 5.13057C12.3919 4.98907 12.2 4.90958 11.9999 4.90958C11.7998 4.90958 11.6079 4.98907 11.4664 5.13057C11.3249 5.27207 11.2454 5.46398 11.2454 5.66409V6.41861H9.32889C8.93451 6.4108 8.54538 6.50999 8.20286 6.70564C7.86035 6.90129 7.57724 7.18608 7.38362 7.52976C7.30412 7.67791 7.17742 7.79528 7.02363 7.86324C6.86983 7.93121 6.69775 7.94587 6.53467 7.90491C6.37159 7.86395 6.22686 7.76971 6.12344 7.63714C6.02001 7.50458 5.96381 7.34127 5.96375 7.17313C5.96375 6.97302 5.88425 6.7811 5.74275 6.6396C5.60125 6.4981 5.40934 6.41861 5.20923 6.41861C5.00912 6.41861 4.8172 6.4981 4.6757 6.6396C4.53421 6.7811 4.45471 6.97302 4.45471 7.17313C4.45521 7.55002 4.54994 7.92081 4.7303 8.25176C4.91066 8.5827 5.17091 8.86329 5.48738 9.06798L3.74848 13.6985C3.73732 13.7416 3.7302 13.7856 3.72721 13.8299C3.71396 13.8736 3.70492 13.9184 3.7002 13.9638C3.7002 13.9708 3.70222 13.9772 3.70227 13.9842C3.7025 13.9942 3.70453 14.0033 3.70521 14.0132C3.71696 14.8046 4.03957 15.5596 4.60335 16.115C5.16713 16.6705 5.92681 16.9819 6.71826 16.9819C7.50971 16.9819 8.26939 16.6705 8.83317 16.115C9.39695 15.5596 9.71956 14.8046 9.73131 14.0132C9.73195 14.0033 9.73403 13.9942 9.73425 13.9842C9.7343 13.9772 9.73633 13.9708 9.73633 13.9638C9.73162 13.9184 9.72258 13.8736 9.70934 13.8299C9.70635 13.7856 9.69923 13.7416 9.68807 13.6985L7.94711 9.06259C8.26685 8.85855 8.52996 8.57717 8.71213 8.24448C8.77797 8.14208 8.86967 8.05886 8.97796 8.00323C9.08625 7.9476 9.2073 7.92152 9.32889 7.92764H11.2454V18.4909H8.98181C8.7817 18.4909 8.58979 18.5704 8.44829 18.7119C8.30679 18.8534 8.22729 19.0453 8.22729 19.2454C8.22729 19.4455 8.30679 19.6374 8.44829 19.7789C8.58979 19.9204 8.7817 19.9999 8.98181 19.9999H15.0179C15.2181 19.9999 15.41 19.9204 15.5515 19.7789C15.693 19.6374 15.7725 19.4455 15.7725 19.2454C15.7725 19.0453 15.693 18.8534 15.5515 18.7119C15.41 18.5704 15.2181 18.4909 15.0179 18.4909H12.7544V7.92764H14.6709C14.7925 7.92153 14.9135 7.9476 15.0218 8.00323C15.1301 8.05886 15.2218 8.14208 15.2876 8.24448C15.4698 8.57717 15.7329 8.85855 16.0526 9.06259L14.3117 13.6985C14.3006 13.7416 14.2934 13.7856 14.2904 13.8299C14.2772 13.8736 14.2681 13.9184 14.2634 13.9638C14.2634 13.9708 14.2655 13.9772 14.2655 13.9842C14.2657 13.9942 14.2678 14.0033 14.2684 14.0132C14.2802 14.8046 14.6028 15.5596 15.1666 16.115C15.7304 16.6705 16.49 16.9819 17.2815 16.9819C18.0729 16.9819 18.8326 16.6705 19.3964 16.115C19.9602 15.5596 20.2828 14.8046 20.2945 14.0132C20.2952 14.0033 20.2973 13.9942 20.2975 13.9842C20.2975 13.9772 20.2996 13.9708 20.2996 13.9638C20.2948 13.9184 20.2858 13.8736 20.2726 13.8299ZM6.71826 10.0822L8.01804 14.7183H5.41185L6.71826 10.0822ZM8.01804 14.7183C7.88488 14.9455 7.6952 15.1344 7.46744 15.2666C7.23969 15.3988 6.9816 15.4699 6.71826 15.4728C6.45345 15.4727 6.19333 15.4029 5.96402 15.2705C5.7347 15.1381 5.54427 14.9476 5.41185 14.7183H8.01804ZM17.2815 10.0822L18.5813 14.7183H15.9751L17.2815 10.0822ZM17.2815 15.4728C17.0167 15.4727 16.7566 15.4029 16.5272 15.2705C16.2979 15.1381 16.1075 14.9476 15.9751 14.7183H18.5813C18.4481 14.9455 18.2584 15.1344 18.0307 15.2666C17.8029 15.3988 17.5448 15.4699 17.2815 15.4728Z",
      fill: "#78797A"
    })),
    name: "Fixed Rates"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M14.9137 12.961C15.5541 12.4599 16.0216 11.7728 16.251 10.9952C16.4804 10.2176 16.4605 9.3882 16.1939 8.62242C15.9273 7.85665 15.4273 7.19255 14.7635 6.72252C14.0997 6.25249 13.3052 5.99991 12.4903 5.99991C11.6755 5.99991 10.8809 6.25249 10.2171 6.72252C9.55331 7.19255 9.05335 7.85665 8.78675 8.62242C8.52016 9.3882 8.50019 10.2176 8.72963 10.9952C8.95907 11.7728 9.4265 12.4599 10.0669 12.961C8.96956 13.3982 8.01209 14.1234 7.29657 15.0592C6.58105 15.995 6.1343 17.1064 6.00394 18.2749C5.9945 18.3602 6.00206 18.4465 6.02617 18.5289C6.05028 18.6114 6.09047 18.6882 6.14445 18.7552C6.25348 18.8904 6.41205 18.977 6.5853 18.996C6.75854 19.0149 6.93226 18.9647 7.06823 18.8562C7.20421 18.7478 7.2913 18.5901 7.31036 18.4178C7.45379 17.1479 8.06265 15.9751 9.02061 15.1234C9.97856 14.2718 11.2184 13.801 12.5034 13.801C13.7883 13.801 15.0282 14.2718 15.9861 15.1234C16.9441 15.9751 17.553 17.1479 17.6964 18.4178C17.7142 18.5774 17.7907 18.7249 17.9114 18.8316C18.032 18.9384 18.1881 18.997 18.3496 18.996H18.4215C18.5927 18.9764 18.7492 18.8903 18.8569 18.7564C18.9645 18.6226 19.0146 18.4518 18.9963 18.2814C18.8653 17.1096 18.4161 15.9954 17.6969 15.0581C16.9777 14.1208 16.0156 13.3959 14.9137 12.961ZM12.4903 12.4997C11.9735 12.4997 11.4684 12.3473 11.0387 12.0618C10.609 11.7763 10.2741 11.3704 10.0764 10.8956C9.8786 10.4208 9.82686 9.89835 9.92768 9.39429C10.0285 8.89023 10.2773 8.42722 10.6428 8.06381C11.0082 7.70041 11.4737 7.45292 11.9806 7.35266C12.4874 7.2524 13.0128 7.30385 13.4902 7.50053C13.9676 7.6972 14.3757 8.03026 14.6628 8.45758C14.9499 8.8849 15.1032 9.3873 15.1032 9.90123C15.1032 10.5904 14.8279 11.2513 14.3379 11.7386C13.8479 12.226 13.1833 12.4997 12.4903 12.4997Z",
      fill: "#78797A"
    })),
    name: "Network"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M19.8056 11.3485C19.7373 11.2644 19.651 11.1965 19.553 11.1501C19.4551 11.1036 19.348 11.0797 19.2395 11.08H17.7882V10.3544C17.7882 9.77696 17.5588 9.22321 17.1505 8.81493C16.7422 8.40665 16.1885 8.17728 15.6111 8.17728H11.0538L10.8215 7.45159C10.671 7.02578 10.3918 6.65733 10.0225 6.39728C9.65322 6.13724 9.21223 5.99847 8.76059 6.00021H6.17713C5.59974 6.00021 5.04599 6.22958 4.63771 6.63786C4.22943 7.04614 4.00006 7.59989 4.00006 8.17728V16.8856C4.00006 17.463 4.22943 18.0167 4.63771 18.425C5.04599 18.8333 5.59974 19.0626 6.17713 19.0626H16.6271C17.1214 19.0612 17.6006 18.8916 17.9857 18.5816C18.3708 18.2717 18.639 17.8399 18.7461 17.3573L19.9652 11.9654C19.9873 11.8572 19.9844 11.7454 19.9567 11.6385C19.9291 11.5316 19.8774 11.4324 19.8056 11.3485ZM7.17133 17.0452C7.13446 17.2089 7.042 17.3548 6.90969 17.458C6.77738 17.5612 6.61339 17.6154 6.44564 17.6113H6.17713C5.98467 17.6113 5.80008 17.5348 5.66399 17.3987C5.5279 17.2626 5.45144 17.078 5.45144 16.8856V8.17728C5.45144 7.98482 5.5279 7.80024 5.66399 7.66414C5.80008 7.52805 5.98467 7.45159 6.17713 7.45159H8.76059C8.91884 7.44333 9.07544 7.4871 9.20648 7.57621C9.33751 7.66531 9.43578 7.79486 9.48628 7.94506L9.87815 9.1352C9.92472 9.27362 10.012 9.39477 10.1285 9.48281C10.245 9.57085 10.3854 9.62168 10.5313 9.62866H15.6111C15.8036 9.62866 15.9881 9.70512 16.1242 9.84121C16.2603 9.97731 16.3368 10.1619 16.3368 10.3544V11.08H9.07989C8.91214 11.0759 8.74815 11.1301 8.61584 11.2333C8.48353 11.3365 8.39107 11.4824 8.3542 11.6461L7.17133 17.0452ZM17.331 17.0452C17.2941 17.2089 17.2017 17.3548 17.0693 17.458C16.937 17.5612 16.773 17.6154 16.6053 17.6113H8.5066C8.54408 17.5304 8.57091 17.445 8.58642 17.3573L9.66044 12.5314H18.3687L17.331 17.0452Z",
      fill: "#78797A"
    })),
    name: "Reports"
  }
];
var SettingsData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M17.7775 15.6663C16.9133 14.6086 16.3032 14.0701 16.3032 11.154C16.3032 8.48356 14.9395 7.53216 13.8172 7.0701C13.6681 7.00885 13.5277 6.86817 13.4823 6.71505C13.2854 6.045 12.7335 5.45471 11.9999 5.45471C11.2662 5.45471 10.7139 6.04534 10.5191 6.71572C10.4736 6.87053 10.3333 7.00885 10.1842 7.0701C9.06052 7.53284 7.69822 8.48087 7.69822 11.154C7.69653 14.0701 7.08639 14.6086 6.22216 15.6663C5.86408 16.1045 6.17774 16.7624 6.80403 16.7624H17.199C17.822 16.7624 18.1336 16.1025 17.7775 15.6663Z",
      stroke: "#78797A",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M14.1538 16.7624V17.3009C14.1538 17.8721 13.9268 18.4199 13.5229 18.8239C13.119 19.2278 12.5712 19.4547 11.9999 19.4547C11.4287 19.4547 10.8808 19.2278 10.4769 18.8239C10.073 18.4199 9.84607 17.8721 9.84607 17.3009V16.7624",
      stroke: "#78797A",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })),
    name: "Notifications"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M18.6129 13.0436C18.492 12.9059 18.4253 12.7289 18.4253 12.5457C18.4253 12.3624 18.492 12.1854 18.6129 12.0477L19.5786 10.9613C19.685 10.8426 19.7511 10.6933 19.7674 10.5347C19.7836 10.3761 19.7493 10.2164 19.6692 10.0786L18.1603 7.46823C18.081 7.33056 17.9602 7.22143 17.8153 7.1564C17.6703 7.09138 17.5085 7.07377 17.353 7.10609L15.9346 7.39278C15.7542 7.43007 15.5663 7.40002 15.4064 7.30828C15.2466 7.21655 15.1259 7.06949 15.067 6.89485L14.6068 5.5142C14.5562 5.36435 14.4598 5.2342 14.3311 5.14214C14.2025 5.05008 14.0482 5.00077 13.8901 5.00118H10.8723C10.7078 4.99259 10.5449 5.03809 10.4087 5.13073C10.2725 5.22337 10.1703 5.35805 10.1178 5.5142L9.69534 6.89485C9.63649 7.06949 9.51576 7.21655 9.35592 7.30828C9.19608 7.40002 9.0082 7.43007 8.82772 7.39278L7.37163 7.10609C7.22418 7.08525 7.07385 7.10852 6.9396 7.17297C6.80534 7.23741 6.69316 7.34014 6.61719 7.46823L5.10829 10.0786C5.02617 10.2149 4.98925 10.3737 5.0028 10.5322C5.01635 10.6908 5.07968 10.8409 5.18373 10.9613L6.14188 12.0477C6.26284 12.1854 6.32954 12.3624 6.32954 12.5457C6.32954 12.7289 6.26284 12.9059 6.14188 13.0436L5.18373 14.13C5.07968 14.2504 5.01635 14.4006 5.0028 14.5591C4.98925 14.7177 5.02617 14.8764 5.10829 15.0127L6.61719 17.6231C6.69648 17.7608 6.8172 17.8699 6.96216 17.9349C7.10711 18 7.2689 18.0176 7.42445 17.9852L8.84281 17.6986C9.02329 17.6613 9.21117 17.6913 9.37101 17.7831C9.53085 17.8748 9.65158 18.0218 9.71043 18.1965L10.1706 19.5771C10.2231 19.7333 10.3253 19.868 10.4615 19.9606C10.5978 20.0532 10.7606 20.0987 10.9251 20.0902H13.9429C14.101 20.0906 14.2553 20.0413 14.384 19.9492C14.5126 19.8571 14.609 19.727 14.6596 19.5771L15.1198 18.1965C15.1787 18.0218 15.2994 17.8748 15.4592 17.7831C15.6191 17.6913 15.807 17.6613 15.9874 17.6986L17.4058 17.9852C17.5614 18.0176 17.7231 18 17.8681 17.9349C18.013 17.8699 18.1338 17.7608 18.2131 17.6231L19.722 15.0127C19.8021 14.8749 19.8365 14.7152 19.8202 14.5566C19.8039 14.3981 19.7378 14.2487 19.6314 14.13L18.6129 13.0436ZM17.4888 14.0546L18.0924 14.7336L17.1267 16.4084L16.2364 16.2274C15.693 16.1163 15.1278 16.2086 14.648 16.4868C14.1682 16.7649 13.8072 17.2095 13.6336 17.7363L13.3469 18.5813H11.4155L11.1439 17.7212C10.9702 17.1945 10.6093 16.7498 10.1295 16.4717C9.64964 16.1935 9.0844 16.1012 8.54103 16.2123L7.65078 16.3934L6.67 14.726L7.27356 14.047C7.64471 13.6321 7.8499 13.0949 7.8499 12.5381C7.8499 11.9814 7.64471 11.4442 7.27356 11.0292L6.67 10.3502L7.63569 8.69043L8.52594 8.8715C9.06931 8.98257 9.63455 8.89027 10.1144 8.61212C10.5942 8.33397 10.9552 7.88933 11.1288 7.3626L11.4155 6.51008H13.3469L13.6336 7.37015C13.8072 7.89687 14.1682 8.34151 14.648 8.61967C15.1278 8.89782 15.693 8.99012 16.2364 8.87905L17.1267 8.69798L18.0924 10.3729L17.4888 11.0519C17.1218 11.4659 16.9192 12 16.9192 12.5532C16.9192 13.1065 17.1218 13.6406 17.4888 14.0546ZM12.3812 9.52787C11.7843 9.52787 11.2009 9.70486 10.7046 10.0365C10.2083 10.3681 9.8215 10.8394 9.59309 11.3908C9.36469 11.9422 9.30492 12.549 9.42137 13.1344C9.53781 13.7198 9.82522 14.2575 10.2473 14.6796C10.6693 15.1016 11.207 15.389 11.7924 15.5055C12.3778 15.6219 12.9846 15.5622 13.536 15.3337C14.0875 15.1053 14.5588 14.7185 14.8904 14.2223C15.222 13.726 15.399 13.1425 15.399 12.5457C15.399 11.7453 15.081 10.9777 14.5151 10.4118C13.9491 9.84582 13.1815 9.52787 12.3812 9.52787ZM12.3812 14.0546C12.0827 14.0546 11.791 13.9661 11.5429 13.8003C11.2947 13.6345 11.1013 13.3988 10.9871 13.1231C10.8729 12.8474 10.843 12.544 10.9013 12.2513C10.9595 11.9586 11.1032 11.6897 11.3142 11.4787C11.5252 11.2677 11.7941 11.124 12.0868 11.0658C12.3795 11.0075 12.6829 11.0374 12.9586 11.1516C13.2343 11.2658 13.47 11.4592 13.6358 11.7074C13.8016 11.9555 13.8901 12.2472 13.8901 12.5457C13.8901 12.9459 13.7311 13.3296 13.4481 13.6126C13.1652 13.8956 12.7814 14.0546 12.3812 14.0546Z",
      fill: "#78797A"
    })),
    name: "Settings"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M17.061 12.0478C16.916 12.0478 16.7769 11.9902 16.6744 11.8877C16.5718 11.7852 16.5142 11.6461 16.5142 11.5011V9.95695C16.5142 7.76982 14.4933 6.02012 12.0087 6.02012C9.52414 6.02012 7.50323 7.79169 7.50323 9.95695V11.5011C7.50323 11.6461 7.44563 11.7852 7.34308 11.8877C7.24054 11.9902 7.10147 12.0478 6.95645 12.0478C6.81143 12.0478 6.67236 11.9902 6.56982 11.8877C6.46728 11.7852 6.40967 11.6461 6.40967 11.5011V9.95695C6.40967 7.17492 8.92487 4.90906 12.0087 4.90906C15.0926 4.90906 17.6078 7.17492 17.6078 9.95695V11.5011C17.6084 11.573 17.5946 11.6444 17.5673 11.711C17.5401 11.7776 17.4998 11.8381 17.4489 11.889C17.398 11.9399 17.3375 11.9801 17.2709 12.0074C17.2043 12.0347 17.133 12.0484 17.061 12.0478Z",
      fill: "#78797A",
      stroke: "#78797A",
      "stroke-width": "0.4"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M15.5825 17.192C15.4375 17.192 15.2984 17.1344 15.1959 17.0319C15.0934 16.9293 15.0357 16.7903 15.0357 16.6452V11.453C15.0403 11.311 15.0999 11.1764 15.202 11.0776C15.304 10.9788 15.4405 10.9236 15.5825 10.9237C17.4678 10.9237 19.0032 12.3366 19.0032 14.0688C19.0032 15.801 17.4678 17.192 15.5825 17.192ZM16.1293 12.0566V16.0416C16.608 15.9623 17.0452 15.7217 17.3683 15.3596C17.6913 14.9976 17.8808 14.5359 17.9053 14.0513C17.8818 13.5659 17.6928 13.1032 17.3696 12.7403C17.0465 12.3773 16.6087 12.1361 16.1293 12.0566ZM8.4175 17.192C6.53219 17.192 4.99683 15.7835 4.99683 14.0513C4.99683 12.3191 6.53219 10.9237 8.4175 10.9237C8.56251 10.9237 8.70159 10.9813 8.80413 11.0839C8.90667 11.1864 8.96428 11.3255 8.96428 11.4705V16.6452C8.96428 16.7903 8.90667 16.9293 8.80413 17.0319C8.70159 17.1344 8.56251 17.192 8.4175 17.192ZM7.87071 12.0566C7.3913 12.1361 6.95356 12.3773 6.63042 12.7403C6.30727 13.1032 6.11823 13.5659 6.09476 14.0513C6.1192 14.5359 6.30868 14.9976 6.63174 15.3596C6.9548 15.7217 7.392 15.9623 7.87071 16.0416V12.0566Z",
      fill: "#78797A",
      stroke: "#78797A",
      "stroke-width": "0.4"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M15.4031 18.9724H13.5922C13.4472 18.9724 13.3081 18.9148 13.2056 18.8122C13.103 18.7097 13.0454 18.5706 13.0454 18.4256C13.0454 18.2806 13.103 18.1415 13.2056 18.0389C13.3081 17.9364 13.4472 17.8788 13.5922 17.8788H15.4031C15.6862 17.8788 15.9577 17.7663 16.1578 17.5662C16.358 17.366 16.4705 17.0945 16.4705 16.8115V16.5709C16.4705 16.4259 16.5281 16.2868 16.6306 16.1843C16.7331 16.0817 16.8722 16.0241 17.0172 16.0241C17.1623 16.0241 17.3013 16.0817 17.4039 16.1843C17.5064 16.2868 17.564 16.4259 17.564 16.5709V16.8115C17.564 17.3846 17.3364 17.9342 16.9311 18.3395C16.5259 18.7447 15.9762 18.9724 15.4031 18.9724Z",
      fill: "#78797A",
      stroke: "#78797A",
      "stroke-width": "0.4"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12.6562 20.0002H11.5758C11.179 20.0002 10.7985 19.8425 10.5179 19.562C10.2374 19.2814 10.0798 18.9009 10.0798 18.5042V18.4429C10.0809 18.0469 10.2391 17.6675 10.5195 17.3879C10.7999 17.1083 11.1798 16.9513 11.5758 16.9513H12.6562C13.0518 16.9513 13.4312 17.1084 13.7109 17.3882C13.9907 17.6679 14.1478 18.0473 14.1478 18.4429V18.5042C14.1478 18.9002 13.9908 19.28 13.7112 19.5604C13.4316 19.8409 13.0522 19.999 12.6562 20.0002ZM11.5845 18.0449C11.4785 18.0449 11.3768 18.0867 11.3015 18.1612C11.2261 18.2357 11.1832 18.3369 11.1821 18.4429V18.5042C11.1821 18.6109 11.2245 18.7132 11.3 18.7887C11.3754 18.8642 11.4778 18.9066 11.5845 18.9066H12.6562C12.7622 18.9054 12.8634 18.8625 12.9379 18.7872C13.0125 18.7118 13.0543 18.6101 13.0543 18.5042V18.4429C13.0543 18.3373 13.0123 18.2361 12.9377 18.1614C12.863 18.0868 12.7618 18.0449 12.6562 18.0449H11.5845Z",
      fill: "#78797A",
      stroke: "#78797A",
      "stroke-width": "0.4"
    })),
    name: "Support"
  }
];

// app/components/sidebar/Billing.tsx
var Billing = () => {
  return /* @__PURE__ */ import_react10.default.createElement(Body10, null, /* @__PURE__ */ import_react10.default.createElement(BarRow, null, BillingData.map((data, index) => /* @__PURE__ */ import_react10.default.createElement(BarColumn, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react10.default.createElement(BarText, null, " ", data.name)))));
};
var Body10 = import_styled_components13.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 4px 0;
  /* justify-content: space-between;
  align-items: flex-start; */
`;
var BarRow = import_styled_components13.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn = import_styled_components13.default.li`
  transition: 0.4s ease-in;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 40px;
  background: ${SendTheme.snowWhite};
  padding: 0 0 0 16px;
  transition: 0.3s ease-in-out;
  :hover {
    background: ${SendTheme.white};
  }
  svg {
    height: 24px;
    width: 24px;
  }
`;
var BarText = (0, import_styled_components13.default)(SidebarText)`
  margin: 0 8px;
`;
var Billing_default = Billing;

// app/components/sidebar/Dashboard.tsx
init_react();
var import_react11 = __toESM(require("react"));
var import_styled_components14 = __toESM(require("styled-components"));
var Dashboard = () => {
  return /* @__PURE__ */ import_react11.default.createElement(Body11, null, /* @__PURE__ */ import_react11.default.createElement(BarRow2, null, DashboardData.map((data, index) => /* @__PURE__ */ import_react11.default.createElement(BarColumn2, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react11.default.createElement(BarText2, null, " ", data.name)))), /* @__PURE__ */ import_react11.default.createElement(BarLine, null));
};
var Body11 = import_styled_components14.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 12px 0 0 0;
`;
var BarRow2 = import_styled_components14.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn2 = import_styled_components14.default.li`
  transition: 0.4s ease-in;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 40px;
  background: ${SendTheme.snowWhite};
  padding: 0 0 0 16px;
  svg {
    height: 24px;
    width: 24px;
  }
  transition: 0.3s ease-in-out;
  :hover {
    background: ${SendTheme.white};
  }
`;
var BarText2 = (0, import_styled_components14.default)(SidebarText)`
  margin: 0 8px;
`;
var BarLine = import_styled_components14.default.div`
  width: 100%;
  height: 1px;

  background: ${SendTheme.stroke};
  opacity: 0.1;
  margin: 16px 0px;
`;
var Dashboard_default = Dashboard;

// app/components/sidebar/Settings.tsx
init_react();
var import_react12 = __toESM(require("react"));
var import_styled_components15 = __toESM(require("styled-components"));
var Settings = () => {
  return /* @__PURE__ */ import_react12.default.createElement(Body12, null, /* @__PURE__ */ import_react12.default.createElement(BarRow3, null, SettingsData.map((data, index) => /* @__PURE__ */ import_react12.default.createElement(BarColumn3, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react12.default.createElement(BarText3, null, " ", data.name)))));
};
var Body12 = import_styled_components15.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 4px 0;
  /* justify-content: space-between;
  align-items: flex-start; */
`;
var BarRow3 = import_styled_components15.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn3 = import_styled_components15.default.li`
  transition: 0.4s ease-in;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 40px;
  background: ${SendTheme.snowWhite};
  padding: 0 0 0 16px;
  transition: 0.3s ease-in-out;
  :hover {
    background: ${SendTheme.white};
  }
  svg {
    height: 24px;
    width: 24px;
  }
`;
var BarText3 = (0, import_styled_components15.default)(SidebarText)`
  margin: 0 8px;
`;
var Settings_default = Settings;

// app/components/sidebar/Section.tsx
var Section = () => {
  return /* @__PURE__ */ import_react13.default.createElement(Body13, null, /* @__PURE__ */ import_react13.default.createElement(Dashboard_default, null), /* @__PURE__ */ import_react13.default.createElement(Billing_default, null), /* @__PURE__ */ import_react13.default.createElement(Settings_default, null));
};
var Body13 = import_styled_components16.default.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`;
var Section_default = Section;

// app/components/Sidebar.tsx
var Sidebar = () => {
  return /* @__PURE__ */ import_react14.default.createElement(Body14, null, /* @__PURE__ */ import_react14.default.createElement(LogoCover, null, /* @__PURE__ */ import_react14.default.createElement(Logo, {
    src: logo_default,
    alt: "Send Freight Logo"
  })), /* @__PURE__ */ import_react14.default.createElement(Section_default, null), /* @__PURE__ */ import_react14.default.createElement(Name_default, null));
};
var Body14 = import_styled_components17.default.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  z-index: 1;
  top: 0px;
  overflow: hidden;
  bottom: 0px;
  max-width: 226px;
  display: flex;
  flex-direction: column;

  background: ${SendTheme.snowWhite};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 0 0 0;
  border-right: 1px solid ${SendTheme.border};
  @media only screen and (max-width: 1500px) {
    overflow-y: scroll;
  }
`;
var LogoCover = import_styled_components17.default.div`
  height: 24px;
  width: 110px;
`;
var Logo = import_styled_components17.default.img`
  height: 24px;
  width: 110px;
  cursor: pointer;
`;
var Sidebar_default = Sidebar;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\routes\index.tsx
var meta2 = () => {
  return {
    title: "Send Freight",
    description: "Shipping"
  };
};
var Index = () => {
  const [details, setDetails] = (0, import_react15.useState)(tableData);
  const [currentpage, setCurrentPage] = (0, import_react15.useState)(1);
  const [loading, setLoading] = (0, import_react15.useState)(false);
  const [postPerPage] = (0, import_react15.useState)(6);
  const [selectedCategory, setSelectedCategory] = (0, import_react15.useState)("All");
  const filteredData = selectedCategory === "All" ? details : details.filter((data) => data.status === selectedCategory.toLowerCase());
  const changeCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setLoading(true);
  };
  const indexofLastPost = currentpage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentDetails = filteredData.slice(indexofFirstPost, indexofLastPost);
  const paginate = (number) => {
    setCurrentPage(number);
    setLoading(true);
  };
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }
  (0, import_react15.useEffect)(() => {
    setLoading(true);
  }, []);
  return /* @__PURE__ */ import_react15.default.createElement(Body15, null, /* @__PURE__ */ import_react15.default.createElement(Shell, null, " ", /* @__PURE__ */ import_react15.default.createElement(Sidebar_default, null)), /* @__PURE__ */ import_react15.default.createElement(MainContent_default, {
    loading,
    onItemSelect: changeCategory,
    selectedItem: selectedCategory,
    paginate,
    posts: currentDetails,
    totalPosts: filteredData.length,
    postPerPage,
    first: indexofFirstPost,
    last: indexofLastPost,
    currentNumber: currentpage
  }));
};
var Body15 = import_styled_components18.default.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 226px auto;
`;
var Shell = import_styled_components18.default.div`
  width: 100%;
  max-width: 226px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
`;
var routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "95fd1ff1", "entry": { "module": "/build/entry.client-GULO3BDA.js", "imports": ["/build/_shared/chunk-FM37HHYK.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-VGIG55M2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-H6IM7QRG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-95FD1FF1.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcQXVndXN0aW5lIE9naXphXFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxyZWFjdFxcc2VuZFxcYXBwXFxyb290LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVhY3RcXHNlbmRcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTWFpbkNvbnRlbnQudHN4IiwgIi4uL2FwcC9zdHlsZXMvQ29sb3JTdHlsZXMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW5jb250ZW50L0ZpbHRlci50c3giLCAiLi4vYXBwL3V0aWxzL1RhYmxlRGF0YS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvQ2F0ZWdvcmllcy50c3giLCAiLi4vYXBwL3N0eWxlcy9UZXh0U3R5bGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluY29udGVudC9QYWdpbmF0aW9uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluY29udGVudC9IZWFkZXIudHN4IiwgIi4uL2FwcC9zdHlsZXMvQnV0dG9uU3R5bGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluY29udGVudC9UYWJsZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2tlbGV0b24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW5jb250ZW50L1RhYmxlQ29udGVudC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9OYW1lLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaWRlYmFyL1NlY3Rpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvQmlsbGluZy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9EYXRhLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0Rhc2hib2FyZC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9TZXR0aW5ncy50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlYWN0XFxcXHNlbmRcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZWFjdFxcXFxzZW5kXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlYWN0XFxcXHNlbmRcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKVxuXG4gIGxldCBtYXJrdXAgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICBzaGVldC5jb2xsZWN0U3R5bGVzKFxuICAgICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgICApXG4gIClcbiAgY29uc3Qgc3R5bGVzID0gc2hlZXQuZ2V0U3R5bGVUYWdzKClcbiAgbWFya3VwID0gbWFya3VwLnJlcGxhY2UoXCJfX1NUWUxFU19fXCIsIHN0eWxlcylcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KVxufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5jc3NcIlxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiU0VORCBGUkVJR0hUXCIgfVxufVxuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfSxcblxuICAgIHtcbiAgICAgIHJlbDogXCJpY29uXCIsXG4gICAgICBocmVmOiBcIi9mYXZpY29uLnBuZ1wiLFxuICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICB9LFxuICBdXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAge3R5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiX19TVFlMRVNfX1wiIDogbnVsbH1cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSBcIn4vY29tcG9uZW50cy9NYWluQ29udGVudFwiXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL1NpZGViYXJcIlxuaW1wb3J0IHsgQ29udGVudFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvVHlwZXNcIlxuaW1wb3J0IHsgdGFibGVEYXRhIH0gZnJvbSBcIn4vdXRpbHMvVGFibGVEYXRhXCJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiU2VuZCBGcmVpZ2h0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU2hpcHBpbmdcIixcbiAgfVxufVxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGU8Q29udGVudFByb3BzW10+KHRhYmxlRGF0YSlcbiAgY29uc3QgW2N1cnJlbnRwYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBbcG9zdFBlclBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPig2KVxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiQWxsXCIpXG5cbiAgLy9maWx0ZXJlZCBkZXRhaWxzXG5cbiAgY29uc3QgZmlsdGVyZWREYXRhID1cbiAgICBzZWxlY3RlZENhdGVnb3J5ID09PSBcIkFsbFwiXG4gICAgICA/IGRldGFpbHNcbiAgICAgIDogZGV0YWlscy5maWx0ZXIoXG4gICAgICAgICAgKGRhdGE6IGFueSkgPT4gZGF0YS5zdGF0dXMgPT09IHNlbGVjdGVkQ2F0ZWdvcnkudG9Mb3dlckNhc2UoKVxuICAgICAgICApXG5cbiAgLy9jYXRlZ29yaWVzIGZpbHRlclxuXG4gIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGNhdGVnb3J5OiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KVxuICAgIHNldEN1cnJlbnRQYWdlKDEpXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICB9XG5cbiAgLy9nZXQgcGFnaW5hdGVkIHBvc3RzXG5cbiAgY29uc3QgaW5kZXhvZkxhc3RQb3N0ID0gY3VycmVudHBhZ2UgKiBwb3N0UGVyUGFnZVxuICBjb25zdCBpbmRleG9mRmlyc3RQb3N0ID0gaW5kZXhvZkxhc3RQb3N0IC0gcG9zdFBlclBhZ2VcbiAgY29uc3QgY3VycmVudERldGFpbHMgPSBmaWx0ZXJlZERhdGEuc2xpY2UoaW5kZXhvZkZpcnN0UG9zdCwgaW5kZXhvZkxhc3RQb3N0KVxuXG4gIGNvbnN0IHBhZ2luYXRlID0gKG51bWJlcjogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2UobnVtYmVyKVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgfVxuXG4gIC8vbG9hZGluZ1xuICBpZiAobG9hZGluZykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9LCAyNTAwKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxCb2R5PlxuICAgICAgPFNoZWxsPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICA8L1NoZWxsPlxuICAgICAgPE1haW5Db250ZW50XG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIG9uSXRlbVNlbGVjdD17Y2hhbmdlQ2F0ZWdvcnl9XG4gICAgICAgIHNlbGVjdGVkSXRlbT17c2VsZWN0ZWRDYXRlZ29yeX1cbiAgICAgICAgcGFnaW5hdGU9e3BhZ2luYXRlfVxuICAgICAgICBwb3N0cz17Y3VycmVudERldGFpbHN9XG4gICAgICAgIHRvdGFsUG9zdHM9e2ZpbHRlcmVkRGF0YS5sZW5ndGh9XG4gICAgICAgIHBvc3RQZXJQYWdlPXtwb3N0UGVyUGFnZX1cbiAgICAgICAgZmlyc3Q9e2luZGV4b2ZGaXJzdFBvc3R9XG4gICAgICAgIGxhc3Q9e2luZGV4b2ZMYXN0UG9zdH1cbiAgICAgICAgY3VycmVudE51bWJlcj17Y3VycmVudHBhZ2V9XG4gICAgICAvPlxuICAgIDwvQm9keT5cbiAgKVxufVxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNnB4IGF1dG87XG5gXG5jb25zdCBTaGVsbCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIyNnB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIiwgImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgU2VuZFRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQ29udGVudFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvVHlwZXNcIlxyXG5cclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi9tYWluY29udGVudC9GaWx0ZXJcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL21haW5jb250ZW50L0hlYWRlclwiXHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9tYWluY29udGVudC9UYWJsZVwiXHJcbmludGVyZmFjZSBGaWx0ZXJQcm9wcyB7XHJcbiAgcGFnaW5hdGU6IChudW1iZXI6IG51bWJlcikgPT4gdm9pZFxyXG4gIHBvc3RQZXJQYWdlOiBudW1iZXJcclxuICB0b3RhbFBvc3RzOiBudW1iZXJcclxuICBwb3N0czogQ29udGVudFByb3BzW11cclxuICBzZWxlY3RlZEl0ZW06IHN0cmluZ1xyXG4gIG9uSXRlbVNlbGVjdDogKGl0ZW06IGFueSkgPT4gdm9pZFxyXG4gIGZpcnN0OiBudW1iZXJcclxuICBsYXN0OiBudW1iZXJcclxuICBsb2FkaW5nOiBib29sZWFuXHJcbiAgY3VycmVudE51bWJlcjogbnVtYmVyXHJcbn1cclxuY29uc3QgTWFpbkNvbnRlbnQ6IEZDPEZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHBhZ2luYXRlLFxyXG4gICAgcG9zdFBlclBhZ2UsXHJcbiAgICB0b3RhbFBvc3RzLFxyXG4gICAgcG9zdHMsXHJcbiAgICBvbkl0ZW1TZWxlY3QsXHJcbiAgICBzZWxlY3RlZEl0ZW0sXHJcbiAgICBmaXJzdCxcclxuICAgIGxhc3QsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgY3VycmVudE51bWJlcixcclxuICB9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxGaWx0ZXJcclxuICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkSXRlbX1cclxuICAgICAgICBvbkl0ZW1TZWxlY3Q9e29uSXRlbVNlbGVjdH1cclxuICAgICAgICBwYWdpbmF0ZT17cGFnaW5hdGV9XHJcbiAgICAgICAgdG90YWxQb3N0cz17dG90YWxQb3N0c31cclxuICAgICAgICBwb3N0UGVyUGFnZT17cG9zdFBlclBhZ2V9XHJcbiAgICAgICAgZmlyc3Q9e2ZpcnN0fVxyXG4gICAgICAgIGxhc3Q9e2xhc3R9XHJcbiAgICAgICAgY3VycmVudE51bWJlcj17Y3VycmVudE51bWJlcn1cclxuICAgICAgLz5cclxuICAgICAgPFRhYmxlIGxvYWRpbmc9e2xvYWRpbmd9IHBvc3RzPXtwb3N0c30gLz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS53aGl0ZX07XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnRcclxuIiwgImV4cG9ydCBjb25zdCBTZW5kVGhlbWUgPSB7XHJcbiAgc21va2VXaGl0ZTogXCIjRTlFQ0YxXCIsXHJcbiAgb2ZmV2hpdGU6IFwiI0YyRjRGN1wiLFxyXG4gIHdoaXRlOiBcIiNmZmZcIixcclxuICBibGFjazogXCIjMDAwXCIsXHJcbiAgc25vd1doaXRlOiBcIiNGOUZBRkNcIixcclxuICBzdHJva2U6IFwiIzgxODY4Q1wiLFxyXG4gIGdyYXk6IFwiIzc4Nzk3QVwiLFxyXG4gIGRhcms6IFwiIzMwMzAzMFwiLFxyXG4gIGJsdWU6IFwiIzA3NDdBNlwiLFxyXG4gIGJvcmRlcjogXCIjZTRlNmVhXCIsXHJcbiAgY2F0Q29sb3I6IFwiIzczN2E5MVwiLFxyXG4gIHRhYmxlU3Ryb2tlOiBcIiNmNWY1ZjVcIixcclxuICBjYXRCRzogXCJyZ2JhKDIzMywgMjM2LCAyNDEsIDAuNilcIixcclxuICBvcmFuZ2U6IFwiI0Y3QzI0NFwiLFxyXG4gIGdyZWVuOiBcIiM1Q0M2ODVcIixcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBTZW5kVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyB0YWJsZURhdGEgfSBmcm9tIFwifi91dGlscy9UYWJsZURhdGFcIlxyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi9DYXRlZ29yaWVzXCJcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vUGFnaW5hdGlvblwiXHJcbmludGVyZmFjZSBGaWx0ZXJQcm9wcyB7XHJcbiAgcGFnaW5hdGU6IChudW1iZXI6IG51bWJlcikgPT4gdm9pZFxyXG4gIG9uSXRlbVNlbGVjdDogKGl0ZW06IGFueSkgPT4gdm9pZFxyXG4gIHBvc3RQZXJQYWdlOiBudW1iZXJcclxuICB0b3RhbFBvc3RzOiBudW1iZXJcclxuICBzZWxlY3RlZEl0ZW06IHN0cmluZ1xyXG4gIGZpcnN0OiBudW1iZXJcclxuICBsYXN0OiBudW1iZXJcclxuICBjdXJyZW50TnVtYmVyOiBudW1iZXJcclxufVxyXG5jb25zdCBGaWx0ZXI6IEZDPEZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHBhZ2luYXRlLFxyXG4gICAgcG9zdFBlclBhZ2UsXHJcbiAgICB0b3RhbFBvc3RzLFxyXG4gICAgb25JdGVtU2VsZWN0LFxyXG4gICAgc2VsZWN0ZWRJdGVtLFxyXG4gICAgZmlyc3QsXHJcbiAgICBsYXN0LFxyXG4gICAgY3VycmVudE51bWJlcixcclxuICB9ID0gcHJvcHNcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAgeyBuYW1lOiBcIkFsbFwiLCBjb3VudDogdGFibGVEYXRhLmxlbmd0aCB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBlbmRpbmdcIixcclxuICAgICAgY291bnQ6IHRhYmxlRGF0YS5maWx0ZXIoKGRhdGEpID0+IGRhdGEuc3RhdHVzID09PSBcInBlbmRpbmdcIikubGVuZ3RoLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZWFkeVwiLFxyXG4gICAgICBjb3VudDogdGFibGVEYXRhLmZpbHRlcigoZGF0YSkgPT4gZGF0YS5zdGF0dXMgPT09IFwicmVhZHlcIikubGVuZ3RoLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCb29rZWRcIixcclxuICAgICAgY291bnQ6IHRhYmxlRGF0YS5maWx0ZXIoKGRhdGEpID0+IGRhdGEuc3RhdHVzID09PSBcImJvb2tlZFwiKS5sZW5ndGgsXHJcbiAgICB9LFxyXG4gIF1cclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8Q2F0ZWdvcmllc1xyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIG9uSXRlbVNlbGVjdD17b25JdGVtU2VsZWN0fVxyXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIGZpcnN0PXtmaXJzdH1cclxuICAgICAgICAgIGxhc3Q9e2xhc3R9XHJcbiAgICAgICAgICBwYWdpbmF0ZT17cGFnaW5hdGV9XHJcbiAgICAgICAgICB0b3RhbFBvc3RzPXt0b3RhbFBvc3RzfVxyXG4gICAgICAgICAgcG9zdFBlclBhZ2U9e3Bvc3RQZXJQYWdlfVxyXG4gICAgICAgICAgY3VycmVudE51bWJlcj17Y3VycmVudE51bWJlcn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgICA8RmlsdGVyTGluZSAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gXHJcblxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIG1heC13aWR0aDogMTIwNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwcHggNDBweDtcclxuYFxyXG5cclxuY29uc3QgRmlsdGVyTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5ib3JkZXJ9O1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxyXG4iLCAiZXhwb3J0IGNvbnN0IHRhYmxlRGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwicmVhZHlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNGLTE2MkYzMThcIixcclxuICAgIGNhdGVnb3J5OiBcIlBsYWluIFNoaXJ0c1wiLFxyXG4gICAgZnJvbU5hbWU6IFwiWGlhbWVuLCBDaGluYVwiLFxyXG4gICAgZnJvbURhdGU6IFwiUmVhZHk6IDI0dGggRmViLCAyMDIxXCIsXHJcbiAgICB0b05hbWU6IFwiTGFnb3MsIE5pZ2VyaWFcIixcclxuICAgIHRvRGF0ZTogXCJFeHBpcmVzOiAxN3RoIEZlYiwgMjAyMVwiLFxyXG4gICAgYW1vdW50OiAxNDkwMDAwMCxcclxuICAgIHN0YXR1czogXCJib29rZWRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNGLTE2MkYzMThcIixcclxuICAgIGNhdGVnb3J5OiBcIlBsYWluIFNoaXJ0c1wiLFxyXG4gICAgZnJvbU5hbWU6IFwiWGlhbWVuLCBDaGluYVwiLFxyXG4gICAgZnJvbURhdGU6IFwiUmVhZHk6IDI0dGggRmViLCAyMDIxXCIsXHJcbiAgICB0b05hbWU6IFwiTGFnb3MsIE5pZ2VyaWFcIixcclxuICAgIHRvRGF0ZTogXCJFeHBpcmVzOiAxN3RoIEZlYiwgMjAyMVwiLFxyXG4gICAgYW1vdW50OiAxNDkwMDAwMCxcclxuICAgIHN0YXR1czogXCJib29rZWRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNGLTE2MkYzMThcIixcclxuICAgIGNhdGVnb3J5OiBcIlBsYWluIFNoaXJ0c1wiLFxyXG4gICAgZnJvbU5hbWU6IFwiWGlhbWVuLCBDaGluYVwiLFxyXG4gICAgZnJvbURhdGU6IFwiUmVhZHk6IDI0dGggRmViLCAyMDIxXCIsXHJcbiAgICB0b05hbWU6IFwiTGFnb3MsIE5pZ2VyaWFcIixcclxuICAgIHRvRGF0ZTogXCJFeHBpcmVzOiAxN3RoIEZlYiwgMjAyMVwiLFxyXG4gICAgYW1vdW50OiAxNDkwMDAwMCxcclxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU0YtMTYyRjMxOFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiUGxhaW4gU2hpcnRzXCIsXHJcbiAgICBmcm9tTmFtZTogXCJYaWFtZW4sIENoaW5hXCIsXHJcbiAgICBmcm9tRGF0ZTogXCJSZWFkeTogMjR0aCBGZWIsIDIwMjFcIixcclxuICAgIHRvTmFtZTogXCJMYWdvcywgTmlnZXJpYVwiLFxyXG4gICAgdG9EYXRlOiBcIkV4cGlyZXM6IDE3dGggRmViLCAyMDIxXCIsXHJcbiAgICBhbW91bnQ6IDE0OTAwMDAwLFxyXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNGLTE2MkYzMThcIixcclxuICAgIGNhdGVnb3J5OiBcIlBsYWluIFNoaXJ0c1wiLFxyXG4gICAgZnJvbU5hbWU6IFwiWGlhbWVuLCBDaGluYVwiLFxyXG4gICAgZnJvbURhdGU6IFwiUmVhZHk6IDI0dGggRmViLCAyMDIxXCIsXHJcbiAgICB0b05hbWU6IFwiTGFnb3MsIE5pZ2VyaWFcIixcclxuICAgIHRvRGF0ZTogXCJFeHBpcmVzOiAxN3RoIEZlYiwgMjAyMVwiLFxyXG4gICAgYW1vdW50OiAxNDkwMDAwMCxcclxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwiYm9va2VkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwicmVhZHlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNGLTE2MkYzMThcIixcclxuICAgIGNhdGVnb3J5OiBcIlBsYWluIFNoaXJ0c1wiLFxyXG4gICAgZnJvbU5hbWU6IFwiWGlhbWVuLCBDaGluYVwiLFxyXG4gICAgZnJvbURhdGU6IFwiUmVhZHk6IDI0dGggRmViLCAyMDIxXCIsXHJcbiAgICB0b05hbWU6IFwiTGFnb3MsIE5pZ2VyaWFcIixcclxuICAgIHRvRGF0ZTogXCJFeHBpcmVzOiAxN3RoIEZlYiwgMjAyMVwiLFxyXG4gICAgYW1vdW50OiAxNDkwMDAwMCxcclxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU0YtMTYyRjMxOFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiUGxhaW4gU2hpcnRzXCIsXHJcbiAgICBmcm9tTmFtZTogXCJYaWFtZW4sIENoaW5hXCIsXHJcbiAgICBmcm9tRGF0ZTogXCJSZWFkeTogMjR0aCBGZWIsIDIwMjFcIixcclxuICAgIHRvTmFtZTogXCJMYWdvcywgTmlnZXJpYVwiLFxyXG4gICAgdG9EYXRlOiBcIkV4cGlyZXM6IDE3dGggRmViLCAyMDIxXCIsXHJcbiAgICBhbW91bnQ6IDE0OTAwMDAwLFxyXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNGLTE2MkYzMThcIixcclxuICAgIGNhdGVnb3J5OiBcIlBsYWluIFNoaXJ0c1wiLFxyXG4gICAgZnJvbU5hbWU6IFwiWGlhbWVuLCBDaGluYVwiLFxyXG4gICAgZnJvbURhdGU6IFwiUmVhZHk6IDI0dGggRmViLCAyMDIxXCIsXHJcbiAgICB0b05hbWU6IFwiTGFnb3MsIE5pZ2VyaWFcIixcclxuICAgIHRvRGF0ZTogXCJFeHBpcmVzOiAxN3RoIEZlYiwgMjAyMVwiLFxyXG4gICAgYW1vdW50OiAxNDkwMDAwMCxcclxuICAgIHN0YXR1czogXCJyZWFkeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU0YtMTYyRjMxOFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiUGxhaW4gU2hpcnRzXCIsXHJcbiAgICBmcm9tTmFtZTogXCJYaWFtZW4sIENoaW5hXCIsXHJcbiAgICBmcm9tRGF0ZTogXCJSZWFkeTogMjR0aCBGZWIsIDIwMjFcIixcclxuICAgIHRvTmFtZTogXCJMYWdvcywgTmlnZXJpYVwiLFxyXG4gICAgdG9EYXRlOiBcIkV4cGlyZXM6IDE3dGggRmViLCAyMDIxXCIsXHJcbiAgICBhbW91bnQ6IDE0OTAwMDAwLFxyXG4gICAgc3RhdHVzOiBcInJlYWR5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwiYm9va2VkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwiYm9va2VkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU0YtMTYyRjMxOFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiUGxhaW4gU2hpcnRzXCIsXHJcbiAgICBmcm9tTmFtZTogXCJYaWFtZW4sIENoaW5hXCIsXHJcbiAgICBmcm9tRGF0ZTogXCJSZWFkeTogMjR0aCBGZWIsIDIwMjFcIixcclxuICAgIHRvTmFtZTogXCJMYWdvcywgTmlnZXJpYVwiLFxyXG4gICAgdG9EYXRlOiBcIkV4cGlyZXM6IDE3dGggRmViLCAyMDIxXCIsXHJcbiAgICBhbW91bnQ6IDE0OTAwMDAwLFxyXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNGLTE2MkYzMThcIixcclxuICAgIGNhdGVnb3J5OiBcIlBsYWluIFNoaXJ0c1wiLFxyXG4gICAgZnJvbU5hbWU6IFwiWGlhbWVuLCBDaGluYVwiLFxyXG4gICAgZnJvbURhdGU6IFwiUmVhZHk6IDI0dGggRmViLCAyMDIxXCIsXHJcbiAgICB0b05hbWU6IFwiTGFnb3MsIE5pZ2VyaWFcIixcclxuICAgIHRvRGF0ZTogXCJFeHBpcmVzOiAxN3RoIEZlYiwgMjAyMVwiLFxyXG4gICAgYW1vdW50OiAxNDkwMDAwMCxcclxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU0YtMTYyRjMxOFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiUGxhaW4gU2hpcnRzXCIsXHJcbiAgICBmcm9tTmFtZTogXCJYaWFtZW4sIENoaW5hXCIsXHJcbiAgICBmcm9tRGF0ZTogXCJSZWFkeTogMjR0aCBGZWIsIDIwMjFcIixcclxuICAgIHRvTmFtZTogXCJMYWdvcywgTmlnZXJpYVwiLFxyXG4gICAgdG9EYXRlOiBcIkV4cGlyZXM6IDE3dGggRmViLCAyMDIxXCIsXHJcbiAgICBhbW91bnQ6IDE0OTAwMDAwLFxyXG4gICAgc3RhdHVzOiBcImJvb2tlZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU0YtMTYyRjMxOFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiUGxhaW4gU2hpcnRzXCIsXHJcbiAgICBmcm9tTmFtZTogXCJYaWFtZW4sIENoaW5hXCIsXHJcbiAgICBmcm9tRGF0ZTogXCJSZWFkeTogMjR0aCBGZWIsIDIwMjFcIixcclxuICAgIHRvTmFtZTogXCJMYWdvcywgTmlnZXJpYVwiLFxyXG4gICAgdG9EYXRlOiBcIkV4cGlyZXM6IDE3dGggRmViLCAyMDIxXCIsXHJcbiAgICBhbW91bnQ6IDE0OTAwMDAwLFxyXG4gICAgc3RhdHVzOiBcInJlYWR5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU0YtMTYyRjMxOFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiUGxhaW4gU2hpcnRzXCIsXHJcbiAgICBmcm9tTmFtZTogXCJYaWFtZW4sIENoaW5hXCIsXHJcbiAgICBmcm9tRGF0ZTogXCJSZWFkeTogMjR0aCBGZWIsIDIwMjFcIixcclxuICAgIHRvTmFtZTogXCJMYWdvcywgTmlnZXJpYVwiLFxyXG4gICAgdG9EYXRlOiBcIkV4cGlyZXM6IDE3dGggRmViLCAyMDIxXCIsXHJcbiAgICBhbW91bnQ6IDE0OTAwMDAwLFxyXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNGLTE2MkYzMThcIixcclxuICAgIGNhdGVnb3J5OiBcIlBsYWluIFNoaXJ0c1wiLFxyXG4gICAgZnJvbU5hbWU6IFwiWGlhbWVuLCBDaGluYVwiLFxyXG4gICAgZnJvbURhdGU6IFwiUmVhZHk6IDI0dGggRmViLCAyMDIxXCIsXHJcbiAgICB0b05hbWU6IFwiTGFnb3MsIE5pZ2VyaWFcIixcclxuICAgIHRvRGF0ZTogXCJFeHBpcmVzOiAxN3RoIEZlYiwgMjAyMVwiLFxyXG4gICAgYW1vdW50OiAxNDkwMDAwMCxcclxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTRi0xNjJGMzE4XCIsXHJcbiAgICBjYXRlZ29yeTogXCJQbGFpbiBTaGlydHNcIixcclxuICAgIGZyb21OYW1lOiBcIlhpYW1lbiwgQ2hpbmFcIixcclxuICAgIGZyb21EYXRlOiBcIlJlYWR5OiAyNHRoIEZlYiwgMjAyMVwiLFxyXG4gICAgdG9OYW1lOiBcIkxhZ29zLCBOaWdlcmlhXCIsXHJcbiAgICB0b0RhdGU6IFwiRXhwaXJlczogMTd0aCBGZWIsIDIwMjFcIixcclxuICAgIGFtb3VudDogMTQ5MDAwMDAsXHJcbiAgICBzdGF0dXM6IFwicmVhZHlcIixcclxuICB9LFxyXG5dXHJcbiIsICJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFNlbmRUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IFNpZGViYXJUZXh0IH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuaW50ZXJmYWNlIERhdGFQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgY291bnQ6IG51bWJlclxyXG59XHJcbmludGVyZmFjZSBDYXRQcm9wcyB7XHJcbiAgb25JdGVtU2VsZWN0OiAoaXRlbTogYW55KSA9PiB2b2lkXHJcbiAgaXRlbXM/OiBzdHJpbmdcclxuICBzZWxlY3RlZEl0ZW06IHN0cmluZ1xyXG4gIGRhdGE/OiBEYXRhUHJvcHNbXVxyXG59XHJcbmNvbnN0IENhdGVnb3JpZXM6IEZDPENhdFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgb25JdGVtU2VsZWN0LCBpdGVtcywgc2VsZWN0ZWRJdGVtLCBkYXRhIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICB7ZGF0YSAmJlxyXG4gICAgICAgICAgZGF0YS5tYXAoKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnlOYW1lIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IG9uSXRlbVNlbGVjdChkYXRhLm5hbWUpfT5cclxuICAgICAgICAgICAgICA8Q2F0ZWdvcnlDb3Zlcj5cclxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeVRleHQ+e2RhdGEubmFtZX08L0NhdGVnb3J5VGV4dD5cclxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeUNvdW50PntkYXRhLmNvdW50fTwvQ2F0ZWdvcnlDb3VudD5cclxuICAgICAgICAgICAgICA8L0NhdGVnb3J5Q292ZXI+XHJcbiAgICAgICAgICAgICAge3NlbGVjdGVkSXRlbSA9PT0gZGF0YS5uYW1lICYmIDxBY3RpdmVQYW5lIC8+fVxyXG4gICAgICAgICAgICA8L0NhdGVnb3J5TmFtZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICR7U2VuZFRoZW1lLmJsdWV9O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDYXRlZ29yeU5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDAgOHB4IDAgMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuY29uc3QgQ2F0ZWdvcnlDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gXHJcbmNvbnN0IENhdGVnb3J5VGV4dCA9IHN0eWxlZChTaWRlYmFyVGV4dClgXHJcbiAgbWFyZ2luOiAwIDhweCAwIDA7XHJcbiAgY29sb3I6ICR7U2VuZFRoZW1lLnN0cm9rZX07XHJcbmBcclxuY29uc3QgQ2F0ZWdvcnlDb3VudCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5jYXRCR307XHJcbiAgY29sb3I6ICR7U2VuZFRoZW1lLmNhdENvbG9yfTtcclxuYFxyXG5cclxuY29uc3QgQWN0aXZlUGFuZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGhlaWdodDogM3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7U2VuZFRoZW1lLmJsdWV9O1xyXG4gIG1hcmdpbjogOHB4IDAgMCAwO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXNcclxuIiwgImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuZXhwb3J0IGNvbnN0IEhlYWRlcjEgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcclxuXHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIyID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNpZGViYXJUZXh0ID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcHRpb25MYXJnZSA9IHN0eWxlZC5oNmBcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xyXG5cclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuYFxyXG5leHBvcnQgY29uc3QgQ2FwdGlvblNtYWxsID0gc3R5bGVkLmg2YFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbmBcclxuIiwgImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgU2VuZFRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQ2FwdGlvbkxhcmdlLCBTaWRlYmFyVGV4dCB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmludGVyZmFjZSBQYWdpbmF0aW9uUHJvcHMge1xyXG4gIHBvc3RQZXJQYWdlOiBudW1iZXJcclxuICB0b3RhbFBvc3RzOiBudW1iZXJcclxuICBwYWdpbmF0ZTogKG51bWJlcjogbnVtYmVyKSA9PiB2b2lkXHJcbiAgZmlyc3Q6IG51bWJlclxyXG4gIGxhc3Q6IG51bWJlclxyXG4gIGN1cnJlbnROdW1iZXI6IG51bWJlclxyXG59XHJcbmNvbnN0IFBhZ2luYXRpb246IEZDPFBhZ2luYXRpb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBvc3RQZXJQYWdlLCB0b3RhbFBvc3RzLCBmaXJzdCwgbGFzdCwgcGFnaW5hdGUsIGN1cnJlbnROdW1iZXIgfSA9XHJcbiAgICBwcm9wc1xyXG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gW11cclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBNYXRoLmNlaWwodG90YWxQb3N0cyAvIHBvc3RQZXJQYWdlKTsgaSsrKSB7XHJcbiAgICBwYWdlTnVtYmVycy5wdXNoKGkpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxQYWdlVGV4dD5cclxuICAgICAgICAgIFNob3dpbmcge2ZpcnN0ICsgMX0gLSB7bGFzdH0gb2Yge3RvdGFsUG9zdHN9IHJlc3VsdHNcclxuICAgICAgICA8L1BhZ2VUZXh0PlxyXG5cclxuICAgICAgICA8Q291bnRlcj5cclxuICAgICAgICAgIHtwYWdlTnVtYmVycy5tYXAoKG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICA8Q291bnROdW1iZXJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2N1cnJlbnROdW1iZXIgPT09IG51bWJlciAmJiBcImFjdGl2ZVwifWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcGFnaW5hdGUobnVtYmVyKX1cclxuICAgICAgICAgICAgICBrZXk9e251bWJlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtudW1iZXJ9XHJcbiAgICAgICAgICAgIDwvQ291bnROdW1iZXI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0NvdW50ZXI+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgUGFnZVRleHQgPSBzdHlsZWQoQ2FwdGlvbkxhcmdlKWBcclxuICBjb2xvcjogJHtTZW5kVGhlbWUuc3Ryb2tlfTtcclxuYFxyXG5jb25zdCBDb3VudGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICR7U2VuZFRoZW1lLmRhcmt9O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb3VudE51bWJlciA9IHN0eWxlZChTaWRlYmFyVGV4dClgXHJcbiAgY29sb3I6ICR7U2VuZFRoZW1lLmRhcmt9O1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAke1NlbmRUaGVtZS5ncmF5fTtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBNYWluQnV0dG9uIH0gZnJvbSBcIn4vc3R5bGVzL0J1dHRvblN0eWxlc1wiXHJcbmltcG9ydCB7IFNlbmRUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IEhlYWRlcjEgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPEhlYWRlclRleHRXcmFwPlxyXG4gICAgICAgICAgPEhlYWRlclRleHQ+UXVvdGVzPC9IZWFkZXJUZXh0PlxyXG4gICAgICAgIDwvSGVhZGVyVGV4dFdyYXA+XHJcbiAgICAgICAgPEhlYWRlckJ1dHRvbldyYXA+XHJcbiAgICAgICAgICA8SGVhZGVyQnV0dG9uPkNyZWF0ZSBOZXc8L0hlYWRlckJ1dHRvbj5cclxuICAgICAgICA8L0hlYWRlckJ1dHRvbldyYXA+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDBweCA0MHB4O1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgbWF4LXdpZHRoOiAxMjA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gXHJcbmNvbnN0IEhlYWRlclRleHRXcmFwID0gc3R5bGVkKEhlYWRlcjEpYFxyXG4gIGNvbG9yOiAke1NlbmRUaGVtZS5kYXJrfTtcclxuYFxyXG5jb25zdCBIZWFkZXJUZXh0ID0gc3R5bGVkLmRpdmBgXHJcbmNvbnN0IEhlYWRlckJ1dHRvbldyYXAgPSBzdHlsZWQuZGl2YGBcclxuY29uc3QgSGVhZGVyQnV0dG9uID0gc3R5bGVkKE1haW5CdXR0b24pYGBcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsICJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFNlbmRUaGVtZSB9IGZyb20gXCIuL0NvbG9yU3R5bGVzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgbWF4LXdpZHRoOiAxMTlweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTJweCAxNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICR7U2VuZFRoZW1lLndoaXRlfTtcclxuICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5ibHVlfTtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuIiwgImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IENvbnRlbnRQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL1R5cGVzXCJcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gXCIuLi9Ta2VsZXRvblwiXHJcbmltcG9ydCBUYWJsZUNvbnRlbnQgZnJvbSBcIi4vVGFibGVDb250ZW50XCJcclxuXHJcbmludGVyZmFjZSBUYWJsZVByb3BzIHtcclxuICBwb3N0czogQ29udGVudFByb3BzW11cclxuICBsb2FkaW5nOiBib29sZWFuXHJcbn1cclxuY29uc3QgVGFibGU6IEZDPFRhYmxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwb3N0cywgbG9hZGluZyB9ID0gcHJvcHNcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8U2tlbGV0b25Db3Zlcj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgIFsxLCAyLCAzLCA0LCA1LCA2XS5tYXAoKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBrZXk9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1NrZWxldG9uQ292ZXI+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7cG9zdHMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17cG9zdC5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZyb21OYW1lPXtwb3N0LmZyb21OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZnJvbURhdGU9e3Bvc3QuZnJvbURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b05hbWU9e3Bvc3QudG9OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdG9EYXRlPXtwb3N0LnRvRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cG9zdC5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e3Bvc3Quc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD5ObyBpdGVtIGluIHNlbGVjdGVkIHN0YXR1czwvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiAxMjA2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbmBcclxuY29uc3QgVGFibGVSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5cclxuY29uc3QgU2tlbGV0b25Db3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDhweCAyNHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmNvbnN0IFNrZWxldG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPFNoaW1tZXI+XHJcbiAgICAgICAgPFNoaW1tZXJIYWxmIC8+XHJcbiAgICAgIDwvU2hpbW1lcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgcGFkZGluZzogOHB4IDQwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuY29uc3QgYW5pbWF0aW9uTG9hZGluZyA9IGtleWZyYW1lc2BcclxuMCV7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7XHJcbn1cclxuXHJcbjUwJXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjAlKTtcclxufVxyXG4xMDAle1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MCUpO1xyXG59XHJcbmBcclxuXHJcbmNvbnN0IFNoaW1tZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbkxvYWRpbmd9IDEuNXMgaW5maW5pdGU7XHJcbmBcclxuXHJcbmNvbnN0IFNoaW1tZXJIYWxmID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHNrZXdYKC0yMGRlZyk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG5gXHJcbmNvbnN0IEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbmBcclxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuYFxyXG5jb25zdCBTbWFsbFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBTa2VsZXRvblxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBTZW5kVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBDYXB0aW9uU21hbGwsIEhlYWRlcjIsIFNpZGViYXJUZXh0IH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5pbXBvcnQgeyBDb250ZW50UHJvcHMgfSBmcm9tIFwifi90eXBlcy9UeXBlc1wiXHJcbmludGVyZmFjZSBUYWJsZVByb3BzIHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBjYXRlZ29yeTogc3RyaW5nXHJcbiAgZnJvbU5hbWU6IHN0cmluZ1xyXG4gIGZyb21EYXRlOiBzdHJpbmdcclxuICB0b05hbWU6IHN0cmluZ1xyXG4gIHRvRGF0ZTogc3RyaW5nXHJcbiAgYW1vdW50OiBudW1iZXJcclxuICBzdGF0dXM6IHN0cmluZ1xyXG59XHJcbmNvbnN0IFRhYmxlQ29udGVudDogRkM8VGFibGVQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGNhdGVnb3J5LCBmcm9tTmFtZSwgZnJvbURhdGUsIHRvTmFtZSwgdG9EYXRlLCBhbW91bnQsIHN0YXR1cyB9ID1cclxuICAgIHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8SW1wb3J0PlxyXG4gICAgICAgIDxOYW1lUm93PlxyXG4gICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICA8SWNvbj5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjM2XCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMyXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzYgMzJcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk03Ljg5ODA2IDIxLjYwOTZDOC4wMTM4MSAyMS44NzEzIDguMjQwNDEgMjIuMDgxIDguNTI3OTkgMjIuMTkyNUM4LjgxNTU4IDIyLjMwMzkgOS4xNDA1OSAyMi4zMDggOS40MzE1NSAyMi4yMDM5QzkuNzIyNSAyMi4wOTk3IDkuOTU1NTUgMjEuODk1OSAxMC4wNzk0IDIxLjYzNzJDMTAuMjAzMyAyMS4zNzg0IDEwLjIwNzkgMjEuMDg2IDEwLjA5MjEgMjAuODI0M0w4Ljc3MDk3IDE3LjgzMTVMMTYuNjAzNiAxNi4yNzE1VjIxLjMxMjRDMTYuNjAzNiAyMS41OTM5IDE2LjcyNzggMjEuODYzOCAxNi45NDkxIDIyLjA2MjlDMTcuMTcwMyAyMi4yNjE5IDE3LjQ3MDMgMjIuMzczNyAxNy43ODMyIDIyLjM3MzdDMTguMDk2IDIyLjM3MzcgMTguMzk2IDIyLjI2MTkgMTguNjE3MyAyMi4wNjI5QzE4LjgzODUgMjEuODYzOCAxOC45NjI4IDIxLjU5MzkgMTguOTYyOCAyMS4zMTI0VjE2LjI3MTVMMjYuNzk1MyAxNy44MzE1TDI1LjQ3NDIgMjAuODI0M0MyNS40MTY3IDIwLjk1MzkgMjUuMzg4MiAyMS4wOTI0IDI1LjM5MDMgMjEuMjMxOUMyNS4zOTI1IDIxLjM3MTQgMjUuNDI1MSAyMS41MDkyIDI1LjQ4NjUgMjEuNjM3M0MyNS41NDc4IDIxLjc2NTUgMjUuNjM2NyAyMS44ODE1IDI1Ljc0NzkgMjEuOTc4N0MyNS44NTkyIDIyLjA3NTkgMjUuOTkwNiAyMi4xNTI0IDI2LjEzNDggMjIuMjAzOUMyNi4yNzM3IDIyLjI1MzMgMjYuNDIxOCAyMi4yNzg1IDI2LjU3MTIgMjIuMjc4MkMyNi44MDc1IDIyLjI3ODQgMjcuMDM4NCAyMi4yMTQ4IDI3LjIzMzkgMjIuMDk1NUMyNy40Mjk1IDIxLjk3NjMgMjcuNTgwOCAyMS44MDcgMjcuNjY4MyAyMS42MDk2TDI5LjQ5NjYgMTcuNDYwMUMyOS41NTk0IDE3LjMxNjYgMjkuNTg2NiAxNy4xNjI1IDI5LjU3NjUgMTcuMDA4NUMyOS41NjYzIDE2Ljg1NDUgMjkuNTE4OSAxNi43MDQ0IDI5LjQzNzcgMTYuNTY4NkMyOS4zNTg4IDE2LjQzMzMgMjkuMjQ4NSAxNi4zMTQ5IDI5LjExNDEgMTYuMjIxNUMyOC45Nzk4IDE2LjEyODEgMjguODI0NiAxNi4wNjE5IDI4LjY1OTEgMTYuMDI3NEwyNC44NjA4IDE1LjI3MzlWMTAuNjk5OUMyNC44NjA4IDEwLjQxODQgMjQuNzM2NSAxMC4xNDg1IDI0LjUxNTMgOS45NDk0N0MyNC4yOTQxIDkuNzUwNDQgMjMuOTk0IDkuNjM4NjMgMjMuNjgxMiA5LjYzODYzSDIxLjMyMlY2LjQ1NDg3QzIxLjMyMiA2LjE3MzQxIDIxLjE5NzcgNS45MDM0NyAyMC45NzY1IDUuNzA0NDVDMjAuNzU1MyA1LjUwNTQzIDIwLjQ1NTIgNS4zOTM2MiAyMC4xNDI0IDUuMzkzNjJIMTUuNDIzOUMxNS4xMTExIDUuMzkzNjIgMTQuODExMSA1LjUwNTQzIDE0LjU4OTggNS43MDQ0NUMxNC4zNjg2IDUuOTAzNDcgMTQuMjQ0MyA2LjE3MzQxIDE0LjI0NDMgNi40NTQ4N1Y5LjYzODYzSDExLjg4NTFDMTEuNTcyMyA5LjYzODYzIDExLjI3MjIgOS43NTA0NCAxMS4wNTEgOS45NDk0N0MxMC44Mjk4IDEwLjE0ODUgMTAuNzA1NSAxMC40MTg0IDEwLjcwNTUgMTAuNjk5OVYxNS4yNzM5TDYuOTA3MTkgMTYuMDA2MkM2Ljc0MTc2IDE2LjA0MDYgNi41ODY1NyAxNi4xMDY5IDYuNDUyMiAxNi4yMDAzQzYuMzE3ODQgMTYuMjkzNyA2LjIwNzQ3IDE2LjQxMjEgNi4xMjg2NSAxNi41NDc0QzYuMDQ3NDEgMTYuNjgzMiA2LjAwMDA1IDE2LjgzMzMgNS45ODk4NiAxNi45ODczQzUuOTc5NjcgMTcuMTQxMiA2LjAwNjkxIDE3LjI5NTMgNi4wNjk2NyAxNy40Mzg5TDcuODk4MDYgMjEuNjA5NlpNMTYuNjAzNiA3LjUxNjEySDE4Ljk2MjhWOS42Mzg2M0gxNi42MDM2VjcuNTE2MTJaTTEzLjA2NDcgMTEuNzYxMUgyMi41MDE2VjE0Ljc5NjNMMTguMDQyNyAxMy44ODM2SDE3LjUyMzZMMTMuMDY0NyAxNC43OTYzVjExLjc2MTFaTTI4LjA1NzUgMjMuNzMyMUMyNy42NDM2IDIzLjg0NjIgMjcuMjQ3MyAyNC4wMDY2IDI2Ljg3NzkgMjQuMjA5N0MyNi41MDIxIDI0LjQwNzQgMjYuMDc0NyAyNC41MTE2IDI1LjYzOTMgMjQuNTExNkMyNS4yMDQgMjQuNTExNiAyNC43NzY1IDI0LjQwNzQgMjQuNDAwOCAyNC4yMDk3QzIzLjU4MzYgMjMuNzk0OSAyMi42NjEzIDIzLjU3NyAyMS43MjMgMjMuNTc3QzIwLjc4NDggMjMuNTc3IDE5Ljg2MjUgMjMuNzk0OSAxOS4wNDUzIDI0LjIwOTdDMTguNjY0NCAyNC40MDUxIDE4LjIzMzUgMjQuNTA3OCAxNy43OTUgMjQuNTA3OEMxNy4zNTY0IDI0LjUwNzggMTYuOTI1NSAyNC40MDUxIDE2LjU0NDYgMjQuMjA5N0MxNS43MjY3IDIzLjc5NjkgMTQuODA0NiAyMy41ODAxIDEzLjg2NjkgMjMuNTgwMUMxMi45MjkxIDIzLjU4MDEgMTIuMDA3IDIzLjc5NjkgMTEuMTg5MiAyNC4yMDk3QzEwLjgxMzQgMjQuNDA3NCAxMC4zODU5IDI0LjUxMTYgOS45NTA1NyAyNC41MTE2QzkuNTE1MjUgMjQuNTExNiA5LjA4Nzc3IDI0LjQwNzQgOC43MTE5OSAyNC4yMDk3QzguMzQyNTcgMjQuMDA2NiA3Ljk0NjI3IDIzLjg0NjIgNy41MzIzOCAyMy43MzIxQzcuMzc1NDIgMjMuNjgxOSA3LjIwODQzIDIzLjY2MjIgNy4wNDIzOSAyMy42NzQyQzYuODc2MzQgMjMuNjg2MiA2LjcxNTAyIDIzLjcyOTggNi41NjkwNCAyMy44MDJDNi40MjMwNSAyMy44NzQyIDYuMjk1NzIgMjMuOTczNCA2LjE5NTQxIDI0LjA5M0M2LjA5NTExIDI0LjIxMjcgNi4wMjQxMSAyNC4zNTAxIDUuOTg3MSAyNC40OTYyQzUuODk5MDMgMjQuNzY1IDUuOTMyNzEgMjUuMDU0MiA2LjA4MDc3IDI1LjMwMDdDNi4yMjg4NCAyNS41NDczIDYuNDc5MjcgMjUuNzMxMSA2Ljc3NzQzIDI1LjgxMjFDNy4wMTQ5NiAyNS44NyA3LjI0MTU4IDI1Ljk1OTUgNy40NDk4MSAyNi4wNzc1QzguMTY1NDggMjYuNDU1MyA4Ljk3OTI1IDI2LjY1NjYgOS44MDkwMiAyNi42NjEyQzEwLjY3MDggMjYuNjYxMyAxMS41MTc0IDI2LjQ1NjMgMTIuMjYyNiAyNi4wNjY4QzEyLjcyNSAyNS44Mzc0IDEzLjI0NDQgMjUuNzE3IDEzLjc3MjUgMjUuNzE3QzE0LjMwMDYgMjUuNzE3IDE0LjgyIDI1LjgzNzQgMTUuMjgyNCAyNi4wNjY4QzE2LjAyMjQgMjYuNDQ3NSAxNi44NiAyNi42NDc4IDE3LjcxMjQgMjYuNjQ3OEMxOC41NjQ4IDI2LjY0NzggMTkuNDAyNCAyNi40NDc1IDIwLjE0MjQgMjYuMDY2OEMyMC42MDQ3IDI1LjgzNzQgMjEuMTI0MiAyNS43MTcgMjEuNjUyMyAyNS43MTdDMjIuMTgwMyAyNS43MTcgMjIuNjk5OCAyNS44Mzc0IDIzLjE2MjIgMjYuMDY2OEMyMy44OTMzIDI2LjQ1OTQgMjQuNzI4OSAyNi42NjY3IDI1LjU4MDQgMjYuNjY2N0MyNi40MzE4IDI2LjY2NjcgMjcuMjY3NCAyNi40NTk0IDI3Ljk5ODUgMjYuMDY2OEMyOC4yMDY4IDI1Ljk0ODkgMjguNDMzNCAyNS44NTk0IDI4LjY3MDkgMjUuODAxNUMyOC44Mjc5IDI1Ljc3MyAyOC45NzY4IDI1LjcxNTkgMjkuMTA4NSAyNS42MzM5QzI5LjI0MDEgMjUuNTUxOSAyOS4zNTE5IDI1LjQ0NjYgMjkuNDM2OSAyNS4zMjQ1QzI5LjUyMTkgMjUuMjAyMyAyOS41NzgzIDI1LjA2NTkgMjkuNjAyOCAyNC45MjM1QzI5LjYyNzMgMjQuNzgxMSAyOS42MTkyIDI0LjYzNTcgMjkuNTc5MiAyNC40OTYyQzI5LjU0MTcgMjQuMzUyNiAyOS40NzE0IDI0LjIxNzYgMjkuMzcyNiAyNC4wOTk4QzI5LjI3MzkgMjMuOTgyIDI5LjE0ODkgMjMuODg0IDI5LjAwNTggMjMuODEyMUMyOC44NjI2IDIzLjc0MDIgMjguNzA0MyAyMy42OTYgMjguNTQxIDIzLjY4MjJDMjguMzc3NyAyMy42Njg0IDI4LjIxMzEgMjMuNjg1NCAyOC4wNTc1IDIzLjczMjFaXCJcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiM4MTg2OENcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9JY29uPlxyXG4gICAgICAgICAgICA8TmFtZT57bmFtZX08L05hbWU+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB3aWR0aD1cIjVcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjRcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNSA0XCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjIuNzIwNzJcIiBjeT1cIjJcIiByeD1cIjIuMjIzMDRcIiByeT1cIjJcIiBmaWxsPVwiIzMwMzAzMFwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgICAgPENhdD57Y2F0ZWdvcnl9PC9DYXQ+XHJcbiAgICAgICAgICA8L1RpdGxlPlxyXG4gICAgICAgICAgPEltcG9ydFRhZz5JTVBPUlQ8L0ltcG9ydFRhZz5cclxuICAgICAgICA8L05hbWVSb3c+XHJcbiAgICAgICAgPExvY2F0aW9uUm93PlxyXG4gICAgICAgICAgPEZyb21Mb2NhdGlvbj5cclxuICAgICAgICAgICAgPEZyb21UZXh0Pntmcm9tTmFtZX08L0Zyb21UZXh0PlxyXG4gICAgICAgICAgICA8RnJvbURhdGU+e2Zyb21EYXRlfTwvRnJvbURhdGU+XHJcbiAgICAgICAgICA8L0Zyb21Mb2NhdGlvbj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCIxN1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjhcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE3IDhcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNMTUuOTE0OCA0LjM1MzU1QzE2LjExMDEgNC4xNTgyOSAxNi4xMTAxIDMuODQxNzEgMTUuOTE0OCAzLjY0NjQ1TDEyLjczMjkgMC40NjQ0N0MxMi41Mzc2IDAuMjY5MjA4IDEyLjIyMSAwLjI2OTIwOCAxMi4wMjU4IDAuNDY0NDdDMTEuODMwNSAwLjY1OTczMiAxMS44MzA1IDAuOTc2MzE1IDEyLjAyNTggMS4xNzE1N0wxNC44NTQyIDRMMTIuMDI1OCA2LjgyODQzQzExLjgzMDUgNy4wMjM2OSAxMS44MzA1IDcuMzQwMjcgMTIuMDI1OCA3LjUzNTUzQzEyLjIyMSA3LjczMDggMTIuNTM3NiA3LjczMDggMTIuNzMyOSA3LjUzNTUzTDE1LjkxNDggNC4zNTM1NVpNMCA0LjVIMTUuNTYxM1YzLjVIMFY0LjVaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgPEZyb21Mb2NhdGlvbj5cclxuICAgICAgICAgICAgPEZyb21UZXh0Pnt0b05hbWV9PC9Gcm9tVGV4dD5cclxuICAgICAgICAgICAgPEZyb21EYXRlPnt0b0RhdGV9PC9Gcm9tRGF0ZT5cclxuICAgICAgICAgIDwvRnJvbUxvY2F0aW9uPlxyXG4gICAgICAgIDwvTG9jYXRpb25Sb3c+XHJcbiAgICAgICAgPEFtb3VudFJvdz5cclxuICAgICAgICAgIDxBbW91bnRUZXh0PlxyXG4gICAgICAgICAgICAmIzgzNTg7e051bWJlcihwYXJzZUZsb2F0KGAke2Ftb3VudH1gKS50b0ZpeGVkKDMpKS50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgICAgPC9BbW91bnRUZXh0PlxyXG4gICAgICAgIDwvQW1vdW50Um93PlxyXG4gICAgICAgIDxTdGF0dXNSb3c+XHJcbiAgICAgICAgICB7c3RhdHVzID09PSBcInBlbmRpbmdcIiAmJiAoXHJcbiAgICAgICAgICAgIDxTdGF0dXNUZXh0IGNsYXNzTmFtZT1cInBlbmRpbmdcIj57c3RhdHVzfTwvU3RhdHVzVGV4dD5cclxuICAgICAgICAgICl9e1wiIFwifVxyXG4gICAgICAgICAge3N0YXR1cyA9PT0gXCJib29rZWRcIiAmJiAoXHJcbiAgICAgICAgICAgIDxTdGF0dXNUZXh0IGNsYXNzTmFtZT1cImJvb2tlZFwiPntzdGF0dXN9PC9TdGF0dXNUZXh0PlxyXG4gICAgICAgICAgKX17XCIgXCJ9XHJcbiAgICAgICAgICB7c3RhdHVzID09PSBcInJlYWR5XCIgJiYgKFxyXG4gICAgICAgICAgICA8U3RhdHVzVGV4dCBjbGFzc05hbWU9XCJyZWFkeVwiPntzdGF0dXN9PC9TdGF0dXNUZXh0PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1N0YXR1c1Jvdz5cclxuICAgICAgPC9JbXBvcnQ+XHJcbiAgICAgIDxUYWJsZUxpbmUgLz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc25vd1doaXRlfTtcclxuICB9XHJcbmBcclxuY29uc3QgSW1wb3J0ID0gc3R5bGVkLmRpdmBcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xyXG4gIHBhZGRpbmc6IDhweCA0MHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDFmciAwLjVmcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgZ3JpZC1nYXA6IDE2cHg7XHJcbmBcclxuY29uc3QgVGFibGVMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUudGFibGVTdHJva2V9O1xyXG5gXHJcblxyXG5jb25zdCBOYW1lUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuY29uc3QgSW1wb3J0VGFnID0gc3R5bGVkKENhcHRpb25TbWFsbClgXHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiA2M3B4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7U2VuZFRoZW1lLnN0cm9rZX07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtTZW5kVGhlbWUuc3Ryb2tlfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYFxyXG5jb25zdCBJY29uID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuYFxyXG5jb25zdCBOYW1lID0gc3R5bGVkKEhlYWRlcjIpYFxyXG4gIGNvbG9yOiAke1NlbmRUaGVtZS5ibHVlfTtcclxuYFxyXG5jb25zdCBDYXQgPSBzdHlsZWQoU2lkZWJhclRleHQpYFxyXG4gIGNvbG9yOiAke1NlbmRUaGVtZS5kYXJrfTtcclxuYFxyXG5cclxuY29uc3QgTG9jYXRpb25Sb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYFxyXG5jb25zdCBGcm9tTG9jYXRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBGcm9tVGV4dCA9IHN0eWxlZChIZWFkZXIyKWBcclxuICBjb2xvcjogJHtTZW5kVGhlbWUuZGFya307XHJcbmBcclxuY29uc3QgRnJvbURhdGUgPSBzdHlsZWQoU2lkZWJhclRleHQpYFxyXG4gIGNvbG9yOiAke1NlbmRUaGVtZS5zdHJva2V9O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbmBcclxuY29uc3QgQW1vdW50Um93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBBbW91bnRUZXh0ID0gc3R5bGVkKEhlYWRlcjIpYFxyXG4gIGNvbG9yOiAke1NlbmRUaGVtZS5kYXJrfTtcclxuYFxyXG5jb25zdCBTdGF0dXNSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnBlbmRpbmcge1xyXG4gICAgY29sb3I6ICR7U2VuZFRoZW1lLm9yYW5nZX07XHJcbiAgfVxyXG4gIC5yZWFkeSB7XHJcbiAgICBjb2xvcjogJHtTZW5kVGhlbWUuZ3JlZW59O1xyXG4gIH1cclxuICAuYm9va2VkIHtcclxuICAgIGNvbG9yOiAke1NlbmRUaGVtZS5ncmF5fTtcclxuICB9XHJcbmBcclxuY29uc3QgU3RhdHVzVGV4dCA9IHN0eWxlZChTaWRlYmFyVGV4dClgXHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29udGVudFxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgU2VuZFRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IE5hbWUgZnJvbSBcIi4vc2lkZWJhci9OYW1lXCJcclxuaW1wb3J0IGxvZ28gZnJvbSBcIn4vYXNzZXRzL2xvZ28uc3ZnXCJcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vc2lkZWJhci9TZWN0aW9uXCJcclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxMb2dvQ292ZXI+XHJcbiAgICAgICAgPExvZ28gc3JjPXtsb2dvfSBhbHQ9XCJTZW5kIEZyZWlnaHQgTG9nb1wiIC8+XHJcbiAgICAgIDwvTG9nb0NvdmVyPlxyXG4gICAgICA8U2VjdGlvbiAvPlxyXG4gICAgICA8TmFtZSAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIG1heC13aWR0aDogMjI2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5zbm93V2hpdGV9O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAxNnB4IDAgMCAwO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7U2VuZFRoZW1lLmJvcmRlcn07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbmBcclxuY29uc3QgTG9nb0NvdmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmltZ2BcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBTZW5kVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBDYXB0aW9uTGFyZ2UsIENhcHRpb25TbWFsbCB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IE5hbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPE5hbWVXcmFwPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjIyXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIyIDEyXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTUuMTEzNDQgMTEuNTQ1NEMzLjkxMTc2IDExLjU0NTQgMi45MjU3NyAxMS4yMDY1IDIuMTU1NDYgMTAuNTI4NkMxLjM4NTE1IDkuODUwNzMgMSA4Ljk0MTc3IDEgNy44MDE3MVYwLjU0NTQxSDMuMTEwNjRWNy42MzIyNUMzLjExMDY0IDguMjA3NDEgMy4yNzQ5OCA4LjY1OTMyIDMuNjAzNjQgOC45ODc5OUMzLjk0MjU4IDkuMzA2MzggNC40NDU4NCA5LjQ2NTU4IDUuMTEzNDQgOS40NjU1OEM1Ljc4MTA1IDkuNDY1NTggNi4yNzkxOCA5LjMwNjM4IDYuNjA3ODQgOC45ODc5OUM2Ljk0Njc4IDguNjU5MzIgNy4xMTYyNSA4LjIwNzQxIDcuMTE2MjUgNy42MzIyNVYwLjU0NTQxSDkuMjQyM1Y3LjgwMTcxQzkuMjQyMyA4Ljk0MTc3IDguODU3MTQgOS44NTA3MyA4LjA4NjgzIDEwLjUyODZDNy4zMTY1MyAxMS4yMDY1IDYuMzI1NCAxMS41NDU0IDUuMTEzNDQgMTEuNTQ1NFpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk0xNi42Nzg1IDUuNzgzNTFMMjAuODIyOCAxMS4zMjk3SDE4LjM3MzJMMTQuNTIxNiA2LjI3NjVWMTEuMzI5N0gxMi4zOTU2VjAuNTQ1NDFIMTQuNTIxNlY1LjMwNTkxTDE4LjIxOTEgMC41NDU0MUgyMC42Njg3TDE2LjY3ODUgNS43ODM1MVpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk01LjExMzQ0IDExLjU0NTRDMy45MTE3NiAxMS41NDU0IDIuOTI1NzcgMTEuMjA2NSAyLjE1NTQ2IDEwLjUyODZDMS4zODUxNSA5Ljg1MDczIDEgOC45NDE3NyAxIDcuODAxNzFWMC41NDU0MUgzLjExMDY0VjcuNjMyMjVDMy4xMTA2NCA4LjIwNzQxIDMuMjc0OTggOC42NTkzMiAzLjYwMzY0IDguOTg3OTlDMy45NDI1OCA5LjMwNjM4IDQuNDQ1ODQgOS40NjU1OCA1LjExMzQ0IDkuNDY1NThDNS43ODEwNSA5LjQ2NTU4IDYuMjc5MTggOS4zMDYzOCA2LjYwNzg0IDguOTg3OTlDNi45NDY3OCA4LjY1OTMyIDcuMTE2MjUgOC4yMDc0MSA3LjExNjI1IDcuNjMyMjVWMC41NDU0MUg5LjI0MjNWNy44MDE3MUM5LjI0MjMgOC45NDE3NyA4Ljg1NzE0IDkuODUwNzMgOC4wODY4MyAxMC41Mjg2QzcuMzE2NTMgMTEuMjA2NSA2LjMyNTQgMTEuNTQ1NCA1LjExMzQ0IDExLjU0NTRaXCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMC41XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTE2LjY3ODUgNS43ODM1MUwyMC44MjI4IDExLjMyOTdIMTguMzczMkwxNC41MjE2IDYuMjc2NVYxMS4zMjk3SDEyLjM5NTZWMC41NDU0MUgxNC41MjE2VjUuMzA1OTFMMTguMjE5MSAwLjU0NTQxSDIwLjY2ODdMMTYuNjc4NSA1Ljc4MzUxWlwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjAuNVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L05hbWVXcmFwPlxyXG4gICAgICAgIDxOYW1lVGV4dD5cclxuICAgICAgICAgIDxOYW1lSGVhZGVyPk1hdGkgSW5kdXN0cmllczwvTmFtZUhlYWRlcj5cclxuICAgICAgICAgIDxOYW1lRW1haWw+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86TGFucmVtYXRpQGdtYWlsLmNvbVwiPkxhbnJlbWF0aUBnbWFpbC5jb208L2E+XHJcbiAgICAgICAgICA8L05hbWVFbWFpbD5cclxuICAgICAgICA8L05hbWVUZXh0PlxyXG4gICAgICAgIDxOYW1lSWNvbj5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDAuNSlcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCIjRjJGNEY3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTggMTAuNUwxMiAxNC41TDE2IDEwLjVcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cIiNBMEFFQzBcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMzMzMzNcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvTmFtZUljb24+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNjlweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUub2ZmV2hpdGV9O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxOTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBOYW1lV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuZGFya307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5gXHJcbmNvbnN0IE5hbWVUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwIDhweDtcclxuYFxyXG5jb25zdCBOYW1lSGVhZGVyID0gc3R5bGVkKENhcHRpb25MYXJnZSlgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogJHtTZW5kVGhlbWUuZGFya307XHJcbmBcclxuY29uc3QgTmFtZUVtYWlsID0gc3R5bGVkKENhcHRpb25TbWFsbClgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHtTZW5kVGhlbWUuZ3JheX07XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBOYW1lSWNvbiA9IHN0eWxlZC5zcGFuYFxyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgTmFtZVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IEJpbGxpbmcgZnJvbSBcIi4vQmlsbGluZ1wiXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCJcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCJcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8RGFzaGJvYXJkIC8+XHJcbiAgICAgIDxCaWxsaW5nIC8+XHJcbiAgICAgIDxTZXR0aW5ncyAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBTZW5kVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBTaWRlYmFyVGV4dCB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmltcG9ydCB7IEJpbGxpbmdEYXRhIH0gZnJvbSBcIi4vRGF0YVwiXHJcblxyXG5jb25zdCBCaWxsaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPEJhclJvdz5cclxuICAgICAgICB7QmlsbGluZ0RhdGEubWFwKChkYXRhOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcclxuICAgICAgICAgIDxCYXJDb2x1bW4gY2xhc3NOYW1lPXtkYXRhLmNsYXNzbmFtZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHtkYXRhLmljb259XHJcbiAgICAgICAgICAgIDxCYXJUZXh0PiB7ZGF0YS5uYW1lfTwvQmFyVGV4dD5cclxuICAgICAgICAgIDwvQmFyQ29sdW1uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JhclJvdz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA0cHggMDtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXHJcbmBcclxuY29uc3QgQmFyUm93ID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5zbW9rZVdoaXRlfTtcclxuICAgIGNvbG9yOiAke1NlbmRUaGVtZS5ibHVlfTtcclxuICB9XHJcbmBcclxuY29uc3QgQmFyQ29sdW1uID0gc3R5bGVkLmxpYFxyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5zbm93V2hpdGV9O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUud2hpdGV9O1xyXG4gIH1cclxuICBzdmcge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEJhclRleHQgPSBzdHlsZWQoU2lkZWJhclRleHQpYFxyXG4gIG1hcmdpbjogMCA4cHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbGxpbmdcclxuIiwgImV4cG9ydCBjb25zdCBEYXNoYm9hcmREYXRhID0gW1xyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI1XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk04LjExMTExIDE5LjQ1NDdIMTUuODg4OUMxNy42IDE5LjQ1NDcgMTkgMTguMDczIDE5IDE2LjM4NDJWMTEuMzk0NkMxOSAxMC4zOTY3IDE4LjUzMzMgOS41NTIzMSAxNy43NTU2IDguOTM4MjFMMTMuODY2NyA2LjAyMTIxQzEyLjc3NzggNS4yNTM1OCAxMS4yMjIyIDUuMjUzNTggMTAuMTMzMyA2LjA5Nzk4TDYuMjQ0NDQgOC45MzgyMUM1LjQ2NjY3IDkuNTUyMzEgNSAxMC4zOTY3IDUgMTEuMzk0NlYxNi4zODQyQzUgMTguMDczIDYuNCAxOS40NTQ3IDguMTExMTEgMTkuNDU0N1pNNi41NTU1NiAxMS4zOTQ2QzYuNTU1NTYgMTAuOTM0IDYuNzg4ODkgMTAuNDczNSA3LjE3Nzc4IDEwLjE2NjRMMTEuMDY2NyA3LjI0OTQyQzExLjM3NzggNy4wMTkxMyAxMS42ODg5IDYuOTQyMzcgMTIgNi45NDIzN0MxMi4zMTExIDYuOTQyMzcgMTIuNjIyMiA3LjAxOTEzIDEyLjkzMzMgNy4yNDk0MkwxNi44MjIyIDEwLjE2NjRDMTcuMjExMSAxMC40NzM1IDE3LjQ0NDQgMTAuOTM0IDE3LjQ0NDQgMTEuMzk0NlYxNi4zODQyQzE3LjQ0NDQgMTcuMjI4NiAxNi43NDQ0IDE3LjkxOTUgMTUuODg4OSAxNy45MTk1SDguMTExMTFDNy4yNTU1NiAxNy45MTk1IDYuNTU1NTYgMTcuMjI4NiA2LjU1NTU2IDE2LjM4NDJWMTEuMzk0NlpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjbGFzc25hbWU6IFwiYWN0aXZlXCIsXHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTMuMiA1LjQ1NDc0SDcuNjAwMDFDNy4yMjg3MSA1LjQ1NDc0IDYuODcyNjEgNS42MDIyNCA2LjYxMDA2IDUuODY0NzlDNi4zNDc1MSA2LjEyNzM0IDYuMjAwMDEgNi40ODM0NCA2LjIwMDAxIDYuODU0NzRWMTguMDU0N0M2LjIwMDAxIDE4LjQyNiA2LjM0NzUxIDE4Ljc4MjEgNi42MTAwNiAxOS4wNDQ3QzYuODcyNjEgMTkuMzA3MiA3LjIyODcxIDE5LjQ1NDcgNy42MDAwMSAxOS40NTQ3SDE2QzE2LjM3MTMgMTkuNDU0NyAxNi43Mjc0IDE5LjMwNzIgMTYuOTkgMTkuMDQ0N0MxNy4yNTI1IDE4Ljc4MjEgMTcuNCAxOC40MjYgMTcuNCAxOC4wNTQ3VjkuNjU0NzRMMTMuMiA1LjQ1NDc0WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMDc0NkE2XCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE0LjYwMDEgMTUuOTU0N0g5LjAwMDA2XCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMwNzQ2QTZcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS40XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTQuNjAwMSAxMy4xNTQ3SDkuMDAwMDZcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzA3NDZBNlwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xMC40MDAxIDEwLjM1NUg5LjcwMDA2SDkuMDAwMDZcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzA3NDZBNlwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xMy4yMDAxIDUuNDU0NzRWOS42NTQ3NEgxNy40MDAxXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMwNzQ2QTZcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS40XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiUXVvdGVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTYuNSA1LjAwMDAzSDlDOC4yMDQzNSA1LjAwMDAzIDcuNDQxMjkgNS4zMTYxIDYuODc4NjggNS44Nzg3MUM2LjMxNjA3IDYuNDQxMzIgNiA3LjIwNDM4IDYgOC4wMDAwM1YxN0M2IDE3Ljc5NTcgNi4zMTYwNyAxOC41NTg3IDYuODc4NjggMTkuMTIxNEM3LjQ0MTI5IDE5LjY4NCA4LjIwNDM1IDIwIDkgMjBIMTYuNUMxNi44OTc4IDIwIDE3LjI3OTQgMTkuODQyIDE3LjU2MDcgMTkuNTYwN0MxNy44NDIgMTkuMjc5NCAxOCAxOC44OTc5IDE4IDE4LjVWNi41MDAwM0MxOCA2LjEwMjIxIDE3Ljg0MiA1LjcyMDY3IDE3LjU2MDcgNS40MzkzN0MxNy4yNzk0IDUuMTU4MDcgMTYuODk3OCA1LjAwMDAzIDE2LjUgNS4wMDAwM1pNNy41IDguMDAwMDNDNy41IDcuNjAyMjEgNy42NTgwNCA3LjIyMDY3IDcuOTM5MzQgNi45MzkzN0M4LjIyMDY0IDYuNjU4MDcgOC42MDIxOCA2LjUwMDAzIDkgNi41MDAwM0gxNi41VjE0SDlDOC40NzEyOCAxNC4wMDIyIDcuOTUyOTkgMTQuMTQ3NCA3LjUgMTQuNDJWOC4wMDAwM1pNOSAxOC41QzguNjAyMTggMTguNSA4LjIyMDY0IDE4LjM0MiA3LjkzOTM0IDE4LjA2MDdDNy42NTgwNCAxNy43Nzk0IDcuNSAxNy4zOTc5IDcuNSAxN0M3LjUgMTYuNjAyMiA3LjY1ODA0IDE2LjIyMDcgNy45MzkzNCAxNS45Mzk0QzguMjIwNjQgMTUuNjU4MSA4LjYwMjE4IDE1LjUgOSAxNS41SDE2LjVWMTguNUg5Wk0xMC41IDkuNTAwMDNIMTMuNUMxMy42OTg5IDkuNTAwMDMgMTMuODg5NyA5LjQyMTAxIDE0LjAzMDMgOS4yODAzNkMxNC4xNzEgOS4xMzk3MSAxNC4yNSA4Ljk0ODk0IDE0LjI1IDguNzUwMDNDMTQuMjUgOC41NTExMiAxNC4xNzEgOC4zNjAzNSAxNC4wMzAzIDguMjE5N0MxMy44ODk3IDguMDc5MDUgMTMuNjk4OSA4LjAwMDAzIDEzLjUgOC4wMDAwM0gxMC41QzEwLjMwMTEgOC4wMDAwMyAxMC4xMTAzIDguMDc5MDUgOS45Njk2NyA4LjIxOTdDOS44MjkwMiA4LjM2MDM1IDkuNzUgOC41NTExMiA5Ljc1IDguNzUwMDNDOS43NSA4Ljk0ODk0IDkuODI5MDIgOS4xMzk3MSA5Ljk2OTY3IDkuMjgwMzZDMTAuMTEwMyA5LjQyMTAxIDEwLjMwMTEgOS41MDAwMyAxMC41IDkuNTAwMDNaXCJcclxuICAgICAgICAgIGZpbGw9XCIjNzg3OTdBXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICBuYW1lOiBcIkJvb2tpbmdzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNNS4zMjkyMiAxNi42NjE5QzUuNDA3MzMgMTYuODU4MiA1LjU2MDIyIDE3LjAxNTUgNS43NTQyNyAxNy4wOTlDNS45NDgzMiAxNy4xODI2IDYuMTY3NjMgMTcuMTg1NyA2LjM2Mzk1IDE3LjEwNzZDNi41NjAyNyAxNy4wMjk1IDYuNzE3NTIgMTYuODc2NiA2LjgwMTExIDE2LjY4MjZDNi44ODQ3IDE2LjQ4ODUgNi44ODc3OCAxNi4yNjkyIDYuODA5NjcgMTYuMDcyOUw1LjkxODIyIDEzLjgyODNMMTEuMjAzMyAxMi42NTgzVjE2LjQzOUMxMS4yMDMzIDE2LjY1MDEgMTEuMjg3MSAxNi44NTI2IDExLjQzNjQgMTcuMDAxOEMxMS41ODU3IDE3LjE1MTEgMTEuNzg4MSAxNy4yMzUgMTEuOTk5MiAxNy4yMzVDMTIuMjEwMyAxNy4yMzUgMTIuNDEyOCAxNy4xNTExIDEyLjU2MiAxNy4wMDE4QzEyLjcxMTMgMTYuODUyNiAxMi43OTUxIDE2LjY1MDEgMTIuNzk1MSAxNi40MzlWMTIuNjU4M0wxOC4wODAyIDEzLjgyODNMMTcuMTg4NyAxNi4wNzI5QzE3LjE1IDE2LjE3MDEgMTcuMTMwNyAxNi4yNzQgMTcuMTMyMiAxNi4zNzg2QzE3LjEzMzYgMTYuNDgzMiAxNy4xNTU2IDE2LjU4NjYgMTcuMTk3IDE2LjY4MjdDMTcuMjM4NCAxNi43Nzg4IDE3LjI5ODQgMTYuODY1OCAxNy4zNzM0IDE2LjkzODdDMTcuNDQ4NSAxNy4wMTE2IDE3LjUzNzIgMTcuMDY5IDE3LjYzNDUgMTcuMTA3NkMxNy43MjgyIDE3LjE0NDcgMTcuODI4MiAxNy4xNjM2IDE3LjkyOSAxNy4xNjMzQzE4LjA4ODQgMTcuMTYzNSAxOC4yNDQyIDE3LjExNTggMTguMzc2MSAxNy4wMjY0QzE4LjUwODEgMTYuOTM3IDE4LjYxMDIgMTYuODEgMTguNjY5MiAxNi42NjE5TDE5LjkwMjkgMTMuNTQ5OEMxOS45NDUyIDEzLjQ0MjEgMTkuOTYzNiAxMy4zMjY1IDE5Ljk1NjcgMTMuMjExMUMxOS45NDk5IDEzLjA5NTYgMTkuOTE3OSAxMi45ODMgMTkuODYzMSAxMi44ODEyQzE5LjgwOTkgMTIuNzc5NyAxOS43MzU0IDEyLjY5MDkgMTkuNjQ0OCAxMi42MjA4QzE5LjU1NDEgMTIuNTUwOCAxOS40NDk0IDEyLjUwMTEgMTkuMzM3OCAxMi40NzUyTDE2Ljc3NDkgMTEuOTEwMVY4LjQ3OTYxQzE2Ljc3NDkgOC4yNjg1MiAxNi42OTEgOC4wNjYwNiAxNi41NDE3IDcuOTE2OEMxNi4zOTI1IDcuNzY3NTMgMTYuMTkgNy42ODM2NyAxNS45Nzg5IDcuNjgzNjdIMTQuMzg3VjUuMjk1ODVDMTQuMzg3IDUuMDg0NzUgMTQuMzAzMiA0Ljg4MjMgMTQuMTUzOSA0LjczMzAzQzE0LjAwNDYgNC41ODM3NyAxMy44MDIyIDQuNDk5OTEgMTMuNTkxMSA0LjQ5OTkxSDEwLjQwNzNDMTAuMTk2MiA0LjQ5OTkxIDkuOTkzNzggNC41ODM3NyA5Ljg0NDUxIDQuNzMzMDNDOS42OTUyNCA0Ljg4MjMgOS42MTEzOSA1LjA4NDc1IDkuNjExMzkgNS4yOTU4NVY3LjY4MzY3SDguMDE5NUM3LjgwODQxIDcuNjgzNjcgNy42MDU5NiA3Ljc2NzUzIDcuNDU2NjkgNy45MTY4QzcuMzA3NDIgOC4wNjYwNiA3LjIyMzU2IDguMjY4NTIgNy4yMjM1NiA4LjQ3OTYxVjExLjkxMDFMNC42NjA2MyAxMi40NTkzQzQuNTQ5MDEgMTIuNDg1MiA0LjQ0NDI5IDEyLjUzNDggNC4zNTM2MyAxMi42MDQ5QzQuMjYyOTcgMTIuNjc1IDQuMTg4NSAxMi43NjM4IDQuMTM1MzEgMTIuODY1MkM0LjA4MDUgMTIuOTY3MSA0LjA0ODU0IDEzLjA3OTcgNC4wNDE2NyAxMy4xOTUyQzQuMDM0NzkgMTMuMzEwNiA0LjA1MzE3IDEzLjQyNjIgNC4wOTU1MiAxMy41MzM4TDUuMzI5MjIgMTYuNjYxOVpNMTEuMjAzMyA2LjA5MTc5SDEyLjc5NTFWNy42ODM2N0gxMS4yMDMzVjYuMDkxNzlaTTguODE1NDQgOS4yNzU1NUgxNS4xODNWMTEuNTUxOUwxMi4xNzQzIDEwLjg2NzRIMTEuODI0MUw4LjgxNTQ0IDExLjU1MTlWOS4yNzU1NVpNMTguOTMxOCAxOC4yNTM4QzE4LjY1MjYgMTguMzM5MyAxOC4zODUyIDE4LjQ1OTcgMTguMTM1OSAxOC42MTE5QzE3Ljg4MjMgMTguNzYwMiAxNy41OTM5IDE4LjgzODQgMTcuMzAwMiAxOC44Mzg0QzE3LjAwNjQgMTguODM4NCAxNi43MTggMTguNzYwMiAxNi40NjQ0IDE4LjYxMTlDMTUuOTEzMSAxOC4zMDA5IDE1LjI5MDcgMTguMTM3NCAxNC42NTc2IDE4LjEzNzRDMTQuMDI0NiAxOC4xMzc0IDEzLjQwMjIgMTguMzAwOSAxMi44NTA5IDE4LjYxMTlDMTIuNTkzOCAxOC43NTg1IDEyLjMwMzEgMTguODM1NiAxMi4wMDcyIDE4LjgzNTZDMTEuNzExMyAxOC44MzU2IDExLjQyMDUgMTguNzU4NSAxMS4xNjM1IDE4LjYxMTlDMTAuNjExNiAxOC4zMDI0IDkuOTg5NDUgMTguMTM5OCA5LjM1NjY4IDE4LjEzOThDOC43MjM5MiAxOC4xMzk4IDguMTAxNzcgMTguMzAyNCA3LjU0OTkgMTguNjExOUM3LjI5NjM0IDE4Ljc2MDIgNy4wMDc4OSAxOC44Mzg0IDYuNzE0MTYgMTguODM4NEM2LjQyMDQzIDE4LjgzODQgNi4xMzE5OCAxOC43NjAyIDUuODc4NDIgMTguNjExOUM1LjYyOTE2IDE4LjQ1OTcgNS4zNjE3NSAxOC4zMzkzIDUuMDgyNDggMTguMjUzOEM0Ljk3NjU4IDE4LjIxNjEgNC44NjM5IDE4LjIwMTMgNC43NTE4NiAxOC4yMTAzQzQuNjM5ODIgMTguMjE5NCA0LjUzMDk3IDE4LjI1MiA0LjQzMjQ3IDE4LjMwNjJDNC4zMzM5NiAxOC4zNjAzIDQuMjQ4MDQgMTguNDM0NyA0LjE4MDM2IDE4LjUyNDVDNC4xMTI2OCAxOC42MTQyIDQuMDY0NzggMTguNzE3MiA0LjAzOTggMTguODI2OEMzLjk4MDM4IDE5LjAyODQgNC4wMDMxIDE5LjI0NTMgNC4xMDMwMSAxOS40MzAyQzQuMjAyOTEgMTkuNjE1MSA0LjM3MTkgMTkuNzUzIDQuNTczMDggMTkuODEzOEM0LjczMzM1IDE5Ljg1NzIgNC44ODYyNiAxOS45MjQzIDUuMDI2NzcgMjAuMDEyOEM1LjUwOTY3IDIwLjI5NjIgNi4wNTg3NiAyMC40NDcyIDYuNjE4NjUgMjAuNDUwNkM3LjIwMDE2IDIwLjQ1MDcgNy43NzEzNSAyMC4yOTY5IDguMjc0MjEgMjAuMDA0OEM4LjU4NjE5IDE5LjgzMjcgOC45MzY3IDE5Ljc0MjUgOS4yOTMwMSAxOS43NDI1QzkuNjQ5MzIgMTkuNzQyNSA5Ljk5OTgyIDE5LjgzMjcgMTAuMzExOCAyMC4wMDQ4QzEwLjgxMTEgMjAuMjkwMyAxMS4zNzYzIDIwLjQ0MDUgMTEuOTUxNSAyMC40NDA1QzEyLjUyNjYgMjAuNDQwNSAxMy4wOTE4IDIwLjI5MDMgMTMuNTkxMSAyMC4wMDQ4QzEzLjkwMzEgMTkuODMyNyAxNC4yNTM2IDE5Ljc0MjUgMTQuNjA5OSAxOS43NDI1QzE0Ljk2NjIgMTkuNzQyNSAxNS4zMTY3IDE5LjgzMjcgMTUuNjI4NyAyMC4wMDQ4QzE2LjEyMiAyMC4yOTkzIDE2LjY4NTkgMjAuNDU0NyAxNy4yNjA0IDIwLjQ1NDdDMTcuODM0OSAyMC40NTQ3IDE4LjM5ODcgMjAuMjk5MyAxOC44OTIxIDIwLjAwNDhDMTkuMDMyNiAxOS45MTYzIDE5LjE4NTUgMTkuODQ5MyAxOS4zNDU3IDE5LjgwNThDMTkuNDUxNyAxOS43ODQ0IDE5LjU1MjEgMTkuNzQxNiAxOS42NDEgMTkuNjgwMUMxOS43Mjk4IDE5LjYxODYgMTkuODA1MiAxOS41Mzk3IDE5Ljg2MjYgMTkuNDQ4MUMxOS45MTk5IDE5LjM1NjQgMTkuOTU4IDE5LjI1NDEgMTkuOTc0NSAxOS4xNDczQzE5Ljk5MSAxOS4wNDA1IDE5Ljk4NTYgMTguOTMxNSAxOS45NTg2IDE4LjgyNjhDMTkuOTMzMyAxOC43MTkxIDE5Ljg4NTggMTguNjE3OSAxOS44MTkyIDE4LjUyOTVDMTkuNzUyNiAxOC40NDEyIDE5LjY2ODMgMTguMzY3NyAxOS41NzE3IDE4LjMxMzhDMTkuNDc1IDE4LjI1OTkgMTkuMzY4MiAxOC4yMjY3IDE5LjI1ODEgMTguMjE2M0MxOS4xNDc5IDE4LjIwNiAxOS4wMzY4IDE4LjIxODcgMTguOTMxOCAxOC4yNTM4WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgbmFtZTogXCJTaGlwbWVudHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI1XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xNi45MDAxIDguOTU0NzJIMTYuMjAwMVY4LjI1NDcxQzE2LjIwMDEgNy42OTc3NSAxNS45Nzg4IDcuMTYzNiAxNS41ODUgNi43Njk3N0MxNS4xOTEyIDYuMzc1OTQgMTQuNjU3IDYuMTU0NjkgMTQuMTAwMSA2LjE1NDY5SDcuMTAwMDJDNi41NDMwNiA2LjE1NDY5IDYuMDA4OTEgNi4zNzU5NCA1LjYxNTA4IDYuNzY5NzdDNS4yMjEyNSA3LjE2MzYgNSA3LjY5Nzc1IDUgOC4yNTQ3MVYxNi42NTQ4QzUgMTcuMjExNyA1LjIyMTI1IDE3Ljc0NTkgNS42MTUwOCAxOC4xMzk3QzYuMDA4OTEgMTguNTMzNSA2LjU0MzA2IDE4Ljc1NDggNy4xMDAwMiAxOC43NTQ4SDE2LjkwMDFDMTcuNDU3MSAxOC43NTQ4IDE3Ljk5MTIgMTguNTMzNSAxOC4zODUgMTguMTM5N0MxOC43Nzg5IDE3Ljc0NTkgMTkuMDAwMSAxNy4yMTE3IDE5LjAwMDEgMTYuNjU0OFYxMS4wNTQ3QzE5LjAwMDEgMTAuNDk3OCAxOC43Nzg5IDkuOTYzNjMgMTguMzg1IDkuNTY5OEMxNy45OTEyIDkuMTc1OTcgMTcuNDU3MSA4Ljk1NDcyIDE2LjkwMDEgOC45NTQ3MlpNNy4xMDAwMiA3LjU1NDdIMTQuMTAwMUMxNC4yODU3IDcuNTU0NyAxNC40NjM4IDcuNjI4NDUgMTQuNTk1IDcuNzU5NzNDMTQuNzI2MyA3Ljg5MTAxIDE0LjgwMDEgOC4wNjkwNiAxNC44MDAxIDguMjU0NzFWOC45NTQ3Mkg3LjEwMDAyQzYuOTE0MzYgOC45NTQ3MiA2LjczNjMxIDguODgwOTYgNi42MDUwNCA4Ljc0OTY5QzYuNDczNzYgOC42MTg0MSA2LjQwMDAxIDguNDQwMzYgNi40MDAwMSA4LjI1NDcxQzYuNDAwMDEgOC4wNjkwNiA2LjQ3Mzc2IDcuODkxMDEgNi42MDUwNCA3Ljc1OTczQzYuNzM2MzEgNy42Mjg0NSA2LjkxNDM2IDcuNTU0NyA3LjEwMDAyIDcuNTU0N1pNMTcuNjAwMSAxNC41NTQ4SDE2LjkwMDFDMTYuNzE0NCAxNC41NTQ4IDE2LjUzNjQgMTQuNDgxIDE2LjQwNTEgMTQuMzQ5N0MxNi4yNzM4IDE0LjIxODUgMTYuMjAwMSAxNC4wNDA0IDE2LjIwMDEgMTMuODU0OEMxNi4yMDAxIDEzLjY2OTEgMTYuMjczOCAxMy40OTExIDE2LjQwNTEgMTMuMzU5OEMxNi41MzY0IDEzLjIyODUgMTYuNzE0NCAxMy4xNTQ3IDE2LjkwMDEgMTMuMTU0N0gxNy42MDAxVjE0LjU1NDhaTTE3LjYwMDEgMTEuNzU0N0gxNi45MDAxQzE2LjM0MzEgMTEuNzU0NyAxNS44MDkgMTEuOTc2IDE1LjQxNTIgMTIuMzY5OEMxNS4wMjEzIDEyLjc2MzYgMTQuODAwMSAxMy4yOTc4IDE0LjgwMDEgMTMuODU0OEMxNC44MDAxIDE0LjQxMTcgMTUuMDIxMyAxNC45NDU5IDE1LjQxNTIgMTUuMzM5N0MxNS44MDkgMTUuNzMzNSAxNi4zNDMxIDE1Ljk1NDggMTYuOTAwMSAxNS45NTQ4SDE3LjYwMDFWMTYuNjU0OEMxNy42MDAxIDE2Ljg0MDQgMTcuNTI2MyAxNy4wMTg1IDE3LjM5NTEgMTcuMTQ5OEMxNy4yNjM4IDE3LjI4MSAxNy4wODU3IDE3LjM1NDggMTYuOTAwMSAxNy4zNTQ4SDcuMTAwMDJDNi45MTQzNiAxNy4zNTQ4IDYuNzM2MzEgMTcuMjgxIDYuNjA1MDQgMTcuMTQ5OEM2LjQ3Mzc2IDE3LjAxODUgNi40MDAwMSAxNi44NDA0IDYuNDAwMDEgMTYuNjU0OFYxMC4yMzU3QzYuNjI0OSAxMC4zMTQ4IDYuODYxNjIgMTAuMzU1MSA3LjEwMDAyIDEwLjM1NDdIMTYuOTAwMUMxNy4wODU3IDEwLjM1NDcgMTcuMjYzOCAxMC40Mjg1IDE3LjM5NTEgMTAuNTU5OEMxNy41MjYzIDEwLjY5MSAxNy42MDAxIDEwLjg2OTEgMTcuNjAwMSAxMS4wNTQ3VjExLjc1NDdaXCJcclxuICAgICAgICAgIGZpbGw9XCIjNzg3OTdBXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICBuYW1lOiBcIlRyYWRlIEZpbmFuY2VcIixcclxuICB9LFxyXG5dXHJcbmV4cG9ydCBjb25zdCBCaWxsaW5nRGF0YSA9IFtcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNNSAxMC41MDQ3QzQuNjEzNCAxMC41MDQ3IDQuMyAxMC44MTgxIDQuMyAxMS4yMDQ3QzQuMyAxMS41OTEzIDQuNjEzNCAxMS45MDQ3IDUgMTEuOTA0N1YxMC41MDQ3Wk0xOC43NSAxMS45MDQ3QzE5LjEzNjYgMTEuOTA0NyAxOS40NSAxMS41OTEzIDE5LjQ1IDExLjIwNDdDMTkuNDUgMTAuODE4MSAxOS4xMzY2IDEwLjUwNDcgMTguNzUgMTAuNTA0N1YxMS45MDQ3Wk02LjI1IDguMTU0NzRIMTcuNVY2Ljc1NDc0SDYuMjVWOC4xNTQ3NFpNMTcuNSA4LjE1NDc0QzE3LjgwMzggOC4xNTQ3NCAxOC4wNSA4LjQwMDk5IDE4LjA1IDguNzA0NzRIMTkuNDVDMTkuNDUgNy42Mjc3OSAxOC41NzcgNi43NTQ3NCAxNy41IDYuNzU0NzRWOC4xNTQ3NFpNMTguMDUgOC43MDQ3NFYxNi4yMDQ3SDE5LjQ1VjguNzA0NzRIMTguMDVaTTE4LjA1IDE2LjIwNDdDMTguMDUgMTYuNTA4NSAxNy44MDM4IDE2Ljc1NDcgMTcuNSAxNi43NTQ3VjE4LjE1NDdDMTguNTc3IDE4LjE1NDcgMTkuNDUgMTcuMjgxNyAxOS40NSAxNi4yMDQ3SDE4LjA1Wk0xNy41IDE2Ljc1NDdINi4yNVYxOC4xNTQ3SDE3LjVWMTYuNzU0N1pNNi4yNSAxNi43NTQ3QzUuOTQ2MjQgMTYuNzU0NyA1LjcgMTYuNTA4NSA1LjcgMTYuMjA0N0g0LjNDNC4zIDE3LjI4MTcgNS4xNzMwNCAxOC4xNTQ3IDYuMjUgMTguMTU0N1YxNi43NTQ3Wk01LjcgMTYuMjA0N1Y4LjcwNDc0SDQuM1YxNi4yMDQ3SDUuN1pNNS43IDguNzA0NzRDNS43IDguNDAwOTkgNS45NDYyNCA4LjE1NDc0IDYuMjUgOC4xNTQ3NFY2Ljc1NDc0QzUuMTczMDQgNi43NTQ3NCA0LjMgNy42Mjc3OSA0LjMgOC43MDQ3NEg1LjdaTTUgMTEuOTA0N0gxOC43NVYxMC41MDQ3SDVWMTEuOTA0N1pcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiQmlsbGluZ3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI1XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xNi4xOTk2IDguOTQ1NTlDMTYuMTk5NiA4LjgwNjk3IDE2LjE1ODUgOC42NzE0NyAxNi4wODE1IDguNTU2MjJDMTYuMDA0NSA4LjQ0MDk2IDE1Ljg5NSA4LjM1MTEzIDE1Ljc2NjkgOC4yOTgwOUMxNS42Mzg5IDguMjQ1MDQgMTUuNDk4IDguMjMxMTYgMTUuMzYyIDguMjU4MjFDMTUuMjI2MSA4LjI4NTI1IDE1LjEwMTIgOC4zNTIgMTUuMDAzMiA4LjQ1MDAxQzE0LjkwNTIgOC41NDgwMyAxNC44Mzg0IDguNjcyOTEgMTQuODExNCA4LjgwODg2QzE0Ljc4NDMgOC45NDQ4MSAxNC43OTgyIDkuMDg1NzMgMTQuODUxMiA5LjIxMzc5QzE0LjkwNDMgOS4zNDE4NSAxNC45OTQxIDkuNDUxMzEgMTUuMTA5NCA5LjUyODMyQzE1LjIyNDYgOS42MDUzMyAxNS4zNjAxIDkuNjQ2NDMgMTUuNDk4NyA5LjY0NjQzQzE1LjY4NDYgOS42NDY0MyAxNS44NjI5IDkuNTcyNTkgMTUuOTk0MyA5LjQ0MTE2QzE2LjEyNTggOS4zMDk3MyAxNi4xOTk2IDkuMTMxNDYgMTYuMTk5NiA4Ljk0NTU5Wk0xMi4xNDg3IDE5LjI1NTFMMTguNzc4NyAxMi42MTFDMTguODQ5MiAxMi41NDU3IDE4LjkwNTQgMTIuNDY2NSAxOC45NDQgMTIuMzc4NUMxOC45ODI2IDEyLjI5MDUgMTkuMDAyNyAxMi4xOTU1IDE5LjAwMyAxMi4wOTk0VjcuODk0MzJDMTkuMDAzNSA3LjgwMjA4IDE4Ljk4NTggNy43MTA2NSAxOC45NTEgNy42MjUyNkMxOC45MTYxIDcuNTM5ODcgMTguODY0NyA3LjQ2MjIgMTguNzk5NyA3LjM5NjcxTDE3LjA1NDYgNS42NDQ2QzE2Ljk4OTEgNS41Nzk2NCAxNi45MTE1IDUuNTI4MjUgMTYuODI2MSA1LjQ5MzM3QzE2Ljc0MDcgNS40NTg0OSAxNi42NDkzIDUuNDQwODIgMTYuNTU3IDUuNDQxMzVIMTIuMzUxOUMxMi4xNjY0IDUuNDQzOTMgMTEuOTg4NiA1LjUxNjUzIDExLjg1NDMgNS42NDQ2TDUuMTk2MjggMTIuMjk1NkM1LjA2ODIyIDEyLjQyOTkgNC45OTU2MiAxMi42MDc3IDQuOTkzMDQgMTIuNzkzMkM0Ljk5MjUxIDEyLjg4NTUgNS4wMTAxOCAxMi45NzY5IDUuMDQ1MDYgMTMuMDYyM0M1LjA3OTk0IDEzLjE0NzcgNS4xMzEzMyAxMy4yMjU0IDUuMTk2MjggMTMuMjkwOEwxMS4xNjA1IDE5LjI1NTFDMTEuMjI2IDE5LjMyIDExLjMwMzYgMTkuMzcxNCAxMS4zODkgMTkuNDA2M0MxMS40NzQ0IDE5LjQ0MTIgMTEuNTY1OSAxOS40NTg4IDExLjY1ODEgMTkuNDU4M0MxMS44NDEyIDE5LjQ1NCAxMi4wMTYyIDE5LjM4MTUgMTIuMTQ4NyAxOS4yNTUxWk02LjY3NTA3IDEyLjc5MzJMMTIuNjMyMyA2Ljg0MzA0SDE2LjI2OTdMMTcuNjAxMyA4LjE3NDY1VjExLjgwNUwxMS42NTExIDE3Ljc2MjJMNi42NzUwNyAxMi43OTMyWlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgbmFtZTogXCJQcm9kdWN0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTIwLjI3MjYgMTMuODI5OUMyMC4yNjk2IDEzLjc4NTYgMjAuMjYyNSAxMy43NDE2IDIwLjI1MTMgMTMuNjk4NUwxOC41MTI0IDkuMDY3OThDMTguODI4OCA4Ljg2MzI5IDE5LjA4OTEgOC41ODI3IDE5LjI2OTUgOC4yNTE3NkMxOS40NDk4IDcuOTIwODEgMTkuNTQ0NSA3LjU1MDAyIDE5LjU0NSA3LjE3MzEzQzE5LjU0NSA2Ljk3MzAyIDE5LjQ2NTYgNi43ODExIDE5LjMyNDEgNi42Mzk2QzE5LjE4MjYgNi40OTgxIDE4Ljk5MDYgNi40MTg2MSAxOC43OTA1IDYuNDE4NjFDMTguNTkwNCA2LjQxODYxIDE4LjM5ODUgNi40OTgxIDE4LjI1NyA2LjYzOTZDMTguMTE1NSA2Ljc4MTEgMTguMDM2IDYuOTczMDIgMTguMDM2IDcuMTczMTNDMTguMDM1OSA3LjM0MTI3IDE3Ljk3OTcgNy41MDQ1OCAxNy44NzYzIDcuNjM3MTRDMTcuNzcyOSA3Ljc2OTcxIDE3LjYyODIgNy44NjM5NSAxNy40NjUxIDcuOTA0OTFDMTcuMzAyIDcuOTQ1ODcgMTcuMTI5OSA3LjkzMTIxIDE2Ljk3NjEgNy44NjMyNEMxNi44MjIzIDcuNzk1MjggMTYuNjk1NiA3LjY3NzkxIDE2LjYxNjEgNy41Mjk3NkMxNi40MjI1IDcuMTg2MDggMTYuMTM5NCA2LjkwMTI5IDE1Ljc5NjkgNi43MDU2NEMxNS40NTQ0IDYuNTA5OTkgMTUuMDY1MiA2LjQxMDggMTQuNjcwOSA2LjQxODYxSDEyLjc1NDRWNS42NjQwOUMxMi43NTQ0IDUuNDYzOTggMTIuNjc0OSA1LjI3MjA3IDEyLjUzMzQgNS4xMzA1N0MxMi4zOTE5IDQuOTg5MDcgMTIuMiA0LjkwOTU4IDExLjk5OTkgNC45MDk1OEMxMS43OTk4IDQuOTA5NTggMTEuNjA3OSA0Ljk4OTA3IDExLjQ2NjQgNS4xMzA1N0MxMS4zMjQ5IDUuMjcyMDcgMTEuMjQ1NCA1LjQ2Mzk4IDExLjI0NTQgNS42NjQwOVY2LjQxODYxSDkuMzI4ODlDOC45MzQ1MSA2LjQxMDggOC41NDUzOCA2LjUwOTk5IDguMjAyODYgNi43MDU2NEM3Ljg2MDM1IDYuOTAxMjkgNy41NzcyNCA3LjE4NjA4IDcuMzgzNjIgNy41Mjk3NkM3LjMwNDEyIDcuNjc3OTEgNy4xNzc0MiA3Ljc5NTI4IDcuMDIzNjMgNy44NjMyNEM2Ljg2OTgzIDcuOTMxMjEgNi42OTc3NSA3Ljk0NTg3IDYuNTM0NjcgNy45MDQ5MUM2LjM3MTU5IDcuODYzOTUgNi4yMjY4NiA3Ljc2OTcxIDYuMTIzNDQgNy42MzcxNEM2LjAyMDAxIDcuNTA0NTggNS45NjM4MSA3LjM0MTI3IDUuOTYzNzUgNy4xNzMxM0M1Ljk2Mzc1IDYuOTczMDIgNS44ODQyNSA2Ljc4MTEgNS43NDI3NSA2LjYzOTZDNS42MDEyNSA2LjQ5ODEgNS40MDkzNCA2LjQxODYxIDUuMjA5MjMgNi40MTg2MUM1LjAwOTEyIDYuNDE4NjEgNC44MTcyIDYuNDk4MSA0LjY3NTcgNi42Mzk2QzQuNTM0MjEgNi43ODExIDQuNDU0NzEgNi45NzMwMiA0LjQ1NDcxIDcuMTczMTNDNC40NTUyMSA3LjU1MDAyIDQuNTQ5OTQgNy45MjA4MSA0LjczMDMgOC4yNTE3NkM0LjkxMDY2IDguNTgyNyA1LjE3MDkxIDguODYzMjkgNS40ODczOCA5LjA2Nzk4TDMuNzQ4NDggMTMuNjk4NUMzLjczNzMyIDEzLjc0MTYgMy43MzAyIDEzLjc4NTYgMy43MjcyMSAxMy44Mjk5QzMuNzEzOTYgMTMuODczNiAzLjcwNDkyIDEzLjkxODQgMy43MDAyIDEzLjk2MzhDMy43MDAyIDEzLjk3MDggMy43MDIyMiAxMy45NzcyIDMuNzAyMjcgMTMuOTg0MkMzLjcwMjUgMTMuOTk0MiAzLjcwNDUzIDE0LjAwMzMgMy43MDUyMSAxNC4wMTMyQzMuNzE2OTYgMTQuODA0NiA0LjAzOTU3IDE1LjU1OTYgNC42MDMzNSAxNi4xMTVDNS4xNjcxMyAxNi42NzA1IDUuOTI2ODEgMTYuOTgxOSA2LjcxODI2IDE2Ljk4MTlDNy41MDk3MSAxNi45ODE5IDguMjY5MzkgMTYuNjcwNSA4LjgzMzE3IDE2LjExNUM5LjM5Njk1IDE1LjU1OTYgOS43MTk1NiAxNC44MDQ2IDkuNzMxMzEgMTQuMDEzMkM5LjczMTk1IDE0LjAwMzMgOS43MzQwMyAxMy45OTQyIDkuNzM0MjUgMTMuOTg0MkM5LjczNDMgMTMuOTc3MiA5LjczNjMzIDEzLjk3MDggOS43MzYzMyAxMy45NjM4QzkuNzMxNjIgMTMuOTE4NCA5LjcyMjU4IDEzLjg3MzYgOS43MDkzNCAxMy44Mjk5QzkuNzA2MzUgMTMuNzg1NiA5LjY5OTIzIDEzLjc0MTYgOS42ODgwNyAxMy42OTg1TDcuOTQ3MTEgOS4wNjI1OUM4LjI2Njg1IDguODU4NTUgOC41Mjk5NiA4LjU3NzE3IDguNzEyMTMgOC4yNDQ0OEM4Ljc3Nzk3IDguMTQyMDggOC44Njk2NyA4LjA1ODg2IDguOTc3OTYgOC4wMDMyM0M5LjA4NjI1IDcuOTQ3NiA5LjIwNzMgNy45MjE1MiA5LjMyODg5IDcuOTI3NjRIMTEuMjQ1NFYxOC40OTA5SDguOTgxODFDOC43ODE3IDE4LjQ5MDkgOC41ODk3OSAxOC41NzA0IDguNDQ4MjkgMTguNzExOUM4LjMwNjc5IDE4Ljg1MzQgOC4yMjcyOSAxOS4wNDUzIDguMjI3MjkgMTkuMjQ1NEM4LjIyNzI5IDE5LjQ0NTUgOC4zMDY3OSAxOS42Mzc0IDguNDQ4MjkgMTkuNzc4OUM4LjU4OTc5IDE5LjkyMDQgOC43ODE3IDE5Ljk5OTkgOC45ODE4MSAxOS45OTk5SDE1LjAxNzlDMTUuMjE4MSAxOS45OTk5IDE1LjQxIDE5LjkyMDQgMTUuNTUxNSAxOS43Nzg5QzE1LjY5MyAxOS42Mzc0IDE1Ljc3MjUgMTkuNDQ1NSAxNS43NzI1IDE5LjI0NTRDMTUuNzcyNSAxOS4wNDUzIDE1LjY5MyAxOC44NTM0IDE1LjU1MTUgMTguNzExOUMxNS40MSAxOC41NzA0IDE1LjIxODEgMTguNDkwOSAxNS4wMTc5IDE4LjQ5MDlIMTIuNzU0NFY3LjkyNzY0SDE0LjY3MDlDMTQuNzkyNSA3LjkyMTUzIDE0LjkxMzUgNy45NDc2IDE1LjAyMTggOC4wMDMyM0MxNS4xMzAxIDguMDU4ODYgMTUuMjIxOCA4LjE0MjA4IDE1LjI4NzYgOC4yNDQ0OEMxNS40Njk4IDguNTc3MTcgMTUuNzMyOSA4Ljg1ODU1IDE2LjA1MjYgOS4wNjI1OUwxNC4zMTE3IDEzLjY5ODVDMTQuMzAwNiAxMy43NDE2IDE0LjI5MzQgMTMuNzg1NiAxNC4yOTA0IDEzLjgyOTlDMTQuMjc3MiAxMy44NzM2IDE0LjI2ODEgMTMuOTE4NCAxNC4yNjM0IDEzLjk2MzhDMTQuMjYzNCAxMy45NzA4IDE0LjI2NTUgMTMuOTc3MiAxNC4yNjU1IDEzLjk4NDJDMTQuMjY1NyAxMy45OTQyIDE0LjI2NzggMTQuMDAzMyAxNC4yNjg0IDE0LjAxMzJDMTQuMjgwMiAxNC44MDQ2IDE0LjYwMjggMTUuNTU5NiAxNS4xNjY2IDE2LjExNUMxNS43MzA0IDE2LjY3MDUgMTYuNDkgMTYuOTgxOSAxNy4yODE1IDE2Ljk4MTlDMTguMDcyOSAxNi45ODE5IDE4LjgzMjYgMTYuNjcwNSAxOS4zOTY0IDE2LjExNUMxOS45NjAyIDE1LjU1OTYgMjAuMjgyOCAxNC44MDQ2IDIwLjI5NDUgMTQuMDEzMkMyMC4yOTUyIDE0LjAwMzMgMjAuMjk3MyAxMy45OTQyIDIwLjI5NzUgMTMuOTg0MkMyMC4yOTc1IDEzLjk3NzIgMjAuMjk5NiAxMy45NzA4IDIwLjI5OTYgMTMuOTYzOEMyMC4yOTQ4IDEzLjkxODQgMjAuMjg1OCAxMy44NzM2IDIwLjI3MjYgMTMuODI5OVpNNi43MTgyNiAxMC4wODIyTDguMDE4MDQgMTQuNzE4M0g1LjQxMTg1TDYuNzE4MjYgMTAuMDgyMlpNOC4wMTgwNCAxNC43MTgzQzcuODg0ODggMTQuOTQ1NSA3LjY5NTIgMTUuMTM0NCA3LjQ2NzQ0IDE1LjI2NjZDNy4yMzk2OSAxNS4zOTg4IDYuOTgxNiAxNS40Njk5IDYuNzE4MjYgMTUuNDcyOEM2LjQ1MzQ1IDE1LjQ3MjcgNi4xOTMzMyAxNS40MDI5IDUuOTY0MDIgMTUuMjcwNUM1LjczNDcgMTUuMTM4MSA1LjU0NDI3IDE0Ljk0NzYgNS40MTE4NSAxNC43MTgzSDguMDE4MDRaTTE3LjI4MTUgMTAuMDgyMkwxOC41ODEzIDE0LjcxODNIMTUuOTc1MUwxNy4yODE1IDEwLjA4MjJaTTE3LjI4MTUgMTUuNDcyOEMxNy4wMTY3IDE1LjQ3MjcgMTYuNzU2NiAxNS40MDI5IDE2LjUyNzIgMTUuMjcwNUMxNi4yOTc5IDE1LjEzODEgMTYuMTA3NSAxNC45NDc2IDE1Ljk3NTEgMTQuNzE4M0gxOC41ODEzQzE4LjQ0ODEgMTQuOTQ1NSAxOC4yNTg0IDE1LjEzNDQgMTguMDMwNyAxNS4yNjY2QzE3LjgwMjkgMTUuMzk4OCAxNy41NDQ4IDE1LjQ2OTkgMTcuMjgxNSAxNS40NzI4WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgbmFtZTogXCJGaXhlZCBSYXRlc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE0LjkxMzcgMTIuOTYxQzE1LjU1NDEgMTIuNDU5OSAxNi4wMjE2IDExLjc3MjggMTYuMjUxIDEwLjk5NTJDMTYuNDgwNCAxMC4yMTc2IDE2LjQ2MDUgOS4zODgyIDE2LjE5MzkgOC42MjI0MkMxNS45MjczIDcuODU2NjUgMTUuNDI3MyA3LjE5MjU1IDE0Ljc2MzUgNi43MjI1MkMxNC4wOTk3IDYuMjUyNDkgMTMuMzA1MiA1Ljk5OTkxIDEyLjQ5MDMgNS45OTk5MUMxMS42NzU1IDUuOTk5OTEgMTAuODgwOSA2LjI1MjQ5IDEwLjIxNzEgNi43MjI1MkM5LjU1MzMxIDcuMTkyNTUgOS4wNTMzNSA3Ljg1NjY1IDguNzg2NzUgOC42MjI0MkM4LjUyMDE2IDkuMzg4MiA4LjUwMDE5IDEwLjIxNzYgOC43Mjk2MyAxMC45OTUyQzguOTU5MDcgMTEuNzcyOCA5LjQyNjUgMTIuNDU5OSAxMC4wNjY5IDEyLjk2MUM4Ljk2OTU2IDEzLjM5ODIgOC4wMTIwOSAxNC4xMjM0IDcuMjk2NTcgMTUuMDU5MkM2LjU4MTA1IDE1Ljk5NSA2LjEzNDMgMTcuMTA2NCA2LjAwMzk0IDE4LjI3NDlDNS45OTQ1IDE4LjM2MDIgNi4wMDIwNiAxOC40NDY1IDYuMDI2MTcgMTguNTI4OUM2LjA1MDI4IDE4LjYxMTQgNi4wOTA0NyAxOC42ODgyIDYuMTQ0NDUgMTguNzU1MkM2LjI1MzQ4IDE4Ljg5MDQgNi40MTIwNSAxOC45NzcgNi41ODUzIDE4Ljk5NkM2Ljc1ODU0IDE5LjAxNDkgNi45MzIyNiAxOC45NjQ3IDcuMDY4MjMgMTguODU2MkM3LjIwNDIxIDE4Ljc0NzggNy4yOTEzIDE4LjU5MDEgNy4zMTAzNiAxOC40MTc4QzcuNDUzNzkgMTcuMTQ3OSA4LjA2MjY1IDE1Ljk3NTEgOS4wMjA2MSAxNS4xMjM0QzkuOTc4NTYgMTQuMjcxOCAxMS4yMTg0IDEzLjgwMSAxMi41MDM0IDEzLjgwMUMxMy43ODgzIDEzLjgwMSAxNS4wMjgyIDE0LjI3MTggMTUuOTg2MSAxNS4xMjM0QzE2Ljk0NDEgMTUuOTc1MSAxNy41NTMgMTcuMTQ3OSAxNy42OTY0IDE4LjQxNzhDMTcuNzE0MiAxOC41Nzc0IDE3Ljc5MDcgMTguNzI0OSAxNy45MTE0IDE4LjgzMTZDMTguMDMyIDE4LjkzODQgMTguMTg4MSAxOC45OTcgMTguMzQ5NiAxOC45OTZIMTguNDIxNUMxOC41OTI3IDE4Ljk3NjQgMTguNzQ5MiAxOC44OTAzIDE4Ljg1NjkgMTguNzU2NEMxOC45NjQ1IDE4LjYyMjYgMTkuMDE0NiAxOC40NTE4IDE4Ljk5NjMgMTguMjgxNEMxOC44NjUzIDE3LjEwOTYgMTguNDE2MSAxNS45OTU0IDE3LjY5NjkgMTUuMDU4MUMxNi45Nzc3IDE0LjEyMDggMTYuMDE1NiAxMy4zOTU5IDE0LjkxMzcgMTIuOTYxWk0xMi40OTAzIDEyLjQ5OTdDMTEuOTczNSAxMi40OTk3IDExLjQ2ODQgMTIuMzQ3MyAxMS4wMzg3IDEyLjA2MThDMTAuNjA5IDExLjc3NjMgMTAuMjc0MSAxMS4zNzA0IDEwLjA3NjQgMTAuODk1NkM5Ljg3ODYgMTAuNDIwOCA5LjgyNjg2IDkuODk4MzUgOS45Mjc2OCA5LjM5NDI5QzEwLjAyODUgOC44OTAyMyAxMC4yNzczIDguNDI3MjIgMTAuNjQyOCA4LjA2MzgxQzExLjAwODIgNy43MDA0MSAxMS40NzM3IDcuNDUyOTIgMTEuOTgwNiA3LjM1MjY2QzEyLjQ4NzQgNy4yNTI0IDEzLjAxMjggNy4zMDM4NSAxMy40OTAyIDcuNTAwNTNDMTMuOTY3NiA3LjY5NzIgMTQuMzc1NyA4LjAzMDI2IDE0LjY2MjggOC40NTc1OEMxNC45NDk5IDguODg0OSAxNS4xMDMyIDkuMzg3MyAxNS4xMDMyIDkuOTAxMjNDMTUuMTAzMiAxMC41OTA0IDE0LjgyNzkgMTEuMjUxMyAxNC4zMzc5IDExLjczODZDMTMuODQ3OSAxMi4yMjYgMTMuMTgzMyAxMi40OTk3IDEyLjQ5MDMgMTIuNDk5N1pcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiTmV0d29ya1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE5LjgwNTYgMTEuMzQ4NUMxOS43MzczIDExLjI2NDQgMTkuNjUxIDExLjE5NjUgMTkuNTUzIDExLjE1MDFDMTkuNDU1MSAxMS4xMDM2IDE5LjM0OCAxMS4wNzk3IDE5LjIzOTUgMTEuMDhIMTcuNzg4MlYxMC4zNTQ0QzE3Ljc4ODIgOS43NzY5NiAxNy41NTg4IDkuMjIzMjEgMTcuMTUwNSA4LjgxNDkzQzE2Ljc0MjIgOC40MDY2NSAxNi4xODg1IDguMTc3MjggMTUuNjExMSA4LjE3NzI4SDExLjA1MzhMMTAuODIxNSA3LjQ1MTU5QzEwLjY3MSA3LjAyNTc4IDEwLjM5MTggNi42NTczMyAxMC4wMjI1IDYuMzk3MjhDOS42NTMyMiA2LjEzNzI0IDkuMjEyMjMgNS45OTg0NyA4Ljc2MDU5IDYuMDAwMjFINi4xNzcxM0M1LjU5OTc0IDYuMDAwMjEgNS4wNDU5OSA2LjIyOTU4IDQuNjM3NzEgNi42Mzc4NkM0LjIyOTQzIDcuMDQ2MTQgNC4wMDAwNiA3LjU5OTg5IDQuMDAwMDYgOC4xNzcyOFYxNi44ODU2QzQuMDAwMDYgMTcuNDYzIDQuMjI5NDMgMTguMDE2NyA0LjYzNzcxIDE4LjQyNUM1LjA0NTk5IDE4LjgzMzMgNS41OTk3NCAxOS4wNjI2IDYuMTc3MTMgMTkuMDYyNkgxNi42MjcxQzE3LjEyMTQgMTkuMDYxMiAxNy42MDA2IDE4Ljg5MTYgMTcuOTg1NyAxOC41ODE2QzE4LjM3MDggMTguMjcxNyAxOC42MzkgMTcuODM5OSAxOC43NDYxIDE3LjM1NzNMMTkuOTY1MiAxMS45NjU0QzE5Ljk4NzMgMTEuODU3MiAxOS45ODQ0IDExLjc0NTQgMTkuOTU2NyAxMS42Mzg1QzE5LjkyOTEgMTEuNTMxNiAxOS44Nzc0IDExLjQzMjQgMTkuODA1NiAxMS4zNDg1Wk03LjE3MTMzIDE3LjA0NTJDNy4xMzQ0NiAxNy4yMDg5IDcuMDQyIDE3LjM1NDggNi45MDk2OSAxNy40NThDNi43NzczOCAxNy41NjEyIDYuNjEzMzkgMTcuNjE1NCA2LjQ0NTY0IDE3LjYxMTNINi4xNzcxM0M1Ljk4NDY3IDE3LjYxMTMgNS44MDAwOCAxNy41MzQ4IDUuNjYzOTkgMTcuMzk4N0M1LjUyNzkgMTcuMjYyNiA1LjQ1MTQ0IDE3LjA3OCA1LjQ1MTQ0IDE2Ljg4NTZWOC4xNzcyOEM1LjQ1MTQ0IDcuOTg0ODIgNS41Mjc5IDcuODAwMjQgNS42NjM5OSA3LjY2NDE0QzUuODAwMDggNy41MjgwNSA1Ljk4NDY3IDcuNDUxNTkgNi4xNzcxMyA3LjQ1MTU5SDguNzYwNTlDOC45MTg4NCA3LjQ0MzMzIDkuMDc1NDQgNy40ODcxIDkuMjA2NDggNy41NzYyMUM5LjMzNzUxIDcuNjY1MzEgOS40MzU3OCA3Ljc5NDg2IDkuNDg2MjggNy45NDUwNkw5Ljg3ODE1IDkuMTM1MkM5LjkyNDcyIDkuMjczNjIgMTAuMDEyIDkuMzk0NzcgMTAuMTI4NSA5LjQ4MjgxQzEwLjI0NSA5LjU3MDg1IDEwLjM4NTQgOS42MjE2OCAxMC41MzEzIDkuNjI4NjZIMTUuNjExMUMxNS44MDM2IDkuNjI4NjYgMTUuOTg4MSA5LjcwNTEyIDE2LjEyNDIgOS44NDEyMUMxNi4yNjAzIDkuOTc3MzEgMTYuMzM2OCAxMC4xNjE5IDE2LjMzNjggMTAuMzU0NFYxMS4wOEg5LjA3OTg5QzguOTEyMTQgMTEuMDc1OSA4Ljc0ODE1IDExLjEzMDEgOC42MTU4NCAxMS4yMzMzQzguNDgzNTMgMTEuMzM2NSA4LjM5MTA3IDExLjQ4MjQgOC4zNTQyIDExLjY0NjFMNy4xNzEzMyAxNy4wNDUyWk0xNy4zMzEgMTcuMDQ1MkMxNy4yOTQxIDE3LjIwODkgMTcuMjAxNyAxNy4zNTQ4IDE3LjA2OTMgMTcuNDU4QzE2LjkzNyAxNy41NjEyIDE2Ljc3MyAxNy42MTU0IDE2LjYwNTMgMTcuNjExM0g4LjUwNjZDOC41NDQwOCAxNy41MzA0IDguNTcwOTEgMTcuNDQ1IDguNTg2NDIgMTcuMzU3M0w5LjY2MDQ0IDEyLjUzMTRIMTguMzY4N0wxNy4zMzEgMTcuMDQ1MlpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiUmVwb3J0c1wiLFxyXG4gIH0sXHJcbl1cclxuZXhwb3J0IGNvbnN0IFNldHRpbmdzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTcuNzc3NSAxNS42NjYzQzE2LjkxMzMgMTQuNjA4NiAxNi4zMDMyIDE0LjA3MDEgMTYuMzAzMiAxMS4xNTRDMTYuMzAzMiA4LjQ4MzU2IDE0LjkzOTUgNy41MzIxNiAxMy44MTcyIDcuMDcwMUMxMy42NjgxIDcuMDA4ODUgMTMuNTI3NyA2Ljg2ODE3IDEzLjQ4MjMgNi43MTUwNUMxMy4yODU0IDYuMDQ1IDEyLjczMzUgNS40NTQ3MSAxMS45OTk5IDUuNDU0NzFDMTEuMjY2MiA1LjQ1NDcxIDEwLjcxMzkgNi4wNDUzNCAxMC41MTkxIDYuNzE1NzJDMTAuNDczNiA2Ljg3MDUzIDEwLjMzMzMgNy4wMDg4NSAxMC4xODQyIDcuMDcwMUM5LjA2MDUyIDcuNTMyODQgNy42OTgyMiA4LjQ4MDg3IDcuNjk4MjIgMTEuMTU0QzcuNjk2NTMgMTQuMDcwMSA3LjA4NjM5IDE0LjYwODYgNi4yMjIxNiAxNS42NjYzQzUuODY0MDggMTYuMTA0NSA2LjE3Nzc0IDE2Ljc2MjQgNi44MDQwMyAxNi43NjI0SDE3LjE5OUMxNy44MjIgMTYuNzYyNCAxOC4xMzM2IDE2LjEwMjUgMTcuNzc3NSAxNS42NjYzWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzg3OTdBXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE0LjE1MzggMTYuNzYyNFYxNy4zMDA5QzE0LjE1MzggMTcuODcyMSAxMy45MjY4IDE4LjQxOTkgMTMuNTIyOSAxOC44MjM5QzEzLjExOSAxOS4yMjc4IDEyLjU3MTIgMTkuNDU0NyAxMS45OTk5IDE5LjQ1NDdDMTEuNDI4NyAxOS40NTQ3IDEwLjg4MDggMTkuMjI3OCAxMC40NzY5IDE4LjgyMzlDMTAuMDczIDE4LjQxOTkgOS44NDYwNyAxNy44NzIxIDkuODQ2MDcgMTcuMzAwOVYxNi43NjI0XCJcclxuICAgICAgICAgIHN0cm9rZT1cIiM3ODc5N0FcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE4LjYxMjkgMTMuMDQzNkMxOC40OTIgMTIuOTA1OSAxOC40MjUzIDEyLjcyODkgMTguNDI1MyAxMi41NDU3QzE4LjQyNTMgMTIuMzYyNCAxOC40OTIgMTIuMTg1NCAxOC42MTI5IDEyLjA0NzdMMTkuNTc4NiAxMC45NjEzQzE5LjY4NSAxMC44NDI2IDE5Ljc1MTEgMTAuNjkzMyAxOS43Njc0IDEwLjUzNDdDMTkuNzgzNiAxMC4zNzYxIDE5Ljc0OTMgMTAuMjE2NCAxOS42NjkyIDEwLjA3ODZMMTguMTYwMyA3LjQ2ODIzQzE4LjA4MSA3LjMzMDU2IDE3Ljk2MDIgNy4yMjE0MyAxNy44MTUzIDcuMTU2NEMxNy42NzAzIDcuMDkxMzggMTcuNTA4NSA3LjA3Mzc3IDE3LjM1MyA3LjEwNjA5TDE1LjkzNDYgNy4zOTI3OEMxNS43NTQyIDcuNDMwMDcgMTUuNTY2MyA3LjQwMDAyIDE1LjQwNjQgNy4zMDgyOEMxNS4yNDY2IDcuMjE2NTUgMTUuMTI1OSA3LjA2OTQ5IDE1LjA2NyA2Ljg5NDg1TDE0LjYwNjggNS41MTQyQzE0LjU1NjIgNS4zNjQzNSAxNC40NTk4IDUuMjM0MiAxNC4zMzExIDUuMTQyMTRDMTQuMjAyNSA1LjA1MDA4IDE0LjA0ODIgNS4wMDA3NyAxMy44OTAxIDUuMDAxMThIMTAuODcyM0MxMC43MDc4IDQuOTkyNTkgMTAuNTQ0OSA1LjAzODA5IDEwLjQwODcgNS4xMzA3M0MxMC4yNzI1IDUuMjIzMzcgMTAuMTcwMyA1LjM1ODA1IDEwLjExNzggNS41MTQyTDkuNjk1MzQgNi44OTQ4NUM5LjYzNjQ5IDcuMDY5NDkgOS41MTU3NiA3LjIxNjU1IDkuMzU1OTIgNy4zMDgyOEM5LjE5NjA4IDcuNDAwMDIgOS4wMDgyIDcuNDMwMDcgOC44Mjc3MiA3LjM5Mjc4TDcuMzcxNjMgNy4xMDYwOUM3LjIyNDE4IDcuMDg1MjUgNy4wNzM4NSA3LjEwODUyIDYuOTM5NiA3LjE3Mjk3QzYuODA1MzQgNy4yMzc0MSA2LjY5MzE2IDcuMzQwMTQgNi42MTcxOSA3LjQ2ODIzTDUuMTA4MjkgMTAuMDc4NkM1LjAyNjE3IDEwLjIxNDkgNC45ODkyNSAxMC4zNzM3IDUuMDAyOCAxMC41MzIyQzUuMDE2MzUgMTAuNjkwOCA1LjA3OTY4IDEwLjg0MDkgNS4xODM3MyAxMC45NjEzTDYuMTQxODggMTIuMDQ3N0M2LjI2Mjg0IDEyLjE4NTQgNi4zMjk1NCAxMi4zNjI0IDYuMzI5NTQgMTIuNTQ1N0M2LjMyOTU0IDEyLjcyODkgNi4yNjI4NCAxMi45MDU5IDYuMTQxODggMTMuMDQzNkw1LjE4MzczIDE0LjEzQzUuMDc5NjggMTQuMjUwNCA1LjAxNjM1IDE0LjQwMDYgNS4wMDI4IDE0LjU1OTFDNC45ODkyNSAxNC43MTc3IDUuMDI2MTcgMTQuODc2NCA1LjEwODI5IDE1LjAxMjdMNi42MTcxOSAxNy42MjMxQzYuNjk2NDggMTcuNzYwOCA2LjgxNzIgMTcuODY5OSA2Ljk2MjE2IDE3LjkzNDlDNy4xMDcxMSAxOCA3LjI2ODkgMTguMDE3NiA3LjQyNDQ1IDE3Ljk4NTJMOC44NDI4MSAxNy42OTg2QzkuMDIzMjkgMTcuNjYxMyA5LjIxMTE3IDE3LjY5MTMgOS4zNzEwMSAxNy43ODMxQzkuNTMwODUgMTcuODc0OCA5LjY1MTU4IDE4LjAyMTggOS43MTA0MyAxOC4xOTY1TDEwLjE3MDYgMTkuNTc3MUMxMC4yMjMxIDE5LjczMzMgMTAuMzI1MyAxOS44NjggMTAuNDYxNSAxOS45NjA2QzEwLjU5NzggMjAuMDUzMiAxMC43NjA2IDIwLjA5ODcgMTAuOTI1MSAyMC4wOTAySDEzLjk0MjlDMTQuMTAxIDIwLjA5MDYgMTQuMjU1MyAyMC4wNDEzIDE0LjM4NCAxOS45NDkyQzE0LjUxMjYgMTkuODU3MSAxNC42MDkgMTkuNzI3IDE0LjY1OTYgMTkuNTc3MUwxNS4xMTk4IDE4LjE5NjVDMTUuMTc4NyAxOC4wMjE4IDE1LjI5OTQgMTcuODc0OCAxNS40NTkyIDE3Ljc4MzFDMTUuNjE5MSAxNy42OTEzIDE1LjgwNyAxNy42NjEzIDE1Ljk4NzQgMTcuNjk4NkwxNy40MDU4IDE3Ljk4NTJDMTcuNTYxNCAxOC4wMTc2IDE3LjcyMzEgMTggMTcuODY4MSAxNy45MzQ5QzE4LjAxMyAxNy44Njk5IDE4LjEzMzggMTcuNzYwOCAxOC4yMTMxIDE3LjYyMzFMMTkuNzIyIDE1LjAxMjdDMTkuODAyMSAxNC44NzQ5IDE5LjgzNjUgMTQuNzE1MiAxOS44MjAyIDE0LjU1NjZDMTkuODAzOSAxNC4zOTgxIDE5LjczNzggMTQuMjQ4NyAxOS42MzE0IDE0LjEzTDE4LjYxMjkgMTMuMDQzNlpNMTcuNDg4OCAxNC4wNTQ2TDE4LjA5MjQgMTQuNzMzNkwxNy4xMjY3IDE2LjQwODRMMTYuMjM2NCAxNi4yMjc0QzE1LjY5MyAxNi4xMTYzIDE1LjEyNzggMTYuMjA4NiAxNC42NDggMTYuNDg2OEMxNC4xNjgyIDE2Ljc2NDkgMTMuODA3MiAxNy4yMDk1IDEzLjYzMzYgMTcuNzM2M0wxMy4zNDY5IDE4LjU4MTNIMTEuNDE1NUwxMS4xNDM5IDE3LjcyMTJDMTAuOTcwMiAxNy4xOTQ1IDEwLjYwOTMgMTYuNzQ5OCAxMC4xMjk1IDE2LjQ3MTdDOS42NDk2NCAxNi4xOTM1IDkuMDg0NCAxNi4xMDEyIDguNTQxMDMgMTYuMjEyM0w3LjY1MDc4IDE2LjM5MzRMNi42NyAxNC43MjZMNy4yNzM1NiAxNC4wNDdDNy42NDQ3MSAxMy42MzIxIDcuODQ5OSAxMy4wOTQ5IDcuODQ5OSAxMi41MzgxQzcuODQ5OSAxMS45ODE0IDcuNjQ0NzEgMTEuNDQ0MiA3LjI3MzU2IDExLjAyOTJMNi42NyAxMC4zNTAyTDcuNjM1NjkgOC42OTA0M0w4LjUyNTk0IDguODcxNUM5LjA2OTMxIDguOTgyNTcgOS42MzQ1NSA4Ljg5MDI3IDEwLjExNDQgOC42MTIxMkMxMC41OTQyIDguMzMzOTcgMTAuOTU1MiA3Ljg4OTMzIDExLjEyODggNy4zNjI2TDExLjQxNTUgNi41MTAwOEgxMy4zNDY5TDEzLjYzMzYgNy4zNzAxNUMxMy44MDcyIDcuODk2ODcgMTQuMTY4MiA4LjM0MTUxIDE0LjY0OCA4LjYxOTY3QzE1LjEyNzggOC44OTc4MiAxNS42OTMgOC45OTAxMiAxNi4yMzY0IDguODc5MDVMMTcuMTI2NyA4LjY5Nzk4TDE4LjA5MjQgMTAuMzcyOUwxNy40ODg4IDExLjA1MTlDMTcuMTIxOCAxMS40NjU5IDE2LjkxOTIgMTIgMTYuOTE5MiAxMi41NTMyQzE2LjkxOTIgMTMuMTA2NSAxNy4xMjE4IDEzLjY0MDYgMTcuNDg4OCAxNC4wNTQ2Wk0xMi4zODEyIDkuNTI3ODdDMTEuNzg0MyA5LjUyNzg3IDExLjIwMDkgOS43MDQ4NiAxMC43MDQ2IDEwLjAzNjVDMTAuMjA4MyAxMC4zNjgxIDkuODIxNSAxMC44Mzk0IDkuNTkzMDkgMTEuMzkwOEM5LjM2NDY5IDExLjk0MjIgOS4zMDQ5MiAxMi41NDkgOS40MjEzNyAxMy4xMzQ0QzkuNTM3ODEgMTMuNzE5OCA5LjgyNTIyIDE0LjI1NzUgMTAuMjQ3MyAxNC42Nzk2QzEwLjY2OTMgMTUuMTAxNiAxMS4yMDcgMTUuMzg5IDExLjc5MjQgMTUuNTA1NUMxMi4zNzc4IDE1LjYyMTkgMTIuOTg0NiAxNS41NjIyIDEzLjUzNiAxNS4zMzM3QzE0LjA4NzUgMTUuMTA1MyAxNC41NTg4IDE0LjcxODUgMTQuODkwNCAxNC4yMjIzQzE1LjIyMiAxMy43MjYgMTUuMzk5IDEzLjE0MjUgMTUuMzk5IDEyLjU0NTdDMTUuMzk5IDExLjc0NTMgMTUuMDgxIDEwLjk3NzcgMTQuNTE1MSAxMC40MTE4QzEzLjk0OTEgOS44NDU4MiAxMy4xODE1IDkuNTI3ODcgMTIuMzgxMiA5LjUyNzg3Wk0xMi4zODEyIDE0LjA1NDZDMTIuMDgyNyAxNC4wNTQ2IDExLjc5MSAxMy45NjYxIDExLjU0MjkgMTMuODAwM0MxMS4yOTQ3IDEzLjYzNDUgMTEuMTAxMyAxMy4zOTg4IDEwLjk4NzEgMTMuMTIzMUMxMC44NzI5IDEyLjg0NzQgMTAuODQzIDEyLjU0NCAxMC45MDEzIDEyLjI1MTNDMTAuOTU5NSAxMS45NTg2IDExLjEwMzIgMTEuNjg5NyAxMS4zMTQyIDExLjQ3ODdDMTEuNTI1MiAxMS4yNjc3IDExLjc5NDEgMTEuMTI0IDEyLjA4NjggMTEuMDY1OEMxMi4zNzk1IDExLjAwNzUgMTIuNjgyOSAxMS4wMzc0IDEyLjk1ODYgMTEuMTUxNkMxMy4yMzQzIDExLjI2NTggMTMuNDcgMTEuNDU5MiAxMy42MzU4IDExLjcwNzRDMTMuODAxNiAxMS45NTU1IDEzLjg5MDEgMTIuMjQ3MiAxMy44OTAxIDEyLjU0NTdDMTMuODkwMSAxMi45NDU5IDEzLjczMTEgMTMuMzI5NiAxMy40NDgxIDEzLjYxMjZDMTMuMTY1MiAxMy44OTU2IDEyLjc4MTQgMTQuMDU0NiAxMi4zODEyIDE0LjA1NDZaXCJcclxuICAgICAgICAgIGZpbGw9XCIjNzg3OTdBXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICBuYW1lOiBcIlNldHRpbmdzXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE3LjA2MSAxMi4wNDc4QzE2LjkxNiAxMi4wNDc4IDE2Ljc3NjkgMTEuOTkwMiAxNi42NzQ0IDExLjg4NzdDMTYuNTcxOCAxMS43ODUyIDE2LjUxNDIgMTEuNjQ2MSAxNi41MTQyIDExLjUwMTFWOS45NTY5NUMxNi41MTQyIDcuNzY5ODIgMTQuNDkzMyA2LjAyMDEyIDEyLjAwODcgNi4wMjAxMkM5LjUyNDE0IDYuMDIwMTIgNy41MDMyMyA3Ljc5MTY5IDcuNTAzMjMgOS45NTY5NVYxMS41MDExQzcuNTAzMjMgMTEuNjQ2MSA3LjQ0NTYzIDExLjc4NTIgNy4zNDMwOCAxMS44ODc3QzcuMjQwNTQgMTEuOTkwMiA3LjEwMTQ3IDEyLjA0NzggNi45NTY0NSAxMi4wNDc4QzYuODExNDMgMTIuMDQ3OCA2LjY3MjM2IDExLjk5MDIgNi41Njk4MiAxMS44ODc3QzYuNDY3MjggMTEuNzg1MiA2LjQwOTY3IDExLjY0NjEgNi40MDk2NyAxMS41MDExVjkuOTU2OTVDNi40MDk2NyA3LjE3NDkyIDguOTI0ODcgNC45MDkwNiAxMi4wMDg3IDQuOTA5MDZDMTUuMDkyNiA0LjkwOTA2IDE3LjYwNzggNy4xNzQ5MiAxNy42MDc4IDkuOTU2OTVWMTEuNTAxMUMxNy42MDg0IDExLjU3MyAxNy41OTQ2IDExLjY0NDQgMTcuNTY3MyAxMS43MTFDMTcuNTQwMSAxMS43Nzc2IDE3LjQ5OTggMTEuODM4MSAxNy40NDg5IDExLjg4OUMxNy4zOTggMTEuOTM5OSAxNy4zMzc1IDExLjk4MDEgMTcuMjcwOSAxMi4wMDc0QzE3LjIwNDMgMTIuMDM0NyAxNy4xMzMgMTIuMDQ4NCAxNy4wNjEgMTIuMDQ3OFpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTUuNTgyNSAxNy4xOTJDMTUuNDM3NSAxNy4xOTIgMTUuMjk4NCAxNy4xMzQ0IDE1LjE5NTkgMTcuMDMxOUMxNS4wOTM0IDE2LjkyOTMgMTUuMDM1NyAxNi43OTAzIDE1LjAzNTcgMTYuNjQ1MlYxMS40NTNDMTUuMDQwMyAxMS4zMTEgMTUuMDk5OSAxMS4xNzY0IDE1LjIwMiAxMS4wNzc2QzE1LjMwNCAxMC45Nzg4IDE1LjQ0MDUgMTAuOTIzNiAxNS41ODI1IDEwLjkyMzdDMTcuNDY3OCAxMC45MjM3IDE5LjAwMzIgMTIuMzM2NiAxOS4wMDMyIDE0LjA2ODhDMTkuMDAzMiAxNS44MDEgMTcuNDY3OCAxNy4xOTIgMTUuNTgyNSAxNy4xOTJaTTE2LjEyOTMgMTIuMDU2NlYxNi4wNDE2QzE2LjYwOCAxNS45NjIzIDE3LjA0NTIgMTUuNzIxNyAxNy4zNjgzIDE1LjM1OTZDMTcuNjkxMyAxNC45OTc2IDE3Ljg4MDggMTQuNTM1OSAxNy45MDUzIDE0LjA1MTNDMTcuODgxOCAxMy41NjU5IDE3LjY5MjggMTMuMTAzMiAxNy4zNjk2IDEyLjc0MDNDMTcuMDQ2NSAxMi4zNzczIDE2LjYwODcgMTIuMTM2MSAxNi4xMjkzIDEyLjA1NjZaTTguNDE3NSAxNy4xOTJDNi41MzIxOSAxNy4xOTIgNC45OTY4MyAxNS43ODM1IDQuOTk2ODMgMTQuMDUxM0M0Ljk5NjgzIDEyLjMxOTEgNi41MzIxOSAxMC45MjM3IDguNDE3NSAxMC45MjM3QzguNTYyNTEgMTAuOTIzNyA4LjcwMTU5IDEwLjk4MTMgOC44MDQxMyAxMS4wODM5QzguOTA2NjcgMTEuMTg2NCA4Ljk2NDI4IDExLjMyNTUgOC45NjQyOCAxMS40NzA1VjE2LjY0NTJDOC45NjQyOCAxNi43OTAzIDguOTA2NjcgMTYuOTI5MyA4LjgwNDEzIDE3LjAzMTlDOC43MDE1OSAxNy4xMzQ0IDguNTYyNTEgMTcuMTkyIDguNDE3NSAxNy4xOTJaTTcuODcwNzEgMTIuMDU2NkM3LjM5MTMgMTIuMTM2MSA2Ljk1MzU2IDEyLjM3NzMgNi42MzA0MiAxMi43NDAzQzYuMzA3MjcgMTMuMTAzMiA2LjExODIzIDEzLjU2NTkgNi4wOTQ3NiAxNC4wNTEzQzYuMTE5MiAxNC41MzU5IDYuMzA4NjggMTQuOTk3NiA2LjYzMTc0IDE1LjM1OTZDNi45NTQ4IDE1LjcyMTcgNy4zOTIgMTUuOTYyMyA3Ljg3MDcxIDE2LjA0MTZWMTIuMDU2NlpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTUuNDAzMSAxOC45NzI0SDEzLjU5MjJDMTMuNDQ3MiAxOC45NzI0IDEzLjMwODEgMTguOTE0OCAxMy4yMDU2IDE4LjgxMjJDMTMuMTAzIDE4LjcwOTcgMTMuMDQ1NCAxOC41NzA2IDEzLjA0NTQgMTguNDI1NkMxMy4wNDU0IDE4LjI4MDYgMTMuMTAzIDE4LjE0MTUgMTMuMjA1NiAxOC4wMzg5QzEzLjMwODEgMTcuOTM2NCAxMy40NDcyIDE3Ljg3ODggMTMuNTkyMiAxNy44Nzg4SDE1LjQwMzFDMTUuNjg2MiAxNy44Nzg4IDE1Ljk1NzcgMTcuNzY2MyAxNi4xNTc4IDE3LjU2NjJDMTYuMzU4IDE3LjM2NiAxNi40NzA1IDE3LjA5NDUgMTYuNDcwNSAxNi44MTE1VjE2LjU3MDlDMTYuNDcwNSAxNi40MjU5IDE2LjUyODEgMTYuMjg2OCAxNi42MzA2IDE2LjE4NDNDMTYuNzMzMSAxNi4wODE3IDE2Ljg3MjIgMTYuMDI0MSAxNy4wMTcyIDE2LjAyNDFDMTcuMTYyMyAxNi4wMjQxIDE3LjMwMTMgMTYuMDgxNyAxNy40MDM5IDE2LjE4NDNDMTcuNTA2NCAxNi4yODY4IDE3LjU2NCAxNi40MjU5IDE3LjU2NCAxNi41NzA5VjE2LjgxMTVDMTcuNTY0IDE3LjM4NDYgMTcuMzM2NCAxNy45MzQyIDE2LjkzMTEgMTguMzM5NUMxNi41MjU5IDE4Ljc0NDcgMTUuOTc2MiAxOC45NzI0IDE1LjQwMzEgMTguOTcyNFpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTIuNjU2MiAyMC4wMDAySDExLjU3NThDMTEuMTc5IDIwLjAwMDIgMTAuNzk4NSAxOS44NDI1IDEwLjUxNzkgMTkuNTYyQzEwLjIzNzQgMTkuMjgxNCAxMC4wNzk4IDE4LjkwMDkgMTAuMDc5OCAxOC41MDQyVjE4LjQ0MjlDMTAuMDgwOSAxOC4wNDY5IDEwLjIzOTEgMTcuNjY3NSAxMC41MTk1IDE3LjM4NzlDMTAuNzk5OSAxNy4xMDgzIDExLjE3OTggMTYuOTUxMyAxMS41NzU4IDE2Ljk1MTNIMTIuNjU2MkMxMy4wNTE4IDE2Ljk1MTMgMTMuNDMxMiAxNy4xMDg0IDEzLjcxMDkgMTcuMzg4MkMxMy45OTA3IDE3LjY2NzkgMTQuMTQ3OCAxOC4wNDczIDE0LjE0NzggMTguNDQyOVYxOC41MDQyQzE0LjE0NzggMTguOTAwMiAxMy45OTA4IDE5LjI4IDEzLjcxMTIgMTkuNTYwNEMxMy40MzE2IDE5Ljg0MDkgMTMuMDUyMiAxOS45OTkgMTIuNjU2MiAyMC4wMDAyWk0xMS41ODQ1IDE4LjA0NDlDMTEuNDc4NSAxOC4wNDQ5IDExLjM3NjggMTguMDg2NyAxMS4zMDE1IDE4LjE2MTJDMTEuMjI2MSAxOC4yMzU3IDExLjE4MzIgMTguMzM2OSAxMS4xODIxIDE4LjQ0MjlWMTguNTA0MkMxMS4xODIxIDE4LjYxMDkgMTEuMjI0NSAxOC43MTMyIDExLjMgMTguNzg4N0MxMS4zNzU0IDE4Ljg2NDIgMTEuNDc3OCAxOC45MDY2IDExLjU4NDUgMTguOTA2NkgxMi42NTYyQzEyLjc2MjIgMTguOTA1NCAxMi44NjM0IDE4Ljg2MjUgMTIuOTM3OSAxOC43ODcyQzEzLjAxMjUgMTguNzExOCAxMy4wNTQzIDE4LjYxMDEgMTMuMDU0MyAxOC41MDQyVjE4LjQ0MjlDMTMuMDU0MyAxOC4zMzczIDEzLjAxMjMgMTguMjM2MSAxMi45Mzc3IDE4LjE2MTRDMTIuODYzIDE4LjA4NjggMTIuNzYxOCAxOC4wNDQ5IDEyLjY1NjIgMTguMDQ0OUgxMS41ODQ1WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzg3OTdBXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjAuNFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgbmFtZTogXCJTdXBwb3J0XCIsXHJcbiAgfSxcclxuXVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgU2VuZFRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgU2lkZWJhclRleHQgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcblxyXG5pbXBvcnQgeyBEYXNoYm9hcmREYXRhIH0gZnJvbSBcIi4vRGF0YVwiXHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8QmFyUm93PlxyXG4gICAgICAgIHtEYXNoYm9hcmREYXRhLm1hcCgoZGF0YTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICA8QmFyQ29sdW1uIGNsYXNzTmFtZT17ZGF0YS5jbGFzc25hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7ZGF0YS5pY29ufVxyXG4gICAgICAgICAgICA8QmFyVGV4dD4ge2RhdGEubmFtZX08L0JhclRleHQ+XHJcbiAgICAgICAgICA8L0JhckNvbHVtbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9CYXJSb3c+XHJcbiAgICAgIDxCYXJMaW5lIC8+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAxMnB4IDAgMCAwO1xyXG5gXHJcbmNvbnN0IEJhclJvdyA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc21va2VXaGl0ZX07XHJcbiAgICBjb2xvcjogJHtTZW5kVGhlbWUuYmx1ZX07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEJhckNvbHVtbiA9IHN0eWxlZC5saWBcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc25vd1doaXRlfTtcclxuICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xyXG4gIHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICB9XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUud2hpdGV9O1xyXG4gIH1cclxuYFxyXG5jb25zdCBCYXJUZXh0ID0gc3R5bGVkKFNpZGViYXJUZXh0KWBcclxuICBtYXJnaW46IDAgOHB4O1xyXG5gXHJcbmNvbnN0IEJhckxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5zdHJva2V9O1xyXG4gIG9wYWNpdHk6IDAuMTtcclxuICBtYXJnaW46IDE2cHggMHB4O1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgU2VuZFRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgU2lkZWJhclRleHQgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcblxyXG5pbXBvcnQgeyBTZXR0aW5nc0RhdGEgfSBmcm9tIFwiLi9EYXRhXCJcclxuXHJcbmNvbnN0IFNldHRpbmdzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPEJhclJvdz5cclxuICAgICAgICB7U2V0dGluZ3NEYXRhLm1hcCgoZGF0YTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICA8QmFyQ29sdW1uIGNsYXNzTmFtZT17ZGF0YS5jbGFzc25hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7ZGF0YS5pY29ufVxyXG4gICAgICAgICAgICA8QmFyVGV4dD4ge2RhdGEubmFtZX08L0JhclRleHQ+XHJcbiAgICAgICAgICA8L0JhckNvbHVtbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9CYXJSb3c+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xyXG5gXHJcbmNvbnN0IEJhclJvdyA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc21va2VXaGl0ZX07XHJcbiAgICBjb2xvcjogJHtTZW5kVGhlbWUuYmx1ZX07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEJhckNvbHVtbiA9IHN0eWxlZC5saWBcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc25vd1doaXRlfTtcclxuICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICR7U2VuZFRoZW1lLndoaXRlfTtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBCYXJUZXh0ID0gc3R5bGVkKFNpZGViYXJUZXh0KWBcclxuICBtYXJnaW46IDAgOHB4O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOTVmZDFmZjEnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUdVTE8zQkRBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GTTM3SEhZSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1WR0lHNTVNMi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUg2SU03UVJHLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTk1RkQxRkYxLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxl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QUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBLEVBRVY7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQTtBQUFBOzs7QUNuUVo7QUFBQSxtQkFBMEI7QUFDMUIsZ0NBQW1COzs7QUNEbkI7QUFBQSxnQ0FBbUI7QUFDWixJQUFNLFVBQVUsa0NBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVF2QixJ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
