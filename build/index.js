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
  default: () => routes_default
});
init_react();
var import_react14 = __toESM(require("react"));
var import_styled_components16 = __toESM(require("styled-components"));

// app/components/MainContent.tsx
init_react();
var import_react7 = __toESM(require("react"));
var import_styled_components9 = __toESM(require("styled-components"));

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
  border: "#e4e6ea"
};

// app/utils/paginate.tsx
init_react();
var import_lodash = __toESM(require("lodash"));
var paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return (0, import_lodash.default)(items).slice(startIndex).take(pageSize).value();
};

// app/components/maincontent/Filter.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_styled_components4 = __toESM(require("styled-components"));

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
var Categories = () => {
  const data = [
    { name: "All", count: 30 },
    { name: "Pending", count: 30 },
    { name: "Ready", count: 30 },
    { name: "Booked", count: 30 }
  ];
  return /* @__PURE__ */ import_react.default.createElement(Body, null, /* @__PURE__ */ import_react.default.createElement(Cover, null, /* @__PURE__ */ import_react.default.createElement(CategoryName, null, /* @__PURE__ */ import_react.default.createElement(CategoryText, null), /* @__PURE__ */ import_react.default.createElement(CategoryCount, null))));
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
`;
var CategoryName = import_styled_components3.default.div`
  flex-direction: row;
  margin: 0 8px 0 0;
`;
var CategoryText = (0, import_styled_components3.default)(SidebarText)``;
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
  background: rgba(233, 236, 241, 0.6);
  color: #737a91;
`;
var Categories_default = Categories;

// app/components/maincontent/Pagination.tsx
init_react();
var import_react2 = __toESM(require("react"));
var Pagination = () => {
  return /* @__PURE__ */ import_react2.default.createElement("div", null, "Pagination");
};
var Pagination_default = Pagination;

// app/components/maincontent/Filter.tsx
var Filter = () => {
  return /* @__PURE__ */ import_react3.default.createElement(Body2, null, /* @__PURE__ */ import_react3.default.createElement(Cover2, null, /* @__PURE__ */ import_react3.default.createElement(Categories_default, null), /* @__PURE__ */ import_react3.default.createElement(Pagination_default, null)), /* @__PURE__ */ import_react3.default.createElement(FilterLine, null));
};
var Body2 = import_styled_components4.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
var Cover2 = import_styled_components4.default.div`
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
var FilterLine = import_styled_components4.default.span`
  height: 1px;
  width: 100%;

  background: ${SendTheme.border};
`;
var Filter_default = Filter;

// app/components/maincontent/Header.tsx
init_react();
var import_react4 = __toESM(require("react"));
var import_styled_components6 = __toESM(require("styled-components"));

// app/styles/ButtonStyles.tsx
init_react();
var import_styled_components5 = __toESM(require("styled-components"));
var MainButton = import_styled_components5.default.button`
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
  return /* @__PURE__ */ import_react4.default.createElement(Body3, null, /* @__PURE__ */ import_react4.default.createElement(Cover3, null, /* @__PURE__ */ import_react4.default.createElement(HeaderTextWrap, null, /* @__PURE__ */ import_react4.default.createElement(HeaderText, null, "Quotes")), /* @__PURE__ */ import_react4.default.createElement(HeaderButtonWrap, null, /* @__PURE__ */ import_react4.default.createElement(HeaderButton, null, "Create New"))));
};
var Body3 = import_styled_components6.default.div`
  width: 100%;
  padding: 0px 40px;
`;
var Cover3 = import_styled_components6.default.div`
  height: 46px;
  max-width: 1206px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 24px auto;
  align-items: center;
  justify-content: space-between;
`;
var HeaderTextWrap = (0, import_styled_components6.default)(Header1)`
  color: ${SendTheme.dark};
`;
var HeaderText = import_styled_components6.default.div``;
var HeaderButtonWrap = import_styled_components6.default.div``;
var HeaderButton = (0, import_styled_components6.default)(MainButton)``;
var Header_default = Header;

// app/components/maincontent/Table.tsx
init_react();
var import_react6 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));

// app/components/maincontent/TableContent.tsx
init_react();
var import_react5 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));
var TableContent = () => {
  return /* @__PURE__ */ import_react5.default.createElement(Body4, null, /* @__PURE__ */ import_react5.default.createElement(Import, null));
};
var Body4 = import_styled_components7.default.div``;
var Import = import_styled_components7.default.div``;
var TableContent_default = TableContent;

// app/components/maincontent/Table.tsx
var Table = () => {
  return /* @__PURE__ */ import_react6.default.createElement(Body5, null, /* @__PURE__ */ import_react6.default.createElement(Cover4, null, /* @__PURE__ */ import_react6.default.createElement(TableRow, null, /* @__PURE__ */ import_react6.default.createElement(TableContent_default, null))));
};
var Body5 = import_styled_components8.default.div`
  width: 100%;
  padding: 0px 40px;
`;
var Cover4 = import_styled_components8.default.div`
  max-width: 1206px;
  width: 100%;
  margin: 24px auto;
`;
var TableRow = import_styled_components8.default.div`
  display: flex;
  flex-direction: column;
`;
var Table_default = Table;

// app/components/MainContent.tsx
var MainContent = () => {
  const data = paginate("hello", 2, 5);
  return /* @__PURE__ */ import_react7.default.createElement(Body6, null, /* @__PURE__ */ import_react7.default.createElement(Header_default, null), /* @__PURE__ */ import_react7.default.createElement(Filter_default, null), /* @__PURE__ */ import_react7.default.createElement(Table_default, null));
};
var Body6 = import_styled_components9.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: ${SendTheme.white};
`;
var MainContent_default = MainContent;

// app/components/Sidebar.tsx
init_react();
var import_react13 = __toESM(require("react"));
var import_styled_components15 = __toESM(require("styled-components"));

// app/components/sidebar/Name.tsx
init_react();
var import_react8 = __toESM(require("react"));
var import_styled_components10 = __toESM(require("styled-components"));
var Name = () => {
  return /* @__PURE__ */ import_react8.default.createElement(Body7, null, /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(NameWrap, null, /* @__PURE__ */ import_react8.default.createElement("svg", {
    width: "22",
    height: "12",
    viewBox: "0 0 22 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M5.11344 11.5454C3.91176 11.5454 2.92577 11.2065 2.15546 10.5286C1.38515 9.85073 1 8.94177 1 7.80171V0.54541H3.11064V7.63225C3.11064 8.20741 3.27498 8.65932 3.60364 8.98799C3.94258 9.30638 4.44584 9.46558 5.11344 9.46558C5.78105 9.46558 6.27918 9.30638 6.60784 8.98799C6.94678 8.65932 7.11625 8.20741 7.11625 7.63225V0.54541H9.2423V7.80171C9.2423 8.94177 8.85714 9.85073 8.08683 10.5286C7.31653 11.2065 6.3254 11.5454 5.11344 11.5454Z",
    fill: "white"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M16.6785 5.78351L20.8228 11.3297H18.3732L14.5216 6.2765V11.3297H12.3956V0.54541H14.5216V5.30591L18.2191 0.54541H20.6687L16.6785 5.78351Z",
    fill: "white"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M5.11344 11.5454C3.91176 11.5454 2.92577 11.2065 2.15546 10.5286C1.38515 9.85073 1 8.94177 1 7.80171V0.54541H3.11064V7.63225C3.11064 8.20741 3.27498 8.65932 3.60364 8.98799C3.94258 9.30638 4.44584 9.46558 5.11344 9.46558C5.78105 9.46558 6.27918 9.30638 6.60784 8.98799C6.94678 8.65932 7.11625 8.20741 7.11625 7.63225V0.54541H9.2423V7.80171C9.2423 8.94177 8.85714 9.85073 8.08683 10.5286C7.31653 11.2065 6.3254 11.5454 5.11344 11.5454Z",
    stroke: "white",
    "stroke-width": "0.5"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M16.6785 5.78351L20.8228 11.3297H18.3732L14.5216 6.2765V11.3297H12.3956V0.54541H14.5216V5.30591L18.2191 0.54541H20.6687L16.6785 5.78351Z",
    stroke: "white",
    "stroke-width": "0.5"
  }))), /* @__PURE__ */ import_react8.default.createElement(NameText, null, /* @__PURE__ */ import_react8.default.createElement(NameHeader, null, "Mati Industries"), /* @__PURE__ */ import_react8.default.createElement(NameEmail, null, /* @__PURE__ */ import_react8.default.createElement("a", {
    href: "mailto:Lanremati@gmail.com"
  }, "Lanremati@gmail.com"))), /* @__PURE__ */ import_react8.default.createElement(NameIcon, null, /* @__PURE__ */ import_react8.default.createElement("svg", {
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react8.default.createElement("rect", {
    width: "24",
    height: "24",
    transform: "translate(0 0.5)",
    fill: "#F2F4F7"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M8 10.5L12 14.5L16 10.5",
    stroke: "#A0AEC0",
    "stroke-width": "1.33333",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))));
};
var Body7 = import_styled_components10.default.div`
  height: 69px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${SendTheme.offWhite};
  padding: 16px;
  border-radius: 0px;
`;
var Cover5 = import_styled_components10.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  max-width: 190px;
  margin: 0 auto;
`;
var NameWrap = import_styled_components10.default.div`
  background: ${SendTheme.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;

  border-radius: 8px;
`;
var NameText = import_styled_components10.default.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;
var NameHeader = (0, import_styled_components10.default)(CaptionLarge)`
  text-align: left;
  color: ${SendTheme.dark};
`;
var NameEmail = (0, import_styled_components10.default)(CaptionSmall)`
  text-align: left;

  a {
    color: ${SendTheme.gray};
  }
`;
var NameIcon = import_styled_components10.default.span`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
var Name_default = Name;

// app/assets/logo.svg
var logo_default = "/build/_assets/logo-EIDL4KY2.svg";

// app/components/sidebar/Section.tsx
init_react();
var import_react12 = __toESM(require("react"));
var import_styled_components14 = __toESM(require("styled-components"));

// app/components/sidebar/Billing.tsx
init_react();
var import_react9 = __toESM(require("react"));
var import_styled_components11 = __toESM(require("styled-components"));

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
  return /* @__PURE__ */ import_react9.default.createElement(Body8, null, /* @__PURE__ */ import_react9.default.createElement(BarRow, null, BillingData.map((data, index) => /* @__PURE__ */ import_react9.default.createElement(BarColumn, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react9.default.createElement(BarText, null, " ", data.name)))));
};
var Body8 = import_styled_components11.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 4px 0;
  /* justify-content: space-between;
  align-items: flex-start; */
`;
var BarRow = import_styled_components11.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn = import_styled_components11.default.li`
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
`;
var BarText = (0, import_styled_components11.default)(SidebarText)`
  margin: 0 8px;
`;
var Billing_default = Billing;

// app/components/sidebar/Dashboard.tsx
init_react();
var import_react10 = __toESM(require("react"));
var import_styled_components12 = __toESM(require("styled-components"));
var Dashboard = () => {
  return /* @__PURE__ */ import_react10.default.createElement(Body9, null, /* @__PURE__ */ import_react10.default.createElement(BarRow2, null, DashboardData.map((data, index) => /* @__PURE__ */ import_react10.default.createElement(BarColumn2, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react10.default.createElement(BarText2, null, " ", data.name)))), /* @__PURE__ */ import_react10.default.createElement(BarLine, null));
};
var Body9 = import_styled_components12.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 12px 0 0 0;
`;
var BarRow2 = import_styled_components12.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn2 = import_styled_components12.default.li`
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
`;
var BarText2 = (0, import_styled_components12.default)(SidebarText)`
  margin: 0 8px;
`;
var BarLine = import_styled_components12.default.div`
  width: 100%;
  height: 1px;

  background: ${SendTheme.stroke};
  opacity: 0.1;
  margin: 16px 0px;
`;
var Dashboard_default = Dashboard;

// app/components/sidebar/Settings.tsx
init_react();
var import_react11 = __toESM(require("react"));
var import_styled_components13 = __toESM(require("styled-components"));
var Settings = () => {
  return /* @__PURE__ */ import_react11.default.createElement(Body10, null, /* @__PURE__ */ import_react11.default.createElement(BarRow3, null, SettingsData.map((data, index) => /* @__PURE__ */ import_react11.default.createElement(BarColumn3, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react11.default.createElement(BarText3, null, " ", data.name)))));
};
var Body10 = import_styled_components13.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 4px 0;
  /* justify-content: space-between;
  align-items: flex-start; */
`;
var BarRow3 = import_styled_components13.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn3 = import_styled_components13.default.li`
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
`;
var BarText3 = (0, import_styled_components13.default)(SidebarText)`
  margin: 0 8px;
`;
var Settings_default = Settings;

// app/components/sidebar/Section.tsx
var Section = () => {
  return /* @__PURE__ */ import_react12.default.createElement(Body11, null, /* @__PURE__ */ import_react12.default.createElement(Dashboard_default, null), /* @__PURE__ */ import_react12.default.createElement(Billing_default, null), /* @__PURE__ */ import_react12.default.createElement(Settings_default, null));
};
var Body11 = import_styled_components14.default.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`;
var Section_default = Section;

// app/components/Sidebar.tsx
var Sidebar = () => {
  return /* @__PURE__ */ import_react13.default.createElement(Body12, null, /* @__PURE__ */ import_react13.default.createElement(LogoCover, null, /* @__PURE__ */ import_react13.default.createElement(Logo, {
    src: logo_default,
    alt: "Send Freight Logo"
  })), /* @__PURE__ */ import_react13.default.createElement(Section_default, null), /* @__PURE__ */ import_react13.default.createElement(Name_default, null));
};
var Body12 = import_styled_components15.default.div`
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
var LogoCover = import_styled_components15.default.div`
  height: 24px;
  width: 110px;
`;
var Logo = import_styled_components15.default.img`
  height: 24px;
  width: 110px;
  cursor: pointer;
`;
var Sidebar_default = Sidebar;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\routes\index.tsx
var Index = () => {
  return /* @__PURE__ */ import_react14.default.createElement(Body13, null, /* @__PURE__ */ import_react14.default.createElement(Shell, null, " ", /* @__PURE__ */ import_react14.default.createElement(Sidebar_default, null)), /* @__PURE__ */ import_react14.default.createElement(MainContent_default, null));
};
var Body13 = import_styled_components16.default.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 226px auto;
`;
var Shell = import_styled_components16.default.div`
  width: 100%;
  max-width: 226px;
  height: 100vh;
