import {
  __commonJS,
  __export,
  __toESM,
  init_define_process_env_UNI_STAT_TITLE_JSON,
  require_dist
} from "./chunk-YRG35TXW.js";

// F:/uniapp/beyond-video/node_modules/_eventemitter3@4.0.7@eventemitter3/index.js
var require_eventemitter3_4_0 = __commonJS({
  "F:/uniapp/beyond-video/node_modules/_eventemitter3@4.0.7@eventemitter3/index.js"(exports, module) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter6() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter6.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter6.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter6.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter6.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter6.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter6.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter6.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter6.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter6.prototype.off = EventEmitter6.prototype.removeListener;
    EventEmitter6.prototype.addListener = EventEmitter6.prototype.on;
    EventEmitter6.prefixed = prefix;
    EventEmitter6.EventEmitter = EventEmitter6;
    if (typeof module !== "undefined") {
      module.exports = EventEmitter6;
    }
  }
});

// F:/uniapp/beyond-video/node_modules/_concat-typed-array@1.0.2@concat-typed-array/lib/concat.js
var require_concat = __commonJS({
  "F:/uniapp/beyond-video/node_modules/_concat-typed-array@1.0.2@concat-typed-array/lib/concat.js"(exports) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function(ResultConstructor) {
      var totalLength = 0;
      for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arrays[_key - 1] = arguments[_key];
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arr = _step.value;
          totalLength += arr.length;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      var result = new ResultConstructor(totalLength);
      var offset = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = void 0;
      try {
        for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _arr = _step2.value;
          result.set(_arr, offset);
          offset += _arr.length;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
      return result;
    };
  }
});

// F:/uniapp/beyond-video/node_modules/_concat-typed-array@1.0.2@concat-typed-array/lib/index.js
var require_lib = __commonJS({
  "F:/uniapp/beyond-video/node_modules/_concat-typed-array@1.0.2@concat-typed-array/lib/index.js"(exports, module) {
    "use strict";
    init_define_process_env_UNI_STAT_TITLE_JSON();
    var _concat = require_concat();
    var _concat2 = _interopRequireDefault(_concat);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    module.exports = _concat2.default;
  }
});

// dep:xgplayer-hls
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls@2.5.2@xgplayer-hls/es/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_xgplayer4 = __toESM(require_dist());

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mse/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_xgplayer2 = __toESM(require_dist());

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/common/index.js
var common_exports = {};
__export(common_exports, {
  caculate: () => caculate_default,
  debounce: () => debounce_default,
  softSolutionProbe: () => softSolution_probe_default
});
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/common/func/debounce.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var debounce_default = function(fn, wait) {
  var lastTime = Date.now();
  var timer = null;
  var isFirstTime = true;
  return function() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var now = Date.now();
    if (isFirstTime) {
      lastTime = Date.now();
      isFirstTime = false;
      fn.apply(void 0, args);
    }
    if (now - lastTime > wait) {
      lastTime = now;
      fn.apply(void 0, args);
    } else {
      if (timer) {
        window.clearTimeout(timer);
      }
      timer = setTimeout(function() {
        fn.apply(void 0, args);
      }, wait);
    }
  };
};

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/common/func/caculate.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var fixedFloat = function fixedFloat2(num, fixed) {
  return parseFloat(Number(num).toFixed(fixed));
};
var caculate_default = {
  fixedFloat
};

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/common/func/softSolution-probe.js
init_define_process_env_UNI_STAT_TITLE_JSON();
function softSolution_probe_default() {
  var webAudioEnable = false;
  var webglEnable = false;
  try {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var ctx = new AudioContext();
    ctx.close();
    ctx = null;
    webAudioEnable = true;
  } catch (e) {
  }
  try {
    var cvs = document.createElement("canvas");
    var validContextNames = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
    for (var i = 0; i < validContextNames.length; i++) {
      var glCtx = cvs.getContext(validContextNames[i]);
      if (glCtx) {
        glCtx = null;
        cvs = null;
        webglEnable = true;
        break;
      }
    }
  } catch (e) {
  }
  var WebComponentSupported = "customElements" in window && window.customElements.define;
  var isComponentDefined = void 0;
  if (WebComponentSupported) {
    var mVideo = window.customElements.get("live-video");
    isComponentDefined = mVideo && mVideo.isSupported();
  }
  return webAudioEnable && webglEnable && isComponentDefined;
}

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/context/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/events/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var BROWSER_EVENTS = {
  VISIBILITY_CHANGE: "VISIBILITY_CHANGE"
};
var PLAYER_EVENTS = {
  SEEK: "SEEK"
};
var LOADER_EVENTS = {
  LADER_START: "LOADER_START",
  LOADER_DATALOADED: "LOADER_DATALOADED",
  LOADER_COMPLETE: "LOADER_COMPLETE",
  LOADER_RESPONSE_HEADERS: "LOADER_RESPONSE_HEADERS",
  LOADER_ERROR: "LOADER_ERROR",
  LOADER_RETRY: "LOADER_RETRY",
  LOADER_TTFB: "LOADER_TTFB"
};
var DEMUX_EVENTS = {
  DEMUX_START: "DEMUX_START",
  DEMUX_COMPLETE: "DEMUX_COMPLETE",
  DEMUX_ERROR: "DEMUX_ERROR",
  METADATA_PARSED: "METADATA_PARSED",
  SEI_PARSED: "SEI_PARSED",
  VIDEO_METADATA_CHANGE: "VIDEO_METADATA_CHANGE",
  AUDIO_METADATA_CHANGE: "AUDIO_METADATA_CHANGE",
  MEDIA_INFO: "MEDIA_INFO",
  ISKEYFRAME: "ISKEYFRAME"
};
var REMUX_EVENTS = {
  REMUX_METADATA: "REMUX_METADATA",
  REMUX_MEDIA: "REMUX_MEDIA",
  MEDIA_SEGMENT: "MEDIA_SEGMENT",
  REMUX_ERROR: "REMUX_ERROR",
  INIT_SEGMENT: "INIT_SEGMENT",
  DETECT_CHANGE_STREAM: "DETECT_CHANGE_STREAM",
  DETECT_CHANGE_STREAM_DISCONTINUE: "DETECT_CHANGE_STREAM_DISCONTINUE",
  DETECT_AUDIO_GAP: "DETECT_AUDIO_GAP",
  DETECT_LARGE_GAP: "DETECT_LARGE_GAP",
  DETECT_AUDIO_OVERLAP: "DETECT_AUDIO_OVERLAP",
  RANDOM_ACCESS_POINT: "RANDOM_ACCESS_POINT",
  DETECT_FRAG_ID_DISCONTINUE: "DETECT_FRAG_ID_DISCONTINUE"
};
var MSE_EVENTS = {
  SOURCE_UPDATE_END: "SOURCE_UPDATE_END",
  MSE_ERROR: "MSE_ERROR",
  MSE_WRONG_TRACK_ADD: "MSE_WRONG_TRACK_ADD"
};
var HLS_EVENTS = {
  RETRY_TIME_EXCEEDED: "RETRY_TIME_EXCEEDED"
};
var CRYPTO_EVENTS = {
  START_DECRYPTOO: "START_DECRYPTO",
  DECRYPTED: "DECRYPTED"
};
var ALLEVENTS = Object.assign({}, LOADER_EVENTS, DEMUX_EVENTS, REMUX_EVENTS, MSE_EVENTS, HLS_EVENTS, PLAYER_EVENTS, BROWSER_EVENTS);
var FlvAllowedEvents = [];
var HlsAllowedEvents = [];
for (key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    FlvAllowedEvents.push(ALLEVENTS[key]);
  }
}
var key;
for (_key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(_key)) {
    HlsAllowedEvents.push(ALLEVENTS[_key]);
  }
}
var _key;
var events_default = {
  ALLEVENTS,
  HLS_EVENTS,
  REMUX_EVENTS,
  DEMUX_EVENTS,
  MSE_EVENTS,
  LOADER_EVENTS,
  FlvAllowedEvents,
  HlsAllowedEvents,
  CRYPTO_EVENTS,
  PLAYER_EVENTS,
  BROWSER_EVENTS
};

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/playlist.js
init_define_process_env_UNI_STAT_TITLE_JSON();
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
var Playlist = function() {
  function Playlist2(configs) {
    _classCallCheck(this, Playlist2);
    this._baseURL = "";
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = void 0;
    this.end = false;
    this.autoclear = configs.autoclear || false;
    this.logger = configs.logger;
    this.downloadedUrls = [];
    this._avgSegmentDuration = 4;
  }
  _createClass(Playlist2, [{
    key: "push",
    value: function push(tsURL, duration, discontinue, id, cc, isLast) {
      if (!this._ts[tsURL]) {
        this._ts[tsURL] = {
          duration,
          downloaded: false,
          downloading: false,
          start: this.duration,
          discontinue: !!discontinue,
          id,
          cc,
          isLast: isLast || false
        };
        this._list[this.duration] = tsURL;
        this.duration += duration;
        this.fragLength += 1;
      }
    }
  }, {
    key: "deleteFrag",
    value: function deleteFrag(url) {
      if (this._ts[url]) {
        if (this._ts[url].start > this._lastget.time) {
          this._lastget = {
            duration: this._ts[url].duration,
            time: this._ts[url].start,
            downloaded: false,
            downloading: false,
            url,
            id: this._ts[url].id
          };
        }
        delete this._list[this._ts[url].start];
        delete this._ts[url];
        this.fragLength -= 1;
      }
    }
  }, {
    key: "_calcAvgFrgmentDuration",
    value: function _calcAvgFrgmentDuration(data) {
      if (!data.frags)
        return data.targetduration;
      var fragLen = data.frags.length;
      return Math.floor(data.duration / fragLen / 1e3);
    }
  }, {
    key: "pushM3U8",
    value: function pushM3U8(data, deletepre) {
      if (!data) {
        throw new Error("No m3u8 data received.");
      }
      this.version = data.version;
      this.targetduration = data.targetduration;
      this._avgSegmentDuration = Math.min(this.targetduration, this._calcAvgFrgmentDuration(data));
      if (data.encrypt && !this.encrypt) {
        this.encrypt = data.encrypt;
      }
      this.end = data.end || false;
      if (!data.sequence) {
        data.sequence = 0;
      }
      if (data.sequence > this.sequence) {
        var len = data.frags.length;
        if (this.logger) {
          this.logger.log("PLAYLIST", "new playlist [" + data.sequence + ", " + (data.sequence + len - 1) + "]");
        }
        this.sequence = data.sequence;
        var newfraglist = [];
        for (var i = 0; i < len; i++) {
          var frag = data.frags[i];
          if (!this._ts[frag.url] && this.downloadedUrls.indexOf(frag.url) < 0) {
            newfraglist.push(frag.url);
            this.push(frag.url, frag.duration, frag.discontinue, frag.id, frag.cc, frag.isLast);
          }
        }
        if (newfraglist.length < 1) {
          throw new Error("Can not read ts file list.");
        }
        if (deletepre) {
          var tslist = this.getTsList();
          for (var _i = 0; _i < tslist.length; _i++) {
            if (newfraglist.indexOf(tslist[_i]) < 0) {
              this.deleteFrag(tslist[_i]);
            }
          }
        }
      } else {
        throw new Error("Old m3u8 file received, " + data.sequence);
      }
    }
  }, {
    key: "getTsList",
    value: function getTsList() {
      return Object.keys(this._ts);
    }
  }, {
    key: "downloaded",
    value: function downloaded(tsname, isloaded) {
      var ts = this._ts[tsname];
      if (ts) {
        ts.downloaded = isloaded;
      }
    }
  }, {
    key: "downloading",
    value: function downloading(tsname, loading) {
      var ts = this._ts[tsname];
      if (ts) {
        ts.downloading = loading;
      }
    }
  }, {
    key: "getTsByName",
    value: function getTsByName(name) {
      return this._ts[name];
    }
  }, {
    key: "getTs",
    value: function getTs(time) {
      var timelist = Object.keys(this._list);
      var ts = void 0;
      if (time === void 0) {
        if (this._lastget) {
          time = this._lastget.time + this._lastget.duration;
        } else {
          time = 0;
        }
      }
      if (timelist.length < 1 || time >= this.duration) {
        return void 0;
      }
      timelist = timelist.sort(function(a, b) {
        return parseFloat(a) - parseFloat(b);
      });
      for (var i = 0; i < timelist.length; i++) {
        if (time >= parseInt(timelist[i])) {
          var url = this._list[timelist[i]];
          var downloaded = this._ts[url].downloaded;
          var downloading = this._ts[url].downloading;
          ts = {
            url,
            downloaded,
            downloading,
            time: parseInt(timelist[i]),
            duration: parseInt(this._ts[url].duration),
            id: this._ts[url].id,
            cc: this._ts[url].cc,
            isLast: this._ts[url].isLast
          };
          if (this.autoclear && this._lastget) {
            delete this._ts[this._lastget.url];
            delete this._list[this._lastget.time];
          }
          this._lastget = ts;
        } else {
          break;
        }
      }
      if (ts) {
        this.downloadedUrls.push(ts.url);
      }
      return ts;
    }
  }, {
    key: "getLastDownloadedTs",
    value: function getLastDownloadedTs() {
      var timelist = Object.keys(this._list).sort(function(a, b) {
        var result = Number(a) - Number(b);
        return result;
      });
      var found = void 0;
      for (var i = 0; i < timelist.length; i++) {
        var url = this._list[timelist[i]];
        var downloaded = this._ts[url].downloaded;
        var downloading = this._ts[url].downloading;
        if (downloaded) {
          found = { url, downloaded, downloading, time: parseInt(timelist[i]), duration: parseInt(this._ts[url].duration) };
        } else {
          break;
        }
      }
      return found;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._baseURL = "";
      this._list = {};
      this._ts = {};
      this.version = 0;
      this.sequence = -1;
      this.targetduration = 0;
      this.duration = 0;
    }
  }, {
    key: "clearDownloaded",
    value: function clearDownloaded() {
      var list = Object.keys(this._ts);
      for (var i = 0, l = list.length; i < l; i++) {
        var ts = this._ts[list[i]];
        ts.downloaded = false;
        ts.downloading = false;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._baseURL = "";
      this._list = {};
      this._ts = {};
      this.version = 0;
      this.sequence = -1;
      this.targetduration = 0;
      this.duration = 0;
      this.fragLength = 0;
      this._lastget = void 0;
      this.autoclear = false;
    }
  }, {
    key: "resetSequence",
    value: function resetSequence() {
      this.sequence = -1;
    }
  }, {
    key: "list",
    get: function get6() {
      return this._list;
    }
  }, {
    key: "baseURL",
    set: function set2(baseURL) {
      if (this.baseURL !== baseURL) {
        this.clear();
        this._baseURL = baseURL;
      }
    },
    get: function get6() {
      return this._baseURL;
    }
  }, {
    key: "avgSegmentDuration",
    get: function get6() {
      return this._avgSegmentDuration;
    }
  }]);
  return Playlist2;
}();
var playlist_default = Playlist;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/remuxed-buffer.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass2 = function() {
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
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var RemuxedBuffer = function RemuxedBuffer2() {
  _classCallCheck2(this, RemuxedBuffer2);
  this.mimetype = "";
  this.init = null;
  this.data = [];
  this.bufferDuration = 0;
};
var RemuxedBufferManager = function() {
  function RemuxedBufferManager2() {
    _classCallCheck2(this, RemuxedBufferManager2);
    this.sources = {};
  }
  _createClass2(RemuxedBufferManager2, [{
    key: "getSource",
    value: function getSource(name) {
      return this.sources[name];
    }
  }, {
    key: "createSource",
    value: function createSource(name) {
      this.sources[name] = new RemuxedBuffer();
      return this.sources[name];
    }
  }, {
    key: "clear",
    value: function clear() {
      this.sources = {};
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.clear();
    }
  }]);
  return RemuxedBufferManager2;
}();
var remuxed_buffer_default = RemuxedBufferManager;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/data-view.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass3 = function() {
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
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var XGDataView = function() {
  function XGDataView2(buffer) {
    _classCallCheck3(this, XGDataView2);
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
      this.dataview = new DataView(buffer);
      this.dataview.position = 0;
    } else {
      throw new Error("data is invalid");
    }
  }
  _createClass3(XGDataView2, [{
    key: "back",
    value: function back(count) {
      this.position -= count;
    }
  }, {
    key: "getUint8",
    value: function getUint8(offset) {
      return this.dataview.getUint8(offset);
    }
  }, {
    key: "skip",
    value: function skip(count) {
      var loop = Math.floor(count / 4);
      var last = count % 4;
      for (var i = 0; i < loop; i++) {
        XGDataView2.readByte(this.dataview, 4);
      }
      if (last > 0) {
        XGDataView2.readByte(this.dataview, last);
      }
    }
  }, {
    key: "readUint8",
    value: function readUint8() {
      return XGDataView2.readByte(this.dataview, 1);
    }
  }, {
    key: "readUint16",
    value: function readUint16() {
      return XGDataView2.readByte(this.dataview, 2);
    }
  }, {
    key: "readUint24",
    value: function readUint24() {
      return XGDataView2.readByte(this.dataview, 3);
    }
  }, {
    key: "readUint32",
    value: function readUint32() {
      return XGDataView2.readByte(this.dataview, 4);
    }
  }, {
    key: "readUint64",
    value: function readUint64() {
      return XGDataView2.readByte(this.dataview, 8);
    }
  }, {
    key: "readInt8",
    value: function readInt8() {
      return XGDataView2.readByte(this.dataview, 1, true);
    }
  }, {
    key: "readInt16",
    value: function readInt16() {
      return XGDataView2.readByte(this.dataview, 2, true);
    }
  }, {
    key: "readInt32",
    value: function readInt32() {
      return XGDataView2.readByte(this.dataview, 4, true);
    }
  }, {
    key: "writeUint32",
    value: function writeUint32(value) {
      return new Uint8Array([value >>> 24 & 255, value >>> 16 & 255, value >>> 8 & 255, value & 255]);
    }
  }, {
    key: "length",
    get: function get6() {
      return this.buffer.byteLength;
    }
  }, {
    key: "position",
    set: function set2(value) {
      this.dataview.position = value;
    },
    get: function get6() {
      return this.dataview.position;
    }
  }], [{
    key: "readByte",
    value: function readByte(buffer, size, sign) {
      var res = void 0;
      switch (size) {
        case 1:
          if (sign) {
            res = buffer.getInt8(buffer.position);
          } else {
            res = buffer.getUint8(buffer.position);
          }
          break;
        case 2:
          if (sign) {
            res = buffer.getInt16(buffer.position);
          } else {
            res = buffer.getUint16(buffer.position);
          }
          break;
        case 3:
          if (sign) {
            throw new Error("not supported for readByte 3");
          } else {
            res = buffer.getUint8(buffer.position) << 16;
            res |= buffer.getUint8(buffer.position + 1) << 8;
            res |= buffer.getUint8(buffer.position + 2);
          }
          break;
        case 4:
          if (sign) {
            res = buffer.getInt32(buffer.position);
          } else {
            res = buffer.getUint32(buffer.position);
          }
          break;
        case 8:
          if (sign) {
            throw new Error("not supported for readBody 8");
          } else {
            res = buffer.getUint32(buffer.position) << 32;
            res |= buffer.getUint32(buffer.position + 4);
          }
          break;
        default:
          res = "";
      }
      buffer.position += size;
      return res;
    }
  }]);
  return XGDataView2;
}();
var data_view_default = XGDataView;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/track.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass4 = function() {
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
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Track = function() {
  function Track2() {
    _classCallCheck4(this, Track2);
    this.id = -1;
    this.sequenceNumber = 0;
    this.samples = [];
    this.droppedSamples = [];
    this.length = 0;
  }
  _createClass4(Track2, [{
    key: "reset",
    value: function reset() {
      this.sequenceNumber = 0;
      this.samples = [];
      this.length = 0;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.reset();
      this.id = -1;
    }
  }]);
  return Track2;
}();
var track_default = Track;
var AudioTrack = function(_Track) {
  _inherits(AudioTrack2, _Track);
  function AudioTrack2() {
    _classCallCheck4(this, AudioTrack2);
    var _this = _possibleConstructorReturn(this, (AudioTrack2.__proto__ || Object.getPrototypeOf(AudioTrack2)).call(this));
    _this.TAG = "AudioTrack";
    _this.type = "audio";
    return _this;
  }
  return AudioTrack2;
}(Track);
var VideoTrack = function(_Track2) {
  _inherits(VideoTrack2, _Track2);
  function VideoTrack2() {
    _classCallCheck4(this, VideoTrack2);
    var _this2 = _possibleConstructorReturn(this, (VideoTrack2.__proto__ || Object.getPrototypeOf(VideoTrack2)).call(this));
    _this2.TAG = "VideoTrack";
    _this2.type = "video";
    _this2.dropped = 0;
    _this2.sequenceNumber = 0;
    return _this2;
  }
  _createClass4(VideoTrack2, [{
    key: "reset",
    value: function reset() {
      this.sequenceNumber = 0;
      this.samples = [];
      this.length = 0;
      this.dropped = 0;
    }
  }]);
  return VideoTrack2;
}(Track);
var Tracks = function() {
  function Tracks2() {
    _classCallCheck4(this, Tracks2);
    this.audioTrack = null;
    this.videoTrack = null;
  }
  _createClass4(Tracks2, [{
    key: "destroy",
    value: function destroy() {
      this.audioTrack = null;
      this.videoTrack = null;
    }
  }]);
  return Tracks2;
}();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/u8a-buffer.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass5 = function() {
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
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var XgBuffer = function() {
  function XgBuffer2(length) {
    _classCallCheck5(this, XgBuffer2);
    this.length = length || 0;
    this.historyLen = length || 0;
    this.array = [];
    this.offset = 0;
  }
  _createClass5(XgBuffer2, [{
    key: "push",
    value: function push(data) {
      this.array.push(data);
      this.length += data.byteLength;
      this.historyLen += data.byteLength;
    }
  }, {
    key: "shift",
    value: function shift(length) {
      if (this.array.length < 1) {
        return new Uint8Array(0);
      }
      if (length === void 0) {
        return this._shiftBuffer();
      }
      if (this.offset + length === this.array[0].length) {
        var _ret = this.array[0].slice(this.offset, this.offset + length);
        this.offset = 0;
        this.array.shift();
        this.length -= length;
        return _ret;
      }
      if (this.offset + length < this.array[0].length) {
        var _ret2 = this.array[0].slice(this.offset, this.offset + length);
        this.offset += length;
        this.length -= length;
        return _ret2;
      }
      var ret = new Uint8Array(length);
      var tmpoff = 0;
      while (this.array.length > 0 && length > 0) {
        if (this.offset + length < this.array[0].length) {
          var tmp = this.array[0].slice(this.offset, this.offset + length);
          ret.set(tmp, tmpoff);
          this.offset += length;
          this.length -= length;
          length = 0;
          break;
        } else {
          var templength = this.array[0].length - this.offset;
          ret.set(this.array[0].slice(this.offset, this.array[0].length), tmpoff);
          this.array.shift();
          this.offset = 0;
          tmpoff += templength;
          this.length -= templength;
          length -= templength;
        }
      }
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.array = [];
      this.length = 0;
      this.offset = 0;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.clear();
      this.historyLen = 0;
    }
  }, {
    key: "_shiftBuffer",
    value: function _shiftBuffer() {
      this.length -= this.array[0].length;
      this.offset = 0;
      return this.array.shift();
    }
  }, {
    key: "toInt",
    value: function toInt(start, length) {
      var retInt = 0;
      var i = this.offset + start;
      while (i < this.offset + length + start) {
        if (i < this.array[0].length) {
          retInt = retInt * 256 + this.array[0][i];
        } else if (this.array[1]) {
          retInt = retInt * 256 + this.array[1][i - this.array[0].length];
        }
        i++;
      }
      return retInt;
    }
  }]);
  return XgBuffer2;
}();
var u8a_buffer_default = XgBuffer;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/track-meta.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass6 = function() {
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
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var AudioTrackMeta = function() {
  function AudioTrackMeta2(meta) {
    _classCallCheck6(this, AudioTrackMeta2);
    var _default = {
      sampleRate: 48e3,
      channelCount: 2,
      codec: "mp4a.40.2",
      config: [41, 401, 136, 0],
      duration: 0,
      id: 2,
      refSampleDuration: 21,
      sampleRateIndex: 3,
      timescale: 1e3,
      type: "audio"
    };
    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }
  _createClass6(AudioTrackMeta2, [{
    key: "destroy",
    value: function destroy() {
      this.init = null;
    }
  }]);
  return AudioTrackMeta2;
}();
var VideoTrackMeta = function() {
  function VideoTrackMeta2(meta) {
    _classCallCheck6(this, VideoTrackMeta2);
    var _default = {
      avcc: null,
      sps: new Uint8Array(0),
      pps: new Uint8Array(0),
      chromaFormat: 420,
      codec: "avc1.640020",
      codecHeight: 720,
      codecWidth: 1280,
      duration: 0,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25e3,
        fps_den: 1e3
      },
      id: 1,
      level: "3.2",
      presentHeight: 720,
      presentWidth: 1280,
      profile: "High",
      refSampleDuration: 40,
      parRatio: {
        height: 1,
        width: 1
      },
      timescale: 1e3,
      type: "video"
    };
    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }
  _createClass6(VideoTrackMeta2, [{
    key: "destroy",
    value: function destroy() {
      this.init = null;
      this.sps = null;
      this.pps = null;
    }
  }]);
  return VideoTrackMeta2;
}();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/track-sample.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass7 = function() {
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
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var AudioSample = function() {
  function AudioSample2(info) {
    _classCallCheck7(this, AudioSample2);
    var _default = AudioSample2.getDefault();
    if (!info) {
      return _default;
    }
    return Object.assign({}, _default, info);
  }
  _createClass7(AudioSample2, null, [{
    key: "getDefault",
    value: function getDefault() {
      return {
        dts: -1,
        pts: -1,
        originDts: -1,
        data: new Uint8Array()
      };
    }
  }]);
  return AudioSample2;
}();
var VideoSample = function() {
  function VideoSample2(info) {
    _classCallCheck7(this, VideoSample2);
    var _default = VideoSample2.getDefault();
    if (!info) {
      return _default;
    }
    var sample = Object.assign({}, _default, info);
    return sample;
  }
  _createClass7(VideoSample2, null, [{
    key: "getDefault",
    value: function getDefault() {
      return {
        dts: -1,
        pts: void 0,
        isKeyframe: false,
        originDts: -1,
        data: new Uint8Array(),
        nals: []
      };
    }
  }]);
  return VideoSample2;
}();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/media-info.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass8 = function() {
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
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var isObjectFilled = function isObjectFilled2(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null) {
        return false;
      }
    }
  }
  return true;
};
var MediaInfo = function() {
  function MediaInfo2() {
    _classCallCheck8(this, MediaInfo2);
    this.mimeType = null;
    this.duration = null;
    this.hasVideo = false;
    this.video = {
      codec: null,
      width: null,
      height: null,
      profile: null,
      level: null,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25e3,
        fps_den: 1e3
      },
      chromaFormat: null,
      parRatio: {
        width: 1,
        height: 1
      }
    };
    this.hasAudio = false;
    this.audio = {
      codec: null,
      sampleRate: null,
      sampleRateIndex: null,
      channelCount: null
    };
  }
  _createClass8(MediaInfo2, [{
    key: "isComplete",
    value: function isComplete() {
      return MediaInfo2.isBaseInfoReady(this) && MediaInfo2.isVideoReady(this) && MediaInfo2.isAudioReady(this);
    }
  }], [{
    key: "isBaseInfoReady",
    value: function isBaseInfoReady(mediaInfo) {
      return isObjectFilled(mediaInfo);
    }
  }, {
    key: "isVideoReady",
    value: function isVideoReady(mediaInfo) {
      if (!mediaInfo.hasVideo) {
        return true;
      }
      return isObjectFilled(mediaInfo.video);
    }
  }, {
    key: "isAudioReady",
    value: function isAudioReady(mediaInfo) {
      if (!mediaInfo.hasAudio) {
        return true;
      }
      return isObjectFilled(mediaInfo.video);
    }
  }]);
  return MediaInfo2;
}();
var media_info_default = MediaInfo;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/flv-tag.js
init_define_process_env_UNI_STAT_TITLE_JSON();
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var FlvTag = function FlvTag2() {
  _classCallCheck9(this, FlvTag2);
  this.filtered = -1;
  this.tagType = -1;
  this.datasize = -1;
  this.dts = -1;
};
var flv_tag_default = FlvTag;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-models@2.5.2@xgplayer-helper-models/es/ts-frag.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass9 = function() {
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
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var TsFrag = function() {
  _createClass9(TsFrag2, null, [{
    key: "getDefault",
    value: function getDefault() {
      return {
        id: -1,
        url: "",
        start: -1,
        duration: -1,
        discontinue: false,
        cc: -1
      };
    }
  }]);
  function TsFrag2(props) {
    _classCallCheck10(this, TsFrag2);
    var merged = Object.assign({}, TsFrag2.getDefault(), props);
    this.id = merged.id;
    this.url = merged.url;
    this.start = merged.start;
    this.duration = merged.duration;
    this.discontinue = merged.discontinue;
    this.cc = merged.cc;
  }
  return TsFrag2;
}();
var ts_frag_default = TsFrag;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/context/index.js
var import_eventemitter3 = __toESM(require_eventemitter3_4_0());
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
var _createClass10 = function() {
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
function _possibleConstructorReturn2(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var DIRECT_EMIT_FLAG = "__TO__";
var Context = function() {
  function Context2(player, configs) {
    var allowedEvents = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    _classCallCheck11(this, Context2);
    this._emitter = new import_eventemitter3.default();
    if (!this._emitter.off) {
      this._emitter.off = this._emitter.removeListener;
    }
    this.mediaInfo = new media_info_default();
    this._instanceMap = {};
    this._clsMap = {};
    this._inited = false;
    this.allowedEvents = allowedEvents;
    this._configs = configs;
    this._player = player;
    this._hooks = {};
  }
  _createClass10(Context2, [{
    key: "getInstance",
    value: function getInstance(tag) {
      var instance = this._instanceMap[tag];
      if (instance) {
        return instance;
      } else {
        return null;
      }
    }
  }, {
    key: "initInstance",
    value: function initInstance(tag) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var a = args[0], b = args[1], c = args[2], d = args[3];
      if (this._clsMap[tag]) {
        var newInstance = new this._clsMap[tag](a, b, c, d);
        this._instanceMap[tag] = newInstance;
        if (newInstance.init) {
          newInstance.init();
        }
        return newInstance;
      } else {
        throw new Error(tag + "\u672A\u5728context\u4E2D\u6CE8\u518C");
      }
    }
  }, {
    key: "init",
    value: function init(config) {
      if (this._inited) {
        return;
      }
      for (var tag in this._clsMap) {
        if (this._clsMap.hasOwnProperty(tag) && !this._instanceMap[tag]) {
          this.initInstance(tag, config);
        }
      }
      this._inited = true;
    }
  }, {
    key: "registry",
    value: function registry(tag, cls) {
      var _this2 = this;
      var emitter = this._emitter;
      var checkMessageName = this._isMessageNameValid.bind(this);
      var self2 = this;
      var enhanced = function(_cls) {
        _inherits2(enhanced2, _cls);
        function enhanced2(a, b, c) {
          _classCallCheck11(this, enhanced2);
          var _this = _possibleConstructorReturn2(this, (enhanced2.__proto__ || Object.getPrototypeOf(enhanced2)).call(this, a, b, c));
          _this.listeners = {};
          _this.onceListeners = {};
          _this.TAG = tag;
          _this._context = self2;
          return _this;
        }
        _createClass10(enhanced2, [{
          key: "on",
          value: function on(messageName, callback) {
            checkMessageName(messageName);
            if (this.listeners[messageName]) {
              this.listeners[messageName].push(callback);
            } else {
              this.listeners[messageName] = [callback];
            }
            emitter.on("" + messageName + DIRECT_EMIT_FLAG + tag, callback);
            return emitter.on(messageName, callback);
          }
        }, {
          key: "before",
          value: function before(messageName, callback) {
            checkMessageName(messageName);
            if (self2._hooks[messageName]) {
              self2._hooks[messageName].push(callback);
            } else {
              self2._hooks[messageName] = [callback];
            }
          }
        }, {
          key: "once",
          value: function once(messageName, callback) {
            checkMessageName(messageName);
            if (this.onceListeners[messageName]) {
              this.onceListeners[messageName].push(callback);
            } else {
              this.onceListeners[messageName] = [callback];
            }
            emitter.once("" + messageName + DIRECT_EMIT_FLAG + tag, callback);
            return emitter.once(messageName, callback);
          }
        }, {
          key: "emit",
          value: function emit(messageName) {
            checkMessageName(messageName);
            var beforeList = self2._hooks ? self2._hooks[messageName] : null;
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            if (beforeList) {
              for (var i = 0, len = beforeList.length; i < len; i++) {
                var callback = beforeList[i];
                callback.apply(void 0, args);
              }
            }
            return emitter.emit.apply(emitter, [messageName].concat(args));
          }
        }, {
          key: "emitTo",
          value: function emitTo(tag2, messageName) {
            checkMessageName(messageName);
            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
              args[_key3 - 2] = arguments[_key3];
            }
            return emitter.emit.apply(emitter, ["" + messageName + DIRECT_EMIT_FLAG + tag2].concat(args));
          }
        }, {
          key: "off",
          value: function off(messageName, callback) {
            checkMessageName(messageName);
            return emitter.off(messageName, callback);
          }
        }, {
          key: "removeListeners",
          value: function removeListeners() {
            var hasOwn = Object.prototype.hasOwnProperty.bind(this.listeners);
            for (var messageName in this.listeners) {
              if (hasOwn(messageName)) {
                var callbacks = this.listeners[messageName] || [];
                for (var i = 0; i < callbacks.length; i++) {
                  var callback = callbacks[i];
                  emitter.off(messageName, callback);
                  emitter.off("" + messageName + DIRECT_EMIT_FLAG + tag, callback);
                }
              }
            }
            for (var _messageName in this.onceListeners) {
              if (hasOwn(_messageName)) {
                var _callbacks = this.onceListeners[_messageName] || [];
                for (var _i = 0; _i < _callbacks.length; _i++) {
                  var _callback = _callbacks[_i];
                  emitter.off(_messageName, _callback);
                  emitter.off("" + _messageName + DIRECT_EMIT_FLAG + tag, _callback);
                }
              }
            }
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.removeListeners();
            this.listeners = {};
            delete self2._instanceMap[tag];
            if (_get(enhanced2.prototype.__proto__ || Object.getPrototypeOf(enhanced2.prototype), "destroy", this)) {
              return _get(enhanced2.prototype.__proto__ || Object.getPrototypeOf(enhanced2.prototype), "destroy", this).call(this);
            }
            this._context = null;
          }
        }, {
          key: "_player",
          get: function get6() {
            if (!this._context) {
              return null;
            }
            return this._context._player;
          },
          set: function set2(v) {
            if (this._context) {
              this._context._player = v;
            }
          }
        }, {
          key: "_pluginConfig",
          get: function get6() {
            if (!this._context) {
              return null;
            }
            return this._context._configs;
          }
        }]);
        return enhanced2;
      }(cls);
      this._clsMap[tag] = enhanced;
      return function() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        return _this2.initInstance.apply(_this2, [tag].concat(args));
      };
    }
  }, {
    key: "seek",
    value: function seek(time) {
      this._emitter.emit(events_default.PLAYER_EVENTS.SEEK, time);
    }
  }, {
    key: "destroyInstances",
    value: function destroyInstances() {
      var _this3 = this;
      Object.keys(this._instanceMap).forEach(function(tag) {
        if (_this3._instanceMap[tag].destroy) {
          _this3._instanceMap[tag].destroy();
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyInstances();
      if (this._emitter) {
        this._emitter.removeAllListeners();
      }
      this._emitter = null;
      this.allowedEvents = [];
      this._clsMap = null;
      this._hooks = null;
      this._player = null;
      this._configs = null;
    }
  }, {
    key: "_isMessageNameValid",
    value: function _isMessageNameValid(messageName) {
      if (!this.allowedEvents.indexOf(messageName) < 0) {
        throw new Error("unregistered message name: " + messageName);
      }
    }
  }]);
  return Context2;
}();
var context_default = Context;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/crypto/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass11 = function() {
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
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var CRYPTO_EVENTS2 = events_default.CRYPTO_EVENTS;
var Crypto = function() {
  function Crypto2(config) {
    _classCallCheck12(this, Crypto2);
    this.inputBuffer = config.inputbuffer;
    this.outputBuffer = config.outputbuffer;
    this.key = config.key;
    this.iv = config.iv;
    this.method = config.method;
    this.crypto = window.crypto || window.msCrypto;
  }
  _createClass11(Crypto2, [{
    key: "init",
    value: function init() {
      this.on(CRYPTO_EVENTS2.START_DECRYPTO, this.decrypto.bind(this));
    }
  }, {
    key: "decrypto",
    value: function decrypto() {
      var _this = this;
      if (!this.aeskey) {
        var sbkey = this.crypto.subtle.importKey("raw", this.key.buffer, { name: "AES-CBC" }, false, ["encrypt", "decrypt"]);
        sbkey.then(function(key) {
          _this.aeskey = key;
          _this.decryptoData();
        });
      } else {
        this.decryptoData();
      }
    }
  }, {
    key: "decryptoData",
    value: function decryptoData() {
      var _this2 = this;
      var inputbuffer = this._context.getInstance(this.inputBuffer);
      var outputbuffer = this._context.getInstance(this.outputBuffer);
      var data = inputbuffer.shift();
      if (data) {
        this.crypto.subtle.decrypt({ name: "AES-CBC", iv: this.iv.buffer }, this.aeskey, data).then(function(res) {
          outputbuffer.push(new Uint8Array(res));
          _this2.emit(CRYPTO_EVENTS2.DECRYPTED);
          _this2.decryptoData(data);
        });
      }
    }
  }]);
  return Crypto2;
}();
var crypto_default = Crypto;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/eme/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass12 = function() {
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
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var KeySystems = {
  WIDEVINE: "com.widevine.alpha",
  PLAYREADY: "com.microsoft.playready"
};
var MAX_LICENSE_REQUEST_FAILURES = 3;
var EME = function() {
  function EME2(_ref) {
    var config = _ref.config, player = _ref.player;
    _classCallCheck13(this, EME2);
    this.licenseUrl = config.licenseUrl;
    this.mediaKeySystemConfigs = config.mediaKeySystemConfigs;
    this.keySystem = config.keySystem || KeySystems.WIDEVINE;
    this.video = player.video;
    this.mediaKeysList = [];
    this.requestLicenseFailureCount = 0;
  }
  _createClass12(EME2, [{
    key: "init",
    value: function init() {
      this.on("ManifestParsed", this.onManifestParsed.bind(this));
    }
  }, {
    key: "onManifestParsed",
    value: function onManifestParsed(data) {
      var _this = this;
      var mediaKeySystemConfigs = this.mediaKeySystemConfigs || this.createWidevineMediaKeySystemConfigurations(data.audioCodecs, data.videoCodecs);
      navigator.requestMediaKeySystemAccess(this.keySystem, mediaKeySystemConfigs).then(function(keySystemAccess) {
        return keySystemAccess.createMediaKeys();
      }).then(function(mediaKeys) {
        _this.video.setMediaKeys(mediaKeys);
      });
      this.video.addEventListener("encrypted", this.onMediaEncrypted.bind(this));
    }
  }, {
    key: "onKeySessionMessage",
    value: function onKeySessionMessage(keySession, message) {
      this.requestLicense(message, function(data) {
        keySession.update(data);
      });
    }
  }, {
    key: "requestLicense",
    value: function requestLicense(keyMessage, callback) {
      try {
        var url = this.licenseUrl;
        var xhr = this.createLicenseXhr(url, keyMessage, callback);
        xhr.send(keyMessage);
      } catch (e) {
      }
    }
  }, {
    key: "createLicenseXhr",
    value: function createLicenseXhr(url, keyMessage, callback) {
      var xhr = new window.XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onreadystatechange = this.onLicenseRequestReadyStageChange.bind(this, xhr, url, keyMessage, callback);
      return xhr;
    }
  }, {
    key: "onLicenseRequestReadyStageChange",
    value: function onLicenseRequestReadyStageChange(xhr, url, keyMessage, callback) {
      switch (xhr.readyState) {
        case 4:
          if (xhr.status === 200) {
            this.requestLicenseFailureCount = 0;
            callback(xhr.response);
          } else {
            this.requestLicenseFailureCount++;
            if (this.requestLicenseFailureCount > MAX_LICENSE_REQUEST_FAILURES) {
              return;
            }
            this.requestLicense(keyMessage, callback);
          }
          break;
      }
    }
  }, {
    key: "onMediaEncrypted",
    value: function onMediaEncrypted(e) {
      var _this2 = this;
      var keySession = this.video.mediaKeys.createSession();
      keySession.addEventListener("message", function(event) {
        _this2.onKeySessionMessage(keySession, event.message);
      }, false);
      keySession.generateRequest(e.initDataType, e.initData);
    }
  }, {
    key: "createWidevineMediaKeySystemConfigurations",
    value: function createWidevineMediaKeySystemConfigurations(audioCodecs, videoCodecs) {
      return [{
        videoCapabilities: videoCodecs.map(function(codec) {
          return {
            contentType: 'video/mp4; codecs="' + codec + '"'
          };
        })
      }];
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      var checkIsIncompatibleBrowser = function checkIsIncompatibleBrowser2() {
        var ua = navigator.userAgent;
        var isSafari = /^((?!chrome|android).)*safari/i.test(ua);
        var isMSBrowser = ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident/") > 0;
        var isFirefox = ua.indexOf("Firefox") > 0;
        var isEdge = ua.indexOf("Edge") > 0;
        return isSafari || isMSBrowser || isFirefox || isEdge;
      };
      return !!navigator.requestMediaKeySystemAccess && !checkIsIncompatibleBrowser();
    }
  }]);
  return EME2;
}();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/mse/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass13 = function() {
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
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var MSE_EVENTS2 = events_default.MSE_EVENTS;
var MSE = function() {
  function MSE2(configs, context) {
    _classCallCheck14(this, MSE2);
    if (context) {
      this._context = context;
      this.emit = context._emitter.emit.bind(context._emitter);
    }
    this.TAG = "MSE";
    this.configs = Object.assign({}, configs);
    this.container = this.configs.container;
    this.format = this.configs.format;
    this.mediaSource = null;
    this.sourceBuffers = {};
    this.preloadTime = this.configs.preloadTime || 1;
    this.onSourceOpen = this.onSourceOpen.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdateEnd = this.onUpdateEnd.bind(this);
    this.onWaiting = this.onWaiting.bind(this);
    this.opened = false;
  }
  _createClass13(MSE2, [{
    key: "init",
    value: function init() {
      this.mediaSource = new self.MediaSource();
      this.mediaSource.addEventListener("sourceopen", this.onSourceOpen);
      this._url = null;
      this.container.addEventListener("timeupdate", this.onTimeUpdate);
      this.container.addEventListener("waiting", this.onWaiting);
    }
  }, {
    key: "resetContext",
    value: function resetContext(newCtx, keepBuffer) {
      this._context = newCtx;
      this.emit = newCtx._emitter.emit.bind(newCtx._emitter);
      if (!keepBuffer) {
        for (var i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
          var buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
          if (!buffer.updating) {
            MSE2.clearBuffer(buffer);
          }
        }
      }
    }
  }, {
    key: "onTimeUpdate",
    value: function onTimeUpdate() {
      this.emit("TIME_UPDATE", this.container);
    }
  }, {
    key: "onWaiting",
    value: function onWaiting() {
      this.emit("WAITING", this.container);
    }
  }, {
    key: "onSourceOpen",
    value: function onSourceOpen() {
      this.opened = true;
      this.addSourceBuffers();
    }
  }, {
    key: "onUpdateEnd",
    value: function onUpdateEnd() {
      this.emit(MSE_EVENTS2.SOURCE_UPDATE_END);
      this.doAppend();
    }
  }, {
    key: "addSourceBuffers",
    value: function addSourceBuffers() {
      if (!this.mediaSource || this.mediaSource.readyState !== "open" || !this.opened) {
        return;
      }
      var sources = this._context.getInstance("PRE_SOURCE_BUFFER");
      var tracks = this._context.getInstance("TRACKS");
      var track = void 0;
      if (!sources || !tracks) {
        return;
      }
      sources = sources.sources;
      var add = false;
      for (var i = 0, k = Object.keys(sources).length; i < k; i++) {
        var type = Object.keys(sources)[i];
        add = false;
        if (type === "audio") {
          track = tracks.audioTrack;
        } else if (type === "video") {
          track = tracks.videoTrack;
        }
        if (track && sources[type].init !== null && sources[type].data.length) {
          add = true;
        }
      }
      if (add) {
        if (Object.keys(this.sourceBuffers).length > 1) {
          return;
        }
        for (var _i = 0, _k = Object.keys(sources).length; _i < _k; _i++) {
          var _type = Object.keys(sources)[_i];
          if (this.sourceBuffers[_type]) {
            continue;
          }
          var source = sources[_type];
          var mime = _type === "video" ? "video/mp4;codecs=" + source.mimetype : "audio/mp4;codecs=" + source.mimetype;
          try {
            var sourceBuffer = this.mediaSource.addSourceBuffer(mime);
            this.sourceBuffers[_type] = sourceBuffer;
            sourceBuffer.addEventListener("updateend", this.onUpdateEnd);
          } catch (e) {
            if (e.code === 22 && Object.keys(this.sourceBuffers).length > 0) {
              return this.emit(MSE_EVENTS2.MSE_WRONG_TRACK_ADD, _type);
            }
            this.emit(MSE_EVENTS2.MSE_ERROR, this.TAG, new Error(e.message));
          }
        }
        if (Object.keys(this.sourceBuffers).length === this.sourceBufferLen) {
          this.doAppend();
        }
      }
    }
  }, {
    key: "doAppend",
    value: function doAppend() {
      if (!this.mediaSource || this.mediaSource.readyState === "closed")
        return;
      this._doCleanupSourceBuffer();
      var sources = this._context.getInstance("PRE_SOURCE_BUFFER");
      if (!sources)
        return;
      if (Object.keys(this.sourceBuffers).length < this.sourceBufferLen) {
        return;
      }
      for (var i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        var type = Object.keys(this.sourceBuffers)[i];
        var sourceBuffer = this.sourceBuffers[type];
        if (sourceBuffer.updating)
          continue;
        var source = sources.sources[type];
        if (this["no" + type]) {
          source.data = [];
          source.init.buffer = null;
          continue;
        }
        if (source && !source.inited) {
          try {
            sourceBuffer.appendBuffer(source.init.buffer.buffer);
            source.inited = true;
          } catch (e) {
          }
        } else if (source) {
          var data = source.data.shift();
          if (data) {
            try {
              sourceBuffer.appendBuffer(data.buffer.buffer);
            } catch (e) {
              source.data.unshift(data);
            }
          }
        }
      }
    }
  }, {
    key: "endOfStream",
    value: function endOfStream() {
      try {
        var readyState = this.mediaSource.readyState;
        if (readyState === "open") {
          this.mediaSource.endOfStream();
        }
      } catch (e) {
      }
    }
  }, {
    key: "remove",
    value: function remove(end) {
      var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      try {
        for (var i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
          var buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
          if (!buffer.updating) {
            if (end > start) {
              buffer.remove(start, end);
            }
          }
        }
      } catch (e) {
      }
    }
  }, {
    key: "_doCleanupSourceBuffer",
    value: function _doCleanupSourceBuffer() {
      var currentTime = this.container.currentTime;
      var autoCleanupMinBackwardDuration = 60 * 3;
      var _pendingRemoveRanges = {
        video: [],
        audio: []
      };
      for (var i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        var type = Object.keys(this.sourceBuffers)[i];
        var sourceBuffer = this.sourceBuffers[type];
        var buffered = sourceBuffer.buffered;
        var doRemove = false;
        for (var j = 0; j < buffered.length; j++) {
          var start = buffered.start(j);
          var end = buffered.end(j);
          if (start <= currentTime && currentTime < end + 3) {
            if (currentTime - start >= autoCleanupMinBackwardDuration) {
              doRemove = true;
              var removeEnd = currentTime - autoCleanupMinBackwardDuration;
              _pendingRemoveRanges[type].push({ start, end: removeEnd });
            }
          } else if (end < currentTime && currentTime - start >= autoCleanupMinBackwardDuration) {
            doRemove = true;
            _pendingRemoveRanges[type].push({ start, end });
          }
        }
        if (doRemove && !sourceBuffer.updating) {
          this._doRemoveRanges(_pendingRemoveRanges);
        }
      }
    }
  }, {
    key: "_doRemoveRanges",
    value: function _doRemoveRanges(_pendingRemoveRanges) {
      for (var type in _pendingRemoveRanges) {
        if (!this.sourceBuffers[type] || this.sourceBuffers[type].updating) {
          continue;
        }
        var sb = this.sourceBuffers[type];
        var ranges = _pendingRemoveRanges[type];
        while (ranges.length && !sb.updating) {
          var range = ranges.shift();
          try {
            if (range && range.end > range.start) {
              sb.remove(range.start, range.end);
            }
          } catch (e) {
          }
        }
      }
    }
  }, {
    key: "cleanBuffers",
    value: function cleanBuffers() {
      var _this = this;
      var taskList = [];
      var _loop = function _loop2(i2) {
        var buffer = _this.sourceBuffers[Object.keys(_this.sourceBuffers)[i2]];
        var task = void 0;
        if (buffer.updating) {
          task = new Promise(function(resolve) {
            var doCleanBuffer = function doCleanBuffer2() {
              var retryTime = 3;
              var clean = function clean2() {
                if (!buffer.updating) {
                  MSE2.clearBuffer(buffer);
                  buffer.addEventListener("updateend", function() {
                    resolve();
                  });
                } else if (retryTime > 0) {
                  setTimeout(clean2, 200);
                  retryTime--;
                } else {
                  resolve();
                }
              };
              setTimeout(clean, 200);
              buffer.removeEventListener("updateend", doCleanBuffer2);
            };
            buffer.addEventListener("updateend", doCleanBuffer);
          });
        } else {
          task = new Promise(function(resolve) {
            MSE2.clearBuffer(buffer);
            buffer.addEventListener("updateend", function() {
              resolve();
            });
          });
        }
        taskList.push(task);
      };
      for (var i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        _loop(i);
      }
      return Promise.all(taskList);
    }
  }, {
    key: "removeBuffers",
    value: function removeBuffers() {
      var _this2 = this;
      var taskList = [];
      var _loop2 = function _loop22(i2) {
        var buffer = _this2.sourceBuffers[Object.keys(_this2.sourceBuffers)[i2]];
        buffer.removeEventListener("updateend", _this2.onUpdateEnd);
        var task = void 0;
        if (buffer.updating) {
          task = new Promise(function(resolve) {
            var doCleanBuffer = function doCleanBuffer2() {
              var retryTime = 3;
              var clean = function clean2() {
                if (!buffer.updating) {
                  MSE2.clearBuffer(buffer);
                  buffer.addEventListener("updateend", function() {
                    resolve();
                  });
                } else if (retryTime > 0) {
                  setTimeout(clean2, 200);
                  retryTime--;
                } else {
                  resolve();
                }
              };
              setTimeout(clean, 200);
              buffer.removeEventListener("updateend", doCleanBuffer2);
            };
            buffer.addEventListener("updateend", doCleanBuffer);
          });
        } else {
          task = new Promise(function(resolve) {
            MSE2.clearBuffer(buffer);
            buffer.addEventListener("updateend", function() {
              resolve();
            });
          });
        }
        taskList.push(task);
      };
      for (var i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        _loop2(i);
      }
      return Promise.all(taskList);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;
      if (!this.container)
        return Promise.resolve();
      this.container.removeEventListener("timeupdate", this.onTimeUpdate);
      this.container.removeEventListener("waiting", this.onWaiting);
      this.mediaSource.removeEventListener("sourceopen", this.onSourceOpen);
      return this.removeBuffers().then(function() {
        var sources = Object.keys(_this3.sourceBuffers);
        for (var i = 0; i < sources.length; i++) {
          var _buffer = _this3.sourceBuffers[sources[i]];
          delete _this3.sourceBuffers[sources[i]];
          if (_this3.mediaSource.readyState === "open") {
            _this3.mediaSource.removeSourceBuffer(_buffer);
          }
        }
        _this3.endOfStream();
        try {
          window.URL.revokeObjectURL(_this3.url);
        } catch (e) {
        }
        _this3.url = null;
        _this3.configs = {};
        _this3.container = null;
        _this3.mediaSource = null;
        _this3.sourceBuffers = {};
        _this3.preloadTime = 1;
        _this3.onSourceOpen = null;
        _this3.onTimeUpdate = null;
        _this3.onUpdateEnd = null;
        _this3.onWaiting = null;
        _this3.noaudio = void 0;
        _this3.novideo = void 0;
      });
    }
  }, {
    key: "sourceBufferLen",
    get: function get6() {
      if (!this._context.mediaInfo) {
        if (this.noaudio || this.novideo)
          return 1;
        return 2;
      }
      return (!!this._context.mediaInfo.hasVideo && !this.novideo) + (!!this._context.mediaInfo.hasAudio && !this.noaudio);
    }
  }, {
    key: "url",
    set: function set2(val) {
      this._url = val;
    },
    get: function get6() {
      if (!this._url) {
        try {
          this._url = window.URL.createObjectURL(this.mediaSource);
        } catch (e) {
        }
      }
      return this._url;
    }
  }], [{
    key: "clearBuffer",
    value: function clearBuffer(buffer) {
      try {
        var buffered = buffer.buffered;
        var bEnd = 0.1;
        for (var i = 0, len = buffered.length; i < len; i++) {
          bEnd = buffered.end(i);
        }
        buffer.remove(0, bEnd);
      } catch (e) {
      }
    }
  }]);
  return MSE2;
}();
var mse_default = MSE;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/sniffer/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/sniffer/page-visibility.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass14 = function() {
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
function _classCallCheck15(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var BROWSER_EVENTS2 = events_default.BROWSER_EVENTS;
var hidden = void 0;
var visibilityChange = void 0;
function checkEnv() {
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }
}
var PageVisibility = function() {
  function PageVisibility2() {
    _classCallCheck15(this, PageVisibility2);
    this.callbacks = {
      onShow: [],
      onHidden: []
    };
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.init();
  }
  _createClass14(PageVisibility2, [{
    key: "init",
    value: function init() {
      !visibilityChange && checkEnv();
      document.addEventListener(visibilityChange, this.handleVisibilityChange, false);
    }
  }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange() {
      this.emit(BROWSER_EVENTS2.VISIBILITY_CHANGE, document[hidden]);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      document.removeEventListener(visibilityChange, this.handleVisibilityChange);
    }
  }]);
  return PageVisibility2;
}();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/sniffer/index.js
var le = function() {
  var buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true);
  return new Int16Array(buf)[0] === 256;
}();
var sniffer = {
  get device() {
    var r = sniffer.os;
    return r.isPc ? "pc" : r.isTablet ? "tablet" : "mobile";
  },
  get browser() {
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
    }))[0];
  },
  get os() {
    var ua = navigator.userAgent;
    var isWindowsPhone = /(?:Windows Phone)/.test(ua);
    var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    var isAndroid = /(?:Android)/.test(ua);
    var isFireFox = /(?:Firefox)/.test(ua);
    var isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
    var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    var isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet,
      isPhone,
      isAndroid,
      isPc,
      isSymbian,
      isWindowsPhone,
      isFireFox
    };
  },
  get isLe() {
    return le;
  }
};
var sniffer_default = sniffer;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/loader-fetch/fetch-loader.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/loader-fetch/speed.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass15 = function() {
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
function _classCallCheck16(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Speed = function() {
  function Speed2() {
    _classCallCheck16(this, Speed2);
    this._firstCheckpoint = 0;
    this._lastCheckpoint = 0;
    this._intervalBytes = 0;
    this._lastSamplingBytes = 0;
    this._now = Date.now;
  }
  _createClass15(Speed2, [{
    key: "reset",
    value: function reset() {
      this._firstCheckpoint = this._lastCheckpoint = 0;
      this._intervalBytes = 0;
      this._lastSamplingBytes = 0;
    }
  }, {
    key: "addBytes",
    value: function addBytes(bytes) {
      var duration = this._now() - this._lastCheckpoint;
      if (this._firstCheckpoint === 0) {
        this._firstCheckpoint = this._now();
        this._lastCheckpoint = this._firstCheckpoint;
        this._intervalBytes += bytes;
      } else if (duration < 5e3) {
        this._intervalBytes += bytes;
      } else {
        this._lastSamplingBytes = this._intervalBytes / (duration / 1e3);
        this._intervalBytes = bytes;
        this._lastCheckpoint = this._now();
      }
    }
  }, {
    key: "currentKBps",
    get: function get6() {
      this.addBytes(0);
      var durationSeconds = (this._now() - this._lastCheckpoint) / 1e3;
      if (durationSeconds === 0)
        durationSeconds = 1;
      return this._intervalBytes / durationSeconds / 1024;
    }
  }, {
    key: "lastSamplingKBps",
    get: function get6() {
      this.addBytes(0);
      if (this._lastSamplingBytes !== 0) {
        return this._lastSamplingBytes / 1024;
      } else {
        if (this._now() - this._lastCheckpoint >= 500) {
          return this.currentKBps;
        } else {
          return 0;
        }
      }
    }
  }]);
  return Speed2;
}();
var speed_default = Speed;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/loader-fetch/fetch-loader.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _createClass16 = function() {
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
function _classCallCheck17(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var LOADER_EVENTS2 = events_default.LOADER_EVENTS;
var READ_STREAM = 0;
var READ_TEXT = 1;
var READ_JSON = 2;
var READ_BUFFER = 3;
var FetchLoader = function() {
  function FetchLoader2(configs) {
    _classCallCheck17(this, FetchLoader2);
    this.configs = Object.assign({}, configs);
    this.url = null;
    this.status = 0;
    this.error = null;
    this._reader = null;
    this._canceled = false;
    this._destroyed = false;
    this.readtype = this.configs.readtype;
    this.buffer = this.configs.buffer || "LOADER_BUFFER";
    this._loaderTaskNo = 0;
    this._ttfb = 0;
    this._speed = new speed_default();
    if (window.AbortController) {
      this.abortControllerEnabled = true;
    }
  }
  _createClass16(FetchLoader2, [{
    key: "init",
    value: function init() {
      this.on(LOADER_EVENTS2.LADER_START, this.load.bind(this));
    }
  }, {
    key: "fetch",
    value: function(_fetch) {
      function fetch2(_x, _x2, _x3) {
        return _fetch.apply(this, arguments);
      }
      fetch2.toString = function() {
        return _fetch.toString();
      };
      return fetch2;
    }(function(url, params, timeout) {
      var _this2 = this;
      var timer = null;
      if (this.abortControllerEnabled) {
        this.abortController = new window.AbortController();
      }
      Object.assign(params, { signal: this.abortController ? this.abortController.signal : void 0 });
      var start = new Date().getTime();
      return Promise.race([fetch(url, params), new Promise(function(resolve, reject) {
        timer = setTimeout(function() {
          reject({
            code: 999,
            message: "fetch timeout"
          });
          if (_this2.abortController) {
            _this2.abortController.abort();
          }
        }, timeout || 1e4);
      })]).then(function(response) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        var end = new Date().getTime();
        _this2.emit(LOADER_EVENTS2.LOADER_TTFB, {
          start,
          end,
          elapsed: end - start
        });
        return response;
      });
    })
  }, {
    key: "internalLoad",
    value: function internalLoad(url, params, retryTimes, totalRetry) {
      var _this3 = this;
      var delayTime = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
      var loadTimeout = arguments[5];
      if (this._destroyed)
        return;
      this.loading = true;
      return this.fetch(this.url, params, loadTimeout).then(function(response) {
        !_this3._destroyed && _this3.emit(LOADER_EVENTS2.LOADER_RESPONSE_HEADERS, _this3.TAG, response.headers);
        if (response.ok) {
          _this3.status = response.status;
          Promise.resolve().then(function() {
            _this3._onFetchResponse(response);
          });
          return Promise.resolve(response);
        }
        if (retryTimes-- > 0) {
          _this3._retryTimer = setTimeout(function() {
            _this3.emit(LOADER_EVENTS2.LOADER_RETRY, _this3.TAG, {
              response,
              reason: "response not ok",
              retryTime: totalRetry - retryTimes
            });
            return _this3.internalLoad(url, params, retryTimes, totalRetry, delayTime, loadTimeout);
          }, delayTime);
        } else {
          _this3.loading = false;
          _this3.emit(LOADER_EVENTS2.LOADER_ERROR, _this3.TAG, {
            code: response.status || 21,
            message: response.status + " (" + response.statusText + ")"
          });
        }
      }).catch(function(error) {
        if (_this3._destroyed) {
          _this3.loading = false;
          return;
        }
        if (retryTimes-- > 0) {
          _this3._retryTimer = setTimeout(function() {
            _this3.emit(LOADER_EVENTS2.LOADER_RETRY, _this3.TAG, {
              error,
              reason: "fetch error",
              retryTime: totalRetry - retryTimes
            });
            return _this3.internalLoad(url, params, retryTimes, totalRetry, delayTime, loadTimeout);
          }, delayTime);
        } else {
          _this3.loading = false;
          if (error && error.name === "AbortError") {
            return;
          }
          _this3.emit(LOADER_EVENTS2.LOADER_ERROR, _this3.TAG, Object.assign({ code: 21 }, error));
        }
      });
    }
  }, {
    key: "load",
    value: function load(url) {
      var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, retryCount = _ref.retryCount, retryDelay = _ref.retryDelay, loadTimeout = _ref.loadTimeout;
      retryCount = retryCount === void 0 ? 3 : retryCount;
      this.url = url;
      this._canceled = false;
      var params = this.getParams(opts);
      return this.internalLoad(url, params, retryCount, retryCount, retryDelay, loadTimeout);
    }
  }, {
    key: "_onFetchResponse",
    value: function _onFetchResponse(response) {
      var _this4 = this;
      var _this = this;
      var buffer = this._context.getInstance(this.buffer);
      this._loaderTaskNo++;
      var taskno = this._loaderTaskNo;
      if (response.ok === true) {
        switch (this.readtype) {
          case READ_JSON:
            response.json().then(function(data) {
              _this.loading = false;
              if (!_this._canceled && !_this._destroyed) {
                if (buffer) {
                  buffer.push(data);
                  _this.emit(LOADER_EVENTS2.LOADER_COMPLETE, buffer);
                } else {
                  _this.emit(LOADER_EVENTS2.LOADER_COMPLETE, data);
                }
              }
            });
            break;
          case READ_TEXT:
            response.text().then(function(data) {
              _this.loading = false;
              if (!_this._canceled && !_this._destroyed) {
                if (buffer) {
                  buffer.push(data);
                  _this.emit(LOADER_EVENTS2.LOADER_COMPLETE, buffer);
                } else {
                  _this.emit(LOADER_EVENTS2.LOADER_COMPLETE, data);
                }
              }
            });
            break;
          case READ_BUFFER:
            response.arrayBuffer().then(function(data) {
              _this.loading = false;
              if (!_this._canceled && !_this._destroyed) {
                if (buffer) {
                  buffer.push(new Uint8Array(data));
                  _this4._speed.addBytes(data.byteLength);
                  _this.emit(LOADER_EVENTS2.LOADER_COMPLETE, buffer);
                } else {
                  _this.emit(LOADER_EVENTS2.LOADER_COMPLETE, data);
                }
              }
            }).catch(function() {
            });
            break;
          case READ_STREAM:
          default:
            return this._onReader(response.body.getReader(), taskno);
        }
      }
    }
  }, {
    key: "_onReader",
    value: function _onReader(reader, taskno) {
      var _this5 = this;
      var buffer = this._context.getInstance(this.buffer);
      if (!buffer && this._reader || this._destroyed) {
        try {
          this._reader.cancel();
        } catch (e) {
        }
      }
      this._reader = reader;
      if (this.loading === false) {
        return;
      }
      this._noDataTimer = setTimeout(function() {
        if (_this5.loading === false)
          return;
        _this5.emit(LOADER_EVENTS2.LOADER_COMPLETE);
      }, 3e3);
      this._reader && this._reader.read().then(function(val) {
        clearTimeout(_this5._noDataTimer);
        if (_this5._canceled || _this5._destroyed) {
          if (_this5._reader) {
            try {
              _this5._reader.cancel();
            } catch (e) {
            }
          }
          return;
        }
        if (val.done) {
          _this5.loading = false;
          _this5.status = 0;
          Promise.resolve().then(function() {
            _this5.emit(LOADER_EVENTS2.LOADER_COMPLETE, buffer);
          });
          return;
        }
        buffer.push(val.value);
        _this5._speed.addBytes(val.value.byteLength);
        Promise.resolve().then(function() {
          _this5.emit(LOADER_EVENTS2.LOADER_DATALOADED, buffer);
        });
        return _this5._onReader(reader, taskno);
      }).catch(function(error) {
        clearTimeout(_this5._noDataTimer);
        _this5.loading = false;
        if (error && error.name === "AbortError")
          return;
        _this5.emit(LOADER_EVENTS2.LOADER_ERROR, _this5.TAG, error);
      });
    }
  }, {
    key: "getParams",
    value: function getParams(opts) {
      var options = Object.assign({}, opts);
      var headers = new Headers();
      var params = {
        method: "GET",
        headers,
        mode: "cors",
        cache: "default"
      };
      if (_typeof(this.configs.headers) === "object") {
        var configHeaders = this.configs.headers;
        for (var key in configHeaders) {
          if (configHeaders.hasOwnProperty(key)) {
            headers.append(key, configHeaders[key]);
          }
        }
      }
      if (_typeof(options.headers) === "object") {
        var optHeaders = options.headers;
        for (var _key in optHeaders) {
          if (optHeaders.hasOwnProperty(_key)) {
            headers.append(_key, optHeaders[_key]);
          }
        }
      }
      if (options.cors === false) {
        params.mode = "same-origin";
      }
      if (options.withCredentials) {
        params.credentials = "include";
      }
      return params;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._reader) {
        try {
          this._reader.cancel();
        } catch (e) {
        }
        this._reader = null;
        this.loading = false;
      }
      clearTimeout(this._noDataTimer);
      this._canceled = true;
      if (this.abortController) {
        this.abortController.abort();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyed = true;
      clearTimeout(this._retryTimer);
      clearTimeout(this._noDataTimer);
      this.cancel();
      this._speed.reset();
    }
  }, {
    key: "currentSpeed",
    get: function get6() {
      return this._speed.lastSamplingKBps;
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      return !!window.fetch;
    }
  }, {
    key: "type",
    get: function get6() {
      return "loader";
    }
  }]);
  return FetchLoader2;
}();
var fetch_loader_default = FetchLoader;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/loader-fetch/xhr-loader.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _createClass17 = function() {
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
function _classCallCheck18(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var LOADER_EVENTS3 = events_default.LOADER_EVENTS;
var READ_TEXT2 = 1;
var READ_JSON2 = 2;
var READ_BUFFER2 = 3;
var DEFAULT_TIMEOUT_IMMS = 2e3;
var XhrLoader = function() {
  function XhrLoader2(configs) {
    _classCallCheck18(this, XhrLoader2);
    this._xhr = null;
    this.configs = Object.assign({}, configs);
    this.loading = false;
    this._readtype = this.configs.readtype;
    this._bufferType = this.configs.buffer || "LOADER_BUFFER";
    this._requestInfo = null;
    this._onReadyStateChange = this._onReadyStateChange.bind(this);
    this._onError = this._onError.bind(this);
    this._onAbort = this._onAbort.bind(this);
    this._onTimeout = this._onTimeout.bind(this);
  }
  _createClass17(XhrLoader2, [{
    key: "init",
    value: function init() {
      this.on(LOADER_EVENTS3.LADER_START, this.load.bind(this));
    }
  }, {
    key: "_createXhr",
    value: function _createXhr() {
      var xhr = void 0;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      return xhr;
    }
  }, {
    key: "load",
    value: function load(url) {
      var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var retryTimes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      var delayTime = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      var options = Object.assign({}, opts);
      this._requestInfo = {
        url,
        options,
        retryTimes,
        totalRetry: retryTimes,
        delayTime
      };
      this._xhr = this._createXhr();
      this.loading = true;
      try {
        this._bindEvents();
        this._loadInternal(url, options);
      } catch (e) {
        this._whenError({
          code: this._xhr.status,
          message: e && e.message
        });
      }
    }
  }, {
    key: "_loadInternal",
    value: function _loadInternal(url, options) {
      var xhr = this._xhr;
      xhr.open("GET", url, true);
      this._setTimeout(xhr, options);
      this._setCredentails(xhr, options);
      this._setHeaders(xhr, options);
      this._setResponseType(xhr);
      xhr.send();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var xhr = this._xhr;
      xhr.addEventListener("readystatechange", this._onReadyStateChange);
      xhr.addEventListener("timeout", this._onTimeout);
      xhr.addEventListener("error", this._onError);
      xhr.addEventListener("abort", this._onAbort);
    }
  }, {
    key: "_setTimeout",
    value: function _setTimeout(xhr, options) {
      xhr.timeout = options.timeout || DEFAULT_TIMEOUT_IMMS;
    }
  }, {
    key: "_setCredentails",
    value: function _setCredentails(xhr, options) {
      if (options.withCredentials) {
        xhr.withCredentials = true;
      }
    }
  }, {
    key: "_setHeaders",
    value: function _setHeaders(xhr, options) {
      if (_typeof2(options.headers) === "object") {
        var optHeaders = options.headers;
        for (var key in optHeaders) {
          if (optHeaders.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, optHeaders[key]);
          }
        }
      }
    }
  }, {
    key: "_setResponseType",
    value: function _setResponseType(xhr) {
      switch (this._readtype) {
        case READ_BUFFER2:
          xhr.responseType = "arraybuffer";
          break;
        case READ_JSON2:
          xhr.responseType = "json";
          break;
        case READ_TEXT2:
        default:
          xhr.responseType = "";
      }
    }
  }, {
    key: "_onReadyStateChange",
    value: function _onReadyStateChange() {
      var _xhr = this._xhr, readyState = _xhr.readyState, status = _xhr.status;
      if (readyState === 4) {
        if (status >= 200 && status < 300) {
          this._onComplete(this._xhr);
          return;
        }
        if (status === 0)
          return;
        this._onError();
      }
    }
  }, {
    key: "_onComplete",
    value: function _onComplete(xhr) {
      var data = void 0;
      switch (this._readtype) {
        case READ_JSON2:
          try {
            data = JSON.parse(xhr.responseText);
          } catch (e) {
          }
          break;
        case READ_BUFFER2:
          var buffer = xhr.response;
          data = new Uint8Array(buffer);
          break;
        case READ_TEXT2:
        default:
          data = xhr.responseText;
      }
      if (this.bufferIns) {
        this.bufferIns.push(data);
        this.emit(LOADER_EVENTS3.LOADER_COMPLETE, this.bufferIns);
      } else {
        this.emit(LOADER_EVENTS3.LOADER_COMPLETE, data);
      }
      this.loading = false;
    }
  }, {
    key: "_onError",
    value: function _onError() {
      var xhr = this._xhr;
      var err = {
        code: xhr.status || 21,
        message: xhr.statusText
      };
      this._whenError(err);
    }
  }, {
    key: "_onTimeout",
    value: function _onTimeout() {
      console.warn("timeout");
      this._whenError({
        code: 999,
        message: "fetch timeout"
      });
    }
  }, {
    key: "_onAbort",
    value: function _onAbort() {
      console.warn("abort");
    }
  }, {
    key: "_whenError",
    value: function _whenError(info) {
      var _this = this;
      var _requestInfo = this._requestInfo, url = _requestInfo.url, options = _requestInfo.options, totalRetry = _requestInfo.totalRetry, retryTimes = _requestInfo.retryTimes, delayTime = _requestInfo.delayTime;
      if (!retryTimes) {
        this.loading = false;
        this.emit(LOADER_EVENTS3.LOADER_ERROR, this.TAG, info);
        return;
      }
      retryTimes--;
      setTimeout(function() {
        _this.emit(LOADER_EVENTS3.LOADER_RETRY, _this.TAG, {
          response: info,
          reason: "response not ok",
          retryTime: totalRetry - retryTimes
        });
        _this.load(url, options, retryTimes, delayTime);
      }, delayTime);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._xhr.readyState !== 4) {
        this._xhr.abort();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cancel();
      if (this._xhr) {
        this._xhr.removeEventListener("readystatechange", this._onReadyStateChange);
        this._xhr.removeEventListener("timeout", this._onTimeout);
        this._xhr.removeEventListener("error", this._onError);
        this._xhr.removeEventListener("abort", this._onAbort);
        this._xhr = null;
      }
    }
  }, {
    key: "bufferIns",
    get: function get6() {
      return this._context.getInstance(this._bufferType);
    }
  }], [{
    key: "type",
    get: function get6() {
      return "loader";
    }
  }]);
  return XhrLoader2;
}();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-utils@2.5.2@xgplayer-helper-utils/es/common/dev-logger.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass18 = function() {
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
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
function _classCallCheck19(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var DevLogger = function() {
  function DevLogger2() {
    var _this = this;
    _classCallCheck19(this, DevLogger2);
    try {
      var matched = /xgd=(\d)/.exec(document.cookie);
      this._status = !!matched;
      this._level = matched && matched[1];
    } catch (e) {
      this._status = false;
    }
    ["group", "groupEnd", "log", "warn", "error"].forEach(function(funName) {
      _this[funName] = function(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
        var _console;
        if (!_this._status)
          return;
        var tagName = arg1;
        var args = [arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10].filter(function(x) {
          return x !== void 0;
        });
        (_console = console)[funName].apply(_console, ["[" + tagName + "]:"].concat(_toConsumableArray(args)));
      };
    });
  }
  _createClass18(DevLogger2, [{
    key: "enable",
    get: function get6() {
      return this._status;
    }
  }, {
    key: "long",
    get: function get6() {
      return this._level === "2";
    }
  }]);
  return DevLogger2;
}();
var dev_logger_default = new DevLogger();

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mse/hls-live.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_xgplayer = __toESM(require_dist());
var _createClass19 = function() {
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
function _classCallCheck20(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var LOADER_EVENTS4 = events_default.LOADER_EVENTS;
var REMUX_EVENTS2 = events_default.REMUX_EVENTS;
var DEMUX_EVENTS2 = events_default.DEMUX_EVENTS;
var HLS_EVENTS2 = events_default.HLS_EVENTS;
var CRYTO_EVENTS = events_default.CRYTO_EVENTS;
var MSE_EVENTS3 = events_default.MSE_EVENTS;
var HLS_ERROR = "HLS_ERROR";
var MASTER_PLAYLIST_REGEX = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g;
var HlsLiveController = function() {
  function HlsLiveController3(configs) {
    _classCallCheck20(this, HlsLiveController3);
    this.configs = Object.assign({}, configs);
    this.url = "";
    this.sequence = 0;
    this._playlist = null;
    this.retrytimes = this.configs.retrytimes || 3;
    this.preloadTime = this.configs.preloadTime;
    this.container = this.configs.container;
    this._m3u8lasttime = 0;
    this._timmer = setInterval(this._checkStatus.bind(this), 300);
    this._lastCheck = 0;
    this.m3u8Text = null;
  }
  _createClass19(HlsLiveController3, [{
    key: "init",
    value: function init() {
      var _player$hlsOps = this._player.hlsOps, XgBuffer2 = _player$hlsOps.XgBuffer, Tracks2 = _player$hlsOps.Tracks, Playlist2 = _player$hlsOps.Playlist, RemuxedBufferManager2 = _player$hlsOps.RemuxedBufferManager, Compatibility3 = _player$hlsOps.Compatibility, FetchLoader2 = _player$hlsOps.FetchLoader, TsDemuxer3 = _player$hlsOps.TsDemuxer, Mp4Remuxer3 = _player$hlsOps.Mp4Remuxer, Mse = _player$hlsOps.Mse;
      this._context.registry("M3U8_BUFFER", XgBuffer2);
      this._context.registry("TS_BUFFER", XgBuffer2);
      this._context.registry("TRACKS", Tracks2);
      this._playlist = this._context.registry("PLAYLIST", Playlist2)({ autoclear: true });
      this._context.registry("PRE_SOURCE_BUFFER", RemuxedBufferManager2);
      this._context.registry("COMPATIBILITY", Compatibility3);
      this._m3u8loader = this._context.registry("M3U8_LOADER", FetchLoader2)({ buffer: "M3U8_BUFFER", readtype: 1 });
      this._tsloader = this._context.registry("TS_LOADER", FetchLoader2)({ buffer: "TS_BUFFER", readtype: 3 });
      this._context.registry("TS_DEMUXER", TsDemuxer3)({ inputbuffer: "TS_BUFFER" });
      this._context.registry("MP4_REMUXER", Mp4Remuxer3);
      this.mse = this._context.registry("MSE", Mse)({ container: this.container });
      this.initEvents();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.on(LOADER_EVENTS4.LOADER_COMPLETE, this._onLoadComplete.bind(this));
      this.on(LOADER_EVENTS4.LOADER_RETRY, this._handleFetchRetry.bind(this));
      this.on(REMUX_EVENTS2.INIT_SEGMENT, this.mse.addSourceBuffers.bind(this.mse));
      this.on(REMUX_EVENTS2.MEDIA_SEGMENT, this.mse.doAppend.bind(this.mse));
      this.on(DEMUX_EVENTS2.METADATA_PARSED, this._onMetadataParsed.bind(this));
      this.on(DEMUX_EVENTS2.SEI_PARSED, this._handleSEIParsed.bind(this));
      this.on(DEMUX_EVENTS2.DEMUX_COMPLETE, this._onDemuxComplete.bind(this));
      this.on(LOADER_EVENTS4.LOADER_ERROR, this._onLoadError.bind(this));
      this.on(DEMUX_EVENTS2.DEMUX_ERROR, this._onDemuxError.bind(this));
      this.on(REMUX_EVENTS2.REMUX_ERROR, this._onRemuxError.bind(this));
      this.on(MSE_EVENTS3.MSE_ERROR, this._handleMseError.bind(this));
    }
  }, {
    key: "_onError",
    value: function _onError(type, mod, err, fatal) {
      var error = {
        code: err.code,
        errorType: type,
        errorDetails: "[" + mod + "]: " + (err ? err.message : ""),
        errorFatal: fatal
      };
      this._player.emit(HLS_ERROR, error);
    }
  }, {
    key: "_onDemuxComplete",
    value: function _onDemuxComplete() {
      this.emit(REMUX_EVENTS2.REMUX_MEDIA, "ts");
    }
  }, {
    key: "_onMetadataParsed",
    value: function _onMetadataParsed(type) {
      if (type === "video") {
        this._context.mediaInfo.hasVideo = true;
      }
      if (type === "audio") {
        this._context.mediaInfo.hasAudio = true;
      }
      this.emit(REMUX_EVENTS2.REMUX_METADATA, type);
    }
  }, {
    key: "_onLoadError",
    value: function _onLoadError(loader, error) {
      if (!this._tsloader.loading && !this._m3u8loader.loading && this.retrytimes >= 1) {
        this.retrytimes--;
        this._onError(LOADER_EVENTS4.LOADER_ERROR, loader, error, false);
      } else if (this.retrytimes <= 1) {
        this._player.emit("error", {
          code: error.code,
          errorType: "network",
          ex: "[" + loader + "]: " + error.message,
          errd: {}
        });
        this._onError(LOADER_EVENTS4.LOADER_ERROR, loader, error, true);
        this.emit(HLS_EVENTS2.RETRY_TIME_EXCEEDED);
        this.mse.endOfStream();
      }
    }
  }, {
    key: "_onDemuxError",
    value: function _onDemuxError(mod, error, fatal) {
      if (fatal === void 0) {
        fatal = true;
      }
      this._player.emit("error", {
        code: error.code,
        errorType: "network",
        ex: "[" + mod + "]: " + (error ? error.message : ""),
        errd: {}
      });
      this._onError(LOADER_EVENTS4.LOADER_ERROR, mod, error, fatal);
    }
  }, {
    key: "_onRemuxError",
    value: function _onRemuxError(mod, error, fatal) {
      if (fatal === void 0) {
        fatal = true;
      }
      this._player.emit("error", {
        errorType: "parse",
        ex: "[" + mod + "]: " + error.message,
        errd: {}
      });
      this._onError(REMUX_EVENTS2.REMUX_ERROR, mod, error, fatal);
    }
  }, {
    key: "_handleMseError",
    value: function _handleMseError(tag, err, fatal) {
      if (fatal === void 0) {
        fatal = false;
      }
      this._player.emit("error", {
        errorType: "format",
        ex: "[" + tag + "]: " + err.message,
        errd: {}
      });
      this._onError(MSE_EVENTS3.MSE_ERROR, tag, err, fatal);
    }
  }, {
    key: "_handleSEIParsed",
    value: function _handleSEIParsed(sei) {
      this._player.emit("SEI_PARSED", sei);
    }
  }, {
    key: "_onLoadComplete",
    value: function _onLoadComplete(buffer) {
      if (buffer.TAG === "M3U8_BUFFER") {
        var mdata = void 0;
        try {
          this.m3u8Text = buffer.shift();
          var result = MASTER_PLAYLIST_REGEX.exec(this.m3u8Text);
          if (result && result[2]) {
            this.load(result[2]);
          } else {
            mdata = this._player.hlsOps.M3U8Parser.parse(this.m3u8Text, this.url);
          }
        } catch (error) {
          this._onError("M3U8_PARSER_ERROR", "M3U8_PARSER", error, false);
        }
        if (!mdata) {
          if (this.retrytimes > 0) {
            this.retrytimes--;
            this._preload();
          } else {
            this.emit(HLS_EVENTS2.RETRY_TIME_EXCEEDED);
            this.mse.endOfStream();
          }
          return;
        }
        try {
          this._playlist.pushM3U8(mdata, true);
        } catch (error) {
          this._onError("M3U8_PARSER_ERROR", "PLAYLIST", error, false);
        }
        if (this._playlist.encrypt && this._playlist.encrypt.uri && !this._playlist.encrypt.key) {
          var XgBuffer2 = this._player.hlsOps.XgBuffer;
          this._context.registry("DECRYPT_BUFFER", XgBuffer2)();
          this._context.registry("KEY_BUFFER", XgBuffer2)();
          this._tsloader.buffer = "DECRYPT_BUFFER";
          this._keyLoader = this._context.registry("KEY_LOADER", fetch_loader_default)({ buffer: "KEY_BUFFER", readtype: 3 });
          var _ref = this._player.config.retry || {}, times = _ref.count, delayTime = _ref.delay;
          this.emitTo("KEY_LOADER", LOADER_EVENTS4.LADER_START, this._playlist.encrypt.uri, {}, times, delayTime);
        } else {
          this._m3u8Loaded(mdata);
        }
      } else if (buffer.TAG === "TS_BUFFER") {
        this.retrytimes = this.configs.retrytimes || 3;
        this._playlist.downloaded(this._tsloader.url, true);
        this.emit(DEMUX_EVENTS2.DEMUX_START);
      } else if (buffer.TAG === "DECRYPT_BUFFER") {
        this.retrytimes = this.configs.retrytimes || 3;
        this._playlist.downloaded(this._tsloader.url, true);
        this.emitTo("CRYPTO", CRYTO_EVENTS.START_DECRYPT);
      } else if (buffer.TAG === "KEY_BUFFER") {
        this.retrytimes = this.configs.retrytimes || 3;
        this._playlist.encrypt.key = buffer.shift();
        this._crypto = this._context.registry("CRYPTO", crypto_default)({
          key: this._playlist.encrypt.key,
          iv: this._playlist.encrypt.ivb,
          method: this._playlist.encrypt.method,
          inputbuffer: "DECRYPT_BUFFER",
          outputbuffer: "TS_BUFFER"
        });
        this._crypto.on(CRYTO_EVENTS.DECRYPTED, this._onDcripted.bind(this));
      }
    }
  }, {
    key: "_handleFetchRetry",
    value: function _handleFetchRetry(tag, info) {
      this._player.emit("retry", Object.assign({
        tag
      }, info));
    }
  }, {
    key: "_onDcripted",
    value: function _onDcripted() {
      this.emit(DEMUX_EVENTS2.DEMUX_START);
    }
  }, {
    key: "_m3u8Loaded",
    value: function _m3u8Loaded(mdata) {
      if (!this.preloadTime) {
        this.preloadTime = this._playlist.targetduration ? this._playlist.targetduration : 5;
      }
      if (this._playlist.fragLength > 0 && this._playlist.sequence < mdata.sequence) {
        this.retrytimes = this.configs.retrytimes || 3;
      } else {
        if (this.retrytimes > 0) {
          this.retrytimes--;
          this._preload();
        } else {
          this.emit(HLS_EVENTS2.RETRY_TIME_EXCEEDED);
          this.mse.endOfStream();
        }
      }
    }
  }, {
    key: "_checkStatus",
    value: function _checkStatus() {
      if (this.retrytimes < 1 && Date.now() - this._lastCheck < 4e3) {
        return;
      } else if (this.retrytimes < 1) {
        clearInterval(this._timmer);
      }
      this._lastCheck = new Date().getTime();
      if (this.container.buffered.length < 1) {
        this._preload();
      } else {
        var currentTime = this.container.currentTime;
        var bufferstart = this.container.buffered.start(this.container.buffered.length - 1);
        if (this.container.readyState <= 2) {
          if (currentTime < bufferstart) {
            this.container.currentTime = bufferstart;
            currentTime = bufferstart;
          } else {
            this._preload();
          }
        }
        var bufferend = this.container.buffered.end(this.container.buffered.length - 1);
        if (currentTime < bufferend - this.preloadTime * 2) {
          this.container.currentTime = bufferend - this.preloadTime;
        }
        if (currentTime > bufferend - this.preloadTime) {
          this._preload();
        }
      }
    }
  }, {
    key: "_preload",
    value: function _preload() {
      if (this._tsloader.loading || this._m3u8loader.loading) {
        return;
      }
      var frag = this._playlist.getTs();
      var _ref2 = this._player.config.retry || {}, times = _ref2.count, delayTime = _ref2.delay;
      if (frag && !frag.downloaded && !frag.downloading) {
        this._playlist.downloading(frag.url, true);
        this.emitTo("TS_LOADER", LOADER_EVENTS4.LADER_START, frag.url, {}, times, delayTime);
      } else {
        var preloadTime = this.preloadTime ? this.preloadTime : 0;
        var current = new Date().getTime();
        if ((!frag || frag.downloaded) && (current - this._m3u8lasttime) / 1e3 > preloadTime) {
          this._m3u8lasttime = current;
          this.emitTo("M3U8_LOADER", LOADER_EVENTS4.LADER_START, this.url, {}, times, delayTime);
        }
      }
    }
  }, {
    key: "load",
    value: function load(url) {
      this.url = url;
      this._preload();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      clearInterval(this._timmer);
      this.off(LOADER_EVENTS4.LOADER_COMPLETE, this._onLoadComplete);
      this.off(REMUX_EVENTS2.INIT_SEGMENT, this.mse.addSourceBuffers);
      this.off(REMUX_EVENTS2.MEDIA_SEGMENT, this.mse.doAppend);
      this.off(DEMUX_EVENTS2.METADATA_PARSED, this._onMetadataParsed);
      this.off(DEMUX_EVENTS2.DEMUX_COMPLETE, this._onDemuxComplete);
      this.mse = null;
      this.m3u8Text = null;
    }
  }]);
  return HlsLiveController3;
}();
var hls_live_default = HlsLiveController;

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mse/config.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/aac/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass20 = function() {
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
function _classCallCheck21(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var AAC = function() {
  function AAC2() {
    _classCallCheck21(this, AAC2);
  }
  _createClass20(AAC2, null, [{
    key: "getSilentFrame",
    value: function getSilentFrame(codec, channelCount) {
      if (codec === "mp4a.40.2") {
        if (channelCount === 1) {
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        } else if (channelCount === 2) {
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        } else if (channelCount === 3) {
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        } else if (channelCount === 4) {
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        } else if (channelCount === 5) {
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        } else if (channelCount === 6) {
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        }
      } else {
        if (channelCount === 1) {
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        } else if (channelCount === 2) {
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        } else if (channelCount === 3) {
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        }
      }
      return null;
    }
  }]);
  return AAC2;
}();
var aac_default = AAC;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/aac/adts.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass21 = function() {
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
function _classCallCheck22(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var ADTS = function() {
  function ADTS2() {
    _classCallCheck22(this, ADTS2);
  }
  _createClass21(ADTS2, null, [{
    key: "isHeader",
    value: function isHeader(data, offset) {
      if (offset + 1 < data.length && ADTS2.isHeaderPattern(data, offset)) {
        return true;
      }
      return false;
    }
  }, {
    key: "getFrameDuration",
    value: function getFrameDuration(samplerate) {
      return 1024 * 9e4 / samplerate;
    }
  }, {
    key: "isHeaderPattern",
    value: function isHeaderPattern(data, offset) {
      return data[offset] === 255 && (data[offset + 1] & 246) === 240;
    }
  }, {
    key: "getHeaderLength",
    value: function getHeaderLength(data, offset) {
      return data[offset + 1] & 1 ? 7 : 9;
    }
  }, {
    key: "getFullFrameLength",
    value: function getFullFrameLength(data, offset) {
      return (data[offset + 3] & 3) << 11 | data[offset + 4] << 3 | (data[offset + 5] & 224) >>> 5;
    }
  }, {
    key: "parseFrameHeader",
    value: function parseFrameHeader(data, offset, pts, frameIndex, frameDuration) {
      var headerLength = void 0, frameLength = void 0, stamp = void 0;
      var length = data.length;
      headerLength = ADTS2.getHeaderLength(data, offset);
      frameLength = ADTS2.getFullFrameLength(data, offset);
      frameLength -= headerLength;
      if (frameLength > 0 && offset + headerLength + frameLength <= length) {
        stamp = pts + frameIndex * frameDuration;
        return { headerLength, frameLength, stamp };
      }
      return void 0;
    }
  }, {
    key: "appendFrame",
    value: function appendFrame(sampleRate, data, offset, pts, frameIndex) {
      var frameDuration = ADTS2.getFrameDuration(sampleRate);
      var header = ADTS2.parseFrameHeader(data, offset, pts, frameIndex, frameDuration);
      if (header) {
        var stamp = header.stamp;
        var headerLength = header.headerLength;
        var frameLength = header.frameLength;
        var aacSample = {
          unit: data.subarray(offset + headerLength, offset + headerLength + frameLength),
          pts: stamp,
          dts: stamp
        };
        return { sample: aacSample, length: frameLength + headerLength };
      }
      return void 0;
    }
  }]);
  return ADTS2;
}();
var adts_default = ADTS;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/index.js
var avc_exports = {};
__export(avc_exports, {
  Golomb: () => golomb_default,
  NalUnit: () => nalunit_default,
  SEIParser: () => sei_default,
  SpsParser: () => sps_default
});
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/sps.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/golomb.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass22 = function() {
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
function _classCallCheck23(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Golomb = function() {
  function Golomb3(uint8array) {
    _classCallCheck23(this, Golomb3);
    this.TAG = "Golomb";
    this._buffer = uint8array;
    this._bufferIndex = 0;
    this._totalBytes = uint8array.byteLength;
    this._totalBits = uint8array.byteLength * 8;
    this._currentWord = 0;
    this._currentWordBitsLeft = 0;
  }
  _createClass22(Golomb3, [{
    key: "destroy",
    value: function destroy() {
      this._buffer = null;
    }
  }, {
    key: "_fillCurrentWord",
    value: function _fillCurrentWord() {
      var bufferBytesLeft = this._totalBytes - this._bufferIndex;
      if (bufferBytesLeft <= 0) {
      }
      var bytesRead = Math.min(4, bufferBytesLeft);
      var word = new Uint8Array(4);
      word.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + bytesRead));
      this._currentWord = new DataView(word.buffer).getUint32(0);
      this._bufferIndex += bytesRead;
      this._currentWordBitsLeft = bytesRead * 8;
    }
  }, {
    key: "readBits",
    value: function readBits(size) {
      var bits = Math.min(this._currentWordBitsLeft, size);
      var valu = this._currentWord >>> 32 - bits;
      if (size > 32) {
        throw new Error("Cannot read more than 32 bits at a time");
      }
      this._currentWordBitsLeft -= bits;
      if (this._currentWordBitsLeft > 0) {
        this._currentWord <<= bits;
      } else if (this._totalBytes - this._bufferIndex > 0) {
        this._fillCurrentWord();
      }
      bits = size - bits;
      if (bits > 0 && this._currentWordBitsLeft) {
        return valu << bits | this.readBits(bits);
      } else {
        return valu;
      }
    }
  }, {
    key: "readBool",
    value: function readBool() {
      return this.readBits(1) === 1;
    }
  }, {
    key: "readByte",
    value: function readByte() {
      return this.readBits(8);
    }
  }, {
    key: "_skipLeadingZero",
    value: function _skipLeadingZero() {
      var zeroCount = void 0;
      for (zeroCount = 0; zeroCount < this._currentWordBitsLeft; zeroCount++) {
        if ((this._currentWord & 2147483648 >>> zeroCount) !== 0) {
          this._currentWord <<= zeroCount;
          this._currentWordBitsLeft -= zeroCount;
          return zeroCount;
        }
      }
      this._fillCurrentWord();
      return zeroCount + this._skipLeadingZero();
    }
  }, {
    key: "readUEG",
    value: function readUEG() {
      var leadingZeros = this._skipLeadingZero();
      return this.readBits(leadingZeros + 1) - 1;
    }
  }, {
    key: "readSEG",
    value: function readSEG() {
      var value = this.readUEG();
      if (value & 1) {
        return value + 1 >>> 1;
      } else {
        return -1 * (value >>> 1);
      }
    }
  }, {
    key: "readSliceType",
    value: function readSliceType() {
      this.readByte();
      this.readUEG();
      return this.readUEG();
    }
  }]);
  return Golomb3;
}();
var golomb_default = Golomb;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/sps.js
var _createClass23 = function() {
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
function _classCallCheck24(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var SPSParser = function() {
  function SPSParser3() {
    _classCallCheck24(this, SPSParser3);
  }
  _createClass23(SPSParser3, null, [{
    key: "_ebsp2rbsp",
    value: function _ebsp2rbsp(uint8array) {
      var src = uint8array;
      var srcLength = src.byteLength;
      var dst = new Uint8Array(srcLength);
      var dstIdx = 0;
      for (var i = 0; i < srcLength; i++) {
        if (i >= 2) {
          if (src[i] === 3 && src[i - 1] === 0 && src[i - 2] === 0) {
            continue;
          }
        }
        dst[dstIdx] = src[i];
        dstIdx++;
      }
      return new Uint8Array(dst.buffer, 0, dstIdx);
    }
  }, {
    key: "parseSPS",
    value: function parseSPS(uint8array) {
      var rbsp = SPSParser3._ebsp2rbsp(uint8array);
      var gb = new golomb_default(rbsp);
      gb.readByte();
      var profileIdc = gb.readByte();
      gb.readByte();
      var levelIdc = gb.readByte();
      gb.readUEG();
      var profile_string = SPSParser3.getProfileString(profileIdc);
      var level_string = SPSParser3.getLevelString(levelIdc);
      var chroma_format_idc = 1;
      var chroma_format = 420;
      var chroma_format_table = [0, 420, 422, 444];
      var bit_depth = 8;
      if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128 || profileIdc === 138 || profileIdc === 144) {
        chroma_format_idc = gb.readUEG();
        if (chroma_format_idc === 3) {
          gb.readBits(1);
        }
        if (chroma_format_idc <= 3) {
          chroma_format = chroma_format_table[chroma_format_idc];
        }
        bit_depth = gb.readUEG() + 8;
        gb.readUEG();
        gb.readBits(1);
        if (gb.readBool()) {
          var scaling_list_count = chroma_format_idc !== 3 ? 8 : 12;
          for (var i = 0; i < scaling_list_count; i++) {
            if (gb.readBool()) {
              if (i < 6) {
                SPSParser3._skipScalingList(gb, 16);
              } else {
                SPSParser3._skipScalingList(gb, 64);
              }
            }
          }
        }
      }
      gb.readUEG();
      var pic_order_cnt_type = gb.readUEG();
      if (pic_order_cnt_type === 0) {
        gb.readUEG();
      } else if (pic_order_cnt_type === 1) {
        gb.readBits(1);
        gb.readSEG();
        gb.readSEG();
        var num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
        for (var _i = 0; _i < num_ref_frames_in_pic_order_cnt_cycle; _i++) {
          gb.readSEG();
        }
      }
      gb.readUEG();
      gb.readBits(1);
      var pic_width_in_mbs_minus1 = gb.readUEG();
      var pic_height_in_map_units_minus1 = gb.readUEG();
      var frame_mbs_only_flag = gb.readBits(1);
      if (frame_mbs_only_flag === 0) {
        gb.readBits(1);
      }
      gb.readBits(1);
      var frame_crop_left_offset = 0;
      var frame_crop_right_offset = 0;
      var frame_crop_top_offset = 0;
      var frame_crop_bottom_offset = 0;
      var frame_cropping_flag = gb.readBool();
      if (frame_cropping_flag) {
        frame_crop_left_offset = gb.readUEG();
        frame_crop_right_offset = gb.readUEG();
        frame_crop_top_offset = gb.readUEG();
        frame_crop_bottom_offset = gb.readUEG();
      }
      var par_width = 1;
      var par_height = 1;
      var fps = 0;
      var fps_fixed = true;
      var fps_num = 0;
      var fps_den = 0;
      var vui_parameters_present_flag = gb.readBool();
      if (vui_parameters_present_flag) {
        if (gb.readBool()) {
          var aspect_ratio_idc = gb.readByte();
          var par_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
          var par_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
          if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
            par_width = par_w_table[aspect_ratio_idc - 1];
            par_height = par_h_table[aspect_ratio_idc - 1];
          } else if (aspect_ratio_idc === 255) {
            par_width = gb.readByte() << 8 | gb.readByte();
            par_height = gb.readByte() << 8 | gb.readByte();
          }
        }
        if (gb.readBool()) {
          gb.readBool();
        }
        if (gb.readBool()) {
          gb.readBits(4);
          if (gb.readBool()) {
            gb.readBits(24);
          }
        }
        if (gb.readBool()) {
          gb.readUEG();
          gb.readUEG();
        }
        if (gb.readBool()) {
          var num_units_in_tick = gb.readBits(32);
          var time_scale = gb.readBits(32);
          fps_fixed = gb.readBool();
          fps_num = time_scale;
          fps_den = num_units_in_tick * 2;
          fps = fps_num / fps_den;
        }
      }
      var parScale = 1;
      if (par_width !== 1 || par_height !== 1) {
        parScale = par_width / par_height;
      }
      var crop_unit_x = 0;
      var crop_unit_y = 0;
      if (chroma_format_idc === 0) {
        crop_unit_x = 1;
        crop_unit_y = 2 - frame_mbs_only_flag;
      } else {
        var sub_wc = chroma_format_idc === 3 ? 1 : 2;
        var sub_hc = chroma_format_idc === 1 ? 2 : 1;
        crop_unit_x = sub_wc;
        crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
      }
      var codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
      var codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);
      codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
      codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;
      var present_width = Math.ceil(codec_width * parScale);
      gb.destroy();
      gb = null;
      return {
        profile_string,
        level_string,
        bit_depth,
        chroma_format,
        chroma_format_string: SPSParser3.getChromaFormatString(chroma_format),
        frame_rate: {
          fixed: fps_fixed,
          fps,
          fps_den,
          fps_num
        },
        par_ratio: {
          width: par_width,
          height: par_height
        },
        codec_size: {
          width: codec_width,
          height: codec_height
        },
        present_size: {
          width: present_width,
          height: codec_height
        }
      };
    }
  }, {
    key: "_skipScalingList",
    value: function _skipScalingList(gb, count) {
      var lastScale = 8;
      var nextScale = 8;
      var deltaScale = 0;
      for (var i = 0; i < count; i++) {
        if (nextScale !== 0) {
          deltaScale = gb.readSEG();
          nextScale = (lastScale + deltaScale + 256) % 256;
        }
        lastScale = nextScale === 0 ? lastScale : nextScale;
      }
    }
  }, {
    key: "getProfileString",
    value: function getProfileString(profileIdc) {
      switch (profileIdc) {
        case 66:
          return "Baseline";
        case 77:
          return "Main";
        case 88:
          return "Extended";
        case 100:
          return "High";
        case 110:
          return "High10";
        case 122:
          return "High422";
        case 244:
          return "High444";
        default:
          return "Unknown";
      }
    }
  }, {
    key: "getLevelString",
    value: function getLevelString(levelIdc) {
      return (levelIdc / 10).toFixed(1);
    }
  }, {
    key: "getChromaFormatString",
    value: function getChromaFormatString(chroma) {
      switch (chroma) {
        case 420:
          return "4:2:0";
        case 422:
          return "4:2:2";
        case 444:
          return "4:4:4";
        default:
          return "Unknown";
      }
    }
  }, {
    key: "toVideoMeta",
    value: function toVideoMeta(spsConfig) {
      var meta = {};
      if (spsConfig && spsConfig.codec_size) {
        meta.codecWidth = spsConfig.codec_size.width;
        meta.codecHeight = spsConfig.codec_size.height;
        meta.presentWidth = spsConfig.present_size.width;
        meta.presentHeight = spsConfig.present_size.height;
      }
      meta.profile = spsConfig.profile_string;
      meta.level = spsConfig.level_string;
      meta.bitDepth = spsConfig.bit_depth;
      meta.chromaFormat = spsConfig.chroma_format;
      meta.parRatio = {
        width: spsConfig.par_ratio.width,
        height: spsConfig.par_ratio.height
      };
      meta.frameRate = spsConfig.frame_rate;
      var fpsDen = meta.frameRate.fps_den;
      var fpsNum = meta.frameRate.fps_num;
      meta.refSampleDuration = Math.floor(meta.timescale * (fpsDen / fpsNum));
      return meta;
    }
  }]);
  return SPSParser3;
}();
var sps_default = SPSParser;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/nalunit.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/sei.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/rbsp.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass24 = function() {
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
function _classCallCheck25(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var RBSP = function() {
  function RBSP3() {
    _classCallCheck25(this, RBSP3);
  }
  _createClass24(RBSP3, null, [{
    key: "EBSP2RBSP",
    value: function EBSP2RBSP(data) {
      return data.filter(function(el, idx) {
        if (idx < 2) {
          return true;
        } else {
          return !(data[idx - 2] === 0 && data[idx - 1] === 0 && el === 3);
        }
      });
    }
  }, {
    key: "EBSP2SODB",
    value: function EBSP2SODB(data) {
      var lastByte = data[data.byteLength - 1];
      if (lastByte && lastByte === 128) {
        return data.slice(0, data.byteLength - 1);
      }
      return data;
    }
  }]);
  return RBSP3;
}();
var rbsp_default = RBSP;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/sei.js
var _createClass25 = function() {
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
function _classCallCheck26(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var u8aToString = function u8aToString2(data) {
  var result = "";
  for (var i = 0; i < data.byteLength; i++) {
    result += String.fromCharCode(data[i]);
  }
  return result;
};
var SEIParser = function() {
  function SEIParser3() {
    _classCallCheck26(this, SEIParser3);
  }
  _createClass25(SEIParser3, null, [{
    key: "_resolveNalu",
    value: function _resolveNalu(data) {
      if (data.length >= 1) {
        return rbsp_default.EBSP2SODB(rbsp_default.EBSP2RBSP(data.slice(1)));
      }
      return null;
    }
  }, {
    key: "parse",
    value: function parse(data) {
      var sodb = SEIParser3._resolveNalu(data);
      var _SEIParser$switchPayl = SEIParser3.switchPayloadType(sodb), payloadType = _SEIParser$switchPayl.payloadType, offset = _SEIParser$switchPayl.offset;
      var content = sodb.slice(offset);
      switch (payloadType) {
        case 5:
          return SEIParser3.user_data_unregistered(content);
        default:
          return {
            code: payloadType,
            content
          };
      }
    }
  }, {
    key: "switchPayloadType",
    value: function switchPayloadType(data) {
      var dv = new DataView(data.buffer);
      var payloadType = 0;
      var offset = 0;
      while (dv.getUint8(offset) === 255) {
        offset++;
        payloadType += 255;
      }
      payloadType += dv.getUint8(offset++);
      return {
        payloadType,
        offset
      };
    }
  }, {
    key: "getPayloadLength",
    value: function getPayloadLength(data) {
      var dv = new DataView(data.buffer);
      var payloadLength = 0;
      var offset = 0;
      while (dv.getUint8(offset) === 255) {
        offset++;
        payloadLength += 255;
      }
      payloadLength += dv.getUint8(offset++);
      return {
        payloadLength,
        offset
      };
    }
  }, {
    key: "user_data_unregistered",
    value: function user_data_unregistered(data) {
      var _SEIParser$getPayload = SEIParser3.getPayloadLength(data), payloadLength = _SEIParser$getPayload.payloadLength, offset = _SEIParser$getPayload.offset;
      if (payloadLength < 16) {
        return {
          uuid: "",
          content: null
        };
      }
      var payload = data.slice(offset);
      var uuid = u8aToString(payload.slice(0, 16));
      var content = u8aToString(payload.slice(16, payloadLength));
      return {
        code: 5,
        uuid,
        content
      };
    }
  }]);
  return SEIParser3;
}();
var sei_default = SEIParser;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/avc/nalunit.js
var _createClass26 = function() {
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
function _classCallCheck27(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Nalunit = function() {
  function Nalunit3() {
    _classCallCheck27(this, Nalunit3);
  }
  _createClass26(Nalunit3, null, [{
    key: "getNalunits",
    value: function getNalunits(buffer) {
      if (buffer.length - buffer.position < 4) {
        return [];
      }
      var buf = buffer.dataview;
      var position = buffer.position;
      if (buf.getInt32(position) === 1 || buf.getInt16(position) === 0 && buf.getInt8(position + 2) === 1) {
        return Nalunit3.getAnnexbNals(buffer);
      } else {
        return Nalunit3.getAvccNals(buffer);
      }
    }
  }, {
    key: "getAnnexbNals",
    value: function getAnnexbNals(buffer) {
      var nals = [];
      var position = Nalunit3.getHeaderPositionAnnexB(buffer);
      var start = position.pos;
      var end = start;
      while (start < buffer.length - 4) {
        var header = buffer.buffer.slice(start, start + position.headerLength);
        if (position.pos === buffer.position) {
          buffer.skip(position.headerLength);
        }
        position = Nalunit3.getHeaderPositionAnnexB(buffer);
        end = position.pos;
        var body = new Uint8Array(buffer.buffer.slice(start + header.byteLength, end));
        var unit = { header, body };
        Nalunit3.analyseNal(unit);
        if (unit.type <= 9 && unit.type !== 0) {
          nals.push(unit);
        }
        buffer.skip(end - buffer.position);
        start = end;
      }
      return nals;
    }
  }, {
    key: "getAvccNals",
    value: function getAvccNals(buffer) {
      var nals = [];
      while (buffer.position < buffer.length - 4) {
        var length = buffer.dataview.getInt32(buffer.dataview.position);
        if (buffer.length - buffer.position >= length) {
          var header = buffer.buffer.slice(buffer.position, buffer.position + 4);
          buffer.skip(4);
          var body = new Uint8Array(buffer.buffer.slice(buffer.position, buffer.position + length));
          buffer.skip(length);
          var unit = { header, body };
          Nalunit3.analyseNal(unit);
          if (unit.type <= 9 && unit.type !== 0) {
            nals.push(unit);
          }
        } else {
          break;
        }
      }
      return nals;
    }
  }, {
    key: "analyseNal",
    value: function analyseNal(unit) {
      var type = unit.body[0] & 31;
      unit.type = type;
      switch (type) {
        case 1:
          unit.ndr = true;
          break;
        case 5:
          unit.idr = true;
          break;
        case 6:
          try {
            unit.sei = sei_default.parse(unit.body);
          } catch (e) {
          }
          break;
        case 7:
          unit.sps = sps_default.parseSPS(unit.body);
          break;
        case 8:
          unit.pps = true;
          break;
        case 9:
          break;
        default:
          break;
      }
    }
  }, {
    key: "getHeaderPositionAnnexB",
    value: function getHeaderPositionAnnexB(buffer) {
      var pos = buffer.position;
      var headerLength = 0;
      var bufferLen = buffer.length;
      while (headerLength !== 3 && headerLength !== 4 && pos < bufferLen - 4) {
        if (buffer.dataview.getInt16(pos) === 0) {
          if (buffer.dataview.getInt16(pos + 2) === 1) {
            headerLength = 4;
          } else if (buffer.dataview.getInt8(pos + 2) === 1) {
            headerLength = 3;
          } else {
            pos++;
          }
        } else {
          pos++;
        }
      }
      if (pos === bufferLen - 4) {
        if (buffer.dataview.getInt16(pos) === 0) {
          if (buffer.dataview.getInt16(pos + 2) === 1) {
            headerLength = 4;
          } else {
            pos = bufferLen;
          }
        } else {
          pos++;
          if (buffer.dataview.getInt16(pos) === 0 && buffer.dataview.getInt8(pos) === 1) {
            headerLength = 3;
          } else {
            pos = bufferLen;
          }
        }
      }
      return { pos, headerLength };
    }
  }, {
    key: "getAvcc",
    value: function getAvcc(sps, pps) {
      var ret = new Uint8Array(sps.byteLength + pps.byteLength + 11);
      ret[0] = 1;
      ret[1] = sps[1];
      ret[2] = sps[2];
      ret[3] = sps[3];
      ret[4] = 255;
      ret[5] = 225;
      var offset = 6;
      ret.set(new Uint8Array([sps.byteLength >>> 8 & 255, sps.byteLength & 255]), offset);
      offset += 2;
      ret.set(sps, offset);
      offset += sps.byteLength;
      ret[offset] = 1;
      offset++;
      ret.set(new Uint8Array([pps.byteLength >>> 8 & 255, pps.byteLength & 255]), offset);
      offset += 2;
      ret.set(pps, offset);
      return ret;
    }
  }]);
  return Nalunit3;
}();
var nalunit_default = Nalunit;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/index.js
var hevc_exports = {};
__export(hevc_exports, {
  NalUnitHEVC: () => nalunit_default2,
  SpsParserHEVC: () => sps_default2
});
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/sps.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/golomb.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass27 = function() {
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
function _classCallCheck28(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Golomb2 = function() {
  function Golomb3(uint8array) {
    _classCallCheck28(this, Golomb3);
    this.TAG = "Golomb";
    this._buffer = uint8array;
    this._bufferIndex = 0;
    this._totalBytes = uint8array.byteLength;
    this._totalBits = uint8array.byteLength * 8;
    this._currentWord = 0;
    this._currentWordBitsLeft = 0;
  }
  _createClass27(Golomb3, [{
    key: "destroy",
    value: function destroy() {
      this._buffer = null;
    }
  }, {
    key: "_fillCurrentWord",
    value: function _fillCurrentWord() {
      var bufferBytesLeft = this._totalBytes - this._bufferIndex;
      if (bufferBytesLeft <= 0) {
      }
      var bytesRead = Math.min(4, bufferBytesLeft);
      var word = new Uint8Array(4);
      word.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + bytesRead));
      this._currentWord = new DataView(word.buffer).getUint32(0);
      this._bufferIndex += bytesRead;
      this._currentWordBitsLeft = bytesRead * 8;
    }
  }, {
    key: "readBits",
    value: function readBits(size) {
      var bits = Math.min(this._currentWordBitsLeft, size);
      var valu = this._currentWord >>> 32 - bits;
      if (size > 32) {
        throw new Error("Cannot read more than 32 bits at a time");
      }
      this._currentWordBitsLeft -= bits;
      if (this._currentWordBitsLeft > 0) {
        this._currentWord <<= bits;
      } else if (this._totalBytes - this._bufferIndex > 0) {
        this._fillCurrentWord();
      }
      bits = size - bits;
      if (bits > 0 && this._currentWordBitsLeft) {
        return valu << bits | this.readBits(bits);
      } else {
        return valu;
      }
    }
  }, {
    key: "readBool",
    value: function readBool() {
      return this.readBits(1) === 1;
    }
  }, {
    key: "readByte",
    value: function readByte() {
      return this.readBits(8);
    }
  }, {
    key: "_skipLeadingZero",
    value: function _skipLeadingZero() {
      var zeroCount = void 0;
      for (zeroCount = 0; zeroCount < this._currentWordBitsLeft; zeroCount++) {
        if ((this._currentWord & 2147483648 >>> zeroCount) !== 0) {
          this._currentWord <<= zeroCount;
          this._currentWordBitsLeft -= zeroCount;
          return zeroCount;
        }
      }
      this._fillCurrentWord();
      return zeroCount + this._skipLeadingZero();
    }
  }, {
    key: "readUEG",
    value: function readUEG() {
      var leadingZeros = this._skipLeadingZero();
      return this.readBits(leadingZeros + 1) - 1;
    }
  }, {
    key: "readSEG",
    value: function readSEG() {
      var value = this.readUEG();
      if (value & 1) {
        return value + 1 >>> 1;
      } else {
        return -1 * (value >>> 1);
      }
    }
  }, {
    key: "readSliceType",
    value: function readSliceType() {
      this.readByte();
      this.readUEG();
      return this.readUEG();
    }
  }]);
  return Golomb3;
}();
var golomb_default2 = Golomb2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/sps.js
var _createClass28 = function() {
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
function _classCallCheck29(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var SPSParser2 = function() {
  function SPSParser3() {
    _classCallCheck29(this, SPSParser3);
  }
  _createClass28(SPSParser3, null, [{
    key: "_ebsp2rbsp",
    value: function _ebsp2rbsp(uint8array) {
      var src = uint8array;
      var srcLength = src.byteLength;
      var dst = new Uint8Array(srcLength);
      var dstIdx = 0;
      for (var i = 0; i < srcLength; i++) {
        if (i >= 2) {
          if (src[i] === 3 && src[i - 1] === 0 && src[i - 2] === 0) {
            continue;
          }
        }
        dst[dstIdx] = src[i];
        dstIdx++;
      }
      return new Uint8Array(dst.buffer, 0, dstIdx);
    }
  }, {
    key: "parseSPS",
    value: function parseSPS(uint8array) {
      var rbsp = SPSParser3._ebsp2rbsp(uint8array);
      var gb = new golomb_default2(rbsp);
      var vpsId = 0;
      var maxSubLayersMinus1 = 0;
      var tINf = 0;
      var spsId = 0;
      var separate_colour_plane_flag = 0;
      var chromaFormatIdc = 0;
      var width = 0;
      var height = 0;
      var conf_win_left_offset = 0;
      var conf_win_right_offset = 0;
      var conf_win_top_offset = 0;
      var conf_win_bottom_offset = 0;
      var conformanceWindowFlag = 0;
      var bitDepthLumaMinus8 = 0;
      var bitDepthChromaMinus8 = 0;
      var sub_width_c = 0;
      var sub_height_c = 0;
      var profileTierLevel = {};
      gb.readByte();
      gb.readByte();
      vpsId = gb.readBits(4);
      maxSubLayersMinus1 = gb.readBits(3);
      tINf = gb.readBits(1);
      profileTierLevel = SPSParser3._readProfileTierLevel(gb, maxSubLayersMinus1);
      spsId = gb.readUEG();
      chromaFormatIdc = gb.readUEG();
      if (chromaFormatIdc === 3) {
        separate_colour_plane_flag = gb.readBits(1);
      }
      width = gb.readUEG();
      height = gb.readUEG();
      conformanceWindowFlag = gb.readBits(1);
      if (conformanceWindowFlag === 1) {
        conf_win_left_offset = gb.readUEG();
        conf_win_right_offset = gb.readUEG();
        conf_win_top_offset = gb.readUEG();
        conf_win_bottom_offset = gb.readUEG();
      }
      bitDepthLumaMinus8 = gb.readUEG();
      bitDepthChromaMinus8 = gb.readUEG();
      if (conformanceWindowFlag === 1) {
        sub_width_c = (chromaFormatIdc === 1 || chromaFormatIdc === 2) && separate_colour_plane_flag === 0 ? 2 : 1;
        sub_height_c = chromaFormatIdc === 1 && separate_colour_plane_flag === 0 ? 2 : 1;
        width -= sub_width_c * conf_win_right_offset + sub_width_c * conf_win_left_offset;
        height -= sub_height_c * conf_win_bottom_offset + sub_height_c * conf_win_top_offset;
      }
      gb.destroy();
      gb = null;
      return {
        width,
        height,
        general_profile_space: profileTierLevel.general_profile_space,
        general_tier_flag: profileTierLevel.general_tier_flag,
        general_profile_idc: profileTierLevel.general_profile_idc,
        general_level_idc: profileTierLevel.general_level_idc,
        chromaFormatIdc,
        bitDepthLumaMinus8,
        bitDepthChromaMinus8
      };
    }
  }, {
    key: "_readProfileTierLevel",
    value: function _readProfileTierLevel(gb, maxSubLayersMinus1) {
      var general_profile_space = 0;
      var general_tier_flag = 0;
      var general_profile_idc = 0;
      var general_level_idc = 0;
      general_profile_space = gb.readBits(2) || 0;
      general_tier_flag = gb.readBits(1) || 0;
      general_profile_idc = gb.readBits(5) || 0;
      gb.readBits(16);
      gb.readBits(16);
      gb.readBits(1);
      gb.readBits(1);
      gb.readBits(1);
      gb.readBits(1);
      gb.readBits(16);
      gb.readBits(16);
      gb.readBits(12);
      general_level_idc = gb.readBits(8) || 0;
      var subLayerProfilePresentFlag = [];
      var subLayerLevelPresentFlag = [];
      for (var j = 0; j < maxSubLayersMinus1; j++) {
        subLayerProfilePresentFlag[j] = gb.readBits(1);
        subLayerLevelPresentFlag[j] = gb.readBits(1);
      }
      if (maxSubLayersMinus1 > 0) {
        gb.readBits((8 - maxSubLayersMinus1) * 2);
      }
      for (var i = 0; i < maxSubLayersMinus1; i++) {
        if (subLayerProfilePresentFlag[i] !== 0) {
          gb.readBits(2);
          gb.readBits(1);
          gb.readBits(5);
          gb.readBits(16);
          gb.readBits(16);
          gb.readBits(4);
          gb.readBits(16);
          gb.readBits(16);
          gb.readBits(12);
        }
        if (subLayerLevelPresentFlag[i] !== 0) {
          gb.readBits(8);
        }
      }
      return {
        general_profile_space,
        general_tier_flag,
        general_profile_idc,
        general_level_idc
      };
    }
  }, {
    key: "_skipScalingList",
    value: function _skipScalingList(gb, count) {
      var lastScale = 8;
      var nextScale = 8;
      var deltaScale = 0;
      for (var i = 0; i < count; i++) {
        if (nextScale !== 0) {
          deltaScale = gb.readSEG();
          nextScale = (lastScale + deltaScale + 256) % 256;
        }
        lastScale = nextScale === 0 ? lastScale : nextScale;
      }
    }
  }, {
    key: "getProfileString",
    value: function getProfileString(profileIdc) {
      switch (profileIdc) {
        case 66:
          return "Baseline";
        case 77:
          return "Main";
        case 88:
          return "Extended";
        case 100:
          return "High";
        case 110:
          return "High10";
        case 122:
          return "High422";
        case 244:
          return "High444";
        default:
          return "Unknown";
      }
    }
  }, {
    key: "getLevelString",
    value: function getLevelString(levelIdc) {
      return (levelIdc / 10).toFixed(1);
    }
  }, {
    key: "getChromaFormatString",
    value: function getChromaFormatString(chroma) {
      switch (chroma) {
        case 420:
          return "4:2:0";
        case 422:
          return "4:2:2";
        case 444:
          return "4:4:4";
        default:
          return "Unknown";
      }
    }
  }, {
    key: "toVideoMeta",
    value: function toVideoMeta(spsConfig) {
      var meta = {};
      if (spsConfig && spsConfig.codec_size) {
        meta.codecWidth = spsConfig.codec_size.width;
        meta.codecHeight = spsConfig.codec_size.height;
        meta.presentWidth = spsConfig.present_size.width;
        meta.presentHeight = spsConfig.present_size.height;
      } else if (spsConfig.width && spsConfig.height) {
        meta.codecWidth = spsConfig.width;
        meta.codecHeight = spsConfig.height;
        meta.presentWidth = spsConfig.width;
        meta.presentHeight = spsConfig.height;
      }
      meta.profile = spsConfig.profile_string;
      meta.level = spsConfig.level_string;
      meta.bitDepth = spsConfig.bit_depth;
      meta.chromaFormat = spsConfig.chroma_format;
      return meta;
    }
  }]);
  return SPSParser3;
}();
var sps_default2 = SPSParser2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/nalunit.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/sei.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/rbsp.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass29 = function() {
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
function _classCallCheck30(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var RBSP2 = function() {
  function RBSP3() {
    _classCallCheck30(this, RBSP3);
  }
  _createClass29(RBSP3, null, [{
    key: "EBSP2RBSP",
    value: function EBSP2RBSP(data) {
      return data.filter(function(el, idx) {
        if (idx < 2) {
          return true;
        } else {
          return !(data[idx - 2] === 0 && data[idx - 1] === 0 && el === 3);
        }
      });
    }
  }, {
    key: "EBSP2SODB",
    value: function EBSP2SODB(data) {
      var lastByte = data[data.byteLength - 1];
      if (lastByte && lastByte === 128) {
        return data.slice(0, data.byteLength - 1);
      }
      return data;
    }
  }]);
  return RBSP3;
}();
var rbsp_default2 = RBSP2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/sei.js
var _createClass30 = function() {
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
function _classCallCheck31(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var u8aToString3 = function u8aToString4(data) {
  var result = "";
  for (var i = 0; i < data.byteLength; i++) {
    result += String.fromCharCode(data[i]);
  }
  return result;
};
var SEIParser2 = function() {
  function SEIParser3() {
    _classCallCheck31(this, SEIParser3);
  }
  _createClass30(SEIParser3, null, [{
    key: "_resolveNalu",
    value: function _resolveNalu(data) {
      if (data.length >= 1) {
        return rbsp_default2.EBSP2SODB(rbsp_default2.EBSP2RBSP(data.slice(1)));
      }
      return null;
    }
  }, {
    key: "parse",
    value: function parse(data) {
      var sodb = SEIParser3._resolveNalu(data);
      var _SEIParser$switchPayl = SEIParser3.switchPayloadType(sodb), payloadType = _SEIParser$switchPayl.payloadType, offset = _SEIParser$switchPayl.offset;
      var content = sodb.slice(offset);
      switch (payloadType) {
        case 5:
          return SEIParser3.user_data_unregistered(content);
        default:
          return {
            code: payloadType,
            content
          };
      }
    }
  }, {
    key: "switchPayloadType",
    value: function switchPayloadType(data) {
      var dv = new DataView(data.buffer);
      var payloadType = 0;
      var offset = 0;
      while (dv.getUint8(offset) === 255) {
        offset++;
        payloadType += 255;
      }
      payloadType += dv.getUint8(offset++);
      return {
        payloadType,
        offset
      };
    }
  }, {
    key: "getPayloadLength",
    value: function getPayloadLength(data) {
      var dv = new DataView(data.buffer);
      var payloadLength = 0;
      var offset = 0;
      while (dv.getUint8(offset) === 255) {
        offset++;
        payloadLength += 255;
      }
      payloadLength += dv.getUint8(offset++);
      return {
        payloadLength,
        offset
      };
    }
  }, {
    key: "user_data_unregistered",
    value: function user_data_unregistered(data) {
      var _SEIParser$getPayload = SEIParser3.getPayloadLength(data), payloadLength = _SEIParser$getPayload.payloadLength, offset = _SEIParser$getPayload.offset;
      if (payloadLength < 16) {
        return {
          uuid: "",
          content: null
        };
      }
      var payload = data.slice(offset);
      var uuid = u8aToString3(payload.slice(0, 16));
      var content = u8aToString3(payload.slice(16, payloadLength));
      return {
        code: 5,
        uuid,
        content
      };
    }
  }]);
  return SEIParser3;
}();
var sei_default2 = SEIParser2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/hevc/nalunit.js
var _createClass31 = function() {
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
function _classCallCheck32(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Nalunit2 = function() {
  function Nalunit3() {
    _classCallCheck32(this, Nalunit3);
  }
  _createClass31(Nalunit3, null, [{
    key: "getNalunits",
    value: function getNalunits(buffer) {
      if (buffer.length - buffer.position < 4) {
        return [];
      }
      var buf = buffer.dataview;
      var position = buffer.position;
      if (buf.getInt32(position) === 1 || buf.getInt16(position) === 0 && buf.getInt8(position + 2) === 1) {
        return Nalunit3.getAnnexbNals(buffer);
      } else {
        return Nalunit3.getHvccNals(buffer);
      }
    }
  }, {
    key: "getAnnexbNals",
    value: function getAnnexbNals(buffer) {
      var nals = [];
      var position = Nalunit3.getHeaderPositionAnnexB(buffer);
      var start = position.pos;
      var end = start;
      while (start < buffer.length - 4) {
        var header = buffer.buffer.slice(start, start + position.headerLength);
        if (position.pos === buffer.position) {
          buffer.skip(position.headerLength);
        }
        position = Nalunit3.getHeaderPositionAnnexB(buffer);
        end = position.pos;
        var body = new Uint8Array(buffer.buffer.slice(start + header.byteLength, end));
        var unit = { header, body };
        Nalunit3.analyseNal(unit);
        if (unit.type <= 40) {
          nals.push(unit);
        }
        buffer.skip(end - buffer.position);
        start = end;
      }
      return nals;
    }
  }, {
    key: "getHvccNals",
    value: function getHvccNals(buffer) {
      var nals = [];
      while (buffer.position < buffer.length - 4) {
        var length = buffer.dataview.getInt32(buffer.dataview.position);
        if (buffer.length - buffer.position >= length) {
          var header = buffer.buffer.slice(buffer.position, buffer.position + 4);
          buffer.skip(4);
          var body = new Uint8Array(buffer.buffer.slice(buffer.position, buffer.position + length));
          buffer.skip(length);
          var unit = { header, body };
          try {
            Nalunit3.analyseNal(unit);
          } catch (e) {
            continue;
          }
          if (unit.type <= 40) {
            nals.push(unit);
          }
        } else {
          break;
        }
      }
      return nals;
    }
  }, {
    key: "analyseNal",
    value: function analyseNal(unit) {
      var type = unit.body[0] >>> 1 & 63;
      unit.type = type;
      switch (type) {
        case 0:
          unit.slice_trail_n = true;
          break;
        case 1:
          unit.slice_trail_r = true;
          unit.key = true;
          break;
        case 2:
          unit.slice_tsa_n = true;
          break;
        case 3:
          unit.slice_tsa_r = true;
          unit.key = true;
          break;
        case 4:
          unit.slice_stsa_n = true;
          break;
        case 5:
          unit.slice_stsa_r = true;
          unit.key = true;
          break;
        case 6:
          unit.slice_radl_n = true;
          break;
        case 7:
          unit.slice_radl_r = true;
          unit.key = true;
          break;
        case 8:
          unit.slice_rasl_n = true;
          break;
        case 9:
          unit.slice_rasl_r = true;
          unit.key = true;
          break;
        case 16:
          unit.slice_bla_w_lp = true;
          break;
        case 17:
          unit.slice_bla_w_radl = true;
          break;
        case 18:
          unit.slice_bla_n_lp = true;
          break;
        case 19:
          unit.slice_idl_w_radl = true;
          unit.key = true;
          break;
        case 20:
          unit.slice_idr_n_lp = true;
          unit.key = true;
          break;
        case 21:
          unit.slice_cra_nut = true;
          unit.key = true;
          break;
        case 32:
          unit.vps = true;
          break;
        case 33:
          unit.sps = sps_default2.parseSPS(unit.body);
          break;
        case 34:
          unit.pps = true;
          break;
        case 35:
          break;
        case 36:
          unit.aud = true;
          break;
        case 37:
          unit.eob = true;
          break;
        case 38:
          unit.fd = true;
          break;
        case 39:
          try {
            unit.sei = sei_default2.parse(unit.body.slice(1));
          } catch (e) {
          }
          break;
        case 40:
          unit.sei = sei_default2.parse(unit.body.slice(1));
          break;
        default:
          break;
      }
    }
  }, {
    key: "getHeaderPositionAnnexB",
    value: function getHeaderPositionAnnexB(buffer) {
      var pos = buffer.position;
      var headerLength = 0;
      var bufferLen = buffer.length;
      while (headerLength !== 3 && headerLength !== 4 && pos < bufferLen - 4) {
        if (buffer.dataview.getInt16(pos) === 0) {
          if (buffer.dataview.getInt16(pos + 2) === 1) {
            headerLength = 4;
          } else if (buffer.dataview.getInt8(pos + 2) === 1) {
            headerLength = 3;
          } else {
            pos++;
          }
        } else {
          pos++;
        }
      }
      if (pos === bufferLen - 4) {
        if (buffer.dataview.getInt16(pos) === 0) {
          if (buffer.dataview.getInt16(pos + 2) === 1) {
            headerLength = 4;
          }
        } else {
          pos++;
          if (buffer.dataview.getInt16(pos) === 0 && buffer.dataview.getInt8(pos) === 1) {
            headerLength = 3;
          } else {
            pos = bufferLen;
          }
        }
      }
      return { pos, headerLength };
    }
  }]);
  return Nalunit3;
}();
var nalunit_default2 = Nalunit2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/compat/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass32 = function() {
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
function _toConsumableArray2(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
function _classCallCheck33(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var REMUX_EVENTS3 = events_default.REMUX_EVENTS;
var caculate = common_exports.caculate;
var Compatibility = function() {
  function Compatibility3() {
    var _this = this;
    _classCallCheck33(this, Compatibility3);
    this.TAG = "Compatibility";
    this.nextAudioDts = 0;
    this.nextVideoDts = 0;
    this.lastAudioSamplesLen = 0;
    this.lastVideoSamplesLen = 0;
    this.lastVideoDts = void 0;
    this.lastAudioDts = void 0;
    this.allAudioSamplesCount = 0;
    this.allVideoSamplesCount = 0;
    this._firstAudioSample = null;
    this._firstVideoSample = null;
    this.filledAudioSamples = [];
    this.filledVideoSamples = [];
    this.videoLastSample = null;
    this.audioLastSample = null;
    Object.defineProperties(this, {
      _videoLargeGap: {
        set: function set2(value) {
          _this.___videoLargeGap = value;
          if (value !== 0) {
            _this.emit(REMUX_EVENTS3.DETECT_LARGE_GAP, "video", value);
          }
        },
        get: function get6() {
          return _this.___videoLargeGap || 0;
        }
      },
      _audioLargeGap: {
        set: function set2(value) {
          _this.___audioLargeGap = value;
          if (value !== 0) {
            _this.emit(REMUX_EVENTS3.DETECT_LARGE_GAP, "audio", value);
          }
        },
        get: function get6() {
          return _this.___audioLargeGap || 0;
        }
      }
    });
    this.audioUnsyncTime = 0;
  }
  _createClass32(Compatibility3, [{
    key: "init",
    value: function init() {
      this.before(REMUX_EVENTS3.REMUX_MEDIA, this.doFix.bind(this));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.nextAudioDts = null;
      this.nextVideoDts = null;
      this.lastAudioSamplesLen = 0;
      this.lastVideoSamplesLen = 0;
      this.lastVideoDts = void 0;
      this.lastAudioDts = void 0;
      this.lastVideoDuration = void 0;
      this._audioLargeGap = 0;
      this._videoLargeGap = 0;
      this.videoLastSample = null;
      this.audioLastSample = null;
      this.filledAudioSamples = [];
      this.filledVideoSamples = [];
      this.audioUnsyncTime = 0;
    }
  }, {
    key: "doFix",
    value: function doFix() {
      var _getFirstSample = this.getFirstSample(), isFirstAudioSamples = _getFirstSample.isFirstAudioSamples, isFirstVideoSamples = _getFirstSample.isFirstVideoSamples;
      this.recordSamplesCount();
      if (this._firstVideoSample) {
        this.fixVideoRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples);
      }
      var _Compatibility$detect = Compatibility3.detectChangeStream(this.videoTrack.samples, isFirstVideoSamples), videoChanged = _Compatibility$detect.changed, videoChangedIdxes = _Compatibility$detect.changedIdxes;
      if (videoChanged) {
        var disContinue = false;
        for (var i = 0; i < videoChangedIdxes.length; i++) {
          if (this.fixChangeStreamVideo(videoChangedIdxes[i], isFirstVideoSamples)) {
            disContinue = true;
          }
        }
        if (!disContinue) {
          this.doFixVideo(isFirstVideoSamples);
        }
      } else {
        this.doFixVideo(isFirstVideoSamples);
      }
      var _Compatibility$detect2 = Compatibility3.detectChangeStream(this.audioTrack.samples, isFirstAudioSamples), audioChanged = _Compatibility$detect2.changed, audioChangedIdxes = _Compatibility$detect2.changedIdxes;
      if (audioChanged) {
        var _disContinue = false;
        for (var _i = 0; _i < audioChangedIdxes.length; _i++) {
          if (this.fixChangeStreamAudio(audioChangedIdxes[_i], isFirstAudioSamples)) {
            _disContinue = true;
          }
        }
        if (!_disContinue) {
          this.doFixAudio(isFirstAudioSamples);
        } else {
          return;
        }
      } else {
        this.doFixAudio(isFirstAudioSamples);
      }
      this.removeInvalidSamples();
    }
  }, {
    key: "doFixVideo",
    value: function doFixVideo(first, streamChangeStart) {
      var _videoTrack = this.videoTrack, videoSamples = _videoTrack.samples, meta = _videoTrack.meta;
      var len = videoSamples.length;
      for (var i = 0; i < len; i++) {
        var sample = videoSamples[i];
        sample.originDts = sample.dts;
        sample.originPts = sample.pts;
      }
      if (!videoSamples || !len || !this._firstVideoSample) {
        return;
      }
      var firstSample = videoSamples[0];
      dev_logger_default.log(this.TAG, "doFixVideo:: lastVideoDts: " + this.lastVideoDts + " ,  _videoLargeGap: " + this._videoLargeGap + " ,streamChangeStart:" + streamChangeStart + ", lastVideoSample:[dts=" + (this.videoLastSample && this.videoLastSample.dts) + " , pts=" + (this.videoLastSample && this.videoLastSample.pts) + "] ,  firstDTS:" + firstSample.dts + " ,firstPTS:" + firstSample.pts + " ,lastDTS:" + videoSamples[len - 1].dts + " , lastPTS: " + videoSamples[len - 1].pts);
      if (!first && this.videoLastSample === null && firstSample.options && firstSample.options.start) {
        if (streamChangeStart !== void 0) {
          streamChangeStart = firstSample.options.start;
        }
      }
      if (!first && streamChangeStart === void 0 && this.videoLastSample && Compatibility3.detectVideoLargeGap(this.videoLastSample ? this.videoLastSample.dts : 0, firstSample.dts + this._videoLargeGap)) {
        this._videoLargeGap = this.videoLastSample.dts + meta.refSampleDuration - firstSample.dts;
      }
      if (this._videoLargeGap !== 0) {
        Compatibility3.doFixLargeGap(videoSamples, this._videoLargeGap);
        if (this._videoLargeGap !== this.preVideoGap) {
          this.preVideoGap = this._videoLargeGap;
          this.emit(REMUX_EVENTS3.DETECT_CHANGE_STREAM_DISCONTINUE, "video", { prevDts: this.videoLastSample && this.videoLastSample.originDts, curDts: firstSample.originDts, duration: meta.refSampleDuration });
        }
      }
      if (!first && streamChangeStart !== void 0) {
        this._videoLargeGap = streamChangeStart - firstSample.dts;
        Compatibility3.doFixLargeGap(videoSamples, this._videoLargeGap);
      }
      if (first && this._firstAudioSample) {
        var videoFirstDts = this._firstVideoSample.originDts;
        var audioFirstDts = this._firstAudioSample.originDts || this._firstAudioSample.dts;
        var gap = videoFirstDts - audioFirstDts;
        if (gap > 2 * meta.refSampleDuration && gap < 10 * meta.refSampleDuration) {
          var fillCount = Math.floor(gap / meta.refSampleDuration);
          for (var _i2 = 0; _i2 < fillCount; _i2++) {
            var clonedFirstSample = Object.assign({}, firstSample);
            clonedFirstSample.dts = videoFirstDts - (_i2 + 1) * meta.refSampleDuration;
            clonedFirstSample.pts = clonedFirstSample.dts + clonedFirstSample.cts;
            videoSamples.unshift(clonedFirstSample);
            this.filledVideoSamples.push({
              dts: clonedFirstSample.dts,
              size: clonedFirstSample.data.byteLength
            });
          }
          this._firstVideoSample = this.filledVideoSamples[0] || this._firstVideoSample;
        } else if (Math.abs(gap) > 2 * meta.refSampleDuration && !this._videoLargeGap) {
          this._videoLargeGap = -1 * gap;
          Compatibility3.doFixLargeGap(videoSamples, -1 * gap);
        }
      }
      var curLastSample = videoSamples.pop();
      if (videoSamples.length) {
        videoSamples[videoSamples.length - 1].duration = curLastSample.dts - videoSamples[videoSamples.length - 1].dts;
      }
      if (this.videoLastSample) {
        var videoLastSample = this.videoLastSample;
        videoLastSample.duration = firstSample.dts - videoLastSample.dts;
        videoSamples.unshift(this.videoLastSample);
      }
      this.videoLastSample = curLastSample;
      if (videoSamples[videoSamples.length - 1]) {
        this.lastVideoDuration = videoSamples[videoSamples.length - 1].duration;
        this.lastVideoDts = videoSamples[videoSamples.length - 1].dts;
      }
      this.videoTrack.samples = videoSamples;
    }
  }, {
    key: "doFixAudio",
    value: function doFixAudio(first, streamChangeStart) {
      var _this2 = this;
      var _audioTrack = this.audioTrack, audioSamples = _audioTrack.samples, meta = _audioTrack.meta;
      if (!audioSamples || !audioSamples.length) {
        return;
      }
      this.fixAudioRefSampleDuration(meta);
      for (var i = 0, len = audioSamples.length; i < len; i++) {
        var sample = audioSamples[i];
        sample.originDts = sample.dts;
      }
      var samplesLen = audioSamples.length;
      var silentFrame = aac_default.getSilentFrame(meta.codec, meta.channelCount);
      var iRefSampleDuration = Math.floor(meta.refSampleDuration);
      var firstSample = this._firstAudioSample;
      var _firstSample = audioSamples[0];
      dev_logger_default.log(this.TAG, "doFixAudio:: audioDtsBase:" + this.audioDtsBase + " ,  _audioLargeGap: " + this._audioLargeGap + ", streamChangeStart:" + streamChangeStart + " ,  nextAudioDts:" + this.nextAudioDts + ",  audio: firstDTS:" + _firstSample.dts + " ,firstPTS:" + _firstSample.pts + " ,lastDTS:" + audioSamples[samplesLen - 1].dts + " , lastPTS: " + audioSamples[samplesLen - 1].pts);
      if (!first && this.nextAudioDts === null && _firstSample.options && _firstSample.options.start) {
        if (streamChangeStart !== void 0) {
          streamChangeStart = _firstSample.options.start;
        }
      }
      if (!first && streamChangeStart === void 0 && this.nextAudioDts && Compatibility3.detectAudioLargeGap(this.nextAudioDts || 0, _firstSample.dts + this._audioLargeGap)) {
        var _audioLargeGap = this.nextAudioDts - _firstSample.dts;
        this._audioLargeGap = Math.abs(_audioLargeGap - this._videoLargeGap) < 200 ? this._videoLargeGap : _audioLargeGap;
      }
      if (this._audioLargeGap !== 0) {
        if (this._audioLargeGap > 0) {
          Compatibility3.doFixLargeGap(audioSamples, this._audioLargeGap);
        }
        if (this._audioLargeGap !== this.preAudioGap) {
          this.preAudioGap = this._audioLargeGap;
          this.emit(REMUX_EVENTS3.DETECT_CHANGE_STREAM_DISCONTINUE, "audio", { prevDts: this.lastAudioOriginDts, curDts: _firstSample.originDts, duration: iRefSampleDuration });
        }
      } else if (!first && (streamChangeStart !== void 0 || Compatibility3.detectAudioLargeGap(this.nextAudioDts, _firstSample.dts))) {
        if (streamChangeStart !== void 0) {
          this.nextAudioDts = streamChangeStart;
        }
        this._audioLargeGap = this.nextAudioDts - _firstSample.dts;
        if (_firstSample.options.start && !_firstSample.options.start.isContinue) {
          Compatibility3.doFixLargeGap(audioSamples, this._audioLargeGap);
        }
      }
      if (this._firstVideoSample && first) {
        var videoFirstPts = this._firstVideoSample.originDts || this._firstVideoSample.dts;
        var _gap = firstSample.dts - videoFirstPts;
        if (_gap === this._videoLargeGap) {
        } else if (_gap > meta.refSampleDuration && _gap < 10 * meta.refSampleDuration) {
          var silentSampleCount = Math.floor((firstSample.dts - videoFirstPts) / meta.refSampleDuration);
          for (var _i3 = 0; _i3 < silentSampleCount; _i3++) {
            var silentSample = {
              data: silentFrame,
              datasize: silentFrame.byteLength,
              dts: firstSample.dts - (_i3 + 1) * meta.refSampleDuration,
              filtered: 0
            };
            audioSamples.unshift(silentSample);
            this.filledAudioSamples.push({
              dts: silentSample.dts,
              size: silentSample.data.byteLength
            });
          }
          this._firstAudioSample = this.filledAudioSamples[0] || this._firstAudioSample;
        } else if (_gap < -1 * meta.refSampleDuration) {
          this._audioLargeGap = -1 * _gap;
          Compatibility3.doFixLargeGap(audioSamples, -1 * _gap);
        }
      }
      var gap = void 0;
      var firstDts = audioSamples[0].dts;
      if (this.nextAudioDts) {
        gap = firstDts - this.nextAudioDts;
        var absGap = Math.abs(gap);
        if (gap >= iRefSampleDuration && gap < 1e4 && silentFrame) {
          var silentFrameCount = Math.ceil(gap / iRefSampleDuration);
          for (var _i4 = 0; _i4 < silentFrameCount; _i4++) {
            var computed = firstDts - (_i4 + 1) * iRefSampleDuration;
            var _silentSample = {
              dts: computed > this.nextAudioDts ? computed : this.nextAudioDts,
              pts: computed > this.nextAudioDts ? computed : this.nextAudioDts,
              datasize: silentFrame.byteLength,
              filtered: 0,
              data: silentFrame
            };
            this.filledAudioSamples.push({
              dts: _silentSample.dts,
              size: _silentSample.data.byteLength
            });
            this.audioTrack.samples.unshift(_silentSample);
            _firstSample = _silentSample;
          }
          this.emit(REMUX_EVENTS3.DETECT_AUDIO_GAP, gap, silentFrameCount);
        } else if (absGap < meta.refSampleDuration && absGap > 0) {
          _firstSample.dts = this.nextAudioDts;
          _firstSample.pts = this.nextAudioDts;
        } else if (gap < 0 && absGap < iRefSampleDuration) {
          Compatibility3.doFixLargeGap(audioSamples, -1 * gap);
          this.emit(REMUX_EVENTS3.DETECT_AUDIO_OVERLAP, gap);
        }
      }
      var nextDts = audioSamples[0].dts + iRefSampleDuration;
      for (var _i5 = 1; _i5 < audioSamples.length; ) {
        var _sample = audioSamples[_i5];
        var delta = _sample.dts - nextDts;
        if (delta <= -1 * iRefSampleDuration) {
          dev_logger_default.warn("drop 1 audio sample for " + delta + " ms overlap");
          audioSamples.splice(_i5, 1);
          continue;
        }
        if (delta >= 10 * iRefSampleDuration) {
          var missingCount = Math.round(delta / iRefSampleDuration);
          if (missingCount > 1e3) {
            break;
          }
          dev_logger_default.warn(this.TAG, "inject " + missingCount + " audio frame for " + delta + " ms gap");
          for (var j = 0; j < missingCount; j++) {
            var _silentSample2 = {
              data: silentFrame,
              datasize: silentFrame.byteLength,
              dts: nextDts,
              originDts: nextDts,
              filtered: 0
            };
            audioSamples.splice(_i5, 0, _silentSample2);
            nextDts += iRefSampleDuration;
            _i5++;
          }
          _sample.dts = _sample.pts = _sample.originDts = nextDts;
          nextDts += iRefSampleDuration;
          _i5++;
        } else {
          _sample.dts = _sample.pts = _sample.originDts = nextDts;
          nextDts += iRefSampleDuration;
          _i5++;
        }
      }
      var unSyncDuration = meta.refSampleDuration - iRefSampleDuration;
      audioSamples.forEach(function(sample2, idx) {
        if (idx !== 0) {
          var _lastSample = audioSamples[idx - 1];
          sample2.dts = sample2.pts = _lastSample.dts + _lastSample.duration;
        }
        sample2.duration = iRefSampleDuration;
        _this2.audioUnsyncTime = _this2.audioUnsyncTime + unSyncDuration;
        if (_this2.audioUnsyncTime >= 1) {
          sample2.duration += 1;
          _this2.audioUnsyncTime -= 1;
        }
      });
      var lastSample = audioSamples[audioSamples.length - 1];
      this.lastAudioDts = lastSample.dts;
      var lastDuration = lastSample.duration;
      this.lastAudioSamplesLen = samplesLen;
      this.nextAudioDts = this.lastAudioDts + (lastDuration || iRefSampleDuration);
      this.lastAudioOriginDts = lastSample.originDts;
      this.audioTrack.samples = Compatibility3.sortAudioSamples(audioSamples);
    }
  }, {
    key: "fixChangeStreamVideo",
    value: function fixChangeStreamVideo(changeIdx) {
      dev_logger_default.log(this.TAG, "fixChangeStreamVideo(), changeIdx=", changeIdx);
      var _videoTrack2 = this.videoTrack, samples = _videoTrack2.samples, meta = _videoTrack2.meta;
      var preDuration = changeIdx === 0 ? this.lastVideoDuration ? this.lastVideoDuration : meta.refSampleDuration : meta.refSampleDuration;
      var prevDts = changeIdx === 0 ? this.lastVideoDts ? this.lastVideoDts : this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
      var curDts = samples[changeIdx].dts;
      var isContinue = Math.abs(prevDts - curDts) <= 1e4;
      this.emit(REMUX_EVENTS3.DETECT_CHANGE_STREAM, "video", curDts);
      if (isContinue) {
        if (!samples[changeIdx].options) {
          samples[changeIdx].options = {
            isContinue: true
          };
        } else {
          samples[changeIdx].options.isContinue = true;
        }
        return false;
      }
      this.emit(REMUX_EVENTS3.DETECT_CHANGE_STREAM_DISCONTINUE, "video", { prevDts, curDts, duration: preDuration });
      var firstPartSamples = samples.slice(0, changeIdx);
      var secondPartSamples = samples.slice(changeIdx);
      var changeSample = samples[changeIdx];
      var streamChangeStart = void 0;
      this._videoLargeGap = 0;
      this.videoLastSample = null;
      this.lastVideoDts = null;
      this.lastVideoDuration = null;
      if (changeSample.options && changeSample.options.start !== void 0) {
        streamChangeStart = changeSample.options.start;
      } else {
        streamChangeStart = prevDts - this.videoDtsBase;
      }
      this.videoTrack.samples = samples.slice(0, changeIdx);
      this.doFixVideo(false);
      this.videoTrack.samples = samples.slice(changeIdx);
      this.doFixVideo(false, streamChangeStart);
      this.videoTrack.samples = firstPartSamples.concat(secondPartSamples);
      return true;
    }
  }, {
    key: "fixChangeStreamAudio",
    value: function fixChangeStreamAudio(changeIdx) {
      dev_logger_default.log(this.TAG, "fixChangeStreamAudio(), changeIdx=", changeIdx);
      var _audioTrack2 = this.audioTrack, samples = _audioTrack2.samples, meta = _audioTrack2.meta;
      var prevDts = changeIdx === 0 ? this.lastAudioDts : samples[changeIdx - 1].dts;
      var curDts = samples[changeIdx].dts;
      var isContinue = Math.abs(prevDts - curDts) <= 1e4;
      this.emit(REMUX_EVENTS3.DETECT_CHANGE_STREAM, "audio", curDts);
      if (isContinue) {
        if (!samples[changeIdx].options) {
          samples[changeIdx].options = {
            isContinue: true
          };
        } else {
          samples[changeIdx].options.isContinue = true;
        }
        return false;
      }
      this.emit(REMUX_EVENTS3.DETECT_CHANGE_STREAM_DISCONTINUE, "audio", { prevDts, curDts, duration: meta.refSampleDuration });
      this._audioLargeGap = 0;
      var cacheNextAudioDts = this.nextAudioDts;
      this.nextAudioDts = null;
      var firstPartSamples = samples.slice(0, changeIdx);
      var secondPartSamples = samples.slice(changeIdx);
      var changeSample = samples[changeIdx];
      var streamChangeStart = void 0;
      if (changeSample.options && changeSample.options.start !== void 0) {
        streamChangeStart = changeSample.options.start;
      } else {
        streamChangeStart = cacheNextAudioDts;
        changeSample.options.isContinue = true;
      }
      this.audioTrack.samples = firstPartSamples;
      this.doFixAudio(false);
      this.audioTrack.samples = secondPartSamples;
      this.doFixAudio(false, streamChangeStart);
      this.audioTrack.samples = firstPartSamples.concat(secondPartSamples);
      return true;
    }
  }, {
    key: "getFirstSample",
    value: function getFirstSample() {
      var videoSamples = this.videoTrack.samples;
      var audioSamples = this.audioTrack.samples;
      var isFirstVideoSamples = false;
      var isFirstAudioSamples = false;
      if (!this._firstVideoSample && videoSamples.length) {
        this._firstVideoSample = Compatibility3.findFirstVideoSample(videoSamples);
        this.removeInvalidSamples();
        isFirstVideoSamples = true;
      }
      if (!this._firstAudioSample && audioSamples.length) {
        this._firstAudioSample = Compatibility3.findFirstAudioSample(audioSamples);
        this.removeInvalidSamples();
        isFirstAudioSamples = true;
      }
      return {
        isFirstVideoSamples,
        isFirstAudioSamples
      };
    }
  }, {
    key: "fixVideoRefSampleDuration",
    value: function fixVideoRefSampleDuration(meta, samples) {
      if (!meta) {
        return;
      }
      var allSamplesCount = this.allVideoSamplesCount;
      var firstDts = this._firstVideoSample.dts;
      var filledSamplesCount = this.filledVideoSamples.length;
      if (!Compatibility3.isRefSampleDurationValid(meta.refSampleDuration)) {
        if (samples.length >= 1) {
          var lastDts = samples[samples.length - 1].dts;
          var fixed = Math.floor((lastDts - firstDts) / (allSamplesCount + filledSamplesCount - 1));
          if (Compatibility3.isRefSampleDurationValid(fixed)) {
            meta.refSampleDuration = fixed;
          }
        }
      } else if (meta.refSampleDuration) {
        if (samples.length >= 5) {
          var _lastDts = samples[samples.length - 1].dts;
          var _firstDts = samples[0].dts;
          var durationAvg = (_lastDts - _firstDts) / (samples.length - 1);
          if (durationAvg > 0 && durationAvg < 1e3) {
            var _fixed = Math.floor(Math.abs(meta.refSampleDuration - durationAvg) <= 5 ? meta.refSampleDuration : durationAvg);
            if (Compatibility3.isRefSampleDurationValid(_fixed)) {
              meta.refSampleDuration = _fixed;
            }
          }
        }
      }
      if (!Compatibility3.isRefSampleDurationValid(meta.refSampleDuration)) {
        meta.refSampleDuration = 66;
      }
    }
  }, {
    key: "fixAudioRefSampleDuration",
    value: function fixAudioRefSampleDuration(meta) {
      if (!meta) {
        return;
      }
      meta.refSampleDuration = meta.timescale * 1024 / meta.sampleRate;
    }
  }, {
    key: "recordSamplesCount",
    value: function recordSamplesCount() {
      var audioTrack = this.audioTrack, videoTrack = this.videoTrack;
      this.allAudioSamplesCount += audioTrack.samples.length;
      this.allVideoSamplesCount += videoTrack.samples.length;
    }
  }, {
    key: "removeInvalidSamples",
    value: function removeInvalidSamples() {
      var firstAudioSample = this.audioTrack.samples[0];
      var firstVideoSample = this.videoTrack.samples[0];
      if (firstAudioSample) {
        this.audioTrack.samples = this.audioTrack.samples.filter(function(sample, index) {
          if (sample === firstAudioSample) {
            return true;
          }
          return sample.dts >= firstAudioSample.dts;
        });
      }
      if (firstVideoSample) {
        this.videoTrack.samples = this.videoTrack.samples.filter(function(sample, index) {
          if (sample === firstVideoSample) {
            return true;
          }
          return sample.dts >= firstVideoSample.dts;
        });
      }
    }
  }, {
    key: "getStreamChangeStart",
    value: function getStreamChangeStart(sample) {
      if (sample.options && sample.options.start) {
        return sample.options.start - this.dtsBase;
      }
      return Infinity;
    }
  }, {
    key: "tracks",
    get: function get6() {
      return this._context.getInstance("TRACKS");
    }
  }, {
    key: "audioTrack",
    get: function get6() {
      if (this.tracks && this.tracks.audioTrack) {
        return this.tracks.audioTrack;
      }
      return {
        samples: [],
        meta: {}
      };
    }
  }, {
    key: "videoTrack",
    get: function get6() {
      if (this.tracks && this.tracks.videoTrack) {
        return this.tracks.videoTrack;
      }
      return {
        samples: [],
        meta: {}
      };
    }
  }, {
    key: "dtsBase",
    get: function get6() {
      var remuxer = this._context.getInstance("MP4_REMUXER");
      if (remuxer) {
        return remuxer._dtsBase;
      }
      return 0;
    }
  }, {
    key: "audioDtsBase",
    get: function get6() {
      var remuxer = this._context.getInstance("MP4_REMUXER");
      if (remuxer && remuxer._audioDtsBase !== null) {
        return remuxer._audioDtsBase;
      }
      return this.dtsBase;
    }
  }, {
    key: "videoDtsBase",
    get: function get6() {
      var remuxer = this._context.getInstance("MP4_REMUXER");
      if (remuxer && remuxer._videoDtsBase !== null) {
        return remuxer._videoDtsBase;
      }
      return this.dtsBase;
    }
  }], [{
    key: "sortAudioSamples",
    value: function sortAudioSamples(samples) {
      if (samples.length === 1) {
        return samples;
      }
      return [].concat(_toConsumableArray2(samples)).sort(function(a, b) {
        return a.dts - b.dts;
      });
    }
  }, {
    key: "isRefSampleDurationValid",
    value: function isRefSampleDurationValid(refSampleDuration) {
      return refSampleDuration && refSampleDuration > 0 && !Number.isNaN(refSampleDuration);
    }
  }, {
    key: "findFirstAudioSample",
    value: function findFirstAudioSample(samples) {
      if (!samples || samples.length === 0) {
        return null;
      }
      return Compatibility3.sortAudioSamples(samples)[0];
    }
  }, {
    key: "findFirstVideoSample",
    value: function findFirstVideoSample(samples) {
      if (!samples.length) {
        return null;
      }
      var sorted = [].concat(_toConsumableArray2(samples)).sort(function(a, b) {
        return a.dts - b.dts;
      });
      for (var i = 0, len = sorted.length; i < len; i++) {
        if (sorted[i].isKeyframe) {
          return sorted[i];
        }
      }
    }
  }, {
    key: "detectVideoLargeGap",
    value: function detectVideoLargeGap(nextDts, firstSampleDts) {
      if (nextDts === null) {
        return;
      }
      var delta = 1e4;
      return nextDts - firstSampleDts >= delta || firstSampleDts - nextDts >= delta;
    }
  }, {
    key: "detectAudioLargeGap",
    value: function detectAudioLargeGap(nextDts, firstSampleDts) {
      if (nextDts === null) {
        return;
      }
      return nextDts - firstSampleDts >= 1e3 || firstSampleDts - nextDts >= 1e3;
    }
  }, {
    key: "doFixLargeGap",
    value: function doFixLargeGap(samples, gap) {
      for (var i = 0, len = samples.length; i < len; i++) {
        var sample = samples[i];
        sample.dts += gap;
        if (sample.pts) {
          sample.pts += gap;
        }
      }
    }
  }, {
    key: "detectChangeStream",
    value: function detectChangeStream(samples, isFirst) {
      var changed = false;
      var changedIdxes = [];
      for (var i = 0, len = samples.length; i < len; i++) {
        var sample = samples[i];
        if (sample.options && sample.options.meta && !(isFirst && i === 0)) {
          changed = true;
          changedIdxes.push(i);
        }
      }
      return {
        changed,
        changedIdxes
      };
    }
  }]);
  return Compatibility3;
}();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/compat/hls.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass33 = function() {
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
function _toConsumableArray3(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
function _classCallCheck34(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var REMUX_EVENTS4 = events_default.REMUX_EVENTS;
var caculate2 = common_exports.caculate;
var Compatibility2 = function() {
  function Compatibility3() {
    var _this = this;
    _classCallCheck34(this, Compatibility3);
    this.TAG = "Compatibility";
    this.nextAudioDts = 0;
    this.nextVideoDts = 0;
    this.lastAudioSamplesLen = 0;
    this.lastVideoSamplesLen = 0;
    this.lastVideoDts = void 0;
    this.lastAudioDts = void 0;
    this.allAudioSamplesCount = 0;
    this.allVideoSamplesCount = 0;
    this._firstAudioSample = null;
    this._firstVideoSample = null;
    this.filledAudioSamples = [];
    this.filledVideoSamples = [];
    this._lastSegmentId = 0;
    this._currentSegmentId = 0;
    this.videoLastSample = null;
    this.audioLastSample = null;
    Object.defineProperties(this, {
      _videoLargeGap: {
        set: function set2(value) {
          _this.___videoLargeGap = value;
          if (value !== 0) {
            _this.emit(REMUX_EVENTS4.DETECT_LARGE_GAP, "video", value);
          }
        },
        get: function get6() {
          return _this.___videoLargeGap || 0;
        }
      },
      _audioLargeGap: {
        set: function set2(value) {
          _this.___audioLargeGap = value;
          if (value !== 0) {
            _this.emit(REMUX_EVENTS4.DETECT_LARGE_GAP, "audio", value);
          }
        },
        get: function get6() {
          return _this.___audioLargeGap || 0;
        }
      }
    });
    this.audioUnsyncTime = 0;
  }
  _createClass33(Compatibility3, [{
    key: "init",
    value: function init() {
      this.before(REMUX_EVENTS4.REMUX_MEDIA, this.doFix.bind(this));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.nextAudioDts = null;
      this.nextVideoDts = null;
      this.lastAudioSamplesLen = 0;
      this.lastVideoSamplesLen = 0;
      this.lastVideoDts = void 0;
      this.lastAudioDts = void 0;
      this._audioLargeGap = 0;
      this._videoLargeGap = 0;
      this.videoLastSample = null;
      this.audioLastSample = null;
      this.filledAudioSamples = [];
      this.filledVideoSamples = [];
      this.audioUnsyncTime = 0;
    }
  }, {
    key: "_isSegmentsContinuous",
    value: function _isSegmentsContinuous() {
      return this._lastSegmentId === 0 || this._currentSegmentId - this._lastSegmentId === 1;
    }
  }, {
    key: "doFix",
    value: function doFix() {
      var ops = void 0;
      var vSamp0 = void 0;
      var aSamp0 = void 0;
      var avDelta = 0;
      if (this.videoTrack.samples.length) {
        vSamp0 = this.videoTrack.samples[0];
        ops = vSamp0.options;
        if (dev_logger_default.long) {
          dev_logger_default.log(this.TAG, this.videoTrack.samples.slice());
        }
      }
      if (this.audioTrack.samples.length) {
        aSamp0 = this.audioTrack.samples[0];
        if (dev_logger_default.long) {
          dev_logger_default.log(this.TAG, this.audioTrack.samples.slice());
        }
      }
      if (vSamp0 && aSamp0) {
        avDelta = aSamp0.dts - vSamp0.dts;
      }
      this._currentSegmentId = ops && ops.id || this._currentSegmentId + 1;
      dev_logger_default.log(this.TAG, "lastSeg:" + this._lastSegmentId + " , currentSeg:" + this._currentSegmentId + ", discontinue:" + (ops && ops.discontinue) + " vSamp0:" + (vSamp0 && vSamp0.dts) + " aSamp0:" + (aSamp0 && aSamp0.dts));
      var _getFirstSample = this.getFirstSample(), isFirstAudioSamples = _getFirstSample.isFirstAudioSamples, isFirstVideoSamples = _getFirstSample.isFirstVideoSamples;
      this.recordSamplesCount();
      if (this._firstVideoSample) {
        this.fixVideoRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples);
      }
      var _Compatibility$detect = Compatibility3.detectChangeStream(this.videoTrack.samples, isFirstVideoSamples), videoChanged = _Compatibility$detect.changed, videoChangedIdxes = _Compatibility$detect.changedIdxes;
      if (videoChanged) {
        var disContinue = false;
        for (var i = 0; i < videoChangedIdxes.length; i++) {
          if (this.fixChangeStreamVideo(videoChangedIdxes[i], isFirstVideoSamples)) {
            disContinue = true;
          }
        }
        if (!disContinue) {
          this.doFixVideo(isFirstVideoSamples);
        }
      } else {
        if (!this._isSegmentsContinuous() && ops && ops.start !== void 0) {
          this.videoLastSample = null;
          var start = ops.start;
          if (avDelta < 0) {
            start -= avDelta;
          }
          dev_logger_default.log(this.TAG, "fix video for _isSegmentsContinuous()\uFF0C delta:", avDelta);
          this.doFixVideo(isFirstVideoSamples, start);
          this.emit(REMUX_EVENTS4.DETECT_FRAG_ID_DISCONTINUE, ops.start / 1e3);
        } else {
          this.doFixVideo(isFirstVideoSamples);
        }
      }
      this._appendSampleForLastSegment(ops && ops.isLast);
      var _Compatibility$detect2 = Compatibility3.detectChangeStream(this.audioTrack.samples, isFirstAudioSamples), audioChanged = _Compatibility$detect2.changed, audioChangedIdxes = _Compatibility$detect2.changedIdxes;
      if (audioChanged) {
        var _disContinue = false;
        for (var _i = 0; _i < audioChangedIdxes.length; _i++) {
          if (this.fixChangeStreamAudio(audioChangedIdxes[_i], isFirstAudioSamples)) {
            _disContinue = true;
          }
        }
        if (!_disContinue) {
          this.doFixAudio(isFirstAudioSamples);
        } else {
          return;
        }
      } else {
        if (!this._isSegmentsContinuous() && ops && ops.start !== void 0) {
          dev_logger_default.log(this.TAG, "fix audio for _isSegmentsContinuous()");
          var sam0 = this.audioTrack.samples[0];
          this.nextAudioDts = ops.start || sam0 && sam0.dts;
          this.doFixAudio(isFirstAudioSamples, ops.start);
          this.emit(REMUX_EVENTS4.DETECT_FRAG_ID_DISCONTINUE, ops.start / 1e3);
        } else {
          this.doFixAudio(isFirstAudioSamples);
        }
      }
      this.removeInvalidSamples();
      this._lastSegmentId = this._currentSegmentId;
    }
  }, {
    key: "doFixVideo",
    value: function doFixVideo(first, streamChangeStart) {
      var _videoTrack = this.videoTrack, videoSamples = _videoTrack.samples, meta = _videoTrack.meta;
      var len = videoSamples.length;
      for (var i = 0; i < len; i++) {
        var sample = videoSamples[i];
        sample.originDts = sample.dts;
        sample.originPts = sample.pts;
      }
      if (!videoSamples || !len || !this._firstVideoSample) {
        return;
      }
      var firstSample = videoSamples[0];
      dev_logger_default.log(this.TAG, "doFixVideo:: lastVideoDts: " + this.lastVideoDts + " ,  _videoLargeGap: " + this._videoLargeGap + " ,streamChangeStart:" + streamChangeStart + ", lastVideoSample:[dts=" + (this.videoLastSample && this.videoLastSample.dts) + " , pts=" + (this.videoLastSample && this.videoLastSample.pts) + "] ,  firstDTS:" + firstSample.dts + " ,firstPTS:" + firstSample.pts + " ,lastDTS:" + videoSamples[len - 1].dts + " , lastPTS: " + videoSamples[len - 1].pts);
      if (!first && streamChangeStart === void 0 && this.videoLastSample && Compatibility3.detectVideoLargeGap(this.videoLastSample ? this.videoLastSample.dts : 0, firstSample.dts + this._videoLargeGap)) {
        this._videoLargeGap = this.videoLastSample.dts + meta.refSampleDuration - firstSample.dts;
      }
      if (this._videoLargeGap !== 0) {
        Compatibility3.doFixLargeGap(videoSamples, this._videoLargeGap);
        if (this._videoLargeGap !== this.preVideoGap) {
          this.preVideoGap = this._videoLargeGap;
          this.emit(REMUX_EVENTS4.DETECT_CHANGE_STREAM_DISCONTINUE, "video", { prevDts: this.videoLastSample && this.videoLastSample.originDts, curDts: firstSample.originDts });
        }
      }
      if (!first && streamChangeStart !== void 0 && streamChangeStart !== 0) {
        this._videoLargeGap = streamChangeStart - firstSample.dts;
        Compatibility3.doFixLargeGap(videoSamples, this._videoLargeGap);
      }
      if (first && this._firstAudioSample) {
        var videoFirstDts = this._firstVideoSample.originDts;
        var audioFirstDts = this._firstAudioSample.dts;
        var gap = videoFirstDts - audioFirstDts;
        if (gap > 2 * meta.refSampleDuration && gap < 10 * meta.refSampleDuration) {
          var fillCount = Math.floor(gap / meta.refSampleDuration);
          for (var _i2 = 0; _i2 < fillCount; _i2++) {
            var clonedFirstSample = Object.assign({}, firstSample);
            clonedFirstSample.dts = videoFirstDts - (_i2 + 1) * meta.refSampleDuration;
            clonedFirstSample.pts = clonedFirstSample.dts + clonedFirstSample.cts;
            videoSamples.unshift(clonedFirstSample);
            this.filledVideoSamples.push({
              dts: clonedFirstSample.dts,
              size: clonedFirstSample.data.byteLength
            });
          }
          this._firstVideoSample = this.filledVideoSamples[0] || this._firstVideoSample;
        } else if (Math.abs(gap) > 2 * meta.refSampleDuration && !this._videoLargeGap) {
          this._videoLargeGap = -1 * gap;
          Compatibility3.doFixLargeGap(videoSamples, -1 * gap);
        }
      }
      var segLen = videoSamples.length;
      for (var _i3 = 1; _i3 < segLen; _i3++) {
        var c = videoSamples[_i3];
        var pre = videoSamples[_i3 - 1];
        var cts = c.dts - c.pts;
        if (Math.abs(cts) < 2e3) {
          if (Math.abs(c.dts - pre.dts) > 1e4) {
            c.dts = pre.dts + meta.refSampleDuration;
            c.pts = pre.pts + meta.refSampleDuration;
          }
        }
      }
      var curLastSample = videoSamples.pop();
      if (videoSamples.length) {
        videoSamples[videoSamples.length - 1].duration = curLastSample.dts - videoSamples[videoSamples.length - 1].dts;
      }
      if (segLen < 4) {
        var _sample = videoSamples[videoSamples.length - 1];
        _sample = _sample || curLastSample;
        var duration = _sample.options && _sample.options.duration;
        var refDuration = meta.refSampleDuration;
        if (duration && refDuration && duration / refDuration > 5) {
          var pts = _sample.pts;
          var dts = _sample.dts;
          for (var _i4 = 0; _i4 < 3; _i4++) {
            dts += refDuration;
            pts += refDuration;
            var sam = Object.assign({}, _sample, { dts, pts });
            if (_i4 === 2) {
              sam.duration = duration;
            }
            videoSamples.push(sam);
          }
        }
        curLastSample = null;
      }
      if (this.videoLastSample) {
        var videoLastSample = this.videoLastSample;
        videoLastSample.duration = firstSample.dts - videoLastSample.dts;
        videoSamples.unshift(this.videoLastSample);
      }
      this.videoLastSample = curLastSample;
      if (videoSamples[videoSamples.length - 1]) {
        this.lastVideoDts = videoSamples[videoSamples.length - 1].dts;
      }
      this.videoTrack.samples = videoSamples;
    }
  }, {
    key: "_appendSampleForLastSegment",
    value: function _appendSampleForLastSegment(isLast) {
      if (isLast && this.videoLastSample) {
        this.videoTrack.samples.push(this.videoLastSample);
      }
    }
  }, {
    key: "doFixAudio",
    value: function doFixAudio(first, streamChangeStart) {
      var _this2 = this;
      var _audioTrack = this.audioTrack, audioSamples = _audioTrack.samples, meta = _audioTrack.meta;
      if (!audioSamples || !audioSamples.length) {
        return;
      }
      this.fixAudioRefSampleDuration(meta);
      for (var i = 0, len = audioSamples.length; i < len; i++) {
        var sample = audioSamples[i];
        sample.originDts = sample.dts;
      }
      var samplesLen = audioSamples.length;
      var silentFrame = aac_default.getSilentFrame(meta.originCodec, meta.channelCount);
      var iRefSampleDuration = Math.floor(meta.refSampleDuration);
      var firstSample = this._firstAudioSample;
      var _firstSample = audioSamples[0];
      dev_logger_default.log(this.TAG, "doFixAudio:: audioDtsBase:" + this.audioDtsBase + " ,  _audioLargeGap: " + this._audioLargeGap + ", streamChangeStart:" + streamChangeStart + " ,  nextAudioDts:" + this.nextAudioDts + ",  audio: firstDTS:" + _firstSample.dts + " ,firstPTS:" + _firstSample.pts + " ,lastDTS:" + audioSamples[samplesLen - 1].dts + " , lastPTS: " + audioSamples[samplesLen - 1].pts);
      if (!first && this.nextAudioDts === null && _firstSample.options && _firstSample.options.start) {
        if (streamChangeStart !== void 0) {
          streamChangeStart = _firstSample.options.start;
        }
      }
      if (!first && streamChangeStart === void 0 && this.nextAudioDts && Compatibility3.detectAudioLargeGap(this.nextAudioDts || 0, _firstSample.dts + this._audioLargeGap)) {
        var _audioLargeGap = this.nextAudioDts - _firstSample.dts;
        this._audioLargeGap = Math.abs(_audioLargeGap - this._videoLargeGap) < 200 ? this._videoLargeGap : _audioLargeGap;
      }
      if (this._audioLargeGap !== 0) {
        Compatibility3.doFixLargeGap(audioSamples, this._audioLargeGap);
        if (this._audioLargeGap !== this.preAudioGap) {
          this.preAudioGap = this._audioLargeGap;
          this.emit(REMUX_EVENTS4.DETECT_CHANGE_STREAM_DISCONTINUE, "audio", { prevDts: this.lastAudioOriginDts, curDts: _firstSample.originDts });
        }
      } else if (!first && (streamChangeStart !== void 0 || Compatibility3.detectAudioLargeGap(this.nextAudioDts, _firstSample.dts))) {
        if (streamChangeStart !== void 0 && streamChangeStart !== 0) {
          this.nextAudioDts = streamChangeStart;
        }
        this._audioLargeGap = this.nextAudioDts - _firstSample.dts;
        if (_firstSample.options.start && !_firstSample.options.start.isContinue) {
          Compatibility3.doFixLargeGap(audioSamples, this._audioLargeGap);
        }
      }
      if (this._firstVideoSample && first) {
        var videoFirstPts = this._firstVideoSample.originDts || this._firstVideoSample.dts;
        var _gap = firstSample.dts - videoFirstPts;
        if (_gap === this._videoLargeGap) {
        } else if (_gap > meta.refSampleDuration && _gap < 10 * meta.refSampleDuration) {
          var silentSampleCount = Math.floor((firstSample.dts - videoFirstPts) / meta.refSampleDuration);
          dev_logger_default.warn(this.TAG, "fill " + silentSampleCount + " frames for av align");
          for (var _i5 = 0; _i5 < silentSampleCount; _i5++) {
            var silentSample = {
              data: silentFrame,
              datasize: silentFrame.byteLength,
              dts: firstSample.dts - (_i5 + 1) * meta.refSampleDuration,
              filtered: 0
            };
            audioSamples.unshift(silentSample);
            this.filledAudioSamples.push({
              dts: silentSample.dts,
              size: silentSample.data.byteLength
            });
          }
          this._firstAudioSample = this.filledAudioSamples[0] || this._firstAudioSample;
        } else if (_gap < -1 * meta.refSampleDuration) {
          this._audioLargeGap = -1 * _gap;
          Compatibility3.doFixLargeGap(audioSamples, -1 * _gap);
        }
      }
      var gap = void 0;
      var firstDts = audioSamples[0].dts;
      if (this.nextAudioDts) {
        gap = firstDts - this.nextAudioDts;
        var absGap = Math.abs(gap);
        if (gap >= iRefSampleDuration && gap < 1e4 && silentFrame) {
          var silentFrameCount = Math.ceil(gap / iRefSampleDuration);
          for (var _i6 = 0; _i6 < silentFrameCount; _i6++) {
            var computed = firstDts - (_i6 + 1) * iRefSampleDuration;
            var _silentSample = {
              dts: computed > this.nextAudioDts ? computed : this.nextAudioDts,
              pts: computed > this.nextAudioDts ? computed : this.nextAudioDts,
              datasize: silentFrame.byteLength,
              filtered: 0,
              data: silentFrame
            };
            this.filledAudioSamples.push({
              dts: _silentSample.dts,
              size: _silentSample.data.byteLength
            });
            this.audioTrack.samples.unshift(_silentSample);
            _firstSample = _silentSample;
          }
          this.emit(REMUX_EVENTS4.DETECT_AUDIO_GAP, gap, silentFrameCount);
        } else if (absGap < meta.refSampleDuration && absGap > 0) {
          _firstSample.dts = this.nextAudioDts;
          _firstSample.pts = this.nextAudioDts;
        } else if (gap < 0 && absGap < iRefSampleDuration) {
          Compatibility3.doFixLargeGap(audioSamples, -1 * gap);
          this.emit(REMUX_EVENTS4.DETECT_AUDIO_OVERLAP, gap);
        }
      }
      var nextDts = audioSamples[0].dts + iRefSampleDuration;
      for (var _i7 = 1; _i7 < audioSamples.length; ) {
        var _sample2 = audioSamples[_i7];
        var delta = _sample2.dts - nextDts;
        if (delta <= -1 * iRefSampleDuration) {
          dev_logger_default.warn("drop 1 audio sample for " + delta + " ms overlap");
          audioSamples.splice(_i7, 1);
          continue;
        }
        if (delta >= 10 * iRefSampleDuration) {
          var missingCount = Math.round(delta / iRefSampleDuration);
          if (missingCount > 1e3) {
            break;
          }
          dev_logger_default.warn(this.TAG, "inject " + missingCount + " audio frame for " + delta + " ms gap, index=" + _i7);
          for (var j = 0; j < missingCount; j++) {
            var _silentSample2 = {
              data: silentFrame,
              datasize: silentFrame.byteLength,
              dts: nextDts,
              originDts: nextDts,
              filtered: 0
            };
            audioSamples.splice(_i7, 0, _silentSample2);
            nextDts += iRefSampleDuration;
            _i7++;
          }
          _sample2.dts = _sample2.pts = _sample2.originDts = nextDts;
          nextDts += iRefSampleDuration;
          _i7++;
        } else {
          _sample2.dts = _sample2.pts = _sample2.originDts = nextDts;
          nextDts += iRefSampleDuration;
          _i7++;
        }
      }
      var unSyncDuration = meta.refSampleDuration - iRefSampleDuration;
      audioSamples.forEach(function(sample2, idx) {
        if (idx !== 0) {
          var _lastSample = audioSamples[idx - 1];
          sample2.dts = sample2.pts = _lastSample.dts + _lastSample.duration;
        }
        sample2.duration = iRefSampleDuration;
        _this2.audioUnsyncTime = _this2.audioUnsyncTime + unSyncDuration;
        if (_this2.audioUnsyncTime >= 1) {
          sample2.duration += 1;
          _this2.audioUnsyncTime -= 1;
        }
      });
      var lastSample = audioSamples[audioSamples.length - 1];
      this.lastAudioDts = lastSample.dts;
      var lastDuration = lastSample.duration;
      this.lastAudioSamplesLen = samplesLen;
      this.nextAudioDts = this.lastAudioDts + (lastDuration || iRefSampleDuration);
      this.lastAudioOriginDts = lastSample.originDts;
      this.audioTrack.samples = Compatibility3.sortAudioSamples(audioSamples);
    }
  }, {
    key: "fixChangeStreamVideo",
    value: function fixChangeStreamVideo(changeIdx) {
      dev_logger_default.log(this.TAG, "fixChangeStreamVideo(), changeIdx=", changeIdx);
      var samples = this.videoTrack.samples;
      var prevDts = changeIdx === 0 ? this.lastVideoDts ? this.lastVideoDts : this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
      var curDts = samples[changeIdx].dts;
      var isContinue = Math.abs(prevDts - curDts) <= 1e4;
      this.emit(REMUX_EVENTS4.DETECT_CHANGE_STREAM, "video", curDts);
      if (isContinue) {
        if (!samples[changeIdx].options) {
          samples[changeIdx].options = {
            isContinue: true
          };
        } else {
          samples[changeIdx].options.isContinue = true;
        }
        return false;
      }
      this.emit(REMUX_EVENTS4.DETECT_CHANGE_STREAM_DISCONTINUE, "video", { prevDts, curDts });
      var firstPartSamples = samples.slice(0, changeIdx);
      var secondPartSamples = samples.slice(changeIdx);
      var changeSample = samples[changeIdx];
      var streamChangeStart = void 0;
      this._videoLargeGap = 0;
      this.videoLastSample = null;
      this.lastVideoDts = null;
      if (changeSample.options && changeSample.options.start !== void 0) {
        streamChangeStart = changeSample.options.start;
      } else {
        streamChangeStart = prevDts - this.videoDtsBase;
      }
      this.videoTrack.samples = samples.slice(0, changeIdx);
      this.doFixVideo(false);
      this.videoTrack.samples = samples.slice(changeIdx);
      this.doFixVideo(false, streamChangeStart);
      this.videoTrack.samples = firstPartSamples.concat(secondPartSamples);
      return true;
    }
  }, {
    key: "fixChangeStreamAudio",
    value: function fixChangeStreamAudio(changeIdx) {
      dev_logger_default.log(this.TAG, "fixChangeStreamAudio(), changeIdx=", changeIdx);
      var samples = this.audioTrack.samples;
      var prevDts = changeIdx === 0 ? this.lastAudioDts : samples[changeIdx - 1].dts;
      var curDts = samples[changeIdx].dts;
      var isContinue = Math.abs(prevDts - curDts) <= 1e4;
      this.emit(REMUX_EVENTS4.DETECT_CHANGE_STREAM, "audio", curDts);
      if (isContinue) {
        if (!samples[changeIdx].options) {
          samples[changeIdx].options = {
            isContinue: true
          };
        } else {
          samples[changeIdx].options.isContinue = true;
        }
        return false;
      }
      this.emit(REMUX_EVENTS4.DETECT_CHANGE_STREAM_DISCONTINUE, "audio", { prevDts, curDts });
      this._audioLargeGap = 0;
      var cacheNextAudioDts = this.nextAudioDts;
      this.nextAudioDts = null;
      var firstPartSamples = samples.slice(0, changeIdx);
      var secondPartSamples = samples.slice(changeIdx);
      var changeSample = samples[changeIdx];
      var streamChangeStart = void 0;
      if (changeSample.options && changeSample.options.start !== void 0) {
        streamChangeStart = changeSample.options.start;
      } else {
        streamChangeStart = cacheNextAudioDts;
        changeSample.options.isContinue = true;
      }
      this.audioTrack.samples = firstPartSamples;
      this.doFixAudio(false);
      this.audioTrack.samples = secondPartSamples;
      this.doFixAudio(false, streamChangeStart);
      this.audioTrack.samples = firstPartSamples.concat(secondPartSamples);
      return true;
    }
  }, {
    key: "getFirstSample",
    value: function getFirstSample() {
      var videoSamples = this.videoTrack.samples;
      var audioSamples = this.audioTrack.samples;
      var isFirstVideoSamples = false;
      var isFirstAudioSamples = false;
      if (!this._firstVideoSample && videoSamples.length) {
        this._firstVideoSample = Compatibility3.findFirstVideoSample(videoSamples);
        this.removeInvalidSamples();
        isFirstVideoSamples = true;
      }
      if (!this._firstAudioSample && audioSamples.length) {
        this._firstAudioSample = Compatibility3.findFirstAudioSample(audioSamples);
        this.removeInvalidSamples();
        isFirstAudioSamples = true;
      }
      return {
        isFirstVideoSamples,
        isFirstAudioSamples
      };
    }
  }, {
    key: "fixVideoRefSampleDuration",
    value: function fixVideoRefSampleDuration(meta, samples) {
      if (!meta) {
        return;
      }
      var allSamplesCount = this.allVideoSamplesCount;
      var firstDts = this._firstVideoSample.dts;
      var filledSamplesCount = this.filledVideoSamples.length;
      if (!Compatibility3.isRefSampleDurationValid(meta.refSampleDuration)) {
        if (samples.length >= 1) {
          var lastDts = samples[samples.length - 1].dts;
          var fixed = Math.floor((lastDts - firstDts) / (allSamplesCount + filledSamplesCount - 1));
          if (Compatibility3.isRefSampleDurationValid(fixed)) {
            meta.refSampleDuration = fixed;
          }
        }
      } else if (meta.refSampleDuration) {
        if (samples.length >= 5) {
          var _lastDts = samples[samples.length - 1].dts;
          var _firstDts = samples[0].dts;
          var durationAvg = (_lastDts - _firstDts) / (samples.length - 1);
          if (durationAvg > 0 && durationAvg < 1e3) {
            var _fixed = Math.floor(Math.abs(meta.refSampleDuration - durationAvg) <= 5 ? meta.refSampleDuration : durationAvg);
            if (Compatibility3.isRefSampleDurationValid(_fixed)) {
              meta.refSampleDuration = _fixed;
            }
          }
        }
      }
      if (!Compatibility3.isRefSampleDurationValid(meta.refSampleDuration)) {
        meta.refSampleDuration = 66;
      }
    }
  }, {
    key: "fixAudioRefSampleDuration",
    value: function fixAudioRefSampleDuration(meta) {
      if (!meta) {
        return;
      }
      meta.refSampleDuration = meta.timescale * 1024 / meta.sampleRate;
    }
  }, {
    key: "recordSamplesCount",
    value: function recordSamplesCount() {
      var audioTrack = this.audioTrack, videoTrack = this.videoTrack;
      this.allAudioSamplesCount += audioTrack.samples.length;
      this.allVideoSamplesCount += videoTrack.samples.length;
    }
  }, {
    key: "removeInvalidSamples",
    value: function removeInvalidSamples() {
      var firstAudioSample = this.audioTrack.samples[0];
      var firstVideoSample = this.videoTrack.samples[0];
      if (firstAudioSample) {
        this.audioTrack.samples = this.audioTrack.samples.filter(function(sample, index) {
          if (sample === firstAudioSample) {
            return true;
          }
          return sample.dts >= firstAudioSample.dts;
        });
      }
      if (firstVideoSample) {
        this.videoTrack.samples = this.videoTrack.samples.filter(function(sample, index) {
          if (sample === firstVideoSample) {
            return true;
          }
          return sample.dts >= firstVideoSample.dts;
        });
      }
    }
  }, {
    key: "getStreamChangeStart",
    value: function getStreamChangeStart(sample) {
      if (sample.options && sample.options.start) {
        return sample.options.start - this.dtsBase;
      }
      return Infinity;
    }
  }, {
    key: "tracks",
    get: function get6() {
      return this._context.getInstance("TRACKS");
    }
  }, {
    key: "audioTrack",
    get: function get6() {
      if (this.tracks && this.tracks.audioTrack) {
        return this.tracks.audioTrack;
      }
      return {
        samples: [],
        meta: {}
      };
    }
  }, {
    key: "videoTrack",
    get: function get6() {
      if (this.tracks && this.tracks.videoTrack) {
        return this.tracks.videoTrack;
      }
      return {
        samples: [],
        meta: {}
      };
    }
  }, {
    key: "dtsBase",
    get: function get6() {
      var remuxer = this._context.getInstance("MP4_REMUXER");
      if (remuxer) {
        return remuxer._dtsBase;
      }
      return 0;
    }
  }, {
    key: "audioDtsBase",
    get: function get6() {
      var remuxer = this._context.getInstance("MP4_REMUXER");
      if (remuxer && remuxer._audioDtsBase !== null) {
        return remuxer._audioDtsBase;
      }
      return this.dtsBase;
    }
  }, {
    key: "videoDtsBase",
    get: function get6() {
      var remuxer = this._context.getInstance("MP4_REMUXER");
      if (remuxer && remuxer._videoDtsBase !== null) {
        return remuxer._videoDtsBase;
      }
      return this.dtsBase;
    }
  }], [{
    key: "sortAudioSamples",
    value: function sortAudioSamples(samples) {
      if (samples.length === 1) {
        return samples;
      }
      return [].concat(_toConsumableArray3(samples)).sort(function(a, b) {
        return a.dts - b.dts;
      });
    }
  }, {
    key: "isRefSampleDurationValid",
    value: function isRefSampleDurationValid(refSampleDuration) {
      return refSampleDuration && refSampleDuration > 0 && !Number.isNaN(refSampleDuration);
    }
  }, {
    key: "findFirstAudioSample",
    value: function findFirstAudioSample(samples) {
      if (!samples || samples.length === 0) {
        return null;
      }
      return Compatibility3.sortAudioSamples(samples)[0];
    }
  }, {
    key: "findFirstVideoSample",
    value: function findFirstVideoSample(samples) {
      if (!samples.length) {
        return null;
      }
      var sorted = [].concat(_toConsumableArray3(samples)).sort(function(a, b) {
        return a.dts - b.dts;
      });
      for (var i = 0, len = sorted.length; i < len; i++) {
        if (sorted[i].isKeyframe) {
          return sorted[i];
        }
      }
    }
  }, {
    key: "detectVideoLargeGap",
    value: function detectVideoLargeGap(nextDts, firstSampleDts) {
      if (nextDts === null) {
        return;
      }
      var delta = 1e3;
      return nextDts - firstSampleDts >= delta || firstSampleDts - nextDts >= delta;
    }
  }, {
    key: "detectAudioLargeGap",
    value: function detectAudioLargeGap(nextDts, firstSampleDts) {
      if (nextDts === null) {
        return;
      }
      return nextDts - firstSampleDts >= 1e3 || firstSampleDts - nextDts >= 1e3;
    }
  }, {
    key: "doFixLargeGap",
    value: function doFixLargeGap(samples, gap) {
      for (var i = 0, len = samples.length; i < len; i++) {
        var sample = samples[i];
        sample.dts += gap;
        if (sample.pts) {
          sample.pts += gap;
        }
      }
      var first = samples[0];
      if (first && first.dts === 0) {
        first.dts = first.pts = 1;
      }
    }
  }, {
    key: "detectChangeStream",
    value: function detectChangeStream(samples, isFirst) {
      var changed = false;
      var changedIdxes = [];
      for (var i = 0, len = samples.length; i < len; i++) {
        var sample = samples[i];
        if (sample.options && sample.options.meta && !(isFirst && i === 0)) {
          changed = true;
          changedIdxes.push(i);
        }
      }
      return {
        changed,
        changedIdxes
      };
    }
  }]);
  return Compatibility3;
}();
var hls_default = Compatibility2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-codec@2.5.2@xgplayer-helper-codec/es/utf8/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass34 = function() {
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
function _classCallCheck35(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var UTF8 = function() {
  function UTF82() {
    _classCallCheck35(this, UTF82);
  }
  _createClass34(UTF82, null, [{
    key: "decode",
    value: function decode(uint8array) {
      var out = [];
      var input = uint8array;
      var i = 0;
      var length = uint8array.length;
      while (i < length) {
        if (input[i] < 128) {
          out.push(String.fromCharCode(input[i]));
          ++i;
          continue;
        } else if (input[i] < 192) {
        } else if (input[i] < 224) {
          if (UTF82._checkContinuation(input, i, 1)) {
            var ucs4 = (input[i] & 31) << 6 | input[i + 1] & 63;
            if (ucs4 >= 128) {
              out.push(String.fromCharCode(ucs4 & 65535));
              i += 2;
              continue;
            }
          }
        } else if (input[i] < 240) {
          if (UTF82._checkContinuation(input, i, 2)) {
            var _ucs = (input[i] & 15) << 12 | (input[i + 1] & 63) << 6 | input[i + 2] & 63;
            if (_ucs >= 2048 && (_ucs & 63488) !== 55296) {
              out.push(String.fromCharCode(_ucs & 65535));
              i += 3;
              continue;
            }
          }
        } else if (input[i] < 248) {
          if (UTF82._checkContinuation(input, i, 3)) {
            var _ucs2 = (input[i] & 7) << 18 | (input[i + 1] & 63) << 12 | (input[i + 2] & 63) << 6 | input[i + 3] & 63;
            if (_ucs2 > 65536 && _ucs2 < 1114112) {
              _ucs2 -= 65536;
              out.push(String.fromCharCode(_ucs2 >>> 10 | 55296));
              out.push(String.fromCharCode(_ucs2 & 1023 | 56320));
              i += 4;
              continue;
            }
          }
        }
        out.push(String.fromCharCode(65533));
        ++i;
      }
      return out.join("");
    }
  }, {
    key: "_checkContinuation",
    value: function _checkContinuation(uint8array, start, checkLength) {
      var array = uint8array;
      if (start + checkLength < array.length) {
        while (checkLength--) {
          if ((array[++start] & 192) !== 128) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  }]);
  return UTF82;
}();
var utf8_default = UTF8;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/flv/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/flv/demuxer.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/flv/amf-parser.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass35 = function() {
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
function _classCallCheck36(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var isLe = sniffer_default.isLe;
var DATA_TYPES = {
  NUMBER: 0,
  BOOLEAN: 1,
  STRING: 2,
  OBJECT: 3,
  MIX_ARRAY: 8,
  OBJECT_END: 9,
  STRICT_ARRAY: 10,
  DATE: 11,
  LONE_STRING: 12
};
var AMFParser = function() {
  function AMFParser2() {
    _classCallCheck36(this, AMFParser2);
    this.offset = 0;
    this.readOffset = this.offset;
  }
  _createClass35(AMFParser2, [{
    key: "resolve",
    value: function resolve(meta, size) {
      if (size < 3) {
        throw new Error("not enough data for metainfo");
      }
      var metaData = {};
      var name = this.parseValue(meta);
      var value = this.parseValue(meta, size - name.bodySize);
      metaData[name.data] = value.data;
      this.resetStatus();
      return metaData;
    }
  }, {
    key: "resetStatus",
    value: function resetStatus() {
      this.offset = 0;
      this.readOffset = this.offset;
    }
  }, {
    key: "parseString",
    value: function parseString(buffer) {
      var dv = new DataView(buffer, this.readOffset);
      var strLen = dv.getUint16(0, !isLe);
      var str = "";
      if (strLen > 0) {
        str = utf8_default.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
      } else {
        str = "";
      }
      var size = strLen + 2;
      this.readOffset += size;
      return {
        data: str,
        bodySize: strLen + 2
      };
    }
  }, {
    key: "parseDate",
    value: function parseDate(buffer, size) {
      var dv = new DataView(buffer, this.readOffset, size);
      var ts = dv.getFloat64(0, !isLe);
      var timeOffset = dv.getInt16(8, !isLe);
      ts += timeOffset * 60 * 1e3;
      this.readOffset += 10;
      return {
        data: new Date(ts),
        bodySize: 10
      };
    }
  }, {
    key: "parseObject",
    value: function parseObject(buffer, size) {
      var name = this.parseString(buffer, size);
      var value = this.parseValue(buffer, size - name.bodySize);
      return {
        data: {
          name: name.data,
          value: value.data
        },
        bodySize: name.bodySize + value.bodySize,
        isObjEnd: value.isObjEnd
      };
    }
  }, {
    key: "parseLongString",
    value: function parseLongString(buffer) {
      var dv = new DataView(buffer, this.readOffset);
      var strLen = dv.getUint32(0, !isLe);
      var str = "";
      if (strLen > 0) {
        str = utf8_default.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
      } else {
        str = "";
      }
      this.readOffset += strLen + 4;
      return {
        data: str,
        bodySize: strLen + 4
      };
    }
  }, {
    key: "parseValue",
    value: function parseValue(data, size) {
      var buffer = new ArrayBuffer();
      if (data instanceof ArrayBuffer) {
        buffer = data;
      } else {
        buffer = data.buffer;
      }
      var NUMBER = DATA_TYPES.NUMBER, BOOLEAN = DATA_TYPES.BOOLEAN, STRING = DATA_TYPES.STRING, OBJECT = DATA_TYPES.OBJECT, MIX_ARRAY = DATA_TYPES.MIX_ARRAY, OBJECT_END = DATA_TYPES.OBJECT_END, STRICT_ARRAY = DATA_TYPES.STRICT_ARRAY, DATE = DATA_TYPES.DATE, LONE_STRING = DATA_TYPES.LONE_STRING;
      var dataView = new DataView(buffer, this.readOffset, size);
      var isObjEnd = false;
      var type = dataView.getUint8(0);
      var offset = 1;
      this.readOffset += 1;
      var value = null;
      switch (type) {
        case NUMBER: {
          value = dataView.getFloat64(1, !isLe);
          this.readOffset += 8;
          offset += 8;
          break;
        }
        case BOOLEAN: {
          var boolNum = dataView.getUint8(1);
          value = !!boolNum;
          this.readOffset += 1;
          offset += 1;
          break;
        }
        case STRING: {
          var str = this.parseString(buffer);
          value = str.data;
          offset += str.bodySize;
          break;
        }
        case OBJECT: {
          value = {};
          var objEndSize = 0;
          if (dataView.getUint32(size - 4, !isLe) & 16777215) {
            objEndSize = 3;
          }
          while (offset < size - 4) {
            var amfObj = this.parseObject(buffer, size - offset - objEndSize);
            if (amfObj.isObjectEnd) {
              break;
            }
            value[amfObj.data.name] = amfObj.data.value;
            offset += amfObj.bodySize;
          }
          if (offset <= size - 3) {
            var mark = dataView.getUint32(offset - 1, !isLe) & 16777215;
            if (mark === 9) {
              this.readOffset += 3;
              offset += 3;
            }
          }
          break;
        }
        case MIX_ARRAY: {
          value = {};
          offset += 4;
          this.readOffset += 4;
          var _objEndSize = 0;
          if ((dataView.getUint32(size - 4, !isLe) & 16777215) === 9) {
            _objEndSize = 3;
          }
          while (offset < size - 8) {
            var amfVar = this.parseObject(buffer, size - offset - _objEndSize);
            if (amfVar.isObjectEnd) {
              break;
            }
            value[amfVar.data.name] = amfVar.data.value;
            offset += amfVar.bodySize;
          }
          if (offset <= size - 3) {
            var marker = dataView.getUint32(offset - 1, !isLe) & 16777215;
            if (marker === 9) {
              offset += 3;
              this.readOffset += 3;
            }
          }
          break;
        }
        case OBJECT_END: {
          value = null;
          isObjEnd = true;
          break;
        }
        case STRICT_ARRAY: {
          value = [];
          var arrLength = dataView.getUint32(1, !isLe);
          offset += 4;
          this.readOffset += 4;
          for (var i = 0; i < arrLength; i++) {
            var script = this.parseValue(buffer, size - offset);
            value.push(script.data);
            offset += script.bodySize;
          }
          break;
        }
        case DATE: {
          var date = this.parseDate(buffer, size - 1);
          value = date.data;
          offset += date.bodySize;
          break;
        }
        case LONE_STRING: {
          var longStr = this.parseLongString(buffer, size - 1);
          value = longStr.data;
          offset += longStr.bodySize;
          break;
        }
        default: {
          offset = size;
        }
      }
      return {
        data: value,
        bodySize: offset,
        isObjEnd
      };
    }
  }]);
  return AMFParser2;
}();
var amf_parser_default = AMFParser;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/flv/demuxer.js
var import_eventemitter32 = __toESM(require_eventemitter3_4_0());
var _createClass36 = function() {
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
var _get2 = function get2(object, property, receiver) {
  if (object === null)
    object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === void 0) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return void 0;
    } else {
      return get2(parent, property, receiver);
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
function _classCallCheck37(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn3(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var SpsParser = avc_exports.SpsParser;
var NalUnit = avc_exports.NalUnit;
var SpsParserHEVC = hevc_exports.SpsParserHEVC;
var NalUnitHEVC = hevc_exports.NalUnitHEVC;
var FlvDemuxer = function(_EventEmitter) {
  _inherits3(FlvDemuxer3, _EventEmitter);
  function FlvDemuxer3() {
    _classCallCheck37(this, FlvDemuxer3);
    var _this = _possibleConstructorReturn3(this, (FlvDemuxer3.__proto__ || Object.getPrototypeOf(FlvDemuxer3)).call(this));
    _this.headerParsed = false;
    _this.trackNum = 0;
    _this.hasScript = false;
    _this._videoMetaChange = false;
    _this._audioMetaChange = false;
    _this.gopId = 0;
    _this.onMetaData = null;
    return _this;
  }
  _createClass36(FlvDemuxer3, [{
    key: "demux",
    value: function demux(buffer) {
      if (!this.headerParsed) {
        if (buffer.length < 13) {
          return;
        }
        var header = buffer.shift(13);
        this.parseFlvHeader(header);
        this.demux(buffer);
      } else {
        if (buffer.length < 11) {
          return;
        }
        var flvTag = void 0;
        var loopMax = 1e4;
        do {
          flvTag = this._parseFlvTag(buffer);
        } while (flvTag && loopMax-- > 0);
      }
    }
  }, {
    key: "parseFlvHeader",
    value: function parseFlvHeader(header) {
      if (!FlvDemuxer3.isFlvFile(header)) {
        throw new Error("invalid flv file," + header.join(","));
      } else {
        this.headerParsed = true;
        var hasAudio = header[4] >>> 2 === 1;
        var hasVideo = (header[4] & 1) === 1;
        this.emit(FlvDemuxer3.EVENTS.FILE_HEADER_PARSED, {
          hasVideo,
          hasAudio
        });
      }
    }
  }, {
    key: "_parseFlvTag",
    value: function _parseFlvTag(buffer) {
      var tagSize = buffer.toInt(1, 3);
      if (buffer.length < 11 + tagSize + 4) {
        return null;
      }
      var flvTag = this._parseFlvTagHeader(buffer);
      if (flvTag) {
        this._processTagData(flvTag, buffer);
        if (!this._datasizeValidator(flvTag.datasize, buffer)) {
          throw new Error("TAG length error at " + flvTag.datasize);
        }
      }
      return flvTag;
    }
  }, {
    key: "_parseFlvTagHeader",
    value: function _parseFlvTagHeader(buffer) {
      var offset = 0;
      var flvTag = new flv_tag_default();
      var tagType = buffer.toInt(offset, 1);
      offset += 1;
      flvTag.filtered = (tagType & 32) >>> 5;
      flvTag.tagType = tagType & 31;
      flvTag.datasize = buffer.toInt(offset, 3);
      offset += 3;
      if (flvTag.tagType !== 8 && flvTag.tagType !== 9 && flvTag.tagType !== 11 && flvTag.tagType !== 18) {
        if (buffer && buffer.length > 0) {
          buffer.shift(1);
        }
        throw new Error("tagType " + flvTag.tagType);
      }
      if (buffer.length < flvTag.datasize + 15) {
        return null;
      }
      buffer.shift(4);
      var timestamp = buffer.toInt(0, 3);
      buffer.shift(3);
      var timestampExt = buffer.shift(1)[0];
      if (timestampExt > 0) {
        timestamp += timestampExt * 16777216;
      }
      flvTag.dts = timestamp;
      buffer.shift(3);
      return flvTag;
    }
  }, {
    key: "_processTagData",
    value: function _processTagData(flvTag, buffer) {
      switch (flvTag.tagType) {
        case 18:
          this._parseScriptData(flvTag, buffer);
          break;
        case 8:
          this._parseAudioTag(flvTag, buffer);
          break;
        case 9:
          this._parseVideoData(flvTag, buffer);
          break;
        case 11:
          buffer.shift(3);
          break;
        default:
          buffer.shift(1);
      }
    }
  }, {
    key: "_parseScriptData",
    value: function _parseScriptData(flvTag, buffer) {
      flvTag.data = buffer.shift(flvTag.datasize);
      var info = new amf_parser_default().resolve(flvTag.data, flvTag.data.length);
      this.onMetaData = info ? info.onMetaData : void 0;
      this.emit(FlvDemuxer3.EVENTS.SCRIPT_TAG_PARSED, this.onMetaData);
    }
  }, {
    key: "_aacSequenceHeaderParser",
    value: function _aacSequenceHeaderParser(data) {
      var ret = {};
      ret.hasSpecificConfig = true;
      ret.objectType = data[1] >>> 3;
      ret.originObjectType = ret.objectType;
      ret.sampleRateIndex = (data[1] & 7) << 1 | data[2] >>> 7;
      ret.audiosamplerate = this._switchAudioSampleRate(ret.sampleRateIndex);
      ret.channelCount = (data[2] & 120) >>> 3;
      ret.frameLength = (data[2] & 4) >>> 2;
      ret.dependsOnCoreCoder = (data[2] & 2) >>> 1;
      ret.extensionFlagIndex = data[2] & 1;
      var userAgent = window.navigator.userAgent.toLowerCase();
      var extensionSamplingIndex = void 0;
      var config = void 0;
      var samplingIndex = ret.sampleRateIndex;
      if (userAgent.indexOf("firefox") !== -1) {
        if (ret.sampleRateIndex >= 8) {
          ret.objectType = 5;
          config = new Array(4);
          extensionSamplingIndex = samplingIndex - 3;
        } else {
          ret.objectType = 2;
          config = new Array(2);
          extensionSamplingIndex = samplingIndex;
        }
      } else if (userAgent.indexOf("android") !== -1 || userAgent.indexOf("safari") !== -1 || userAgent.indexOf("iphone") !== -1) {
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = samplingIndex;
      } else {
        ret.objectType = 5;
        extensionSamplingIndex = ret.sampleRateIndex;
        config = new Array(4);
        if (ret.sampleRateIndex >= 6) {
          extensionSamplingIndex = ret.sampleRateIndex - 3;
        } else if (ret.channelCount === 1) {
          ret.objectType = 2;
          config = new Array(2);
          extensionSamplingIndex = ret.sampleRateIndex;
        }
      }
      ret.codec = "mp4a.40." + ret.objectType;
      config[0] = ret.objectType << 3;
      config[0] |= (ret.sampleRateIndex & 15) >>> 1;
      config[1] = (ret.sampleRateIndex & 15) << 7;
      config[1] |= (ret.channelCount & 15) << 3;
      if (ret.objectType === 5) {
        config[1] |= (extensionSamplingIndex & 15) >>> 1;
        config[2] = (extensionSamplingIndex & 1) << 7;
        config[2] |= 2 << 2;
        config[3] = 0;
      }
      ret.config = config;
      return ret;
    }
  }, {
    key: "_parseAudioTag",
    value: function _parseAudioTag(tag, buffer) {
      var meta = new AudioTrackMeta();
      var info = buffer.shift(1)[0];
      tag.data = buffer.shift(tag.datasize - 1);
      var format = (info & 240) >>> 4;
      if (format !== 10) {
        throw new Error("invalid audio format: " + format);
      }
      if (format === 10) {
        meta.sampleRate = this._switchAudioSamplingFrequency(info);
        meta.sampleRateIndex = (info & 12) >>> 2;
        meta.frameLenth = (info & 2) >>> 1;
        meta.channelCount = info & 1;
        meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);
      }
      var audioSampleRate = meta.audioSampleRate;
      var audioSampleRateIndex = meta.sampleRateIndex;
      var refSampleDuration = meta.refSampleDuration;
      if (tag.data[0] === 0) {
        var aacHeader = this._aacSequenceHeaderParser(tag.data);
        audioSampleRate = aacHeader.audiosamplerate || meta.audioSampleRate;
        audioSampleRateIndex = aacHeader.sampleRateIndex || meta.sampleRateIndex;
        refSampleDuration = Math.floor(1024 / audioSampleRate * meta.timescale);
        meta.channelCount = aacHeader.channelCount;
        meta.sampleRate = audioSampleRate;
        meta.sampleRateIndex = audioSampleRateIndex;
        meta.refSampleDuration = refSampleDuration;
        meta.duration = this.onMetaData.duration * meta.timescale;
        meta.config = aacHeader.config;
        meta.objectType = aacHeader.objectType;
        meta.originObjectType = aacHeader.originObjectType;
        this.emit(FlvDemuxer3.EVENTS.AUDIO_META_PARSED, meta);
      } else {
        tag.data = tag.data.slice(1, tag.data.length);
        this.emit(FlvDemuxer3.EVENTS.AUDIO_SAMPLE_PARSED, tag);
      }
    }
  }, {
    key: "_parseVideoData",
    value: function _parseVideoData(flvTag, buffer) {
      var header = buffer.shift(1)[0];
      var vSample = new VideoSample(flvTag);
      var frameType = (header & 240) >>> 4;
      vSample.isKeyframe = frameType === 1;
      var codecID = header & 15;
      flvTag.avcPacketType = buffer.shift(1)[0];
      vSample.cts = buffer.toInt(0, 3);
      vSample.cts = vSample.cts << 8 >> 8;
      buffer.shift(3);
      if (codecID === 7 || codecID === 12) {
        var _hevc = codecID === 12;
        var data = buffer.shift(flvTag.datasize - 5);
        if (data[4] === 0 && data[5] === 0 && data[6] === 0 && data[7] === 1) {
          var avcclength = 0;
          for (var i = 0; i < 4; i++) {
            avcclength = avcclength * 256 + data[i];
          }
          avcclength -= 4;
          data = data.slice(4, data.length);
          data[3] = avcclength % 256;
          avcclength = (avcclength - data[3]) / 256;
          data[2] = avcclength % 256;
          avcclength = (avcclength - data[2]) / 256;
          data[1] = avcclength % 256;
          data[0] = (avcclength - data[1]) / 256;
        }
        vSample.data = data;
        var videoMeta = void 0;
        if (flvTag.avcPacketType === 0) {
          if (_hevc) {
            videoMeta = this._hevcSequenceHeaderParser(data);
          } else {
            videoMeta = this._avcSequenceHeaderParser(data);
          }
          videoMeta.codecID = codecID;
          this.emit(FlvDemuxer3.EVENTS.VIDEO_META_PARSED, videoMeta);
        } else {
          var dv = new data_view_default(data.buffer);
          var nals = _hevc ? NalUnitHEVC.getHvccNals(dv) : NalUnit.getAvccNals(dv);
          var keyTypes = _hevc ? [19, 20, 21] : [5];
          for (var _i = 0; _i < nals.length; _i++) {
            var unit = nals[_i];
            _hevc ? NalUnitHEVC.analyseNal(unit) : NalUnit.analyseNal(unit);
            if (unit.sei) {
              this.emit(FlvDemuxer3.EVENTS.VIDEO_SEI_PARSED, Object.assign(unit.sei, {
                dts: flvTag.dts
              }));
            }
            if (keyTypes.indexOf(unit.type) > -1) {
              vSample.firstInGop = true;
              this.gopId++;
            }
          }
          vSample.gopId = this.gopId;
          vSample.nals = nals;
          this.emit(FlvDemuxer3.EVENTS.VIDEO_SAMPLE_PARSED, vSample);
        }
      } else {
        throw new Error("video codeid is " + codecID);
      }
    }
  }, {
    key: "_avcSequenceHeaderParser",
    value: function _avcSequenceHeaderParser(data) {
      var offset = 0;
      var meta = new VideoTrackMeta();
      meta.configurationVersion = data[0];
      meta.avcProfileIndication = data[1];
      meta.profileCompatibility = data[2];
      meta.avcLevelIndication = data[3] / 10;
      meta.nalUnitLength = (data[4] & 3) + 1;
      var numOfSps = data[5] & 31;
      offset = 6;
      var config = {};
      for (var i = 0; i < numOfSps; i++) {
        var size = data[offset] * 255 + data[offset + 1];
        offset += 2;
        var sps = new Uint8Array(size);
        for (var j = 0; j < size; j++) {
          sps[j] = data[offset + j];
        }
        var codecString = "avc1.";
        for (var _j = 1; _j < 4; _j++) {
          var h = sps[_j].toString(16);
          if (h.length < 2) {
            h = "0" + h;
          }
          codecString += h;
        }
        meta.codec = codecString;
        offset += size;
        meta.sps = sps;
        config = SpsParser.parseSPS(sps);
      }
      var numOfPps = data[offset];
      offset++;
      for (var _i2 = 0; _i2 < numOfPps; _i2++) {
        var _size = data[offset] * 255 + data[offset + 1];
        offset += 2;
        var pps = new Uint8Array(_size);
        for (var _j2 = 0; _j2 < _size; _j2++) {
          pps[_j2] = data[offset + _j2];
        }
        offset += _size;
        meta.pps = pps;
      }
      Object.assign(meta, SpsParser.toVideoMeta(config));
      meta.duration = this.onMetaData.duration * meta.timescale;
      meta.avcc = new Uint8Array(data.length);
      meta.avcc.set(data);
      meta.streamType = 27;
      return meta;
    }
  }, {
    key: "_hevcSequenceHeaderParser",
    value: function _hevcSequenceHeaderParser(data) {
      var meta = new VideoTrackMeta();
      var offset = 0;
      meta.configurationVersion = data[0];
      meta.hevcProfileSpace = (data[1] & 192) >>> 6;
      meta.hevcTierFlag = (data[1] & 32) >>> 5;
      meta.hevcProfileIdc = data[1] & 31;
      meta.hevcProfileCompatibilityFlags = [data[2], data[3], data[4], data[5]];
      meta.hevcConstraintIndicatorFlags = [data[6], data[7], data[8], data[9], data[10], data[11]];
      meta.hevcLevelIdc = data[12];
      meta.minSpatialSegmentationIdc = data[13] & 15 + data[14] << 4;
      meta.parallelismType = data[15] & 3;
      meta.chromaFormat = data[16] & 3;
      meta.bitDepthLumaMinus8 = data[17] & 7;
      meta.bitDepthChromaMinus8 = data[18] & 7;
      meta.avgFrameRate = data[19] * 256 + data[20];
      meta.constantFrameRate = (data[21] & 192) >>> 6;
      meta.numTemporalLayers = (data[21] & 56) >>> 3;
      meta.temporalIdNested = (data[21] & 4) >>> 2;
      meta.lengthSizeMinusOne = data[21] & 3;
      var numOfArrays = data[22];
      offset = 23;
      var config = {};
      var nalUnitType = 0;
      var numNalus = 0;
      var nalUnitSize = 0;
      var hasVPS = false;
      var hasSPS = false;
      var hasPPS = false;
      var vps = void 0, sps = void 0, pps = void 0;
      for (var i = 0; i < numOfArrays; i++) {
        nalUnitType = data[offset] & 63;
        numNalus = data[offset + 1] * 256 + data[offset + 2];
        offset += 3;
        for (var j = 0; j < numNalus; j++) {
          nalUnitSize = data[offset] * 256 + data[offset + 1];
          switch (nalUnitType) {
            case 32:
              if (!hasVPS) {
                hasVPS = true;
                vps = data.slice(offset + 2, offset + 2 + nalUnitSize);
                meta.vps = SpsParserHEVC._ebsp2rbsp(vps);
                meta.rawVps = vps;
              }
              break;
            case 33:
              if (!hasSPS) {
                hasSPS = true;
                sps = data.slice(offset + 2, offset + 2 + nalUnitSize);
                meta.sps = SpsParserHEVC._ebsp2rbsp(sps);
                meta.rawSps = sps;
                meta.codec = "hev1.1.6.L93.B0";
                config = SpsParserHEVC.parseSPS(sps);
              }
              break;
            case 34:
              if (!hasPPS) {
                hasPPS = true;
                pps = data.slice(offset + 2, offset + 2 + nalUnitSize);
                meta.pps = SpsParserHEVC._ebsp2rbsp(pps);
                meta.rawPps = pps;
              }
              break;
            case 39:
              break;
            case 40:
              break;
            default:
              break;
          }
          offset += 2 + nalUnitSize;
        }
      }
      Object.assign(meta, SpsParserHEVC.toVideoMeta(config));
      meta.streamType = 36;
      return meta;
    }
  }, {
    key: "_switchAudioSampleRate",
    value: function _switchAudioSampleRate(samplingFrequencyIndex) {
      var samplingFrequencyList = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
      return samplingFrequencyList[samplingFrequencyIndex];
    }
  }, {
    key: "_switchAudioSamplingFrequency",
    value: function _switchAudioSamplingFrequency(info) {
      var samplingFrequencyIndex = (info & 12) >>> 2;
      var samplingFrequencyList = [5500, 11025, 22050, 44100, 48e3];
      return samplingFrequencyList[samplingFrequencyIndex];
    }
  }, {
    key: "_switchAudioChannel",
    value: function _switchAudioChannel(info) {
      var sampleTrackNumIndex = info & 1;
      var sampleTrackNumList = [1, 2];
      return sampleTrackNumList[sampleTrackNumIndex];
    }
  }, {
    key: "_datasizeValidator",
    value: function _datasizeValidator(datasize, buffer) {
      var datasizeConfirm = buffer.toInt(0, 4);
      buffer.shift(4);
      return datasizeConfirm === datasize + 11;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get2(FlvDemuxer3.prototype.__proto__ || Object.getPrototypeOf(FlvDemuxer3.prototype), "removeAllListeners", this).call(this);
    }
  }], [{
    key: "isFlvFile",
    value: function isFlvFile(data) {
      return !(data[0] !== 70 || data[1] !== 76 || data[2] !== 86 || data[3] !== 1);
    }
  }, {
    key: "getPlayType",
    value: function getPlayType(streamFlag) {
      var result = {
        hasVideo: false,
        hasAudio: false
      };
      if (streamFlag & 1 > 0) {
        result.hasVideo = true;
      }
      if (streamFlag & 4 > 0) {
        result.hasAudio = true;
      }
      return result;
    }
  }, {
    key: "EVENTS",
    get: function get6() {
      return {
        FILE_HEADER_PARSED: "FILE_HEADER_PARSED",
        SCRIPT_TAG_PARSED: "SCRIPT_TAG_PARSED",
        AUDIO_META_PARSED: "AUDIO_META_PARSED",
        VIDEO_META_PARSED: "VIDEO_META_PARSED",
        VIDEO_SAMPLE_PARSED: "VIDEO_SAMPLE_PARSED",
        AUDIO_SAMPLE_PARSED: "AUDIO_SAMPLE_PARSED",
        VIDEO_SEI_PARSED: "VIDEO_SEI_PARSED"
      };
    }
  }]);
  return FlvDemuxer3;
}(import_eventemitter32.default);
var demuxer_default = FlvDemuxer;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/flv/index.js
var _createClass37 = function() {
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
function _classCallCheck38(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var DEMUX_EVENTS3 = events_default.DEMUX_EVENTS;
var INTERNAL_EVENTS = demuxer_default.EVENTS;
var FlvDemuxer2 = function() {
  function FlvDemuxer3() {
    _classCallCheck38(this, FlvDemuxer3);
    this.TAG = "FLV_DEMUXER";
    this._firstFragmentLoaded = false;
    this._trackNum = 0;
    this._hasScript = false;
    this._videoMetaChange = false;
    this._audioMetaChange = false;
    this._hasVideoSequence = false;
    this._hasAudioSequence = false;
    this.demuxer = new demuxer_default();
  }
  _createClass37(FlvDemuxer3, [{
    key: "init",
    value: function init() {
      this.on(DEMUX_EVENTS3.DEMUX_START, this.demux.bind(this));
      this.demuxer.on(INTERNAL_EVENTS.FILE_HEADER_PARSED, this.handleFileHeaderParsed.bind(this));
      this.demuxer.on(INTERNAL_EVENTS.SCRIPT_TAG_PARSED, this.handleScriptTagParsed.bind(this));
      this.demuxer.on(INTERNAL_EVENTS.AUDIO_META_PARSED, this.handleAudioMetaParsed.bind(this));
      this.demuxer.on(INTERNAL_EVENTS.VIDEO_META_PARSED, this.handleVideoMetaParsed.bind(this));
      this.demuxer.on(INTERNAL_EVENTS.VIDEO_SAMPLE_PARSED, this.handleVideoSampleParsed.bind(this));
      this.demuxer.on(INTERNAL_EVENTS.AUDIO_SAMPLE_PARSED, this.handleAudioSampleParsed.bind(this));
      this.demuxer.on(INTERNAL_EVENTS.VIDEO_SEI_PARSED, this.handleSeiParsed.bind(this));
    }
  }, {
    key: "handleAudioMetaParsed",
    value: function handleAudioMetaParsed(meta) {
      if (!this.tracks || !this.tracks.audioTrack) {
        return;
      }
      this._context.mediaInfo.hasAudio = true;
      this.tracks.audioTrack.meta = meta;
      if (!this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS3.METADATA_PARSED, "audio");
      } else {
        this.emit(DEMUX_EVENTS3.AUDIO_METADATA_CHANGE);
      }
    }
  }, {
    key: "handleVideoMetaParsed",
    value: function handleVideoMetaParsed(meta) {
      if (!this.tracks || !this.tracks.videoTrack) {
        return;
      }
      this._context.mediaInfo.hasVideo = true;
      this.tracks.videoTrack.meta = meta;
      if (!this._hasVideoSequence) {
        this.emit(DEMUX_EVENTS3.METADATA_PARSED, "video");
      } else {
        this.emit(DEMUX_EVENTS3.VIDEO_METADATA_CHANGE);
      }
    }
  }, {
    key: "handleSeiParsed",
    value: function handleSeiParsed(seiObj) {
      this.emit(DEMUX_EVENTS3.SEI_PARSED, seiObj);
    }
  }, {
    key: "handleVideoSampleParsed",
    value: function handleVideoSampleParsed(sample) {
      if (!this.tracks || !this.tracks.videoTrack) {
        return;
      }
      if (sample.isKeyframe) {
        this.emit(DEMUX_EVENTS3.ISKEYFRAME, sample.dts + sample.cts);
      }
      this.tracks.videoTrack.samples.push(sample);
    }
  }, {
    key: "handleAudioSampleParsed",
    value: function handleAudioSampleParsed(sample) {
      if (!this.tracks || !this.tracks.videoTrack) {
        return;
      }
      this.tracks.audioTrack.samples.push(sample);
    }
  }, {
    key: "handleScriptTagParsed",
    value: function handleScriptTagParsed(onMetaData) {
      var videoTrack = this.videoTrack, audioTrack = this.audioTrack;
      this._context.mediaInfo.duration = onMetaData.duration;
      if (typeof onMetaData.hasAudio === "boolean") {
        this._context.mediaInfo.hsaAudio = onMetaData.hasAudio;
      }
      if (typeof onMetaData.hasVideo === "boolean") {
        this._context.mediaInfo.hasVideo = onMetaData.hasVideo;
      }
      this.emit(DEMUX_EVENTS3.MEDIA_INFO);
      this._hasScript = true;
      if (audioTrack && !audioTrack.hasSpecificConfig) {
        var meta = audioTrack.meta;
        if (onMetaData.audiosamplerate) {
          meta.sampleRate = onMetaData.audiosamplerate;
        }
        if (onMetaData.audiochannels) {
          meta.channelCount = onMetaData.audiochannels;
        }
        switch (onMetaData.audiosamplerate) {
          case 44100:
            meta.sampleRateIndex = 4;
            break;
          case 22050:
            meta.sampleRateIndex = 7;
            break;
          case 11025:
            meta.sampleRateIndex = 10;
            break;
        }
      }
      if (videoTrack && !videoTrack.hasSpecificConfig) {
        var _meta = videoTrack.meta;
        if (typeof onMetaData.framerate === "number") {
          var fpsNum = Math.floor(onMetaData.framerate * 1e3);
          if (fpsNum > 0) {
            var fps = fpsNum / 1e3;
            if (!_meta.frameRate) {
              _meta.frameRate = {};
            }
            _meta.frameRate.fixed = true;
            _meta.frameRate.fps = fps;
            _meta.frameRate.fps_num = fpsNum;
            _meta.frameRate.fps_den = 1e3;
          }
        }
      }
    }
  }, {
    key: "handleFileHeaderParsed",
    value: function handleFileHeaderParsed(_ref) {
      var hasVideo = _ref.hasVideo, hasAudio = _ref.hasAudio;
      this._context.mediaInfo.hasVideo = hasVideo;
      this._context.mediaInfo.hasAudio = hasAudio;
      this.initVideoTrack();
      this.initAudioTrack();
    }
  }, {
    key: "demux",
    value: function demux() {
      if (this.loaderBuffer) {
        try {
          this.demuxer.demux(this.loaderBuffer);
        } catch (e) {
        }
        this.emit(DEMUX_EVENTS3.DEMUX_COMPLETE);
      }
    }
  }, {
    key: "initVideoTrack",
    value: function initVideoTrack() {
      this._trackNum++;
      var videoTrack = new VideoTrack();
      videoTrack.meta = new VideoTrackMeta();
      videoTrack.id = videoTrack.meta.id = this._trackNum;
      this.tracks.videoTrack = videoTrack;
    }
  }, {
    key: "initAudioTrack",
    value: function initAudioTrack() {
      this._trackNum++;
      var audioTrack = new AudioTrack();
      audioTrack.meta = new AudioTrackMeta();
      audioTrack.id = audioTrack.meta.id = this._trackNum;
      this.tracks.audioTrack = audioTrack;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.demuxer) {
        this.demuxer.destroy();
      }
    }
  }, {
    key: "loaderBuffer",
    get: function get6() {
      var buffer = this._context.getInstance("LOADER_BUFFER");
      if (buffer) {
        return buffer;
      } else {
        this.emit(DEMUX_EVENTS3.DEMUX_ERROR, this.TAG, new Error("\u627E\u4E0D\u5230 loaderBuffer \u5B9E\u4F8B"));
      }
    }
  }, {
    key: "tracks",
    get: function get6() {
      return this._context.getInstance("TRACKS");
    }
  }, {
    key: "logger",
    get: function get6() {
      return this._context.getInstance("LOGGER");
    }
  }], [{
    key: "getPlayType",
    value: function getPlayType(streamFlag) {
      var result = {
        hasVideo: false,
        hasAudio: false
      };
      if (streamFlag & 1 > 0) {
        result.hasVideo = true;
      }
      if (streamFlag & 4 > 0) {
        result.hasAudio = true;
      }
      return result;
    }
  }]);
  return FlvDemuxer3;
}();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/hls/ts.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/hls/ts-demuxer.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_eventemitter33 = __toESM(require_eventemitter3_4_0());
var _slicedToArray = function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"])
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _createClass38 = function() {
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
function _classCallCheck39(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn4(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var NalUnit2 = avc_exports.NalUnit;
var NalUnitHEVC2 = hevc_exports.NalUnitHEVC;
var StreamType = {
  1: ["video", "MPEG-1"],
  2: ["video", "MPEG-2"],
  27: ["video", "AVC.H264"],
  36: ["video", "HVC.H265"],
  234: ["video", "VC-1"],
  3: ["audio", "MPEG-1"],
  4: ["audio", "MPEG-2"],
  15: ["audio", "MPEG-2.AAC"],
  17: ["audio", "MPEG-4.AAC"],
  128: ["audio", "LPCM"],
  129: ["audio", "AC3"],
  6: ["audio", "AC3"],
  130: ["audio", "DTS"],
  131: ["audio", "Dolby TrueHD"],
  132: ["audio", "AC3-Plus"],
  133: ["audio", "DTS-HD"],
  134: ["audio", "DTS-MA"],
  161: ["audio", "AC3-Plus-SEC"],
  162: ["audio", "DTS-HD-SEC"]
};
var TsDemuxer = function(_EventEmitter) {
  _inherits4(TsDemuxer3, _EventEmitter);
  _createClass38(TsDemuxer3, null, [{
    key: "EVENTS",
    get: function get6() {
      return {
        DEMUX_COMPLETE: "DEMUX_COMPLETE",
        METADATA_PARSED: "METADATA_PARSED",
        VIDEO_SAMPLE_PARSED: "VIDEO_SAMPLE_PARSED",
        AUDIO_SAMPLE_PARSED: "AUDIO_SAMPLES_PARSED",
        SEI_PARSED: "SEI_PARSED"
      };
    }
  }]);
  function TsDemuxer3(_ref) {
    var videoTrack = _ref.videoTrack, audioTrack = _ref.audioTrack;
    _classCallCheck39(this, TsDemuxer3);
    var _this = _possibleConstructorReturn4(this, (TsDemuxer3.__proto__ || Object.getPrototypeOf(TsDemuxer3)).call(this));
    _this.TAG = "TsDemuxer";
    _this.demuxing = false;
    _this.videoTrack = videoTrack;
    _this.audioTrack = audioTrack;
    _this.pat = [];
    _this.pmt = [];
    _this._hasVideoMeta = false;
    _this._hasAudioMeta = false;
    _this.gopId = 0;
    return _this;
  }
  _createClass38(TsDemuxer3, [{
    key: "demux",
    value: function demux(frag, buffer, isVod) {
      if (frag) {
        dev_logger_default.log(this.TAG, "do demux: id=" + frag.id + ",demuxing=" + this.demuxing);
      }
      if (this.demuxing) {
        return;
      }
      var frags = { pat: [], pmt: [] };
      var peses = {};
      while (buffer.length >= 188) {
        if (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
          throw new Error("Untrust sync code: " + buffer.array[0][buffer.offset] + ", try to recover;");
        }
        while (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
          buffer.shift(1);
        }
        if (buffer.length < 188) {
          continue;
        }
        var buf = buffer.shift(188);
        var tsStream = new data_view_default(buf.buffer);
        var ts = {};
        TsDemuxer3.read(tsStream, ts, frags);
        var pes = peses[ts.header.pid];
        if (ts.pes) {
          ts.pes.codec = ts.header.codec;
          ts.pes.streamType = ts.header.streamType;
          if (!peses[ts.header.pid]) {
            peses[ts.header.pid] = [];
          }
          peses[ts.header.pid].push(ts.pes);
          ts.pes.ES.buffer = [ts.pes.ES.buffer];
        } else if (pes) {
          pes[pes.length - 1].ES.buffer.push(ts.payload.stream);
        }
      }
      var AudioOptions = Object.assign({}, frag);
      var VideoOptions = Object.assign({}, frag);
      var noAudio = isVod && this._hasVideoMeta && !this._hasAudioMeta;
      var noVideo = isVod && this._hasAudioMeta && !this._hasVideoMeta;
      for (var i = 0; i < Object.keys(peses).length; i++) {
        var epeses = peses[Object.keys(peses)[i]];
        for (var j = 0; j < epeses.length; j++) {
          var cPes = epeses[j];
          cPes.id = Object.keys(peses)[i];
          var isAAC = cPes.streamType === 15 || cPes.streamType === 17;
          if (cPes.type === "audio" && !noAudio && isAAC) {
            cPes.ES.buffer = TsDemuxer3.mergeAudioES(cPes.ES.buffer);
            this.pushAudioSample(cPes, AudioOptions);
            AudioOptions = {};
          } else if (cPes.type === "video" && !noVideo) {
            cPes.ES.buffer = TsDemuxer3.mergeVideoES(cPes.ES.buffer);
            if (cPes.codec === "HVC.H265") {
              this.pushVideoSampleHEVC(epeses[j], VideoOptions);
            } else {
              this.pushVideoSample(epeses[j], VideoOptions);
            }
            VideoOptions = { spsFound: !!VideoOptions.spsFound };
          }
        }
      }
    }
  }, {
    key: "pushAudioSample",
    value: function pushAudioSample(pes, options) {
      var meta = new AudioTrackMeta({
        audioSampleRate: pes.ES.frequence,
        sampleRate: pes.ES.frequence,
        channelCount: pes.ES.channel,
        codec: "mp4a.40." + pes.ES.audioObjectType,
        originCodec: "mp4a.40." + pes.ES.originAudioObjectType,
        originObjectType: pes.ES.originAudioObjectType,
        config: pes.ES.audioConfig,
        id: 2,
        sampleRateIndex: pes.ES.frequencyIndex
      });
      meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);
      var metaEqual = TsDemuxer3.compareMeta(this.audioTrack.meta, meta, true);
      if (!this._hasAudioMeta || !metaEqual) {
        this._hasAudioMeta = true;
        if (options) {
          options.meta = Object.assign({}, meta);
        } else {
          options = {
            meta: Object.assign({}, meta)
          };
        }
        this.emit(TsDemuxer3.EVENTS.METADATA_PARSED, "audio", meta);
      }
      var frameIndex = 0;
      pes.ES.buffer.skip(pes.pesHeaderLength + 9);
      var streamChanged = false;
      while (pes.ES.buffer.position < pes.ES.buffer.length) {
        if (adts_default.isHeader(new Uint8Array(pes.ES.buffer.buffer), pes.ES.buffer.position) && pes.ES.buffer.position + 5 < pes.ES.buffer.length) {
          var frame = adts_default.appendFrame(this.audioTrack.meta.sampleRate, new Uint8Array(pes.ES.buffer.buffer), pes.ES.buffer.position, pes.pts, frameIndex);
          if (frame && frame.sample) {
            pes.ES.buffer.skip(frame.length);
            var sample = new AudioSample({
              dts: frame.sample.dts,
              pts: frame.sample.pts,
              data: frame.sample.unit,
              options: streamChanged ? {} : options
            });
            if (options.meta) {
              streamChanged = true;
            }
            sample.dts = sample.pts = Math.ceil(sample.pts / 90);
            this.emit(TsDemuxer3.EVENTS.AUDIO_SAMPLE_PARSED, sample);
            frameIndex++;
          } else {
            break;
          }
        } else {
          pes.ES.buffer.skip(1);
        }
      }
    }
  }, {
    key: "pushVideoSample",
    value: function pushVideoSample(pes, options) {
      var _this2 = this;
      var nals = NalUnit2.getNalunits(pes.ES.buffer);
      var meta = new VideoTrackMeta();
      var spsFound = options.spsFound;
      var sampleLength = 0;
      var sps = false;
      var pps = false;
      var seiList = [];
      for (var i = 0; i < nals.length; i++) {
        var nal = nals[i];
        if (nal.type < 9 && !nal.sei) {
          sampleLength += 4 + nal.body.byteLength;
        }
        if (nal.sps) {
          sps = nal;
          meta.sps = nal.body;
          meta.chromaFormat = sps.sps.chroma_format;
          meta.codec = "avc1.";
          for (var j = 1; j < 4; j++) {
            var h = sps.body[j].toString(16);
            if (h.length < 2) {
              h = "0" + h;
            }
            meta.codec += h;
          }
          meta.codecHeight = sps.sps.codec_size.height;
          meta.codecWidth = sps.sps.codec_size.width;
          meta.frameRate = sps.sps.frame_rate;
          meta.id = 1;
          meta.level = sps.sps.level_string;
          meta.presentHeight = sps.sps.present_size.height;
          meta.presentWidth = sps.sps.present_size.width;
          meta.profile = sps.sps.profile_string;
          meta.refSampleDuration = Math.floor(meta.timescale * (sps.sps.frame_rate.fps_den / sps.sps.frame_rate.fps_num));
          meta.sarRatio = sps.sps.sar_ratio ? sps.sps.sar_ratio : sps.sps.par_ratio;
        } else if (nal.pps) {
          meta.pps = nal.body;
          pps = nal;
        } else if (nal.sei) {
          seiList.push(nal.sei);
        }
      }
      if (sps && pps) {
        meta.avcc = NalUnit2.getAvcc(sps.body, pps.body);
        var metaEqual = TsDemuxer3.compareMeta(this.videoTrack.meta, meta, true);
        if (!this._hasVideoMeta || !metaEqual) {
          if (options) {
            options.meta = Object.assign({}, meta);
          } else {
            options = {
              meta: Object.assign({}, meta)
            };
          }
          if (!spsFound) {
            this.emit(TsDemuxer3.EVENTS.METADATA_PARSED, "video", meta);
          }
          options.spsFound = true;
          this._hasVideoMeta = true;
        }
      }
      var data = new Uint8Array(sampleLength);
      var offset = 0;
      var isKeyframe = false;
      for (var _i = 0; _i < nals.length; _i++) {
        var _nal = nals[_i];
        if (_nal.type && _nal.type >= 9) {
          continue;
        }
        var length = _nal.body.byteLength;
        if (_nal.idr) {
          isKeyframe = true;
        }
        if (!_nal.sei) {
          data.set(new Uint8Array([length >>> 24 & 255, length >>> 16 & 255, length >>> 8 & 255, length & 255]), offset);
          offset += 4;
          data.set(_nal.body, offset);
          offset += length;
        }
      }
      var dts = parseInt(pes.dts / 90);
      var pts = parseInt(pes.pts / 90);
      if (seiList.length) {
        seiList.forEach(function(sei) {
          sei.dts = dts;
          _this2.emit(TsDemuxer3.EVENTS.SEI_PARSED, sei);
        });
      }
      var sample = new VideoSample({
        dts,
        pts,
        cts: pts - dts,
        originDts: pes.dts,
        purePts: pes.purePts,
        isKeyframe,
        data,
        nals,
        options,
        firstInGop: isKeyframe,
        gopId: isKeyframe ? ++this.gopId : this.gopId
      });
      this.emit(TsDemuxer3.EVENTS.VIDEO_SAMPLE_PARSED, sample);
    }
  }, {
    key: "pushVideoSampleHEVC",
    value: function pushVideoSampleHEVC(pes, options) {
      var _this3 = this;
      var nals = NalUnitHEVC2.getNalunits(pes.ES.buffer);
      nals = nals.filter(function(x) {
        return x.body && x.body.length;
      });
      var meta = new VideoTrackMeta();
      meta.streamType = 36;
      var sampleLength = 0;
      var vps = false;
      var sps = false;
      var pps = false;
      var seiList = [];
      var hasVPS = false;
      var hasSPS = false;
      var hasPPS = false;
      var firstInGop = false;
      for (var i = 0; i < nals.length; i++) {
        var nal = nals[i];
        if (nal.vps) {
          if (hasVPS) {
            continue;
          } else {
            hasVPS = true;
          }
        } else if (nal.sps) {
          if (hasSPS) {
            continue;
          } else {
            hasSPS = true;
          }
        } else if (nal.pps) {
          if (hasPPS) {
            continue;
          } else {
            hasPPS = true;
          }
        } else if (nal.key) {
          if (nal.type === 20 || nal.type === 19) {
            firstInGop = true;
          }
        } else if (nal.type === 0) {
        } else if (nal.type === 35) {
          continue;
        }
        if (nal.sps) {
          sps = nal;
          meta.sps = nal.body;
          meta.presentWidth = sps.sps.width;
          meta.presentHeight = sps.sps.height;
          meta.general_profile_space = sps.sps.general_profile_space;
          meta.general_tier_flag = sps.sps.general_tier_flag;
          meta.general_profile_idc = sps.sps.general_profile_idc;
          meta.general_level_idc = sps.sps.general_level_idc;
          meta.codec = "hev1.1.6.L93.B0";
          meta.chromaFormatIdc = sps.sps.chromaFormatIdc;
          meta.bitDepthLumaMinus8 = sps.sps.bitDepthLumaMinus8;
          meta.bitDepthChromaMinus8 = sps.sps.bitDepthChromaMinus8;
        } else if (nal.pps) {
          meta.pps = nal.body;
          pps = nal;
        } else if (nal.vps) {
          meta.vps = nal.body;
          vps = nal;
        } else if (nal.sei) {
          seiList.push(nal.sei);
        }
        if (nal.type <= 40) {
          sampleLength += 4 + nal.body.byteLength;
        }
      }
      if (sps && pps && vps) {
        var metaEqual = TsDemuxer3.compareMeta(this.videoTrack.meta, meta, true);
        if (!this._hasVideoMeta || !metaEqual) {
          if (options) {
            options.meta = Object.assign({}, meta);
          } else {
            options = {
              meta: Object.assign({}, meta)
            };
          }
          meta.streamType = 36;
          this.videoTrack.meta = meta;
          this._hasVideoMeta = true;
          this.emit(TsDemuxer3.EVENTS.METADATA_PARSED, "video", meta);
        }
      }
      var data = new Uint8Array(sampleLength);
      var offset = 0;
      var isKeyframe = false;
      hasVPS = false;
      hasSPS = false;
      hasPPS = false;
      for (var _i2 = 0; _i2 < nals.length; _i2++) {
        var _nal2 = nals[_i2];
        if (_nal2.type && _nal2.type > 40) {
          continue;
        }
        if (_nal2.vps) {
          if (hasVPS) {
            continue;
          } else {
            hasVPS = true;
          }
        } else if (_nal2.sps) {
          if (hasSPS) {
            continue;
          } else {
            hasSPS = true;
          }
        } else if (_nal2.pps) {
          if (hasPPS) {
            continue;
          } else {
            hasPPS = true;
          }
        } else if (_nal2.key) {
        } else if (_nal2.type === 0) {
        } else if (_nal2.type === 35) {
          continue;
        }
        var length = _nal2.body.byteLength;
        if (_nal2.key) {
          isKeyframe = true;
        }
        data.set(new Uint8Array([length >>> 24 & 255, length >>> 16 & 255, length >>> 8 & 255, length & 255]), offset);
        offset += 4;
        data.set(_nal2.body, offset);
        offset += length;
      }
      var dts = parseInt(pes.dts / 90);
      var pts = parseInt(pes.pts / 90);
      if (seiList) {
        seiList.forEach(function(sei) {
          sei.dts = dts;
          _this3.emit(TsDemuxer3.EVENTS.SEI_PARSED, sei);
        });
      }
      var sample = new VideoSample({
        dts,
        pts,
        cts: pts - dts,
        originDts: pes.dts,
        purePts: pes.purePts,
        isKeyframe,
        data,
        nals,
        options,
        firstInGop,
        gopId: firstInGop ? ++this.gopId : this.gopId
      });
      this.emit(TsDemuxer3.EVENTS.VIDEO_SAMPLE_PARSED, sample);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllListeners();
      this.configs = {};
      this.demuxing = false;
      this.pat = [];
      this.pmt = [];
      this._hasVideoMeta = false;
      this._hasAudioMeta = false;
    }
  }], [{
    key: "compareArray",
    value: function compareArray(a, b, type) {
      var al = 0;
      var bl = 0;
      if (type === "Uint8Array") {
        al = a.byteLength;
        bl = b.byteLength;
      } else if (type === "Array") {
        al = a.length;
        bl = b.length;
      }
      if (al !== bl) {
        return false;
      }
      for (var i = 0; i < al; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "compareMeta",
    value: function compareMeta(a, b, ignoreDuration) {
      if (!a || !b) {
        return false;
      }
      for (var i = 0, k = Object.keys(a).length; i < k; i++) {
        var itema = a[Object.keys(a)[i]];
        var itemb = b[Object.keys(a)[i]];
        if (!itema && !itemb) {
          return true;
        }
        if ((itema === void 0 || itema === null) && itemb || itema && itemb === void 0) {
          return false;
        }
        if ((typeof itema === "undefined" ? "undefined" : _typeof3(itema)) !== "object") {
          if (ignoreDuration && Object.keys(a)[i] !== "duration" && Object.keys(a)[i] !== "refSampleDuration" && Object.keys(a)[i] !== "refSampleDurationFixed" && itema !== itemb) {
            return false;
          }
        } else if (itema.byteLength !== void 0) {
          if (itemb.byteLength === void 0) {
            return false;
          }
          if (!TsDemuxer3.compareArray(itema, itemb, "Uint8Array")) {
            return false;
          }
        } else if (itema.length !== void 0) {
          if (itemb.length === void 0) {
            return false;
          }
          if (!TsDemuxer3.compareArray(itema, itemb, "Array")) {
            return false;
          }
        } else {
          if (!TsDemuxer3.compareMeta(itema, itemb)) {
            return false;
          }
        }
      }
      return true;
    }
  }, {
    key: "mergeVideoES",
    value: function mergeVideoES(buffers) {
      var data = void 0;
      var length = 0;
      var offset = 0;
      for (var i = 0; i < buffers.length; i++) {
        length += buffers[i].length - buffers[i].position;
      }
      data = new Uint8Array(length);
      for (var _i3 = 0; _i3 < buffers.length; _i3++) {
        var buffer = buffers[_i3];
        data.set(new Uint8Array(buffer.buffer, buffer.position), offset);
        offset += buffer.length - buffer.position;
      }
      return new data_view_default(data.buffer);
    }
  }, {
    key: "mergeAudioES",
    value: function mergeAudioES(buffers) {
      var data = void 0;
      var length = 0;
      var offset = 0;
      for (var i = 0; i < buffers.length; i++) {
        length += buffers[i].length;
      }
      data = new Uint8Array(length);
      for (var _i4 = 0; _i4 < buffers.length; _i4++) {
        var buffer = buffers[_i4];
        data.set(new Uint8Array(buffer.buffer), offset);
        offset += buffer.length;
      }
      return new data_view_default(data.buffer);
    }
  }, {
    key: "read",
    value: function read(stream, ts, frags) {
      TsDemuxer3.readHeader(stream, ts);
      TsDemuxer3.readPayload(stream, ts, frags);
      if (ts.header.packet === "MEDIA" && ts.header.payload === 1 && !ts.unknownPIDs) {
        ts.pes = TsDemuxer3.PES(ts);
      }
    }
  }, {
    key: "readPayload",
    value: function readPayload(stream, ts, frags) {
      var header = ts.header;
      var pid = header.pid;
      switch (pid) {
        case 0:
          TsDemuxer3.PAT(stream, ts, frags);
          break;
        case 1:
          TsDemuxer3.CAT(stream, ts, frags);
          break;
        case 2:
          TsDemuxer3.TSDT(stream, ts, frags);
          break;
        case 8191:
          break;
        default:
          var isPMT = false;
          for (var i = 0, len = frags.pat.length; i < len; i++) {
            if (frags.pat[i].pid === pid) {
              isPMT = true;
              break;
            }
          }
          if (isPMT) {
            TsDemuxer3.PMT(stream, ts, frags);
          } else {
            var sts = [];
            for (var _i5 = 0, _len = frags.pmt.length; _i5 < _len; _i5++) {
              if (frags.pmt[_i5].pid === pid) {
                sts.push(frags.pmt[_i5]);
                break;
              }
            }
            if (sts.length > 0) {
              var streamType = sts[0].streamType;
              TsDemuxer3.Media(stream, ts, streamType);
            } else {
              ts.unknownPIDs = true;
            }
          }
      }
    }
  }, {
    key: "readHeader",
    value: function readHeader(stream, ts) {
      var header = {};
      header.sync = stream.readUint8();
      var next = stream.readUint16();
      header.error = next >>> 15;
      header.payload = next >>> 14 & 1;
      header.priority = next >>> 13 & 1;
      header.pid = next & 8191;
      next = stream.readUint8();
      header.scrambling = next >> 6 & 3;
      header.adaptation = next >> 4 & 3;
      header.continuity = next & 15;
      header.packet = header.pid === 0 ? "PAT" : "MEDIA";
      ts.header = header;
    }
  }, {
    key: "PAT",
    value: function PAT(stream, ts, frags) {
      var ret = {};
      var next = stream.readUint8();
      stream.skip(next);
      next = stream.readUint8();
      ret.tabelID = next;
      next = stream.readUint16();
      ret.error = next >>> 7;
      ret.zero = next >>> 6 & 1;
      ret.sectionLength = next & 4095;
      ret.streamID = stream.readUint16();
      ret.current = stream.readUint8() & 1;
      ret.sectionNumber = stream.readUint8();
      ret.lastSectionNumber = stream.readUint8();
      var N = (ret.sectionLength - 9) / 4;
      var list = [];
      for (var i = 0; i < N; i++) {
        var programNumber = stream.readUint16();
        var pid = stream.readUint16() & 8191;
        list.push({
          program: programNumber,
          pid,
          type: programNumber === 0 ? "network" : "mapPID"
        });
      }
      if (list.length > 0) {
        frags.pat = frags.pat.concat(list);
      }
      ret.list = list;
      ret.program = stream.readUint16();
      ret.pid = stream.readUint16() & 8191;
      ts.payload = ret;
    }
  }, {
    key: "PMT",
    value: function PMT(stream, ts, frags) {
      var header = ts.header;
      header.packet = "PMT";
      var offset = stream.position;
      offset += stream.getUint8(offset);
      offset += 1;
      var sectionLength = (stream.getUint8(offset + 1) & 15) << 8 | stream.getUint8(offset + 2);
      var tableEnd = offset + 3 + sectionLength - 4;
      var programInfoLength = (stream.getUint8(offset + 10) & 15) << 8 | stream.getUint8(offset + 11);
      offset += 12 + programInfoLength;
      var list = [];
      while (offset < tableEnd) {
        var pid = (stream.getUint8(offset + 1) & 31) << 8 | stream.getUint8(offset + 2);
        list.push({
          streamType: stream.getUint8(offset),
          pid
        });
        offset += ((stream.getUint8(offset + 3) & 15) << 8 | stream.getUint8(offset + 4)) + 5;
      }
      frags.pmt = list;
      stream.skip(tableEnd + 4);
    }
  }, {
    key: "Media",
    value: function Media(stream, ts, streamType) {
      var header = ts.header;
      var payload = {};
      var _StreamType$streamTyp = _slicedToArray(StreamType[streamType], 2), type = _StreamType$streamTyp[0], codec = _StreamType$streamTyp[1];
      header.streamType = streamType;
      header.type = type;
      header.codec = codec;
      if (header.adaptation === 3) {
        payload.adaptationLength = stream.readUint8();
        if (payload.adaptationLength > 0) {
          var next = stream.readUint8();
          payload.discontinue = next >>> 7;
          payload.access = next >>> 6 & 1;
          payload.priority = next >>> 5 & 1;
          payload.PCR = next >>> 4 & 1;
          payload.OPCR = next >>> 3 & 1;
          payload.splicePoint = next >>> 2 & 1;
          payload.transportPrivate = next >>> 1 & 1;
          payload.adaptationField = next & 1;
          var _start = stream.position;
          if (payload.PCR === 1) {
            payload.programClockBase = stream.readUint32() << 1;
            next = stream.readUint16();
            payload.programClockBase |= next >>> 15;
            payload.programClockExtension = next & 511;
          }
          if (payload.OPCR === 1) {
            payload.originProgramClockBase = stream.readUint32() << 1;
            next = stream.readUint16();
            payload.originProgramClockBase += next >>> 15;
            payload.originProgramClockExtension = next & 511;
          }
          if (payload.splicePoint === 1) {
            payload.spliceCountdown = stream.readUint8();
          }
          if (payload.transportPrivate === 1) {
            var length = stream.readUint8();
            var transportPrivateData = [];
            for (var i = 0; i < length; i++) {
              transportPrivateData.push(stream.readUint8());
            }
          }
          if (payload.adaptationField === 1) {
            var _length = stream.readUint8();
            var _next = stream.readUint8();
            var start = stream.position;
            var ltw = _next >>> 7;
            var piecewise = _next >>> 6 & 1;
            var seamless = _next >>> 5 & 1;
            if (ltw === 1) {
              _next = stream.readUint16();
              payload.ltwValid = _next >>> 15;
              payload.ltwOffset = _next & 61439;
            }
            if (piecewise === 1) {
              _next = stream.readUint24();
              payload.piecewiseRate = _next & 4194303;
            }
            if (seamless === 1) {
              _next = stream.readInt8();
              payload.spliceType = _next >>> 4;
              payload.dtsNextAU1 = _next >>> 1 & 7;
              payload.marker1 = _next & 1;
              _next = stream.readUint16();
              payload.dtsNextAU2 = _next >>> 1;
              payload.marker2 = _next & 1;
              _next = stream.readUint16();
              payload.dtsNextAU3 = _next;
            }
            stream.skip(_length - 1 - (stream.position - start));
          }
          var lastStuffing = payload.adaptationLength - 1 - (stream.position - _start);
          stream.skip(lastStuffing);
        }
      }
      payload.stream = new data_view_default(stream.buffer.slice(stream.position));
      ts.payload = payload;
    }
  }, {
    key: "PES",
    value: function PES(ts) {
      var ret = {};
      var buffer = ts.payload.stream;
      var next = buffer.readUint24();
      if (next !== 1) {
        ret.ES = {};
        ret.ES.buffer = buffer;
      } else {
        var streamID = buffer.readUint8();
        if (streamID >= 224 && streamID <= 239) {
          ret.type = "video";
        }
        if (streamID >= 192 && streamID <= 223) {
          ret.type = "audio";
        }
        var packetLength = buffer.readUint16();
        ret.packetLength = packetLength;
        if (ret.type === "video" || ret.type === "audio") {
          var _next2 = buffer.readUint8();
          var first = _next2 >>> 6;
          if (first !== 2) {
            throw new Error("error when parse pes header");
          }
          _next2 = buffer.readUint8();
          ret.ptsDTSFlag = _next2 >>> 6;
          ret.escrFlag = _next2 >>> 5 & 1;
          ret.esRateFlag = _next2 >>> 4 & 1;
          ret.dsmFlag = _next2 >>> 3 & 1;
          ret.additionalFlag = _next2 >>> 2 & 1;
          ret.crcFlag = _next2 >>> 1 & 1;
          ret.extensionFlag = _next2 & 1;
          ret.pesHeaderLength = buffer.readUint8();
          var N1 = ret.pesHeaderLength;
          var pts = [];
          pts.push(buffer.readUint8());
          pts.push(buffer.readUint8());
          pts.push(buffer.readUint8());
          pts.push(buffer.readUint8());
          pts.push(buffer.readUint8());
          var p = (pts[0] & 14) * 536870912 + (pts[1] & 255) * 4194304 + (pts[2] & 254) * 16384 + (pts[3] & 255) * 128 + (pts[4] & 254) / 2;
          ret.purePts = p;
          buffer.dataview.position -= 5;
          pts = [];
          _next2 = buffer.readUint8();
          pts.push(_next2 >>> 1 & 7);
          _next2 = buffer.readUint16();
          pts.push(_next2 >>> 1);
          _next2 = buffer.readUint16();
          pts.push(_next2 >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          N1 -= 5;
          if (ret.type === "video") {
            ret.dts = ret.pts;
          }
          if (ret.ptsDTSFlag === 3) {
            var dts = [];
            _next2 = buffer.readUint8();
            dts.push(_next2 >>> 1 & 7);
            _next2 = buffer.readUint16();
            dts.push(_next2 >>> 1);
            _next2 = buffer.readUint16();
            dts.push(_next2 >>> 1);
            ret.dts = dts[0] << 30 | dts[1] << 15 | dts[2];
            N1 -= 5;
          }
          if (ret.escrFlag === 1) {
            var escr = [];
            var ex = [];
            _next2 = buffer.readUint8();
            escr.push(_next2 >>> 3 & 7);
            escr.push(_next2 & 3);
            _next2 = buffer.readUint16();
            escr.push(_next2 >>> 13);
            escr.push(_next2 & 3);
            _next2 = buffer.readUint16();
            escr.push(_next2 >>> 13);
            ex.push(_next2 & 3);
            _next2 = buffer.readUint8();
            ex.push(_next2 >>> 1);
            ret.escr = (escr[0] << 30 | escr[1] << 28 | escr[2] << 15 | escr[3] << 13 | escr[4]) * 300 + (ex[0] << 7 | ex[1]);
            N1 -= 6;
          }
          if (ret.esRateFlag === 1) {
            _next2 = buffer.readUint24();
            ret.esRate = _next2 >>> 1 & 4194303;
            N1 -= 3;
          }
          if (ret.dsmFlag === 1) {
            throw new Error("not support DSM_trick_mode");
          }
          if (ret.additionalFlag === 1) {
            _next2 = buffer.readUint8();
            ret.additionalCopyInfo = _next2 & 127;
            N1 -= 1;
          }
          if (ret.crcFlag === 1) {
            ret.pesCRC = buffer.readUint16();
            N1 -= 2;
          }
          if (ret.extensionFlag === 1) {
            throw new Error("not support extension");
          }
          if (N1 > 0) {
            buffer.skip(N1);
          }
          if (ret.dts > ret.pts) {
            ret.dts = ret.pts;
          }
          ret.ES = TsDemuxer3.ES(buffer, ret.type, ts.header.streamType);
        } else {
          throw new Error("format is not supported");
        }
      }
      return ret;
    }
  }, {
    key: "ES",
    value: function ES(buffer, type, streamType) {
      var ret = {};
      if (type === "video") {
        ret.buffer = buffer;
      } else if (type === "audio") {
        if (streamType === 15 || streamType === 17) {
          ret = TsDemuxer3.parseADTSHeader(buffer);
        }
        ret.buffer = buffer;
      } else {
        throw new Error("ES " + type + " is not supported");
      }
      return ret;
    }
  }, {
    key: "parseADTSHeader",
    value: function parseADTSHeader(buffer) {
      var ret = {};
      var next = buffer.readUint16();
      if (next >>> 4 !== 4095) {
        throw new Error("aac ES parse Error");
      }
      var fq = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
      ret.id = (next >>> 3 & 1) === 0 ? "MPEG-4" : "MPEG-2";
      ret.layer = next >>> 1 & 3;
      ret.absent = next & 1;
      next = buffer.readUint16();
      ret.audioObjectType = (next >>> 14 & 3) + 1;
      ret.profile = ret.audioObjectType - 1;
      ret.frequencyIndex = next >>> 10 & 15;
      ret.frequence = fq[ret.frequencyIndex];
      ret.channel = next >>> 6 & 7;
      ret.frameLength = (next & 3) << 11 | buffer.readUint16() >>> 5;
      TsDemuxer3.getAudioConfig(ret);
      buffer.skip(1);
      ret.buffer = buffer;
      return ret;
    }
  }, {
    key: "TSDT",
    value: function TSDT(stream, ts, frags) {
      ts.payload = {};
    }
  }, {
    key: "CAT",
    value: function CAT(stream, ts, frags) {
      var ret = {};
      ret.tableID = stream.readUint8();
      var next = stream.readUint16();
      ret.sectionIndicator = next >>> 7;
      ret.sectionLength = next & 4095;
      stream.skip(2);
      next = stream.readUint8();
      ret.version = next >>> 3;
      ret.currentNextIndicator = next & 1;
      ret.sectionNumber = stream.readUint8();
      ret.lastSectionNumber = stream.readUint8();
      var N = (this.sectionLength - 9) / 4;
      var list = [];
      for (var i = 0; i < N; i++) {
        list.push({});
      }
      ret.crc32 = stream.readUint32();
      ts.payload = ret;
    }
  }, {
    key: "getAudioConfig",
    value: function getAudioConfig(ret) {
      var userAgent = navigator.userAgent.toLowerCase();
      var config = void 0;
      var extensionSampleIndex = void 0;
      ret.originAudioObjectType = ret.audioObjectType;
      if (/firefox/i.test(userAgent)) {
        if (ret.frequencyIndex >= 8) {
          ret.audioObjectType = 5;
          config = new Array(4);
          extensionSampleIndex = ret.frequencyIndex - 3;
        } else {
          ret.audioObjectType = 2;
          config = new Array(2);
          extensionSampleIndex = ret.frequencyIndex;
        }
      } else if (userAgent.indexOf("android") !== -1) {
        ret.audioObjectType = 2;
        config = new Array(2);
        extensionSampleIndex = ret.frequencyIndex;
      } else {
        ret.audioObjectType = 5;
        config = new Array(4);
        if (ret.frequencyIndex >= 6) {
          extensionSampleIndex = ret.frequencyIndex - 3;
        } else {
          if (ret.channel === 1) {
            ret.audioObjectType = 2;
            config = new Array(2);
          }
          extensionSampleIndex = ret.frequencyIndex;
        }
      }
      config[0] = ret.audioObjectType << 3;
      config[0] |= (ret.frequencyIndex & 14) >> 1;
      config[1] = (ret.frequencyIndex & 1) << 7;
      config[1] |= ret.channel << 3;
      if (ret.audioObjectType === 5) {
        config[1] |= (extensionSampleIndex & 14) >> 1;
        config[2] = (extensionSampleIndex & 1) << 7;
        config[2] |= 2 << 2;
        config[3] = 0;
      }
      ret.audioConfig = config;
    }
  }]);
  return TsDemuxer3;
}(import_eventemitter33.default);
var ts_demuxer_default = TsDemuxer;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/hls/ts.js
var _createClass39 = function() {
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
function _classCallCheck40(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var DEMUX_EVENTS4 = events_default.DEMUX_EVENTS;
var TsDemuxer2 = function() {
  function TsDemuxer3(configs) {
    _classCallCheck40(this, TsDemuxer3);
    this.configs = Object.assign({}, configs);
    this.demuxer = null;
  }
  _createClass39(TsDemuxer3, [{
    key: "init",
    value: function init() {
      this.on(DEMUX_EVENTS4.DEMUX_START, this.demux.bind(this));
    }
  }, {
    key: "initDemuxer",
    value: function initDemuxer() {
      this.demuxer.on(ts_demuxer_default.EVENTS.METADATA_PARSED, this.onMetaDataParsed.bind(this));
      this.demuxer.on(ts_demuxer_default.EVENTS.VIDEO_SAMPLE_PARSED, this.onVideoSampleParsed.bind(this));
      this.demuxer.on(ts_demuxer_default.EVENTS.AUDIO_SAMPLE_PARSED, this.onAudioSampleParsed.bind(this));
      this.demuxer.on(ts_demuxer_default.EVENTS.SEI_PARSED, this.emit.bind(this, DEMUX_EVENTS4.SEI_PARSED));
    }
  }, {
    key: "demux",
    value: function demux(frag, isVod) {
      if (!this._tracks) {
        return;
      }
      if (!this._tracks.audioTrack) {
        this._tracks.audioTrack = new AudioTrack();
      }
      if (!this._tracks.videoTrack) {
        this._tracks.videoTrack = new VideoTrack();
      }
      if (!this.demuxer) {
        this.demuxer = new ts_demuxer_default(this._tracks);
        this.initDemuxer();
      }
      try {
        this.demuxer.demux(frag, this.inputBuffer, isVod);
      } catch (e) {
        this.emit(DEMUX_EVENTS4.DEMUX_ERROR, this.TAG, e, false);
      }
      var hasVideo = this._tracks.videoTrack && this._tracks.videoTrack.samples.length ? 1 : 0;
      var hasAudio = this._tracks.audioTrack && this._tracks.audioTrack.samples.length ? 1 : 0;
      this.emit(DEMUX_EVENTS4.DEMUX_COMPLETE, hasVideo, hasAudio);
    }
  }, {
    key: "onMetaDataParsed",
    value: function onMetaDataParsed(type, meta) {
      var _tracks = this._tracks, videoTrack = _tracks.videoTrack, audioTrack = _tracks.audioTrack;
      var track = videoTrack;
      switch (type) {
        case "video":
          track = videoTrack;
          break;
        case "audio":
          track = audioTrack;
          break;
        default:
          track = videoTrack;
      }
      track.meta = meta;
      this.emit(DEMUX_EVENTS4.METADATA_PARSED, type, meta);
    }
  }, {
    key: "onVideoSampleParsed",
    value: function onVideoSampleParsed(sample) {
      if (sample.isKeyframe) {
        this.emit(DEMUX_EVENTS4.ISKEYFRAME, sample.pts);
      }
      this._tracks.videoTrack.samples.push(sample);
    }
  }, {
    key: "onAudioSampleParsed",
    value: function onAudioSampleParsed(sample) {
      this._tracks.audioTrack.samples.push(sample);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.off(DEMUX_EVENTS4.DEMUX_START, this.demux);
      this.configs = {};
      this.demuxer && this.demuxer.destroy();
    }
  }, {
    key: "inputBuffer",
    get: function get6() {
      return this._context.getInstance(this.configs.inputbuffer);
    }
  }, {
    key: "_tracks",
    get: function get6() {
      return this._context.getInstance("TRACKS");
    }
  }]);
  return TsDemuxer3;
}();
var ts_default = TsDemuxer2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/hls/m3u8.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass40 = function() {
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
function _classCallCheck41(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var REGEXP_ABSOLUTE_URL = /^(?:[a-zA-Z0-9+\-.]+:)?\/\//;
var REGEXP_URL_PAIR = /^((?:[a-zA-Z0-9+\-.]+:)?\/\/[^/?#]*)?([^?#]*\/)?/;
function getAbsoluteUrl(url, parentUrl) {
  if (!parentUrl || !url || REGEXP_ABSOLUTE_URL.test(url))
    return url;
  var pairs = REGEXP_URL_PAIR.exec(parentUrl);
  if (!pairs)
    return url;
  if (url[0] === "/")
    return pairs[1] + url;
  return pairs[1] + pairs[2] + url;
}
var M3U8Parser = function() {
  function M3U8Parser2() {
    _classCallCheck41(this, M3U8Parser2);
  }
  _createClass40(M3U8Parser2, null, [{
    key: "parse",
    value: function parse(text) {
      var baseurl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var ret = {
        duration: 0
      };
      if (!text || !text.split) {
        return;
      }
      var refs = text.split(/\r|\n/);
      refs = refs.filter(function(ref2) {
        return ref2;
      });
      var ref = refs.shift();
      if (!ref.match("#EXTM3U")) {
        throw new Error('Invalid m3u8 file: not "#EXTM3U"');
      }
      ref = refs.shift();
      var nextDiscontinue = false;
      var nextId = 0;
      while (ref) {
        var refm = ref.match(/#(.[A-Z|-]*):(.*)/);
        var refd = ref.match(/#(.[A-Z|-]*)/);
        if (refd && refm && refm.length > 2) {
          switch (refm[1]) {
            case "EXT-X-VERSION":
              ret.version = parseInt(refm[2]);
              break;
            case "EXT-X-MEDIA-SEQUENCE":
              ret.sequence = parseInt(refm[2]);
              break;
            case "EXT-X-TARGETDURATION":
              ret.targetduration = parseFloat(refm[2]);
              break;
            case "EXTINF":
              nextId = M3U8Parser2.parseFrag(refm, refs, ret, baseurl, nextDiscontinue, nextId);
              nextDiscontinue = false;
              break;
            case "EXT-X-KEY":
              M3U8Parser2.parseDecrypt(refm[2], ret);
              break;
            default:
              break;
          }
        }
        if (refd && refd.length > 1) {
          switch (refd[1]) {
            case "EXT-X-DISCONTINUITY":
              nextDiscontinue = true;
              break;
            case "EXT-X-ENDLIST":
              var last = ret.frags[ret.frags.length - 1];
              last.isLast = true;
              ret.end = true;
              break;
            default:
              break;
          }
        }
        ref = refs[nextId++];
      }
      return ret;
    }
  }, {
    key: "parseFrag",
    value: function parseFrag(refm, refs, ret, baseurl, discontinue, nextId) {
      if (!ret.frags) {
        ret.frags = [];
      }
      var frag = new ts_frag_default({
        start: ret.duration,
        duration: parseInt(parseFloat(refm[2]) * 1e3)
      });
      if (frag.duration < 200) {
        return nextId;
      }
      ret.duration += frag.duration;
      var nextline = refs[nextId++];
      if (nextline.match(/#(.*):(.*)/) || nextline.match(/^#/)) {
        nextline = refs[nextId++];
      }
      frag.url = getAbsoluteUrl(nextline, baseurl);
      frag.discontinue = discontinue;
      if (ret.frags.length) {
        var last = ret.frags[ret.frags.length - 1];
        frag.id = last.id + 1;
        frag.cc = discontinue ? last.cc + 1 : last.cc;
      } else {
        frag.id = ret.sequence || 1;
        frag.cc = 0;
      }
      ret.frags.push(frag);
      return nextId;
    }
  }, {
    key: "parseDecrypt",
    value: function parseDecrypt(refm, ret) {
      ret.encrypt = {};
      var refs = refm.split(",");
      for (var i in refs) {
        var cmd = refs[i];
        if (cmd.match(/METHOD=(.*)/)) {
          ret.encrypt.method = cmd.match(/METHOD=(.*)/)[1];
        }
        if (cmd.match(/URI="(.*)"/)) {
          ret.encrypt.uri = cmd.match(/URI="(.*)"/)[1];
        }
        if (cmd.match(/IV=0x(.*)/)) {
          var iv = cmd.match(/IV=0x(.*)/)[1];
          var length = Math.ceil(iv.length / 2);
          ret.encrypt.ivb = new Uint8Array(length);
          for (var _i = length - 1; _i >= 0; _i--) {
            var im = parseInt(iv.substr(_i * 2, 2), 16);
            ret.encrypt.ivb[_i] = im;
          }
          ret.encrypt.iv = iv;
        }
      }
      ;
    }
  }, {
    key: "isHTTPS",
    value: function isHTTPS(url) {
      var httpsUrlRegex = /^https:\/\//i;
      return httpsUrlRegex.test(url);
    }
  }]);
  return M3U8Parser2;
}();
var m3u8_default = M3U8Parser;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/remuxer.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_eventemitter34 = __toESM(require_eventemitter3_4_0());

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/buffer.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_concat_typed_array = __toESM(require_lib());
var _createClass41 = function() {
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
function _classCallCheck42(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Buffer = function() {
  function Buffer2(buffer) {
    _classCallCheck42(this, Buffer2);
    this.buffer = buffer || new Uint8Array(0);
  }
  _createClass41(Buffer2, [{
    key: "write",
    value: function write() {
      var _this = this;
      for (var _len = arguments.length, buffer = Array(_len), _key = 0; _key < _len; _key++) {
        buffer[_key] = arguments[_key];
      }
      buffer.forEach(function(item) {
        _this.buffer = (0, import_concat_typed_array.default)(Uint8Array, _this.buffer, item);
      });
    }
  }], [{
    key: "writeUint32",
    value: function writeUint32(value) {
      return new Uint8Array([value >> 24, value >> 16 & 255, value >> 8 & 255, value & 255]);
    }
  }, {
    key: "readAsInt",
    value: function readAsInt(arr) {
      var temp = "";
      function padStart4Hex(hexNum) {
        var hexStr = hexNum.toString(16);
        return hexStr.padStart(2, "0");
      }
      arr.forEach(function(num) {
        temp += padStart4Hex(num);
      });
      return parseInt(temp, 16);
    }
  }]);
  return Buffer2;
}();
var buffer_default = Buffer;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/fmp4.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass42 = function() {
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
function _classCallCheck43(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Fmp4 = function() {
  function Fmp42() {
    _classCallCheck43(this, Fmp42);
  }
  _createClass42(Fmp42, null, [{
    key: "size",
    value: function size(value) {
      return buffer_default.writeUint32(value);
    }
  }, {
    key: "initBox",
    value: function initBox(size, name) {
      var buffer = new buffer_default();
      for (var _len = arguments.length, content = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        content[_key - 2] = arguments[_key];
      }
      buffer.write.apply(buffer, [Fmp42.size(size), Fmp42.type(name)].concat(content));
      return buffer.buffer;
    }
  }, {
    key: "extension",
    value: function extension(version, flag) {
      return new Uint8Array([version, flag >> 16 & 255, flag >> 8 & 255, flag & 255]);
    }
  }, {
    key: "ftyp",
    value: function ftyp() {
      return Fmp42.initBox(24, "ftyp", new Uint8Array([
        105,
        115,
        111,
        109,
        0,
        0,
        0,
        1,
        105,
        115,
        111,
        109,
        97,
        118,
        99,
        49
      ]));
    }
  }, {
    key: "ftypHEVC",
    value: function ftypHEVC() {
      return Fmp42.initBox(24, "ftyp", new Uint8Array([
        105,
        115,
        111,
        109,
        0,
        0,
        0,
        1,
        105,
        115,
        111,
        109,
        100,
        97,
        115,
        104
      ]));
    }
  }, {
    key: "moov",
    value: function moov(_ref) {
      var type = _ref.type, meta = _ref.meta;
      var size = 8;
      var mvhd = Fmp42.mvhd(meta.duration, meta.timescale);
      var trak = void 0;
      if (type === "video") {
        trak = Fmp42.videoTrak(meta);
      } else {
        trak = Fmp42.audioTrak(meta);
      }
      var mvex = Fmp42.mvex(meta.duration, meta.timescale || 1e3, meta.id);
      [mvhd, trak, mvex].forEach(function(item) {
        size += item.byteLength;
      });
      return Fmp42.initBox(size, "moov", mvhd, trak, mvex);
    }
  }, {
    key: "mvhd",
    value: function mvhd(duration) {
      var timescale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
      var bytes = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        timescale >>> 24 & 255,
        timescale >>> 16 & 255,
        timescale >>> 8 & 255,
        timescale & 255,
        duration >>> 24 & 255,
        duration >>> 16 & 255,
        duration >>> 8 & 255,
        duration & 255,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        255,
        255,
        255
      ]);
      return Fmp42.initBox(8 + bytes.length, "mvhd", new Uint8Array(bytes));
    }
  }, {
    key: "videoTrak",
    value: function videoTrak(data) {
      var size = 8;
      var tkhd = Fmp42.tkhd({
        id: 1,
        duration: data.duration,
        timescale: data.timescale || 1e3,
        width: data.presentWidth,
        height: data.presentHeight,
        type: "video"
      });
      var mdia = Fmp42.mdia({
        type: "video",
        timescale: data.timescale || 1e3,
        duration: data.duration,
        avcc: data.avcc,
        parRatio: data.parRatio,
        width: data.presentWidth,
        height: data.presentHeight,
        streamType: data.streamType
      });
      [tkhd, mdia].forEach(function(item) {
        size += item.byteLength;
      });
      return Fmp42.initBox(size, "trak", tkhd, mdia);
    }
  }, {
    key: "audioTrak",
    value: function audioTrak(data) {
      var size = 8;
      var tkhd = Fmp42.tkhd({
        id: 2,
        duration: data.duration,
        timescale: data.timescale || 1e3,
        width: 0,
        height: 0,
        type: "audio"
      });
      var mdia = Fmp42.mdia({
        type: "audio",
        timescale: data.timescale || 1e3,
        duration: data.duration,
        channelCount: data.channelCount,
        samplerate: data.sampleRate,
        config: data.config
      });
      [tkhd, mdia].forEach(function(item) {
        size += item.byteLength;
      });
      return Fmp42.initBox(size, "trak", tkhd, mdia);
    }
  }, {
    key: "tkhd",
    value: function tkhd(data) {
      var id = data.id;
      var duration = data.duration;
      var width = data.width;
      var height = data.height;
      var content = new Uint8Array([
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        id >>> 24 & 255,
        id >>> 16 & 255,
        id >>> 8 & 255,
        id & 255,
        0,
        0,
        0,
        0,
        duration >>> 24 & 255,
        duration >>> 16 & 255,
        duration >>> 8 & 255,
        duration & 255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        width >>> 8 & 255,
        width & 255,
        0,
        0,
        height >>> 8 & 255,
        height & 255,
        0,
        0
      ]);
      return Fmp42.initBox(8 + content.byteLength, "tkhd", content);
    }
  }, {
    key: "edts",
    value: function edts(data) {
      var buffer = new buffer_default();
      var duration = data.duration;
      var mediaTime = data.mediaTime;
      buffer.write(Fmp42.size(36), Fmp42.type("edts"));
      buffer.write(Fmp42.size(28), Fmp42.type("elst"));
      buffer.write(new Uint8Array([
        0,
        0,
        0,
        1,
        duration >> 24 & 255,
        duration >> 16 & 255,
        duration >> 8 & 255,
        duration & 255,
        mediaTime >> 24 & 255,
        mediaTime >> 16 & 255,
        mediaTime >> 8 & 255,
        mediaTime & 255,
        0,
        0,
        0,
        1
      ]));
      return buffer.buffer;
    }
  }, {
    key: "mdia",
    value: function mdia(data) {
      var size = 8;
      var mdhd = Fmp42.mdhd(data.timescale, data.duration);
      var hdlr = Fmp42.hdlr(data.type);
      var minf = Fmp42.minf(data);
      [mdhd, hdlr, minf].forEach(function(item) {
        size += item.byteLength;
      });
      return Fmp42.initBox(size, "mdia", mdhd, hdlr, minf);
    }
  }, {
    key: "mdhd",
    value: function mdhd() {
      var timescale = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1e3;
      var duration = arguments[1];
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        timescale >>> 24 & 255,
        timescale >>> 16 & 255,
        timescale >>> 8 & 255,
        timescale & 255,
        duration >>> 24 & 255,
        duration >>> 16 & 255,
        duration >>> 8 & 255,
        duration & 255,
        85,
        196,
        0,
        0
      ]);
      return Fmp42.initBox(12 + content.byteLength, "mdhd", Fmp42.extension(0, 0), content);
    }
  }, {
    key: "hdlr",
    value: function hdlr(type) {
      var value = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        118,
        105,
        100,
        101,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        86,
        105,
        100,
        101,
        111,
        72,
        97,
        110,
        100,
        108,
        101,
        114,
        0
      ];
      if (type === "audio") {
        value.splice.apply(value, [8, 4].concat([115, 111, 117, 110]));
        value.splice.apply(value, [24, 13].concat([83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]));
      }
      return Fmp42.initBox(8 + value.length, "hdlr", new Uint8Array(value));
    }
  }, {
    key: "minf",
    value: function minf(data) {
      var size = 8;
      var vmhd = data.type === "video" ? Fmp42.vmhd() : Fmp42.smhd();
      var dinf = Fmp42.dinf();
      var stbl = Fmp42.stbl(data);
      [vmhd, dinf, stbl].forEach(function(item) {
        size += item.byteLength;
      });
      return Fmp42.initBox(size, "minf", vmhd, dinf, stbl);
    }
  }, {
    key: "vmhd",
    value: function vmhd() {
      return Fmp42.initBox(20, "vmhd", new Uint8Array([
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]));
    }
  }, {
    key: "smhd",
    value: function smhd() {
      return Fmp42.initBox(16, "smhd", new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]));
    }
  }, {
    key: "dinf",
    value: function dinf() {
      var buffer = new buffer_default();
      var dref = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        12,
        117,
        114,
        108,
        32,
        0,
        0,
        0,
        1
      ];
      buffer.write(Fmp42.size(36), Fmp42.type("dinf"), Fmp42.size(28), Fmp42.type("dref"), new Uint8Array(dref));
      return buffer.buffer;
    }
  }, {
    key: "stbl",
    value: function stbl(data) {
      var size = 8;
      var stsd = Fmp42.stsd(data);
      var stts = Fmp42.stts();
      var stsc = Fmp42.stsc();
      var stsz = Fmp42.stsz();
      var stco = Fmp42.stco();
      [stsd, stts, stsc, stsz, stco].forEach(function(item) {
        size += item.byteLength;
      });
      return Fmp42.initBox(size, "stbl", stsd, stts, stsc, stsz, stco);
    }
  }, {
    key: "stsd",
    value: function stsd(data) {
      var content = void 0;
      if (data.type === "audio") {
        content = Fmp42.mp4a(data);
      } else {
        if (data.streamType === 36) {
          content = Fmp42.hvc1(data);
        } else {
          content = Fmp42.avc1(data);
        }
      }
      return Fmp42.initBox(16 + content.byteLength, "stsd", Fmp42.extension(0, 0), new Uint8Array([0, 0, 0, 1]), content);
    }
  }, {
    key: "mp4a",
    value: function mp4a(data) {
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        data.channelCount,
        0,
        16,
        0,
        0,
        0,
        0,
        data.samplerate >> 8 & 255,
        data.samplerate & 255,
        0,
        0
      ]);
      var esds = Fmp42.esds(data.config);
      return Fmp42.initBox(8 + content.byteLength + esds.byteLength, "mp4a", content, esds);
    }
  }, {
    key: "esds",
    value: function esds() {
      var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [43, 146, 8, 0];
      var configlen = config.length;
      var buffer = new buffer_default();
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        3,
        23 + configlen,
        0,
        1,
        0,
        4,
        15 + configlen,
        64,
        21,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5
      ].concat([configlen]).concat(config).concat([6, 1, 2]));
      buffer.write(Fmp42.size(8 + content.byteLength), Fmp42.type("esds"), content);
      return buffer.buffer;
    }
  }, {
    key: "avc1",
    value: function avc1(data) {
      var buffer = new buffer_default();
      var size = 40;
      var width = data.width;
      var height = data.height;
      var hSpacing = data.parRatio.width;
      var vSpacing = data.parRatio.height;
      var avcc = data.avcc;
      var avc12 = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        width >> 8 & 255,
        width & 255,
        height >> 8 & 255,
        height & 255,
        0,
        72,
        0,
        0,
        0,
        72,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        18,
        100,
        97,
        105,
        108,
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        17,
        17
      ]);
      var btrt = new Uint8Array([
        0,
        28,
        156,
        128,
        0,
        45,
        198,
        192,
        0,
        45,
        198,
        192
      ]);
      var pasp = new Uint8Array([
        hSpacing >> 24,
        hSpacing >> 16 & 255,
        hSpacing >> 8 & 255,
        hSpacing & 255,
        vSpacing >> 24,
        vSpacing >> 16 & 255,
        vSpacing >> 8 & 255,
        vSpacing & 255
      ]);
      buffer.write(Fmp42.size(size + avc12.byteLength + avcc.byteLength + btrt.byteLength), Fmp42.type("avc1"), avc12, Fmp42.size(8 + avcc.byteLength), Fmp42.type("avcC"), avcc, Fmp42.size(20), Fmp42.type("btrt"), btrt, Fmp42.size(16), Fmp42.type("pasp"), pasp);
      return buffer.buffer;
    }
  }, {
    key: "hvc1",
    value: function hvc1(track) {
      var buffer = new buffer_default();
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        track.width >> 8 & 255,
        track.width & 255,
        track.height >> 8 & 255,
        track.height & 255,
        0,
        72,
        0,
        0,
        0,
        72,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        255,
        255,
        0,
        0,
        0,
        122,
        104,
        118,
        99,
        67,
        1,
        1,
        96,
        0,
        0,
        0,
        144,
        0,
        0,
        0,
        0,
        0,
        93,
        240,
        0,
        252,
        253,
        248,
        248,
        0,
        0,
        15,
        3,
        160,
        0,
        1,
        0,
        24,
        64,
        1,
        12,
        1,
        255,
        255,
        1,
        96,
        0,
        0,
        3,
        0,
        144,
        0,
        0,
        3,
        0,
        0,
        3,
        0,
        93,
        153,
        152,
        9,
        161,
        0,
        1,
        0,
        45,
        66,
        1,
        1,
        1,
        96,
        0,
        0,
        3,
        0,
        144,
        0,
        0,
        3,
        0,
        0,
        3,
        0,
        93,
        160,
        2,
        128,
        128,
        45,
        22,
        89,
        153,
        164,
        147,
        43,
        154,
        128,
        128,
        128,
        130,
        0,
        0,
        3,
        0,
        2,
        0,
        0,
        3,
        0,
        50,
        16,
        162,
        0,
        1,
        0,
        7,
        68,
        1,
        193,
        114,
        180,
        98,
        64
      ]);
      buffer.write(Fmp42.size(8 + content.byteLength + 10), Fmp42.type("hvc1"), content, Fmp42.size(10), Fmp42.type("fiel"), new Uint8Array([1, 0]));
      return buffer.buffer;
    }
  }, {
    key: "stts",
    value: function stts() {
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]);
      return Fmp42.initBox(16, "stts", content);
    }
  }, {
    key: "stsc",
    value: function stsc() {
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]);
      return Fmp42.initBox(16, "stsc", content);
    }
  }, {
    key: "stco",
    value: function stco() {
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]);
      return Fmp42.initBox(16, "stco", content);
    }
  }, {
    key: "stsz",
    value: function stsz() {
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]);
      return Fmp42.initBox(20, "stsz", content);
    }
  }, {
    key: "mvex",
    value: function mvex(duration) {
      var timescale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
      var trackID = arguments[2];
      var buffer = new buffer_default();
      var mehd = buffer_default.writeUint32(duration);
      buffer.write(Fmp42.size(56), Fmp42.type("mvex"), Fmp42.size(16), Fmp42.type("mehd"), Fmp42.extension(0, 0), mehd, Fmp42.trex(trackID));
      return buffer.buffer;
    }
  }, {
    key: "trex",
    value: function trex(id) {
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        id >> 24,
        id >> 16 & 255,
        id >> 8 & 255,
        id & 255,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1
      ]);
      return Fmp42.initBox(8 + content.byteLength, "trex", content);
    }
  }, {
    key: "moof",
    value: function moof(data) {
      var size = 8;
      var mfhd = Fmp42.mfhd();
      var traf = Fmp42.traf(data);
      [mfhd, traf].forEach(function(item) {
        size += item.byteLength;
      });
      return Fmp42.initBox(size, "moof", mfhd, traf);
    }
  }, {
    key: "mfhd",
    value: function mfhd() {
      var content = buffer_default.writeUint32(Fmp42.sequence);
      Fmp42.sequence += 1;
      return Fmp42.initBox(16, "mfhd", Fmp42.extension(0, 0), content);
    }
  }, {
    key: "traf",
    value: function traf(data) {
      var size = 8;
      var tfhd = Fmp42.tfhd(data.id);
      var tfdt = Fmp42.tfdt(data.time);
      var sdtp = Fmp42.sdtp(data);
      var trun = Fmp42.trun(data, sdtp.byteLength);
      [tfhd, tfdt, trun, sdtp].forEach(function(item) {
        size += item.byteLength;
      });
      return Fmp42.initBox(size, "traf", tfhd, tfdt, trun, sdtp);
    }
  }, {
    key: "tfhd",
    value: function tfhd(id) {
      var content = buffer_default.writeUint32(id);
      return Fmp42.initBox(16, "tfhd", Fmp42.extension(0, 0), content);
    }
  }, {
    key: "tfdt",
    value: function tfdt(time) {
      return Fmp42.initBox(16, "tfdt", Fmp42.extension(0, 0), buffer_default.writeUint32(time));
    }
  }, {
    key: "trun",
    value: function trun(data, sdtpLength) {
      var buffer = new buffer_default();
      var sampleCount = buffer_default.writeUint32(data.samples.length);
      var offset = buffer_default.writeUint32(8 + 8 + 16 + 8 + 16 + 16 + 12 + 4 + 4 + 16 * data.samples.length + sdtpLength);
      buffer.write(Fmp42.size(20 + 16 * data.samples.length), Fmp42.type("trun"), new Uint8Array([0, 0, 15, 1]), sampleCount, offset);
      data.samples.forEach(function(item) {
        var flags = item.flags;
        buffer.write(new Uint8Array([
          item.duration >>> 24 & 255,
          item.duration >>> 16 & 255,
          item.duration >>> 8 & 255,
          item.duration & 255,
          item.size >>> 24 & 255,
          item.size >>> 16 & 255,
          item.size >>> 8 & 255,
          item.size & 255,
          flags.isLeading << 2 | flags.dependsOn,
          flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.isNonSync,
          0,
          0,
          item.cts >>> 24 & 255,
          item.cts >>> 16 & 255,
          item.cts >>> 8 & 255,
          item.cts & 255
        ]));
      });
      return buffer.buffer;
    }
  }, {
    key: "sdtp",
    value: function sdtp(data) {
      var buffer = new buffer_default();
      buffer.write(Fmp42.size(12 + data.samples.length), Fmp42.type("sdtp"), Fmp42.extension(0, 0));
      data.samples.forEach(function(item) {
        var flags = item.flags;
        var num = flags.isLeading << 6 | flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
        buffer.write(new Uint8Array([num]));
      });
      return buffer.buffer;
    }
  }, {
    key: "mdat",
    value: function mdat(data) {
      var buffer = new buffer_default();
      var size = 8;
      data.samples.forEach(function(item) {
        size += item.size;
      });
      buffer.write(Fmp42.size(size), Fmp42.type("mdat"));
      var mdatBox = new Uint8Array(size);
      var offset = 0;
      mdatBox.set(buffer.buffer, offset);
      offset += 8;
      data.samples.forEach(function(item) {
        item.buffer.forEach(function(unit) {
          mdatBox.set(unit, offset);
          offset += unit.byteLength;
        });
      });
      return mdatBox;
    }
  }]);
  return Fmp42;
}();
Fmp4.type = function(name) {
  return new Uint8Array([name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)]);
};
Fmp4.sequence = 1;
var fmp4_default = Fmp4;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/remuxer.js
var _createClass43 = function() {
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
function _classCallCheck44(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn5(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Mp4Remuxer = function(_EventEmitter) {
  _inherits5(Mp4Remuxer3, _EventEmitter);
  function Mp4Remuxer3(_ref) {
    var videoMeta = _ref.videoMeta, audioMeta = _ref.audioMeta, curTime = _ref.curTime;
    _classCallCheck44(this, Mp4Remuxer3);
    var _this = _possibleConstructorReturn5(this, (Mp4Remuxer3.__proto__ || Object.getPrototypeOf(Mp4Remuxer3)).call(this));
    _this.TAG = "Fmp4Remuxer";
    _this._dtsBase = curTime * 1e3;
    _this._videoMeta = videoMeta;
    _this._audioMeta = audioMeta;
    _this._audioDtsBase = null;
    _this._videoDtsBase = null;
    _this._isDtsBaseInited = false;
    _this.isFirstVideo = true;
    _this.isFirstAudio = true;
    _this.videoAllDuration = 0;
    _this.audioAllDuration = 0;
    _this.audioRemuxed = 0;
    _this.videoRemuxed = 0;
    _this.mp4Durations = {
      keys: []
    };
    return _this;
  }
  _createClass43(Mp4Remuxer3, [{
    key: "destroy",
    value: function destroy() {
      this._dtsBase = -1;
      this._isDtsBaseInited = false;
      this.mp4Durations = {
        keys: []
      };
      this.removeAllListeners();
    }
  }, {
    key: "remux",
    value: function remux(audioTrack, videoTrack) {
      !this._isDtsBaseInited && this.calcDtsBase(audioTrack, videoTrack);
      this.remuxVideo(videoTrack);
      this.remuxAudio(audioTrack);
      dev_logger_default.groupEnd();
    }
  }, {
    key: "resetDtsBase",
    value: function resetDtsBase() {
      this._dtsBase = 0;
    }
  }, {
    key: "seek",
    value: function seek(time) {
      dev_logger_default.log(this.TAG, "set dtsBase for seek(),time=", time);
      if (!this._isDtsBaseInited) {
        this._dtsBase = time * 1e3;
      } else {
        this._isDtsBaseInited = false;
        this._dtsBase = time * 1e3;
      }
      this._audioDtsBase = this._videoDtsBase = null;
    }
  }, {
    key: "remuxInitSegment",
    value: function remuxInitSegment(type, meta) {
      dev_logger_default.log(this.TAG, "remuxInitSegment: type=", type);
      var initSegment = new buffer_default();
      var ftyp = meta.streamType === 36 ? fmp4_default.ftypHEVC() : fmp4_default.ftyp();
      var moov = fmp4_default.moov({ type, meta });
      initSegment.write(ftyp, moov);
      return initSegment;
    }
  }, {
    key: "calcDtsBase",
    value: function calcDtsBase(audioTrack, videoTrack) {
      if (!audioTrack && videoTrack.samples.length) {
        var firstSample = videoTrack.samples[0];
        var _start = void 0;
        if (firstSample.options && firstSample.options.start) {
          _start = firstSample.options.start;
        }
        this._videoDtsBase = firstSample.dts - (_start || this._dtsBase);
        this._isDtsBaseInited = true;
        return;
      }
      if ((!audioTrack || !audioTrack.samples.length) && (!videoTrack || !videoTrack.samples.length)) {
        return;
      }
      var audioBase = null;
      var videoBase = null;
      var start = null;
      if (audioTrack && audioTrack.samples && audioTrack.samples.length) {
        var _firstSample = audioTrack.samples[0];
        audioBase = _firstSample.dts;
        if (_firstSample.options && _firstSample.options.start) {
          start = _firstSample.options.start;
        }
      }
      if (videoTrack && videoTrack.samples && videoTrack.samples.length) {
        var _firstSample2 = videoTrack.samples[0];
        videoBase = _firstSample2.dts;
        if (_firstSample2.options && _firstSample2.options.start) {
          start = _firstSample2.options.start;
        }
      }
      var delta = audioBase - videoBase;
      if (!!audioBase && delta < 0 && start !== null) {
        videoTrack.samples.forEach(function(x) {
          x.dts -= delta;
          if (x.pts) {
            x.pts -= delta;
          }
        });
      }
      this._videoDtsBase = (videoBase || audioBase) - (start || this._dtsBase);
      this._audioDtsBase = (audioBase || videoBase) - (start || this._dtsBase);
      this._dtsBase = Math.min(videoBase, audioBase);
      this._isDtsBaseInited = true;
      dev_logger_default.log(this.TAG, "calcDtsBase");
      dev_logger_default.log(this.TAG, "video first dts: " + videoBase + " , start:" + start + " , _videoDtsBase:" + this._videoDtsBase + " , _dtsBase:" + this._dtsBase);
      dev_logger_default.log(this.TAG, "audio first dts: " + audioBase + " , start:" + start + " , _audioDtsBase:" + this._audioDtsBase + ", _dtsBase:" + this._dtsBase);
    }
  }, {
    key: "remuxVideo",
    value: function remuxVideo(videoTrack) {
      var _this2 = this;
      var track = videoTrack || {};
      if (!videoTrack || !videoTrack.samples || !videoTrack.samples.length) {
        return;
      }
      var samples = track.samples, meta = track.meta;
      if (!meta)
        return;
      var firstDts = -1;
      var initSegment = null;
      var mp4Samples = [];
      var mdatBox = {
        samples: []
      };
      var maxLoop = 1e4;
      while (samples.length && maxLoop-- > 0) {
        var avcSample = samples.shift();
        var isKeyframe = avcSample.isKeyframe, options = avcSample.options;
        if (!this.isFirstVideo && options && options.meta) {
          initSegment = this.remuxInitSegment("video", options.meta);
          options.meta = null;
          samples.unshift(avcSample);
          if (!options.isContinue) {
            this._videoDtsBase = 0;
          }
          break;
        }
        var dts = Math.max(0, avcSample.dts - this.videoDtsBase);
        if (firstDts === -1) {
          firstDts = dts;
        }
        var cts = void 0;
        var pts = void 0;
        if (avcSample.pts !== void 0) {
          pts = avcSample.pts - this._dtsBase;
          cts = pts - dts;
        }
        if (avcSample.cts !== void 0) {
          pts = avcSample.cts + dts;
          cts = avcSample.cts;
        }
        var mdatSample = {
          buffer: [],
          size: 0
        };
        var sampleDuration = 0;
        if (avcSample.duration) {
          sampleDuration = avcSample.duration;
        } else if (samples.length >= 1) {
          var nextDts = samples[0].dts - this.videoDtsBase;
          sampleDuration = nextDts - dts;
        } else {
          if (mp4Samples.length >= 1) {
            sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
          } else {
            sampleDuration = this._videoMeta.refSampleDuration;
          }
        }
        this.videoAllDuration += sampleDuration;
        if (dev_logger_default.long) {
          dev_logger_default.log(this.TAG, "video dts " + dts, "pts " + pts, "cts: " + cts, isKeyframe, "originDts " + avcSample.originDts, "duration " + sampleDuration);
        }
        if (sampleDuration >= 0) {
          mdatBox.samples.push(mdatSample);
          mdatSample.buffer.push(avcSample.data);
          mdatSample.size += avcSample.data.byteLength;
          mp4Samples.push({
            dts,
            cts,
            pts,
            data: avcSample.data,
            size: avcSample.data.byteLength,
            isKeyframe,
            duration: sampleDuration,
            flags: {
              isLeading: 0,
              dependsOn: isKeyframe ? 2 : 1,
              isDependedOn: isKeyframe ? 1 : 0,
              hasRedundancy: 0,
              isNonSync: isKeyframe ? 0 : 1
            },
            originDts: dts,
            type: "video"
          });
          this.mp4Durations[pts] = sampleDuration;
          this.mp4Durations.keys.push(pts);
        }
        if (isKeyframe) {
          this.emit(Mp4Remuxer3.EVENTS.RANDOM_ACCESS_POINT, pts);
        }
      }
      if (this.mp4Durations.keys.length > 1e4) {
        var tmp = this.mp4Durations;
        this.mp4Durations = {};
        this.mp4Durations.keys = tmp.keys.slice(-100);
        this.mp4Durations.keys.forEach(function(key) {
          _this2.mp4Durations[key] = tmp[key];
        });
      }
      if (mp4Samples.length) {
        dev_logger_default.log(this.TAG, "remux to mp4 video:", [firstDts / 1e3, mp4Samples[mp4Samples.length - 1].dts / 1e3]);
      }
      var moofMdat = new buffer_default();
      if (mp4Samples.length && track.meta) {
        var moof = fmp4_default.moof({
          id: track.meta.id,
          time: firstDts,
          samples: mp4Samples
        });
        var mdat = fmp4_default.mdat(mdatBox);
        moofMdat.write(moof, mdat);
        this.segmentRemuxed("video", moofMdat, mp4Samples[mp4Samples.length - 1].pts - mp4Samples[0].pts);
      }
      if (initSegment) {
        this.segmentRemuxed("video", initSegment);
        if (samples.length) {
          track.samples = samples;
          return this.remuxVideo(track);
        }
      }
      this.isFirstVideo = false;
      this.emit(Mp4Remuxer3.EVENTS.TRACK_REMUXED, "video", moofMdat);
      track.samples = [];
      track.length = 0;
    }
  }, {
    key: "remuxAudio",
    value: function remuxAudio(track) {
      var _ref2 = track || {}, samples = _ref2.samples;
      var firstDts = -1;
      var mp4Samples = [];
      var initSegment = null;
      var mdatBox = {
        samples: []
      };
      if (!samples || !samples.length) {
        return;
      }
      var maxLoop = 1e4;
      var isFirstDtsInited = false;
      while (samples.length && maxLoop-- > 0) {
        var sample = samples.shift();
        var data = sample.data, options = sample.options;
        if (!this.isFirstAudio && options && options.meta) {
          initSegment = this.remuxInitSegment("audio", options.meta);
          options.meta = null;
          samples.unshift(sample);
          if (!options.isContinue) {
            this._audioDtsBase = 0;
          }
          break;
        }
        var dts = Math.max(0, sample.dts - this.audioDtsBase);
        var originDts = sample.originDts;
        if (!isFirstDtsInited) {
          firstDts = dts;
          isFirstDtsInited = true;
        }
        var sampleDuration = 0;
        if (sample.duration) {
          sampleDuration = sample.duration;
        } else if (this._audioMeta.refSampleDurationFixed) {
          sampleDuration = this._audioMeta.refSampleDurationFixed;
        } else if (samples.length >= 1) {
          var nextDts = samples[0].dts - this.audioDtsBase;
          sampleDuration = nextDts - dts;
        } else {
          if (mp4Samples.length >= 1) {
            sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
          } else {
            sampleDuration = this._audioMeta.refSampleDuration;
          }
        }
        if (dev_logger_default.long) {
        }
        this.audioAllDuration += sampleDuration;
        var mp4Sample = {
          dts,
          pts: dts,
          cts: 0,
          size: data.byteLength,
          duration: sample.duration ? sample.duration : sampleDuration,
          flags: {
            isLeading: 0,
            dependsOn: 1,
            isDependedOn: 0,
            hasRedundancy: 0,
            isNonSync: 0
          },
          isKeyframe: true,
          originDts,
          type: "audio"
        };
        var mdatSample = {
          buffer: [],
          size: 0
        };
        if (sampleDuration >= 0) {
          mdatSample.buffer.push(data);
          mdatSample.size += data.byteLength;
          mdatBox.samples.push(mdatSample);
          mp4Samples.push(mp4Sample);
        }
      }
      var moofMdat = new buffer_default();
      if (mp4Samples.length && track.meta) {
        dev_logger_default.log(this.TAG, "remux to mp4 audio:", [firstDts / 1e3, mp4Samples[mp4Samples.length - 1].dts / 1e3]);
        var moof = fmp4_default.moof({
          id: track.meta.id,
          time: firstDts,
          samples: mp4Samples
        });
        var mdat = fmp4_default.mdat(mdatBox);
        moofMdat.write(moof, mdat);
        this.segmentRemuxed("audio", moofMdat, mp4Samples[mp4Samples.length - 1].dts - mp4Samples[0].dts);
      }
      if (initSegment) {
        this.segmentRemuxed("audio", initSegment);
        if (samples.length) {
          track.samples = samples;
          return this.remuxAudio(track);
        }
      }
      this.isFirstAudio = false;
      this.emit(Mp4Remuxer3.EVENTS.TRACK_REMUXED, "audio", moofMdat);
      track.samples = [];
      track.length = 0;
    }
  }, {
    key: "segmentRemuxed",
    value: function segmentRemuxed(type, buffer, bufferDuration) {
      this.emit(Mp4Remuxer3.EVENTS.MEDIA_SEGMENT, type, buffer, bufferDuration);
    }
  }, {
    key: "videoDtsBase",
    get: function get6() {
      if (this._videoDtsBase !== null) {
        return this._videoDtsBase;
      }
      return this._dtsBase;
    },
    set: function set2(value) {
      this._videoDtsBase = value;
    }
  }, {
    key: "audioDtsBase",
    get: function get6() {
      if (this._audioDtsBase !== null) {
        return this._audioDtsBase;
      }
      return this._dtsBase;
    }
  }], [{
    key: "EVENTS",
    get: function get6() {
      return {
        MEDIA_SEGMENT: "MEDIA_SEGMENT",
        INIT_SEGMENT: "INIT_SEGMENT",
        RANDOM_ACCESS_POINT: "RANDOM_ACCESS_POINT",
        TRACK_REMUXED: "TRACK_REMUXED"
      };
    }
  }]);
  return Mp4Remuxer3;
}(import_eventemitter34.default);
var remuxer_default = Mp4Remuxer;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/index.js
var _createClass44 = function() {
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
function _classCallCheck45(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var REMUX_EVENTS5 = events_default.REMUX_EVENTS;
var PLAYER_EVENTS2 = events_default.PLAYER_EVENTS;
var Mp4Remuxer2 = function() {
  function Mp4Remuxer3() {
    var curTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    _classCallCheck45(this, Mp4Remuxer3);
    this.TAG = "Mp4Remuxer";
    this._curTime = curTime;
    if (!this.remuxer) {
      this.initRemuxer();
    }
  }
  _createClass44(Mp4Remuxer3, [{
    key: "init",
    value: function init() {
      this.on(REMUX_EVENTS5.REMUX_MEDIA, this.remux.bind(this));
      this.on(REMUX_EVENTS5.REMUX_METADATA, this.onMetaDataReady.bind(this));
      this.on(REMUX_EVENTS5.DETECT_CHANGE_STREAM, this.resetDtsBase.bind(this));
      this.on(REMUX_EVENTS5.DETECT_FRAG_ID_DISCONTINUE, this.seek.bind(this));
      this.on(PLAYER_EVENTS2.SEEK, this.seek.bind(this));
    }
  }, {
    key: "initRemuxer",
    value: function initRemuxer() {
      this.remuxer = new remuxer_default({
        audioMeta: null,
        videoMeta: null,
        curTime: this._curTime
      });
      this.remuxer.on(remuxer_default.EVENTS.MEDIA_SEGMENT, this.writeToSource.bind(this));
      this.remuxer.on(remuxer_default.EVENTS.TRACK_REMUXED, this.onTrackRemuxed.bind(this));
    }
  }, {
    key: "remux",
    value: function remux() {
      if (!this.remuxer._videoMeta) {
        this.remuxer._videoMeta = this.videoMeta;
        this.remuxer._audioMeta = this.audioMeta;
      }
      var _context$getInstance = this._context.getInstance("TRACKS"), audioTrack = _context$getInstance.audioTrack, videoTrack = _context$getInstance.videoTrack;
      return this.remuxer.remux(audioTrack, videoTrack);
    }
  }, {
    key: "resetDtsBase",
    value: function resetDtsBase() {
      this.remuxer && this.remuxer.resetDtsBase();
    }
  }, {
    key: "seek",
    value: function seek(time) {
      this.remuxer && this.remuxer.seek(time);
    }
  }, {
    key: "onMetaDataReady",
    value: function onMetaDataReady(type) {
      if (!this.remuxer) {
        this.initRemuxer();
      }
      var track = void 0;
      if (type === "audio") {
        var _context$getInstance2 = this._context.getInstance("TRACKS"), audioTrack = _context$getInstance2.audioTrack;
        track = audioTrack;
      } else {
        var _context$getInstance3 = this._context.getInstance("TRACKS"), videoTrack = _context$getInstance3.videoTrack;
        track = videoTrack;
      }
      var presourcebuffer = this._context.getInstance("PRE_SOURCE_BUFFER");
      var source = presourcebuffer.getSource(type);
      if (!source) {
        source = presourcebuffer.createSource(type);
      }
      source.mimetype = track.meta.codec;
      source.init = this.remuxer.remuxInitSegment(type, track.meta);
      this.emit(REMUX_EVENTS5.INIT_SEGMENT, type);
    }
  }, {
    key: "onTrackRemuxed",
    value: function onTrackRemuxed(track) {
      this.emit(REMUX_EVENTS5.MEDIA_SEGMENT, track);
    }
  }, {
    key: "writeToSource",
    value: function writeToSource(type, buffer, bufferDuration) {
      var presourcebuffer = this._context.getInstance("PRE_SOURCE_BUFFER");
      var source = presourcebuffer.getSource(type);
      if (!source) {
        source = presourcebuffer.createSource(type);
      }
      source.data.push(buffer);
      if (bufferDuration) {
        source.bufferDuration = bufferDuration + (source.bufferDuration || 0);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.remuxer) {
        this.remuxer.destroy();
      }
      this.remuxer = null;
    }
  }, {
    key: "videoMeta",
    get: function get6() {
      return this._context.getInstance("TRACKS").videoTrack.meta;
    }
  }, {
    key: "audioMeta",
    get: function get6() {
      return this._context.getInstance("TRACKS").audioTrack.meta;
    }
  }]);
  return Mp4Remuxer3;
}();
var mp4_remux_default = Mp4Remuxer2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/mp4-remuxer.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_eventemitter35 = __toESM(require_eventemitter3_4_0());

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/mp4.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass45 = function() {
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
function _classCallCheck46(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn6(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Mp4 = function(_Fmp) {
  _inherits6(Mp42, _Fmp);
  function Mp42() {
    _classCallCheck46(this, Mp42);
    return _possibleConstructorReturn6(this, (Mp42.__proto__ || Object.getPrototypeOf(Mp42)).apply(this, arguments));
  }
  _createClass45(Mp42, null, [{
    key: "moov",
    value: function moov(_ref) {
      var type = _ref.type, meta = _ref.meta;
      var size = 8;
      var mvhd = Mp42.mvhd(meta.duration, meta.timescale);
      var trak = void 0;
      if (type === "video") {
        trak = Mp42.videoTrak(meta);
      } else {
        trak = Mp42.audioTrak(meta);
      }
      [mvhd, trak].forEach(function(item) {
        size += item.byteLength;
      });
      return Mp42.initBox(size, "moov", mvhd, trak);
    }
  }, {
    key: "videoTrak",
    value: function videoTrak(data) {
      var size = 8;
      var tkhd = Mp42.tkhd({
        id: 1,
        duration: data.duration,
        timescale: data.timescale || 1e3,
        width: data.presentWidth,
        height: data.presentHeight,
        type: "video"
      });
      var mdia = Mp42.mdia({
        type: "video",
        timescale: data.timescale || 1e3,
        duration: data.duration,
        avcc: data.avcc,
        parRatio: data.parRatio,
        width: data.presentWidth,
        height: data.presentHeight,
        streamType: data.streamType,
        sampleDeltas: data.sampleDeltas,
        keyFrames: data.keyFrames,
        sampleCtss: data.sampleCtss,
        chunks: data.chunks,
        sampleSizes: data.sampleSizes,
        chunksOffset: data.chunksOffset
      });
      [tkhd, mdia].forEach(function(item) {
        size += item.byteLength;
      });
      return Mp42.initBox(size, "trak", tkhd, mdia);
    }
  }, {
    key: "audioTrak",
    value: function audioTrak(data) {
      var size = 8;
      var tkhd = Mp42.tkhd({
        id: 2,
        duration: data.duration,
        timescale: data.timescale || 1e3,
        width: 0,
        height: 0,
        type: "audio"
      });
      var mdia = Mp42.mdia({
        type: "audio",
        timescale: data.timescale || 1e3,
        duration: data.duration,
        channelCount: data.channelCount,
        samplerate: data.sampleRate,
        config: data.config,
        sampleDeltas: data.sampleDeltas,
        keyFrames: data.keyFrames,
        sampleCtss: data.sampleCtss,
        chunks: data.chunks,
        sampleSizes: data.sampleSizes,
        chunksOffset: data.chunksOffset
      });
      [tkhd, mdia].forEach(function(item) {
        size += item.byteLength;
      });
      return Mp42.initBox(size, "trak", tkhd, mdia);
    }
  }, {
    key: "mdia",
    value: function mdia(data) {
      var size = 8;
      var mdhd = Mp42.mdhd(data.timescale, data.duration);
      var hdlr = Mp42.hdlr(data.type);
      var minf = Mp42.minf(data);
      [mdhd, hdlr, minf].forEach(function(item) {
        size += item.byteLength;
      });
      return Mp42.initBox(size, "mdia", mdhd, hdlr, minf);
    }
  }, {
    key: "minf",
    value: function minf(data) {
      var size = 8;
      var vmhd = data.type === "video" ? Mp42.vmhd() : Mp42.smhd();
      var dinf = Mp42.dinf();
      var stbl = Mp42.stbl(data);
      [vmhd, dinf, stbl].forEach(function(item) {
        size += item.byteLength;
      });
      return Mp42.initBox(size, "minf", vmhd, dinf, stbl);
    }
  }, {
    key: "stbl",
    value: function stbl(data) {
      var size = 8;
      var stsd = Mp42.stsd(data);
      var stts = Mp42.stts(data.sampleDeltas);
      var stss = void 0;
      if (data.keyFrames) {
        stss = Mp42.stss(data.keyFrames);
      }
      var ctts = void 0;
      if (data.sampleCtss) {
        ctts = Mp42.ctts(data.sampleCtss);
      }
      var stsc = Mp42.stsc(data.chunks);
      var stsz = Mp42.stsz(data.sampleSizes);
      var stco = Mp42.stco(data.chunksOffset);
      var tables = [stsd, stts, stsc, stsz, stco];
      if (stss) {
        tables.push(stss);
      }
      if (ctts) {
        tables.push(ctts);
      }
      tables.forEach(function(item) {
        size += item.byteLength;
      });
      return Mp42.initBox.apply(Mp42, [size, "stbl"].concat(tables));
    }
  }, {
    key: "stts",
    value: function stts(data) {
      var entryCount = data.length;
      var uCount = new Uint8Array([entryCount >> 24, entryCount >> 16 & 255, entryCount >> 8 & 255, entryCount & 255]);
      var entryByteLength = 8 * entryCount;
      var uEntry = new Uint8Array(entryByteLength);
      var offset = 0;
      for (var i = 0; i < entryCount; i++) {
        var count = data[i].deltaCount;
        var delta = data[i].delta;
        var uDelta = new Uint8Array([count >> 24, count >> 16 & 255, count >> 8 & 255, count & 255, delta >> 24, delta >> 16 & 255, delta >> 8 & 255, delta & 255]);
        uEntry.set(uDelta, offset);
        offset += 8;
      }
      var buffer = new buffer_default();
      buffer.write(Mp42.size(12 + 4 + entryByteLength), Mp42.type("stts"), Mp42.extension(0, 0), uCount, uEntry);
      return buffer.buffer;
    }
  }, {
    key: "ctts",
    value: function ctts(data) {
      var entryCount = data.length;
      var uCount = new Uint8Array([entryCount >> 24, entryCount >> 16 & 255, entryCount >> 8 & 255, entryCount & 255]);
      var entryByteLength = 8 * entryCount;
      var uEntry = new Uint8Array(entryByteLength);
      var offset = 0;
      for (var i = 0; i < entryCount; i++) {
        var count = data[i].ctsCount;
        var delta = data[i].cts;
        var uDelta = new Uint8Array([count >> 24, count >> 16 & 255, count >> 8 & 255, count & 255, delta >> 24, delta >> 16 & 255, delta >> 8 & 255, delta & 255]);
        uEntry.set(uDelta, offset);
        offset += 8;
      }
      var buffer = new buffer_default();
      buffer.write(Mp42.size(12 + 4 + entryByteLength), Mp42.type("ctts"), Mp42.extension(0, 0), uCount, uEntry);
      return buffer.buffer;
    }
  }, {
    key: "stsc",
    value: function stsc(data) {
      var entryCount = data.length;
      var uCount = new Uint8Array([entryCount >> 24, entryCount >> 16 & 255, entryCount >> 8 & 255, entryCount & 255]);
      var entrySize = 12;
      var entryByteLength = entrySize * entryCount;
      var uEntry = new Uint8Array(entryByteLength);
      var offset = 0;
      for (var i = 0; i < entryCount; i++) {
        var firstChunk = data[i].firstChunk;
        var samplesPerChunk = data[i].samplesPerChunk;
        var index = data[i].sampleDescIndex;
        var uDelta = new Uint8Array([firstChunk >> 24, firstChunk >> 16 & 255, firstChunk >> 8 & 255, firstChunk & 255, samplesPerChunk >> 24, samplesPerChunk >> 16 & 255, samplesPerChunk >> 8 & 255, samplesPerChunk & 255, index >> 24, index >> 16 & 255, index >> 8 & 255, index & 255]);
        uEntry.set(uDelta, offset);
        offset += entrySize;
      }
      var buffer = new buffer_default();
      buffer.write(Mp42.size(12 + 4 + entryByteLength), Mp42.type("stsc"), Mp42.extension(0, 0), uCount, uEntry);
      return buffer.buffer;
    }
  }, {
    key: "stsz",
    value: function stsz(data) {
      var count = data.length;
      var entryByteLength = 4 * count;
      var uSampleSize = new Uint8Array([0, 0, 0, 0]);
      var uCount = new Uint8Array([count >> 24, count >> 16 & 255, count >> 8 & 255, count & 255]);
      var uEntry = new Uint8Array(entryByteLength);
      var offset = 0;
      for (var i = 0; i < count; i++) {
        var size = data[i];
        var uSize = new Uint8Array([size >> 24, size >> 16 & 255, size >> 8 & 255, size & 255]);
        uEntry.set(uSize, offset);
        offset += 4;
      }
      var buffer = new buffer_default();
      buffer.write(Mp42.size(12 + 4 + 4 + entryByteLength), Mp42.type("stsz"), Mp42.extension(0, 0), uSampleSize, uCount, uEntry);
      return buffer.buffer;
    }
  }, {
    key: "stss",
    value: function stss(data) {
      var count = data.length;
      var entryByteLength = 4 * count;
      var uCount = new Uint8Array([count >> 24, count >> 16 & 255, count >> 8 & 255, count & 255]);
      var uEntry = new Uint8Array(entryByteLength);
      var offset = 0;
      for (var i = 0; i < count; i++) {
        var index = data[i];
        var uDelta = new Uint8Array([index >> 24, index >> 16 & 255, index >> 8 & 255, index & 255]);
        uEntry.set(uDelta, offset);
        offset += 4;
      }
      var buffer = new buffer_default();
      buffer.write(Mp42.size(12 + 4 + entryByteLength), Mp42.type("stss"), Mp42.extension(0, 0), uCount, uEntry);
      return buffer.buffer;
    }
  }, {
    key: "stco",
    value: function stco(data) {
      var count = data.length;
      var entryByteLength = 4 * count;
      var uCount = new Uint8Array([count >> 24, count >> 16 & 255, count >> 8 & 255, count & 255]);
      var uEntry = new Uint8Array(entryByteLength);
      var offset = 0;
      for (var i = 0; i < count; i++) {
        var size = data[i];
        var uSize = new Uint8Array([size >> 24, size >> 16 & 255, size >> 8 & 255, size & 255]);
        uEntry.set(uSize, offset);
        offset += 4;
      }
      var buffer = new buffer_default();
      buffer.write(Mp42.size(12 + 4 + entryByteLength), Mp42.type("stco"), Mp42.extension(0, 0), uCount, uEntry);
      return buffer.buffer;
    }
  }]);
  return Mp42;
}(fmp4_default);
var mp4_default = Mp4;

// F:/uniapp/beyond-video/node_modules/_xgplayer-helper-transmuxers@2.5.2@xgplayer-helper-transmuxers/es/mp4-remux/mp4-remuxer.js
var _createClass46 = function() {
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
function _classCallCheck47(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn7(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var DEFAULT_SAMPLE_DURATION = 40;
var Mp4Box = function(_EventEmitter) {
  _inherits7(Mp4Box2, _EventEmitter);
  function Mp4Box2(_ref) {
    var videoMeta = _ref.videoMeta, audioMeta = _ref.audioMeta, curTime = _ref.curTime, options = _ref.options;
    _classCallCheck47(this, Mp4Box2);
    var _this = _possibleConstructorReturn7(this, (Mp4Box2.__proto__ || Object.getPrototypeOf(Mp4Box2)).call(this));
    _this._dtsBase = curTime * 1e3;
    _this._options = options || {};
    _this._samplePerChunk = _this._options.sampleNumberPerChunk || 100;
    _this._videoMeta = videoMeta;
    _this._audioMeta = audioMeta;
    _this._audioDtsBase = null;
    _this._videoDtsBase = -1;
    _this._isDtsBaseInited = false;
    _this.isFirstVideo = true;
    _this.isFirstAudio = true;
    _this.videoAllDuration = 0;
    _this.audioAllDuration = 0;
    _this.audioSamples = [];
    _this.audioRemuxed = 0;
    _this.videoRemuxed = 0;
    _this.mp4Durations = {
      keys: []
    };
    _this.ctsNum = 0;
    return _this;
  }
  _createClass46(Mp4Box2, [{
    key: "destroy",
    value: function destroy() {
      this._dtsBase = -1;
      this._isDtsBaseInited = false;
    }
  }, {
    key: "remux",
    value: function remux(audioTrack, videoTrack) {
      if (!audioTrack && !videoTrack) {
        return;
      }
      if (!videoTrack) {
        this.remuxMp4(audioTrack, "audio");
      }
      if (!audioTrack) {
        this.remuxMp4(videoTrack, "video");
      }
      if (audioTrack && videoTrack) {
        this.remuxMix(audioTrack, videoTrack);
      }
      dev_logger_default.groupEnd();
    }
  }, {
    key: "remuxMix",
    value: function remuxMix(audioTrack, videoTrack) {
      if (!audioTrack || !audioTrack.samples || !audioTrack.samples.length) {
        return;
      }
      if (!videoTrack || !videoTrack.samples || !videoTrack.samples.length) {
        return;
      }
      var audioSamples = audioTrack.samples, audioMeta = audioTrack.meta;
      var videoSamples = videoTrack.samples, videoMeta = videoTrack.meta;
      if (!audioMeta || !videoMeta) {
        return;
      }
      this._samplePerChunk = 1;
      var mdat = null;
      var moov = null;
      var ftyp = mp4_default.ftyp();
      var mdatBox = {
        samples: []
      };
      var firstAudioSample = audioSamples[0];
      var firstVideoSample = videoSamples[0];
      var baseDts = Math.min(firstAudioSample.dts, firstVideoSample.dts);
      var trackInfo = {
        offset: ftyp.byteLength + 8,
        audio: {
          meta: audioMeta,
          samples: audioSamples,
          length: audioSamples.length,
          sampleDuration: 0,
          trackDuration: 0,
          frameIndex: 0,
          deltas: [],
          sampleCtss: [],
          chunks: [],
          sampleSizes: [],
          chunksOffset: []
        },
        video: {
          meta: videoMeta,
          samples: videoSamples,
          length: videoSamples.length,
          sampleDuration: 0,
          trackDuration: 0,
          frameIndex: 0,
          deltas: [],
          sampleCtss: [],
          chunks: [],
          sampleSizes: [],
          chunksOffset: [],
          keyFrames: []
        }
      };
      var type = null;
      try {
        while (audioSamples.length || videoSamples.length) {
          var sample = void 0;
          if (audioSamples.length && videoSamples.length) {
            if (audioSamples[0].dts < videoSamples[0].dts) {
              sample = audioSamples.shift();
              type = "audio";
            } else {
              sample = videoSamples.shift();
              type = "video";
            }
          }
          if (audioSamples.length && !videoSamples.length) {
            sample = audioSamples.shift();
            type = "audio";
          }
          if (!audioSamples.length && videoSamples.length) {
            sample = videoSamples.shift();
            type = "video";
          }
          var _sample = sample, isKeyframe = _sample.isKeyframe;
          var cts = void 0;
          var pts = void 0;
          var dts = Math.max(0, sample.dts - baseDts);
          if (sample.cts !== void 0 && type === "video") {
            pts = sample.cts + dts;
            cts = sample.cts;
          }
          var currentTrackInfo = trackInfo[type];
          var sampleDuration = this.getSttsBoxData(sample, currentTrackInfo.samples[0], currentTrackInfo.deltas);
          currentTrackInfo.trackDuration = this.getDuration(currentTrackInfo.trackDuration, sampleDuration);
          this.getCttsBoxData(cts, currentTrackInfo.sampleCtss);
          var mdatSample = {
            buffer: [],
            size: 0
          };
          var sampleByteSize = sample.data.byteLength;
          if (dev_logger_default.long) {
            dev_logger_default.log(this.TAG, type + " dts " + dts, "pts " + pts, "cts: " + cts, "isKeyframe " + isKeyframe, "originDts " + sample.originDts, "duration " + sampleDuration);
          }
          if (sampleDuration >= 0) {
            mdatBox.samples.push(mdatSample);
            mdatSample.buffer.push(sample.data);
            mdatSample.size += sampleByteSize;
          }
          currentTrackInfo.frameIndex++;
          this.getStszBoxData(sampleByteSize, currentTrackInfo.sampleSizes);
          trackInfo.offset = this.getStcoBoxData(currentTrackInfo.frameIndex, sampleByteSize, currentTrackInfo.length, trackInfo.offset, currentTrackInfo.chunksOffset);
          if (isKeyframe) {
            this.getStssBoxData(currentTrackInfo.frameIndex, currentTrackInfo.keyFrames);
          }
        }
      } catch (error) {
        console.error(error);
      }
      this.getStscBoxData(trackInfo.audio.length, trackInfo.audio.chunks);
      this.getStscBoxData(trackInfo.video.length, trackInfo.video.chunks);
      if (mdatBox.samples.length) {
        mdat = mp4_default.mdat(mdatBox);
      }
      [{ meta: videoMeta, type: "video" }, { meta: audioMeta, type: "audio" }].forEach(function(item) {
        item.meta.duration = trackInfo[item.type].trackDuration;
        item.meta.sampleDeltas = trackInfo[item.type].deltas;
        item.meta.keyFrames = trackInfo[item.type].keyFrames;
        item.meta.sampleCtss = trackInfo[item.type].sampleCtss;
        item.meta.chunks = trackInfo[item.type].chunks;
        item.meta.sampleSizes = trackInfo[item.type].sampleSizes;
        item.meta.chunksOffset = trackInfo[item.type].chunksOffset;
      });
      moov = this.mixMoov(videoMeta.duration, videoMeta.timeScale, [videoMeta, audioMeta]);
      var mp4 = new buffer_default();
      mp4.write(ftyp, mdat, moov);
      this.emit(Mp4Box2.EVENTS.TRACK_REMUXED, type, mp4);
    }
  }, {
    key: "remuxMp4",
    value: function remuxMp4() {
      var track = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var type = arguments[1];
      if (!track || !track.samples || !track.samples.length) {
        return;
      }
      var samples = track.samples, meta = track.meta;
      if (!meta) {
        return;
      }
      var frameIndex = 0;
      var mdat = null;
      var moov = null;
      var ftyp = mp4_default.ftyp();
      var keyFrames = [];
      var mdatBox = {
        samples: []
      };
      var firstSample = samples[0];
      var baseDts = firstSample.dts || 0;
      var trackDuration = 0;
      var sampleDeltas = [];
      var sampleCtss = [];
      var chunks = [];
      var sampleSizes = [];
      var sampleCount = samples.length;
      var chunksOffset = [];
      var chunkOffset = ftyp.byteLength + 8;
      var maxLoop = 1e4;
      try {
        while (samples.length && maxLoop-- > 0) {
          var currentSample = samples.shift();
          var isKeyframe = currentSample.isKeyframe;
          var cts = void 0;
          var pts = void 0;
          var dts = Math.max(0, currentSample.dts - baseDts);
          if (currentSample.pts !== void 0) {
            pts = currentSample.pts - baseDts;
            cts = pts - dts;
          }
          if (currentSample.cts !== void 0) {
            pts = currentSample.cts + dts;
            cts = currentSample.cts;
          }
          var sampleDuration = this.getSttsBoxData(currentSample, samples[0], sampleDeltas);
          trackDuration = this.getDuration(trackDuration, sampleDuration);
          this.getCttsBoxData(cts, sampleCtss);
          var mdatSample = {
            buffer: [],
            size: 0
          };
          var sampleByteSize = currentSample.data.byteLength;
          if (dev_logger_default.long) {
            dev_logger_default.log(this.TAG, "video dts " + dts, "pts " + pts, "cts: " + cts, isKeyframe, "originDts " + currentSample.originDts, "duration " + sampleDuration);
          }
          if (sampleDuration >= 0) {
            mdatBox.samples.push(mdatSample);
            mdatSample.buffer.push(currentSample.data);
            mdatSample.size += sampleByteSize;
          }
          frameIndex++;
          this.getStszBoxData(sampleByteSize, sampleSizes);
          chunkOffset = this.getStcoBoxData(frameIndex, sampleByteSize, sampleCount, chunkOffset, chunksOffset);
          if (isKeyframe) {
            this.getStssBoxData(frameIndex, keyFrames);
          }
        }
      } catch (error) {
        console.error(error);
      }
      meta.duration = trackDuration;
      this.getStscBoxData(sampleCount, chunks);
      if (mdatBox.samples.length && track.meta) {
        mdat = mp4_default.mdat(mdatBox);
      }
      meta.sampleDeltas = sampleDeltas;
      meta.chunks = chunks;
      meta.sampleSizes = sampleSizes;
      meta.chunksOffset = chunksOffset;
      if (type === "video") {
        meta.keyFrames = keyFrames;
        meta.sampleCtss = sampleCtss;
      }
      moov = mp4_default.moov({ type, meta });
      track.samples = [];
      track.length = 0;
      var mp4 = new buffer_default();
      mp4.write(ftyp, mdat, moov);
      this.emit(Mp4Box2.EVENTS.TRACK_REMUXED, type, mp4);
      this.ctsNum = 0;
    }
  }, {
    key: "mixMoov",
    value: function mixMoov(duration, timeScale, tracksMeta) {
      var size = 8;
      var mvhd = mp4_default.mvhd(duration, timeScale);
      var tracks = [];
      tracksMeta.forEach(function(item) {
        var track = void 0;
        if (item.type === "video") {
          track = mp4_default.videoTrak(item);
        } else {
          track = mp4_default.audioTrak(item);
        }
        tracks.push(track);
      });
      var boxs = [mvhd].concat(tracks);
      boxs.forEach(function(item) {
        size += item.byteLength;
      });
      return mp4_default.initBox.apply(mp4_default, [size, "moov", mvhd].concat(tracks));
    }
  }, {
    key: "getSttsBoxData",
    value: function getSttsBoxData(sample, nextSample, sampleDeltas) {
      var duration = sample.duration;
      var len = sampleDeltas.length;
      var delta = void 0;
      if (nextSample) {
        var dts = sample.dts;
        var nextDts = nextSample.dts;
        if (duration) {
          delta = duration;
        } else {
          delta = nextDts - dts;
        }
        if (!len) {
          sampleDeltas.push({ delta, deltaCount: 1 });
          return delta;
        }
        if (delta === sampleDeltas[len - 1].delta) {
          sampleDeltas[len - 1].deltaCount += 1;
        } else {
          sampleDeltas.push({ delta, deltaCount: 1 });
        }
      } else {
        if (!len) {
          sampleDeltas.push({ delta: DEFAULT_SAMPLE_DURATION, deltaCount: 1 });
          delta = DEFAULT_SAMPLE_DURATION;
        } else {
          sampleDeltas[len - 1].deltaCount += 1;
          delta = sampleDeltas[len - 1].delta;
        }
      }
      return delta;
    }
  }, {
    key: "getCttsBoxData",
    value: function getCttsBoxData(cts, ctsEntry) {
      var len = ctsEntry.length;
      if (!len) {
        this.ctsNum += 1;
        ctsEntry.push({ cts, ctsCount: 1 });
        return;
      }
      if (ctsEntry[len - 1].cts === cts) {
        this.ctsNum += 1;
        ctsEntry[len - 1].ctsCount += 1;
      } else {
        this.ctsNum += 1;
        ctsEntry.push({ cts, ctsCount: 1 });
      }
    }
  }, {
    key: "getStscBoxData",
    value: function getStscBoxData(sampleCount, chunks) {
      if (sampleCount <= this._samplePerChunk) {
        chunks.push({ firstChunk: 1, samplesPerChunk: sampleCount, sampleDescIndex: 1 });
      } else {
        var len = Math.floor(sampleCount / this._samplePerChunk);
        var lastSampleNumber = sampleCount % this._samplePerChunk;
        chunks.push({ firstChunk: 1, samplesPerChunk: this._samplePerChunk, sampleDescIndex: 1 });
        if (lastSampleNumber) {
          chunks.push({ firstChunk: len + 1, samplesPerChunk: lastSampleNumber, sampleDescIndex: 1 });
        }
      }
    }
  }, {
    key: "getStcoBoxData",
    value: function getStcoBoxData(sampleIndex, sampleSize, sampleCount, chunkOffset, chunksOffset) {
      if (sampleIndex % this._samplePerChunk === 0) {
        chunksOffset.push(chunkOffset);
      }
      chunkOffset += sampleSize;
      return chunkOffset;
    }
  }, {
    key: "getStszBoxData",
    value: function getStszBoxData(sampleByteSize, sampleSizes) {
      sampleSizes.push(sampleByteSize);
    }
  }, {
    key: "getStssBoxData",
    value: function getStssBoxData(sampleIndex, keyFrames) {
      keyFrames.push(sampleIndex);
    }
  }, {
    key: "getDuration",
    value: function getDuration(currentDuration, duration) {
      return currentDuration + duration;
    }
  }, {
    key: "downLoadMp4",
    value: function downLoadMp4(mp4) {
      var url = window.URL.createObjectURL(new Blob([mp4.buffer]));
      var link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", "v.mp4");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, {
    key: "videoMeta",
    get: function get6() {
      return this._videoMeta;
    },
    set: function set2(meta) {
      this._videoMeta = meta;
    }
  }, {
    key: "audioMeta",
    get: function get6() {
      return this._audioMeta;
    },
    set: function set2(meta) {
      this._audioMeta = meta;
    }
  }], [{
    key: "EVENTS",
    get: function get6() {
      return {
        MEDIA_SEGMENT: "MEDIA_SEGMENT",
        INIT_SEGMENT: "INIT_SEGMENT",
        RANDOM_ACCESS_POINT: "RANDOM_ACCESS_POINT",
        TRACK_REMUXED: "TRACK_REMUXED"
      };
    }
  }]);
  return Mp4Box2;
}(import_eventemitter35.default);

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mse/config.js
var config_default = {
  Mse: mse_default,
  Tracks: track_default,
  RemuxedBufferManager: remuxed_buffer_default,
  XgBuffer: u8a_buffer_default,
  FetchLoader: fetch_loader_default,
  Compatibility: hls_default,
  Mp4Remuxer: mp4_remux_default,
  Crypto: crypto_default,
  M3U8Parser: m3u8_default,
  TsDemuxer: ts_default,
  Playlist: playlist_default
};

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mse/index.js
var _createClass47 = function() {
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
var _get3 = function get3(object, property, receiver) {
  if (object === null)
    object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === void 0) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return void 0;
    } else {
      return get3(parent, property, receiver);
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
function _classCallCheck48(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn8(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var HlsAllowedEvents2 = events_default.HlsAllowedEvents;
var REMUX_EVENTS6 = events_default.REMUX_EVENTS;
var util = import_xgplayer2.default.util;
var HlsLivePlayer = function(_Player) {
  _inherits8(HlsLivePlayer4, _Player);
  function HlsLivePlayer4(options) {
    _classCallCheck48(this, HlsLivePlayer4);
    var _this = _possibleConstructorReturn8(this, (HlsLivePlayer4.__proto__ || Object.getPrototypeOf(HlsLivePlayer4)).call(this, options));
    _this.hlsOps = {};
    _this.hlsOps = Object.assign(_this.hlsOps, config_default);
    util.deepCopy(_this.hlsOps, options);
    _this._played = false;
    return _this;
  }
  _createClass47(HlsLivePlayer4, [{
    key: "_initEvents",
    value: function _initEvents() {
      var _this2 = this;
      this.__core__.once(REMUX_EVENTS6.INIT_SEGMENT, function() {
        var mse = _this2._context.getInstance("MSE");
        if (!_this2.started) {
          var live = util.createDom("xg-live", "\u6B63\u5728\u76F4\u64AD", {}, "xgplayer-live");
          util.addClass(_this2.root, "xgplayer-is-live");
          _this2.controls.appendChild(live);
        }
        _this2.started = true;
        _get3(HlsLivePlayer4.prototype.__proto__ || Object.getPrototypeOf(HlsLivePlayer4.prototype), "start", _this2).call(_this2, mse.url);
      });
    }
  }, {
    key: "start",
    value: function start() {
      var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.config.url;
      if (!url || this.started) {
        return;
      }
      if (!this._context) {
        this._context = new context_default(this, this.hlsOps, HlsAllowedEvents2);
      }
      if (!this.hlsOps) {
        this.hlsOps = {};
        this.hlsOps = Object.assign(this.hlsOps, config_default);
        util.deepCopy(this.hlsOps, this.config);
        this._played = false;
      }
      this.__core__ = this._context.registry("HLS_LIVE_CONTROLLER", hls_live_default)({ player: this, container: this.video, preloadTime: this.config.preloadTime });
      this._context.init();
      this.url = url;
      this.__core__.load(url);
      this._initEvents();
      this.started = true;
    }
  }, {
    key: "play",
    value: function play() {
      var _this3 = this;
      if (this._played) {
        this.src = this.config.url;
        this.once("canplay", function() {
          _this3.video.play();
        });
        return;
      }
      this._played = true;
      _get3(HlsLivePlayer4.prototype.__proto__ || Object.getPrototypeOf(HlsLivePlayer4.prototype), "play", this).call(this);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this4 = this;
      if (this._context) {
        this._context.destroy();
      }
      var prom = new Promise(function(resolve) {
        if (_this4.__core__ && _this4.__core__.mse) {
          _this4.__core__.mse.destroy().then(function() {
            setTimeout(function() {
              resolve();
            }, 50);
          });
        } else {
          setTimeout(function() {
            resolve();
          }, 50);
        }
      });
      _get3(HlsLivePlayer4.prototype.__proto__ || Object.getPrototypeOf(HlsLivePlayer4.prototype), "destroy", this).call(this);
      return prom;
    }
  }, {
    key: "src",
    set: function set2(url) {
      var _this5 = this;
      this.onWaiting = this.onWaiting.bind(this);
      this.__core__.mse.destroy().then(function() {
        _this5._context.destroy();
        _this5._context = null;
        _this5.started = false;
        _this5.video.currentTime = 0;
        _this5.start(url);
      });
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
    }
  }, {
    key: "install",
    value: function install(name, plugin) {
      return import_xgplayer2.default.install(name, plugin);
    }
  }]);
  return HlsLivePlayer4;
}(import_xgplayer2.default);
var mse_default2 = HlsLivePlayer;
HlsLivePlayer.install = import_xgplayer2.default.install.bind(import_xgplayer2.default);

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mobile/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_xgplayer3 = __toESM(require_dist());

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mobile/hls-live-mobile.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass48 = function() {
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
function _classCallCheck49(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var NalUnitHEVC3 = hevc_exports.NalUnitHEVC;
var NalUnit3 = avc_exports.NalUnit;
var LOADER_EVENTS5 = events_default.LOADER_EVENTS;
var DEMUX_EVENTS5 = events_default.DEMUX_EVENTS;
var HLS_EVENTS3 = events_default.HLS_EVENTS;
var CRYTO_EVENTS2 = events_default.CRYTO_EVENTS;
var HLS_ERROR2 = "HLS_ERROR";
var MASTER_PLAYLIST_REGEX2 = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g;
var HlsLiveController2 = function() {
  function HlsLiveController3(configs) {
    _classCallCheck49(this, HlsLiveController3);
    this.configs = Object.assign({}, configs);
    this.url = "";
    this.sequence = 0;
    this._playlist = null;
    this.retrytimes = this.configs.retrytimes || 3;
    this.preloadTime = this.configs.preloadTime;
    this.container = this.configs.container;
    this._m3u8lasttime = 0;
    this._timmer = setInterval(this._checkStatus.bind(this), 50);
    this._lastCheck = 0;
    this.m3u8Text = null;
  }
  _createClass48(HlsLiveController3, [{
    key: "init",
    value: function init() {
      var _player$hlsOps = this._player.hlsOps, XgBuffer2 = _player$hlsOps.XgBuffer, Tracks2 = _player$hlsOps.Tracks, Playlist2 = _player$hlsOps.Playlist, FetchLoader2 = _player$hlsOps.FetchLoader, TsDemuxer3 = _player$hlsOps.TsDemuxer;
      this._context.registry("M3U8_BUFFER", XgBuffer2);
      this._context.registry("TS_BUFFER", XgBuffer2);
      this._context.registry("TRACKS", Tracks2);
      this._playlist = this._context.registry("PLAYLIST", Playlist2)({ autoclear: true });
      this._m3u8loader = this._context.registry("M3U8_LOADER", FetchLoader2)({ buffer: "M3U8_BUFFER", readtype: 1 });
      this._tsloader = this._context.registry("TS_LOADER", FetchLoader2)({ buffer: "TS_BUFFER", readtype: 3 });
      this._context.registry("TS_DEMUXER", TsDemuxer3)({ inputbuffer: "TS_BUFFER" });
      this.initEvents();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this.on(LOADER_EVENTS5.LOADER_COMPLETE, this._onLoadComplete.bind(this));
      this.on(DEMUX_EVENTS5.METADATA_PARSED, this._onMetadataParsed.bind(this));
      this.on(DEMUX_EVENTS5.SEI_PARSED, this._handleSEIParsed.bind(this));
      this.on(DEMUX_EVENTS5.DEMUX_COMPLETE, this._onDemuxComplete.bind(this));
      this.on(LOADER_EVENTS5.LOADER_ERROR, this._onLoadError.bind(this));
      this.on(DEMUX_EVENTS5.DEMUX_ERROR, this._onDemuxError.bind(this));
    }
  }, {
    key: "_onError",
    value: function _onError(type, mod, err, fatal) {
      var error = {
        errorType: type,
        errorDetails: "[" + mod + "]: " + (err ? err.message : ""),
        errorFatal: fatal
      };
      this._player.emit(HLS_ERROR2, error);
    }
  }, {
    key: "_onDemuxComplete",
    value: function _onDemuxComplete() {
      var _this = this;
      if (this._player.video) {
        var _context$getInstance = this._context.getInstance("TRACKS"), videoTrack = _context$getInstance.videoTrack, audioTrack = _context$getInstance.audioTrack;
        videoTrack.samples.forEach(function(sample) {
          if (sample.analyzed) {
            return;
          }
          sample.analyzed = true;
          var buffer = new data_view_default(sample.data.buffer);
          var nals = void 0;
          if (_this._isHEVC(videoTrack.meta)) {
            nals = NalUnitHEVC3.getHvccNals(buffer);
          } else {
            nals = NalUnit3.getNalunits(buffer);
          }
          var nalsLength = nals.reduce(function(len, current) {
            return len + 4 + current.body.byteLength;
          }, 0);
          var newData = new Uint8Array(nalsLength);
          var offset = 0;
          nals.forEach(function(nal) {
            newData.set([0, 0, 0, 1], offset);
            offset += 4;
            newData.set(new Uint8Array(nal.body), offset);
            offset += nal.body.byteLength;
          });
          sample.data = newData;
        });
        this._player.video.onDemuxComplete(videoTrack, audioTrack);
      }
    }
  }, {
    key: "_onMetadataParsed",
    value: function _onMetadataParsed(type) {
      if (type === "audio") {
        var _context$getInstance2 = this._context.getInstance("TRACKS"), audioTrack = _context$getInstance2.audioTrack;
        if (audioTrack && audioTrack.meta) {
          this._setMetaToAudio(audioTrack.meta);
        }
      } else {
        var _context$getInstance3 = this._context.getInstance("TRACKS"), videoTrack = _context$getInstance3.videoTrack;
        if (videoTrack && videoTrack.meta) {
          this._setMetaToVideo(videoTrack.meta);
        }
      }
    }
  }, {
    key: "_setMetaToAudio",
    value: function _setMetaToAudio(audioMeta) {
      if (this._player.video) {
        this._player.video.setAudioMeta(audioMeta);
      }
    }
  }, {
    key: "_setMetaToVideo",
    value: function _setMetaToVideo(videoMeta) {
      if (this._player.video) {
        this._player.video.setVideoMeta(videoMeta);
      }
    }
  }, {
    key: "_onLoadError",
    value: function _onLoadError(loader, error) {
      if (!this._tsloader.loading && !this._m3u8loader.loading && this.retrytimes > 1) {
        this.retrytimes--;
        this._onError(LOADER_EVENTS5.LOADER_ERROR, loader, error, false);
      } else if (this.retrytimes <= 1) {
        this._onError(LOADER_EVENTS5.LOADER_ERROR, loader, error, true);
        this.emit(HLS_EVENTS3.RETRY_TIME_EXCEEDED);
        if (this._player.video) {
          this._player.video.handleEnded();
        }
      }
    }
  }, {
    key: "_onDemuxError",
    value: function _onDemuxError(mod, error, fatal) {
      if (fatal === void 0) {
        fatal = true;
      }
      this._onError(LOADER_EVENTS5.LOADER_ERROR, mod, error, fatal);
    }
  }, {
    key: "_handleSEIParsed",
    value: function _handleSEIParsed(sei) {
      this._player.emit("SEI_PARSED", sei);
    }
  }, {
    key: "_onLoadComplete",
    value: function _onLoadComplete(buffer) {
      if (buffer.TAG === "M3U8_BUFFER") {
        var mdata = void 0;
        try {
          this.m3u8Text = buffer.shift();
          var result = MASTER_PLAYLIST_REGEX2.exec(this.m3u8Text);
          if (result && result[2]) {
            this.load(result[2]);
          } else {
            mdata = this._player.hlsOps.M3U8Parser.parse(this.m3u8Text, this.url);
          }
        } catch (error) {
          this._onError("M3U8_PARSER_ERROR", "M3U8_PARSER", error, false);
        }
        if (!mdata) {
          if (this.retrytimes > 0) {
            this.retrytimes--;
            this._preload();
          } else {
            this.emit(HLS_EVENTS3.RETRY_TIME_EXCEEDED);
            if (this._player.video) {
              this._player.video.handleEnded();
            }
          }
          return;
        }
        try {
          this._playlist.pushM3U8(mdata, true);
        } catch (error) {
          this._onError("M3U8_PARSER_ERROR", "PLAYLIST", error, false);
        }
        if (this._playlist.encrypt && this._playlist.encrypt.uri && !this._playlist.encrypt.key) {
          var _player$hlsOps2 = this._player.hlsOps, XgBuffer2 = _player$hlsOps2.XgBuffer, FetchLoader2 = _player$hlsOps2.FetchLoader;
          this._context.registry("DECRYPT_BUFFER", XgBuffer2)();
          this._context.registry("KEY_BUFFER", XgBuffer2)();
          this._tsloader.buffer = "DECRYPT_BUFFER";
          this._keyLoader = this._context.registry("KEY_LOADER", FetchLoader2)({ buffer: "KEY_BUFFER", readtype: 3 });
          this.emitTo("KEY_LOADER", LOADER_EVENTS5.LADER_START, this._playlist.encrypt.uri);
        } else {
          this._m3u8Loaded(mdata);
        }
      } else if (buffer.TAG === "TS_BUFFER") {
        this.retrytimes = this.configs.retrytimes || 3;
        this._playlist.downloaded(this._tsloader.url, true);
        this.emit(DEMUX_EVENTS5.DEMUX_START);
      } else if (buffer.TAG === "DECRYPT_BUFFER") {
        this.retrytimes = this.configs.retrytimes || 3;
        this._playlist.downloaded(this._tsloader.url, true);
        this.emitTo("CRYPTO", CRYTO_EVENTS2.START_DECRYPT);
      } else if (buffer.TAG === "KEY_BUFFER") {
        var Crypto2 = this._player.hlsOps.Crypto;
        this.retrytimes = this.configs.retrytimes || 3;
        this._playlist.encrypt.key = buffer.shift();
        this._crypto = this._context.registry("CRYPTO", Crypto2)({
          key: this._playlist.encrypt.key,
          iv: this._playlist.encrypt.ivb,
          method: this._playlist.encrypt.method,
          inputbuffer: "DECRYPT_BUFFER",
          outputbuffer: "TS_BUFFER"
        });
        this._crypto.on(CRYTO_EVENTS2.DECRYPTED, this._onDcripted.bind(this));
      }
    }
  }, {
    key: "_onDcripted",
    value: function _onDcripted() {
      this.emit(DEMUX_EVENTS5.DEMUX_START);
    }
  }, {
    key: "_m3u8Loaded",
    value: function _m3u8Loaded(mdata) {
      if (!this.preloadTime) {
        this.preloadTime = this._playlist.targetduration ? this._playlist.targetduration : 5;
      }
      if (this._playlist.fragLength > 0 && this._playlist.sequence < mdata.sequence) {
        this.retrytimes = this.configs.retrytimes || 3;
      } else {
        if (this.retrytimes > 0) {
          this.retrytimes--;
          this._preload();
        } else {
          this.emit(HLS_EVENTS3.RETRY_TIME_EXCEEDED);
          if (this._player.video) {
            this._player.video.handleEnded();
          }
        }
      }
    }
  }, {
    key: "_checkStatus",
    value: function _checkStatus() {
      if (this.retrytimes < 1 && new Date().getTime() - this._lastCheck < 1e4) {
        return;
      }
      this._lastCheck = new Date().getTime();
      if (this.container.buffered.length < 1) {
        this._preload();
      } else {
        var currentTime = this.container.currentTime;
        if (this.container.readyState <= 2) {
          this._preload();
        }
        var bufferend = this.container.buffered.end(this.container.buffered.length - 1);
        if (currentTime > bufferend - this.preloadTime) {
          this._preload();
        }
      }
    }
  }, {
    key: "_preload",
    value: function _preload() {
      if (this._tsloader.loading || this._m3u8loader.loading) {
        return;
      }
      var frag = this._playlist.getTs();
      if (frag && !frag.downloaded && !frag.downloading) {
        this._playlist.downloading(frag.url, true);
        this.emitTo("TS_LOADER", LOADER_EVENTS5.LADER_START, frag.url);
      } else {
        var preloadTime = this.preloadTime ? this.preloadTime : 0;
        var current = new Date().getTime();
        if ((!frag || frag.downloaded) && (current - this._m3u8lasttime) / 1e3 > preloadTime) {
          this._m3u8lasttime = current;
          this.emitTo("M3U8_LOADER", LOADER_EVENTS5.LADER_START, this.url);
        }
      }
    }
  }, {
    key: "_isHEVC",
    value: function _isHEVC(meta) {
      return meta && meta.codec === "hev1.1.6.L93.B0";
    }
  }, {
    key: "load",
    value: function load(url) {
      this.url = url;
      this._preload();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      clearInterval(this._timmer);
      this.off(LOADER_EVENTS5.LOADER_COMPLETE, this._onLoadComplete);
      this.off(DEMUX_EVENTS5.METADATA_PARSED, this._onMetadataParsed);
      this.off(DEMUX_EVENTS5.DEMUX_COMPLETE, this._onDemuxComplete);
      this.m3u8Text = null;
    }
  }]);
  return HlsLiveController3;
}();
var hls_live_mobile_default = HlsLiveController2;

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mobile/config.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var config_default2 = {
  Tracks: track_default,
  XgBuffer: u8a_buffer_default,
  FetchLoader: fetch_loader_default,
  Crypto: crypto_default,
  M3U8Parser: m3u8_default,
  TsDemuxer: ts_default,
  Playlist: playlist_default
};

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/mobile/index.js
var _get4 = function get4(object, property, receiver) {
  if (object === null)
    object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === void 0) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return void 0;
    } else {
      return get4(parent, property, receiver);
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
var _createClass49 = function() {
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
function _classCallCheck50(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn9(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var HlsAllowedEvents3 = events_default.HlsAllowedEvents;
var HlsLivePlayer2 = function(_Player) {
  _inherits9(HlsLivePlayer4, _Player);
  _createClass49(HlsLivePlayer4, null, [{
    key: "isSupported",
    value: function isSupported() {
      var wasmSupported = "WebAssembly" in window;
      var WebComponentSupported = "customElements" in window && window.customElements.define;
      var isComponentDefined = false;
      if (WebComponentSupported) {
        isComponentDefined = window.customElements.get("live-video");
      }
      return wasmSupported && isComponentDefined;
    }
  }]);
  function HlsLivePlayer4(options) {
    _classCallCheck50(this, HlsLivePlayer4);
    if (!options.mediaType) {
      options.mediaType = "live-video";
      if (options.videoConfig) {
        options.videoConfig.preloadtime = options.preloadTime || 5;
      } else {
        options.videoConfig = {
          preloadtime: options.preloadTime || 5
        };
      }
    }
    var _this = _possibleConstructorReturn9(this, (HlsLivePlayer4.__proto__ || Object.getPrototypeOf(HlsLivePlayer4)).call(this, options));
    _this.hlsOps = {};
    _this.util = import_xgplayer3.default.util;
    _this.hlsOps = Object.assign(_this.hlsOps, config_default2);
    _this.util.deepCopy(_this.hlsOps, options);
    if (!_this.playerInited) {
      _this.initPlayer();
    }
    return _this;
  }
  _createClass49(HlsLivePlayer4, [{
    key: "initPlayer",
    value: function initPlayer() {
      this.video.width = Number.parseInt(this.hlsOps.width || 600);
      this.video.height = Number.parseInt(this.hlsOps.height || 337.5);
      this.video.style.outline = "none";
      this.playerInited = true;
    }
  }, {
    key: "_initEvents",
    value: function _initEvents() {
      var _this2 = this;
      this.once("canplay", function() {
        _this2.video.play();
      });
    }
  }, {
    key: "start",
    value: function start() {
      var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.hlsOps.url;
      if (!url || this.started) {
        return;
      }
      if (!this.playerInited) {
        this.initPlayer();
      }
      if (!this._context) {
        this._context = new context_default(HlsAllowedEvents3);
      }
      this.__core__ = this._context.registry("HLS_LIVE_CONTROLLER", hls_live_mobile_default)({ player: this, container: this.video, preloadTime: this.config.preloadTime });
      this._context.init();
      this.url = url;
      this.__core__.load(url);
      _get4(HlsLivePlayer4.prototype.__proto__ || Object.getPrototypeOf(HlsLivePlayer4.prototype), "start", this).call(this, url);
      this._initEvents();
      this.started = true;
      this.addLiveFlag();
    }
  }, {
    key: "play",
    value: function play() {
      if (this.started) {
        this._context.destroy();
        this._context = new context_default(HlsAllowedEvents3);
        this.__core__ = this._context.registry("HLS_LIVE_CONTROLLER", hls_live_mobile_default)({ player: this, container: this.video, preloadTime: this.config.preloadTime });
        this._context.init();
        this._initEvents();
        this.__core__.load(this.url);
      }
      _get4(HlsLivePlayer4.prototype.__proto__ || Object.getPrototypeOf(HlsLivePlayer4.prototype), "play", this).call(this);
    }
  }, {
    key: "addLiveFlag",
    value: function addLiveFlag() {
      var player = this;
      import_xgplayer3.default.util.addClass(player.root, "xgplayer-is-live");
      if (!import_xgplayer3.default.util.findDom(this.root, "xg-live")) {
        var live = import_xgplayer3.default.util.createDom("xg-live", "\u6B63\u5728\u76F4\u64AD", {}, "xgplayer-live");
        player.controls.appendChild(live);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;
      var isDelDOM = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      return new Promise(function(resolve) {
        _get4(HlsLivePlayer4.prototype.__proto__ || Object.getPrototypeOf(HlsLivePlayer4.prototype), "destroy", _this3).call(_this3);
        var video = _this3.video, root = _this3.root;
        _get4(HlsLivePlayer4.prototype.__proto__ || Object.getPrototypeOf(HlsLivePlayer4.prototype), "destroy", _this3).call(_this3, isDelDOM);
        if (video && video.remove) {
          video.remove();
        } else if (root) {
          root.removeChild(video);
        }
        if (video) {
          video.destroy();
        }
        setTimeout(function() {
          resolve();
        }, 50);
      });
    }
  }, {
    key: "src",
    set: function set2(url) {
      this.onWaiting = this.onWaiting.bind(this);
      this._context.destroy();
      this._context = null;
      this.started = false;
      this.video.currentTime = 0;
      this.start(url);
    }
  }], [{
    key: "install",
    value: function install(name, plugin) {
      return import_xgplayer3.default.install(name, plugin);
    }
  }]);
  return HlsLivePlayer4;
}(import_xgplayer3.default);
var mobile_default = HlsLivePlayer2;
HlsLivePlayer2.install = import_xgplayer3.default.install.bind(import_xgplayer3.default);

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-live@2.5.2@xgplayer-hls-live/es/index.js
var _createClass50 = function() {
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
function _classCallCheck51(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var HlsLivePlayer3 = function() {
  function HlsLivePlayer4(config) {
    _classCallCheck51(this, HlsLivePlayer4);
    if (mobile_default.isSupported() && config.useWASM) {
      return new mobile_default(config);
    }
    if (mse_default2.isSupported()) {
      return new mse_default2(config);
    } else {
      return new import_xgplayer4.default(config);
    }
  }
  _createClass50(HlsLivePlayer4, null, [{
    key: "install",
    value: function install(name, plugin) {
      return import_xgplayer4.default.install(name, plugin);
    }
  }]);
  return HlsLivePlayer4;
}();
var es_default = HlsLivePlayer3;
HlsLivePlayer3.EVENTS = events_default;

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-vod@2.5.2@xgplayer-hls-vod/es/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var import_xgplayer5 = __toESM(require_dist());

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-vod@2.5.2@xgplayer-hls-vod/es/hls-vod.js
init_define_process_env_UNI_STAT_TITLE_JSON();
var _createClass51 = function() {
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
function _classCallCheck52(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var LOADER_EVENTS6 = events_default.LOADER_EVENTS;
var REMUX_EVENTS7 = events_default.REMUX_EVENTS;
var DEMUX_EVENTS6 = events_default.DEMUX_EVENTS;
var HLS_EVENTS4 = events_default.HLS_EVENTS;
var CRYTO_EVENTS3 = events_default.CRYTO_EVENTS;
var MSE_EVENTS4 = events_default.MSE_EVENTS;
var HLS_ERROR3 = "HLS_ERROR";
var HlsVodController = function() {
  function HlsVodController2(configs) {
    _classCallCheck52(this, HlsVodController2);
    this.TAG = "HlsVodController";
    this.configs = Object.assign({}, configs);
    this.url = "";
    this.sequence = 0;
    this._playlist = null;
    this.retrytimes = this.configs.retrytimes || 3;
    this.container = this.configs.container;
    this.preloadTime = this.configs.preloadTime || 5;
    this.mse = this.configs.mse;
    this._lastSeekTime = 0;
    this.m3u8Text = null;
  }
  _createClass51(HlsVodController2, [{
    key: "init",
    value: function init() {
      this._context.registry("M3U8_BUFFER", u8a_buffer_default);
      this._tsBuffer = this._context.registry("TS_BUFFER", u8a_buffer_default)();
      this._tracks = this._context.registry("TRACKS", track_default)();
      this._playlist = this._context.registry("PLAYLIST", playlist_default)({ autoclear: false });
      this._presource = this._context.registry("PRE_SOURCE_BUFFER", remuxed_buffer_default)();
      this._compat = this._context.registry("COMPATIBILITY", hls_default)();
      this._context.registry("M3U8_LOADER", fetch_loader_default)({ buffer: "M3U8_BUFFER", readtype: 1 });
      this._tsloader = this._context.registry("TS_LOADER", fetch_loader_default)({ buffer: "TS_BUFFER", readtype: 3 });
      this._demuxer = this._context.registry("TS_DEMUXER", ts_default)({ inputbuffer: "TS_BUFFER" });
      this._context.registry("MP4_REMUXER", mp4_remux_default)(this._player.currentTime);
      if (!this.mse) {
        this.mse = new mse_default({ container: this.container, preloadTime: this.preloadTime }, this._context);
        this.mse.init();
      }
      this.initEvents();
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      this._onLoaderCompete = this._onLoaderCompete.bind(this);
      this._onLoadError = this._onLoadError.bind(this);
      this._onInitSegment = this._onInitSegment.bind(this);
      this._handleSEIParsed = this._handleSEIParsed.bind(this);
      this._onMediaSegment = this._onMediaSegment.bind(this);
      this._onMetadataParsed = this._onMetadataParsed.bind(this);
      this._onDemuxComplete = this._onDemuxComplete.bind(this);
      this._onDemuxError = this._onDemuxError.bind(this);
      this._onRemuxError = this._onRemuxError.bind(this);
      this._handleMseError = this._handleMseError.bind(this);
      this._onUpdateEnd = this._onUpdateEnd.bind(this);
      this._onTimeUpdate = this._onTimeUpdate.bind(this);
      this._onWaiting = this._onWaiting.bind(this);
      this.on(LOADER_EVENTS6.LOADER_COMPLETE, this._onLoaderCompete);
      this.on(LOADER_EVENTS6.LOADER_ERROR, this._onLoadError);
      this.on(REMUX_EVENTS7.INIT_SEGMENT, this._onInitSegment);
      this.on(DEMUX_EVENTS6.SEI_PARSED, this._handleSEIParsed);
      this.on(REMUX_EVENTS7.MEDIA_SEGMENT, this._onMediaSegment);
      this.on(DEMUX_EVENTS6.METADATA_PARSED, this._onMetadataParsed);
      this.on(DEMUX_EVENTS6.DEMUX_COMPLETE, this._onDemuxComplete);
      this.on(DEMUX_EVENTS6.DEMUX_ERROR, this._onDemuxError);
      this.on(REMUX_EVENTS7.REMUX_ERROR, this._onRemuxError);
      this.on(MSE_EVENTS4.MSE_ERROR, this._handleMseError);
      this.on(MSE_EVENTS4.SOURCE_UPDATE_END, this._onUpdateEnd);
      this.on("TIME_UPDATE", this._onTimeUpdate);
      this.on(MSE_EVENTS4.SOURCE_UPDATE_END, this._onTimeUpdate);
      this.on("WAITING", this._onWaiting);
    }
  }, {
    key: "_onError",
    value: function _onError(type, mod, err, fatal) {
      var error = {
        errorType: type,
        errorDetails: "[" + mod + "]: " + (err ? err.message : ""),
        errorFatal: fatal
      };
      this._player && this._player.emit(HLS_ERROR3, error);
    }
  }, {
    key: "_onLoadError",
    value: function _onLoadError(mod, error) {
      this._player.emit("error", {
        errorType: "network",
        ex: "[" + mod + "]: " + error.message,
        errd: {}
      });
      this._onError(LOADER_EVENTS6.LOADER_ERROR, mod, error, true);
    }
  }, {
    key: "_onDemuxError",
    value: function _onDemuxError(mod, error, fatal) {
      if (fatal === void 0) {
        fatal = true;
      }
      this._player.emit("error", {
        errorType: "parse",
        ex: "[" + mod + "]: " + error.message,
        errd: {}
      });
      this._onError(LOADER_EVENTS6.LOADER_ERROR, mod, error, fatal);
    }
  }, {
    key: "_onRemuxError",
    value: function _onRemuxError(mod, error, fatal) {
      if (fatal === void 0) {
        fatal = true;
      }
      this._player.emit("error", {
        errorType: "parse",
        ex: "[" + mod + "]: " + error.message,
        errd: {}
      });
      this._onError(REMUX_EVENTS7.REMUX_ERROR, mod, error, fatal);
    }
  }, {
    key: "_handleMseError",
    value: function _handleMseError(tag, err, fatal) {
      if (fatal === void 0) {
        fatal = false;
      }
      this._player.emit("error", {
        errorType: "format",
        ex: "[" + tag + "]: " + err.message,
        errd: {}
      });
      this._onError(MSE_EVENTS4.MSE_ERROR, tag, err, fatal);
    }
  }, {
    key: "_onWaiting",
    value: function _onWaiting(container) {
      var end = true;
      dev_logger_default.log(this.TAG, "waiting.......", this._player.video.currentTime);
      this._seekToBufferStart();
      var playList = Object.keys(this._playlist.list);
      var playListLen = playList.length;
      if (!playListLen) {
        return;
      }
      for (var i = 0; i < playListLen; i++) {
        if (this.container.currentTime * 1e3 < parseInt(playList[i])) {
          end = false;
        }
      }
      if (end) {
        var ts = this._playlist.getTs(this.container.currentTime * 1e3);
        if (!ts) {
          this._player.emit("ended");
          this.mse.endOfStream();
        } else {
          if (ts.downloaded) {
            this._player.emit("ended");
            this.mse.endOfStream();
          }
        }
      }
    }
  }, {
    key: "_seekToBufferStart",
    value: function _seekToBufferStart() {
      var video = this._player.video;
      var buffered = video.buffered;
      var range = [0, 0];
      var currentTime = video.currentTime;
      if (buffered) {
        for (var i = 0, len = buffered.length; i < len; i++) {
          range[0] = buffered.start(i);
          range[1] = buffered.end(i);
          if (range[0] <= currentTime && currentTime <= range[1]) {
            return;
          }
        }
      }
      var bufferStart = range[0];
      if (currentTime === 0 && currentTime < bufferStart && Math.abs(currentTime - bufferStart) < 5) {
        video.currentTime = bufferStart;
      }
    }
  }, {
    key: "_checkEnd",
    value: function _checkEnd() {
      var video = this._player.video;
      var buffered = video.buffered;
      var len = buffered.length;
      if (!len)
        return;
      var end = buffered.end(len - 1);
      if (Math.abs(end - video.duration) < 1) {
        this.mse.endOfStream();
      }
    }
  }, {
    key: "_onUpdateEnd",
    value: function _onUpdateEnd() {
      this._checkEnd();
      this._seekToBufferStart();
      this._preload(this._player.currentTime);
    }
  }, {
    key: "_onTimeUpdate",
    value: function _onTimeUpdate() {
      this._seekToBufferStart();
      this._preload(this._player.currentTime);
    }
  }, {
    key: "_onDemuxComplete",
    value: function _onDemuxComplete() {
      this.emit(REMUX_EVENTS7.REMUX_MEDIA, "ts");
    }
  }, {
    key: "_handleSEIParsed",
    value: function _handleSEIParsed(sei) {
      this._player.emit("SEI_PARSED", sei);
    }
  }, {
    key: "_onMetadataParsed",
    value: function _onMetadataParsed(type) {
      try {
        var m = this._tracks[type + "Track"].meta;
        dev_logger_default.warn(this.TAG, "meta detect or changed , ", type, Object.assign({}, m));
      } catch (e) {
      }
      var duration = parseInt(this._playlist.duration);
      if (type === "video") {
        this._context.mediaInfo.hasVideo = true;
        this._tracks.videoTrack.meta.duration = duration;
      } else if (type === "audio") {
        this._context.mediaInfo.hasAudio = true;
        this._tracks.audioTrack.meta.duration = duration;
      }
      this.emit(REMUX_EVENTS7.REMUX_METADATA, type);
    }
  }, {
    key: "_onMediaSegment",
    value: function _onMediaSegment() {
      if (Object.keys(this.mse.sourceBuffers).length < 1) {
        this.mse.addSourceBuffers();
      }
      this.mse.doAppend();
    }
  }, {
    key: "_onInitSegment",
    value: function _onInitSegment() {
      this.mse.addSourceBuffers();
    }
  }, {
    key: "_onLoaderCompete",
    value: function _onLoaderCompete(buffer) {
      if (buffer.TAG === "M3U8_BUFFER") {
        this.m3u8Text = buffer.shift();
        try {
          var mdata = m3u8_default.parse(this.m3u8Text, this.url);
          this._playlist.pushM3U8(mdata);
        } catch (error) {
          this._onError("M3U8_PARSER_ERROR", "PLAYLIST", error, true);
        }
        if (this._playlist.encrypt && this._playlist.encrypt.uri && !this._playlist.encrypt.key) {
          this._context.registry("DECRYPT_BUFFER", u8a_buffer_default)();
          this._context.registry("KEY_BUFFER", u8a_buffer_default)();
          this._tsloader.buffer = "DECRYPT_BUFFER";
          this._keyLoader = this._context.registry("KEY_LOADER", fetch_loader_default)({ buffer: "KEY_BUFFER", readtype: 3 });
          this.emitTo("KEY_LOADER", LOADER_EVENTS6.LADER_START, this._playlist.encrypt.uri);
        } else {
          if (!this.preloadTime) {
            if (this._playlist.targetduration) {
              this.preloadTime = this._playlist.targetduration;
              this.mse.preloadTime = this._playlist.targetduration;
            } else {
              this.preloadTime = 5;
              this.mse.preloadTime = 5;
            }
          }
          var frag = this._playlist.getTs((this._player.currentTime + 0.5) * 1e3);
          if (frag) {
            this._logDownSegment(frag);
            this._playlist.downloading(frag.url, true);
            this.emitTo("TS_LOADER", LOADER_EVENTS6.LADER_START, frag.url);
          } else {
            if (this.retrytimes > 0) {
              this.retrytimes--;
              this.emitTo("M3U8_LOADER", LOADER_EVENTS6.LADER_START, this.url);
            }
          }
        }
      } else if (buffer.TAG === "TS_BUFFER") {
        this._playlist.downloaded(this._tsloader.url, true);
        this._demuxer.demux(Object.assign({ url: this._tsloader.url }, this._playlist._ts[this._tsloader.url]), true);
        this._preload(this.mse.container.currentTime);
      } else if (buffer.TAG === "DECRYPT_BUFFER") {
        this.retrytimes = this.configs.retrytimes || 3;
        this._playlist.downloaded(this._tsloader.url, true);
        this.emitTo("CRYPTO", CRYTO_EVENTS3.START_DECRYPT, Object.assign({ url: this._tsloader.url }, this._playlist._ts[this._tsloader.url]));
      } else if (buffer.TAG === "KEY_BUFFER") {
        this.retrytimes = this.configs.retrytimes || 3;
        this._playlist.encrypt.key = buffer.shift();
        this._crypto = this._context.registry("CRYPTO", crypto_default)({
          key: this._playlist.encrypt.key,
          iv: this._playlist.encrypt.ivb,
          method: this._playlist.encrypt.method,
          inputbuffer: "DECRYPT_BUFFER",
          outputbuffer: "TS_BUFFER"
        });
        this._crypto.on(CRYTO_EVENTS3.DECRYPTED, this._onDcripted.bind(this));
        var _frag = this._playlist.getTs();
        if (_frag) {
          this._playlist.downloading(_frag.url, true);
          this.emitTo("TS_LOADER", LOADER_EVENTS6.LADER_START, _frag.url);
        } else {
          if (this.retrytimes > 0) {
            this.retrytimes--;
            this.emitTo("M3U8_LOADER", LOADER_EVENTS6.LADER_START, this.url);
          }
        }
      }
    }
  }, {
    key: "_onDcripted",
    value: function _onDcripted() {
      this.emit(DEMUX_EVENTS6.DEMUX_START);
    }
  }, {
    key: "seek",
    value: function seek(time) {
      var video = this._player.video;
      for (var i = 0; i < video.buffered.length; i++) {
        if (time >= video.buffered.start(i) && time < video.buffered.end(i)) {
          return;
        }
      }
      dev_logger_default.warn(this.TAG, "seek: ", time, "tsloading:", this._tsloader.loading);
      var frag = this._playlist.getTs((time + 0.5) * 1e3);
      if (frag && this._tsloader.loading && this._tsloader.url === frag.url)
        return;
      this._lastSeekTime = time;
      this._tsloader.destroy();
      this._tsloader = this._context.registry("TS_LOADER", fetch_loader_default)({ buffer: "TS_BUFFER", readtype: 3 });
      if (this._presource.sources.video) {
        this._presource.sources.video.data = [];
      }
      if (this._presource.sources.audio) {
        this._presource.sources.audio.data = [];
      }
      if (this._tracks.audioTrack) {
        this._tracks.audioTrack.samples = [];
      }
      if (this._tracks.videoTrack) {
        this._tracks.videoTrack.samples = [];
      }
      if (this._compat) {
        this._compat.reset();
      }
      if (this._tsBuffer) {
        this._tsBuffer.array = [];
        this._tsBuffer.length = 0;
        this._tsBuffer.offset = 0;
      }
      this._playlist.clearDownloaded();
      this._context.seek(time);
      this._preload(time);
    }
  }, {
    key: "replay",
    value: function replay() {
      this._compat.reset();
      this._playlist.clearDownloaded();
    }
  }, {
    key: "load",
    value: function load(url) {
      this.url = url;
      this.emitTo("M3U8_LOADER", LOADER_EVENTS6.LADER_START, url, null, 0);
    }
  }, {
    key: "_preload",
    value: function _preload(time) {
      time = Math.floor(time);
      if (this._tsloader.loading) {
        return;
      }
      dev_logger_default.log(this.TAG, "preload: time=", time);
      var video = this.mse.container;
      var currentbufferend = -1;
      if (!time && video.buffered.length) {
        time = video.buffered.start(0);
      }
      for (var i = 0; i < video.buffered.length; i++) {
        if (time >= Math.floor(video.buffered.start(i)) && time <= Math.ceil(video.buffered.end(i))) {
          currentbufferend = video.buffered.end(i);
        }
      }
      if (currentbufferend < 0) {
        var frag = this._playlist.getTs((time + 0.5) * 1e3);
        if (frag && frag.downloaded) {
          frag = this._playlist.getTs(frag.time + frag.duration);
        }
        if (frag && !frag.downloading && !frag.downloaded) {
          this._logDownSegment(frag);
          this._playlist.downloading(frag.url, true);
          this.emitTo("TS_LOADER", LOADER_EVENTS6.LADER_START, frag.url);
        }
      } else if (currentbufferend < time + this.preloadTime) {
        var _frag2 = this._playlist.getLastDownloadedTs() || this._playlist.getTs(currentbufferend * 1e3);
        if (!_frag2) {
          return;
        }
        var curTime = _frag2.time + _frag2.duration;
        var curFragTime = _frag2.time;
        if (_frag2.downloaded) {
          var loopMax = 1e3;
          while (loopMax-- > 0) {
            curTime += 10;
            _frag2 = this._playlist.getTs(curTime);
            if (!_frag2 || _frag2.time > curFragTime) {
              break;
            }
          }
        }
        if (_frag2 && !_frag2.downloading && !_frag2.downloaded) {
          this._logDownSegment(_frag2);
          this._playlist.downloading(_frag2.url, true);
          this.emitTo("TS_LOADER", LOADER_EVENTS6.LADER_START, _frag2.url);
        }
      }
    }
  }, {
    key: "cleanBuffer",
    value: function cleanBuffer() {
      var _this = this;
      var time = this._player.currentTime;
      var video = this._player.video;
      var buffered = video.buffered;
      if (!buffered || !buffered.length) {
        return;
      }
      var range = [0, 0];
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
      var bufferStart = range[0];
      var bufferEnd = range[1];
      if (time - bufferStart > 10 || buffered.length > 1) {
        this.mse.remove(Math.max(Math.min(time - 10, bufferEnd - 10), 0.1), 0);
        this.bufferClearTimer = setTimeout(function() {
          _this.bufferClearTimer = null;
        }, 5e3);
      }
    }
  }, {
    key: "destory",
    value: function destory() {
      this.configs = {};
      this.url = "";
      this.sequence = 0;
      this._playlist = null;
      this.retrytimes = 3;
      this.container = void 0;
      this.preloadTime = 5;
      this._lastSeekTime = 0;
      this.m3u8Text = null;
      this.mse = null;
      this.off(LOADER_EVENTS6.LOADER_COMPLETE, this._onLoaderCompete);
      this.off(LOADER_EVENTS6.LOADER_ERROR, this._onLoadError);
      this.off(REMUX_EVENTS7.INIT_SEGMENT, this._onInitSegment);
      this.off(REMUX_EVENTS7.MEDIA_SEGMENT, this._onMediaSegment);
      this.off(DEMUX_EVENTS6.METADATA_PARSED, this._onMetadataParsed);
      this.off(DEMUX_EVENTS6.DEMUX_COMPLETE, this._onDemuxComplete);
      this.off("TIME_UPDATE", this._onTimeUpdate);
      this.off("WAITING", this._onWaiting);
    }
  }, {
    key: "_logDownSegment",
    value: function _logDownSegment(frag) {
      if (!frag)
        return;
      dev_logger_default.groupEnd();
      dev_logger_default.group(this.TAG, "load " + frag.id + ": [" + frag.time / 1e3 + " , " + (frag.time + frag.duration) / 1e3 + "], downloading: " + frag.downloading + " , donwloaded: " + frag.downloaded);
    }
  }]);
  return HlsVodController2;
}();
var hls_vod_default = HlsVodController;

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls-vod@2.5.2@xgplayer-hls-vod/es/index.js
var _createClass52 = function() {
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
var _set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === void 0) {
    var parent = Object.getPrototypeOf(object);
    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;
    if (setter !== void 0) {
      setter.call(receiver, value);
    }
  }
  return value;
};
var _get5 = function get5(object, property, receiver) {
  if (object === null)
    object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === void 0) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return void 0;
    } else {
      return get5(parent, property, receiver);
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
function _classCallCheck53(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn10(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits10(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var debounce = common_exports.debounce;
var HlsAllowedEvents4 = events_default.HlsAllowedEvents;
var REMUX_EVENTS8 = events_default.REMUX_EVENTS;
var HLS_EVENTS5 = events_default.HLS_EVENTS;
var MSE_EVENTS5 = events_default.MSE_EVENTS;
var HlsVodPlayer = function(_Player) {
  _inherits10(HlsVodPlayer2, _Player);
  function HlsVodPlayer2(options) {
    _classCallCheck53(this, HlsVodPlayer2);
    var _this = _possibleConstructorReturn10(this, (HlsVodPlayer2.__proto__ || Object.getPrototypeOf(HlsVodPlayer2)).call(this, options));
    _this.hlsOps = {};
    _this.util = import_xgplayer5.default.util;
    _this.util.deepCopy(_this.hlsOps, options);
    _this._handleSetCurrentTime = debounce(_this._handleSetCurrentTime.bind(_this), 200);
    _this.onWaiting = _this.onWaiting.bind(_this);
    return _this;
  }
  _createClass52(HlsVodPlayer2, [{
    key: "_handleSetCurrentTime",
    value: function _handleSetCurrentTime(time) {
      time = parseFloat(time);
      if (time === this.currentTime)
        return;
      _set(HlsVodPlayer2.prototype.__proto__ || Object.getPrototypeOf(HlsVodPlayer2.prototype), "currentTime", time, this);
      if (this._context) {
        this.__core__.seek(time);
      }
    }
  }, {
    key: "play",
    value: function play() {
      var _this2 = this;
      return this.video.play().catch(function(e) {
        if (e && e.code === 20) {
          _this2.once("canplay", function() {
            _this2.video.play();
          });
        }
      });
    }
  }, {
    key: "replay",
    value: function replay() {
      var _this3 = this;
      this.__core__.mse.cleanBuffers().then(function() {
        _this3.__core__.replay();
        _get5(HlsVodPlayer2.prototype.__proto__ || Object.getPrototypeOf(HlsVodPlayer2.prototype), "replay", _this3).call(_this3);
      });
    }
  }, {
    key: "_initEvents",
    value: function _initEvents() {
      var _this4 = this;
      this.__core__.once(REMUX_EVENTS8.INIT_SEGMENT, function() {
        var mse = _this4.__core__.mse;
        _get5(HlsVodPlayer2.prototype.__proto__ || Object.getPrototypeOf(HlsVodPlayer2.prototype), "start", _this4).call(_this4, mse.url);
      });
      this.__core__.once(HLS_EVENTS5.RETRY_TIME_EXCEEDED, function() {
        _this4.emit("error", new import_xgplayer5.default.Errors("network", _this4.config.url));
      });
      this.__core__.on(MSE_EVENTS5.SOURCE_UPDATE_END, function() {
        _this4._onSourceUpdateEnd();
      });
      this.once("canplay", function() {
        if (_this4.config.autoplay) {
          _this4.play();
        }
      });
    }
  }, {
    key: "initHlsBackupEvents",
    value: function initHlsBackupEvents(hls, ctx) {
      var _this5 = this;
      hls.once(REMUX_EVENTS8.INIT_SEGMENT, function() {
        if (!_this5.video.src) {
          console.log("\u6302\u8F7D src blob");
          var mse = hls.mse;
          _get5(HlsVodPlayer2.prototype.__proto__ || Object.getPrototypeOf(HlsVodPlayer2.prototype), "start", _this5).call(_this5, mse.url);
        }
      });
      hls.once(events_default.REMUX_EVENTS.MEDIA_SEGMENT, function() {
        _this5.__core__ = hls;
        _this5.__core__.mse.cleanBuffers().then(function() {
          _this5.__core__.mse.resetContext(ctx);
          _this5.__core__.mse.doAppend();
          _this5._context = ctx;
        });
      });
      hls.once(events_default.LOADER_EVENTS.LOADER_ERROR, function() {
        ctx.destroy();
      });
    }
  }, {
    key: "_onSourceUpdateEnd",
    value: function _onSourceUpdateEnd() {
      if (this.video.readyState === 1 || this.video.readyState === 2) {
        var _detectBufferGap = this.detectBufferGap(), gap = _detectBufferGap.gap, start = _detectBufferGap.start, method = _detectBufferGap.method;
        if (gap) {
          if (method === "ceil" && this.currentTime < Math[method](start)) {
            this.currentTime = Math[method](start);
          } else if (method === "floor" && this.currentTime > Math[method](start)) {
            this.currentTime = Math[method](start);
          }
        }
      }
    }
  }, {
    key: "start",
    value: function start() {
      var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.config.url;
      if (!url || this.started) {
        return;
      }
      if (!this._context) {
        this._context = new context_default(this, this.hlsOps, HlsAllowedEvents4);
      }
      this.__core__ = this._context.registry("HLS_VOD_CONTROLLER", hls_vod_default)({ player: this, container: this.video, preloadTime: this.config.preloadTime });
      this._context.init();
      this.__core__.load(url);
      this._initEvents();
      this.started = true;
    }
  }, {
    key: "switchURL",
    value: function switchURL(url) {
      this.config.url = url;
      var context = new context_default(this, this.hlsOps, HlsAllowedEvents4);
      var hls = context.registry("HLS_VOD_CONTROLLER", hls_vod_default)({
        player: this,
        container: this.video,
        mse: this.__core__.mse,
        preloadTime: this.config.preloadTime
      });
      this.newContext = context;
      this.newHls = hls;
      context.init();
      this._context.destroy();
      this.initHlsBackupEvents(hls, context);
      this.__core__.mse.cleanBuffers().then(function() {
        hls.load(url);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;
      return new Promise(function(resolve) {
        if (_this6.__core__ && _this6.__core__.mse) {
          _this6.__core__.mse.destroy().then(function() {
            if (_this6._context) {
              _this6._context.destroy();
            }
            _get5(HlsVodPlayer2.prototype.__proto__ || Object.getPrototypeOf(HlsVodPlayer2.prototype), "destroy", _this6).call(_this6);
            resolve();
          });
          setTimeout(function() {
            resolve();
          }, 100);
        } else {
          _get5(HlsVodPlayer2.prototype.__proto__ || Object.getPrototypeOf(HlsVodPlayer2.prototype), "destroy", _this6).call(_this6);
          setTimeout(function() {
            resolve();
          }, 50);
        }
      });
    }
  }, {
    key: "detectBufferGap",
    value: function detectBufferGap() {
      var video = this.video;
      var result = {
        gap: false,
        start: -1
      };
      var isStartPlay = this.currentTime === 0;
      for (var i = 0; i < video.buffered.length; i++) {
        var bufferStart = video.buffered.start(i);
        var bufferEnd = video.buffered.end(i);
        if ((!video.played.length || bufferStart <= this.currentTime && bufferEnd - this.currentTime >= 0.5) && !isStartPlay) {
          break;
        }
        var startGap = bufferStart - this.currentTime;
        var endGap = this.currentTime - bufferEnd;
        if (startGap > 0.01 && (startGap <= 2 || isStartPlay)) {
          result = {
            gap: true,
            start: bufferStart,
            method: "ceil"
          };
          break;
        } else if (endGap > 0.1 && (endGap <= 2 || isStartPlay)) {
          result = {
            gap: true,
            start: bufferEnd,
            method: "floor"
          };
        } else {
          result = {
            gap: false,
            start: -1
          };
        }
      }
      return result;
    }
  }, {
    key: "currentTime",
    get: function get6() {
      return _get5(HlsVodPlayer2.prototype.__proto__ || Object.getPrototypeOf(HlsVodPlayer2.prototype), "currentTime", this);
    },
    set: function set2(time) {
      this._handleSetCurrentTime(time);
    }
  }, {
    key: "src",
    get: function get6() {
      return this.currentSrc;
    },
    set: function set2(url) {
      var _this7 = this;
      this.onWaiting = this.onWaiting.bind(this);
      this.__core__.mse.destroy().then(function() {
        _this7._context.destroy();
        _this7._context = null;
        _this7.video.src = "";
        _this7.video.load();
        _this7.started = false;
        _this7.video.currentTime = 0;
        if (!_this7.paused) {
          _this7.pause();
          _this7.once("canplay", function() {
            _this7.play();
          });
        } else {
          _this7.play();
        }
        _this7.start(url);
      });
    }
  }, {
    key: "context",
    get: function get6() {
      return this._context;
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
    }
  }, {
    key: "install",
    value: function install(name, plugin) {
      return import_xgplayer5.default.install(name, plugin);
    }
  }]);
  return HlsVodPlayer2;
}(import_xgplayer5.default);
var es_default2 = HlsVodPlayer;

// F:/uniapp/beyond-video/node_modules/_xgplayer-hls@2.5.2@xgplayer-hls/es/index.js
var import_xgplayer6 = __toESM(require_dist());
var _createClass53 = function() {
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
function _classCallCheck54(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var HlsPlayer = function() {
  function HlsPlayer2(config) {
    _classCallCheck54(this, HlsPlayer2);
    if (config.isLive) {
      return new es_default(config);
    } else {
      return new es_default2(config);
    }
  }
  _createClass53(HlsPlayer2, null, [{
    key: "isSupported",
    value: function isSupported() {
      return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
    }
  }, {
    key: "install",
    value: function install(name, plugin) {
      return import_xgplayer6.default.install(name, plugin);
    }
  }]);
  return HlsPlayer2;
}();
var es_default3 = HlsPlayer;

// dep:xgplayer-hls
var xgplayer_hls_default = es_default3;
export {
  xgplayer_hls_default as default
};
//# sourceMappingURL=xgplayer-hls.js.map
