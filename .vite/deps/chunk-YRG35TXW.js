var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// <define:process.env.UNI_STAT_TITLE_JSON>
var init_define_process_env_UNI_STAT_TITLE_JSON = __esm({
  "<define:process.env.UNI_STAT_TITLE_JSON>"() {
  }
});

// F:/uniapp/beyond-video/node_modules/_xgplayer@2.32.2@xgplayer/dist/index.js
var require_dist = __commonJS({
  "F:/uniapp/beyond-video/node_modules/_xgplayer@2.32.2@xgplayer/dist/index.js"(exports, module) {
    init_define_process_env_UNI_STAT_TITLE_JSON();
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["xgplayer"] = factory();
      else
        root["xgplayer"] = factory();
    })(exports, function() {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module2 = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.l = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, { enumerable: true, get: getter });
          }
        };
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
        __webpack_require__.t = function(value, mode) {
          if (mode & 1)
            value = __webpack_require__(value);
          if (mode & 8)
            return value;
          if (mode & 4 && typeof value === "object" && value && value.__esModule)
            return value;
          var ns = /* @__PURE__ */ Object.create(null);
          __webpack_require__.r(ns);
          Object.defineProperty(ns, "default", { enumerable: true, value });
          if (mode & 2 && typeof value != "string")
            for (var key in value)
              __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
          return ns;
        };
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? function getDefault() {
            return module2["default"];
          } : function getModuleExports() {
            return module2;
          };
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 79);
      }([
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.util = exports2.PresentationMode = void 0;
          exports2.createDom = createDom;
          exports2.hasClass = hasClass;
          exports2.addClass = addClass;
          exports2.removeClass = removeClass;
          exports2.toggleClass = toggleClass;
          exports2.findDom = findDom;
          exports2.padStart = padStart;
          exports2.format = format;
          exports2.event = event;
          exports2.typeOf = typeOf;
          exports2.deepCopy = deepCopy;
          exports2.getBgImage = getBgImage;
          exports2.copyDom = copyDom;
          exports2._setInterval = _setInterval;
          exports2._clearInterval = _clearInterval;
          exports2.createImgBtn = createImgBtn;
          exports2.isWeiXin = isWeiXin;
          exports2.isUc = isUc;
          exports2.computeWatchDur = computeWatchDur;
          exports2.offInDestroy = offInDestroy;
          exports2.on = on;
          exports2.once = once;
          exports2.getBuffered2 = getBuffered2;
          exports2.checkIsBrowser = checkIsBrowser;
          exports2.setStyle = setStyle;
          exports2.checkWebkitSetPresentationMode = checkWebkitSetPresentationMode;
          var _xgplayerTimeRange = __webpack_require__(7);
          var _xgplayerTimeRange2 = _interopRequireDefault(_xgplayerTimeRange);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function createDom() {
            var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "div";
            var tpl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            var attrs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            var cname = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
            var dom = document.createElement(el);
            dom.className = cname;
            dom.innerHTML = tpl;
            Object.keys(attrs).forEach(function(item) {
              var key = item;
              var value = attrs[item];
              if (el === "video" || el === "audio") {
                if (value) {
                  dom.setAttribute(key, value);
                }
              } else {
                dom.setAttribute(key, value);
              }
            });
            return dom;
          }
          function hasClass(el, className) {
            if (!el) {
              return false;
            }
            if (el.classList) {
              return Array.prototype.some.call(el.classList, function(item) {
                return item === className;
              });
            } else if (el.className) {
              return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
            } else {
              return false;
            }
          }
          function addClass(el, className) {
            if (!el) {
              return;
            }
            if (el.classList) {
              className.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function(item) {
                item && el.classList.add(item);
              });
            } else if (!hasClass(el, className)) {
              el.className += " " + className;
            }
          }
          function removeClass(el, className) {
            if (!el) {
              return;
            }
            if (el.classList) {
              className.split(/\s+/g).forEach(function(item) {
                el.classList.remove(item);
              });
            } else if (hasClass(el, className)) {
              className.split(/\s+/g).forEach(function(item) {
                var reg = new RegExp("(\\s|^)" + item + "(\\s|$)");
                el.className = el.className.replace(reg, " ");
              });
            }
          }
          function toggleClass(el, className) {
            if (!el) {
              return;
            }
            className.split(/\s+/g).forEach(function(item) {
              if (hasClass(el, item)) {
                removeClass(el, item);
              } else {
                addClass(el, item);
              }
            });
          }
          function findDom() {
            var el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
            var sel = arguments[1];
            var dom = void 0;
            try {
              dom = el.querySelector(sel);
            } catch (e) {
              if (sel.indexOf("#") === 0) {
                dom = el.getElementById(sel.slice(1));
              }
            }
            return dom;
          }
          function padStart(str, length, pad) {
            var charstr = String(pad);
            var len = length >> 0;
            var maxlen = Math.ceil(len / charstr.length);
            var chars = [];
            var r = String(str);
            while (maxlen--) {
              chars.push(charstr);
            }
            return chars.join("").substring(0, len - r.length) + r;
          }
          function format(time) {
            if (window.isNaN(time)) {
              return "";
            }
            var hour = padStart(Math.floor(time / 3600), 2, 0);
            var minute = padStart(Math.floor((time - hour * 3600) / 60), 2, 0);
            var second = padStart(Math.floor(time - hour * 3600 - minute * 60), 2, 0);
            return (hour === "00" ? [minute, second] : [hour, minute, second]).join(":");
          }
          function event(e) {
            if (e.touches) {
              var touch = e.touches[0] || e.changedTouches[0];
              e.clientX = touch.clientX || 0;
              e.clientY = touch.clientY || 0;
              e.offsetX = touch.pageX - touch.target.offsetLeft;
              e.offsetY = touch.pageY - touch.target.offsetTop;
            }
            e._target = e.target || e.srcElement;
          }
          function typeOf(obj) {
            return Object.prototype.toString.call(obj).match(/([^\s.*]+)(?=]$)/g)[0];
          }
          function deepCopy(dst, src) {
            if (typeOf(src) === "Object" && typeOf(dst) === "Object") {
              Object.keys(src).forEach(function(key) {
                if (typeOf(src[key]) === "Object" && !(src[key] instanceof Node)) {
                  if (!dst[key]) {
                    dst[key] = src[key];
                  } else {
                    deepCopy(dst[key], src[key]);
                  }
                } else if (typeOf(src[key]) === "Array") {
                  dst[key] = typeOf(dst[key]) === "Array" ? dst[key].concat(src[key]) : src[key];
                } else {
                  dst[key] = src[key];
                }
              });
              return dst;
            }
          }
          function getBgImage(el) {
            var url = (el.currentStyle || window.getComputedStyle(el, null)).backgroundImage;
            if (!url || url === "none") {
              return "";
            }
            var a = document.createElement("a");
            a.href = url.replace(/url\("|"\)/g, "");
            return a.href;
          }
          function copyDom(dom) {
            if (dom && dom.nodeType === 1) {
              var back = document.createElement(dom.tagName);
              Array.prototype.forEach.call(dom.attributes, function(node) {
                back.setAttribute(node.name, node.value);
              });
              if (dom.innerHTML) {
                back.innerHTML = dom.innerHTML;
              }
              return back;
            } else {
              return "";
            }
          }
          function _setInterval(context, eventName, intervalFunc, frequency) {
            if (!context._interval[eventName]) {
              context._interval[eventName] = setInterval(intervalFunc.bind(context), frequency);
            }
          }
          function _clearInterval(context, eventName) {
            clearInterval(context._interval[eventName]);
            context._interval[eventName] = null;
          }
          function createImgBtn(name, imgUrl, width, height) {
            var btn = createDom("xg-" + name, "", {}, "xgplayer-" + name + "-img");
            btn.style.backgroundImage = 'url("' + imgUrl + '")';
            if (width && height) {
              var w = void 0, h = void 0, unit = void 0;
              ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every(function(item) {
                if (width.indexOf(item) > -1 && height.indexOf(item) > -1) {
                  w = Number(width.slice(0, width.indexOf(item)).trim());
                  h = Number(height.slice(0, height.indexOf(item)).trim());
                  unit = item;
                  return false;
                } else {
                  return true;
                }
              });
              btn.style.width = "" + w + unit;
              btn.style.height = "" + h + unit;
              btn.style.backgroundSize = "" + w + unit + " " + h + unit;
              if (name === "start") {
                btn.style.margin = "-" + h / 2 + unit + " auto auto -" + w / 2 + unit;
              } else {
                btn.style.margin = "auto 5px auto 5px";
              }
            }
            return btn;
          }
          function isWeiXin() {
            var ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf("micromessenger") > -1;
          }
          function isUc() {
            var ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf("ucbrowser") > -1;
          }
          function computeWatchDur() {
            var played = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var arr = [];
            for (var i = 0; i < played.length; i++) {
              if (!played[i].end || played[i].begin < 0 || played[i].end < 0 || played[i].end < played[i].begin) {
                continue;
              }
              if (arr.length < 1) {
                arr.push({ begin: played[i].begin, end: played[i].end });
              } else {
                for (var j = 0; j < arr.length; j++) {
                  var begin = played[i].begin;
                  var end = played[i].end;
                  if (end < arr[j].begin) {
                    arr.splice(j, 0, { begin, end });
                    break;
                  } else if (begin > arr[j].end) {
                    if (j > arr.length - 2) {
                      arr.push({ begin, end });
                      break;
                    }
                  } else {
                    var b = arr[j].begin;
                    var e = arr[j].end;
                    arr[j].begin = Math.min(begin, b);
                    arr[j].end = Math.max(end, e);
                    break;
                  }
                }
              }
            }
            var watch_dur = 0;
            for (var _i = 0; _i < arr.length; _i++) {
              watch_dur += arr[_i].end - arr[_i].begin;
            }
            return watch_dur;
          }
          function offInDestroy(object, event2, fn, offEvent) {
            function onDestroy() {
              object.off(event2, fn);
              object.off(offEvent, onDestroy);
            }
            object.once(offEvent, onDestroy);
          }
          function on(object, event2, fn, offEvent) {
            if (offEvent) {
              object.on(event2, fn);
              offInDestroy(object, event2, fn, offEvent);
            } else {
              var _fn = function _fn2(data) {
                fn(data);
                object.off(event2, _fn2);
              };
              object.on(event2, _fn);
            }
          }
          function once(object, event2, fn, offEvent) {
            if (offEvent) {
              object.once(event2, fn);
              offInDestroy(object, event2, fn, offEvent);
            } else {
              var _fn = function _fn2(data) {
                fn(data);
                object.off(event2, _fn2);
              };
              object.once(event2, _fn);
            }
          }
          function getBuffered2(vbuffered) {
            var maxHoleDuration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.5;
            var buffered = [];
            for (var i = 0; i < vbuffered.length; i++) {
              buffered.push({ start: vbuffered.start(i) < 0.5 ? 0 : vbuffered.start(i), end: vbuffered.end(i) });
            }
            buffered.sort(function(a, b) {
              var diff = a.start - b.start;
              if (diff) {
                return diff;
              } else {
                return b.end - a.end;
              }
            });
            var buffered_2 = [];
            if (maxHoleDuration) {
              for (var _i2 = 0; _i2 < buffered.length; _i2++) {
                var buf2len = buffered_2.length;
                if (buf2len) {
                  var buf2end = buffered_2[buf2len - 1].end;
                  if (buffered[_i2].start - buf2end < maxHoleDuration) {
                    if (buffered[_i2].end > buf2end) {
                      buffered_2[buf2len - 1].end = buffered[_i2].end;
                    }
                  } else {
                    buffered_2.push(buffered[_i2]);
                  }
                } else {
                  buffered_2.push(buffered[_i2]);
                }
              }
            } else {
              buffered_2 = buffered;
            }
            return new _xgplayerTimeRange2.default(buffered_2);
          }
          function checkIsBrowser() {
            return !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
          }
          function setStyle(elem, name, value) {
            var style = elem.style;
            try {
              style[name] = value;
            } catch (error) {
              style.setProperty(name, value);
            }
          }
          var PresentationMode = exports2.PresentationMode = {
            PIP: "picture-in-picture",
            INLINE: "inline",
            FULLSCREEN: "fullscreen"
          };
          function checkWebkitSetPresentationMode(video) {
            return typeof video.webkitSetPresentationMode === "function";
          }
          var util = exports2.util = {
            createDom,
            hasClass,
            addClass,
            removeClass,
            toggleClass,
            findDom,
            padStart,
            format,
            event,
            typeOf,
            deepCopy,
            getBgImage,
            copyDom,
            setInterval: _setInterval,
            clearInterval: _clearInterval,
            createImgBtn,
            isWeiXin,
            isUc,
            computeWatchDur,
            offInDestroy,
            on,
            once,
            getBuffered2,
            checkIsBrowser,
            setStyle
          };
        },
        function(module2, exports2) {
          module2.exports = function(useSourceMap) {
            var list = [];
            list.toString = function toString() {
              return this.map(function(item) {
                var content = cssWithMappingToString(item, useSourceMap);
                if (item[2]) {
                  return "@media " + item[2] + "{" + content + "}";
                } else {
                  return content;
                }
              }).join("");
            };
            list.i = function(modules, mediaQuery) {
              if (typeof modules === "string")
                modules = [[null, modules, ""]];
              var alreadyImportedModules = {};
              for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (typeof id === "number")
                  alreadyImportedModules[id] = true;
              }
              for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                  if (mediaQuery && !item[2]) {
                    item[2] = mediaQuery;
                  } else if (mediaQuery) {
                    item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                  }
                  list.push(item);
                }
              }
            };
            return list;
          };
          function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "";
            var cssMapping = item[3];
            if (!cssMapping) {
              return content;
            }
            if (useSourceMap && typeof btoa === "function") {
              var sourceMapping = toComment(cssMapping);
              var sourceURLs = cssMapping.sources.map(function(source) {
                return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
              });
              return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
            }
            return [content].join("\n");
          }
          function toComment(sourceMap) {
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data = "sourceMappingURL=data:application/json;charset=utf-8;base64," + base64;
            return "/*# " + data + " */";
          }
        },
        function(module2, exports2, __webpack_require__) {
          var stylesInDom = {};
          var memoize = function(fn) {
            var memo;
            return function() {
              if (typeof memo === "undefined")
                memo = fn.apply(this, arguments);
              return memo;
            };
          };
          var isOldIE = memoize(function() {
            return window && document && document.all && !window.atob;
          });
          var getTarget = function(target) {
            return document.querySelector(target);
          };
          var getElement = function(fn) {
            var memo = {};
            return function(target) {
              if (typeof target === "function") {
                return target();
              }
              if (typeof memo[target] === "undefined") {
                var styleTarget = getTarget.call(this, target);
                if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                  try {
                    styleTarget = styleTarget.contentDocument.head;
                  } catch (e) {
                    styleTarget = null;
                  }
                }
                memo[target] = styleTarget;
              }
              return memo[target];
            };
          }();
          var singleton = null;
          var singletonCounter = 0;
          var stylesInsertedAtTop = [];
          var fixUrls = __webpack_require__(36);
          module2.exports = function(list, options) {
            if (typeof DEBUG !== "undefined" && DEBUG) {
              if (typeof document !== "object")
                throw new Error("The style-loader cannot be used in a non-browser environment");
            }
            options = options || {};
            options.attrs = typeof options.attrs === "object" ? options.attrs : {};
            if (!options.singleton && typeof options.singleton !== "boolean")
              options.singleton = isOldIE();
            if (!options.insertInto)
              options.insertInto = "head";
            if (!options.insertAt)
              options.insertAt = "bottom";
            var styles = listToStyles(list, options);
            addStylesToDom(styles, options);
            return function update(newList) {
              var mayRemove = [];
              for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
              }
              if (newList) {
                var newStyles = listToStyles(newList, options);
                addStylesToDom(newStyles, options);
              }
              for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (domStyle.refs === 0) {
                  for (var j = 0; j < domStyle.parts.length; j++)
                    domStyle.parts[j]();
                  delete stylesInDom[domStyle.id];
                }
              }
            };
          };
          function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];
              if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) {
                  domStyle.parts[j](item.parts[j]);
                }
                for (; j < item.parts.length; j++) {
                  domStyle.parts.push(addStyle(item.parts[j], options));
                }
              } else {
                var parts = [];
                for (var j = 0; j < item.parts.length; j++) {
                  parts.push(addStyle(item.parts[j], options));
                }
                stylesInDom[item.id] = { id: item.id, refs: 1, parts };
              }
            }
          }
          function listToStyles(list, options) {
            var styles = [];
            var newStyles = {};
            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var id = options.base ? item[0] + options.base : item[0];
              var css = item[1];
              var media = item[2];
              var sourceMap = item[3];
              var part = { css, media, sourceMap };
              if (!newStyles[id])
                styles.push(newStyles[id] = { id, parts: [part] });
              else
                newStyles[id].parts.push(part);
            }
            return styles;
          }
          function insertStyleElement(options, style) {
            var target = getElement(options.insertInto);
            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            }
            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
            if (options.insertAt === "top") {
              if (!lastStyleElementInsertedAtTop) {
                target.insertBefore(style, target.firstChild);
              } else if (lastStyleElementInsertedAtTop.nextSibling) {
                target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
              } else {
                target.appendChild(style);
              }
              stylesInsertedAtTop.push(style);
            } else if (options.insertAt === "bottom") {
              target.appendChild(style);
            } else if (typeof options.insertAt === "object" && options.insertAt.before) {
              var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
              target.insertBefore(style, nextSibling);
            } else {
              throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            }
          }
          function removeStyleElement(style) {
            if (style.parentNode === null)
              return false;
            style.parentNode.removeChild(style);
            var idx = stylesInsertedAtTop.indexOf(style);
            if (idx >= 0) {
              stylesInsertedAtTop.splice(idx, 1);
            }
          }
          function createStyleElement(options) {
            var style = document.createElement("style");
            options.attrs.type = "text/css";
            addAttrs(style, options.attrs);
            insertStyleElement(options, style);
            return style;
          }
          function createLinkElement(options) {
            var link = document.createElement("link");
            options.attrs.type = "text/css";
            options.attrs.rel = "stylesheet";
            addAttrs(link, options.attrs);
            insertStyleElement(options, link);
            return link;
          }
          function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function(key) {
              el.setAttribute(key, attrs[key]);
            });
          }
          function addStyle(obj, options) {
            var style, update, remove, result;
            if (options.transform && obj.css) {
              result = options.transform(obj.css);
              if (result) {
                obj.css = result;
              } else {
                return function() {
                };
              }
            }
            if (options.singleton) {
              var styleIndex = singletonCounter++;
              style = singleton || (singleton = createStyleElement(options));
              update = applyToSingletonTag.bind(null, style, styleIndex, false);
              remove = applyToSingletonTag.bind(null, style, styleIndex, true);
            } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
              style = createLinkElement(options);
              update = updateLink.bind(null, style, options);
              remove = function() {
                removeStyleElement(style);
                if (style.href)
                  URL.revokeObjectURL(style.href);
              };
            } else {
              style = createStyleElement(options);
              update = applyToTag.bind(null, style);
              remove = function() {
                removeStyleElement(style);
              };
            }
            update(obj);
            return function updateStyle(newObj) {
              if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                  return;
                }
                update(obj = newObj);
              } else {
                remove();
              }
            };
          }
          var replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
              textStore[index] = replacement;
              return textStore.filter(Boolean).join("\n");
            };
          }();
          function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (style.styleSheet) {
              style.styleSheet.cssText = replaceText(index, css);
            } else {
              var cssNode = document.createTextNode(css);
              var childNodes = style.childNodes;
              if (childNodes[index])
                style.removeChild(childNodes[index]);
              if (childNodes.length) {
                style.insertBefore(cssNode, childNodes[index]);
              } else {
                style.appendChild(cssNode);
              }
            }
          }
          function applyToTag(style, obj) {
            var css = obj.css;
            var media = obj.media;
            if (media) {
              style.setAttribute("media", media);
            }
            if (style.styleSheet) {
              style.styleSheet.cssText = css;
            } else {
              while (style.firstChild) {
                style.removeChild(style.firstChild);
              }
              style.appendChild(document.createTextNode(css));
            }
          }
          function updateLink(link, options, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;
            var autoFixUrls = options.convertToAbsoluteUrls === void 0 && sourceMap;
            if (options.convertToAbsoluteUrls || autoFixUrls) {
              css = fixUrls(css);
            }
            if (sourceMap) {
              css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
            }
            var blob = new Blob([css], { type: "text/css" });
            var oldSrc = link.href;
            link.href = URL.createObjectURL(blob);
            if (oldSrc)
              URL.revokeObjectURL(oldSrc);
          }
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var _undefined = __webpack_require__(24)();
          module2.exports = function(val) {
            return val !== _undefined && val !== null;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _version = __webpack_require__(8);
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var ErrorTypes = {
            network: {
              code: 1,
              msg: "\u89C6\u9891\u4E0B\u8F7D\u9519\u8BEF",
              remark: "\u53EA\u8981\u89C6\u9891\u4E0B\u8F7D\u9519\u8BEF\u5C31\u4F7F\u7528\u6B64\u7C7B\u578B\uFF0C\u65E0\u8BBA\u662Fvideo\u672C\u8EAB\u7684\u8D85\u65F6\u8FD8\u662Fxhr\u7684\u5206\u6BB5\u8BF7\u6C42\u8D85\u65F6\u6216\u8005\u8D44\u6E90\u4E0D\u5B58\u5728"
            },
            mse: {
              code: 2,
              msg: "\u6D41\u8FFD\u52A0\u9519\u8BEF",
              remark: "\u8FFD\u52A0\u6D41\u7684\u65F6\u5019\u5982\u679C\u7C7B\u578B\u4E0D\u5BF9\u3001\u65E0\u6CD5\u88AB\u6B63\u786E\u89E3\u7801\u5219\u4F1A\u89E6\u53D1\u6B64\u7C7B\u9519\u8BEF"
            },
            parse: {
              code: 3,
              msg: "\u89E3\u6790\u9519\u8BEF",
              remark: "mp4\u3001hls\u3001flv\u6211\u4EEC\u90FD\u662F\u4F7F\u7528js\u8FDB\u884C\u683C\u5F0F\u89E3\u6790\uFF0C\u5982\u679C\u89E3\u6790\u5931\u8D25\u5219\u4F1A\u89E6\u53D1\u6B64\u7C7B\u9519\u8BEF"
            },
            format: {
              code: 4,
              msg: "\u683C\u5F0F\u9519\u8BEF",
              remark: "\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u7684\u683C\u5F0F\u5BFC\u81F4\u64AD\u653E\u9519\u8BEF"
            },
            decoder: {
              code: 5,
              msg: "\u89E3\u7801\u9519\u8BEF",
              remark: "\u6D4F\u89C8\u5668\u89E3\u7801\u5F02\u5E38\u4F1A\u629B\u51FA\u6B64\u7C7B\u578B\u9519\u8BEF"
            },
            runtime: {
              code: 6,
              msg: "\u8BED\u6CD5\u9519\u8BEF",
              remark: "\u64AD\u653E\u5668\u8BED\u6CD5\u9519\u8BEF"
            },
            timeout: {
              code: 7,
              msg: "\u64AD\u653E\u8D85\u65F6",
              remark: "\u64AD\u653E\u8FC7\u7A0B\u4E2D\u65E0\u6CD5\u6B63\u5E38\u8BF7\u6C42\u4E0B\u4E00\u4E2A\u5206\u6BB5\u5BFC\u81F4\u64AD\u653E\u4E2D\u65AD"
            },
            other: {
              code: 8,
              msg: "\u5176\u4ED6\u9519\u8BEF",
              remark: "\u4E0D\u53EF\u77E5\u7684\u9519\u8BEF\u6216\u88AB\u5FFD\u7565\u7684\u9519\u8BEF\u7C7B\u578B"
            }
          };
          var Errors = function Errors2(type, currentTime, duration, networkState, readyState, src, currentSrc, ended) {
            var errd = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : { line: "", handle: "", msg: "", version: "" };
            var errorCode = arguments[9];
            var mediaError = arguments[10];
            _classCallCheck(this, Errors2);
            var r = {};
            if (arguments.length > 1) {
              r.playerVersion = _version.version;
              r.errorType = type;
              r.domain = document.domain;
              r.duration = duration;
              r.currentTime = currentTime;
              r.networkState = networkState;
              r.readyState = readyState;
              r.currentSrc = currentSrc;
              r.src = src;
              r.ended = ended;
              r.errd = errd;
              r.ex = (ErrorTypes[type] || {}).msg;
              r.errorCode = errorCode;
              r.mediaError = mediaError;
            } else {
              var arg = arguments[0];
              Object.keys(arg).map(function(key) {
                r[key] = arg[key];
              });
              r.ex = (arg.type && ErrorTypes[arg.type] || {}).msg;
            }
            return r;
          };
          exports2.default = Errors;
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var sniffer = {};
          Object.defineProperty(sniffer, "device", {
            get: function get() {
              var r = sniffer.os;
              return r.isPc ? "pc" : "mobile";
            }
          });
          Object.defineProperty(sniffer, "browser", {
            get: function get() {
              var ua = navigator.userAgent.toLowerCase();
              var reg = {
                ie: /rv:([\d.]+)\) like gecko/,
                firfox: /firefox\/([\d.]+)/,
                chrome: /chrome\/([\d.]+)/,
                opera: /opera.([\d.]+)/,
                safari: /version\/([\d.]+).*safari/
              };
              return [].concat(Object.keys(reg).filter(function(key) {
                return reg[key].test(ua);
              }))[0] || "";
            }
          });
          Object.defineProperty(sniffer, "os", {
            get: function get() {
              var ua = navigator.userAgent;
              var isWindowsPhone = /(?:Windows Phone)/.test(ua);
              var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
              var isAndroid = /(?:Android)/.test(ua);
              var isFireFox = /(?:Firefox)/.test(ua);
              var isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
              var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
              var isPc = !isPhone && !isAndroid && !isSymbian && !isTablet;
              return {
                isTablet,
                isPhone,
                isAndroid,
                isPc,
                isSymbian,
                isWindowsPhone,
                isFireFox
              };
            }
          });
          exports2.default = sniffer;
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var _undefined = void 0;
          module2.exports = function(value) {
            return value !== _undefined && value !== null;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var XgplayerTimeRange = function() {
            function XgplayerTimeRange2(bufferedList) {
              _classCallCheck(this, XgplayerTimeRange2);
              this.bufferedList = bufferedList;
            }
            _createClass(XgplayerTimeRange2, [{
              key: "start",
              value: function start(index) {
                return this.bufferedList[index].start;
              }
            }, {
              key: "end",
              value: function end(index) {
                return this.bufferedList[index].end;
              }
            }, {
              key: "length",
              get: function get() {
                return this.bufferedList.length;
              }
            }]);
            return XgplayerTimeRange2;
          }();
          exports2.default = XgplayerTimeRange;
          module2.exports = exports2["default"];
        },
        function(module2) {
          module2.exports = JSON.parse('{"version":"2.32.2"}');
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          var _get = function get(object, property, receiver) {
            if (object === null)
              object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === void 0) {
              var parent = Object.getPrototypeOf(object);
              if (parent === null) {
                return void 0;
              } else {
                return get(parent, property, receiver);
              }
            } else if ("value" in desc) {
              return desc.value;
            } else {
              var getter = desc.get;
              if (getter === void 0) {
                return void 0;
              }
              return getter.call(receiver);
            }
          };
          var _proxy = __webpack_require__(11);
          var _proxy2 = _interopRequireDefault(_proxy);
          var _util = __webpack_require__(0);
          var _sniffer = __webpack_require__(5);
          var _sniffer2 = _interopRequireDefault(_sniffer);
          var _xgplayerTimeRange = __webpack_require__(7);
          var _xgplayerTimeRange2 = _interopRequireDefault(_xgplayerTimeRange);
          var _error = __webpack_require__(4);
          var _error2 = _interopRequireDefault(_error);
          var _allOff = __webpack_require__(31);
          var _allOff2 = _interopRequireDefault(_allOff);
          var _i18n = __webpack_require__(10);
          var _i18n2 = _interopRequireDefault(_i18n);
          __webpack_require__(34);
          var _version = __webpack_require__(8);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self2, call) {
            if (!self2) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self2;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
            if (superClass)
              Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }
          var Player = function(_Proxy) {
            _inherits(Player2, _Proxy);
            function Player2(options) {
              _classCallCheck(this, Player2);
              var _this = _possibleConstructorReturn(this, (Player2.__proto__ || Object.getPrototypeOf(Player2)).call(this, options));
              _this.config = (0, _util.deepCopy)({
                width: 600,
                height: 337.5,
                ignores: [],
                whitelist: [],
                lang: (document.documentElement.getAttribute("lang") || navigator.language || "zh-cn").toLocaleLowerCase(),
                inactive: 3e3,
                volume: 0.6,
                controls: true,
                controlsList: ["nodownload"]
              }, options);
              _this.version = _version.version;
              _this.userTimer = null;
              _this.waitTimer = null;
              _this.history = [];
              _this.isProgressMoving = false;
              _this.root = (0, _util.findDom)(document, "#" + _this.config.id);
              _this.controls = (0, _util.createDom)("xg-controls", "", {
                unselectable: "on",
                onselectstart: "return false"
              }, "xgplayer-controls");
              if (_this.config.isShowControl) {
                _this.controls.style.display = "none";
              }
              if (!_this.root) {
                var el = _this.config.el;
                if (el && el.nodeType === 1) {
                  _this.root = el;
                } else {
                  var _ret;
                  _this.emit("error", new _error2.default({
                    type: "use",
                    errd: {
                      line: 45,
                      handle: "Constructor",
                      msg: "container id can't be empty"
                    },
                    vid: _this.config.vid
                  }));
                  console.error("container id can't be empty");
                  return _ret = false, _possibleConstructorReturn(_this, _ret);
                }
              }
              (0, _util.addClass)(_this.root, "xgplayer xgplayer-" + _sniffer2.default.device + " xgplayer-nostart xgplayer-pause " + (_this.config.controls ? "" : "xgplayer-no-controls"));
              _this.root.appendChild(_this.controls);
              if (_this.config.fluid) {
                _this.root.style["max-width"] = "100%";
                _this.root.style["width"] = "100%";
                _this.root.style["height"] = "0";
                _this.root.style["padding-top"] = _this.config.height * 100 / _this.config.width + "%";
                _this.video.style["position"] = "absolute";
                _this.video.style["top"] = "0";
                _this.video.style["left"] = "0";
              } else {
                if (_this.config.width) {
                  if (typeof _this.config.width !== "number") {
                    _this.root.style.width = _this.config.width;
                  } else {
                    _this.root.style.width = _this.config.width + "px";
                  }
                }
                if (_this.config.height) {
                  if (typeof _this.config.height !== "number") {
                    _this.root.style.height = _this.config.height;
                  } else {
                    _this.root.style.height = _this.config.height + "px";
                  }
                }
              }
              if (_this.config.execBeforePluginsCall) {
                _this.config.execBeforePluginsCall.forEach(function(item) {
                  item.call(_this, _this);
                });
              }
              if (!_this.config.closeI18n) {
                Player2.install(_i18n2.default.name, _i18n2.default.method);
              }
              if (_this.config.controlStyle && (0, _util.typeOf)(_this.config.controlStyle) === "String") {
                var self2 = _this;
                fetch(self2.config.controlStyle, {
                  method: "GET",
                  headers: {
                    Accept: "application/json"
                  }
                }).then(function(res) {
                  if (res.ok) {
                    res.json().then(function(obj) {
                      for (var prop in obj) {
                        if (obj.hasOwnProperty(prop)) {
                          self2.config[prop] = obj[prop];
                        }
                      }
                      self2.pluginsCall();
                    });
                  }
                }).catch(function(err) {
                  console.log("Fetch\u9519\u8BEF:" + err);
                });
              } else {
                _this.pluginsCall();
              }
              if (_this.config.controlPlugins) {
                Player2.controlsRun(_this.config.controlPlugins, _this);
              }
              _this.ev.forEach(function(item) {
                var evName = Object.keys(item)[0];
                var evFunc = _this[item[evName]];
                if (evFunc) {
                  _this.on(evName, evFunc);
                }
              });
              ["focus", "blur"].forEach(function(item) {
                _this.on(item, _this["on" + item.charAt(0).toUpperCase() + item.slice(1)]);
              });
              var player = _this;
              _this.mousemoveFunc = function() {
                player.emit("focus");
                if (!player.config.closeFocusVideoFocus) {
                  player.video.focus();
                }
              };
              _this.root.addEventListener("mousemove", _this.mousemoveFunc);
              _this.playFunc = function() {
                player.emit("focus");
                if (!player.config.closePlayVideoFocus) {
                  player.video.focus();
                }
              };
              player.once("play", _this.playFunc);
              _this.getVideoSize = function() {
                if (this.video.videoWidth && this.video.videoHeight) {
                  var containerSize = player.root.getBoundingClientRect();
                  if (player.config.fitVideoSize === "auto") {
                    if (containerSize.width / containerSize.height > this.video.videoWidth / this.video.videoHeight) {
                      player.root.style.height = this.video.videoHeight / this.video.videoWidth * containerSize.width + "px";
                    } else {
                      player.root.style.width = this.video.videoWidth / this.video.videoHeight * containerSize.height + "px";
                    }
                  } else if (player.config.fitVideoSize === "fixWidth") {
                    player.root.style.height = this.video.videoHeight / this.video.videoWidth * containerSize.width + "px";
                  } else if (player.config.fitVideoSize === "fixHeight") {
                    player.root.style.width = this.video.videoWidth / this.video.videoHeight * containerSize.height + "px";
                  }
                }
              };
              player.once("loadeddata", _this.getVideoSize);
              setTimeout(function() {
                _this.emit("ready");
                _this.isReady = true;
              }, 0);
              if (_this.config.videoInit) {
                if ((0, _util.hasClass)(_this.root, "xgplayer-nostart")) {
                  _this.start();
                }
              }
              if (player.config.rotate) {
                player.on("requestFullscreen", _this.updateRotateDeg);
                player.on("exitFullscreen", _this.updateRotateDeg);
              }
              function onDestroy() {
                player.root.removeEventListener("mousemove", player.mousemoveFunc);
                player.off("destroy", onDestroy);
              }
              player.once("destroy", onDestroy);
              return _this;
            }
            _createClass(Player2, [{
              key: "attachVideo",
              value: function attachVideo() {
                var _this2 = this;
                if (this.video && this.video.nodeType === 1) {
                  this.root.insertBefore(this.video, this.root.firstChild);
                }
                setTimeout(function() {
                  _this2.emit("complete");
                  if (_this2.danmu && typeof _this2.danmu.resize === "function") {
                    _this2.danmu.resize();
                  }
                }, 1);
              }
            }, {
              key: "start",
              value: function start() {
                var _this3 = this;
                var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.config.url;
                if (!this.video)
                  return;
                var player = this;
                if (!url || url === "") {
                  this.emit("urlNull");
                  return;
                }
                this.canPlayFunc = function() {
                  player.off("canplay", player.canPlayFunc);
                  var playPromise = player.video.play();
                  if (playPromise !== void 0 && playPromise) {
                    playPromise.then(function() {
                      player.emit("autoplay started");
                    }).catch(function() {
                      player.emit("autoplay was prevented");
                      (0, _util.addClass)(player.root, "xgplayer-is-autoplay");
                    });
                  }
                };
                if ((0, _util.typeOf)(url) !== "Array") {
                  if ((0, _util.typeOf)(url) === "String" && url.indexOf("blob:") > -1 && url === this.video.src) {
                  } else {
                    this.video.src = url;
                  }
                } else {
                  url.forEach(function(item) {
                    _this3.video.appendChild((0, _util.createDom)("source", "", {
                      src: "" + item.src,
                      type: "" + (item.type || "")
                    }));
                  });
                }
                if (this.config.autoplay) {
                  if (_sniffer2.default.os.isPhone) {
                    this.canPlayFunc();
                  } else {
                    this.on("canplay", this.canPlayFunc);
                  }
                }
                if (!this.config.disableStartLoad) {
                  this.video.load();
                }
                this.attachVideo();
              }
            }, {
              key: "reload",
              value: function reload() {
                this.video.load();
                this.reloadFunc = function() {
                  var playPromise = this.play();
                  if (playPromise !== void 0 && playPromise) {
                    playPromise.catch(function(err) {
                    });
                  }
                };
                this.once("loadeddata", this.reloadFunc);
              }
            }, {
              key: "destroy",
              value: function destroy() {
                var _this4 = this;
                var isDelDom = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var player = this;
                clearInterval(this.bulletResizeTimer);
                for (var k in this._interval) {
                  clearInterval(this._interval[k]);
                  this._interval[k] = null;
                }
                if (this.checkTimer) {
                  clearInterval(this.checkTimer);
                }
                if (this.waitTimer) {
                  clearTimeout(this.waitTimer);
                }
                this.ev.forEach(function(item) {
                  var evName = Object.keys(item)[0];
                  var evFunc = _this4[item[evName]];
                  if (evFunc) {
                    _this4.off(evName, evFunc);
                  }
                });
                if (this.loadeddataFunc) {
                  this.off("loadeddata", this.loadeddataFunc);
                }
                if (this.reloadFunc) {
                  this.off("loadeddata", this.reloadFunc);
                }
                if (this.replayFunc) {
                  this.off("play", this.replayFunc);
                }
                if (this.playFunc) {
                  this.off("play", this.playFunc);
                }
                if (this.getVideoSize) {
                  this.off("loadeddata", this.getVideoSize);
                }
                ;
                ["focus", "blur"].forEach(function(item) {
                  _this4.off(item, _this4["on" + item.charAt(0).toUpperCase() + item.slice(1)]);
                });
                if (!this.config.keyShortcut || this.config.keyShortcut === "on") {
                  ["video", "controls"].forEach(function(item) {
                    if (_this4[item]) {
                      _this4[item].removeEventListener("keydown", function(e) {
                        player.onKeydown(e, player);
                      });
                    }
                  });
                }
                function destroyFunc() {
                  this.emit("destroy");
                  this.video.removeAttribute("src");
                  this.video.load();
                  if (isDelDom) {
                    this.root.innerHTML = "";
                    var classNameList = this.root.className.split(" ");
                    if (classNameList.length > 0) {
                      this.root.className = classNameList.filter(function(name) {
                        return name.indexOf("xgplayer") < 0;
                      }).join(" ");
                    } else {
                      this.root.className = "";
                    }
                  }
                  for (var _k in this) {
                    delete this[_k];
                  }
                  (0, _allOff2.default)(this);
                }
                destroyFunc.call(this);
                _get(Player2.prototype.__proto__ || Object.getPrototypeOf(Player2.prototype), "destroy", this).call(this);
              }
            }, {
              key: "replay",
              value: function replay() {
                var self2 = this;
                var _replay = this._replay;
                (0, _util.removeClass)(this.root, "xgplayer-ended");
                if (_sniffer2.default.browser.indexOf("ie") > -1) {
                  this.emit("play");
                  this.emit("playing");
                }
                if (_replay && _replay instanceof Function) {
                  _replay();
                } else {
                  this.currentTime = 0;
                  var playPromise = this.play();
                  if (playPromise !== void 0 && playPromise) {
                    playPromise.catch(function(err) {
                    });
                  }
                }
              }
            }, {
              key: "userGestureTrigEvent",
              value: function userGestureTrigEvent(name, param) {
                var _this5 = this;
                var defaultUserGestureEventHandler = function defaultUserGestureEventHandler2(name2, param2) {
                  _this5.emit(name2, param2);
                };
                if (this.config.userGestureEventMiddleware && typeof this.config.userGestureEventMiddleware[name] === "function") {
                  this.config.userGestureEventMiddleware[name].call(this, this, name, param, defaultUserGestureEventHandler);
                } else {
                  defaultUserGestureEventHandler.call(this, name, param);
                }
              }
            }, {
              key: "pluginsCall",
              value: function pluginsCall() {
                var _this6 = this;
                if (Player2.plugins["s_i18n"]) {
                  Player2.plugins["s_i18n"].call(this, this);
                }
                var self2 = this;
                if (Player2.plugins) {
                  var ignores = this.config.ignores;
                  Object.keys(Player2.plugins).forEach(function(name) {
                    var descriptor = Player2.plugins[name];
                    if (!descriptor || typeof descriptor !== "function") {
                      console.warn("plugin name", name, "is invalid");
                    } else {
                      if (!ignores.some(function(item) {
                        return name === item || name === "s_" + item;
                      }) && name !== "s_i18n") {
                        if (["pc", "tablet", "mobile"].some(function(type) {
                          return type === name;
                        })) {
                          if (name === _sniffer2.default.device) {
                            setTimeout(function() {
                              if (!self2.video)
                                return;
                              descriptor.call(self2, self2);
                            }, 0);
                          }
                        } else {
                          descriptor.call(_this6, _this6);
                        }
                      }
                    }
                  });
                }
              }
            }, {
              key: "onFocus",
              value: function onFocus() {
                var player = this;
                if ((0, _util.hasClass)(this.root, "xgplayer-inactive")) {
                  player.emit("controlShow");
                }
                (0, _util.removeClass)(this.root, "xgplayer-inactive");
                if (player.userTimer) {
                  clearTimeout(player.userTimer);
                }
                player.userTimer = setTimeout(function() {
                  player.emit("blur");
                }, player.config.inactive);
              }
            }, {
              key: "onBlur",
              value: function onBlur() {
                if ((this.config.enablePausedInactive || !this.paused) && !this.ended && !this.config.closeInactive) {
                  if (!(0, _util.hasClass)(this.root, "xgplayer-inactive")) {
                    this.emit("controlHide");
                  }
                  (0, _util.addClass)(this.root, "xgplayer-inactive");
                }
              }
            }, {
              key: "onPlay",
              value: function onPlay() {
                (0, _util.addClass)(this.root, "xgplayer-isloading");
                (0, _util.addClass)(this.root, "xgplayer-playing");
                (0, _util.removeClass)(this.root, "xgplayer-pause");
              }
            }, {
              key: "onPause",
              value: function onPause() {
                (0, _util.addClass)(this.root, "xgplayer-pause");
                if (this.userTimer) {
                  clearTimeout(this.userTimer);
                }
                this.emit("focus");
              }
            }, {
              key: "onEnded",
              value: function onEnded() {
                (0, _util.addClass)(this.root, "xgplayer-ended");
                (0, _util.removeClass)(this.root, "xgplayer-playing");
              }
            }, {
              key: "onSeeking",
              value: function onSeeking() {
                this.isSeeking = true;
                this.onWaiting();
              }
            }, {
              key: "onSeeked",
              value: function onSeeked() {
                var _this7 = this;
                this.once("timeupdate", function() {
                  _this7.isSeeking = false;
                });
                if (this.waitTimer) {
                  clearTimeout(this.waitTimer);
                }
                (0, _util.removeClass)(this.root, "xgplayer-isloading");
              }
            }, {
              key: "onWaiting",
              value: function onWaiting() {
                var self2 = this;
                if (self2.waitTimer) {
                  clearTimeout(self2.waitTimer);
                }
                if (self2.checkTimer) {
                  clearInterval(self2.checkTimer);
                  self2.checkTimer = null;
                }
                var time = self2.currentTime;
                self2.waitTimer = setTimeout(function() {
                  (0, _util.addClass)(self2.root, "xgplayer-isloading");
                  self2.checkTimer = setInterval(function() {
                    if (self2.currentTime !== time) {
                      (0, _util.removeClass)(self2.root, "xgplayer-isloading");
                      clearInterval(self2.checkTimer);
                      self2.checkTimer = null;
                    }
                  }, 1e3);
                }, 500);
              }
            }, {
              key: "onPlaying",
              value: function onPlaying() {
                if (this.paused) {
                  return;
                }
                this.isSeeking = false;
                if (this.waitTimer) {
                  clearTimeout(this.waitTimer);
                }
                (0, _util.removeClass)(this.root, "xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay");
                (0, _util.addClass)(this.root, "xgplayer-playing");
              }
            }], [{
              key: "install",
              value: function install(name, descriptor) {
                if (!(0, _util.checkIsBrowser)()) {
                  return;
                }
                if (!Player2.plugins) {
                  Player2.plugins = {};
                }
                if (!Player2.plugins[name]) {
                  Player2.plugins[name] = descriptor;
                }
              }
            }, {
              key: "installAll",
              value: function installAll(list) {
                for (var k = 0; k < list.length; k++) {
                  Player2.install(list[k].name, list[k].method);
                }
              }
            }, {
              key: "use",
              value: function use(name, descriptor) {
                if (!Player2.plugins) {
                  Player2.plugins = {};
                }
                Player2.plugins[name] = descriptor;
              }
            }, {
              key: "useAll",
              value: function useAll(list) {
                for (var k in list) {
                  Player2.use(list[k].name, list[k].method);
                }
              }
            }, {
              key: "controlsRun",
              value: function controlsRun(controlLst, context) {
                controlLst.forEach(function(control) {
                  control.method.call(context);
                });
              }
            }]);
            return Player2;
          }(_proxy2.default);
          Player.util = _util.util;
          Player.sniffer = _sniffer2.default;
          Player.Errors = _error2.default;
          Player.XgplayerTimeRange = _xgplayerTimeRange2.default;
          exports2.default = Player;
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var s_i18n = function s_i18n2() {
            var player = this;
            var lang = {};
            lang.en = {
              HAVE_NOTHING: "There is no information on whether audio/video is ready",
              HAVE_METADATA: "Audio/video metadata is ready ",
              HAVE_CURRENT_DATA: "Data about the current play location is available, but there is not enough data to play the next frame/millisecond",
              HAVE_FUTURE_DATA: "Current and at least one frame of data is available",
              HAVE_ENOUGH_DATA: "The available data is sufficient to start playing",
              NETWORK_EMPTY: "Audio/video has not been initialized",
              NETWORK_IDLE: "Audio/video is active and has been selected for resources, but no network is used",
              NETWORK_LOADING: "The browser is downloading the data",
              NETWORK_NO_SOURCE: "No audio/video source was found",
              MEDIA_ERR_ABORTED: "The fetch process is aborted by the user",
              MEDIA_ERR_NETWORK: "An error occurred while downloading",
              MEDIA_ERR_DECODE: "An error occurred while decoding",
              MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported",
              REPLAY: "Replay",
              ERROR: "Network is offline",
              PLAY_TIPS: "Play",
              PAUSE_TIPS: "Pause",
              PLAYNEXT_TIPS: "Play next",
              DOWNLOAD_TIPS: "Download",
              ROTATE_TIPS: "Rotate",
              RELOAD_TIPS: "Reload",
              FULLSCREEN_TIPS: "Fullscreen",
              EXITFULLSCREEN_TIPS: "Exit fullscreen",
              CSSFULLSCREEN_TIPS: "Cssfullscreen",
              EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen",
              TEXTTRACK: "Caption",
              PIP: "Pip",
              MINIPLAYER: "Miniplayer",
              SCREENSHOT: "Screenshot",
              LIVE: "LIVE",
              OFF: "Off",
              MINIPLAYER_DRAG: "Click and hold to drag",
              AIRPLAY_TIPS: "Airplay"
            };
            lang["zh-cn"] = {
              HAVE_NOTHING: "\u6CA1\u6709\u5173\u4E8E\u97F3\u9891/\u89C6\u9891\u662F\u5426\u5C31\u7EEA\u7684\u4FE1\u606F",
              HAVE_METADATA: "\u97F3\u9891/\u89C6\u9891\u7684\u5143\u6570\u636E\u5DF2\u5C31\u7EEA",
              HAVE_CURRENT_DATA: "\u5173\u4E8E\u5F53\u524D\u64AD\u653E\u4F4D\u7F6E\u7684\u6570\u636E\u662F\u53EF\u7528\u7684\uFF0C\u4F46\u6CA1\u6709\u8DB3\u591F\u7684\u6570\u636E\u6765\u64AD\u653E\u4E0B\u4E00\u5E27/\u6BEB\u79D2",
              HAVE_FUTURE_DATA: "\u5F53\u524D\u53CA\u81F3\u5C11\u4E0B\u4E00\u5E27\u7684\u6570\u636E\u662F\u53EF\u7528\u7684",
              HAVE_ENOUGH_DATA: "\u53EF\u7528\u6570\u636E\u8DB3\u4EE5\u5F00\u59CB\u64AD\u653E",
              NETWORK_EMPTY: "\u97F3\u9891/\u89C6\u9891\u5C1A\u672A\u521D\u59CB\u5316",
              NETWORK_IDLE: "\u97F3\u9891/\u89C6\u9891\u662F\u6D3B\u52A8\u7684\u4E14\u5DF2\u9009\u53D6\u8D44\u6E90\uFF0C\u4F46\u5E76\u672A\u4F7F\u7528\u7F51\u7EDC",
              NETWORK_LOADING: "\u6D4F\u89C8\u5668\u6B63\u5728\u4E0B\u8F7D\u6570\u636E",
              NETWORK_NO_SOURCE: "\u672A\u627E\u5230\u97F3\u9891/\u89C6\u9891\u6765\u6E90",
              MEDIA_ERR_ABORTED: "\u53D6\u56DE\u8FC7\u7A0B\u88AB\u7528\u6237\u4E2D\u6B62",
              MEDIA_ERR_NETWORK: "\u5F53\u4E0B\u8F7D\u65F6\u53D1\u751F\u9519\u8BEF",
              MEDIA_ERR_DECODE: "\u5F53\u89E3\u7801\u65F6\u53D1\u751F\u9519\u8BEF",
              MEDIA_ERR_SRC_NOT_SUPPORTED: "\u4E0D\u652F\u6301\u7684\u97F3\u9891/\u89C6\u9891\u683C\u5F0F",
              REPLAY: "\u91CD\u64AD",
              ERROR: "\u7F51\u7EDC\u8FDE\u63A5\u4F3C\u4E4E\u51FA\u73B0\u4E86\u95EE\u9898",
              PLAY_TIPS: "\u64AD\u653E",
              PAUSE_TIPS: "\u6682\u505C",
              PLAYNEXT_TIPS: "\u4E0B\u4E00\u96C6",
              DOWNLOAD_TIPS: "\u4E0B\u8F7D",
              ROTATE_TIPS: "\u65CB\u8F6C",
              RELOAD_TIPS: "\u91CD\u65B0\u8F7D\u5165",
              FULLSCREEN_TIPS: "\u8FDB\u5165\u5168\u5C4F",
              EXITFULLSCREEN_TIPS: "\u9000\u51FA\u5168\u5C4F",
              CSSFULLSCREEN_TIPS: "\u8FDB\u5165\u6837\u5F0F\u5168\u5C4F",
              EXITCSSFULLSCREEN_TIPS: "\u9000\u51FA\u6837\u5F0F\u5168\u5C4F",
              TEXTTRACK: "\u5B57\u5E55",
              PIP: "\u753B\u4E2D\u753B",
              MINIPLAYER: "\u8FF7\u4F60\u64AD\u653E\u5668",
              SCREENSHOT: "\u622A\u56FE",
              LIVE: "\u6B63\u5728\u76F4\u64AD",
              OFF: "\u5173\u95ED",
              MINIPLAYER_DRAG: "\u70B9\u51FB\u6309\u4F4F\u53EF\u62D6\u52A8\u89C6\u9891",
              AIRPLAY_TIPS: "\u9694\u7A7A\u64AD\u653E"
            };
            lang["zh-hk"] = {
              HAVE_NOTHING: "\u6C92\u6709\u95DC\u65BC\u97F3\u983B/\u8996\u983B\u662F\u5426\u5C31\u7DD2\u7684\u4FE1\u606F",
              HAVE_METADATA: "\u97F3\u983B/\u8996\u983B\u7684\u5143\u6578\u64DA\u5DF2\u5C31\u7DD2",
              HAVE_CURRENT_DATA: "\u95DC\u65BC\u7576\u524D\u64AD\u653E\u4F4D\u7F6E\u7684\u6578\u64DA\u662F\u53EF\u7528\u7684\uFF0C\u4F46\u6C92\u6709\u8DB3\u5920\u7684\u6578\u64DA\u4F86\u64AD\u653E\u4E0B\u58F9\u5E40/\u6BEB\u79D2",
              HAVE_FUTURE_DATA: "\u7576\u524D\u53CA\u81F3\u5C11\u4E0B\u58F9\u5E40\u7684\u6578\u64DA\u662F\u53EF\u7528\u7684",
              HAVE_ENOUGH_DATA: "\u53EF\u7528\u6578\u64DA\u8DB3\u4EE5\u958B\u59CB\u64AD\u653E",
              NETWORK_EMPTY: "\u97F3\u983B/\u8996\u983B\u5C1A\u672A\u521D\u59CB\u5316",
              NETWORK_IDLE: "\u97F3\u983B/\u8996\u983B\u662F\u6D3B\u52D5\u7684\u4E14\u5DF2\u9078\u53D6\u8CC7\u6E90\uFF0C\u4F46\u4E26\u672A\u4F7F\u7528\u7DB2\u7D61",
              NETWORK_LOADING: "\u700F\u89BD\u5668\u6B63\u5728\u4E0B\u8F09\u6578\u64DA",
              NETWORK_NO_SOURCE: "\u672A\u627E\u5230\u97F3\u983B/\u8996\u983B\u4F86\u6E90",
              MEDIA_ERR_ABORTED: "\u53D6\u56DE\u904E\u7A0B\u88AB\u7528\u6236\u4E2D\u6B62",
              MEDIA_ERR_NETWORK: "\u7576\u4E0B\u8F09\u6642\u767C\u751F\u932F\u8AA4",
              MEDIA_ERR_DECODE: "\u7576\u89E3\u78BC\u6642\u767C\u751F\u932F\u8AA4",
              MEDIA_ERR_SRC_NOT_SUPPORTED: "\u4E0D\u652F\u6301\u7684\u97F3\u983B/\u8996\u983B\u683C\u5F0F",
              REPLAY: "\u91CD\u64AD",
              ERROR: "\u7DB2\u7D61\u9023\u63A5\u4F3C\u4E4E\u51FA\u73FE\u4E86\u554F\u984C",
              PLAY_TIPS: "\u64AD\u653E",
              PAUSE_TIPS: "\u66AB\u505C",
              PLAYNEXT_TIPS: "\u4E0B\u58F9\u96C6",
              DOWNLOAD_TIPS: "\u4E0B\u8F09",
              ROTATE_TIPS: "\u65CB\u8F49",
              RELOAD_TIPS: "\u91CD\u65B0\u8F09\u5165",
              FULLSCREEN_TIPS: "\u9032\u5165\u5168\u5C4F",
              EXITFULLSCREEN_TIPS: "\u9000\u51FA\u5168\u5C4F",
              CSSFULLSCREEN_TIPS: "\u9032\u5165\u6A23\u5F0F\u5168\u5C4F",
              EXITCSSFULLSCREEN_TIPS: "\u9000\u51FA\u6A23\u5F0F\u5168\u5C4F",
              TEXTTRACK: "\u5B57\u5E55",
              PIP: "\u756B\u4E2D\u756B",
              MINIPLAYER: "\u8FF7\u59B3\u64AD\u653E\u5668",
              SCREENSHOT: "\u622A\u5716",
              LIVE: "\u6B63\u5728\u76F4\u64AD",
              OFF: "\u95DC\u9589",
              MINIPLAYER_DRAG: "\u9EDE\u64CA\u6309\u4F4F\u53EF\u62D6\u52D5\u8996\u983B",
              AIRPLAY_TIPS: "\u9694\u7A7A\u64AD\u653E"
            };
            lang["jp"] = {
              HAVE_NOTHING: "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA\u304C\u6E96\u5099\u3067\u304D\u3066\u3044\u308B\u304B\u60C5\u5831\u304C\u3042\u308A\u307E\u305B\u3093",
              HAVE_METADATA: "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA\u306E\u30E1\u30BF\u30C7\u30FC\u30BF\u306F\u6E96\u5099\u3067\u304D\u3066\u3044\u307E\u3059",
              HAVE_CURRENT_DATA: "\u73FE\u5728\u306E\u518D\u751F\u4F4D\u7F6E\u306B\u95A2\u3059\u308B\u30C7\u30FC\u30BF\u306F\u5229\u7528\u53EF\u80FD\u3067\u3059\u304C\u3001\u6B21\u306E\u30D5\u30EC\u30FC\u30E0/\u30DF\u30EA\u79D2\u3092\u518D\u751F\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093",
              HAVE_FUTURE_DATA: "\u73FE\u5728\u3001\u5C11\u306A\u304F\u3068\u3082\u6B21\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u30C7\u30FC\u30BF\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059",
              HAVE_ENOUGH_DATA: "\u5229\u7528\u53EF\u80FD\u306A\u30C7\u30FC\u30BF\u306F\u518D\u751F\u3092\u958B\u59CB\u3059\u308B\u306E\u306B\u5341\u5206\u3067\u3059",
              NETWORK_EMPTY: "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA\u304C\u521D\u671F\u5316\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
              NETWORK_IDLE: "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA\u306F\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u30EA\u30BD\u30FC\u30B9\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u304C\u4F7F\u7528\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
              NETWORK_LOADING: "\u30D6\u30E9\u30A6\u30B6\u30FC\u306F\u30C7\u30FC\u30BF\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u3044\u307E\u3059",
              NETWORK_NO_SOURCE: "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA \u306E\u30BD\u30FC\u30B9\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093",
              MEDIA_ERR_ABORTED: "\u30E6\u30FC\u30B6\u30FC\u306B\u3088\u3063\u3066\u30D5\u30A7\u30C3\u30C1\u30D7\u30ED\u30BB\u30B9\u304C\u4E2D\u6B62\u3055\u308C\u307E\u3057\u305F",
              MEDIA_ERR_NETWORK: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
              MEDIA_ERR_DECODE: "\u30C7\u30B3\u30FC\u30C9\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
              MEDIA_ERR_SRC_NOT_SUPPORTED: "\u30AA\u30FC\u30C7\u30A3\u30AA/\u30D3\u30C7\u30AA \u306E\u5F62\u5F0F\u304C\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093",
              REPLAY: "\u30EA\u30D7\u30EC\u30A4",
              ERROR: "\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u306E\u63A5\u7D9A\u306B\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F",
              PLAY_TIPS: "\u30D7\u30EC\u30A4",
              PAUSE_TIPS: "\u4E00\u6642\u505C\u6B62",
              PLAYNEXT_TIPS: "\u6B21\u3092\u30D7\u30EC\u30A4",
              DOWNLOAD_TIPS: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",
              ROTATE_TIPS: "\u56DE\u8EE2",
              RELOAD_TIPS: "\u518D\u8AAD\u307F\u8FBC\u307F",
              FULLSCREEN_TIPS: "\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3",
              EXITFULLSCREEN_TIPS: "\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u3092\u7D42\u4E86",
              CSSFULLSCREEN_TIPS: "\u30B7\u30A2\u30BF\u30FC\u30E2\u30FC\u30C9",
              EXITCSSFULLSCREEN_TIPS: "\u30B7\u30A2\u30BF\u30FC\u30E2\u30FC\u30C9\u3092\u7D42\u4E86",
              TEXTTRACK: "\u5B57\u5E55",
              PIP: "\u30DF\u30CB\u30D7\u30EC\u30FC\u30E4\u30FC",
              MINIPLAYER: "\u30DF\u30CB\u30D7\u30EC\u30FC\u30E4\u30FC",
              SCREENSHOT: "\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8",
              LIVE: "\u751F\u653E\u9001",
              OFF: "\u30AA\u30D5",
              MINIPLAYER_DRAG: "\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u50CD\u753B\u3092\u30C9\u30E9\u30C3\u30B0\u3059\u308B",
              AIRPLAY_TIPS: "\u9694\u7A7A\u653E\u9001"
            };
            Object.defineProperty(player, "lang", {
              get: function get() {
                if (player.config) {
                  return lang[player.config.lang] || lang["en"];
                } else {
                  return lang["en"];
                }
              },
              set: function set(value) {
                if ((0, _util.typeOf)(value) === "Object") {
                  Object.keys(value).forEach(function(key) {
                    lang[key] = value[key];
                  });
                }
              }
            });
          };
          exports2.default = {
            name: "s_i18n",
            method: s_i18n
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          var _eventEmitter = __webpack_require__(12);
          var _eventEmitter2 = _interopRequireDefault(_eventEmitter);
          var _util = __webpack_require__(0);
          var _error = __webpack_require__(4);
          var _error2 = _interopRequireDefault(_error);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var Proxy2 = function() {
            function Proxy3(options) {
              var _this = this;
              _classCallCheck(this, Proxy3);
              this._hasStart = false;
              this.videoConfig = {
                controls: !!options.isShowControl,
                autoplay: options.autoplay,
                playsinline: options.playsinline,
                "webkit-playsinline": options.playsinline,
                "x5-playsinline": options.playsinline,
                "x5-video-player-type": options["x5-video-player-type"] || options["x5VideoPlayerType"],
                "x5-video-player-fullscreen": options["x5-video-player-fullscreen"] || options["x5VideoPlayerFullscreen"],
                "x5-video-orientation": options["x5-video-orientation"] || options["x5VideoOrientation"],
                airplay: options["airplay"],
                "webkit-airplay": options["airplay"],
                tabindex: 2,
                mediaType: options.mediaType || "video"
              };
              if (options.muted) {
                this.videoConfig.muted = "muted";
              }
              if (options.loop) {
                this.videoConfig.loop = "loop";
              }
              var textTrackDom = "";
              this.textTrackShowDefault = true;
              if (options.nativeTextTrack && Array.isArray(options.nativeTextTrack)) {
                if (options.nativeTextTrack.length > 0 && !options.nativeTextTrack.some(function(track) {
                  return track.default;
                })) {
                  options.nativeTextTrack[0].default = true;
                  this.textTrackShowDefault = false;
                }
                options.nativeTextTrack.some(function(track) {
                  if (track.src && track.label && track.default) {
                    textTrackDom += '<track src="' + track.src + '" ';
                    if (track.kind) {
                      textTrackDom += 'kind="' + track.kind + '" ';
                    }
                    textTrackDom += 'label="' + track.label + '" ';
                    if (track.srclang) {
                      textTrackDom += 'srclang="' + track.srclang + '" ';
                    }
                    textTrackDom += (track.default ? "default" : "") + ">";
                    return true;
                  }
                });
                this.videoConfig.crossorigin = "anonymous";
              }
              if (options.textTrackStyle) {
                var style = document.createElement("style");
                this.textTrackStyle = style;
                document.head.appendChild(style);
                var styleStr = "";
                for (var index in options.textTrackStyle) {
                  styleStr += index + ": " + options.textTrackStyle[index] + ";";
                }
                var wrap = options.id ? "#" + options.id : options.el.id ? "#" + options.el.id : "." + options.el.className;
                if (style.sheet.insertRule) {
                  style.sheet.insertRule(wrap + " video::cue { " + styleStr + " }", 0);
                } else if (style.sheet.addRule) {
                  style.sheet.addRule(wrap + " video::cue", styleStr);
                }
              }
              var el = options.el ? options.el : (0, _util.findDom)(document, "#" + options.id);
              var XgVideoProxy = this.constructor.XgVideoProxy;
              if (XgVideoProxy && this.videoConfig.mediaType === XgVideoProxy.mediaType) {
                this.video = new XgVideoProxy(el, options);
              } else {
                this.video = (0, _util.createDom)(this.videoConfig.mediaType, textTrackDom, this.videoConfig, "");
              }
              if (options.videoStyle) {
                Object.keys(options.videoStyle).forEach(function(key) {
                  (0, _util.setStyle)(_this.video, key, options.videoStyle[key]);
                });
              }
              if (!this.textTrackShowDefault && textTrackDom) {
                var trackDoms = this.video.getElementsByTagName("Track");
                trackDoms[0].track.mode = "hidden";
              }
              if (options.autoplay) {
                this.video.autoplay = true;
                if (options.autoplayMuted) {
                  this.video.muted = true;
                }
              }
              this.ev = ["play", "playing", "pause", "ended", "error", "seeking", "seeked", "progress", "timeupdate", "waiting", "canplay", "canplaythrough", "durationchange", "volumechange", "ratechange", "loadedmetadata", "loadeddata", "loadstart"].map(function(item) {
                return _defineProperty({}, item, "on" + item.charAt(0).toUpperCase() + item.slice(1));
              });
              (0, _eventEmitter2.default)(this);
              this._interval = {};
              var lastBuffer = "0,0";
              var self2 = this;
              var defaultVideoEventHandler = function defaultVideoEventHandler2(name) {
                if (!_this) {
                  return;
                }
                if (name === "play") {
                  _this.hasStart = true;
                } else if (name === "canplay") {
                  (0, _util.removeClass)(_this.root, "xgplayer-is-enter");
                } else if (name === "waiting") {
                  _this.inWaitingStart = new Date().getTime();
                } else if (name === "playing") {
                  (0, _util.removeClass)(_this.root, "xgplayer-is-enter");
                  if (_this.inWaitingStart) {
                    _this.inWaitingStart = void 0;
                  }
                }
                if (name === "error") {
                  _this._onError(name);
                } else {
                  _this.emit(name, _this);
                }
                if (_this.hasOwnProperty("_interval")) {
                  if (["ended", "error", "timeupdate"].indexOf(name) < 0) {
                    (0, _util._clearInterval)(_this, "bufferedChange");
                    (0, _util._setInterval)(_this, "bufferedChange", function() {
                      if (this.video && this.video.buffered) {
                        var curBuffer = [];
                        for (var i = 0, len = this.video.buffered.length; i < len; i++) {
                          curBuffer.push([this.video.buffered.start(i), this.video.buffered.end(i)]);
                        }
                        if (curBuffer.toString() !== lastBuffer) {
                          lastBuffer = curBuffer.toString();
                          this.emit("bufferedChange", curBuffer);
                        }
                      }
                    }, 200);
                  } else {
                    if (name !== "timeupdate") {
                      (0, _util._clearInterval)(_this, "bufferedChange");
                    }
                  }
                }
              };
              var videoEventHandler = function videoEventHandler2(name) {
                if (options.videoEventMiddleware && typeof options.videoEventMiddleware[name] === "function") {
                  options.videoEventMiddleware[name].call(_this, _this, name, defaultVideoEventHandler);
                } else {
                  defaultVideoEventHandler.call(_this, name);
                }
              };
              this.ev.forEach(function(item) {
                self2.evItem = Object.keys(item)[0];
                var name = Object.keys(item)[0];
                self2.video.addEventListener(Object.keys(item)[0], videoEventHandler.bind(self2, name));
              });
            }
            _createClass(Proxy3, [{
              key: "_onError",
              value: function _onError(name) {
                if (this.video && this.video.error) {
                  this.emit(name, new _error2.default("other", this.currentTime, this.duration, this.networkState, this.readyState, this.currentSrc, this.src, this.ended, {
                    line: 162,
                    msg: this.error,
                    handle: "Constructor"
                  }, this.video.error.code, this.video.error));
                }
              }
            }, {
              key: "destroy",
              value: function destroy() {
                if (this.textTrackStyle) {
                  this.textTrackStyle.parentNode.removeChild(this.textTrackStyle);
                }
              }
            }, {
              key: "play",
              value: function play() {
                return this.video.play();
              }
            }, {
              key: "pause",
              value: function pause() {
                this.video.pause();
              }
            }, {
              key: "canPlayType",
              value: function canPlayType(type) {
                return this.video.canPlayType(type);
              }
            }, {
              key: "getBufferedRange",
              value: function getBufferedRange(buffered) {
                var range = [0, 0];
                var video = this.video;
                if (!buffered)
                  buffered = video.buffered;
                var currentTime = video.currentTime;
                if (buffered) {
                  for (var i = 0, len = buffered.length; i < len; i++) {
                    range[0] = buffered.start(i);
                    range[1] = buffered.end(i);
                    if (range[0] <= currentTime && currentTime <= range[1]) {
                      break;
                    }
                  }
                }
                if (range[0] - currentTime <= 0 && currentTime - range[1] <= 0) {
                  return range;
                } else {
                  return [0, 0];
                }
              }
            }, {
              key: "proxyOn",
              value: function proxyOn(event, fn) {
                (0, _util.on)(this, event, fn, "destroy");
              }
            }, {
              key: "proxyOnce",
              value: function proxyOnce(event, fn) {
                (0, _util.once)(this, event, fn, "destroy");
              }
            }, {
              key: "hasStart",
              get: function get() {
                return this._hasStart;
              },
              set: function set(bool) {
                if (typeof bool === "boolean" && bool === true && !this._hasStart) {
                  this._hasStart = true;
                  this.emit("hasstart");
                }
              }
            }, {
              key: "autoplay",
              set: function set(isTrue) {
                if (this.video) {
                  this.video.autoplay = isTrue;
                }
              },
              get: function get() {
                if (this.video) {
                  return this.video.autoplay;
                } else {
                  return false;
                }
              }
            }, {
              key: "buffered",
              get: function get() {
                if (this.video) {
                  return this.video.buffered;
                } else {
                  return void 0;
                }
              }
            }, {
              key: "buffered2",
              get: function get() {
                return (0, _util.getBuffered2)(this.video.buffered);
              }
            }, {
              key: "crossOrigin",
              get: function get() {
                if (this.video) {
                  return this.video.crossOrigin;
                } else {
                  return false;
                }
              },
              set: function set(isTrue) {
                if (this.video) {
                  this.video.crossOrigin = isTrue;
                }
              }
            }, {
              key: "currentSrc",
              get: function get() {
                if (this.video) {
                  return this.video.currentSrc;
                } else {
                  return void 0;
                }
              }
            }, {
              key: "currentTime",
              get: function get() {
                if (this.video) {
                  return this.video.currentTime || 0;
                } else {
                  return 0;
                }
              },
              set: function set(time) {
                var _this2 = this;
                if (typeof isFinite === "function" && !isFinite(time))
                  return;
                if ((0, _util.hasClass)(this.root, "xgplayer-ended")) {
                  this.once("playing", function() {
                    _this2.video.currentTime = time;
                  });
                  this.replay();
                } else {
                  this.video.currentTime = time;
                }
                this.emit("currentTimeChange", time);
              }
            }, {
              key: "defaultMuted",
              get: function get() {
                if (this.video) {
                  return this.video.defaultMuted;
                } else {
                  return false;
                }
              },
              set: function set(isTrue) {
                if (this.video) {
                  this.video.defaultMuted = isTrue;
                }
              }
            }, {
              key: "duration",
              get: function get() {
                if (this.config.duration) {
                  if (this.video)
                    return Math.min(this.config.duration, this.video.duration);
                  else
                    return this.config.duration;
                }
                if (!this.video)
                  return null;
                return this.video.duration;
              }
            }, {
              key: "ended",
              get: function get() {
                if (this.video) {
                  return this.video.ended || false;
                } else {
                  return true;
                }
              }
            }, {
              key: "error",
              get: function get() {
                var err = this.video.error;
                if (!err) {
                  return null;
                }
                var status = [{
                  en: "MEDIA_ERR_ABORTED",
                  cn: "\u53D6\u56DE\u8FC7\u7A0B\u88AB\u7528\u6237\u4E2D\u6B62"
                }, {
                  en: "MEDIA_ERR_NETWORK",
                  cn: "\u5F53\u4E0B\u8F7D\u65F6\u53D1\u751F\u9519\u8BEF"
                }, {
                  en: "MEDIA_ERR_DECODE",
                  cn: "\u5F53\u89E3\u7801\u65F6\u53D1\u751F\u9519\u8BEF"
                }, {
                  en: "MEDIA_ERR_SRC_NOT_SUPPORTED",
                  cn: "\u4E0D\u652F\u6301\u97F3\u9891/\u89C6\u9891"
                }];
                return this.lang ? this.lang[status[err.code - 1].en] : status[err.code - 1].en;
              }
            }, {
              key: "loop",
              get: function get() {
                if (this.video) {
                  return this.video.loop;
                } else {
                  return false;
                }
              },
              set: function set(isTrue) {
                if (this.video) {
                  this.video.loop = isTrue;
                }
              }
            }, {
              key: "muted",
              get: function get() {
                if (this.video) {
                  return this.video.muted;
                } else {
                  return false;
                }
              },
              set: function set(isTrue) {
                if (this.video) {
                  this.video.muted = isTrue;
                }
              }
            }, {
              key: "networkState",
              get: function get() {
                var status = [{
                  en: "NETWORK_EMPTY",
                  cn: "\u97F3\u9891/\u89C6\u9891\u5C1A\u672A\u521D\u59CB\u5316"
                }, {
                  en: "NETWORK_IDLE",
                  cn: "\u97F3\u9891/\u89C6\u9891\u662F\u6D3B\u52A8\u7684\u4E14\u5DF2\u9009\u53D6\u8D44\u6E90\uFF0C\u4F46\u5E76\u672A\u4F7F\u7528\u7F51\u7EDC"
                }, {
                  en: "NETWORK_LOADING",
                  cn: "\u6D4F\u89C8\u5668\u6B63\u5728\u4E0B\u8F7D\u6570\u636E"
                }, {
                  en: "NETWORK_NO_SOURCE",
                  cn: "\u672A\u627E\u5230\u97F3\u9891/\u89C6\u9891\u6765\u6E90"
                }];
                return this.lang ? this.lang[status[this.video.networkState].en] : status[this.video.networkState].en;
              }
            }, {
              key: "paused",
              get: function get() {
                return (0, _util.hasClass)(this.root, "xgplayer-pause");
              }
            }, {
              key: "playbackRate",
              get: function get() {
                if (this.video) {
                  return this.video.playbackRate;
                } else {
                  return 1;
                }
              },
              set: function set(rate) {
                if (this.video) {
                  this.video.playbackRate = rate;
                }
              }
            }, {
              key: "played",
              get: function get() {
                if (this.video) {
                  return this.video.played;
                } else {
                  return void 0;
                }
              }
            }, {
              key: "preload",
              get: function get() {
                if (this.video) {
                  return this.video.preload;
                } else {
                  return false;
                }
              },
              set: function set(isTrue) {
                if (this.video) {
                  this.video.preload = isTrue;
                }
              }
            }, {
              key: "readyState",
              get: function get() {
                var status = [{
                  en: "HAVE_NOTHING",
                  cn: "\u6CA1\u6709\u5173\u4E8E\u97F3\u9891/\u89C6\u9891\u662F\u5426\u5C31\u7EEA\u7684\u4FE1\u606F"
                }, {
                  en: "HAVE_METADATA",
                  cn: "\u5173\u4E8E\u97F3\u9891/\u89C6\u9891\u5C31\u7EEA\u7684\u5143\u6570\u636E"
                }, {
                  en: "HAVE_CURRENT_DATA",
                  cn: "\u5173\u4E8E\u5F53\u524D\u64AD\u653E\u4F4D\u7F6E\u7684\u6570\u636E\u662F\u53EF\u7528\u7684\uFF0C\u4F46\u6CA1\u6709\u8DB3\u591F\u7684\u6570\u636E\u6765\u64AD\u653E\u4E0B\u4E00\u5E27/\u6BEB\u79D2"
                }, {
                  en: "HAVE_FUTURE_DATA",
                  cn: "\u5F53\u524D\u53CA\u81F3\u5C11\u4E0B\u4E00\u5E27\u7684\u6570\u636E\u662F\u53EF\u7528\u7684"
                }, {
                  en: "HAVE_ENOUGH_DATA",
                  cn: "\u53EF\u7528\u6570\u636E\u8DB3\u4EE5\u5F00\u59CB\u64AD\u653E"
                }];
                return this.lang ? this.lang[status[this.video.readyState].en] : status[this.video.readyState];
              }
            }, {
              key: "seekable",
              get: function get() {
                if (this.video) {
                  return this.video.seekable;
                } else {
                  return false;
                }
              }
            }, {
              key: "seeking",
              get: function get() {
                if (this.video) {
                  return this.video.seeking;
                } else {
                  return false;
                }
              }
            }, {
              key: "src",
              get: function get() {
                if (this.video) {
                  return this.video.src;
                } else {
                  return void 0;
                }
              },
              set: function set(url) {
                if (!(0, _util.hasClass)(this.root, "xgplayer-ended")) {
                  this.emit("urlchange", this.video.src);
                }
                (0, _util.removeClass)(this.root, "xgplayer-ended xgplayer-is-replay xgplayer-is-error");
                this.video.pause();
                this.emit("pause");
                this.video.src = url;
                this.emit("srcChange");
              }
            }, {
              key: "poster",
              set: function set(posterUrl) {
                var poster = (0, _util.findDom)(this.root, ".xgplayer-poster");
                if (poster) {
                  poster.style.backgroundImage = "url(" + posterUrl + ")";
                }
              }
            }, {
              key: "volume",
              get: function get() {
                if (this.video) {
                  return this.video.volume;
                } else {
                  return 1;
                }
              },
              set: function set(vol) {
                if (this.video) {
                  this.video.volume = vol;
                }
              }
            }, {
              key: "fullscreen",
              get: function get() {
                return (0, _util.hasClass)(this.root, "xgplayer-is-fullscreen") || (0, _util.hasClass)(this.root, "xgplayer-fullscreen-active");
              }
            }, {
              key: "bullet",
              get: function get() {
                return (0, _util.findDom)(this.root, "xg-danmu") ? (0, _util.hasClass)((0, _util.findDom)(this.root, "xg-danmu"), "xgplayer-has-danmu") : false;
              }
            }, {
              key: "textTrack",
              get: function get() {
                return (0, _util.hasClass)(this.root, "xgplayer-is-textTrack");
              }
            }, {
              key: "pip",
              get: function get() {
                return (0, _util.hasClass)(this.root, "xgplayer-pip-active");
              }
            }, {
              key: "isMiniPlayer",
              get: function get() {
                return (0, _util.hasClass)(this.root, "xgplayer-miniplayer-active");
              }
            }]);
            return Proxy3;
          }();
          exports2.default = Proxy2;
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var d = __webpack_require__(13), callable = __webpack_require__(30), apply = Function.prototype.apply, call = Function.prototype.call, create = Object.create, defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, hasOwnProperty2 = Object.prototype.hasOwnProperty, descriptor = { configurable: true, enumerable: false, writable: true }, on, once, off, emit, methods, descriptors, base;
          on = function(type, listener) {
            var data;
            callable(listener);
            if (!hasOwnProperty2.call(this, "__ee__")) {
              data = descriptor.value = create(null);
              defineProperty(this, "__ee__", descriptor);
              descriptor.value = null;
            } else {
              data = this.__ee__;
            }
            if (!data[type])
              data[type] = listener;
            else if (typeof data[type] === "object")
              data[type].push(listener);
            else
              data[type] = [data[type], listener];
            return this;
          };
          once = function(type, listener) {
            var once2, self2;
            callable(listener);
            self2 = this;
            on.call(this, type, once2 = function() {
              off.call(self2, type, once2);
              apply.call(listener, this, arguments);
            });
            once2.__eeOnceListener__ = listener;
            return this;
          };
          off = function(type, listener) {
            var data, listeners, candidate, i;
            callable(listener);
            if (!hasOwnProperty2.call(this, "__ee__"))
              return this;
            data = this.__ee__;
            if (!data[type])
              return this;
            listeners = data[type];
            if (typeof listeners === "object") {
              for (i = 0; candidate = listeners[i]; ++i) {
                if (candidate === listener || candidate.__eeOnceListener__ === listener) {
                  if (listeners.length === 2)
                    data[type] = listeners[i ? 0 : 1];
                  else
                    listeners.splice(i, 1);
                }
              }
            } else {
              if (listeners === listener || listeners.__eeOnceListener__ === listener) {
                delete data[type];
              }
            }
            return this;
          };
          emit = function(type) {
            var i, l, listener, listeners, args;
            if (!hasOwnProperty2.call(this, "__ee__"))
              return;
            listeners = this.__ee__[type];
            if (!listeners)
              return;
            if (typeof listeners === "object") {
              l = arguments.length;
              args = new Array(l - 1);
              for (i = 1; i < l; ++i)
                args[i - 1] = arguments[i];
              listeners = listeners.slice();
              for (i = 0; listener = listeners[i]; ++i) {
                apply.call(listener, this, args);
              }
            } else {
              switch (arguments.length) {
                case 1:
                  call.call(listeners, this);
                  break;
                case 2:
                  call.call(listeners, this, arguments[1]);
                  break;
                case 3:
                  call.call(listeners, this, arguments[1], arguments[2]);
                  break;
                default:
                  l = arguments.length;
                  args = new Array(l - 1);
                  for (i = 1; i < l; ++i) {
                    args[i - 1] = arguments[i];
                  }
                  apply.call(listeners, this, args);
              }
            }
          };
          methods = {
            on,
            once,
            off,
            emit
          };
          descriptors = {
            on: d(on),
            once: d(once),
            off: d(off),
            emit: d(emit)
          };
          base = defineProperties({}, descriptors);
          module2.exports = exports2 = function(o) {
            return o == null ? create(base) : defineProperties(Object(o), descriptors);
          };
          exports2.methods = methods;
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isValue = __webpack_require__(6), isPlainFunction = __webpack_require__(14), assign = __webpack_require__(18), normalizeOpts = __webpack_require__(26), contains = __webpack_require__(27);
          var d = module2.exports = function(dscr, value) {
            var c, e, w, options, desc;
            if (arguments.length < 2 || typeof dscr !== "string") {
              options = value;
              value = dscr;
              dscr = null;
            } else {
              options = arguments[2];
            }
            if (isValue(dscr)) {
              c = contains.call(dscr, "c");
              e = contains.call(dscr, "e");
              w = contains.call(dscr, "w");
            } else {
              c = w = true;
              e = false;
            }
            desc = { value, configurable: c, enumerable: e, writable: w };
            return !options ? desc : assign(normalizeOpts(options), desc);
          };
          d.gs = function(dscr, get, set) {
            var c, e, options, desc;
            if (typeof dscr !== "string") {
              options = set;
              set = get;
              get = dscr;
              dscr = null;
            } else {
              options = arguments[3];
            }
            if (!isValue(get)) {
              get = void 0;
            } else if (!isPlainFunction(get)) {
              options = get;
              get = set = void 0;
            } else if (!isValue(set)) {
              set = void 0;
            } else if (!isPlainFunction(set)) {
              options = set;
              set = void 0;
            }
            if (isValue(dscr)) {
              c = contains.call(dscr, "c");
              e = contains.call(dscr, "e");
            } else {
              c = true;
              e = false;
            }
            desc = { get, set, configurable: c, enumerable: e };
            return !options ? desc : assign(normalizeOpts(options), desc);
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isFunction = __webpack_require__(15);
          var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;
          module2.exports = function(value) {
            if (!isFunction(value))
              return false;
            if (classRe.test(functionToString.call(value)))
              return false;
            return true;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isPrototype = __webpack_require__(16);
          module2.exports = function(value) {
            if (typeof value !== "function")
              return false;
            if (!hasOwnProperty.call(value, "length"))
              return false;
            try {
              if (typeof value.length !== "number")
                return false;
              if (typeof value.call !== "function")
                return false;
              if (typeof value.apply !== "function")
                return false;
            } catch (error) {
              return false;
            }
            return !isPrototype(value);
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isObject = __webpack_require__(17);
          module2.exports = function(value) {
            if (!isObject(value))
              return false;
            try {
              if (!value.constructor)
                return false;
              return value.constructor.prototype === value;
            } catch (error) {
              return false;
            }
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isValue = __webpack_require__(6);
          var possibleTypes = { "object": true, "function": true, "undefined": true };
          module2.exports = function(value) {
            if (!isValue(value))
              return false;
            return hasOwnProperty.call(possibleTypes, typeof value);
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          module2.exports = __webpack_require__(19)() ? Object.assign : __webpack_require__(20);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          module2.exports = function() {
            var assign = Object.assign, obj;
            if (typeof assign !== "function")
              return false;
            obj = { foo: "raz" };
            assign(obj, { bar: "dwa" }, { trzy: "trzy" });
            return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var keys = __webpack_require__(21), value = __webpack_require__(25), max = Math.max;
          module2.exports = function(dest, src) {
            var error, i, length = max(arguments.length, 2), assign;
            dest = Object(value(dest));
            assign = function(key) {
              try {
                dest[key] = src[key];
              } catch (e) {
                if (!error)
                  error = e;
              }
            };
            for (i = 1; i < length; ++i) {
              src = arguments[i];
              keys(src).forEach(assign);
            }
            if (error !== void 0)
              throw error;
            return dest;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          module2.exports = __webpack_require__(22)() ? Object.keys : __webpack_require__(23);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          module2.exports = function() {
            try {
              Object.keys("primitive");
              return true;
            } catch (e) {
              return false;
            }
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isValue = __webpack_require__(3);
          var keys = Object.keys;
          module2.exports = function(object) {
            return keys(isValue(object) ? Object(object) : object);
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          module2.exports = function() {
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isValue = __webpack_require__(3);
          module2.exports = function(value) {
            if (!isValue(value))
              throw new TypeError("Cannot use null or undefined");
            return value;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isValue = __webpack_require__(3);
          var forEach = Array.prototype.forEach, create = Object.create;
          var process = function(src, obj) {
            var key;
            for (key in src)
              obj[key] = src[key];
          };
          module2.exports = function(opts1) {
            var result = create(null);
            forEach.call(arguments, function(options) {
              if (!isValue(options))
                return;
              process(Object(options), result);
            });
            return result;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          module2.exports = __webpack_require__(28)() ? String.prototype.contains : __webpack_require__(29);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var str = "razdwatrzy";
          module2.exports = function() {
            if (typeof str.contains !== "function")
              return false;
            return str.contains("dwa") === true && str.contains("foo") === false;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var indexOf = String.prototype.indexOf;
          module2.exports = function(searchString) {
            return indexOf.call(this, searchString, arguments[1]) > -1;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          module2.exports = function(fn) {
            if (typeof fn !== "function")
              throw new TypeError(fn + " is not a function");
            return fn;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var value = __webpack_require__(32), hasOwnProperty2 = Object.prototype.hasOwnProperty;
          module2.exports = function(emitter) {
            var type = arguments[1], data;
            value(emitter);
            if (type !== void 0) {
              data = hasOwnProperty2.call(emitter, "__ee__") && emitter.__ee__;
              if (!data)
                return;
              if (data[type])
                delete data[type];
              return;
            }
            if (hasOwnProperty2.call(emitter, "__ee__"))
              delete emitter.__ee__;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isObject = __webpack_require__(33);
          module2.exports = function(value) {
            if (!isObject(value))
              throw new TypeError(value + " is not an Object");
            return value;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var isValue = __webpack_require__(3);
          var map = { function: true, object: true };
          module2.exports = function(value) {
            return isValue(value) && map[typeof value] || false;
          };
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(35);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default{background:#000;width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer-skin-default *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer-skin-default.xgplayer-rotate-fullscreen{position:absolute;top:0;left:100%;bottom:0;right:0;height:100vw!important;width:100vh!important;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.xgplayer-skin-default.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer-skin-default.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer-skin-default video{width:100%;height:100%;outline:none}.xgplayer-skin-default .xgplayer-none{display:none}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}.xgplayer-skin-default .xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.75),rgba(0,0,0,.75));z-index:10}.xgplayer-skin-default.xgplayer-inactive .xgplayer-controls,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-progress,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-time,.xgplayer-skin-default.xgplayer-no-controls .xgplayer-controls,.xgplayer-skin-default.xgplayer-nostart .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-live{display:block}.xgplayer-skin-default .xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer-skin-default .xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-skin-default .xgplayer-icon svg{position:absolute}.xgplayer-skin-default .xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-skin-default.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-skin-default .xgplayer-screen-container{display:block;width:100%}", ""]);
        },
        function(module2, exports2) {
          module2.exports = function(css) {
            var location2 = typeof window !== "undefined" && window.location;
            if (!location2) {
              throw new Error("fixUrls requires window.location");
            }
            if (!css || typeof css !== "string") {
              return css;
            }
            var baseUrl = location2.protocol + "//" + location2.host;
            var currentDir = baseUrl + location2.pathname.replace(/\/[^\/]*$/, "/");
            var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
              var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function(o, $1) {
                return $1;
              }).replace(/^'(.*)'$/, function(o, $1) {
                return $1;
              });
              if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
                return fullMatch;
              }
              var newUrl;
              if (unquotedOrigUrl.indexOf("//") === 0) {
                newUrl = unquotedOrigUrl;
              } else if (unquotedOrigUrl.indexOf("/") === 0) {
                newUrl = baseUrl + unquotedOrigUrl;
              } else {
                newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, "");
              }
              return "url(" + JSON.stringify(newUrl) + ")";
            });
            return fixedCss;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var mobile = function mobile2() {
            var player = this;
            var root = player.root;
            var clk = 0;
            var _click_ = void 0;
            var clickedTime = {
              first: "",
              second: ""
            };
            player.onElementTouchend = function(e, element) {
              if (!this.config.closeVideoPreventDefault) {
                e.preventDefault();
              }
              if (!this.config.closeVideoStopPropagation) {
                e.stopPropagation();
              }
              var player2 = this;
              if ((0, _util.hasClass)(root, "xgplayer-inactive")) {
                player2.emit("focus");
              } else {
                player2.emit("blur");
              }
              if (!player2.config.closeVideoTouch && !player2.isTouchMove) {
                var onTouch = function onTouch2() {
                  _click_ = setTimeout(function() {
                    if ((0, _util.hasClass)(player2.root, "xgplayer-nostart")) {
                      return false;
                    } else if (!player2.ended) {
                      if (player2.paused) {
                        var playPromise = player2.play();
                        if (playPromise !== void 0 && playPromise) {
                          playPromise.catch(function(err) {
                          });
                        }
                      } else {
                        player2.pause();
                      }
                    }
                    clk = 0;
                  }, 200);
                };
                if (!player2.config.closeVideoClick) {
                  clk++;
                  if (_click_) {
                    clearTimeout(_click_);
                  }
                  if (clk === 1) {
                    if (player2.config.enableVideoDbltouch) {
                      clickedTime.first = new Date();
                    } else {
                      onTouch();
                    }
                  } else if (clk === 2) {
                    if (player2.config.enableVideoDbltouch) {
                      clickedTime.second = new Date();
                      if (Math.abs(clickedTime.first - clickedTime.second) < 400) {
                        onTouch();
                      } else {
                        clickedTime.first = new Date();
                        clk = 1;
                      }
                    } else {
                      clk = 0;
                    }
                  } else {
                    clk = 0;
                  }
                }
              }
            };
            function onReady(e) {
              player.video.addEventListener("touchend", function(e2) {
                player.onElementTouchend(e2, player.video);
              });
              player.video.addEventListener("touchstart", function() {
                player.isTouchMove = false;
              });
              player.video.addEventListener("touchmove", function() {
                player.isTouchMove = true;
              });
              if (player.config.autoplay) {
                player.start();
              }
            }
            player.once("ready", onReady);
            function onDestroy() {
              player.off("ready", onReady);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "mobile",
            method: mobile
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var pc = function pc2() {
            var player = this;
            if (!player.controls || !player.video)
              return;
            var controls = player.controls;
            var root = player.root;
            var clk = 0;
            var _click_ = void 0;
            player.onElementClick = function(e, element) {
              if (!this.config.closeVideoPreventDefault) {
                e.preventDefault();
              }
              if (!this.config.closeVideoStopPropagation) {
                e.stopPropagation();
              }
              var player2 = this;
              if (!player2.config.closeVideoClick) {
                clk++;
                if (_click_) {
                  clearTimeout(_click_);
                }
                if (clk === 1) {
                  _click_ = setTimeout(function() {
                    if ((0, _util.hasClass)(player2.root, "xgplayer-nostart")) {
                      return false;
                    } else if (!player2.ended) {
                      if (player2.paused) {
                        var playPromise = player2.play();
                        if (playPromise !== void 0 && playPromise) {
                          playPromise.catch(function(err) {
                          });
                        }
                      } else {
                        player2.pause();
                      }
                    }
                    clk = 0;
                  }, 200);
                } else {
                  clk = 0;
                }
              }
            };
            player.video.addEventListener("click", function(e) {
              player.onElementClick(e, player.video);
            }, false);
            player.onElementDblclick = function(e, element) {
              if (!this.config.closeVideoPreventDefault) {
                e.preventDefault();
              }
              if (!this.config.closeVideoStopPropagation) {
                e.stopPropagation();
              }
              var player2 = this;
              if (!player2.config.closeVideoDblclick) {
                var fullscreen = controls.querySelector(".xgplayer-fullscreen");
                if (fullscreen) {
                  var _clk = void 0;
                  if (document.createEvent) {
                    _clk = document.createEvent("Event");
                    _clk.initEvent("click", true, true);
                  } else {
                    _clk = new Event("click");
                  }
                  fullscreen.dispatchEvent(_clk);
                }
              }
            };
            player.video.addEventListener("dblclick", function(e) {
              player.onElementDblclick(e, player.video);
            }, false);
            function onMouseEnter() {
              clearTimeout(player.leavePlayerTimer);
              player.emit("focus", player);
            }
            root.addEventListener("mouseenter", onMouseEnter);
            function onMouseLeave() {
              if (!player.config.closePlayerBlur) {
                player.leavePlayerTimer = setTimeout(function() {
                  player.emit("blur", player);
                }, player.config.leavePlayerTime || 0);
              }
            }
            root.addEventListener("mouseleave", onMouseLeave);
            function onControlMouseEnter(e) {
              if (player.userTimer) {
                clearTimeout(player.userTimer);
              }
            }
            controls.addEventListener("mouseenter", onControlMouseEnter);
            function onControlMouseLeave(e) {
              if (!player.config.closeControlsBlur) {
                player.emit("focus", player);
              }
            }
            controls.addEventListener("mouseleave", onControlMouseLeave);
            function onControlClick(e) {
              e.preventDefault();
              e.stopPropagation();
            }
            controls.addEventListener("click", onControlClick);
            function onReady(e) {
              if (player.config.autoplay) {
                player.start();
              }
            }
            player.once("ready", onReady);
            function onDestroy() {
              root.removeEventListener("mouseenter", onMouseEnter);
              root.removeEventListener("mouseleave", onMouseLeave);
              player.off("ready", onReady);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "pc",
            method: pc
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var start = function start2() {
            var player = this;
            var root = player.root;
            function onCanPlay() {
              player.off("canplay", onCanPlay);
              var playPromise = player.play();
              if (playPromise !== void 0 && playPromise) {
                playPromise.catch(function(err) {
                });
              }
            }
            function onStartBtnClick() {
              if ((0, _util.hasClass)(root, "xgplayer-nostart")) {
                (0, _util.removeClass)(root, "xgplayer-nostart");
                (0, _util.addClass)(root, "xgplayer-is-enter");
                if (typeof root.contains === "function") {
                  if (player.video && player.video.nodeType === 1 && !root.contains(player.video) || player.video && player.video.nodeType !== 1 && player.video.mediaSource === void 0) {
                    player.once("canplay", onCanPlay);
                    player.start();
                  } else {
                    onCanPlay();
                  }
                } else {
                  if (player.video && player.video.nodeType === 1 && !root.querySelector(this.videoConfig.mediaType) || player.video && player.video.nodeType !== 1 && player.video.mediaSource === void 0) {
                    player.once("canplay", onCanPlay);
                    player.start();
                  } else {
                    onCanPlay();
                  }
                }
              } else {
                if (player.paused) {
                  (0, _util.removeClass)(root, "xgplayer-nostart xgplayer-isloading");
                  setTimeout(function() {
                    var playPromise = player.play();
                    if (playPromise !== void 0 && playPromise) {
                      playPromise.catch(function(err) {
                      });
                    }
                  }, 10);
                }
              }
            }
            player.on("startBtnClick", onStartBtnClick);
            function onDestroy() {
              player.off("startBtnClick", onStartBtnClick);
              player.off("canplay", onCanPlay);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "start",
            method: start
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _startPlay = __webpack_require__(41);
          var _startPlay2 = _interopRequireDefault(_startPlay);
          var _startPause = __webpack_require__(42);
          var _startPause2 = _interopRequireDefault(_startPause);
          __webpack_require__(43);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_start = function s_start2() {
            var player = this;
            var root = player.root;
            var btn = (0, _util.createDom)("xg-start", '<div class="xgplayer-icon-play">' + _startPlay2.default + '</div>\n                                      <div class="xgplayer-icon-pause">' + _startPause2.default + "</div>", {}, "xgplayer-start");
            function onPlayerReady(player2) {
              (0, _util.addClass)(player2.root, "xgplayer-skin-default");
              if (player2.config) {
                player2.config.autoplay && !(0, _util.isWeiXin)() && !(0, _util.isUc)() && (0, _util.addClass)(player2.root, "xgplayer-is-enter");
                if (player2.config.lang && player2.config.lang === "en") {
                  (0, _util.addClass)(player2.root, "xgplayer-lang-is-en");
                } else if (player2.config.lang === "jp") {
                  (0, _util.addClass)(player2.root, "xgplayer-lang-is-jp");
                }
                if (!player2.config.enableContextmenu) {
                  player2.video.addEventListener("contextmenu", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                  });
                }
              }
            }
            if (player.config && player.config.hideStartBtn) {
              (0, _util.addClass)(root, "xgplayer-start-hide");
            }
            if (player.isReady) {
              root.appendChild(btn);
              onPlayerReady(player);
            } else {
              player.once("ready", function() {
                root.appendChild(btn);
                onPlayerReady(player);
              });
            }
            player.once("autoplay was prevented", function() {
              (0, _util.removeClass)(player.root, "xgplayer-is-enter");
              (0, _util.addClass)(player.root, "xgplayer-nostart");
            });
            player.once("canplay", function() {
              (0, _util.removeClass)(player.root, "xgplayer-is-enter");
            });
            btn.onclick = function(e) {
              e.preventDefault();
              e.stopPropagation();
              player.userGestureTrigEvent("startBtnClick");
            };
          };
          exports2.default = {
            name: "s_start",
            method: s_start
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">\n  <path transform="translate(15,15) scale(0.04,0.04)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n';
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">\n  <path transform="translate(15,15) scale(0.04 0.04)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(44);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:rgba(0,0,0,.38);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:115;margin:-35px auto auto -35px;cursor:pointer}.xgplayer-skin-default .xgplayer-start div{position:absolute}.xgplayer-skin-default .xgplayer-start div svg{fill:hsla(0,0%,100%,.7)}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-start:hover{opacity:.85}.xgplayer-skin-default.xgplayer-pause.xgplayer-start-hide .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-start-hide .xgplayer-start{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start{display:inline-block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start,.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start .xgplayer-icon-pause{display:none}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var fullscreen = function fullscreen2() {
            var player = this;
            var root = player.root;
            function onFullscreenBtnClick() {
              if (player.config.rotateFullscreen) {
                if ((0, _util.hasClass)(root, "xgplayer-rotate-fullscreen")) {
                  player.exitRotateFullscreen();
                } else {
                  player.getRotateFullscreen();
                }
              } else {
                if ((0, _util.hasClass)(root, "xgplayer-is-fullscreen")) {
                  player.exitFullscreen(root);
                } else {
                  player.getFullscreen(root);
                }
              }
            }
            player.on("fullscreenBtnClick", onFullscreenBtnClick);
            function onFullscreenChange() {
              var fullscreenEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
              if (fullscreenEl && fullscreenEl === root) {
                (0, _util.addClass)(root, "xgplayer-is-fullscreen");
                player.emit("requestFullscreen");
              } else if ((0, _util.hasClass)(root, "xgplayer-is-fullscreen")) {
                (0, _util.removeClass)(root, "xgplayer-is-fullscreen");
                player.emit("exitFullscreen");
              }
              if (player.danmu && typeof player.danmu.resize === "function") {
                player.danmu.resize();
              }
            }
            ;
            ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function(item) {
              document.addEventListener(item, onFullscreenChange);
            });
            player.video.addEventListener("webkitbeginfullscreen", function() {
              (0, _util.addClass)(root, "xgplayer-is-fullscreen");
              player.emit("requestFullscreen");
            });
            player.video.addEventListener("webkitendfullscreen", function() {
              (0, _util.removeClass)(root, "xgplayer-is-fullscreen");
              player.emit("exitFullscreen");
            });
            function onWebkitpresentationmodechanged(e) {
              var mode = player.video.webkitPresentationMode;
              if (mode !== _util.PresentationMode.FULLSCREEN) {
                (0, _util.removeClass)(root, "xgplayer-is-fullscreen");
                player.emit("exitFullscreen");
              }
            }
            (0, _util.checkWebkitSetPresentationMode)(player.video) && player.video.addEventListener("webkitpresentationmodechanged", onWebkitpresentationmodechanged);
            function onDestroy() {
              player.off("fullscreenBtnClick", onFullscreenBtnClick);
              ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach(function(item) {
                document.removeEventListener(item, onFullscreenChange);
              });
              (0, _util.checkWebkitSetPresentationMode)(player.video) && player.video.removeEventListener("webkitpresentationmodechanged", onWebkitpresentationmodechanged);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
            player.getFullscreen = function(el) {
              var player2 = this;
              if (el.requestFullscreen) {
                var fullscreenPromise = el.requestFullscreen();
                if (fullscreenPromise) {
                  fullscreenPromise.catch(function() {
                    player2.emit("fullscreen error");
                  });
                }
              } else if (el.mozRequestFullScreen) {
                el.mozRequestFullScreen();
              } else if (el.webkitRequestFullscreen) {
                el.webkitRequestFullscreen(window.Element.ALLOW_KEYBOARD_INPUT);
              } else if (player2.video.webkitSupportsFullscreen) {
                player2.video.webkitEnterFullscreen();
              } else if (el.msRequestFullscreen) {
                el.msRequestFullscreen();
              } else {
                (0, _util.addClass)(el, "xgplayer-is-cssfullscreen");
              }
            };
            player.exitFullscreen = function(el) {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
              (0, _util.removeClass)(el, "xgplayer-is-cssfullscreen");
            };
            player.getRotateFullscreen = function() {
              var player2 = this;
              document.documentElement.style.width = "100%";
              document.documentElement.style.height = "100%";
              if (player2.config.fluid) {
                player2.root.style["padding-top"] = "";
                player2.root.style["max-width"] = "unset";
              }
              if (player2.root && !(0, _util.hasClass)(player2.root, "xgplayer-rotate-fullscreen")) {
                (0, _util.addClass)(player2.root, "xgplayer-rotate-fullscreen");
              }
              player2.emit("getRotateFullscreen");
            };
            player.exitRotateFullscreen = function() {
              var player2 = this;
              document.documentElement.style.width = "unset";
              document.documentElement.style.height = "unset";
              if (player2.config.fluid) {
                player2.root.style["width"] = "100%";
                player2.root.style["height"] = "0";
                player2.root.style["padding-top"] = player2.config.height * 100 / player2.config.width + "%";
                player2.root.style["max-width"] = "100%";
              }
              if (player2.root && (0, _util.hasClass)(player2.root, "xgplayer-rotate-fullscreen")) {
                (0, _util.removeClass)(player2.root, "xgplayer-rotate-fullscreen");
              }
              player2.emit("exitRotateFullscreen");
            };
          };
          exports2.default = {
            name: "fullscreen",
            method: fullscreen
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var play = function play2() {
            var player = this;
            function onPlayBtnClick() {
              if (!player.config.allowPlayAfterEnded && player.ended) {
                return;
              }
              if ((0, _util.hasClass)(player.root, "xgplayer-nostart")) {
                player.start();
              }
              if (player.paused) {
                var playPromise = player.play();
                if (playPromise !== void 0 && playPromise) {
                  playPromise.catch(function(err) {
                  });
                }
              } else {
                player.pause();
              }
            }
            player.on("playBtnClick", onPlayBtnClick);
            function onDestroy() {
              player.off("playBtnClick", onPlayBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "play",
            method: play
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var replay = function replay2() {
            var player = this;
            var root = player.root;
            function onReplayBtnClick() {
              (0, _util.removeClass)(root, "xgplayer-is-replay");
              player.replay();
            }
            player.on("replayBtnClick", onReplayBtnClick);
            function onEnded() {
              if (!player.config.loop) {
                (0, _util.addClass)(root, "xgplayer-is-replay");
              }
            }
            player.on("ended", onEnded);
            function onDestroy() {
              player.off("replayBtnClick", onReplayBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "replay",
            method: replay
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _play = __webpack_require__(49);
          var _play2 = _interopRequireDefault(_play);
          var _pause = __webpack_require__(50);
          var _pause2 = _interopRequireDefault(_pause);
          __webpack_require__(51);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_play = function s_play2() {
            var player = this;
            var playBtn = player.config.playBtn ? player.config.playBtn : {};
            var btn = void 0;
            if (playBtn.type === "img") {
              btn = (0, _util.createImgBtn)("play", playBtn.url.play, playBtn.width, playBtn.height);
            } else {
              btn = (0, _util.createDom)("xg-play", '<xg-icon class="xgplayer-icon">\n                                      <div class="xgplayer-icon-play">' + _play2.default + '</div>\n                                      <div class="xgplayer-icon-pause">' + _pause2.default + "</div>\n                                     </xg-icon>", {}, "xgplayer-play");
            }
            var tipsText = {};
            tipsText.play = player.lang.PLAY_TIPS;
            tipsText.pause = player.lang.PAUSE_TIPS;
            var tips = (0, _util.createDom)("xg-tips", '<span class="xgplayer-tip-play">' + tipsText.play + '</span>\n                                        <span class="xgplayer-tip-pause">' + tipsText.pause + "</span>", {}, "xgplayer-tips");
            btn.appendChild(tips);
            player.once("ready", function() {
              if (player.controls) {
                player.controls.appendChild(btn);
              }
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("playBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_play",
            method: s_play
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n';
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(52);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:40px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(54);
          var s_poster = function s_poster2() {
            var player = this;
            var root = player.root;
            if (!player.config.poster) {
              return;
            }
            var poster = (0, _util.createDom)("xg-poster", "", {}, "xgplayer-poster");
            poster.style.backgroundImage = "url(" + player.config.poster + ")";
            root.appendChild(poster);
          };
          exports2.default = {
            name: "s_poster",
            method: s_poster
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(55);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-poster{display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-skin-default.xgplayer-nostart .xgplayer-poster{display:block}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(57);
          var s_flex = function s_flex2() {
            var player = this;
            var playceholder = (0, _util.createDom)("xg-placeholder", "", {}, "xgplayer-placeholder");
            player.controls.appendChild(playceholder);
          };
          exports2.default = {
            name: "s_flex",
            method: s_flex
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(58);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _requestFull = __webpack_require__(60);
          var _requestFull2 = _interopRequireDefault(_requestFull);
          var _exitFull = __webpack_require__(61);
          var _exitFull2 = _interopRequireDefault(_exitFull);
          __webpack_require__(62);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_fullscreen = function s_fullscreen2() {
            var player = this;
            var fullscreenBtn = player.config.fullscreenBtn ? player.config.fullscreenBtn : {};
            var btn = void 0;
            if (fullscreenBtn.type === "img") {
              btn = (0, _util.createImgBtn)("fullscreen", fullscreenBtn.url.request, fullscreenBtn.width, fullscreenBtn.height);
            } else {
              btn = (0, _util.createDom)("xg-fullscreen", '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' + _requestFull2.default + '</div>\n                                             <div class="xgplayer-icon-exitfull">' + _exitFull2.default + "</div>\n                                           </xg-icon>", {}, "xgplayer-fullscreen");
            }
            var tipsText = {};
            tipsText.requestfull = player.lang.FULLSCREEN_TIPS;
            tipsText.exitfull = player.lang.EXITFULLSCREEN_TIPS;
            var tips = (0, _util.createDom)("xg-tips", '<span class="xgplayer-tip-requestfull">' + tipsText.requestfull + '</span>\n                                        <span class="xgplayer-tip-exitfull">' + tipsText.exitfull + "</span>", {}, "xgplayer-tips");
            btn.appendChild(tips);
            player.once("ready", function() {
              if (player.controls) {
                player.controls.appendChild(btn);
              }
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("fullscreenBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_fullscreen",
            method: s_fullscreen
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>\n</svg>\n';
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(63);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-fullscreen,.xgplayer-skin-default .xgplayer-fullscreen-img{position:relative;-webkit-order:13;-moz-box-ordinal-group:14;order:13;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img:hover,.xgplayer-skin-default .xgplayer-fullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-fullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _loading = __webpack_require__(65);
          var _loading2 = _interopRequireDefault(_loading);
          __webpack_require__(66);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_loading = function s_loading2() {
            var player = this;
            var root = player.root;
            var container = (0, _util.createDom)("xg-loading", "" + _loading2.default, {}, "xgplayer-loading");
            player.once("ready", function() {
              root.appendChild(container);
            });
          };
          exports2.default = {
            name: "s_loading",
            method: s_loading
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">\n  <path d="M100,50A50,50,0,1,1,50,0"></path>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(67);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-50px auto auto -50px}.xgplayer-skin-default .xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-skin-default .xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-skin-default.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-loading{display:none!important}.xgplayer-skin-default.xgplayer-isloading .xgplayer-loading{display:block}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _sniffer = __webpack_require__(5);
          var _sniffer2 = _interopRequireDefault(_sniffer);
          __webpack_require__(69);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var isRotateFullscreen = function isRotateFullscreen2(player) {
            return (0, _util.hasClass)(player.root, "xgplayer-rotate-fullscreen");
          };
          var s_progress = function s_progress2() {
            var player = this;
            var container = (0, _util.createDom)("xg-progress", '<xg-outer class="xgplayer-progress-outer">\n                                                   <xg-cache class="xgplayer-progress-cache"></xg-cache>\n                                                   <xg-played class="xgplayer-progress-played">\n                                                     <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n                                                     <xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point>\n                                                     <xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail>\n                                                   </xg-played>\n                                                 </xg-outer>', { tabindex: 1 }, "xgplayer-progress");
            var containerWidth = void 0;
            player.controls.appendChild(container);
            var progress = container.querySelector(".xgplayer-progress-played");
            var outer = container.querySelector(".xgplayer-progress-outer");
            var cache = container.querySelector(".xgplayer-progress-cache");
            var point = container.querySelector(".xgplayer-progress-point");
            var thumbnail = container.querySelector(".xgplayer-progress-thumbnail");
            player.dotArr = {};
            function dotEvent(dotItem, text) {
              dotItem.addEventListener("mouseenter", function(e) {
                if (text) {
                  (0, _util.addClass)(dotItem, "xgplayer-progress-dot-show");
                  (0, _util.addClass)(container, "xgplayer-progress-dot-active");
                }
              });
              dotItem.addEventListener("mouseleave", function(e) {
                if (text) {
                  (0, _util.removeClass)(dotItem, "xgplayer-progress-dot-show");
                  (0, _util.removeClass)(container, "xgplayer-progress-dot-active");
                }
              });
              dotItem.addEventListener("touchend", function(e) {
                e.stopPropagation();
                if (text) {
                  if (!(0, _util.hasClass)(dotItem, "xgplayer-progress-dot-show")) {
                    Object.keys(player.dotArr).forEach(function(key) {
                      if (player.dotArr[key]) {
                        (0, _util.removeClass)(player.dotArr[key], "xgplayer-progress-dot-show");
                      }
                    });
                  }
                  (0, _util.toggleClass)(dotItem, "xgplayer-progress-dot-show");
                  (0, _util.toggleClass)(container, "xgplayer-progress-dot-active");
                }
              });
            }
            function onCanplay() {
              if (player.config.progressDot && (0, _util.typeOf)(player.config.progressDot) === "Array") {
                player.config.progressDot.forEach(function(item) {
                  if (item.time >= 0 && item.time <= player.duration) {
                    var dot = (0, _util.createDom)("xg-progress-dot", item.text ? '<span class="xgplayer-progress-tip">' + item.text + "</span>" : "", {}, "xgplayer-progress-dot");
                    dot.style.left = item.time / player.duration * 100 + "%";
                    if (item.duration >= 0) {
                      dot.style.width = Math.min(item.duration, player.duration - item.time) / player.duration * 100 + "%";
                    }
                    if (item.style) {
                      for (var k in item.style) {
                        dot.style[k] = item.style[k];
                      }
                    }
                    outer.appendChild(dot);
                    player.dotArr[item.time] = dot;
                    dotEvent(dot, item.text);
                  }
                });
              }
            }
            player.once("canplay", onCanplay);
            player.addProgressDot = function(time, text, duration, style) {
              if (player.dotArr[time]) {
                return;
              }
              if (time >= 0 && time <= player.duration) {
                var dot = (0, _util.createDom)("xg-progress-dot", text ? '<span class="xgplayer-progress-tip">' + text + "</span>" : "", {}, "xgplayer-progress-dot");
                dot.style.left = time / player.duration * 100 + "%";
                if (duration >= 0) {
                  dot.style.width = Math.min(duration, player.duration - time) / player.duration * 100 + "%";
                }
                if (style) {
                  for (var k in style) {
                    dot.style[k] = style[k];
                  }
                }
                outer.appendChild(dot);
                player.dotArr[time] = dot;
                dotEvent(dot, text);
              }
            };
            player.removeProgressDot = function(time) {
              if (time >= 0 && time <= player.duration && player.dotArr[time]) {
                var dot = player.dotArr[time];
                dot.parentNode.removeChild(dot);
                dot = null;
                player.dotArr[time] = null;
              }
            };
            player.removeAllProgressDot = function() {
              Object.keys(player.dotArr).forEach(function(key) {
                if (player.dotArr[key]) {
                  var dot = player.dotArr[key];
                  dot.parentNode.removeChild(dot);
                  dot = null;
                  player.dotArr[key] = null;
                }
              });
            };
            var tnailPicNum = 0;
            var tnailWidth = 0;
            var tnailHeight = 0;
            var tnailCol = 0;
            var tnailRow = 0;
            var interval = 0;
            var tnailUrls = [];
            var coverPreviewContainer = void 0, coverPreviewPoint = void 0, coverPreviewOuter = void 0;
            var onLoadedmetadata = function onLoadedmetadata2() {
              if (player.config.thumbnail) {
                if (player.config.thumbnail.isShowCoverPreview && !coverPreviewContainer) {
                  progress.removeChild(thumbnail);
                  coverPreviewContainer = (0, _util.createDom)("xg-coverpreview", '<xg-outer class="xgplayer-coverpreview-outer">\n            <xg-thumbnail class="xgplayer-coverpreview-thumbnail"></xg-thumbnail>\n            <xg-point class="xgplayer-coverpreview-point"></xg-point>\n          </xg-outer>', { tabindex: 1 }, "xgplayer-coverpreview");
                  coverPreviewOuter = coverPreviewContainer.querySelector(".xgplayer-coverpreview-outer");
                  coverPreviewPoint = coverPreviewContainer.querySelector(".xgplayer-coverpreview-point");
                  thumbnail = coverPreviewContainer.querySelector(".xgplayer-coverpreview-thumbnail");
                  player.root.appendChild(coverPreviewContainer);
                }
                tnailPicNum = player.config.thumbnail.pic_num;
                tnailWidth = player.config.thumbnail.width;
                tnailHeight = player.config.thumbnail.height;
                tnailCol = player.config.thumbnail.col;
                tnailRow = player.config.thumbnail.row;
                tnailUrls = player.config.thumbnail.urls;
                thumbnail.style.width = tnailWidth + "px";
                thumbnail.style.height = tnailHeight + "px";
              }
              ;
            };
            player.on("loadedmetadata", onLoadedmetadata);
            if (typeof player.config.disableSwipeHandler === "function" && typeof player.config.enableSwipeHandler === "function") {
              player.root.addEventListener("touchmove", function(e) {
                e.preventDefault();
                if (!player.disableSwipe) {
                  player.disableSwipe = true;
                  player.config.disableSwipeHandler.call(player);
                }
              });
              player.root.addEventListener("touchstart", function(e) {
                player.disableSwipe = true;
                player.config.disableSwipeHandler.call(player);
              });
              player.root.addEventListener("touchend", function(e) {
                player.disableSwipe = false;
                player.config.enableSwipeHandler.call(player);
              });
            }
            ;
            var events = ["touchstart", "mousedown"];
            if (_sniffer2.default.device === "mobile") {
              events.pop();
            }
            events.forEach(function(item) {
              container.addEventListener(item, function(e) {
                if (player.config.disableProgress)
                  return;
                e.stopPropagation();
                (0, _util.event)(e);
                if (e._target === point || !player.config.allowSeekAfterEnded && player.ended) {
                  return true;
                }
                container.focus();
                var _progress$getBounding = progress.getBoundingClientRect(), left = _progress$getBounding.left;
                var isRotate = isRotateFullscreen(player);
                if (isRotate) {
                  left = progress.getBoundingClientRect().top;
                  containerWidth = container.getBoundingClientRect().height;
                } else {
                  containerWidth = container.getBoundingClientRect().width;
                  left = progress.getBoundingClientRect().left;
                }
                var move = function move2(e2) {
                  e2.stopPropagation();
                  (0, _util.event)(e2);
                  player.isProgressMoving = true;
                  var w = (isRotate ? e2.clientY : e2.clientX) - left;
                  if (w > containerWidth) {
                    w = containerWidth;
                  }
                  var now = w / containerWidth * player.duration;
                  if (now < 0)
                    now = 0;
                  if (player.config.allowSeekPlayed && Number(now).toFixed(1) > player.maxPlayedTime) {
                  } else {
                    progress.style.width = w * 100 / containerWidth + "%";
                    if (player.videoConfig.mediaType === "video" && !player.dash && !player.config.closeMoveSeek) {
                      console.log("trigger touchmove");
                      player.currentTime = Number(now).toFixed(1);
                    } else {
                      var time = (0, _util.findDom)(player.controls, ".xgplayer-time");
                      if (time) {
                        time.innerHTML = '<span class="xgplayer-time-current">' + (0, _util.format)(now || 0) + "</span><span>" + (0, _util.format)(player.duration) + "</span>";
                      }
                    }
                  }
                  if (player.config.thumbnail && player.config.thumbnail.isShowCoverPreview) {
                    coverPreviewPoint.innerHTML = "<span>" + (0, _util.format)(now) + "</span> / " + (0, _util.format)(player.duration || 0);
                    interval = player.duration / tnailPicNum;
                    var index = Math.floor(now / interval);
                    thumbnail.style.backgroundImage = "url(" + tnailUrls[Math.ceil((index + 1) / (tnailCol * tnailRow)) - 1] + ")";
                    var indexInPage = index + 1 - tnailCol * tnailRow * (Math.ceil((index + 1) / (tnailCol * tnailRow)) - 1);
                    var tnaiRowIndex = Math.ceil(indexInPage / tnailRow) - 1;
                    var tnaiColIndex = indexInPage - tnaiRowIndex * tnailRow - 1;
                    thumbnail.style["background-position"] = "-" + tnaiColIndex * tnailWidth + "px -" + tnaiRowIndex * tnailHeight + "px";
                    coverPreviewContainer.style.display = "block";
                  }
                  player.emit("focus");
                };
                var up = function up2(e2) {
                  console.log("up event", e2);
                  e2.stopPropagation();
                  (0, _util.event)(e2);
                  window.removeEventListener("mousemove", move);
                  window.removeEventListener("touchmove", move, { passive: false });
                  window.removeEventListener("mouseup", up2);
                  window.removeEventListener("touchend", up2);
                  if (_sniffer2.default.browser.indexOf("ie") < 0) {
                    container.blur();
                  }
                  if (!player.isProgressMoving || player.videoConfig && player.videoConfig.mediaType === "audio" || player.dash || player.config.closeMoveSeek) {
                    var w = (isRotate ? e2.clientY : e2.clientX) - left;
                    if (w > containerWidth) {
                      w = containerWidth;
                    }
                    var now = w / containerWidth * player.duration;
                    if (now < 0)
                      now = 0;
                    if (player.config.allowSeekPlayed && Number(now).toFixed(1) > player.maxPlayedTime) {
                    } else {
                      progress.style.width = w * 100 / containerWidth + "%";
                      console.warn("trigger touchup");
                      player.currentTime = Number(now).toFixed(1);
                    }
                  }
                  if (player.config.thumbnail && player.config.thumbnail.isShowCoverPreview) {
                    coverPreviewContainer.style.display = "none";
                  }
                  player.emit("focus");
                  player.isProgressMoving = false;
                };
                window.addEventListener("touchmove", move, { passive: false });
                window.addEventListener("touchend", up);
                window.addEventListener("mousemove", move);
                window.addEventListener("mouseup", up);
                return true;
              });
            });
            container.addEventListener("mouseenter", function(e) {
              if (!player.config.allowSeekAfterEnded && player.ended) {
                return true;
              }
              var isRotate = isRotateFullscreen(player);
              var containerLeft = isRotate ? container.getBoundingClientRect().top : container.getBoundingClientRect().left;
              var containerWidth2 = isRotate ? container.getBoundingClientRect().height : container.getBoundingClientRect().width;
              var compute = function compute2(e2) {
                var now = ((isRotate ? e2.clientY : e2.clientX) - containerLeft) / containerWidth2 * player.duration;
                now = now < 0 ? 0 : now;
                point.textContent = (0, _util.format)(now);
                var pointWidth = point.getBoundingClientRect().width;
                if (player.config.thumbnail && !player.config.thumbnail.isShowCoverPreview) {
                  interval = player.duration / tnailPicNum;
                  var index = Math.floor(now / interval);
                  thumbnail.style.backgroundImage = "url(" + tnailUrls[Math.ceil((index + 1) / (tnailCol * tnailRow)) - 1] + ")";
                  var indexInPage = index + 1 - tnailCol * tnailRow * (Math.ceil((index + 1) / (tnailCol * tnailRow)) - 1);
                  var tnaiRowIndex = Math.ceil(indexInPage / tnailRow) - 1;
                  var tnaiColIndex = indexInPage - tnaiRowIndex * tnailRow - 1;
                  thumbnail.style["background-position"] = "-" + tnaiColIndex * tnailWidth + "px -" + tnaiRowIndex * tnailHeight + "px";
                  var left = (isRotate ? e2.clientY : e2.clientX) - containerLeft - tnailWidth / 2;
                  left = left > 0 ? left : 0;
                  left = left < containerWidth2 - tnailWidth ? left : containerWidth2 - tnailWidth;
                  thumbnail.style.left = left + "px";
                  thumbnail.style.top = -10 - tnailHeight + "px";
                  thumbnail.style.display = "block";
                  point.style.left = left + tnailWidth / 2 - pointWidth / 2 + "px";
                } else {
                  var _left = e2.clientX - containerLeft - pointWidth / 2;
                  _left = _left > 0 ? _left : 0;
                  _left = _left > containerWidth2 - pointWidth ? containerWidth2 - pointWidth : _left;
                  point.style.left = _left + "px";
                }
                if ((0, _util.hasClass)(container, "xgplayer-progress-dot-active")) {
                  point.style.display = "none";
                } else {
                  point.style.display = "block";
                }
              };
              var move = function move2(e2) {
                compute(e2);
              };
              var leave = function leave2(e2) {
                container.removeEventListener("mousemove", move, false);
                container.removeEventListener("mouseleave", leave2, false);
                compute(e2);
                point.style.display = "none";
                if (player.config.thumbnail && !player.config.thumbnail.isShowCoverPreview) {
                  thumbnail.style.display = "none";
                }
              };
              container.addEventListener("mousemove", move, false);
              container.addEventListener("mouseleave", leave, false);
              compute(e);
            }, false);
            var onTimeupdate = function onTimeupdate2() {
              if (player.maxPlayedTime === void 0)
                player.maxPlayedTime = 0;
              if (player.maxPlayedTime < player.currentTime)
                player.maxPlayedTime = player.currentTime;
              if (!containerWidth && container) {
                containerWidth = container.getBoundingClientRect().width;
              }
              if (!player.isProgressMoving && !player.isSeeking && !player.seeking) {
                var precent = player.currentTime / player.duration;
                var prevPrecent = Number(progress.style.width.replace("%", "") || "0") / Number(container.style.width || "100");
                if (Math.abs(precent - prevPrecent) <= 1) {
                  progress.style.width = player.currentTime * 100 / player.duration + "%";
                }
              }
            };
            player.on("timeupdate", onTimeupdate);
            var onCurrentTimeChange = function onCurrentTimeChange2(time) {
              progress.style.width = time * 100 / player.duration + "%";
            };
            player.on("currentTimeChange", onCurrentTimeChange);
            var onSrcChange = function onSrcChange2() {
              progress.style.width = "0%";
            };
            player.on("srcChange", onSrcChange);
            var onCacheUpdate = function onCacheUpdate2() {
              var buffered = player.buffered;
              if (buffered && buffered.length > 0) {
                var end = buffered.end(buffered.length - 1);
                for (var i = 0, len = buffered.length; i < len; i++) {
                  if (player.currentTime >= buffered.start(i) && player.currentTime <= buffered.end(i)) {
                    end = buffered.end(i);
                    for (var j = i + 1; j < buffered.length; j++) {
                      if (buffered.start(j) - buffered.end(j - 1) >= 2) {
                        end = buffered.end(j - 1);
                        break;
                      }
                    }
                    break;
                  }
                }
                cache.style.width = end / player.duration * 100 + "%";
              }
            };
            var cacheUpdateEvents = ["bufferedChange", "cacheupdate", "ended", "timeupdate"];
            cacheUpdateEvents.forEach(function(item) {
              player.on(item, onCacheUpdate);
            });
            function destroyFunc() {
              player.removeAllProgressDot();
              player.off("canplay", onCanplay);
              player.off("timeupdate", onTimeupdate);
              player.off("currentTimeChange", onCurrentTimeChange);
              player.off("srcChange", onSrcChange);
              player.off("loadedmetadata", onLoadedmetadata);
              cacheUpdateEvents.forEach(function(item) {
                player.off(item, onCacheUpdate);
              });
              player.off("destroy", destroyFunc);
            }
            player.once("destroy", destroyFunc);
          };
          exports2.default = {
            name: "s_progress",
            method: s_progress
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(70);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:12px;right:12px;outline:none;top:-15px;z-index:35}.xgplayer-skin-default .xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-skin-default .xgplayer-progress-cache,.xgplayer-skin-default .xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-skin-default .xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-skin-default .xgplayer-progress-btn{display:none;position:absolute;left:0;top:-5px;width:13px;height:13px;border-radius:30px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26);left:100%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:36}.xgplayer-skin-default .xgplayer-progress-point{position:absolute}.xgplayer-skin-default .xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-skin-default .xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-skin-default .xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;bottom:200%;right:50%;-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);height:auto;line-height:30px;width:auto;background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-skin-default .xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-skin-default .xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-skin-default .xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-skin-default .xgplayer-coverpreview{position:absolute;width:100%;height:100%;top:0;left:0;display:none}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer{position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-thumbnail{display:block}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-point{display:block;text-align:center;font-family:PingFangSC-Regular;font-size:11px;color:#ccc;padding:2px 4px}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-point span{color:#fff}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-btn{display:block;top:-3px}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress-btn{display:block!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px!important;margin-top:8.5px!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-btn{display:block!important;top:-5px!important}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(72);
          var s_time = function s_time2() {
            var player = this;
            var container = (0, _util.createDom)("xg-time", '<span class="xgplayer-time-current">' + (player.currentTime || (0, _util.format)(0)) + "</span>\n                                           <span>" + (player.duration || (0, _util.format)(0)) + "</span>", {}, "xgplayer-time");
            player.once("ready", function() {
              if (player.controls) {
                player.controls.appendChild(container);
              }
            });
            var onTimeChange = function onTimeChange2() {
              if (player.videoConfig.mediaType !== "audio" || !player.isProgressMoving || !player.dash) {
                container.innerHTML = '<span class="xgplayer-time-current">' + (0, _util.format)(player.currentTime || 0) + "</span>" + ("<span>" + (0, _util.format)(player.duration) + "</span>");
              }
            };
            player.on("durationchange", onTimeChange);
            player.on("timeupdate", onTimeChange);
            function onDestroy() {
              player.off("durationchange", onTimeChange);
              player.off("timeupdate", onTimeChange);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "s_time",
            method: s_time
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(73);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, '.xgplayer-skin-default .xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;height:40px;text-align:center;display:inline-block;margin:auto 8px}.xgplayer-skin-default .xgplayer-time span{color:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current{color:#fff}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current:after{content:"/";display:inline-block;padding:0 3px}', ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _replay = __webpack_require__(75);
          var _replay2 = _interopRequireDefault(_replay);
          __webpack_require__(76);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_replay = function s_replay2() {
            var player = this;
            var root = player.root;
            var replayText = player.lang.REPLAY;
            var btn = (0, _util.createDom)("xg-replay", _replay2.default + '\n                                         <xg-replay-txt class="xgplayer-replay-txt">' + replayText + "</xg-replay-txt>\n                                        ", {}, "xgplayer-replay");
            player.once("ready", function() {
              root.appendChild(btn);
            });
            function onEnded() {
              var path = btn.querySelector("path");
              if (path) {
                var transform = window.getComputedStyle(path).getPropertyValue("transform");
                if (typeof transform === "string" && transform.indexOf("none") > -1) {
                  return;
                } else {
                  path.setAttribute("transform", transform);
                }
              }
            }
            player.on("ended", onEnded);
            function onBtnClick(e) {
              e.preventDefault();
              e.stopPropagation();
            }
            btn.addEventListener("click", onBtnClick);
            var svg = btn.querySelector("svg");
            ["click", "touchend"].forEach(function(item) {
              svg.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("replayBtnClick");
              });
            });
            function destroyFunc() {
              player.off("ended", onEnded);
              player.off("destroy", destroyFunc);
            }
            player.once("destroy", destroyFunc);
          };
          exports2.default = {
            name: "s_replay",
            method: s_replay
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewbox="0 0 78 78">\n  <path d="M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"></path>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(77);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:105;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.xgplayer-skin-default .xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-skin-default .xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-skin-default .xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-skin-default .xgplayer-replay svg:hover path{fill:#fff}.xgplayer-skin-default .xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(161);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          module2.exports = __webpack_require__(80);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _player = __webpack_require__(9);
          var _player2 = _interopRequireDefault(_player);
          var _airplay = __webpack_require__(81);
          var _airplay2 = _interopRequireDefault(_airplay);
          var _cssFullscreen = __webpack_require__(82);
          var _cssFullscreen2 = _interopRequireDefault(_cssFullscreen);
          var _danmu = __webpack_require__(83);
          var _danmu2 = _interopRequireDefault(_danmu);
          var _definition = __webpack_require__(84);
          var _definition2 = _interopRequireDefault(_definition);
          var _download = __webpack_require__(85);
          var _download2 = _interopRequireDefault(_download);
          var _errorRetry = __webpack_require__(88);
          var _errorRetry2 = _interopRequireDefault(_errorRetry);
          var _fullscreen = __webpack_require__(45);
          var _fullscreen2 = _interopRequireDefault(_fullscreen);
          var _keyboard = __webpack_require__(89);
          var _keyboard2 = _interopRequireDefault(_keyboard);
          var _localPreview = __webpack_require__(90);
          var _localPreview2 = _interopRequireDefault(_localPreview);
          var _memoryPlay = __webpack_require__(91);
          var _memoryPlay2 = _interopRequireDefault(_memoryPlay);
          var _miniplayer = __webpack_require__(92);
          var _miniplayer2 = _interopRequireDefault(_miniplayer);
          var _mobile = __webpack_require__(37);
          var _mobile2 = _interopRequireDefault(_mobile);
          var _pc = __webpack_require__(38);
          var _pc2 = _interopRequireDefault(_pc);
          var _pip = __webpack_require__(98);
          var _pip2 = _interopRequireDefault(_pip);
          var _play = __webpack_require__(46);
          var _play2 = _interopRequireDefault(_play);
          var _playNext = __webpack_require__(99);
          var _playNext2 = _interopRequireDefault(_playNext);
          var _reload = __webpack_require__(100);
          var _reload2 = _interopRequireDefault(_reload);
          var _replay = __webpack_require__(47);
          var _replay2 = _interopRequireDefault(_replay);
          var _rotate = __webpack_require__(101);
          var _rotate2 = _interopRequireDefault(_rotate);
          var _screenShot = __webpack_require__(102);
          var _screenShot2 = _interopRequireDefault(_screenShot);
          var _stallCheck = __webpack_require__(103);
          var _stallCheck2 = _interopRequireDefault(_stallCheck);
          var _start = __webpack_require__(39);
          var _start2 = _interopRequireDefault(_start);
          var _volume = __webpack_require__(104);
          var _volume2 = _interopRequireDefault(_volume);
          var _textTrack = __webpack_require__(105);
          var _textTrack2 = _interopRequireDefault(_textTrack);
          __webpack_require__(107);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          _player2.default.installAll([_airplay2.default, _cssFullscreen2.default, _danmu2.default, _definition2.default, _download2.default, _errorRetry2.default, _fullscreen2.default, _keyboard2.default, _localPreview2.default, _memoryPlay2.default, _miniplayer2.default, _mobile2.default, _pc2.default, _pip2.default, _play2.default, _playNext2.default, _reload2.default, _replay2.default, _rotate2.default, _screenShot2.default, _stallCheck2.default, _start2.default, _volume2.default, _textTrack2.default]);
          exports2.default = _player2.default;
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var airplay = function airplay2() {
            var player = this;
            if (!player.config.airplay || !window.WebKitPlaybackTargetAvailabilityEvent)
              return;
            function onAirplayBtnClick() {
              player.video.webkitShowPlaybackTargetPicker();
            }
            player.on("airplayBtnClick", onAirplayBtnClick);
            function onDestroy() {
              player.off("airplayBtnClick", onAirplayBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "airplay",
            method: airplay
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var cssFullscreen = function cssFullscreen2() {
            var player = this;
            var root = player.root;
            function onCssFullscreenBtnClick() {
              if ((0, _util.hasClass)(root, "xgplayer-is-cssfullscreen")) {
                player.exitCssFullscreen();
              } else {
                player.getCssFullscreen();
              }
            }
            player.on("cssFullscreenBtnClick", onCssFullscreenBtnClick);
            player.on("exitFullscreen", function() {
              (0, _util.removeClass)(root, "xgplayer-is-cssfullscreen");
            });
            function onDestroy() {
              player.off("cssFullscreenBtnClick", onCssFullscreenBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
            player.getCssFullscreen = function() {
              var player2 = this;
              if (player2.config.fluid) {
                player2.root.style["padding-top"] = "";
              }
              (0, _util.addClass)(player2.root, "xgplayer-is-cssfullscreen");
              player2.emit("requestCssFullscreen");
            };
            player.exitCssFullscreen = function() {
              var player2 = this;
              if (player2.config.fluid) {
                player2.root.style["width"] = "100%";
                player2.root.style["height"] = "0";
                player2.root.style["padding-top"] = player2.config.height * 100 / player2.config.width + "%";
              }
              (0, _util.removeClass)(player2.root, "xgplayer-is-cssfullscreen");
              player2.emit("exitCssFullscreen");
            };
          };
          exports2.default = {
            name: "cssFullscreen",
            method: cssFullscreen
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var danmu = function danmu2() {
            var player = this;
            function onInitDanmu(danmujs) {
              var container = player.root.querySelector("xg-danmu");
              (0, _util.addClass)(container, "xgplayer-has-danmu");
              if (!player.config.danmu.closeDefaultBtn) {
                var onTimeupdate = function onTimeupdate2() {
                  danmujs.start();
                };
                var onPause = function onPause2() {
                  if ((0, _util.hasClass)(player.danmuBtn, "danmu-switch-active")) {
                    danmujs.pause();
                  }
                };
                var onPlay = function onPlay2() {
                  if ((0, _util.hasClass)(player.danmuBtn, "danmu-switch-active")) {
                    danmujs.play();
                  }
                };
                var onSeeked = function onSeeked2() {
                  if ((0, _util.hasClass)(player.danmuBtn, "danmu-switch-active")) {
                    danmujs.stop();
                    danmujs.start();
                  }
                };
                var onDestroy = function onDestroy2() {
                  player.off("timeupdate", onTimeupdate);
                  player.off("pause", onPause);
                  player.off("play", onPlay);
                  player.off("seeked", onSeeked);
                  player.off("destroy", onDestroy2);
                };
                player.danmuBtn = (0, _util.copyDom)(danmujs.bulletBtn.createSwitch(true));
                player.controls.appendChild(player.danmuBtn);
                ["click", "touchend"].forEach(function(item) {
                  player.danmuBtn.addEventListener(item, function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    (0, _util.toggleClass)(player.danmuBtn, "danmu-switch-active");
                    if ((0, _util.hasClass)(player.danmuBtn, "danmu-switch-active")) {
                      player.emit("danmuBtnOn");
                      (0, _util.addClass)(container, "xgplayer-has-danmu");
                      player.once("timeupdate", onTimeupdate);
                    } else {
                      player.emit("danmuBtnOff");
                      (0, _util.removeClass)(container, "xgplayer-has-danmu");
                      danmujs.stop();
                    }
                  });
                });
                player.onElementClick && container.addEventListener("click", function(e) {
                  player.onElementClick(e, container);
                }, false);
                player.onElementDblclick && container.addEventListener("dblclick", function(e) {
                  player.onElementDblclick(e, container);
                }, false);
                player.on("pause", onPause);
                player.on("play", onPlay);
                player.on("seeked", onSeeked);
                player.once("destroy", onDestroy);
              }
            }
            player.on("initDefaultDanmu", onInitDanmu);
          };
          exports2.default = {
            name: "danmu",
            method: danmu
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var definition = function definition2() {
            var player = this;
            function onDestroy() {
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "definition",
            method: definition
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _downloadjs = __webpack_require__(86);
          var _downloadjs2 = _interopRequireDefault(_downloadjs);
          var _url = __webpack_require__(87);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var download = function download2() {
            var player = this;
            function onDownloadBtnClick() {
              player.download();
            }
            player.on("downloadBtnClick", onDownloadBtnClick);
            function onDestroy() {
              player.off("downloadBtnClick", onDownloadBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
            player.download = function() {
              var url = (0, _url.getAbsoluteURL)(this.config.url);
              (0, _downloadjs2.default)(url);
            };
          };
          exports2.default = {
            name: "download",
            method: download
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          (function(root, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(this, function() {
            return function download(data, strFileName, strMimeType) {
              var self2 = window, defaultMime = "application/octet-stream", mimeType = strMimeType || defaultMime, payload = data, url = !strFileName && !strMimeType && payload, anchor = document.createElement("a"), toString = function(a) {
                return String(a);
              }, myBlob = self2.Blob || self2.MozBlob || self2.WebKitBlob || toString, fileName = strFileName || "download", blob, reader;
              myBlob = myBlob.call ? myBlob.bind(self2) : Blob;
              if (String(this) === "true") {
                payload = [payload, mimeType];
                mimeType = payload[0];
                payload = payload[1];
              }
              if (url && url.length < 2048) {
                fileName = url.split("/").pop().split("?")[0];
                anchor.href = url;
                if (anchor.href.indexOf(url) !== -1) {
                  var ajax = new XMLHttpRequest();
                  ajax.open("GET", url, true);
                  ajax.responseType = "blob";
                  ajax.onload = function(e) {
                    download(e.target.response, fileName, defaultMime);
                  };
                  setTimeout(function() {
                    ajax.send();
                  }, 0);
                  return ajax;
                }
              }
              if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {
                if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString) {
                  payload = dataUrlToBlob(payload);
                  mimeType = payload.type || defaultMime;
                } else {
                  return navigator.msSaveBlob ? navigator.msSaveBlob(dataUrlToBlob(payload), fileName) : saver(payload);
                }
              } else {
                if (/([\x80-\xff])/.test(payload)) {
                  var i = 0, tempUiArr = new Uint8Array(payload.length), mx = tempUiArr.length;
                  for (i; i < mx; ++i)
                    tempUiArr[i] = payload.charCodeAt(i);
                  payload = new myBlob([tempUiArr], { type: mimeType });
                }
              }
              blob = payload instanceof myBlob ? payload : new myBlob([payload], { type: mimeType });
              function dataUrlToBlob(strUrl) {
                var parts = strUrl.split(/[:;,]/), type = parts[1], decoder = parts[2] == "base64" ? atob : decodeURIComponent, binData = decoder(parts.pop()), mx2 = binData.length, i2 = 0, uiArr = new Uint8Array(mx2);
                for (i2; i2 < mx2; ++i2)
                  uiArr[i2] = binData.charCodeAt(i2);
                return new myBlob([uiArr], { type });
              }
              function saver(url2, winMode) {
                if ("download" in anchor) {
                  anchor.href = url2;
                  anchor.setAttribute("download", fileName);
                  anchor.className = "download-js-link";
                  anchor.innerHTML = "downloading...";
                  anchor.style.display = "none";
                  document.body.appendChild(anchor);
                  setTimeout(function() {
                    anchor.click();
                    document.body.removeChild(anchor);
                    if (winMode === true) {
                      setTimeout(function() {
                        self2.URL.revokeObjectURL(anchor.href);
                      }, 250);
                    }
                  }, 66);
                  return true;
                }
                if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
                  if (/^data:/.test(url2))
                    url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
                  if (!window.open(url2)) {
                    if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
                      location.href = url2;
                    }
                  }
                  return true;
                }
                var f = document.createElement("iframe");
                document.body.appendChild(f);
                if (!winMode && /^data:/.test(url2)) {
                  url2 = "data:" + url2.replace(/^data:([\w\/\-\+]+)/, defaultMime);
                }
                f.src = url2;
                setTimeout(function() {
                  document.body.removeChild(f);
                }, 333);
              }
              if (navigator.msSaveBlob) {
                return navigator.msSaveBlob(blob, fileName);
              }
              if (self2.URL) {
                saver(self2.URL.createObjectURL(blob), true);
              } else {
                if (typeof blob === "string" || blob.constructor === toString) {
                  try {
                    return saver("data:" + mimeType + ";base64," + self2.btoa(blob));
                  } catch (y) {
                    return saver("data:" + mimeType + "," + encodeURIComponent(blob));
                  }
                }
                reader = new FileReader();
                reader.onload = function(e) {
                  saver(this.result);
                };
                reader.readAsDataURL(blob);
              }
              return true;
            };
          });
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var getAbsoluteURL = exports2.getAbsoluteURL = function getAbsoluteURL2(url) {
            if (!url.match(/^https?:\/\//)) {
              var div = document.createElement("div");
              div.innerHTML = '<a href="' + url + '">x</a>';
              url = div.firstChild.href;
            }
            return url;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _error = __webpack_require__(4);
          var _error2 = _interopRequireDefault(_error);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var defaultConfig = {
            maxCount: 3,
            backupUrl: "",
            isFetch: true,
            fetchTimeout: 100
          };
          function errorRetry() {
            var _this = this;
            var player = this;
            if (!player.config.errorConfig || player.src.indexOf("blob:") > -1) {
              return;
            }
            var errorConfig = {};
            var _inConfig = player.config.errorConfig;
            for (var key in defaultConfig) {
              if (_inConfig[key] === void 0) {
                errorConfig[key] = defaultConfig[key];
              } else {
                errorConfig[key] = _inConfig[key];
              }
            }
            player.retryData = {
              count: 0,
              errfTimer: null,
              isFetchReturn: false,
              currentTime: 0
            };
            function errorfetch(player2, url, timeout) {
              var resolveFun = function resolveFun2(resolve, data) {
                if (!player2.retryData.isFetchReturn) {
                  player2.retryData.isFetchReturn = true;
                  resolve(data);
                }
              };
              return new Promise(function(resolve, reject) {
                try {
                  var xhr = new window.XMLHttpRequest();
                  xhr.open("get", url);
                  xhr.onload = function() {
                    resolveFun(resolve, { status: xhr.status, statusText: xhr.statusText, xhr });
                  };
                  xhr.onerror = function() {
                    resolveFun(resolve, { status: xhr.status, statusText: xhr.statusText || "The network environment is disconnected or the address is invalid", xhr });
                  };
                  xhr.onabort = function() {
                  };
                  player2.retryData.errfTimer = window.setTimeout(function() {
                    var errfTimer = player2.retryData.errfTimer;
                    window.clearTimeout(errfTimer);
                    player2.retryData.errfTimer = null;
                    resolveFun(resolve, { status: -1, statusText: "request timeout" });
                  }, timeout);
                  xhr.send();
                } catch (err) {
                  player2.retryData.isFetchReturn = true;
                  resolveFun(resolve, { status: -2, statusText: "request error" });
                }
              });
            }
            function retryCanPlay() {
              this.currentTime = this.retryData.currentTime;
              this.play();
              this.retryData.retryCode = 0;
              this.retryData.isFetchReturn = false;
              this.retryData.currentTime = 0;
            }
            var _originErrorEmit = player._onError;
            player._onError = function(data) {
              var errorCount = _this.retryData.count;
              if (errorCount > errorConfig.maxCount) {
                if (errorConfig.isFetch) {
                  errorfetch(_this, _this.currentSrc, errorConfig.fetchTimeout).then(function(data2) {
                    _this.emit("error", new _error2.default({
                      type: "network",
                      currentTime: _this.currentTime,
                      duration: _this.duration || 0,
                      networkState: _this.networkState,
                      readyState: _this.readyState,
                      currentSrc: _this.currentSrc,
                      src: _this.src,
                      ended: _this.ended,
                      httpCode: data2.status,
                      httpMsg: data2.statusText,
                      errd: {
                        line: 101,
                        msg: _this.error,
                        handle: "plugin errorRetry"
                      },
                      errorCode: _this.video && _this.video.error.code,
                      mediaError: _this.video && _this.video.error
                    }));
                    _originErrorEmit.call(_this, data2);
                  });
                } else {
                  _originErrorEmit.call(_this, data);
                }
                return;
              }
              if (errorCount === 0) {
                _this.retryData.currentTime = _this.currentTime;
                _this.once("canplay", retryCanPlay.bind(_this));
              }
              var src = "";
              if (errorConfig.count < 2) {
                src = errorConfig.backupUrl ? errorConfig.backupUrl : player.currentSrc;
              } else {
                src = errorConfig.backupUrl && errorCount > 1 ? errorConfig.backupUrl : player.currentSrc;
              }
              _this.retryData.count++;
              _this.src = src;
            };
          }
          exports2.default = {
            name: "errorretry",
            method: errorRetry
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          var _util = __webpack_require__(0);
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var Keyboard = function() {
            function Keyboard2(player) {
              _classCallCheck(this, Keyboard2);
              this.player = player;
              this.state = {
                playbackRate: 0,
                isRepeat: false,
                keyCode: 0,
                repeat: 0,
                isBody: false
              };
              this.timer = null;
              this.initEvents();
            }
            _createClass(Keyboard2, [{
              key: "initEvents",
              value: function initEvents() {
                var _this = this;
                var _player = this.player, root = _player.root, config = _player.config;
                this.player.onBodyKeydown = this.onBodyKeydown.bind(this);
                this.player.onKeydown = this.onKeydown.bind(this);
                this.player.onKeyup = this.onKeyup.bind(this);
                if (!config.keyShortcut || config.keyShortcut === "on") {
                  document.addEventListener("keydown", this.player.onBodyKeydown);
                  root.addEventListener("keydown", this.player.onKeydown);
                  var destroyFunc = function destroyFunc2() {
                    document.removeEventListener("keydown", _this.player.onBodyKeydown);
                    root.removeEventListener("keydown", _this.player.onKeydown);
                    clearTimeout(_this.timer);
                    _this.timer = null;
                  };
                  (0, _util.on)(this.player, "destroy", destroyFunc);
                }
              }
            }, {
              key: "checkTarget",
              value: function checkTarget(e) {
                var player = this.player;
                return e.target === player.root || e.target === player.video || e.target === player.controls;
              }
            }, {
              key: "onBodyKeydown",
              value: function onBodyKeydown(event) {
                var e = event || window.event;
                var keyCode = e.keyCode;
                if (e.target === document.body && (keyCode === 37 || keyCode === 39 || keyCode === 32)) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  e.returnValue = false;
                  if (!e.repeat) {
                    document.addEventListener("keyup", this.player.onKeyup);
                  }
                  this.handler(e);
                  return false;
                }
              }
            }, {
              key: "onKeydown",
              value: function onKeydown(event) {
                var e = event || window.event;
                var keyCode = e.keyCode;
                if (this.checkTarget(e) && (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40 || keyCode === 32 || keyCode === 27)) {
                  e.preventDefault();
                  e.cancelBubble = true;
                  e.returnValue = false;
                  this.player.emit("focus");
                  if (!e.repeat) {
                    this.player.root.addEventListener("keyup", this.player.onKeyup);
                  }
                  this.handler(e);
                  return false;
                }
              }
            }, {
              key: "onKeyup",
              value: function onKeyup() {
                var state = this.state, player = this.player;
                document.removeEventListener("keyup", this.player.onKeyup);
                player.root.removeEventListener("keyup", this.player.onKeyup);
                if (!state.keyCode) {
                  return;
                }
                if (state.playbackRate !== 0) {
                  player.playbackRate = state.playbackRate;
                }
                if (!state.isRepeat) {
                  this.handlerKeyCode(state.keyCode, false);
                }
                state.playbackRate = 0;
                state.isRepeat = false;
                state.keyCode = 0;
                state.repeat = 0;
                this.changeVolumeSlide();
              }
            }, {
              key: "handler",
              value: function handler(e) {
                var state = this.state, player = this.player;
                state.keyCode = e.keyCode;
                state.isRepeat = e.repeat;
                if (e.repeat) {
                  if (player.config.disableLongPress) {
                    this.handlerKeyCode(state.keyCode, false);
                  } else if (state.repeat % 2 === 0) {
                    this.handlerKeyCode(state.keyCode, true);
                  }
                  state.repeat++;
                }
              }
            }, {
              key: "handlerKeyCode",
              value: function handlerKeyCode(keyCode, isLonePress) {
                var player = this.player, state = this.state;
                switch (keyCode) {
                  case 39:
                    if (isLonePress) {
                      state.repeat === 0 && this.changeRate();
                    } else {
                      this.seek(false, isLonePress);
                    }
                    break;
                  case 37:
                    this.seek(true, isLonePress);
                    break;
                  case 38:
                    this.changeVolume(true);
                    break;
                  case 40:
                    this.changeVolume(false);
                    break;
                  case 32:
                    if (!isLonePress) {
                      player.paused ? player.play() : player.pause();
                    }
                    break;
                  case 27:
                    if ((0, _util.hasClass)(player.root, "xgplayer-is-cssfullscreen")) {
                      player.exitCssFullscreen();
                    }
                    break;
                  default:
                }
              }
            }, {
              key: "seek",
              value: function seek(isBack, isLongPress) {
                var player = this.player;
                var keyShortcutStep = player.config.keyShortcutStep || {};
                var currentTimeStep = keyShortcutStep.currentTime || 10;
                if (player.isLoading || player.isSeeking || isLongPress && this.state.repeat % 8 > 0) {
                  return;
                }
                if (isBack) {
                  if (player.currentTime - currentTimeStep >= 0) {
                    player.currentTime -= currentTimeStep;
                  } else {
                    player.currentTime = 0;
                  }
                } else {
                  if (player.maxPlayedTime && player.config.allowSeekPlayed && player.currentTime + currentTimeStep > player.maxPlayedTime) {
                    player.currentTime = player.maxPlayedTime;
                  } else {
                    if (player.currentTime + currentTimeStep <= player.duration) {
                      player.currentTime += currentTimeStep;
                    } else {
                      player.currentTime = player.duration + 1;
                    }
                  }
                }
              }
            }, {
              key: "changeRate",
              value: function changeRate() {
                this.state.playbackRate = this.player.playbackRate;
                this.player.playbackRate = this.player.config.keyboardRate || 5;
              }
            }, {
              key: "changeVolumeSlide",
              value: function changeVolumeSlide(show) {
                var player = this.player;
                if (!player.controls) {
                  return;
                }
                if (show) {
                  player.emit("focus");
                  if (!(0, _util.hasClass)(player.root, "xgplayer-volume-active")) {
                    (0, _util.addClass)(player.root, "xgplayer-volume-active");
                  }
                } else {
                  clearTimeout(this.timer);
                  this.timer = setTimeout(function() {
                    (0, _util.removeClass)(player.root, "xgplayer-volume-active");
                  }, 1e3);
                }
              }
            }, {
              key: "changeVolume",
              value: function changeVolume(isup) {
                var player = this.player;
                var keyShortcutStep = player.config.keyShortcutStep || {};
                var volumeStep = keyShortcutStep.volume || 0.1;
                this.changeVolumeSlide(true);
                var volume = player.volume;
                if (isup && volume + volumeStep <= 1) {
                  player.volume = volume + volumeStep;
                } else if (!isup && volume - volumeStep >= 0) {
                  player.volume = volume - volumeStep;
                }
              }
            }]);
            return Keyboard2;
          }();
          var keyboard = function keyboard2() {
            var player = this;
            player.keyboard = new Keyboard(player);
          };
          exports2.default = {
            name: "keyboard",
            method: keyboard
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var localPreview = function localPreview2() {
            var player = this;
            var root = player.root;
            function onUpload(upload) {
              player.uploadFile = upload.files[0];
              var url = URL.createObjectURL(player.uploadFile);
              if ((0, _util.hasClass)(root, "xgplayer-nostart")) {
                player.config.url = url;
                player.start();
              } else {
                player.src = url;
                var playPromise = player.play();
                if (playPromise !== void 0 && playPromise) {
                  playPromise.catch(function(err) {
                  });
                }
              }
            }
            player.on("upload", onUpload);
            function onDestroy() {
              player.off("upload", onUpload);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "localPreview",
            method: localPreview
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var memoryPlay = function memoryPlay2() {
            var player = this;
            player.on("memoryPlayStart", function(lastPlayTime) {
              setTimeout(function() {
                console.log("memoryPlayStart", lastPlayTime, player.readyState, 11);
                player.currentTime = lastPlayTime;
              });
            });
          };
          exports2.default = {
            name: "memoryPlay",
            method: memoryPlay
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _draggabilly = __webpack_require__(93);
          var _draggabilly2 = _interopRequireDefault(_draggabilly);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var miniplayer = function miniplayer2() {
            var player = this;
            var root = player.root;
            function onMiniplayerBtnClick() {
              if ((0, _util.hasClass)(root, "xgplayer-miniplayer-active")) {
                player.exitMiniplayer();
              } else {
                player.getMiniplayer();
              }
            }
            player.on("miniplayerBtnClick", onMiniplayerBtnClick);
            function onDestroy() {
              player.off("miniplayerBtnClick", onMiniplayerBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
            player.getMiniplayer = function() {
              if ((0, _util.hasClass)(root, "xgplayer-is-fullscreen")) {
                this.exitFullscreen(root);
              }
              if ((0, _util.hasClass)(root, "xgplayer-is-cssfullscreen")) {
                this.exitCssFullscreen();
              }
              if ((0, _util.hasClass)(root, "xgplayer-rotate-fullscreen")) {
                this.exitRotateFullscreen();
              }
              var dragLay = (0, _util.createDom)("xg-miniplayer-lay", "<div></div>", {}, "xgplayer-miniplayer-lay");
              this.root.appendChild(dragLay);
              var dragHandle = (0, _util.createDom)("xg-miniplayer-drag", '<div class="drag-handle"><span>' + this.lang.MINIPLAYER_DRAG + "</span></div>", { tabindex: 9 }, "xgplayer-miniplayer-drag");
              this.root.appendChild(dragHandle);
              var draggie = new _draggabilly2.default(".xgplayer", {
                handle: ".drag-handle"
              });
              (0, _util.addClass)(this.root, "xgplayer-miniplayer-active");
              this.root.style.right = 0;
              this.root.style.bottom = "200px";
              this.root.style.top = "";
              this.root.style.left = "";
              this.root.style.width = "320px";
              this.root.style.height = "180px";
              if (this.config.miniplayerConfig) {
                if (this.config.miniplayerConfig.top !== void 0) {
                  this.root.style.top = this.config.miniplayerConfig.top + "px";
                  this.root.style.bottom = "";
                }
                if (this.config.miniplayerConfig.bottom !== void 0) {
                  this.root.style.bottom = this.config.miniplayerConfig.bottom + "px";
                }
                if (this.config.miniplayerConfig.left !== void 0) {
                  this.root.style.left = this.config.miniplayerConfig.left + "px";
                  this.root.style.right = "";
                }
                if (this.config.miniplayerConfig.right !== void 0) {
                  this.root.style.right = this.config.miniplayerConfig.right + "px";
                }
                if (this.config.miniplayerConfig.width !== void 0) {
                  this.root.style.width = this.config.miniplayerConfig.width + "px";
                }
                if (this.config.miniplayerConfig.height !== void 0) {
                  this.root.style.height = this.config.miniplayerConfig.height + "px";
                }
              }
              if (this.config.fluid) {
                this.root.style["padding-top"] = "";
              }
              var player2 = this;
              ["click", "touchend"].forEach(function(item) {
                dragLay.addEventListener(item, function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  player2.exitMiniplayer();
                });
              });
            };
            player.exitMiniplayer = function() {
              (0, _util.removeClass)(this.root, "xgplayer-miniplayer-active");
              this.root.style.right = "";
              this.root.style.bottom = "";
              this.root.style.top = "";
              this.root.style.left = "";
              if (this.config.fluid) {
                this.root.style["width"] = "100%";
                this.root.style["height"] = "0";
                this.root.style["padding-top"] = this.config.height * 100 / this.config.width + "%";
              } else {
                if (this.config.width) {
                  if (typeof this.config.width !== "number") {
                    this.root.style.width = this.config.width;
                  } else {
                    this.root.style.width = this.config.width + "px";
                  }
                }
                if (this.config.height) {
                  if (typeof this.config.height !== "number") {
                    this.root.style.height = this.config.height;
                  } else {
                    this.root.style.height = this.config.height + "px";
                  }
                }
              }
              var dragLay = (0, _util.findDom)(this.root, ".xgplayer-miniplayer-lay");
              if (dragLay && dragLay.parentNode) {
                dragLay.parentNode.removeChild(dragLay);
              }
              var dragHandle = (0, _util.findDom)(this.root, ".xgplayer-miniplayer-drag");
              if (dragHandle && dragHandle.parentNode) {
                dragHandle.parentNode.removeChild(dragHandle);
              }
            };
          };
          exports2.default = {
            name: "miniplayer",
            method: miniplayer
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          (function(window2, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(94), __webpack_require__(95)], __WEBPACK_AMD_DEFINE_RESULT__ = function(getSize, Unidragger) {
                return factory(window2, getSize, Unidragger);
              }.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(window, function factory(window2, getSize, Unidragger) {
            function extend(a, b) {
              for (var prop in b) {
                a[prop] = b[prop];
              }
              return a;
            }
            function noop() {
            }
            var jQuery = window2.jQuery;
            function Draggabilly(element, options) {
              this.element = typeof element == "string" ? document.querySelector(element) : element;
              if (jQuery) {
                this.$element = jQuery(this.element);
              }
              this.options = extend({}, this.constructor.defaults);
              this.option(options);
              this._create();
            }
            var proto = Draggabilly.prototype = Object.create(Unidragger.prototype);
            Draggabilly.defaults = {};
            proto.option = function(opts) {
              extend(this.options, opts);
            };
            var positionValues = {
              relative: true,
              absolute: true,
              fixed: true
            };
            proto._create = function() {
              this.position = {};
              this._getPosition();
              this.startPoint = { x: 0, y: 0 };
              this.dragPoint = { x: 0, y: 0 };
              this.startPosition = extend({}, this.position);
              var style = getComputedStyle(this.element);
              if (!positionValues[style.position]) {
                this.element.style.position = "relative";
              }
              this.on("pointerMove", this.onPointerMove);
              this.on("pointerUp", this.onPointerUp);
              this.enable();
              this.setHandles();
            };
            proto.setHandles = function() {
              this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];
              this.bindHandles();
            };
            proto.dispatchEvent = function(type, event, args) {
              var emitArgs = [event].concat(args);
              this.emitEvent(type, emitArgs);
              this.dispatchJQueryEvent(type, event, args);
            };
            proto.dispatchJQueryEvent = function(type, event, args) {
              var jquery = window2.jQuery;
              if (!jquery || !this.$element) {
                return;
              }
              var $event = jquery.Event(event);
              $event.type = type;
              this.$element.trigger($event, args);
            };
            proto._getPosition = function() {
              var style = getComputedStyle(this.element);
              var x = this._getPositionCoord(style.left, "width");
              var y = this._getPositionCoord(style.top, "height");
              this.position.x = isNaN(x) ? 0 : x;
              this.position.y = isNaN(y) ? 0 : y;
              this._addTransformPosition(style);
            };
            proto._getPositionCoord = function(styleSide, measure) {
              if (styleSide.indexOf("%") != -1) {
                var parentSize = getSize(this.element.parentNode);
                return !parentSize ? 0 : parseFloat(styleSide) / 100 * parentSize[measure];
              }
              return parseInt(styleSide, 10);
            };
            proto._addTransformPosition = function(style) {
              var transform = style.transform;
              if (transform.indexOf("matrix") !== 0) {
                return;
              }
              var matrixValues = transform.split(",");
              var xIndex = transform.indexOf("matrix3d") === 0 ? 12 : 4;
              var translateX = parseInt(matrixValues[xIndex], 10);
              var translateY = parseInt(matrixValues[xIndex + 1], 10);
              this.position.x += translateX;
              this.position.y += translateY;
            };
            proto.onPointerDown = function(event, pointer) {
              this.element.classList.add("is-pointer-down");
              this.dispatchJQueryEvent("pointerDown", event, [pointer]);
            };
            proto.pointerDown = function(event, pointer) {
              var isOkay = this.okayPointerDown(event);
              if (!isOkay || !this.isEnabled) {
                this._pointerReset();
                return;
              }
              this.pointerDownPointer = {
                pageX: pointer.pageX,
                pageY: pointer.pageY
              };
              event.preventDefault();
              this.pointerDownBlur();
              this._bindPostStartEvents(event);
              this.element.classList.add("is-pointer-down");
              this.dispatchEvent("pointerDown", event, [pointer]);
            };
            proto.dragStart = function(event, pointer) {
              if (!this.isEnabled) {
                return;
              }
              this._getPosition();
              this.measureContainment();
              this.startPosition.x = this.position.x;
              this.startPosition.y = this.position.y;
              this.setLeftTop();
              this.dragPoint.x = 0;
              this.dragPoint.y = 0;
              this.element.classList.add("is-dragging");
              this.dispatchEvent("dragStart", event, [pointer]);
              this.animate();
            };
            proto.measureContainment = function() {
              var container = this.getContainer();
              if (!container) {
                return;
              }
              var elemSize = getSize(this.element);
              var containerSize = getSize(container);
              var elemRect = this.element.getBoundingClientRect();
              var containerRect = container.getBoundingClientRect();
              var borderSizeX = containerSize.borderLeftWidth + containerSize.borderRightWidth;
              var borderSizeY = containerSize.borderTopWidth + containerSize.borderBottomWidth;
              var position = this.relativeStartPosition = {
                x: elemRect.left - (containerRect.left + containerSize.borderLeftWidth),
                y: elemRect.top - (containerRect.top + containerSize.borderTopWidth)
              };
              this.containSize = {
                width: containerSize.width - borderSizeX - position.x - elemSize.width,
                height: containerSize.height - borderSizeY - position.y - elemSize.height
              };
            };
            proto.getContainer = function() {
              var containment = this.options.containment;
              if (!containment) {
                return;
              }
              var isElement = containment instanceof HTMLElement;
              if (isElement) {
                return containment;
              }
              if (typeof containment == "string") {
                return document.querySelector(containment);
              }
              return this.element.parentNode;
            };
            proto.onPointerMove = function(event, pointer, moveVector) {
              this.dispatchJQueryEvent("pointerMove", event, [pointer, moveVector]);
            };
            proto.dragMove = function(event, pointer, moveVector) {
              if (!this.isEnabled) {
                return;
              }
              var dragX = moveVector.x;
              var dragY = moveVector.y;
              var grid = this.options.grid;
              var gridX = grid && grid[0];
              var gridY = grid && grid[1];
              dragX = applyGrid(dragX, gridX);
              dragY = applyGrid(dragY, gridY);
              dragX = this.containDrag("x", dragX, gridX);
              dragY = this.containDrag("y", dragY, gridY);
              dragX = this.options.axis == "y" ? 0 : dragX;
              dragY = this.options.axis == "x" ? 0 : dragY;
              this.position.x = this.startPosition.x + dragX;
              this.position.y = this.startPosition.y + dragY;
              this.dragPoint.x = dragX;
              this.dragPoint.y = dragY;
              this.dispatchEvent("dragMove", event, [pointer, moveVector]);
            };
            function applyGrid(value, grid, method) {
              method = method || "round";
              return grid ? Math[method](value / grid) * grid : value;
            }
            proto.containDrag = function(axis, drag, grid) {
              if (!this.options.containment) {
                return drag;
              }
              var measure = axis == "x" ? "width" : "height";
              var rel = this.relativeStartPosition[axis];
              var min = applyGrid(-rel, grid, "ceil");
              var max = this.containSize[measure];
              max = applyGrid(max, grid, "floor");
              return Math.max(min, Math.min(max, drag));
            };
            proto.onPointerUp = function(event, pointer) {
              this.element.classList.remove("is-pointer-down");
              this.dispatchJQueryEvent("pointerUp", event, [pointer]);
            };
            proto.dragEnd = function(event, pointer) {
              if (!this.isEnabled) {
                return;
              }
              this.element.style.transform = "";
              this.setLeftTop();
              this.element.classList.remove("is-dragging");
              this.dispatchEvent("dragEnd", event, [pointer]);
            };
            proto.animate = function() {
              if (!this.isDragging) {
                return;
              }
              this.positionDrag();
              var _this = this;
              requestAnimationFrame(function animateFrame() {
                _this.animate();
              });
            };
            proto.setLeftTop = function() {
              this.element.style.left = this.position.x + "px";
              this.element.style.top = this.position.y + "px";
            };
            proto.positionDrag = function() {
              this.element.style.transform = "translate3d( " + this.dragPoint.x + "px, " + this.dragPoint.y + "px, 0)";
            };
            proto.staticClick = function(event, pointer) {
              this.dispatchEvent("staticClick", event, [pointer]);
            };
            proto.setPosition = function(x, y) {
              this.position.x = x;
              this.position.y = y;
              this.setLeftTop();
            };
            proto.enable = function() {
              this.isEnabled = true;
            };
            proto.disable = function() {
              this.isEnabled = false;
              if (this.isDragging) {
                this.dragEnd();
              }
            };
            proto.destroy = function() {
              this.disable();
              this.element.style.transform = "";
              this.element.style.left = "";
              this.element.style.top = "";
              this.element.style.position = "";
              this.unbindHandles();
              if (this.$element) {
                this.$element.removeData("draggabilly");
              }
            };
            proto._init = noop;
            if (jQuery && jQuery.bridget) {
              jQuery.bridget("draggabilly", Draggabilly);
            }
            return Draggabilly;
          });
        },
        function(module2, exports2, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
          (function(window2, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports2, __webpack_require__, exports2, module2) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(window, function factory() {
            "use strict";
            function getStyleSize(value) {
              var num = parseFloat(value);
              var isValid = value.indexOf("%") == -1 && !isNaN(num);
              return isValid && num;
            }
            function noop() {
            }
            var logError = typeof console == "undefined" ? noop : function(message) {
              console.error(message);
            };
            var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
            var measurementsLength = measurements.length;
            function getZeroSize() {
              var size = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
              };
              for (var i = 0; i < measurementsLength; i++) {
                var measurement = measurements[i];
                size[measurement] = 0;
              }
              return size;
            }
            function getStyle(elem) {
              var style = getComputedStyle(elem);
              if (!style) {
                logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1");
              }
              return style;
            }
            var isSetup = false;
            var isBoxSizeOuter;
            function setup() {
              if (isSetup) {
                return;
              }
              isSetup = true;
              var div = document.createElement("div");
              div.style.width = "200px";
              div.style.padding = "1px 2px 3px 4px";
              div.style.borderStyle = "solid";
              div.style.borderWidth = "1px 2px 3px 4px";
              div.style.boxSizing = "border-box";
              var body = document.body || document.documentElement;
              body.appendChild(div);
              var style = getStyle(div);
              isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
              getSize.isBoxSizeOuter = isBoxSizeOuter;
              body.removeChild(div);
            }
            function getSize(elem) {
              setup();
              if (typeof elem == "string") {
                elem = document.querySelector(elem);
              }
              if (!elem || typeof elem != "object" || !elem.nodeType) {
                return;
              }
              var style = getStyle(elem);
              if (style.display == "none") {
                return getZeroSize();
              }
              var size = {};
              size.width = elem.offsetWidth;
              size.height = elem.offsetHeight;
              var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
              for (var i = 0; i < measurementsLength; i++) {
                var measurement = measurements[i];
                var value = style[measurement];
                var num = parseFloat(value);
                size[measurement] = !isNaN(num) ? num : 0;
              }
              var paddingWidth = size.paddingLeft + size.paddingRight;
              var paddingHeight = size.paddingTop + size.paddingBottom;
              var marginWidth = size.marginLeft + size.marginRight;
              var marginHeight = size.marginTop + size.marginBottom;
              var borderWidth = size.borderLeftWidth + size.borderRightWidth;
              var borderHeight = size.borderTopWidth + size.borderBottomWidth;
              var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
              var styleWidth = getStyleSize(style.width);
              if (styleWidth !== false) {
                size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
              }
              var styleHeight = getStyleSize(style.height);
              if (styleHeight !== false) {
                size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
              }
              size.innerWidth = size.width - (paddingWidth + borderWidth);
              size.innerHeight = size.height - (paddingHeight + borderHeight);
              size.outerWidth = size.width + marginWidth;
              size.outerHeight = size.height + marginHeight;
              return size;
            }
            return getSize;
          });
        },
        function(module2, exports2, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          (function(window2, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(96)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Unipointer) {
                return factory(window2, Unipointer);
              }.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(window, function factory(window2, Unipointer) {
            "use strict";
            function Unidragger() {
            }
            var proto = Unidragger.prototype = Object.create(Unipointer.prototype);
            proto.bindHandles = function() {
              this._bindHandles(true);
            };
            proto.unbindHandles = function() {
              this._bindHandles(false);
            };
            proto._bindHandles = function(isAdd) {
              isAdd = isAdd === void 0 ? true : isAdd;
              var bindMethod = isAdd ? "addEventListener" : "removeEventListener";
              var touchAction = isAdd ? this._touchActionValue : "";
              for (var i = 0; i < this.handles.length; i++) {
                var handle = this.handles[i];
                this._bindStartEvent(handle, isAdd);
                handle[bindMethod]("click", this);
                if (window2.PointerEvent) {
                  handle.style.touchAction = touchAction;
                }
              }
            };
            proto._touchActionValue = "none";
            proto.pointerDown = function(event, pointer) {
              var isOkay = this.okayPointerDown(event);
              if (!isOkay) {
                return;
              }
              this.pointerDownPointer = {
                pageX: pointer.pageX,
                pageY: pointer.pageY
              };
              event.preventDefault();
              this.pointerDownBlur();
              this._bindPostStartEvents(event);
              this.emitEvent("pointerDown", [event, pointer]);
            };
            var cursorNodes = {
              TEXTAREA: true,
              INPUT: true,
              SELECT: true,
              OPTION: true
            };
            var clickTypes = {
              radio: true,
              checkbox: true,
              button: true,
              submit: true,
              image: true,
              file: true
            };
            proto.okayPointerDown = function(event) {
              var isCursorNode = cursorNodes[event.target.nodeName];
              var isClickType = clickTypes[event.target.type];
              var isOkay = !isCursorNode || isClickType;
              if (!isOkay) {
                this._pointerReset();
              }
              return isOkay;
            };
            proto.pointerDownBlur = function() {
              var focused = document.activeElement;
              var canBlur = focused && focused.blur && focused != document.body;
              if (canBlur) {
                focused.blur();
              }
            };
            proto.pointerMove = function(event, pointer) {
              var moveVector = this._dragPointerMove(event, pointer);
              this.emitEvent("pointerMove", [event, pointer, moveVector]);
              this._dragMove(event, pointer, moveVector);
            };
            proto._dragPointerMove = function(event, pointer) {
              var moveVector = {
                x: pointer.pageX - this.pointerDownPointer.pageX,
                y: pointer.pageY - this.pointerDownPointer.pageY
              };
              if (!this.isDragging && this.hasDragStarted(moveVector)) {
                this._dragStart(event, pointer);
              }
              return moveVector;
            };
            proto.hasDragStarted = function(moveVector) {
              return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
            };
            proto.pointerUp = function(event, pointer) {
              this.emitEvent("pointerUp", [event, pointer]);
              this._dragPointerUp(event, pointer);
            };
            proto._dragPointerUp = function(event, pointer) {
              if (this.isDragging) {
                this._dragEnd(event, pointer);
              } else {
                this._staticClick(event, pointer);
              }
            };
            proto._dragStart = function(event, pointer) {
              this.isDragging = true;
              this.isPreventingClicks = true;
              this.dragStart(event, pointer);
            };
            proto.dragStart = function(event, pointer) {
              this.emitEvent("dragStart", [event, pointer]);
            };
            proto._dragMove = function(event, pointer, moveVector) {
              if (!this.isDragging) {
                return;
              }
              this.dragMove(event, pointer, moveVector);
            };
            proto.dragMove = function(event, pointer, moveVector) {
              event.preventDefault();
              this.emitEvent("dragMove", [event, pointer, moveVector]);
            };
            proto._dragEnd = function(event, pointer) {
              this.isDragging = false;
              setTimeout(function() {
                delete this.isPreventingClicks;
              }.bind(this));
              this.dragEnd(event, pointer);
            };
            proto.dragEnd = function(event, pointer) {
              this.emitEvent("dragEnd", [event, pointer]);
            };
            proto.onclick = function(event) {
              if (this.isPreventingClicks) {
                event.preventDefault();
              }
            };
            proto._staticClick = function(event, pointer) {
              if (this.isIgnoringMouseUp && event.type == "mouseup") {
                return;
              }
              this.staticClick(event, pointer);
              if (event.type != "mouseup") {
                this.isIgnoringMouseUp = true;
                setTimeout(function() {
                  delete this.isIgnoringMouseUp;
                }.bind(this), 400);
              }
            };
            proto.staticClick = function(event, pointer) {
              this.emitEvent("staticClick", [event, pointer]);
            };
            Unidragger.getPointerPoint = Unipointer.getPointerPoint;
            return Unidragger;
          });
        },
        function(module2, exports2, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          (function(window2, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(97)], __WEBPACK_AMD_DEFINE_RESULT__ = function(EvEmitter) {
                return factory(window2, EvEmitter);
              }.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(window, function factory(window2, EvEmitter) {
            "use strict";
            function noop() {
            }
            function Unipointer() {
            }
            var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);
            proto.bindStartEvent = function(elem) {
              this._bindStartEvent(elem, true);
            };
            proto.unbindStartEvent = function(elem) {
              this._bindStartEvent(elem, false);
            };
            proto._bindStartEvent = function(elem, isAdd) {
              isAdd = isAdd === void 0 ? true : isAdd;
              var bindMethod = isAdd ? "addEventListener" : "removeEventListener";
              var startEvent = "mousedown";
              if ("ontouchstart" in window2) {
                startEvent = "touchstart";
              } else if (window2.PointerEvent) {
                startEvent = "pointerdown";
              }
              elem[bindMethod](startEvent, this);
            };
            proto.handleEvent = function(event) {
              var method = "on" + event.type;
              if (this[method]) {
                this[method](event);
              }
            };
            proto.getTouch = function(touches) {
              for (var i = 0; i < touches.length; i++) {
                var touch = touches[i];
                if (touch.identifier == this.pointerIdentifier) {
                  return touch;
                }
              }
            };
            proto.onmousedown = function(event) {
              var button = event.button;
              if (button && button !== 0 && button !== 1) {
                return;
              }
              this._pointerDown(event, event);
            };
            proto.ontouchstart = function(event) {
              this._pointerDown(event, event.changedTouches[0]);
            };
            proto.onpointerdown = function(event) {
              this._pointerDown(event, event);
            };
            proto._pointerDown = function(event, pointer) {
              if (event.button || this.isPointerDown) {
                return;
              }
              this.isPointerDown = true;
              this.pointerIdentifier = pointer.pointerId !== void 0 ? pointer.pointerId : pointer.identifier;
              this.pointerDown(event, pointer);
            };
            proto.pointerDown = function(event, pointer) {
              this._bindPostStartEvents(event);
              this.emitEvent("pointerDown", [event, pointer]);
            };
            var postStartEvents = {
              mousedown: ["mousemove", "mouseup"],
              touchstart: ["touchmove", "touchend", "touchcancel"],
              pointerdown: ["pointermove", "pointerup", "pointercancel"]
            };
            proto._bindPostStartEvents = function(event) {
              if (!event) {
                return;
              }
              var events = postStartEvents[event.type];
              events.forEach(function(eventName) {
                window2.addEventListener(eventName, this);
              }, this);
              this._boundPointerEvents = events;
            };
            proto._unbindPostStartEvents = function() {
              if (!this._boundPointerEvents) {
                return;
              }
              this._boundPointerEvents.forEach(function(eventName) {
                window2.removeEventListener(eventName, this);
              }, this);
              delete this._boundPointerEvents;
            };
            proto.onmousemove = function(event) {
              this._pointerMove(event, event);
            };
            proto.onpointermove = function(event) {
              if (event.pointerId == this.pointerIdentifier) {
                this._pointerMove(event, event);
              }
            };
            proto.ontouchmove = function(event) {
              var touch = this.getTouch(event.changedTouches);
              if (touch) {
                this._pointerMove(event, touch);
              }
            };
            proto._pointerMove = function(event, pointer) {
              this.pointerMove(event, pointer);
            };
            proto.pointerMove = function(event, pointer) {
              this.emitEvent("pointerMove", [event, pointer]);
            };
            proto.onmouseup = function(event) {
              this._pointerUp(event, event);
            };
            proto.onpointerup = function(event) {
              if (event.pointerId == this.pointerIdentifier) {
                this._pointerUp(event, event);
              }
            };
            proto.ontouchend = function(event) {
              var touch = this.getTouch(event.changedTouches);
              if (touch) {
                this._pointerUp(event, touch);
              }
            };
            proto._pointerUp = function(event, pointer) {
              this._pointerDone();
              this.pointerUp(event, pointer);
            };
            proto.pointerUp = function(event, pointer) {
              this.emitEvent("pointerUp", [event, pointer]);
            };
            proto._pointerDone = function() {
              this._pointerReset();
              this._unbindPostStartEvents();
              this.pointerDone();
            };
            proto._pointerReset = function() {
              this.isPointerDown = false;
              delete this.pointerIdentifier;
            };
            proto.pointerDone = noop;
            proto.onpointercancel = function(event) {
              if (event.pointerId == this.pointerIdentifier) {
                this._pointerCancel(event, event);
              }
            };
            proto.ontouchcancel = function(event) {
              var touch = this.getTouch(event.changedTouches);
              if (touch) {
                this._pointerCancel(event, touch);
              }
            };
            proto._pointerCancel = function(event, pointer) {
              this._pointerDone();
              this.pointerCancel(event, pointer);
            };
            proto.pointerCancel = function(event, pointer) {
              this.emitEvent("pointerCancel", [event, pointer]);
            };
            Unipointer.getPointerPoint = function(pointer) {
              return {
                x: pointer.pageX,
                y: pointer.pageY
              };
            };
            return Unipointer;
          });
        },
        function(module2, exports2, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
          (function(global, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports2, __webpack_require__, exports2, module2) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(typeof window != "undefined" ? window : this, function() {
            "use strict";
            function EvEmitter() {
            }
            var proto = EvEmitter.prototype;
            proto.on = function(eventName, listener) {
              if (!eventName || !listener) {
                return;
              }
              var events = this._events = this._events || {};
              var listeners = events[eventName] = events[eventName] || [];
              if (listeners.indexOf(listener) == -1) {
                listeners.push(listener);
              }
              return this;
            };
            proto.once = function(eventName, listener) {
              if (!eventName || !listener) {
                return;
              }
              this.on(eventName, listener);
              var onceEvents = this._onceEvents = this._onceEvents || {};
              var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
              onceListeners[listener] = true;
              return this;
            };
            proto.off = function(eventName, listener) {
              var listeners = this._events && this._events[eventName];
              if (!listeners || !listeners.length) {
                return;
              }
              var index = listeners.indexOf(listener);
              if (index != -1) {
                listeners.splice(index, 1);
              }
              return this;
            };
            proto.emitEvent = function(eventName, args) {
              var listeners = this._events && this._events[eventName];
              if (!listeners || !listeners.length) {
                return;
              }
              listeners = listeners.slice(0);
              args = args || [];
              var onceListeners = this._onceEvents && this._onceEvents[eventName];
              for (var i = 0; i < listeners.length; i++) {
                var listener = listeners[i];
                var isOnce = onceListeners && onceListeners[listener];
                if (isOnce) {
                  this.off(eventName, listener);
                  delete onceListeners[listener];
                }
                listener.apply(this, args);
              }
              return this;
            };
            proto.allOff = function() {
              delete this._events;
              delete this._onceEvents;
            };
            return EvEmitter;
          });
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var pip = function pip2() {
            var _this = this;
            var player = this;
            function onPipBtnClick() {
              if (player.video !== document.pictureInPictureElement) {
                player.video.requestPictureInPicture();
              } else {
                document.exitPictureInPicture();
              }
            }
            player.on("pipBtnClick", onPipBtnClick);
            var onWebkitpresentationmodechanged = function onWebkitpresentationmodechanged2(e) {
              var mode = player.video.webkitPresentationMode;
              _this.pMode = mode;
              if (mode === _util.PresentationMode.PIP) {
                player.emit("requestPictureInPicture", e.pictureInPictureWindow);
              } else if (mode === _util.PresentationMode.INLINE) {
                player.emit("exitPictureInPicture");
              }
            };
            player.video.addEventListener("enterpictureinpicture", function(pipWindow) {
              (0, _util.addClass)(player.root, "xgplayer-pip-active");
              player.emit("requestPictureInPicture", pipWindow);
            });
            player.video.addEventListener("leavepictureinpicture", function() {
              (0, _util.removeClass)(player.root, "xgplayer-pip-active");
              player.emit("exitPictureInPicture");
            });
            (0, _util.checkWebkitSetPresentationMode)(player.video) && player.video.addEventListener("webkitpresentationmodechanged", onWebkitpresentationmodechanged);
            function onDestroy() {
              player.off("pipBtnClick", onPipBtnClick);
              player.off("destroy", onDestroy);
              (0, _util.checkWebkitSetPresentationMode)(player.video) && player.video.removeEventListener("webkitpresentationmodechanged", onWebkitpresentationmodechanged);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "pip",
            method: pip
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var playNext = function playNext2() {
            var player = this;
            var nextBtn = player.config.playNext;
            player.currentVideoIndex = -1;
            function onPlayNextBtnClick() {
              if (player.currentVideoIndex + 1 < nextBtn.urlList.length) {
                player.currentVideoIndex++;
                player.video.autoplay = true;
                player.src = nextBtn.urlList[player.currentVideoIndex];
                player.emit("playerNext", player.currentVideoIndex + 1);
                if (player.currentVideoIndex + 1 === nextBtn.urlList.length) {
                  player.emit("urlListEnd");
                }
              }
            }
            player.on("playNextBtnClick", onPlayNextBtnClick);
            function onDestroy() {
              player.off("playNextBtnClick", onPlayNextBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "playNext",
            method: playNext
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var reload = function reload2() {
            var player = this;
            var reloadConfig = player.config.reload;
            if (!reloadConfig) {
              return;
            }
            function onReloadBtnClick() {
              (0, _util.removeClass)(player.root, "xgplayer-is-error");
              player.src = player.config.url;
            }
            player.on("reloadBtnClick", onReloadBtnClick);
            function onDestroy() {
              player.off("reloadBtnClick", onReloadBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "reload",
            method: reload
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var rotate = function rotate2() {
            var player = this;
            var rotateConfig = player.config.rotate;
            if (!rotateConfig) {
              return;
            }
            function onRotateBtnClick() {
              player.rotate(rotateConfig.clockwise, rotateConfig.innerRotate);
            }
            player.on("rotateBtnClick", onRotateBtnClick);
            function onDestroy() {
              player.off("rotateBtnClick", onRotateBtnClick);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
            player.updateRotateDeg = function() {
              var player2 = this;
              if (!player2.rotateDeg) {
                player2.rotateDeg = 0;
              }
              var width = player2.root.offsetWidth;
              var height = player2.root.offsetHeight;
              var targetWidth = player2.video.videoWidth;
              var targetHeight = player2.video.videoHeight;
              if (!player2.config.rotate.innerRotate && player2.config.rotate.controlsFix) {
                player2.root.style.width = height + "px";
                player2.root.style.height = width + "px";
              }
              var scale = void 0;
              if (player2.rotateDeg === 0.25 || player2.rotateDeg === 0.75) {
                if (player2.config.rotate.innerRotate) {
                  if (targetWidth / targetHeight > height / width) {
                    var videoWidth = 0;
                    if (targetHeight / targetWidth > height / width) {
                      videoWidth = height * targetWidth / targetHeight;
                    } else {
                      videoWidth = width;
                    }
                    scale = height / videoWidth;
                  } else {
                    var videoHeight = 0;
                    if (targetHeight / targetWidth > height / width) {
                      videoHeight = height;
                    } else {
                      videoHeight = width * targetHeight / targetWidth;
                    }
                    scale = width / videoHeight;
                  }
                } else {
                  if (width >= height) {
                    scale = width / height;
                  } else {
                    scale = height / width;
                  }
                }
                scale = Number(scale.toFixed(5));
              } else {
                scale = 1;
              }
              if (player2.config.rotate.innerRotate) {
                player2.video.style.transformOrigin = "center center";
                player2.video.style.transform = "rotate(" + player2.rotateDeg + "turn) scale(" + scale + ")";
                player2.video.style.webKitTransform = "rotate(" + player2.rotateDeg + "turn) scale(" + scale + ")";
              } else {
                if (player2.config.rotate.controlsFix) {
                  player2.video.style.transformOrigin = "center center";
                  player2.video.style.transform = "rotate(" + player2.rotateDeg + "turn) scale(" + scale + ")";
                  player2.video.style.webKitTransform = "rotate(" + player2.rotateDeg + "turn) scale(" + scale + ")";
                } else {
                  player2.root.style.transformOrigin = "center center";
                  player2.root.style.transform = "rotate(" + player2.rotateDeg + "turn) scale(" + 1 + ")";
                  player2.root.style.webKitTransform = "rotate(" + player2.rotateDeg + "turn) scale(" + 1 + ")";
                }
              }
            };
            player.rotate = function() {
              var clockwise = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
              var innerRotate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
              var times = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
              var player2 = this;
              if (!player2.rotateDeg) {
                player2.rotateDeg = 0;
              }
              var factor = clockwise ? 1 : -1;
              player2.rotateDeg = (player2.rotateDeg + 1 + factor * 0.25 * times) % 1;
              this.updateRotateDeg();
              player2.emit("rotate", player2.rotateDeg * 360);
            };
          };
          exports2.default = {
            name: "rotate",
            method: rotate
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var screenShot = function screenShot2() {
            var player = this;
            var screenShotOptions = player.config.screenShot;
            var callBack = null;
            if (!screenShotOptions) {
              return;
            }
            player.video.setAttribute("crossOrigin", "anonymous");
            var encoderOptions = 0.92;
            if (screenShotOptions.quality || screenShotOptions.quality === 0) {
              encoderOptions = screenShotOptions.quality;
            }
            var type = screenShotOptions.type === void 0 ? "image/png" : screenShotOptions.type;
            var format = screenShotOptions.format === void 0 ? ".png" : screenShotOptions.format;
            var canvas = document.createElement("canvas");
            var canvasCtx = canvas.getContext("2d");
            var img = new Image();
            canvas.width = this.config.width || 600;
            canvas.height = this.config.height || 337.5;
            var saveScreenShot = function saveScreenShot2(data, filename) {
              var saveLink = document.createElement("a");
              saveLink.href = data;
              saveLink.download = filename;
              var event = document.createEvent("MouseEvents");
              event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
              saveLink.dispatchEvent(event);
            };
            player.screenShot = function() {
              var save = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
              save = screenShotOptions.saveImg === void 0 ? save : screenShotOptions.saveImg;
              canvas.width = player.video.videoWidth || 600;
              canvas.height = player.video.videoHeight || 337.5;
              callBack = screenShotOptions.callBack;
              img.onload = function() {
                canvasCtx.drawImage(player.video, 0, 0, canvas.width, canvas.height);
                img.src = canvas.toDataURL(type, encoderOptions).replace(type, "image/octet-stream");
                var screenShotImg = img.src.replace(/^data:image\/[^;]+/, "data:application/octet-stream");
                var saveFileName = screenShotOptions.fileName || player.lang.SCREENSHOT;
                player.emit("screenShot", screenShotImg);
                if (save && callBack) {
                  callBack(screenShotImg, saveFileName, format);
                } else {
                  save && saveScreenShot(screenShotImg, saveFileName + format);
                }
              }();
            };
            player.on("screenShotBtnClick", player.screenShot);
            function onDestroy() {
              player.off("screenShotBtnClick", player.screenShot);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "screenShot",
            method: screenShot
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _error = __webpack_require__(4);
          var _error2 = _interopRequireDefault(_error);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function stallCheck() {
            var player = this;
            if (!player.config.enableStallCheck)
              return;
            var lastCurrentTime = 0;
            var stallFlag = void 0, stallCheckTimer = void 0, progressTimer = void 0;
            player.once("complete", function() {
              progressTimer = setInterval(function() {
                if (player.currentTime - (lastCurrentTime || 0) > 0.1 || player.paused) {
                  if (stallFlag === 1 || stallFlag === 2) {
                    stallFlag = 0;
                    clearTimeout(stallCheckTimer);
                    stallCheckTimer = null;
                  }
                } else {
                  if (!stallFlag) {
                    stallFlag = 1;
                    stallCheckTimer = setTimeout(function() {
                      if (stallFlag === 1) {
                        stallFlag = 2;
                        player.emit("error", new _error2.default("STALL"));
                      }
                      stallCheckTimer = null;
                    }, 2e4);
                  }
                }
                lastCurrentTime = player.currentTime;
              }, 1e3);
            });
          }
          exports2.default = {
            name: "stallCheck",
            method: stallCheck
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _sniffer = __webpack_require__(5);
          var _sniffer2 = _interopRequireDefault(_sniffer);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var volume = function volume2() {
            var player = this;
            var root = player.root;
            var container = void 0, slider = void 0, bar = void 0, selected = void 0;
            function onCanplay() {
              if (!player.controls)
                return;
              player.volume = player.config.volume;
              container = player.controls.querySelector(".xgplayer-volume");
              if (!container)
                return;
              slider = container.querySelector(".xgplayer-slider");
              bar = container.querySelector(".xgplayer-bar");
              selected = container.querySelector(".xgplayer-drag");
              if (_sniffer2.default.device === "mobile") {
                if (player.volume === 0) {
                  player.video.muted = true;
                }
                onVolumeChange();
              }
            }
            player.once("canplay", onCanplay);
            function onVolumeBarClick(e) {
              if (!slider)
                return;
              player.video.muted = false;
              slider.focus();
              (0, _util.event)(e);
              var barRect = bar.getBoundingClientRect();
              var pos = { x: e.clientX, y: e.clientY };
              var height = selected.getBoundingClientRect().height;
              var isMove = false;
              var onMove = function onMove2(e2) {
                e2.preventDefault();
                e2.stopPropagation();
                (0, _util.event)(e2);
                isMove = true;
                var w = height - e2.clientY + pos.y;
                var now = w / barRect.height;
                selected.style.height = w + "px";
                player.volume = Math.max(Math.min(now, 1), 0);
              };
              var onUp = function onUp2(e2) {
                e2.preventDefault();
                e2.stopPropagation();
                (0, _util.event)(e2);
                window.removeEventListener("mousemove", onMove);
                window.removeEventListener("touchmove", onMove);
                window.removeEventListener("mouseup", onUp2);
                window.removeEventListener("touchend", onUp2);
                if (!isMove) {
                  var w = barRect.height - (e2.clientY - barRect.top);
                  var now = w / barRect.height;
                  selected.style.height = w + "px";
                  if (now <= 0) {
                    if (player.volume > 0) {
                      selected.volume = player.video.volume;
                    } else {
                      now = selected.volume;
                    }
                  }
                  player.volume = Math.max(Math.min(now, 1), 0);
                }
                slider.volume = player.volume;
                isMove = false;
              };
              window.addEventListener("mousemove", onMove);
              window.addEventListener("touchmove", onMove);
              window.addEventListener("mouseup", onUp);
              window.addEventListener("touchend", onUp);
              return false;
            }
            player.on("volumeBarClick", onVolumeBarClick);
            function onVolumeIconClick() {
              if (_sniffer2.default.device === "mobile") {
                if (player.video.muted) {
                  player.video.muted = false;
                  player.emit("unmute");
                  player.volume = 1;
                } else {
                  player.video.muted = true;
                  player.emit("mute");
                  player.volume = 0;
                }
              } else {
                if (!slider)
                  return;
                player.video.muted = false;
                if (player.volume < 0.1) {
                  if (slider.volume < 0.1) {
                    player.volume = 0.6;
                  } else {
                    player.volume = slider.volume;
                  }
                  player.emit("unmute");
                } else {
                  player.volume = 0;
                  player.emit("mute");
                }
              }
            }
            player.on("volumeIconClick", onVolumeIconClick);
            function onVolumeIconEnter() {
              (0, _util.addClass)(root, "xgplayer-volume-active");
              if (container) {
                container.focus();
              }
            }
            player.on("volumeIconEnter", onVolumeIconEnter);
            function onVolumeIconLeave() {
              (0, _util.removeClass)(root, "xgplayer-volume-active");
            }
            player.on("volumeIconLeave", onVolumeIconLeave);
            var _changeTimer = null;
            function onVolumeChange() {
              if (_changeTimer) {
                clearTimeout(_changeTimer);
              }
              _changeTimer = setTimeout(function() {
                if (_sniffer2.default.device === "mobile") {
                  (0, _util.removeClass)(root, "xgplayer-volume-muted");
                  (0, _util.removeClass)(root, "xgplayer-volume-large");
                  if (player.video.muted || player.video.defaultMuted) {
                    if (!player.video.muted) {
                      player.video.muted = true;
                    }
                    player.video.defaultMuted = false;
                    (0, _util.addClass)(root, "xgplayer-volume-muted");
                  } else {
                    (0, _util.addClass)(root, "xgplayer-volume-large");
                  }
                } else {
                  (0, _util.removeClass)(root, "xgplayer-volume-muted");
                  (0, _util.removeClass)(root, "xgplayer-volume-small");
                  (0, _util.removeClass)(root, "xgplayer-volume-large");
                  if (player.volume === 0 || player.muted) {
                    (0, _util.addClass)(root, "xgplayer-volume-muted");
                  } else if (player.volume < 0.5) {
                    (0, _util.addClass)(root, "xgplayer-volume-small");
                  } else {
                    (0, _util.addClass)(root, "xgplayer-volume-large");
                  }
                  if (!bar)
                    return;
                  var containerHeight = bar.getBoundingClientRect().height || 76;
                  selected.style.height = player.volume * containerHeight + "px";
                }
              }, 50);
            }
            player.on("volumechange", onVolumeChange);
            function onDestroy() {
              player.off("canplay", onCanplay);
              player.off("volumeBarClick", onVolumeBarClick);
              player.off("volumeIconClick", onVolumeIconClick);
              player.off("volumeIconEnter", onVolumeIconEnter);
              player.off("volumeIconLeave", onVolumeIconLeave);
              player.off("volumechange", onVolumeChange);
              player.off("destroy", onDestroy);
              if (_changeTimer) {
                clearTimeout(_changeTimer);
                _changeTimer = null;
              }
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "volume",
            method: volume
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          var _xgplayerSubtitles = __webpack_require__(106);
          var _xgplayerSubtitles2 = _interopRequireDefault(_xgplayerSubtitles);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var defaultStyle = {
            follow: true,
            mode: "stroke",
            followBottom: 50,
            fitVideo: true,
            offsetBottom: 2,
            baseSizeX: 49,
            baseSizeY: 28,
            minSize: 16,
            minMobileSize: 13,
            line: "double",
            fontColor: "#fff"
          };
          var XgSubtitles = function() {
            function XgSubtitles2(player, list, style) {
              var _this = this;
              _classCallCheck(this, XgSubtitles2);
              var subtitle = this.create(list, style, player.textTrackShowDefault);
              subtitle.attachPlayer(player);
              this.subtitle = subtitle;
              this.player = player;
              this.positionData = {
                vBottom: 0,
                marginBottom: 0
              };
              this.isActive = false;
              this.followBottom = style.followBottom;
              ["onSubtitleResize", "onFocus", "onBlur"].map(function(item) {
                _this[item] = _this[item].bind(_this);
              });
              if (player.controls && style.follow) {
                this.subtitle.on("resize", this.onSubtitleResize);
                player.on("focus", this.onFocus);
                player.on("blur", this.onBlur);
              }
            }
            _createClass(XgSubtitles2, [{
              key: "create",
              value: function create(textTrack2) {
                var style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var defaultOpen = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var config = {
                  subTitles: textTrack2,
                  defaultOpen
                };
                Object.keys(style).map(function(key) {
                  config[key] = style[key];
                });
                return new _xgplayerSubtitles2.default(config);
              }
            }, {
              key: "switch",
              value: function _switch(subtitle) {
                return this.subtitle.switch(subtitle);
              }
            }, {
              key: "switchOff",
              value: function switchOff() {
                return this.subtitle.switchOff();
              }
            }, {
              key: "setSubTitles",
              value: function setSubTitles(subtitles, showDefault, isNeedMove) {
                return this.subtitle.setSubTitles(subtitles, showDefault, isNeedMove);
              }
            }, {
              key: "onFocus",
              value: function onFocus() {
                var _positionData = this.positionData, marginBottom = _positionData.marginBottom, vBottom = _positionData.vBottom;
                if (this.isActive || !marginBottom) {
                  return;
                }
                this.isActive = true;
                var bottom = marginBottom + vBottom;
                if (this.followBottom > bottom) {
                  bottom = this.followBottom;
                }
                this.subtitle && (this.subtitle.root.style.bottom = bottom + "px");
              }
            }, {
              key: "onBlur",
              value: function onBlur() {
                this.isActive = false;
                var bottom = this.positionData.vBottom + this.positionData.marginBottom;
                this.subtitle && (this.subtitle.root.style.bottom = bottom + "px");
              }
            }, {
              key: "onSubtitleResize",
              value: function onSubtitleResize(data) {
                this.positionData.vBottom = data.vBottom;
                this.positionData.marginBottom = data.marginBottom;
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.subtitle.off("resize", this.onSubtitleResize);
                this.player.off("focus", this.onFocus);
                this.player.off("blur", this.onBlur);
                this.subtitle.destroy();
                this.subtitle = null;
              }
            }]);
            return XgSubtitles2;
          }();
          var textTrack = function textTrack2() {
            var _this2 = this;
            var player = this;
            var textTrack3 = player.config.textTrack;
            if (!textTrack3) {
              return;
            }
            var textTrackStyle = player.config.textTrackStyle || {};
            Object.keys(defaultStyle).map(function(key) {
              if (textTrackStyle[key] === void 0) {
                textTrackStyle[key] = defaultStyle[key];
              }
            });
            player.textTrackShowDefault = false;
            player.config.textTrack.map(function(item, index) {
              if (!item.id && !item.language) {
                item.id = index;
              }
              !item.url && (item.url = item.src);
              !item.language && (item.language = item.srclang);
              item.isDefault === void 0 && (item.isDefault = item.default);
              !player.textTrackShowDefault && (player.textTrackShowDefault = item.isDefault || item.default);
            });
            this.subTitles = new XgSubtitles(player, player.config.textTrack, textTrackStyle);
            player.setSubTitles = function(textTrack4) {
              var needRemove = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
              var showDefault = false;
              textTrack4.map(function(item, index) {
                if (!item.id && !item.language) {
                  item.id = index;
                }
                !item.url && (item.url = item.src);
                !item.language && (item.language = item.srclang);
                item.isDefault === void 0 && (item.isDefault = item.default);
                item.isDefault && (showDefault = true);
              });
              player.textTrackShowDefault = showDefault;
              _this2.subTitles.setSubTitles(textTrack4, showDefault, needRemove);
              player.emit("subtitle_change", {
                off: false,
                isListUpdate: true,
                list: textTrack4
              });
            };
            player.switchSubTitle = function() {
              var subtitle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { id: "", language: "" };
              _this2.subTitles.switch(subtitle).then(function(data) {
                if (data.code === 0) {
                  subtitle.off = false;
                  subtitle.isListUpdate = false;
                  subtitle.list = [];
                  player.emit("subtitle_change", subtitle);
                }
              });
            };
            player.switchOffSubtile = function() {
              _this2.subTitles.switchOff();
              player.emit("subtitle_change", {
                off: true,
                isListUpdate: false,
                list: []
              });
            };
            function onDestroy() {
              this.subTitles.destroy();
              this.subTitles = null;
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "textTrack",
            method: textTrack
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          !function(t, e) {
            true ? module2.exports = e() : void 0;
          }(this, function() {
            "use strict";
            function t(t2) {
              return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
            }
            function e(t2, e2) {
              return e2 = { exports: {} }, t2(e2, e2.exports), e2.exports;
            }
            function n(t2) {
              var e2, n2;
              this.promise = new t2(function(t3, r2) {
                if (e2 !== void 0 || n2 !== void 0)
                  throw TypeError("Bad Promise constructor");
                e2 = t3, n2 = r2;
              }), this.resolve = F(e2), this.reject = F(n2);
            }
            function r(t2) {
              var e2 = t2.length;
              return e2 === 3 ? (60 * (60 * Number(t2[0]) + Number(t2[1])) * 1e3 + 1e3 * Number(t2[2])) / 1e3 : e2 === 2 ? (60 * Number(t2[0]) * 1e3 + 1e3 * Number(t2[1])) / 1e3 : Number(t2[0]);
            }
            function i(t2) {
              return /^(\-|\+)?\d+(\.\d+)?$/.test(t2);
            }
            function o(t2) {
              return t2;
            }
            function s(t2, e2) {
              return t2 >= 0 && t2 < e2.length ? e2[t2] : "";
            }
            function a(t2, e2) {
              if (!t2)
                return false;
              if (t2.classList)
                return Array.prototype.some.call(t2.classList, function(t3) {
                  return t3 === e2;
                });
              var n2 = t2.className && Je(t2.className) === "object" ? t2.getAttribute("class") : t2.className;
              return n2 && !!n2.match(new RegExp("(\\s|^)" + e2 + "(\\s|$)"));
            }
            function u(t2, e2) {
              t2 && (t2.classList ? e2.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function(e3) {
                e3 && t2.classList.add(e3);
              }) : a(t2, e2) || (t2.className && Je(t2.className) === "object" ? t2.setAttribute("class", t2.getAttribute("class") + " " + e2) : t2.className += " " + e2));
            }
            function c(t2, e2) {
              t2 && (t2.classList ? e2.split(/\s+/g).forEach(function(e3) {
                t2.classList.remove(e3);
              }) : a(t2, e2) && e2.split(/\s+/g).forEach(function(e3) {
                var n2 = new RegExp("(\\s|^)" + e3 + "(\\s|$)");
                t2.className && Je(t2.className) === "object" ? t2.setAttribute("class", t2.getAttribute("class").replace(n2, " ")) : t2.className = t2.className.replace(n2, " ");
              }));
            }
            function l(t2, e2, n2) {
              var r2 = e2.length;
              if (r2 < 1)
                return -1;
              if (n2 = n2 < 0 ? 0 : n2 >= r2 ? r2 - 1 : n2, e2[n2].start <= t2 && t2 < e2[n2].end)
                return n2;
              for (var i2 = e2[n2].end <= t2 ? n2 + 1 : 0; i2 < r2; i2++) {
                if (e2[i2].start <= t2 && t2 < e2[i2].end)
                  return i2;
                if (t2 > e2[i2].end && i2 + 1 < r2 && t2 < e2[i2 + 1].start)
                  return -1;
                if (t2 > e2[i2].end && i2 + 1 >= r2)
                  return -1;
              }
              return -1;
            }
            function f(t2, e2, n2) {
              var r2 = e2.length;
              if (r2 < 1)
                return [];
              var i2 = [];
              if ((n2 = n2 < 0 ? 0 : n2 >= r2 ? r2 - 1 : n2) < r2)
                for (var o2 = e2[n2].end <= t2 ? n2 : 0; o2 < r2 && (e2[o2].start <= t2 && t2 < e2[o2].end && i2.push(o2), !(t2 < e2[o2].start)); o2++)
                  ;
              return i2;
            }
            function h(t2) {
              return Object.prototype.toString.call(t2).match(/([^\s.*]+)(?=]$)/g)[0];
            }
            function d() {
              var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "div", e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", i2 = document.createElement(t2);
              return i2.className = r2, i2.innerHTML = e2, kr(n2).forEach(function(e3) {
                var r3 = e3, o2 = n2[e3];
                t2 === "video" || t2 === "audio" || t2 === "live-video" ? o2 && i2.setAttribute(r3, o2) : i2.setAttribute(r3, o2);
              }), i2;
            }
            function p() {
              var t2 = navigator.userAgent, e2 = /(?:Windows Phone)/.test(t2), n2 = /(?:SymbianOS)/.test(t2) || e2, r2 = /(?:Android)/.test(t2), i2 = /(?:Firefox)/.test(t2), o2 = /(?:iPad|PlayBook)/.test(t2) || r2 && !/(?:Mobile)/.test(t2) || i2 && /(?:Tablet)/.test(t2);
              return /(?:iPhone)/.test(t2) && !o2 || r2 || n2 || o2;
            }
            function v(t2) {
              var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n2 = "";
              t2.map(function(t3) {
                n2 += " " + e2 + " " + t3.key + " {" + t3.style + "}";
              });
              var r2 = document.createElement("style"), i2 = document.head || document.getElementsByTagName("head")[0];
              if (r2.type = "text/css", r2.id = "ssss", r2.styleSheet) {
                var o2 = function() {
                  try {
                    r2.styleSheet.cssText = n2;
                  } catch (t3) {
                  }
                };
                r2.styleSheet.disabled ? setTimeout(o2, 10) : o2();
              } else {
                var s2 = document.createTextNode(n2);
                r2.appendChild(s2);
              }
              i2.appendChild(r2);
            }
            function y(t2, e2) {
              Ir || (Ir = new Lr()), Ir.addObserver(t2, e2);
            }
            function g(t2, e2) {
              Ir && Ir.unObserver(t2, e2);
            }
            function m(t2) {
              var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = { code: Fr[t2].code, msg: Fr[t2].msg };
              return kr(e2).map(function(t3) {
                n2[t3] = e2[t3];
              }), n2;
            }
            function _(t2, e2, n2, r2, i2) {
              i2 ? n2(m(2, i2), { format: r2.format }) : r2.format ? (t2.list = r2.list, t2.format = r2.format, t2.styles = r2.styles, e2(t2)) : n2(m(3));
            }
            function x(t2) {
              return new xr(function(e2, n2) {
                if (t2.list)
                  return void e2(t2);
                if (t2.json) {
                  var r2 = Nr.parseJson(t2.json);
                  return t2.list = r2, t2.format = "json", void e2(t2);
                }
                if (t2.stringContent && !t2.url)
                  Nr.parse(t2.stringContent, function(r3, i3) {
                    _(t2, e2, n2, r3, i3);
                  });
                else if (t2.url)
                  new Tr({ url: t2.url, type: "text" }).then(function(r3) {
                    Nr.parse(r3.res.response, function(r4, i3) {
                      _(t2, e2, n2, r4, i3);
                    });
                  }).catch(function(e3) {
                    var r3 = m(1, { statusText: e3.statusText, status: e3.status, type: e3.type, message: "http load error", url: t2.url });
                    n2(r3);
                  });
                else {
                  var i2 = m(8);
                  n2(i2);
                }
              });
            }
            function b(t2, e2) {
              return !!(t2.id && t2.id === e2.id || t2.language && t2.language === e2.language);
            }
            var k = function(t2) {
              if (t2 == void 0)
                throw TypeError("Can't call method on  " + t2);
              return t2;
            }, w = function(t2) {
              return Object(k(t2));
            }, T = {}.hasOwnProperty, S = function(t2, e2) {
              return T.call(t2, e2);
            }, O = e(function(t2) {
              var e2 = t2.exports = { version: "2.6.12" };
              typeof __e == "number" && (__e = e2);
            }), E = (O.version, e(function(t2) {
              var e2 = t2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
              typeof __g == "number" && (__g = e2);
            })), P = e(function(t2) {
              var e2 = E["__core-js_shared__"] || (E["__core-js_shared__"] = {});
              (t2.exports = function(t3, n2) {
                return e2[t3] || (e2[t3] = n2 !== void 0 ? n2 : {});
              })("versions", []).push({ version: O.version, mode: "pure", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
            }), j = 0, M = Math.random(), A = function(t2) {
              return "Symbol(".concat(t2 === void 0 ? "" : t2, ")_", (++j + M).toString(36));
            }, C = P("keys"), R = function(t2) {
              return C[t2] || (C[t2] = A(t2));
            }, N = R("IE_PROTO"), L = Object.prototype, I = Object.getPrototypeOf || function(t2) {
              return t2 = w(t2), S(t2, N) ? t2[N] : typeof t2.constructor == "function" && t2 instanceof t2.constructor ? t2.constructor.prototype : t2 instanceof Object ? L : null;
            }, F = function(t2) {
              if (typeof t2 != "function")
                throw TypeError(t2 + " is not a function!");
              return t2;
            }, z = function(t2, e2, n2) {
              if (F(t2), e2 === void 0)
                return t2;
              switch (n2) {
                case 1:
                  return function(n3) {
                    return t2.call(e2, n3);
                  };
                case 2:
                  return function(n3, r2) {
                    return t2.call(e2, n3, r2);
                  };
                case 3:
                  return function(n3, r2, i2) {
                    return t2.call(e2, n3, r2, i2);
                  };
              }
              return function() {
                return t2.apply(e2, arguments);
              };
            }, B = function(t2) {
              return typeof t2 == "object" ? t2 !== null : typeof t2 == "function";
            }, D = function(t2) {
              if (!B(t2))
                throw TypeError(t2 + " is not an object!");
              return t2;
            }, H = function(t2) {
              try {
                return !!t2();
              } catch (t3) {
                return true;
              }
            }, V = !H(function() {
              return Object.defineProperty({}, "a", { get: function() {
                return 7;
              } }).a != 7;
            }), W = E.document, G = B(W) && B(W.createElement), U = function(t2) {
              return G ? W.createElement(t2) : {};
            }, $ = !V && !H(function() {
              return Object.defineProperty(U("div"), "a", { get: function() {
                return 7;
              } }).a != 7;
            }), K = function(t2, e2) {
              if (!B(t2))
                return t2;
              var n2, r2;
              if (e2 && typeof (n2 = t2.toString) == "function" && !B(r2 = n2.call(t2)))
                return r2;
              if (typeof (n2 = t2.valueOf) == "function" && !B(r2 = n2.call(t2)))
                return r2;
              if (!e2 && typeof (n2 = t2.toString) == "function" && !B(r2 = n2.call(t2)))
                return r2;
              throw TypeError("Can't convert object to primitive value");
            }, J = Object.defineProperty, Y = { f: V ? Object.defineProperty : function(t2, e2, n2) {
              if (D(t2), e2 = K(e2, true), D(n2), $)
                try {
                  return J(t2, e2, n2);
                } catch (t3) {
                }
              if ("get" in n2 || "set" in n2)
                throw TypeError("Accessors not supported!");
              return "value" in n2 && (t2[e2] = n2.value), t2;
            } }, X = function(t2, e2) {
              return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
            }, q = V ? function(t2, e2, n2) {
              return Y.f(t2, e2, X(1, n2));
            } : function(t2, e2, n2) {
              return t2[e2] = n2, t2;
            }, Z = function(t2, e2, n2) {
              var r2, i2, o2, s2 = t2 & Z.F, a2 = t2 & Z.G, u2 = t2 & Z.S, c2 = t2 & Z.P, l2 = t2 & Z.B, f2 = t2 & Z.W, h2 = a2 ? O : O[e2] || (O[e2] = {}), d2 = h2.prototype, p2 = a2 ? E : u2 ? E[e2] : (E[e2] || {}).prototype;
              a2 && (n2 = e2);
              for (r2 in n2)
                (i2 = !s2 && p2 && p2[r2] !== void 0) && S(h2, r2) || (o2 = i2 ? p2[r2] : n2[r2], h2[r2] = a2 && typeof p2[r2] != "function" ? n2[r2] : l2 && i2 ? z(o2, E) : f2 && p2[r2] == o2 ? function(t3) {
                  var e3 = function(e4, n3, r3) {
                    if (this instanceof t3) {
                      switch (arguments.length) {
                        case 0:
                          return new t3();
                        case 1:
                          return new t3(e4);
                        case 2:
                          return new t3(e4, n3);
                      }
                      return new t3(e4, n3, r3);
                    }
                    return t3.apply(this, arguments);
                  };
                  return e3.prototype = t3.prototype, e3;
                }(o2) : c2 && typeof o2 == "function" ? z(Function.call, o2) : o2, c2 && ((h2.virtual || (h2.virtual = {}))[r2] = o2, t2 & Z.R && d2 && !d2[r2] && q(d2, r2, o2)));
            };
            Z.F = 1, Z.G = 2, Z.S = 4, Z.P = 8, Z.B = 16, Z.W = 32, Z.U = 64, Z.R = 128;
            var Q = Z, tt = function(t2, e2) {
              var n2 = (O.Object || {})[t2] || Object[t2], r2 = {};
              r2[t2] = e2(n2), Q(Q.S + Q.F * H(function() {
                n2(1);
              }), "Object", r2);
            };
            tt("getPrototypeOf", function() {
              return function(t2) {
                return I(w(t2));
              };
            });
            var et = O.Object.getPrototypeOf, nt = t(e(function(t2) {
              t2.exports = { default: et, __esModule: true };
            })), rt = t(e(function(t2, e2) {
              e2.__esModule = true, e2.default = function(t3, e3) {
                if (!(t3 instanceof e3))
                  throw new TypeError("Cannot call a class as a function");
              };
            })), it = Math.ceil, ot = Math.floor, st = function(t2) {
              return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? ot : it)(t2);
            }, at = q, ut = {}, ct = {}.toString, lt = function(t2) {
              return ct.call(t2).slice(8, -1);
            }, ft = Object("z").propertyIsEnumerable(0) ? Object : function(t2) {
              return lt(t2) == "String" ? t2.split("") : Object(t2);
            }, ht = function(t2) {
              return ft(k(t2));
            }, dt = Math.min, pt = function(t2) {
              return t2 > 0 ? dt(st(t2), 9007199254740991) : 0;
            }, vt = Math.max, yt = Math.min, gt = function(t2, e2) {
              return t2 = st(t2), t2 < 0 ? vt(t2 + e2, 0) : yt(t2, e2);
            }, mt = function(t2) {
              return function(e2, n2, r2) {
                var i2, o2 = ht(e2), s2 = pt(o2.length), a2 = gt(r2, s2);
                if (t2 && n2 != n2) {
                  for (; s2 > a2; )
                    if ((i2 = o2[a2++]) != i2)
                      return true;
                } else
                  for (; s2 > a2; a2++)
                    if ((t2 || a2 in o2) && o2[a2] === n2)
                      return t2 || a2 || 0;
                return !t2 && -1;
              };
            }(false), _t = R("IE_PROTO"), xt = function(t2, e2) {
              var n2, r2 = ht(t2), i2 = 0, o2 = [];
              for (n2 in r2)
                n2 != _t && S(r2, n2) && o2.push(n2);
              for (; e2.length > i2; )
                S(r2, n2 = e2[i2++]) && (~mt(o2, n2) || o2.push(n2));
              return o2;
            }, bt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), kt = Object.keys || function(t2) {
              return xt(t2, bt);
            }, wt = V ? Object.defineProperties : function(t2, e2) {
              D(t2);
              for (var n2, r2 = kt(e2), i2 = r2.length, o2 = 0; i2 > o2; )
                Y.f(t2, n2 = r2[o2++], e2[n2]);
              return t2;
            }, Tt = E.document, St = Tt && Tt.documentElement, Ot = R("IE_PROTO"), Et = function() {
            }, Pt = function() {
              var t2, e2 = U("iframe"), n2 = bt.length;
              for (e2.style.display = "none", St.appendChild(e2), e2.src = "javascript:", (t2 = e2.contentWindow.document).open(), t2.write("<script>document.F=Object<\/script>"), t2.close(), Pt = t2.F; n2--; )
                delete Pt.prototype[bt[n2]];
              return Pt();
            }, jt = Object.create || function(t2, e2) {
              var n2;
              return t2 !== null ? (Et.prototype = D(t2), n2 = new Et(), Et.prototype = null, n2[Ot] = t2) : n2 = Pt(), e2 === void 0 ? n2 : wt(n2, e2);
            }, Mt = e(function(t2) {
              var e2 = P("wks"), n2 = E.Symbol, r2 = typeof n2 == "function";
              (t2.exports = function(t3) {
                return e2[t3] || (e2[t3] = r2 && n2[t3] || (r2 ? n2 : A)("Symbol." + t3));
              }).store = e2;
            }), At = Y.f, Ct = Mt("toStringTag"), Rt = function(t2, e2, n2) {
              t2 && !S(t2 = n2 ? t2 : t2.prototype, Ct) && At(t2, Ct, { configurable: true, value: e2 });
            }, Nt = {};
            q(Nt, Mt("iterator"), function() {
              return this;
            });
            var Lt = function(t2, e2, n2) {
              t2.prototype = jt(Nt, { next: X(1, n2) }), Rt(t2, e2 + " Iterator");
            }, It = Mt("iterator"), Ft = !([].keys && "next" in [].keys()), zt = function() {
              return this;
            }, Bt = function(t2, e2, n2, r2, i2, o2, s2) {
              Lt(n2, e2, r2);
              var a2, u2, c2, l2 = function(t3) {
                if (!Ft && t3 in p2)
                  return p2[t3];
                switch (t3) {
                  case "keys":
                  case "values":
                    return function() {
                      return new n2(this, t3);
                    };
                }
                return function() {
                  return new n2(this, t3);
                };
              }, f2 = e2 + " Iterator", h2 = i2 == "values", d2 = false, p2 = t2.prototype, v2 = p2[It] || p2["@@iterator"] || i2 && p2[i2], y2 = v2 || l2(i2), g2 = i2 ? h2 ? l2("entries") : y2 : void 0, m2 = e2 == "Array" ? p2.entries || v2 : v2;
              if (m2 && (c2 = I(m2.call(new t2()))) !== Object.prototype && c2.next && Rt(c2, f2, true), h2 && v2 && v2.name !== "values" && (d2 = true, y2 = function() {
                return v2.call(this);
              }), s2 && (Ft || d2 || !p2[It]) && q(p2, It, y2), ut[e2] = y2, ut[f2] = zt, i2)
                if (a2 = { values: h2 ? y2 : l2("values"), keys: o2 ? y2 : l2("keys"), entries: g2 }, s2)
                  for (u2 in a2)
                    u2 in p2 || at(p2, u2, a2[u2]);
                else
                  Q(Q.P + Q.F * (Ft || d2), e2, a2);
              return a2;
            }, Dt = function(t2) {
              return function(e2, n2) {
                var r2, i2, o2 = String(k(e2)), s2 = st(n2), a2 = o2.length;
                return s2 < 0 || s2 >= a2 ? t2 ? "" : void 0 : (r2 = o2.charCodeAt(s2), r2 < 55296 || r2 > 56319 || s2 + 1 === a2 || (i2 = o2.charCodeAt(s2 + 1)) < 56320 || i2 > 57343 ? t2 ? o2.charAt(s2) : r2 : t2 ? o2.slice(s2, s2 + 2) : i2 - 56320 + (r2 - 55296 << 10) + 65536);
              };
            }(true);
            Bt(String, "String", function(t2) {
              this._t = String(t2), this._i = 0;
            }, function() {
              var t2, e2 = this._t, n2 = this._i;
              return n2 >= e2.length ? { value: void 0, done: true } : (t2 = Dt(e2, n2), this._i += t2.length, { value: t2, done: false });
            });
            var Ht = function(t2, e2) {
              return { value: e2, done: !!t2 };
            };
            Bt(Array, "Array", function(t2, e2) {
              this._t = ht(t2), this._i = 0, this._k = e2;
            }, function() {
              var t2 = this._t, e2 = this._k, n2 = this._i++;
              return !t2 || n2 >= t2.length ? (this._t = void 0, Ht(1)) : e2 == "keys" ? Ht(0, n2) : e2 == "values" ? Ht(0, t2[n2]) : Ht(0, [n2, t2[n2]]);
            }, "values");
            ut.Arguments = ut.Array;
            for (var Vt = Mt("toStringTag"), Wt = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), Gt = 0; Gt < Wt.length; Gt++) {
              var Ut = Wt[Gt], $t = E[Ut], Kt = $t && $t.prototype;
              Kt && !Kt[Vt] && q(Kt, Vt, Ut), ut[Ut] = ut.Array;
            }
            var Jt = { f: Mt }, Yt = Jt.f("iterator"), Xt = e(function(t2) {
              t2.exports = { default: Yt, __esModule: true };
            });
            t(Xt);
            var qt = e(function(t2) {
              var e2 = A("meta"), n2 = Y.f, r2 = 0, i2 = Object.isExtensible || function() {
                return true;
              }, o2 = !H(function() {
                return i2(Object.preventExtensions({}));
              }), s2 = function(t3) {
                n2(t3, e2, { value: { i: "O" + ++r2, w: {} } });
              }, a2 = function(t3, n3) {
                if (!B(t3))
                  return typeof t3 == "symbol" ? t3 : (typeof t3 == "string" ? "S" : "P") + t3;
                if (!S(t3, e2)) {
                  if (!i2(t3))
                    return "F";
                  if (!n3)
                    return "E";
                  s2(t3);
                }
                return t3[e2].i;
              }, u2 = function(t3, n3) {
                if (!S(t3, e2)) {
                  if (!i2(t3))
                    return true;
                  if (!n3)
                    return false;
                  s2(t3);
                }
                return t3[e2].w;
              }, c2 = function(t3) {
                return o2 && l2.NEED && i2(t3) && !S(t3, e2) && s2(t3), t3;
              }, l2 = t2.exports = { KEY: e2, NEED: false, fastKey: a2, getWeak: u2, onFreeze: c2 };
            }), Zt = (qt.KEY, qt.NEED, qt.fastKey, qt.getWeak, qt.onFreeze, Y.f), Qt = function(t2) {
              var e2 = O.Symbol || (O.Symbol = {});
              t2.charAt(0) == "_" || t2 in e2 || Zt(e2, t2, { value: Jt.f(t2) });
            }, te = { f: Object.getOwnPropertySymbols }, ee = { f: {}.propertyIsEnumerable }, ne = function(t2) {
              var e2 = kt(t2), n2 = te.f;
              if (n2)
                for (var r2, i2 = n2(t2), o2 = ee.f, s2 = 0; i2.length > s2; )
                  o2.call(t2, r2 = i2[s2++]) && e2.push(r2);
              return e2;
            }, re = Array.isArray || function(t2) {
              return lt(t2) == "Array";
            }, ie = bt.concat("length", "prototype"), oe = { f: Object.getOwnPropertyNames || function(t2) {
              return xt(t2, ie);
            } }, se = oe.f, ae = {}.toString, ue = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], ce = function(t2) {
              try {
                return se(t2);
              } catch (t3) {
                return ue.slice();
              }
            }, le = { f: function(t2) {
              return ue && ae.call(t2) == "[object Window]" ? ce(t2) : se(ht(t2));
            } }, fe = Object.getOwnPropertyDescriptor, he = { f: V ? fe : function(t2, e2) {
              if (t2 = ht(t2), e2 = K(e2, true), $)
                try {
                  return fe(t2, e2);
                } catch (t3) {
                }
              if (S(t2, e2))
                return X(!ee.f.call(t2, e2), t2[e2]);
            } }, de = qt.KEY, pe = he.f, ve = Y.f, ye = le.f, ge = E.Symbol, me = E.JSON, _e = me && me.stringify, xe = Mt("_hidden"), be = Mt("toPrimitive"), ke = {}.propertyIsEnumerable, we = P("symbol-registry"), Te = P("symbols"), Se = P("op-symbols"), Oe = Object.prototype, Ee = typeof ge == "function" && !!te.f, Pe = E.QObject, je = !Pe || !Pe.prototype || !Pe.prototype.findChild, Me = V && H(function() {
              return jt(ve({}, "a", { get: function() {
                return ve(this, "a", { value: 7 }).a;
              } })).a != 7;
            }) ? function(t2, e2, n2) {
              var r2 = pe(Oe, e2);
              r2 && delete Oe[e2], ve(t2, e2, n2), r2 && t2 !== Oe && ve(Oe, e2, r2);
            } : ve, Ae = function(t2) {
              var e2 = Te[t2] = jt(ge.prototype);
              return e2._k = t2, e2;
            }, Ce = Ee && typeof ge.iterator == "symbol" ? function(t2) {
              return typeof t2 == "symbol";
            } : function(t2) {
              return t2 instanceof ge;
            }, Re = function(t2, e2, n2) {
              return t2 === Oe && Re(Se, e2, n2), D(t2), e2 = K(e2, true), D(n2), S(Te, e2) ? (n2.enumerable ? (S(t2, xe) && t2[xe][e2] && (t2[xe][e2] = false), n2 = jt(n2, { enumerable: X(0, false) })) : (S(t2, xe) || ve(t2, xe, X(1, {})), t2[xe][e2] = true), Me(t2, e2, n2)) : ve(t2, e2, n2);
            }, Ne = function(t2, e2) {
              D(t2);
              for (var n2, r2 = ne(e2 = ht(e2)), i2 = 0, o2 = r2.length; o2 > i2; )
                Re(t2, n2 = r2[i2++], e2[n2]);
              return t2;
            }, Le = function(t2, e2) {
              return e2 === void 0 ? jt(t2) : Ne(jt(t2), e2);
            }, Ie = function(t2) {
              var e2 = ke.call(this, t2 = K(t2, true));
              return !(this === Oe && S(Te, t2) && !S(Se, t2)) && (!(e2 || !S(this, t2) || !S(Te, t2) || S(this, xe) && this[xe][t2]) || e2);
            }, Fe = function(t2, e2) {
              if (t2 = ht(t2), e2 = K(e2, true), t2 !== Oe || !S(Te, e2) || S(Se, e2)) {
                var n2 = pe(t2, e2);
                return !n2 || !S(Te, e2) || S(t2, xe) && t2[xe][e2] || (n2.enumerable = true), n2;
              }
            }, ze = function(t2) {
              for (var e2, n2 = ye(ht(t2)), r2 = [], i2 = 0; n2.length > i2; )
                S(Te, e2 = n2[i2++]) || e2 == xe || e2 == de || r2.push(e2);
              return r2;
            }, Be = function(t2) {
              for (var e2, n2 = t2 === Oe, r2 = ye(n2 ? Se : ht(t2)), i2 = [], o2 = 0; r2.length > o2; )
                !S(Te, e2 = r2[o2++]) || n2 && !S(Oe, e2) || i2.push(Te[e2]);
              return i2;
            };
            Ee || (at((ge = function() {
              if (this instanceof ge)
                throw TypeError("Symbol is not a constructor!");
              var t2 = A(arguments.length > 0 ? arguments[0] : void 0), e2 = function(n2) {
                this === Oe && e2.call(Se, n2), S(this, xe) && S(this[xe], t2) && (this[xe][t2] = false), Me(this, t2, X(1, n2));
              };
              return V && je && Me(Oe, t2, { configurable: true, set: e2 }), Ae(t2);
            }).prototype, "toString", function() {
              return this._k;
            }), he.f = Fe, Y.f = Re, oe.f = le.f = ze, ee.f = Ie, te.f = Be, Jt.f = function(t2) {
              return Ae(Mt(t2));
            }), Q(Q.G + Q.W + Q.F * !Ee, { Symbol: ge });
            for (var De = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), He = 0; De.length > He; )
              Mt(De[He++]);
            for (var Ve = kt(Mt.store), We = 0; Ve.length > We; )
              Qt(Ve[We++]);
            Q(Q.S + Q.F * !Ee, "Symbol", { for: function(t2) {
              return S(we, t2 += "") ? we[t2] : we[t2] = ge(t2);
            }, keyFor: function(t2) {
              if (!Ce(t2))
                throw TypeError(t2 + " is not a symbol!");
              for (var e2 in we)
                if (we[e2] === t2)
                  return e2;
            }, useSetter: function() {
              je = true;
            }, useSimple: function() {
              je = false;
            } }), Q(Q.S + Q.F * !Ee, "Object", { create: Le, defineProperty: Re, defineProperties: Ne, getOwnPropertyDescriptor: Fe, getOwnPropertyNames: ze, getOwnPropertySymbols: Be });
            var Ge = H(function() {
              te.f(1);
            });
            Q(Q.S + Q.F * Ge, "Object", { getOwnPropertySymbols: function(t2) {
              return te.f(w(t2));
            } }), me && Q(Q.S + Q.F * (!Ee || H(function() {
              var t2 = ge();
              return _e([t2]) != "[null]" || _e({ a: t2 }) != "{}" || _e(Object(t2)) != "{}";
            })), "JSON", { stringify: function(t2) {
              for (var e2, n2, r2 = [t2], i2 = 1; arguments.length > i2; )
                r2.push(arguments[i2++]);
              if (n2 = e2 = r2[1], (B(e2) || t2 !== void 0) && !Ce(t2))
                return re(e2) || (e2 = function(t3, e3) {
                  if (typeof n2 == "function" && (e3 = n2.call(this, t3, e3)), !Ce(e3))
                    return e3;
                }), r2[1] = e2, _e.apply(me, r2);
            } }), ge.prototype[be] || q(ge.prototype, be, ge.prototype.valueOf), Rt(ge, "Symbol"), Rt(Math, "Math", true), Rt(E.JSON, "JSON", true), Qt("asyncIterator"), Qt("observable");
            var Ue = O.Symbol, $e = e(function(t2) {
              t2.exports = { default: Ue, __esModule: true };
            });
            t($e);
            var Ke = e(function(t2, e2) {
              function n2(t3) {
                return t3 && t3.__esModule ? t3 : { default: t3 };
              }
              e2.__esModule = true;
              var r2 = n2(Xt), i2 = n2($e), o2 = typeof i2.default == "function" && typeof r2.default == "symbol" ? function(t3) {
                return typeof t3;
              } : function(t3) {
                return t3 && typeof i2.default == "function" && t3.constructor === i2.default && t3 !== i2.default.prototype ? "symbol" : typeof t3;
              };
              e2.default = typeof i2.default == "function" && o2(r2.default) === "symbol" ? function(t3) {
                return t3 === void 0 ? "undefined" : o2(t3);
              } : function(t3) {
                return t3 && typeof i2.default == "function" && t3.constructor === i2.default && t3 !== i2.default.prototype ? "symbol" : t3 === void 0 ? "undefined" : o2(t3);
              };
            }), Je = t(Ke), Ye = t(e(function(t2, e2) {
              e2.__esModule = true;
              var n2 = function(t3) {
                return t3 && t3.__esModule ? t3 : { default: t3 };
              }(Ke);
              e2.default = function(t3, e3) {
                if (!t3)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e3 || (e3 === void 0 ? "undefined" : (0, n2.default)(e3)) !== "object" && typeof e3 != "function" ? t3 : e3;
              };
            }));
            Q(Q.S + Q.F * !V, "Object", { defineProperty: Y.f });
            var Xe = O.Object, qe = function(t2, e2, n2) {
              return Xe.defineProperty(t2, e2, n2);
            }, Ze = e(function(t2) {
              t2.exports = { default: qe, __esModule: true };
            });
            t(Ze);
            var Qe = t(e(function(t2, e2) {
              e2.__esModule = true;
              var n2 = function(t3) {
                return t3 && t3.__esModule ? t3 : { default: t3 };
              }(Ze);
              e2.default = function() {
                function t3(t4, e3) {
                  for (var r2 = 0; r2 < e3.length; r2++) {
                    var i2 = e3[r2];
                    i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), (0, n2.default)(t4, i2.key, i2);
                  }
                }
                return function(e3, n3, r2) {
                  return n3 && t3(e3.prototype, n3), r2 && t3(e3, r2), e3;
                };
              }();
            })), tn = function(t2, e2) {
              if (D(t2), !B(e2) && e2 !== null)
                throw TypeError(e2 + ": can't set as prototype!");
            }, en = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(t2, e2, n2) {
              try {
                (n2 = z(Function.call, he.f(Object.prototype, "__proto__").set, 2))(t2, []), e2 = !(t2 instanceof Array);
              } catch (t3) {
                e2 = true;
              }
              return function(t3, r2) {
                return tn(t3, r2), e2 ? t3.__proto__ = r2 : n2(t3, r2), t3;
              };
            }({}, false) : void 0), check: tn };
            Q(Q.S, "Object", { setPrototypeOf: en.set });
            var nn = O.Object.setPrototypeOf, rn = e(function(t2) {
              t2.exports = { default: nn, __esModule: true };
            });
            t(rn), Q(Q.S, "Object", { create: jt });
            var on = O.Object, sn = function(t2, e2) {
              return on.create(t2, e2);
            }, an = e(function(t2) {
              t2.exports = { default: sn, __esModule: true };
            });
            t(an);
            var un, cn, ln, fn = t(e(function(t2, e2) {
              function n2(t3) {
                return t3 && t3.__esModule ? t3 : { default: t3 };
              }
              e2.__esModule = true;
              var r2 = n2(rn), i2 = n2(an), o2 = n2(Ke);
              e2.default = function(t3, e3) {
                if (typeof e3 != "function" && e3 !== null)
                  throw new TypeError("Super expression must either be null or a function, not " + (e3 === void 0 ? "undefined" : (0, o2.default)(e3)));
                t3.prototype = (0, i2.default)(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (r2.default ? (0, r2.default)(t3, e3) : t3.__proto__ = e3);
              };
            })), hn = Mt("toStringTag"), dn = lt(function() {
              return arguments;
            }()) == "Arguments", pn = function(t2, e2) {
              try {
                return t2[e2];
              } catch (t3) {
              }
            }, vn = function(t2) {
              var e2, n2, r2;
              return t2 === void 0 ? "Undefined" : t2 === null ? "Null" : typeof (n2 = pn(e2 = Object(t2), hn)) == "string" ? n2 : dn ? lt(e2) : (r2 = lt(e2)) == "Object" && typeof e2.callee == "function" ? "Arguments" : r2;
            }, yn = function(t2, e2, n2, r2) {
              if (!(t2 instanceof e2) || r2 !== void 0 && r2 in t2)
                throw TypeError(n2 + ": incorrect invocation!");
              return t2;
            }, gn = function(t2, e2, n2, r2) {
              try {
                return r2 ? e2(D(n2)[0], n2[1]) : e2(n2);
              } catch (e3) {
                var i2 = t2.return;
                throw i2 !== void 0 && D(i2.call(t2)), e3;
              }
            }, mn = Mt("iterator"), _n = Array.prototype, xn = function(t2) {
              return t2 !== void 0 && (ut.Array === t2 || _n[mn] === t2);
            }, bn = Mt("iterator"), kn = O.getIteratorMethod = function(t2) {
              if (t2 != void 0)
                return t2[bn] || t2["@@iterator"] || ut[vn(t2)];
            }, wn = e(function(t2) {
              var e2 = {}, n2 = {}, r2 = t2.exports = function(t3, r3, i2, o2, s2) {
                var a2, u2, c2, l2, f2 = s2 ? function() {
                  return t3;
                } : kn(t3), h2 = z(i2, o2, r3 ? 2 : 1), d2 = 0;
                if (typeof f2 != "function")
                  throw TypeError(t3 + " is not iterable!");
                if (xn(f2)) {
                  for (a2 = pt(t3.length); a2 > d2; d2++)
                    if ((l2 = r3 ? h2(D(u2 = t3[d2])[0], u2[1]) : h2(t3[d2])) === e2 || l2 === n2)
                      return l2;
                } else
                  for (c2 = f2.call(t3); !(u2 = c2.next()).done; )
                    if ((l2 = gn(c2, h2, u2.value, r3)) === e2 || l2 === n2)
                      return l2;
              };
              r2.BREAK = e2, r2.RETURN = n2;
            }), Tn = Mt("species"), Sn = function(t2, e2) {
              var n2, r2 = D(t2).constructor;
              return r2 === void 0 || (n2 = D(r2)[Tn]) == void 0 ? e2 : F(n2);
            }, On = function(t2, e2, n2) {
              var r2 = n2 === void 0;
              switch (e2.length) {
                case 0:
                  return r2 ? t2() : t2.call(n2);
                case 1:
                  return r2 ? t2(e2[0]) : t2.call(n2, e2[0]);
                case 2:
                  return r2 ? t2(e2[0], e2[1]) : t2.call(n2, e2[0], e2[1]);
                case 3:
                  return r2 ? t2(e2[0], e2[1], e2[2]) : t2.call(n2, e2[0], e2[1], e2[2]);
                case 4:
                  return r2 ? t2(e2[0], e2[1], e2[2], e2[3]) : t2.call(n2, e2[0], e2[1], e2[2], e2[3]);
              }
              return t2.apply(n2, e2);
            }, En = E.process, Pn = E.setImmediate, jn = E.clearImmediate, Mn = E.MessageChannel, An = E.Dispatch, Cn = 0, Rn = {}, Nn = function() {
              var t2 = +this;
              if (Rn.hasOwnProperty(t2)) {
                var e2 = Rn[t2];
                delete Rn[t2], e2();
              }
            }, Ln = function(t2) {
              Nn.call(t2.data);
            };
            Pn && jn || (Pn = function(t2) {
              for (var e2 = [], n2 = 1; arguments.length > n2; )
                e2.push(arguments[n2++]);
              return Rn[++Cn] = function() {
                On(typeof t2 == "function" ? t2 : Function(t2), e2);
              }, un(Cn), Cn;
            }, jn = function(t2) {
              delete Rn[t2];
            }, lt(En) == "process" ? un = function(t2) {
              En.nextTick(z(Nn, t2, 1));
            } : An && An.now ? un = function(t2) {
              An.now(z(Nn, t2, 1));
            } : Mn ? (ln = (cn = new Mn()).port2, cn.port1.onmessage = Ln, un = z(ln.postMessage, ln, 1)) : E.addEventListener && typeof postMessage == "function" && !E.importScripts ? (un = function(t2) {
              E.postMessage(t2 + "", "*");
            }, E.addEventListener("message", Ln, false)) : un = "onreadystatechange" in U("script") ? function(t2) {
              St.appendChild(U("script")).onreadystatechange = function() {
                St.removeChild(this), Nn.call(t2);
              };
            } : function(t2) {
              setTimeout(z(Nn, t2, 1), 0);
            });
            var In = { set: Pn, clear: jn }, Fn = In.set, zn = E.MutationObserver || E.WebKitMutationObserver, Bn = E.process, Dn = E.Promise, Hn = lt(Bn) == "process", Vn = { f: function(t2) {
              return new n(t2);
            } }, Wn = function(t2) {
              try {
                return { e: false, v: t2() };
              } catch (t3) {
                return { e: true, v: t3 };
              }
            }, Gn = E.navigator, Un = Gn && Gn.userAgent || "", $n = function(t2, e2) {
              if (D(t2), B(e2) && e2.constructor === t2)
                return e2;
              var n2 = Vn.f(t2);
              return (0, n2.resolve)(e2), n2.promise;
            }, Kn = Mt("species"), Jn = Mt("iterator"), Yn = false;
            try {
              var Xn = [7][Jn]();
              Xn.return = function() {
                Yn = true;
              }, Array.from(Xn, function() {
                throw 2;
              });
            } catch (t2) {
            }
            var qn, Zn, Qn, tr, er = In.set, nr = function() {
              var t2, e2, n2, r2 = function() {
                var r3, i3;
                for (Hn && (r3 = Bn.domain) && r3.exit(); t2; ) {
                  i3 = t2.fn, t2 = t2.next;
                  try {
                    i3();
                  } catch (r4) {
                    throw t2 ? n2() : e2 = void 0, r4;
                  }
                }
                e2 = void 0, r3 && r3.enter();
              };
              if (Hn)
                n2 = function() {
                  Bn.nextTick(r2);
                };
              else if (!zn || E.navigator && E.navigator.standalone) {
                if (Dn && Dn.resolve) {
                  var i2 = Dn.resolve(void 0);
                  n2 = function() {
                    i2.then(r2);
                  };
                } else
                  n2 = function() {
                    Fn.call(E, r2);
                  };
              } else {
                var o2 = true, s2 = document.createTextNode("");
                new zn(r2).observe(s2, { characterData: true }), n2 = function() {
                  s2.data = o2 = !o2;
                };
              }
              return function(r3) {
                var i3 = { fn: r3, next: void 0 };
                e2 && (e2.next = i3), t2 || (t2 = i3, n2()), e2 = i3;
              };
            }(), rr = E.TypeError, ir = E.process, or = ir && ir.versions, sr = or && or.v8 || "", ar = E.Promise, ur = vn(ir) == "process", cr = function() {
            }, lr = Zn = Vn.f, fr = !!function() {
              try {
                var t2 = ar.resolve(1), e2 = (t2.constructor = {})[Mt("species")] = function(t3) {
                  t3(cr, cr);
                };
                return (ur || typeof PromiseRejectionEvent == "function") && t2.then(cr) instanceof e2 && sr.indexOf("6.6") !== 0 && Un.indexOf("Chrome/66") === -1;
              } catch (t3) {
              }
            }(), hr = function(t2) {
              var e2;
              return !(!B(t2) || typeof (e2 = t2.then) != "function") && e2;
            }, dr = function(t2, e2) {
              if (!t2._n) {
                t2._n = true;
                var n2 = t2._c;
                nr(function() {
                  for (var r2 = t2._v, i2 = t2._s == 1, o2 = 0; n2.length > o2; )
                    !function(e3) {
                      var n3, o3, s2, a2 = i2 ? e3.ok : e3.fail, u2 = e3.resolve, c2 = e3.reject, l2 = e3.domain;
                      try {
                        a2 ? (i2 || (t2._h == 2 && yr(t2), t2._h = 1), a2 === true ? n3 = r2 : (l2 && l2.enter(), n3 = a2(r2), l2 && (l2.exit(), s2 = true)), n3 === e3.promise ? c2(rr("Promise-chain cycle")) : (o3 = hr(n3)) ? o3.call(n3, u2, c2) : u2(n3)) : c2(r2);
                      } catch (t3) {
                        l2 && !s2 && l2.exit(), c2(t3);
                      }
                    }(n2[o2++]);
                  t2._c = [], t2._n = false, e2 && !t2._h && pr(t2);
                });
              }
            }, pr = function(t2) {
              er.call(E, function() {
                var e2, n2, r2, i2 = t2._v, o2 = vr(t2);
                if (o2 && (e2 = Wn(function() {
                  ur ? ir.emit("unhandledRejection", i2, t2) : (n2 = E.onunhandledrejection) ? n2({ promise: t2, reason: i2 }) : (r2 = E.console) && r2.error && r2.error("Unhandled promise rejection", i2);
                }), t2._h = ur || vr(t2) ? 2 : 1), t2._a = void 0, o2 && e2.e)
                  throw e2.v;
              });
            }, vr = function(t2) {
              return t2._h !== 1 && (t2._a || t2._c).length === 0;
            }, yr = function(t2) {
              er.call(E, function() {
                var e2;
                ur ? ir.emit("rejectionHandled", t2) : (e2 = E.onrejectionhandled) && e2({ promise: t2, reason: t2._v });
              });
            }, gr = function(t2) {
              var e2 = this;
              e2._d || (e2._d = true, (e2 = e2._w || e2)._v = t2, e2._s = 2, e2._a || (e2._a = e2._c.slice()), dr(e2, true));
            }, mr = function(t2) {
              var e2, n2 = this;
              if (!n2._d) {
                n2._d = true, n2 = n2._w || n2;
                try {
                  if (n2 === t2)
                    throw rr("Promise can't be resolved itself");
                  (e2 = hr(t2)) ? nr(function() {
                    var r2 = { _w: n2, _d: false };
                    try {
                      e2.call(t2, z(mr, r2, 1), z(gr, r2, 1));
                    } catch (t3) {
                      gr.call(r2, t3);
                    }
                  }) : (n2._v = t2, n2._s = 1, dr(n2, false));
                } catch (t3) {
                  gr.call({ _w: n2, _d: false }, t3);
                }
              }
            };
            fr || (ar = function(t2) {
              yn(this, ar, "Promise", "_h"), F(t2), qn.call(this);
              try {
                t2(z(mr, this, 1), z(gr, this, 1));
              } catch (t3) {
                gr.call(this, t3);
              }
            }, (qn = function(t2) {
              this._c = [], this._a = void 0, this._s = 0, this._d = false, this._v = void 0, this._h = 0, this._n = false;
            }).prototype = function(t2, e2, n2) {
              for (var r2 in e2)
                n2 && t2[r2] ? t2[r2] = e2[r2] : q(t2, r2, e2[r2]);
              return t2;
            }(ar.prototype, { then: function(t2, e2) {
              var n2 = lr(Sn(this, ar));
              return n2.ok = typeof t2 != "function" || t2, n2.fail = typeof e2 == "function" && e2, n2.domain = ur ? ir.domain : void 0, this._c.push(n2), this._a && this._a.push(n2), this._s && dr(this, false), n2.promise;
            }, catch: function(t2) {
              return this.then(void 0, t2);
            } }), Qn = function() {
              var t2 = new qn();
              this.promise = t2, this.resolve = z(mr, t2, 1), this.reject = z(gr, t2, 1);
            }, Vn.f = lr = function(t2) {
              return t2 === ar || t2 === tr ? new Qn(t2) : Zn(t2);
            }), Q(Q.G + Q.W + Q.F * !fr, { Promise: ar }), Rt(ar, "Promise"), function(t2) {
              var e2 = typeof O[t2] == "function" ? O[t2] : E[t2];
              V && e2 && !e2[Kn] && Y.f(e2, Kn, { configurable: true, get: function() {
                return this;
              } });
            }("Promise"), tr = O.Promise, Q(Q.S + Q.F * !fr, "Promise", { reject: function(t2) {
              var e2 = lr(this);
              return (0, e2.reject)(t2), e2.promise;
            } }), Q(Q.S + true * Q.F, "Promise", { resolve: function(t2) {
              return $n(this === tr ? ar : this, t2);
            } }), Q(Q.S + Q.F * !(fr && function(t2, e2) {
              if (!e2 && !Yn)
                return false;
              var n2 = false;
              try {
                var r2 = [7], i2 = r2[Jn]();
                i2.next = function() {
                  return { done: n2 = true };
                }, r2[Jn] = function() {
                  return i2;
                }, t2(r2);
              } catch (t3) {
              }
              return n2;
            }(function(t2) {
              ar.all(t2).catch(cr);
            })), "Promise", { all: function(t2) {
              var e2 = this, n2 = lr(e2), r2 = n2.resolve, i2 = n2.reject, o2 = Wn(function() {
                var n3 = [], o3 = 0, s2 = 1;
                wn(t2, false, function(t3) {
                  var a2 = o3++, u2 = false;
                  n3.push(void 0), s2++, e2.resolve(t3).then(function(t4) {
                    u2 || (u2 = true, n3[a2] = t4, --s2 || r2(n3));
                  }, i2);
                }), --s2 || r2(n3);
              });
              return o2.e && i2(o2.v), n2.promise;
            }, race: function(t2) {
              var e2 = this, n2 = lr(e2), r2 = n2.reject, i2 = Wn(function() {
                wn(t2, false, function(t3) {
                  e2.resolve(t3).then(n2.resolve, r2);
                });
              });
              return i2.e && r2(i2.v), n2.promise;
            } }), Q(Q.P + Q.R, "Promise", { finally: function(t2) {
              var e2 = Sn(this, O.Promise || E.Promise), n2 = typeof t2 == "function";
              return this.then(n2 ? function(n3) {
                return $n(e2, t2()).then(function() {
                  return n3;
                });
              } : t2, n2 ? function(n3) {
                return $n(e2, t2()).then(function() {
                  throw n3;
                });
              } : t2);
            } }), Q(Q.S, "Promise", { try: function(t2) {
              var e2 = Vn.f(this), n2 = Wn(t2);
              return (n2.e ? e2.reject : e2.resolve)(n2.v), e2.promise;
            } });
            var _r = O.Promise, xr = t(e(function(t2) {
              t2.exports = { default: _r, __esModule: true };
            }));
            tt("keys", function() {
              return function(t2) {
                return kt(w(t2));
              };
            });
            var br = O.Object.keys, kr = t(e(function(t2) {
              t2.exports = { default: br, __esModule: true };
            })), wr = e(function(t2) {
              function e2() {
              }
              function n2(t3, e3, n3) {
                this.fn = t3, this.context = e3, this.once = n3 || false;
              }
              function r2(t3, e3, r3, i3, o3) {
                if (typeof r3 != "function")
                  throw new TypeError("The listener must be a function");
                var s3 = new n2(r3, i3 || t3, o3), u2 = a2 ? a2 + e3 : e3;
                return t3._events[u2] ? t3._events[u2].fn ? t3._events[u2] = [t3._events[u2], s3] : t3._events[u2].push(s3) : (t3._events[u2] = s3, t3._eventsCount++), t3;
              }
              function i2(t3, n3) {
                --t3._eventsCount == 0 ? t3._events = new e2() : delete t3._events[n3];
              }
              function o2() {
                this._events = new e2(), this._eventsCount = 0;
              }
              var s2 = Object.prototype.hasOwnProperty, a2 = "~";
              Object.create && (e2.prototype = /* @__PURE__ */ Object.create(null), new e2().__proto__ || (a2 = false)), o2.prototype.eventNames = function() {
                var t3, e3, n3 = [];
                if (this._eventsCount === 0)
                  return n3;
                for (e3 in t3 = this._events)
                  s2.call(t3, e3) && n3.push(a2 ? e3.slice(1) : e3);
                return Object.getOwnPropertySymbols ? n3.concat(Object.getOwnPropertySymbols(t3)) : n3;
              }, o2.prototype.listeners = function(t3) {
                var e3 = a2 ? a2 + t3 : t3, n3 = this._events[e3];
                if (!n3)
                  return [];
                if (n3.fn)
                  return [n3.fn];
                for (var r3 = 0, i3 = n3.length, o3 = new Array(i3); r3 < i3; r3++)
                  o3[r3] = n3[r3].fn;
                return o3;
              }, o2.prototype.listenerCount = function(t3) {
                var e3 = a2 ? a2 + t3 : t3, n3 = this._events[e3];
                return n3 ? n3.fn ? 1 : n3.length : 0;
              }, o2.prototype.emit = function(t3, e3, n3, r3, i3, o3) {
                var s3 = a2 ? a2 + t3 : t3;
                if (!this._events[s3])
                  return false;
                var u2, c2, l2 = this._events[s3], f2 = arguments.length;
                if (l2.fn) {
                  switch (l2.once && this.removeListener(t3, l2.fn, void 0, true), f2) {
                    case 1:
                      return l2.fn.call(l2.context), true;
                    case 2:
                      return l2.fn.call(l2.context, e3), true;
                    case 3:
                      return l2.fn.call(l2.context, e3, n3), true;
                    case 4:
                      return l2.fn.call(l2.context, e3, n3, r3), true;
                    case 5:
                      return l2.fn.call(l2.context, e3, n3, r3, i3), true;
                    case 6:
                      return l2.fn.call(l2.context, e3, n3, r3, i3, o3), true;
                  }
                  for (c2 = 1, u2 = new Array(f2 - 1); c2 < f2; c2++)
                    u2[c2 - 1] = arguments[c2];
                  l2.fn.apply(l2.context, u2);
                } else {
                  var h2, d2 = l2.length;
                  for (c2 = 0; c2 < d2; c2++)
                    switch (l2[c2].once && this.removeListener(t3, l2[c2].fn, void 0, true), f2) {
                      case 1:
                        l2[c2].fn.call(l2[c2].context);
                        break;
                      case 2:
                        l2[c2].fn.call(l2[c2].context, e3);
                        break;
                      case 3:
                        l2[c2].fn.call(l2[c2].context, e3, n3);
                        break;
                      case 4:
                        l2[c2].fn.call(l2[c2].context, e3, n3, r3);
                        break;
                      default:
                        if (!u2)
                          for (h2 = 1, u2 = new Array(f2 - 1); h2 < f2; h2++)
                            u2[h2 - 1] = arguments[h2];
                        l2[c2].fn.apply(l2[c2].context, u2);
                    }
                }
                return true;
              }, o2.prototype.on = function(t3, e3, n3) {
                return r2(this, t3, e3, n3, false);
              }, o2.prototype.once = function(t3, e3, n3) {
                return r2(this, t3, e3, n3, true);
              }, o2.prototype.removeListener = function(t3, e3, n3, r3) {
                var o3 = a2 ? a2 + t3 : t3;
                if (!this._events[o3])
                  return this;
                if (!e3)
                  return i2(this, o3), this;
                var s3 = this._events[o3];
                if (s3.fn)
                  s3.fn !== e3 || r3 && !s3.once || n3 && s3.context !== n3 || i2(this, o3);
                else {
                  for (var u2 = 0, c2 = [], l2 = s3.length; u2 < l2; u2++)
                    (s3[u2].fn !== e3 || r3 && !s3[u2].once || n3 && s3[u2].context !== n3) && c2.push(s3[u2]);
                  c2.length ? this._events[o3] = c2.length === 1 ? c2[0] : c2 : i2(this, o3);
                }
                return this;
              }, o2.prototype.removeAllListeners = function(t3) {
                var n3;
                return t3 ? (n3 = a2 ? a2 + t3 : t3, this._events[n3] && i2(this, n3)) : (this._events = new e2(), this._eventsCount = 0), this;
              }, o2.prototype.off = o2.prototype.removeListener, o2.prototype.addListener = o2.prototype.on, o2.prefixed = a2, o2.EventEmitter = o2, t2.exports = o2;
            }), Tr = function t2() {
              var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n2 = e2.url, r2 = e2.method, i2 = r2 === void 0 ? "GET" : r2, o2 = e2.type, s2 = o2 === void 0 ? "arraybuffer" : o2, a2 = e2.timeout, u2 = a2 === void 0 ? 1e4 : a2, c2 = e2.data, l2 = c2 === void 0 ? {} : c2, f2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              return rt(this, t2), new xr(function(t3, e3) {
                var r3 = new window.XMLHttpRequest(), o3 = i2.toUpperCase(), a3 = [];
                s2 && (r3.responseType = s2), u2 && (r3.timeout = u2);
                for (var c3 in l2)
                  a3.push("k=" + l2[c3]);
                if (r3.onload = function() {
                  r3.status === 200 || r3.status === 206 ? t3({ context: f2, res: r3 }) : e3(new Error({ context: f2, res: r3, type: "error" }));
                }, r3.onerror = function(t4) {
                  e3(new Error({ context: f2, res: r3, type: "error" }));
                }, r3.ontimeout = function(t4) {
                  e3(new Error({ context: f2, res: r3, type: "error" }));
                }, r3.onabort = function() {
                  e3(new Error({ context: f2, res: r3, type: "error" }));
                }, o3 === "GET")
                  r3.open(o3, "" + n2), r3.send();
                else {
                  if (o3 !== "post")
                    throw new Error("xhr " + o3 + " is not supported");
                  r3.open(o3, n2), r3.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r3.send(a3.join("&"));
                }
              });
            }, Sr = /^WEBVTT/, Or = /^STYLE+$/, Er = /^\:\:cue/, Pr = /^}+$/, jr = /^\[Script Info\].*/, Mr = [/[0-9]{1,3}:[0-9]{2}:[0-9]{2}\.[0-9]{1,3}-->[0-9]{1,3}:[0-9]{2}:[0-9]{2}\.[0-9]{1,3}/, /[0-9]{1,2}:[0-9]{2}\.[0-9]{1,3}-->[0-9]{1,2}:[0-9]{2}\.[0-9]{1,3}/, /[0-9]{1,2}\.[0-9]{1,3}-->[0-9]{1,2}\.[0-9]{1,3}/], Ar = /^Format:\s/, Cr = /^Style:\s/, Rr = /^Dialogue:\s/, Nr = function() {
              function t2() {
                rt(this, t2);
              }
              return Qe(t2, null, [{ key: "parseJson", value: function(t3) {
                for (var e2 = [], n2 = 0, r2 = 0; r2 < t3.length; r2++) {
                  if (n2 >= 50 && (n2 = 0), n2 === 0) {
                    var i2 = { start: t3[r2].start, list: [t3[r2]], end: t3[r2].end };
                    e2.push(i2);
                  } else
                    e2[e2.length - 1].list.push(t3[r2]), e2[e2.length - 1].end = t3[r2].end;
                  n2++;
                }
                return e2;
              } }, { key: "parse", value: function(e2, n2) {
                var r2 = t2.checkFormat(e2);
                r2 || n2({ format: r2 });
                try {
                  var i2 = [];
                  r2 === "ass" ? i2 = t2.parseASS(e2) : r2 === "vtt" && (i2 = t2.parseVTT(e2)), n2({ format: r2, list: i2.list, styles: i2.styles });
                } catch (t3) {
                  console.error(t3), n2({ format: r2 }, t3);
                }
              } }, { key: "parseASSItem", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n2 = t3.split(","), i2 = {}, s2 = "";
                try {
                  var a2 = n2.length - e2.length;
                  return s2 = a2 > 0 ? n2.splice(e2.length - 1, a2 + 1).join(",") + "" : n2[n2.length - 1] + "", s2 = s2.replace(/\\n+/g, ""), s2 = o(s2), n2[e2.length - 1] = s2, e2.map(function(t4, e3) {
                    t4 === "end" || t4 === "start" ? i2[t4] = r(n2[e3].split(":")) : t4 === "text" ? i2[t4] = [n2[e3]] : t4 === "layer" ? (i2[t4] = [n2[e3]], i2.textTag = [n2[e3]]) : i2[t4] = t4 === "style" ? [n2[e3]] : Number(n2[e3]) ? Number(n2[e3]) : n2[e3];
                  }), i2;
                } catch (t4) {
                  return console.error(t4), {};
                }
              } }, { key: "parseASS", value: function(e2) {
                for (var n2 = e2.split("\n"), r2 = [], i2 = 0, o2 = 0, s2 = [], a2 = [], u2 = null; i2 < n2.length; ) {
                  if (Ar.test(n2[i2]))
                    a2 = (a2 = n2[i2].replace(Ar, "").replace(/\s+/g, "").split(",")).map(function(t3) {
                      return t3.toLocaleLowerCase();
                    });
                  else if (Cr.test(n2[i2]))
                    s2.push(n2[i2].replace(Cr, "").replace(/\s+/g, ""));
                  else if (Rr.test(n2[i2])) {
                    var c2 = t2.parseASSItem(n2[i2].replace(Rr, ""), a2);
                    if (u2 && c2.start === u2.start && c2.end === u2.end)
                      try {
                        var l2 = u2, f2 = l2.text, h2 = l2.textTag, d2 = l2.style;
                        f2.push(c2.text[0]), h2.push(c2.textTag[0]), d2.push(c2.style[0]);
                      } catch (t3) {
                        console.error(t3);
                      }
                    else {
                      u2 = c2;
                      var p2 = null;
                      o2 % 50 == 0 ? ((p2 = { start: u2.start, end: u2.end, list: [] }).list.push(u2), r2.push(p2)) : ((p2 = r2[r2.length - 1]).end = u2.end, p2.list.push(u2)), o2++;
                    }
                  }
                  i2++;
                }
                return { list: r2, style: {} };
              } }, { key: "parseVTTStyle", value: function(t3, e2) {
                var n2 = t3.split(":");
                if (n2.length > 1) {
                  var r2 = n2[0].trim().split("-"), i2 = "";
                  r2.length > 1 ? r2.map(function(t4, e3) {
                    i2 += e3 === 0 ? t4 : t4.charAt(0).toUpperCase() + t4.slice(1);
                  }) : i2 = r2[0], e2[i2] = n2[1].trim().replace(/;$/, "");
                }
                return e2;
              } }, { key: "parseVTT", value: function(t3) {
                for (var e2 = (t3 = t3.replace(Sr, "")).split("\n"), n2 = [], r2 = 0, o2 = 0, a2 = null, u2 = false, c2 = false, l2 = null, f2 = null, h2 = []; r2 < e2.length; ) {
                  var d2 = s(r2, e2).trim();
                  if (!d2 || u2 && i(d2))
                    u2 = !d2;
                  else if (Er.test(d2) && Or.test(s(r2 - 1, e2).trim())) {
                    c2 = true;
                    var p2 = /\((.+?)\)/g.exec(d2);
                    f2 = p2 ? p2[1] : "", l2 = "";
                  } else if (c2)
                    Pr.test(d2) ? (h2.push({ key: f2, style: l2 }), l2 = null, f2 = null, c2 = false) : l2 += d2;
                  else if (d2) {
                    u2 = false;
                    var v2 = this.checkIsTime(e2[r2]);
                    if (v2) {
                      var y2 = this.parseVttTime(v2);
                      if (!a2 || y2.start !== a2.start || y2.end !== a2.end) {
                        (a2 = y2).text = [], a2.textTag = [];
                        var g2 = null;
                        o2 % 50 == 0 ? ((g2 = { start: a2.start, end: a2.end, list: [] }).list.push(a2), n2.push(g2)) : ((g2 = n2[n2.length - 1]).end = a2.end, g2.list.push(a2)), o2++;
                      }
                    } else if (a2) {
                      var m2 = a2, _2 = m2.text, x2 = m2.textTag, b2 = this.parseVttText(e2[r2]);
                      _2.push(b2.text), x2.push(b2.tag);
                    }
                    u2 = false;
                  }
                  r2++;
                }
                return { list: n2, styles: h2 };
              } }, { key: "checkIsTime", value: function(t3) {
                t3 = t3.replace(/\s+/g, "");
                for (var e2 = 0, n2 = null; e2 < Mr.length && !(n2 = Mr[e2].exec(t3)); )
                  e2++;
                return n2 ? n2[0] : null;
              } }, { key: "parseVttText", value: function(t3) {
                var e2 = /^(<?.+?>)/g.exec(t3), n2 = "", r2 = "default";
                if (e2) {
                  r2 = e2[0].replace(/\<|\>|\&/g, "");
                  var i2 = RegExp("^<" + r2 + ">(([\\s\\S])*?)</" + r2 + ">$").exec(t3);
                  i2 ? n2 = i2[1] : (n2 = t3, r2 = "");
                } else
                  n2 = t3;
                for (var s2 = /<(\w+).(\w+)>/g, a2 = s2.exec(n2); a2 && a2.length > 2; )
                  n2 = n2.replace(a2[0], "<" + a2[1] + ' class="' + a2[2] + '">'), a2 = s2.exec(n2);
                return { tag: r2, text: o(n2.replace(/\\n+/g, "<br/>")) };
              } }, { key: "parseVttTime", value: function(t3) {
                var e2 = t3.split("-->"), n2 = void 0, i2 = 0;
                if (e2.length === 2) {
                  var o2 = e2[0].split(":"), s2 = e2[1].split(":");
                  n2 = r(o2), i2 = r(s2);
                }
                return { start: n2, end: i2, time: t3 };
              } }, { key: "isVTT", value: function(t3) {
                return Sr.test(t3);
              } }, { key: "isASS", value: function(t3) {
                return jr.test(t3);
              } }, { key: "checkFormat", value: function(t3) {
                return t3 ? Sr.test(t3) ? "vtt" : jr.test(t3) ? "ass" : null : null;
              } }]), t2;
            }(), Lr = function() {
              function t2() {
                var e2 = this;
                rt(this, t2), this.__handlers = [], window.ResizeObserver && (this.observer = new window.ResizeObserver(function(t3) {
                  e2.__trigger(t3);
                }));
              }
              return Qe(t2, [{ key: "addObserver", value: function(t3, e2) {
                if (this.observer) {
                  this.observer && this.observer.observe(t3);
                  for (var n2 = this.__handlers, r2 = -1, i2 = 0; i2 < n2.length; i2++)
                    n2[i2] && t3 === n2[i2].target && (r2 = i2);
                  r2 > -1 ? this.__handlers[r2].handler.push(e2) : this.__handlers.push({ target: t3, handler: [e2] });
                }
              } }, { key: "unObserver", value: function(t3) {
                var e2 = -1;
                this.__handlers.map(function(n2, r2) {
                  t3 === n2.target && (e2 = r2);
                }), this.observer && this.observer.unobserve(t3), e2 > -1 && this.__handlers.splice(e2, 1);
              } }, { key: "destroyObserver", value: function() {
                this.observer && this.observer.disconnect(), this.observer = null, this.__handlers = null;
              } }, { key: "__runHandler", value: function(t3, e2) {
                for (var n2 = this.__handlers, r2 = 0; r2 < n2.length; r2++)
                  if (n2[r2] && t3 === n2[r2].target) {
                    n2[r2].handler && n2[r2].handler.map(function(n3) {
                      try {
                        n3(t3, e2);
                      } catch (t4) {
                        console.error(t4);
                      }
                    });
                    break;
                  }
              } }, { key: "__trigger", value: function(t3) {
                var e2 = this;
                t3.map(function(t4) {
                  var n2 = t4.contentRect;
                  e2.__runHandler(t4.target, n2);
                });
              } }]), t2;
            }(), Ir = null;
            !function(t2, e2) {
              e2 === void 0 && (e2 = {});
              var n2 = e2.insertAt;
              if (t2 && typeof document != "undefined") {
                var r2 = document.head || document.getElementsByTagName("head")[0], i2 = document.createElement("style");
                i2.type = "text/css", n2 === "top" && r2.firstChild ? r2.insertBefore(i2, r2.firstChild) : r2.appendChild(i2), i2.styleSheet ? i2.styleSheet.cssText = t2 : i2.appendChild(document.createTextNode(t2));
              }
            }('xg-text-track.xg-text-track {\n  font-family: "PingFang SC","SF Pro SC","SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  xg-text-track.xg-text-track.text-track-no-fitvideo {\n    margin-bottom: 2%; }\n  xg-text-track.xg-text-track.text-track-hide {\n    opacity: 0;\n    visibility: hidden; }\n  xg-text-track.xg-text-track.text-track-show {\n    opacity: 1;\n    visibility: visible; }\n  xg-text-track.xg-text-track xg-text-track-inner {\n    display: block;\n    max-width: 92%; }\n  xg-text-track.xg-text-track xg-text-track-span {\n    display: -webkit-box;\n    text-align: center;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    padding: 1px 4px;\n    -webkit-line-clamp: 1;\n    line-height: 120%;\n    word-break: break-word; }\n    xg-text-track.xg-text-track xg-text-track-span.text-track-deputy {\n      font-size: 75%; }\n    xg-text-track.xg-text-track xg-text-track-span.text-track-single {\n      -webkit-line-clamp: 1; }\n    xg-text-track.xg-text-track xg-text-track-span.text-track-double {\n      -webkit-line-clamp: 2; }\n    xg-text-track.xg-text-track xg-text-track-span.text-track-three {\n      -webkit-line-clamp: 3; }\n  xg-text-track.xg-text-track.text-track-bg xg-text-track-inner {\n    background-color: rgba(0, 0, 0, .54);\n    border-radius: 2px; }\n  xg-text-track.xg-text-track.text-track-stroke xg-text-track-inner {\n    background-color: none;\n    border-radius: 0;\n    text-shadow: -1px 1px 0 rgba(0, 0, 0, .7), 1px 1px 0 rgba(0, 0, 0, .7), 1px -1px 0 rgba(0, 0, 0, .7), -1px -1px 0 rgba(0, 0, 0, .7); }\n');
            var Fr = [{ code: 0, msg: "SUCCESS" }, { code: 1, msg: "LOAD_ERROR" }, { code: 2, msg: "PARSER_ERROR" }, { code: 3, msg: "FORMAT_NOT_SUPPORTED" }, { code: 4, msg: "ID_OR_LANGUAGE_NOT_EXIST" }, { code: 5, msg: "PARAMETERS_ERROR" }, { code: 6, msg: "ABORT" }, { code: 7, msg: "UNKNOWN" }, { code: 8, msg: "DATA_ERROR:subtitle.url is null" }], zr = { RESIZE: "resize" }, Br = false;
            return function(t2) {
              function e2(t3) {
                rt(this, e2);
                var n2 = Ye(this, (e2.__proto__ || nt(e2)).call(this));
                return Br = p(), n2.currentText = null, n2.textTrack = [], n2._cid = -1, n2._gid = -1, n2._cids = [], n2._iId = null, n2._iC = 0, n2.player = null, n2.root = null, n2.config = { line: "double", bottom: 0, mode: "stroke", defaultOpen: false, baseSizeX: 49, baseSizeY: 28, minSize: 16, minMobileSize: 13, fitVideo: true, offsetBottom: 2, fontColor: "#fff" }, n2._ctime = 0, n2._loadingTrack = {}, kr(n2.config).map(function(e3) {
                  t3[e3] !== void 0 && t3[e3] !== null && (n2.config[e3] = t3[e3]);
                }), n2._isOpen = false, n2._videoMeta = { scale: 0, videoHeight: 0, videoWidth: 0, lwidth: 0, lheight: 0, vWidth: 0, vHeight: 0, vBottom: 0, vLeft: 0, marginBottom: 0 }, t3.subTitles && h(t3.subTitles) === "Array" ? (t3.player && n2.attachPlayer(t3.player), n2.setSubTitles(t3.subTitles, n2.config.defaultOpen), n2) : Ye(n2);
              }
              return fn(e2, t2), Qe(e2, [{ key: "version", get: function() {
                return "1.0.12";
              } }]), Qe(e2, [{ key: "setSubTitles", value: function() {
                var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e3 = this, n2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], i2 = this._isOpen || n2;
                r2 && this.innerRoot && this.switchOff(), this.currentText = null, this.textTrack = [], t3.map(function(t4) {
                  var n3 = {};
                  kr(t4).map(function(e4) {
                    n3[e4] = t4[e4];
                  }), n3.isDefault && (e3.currentText = n3), e3.textTrack.push(n3);
                }), this.currentText && x(this.currentText).then(function(t4) {
                  e3.addStyles(t4), i2 && e3.switch();
                });
              } }, { key: "addStyles", value: function(t3) {
                var e3 = t3.styles, n2 = t3.format;
                e3 && n2 === "vtt" && (e3.map(function(t4) {
                  t4.key || (t4.key = "xg-text-track-span");
                }), v(e3, "xg-text-track"));
              } }, { key: "attachPlayer", value: function(t3) {
                var e3 = this;
                if (t3) {
                  this.player && this.detachPlayer();
                  var n2 = this.config, r2 = n2.fontColor, i2 = n2.mode, o2 = n2.fitVideo;
                  this.player = t3, this.root = document.createElement("xg-text-track"), this.root.className = "xg-text-track", !this._isOpen && u(this.root, "text-track-hide"), !o2 && u(this.root, "text-track-no-fitvideo"), i2 && u(this.root, "text-track-" + i2), this.innerRoot = document.createElement("xg-text-track-inner"), this.root.appendChild(this.innerRoot), r2 && (this.root.style.color = r2), this.currentText && ["language", "id", "label"].map(function(t4) {
                    e3.root.setAttribute("data-" + t4, e3.currentText[t4] || "");
                  }), this.player.root.appendChild(this.root), ["destroy", "__onTimeupdate", "_onResize"].map(function(t4) {
                    e3[t4] = e3[t4].bind(e3);
                  }), this.player.on("destroy", this.destroy), this.player.on("timeupdate", this.__onTimeupdate), this._isOpen && this.switch(), y(t3.root, this._onResize);
                }
              } }, { key: "detachPlayer", value: function() {
                var t3 = this.player;
                t3 && (t3.off("destroy", this.destroy), t3.off("timeupdate", this.__onTimeupdate), t3.root && (g(t3.root, this._onResize), t3.root.removeChild(this.root)), this.innerRoot = null, this.root = null, this.player = null);
              } }, { key: "switch", value: function() {
                var t3 = this, e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { id: "", language: "" };
                return this._loadingTrack = e3, new xr(function(n2, r2) {
                  if (!e3.id && !e3.language) {
                    if (t3.currentText) {
                      t3._loadingTrack = {}, t3._updateCurrent(t3.currentText), t3._isOpen = true, t3.show();
                      var i2 = m(0, { message: "switch default subtitle success" });
                      return void n2(i2);
                    }
                    var o2 = m(5, { message: "no default subtitle" });
                    return void r2(o2);
                  }
                  if (t3.currentText && b(e3, t3.currentText))
                    t3._loadingTrack = {}, t3._updateCurrent(t3.currentText), t3._isOpen = true, t3.show(), n2(m(0));
                  else {
                    for (var s2 = null, a2 = 0; a2 < t3.textTrack.length; a2++)
                      if (b(e3, t3.textTrack[a2])) {
                        s2 = t3.textTrack[a2];
                        break;
                      }
                    if (s2)
                      s2.list ? (t3._loadingTrack = {}, t3._updateCurrent(s2), t3._isOpen = true, t3.show(), n2(m(0))) : x(s2).then(function(e4) {
                        if (t3.addStyles(e4), t3._loadingTrack.id === s2.id || t3._loadingTrack.language === e4.language)
                          t3._loadingTrack = {}, t3._updateCurrent(e4), t3._isOpen = true, t3.show(), n2(m(0));
                        else {
                          var i3 = m(6, { message: "check _loadingTrack fail id: " + t3._loadingTrack.id + "  nextSubtitle:" + e4.id });
                          console.trace(i3), r2(i3);
                        }
                      }).catch(function(t4) {
                        r2(t4);
                      });
                    else {
                      var u2 = m(4, new Error("The is no subtitle with id:[{" + e3.id + "}] or language:[" + e3.language + "]"));
                      console.trace(u2), r2(u2);
                    }
                  }
                });
              } }, { key: "switchOff", value: function() {
                this._isOpen = false, this.hide();
              } }, { key: "_updateCurrent", value: function(t3) {
                var e3 = this;
                if (this.root) {
                  this.currentText = t3, ["language", "id", "label"].map(function(t4) {
                    e3.root.setAttribute("data-" + t4, e3.currentText[t4] || "");
                  }), this.__remove(this._cids);
                  var n2 = this.player.currentTime;
                  this._cids = [], this._gid = -1, this._cid = -1, this._update(n2);
                }
              } }, { key: "__loadAll", value: function() {
                this.textTrack.map(function(t3) {
                  x(t3);
                });
              } }, { key: "getDelCid", value: function(t3, e3) {
                for (var n2 = [], r2 = 0; r2 < t3.length; r2++)
                  e3.includes(t3[r2]) || n2.push(t3[r2]);
                return n2;
              } }, { key: "getNewCid", value: function(t3, e3) {
                for (var n2 = [], r2 = 0; r2 < e3.length; r2++)
                  t3.includes(e3[r2]) || n2.push(e3[r2]);
                return n2;
              } }, { key: "_update", value: function(t3) {
                var e3 = this, n2 = l(t3, this.currentText.list, this._gid), r2 = [];
                if (n2 > -1 && (r2 = f(t3, this.currentText.list[n2].list, this._cid)), r2.length < 1)
                  return this._cids.length > 0 && this.__remove(this._cids), void (this._cids = []);
                if (this._cids !== r2 || n2 !== this._gid) {
                  this._gid = n2, this._cid = r2[0];
                  var i2 = this.getDelCid(this._cids, r2), o2 = this.getNewCid(this._cids, r2);
                  this._cids = r2, this.__remove(i2);
                  var s2 = [];
                  o2.map(function(t4) {
                    var r3 = e3.currentText.list[n2].list[t4];
                    r3.index = t4, s2.push(r3);
                  }), this.__render(s2, t3);
                }
              } }, { key: "__onTimeupdate", value: function() {
                if (this._isOpen) {
                  var t3 = this.player.video, e3 = t3.videoWidth, n2 = t3.videoHeight;
                  !this._videoMeta.scale && e3 && n2 && this._onResize(this.player.root);
                  var r2 = this.player.currentTime;
                  Math.round(Math.abs(1e3 * r2 - this._ctime)) < 200 || (this._ctime = 1e3 * r2, this.currentText && this.currentText.list && this._update(r2));
                }
              } }, { key: "_onResize", value: function(t3) {
                var e3 = this._videoMeta;
                if (t3 && t3 instanceof window.Element || (t3 = this.player.root), this._iId && (clearTimeout(this._iId), this._iId = null), !e3.scale) {
                  if (!this.player.video)
                    return;
                  var n2 = this.player.video, r2 = n2.videoWidth, i2 = n2.videoHeight;
                  if (!r2 || !i2)
                    return;
                  e3.videoWidth = r2, e3.videoHeight = i2, e3.scale = parseInt(i2 / r2 * 100, 10);
                }
                this.__startResize(t3);
              } }, { key: "resize", value: function(t3, e3) {
                var n2 = this, r2 = this.config, i2 = r2.baseSizeX, o2 = r2.baseSizeY, s2 = r2.minMobileSize, a2 = r2.minSize, u2 = r2.fitVideo, c2 = r2.offsetBottom, l2 = this._videoMeta.scale;
                this._videoMeta.lwidth = t3, this._videoMeta.lheight = e3;
                var f2 = void 0, h2 = 0;
                e3 / t3 * 100 >= l2 ? (h2 = parseInt(l2 * t3, 10) / 100, f2 = t3) : (h2 = e3, f2 = parseInt(e3 / l2 * 100, 10)), this._videoMeta.vWidth = f2, this._videoMeta.vHeight = h2;
                var d2 = 0, p2 = 0;
                l2 > 120 ? (d2 = o2, p2 = parseInt(d2 * h2 / 1080, 10)) : (d2 = i2, p2 = parseInt(d2 * f2 / 1920, 10));
                var v2 = Br ? s2 : a2, y2 = { fontSize: p2 = p2 < v2 ? v2 : p2 > d2 ? d2 : p2 }, g2 = parseInt((e3 - h2) / 2, 10), m2 = parseInt((t3 - f2) / 2, 10), _2 = parseInt(h2 * c2, 10) / 100;
                this._videoMeta.vBottom = g2, this._videoMeta.vLeft = m2, this._videoMeta.marginBottom = _2, u2 && (y2.bottom = g2 + _2, y2.left = y2.right = m2), kr(y2).map(function(t4) {
                  n2.root.style[t4] = y2[t4] + "px";
                }), this.emit(zr.RESIZE, { vLeft: m2, vBottom: g2, marginBottom: _2, vWidth: f2, vHeight: h2, fontSize: p2, scale: l2 });
              } }, { key: "__startResize", value: function(t3) {
                var e3 = this, n2 = t3.getBoundingClientRect(), r2 = this._videoMeta, i2 = n2.width, o2 = n2.height;
                if (this._iId && (clearTimeout(this._iId), this._iId = null), i2 > 0 && o2 > 0 && (i2 !== r2.lwidth || o2 !== r2.lheight))
                  this._iC = 0, this.resize(i2, o2);
                else {
                  if (this._iC >= 5)
                    return void (this._iC = 0);
                  this._iC++, this._iId = setTimeout(function() {
                    e3.__startResize(t3);
                  }, 50);
                }
              } }, { key: "__remove", value: function(t3) {
                var e3 = this;
                if (t3 && !(t3.length < 1)) {
                  for (var n2 = this.innerRoot.children, r2 = [], i2 = 0; i2 < n2.length; i2++) {
                    var o2 = Number(n2[i2].getAttribute("data-index"));
                    t3.includes(o2) && r2.push(n2[i2]);
                  }
                  r2.map(function(t4) {
                    e3.innerRoot.removeChild(t4);
                  });
                }
              } }, { key: "__render", value: function() {
                var t3 = this, e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                e3.length > 0 && e3.map(function(e4) {
                  var n2 = "text-track-" + t3.config.line;
                  e4.text.map(function(r2, i2) {
                    i2 > 0 && (n2 += " text-track-deputy");
                    var o2 = { "data-start": e4.start, "data-end": e4.end, "data-index": e4.index };
                    t3.innerRoot.appendChild(d("xg-text-track-span", r2, o2, n2));
                  });
                });
              } }, { key: "show", value: function() {
                c(this.root, "text-track-hide");
              } }, { key: "hide", value: function() {
                u(this.root, "text-track-hide"), this.innerRoot.innerHTML = "";
              } }, { key: "destroy", value: function() {
                this.detachPlayer(), this.removeAllListeners(), this.player = null, this.textTrack = null;
              } }, { key: "marginBottom", get: function() {
                var t3 = this._videoMeta, e3 = t3.bottom, n2 = t3.marginBottom;
                return this.config.fitVideo ? e3 + n2 : n2;
              } }]), e2;
            }(wr);
          });
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var _player = __webpack_require__(9);
          var _player2 = _interopRequireDefault(_player);
          var _i18n = __webpack_require__(10);
          var _i18n2 = _interopRequireDefault(_i18n);
          var _enter = __webpack_require__(108);
          var _enter2 = _interopRequireDefault(_enter);
          var _play = __webpack_require__(48);
          var _play2 = _interopRequireDefault(_play);
          var _start = __webpack_require__(40);
          var _start2 = _interopRequireDefault(_start);
          var _poster = __webpack_require__(53);
          var _poster2 = _interopRequireDefault(_poster);
          var _flex = __webpack_require__(56);
          var _flex2 = _interopRequireDefault(_flex);
          var _fullscreen = __webpack_require__(59);
          var _fullscreen2 = _interopRequireDefault(_fullscreen);
          var _cssFullscreen = __webpack_require__(111);
          var _cssFullscreen2 = _interopRequireDefault(_cssFullscreen);
          var _volume = __webpack_require__(116);
          var _volume2 = _interopRequireDefault(_volume);
          var _definition = __webpack_require__(122);
          var _definition2 = _interopRequireDefault(_definition);
          var _loading = __webpack_require__(64);
          var _loading2 = _interopRequireDefault(_loading);
          var _progress = __webpack_require__(68);
          var _progress2 = _interopRequireDefault(_progress);
          var _time = __webpack_require__(71);
          var _time2 = _interopRequireDefault(_time);
          var _replay = __webpack_require__(74);
          var _replay2 = _interopRequireDefault(_replay);
          var _playbackRate = __webpack_require__(125);
          var _playbackRate2 = _interopRequireDefault(_playbackRate);
          var _localPreview = __webpack_require__(128);
          var _localPreview2 = _interopRequireDefault(_localPreview);
          var _download = __webpack_require__(129);
          var _download2 = _interopRequireDefault(_download);
          var _danmu = __webpack_require__(133);
          var _danmu2 = _interopRequireDefault(_danmu);
          var _pip = __webpack_require__(139);
          var _pip2 = _interopRequireDefault(_pip);
          var _miniplayer = __webpack_require__(142);
          var _miniplayer2 = _interopRequireDefault(_miniplayer);
          var _playNext = __webpack_require__(145);
          var _playNext2 = _interopRequireDefault(_playNext);
          var _rotate = __webpack_require__(149);
          var _rotate2 = _interopRequireDefault(_rotate);
          var _reload = __webpack_require__(153);
          var _reload2 = _interopRequireDefault(_reload);
          var _screenShot = __webpack_require__(157);
          var _screenShot2 = _interopRequireDefault(_screenShot);
          var _nativeTextTrack = __webpack_require__(160);
          var _nativeTextTrack2 = _interopRequireDefault(_nativeTextTrack);
          var _textTrack = __webpack_require__(162);
          var _textTrack2 = _interopRequireDefault(_textTrack);
          var _error = __webpack_require__(163);
          var _error2 = _interopRequireDefault(_error);
          var _memoryPlay = __webpack_require__(166);
          var _memoryPlay2 = _interopRequireDefault(_memoryPlay);
          var _airplay = __webpack_require__(169);
          var _airplay2 = _interopRequireDefault(_airplay);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          _player2.default.installAll([_i18n2.default, _enter2.default, _play2.default, _start2.default, _poster2.default, _flex2.default, _fullscreen2.default, _cssFullscreen2.default, _volume2.default, _definition2.default, _loading2.default, _progress2.default, _time2.default, _replay2.default, _playbackRate2.default, _localPreview2.default, _download2.default, _danmu2.default, _pip2.default, _miniplayer2.default, _playNext2.default, _rotate2.default, _reload2.default, _screenShot2.default, _nativeTextTrack2.default, _textTrack2.default, _error2.default, _memoryPlay2.default, _airplay2.default]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(109);
          var s_enter = function s_enter2() {
            var player = this;
            var root = player.root;
            var barStr = "";
            for (var i = 1; i <= 12; i++) {
              barStr += '<div class="xgplayer-enter-bar' + i + '"></div>';
            }
            var enter = (0, _util.createDom)("xg-enter", '<div class="xgplayer-enter-spinner">\n                                                  ' + barStr + "\n                                                </div>", {}, "xgplayer-enter");
            root.appendChild(enter);
          };
          exports2.default = {
            name: "s_enter",
            method: s_enter
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(110);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:#000;z-index:120}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner{display:block;position:absolute;left:50%;top:50%;height:100px;width:100px;position:relative;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div{width:12%;height:26%;background-color:hsla(0,0%,100%,.7);position:absolute;left:44%;top:37%;opacity:0;border-radius:30px;-webkit-animation:fade 1s linear infinite;animation:fade 1s linear infinite}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar1{-webkit-transform:rotate(0deg) translateY(-142%);-ms-transform:rotate(0deg) translateY(-142%);transform:rotate(0deg) translateY(-142%);-webkit-animation-delay:0s;animation-delay:0s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar2{-webkit-transform:rotate(30deg) translateY(-142%);-ms-transform:rotate(30deg) translateY(-142%);transform:rotate(30deg) translateY(-142%);-webkit-animation-delay:-.9163s;animation-delay:-.9163s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar3{-webkit-transform:rotate(60deg) translateY(-142%);-ms-transform:rotate(60deg) translateY(-142%);transform:rotate(60deg) translateY(-142%);-webkit-animation-delay:-.833s;animation-delay:-.833s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar4{-webkit-transform:rotate(90deg) translateY(-142%);-ms-transform:rotate(90deg) translateY(-142%);transform:rotate(90deg) translateY(-142%);-webkit-animation-delay:-.7497s;animation-delay:-.7497s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar5{-webkit-transform:rotate(120deg) translateY(-142%);-ms-transform:rotate(120deg) translateY(-142%);transform:rotate(120deg) translateY(-142%);-webkit-animation-delay:-.6664s;animation-delay:-.6664s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar6{-webkit-transform:rotate(150deg) translateY(-142%);-ms-transform:rotate(150deg) translateY(-142%);transform:rotate(150deg) translateY(-142%);-webkit-animation-delay:-.5831s;animation-delay:-.5831s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar7{-webkit-transform:rotate(180deg) translateY(-142%);-ms-transform:rotate(180deg) translateY(-142%);transform:rotate(180deg) translateY(-142%);-webkit-animation-delay:-.4998s;animation-delay:-.4998s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar8{-webkit-transform:rotate(210deg) translateY(-142%);-ms-transform:rotate(210deg) translateY(-142%);transform:rotate(210deg) translateY(-142%);-webkit-animation-delay:-.4165s;animation-delay:-.4165s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar9{-webkit-transform:rotate(240deg) translateY(-142%);-ms-transform:rotate(240deg) translateY(-142%);transform:rotate(240deg) translateY(-142%);-webkit-animation-delay:-.3332s;animation-delay:-.3332s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar10{-webkit-transform:rotate(270deg) translateY(-142%);-ms-transform:rotate(270deg) translateY(-142%);transform:rotate(270deg) translateY(-142%);-webkit-animation-delay:-.2499s;animation-delay:-.2499s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar11{-webkit-transform:rotate(300deg) translateY(-142%);-ms-transform:rotate(300deg) translateY(-142%);transform:rotate(300deg) translateY(-142%);-webkit-animation-delay:-.1666s;animation-delay:-.1666s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar12{-webkit-transform:rotate(330deg) translateY(-142%);-ms-transform:rotate(330deg) translateY(-142%);transform:rotate(330deg) translateY(-142%);-webkit-animation-delay:-.0833s;animation-delay:-.0833s}@-webkit-keyframes fade{0%{opacity:1}to{opacity:.25}}@keyframes fade{0%{opacity:1}to{opacity:.25}}.xgplayer-skin-default.xgplayer-is-enter .xgplayer-enter{display:block}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _requestCssFull = __webpack_require__(112);
          var _requestCssFull2 = _interopRequireDefault(_requestCssFull);
          var _exitCssFull = __webpack_require__(113);
          var _exitCssFull2 = _interopRequireDefault(_exitCssFull);
          __webpack_require__(114);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_cssFullscreen = function s_cssFullscreen2() {
            var player = this;
            if (!player.config.cssFullscreen) {
              return;
            }
            var btn = (0, _util.createDom)("xg-cssfullscreen", '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' + _requestCssFull2.default + '</div>\n                                             <div class="xgplayer-icon-exitfull">' + _exitCssFull2.default + "</div>\n                                           </xg-icon>", {}, "xgplayer-cssfullscreen");
            var tipsText = {};
            tipsText.requestfull = player.lang.CSSFULLSCREEN_TIPS;
            tipsText.exitfull = player.lang.EXITCSSFULLSCREEN_TIPS;
            var tips = (0, _util.createDom)("xg-tips", '<span class="xgplayer-tip-requestfull">' + tipsText.requestfull + '</span>\n                                        <span class="xgplayer-tip-exitfull">' + tipsText.exitfull + "</span>", {}, "xgplayer-tips");
            btn.appendChild(tips);
            player.once("ready", function() {
              player.controls.appendChild(btn);
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("cssFullscreenBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_cssFullscreen",
            method: s_cssFullscreen
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.028 0.028)" d="M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z"></path>\n</svg>\n';
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.028 0.028)" d="M834.56 81.92H189.44c-59.392 0-107.52 48.128-107.52 107.52v645.12c0 59.392 48.128 107.52 107.52 107.52h645.12c59.392 0 107.52-48.128 107.52-107.52V189.44c0-59.392-48.128-107.52-107.52-107.52zM458.24 727.04c0 14.848-12.288 26.624-26.624 26.624S404.48 741.888 404.48 727.04v-69.632L289.28 773.12c-10.752 10.24-27.648 10.24-37.888 0-10.24-10.752-10.24-27.648 0-37.888L366.592 619.52H296.96c-14.848 0-26.624-12.288-26.624-26.624s12.288-26.624 26.624-26.624h134.144c14.848 0 26.624 12.288 26.624 26.624V727.04z m0-295.936c0 14.848-12.288 26.624-26.624 26.624H296.96c-14.848 0-26.624-12.288-26.624-26.624S282.112 404.48 296.96 404.48h69.632L251.392 289.28c-10.24-10.752-10.24-27.648 0-37.888 5.12-5.12 12.288-7.68 18.944-7.68 6.656 0 13.824 2.56 18.944 7.68L404.48 366.592V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v134.144zM773.12 773.12c-10.752 10.24-27.648 10.24-37.888 0L619.52 657.408V727.04c0 14.848-12.288 26.624-26.624 26.624s-26.624-11.776-26.624-26.624v-134.144c0-14.848 12.288-26.624 26.624-26.624H727.04c14.848 0 26.624 12.288 26.624 26.624s-12.288 26.624-26.624 26.624h-69.632l115.2 115.2c10.752 10.752 10.752 27.648 0.512 38.4z m0-483.84L657.408 404.48H727.04c14.848 0 26.624 12.288 26.624 26.624 0 14.848-12.288 26.624-26.624 26.624h-134.144c-14.848 0-26.624-12.288-26.624-26.624V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v69.632L734.72 250.88c5.12-5.12 12.288-7.68 18.944-7.68s13.824 2.56 18.944 7.68c10.752 10.752 10.752 27.648 0.512 38.4z"></path>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(115);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-cssfullscreen,.xgplayer-skin-default .xgplayer-cssfullscreen-img{position:relative;-webkit-order:12;-moz-box-ordinal-group:13;order:12;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon{width:32px;margin-top:5px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-40px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover,.xgplayer-skin-default .xgplayer-cssfullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-47px}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen-img{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.xgplayer-lang-is-en .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-lang-is-en .xgplayer-cssfullscreen .xgplayer-tips,.xgplayer-lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-46px}.lang-is-jp .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-120px}.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-60px}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _volumeMuted = __webpack_require__(117);
          var _volumeMuted2 = _interopRequireDefault(_volumeMuted);
          var _volumeSmall = __webpack_require__(118);
          var _volumeSmall2 = _interopRequireDefault(_volumeSmall);
          var _volumeLarge = __webpack_require__(119);
          var _volumeLarge2 = _interopRequireDefault(_volumeLarge);
          __webpack_require__(120);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_volume = function s_volume2() {
            var player = this;
            var container = (0, _util.createDom)("xg-volume", '<xg-icon class="xgplayer-icon">\n                                         <div class="xgplayer-icon-large">' + _volumeLarge2.default + '</div>\n                                         <div class="xgplayer-icon-small">' + _volumeSmall2.default + '</div>\n                                         <div class="xgplayer-icon-muted">' + _volumeMuted2.default + '</div>\n                                       </xg-icon>\n                                       <xg-slider class="xgplayer-slider" tabindex="2">\n                                         <xg-bar class="xgplayer-bar">\n                                           <xg-drag class="xgplayer-drag"></xg-drag>\n                                         </xg-bar>\n                                       </xg-slider>', {}, "xgplayer-volume");
            player.once("ready", function() {
              if (player.controls) {
                player.controls.appendChild(container);
              }
            });
            var slider = container.querySelector(".xgplayer-slider");
            var bar = container.querySelector(".xgplayer-bar");
            var selected = container.querySelector(".xgplayer-drag");
            var icon = container.querySelector(".xgplayer-icon");
            selected.style.height = player.config.volume * 100 + "%";
            slider.volume = player.config.volume;
            bar.addEventListener("mousedown", function(e) {
              e.preventDefault();
              e.stopPropagation();
              player.userGestureTrigEvent("volumeBarClick", e);
            });
            ["click", "touchend"].forEach(function(item) {
              icon.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("volumeIconClick");
              });
            });
            icon.addEventListener("mouseenter", function(e) {
              e.preventDefault();
              e.stopPropagation();
              player.userGestureTrigEvent("volumeIconEnter");
            });
            ["blur", "mouseleave"].forEach(function(item) {
              container.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("volumeIconLeave");
              });
            });
          };
          exports2.default = {
            name: "s_volume",
            method: s_volume
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z"></path>\n</svg>\n';
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n';
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(121);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, '.xgplayer-skin-default .xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:40px;height:40px;display:block;position:relative;z-index:18}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:none}.xgplayer-skin-default .xgplayer-slider{display:none;position:absolute;width:28px;height:92px;background:rgba(0,0,0,.54);border-radius:1px;bottom:42px;outline:none}.xgplayer-skin-default .xgplayer-slider:after{content:" ";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-skin-default .xgplayer-bar,.xgplayer-skin-default .xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-skin-default .xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-skin-default .xgplayer-drag:after{content:" ";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-skin-default.xgplayer-volume-active .xgplayer-slider,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:none}.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:block}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-large,.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:none}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:block}.xgplayer-skin-default.xgplayer-mobile .xgplayer-volume .xgplayer-slider{display:none}', ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _sniffer = __webpack_require__(5);
          var _sniffer2 = _interopRequireDefault(_sniffer);
          __webpack_require__(123);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_definition = function s_definition2() {
            var player = this;
            var root = player.root;
            var paused = void 0;
            var container = (0, _util.createDom)("xg-definition", "", { tabindex: 3 }, "xgplayer-definition");
            if (_sniffer2.default.device === "mobile") {
              player.config.definitionActive = "click";
            }
            function onCanplayResourceReady() {
              var list = player.definitionList;
              var tmp = ["<ul>"], src = player.config.url, a = document.createElement("a");
              if (player.switchURL) {
                ["mp4", "hls", "__flv__", "dash"].every(function(item) {
                  if (player[item]) {
                    if (player[item].url) {
                      a.href = player[item].url;
                    }
                    if (item === "__flv__") {
                      if (player[item]._options) {
                        a.href = player[item]._options.url;
                      } else {
                        a.href = player[item]._mediaDataSource.url;
                      }
                    }
                    if (item === "hls") {
                      a.href = player[item].originUrl || player[item].url;
                      src = a.href;
                    }
                    src = a.href;
                    return false;
                  } else {
                    return true;
                  }
                });
              } else {
                src = player.currentSrc || player.src;
              }
              list.forEach(function(item) {
                a.href = item.url;
                if (player.dash) {
                  tmp.push("<li url='" + item.url + "' cname='" + item.name + "' class='" + (item.selected ? "selected" : "") + "'>" + item.name + "</li>");
                } else {
                  tmp.push("<li url='" + item.url + "' cname='" + item.name + "' class='" + (a.href === src ? "selected" : "") + "'>" + item.name + "</li>");
                }
              });
              var cursrc = list.filter(function(item) {
                a.href = item.url;
                if (player.dash) {
                  return item.selected === true;
                } else {
                  return a.href === src;
                }
              });
              console.warn("cursrc:", cursrc, "src:", src, "list:", list);
              tmp.push("</ul><p class='name'>" + (cursrc[0] || { name: "" }).name + "</p>");
              var urlInRoot = root.querySelector(".xgplayer-definition");
              if (urlInRoot) {
                urlInRoot.innerHTML = tmp.join("");
                var cur = urlInRoot.querySelector(".name");
                if (!player.config.definitionActive || player.config.definitionActive === "hover") {
                  cur.addEventListener("mouseenter", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    (0, _util.addClass)(player.root, "xgplayer-definition-active");
                    urlInRoot.focus();
                  });
                }
              } else {
                container.innerHTML = tmp.join("");
                var _cur = container.querySelector(".name");
                if (!player.config.definitionActive || player.config.definitionActive === "hover") {
                  _cur.addEventListener("mouseenter", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    (0, _util.addClass)(player.root, "xgplayer-definition-active");
                    container.focus();
                  });
                }
                player.controls.appendChild(container);
              }
            }
            function onResourceReady(list) {
              player.definitionList = list;
              if (list && list instanceof Array && list.length > 0) {
                (0, _util.addClass)(root, "xgplayer-is-definition");
                player.once("canplay", onCanplayResourceReady);
              }
            }
            player.on("resourceReady", onResourceReady);
            function onPlayingChangeDefinition() {
              player.currentTime = player.curTime;
              if (paused) {
                player.pause();
              } else {
                var playPromise = player.play();
                if (playPromise !== void 0 && playPromise) {
                  playPromise.catch(function(err) {
                  });
                }
              }
            }
            ;
            function onTimeupdateChangeDefinition() {
              player.once("timeupdate", onPlayingChangeDefinition);
            }
            ;
            ["touchend", "click"].forEach(function(item) {
              container.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                var list = player.definitionList;
                var li = e.target || e.srcElement, a = document.createElement("a");
                if (li && li.tagName.toLocaleLowerCase() === "li") {
                  var from = void 0, to = void 0;
                  Array.prototype.forEach.call(li.parentNode.childNodes, function(item2) {
                    if ((0, _util.hasClass)(item2, "selected")) {
                      from = item2.getAttribute("cname");
                      (0, _util.removeClass)(item2, "selected");
                      player.emit("beforeDefinitionChange", item2.getAttribute("url"));
                    }
                  });
                  if (player.dash) {
                    list.forEach(function(item2) {
                      item2.selected = false;
                      if (item2.name === li.innerHTML) {
                        item2.selected = true;
                      }
                    });
                  }
                  (0, _util.addClass)(li, "selected");
                  to = li.getAttribute("cname");
                  li.parentNode.nextSibling.innerHTML = "" + li.getAttribute("cname");
                  a.href = li.getAttribute("url");
                  paused = player.paused;
                  if (player.switchURL) {
                    var curRUL = document.createElement("a");
                    ["mp4", "hls", "__flv__", "dash"].every(function(item2) {
                      if (player[item2]) {
                        if (player[item2].url) {
                          curRUL.href = player[item2].url;
                        }
                        if (item2 === "__flv__") {
                          if (player[item2]._options) {
                            curRUL.href = player[item2]._options.url;
                          } else {
                            curRUL.href = player[item2]._mediaDataSource.url;
                          }
                        }
                        if (item2 === "hls") {
                          curRUL.href = player[item2].originUrl || player[item2].url;
                        }
                        return false;
                      } else {
                        return true;
                      }
                    });
                    if (curRUL.href !== a.href && !player.ended) {
                      player.switchURL(a.href);
                    }
                  } else {
                    if (player["hls"]) {
                      var _curRUL = document.createElement("a");
                      _curRUL = player["hls"].url;
                    }
                    if (a.href !== player.currentSrc) {
                      player.curTime = player.currentTime;
                      if (!player.ended) {
                        player.src = a.href;
                      }
                    }
                  }
                  if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
                    player.once("timeupdate", onTimeupdateChangeDefinition);
                  } else {
                    player.once("loadedmetadata", onPlayingChangeDefinition);
                  }
                  player.emit("definitionChange", { from, to });
                  if (_sniffer2.default.device === "mobile") {
                    (0, _util.removeClass)(player.root, "xgplayer-definition-active");
                  }
                } else if (player.config.definitionActive === "click" && li && (li.tagName.toLocaleLowerCase() === "p" || li.tagName.toLocaleLowerCase() === "em")) {
                  if (_sniffer2.default.device === "mobile") {
                    (0, _util.toggleClass)(player.root, "xgplayer-definition-active");
                  } else {
                    (0, _util.addClass)(player.root, "xgplayer-definition-active");
                  }
                  container.focus();
                }
                player.emit("focus");
              }, false);
            });
            container.addEventListener("mouseleave", function(e) {
              e.preventDefault();
              e.stopPropagation();
              (0, _util.removeClass)(root, "xgplayer-definition-active");
            });
            function onBlur() {
              (0, _util.removeClass)(root, "xgplayer-definition-active");
            }
            player.on("blur", onBlur);
            function onDestroy() {
              player.off("resourceReady", onResourceReady);
              player.off("canplay", onCanplayResourceReady);
              if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
                player.off("timeupdate", onTimeupdateChangeDefinition);
                player.off("timeupdate", onPlayingChangeDefinition);
              } else {
                player.off("loadedmetadata", onPlayingChangeDefinition);
              }
              player.off("blur", onBlur);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
            player.getCurrentDefinition = function() {
              var liList = player.controls.querySelectorAll(".xgplayer-definition ul li");
              for (var i = 0; i < liList.length; i++) {
                if (liList[i].className && liList[i].className.indexOf("selected") > -1) {
                  return {
                    name: liList[i].getAttribute("cname"),
                    url: liList[i].getAttribute("url")
                  };
                }
              }
              return {
                name: liList[0].getAttribute("cname"),
                url: liList[0].getAttribute("url")
              };
            };
            player.switchDefinition = function() {
              var definitionObj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              var liList = player.controls.querySelectorAll(".xgplayer-definition ul li");
              for (var i = 0; i < liList.length; i++) {
                if (liList[i].getAttribute("cname") === definitionObj.name || liList[i].getAttribute("url") === definitionObj.url || i === definitionObj.index) {
                  liList[i].click();
                }
              }
            };
          };
          exports2.default = {
            name: "s_definition",
            method: s_definition
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(124);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px}.xgplayer-skin-default .xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-skin-default .xgplayer-definition ul li.selected,.xgplayer-skin-default .xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-definition ul,.xgplayer-skin-default.xgplayer-is-definition .xgplayer-definition{display:block}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _sniffer = __webpack_require__(5);
          var _sniffer2 = _interopRequireDefault(_sniffer);
          __webpack_require__(126);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_playbackRate = function s_playbackRate2() {
            var player = this;
            var playbackRateList = [];
            if (player.config.playbackRate) {
              playbackRateList = [].concat(player.config.playbackRate);
              playbackRateList.sort(function(a, b) {
                return b - a;
              });
            } else {
              return false;
            }
            var unit = player.config.playbackRateUnit !== void 0 ? player.config.playbackRateUnit : "x";
            var container = (0, _util.createDom)("xg-playbackrate", " ", {}, "xgplayer-playbackrate");
            if (_sniffer2.default.device === "mobile") {
              player.config.playbackRateActive = "click";
            }
            var list = [];
            playbackRateList.forEach(function(item) {
              list.push({ name: "" + item, rate: "" + item + unit, selected: false });
            });
            var selectedSpeed = 1;
            var tmp = ["<ul>"];
            list.forEach(function(item) {
              if (player.config.defaultPlaybackRate && player.config.defaultPlaybackRate.toString() === item.name) {
                item.selected = true;
                selectedSpeed = player.config.defaultPlaybackRate;
                player.once("playing", function() {
                  player.video.playbackRate = player.config.defaultPlaybackRate;
                });
              } else if (item.name === "1.0" || item.name === "1") {
                if (!player.config.defaultPlaybackRate || player.config.defaultPlaybackRate === 1) {
                  item.selected = true;
                }
              }
              tmp.push("<li cname='" + item.name + "' class='" + (item.selected ? "selected" : "") + "'>" + item.rate + "</li>");
            });
            tmp.push("</ul><p class='name'>" + selectedSpeed + unit + "</p>");
            var playbackDom = player.root.querySelector(".xgplayer-playbackrate");
            if (playbackDom) {
              playbackDom.innerHTML = tmp.join("");
              var cur = playbackDom.querySelector(".name");
              if (!player.config.playbackRateActive || player.config.playbackRateActive === "hover") {
                cur.addEventListener("mouseenter", function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  (0, _util.addClass)(player.root, "xgplayer-playbackrate-active");
                  playbackDom.focus();
                });
              }
            } else {
              container.innerHTML = tmp.join("");
              var _cur = container.querySelector(".name");
              if (!player.config.playbackRateActive || player.config.playbackRateActive === "hover") {
                _cur.addEventListener("mouseenter", function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  (0, _util.addClass)(player.root, "xgplayer-playbackrate-active");
                  container.focus();
                });
              }
              player.once("ready", function() {
                player.controls.appendChild(container);
              });
            }
            var ev = ["touchend", "click"];
            ev.forEach(function(item) {
              container.addEventListener(item, function(e) {
                e.stopPropagation();
                e.preventDefault();
                var li = e.target;
                if (li && li.tagName.toLocaleLowerCase() === "li") {
                  var from = void 0, to = void 0;
                  list.forEach(function(item2) {
                    item2.selected = false;
                    if (li.textContent.replace(/\s+/g, "") === item2.rate) {
                      Array.prototype.forEach.call(li.parentNode.childNodes, function(item3) {
                        if ((0, _util.hasClass)(item3, "selected")) {
                          from = Number(item3.getAttribute("cname"));
                          (0, _util.removeClass)(item3, "selected");
                        }
                      });
                      item2.selected = true;
                      player.video.playbackRate = item2.name * 1;
                      selectedSpeed = item2.name * 1;
                    }
                  });
                  (0, _util.addClass)(li, "selected");
                  to = Number(li.getAttribute("cname"));
                  li.parentNode.nextSibling.innerHTML = "" + li.getAttribute("cname") + unit;
                  player.emit("playbackrateChange", { from, to });
                  if (_sniffer2.default.device === "mobile") {
                    (0, _util.removeClass)(player.root, "xgplayer-playbackrate-active");
                  }
                } else if (player.config.playbackRateActive === "click" && li && (li.tagName.toLocaleLowerCase() === "p" || li.tagName.toLocaleLowerCase() === "span")) {
                  if (_sniffer2.default.device === "mobile") {
                    (0, _util.toggleClass)(player.root, "xgplayer-playbackrate-active");
                  } else {
                    (0, _util.addClass)(player.root, "xgplayer-playbackrate-active");
                  }
                  container.focus();
                }
                player.emit("focus");
              }, false);
            });
            container.addEventListener("mouseleave", function(e) {
              e.preventDefault();
              e.stopPropagation();
              (0, _util.removeClass)(player.root, "xgplayer-playbackrate-active");
            });
            function onBlur() {
              (0, _util.removeClass)(player.root, "xgplayer-playbackrate-active");
            }
            player.on("blur", onBlur);
            player.on("play", function() {
              if (player.video.playbackRate.toFixed(1) !== selectedSpeed.toFixed(1)) {
                player.video.playbackRate = selectedSpeed;
              }
            });
            player.switchPlaybackRate = function() {
              var playbackRateObj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              var liList = player.controls.querySelectorAll(".xgplayer-playbackrate ul li");
              for (var i = 0; i < liList.length; i++) {
                if (!(0, _util.hasClass)(liList[i], "selected") && (liList[i].getAttribute("cname") === "" + playbackRateObj.playbackRate || i === playbackRateObj.index)) {
                  liList[i].click();
                }
              }
            };
            player.on("ratechange", function() {
              player.switchPlaybackRate({ playbackRate: player.playbackRate });
            });
          };
          exports2.default = {
            name: "s_playbackRate",
            method: s_playbackRate
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(127);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-playbackrate{-webkit-order:8;-moz-box-ordinal-group:9;order:8;width:60px;height:150px;z-index:18;position:relative;display:inline-block;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-playbackrate ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);text-align:left;white-space:nowrap;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-playbackrate ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);position:relative;padding:4px 0;text-align:center}.xgplayer-skin-default .xgplayer-playbackrate ul li.selected,.xgplayer-skin-default .xgplayer-playbackrate ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-playbackrate ul li:first-child{position:relative;margin-top:12px}.xgplayer-skin-default .xgplayer-playbackrate ul li:last-child{position:relative;margin-bottom:12px}.xgplayer-skin-default .xgplayer-playbackrate .name{width:60px;height:20px;position:absolute;bottom:0;text-align:center;font-family:PingFangSC-Regular;font-size:13px;background:rgba(0,0,0,.38);color:hsla(0,0%,100%,.8);border-radius:10px;line-height:20px}.xgplayer-skin-default .xgplayer-playbackrate span{position:relative;top:19px;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.6)}.xgplayer-skin-default .xgplayer-playbackrate:hover{opacity:1}.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-playbackrate ul{display:block}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var s_localPreview = function s_localPreview2() {
            var player = this;
            if (player.config.preview && player.config.preview.uploadEl) {
              var preview = (0, _util.createDom)("xg-preview", '<input type="file">', {}, "xgplayer-preview");
              var upload = preview.querySelector("input");
              player.config.preview.uploadEl.appendChild(preview);
              upload.onchange = function() {
                player.emit("upload", upload);
              };
            }
          };
          exports2.default = {
            name: "s_localPreview",
            method: s_localPreview
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _download = __webpack_require__(130);
          var _download2 = _interopRequireDefault(_download);
          __webpack_require__(131);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_download = function s_download2() {
            var player = this;
            if (!player.config.download) {
              return;
            }
            var btn = (0, _util.createDom)("xg-download", '<xg-icon class="xgplayer-icon">' + _download2.default + "</xg-icon>", {}, "xgplayer-download");
            var tipsText = player.lang.DOWNLOAD_TIPS;
            var tips = (0, _util.createDom)("xg-tips", '<span class="xgplayer-tip-download">' + tipsText + "</span>", {}, "xgplayer-tips");
            btn.appendChild(tips);
            player.once("ready", function() {
              player.controls.appendChild(btn);
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("downloadBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_download",
            method: s_download
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">\n  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g transform="translate(-488.000000, -340.000000)" fill="#FFFFFF">\n      <g id="Group-2">\n        <g id="volme_big-copy" transform="translate(488.000000, 340.000000)">\n          <rect id="Rectangle-18" x="11" y="4" width="2" height="12" rx="1"></rect>\n          <rect id="Rectangle-2" x="3" y="18" width="18" height="2" rx="1"></rect>\n          <rect id="Rectangle-2" transform="translate(4.000000, 17.500000) rotate(90.000000) translate(-4.000000, -17.500000) " x="1.5" y="16.5" width="5" height="2" rx="1"></rect><rect id="Rectangle-2-Copy-3" transform="translate(20.000000, 17.500000) rotate(90.000000) translate(-20.000000, -17.500000) " x="17.5" y="16.5" width="5" height="2" rx="1"></rect>\n          <path d="M9.48791171,8.26502656 L9.48791171,14.2650266 C9.48791171,14.8173113 9.04019646,15.2650266 8.48791171,15.2650266 C7.93562696,15.2650266 7.48791171,14.8173113 7.48791171,14.2650266 L7.48791171,7.26502656 C7.48791171,6.71274181 7.93562696,6.26502656 8.48791171,6.26502656 L15.4879117,6.26502656 C16.0401965,6.26502656 16.4879117,6.71274181 16.4879117,7.26502656 C16.4879117,7.81731131 16.0401965,8.26502656 15.4879117,8.26502656 L9.48791171,8.26502656 Z" id="Combined-Shape" transform="translate(11.987912, 10.765027) scale(1, -1) rotate(45.000000) translate(-11.987912, -10.765027) "></path>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(132);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-download{position:relative;-webkit-order:9;-moz-box-ordinal-group:10;order:9;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-download .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-download .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-download .xgplayer-icon svg{position:relative;top:5px;left:5px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips{margin-left:-20px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips .xgplayer-tip-download{display:block}.xgplayer-skin-default .xgplayer-download:hover{opacity:.85}.xgplayer-skin-default .xgplayer-download:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-download .xgplayer-tips{margin-left:-32px}.xgplayer-lang-is-jp .xgplayer-download .xgplayer-tips{margin-left:-40px}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _danmu = __webpack_require__(134);
          var _danmu2 = _interopRequireDefault(_danmu);
          var _panel = __webpack_require__(136);
          var _panel2 = _interopRequireDefault(_panel);
          __webpack_require__(137);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_danmu = function s_danmu2() {
            var player = this;
            var root = player.root;
            if (!player.config.danmu) {
              return;
            }
            var container = (0, _util.createDom)("xg-danmu", "", {}, "xgplayer-danmu");
            player.once("ready", function() {
              root.appendChild(container);
            });
            var config = (0, _util.deepCopy)({
              container,
              player: player.video,
              comments: [],
              area: {
                start: 0,
                end: 1
              }
            }, player.config.danmu);
            var panelBtn = void 0;
            if (player.config.danmu.panel) {
              panelBtn = (0, _util.createDom)("xg-panel", '<xg-panel-icon class="xgplayer-panel-icon">\n                                                ' + _panel2.default + '\n                                              </xg-panel-icon>\n                                              <xg-panel-slider class="xgplayer-panel-slider">\n                                                <xg-hidemode class="xgplayer-hidemode">\n                                                  <p class="xgplayer-hidemode-font">\u5C4F\u853D\u7C7B\u578B</p>\n                                                  <ul class="xgplayer-hidemode-radio">\n                                                    <li class="xgplayer-hidemode-scroll" id="false">\u6EDA\u52A8</li><li class="xgplayer-hidemode-top" id="false">\u9876\u90E8</li><li class="xgplayer-hidemode-bottom" id="false">\u5E95\u90E8</li><li class="xgplayer-hidemode-color" id="false">\u8272\u5F69</li>\n                                                  </ul>\n                                                </xg-hidemode>\n                                                <xg-transparency class="xgplayer-transparency">\n                                                  <span>\u4E0D\u900F\u660E\u5EA6</span>\n                                                  <input class="xgplayer-transparency-line xgplayer-transparency-color xgplayer-transparency-bar xgplayer-transparency-gradient" type="range" min="0" max="100" step="0.1" value="50"></input>\n                                                </xg-transparency>\n                                                <xg-showarea class="xgplayer-showarea">\n                                                  <div class="xgplayer-showarea-name">\u663E\u793A\u533A\u57DF</div>\n                                                  <div class="xgplayer-showarea-control">\n                                                    <div class="xgplayer-showarea-control-up">\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-onequarters">1/4</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-twoquarters selected-color">1/2</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-threequarters">3/4</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-full">1</span>\n                                                    </div>\n                                                    <div class="xgplayer-showarea-control-down">\n                                                      <div class="xgplayer-showarea-control-down-dots">\n                                                        <span class="xgplayer-showarea-onequarters-dot"></span>\n                                                        <span class="xgplayer-showarea-twoquarters-dot"></span>\n                                                        <span class="xgplayer-showarea-threequarters-dot"></span>\n                                                        <span class="xgplayer-showarea-full-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-showarea-line xgplayer-showarea-color xgplayer-showarea-bar xgplayer-gradient" type="range" min="1" max="4" step="1" value="1">\n                                                    </div>\n                                                  </div>\n                                                </xg-showarea>\n                                                <xg-danmuspeed class="xgplayer-danmuspeed">\n                                                  <div class="xgplayer-danmuspeed-name">\u5F39\u5E55\u901F\u5EA6</div>\n                                                  <div class="xgplayer-danmuspeed-control">\n                                                    <div class="xgplayer-danmuspeed-control-up">\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-small">\u6162</span>\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-middle selected-color">\u4E2D</span>\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-large">\u5FEB</span>\n                                                    </div>\n                                                    <div class="xgplayer-danmuspeed-control-down">\n                                                      <div class="xgplayer-danmuspeed-control-down-dots">\n                                                        <span class="xgplayer-danmuspeed-small-dot"></span>\n                                                        <span class="xgplayer-danmuspeed-middle-dot"></span>\n                                                        <span class="xgplayer-danmuspeed-large-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-danmuspeed-line xgplayer-danmuspeed-color xgplayer-danmuspeed-bar xgplayer-gradient" type="range" min="50" max="150" step="50" value="100">\n                                                    </div>\n                                                  </div>\n                                                </xg-danmuspeed>\n                                                <xg-danmufont class="xgplayer-danmufont">\n                                                  <div class="xgplayer-danmufont-name">\u5B57\u4F53\u5927\u5C0F</div>\n                                                  <div class="xgplayer-danmufont-control">\n                                                    <div class="xgplayer-danmufont-control-up">\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-small">\u5C0F</span>\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-middle">\u4E2D</span>\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-large selected-color">\u5927</span>\n                                                    </div>\n                                                    <div class="xgplayer-danmufont-control-down">\n                                                      <div class="xgplayer-danmufont-control-down-dots">\n                                                        <span class="xgplayer-danmufont-small-dot"></span>\n                                                        <span class="xgplayer-danmufont-middle-dot"></span>\n                                                        <span class="xgplayer-danmufont-large-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-danmufont-line xgplayer-danmufont-color xgplayer-danmufont-bar xgplayer-gradient" type="range" min="20" max="30" step="5" value="25">\n                                                    </div>\n                                                  </div>\n                                                </xg-danmufont>\n                                              </xg-panel-slider>', { tabindex: 7 }, "xgplayer-panel");
              player.once("ready", function() {
                player.controls.appendChild(panelBtn);
              });
            }
            player.once("complete", function() {
              var danmujs = new _danmu2.default(config);
              player.emit("initDefaultDanmu", danmujs);
              player.danmu = danmujs;
              if (!player.config.danmu.panel) {
                return;
              }
              var slider = panelBtn.querySelector(".xgplayer-panel-slider");
              var focusStatus = void 0;
              var focusarray = ["mouseenter", "touchend", "click"];
              focusarray.forEach(function(item) {
                panelBtn.addEventListener(item, function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  (0, _util.addClass)(slider, "xgplayer-panel-active");
                  panelBtn.focus();
                  focusStatus = true;
                });
              });
              panelBtn.addEventListener("mouseleave", function(e) {
                e.preventDefault();
                e.stopPropagation();
                (0, _util.removeClass)(slider, "xgplayer-panel-active");
                focusStatus = false;
              });
              slider.addEventListener("mouseleave", function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (focusStatus === false) {
                  (0, _util.removeClass)(slider, "xgplayer-panel-active");
                }
              });
              var danmuConfig = player.config.danmu;
              var hidemodeScroll = panelBtn.querySelector(".xgplayer-hidemode-scroll");
              var hidemodeTop = panelBtn.querySelector(".xgplayer-hidemode-top");
              var hidemodeBottom = panelBtn.querySelector(".xgplayer-hidemode-bottom");
              var hidemodeColor = panelBtn.querySelector(".xgplayer-hidemode-color");
              var hidemodeArray = {
                "scroll": hidemodeScroll,
                "top": hidemodeTop,
                "bottom": hidemodeBottom,
                "color": hidemodeColor
              };
              var _loop = function _loop2(key2) {
                var keys = key2;
                var ev = ["touchend", "click"];
                ev.forEach(function(item) {
                  hidemodeArray[keys].addEventListener(item, function(e) {
                    if (hidemodeArray[keys].getAttribute("id") !== "true") {
                      hidemodeArray[keys].style.color = "#f85959";
                      hidemodeArray[keys].setAttribute("id", "true");
                      player.danmu.hide(keys);
                    } else {
                      hidemodeArray[keys].style.color = "#aaa";
                      hidemodeArray[keys].setAttribute("id", "false");
                      player.danmu.show(keys);
                    }
                  });
                });
              };
              for (var key in hidemodeArray) {
                _loop(key);
              }
              var transparency = panelBtn.querySelector(".xgplayer-transparency-line");
              var transparencyGradient = panelBtn.querySelector(".xgplayer-transparency-gradient");
              var transparencyValue = 50;
              transparencyGradient.style.background = "linear-gradient(to right, #f85959 0%, #f85959 " + transparencyValue + "%, #aaa " + transparencyValue + "%, #aaa)";
              transparency.addEventListener("input", function(e) {
                e.preventDefault();
                e.stopPropagation();
                transparencyValue = e.target.value;
                transparencyGradient.style.background = "linear-gradient(to right, #f85959 0%, #f85959 " + transparencyValue + "%, #aaa " + transparencyValue + "%, #aaa)";
                danmuConfig.comments.forEach(function(item) {
                  item.style.opacity = transparencyValue / 100;
                });
              });
              var showarea = panelBtn.querySelector(".xgplayer-showarea-line");
              showarea.addEventListener("input", function(e) {
                e.preventDefault();
                e.stopPropagation();
                var showareaValue = e.target.value;
                player.danmu.config.area.end = showareaValue / 100;
                player.config.danmu.area.end = showareaValue / 100;
                player.danmu.bulletBtn.main.channel.resize();
              });
              var danmuspeed = panelBtn.querySelector(".xgplayer-danmuspeed-line");
              danmuspeed.addEventListener("input", function(e) {
                e.preventDefault();
                e.stopPropagation();
                var danmuspeedValue = e.target.value;
                danmuConfig.comments.forEach(function(item) {
                  item.duration = (200 - danmuspeedValue) * 100;
                });
              });
              var danmufont = panelBtn.querySelector(".xgplayer-danmufont-line");
              danmufont.addEventListener("input", function(e) {
                e.preventDefault();
                e.stopPropagation();
                var danmufontValue = e.target.value;
                danmuConfig.comments.forEach(function(item) {
                  item.style.fontSize = danmufontValue + "px";
                });
              });
              if (navigator.userAgent.indexOf("Firefox") > -1) {
                for (var i = 0; i < slider.querySelectorAll("input").length; i++) {
                  slider.querySelectorAll("input")[i].style.marginTop = "10px";
                }
              }
            });
          };
          exports2.default = {
            name: "s_danmu",
            method: s_danmu
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          (function(module3) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
              return typeof obj;
            } : function(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            !function(e, t) {
              (false ? void 0 : _typeof(exports2)) == "object" && (false ? void 0 : _typeof(module3)) == "object" ? module3.exports = t() : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = t, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module3.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : void 0;
            }(window, function() {
              return function(e) {
                var t = {};
                function n(i) {
                  if (t[i])
                    return t[i].exports;
                  var o = t[i] = { i, l: false, exports: {} };
                  return e[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
                }
                return n.m = e, n.c = t, n.d = function(e2, t2, i) {
                  n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: i });
                }, n.r = function(e2) {
                  typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
                }, n.t = function(e2, t2) {
                  if (1 & t2 && (e2 = n(e2)), 8 & t2)
                    return e2;
                  if (4 & t2 && (typeof e2 === "undefined" ? "undefined" : _typeof(e2)) == "object" && e2 && e2.__esModule)
                    return e2;
                  var i = /* @__PURE__ */ Object.create(null);
                  if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
                    for (var o in e2) {
                      n.d(i, o, function(t3) {
                        return e2[t3];
                      }.bind(null, o));
                    }
                  return i;
                }, n.n = function(e2) {
                  var t2 = e2 && e2.__esModule ? function() {
                    return e2.default;
                  } : function() {
                    return e2;
                  };
                  return n.d(t2, "a", t2), t2;
                }, n.o = function(e2, t2) {
                  return Object.prototype.hasOwnProperty.call(e2, t2);
                }, n.p = "", n(n.s = 4);
              }([function(e, t, n) {
                "use strict";
                function i(e2, t2) {
                  return e2.classList ? Array.prototype.some.call(e2.classList, function(e3) {
                    return e3 === t2;
                  }) : !!e2.className.match(new RegExp("(\\s|^)" + t2 + "(\\s|$)"));
                }
                function o(e2, t2) {
                  e2.classList ? t2.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function(t3) {
                    t3 && e2.classList.add(t3);
                  }) : i(e2, t2) || (e2.className += " " + t2);
                }
                function r(e2, t2) {
                  e2.classList ? t2.split(/\s+/g).forEach(function(t3) {
                    e2.classList.remove(t3);
                  }) : i(e2, t2) && t2.split(/\s+/g).forEach(function(t3) {
                    var n2 = new RegExp("(\\s|^)" + t3 + "(\\s|$)");
                    e2.className = e2.className.replace(n2, " ");
                  });
                }
                function a(e2) {
                  return Object.prototype.toString.call(e2).match(/([^\s.*]+)(?=]$)/g)[0];
                }
                Object.defineProperty(t, "__esModule", { value: true }), t.createDom = function() {
                  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "div", t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", o2 = document.createElement(e2);
                  return o2.className = i2, o2.innerHTML = t2, Object.keys(n2).forEach(function(t3) {
                    var i3 = t3, r2 = n2[t3];
                    e2 === "video" || e2 === "audio" ? r2 && o2.setAttribute(i3, r2) : o2.setAttribute(i3, r2);
                  }), o2;
                }, t.hasClass = i, t.addClass = o, t.removeClass = r, t.toggleClass = function(e2, t2) {
                  t2.split(/\s+/g).forEach(function(t3) {
                    i(e2, t3) ? r(e2, t3) : o(e2, t3);
                  });
                }, t.findDom = function() {
                  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, t2 = arguments[1], n2 = void 0;
                  try {
                    n2 = e2.querySelector(t2);
                  } catch (i2) {
                    t2.startsWith("#") && (n2 = e2.getElementById(t2.slice(1)));
                  }
                  return n2;
                }, t.deepCopy = function e2(t2, n2) {
                  if (a(n2) === "Object" && a(t2) === "Object")
                    return Object.keys(n2).forEach(function(i2) {
                      a(n2[i2]) !== "Object" || n2[i2] instanceof Node ? a(n2[i2]) === "Array" ? t2[i2] = a(t2[i2]) === "Array" ? t2[i2].concat(n2[i2]) : n2[i2] : t2[i2] = n2[i2] : t2[i2] ? e2(t2[i2], n2[i2]) : t2[i2] = n2[i2];
                    }), t2;
                }, t.typeOf = a, t.copyDom = function(e2) {
                  if (e2 && e2.nodeType === 1) {
                    var t2 = document.createElement(e2.tagName);
                    return Array.prototype.forEach.call(e2.attributes, function(e3) {
                      t2.setAttribute(e3.name, e3.value);
                    }), e2.innerHTML && (t2.innerHTML = e2.innerHTML), t2;
                  }
                  return "";
                }, t.attachEventListener = function(e2, t2, n2, i2) {
                  if (i2)
                    e2.on(t2, n2), function(e3, t3, n3, i3) {
                      e3.once(i3, function o2() {
                        e3.off(t3, n3), e3.off(i3, o2);
                      });
                    }(e2, t2, n2, i2);
                  else {
                    e2.on(t2, function i3(o2) {
                      n2(o2), e2.off(t2, i3);
                    });
                  }
                }, t.styleUtil = function(e2, t2, n2) {
                  var i2 = e2.style;
                  try {
                    i2[t2] = n2;
                  } catch (e3) {
                    i2.setProperty(t2, n2);
                  }
                }, t.isNumber = function(e2) {
                  return typeof e2 == "number" && !Number.isNaN(e2);
                }, t.throttle = function(e2, t2) {
                  var n2 = this, i2 = 0;
                  return function() {
                    for (var o2 = arguments.length, r2 = Array(o2), a2 = 0; a2 < o2; a2++) {
                      r2[a2] = arguments[a2];
                    }
                    clearTimeout(i2), i2 = setTimeout(function() {
                      return e2.apply(n2, r2);
                    }, t2);
                  };
                };
                t.hasOwnProperty = Object.prototype.hasOwnProperty;
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var i, o = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }(), r = n(26), a = (i = r) && i.__esModule ? i : { default: i };
                var s = function() {
                  function e2() {
                    !function(e3, t2) {
                      if (!(e3 instanceof t2))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, e2);
                  }
                  return o(e2, [{ key: "setLogger", value: function value() {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                    this.logger = new a.default(e3 + ".js");
                  } }]), e2;
                }();
                t.default = s, e.exports = t.default;
              }, function(e, t, n) {
                "use strict";
                var i = n(18)();
                e.exports = function(e2) {
                  return e2 !== i && e2 !== null;
                };
              }, function(e, t, n) {
                "use strict";
                e.exports = function(e2) {
                  return e2 != null;
                };
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var i, o = n(5), r = (i = o) && i.__esModule ? i : { default: i };
                n(34), t.default = r.default, e.exports = t.default;
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true }), t.DanmuJs = void 0;
                var i = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }(), o = f(n(6)), r = n(25), a = f(n(1)), s = f(n(27)), l = f(n(32)), u = n(33), c = n(0);
                function f(e2) {
                  return e2 && e2.__esModule ? e2 : { default: e2 };
                }
                function h(e2, t2) {
                  if (!e2)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return !t2 || (typeof t2 === "undefined" ? "undefined" : _typeof(t2)) != "object" && typeof t2 != "function" ? e2 : t2;
                }
                var d = t.DanmuJs = function(e2) {
                  function t2(e3) {
                    !function(e4, t3) {
                      if (!(e4 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, t2);
                    var n2 = h(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this)), i2 = n2;
                    i2.setLogger("danmu"), i2.logger && i2.logger.info("danmu.js version: " + r.version);
                    var a2 = i2.config = { overlap: false, area: { start: 0, end: 1, lines: void 0 }, live: false, comments: [], direction: "r2l", needResizeObserver: false, dropStaleComments: false, channelSize: void 0, maxCommentsLength: void 0, bulletOffset: void 0, interval: 2e3 };
                    if ((0, c.deepCopy)(a2, e3), (0, o.default)(i2), i2.hideArr = [], i2.domObj = new l.default(), i2.freezeId = null, a2.comments.forEach(function(e4) {
                      e4.duration = e4.duration ? e4.duration : 5e3, e4.mode || (e4.mode = "scroll");
                    }), i2.container = a2.container && a2.container.nodeType === 1 ? a2.container : null, !i2.container)
                      return i2.emit("error", "container id can't be empty"), false, h(n2, false);
                    if (a2.containerStyle) {
                      var u2 = a2.containerStyle;
                      Object.keys(u2).forEach(function(e4) {
                        i2.container.style[e4] = u2[e4];
                      });
                    }
                    return i2.live = a2.live, i2.player = a2.player, i2.direction = a2.direction, (0, c.addClass)(i2.container, "danmu"), i2.bulletBtn = new s.default(i2), i2.main = i2.bulletBtn.main, i2.isReady = true, i2.emit("ready"), n2.logger && n2.logger.info("ready"), n2.addResizeObserver(), n2;
                  }
                  return function(e3, t3) {
                    if (typeof t3 != "function" && t3 !== null)
                      throw new TypeError("Super expression must either be null or a function, not " + (typeof t3 === "undefined" ? "undefined" : _typeof(t3)));
                    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
                  }(t2, e2), i(t2, [{ key: "addResizeObserver", value: function value() {
                    var e3 = this;
                    this.config.needResizeObserver && (0, u.addObserver)(this.container, function() {
                      e3.logger && e3.logger.info("needResizeObserver"), e3.resize();
                    });
                  } }, { key: "start", value: function value() {
                    this.logger && this.logger.info("start"), this.main.start();
                  } }, { key: "pause", value: function value() {
                    this.logger && this.logger.info("pause"), this.main.pause();
                  } }, { key: "play", value: function value() {
                    this.logger && this.logger.info("play"), this.main.play();
                  } }, { key: "stop", value: function value() {
                    this.logger && this.logger.info("stop"), this.main.stop();
                  } }, { key: "clear", value: function value() {
                    this.logger && this.logger.info("clear"), this.main.clear();
                  } }, { key: "destroy", value: function value() {
                    for (var e3 in (0, u.unObserver)(this.container), this.logger && this.logger.info("destroy"), this.stop(), this.bulletBtn.destroy(), this.domObj.destroy(), this) {
                      delete this[e3];
                    }
                    this.emit("destroy");
                  } }, { key: "sendComment", value: function value(e3) {
                    this.logger && this.logger.info("sendComment: " + (e3.txt || "[DOM Element]")), e3.duration || (e3.duration = 15e3), e3 && e3.id && e3.duration && (e3.el || e3.txt) && (e3.duration = e3.duration ? e3.duration : 5e3, e3.style || (e3.style = { opacity: void 0, fontSize: void 0 }), e3.style && (this.opacity && this.opacity !== e3.style.opacity && (e3.style.opacity = this.opacity), this.fontSize && this.fontSize !== e3.style.fontSize && (e3.style.fontSize = this.fontSize)), e3.prior || e3.realTime ? (this.main.data.unshift(e3), e3.realTime && (this.main.readData(), this.main.dataHandle())) : this.main.data.push(e3));
                  } }, { key: "setCommentID", value: function value(e3, t3) {
                    var n2 = this;
                    this.logger && this.logger.info("setCommentID: oldID " + e3 + " newID " + t3), e3 && t3 && (this.main.data.some(function(n3) {
                      return n3.id === e3 && (n3.id = t3, true);
                    }), this.main.queue.some(function(i2) {
                      return i2.id === e3 && (i2.id = t3, i2.pauseMove(), n2.main.status !== "paused" && i2.startMove(), true);
                    }));
                  } }, { key: "setCommentDuration", value: function value(e3, t3) {
                    var n2 = this;
                    this.logger && this.logger.info("setCommentDuration: id " + e3 + " duration " + t3), e3 && t3 && (t3 = t3 || 5e3, this.main.data.some(function(n3) {
                      return n3.id === e3 && (n3.duration = t3, true);
                    }), this.main.queue.some(function(i2) {
                      return i2.id === e3 && (i2.duration = t3, i2.pauseMove(), n2.main.status !== "paused" && i2.startMove(), true);
                    }));
                  } }, { key: "setCommentLike", value: function value(e3, t3) {
                    this.logger && this.logger.info("setCommentLike: id " + e3 + " like " + t3), e3 && t3 && (this.main.data.some(function(n2) {
                      return n2.id === e3 && (n2.like = t3, true);
                    }), this.main.queue.some(function(n2) {
                      return n2.id === e3 && (n2.pauseMove(), n2.setLikeDom(t3.el, t3.style), n2.danmu.main.status !== "paused" && n2.startMove(), true);
                    }));
                  } }, { key: "restartComment", value: function value(e3) {
                    if (this.logger && this.logger.info("restartComment: id " + e3), e3) {
                      var t3 = this.main;
                      if (this._releaseCtrl(e3), t3.status === "closed")
                        return;
                      t3.queue.some(function(n2) {
                        return n2.id === e3 && (t3.status !== "paused" ? n2.startMove(true) : n2.status = "paused", true);
                      });
                    }
                  } }, { key: "_releaseCtrl", value: function value(e3) {
                    this.freezeId && e3 === this.freezeId && (this.mouseControl = false, this.freezeId = null);
                  } }, { key: "_freezeCtrl", value: function value(e3) {
                    this.mouseControl = true, this.freezeId = e3;
                  } }, { key: "freezeComment", value: function value(e3) {
                    if (this.logger && this.logger.info("freezeComment: id " + e3), e3) {
                      this._freezeCtrl(e3), this.main.queue.some(function(t3) {
                        return t3.id === e3 && (t3.status = "forcedPause", t3.pauseMove(), t3.el && t3.el.style && (0, c.styleUtil)(t3.el, "zIndex", 10), true);
                      });
                    }
                  } }, { key: "removeComment", value: function value(e3) {
                    if (this.logger && this.logger.info("removeComment: id " + e3), e3) {
                      this._releaseCtrl(e3), this.main.queue.some(function(t3) {
                        return t3.id === e3 && (t3.remove(), true);
                      }), this.main.data = this.main.data.filter(function(t3) {
                        return t3.id !== e3;
                      });
                    }
                  } }, { key: "updateComments", value: function value(e3) {
                    var t3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], n2 = this.config, i2 = this.main, o2 = this.player, r2 = [], a2 = 0;
                    if (this.logger && this.logger.info("updateComments: " + e3.length + ", isClear " + t3), typeof t3 == "boolean" && t3 && (i2.data = []), i2.data = i2.data.concat(e3), i2.sortData(), typeof n2.maxCommentsLength == "number" && i2.data.length > n2.maxCommentsLength) {
                      a2 = i2.data.length - n2.maxCommentsLength;
                      for (var s2, l2 = 0; l2 < a2; l2++) {
                        (s2 = i2.data[l2]).prior && !s2.attached_ && r2.push(i2.data[l2]);
                      }
                    } else if (n2.dropStaleComments && o2 && o2.currentTime) {
                      var u2 = Math.floor(1e3 * o2.currentTime), c2 = u2 - n2.interval;
                      if (c2 > 0)
                        for (var f2, h2 = 0; h2 < i2.data.length; h2++) {
                          if ((f2 = i2.data[h2]).prior && !f2.attached_ && r2.push(i2.data[h2]), f2.start > c2) {
                            a2 = h2;
                            break;
                          }
                        }
                      a2 > 0 && (i2.data.splice(0, a2), i2.data = r2.concat(i2.data));
                    }
                  } }, { key: "willChange", value: function value() {
                    var e3 = this.container, t3 = this.main;
                    e3.style.willChange = "opacity", t3.willChanges.push("contents"), t3.queue.forEach(function(e4) {
                      e4.willChange();
                    });
                  } }, { key: "stopWillChange", value: function value() {
                    this.container.style.willChange = "", this.main.willChanges.splice(0), this.main.queue.forEach(function(e3) {
                      e3.willChange();
                    });
                  } }, { key: "setAllDuration", value: function value() {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "scroll", t3 = this, n2 = arguments[1], i2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
                    this.logger && this.logger.info("setAllDuration: mode " + e3 + " duration " + n2 + " force " + i2), n2 && (n2 = n2 || 5e3, i2 && (this.main.forceDuration = n2), this.main.data.forEach(function(t4) {
                      e3 === t4.mode && (t4.duration = n2);
                    }), this.main.queue.forEach(function(i3) {
                      e3 === i3.mode && (i3.duration = n2, i3.pauseMove(), t3.main.status !== "paused" && i3.startMove());
                    }));
                  } }, { key: "setPlayRate", value: function value() {
                    var e3 = this, t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "scroll", n2 = arguments[1];
                    this.logger && this.logger.info("setPlayRate: " + n2), (0, c.isNumber)(n2) && n2 > 0 && (this.main.playRate = n2, this.main.queue.forEach(function(n3) {
                      t3 === n3.mode && (n3.pauseMove(), e3.main.status !== "paused" && n3.startMove());
                    }));
                  } }, { key: "setOpacity", value: function value(e3) {
                    this.logger && this.logger.info("setOpacity: opacity " + e3), this.container.style.opacity = e3;
                  } }, { key: "setFontSize", value: function value(e3, t3) {
                    var n2 = this, i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { reflow: true };
                    this.logger && this.logger.info("setFontSize: size " + e3 + " channelSize " + t3), this.fontSize = e3 + "px", e3 && (this.main.data.forEach(function(e4) {
                      e4.style && (e4.style.fontSize = n2.fontSize);
                    }), this.main.queue.forEach(function(e4) {
                      e4.options.style || (e4.options.style = {}), e4.options.style.fontSize = n2.fontSize, e4.setFontSize(n2.fontSize), t3 && (e4.top = e4.channel_id[0] * t3, e4.topInit());
                    })), t3 && (this.config.channelSize = t3, i2.reflow && this.main.channel.resizeSync());
                  } }, { key: "setArea", value: function value(e3) {
                    this.logger && this.logger.info("setArea: area " + e3), this.config.area = e3, e3.reflow !== false && this.main.channel.resizeSync();
                  } }, { key: "hide", value: function value() {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "scroll";
                    this.logger && this.logger.info("hide: mode " + e3), this.hideArr.indexOf(e3) < 0 && this.hideArr.push(e3);
                    var t3 = this.main.queue.filter(function(t4) {
                      return e3 === t4.mode || e3 === "color" && t4.color;
                    });
                    t3.forEach(function(e4) {
                      return e4.remove();
                    });
                  } }, { key: "show", value: function value() {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "scroll";
                    this.logger && this.logger.info("show: mode " + e3);
                    var t3 = this.hideArr.indexOf(e3);
                    t3 > -1 && this.hideArr.splice(t3, 1);
                  } }, { key: "setDirection", value: function value() {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "r2l";
                    this.logger && this.logger.info("setDirection: direction " + e3), this.emit("changeDirection", e3);
                  } }, { key: "resize", value: function value() {
                    this.logger && this.logger.info("resize"), this.emit("channel_resize");
                  } }, { key: "status", get: function get() {
                    return this.main.status;
                  } }, { key: "state", get: function get() {
                    var e3 = this.main;
                    return { status: e3.status, comments: e3.data, bullets: e3.queue };
                  } }, { key: "containerPos", get: function get() {
                    return this.main.channel.containerPos;
                  } }]), t2;
                }(a.default);
                t.default = d;
              }, function(e, t, n) {
                "use strict";
                var i, o, r, a, s, l, u, c = n(7), f = n(24), h = Function.prototype.apply, d = Function.prototype.call, p = Object.create, g = Object.defineProperty, m = Object.defineProperties, v = Object.prototype.hasOwnProperty, y = { configurable: true, enumerable: false, writable: true };
                o = function o2(e2, t2) {
                  var _n, o3;
                  return f(t2), o3 = this, i.call(this, e2, _n = function n2() {
                    r.call(o3, e2, _n), h.call(t2, this, arguments);
                  }), _n.__eeOnceListener__ = t2, this;
                }, s = { on: i = function i2(e2, t2) {
                  var n2;
                  return f(t2), v.call(this, "__ee__") ? n2 = this.__ee__ : (n2 = y.value = p(null), g(this, "__ee__", y), y.value = null), n2[e2] ? _typeof(n2[e2]) == "object" ? n2[e2].push(t2) : n2[e2] = [n2[e2], t2] : n2[e2] = t2, this;
                }, once: o, off: r = function r2(e2, t2) {
                  var n2, i2, o2, r3;
                  if (f(t2), !v.call(this, "__ee__"))
                    return this;
                  if (!(n2 = this.__ee__)[e2])
                    return this;
                  if (_typeof(i2 = n2[e2]) == "object")
                    for (r3 = 0; o2 = i2[r3]; ++r3) {
                      o2 !== t2 && o2.__eeOnceListener__ !== t2 || (i2.length === 2 ? n2[e2] = i2[r3 ? 0 : 1] : i2.splice(r3, 1));
                    }
                  else
                    i2 !== t2 && i2.__eeOnceListener__ !== t2 || delete n2[e2];
                  return this;
                }, emit: a = function a2(e2) {
                  var t2, n2, i2, o2, r2;
                  if (v.call(this, "__ee__") && (o2 = this.__ee__[e2]))
                    if ((typeof o2 === "undefined" ? "undefined" : _typeof(o2)) == "object") {
                      for (n2 = arguments.length, r2 = new Array(n2 - 1), t2 = 1; t2 < n2; ++t2) {
                        r2[t2 - 1] = arguments[t2];
                      }
                      for (o2 = o2.slice(), t2 = 0; i2 = o2[t2]; ++t2) {
                        h.call(i2, this, r2);
                      }
                    } else
                      switch (arguments.length) {
                        case 1:
                          d.call(o2, this);
                          break;
                        case 2:
                          d.call(o2, this, arguments[1]);
                          break;
                        case 3:
                          d.call(o2, this, arguments[1], arguments[2]);
                          break;
                        default:
                          for (n2 = arguments.length, r2 = new Array(n2 - 1), t2 = 1; t2 < n2; ++t2) {
                            r2[t2 - 1] = arguments[t2];
                          }
                          h.call(o2, this, r2);
                      }
                } }, l = { on: c(i), once: c(o), off: c(r), emit: c(a) }, u = m({}, l), e.exports = t = function t2(e2) {
                  return e2 == null ? p(u) : m(Object(e2), l);
                }, t.methods = s;
              }, function(e, t, n) {
                "use strict";
                var i = n(3), o = n(8), r = n(12), a = n(20), s = n(21);
                (e.exports = function(e2, t2) {
                  var n2, o2, l, u, c;
                  return arguments.length < 2 || typeof e2 != "string" ? (u = t2, t2 = e2, e2 = null) : u = arguments[2], i(e2) ? (n2 = s.call(e2, "c"), o2 = s.call(e2, "e"), l = s.call(e2, "w")) : (n2 = l = true, o2 = false), c = { value: t2, configurable: n2, enumerable: o2, writable: l }, u ? r(a(u), c) : c;
                }).gs = function(e2, t2, n2) {
                  var l, u, c, f;
                  return typeof e2 != "string" ? (c = n2, n2 = t2, t2 = e2, e2 = null) : c = arguments[3], i(t2) ? o(t2) ? i(n2) ? o(n2) || (c = n2, n2 = void 0) : n2 = void 0 : (c = t2, t2 = n2 = void 0) : t2 = void 0, i(e2) ? (l = s.call(e2, "c"), u = s.call(e2, "e")) : (l = true, u = false), f = { get: t2, set: n2, configurable: l, enumerable: u }, c ? r(a(c), f) : f;
                };
              }, function(e, t, n) {
                "use strict";
                var i = n(9), o = /^\s*class[\s{/}]/, r = Function.prototype.toString;
                e.exports = function(e2) {
                  return !!i(e2) && !o.test(r.call(e2));
                };
              }, function(e, t, n) {
                "use strict";
                var i = n(10);
                e.exports = function(e2) {
                  if (typeof e2 != "function")
                    return false;
                  if (!hasOwnProperty.call(e2, "length"))
                    return false;
                  try {
                    if (typeof e2.length != "number")
                      return false;
                    if (typeof e2.call != "function")
                      return false;
                    if (typeof e2.apply != "function")
                      return false;
                  } catch (e3) {
                    return false;
                  }
                  return !i(e2);
                };
              }, function(e, t, n) {
                "use strict";
                var i = n(11);
                e.exports = function(e2) {
                  if (!i(e2))
                    return false;
                  try {
                    return !!e2.constructor && e2.constructor.prototype === e2;
                  } catch (e3) {
                    return false;
                  }
                };
              }, function(e, t, n) {
                "use strict";
                var i = n(3), o = { object: true, function: true, undefined: true };
                e.exports = function(e2) {
                  return !!i(e2) && hasOwnProperty.call(o, typeof e2 === "undefined" ? "undefined" : _typeof(e2));
                };
              }, function(e, t, n) {
                "use strict";
                e.exports = n(13)() ? Object.assign : n(14);
              }, function(e, t, n) {
                "use strict";
                e.exports = function() {
                  var e2, t2 = Object.assign;
                  return typeof t2 == "function" && (t2(e2 = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e2.foo + e2.bar + e2.trzy === "razdwatrzy");
                };
              }, function(e, t, n) {
                "use strict";
                var i = n(15), o = n(19), r = Math.max;
                e.exports = function(e2, t2) {
                  var n2, a, s, l = r(arguments.length, 2);
                  for (e2 = Object(o(e2)), s = function s2(i2) {
                    try {
                      e2[i2] = t2[i2];
                    } catch (e3) {
                      n2 || (n2 = e3);
                    }
                  }, a = 1; a < l; ++a) {
                    i(t2 = arguments[a]).forEach(s);
                  }
                  if (n2 !== void 0)
                    throw n2;
                  return e2;
                };
              }, function(e, t, n) {
                "use strict";
                e.exports = n(16)() ? Object.keys : n(17);
              }, function(e, t, n) {
                "use strict";
                e.exports = function() {
                  try {
                    return Object.keys("primitive"), true;
                  } catch (e2) {
                    return false;
                  }
                };
              }, function(e, t, n) {
                "use strict";
                var i = n(2), o = Object.keys;
                e.exports = function(e2) {
                  return o(i(e2) ? Object(e2) : e2);
                };
              }, function(e, t, n) {
                "use strict";
                e.exports = function() {
                };
              }, function(e, t, n) {
                "use strict";
                var i = n(2);
                e.exports = function(e2) {
                  if (!i(e2))
                    throw new TypeError("Cannot use null or undefined");
                  return e2;
                };
              }, function(e, t, n) {
                "use strict";
                var i = n(2), o = Array.prototype.forEach, r = Object.create, a = function a2(e2, t2) {
                  var n2;
                  for (n2 in e2) {
                    t2[n2] = e2[n2];
                  }
                };
                e.exports = function(e2) {
                  var t2 = r(null);
                  return o.call(arguments, function(e3) {
                    i(e3) && a(Object(e3), t2);
                  }), t2;
                };
              }, function(e, t, n) {
                "use strict";
                e.exports = n(22)() ? String.prototype.contains : n(23);
              }, function(e, t, n) {
                "use strict";
                var i = "razdwatrzy";
                e.exports = function() {
                  return typeof i.contains == "function" && i.contains("dwa") === true && i.contains("foo") === false;
                };
              }, function(e, t, n) {
                "use strict";
                var i = String.prototype.indexOf;
                e.exports = function(e2) {
                  return i.call(this, e2, arguments[1]) > -1;
                };
              }, function(e, t, n) {
                "use strict";
                e.exports = function(e2) {
                  if (typeof e2 != "function")
                    throw new TypeError(e2 + " is not a function");
                  return e2;
                };
              }, function(e) {
                e.exports = JSON.parse('{"version":"1.1.2"}');
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var i = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }();
                var o = typeof window != "undefined" && window.location.href.indexOf("danmu-debug") > -1, r = function() {
                  function e2(t2) {
                    !function(e3, t3) {
                      if (!(e3 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, e2), this.constructorName = t2 || "";
                  }
                  return i(e2, [{ key: "info", value: function value(e3) {
                    for (var t2, n2 = arguments.length, i2 = Array(n2 > 1 ? n2 - 1 : 0), r2 = 1; r2 < n2; r2++) {
                      i2[r2 - 1] = arguments[r2];
                    }
                    o && (t2 = console).log.apply(t2, ["[Danmu Log][" + this.constructorName + "]", e3].concat(i2));
                  } }]), e2;
                }();
                t.default = r, e.exports = t.default;
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var i = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }(), o = s(n(1)), r = s(n(28)), a = n(0);
                function s(e2) {
                  return e2 && e2.__esModule ? e2 : { default: e2 };
                }
                var l = function(e2) {
                  function t2(e3) {
                    !function(e4, t3) {
                      if (!(e4 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, t2);
                    var n2 = function(e4, t3) {
                      if (!e4)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return !t3 || (typeof t3 === "undefined" ? "undefined" : _typeof(t3)) != "object" && typeof t3 != "function" ? e4 : t3;
                    }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
                    return n2.setLogger("control"), n2.danmu = e3, n2.main = new r.default(e3), e3.config.defaultOff || n2.main.start(), n2;
                  }
                  return function(e3, t3) {
                    if (typeof t3 != "function" && t3 !== null)
                      throw new TypeError("Super expression must either be null or a function, not " + (typeof t3 === "undefined" ? "undefined" : _typeof(t3)));
                    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
                  }(t2, e2), i(t2, [{ key: "createSwitch", value: function value() {
                    var e3 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
                    return this.logger && this.logger.info("createSwitch"), this.switchBtn = (0, a.createDom)("dk-switch", '<span class="txt">\u5F39</span>', {}, "danmu-switch " + (e3 ? "danmu-switch-active" : "")), this.switchBtn;
                  } }, { key: "destroy", value: function value() {
                    for (var e3 in this.logger && this.logger.info("destroy"), this.main.destroy(), this) {
                      a.hasOwnProperty.call(this, e3) && delete this[e3];
                    }
                  } }]), t2;
                }(o.default);
                t.default = l, e.exports = t.default;
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var i = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }(), o = l(n(1)), r = l(n(29)), a = l(n(30)), s = n(0);
                function l(e2) {
                  return e2 && e2.__esModule ? e2 : { default: e2 };
                }
                var u = function(e2) {
                  function t2(e3) {
                    !function(e4, t3) {
                      if (!(e4 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, t2);
                    var n2 = function(e4, t3) {
                      if (!e4)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return !t3 || (typeof t3 === "undefined" ? "undefined" : _typeof(t3)) != "object" && typeof t3 != "function" ? e4 : t3;
                    }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this));
                    return n2.setLogger("main"), n2.danmu = e3, n2.container = e3.container, n2.channel = new a.default(e3), n2.data = [].concat(e3.config.comments), n2.playedData = [], n2.queue = [], n2.timer = null, n2.playRate = 1, n2.retryStatus = "normal", n2.interval = e3.config.interval, n2.willChanges = [], n2._status = "idle", (0, s.attachEventListener)(e3, "bullet_remove", n2.updateQueue.bind(n2), "destroy"), (0, s.attachEventListener)(e3, "changeDirection", function(e4) {
                      n2.danmu.direction = e4;
                    }, "destroy"), n2;
                  }
                  return function(e3, t3) {
                    if (typeof t3 != "function" && t3 !== null)
                      throw new TypeError("Super expression must either be null or a function, not " + (typeof t3 === "undefined" ? "undefined" : _typeof(t3)));
                    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
                  }(t2, e2), i(t2, [{ key: "_cancelDataHandleTimer", value: function value() {
                    this.handleId && (clearTimeout(this.handleId), this.handleId = null), this.handleTimer && (clearTimeout(this.handleTimer), this.handleTimer = null);
                  } }, { key: "destroy", value: function value() {
                    for (var e3 in this.logger && this.logger.info("destroy"), this._cancelDataHandleTimer(), this.channel.destroy(), this.data = [], this) {
                      delete this[e3];
                    }
                  } }, { key: "updateQueue", value: function value(e3) {
                    this.logger && this.logger.info("updateQueue");
                    var t3 = this;
                    t3.queue.some(function(n2, i2) {
                      return n2.id === e3.bullet.id && (t3.queue.splice(i2, 1), true);
                    }), t3.data.some(function(t4) {
                      return t4.id === e3.bullet.id && (t4.attached_ = false, true);
                    });
                  } }, { key: "init", value: function value() {
                    var e3 = this;
                    e3.logger && e3.logger.info("init"), e3.retryStatus = "normal", e3.sortData(), function t3() {
                      e3._status !== "closed" || e3.retryStatus !== "stop" ? (e3._status === "playing" && (e3.readData(), e3.dataHandle()), e3.retryStatus === "stop" && e3._status !== "paused" || (e3.handleTimer = setTimeout(function() {
                        e3.handleId = requestAnimationFrame(function() {
                          t3();
                        });
                      }, 250))) : e3._cancelDataHandleTimer();
                    }();
                  } }, { key: "start", value: function value() {
                    this.logger && this.logger.info("start");
                    this._status = "playing", this.queue = [], this.container.innerHTML = "", this.channel.reset(), this.init();
                  } }, { key: "stop", value: function value() {
                    this.logger && this.logger.info("stop");
                    this._status = "closed", this.retryStatus = "stop", this.queue = [], this.container.innerHTML = "", this.channel.reset();
                  } }, { key: "clear", value: function value() {
                    this.logger && this.logger.info("clear"), this.channel.reset(), this.data = [], this.queue = [], this.container.innerHTML = "";
                  } }, { key: "play", value: function value() {
                    var e3 = this;
                    if (this._status !== "closed") {
                      this.logger && this.logger.info("play"), this._status = "playing";
                      var t3 = this.channel.channels;
                      t3 && t3.length > 0 && ["scroll", "top", "bottom"].forEach(function(n2) {
                        e3.queue.forEach(function(e4) {
                          e4.startMove(), e4.resized = true;
                        });
                        for (var i2 = 0; i2 < t3.length; i2++) {
                          t3[i2].queue[n2].forEach(function(e4) {
                            e4.resized = false;
                          });
                        }
                      });
                    } else
                      this.logger && this.logger.info("play ignored");
                  } }, { key: "pause", value: function value() {
                    if (this._status !== "closed") {
                      this.logger && this.logger.info("pause"), this._status = "paused";
                      var e3 = this.channel.channels;
                      e3 && e3.length > 0 && this.queue.forEach(function(e4) {
                        e4.pauseMove();
                      });
                    } else
                      this.logger && this.logger.info("pause ignored");
                  } }, { key: "dataHandle", value: function value() {
                    this._status !== "paused" && this._status !== "closed" && this.queue.length && this.queue.forEach(function(e3) {
                      e3.status === "waiting" && e3.startMove();
                    });
                  } }, { key: "readData", value: function value() {
                    if (this.danmu.isReady) {
                      var e3 = this, t3 = this.danmu, n2 = t3.player, i2 = e3.interval, o2 = e3.channel, a2 = void 0, l2 = void 0;
                      if (n2) {
                        var u2 = n2.currentTime ? Math.floor(1e3 * n2.currentTime) : 0;
                        l2 = e3.data.filter(function(t4) {
                          return !t4.start && e3.danmu.hideArr.indexOf(t4.mode) < 0 && (!t4.color || e3.danmu.hideArr.indexOf("color") < 0) && (t4.start = u2), !t4.attached_ && e3.danmu.hideArr.indexOf(t4.mode) < 0 && (!t4.color || e3.danmu.hideArr.indexOf("color") < 0) && t4.start - i2 <= u2 && u2 <= t4.start + i2;
                        }), t3.live && (e3.data = []);
                      } else
                        (l2 = e3.data.splice(0, 1)).length === 0 && (l2 = e3.playedData.splice(0, 1));
                      if (l2.length > 0) {
                        o2.updatePos();
                        var c = 2;
                        e:
                          for (var f, h = 0; h < l2.length; h++) {
                            if (f = l2[h], e3.forceDuration && e3.forceDuration !== f.duration && (f.duration = e3.forceDuration), (a2 = new r.default(t3, f)) && !a2.bulletCreateFail) {
                              if (a2.attach(), f.attached_ = true, o2.addBullet(a2).result)
                                e3.queue.push(a2), a2.topInit(), c = 2;
                              else {
                                for (var d in a2.detach(), a2) {
                                  s.hasOwnProperty.call(a2, d) && delete a2[d];
                                }
                                if (a2 = null, f.attached_ = false, f.noDiscard && (f.prior ? e3.data.unshift(f) : e3.data.push(f)), c === 0)
                                  break e;
                                c--;
                              }
                            } else {
                              if (c === 0)
                                break e;
                              c--;
                            }
                          }
                      }
                    }
                  } }, { key: "sortData", value: function value() {
                    this.data.sort(function(e3, t3) {
                      return (e3.start || -1) - (t3.start || -1);
                    });
                  } }, { key: "status", get: function get() {
                    return this._status;
                  } }]), t2;
                }(o.default);
                t.default = u, e.exports = t.default;
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true }), t.Bullet = void 0;
                var i, o = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }(), r = n(1), a = (i = r) && i.__esModule ? i : { default: i }, s = n(0);
                function l(e2, t2) {
                  if (!e2)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return !t2 || (typeof t2 === "undefined" ? "undefined" : _typeof(t2)) != "object" && typeof t2 != "function" ? e2 : t2;
                }
                var u = t.Bullet = function(e2) {
                  function t2(e3, n2) {
                    !function(e4, t3) {
                      if (!(e4 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, t2);
                    var i2 = l(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this)), o2 = i2, r2 = void 0;
                    if (i2.setLogger("bullet"), i2.danmu = e3, i2.options = n2, i2.duration = n2.duration, i2.id = n2.id, i2.container = e3.container, i2.start = n2.start, i2.prior = n2.prior, i2.realTime = n2.realTime, i2.color = n2.color, i2.bookChannelId = n2.bookChannelId, i2.direction = e3.direction, i2.reuseDOM = true, i2.willChanges = [], i2.domObj = e3.domObj, n2.el && n2.el.nodeType === 1) {
                      if (n2.el.parentNode)
                        return l(i2, { bulletCreateFail: true });
                      if (e3.config.disableCopyDOM)
                        r2 = n2.el, i2.reuseDOM = false;
                      else {
                        r2 = i2.domObj.use();
                        var a2 = (0, s.copyDom)(n2.el);
                        n2.eventListeners && n2.eventListeners.length > 0 && n2.eventListeners.forEach(function(e4) {
                          a2.addEventListener(e4.event, e4.listener, e4.useCapture || false);
                        }), r2.appendChild(a2);
                      }
                    } else
                      (r2 = i2.domObj.use()).textContent = n2.txt;
                    if (i2.onChangeDirection = function(e4) {
                      o2.direction = e4;
                    }, i2.danmu.on("changeDirection", i2.onChangeDirection), n2.style) {
                      var u2 = n2.style;
                      Object.keys(u2).forEach(function(e4) {
                        (0, s.styleUtil)(r2, e4, u2[e4]);
                      });
                    }
                    n2.mode === "top" || n2.mode === "bottom" ? i2.mode = n2.mode : i2.mode = "scroll", i2.el = r2, n2.like && n2.like.el && i2.setLikeDom(n2.like.el, n2.like.style), i2.status = "waiting";
                    var c = void 0;
                    if ((0, s.isNumber)(e3.config.bulletOffset) && e3.config.bulletOffset >= 0)
                      c = e3.config.bulletOffset;
                    else {
                      var f = e3.containerPos;
                      c = f.width / 10 > 100 ? 100 : f.width / 10;
                    }
                    var h = n2.realTime ? 0 : Math.floor(Math.random() * c);
                    return i2.updateOffset(h), i2;
                  }
                  return function(e3, t3) {
                    if (typeof t3 != "function" && t3 !== null)
                      throw new TypeError("Super expression must either be null or a function, not " + (typeof t3 === "undefined" ? "undefined" : _typeof(t3)));
                    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
                  }(t2, e2), o(t2, [{ key: "updateOffset", value: function value(e3) {
                    this.random = e3, (0, s.styleUtil)(this.el, "left", this.danmu.containerPos.width + e3 + "px");
                  } }, { key: "attach", value: function value() {
                    var e3 = this.el;
                    this.container.appendChild(e3), this.elPos = e3.getBoundingClientRect(), this.direction === "b2t" ? (this.width = this.elPos.height, this.height = this.elPos.width) : (this.width = this.elPos.width, this.height = this.elPos.height), this.moveV && (this.duration = (this.danmu.containerPos.width + this.random + this.width) / this.moveV * 1e3), this.danmu.config && (this.danmu.config.mouseControl && (this.mouseoverFunWrapper = this.mouseoverFun.bind(this), e3.addEventListener("mouseover", this.mouseoverFunWrapper, false)), this.danmu.config.mouseEnterControl && (this.mouseEnterFunWrapper = this.mouseoverFun.bind(this), e3.addEventListener("mouseenter", this.mouseEnterFunWrapper, false))), e3.addEventListener("transitionend", this._onTransitionEnd, false);
                  } }, { key: "detach", value: function value() {
                    var e3 = this.el;
                    if (e3) {
                      var t3 = this.danmu.config;
                      t3 && (t3.mouseControl && e3.removeEventListener("mouseover", this.mouseoverFunWrapper, false), t3.mouseEnterControl && e3.removeEventListener("mouseenter", this.mouseEnterFunWrapper, false)), e3.removeEventListener("transitionend", this._onTransitionEnd, false), e3.parentNode && e3.parentNode.removeChild(e3), this.reuseDOM && this.domObj.unused(e3), this.el = null;
                    }
                    this.elPos = void 0, this.danmu.off("changeDirection", this.onChangeDirection);
                  } }, { key: "willChange", value: function value() {
                    var e3 = this.danmu.main.willChanges.concat(this.willChanges).join();
                    (0, s.styleUtil)(this.el, "willChange", e3);
                  } }, { key: "mouseoverFun", value: function value(e3) {
                    this.danmu && this.danmu.mouseControl && this.danmu.config.mouseControlPause || this.status === "waiting" || this.status === "end" || this.danmu && this.danmu.emit("bullet_hover", { bullet: this, event: e3 });
                  } }, { key: "_onTransitionEnd", value: function value() {
                    this.status = "end", this.remove();
                  } }, { key: "topInit", value: function value() {
                    this.logger && this.logger.info("topInit #" + (this.options.txt || "[DOM Element]") + "#"), this.direction === "b2t" ? ((0, s.styleUtil)(this.el, "transformOrigin", "left top"), (0, s.styleUtil)(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + this.danmu.containerPos.height + "px) translateZ(0px) rotate(90deg)"), (0, s.styleUtil)(this.el, "transition", "transform 0s linear 0s")) : (0, s.styleUtil)(this.el, "top", this.top + "px");
                  } }, { key: "pauseMove", value: function value() {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], t3 = this;
                    if (t3.status !== "paused" && (t3.status !== "forcedPause" && (this.status = "paused"), t3._moveV = void 0, this.el))
                      if (this.willChange(), this.mode === "scroll") {
                        var n2 = t3.danmu.containerPos;
                        if (e3) {
                          var i2 = (new Date().getTime() - t3.moveTime) / 1e3, o2 = i2 * this.moveV, r2 = 0;
                          r2 = t3.moveMoreS - o2 >= 0 ? this.direction === "b2t" ? (t3.moveMoreS - o2) / t3.moveContainerHeight * n2.height : (t3.moveMoreS - o2) / t3.moveContainerWidth * n2.width : t3.moveMoreS - o2, this.direction === "b2t" ? (0, s.styleUtil)(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + r2 + "px) translateZ(0px) rotate(90deg)") : (0, s.styleUtil)(this.el, "left", r2 + "px");
                        } else
                          this.direction === "b2t" ? (0, s.styleUtil)(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + (this.el.getBoundingClientRect().top - n2.top) + "px) translateZ(0px) rotate(90deg)") : (0, s.styleUtil)(this.el, "left", this.el.getBoundingClientRect().left - n2.left + "px");
                        this.direction === "b2t" || (0, s.styleUtil)(this.el, "transform", "translateX(0px) translateY(0px) translateZ(0px)"), (0, s.styleUtil)(this.el, "transition", "transform 0s linear 0s");
                      } else
                        this.pastDuration && this.startTime ? this.pastDuration = this.pastDuration + new Date().getTime() - this.startTime : this.pastDuration = 1;
                  } }, { key: "startMove", value: function value(e3) {
                    if (this.hasMove || (this.danmu.emit("bullet_start", this), this.hasMove = true), (this.status !== "forcedPause" || e3) && this.el && this.status !== "start")
                      if (this.status = "start", this.willChanges = ["transform", "transition"], this.willChange(), (0, s.styleUtil)(this.el, "backface-visibility", "hidden"), (0, s.styleUtil)(this.el, "perspective", "500em"), this.mode === "scroll") {
                        var t3 = this.danmu.containerPos;
                        if (this.direction === "b2t") {
                          var n2 = (this.el.getBoundingClientRect().bottom - t3.top) / this.moveV;
                          (0, s.styleUtil)(this.el, "transition", "transform " + n2 + "s linear 0s"), (0, s.styleUtil)(this.el, "transform", "translateX(-" + this.top + "px) translateY(-" + this.height + "px) translateZ(0px) rotate(90deg)"), this.moveTime = new Date().getTime(), this.moveMoreS = this.el.getBoundingClientRect().top - t3.top, this.moveContainerHeight = t3.height;
                        } else {
                          if (!this.el)
                            return;
                          var i2 = this.el.getBoundingClientRect(), o2 = i2.right - t3.left, r2 = o2 / this.moveV;
                          i2.right > t3.left ? ((0, s.styleUtil)(this.el, "transition", "transform " + r2 + "s linear 0s"), (0, s.styleUtil)(this.el, "transform", "translateX(-" + o2 + "px) translateY(0px) translateZ(0px)"), this.moveTime = new Date().getTime(), this.moveMoreS = i2.left - t3.left, this.moveContainerWidth = t3.width) : (this.status = "end", this.remove());
                        }
                      } else {
                        var a2 = new Date().getTime(), l2 = (this.startTime && a2 - this.startTime > this.duration ? a2 - this.startTime : this.duration) / 1e3;
                        (0, s.styleUtil)(this.el, "left", "50%"), (0, s.styleUtil)(this.el, "margin", "0 0 0 -" + this.width / 2 + "px"), (0, s.styleUtil)(this.el, "visibility", "hidden"), (0, s.styleUtil)(this.el, "transition", "visibility " + l2 + "s 0s"), this.pastDuration || (this.pastDuration = 1), this.startTime = a2;
                      }
                  } }, { key: "remove", value: function value() {
                    this.logger && this.logger.info("remove #" + (this.options.txt || "[DOM Element]") + "#");
                    this.pauseMove(), this.el && this.el.parentNode && (this.willChanges = [], this.willChange(), this.detach(), this.options.el && this.options.el.nodeType === 1 && this.danmu.config.disableCopyDOM && (0, s.styleUtil)(this.options.el, "transform", "none"), this.danmu.emit("bullet_remove", { bullet: this }));
                  } }, { key: "setFontSize", value: function value(e3) {
                    this.el && (this.el.style.fontSize = e3);
                  } }, { key: "setLikeDom", value: function value(e3, t3) {
                    if (e3) {
                      Object.keys(t3).forEach(function(n3) {
                        e3.style[n3] = t3[n3];
                      });
                      if (e3.className = "danmu-like", this.el) {
                        var n2 = this.el.querySelector(".danmu-like");
                        n2 && this.el.removeChild(n2), this.el.innerHTML = "" + this.el.innerHTML + e3.outerHTML;
                      }
                    }
                    return e3;
                  } }, { key: "moveV", get: function get() {
                    var e3 = this._moveV;
                    if (!e3) {
                      if (this.options.moveV)
                        e3 = this.options.moveV;
                      else if (this.elPos) {
                        var t3 = this.danmu.containerPos;
                        e3 = (this.direction === "b2t" ? t3.height + this.height : t3.width + this.width) / this.duration * 1e3;
                      }
                      e3 && (e3 *= this.danmu.main.playRate, this._moveV = e3);
                    }
                    return e3;
                  } }]), t2;
                }(a.default);
                t.default = u;
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var i, o = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }(), r = n(1), a = (i = r) && i.__esModule ? i : { default: i }, s = n(0), l = n(31);
                var u = function(e2) {
                  function t2(e3) {
                    !function(e4, t3) {
                      if (!(e4 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, t2);
                    var n2 = function(e4, t3) {
                      if (!e4)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      return !t3 || (typeof t3 === "undefined" ? "undefined" : _typeof(t3)) != "object" && typeof t3 != "function" ? e4 : t3;
                    }(this, (t2.__proto__ || Object.getPrototypeOf(t2)).call(this)), i2 = n2;
                    return i2.setLogger("channel"), i2.danmu = e3, i2.reset(true), i2.direction = e3.direction, i2.channels = [], i2.updatePos(), (0, s.attachEventListener)(n2.danmu, "bullet_remove", function(e4) {
                      i2.removeBullet(e4.bullet);
                    }, "destroy"), (0, s.attachEventListener)(n2.danmu, "changeDirection", function(e4) {
                      i2.direction = e4;
                    }, "destroy"), (0, s.attachEventListener)(n2.danmu, "channel_resize", function() {
                      i2.resize();
                    }, "destroy"), n2;
                  }
                  return function(e3, t3) {
                    if (typeof t3 != "function" && t3 !== null)
                      throw new TypeError("Super expression must either be null or a function, not " + (typeof t3 === "undefined" ? "undefined" : _typeof(t3)));
                    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
                  }(t2, e2), o(t2, [{ key: "updatePos", value: function value() {
                    var e3 = this.container.getBoundingClientRect();
                    this.containerPos = e3, this.containerWidth = e3.width, this.containerHeight = e3.height, this.containerTop = e3.top, this.containerBottom = e3.bottom, this.containerLeft = e3.left, this.containerRight = e3.right;
                  } }, { key: "destroy", value: function value() {
                    for (var e3 in this.logger && this.logger.info("destroy"), this.channels.splice(0, this.channels.length), this._cancelResizeTimer(), this) {
                      s.hasOwnProperty.call(this, e3) && delete this[e3];
                    }
                  } }, { key: "addBullet", value: function value(e3) {
                    var t3 = this, n2 = this.danmu, i2 = this.channels, o2 = void 0, r2 = void 0, a2 = void 0;
                    if (t3.direction === "b2t" ? (r2 = this.channelWidth, a2 = Math.ceil(e3.width / r2)) : (o2 = this.channelHeight, a2 = Math.ceil(e3.height / o2)), a2 > i2.length)
                      return { result: false, message: "exceed channels.length, occupy=" + a2 + ",channelsSize=" + i2.length };
                    for (var s2 = true, l2 = void 0, u2 = -1, c = 0, f = i2.length; c < f; c++) {
                      if (i2[c].queue[e3.mode].some(function(t4) {
                        return t4.id === e3.id;
                      }))
                        return { result: false, message: "exited, channelOrder=" + c + ",danmu_id=" + e3.id };
                    }
                    if (e3.mode === "scroll")
                      for (var h = 0, d = i2.length - a2; h <= d; h++) {
                        s2 = true;
                        for (var p = h; p < h + a2; p++) {
                          if ((l2 = i2[p]).operating.scroll) {
                            s2 = false;
                            break;
                          }
                          if (l2.bookId.scroll && l2.bookId.scroll !== e3.id) {
                            s2 = false;
                            break;
                          }
                          l2.operating.scroll = true;
                          var g = l2.queue.scroll[0];
                          if (g) {
                            var m = g.el.getBoundingClientRect();
                            if (t3.direction === "b2t") {
                              if (m.bottom >= t3.containerPos.bottom) {
                                s2 = false, l2.operating.scroll = false;
                                break;
                              }
                            } else if (m.right >= t3.containerPos.right) {
                              s2 = false, l2.operating.scroll = false;
                              break;
                            }
                            var v = void 0, y = g.moveV, b = void 0, _ = e3.moveV, w = void 0;
                            if (t3.direction === "b2t" ? (b = (v = m.bottom - t3.containerTop) / y, w = t3.containerHeight + e3.random - v) : (b = (v = m.right - t3.containerLeft) / y, w = t3.containerWidth + e3.random - v), _ > y) {
                              var O = w / (_ - y);
                              if (n2.config.bOffset || (n2.config.bOffset = 0), b + n2.config.bOffset >= O) {
                                var k = b * _ - t3.containerPos.width;
                                k > 0 && e3.updateOffset(k + (1 + Math.ceil(5 * Math.random())));
                              }
                            }
                          }
                          l2.operating.scroll = false;
                        }
                        if (s2) {
                          u2 = h;
                          break;
                        }
                      }
                    else if (e3.mode === "top")
                      for (var x = 0, C = i2.length - a2; x <= C; x++) {
                        s2 = true;
                        for (var j = x; j < x + a2; j++) {
                          if (j > Math.floor(i2.length / 2)) {
                            s2 = false;
                            break;
                          }
                          if ((l2 = i2[j]).operating[e3.mode]) {
                            s2 = false;
                            break;
                          }
                          if ((l2.bookId[e3.mode] || e3.prior) && l2.bookId[e3.mode] !== e3.id) {
                            s2 = false;
                            break;
                          }
                          if (l2.operating[e3.mode] = true, l2.queue[e3.mode].length > 0) {
                            s2 = false, l2.operating[e3.mode] = false;
                            break;
                          }
                          l2.operating[e3.mode] = false;
                        }
                        if (s2) {
                          u2 = x;
                          break;
                        }
                      }
                    else if (e3.mode === "bottom")
                      for (var E = i2.length - a2; E >= 0; E--) {
                        s2 = true;
                        for (var M = E; M < E + a2; M++) {
                          if (M <= Math.floor(i2.length / 2)) {
                            s2 = false;
                            break;
                          }
                          if ((l2 = i2[M]).operating[e3.mode]) {
                            s2 = false;
                            break;
                          }
                          if ((l2.bookId[e3.mode] || e3.prior) && l2.bookId[e3.mode] !== e3.id) {
                            s2 = false;
                            break;
                          }
                          if (l2.operating[e3.mode] = true, l2.queue[e3.mode].length > 0) {
                            s2 = false, l2.operating[e3.mode] = false;
                            break;
                          }
                          l2.operating[e3.mode] = false;
                        }
                        if (s2) {
                          u2 = E;
                          break;
                        }
                      }
                    if (u2 !== -1) {
                      for (var L = u2, T = u2 + a2; L < T; L++) {
                        (l2 = i2[L]).operating[e3.mode] = true, l2.queue[e3.mode].unshift(e3), e3.prior && (delete l2.bookId[e3.mode], t3.logger && t3.logger.info(L + "\u53F7\u8F68\u9053\u6062\u590D\u6B63\u5E38\u4F7F\u7528")), l2.operating[e3.mode] = false;
                      }
                      if (e3.prior) {
                        if (t3.logger && t3.logger.info(e3.id + "\u53F7\u4F18\u5148\u5F39\u5E55\u8FD0\u884C\u5B8C\u6BD5"), delete e3.bookChannelId, n2.player)
                          n2.bulletBtn.main.data.some(function(t4) {
                            return t4.id === e3.id && (delete t4.bookChannelId, true);
                          });
                      }
                      return e3.channel_id = [u2, a2], t3.direction === "b2t" ? (e3.top = u2 * r2, t3.danmu.config.area && t3.danmu.config.area.start && (e3.top += t3.containerWidth * t3.danmu.config.area.start)) : (e3.top = u2 * o2, t3.danmu.config.area && t3.danmu.config.area.start && (e3.top += t3.containerHeight * t3.danmu.config.area.start)), { result: e3, message: "success" };
                    }
                    if (e3.options.realTime) {
                      var P = 0, z = -1, S = null;
                      if (t3.danmu.bulletBtn.main.queue.forEach(function(e4, n3) {
                        !e4.prior && !e4.options.realTime && e4.el && e4.el.getBoundingClientRect().left > t3.containerPos.right && e4.start >= P && (P = e4.start, z = n3, S = e4);
                      }), S) {
                        S.remove(), t3.removeBullet(S), t3.danmu.bulletBtn.main.queue.splice(z, 1), e3.channel_id = S.channel_id;
                        for (var D = S.channel_id[0], I = S.channel_id[0] + S.channel_id[1]; D < I; D++) {
                          (l2 = i2[D]).operating[e3.mode] = true, l2.queue[e3.mode].unshift(e3), e3.prior && delete l2.bookId[e3.mode], l2.operating[e3.mode] = false;
                        }
                        return e3.top = S.top, t3.danmu.config.area && t3.danmu.config.area.start && (e3.top += t3.containerHeight * t3.danmu.config.area.start), { result: e3, message: "success" };
                      }
                    }
                    if (e3.prior)
                      if (e3.bookChannelId || t3.danmu.live) {
                        if (n2.player)
                          n2.bulletBtn.main.data.some(function(n3) {
                            return n3.id === e3.id && (t3.logger && t3.logger.info(e3.id + "\u53F7\u4F18\u5148\u5F39\u5E55\u5C06\u4E8E2\u79D2\u540E\u518D\u6B21\u8BF7\u6C42\u6CE8\u518C"), n3.start += 2e3, true);
                          });
                      } else {
                        u2 = -1;
                        for (var q = 0, R = i2.length - a2; q <= R; q++) {
                          s2 = true;
                          for (var A = q; A < q + a2; A++) {
                            if (i2[A].bookId[e3.mode]) {
                              s2 = false;
                              break;
                            }
                          }
                          if (s2) {
                            u2 = q;
                            break;
                          }
                        }
                        if (u2 !== -1) {
                          for (var U = u2; U < u2 + a2; U++) {
                            i2[U].bookId[e3.mode] = e3.id, t3.logger && t3.logger.info(U + "\u53F7\u8F68\u9053\u88AB" + e3.id + "\u53F7\u4F18\u5148\u5F39\u5E55\u9884\u5B9A");
                          }
                          if (n2.player)
                            n2.bulletBtn.main.data.some(function(n3) {
                              return n3.id === e3.id && (t3.logger && t3.logger.info(e3.id + "\u53F7\u4F18\u5148\u5F39\u5E55\u5C06\u4E8E2\u79D2\u540E\u518D\u6B21\u8BF7\u6C42\u6CE8\u518C"), n3.start += 2e3, n3.bookChannelId = [u2, a2], t3.logger && t3.logger.info(e3.id + "\u53F7\u4F18\u5148\u5F39\u5E55\u9884\u5B9A\u4E86" + u2 + "~" + (u2 + a2 - 1) + "\u53F7\u8F68\u9053"), true);
                            });
                        }
                      }
                    return { result: false, message: "no surplus will right" };
                  } }, { key: "removeBullet", value: function value(e3) {
                    this.logger && this.logger.info("removeBullet " + (e3.options.txt || "[DOM Element]"));
                    for (var t3 = this.channels, n2 = e3.channel_id, i2 = void 0, o2 = n2[0], r2 = n2[0] + n2[1]; o2 < r2; o2++) {
                      if (i2 = t3[o2]) {
                        i2.operating[e3.mode] = true;
                        var a2 = -1;
                        i2.queue[e3.mode].some(function(t4, n3) {
                          return t4.id === e3.id && (a2 = n3, true);
                        }), a2 > -1 && i2.queue[e3.mode].splice(a2, 1), i2.operating[e3.mode] = false;
                      }
                    }
                    e3.options.loop && this.danmu.bulletBtn.main.playedData.push(e3.options);
                  } }, { key: "resizeSync", value: function value() {
                    this.resize(true);
                  } }, { key: "resize", value: function value() {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    this.logger && this.logger.info("resize");
                    var t3 = this;
                    function n2() {
                      var e4 = t3.danmu, n3 = e4.container, i2 = e4.config, o2 = e4.bulletBtn, r2 = void 0;
                      if (t3.updatePos(), t3._cancelResizeTimer(), o2.main.data && o2.main.data.forEach(function(e5) {
                        e5.bookChannelId && (delete e5.bookChannelId, t3.logger && t3.logger.info("resize\u5BFC\u81F4" + e5.id + "\u53F7\u4F18\u5148\u5F39\u5E55\u9884\u5B9A\u53D6\u6D88"));
                      }), t3.logger && t3.logger.info("resize\u5BFC\u81F4\u6240\u6709\u8F68\u9053\u6062\u590D\u6B63\u5E38\u4F7F\u7528"), t3.width = t3.containerWidth, t3.height = t3.containerHeight, i2.area) {
                        var a2 = i2.area, u2 = a2.lines, c = a2.start, f = a2.end;
                        (0, l.validAreaLineRule)(u2) ? r2 = u2 : c >= 0 && f >= c && (t3.direction === "b2t" ? t3.width = t3.width * (f - c) : t3.height = t3.height * (f - c));
                      }
                      t3.container = n3;
                      var h = i2.channelSize || (/mobile/gi.test(navigator.userAgent) ? 10 : 12);
                      (0, s.isNumber)(r2) || (r2 = t3.direction === "b2t" ? Math.floor(t3.width / h) : Math.floor(t3.height / h));
                      for (var d = [], p = 0; p < r2; p++) {
                        d[p] = { id: p, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: false, top: false, bottom: false }, bookId: {} };
                      }
                      if (t3.channels && t3.channels.length <= d.length) {
                        for (var g = function g2(e5) {
                          d[e5] = { id: e5, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: false, top: false, bottom: false }, bookId: {} }, ["scroll", "top"].forEach(function(n4) {
                            t3.channels[e5].queue[n4].forEach(function(t4) {
                              t4.el && d[e5].queue[n4].push(t4);
                            });
                          }), t3.channels[e5].queue.bottom.forEach(function(n4) {
                            if (n4.el && (d[e5 + d.length - t3.channels.length].queue.bottom.push(n4), n4.channel_id[0] + n4.channel_id[1] - 1 === e5)) {
                              var i3 = [].concat(n4.channel_id);
                              n4.channel_id = [i3[0] - t3.channels.length + d.length, i3[1]], n4.top = n4.channel_id[0] * h, t3.danmu.config.area && t3.danmu.config.area.start && (n4.top += t3.containerHeight * t3.danmu.config.area.start), n4.topInit();
                            }
                          });
                        }, m = 0; m < t3.channels.length; m++) {
                          g(m);
                        }
                        for (var v = function v2(e5) {
                          ["scroll", "top", "bottom"].forEach(function(t4) {
                            d[e5].queue[t4].forEach(function(e6) {
                              e6.resized = false;
                            });
                          });
                        }, y = 0; y < d.length; y++) {
                          v(y);
                        }
                        t3.channels = d, t3.direction === "b2t" ? t3.channelWidth = h : t3.channelHeight = h;
                      } else if (t3.channels && t3.channels.length > d.length) {
                        for (var b = function b2(e5) {
                          d[e5] = { id: e5, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: false, top: false, bottom: false }, bookId: {} }, ["scroll", "top", "bottom"].forEach(function(n4) {
                            if (n4 === "top" && e5 > Math.floor(d.length / 2))
                              ;
                            else if (n4 === "bottom" && e5 <= Math.floor(d.length / 2))
                              ;
                            else {
                              var i3 = n4 === "bottom" ? e5 - d.length + t3.channels.length : e5;
                              t3.channels[i3].queue[n4].forEach(function(o3, r3) {
                                if (o3.el && (d[e5].queue[n4].push(o3), n4 === "bottom" && o3.channel_id[0] + o3.channel_id[1] - 1 === i3)) {
                                  var a3 = [].concat(o3.channel_id);
                                  o3.channel_id = [a3[0] - t3.channels.length + d.length, a3[1]], o3.top = o3.channel_id[0] * h, t3.danmu.config.area && t3.danmu.config.area.start && (o3.top += t3.containerHeight * t3.danmu.config.area.start), o3.topInit();
                                }
                                t3.channels[i3].queue[n4].splice(r3, 1);
                              });
                            }
                          });
                        }, _ = 0; _ < d.length; _++) {
                          b(_);
                        }
                        for (var w = function w2(e5) {
                          ["scroll", "top", "bottom"].forEach(function(t4) {
                            d[e5].queue[t4].forEach(function(e6) {
                              e6.resized = false;
                            });
                          });
                        }, O = 0; O < d.length; O++) {
                          w(O);
                        }
                        t3.channels = d, t3.direction === "b2t" ? t3.channelWidth = h : t3.channelHeight = h;
                      }
                      t3.resizing = false;
                    }
                    t3.resizing || (t3.resizing = true, e3 ? n2() : (this._cancelResizeTimer(), this.resizeId = requestAnimationFrame(n2)));
                  } }, { key: "_cancelResizeTimer", value: function value() {
                    this.resizeId && (cancelAnimationFrame(this.resizeId), this.resizeId = null);
                  } }, { key: "reset", value: function value() {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    this.logger && this.logger.info("reset");
                    var t3 = this, n2 = t3.danmu, i2 = n2.container, o2 = n2.bulletBtn, r2 = n2.config;
                    function a2() {
                      var e4 = void 0, n3 = i2.getBoundingClientRect();
                      if (t3.width = n3.width, t3.height = n3.height, t3.resetId && (cancelAnimationFrame(t3.resetId), t3.resetId = null), r2.area) {
                        var o3 = r2.area, a3 = o3.lines, u2 = o3.start, c = o3.end;
                        (0, l.validAreaLineRule)(a3) ? e4 = a3 : u2 >= 0 && c >= u2 && (t3.direction === "b2t" ? t3.width = t3.width * (c - u2) : t3.height = t3.height * (c - u2));
                      }
                      var f = r2.channelSize || (/mobile/gi.test(navigator.userAgent) ? 10 : 12);
                      (0, s.isNumber)(e4) || (e4 = t3.direction === "b2t" ? Math.floor(t3.width / f) : Math.floor(t3.height / f));
                      for (var h = [], d = 0; d < e4; d++) {
                        h[d] = { id: d, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: false, top: false, bottom: false }, bookId: {} };
                      }
                      t3.channels = h, t3.direction === "b2t" ? t3.channelWidth = f : t3.channelHeight = f;
                    }
                    t3.container = i2, o2 && o2.main && o2.main.queue.forEach(function(e4) {
                      e4.remove();
                    }), t3.channels && t3.channels.length > 0 && ["scroll", "top", "bottom"].forEach(function(e4) {
                      for (var n3 = 0; n3 < t3.channels.length; n3++) {
                        t3.channels[n3].queue[e4].forEach(function(e5) {
                          e5.remove();
                        });
                      }
                    }), o2 && o2.main && o2.main.data && o2.main.data.forEach(function(e4) {
                      e4.attached_ = false;
                    }), e3 ? this.resetId = requestAnimationFrame(a2) : a2();
                  } }]), t2;
                }(a.default);
                t.default = u, e.exports = t.default;
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true }), t.validAreaLineRule = function(e2) {
                  return typeof e2 == "number" && e2 >= 0 && Number.isInteger(e2);
                };
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true });
                var i = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }(), o = n(0);
                var r = function() {
                  function e2(t2) {
                    !function(e3, t3) {
                      if (!(e3 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, e2), t2 = { initDOM: function initDOM() {
                      return document.createElement("div");
                    }, initSize: 10 }, this.init(t2);
                  }
                  return i(e2, [{ key: "init", value: function value(e3) {
                    this.idleList = [], this.usingList = [], this._id = 0, this.options = e3, this._expand(e3.initSize);
                  } }, { key: "use", value: function value() {
                    this.idleList.length || this._expand(1);
                    var e3 = this.idleList.shift();
                    return this.usingList.push(e3), e3;
                  } }, { key: "unused", value: function value(e3) {
                    var t2 = this.usingList.indexOf(e3);
                    t2 < 0 || (this.usingList.splice(t2, 1), e3.innerHTML = "", e3.textcontent = "", this.clearElementStyle(e3), this.idleList.push(e3));
                  } }, { key: "_expand", value: function value(e3) {
                    for (var t2 = 0; t2 < e3; t2++) {
                      this.idleList.push(this.options.initDOM(this._id++));
                    }
                  } }, { key: "destroy", value: function value() {
                    for (var e3 = 0; e3 < this.idleList.length; e3++) {
                      this.idleList[e3].innerHTML = "", this.idleList[e3].textcontent = "", this.clearElementStyle(this.idleList[e3]);
                    }
                    for (var t2 = 0; t2 < this.usingList.length; t2++) {
                      this.usingList[t2].innerHTML = "", this.usingList[t2].textcontent = "", this.clearElementStyle(this.usingList[t2]);
                    }
                    for (var n2 in this) {
                      o.hasOwnProperty.call(this, n2) && delete this[n2];
                    }
                  } }, { key: "clearElementStyle", value: function value(e3) {
                    var t2 = typeof window != "undefined" ? window.navigator.userAgent : null;
                    t2 && (t2.indexOf("MSIE ") > -1 || t2.indexOf("Trident/") > -1 ? (0, o.styleUtil)(e3, "transform", "none") : e3.setAttribute("style", ""));
                  } }]), e2;
                }();
                t.default = r, e.exports = t.default;
              }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: true }), t.destroyObserver = t.unObserver = t.addObserver = void 0;
                var i = function() {
                  function e2(e3, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var i2 = t2[n2];
                      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, i2.key, i2);
                    }
                  }
                  return function(t2, n2, i2) {
                    return n2 && e2(t2.prototype, n2), i2 && e2(t2, i2), t2;
                  };
                }(), o = n(0);
                var r = new (function() {
                  function e2() {
                    var t2 = this;
                    if (function(e3, t3) {
                      if (!(e3 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                    }(this, e2), this.__handlers = [], window.ResizeObserver)
                      try {
                        this.observer = new window.ResizeObserver((0, o.throttle)(function(e3) {
                          t2.__trigger(e3);
                        }, 100));
                      } catch (e3) {
                      }
                  }
                  return i(e2, [{ key: "addObserver", value: function value(e3, t2) {
                    if (this.observer) {
                      this.observer && this.observer.observe(e3);
                      for (var n2 = this.__handlers, i2 = -1, o2 = 0; o2 < n2.length; o2++) {
                        n2[o2] && e3 === n2[o2].target && (i2 = o2);
                      }
                      i2 > -1 ? this.__handlers[i2].handler.push(t2) : this.__handlers.push({ target: e3, handler: [t2] });
                    }
                  } }, { key: "unObserver", value: function value(e3) {
                    var t2 = -1;
                    this.__handlers.map(function(n2, i2) {
                      e3 === n2.target && (t2 = i2);
                    }), this.observer && this.observer.unobserve(e3), t2 > -1 && this.__handlers.splice(t2, 1);
                  } }, { key: "destroyObserver", value: function value() {
                    this.observer && this.observer.disconnect(), this.observer = null, this.__handlers = null;
                  } }, { key: "__runHandler", value: function value(e3) {
                    for (var t2 = this.__handlers, n2 = 0; n2 < t2.length; n2++) {
                      if (t2[n2] && e3 === t2[n2].target) {
                        t2[n2].handler && t2[n2].handler.map(function(e4) {
                          try {
                            e4();
                          } catch (e5) {
                            console.error(e5);
                          }
                        });
                        break;
                      }
                    }
                  } }, { key: "__trigger", value: function value(e3) {
                    var t2 = this;
                    e3.map(function(e4) {
                      t2.__runHandler(e4.target);
                    });
                  } }]), e2;
                }())();
                t.addObserver = function(e2, t2) {
                  r.addObserver(e2, t2);
                }, t.unObserver = function(e2, t2) {
                  r.unObserver(e2, t2);
                }, t.destroyObserver = function(e2, t2) {
                  r.destroyObserver(e2, t2);
                };
              }, function(e, t, n) {
                var i = n(35);
                typeof i == "string" && (i = [[e.i, i, ""]]);
                var o = { hmr: true, transform: void 0, insertInto: void 0 };
                n(37)(i, o);
                i.locals && (e.exports = i.locals);
              }, function(e, t, n) {
                (e.exports = n(36)(false)).push([e.i, ".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#fff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}", ""]);
              }, function(e, t) {
                e.exports = function(e2) {
                  var t2 = [];
                  return t2.toString = function() {
                    return this.map(function(t3) {
                      var n = function(e3, t4) {
                        var n2 = e3[1] || "", i = e3[3];
                        if (!i)
                          return n2;
                        if (t4 && typeof btoa == "function") {
                          var o = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), r = i.sources.map(function(e4) {
                            return "/*# sourceURL=" + i.sourceRoot + e4 + " */";
                          });
                          return [n2].concat(r).concat([o]).join("\n");
                        }
                        var a;
                        return [n2].join("\n");
                      }(t3, e2);
                      return t3[2] ? "@media " + t3[2] + "{" + n + "}" : n;
                    }).join("");
                  }, t2.i = function(e3, n) {
                    typeof e3 == "string" && (e3 = [[null, e3, ""]]);
                    for (var i = {}, o = 0; o < this.length; o++) {
                      var r = this[o][0];
                      typeof r == "number" && (i[r] = true);
                    }
                    for (o = 0; o < e3.length; o++) {
                      var a = e3[o];
                      typeof a[0] == "number" && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t2.push(a));
                    }
                  }, t2;
                };
              }, function(e, t, n) {
                var i, o, r = {}, a = (i = function i2() {
                  return window && document && document.all && !window.atob;
                }, function() {
                  return o === void 0 && (o = i.apply(this, arguments)), o;
                }), s = function s2(e2) {
                  return document.querySelector(e2);
                }, l = function(e2) {
                  var t2 = {};
                  return function(e3) {
                    if (typeof e3 == "function")
                      return e3();
                    if (t2[e3] === void 0) {
                      var n2 = s.call(this, e3);
                      if (window.HTMLIFrameElement && n2 instanceof window.HTMLIFrameElement)
                        try {
                          n2 = n2.contentDocument.head;
                        } catch (e4) {
                          n2 = null;
                        }
                      t2[e3] = n2;
                    }
                    return t2[e3];
                  };
                }(), u = null, c = 0, f = [], h = n(38);
                function d(e2, t2) {
                  for (var n2 = 0; n2 < e2.length; n2++) {
                    var i2 = e2[n2], o2 = r[i2.id];
                    if (o2) {
                      o2.refs++;
                      for (var a2 = 0; a2 < o2.parts.length; a2++) {
                        o2.parts[a2](i2.parts[a2]);
                      }
                      for (; a2 < i2.parts.length; a2++) {
                        o2.parts.push(b(i2.parts[a2], t2));
                      }
                    } else {
                      var s2 = [];
                      for (a2 = 0; a2 < i2.parts.length; a2++) {
                        s2.push(b(i2.parts[a2], t2));
                      }
                      r[i2.id] = { id: i2.id, refs: 1, parts: s2 };
                    }
                  }
                }
                function p(e2, t2) {
                  for (var n2 = [], i2 = {}, o2 = 0; o2 < e2.length; o2++) {
                    var r2 = e2[o2], a2 = t2.base ? r2[0] + t2.base : r2[0], s2 = { css: r2[1], media: r2[2], sourceMap: r2[3] };
                    i2[a2] ? i2[a2].parts.push(s2) : n2.push(i2[a2] = { id: a2, parts: [s2] });
                  }
                  return n2;
                }
                function g(e2, t2) {
                  var n2 = l(e2.insertInto);
                  if (!n2)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                  var i2 = f[f.length - 1];
                  if (e2.insertAt === "top")
                    i2 ? i2.nextSibling ? n2.insertBefore(t2, i2.nextSibling) : n2.appendChild(t2) : n2.insertBefore(t2, n2.firstChild), f.push(t2);
                  else if (e2.insertAt === "bottom")
                    n2.appendChild(t2);
                  else {
                    if (_typeof(e2.insertAt) != "object" || !e2.insertAt.before)
                      throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o2 = l(e2.insertInto + " " + e2.insertAt.before);
                    n2.insertBefore(t2, o2);
                  }
                }
                function m(e2) {
                  if (e2.parentNode === null)
                    return false;
                  e2.parentNode.removeChild(e2);
                  var t2 = f.indexOf(e2);
                  t2 >= 0 && f.splice(t2, 1);
                }
                function v(e2) {
                  var t2 = document.createElement("style");
                  return e2.attrs.type === void 0 && (e2.attrs.type = "text/css"), y(t2, e2.attrs), g(e2, t2), t2;
                }
                function y(e2, t2) {
                  Object.keys(t2).forEach(function(n2) {
                    e2.setAttribute(n2, t2[n2]);
                  });
                }
                function b(e2, t2) {
                  var n2, i2, o2, r2;
                  if (t2.transform && e2.css) {
                    if (!(r2 = t2.transform(e2.css)))
                      return function() {
                      };
                    e2.css = r2;
                  }
                  if (t2.singleton) {
                    var a2 = c++;
                    n2 = u || (u = v(t2)), i2 = O.bind(null, n2, a2, false), o2 = O.bind(null, n2, a2, true);
                  } else
                    e2.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (n2 = function(e3) {
                      var t3 = document.createElement("link");
                      return e3.attrs.type === void 0 && (e3.attrs.type = "text/css"), e3.attrs.rel = "stylesheet", y(t3, e3.attrs), g(e3, t3), t3;
                    }(t2), i2 = x.bind(null, n2, t2), o2 = function o3() {
                      m(n2), n2.href && URL.revokeObjectURL(n2.href);
                    }) : (n2 = v(t2), i2 = k.bind(null, n2), o2 = function o3() {
                      m(n2);
                    });
                  return i2(e2), function(t3) {
                    if (t3) {
                      if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap)
                        return;
                      i2(e2 = t3);
                    } else
                      o2();
                  };
                }
                e.exports = function(e2, t2) {
                  if (typeof DEBUG != "undefined" && DEBUG && (typeof document === "undefined" ? "undefined" : _typeof(document)) != "object")
                    throw new Error("The style-loader cannot be used in a non-browser environment");
                  (t2 = t2 || {}).attrs = _typeof(t2.attrs) == "object" ? t2.attrs : {}, t2.singleton || typeof t2.singleton == "boolean" || (t2.singleton = a()), t2.insertInto || (t2.insertInto = "head"), t2.insertAt || (t2.insertAt = "bottom");
                  var n2 = p(e2, t2);
                  return d(n2, t2), function(e3) {
                    for (var i2 = [], o2 = 0; o2 < n2.length; o2++) {
                      var a2 = n2[o2];
                      (s2 = r[a2.id]).refs--, i2.push(s2);
                    }
                    e3 && d(p(e3, t2), t2);
                    for (o2 = 0; o2 < i2.length; o2++) {
                      var s2;
                      if ((s2 = i2[o2]).refs === 0) {
                        for (var l2 = 0; l2 < s2.parts.length; l2++) {
                          s2.parts[l2]();
                        }
                        delete r[s2.id];
                      }
                    }
                  };
                };
                var _, w = (_ = [], function(e2, t2) {
                  return _[e2] = t2, _.filter(Boolean).join("\n");
                });
                function O(e2, t2, n2, i2) {
                  var o2 = n2 ? "" : i2.css;
                  if (e2.styleSheet)
                    e2.styleSheet.cssText = w(t2, o2);
                  else {
                    var r2 = document.createTextNode(o2), a2 = e2.childNodes;
                    a2[t2] && e2.removeChild(a2[t2]), a2.length ? e2.insertBefore(r2, a2[t2]) : e2.appendChild(r2);
                  }
                }
                function k(e2, t2) {
                  var n2 = t2.css, i2 = t2.media;
                  if (i2 && e2.setAttribute("media", i2), e2.styleSheet)
                    e2.styleSheet.cssText = n2;
                  else {
                    for (; e2.firstChild; ) {
                      e2.removeChild(e2.firstChild);
                    }
                    e2.appendChild(document.createTextNode(n2));
                  }
                }
                function x(e2, t2, n2) {
                  var i2 = n2.css, o2 = n2.sourceMap, r2 = t2.convertToAbsoluteUrls === void 0 && o2;
                  (t2.convertToAbsoluteUrls || r2) && (i2 = h(i2)), o2 && (i2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o2)))) + " */");
                  var a2 = new Blob([i2], { type: "text/css" }), s2 = e2.href;
                  e2.href = URL.createObjectURL(a2), s2 && URL.revokeObjectURL(s2);
                }
              }, function(e, t) {
                e.exports = function(e2) {
                  var t2 = typeof window != "undefined" && window.location;
                  if (!t2)
                    throw new Error("fixUrls requires window.location");
                  if (!e2 || typeof e2 != "string")
                    return e2;
                  var n = t2.protocol + "//" + t2.host, i = n + t2.pathname.replace(/\/[^\/]*$/, "/");
                  return e2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e3, t3) {
                    var o, r = t3.trim().replace(/^"(.*)"$/, function(e4, t4) {
                      return t4;
                    }).replace(/^'(.*)'$/, function(e4, t4) {
                      return t4;
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? e3 : (o = r.indexOf("//") === 0 ? r : r.indexOf("/") === 0 ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
                  });
                };
              }]);
            });
          }).call(this, __webpack_require__(135)(module2));
        },
        function(module2, exports2) {
          module2.exports = function(module3) {
            if (!module3.webpackPolyfill) {
              module3.deprecate = function() {
              };
              module3.paths = [];
              if (!module3.children)
                module3.children = [];
              Object.defineProperty(module3, "loaded", {
                enumerable: true,
                get: function() {
                  return module3.l;
                }
              });
              Object.defineProperty(module3, "id", {
                enumerable: true,
                get: function() {
                  return module3.i;
                }
              });
              module3.webpackPolyfill = 1;
            }
            return module3;
          };
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M36.5,18.73a1.19,1.19,0,0,0,1-1.14V16.33a1.2,1.2,0,0,0-1-1.13l-.61-.08a1.75,1.75,0,0,1-1.3-.86l-.21-.36-.2-.36A1.72,1.72,0,0,1,34,12l.23-.58a1.18,1.18,0,0,0-.5-1.42l-1.1-.62a1.18,1.18,0,0,0-1.47.3l-.39.51a1.82,1.82,0,0,1-1.41.72c-.44,0-1.88-.27-2.22-.7l-.39-.49a1.18,1.18,0,0,0-1.48-.28l-1.09.64a1.19,1.19,0,0,0-.47,1.43l.25.59a1.87,1.87,0,0,1-.08,1.58c-.26.37-1.17,1.5-1.71,1.58l-.63.09a1.19,1.19,0,0,0-1,1.14l0,1.27a1.17,1.17,0,0,0,1,1.12l.61.08a1.74,1.74,0,0,1,1.3.87l.21.36.2.35A1.69,1.69,0,0,1,24,22.08l-.23.59a1.19,1.19,0,0,0,.5,1.42l1.1.62a1.19,1.19,0,0,0,1.48-.31l.38-.5a1.83,1.83,0,0,1,1.41-.72c.44,0,1.88.25,2.22.69l.39.49a1.18,1.18,0,0,0,1.48.28L33.86,24a1.19,1.19,0,0,0,.47-1.43L34.09,22a1.84,1.84,0,0,1,.07-1.58c.26-.37,1.17-1.5,1.72-1.58ZM31,18.94a2.76,2.76,0,0,1-4.65-1.2A2.71,2.71,0,0,1,27,15.13a2.76,2.76,0,0,1,4.64,1.2A2.7,2.7,0,0,1,31,18.94Z"/>\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M32,0H3.59A3.59,3.59,0,0,0,0,3.59v17A3.59,3.59,0,0,0,3.59,24.2H19.72a12.59,12.59,0,0,1-.81-1.2A11.73,11.73,0,0,1,35.54,7.28V3.59A3.59,3.59,0,0,0,32,0ZM13,14.18H4.29a1.52,1.52,0,0,1,0-3H13a1.52,1.52,0,0,1,0,3ZM16.45,8H4.29a1.51,1.51,0,0,1,0-3H16.45a1.51,1.51,0,1,1,0,3Z"/>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(138);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .danmu-switch{-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26}.xgplayer-skin-default .xgplayer-danmu{display:none;position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:9;outline:none;pointer-events:none}.xgplayer-skin-default .xgplayer-danmu>*{position:absolute;white-space:nowrap;z-index:9;pointer-events:auto}.xgplayer-skin-default .xgplayer-danmu.xgplayer-has-danmu{display:block}.xgplayer-skin-default .xgplayer-panel{outline:none;-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:40px;height:40px;display:inline-block;position:relative;font-family:PingFangSC-Regular;font-size:13px;color:hsla(0,0%,100%,.8);z-index:36}.xgplayer-skin-default .xgplayer-panel .xgplayer-panel-icon{cursor:pointer;position:absolute;margin-left:5px;top:10px}.xgplayer-skin-default .xgplayer-panel-active{display:block!important;bottom:30px}.xgplayer-skin-default .xgplayer-panel-slider{z-index:36;display:none;position:absolute;width:230px;height:230px;background:rgba(0,0,0,.54);border-radius:1px;padding:10px 20px;outline:none;left:-115px;bottom:40px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode{padding-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-radio li{display:inline;list-style:none;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode ul{display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode li{margin:0 12px;font-size:11px;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-font{margin-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency{display:block;margin-top:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-progress{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:4px;border-radius:4px;background:linear-gradient(90deg,#f85959,#f85959 100%,#aaa)}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea{display:block;margin-top:8px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-threequarters,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-twoquarters{margin-left:-6px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-full{margin-right:3px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-full-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-onequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-threequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-twoquarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-zero-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(140);
          var s_pip = function s_pip2() {
            var player = this;
            if (!player.config.pip || typeof player.video.requestPictureInPicture !== "function") {
              return;
            }
            var pip = player.lang.PIP;
            var btn = (0, _util.createDom)("xg-pip", '<p class="name"><span>' + pip + "</span></p>", { tabindex: 9 }, "xgplayer-pip");
            player.once("ready", function() {
              player.controls.appendChild(btn);
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("pipBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_pip",
            method: s_pip
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(141);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:10px}.xgplayer-skin-default .xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.lang-is-jp .xgplayer-pip .name span{width:70px;height:20px}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(143);
          var s_miniplayer = function s_miniplayer2() {
            var player = this;
            if (!player.config.miniplayer) {
              return;
            }
            var miniplayer = player.lang.MINIPLAYER;
            var btn = (0, _util.createDom)("xg-miniplayer", '<p class="name"><span>' + miniplayer + "</span></p>", { tabindex: 9 }, "xgplayer-miniplayer");
            player.once("ready", function() {
              player.controls.appendChild(btn);
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("miniplayerBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_miniplayer",
            method: s_miniplayer
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(144);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-miniplayer{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:10px}.xgplayer-skin-default .xgplayer-miniplayer .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-miniplayer .name span{width:80px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default .xgplayer-miniplayer-lay{position:absolute;top:26px;left:0;width:100%;height:100%;z-index:130;cursor:pointer;background-color:transparent;display:none}.xgplayer-skin-default .xgplayer-miniplayer-lay div{width:100%;height:100%}.xgplayer-skin-default .xgplayer-miniplayer-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:130;display:none}.xgplayer-skin-default .xgplayer-miniplayer-drag .drag-handle{width:100%}.xgplayer-skin-default.xgplayer-miniplayer-active{position:fixed;right:0;bottom:200px;width:320px;height:180px;z-index:110}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-controls,.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-danmu{display:none}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-miniplayer-lay{display:block}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-miniplayer-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default.xgplayer-inactive .xgplayer-miniplayer-drag{display:none}.lang-is-jp .xgplayer-miniplayer .name span{width:70px;height:20px}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _playNext = __webpack_require__(146);
          var _playNext2 = _interopRequireDefault(_playNext);
          __webpack_require__(147);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_playNext = function s_playNext2() {
            var player = this;
            var nextBtn = player.config.playNext;
            if (!nextBtn || !nextBtn.urlList) {
              return;
            }
            var btn = (0, _util.createDom)("xg-playnext", '<xg-icon class="xgplayer-icon">' + _playNext2.default + "</xg-icon>", {}, "xgplayer-playnext");
            var tipsText = player.lang.PLAYNEXT_TIPS;
            var tips = (0, _util.createDom)("xg-tips", '<span class="xgplayer-tip-playnext">' + tipsText + "</span>", {}, "xgplayer-tips");
            btn.appendChild(tips);
            player.once("ready", function() {
              player.controls.appendChild(btn);
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                (0, _util.addClass)(player.root, "xgplayer-is-enter");
                player.userGestureTrigEvent("playNextBtnClick");
              });
            });
            var onUrlListEnd = function onUrlListEnd2() {
              (0, _util.addClass)(player.root, "xgplayer-playnext-inactive");
            };
            player.on("urlListEnd", onUrlListEnd);
            function onDestroy() {
              player.off("urlListEnd", onUrlListEnd);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "s_playNext",
            method: s_playNext
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.038 0.028)" d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(148);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-playnext{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;cursor:pointer;top:-2px}.xgplayer-skin-default .xgplayer-playnext .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-playnext .xgplayer-tips .xgplayer-tip-playnext{display:block}.xgplayer-skin-default .xgplayer-playnext:hover{opacity:.85}.xgplayer-skin-default .xgplayer-playnext:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-playnext .xgplayer-tips{margin-left:-25px}.xgplayer-lang-is-jp .xgplayer-playnext .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default.xgplayer-playnext-inactive .xgplayer-playnext{display:none}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _rotate = __webpack_require__(150);
          var _rotate2 = _interopRequireDefault(_rotate);
          __webpack_require__(151);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_rotate = function s_rotate2() {
            var player = this;
            if (!player.config.rotate) {
              return;
            }
            var btn = (0, _util.createDom)("xg-rotate", '<xg-icon class="xgplayer-icon">' + _rotate2.default + "</xg-icon>", {}, "xgplayer-rotate");
            var tipsText = player.lang.ROTATE_TIPS;
            var tips = (0, _util.createDom)("xg-tips", '<span class="xgplayer-tip-rotate">' + tipsText + "</span>", {}, "xgplayer-tips");
            btn.appendChild(tips);
            player.once("ready", function() {
              player.controls.appendChild(btn);
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("rotateBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_rotate",
            method: s_rotate
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">\n  <g clip-path="url(#clip0)">\n    <path transform="scale(1.5 1.5)" d="M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z" fill="white"/>\n    <path transform="scale(1.5 1.5)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z" fill="white"/>\n  </g>\n  <defs>\n    <clipPath id="clip0">\n      <rect width="40" height="40" fill="white"/>\n    </clipPath>\n  </defs>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(152);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-rotate{position:relative;-webkit-order:10;-moz-box-ordinal-group:11;order:10;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips .xgplayer-tip-rotate{display:block}.xgplayer-skin-default .xgplayer-rotate:hover{opacity:.85}.xgplayer-skin-default .xgplayer-rotate:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-rotate .xgplayer-tips{margin-left:-26px}.xgplayer-lang-is-jp .xgplayer-rotate .xgplayer-tips{margin-left:-38px}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _reload = __webpack_require__(154);
          var _reload2 = _interopRequireDefault(_reload);
          __webpack_require__(155);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_reload = function s_reload2() {
            var player = this;
            if (!player.config.reload) {
              return;
            }
            var btn = (0, _util.createDom)("xg-reload", '<xg-icon class="xgplayer-icon">' + _reload2.default + "</xg-icon>", {}, "xgplayer-reload");
            var tipsText = player.lang.RELOAD_TIPS;
            var tips = (0, _util.createDom)("xg-tips", '<span class="xgplayer-tip-reload">' + tipsText + "</span>", {}, "xgplayer-tips");
            btn.appendChild(tips);
            player.once("ready", function() {
              player.controls.appendChild(btn);
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("reloadBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_reload",
            method: s_reload
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n    <path fill="#FFF" fill-opacity="1" fill-rule="nonzero" d="M18.17 19.988a7.182 7.182 0 0 1-4.256 1.318 7.806 7.806 0 0 1-.595-.03c-.08-.008-.16-.021-.242-.031a8.004 8.004 0 0 1-.458-.071c-.094-.018-.185-.042-.276-.063a7.743 7.743 0 0 1-.439-.113c-.068-.022-.136-.047-.205-.07a7.03 7.03 0 0 1-.492-.181c-.037-.015-.072-.032-.108-.049a7.295 7.295 0 0 1-.554-.269l-.025-.012a7.347 7.347 0 0 1-2.111-1.753c-.03-.036-.057-.074-.086-.11a7.305 7.305 0 0 1-1.594-4.557h1.686a.123.123 0 0 0 .108-.064.119.119 0 0 0-.006-.125L5.684 9.532a.123.123 0 0 0-.103-.056.123.123 0 0 0-.102.056l-2.834 4.276a.121.121 0 0 0-.005.125c.022.04.064.064.107.064h1.687c0 2.025.627 3.902 1.693 5.454.013.021.022.044.037.066.11.159.233.305.352.455.043.057.085.116.13.171.175.213.36.413.55.61.02.018.036.038.054.055a9.447 9.447 0 0 0 2.91 1.996c.058.026.115.054.175.079.202.084.41.158.619.228.098.034.196.069.296.1.183.054.37.1.558.145.125.029.249.06.376.085.052.01.102.027.155.035.177.032.355.05.533.071.064.007.128.018.19.026.32.03.639.052.956.052a9.46 9.46 0 0 0 5.47-1.746 1.16 1.16 0 0 0 .282-1.608 1.143 1.143 0 0 0-1.6-.283zm5.397-5.991a9.604 9.604 0 0 0-1.685-5.441c-.016-.027-.026-.054-.043-.078-.132-.19-.276-.366-.419-.543-.017-.022-.032-.044-.05-.065a9.467 9.467 0 0 0-3.571-2.7l-.114-.051a11.2 11.2 0 0 0-.673-.248c-.082-.027-.163-.057-.247-.082a9.188 9.188 0 0 0-.6-.156c-.113-.026-.224-.055-.337-.077-.057-.011-.109-.028-.164-.037-.151-.027-.304-.039-.455-.058-.104-.013-.208-.03-.313-.04a10.05 10.05 0 0 0-.759-.039c-.045 0-.09-.007-.136-.007l-.025.003a9.45 9.45 0 0 0-5.46 1.737 1.16 1.16 0 0 0-.284 1.608c.363.523 1.08.65 1.6.284a7.182 7.182 0 0 1 4.222-1.32c.217.002.429.013.639.033.065.007.129.017.193.025.173.021.344.046.513.08.075.014.149.033.221.05.166.037.331.077.494.127l.152.051c.185.061.366.127.545.201l.054.025a7.308 7.308 0 0 1 2.741 2.067l.013.018a7.302 7.302 0 0 1 1.652 4.633h-1.686a.123.123 0 0 0-.108.064.12.12 0 0 0 .006.124l2.834 4.277c.022.033.06.054.103.054.042 0 .08-.021.102-.054l2.833-4.277a.12.12 0 0 0 .005-.124.123.123 0 0 0-.108-.064h-1.685z"/>\n</svg>\n';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(156);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-reload{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;width:40px;height:40px;cursor:pointer}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips .xgplayer-tip-reload{display:block}.xgplayer-skin-default .xgplayer-reload:hover{opacity:.85}.xgplayer-skin-default .xgplayer-reload:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-reload .xgplayer-tips{margin-left:-26px}.xgplayer-lang-is-jp .xgplayer-reload .xgplayer-tips{margin-left:-38px}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(158);
          var s_screenShot = function s_screenShot2() {
            var player = this;
            if (!player.config.screenShot || player.config.screenShot.hideButton) {
              return;
            }
            var screenShotText = player.lang.SCREENSHOT;
            var btn = (0, _util.createDom)("xg-screenshot", '<p class="name"><span>' + (player.config.screenShot.iconText || screenShotText) + "</span></p>", { tabindex: 11 }, "xgplayer-screenshot");
            player.once("ready", function() {
              player.controls.appendChild(btn);
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("screenShotBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_screenShot",
            method: s_screenShot
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(159);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-screenshot{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:10px}.xgplayer-skin-default .xgplayer-screenshot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-screenshot .name span{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:0 10px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-lang-is-en .xgplayer-screenshot .name span,.xgplayer-lang-is-jp .xgplayer-screenshot .name span{width:75px;height:20px}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _player = __webpack_require__(9);
          var _player2 = _interopRequireDefault(_player);
          __webpack_require__(78);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_nativeTextTrack = function s_nativeTextTrack2() {
            if (!this.config.nativeTextTrack) {
              return;
            }
            var player = this;
            var root = player.root;
            var util = _player2.default.util;
            var container = util.createDom("xg-texttrack", "", { tabindex: 7 }, "xgplayer-texttrack");
            var list = player.config.nativeTextTrack;
            if (list && Array.isArray(list) && list.length > 0) {
              util.addClass(player.root, "xgplayer-is-texttrack");
              player.once("canplay", function() {
                var _this = this;
                var tmp = ["<ul>"];
                tmp.push("<li class='" + (this.textTrackShowDefault ? "" : "selected") + "'}'>" + player.lang.OFF + "</li>");
                list.forEach(function(item) {
                  tmp.push("<li class='" + (item.default && _this.textTrackShowDefault ? "selected" : "") + "'>" + item.label + "</li>");
                });
                var controlText = player.lang.TEXTTRACK;
                tmp.push('</ul><p class="name">' + controlText + "</p>");
                var urlInRoot = root.querySelector(".xgplayer-texttrack");
                if (urlInRoot) {
                  urlInRoot.innerHTML = tmp.join("");
                  var cur = urlInRoot.querySelector(".name");
                  if (!player.config.textTrackActive || player.config.textTrackActive === "hover") {
                    cur.addEventListener("mouseenter", function(e) {
                      e.preventDefault();
                      e.stopPropagation();
                      util.addClass(root, "xgplayer-texttrack-active");
                      urlInRoot.focus();
                    });
                  }
                } else {
                  container.innerHTML = tmp.join("");
                  var _cur = container.querySelector(".name");
                  if (!player.config.textTrackActive || player.config.textTrackActive === "hover") {
                    _cur.addEventListener("mouseenter", function(e) {
                      e.preventDefault();
                      e.stopPropagation();
                      util.addClass(player.root, "xgplayer-texttrack-active");
                      container.focus();
                    });
                  }
                  player.controls.appendChild(container);
                }
              });
            }
            ;
            ["touchend", "click"].forEach(function(item) {
              container.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                var li = e.target || e.srcElement;
                if (li && li.tagName.toLocaleLowerCase() === "li") {
                  Array.prototype.forEach.call(li.parentNode.childNodes, function(item2) {
                    util.removeClass(item2, "selected");
                  });
                  util.addClass(li, "selected");
                  var trackDoms = player.root.getElementsByTagName("Track");
                  if (li.innerHTML === player.lang.OFF) {
                    trackDoms[0].track.mode = "hidden";
                    trackDoms[0].src = "";
                    util.removeClass(player.root, "xgplayer-texttrack-active");
                  } else {
                    trackDoms[0].style.display = "block";
                    util.addClass(player.root, "xgplayer-texttrack-active");
                    trackDoms[0].track.mode = "showing";
                    list.some(function(item2) {
                      if (item2.label === li.innerHTML) {
                        trackDoms[0].src = item2.src;
                        if (item2.kind) {
                          trackDoms[0].kind = item2.kind;
                        }
                        trackDoms[0].label = item2.label;
                        if (item2.srclang) {
                          trackDoms[0].srclang = item2.srclang;
                        }
                        return true;
                      }
                    });
                    player.emit("textTrackChange", li.innerHTML);
                  }
                } else if (player.config.textTrackActive === "click" && li && (li.tagName.toLocaleLowerCase() === "p" || li.tagName.toLocaleLowerCase() === "em")) {
                  util.addClass(player.root, "xgplayer-texttrack-active");
                  container.focus();
                }
              }, false);
            });
            player.on("play", function() {
              var ul = root.querySelector(".xgplayer-texttrack ul");
              var trackDoms = root.getElementsByTagName("Track");
              if (!player["hls"] || !ul || !trackDoms)
                return;
              trackDoms[0].src = "";
              Array.prototype.forEach.call(ul.childNodes, function(li) {
                if (util.hasClass(li, "selected")) {
                  if (li.innerHTML === player.lang.OFF) {
                    trackDoms[0].track.mode = "hidden";
                    trackDoms[0].src = "";
                  } else {
                    trackDoms[0].track.mode = "hidden";
                    list.some(function(item) {
                      if (item.label !== li.innerHTML) {
                        trackDoms[0].src = item.src;
                        if (item.kind) {
                          trackDoms[0].kind = item.kind;
                        }
                        trackDoms[0].label = item.label;
                        if (item.srclang) {
                          trackDoms[0].srclang = item.srclang;
                        }
                        return true;
                      }
                    });
                    list.some(function(item) {
                      if (item.label === li.innerHTML) {
                        setTimeout(function() {
                          trackDoms[0].src = item.src;
                          if (item.kind) {
                            trackDoms[0].kind = item.kind;
                          }
                          trackDoms[0].label = item.label;
                          if (item.srclang) {
                            trackDoms[0].srclang = item.srclang;
                          }
                          trackDoms[0].track.mode = "showing";
                        });
                        return true;
                      }
                    });
                  }
                }
              });
              util.removeClass(player.root, "xgplayer-texttrack-active");
            });
            container.addEventListener("mouseleave", function(e) {
              e.preventDefault();
              e.stopPropagation();
              util.removeClass(player.root, "xgplayer-texttrack-active");
            });
          };
          exports2.default = {
            name: "s_nativeTextTrack",
            method: s_nativeTextTrack
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-texttrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-texttrack ul{display:none;list-style:none;min-width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;text-align:center;white-space:nowrap;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-texttrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto;padding:6px 13px}.xgplayer-skin-default .xgplayer-texttrack ul li.selected,.xgplayer-skin-default .xgplayer-texttrack ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-texttrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default .xgplayer-texttrack.xgplayer-texttrack-hide{display:none}xg-text-track{transition:bottom .3s ease}.xgplayer-skin-default.xgplayer-is-texttrack .xgplayer-texttrack,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-texttrack ul{display:block}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(78);
          function renderList(root, textTrack, offText, isDefaultShow) {
            if (textTrack.length === 0) {
              root.innerHTML = "";
              return;
            }
            var tmp = [];
            tmp.push('<li data-type="off" class="' + (isDefaultShow ? "" : "selected") + '">' + offText + "</li>");
            textTrack.forEach(function(item) {
              tmp.push("<li data-id=" + item.id + " data-language=" + item.language + ' class="' + (item.isDefault && isDefaultShow ? "selected" : "") + '">' + item.label + "</li>");
            });
            root.innerHTML = tmp.join("");
          }
          var s_textTrack = function s_textTrack2() {
            var player = this;
            if (!this.config.textTrack) {
              return;
            }
            var textTrack = this.config.textTrack;
            var controlText = player.lang.TEXTTRACK;
            var container = (0, _util.createDom)("xg-texttrack", '<ul></ul><p class="name">' + controlText + "</p>", { tabindex: 7 }, "xgplayer-texttrack");
            function onCanPlay() {
              var urlInRoot = player.root.querySelector(".xgplayer-texttrack");
              if (!urlInRoot) {
                player.controls.appendChild(container);
                var cur = container.querySelector(".name");
                if (!player.config.textTrackActive || player.config.textTrackActive === "hover") {
                  cur.addEventListener("mouseenter", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    (0, _util.addClass)(player.root, "xgplayer-texttrack-active");
                    container.focus();
                  });
                  container.addEventListener("mouseleave", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    (0, _util.removeClass)(player.root, "xgplayer-texttrack-active");
                  });
                } else {
                  cur.addEventListener("click", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if ((0, _util.hasClass)(player.root, "xgplayer-texttrack-active")) {
                      (0, _util.removeClass)(player.root, "xgplayer-texttrack-active");
                    } else {
                      (0, _util.addClass)(player.root, "xgplayer-texttrack-active");
                    }
                  });
                }
              }
              ["touchend", "click"].forEach(function(item) {
                container.addEventListener(item, function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  var li = e.target || e.srcElement;
                  if (li && li.tagName.toLocaleLowerCase() === "li") {
                    var id = li.getAttribute("data-id");
                    var type = li.getAttribute("data-type");
                    var language = li.getAttribute("data-language");
                    Array.prototype.forEach.call(li.parentNode.childNodes, function(item2) {
                      (0, _util.removeClass)(item2, "selected");
                    });
                    (0, _util.addClass)(li, "selected");
                    if (type === "off") {
                      player.switchOffSubtile();
                      (0, _util.removeClass)(player.root, "xgplayer-texttrack-active");
                    } else {
                      player.switchSubTitle({ id, language });
                      (0, _util.addClass)(player.root, "xgplayer-texttrack-active");
                    }
                  }
                });
              });
              var ul = container.getElementsByTagName("ul")[0];
              renderList(ul, textTrack, player.lang.OFF, player.textTrackShowDefault);
              if (textTrack.length === 0) {
                (0, _util.addClass)(container, "xgplayer-texttrack-hide");
              } else {
                (0, _util.removeClass)(container, "xgplayer-texttrack-hide");
              }
            }
            var onListUpdate = function onListUpdate2(data) {
              if (!data.isListUpdate)
                return;
              var ul = container.getElementsByTagName("ul")[0];
              textTrack = data.list;
              renderList(ul, data.list, player.lang.OFF, player.textTrackShowDefault);
              data.list.length > 0 ? (0, _util.addClass)(player.root, "xgplayer-is-texttrack") : (0, _util.removeClass)(player.root, "xgplayer-is-texttrack");
              if (data.list.length === 0) {
                (0, _util.addClass)(container, "xgplayer-texttrack-hide");
              } else {
                (0, _util.removeClass)(container, "xgplayer-texttrack-hide");
              }
            };
            if (textTrack && Array.isArray(textTrack)) {
              textTrack.length > 0 && (0, _util.addClass)(player.root, "xgplayer-is-texttrack");
              player.once("canplay", onCanPlay);
              player.on("subtitle_change", onListUpdate);
            }
          };
          exports2.default = {
            name: "s_textTrack",
            method: s_textTrack
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(164);
          var s_error = function s_error2() {
            var player = this;
            var root = player.root;
            var error = (0, _util.createDom)("xg-error", '<span class="xgplayer-error-text">\u8BF7<span class="xgplayer-error-refresh">\u5237\u65B0</span>\u8BD5\u8BD5</span>', {}, "xgplayer-error");
            player.once("ready", function() {
              root.appendChild(error);
            });
            var text = error.querySelector(".xgplayer-error-text");
            if (player.config.lang && player.config.lang === "zh-cn") {
              text.innerHTML = player.config.errorTips || '\u8BF7<span class="xgplayer-error-refresh">\u5237\u65B0</span>\u8BD5\u8BD5';
            } else {
              text.innerHTML = player.config.errorTips || 'please try to <span class="xgplayer-error-refresh">refresh</span>';
            }
            var refresh = null;
            function onError() {
              (0, _util.addClass)(player.root, "xgplayer-is-error");
              refresh = error.querySelector(".xgplayer-error-refresh");
              if (refresh) {
                ["touchend", "click"].forEach(function(item) {
                  refresh.addEventListener(item, function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    player.autoplay = true;
                    var currentTime = player.currentTime;
                    player.once("playing", function() {
                      player.currentTime = currentTime;
                      (0, _util.removeClass)(player.root, "xgplayer-is-error");
                    });
                    player.src = player.config.url;
                  });
                });
              }
            }
            player.on("error", onError);
            function onDestroy() {
              player.off("error", onError);
              player.off("destroy", onDestroy);
            }
            player.once("destroy", onDestroy);
          };
          exports2.default = {
            name: "s_error",
            method: s_error
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(165);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:125;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-skin-default .xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-skin-default .xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-skin-default.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          __webpack_require__(167);
          var s_memoryPlay = function s_memoryPlay2() {
            var player = this;
            var lastPlayTime = player.config.lastPlayTime || 0;
            var lastPlayTimeHideDelay = player.config.lastPlayTimeHideDelay || 0;
            var dom = null;
            if (lastPlayTime <= 0) {
              return;
            }
            dom = (0, _util.createDom)("xg-memoryplay", '<div class="xgplayer-memoryplay-spot"><div class="xgplayer-progress-tip">\u60A8\u4E0A\u6B21\u89C2\u770B\u5230 <span class="xgplayer-lasttime">' + (0, _util.format)(lastPlayTime) + '</span> \uFF0C\u4E3A\u60A8\u81EA\u52A8\u7EED\u64AD <span class="btn-close"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></div></div>', {}, "xgplayer-memoryplay");
            dom.addEventListener("mouseover", function(e) {
              e.stopPropagation();
            });
            var removeFunc = function removeFunc2() {
              dom && dom.parentNode && dom.parentNode.removeChild(dom);
              dom = null;
            };
            dom.querySelector(".xgplayer-progress-tip .btn-close").addEventListener("click", removeFunc);
            var handlePlay = function handlePlay2() {
              if (lastPlayTimeHideDelay > 0) {
                player.root.appendChild(dom);
              }
              player.emit("memoryPlayStart", lastPlayTime);
              if (lastPlayTimeHideDelay > 0) {
                setTimeout(function() {
                  removeFunc();
                }, lastPlayTimeHideDelay * 1e3);
              }
            };
            player.once("playing", handlePlay);
            player.once("ended", removeFunc);
          };
          exports2.default = {
            name: "s_memoryPlay",
            method: s_memoryPlay
          };
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(168);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-memoryplay-spot{position:absolute;height:32px;left:10px;bottom:46px;background:rgba(0,0,0,.5);border-radius:32px;line-height:32px;color:#ddd;z-index:15;padding:0 32px 0 16px}.xgplayer-skin-default .xgplayer-memoryplay-spot .xgplayer-lasttime{color:red;font-weight:700}.xgplayer-skin-default .xgplayer-memoryplay-spot .btn-close{position:absolute;width:16px;height:16px;right:10px;top:2px;cursor:pointer;color:#fff;font-size:16px}", ""]);
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _util = __webpack_require__(0);
          var _airplay = __webpack_require__(170);
          var _airplay2 = _interopRequireDefault(_airplay);
          __webpack_require__(171);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var s_airplay = function s_airplay2() {
            var player = this;
            if (!player.config.airplay || !window.WebKitPlaybackTargetAvailabilityEvent)
              return;
            var btn = (0, _util.createDom)("xg-airplay", '<xg-icon class="xgplayer-icon">\n    <div class="xgplayer-icon-airplay">' + _airplay2.default + "</div>\n  </xg-icon>", {}, "xgplayer-airplay");
            var tips = (0, _util.createDom)("xg-tips", '<span class="xgplayer-tip-airplay">' + player.lang.AIRPLAY_TIPS + "</span>", {}, "xgplayer-tips");
            btn.appendChild(tips);
            player.once("ready", function() {
              player.controls.appendChild(btn);
              player.video.addEventListener("webkitplaybacktargetavailabilitychanged", function(event) {
                switch (event.availability) {
                  case "available":
                    btn.hidden = false;
                    btn.disabled = false;
                    break;
                  case "not-available":
                    btn.hidden = true;
                    btn.disabled = true;
                    break;
                }
              });
            });
            ["click", "touchend"].forEach(function(item) {
              btn.addEventListener(item, function(e) {
                e.preventDefault();
                e.stopPropagation();
                player.userGestureTrigEvent("airplayBtnClick");
              });
            });
          };
          exports2.default = {
            name: "s_airplay",
            method: s_airplay
          };
          module2.exports = exports2["default"];
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_exports__["default"] = '<svg t="1600422191774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3100" width="28" height="28"><path d="M256 938.666667h512L512 597.333333 256 938.666667z m170.666667-85.333334l85.333333-113.781333L597.333333 853.333333H426.666667zM853.333333 85.333333H170.666667C99.946667 85.333333 42.666667 142.613333 42.666667 213.333333v426.666667c0 70.72 57.28 128 128 128h106.666666l64-85.333333H170.666667c-23.573333 0-42.666667-19.093333-42.666667-42.666667V213.333333c0-23.573333 19.093333-42.666667 42.666667-42.666666h682.666666c23.573333 0 42.666667 19.093333 42.666667 42.666666v426.666667c0 23.573333-19.093333 42.666667-42.666667 42.666667H682.666667l64 85.333333h106.666666c70.72 0 128-57.28 128-128V213.333333c0-70.72-57.28-128-128-128z" p-id="3101" fill="#ffffff"></path></svg>';
        },
        function(module2, exports2, __webpack_require__) {
          var content = __webpack_require__(172);
          if (typeof content === "string")
            content = [[module2.i, content, ""]];
          var transform;
          var insertInto;
          var options = { "hmr": true };
          options.transform = transform;
          options.insertInto = void 0;
          var update = __webpack_require__(2)(content, options);
          if (content.locals)
            module2.exports = content.locals;
          if (false) {
          }
        },
        function(module2, exports2, __webpack_require__) {
          exports2 = module2.exports = __webpack_require__(1)(false);
          exports2.push([module2.i, ".xgplayer-skin-default .xgplayer-airplay{position:relative;-webkit-order:11;-moz-box-ordinal-group:12;order:11;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon{margin-top:6px;margin-left:6px}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon .xgplayer-icon-airplay{display:block}.xgplayer-skin-default .xgplayer-airplay .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-airplay .xgplayer-tips .xgplayer-tip-airplay{display:block}.xgplayer-skin-default .xgplayer-airplay:hover{opacity:.85}.xgplayer-skin-default .xgplayer-airplay:hover .xgplayer-tips{display:block}", ""]);
        }
      ]);
    });
  }
});

export {
  __commonJS,
  __export,
  __toESM,
  init_define_process_env_UNI_STAT_TITLE_JSON,
  require_dist
};
/*!
* Draggabilly v2.4.1
* Make that shiz draggable
* https://draggabilly.desandro.com
* MIT license
*/
/*!
* Unidragger v2.4.0
* Draggable base class
* MIT license
*/
/*!
* Unipointer v2.4.0
* base class for doing one thing with pointer event
* MIT license
*/
/*!
* getSize v2.0.3
* measure size of elements
* MIT license
*/
/*! Built @Mon, 17 Oct 2022 06:40:43 GMT */
//# sourceMappingURL=chunk-YRG35TXW.js.map
