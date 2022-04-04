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
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
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
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
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

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/richardkwon/Documents/Coding/PriClan/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/clanlist/index.tsx
var clanlist_exports = {};
__export(clanlist_exports, {
  default: () => clanlist_default,
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/server/services/clan-service.server.ts
init_react();

// app/server/models/clan.server.ts
init_react();

// app/server/services/db.server.ts
init_react();
var import_mongoose = __toESM(require("mongoose"));
var import_config = require("dotenv/config");
var db;
connect();
async function connect() {
  if (db)
    return db;
  if (false) {
    db = await import_mongoose.default.connect(`${process.env.MONGODB_URL}`);
  } else {
    if (!global.__db) {
      global.__db = await import_mongoose.default.connect(`${process.env.MONGODB_URL}`);
    }
    db = global.__db;
  }
  return db;
}

// app/server/models/clan.server.ts
var clanSchema = new import_mongoose.default.Schema({
  name: { type: String, required: true },
  memberList: [{ type: import_mongoose.default.Schema.Types.ObjectId, ref: "User" }],
  memberCount: { type: Number, required: true }
});
var ClanModel = import_mongoose.default.model("Clan", clanSchema);

// app/server/services/clan-service.server.ts
async function getClans() {
  const clans = await ClanModel.find();
  return clans;
}
async function getClan(id) {
  const clan = await ClanModel.findById(id);
  return clan;
}

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/clanlist/index.tsx
var loader = async () => {
  const clans = {
    clans: await getClans()
  };
  return (0, import_remix3.json)(clans);
};
function ClanHome() {
  const { clans } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Clan Page"), /* @__PURE__ */ React.createElement("ul", null, clans.map((clan) => {
    let clanId = clan._id ? clan._id.toString() : null;
    return /* @__PURE__ */ React.createElement("li", {
      key: clanId
    }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
      to: `/clan/${clanId}`
    }, clan.name));
  })));
}
var clanlist_default = ClanHome;

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/register/index.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action,
  default: () => register_default
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/server/services/user-service.server.ts
init_react();

// app/server/models/user.server.ts
init_react();
var userSchema = new import_mongoose.default.Schema({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: false }
});
var UserModel = import_mongoose.default.model("User", userSchema);

// app/server/middleware/passwordResolver.server.ts
init_react();
var import_bcryptjs = __toESM(require("bcryptjs"));
async function hashedPassword(password) {
  const saltRounds = 10;
  const passwordHash = await import_bcryptjs.default.hash(password, saltRounds);
  return passwordHash;
}

