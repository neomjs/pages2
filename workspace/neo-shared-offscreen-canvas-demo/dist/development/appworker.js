/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./. lazy recursive ^\\.\\/.*\\.mjs$ include: [\\\\\\/]app.mjs$ exclude: [\\\\\\/]node_modules":
/*!***********************************************************************************************************!*\
  !*** ././ lazy ^\.\/.*\.mjs$ include: [\\\/]app.mjs$ exclude: [\\\/]node_modules strict namespace object ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./apps/childapp/app.mjs": [
		"./apps/childapp/app.mjs",
		"vendors-node_modules_neo_mjs_src_container_Viewport_mjs",
		"apps_childapp_app_mjs"
	],
	"./apps/mainapp/app.mjs": [
		"./apps/mainapp/app.mjs",
		"vendors-node_modules_neo_mjs_src_container_Viewport_mjs",
		"vendors-node_modules_neo_mjs_src_controller_Component_mjs-node_modules_neo_mjs_src_toolbar_Base_mjs",
		"apps_mainapp_app_mjs"
	],
	"./docs/app.mjs": [
		"./docs/app.mjs",
		"vendors-node_modules_neo_mjs_src_container_Viewport_mjs",
		"vendors-node_modules_neo_mjs_src_controller_Component_mjs-node_modules_neo_mjs_src_toolbar_Base_mjs",
		"vendors-node_modules_neo_mjs_src_container_Panel_mjs-node_modules_neo_mjs_src_form_field_Sear-625de9",
		"docs_app_mjs"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./. lazy recursive ^\\.\\/.*\\.mjs$ include: [\\\\\\/]app.mjs$ exclude: [\\\\\\/]node_modules";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Neo = globalThis.Neo || {};

Neo.config = Neo.config || {};

/**
 * Config object for the neo.mjs framework which will get passed to all workers
 * You can change the configs, e.g. inside the index.html of your app
 * @memberOf module:Neo
 * @name config
 * @type Object
 */
const DefaultConfig = {
    /**
     * true will apply 'neo-body' to the document.body classList
     * @default true
     * @memberOf! module:Neo
     * @name config.applyBodyCls
     * @type Boolean
     */
    applyBodyCls: true,
    /**
     * Path to your app.mjs file. You can create multiple apps there if needed.
     * @default null
     * @memberOf! module:Neo
     * @name config.appPath
     * @type String|null
     */
    appPath: null,
    /**
     * Path to the neo.mjs directory
     * @default './'
     * @memberOf! module:Neo
     * @name config.basePath
     * @type String
     */
    basePath: './',
    /**
     * Pass a token in case you are using the CesiumJS main thread addon
     * See: https://github.com/neomjs/neo/blob/dev/src/main/addon/CesiumJS.mjs
     * @default null
     * @memberOf! module:Neo
     * @name config.cesiumJsToken
     * @type String|null
     */
    cesiumJsToken: null,
    /**
     * The current environment. Valid values: 'development', 'dist/development', 'dist/production'
     * This config will get auto-generated
     * @default 'dist/production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'dist/production',
    /**
     * In case you are using the GoogleAnalytics main thread addon or useGoogleAnalytics: true,
     * you can change the gtag id here. Required for the online examples (gh pages)
     * @default 'UA-153734404-1'
     * @memberOf! module:Neo
     * @name config.gtagId
     * @type String
     */
    gtagId: 'UA-153734404-1',
    /**
     * Flag for running on https://neomjs.github.io/pages/
     * => to use local images paths instead of raw.githubusercontent.com
     * @default false
     * @memberOf! module:Neo
     * @name config.isGitHubPages
     * @type Boolean
     */
    isGitHubPages: false,
    /**
     * Flag for running the Neo main thread inside an iframe (Siesta Browser Harness)
     * @default false
     * @memberOf! module:Neo
     * @name config.isInsideSiesta
     * @type Boolean
     */
    isInsideSiesta: false,
    /**
     * delay in ms for the worker.Manager:loadApplication() call
     * @default 20
     * @memberOf! module:Neo
     * @name config.loadApplicationDelay
     * @type Number
     */
    loadApplicationDelay: 20,
    /**
     * Used by Intl.DateTimeFormat, for details take a look at:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @default 'default'
     * @memberOf! module:Neo
     * @name config.locale
     * @type String
     */
    locale: 'default',
    /**
     * true will log the delta updates inside the main thread(s) as well as the requestAnimation frames
     * @default false
     * @memberOf! module:Neo
     * @name config.logDeltaUpdates
     * @type Boolean
     */
    logDeltaUpdates: false,
    /**
     * Add addons for the main thread
     * Possible values: AmCharts, AnalyticsByGoogle, DragDrop, HighlightJS, LocalStorage, MapboxGL, Markdown, Siesta, Stylesheet, WindowPosition
     * (src/main/addon) contains all framework related options.
     * You can also create your own addons within your workspace scope. Make sure to put them inside 'src/main/addon/'
     * and prefix them with 'WS/' inside your neo-config.json file.
     * Example: ['DragDrop', 'Stylesheet', 'WS/MyAddon']
     * @default ['DragDrop','Stylesheet']
     * @memberOf! module:Neo
     * @name config.mainThreadAddons
     * @type String[]
     */
    mainThreadAddons: ['DragDrop', 'Stylesheet'],
    /**
     * Pass the URL of a JSON-file, which contains the services and methods from your backend,
     * which you want to expose to the client.
     * See: https://github.com/neomjs/neo/projects/32
     * @default null
     * @memberOf! module:Neo
     * @name config.remotesApiUrl
     * @type String|null
     */
    remotesApiUrl: null,
    /**
     * You can visually show the amount of delta updates per second using this config.
     * It expects a dom node with the id "neo-delta-updates" as the rendering target.
     * @default false
     * @memberOf! module:Neo
     * @name config.renderCountDeltas
     * @type Boolean
     */
    renderCountDeltas: false,
    /**
     * Add themes you want to use here. The first theme will get applied.
     * If config.useCssVars === true, other theme variables will get included as well
     * @default ['neo-theme-light', 'neo-theme-dark']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
    /**
     * Flag if CSS variable based stylesheets are in use (important for switching themes)
     * @default true
     * @memberOf! module:Neo
     * @name config.useCssVars
     * @type Boolean
     */
    useCssVars: true,
    /**
     * Experimental flag if an offscreen canvas worker should get created.
     * @default false
     * @memberOf! module:Neo
     * @name config.useCanvasWorker
     * @type Boolean
     */
    useCanvasWorker: false,
    /**
     * Flag if vdom ids should get mapped into DOM element ids.
     * false will convert them into a "data-neo-id" attribute.
     * @default true
     * @memberOf! module:Neo
     * @name config.useDomIds
     * @type Boolean
     */
    useDomIds: true,
    /**
     * True will automatically include the stylesheet
     * @default true
     * @memberOf! module:Neo
     * @name config.useFontAwesome
     * @type Boolean
     */
    useFontAwesome: true,
    /**
     * Intended for the online examples where we need an easy way to add GA to every generated app
     * @default false
     * @memberOf! module:Neo
     * @name config.useGoogleAnalytics
     * @type Boolean
     */
    useGoogleAnalytics: false,
    /**
     * True will add the ServiceWorker main thread addon to support caching of assets (PWA)
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
     * @default false
     * @memberOf! module:Neo
     * @name config.useServiceWorker
     * @type Boolean
     */
    useServiceWorker: false,
    /**
     * Creates App, Data & VDom as SharedWorkers.
     * Set this one to true in case you want to connect multiple main threads.
     * @default false
     * @memberOf! module:Neo
     * @name config.useSharedWorkers
     * @type Boolean
     */
    useSharedWorkers: false,
    /**
     * Adds global dom event listeners for mobile related events like rotate, swipe, tap
     * @default true
     * @memberOf! module:Neo
     * @name config.useTouchEvents
     * @type Boolean
     */
    useTouchEvents: true,
    /**
     * False will create the vdom.Helper within the App worker (experimental!)
     * @default true
     * @memberOf! module:Neo
     * @name config.useVdomWorker
     * @type Boolean
     */
    useVdomWorker: true
};

Object.assign(DefaultConfig, {
    /**
     * Path to the top level neo.mjs resources folder
     * @default Neo.config.basePath + 'resources/'
     * @memberOf! module:Neo
     * @name config.resourcesPath
     * @type String
     */
    resourcesPath: `${Neo.config.basePath || DefaultConfig.basePath}resources/`,
    /**
     * The default base URL for web worker entry points (App, Data, Vdom)
     * @default Neo.config.basePath + 'src/worker/'
     * @memberOf! module:Neo
     * @name config.workerBasePath
     * @type String
     */
    workerBasePath: `${Neo.config.basePath || DefaultConfig.basePath}src/worker/`,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultConfig);


/***/ }),

/***/ "./node_modules/neo.mjs/src/Neo.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Neo.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultConfig.mjs */ "./node_modules/neo.mjs/src/DefaultConfig.mjs");


const configSymbol = Symbol.for('configSymbol'),
      getSetCache  = Symbol('getSetCache');

/**
 * The base module to enhance classes, create instances and the Neo namespace
 * @module Neo
 * @singleton
 * @borrows Neo.core.Util.bindMethods       as bindMethods
 * @borrows Neo.core.Util.capitalize        as capitalize
 * @borrows Neo.core.Util.createStyleObject as createStyleObject
 * @borrows Neo.core.Util.createStyles      as createStyles
 * @borrows Neo.core.Util.decamel           as decamel
 * @borrows Neo.core.Util.isArray           as isArray
 * @borrows Neo.core.Util.isBoolean         as isBoolean
 * @borrows Neo.core.Util.isDefined         as isDefined
 * @borrows Neo.core.Compare.isEqual        as isEqual
 * @borrows Neo.core.Util.isNumber          as isNumber
 * @borrows Neo.core.Util.isObject          as isObject
 * @borrows Neo.core.Util.isString          as isString
 * @borrows Neo.core.Util.toArray           as toArray
 * @tutorial 01_Concept
 */
let Neo = globalThis.Neo || {};

Neo = globalThis.Neo = Object.assign({
    /**
     * A map containing ntypes as key and Neo classes or singletons as values
     * @memberOf! module:Neo
     * @protected
     * @type Object
     */
    ntypeMap: {},
    /**
     * Needed for Neo.create. False for the main thread, true for the App, Data & Vdom worker
     * @memberOf! module:Neo
     * @protected
     * @type Boolean
     */
    insideWorker: typeof DedicatedWorkerGlobalScope !== 'undefined' || typeof WorkerGlobalScope !== 'undefined',

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls The Neo class to apply configs to
     * @protected
     * @tutorial 02_ClassSystem
     */
    applyClassConfig(cls) {
        let baseCfg       = null,
            baseStaticCfg = null,
            proto         = cls.prototype || cls,
            protos        = [],
            config, ctor, staticConfig;

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (ctor.hasOwnProperty('classConfigApplied')) {
                baseCfg       = Neo.clone(ctor.config,       true);
                baseStaticCfg = Neo.clone(ctor.staticConfig, true);
                break;
            }

            protos.unshift(proto);
            proto = proto.__proto__;
        }

        config       = baseCfg       || {};
        staticConfig = baseStaticCfg || {};

        protos.forEach(element => {
            ctor = element.constructor;
            let cfg       = ctor.getConfig      ?.() || {},
                staticCfg = ctor.getStaticConfig?.() || {},
                mixins;

            if (cfg) {
                Object.entries(cfg).forEach(([key, value]) => {
                    if (key.slice(-1) === '_') {
                        delete cfg[key];
                        key = key.slice(0, -1);
                        cfg[key] = value;
                        autoGenerateGetSet(element, key);
                    }

                    // only apply properties which have no setters inside the prototype chain
                    // those will get applied on create (Neo.core.Base -> initConfig)
                    else if (!Neo.hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value,
                            writable  : true
                        });
                    }
                });
            }

            Object.assign(ctor, staticCfg);

            if (cfg.hasOwnProperty('ntype')) {
                Neo.ntypeMap[cfg.ntype] = cfg.className;
            }

            mixins = config.hasOwnProperty('mixins') && config.mixins || [];

            if (staticCfg?.observable) {
                mixins.push('Neo.core.Observable');
            }

            if (cfg.hasOwnProperty('mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins);
            }

            if (mixins.length > 0) {
                applyMixins(ctor, mixins);

                if (Neo.ns('Neo.core.Observable', false, ctor.prototype.mixins)) {
                    staticCfg.observable = true;
                }
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);
            Object.assign(staticConfig, staticCfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                staticConfig      : Neo.clone(staticConfig, true)
            });

            delete ctor.getConfig;
            delete ctor.getStaticConfig;

            !config.singleton && this.applyToGlobalNs(cls);
        });
    },

    /**
     * Maps methods from one namespace to another one
     * @example
     * // aliases
     * Neo.applyFromNs(Neo, Util, {
     *     createStyleObject: 'createStyleObject',
     *     createStyles     : 'createStyles',
     *     capitalize       : 'capitalize'
     * }, true);
     *
     * // e.g. Neo.core.Util.isObject => Neo.isObject
     * @memberOf module:Neo
     * @param {Neo|Neo.core.Base} target The target class or singleton Instance or Neo
     * @param {Neo.core.Base} namespace The class containing the methods
     * @param {Object} config
     * @param {Boolean} [bind] set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs(target, namespace, config, bind) {
        let fnName;

        if (target && Neo.typeOf(config) === 'Object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName;
            });
        }

        return target;
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs(cls) {
        let proto = typeof cls === 'function' ? cls.prototype: cls,
            className, nsArray, key, ns;

        if (proto.constructor.registerToGlobalNs === true) {
            className = proto.isClass ? proto.config.className : proto.className;

            nsArray = className.split('.');
            key     = nsArray.pop();
            ns      = Neo.ns(nsArray, true);
            ns[key] = cls;
        }
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults(target, defaults) {
        if (target && Neo.typeOf(defaults) === 'Object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!target.hasOwnProperty(key)) {
                    target[key] = value;
                }
            });
        }

        return target;
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} [deep=false] Set this to true in case you want to clone nested objects as well
     * @param {Boolean} [ignoreNeoInstances=false] returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone(obj, deep=false, ignoreNeoInstances=false) {
        let out;

        switch (Neo.typeOf(obj)) {
            case 'Array': {
                return !deep ? [...obj] : [...obj.map(val => Neo.clone(val, deep, ignoreNeoInstances))];
            }

            case 'Date': {
                return new Date(obj.valueOf());
            }

            case 'Map': {
                return new Map(obj); // shallow copy
            }

            case 'NeoInstance': {
                return ignoreNeoInstances ? obj : this.cloneNeoInstance(obj);
            }

            case 'Object': {
                out = {};

                Object.entries(obj).forEach(([key, value]) => {
                    out[key] = !deep ? value : Neo.clone(value, deep, ignoreNeoInstances);
                });

                return out;
            }

            case 'Set': {
                return new Set(obj); // shallow copy
            }

            default: {
                return obj; // return all other data types
            }
        }
    },

    /**
     * Creates a new instance using the originalConfig without the id
     * @memberOf module:Neo
     * @param {Neo.core.Base} instance
     * @returns {Neo.core.Base} the cloned instance
     */
    cloneNeoInstance(instance) {
        let config = {...instance.originalConfig};

        delete config._id;
        delete config.id;

        return Neo.create(instance.className, config);
    },

    /**
     * Use Neo.create() instead of "new" to create instances of all Neo classes
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create(Button, {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create({
     *     module : Button,
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create('Neo.button.Base' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create({
     *     className: 'Neo.button.Base',
     *     iconCls  : 'fa fa-home',
     *     text     : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object|Neo.core.Base} className
     * @param {Object} [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create(className, config) {
        let type = Neo.typeOf(className),
            cls, instance;

        if (type === 'NeoClass') {
            cls = className;
        } else {
            if (type === 'Object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null;
                }

                className = config.className || config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist');
            }

            cls = Neo.ns(className);
        }

        instance = new cls();

        instance.construct(config);
        instance.onConstructed();
        instance.onAfterConstructed();
        instance.init();

        return instance;
    },

    /**
     *
     */
    emptyFn() {},

    /**
     * Checks if there is a set method for a given property key inside the prototype chain
     * @memberOf module:Neo
     * @param {Neo.core.Base} proto The top level prototype of a class
     * @param {String} key the property key to test
     * @returns {Boolean}
     */
    hasPropertySetter(proto, key) {
        let descriptor;

        while (proto.__proto__) {
            descriptor = Object.getOwnPropertyDescriptor(proto, key);

            if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
                return true;
            }
            proto = proto.__proto__;
        }

        return false;
    },

    /**
     * Deep-merges a source object into a target object
     * @memberOf module:Neo
     * @param {Object} target
     * @param {Object} source
     * @returns {Object} target
     */
    merge(target, source) {
        if (Neo.typeOf(target) === 'Object') {
            for (let key in source) {
                if (Neo.typeOf(source[key]) === 'Object') {
                    if (!target[key]) {
                        target[key] = source[key];
                    } else {
                        Neo.merge(target[key], source[key]);
                    }
                } else {
                    target[key] = source[key];
                }
            }
        }

        return target;
    },

    /**
     * Maps a className string into a given or global namespace
     * @example
     * Neo.ns('Neo.button.Base', true);
     * // =>
     * // globalThis.Neo             = globalThis.Neo             || {};
     * // globalThis.Neo.button      = globalThis.Neo.button      || {};
     * // globalThis.Neo.button.Base = globalThis.Neo.button.Base || {};
     * // return globalThis.Neo.button.Base;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as globalThis
     * @returns {Object} reference to the toplevel namespace
     */
    ns(names, create, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {};
            }
            if (prev) {
                return prev[current];
            }
        }, scope || globalThis);
    },

    /**
     * Creates instances of Neo classes using their ntype instead of the class name
     * @example
     * Neo.ntype('button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.ntype({
     *     ntype  : 'button',
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object} ntype
     * @param {Object} [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;
            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype);
            }
            ntype = config.ntype;
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist');
        }
        return Neo.create(className, config);
    },

    /**
     * @param {*} item
     * @returns {String|null}
     */
    typeOf(item) {
        if (item === null || item === undefined) {
            return null;
        }

        switch (typeof item) {
            case 'function': {
                if (item.prototype?.constructor.isClass) {
                    return 'NeoClass';
                }

                break;
            }

            case 'object': {
                if (item.constructor.isClass && item instanceof Neo.core.Base) {
                    return 'NeoInstance';
                }
            }
        }

        return item.constructor.name;
    }
}, Neo);

/**
 * List of class properties which are not supposed to get mixed into other classes
 * @type {string[]}
 * @private
 */
const ignoreMixin = [
    '_name',
    'classConfigApplied',
    'className',
    'constructor',
    'isClass',
    'mixin',
    'ntype',
    'observable',
    'registerToGlobalNs'
];

/**
 * @param {Neo.core.Base} cls
 * @param {Array} mixins
 * @private
 */
function applyMixins(cls, mixins) {
    if (!Array.isArray(mixins)) {
        mixins = [mixins];
    }

    let i            = 0,
        len          = mixins.length,
        mixinClasses = {},
        mixin, mixinCls, mixinProto;

    for (;i < len;i++) {
        mixin = mixins[i];

        if (mixin.isClass) {
            mixinProto = mixin.prototype;
            mixinCls   = Neo.ns(mixinProto.className);
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className);
            }
            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto));
    }

    cls.prototype.mixins = mixinClasses; // todo: we should do a deep merge
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String} key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (Neo.hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead');
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {};
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get() {
                let me        = this,
                    beforeGet = `beforeGet${key[0].toUpperCase() + key.slice(1)}`,
                    hasNewKey = me[configSymbol].hasOwnProperty(key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value];
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf());
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                    delete me[configSymbol][key];
                }

                if (typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value);
                }

                return value;
            },

            set(value) {
                let me        = this,
                    _key      = '_' + key,
                    uKey      = key[0].toUpperCase() + key.slice(1),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                if (key !== 'items') {
                    value = Neo.clone(value, true, true);
                }

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return;
                    }

                    me[_key] = value;
                }

                if (!Neo.isEqual(value, oldValue)) {
                    me[afterSet]?.(value, oldValue);
                    me.afterSetConfig?.(key, value, oldValue);
                }
            }
        };
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key]);
}

/**
 * Checks if the class name exists inside the Neo or app namespace
 * @param {String} className
 * @returns {Boolean}
 * @private
 */
function exists(className) {
    try {
        return !!className.split('.').reduce((prev, current) => {
            return prev[current];
        }, globalThis);
    } catch(e) {
        return false;
    }
}

/**
 * @param {Neo.core.Base} proto
 * @param {Neo.core.Base} mixinProto
 * @returns {Function}
 * @private
 */
function mixinProperty(proto, mixinProto) {
    return function(key) {
        if (~ignoreMixin.indexOf(key)) {
            return;
        }
        if (proto[key]?._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return;
            }
            throw new Error(
                `${proto.className}: Multiple mixins defining same property (${mixinProto.className}, ${proto[key]._from}) => ${key}`
            );
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key;
        }
    };
}

/**
 * @param mixinCls
 * @returns {Function}
 * @private
 */
function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls;
    };
}

Neo.config = Neo.config || {};

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo);


/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Base.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.mjs */ "./node_modules/neo.mjs/src/collection/Filter.mjs");
/* harmony import */ var _util_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Logger.mjs */ "./node_modules/neo.mjs/src/util/Logger.mjs");
/* harmony import */ var _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sorter.mjs */ "./node_modules/neo.mjs/src/collection/Sorter.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");







const countMutations   = Symbol('countMutations'),
      isFiltered       = Symbol('isFiltered'),
      isSorted         = Symbol('isSorted'),
      silentUpdateMode = Symbol('silentUpdateMode'),
      toAddArray       = Symbol('toAddArray'),
      toRemoveArray    = Symbol('toRemoveArray'),
      updatingIndex    = Symbol('updatingIndex');

/**
 * @class Neo.collection.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Base'
         * @protected
         */
        className: 'Neo.collection.Base',
        /**
         * @member {String} ntype='collection'
         * @protected
         */
        ntype: 'collection',
        /**
         * When filtering the collection for the first time, allItems will become a new collection for the unfiltered
         * state, using this id as the sourceCollectionId
         * @member {Neo.collection.Base|null} allItems=null
         * @protected
         */
        allItems: null,
        /**
         * True to sort the collection items when adding / inserting new ones
         * @member {Boolean} autoSort=true
         */
        autoSort: true,
        /**
         * Use 'primitive' for default filters, use 'advanced' for filters using a filterBy method
         * which need to iterate over other collection items
         * @member {String} filterMode='primitive'
         */
        filterMode: 'primitive',
        /**
         * An Array containing Neo.util.Filter config objects or instances
         * @member {Array} filters_=[]
         */
        filters_: [],
        /**
         * @member {Object[]|null} items_=null
         */
        items_: null,
        /**
         * The unique(!) key property of each collection item
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * Adding new items without an id (keyProperty) will use a negative index, which will decrease by -1
         * for each new item
         * @member {Number} keyPropertyIndex=-1
         */
        keyPropertyIndex: -1,
        /**
         * A map containing the key & reference of each collection item for faster access
         * @member {Map} map_=null
         */
        map_: null,
        /**
         * An internal Array of the sort directions for faster access
         * @member {Array} sortDirections=null
         * @protected
         */
        sortDirections: null,
        /**
         * An internal Array of the sort properties for faster access
         * @member {Array} sortProperties=null
         * @protected
         */
        sortProperties: null,
        /**
         * An Array containing Neo.util.Sorter config objects or instances
         * @member {Array} sorters_=[]
         */
        sorters_: [],
        /**
         * The id of another collection instance to use as this data source
         * @member {String|null} sourceId_=null
         */
        sourceId_: null
    }}

    /**
     * @param config
     */
    construct(config) {
        super.construct(config);

        let me           = this,
            symbolConfig = {enumerable: false, writable: true};

        me.items = me.items || [];

        Object.defineProperties(me, {
            [countMutations]  : {...symbolConfig, value: false},
            [isFiltered]      : {...symbolConfig, value: false},
            [isSorted]        : {...symbolConfig, value: false},
            [silentUpdateMode]: {...symbolConfig, value: false},
            [toAddArray]      : {...symbolConfig, value: []},
            [toRemoveArray]   : {...symbolConfig, value: []},
            [updatingIndex]   : {...symbolConfig, value: 0}
        });

        if (me.autoSort && me._sorters.length > 0) {
            me.doSort();
        }
    }

    /**
     * Adds one or more items to the end of the collection and returns the new length of the collection.
     * @param {Array|Object} item The item(s) to add
     * @returns {Object[]} an array containing all added items
     */
    add(item) {
        return this.splice(0, null, item).addedItems;
    }

    /**
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetFilters(value, oldValue) {
        let me = this;

        value.forEach(filter => {
            if (filter.listenerApplied === false) {
                filter.on('change', me.onFilterChange, me);
                filter.listenerApplied = true;
            }
        });

        oldValue && me.filter();
    }

    /**
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetItems(value, oldValue) {
        if (value) {
            let me          = this,
                keyProperty = me.keyProperty,
                i           = 0,
                len         = value.length,
                item;

            for (; i < len; i++) {
                item = value[i];
                me.map.set(item[keyProperty], item);
            }
        }
    }

    /**
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetSorters(value, oldValue) {
        let me = this;

        me.applySorterConfigs();

        value.forEach(sorter => {
            if (sorter.listenerApplied === false) {
                sorter.on('change', me.onSorterChange, me);
                sorter.listenerApplied = true;
            }
        });

        oldValue && me.autoSort && me.doSort();
    }

    /**
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetSourceId(value, oldValue) {
        if (value) {
            let me     = this,
                source = Neo.get(value);

            me._items = [...source._items];
            me.map    = new Map(source.map); // creates a clone of the original map

            const listenersConfig = {
                mutate: me.onMutate,
                scope : me
            };

            source.on(listenersConfig);

            // console.log('afterSetSourceId', source);

            if (oldValue) {
                source = Neo.get(oldValue);
                source.un(listenersConfig);
            }
        }
    }

    /**
     * Saves the sort property & direction multiplier of each sorter inside 2 arrays for faster access when sorting
     * @protected
     */
    applySorterConfigs() {
        let me = this;

        me.sortDirections = [];
        me.sortProperties = [];

        me.sorters.forEach(sorter => {//console.log('forEach', sorter);
            me.sortDirections.push(sorter.directionMultiplier);
            me.sortProperties.push(sorter.property);
        });
    }

    /**
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetFilters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({
                            operator: key.operator,
                            property: key.property,
                            value   : key.value
                        });

                        hasMatch = true;
                        break;
                    } else if (
                        oldValue[i].operator === (key.operator || '===') &&
                        oldValue[i].property === key.property &&
                        oldValue[i].value    === key.value
                    ) {
                        hasMatch = true;
                        break;
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], key);
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--;
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     * @param {Map|null} value
     * @param {Map|null} oldValue
     * @protected
     */
    beforeSetMap(value, oldValue) {
        return !value ? new Map() : value;
    }

    /**
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetSorters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue?.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({
                            direction: key.direction,
                            property : key.property
                        });

                        hasMatch = true;
                        break;
                    } else if (oldValue[i].property === key.property && oldValue[i].direction === key.direction) {
                        hasMatch = true;
                        break;
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], key);
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--;
            }
        });

        oldValue?.forEach(key => {
            key.destroy();
        });

        return value;
    }

    /**
     * @param opts
     * @protected
     */
    cacheUpdate(opts) {
        console.log('cacheUpdate', opts, this[toAddArray]);
        return;

        let me          = this,
            keyProperty = me.keyProperty,
            index, toAddMap, toRemoveMap;

        if (!me[silentUpdateMode]) {
            toAddMap    = me[toAddArray]   .map(e => e[keyProperty]);
            toRemoveMap = me[toRemoveArray].map(e => e[keyProperty]);

            opts.addedItems.forEach(item => {
                if (index = toRemoveMap.indexOf(item[keyProperty]) > - 1) {
                    me[toRemoveArray].splice(index, 1);
                } else if (toAddMap.indexOf(item[keyProperty]) < 0) {
                    me[toAddArray].push(item);
                }
            });

            opts.removedItems.forEach(item => {
                if (index = toAddMap.indexOf(item[keyProperty]) > - 1) {
                    me[toAddArray].splice(index, 1);
                } else if (toRemoveMap.indexOf(item[keyProperty]) < 0) {
                    me[toRemoveArray].push(item);
                }
            });
        }
    }

    /**
     * Removes all items and clears the map
     */
    clear() {
        this.splice(0, this.getCount());
    }

    /**
     * Clears all current filters and optionally restores the original ones in case they existed.
     * @param {boolean} [restoreOriginalFilters=false]
     */
    clearFilters(restoreOriginalFilters) {
        this.filters = restoreOriginalFilters ? Neo.clone(this.originalConfig.filters, true, true) : null;
    }

    /**
     * Removes all items and clears the map, without firing a mutate event
     */
    clearSilent() {
        let me = this;

        me._items.splice(0, me.getCount());
        me.map.clear();
    }

    /**
     * Clears all current sorters and optionally restores the original ones in case they existed.
     * Without restoreInitialState as true this will not affect the current sorting of this collection.
     * @param {boolean} [restoreOriginalSorters=false]
     */
    clearSorters(restoreOriginalSorters) {
        this.sorters = restoreOriginalSorters ? Neo.clone(this.originalConfig.sorters, true, true) : null;
    }

    /**
     * @returns {Neo.collection.Base} The cloned collection
     */
    clone() {
        let me      = this,
            config  = Neo.clone(me.originalConfig, true),
            filters = me._filters || [],
            sorters = me._sorters || [];

        delete config.id;
        delete config.filters;
        delete config.items;
        delete config.sorters;

        if (me._items.length > 0) {
            config.items = [...me._items];
        }

        config.filters = [];
        config.sorters = [];

        // todo: filters & sorters should push their current state and not the original one

        filters.forEach(function(filter) {
            config.filters.push(filter.originalConfig);
        });

        sorters.forEach(function(sorter) {
            config.sorters.push(sorter.originalConfig);
        });

        return Neo.create(Base, config);
    }

    /**
     * Clears the map & items array before the super call
     */
    destroy() {
        let me = this;

        me._items.splice(0, me._items.length);
        me.map.clear();

        super.destroy();
    }

    /**
     *
     * @param {Object[]} items=this._items
     * @param {Boolean} silent=false
     * @protected
     */
    doSort(items=this._items, silent=false) {
        let me                = this,
            previousItems     = [...items],
            sorters           = me.sorters,
            sortDirections    = me.sortDirections,
            sortProperties    = me.sortProperties,
            countSorters      = sortProperties.length || 0,
            hasSortByMethod   = false,
            hasTransformValue = false,
            i, mappedItems, obj, sorter, sortProperty, sortValue;

        if (countSorters > 0) {
            sorters.forEach(key => {
                if (key.sortBy) {
                    hasSortByMethod = true;
                }

                if (key.useTransformValue) {
                    hasTransformValue = true;
                }
            });

            if (hasSortByMethod) {
                me._items.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sorter    = sorters[i];
                        sortValue = sorter[sorter.sortBy ? 'sortBy' : 'defaultSortBy'](a, b);

                        if (sortValue !== 0) {
                            return sortValue;
                        }
                    }

                    return 0;
                });
            } else {
                if (hasTransformValue) {
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
                    mappedItems = items.map((item, index) => {
                        obj = {index};
                        i   = 0;

                        for (; i < countSorters; i++) {
                            if (sorters[i].useTransformValue) {
                                obj[sortProperties[i]] = sorters[i].transformValue(item[sortProperties[i]]);
                            } else {
                                obj[sortProperties[i]] = item[sortProperties[i]];
                            }
                        }

                        return obj;
                    });
                } else {
                    mappedItems = items;
                }

                mappedItems.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sortProperty = sortProperties[i];

                        if (a[sortProperty] > b[sortProperty]) {
                            return 1 * sortDirections[i];
                        }

                        if (a[sortProperty] < b[sortProperty]) {
                            return -1 * sortDirections[i];
                        }
                    }

                    return 0;
                });

                if (hasTransformValue) {
                    me._items = mappedItems.map(el => {
                        return items[el.index];
                    });
                }
            }
        }

        me[isSorted] = countSorters > 0;

        if (!silent && me[updatingIndex] === 0) {
            me.fire('sort', {
                items: me._items,
                previousItems,
                scope: me
            });
        }
    }

    /**
     * Resumes the collection events.
     * If you started an update using the startSilentUpdateMode flag,
     * you must use the endSilentUpdateMode param for this call.
     * Using the endSilentUpdateMode param will not fire a mutation event.
     * @param {Boolean} [endSilentUpdateMode]
     * @see {@link Neo.collection.Base#startUpdate startUpdate}
     */
    endUpdate(endSilentUpdateMode) {
        const me = this;

        if (me[updatingIndex] > 0) {
            me[updatingIndex]--;
        }

        if (endSilentUpdateMode) {
            me[silentUpdateMode] = false;
        } else {
            me.fire('mutate', {
                addedItems  : me[toAddArray],
                removedItems: me[toRemoveArray]
            });

            me[toAddArray]   .splice(0, me[toAddArray]   .length);
            me[toRemoveArray].splice(0, me[toRemoveArray].length);
        }
    }

    /**
     * Needed for remote filtering
     * @returns {Object[]}
     */
    exportFilters() {
        let me      = this,
            filters = [],
            filter;

        me.filters?.forEach(key => {
            filter = key.export();

            filter && filters.push(filter);
        });

        return filters;
    }

    /**
     * Needed for remote sorting
     * @returns {Object[]}
     */
    exportSorters() {
        let me      = this,
            sorters = [],
            sorter;

        me.sorters?.forEach(key => {
            sorter = key.export();

            sorter && sorters.push(sorter);
        });

        return sorters;
    }

    /**
     * @protected
     */
    filter() {
        let me              = this,
            filters         = me._filters,
            countAllFilters = filters.length,
            countFilters    = 0,
            items           = me.allItems?._items || me._items,
            i               = 0,
            countItems      = items.length,
            filteredItems   = [],
            needsSorting    = false,
            oldItems        = [...me._items],
            config, isIncluded, item, j, tmpItems;

        for (; i < countAllFilters; i++) {
            if (!filters[i].disabled) {
                countFilters++;
            }
        }

        if (countFilters === 0 && me.allItems) {
            if (me.sorters.length > 0) {
                needsSorting = true;
            }

            me.clearSilent();

            me.items = [...me.allItems._items];
            me.map.set(...me.allItems.map);
        } else {
            if (!me.allItems) {
                config = {...me.originalConfig};

                delete config.filters;
                delete config.items;
                delete config.sorters;

                me.allItems = Neo.create(Base, {
                    ...Neo.clone(config, true, true),
                    keyProperty: me.keyProperty,
                    sourceId   : me.id
                });

                // console.log('child collection', me.allItems);
            }

            me.map.clear();

            if (me.filterMode === 'primitive') {
                // using for loops on purpose -> performance
                for (i = 0; i < countItems; i++) {
                    isIncluded = true;
                    item       = items[i];
                    j          = 0;

                    for (; j < countAllFilters; j++) {
                        if (filters[j].isFiltered(item, items, items)) {
                            isIncluded = false;
                            break;
                        }
                    }

                    if (isIncluded) {
                        filteredItems.push(item);
                        me.map.set(item[me.keyProperty], item);
                    }
                }

                me._items = filteredItems; // silent update, the map is already in place
            } else {
                filteredItems = [...items];

                for (j=0; j < countAllFilters; j++) {
                    tmpItems = [];

                    for (i = 0; i < countItems; i++) {
                        if (!filters[j].isFiltered(filteredItems[i], filteredItems, items)) {
                            tmpItems.push(filteredItems[i]);
                        }
                    }

                    filteredItems = [...tmpItems];
                    countItems    = filteredItems.length;
                }

                me.items = filteredItems; // update the map
            }
        }

        me[isFiltered] = countFilters !== 0;

        if (needsSorting) {
            me.doSort(me.items, true);
        }

        me.fire('filter', {
            isFiltered: me[isFiltered],
            items     : me.items,
            oldItems,
            scope     : me
        });
    }

    /**
     * Returns all items which match the property and value
     * @param {Object|String} property
     * @param {String|Number} [value] Optional, in case the first param is an object
     * @returns {Array} Returns an empty Array in case no items are found
     */
    find(property, value) {
        let me               = this,
            items            = [],
            isObjectProperty = Neo.isObject(property),
            matchArray, propertiesArray, propertiesLength;

        if (isObjectProperty) {
            propertiesArray  = Object.entries(property);
            propertiesLength = propertiesArray.length;
        }

        me.items.forEach(item => {
            if (isObjectProperty) {
                matchArray = [];

                propertiesArray.forEach(([key, value]) => {
                    if (item[key] === value) {
                        matchArray.push(true);
                    }
                });

                if (matchArray.length === propertiesLength) {
                    items.push(item);
                }
            }
            else if (item[property] === value) {
                items.push(item);
            }
        });

        return items;
    }

    /**
     * Returns all items in the collection for which the passed function returns true
     * @param {function} fn The function to run for each item inside the start-end range. Return true for a match.
     * @param {Object} fn.item The current collection item
     * @param {Object} [scope=this] The scope in which the passed function gets executed
     * @param {Number} [start=0] The start index
     * @param {Number} [end=this.getCount()] The end index (up to, last value excluded)
     * @returns {Array} Returns an empty Array in case no items are found
     */
    findBy(fn, scope=this, start, end) {
        let me    = this,
            items = [],
            i     = start || 0,
            len   = end   || me.getCount();

        for (; i < len; i++) {
            if (fn.call(scope, me.items[i])) {
                items.push(me.items[i]);
            }
        }

        return items;
    }

    /**
     * Returns the first item inside the collection
     * @returns {Object}
     */
    first() {
        return this._items[0];
    }

    /**
     * Returns the object associated to the key, or undefined if there is none.
     * @param key
     * @returns {Object|undefined}
     */
    get(key) {
        return this.map.get(key);
    }

    /**
     * Returns the item for a given index
     * @param {Number} index
     * @returns {Object|undefined}
     */
    getAt(index) {
        return this._items[index];
    }

    /**
     * Returns the length of the internal items array
     * @returns {Number}
     */
    getCount() {
        return this._items.length;
    }

    /**
     * @returns {Number}
     */
    getCountMutations() {
        return this[countMutations];
    }

    /**
     * Returns the first matching filter for the given property config
     * @param {String} property
     * @returns {Neo.collection.Filter|null}
     */
    getFilter(property) {
        let filters = this.filters || [],
            i       = 0,
            len     = filters.length;

        for (; i < len; i++) {
            if (filters[i].property === property) {
                return filters[i];
            }
        }

        return null;
    }

    /**
     * Returns the key for a given index
     * @param {Number} index
     * @returns {Number|String|undefined}
     */
    getKeyAt(index) {
        let item = this._items[index];
        return item?.[this.keyProperty];
    }

    /**
     * Returns a shallow copy of a portion of the items array
     * @param {Number} [start] Zero-based index at which to begin extraction.
     * @param {Number} [end] Zero-based index before which to end extraction (extracts up to but not including end).
     * @returns {Array}
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    getRange(start, end) {
        return this._items.slice(start, end);
    }

    /**
     * Returns the Source Collection in case the sourceCollectionId config was set
     * @returns {Neo.collection.Base|undefined}
     */
    getSource() {
        return this.sourceId && Neo.get(this.sourceId);
    }

    /**
     * Returns a boolean asserting whether a value has been associated to the key in the Collection or not
     * @param {Number|String} key
     * @returns {Boolean}
     */
    has(key) {
        return this.map.has(key);
    }

    /**
     * Returns a boolean asserting whether an item exists in the Collection or not
     * @param {Object} item
     * @returns {Boolean}
     */
    hasItem(item) {
        return this.map.has(item[this.keyProperty]);
    }

    /**
     * Returns the index for a given key or item
     * @param {Number|String|Object} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOf(key) {
        return this._items.indexOf(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(key) ? key : this.map.get(key));
    }

    /**
     * Returns the index for a given item
     * @param {Object} item
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfItem(item) {
        return this._items.indexOf(item);
    }

    /**
     * Returns the index for a given key
     * @param {Number|String} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfKey(key) {
        return this._items.indexOf(this.map.get(key));
    }

    /**
     * Inserts an item or an array of items at the specified index
     * @param {Number} index
     * @param {Array|Object} item
     * @returns {Object[]} an array containing all added items
     */
    insert(index, item) {
        return this.splice(index, 0, item).addedItems;
    }

    /**
     * @returns {Boolean} true in case the collection is filtered
     */
    isFiltered() {
        return this[isFiltered];
    }

    /**
     * @param {Object} item
     * @returns {boolean}
     * @protected
     */
    isFilteredItem(item) {
        let me         = this,
            filters    = me._filters,
            i          = 0,
            len        = filters.length,
            isFiltered = false;

        for (; i < len; i++) {
            if (filters[i].isFiltered(item)) {
                isFiltered = true;
                break;
            }
        }

        return isFiltered;
    }

    /**
     * @returns {Boolean} true in case the collection is sorted
     */
    isSorted() {
        return this[isSorted];
    }

    /**
     * Returns the last item inside the collection
     * @returns {Object}
     */
    last() {
        return this._items[this.getCount() -1];
    }

    /**
     * @param {Object} opts
     * @protected
     */
    onFilterChange(opts) {
        this.filter();
    }

    /**
     * @param {Object} opts
     * @protected
     */
    onMutate(opts) {
        let me = this;

        if (opts.preventBubbleUp) {
            me.preventBubbleUp = true;
        }

        me.splice(null, opts.removedItems, opts.addedItems);
    }

    /**
     * @param {Object} opts
     * @protected
     */
    onSorterChange(opts) {
        this.applySorterConfigs();
        this.doSort();
    }

    /**
     * Removes the last element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    pop() {
        let mutation = this.splice(this.getCount() -1, 1);
        return mutation.removedItems[0];
    }

    /**
     * Adds one or more items to the end of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    push(item) {
        return this.add(item);
    }

    /**
     * Removes a given key, item or Array containing keys|items
     * @param {Number|String|Object|Array} key
     * @returns {Number} the collection count
     */
    remove(key) {
        this.splice(0, Array.isArray(key) ? key : [key]);
        return this.getCount();
    }

    /**
     * Removes the item at the given index
     * @param {Number} index
     * @returns {Number} the collection count
     */
    removeAt(index) {
        this.splice(index, 1);
        return this.getCount();
    }

    /**
     * Reverses the items array in place.
     * Intended for collections without sorters.
     * @returns {Array} items
     */
    reverse() {
        return this._items.reverse();
    }

    /**
     * Removes the first element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    shift() {
        let mutation = this.splice(0, 1);
        return mutation.addedItems[0];
    }

    /**
     * @param {function} callback Function to test for each item, taking three parameters:
     * @param {Object}   callback.item The current collection item being processed
     * @param {Number}  [callback.index] The index of the current item being processed
     * @param {Array}   [callback.items] The items array of the collection
     *
     * @param {Object} [scope] Value to use as "this" when executing the callback
     * @returns {boolean} true if the callback function returns a truthy value for any collection item, otherwise false
     */
    some(...args) {
        return this._items.some(...args);
    }

    /**
     * Removes items from and/or adds items to this collection
     * If the toRemoveArray is used, then the index is not used for removing, the entries are found by key and removed from where they are.
     * If index is not passed, toAddArray is appended to the Collection.
     * @param {Number|null} index
     * @param {Number|Object[]} [removeCountOrToRemoveArray]
     * @param {Object|Object[]} [toAddArray]
     * @returns {Object} An object containing the addedItems & removedItems arrays
     */
    splice(index, removeCountOrToRemoveArray, toAddArray) {
        let me                 = this,
            source             = me.getSource(),
            addedItems         = [],
            items              = me._items,
            keyProperty        = me.keyProperty,
            map                = me.map,
            removedItems       = [],
            removeCountAtIndex = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            toRemoveArray      = Array.isArray(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            i, item, key, len, toAddMap;

        if (!_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(index) && removeCountAtIndex) {
            _util_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].error(me.id + ': If index is not passed, removeCountAtIndex cannot be used');
        }

        toAddArray = toAddArray && !Array.isArray(toAddArray) ? [toAddArray] : toAddArray;

        if (toRemoveArray && (len = toRemoveArray.length) > 0) {
            if (toAddArray && toAddArray.length > 0) {
                toAddMap = toAddArray.map(e => e[keyProperty]);
            }

            for (i=0; i < len; i++) {
                item = toRemoveArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (map.has(key)) {
                    if (!toAddMap || (toAddMap && toAddMap.indexOf(key) < 0)) {
                        removedItems.push(items.splice(me.indexOfKey(key), 1)[0]);
                        map.delete(key);
                    }
                }
            }
        } else if (removeCountAtIndex && removeCountAtIndex > 0) {
            removedItems.push(...items.splice(index, removeCountAtIndex));
            removedItems.forEach(e => {
                map.delete(e[keyProperty]);
            });
        }

        if (toAddArray && (len = toAddArray.length) > 0) {
            for (i=0; i < len; i++) {
                item = toAddArray[i];
                key  = item[keyProperty];

                if (!key) {
                    item[keyProperty] = key = me.keyPropertyIndex;
                    me.keyPropertyIndex--;
                }

                if (!map.has(key) && !me.isFilteredItem(item)) {
                    addedItems.push(item);
                    map.set(key, item);
                }
            }

            if (addedItems.length > 0) {
                items.splice(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(index) ? index : items.length, 0, ...addedItems);

                if (me.autoSort && me._sorters.length > 0) {
                    me.doSort();
                }
            }
        }

        if (source) {
            if (!source.getSource()) {
                source.preventBubbleUp = true;
            }

            if (!me.preventBubbleUp) {
                // console.log('source splice', source.id, 'added:', ...toAddArray, 'removed:', ...removedItems);
                me.startUpdate(true);
                source.splice(null, toRemoveArray || removedItems, toAddArray);
                me.endUpdate(true);
            }

            delete source.preventBubbleUp;
        }

        if (addedItems.length > 0 || removedItems.length > 0) {
            me[countMutations]++;
        }

        if(me[updatingIndex] === 0) {
            me.fire('mutate', {
                addedItems     : toAddArray,
                preventBubbleUp: me.preventBubbleUp,
                removedItems   : toRemoveArray || removedItems
            });

        } else if (!me[silentUpdateMode]) {
            me.cacheUpdate({
                addedItems,
                removedItems
            });
        }

        if (me[updatingIndex] === 0) {
            delete me.preventBubbleUp;
        }

        return {
            addedItems,
            removedItems
        };
    }

    /**
     * Prevents the collection from firing events until endUpdate gets called.
     * If you start an update using the startSilentUpdateMode param,
     * the mutation event will not fire after using endUpdate()
     * (you must use the endSilentUpdateMode param for the endUpdate call in case you used
     * startSilentUpdateMode here)
     * @param {Boolean} [startSilentUpdateMode]
     * @see {@link Neo.collection.Base#endUpdate endUpdate}
     */
    startUpdate(startSilentUpdateMode) {
        if (startSilentUpdateMode) {
            this[silentUpdateMode] = true;
        }

        this[updatingIndex]++;
    }

    /**
     * Adds one or more elements to the beginning of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    unshift(item) {
        this.splice(0, 0, item);
        return this.getCount();
    }
}

/**
 * The mutate event fires after every splice call (invoked by all methods which change the content of the items array).
 * @event mutate
 * @param {Object[]} addedItems
 * @param {Boolean} preventBubbleUp private
 * @param {Object[]} removedItems
 * @returns {Object}
 */

