// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"awEvQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tableJs = require("./table.js");
var _tableJsDefault = parcelHelpers.interopDefault(_tableJs);
var _scoreboardJs = require("./scoreboard.js");
var _tetrisBlockJs = require("./tetris-block.js");
var _tetrisBlockJsDefault = parcelHelpers.interopDefault(_tetrisBlockJs);
"use strict";
let wait;
let prevTime;
let runID, waitID;
let started = false;
let curBlocks;
const body = document.querySelector("body");
const root = document.querySelector("#root");
const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");
root.append(box1);
root.append(box2);
root.append(box3);
box1.append((0, _scoreboardJs.scoreArea));
const gameBoard = new (0, _tableJsDefault.default)(10, 20);
box2.append(gameBoard.generateTable());
const slowDrop = function() {
    // console.log("slow");
    curBlocks.erase();
    const rBlocks = curBlocks.fall(curBlocks, gameBoard);
    if (rBlocks) curBlocks = rBlocks;
    curBlocks.colour();
    // timeoutID = setTimeout(() => {    
    //     globalID = requestAnimationFrame(slowDrop);
    // }, 500);
    return;
};
const fastDrop = function() {
    wait = 0;
};
const moveRight = function() {
    console.log("Mv Right");
    curBlocks.erase();
    curBlocks.mvRight(gameBoard.getMaxX);
    curBlocks.colour();
// mvRight += 10;
// blockGroup.style.right = `${mvRight}px`;
};
const moveLeft = function() {
    console.log("Mv Left");
    curBlocks.erase();
    curBlocks.mvLeft();
    curBlocks.colour();
// mvLeft += 10;
// blockGroup.style.right = `${mvLeft}px`;
};
// const rotateTBlock = function() {
//     console.log(`rotate! ${curBlocks.shape}`);
//     curBlocks.erase();
//     curBlocks.rotate();
//     curBlocks.colour();
// }
document.addEventListener("keydown", (e)=>{
    if (e.key === "ArrowDown") {
        console.log("fastDrop");
        fastDrop();
    }
    if (e.key === "ArrowRight") {
        console.log("Right");
        moveRight();
    }
    if (e.key === "ArrowLeft") {
        console.log("Left");
        moveLeft();
    }
// if (e.key === "ArrowUp") {
//     console.log("Up, rotate");
//     rotateTBlock();
// }
});
const checkWait = function(timestamp) {
    // if the fall is called right after the execution of the game (prevTime is falsy)
    // i.e. executes if just after falling one row
    if (!prevTime) prevTime = timestamp;
    let runtime = timestamp - prevTime;
    if (runtime >= wait) {
        slowDrop(); // fall a line if runtime of this round has exceeded the wait time (1 sec if slow, 0 if fast)
        runID = requestAnimationFrame(run);
    } else // continue waiting, and listening to events
    waitID = requestAnimationFrame(checkWait);
};
const run = function() {
    // after falling a line, reset prevTime and wait (in case it's changed by fast drop)
    wait = 1000;
    prevTime = null;
    console.log("in run");
    waitID = requestAnimationFrame(checkWait);
    (0, _scoreboardJs.timer)();
};
// press "Enter" to start game
document.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") // To prevent run being called multiple times
    {
        if (!started) {
            started = true;
            run();
        // startedID = requestAnimationFrame(run);
        }
    }
});
curBlocks = (0, _tetrisBlockJsDefault.default).newBlocks(curBlocks, gameBoard);
(0, _scoreboardJs.timer)(); // next comming up window
 // const commingUp = document.createElement("div");
 // commingUp.classList.add("comming-up");
 // commingUp.style.position = "fixed";
 // commingUp.style.top = "100px";
 // commingUp.style.left = `${document.documentElement.clientWidth - 100}px`;
 // commingUp.textContent = "block shape";
 // wrapper.append(commingUp);

},{"./table.js":"jCnTr","./scoreboard.js":"eYUU9","./tetris-block.js":"fu1JV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCnTr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class gameArea {
    constructor(maxX, maxY){
        this.maxX = maxX;
        this.maxY = maxY;
    }
    // getters
    get getMaxX() {
        return this.maxX;
    }
    get getMaxY() {
        return this.maxY;
    }
    // setters
    set setMaxX(x) {
        this.maxX = x;
    }
    set setMaxY(y) {
        this.maxY = y;
    }
    removeOneLine = function(score) {
        for(let j = 0; j < this.maxY; j++){
            const line = document.querySelectorAll(`.y-${j}`);
            let lineArr = [
                ...line
            ];
            console.log(lineArr);
            let wholeLine;
            // let wholeLine = true;
            wholeLine = lineArr.every((el)=>el.classList.contains("occupied"));
            console.log("wholeLine", wholeLine);
            if (wholeLine) {
                score += 100;
                line.forEach((el)=>el.remove());
            }
        // gameArea.addNewLine(); // not implemented yet
        }
        return score;
    };
    generateTable = function() {
        const gameTable = document.createElement("div");
        gameTable.classList.add("game-table");
        // create game table area
        // const maxY=20, maxX=10;
        for(let j = 0; j < this.maxY; j++)for(let i = 0; i < this.maxX; i++){
            const tablePixel = document.createElement("div");
            tablePixel.classList.add("table-pixel");
            tablePixel.classList.add(`x-${i}`);
            tablePixel.classList.add(`y-${j}`);
            // const pixelVal = document.createElement("input");
            // pixelVal.value = 0; // 0 means free, 1 means occupied
            // pixelVal.style.display = "none";
            // tablePixel.append(pixelVal);
            gameTable.append(tablePixel);
        }
        for(let k = 0; k < this.maxX; k++){
            const tablePixel = document.createElement("div");
            tablePixel.classList.add("table-pixel");
            tablePixel.classList.add(`x-${k}`);
            tablePixel.classList.add(`y-20`);
            tablePixel.classList.add("occupied");
            gameTable.append(tablePixel);
        }
        return gameTable;
    };
}
exports.default = gameArea;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eYUU9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scoreArea", ()=>scoreArea);
parcelHelpers.export(exports, "timer", ()=>timer);
parcelHelpers.export(exports, "nextRound", ()=>nextRound);
"use strict";
let round = 0;
let score = 0;
let gameStartTime = Date.now();
const scoreArea = document.createElement("div");
scoreArea.classList.add("score-area");
scoreArea.textContent = `round: ${round}`;
const timer = function() {
    const playTime = Date.now() - gameStartTime;
    const min = Math.floor(playTime / 60 / 1000 % 60).toString().padStart(2, "0");
    const sec = Math.floor(playTime / 1000 % 60).toString().padStart(2, "0");
    scoreArea.textContent = `Score: ${score}, Round: ${round}, Time: ${min}:${sec}`;
};
const nextRound = function(gameBoard) {
    // if 4 lines, remove it, add score
    // if a line, remove it, add score
    console.log(gameBoard);
    score = gameBoard.removeOneLine(score);
    round++;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fu1JV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scoreboardJs = require("./scoreboard.js");
"use strict";
class tetrisBlock {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape, locked){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;
        this.blockColour = blockColour;
        this.shape = shape;
        this.locked = locked;
    // this.canMove = canMove;
    }
    // get getBlock1() {return {x: _x1, y: _y1};}
    // get getBlock2() {return {x: _x2, y: _y2};}
    // get getBlock3() {return {x: _x3, y: _y3};}
    // get getBlock4() {return {x: _x4, y: _y4};}
    // get getShape() {return _shape;}
    // set setBlock1({x, y}) {
    //   this._x1 = x;
    //   this._y1 = y;
    // }
    // set setBlock2({x, y}) {
    //   this._x2 = x;
    //   this._y2 = y;
    // }
    // set setBlock3({x, y}) {
    //   this._x3 = x;
    //   this._y3 = y;
    // }
    // set setBlock4({x, y}) {
    //   this._x4 = x;
    //   this._y4 = y;
    // }
    // set setCanMove(able) {
    //   this._canMove = able;
    // }
    // slowFall
    fall(curBlocks, gameBoard) {
        // console.log(this);
        let block1 = document.querySelector(`.x-${this.x1}.y-${this.y1}`);
        let block2 = document.querySelector(`.x-${this.x2}.y-${this.y2}`);
        let block3 = document.querySelector(`.x-${this.x3}.y-${this.y3}`);
        let block4 = document.querySelector(`.x-${this.x4}.y-${this.y4}`);
        let blockArr = [
            block1,
            block2,
            block3,
            block4
        ];
        let nextBlock1 = document.querySelector(`.x-${this.x1}.y-${this.y1 + 1}`);
        let nextBlock2 = document.querySelector(`.x-${this.x2}.y-${this.y2 + 1}`);
        let nextBlock3 = document.querySelector(`.x-${this.x3}.y-${this.y3 + 1}`);
        let nextBlock4 = document.querySelector(`.x-${this.x4}.y-${this.y4 + 1}`);
        let nextBlockArr = [
            nextBlock1,
            nextBlock2,
            nextBlock3,
            nextBlock4
        ];
        let collide = false;
        // if (blockArr.some(el => el.classList.contains("occupied"))) {
        //   blockArr.forEach(blk => blk.classList.add("occupied"));
        //   collide = true;
        // }
        // console.log(blockArr.some((el) => el.classList.contains("occupied")))
        // collide = blockArr.some((el) => el.classList.contains("occupied"));
        collide = nextBlockArr.some((el)=>{
            //   // const bStyles = window.getComputedStyle(el);
            //   // const bBGColour = bStyles.getPropertyValue("background-color");
            //   // console.log(bBGColour);
            //   // if (bBGColour !== "rgb(189, 176, 176)") {
            //   //   console.log("another block reached");
            //   //   return true;
            //   // }
            //   // console.log("collided");
            //   // if (this.y1 !== 0 || this.y2 !== 0 || this.y3 !== 0 || this.y4 !== 0 || this.y1 !== 1 || this.y2 !== 1 || this.y3 !== 1 || this.y4 !== 1 ) {
            return el.classList.contains("occupied");
        //   // }
        });
        console.log("collided", collide);
        // lock the blocks
        if (this.y1 >= gameBoard.getMaxY - 1 || this.y2 >= gameBoard.getMaxY - 1 || this.y3 >= gameBoard.getMaxY - 1 || this.y4 >= gameBoard.getMaxY - 1 || collide) {
            // console.log("can't move");
            this.locked = true;
            for (const el of blockArr){
                el.classList.add("occupied");
                el.style.background = this.blockColour;
            }
            // console.log(this.locked);
            const returnBlocks = tetrisBlock.newBlocks(curBlocks, gameBoard);
            return returnBlocks;
        }
        // move the blocks down by 1
        this.y1 += 1;
        this.y2 += 1;
        this.y3 += 1;
        this.y4 += 1;
        // remove the prev occupied class after moving out the pixel
        blockArr.forEach(function(el) {
            el.classList.remove("occupied");
        });
        return;
    }
    // check if there is a wall next to it
    mvRight(maxX) {
        if (this.x1 === maxX - 1 || this.x2 === maxX - 1 || this.x3 === maxX - 1 || this.x4 === maxX - 1) return;
        // check if there is another block
        let nextBlock1 = document.querySelector(`.x-${this.x1 + 1}.y-${this.y1}`);
        let nextBlock2 = document.querySelector(`.x-${this.x2 + 1}.y-${this.y2}`);
        let nextBlock3 = document.querySelector(`.x-${this.x3 + 1}.y-${this.y3}`);
        let nextBlock4 = document.querySelector(`.x-${this.x4 + 1}.y-${this.y4}`);
        let nextBlockArr = [
            nextBlock1,
            nextBlock2,
            nextBlock3,
            nextBlock4
        ];
        if (nextBlockArr.some((el)=>el.classList.contains("occupied"))) return;
        // move right
        console.log(this);
        this.x1 += 1;
        this.x2 += 1;
        this.x3 += 1;
        this.x4 += 1;
    }
    mvLeft() {
        // check if there is a wall next to it
        if (this.x1 === 0 || this.x2 === 0 || this.x3 === 0 || this.x4 === 0) return;
        // check if there is another block
        let nextBlock1 = document.querySelector(`.x-${this.x1 - 1}.y-${this.y1}`);
        let nextBlock2 = document.querySelector(`.x-${this.x2 - 1}.y-${this.y2}`);
        let nextBlock3 = document.querySelector(`.x-${this.x3 - 1}.y-${this.y3}`);
        let nextBlock4 = document.querySelector(`.x-${this.x3 - 1}.y-${this.y3}`);
        let nextBlockArr = [
            nextBlock1,
            nextBlock2,
            nextBlock3,
            nextBlock4
        ];
        if (nextBlockArr.some((el)=>el.classList.contains("occupied"))) return;
        // move left
        this.x1 -= 1;
        this.x2 -= 1;
        this.x3 -= 1;
        this.x4 -= 1;
    }
    // rotate
    rotate() {
    // switch(this.shape) {
    //   case "rect":
    //     console.log(this.shape);
    //     // just making it vertical...
    //     this.x2 = this.x1;
    //     this.x3 = this.x1;
    //     this.x4 = this.x1
    //     this.y2 = this.y1+1;
    //     this.y3 = this.y1+2;
    //     this.y4 = this.y1+3;
    // }
    }
    erase() {
        let block1 = document.querySelector(`.x-${this.x1}.y-${this.y1}`);
        let block2 = document.querySelector(`.x-${this.x2}.y-${this.y2}`);
        let block3 = document.querySelector(`.x-${this.x3}.y-${this.y3}`);
        let block4 = document.querySelector(`.x-${this.x4}.y-${this.y4}`);
        block1.style.background = "var(--grey)";
        block2.style.background = "var(--grey)";
        block3.style.background = "var(--grey)";
        block4.style.background = "var(--grey)";
    }
    // colour
    colour() {
        // if (!this.locked) {
        // }
        console.log(this.x1, this.y1);
        console.log(this.x2, this.y2);
        console.log(this.x3, this.y3);
        console.log(this.x4, this.y4);
        console.log(document.querySelector(`.x-${this.x1}.y-${this.y1}`));
        let block1 = document.querySelector(`.x-${this.x1}.y-${this.y1}`);
        let block2 = document.querySelector(`.x-${this.x2}.y-${this.y2}`);
        let block3 = document.querySelector(`.x-${this.x3}.y-${this.y3}`);
        let block4 = document.querySelector(`.x-${this.x4}.y-${this.y4}`);
        // console.log(block1);
        block1.style.background = this.blockColour;
        block2.style.background = this.blockColour;
        block3.style.background = this.blockColour;
        block4.style.background = this.blockColour;
    }
    // generate
    static generateTBlock(gameBoard) {
        (0, _scoreboardJs.nextRound)(gameBoard);
        console.log("maxX", gameBoard.getMaxX);
        let x1, y1, x2, y2, x3, y3, x4, y4, blockColour, shape, locked;
        const rand = Math.floor(Math.random() * 2);
        // const rand = 1;
        // const rand = 0;
        console.log(`generate new ${rand}`);
        switch(rand){
            case 0:
                x1 = gameBoard.getMaxX / 2 - 2;
                y1 = 0;
                x2 = gameBoard.getMaxX / 2 - 1;
                y2 = 0;
                x3 = gameBoard.getMaxX / 2;
                y3 = 0;
                x4 = gameBoard.getMaxX / 2 + 1;
                y4 = 0;
                blockColour = "skyblue";
                shape = "rect";
                locked = false;
                break;
            case 1:
                x1 = gameBoard.getMaxX / 2 - 1;
                y1 = 0;
                x2 = gameBoard.getMaxX / 2;
                y2 = 0;
                x3 = gameBoard.getMaxX / 2 - 1;
                y3 = 1;
                x4 = gameBoard.getMaxX / 2;
                y4 = 1;
                blockColour = "yellow";
                shape = "sq";
                locked = false;
                break;
        }
        console.log(x1, y1);
        console.log(x2, y2);
        console.log(x3, y3);
        console.log(x4, y4);
        return [
            x1,
            y1,
            x2,
            y2,
            x3,
            y3,
            x4,
            y4,
            blockColour,
            shape,
            locked
        ];
    }
    static newBlocks(curBlocks, gameBoard) {
        // generate
        console.log("game maxX", gameBoard.getMaxX);
        curBlocks = new tetrisBlock(...tetrisBlock.generateTBlock(gameBoard));
        console.log("shape", `${curBlocks.shape}`);
        console.log("locked?", `${curBlocks.locked}`);
        // console.log(`blocks created`);
        curBlocks.colour();
        // console.log(`blocks coloured`);
        return curBlocks;
    }
}
exports.default = tetrisBlock; // tetrisBlock.prototype.slowDrop = function() {
 // };
 // tetrisBlock.prototype.rotate 
 // tetrisBlock.prototype.moveRight
 // tetrisBlock.prototype.moveLeft
 // tetrisBlock.prototype.fastDrop
 // fastFall
 // fastFall(maxY) {
 //   console.log(this);
 //   wait = 1000;
 //   if (this.y1 >= maxY-1 || this.y2 >= maxY-1 || this.y3 >= maxY-1 || this.y4 >= maxY-1) {
 //     console.log("bottom reached");
 //     this.canMove = false;
 //     return;
 //   }
 //   // const bStyles = window.getComputedStyle(this);
 //   // const bBGColour = bStyles.getPropertyValue("background");
 //   // if (bBGColour !== "var(--grey)") {
 //     // console.log("another block reached");
 //   // }
 //   // console.log(this.y1);
 //   this.y1 += 1;
 //   this.y2 += 1;
 //   this.y3 += 1;
 //   this.y4 += 1;
 // }

},{"./scoreboard.js":"eYUU9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequiree635")

//# sourceMappingURL=index.3d214d75.js.map