`;
var routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e078576b", "entry": { "module": "/build/entry.client-GULO3BDA.js", "imports": ["/build/_shared/chunk-FM37HHYK.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-VGIG55M2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-X3WV36YV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E078576B.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xcQXVndXN0aW5lIE9naXphXFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxyZWFjdFxcc2VuZFxcYXBwXFxyb290LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVhY3RcXHNlbmRcXGFwcFxccm91dGVzXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTWFpbkNvbnRlbnQudHN4IiwgIi4uL2FwcC9zdHlsZXMvQ29sb3JTdHlsZXMudHN4IiwgIi4uL2FwcC91dGlscy9wYWdpbmF0ZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbWFpbmNvbnRlbnQvRmlsdGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluY29udGVudC9DYXRlZ29yaWVzLnRzeCIsICIuLi9hcHAvc3R5bGVzL1RleHRTdHlsZXMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW5jb250ZW50L1BhZ2luYXRpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW5jb250ZW50L0hlYWRlci50c3giLCAiLi4vYXBwL3N0eWxlcy9CdXR0b25TdHlsZXMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL21haW5jb250ZW50L1RhYmxlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9tYWluY29udGVudC9UYWJsZUNvbnRlbnQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1NpZGViYXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvTmFtZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9TZWN0aW9uLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9zaWRlYmFyL0JpbGxpbmcudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvRGF0YS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9EYXNoYm9hcmQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvU2V0dGluZ3MudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZWFjdFxcXFxzZW5kXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEF1Z3VzdGluZSBPZ2l6YVxcXFxEb2N1bWVudHNcXFxcRGV2ZWxvcG1lbnRcXFxccmVhY3RcXFxcc2VuZFxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZWFjdFxcXFxzZW5kXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9XG4gIH07IiwgImltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiXG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KClcblxuICBsZXQgbWFya3VwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgc2hlZXQuY29sbGVjdFN0eWxlcyhcbiAgICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICAgKVxuICApXG4gIGNvbnN0IHN0eWxlcyA9IHNoZWV0LmdldFN0eWxlVGFncygpXG4gIG1hcmt1cCA9IG1hcmt1cC5yZXBsYWNlKFwiX19TVFlMRVNfX1wiLCBzdHlsZXMpXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXguY3NzXCJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIlNFTkQgRlJFSUdIVFwiIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG5cbiAgICB7XG4gICAgICByZWw6IFwiaWNvblwiLFxuICAgICAgaHJlZjogXCIvZmF2aWNvbi5wbmdcIixcbiAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgfSxcbiAgXVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHt0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIgPyBcIl9fU1RZTEVTX19cIiA6IG51bGx9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwifi9jb21wb25lbnRzL01haW5Db250ZW50XCJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvU2lkZWJhclwiXG5cbmltcG9ydCB7IFNlbmRUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm9keT5cbiAgICAgIDxTaGVsbD5cbiAgICAgICAge1wiIFwifVxuICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgPC9TaGVsbD5cbiAgICAgIDxNYWluQ29udGVudCAvPlxuICAgIDwvQm9keT5cbiAgKVxufVxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNnB4IGF1dG87XG5gXG5jb25zdCBTaGVsbCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIyNnB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuYFxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBTZW5kVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBwYWdpbmF0ZSB9IGZyb20gXCJ+L3V0aWxzL3BhZ2luYXRlXCJcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi9tYWluY29udGVudC9GaWx0ZXJcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL21haW5jb250ZW50L0hlYWRlclwiXHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9tYWluY29udGVudC9UYWJsZVwiXHJcblxyXG5jb25zdCBNYWluQ29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gcGFnaW5hdGUoXCJoZWxsb1wiLCAyLCA1KVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RmlsdGVyIC8+XHJcbiAgICAgIDxUYWJsZSAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGJhY2tncm91bmQ6ICR7U2VuZFRoZW1lLndoaXRlfTtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudFxyXG4iLCAiZXhwb3J0IGNvbnN0IFNlbmRUaGVtZSA9IHtcclxuICBzbW9rZVdoaXRlOiBcIiNFOUVDRjFcIixcclxuICBvZmZXaGl0ZTogXCIjRjJGNEY3XCIsXHJcbiAgd2hpdGU6IFwiI2ZmZlwiLFxyXG4gIGJsYWNrOiBcIiMwMDBcIixcclxuICBzbm93V2hpdGU6IFwiI0Y5RkFGQ1wiLFxyXG4gIHN0cm9rZTogXCIjODE4NjhDXCIsXHJcbiAgZ3JheTogXCIjNzg3OTdBXCIsXHJcbiAgZGFyazogXCIjMzAzMDMwXCIsXHJcbiAgYmx1ZTogXCIjMDc0N0E2XCIsXHJcbiAgYm9yZGVyOiBcIiNlNGU2ZWFcIixcclxufVxyXG4iLCAiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXHJcblxyXG5leHBvcnQgY29uc3QgcGFnaW5hdGUgPSAoaXRlbXM6IGFueSwgcGFnZU51bWJlcjogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3Qgc3RhcnRJbmRleCA9IChwYWdlTnVtYmVyIC0gMSkgKiBwYWdlU2l6ZVxyXG4gIHJldHVybiBfKGl0ZW1zKS5zbGljZShzdGFydEluZGV4KS50YWtlKHBhZ2VTaXplKS52YWx1ZSgpXHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFNlbmRUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gXCIuL0NhdGVnb3JpZXNcIlxyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9QYWdpbmF0aW9uXCJcclxuXHJcbmNvbnN0IEZpbHRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8Q2F0ZWdvcmllcyAvPlxyXG4gICAgICAgIDxQYWdpbmF0aW9uIC8+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICAgIDxGaWx0ZXJMaW5lIC8+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgbWF4LXdpZHRoOiAxMjA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDBweCA0MHB4O1xyXG5gXHJcblxyXG5jb25zdCBGaWx0ZXJMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQ6ICR7U2VuZFRoZW1lLmJvcmRlcn07XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBTaWRlYmFyVGV4dCB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHsgbmFtZTogXCJBbGxcIiwgY291bnQ6IDMwIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVuZGluZ1wiLCBjb3VudDogMzAgfSxcclxuICAgIHsgbmFtZTogXCJSZWFkeVwiLCBjb3VudDogMzAgfSxcclxuICAgIHsgbmFtZTogXCJCb29rZWRcIiwgY291bnQ6IDMwIH0sXHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8Q2F0ZWdvcnlOYW1lPlxyXG4gICAgICAgICAgPENhdGVnb3J5VGV4dD48L0NhdGVnb3J5VGV4dD5cclxuICAgICAgICAgIDxDYXRlZ29yeUNvdW50PjwvQ2F0ZWdvcnlDb3VudD5cclxuICAgICAgICA8L0NhdGVnb3J5TmFtZT5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmBcclxuY29uc3QgQ2F0ZWdvcnlOYW1lID0gc3R5bGVkLmRpdmBcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMCA4cHggMCAwO1xyXG5gXHJcbmNvbnN0IENhdGVnb3J5VGV4dCA9IHN0eWxlZChTaWRlYmFyVGV4dClgYFxyXG5jb25zdCBDYXRlZ29yeUNvdW50ID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMzYsIDI0MSwgMC42KTtcclxuICBjb2xvcjogIzczN2E5MTtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzXHJcbiIsICJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIxID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuYFxyXG5leHBvcnQgY29uc3QgU2lkZWJhclRleHQgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuYFxyXG5leHBvcnQgY29uc3QgQ2FwdGlvbkxhcmdlID0gc3R5bGVkLmg2YFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXB0aW9uU21hbGwgPSBzdHlsZWQuaDZgXHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuYFxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiA8ZGl2PlBhZ2luYXRpb248L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvblxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgTWFpbkJ1dHRvbiB9IGZyb20gXCJ+L3N0eWxlcy9CdXR0b25TdHlsZXNcIlxyXG5pbXBvcnQgeyBTZW5kVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBIZWFkZXIxIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxIZWFkZXJUZXh0V3JhcD5cclxuICAgICAgICAgIDxIZWFkZXJUZXh0PlF1b3RlczwvSGVhZGVyVGV4dD5cclxuICAgICAgICA8L0hlYWRlclRleHRXcmFwPlxyXG4gICAgICAgIDxIZWFkZXJCdXR0b25XcmFwPlxyXG4gICAgICAgICAgPEhlYWRlckJ1dHRvbj5DcmVhdGUgTmV3PC9IZWFkZXJCdXR0b24+XHJcbiAgICAgICAgPC9IZWFkZXJCdXR0b25XcmFwPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHggNDBweDtcclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIG1heC13aWR0aDogMTIwNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYFxyXG5jb25zdCBIZWFkZXJUZXh0V3JhcCA9IHN0eWxlZChIZWFkZXIxKWBcclxuICBjb2xvcjogJHtTZW5kVGhlbWUuZGFya307XHJcbmBcclxuY29uc3QgSGVhZGVyVGV4dCA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBIZWFkZXJCdXR0b25XcmFwID0gc3R5bGVkLmRpdmBgXHJcbmNvbnN0IEhlYWRlckJ1dHRvbiA9IHN0eWxlZChNYWluQnV0dG9uKWBgXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCAiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBTZW5kVGhlbWUgfSBmcm9tIFwiLi9Db2xvclN0eWxlc1wiXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIG1heC13aWR0aDogMTE5cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAke1NlbmRUaGVtZS53aGl0ZX07XHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuYmx1ZX07XHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgVGFibGVDb250ZW50IGZyb20gXCIuL1RhYmxlQ29udGVudFwiXHJcblxyXG5jb25zdCBUYWJsZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICA8VGFibGVDb250ZW50IC8+XHJcbiAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMHB4IDQwcHg7XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjRweCBhdXRvO1xyXG5gXHJcbmNvbnN0IFRhYmxlUm93ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgVGFibGVcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5jb25zdCBUYWJsZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8SW1wb3J0PjwvSW1wb3J0PlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBgXHJcbmNvbnN0IEltcG9ydCA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbnRlbnRcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFNlbmRUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCBOYW1lIGZyb20gXCIuL3NpZGViYXIvTmFtZVwiXHJcbmltcG9ydCBsb2dvIGZyb20gXCJ+L2Fzc2V0cy9sb2dvLnN2Z1wiXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL3NpZGViYXIvU2VjdGlvblwiXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8TG9nb0NvdmVyPlxyXG4gICAgICAgIDxMb2dvIHNyYz17bG9nb30gYWx0PVwiU2VuZCBGcmVpZ2h0IExvZ29cIiAvPlxyXG4gICAgICA8L0xvZ29Db3Zlcj5cclxuICAgICAgPFNlY3Rpb24gLz5cclxuICAgICAgPE5hbWUgLz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3R0b206IDBweDtcclxuICBtYXgtd2lkdGg6IDIyNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc25vd1doaXRlfTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMTZweCAwIDAgMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke1NlbmRUaGVtZS5ib3JkZXJ9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IExvZ29Db3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAxMTBweDtcclxuYFxyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgU2VuZFRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQ2FwdGlvbkxhcmdlLCBDYXB0aW9uU21hbGwgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcblxyXG5jb25zdCBOYW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxOYW1lV3JhcD5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCIyMlwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMiAxMlwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk01LjExMzQ0IDExLjU0NTRDMy45MTE3NiAxMS41NDU0IDIuOTI1NzcgMTEuMjA2NSAyLjE1NTQ2IDEwLjUyODZDMS4zODUxNSA5Ljg1MDczIDEgOC45NDE3NyAxIDcuODAxNzFWMC41NDU0MUgzLjExMDY0VjcuNjMyMjVDMy4xMTA2NCA4LjIwNzQxIDMuMjc0OTggOC42NTkzMiAzLjYwMzY0IDguOTg3OTlDMy45NDI1OCA5LjMwNjM4IDQuNDQ1ODQgOS40NjU1OCA1LjExMzQ0IDkuNDY1NThDNS43ODEwNSA5LjQ2NTU4IDYuMjc5MTggOS4zMDYzOCA2LjYwNzg0IDguOTg3OTlDNi45NDY3OCA4LjY1OTMyIDcuMTE2MjUgOC4yMDc0MSA3LjExNjI1IDcuNjMyMjVWMC41NDU0MUg5LjI0MjNWNy44MDE3MUM5LjI0MjMgOC45NDE3NyA4Ljg1NzE0IDkuODUwNzMgOC4wODY4MyAxMC41Mjg2QzcuMzE2NTMgMTEuMjA2NSA2LjMyNTQgMTEuNTQ1NCA1LjExMzQ0IDExLjU0NTRaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNMTYuNjc4NSA1Ljc4MzUxTDIwLjgyMjggMTEuMzI5N0gxOC4zNzMyTDE0LjUyMTYgNi4yNzY1VjExLjMyOTdIMTIuMzk1NlYwLjU0NTQxSDE0LjUyMTZWNS4zMDU5MUwxOC4yMTkxIDAuNTQ1NDFIMjAuNjY4N0wxNi42Nzg1IDUuNzgzNTFaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNNS4xMTM0NCAxMS41NDU0QzMuOTExNzYgMTEuNTQ1NCAyLjkyNTc3IDExLjIwNjUgMi4xNTU0NiAxMC41Mjg2QzEuMzg1MTUgOS44NTA3MyAxIDguOTQxNzcgMSA3LjgwMTcxVjAuNTQ1NDFIMy4xMTA2NFY3LjYzMjI1QzMuMTEwNjQgOC4yMDc0MSAzLjI3NDk4IDguNjU5MzIgMy42MDM2NCA4Ljk4Nzk5QzMuOTQyNTggOS4zMDYzOCA0LjQ0NTg0IDkuNDY1NTggNS4xMTM0NCA5LjQ2NTU4QzUuNzgxMDUgOS40NjU1OCA2LjI3OTE4IDkuMzA2MzggNi42MDc4NCA4Ljk4Nzk5QzYuOTQ2NzggOC42NTkzMiA3LjExNjI1IDguMjA3NDEgNy4xMTYyNSA3LjYzMjI1VjAuNTQ1NDFIOS4yNDIzVjcuODAxNzFDOS4yNDIzIDguOTQxNzcgOC44NTcxNCA5Ljg1MDczIDguMDg2ODMgMTAuNTI4NkM3LjMxNjUzIDExLjIwNjUgNi4zMjU0IDExLjU0NTQgNS4xMTM0NCAxMS41NDU0WlwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjAuNVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk0xNi42Nzg1IDUuNzgzNTFMMjAuODIyOCAxMS4zMjk3SDE4LjM3MzJMMTQuNTIxNiA2LjI3NjVWMTEuMzI5N0gxMi4zOTU2VjAuNTQ1NDFIMTQuNTIxNlY1LjMwNTkxTDE4LjIxOTEgMC41NDU0MUgyMC42Njg3TDE2LjY3ODUgNS43ODM1MVpcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9OYW1lV3JhcD5cclxuICAgICAgICA8TmFtZVRleHQ+XHJcbiAgICAgICAgICA8TmFtZUhlYWRlcj5NYXRpIEluZHVzdHJpZXM8L05hbWVIZWFkZXI+XHJcbiAgICAgICAgICA8TmFtZUVtYWlsPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOkxhbnJlbWF0aUBnbWFpbC5jb21cIj5MYW5yZW1hdGlAZ21haWwuY29tPC9hPlxyXG4gICAgICAgICAgPC9OYW1lRW1haWw+XHJcbiAgICAgICAgPC9OYW1lVGV4dD5cclxuICAgICAgICA8TmFtZUljb24+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cmVjdFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwLjUpXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiI0YyRjRGN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk04IDEwLjVMMTIgMTQuNUwxNiAxMC41XCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCIjQTBBRUMwXCJcclxuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjMzMzMzXCJcclxuICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L05hbWVJY29uPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDY5cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICR7U2VuZFRoZW1lLm9mZldoaXRlfTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1heC13aWR0aDogMTkwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmBcclxuY29uc3QgTmFtZVdyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICR7U2VuZFRoZW1lLmRhcmt9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuYFxyXG5jb25zdCBOYW1lVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbmBcclxuY29uc3QgTmFtZUhlYWRlciA9IHN0eWxlZChDYXB0aW9uTGFyZ2UpYFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICR7U2VuZFRoZW1lLmRhcmt9O1xyXG5gXHJcbmNvbnN0IE5hbWVFbWFpbCA9IHN0eWxlZChDYXB0aW9uU21hbGwpYFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7U2VuZFRoZW1lLmdyYXl9O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgTmFtZUljb24gPSBzdHlsZWQuc3BhbmBcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IE5hbWVcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBCaWxsaW5nIGZyb20gXCIuL0JpbGxpbmdcIlxyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiXHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9TZXR0aW5nc1wiXHJcblxyXG5jb25zdCBTZWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPERhc2hib2FyZCAvPlxyXG4gICAgICA8QmlsbGluZyAvPlxyXG4gICAgICA8U2V0dGluZ3MgLz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgU2VuZFRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgU2lkZWJhclRleHQgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcblxyXG5pbXBvcnQgeyBCaWxsaW5nRGF0YSB9IGZyb20gXCIuL0RhdGFcIlxyXG5cclxuY29uc3QgQmlsbGluZyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxCYXJSb3c+XHJcbiAgICAgICAge0JpbGxpbmdEYXRhLm1hcCgoZGF0YTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICA8QmFyQ29sdW1uIGNsYXNzTmFtZT17ZGF0YS5jbGFzc25hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7ZGF0YS5pY29ufVxyXG4gICAgICAgICAgICA8QmFyVGV4dD4ge2RhdGEubmFtZX08L0JhclRleHQ+XHJcbiAgICAgICAgICA8L0JhckNvbHVtbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9CYXJSb3c+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xyXG5gXHJcbmNvbnN0IEJhclJvdyA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc21va2VXaGl0ZX07XHJcbiAgICBjb2xvcjogJHtTZW5kVGhlbWUuYmx1ZX07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEJhckNvbHVtbiA9IHN0eWxlZC5saWBcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc25vd1doaXRlfTtcclxuICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEJhclRleHQgPSBzdHlsZWQoU2lkZWJhclRleHQpYFxyXG4gIG1hcmdpbjogMCA4cHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpbGxpbmdcclxuIiwgImV4cG9ydCBjb25zdCBEYXNoYm9hcmREYXRhID0gW1xyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI1XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk04LjExMTExIDE5LjQ1NDdIMTUuODg4OUMxNy42IDE5LjQ1NDcgMTkgMTguMDczIDE5IDE2LjM4NDJWMTEuMzk0NkMxOSAxMC4zOTY3IDE4LjUzMzMgOS41NTIzMSAxNy43NTU2IDguOTM4MjFMMTMuODY2NyA2LjAyMTIxQzEyLjc3NzggNS4yNTM1OCAxMS4yMjIyIDUuMjUzNTggMTAuMTMzMyA2LjA5Nzk4TDYuMjQ0NDQgOC45MzgyMUM1LjQ2NjY3IDkuNTUyMzEgNSAxMC4zOTY3IDUgMTEuMzk0NlYxNi4zODQyQzUgMTguMDczIDYuNCAxOS40NTQ3IDguMTExMTEgMTkuNDU0N1pNNi41NTU1NiAxMS4zOTQ2QzYuNTU1NTYgMTAuOTM0IDYuNzg4ODkgMTAuNDczNSA3LjE3Nzc4IDEwLjE2NjRMMTEuMDY2NyA3LjI0OTQyQzExLjM3NzggNy4wMTkxMyAxMS42ODg5IDYuOTQyMzcgMTIgNi45NDIzN0MxMi4zMTExIDYuOTQyMzcgMTIuNjIyMiA3LjAxOTEzIDEyLjkzMzMgNy4yNDk0MkwxNi44MjIyIDEwLjE2NjRDMTcuMjExMSAxMC40NzM1IDE3LjQ0NDQgMTAuOTM0IDE3LjQ0NDQgMTEuMzk0NlYxNi4zODQyQzE3LjQ0NDQgMTcuMjI4NiAxNi43NDQ0IDE3LjkxOTUgMTUuODg4OSAxNy45MTk1SDguMTExMTFDNy4yNTU1NiAxNy45MTk1IDYuNTU1NTYgMTcuMjI4NiA2LjU1NTU2IDE2LjM4NDJWMTEuMzk0NlpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBjbGFzc25hbWU6IFwiYWN0aXZlXCIsXHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTMuMiA1LjQ1NDc0SDcuNjAwMDFDNy4yMjg3MSA1LjQ1NDc0IDYuODcyNjEgNS42MDIyNCA2LjYxMDA2IDUuODY0NzlDNi4zNDc1MSA2LjEyNzM0IDYuMjAwMDEgNi40ODM0NCA2LjIwMDAxIDYuODU0NzRWMTguMDU0N0M2LjIwMDAxIDE4LjQyNiA2LjM0NzUxIDE4Ljc4MjEgNi42MTAwNiAxOS4wNDQ3QzYuODcyNjEgMTkuMzA3MiA3LjIyODcxIDE5LjQ1NDcgNy42MDAwMSAxOS40NTQ3SDE2QzE2LjM3MTMgMTkuNDU0NyAxNi43Mjc0IDE5LjMwNzIgMTYuOTkgMTkuMDQ0N0MxNy4yNTI1IDE4Ljc4MjEgMTcuNCAxOC40MjYgMTcuNCAxOC4wNTQ3VjkuNjU0NzRMMTMuMiA1LjQ1NDc0WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjMDc0NkE2XCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE0LjYwMDEgMTUuOTU0N0g5LjAwMDA2XCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMwNzQ2QTZcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS40XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTQuNjAwMSAxMy4xNTQ3SDkuMDAwMDZcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzA3NDZBNlwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xMC40MDAxIDEwLjM1NUg5LjcwMDA2SDkuMDAwMDZcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzA3NDZBNlwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xMy4yMDAxIDUuNDU0NzRWOS42NTQ3NEgxNy40MDAxXCJcclxuICAgICAgICAgIHN0cm9rZT1cIiMwNzQ2QTZcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS40XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiUXVvdGVzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTYuNSA1LjAwMDAzSDlDOC4yMDQzNSA1LjAwMDAzIDcuNDQxMjkgNS4zMTYxIDYuODc4NjggNS44Nzg3MUM2LjMxNjA3IDYuNDQxMzIgNiA3LjIwNDM4IDYgOC4wMDAwM1YxN0M2IDE3Ljc5NTcgNi4zMTYwNyAxOC41NTg3IDYuODc4NjggMTkuMTIxNEM3LjQ0MTI5IDE5LjY4NCA4LjIwNDM1IDIwIDkgMjBIMTYuNUMxNi44OTc4IDIwIDE3LjI3OTQgMTkuODQyIDE3LjU2MDcgMTkuNTYwN0MxNy44NDIgMTkuMjc5NCAxOCAxOC44OTc5IDE4IDE4LjVWNi41MDAwM0MxOCA2LjEwMjIxIDE3Ljg0MiA1LjcyMDY3IDE3LjU2MDcgNS40MzkzN0MxNy4yNzk0IDUuMTU4MDcgMTYuODk3OCA1LjAwMDAzIDE2LjUgNS4wMDAwM1pNNy41IDguMDAwMDNDNy41IDcuNjAyMjEgNy42NTgwNCA3LjIyMDY3IDcuOTM5MzQgNi45MzkzN0M4LjIyMDY0IDYuNjU4MDcgOC42MDIxOCA2LjUwMDAzIDkgNi41MDAwM0gxNi41VjE0SDlDOC40NzEyOCAxNC4wMDIyIDcuOTUyOTkgMTQuMTQ3NCA3LjUgMTQuNDJWOC4wMDAwM1pNOSAxOC41QzguNjAyMTggMTguNSA4LjIyMDY0IDE4LjM0MiA3LjkzOTM0IDE4LjA2MDdDNy42NTgwNCAxNy43Nzk0IDcuNSAxNy4zOTc5IDcuNSAxN0M3LjUgMTYuNjAyMiA3LjY1ODA0IDE2LjIyMDcgNy45MzkzNCAxNS45Mzk0QzguMjIwNjQgMTUuNjU4MSA4LjYwMjE4IDE1LjUgOSAxNS41SDE2LjVWMTguNUg5Wk0xMC41IDkuNTAwMDNIMTMuNUMxMy42OTg5IDkuNTAwMDMgMTMuODg5NyA5LjQyMTAxIDE0LjAzMDMgOS4yODAzNkMxNC4xNzEgOS4xMzk3MSAxNC4yNSA4Ljk0ODk0IDE0LjI1IDguNzUwMDNDMTQuMjUgOC41NTExMiAxNC4xNzEgOC4zNjAzNSAxNC4wMzAzIDguMjE5N0MxMy44ODk3IDguMDc5MDUgMTMuNjk4OSA4LjAwMDAzIDEzLjUgOC4wMDAwM0gxMC41QzEwLjMwMTEgOC4wMDAwMyAxMC4xMTAzIDguMDc5MDUgOS45Njk2NyA4LjIxOTdDOS44MjkwMiA4LjM2MDM1IDkuNzUgOC41NTExMiA5Ljc1IDguNzUwMDNDOS43NSA4Ljk0ODk0IDkuODI5MDIgOS4xMzk3MSA5Ljk2OTY3IDkuMjgwMzZDMTAuMTEwMyA5LjQyMTAxIDEwLjMwMTEgOS41MDAwMyAxMC41IDkuNTAwMDNaXCJcclxuICAgICAgICAgIGZpbGw9XCIjNzg3OTdBXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICBuYW1lOiBcIkJvb2tpbmdzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNNS4zMjkyMiAxNi42NjE5QzUuNDA3MzMgMTYuODU4MiA1LjU2MDIyIDE3LjAxNTUgNS43NTQyNyAxNy4wOTlDNS45NDgzMiAxNy4xODI2IDYuMTY3NjMgMTcuMTg1NyA2LjM2Mzk1IDE3LjEwNzZDNi41NjAyNyAxNy4wMjk1IDYuNzE3NTIgMTYuODc2NiA2LjgwMTExIDE2LjY4MjZDNi44ODQ3IDE2LjQ4ODUgNi44ODc3OCAxNi4yNjkyIDYuODA5NjcgMTYuMDcyOUw1LjkxODIyIDEzLjgyODNMMTEuMjAzMyAxMi42NTgzVjE2LjQzOUMxMS4yMDMzIDE2LjY1MDEgMTEuMjg3MSAxNi44NTI2IDExLjQzNjQgMTcuMDAxOEMxMS41ODU3IDE3LjE1MTEgMTEuNzg4MSAxNy4yMzUgMTEuOTk5MiAxNy4yMzVDMTIuMjEwMyAxNy4yMzUgMTIuNDEyOCAxNy4xNTExIDEyLjU2MiAxNy4wMDE4QzEyLjcxMTMgMTYuODUyNiAxMi43OTUxIDE2LjY1MDEgMTIuNzk1MSAxNi40MzlWMTIuNjU4M0wxOC4wODAyIDEzLjgyODNMMTcuMTg4NyAxNi4wNzI5QzE3LjE1IDE2LjE3MDEgMTcuMTMwNyAxNi4yNzQgMTcuMTMyMiAxNi4zNzg2QzE3LjEzMzYgMTYuNDgzMiAxNy4xNTU2IDE2LjU4NjYgMTcuMTk3IDE2LjY4MjdDMTcuMjM4NCAxNi43Nzg4IDE3LjI5ODQgMTYuODY1OCAxNy4zNzM0IDE2LjkzODdDMTcuNDQ4NSAxNy4wMTE2IDE3LjUzNzIgMTcuMDY5IDE3LjYzNDUgMTcuMTA3NkMxNy43MjgyIDE3LjE0NDcgMTcuODI4MiAxNy4xNjM2IDE3LjkyOSAxNy4xNjMzQzE4LjA4ODQgMTcuMTYzNSAxOC4yNDQyIDE3LjExNTggMTguMzc2MSAxNy4wMjY0QzE4LjUwODEgMTYuOTM3IDE4LjYxMDIgMTYuODEgMTguNjY5MiAxNi42NjE5TDE5LjkwMjkgMTMuNTQ5OEMxOS45NDUyIDEzLjQ0MjEgMTkuOTYzNiAxMy4zMjY1IDE5Ljk1NjcgMTMuMjExMUMxOS45NDk5IDEzLjA5NTYgMTkuOTE3OSAxMi45ODMgMTkuODYzMSAxMi44ODEyQzE5LjgwOTkgMTIuNzc5NyAxOS43MzU0IDEyLjY5MDkgMTkuNjQ0OCAxMi42MjA4QzE5LjU1NDEgMTIuNTUwOCAxOS40NDk0IDEyLjUwMTEgMTkuMzM3OCAxMi40NzUyTDE2Ljc3NDkgMTEuOTEwMVY4LjQ3OTYxQzE2Ljc3NDkgOC4yNjg1MiAxNi42OTEgOC4wNjYwNiAxNi41NDE3IDcuOTE2OEMxNi4zOTI1IDcuNzY3NTMgMTYuMTkgNy42ODM2NyAxNS45Nzg5IDcuNjgzNjdIMTQuMzg3VjUuMjk1ODVDMTQuMzg3IDUuMDg0NzUgMTQuMzAzMiA0Ljg4MjMgMTQuMTUzOSA0LjczMzAzQzE0LjAwNDYgNC41ODM3NyAxMy44MDIyIDQuNDk5OTEgMTMuNTkxMSA0LjQ5OTkxSDEwLjQwNzNDMTAuMTk2MiA0LjQ5OTkxIDkuOTkzNzggNC41ODM3NyA5Ljg0NDUxIDQuNzMzMDNDOS42OTUyNCA0Ljg4MjMgOS42MTEzOSA1LjA4NDc1IDkuNjExMzkgNS4yOTU4NVY3LjY4MzY3SDguMDE5NUM3LjgwODQxIDcuNjgzNjcgNy42MDU5NiA3Ljc2NzUzIDcuNDU2NjkgNy45MTY4QzcuMzA3NDIgOC4wNjYwNiA3LjIyMzU2IDguMjY4NTIgNy4yMjM1NiA4LjQ3OTYxVjExLjkxMDFMNC42NjA2MyAxMi40NTkzQzQuNTQ5MDEgMTIuNDg1MiA0LjQ0NDI5IDEyLjUzNDggNC4zNTM2MyAxMi42MDQ5QzQuMjYyOTcgMTIuNjc1IDQuMTg4NSAxMi43NjM4IDQuMTM1MzEgMTIuODY1MkM0LjA4MDUgMTIuOTY3MSA0LjA0ODU0IDEzLjA3OTcgNC4wNDE2NyAxMy4xOTUyQzQuMDM0NzkgMTMuMzEwNiA0LjA1MzE3IDEzLjQyNjIgNC4wOTU1MiAxMy41MzM4TDUuMzI5MjIgMTYuNjYxOVpNMTEuMjAzMyA2LjA5MTc5SDEyLjc5NTFWNy42ODM2N0gxMS4yMDMzVjYuMDkxNzlaTTguODE1NDQgOS4yNzU1NUgxNS4xODNWMTEuNTUxOUwxMi4xNzQzIDEwLjg2NzRIMTEuODI0MUw4LjgxNTQ0IDExLjU1MTlWOS4yNzU1NVpNMTguOTMxOCAxOC4yNTM4QzE4LjY1MjYgMTguMzM5MyAxOC4zODUyIDE4LjQ1OTcgMTguMTM1OSAxOC42MTE5QzE3Ljg4MjMgMTguNzYwMiAxNy41OTM5IDE4LjgzODQgMTcuMzAwMiAxOC44Mzg0QzE3LjAwNjQgMTguODM4NCAxNi43MTggMTguNzYwMiAxNi40NjQ0IDE4LjYxMTlDMTUuOTEzMSAxOC4zMDA5IDE1LjI5MDcgMTguMTM3NCAxNC42NTc2IDE4LjEzNzRDMTQuMDI0NiAxOC4xMzc0IDEzLjQwMjIgMTguMzAwOSAxMi44NTA5IDE4LjYxMTlDMTIuNTkzOCAxOC43NTg1IDEyLjMwMzEgMTguODM1NiAxMi4wMDcyIDE4LjgzNTZDMTEuNzExMyAxOC44MzU2IDExLjQyMDUgMTguNzU4NSAxMS4xNjM1IDE4LjYxMTlDMTAuNjExNiAxOC4zMDI0IDkuOTg5NDUgMTguMTM5OCA5LjM1NjY4IDE4LjEzOThDOC43MjM5MiAxOC4xMzk4IDguMTAxNzcgMTguMzAyNCA3LjU0OTkgMTguNjExOUM3LjI5NjM0IDE4Ljc2MDIgNy4wMDc4OSAxOC44Mzg0IDYuNzE0MTYgMTguODM4NEM2LjQyMDQzIDE4LjgzODQgNi4xMzE5OCAxOC43NjAyIDUuODc4NDIgMTguNjExOUM1LjYyOTE2IDE4LjQ1OTcgNS4zNjE3NSAxOC4zMzkzIDUuMDgyNDggMTguMjUzOEM0Ljk3NjU4IDE4LjIxNjEgNC44NjM5IDE4LjIwMTMgNC43NTE4NiAxOC4yMTAzQzQuNjM5ODIgMTguMjE5NCA0LjUzMDk3IDE4LjI1MiA0LjQzMjQ3IDE4LjMwNjJDNC4zMzM5NiAxOC4zNjAzIDQuMjQ4MDQgMTguNDM0NyA0LjE4MDM2IDE4LjUyNDVDNC4xMTI2OCAxOC42MTQyIDQuMDY0NzggMTguNzE3MiA0LjAzOTggMTguODI2OEMzLjk4MDM4IDE5LjAyODQgNC4wMDMxIDE5LjI0NTMgNC4xMDMwMSAxOS40MzAyQzQuMjAyOTEgMTkuNjE1MSA0LjM3MTkgMTkuNzUzIDQuNTczMDggMTkuODEzOEM0LjczMzM1IDE5Ljg1NzIgNC44ODYyNiAxOS45MjQzIDUuMDI2NzcgMjAuMDEyOEM1LjUwOTY3IDIwLjI5NjIgNi4wNTg3NiAyMC40NDcyIDYuNjE4NjUgMjAuNDUwNkM3LjIwMDE2IDIwLjQ1MDcgNy43NzEzNSAyMC4yOTY5IDguMjc0MjEgMjAuMDA0OEM4LjU4NjE5IDE5LjgzMjcgOC45MzY3IDE5Ljc0MjUgOS4yOTMwMSAxOS43NDI1QzkuNjQ5MzIgMTkuNzQyNSA5Ljk5OTgyIDE5LjgzMjcgMTAuMzExOCAyMC4wMDQ4QzEwLjgxMTEgMjAuMjkwMyAxMS4zNzYzIDIwLjQ0MDUgMTEuOTUxNSAyMC40NDA1QzEyLjUyNjYgMjAuNDQwNSAxMy4wOTE4IDIwLjI5MDMgMTMuNTkxMSAyMC4wMDQ4QzEzLjkwMzEgMTkuODMyNyAxNC4yNTM2IDE5Ljc0MjUgMTQuNjA5OSAxOS43NDI1QzE0Ljk2NjIgMTkuNzQyNSAxNS4zMTY3IDE5LjgzMjcgMTUuNjI4NyAyMC4wMDQ4QzE2LjEyMiAyMC4yOTkzIDE2LjY4NTkgMjAuNDU0NyAxNy4yNjA0IDIwLjQ1NDdDMTcuODM0OSAyMC40NTQ3IDE4LjM5ODcgMjAuMjk5MyAxOC44OTIxIDIwLjAwNDhDMTkuMDMyNiAxOS45MTYzIDE5LjE4NTUgMTkuODQ5MyAxOS4zNDU3IDE5LjgwNThDMTkuNDUxNyAxOS43ODQ0IDE5LjU1MjEgMTkuNzQxNiAxOS42NDEgMTkuNjgwMUMxOS43Mjk4IDE5LjYxODYgMTkuODA1MiAxOS41Mzk3IDE5Ljg2MjYgMTkuNDQ4MUMxOS45MTk5IDE5LjM1NjQgMTkuOTU4IDE5LjI1NDEgMTkuOTc0NSAxOS4xNDczQzE5Ljk5MSAxOS4wNDA1IDE5Ljk4NTYgMTguOTMxNSAxOS45NTg2IDE4LjgyNjhDMTkuOTMzMyAxOC43MTkxIDE5Ljg4NTggMTguNjE3OSAxOS44MTkyIDE4LjUyOTVDMTkuNzUyNiAxOC40NDEyIDE5LjY2ODMgMTguMzY3NyAxOS41NzE3IDE4LjMxMzhDMTkuNDc1IDE4LjI1OTkgMTkuMzY4MiAxOC4yMjY3IDE5LjI1ODEgMTguMjE2M0MxOS4xNDc5IDE4LjIwNiAxOS4wMzY4IDE4LjIxODcgMTguOTMxOCAxOC4yNTM4WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgbmFtZTogXCJTaGlwbWVudHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI1XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xNi45MDAxIDguOTU0NzJIMTYuMjAwMVY4LjI1NDcxQzE2LjIwMDEgNy42OTc3NSAxNS45Nzg4IDcuMTYzNiAxNS41ODUgNi43Njk3N0MxNS4xOTEyIDYuMzc1OTQgMTQuNjU3IDYuMTU0NjkgMTQuMTAwMSA2LjE1NDY5SDcuMTAwMDJDNi41NDMwNiA2LjE1NDY5IDYuMDA4OTEgNi4zNzU5NCA1LjYxNTA4IDYuNzY5NzdDNS4yMjEyNSA3LjE2MzYgNSA3LjY5Nzc1IDUgOC4yNTQ3MVYxNi42NTQ4QzUgMTcuMjExNyA1LjIyMTI1IDE3Ljc0NTkgNS42MTUwOCAxOC4xMzk3QzYuMDA4OTEgMTguNTMzNSA2LjU0MzA2IDE4Ljc1NDggNy4xMDAwMiAxOC43NTQ4SDE2LjkwMDFDMTcuNDU3MSAxOC43NTQ4IDE3Ljk5MTIgMTguNTMzNSAxOC4zODUgMTguMTM5N0MxOC43Nzg5IDE3Ljc0NTkgMTkuMDAwMSAxNy4yMTE3IDE5LjAwMDEgMTYuNjU0OFYxMS4wNTQ3QzE5LjAwMDEgMTAuNDk3OCAxOC43Nzg5IDkuOTYzNjMgMTguMzg1IDkuNTY5OEMxNy45OTEyIDkuMTc1OTcgMTcuNDU3MSA4Ljk1NDcyIDE2LjkwMDEgOC45NTQ3MlpNNy4xMDAwMiA3LjU1NDdIMTQuMTAwMUMxNC4yODU3IDcuNTU0NyAxNC40NjM4IDcuNjI4NDUgMTQuNTk1IDcuNzU5NzNDMTQuNzI2MyA3Ljg5MTAxIDE0LjgwMDEgOC4wNjkwNiAxNC44MDAxIDguMjU0NzFWOC45NTQ3Mkg3LjEwMDAyQzYuOTE0MzYgOC45NTQ3MiA2LjczNjMxIDguODgwOTYgNi42MDUwNCA4Ljc0OTY5QzYuNDczNzYgOC42MTg0MSA2LjQwMDAxIDguNDQwMzYgNi40MDAwMSA4LjI1NDcxQzYuNDAwMDEgOC4wNjkwNiA2LjQ3Mzc2IDcuODkxMDEgNi42MDUwNCA3Ljc1OTczQzYuNzM2MzEgNy42Mjg0NSA2LjkxNDM2IDcuNTU0NyA3LjEwMDAyIDcuNTU0N1pNMTcuNjAwMSAxNC41NTQ4SDE2LjkwMDFDMTYuNzE0NCAxNC41NTQ4IDE2LjUzNjQgMTQuNDgxIDE2LjQwNTEgMTQuMzQ5N0MxNi4yNzM4IDE0LjIxODUgMTYuMjAwMSAxNC4wNDA0IDE2LjIwMDEgMTMuODU0OEMxNi4yMDAxIDEzLjY2OTEgMTYuMjczOCAxMy40OTExIDE2LjQwNTEgMTMuMzU5OEMxNi41MzY0IDEzLjIyODUgMTYuNzE0NCAxMy4xNTQ3IDE2LjkwMDEgMTMuMTU0N0gxNy42MDAxVjE0LjU1NDhaTTE3LjYwMDEgMTEuNzU0N0gxNi45MDAxQzE2LjM0MzEgMTEuNzU0NyAxNS44MDkgMTEuOTc2IDE1LjQxNTIgMTIuMzY5OEMxNS4wMjEzIDEyLjc2MzYgMTQuODAwMSAxMy4yOTc4IDE0LjgwMDEgMTMuODU0OEMxNC44MDAxIDE0LjQxMTcgMTUuMDIxMyAxNC45NDU5IDE1LjQxNTIgMTUuMzM5N0MxNS44MDkgMTUuNzMzNSAxNi4zNDMxIDE1Ljk1NDggMTYuOTAwMSAxNS45NTQ4SDE3LjYwMDFWMTYuNjU0OEMxNy42MDAxIDE2Ljg0MDQgMTcuNTI2MyAxNy4wMTg1IDE3LjM5NTEgMTcuMTQ5OEMxNy4yNjM4IDE3LjI4MSAxNy4wODU3IDE3LjM1NDggMTYuOTAwMSAxNy4zNTQ4SDcuMTAwMDJDNi45MTQzNiAxNy4zNTQ4IDYuNzM2MzEgMTcuMjgxIDYuNjA1MDQgMTcuMTQ5OEM2LjQ3Mzc2IDE3LjAxODUgNi40MDAwMSAxNi44NDA0IDYuNDAwMDEgMTYuNjU0OFYxMC4yMzU3QzYuNjI0OSAxMC4zMTQ4IDYuODYxNjIgMTAuMzU1MSA3LjEwMDAyIDEwLjM1NDdIMTYuOTAwMUMxNy4wODU3IDEwLjM1NDcgMTcuMjYzOCAxMC40Mjg1IDE3LjM5NTEgMTAuNTU5OEMxNy41MjYzIDEwLjY5MSAxNy42MDAxIDEwLjg2OTEgMTcuNjAwMSAxMS4wNTQ3VjExLjc1NDdaXCJcclxuICAgICAgICAgIGZpbGw9XCIjNzg3OTdBXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICBuYW1lOiBcIlRyYWRlIEZpbmFuY2VcIixcclxuICB9LFxyXG5dXHJcbmV4cG9ydCBjb25zdCBCaWxsaW5nRGF0YSA9IFtcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNNSAxMC41MDQ3QzQuNjEzNCAxMC41MDQ3IDQuMyAxMC44MTgxIDQuMyAxMS4yMDQ3QzQuMyAxMS41OTEzIDQuNjEzNCAxMS45MDQ3IDUgMTEuOTA0N1YxMC41MDQ3Wk0xOC43NSAxMS45MDQ3QzE5LjEzNjYgMTEuOTA0NyAxOS40NSAxMS41OTEzIDE5LjQ1IDExLjIwNDdDMTkuNDUgMTAuODE4MSAxOS4xMzY2IDEwLjUwNDcgMTguNzUgMTAuNTA0N1YxMS45MDQ3Wk02LjI1IDguMTU0NzRIMTcuNVY2Ljc1NDc0SDYuMjVWOC4xNTQ3NFpNMTcuNSA4LjE1NDc0QzE3LjgwMzggOC4xNTQ3NCAxOC4wNSA4LjQwMDk5IDE4LjA1IDguNzA0NzRIMTkuNDVDMTkuNDUgNy42Mjc3OSAxOC41NzcgNi43NTQ3NCAxNy41IDYuNzU0NzRWOC4xNTQ3NFpNMTguMDUgOC43MDQ3NFYxNi4yMDQ3SDE5LjQ1VjguNzA0NzRIMTguMDVaTTE4LjA1IDE2LjIwNDdDMTguMDUgMTYuNTA4NSAxNy44MDM4IDE2Ljc1NDcgMTcuNSAxNi43NTQ3VjE4LjE1NDdDMTguNTc3IDE4LjE1NDcgMTkuNDUgMTcuMjgxNyAxOS40NSAxNi4yMDQ3SDE4LjA1Wk0xNy41IDE2Ljc1NDdINi4yNVYxOC4xNTQ3SDE3LjVWMTYuNzU0N1pNNi4yNSAxNi43NTQ3QzUuOTQ2MjQgMTYuNzU0NyA1LjcgMTYuNTA4NSA1LjcgMTYuMjA0N0g0LjNDNC4zIDE3LjI4MTcgNS4xNzMwNCAxOC4xNTQ3IDYuMjUgMTguMTU0N1YxNi43NTQ3Wk01LjcgMTYuMjA0N1Y4LjcwNDc0SDQuM1YxNi4yMDQ3SDUuN1pNNS43IDguNzA0NzRDNS43IDguNDAwOTkgNS45NDYyNCA4LjE1NDc0IDYuMjUgOC4xNTQ3NFY2Ljc1NDc0QzUuMTczMDQgNi43NTQ3NCA0LjMgNy42Mjc3OSA0LjMgOC43MDQ3NEg1LjdaTTUgMTEuOTA0N0gxOC43NVYxMC41MDQ3SDVWMTEuOTA0N1pcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiQmlsbGluZ3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI1XCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xNi4xOTk2IDguOTQ1NTlDMTYuMTk5NiA4LjgwNjk3IDE2LjE1ODUgOC42NzE0NyAxNi4wODE1IDguNTU2MjJDMTYuMDA0NSA4LjQ0MDk2IDE1Ljg5NSA4LjM1MTEzIDE1Ljc2NjkgOC4yOTgwOUMxNS42Mzg5IDguMjQ1MDQgMTUuNDk4IDguMjMxMTYgMTUuMzYyIDguMjU4MjFDMTUuMjI2MSA4LjI4NTI1IDE1LjEwMTIgOC4zNTIgMTUuMDAzMiA4LjQ1MDAxQzE0LjkwNTIgOC41NDgwMyAxNC44Mzg0IDguNjcyOTEgMTQuODExNCA4LjgwODg2QzE0Ljc4NDMgOC45NDQ4MSAxNC43OTgyIDkuMDg1NzMgMTQuODUxMiA5LjIxMzc5QzE0LjkwNDMgOS4zNDE4NSAxNC45OTQxIDkuNDUxMzEgMTUuMTA5NCA5LjUyODMyQzE1LjIyNDYgOS42MDUzMyAxNS4zNjAxIDkuNjQ2NDMgMTUuNDk4NyA5LjY0NjQzQzE1LjY4NDYgOS42NDY0MyAxNS44NjI5IDkuNTcyNTkgMTUuOTk0MyA5LjQ0MTE2QzE2LjEyNTggOS4zMDk3MyAxNi4xOTk2IDkuMTMxNDYgMTYuMTk5NiA4Ljk0NTU5Wk0xMi4xNDg3IDE5LjI1NTFMMTguNzc4NyAxMi42MTFDMTguODQ5MiAxMi41NDU3IDE4LjkwNTQgMTIuNDY2NSAxOC45NDQgMTIuMzc4NUMxOC45ODI2IDEyLjI5MDUgMTkuMDAyNyAxMi4xOTU1IDE5LjAwMyAxMi4wOTk0VjcuODk0MzJDMTkuMDAzNSA3LjgwMjA4IDE4Ljk4NTggNy43MTA2NSAxOC45NTEgNy42MjUyNkMxOC45MTYxIDcuNTM5ODcgMTguODY0NyA3LjQ2MjIgMTguNzk5NyA3LjM5NjcxTDE3LjA1NDYgNS42NDQ2QzE2Ljk4OTEgNS41Nzk2NCAxNi45MTE1IDUuNTI4MjUgMTYuODI2MSA1LjQ5MzM3QzE2Ljc0MDcgNS40NTg0OSAxNi42NDkzIDUuNDQwODIgMTYuNTU3IDUuNDQxMzVIMTIuMzUxOUMxMi4xNjY0IDUuNDQzOTMgMTEuOTg4NiA1LjUxNjUzIDExLjg1NDMgNS42NDQ2TDUuMTk2MjggMTIuMjk1NkM1LjA2ODIyIDEyLjQyOTkgNC45OTU2MiAxMi42MDc3IDQuOTkzMDQgMTIuNzkzMkM0Ljk5MjUxIDEyLjg4NTUgNS4wMTAxOCAxMi45NzY5IDUuMDQ1MDYgMTMuMDYyM0M1LjA3OTk0IDEzLjE0NzcgNS4xMzEzMyAxMy4yMjU0IDUuMTk2MjggMTMuMjkwOEwxMS4xNjA1IDE5LjI1NTFDMTEuMjI2IDE5LjMyIDExLjMwMzYgMTkuMzcxNCAxMS4zODkgMTkuNDA2M0MxMS40NzQ0IDE5LjQ0MTIgMTEuNTY1OSAxOS40NTg4IDExLjY1ODEgMTkuNDU4M0MxMS44NDEyIDE5LjQ1NCAxMi4wMTYyIDE5LjM4MTUgMTIuMTQ4NyAxOS4yNTUxWk02LjY3NTA3IDEyLjc5MzJMMTIuNjMyMyA2Ljg0MzA0SDE2LjI2OTdMMTcuNjAxMyA4LjE3NDY1VjExLjgwNUwxMS42NTExIDE3Ljc2MjJMNi42NzUwNyAxMi43OTMyWlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgbmFtZTogXCJQcm9kdWN0c1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTIwLjI3MjYgMTMuODI5OUMyMC4yNjk2IDEzLjc4NTYgMjAuMjYyNSAxMy43NDE2IDIwLjI1MTMgMTMuNjk4NUwxOC41MTI0IDkuMDY3OThDMTguODI4OCA4Ljg2MzI5IDE5LjA4OTEgOC41ODI3IDE5LjI2OTUgOC4yNTE3NkMxOS40NDk4IDcuOTIwODEgMTkuNTQ0NSA3LjU1MDAyIDE5LjU0NSA3LjE3MzEzQzE5LjU0NSA2Ljk3MzAyIDE5LjQ2NTYgNi43ODExIDE5LjMyNDEgNi42Mzk2QzE5LjE4MjYgNi40OTgxIDE4Ljk5MDYgNi40MTg2MSAxOC43OTA1IDYuNDE4NjFDMTguNTkwNCA2LjQxODYxIDE4LjM5ODUgNi40OTgxIDE4LjI1NyA2LjYzOTZDMTguMTE1NSA2Ljc4MTEgMTguMDM2IDYuOTczMDIgMTguMDM2IDcuMTczMTNDMTguMDM1OSA3LjM0MTI3IDE3Ljk3OTcgNy41MDQ1OCAxNy44NzYzIDcuNjM3MTRDMTcuNzcyOSA3Ljc2OTcxIDE3LjYyODIgNy44NjM5NSAxNy40NjUxIDcuOTA0OTFDMTcuMzAyIDcuOTQ1ODcgMTcuMTI5OSA3LjkzMTIxIDE2Ljk3NjEgNy44NjMyNEMxNi44MjIzIDcuNzk1MjggMTYuNjk1NiA3LjY3NzkxIDE2LjYxNjEgNy41Mjk3NkMxNi40MjI1IDcuMTg2MDggMTYuMTM5NCA2LjkwMTI5IDE1Ljc5NjkgNi43MDU2NEMxNS40NTQ0IDYuNTA5OTkgMTUuMDY1MiA2LjQxMDggMTQuNjcwOSA2LjQxODYxSDEyLjc1NDRWNS42NjQwOUMxMi43NTQ0IDUuNDYzOTggMTIuNjc0OSA1LjI3MjA3IDEyLjUzMzQgNS4xMzA1N0MxMi4zOTE5IDQuOTg5MDcgMTIuMiA0LjkwOTU4IDExLjk5OTkgNC45MDk1OEMxMS43OTk4IDQuOTA5NTggMTEuNjA3OSA0Ljk4OTA3IDExLjQ2NjQgNS4xMzA1N0MxMS4zMjQ5IDUuMjcyMDcgMTEuMjQ1NCA1LjQ2Mzk4IDExLjI0NTQgNS42NjQwOVY2LjQxODYxSDkuMzI4ODlDOC45MzQ1MSA2LjQxMDggOC41NDUzOCA2LjUwOTk5IDguMjAyODYgNi43MDU2NEM3Ljg2MDM1IDYuOTAxMjkgNy41NzcyNCA3LjE4NjA4IDcuMzgzNjIgNy41Mjk3NkM3LjMwNDEyIDcuNjc3OTEgNy4xNzc0MiA3Ljc5NTI4IDcuMDIzNjMgNy44NjMyNEM2Ljg2OTgzIDcuOTMxMjEgNi42OTc3NSA3Ljk0NTg3IDYuNTM0NjcgNy45MDQ5MUM2LjM3MTU5IDcuODYzOTUgNi4yMjY4NiA3Ljc2OTcxIDYuMTIzNDQgNy42MzcxNEM2LjAyMDAxIDcuNTA0NTggNS45NjM4MSA3LjM0MTI3IDUuOTYzNzUgNy4xNzMxM0M1Ljk2Mzc1IDYuOTczMDIgNS44ODQyNSA2Ljc4MTEgNS43NDI3NSA2LjYzOTZDNS42MDEyNSA2LjQ5ODEgNS40MDkzNCA2LjQxODYxIDUuMjA5MjMgNi40MTg2MUM1LjAwOTEyIDYuNDE4NjEgNC44MTcyIDYuNDk4MSA0LjY3NTcgNi42Mzk2QzQuNTM0MjEgNi43ODExIDQuNDU0NzEgNi45NzMwMiA0LjQ1NDcxIDcuMTczMTNDNC40NTUyMSA3LjU1MDAyIDQuNTQ5OTQgNy45MjA4MSA0LjczMDMgOC4yNTE3NkM0LjkxMDY2IDguNTgyNyA1LjE3MDkxIDguODYzMjkgNS40ODczOCA5LjA2Nzk4TDMuNzQ4NDggMTMuNjk4NUMzLjczNzMyIDEzLjc0MTYgMy43MzAyIDEzLjc4NTYgMy43MjcyMSAxMy44Mjk5QzMuNzEzOTYgMTMuODczNiAzLjcwNDkyIDEzLjkxODQgMy43MDAyIDEzLjk2MzhDMy43MDAyIDEzLjk3MDggMy43MDIyMiAxMy45NzcyIDMuNzAyMjcgMTMuOTg0MkMzLjcwMjUgMTMuOTk0MiAzLjcwNDUzIDE0LjAwMzMgMy43MDUyMSAxNC4wMTMyQzMuNzE2OTYgMTQuODA0NiA0LjAzOTU3IDE1LjU1OTYgNC42MDMzNSAxNi4xMTVDNS4xNjcxMyAxNi42NzA1IDUuOTI2ODEgMTYuOTgxOSA2LjcxODI2IDE2Ljk4MTlDNy41MDk3MSAxNi45ODE5IDguMjY5MzkgMTYuNjcwNSA4LjgzMzE3IDE2LjExNUM5LjM5Njk1IDE1LjU1OTYgOS43MTk1NiAxNC44MDQ2IDkuNzMxMzEgMTQuMDEzMkM5LjczMTk1IDE0LjAwMzMgOS43MzQwMyAxMy45OTQyIDkuNzM0MjUgMTMuOTg0MkM5LjczNDMgMTMuOTc3MiA5LjczNjMzIDEzLjk3MDggOS43MzYzMyAxMy45NjM4QzkuNzMxNjIgMTMuOTE4NCA5LjcyMjU4IDEzLjg3MzYgOS43MDkzNCAxMy44Mjk5QzkuNzA2MzUgMTMuNzg1NiA5LjY5OTIzIDEzLjc0MTYgOS42ODgwNyAxMy42OTg1TDcuOTQ3MTEgOS4wNjI1OUM4LjI2Njg1IDguODU4NTUgOC41Mjk5NiA4LjU3NzE3IDguNzEyMTMgOC4yNDQ0OEM4Ljc3Nzk3IDguMTQyMDggOC44Njk2NyA4LjA1ODg2IDguOTc3OTYgOC4wMDMyM0M5LjA4NjI1IDcuOTQ3NiA5LjIwNzMgNy45MjE1MiA5LjMyODg5IDcuOTI3NjRIMTEuMjQ1NFYxOC40OTA5SDguOTgxODFDOC43ODE3IDE4LjQ5MDkgOC41ODk3OSAxOC41NzA0IDguNDQ4MjkgMTguNzExOUM4LjMwNjc5IDE4Ljg1MzQgOC4yMjcyOSAxOS4wNDUzIDguMjI3MjkgMTkuMjQ1NEM4LjIyNzI5IDE5LjQ0NTUgOC4zMDY3OSAxOS42Mzc0IDguNDQ4MjkgMTkuNzc4OUM4LjU4OTc5IDE5LjkyMDQgOC43ODE3IDE5Ljk5OTkgOC45ODE4MSAxOS45OTk5SDE1LjAxNzlDMTUuMjE4MSAxOS45OTk5IDE1LjQxIDE5LjkyMDQgMTUuNTUxNSAxOS43Nzg5QzE1LjY5MyAxOS42Mzc0IDE1Ljc3MjUgMTkuNDQ1NSAxNS43NzI1IDE5LjI0NTRDMTUuNzcyNSAxOS4wNDUzIDE1LjY5MyAxOC44NTM0IDE1LjU1MTUgMTguNzExOUMxNS40MSAxOC41NzA0IDE1LjIxODEgMTguNDkwOSAxNS4wMTc5IDE4LjQ5MDlIMTIuNzU0NFY3LjkyNzY0SDE0LjY3MDlDMTQuNzkyNSA3LjkyMTUzIDE0LjkxMzUgNy45NDc2IDE1LjAyMTggOC4wMDMyM0MxNS4xMzAxIDguMDU4ODYgMTUuMjIxOCA4LjE0MjA4IDE1LjI4NzYgOC4yNDQ0OEMxNS40Njk4IDguNTc3MTcgMTUuNzMyOSA4Ljg1ODU1IDE2LjA1MjYgOS4wNjI1OUwxNC4zMTE3IDEzLjY5ODVDMTQuMzAwNiAxMy43NDE2IDE0LjI5MzQgMTMuNzg1NiAxNC4yOTA0IDEzLjgyOTlDMTQuMjc3MiAxMy44NzM2IDE0LjI2ODEgMTMuOTE4NCAxNC4yNjM0IDEzLjk2MzhDMTQuMjYzNCAxMy45NzA4IDE0LjI2NTUgMTMuOTc3MiAxNC4yNjU1IDEzLjk4NDJDMTQuMjY1NyAxMy45OTQyIDE0LjI2NzggMTQuMDAzMyAxNC4yNjg0IDE0LjAxMzJDMTQuMjgwMiAxNC44MDQ2IDE0LjYwMjggMTUuNTU5NiAxNS4xNjY2IDE2LjExNUMxNS43MzA0IDE2LjY3MDUgMTYuNDkgMTYuOTgxOSAxNy4yODE1IDE2Ljk4MTlDMTguMDcyOSAxNi45ODE5IDE4LjgzMjYgMTYuNjcwNSAxOS4zOTY0IDE2LjExNUMxOS45NjAyIDE1LjU1OTYgMjAuMjgyOCAxNC44MDQ2IDIwLjI5NDUgMTQuMDEzMkMyMC4yOTUyIDE0LjAwMzMgMjAuMjk3MyAxMy45OTQyIDIwLjI5NzUgMTMuOTg0MkMyMC4yOTc1IDEzLjk3NzIgMjAuMjk5NiAxMy45NzA4IDIwLjI5OTYgMTMuOTYzOEMyMC4yOTQ4IDEzLjkxODQgMjAuMjg1OCAxMy44NzM2IDIwLjI3MjYgMTMuODI5OVpNNi43MTgyNiAxMC4wODIyTDguMDE4MDQgMTQuNzE4M0g1LjQxMTg1TDYuNzE4MjYgMTAuMDgyMlpNOC4wMTgwNCAxNC43MTgzQzcuODg0ODggMTQuOTQ1NSA3LjY5NTIgMTUuMTM0NCA3LjQ2NzQ0IDE1LjI2NjZDNy4yMzk2OSAxNS4zOTg4IDYuOTgxNiAxNS40Njk5IDYuNzE4MjYgMTUuNDcyOEM2LjQ1MzQ1IDE1LjQ3MjcgNi4xOTMzMyAxNS40MDI5IDUuOTY0MDIgMTUuMjcwNUM1LjczNDcgMTUuMTM4MSA1LjU0NDI3IDE0Ljk0NzYgNS40MTE4NSAxNC43MTgzSDguMDE4MDRaTTE3LjI4MTUgMTAuMDgyMkwxOC41ODEzIDE0LjcxODNIMTUuOTc1MUwxNy4yODE1IDEwLjA4MjJaTTE3LjI4MTUgMTUuNDcyOEMxNy4wMTY3IDE1LjQ3MjcgMTYuNzU2NiAxNS40MDI5IDE2LjUyNzIgMTUuMjcwNUMxNi4yOTc5IDE1LjEzODEgMTYuMTA3NSAxNC45NDc2IDE1Ljk3NTEgMTQuNzE4M0gxOC41ODEzQzE4LjQ0ODEgMTQuOTQ1NSAxOC4yNTg0IDE1LjEzNDQgMTguMDMwNyAxNS4yNjY2QzE3LjgwMjkgMTUuMzk4OCAxNy41NDQ4IDE1LjQ2OTkgMTcuMjgxNSAxNS40NzI4WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgbmFtZTogXCJGaXhlZCBSYXRlc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE0LjkxMzcgMTIuOTYxQzE1LjU1NDEgMTIuNDU5OSAxNi4wMjE2IDExLjc3MjggMTYuMjUxIDEwLjk5NTJDMTYuNDgwNCAxMC4yMTc2IDE2LjQ2MDUgOS4zODgyIDE2LjE5MzkgOC42MjI0MkMxNS45MjczIDcuODU2NjUgMTUuNDI3MyA3LjE5MjU1IDE0Ljc2MzUgNi43MjI1MkMxNC4wOTk3IDYuMjUyNDkgMTMuMzA1MiA1Ljk5OTkxIDEyLjQ5MDMgNS45OTk5MUMxMS42NzU1IDUuOTk5OTEgMTAuODgwOSA2LjI1MjQ5IDEwLjIxNzEgNi43MjI1MkM5LjU1MzMxIDcuMTkyNTUgOS4wNTMzNSA3Ljg1NjY1IDguNzg2NzUgOC42MjI0MkM4LjUyMDE2IDkuMzg4MiA4LjUwMDE5IDEwLjIxNzYgOC43Mjk2MyAxMC45OTUyQzguOTU5MDcgMTEuNzcyOCA5LjQyNjUgMTIuNDU5OSAxMC4wNjY5IDEyLjk2MUM4Ljk2OTU2IDEzLjM5ODIgOC4wMTIwOSAxNC4xMjM0IDcuMjk2NTcgMTUuMDU5MkM2LjU4MTA1IDE1Ljk5NSA2LjEzNDMgMTcuMTA2NCA2LjAwMzk0IDE4LjI3NDlDNS45OTQ1IDE4LjM2MDIgNi4wMDIwNiAxOC40NDY1IDYuMDI2MTcgMTguNTI4OUM2LjA1MDI4IDE4LjYxMTQgNi4wOTA0NyAxOC42ODgyIDYuMTQ0NDUgMTguNzU1MkM2LjI1MzQ4IDE4Ljg5MDQgNi40MTIwNSAxOC45NzcgNi41ODUzIDE4Ljk5NkM2Ljc1ODU0IDE5LjAxNDkgNi45MzIyNiAxOC45NjQ3IDcuMDY4MjMgMTguODU2MkM3LjIwNDIxIDE4Ljc0NzggNy4yOTEzIDE4LjU5MDEgNy4zMTAzNiAxOC40MTc4QzcuNDUzNzkgMTcuMTQ3OSA4LjA2MjY1IDE1Ljk3NTEgOS4wMjA2MSAxNS4xMjM0QzkuOTc4NTYgMTQuMjcxOCAxMS4yMTg0IDEzLjgwMSAxMi41MDM0IDEzLjgwMUMxMy43ODgzIDEzLjgwMSAxNS4wMjgyIDE0LjI3MTggMTUuOTg2MSAxNS4xMjM0QzE2Ljk0NDEgMTUuOTc1MSAxNy41NTMgMTcuMTQ3OSAxNy42OTY0IDE4LjQxNzhDMTcuNzE0MiAxOC41Nzc0IDE3Ljc5MDcgMTguNzI0OSAxNy45MTE0IDE4LjgzMTZDMTguMDMyIDE4LjkzODQgMTguMTg4MSAxOC45OTcgMTguMzQ5NiAxOC45OTZIMTguNDIxNUMxOC41OTI3IDE4Ljk3NjQgMTguNzQ5MiAxOC44OTAzIDE4Ljg1NjkgMTguNzU2NEMxOC45NjQ1IDE4LjYyMjYgMTkuMDE0NiAxOC40NTE4IDE4Ljk5NjMgMTguMjgxNEMxOC44NjUzIDE3LjEwOTYgMTguNDE2MSAxNS45OTU0IDE3LjY5NjkgMTUuMDU4MUMxNi45Nzc3IDE0LjEyMDggMTYuMDE1NiAxMy4zOTU5IDE0LjkxMzcgMTIuOTYxWk0xMi40OTAzIDEyLjQ5OTdDMTEuOTczNSAxMi40OTk3IDExLjQ2ODQgMTIuMzQ3MyAxMS4wMzg3IDEyLjA2MThDMTAuNjA5IDExLjc3NjMgMTAuMjc0MSAxMS4zNzA0IDEwLjA3NjQgMTAuODk1NkM5Ljg3ODYgMTAuNDIwOCA5LjgyNjg2IDkuODk4MzUgOS45Mjc2OCA5LjM5NDI5QzEwLjAyODUgOC44OTAyMyAxMC4yNzczIDguNDI3MjIgMTAuNjQyOCA4LjA2MzgxQzExLjAwODIgNy43MDA0MSAxMS40NzM3IDcuNDUyOTIgMTEuOTgwNiA3LjM1MjY2QzEyLjQ4NzQgNy4yNTI0IDEzLjAxMjggNy4zMDM4NSAxMy40OTAyIDcuNTAwNTNDMTMuOTY3NiA3LjY5NzIgMTQuMzc1NyA4LjAzMDI2IDE0LjY2MjggOC40NTc1OEMxNC45NDk5IDguODg0OSAxNS4xMDMyIDkuMzg3MyAxNS4xMDMyIDkuOTAxMjNDMTUuMTAzMiAxMC41OTA0IDE0LjgyNzkgMTEuMjUxMyAxNC4zMzc5IDExLjczODZDMTMuODQ3OSAxMi4yMjYgMTMuMTgzMyAxMi40OTk3IDEyLjQ5MDMgMTIuNDk5N1pcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiTmV0d29ya1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE5LjgwNTYgMTEuMzQ4NUMxOS43MzczIDExLjI2NDQgMTkuNjUxIDExLjE5NjUgMTkuNTUzIDExLjE1MDFDMTkuNDU1MSAxMS4xMDM2IDE5LjM0OCAxMS4wNzk3IDE5LjIzOTUgMTEuMDhIMTcuNzg4MlYxMC4zNTQ0QzE3Ljc4ODIgOS43NzY5NiAxNy41NTg4IDkuMjIzMjEgMTcuMTUwNSA4LjgxNDkzQzE2Ljc0MjIgOC40MDY2NSAxNi4xODg1IDguMTc3MjggMTUuNjExMSA4LjE3NzI4SDExLjA1MzhMMTAuODIxNSA3LjQ1MTU5QzEwLjY3MSA3LjAyNTc4IDEwLjM5MTggNi42NTczMyAxMC4wMjI1IDYuMzk3MjhDOS42NTMyMiA2LjEzNzI0IDkuMjEyMjMgNS45OTg0NyA4Ljc2MDU5IDYuMDAwMjFINi4xNzcxM0M1LjU5OTc0IDYuMDAwMjEgNS4wNDU5OSA2LjIyOTU4IDQuNjM3NzEgNi42Mzc4NkM0LjIyOTQzIDcuMDQ2MTQgNC4wMDAwNiA3LjU5OTg5IDQuMDAwMDYgOC4xNzcyOFYxNi44ODU2QzQuMDAwMDYgMTcuNDYzIDQuMjI5NDMgMTguMDE2NyA0LjYzNzcxIDE4LjQyNUM1LjA0NTk5IDE4LjgzMzMgNS41OTk3NCAxOS4wNjI2IDYuMTc3MTMgMTkuMDYyNkgxNi42MjcxQzE3LjEyMTQgMTkuMDYxMiAxNy42MDA2IDE4Ljg5MTYgMTcuOTg1NyAxOC41ODE2QzE4LjM3MDggMTguMjcxNyAxOC42MzkgMTcuODM5OSAxOC43NDYxIDE3LjM1NzNMMTkuOTY1MiAxMS45NjU0QzE5Ljk4NzMgMTEuODU3MiAxOS45ODQ0IDExLjc0NTQgMTkuOTU2NyAxMS42Mzg1QzE5LjkyOTEgMTEuNTMxNiAxOS44Nzc0IDExLjQzMjQgMTkuODA1NiAxMS4zNDg1Wk03LjE3MTMzIDE3LjA0NTJDNy4xMzQ0NiAxNy4yMDg5IDcuMDQyIDE3LjM1NDggNi45MDk2OSAxNy40NThDNi43NzczOCAxNy41NjEyIDYuNjEzMzkgMTcuNjE1NCA2LjQ0NTY0IDE3LjYxMTNINi4xNzcxM0M1Ljk4NDY3IDE3LjYxMTMgNS44MDAwOCAxNy41MzQ4IDUuNjYzOTkgMTcuMzk4N0M1LjUyNzkgMTcuMjYyNiA1LjQ1MTQ0IDE3LjA3OCA1LjQ1MTQ0IDE2Ljg4NTZWOC4xNzcyOEM1LjQ1MTQ0IDcuOTg0ODIgNS41Mjc5IDcuODAwMjQgNS42NjM5OSA3LjY2NDE0QzUuODAwMDggNy41MjgwNSA1Ljk4NDY3IDcuNDUxNTkgNi4xNzcxMyA3LjQ1MTU5SDguNzYwNTlDOC45MTg4NCA3LjQ0MzMzIDkuMDc1NDQgNy40ODcxIDkuMjA2NDggNy41NzYyMUM5LjMzNzUxIDcuNjY1MzEgOS40MzU3OCA3Ljc5NDg2IDkuNDg2MjggNy45NDUwNkw5Ljg3ODE1IDkuMTM1MkM5LjkyNDcyIDkuMjczNjIgMTAuMDEyIDkuMzk0NzcgMTAuMTI4NSA5LjQ4MjgxQzEwLjI0NSA5LjU3MDg1IDEwLjM4NTQgOS42MjE2OCAxMC41MzEzIDkuNjI4NjZIMTUuNjExMUMxNS44MDM2IDkuNjI4NjYgMTUuOTg4MSA5LjcwNTEyIDE2LjEyNDIgOS44NDEyMUMxNi4yNjAzIDkuOTc3MzEgMTYuMzM2OCAxMC4xNjE5IDE2LjMzNjggMTAuMzU0NFYxMS4wOEg5LjA3OTg5QzguOTEyMTQgMTEuMDc1OSA4Ljc0ODE1IDExLjEzMDEgOC42MTU4NCAxMS4yMzMzQzguNDgzNTMgMTEuMzM2NSA4LjM5MTA3IDExLjQ4MjQgOC4zNTQyIDExLjY0NjFMNy4xNzEzMyAxNy4wNDUyWk0xNy4zMzEgMTcuMDQ1MkMxNy4yOTQxIDE3LjIwODkgMTcuMjAxNyAxNy4zNTQ4IDE3LjA2OTMgMTcuNDU4QzE2LjkzNyAxNy41NjEyIDE2Ljc3MyAxNy42MTU0IDE2LjYwNTMgMTcuNjExM0g4LjUwNjZDOC41NDQwOCAxNy41MzA0IDguNTcwOTEgMTcuNDQ1IDguNTg2NDIgMTcuMzU3M0w5LjY2MDQ0IDEyLjUzMTRIMTguMzY4N0wxNy4zMzEgMTcuMDQ1MlpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiUmVwb3J0c1wiLFxyXG4gIH0sXHJcbl1cclxuZXhwb3J0IGNvbnN0IFNldHRpbmdzRGF0YSA9IFtcclxuICB7XHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmdcclxuICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICBoZWlnaHQ9XCIyNVwiXHJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNVwiXHJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTcuNzc3NSAxNS42NjYzQzE2LjkxMzMgMTQuNjA4NiAxNi4zMDMyIDE0LjA3MDEgMTYuMzAzMiAxMS4xNTRDMTYuMzAzMiA4LjQ4MzU2IDE0LjkzOTUgNy41MzIxNiAxMy44MTcyIDcuMDcwMUMxMy42NjgxIDcuMDA4ODUgMTMuNTI3NyA2Ljg2ODE3IDEzLjQ4MjMgNi43MTUwNUMxMy4yODU0IDYuMDQ1IDEyLjczMzUgNS40NTQ3MSAxMS45OTk5IDUuNDU0NzFDMTEuMjY2MiA1LjQ1NDcxIDEwLjcxMzkgNi4wNDUzNCAxMC41MTkxIDYuNzE1NzJDMTAuNDczNiA2Ljg3MDUzIDEwLjMzMzMgNy4wMDg4NSAxMC4xODQyIDcuMDcwMUM5LjA2MDUyIDcuNTMyODQgNy42OTgyMiA4LjQ4MDg3IDcuNjk4MjIgMTEuMTU0QzcuNjk2NTMgMTQuMDcwMSA3LjA4NjM5IDE0LjYwODYgNi4yMjIxNiAxNS42NjYzQzUuODY0MDggMTYuMTA0NSA2LjE3Nzc0IDE2Ljc2MjQgNi44MDQwMyAxNi43NjI0SDE3LjE5OUMxNy44MjIgMTYuNzYyNCAxOC4xMzM2IDE2LjEwMjUgMTcuNzc3NSAxNS42NjYzWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzg3OTdBXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE0LjE1MzggMTYuNzYyNFYxNy4zMDA5QzE0LjE1MzggMTcuODcyMSAxMy45MjY4IDE4LjQxOTkgMTMuNTIyOSAxOC44MjM5QzEzLjExOSAxOS4yMjc4IDEyLjU3MTIgMTkuNDU0NyAxMS45OTk5IDE5LjQ1NDdDMTEuNDI4NyAxOS40NTQ3IDEwLjg4MDggMTkuMjI3OCAxMC40NzY5IDE4LjgyMzlDMTAuMDczIDE4LjQxOTkgOS44NDYwNyAxNy44NzIxIDkuODQ2MDcgMTcuMzAwOVYxNi43NjI0XCJcclxuICAgICAgICAgIHN0cm9rZT1cIiM3ODc5N0FcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIG5hbWU6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE4LjYxMjkgMTMuMDQzNkMxOC40OTIgMTIuOTA1OSAxOC40MjUzIDEyLjcyODkgMTguNDI1MyAxMi41NDU3QzE4LjQyNTMgMTIuMzYyNCAxOC40OTIgMTIuMTg1NCAxOC42MTI5IDEyLjA0NzdMMTkuNTc4NiAxMC45NjEzQzE5LjY4NSAxMC44NDI2IDE5Ljc1MTEgMTAuNjkzMyAxOS43Njc0IDEwLjUzNDdDMTkuNzgzNiAxMC4zNzYxIDE5Ljc0OTMgMTAuMjE2NCAxOS42NjkyIDEwLjA3ODZMMTguMTYwMyA3LjQ2ODIzQzE4LjA4MSA3LjMzMDU2IDE3Ljk2MDIgNy4yMjE0MyAxNy44MTUzIDcuMTU2NEMxNy42NzAzIDcuMDkxMzggMTcuNTA4NSA3LjA3Mzc3IDE3LjM1MyA3LjEwNjA5TDE1LjkzNDYgNy4zOTI3OEMxNS43NTQyIDcuNDMwMDcgMTUuNTY2MyA3LjQwMDAyIDE1LjQwNjQgNy4zMDgyOEMxNS4yNDY2IDcuMjE2NTUgMTUuMTI1OSA3LjA2OTQ5IDE1LjA2NyA2Ljg5NDg1TDE0LjYwNjggNS41MTQyQzE0LjU1NjIgNS4zNjQzNSAxNC40NTk4IDUuMjM0MiAxNC4zMzExIDUuMTQyMTRDMTQuMjAyNSA1LjA1MDA4IDE0LjA0ODIgNS4wMDA3NyAxMy44OTAxIDUuMDAxMThIMTAuODcyM0MxMC43MDc4IDQuOTkyNTkgMTAuNTQ0OSA1LjAzODA5IDEwLjQwODcgNS4xMzA3M0MxMC4yNzI1IDUuMjIzMzcgMTAuMTcwMyA1LjM1ODA1IDEwLjExNzggNS41MTQyTDkuNjk1MzQgNi44OTQ4NUM5LjYzNjQ5IDcuMDY5NDkgOS41MTU3NiA3LjIxNjU1IDkuMzU1OTIgNy4zMDgyOEM5LjE5NjA4IDcuNDAwMDIgOS4wMDgyIDcuNDMwMDcgOC44Mjc3MiA3LjM5Mjc4TDcuMzcxNjMgNy4xMDYwOUM3LjIyNDE4IDcuMDg1MjUgNy4wNzM4NSA3LjEwODUyIDYuOTM5NiA3LjE3Mjk3QzYuODA1MzQgNy4yMzc0MSA2LjY5MzE2IDcuMzQwMTQgNi42MTcxOSA3LjQ2ODIzTDUuMTA4MjkgMTAuMDc4NkM1LjAyNjE3IDEwLjIxNDkgNC45ODkyNSAxMC4zNzM3IDUuMDAyOCAxMC41MzIyQzUuMDE2MzUgMTAuNjkwOCA1LjA3OTY4IDEwLjg0MDkgNS4xODM3MyAxMC45NjEzTDYuMTQxODggMTIuMDQ3N0M2LjI2Mjg0IDEyLjE4NTQgNi4zMjk1NCAxMi4zNjI0IDYuMzI5NTQgMTIuNTQ1N0M2LjMyOTU0IDEyLjcyODkgNi4yNjI4NCAxMi45MDU5IDYuMTQxODggMTMuMDQzNkw1LjE4MzczIDE0LjEzQzUuMDc5NjggMTQuMjUwNCA1LjAxNjM1IDE0LjQwMDYgNS4wMDI4IDE0LjU1OTFDNC45ODkyNSAxNC43MTc3IDUuMDI2MTcgMTQuODc2NCA1LjEwODI5IDE1LjAxMjdMNi42MTcxOSAxNy42MjMxQzYuNjk2NDggMTcuNzYwOCA2LjgxNzIgMTcuODY5OSA2Ljk2MjE2IDE3LjkzNDlDNy4xMDcxMSAxOCA3LjI2ODkgMTguMDE3NiA3LjQyNDQ1IDE3Ljk4NTJMOC44NDI4MSAxNy42OTg2QzkuMDIzMjkgMTcuNjYxMyA5LjIxMTE3IDE3LjY5MTMgOS4zNzEwMSAxNy43ODMxQzkuNTMwODUgMTcuODc0OCA5LjY1MTU4IDE4LjAyMTggOS43MTA0MyAxOC4xOTY1TDEwLjE3MDYgMTkuNTc3MUMxMC4yMjMxIDE5LjczMzMgMTAuMzI1MyAxOS44NjggMTAuNDYxNSAxOS45NjA2QzEwLjU5NzggMjAuMDUzMiAxMC43NjA2IDIwLjA5ODcgMTAuOTI1MSAyMC4wOTAySDEzLjk0MjlDMTQuMTAxIDIwLjA5MDYgMTQuMjU1MyAyMC4wNDEzIDE0LjM4NCAxOS45NDkyQzE0LjUxMjYgMTkuODU3MSAxNC42MDkgMTkuNzI3IDE0LjY1OTYgMTkuNTc3MUwxNS4xMTk4IDE4LjE5NjVDMTUuMTc4NyAxOC4wMjE4IDE1LjI5OTQgMTcuODc0OCAxNS40NTkyIDE3Ljc4MzFDMTUuNjE5MSAxNy42OTEzIDE1LjgwNyAxNy42NjEzIDE1Ljk4NzQgMTcuNjk4NkwxNy40MDU4IDE3Ljk4NTJDMTcuNTYxNCAxOC4wMTc2IDE3LjcyMzEgMTggMTcuODY4MSAxNy45MzQ5QzE4LjAxMyAxNy44Njk5IDE4LjEzMzggMTcuNzYwOCAxOC4yMTMxIDE3LjYyMzFMMTkuNzIyIDE1LjAxMjdDMTkuODAyMSAxNC44NzQ5IDE5LjgzNjUgMTQuNzE1MiAxOS44MjAyIDE0LjU1NjZDMTkuODAzOSAxNC4zOTgxIDE5LjczNzggMTQuMjQ4NyAxOS42MzE0IDE0LjEzTDE4LjYxMjkgMTMuMDQzNlpNMTcuNDg4OCAxNC4wNTQ2TDE4LjA5MjQgMTQuNzMzNkwxNy4xMjY3IDE2LjQwODRMMTYuMjM2NCAxNi4yMjc0QzE1LjY5MyAxNi4xMTYzIDE1LjEyNzggMTYuMjA4NiAxNC42NDggMTYuNDg2OEMxNC4xNjgyIDE2Ljc2NDkgMTMuODA3MiAxNy4yMDk1IDEzLjYzMzYgMTcuNzM2M0wxMy4zNDY5IDE4LjU4MTNIMTEuNDE1NUwxMS4xNDM5IDE3LjcyMTJDMTAuOTcwMiAxNy4xOTQ1IDEwLjYwOTMgMTYuNzQ5OCAxMC4xMjk1IDE2LjQ3MTdDOS42NDk2NCAxNi4xOTM1IDkuMDg0NCAxNi4xMDEyIDguNTQxMDMgMTYuMjEyM0w3LjY1MDc4IDE2LjM5MzRMNi42NyAxNC43MjZMNy4yNzM1NiAxNC4wNDdDNy42NDQ3MSAxMy42MzIxIDcuODQ5OSAxMy4wOTQ5IDcuODQ5OSAxMi41MzgxQzcuODQ5OSAxMS45ODE0IDcuNjQ0NzEgMTEuNDQ0MiA3LjI3MzU2IDExLjAyOTJMNi42NyAxMC4zNTAyTDcuNjM1NjkgOC42OTA0M0w4LjUyNTk0IDguODcxNUM5LjA2OTMxIDguOTgyNTcgOS42MzQ1NSA4Ljg5MDI3IDEwLjExNDQgOC42MTIxMkMxMC41OTQyIDguMzMzOTcgMTAuOTU1MiA3Ljg4OTMzIDExLjEyODggNy4zNjI2TDExLjQxNTUgNi41MTAwOEgxMy4zNDY5TDEzLjYzMzYgNy4zNzAxNUMxMy44MDcyIDcuODk2ODcgMTQuMTY4MiA4LjM0MTUxIDE0LjY0OCA4LjYxOTY3QzE1LjEyNzggOC44OTc4MiAxNS42OTMgOC45OTAxMiAxNi4yMzY0IDguODc5MDVMMTcuMTI2NyA4LjY5Nzk4TDE4LjA5MjQgMTAuMzcyOUwxNy40ODg4IDExLjA1MTlDMTcuMTIxOCAxMS40NjU5IDE2LjkxOTIgMTIgMTYuOTE5MiAxMi41NTMyQzE2LjkxOTIgMTMuMTA2NSAxNy4xMjE4IDEzLjY0MDYgMTcuNDg4OCAxNC4wNTQ2Wk0xMi4zODEyIDkuNTI3ODdDMTEuNzg0MyA5LjUyNzg3IDExLjIwMDkgOS43MDQ4NiAxMC43MDQ2IDEwLjAzNjVDMTAuMjA4MyAxMC4zNjgxIDkuODIxNSAxMC44Mzk0IDkuNTkzMDkgMTEuMzkwOEM5LjM2NDY5IDExLjk0MjIgOS4zMDQ5MiAxMi41NDkgOS40MjEzNyAxMy4xMzQ0QzkuNTM3ODEgMTMuNzE5OCA5LjgyNTIyIDE0LjI1NzUgMTAuMjQ3MyAxNC42Nzk2QzEwLjY2OTMgMTUuMTAxNiAxMS4yMDcgMTUuMzg5IDExLjc5MjQgMTUuNTA1NUMxMi4zNzc4IDE1LjYyMTkgMTIuOTg0NiAxNS41NjIyIDEzLjUzNiAxNS4zMzM3QzE0LjA4NzUgMTUuMTA1MyAxNC41NTg4IDE0LjcxODUgMTQuODkwNCAxNC4yMjIzQzE1LjIyMiAxMy43MjYgMTUuMzk5IDEzLjE0MjUgMTUuMzk5IDEyLjU0NTdDMTUuMzk5IDExLjc0NTMgMTUuMDgxIDEwLjk3NzcgMTQuNTE1MSAxMC40MTE4QzEzLjk0OTEgOS44NDU4MiAxMy4xODE1IDkuNTI3ODcgMTIuMzgxMiA5LjUyNzg3Wk0xMi4zODEyIDE0LjA1NDZDMTIuMDgyNyAxNC4wNTQ2IDExLjc5MSAxMy45NjYxIDExLjU0MjkgMTMuODAwM0MxMS4yOTQ3IDEzLjYzNDUgMTEuMTAxMyAxMy4zOTg4IDEwLjk4NzEgMTMuMTIzMUMxMC44NzI5IDEyLjg0NzQgMTAuODQzIDEyLjU0NCAxMC45MDEzIDEyLjI1MTNDMTAuOTU5NSAxMS45NTg2IDExLjEwMzIgMTEuNjg5NyAxMS4zMTQyIDExLjQ3ODdDMTEuNTI1MiAxMS4yNjc3IDExLjc5NDEgMTEuMTI0IDEyLjA4NjggMTEuMDY1OEMxMi4zNzk1IDExLjAwNzUgMTIuNjgyOSAxMS4wMzc0IDEyLjk1ODYgMTEuMTUxNkMxMy4yMzQzIDExLjI2NTggMTMuNDcgMTEuNDU5MiAxMy42MzU4IDExLjcwNzRDMTMuODAxNiAxMS45NTU1IDEzLjg5MDEgMTIuMjQ3MiAxMy44OTAxIDEyLjU0NTdDMTMuODkwMSAxMi45NDU5IDEzLjczMTEgMTMuMzI5NiAxMy40NDgxIDEzLjYxMjZDMTMuMTY1MiAxMy44OTU2IDEyLjc4MTQgMTQuMDU0NiAxMi4zODEyIDE0LjA1NDZaXCJcclxuICAgICAgICAgIGZpbGw9XCIjNzg3OTdBXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICBuYW1lOiBcIlNldHRpbmdzXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjVcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTE3LjA2MSAxMi4wNDc4QzE2LjkxNiAxMi4wNDc4IDE2Ljc3NjkgMTEuOTkwMiAxNi42NzQ0IDExLjg4NzdDMTYuNTcxOCAxMS43ODUyIDE2LjUxNDIgMTEuNjQ2MSAxNi41MTQyIDExLjUwMTFWOS45NTY5NUMxNi41MTQyIDcuNzY5ODIgMTQuNDkzMyA2LjAyMDEyIDEyLjAwODcgNi4wMjAxMkM5LjUyNDE0IDYuMDIwMTIgNy41MDMyMyA3Ljc5MTY5IDcuNTAzMjMgOS45NTY5NVYxMS41MDExQzcuNTAzMjMgMTEuNjQ2MSA3LjQ0NTYzIDExLjc4NTIgNy4zNDMwOCAxMS44ODc3QzcuMjQwNTQgMTEuOTkwMiA3LjEwMTQ3IDEyLjA0NzggNi45NTY0NSAxMi4wNDc4QzYuODExNDMgMTIuMDQ3OCA2LjY3MjM2IDExLjk5MDIgNi41Njk4MiAxMS44ODc3QzYuNDY3MjggMTEuNzg1MiA2LjQwOTY3IDExLjY0NjEgNi40MDk2NyAxMS41MDExVjkuOTU2OTVDNi40MDk2NyA3LjE3NDkyIDguOTI0ODcgNC45MDkwNiAxMi4wMDg3IDQuOTA5MDZDMTUuMDkyNiA0LjkwOTA2IDE3LjYwNzggNy4xNzQ5MiAxNy42MDc4IDkuOTU2OTVWMTEuNTAxMUMxNy42MDg0IDExLjU3MyAxNy41OTQ2IDExLjY0NDQgMTcuNTY3MyAxMS43MTFDMTcuNTQwMSAxMS43Nzc2IDE3LjQ5OTggMTEuODM4MSAxNy40NDg5IDExLjg4OUMxNy4zOTggMTEuOTM5OSAxNy4zMzc1IDExLjk4MDEgMTcuMjcwOSAxMi4wMDc0QzE3LjIwNDMgMTIuMDM0NyAxNy4xMzMgMTIuMDQ4NCAxNy4wNjEgMTIuMDQ3OFpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTUuNTgyNSAxNy4xOTJDMTUuNDM3NSAxNy4xOTIgMTUuMjk4NCAxNy4xMzQ0IDE1LjE5NTkgMTcuMDMxOUMxNS4wOTM0IDE2LjkyOTMgMTUuMDM1NyAxNi43OTAzIDE1LjAzNTcgMTYuNjQ1MlYxMS40NTNDMTUuMDQwMyAxMS4zMTEgMTUuMDk5OSAxMS4xNzY0IDE1LjIwMiAxMS4wNzc2QzE1LjMwNCAxMC45Nzg4IDE1LjQ0MDUgMTAuOTIzNiAxNS41ODI1IDEwLjkyMzdDMTcuNDY3OCAxMC45MjM3IDE5LjAwMzIgMTIuMzM2NiAxOS4wMDMyIDE0LjA2ODhDMTkuMDAzMiAxNS44MDEgMTcuNDY3OCAxNy4xOTIgMTUuNTgyNSAxNy4xOTJaTTE2LjEyOTMgMTIuMDU2NlYxNi4wNDE2QzE2LjYwOCAxNS45NjIzIDE3LjA0NTIgMTUuNzIxNyAxNy4zNjgzIDE1LjM1OTZDMTcuNjkxMyAxNC45OTc2IDE3Ljg4MDggMTQuNTM1OSAxNy45MDUzIDE0LjA1MTNDMTcuODgxOCAxMy41NjU5IDE3LjY5MjggMTMuMTAzMiAxNy4zNjk2IDEyLjc0MDNDMTcuMDQ2NSAxMi4zNzczIDE2LjYwODcgMTIuMTM2MSAxNi4xMjkzIDEyLjA1NjZaTTguNDE3NSAxNy4xOTJDNi41MzIxOSAxNy4xOTIgNC45OTY4MyAxNS43ODM1IDQuOTk2ODMgMTQuMDUxM0M0Ljk5NjgzIDEyLjMxOTEgNi41MzIxOSAxMC45MjM3IDguNDE3NSAxMC45MjM3QzguNTYyNTEgMTAuOTIzNyA4LjcwMTU5IDEwLjk4MTMgOC44MDQxMyAxMS4wODM5QzguOTA2NjcgMTEuMTg2NCA4Ljk2NDI4IDExLjMyNTUgOC45NjQyOCAxMS40NzA1VjE2LjY0NTJDOC45NjQyOCAxNi43OTAzIDguOTA2NjcgMTYuOTI5MyA4LjgwNDEzIDE3LjAzMTlDOC43MDE1OSAxNy4xMzQ0IDguNTYyNTEgMTcuMTkyIDguNDE3NSAxNy4xOTJaTTcuODcwNzEgMTIuMDU2NkM3LjM5MTMgMTIuMTM2MSA2Ljk1MzU2IDEyLjM3NzMgNi42MzA0MiAxMi43NDAzQzYuMzA3MjcgMTMuMTAzMiA2LjExODIzIDEzLjU2NTkgNi4wOTQ3NiAxNC4wNTEzQzYuMTE5MiAxNC41MzU5IDYuMzA4NjggMTQuOTk3NiA2LjYzMTc0IDE1LjM1OTZDNi45NTQ4IDE1LjcyMTcgNy4zOTIgMTUuOTYyMyA3Ljg3MDcxIDE2LjA0MTZWMTIuMDU2NlpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTUuNDAzMSAxOC45NzI0SDEzLjU5MjJDMTMuNDQ3MiAxOC45NzI0IDEzLjMwODEgMTguOTE0OCAxMy4yMDU2IDE4LjgxMjJDMTMuMTAzIDE4LjcwOTcgMTMuMDQ1NCAxOC41NzA2IDEzLjA0NTQgMTguNDI1NkMxMy4wNDU0IDE4LjI4MDYgMTMuMTAzIDE4LjE0MTUgMTMuMjA1NiAxOC4wMzg5QzEzLjMwODEgMTcuOTM2NCAxMy40NDcyIDE3Ljg3ODggMTMuNTkyMiAxNy44Nzg4SDE1LjQwMzFDMTUuNjg2MiAxNy44Nzg4IDE1Ljk1NzcgMTcuNzY2MyAxNi4xNTc4IDE3LjU2NjJDMTYuMzU4IDE3LjM2NiAxNi40NzA1IDE3LjA5NDUgMTYuNDcwNSAxNi44MTE1VjE2LjU3MDlDMTYuNDcwNSAxNi40MjU5IDE2LjUyODEgMTYuMjg2OCAxNi42MzA2IDE2LjE4NDNDMTYuNzMzMSAxNi4wODE3IDE2Ljg3MjIgMTYuMDI0MSAxNy4wMTcyIDE2LjAyNDFDMTcuMTYyMyAxNi4wMjQxIDE3LjMwMTMgMTYuMDgxNyAxNy40MDM5IDE2LjE4NDNDMTcuNTA2NCAxNi4yODY4IDE3LjU2NCAxNi40MjU5IDE3LjU2NCAxNi41NzA5VjE2LjgxMTVDMTcuNTY0IDE3LjM4NDYgMTcuMzM2NCAxNy45MzQyIDE2LjkzMTEgMTguMzM5NUMxNi41MjU5IDE4Ljc0NDcgMTUuOTc2MiAxOC45NzI0IDE1LjQwMzEgMTguOTcyNFpcIlxyXG4gICAgICAgICAgZmlsbD1cIiM3ODc5N0FcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMTIuNjU2MiAyMC4wMDAySDExLjU3NThDMTEuMTc5IDIwLjAwMDIgMTAuNzk4NSAxOS44NDI1IDEwLjUxNzkgMTkuNTYyQzEwLjIzNzQgMTkuMjgxNCAxMC4wNzk4IDE4LjkwMDkgMTAuMDc5OCAxOC41MDQyVjE4LjQ0MjlDMTAuMDgwOSAxOC4wNDY5IDEwLjIzOTEgMTcuNjY3NSAxMC41MTk1IDE3LjM4NzlDMTAuNzk5OSAxNy4xMDgzIDExLjE3OTggMTYuOTUxMyAxMS41NzU4IDE2Ljk1MTNIMTIuNjU2MkMxMy4wNTE4IDE2Ljk1MTMgMTMuNDMxMiAxNy4xMDg0IDEzLjcxMDkgMTcuMzg4MkMxMy45OTA3IDE3LjY2NzkgMTQuMTQ3OCAxOC4wNDczIDE0LjE0NzggMTguNDQyOVYxOC41MDQyQzE0LjE0NzggMTguOTAwMiAxMy45OTA4IDE5LjI4IDEzLjcxMTIgMTkuNTYwNEMxMy40MzE2IDE5Ljg0MDkgMTMuMDUyMiAxOS45OTkgMTIuNjU2MiAyMC4wMDAyWk0xMS41ODQ1IDE4LjA0NDlDMTEuNDc4NSAxOC4wNDQ5IDExLjM3NjggMTguMDg2NyAxMS4zMDE1IDE4LjE2MTJDMTEuMjI2MSAxOC4yMzU3IDExLjE4MzIgMTguMzM2OSAxMS4xODIxIDE4LjQ0MjlWMTguNTA0MkMxMS4xODIxIDE4LjYxMDkgMTEuMjI0NSAxOC43MTMyIDExLjMgMTguNzg4N0MxMS4zNzU0IDE4Ljg2NDIgMTEuNDc3OCAxOC45MDY2IDExLjU4NDUgMTguOTA2NkgxMi42NTYyQzEyLjc2MjIgMTguOTA1NCAxMi44NjM0IDE4Ljg2MjUgMTIuOTM3OSAxOC43ODcyQzEzLjAxMjUgMTguNzExOCAxMy4wNTQzIDE4LjYxMDEgMTMuMDU0MyAxOC41MDQyVjE4LjQ0MjlDMTMuMDU0MyAxOC4zMzczIDEzLjAxMjMgMTguMjM2MSAxMi45Mzc3IDE4LjE2MTRDMTIuODYzIDE4LjA4NjggMTIuNzYxOCAxOC4wNDQ5IDEyLjY1NjIgMTguMDQ0OUgxMS41ODQ1WlwiXHJcbiAgICAgICAgICBmaWxsPVwiIzc4Nzk3QVwiXHJcbiAgICAgICAgICBzdHJva2U9XCIjNzg3OTdBXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjAuNFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApLFxyXG4gICAgbmFtZTogXCJTdXBwb3J0XCIsXHJcbiAgfSxcclxuXVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgU2VuZFRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgU2lkZWJhclRleHQgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcblxyXG5pbXBvcnQgeyBEYXNoYm9hcmREYXRhIH0gZnJvbSBcIi4vRGF0YVwiXHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8QmFyUm93PlxyXG4gICAgICAgIHtEYXNoYm9hcmREYXRhLm1hcCgoZGF0YTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICA8QmFyQ29sdW1uIGNsYXNzTmFtZT17ZGF0YS5jbGFzc25hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICB7ZGF0YS5pY29ufVxyXG4gICAgICAgICAgICA8QmFyVGV4dD4ge2RhdGEubmFtZX08L0JhclRleHQ+XHJcbiAgICAgICAgICA8L0JhckNvbHVtbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9CYXJSb3c+XHJcbiAgICAgIDxCYXJMaW5lIC8+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAxMnB4IDAgMCAwO1xyXG5gXHJcbmNvbnN0IEJhclJvdyA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc21va2VXaGl0ZX07XHJcbiAgICBjb2xvcjogJHtTZW5kVGhlbWUuYmx1ZX07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEJhckNvbHVtbiA9IHN0eWxlZC5saWBcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtTZW5kVGhlbWUuc25vd1doaXRlfTtcclxuICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xyXG5cclxuICBzdmcge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEJhclRleHQgPSBzdHlsZWQoU2lkZWJhclRleHQpYFxyXG4gIG1hcmdpbjogMCA4cHg7XHJcbmBcclxuY29uc3QgQmFyTGluZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6ICR7U2VuZFRoZW1lLnN0cm9rZX07XHJcbiAgb3BhY2l0eTogMC4xO1xyXG4gIG1hcmdpbjogMTZweCAwcHg7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBTZW5kVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBTaWRlYmFyVGV4dCB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmltcG9ydCB7IFNldHRpbmdzRGF0YSB9IGZyb20gXCIuL0RhdGFcIlxyXG5cclxuY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8QmFyUm93PlxyXG4gICAgICAgIHtTZXR0aW5nc0RhdGEubWFwKChkYXRhOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcclxuICAgICAgICAgIDxCYXJDb2x1bW4gY2xhc3NOYW1lPXtkYXRhLmNsYXNzbmFtZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHtkYXRhLmljb259XHJcbiAgICAgICAgICAgIDxCYXJUZXh0PiB7ZGF0YS5uYW1lfTwvQmFyVGV4dD5cclxuICAgICAgICAgIDwvQmFyQ29sdW1uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JhclJvdz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiA0cHggMDtcclxuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXHJcbmBcclxuY29uc3QgQmFyUm93ID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5zbW9rZVdoaXRlfTtcclxuICAgIGNvbG9yOiAke1NlbmRUaGVtZS5ibHVlfTtcclxuICB9XHJcbmBcclxuY29uc3QgQmFyQ29sdW1uID0gc3R5bGVkLmxpYFxyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1NlbmRUaGVtZS5zbm93V2hpdGV9O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDE2cHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICB9XHJcbmBcclxuY29uc3QgQmFyVGV4dCA9IHN0eWxlZChTaWRlYmFyVGV4dClgXHJcbiAgbWFyZ2luOiAwIDhweDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NcclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2UwNzg1NzZiJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1HVUxPM0JEQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRk0zN0hIWUsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtVkdJRzU1TTIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1YM1dWMzZZVi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC1FMDc4NTc2Qi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixL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