Neo.applyClassConfig(Base);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);


/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Filter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Filter.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Filter
 * @extends Neo.core.Base
 */
class Filter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true,
        /**
         * Valid values for the operator config:<br>
         * ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
         * @member {String[]} operators
         * @protected
         * @static
         */
        operators: ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Filter'
         * @protected
         */
        className: 'Neo.collection.Filter',
        /**
         * @member {String} ntype='filter'
         * @protected
         */
        ntype: 'filter',
        /**
         * Setting disabled to true will exclude this filter from the collection filtering logic
         * @member {Boolean} disabled_=false
         */
        disabled_: false,
        /**
         * Provide a custom filtering function which has a higher priority than property, operator & value
         * @member {Function|null} filterBy_=null
         */
        filterBy_: null,
        /**
         * True means not filtering out items in case the value is '', null, [] or {}
         * @member {Boolean} includeEmptyValues=true
         */
        includeEmptyValues: true,
        /**
         * Set this flag to true before starting bulk updates (e.g. changing property & value)
         * to prevent multiple change events
         * @member {Boolean} isUpdating_=false
         */
        isUpdating_: false,
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {Boolean} listenerApplied=false
         * @protected
         */
        listenerApplied: false,
        /**
         * The operator to filter by (use the combination of property, operator & value)
         * Valid values:
         *
         * == (not recommended)
         * ===
         * != (not recommended)
         * !==
         * <
         * >=
         * >
         * >=
         * like (collectionValue.toLowerCase().indexOf(filterValue.toLowerCase()) > -1)
         * included (expects value to be an array)
         * excluded (expects value to be an array)
         * @member {String} operator='==='
         */
        operator_: '===',
        /**
         * The property to filter by (use the combination of property, operator & value)
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * The scope to use for the filterBy method, in case it is provided. Defaults to this instance.
         * @member {Object|null} scope=null
         */
        scope: null,
        /**
         * The value to filter by (use the combination of property, operator & value)
         * @member {String} value_=null
         */
        value_: null
    }}

    afterSetDisabled(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetFilterBy(value, oldValue) {
        // todo
    }

    afterSetIsUpdating(value, oldValue) {
        value === false && this.fireChangeEvent(value, oldValue);
    }

    afterSetOperator(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetProperty(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetValue(...args) {
        this.fireChangeEvent(...args);
    }

    beforeSetFilterBy(value, oldValue) {
        if (value && typeof value !== 'function') {
            Neo.logError('filterBy has to be a function', this);
            return oldValue;
        }

        return value;
    }

    /**
     * Triggered before the operator config gets changed.
     * @param {String|null} value
     * @param {String} oldValue
     * @returns {String}
     * @protected
     */
    beforeSetOperator(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'operator');
    }

    /**
     * Needed for remote filtering
     * @returns {Object|null}
     */
    export() {
        let me       = this,
            operator = me.operator,
            property = me.property,
            value    = me.value;

        if (!me.filterBy) {
            return {operator, property, value};
        }

        return null;
    }

    /**
     * @param value
     * @param oldValue
     */
    fireChangeEvent(value, oldValue) {
        let me = this;

        if (oldValue !== undefined && me.isUpdating !== true) {
            me.fire('change', {
                operator: me.operator,
                property: me.property,
                value   : me.value
            });
        }
    }

    /**
     * Checks if a collection item matches this filter
     * @param {Object} item The current collection item
     * @param {Array} filteredItems If the collection filterMode is not primitive contains the items which passed
     * the previous filters, otherwise all collection items
     * @param {Array} allItems all collection items
     * @returns {Boolean}
     */
    isFiltered(item, filteredItems, allItems) {
        let me = this,
            filterValue, recordValue;

        if (me._disabled) {
            return false;
        }

        if (me._filterBy) {
            return me.filterBy.call(me.scope || me, {
                allItems,
                filteredItems,
                item,
                value: me._value
            });
        }

        if (me.includeEmptyValues && (me._value === null || Neo.isEmpty(me._value))) {
            return false;
        }

        filterValue = me._value;
        recordValue = item[me._property];

        if (filterValue instanceof Date && recordValue instanceof Date) {
            filterValue = filterValue.valueOf();
            recordValue = recordValue.valueOf();
        }

        return !Filter[me._operator](recordValue, filterValue);
    }

    static ['=='] (a, b) {return a == b;}
    static ['==='](a, b) {return a === b;}
    static ['!='] (a, b) {return a != b;}
    static ['!=='](a, b) {return a !== b;}
    static ['<']  (a, b) {return a < b;}
    static ['<='] (a, b) {return a <= b;}
    static ['>']  (a, b) {return a > b;}
    static ['>='] (a, b) {return a >= b;}

    static ['excluded'](a, b) {
        return b.indexOf(a) < 0;
    }

    static ['included'](a, b) {
        return b.indexOf(a) > -1;
    }

    static ['isDefined'](a, b) {
        return a !== undefined;
    }

    static ['isUndefined'](a, b) {
        return a === undefined;
    }

    static ['like'](a, b) {
        return a?.toLowerCase().includes(b?.toLowerCase()) || false;
    }
}

Neo.applyClassConfig(Filter);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);


/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Sorter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Sorter.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Sorter
 * @extends Neo.core.Base
 */
class Sorter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Sorter'
         * @protected
         */
        className: 'Neo.collection.Sorter',
        /**
         * @member {String} ntype='sorter'
         * @protected
         */
        ntype: 'sorter',
        /**
         * Internal config which maps the direction ASC to 1, -1 otherwise
         * @member {Number} directionMultiplier=1
         * @protected
         */
        directionMultiplier: 1,
        /**
         * The sort direction when using a property.
         * @member {String} direction_='ASC'
         */
        direction_: 'ASC',
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {boolean} listenerApplied=false
         * @protected
         */
        listenerApplied: false,
        /**
         * The property to sort by.
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * Provide a custom sorting function, has a higher priority than property & direction
         * @member {Function|null} sortBy=null
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
         */
        sortBy: null,
        /**
         * True to use the transformValue method for each item (the method can get overridden)
         * @member {Boolean} useTransformValue=true
         * @protected
         */
        useTransformValue: true
    }}

    /**
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetDirection(value, oldValue) {
        let me = this;

        me.directionMultiplier = value === 'ASC' ? 1 : -1;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetProperty(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     * Default sorter function which gets used by collections in case at least one sorter has a real sortBy method
     * @param a
     * @param b
     */
    defaultSortBy(a, b) {
        let me = this;

        a = a[me.property];
        b = b[me.property];

        if (me.useTransformValue) {
            a = me.transformValue(a);
            b = me.transformValue(b);
        }

        if (a > b) {
            return 1 * me.directionMultiplier;
        }

        if (a < b) {
            return -1 * me.directionMultiplier;
        }

        return 0;
    }

    /**
     * Needed for remote sorting
     * @returns {Object|null}
     */
    export() {
        let me        = this,
            direction = me.direction,
            property  = me.property;

        if (!me.sortBy && direction && property) {
            return {direction, property};
        }

        return null;
    }

    /**
     * @param {*} value
     * @returns {*} value
     */
    transformValue(value) {
        if (typeof value === 'string') {
            value = value.toLowerCase();
        }

        return value;
    }
}

Neo.applyClassConfig(Sorter);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sorter);


/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Application.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Application.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/controller/Base.mjs");
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");



/**
 * @class Neo.controller.Application
 * @extends Neo.controller.Base
 */
class Application extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Application'
         * @protected
         */
        className: 'Neo.controller.Application',
        /**
         * @member {String|null} appThemeFolder=null
         */
        appThemeFolder: null,
        /**
         * @member {Neo.component.Base} mainView_=null
         */
        mainView_: null,
        /**
         * @member {Boolean} mounted=false
         * @protected
         */
        mounted: false,
        /**
         * @member {String} name='MyApp'
         */
        name: 'MyApp',
        /**
         * @member {String} parentId='document.body'
         */
        parentId: 'document.body',
        /**
         * @member {Boolean} rendered=false
         * @protected
         */
        rendered: false,
        /**
         * @member {Boolean} rendering=false
         * @protected
         */
        rendering: false
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        // to guarantee that the main view can access Neo.apps at any point,
        // we need to trigger its assignment at the end of the ctor.
        let mainView = config.mainView;
        delete config.mainView;

        super.construct(config);

        let me = this;

        Neo.apps = Neo.apps || {};

        Neo.apps[me.name] = me;

        Neo.currentWorker.registerApp(me.name);

        if (mainView) {
            me.mainView = mainView;
        }
    }

    /**
     * Triggered after the mainView config got changed
     * @param {Neo.component.Base} value
     * @param {Neo.component.Base|null} oldValue
     * @protected
     */
    afterSetMainView(value, oldValue) {
        // short delay to ensure changes from onHashChange() got applied
        value && setTimeout(() => {
            value.render(true);
        }, Neo.config.hash ? 200 : 10);
    }

    /**
     * Triggered before the mainView config gets changed.
     * @param {Object} value
     * @param {Object} oldValue
     * @returns {Neo.component.Base|null}
     * @protected
     */
    beforeSetMainView(value, oldValue) {
        if (value) {
            return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].beforeSetInstance(value, null, {
                appName : this.name,
                parentId: this.parentId
            });
        }

        return null;
    }

    /**
     * Unregister the app from the CSS map
     * @param args
     */
    destroy(...args) {
        Neo.currentWorker.removeAppFromThemeMap(this.name);
        super.destroy(...args);
    }
}

Neo.applyClassConfig(Application);

// convenience shortcut
Neo.app = config => Neo.create({
    module: Application,
    ...config
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);


/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Base.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./node_modules/neo.mjs/src/util/HashHistory.mjs");



/**
 * @class Neo.controller.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Base'
         * @protected
         */
        className: 'Neo.controller.Base',
        /**
         * @member {String} ntype='controller'
         * @protected
         */
        ntype: 'controller'
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('change', this.onHashChange, this);
    }

    /**
     * @param args
     */
    destroy(...args) {
        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].un('change', this.onHashChange, this);

        super.destroy(...args);
    }

    /**
     * Placeholder method which gets triggered when the hash inside the browser url changes
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {

    }

    /**
     *
     */
    onConstructed() {
        let currentHash = _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].first();

        currentHash && this.onHashChange(currentHash, null);

        super.onConstructed();
    }
}

Neo.applyClassConfig(Base);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


const configSymbol       = Symbol.for('configSymbol'),
      forceAssignConfigs = Symbol('forceAssignConfigs'),
      isInstance         = Symbol('isInstance');

/**
 * The base class for (almost) all classes inside the Neo namespace
 * Exceptions are e.g. core.IdGenerator, vdom.VNode
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @static
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    /**
     * The return value will get applied to each class instance
     * @returns {Object} config
     * @tutorial 02_ClassSystem
     */
    static getConfig() {return {
        /**
         * The class name which will get mapped into the Neo or app namespace
         * @member {String} className='Neo.core.Base'
         * @protected
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @protected
         */
        ntype: 'base',
        /**
         * The unique component id
         * @member {String|null} id_=null
         */
        id_: null,
        /**
         * Neo.create() will change this flag to true after the onConstructed() chain is done.
         * @member {Boolean} isConstructed=false
         * @protected
         */
        isConstructed: false,
        /**
         * Add mixins as an array of classNames, imported modules or a mixed version
         * @member {String[]|Neo.core.Base[]|null} mixins=null
         */
        mixins: null,
        /**
         * You can create a new instance by passing an imported class (JS module default export)
         * @member {Class} module=null
         * @protected
         */
        module: null
    }}

    /**
     * Consumes the static getConfig() return object.
     * Applies the observable mixin if needed, grants remote access if needed.
     * @param {Object} config={}
     */
    construct(config={}) {
        let me = this;

        Object.defineProperties(me, {
            [configSymbol]: {
                configurable: true,
                enumerable  : false,
                value       : {},
                writable    : true
            },
            [isInstance]: {
                enumerable: false,
                value     : true
            }
        });

        me.createId(config.id || me.id);
        delete config.id;

        if (me.constructor.config) {
            delete me.constructor.config.id;
        }

        me.getStaticConfig('observable') && me.initObservable(config);

        // assign class field values prior to configs
        config = me.setFields(config);

        me.initConfig(config);

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        me.remote && setTimeout(me.initRemote.bind(me), 1);
    }

    /**
     * Triggered after the id config got changed.
     * You can dynamically change instance ids if needed. They need to stay unique at any given point.
     * Use case: e.g. component based lists, where you want to re-use item instances.
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetId(value, oldValue) {
        let me         = this,
            hasManager = Base.instanceManagerAvailable === true;

        if (oldValue) {
            if (hasManager) {
                Neo.manager.Instance.unregister(oldValue);
            } else {
                delete Neo.idMap[oldValue];
            }
        }

        if (hasManager) {
            Neo.manager.Instance.register(me);
        } else {
            Neo.idMap = Neo.idMap || {};
            Neo.idMap[me.id] = me;
        }
    }

    /**
     * Convenience method for beforeSet functions which test if a given value is inside a static array
     * @param {String|Number} value
     * @param {String|Number} oldValue
     * @param {String} name config name
     * @param {Array|String} [staticName=name + 's'] name of the static config array
     * @returns {String|Number} value or oldValue
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        let values = Array.isArray(staticName) ? staticName : this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            console.error(`Supported values for ${name} are: ${values.join(', ')}`, this);
            return oldValue;
        }

        return value;
    }

    /**
     * Uses the IdGenerator to create an id if a static one is not explicitly set.
     * Registers the instance to manager.Instance if this one is already created,
     * otherwise stores it inside a tmp map.
     * @param {String} id
     */
    createId(id) {
        this.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(this.getIdKey());
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me);
        } else if (Neo.idMap) {
            delete Neo.idMap[me.id];
        }

        Object.keys(me).forEach(key => {
            if (Object.getOwnPropertyDescriptor(me, key).writable) {
                delete me[key];
            }
        });
    }

    /**
     * Used inside createId() as the default value passed to the IdGenerator.
     * Override this method as needed.
     * @returns {String}
     */
    getIdKey() {
        return this.ntype;
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} [key] The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        let cfg = this.constructor.staticConfig;
        return (key ? cfg[key] : cfg);
    }

    /**
     * Gets triggered after onConstructed() is done
     * @see {@link Neo.core.Base#onConstructed onConstructed}
     * @tutorial 02_ClassSystem
     */
    init() {}

    /**
     * Applies all class configs to this instance
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me            = this,
            remote        = me.remote,
            className     = me.className,
            currentWorker = Neo.currentWorker,
            listenerId;

        if (!me.singleton) {
            throw new Error('Remote method access is only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            if (Neo.workerId !== 'main' && currentWorker.isSharedWorker && !currentWorker.isConnected) {
                listenerId = currentWorker.on('connected', () => {
                    currentWorker.un('connected', listenerId);
                    Base.sendRemotes(className, remote);
                });
            } else {
                Base.sendRemotes(className, remote);
            }
        }
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className);
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true);
        }

        return {...ctor.config, ...config};
    }

    /**
     *
     */
    onAfterConstructed() {
        let me = this;

        me.isConstructed = true;

        // We can only fire the event in case the Observable mixin is included.
        me.getStaticConfig('observable') && me.fire('constructed', me);
    }

    /**
     * Gets triggered after all constructors are done
     * @tutorial 02_ClassSystem
     */
    onConstructed() {}

    /**
     * Helper method to replace string based values containing "@config:" with the matching config value
     * of this instance.
     * @param {Object|Object[]} items
     */
    parseItemConfigs(items) {
        let me = this;

        if (items) {
            if (!Array.isArray(items)) {
                items = [items];
            }

            items.forEach(item => {
                Object.entries(item).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        me.parseItemConfigs(value);
                    } else if (typeof value === 'string' && value.startsWith('@config:')) {
                        value = value.substr(8).trim();

                        if (!me[value] && !me.hasOwnProperty(value)) {
                            console.error('The used @config does not exist:', value, me);
                        } else {
                            // The config might not be processed yet, especially for configs
                            // not ending with an underscore, so we need to check the configSymbol first.
                            item[key] = me[configSymbol][value] || me[value];
                        }
                    }
                });
            });
        }
    }

    /**
     * When using set(), configs without a trailing underscore can already be assigned,
     * so the hasOwnProperty() check will return true
     * @param {Boolean} [forceAssign=false]
     */
    processConfigs(forceAssign=false) {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        me[forceAssignConfigs] = forceAssign;

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (forceAssign || !me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs(forceAssign);
        }
    }

    /**
     * @param {String} className
     * @param {Object} remote
     */
    static sendRemotes(className, remote) {
        let origin;

        Object.entries(remote).forEach(([worker, methods]) => {
            if (Neo.workerId !== worker) {
                origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                origin.sendMessage(worker, {
                    action: 'registerRemote',
                    className,
                    methods
                });
            }
        });
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     */
    set(values={}) {
        let me = this;

        values = me.setFields(values);

        // If the initial config processing is still running,
        // finish this one first before dropping new values into the configSymbol.
        // see: https://github.com/neomjs/neo/issues/2201
        if (me[forceAssignConfigs] !== true && Object.keys(me[configSymbol]).length > 0) {
            me.processConfigs();
        }

        Object.assign(me[configSymbol], values);

        me.processConfigs(true);
    }

    /**
     * We want to assign class fields first and remove them from the config object,
     * so that afterSet(), beforeGet() and beforeSet() methods can get the new values right away
     * @param {Object} config
     * @returns {Object}
     */
    setFields(config) {
        let me          = this,
            configNames = me.constructor.config;

        Object.entries(config).forEach(([key, value]) => {
            if (!configNames.hasOwnProperty(key) && !Neo.hasPropertySetter(me, key)) {
                me[key] = value;
                delete config[key];
            }
        });

        return config;
    }

    /**
     * Sets the value of a static config by a given key
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @param {*} value
     * @returns {Boolean} true in case the config exists and got changed
     */
    setStaticConfig(key, value) {
        let staticConfig = this.constructor.staticConfig;

        if (staticConfig.hasOwnProperty(key)) {
            staticConfig[key] = value;
            return true;
        }

        return false;
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.button.Base').toString() => "[object Neo.button.Base (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return `${this.className} (id: ${this.id})`;
    }

    /**
     * <p>Enhancing the instanceof method. Without this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => true`
     * <p>With this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => false`<br>
     * `Neo.create(Neo.collection.Base) instanceof Neo.core.Base => true`
     * @returns {Boolean}
     */
    static [Symbol.hasInstance](instance) {
        if (!instance) {
            return false;
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false;
    }
}

Neo.applyClassConfig(Base);

Base.instanceManagerAvailable = false;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Compare.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Compare.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Compare
 * @extends Neo.core.Base
 */
class Compare extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Compare'
         * @protected
         */
        className: 'Neo.core.Compare'
    }}

    /**
     * @param {*} item1
     * @param {*} item2
     * @returns {Boolean}
     */
    static isEqual(item1, item2) {
        if (item1 === item2) {
            return true;
        }

        let type1 = Neo.typeOf(item1),
            type2 = Neo.typeOf(item2),
            key;

        if (type1 !== type2) {
            return false;
        }

        switch (type1) {
            case 'Array': {
                if (item1.length !== item2.length) {
                    return false;
                }

                for (const [i, v] of item1.entries()) {
                    if (!Compare.isEqual(v, item2[i])) {
                        return false;
                    }
                }

                break;
            }

            case 'Date': {
                return item1.valueOf() === item2.valueOf();
            }

            case 'Function': {
                if (item1.name !== item2.name) {
                    return false;
                }

                return item1.toString() === item2.toString();
            }

            case 'Map': {
                if (item1.size !== item2.size) {
                    return false;
                }

                let val2;

                for (const [key, val] of item1) {
                    val2 = item2.get(key);

                    if (val2 !== val || val2 === undefined && !item2.has(key)) {
                        return false;
                    }
                }

                break;
            }

            case 'NeoInstance': {
                if (item1.id !== item2.id) {
                    return false;
                }

                break;
            }

            case 'Object': {
                if (Object.keys(item1).length !== Object.keys(item2).length) {
                    return false;
                }

                for (key in item1) {
                    if (!Compare.isEqual(item1[key], item2[key])) {
                        return false;
                    }
                }

                break;
            }

            case 'RegExp': {
                if (item1.toString() !== item2.toString()) {
                    return false;
                }

                break;
            }

            case 'Set': {
                if (item1.size !== item2.size) {
                    return false;
                }

                for (key of item1) {
                    if (!item2.has(key)) {
                        return false;
                    }
                }

                break;
            }

            default: {
                return item1 === item2;
            }
        }

        return true;
    }
}

Neo.applyClassConfig(Compare);

// alias
Neo.isEqual = Compare.isEqual;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compare);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/IdGenerator.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/IdGenerator.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This class gets used by core.Base, so it can not extend it.
 * It could get simplified to just being an object (needs to manually get put into the Neo namespace in this case).
 * @class Neo.core.IdGenerator
 * @singleton
 */
class IdGenerator {
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @protected
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @protected
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param config
     */
    construct(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    /**
     * @param name
     * @returns {string}
     */
    getId(name) {
        name = name || 'neo';

        let me      = this,
            counter = me.idCounter,
            count   = counter[name] || 0;

        counter[name] = ++count;

        return me.base + (name === 'neo' ? '' : name + '-') + count;
    }

    init() {}

    onAfterConstructed() {}

    onConstructed() {}
}

Neo.applyClassConfig(IdGenerator);

let instance = Neo.create(IdGenerator);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Observable.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Observable.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Observable'
         * @protected
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @protected
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String|null} eventId null in case an object gets passed as the name (multiple ids)
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me         = this,
            nameObject = typeof name === 'object',
            listener, existing, eventConfig;

        if (nameObject) {
            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                me.addListener(key, value, scope);
            });
        } else if (typeof opts === 'object') {
            scope    = scope || opts.scope;
            listener = opts.fn;
            order    = order || opts.order;
            eventId  = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        if (!nameObject) {
            eventConfig = {
                fn: listener,
                scope,
                data,
                id: eventId || Neo.getId('event')
            };

            if (existing = me.listeners?.[name]) {
                existing.forEach(cfg => {
                    if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                        console.error('Duplicate event handler attached:', name, me);
                    }
                });

                if (typeof order === 'number') {
                    existing.splice(order, 0, eventConfig);
                } else if (order === 'before') {
                    existing.unshift(eventConfig);
                } else {
                    existing.push(eventConfig);
                }
            } else {
                me.listeners[name] = [eventConfig];
            }

            return eventConfig.id;
        }

        return null;
    }

    /**
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            eventConfig, events, i, len;

        if (listeners && listeners[name]) {
            events = [...listeners[name]];
            len    = events.length;

            for (i = 0; i < len; i++) {
                eventConfig = events[i];

                if (!Neo.isFunction(eventConfig.fn)) {
                    eventConfig.fn = eventConfig.scope[eventConfig.fn];
                }

                // remove the listener, in case the scope no longer exists
                if (eventConfig.scope && !eventConfig.scope.id) {
                    listeners[name].splice(i, 1);
                } else {
                    eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
                }
            }
        }
    }

    /**
     * @param {Object} config
     */
    initObservable(config) {
        let me = this,
            proto = me.__proto__,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners;
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            if (Neo.isObject(listeners)) {
                listeners = {...listeners};
            }

            me.addListener(listeners);
        }

        while (proto?.constructor.isClass) {
            if (proto.constructor.staticConfig.observable && !proto.constructor.listeners) {
                Object.assign(proto.constructor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                });
            }
            proto = proto.__proto__;
        }
    }

    /**
     * Alias for addListener
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    on(...args) {
        return this.addListener(...args);
    }

    /**
     * @param {Object|String} name
     * @param {String} [eventId]
     */
    removeListener(name, eventId) {
        let me = this,
            i, len, listener, listeners, match, scope;

        if (Neo.isObject(name)) {
            if (name.scope) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                listeners = me.listeners[key] || [];
                i         = 0;
                len       = listeners.length;

                for (; i < len; i++) {
                    listener = listeners[i];

                    if (
                        listener.fn.name === (Neo.isString(value) ? value : value.name) &&
                        listener.scope   === scope
                    ) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            });
        } else if (Neo.isString(eventId)) {
            listeners = me.listeners[name];
            match     = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx;
                }
            });

            if (match !== false) {
                listeners.splice(match, 1);
            }
        }
    }

    // removeAllListeners: function(name) {

    // },

    // suspendListeners: function(queue) {

    // },

    // resumeListeners: function() {

    // }

    /**
     * Alias for removeListener
     * @param {Object|String} name
     * @param {String} [eventId]
     */
    un(...args) {
        this.removeListener(...args);
    }
}

Neo.applyClassConfig(Observable);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observable);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Util.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Util.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Util
 * @extends Neo.core.Base
 */
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to remove camel case syntax
         * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
         * @protected
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @protected
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @protected
         */
        ntype: 'core-util',
    }}

    /**
     * @param {Object} scope
     * @param {String[]} values
     */
    static bindMethods(scope, values) {
        values.forEach(value => {
            scope[value] = scope[value].bind(scope);
        });
    }

    /**
     * Makes the first character of a string uppercase
     * @param {String} value
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(value) {
        return Util.isString(value) && value[0].toUpperCase() + value.slice(1);
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        if (!string) {
            return null;
        }

        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim();
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase();
                });
                obj[parts[0]] = parts[1];
            }
            return obj;
        }, {});
    }

    /**
     * Converts a styles object which can use camelcase syntax into a styles string
     * @param {Object} styles The styles object
     * @returns {String} The styles string (DOM ready)
     */
    static createStyles(styles) {
        let style = '';

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                style += Util.decamel(key) + ':' + value + ';';
            }
        });

        return style;
    }

    /**
     * Transforms all uppercase characters of a string into -lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
    }

    /**
     * Returns true if the passed value is an array
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isArray(value) {
        return Array.isArray(value)
    }

    /**
     * Returns true if the passed value is a boolean
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        if (value instanceof Date) {
            return false;
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        if (Util.isString(value)) {
            return value === '';
        }

        return false;
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value);
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * @param {Number} time in milliseconds
     * @returns {Promise<unknown>}
     */
    static timeout(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    /**
     * Converts any iterable (strings, numeric indices and a length property) into a true array
     * @param {Object|String} iterable
     * @param {Number} [start=0] start index
     * @param {Number} [end=iterable.length] end index
     * @returns {Array}
     */
    static toArray(iterable, start, end) {
        let len;

        if (!iterable || !(len = iterable.length)) {
            return [];
        }

        if (typeof iterable === 'string') {
            return iterable.split('');
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len);
    }
}

Neo.applyClassConfig(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    bindMethods      : 'bindMethods',
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    capitalize       : 'capitalize',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isString         : 'isString',
    timeout          : 'timeout',
    toArray          : 'toArray'
}, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/_export.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/_export.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base": () => (/* reexport safe */ _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Compare": () => (/* reexport safe */ _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "IdGenerator": () => (/* reexport safe */ _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Observable": () => (/* reexport safe */ _Observable_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Util": () => (/* reexport safe */ _Util_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compare.mjs */ "./node_modules/neo.mjs/src/core/Compare.mjs");
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");
/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");









/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Base.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Base.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");


/**
 * Abstract base class for the other manager classes
 * @class Neo.manager.Base
 * @extends Neo.collection.Base
 */
class Base extends _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]{
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Base'
         * @protected
         */
        className: 'Neo.manager.Base'
    }}

    /**
     * @param {Number|String} id
     * @returns {Object}
     */
    getById(id) {
        return id && this.get(id) || null;
    }

    /**
     * @param {Object} item
     */
    register(item) {
        let me = this;

        if (me.get(item.id)) {
            Neo.logError('Trying to create an item with an already existing id', item, me.get(item.id));
        } else {
            me.push(item);
        }
    }

    /**
     * Removes a collection item passed by reference or key
     * @param {Object|String} item
     */
    unregister(item) {
        this.remove(item);
    }
}

Neo.applyClassConfig(Base);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);


/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Component.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Component.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");



/**
 * @class Neo.manager.Component
 * @extends Neo.manager.Base
 * @singleton
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Component'
         * @protected
         */
        className: 'Neo.manager.Component',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);
        Neo.getComponent = this.getById.bind(this); // alias
    }

    /**
     * Returns the first component which matches the config-selector moving down the component items tree.
     * Use returnFirstMatch=false to get an array of all matching items instead.
     * If no match is found, returns null in case returnFirstMatch === true, otherwise an empty Array.
     * @param {Neo.component.Base|String} component
     * @param {Object|String|null} config
     * @param {Boolean} returnFirstMatch=true
     * @returns {Neo.component.Base|Neo.component.Base[]|null}
     */
    down(component, config, returnFirstMatch=true) {
        if (Neo.isString(component)) {
            component = this.getById(component);
        }

        let me          = this,
            matchArray  = [],
            returnValue = null,
            i           = 0,
            returnArray = [],
            childItems, configArray, configLength, len;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        } else if (!config) {
            config = {};
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        configArray.forEach(([key, value]) => {
            if (component[key] === value) {
                matchArray.push(true);
            }
        });

        if (matchArray.length === configLength) {
            if (returnFirstMatch) {
                return component;
            }

            returnArray.push(component);
        }

        childItems = me.find({parentId: component.id});
        len        = childItems.length;

        for (; i < len; i++) {
            returnValue = me.down(childItems[i], config, returnFirstMatch);

            if (returnFirstMatch) {
                if (returnValue !== null) {
                    return returnValue;
                }
            } else if (returnValue.length > 0) {
                returnArray.push(...returnValue);
            }
        }

        return returnFirstMatch ? null: returnArray;
    }

    /**
     * @param {Array} path
     * @returns {String|null} the component id in case there is a match
     */
    findParentComponent(path) {
        let me  = this,
            i   = 0,
            len = path?.length || 0,
            id;

        for (; i < len; i++) {
            id = path[i];

            if (id && me.has(id)) {
                return id;
            }
        }

        return null;
    }

    /**
     * todo: replace all calls of this method to calls using the util.VNode class
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param childIds
     * @returns {Array} childIds
     */
    getChildIds(vnode, childIds) {
        return _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(vnode, childIds);
    }

    /**
     * Returns all child components found inside the vnode tree
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} childComponents
     */
    getChildren(component) {
        let childComponents = [],
            childNodes      = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(component.vnode),
            childComponent;

        childNodes.forEach(node => {
            childComponent = this.get(node);

            if (childComponent) {
                childComponents.push(childComponent);
            }
        });

        return childComponents;
    }

    /**
     * Returns an Array containing the ids of all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {String[]} parentIds
     */
    getParentIds(component) {
        let parentIds = [];

        while (component?.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parentIds.push(component.id);
            }
        }

        return parentIds;
    }

    /**
     * @param {Array} path
     * @returns {Array}
     */
    getParentPath(path) {
        let me            = this,
            componentPath = [],
            i             = 0,
            len           = path?.length || 0;

        for (; i < len; i++) {
            if (me.has(path[i])) {
                componentPath.push(path[i]);
            }
        }

        return componentPath;
    }

    /**
     * Returns an Array containing all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} parents
     */
    getParents(component) {
        let parents = [];

        while (component?.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parents.push(component);
            }
        }

        return parents;
    }

    /**
     * Returns the first component which matches the config-selector.
     * Use returnFirstMatch=false to get an array of all matching items instead.
     * If no match is found, returns null in case returnFirstMatch === true, otherwise an empty Array.
     * @param {String} componentId
     * @param {Object|String|null} config
     * @param {Boolean} returnFirstMatch=true
     * @returns {Neo.component.Base|Neo.component.Base[]|null}
     */
    up(componentId, config, returnFirstMatch=true) {
        let component   = this.getById(componentId),
            returnArray = [],
            configArray, configLength, matchArray;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        } else if (!config) {
            config = {};
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        while (component?.parentId) {
            component = this.getById(component.parentId);

            if (!component) {
                return returnFirstMatch ? null : returnArray;
            }

            matchArray = [];

            configArray.forEach(([key, value]) => {
                if (component[key] === value) {
                    matchArray.push(true);
                }
            });

            if (matchArray.length === configLength) {
                if (returnFirstMatch) {
                    return component;
                }

                returnArray.push(component);
            }
        }
    }
}

