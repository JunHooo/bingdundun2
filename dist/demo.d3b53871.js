// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"demo.js":[function(require,module,exports) {
var string2 = "\n.big{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height:100%;\n    width:100%;\n}\n.all{\n\n    width: 60vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n}\n.out{\n    border: 0.5vw solid black;\n    height: 38vw;\n    width: 35vw;\n    display: flex;\n    justify-content: center;\n    margin-top: 2vw;\n    border-radius: 50% 50% 45% 45%;\n    background-color: white;\n    flex-wrap: wrap;\n}\n.head{\n    border-radius: 50% 50% 35% 35%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.head.one{\n    height: 24vw;\n    width: 30vw;\n    margin-top: 2vw;\n    background-color: #48d748;\n}\n.head.two{\n    height: 23vw;\n    width: 29vw;\n    background-color: yellow;\n}\n.head.three{\n    height: 22vw;\n    width: 28vw;\n    background-color: rgb(92,118,195);\n}\n.head.four{\n    height: 21vw;\n    width: 27vw;\n    background-color: #d54a4a;\n}\n.head.five{\n    height: 20vw;\n    width: 26vw;\n    background-color: #37aaad;\n}\n.head.six{\n    height: 19vw;\n    width: 25vw;\n    background-color: white;\n    position: relative;\n}\n.lefteye1{\n    height: 9vw;\n    width: 7vw;\n    border-radius: 50%  50%  50%  50%  / 55%   55%   52%  52%;\n    transform: rotate(55deg);\n    margin-top: -3vw;\n    background-color: black;\n    position: relative;\n}\n.righteye1{\n    height: 9vw;\n    width: 7vw;\n    border-radius: 50%  50%  50%  50%  / 55%   55%   49%  49%;\n    transform: rotate(-55deg);\n    margin-left: 7vw;\n    margin-top: -3vw;\n    background-color: black;\n    position: relative;\n}\n.lefteye2{\n    height: 4vw;\n    width: 4vw;\n    border-radius: 50%;\n    background-color: white;\n    top:18%;\n    left: 25%;\n    position: absolute;\n}\n.righteye2{\n    height: 4vw;\n    width: 4vw;\n    border-radius: 50%;\n    background-color: white;\n    top:18%;\n    left: 15%;\n    position: absolute;\n\n}\n.lefteye3{\n    position: relative;\n    background-color: black;\n    height: 3.5vw;\n    width: 3.5vw;\n    border-radius: 50%;\n    top:50%;\n    margin-top:-1.75vw;\n    left: 50%;\n    margin-left: -1.75vw;\n}\n.righteye3{\n    position: relative;\n    background-color: black;\n    height: 3.5vw;\n    width: 3.5vw;\n    border-radius: 50%;\n    top:50%;\n    margin-top:-1.75vw;\n    left: 50%;\n    margin-left: -1.75vw;\n}\n.lefteye4{\n    position: absolute;\n    background-color: white;\n    width: 1vw;\n    height: 1vw;\n    border-radius: 50%;\n    left: 40%;\n}\n.righteye4{\n    position: absolute;\n    background-color: white;\n    width: 1vw;\n    height: 1vw;\n    border-radius: 50%;\n    left: 40%;\n}\n#face{\n    position: absolute;\n    border:none;\n    width: 10vw;\n    height: 10vw;\n    top:18vw;\n    z-index=-1;\n}\n.nose{\n    position: relative;\n    border-radius: 50%;\n    background-color: black;\n    left: 3.5vw;\n    height: 2vw;\n    width: 3vw;\n    z-index: 10;\n}\n/*.monthtop{*/\n/*    position: absolute;*/\n/*    border-radius: 50%;*/\n/*    box-shadow: 0px 4px 0px 0px red;*/\n/*    width: 10vh;*/\n/*    height: 10vh;*/\n/*    top:40%;*/\n/*}*/\n.monthtop{\n    position: absolute;\n    border-radius: 50%  50%  50%  50%  / 40%   40%   49%  49%;\n    background-color: black;\n    height: 5vw;\n    width: 6vw;\n    left: 2vw;\n    top:-1vw;\n}\n.monthdown{\n    position: absolute;\n    border-radius: 50%  50%  50%  50%  / 45%   45%   49%  49%;\n    background-color: white;\n    height: 5vw;\n    width: 7vw;\n    left: 1.5vw;\n    top:-2vw;\n}\n.tongue{\n    position: absolute;\n    background-color: #e34b65;\n    width: 1vw;\n    height: 0.5vw;\n    border-radius: 0.5vw 0.5vw 0 0;\n    top:3.4vw;\n    left: 4.5vw;\n}\n// .mark{\n//     height:7vw ;\n//     width: 7vw;\n//     display: flex;\n//     justify-content: center;\n//     align-items: center;\n// }\n// img{\n//     max-height: 5vw;\n//     max-width: 7vw;\n// }\n.leftear{\n    position: absolute;\n    width: 10vw;\n    height: 10vw;\n    margin-left: -22vw;\n    margin-top: 3vw;\n    border: 0.5vw solid #2a2727;\n    background-color: black;\n    transform: rotate(-30deg);\n    border-radius: 50%  50%  50%  50%  / 60%   60%   40%  40%;\n    background-color: black;\n    z-index: -1;\n}\n.rightear{\n     position: absolute;\n     width: 10vw;\n     height: 10vw;\n     margin-left: 22vw;\n     margin-top: 3vw;\n     transform: rotate(30deg);\n     border: 0.5vw solid #2a2727;\n     border-radius: 50%  50%  50%  50%  / 60%   60%   40%  40%;\n     background-color: black;\n    z-index: -1;\n }\n.lefthand{\n    position: absolute;\n    width: 8vw;\n    height: 16vw;\n    background-color: black;\n    margin-left: -36vw;\n    margin-top: 18vw;\n    transform: rotate(45deg);\n    border: 0.5vw solid #2a2727;\n    border-radius: 50%  50%  50%  50%  / 20%   20%   70%  70%;\n    z-index: -1;\n}\n.righthand{\n    position: absolute;\n    width: 8vw;\n    height: 16vw;\n    background-color: black;\n    margin-left: 36vw;\n    margin-top: 10vw;\n    transform: rotate(45deg);\n    border: 0.5vw solid #2a2727;\n    border-radius: 50%  50%  50%  50%  / 70%  70% 20%   20%  ;\n    z-index: -1;\n}\n.heart {\n    position: relative;\n    margin-top: 1vw;\n    margin-left: 2.1vw;\n}\n.heart:before,\n.heart:after {\n    position: absolute;\n    content: \"\";\n    left: 1.5vw;\n    top: 0;\n    width: 1.5vw;\n    height: 2.5vw;\n    background: #d95656;\n    -moz-border-radius: 2.5vw 2.5vw 0 0;\n    border-radius: 2.5vw 2.5vw 0 0;\n    -webkit-transform: rotate(-45deg);\n    -moz-transform: rotate(-45deg);\n    -ms-transform: rotate(-45deg);\n    -o-transform: rotate(-45deg);\n    transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n    -moz-transform-origin: 0 100%;\n    -ms-transform-origin: 0 100%;\n    -o-transform-origin: 0 100%;\n    transform-origin: 0 100%;\n}\n.heart:after {\n    left: 0;\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n    -webkit-transform-origin: 100% 100%;\n    -moz-transform-origin: 100% 100%;\n    -ms-transform-origin: 100% 100%;\n    -o-transform-origin: 100% 100%;\n    transform-origin :100% 100%;\n}\n.leftfoot{\n    position: absolute;\n    width: 8vw;\n    height: 10vw;\n    background-color: black;\n    margin-left: -17vw;\n    margin-top: 35vw;\n    border: 0.5vw solid #2a2727;\n    border-radius: 0 0 20% 20%;\n    z-index: -1;\n}\n.rightfoot{\n    position: absolute;\n    width: 8vw;\n    height: 10vw;\n    background-color: black;\n    margin-left: 17vw;\n    margin-top: 35vw;\n    border: 0.5vw solid #2a2727;\n    border-radius: 0 0 20% 20%;\n    z-index: -1;\n}\n";
var string1 = "Hi,\u5B9D\u8D1D\n\u8FD9\u662F\u6211\u4E3A\u4F60\u505A\u7684\u7B2C\u4E8C\u53EA\u51B0\u58A9\u58A9\n\u5E0C\u671B\u4F60\u80FD\u591F\u559C\u6B22\n\u867D\u7136\u8FD8\u662F\u6709\u5F88\u591A\u7455\u75B5\n\u4F46\u662F\u5E0C\u671B\u4F60\u80FD\u63A5\u53D7\u5B83\u7684\u4E0D\u5B8C\u7F8E\n\u9001\u7ED9\u4F60\u4E24\u53E5\u6211\u559C\u6B22\u7684\u8BD7\uFF1A\n\u66FE\u7ECF\u6CA7\u6D77\u96BE\u4E3A\u6C34\n\u9664\u5374\u5DEB\u5C71\u4E0D\u662F\u4E91\n";
var n = 0;
var m = 0; // let time = 0;

var play = function play() {
  var demo1 = document.querySelector('#demo1');
  demo1.innerText = string1.substr(0, m); // demo2.scrollTop = 999999

  demo1.scrollTop = demo1.scrollHeight;
  m = m + 1;

  if (m > string1.length) {
    window.clearInterval(id);
  }
};

var play2 = function play2() {
  var demo2 = document.querySelector('#demo2');
  demo2.innerHTML = string2.substr(0, n); // demo2.scrollTop = 999999

  n = n + 1;

  if (n > string2.length) {
    window.clearInterval(id2);
  }
};

var id = setInterval(play, 300);
var id2 = setInterval(play2, 0); // function toggleSound() {
//     let music = document.getElementById('bgMusic');//获取ID
//     console.log(music);
//     console.log(music.paused);
//     if (music.paused) { //判读是否播放
//         music.paused=false;
//         music.play(); //没有就播放
//     }
// }
// setInterval("toggleSound()",1);
},{}],"D:/nodejs/node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55034" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["D:/nodejs/node_global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","demo.js"], null)
//# sourceMappingURL=/demo.d3b53871.js.map