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
  console.log(clan);
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
var assets_manifest_default = { "version": "2574f829", "entry": { "module": "/build/entry.client-QYVFWFEV.js", "imports": ["/build/_shared/chunk-R5L3KRJF.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ZF3FXZMH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clan": { "id": "routes/clan", "parentId": "root", "path": "clan", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clan-4XVPAXVP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clan/$clanId": { "id": "routes/clan/$clanId", "parentId": "routes/clan", "path": ":clanId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/clan/$clanId-3EJK46AP.js", "imports": ["/build/_shared/chunk-ZS4K5UNC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/clan/index": { "id": "routes/clan/index", "parentId": "routes/clan", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/clan/index-LXB72FVX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/clanlist/index": { "id": "routes/clanlist/index", "parentId": "root", "path": "clanlist", "index": true, "caseSensitive": void 0, "module": "/build/routes/clanlist/index-JKO3I6UX.js", "imports": ["/build/_shared/chunk-ZS4K5UNC.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-I3Y3P4WV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/register/index": { "id": "routes/register/index", "parentId": "root", "path": "register", "index": true, "caseSensitive": void 0, "module": "/build/routes/register/index-RACTXLC6.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-2574F829.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm9vdC50c3giLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW5saXN0L2luZGV4LnRzeCIsICIuLi9hcHAvc2VydmVyL3NlcnZpY2VzL2NsYW4tc2VydmljZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9tb2RlbHMvY2xhbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9zZXJ2aWNlcy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL3JlZ2lzdGVyL2luZGV4LnRzeCIsICIuLi9hcHAvc2VydmVyL3NlcnZpY2VzL3VzZXItc2VydmljZS5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9tb2RlbHMvdXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL3NlcnZlci9taWRkbGV3YXJlL3Bhc3N3b3JkUmVzb2x2ZXIuc2VydmVyLnRzIiwgIi4uL2FwcC9zZXJ2ZXIvbWlkZGxld2FyZS9jcmVhdGVTZXNzaW9uLnNlcnZlci50cyIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlOi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuLnRzeCIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbi8kY2xhbklkLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CYWNrQnV0dG9uLnRzeCIsICJyb3V0ZTovVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvY2xhbi9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tIFwiY29tcHJlc3Npb25cIjtcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gIFwiL2J1aWxkXCIsXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcblxuYXBwLnVzZShtb3JnYW4oXCJ0aW55XCIpKTtcblxuYXBwLmFsbChcbiAgXCIqXCIsXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXG4gICAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG4gIH0pXG4pO1xuXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW5saXN0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvcmljaGFyZGt3b24vRG9jdW1lbnRzL0NvZGluZy9QcmlDbGFuL2FwcC9yb3V0ZXMvcmVnaXN0ZXIvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3JpY2hhcmRrd29uL0RvY3VtZW50cy9Db2RpbmcvUHJpQ2xhbi9hcHAvcm91dGVzL2NsYW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuLyRjbGFuSWQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9Vc2Vycy9yaWNoYXJka3dvbi9Eb2N1bWVudHMvQ29kaW5nL1ByaUNsYW4vYXBwL3JvdXRlcy9jbGFuL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhbmxpc3QvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsYW5saXN0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNsYW5saXN0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvcmVnaXN0ZXIvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3JlZ2lzdGVyL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJlZ2lzdGVyXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xhblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjbGFuXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9jbGFuLyRjbGFuSWRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NsYW4vJGNsYW5JZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsYW5cIixcbiAgICAgIHBhdGg6IFwiOmNsYW5JZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2xhbi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2xhbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2NsYW5cIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0Q2xhbnMgfSBmcm9tIFwifi9zZXJ2ZXIvc2VydmljZXMvY2xhbi1zZXJ2aWNlLnNlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBDbGFuIH0gZnJvbSBcIn4vc2VydmVyL21vZGVscy9jbGFuLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGNsYW5zOiBBcnJheTxDbGFuPiB9O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuXHRjb25zdCBjbGFuczogTG9hZGVyRGF0YSA9IHtcblx0XHRjbGFuczogYXdhaXQgZ2V0Q2xhbnMoKSxcblx0fTtcblx0cmV0dXJuIGpzb248TG9hZGVyRGF0YT4oY2xhbnMpO1xufTtcblxuZnVuY3Rpb24gQ2xhbkhvbWUoKTogSlNYLkVsZW1lbnQge1xuXHRjb25zdCB7IGNsYW5zIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5DbGFuIFBhZ2U8L2gxPlxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7Y2xhbnMubWFwKChjbGFuKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGNsYW5JZCA9IGNsYW4uX2lkID8gY2xhbi5faWQudG9TdHJpbmcoKSA6IG51bGw7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxsaSBrZXk9e2NsYW5JZH0+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIHRvPXtgL2NsYW4vJHtjbGFuSWR9YH0+e2NsYW4ubmFtZX08L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENsYW5Ib21lO1xuIiwgImltcG9ydCB7IENsYW5Nb2RlbCB9IGZyb20gJy4uL21vZGVscy9jbGFuLnNlcnZlcidcbmltcG9ydCB0eXBlIHsgQ2xhbiB9IGZyb20gJy4uL21vZGVscy9jbGFuLnNlcnZlcidcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2xhbnMoKSB7XG4gICAgY29uc3QgY2xhbnMgPSBhd2FpdCBDbGFuTW9kZWwuZmluZCgpXG4gICAgcmV0dXJuIGNsYW5zXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENsYW4oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGNsYW4gPSBhd2FpdCBDbGFuTW9kZWwuZmluZEJ5SWQoaWQpXG4gICAgY29uc29sZS5sb2coY2xhbilcbiAgICByZXR1cm4gY2xhblxufVxuXG5leHBvcnQgeyBnZXRDbGFuLCBnZXRDbGFucyB9XG4iLCAiaW1wb3J0IHsgbW9uZ29vc2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGIuc2VydmVyXCI7XG5cbnR5cGUgQ2xhbiA9IHtcblx0X2lkPzogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWRcblx0bmFtZTogc3RyaW5nO1xuXHRtZW1iZXJMaXN0OiBbbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWRdO1xuXHRtZW1iZXJDb3VudDogbnVtYmVyO1xufTtcblxuY29uc3QgY2xhblNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuXHRuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcblx0bWVtYmVyTGlzdDogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJ31dLFxuXHRtZW1iZXJDb3VudDogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG59KTtcblxuY29uc3QgQ2xhbk1vZGVsID0gbW9uZ29vc2UubW9kZWw8Q2xhbj4oXCJDbGFuXCIsIGNsYW5TY2hlbWEpO1xuXG5leHBvcnQgeyBDbGFuTW9kZWwgfTtcbmV4cG9ydCB0eXBlIHsgQ2xhbiB9O1xuIiwgImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcblxubGV0IGRiOiBhbnk7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICB2YXIgX19kYjogYW55XG59XG5cbmNvbm5lY3QoKTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpOiBQcm9taXNlPG9iamVjdD4ge1xuXHRpZiAoZGIpIHJldHVybiBkYjtcblxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0ZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KGAke3Byb2Nlc3MuZW52Lk1PTkdPREJfVVJMfWApO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGluIGRldmVsb3BtZW50LCBuZWVkIHRvIHN0b3JlIHRoZSBkYiBjb25uZWN0aW9uIGluIGEgZ2xvYmFsIHZhcmlhYmxlXG5cdFx0Ly8gdGhpcyBpcyBiZWNhdXNlIHRoZSBkZXYgc2VydmVyIHB1cmdlcyB0aGUgcmVxdWlyZSBjYWNoZSBvbiBldmVyeSByZXF1ZXN0XG5cdFx0Ly8gYW5kIHdpbGwgY2F1c2UgbXVsdGlwbGUgY29ubmVjdGlvbnMgdG8gYmUgbWFkZVxuXHRcdGlmICghZ2xvYmFsLl9fZGIpIHtcblx0XHRcdGdsb2JhbC5fX2RiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChgJHtwcm9jZXNzLmVudi5NT05HT0RCX1VSTH1gKTtcblx0XHR9XG5cdFx0ZGIgPSBnbG9iYWwuX19kYjtcblx0fVxuXG5cdHJldHVybiBkYjtcbn1cblxuZXhwb3J0IHsgbW9uZ29vc2UsIGNvbm5lY3QgfTtcbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VBY3Rpb25EYXRhLCBqc29uLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyIH0gZnJvbSBcIn4vc2VydmVyL3NlcnZpY2VzL3VzZXItc2VydmljZS5zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uIH0gZnJvbSBcIn4vc2VydmVyL21pZGRsZXdhcmUvY3JlYXRlU2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogdW5rbm93bik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdGlmICh0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHwgdXNlcm5hbWUubGVuZ3RoIDwgMykge1xuXHRcdHJldHVybiBcIlVzZXJuYW1lIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmdcIjtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0aWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA4KSB7XG5cdFx0cmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZ1wiO1xuXHR9XG59XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcblx0Zm9ybUVycm9yPzogc3RyaW5nO1xuXHRmaWVsZEVycm9ycz86IHtcblx0XHR1c2VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdH07XG5cdGZpZWxkcz86IHtcblx0XHR1c2VybmFtZTogc3RyaW5nO1xuXHRcdHBhc3N3b3JkOiBzdHJpbmc7XG5cdH07XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpOiBvYmplY3QgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG5cdGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cdGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoXCJ1c2VybmFtZVwiKTtcblx0Y29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuXHRjb25zdCByZWRpcmVjdFRvID0gXCIvXCI7XG5cblx0aWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gYmFkUmVxdWVzdCh7XG5cdFx0XHRmb3JtRXJyb3I6IFwiRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseVwiLFxuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgZmllbGRzID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfTtcblx0Y29uc3QgZmllbGRFcnJvcnMgPSB7XG5cdFx0dXNlcm5hbWU6IHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpLFxuXHRcdHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKSxcblx0fTtcblx0aWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG5cdFx0cmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuXG5cdGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuXHRjb25zb2xlLmxvZyh7IHVzZXIgfSk7XG5cdGlmICghdXNlcikge1xuXHRcdHJldHVybiBiYWRSZXF1ZXN0KHtcblx0XHRcdGZpZWxkcyxcblx0XHRcdGZvcm1FcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZyB0cnlpbmcgdG8gY3JlYXRlIGEgbmV3IHVzZXJcIixcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgcmVkaXJlY3RUbylcbn07XG5cbmZ1bmN0aW9uIFJlZ2lzdGVyKCk6IEpTWC5FbGVtZW50IHtcblx0Y29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGE8QWN0aW9uRGF0YT4oKTtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb25EYXRhKVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+UmVnaXN0ZXI8L2gxPlxuXHRcdFx0PEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWUtaW5wdXRcIj5Vc2VybmFtZTwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cInVzZXJuYW1lLWlucHV0XCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXNlcm5hbWV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZC1pbnB1dFwiPlBhc3N3b3JkPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRpZD1cInBhc3N3b3JkLWlucHV0XCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRcdFx0PC9Gb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCAiaW1wb3J0IHsgVXNlciwgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLnNlcnZlclwiO1xuaW1wb3J0IHsgaGFzaGVkUGFzc3dvcmQgfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9wYXNzd29yZFJlc29sdmVyLnNlcnZlclwiO1xuXG50eXBlIFVzZXJBdXRoID0ge1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHRwYXNzd29yZDogc3RyaW5nO1xufTtcblxudHlwZSBDcmVhdGVVc2VyID0ge1xuXHRpZDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IFVzZXJBdXRoKTogUHJvbWlzZTxDcmVhdGVVc2VyPiB7XG5cdGNvbnN0IHJlZ2lzdGVyVXNlciA9IGF3YWl0IFVzZXJNb2RlbC5jcmVhdGUoe1xuXHRcdHVzZXJuYW1lLFxuXHRcdHBhc3N3b3JkSGFzaDogYXdhaXQgaGFzaGVkUGFzc3dvcmQocGFzc3dvcmQpLFxuXHRcdGNyZWF0ZWRBdDogRGF0ZS5ub3coKSxcblx0XHR1cGRhdGVkQXQ6IERhdGUubm93KCksXG5cdH0pO1xuXG5cdGNvbnNvbGUubG9nKHR5cGVvZih7IGlkOiByZWdpc3RlclVzZXIuaWQsIHVzZXJuYW1lIH0pKVxuXHRyZXR1cm4geyBpZDogcmVnaXN0ZXJVc2VyLmlkLCB1c2VybmFtZSB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVVc2VyIH07XG4iLCAiaW1wb3J0IHsgbW9uZ29vc2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGIuc2VydmVyXCI7XG5cbnR5cGUgVXNlciA9IHtcblx0dXNlcm5hbWU6IHN0cmluZztcblx0cGFzc3dvcmRIYXNoOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdDogRGF0ZTtcblx0dXBkYXRlZEF0OiBEYXRlO1xufTtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuXHR1c2VybmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdHBhc3N3b3JkSGFzaDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG5cdGNyZWF0ZWRBdDogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogZmFsc2UgfSxcblx0dXBkYXRlZEF0OiB7IHR5cGU6IERhdGUsIHJlcXVpcmVkOiBmYWxzZSB9LFxufSk7XG5cbmNvbnN0IFVzZXJNb2RlbCA9IG1vbmdvb3NlLm1vZGVsPFVzZXI+KFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IHsgVXNlck1vZGVsIH07XG5leHBvcnQgdHlwZSB7IFVzZXIgfTtcbiIsICJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBoYXNoZWRQYXNzd29yZChwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0Y29uc3Qgc2FsdFJvdW5kcyA9IDEwO1xuXHRjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdFJvdW5kcyk7XG5cblx0cmV0dXJuIHBhc3N3b3JkSGFzaDtcbn1cblxuZXhwb3J0IHsgaGFzaGVkUGFzc3dvcmQgfVxuIiwgImltcG9ydCB7XG4gICAgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsXG4gICAgcmVkaXJlY3Rcbn0gZnJvbSBcInJlbWl4XCJcblxuY29uc3Qgc2Vzc2lvblNlY3JldCA9IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUXG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKVxufVxuXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICAgIGNvb2tpZToge1xuICAgICAgICBuYW1lOiBcIlByaWNvbm5lX3Nlc3Npb25cIixcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgIHNlY3JldHM6IFtzZXNzaW9uU2VjcmV0XSxcbiAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICB9LFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHJlZGlyZWN0VG86IHN0cmluZ1xuKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKClcbiAgICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpO1xuICAgIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbilcbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCAiZnVuY3Rpb24gSG9tZSgpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIFByaUNsYW48L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmZ1bmN0aW9uIENsYW5Sb3V0ZSgpOiBKU1guRWxlbWVudCB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5DbGFuIFBhZ2U8L2gxPlxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxPdXRsZXQgLz5cblx0XHRcdDwvbWFpbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENsYW5Sb3V0ZTtcbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhLCB1c2VDYXRjaCwgdXNlUGFyYW1zLCBqc29uICB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIlxuaW1wb3J0IHsgZ2V0Q2xhbiB9IGZyb20gXCJ+L3NlcnZlci9zZXJ2aWNlcy9jbGFuLXNlcnZpY2Uuc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IENsYW4gfSBmcm9tIFwifi9zZXJ2ZXIvbW9kZWxzL2NsYW4uc2VydmVyXCJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvQmFja0J1dHRvblwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7IGNsYW46IENsYW4gfTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW52YXJpYW50KHBhcmFtcy5jbGFuSWQsICdwYXJhbXMuY2xhbklkIGlzIHJlcXVpcmVkJylcbiAgICAgICAgY29uc3QgY2xhbiA9IGF3YWl0IGdldENsYW4ocGFyYW1zLmNsYW5JZClcbiAgICAgICAgaW52YXJpYW50KGNsYW4sIGBDbGFuIG5vdCBmb3VuZDogJHtwYXJhbXMuY2xhbklkfWApXG5cbiAgICAgICAgcmV0dXJuIGpzb248TG9hZGVyRGF0YT4oeyBjbGFuIH0pO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBSZXNwb25zZShcIkNsYW4gTm90IEZvdW5kXCIsIHtcbiAgICAgICAgICAgIHN0YXR1czogNDA0XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZnVuY3Rpb24gQ2xhblByb2ZpbGUoKTogSlNYLkVsZW1lbnQge1xuICAgIGNvbnN0IHsgY2xhbiB9ID0gdXNlTG9hZGVyRGF0YSgpIGFzIExvYWRlckRhdGFcblxuXHRyZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJhY2tCdXR0b24gYmFja1RvPScvY2xhbmxpc3QnIC8+XG4gICAgICAgICAgICA8aDE+e2NsYW4ubmFtZX08L2gxPlxuICAgICAgICAgICAgPGgyPk1lbWJlciBMaXN0IHtjbGFuLm1lbWJlckNvdW50fS8zMDwvaDI+XG4gICAgICAgICAgICB7Y2xhbi5tZW1iZXJMaXN0ICYmIDx1bD5cbiAgICAgICAgICAgICAgICB7Y2xhbi5tZW1iZXJMaXN0Lm1hcCgobWVtYmVyLCBpbmRleCkgPT4gPGxpIGtleT17aW5kZXh9PnttZW1iZXJ9PC9saT4pfVxuICAgICAgICAgICAgPC91bD59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCk6IEpTWC5FbGVtZW50IHtcbiAgICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpXG4gICAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKClcblxuICAgIGlmIChjYXVnaHQuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkNsYW4gbm90IGZvdW5kIGF0IHtwYXJhbXMuY2xhbklkfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBlcnJvcjogJHtjYXVnaHQuc3RhdHVzfWApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsYW5Qcm9maWxlO1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxudHlwZSBCYWNrQnV0dG9uUHJvcHMgPSB7XG4gICAgYmFja1RvOiBzdHJpbmdcbn0gXG5cbmZ1bmN0aW9uIEJhY2tCdXR0b24oeyBiYWNrVG8gfTogQmFja0J1dHRvblByb3BzKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPExpbmsgdG89e2JhY2tUb30+QmFjazwvTGluaz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEJhY2tCdXR0b247XG4iLCAiZnVuY3Rpb24gQ2xhbkhvbWUoKTogSlNYLkVsZW1lbnQge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aDE+Q2xhbiBIb21lPC9oMT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IENsYW5Ib21lO1xuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzI1NzRmODI5JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1RWVZGV0ZFVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUjVMM0tSSkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtWkYzRlhaTUguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jbGFuJzp7J2lkJzoncm91dGVzL2NsYW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2xhbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGFuLTRYVlBBWFZQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2xhbi8kY2xhbklkJzp7J2lkJzoncm91dGVzL2NsYW4vJGNsYW5JZCcsJ3BhcmVudElkJzoncm91dGVzL2NsYW4nLCdwYXRoJzonOmNsYW5JZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGFuLyRjbGFuSWQtM0VKSzQ2QVAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpTNEs1VU5DLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2xhbi9pbmRleCc6eydpZCc6J3JvdXRlcy9jbGFuL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvY2xhbicsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jbGFuL2luZGV4LUxYQjcyRlZYLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2xhbmxpc3QvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY2xhbmxpc3QvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2xhbmxpc3QnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NsYW5saXN0L2luZGV4LUpLTzNJNlVYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aUzRLNVVOQy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1JM1kzUDRXVi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3JlZ2lzdGVyL2luZGV4Jzp7J2lkJzoncm91dGVzL3JlZ2lzdGVyL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3JlZ2lzdGVyJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9yZWdpc3Rlci9pbmRleC1SQUNUWExDNi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTI1NzRGODI5LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFDQTtBQURBO0FBQUE7QUFDQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFT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