Neo.applyClassConfig(Component);

let instance = Neo.create(Component);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/DomEvent.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/DomEvent.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Focus.mjs */ "./node_modules/neo.mjs/src/manager/Focus.mjs");
/* harmony import */ var _util_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Logger.mjs */ "./node_modules/neo.mjs/src/util/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");







const eventConfigKeys = [
    'bubble',
    'delegate',
    'local',
    'scope',
    'vnodeId'
];

const globalDomEvents = [
    'change',
    'click',
    'contextmenu',
    'dblclick',
    'drag:end',
    'drag:move',
    'drag:start',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mouseup',
    'wheel'
];

/**
 * @class Neo.manager.DomEvent
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvent extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.DomEvent'
         * @protected
         */
        className: 'Neo.manager.DomEvent',
        /**
         * @member {Object} items={}
         * @protected
         */
        items: {},
        /**
         * @member {Object} map={}
         * @protected
         */
        map: {},
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} event
     * @protected
     */
    fire(event) {
        let me         = this,
            bubble     = true,
            data       = event.data || {},
            eventName  = event.eventName,
            i          = 0,
            listeners  = null,
            pathIds    = data.path.map(e => e.id),
            path       = _Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentPath(pathIds),
            len        = path.length,
            component, delegationTargetId, id, preventFire;

        for (; i < len; i++) {
            id        = path[i];
            component = Neo.getComponent(id);

            if (!component || component.disabled) {
                break;
            }

            listeners = me.items[id]?.[eventName];

            if (listeners) {
                // console.log('fire', eventName, data, listeners, path);

                if (Array.isArray(listeners)) {
                    listeners.forEach(listener => {
                        if (listener && listener.fn) {
                            delegationTargetId = me.verifyDelegationPath(listener, data.path);

                            if (delegationTargetId !== false) {
                                preventFire = false;

                                // we only want mouseenter & leave to fire on their top level nodes, not for children
                                if (eventName === 'mouseenter' || eventName === 'mouseleave') {
                                    preventFire = !DomEvent.verifyMouseEnterLeave(component, data, delegationTargetId, eventName);
                                }

                                if (!preventFire) {
                                    // console.log(Neo.get(id));
                                    data.component = component;
                                    listener.fn.apply(listener.scope || globalThis, [data]);

                                    if (!listener.bubble) {
                                        bubble = false;
                                    }
                                }
                            }
                        }
                    });
                }
            }

            // we do want to trigger the FocusManager after normal domListeners on these events got executed
            if (eventName === 'focusin' || eventName === 'focusout') {
                _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]['on' + Neo.capitalize(eventName)]({
                    componentPath: path,
                    data         : data
                });

                break;
            }

            if (!bubble) {
                break;
            }
        }

        if (eventName.startsWith('drop')) {
            let dragZone = data.dragZoneId && Neo.get(data.dragZoneId);

            if (dragZone) {
                dragZone.fire(eventName, data);
                dragZone[{
                    'drop'      : 'onDrop',
                    'drop:enter': 'onDropEnter',
                    'drop:leave': 'onDropLeave',
                }[eventName]].call(dragZone, data);
            }
        }
    }

    /**
     * @param config
     * @param scope
     * @returns {Object}
     */
    generateListenerConfig(config, scope) {
        return {
            delegate : config.delegate,
            eventName: config.eventName,
            id       : scope.id,
            opts     : config,
            scope    : config.scope   || scope,
            vnodeId  : config.vnodeId || scope.id
        };
    }

    getEventName(config) {
        let eventName = null;

        if (Neo.isObject(config)) {
            Object.keys(config).forEach(key => {
                if (!eventConfigKeys.includes(key)) {
                    eventName = key;
                }
            });
        }

        return eventName;
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Object}
     */
    getListener(config) {
        let listeners = this.items,
            event;

        if (listeners?.[config.id]) {
            event = listeners[config.id][config.eventName];

            return event || null;
        }
    }

    /**
     * Mounts local domEvent listeners for a given component
     * @param {Neo.component.Base} component
     * @protected
     */
    mountDomListeners(component) {
        let listeners   = this.items[component.id],
            localEvents = [];

        if (listeners) {
            Object.entries(listeners).forEach(([eventName, value]) => {
                value.forEach(event => {
                    eventName = event.eventName;

                    if (eventName && (event.local || !globalDomEvents.includes(eventName))) {
                        // console.log('localEvents', eventName);

                        localEvents.push({
                            name   : eventName,
                            handler: 'domEventListener',
                            vnodeId: event.vnodeId
                        });
                    }
                });
            });

            if (localEvents.length > 0) {
                Neo.worker.App.promiseMessage('main', {
                    action : 'addDomListener',
                    appName: component.appName,
                    events : localEvents
                }).then(data => {
                    // console.log('added domListener', data);
                }).catch(err => {
                    console.log('App: Got error attempting to add a domListener', err);
                });
            }
        }
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Boolean} config.local
     * @param {Number} config.opts
     * @param {Number} config.originalConfig
     * @param {String} config.ownerId
     * @param {Number} config.priority
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Boolean} true if the listener got registered successfully (false in case it was already there)
     */
    register(config) {
        let alreadyRegistered = false,
            eventName         = config.eventName,
            id                = config.id,
            listeners         = this.items,
            opts              = config.opts,
            scope             = config.scope,
            fnType            = typeof opts,
            fn, listener, listenerConfig, listenerId;

        if (fnType === 'function' || fnType === 'string') {
            fn = opts;
        } else {
            fn    = opts.fn;
            scope = opts.scope || scope;
        }

        if (!listeners[id]) {
            listeners[id] = {};
        }

        if (listeners[id][eventName]) {
            listener = listeners[id][eventName];

            Object.keys(listener).forEach(key => {
                if (
                    listener[key].fn.toString() === fn.toString() && // todo: add a better check
                    listener[key].scope         === scope &&
                    listener[key].delegate      === config.delegate
                ) {
                    alreadyRegistered = true;
                }
            });
        } else {
            listeners[id][eventName] = [];
        }

        if (alreadyRegistered === true) {
            return false;
        }

        // console.log('manager.DomEvent register', eventName, config);

        listenerId = Neo.getId('dom-event');

        config.listenerId = listenerId;

        listenerConfig = {
            bubble        : config.hasOwnProperty('bubble') ? config.bubble : opts.hasOwnProperty('bubble') ? opts.bubble : true,
            delegate      : config.delegate,
            eventName     : eventName,
            fn            : fn,
            id            : listenerId,
            mounted       : !config.local && globalDomEvents.includes(eventName),
            originalConfig: config.originalConfig,
            ownerId       : config.ownerId,
            priority      : config.priority || 1,
            scope         : scope,
            vnodeId       : config.vnodeId
        };

        this.map[listenerId] = listenerConfig;

        listeners[id][eventName].push(listenerConfig);

        listeners[id][eventName].sort((a, b) => a.priority > b.priority);

        // console.log(this.map);

        return true;
    }

    /**
     * @param {Object} config
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @param {Object} scope
     * @returns {Boolean} true in case the listener did exist and got removed
     */
    unregister(config, scope) {
        // todo
        console.log('unregister', config);
        console.log(this.generateListenerConfig(config, scope));
        return;

        let listener = this.getListener(config);

        if (listener) {
            console.log('listener found', listener);
        }
    }

    /**
     * @param {Neo.component.Base} component
     * @param {Object[]} domListeners
     * @param {Object[]} oldDomListeners
     */
    updateDomListeners(component, domListeners, oldDomListeners) {
        let me                  = this,
            registeredListeners = me.items[component.id] || {},
            i, len, listeners;

        if (Array.isArray(domListeners)) {
            if (Array.isArray(oldDomListeners)) {
                oldDomListeners.forEach(oldDomListener => {
                    // find & remove no longer existing listeners
                    if (!domListeners.includes(oldDomListener)) {
                        listeners = registeredListeners[me.getEventName(oldDomListener)] || [];
                        i         = 0;
                        len       = listeners.length;

                        for (; i < len; i++) {
                            if (listeners[i].originalConfig === oldDomListener) {
                                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].remove(listeners, listeners[i]);
                                break;
                            }
                        }
                    }
                });
            }

            // add new listeners
            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    if (!eventConfigKeys.includes(key)) {
                        me.register({
                            delegate      : domListener.delegate || value.delegate || '#' + component.id,
                            eventName     : key,
                            id            : component.id,
                            opts          : value,
                            originalConfig: domListener,
                            ownerId       : component.id,
                            scope         : domListener.scope || component,
                            vnodeId       : domListener.vnodeId || value.vnodeId || component.id
                        });
                    }
                });
            });

            if (component.mounted) {
                setTimeout(() => {
                    me.mountDomListeners(component);
                }, 100)
            }
        } else {
            _util_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Component.domListeners have to be an array', component);
        }
    }

    /**
     * Intended for Neo.controller.Component to replace listener placeholders provided as a string
     * @param {Object} config
     * @param {String} config.componentId
     * @param {Function} config.eventHandlerMethod
     * @param {String} config.eventHandlerName
     * @param {String} config.eventName
     * @param {Neo.core.Base} config.scope
     */
    updateListenerPlaceholder(config) {
        let me             = this,
            items          = me.items[config.componentId] || {},
            eventListeners = items[config.eventName] || [],
            i              = 0,
            len            = eventListeners.length,
            listener;

        for (; i < len; i++) {
            listener = eventListeners[i];

            if (listener.fn === config.eventHandlerName) {
                listener.fn    = config.eventHandlerMethod;
                listener.scope = config.scope;
                break;
            }
        }
    }

    /**
     * @param {Object} listener
     * @param {Array} path
     * @returns {Boolean|String} true in case the delegation string matches the event path
     */
    verifyDelegationPath(listener, path) {
        let delegationArray = listener.delegate.split(' '),
            j               = 0,
            len             = delegationArray.length,
            pathLen         = path.length,
            hasMatch, i, item, isId, targetId;

        for (i=len-1; i >= 0; i--) {
            hasMatch = false;
            item     = delegationArray[i];
            isId     = item.startsWith('#');

            if (isId || item.startsWith('.')) {
                item = item.substr(1);
            }

            for (; j < pathLen; j++) {
                if (
                    (isId && path[j].id === item) ||
                    path[j].cls.includes(item)
                ) {
                    hasMatch = true;
                    targetId = path[j].id;
                    break;
                }
            }

            if (!hasMatch) {
                return false;
            }
        }

        // ensure the delegation path is a child of the owner components root node
        for (; j < pathLen; j++) {
            if (path[j].id === listener.vnodeId) {
                return targetId;
            }
        }

        return false;
    }

    /**
     * @param {Neo.component.Base} component
     * @param {Object} data
     * @param {String} delegationTargetId
     * @param {String} eventName
     * @returns {Boolean}
     */
    static verifyMouseEnterLeave(component, data, delegationTargetId, eventName) {
        let targetId = eventName === 'mouseenter' ? data.fromElementId : data.toElementId,
            delegationVdom;

        if (targetId && targetId !== delegationTargetId) {
            delegationVdom = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(component.vdom, delegationTargetId);

            // delegationVdom can be undefined when dragging a proxy over the node.
            // see issues/1137 for details.
            if (!delegationVdom || delegationVdom.vdom && _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(delegationVdom.vdom, targetId)) {
                return false;
            }
        }

        return true;
    }
}

Neo.applyClassConfig(DomEvent);

let instance = Neo.create(DomEvent);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Focus.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Focus.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.manager.Focus
 * @extends Neo.core.Base
 * @singleton
 */
class Focus extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Focus'
         * @protected
         */
        className: 'Neo.manager.Focus',
        /**
         * An array containing opts objects.
         * opts.componentPath
         * opts.data
         * @member {Object[]} history=[]
         */
        history: [],
        /**
         * The Date object when the last focusin event has occurred
         * @member {Date|null} lastFocusInDate=null
         * @protected
         */
        lastFocusInDate: null,
        /**
         * The Date object when the last focusout event has occurred
         * @member {Date|null} lastFocusInDate=null
         * @protected
         */
        lastFocusOutDate: null,
        /**
         * The amount of time for a focusIn to occur after the last focusOut
         * to get combined into a focusmove event.
         * @member {Number} maxFocusInOutGap=10
         */
        maxFocusInOutGap: 10,
        /**
         * The maximum amount of items stored inside the history array
         * @member {Number} maxHistoryLength=20
         */
        maxHistoryLength: 20,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    addToHistory(opts) {
        let history = this.history;

        history.unshift(opts);
        history.length >= this.maxHistoryLength && history.pop();
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusEnter(opts) {
        this.setComponentFocus(opts, true);
        this.addToHistory(opts);
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusLeave(opts) {
        this.setComponentFocus(opts, false);
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusMove(opts) {
        let me               = this,
            history          = me.history,
            newComponentPath = opts.componentPath,
            oldComponentPath = history[0].componentPath,
            focusEnter       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(newComponentPath, oldComponentPath),
            focusLeave       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(oldComponentPath, newComponentPath),
            focusMove        = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].intersection(newComponentPath, oldComponentPath),
            component, data;

        me.setComponentFocus({componentPath: focusLeave, data: opts.data}, false);
        me.setComponentFocus({componentPath: focusEnter, data: opts.data}, true);

        focusMove.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                data = {
                    path   : opts.data.path,
                    oldPath: history[0].data.path
                };

                component.onFocusMove?.(data);
                component.fire('focusMove', data);

                component.onFocusChange?.(data);
                component.fire('focusChange', data);
            }
        });

        me.addToHistory(opts);
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    onFocusin(opts) {
        let me = this;

        me.lastFocusInDate = new Date();

        if (me.lastFocusOutDate && me.lastFocusInDate - me.lastFocusOutDate < me.maxFocusInOutGap) {
            me.focusMove(opts);
        } else {
            me.focusEnter(opts);
        }
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    onFocusout(opts) {
        let me = this;

        me.lastFocusOutDate = new Date();

        setTimeout(() => {
            if (me.lastFocusOutDate > me.lastFocusInDate) {
                me.focusLeave(opts);
            }
        }, me.maxFocusInOutGap);
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @param {Boolean} containsFocus
     * @protected
     */
    setComponentFocus(opts, containsFocus) {
        let data = {},
            components = opts.componentPath.map(id => Neo.getComponent(id)),
            handler;

        components.forEach(component => {
            if (component) {
                component.containsFocus = containsFocus;
            }
        });

        components.forEach(component => {
            if (component) {
                data[containsFocus ? 'path' : 'oldPath'] = opts.data.path

                handler = containsFocus ? 'onFocusEnter' : 'onFocusLeave';
                component[handler]?.(data);

                component.fire(containsFocus ? 'focusEnter' : 'focusLeave', data);

                component.onFocusChange?.(data);
                component.fire('focusChange', data);
            }
        });
    }
}

Neo.applyClassConfig(Focus);

let instance = Neo.create(Focus);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Instance.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Instance.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");



/**
 * @class Neo.manager.Instance
 * @extends Neo.manager.Base
 * @singleton
 */
class Instance extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Instance'
         * @protected
         */
        className: 'Neo.manager.Instance',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].instanceManagerAvailable = true;

        me.consumeNeoIdMap();

        Neo.get = me.get.bind(me); // alias
    }

    /**
     * Register all ids which got applied to the Neo namespace before this instance got created
     * @protected
     */
    consumeNeoIdMap() {
        if (Neo.idMap) {
            this.add(Object.values(Neo.idMap));
            delete Neo.idMap;
        }
    }
}

Neo.applyClassConfig(Instance);

let instance = Neo.create(Instance);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Array.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Array.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Array
 * @extends Neo.core.Base
 */
class NeoArray extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Array'
         * @protected
         */
        className: 'Neo.util.Array'
    }}

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static add(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        });
    }

    /**
     * Returns an array of items which are present in array1, but not in array2
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static difference(array1=[], array2=[]) {
        return array1.filter(item => !array2.includes(item));
    }

    /**
     * Checks if the item is included by reference inside the array
     * @param {Array} arr
     * @param {*} item
     */
    static hasItem(arr, item) {
        return arr.includes(item);
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static intersection(array1=[], array2=[]) {
        return array1.filter(item => array2.includes(item));
    }

    /**
     * Moves an item inside arr from fromIndex to toIndex
     * @param {Array} arr
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    static move(arr, fromIndex, toIndex) {
        if (fromIndex === toIndex) {
            return arr;
        }

        if (fromIndex >= arr.length) {
            fromIndex = arr.length - 1;
        }

        arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
        return arr;
    }

    /**
     * Removes an item or array of items from an array. Only primitive items will get found
     * @param {Array} arr
     * @param {*} items
     */
    static remove(arr, items) {
        let index;

        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            index = arr.indexOf(item);

            index > -1 && arr.splice(index, 1);
        });
    }

    /**
     * Convenience method to combine add & remove in one call.
     * You can pass single items or an array of items to add or to remove.
     * @param {Array} arr
     * @param {*} removeItems
     * @param {*} addItems
     */
    static removeAdd(arr, removeItems, addItems) {
        this.remove(arr, removeItems);
        this.add(arr, addItems);
    }

    /**
     * Removes an item from an array in case it does exist, otherwise adds it
     * @param {Array} arr
     * @param {*} item
     */
    static toggle(arr, item) {
        this[this.hasItem(arr, item) ? 'remove' : 'add'](arr, item);
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1
     * @param {Array} array2
     * @returns {Array}
     */
    static union(array1, array2) {
        let result = [],
            merge  = array1.concat(array2),
            len    = merge.length,
            assoc  = {},
            item;

        while (len--) {
            item = merge[len];

            if (!assoc[item]) {
                result.unshift(item);
                assoc[item] = true;
            }
        }

        return result;
    }

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static unshift(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.unshift(item);
            }
        });
    }
}

Neo.applyClassConfig(NeoArray);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NeoArray);


/***/ }),

/***/ "./node_modules/neo.mjs/src/util/ClassSystem.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/ClassSystem.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.ClassSystem
 * @extends Neo.core.Base
 */
class ClassSystem extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.ClassSystem'
         * @protected
         */
        className: 'Neo.util.ClassSystem'
    }}

    /**
     * can get used inside beforeSet methods in case you want to create instances like stores
     * @param {Object|Neo.core.Base|null} config
     * @param {Neo.core.Base|String} [DefaultClass=null]
     * @param {Object} [defaultValues={}]
     * @returns {Neo.core.Base} instance
     */
    static beforeSetInstance(config, DefaultClass=null, defaultValues={}) {
        let isInstance = config instanceof Neo.core.Base;

        if (Neo.isString(DefaultClass)) {
            DefaultClass = Neo.ns(DefaultClass);
        }

        if (!config && DefaultClass) {
            config = Neo.create(DefaultClass, defaultValues);
        } else if (config?.isClass) {
            config = Neo.create(config, defaultValues);
        } else if (Neo.isObject(config) && !isInstance) {
            if (config.ntype) {
                config = Neo.ntype({
                    ...defaultValues,
                    ...config
                });
            } else {
                const newConfig = {};

                if (DefaultClass) {
                    newConfig.module = DefaultClass;
                }

                Object.assign(newConfig, {
                    ...defaultValues,
                    ...config
                });

                config = Neo.create(newConfig);
            }
        } else if (isInstance) {
            if (defaultValues?.listeners) {
                config.on(defaultValues.listeners);
            }
        }

        return config;
    }
}

Neo.applyClassConfig(ClassSystem);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassSystem);


/***/ }),

/***/ "./node_modules/neo.mjs/src/util/HashHistory.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/HashHistory.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.util.HashHistory
 * @extends Neo.core.Base
 * @singleton
 */
class HashHistory extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.ClassSystem'
         * @protected
         */
        className: 'Neo.util.HashHistory',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} maxItems=50
         * @protected
         */
        maxItems: 50,
        /**
         * @member {Array} stack=[]
         * @protected
         */
        stack: []
    }}

    /**
     * @returns {Object}
     */
    first() {
        return this.stack[0];
    }

    /**
     * @returns {Number}
     */
    getCount() {
        return this.stack.length;
    }

    /**
     * @param {Object} data
     * @param {String} data.appName
     * @param {Object} data.hash
     * @param {String} data.hashString
     */
    push(data) {
        let me    = this,
            stack = me.stack;

        stack.unshift(data);

        if (stack.length > me.maxItems) {
            stack.pop();
        }

        me.fire('change', data, stack[1] || null);
    }
}

Neo.applyClassConfig(HashHistory);

let instance = Neo.create(HashHistory);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Logger.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Logger.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Logger
 * @extends Neo.core.Base
 * @singleton
 */
class Logger extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Logger'
         * @protected
         */
        className: 'Neo.util.Logger',
        /**
         * Set this config to false to disable the logging
         * @member {boolean} enableLogs=true
         */
        enableLogs: true,
        /**
         * @member {String} level='log'
         * @protected
         */
        level: 'log',
        /**
         * @member {boolean} enableLogs=true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param config
     */
    construct(config) {
        super.construct(config);

        // aliases
        Neo.applyFromNs(Neo, this, {
            error   : 'error',
            info    : 'info',
            log     : 'log',
            logError: 'logError',
            warn    : 'warn'
        }, true);
    }

    /**
     * @param value
     */
    error(value) {
        throw new Error(value);
    }

    /**
     * @param args
     */
    info(...args) {
        this.level = 'info';
        this.write(...args);
    }

    /**
     * @param args
     */
    log(...args) {
        this.level = 'log';
        this.write(...args);
    }

    /**
     * @param args
     */
    logError(...args) {
        this.level = 'error';
        this.write(...args);
    }

    /**
     * @param args
     */
    warn(...args) {
        this.level = 'warn';
        this.write(...args);
    }

    /**
     * @param args
     * @protected
     */
    write(...args) {
        if (this.enableLogs === true) {
            console[this.level](...args);
        }
    }
}

Neo.applyClassConfig(Logger);

let instance = Neo.create(Logger);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/util/VDom.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/VDom.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.VDom
 * @extends Neo.core.Base
 */
class VDom extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VDom'
         * @protected
         */
        className: 'Neo.util.VDom'
    }}

    /**
     * @param {Object} vdom
     * @param {Boolean} [removeIds=true]
     * @returns {Object} cloned vdom
     */
    static clone(vdom, removeIds=true) {
        const clone = Neo.clone(vdom, true);

        if (removeIds) {
            delete clone.id;
        }

        if (clone.cn) {
            clone.cn.forEach((item, index) => {
                clone.cn[index] = VDom.clone(item, removeIds);
            });
        }

        return clone;
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} vdom
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vdom
     */
    static findVdomChild(vdom, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id: opts};

        let child      = null,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vdom.cn?.length,
            optsArray  = Object.entries(opts),
            optsLength = optsArray.length,
            subChild;

        optsArray.forEach(([key, value]) => {
            if (vdom.hasOwnProperty(key)) {
                switch(key) {
                    case 'cls':
                        if (typeof value === 'string' && Neo.isArray(vdom[key])) {
                            if (vdom[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vdom[key])) {
                            // todo: either search the vdom array for all keys or compare if the arrays are equal.
                            throw new Error('findVdomChild: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isObject(value) && Neo.isObject(vdom[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vdom[key].hasOwnProperty(styleKey) && vdom[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        } else {
                            throw new Error('findVdomChild: style matching not supported for mixed target & source types (Object VS String)');
                        }
                        break;
                    default:
                        if (vdom[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {index, parentNode, vdom};
        }

        if (vdom.cn) {
            for (; i < len; i++) {
                if (vdom.cn[i]) {
                    subChild = VDom.findVdomChild(vdom.cn[i], opts, i, vdom);

                    if (subChild) {
                        child = {
                            index     : subChild.index,
                            parentNode: subChild.parentNode,
                            vdom      : subChild.vdom
                        };
                        break;
                    }
                }
            }
        }

        return child;
    }

    /**
     * Convenience shortcut for findVdomChild(vdom, {flag: flag});
     * @param {Object} vdom
     * @param {String} flag The flag reference specified on the target vdom child node
     * @returns {Object} vdom
     */
    static getByFlag(vdom, flag) {
        let node = VDom.findVdomChild(vdom, {flag: flag});
        return node?.vdom;
    }

    /**
     * Get the ids of all child nodes of the given vdom tree
     * @param vdom
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vdom, childIds=[]) {
        let childNodes = vdom?.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VDom.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodes(vdom, index) {
        let columnNodes = [];

        if (vdom.cn) {
            vdom.cn.forEach(row => {
                if (row.cn?.[index]) {
                    columnNodes.push(row.cn[index]);
                }
            });
        }

        return columnNodes;
    }

    /**
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodesIds(vdom, index) {
        return VDom.getColumnNodes(vdom, index).map(e => e.id);
    }

    /**
     * @param {Object} vdom
     * @param {String} flag
     * @param {Array} [matchArray]
     * @returns {Array} an array of vdom nodes which match the flag
     */
    static getFlags(vdom, flag, matchArray) {
        if (!matchArray) {
            matchArray = [];

            if (vdom.flag === flag) {
                matchArray.push(vdom);
            }
        }

        (vdom?.cn || []).forEach(childNode => {
            if (childNode.flag === flag) {
                matchArray.push(childNode);
            }

            matchArray = VDom.getFlags(childNode, flag, matchArray);
        });

        return matchArray;
    }

    /**
     * @param {Object} vdom
     * @param {String} id
     * @param {Boolean} topLevel=true Internal flag, do not use it
     * @returns {Array}
     */
    static getParentNodes(vdom, id, topLevel=true) {
        let parents = null,
            i       = 0,
            len     = vdom.cn?.length || 0;

        if (vdom.id === id) {
            return [];
        }

        for (; i < len; i++) {
            parents = VDom.getParentNodes(vdom.cn[i], id, false);

            if (parents) {
                parents.push(vdom.cn[i]);
                break;
            }
        }

        if (topLevel && parents) {
            parents.push(vdom);
        }

        return parents;
    }

    /**
     * Insert a given nodeToInsert after a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertAfterNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, false);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertBeforeNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, true);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @param {Boolean} insertBefore true inserts the new node at the same index, index+1 otherwise
     * @returns {Boolean}
     */
    static insertNode(vdom, nodeToInsert, targetNodeId, insertBefore) {
        if (Neo.isObject(targetNodeId)) {
            targetNodeId = targetNodeId.id;
        }

        let targetNode = VDom.findVdomChild(vdom, {id: targetNodeId}),
            index;

        if (targetNode) {
            index = insertBefore ? targetNode.index : targetNode.index + 1;
            targetNode.parentNode.cn.splice(index, 0, nodeToInsert);
            return true;
        }

        return false;
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} [vdom]
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @returns {Boolean} true in case the node was found & removed
     */
    static removeVdomChild(vdom, opts) {
        let child = VDom.findVdomChild(vdom, opts);

        if (child) {
            child.parentNode.cn.splice(child.index, 1);
            return true;
        }

        return false;
    }

    /**
     * Replaces a child node inside a vdom tree by a given id
     * @param {Object} vdom
     * @param {String} id
     * @param {Object} newChildNode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceVdomChild(vdom, id, newChildNode) {
        let cn  = vdom.cn || [],
            i   = 0,
            len = cn.length,
            childNode;

        if (vdom.id === id) {
            throw new Error('replaceVdomChild: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = cn[i];

            if (childNode.id === id) {
                cn[i] = newChildNode;
                return true;
            }

            if (VDom.replaceVdomChild(childNode, id, newChildNode)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Neo.vdom.Helper will create ids for each vnode, so we need to sync them into the vdom
     * @param {Neo.vdom.VNode} vnode
     * @param {Object} vdom
     */
    static syncVdomIds(vnode, vdom) {
        if (vnode && vdom) {
            let childNodes = vdom.childNodes || vdom.cn,
                cn, i, len;

            if (vnode.id && vnode.id !== vdom.id) {
                vdom.id = vnode.id;
                // console.log('vdom id set to', vnode.id);
            }

            if (childNodes) {
                cn   = childNodes.filter(item => item.removeDom !== true);
                i    = 0;
                len  = cn?.length || 0;

                for (; i < len; i++) {
                    if (vnode.childNodes) {
                        VDom.syncVdomIds(vnode.childNodes[i], cn[i]);
                    }
                }
            }
        }
    }
}

Neo.applyClassConfig(VDom);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VDom);


/***/ }),

/***/ "./node_modules/neo.mjs/src/util/VNode.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/VNode.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.VNode
 * @extends Neo.core.Base
 */
class VNode extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VNode'
         * @protected
         */
        className: 'Neo.util.VNode'
    }}

    /**
     * Search vnode child nodes by id or opts object for a given vdom tree
     * @param {Object} vnode
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vnode
     */
    static findChildVnode(vnode, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id: opts};

        let attrMatch  = true,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vnode.childNodes?.length || 0,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vnode.hasOwnProperty(key)) {
                switch(key) {
                    case 'attributes':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([attrKey, attrValue]) => {
                                if (!(vnode[key].hasOwnProperty(attrKey) && vnode[key][attrKey] === attrValue)) {
                                    attrMatch = false;
                                }
                            });

                            if (attrMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    case 'className':
                        if (typeof value === 'string' && Neo.isArray(vnode[key])) {
                            if (vnode[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vnode[key] === 'string') {
                            if (vnode[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vnode[key])) {
                            // todo: either search the vnode array for all keys or compare if the arrays are equal.
                            throw new Error('findChildVnode: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vnode[key].hasOwnProperty(styleKey) && vnode[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    default:
                        if (vnode[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {index, parentNode, vnode};
        }

        for (; i < len; i++) {
            subChild = VNode.findChildVnode(vnode.childNodes[i], opts, i, vnode);

            if (subChild) {
                return subChild;
            }
        }

        return null;
    }

    /**
     * Finds a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String|null} id
     * @returns {Object|null} child vnode or null
     */
    static findChildVnodeById(vnode, id) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            return vnode;
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                return childNode
            }

            childNode = VNode.findChildVnodeById(childNode, id);

            if (childNode) {
                return childNode;
            }
        }

        return null;
    }

    /**
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vnode, childIds=[]) {
        let childNodes = vnode && vnode.childNodes || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VNode.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     * Removes a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @returns {Boolean} true in case the node was found and removed
     */
    static removeChildVnode(vnode, id) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('removeChildVnode: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                childNodes.splice(i, 1);
                return true;
            }

            if (VNode.removeChildVnode(childNode, id)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Replaces a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @param {Object} newChildVnode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceChildVnode(vnode, id, newChildVnode) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('replaceChildVnode: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                childNodes[i] = newChildVnode;
                return true;
            }

            if (VNode.replaceChildVnode(childNode, id, newChildVnode)) {
                return true;
            }
        }

        return false;
    }
}

Neo.applyClassConfig(VNode);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VNode);


/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Base.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixin/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs");





/**
 * The abstract base class for the App, Data & VDom worker
 * @class Neo.worker.Base
 * @extends Neo.core.Base
 * @abstract
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @member {Object|null} channelPorts=null
     * @protected
     */
    channelPorts = null
    /**
     * Only needed for SharedWorkers
     * @member {Boolean} isConnected=false
     * @protected
     */
    isConnected = false
    /**
     * @member {Boolean} isSharedWorker=false
     * @protected
     */
    isSharedWorker = false
    /**
     * Only needed for SharedWorkers
     * @member {Array|null} ports=null
     */
    ports = null

    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Base'
         * @protected
         */
        className: 'Neo.worker.Base',
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable,RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]],
        /**
         * @member {String|null} workerId=null
         * @protected
         */
        workerId: null
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this,
            gt = globalThis;

        Object.assign(me, {
            channelPorts  : {},
            isSharedWorker: gt.toString() === '[object SharedWorkerGlobalScope]',
            ports         : [],
            promises      : {}
        });

        if (me.isSharedWorker) {
            gt.onconnect = me.onConnected.bind(me);
        } else {
            gt.onmessage = me.onMessage.bind(me);
        }

        Neo.currentWorker = me;
        Neo.workerId      = me.workerId;
    }

    /**
     * Entry point for dedicated and shared workers
     */
    afterConnect() {}

    /**
     * @param {Object} opts
     * @returns {Object|null}
     */
    getPort(opts) {
        let returnPort = null,
            hasMatch;

        this.ports.forEach(port => {
            hasMatch = true;

            Object.entries(opts).forEach(([key, value]) => {
                if (value !== port[key]) {
                    hasMatch = false;
                }
            });

            if (hasMatch) {
                returnPort = port;
            }
        });

        return returnPort;
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} data
     */
    onConnect(data) {
        // short delay to ensure app VCs are in place
        setTimeout(() => {
            this.fire('connect', {
                appName: data.appName
            });
        }, 10);
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} e
     */
    onConnected(e) {
        let me = this,
            id = Neo.getId('port');

        me.isConnected = true;

        me.ports.push({
            appName: null,
            id,
            port   : e.ports[0]
        });

        me.ports[me.ports.length - 1].port.onmessage = me.onMessage.bind(me);

        // core.Base: initRemote() subscribes to this event for the SharedWorkers context
        me.fire('connected');

        me.sendMessage('main', {action: 'workerConstructed', port: id});

        me.afterConnect();
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        if (!me.isSharedWorker) {
            me.sendMessage('main', {action: 'workerConstructed'});
            me.afterConnect();
        }
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} data
     */
    onDisconnect(data) {
        this.fire('disconnect', {
            appName: data.appName
        });
    }

    /**
     * @param {Object} e
     */
    onMessage(e) {
        let me      = this,
            data    = e.data,
            action  = data.action,
            replyId = data.replyId,
            promise;

        if (!action) {
            throw new Error('Message action is missing: ' + data.id);
        }

        if (action !== 'reply') {
            me['on' + Neo.capitalize(action)](data);
        } else if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.reject) {
                promise.reject(data.data);
            } else {
                promise.resolve(data.data);
            }

            delete me.promises[replyId];
        }
    }

    /**
     * @param {Object} msg
     */
    onPing(msg) {
        this.resolve(msg, {
            originMsg: msg
        });
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} msg
     * @param {String} msg.appName
     */
    onRegisterApp(msg) {
        let me      = this,
            appName = msg.appName,
            port;

        for (port of me.ports) {
            if (!port.appName) {
                port.appName = appName;
                me.onConnect({ appName });
                break;
            }
        }
    }

    /**
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        Neo.config = Neo.config || {};
        Object.assign(Neo.config, msg.data);
    }

    /**
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise(function(resolve, reject) {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = { reject, resolve };
        });
    }

    /**
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @protected
     */
    sendMessage(dest, opts, transfer) {
        opts.destination = dest;

        let me = this,
            message, port, portObject;

        if (me.channelPorts[dest]) {
            port = me.channelPorts[dest];
        } else if (!me.isSharedWorker) {
            port = globalThis;
        } else {
            if (opts.port) {
                port = me.getPort({id: opts.port}).port;
            } else if (opts.appName) {
                portObject = me.getPort({appName: opts.appName});
                port       = portObject.port;

                opts.port = portObject.id;
            } else {
                port = me.ports[0].port;
            }
        }

        message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_2__["default"](opts);

        port.postMessage(message, transfer);
        return message;
    }
}

Neo.applyClassConfig(Base);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);


/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     * @param {Object} config
     */
    constructor(config) {
        /**
         * @member {String} action
         */

        /**
         * @member {String} destination='main'
         */

        /**
         * @member {String} id=IdGenerator.getId(Neo.workerId)
         */

        /**
         * @member {String} origin=Neo.workerId
         */

        config.destination = config.destination || 'main';
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);


/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.worker.mixin.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.mixin.RemoteMethodAccess'
         * @protected
         */
        className: 'Neo.worker.mixin.RemoteMethodAccess',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me     = this,
            origin = remote.origin;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };

            if (me.isSharedWorker) {
                opts.appName = data?.appName;
                opts.port    = data?.port;
            }

            return me.promiseMessage(origin, opts, buffer);
        }
    }

    /**
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(method => {
                if (remote.origin !== 'main' && pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                if (!pkg[method] ) {
                    pkg[method] = me.generateRemote(remote, method);
                }
            });
        }
    }

    /**
     * @param {Object} msg
     */
    onRemoteMethod(msg) {
        let me  = this,
            pkg = Neo.ns(msg.remoteClassName),
            out, method;

        if (!pkg) {
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"');
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"');
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data);
        } else {
            out = method.call(pkg, msg.data);
        }

        if (out instanceof Promise) {
            out.then(data => {
                me.resolve(msg, data);
            })
            .catch(err => {
                me.reject(msg, err);
            });
        } else {
            me.resolve(msg, out);
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        let opts = {
            action : 'reply',
            data,
            reject : true,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        let opts = {
            action : 'reply',
            data,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }
}

Neo.applyClassConfig(RemoteMethodAccess);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoteMethodAccess);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunks/app/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"app": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmainapp"] = self["webpackChunkmainapp"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/App.mjs ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/worker/Base.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _controller_Application_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/Application.mjs */ "./node_modules/neo.mjs/src/controller/Application.mjs");
/* harmony import */ var _manager_Instance_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manager/Instance.mjs */ "./node_modules/neo.mjs/src/manager/Instance.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./node_modules/neo.mjs/src/util/HashHistory.mjs");








/**
 * The App worker contains most parts of the framework as well as all apps which get created.
 * See the tutorials for further infos.
 * @class Neo.worker.App
 * @extends Neo.worker.Base
 * @singleton
 */
