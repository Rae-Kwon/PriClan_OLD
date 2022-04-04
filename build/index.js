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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW5saXN0L2luZGV4LnRzeCIsICIuLi9hcHAvc2VydmVyL3NlcnZpY2VzL2NsYW4tc2VydmljZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9tb2RlbHMvY2xhbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9zZXJ2aWNlcy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL3JlZ2lzdGVyL2luZGV4LnRzeCIsICIuLi9hcHAvc2VydmVyL3NlcnZpY2VzL3VzZXItc2VydmljZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9tb2RlbHMvdXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9taWRkbGV3YXJlL3Bhc3N3b3JkUmVzb2x2ZXIuc2VydmVyLnRzIiwgIi4uL2FwcC9zZXJ2ZXIvbWlkZGxld2FyZS9jcmVhdGVTZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuLnRzeCIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbi8kY2xhbklkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CYWNrQnV0dG9uLnRzeCIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbi9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW5saXN0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvcmVnaXN0ZXIvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuLyRjbGFuSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhbmxpc3QvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsYW5saXN0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNsYW5saXN0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVnaXN0ZXIvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlZ2lzdGVyL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlZ2lzdGVyXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xhblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjbGFuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9jbGFuLyRjbGFuSWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsYW4vJGNsYW5JZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsYW5cIixcbiAgICAgIHBhdGg6IFwiOmNsYW5JZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhbi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xhbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsYW5cIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0Q2xhbnMgfSBmcm9tIFwifi9zZXJ2ZXIvc2VydmljZXMvY2xhbi1zZXJ2aWNlLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBDbGFuIH0gZnJvbSBcIn4vc2VydmVyL21vZGVscy9jbGFuLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGNsYW5zOiBBcnJheTxDbGFuPiB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgY2xhbnM6IExvYWRlckRhdGEgPSB7XG5cdFx0Y2xhbnM6IGF3YWl0IGdldENsYW5zKCksXG5cdH07XG5cdHJldHVybiBqc29uPExvYWRlckRhdGE+KGNsYW5zKTtcbn07XG5cbmZ1bmN0aW9uIENsYW5Ib21lKCkge1xuXHRjb25zdCB7IGNsYW5zIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5DbGFuIFBhZ2U8L2gxPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7Y2xhbnMubWFwKChjbGFuKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGNsYW5JZCA9IGNsYW4uX2lkID8gY2xhbi5faWQudG9TdHJpbmcoKSA6IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxsaSBrZXk9e2NsYW5JZH0+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPXtgL2NsYW4vJHtjbGFuSWR9YH0+e2NsYW4ubmFtZX08L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENsYW5Ib21lO1xuIiwgImltcG9ydCB7IENsYW5Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9jbGFuLnNlcnZlcidcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2xhbnMoKSB7XG4gICAgY29uc3QgY2xhbnMgPSBhd2FpdCBDbGFuTW9kZWwuZmluZCgpXG4gICAgcmV0dXJuIGNsYW5zXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENsYW4oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGNsYW4gPSBhd2FpdCBDbGFuTW9kZWwuZmluZEJ5SWQoaWQpXG4gICAgcmV0dXJuIGNsYW5cbn1cblxuZXhwb3J0IHsgZ2V0Q2xhbiwgZ2V0Q2xhbnMgfVxuIiwgImltcG9ydCB7IG1vbmdvb3NlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RiLnNlcnZlclwiO1xuXG50eXBlIENsYW4gPSB7XG5cdF9pZD86IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkXG5cdG5hbWU6IHN0cmluZztcblx0bWVtYmVyTGlzdDogW21vbmdvb3NlLlR5cGVzLk9iamVjdElkXTtcblx0bWVtYmVyQ291bnQ6IG51bWJlcjtcbn07XG5cbmNvbnN0IGNsYW5TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcblx0bmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdG1lbWJlckxpc3Q6IFt7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCAsIHJlZjogJ1VzZXInfV0sXG5cdG1lbWJlckNvdW50OiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5jb25zdCBDbGFuTW9kZWwgPSBtb25nb29zZS5tb2RlbDxDbGFuPihcIkNsYW5cIiwgY2xhblNjaGVtYSk7XG5cbmV4cG9ydCB7IENsYW5Nb2RlbCB9O1xuZXhwb3J0IHR5cGUgeyBDbGFuIH07XG4iLCAiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuXG5sZXQgZGI6IGFueTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBfX2RiOiBhbnlcbn1cblxuY29ubmVjdCgpO1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuXHRpZiAoZGIpIHJldHVybiBkYjtcblxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0ZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KGAke3Byb2Nlc3MuZW52Lk1PTkdPREJfVVJMfWApO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGluIGRldmVsb3BtZW50LCBuZWVkIHRvIHN0b3JlIHRoZSBkYiBjb25uZWN0aW9uIGluIGEgZ2xvYmFsIHZhcmlhYmxlXG5cdFx0Ly8gdGhpcyBpcyBiZWNhdXNlIHRoZSBkZXYgc2VydmVyIHB1cmdlcyB0aGUgcmVxdWlyZSBjYWNoZSBvbiBldmVyeSByZXF1ZXN0XG5cdFx0Ly8gYW5kIHdpbGwgY2F1c2UgbXVsdGlwbGUgY29ubmVjdGlvbnMgdG8gYmUgbWFkZVxuXHRcdGlmICghZ2xvYmFsLl9fZGIpIHtcblx0XHRcdGdsb2JhbC5fX2RiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChgJHtwcm9jZXNzLmVudi5NT05HT0RCX1VSTH1gKTtcblx0XHR9XG5cdFx0ZGIgPSBnbG9iYWwuX19kYjtcblx0fVxuXHRyZXR1cm4gZGI7XG59XG5cbmV4cG9ydCB7IG1vbmdvb3NlLCBjb25uZWN0IH07XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSwganNvbiwgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlciB9IGZyb20gXCJ+L3NlcnZlci9zZXJ2aWNlcy91c2VyLXNlcnZpY2Uuc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiB9IGZyb20gXCJ+L3NlcnZlci9taWRkbGV3YXJlL2NyZWF0ZVNlc3Npb24uc2VydmVyXCI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWU6IHVua25vd24pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRpZiAodHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8IHVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcblx0XHRyZXR1cm4gXCJVc2VybmFtZSBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBsb25nXCI7XG5cdH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZDogdW5rbm93bik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuXHRcdHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmdcIjtcblx0fVxufVxuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG5cdGZvcm1FcnJvcj86IHN0cmluZztcblx0ZmllbGRFcnJvcnM/OiB7XG5cdFx0dXNlcm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHR9O1xuXHRmaWVsZHM/OiB7XG5cdFx0dXNlcm5hbWU6IHN0cmluZztcblx0XHRwYXNzd29yZDogc3RyaW5nO1xuXHR9O1xufTtcblxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKTogb2JqZWN0ID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuXHRjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXHRjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG5cdGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcblx0Y29uc3QgcmVkaXJlY3RUbyA9IFwiL1wiO1xuXG5cdGlmICh0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIGJhZFJlcXVlc3Qoe1xuXHRcdFx0Zm9ybUVycm9yOiBcIkZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHlcIixcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IGZpZWxkcyA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XG5cdGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuXHRcdHVzZXJuYW1lOiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lKSxcblx0XHRwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG5cdH07XG5cdGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuXHRcdHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9KTtcblxuXHRjb25zdCB1c2VyID0gYXdhaXQgY3JlYXRlVXNlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcblx0Y29uc29sZS5sb2coeyB1c2VyIH0pO1xuXHRpZiAoIXVzZXIpIHtcblx0XHRyZXR1cm4gYmFkUmVxdWVzdCh7XG5cdFx0XHRmaWVsZHMsXG5cdFx0XHRmb3JtRXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgdHJ5aW5nIHRvIGNyZWF0ZSBhIG5ldyB1c2VyXCIsXG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsIHJlZGlyZWN0VG8pXG59O1xuXG5mdW5jdGlvbiBSZWdpc3RlcigpOiBKU1guRWxlbWVudCB7XG5cdGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG4gICAgY29uc29sZS5sb2coYWN0aW9uRGF0YSlcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPlJlZ2lzdGVyPC9oMT5cblx0XHRcdDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCI+VXNlcm5hbWU8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJ1c2VybmFtZS1pbnB1dFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnVzZXJuYW1lfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmQtaW5wdXRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJwYXNzd29yZC1pbnB1dFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnBhc3N3b3JkfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cblx0XHRcdDwvRm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIiwgImltcG9ydCB7IFVzZXIsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5zZXJ2ZXJcIjtcbmltcG9ydCB7IGhhc2hlZFBhc3N3b3JkIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvcGFzc3dvcmRSZXNvbHZlci5zZXJ2ZXJcIjtcblxudHlwZSBVc2VyQXV0aCA9IHtcblx0dXNlcm5hbWU6IHN0cmluZztcblx0cGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbnR5cGUgQ3JlYXRlVXNlciA9IHtcblx0aWQ6IHN0cmluZztcblx0dXNlcm5hbWU6IHN0cmluZztcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBVc2VyQXV0aCk6IFByb21pc2U8Q3JlYXRlVXNlcj4ge1xuXHRjb25zdCByZWdpc3RlclVzZXIgPSBhd2FpdCBVc2VyTW9kZWwuY3JlYXRlKHtcblx0XHR1c2VybmFtZSxcblx0XHRwYXNzd29yZEhhc2g6IGF3YWl0IGhhc2hlZFBhc3N3b3JkKHBhc3N3b3JkKSxcblx0XHRjcmVhdGVkQXQ6IERhdGUubm93KCksXG5cdFx0dXBkYXRlZEF0OiBEYXRlLm5vdygpLFxuXHR9KTtcblxuXHRjb25zb2xlLmxvZyh0eXBlb2YoeyBpZDogcmVnaXN0ZXJVc2VyLmlkLCB1c2VybmFtZSB9KSlcblx0cmV0dXJuIHsgaWQ6IHJlZ2lzdGVyVXNlci5pZCwgdXNlcm5hbWUgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVXNlciB9O1xuIiwgImltcG9ydCB7IG1vbmdvb3NlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RiLnNlcnZlclwiO1xuXG50eXBlIFVzZXIgPSB7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdHBhc3N3b3JkSGFzaDogc3RyaW5nO1xuXHRjcmVhdGVkQXQ6IERhdGU7XG5cdHVwZGF0ZWRBdDogRGF0ZTtcbn07XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcblx0dXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRwYXNzd29yZEhhc2g6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdHVwZGF0ZWRBdDogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogZmFsc2UgfSxcbn0pO1xuXG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbDxVc2VyPihcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5cbmV4cG9ydCB7IFVzZXJNb2RlbCB9O1xuZXhwb3J0IHR5cGUgeyBVc2VyIH07XG4iLCAiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFzaGVkUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdGNvbnN0IHNhbHRSb3VuZHMgPSAxMDtcblx0Y29uc3QgcGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHRSb3VuZHMpO1xuXG5cdHJldHVybiBwYXNzd29yZEhhc2g7XG59XG5cbmV4cG9ydCB7IGhhc2hlZFBhc3N3b3JkIH1cbiIsICJpbXBvcnQge1xuICAgIGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLFxuICAgIHJlZGlyZWN0XG59IGZyb20gXCJyZW1peFwiXG5cbmNvbnN0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVFxuaWYgKCFzZXNzaW9uU2VjcmV0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXRcIilcbn1cblxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgICBjb29raWU6IHtcbiAgICAgICAgbmFtZTogXCJQcmljb25uZV9zZXNzaW9uXCIsXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgfSxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICByZWRpcmVjdFRvOiBzdHJpbmdcbik6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbigpXG4gICAgc2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgdXNlcklkKTtcbiAgICByZXR1cm4gcmVkaXJlY3QocmVkaXJlY3RUbywge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pXG4gICAgICAgIH1cbiAgICB9KVxufVxuIiwgImZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFByaUNsYW48L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmZ1bmN0aW9uIENsYW5Sb3V0ZSgpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPkNsYW4gUGFnZTwvaDE+XG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PE91dGxldCAvPlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2xhblJvdXRlO1xuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIHVzZUNhdGNoLCB1c2VQYXJhbXMsIGpzb24gIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiXG5pbXBvcnQgeyBnZXRDbGFuIH0gZnJvbSBcIn4vc2VydmVyL3NlcnZpY2VzL2NsYW4tc2VydmljZS5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgQ2xhbiB9IGZyb20gXCJ+L3NlcnZlci9tb2RlbHMvY2xhbi5zZXJ2ZXJcIlxuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9CYWNrQnV0dG9uXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHsgY2xhbjogQ2xhbiB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW52YXJpYW50KHBhcmFtcy5jbGFuSWQsICdwYXJhbXMuY2xhbklkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgY29uc3QgY2xhbiA9IGF3YWl0IGdldENsYW4ocGFyYW1zLmNsYW5JZClcbiAgICAgICAgaW52YXJpYW50KGNsYW4sIGBDbGFuIG5vdCBmb3VuZDogJHtwYXJhbXMuY2xhbklkfWApXG5cbiAgICAgICAgcmV0dXJuIGpzb248TG9hZGVyRGF0YT4oeyBjbGFuIH0pO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBSZXNwb25zZShcIkNsYW4gTm90IEZvdW5kXCIsIHtcbiAgICAgICAgICAgIHN0YXR1czogNDA0XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZnVuY3Rpb24gQ2xhblByb2ZpbGUoKSB7XG4gICAgY29uc3QgeyBjbGFuIH0gPSB1c2VMb2FkZXJEYXRhKCkgYXMgTG9hZGVyRGF0YVxuXG5cdHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmFja0J1dHRvbiBiYWNrVG89Jy9jbGFubGlzdCcgLz5cbiAgICAgICAgICAgIDxoMT57Y2xhbi5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8aDI+TWVtYmVyIExpc3Qge2NsYW4ubWVtYmVyQ291bnR9LzMwPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Y2xhbi5tZW1iZXJMaXN0Lm1hcCgobWVtYmVyLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PnttZW1iZXJ9PC9saT4pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gICAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXG5cbiAgICBpZiAoY2F1Z2h0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5DbGFuIG5vdCBmb3VuZCBhdCB7cGFyYW1zLmNsYW5JZH08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgZXJyb3I6ICR7Y2F1Z2h0LnN0YXR1c31gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGFuUHJvZmlsZTtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbnR5cGUgQmFja0J1dHRvblByb3BzID0ge1xuICAgIGJhY2tUbzogc3RyaW5nXG59IFxuXG5mdW5jdGlvbiBCYWNrQnV0dG9uKHsgYmFja1RvIH06IEJhY2tCdXR0b25Qcm9wcykge1xuXHRyZXR1cm4gKFxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPExpbmsgdG89e2JhY2tUb30+QmFjazwvTGluaz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEJhY2tCdXR0b247XG4iLCAiZnVuY3Rpb24gQ2xhbkhvbWUoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5DbGFuIEhvbWU8L2gxPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2xhbkhvbWU7XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonMTk2M2U2MGInLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVFZVkZXRkVWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SNUwzS1JKRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZCTzc0RldPLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1aRjNGWFpNSC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NsYW4nOnsnaWQnOidyb3V0ZXMvY2xhbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjbGFuJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NsYW4tNklHVkRQVUguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jbGFuLyRjbGFuSWQnOnsnaWQnOidyb3V0ZXMvY2xhbi8kY2xhbklkJywncGFyZW50SWQnOidyb3V0ZXMvY2xhbicsJ3BhdGgnOic6Y2xhbklkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NsYW4vJGNsYW5JZC1BTTNJNTJXWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlM0SzVVTkMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5Jzp0cnVlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jbGFuL2luZGV4Jzp7J2lkJzoncm91dGVzL2NsYW4vaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9jbGFuJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NsYW4vaW5kZXgtSFpEWkRWV1EuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jbGFubGlzdC9pbmRleCc6eydpZCc6J3JvdXRlcy9jbGFubGlzdC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjbGFubGlzdCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2xhbmxpc3QvaW5kZXgtRVo3NzJFNVguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpTNEs1VU5DLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUpVMkkyTEVaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvcmVnaXN0ZXIvaW5kZXgnOnsnaWQnOidyb3V0ZXMvcmVnaXN0ZXIvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzoncmVnaXN0ZXInLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3JlZ2lzdGVyL2luZGV4LVJBQ1RYTEM2LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMTk2M0U2MEIuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUNBO0FBREE7QUFBQTtBQUNBLFlBQXVCO0FBQUE7QUFBQTs7O0FDRHZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxL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
