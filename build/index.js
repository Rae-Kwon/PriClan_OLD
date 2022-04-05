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
  if (clan === null) {
    throw "Unable to get Clan";
  }
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
async function createUserSession({ userId, redirectTo }) {
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
  const userId = user.id;
  return createUserSession({ userId, redirectTo });
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

// route:/Users/richardkwon/Documents/Coding/PriClan/app/routes/login/index.tsx
var login_exports = {};
__export(login_exports, {
  default: () => login_default
});
init_react();
function Login() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Login"));
}
var login_default = Login;

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
  }), /* @__PURE__ */ React.createElement("h1", null, clan.name), /* @__PURE__ */ React.createElement("h2", null, "Member List ", clan.memberCount, "/30"), clan.memberList && /* @__PURE__ */ React.createElement("ul", null, clan.memberList.map((member, index) => /* @__PURE__ */ React.createElement("li", {
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
var assets_manifest_default = { "version": "81608260", "entry": { "module": "/build/entry.client-QYVFWFEV.js", "imports": ["/build/_shared/chunk-R5L3KRJF.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ZF3FXZMH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clan": { "id": "routes/clan", "parentId": "root", "path": "clan", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clan-4XVPAXVP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clan/$clanId": { "id": "routes/clan/$clanId", "parentId": "routes/clan", "path": ":clanId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clan/$clanId-3EJK46AP.js", "imports": ["/build/_shared/chunk-ZS4K5UNC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/clan/index": { "id": "routes/clan/index", "parentId": "routes/clan", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/clan/index-LXB72FVX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clanlist/index": { "id": "routes/clanlist/index", "parentId": "root", "path": "clanlist", "index": true, "caseSensitive": void 0, "module": "/build/routes/clanlist/index-JKO3I6UX.js", "imports": ["/build/_shared/chunk-ZS4K5UNC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-I3Y3P4WV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-4MSD2D7E.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/index": { "id": "routes/register/index", "parentId": "root", "path": "register", "index": true, "caseSensitive": void 0, "module": "/build/routes/register/index-URMBBGSN.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-81608260.js" };

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
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: true,
    caseSensitive: void 0,
    module: login_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW5saXN0L2luZGV4LnRzeCIsICIuLi9hcHAvc2VydmVyL3NlcnZpY2VzL2NsYW4tc2VydmljZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9tb2RlbHMvY2xhbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9zZXJ2aWNlcy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL3JlZ2lzdGVyL2luZGV4LnRzeCIsICIuLi9hcHAvc2VydmVyL3NlcnZpY2VzL3VzZXItc2VydmljZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9tb2RlbHMvdXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9taWRkbGV3YXJlL3Bhc3N3b3JkUmVzb2x2ZXIuc2VydmVyLnRzIiwgIi4uL2FwcC9zZXJ2ZXIvbWlkZGxld2FyZS9jcmVhdGVTZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvbG9naW4vaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW4udHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuLyRjbGFuSWQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0JhY2tCdXR0b24udHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy40XG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgXCIvYnVpbGRcIixcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXG4pO1xuXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljXCIsIHsgbWF4QWdlOiBcIjFoXCIgfSkpO1xuXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xuXG5hcHAuYWxsKFxuICBcIipcIixcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSlcbik7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbmxpc3QvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9yZWdpc3Rlci9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2xvZ2luL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbi8kY2xhbklkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbi9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2NsYW5saXN0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jbGFubGlzdC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjbGFubGlzdFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3JlZ2lzdGVyL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9yZWdpc3Rlci9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJyZWdpc3RlclwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2NsYW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsYW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2xhblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhbi8kY2xhbklkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jbGFuLyRjbGFuSWRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jbGFuXCIsXG4gICAgICBwYXRoOiBcIjpjbGFuSWRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2NsYW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsYW4vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9jbGFuXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIGNoYXJzZXQ6IFwidXRmLThcIixcbiAgdGl0bGU6IFwiTmV3IFJlbWl4IEFwcFwiLFxuICB2aWV3cG9ydDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUxvYWRlckRhdGEsIGpzb24sIExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGdldENsYW5zIH0gZnJvbSBcIn4vc2VydmVyL3NlcnZpY2VzL2NsYW4tc2VydmljZS5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgQ2xhbiB9IGZyb20gXCJ+L3NlcnZlci9tb2RlbHMvY2xhbi5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0geyBjbGFuczogQXJyYXk8Q2xhbj4gfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcblx0Y29uc3QgY2xhbnM6IExvYWRlckRhdGEgPSB7XG5cdFx0Y2xhbnM6IGF3YWl0IGdldENsYW5zKCksXG5cdH07XG5cdHJldHVybiBqc29uPExvYWRlckRhdGE+KGNsYW5zKTtcbn07XG5cbmZ1bmN0aW9uIENsYW5Ib21lKCk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgeyBjbGFucyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+Q2xhbiBQYWdlPC9oMT5cblx0XHRcdDx1bD5cblx0XHRcdFx0e2NsYW5zLm1hcCgoY2xhbikgPT4ge1xuXHRcdFx0XHRcdGxldCBjbGFuSWQgPSBjbGFuLl9pZCA/IGNsYW4uX2lkLnRvU3RyaW5nKCkgOiBudWxsO1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtjbGFuSWR9PlxuXHRcdFx0XHRcdFx0XHQ8TGluayB0bz17YC9jbGFuLyR7Y2xhbklkfWB9PntjbGFuLm5hbWV9PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvdWw+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBDbGFuSG9tZTtcbiIsICJpbXBvcnQgeyBDbGFuTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvY2xhbi5zZXJ2ZXInXG5cbmFzeW5jIGZ1bmN0aW9uIGdldENsYW5zKCk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgY2xhbnMgPSBhd2FpdCBDbGFuTW9kZWwuZmluZCgpXG4gICAgcmV0dXJuIGNsYW5zXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENsYW4oaWQ6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiAge1xuICAgIGNvbnN0IGNsYW4gPSBhd2FpdCBDbGFuTW9kZWwuZmluZEJ5SWQoaWQpXG5cbiAgICBpZiAoY2xhbiA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyAnVW5hYmxlIHRvIGdldCBDbGFuJ1xuICAgIH1cbiAgICByZXR1cm4gY2xhblxufVxuXG5leHBvcnQgeyBnZXRDbGFuLCBnZXRDbGFucyB9XG4iLCAiaW1wb3J0IHsgbW9uZ29vc2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGIuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IENsYW4gfSBmcm9tIFwiLi90eXBlcy5zZXJ2ZXJcIlxuXG5jb25zdCBjbGFuU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG5cdG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRtZW1iZXJMaXN0OiBbeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ1VzZXInfV0sXG5cdG1lbWJlckNvdW50OiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbn0pO1xuXG5jb25zdCBDbGFuTW9kZWwgPSBtb25nb29zZS5tb2RlbDxDbGFuPihcIkNsYW5cIiwgY2xhblNjaGVtYSk7XG5cbmV4cG9ydCB7IENsYW5Nb2RlbCB9O1xuIiwgImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcblxubGV0IGRiOiBhbnk7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICB2YXIgX19kYjogYW55XG59XG5cbmNvbm5lY3QoKTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpOiBQcm9taXNlPG9iamVjdD4ge1xuXHRpZiAoZGIpIHJldHVybiBkYjtcblxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0ZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KGAke3Byb2Nlc3MuZW52Lk1PTkdPREJfVVJMfWApO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGluIGRldmVsb3BtZW50LCBuZWVkIHRvIHN0b3JlIHRoZSBkYiBjb25uZWN0aW9uIGluIGEgZ2xvYmFsIHZhcmlhYmxlXG5cdFx0Ly8gdGhpcyBpcyBiZWNhdXNlIHRoZSBkZXYgc2VydmVyIHB1cmdlcyB0aGUgcmVxdWlyZSBjYWNoZSBvbiBldmVyeSByZXF1ZXN0XG5cdFx0Ly8gYW5kIHdpbGwgY2F1c2UgbXVsdGlwbGUgY29ubmVjdGlvbnMgdG8gYmUgbWFkZVxuXHRcdGlmICghZ2xvYmFsLl9fZGIpIHtcblx0XHRcdGdsb2JhbC5fX2RiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChgJHtwcm9jZXNzLmVudi5NT05HT0RCX1VSTH1gKTtcblx0XHR9XG5cdFx0ZGIgPSBnbG9iYWwuX19kYjtcblx0fVxuXG5cdHJldHVybiBkYjtcbn1cblxuZXhwb3J0IHsgbW9uZ29vc2UsIGNvbm5lY3QgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VBY3Rpb25EYXRhLCBqc29uLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyIH0gZnJvbSBcIn4vc2VydmVyL3NlcnZpY2VzL3VzZXItc2VydmljZS5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uIH0gZnJvbSBcIn4vc2VydmVyL21pZGRsZXdhcmUvY3JlYXRlU2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogdW5rbm93bik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICh0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHwgdXNlcm5hbWUubGVuZ3RoIDwgMykge1xuXHRcdHJldHVybiBcIlVzZXJuYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmdcIjtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0aWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA4KSB7XG5cdFx0cmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZ1wiO1xuXHR9XG59XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcblx0Zm9ybUVycm9yPzogc3RyaW5nO1xuXHRmaWVsZEVycm9ycz86IHtcblx0XHR1c2VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdH07XG5cdGZpZWxkcz86IHtcblx0XHR1c2VybmFtZTogc3RyaW5nO1xuXHRcdHBhc3N3b3JkOiBzdHJpbmc7XG5cdH07XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpOiBvYmplY3QgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG5cdGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cdGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoXCJ1c2VybmFtZVwiKTtcblx0Y29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuXHRjb25zdCByZWRpcmVjdFRvID0gXCIvXCI7XG5cblx0aWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gYmFkUmVxdWVzdCh7XG5cdFx0XHRmb3JtRXJyb3I6IFwiRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseVwiLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgZmllbGRzID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfTtcblx0Y29uc3QgZmllbGRFcnJvcnMgPSB7XG5cdFx0dXNlcm5hbWU6IHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpLFxuXHRcdHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSxcblx0fTtcblx0aWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG5cdFx0cmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuXHRjb25zb2xlLmxvZyh7IHVzZXIgfSk7XG5cdGlmICghdXNlcikge1xuXHRcdHJldHVybiBiYWRSZXF1ZXN0KHtcblx0XHRcdGZpZWxkcyxcblx0XHRcdGZvcm1FcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZyB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IHVzZXJcIixcblx0XHR9KTtcblx0fVxuXHRjb25zdCB1c2VySWQgPSB1c2VyLmlkXG5cdFxuXHRyZXR1cm4gY3JlYXRlVXNlclNlc3Npb24oeyB1c2VySWQsIHJlZGlyZWN0VG8gfSlcbn07XG5cbmZ1bmN0aW9uIFJlZ2lzdGVyKCk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGE8QWN0aW9uRGF0YT4oKTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb25EYXRhKVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+UmVnaXN0ZXI8L2gxPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWUtaW5wdXRcIj5Vc2VybmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cInVzZXJuYW1lLWlucHV0XCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXNlcm5hbWV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZC1pbnB1dFwiPlBhc3N3b3JkPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkLWlucHV0XCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCAiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgaGFzaGVkUGFzc3dvcmQgfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9wYXNzd29yZFJlc29sdmVyLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBVc2VyQXV0aCwgQ3JlYXRlVXNlciB9IGZyb20gXCIuL3R5cGVzLnNlcnZlclwiXG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogVXNlckF1dGgpOiBQcm9taXNlPENyZWF0ZVVzZXI+IHtcblx0Y29uc3QgcmVnaXN0ZXJVc2VyID0gYXdhaXQgVXNlck1vZGVsLmNyZWF0ZSh7XG5cdFx0dXNlcm5hbWUsXG5cdFx0cGFzc3dvcmRIYXNoOiBhd2FpdCBoYXNoZWRQYXNzd29yZChwYXNzd29yZCksXG5cdFx0Y3JlYXRlZEF0OiBEYXRlLm5vdygpLFxuXHRcdHVwZGF0ZWRBdDogRGF0ZS5ub3coKSxcblx0fSk7XG5cblx0Y29uc29sZS5sb2codHlwZW9mKHsgaWQ6IHJlZ2lzdGVyVXNlci5pZCwgdXNlcm5hbWUgfSkpXG5cdHJldHVybiB7IGlkOiByZWdpc3RlclVzZXIuaWQsIHVzZXJuYW1lIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVVzZXIgfTtcbiIsICJpbXBvcnQgeyBtb25nb29zZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kYi5zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCIuL3R5cGVzLnNlcnZlclwiXG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcblx0dXNlcm5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRwYXNzd29yZEhhc2g6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuXHRjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG5cdHVwZGF0ZWRBdDogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogZmFsc2UgfSxcbn0pO1xuXG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbDxVc2VyPihcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5cbmV4cG9ydCB7IFVzZXJNb2RlbCB9O1xuIiwgImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgdHlwZSB7IFJlc29sdmVQYXNzd29yZCB9IGZyb20gXCIuL3R5cGVzLnNlcnZlclwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYXNoZWRQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0Y29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuXHRjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdFJvdW5kcyk7XG5cblx0cmV0dXJuIHBhc3N3b3JkSGFzaDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tQYXNzd29yZCh7IHBhc3N3b3JkLCBoYXNoIH06IFJlc29sdmVQYXNzd29yZCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRpZiAoaGFzaCA9PT0gdW5kZWZpbmVkKSB0aHJvdyAnQ2Fubm90IGZpbmQgaGFzaGVkIHZlcnNpb24gb2YgcGFzc3dvcmQnXG5cblx0YXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGhhc2gsIChlcnIsIHJlcykgPT4ge1xuXHRcdGlmIChyZXMgPT09IHRydWUpIHJldHVybiB0cnVlO1xuXHRcdGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcblx0fSk7XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBoYXNoZWRQYXNzd29yZCwgY2hlY2tQYXNzd29yZCB9O1xuIiwgImltcG9ydCB7XG4gICAgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsXG4gICAgcmVkaXJlY3Rcbn0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB0eXBlIHsgVXNlclNlc3Npb24gfSBmcm9tIFwiLi90eXBlcy5zZXJ2ZXJcIlxuXG5jb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVRcbmlmICghc2Vzc2lvblNlY3JldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpXG59XG5cbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gICAgY29va2llOiB7XG4gICAgICAgIG5hbWU6IFwiUHJpY29ubmVfc2Vzc2lvblwiLFxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxuICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIH0sXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24oeyB1c2VySWQsIHJlZGlyZWN0VG8gfTogVXNlclNlc3Npb24pOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKVxuICAgIHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXJJZCk7XG4gICAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKVxuICAgICAgICB9XG4gICAgfSlcbn1cbiIsICJmdW5jdGlvbiBMb2dpbigpIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPkxvZ2luPC9oMT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwgImZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+V2VsY29tZSB0byBQcmlDbGFuPC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5mdW5jdGlvbiBDbGFuUm91dGUoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+Q2xhbiBQYWdlPC9oMT5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8T3V0bGV0IC8+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBDbGFuUm91dGU7XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwgdXNlQ2F0Y2gsIHVzZVBhcmFtcywganNvbiAgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCJcbmltcG9ydCB7IGdldENsYW4gfSBmcm9tIFwifi9zZXJ2ZXIvc2VydmljZXMvY2xhbi1zZXJ2aWNlLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBDbGFuIH0gZnJvbSBcIn4vc2VydmVyL21vZGVscy9jbGFuLnNlcnZlclwiXG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL0JhY2tCdXR0b25cIjtcblxudHlwZSBMb2FkZXJEYXRhID0geyBjbGFuOiBDbGFuIH07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGludmFyaWFudChwYXJhbXMuY2xhbklkLCAncGFyYW1zLmNsYW5JZCBpcyByZXF1aXJlZCcpXG4gICAgICAgIGNvbnN0IGNsYW4gPSBhd2FpdCBnZXRDbGFuKHBhcmFtcy5jbGFuSWQpXG4gICAgICAgIGludmFyaWFudChjbGFuLCBgQ2xhbiBub3QgZm91bmQ6ICR7cGFyYW1zLmNsYW5JZH1gKVxuXG4gICAgICAgIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgY2xhbiB9KTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJDbGFuIE5vdCBGb3VuZFwiLCB7XG4gICAgICAgICAgICBzdGF0dXM6IDQwNFxuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIENsYW5Qcm9maWxlKCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCB7IGNsYW4gfSA9IHVzZUxvYWRlckRhdGEoKSBhcyBMb2FkZXJEYXRhXG5cblx0cmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCYWNrQnV0dG9uIGJhY2tUbz0nL2NsYW5saXN0JyAvPlxuICAgICAgICAgICAgPGgxPntjbGFuLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxoMj5NZW1iZXIgTGlzdCB7Y2xhbi5tZW1iZXJDb3VudH0vMzA8L2gyPlxuICAgICAgICAgICAge2NsYW4ubWVtYmVyTGlzdCAmJiA8dWw+XG4gICAgICAgICAgICAgICAge2NsYW4ubWVtYmVyTGlzdC5tYXAoKG1lbWJlciwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57bWVtYmVyfTwvbGk+KX1cbiAgICAgICAgICAgIDwvdWw+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpOiBKU1guRWxlbWVudCB7XG4gICAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKVxuICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpXG5cbiAgICBpZiAoY2F1Z2h0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5DbGFuIG5vdCBmb3VuZCBhdCB7cGFyYW1zLmNsYW5JZH08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgZXJyb3I6ICR7Y2F1Z2h0LnN0YXR1c31gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGFuUHJvZmlsZTtcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbnR5cGUgQmFja0J1dHRvblByb3BzID0ge1xuICAgIGJhY2tUbzogc3RyaW5nXG59IFxuXG5mdW5jdGlvbiBCYWNrQnV0dG9uKHsgYmFja1RvIH06IEJhY2tCdXR0b25Qcm9wcyk6IEpTWC5FbGVtZW50IHtcblx0cmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIHRvPXtiYWNrVG99PkJhY2s8L0xpbms+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBCYWNrQnV0dG9uO1xuIiwgImZ1bmN0aW9uIENsYW5Ib21lKCk6IEpTWC5FbGVtZW50IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGgxPkNsYW4gSG9tZTwvaDE+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBDbGFuSG9tZTtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic4MTYwODI2MCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUVlWRldGRVYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVI1TDNLUkpGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkJPNzRGV08uanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVpGM0ZYWk1ILmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2xhbic6eydpZCc6J3JvdXRlcy9jbGFuJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NsYW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2xhbi00WFZQQVhWUC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NsYW4vJGNsYW5JZCc6eydpZCc6J3JvdXRlcy9jbGFuLyRjbGFuSWQnLCdwYXJlbnRJZCc6J3JvdXRlcy9jbGFuJywncGF0aCc6JzpjbGFuSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2xhbi8kY2xhbklkLTNFSks0NkFQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aUzRLNVVOQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NsYW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2xhbi9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2NsYW4nLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2xhbi9pbmRleC1MWEI3MkZWWC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NsYW5saXN0L2luZGV4Jzp7J2lkJzoncm91dGVzL2NsYW5saXN0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NsYW5saXN0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGFubGlzdC9pbmRleC1KS08zSTZVWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlM0SzVVTkMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtSTNZM1A0V1YuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbi9pbmRleCc6eydpZCc6J3JvdXRlcy9sb2dpbi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4vaW5kZXgtNE1TRDJEN0UuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9yZWdpc3Rlci9pbmRleCc6eydpZCc6J3JvdXRlcy9yZWdpc3Rlci9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidyZWdpc3RlcicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcmVnaXN0ZXIvaW5kZXgtVVJNQkJHU04uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC04MTYwODI2MC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQ0E7QUFEQTtBQUFBO0FBQ0EsWUFBdUI7QUFBQTtBQUFBOzs7QUNEdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFHMUMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3RPbEM7QUFBQSxxQkFBb0I7QUFDcEIseUJBQXdCO0FBQ3hCLG9CQUFtQjtBQUNuQixzQkFBcUM7OztBQ0hyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUErQjtBQUMvQixtQkFBNEI7QUFHYix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxNQUFJLFNBQVMsa0NBQ1gsb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtBQUVwQyxTQUFPLElBQUksU0FBUyxvQkFBb0IsUUFBUTtBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQTtBQUFBOzs7QUNsQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBT087QUFHQSxJQUFNLE9BQXFCLE1BQU87QUFBQSxFQUN2QyxTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUE7QUFHRyxlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Qsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLG9CQUFELE9BQ0Esb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQ0Esb0NBQUMsMEJBQUQ7QUFBQTs7O0FDM0JSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUEwQzs7O0FDQTFDOzs7QUNBQTs7O0FDQUE7QUFBQSxzQkFBcUI7QUFDckIsb0JBQU87QUFFUCxJQUFJO0FBTUo7QUFFQSx5QkFBMEM7QUFDekMsTUFBSTtBQUFJLFdBQU87QUFFZixNQUFJLE9BQXVDO0FBQzFDLFNBQUssTUFBTSx3QkFBUyxRQUFRLEdBQUcsUUFBUSxJQUFJO0FBQUEsU0FDckM7QUFJTixRQUFJLENBQUMsT0FBTyxNQUFNO0FBQ2pCLGFBQU8sT0FBTyxNQUFNLHdCQUFTLFFBQVEsR0FBRyxRQUFRLElBQUk7QUFBQTtBQUVyRCxTQUFLLE9BQU87QUFBQTtBQUdiLFNBQU87QUFBQTs7O0FEdkJSLElBQU0sYUFBYSxJQUFJLHdCQUFTLE9BQU87QUFBQSxFQUN0QyxNQUFNLEVBQUUsTUFBTSxRQUFRLFVBQVU7QUFBQSxFQUNoQyxZQUFZLENBQUMsRUFBRSxNQUFNLHdCQUFTLE9BQU8sTUFBTSxVQUFVLEtBQUs7QUFBQSxFQUMxRCxhQUFhLEVBQUUsTUFBTSxRQUFRLFVBQVU7QUFBQTtBQUd4QyxJQUFNLFlBQVksd0JBQVMsTUFBWSxRQUFROzs7QURQL0MsMEJBQTJDO0FBQ3ZDLFFBQU0sUUFBUSxNQUFNLFVBQVU7QUFDOUIsU0FBTztBQUFBO0FBR1gsdUJBQXVCLElBQThCO0FBQ2pELFFBQU0sT0FBTyxNQUFNLFVBQVUsU0FBUztBQUV0QyxNQUFJLFNBQVMsTUFBTTtBQUNmLFVBQU07QUFBQTtBQUVWLFNBQU87QUFBQTs7O0FETkosSUFBTSxTQUF5QixZQUE2QjtBQUNsRSxRQUFNLFFBQW9CO0FBQUEsSUFDekIsT0FBTyxNQUFNO0FBQUE7QUFFZCxTQUFPLHdCQUFpQjtBQUFBO0FBR3pCLG9CQUFpQztBQUNoQyxRQUFNLEVBQUUsVUFBVTtBQUNsQixTQUNDLG9DQUFDLE9BQUQsTUFDQyxvQ0FBQyxNQUFELE1BQUksY0FDSixvQ0FBQyxNQUFELE1BQ0UsTUFBTSxJQUFJLENBQUMsU0FBUztBQUNwQixRQUFJLFNBQVMsS0FBSyxNQUFNLEtBQUssSUFBSSxhQUFhO0FBQzlDLFdBQ0Msb0NBQUMsTUFBRDtBQUFBLE1BQUksS0FBSztBQUFBLE9BQ1Isb0NBQUMsb0JBQUQ7QUFBQSxNQUFNLElBQUksU0FBUztBQUFBLE9BQVcsS0FBSztBQUFBO0FBQUE7QUFRMUMsSUFBTyxtQkFBUTs7O0FJaENmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUEwQzs7O0FDRDFDOzs7QUNBQTtBQUdBLElBQU0sYUFBYSxJQUFJLHdCQUFTLE9BQU87QUFBQSxFQUN0QyxVQUFVLEVBQUUsTUFBTSxRQUFRLFVBQVU7QUFBQSxFQUNwQyxjQUFjLEVBQUUsTUFBTSxRQUFRLFVBQVU7QUFBQSxFQUN4QyxXQUFXLEVBQUUsTUFBTSxNQUFNLFVBQVU7QUFBQSxFQUNuQyxXQUFXLEVBQUUsTUFBTSxNQUFNLFVBQVU7QUFBQTtBQUdwQyxJQUFNLFlBQVksd0JBQVMsTUFBWSxRQUFROzs7QUNWL0M7QUFBQSxzQkFBbUI7QUFHbkIsOEJBQThCLFVBQW1DO0FBQ2hFLFFBQU0sYUFBYTtBQUNuQixRQUFNLGVBQWUsTUFBTSx3QkFBTyxLQUFLLFVBQVU7QUFFakQsU0FBTztBQUFBOzs7QUZIUiwwQkFBMEIsRUFBRSxVQUFVLFlBQTJDO0FBQ2hGLFFBQU0sZUFBZSxNQUFNLFVBQVUsT0FBTztBQUFBLElBQzNDO0FBQUEsSUFDQSxjQUFjLE1BQU0sZUFBZTtBQUFBLElBQ25DLFdBQVcsS0FBSztBQUFBLElBQ2hCLFdBQVcsS0FBSztBQUFBO0FBR2pCLFVBQVEsSUFBSSxPQUFPLEVBQUUsSUFBSSxhQUFhLElBQUk7QUFDMUMsU0FBTyxFQUFFLElBQUksYUFBYSxJQUFJO0FBQUE7OztBR2IvQjtBQUFBLG9CQUdPO0FBR1AsSUFBTSxnQkFBZ0IsUUFBUSxJQUFJO0FBQ2xDLElBQUksQ0FBQyxlQUFlO0FBQ2hCLFFBQU0sSUFBSSxNQUFNO0FBQUE7QUFHcEIsSUFBTSxVQUFVLDhDQUEyQjtBQUFBLEVBQ3ZDLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFNBQVMsQ0FBQztBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sUUFBUSxLQUFLLEtBQUssS0FBSztBQUFBLElBQ3ZCLFVBQVU7QUFBQTtBQUFBO0FBSWxCLGlDQUF3QyxFQUFFLFFBQVEsY0FBNEM7QUFDMUYsUUFBTSxVQUFVLE1BQU0sUUFBUTtBQUM5QixVQUFRLElBQUksVUFBVTtBQUN0QixTQUFPLDRCQUFTLFlBQVk7QUFBQSxJQUN4QixTQUFTO0FBQUEsTUFDTCxjQUFjLE1BQU0sUUFBUSxjQUFjO0FBQUE7QUFBQTtBQUFBOzs7QUp2QnRELDBCQUEwQixVQUF1QztBQUNoRSxNQUFJLE9BQU8sYUFBYSxZQUFZLFNBQVMsU0FBUyxHQUFHO0FBQ3hELFdBQU87QUFBQTtBQUFBO0FBSVQsMEJBQTBCLFVBQXVDO0FBQ2hFLE1BQUksT0FBTyxhQUFhLFlBQVksU0FBUyxTQUFTLEdBQUc7QUFDeEQsV0FBTztBQUFBO0FBQUE7QUFnQlQsSUFBTSxhQUFhLENBQUMsU0FBNkIsd0JBQUssTUFBTSxFQUFFLFFBQVE7QUFFL0QsSUFBTSxTQUF5QixPQUFPLEVBQUUsY0FBK0I7QUFDN0UsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUMzQixRQUFNLFdBQVcsS0FBSyxJQUFJO0FBQzFCLFFBQU0sV0FBVyxLQUFLLElBQUk7QUFDMUIsUUFBTSxhQUFhO0FBRW5CLE1BQUksT0FBTyxhQUFhLFlBQVksT0FBTyxhQUFhLFVBQVU7QUFDakUsV0FBTyxXQUFXO0FBQUEsTUFDakIsV0FBVztBQUFBO0FBQUE7QUFJYixRQUFNLFNBQVMsRUFBRSxVQUFVO0FBQzNCLFFBQU0sY0FBYztBQUFBLElBQ25CLFVBQVUsaUJBQWlCO0FBQUEsSUFDM0IsVUFBVSxpQkFBaUI7QUFBQTtBQUU1QixNQUFJLE9BQU8sT0FBTyxhQUFhLEtBQUs7QUFDbkMsV0FBTyxXQUFXLEVBQUUsYUFBYTtBQUVsQyxRQUFNLE9BQU8sTUFBTSxXQUFXLEVBQUUsVUFBVTtBQUMxQyxVQUFRLElBQUksRUFBRTtBQUNkLE1BQUksQ0FBQyxNQUFNO0FBQ1YsV0FBTyxXQUFXO0FBQUEsTUFDakI7QUFBQSxNQUNBLFdBQVc7QUFBQTtBQUFBO0FBR2IsUUFBTSxTQUFTLEtBQUs7QUFFcEIsU0FBTyxrQkFBa0IsRUFBRSxRQUFRO0FBQUE7QUFHcEMsb0JBQWlDO0FBaEVqQztBQWlFQyxRQUFNLGFBQWE7QUFDaEIsVUFBUSxJQUFJO0FBQ2YsU0FDQyxvQ0FBQyxPQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUFJLGFBQ0osb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNaLG9DQUFDLE9BQUQsTUFDQyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBaUIsYUFDaEMsb0NBQUMsU0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsY0FBYywrQ0FBWSxXQUFaLG1CQUFvQjtBQUFBLE9BR3BDLG9DQUFDLE9BQUQsTUFDQyxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBaUIsYUFDaEMsb0NBQUMsU0FBRDtBQUFBLElBQ0MsTUFBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsY0FBYywrQ0FBWSxXQUFaLG1CQUFvQjtBQUFBLE9BR3BDLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLE1BQUs7QUFBQSxLQUFTO0FBQUE7QUFLMUIsSUFBTyxtQkFBUTs7O0FLOUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUI7QUFDaEIsU0FDQyxvQ0FBQyxPQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUFJO0FBQUE7QUFJUCxJQUFPLGdCQUFROzs7QUNQZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTZCO0FBQzNCLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE1BQUQsTUFBSTtBQUFBO0FBS1YsSUFBTyxpQkFBUTs7O0FDUmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF1QjtBQUV2QixxQkFBa0M7QUFDakMsU0FDQyxvQ0FBQyxPQUFELE1BQ0Msb0NBQUMsTUFBRCxNQUFJLGNBQ0osb0NBQUMsUUFBRCxNQUNDLG9DQUFDLHNCQUFEO0FBQUE7QUFLSixJQUFPLGVBQVE7OztBQ1pmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTBEO0FBRTFELDRCQUFzQjs7O0FDRnRCO0FBQUEsb0JBQXFCO0FBTXJCLG9CQUFvQixFQUFFLFVBQXdDO0FBQzdELFNBQ08sb0NBQUMsVUFBRCxNQUNJLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFJO0FBQUEsS0FBUTtBQUFBO0FBSTlCLElBQU8scUJBQVE7OztBREpSLElBQU0sVUFBeUIsT0FBTyxFQUFFLGFBQThCO0FBQ3pFLE1BQUk7QUFDQSx1Q0FBVSxPQUFPLFFBQVE7QUFDekIsVUFBTSxPQUFPLE1BQU0sUUFBUSxPQUFPO0FBQ2xDLHVDQUFVLE1BQU0sbUJBQW1CLE9BQU87QUFFMUMsV0FBTyx3QkFBaUIsRUFBRTtBQUFBLFdBQ3RCLEtBQU47QUFDRSxVQUFNLElBQUksU0FBUyxrQkFBa0I7QUFBQSxNQUNqQyxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBS3BCLHVCQUFvQztBQUNoQyxRQUFNLEVBQUUsU0FBUztBQUVwQixTQUNPLG9DQUFDLE9BQUQsTUFDSSxvQ0FBQyxvQkFBRDtBQUFBLElBQVksUUFBTztBQUFBLE1BQ25CLG9DQUFDLE1BQUQsTUFBSyxLQUFLLE9BQ1Ysb0NBQUMsTUFBRCxNQUFJLGdCQUFhLEtBQUssYUFBWSxRQUNqQyxLQUFLLGNBQWMsb0NBQUMsTUFBRCxNQUNmLEtBQUssV0FBVyxJQUFJLENBQUMsUUFBUSxVQUFVLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLEtBQUs7QUFBQSxLQUFRO0FBQUE7QUFNbEUseUJBQXNDO0FBQ3pDLFFBQU0sU0FBUztBQUNmLFFBQU0sU0FBUztBQUVmLE1BQUksT0FBTyxXQUFXLEtBQUs7QUFDdkIsV0FDSSxvQ0FBQyxPQUFELE1BQ0ksb0NBQUMsTUFBRCxNQUFJLHNCQUFtQixPQUFPO0FBQUE7QUFJMUMsUUFBTSxJQUFJLE1BQU0sb0JBQW9CLE9BQU87QUFBQTtBQUcvQyxJQUFPLGlCQUFROzs7QUVwRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFpQztBQUNoQyxTQUNDLG9DQUFDLE9BQUQsTUFDQyxvQ0FBQyxNQUFELE1BQUk7QUFBQTtBQUlQLElBQU8sZ0JBQVE7OztBQ1BmO0FBQUEsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZUFBYyxFQUFDLE1BQUssZUFBYyxZQUFXLFFBQU8sUUFBTyxRQUFPLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLGtDQUFpQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx1QkFBc0IsRUFBQyxNQUFLLHVCQUFzQixZQUFXLGVBQWMsUUFBTyxXQUFVLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDBDQUF5QyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE1BQUssb0JBQW1CLFNBQU8scUJBQW9CLEVBQUMsTUFBSyxxQkFBb0IsWUFBVyxlQUFjLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyx3Q0FBdUMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8seUJBQXdCLEVBQUMsTUFBSyx5QkFBd0IsWUFBVyxRQUFPLFFBQU8sWUFBVyxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyw0Q0FBMkMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxzQkFBcUIsRUFBQyxNQUFLLHNCQUFxQixZQUFXLFFBQU8sUUFBTyxTQUFRLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLHlDQUF3QyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx5QkFBd0IsRUFBQyxNQUFLLHlCQUF3QixZQUFXLFFBQU8sUUFBTyxZQUFXLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLDRDQUEyQyxXQUFVLFFBQVUsYUFBWSxNQUFLLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsV0FBUSxPQUFNOzs7QWxCVzcyRSxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoseUJBQXlCO0FBQUEsSUFDckIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix5QkFBeUI7QUFBQSxJQUNyQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHNCQUFzQjtBQUFBLElBQ2xCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGVBQWU7QUFBQSxJQUNYLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosdUJBQXVCO0FBQUEsSUFDbkIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixxQkFBcUI7QUFBQSxJQUNqQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEckVkLElBQU0sTUFBTTtBQUVaLElBQUksSUFBSTtBQUdSLElBQUksUUFBUTtBQUdaLElBQUksSUFDRixVQUNBLHVCQUFRLE9BQU8sZ0JBQWdCLEVBQUUsV0FBVyxNQUFNLFFBQVE7QUFLNUQsSUFBSSxJQUFJLHVCQUFRLE9BQU8sVUFBVSxFQUFFLFFBQVE7QUFFM0MsSUFBSSxJQUFJLDJCQUFPO0FBRWYsSUFBSSxJQUNGLEtBQ0EsMENBQXFCO0FBQUEsRUFDbkIsT0FBTztBQUFBLEVBQ1AsTUFBTTtBQUFBO0FBSVYsSUFBTSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBRWpDLElBQUksT0FBTyxNQUFNLE1BQU07QUFDckIsVUFBUSxJQUFJLG9DQUFvQztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