class App extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * @member {Object|null} data=null
     * @protected
     */
    data = null
    /**
     * @member {Boolean} isUsingViewModels=false
     * @protected
     */
    isUsingViewModels = false
    /**
     * We are storing the params of insertThemeFiles() calls here, in case the method does get triggered
     * before the json theme structure got loaded.
     * @member {Array[]} themeFilesCache=[]
     * @protected
     */
    themeFilesCache = []

    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.App'
         * @protected
         */
        className: 'Neo.worker.App',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {String} workerId='app'
         * @protected
         */
        workerId: 'app'
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyDeltas = this.applyDeltas.bind(this); // convenience shortcut
    }

    /**
     * @param {String} appName
     * @param {Array|Object} deltas
     * @returns {Promise<*>}
     */
    applyDeltas(appName, deltas) {
         return this.promiseMessage('main', {
            action: 'updateDom',
            appName,
            deltas
        });
    }

    /**
     * @param {Object} data
     */
    createThemeMap(data) {
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns('Neo.cssMap.fileInfo', true);
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].cssMap.fileInfo = data;
        this.resolveThemeFilesCache();
    }

    /**
     * Only needed for the SharedWorkers context
     * @param {String} eventName
     * @param {Object} data
     */
    fireMainViewsEvent(eventName, data) {
        this.ports.forEach(port => {
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].apps[port.appName].mainViewInstance.fire(eventName, data);
        });
    }

    /**
     * @param {String} path
     * @returns {Promise}
     */
    importApp(path) {
        if (path.endsWith('.mjs')) {
            path = path.slice(0, -4);
        }

        return __webpack_require__("./. lazy recursive ^\\.\\/.*\\.mjs$ include: [\\\\\\/]app.mjs$ exclude: [\\\\\\/]node_modules")(`./${path}.mjs`);
    }

    /**
     * In case you don't want to include prototype based CSS files, use the className param instead
     * @param {String} appName
     * @param {Neo.core.Base} [proto]
     * @param {String} [className]
     */
    insertThemeFiles(appName, proto, className) {
        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.themes.length > 0) {
            className = className || proto.className;

            let me       = this,
                lAppName = appName.toLowerCase(),
                cssMap   = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].cssMap,
                parent   = proto?.__proto__,
                classPath, fileName, mapClassName, ns, themeFolders;

            if (!cssMap) {
                me.themeFilesCache.push([appName, proto]);
            } else {
                // we need to modify app related class names
                if (!className.startsWith('Neo.')) {
                    className = className.split('.');
                    className.shift();

                    className[0] === 'view' && className.shift();

                    mapClassName = `apps.${_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].apps[appName].appThemeFolder || lAppName}.${className.join('.')}`;
                    className    = `apps.${lAppName}.${className.join('.')}`;
                }

                if (parent && parent !== _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].core.Base.prototype) {
                    if (!_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(`${lAppName}.${parent.className}`, false, cssMap)) {
                        me.insertThemeFiles(appName, parent);
                    }
                }

                themeFolders = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(mapClassName || className, false, cssMap.fileInfo);

                if (themeFolders && !_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(`${lAppName}.${className}`, false, cssMap)) {
                    classPath = className.split('.');
                    fileName  = classPath.pop();
                    classPath = classPath.join('.');
                    ns        = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(`${lAppName}.${classPath}`, true, cssMap);

                    ns[fileName] = true;

                    _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].main.addon.Stylesheet.addThemeFiles({
                        appName,
                        className: mapClassName || className,
                        folders  : themeFolders
                    });
                }
            }
        }
    }

    /**
     * Every dom event will get forwarded as a worker message from main and ends up here first
     * @param {Object} data useful event properties, differs for different event types. See Neo.main.DomEvents.
     */
    onDomEvent(data) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].fire(data);
    }

    /**
     * Every URL hash-change will create a post message in main and end up here first.
     * @param {Object} data parsed key-value pairs for each hash value
     */
    onHashChange(data) {
        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(data.data);
    }

    /**
     * The starting point for apps
     * @param {Object} data
     */
    onLoadApplication(data) {
        let me     = this,
            config = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config,
            path;

        if (data) {
            me.data = data;
            config.resourcesPath = data.resourcesPath;
        }

        path = me.data.path;

        if (config.environment !== 'development') {
            path = path.startsWith('/') ? path.substring(1) : path;
        }

        me.importApp(path).then(module => {
            module.onStart();

            // short delay to ensure Component Controllers are ready
            config.hash && setTimeout(() => _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(config.hash), 5);
        });
    }

    /**
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        super.onRegisterNeoConfig(msg);

        let config = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config,
            url    = `resources/theme-map${config.useCssVars ? '' : '-no-vars'}.json`;

        if (config.environment === 'development') {
            url = `../../${url}`;
        }

        if (config.workerBasePath?.includes('node_modules')) {
            url = `../../${url}`;
        }

        if (url[0] !== '.') {
            url = `./${url}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {this.createThemeMap(data)});

        config.remotesApiUrl  && __webpack_require__.e(/*! import() */ "node_modules_neo_mjs_src_remotes_Api_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ../remotes/Api.mjs */ "./node_modules/neo.mjs/src/remotes/Api.mjs")).then(module => module.default.load());
        !config.useVdomWorker && __webpack_require__.e(/*! import() */ "vendors-node_modules_neo_mjs_src_vdom_Helper_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ../vdom/Helper.mjs */ "./node_modules/neo.mjs/src/vdom/Helper.mjs"));
    }

    /**
     * @param {Object} msg
     */
    onRegisterPort(msg) {
        let me   = this,
            port = msg.transfer;

        port.onmessage = me.onMessage.bind(me);

        me.channelPorts[msg.origin] = port;
    }

    /**
     * @param {Object} data
     */
    onWindowPositionChange(data) {
        this.fireMainViewsEvent('windowPositionChange', data.data);
    }

    /**
     * Only needed for SharedWorkers
     * @param {String} appName
     */
    registerApp(appName) {
        // register the name as fast as possible
        this.onRegisterApp({ appName });

        this.sendMessage('main', {
            action: 'registerAppName',
            appName
        });
    }

    /**
     * Unregister the app from the CSS map
     * Only needed for SharedWorkers
     * @param {String} appName
     */
    removeAppFromThemeMap(appName) {
        delete _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].cssMap[appName.toLowerCase()];
    }

    /**
     * @private
     */
    resolveThemeFilesCache() {
        let me = this;

        me.themeFilesCache.forEach(item => {
            me.insertThemeFiles(...item);
        });

        me.themeFilesCache = [];
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(App);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(App);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwd29ya2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQSxpRUFBb0I7O0FBRXBCLGVBQWUsdURBQVU7O0FBRXpCLGdFQUFtQjs7QUFFbkIsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbmFwcC8uLy4vIGxhenkgXlxcLlxcLy4qXFwubWpzJCBpbmNsdWRlOiBbXFxcXFxcL11hcHAubWpzJCBleGNsdWRlOiBbXFxcXFxcL11ub2RlX21vZHVsZXMgc3RyaWN0IG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9EZWZhdWx0Q29uZmlnLm1qcyIsIndlYnBhY2s6Ly9tYWluYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL05lby5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0Jhc2UubWpzIiwid2VicGFjazovL21haW5hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9GaWx0ZXIubWpzIiwid2VicGFjazovL21haW5hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9Tb3J0ZXIubWpzIiwid2VicGFjazovL21haW5hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9BcHBsaWNhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0Jhc2UubWpzIiwid2VicGFjazovL21haW5hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly9tYWluYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQ29tcGFyZS5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly9tYWluYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL1V0aWwubWpzIiwid2VicGFjazovL21haW5hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly9tYWluYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0RvbUV2ZW50Lm1qcyIsIndlYnBhY2s6Ly9tYWluYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvRm9jdXMubWpzIiwid2VicGFjazovL21haW5hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9JbnN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyIsIndlYnBhY2s6Ly9tYWluYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzIiwid2VicGFjazovL21haW5hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9IYXNoSGlzdG9yeS5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0xvZ2dlci5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzIiwid2VicGFjazovL21haW5hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9WTm9kZS5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvTWVzc2FnZS5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvbWl4aW4vUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyIsIndlYnBhY2s6Ly9tYWluYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW5hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW5hcHAvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9tYWluYXBwL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9tYWluYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWFpbmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW5hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21haW5hcHAvd2VicGFjay9ydW50aW1lL2ltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9tYWluYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9BcHAubWpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHBzL2NoaWxkYXBwL2FwcC5tanNcIjogW1xuXHRcdFwiLi9hcHBzL2NoaWxkYXBwL2FwcC5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX2NvbnRhaW5lcl9WaWV3cG9ydF9tanNcIixcblx0XHRcImFwcHNfY2hpbGRhcHBfYXBwX21qc1wiXG5cdF0sXG5cdFwiLi9hcHBzL21haW5hcHAvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL2FwcHMvbWFpbmFwcC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19jb250YWluZXJfVmlld3BvcnRfbWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19jb250cm9sbGVyX0NvbXBvbmVudF9tanMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX3Rvb2xiYXJfQmFzZV9tanNcIixcblx0XHRcImFwcHNfbWFpbmFwcF9hcHBfbWpzXCJcblx0XSxcblx0XCIuL2RvY3MvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL2RvY3MvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfY29udGFpbmVyX1ZpZXdwb3J0X21qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfY29udHJvbGxlcl9Db21wb25lbnRfbWpzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY190b29sYmFyX0Jhc2VfbWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19jb250YWluZXJfUGFuZWxfbWpzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19mb3JtX2ZpZWxkX1NlYXItNjI1ZGU5XCIsXG5cdFx0XCJkb2NzX2FwcF9tanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vLiBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5tanMkIGluY2x1ZGU6IFtcXFxcXFxcXFxcXFwvXWFwcC5tanMkIGV4Y2x1ZGU6IFtcXFxcXFxcXFxcXFwvXW5vZGVfbW9kdWxlc1wiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImNvbnN0IE5lbyA9IGdsb2JhbFRoaXMuTmVvIHx8IHt9O1xuXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcblxuLyoqXG4gKiBDb25maWcgb2JqZWN0IGZvciB0aGUgbmVvLm1qcyBmcmFtZXdvcmsgd2hpY2ggd2lsbCBnZXQgcGFzc2VkIHRvIGFsbCB3b3JrZXJzXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGUgY29uZmlncywgZS5nLiBpbnNpZGUgdGhlIGluZGV4Lmh0bWwgb2YgeW91ciBhcHBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gKiBAbmFtZSBjb25maWdcbiAqIEB0eXBlIE9iamVjdFxuICovXG5jb25zdCBEZWZhdWx0Q29uZmlnID0ge1xuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBhcHBseSAnbmVvLWJvZHknIHRvIHRoZSBkb2N1bWVudC5ib2R5IGNsYXNzTGlzdFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwbHlCb2R5Q2xzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHlvdXIgYXBwLm1qcyBmaWxlLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBhcHBzIHRoZXJlIGlmIG5lZWRlZC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcFBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIGFwcFBhdGg6IG51bGwsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcbiAgICAgKiBAZGVmYXVsdCAnLi8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgYmFzZVBhdGg6ICcuLycsXG4gICAgLyoqXG4gICAgICogUGFzcyBhIHRva2VuIGluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgQ2VzaXVtSlMgbWFpbiB0aHJlYWQgYWRkb25cbiAgICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2Jsb2IvZGV2L3NyYy9tYWluL2FkZG9uL0Nlc2l1bUpTLm1qc1xuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuY2VzaXVtSnNUb2tlblxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgY2VzaXVtSnNUb2tlbjogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBlbnZpcm9ubWVudC4gVmFsaWQgdmFsdWVzOiAnZGV2ZWxvcG1lbnQnLCAnZGlzdC9kZXZlbG9wbWVudCcsICdkaXN0L3Byb2R1Y3Rpb24nXG4gICAgICogVGhpcyBjb25maWcgd2lsbCBnZXQgYXV0by1nZW5lcmF0ZWRcbiAgICAgKiBAZGVmYXVsdCAnZGlzdC9wcm9kdWN0aW9uJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbnZpcm9ubWVudFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGVudmlyb25tZW50OiAnZGlzdC9wcm9kdWN0aW9uJyxcbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIHlvdSBhcmUgdXNpbmcgdGhlIEdvb2dsZUFuYWx5dGljcyBtYWluIHRocmVhZCBhZGRvbiBvciB1c2VHb29nbGVBbmFseXRpY3M6IHRydWUsXG4gICAgICogeW91IGNhbiBjaGFuZ2UgdGhlIGd0YWcgaWQgaGVyZS4gUmVxdWlyZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgKGdoIHBhZ2VzKVxuICAgICAqIEBkZWZhdWx0ICdVQS0xNTM3MzQ0MDQtMSdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZ3RhZ0lkXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZ3RhZ0lkOiAnVUEtMTUzNzM0NDA0LTEnLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgb24gaHR0cHM6Ly9uZW9tanMuZ2l0aHViLmlvL3BhZ2VzL1xuICAgICAqID0+IHRvIHVzZSBsb2NhbCBpbWFnZXMgcGF0aHMgaW5zdGVhZCBvZiByYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNHaXRIdWJQYWdlc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0dpdEh1YlBhZ2VzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIHRoZSBOZW8gbWFpbiB0aHJlYWQgaW5zaWRlIGFuIGlmcmFtZSAoU2llc3RhIEJyb3dzZXIgSGFybmVzcylcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0luc2lkZVNpZXN0YVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0luc2lkZVNpZXN0YTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogZGVsYXkgaW4gbXMgZm9yIHRoZSB3b3JrZXIuTWFuYWdlcjpsb2FkQXBwbGljYXRpb24oKSBjYWxsXG4gICAgICogQGRlZmF1bHQgMjBcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9hZEFwcGxpY2F0aW9uRGVsYXlcbiAgICAgKiBAdHlwZSBOdW1iZXJcbiAgICAgKi9cbiAgICBsb2FkQXBwbGljYXRpb25EZWxheTogMjAsXG4gICAgLyoqXG4gICAgICogVXNlZCBieSBJbnRsLkRhdGVUaW1lRm9ybWF0LCBmb3IgZGV0YWlscyB0YWtlIGEgbG9vayBhdDpcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgICAqIEBkZWZhdWx0ICdkZWZhdWx0J1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2NhbGVcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBsb2NhbGU6ICdkZWZhdWx0JyxcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgbG9nIHRoZSBkZWx0YSB1cGRhdGVzIGluc2lkZSB0aGUgbWFpbiB0aHJlYWQocykgYXMgd2VsbCBhcyB0aGUgcmVxdWVzdEFuaW1hdGlvbiBmcmFtZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2dEZWx0YVVwZGF0ZXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgbG9nRGVsdGFVcGRhdGVzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBBZGQgYWRkb25zIGZvciB0aGUgbWFpbiB0aHJlYWRcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXM6IEFtQ2hhcnRzLCBBbmFseXRpY3NCeUdvb2dsZSwgRHJhZ0Ryb3AsIEhpZ2hsaWdodEpTLCBMb2NhbFN0b3JhZ2UsIE1hcGJveEdMLCBNYXJrZG93biwgU2llc3RhLCBTdHlsZXNoZWV0LCBXaW5kb3dQb3NpdGlvblxuICAgICAqIChzcmMvbWFpbi9hZGRvbikgY29udGFpbnMgYWxsIGZyYW1ld29yayByZWxhdGVkIG9wdGlvbnMuXG4gICAgICogWW91IGNhbiBhbHNvIGNyZWF0ZSB5b3VyIG93biBhZGRvbnMgd2l0aGluIHlvdXIgd29ya3NwYWNlIHNjb3BlLiBNYWtlIHN1cmUgdG8gcHV0IHRoZW0gaW5zaWRlICdzcmMvbWFpbi9hZGRvbi8nXG4gICAgICogYW5kIHByZWZpeCB0aGVtIHdpdGggJ1dTLycgaW5zaWRlIHlvdXIgbmVvLWNvbmZpZy5qc29uIGZpbGUuXG4gICAgICogRXhhbXBsZTogWydEcmFnRHJvcCcsICdTdHlsZXNoZWV0JywgJ1dTL015QWRkb24nXVxuICAgICAqIEBkZWZhdWx0IFsnRHJhZ0Ryb3AnLCdTdHlsZXNoZWV0J11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubWFpblRocmVhZEFkZG9uc1xuICAgICAqIEB0eXBlIFN0cmluZ1tdXG4gICAgICovXG4gICAgbWFpblRocmVhZEFkZG9uczogWydEcmFnRHJvcCcsICdTdHlsZXNoZWV0J10sXG4gICAgLyoqXG4gICAgICogUGFzcyB0aGUgVVJMIG9mIGEgSlNPTi1maWxlLCB3aGljaCBjb250YWlucyB0aGUgc2VydmljZXMgYW5kIG1ldGhvZHMgZnJvbSB5b3VyIGJhY2tlbmQsXG4gICAgICogd2hpY2ggeW91IHdhbnQgdG8gZXhwb3NlIHRvIHRoZSBjbGllbnQuXG4gICAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9wcm9qZWN0cy8zMlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVtb3Rlc0FwaVVybFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgcmVtb3Rlc0FwaVVybDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIHZpc3VhbGx5IHNob3cgdGhlIGFtb3VudCBvZiBkZWx0YSB1cGRhdGVzIHBlciBzZWNvbmQgdXNpbmcgdGhpcyBjb25maWcuXG4gICAgICogSXQgZXhwZWN0cyBhIGRvbSBub2RlIHdpdGggdGhlIGlkIFwibmVvLWRlbHRhLXVwZGF0ZXNcIiBhcyB0aGUgcmVuZGVyaW5nIHRhcmdldC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZW5kZXJDb3VudERlbHRhc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICByZW5kZXJDb3VudERlbHRhczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIHRoZW1lcyB5b3Ugd2FudCB0byB1c2UgaGVyZS4gVGhlIGZpcnN0IHRoZW1lIHdpbGwgZ2V0IGFwcGxpZWQuXG4gICAgICogSWYgY29uZmlnLnVzZUNzc1ZhcnMgPT09IHRydWUsIG90aGVyIHRoZW1lIHZhcmlhYmxlcyB3aWxsIGdldCBpbmNsdWRlZCBhcyB3ZWxsXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy50aGVtZXNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIHRoZW1lczogWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBzdGFuZGFsb25lIFNpZXN0YSBtb2R1bGUgdGVzdHMgPT4gcHJldmVudCByZWdpc3RlclJlbW90ZSB3b3JrZXIgbWVzc2FnZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51bml0VGVzdE1vZGVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdW5pdFRlc3RNb2RlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIENTUyB2YXJpYWJsZSBiYXNlZCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3NWYXJzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNzc1ZhcnM6IHRydWUsXG4gICAgLyoqXG4gICAgICogRXhwZXJpbWVudGFsIGZsYWcgaWYgYW4gb2Zmc2NyZWVuIGNhbnZhcyB3b3JrZXIgc2hvdWxkIGdldCBjcmVhdGVkLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUNhbnZhc1dvcmtlclxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VDYW52YXNXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgaWYgdmRvbSBpZHMgc2hvdWxkIGdldCBtYXBwZWQgaW50byBET00gZWxlbWVudCBpZHMuXG4gICAgICogZmFsc2Ugd2lsbCBjb252ZXJ0IHRoZW0gaW50byBhIFwiZGF0YS1uZW8taWRcIiBhdHRyaWJ1dGUuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VEb21JZHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRG9tSWRzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFRydWUgd2lsbCBhdXRvbWF0aWNhbGx5IGluY2x1ZGUgdGhlIHN0eWxlc2hlZXRcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUZvbnRBd2Vzb21lXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUZvbnRBd2Vzb21lOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEludGVuZGVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIHdoZXJlIHdlIG5lZWQgYW4gZWFzeSB3YXkgdG8gYWRkIEdBIHRvIGV2ZXJ5IGdlbmVyYXRlZCBhcHBcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VHb29nbGVBbmFseXRpY3NcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlR29vZ2xlQW5hbHl0aWNzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBUcnVlIHdpbGwgYWRkIHRoZSBTZXJ2aWNlV29ya2VyIG1haW4gdGhyZWFkIGFkZG9uIHRvIHN1cHBvcnQgY2FjaGluZyBvZiBhc3NldHMgKFBXQSlcbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlX1dvcmtlcl9BUElcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VTZXJ2aWNlV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVNlcnZpY2VXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgQXBwLCBEYXRhICYgVkRvbSBhcyBTaGFyZWRXb3JrZXJzLlxuICAgICAqIFNldCB0aGlzIG9uZSB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gY29ubmVjdCBtdWx0aXBsZSBtYWluIHRocmVhZHMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlU2hhcmVkV29ya2Vyc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VTaGFyZWRXb3JrZXJzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBBZGRzIGdsb2JhbCBkb20gZXZlbnQgbGlzdGVuZXJzIGZvciBtb2JpbGUgcmVsYXRlZCBldmVudHMgbGlrZSByb3RhdGUsIHN3aXBlLCB0YXBcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVRvdWNoRXZlbnRzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVRvdWNoRXZlbnRzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEZhbHNlIHdpbGwgY3JlYXRlIHRoZSB2ZG9tLkhlbHBlciB3aXRoaW4gdGhlIEFwcCB3b3JrZXIgKGV4cGVyaW1lbnRhbCEpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VWZG9tV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVZkb21Xb3JrZXI6IHRydWVcbn07XG5cbk9iamVjdC5hc3NpZ24oRGVmYXVsdENvbmZpZywge1xuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIHRvcCBsZXZlbCBuZW8ubWpzIHJlc291cmNlcyBmb2xkZXJcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3Jlc291cmNlcy8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlc291cmNlc1BhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICByZXNvdXJjZXNQYXRoOiBgJHtOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGh9cmVzb3VyY2VzL2AsXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYmFzZSBVUkwgZm9yIHdlYiB3b3JrZXIgZW50cnkgcG9pbnRzIChBcHAsIERhdGEsIFZkb20pXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdzcmMvd29ya2VyLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcud29ya2VyQmFzZVBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICB3b3JrZXJCYXNlUGF0aDogYCR7TmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRofXNyYy93b3JrZXIvYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0Q29uZmlnO1xuIiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XG5cbmNvbnN0IGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIG1vZHVsZSB0byBlbmhhbmNlIGNsYXNzZXMsIGNyZWF0ZSBpbnN0YW5jZXMgYW5kIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBAbW9kdWxlIE5lb1xuICogQHNpbmdsZXRvblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5iaW5kTWV0aG9kcyAgICAgICBhcyBiaW5kTWV0aG9kc1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jYXBpdGFsaXplICAgICAgICBhcyBjYXBpdGFsaXplXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0IGFzIGNyZWF0ZVN0eWxlT2JqZWN0XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlcyAgICAgIGFzIGNyZWF0ZVN0eWxlc1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5kZWNhbWVsICAgICAgICAgICBhcyBkZWNhbWVsXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQXJyYXkgICAgICAgICAgIGFzIGlzQXJyYXlcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNCb29sZWFuICAgICAgICAgYXMgaXNCb29sZWFuXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzRGVmaW5lZCAgICAgICAgIGFzIGlzRGVmaW5lZFxuICogQGJvcnJvd3MgTmVvLmNvcmUuQ29tcGFyZS5pc0VxdWFsICAgICAgICBhcyBpc0VxdWFsXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzTnVtYmVyICAgICAgICAgIGFzIGlzTnVtYmVyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ICAgICAgICAgIGFzIGlzT2JqZWN0XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzU3RyaW5nICAgICAgICAgIGFzIGlzU3RyaW5nXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLnRvQXJyYXkgICAgICAgICAgIGFzIHRvQXJyYXlcbiAqIEB0dXRvcmlhbCAwMV9Db25jZXB0XG4gKi9cbmxldCBOZW8gPSBnbG9iYWxUaGlzLk5lbyB8fCB7fTtcblxuTmVvID0gZ2xvYmFsVGhpcy5OZW8gPSBPYmplY3QuYXNzaWduKHtcbiAgICAvKipcbiAgICAgKiBBIG1hcCBjb250YWluaW5nIG50eXBlcyBhcyBrZXkgYW5kIE5lbyBjbGFzc2VzIG9yIHNpbmdsZXRvbnMgYXMgdmFsdWVzXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIE9iamVjdFxuICAgICAqL1xuICAgIG50eXBlTWFwOiB7fSxcbiAgICAvKipcbiAgICAgKiBOZWVkZWQgZm9yIE5lby5jcmVhdGUuIEZhbHNlIGZvciB0aGUgbWFpbiB0aHJlYWQsIHRydWUgZm9yIHRoZSBBcHAsIERhdGEgJiBWZG9tIHdvcmtlclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaW5zaWRlV29ya2VyOiB0eXBlb2YgRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbGx5IHVzZWQgYXQgdGhlIGVuZCBvZiBlYWNoIGNsYXNzIC8gbW9kdWxlIGRlZmluaXRpb25cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzIFRoZSBOZW8gY2xhc3MgdG8gYXBwbHkgY29uZmlncyB0b1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNsYXNzQ29uZmlnKGNscykge1xuICAgICAgICBsZXQgYmFzZUNmZyAgICAgICA9IG51bGwsXG4gICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gbnVsbCxcbiAgICAgICAgICAgIHByb3RvICAgICAgICAgPSBjbHMucHJvdG90eXBlIHx8IGNscyxcbiAgICAgICAgICAgIHByb3RvcyAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGNvbmZpZywgY3Rvciwgc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKGN0b3IuaGFzT3duUHJvcGVydHkoJ2NsYXNzQ29uZmlnQXBwbGllZCcpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgICAgICAgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IE5lby5jbG9uZShjdG9yLnN0YXRpY0NvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3Rvcy51bnNoaWZ0KHByb3RvKTtcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnICAgICAgID0gYmFzZUNmZyAgICAgICB8fCB7fTtcbiAgICAgICAgc3RhdGljQ29uZmlnID0gYmFzZVN0YXRpY0NmZyB8fCB7fTtcblxuICAgICAgICBwcm90b3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGN0b3IgPSBlbGVtZW50LmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgbGV0IGNmZyAgICAgICA9IGN0b3IuZ2V0Q29uZmlnICAgICAgPy4oKSB8fCB7fSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZz8uKCkgfHwge30sXG4gICAgICAgICAgICAgICAgbWl4aW5zO1xuXG4gICAgICAgICAgICBpZiAoY2ZnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zbGljZSgtMSkgPT09ICdfJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNmZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvR2VuZXJhdGVHZXRTZXQoZWxlbWVudCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgYXBwbHkgcHJvcGVydGllcyB3aGljaCBoYXZlIG5vIHNldHRlcnMgaW5zaWRlIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhvc2Ugd2lsbCBnZXQgYXBwbGllZCBvbiBjcmVhdGUgKE5lby5jb3JlLkJhc2UgLT4gaW5pdENvbmZpZylcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIU5lby5oYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ250eXBlJykpIHtcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRpY0NmZz8ub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFwcGx5TWl4aW5zKGN0b3IsIG1peGlucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgZmFsc2UsIGN0b3IucHJvdG90eXBlLm1peGlucykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2ZnLm9ic2VydmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGNmZy5taXhpbnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNmZyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XG5cbiAgICAgICAgICAgICFjb25maWcuc2luZ2xldG9uICYmIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIG1ldGhvZHMgZnJvbSBvbmUgbmFtZXNwYWNlIHRvIGFub3RoZXIgb25lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBhbGlhc2VzXG4gICAgICogTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgICAqICAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnXG4gICAgICogfSwgdHJ1ZSk7XG4gICAgICpcbiAgICAgKiAvLyBlLmcuIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgPT4gTmVvLmlzT2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lb3xOZW8uY29yZS5CYXNlfSB0YXJnZXQgVGhlIHRhcmdldCBjbGFzcyBvciBzaW5nbGV0b24gSW5zdGFuY2Ugb3IgTmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYmluZF0gc2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGJpbmQgbWV0aG9kcyB0byB0aGUgXCJmcm9tXCIgbmFtZXNwYWNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHlGcm9tTnModGFyZ2V0LCBuYW1lc3BhY2UsIGNvbmZpZywgYmluZCkge1xuICAgICAgICBsZXQgZm5OYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihjb25maWcpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcblxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIHRydWUpO1xuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIE5lby50eXBlT2YoZGVmYXVsdHMpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGVlcD1mYWxzZV0gU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNsb25lIG5lc3RlZCBvYmplY3RzIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2VdIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XG4gICAgICovXG4gICAgY2xvbmUob2JqLCBkZWVwPWZhbHNlLCBpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG91dDtcblxuICAgICAgICBzd2l0Y2ggKE5lby50eXBlT2Yob2JqKSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyYXknOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFkZWVwID8gWy4uLm9ial0gOiBbLi4ub2JqLm1hcCh2YWwgPT4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdEYXRlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShvYmoudmFsdWVPZigpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnTWFwJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTWFwKG9iaik7IC8vIHNoYWxsb3cgY29weVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdOZW9JbnN0YW5jZSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ09iamVjdCc6IHtcbiAgICAgICAgICAgICAgICBvdXQgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gIWRlZXAgPyB2YWx1ZSA6IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1NldCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNldChvYmopOyAvLyBzaGFsbG93IGNvcHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsQ29uZmlnIHdpdGhvdXQgdGhlIGlkXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGluc3RhbmNlXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IHRoZSBjbG9uZWQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbG9uZU5lb0luc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB7Li4uaW5zdGFuY2Uub3JpZ2luYWxDb25maWd9O1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lkO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGluc3RhbmNlLmNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlIE5lby5jcmVhdGUoKSBpbnN0ZWFkIG9mIFwibmV3XCIgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhbGwgTmVvIGNsYXNzZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0Jhc2UubWpzJztcbiAgICAgKlxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgY2xhc3NOYW1lOiAnTmVvLmJ1dHRvbi5CYXNlJyxcbiAgICAgKiAgICAgaWNvbkNscyAgOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8TmVvLmNvcmUuQmFzZX0gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V8bnVsbH0gVGhlIG5ldyBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZykge1xuICAgICAgICBsZXQgdHlwZSA9IE5lby50eXBlT2YoY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdOZW9DbGFzcycpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzTmFtZSB8fCBjb25maWcubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKCk7XG5cbiAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0KGNvbmZpZyk7XG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2Uub25BZnRlckNvbnN0cnVjdGVkKCk7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZW1wdHlGbigpIHt9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgc2V0IG1ldGhvZCBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBrZXkgaW5zaWRlIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG8gVGhlIHRvcCBsZXZlbCBwcm90b3R5cGUgb2YgYSBjbGFzc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIHByb3BlcnR5IGtleSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkge1xuICAgICAgICBsZXQgZGVzY3JpcHRvcjtcblxuICAgICAgICB3aGlsZSAocHJvdG8uX19wcm90b19fKSB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZWVwLW1lcmdlcyBhIHNvdXJjZSBvYmplY3QgaW50byBhIHRhcmdldCBvYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgbWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE5lby50eXBlT2YodGFyZ2V0KSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoTmVvLnR5cGVPZihzb3VyY2Vba2V5XSkgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8ubWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdpdmVuIG9yIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5ucygnTmVvLmJ1dHRvbi5CYXNlJywgdHJ1ZSk7XG4gICAgICogLy8gPT5cbiAgICAgKiAvLyBnbG9iYWxUaGlzLk5lbyAgICAgICAgICAgICA9IGdsb2JhbFRoaXMuTmVvICAgICAgICAgICAgIHx8IHt9O1xuICAgICAqIC8vIGdsb2JhbFRoaXMuTmVvLmJ1dHRvbiAgICAgID0gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uICAgICAgfHwge307XG4gICAgICogLy8gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uLkJhc2UgPSBnbG9iYWxUaGlzLk5lby5idXR0b24uQmFzZSB8fCB7fTtcbiAgICAgKiAvLyByZXR1cm4gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uLkJhc2U7XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjcmVhdGVdIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uIGV4aXN0aW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zKG5hbWVzLCBjcmVhdGUsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IGdsb2JhbFRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKHtcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG50eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XG4gICAgICogQHNlZSB7QGxpbmsgbW9kdWxlOk5lby5jcmVhdGUgY3JlYXRlfVxuICAgICAqL1xuICAgIG50eXBlKG50eXBlLCBjb25maWcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIGRlZmluZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIG50eXBlIHByb3BlcnR5LiAnICsgY29uZmlnLm50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG50eXBlID0gY29uZmlnLm50eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XG5cbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHR5cGVPZihpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBpdGVtKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcm90b3R5cGU/LmNvbnN0cnVjdG9yLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdOZW9DbGFzcyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIGl0ZW0gaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnTmVvSW5zdGFuY2UnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxufSwgTmVvKTtcblxuLyoqXG4gKiBMaXN0IG9mIGNsYXNzIHByb3BlcnRpZXMgd2hpY2ggYXJlIG5vdCBzdXBwb3NlZCB0byBnZXQgbWl4ZWQgaW50byBvdGhlciBjbGFzc2VzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBpZ25vcmVNaXhpbiA9IFtcbiAgICAnX25hbWUnLFxuICAgICdjbGFzc0NvbmZpZ0FwcGxpZWQnLFxuICAgICdjbGFzc05hbWUnLFxuICAgICdjb25zdHJ1Y3RvcicsXG4gICAgJ2lzQ2xhc3MnLFxuICAgICdtaXhpbicsXG4gICAgJ250eXBlJyxcbiAgICAnb2JzZXJ2YWJsZScsXG4gICAgJ3JlZ2lzdGVyVG9HbG9iYWxOcydcbl07XG5cbi8qKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1peGluc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYXBwbHlNaXhpbnMoY2xzLCBtaXhpbnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICB9XG5cbiAgICBsZXQgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgbGVuICAgICAgICAgID0gbWl4aW5zLmxlbmd0aCxcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXG4gICAgICAgIG1peGluLCBtaXhpbkNscywgbWl4aW5Qcm90bztcblxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XG4gICAgICAgIG1peGluID0gbWl4aW5zW2ldO1xuXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW4ucHJvdG90eXBlO1xuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpblByb3RvLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gbWl4aW4gYW4gdW5kZWZpbmVkIGNsYXNzOiAnICsgbWl4aW4gKyAnLCAnICsgY2xzLnByb3RvdHlwZS5jbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpbik7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW5DbHMucHJvdG90eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UobWl4UmVkdWNlKG1peGluQ2xzKSwgbWl4aW5DbGFzc2VzKTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpblByb3RvKS5mb3JFYWNoKG1peGluUHJvcGVydHkoY2xzLnByb3RvdHlwZSwgbWl4aW5Qcm90bykpO1xuICAgIH1cblxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzOyAvLyB0b2RvOiB3ZSBzaG91bGQgZG8gYSBkZWVwIG1lcmdlXG59XG5cbi8qKlxuICogQ3JlYXRlcyBnZXQgLyBzZXQgbWV0aG9kcyBmb3IgY2xhc3MgY29uZmlncyBlbmRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcHJpdmF0ZVxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGF1dG9HZW5lcmF0ZUdldFNldChwcm90bywga2V5KSB7XG4gICAgaWYgKE5lby5oYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSkge1xuICAgICAgICB0aHJvdygnQ29uZmlnICcgKyBrZXkgKyAnXyAoJyArIHByb3RvLmNsYXNzTmFtZSArICcpIGFscmVhZHkgaGFzIGEgc2V0IG1ldGhvZCwgdXNlIGJlZm9yZUdldCwgYmVmb3JlU2V0ICYgYWZ0ZXJTZXQgaW5zdGVhZCcpO1xuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXSkge1xuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXVtrZXldID0ge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVHZXQgPSBgYmVmb3JlR2V0JHtrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKX1gLFxuICAgICAgICAgICAgICAgICAgICBoYXNOZXdLZXkgPSBtZVtjb25maWdTeW1ib2xdLmhhc093blByb3BlcnR5KGtleSksXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleSAgICA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgID0gaGFzTmV3S2V5ID8gbmV3S2V5IDogbWVbJ18nICsga2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi52YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhhc05ld0tleSkge1xuICAgICAgICAgICAgICAgICAgICBtZVtrZXldID0gdmFsdWU7IC8vIHdlIGRvIHdhbnQgdG8gdHJpZ2dlciB0aGUgc2V0dGVyID0+IGJlZm9yZVNldCwgYWZ0ZXJTZXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVsnXycgKyBrZXldOyAvLyByZXR1cm4gdGhlIHZhbHVlIHBhcnNlZCBieSB0aGUgc2V0dGVyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlR2V0XSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIF9rZXkgICAgICA9ICdfJyArIGtleSxcbiAgICAgICAgICAgICAgICAgICAgdUtleSAgICAgID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNldCA9ICdiZWZvcmVTZXQnICsgdUtleSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZXQgID0gJ2FmdGVyU2V0JyAgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSAgPSBtZVtfa2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5IHNldCBjYWxsIGhhcyB0byBkZWxldGUgdGhlIG1hdGNoaW5nIHN5bWJvbFxuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHN0b3JlIHRoZSB2YWx1ZSBiZWZvcmUgdGhlIGJlZm9yZVNldCBtb2RpZmljYXRpb24gYXMgd2VsbCxcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBjb3VsZCBnZXQgcHVsbGVkIGJ5IG90aGVyIGJlZm9yZVNldCBtZXRob2RzIG9mIGRpZmZlcmVudCBjb25maWdzXG4gICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYmVmb3JlU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZVNldF0odmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGV5IGRvbid0IHJldHVybiBhIHZhbHVlLCB0aGF0IG1lYW5zIG5vIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVbX2tleV0gPSBvbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFOZW8uaXNFcXVhbCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2FmdGVyU2V0XT8uKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFmdGVyU2V0Q29uZmlnPy4oa2V5LCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIGtleSwgTmVvW2dldFNldENhY2hlXVtrZXldKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGNsYXNzIG5hbWUgZXhpc3RzIGluc2lkZSB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXhpc3RzKGNsYXNzTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgIH0sIGdsb2JhbFRoaXMpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbWl4aW5Qcm90b1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWl4aW5Qcm9wZXJ0eShwcm90bywgbWl4aW5Qcm90bykge1xuICAgIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKH5pZ25vcmVNaXhpbi5pbmRleE9mKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvdG9ba2V5XT8uX2Zyb20pIHtcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWl4aW4gc2V0IG11bHRpcGxlIHRpbWVzIG9yIGFscmVhZHkgZGVmaW5lZCBvbiBhIEJhc2UgQ2xhc3MnLCBwcm90by5jbGFzc05hbWUsIG1peGluUHJvdG8uY2xhc3NOYW1lLCBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgJHtwcm90by5jbGFzc05hbWV9OiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJHttaXhpblByb3RvLmNsYXNzTmFtZX0sICR7cHJvdG9ba2V5XS5fZnJvbX0pID0+ICR7a2V5fWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm90b1trZXldID0gbWl4aW5Qcm90b1trZXldO1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSkuX2Zyb20gPSBtaXhpblByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAodHlwZW9mIHByb3RvW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHByb3RvW2tleV0uX25hbWUgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSBtaXhpbkNsc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWl4UmVkdWNlKG1peGluQ2xzKSB7XG4gICAgcmV0dXJuIChwcmV2LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XSA9IGlkeCAhPT0gYXJyLmxlbmd0aCAtMSA/IHByZXZbY3VycmVudF0gfHwge30gOiBtaXhpbkNscztcbiAgICB9O1xufVxuXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcblxuTmVvLmFzc2lnbkRlZmF1bHRzKE5lby5jb25maWcsIERlZmF1bHRDb25maWcpO1xuXG5leHBvcnQgZGVmYXVsdCBOZW87XG4iLCJpbXBvcnQgQ29yZUJhc2UgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBGaWx0ZXIgICAgIGZyb20gJy4vRmlsdGVyLm1qcyc7XG5pbXBvcnQgTG9nZ2VyICAgICBmcm9tICcuLi91dGlsL0xvZ2dlci5tanMnO1xuaW1wb3J0IFNvcnRlciAgICAgZnJvbSAnLi9Tb3J0ZXIubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgZnJvbSAnLi4vY29yZS9VdGlsLm1qcyc7XG5cbmNvbnN0IGNvdW50TXV0YXRpb25zICAgPSBTeW1ib2woJ2NvdW50TXV0YXRpb25zJyksXG4gICAgICBpc0ZpbHRlcmVkICAgICAgID0gU3ltYm9sKCdpc0ZpbHRlcmVkJyksXG4gICAgICBpc1NvcnRlZCAgICAgICAgID0gU3ltYm9sKCdpc1NvcnRlZCcpLFxuICAgICAgc2lsZW50VXBkYXRlTW9kZSA9IFN5bWJvbCgnc2lsZW50VXBkYXRlTW9kZScpLFxuICAgICAgdG9BZGRBcnJheSAgICAgICA9IFN5bWJvbCgndG9BZGRBcnJheScpLFxuICAgICAgdG9SZW1vdmVBcnJheSAgICA9IFN5bWJvbCgndG9SZW1vdmVBcnJheScpLFxuICAgICAgdXBkYXRpbmdJbmRleCAgICA9IFN5bWJvbCgndXBkYXRpbmdJbmRleCcpO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29sbGVjdGlvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gZmlsdGVyaW5nIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgZmlyc3QgdGltZSwgYWxsSXRlbXMgd2lsbCBiZWNvbWUgYSBuZXcgY29sbGVjdGlvbiBmb3IgdGhlIHVuZmlsdGVyZWRcbiAgICAgICAgICogc3RhdGUsIHVzaW5nIHRoaXMgaWQgYXMgdGhlIHNvdXJjZUNvbGxlY3Rpb25JZFxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfG51bGx9IGFsbEl0ZW1zPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgYWxsSXRlbXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNvcnQgdGhlIGNvbGxlY3Rpb24gaXRlbXMgd2hlbiBhZGRpbmcgLyBpbnNlcnRpbmcgbmV3IG9uZXNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b1NvcnQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1NvcnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2UgJ3ByaW1pdGl2ZScgZm9yIGRlZmF1bHQgZmlsdGVycywgdXNlICdhZHZhbmNlZCcgZm9yIGZpbHRlcnMgdXNpbmcgYSBmaWx0ZXJCeSBtZXRob2RcbiAgICAgICAgICogd2hpY2ggbmVlZCB0byBpdGVyYXRlIG92ZXIgb3RoZXIgY29sbGVjdGlvbiBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGZpbHRlck1vZGU9J3ByaW1pdGl2ZSdcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlck1vZGU6ICdwcmltaXRpdmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gQXJyYXkgY29udGFpbmluZyBOZW8udXRpbC5GaWx0ZXIgY29uZmlnIG9iamVjdHMgb3IgaW5zdGFuY2VzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBmaWx0ZXJzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gaXRlbXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUoISkga2V5IHByb3BlcnR5IG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpbmcgbmV3IGl0ZW1zIHdpdGhvdXQgYW4gaWQgKGtleVByb3BlcnR5KSB3aWxsIHVzZSBhIG5lZ2F0aXZlIGluZGV4LCB3aGljaCB3aWxsIGRlY3JlYXNlIGJ5IC0xXG4gICAgICAgICAqIGZvciBlYWNoIG5ldyBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0ga2V5UHJvcGVydHlJbmRleD0tMVxuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHlJbmRleDogLTEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG1hcCBjb250YWluaW5nIHRoZSBrZXkgJiByZWZlcmVuY2Ugb2YgZWFjaCBjb2xsZWN0aW9uIGl0ZW0gZm9yIGZhc3RlciBhY2Nlc3NcbiAgICAgICAgICogQG1lbWJlciB7TWFwfSBtYXBfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1hcF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBkaXJlY3Rpb25zIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0RGlyZWN0aW9ucz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNvcnREaXJlY3Rpb25zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZXJuYWwgQXJyYXkgb2YgdGhlIHNvcnQgcHJvcGVydGllcyBmb3IgZmFzdGVyIGFjY2Vzc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydFByb3BlcnRpZXM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0UHJvcGVydGllczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuU29ydGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIHNvcnRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiBhbm90aGVyIGNvbGxlY3Rpb24gaW5zdGFuY2UgdG8gdXNlIGFzIHRoaXMgZGF0YSBzb3VyY2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNvdXJjZUlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VJZF86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzeW1ib2xDb25maWcgPSB7ZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlfTtcblxuICAgICAgICBtZS5pdGVtcyA9IG1lLml0ZW1zIHx8IFtdO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XG4gICAgICAgICAgICBbY291bnRNdXRhdGlvbnNdICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBmYWxzZX0sXG4gICAgICAgICAgICBbaXNGaWx0ZXJlZF0gICAgICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBmYWxzZX0sXG4gICAgICAgICAgICBbaXNTb3J0ZWRdICAgICAgICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBmYWxzZX0sXG4gICAgICAgICAgICBbc2lsZW50VXBkYXRlTW9kZV06IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBmYWxzZX0sXG4gICAgICAgICAgICBbdG9BZGRBcnJheV0gICAgICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBbXX0sXG4gICAgICAgICAgICBbdG9SZW1vdmVBcnJheV0gICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiBbXX0sXG4gICAgICAgICAgICBbdXBkYXRpbmdJbmRleF0gICA6IHsuLi5zeW1ib2xDb25maWcsIHZhbHVlOiAwfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWUuYXV0b1NvcnQgJiYgbWUuX3NvcnRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWUuZG9Tb3J0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBsZW5ndGggb2YgdGhlIGNvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW0gVGhlIGl0ZW0ocykgdG8gYWRkXG4gICAgICogQHJldHVybnMge09iamVjdFtdfSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBhZGRlZCBpdGVtc1xuICAgICAqL1xuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwLCBudWxsLCBpdGVtKS5hZGRlZEl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGZpbHRlci5vbignY2hhbmdlJywgbWUub25GaWx0ZXJDaGFuZ2UsIG1lKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2xkVmFsdWUgJiYgbWUuZmlsdGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAga2V5UHJvcGVydHkgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICAgICAgbGVuICAgICAgICAgPSB2YWx1ZS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaXRlbTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1ba2V5UHJvcGVydHldLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFwcGx5U29ydGVyQ29uZmlncygpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goc29ydGVyID0+IHtcbiAgICAgICAgICAgIGlmIChzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNvcnRlci5vbignY2hhbmdlJywgbWUub25Tb3J0ZXJDaGFuZ2UsIG1lKTtcbiAgICAgICAgICAgICAgICBzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2xkVmFsdWUgJiYgbWUuYXV0b1NvcnQgJiYgbWUuZG9Tb3J0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3VyY2VJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBOZW8uZ2V0KHZhbHVlKTtcblxuICAgICAgICAgICAgbWUuX2l0ZW1zID0gWy4uLnNvdXJjZS5faXRlbXNdO1xuICAgICAgICAgICAgbWUubWFwICAgID0gbmV3IE1hcChzb3VyY2UubWFwKTsgLy8gY3JlYXRlcyBhIGNsb25lIG9mIHRoZSBvcmlnaW5hbCBtYXBcblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG11dGF0ZTogbWUub25NdXRhdGUsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc291cmNlLm9uKGxpc3RlbmVyc0NvbmZpZyk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlclNldFNvdXJjZUlkJywgc291cmNlKTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldChvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnVuKGxpc3RlbmVyc0NvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgc29ydCBwcm9wZXJ0eSAmIGRpcmVjdGlvbiBtdWx0aXBsaWVyIG9mIGVhY2ggc29ydGVyIGluc2lkZSAyIGFycmF5cyBmb3IgZmFzdGVyIGFjY2VzcyB3aGVuIHNvcnRpbmdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXBwbHlTb3J0ZXJDb25maWdzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNvcnREaXJlY3Rpb25zID0gW107XG4gICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzID0gW107XG5cbiAgICAgICAgbWUuc29ydGVycy5mb3JFYWNoKHNvcnRlciA9PiB7Ly9jb25zb2xlLmxvZygnZm9yRWFjaCcsIHNvcnRlcik7XG4gICAgICAgICAgICBtZS5zb3J0RGlyZWN0aW9ucy5wdXNoKHNvcnRlci5kaXJlY3Rpb25NdWx0aXBsaWVyKTtcbiAgICAgICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzLnB1c2goc29ydGVyLnByb3BlcnR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IG9sZFZhbHVlICYmIG9sZFZhbHVlLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBrZXkub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IGtleS5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDoga2V5LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5vcGVyYXRvciA9PT0gKGtleS5vcGVyYXRvciB8fCAnPT09JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBrZXkucHJvcGVydHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnZhbHVlICAgID09PSBrZXkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IE5lby5jcmVhdGUoRmlsdGVyLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBvbGRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgbGVuLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGtleS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01hcHxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TWFwfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldE1hcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICF2YWx1ZSA/IG5ldyBNYXAoKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U29ydGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZT8ubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBoYXNNYXRjaCwgaTtcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGkgICAgICAgID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBrZXkuZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDoga2V5LnByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob2xkVmFsdWVbaV0ucHJvcGVydHkgPT09IGtleS5wcm9wZXJ0eSAmJiBvbGRWYWx1ZVtpXS5kaXJlY3Rpb24gPT09IGtleS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShTb3J0ZXIsIGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IG9sZFZhbHVlW2ldO1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2xkVmFsdWU/LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGtleS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjYWNoZVVwZGF0ZShvcHRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWNoZVVwZGF0ZScsIG9wdHMsIHRoaXNbdG9BZGRBcnJheV0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID0gbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICBpbmRleCwgdG9BZGRNYXAsIHRvUmVtb3ZlTWFwO1xuXG4gICAgICAgIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcbiAgICAgICAgICAgIHRvQWRkTWFwICAgID0gbWVbdG9BZGRBcnJheV0gICAubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgdG9SZW1vdmVNYXAgPSBtZVt0b1JlbW92ZUFycmF5XS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG5cbiAgICAgICAgICAgIG9wdHMuYWRkZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvUmVtb3ZlTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b0FkZE1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgb3B0cy5yZW1vdmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPSB0b0FkZE1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA+IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b0FkZEFycmF5XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZW1vdmVNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBhbmQgY2xlYXJzIHRoZSBtYXBcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgdGhpcy5nZXRDb3VudCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgZmlsdGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzPWZhbHNlXVxuICAgICAqL1xuICAgIGNsZWFyRmlsdGVycyhyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHJlc3RvcmVPcmlnaW5hbEZpbHRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5maWx0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgaXRlbXMgYW5kIGNsZWFycyB0aGUgbWFwLCB3aXRob3V0IGZpcmluZyBhIG11dGF0ZSBldmVudFxuICAgICAqL1xuICAgIGNsZWFyU2lsZW50KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLl9pdGVtcy5zcGxpY2UoMCwgbWUuZ2V0Q291bnQoKSk7XG4gICAgICAgIG1lLm1hcC5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgY3VycmVudCBzb3J0ZXJzIGFuZCBvcHRpb25hbGx5IHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBvbmVzIGluIGNhc2UgdGhleSBleGlzdGVkLlxuICAgICAqIFdpdGhvdXQgcmVzdG9yZUluaXRpYWxTdGF0ZSBhcyB0cnVlIHRoaXMgd2lsbCBub3QgYWZmZWN0IHRoZSBjdXJyZW50IHNvcnRpbmcgb2YgdGhpcyBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3RvcmVPcmlnaW5hbFNvcnRlcnM9ZmFsc2VdXG4gICAgICovXG4gICAgY2xlYXJTb3J0ZXJzKHJlc3RvcmVPcmlnaW5hbFNvcnRlcnMpIHtcbiAgICAgICAgdGhpcy5zb3J0ZXJzID0gcmVzdG9yZU9yaWdpbmFsU29ydGVycyA/IE5lby5jbG9uZSh0aGlzLm9yaWdpbmFsQ29uZmlnLnNvcnRlcnMsIHRydWUsIHRydWUpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gVGhlIGNsb25lZCBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbmZpZyAgPSBOZW8uY2xvbmUobWUub3JpZ2luYWxDb25maWcsIHRydWUpLFxuICAgICAgICAgICAgZmlsdGVycyA9IG1lLl9maWx0ZXJzIHx8IFtdLFxuICAgICAgICAgICAgc29ydGVycyA9IG1lLl9zb3J0ZXJzIHx8IFtdO1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5zb3J0ZXJzO1xuXG4gICAgICAgIGlmIChtZS5faXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uZmlnLml0ZW1zID0gWy4uLm1lLl9pdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuZmlsdGVycyA9IFtdO1xuICAgICAgICBjb25maWcuc29ydGVycyA9IFtdO1xuXG4gICAgICAgIC8vIHRvZG86IGZpbHRlcnMgJiBzb3J0ZXJzIHNob3VsZCBwdXNoIHRoZWlyIGN1cnJlbnQgc3RhdGUgYW5kIG5vdCB0aGUgb3JpZ2luYWwgb25lXG5cbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcikge1xuICAgICAgICAgICAgY29uZmlnLmZpbHRlcnMucHVzaChmaWx0ZXIub3JpZ2luYWxDb25maWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb3J0ZXJzLmZvckVhY2goZnVuY3Rpb24oc29ydGVyKSB7XG4gICAgICAgICAgICBjb25maWcuc29ydGVycy5wdXNoKHNvcnRlci5vcmlnaW5hbENvbmZpZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKEJhc2UsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBtYXAgJiBpdGVtcyBhcnJheSBiZWZvcmUgdGhlIHN1cGVyIGNhbGxcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLl9pdGVtcy5zcGxpY2UoMCwgbWUuX2l0ZW1zLmxlbmd0aCk7XG4gICAgICAgIG1lLm1hcC5jbGVhcigpO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGl0ZW1zPXRoaXMuX2l0ZW1zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaWxlbnQ9ZmFsc2VcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZG9Tb3J0KGl0ZW1zPXRoaXMuX2l0ZW1zLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHByZXZpb3VzSXRlbXMgICAgID0gWy4uLml0ZW1zXSxcbiAgICAgICAgICAgIHNvcnRlcnMgICAgICAgICAgID0gbWUuc29ydGVycyxcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zICAgID0gbWUuc29ydERpcmVjdGlvbnMsXG4gICAgICAgICAgICBzb3J0UHJvcGVydGllcyAgICA9IG1lLnNvcnRQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY291bnRTb3J0ZXJzICAgICAgPSBzb3J0UHJvcGVydGllcy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc1NvcnRCeU1ldGhvZCAgID0gZmFsc2UsXG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm1WYWx1ZSA9IGZhbHNlLFxuICAgICAgICAgICAgaSwgbWFwcGVkSXRlbXMsIG9iaiwgc29ydGVyLCBzb3J0UHJvcGVydHksIHNvcnRWYWx1ZTtcblxuICAgICAgICBpZiAoY291bnRTb3J0ZXJzID4gMCkge1xuICAgICAgICAgICAgc29ydGVycy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zb3J0QnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnVzZVRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGhhc1NvcnRCeU1ldGhvZCkge1xuICAgICAgICAgICAgICAgIG1lLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnRTb3J0ZXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlciAgICA9IHNvcnRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0VmFsdWUgPSBzb3J0ZXJbc29ydGVyLnNvcnRCeSA/ICdzb3J0QnknIDogJ2RlZmF1bHRTb3J0QnknXShhLCBiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnQjU29ydGluZ193aXRoX21hcFxuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtpbmRleH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlcnNbaV0udXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3NvcnRQcm9wZXJ0aWVzW2ldXSA9IHNvcnRlcnNbaV0udHJhbnNmb3JtVmFsdWUoaXRlbVtzb3J0UHJvcGVydGllc1tpXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0UHJvcGVydHkgPSBzb3J0UHJvcGVydGllc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFbc29ydFByb3BlcnR5XSA+IGJbc29ydFByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxICogc29ydERpcmVjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPCBiW3NvcnRQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiBzb3J0RGlyZWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IG1hcHBlZEl0ZW1zLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbZWwuaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc1NvcnRlZF0gPSBjb3VudFNvcnRlcnMgPiAwO1xuXG4gICAgICAgIGlmICghc2lsZW50ICYmIG1lW3VwZGF0aW5nSW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdzb3J0Jywge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBtZS5faXRlbXMsXG4gICAgICAgICAgICAgICAgcHJldmlvdXNJdGVtcyxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lcyB0aGUgY29sbGVjdGlvbiBldmVudHMuXG4gICAgICogSWYgeW91IHN0YXJ0ZWQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgZmxhZyxcbiAgICAgKiB5b3UgbXVzdCB1c2UgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gZm9yIHRoaXMgY2FsbC5cbiAgICAgKiBVc2luZyB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSB3aWxsIG5vdCBmaXJlIGEgbXV0YXRpb24gZXZlbnQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZW5kU2lsZW50VXBkYXRlTW9kZV1cbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI3N0YXJ0VXBkYXRlIHN0YXJ0VXBkYXRlfVxuICAgICAqL1xuICAgIGVuZFVwZGF0ZShlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPiAwKSB7XG4gICAgICAgICAgICBtZVt1cGRhdGluZ0luZGV4XS0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIG1lW3NpbGVudFVwZGF0ZU1vZGVdID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5maXJlKCdtdXRhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBtZVt0b0FkZEFycmF5XSxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IG1lW3RvUmVtb3ZlQXJyYXldXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0gICAuc3BsaWNlKDAsIG1lW3RvQWRkQXJyYXldICAgLmxlbmd0aCk7XG4gICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5zcGxpY2UoMCwgbWVbdG9SZW1vdmVBcnJheV0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgcmVtb3RlIGZpbHRlcmluZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICBleHBvcnRGaWx0ZXJzKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJzID0gW10sXG4gICAgICAgICAgICBmaWx0ZXI7XG5cbiAgICAgICAgbWUuZmlsdGVycz8uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZmlsdGVyID0ga2V5LmV4cG9ydCgpO1xuXG4gICAgICAgICAgICBmaWx0ZXIgJiYgZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgcmVtb3RlIHNvcnRpbmdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgZXhwb3J0U29ydGVycygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgc29ydGVycyA9IFtdLFxuICAgICAgICAgICAgc29ydGVyO1xuXG4gICAgICAgIG1lLnNvcnRlcnM/LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHNvcnRlciA9IGtleS5leHBvcnQoKTtcblxuICAgICAgICAgICAgc29ydGVyICYmIHNvcnRlcnMucHVzaChzb3J0ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc29ydGVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZmlsdGVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgICAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgY291bnRBbGxGaWx0ZXJzID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBjb3VudEZpbHRlcnMgICAgPSAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgID0gbWUuYWxsSXRlbXM/Ll9pdGVtcyB8fCBtZS5faXRlbXMsXG4gICAgICAgICAgICBpICAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgY291bnRJdGVtcyAgICAgID0gaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyAgID0gW10sXG4gICAgICAgICAgICBuZWVkc1NvcnRpbmcgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIG9sZEl0ZW1zICAgICAgICA9IFsuLi5tZS5faXRlbXNdLFxuICAgICAgICAgICAgY29uZmlnLCBpc0luY2x1ZGVkLCBpdGVtLCBqLCB0bXBJdGVtcztcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50QWxsRmlsdGVyczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcnNbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb3VudEZpbHRlcnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudEZpbHRlcnMgPT09IDAgJiYgbWUuYWxsSXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChtZS5zb3J0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZWVkc1NvcnRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5jbGVhclNpbGVudCgpO1xuXG4gICAgICAgICAgICBtZS5pdGVtcyA9IFsuLi5tZS5hbGxJdGVtcy5faXRlbXNdO1xuICAgICAgICAgICAgbWUubWFwLnNldCguLi5tZS5hbGxJdGVtcy5tYXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFtZS5hbGxJdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHsuLi5tZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XG5cbiAgICAgICAgICAgICAgICBtZS5hbGxJdGVtcyA9IE5lby5jcmVhdGUoQmFzZSwge1xuICAgICAgICAgICAgICAgICAgICAuLi5OZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydHk6IG1lLmtleVByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZCAgIDogbWUuaWRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZCBjb2xsZWN0aW9uJywgbWUuYWxsSXRlbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5tYXAuY2xlYXIoKTtcblxuICAgICAgICAgICAgaWYgKG1lLmZpbHRlck1vZGUgPT09ICdwcmltaXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgZm9yIGxvb3BzIG9uIHB1cnBvc2UgLT4gcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGogICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoaXRlbSwgaXRlbXMsIGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1bbWUua2V5UHJvcGVydHldLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHNpbGVudCB1cGRhdGUsIHRoZSBtYXAgaXMgYWxyZWFkeSBpbiBwbGFjZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLml0ZW1zXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcnNbal0uaXNGaWx0ZXJlZChmaWx0ZXJlZEl0ZW1zW2ldLCBmaWx0ZXJlZEl0ZW1zLCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGZpbHRlcmVkSXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IFsuLi50bXBJdGVtc107XG4gICAgICAgICAgICAgICAgICAgIGNvdW50SXRlbXMgICAgPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHVwZGF0ZSB0aGUgbWFwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc0ZpbHRlcmVkXSA9IGNvdW50RmlsdGVycyAhPT0gMDtcblxuICAgICAgICBpZiAobmVlZHNTb3J0aW5nKSB7XG4gICAgICAgICAgICBtZS5kb1NvcnQobWUuaXRlbXMsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZmlyZSgnZmlsdGVyJywge1xuICAgICAgICAgICAgaXNGaWx0ZXJlZDogbWVbaXNGaWx0ZXJlZF0sXG4gICAgICAgICAgICBpdGVtcyAgICAgOiBtZS5pdGVtcyxcbiAgICAgICAgICAgIG9sZEl0ZW1zLFxuICAgICAgICAgICAgc2NvcGUgICAgIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgaXRlbXMgd2hpY2ggbWF0Y2ggdGhlIHByb3BlcnR5IGFuZCB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IFt2YWx1ZV0gT3B0aW9uYWwsIGluIGNhc2UgdGhlIGZpcnN0IHBhcmFtIGlzIGFuIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhbiBlbXB0eSBBcnJheSBpbiBjYXNlIG5vIGl0ZW1zIGFyZSBmb3VuZFxuICAgICAqL1xuICAgIGZpbmQocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGlzT2JqZWN0UHJvcGVydHkgPSBOZW8uaXNPYmplY3QocHJvcGVydHkpLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSwgcHJvcGVydGllc0FycmF5LCBwcm9wZXJ0aWVzTGVuZ3RoO1xuXG4gICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMocHJvcGVydHkpO1xuICAgICAgICAgICAgcHJvcGVydGllc0xlbmd0aCA9IHByb3BlcnRpZXNBcnJheS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XG5cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gcHJvcGVydGllc0xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW1bcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbiBmb3Igd2hpY2ggdGhlIHBhc3NlZCBmdW5jdGlvbiByZXR1cm5zIHRydWVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIGl0ZW0gaW5zaWRlIHRoZSBzdGFydC1lbmQgcmFuZ2UuIFJldHVybiB0cnVlIGZvciBhIG1hdGNoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmbi5pdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGU9dGhpc10gVGhlIHNjb3BlIGluIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gZ2V0cyBleGVjdXRlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmQ9dGhpcy5nZXRDb3VudCgpXSBUaGUgZW5kIGluZGV4ICh1cCB0bywgbGFzdCB2YWx1ZSBleGNsdWRlZClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcbiAgICAgKi9cbiAgICBmaW5kQnkoZm4sIHNjb3BlPXRoaXMsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zID0gW10sXG4gICAgICAgICAgICBpICAgICA9IHN0YXJ0IHx8IDAsXG4gICAgICAgICAgICBsZW4gICA9IGVuZCAgIHx8IG1lLmdldENvdW50KCk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGZuLmNhbGwoc2NvcGUsIG1lLml0ZW1zW2ldKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gobWUuaXRlbXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGl0ZW0gaW5zaWRlIHRoZSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHRvIHRoZSBrZXksIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBpcyBub25lLlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGZvciBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0QXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2luZGV4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGludGVybmFsIGl0ZW1zIGFycmF5XG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldENvdW50TXV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tjb3VudE11dGF0aW9uc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgbWF0Y2hpbmcgZmlsdGVyIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkZpbHRlcnxudWxsfVxuICAgICAqL1xuICAgIGdldEZpbHRlcihwcm9wZXJ0eSkge1xuICAgICAgICBsZXQgZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICA9IGZpbHRlcnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLnByb3BlcnR5ID09PSBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUga2V5IGZvciBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge051bWJlcnxTdHJpbmd8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEtleUF0KGluZGV4KSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gaXRlbT8uW3RoaXMua2V5UHJvcGVydHldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzaGFsbG93IGNvcHkgb2YgYSBwb3J0aW9uIG9mIHRoZSBpdGVtcyBhcnJheVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIFplcm8tYmFzZWQgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gZXh0cmFjdGlvbi5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZF0gWmVyby1iYXNlZCBpbmRleCBiZWZvcmUgd2hpY2ggdG8gZW5kIGV4dHJhY3Rpb24gKGV4dHJhY3RzIHVwIHRvIGJ1dCBub3QgaW5jbHVkaW5nIGVuZCkuXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NsaWNlXG4gICAgICovXG4gICAgZ2V0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgU291cmNlIENvbGxlY3Rpb24gaW4gY2FzZSB0aGUgc291cmNlQ29sbGVjdGlvbklkIGNvbmZpZyB3YXMgc2V0XG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldFNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlSWQgJiYgTmVvLmdldCh0aGlzLnNvdXJjZUlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBhc3NlcnRpbmcgd2hldGhlciBhIHZhbHVlIGhhcyBiZWVuIGFzc29jaWF0ZWQgdG8gdGhlIGtleSBpbiB0aGUgQ29sbGVjdGlvbiBvciBub3RcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGFuIGl0ZW0gZXhpc3RzIGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzSXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoaXRlbVt0aGlzLmtleVByb3BlcnR5XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4ga2V5IG9yIGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihVdGlsLmlzT2JqZWN0KGtleSkgPyBrZXkgOiB0aGlzLm1hcC5nZXQoa2V5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4gaXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXG4gICAgICovXG4gICAgaW5kZXhPZkl0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxuICAgICAqL1xuICAgIGluZGV4T2ZLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKHRoaXMubWFwLmdldChrZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge09iamVjdFtdfSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBhZGRlZCBpdGVtc1xuICAgICAqL1xuICAgIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pLmFkZGVkSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBmaWx0ZXJlZFxuICAgICAqL1xuICAgIGlzRmlsdGVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2lzRmlsdGVyZWRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGlzRmlsdGVyZWRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVycyAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBpc0ZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbHRlcnNbaV0uaXNGaWx0ZXJlZChpdGVtKSkge1xuICAgICAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRmlsdGVyZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBzb3J0ZWRcbiAgICAgKi9cbiAgICBpc1NvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbaXNTb3J0ZWRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgaXRlbSBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1t0aGlzLmdldENvdW50KCkgLTFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRmlsdGVyQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5maWx0ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbk11dGF0ZShvcHRzKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9wdHMucHJldmVudEJ1YmJsZVVwKSB7XG4gICAgICAgICAgICBtZS5wcmV2ZW50QnViYmxlVXAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc3BsaWNlKG51bGwsIG9wdHMucmVtb3ZlZEl0ZW1zLCBvcHRzLmFkZGVkSXRlbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU29ydGVyQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5hcHBseVNvcnRlckNvbmZpZ3MoKTtcbiAgICAgICAgdGhpcy5kb1NvcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgaXRlbXMgYXJyYXkgYW5kIHJldHVybnMgdGhpcyBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UodGhpcy5nZXRDb3VudCgpIC0xLCAxKTtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLnJlbW92ZWRJdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcHVzaChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgZ2l2ZW4ga2V5LCBpdGVtIG9yIEFycmF5IGNvbnRhaW5pbmcga2V5c3xpdGVtc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R8QXJyYXl9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICB0aGlzLnNwbGljZSgwLCBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGUgaXRlbXMgYXJyYXkgaW4gcGxhY2UuXG4gICAgICogSW50ZW5kZWQgZm9yIGNvbGxlY3Rpb25zIHdpdGhvdXQgc29ydGVycy5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBzaGlmdCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5hZGRlZEl0ZW1zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIHRlc3QgZm9yIGVhY2ggaXRlbSwgdGFraW5nIHRocmVlIHBhcmFtZXRlcnM6XG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY2FsbGJhY2suaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9ICBbY2FsbGJhY2suaW5kZXhdIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICAgW2NhbGxiYWNrLml0ZW1zXSBUaGUgaXRlbXMgYXJyYXkgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFZhbHVlIHRvIHVzZSBhcyBcInRoaXNcIiB3aGVuIGV4ZWN1dGluZyB0aGUgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSBmb3IgYW55IGNvbGxlY3Rpb24gaXRlbSwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgc29tZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zb21lKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgaXRlbXMgZnJvbSBhbmQvb3IgYWRkcyBpdGVtcyB0byB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBJZiB0aGUgdG9SZW1vdmVBcnJheSBpcyB1c2VkLCB0aGVuIHRoZSBpbmRleCBpcyBub3QgdXNlZCBmb3IgcmVtb3ZpbmcsIHRoZSBlbnRyaWVzIGFyZSBmb3VuZCBieSBrZXkgYW5kIHJlbW92ZWQgZnJvbSB3aGVyZSB0aGV5IGFyZS5cbiAgICAgKiBJZiBpbmRleCBpcyBub3QgcGFzc2VkLCB0b0FkZEFycmF5IGlzIGFwcGVuZGVkIHRvIHRoZSBDb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0W119IFtyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheV1cbiAgICAgKiBAcGFyYW0ge09iamVjdHxPYmplY3RbXX0gW3RvQWRkQXJyYXldXG4gICAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkZGVkSXRlbXMgJiByZW1vdmVkSXRlbXMgYXJyYXlzXG4gICAgICovXG4gICAgc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSwgdG9BZGRBcnJheSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHNvdXJjZSAgICAgICAgICAgICA9IG1lLmdldFNvdXJjZSgpLFxuICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgPSBtZS5faXRlbXMsXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSAgICAgICAgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgIG1hcCAgICAgICAgICAgICAgICA9IG1lLm1hcCxcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnRBdEluZGV4ID0gVXRpbC5pc051bWJlcihyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXG4gICAgICAgICAgICB0b1JlbW92ZUFycmF5ICAgICAgPSBBcnJheS5pc0FycmF5KHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5KSA/IHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5IDogbnVsbCxcbiAgICAgICAgICAgIGksIGl0ZW0sIGtleSwgbGVuLCB0b0FkZE1hcDtcblxuICAgICAgICBpZiAoIVV0aWwuaXNOdW1iZXIoaW5kZXgpICYmIHJlbW92ZUNvdW50QXRJbmRleCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKG1lLmlkICsgJzogSWYgaW5kZXggaXMgbm90IHBhc3NlZCwgcmVtb3ZlQ291bnRBdEluZGV4IGNhbm5vdCBiZSB1c2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b0FkZEFycmF5ID0gdG9BZGRBcnJheSAmJiAhQXJyYXkuaXNBcnJheSh0b0FkZEFycmF5KSA/IFt0b0FkZEFycmF5XSA6IHRvQWRkQXJyYXk7XG5cbiAgICAgICAgaWYgKHRvUmVtb3ZlQXJyYXkgJiYgKGxlbiA9IHRvUmVtb3ZlQXJyYXkubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGlmICh0b0FkZEFycmF5ICYmIHRvQWRkQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRvQWRkTWFwID0gdG9BZGRBcnJheS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9SZW1vdmVBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBrZXkgID0gVXRpbC5pc09iamVjdChpdGVtKSA/IGl0ZW1ba2V5UHJvcGVydHldIDogaXRlbTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b0FkZE1hcCB8fCAodG9BZGRNYXAgJiYgdG9BZGRNYXAuaW5kZXhPZihrZXkpIDwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGl0ZW1zLnNwbGljZShtZS5pbmRleE9mS2V5KGtleSksIDEpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1vdmVDb3VudEF0SW5kZXggJiYgcmVtb3ZlQ291bnRBdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLnB1c2goLi4uaXRlbXMuc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudEF0SW5kZXgpKTtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9BZGRBcnJheSAmJiAobGVuID0gdG9BZGRBcnJheS5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b0FkZEFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGtleSAgPSBpdGVtW2tleVByb3BlcnR5XTtcblxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5UHJvcGVydHldID0ga2V5ID0gbWUua2V5UHJvcGVydHlJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgbWUua2V5UHJvcGVydHlJbmRleC0tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXkpICYmICFtZS5pc0ZpbHRlcmVkSXRlbShpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhZGRlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoVXRpbC5pc051bWJlcihpbmRleCkgPyBpbmRleCA6IGl0ZW1zLmxlbmd0aCwgMCwgLi4uYWRkZWRJdGVtcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuYXV0b1NvcnQgJiYgbWUuX3NvcnRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZS5kb1NvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZS5nZXRTb3VyY2UoKSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZS5wcmV2ZW50QnViYmxlVXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1lLnByZXZlbnRCdWJibGVVcCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VyY2Ugc3BsaWNlJywgc291cmNlLmlkLCAnYWRkZWQ6JywgLi4udG9BZGRBcnJheSwgJ3JlbW92ZWQ6JywgLi4ucmVtb3ZlZEl0ZW1zKTtcbiAgICAgICAgICAgICAgICBtZS5zdGFydFVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKG51bGwsIHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zLCB0b0FkZEFycmF5KTtcbiAgICAgICAgICAgICAgICBtZS5lbmRVcGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2UucHJldmVudEJ1YmJsZVVwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCB8fCByZW1vdmVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWVbY291bnRNdXRhdGlvbnNdKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZihtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnbXV0YXRlJywge1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgIDogdG9BZGRBcnJheSxcbiAgICAgICAgICAgICAgICBwcmV2ZW50QnViYmxlVXA6IG1lLnByZXZlbnRCdWJibGVVcCxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXMgICA6IHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCFtZVtzaWxlbnRVcGRhdGVNb2RlXSkge1xuICAgICAgICAgICAgbWUuY2FjaGVVcGRhdGUoe1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIG1lLnByZXZlbnRCdWJibGVVcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRlZEl0ZW1zLFxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJldmVudHMgdGhlIGNvbGxlY3Rpb24gZnJvbSBmaXJpbmcgZXZlbnRzIHVudGlsIGVuZFVwZGF0ZSBnZXRzIGNhbGxlZC5cbiAgICAgKiBJZiB5b3Ugc3RhcnQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0sXG4gICAgICogdGhlIG11dGF0aW9uIGV2ZW50IHdpbGwgbm90IGZpcmUgYWZ0ZXIgdXNpbmcgZW5kVXBkYXRlKClcbiAgICAgKiAoeW91IG11c3QgdXNlIHRoZSBlbmRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtIGZvciB0aGUgZW5kVXBkYXRlIGNhbGwgaW4gY2FzZSB5b3UgdXNlZFxuICAgICAqIHN0YXJ0U2lsZW50VXBkYXRlTW9kZSBoZXJlKVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3N0YXJ0U2lsZW50VXBkYXRlTW9kZV1cbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI2VuZFVwZGF0ZSBlbmRVcGRhdGV9XG4gICAgICovXG4gICAgc3RhcnRVcGRhdGUoc3RhcnRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgIGlmIChzdGFydFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXNbc2lsZW50VXBkYXRlTW9kZV0gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1t1cGRhdGluZ0luZGV4XSsrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgb25lIG9yIG1vcmUgZWxlbWVudHMgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgbmV3IGl0ZW1zIGNvdW50XG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW0gVGhlIGl0ZW0ocykgdG8gYWRkXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcbiAgICAgKi9cbiAgICB1bnNoaWZ0KGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgMCwgaXRlbSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBtdXRhdGUgZXZlbnQgZmlyZXMgYWZ0ZXIgZXZlcnkgc3BsaWNlIGNhbGwgKGludm9rZWQgYnkgYWxsIG1ldGhvZHMgd2hpY2ggY2hhbmdlIHRoZSBjb250ZW50IG9mIHRoZSBpdGVtcyBhcnJheSkuXG4gKiBAZXZlbnQgbXV0YXRlXG4gKiBAcGFyYW0ge09iamVjdFtdfSBhZGRlZEl0ZW1zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHByZXZlbnRCdWJibGVVcCBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdFtdfSByZW1vdmVkSXRlbXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2U7XG4iLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5GaWx0ZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBvcGVyYXRvciBjb25maWc6PGJyPlxuICAgICAgICAgKiBbJz09JywgJz09PScsICchPScsICchPT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ2V4Y2x1ZGVkJywgJ2luY2x1ZGVkJywgJ2lzRGVmaW5lZCcsICdpc1VuZGVmaW5lZCcsICdsaWtlJ11cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IG9wZXJhdG9yc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yczogWyc9PScsICc9PT0nLCAnIT0nLCAnIT09JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdleGNsdWRlZCcsICdpbmNsdWRlZCcsICdpc0RlZmluZWQnLCAnaXNVbmRlZmluZWQnLCAnbGlrZSddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5GaWx0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLkZpbHRlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdmaWx0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZmlsdGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRpbmcgZGlzYWJsZWQgdG8gdHJ1ZSB3aWxsIGV4Y2x1ZGUgdGhpcyBmaWx0ZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmaWx0ZXJpbmcgbG9naWNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGlzYWJsZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdmlkZSBhIGN1c3RvbSBmaWx0ZXJpbmcgZnVuY3Rpb24gd2hpY2ggaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWVcbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258bnVsbH0gZmlsdGVyQnlfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlckJ5XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgbWVhbnMgbm90IGZpbHRlcmluZyBvdXQgaXRlbXMgaW4gY2FzZSB0aGUgdmFsdWUgaXMgJycsIG51bGwsIFtdIG9yIHt9XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluY2x1ZGVFbXB0eVZhbHVlcz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBpbmNsdWRlRW1wdHlWYWx1ZXM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBmbGFnIHRvIHRydWUgYmVmb3JlIHN0YXJ0aW5nIGJ1bGsgdXBkYXRlcyAoZS5nLiBjaGFuZ2luZyBwcm9wZXJ0eSAmIHZhbHVlKVxuICAgICAgICAgKiB0byBwcmV2ZW50IG11bHRpcGxlIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNVcGRhdGluZ189ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGlzVXBkYXRpbmdfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvd25lciB1dGlsLkNvbGxlY3Rpb24gbmVlZHMgdG8gYXBwbHkgYW4gb25DaGFuZ2UgbGlzdGVuZXIgb25jZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBsaXN0ZW5lckFwcGxpZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdGVuZXJBcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvcGVyYXRvciB0byBmaWx0ZXIgYnkgKHVzZSB0aGUgY29tYmluYXRpb24gb2YgcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWUpXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgICAgICpcbiAgICAgICAgICogPT0gKG5vdCByZWNvbW1lbmRlZClcbiAgICAgICAgICogPT09XG4gICAgICAgICAqICE9IChub3QgcmVjb21tZW5kZWQpXG4gICAgICAgICAqICE9PVxuICAgICAgICAgKiA8XG4gICAgICAgICAqID49XG4gICAgICAgICAqID5cbiAgICAgICAgICogPj1cbiAgICAgICAgICogbGlrZSAoY29sbGVjdGlvblZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKVxuICAgICAgICAgKiBpbmNsdWRlZCAoZXhwZWN0cyB2YWx1ZSB0byBiZSBhbiBhcnJheSlcbiAgICAgICAgICogZXhjbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3BlcmF0b3I9Jz09PSdcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yXzogJz09PScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3BlcnR5Xz0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBwcm9wZXJ0eV86ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NvcGUgdG8gdXNlIGZvciB0aGUgZmlsdGVyQnkgbWV0aG9kLCBpbiBjYXNlIGl0IGlzIHByb3ZpZGVkLiBEZWZhdWx0cyB0byB0aGlzIGluc3RhbmNlLlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gc2NvcGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2NvcGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZV86IG51bGxcbiAgICB9fVxuXG4gICAgYWZ0ZXJTZXREaXNhYmxlZCguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHRvZG9cbiAgICB9XG5cbiAgICBhZnRlclNldElzVXBkYXRpbmcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHZhbHVlID09PSBmYWxzZSAmJiB0aGlzLmZpcmVDaGFuZ2VFdmVudCh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0T3BlcmF0b3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBhZnRlclNldFByb3BlcnR5KC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRWYWx1ZSguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGJlZm9yZVNldEZpbHRlckJ5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2ZpbHRlckJ5IGhhcyB0byBiZSBhIGZ1bmN0aW9uJywgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgb3BlcmF0b3IgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldE9wZXJhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnb3BlcmF0b3InKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgZm9yIHJlbW90ZSBmaWx0ZXJpbmdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgZXhwb3J0KCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb3BlcmF0b3IgPSBtZS5vcGVyYXRvcixcbiAgICAgICAgICAgIHByb3BlcnR5ID0gbWUucHJvcGVydHksXG4gICAgICAgICAgICB2YWx1ZSAgICA9IG1lLnZhbHVlO1xuXG4gICAgICAgIGlmICghbWUuZmlsdGVyQnkpIHtcbiAgICAgICAgICAgIHJldHVybiB7b3BlcmF0b3IsIHByb3BlcnR5LCB2YWx1ZX07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBmaXJlQ2hhbmdlRXZlbnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgbWUuaXNVcGRhdGluZyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBtZS5vcGVyYXRvcixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbWUucHJvcGVydHksXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IG1lLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGNvbGxlY3Rpb24gaXRlbSBtYXRjaGVzIHRoaXMgZmlsdGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBpdGVtXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmlsdGVyZWRJdGVtcyBJZiB0aGUgY29sbGVjdGlvbiBmaWx0ZXJNb2RlIGlzIG5vdCBwcmltaXRpdmUgY29udGFpbnMgdGhlIGl0ZW1zIHdoaWNoIHBhc3NlZFxuICAgICAqIHRoZSBwcmV2aW91cyBmaWx0ZXJzLCBvdGhlcndpc2UgYWxsIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxJdGVtcyBhbGwgY29sbGVjdGlvbiBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzRmlsdGVyZWQoaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlclZhbHVlLCByZWNvcmRWYWx1ZTtcblxuICAgICAgICBpZiAobWUuX2Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuX2ZpbHRlckJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuZmlsdGVyQnkuY2FsbChtZS5zY29wZSB8fCBtZSwge1xuICAgICAgICAgICAgICAgIGFsbEl0ZW1zLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMsXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbWUuX3ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5pbmNsdWRlRW1wdHlWYWx1ZXMgJiYgKG1lLl92YWx1ZSA9PT0gbnVsbCB8fCBOZW8uaXNFbXB0eShtZS5fdmFsdWUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsdGVyVmFsdWUgPSBtZS5fdmFsdWU7XG4gICAgICAgIHJlY29yZFZhbHVlID0gaXRlbVttZS5fcHJvcGVydHldO1xuXG4gICAgICAgIGlmIChmaWx0ZXJWYWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgcmVjb3JkVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBmaWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIHJlY29yZFZhbHVlID0gcmVjb3JkVmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFGaWx0ZXJbbWUuX29wZXJhdG9yXShyZWNvcmRWYWx1ZSwgZmlsdGVyVmFsdWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBbJz09J10gKGEsIGIpIHtyZXR1cm4gYSA9PSBiO31cbiAgICBzdGF0aWMgWyc9PT0nXShhLCBiKSB7cmV0dXJuIGEgPT09IGI7fVxuICAgIHN0YXRpYyBbJyE9J10gKGEsIGIpIHtyZXR1cm4gYSAhPSBiO31cbiAgICBzdGF0aWMgWychPT0nXShhLCBiKSB7cmV0dXJuIGEgIT09IGI7fVxuICAgIHN0YXRpYyBbJzwnXSAgKGEsIGIpIHtyZXR1cm4gYSA8IGI7fVxuICAgIHN0YXRpYyBbJzw9J10gKGEsIGIpIHtyZXR1cm4gYSA8PSBiO31cbiAgICBzdGF0aWMgWyc+J10gIChhLCBiKSB7cmV0dXJuIGEgPiBiO31cbiAgICBzdGF0aWMgWyc+PSddIChhLCBiKSB7cmV0dXJuIGEgPj0gYjt9XG5cbiAgICBzdGF0aWMgWydleGNsdWRlZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA8IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnaW5jbHVkZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPiAtMTtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpc0RlZmluZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnaXNVbmRlZmluZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnbGlrZSddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGE/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYj8udG9Mb3dlckNhc2UoKSkgfHwgZmFsc2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG4iLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5Tb3J0ZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgU29ydGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLlNvcnRlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uU29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NvcnRlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzb3J0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgY29uZmlnIHdoaWNoIG1hcHMgdGhlIGRpcmVjdGlvbiBBU0MgdG8gMSwgLTEgb3RoZXJ3aXNlXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGlyZWN0aW9uTXVsdGlwbGllcj0xXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbk11bHRpcGxpZXI6IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc29ydCBkaXJlY3Rpb24gd2hlbiB1c2luZyBhIHByb3BlcnR5LlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbl89J0FTQydcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbl86ICdBU0MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG93bmVyIHV0aWwuQ29sbGVjdGlvbiBuZWVkcyB0byBhcHBseSBhbiBvbkNoYW5nZSBsaXN0ZW5lciBvbmNlXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsaXN0ZW5lckFwcGxpZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BlcnR5IHRvIHNvcnQgYnkuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcHJvcGVydHlfPSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIHByb3BlcnR5XzogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3ZpZGUgYSBjdXN0b20gc29ydGluZyBmdW5jdGlvbiwgaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHkgJiBkaXJlY3Rpb25cbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258bnVsbH0gc29ydEJ5PW51bGxcbiAgICAgICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9Db2xsYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgc29ydEJ5OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byB1c2UgdGhlIHRyYW5zZm9ybVZhbHVlIG1ldGhvZCBmb3IgZWFjaCBpdGVtICh0aGUgbWV0aG9kIGNhbiBnZXQgb3ZlcnJpZGRlbilcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlVHJhbnNmb3JtVmFsdWU9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB1c2VUcmFuc2Zvcm1WYWx1ZTogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldERpcmVjdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5kaXJlY3Rpb25NdWx0aXBsaWVyID0gdmFsdWUgPT09ICdBU0MnID8gMSA6IC0xO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbWUuZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5IDogbWUucHJvcGVydHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc29ydGVyIGZ1bmN0aW9uIHdoaWNoIGdldHMgdXNlZCBieSBjb2xsZWN0aW9ucyBpbiBjYXNlIGF0IGxlYXN0IG9uZSBzb3J0ZXIgaGFzIGEgcmVhbCBzb3J0QnkgbWV0aG9kXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcGFyYW0gYlxuICAgICAqL1xuICAgIGRlZmF1bHRTb3J0QnkoYSwgYikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGEgPSBhW21lLnByb3BlcnR5XTtcbiAgICAgICAgYiA9IGJbbWUucHJvcGVydHldO1xuXG4gICAgICAgIGlmIChtZS51c2VUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgYSA9IG1lLnRyYW5zZm9ybVZhbHVlKGEpO1xuICAgICAgICAgICAgYiA9IG1lLnRyYW5zZm9ybVZhbHVlKGIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgZm9yIHJlbW90ZSBzb3J0aW5nXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIGV4cG9ydCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBtZS5kaXJlY3Rpb24sXG4gICAgICAgICAgICBwcm9wZXJ0eSAgPSBtZS5wcm9wZXJ0eTtcblxuICAgICAgICBpZiAoIW1lLnNvcnRCeSAmJiBkaXJlY3Rpb24gJiYgcHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7ZGlyZWN0aW9uLCBwcm9wZXJ0eX07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMgeyp9IHZhbHVlXG4gICAgICovXG4gICAgdHJhbnNmb3JtVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNvcnRlcik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRlcjtcbiIsImltcG9ydCBCYXNlICAgICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQ2xhc3NTeXN0ZW1VdGlsIGZyb20gJy4uL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb25cbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkJhc2VcbiAqL1xuY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkFwcGxpY2F0aW9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhcHBUaGVtZUZvbGRlcj1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhcHBUaGVtZUZvbGRlcjogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuQmFzZX0gbWFpblZpZXdfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1haW5WaWV3XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdW50ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG5hbWU9J015QXBwJ1xuICAgICAgICAgKi9cbiAgICAgICAgbmFtZTogJ015QXBwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGFyZW50SWQ9J2RvY3VtZW50LmJvZHknXG4gICAgICAgICAqL1xuICAgICAgICBwYXJlbnRJZDogJ2RvY3VtZW50LmJvZHknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmluZzogZmFsc2VcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgLy8gdG8gZ3VhcmFudGVlIHRoYXQgdGhlIG1haW4gdmlldyBjYW4gYWNjZXNzIE5lby5hcHBzIGF0IGFueSBwb2ludCxcbiAgICAgICAgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIGl0cyBhc3NpZ25tZW50IGF0IHRoZSBlbmQgb2YgdGhlIGN0b3IuXG4gICAgICAgIGxldCBtYWluVmlldyA9IGNvbmZpZy5tYWluVmlldztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5tYWluVmlldztcblxuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5hcHBzID0gTmVvLmFwcHMgfHwge307XG5cbiAgICAgICAgTmVvLmFwcHNbbWUubmFtZV0gPSBtZTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5yZWdpc3RlckFwcChtZS5uYW1lKTtcblxuICAgICAgICBpZiAobWFpblZpZXcpIHtcbiAgICAgICAgICAgIG1lLm1haW5WaWV3ID0gbWFpblZpZXc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1haW5WaWV3IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TWFpblZpZXcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHNob3J0IGRlbGF5IHRvIGVuc3VyZSBjaGFuZ2VzIGZyb20gb25IYXNoQ2hhbmdlKCkgZ290IGFwcGxpZWRcbiAgICAgICAgdmFsdWUgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5yZW5kZXIodHJ1ZSk7XG4gICAgICAgIH0sIE5lby5jb25maWcuaGFzaCA/IDIwMCA6IDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBtYWluVmlldyBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0TWFpblZpZXcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGFwcE5hbWUgOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQ6IHRoaXMucGFyZW50SWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlciB0aGUgYXBwIGZyb20gdGhlIENTUyBtYXBcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGRlc3Ryb3koLi4uYXJncykge1xuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5yZW1vdmVBcHBGcm9tVGhlbWVNYXAodGhpcy5uYW1lKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwcGxpY2F0aW9uKTtcblxuLy8gY29udmVuaWVuY2Ugc2hvcnRjdXRcbk5lby5hcHAgPSBjb25maWcgPT4gTmVvLmNyZWF0ZSh7XG4gICAgbW9kdWxlOiBBcHBsaWNhdGlvbixcbiAgICAuLi5jb25maWdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbjtcbiIsImltcG9ydCBDb3JlQmFzZSAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBIYXNoSGlzdG9yeSBmcm9tICcuLi91dGlsL0hhc2hIaXN0b3J5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250cm9sbGVyLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250cm9sbGVyLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb250cm9sbGVyJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBIYXNoSGlzdG9yeS5vbignY2hhbmdlJywgdGhpcy5vbkhhc2hDaGFuZ2UsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIEhhc2hIaXN0b3J5LnVuKCdjaGFuZ2UnLCB0aGlzLm9uSGFzaENoYW5nZSwgdGhpcyk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBtZXRob2Qgd2hpY2ggZ2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgaGFzaCBpbnNpZGUgdGhlIGJyb3dzZXIgdXJsIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIGxldCBjdXJyZW50SGFzaCA9IEhhc2hIaXN0b3J5LmZpcnN0KCk7XG5cbiAgICAgICAgY3VycmVudEhhc2ggJiYgdGhpcy5vbkhhc2hDaGFuZ2UoY3VycmVudEhhc2gsIG51bGwpO1xuXG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xuIiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJ1xuXG5jb25zdCBjb25maWdTeW1ib2wgICAgICAgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGZvcmNlQXNzaWduQ29uZmlncyA9IFN5bWJvbCgnZm9yY2VBc3NpZ25Db25maWdzJyksXG4gICAgICBpc0luc3RhbmNlICAgICAgICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgKGFsbW9zdCkgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBFeGNlcHRpb25zIGFyZSBlLmcuIGNvcmUuSWRHZW5lcmF0b3IsIHZkb20uVk5vZGVcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byB0aGUgY2xhc3MgY29uc3RydWN0b3JcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byBlYWNoIGNsYXNzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBzaG9ydGN1dC1uYW1lIHRvIHVzZSBmb3IgZS5nLiBjcmVhdGluZyBjaGlsZCBjb21wb25lbnRzIGluc2lkZSBhIEpTT04tZm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIGNvbXBvbmVudCBpZFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGlkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lby5jcmVhdGUoKSB3aWxsIGNoYW5nZSB0aGlzIGZsYWcgdG8gdHJ1ZSBhZnRlciB0aGUgb25Db25zdHJ1Y3RlZCgpIGNoYWluIGlzIGRvbmUuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzQ29uc3RydWN0ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb25zdHJ1Y3RlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogWW91IGNhbiBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYnkgcGFzc2luZyBhbiBpbXBvcnRlZCBjbGFzcyAoSlMgbW9kdWxlIGRlZmF1bHQgZXhwb3J0KVxuICAgICAgICAgKiBAbWVtYmVyIHtDbGFzc30gbW9kdWxlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kdWxlOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIHRoZSBzdGF0aWMgZ2V0Q29uZmlnKCkgcmV0dXJuIG9iamVjdC5cbiAgICAgKiBBcHBsaWVzIHRoZSBvYnNlcnZhYmxlIG1peGluIGlmIG5lZWRlZCwgZ3JhbnRzIHJlbW90ZSBhY2Nlc3MgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWc9e31cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcbiAgICAgICAgICAgIFtjb25maWdTeW1ib2xdOiB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbaXNJbnN0YW5jZV06IHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmNyZWF0ZUlkKGNvbmZpZy5pZCB8fCBtZS5pZCk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpICYmIG1lLmluaXRPYnNlcnZhYmxlKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gYXNzaWduIGNsYXNzIGZpZWxkIHZhbHVlcyBwcmlvciB0byBjb25maWdzXG4gICAgICAgIGNvbmZpZyA9IG1lLnNldEZpZWxkcyhjb25maWcpO1xuXG4gICAgICAgIG1lLmluaXRDb25maWcoY29uZmlnKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5yZW1vdGUgJiYgc2V0VGltZW91dChtZS5pbml0UmVtb3RlLmJpbmQobWUpLCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlkIGNvbmZpZyBnb3QgY2hhbmdlZC5cbiAgICAgKiBZb3UgY2FuIGR5bmFtaWNhbGx5IGNoYW5nZSBpbnN0YW5jZSBpZHMgaWYgbmVlZGVkLiBUaGV5IG5lZWQgdG8gc3RheSB1bmlxdWUgYXQgYW55IGdpdmVuIHBvaW50LlxuICAgICAqIFVzZSBjYXNlOiBlLmcuIGNvbXBvbmVudCBiYXNlZCBsaXN0cywgd2hlcmUgeW91IHdhbnQgdG8gcmUtdXNlIGl0ZW0gaW5zdGFuY2VzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWFuYWdlciA9IEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGhhc01hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFtvbGRWYWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTWFuYWdlcikge1xuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UucmVnaXN0ZXIobWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvLmlkTWFwID0gTmVvLmlkTWFwIHx8IHt9O1xuICAgICAgICAgICAgTmVvLmlkTWFwW21lLmlkXSA9IG1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBiZWZvcmVTZXQgZnVuY3Rpb25zIHdoaWNoIHRlc3QgaWYgYSBnaXZlbiB2YWx1ZSBpcyBpbnNpZGUgYSBzdGF0aWMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGNvbmZpZyBuYW1lXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IFtzdGF0aWNOYW1lPW5hbWUgKyAncyddIG5hbWUgb2YgdGhlIHN0YXRpYyBjb25maWcgYXJyYXlcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfE51bWJlcn0gdmFsdWUgb3Igb2xkVmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCBuYW1lLCBzdGF0aWNOYW1lID0gbmFtZSArICdzJykge1xuICAgICAgICBsZXQgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0aWNOYW1lKSA/IHN0YXRpY05hbWUgOiB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFN1cHBvcnRlZCB2YWx1ZXMgZm9yICR7bmFtZX0gYXJlOiAke3ZhbHVlcy5qb2luKCcsICcpfWAsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIElkR2VuZXJhdG9yIHRvIGNyZWF0ZSBhbiBpZCBpZiBhIHN0YXRpYyBvbmUgaXMgbm90IGV4cGxpY2l0bHkgc2V0LlxuICAgICAqIFJlZ2lzdGVycyB0aGUgaW5zdGFuY2UgdG8gbWFuYWdlci5JbnN0YW5jZSBpZiB0aGlzIG9uZSBpcyBhbHJlYWR5IGNyZWF0ZWQsXG4gICAgICogb3RoZXJ3aXNlIHN0b3JlcyBpdCBpbnNpZGUgYSB0bXAgbWFwLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIGNyZWF0ZUlkKGlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZCB8fCBJZEdlbmVyYXRvci5nZXRJZCh0aGlzLmdldElkS2V5KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwW21lLmlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtZSwga2V5KS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGluc2lkZSBjcmVhdGVJZCgpIGFzIHRoZSBkZWZhdWx0IHZhbHVlIHBhc3NlZCB0byB0aGUgSWRHZW5lcmF0b3IuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgYXMgbmVlZGVkLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm50eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBrZXkgb3IgdGhlIHN0YXRpY0NvbmZpZyBvYmplY3QgaXRzZWxmIGluIGNhc2Ugbm8gdmFsdWUgaXMgc2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcbiAgICAgICAgbGV0IGNmZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuICAgICAgICByZXR1cm4gKGtleSA/IGNmZ1trZXldIDogY2ZnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBvbkNvbnN0cnVjdGVkKCkgaXMgZG9uZVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb3JlLkJhc2Ujb25Db25zdHJ1Y3RlZCBvbkNvbnN0cnVjdGVkfVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhbGwgY2xhc3MgY29uZmlncyB0byB0aGlzIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICovXG4gICAgaW5pdENvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgbWUubWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpKTtcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb2VzIGdldCB0cmlnZ2VyZWQgd2l0aCBhIGRlbGF5IHRvIGVuc3VyZSB0aGF0IE5lby53b3JrZXJJZCAmIE5lby53b3JrZXIuTWFuYWdlciBhcmUgZGVmaW5lZFxuICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIHZpYSBwcm9taXNlc1xuICAgICAqL1xuICAgIGluaXRSZW1vdGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlbW90ZSAgICAgICAgPSBtZS5yZW1vdGUsXG4gICAgICAgICAgICBjbGFzc05hbWUgICAgID0gbWUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY3VycmVudFdvcmtlciA9IE5lby5jdXJyZW50V29ya2VyLFxuICAgICAgICAgICAgbGlzdGVuZXJJZDtcblxuICAgICAgICBpZiAoIW1lLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdGUgbWV0aG9kIGFjY2VzcyBpcyBvbmx5IGZ1bmN0aW9uYWwgZm9yIFNpbmdsZXRvbiBjbGFzc2VzICcgKyBjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nICYmIGN1cnJlbnRXb3JrZXIuaXNTaGFyZWRXb3JrZXIgJiYgIWN1cnJlbnRXb3JrZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcklkID0gY3VycmVudFdvcmtlci5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V29ya2VyLnVuKCdjb25uZWN0ZWQnLCBsaXN0ZW5lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgY3RvciA9IG1lLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVvLmFwcGx5Q2xhc3NDb25maWcgaGFzIG5vdCBiZWVuIHJ1biBvbiAnICsgbWUuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgICAgICBtZS5vcmlnaW5hbENvbmZpZyA9IE5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsuLi5jdG9yLmNvbmZpZywgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pc0NvbnN0cnVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBXZSBjYW4gb25seSBmaXJlIHRoZSBldmVudCBpbiBjYXNlIHRoZSBPYnNlcnZhYmxlIG1peGluIGlzIGluY2x1ZGVkLlxuICAgICAgICBtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSAmJiBtZS5maXJlKCdjb25zdHJ1Y3RlZCcsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBhbGwgY29uc3RydWN0b3JzIGFyZSBkb25lXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJlcGxhY2Ugc3RyaW5nIGJhc2VkIHZhbHVlcyBjb250YWluaW5nIFwiQGNvbmZpZzpcIiB3aXRoIHRoZSBtYXRjaGluZyBjb25maWcgdmFsdWVcbiAgICAgKiBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE9iamVjdFtdfSBpdGVtc1xuICAgICAqL1xuICAgIHBhcnNlSXRlbUNvbmZpZ3MoaXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaXRlbSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUucGFyc2VJdGVtQ29uZmlncyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5zdGFydHNXaXRoKCdAY29uZmlnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cig4KS50cmltKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVbdmFsdWVdICYmICFtZS5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIHZhbHVlLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjb25maWcgbWlnaHQgbm90IGJlIHByb2Nlc3NlZCB5ZXQsIGVzcGVjaWFsbHkgZm9yIGNvbmZpZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZSwgc28gd2UgbmVlZCB0byBjaGVjayB0aGUgY29uZmlnU3ltYm9sIGZpcnN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5XSA9IG1lW2NvbmZpZ1N5bWJvbF1bdmFsdWVdIHx8IG1lW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIHNldCgpLCBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlIGNhbiBhbHJlYWR5IGJlIGFzc2lnbmVkLFxuICAgICAqIHNvIHRoZSBoYXNPd25Qcm9wZXJ0eSgpIGNoZWNrIHdpbGwgcmV0dXJuIHRydWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZUFzc2lnbj1mYWxzZV1cbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbj1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgbWVbZm9yY2VBc3NpZ25Db25maWdzXSA9IGZvcmNlQXNzaWduO1xuXG4gICAgICAgIC8vIFdlIGRvIG5vdCB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgMSBjb25maWcgY2FuIHJlbW92ZSBtb3JlIHRoYW4gMSBrZXkgKGJlZm9yZVNldFgsIGFmdGVyU2V0WClcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gVGhlIGhhc093blByb3BlcnR5IGNoZWNrIGlzIGludGVuZGVkIGZvciBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlXG4gICAgICAgICAgICAvLyA9PiB0aGV5IGNvdWxkIGFscmVhZHkgZ290IGFzc2lnbmVkIGluc2lkZSBhbiBhZnRlclNldC1tZXRob2RcbiAgICAgICAgICAgIGlmIChmb3JjZUFzc2lnbiB8fCAhbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXlzWzBdXSA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgZGVsZXRlIGNhbGwgaW5zaWRlIHRoZSBjb25maWcgZ2V0dGVyIGFzIHdlbGwgKE5lby5tanMgPT4gYXV0b0dlbmVyYXRlR2V0U2V0KCkpXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBvbmUgZm9yIGNvbmZpZ3MsIHdoaWNoIGRvIG5vdCB1c2UgZ2V0dGVycyAobm8gdHJhaWxpbmcgdW5kZXJzY29yZSlcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xuXG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSkge1xuICAgICAgICBsZXQgb3JpZ2luO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlbW90ZSkuZm9yRWFjaCgoW3dvcmtlciwgbWV0aG9kc10pID0+IHtcbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09IHdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9yaWdpbiA9IE5lby53b3JrZXJJZCA9PT0gJ21haW4nID8gTmVvLndvcmtlci5NYW5hZ2VyIDogTmVvLmN1cnJlbnRXb3JrZXI7XG5cbiAgICAgICAgICAgICAgICBvcmlnaW4uc2VuZE1lc3NhZ2Uod29ya2VyLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlZ2lzdGVyUmVtb3RlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtdWx0aXBsZSBjb25maWdzIGF0IG9uY2UsIGVuc3VyaW5nIHRoYXQgYWxsIGFmdGVyU2V0IG1ldGhvZHMgZ2V0IGFsbCBuZXcgYXNzaWduZWQgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxuICAgICAqL1xuICAgIHNldCh2YWx1ZXM9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZXMgPSBtZS5zZXRGaWVsZHModmFsdWVzKTtcblxuICAgICAgICAvLyBJZiB0aGUgaW5pdGlhbCBjb25maWcgcHJvY2Vzc2luZyBpcyBzdGlsbCBydW5uaW5nLFxuICAgICAgICAvLyBmaW5pc2ggdGhpcyBvbmUgZmlyc3QgYmVmb3JlIGRyb3BwaW5nIG5ldyB2YWx1ZXMgaW50byB0aGUgY29uZmlnU3ltYm9sLlxuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy8yMjAxXG4gICAgICAgIGlmIChtZVtmb3JjZUFzc2lnbkNvbmZpZ3NdICE9PSB0cnVlICYmIE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIHZhbHVlcyk7XG5cbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3ModHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2Ugd2FudCB0byBhc3NpZ24gY2xhc3MgZmllbGRzIGZpcnN0IGFuZCByZW1vdmUgdGhlbSBmcm9tIHRoZSBjb25maWcgb2JqZWN0LFxuICAgICAqIHNvIHRoYXQgYWZ0ZXJTZXQoKSwgYmVmb3JlR2V0KCkgYW5kIGJlZm9yZVNldCgpIG1ldGhvZHMgY2FuIGdldCB0aGUgbmV3IHZhbHVlcyByaWdodCBhd2F5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0RmllbGRzKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29uZmlnTmFtZXMgPSBtZS5jb25zdHJ1Y3Rvci5jb25maWc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICghY29uZmlnTmFtZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhTmVvLmhhc1Byb3BlcnR5U2V0dGVyKG1lLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWdba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcgYnkgYSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb25maWcgZXhpc3RzIGFuZCBnb3QgY2hhbmdlZFxuICAgICAqL1xuICAgIHNldFN0YXRpY0NvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcblxuICAgICAgICBpZiAoc3RhdGljQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kLCBlLmcuPC9wPlxuICAgICAqIGBOZW8uY3JlYXRlKCdOZW8uYnV0dG9uLkJhc2UnKS50b1N0cmluZygpID0+IFwiW29iamVjdCBOZW8uYnV0dG9uLkJhc2UgKG5lby1idXR0b24tMSldXCJgXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNsYXNzTmFtZX0gKGlkOiAke3RoaXMuaWR9KWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIDxwPldpdGggdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxuICAgICAqIGBOZW8uY3JlYXRlKE5lby5jb2xsZWN0aW9uLkJhc2UpIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkge1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2VbaXNJbnN0YW5jZV0gPT09IHRydWUgPyBzdXBlcltTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSA6IGZhbHNlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbkJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2U7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuQ29tcGFyZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBDb21wYXJlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkNvbXBhcmUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLkNvbXBhcmUnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbTFcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRXF1YWwoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHR5cGUxID0gTmVvLnR5cGVPZihpdGVtMSksXG4gICAgICAgICAgICB0eXBlMiA9IE5lby50eXBlT2YoaXRlbTIpLFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGlmICh0eXBlMSAhPT0gdHlwZTIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHlwZTEpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5sZW5ndGggIT09IGl0ZW0yLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbaSwgdl0gb2YgaXRlbTEuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKHYsIGl0ZW0yW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLnZhbHVlT2YoKSA9PT0gaXRlbTIudmFsdWVPZigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdGdW5jdGlvbic6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEubmFtZSAhPT0gaXRlbTIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLnRvU3RyaW5nKCkgPT09IGl0ZW0yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ01hcCc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHZhbDI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgaXRlbTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IGl0ZW0yLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwyICE9PSB2YWwgfHwgdmFsMiA9PT0gdW5kZWZpbmVkICYmICFpdGVtMi5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ05lb0luc3RhbmNlJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5pZCAhPT0gaXRlbTIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdPYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0xKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGl0ZW0yKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGl0ZW0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKGl0ZW0xW2tleV0sIGl0ZW0yW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS50b1N0cmluZygpICE9PSBpdGVtMi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnU2V0Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5zaXplICE9PSBpdGVtMi5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGtleSBvZiBpdGVtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0yLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtMSA9PT0gaXRlbTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBhcmUpO1xuXG4vLyBhbGlhc1xuTmVvLmlzRXF1YWwgPSBDb21wYXJlLmlzRXF1YWw7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmU7XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXG4gKiBJdCBjb3VsZCBnZXQgc2ltcGxpZmllZCB0byBqdXN0IGJlaW5nIGFuIG9iamVjdCAobmVlZHMgdG8gbWFudWFsbHkgZ2V0IHB1dCBpbnRvIHRoZSBOZW8gbmFtZXNwYWNlIGluIHRoaXMgY2FzZSkuXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSWRHZW5lcmF0b3Ige1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2lkLWdlbmVyYXRvcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcbiAgICAgICAgICovXG4gICAgICAgIGJhc2U6ICduZW8tJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj0ndHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcblxuICAgICAgICAvLyBhbGlhc1xuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKElkR2VuZXJhdG9yKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLk9ic2VydmFibGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5PYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLW9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWl4aW4tb2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1peGluOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IGV2ZW50SWQgbnVsbCBpbiBjYXNlIGFuIG9iamVjdCBnZXRzIHBhc3NlZCBhcyB0aGUgbmFtZSAobXVsdGlwbGUgaWRzKVxuICAgICAqL1xuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuYW1lT2JqZWN0ID0gdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgbGlzdGVuZXIsIGV4aXN0aW5nLCBldmVudENvbmZpZztcblxuICAgICAgICBpZiAobmFtZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2NvcGUgICAgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzLmZuO1xuICAgICAgICAgICAgb3JkZXIgICAgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xuICAgICAgICAgICAgZXZlbnRJZCAgPSBldmVudElkIHx8IG9wdHMuZXZlbnRJZDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzOyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkTGlzdGVuZXIgY2FsbDogJyArIG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBldmVudENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBmbjogbGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgc2NvcGUsXG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBpZDogZXZlbnRJZCB8fCBOZW8uZ2V0SWQoJ2V2ZW50JylcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChleGlzdGluZyA9IG1lLmxpc3RlbmVycz8uW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmcuZm9yRWFjaChjZmcgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLmlkID09PSBldmVudElkIHx8IChjZmcuZm4gPT09IGxpc3RlbmVyICYmIGNmZy5zY29wZSA9PT0gc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdEdXBsaWNhdGUgZXZlbnQgaGFuZGxlciBhdHRhY2hlZDonLCBuYW1lLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnNwbGljZShvcmRlciwgMCwgZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnB1c2goZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUubGlzdGVuZXJzW25hbWVdID0gW2V2ZW50Q29uZmlnXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50Q29uZmlnLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICBmaXJlKG5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcmdzICAgICAgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnMsXG4gICAgICAgICAgICBldmVudENvbmZpZywgZXZlbnRzLCBpLCBsZW47XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IFsuLi5saXN0ZW5lcnNbbmFtZV1dO1xuICAgICAgICAgICAgbGVuICAgID0gZXZlbnRzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcgPSBldmVudHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIU5lby5pc0Z1bmN0aW9uKGV2ZW50Q29uZmlnLmZuKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudENvbmZpZy5mbiA9IGV2ZW50Q29uZmlnLnNjb3BlW2V2ZW50Q29uZmlnLmZuXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGxpc3RlbmVyLCBpbiBjYXNlIHRoZSBzY29wZSBubyBsb25nZXIgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLnNjb3BlICYmICFldmVudENvbmZpZy5zY29wZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnLmZuLmFwcGx5KGV2ZW50Q29uZmlnLnNjb3BlIHx8IG1lLCBldmVudENvbmZpZy5kYXRhID8gYXJncy5jb25jYXQoZXZlbnRDb25maWcuZGF0YSkgOiBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgaW5pdE9ic2VydmFibGUoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcbiAgICAgICAgICAgIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzID0gY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLmxpc3RlbmVycyA9IHt9O1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QobGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IHsuLi5saXN0ZW5lcnN9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHByb3RvPy5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnLm9ic2VydmFibGUgJiYgIXByb3RvLmNvbnN0cnVjdG9yLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvdG8uY29uc3RydWN0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICBmaXJlICAgICAgICAgIDogbWUuZmlyZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBtZS5yZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgdW4gICAgICAgICAgICA6IG1lLnVuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBhZGRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgb24oLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRJZCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lciwgbGlzdGVuZXJzLCBtYXRjaCwgc2NvcGU7XG5cbiAgICAgICAgaWYgKE5lby5pc09iamVjdChuYW1lKSkge1xuICAgICAgICAgICAgaWYgKG5hbWUuc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVyc1trZXldIHx8IFtdO1xuICAgICAgICAgICAgICAgIGkgICAgICAgICA9IDA7XG4gICAgICAgICAgICAgICAgbGVuICAgICAgID0gbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4ubmFtZSA9PT0gKE5lby5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlLm5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5zY29wZSAgID09PSBzY29wZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgbWF0Y2ggICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChldmVudENvbmZpZywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA9IGlkeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobWF0Y2gsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gc3VzcGVuZExpc3RlbmVyczogZnVuY3Rpb24ocXVldWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyByZXN1bWVMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIHJlbW92ZUxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqL1xuICAgIHVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE9ic2VydmFibGUpO1xuXG5leHBvcnQgZGVmYXVsdCBPYnNlcnZhYmxlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XG4gICAgICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZGVjYW1lbFJlZ0V4PS8oW2Etel0pKFtBLVpdKS9nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGVjYW1lbFJlZ0V4OiAvKFthLXpdKShbQS1aXSkvZ1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuVXRpbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3JlLXV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJyxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdmFsdWVzXG4gICAgICovXG4gICAgc3RhdGljIGJpbmRNZXRob2RzKHNjb3BlLCB2YWx1ZXMpIHtcbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgc2NvcGVbdmFsdWVdID0gc2NvcGVbdmFsdWVdLmJpbmQoc2NvcGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc3RyaW5nIHVwcGVyY2FzZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gUmV0dXJucyBmYWxzZSBmb3Igbm9uIHN0cmluZyBpbnB1dHNcbiAgICAgKi9cbiAgICBzdGF0aWMgY2FwaXRhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gVXRpbC5pc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWVbMF0udG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHlsZXMgc3RyaW5nIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlT2JqZWN0KHN0cmluZykge1xuICAgICAgICBpZiAoIXN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFydHM7XG5cbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXG5cbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgYnkgdGhlIGZpcnN0IGNvbG9uIG9ubHlcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlRmxvYXQoeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoc3RyLCBsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9ialtwYXJ0c1swXV0gPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0eWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYWxsIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIG9mIGEgc3RyaW5nIGludG8gLWxvd2VyY2FzZS5cbiAgICAgKiBEb2VzIG5vdCB0b3VjaCBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSBpbnB1dCBjb250YWluaW5nIHVwcGVyY2FzZSBjaGFyYWN0ZXJzXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxvd2VyY2FzZSBvdXRwdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjYW1lbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShVdGlsLmRlY2FtZWxSZWdFeCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGVtcHR5IEFycmF5LCBPYmplY3Qgb3IgU3RyaW5nXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci4gUmV0dXJucyBmYWxzZSBmb3Igbm9uLWZpbml0ZSBudW1iZXJzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgc3RhdGljIHRpbWVvdXQodGltZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhbnkgaXRlcmFibGUgKHN0cmluZ3MsIG51bWVyaWMgaW5kaWNlcyBhbmQgYSBsZW5ndGggcHJvcGVydHkpIGludG8gYSB0cnVlIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBpdGVyYWJsZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gc3RhcnQgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZD1pdGVyYWJsZS5sZW5ndGhdIGVuZCBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9BcnJheShpdGVyYWJsZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbGVuO1xuXG4gICAgICAgIGlmICghaXRlcmFibGUgfHwgIShsZW4gPSBpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlLnNwbGl0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbik7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhVdGlsKTtcblxuLy8gYWxpYXNlc1xuTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgIGJpbmRNZXRob2RzICAgICAgOiAnYmluZE1ldGhvZHMnLFxuICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnLFxuICAgIGRlY2FtZWwgICAgICAgICAgOiAnZGVjYW1lbCcsXG4gICAgaXNBcnJheSAgICAgICAgICA6ICdpc0FycmF5JyxcbiAgICBpc0Jvb2xlYW4gICAgICAgIDogJ2lzQm9vbGVhbicsXG4gICAgaXNEZWZpbmVkICAgICAgICA6ICdpc0RlZmluZWQnLFxuICAgIGlzRW1wdHkgICAgICAgICAgOiAnaXNFbXB0eScsXG4gICAgaXNGdW5jdGlvbiAgICAgICA6ICdpc0Z1bmN0aW9uJyxcbiAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcbiAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcbiAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcbiAgICB0aW1lb3V0ICAgICAgICAgIDogJ3RpbWVvdXQnLFxuICAgIHRvQXJyYXkgICAgICAgICAgOiAndG9BcnJheSdcbn0sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvbXBhcmUgICAgIGZyb20gJy4vQ29tcGFyZS5tanMnO1xuaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICBmcm9tICcuL09ic2VydmFibGUubWpzJztcbmltcG9ydCBVdGlsICAgICAgICBmcm9tICcuL1V0aWwubWpzJztcblxuZXhwb3J0IHtCYXNlLCBDb21wYXJlLCBJZEdlbmVyYXRvciwgT2JzZXJ2YWJsZSwgVXRpbH07XG4iLCJpbXBvcnQgQ29sbGVjdGlvbkJhc2UgZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIG90aGVyIG1hbmFnZXIgY2xhc3Nlc1xuICogQGNsYXNzIE5lby5tYW5hZ2VyLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb2xsZWN0aW9uLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvbGxlY3Rpb25CYXNle1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5CYXNlJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiBpZCAmJiB0aGlzLmdldChpZCkgfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZ2V0KGl0ZW0uaWQpKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYW4gaXRlbSB3aXRoIGFuIGFscmVhZHkgZXhpc3RpbmcgaWQnLCBpdGVtLCBtZS5nZXQoaXRlbS5pZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb2xsZWN0aW9uIGl0ZW0gcGFzc2VkIGJ5IHJlZmVyZW5jZSBvciBrZXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZW1cbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoaXRlbSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZTtcbiIsImltcG9ydCBCYXNlICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgVk5vZGVVdGlsIGZyb20gJy4uL3V0aWwvVk5vZGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8ubWFuYWdlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG4gICAgICAgIE5lby5nZXRDb21wb25lbnQgPSB0aGlzLmdldEJ5SWQuYmluZCh0aGlzKTsgLy8gYWxpYXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBjb21wb25lbnQgd2hpY2ggbWF0Y2hlcyB0aGUgY29uZmlnLXNlbGVjdG9yIG1vdmluZyBkb3duIHRoZSBjb21wb25lbnQgaXRlbXMgdHJlZS5cbiAgICAgKiBVc2UgcmV0dXJuRmlyc3RNYXRjaD1mYWxzZSB0byBnZXQgYW4gYXJyYXkgb2YgYWxsIG1hdGNoaW5nIGl0ZW1zIGluc3RlYWQuXG4gICAgICogSWYgbm8gbWF0Y2ggaXMgZm91bmQsIHJldHVybnMgbnVsbCBpbiBjYXNlIHJldHVybkZpcnN0TWF0Y2ggPT09IHRydWUsIG90aGVyd2lzZSBhbiBlbXB0eSBBcnJheS5cbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZXxTdHJpbmd9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ3xudWxsfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJldHVybkZpcnN0TWF0Y2g9dHJ1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8TmVvLmNvbXBvbmVudC5CYXNlW118bnVsbH1cbiAgICAgKi9cbiAgICBkb3duKGNvbXBvbmVudCwgY29uZmlnLCByZXR1cm5GaXJzdE1hdGNoPXRydWUpIHtcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBtYXRjaEFycmF5ICA9IFtdLFxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBudWxsLFxuICAgICAgICAgICAgaSAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSBbXSxcbiAgICAgICAgICAgIGNoaWxkSXRlbXMsIGNvbmZpZ0FycmF5LCBjb25maWdMZW5ndGgsIGxlbjtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnQXJyYXkgID0gT2JqZWN0LmVudHJpZXMoY29uZmlnKTtcbiAgICAgICAgY29uZmlnTGVuZ3RoID0gY29uZmlnQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIGNvbmZpZ0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBjb25maWdMZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChyZXR1cm5GaXJzdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGRJdGVtcyA9IG1lLmZpbmQoe3BhcmVudElkOiBjb21wb25lbnQuaWR9KTtcbiAgICAgICAgbGVuICAgICAgICA9IGNoaWxkSXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gbWUuZG93bihjaGlsZEl0ZW1zW2ldLCBjb25maWcsIHJldHVybkZpcnN0TWF0Y2gpO1xuXG4gICAgICAgICAgICBpZiAocmV0dXJuRmlyc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXR1cm5WYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCguLi5yZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuRmlyc3RNYXRjaCA/IG51bGw6IHJldHVybkFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHRoZSBjb21wb25lbnQgaWQgaW4gY2FzZSB0aGVyZSBpcyBhIG1hdGNoXG4gICAgICovXG4gICAgZmluZFBhcmVudENvbXBvbmVudChwYXRoKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IHBhdGg/Lmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaWQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWQgPSBwYXRoW2ldO1xuXG4gICAgICAgICAgICBpZiAoaWQgJiYgbWUuaGFzKGlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IHJlcGxhY2UgYWxsIGNhbGxzIG9mIHRoaXMgbWV0aG9kIHRvIGNhbGxzIHVzaW5nIHRoZSB1dGlsLlZOb2RlIGNsYXNzXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2bm9kZVxuICAgICAqIEBwYXJhbSB2bm9kZVxuICAgICAqIEBwYXJhbSBjaGlsZElkc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBnZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHMpIHtcbiAgICAgICAgcmV0dXJuIFZOb2RlVXRpbC5nZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNoaWxkIGNvbXBvbmVudHMgZm91bmQgaW5zaWRlIHRoZSB2bm9kZSB0cmVlXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2VbXX0gY2hpbGRDb21wb25lbnRzXG4gICAgICovXG4gICAgZ2V0Q2hpbGRyZW4oY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBjaGlsZENvbXBvbmVudHMgPSBbXSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgICAgICA9IFZOb2RlVXRpbC5nZXRDaGlsZElkcyhjb21wb25lbnQudm5vZGUpLFxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQ7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQgPSB0aGlzLmdldChub2RlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRDb21wb25lbnRzLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRDb21wb25lbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gQXJyYXkgY29udGFpbmluZyB0aGUgaWRzIG9mIGFsbCBwYXJlbnQgY29tcG9uZW50cyBmb3IgYSBnaXZlbiBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHJldHVybnMge1N0cmluZ1tdfSBwYXJlbnRJZHNcbiAgICAgKi9cbiAgICBnZXRQYXJlbnRJZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBwYXJlbnRJZHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50Py5wYXJlbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudC5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRJZHMucHVzaChjb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudElkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGdldFBhcmVudFBhdGgocGF0aCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb21wb25lbnRQYXRoID0gW10sXG4gICAgICAgICAgICBpICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgPSBwYXRoPy5sZW5ndGggfHwgMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWUuaGFzKHBhdGhbaV0pKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50UGF0aC5wdXNoKHBhdGhbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFBhdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBBcnJheSBjb250YWluaW5nIGFsbCBwYXJlbnQgY29tcG9uZW50cyBmb3IgYSBnaXZlbiBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfSBwYXJlbnRzXG4gICAgICovXG4gICAgZ2V0UGFyZW50cyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50Py5wYXJlbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudC5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGNvbXBvbmVudCB3aGljaCBtYXRjaGVzIHRoZSBjb25maWctc2VsZWN0b3IuXG4gICAgICogVXNlIHJldHVybkZpcnN0TWF0Y2g9ZmFsc2UgdG8gZ2V0IGFuIGFycmF5IG9mIGFsbCBtYXRjaGluZyBpdGVtcyBpbnN0ZWFkLlxuICAgICAqIElmIG5vIG1hdGNoIGlzIGZvdW5kLCByZXR1cm5zIG51bGwgaW4gY2FzZSByZXR1cm5GaXJzdE1hdGNoID09PSB0cnVlLCBvdGhlcndpc2UgYW4gZW1wdHkgQXJyYXkuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfG51bGx9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmV0dXJuRmlyc3RNYXRjaD10cnVlXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXXxudWxsfVxuICAgICAqL1xuICAgIHVwKGNvbXBvbmVudElkLCBjb25maWcsIHJldHVybkZpcnN0TWF0Y2g9dHJ1ZSkge1xuICAgICAgICBsZXQgY29tcG9uZW50ICAgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50SWQpLFxuICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSBbXSxcbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LCBjb25maWdMZW5ndGgsIG1hdGNoQXJyYXk7XG5cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKGNvbmZpZyk7XG4gICAgICAgIGNvbmZpZ0xlbmd0aCA9IGNvbmZpZ0FycmF5Lmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50Py5wYXJlbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudC5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkZpcnN0TWF0Y2ggPyBudWxsIDogcmV0dXJuQXJyYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgY29uZmlnQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gY29uZmlnTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVybkZpcnN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBvbmVudCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQ29tcG9uZW50KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IEZvY3VzTWFuYWdlciAgICAgZnJvbSAnLi9Gb2N1cy5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgICAgIGZyb20gJy4uL3V0aWwvVkRvbS5tanMnO1xuXG5jb25zdCBldmVudENvbmZpZ0tleXMgPSBbXG4gICAgJ2J1YmJsZScsXG4gICAgJ2RlbGVnYXRlJyxcbiAgICAnbG9jYWwnLFxuICAgICdzY29wZScsXG4gICAgJ3Zub2RlSWQnXG5dO1xuXG5jb25zdCBnbG9iYWxEb21FdmVudHMgPSBbXG4gICAgJ2NoYW5nZScsXG4gICAgJ2NsaWNrJyxcbiAgICAnY29udGV4dG1lbnUnLFxuICAgICdkYmxjbGljaycsXG4gICAgJ2RyYWc6ZW5kJyxcbiAgICAnZHJhZzptb3ZlJyxcbiAgICAnZHJhZzpzdGFydCcsXG4gICAgJ2ZvY3VzaW4nLFxuICAgICdmb2N1c291dCcsXG4gICAgJ2lucHV0JyxcbiAgICAna2V5ZG93bicsXG4gICAgJ2tleXVwJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VlbnRlcicsXG4gICAgJ21vdXNlbGVhdmUnLFxuICAgICdtb3VzZXVwJyxcbiAgICAnd2hlZWwnXG5dO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Eb21FdmVudFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBEb21FdmVudCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Eb21FdmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuRG9tRXZlbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtcz17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcD17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtYXA6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmaXJlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1YmJsZSAgICAgPSB0cnVlLFxuICAgICAgICAgICAgZGF0YSAgICAgICA9IGV2ZW50LmRhdGEgfHwge30sXG4gICAgICAgICAgICBldmVudE5hbWUgID0gZXZlbnQuZXZlbnROYW1lLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgID0gbnVsbCxcbiAgICAgICAgICAgIHBhdGhJZHMgICAgPSBkYXRhLnBhdGgubWFwKGUgPT4gZS5pZCksXG4gICAgICAgICAgICBwYXRoICAgICAgID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRQYXRoKHBhdGhJZHMpLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgY29tcG9uZW50LCBkZWxlZ2F0aW9uVGFyZ2V0SWQsIGlkLCBwcmV2ZW50RmlyZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZCAgICAgICAgPSBwYXRoW2ldO1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgIGlmICghY29tcG9uZW50IHx8IGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5pdGVtc1tpZF0/LltldmVudE5hbWVdO1xuXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpcmUnLCBldmVudE5hbWUsIGRhdGEsIGxpc3RlbmVycywgcGF0aCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciAmJiBsaXN0ZW5lci5mbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRpb25UYXJnZXRJZCA9IG1lLnZlcmlmeURlbGVnYXRpb25QYXRoKGxpc3RlbmVyLCBkYXRhLnBhdGgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRpb25UYXJnZXRJZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudEZpcmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBvbmx5IHdhbnQgbW91c2VlbnRlciAmIGxlYXZlIHRvIGZpcmUgb24gdGhlaXIgdG9wIGxldmVsIG5vZGVzLCBub3QgZm9yIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdtb3VzZWVudGVyJyB8fCBldmVudE5hbWUgPT09ICdtb3VzZWxlYXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudEZpcmUgPSAhRG9tRXZlbnQudmVyaWZ5TW91c2VFbnRlckxlYXZlKGNvbXBvbmVudCwgZGF0YSwgZGVsZWdhdGlvblRhcmdldElkLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50RmlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTmVvLmdldChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5mbi5hcHBseShsaXN0ZW5lci5zY29wZSB8fCBnbG9iYWxUaGlzLCBbZGF0YV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxpc3RlbmVyLmJ1YmJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gdHJpZ2dlciB0aGUgRm9jdXNNYW5hZ2VyIGFmdGVyIG5vcm1hbCBkb21MaXN0ZW5lcnMgb24gdGhlc2UgZXZlbnRzIGdvdCBleGVjdXRlZFxuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2ZvY3VzaW4nIHx8IGV2ZW50TmFtZSA9PT0gJ2ZvY3Vzb3V0Jykge1xuICAgICAgICAgICAgICAgIEZvY3VzTWFuYWdlclsnb24nICsgTmVvLmNhcGl0YWxpemUoZXZlbnROYW1lKV0oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRQYXRoOiBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgOiBkYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFidWJibGUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudE5hbWUuc3RhcnRzV2l0aCgnZHJvcCcpKSB7XG4gICAgICAgICAgICBsZXQgZHJhZ1pvbmUgPSBkYXRhLmRyYWdab25lSWQgJiYgTmVvLmdldChkYXRhLmRyYWdab25lSWQpO1xuXG4gICAgICAgICAgICBpZiAoZHJhZ1pvbmUpIHtcbiAgICAgICAgICAgICAgICBkcmFnWm9uZS5maXJlKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgZHJhZ1pvbmVbe1xuICAgICAgICAgICAgICAgICAgICAnZHJvcCcgICAgICA6ICdvbkRyb3AnLFxuICAgICAgICAgICAgICAgICAgICAnZHJvcDplbnRlcic6ICdvbkRyb3BFbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICdkcm9wOmxlYXZlJzogJ29uRHJvcExlYXZlJyxcbiAgICAgICAgICAgICAgICB9W2V2ZW50TmFtZV1dLmNhbGwoZHJhZ1pvbmUsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqIEBwYXJhbSBzY29wZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2VuZXJhdGVMaXN0ZW5lckNvbmZpZyhjb25maWcsIHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxlZ2F0ZSA6IGNvbmZpZy5kZWxlZ2F0ZSxcbiAgICAgICAgICAgIGV2ZW50TmFtZTogY29uZmlnLmV2ZW50TmFtZSxcbiAgICAgICAgICAgIGlkICAgICAgIDogc2NvcGUuaWQsXG4gICAgICAgICAgICBvcHRzICAgICA6IGNvbmZpZyxcbiAgICAgICAgICAgIHNjb3BlICAgIDogY29uZmlnLnNjb3BlICAgfHwgc2NvcGUsXG4gICAgICAgICAgICB2bm9kZUlkICA6IGNvbmZpZy52bm9kZUlkIHx8IHNjb3BlLmlkXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RXZlbnROYW1lKGNvbmZpZykge1xuICAgICAgICBsZXQgZXZlbnROYW1lID0gbnVsbDtcblxuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGNvbmZpZykpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRDb25maWdLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZW50TmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5kZWxlZ2F0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcub3B0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc2NvcGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnZub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldExpc3RlbmVyKGNvbmZpZykge1xuICAgICAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5pdGVtcyxcbiAgICAgICAgICAgIGV2ZW50O1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnM/Lltjb25maWcuaWRdKSB7XG4gICAgICAgICAgICBldmVudCA9IGxpc3RlbmVyc1tjb25maWcuaWRdW2NvbmZpZy5ldmVudE5hbWVdO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50cyBsb2NhbCBkb21FdmVudCBsaXN0ZW5lcnMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBtb3VudERvbUxpc3RlbmVycyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVycyAgID0gdGhpcy5pdGVtc1tjb21wb25lbnQuaWRdLFxuICAgICAgICAgICAgbG9jYWxFdmVudHMgPSBbXTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhsaXN0ZW5lcnMpLmZvckVhY2goKFtldmVudE5hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBldmVudC5ldmVudE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSAmJiAoZXZlbnQubG9jYWwgfHwgIWdsb2JhbERvbUV2ZW50cy5pbmNsdWRlcyhldmVudE5hbWUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xvY2FsRXZlbnRzJywgZXZlbnROYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxFdmVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAgIDogZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdkb21FdmVudExpc3RlbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bm9kZUlkOiBldmVudC52bm9kZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbEV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgTmVvLndvcmtlci5BcHAucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA6ICdhZGREb21MaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IGNvbXBvbmVudC5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBldmVudHMgOiBsb2NhbEV2ZW50c1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRlZCBkb21MaXN0ZW5lcicsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHA6IEdvdCBlcnJvciBhdHRlbXB0aW5nIHRvIGFkZCBhIGRvbUxpc3RlbmVyJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmRlbGVnYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcubG9jYWxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLm9wdHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLm9yaWdpbmFsQ29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5vd25lcklkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5wcmlvcml0eVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcuc2NvcGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLnZub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbGlzdGVuZXIgZ290IHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IChmYWxzZSBpbiBjYXNlIGl0IHdhcyBhbHJlYWR5IHRoZXJlKVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbmZpZykge1xuICAgICAgICBsZXQgYWxyZWFkeVJlZ2lzdGVyZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgICAgID0gY29uZmlnLmV2ZW50TmFtZSxcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgID0gY29uZmlnLmlkLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgICAgPSB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgb3B0cyAgICAgICAgICAgICAgPSBjb25maWcub3B0cyxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgID0gY29uZmlnLnNjb3BlLFxuICAgICAgICAgICAgZm5UeXBlICAgICAgICAgICAgPSB0eXBlb2Ygb3B0cyxcbiAgICAgICAgICAgIGZuLCBsaXN0ZW5lciwgbGlzdGVuZXJDb25maWcsIGxpc3RlbmVySWQ7XG5cbiAgICAgICAgaWYgKGZuVHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCBmblR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmbiA9IG9wdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmbiAgICA9IG9wdHMuZm47XG4gICAgICAgICAgICBzY29wZSA9IG9wdHMuc2NvcGUgfHwgc2NvcGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxpc3RlbmVyc1tpZF0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpZF0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0ZW5lcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5mbi50b1N0cmluZygpID09PSBmbi50b1N0cmluZygpICYmIC8vIHRvZG86IGFkZCBhIGJldHRlciBjaGVja1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLnNjb3BlICAgICAgICAgPT09IHNjb3BlICYmXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uZGVsZWdhdGUgICAgICA9PT0gY29uZmlnLmRlbGVnYXRlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlSZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFscmVhZHlSZWdpc3RlcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFuYWdlci5Eb21FdmVudCByZWdpc3RlcicsIGV2ZW50TmFtZSwgY29uZmlnKTtcblxuICAgICAgICBsaXN0ZW5lcklkID0gTmVvLmdldElkKCdkb20tZXZlbnQnKTtcblxuICAgICAgICBjb25maWcubGlzdGVuZXJJZCA9IGxpc3RlbmVySWQ7XG5cbiAgICAgICAgbGlzdGVuZXJDb25maWcgPSB7XG4gICAgICAgICAgICBidWJibGUgICAgICAgIDogY29uZmlnLmhhc093blByb3BlcnR5KCdidWJibGUnKSA/IGNvbmZpZy5idWJibGUgOiBvcHRzLmhhc093blByb3BlcnR5KCdidWJibGUnKSA/IG9wdHMuYnViYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbGVnYXRlICAgICAgOiBjb25maWcuZGVsZWdhdGUsXG4gICAgICAgICAgICBldmVudE5hbWUgICAgIDogZXZlbnROYW1lLFxuICAgICAgICAgICAgZm4gICAgICAgICAgICA6IGZuLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICA6IGxpc3RlbmVySWQsXG4gICAgICAgICAgICBtb3VudGVkICAgICAgIDogIWNvbmZpZy5sb2NhbCAmJiBnbG9iYWxEb21FdmVudHMuaW5jbHVkZXMoZXZlbnROYW1lKSxcbiAgICAgICAgICAgIG9yaWdpbmFsQ29uZmlnOiBjb25maWcub3JpZ2luYWxDb25maWcsXG4gICAgICAgICAgICBvd25lcklkICAgICAgIDogY29uZmlnLm93bmVySWQsXG4gICAgICAgICAgICBwcmlvcml0eSAgICAgIDogY29uZmlnLnByaW9yaXR5IHx8IDEsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgIDogc2NvcGUsXG4gICAgICAgICAgICB2bm9kZUlkICAgICAgIDogY29uZmlnLnZub2RlSWRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1hcFtsaXN0ZW5lcklkXSA9IGxpc3RlbmVyQ29uZmlnO1xuXG4gICAgICAgIGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXS5wdXNoKGxpc3RlbmVyQ29uZmlnKTtcblxuICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0uc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSA+IGIucHJpb3JpdHkpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWFwKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vcHRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGxpc3RlbmVyIGRpZCBleGlzdCBhbmQgZ290IHJlbW92ZWRcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKGNvbmZpZywgc2NvcGUpIHtcbiAgICAgICAgLy8gdG9kb1xuICAgICAgICBjb25zb2xlLmxvZygndW5yZWdpc3RlcicsIGNvbmZpZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2VuZXJhdGVMaXN0ZW5lckNvbmZpZyhjb25maWcsIHNjb3BlKSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdGVuZXIgZm91bmQnLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZG9tTGlzdGVuZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gb2xkRG9tTGlzdGVuZXJzXG4gICAgICovXG4gICAgdXBkYXRlRG9tTGlzdGVuZXJzKGNvbXBvbmVudCwgZG9tTGlzdGVuZXJzLCBvbGREb21MaXN0ZW5lcnMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVnaXN0ZXJlZExpc3RlbmVycyA9IG1lLml0ZW1zW2NvbXBvbmVudC5pZF0gfHwge30sXG4gICAgICAgICAgICBpLCBsZW4sIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGREb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgb2xkRG9tTGlzdGVuZXJzLmZvckVhY2gob2xkRG9tTGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kICYgcmVtb3ZlIG5vIGxvbmdlciBleGlzdGluZyBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb21MaXN0ZW5lcnMuaW5jbHVkZXMob2xkRG9tTGlzdGVuZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSByZWdpc3RlcmVkTGlzdGVuZXJzW21lLmdldEV2ZW50TmFtZShvbGREb21MaXN0ZW5lcildIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAgICAgICAgID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLm9yaWdpbmFsQ29uZmlnID09PSBvbGREb21MaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobGlzdGVuZXJzLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIG5ldyBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5mb3JFYWNoKGRvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkb21MaXN0ZW5lcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRDb25maWdLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZSAgICAgIDogZG9tTGlzdGVuZXIuZGVsZWdhdGUgfHwgdmFsdWUuZGVsZWdhdGUgfHwgJyMnICsgY29tcG9uZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICAgICA6IGNvbXBvbmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxDb25maWc6IGRvbUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVySWQgICAgICAgOiBjb21wb25lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IGRvbUxpc3RlbmVyLnNjb3BlIHx8IGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bm9kZUlkICAgICAgIDogZG9tTGlzdGVuZXIudm5vZGVJZCB8fCB2YWx1ZS52bm9kZUlkIHx8IGNvbXBvbmVudC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Lm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUubW91bnREb21MaXN0ZW5lcnMoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ0NvbXBvbmVudC5kb21MaXN0ZW5lcnMgaGF2ZSB0byBiZSBhbiBhcnJheScsIGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlbmRlZCBmb3IgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50IHRvIHJlcGxhY2UgbGlzdGVuZXIgcGxhY2Vob2xkZXJzIHByb3ZpZGVkIGFzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuY29tcG9uZW50SWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcuZXZlbnRIYW5kbGVyTWV0aG9kXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudEhhbmRsZXJOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNvbmZpZy5zY29wZVxuICAgICAqL1xuICAgIHVwZGF0ZUxpc3RlbmVyUGxhY2Vob2xkZXIoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICA9IG1lLml0ZW1zW2NvbmZpZy5jb21wb25lbnRJZF0gfHwge30sXG4gICAgICAgICAgICBldmVudExpc3RlbmVycyA9IGl0ZW1zW2NvbmZpZy5ldmVudE5hbWVdIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgPSBldmVudExpc3RlbmVycy5sZW5ndGgsXG4gICAgICAgICAgICBsaXN0ZW5lcjtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuZm4gPT09IGNvbmZpZy5ldmVudEhhbmRsZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4gICAgPSBjb25maWcuZXZlbnRIYW5kbGVyTWV0aG9kO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnNjb3BlID0gY29uZmlnLnNjb3BlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gdHJ1ZSBpbiBjYXNlIHRoZSBkZWxlZ2F0aW9uIHN0cmluZyBtYXRjaGVzIHRoZSBldmVudCBwYXRoXG4gICAgICovXG4gICAgdmVyaWZ5RGVsZWdhdGlvblBhdGgobGlzdGVuZXIsIHBhdGgpIHtcbiAgICAgICAgbGV0IGRlbGVnYXRpb25BcnJheSA9IGxpc3RlbmVyLmRlbGVnYXRlLnNwbGl0KCcgJyksXG4gICAgICAgICAgICBqICAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgID0gZGVsZWdhdGlvbkFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHBhdGhMZW4gICAgICAgICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGksIGl0ZW0sIGlzSWQsIHRhcmdldElkO1xuXG4gICAgICAgIGZvciAoaT1sZW4tMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICBpdGVtICAgICA9IGRlbGVnYXRpb25BcnJheVtpXTtcbiAgICAgICAgICAgIGlzSWQgICAgID0gaXRlbS5zdGFydHNXaXRoKCcjJyk7XG5cbiAgICAgICAgICAgIGlmIChpc0lkIHx8IGl0ZW0uc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW0uc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IHBhdGhMZW47IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKGlzSWQgJiYgcGF0aFtqXS5pZCA9PT0gaXRlbSkgfHxcbiAgICAgICAgICAgICAgICAgICAgcGF0aFtqXS5jbHMuaW5jbHVkZXMoaXRlbSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHBhdGhbal0uaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuc3VyZSB0aGUgZGVsZWdhdGlvbiBwYXRoIGlzIGEgY2hpbGQgb2YgdGhlIG93bmVyIGNvbXBvbmVudHMgcm9vdCBub2RlXG4gICAgICAgIGZvciAoOyBqIDwgcGF0aExlbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGF0aFtqXS5pZCA9PT0gbGlzdGVuZXIudm5vZGVJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsZWdhdGlvblRhcmdldElkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyB2ZXJpZnlNb3VzZUVudGVyTGVhdmUoY29tcG9uZW50LCBkYXRhLCBkZWxlZ2F0aW9uVGFyZ2V0SWQsIGV2ZW50TmFtZSkge1xuICAgICAgICBsZXQgdGFyZ2V0SWQgPSBldmVudE5hbWUgPT09ICdtb3VzZWVudGVyJyA/IGRhdGEuZnJvbUVsZW1lbnRJZCA6IGRhdGEudG9FbGVtZW50SWQsXG4gICAgICAgICAgICBkZWxlZ2F0aW9uVmRvbTtcblxuICAgICAgICBpZiAodGFyZ2V0SWQgJiYgdGFyZ2V0SWQgIT09IGRlbGVnYXRpb25UYXJnZXRJZCkge1xuICAgICAgICAgICAgZGVsZWdhdGlvblZkb20gPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKGNvbXBvbmVudC52ZG9tLCBkZWxlZ2F0aW9uVGFyZ2V0SWQpO1xuXG4gICAgICAgICAgICAvLyBkZWxlZ2F0aW9uVmRvbSBjYW4gYmUgdW5kZWZpbmVkIHdoZW4gZHJhZ2dpbmcgYSBwcm94eSBvdmVyIHRoZSBub2RlLlxuICAgICAgICAgICAgLy8gc2VlIGlzc3Vlcy8xMTM3IGZvciBkZXRhaWxzLlxuICAgICAgICAgICAgaWYgKCFkZWxlZ2F0aW9uVmRvbSB8fCBkZWxlZ2F0aW9uVmRvbS52ZG9tICYmIFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQoZGVsZWdhdGlvblZkb20udmRvbSwgdGFyZ2V0SWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEb21FdmVudCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRG9tRXZlbnQpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iLCJpbXBvcnQgQ29yZUJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Gb2N1c1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBGb2N1cyBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuRm9jdXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkZvY3VzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgb3B0cyBvYmplY3RzLlxuICAgICAgICAgKiBvcHRzLmNvbXBvbmVudFBhdGhcbiAgICAgICAgICogb3B0cy5kYXRhXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBoaXN0b3J5PVtdXG4gICAgICAgICAqL1xuICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBEYXRlIG9iamVjdCB3aGVuIHRoZSBsYXN0IGZvY3VzaW4gZXZlbnQgaGFzIG9jY3VycmVkXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdEZvY3VzSW5EYXRlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERhdGUgb2JqZWN0IHdoZW4gdGhlIGxhc3QgZm9jdXNvdXQgZXZlbnQgaGFzIG9jY3VycmVkXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdEZvY3VzT3V0RGF0ZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSBmb3IgYSBmb2N1c0luIHRvIG9jY3VyIGFmdGVyIHRoZSBsYXN0IGZvY3VzT3V0XG4gICAgICAgICAqIHRvIGdldCBjb21iaW5lZCBpbnRvIGEgZm9jdXNtb3ZlIGV2ZW50LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEZvY3VzSW5PdXRHYXA9MTBcbiAgICAgICAgICovXG4gICAgICAgIG1heEZvY3VzSW5PdXRHYXA6IDEwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gYW1vdW50IG9mIGl0ZW1zIHN0b3JlZCBpbnNpZGUgdGhlIGhpc3RvcnkgYXJyYXlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhIaXN0b3J5TGVuZ3RoPTIwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhIaXN0b3J5TGVuZ3RoOiAyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWRkVG9IaXN0b3J5KG9wdHMpIHtcbiAgICAgICAgbGV0IGhpc3RvcnkgPSB0aGlzLmhpc3Rvcnk7XG5cbiAgICAgICAgaGlzdG9yeS51bnNoaWZ0KG9wdHMpO1xuICAgICAgICBoaXN0b3J5Lmxlbmd0aCA+PSB0aGlzLm1heEhpc3RvcnlMZW5ndGggJiYgaGlzdG9yeS5wb3AoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZm9jdXNFbnRlcihvcHRzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYWRkVG9IaXN0b3J5KG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmb2N1c0xlYXZlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRGb2N1cyhvcHRzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGZvY3VzTW92ZShvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhpc3RvcnkgICAgICAgICAgPSBtZS5oaXN0b3J5LFxuICAgICAgICAgICAgbmV3Q29tcG9uZW50UGF0aCA9IG9wdHMuY29tcG9uZW50UGF0aCxcbiAgICAgICAgICAgIG9sZENvbXBvbmVudFBhdGggPSBoaXN0b3J5WzBdLmNvbXBvbmVudFBhdGgsXG4gICAgICAgICAgICBmb2N1c0VudGVyICAgICAgID0gTmVvQXJyYXkuZGlmZmVyZW5jZShuZXdDb21wb25lbnRQYXRoLCBvbGRDb21wb25lbnRQYXRoKSxcbiAgICAgICAgICAgIGZvY3VzTGVhdmUgICAgICAgPSBOZW9BcnJheS5kaWZmZXJlbmNlKG9sZENvbXBvbmVudFBhdGgsIG5ld0NvbXBvbmVudFBhdGgpLFxuICAgICAgICAgICAgZm9jdXNNb3ZlICAgICAgICA9IE5lb0FycmF5LmludGVyc2VjdGlvbihuZXdDb21wb25lbnRQYXRoLCBvbGRDb21wb25lbnRQYXRoKSxcbiAgICAgICAgICAgIGNvbXBvbmVudCwgZGF0YTtcblxuICAgICAgICBtZS5zZXRDb21wb25lbnRGb2N1cyh7Y29tcG9uZW50UGF0aDogZm9jdXNMZWF2ZSwgZGF0YTogb3B0cy5kYXRhfSwgZmFsc2UpO1xuICAgICAgICBtZS5zZXRDb21wb25lbnRGb2N1cyh7Y29tcG9uZW50UGF0aDogZm9jdXNFbnRlciwgZGF0YTogb3B0cy5kYXRhfSwgdHJ1ZSk7XG5cbiAgICAgICAgZm9jdXNNb3ZlLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBwYXRoICAgOiBvcHRzLmRhdGEucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgb2xkUGF0aDogaGlzdG9yeVswXS5kYXRhLnBhdGhcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50Lm9uRm9jdXNNb3ZlPy4oZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoJ2ZvY3VzTW92ZScsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50Lm9uRm9jdXNDaGFuZ2U/LihkYXRhKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZSgnZm9jdXNDaGFuZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuYWRkVG9IaXN0b3J5KG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZvY3VzaW4ob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmxhc3RGb2N1c0luRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKG1lLmxhc3RGb2N1c091dERhdGUgJiYgbWUubGFzdEZvY3VzSW5EYXRlIC0gbWUubGFzdEZvY3VzT3V0RGF0ZSA8IG1lLm1heEZvY3VzSW5PdXRHYXApIHtcbiAgICAgICAgICAgIG1lLmZvY3VzTW92ZShvcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmZvY3VzRW50ZXIob3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Gb2N1c291dChvcHRzKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUubGFzdEZvY3VzT3V0RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWUubGFzdEZvY3VzT3V0RGF0ZSA+IG1lLmxhc3RGb2N1c0luRGF0ZSkge1xuICAgICAgICAgICAgICAgIG1lLmZvY3VzTGVhdmUob3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG1lLm1heEZvY3VzSW5PdXRHYXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29udGFpbnNGb2N1c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZXRDb21wb25lbnRGb2N1cyhvcHRzLCBjb250YWluc0ZvY3VzKSB7XG4gICAgICAgIGxldCBkYXRhID0ge30sXG4gICAgICAgICAgICBjb21wb25lbnRzID0gb3B0cy5jb21wb25lbnRQYXRoLm1hcChpZCA9PiBOZW8uZ2V0Q29tcG9uZW50KGlkKSksXG4gICAgICAgICAgICBoYW5kbGVyO1xuXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5jb250YWluc0ZvY3VzID0gY29udGFpbnNGb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgZGF0YVtjb250YWluc0ZvY3VzID8gJ3BhdGgnIDogJ29sZFBhdGgnXSA9IG9wdHMuZGF0YS5wYXRoXG5cbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gY29udGFpbnNGb2N1cyA/ICdvbkZvY3VzRW50ZXInIDogJ29uRm9jdXNMZWF2ZSc7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50W2hhbmRsZXJdPy4oZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZShjb250YWluc0ZvY3VzID8gJ2ZvY3VzRW50ZXInIDogJ2ZvY3VzTGVhdmUnLCBkYXRhKTtcblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5vbkZvY3VzQ2hhbmdlPy4oZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoJ2ZvY3VzQ2hhbmdlJywgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRm9jdXMpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEZvY3VzKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvcmVCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICogQGV4dGVuZHMgTmVvLm1hbmFnZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5JbnN0YW5jZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuSW5zdGFuY2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgQ29yZUJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gdHJ1ZTtcblxuICAgICAgICBtZS5jb25zdW1lTmVvSWRNYXAoKTtcblxuICAgICAgICBOZW8uZ2V0ID0gbWUuZ2V0LmJpbmQobWUpOyAvLyBhbGlhc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFsbCBpZHMgd2hpY2ggZ290IGFwcGxpZWQgdG8gdGhlIE5lbyBuYW1lc3BhY2UgYmVmb3JlIHRoaXMgaW5zdGFuY2UgZ290IGNyZWF0ZWRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY29uc3VtZU5lb0lkTWFwKCkge1xuICAgICAgICBpZiAoTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChPYmplY3QudmFsdWVzKE5lby5pZE1hcCkpO1xuICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSW5zdGFuY2UpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEluc3RhbmNlKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkFycmF5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0FycmF5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkFycmF5J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5BcnJheSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBhZGQoYXJyLCBpdGVtcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEsIGJ1dCBub3QgaW4gYXJyYXkyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBkaWZmZXJlbmNlKGFycmF5MT1bXSwgYXJyYXkyPVtdKSB7XG4gICAgICAgIHJldHVybiBhcnJheTEuZmlsdGVyKGl0ZW0gPT4gIWFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBpdGVtIGlzIGluY2x1ZGVkIGJ5IHJlZmVyZW5jZSBpbnNpZGUgdGhlIGFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIGhhc0l0ZW0oYXJyLCBpdGVtKSB7XG4gICAgICAgIHJldHVybiBhcnIuaW5jbHVkZXMoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnRlcnNlY3Rpb24oYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiBhcnJheTIuaW5jbHVkZXMoaXRlbSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIGFuIGl0ZW0gaW5zaWRlIGFyciBmcm9tIGZyb21JbmRleCB0byB0b0luZGV4XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAgICovXG4gICAgc3RhdGljIG1vdmUoYXJyLCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tSW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgZnJvbUluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBhcnIuc3BsaWNlKHRvSW5kZXgsIDAsIGFyci5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGZyb20gYW4gYXJyYXkuIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmUoYXJyLCBpdGVtcykge1xuICAgICAgICBsZXQgaW5kZXg7XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGluZGV4ID4gLTEgJiYgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBjb21iaW5lIGFkZCAmIHJlbW92ZSBpbiBvbmUgY2FsbC5cbiAgICAgKiBZb3UgY2FuIHBhc3Mgc2luZ2xlIGl0ZW1zIG9yIGFuIGFycmF5IG9mIGl0ZW1zIHRvIGFkZCBvciB0byByZW1vdmUuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSByZW1vdmVJdGVtc1xuICAgICAqIEBwYXJhbSB7Kn0gYWRkSXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlQWRkKGFyciwgcmVtb3ZlSXRlbXMsIGFkZEl0ZW1zKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGFyciwgcmVtb3ZlSXRlbXMpO1xuICAgICAgICB0aGlzLmFkZChhcnIsIGFkZEl0ZW1zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgZXhpc3QsIG90aGVyd2lzZSBhZGRzIGl0XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIHRvZ2dsZShhcnIsIGl0ZW0pIHtcbiAgICAgICAgdGhpc1t0aGlzLmhhc0l0ZW0oYXJyLCBpdGVtKSA/ICdyZW1vdmUnIDogJ2FkZCddKGFyciwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB1bmlvbihhcnJheTEsIGFycmF5Mikge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW10sXG4gICAgICAgICAgICBtZXJnZSAgPSBhcnJheTEuY29uY2F0KGFycmF5MiksXG4gICAgICAgICAgICBsZW4gICAgPSBtZXJnZS5sZW5ndGgsXG4gICAgICAgICAgICBhc3NvYyAgPSB7fSxcbiAgICAgICAgICAgIGl0ZW07XG5cbiAgICAgICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICAgICAgICBpdGVtID0gbWVyZ2VbbGVuXTtcblxuICAgICAgICAgICAgaWYgKCFhc3NvY1tpdGVtXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIGFzc29jW2l0ZW1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyB1bnNoaWZ0KGFyciwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTmVvQXJyYXkpO1xuXG5leHBvcnQgZGVmYXVsdCBOZW9BcnJheTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5DbGFzc1N5c3RlbVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBDbGFzc1N5c3RlbSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5DbGFzc1N5c3RlbSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuQ2xhc3NTeXN0ZW0nXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIGNhbiBnZXQgdXNlZCBpbnNpZGUgYmVmb3JlU2V0IG1ldGhvZHMgaW4gY2FzZSB5b3Ugd2FudCB0byBjcmVhdGUgaW5zdGFuY2VzIGxpa2Ugc3RvcmVzXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmNvcmUuQmFzZXxudWxsfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V8U3RyaW5nfSBbRGVmYXVsdENsYXNzPW51bGxdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkZWZhdWx0VmFsdWVzPXt9XVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBiZWZvcmVTZXRJbnN0YW5jZShjb25maWcsIERlZmF1bHRDbGFzcz1udWxsLCBkZWZhdWx0VmFsdWVzPXt9KSB7XG4gICAgICAgIGxldCBpc0luc3RhbmNlID0gY29uZmlnIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZTtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKERlZmF1bHRDbGFzcykpIHtcbiAgICAgICAgICAgIERlZmF1bHRDbGFzcyA9IE5lby5ucyhEZWZhdWx0Q2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25maWcgJiYgRGVmYXVsdENsYXNzKSB7XG4gICAgICAgICAgICBjb25maWcgPSBOZW8uY3JlYXRlKERlZmF1bHRDbGFzcywgZGVmYXVsdFZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnPy5pc0NsYXNzKSB7XG4gICAgICAgICAgICBjb25maWcgPSBOZW8uY3JlYXRlKGNvbmZpZywgZGVmYXVsdFZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KGNvbmZpZykgJiYgIWlzSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcubnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBOZW8ubnR5cGUoe1xuICAgICAgICAgICAgICAgICAgICAuLi5kZWZhdWx0VmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoRGVmYXVsdENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbmZpZy5tb2R1bGUgPSBEZWZhdWx0Q2xhc3M7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdDb25maWcsIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25maWcgPSBOZW8uY3JlYXRlKG5ld0NvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXNJbnN0YW5jZSkge1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZXM/Lmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vbihkZWZhdWx0VmFsdWVzLmxpc3RlbmVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2xhc3NTeXN0ZW0pO1xuXG5leHBvcnQgZGVmYXVsdCBDbGFzc1N5c3RlbTtcbiIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkhhc2hIaXN0b3J5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEhhc2hIaXN0b3J5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkNsYXNzU3lzdGVtJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5IYXNoSGlzdG9yeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEl0ZW1zPTUwXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1heEl0ZW1zOiA1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzdGFjaz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdGFjazogW11cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYXBwTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLmhhc2hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5oYXNoU3RyaW5nXG4gICAgICovXG4gICAgcHVzaChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdGFjayA9IG1lLnN0YWNrO1xuXG4gICAgICAgIHN0YWNrLnVuc2hpZnQoZGF0YSk7XG5cbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+IG1lLm1heEl0ZW1zKSB7XG4gICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIGRhdGEsIHN0YWNrWzFdIHx8IG51bGwpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGFzaEhpc3RvcnkpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEhhc2hIaXN0b3J5KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkxvZ2dlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuTG9nZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5Mb2dnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0nbG9nJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsZXZlbDogJ2xvZycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIC8vIGFsaWFzZXNcbiAgICAgICAgTmVvLmFwcGx5RnJvbU5zKE5lbywgdGhpcywge1xuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxuICAgICAgICAgICAgbG9nICAgICA6ICdsb2cnLFxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIGVycm9yKHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBpbmZvKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdpbmZvJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnbG9nJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGxvZ0Vycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdlcnJvcic7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICB3YXJuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICd3YXJuJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3cml0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUxvZ3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExvZ2dlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTG9nZ2VyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLlZEb21cbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVkRvbSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5WRG9tJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WRG9tJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbW92ZUlkcz10cnVlXVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNsb25lZCB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIGNsb25lKHZkb20sIHJlbW92ZUlkcz10cnVlKSB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gTmVvLmNsb25lKHZkb20sIHRydWUpO1xuXG4gICAgICAgIGlmIChyZW1vdmVJZHMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjbG9uZS5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbG9uZS5jbikge1xuICAgICAgICAgICAgY2xvbmUuY24uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9uZS5jbltpbmRleF0gPSBWRG9tLmNsb25lKGl0ZW0sIHJlbW92ZUlkcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdmRvbSBjaGlsZCBub2RlcyBieSBpZCBvciBvcHRzIG9iamVjdCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJlbnROb2RlXSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKiAgICAge051bWJlcn0gaW5kZXhcbiAgICAgKiAgICAge1N0cmluZ30gcGFyZW50SWRcbiAgICAgKiAgICAge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kVmRvbUNoaWxkKHZkb20sIG9wdHMsIGluZGV4LCBwYXJlbnROb2RlKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcbiAgICAgICAgb3B0cyAgPSB0eXBlb2Ygb3B0cyAhPT0gJ3N0cmluZycgPyBvcHRzIDoge2lkOiBvcHRzfTtcblxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXG4gICAgICAgICAgICBzdHlsZU1hdGNoID0gdHJ1ZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZkb20uY24/Lmxlbmd0aCxcbiAgICAgICAgICAgIG9wdHNBcnJheSAgPSBPYmplY3QuZW50cmllcyhvcHRzKSxcbiAgICAgICAgICAgIG9wdHNMZW5ndGggPSBvcHRzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgc3ViQ2hpbGQ7XG5cbiAgICAgICAgb3B0c0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZkb20uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE5lby5pc0FycmF5KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2ZG9tW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzQXJyYXkodmFsdWUpICYmIE5lby5pc0FycmF5KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2ZG9tIGFycmF5IGZvciBhbGwga2V5cyBvciBjb21wYXJlIGlmIHRoZSBhcnJheXMgYXJlIGVxdWFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZFZkb21DaGlsZDogY2xzIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIHRhcmdldCAmIHNvdXJjZSB0eXBlcyBvZiBBcnJheXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmRvbVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZG9tW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgTmVvLmlzT2JqZWN0KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3N0eWxlS2V5LCBzdHlsZVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2ZG9tW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZkb21ba2V5XVtzdHlsZUtleV0gPT09IHN0eWxlVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZFZkb21DaGlsZDogc3R5bGUgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgbWl4ZWQgdGFyZ2V0ICYgc291cmNlIHR5cGVzIChPYmplY3QgVlMgU3RyaW5nKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBvcHRzTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge2luZGV4LCBwYXJlbnROb2RlLCB2ZG9tfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZG9tLmNuKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZkb20uY25baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbS5jbltpXSwgb3B0cywgaSwgdmRvbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBzdWJDaGlsZC5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBzdWJDaGlsZC5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZkb20gICAgICA6IHN1YkNoaWxkLnZkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCBmb3IgZmluZFZkb21DaGlsZCh2ZG9tLCB7ZmxhZzogZmxhZ30pO1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZsYWcgVGhlIGZsYWcgcmVmZXJlbmNlIHNwZWNpZmllZCBvbiB0aGUgdGFyZ2V0IHZkb20gY2hpbGQgbm9kZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QnlGbGFnKHZkb20sIGZsYWcpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwge2ZsYWc6IGZsYWd9KTtcbiAgICAgICAgcmV0dXJuIG5vZGU/LnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0gdmRvbVxuICAgICAqIEBwYXJhbSBbY2hpbGRJZHM9W11dXG4gICAgICogQHJldHVybnMge0FycmF5fSBjaGlsZElkc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDaGlsZElkcyh2ZG9tLCBjaGlsZElkcz1bXSkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZkb20/LmNuIHx8IFtdO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkSWRzLnB1c2goY2hpbGROb2RlLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRJZHMgPSBWRG9tLmdldENoaWxkSWRzKGNoaWxkTm9kZSwgY2hpbGRJZHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGdldENvbHVtbk5vZGVzKHZkb20sIGluZGV4KSB7XG4gICAgICAgIGxldCBjb2x1bW5Ob2RlcyA9IFtdO1xuXG4gICAgICAgIGlmICh2ZG9tLmNuKSB7XG4gICAgICAgICAgICB2ZG9tLmNuLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93LmNuPy5baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbk5vZGVzLnB1c2gocm93LmNuW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sdW1uTm9kZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGdldENvbHVtbk5vZGVzSWRzKHZkb20sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBWRG9tLmdldENvbHVtbk5vZGVzKHZkb20sIGluZGV4KS5tYXAoZSA9PiBlLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmbGFnXG4gICAgICogQHBhcmFtIHtBcnJheX0gW21hdGNoQXJyYXldXG4gICAgICogQHJldHVybnMge0FycmF5fSBhbiBhcnJheSBvZiB2ZG9tIG5vZGVzIHdoaWNoIG1hdGNoIHRoZSBmbGFnXG4gICAgICovXG4gICAgc3RhdGljIGdldEZsYWdzKHZkb20sIGZsYWcsIG1hdGNoQXJyYXkpIHtcbiAgICAgICAgaWYgKCFtYXRjaEFycmF5KSB7XG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XG5cbiAgICAgICAgICAgIGlmICh2ZG9tLmZsYWcgPT09IGZsYWcpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godmRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAodmRvbT8uY24gfHwgW10pLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuZmxhZyA9PT0gZmxhZykge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gVkRvbS5nZXRGbGFncyhjaGlsZE5vZGUsIGZsYWcsIG1hdGNoQXJyYXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9wTGV2ZWw9dHJ1ZSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQYXJlbnROb2Rlcyh2ZG9tLCBpZCwgdG9wTGV2ZWw9dHJ1ZSkge1xuICAgICAgICBsZXQgcGFyZW50cyA9IG51bGwsXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSB2ZG9tLmNuPy5sZW5ndGggfHwgMDtcblxuICAgICAgICBpZiAodmRvbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHBhcmVudHMgPSBWRG9tLmdldFBhcmVudE5vZGVzKHZkb20uY25baV0sIGlkLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKHZkb20uY25baV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcExldmVsICYmIHBhcmVudHMpIHtcbiAgICAgICAgICAgIHBhcmVudHMucHVzaCh2ZG9tKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBhZnRlciBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluc2VydEFmdGVyTm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCkge1xuICAgICAgICByZXR1cm4gVkRvbS5pbnNlcnROb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgZ2l2ZW4gbm9kZVRvSW5zZXJ0IGJlZm9yZSBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluc2VydEJlZm9yZU5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIFZEb20uaW5zZXJ0Tm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgZ2l2ZW4gbm9kZVRvSW5zZXJ0IGJlZm9yZSBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBpbnNlcnRCZWZvcmUgdHJ1ZSBpbnNlcnRzIHRoZSBuZXcgbm9kZSBhdCB0aGUgc2FtZSBpbmRleCwgaW5kZXgrMSBvdGhlcndpc2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0Tm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCwgaW5zZXJ0QmVmb3JlKSB7XG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QodGFyZ2V0Tm9kZUlkKSkge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZUlkID0gdGFyZ2V0Tm9kZUlkLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwge2lkOiB0YXJnZXROb2RlSWR9KSxcbiAgICAgICAgICAgIGluZGV4O1xuXG4gICAgICAgIGlmICh0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICBpbmRleCA9IGluc2VydEJlZm9yZSA/IHRhcmdldE5vZGUuaW5kZXggOiB0YXJnZXROb2RlLmluZGV4ICsgMTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUucGFyZW50Tm9kZS5jbi5zcGxpY2UoaW5kZXgsIDAsIG5vZGVUb0luc2VydCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdmRvbSBjaGlsZCBub2RlcyBieSBpZCBvciBvcHRzIG9iamVjdCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb21dXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kICYgcmVtb3ZlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVWZG9tQ2hpbGQodmRvbSwgb3B0cykge1xuICAgICAgICBsZXQgY2hpbGQgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwgb3B0cyk7XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLmNuLnNwbGljZShjaGlsZC5pbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhIGNoaWxkIG5vZGUgaW5zaWRlIGEgdmRvbSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdDaGlsZE5vZGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCBhbmQgcmVwbGFjZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVwbGFjZVZkb21DaGlsZCh2ZG9tLCBpZCwgbmV3Q2hpbGROb2RlKSB7XG4gICAgICAgIGxldCBjbiAgPSB2ZG9tLmNuIHx8IFtdLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IGNuLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodmRvbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVwbGFjZVZkb21DaGlsZDogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjbltpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjbltpXSA9IG5ld0NoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFZEb20ucmVwbGFjZVZkb21DaGlsZChjaGlsZE5vZGUsIGlkLCBuZXdDaGlsZE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmVvLnZkb20uSGVscGVyIHdpbGwgY3JlYXRlIGlkcyBmb3IgZWFjaCB2bm9kZSwgc28gd2UgbmVlZCB0byBzeW5jIHRoZW0gaW50byB0aGUgdmRvbVxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IHZub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgc3luY1Zkb21JZHModm5vZGUsIHZkb20pIHtcbiAgICAgICAgaWYgKHZub2RlICYmIHZkb20pIHtcbiAgICAgICAgICAgIGxldCBjaGlsZE5vZGVzID0gdmRvbS5jaGlsZE5vZGVzIHx8IHZkb20uY24sXG4gICAgICAgICAgICAgICAgY24sIGksIGxlbjtcblxuICAgICAgICAgICAgaWYgKHZub2RlLmlkICYmIHZub2RlLmlkICE9PSB2ZG9tLmlkKSB7XG4gICAgICAgICAgICAgICAgdmRvbS5pZCA9IHZub2RlLmlkO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2ZG9tIGlkIHNldCB0bycsIHZub2RlLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjbiAgID0gY2hpbGROb2Rlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlbW92ZURvbSAhPT0gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaSAgICA9IDA7XG4gICAgICAgICAgICAgICAgbGVuICA9IGNuPy5sZW5ndGggfHwgMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZEb20uc3luY1Zkb21JZHModm5vZGUuY2hpbGROb2Rlc1tpXSwgY25baV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWRG9tKTtcblxuZXhwb3J0IGRlZmF1bHQgVkRvbTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5WTm9kZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBWTm9kZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5WTm9kZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuVk5vZGUnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB2bm9kZSBjaGlsZCBub2RlcyBieSBpZCBvciBvcHRzIG9iamVjdCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyZW50Tm9kZV0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICogICAgIHtOdW1iZXJ9IGluZGV4XG4gICAgICogICAgIHtTdHJpbmd9IHBhcmVudElkXG4gICAgICogICAgIHtPYmplY3R9IHZub2RlXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDaGlsZFZub2RlKHZub2RlLCBvcHRzLCBpbmRleCwgcGFyZW50Tm9kZSkge1xuICAgICAgICBpbmRleCA9IGluZGV4IHx8IDA7XG4gICAgICAgIG9wdHMgID0gdHlwZW9mIG9wdHMgIT09ICdzdHJpbmcnID8gb3B0cyA6IHtpZDogb3B0c307XG5cbiAgICAgICAgbGV0IGF0dHJNYXRjaCAgPSB0cnVlLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdLFxuICAgICAgICAgICAgc3R5bGVNYXRjaCA9IHRydWUsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSB2bm9kZS5jaGlsZE5vZGVzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIG9wdHNBcnJheSwgb3B0c0xlbmd0aCwgc3ViQ2hpbGQ7XG5cbiAgICAgICAgb3B0c0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKG9wdHMpO1xuICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aDtcblxuICAgICAgICBvcHRzQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodm5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2F0dHJLZXksIGF0dHJWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodm5vZGVba2V5XS5oYXNPd25Qcm9wZXJ0eShhdHRyS2V5KSAmJiB2bm9kZVtrZXldW2F0dHJLZXldID09PSBhdHRyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2bm9kZVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2bm9kZSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRDaGlsZFZub2RlOiBjbHMgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgdGFyZ2V0ICYgc291cmNlIHR5cGVzIG9mIEFycmF5cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbc3R5bGVLZXksIHN0eWxlVmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZub2RlW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZub2RlW2tleV1bc3R5bGVLZXldID09PSBzdHlsZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbmRleCwgcGFyZW50Tm9kZSwgdm5vZGV9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgc3ViQ2hpbGQgPSBWTm9kZS5maW5kQ2hpbGRWbm9kZSh2bm9kZS5jaGlsZE5vZGVzW2ldLCBvcHRzLCBpLCB2bm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gaWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IGNoaWxkIHZub2RlIG9yIG51bGxcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENoaWxkVm5vZGVCeUlkKHZub2RlLCBpZCkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkTm9kZXMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdm5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGROb2RlID0gVk5vZGUuZmluZENoaWxkVm5vZGVCeUlkKGNoaWxkTm9kZSwgaWQpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWRzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiB0aGUgZ2l2ZW4gdm5vZGVcbiAgICAgKiBAcGFyYW0gdm5vZGVcbiAgICAgKiBAcGFyYW0gW2NoaWxkSWRzPVtdXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzPVtdKSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUgJiYgdm5vZGUuY2hpbGROb2RlcyB8fCBbXTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkTm9kZS5pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkSWRzID0gVk5vZGUuZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZElkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlbW92ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlQ2hpbGRWbm9kZSh2bm9kZSwgaWQpIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZW1vdmVDaGlsZFZub2RlOiB0YXJnZXQgaWQgbWF0Y2hlcyB0aGUgcm9vdCB2bm9kZSBpZDogJyArIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWTm9kZS5yZW1vdmVDaGlsZFZub2RlKGNoaWxkTm9kZSwgaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBjaGlsZCB2bm9kZSBpbnNpZGUgYSB2bm9kZSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Q2hpbGRWbm9kZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZXBsYWNlQ2hpbGRWbm9kZSh2bm9kZSwgaWQsIG5ld0NoaWxkVm5vZGUpIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBsYWNlQ2hpbGRWbm9kZTogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNbaV0gPSBuZXdDaGlsZFZub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVk5vZGUucmVwbGFjZUNoaWxkVm5vZGUoY2hpbGROb2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZOb2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgVk5vZGU7XG4iLCJpbXBvcnQgQ29yZUJhc2UgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBNZXNzYWdlICAgICAgICAgICAgZnJvbSAnLi9NZXNzYWdlLm1qcyc7XG5pbXBvcnQgUmVtb3RlTWV0aG9kQWNjZXNzIGZyb20gJy4vbWl4aW4vUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyc7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIHRoZSBBcHAsIERhdGEgJiBWRG9tIHdvcmtlclxuICogQGNsYXNzIE5lby53b3JrZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGNoYW5uZWxQb3J0cz1udWxsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNoYW5uZWxQb3J0cyA9IG51bGxcbiAgICAvKipcbiAgICAgKiBPbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzQ29ubmVjdGVkPWZhbHNlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGlzQ29ubmVjdGVkID0gZmFsc2VcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1NoYXJlZFdvcmtlcj1mYWxzZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpc1NoYXJlZFdvcmtlciA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogT25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBwb3J0cz1udWxsXG4gICAgICovXG4gICAgcG9ydHMgPSBudWxsXG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1bT2JzZXJ2YWJsZSxSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHdvcmtlcklkPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGd0ID0gZ2xvYmFsVGhpcztcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7XG4gICAgICAgICAgICBjaGFubmVsUG9ydHMgIDoge30sXG4gICAgICAgICAgICBpc1NoYXJlZFdvcmtlcjogZ3QudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgU2hhcmVkV29ya2VyR2xvYmFsU2NvcGVdJyxcbiAgICAgICAgICAgIHBvcnRzICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgIHByb21pc2VzICAgICAgOiB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIGd0Lm9uY29ubmVjdCA9IG1lLm9uQ29ubmVjdGVkLmJpbmQobWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3Qub25tZXNzYWdlID0gbWUub25NZXNzYWdlLmJpbmQobWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIgPSBtZTtcbiAgICAgICAgTmVvLndvcmtlcklkICAgICAgPSBtZS53b3JrZXJJZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbnRyeSBwb2ludCBmb3IgZGVkaWNhdGVkIGFuZCBzaGFyZWQgd29ya2Vyc1xuICAgICAqL1xuICAgIGFmdGVyQ29ubmVjdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQb3J0KG9wdHMpIHtcbiAgICAgICAgbGV0IHJldHVyblBvcnQgPSBudWxsLFxuICAgICAgICAgICAgaGFzTWF0Y2g7XG5cbiAgICAgICAgdGhpcy5wb3J0cy5mb3JFYWNoKHBvcnQgPT4ge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHBvcnRba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Qb3J0ID0gcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblBvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSByZWxldmFudCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db25uZWN0KGRhdGEpIHtcbiAgICAgICAgLy8gc2hvcnQgZGVsYXkgdG8gZW5zdXJlIGFwcCBWQ3MgYXJlIGluIHBsYWNlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlKCdjb25uZWN0Jywge1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IGRhdGEuYXBwTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBvbkNvbm5lY3RlZChlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpZCA9IE5lby5nZXRJZCgncG9ydCcpO1xuXG4gICAgICAgIG1lLmlzQ29ubmVjdGVkID0gdHJ1ZTtcblxuICAgICAgICBtZS5wb3J0cy5wdXNoKHtcbiAgICAgICAgICAgIGFwcE5hbWU6IG51bGwsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHBvcnQgICA6IGUucG9ydHNbMF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucG9ydHNbbWUucG9ydHMubGVuZ3RoIC0gMV0ucG9ydC5vbm1lc3NhZ2UgPSBtZS5vbk1lc3NhZ2UuYmluZChtZSk7XG5cbiAgICAgICAgLy8gY29yZS5CYXNlOiBpbml0UmVtb3RlKCkgc3Vic2NyaWJlcyB0byB0aGlzIGV2ZW50IGZvciB0aGUgU2hhcmVkV29ya2VycyBjb250ZXh0XG4gICAgICAgIG1lLmZpcmUoJ2Nvbm5lY3RlZCcpO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3dvcmtlckNvbnN0cnVjdGVkJywgcG9ydDogaWR9KTtcblxuICAgICAgICBtZS5hZnRlckNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG1lLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3dvcmtlckNvbnN0cnVjdGVkJ30pO1xuICAgICAgICAgICAgbWUuYWZ0ZXJDb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRpc2Nvbm5lY3QoZGF0YSkge1xuICAgICAgICB0aGlzLmZpcmUoJ2Rpc2Nvbm5lY3QnLCB7XG4gICAgICAgICAgICBhcHBOYW1lOiBkYXRhLmFwcE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBvbk1lc3NhZ2UoZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkYXRhICAgID0gZS5kYXRhLFxuICAgICAgICAgICAgYWN0aW9uICA9IGRhdGEuYWN0aW9uLFxuICAgICAgICAgICAgcmVwbHlJZCA9IGRhdGEucmVwbHlJZCxcbiAgICAgICAgICAgIHByb21pc2U7XG5cbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBhY3Rpb24gaXMgbWlzc2luZzogJyArIGRhdGEuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gJ3JlcGx5Jykge1xuICAgICAgICAgICAgbWVbJ29uJyArIE5lby5jYXBpdGFsaXplKGFjdGlvbildKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb21pc2UgPSBhY3Rpb24gPT09ICdyZXBseScgJiYgbWUucHJvbWlzZXNbcmVwbHlJZF0pIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlamVjdCkge1xuICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhLmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgbWUucHJvbWlzZXNbcmVwbHlJZF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25QaW5nKG1zZykge1xuICAgICAgICB0aGlzLnJlc29sdmUobXNnLCB7XG4gICAgICAgICAgICBvcmlnaW5Nc2c6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtc2cuYXBwTmFtZVxuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJBcHAobXNnKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFwcE5hbWUgPSBtc2cuYXBwTmFtZSxcbiAgICAgICAgICAgIHBvcnQ7XG5cbiAgICAgICAgZm9yIChwb3J0IG9mIG1lLnBvcnRzKSB7XG4gICAgICAgICAgICBpZiAoIXBvcnQuYXBwTmFtZSkge1xuICAgICAgICAgICAgICAgIHBvcnQuYXBwTmFtZSA9IGFwcE5hbWU7XG4gICAgICAgICAgICAgICAgbWUub25Db25uZWN0KHsgYXBwTmFtZSB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyTmVvQ29uZmlnKG1zZykge1xuICAgICAgICBOZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihOZW8uY29uZmlnLCBtc2cuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHByb21pc2VNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXG4gICAgICAgICAgICAgICAgbXNnSWQgICA9IG1lc3NhZ2UuaWQ7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VzW21zZ0lkXSA9IHsgcmVqZWN0LCByZXNvbHZlIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgZGF0YSwgbWFpbiBvciB2ZG9tIChleGNsdWRpbmcgdGhlIGN1cnJlbnQgd29ya2VyKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXG4gICAgICogQHJldHVybnMge05lby53b3JrZXIuTWVzc2FnZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgb3B0cy5kZXN0aW5hdGlvbiA9IGRlc3Q7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsIHBvcnQsIHBvcnRPYmplY3Q7XG5cbiAgICAgICAgaWYgKG1lLmNoYW5uZWxQb3J0c1tkZXN0XSkge1xuICAgICAgICAgICAgcG9ydCA9IG1lLmNoYW5uZWxQb3J0c1tkZXN0XTtcbiAgICAgICAgfSBlbHNlIGlmICghbWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIHBvcnQgPSBnbG9iYWxUaGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdHMucG9ydCkge1xuICAgICAgICAgICAgICAgIHBvcnQgPSBtZS5nZXRQb3J0KHtpZDogb3B0cy5wb3J0fSkucG9ydDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0cy5hcHBOYW1lKSB7XG4gICAgICAgICAgICAgICAgcG9ydE9iamVjdCA9IG1lLmdldFBvcnQoe2FwcE5hbWU6IG9wdHMuYXBwTmFtZX0pO1xuICAgICAgICAgICAgICAgIHBvcnQgICAgICAgPSBwb3J0T2JqZWN0LnBvcnQ7XG5cbiAgICAgICAgICAgICAgICBvcHRzLnBvcnQgPSBwb3J0T2JqZWN0LmlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gbWUucG9ydHNbMF0ucG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShvcHRzKTtcblxuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZTtcbiIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuLi9jb3JlL0lkR2VuZXJhdG9yLm1qcyc7XG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB3b3JrZXIgcG9zdCBtZXNzYWdlcyBzZW50IGJldHdlZW4gdGhlIEFwcCwgRGF0YSwgVkRvbSB3b3JrZXIgJiB0aGUgbWFpbiB0aHJlYWQuXG4gKiBZb3UgY2FuIGFkZCBvcHRpb25hbCBwYXJhbXMgYXMgbmVlZGVkLlxuICogQGNsYXNzIE5lby53b3JrZXIuTWVzc2FnZVxuICovXG5jbGFzcyBNZXNzYWdlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFjdGlvblxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZXN0aW5hdGlvbj0nbWFpbidcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWQ9SWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvcmlnaW49TmVvLndvcmtlcklkXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbmZpZy5kZXN0aW5hdGlvbiA9IGNvbmZpZy5kZXN0aW5hdGlvbiB8fCAnbWFpbic7XG4gICAgICAgIGNvbmZpZy5pZCAgICAgICAgICA9IGNvbmZpZy5pZCAgICAgICAgICB8fCBJZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpO1xuICAgICAgICBjb25maWcub3JpZ2luICAgICAgPSBjb25maWcub3JpZ2luICAgICAgfHwgTmVvLndvcmtlcklkO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB9XG59XG5cbmNvbnN0IG5zID0gTmVvLm5zKCdOZW8ud29ya2VyJywgdHJ1ZSk7XG5uc1snTWVzc2FnZSddID0gTWVzc2FnZTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2Vzc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBSZW1vdGVNZXRob2RBY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0sICo9KTogUHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb3JpZ2luID0gcmVtb3RlLm9yaWdpbjtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgYnVmZmVyKSB7XG4gICAgICAgICAgICBsZXQgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgICAgICA6ICdyZW1vdGVNZXRob2QnLFxuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24gICAgOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2xhc3NOYW1lOiByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHJlbW90ZU1ldGhvZCAgIDogbWV0aG9kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAobWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmFwcE5hbWUgPSBkYXRhPy5hcHBOYW1lO1xuICAgICAgICAgICAgICAgIG9wdHMucG9ydCAgICA9IGRhdGE/LnBvcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlTWVzc2FnZShvcmlnaW4sIG9wdHMsIGJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICovXG4gICAgb25SZWdpc3RlclJlbW90ZShyZW1vdGUpIHtcbiAgICAgICAgaWYgKHJlbW90ZS5kZXN0aW5hdGlvbiA9PT0gTmVvLndvcmtlcklkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIG1ldGhvZHMgICA9IHJlbW90ZS5tZXRob2RzLFxuICAgICAgICAgICAgICAgIHBrZyAgICAgICA9IE5lby5ucyhjbGFzc05hbWUsIHRydWUpO1xuXG4gICAgICAgICAgICBtZXRob2RzLmZvckVhY2gobWV0aG9kID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3RlLm9yaWdpbiAhPT0gJ21haW4nICYmIHBrZ1ttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIHJlbW90ZSBtZXRob2QgZGVmaW5pdGlvbiAnICsgY2xhc3NOYW1lICsgJy4nICsgbWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBrZ1ttZXRob2RdICkge1xuICAgICAgICAgICAgICAgICAgICBwa2dbbWV0aG9kXSA9IG1lLmdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcblxuICAgICAgICBpZiAoIXBrZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kID0gcGtnW21zZy5yZW1vdGVNZXRob2RdO1xuXG4gICAgICAgIGlmICghbWV0aG9kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG1ldGhvZCBuYW1lIFwiJyArIG1zZy5yZW1vdGVNZXRob2QgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBvdXQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgbWUucmVqZWN0KG1zZywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIG91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG1zZy5hcHBOYW1lO1xuICAgICAgICAgICAgb3B0cy5wb3J0ICAgID0gbXNnLnBvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZXNvbHZlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc29sdmUobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbXNnLmFwcE5hbWU7XG4gICAgICAgICAgICBvcHRzLnBvcnQgICAgPSBtc2cucG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xuXG5leHBvcnQgZGVmYXVsdCBSZW1vdGVNZXRob2RBY2Nlc3M7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJjaHVua3MvYXBwL1wiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAxXG59O1xuXG4vLyBpbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmdcbnZhciBpbnN0YWxsQ2h1bmsgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG59O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmkgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW1wb3J0U2NyaXB0cyhfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCkpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmttYWluYXBwXCJdID0gc2VsZltcIndlYnBhY2tDaHVua21haW5hcHBcIl0gfHwgW107XG52YXIgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24gPSBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsImltcG9ydCBOZW8gICAgICAgICAgICAgZnJvbSAnLi4vTmVvLm1qcyc7XG5pbXBvcnQgQmFzZSAgICAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0ICogYXMgY29yZSAgICAgICBmcm9tICcuLi9jb3JlL19leHBvcnQubWpzJztcbmltcG9ydCBBcHBsaWNhdGlvbiAgICAgZnJvbSAnLi4vY29udHJvbGxlci9BcHBsaWNhdGlvbi5tanMnO1xuaW1wb3J0IEluc3RhbmNlICAgICAgICBmcm9tICcuLi9tYW5hZ2VyL0luc3RhbmNlLm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRNYW5hZ2VyIGZyb20gJy4uL21hbmFnZXIvRG9tRXZlbnQubWpzJztcbmltcG9ydCBIYXNoSGlzdG9yeSAgICAgZnJvbSAnLi4vdXRpbC9IYXNoSGlzdG9yeS5tanMnO1xuXG4vKipcbiAqIFRoZSBBcHAgd29ya2VyIGNvbnRhaW5zIG1vc3QgcGFydHMgb2YgdGhlIGZyYW1ld29yayBhcyB3ZWxsIGFzIGFsbCBhcHBzIHdoaWNoIGdldCBjcmVhdGVkLlxuICogU2VlIHRoZSB0dXRvcmlhbHMgZm9yIGZ1cnRoZXIgaW5mb3MuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5BcHBcbiAqIEBleHRlbmRzIE5lby53b3JrZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBBcHAgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZGF0YT1udWxsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGRhdGEgPSBudWxsXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNVc2luZ1ZpZXdNb2RlbHM9ZmFsc2VcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaXNVc2luZ1ZpZXdNb2RlbHMgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIFdlIGFyZSBzdG9yaW5nIHRoZSBwYXJhbXMgb2YgaW5zZXJ0VGhlbWVGaWxlcygpIGNhbGxzIGhlcmUsIGluIGNhc2UgdGhlIG1ldGhvZCBkb2VzIGdldCB0cmlnZ2VyZWRcbiAgICAgKiBiZWZvcmUgdGhlIGpzb24gdGhlbWUgc3RydWN0dXJlIGdvdCBsb2FkZWQuXG4gICAgICogQG1lbWJlciB7QXJyYXlbXX0gdGhlbWVGaWxlc0NhY2hlPVtdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoZW1lRmlsZXNDYWNoZSA9IFtdXG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5BcHAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuQXBwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gd29ya2VySWQ9J2FwcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6ICdhcHAnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuICAgICAgICBOZW8uYXBwbHlEZWx0YXMgPSB0aGlzLmFwcGx5RGVsdGFzLmJpbmQodGhpcyk7IC8vIGNvbnZlbmllbmNlIHNob3J0Y3V0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFwcE5hbWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gZGVsdGFzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Kj59XG4gICAgICovXG4gICAgYXBwbHlEZWx0YXMoYXBwTmFtZSwgZGVsdGFzKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgY3JlYXRlVGhlbWVNYXAoZGF0YSkge1xuICAgICAgICBOZW8ubnMoJ05lby5jc3NNYXAuZmlsZUluZm8nLCB0cnVlKTtcbiAgICAgICAgTmVvLmNzc01hcC5maWxlSW5mbyA9IGRhdGE7XG4gICAgICAgIHRoaXMucmVzb2x2ZVRoZW1lRmlsZXNDYWNoZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgbmVlZGVkIGZvciB0aGUgU2hhcmVkV29ya2VycyBjb250ZXh0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZmlyZU1haW5WaWV3c0V2ZW50KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICB0aGlzLnBvcnRzLmZvckVhY2gocG9ydCA9PiB7XG4gICAgICAgICAgICBOZW8uYXBwc1twb3J0LmFwcE5hbWVdLm1haW5WaWV3SW5zdGFuY2UuZmlyZShldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGltcG9ydEFwcChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoLmVuZHNXaXRoKCcubWpzJykpIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIC00KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrSW5jbHVkZTogL1tcXFxcXFwvXWFwcC5tanMkLyAqL1xuICAgICAgICAgICAgLyogd2VicGFja0V4Y2x1ZGU6IC9bXFxcXFxcL11ub2RlX21vZHVsZXMvICovXG4gICAgICAgICAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICAgICAgICAgIGAuLi8uLi8ke3BhdGh9Lm1qc2BcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIGluY2x1ZGUgcHJvdG90eXBlIGJhc2VkIENTUyBmaWxlcywgdXNlIHRoZSBjbGFzc05hbWUgcGFyYW0gaW5zdGVhZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhcHBOYW1lXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBbcHJvdG9dXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtjbGFzc05hbWVdXG4gICAgICovXG4gICAgaW5zZXJ0VGhlbWVGaWxlcyhhcHBOYW1lLCBwcm90bywgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChOZW8uY29uZmlnLnRoZW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgcHJvdG8uY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGxBcHBOYW1lID0gYXBwTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIGNzc01hcCAgID0gTmVvLmNzc01hcCxcbiAgICAgICAgICAgICAgICBwYXJlbnQgICA9IHByb3RvPy5fX3Byb3RvX18sXG4gICAgICAgICAgICAgICAgY2xhc3NQYXRoLCBmaWxlTmFtZSwgbWFwQ2xhc3NOYW1lLCBucywgdGhlbWVGb2xkZXJzO1xuXG4gICAgICAgICAgICBpZiAoIWNzc01hcCkge1xuICAgICAgICAgICAgICAgIG1lLnRoZW1lRmlsZXNDYWNoZS5wdXNoKFthcHBOYW1lLCBwcm90b10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIG1vZGlmeSBhcHAgcmVsYXRlZCBjbGFzcyBuYW1lc1xuICAgICAgICAgICAgICAgIGlmICghY2xhc3NOYW1lLnN0YXJ0c1dpdGgoJ05lby4nKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lWzBdID09PSAndmlldycgJiYgY2xhc3NOYW1lLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWFwQ2xhc3NOYW1lID0gYGFwcHMuJHtOZW8uYXBwc1thcHBOYW1lXS5hcHBUaGVtZUZvbGRlciB8fCBsQXBwTmFtZX0uJHtjbGFzc05hbWUuam9pbignLicpfWA7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSAgICA9IGBhcHBzLiR7bEFwcE5hbWV9LiR7Y2xhc3NOYW1lLmpvaW4oJy4nKX1gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50ICE9PSBOZW8uY29yZS5CYXNlLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIU5lby5ucyhgJHtsQXBwTmFtZX0uJHtwYXJlbnQuY2xhc3NOYW1lfWAsIGZhbHNlLCBjc3NNYXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5pbnNlcnRUaGVtZUZpbGVzKGFwcE5hbWUsIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGVtZUZvbGRlcnMgPSBOZW8ubnMobWFwQ2xhc3NOYW1lIHx8IGNsYXNzTmFtZSwgZmFsc2UsIGNzc01hcC5maWxlSW5mbyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhlbWVGb2xkZXJzICYmICFOZW8ubnMoYCR7bEFwcE5hbWV9LiR7Y2xhc3NOYW1lfWAsIGZhbHNlLCBjc3NNYXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzUGF0aCA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZSAgPSBjbGFzc1BhdGgucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzUGF0aCA9IGNsYXNzUGF0aC5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIG5zICAgICAgICA9IE5lby5ucyhgJHtsQXBwTmFtZX0uJHtjbGFzc1BhdGh9YCwgdHJ1ZSwgY3NzTWFwKTtcblxuICAgICAgICAgICAgICAgICAgICBuc1tmaWxlTmFtZV0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLlN0eWxlc2hlZXQuYWRkVGhlbWVGaWxlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBtYXBDbGFzc05hbWUgfHwgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVycyAgOiB0aGVtZUZvbGRlcnNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgZG9tIGV2ZW50IHdpbGwgZ2V0IGZvcndhcmRlZCBhcyBhIHdvcmtlciBtZXNzYWdlIGZyb20gbWFpbiBhbmQgZW5kcyB1cCBoZXJlIGZpcnN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdXNlZnVsIGV2ZW50IHByb3BlcnRpZXMsIGRpZmZlcnMgZm9yIGRpZmZlcmVudCBldmVudCB0eXBlcy4gU2VlIE5lby5tYWluLkRvbUV2ZW50cy5cbiAgICAgKi9cbiAgICBvbkRvbUV2ZW50KGRhdGEpIHtcbiAgICAgICAgRG9tRXZlbnRNYW5hZ2VyLmZpcmUoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgVVJMIGhhc2gtY2hhbmdlIHdpbGwgY3JlYXRlIGEgcG9zdCBtZXNzYWdlIGluIG1haW4gYW5kIGVuZCB1cCBoZXJlIGZpcnN0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHBhcnNlZCBrZXktdmFsdWUgcGFpcnMgZm9yIGVhY2ggaGFzaCB2YWx1ZVxuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZShkYXRhKSB7XG4gICAgICAgIEhhc2hIaXN0b3J5LnB1c2goZGF0YS5kYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIGFwcHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTG9hZEFwcGxpY2F0aW9uKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgPSBOZW8uY29uZmlnLFxuICAgICAgICAgICAgcGF0aDtcblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgbWUuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBjb25maWcucmVzb3VyY2VzUGF0aCA9IGRhdGEucmVzb3VyY2VzUGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGggPSBtZS5kYXRhLnBhdGg7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5lbnZpcm9ubWVudCAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaW1wb3J0QXBwKHBhdGgpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgICAgIG1vZHVsZS5vblN0YXJ0KCk7XG5cbiAgICAgICAgICAgIC8vIHNob3J0IGRlbGF5IHRvIGVuc3VyZSBDb21wb25lbnQgQ29udHJvbGxlcnMgYXJlIHJlYWR5XG4gICAgICAgICAgICBjb25maWcuaGFzaCAmJiBzZXRUaW1lb3V0KCgpID0+IEhhc2hIaXN0b3J5LnB1c2goY29uZmlnLmhhc2gpLCA1KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJOZW9Db25maWcobXNnKSB7XG4gICAgICAgIHN1cGVyLm9uUmVnaXN0ZXJOZW9Db25maWcobXNnKTtcblxuICAgICAgICBsZXQgY29uZmlnID0gTmVvLmNvbmZpZyxcbiAgICAgICAgICAgIHVybCAgICA9IGByZXNvdXJjZXMvdGhlbWUtbWFwJHtjb25maWcudXNlQ3NzVmFycyA/ICcnIDogJy1uby12YXJzJ30uanNvbmA7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5lbnZpcm9ubWVudCA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgdXJsID0gYC4uLy4uLyR7dXJsfWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLndvcmtlckJhc2VQYXRoPy5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHVybCA9IGAuLi8uLi8ke3VybH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybFswXSAhPT0gJy4nKSB7XG4gICAgICAgICAgICB1cmwgPSBgLi8ke3VybH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7dGhpcy5jcmVhdGVUaGVtZU1hcChkYXRhKX0pO1xuXG4gICAgICAgIGNvbmZpZy5yZW1vdGVzQXBpVXJsICAmJiBpbXBvcnQoJy4uL3JlbW90ZXMvQXBpLm1qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0LmxvYWQoKSk7XG4gICAgICAgICFjb25maWcudXNlVmRvbVdvcmtlciAmJiBpbXBvcnQoJy4uL3Zkb20vSGVscGVyLm1qcycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyUG9ydChtc2cpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgcG9ydCA9IG1zZy50cmFuc2ZlcjtcblxuICAgICAgICBwb3J0Lm9ubWVzc2FnZSA9IG1lLm9uTWVzc2FnZS5iaW5kKG1lKTtcblxuICAgICAgICBtZS5jaGFubmVsUG9ydHNbbXNnLm9yaWdpbl0gPSBwb3J0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25XaW5kb3dQb3NpdGlvbkNoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZU1haW5WaWV3c0V2ZW50KCd3aW5kb3dQb3NpdGlvbkNoYW5nZScsIGRhdGEuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXBwTmFtZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyQXBwKGFwcE5hbWUpIHtcbiAgICAgICAgLy8gcmVnaXN0ZXIgdGhlIG5hbWUgYXMgZmFzdCBhcyBwb3NzaWJsZVxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJBcHAoeyBhcHBOYW1lIH0pO1xuXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdyZWdpc3RlckFwcE5hbWUnLFxuICAgICAgICAgICAgYXBwTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVyIHRoZSBhcHAgZnJvbSB0aGUgQ1NTIG1hcFxuICAgICAqIE9ubHkgbmVlZGVkIGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGFwcE5hbWVcbiAgICAgKi9cbiAgICByZW1vdmVBcHBGcm9tVGhlbWVNYXAoYXBwTmFtZSkge1xuICAgICAgICBkZWxldGUgTmVvLmNzc01hcFthcHBOYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVzb2x2ZVRoZW1lRmlsZXNDYWNoZSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS50aGVtZUZpbGVzQ2FjaGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIG1lLmluc2VydFRoZW1lRmlsZXMoLi4uaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnRoZW1lRmlsZXNDYWNoZSA9IFtdO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBwKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShBcHApO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=