// app/server/services/user-service.server.ts
async function createUser({ username, password }) {
  const registerUser = await UserModel.create({
    username,
    passwordHash: await hashedPassword(password),
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
  console.log(typeof { id: registerUser.id, username });
  return { id: registerUser.id, username };
}

// app/server/middleware/createSession.server.ts
init_react();
var import_remix4 = __toESM(require_remix());
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix4.createCookieSessionStorage)({
  cookie: {
    name: "Priconne_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix4.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/register/index.tsx
function validateUsername(username) {
  if (typeof username !== "string" || username.length < 3) {
    return "Username must be at least 3 characters long";
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 8) {
    return "Password must be at least 8 characters long";
  }
}
var badRequest = (data) => (0, import_remix5.json)(data, { status: 400 });
var action = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = "/";
  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest({
      formError: "Form not submitted correctly"
    });
  }
  const fields = { username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });
  const user = await createUser({ username, password });
  console.log({ user });
  if (!user) {
    return badRequest({
      fields,
      formError: "Something went wrong trying to create a new user"
    });
  }
  return createUserSession(user.id, redirectTo);
};
function Register() {
  var _a, _b;
  const actionData = (0, import_remix5.useActionData)();
  console.log(actionData);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Register"), /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "username-input",
    name: "username",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.username
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    id: "password-input",
    name: "password",
    defaultValue: (_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit")));
}
var register_default = Register;

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
init_react();
function Home() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to PriClan"));
}
var routes_default = Home;

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/clan.tsx
var clan_exports = {};
__export(clan_exports, {
  default: () => clan_default
});
init_react();
var import_remix6 = __toESM(require_remix());
function ClanRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Clan Page"), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)));
}
var clan_default = ClanRoute;

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/clan/$clanId.tsx
var clanId_exports = {};
__export(clanId_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => clanId_default,
  loader: () => loader2
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/components/BackButton.tsx
init_react();
var import_remix7 = __toESM(require_remix());
function BackButton({ backTo }) {
  return /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: backTo
  }, "Back"));
}
var BackButton_default = BackButton;

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/clan/$clanId.tsx
var loader2 = async ({ params }) => {
  try {
    (0, import_tiny_invariant.default)(params.clanId, "params.clanId is required");
    const clan = await getClan(params.clanId);
    (0, import_tiny_invariant.default)(clan, `Clan not found: ${params.clanId}`);
    return (0, import_remix8.json)({ clan });
  } catch (err) {
    throw new Response("Clan Not Found", {
      status: 404
    });
  }
};
function ClanProfile() {
  const { clan } = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(BackButton_default, {
    backTo: "/clanlist"
  }), /* @__PURE__ */ React.createElement("h1", null, clan.name), /* @__PURE__ */ React.createElement("h2", null, "Member List ", clan.memberCount, "/30"), /* @__PURE__ */ React.createElement("ul", null, clan.memberList.map((member, index) => /* @__PURE__ */ React.createElement("li", {
    key: index
  }, member))));
}
function CatchBoundary() {
  const caught = (0, import_remix8.useCatch)();
  const params = (0, import_remix8.useParams)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Clan not found at ", params.clanId));
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
var clanId_default = ClanProfile;

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/clan/index.tsx
var clan_exports2 = {};
__export(clan_exports2, {
  default: () => clan_default2
});
init_react();
function ClanHome2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Clan Home"));
}
var clan_default2 = ClanHome2;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "1963e60b", "entry": { "module": "/build/entry.client-QYVFWFEV.js", "imports": ["/build/_shared/chunk-R5L3KRJF.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ZF3FXZMH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clan": { "id": "routes/clan", "parentId": "root", "path": "clan", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clan-6IGVDPUH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clan/$clanId": { "id": "routes/clan/$clanId", "parentId": "routes/clan", "path": ":clanId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clan/$clanId-AM3I52WZ.js", "imports": ["/build/_shared/chunk-ZS4K5UNC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/clan/index": { "id": "routes/clan/index", "parentId": "routes/clan", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/clan/index-HZDZDVWQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clanlist/index": { "id": "routes/clanlist/index", "parentId": "root", "path": "clanlist", "index": true, "caseSensitive": void 0, "module": "/build/routes/clanlist/index-EZ772E5X.js", "imports": ["/build/_shared/chunk-ZS4K5UNC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-JU2I2LEZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/index": { "id": "routes/register/index", "parentId": "root", "path": "register", "index": true, "caseSensitive": void 0, "module": "/build/routes/register/index-RACTXLC6.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1963E60B.js" };

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
  "routes/clanlist/index": {
    id: "routes/clanlist/index",
    parentId: "root",
    path: "clanlist",
    index: true,
    caseSensitive: void 0,
    module: clanlist_exports
  },
  "routes/register/index": {
    id: "routes/register/index",
    parentId: "root",
    path: "register",
    index: true,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/clan": {
    id: "routes/clan",
    parentId: "root",
    path: "clan",
    index: void 0,
    caseSensitive: void 0,
    module: clan_exports
  },
  "routes/clan/$clanId": {
    id: "routes/clan/$clanId",
    parentId: "routes/clan",
    path: ":clanId",
    index: void 0,
    caseSensitive: void 0,
    module: clanId_exports
  },
  "routes/clan/index": {
    id: "routes/clan/index",
    parentId: "routes/clan",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: clan_exports2
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW5saXN0L2luZGV4LnRzeCIsICIuLi9hcHAvc2VydmVyL3NlcnZpY2VzL2NsYW4tc2VydmljZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9tb2RlbHMvY2xhbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9zZXJ2aWNlcy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL3JlZ2lzdGVyL2luZGV4LnRzeCIsICIuLi9hcHAvc2VydmVyL3NlcnZpY2VzL3VzZXItc2VydmljZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9tb2RlbHMvdXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9taWRkbGV3YXJlL3Bhc3N3b3JkUmVzb2x2ZXIuc2VydmVyLnRzIiwgIi4uL2FwcC9zZXJ2ZXIvbWlkZGxld2FyZS9jcmVhdGVTZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuLnRzeCIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbi8kY2xhbklkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CYWNrQnV0dG9uLnRzeCIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbi9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW5saXN0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvcmVnaXN0ZXIvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuLyRjbGFuSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhbmxpc3QvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsYW5saXN0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNsYW5saXN0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVnaXN0ZXIvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlZ2lzdGVyL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlZ2lzdGVyXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xhblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjbGFuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9jbGFuLyRjbGFuSWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsYW4vJGNsYW5JZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsYW5cIixcbiAgICAgIHBhdGg6IFwiOmNsYW5JZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhbi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xhbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsYW5cIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0Q2xhbnMgfSBmcm9tIFwifi9zZXJ2ZXIvc2VydmljZXMvY2xhbi1zZXJ2aWNlLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBDbGFuIH0gZnJvbSBcIn4vc2VydmVyL21vZGVscy9jbGFuLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGNsYW5zOiBBcnJheTxDbGFuPiB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgY2xhbnM6IExvYWRlckRhdGEgPSB7XG5cdFx0Y2xhbnM6IGF3YWl0IGdldENsYW5zKCksXG5cdH07XG5cdHJldHVybiBqc29uPExvYWRlckRhdGE+KGNsYW5zKTtcbn07XG5cbmZ1bmN0aW9uIENsYW5Ib21lKCkge1xuXHRjb25zdCB7IGNsYW5zIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5DbGFuIFBhZ2U8L2gxPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7Y2xhbnMubWFwKChjbGFuKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGNsYW5JZCA9IGNsYW4uX2lkID8gY2xhbi5faWQudG9TdHJpbmcoKSA6IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxsaSBrZXk9e2NsYW5JZH0+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPXtgL2NsYW4vJHtjbGFuSWR9YH0+e2NsYW4ubmFtZX08L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENsYW5Ib21lO1xuIiwgImltcG9ydCB7IENsYW5Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9jbGFuLnNlcnZlcidcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2xhbnMoKSB7XG4gICAgY29uc3QgY2xhbnMgPSBhd2FpdCBDbGFuTW9kZWwuZmluZCgpXG4gICAgcmV0dXJuIGNsYW5zXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENsYW4oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGNsYW4gPSBhd2FpdCBDbGFuTW9kZWwuZmluZEJ5SWQoaWQpXG4gICAgcmV0dXJuIGNsYW5cbn1cblxuZXhwb3J0IHsgZ2V0Q2xhbiwgZ2V0Q2xhbnMgfVxuIiwgImltcG9ydCB7IG1vbmdvb3NlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RiLnNlcnZlclwiO1xuXG50eXBlIENsYW4gPSB7XG5cdF9pZD86IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkXG5cdG5hbWU6IHN0cmluZztcblx0bWVtYmVyTGlzdDogW21vbmdvb3NlLlR5cGVzLk9iamVjdElkXTtcblx0bWVtYmVyQ291bnQ6IG51bWJlcjtcbn07XG5cbmNvbnN0IGNsYW5TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcblx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdG1lbWJlckxpc3Q6IFt7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCAsIHJlZjogJ1VzZXInfV0sXG5cdG1lbWJlckNvdW50OiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5jb25zdCBDbGFuTW9kZWwgPSBtb25nb29zZS5tb2RlbDxDbGFuPihcIkNsYW5cIiwgY2xhblNjaGVtYSk7XG5cbmV4cG9ydCB7IENsYW5Nb2RlbCB9O1xuZXhwb3J0IHR5cGUgeyBDbGFuIH07XG4iLCAiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuXG5sZXQgZGI6IGFueTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBfX2RiOiBhbnlcbn1cblxuY29ubmVjdCgpO1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCk6IFByb21pc2U8b2JqZWN0PiB7XG5cdGlmIChkYikgcmV0dXJuIGRiO1xuXG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoYCR7cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkx9YCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gZGV2ZWxvcG1lbnQsIG5lZWQgdG8gc3RvcmUgdGhlIGRiIGNvbm5lY3Rpb24gaW4gYSBnbG9iYWwgdmFyaWFibGVcblx0XHQvLyB0aGlzIGlzIGJlY2F1c2UgdGhlIGRldiBzZXJ2ZXIgcHVyZ2VzIHRoZSByZXF1aXJlIGNhY2hlIG9uIGV2ZXJ5IHJlcXVlc3Rcblx0XHQvLyBhbmQgd2lsbCBjYXVzZSBtdWx0aXBsZSBjb25uZWN0aW9ucyB0byBiZSBtYWRlXG5cdFx0aWYgKCFnbG9iYWwuX19kYikge1xuXHRcdFx0Z2xvYmFsLl9fZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KGAke3Byb2Nlc3MuZW52Lk1PTkdPREJfVVJMfWApO1xuXHRcdH1cblx0XHRkYiA9IGdsb2JhbC5fX2RiO1xuXHR9XG5cblx0cmV0dXJuIGRiO1xufVxuXG5leHBvcnQgeyBtb25nb29zZSwgY29ubmVjdCB9O1xuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUFjdGlvbkRhdGEsIGpzb24sIEZvcm0gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXIgfSBmcm9tIFwifi9zZXJ2ZXIvc2VydmljZXMvdXNlci1zZXJ2aWNlLnNlcnZlclwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlclNlc3Npb24gfSBmcm9tIFwifi9zZXJ2ZXIvbWlkZGxld2FyZS9jcmVhdGVTZXNzaW9uLnNlcnZlclwiO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lOiB1bmtub3duKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0aWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB1c2VybmFtZS5sZW5ndGggPCAzKSB7XG5cdFx0cmV0dXJuIFwiVXNlcm5hbWUgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZ1wiO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRpZiAodHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcblx0XHRyZXR1cm4gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nXCI7XG5cdH1cbn1cblxudHlwZSBBY3Rpb25EYXRhID0ge1xuXHRmb3JtRXJyb3I/OiBzdHJpbmc7XG5cdGZpZWxkRXJyb3JzPzoge1xuXHRcdHVzZXJuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0cGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0fTtcblx0ZmllbGRzPzoge1xuXHRcdHVzZXJuYW1lOiBzdHJpbmc7XG5cdFx0cGFzc3dvcmQ6IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSk6IG9iamVjdCA9PiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcblx0Y29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblx0Y29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xuXHRjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG5cdGNvbnN0IHJlZGlyZWN0VG8gPSBcIi9cIjtcblxuXHRpZiAodHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIikge1xuXHRcdHJldHVybiBiYWRSZXF1ZXN0KHtcblx0XHRcdGZvcm1FcnJvcjogXCJGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5XCIsXG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCBmaWVsZHMgPSB7IHVzZXJuYW1lLCBwYXNzd29yZCB9O1xuXHRjb25zdCBmaWVsZEVycm9ycyA9IHtcblx0XHR1c2VybmFtZTogdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSksXG5cdFx0cGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpLFxuXHR9O1xuXHRpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSlcblx0XHRyZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG5cblx0Y29uc3QgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG5cdGNvbnNvbGUubG9nKHsgdXNlciB9KTtcblx0aWYgKCF1c2VyKSB7XG5cdFx0cmV0dXJuIGJhZFJlcXVlc3Qoe1xuXHRcdFx0ZmllbGRzLFxuXHRcdFx0Zm9ybUVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHRyeWluZyB0byBjcmVhdGUgYSBuZXcgdXNlclwiLFxuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCByZWRpcmVjdFRvKVxufTtcblxuZnVuY3Rpb24gUmVnaXN0ZXIoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbkRhdGEpXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5SZWdpc3RlcjwvaDE+XG5cdFx0XHQ8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiPlVzZXJuYW1lPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwidXNlcm5hbWUtaW5wdXRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy51c2VybmFtZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkLWlucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5wYXNzd29yZH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG5cdFx0XHQ8L0Zvcm0+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiIsICJpbXBvcnQgeyBVc2VyLCBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgeyBoYXNoZWRQYXNzd29yZCB9IGZyb20gXCIuLi9taWRkbGV3YXJlL3Bhc3N3b3JkUmVzb2x2ZXIuc2VydmVyXCI7XG5cbnR5cGUgVXNlckF1dGggPSB7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdHBhc3N3b3JkOiBzdHJpbmc7XG59O1xuXG50eXBlIENyZWF0ZVVzZXIgPSB7XG5cdGlkOiBzdHJpbmc7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogVXNlckF1dGgpOiBQcm9taXNlPENyZWF0ZVVzZXI+IHtcblx0Y29uc3QgcmVnaXN0ZXJVc2VyID0gYXdhaXQgVXNlck1vZGVsLmNyZWF0ZSh7XG5cdFx0dXNlcm5hbWUsXG5cdFx0cGFzc3dvcmRIYXNoOiBhd2FpdCBoYXNoZWRQYXNzd29yZChwYXNzd29yZCksXG5cdFx0Y3JlYXRlZEF0OiBEYXRlLm5vdygpLFxuXHRcdHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcblx0fSk7XG5cblx0Y29uc29sZS5sb2codHlwZW9mKHsgaWQ6IHJlZ2lzdGVyVXNlci5pZCwgdXNlcm5hbWUgfSkpXG5cdHJldHVybiB7IGlkOiByZWdpc3RlclVzZXIuaWQsIHVzZXJuYW1lIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVVzZXIgfTtcbiIsICJpbXBvcnQgeyBtb25nb29zZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kYi5zZXJ2ZXJcIjtcblxudHlwZSBVc2VyID0ge1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHRwYXNzd29yZEhhc2g6IHN0cmluZztcblx0Y3JlYXRlZEF0OiBEYXRlO1xuXHR1cGRhdGVkQXQ6IERhdGU7XG59O1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG5cdHVzZXJuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0cGFzc3dvcmRIYXNoOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0Y3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiBmYWxzZSB9LFxuXHR1cGRhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG59KTtcblxuY29uc3QgVXNlck1vZGVsID0gbW9uZ29vc2UubW9kZWw8VXNlcj4oXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgeyBVc2VyTW9kZWwgfTtcbmV4cG9ydCB0eXBlIHsgVXNlciB9O1xuIiwgImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc2hlZFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRjb25zdCBzYWx0Um91bmRzID0gMTA7XG5cdGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0Um91bmRzKTtcblxuXHRyZXR1cm4gcGFzc3dvcmRIYXNoO1xufVxuXG5leHBvcnQgeyBoYXNoZWRQYXNzd29yZCB9XG4iLCAiaW1wb3J0IHtcbiAgICBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSxcbiAgICByZWRpcmVjdFxufSBmcm9tIFwicmVtaXhcIlxuXG5jb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVRcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpXG59XG5cbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gICAgY29va2llOiB7XG4gICAgICAgIG5hbWU6IFwiUHJpY29ubmVfc2Vzc2lvblwiLFxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxuICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIH0sXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcmVkaXJlY3RUbzogc3RyaW5nXG4pOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKVxuICAgIHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXJJZCk7XG4gICAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKVxuICAgICAgICB9XG4gICAgfSlcbn1cbiIsICJmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+V2VsY29tZSB0byBQcmlDbGFuPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5mdW5jdGlvbiBDbGFuUm91dGUoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5DbGFuIFBhZ2U8L2gxPlxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvbWFpbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENsYW5Sb3V0ZTtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VDYXRjaCwgdXNlUGFyYW1zLCBqc29uICB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIlxuaW1wb3J0IHsgZ2V0Q2xhbiB9IGZyb20gXCJ+L3NlcnZlci9zZXJ2aWNlcy9jbGFuLXNlcnZpY2Uuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IENsYW4gfSBmcm9tIFwifi9zZXJ2ZXIvbW9kZWxzL2NsYW4uc2VydmVyXCJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGNsYW46IENsYW4gfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGludmFyaWFudChwYXJhbXMuY2xhbklkLCAncGFyYW1zLmNsYW5JZCBpcyByZXF1aXJlZCcpXG4gICAgICAgIGNvbnN0IGNsYW4gPSBhd2FpdCBnZXRDbGFuKHBhcmFtcy5jbGFuSWQpXG4gICAgICAgIGludmFyaWFudChjbGFuLCBgQ2xhbiBub3QgZm91bmQ6ICR7cGFyYW1zLmNsYW5JZH1gKVxuXG4gICAgICAgIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgY2xhbiB9KTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJDbGFuIE5vdCBGb3VuZFwiLCB7XG4gICAgICAgICAgICBzdGF0dXM6IDQwNFxuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIENsYW5Qcm9maWxlKCkge1xuICAgIGNvbnN0IHsgY2xhbiB9ID0gdXNlTG9hZGVyRGF0YSgpIGFzIExvYWRlckRhdGFcblxuXHRyZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJhY2tCdXR0b24gYmFja1RvPScvY2xhbmxpc3QnIC8+XG4gICAgICAgICAgICA8aDE+e2NsYW4ubmFtZX08L2gxPlxuICAgICAgICAgICAgPGgyPk1lbWJlciBMaXN0IHtjbGFuLm1lbWJlckNvdW50fS8zMDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2NsYW4ubWVtYmVyTGlzdC5tYXAoKG1lbWJlciwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57bWVtYmVyfTwvbGk+KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICAgIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKClcbiAgICBjb25zdCBwYXJhbXMgPSB1c2VQYXJhbXMoKVxuXG4gICAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+Q2xhbiBub3QgZm91bmQgYXQge3BhcmFtcy5jbGFuSWR9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGVycm9yOiAke2NhdWdodC5zdGF0dXN9YClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xhblByb2ZpbGU7XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG50eXBlIEJhY2tCdXR0b25Qcm9wcyA9IHtcbiAgICBiYWNrVG86IHN0cmluZ1xufSBcblxuZnVuY3Rpb24gQmFja0J1dHRvbih7IGJhY2tUbyB9OiBCYWNrQnV0dG9uUHJvcHMpIHtcblx0cmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtiYWNrVG99PkJhY2s8L0xpbms+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBCYWNrQnV0dG9uO1xuIiwgImZ1bmN0aW9uIENsYW5Ib21lKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+Q2xhbiBIb21lPC9oMT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENsYW5Ib21lO1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzE5NjNlNjBiJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1RWVZGV0ZFVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUjVMM0tSSkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWkYzRlhaTUguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jbGFuJzp7J2lkJzoncm91dGVzL2NsYW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2xhbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGFuLTZJR1ZEUFVILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2xhbi8kY2xhbklkJzp7J2lkJzoncm91dGVzL2NsYW4vJGNsYW5JZCcsJ3BhcmVudElkJzoncm91dGVzL2NsYW4nLCdwYXRoJzonOmNsYW5JZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGFuLyRjbGFuSWQtQU0zSTUyV1ouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpTNEs1VU5DLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2xhbi9pbmRleCc6eydpZCc6J3JvdXRlcy9jbGFuL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvY2xhbicsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGFuL2luZGV4LUhaRFpEVldRLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2xhbmxpc3QvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2xhbmxpc3QvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2xhbmxpc3QnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NsYW5saXN0L2luZGV4LUVaNzcyRTVYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aUzRLNVVOQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1KVTJJMkxFWi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JlZ2lzdGVyL2luZGV4Jzp7J2lkJzoncm91dGVzL3JlZ2lzdGVyL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlZ2lzdGVyJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWdpc3Rlci9pbmRleC1SQUNUWExDNi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTE5NjNFNjBCLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFDQTtBQURBO0FBQUE7QUFDQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtB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LEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoseUJBQXlCO0FBQUEsSUFDckIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix5QkFBeUI7QUFBQSxJQUNyQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixlQUFlO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHVCQUF1QjtBQUFBLElBQ25CLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoscUJBQXFCO0FBQUEsSUFDakIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7OztBRDVEZCxJQUFNLE1BQU07QUFFWixJQUFJLElBQUk7QUFHUixJQUFJLFFBQVE7QUFHWixJQUFJLElBQ0YsVUFDQSx1QkFBUSxPQUFPLGdCQUFnQixFQUFFLFdBQVcsTUFBTSxRQUFRO0FBSzVELElBQUksSUFBSSx1QkFBUSxPQUFPLFVBQVUsRUFBRSxRQUFRO0FBRTNDLElBQUksSUFBSSwyQkFBTztBQUVmLElBQUksSUFDRixLQUNBLDBDQUFxQjtBQUFBLEVBQ25CLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQTtBQUlWLElBQU0sT0FBTyxRQUFRLElBQUksUUFBUTtBQUVqQyxJQUFJLE9BQU8sTUFBTSxNQUFNO0FBQ3JCLFVBQVEsSUFBSSxvQ0FBb0M7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
