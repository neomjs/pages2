/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./. lazy recursive ^\\.\\/.*\\.mjs$ include: (?:\\/%7C\\\\)app.mjs$ exclude: (?:\\/%7C\\\\)(dist%7Cnode_modules)":
/*!******************************************************************************************************************************!*\
  !*** ././ lazy ^\.\/.*\.mjs$ include: (?:\/%7C\\)app.mjs$ exclude: (?:\/%7C\\)(dist%7Cnode_modules) strict namespace object ***!
  \******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./apps/myapp/app.mjs": [
		"./apps/myapp/app.mjs",
		"vendors-node_modules_neo_mjs_src_container_Viewport_mjs-node_modules_neo_mjs_src_toolbar_Base_mjs",
		"apps_myapp_app_mjs"
	],
	"./docs/app.mjs": [
		"./docs/app.mjs",
		"vendors-node_modules_neo_mjs_src_container_Viewport_mjs-node_modules_neo_mjs_src_toolbar_Base_mjs",
		"vendors-node_modules_neo_mjs_src_list_Base_mjs",
		"vendors-node_modules_neo_mjs_src_container_Panel_mjs-node_modules_neo_mjs_src_controller_Comp-5d4bf1",
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
webpackAsyncContext.id = "./. lazy recursive ^\\.\\/.*\\.mjs$ include: (?:\\/%7C\\\\)app.mjs$ exclude: (?:\\/%7C\\\\)(dist%7Cnode_modules)";
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
     * true will apply 'position: fixed' to the html tag itself
     * See: https://github.com/neomjs/neo/issues/6429
     * @default true
     * @memberOf! module:Neo
     * @name config.applyFixedPositionToHtmlTag
     * @type Boolean
     */
    applyFixedPositionToHtmlTag: true,
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
     * @default undefined
     * @memberOf! module:Neo
     * @name config.cesiumJsToken
     * @type String|null
     */

    /**
     * Set this config to false to disable the component logging using Ctrl-Right-Click
     * @default true
     * @memberOf! module:Neo
     * @name config.enableComponentLogger
     * @type Boolean
     */
    enableComponentLogger: true,
    /**
     * Set this config to true to enable util.Logger (Neo.log()) based logs in production
     * @default false
     * @memberOf! module:Neo
     * @name config.enableLogsInProduction
     * @type Boolean
     */
    enableLogsInProduction: false,
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
     * In case you are using the GoogleMaps main thread addon, you can pass the API key here.
     * @default undefined
     * @memberOf! module:Neo
     * @name config.googleMapsApiKey
     * @type String
     */

    /**
     * In case you are using the GoogleAnalytics main thread addon or useGoogleAnalytics: true,
     * you can change the gtag id here. Required for the online examples (gh pages)
     * @default undefined
     * @memberOf! module:Neo
     * @name config.gtagId
     * @type String
     */

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
     * true will log console warnings, in case a component tries to update() while a parent update is running.
     * A parent update results in a short delay, so you might want to resolve these collisions.
     * @default false
     * @memberOf! module:Neo
     * @name config.logVdomUpdateCollisions
     * @type Boolean
     */
    logVdomUpdateCollisions: false,
    /**
     * Add addons for the main thread
     * ./src/main/addon/ contains all framework related options.
     * You can also create your own addons within your workspace scope. Make sure to put them inside 'src/main/addon/'
     * and prefix them with 'WS/' inside your neo-config.json file.
     * Example: ['DragDrop', 'Stylesheet', 'WS/MyAddon']
     * @default ['DragDrop', 'Navigator', 'Stylesheet']
     * @memberOf! module:Neo
     * @name config.mainThreadAddons
     * @type String[]
     */
    mainThreadAddons: ['DragDrop', 'Navigator', 'Stylesheet'],
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
     * @default ['neo-theme-light','neo-theme-dark','neo-theme-neo-light']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark', 'neo-theme-neo-light'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
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
     *
     * You can also use a string to specify the target environment => 'dist/production'.
     * Using 'dist/production' will also use the service worker for 'dist/esm'
     * @default false
     * @memberOf! module:Neo
     * @name config.useServiceWorker
     * @type Boolean|String
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
     * True will generate a new task worker, which can get filled with own expensive remote methods
     * @default false
     * @memberOf! module:Neo
     * @name config.useTaskWorker
     * @type Boolean
     */
    useTaskWorker: false,
    /**
     * False will create the vdom.Helper within the App worker (experimental!)
     * @default true
     * @memberOf! module:Neo
     * @name config.useVdomWorker
     * @type Boolean
     */
    useVdomWorker: true,
    /**
     * buildScripts/injectPackageVersion.mjs will update this value
     * @default '9.10.2'
     * @memberOf! module:Neo
     * @name config.version
     * @type String
     */
    version: '9.10.2'
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


const
    camelRegex   = /-./g,
    configSymbol = Symbol.for('configSymbol'),
    getSetCache  = Symbol('getSetCache'),
    typeDetector = {
        function: item => {
            if (item.prototype?.constructor.isClass) {
                return 'NeoClass'
            }
        },
        object: item => {
            if (item.constructor.isClass && item instanceof Neo.core.Base) {
                return 'NeoInstance'
            }
        }
    };

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
     * @param {Neo|Neo.core.Base} target    The target class or singleton Instance or Neo
     * @param {Neo.core.Base}     namespace The class containing the methods
     * @param {Object}            config
     * @param {Boolean}           [bind]    set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs(target, namespace, config, bind) {
        let fnName;

        if (target && Neo.typeOf(config) === 'Object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName
            })
        }

        return target
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs(cls) {
        let proto     = typeof cls === 'function' ? cls.prototype : cls,
            className = proto.isClass ? proto.config.className : proto.className,
            nsArray   = className.split('.'),
            key       = nsArray.pop(),
            ns        = Neo.ns(nsArray, true);

        ns[key] = cls
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target   The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults(target, defaults) {
        if (target && Neo.typeOf(defaults) === 'Object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!Object.hasOwn(target, key)) {
                    target[key] = value
                }
            })
        }

        return target
    },

    /**
     * Assigns a new value to a given nested objects path.
     * It will create the path structure or parts of it, in case it does not exist.
     * @example
     * Neo.assignToNs('annotations.selected', false, record)
     *
     * @memberOf module:Neo
     * @param {String[]|String} path             The path string containing dots or an Array of the string parts
     * @param {*}               value            The new value to assign to the leaf node
     * @param {Object}          scope=globalThis Set a different starting point as globalThis
     * @param {Boolean}         force=true       false will only assign default values (assign if old value === undefined)
     */
    assignToNs(path, value, scope=globalThis, force=true) {
        path = Array.isArray(path) ? path : path.split('.');

        let key;

        if (path.length > 1) {
            key   = path.pop();
            scope = Neo.ns(path, true, scope)
        } else {
            key = path
        }

        if (force || scope[key] === undefined) {
            scope[key] = value
        }
    },

    /**
     * Converts kebab-case strings into camel-case
     * @memberOf module:Neo
     * @param {String} value The target object
     * @returns {String}
     */
    camel(value) {
        return value.replace(camelRegex, match => match[1].toUpperCase())
    },

    /**
     * Makes the first character of a string uppercase
     * @memberOf module:Neo
     * @param {String} value
     * @returns {Boolean|String} Returns false for non string inputs
     */
    capitalize(value) {
        return value[0].toUpperCase() + value.slice(1)
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} deep=false               Set this to true in case you want to clone nested objects as well
     * @param {Boolean} ignoreNeoInstances=false returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone(obj, deep=false, ignoreNeoInstances=false) {
        let out;

        return {
            Array      : () => !deep ? [...obj] : [...obj.map(val => Neo.clone(val, deep, ignoreNeoInstances))],
            Date       : () => new Date(obj.valueOf()),
            Map        : () => new Map(obj), // shallow copy
            NeoInstance: () => ignoreNeoInstances ? obj : this.cloneNeoInstance(obj),
            Set        : () => new Set(obj),

            Object: () => {
                out = {};

                Object.entries(obj).forEach(([key, value]) => {
                    out[key] = !deep ? value : Neo.clone(value, deep, ignoreNeoInstances)
                });

                return out
            }
        }[Neo.typeOf(obj)]?.() || obj
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

        return Neo.create(instance.className, config)
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
     * @param {Object}                      [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create(className, config) {
        let type = Neo.typeOf(className),
            cls, instance;

        if (type === 'NeoClass') {
            cls = className
        } else {
            if (type === 'Object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null
                }

                className = config.className || config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist')
            }

            cls = Neo.ns(className)
        }

        instance = new cls();

        instance.construct(config);
        instance.onConstructed();
        instance.onAfterConstructed();
        instance.init();

        return instance
    },

    /**
     *
     */
    emptyFn() {},

    /**
     * Checks if there is a set method for a given property key inside the prototype chain
     * @memberOf module:Neo
     * @param {Neo.core.Base} proto The top level prototype of a class
     * @param {String}        key   The property key to test
     * @returns {Boolean}
     */
    hasPropertySetter(proto, key) {
        let descriptor;

        while (proto.__proto__) {
            descriptor = Object.getOwnPropertyDescriptor(proto, key);

            if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
                return true
            }

            proto = proto.__proto__
        }

        return false
    },

    /**
     * Deep-merges a source object into a target object
     * @memberOf module:Neo
     * @param {Object} target
     * @param {Object} source
     * @param {Object} defaults
     * @returns {Object} target
     */
    merge(target, source, defaults) {
        if (defaults) {
            return Neo.merge(Neo.merge(target, defaults), source)
        }

        for (const key in source) {
            const value = source[key];

            if (Neo.typeOf(value) === 'Object') {
                target[key] = Neo.merge(target[key] || {}, value)
            } else {
                target[key] = value
            }
        }

        return target
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
     * @param {String[]|String} names        The class name string containing dots or an Array of the string parts
     * @param {Boolean}         create=false Set create to true to create empty objects for non-existing parts
     * @param {Object}          [scope]      Set a different starting point as globalThis
     * @returns {Object} reference to the toplevel namespace
     */
    ns(names, create=false, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {}
            }

            if (prev) {
                return prev[current]
            }
        }, scope || globalThis)
    },

    /**
     * Extended version of Neo.ns() which supports mapping into arrays.
     * @memberOf module:Neo
     * @param {Array|String} names        The class name string containing dots or an Array of the string parts
     * @param {Boolean}      create=false Set create to true to create empty objects for non-existing parts
     * @param {Object}       [scope]      Set a different starting point as globalThis
     * @returns {Object} reference to the toplevel namespace
     */
    nsWithArrays(names, create=false, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                if (current.endsWith(']')) {
                    return createArrayNs(true, current, prev)
                }

                prev[current] = {}
            }

            if (prev) {
                if (current.endsWith(']')) {
                    return createArrayNs(false, current, prev)
                }

                return prev[current]
            }
        }, scope || globalThis)
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
     * @param {Object}        [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;

            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype)
            }

            ntype = config.ntype
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist')
        }

        return Neo.create(className, config)
    },

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @template T
     * @param {T} cls
     * @returns {T}
     */
    setupClass(cls) {
        let baseCfg    = null,
            ntypeChain = [],
            {ntypeMap} = Neo,
            proto      = cls.prototype || cls,
            ns         = Neo.ns(proto.constructor.config.className, false),
            protos     = [],
            cfg, config, ctor, ntype;

        /*
         * If the namespace already exists, directly return it.
         * This can happen when using different versions of neo.mjs
         * => Especially singletons (IdGenerator) must stay unique.
         *
         * This can also happen when using different environments of neo.mjs in parallel.
         * Example: code.LivePreview running inside a dist/production app.
         */
        if (ns) {
            return ns
        }

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (Object.hasOwn(ctor, 'classConfigApplied')) {
                baseCfg    = Neo.clone(ctor.config, true);
                ntypeChain = [...ctor.ntypeChain];
                break
            }

            protos.unshift(proto);
            proto = proto.__proto__
        }

        config = baseCfg || {};

        protos.forEach(element => {
            let mixins;

            ctor = element.constructor;

            cfg = ctor.config || {};

            if (Neo.overwrites) {
                ctor.applyOverwrites?.(cfg)
            }

            Object.entries(cfg).forEach(([key, value]) => {
                if (key.slice(-1) === '_') {
                    delete cfg[key];
                    key = key.slice(0, -1);
                    cfg[key] = value;
                    autoGenerateGetSet(element, key)
                }

                    // only apply properties which have no setters inside the prototype chain
                // those will get applied on create (Neo.core.Base -> initConfig)
                else if (!Neo.hasPropertySetter(element, key)) {
                    Object.defineProperty(element, key, {
                        enumerable: true,
                        value,
                        writable  : true
                    })
                }
            });

            if (Object.hasOwn(cfg, 'ntype')) {
                ntype = cfg.ntype;

                ntypeChain.unshift(ntype);

                // Running the docs app inside a workspace can pull in the same classes from different roots,
                // so we want to check for different class names as well
                if (Object.hasOwn(ntypeMap, ntype) && cfg.className !== ntypeMap[ntype]) {
                    throw new Error(`ntype conflict for '${ntype}' inside the classes:\n${ntypeMap[ntype]}\n${cfg.className}`)
                }

                ntypeMap[ntype] = cfg.className
            }

            mixins = Object.hasOwn(config, 'mixins') && config.mixins || [];

            if (ctor.observable) {
                mixins.push('Neo.core.Observable')
            }

            if (Object.hasOwn(cfg, 'mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins)
            }

            if (mixins.length > 0) {
                applyMixins(ctor, mixins);

                if (Neo.ns('Neo.core.Observable', false, ctor.prototype.mixins)) {
                    ctor.observable = true
                }
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                ntypeChain
            });

            !config.singleton && this.applyToGlobalNs(cls)
        });

        proto = cls.prototype || cls;

        ntypeChain.forEach(ntype => {
            proto[`is${Neo.capitalize(Neo.camel(ntype))}`] = true
        });

        if (proto.singleton) {
            cls = Neo.create(cls);
            Neo.applyToGlobalNs(cls)
        }

        return cls
    },

    /**
     * @param {*} item
     * @returns {String|null}
     */
    typeOf(item) {
        if (item === null || item === undefined) {
            return null
        }

        return typeDetector[typeof item]?.(item) || item.constructor.name
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
    'observable'
],

    charsRegex         = /\d+/g,
    extractArraysRegex = /^(\w+)\s*((?:\[\s*\d+\s*\]\s*)*)$/;

/**
 * @param {Neo.core.Base} cls
 * @param {Array}         mixins
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
            mixinCls   = Neo.ns(mixinProto.className)
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className)
            }

            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto))
    }

    cls.prototype.mixins = mixinClasses // todo: we should do a deep merge
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String}        key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (Neo.hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead')
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {}
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get() {
                let me        = this,
                    beforeGet = `beforeGet${key[0].toUpperCase() + key.slice(1)}`,
                    hasNewKey = Object.hasOwn(me[configSymbol], key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value]
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf())
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                    delete me[configSymbol][key]
                }

                if (typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value)
                }

                return value
            },

            set(value) {
                if (value === undefined) {
                    return
                }

                let me        = this,
                    _key      = '_' + key,
                    uKey      = key[0].toUpperCase() + key.slice(1),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                if (key !== 'items' && key !== 'vnode') {
                    value = Neo.clone(value, true, true)
                }

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return
                    }

                    me[_key] = value;
                }

                if (
                    (key === 'vnode' && value !== oldValue) || // vnode trees can be huge, avoid a deep comparison
                    !Neo.isEqual(value, oldValue)
                ) {
                    me[afterSet]?.(value, oldValue);
                    me.afterSetConfig?.(key, value, oldValue)
                }
            }
        }
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key])
}

/**
 * @param {Boolean} create
 * @param {Object}  current
 * @param {Object}  prev
 * @returns {Object|undefined}
 */
function createArrayNs(create, current, prev) {
    let arrDetails = parseArrayFromString(current),
        i          = 1,
        len        = arrDetails.length,
        arrItem, arrRoot;

    if (create) {
        prev[arrDetails[0]] = arrRoot = prev[arrDetails[0]] || []
    } else {
        arrRoot = prev[arrDetails[0]]
    }

    if (!arrRoot) {
        return
    }

    for (; i < len; i++) {
        arrItem = parseInt(arrDetails[i]);

        if (create) {
            arrRoot[arrItem] = arrRoot[arrItem] || {}
        }

        arrRoot = arrRoot[arrItem]
    }

    return arrRoot
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
            return prev[current]
        }, globalThis)
    } catch(e) {
        return false
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
            return
        }

        if (proto[key]?._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return
            }

            throw new Error(
                `${proto.className}: Multiple mixins defining same property (${mixinProto.className}, ${proto[key]._from}) => ${key}`
            )
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key
        }
    }
}

/**
 * @param mixinCls
 * @returns {Function}
 * @private
 */
function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls
    }
}

/**
 * @param {String} str
 * @returns {Function}
 * @private
 */
function parseArrayFromString(str) {
    return (extractArraysRegex.exec(str) || [null]).slice(1).reduce(
        (fun, args) => [fun].concat(args.match(charsRegex))
    )
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
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Sorter_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sorter.mjs */ "./node_modules/neo.mjs/src/collection/Sorter.mjs");







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
class Collection extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true

    static config = {
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
         * @protected
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
    }

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
            me.doSort()
        }
    }

    /**
     * Adds one or more items to the end of the collection
     * @param {Array|Object} item The item(s) to add
     * @returns {Object[]} an array containing all added items
     */
    add(item) {
        return this.splice(null, null, item).addedItems
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
                filter.listenerApplied = true
            }
        });

        oldValue && me.filter()
    }

    /**
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetItems(value, oldValue) {
        if (value) {
            let me            = this,
                {keyProperty} = me,
                i             = 0,
                len           = value.length,
                item;

            for (; i < len; i++) {
                item = value[i];
                me.map.set(item[keyProperty], item)
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
                sorter.listenerApplied = true
            }
        });

        oldValue && me.autoSort && me.doSort()
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

            if (oldValue) {
                source = Neo.get(oldValue);
                source.un(listenersConfig)
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

        me.sorters.forEach(sorter => {
            me.sortDirections.push(sorter.directionMultiplier);
            me.sortProperties.push(sorter.property)
        })
    }

    /**
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetFilters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : []
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
                        break
                    } else if (
                        oldValue[i].operator === (key.operator || '===') &&
                        oldValue[i].property === key.property &&
                        oldValue[i].value    === key.value
                    ) {
                        hasMatch = true;
                        break
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], key)
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            })
        }

        return value
    }

    /**
     * @param {Map|null} value
     * @param {Map|null} oldValue
     * @protected
     */
    beforeSetMap(value, oldValue) {
        return !value ? new Map() : value
    }

    /**
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetSorters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : []
        }

        let len = oldValue?.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                let {direction, property} = key;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({direction, property});

                        hasMatch = true;
                        break
                    } else if (oldValue[i].property === property && oldValue[i].direction === direction) {
                        hasMatch = true;
                        break
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Sorter_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], key)
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--
            }
        });

        oldValue?.forEach(key => {
            key.destroy()
        });

        return value
    }

    /**
     * @param opts
     * @protected
     */
    cacheUpdate(opts) {
        // disabled for now
        // console.log('cacheUpdate', opts, this[toAddArray]);
        return;

        // removed by dead control flow
{}

        // removed by dead control flow
{}
    }

    /**
     * Removes all items and clears the map
     */
    clear() {
        this.splice(0, this.getCount())
    }

    /**
     * Clears all current filters and optionally restores the original ones in case they existed.
     * @param {boolean} [restoreOriginalFilters=false]
     */
    clearFilters(restoreOriginalFilters) {
        this.filters = restoreOriginalFilters ? Neo.clone(this.originalConfig.filters, true, true) : null
    }

    /**
     * Removes all items and clears the map, without firing a mutate event
     */
    clearSilent() {
        let me = this;

        me._items.splice(0, me.getCount());
        me.map.clear()
    }

    /**
     * Clears all current sorters and optionally restores the original ones in case they existed.
     * Without restoreInitialState as true this will not affect the current sorting of this collection.
     * @param {boolean} [restoreOriginalSorters=false]
     */
    clearSorters(restoreOriginalSorters) {
        this.sorters = restoreOriginalSorters ? Neo.clone(this.originalConfig.sorters, true, true) : null
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
            config.items = [...me._items]
        }

        config.filters = [];
        config.sorters = [];

        // todo: filters & sorters should push their current state and not the original one

        filters.forEach(function(filter) {
            config.filters.push(filter.originalConfig)
        });

        sorters.forEach(function(sorter) {
            config.sorters.push(sorter.originalConfig)
        });

        return Neo.create(Collection, config)
    }

    /**
     * Clears the map & items array before the super call
     */
    destroy() {
        let me = this;

        me._items.splice(0, me._items.length);
        me.map.clear();

        super.destroy()
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
            {sorters, sortDirections, sortProperties} = me,
            countSorters      = sortProperties.length || 0,
            hasSortByMethod   = false,
            hasTransformValue = false,
            i, mappedItems, obj, sorter, sortProperty, sortValue;

        if (countSorters > 0) {
            sorters.forEach(key => {
                if (key.sortBy) {
                    hasSortByMethod = true
                }

                if (key.useTransformValue) {
                    hasTransformValue = true
                }
            });

            if (hasSortByMethod) {
                me._items.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sorter    = sorters[i];
                        sortValue = sorter[sorter.sortBy ? 'sortBy' : 'defaultSortBy'](a, b);

                        if (sortValue !== 0) {
                            return sortValue
                        }
                    }

                    return 0
                })
            } else {
                if (hasTransformValue) {
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
                    mappedItems = items.map((item, index) => {
                        obj = {index};
                        i   = 0;

                        for (; i < countSorters; i++) {
                            if (sorters[i].useTransformValue) {
                                obj[sortProperties[i]] = sorters[i].transformValue(item[sortProperties[i]])
                            } else {
                                obj[sortProperties[i]] = item[sortProperties[i]]
                            }
                        }

                        return obj
                    });
                } else {
                    mappedItems = items
                }

                mappedItems.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sortProperty = sortProperties[i];

                        if (a[sortProperty] > b[sortProperty]) {
                            return 1 * sortDirections[i]
                        }

                        if (a[sortProperty] < b[sortProperty]) {
                            return -1 * sortDirections[i]
                        }
                    }

                    return 0
                });

                if (hasTransformValue) {
                    me._items = mappedItems.map(el => {
                        return items[el.index]
                    })
                }
            }
        }

        me[isSorted] = countSorters > 0;

        if (!silent && me[updatingIndex] === 0) {
            me.fire('sort', {
                items: me._items,
                previousItems,
                scope: me
            })
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
            me[updatingIndex]--
        }

        if (endSilentUpdateMode) {
            me[silentUpdateMode] = false
        } else {
            me.fire('mutate', {
                addedItems  : me[toAddArray],
                removedItems: me[toRemoveArray]
            });

            me[toAddArray]   .splice(0, me[toAddArray]   .length);
            me[toRemoveArray].splice(0, me[toRemoveArray].length)
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

            filter && filters.push(filter)
        });

        return filters
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

            sorter && sorters.push(sorter)
        });

        return sorters
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
                countFilters++
            }
        }

        if (countFilters === 0 && me.allItems) {
            if (me.sorters.length > 0) {
                needsSorting = true
            }

            me.clearSilent();

            me.items = [...me.allItems._items]
        } else {
            if (!me.allItems) {
                config = {...me.originalConfig};

                delete config.filters;
                delete config.items;
                delete config.sorters;

                me.allItems = Neo.create(Collection, {
                    ...Neo.clone(config, true, true),
                    keyProperty: me.keyProperty,
                    sourceId   : me.id
                })
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
                            break
                        }
                    }

                    if (isIncluded) {
                        filteredItems.push(item);
                        me.map.set(item[me.keyProperty], item)
                    }
                }

                me._items = filteredItems // silent update, the map is already in place
            } else {
                filteredItems = [...items];

                for (j=0; j < countAllFilters; j++) {
                    tmpItems = [];

                    for (i = 0; i < countItems; i++) {
                        if (!filters[j].isFiltered(filteredItems[i], filteredItems, items)) {
                            tmpItems.push(filteredItems[i])
                        }
                    }

                    filteredItems = [...tmpItems];
                    countItems    = filteredItems.length
                }

                me.items = filteredItems // update the map
            }
        }

        me[isFiltered] = countFilters !== 0;

        if (needsSorting) {
            me.doSort(me.items, true)
        }

        me.fire('filter', {
            isFiltered: me[isFiltered],
            items     : me.items,
            oldItems,
            scope     : me
        })
    }

    /**
     * Returns items which match the property and value.
     * Properties can contain dots for namespaces => find('vdom.id', 'neo-vnode-1')
     * @param {Object|String} property
     * @param {String|Number} [value] Only required in case the first param is a string
     * @param {Boolean} returnFirstMatch=false
     * @returns {Object|Object[]}
     *     returnFirstMatch=false: Returns an empty Array in case no items are found
     *     returnFirstMatch=true:  Returns the first found item or null
     */
    find(property, value, returnFirstMatch=false) {
        let me               = this,
            items            = [],
            isObjectProperty = me.isItem(property),
            item, matchArray, propertiesArray, propertiesLength;

        if (isObjectProperty) {
            propertiesArray  = Object.entries(property);
            propertiesLength = propertiesArray.length;
        }

        for (item of me.items) {
            if (isObjectProperty) {
                matchArray = [];

                propertiesArray.forEach(([key, value]) => {
                    if (Neo.ns(key, false, item) === value) {
                        matchArray.push(true)
                    }
                });

                if (matchArray.length === propertiesLength) {
                    if (returnFirstMatch) {
                        return item
                    }

                    items.push(item)
                }
            } else if (Neo.ns(property, false, item) === value) {
                if (returnFirstMatch) {
                    return item
                }

                items.push(item)
            }
        }

        return returnFirstMatch ? null : items
    }

    /**
     * Returns all items in the collection for which the passed function returns true
     * @param {function} fn The function to run for each item inside the start-end range. Return true for a match.
     * @param {Object} fn.item The current collection item
     * @param {Object} scope=this The scope in which the passed function gets executed
     * @param {Number} start=0 The start index
     * @param {Number} end=this.getCount() The end index (up to, last value excluded)
     * @returns {Array} Returns an empty Array in case no items are found
     */
    findBy(fn, scope=this, start=0, end=this.getCount()) {
        let me    = this,
            items = [],
            i     = start;

        for (; i < end; i++) {
            if (fn.call(scope, me.items[i])) {
                items.push(me.items[i])
            }
        }

        return items
    }

    /**
     * Returns the first item which matches the property and value
     * @param {Object|String} property
     * @param {Number|String} [value] Only required in case the first param is a string
     * @returns {Object} Returns the first found item or null
     */
    findFirst(property, value) {
        return this.find(property, value, true)
    }

    /**
     * Returns the first item inside the collection
     * @returns {Object}
     */
    first() {
        return this._items[0]
    }

    /**
     * Returns the object associated to the key, or null if there is none.
     * @param {Number|String} key
     * @returns {Object|null}
     */
    get(key) {
        return this.map.get(key) || null
    }

    /**
     * Returns the item for a given index
     * @param {Number} index
     * @returns {Object|undefined}
     */
    getAt(index) {
        return this._items[index]
    }

    /**
     * Returns the length of the internal items array
     * @returns {Number}
     */
    getCount() {
        return this._items.length
    }

    /**
     * @returns {Number}
     */
    getCountMutations() {
        return this[countMutations]
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
                return filters[i]
            }
        }

        return null
    }

    /**
     * Returns the key for a given index
     * @param {Number} index
     * @returns {Number|String|undefined}
     */
    getKeyAt(index) {
        let item = this._items[index];
        return item?.[this.keyProperty]
    }

    /**
     * Returns a shallow copy of a portion of the items array
     * @param {Number} [start] Zero-based index at which to begin extraction.
     * @param {Number} [end] Zero-based index before which to end extraction (extracts up to but not including end).
     * @returns {Array}
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    getRange(start, end) {
        return this._items.slice(start, end)
    }

    /**
     * Returns the Source Collection in case the sourceCollectionId config was set
     * @returns {Neo.collection.Base|undefined}
     */
    getSource() {
        return this.sourceId && Neo.get(this.sourceId)
    }

    /**
     * Returns a boolean asserting whether a value has been associated to the key in the Collection or not
     * @param {Number|String} key
     * @returns {Boolean}
     */
    has(key) {
        return this.map.has(key)
    }

    /**
     * Returns a boolean asserting whether an item exists in the Collection or not
     * @param {Object} item
     * @returns {Boolean}
     */
    hasItem(item) {
        return this.map.has(item[this.keyProperty])
    }

    /**
     * Returns the index for a given key or item
     * @param {Number|String|Object} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOf(key) {
        let me = this;
        return me._items.indexOf(me.isItem(key) ? key : me.map.get(key))
    }

    /**
     * Returns the index for a given item
     * @param {Object} item
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfItem(item) {
        return this._items.indexOf(item)
    }

    /**
     * Returns the index for a given key
     * @param {Number|String} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfKey(key) {
        return this._items.indexOf(this.map.get(key))
    }

    /**
     * Inserts an item or an array of items at the specified index
     * @param {Number} index
     * @param {Array|Object} item
     * @returns {Object[]} an array containing all added items
     */
    insert(index, item) {
        return this.splice(index, 0, item).addedItems
    }

    /**
     * @returns {Boolean} true in case the collection is filtered
     */
    isFiltered() {
        return this[isFiltered]
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
                break
            }
        }

        return isFiltered
    }

    /**
     * Helper method to check if a given input is either object-like or a key
     * @param {*} value
     * @returns {Boolean} returns true for object-like values
     */
    isItem(value) {
        // We can not use Neo.isObject() || Neo.isRecord(), since collections can store neo instances too.
        return typeof value === 'object'
    }

    /**
     * @returns {Boolean} true in case the collection is sorted
     */
    isSorted() {
        return this[isSorted]
    }

    /**
     * Returns the last item inside the collection
     * @returns {Object}
     */
    last() {
        return this._items[this.getCount() -1]
    }

    /**
     * Moves an item from fromIndex to toIndex
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    move(fromIndex, toIndex) {
        if (fromIndex === toIndex) {
            return
        }

        let {items} = this;

        if (fromIndex >= items.length) {
            fromIndex = items.length - 1
        }

        items.splice(toIndex, 0, items.splice(fromIndex, 1)[0])
    }

    /**
     * @param {Object} opts
     * @protected
     */
    onFilterChange(opts) {
        this.filter()
    }

    /**
     * @param {Object} opts
     * @protected
     */
    onMutate(opts) {
        let me = this;

        // todo: inspect the bubbling chain
        /*if (opts.preventBubbleUp) {
            me.preventBubbleUp = true
        }*/

        me.preventBubbleUp = true;

        me.splice(null, opts.removedItems, opts.addedItems)
    }

    /**
     * @param {Object} opts
     * @protected
     */
    onSorterChange(opts) {
        this.applySorterConfigs();
        this.doSort()
    }

    /**
     * Removes the last element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    pop() {
        let mutation = this.splice(this.getCount() -1, 1);
        return mutation.removedItems[0]
    }

    /**
     * Adds one or more items to the end of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    push(item) {
        return this.add(item)
    }

    /**
     * Removes a given key, item or Array containing keys|items
     * @param {Number|String|Object|Array} key
     * @returns {Number} the collection count
     */
    remove(key) {
        this.splice(0, Array.isArray(key) ? key : [key]);
        return this.getCount()
    }

    /**
     * Removes the item at the given index
     * @param {Number} index
     * @returns {Number} the collection count
     */
    removeAt(index) {
        this.splice(index, 1);
        return this.getCount()
    }

    /**
     * Reverses the items array in place.
     * Intended for collections without sorters.
     * @returns {Array} items
     */
    reverse() {
        return this._items.reverse()
    }

    /**
     * Removes the first element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    shift() {
        let mutation = this.splice(0, 1);
        return mutation.addedItems[0]
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
        return this._items.some(...args)
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
            {keyProperty, map} = me,
            source             = me.getSource(),
            addedItems         = [],
            items              = me._items,
            removedItems       = [],
            removeCountAtIndex = Neo.isNumber(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            toRemoveArray      = Array.isArray(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            i, item, key, len, toAddMap;

        if (!Neo.isNumber(index) && removeCountAtIndex) {
            _util_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].error(me.id + ': If index is not passed, removeCountAtIndex cannot be used')
        }

        toAddArray = toAddArray && !Array.isArray(toAddArray) ? [toAddArray] : toAddArray;

        if (toRemoveArray && (len = toRemoveArray.length) > 0) {
            if (toAddArray && toAddArray.length > 0) {
                toAddMap = toAddArray.map(e => e[keyProperty])
            }

            for (i=0; i < len; i++) {
                item = toRemoveArray[i];
                key  = me.isItem(item) ? item[keyProperty] : item;

                if (map.has(key)) {
                    if (!toAddMap || (toAddMap && toAddMap.indexOf(key) < 0)) {
                        removedItems.push(items.splice(me.indexOfKey(key), 1)[0]);
                        map.delete(key)
                    }
                }
            }
        } else if (removeCountAtIndex && removeCountAtIndex > 0) {
            removedItems.push(...items.splice(index, removeCountAtIndex));
            removedItems.forEach(e => {
                map.delete(e[keyProperty])
            })
        }

        if (toAddArray && (len = toAddArray.length) > 0) {
            for (i=0; i < len; i++) {
                item = toAddArray[i];
                key  = item[keyProperty];

                if (!key) {
                    item[keyProperty] = key = me.keyPropertyIndex;
                    me.keyPropertyIndex--
                }

                if (!map.has(key) && !me.isFilteredItem(item)) {
                    addedItems.push(item);
                    map.set(key, item)
                }
            }

            if (addedItems.length > 0) {
                if (items.length === 0) {
                    // Performance improvement for Safari, see: https://github.com/neomjs/neo/issues/6228
                    me._items = addedItems
                } else {
                    items.splice(Neo.isNumber(index) ? index : items.length, 0, ...addedItems)
                }

                if (me.autoSort && me._sorters.length > 0) {
                    me.doSort()
                }
            }
        }

        if (source) {
            if (!source.getSource()) {
                source.preventBubbleUp = true
            }

            if (!me.preventBubbleUp) {
                // console.log('source splice', source.id, 'added:', ...toAddArray, 'removed:', ...removedItems);
                me.startUpdate(true);
                source.splice(null, toRemoveArray || removedItems, toAddArray);
                me.endUpdate(true)
            }

            delete source.preventBubbleUp
        }

        if (addedItems.length > 0 || removedItems.length > 0) {
            me[countMutations]++
        }

        if (me[updatingIndex] === 0) {
            me.fire('mutate', {
                addedItems     : toAddArray,
                preventBubbleUp: me.preventBubbleUp,
                removedItems   : toRemoveArray || removedItems
            })
        } else if (!me[silentUpdateMode]) {
            me.cacheUpdate({
                addedItems,
                removedItems
            })
        }

        if (me[updatingIndex] === 0) {
            delete me.preventBubbleUp
        }

        return {addedItems, removedItems}
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
            this[silentUpdateMode] = true
        }

        this[updatingIndex]++
    }

    /**
     * Adds one or more elements to the beginning of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    unshift(item) {
        this.splice(0, 0, item);
        return this.getCount()
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Collection));


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
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true
    /**
     * Valid values for the operator config:<br>
     * ['==','===','!=','!==','<','<=','>','>=','endsWith','excluded','included','isDefined','isUndefined','like','startsWith']
     * @member {String[]} operators
     * @protected
     * @static
     */
    static operators = [
        '==', '===', '!=', '!==', '<', '<=', '>', '>=', 'endsWith', 'excluded', 'included',
        'isDefined', 'isUndefined', 'like', 'startsWith'
    ]

    static config = {
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
    }

    afterSetDisabled(...args) {
        this.fireChangeEvent(...args)
    }

    afterSetFilterBy(value, oldValue) {
        // todo
    }

    afterSetIsUpdating(value, oldValue) {
        value === false && this.fireChangeEvent(value, oldValue)
    }

    afterSetOperator(...args) {
        this.fireChangeEvent(...args)
    }

    afterSetProperty(...args) {
        this.fireChangeEvent(...args)
    }

    afterSetValue(...args) {
        this.fireChangeEvent(...args)
    }

    beforeSetFilterBy(value, oldValue) {
        if (value && typeof value !== 'function') {
            Neo.logError('filterBy has to be a function', this);
            return oldValue
        }

        return value
    }

    /**
     * Triggered before the operator config gets changed.
     * @param {String|null} value
     * @param {String} oldValue
     * @returns {String}
     * @protected
     */
    beforeSetOperator(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'operator')
    }

    /**
     * Needed for remote filtering
     * @returns {Object|null}
     */
    export() {
        let me                          = this,
            {operator, property, value} = me;

        if (!me.filterBy) {
            return {operator, property, value}
        }

        return null
    }

    /**
     * @param value
     * @param oldValue
     */
    fireChangeEvent(value, oldValue) {
        let me = this;

        if (oldValue !== undefined && me.isUpdating !== true) {
            let {operator, property, value} = me;
            me.fire('change', {operator, property, value})
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
            return false
        }

        if (me._filterBy) {
            return me.filterBy.call(me.scope || me, {
                allItems,
                filteredItems,
                item,
                value: me._value
            })
        }

        if (me.includeEmptyValues && (me._value === null || Neo.isEmpty(me._value))) {
            return false
        }

        filterValue = me._value;
        recordValue = item[me._property];

        if (filterValue instanceof Date && recordValue instanceof Date) {
            filterValue = filterValue.valueOf();
            recordValue = recordValue.valueOf()
        }

        return !Filter[me._operator](recordValue, filterValue)
    }

    static ['=='] (a, b) {return a == b}
    static ['==='](a, b) {return a === b}
    static ['!='] (a, b) {return a != b}
    static ['!=='](a, b) {return a !== b}
    static ['<']  (a, b) {return a < b}
    static ['<='] (a, b) {return a <= b}
    static ['>']  (a, b) {return a > b}
    static ['>='] (a, b) {return a >= b}

    static ['endsWith'](a, b) {
        if (!Neo.isString(a)) {a = String(a)}
        if (!Neo.isString(b)) {b = String(b)}

        return a?.toLowerCase().endsWith(b?.toLowerCase()) || false
    }

    static ['excluded'](a, b) {
        return b.indexOf(a) < 0
    }

    static ['included'](a, b) {
        return b.indexOf(a) > -1
    }

    static ['isDefined'](a, b) {
        return a !== undefined
    }

    static ['isUndefined'](a, b) {
        return a === undefined
    }

    static ['like'](a, b) {
        if (!Neo.isString(a)) {a = String(a)}
        if (!Neo.isString(b)) {b = String(b)}

        return a?.toLowerCase().includes(b?.toLowerCase()) || false
    }

    static ['startsWith'](a, b) {
        if (!Neo.isString(a)) {a = String(a)}
        if (!Neo.isString(b)) {b = String(b)}

        return a?.toLowerCase().startsWith(b?.toLowerCase()) || false
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Filter));


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
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true

    static config = {
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
    }

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
        let me                    = this,
            {direction, property} = me;

        if (!me.sortBy && direction && property) {
            return {direction, property}
        }

        return null
    }

    /**
     * @param {*} value
     * @returns {*} value
     */
    transformValue(value) {
        if (typeof value === 'string') {
            value = value.toLowerCase()
        }

        return value
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Sorter));


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
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true

    static config = {
        /**
         * @member {String} className='Neo.controller.Application'
         * @protected
         */
        className: 'Neo.controller.Application',
        /**
         * @member {String} ntype='application'
         * @protected
         */
        ntype: 'application',
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
        rendering: false,
        /**
         * @member {Number|null} windowId=null
         */
        windowId: null
    }

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

        me.windowId = Neo.config.windowId;

        Neo.apps = Neo.apps || {};

        Neo.apps[me.name] = me;

        Neo.currentWorker.registerApp(me.name);

        if (mainView) {
            me.mainView = mainView
        }
    }

    /**
     * Triggered after the mainView config got changed
     * @param {Neo.component.Base} value
     * @param {Neo.component.Base|null} oldValue
     * @protected
     */
    async afterSetMainView(value, oldValue) {
        if (value) {
            let me = this;

            // short delay to ensure changes from onHashChange() got applied
            await me.timeout(Neo.config.hash ? 200 : 10);

            await value.render(true)
        }
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
                parentId: this.parentId,
                windowId: Neo.config.windowId
            })
        }

        return null
    }

    /**
     * Unregister the app from the CSS map
     * @param args
     */
    destroy(...args) {
        Neo.currentWorker.removeAppFromThemeMap(this.name);
        super.destroy(...args)
    }
}

Application = Neo.setupClass(Application);

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



const
    amountSlashesRegex = /\//g,
    routeParamRegex    = /{[^\s/]+}/g

/**
 * @class Neo.controller.Base
 * @extends Neo.core.Base
 */
class Controller extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.controller.Base'
         * @protected
         */
        className: 'Neo.controller.Base',
        /**
         * @member {String} ntype='controller'
         * @protected
         */
        ntype: 'controller',
        /**
         * If the URL does not contain a hash value when creating this controller instance,
         * neo will set this hash value for us.
         * @member {String|null} defaultHash=null
         */
        defaultHash: null,
        /**
         * @member {String|null} defaultRoute=null
         */
        defaultRoute: null,
        /**
         * @member {Object} handleRoutes={}
         */
        handleRoutes: {},
        /**
         * @example
         * routes: {
         *     '/home'                         : 'handleHomeRoute',
         *     '/users/{userId}'               : {handler: 'handleUserRoute', preHandler: 'preHandleUserRoute'},
         *     '/users/{userId}/posts/{postId}': 'handlePostRoute',
         *     'default'                       : 'handleOtherRoutes'
         * }
         * @member {Object} routes_={}
         */
        routes_: {}
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('change', this.onHashChange, this)
    }

    /**
     * Triggered after the routes config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetRoutes(value, oldValue){
        let me        = this,
            routeKeys = Object.keys(value);

         me.routes = routeKeys.sort(me.#sortRoutes).reduce((obj, key) => {
             obj[key] = value[key];
             return obj
         }, {});

        me.handleRoutes = {};

        routeKeys.forEach(key => {
            if (key.toLowerCase() === 'default'){
                me.defaultRoute = value[key]
            } else {
                me.handleRoutes[key] = new RegExp(key.replace(routeParamRegex, '([\\w-.]+)')+'$')
            }
        })
    }

    /**
     * @param args
     */
    destroy(...args) {
        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].un('change', this.onHashChange, this);

        super.destroy(...args)
    }

    /**
     *
     */
    async onConstructed() {
        let me                      = this,
            {defaultHash, windowId} = me,
            currentHash             = _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].first(windowId);

        // get outside the construction chain => a related cmp & vm has to be constructed too
        await me.timeout(1);

        if (currentHash) {
            if (currentHash.windowId === windowId) {
                await me.onHashChange(currentHash, null)
            }
        } else {
            /*
             * worker.App: onLoadApplication() will push config.hash into the HashHistory with a 5ms delay.
             * We only want to set a default route, in case the HashHistory is empty and there is no initial
             * value that will get consumed.
             */
            !Neo.config.hash && defaultHash && Neo.Main.setRoute({value: defaultHash, windowId})
        }
    }

    /**
     * Placeholder method which gets triggered when the hash inside the browser url changes
     * @param {Object} value
     * @param {Object} oldValue
     */
    async onHashChange(value, oldValue) {
        // We only want to trigger hash changes for the same browser window (SharedWorker context)
        if (value.windowId !== this.windowId) {
            return
        }

        let me                     = this,
            counter                = 0,
            hasRouteBeenFound      = false,
            {handleRoutes, routes} = me,
            routeKeys              = Object.keys(handleRoutes),
            routeKeysLength        = routeKeys.length,
            arrayParamIds, arrayParamValues, handler, key, paramObject, preHandler, responsePreHandler, result, route;

        while (routeKeysLength > 0 && counter < routeKeysLength && !hasRouteBeenFound) {
            key                = routeKeys[counter];
            handler            = null;
            preHandler         = null;
            responsePreHandler = null;
            paramObject        = {};
            result             = value.hashString.match(handleRoutes[key]);

            if (result) {
                arrayParamIds    = key.match(routeParamRegex);
                arrayParamValues = result.splice(1, result.length - 1);

                if (arrayParamIds && arrayParamIds.length !== arrayParamValues.length) {
                    throw 'Number of IDs and number of Values do not match'
                }

                for (let i = 0; arrayParamIds && i < arrayParamIds.length; i++) {
                    paramObject[arrayParamIds[i].substring(1, arrayParamIds[i].length - 1)] = arrayParamValues[i]
                }

                route = routes[key];

                if (Neo.isString(route)) {
                    handler            = route;
                    responsePreHandler = true
                } else if (Neo.isObject(route)) {
                    handler    = route.handler;
                    preHandler = route.preHandler
                }

                hasRouteBeenFound = true
            }

            counter++
        }

        // execute
        if (hasRouteBeenFound) {
            if (preHandler) {
                responsePreHandler = await me[preHandler]?.call(me, paramObject, value, oldValue)
            } else {
                responsePreHandler = true
            }

            if (responsePreHandler) {
                await me[handler]?.call(me, paramObject, value, oldValue)
            }
        }

        if (routeKeys.length > 0 && !hasRouteBeenFound) {
            if (me.defaultRoute) {
                me[me.defaultRoute]?.(value, oldValue)
            } else {
                me.onNoRouteFound(value, oldValue)
            }
        }
    }

    /**
     * Placeholder method which gets triggered when an invalid route is called
     * @param {Object} value
     * @param {Object} oldValue
     */
    onNoRouteFound(value, oldValue) {

    }

    /**
     * Internal helper method to sort routes by their amount of slashes
     * @param {String} route1
     * @param {String} route2
     * @returns {Number}
     */
    #sortRoutes(route1, route2) {
        return (route1.match(amountSlashesRegex) || []).length - (route2.match(amountSlashesRegex)|| []).length
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Controller));


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
/* harmony import */ var _util_Function_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Function.mjs */ "./node_modules/neo.mjs/src/util/Function.mjs");
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");



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
     * You can define methods which should get delayed.
     * Types are buffer, debounce & throttle.
     * @example
     *  delayable: {
     *      fireChangeEvent: {
     *          type : 'debounce',
     *          timer: 300
     *      }
     *  }
     * @member {Object} delayable={}
     * @protected
     * @static
     */
    static delayable = {}
    /**
     * Flag which will get set to true once manager.Instance got created
     * @member {Boolean} instanceManagerAvailable=false
     * @static
     */
    static instanceManagerAvailable = false
    /**
     * Regex to grab the MethodName from an error
     * which is a second generation function
     * @member {RegExp} methodNameRegex
     * @static
     */
    static methodNameRegex = /\n.*\n\s+at\s+.*\.(\w+)\s+.*/
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=false
     * @static
     */
    static observable = false
    /**
     * Keep the overwritten methods
     * @member {Object} overwrittenMethods={}
     * @protected
     * @static
     */
    static overwrittenMethods = {}
    /**
     * Configs will get merged throughout the class hierarchy
     * @returns {Object} config
     */
    static config = {
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
         * While it is recommended to change the static delayable configs on class level,
         * you can change it on instance level too. If not null, we will do a deep merge.
         * @member {Object} delayable=null
         */
        delayable: null,
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
    }

    /**
     * Internal cache for all timeout ids when using this.timeout()
     * @member {Number[]} timeoutIds=[]
     * @private
     */
    #timeoutIds = []

    /**
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
            delete me.constructor.config.id
        }

        me.getStaticConfig('observable') && me.initObservable(config);

        // assign class field values prior to configs
        config = me.setFields(config);

        me.initConfig(config);

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        me.applyDelayable();

        /*
         * We do not want to force devs to check for the `isDestroyed` flag in every possible class extension.
         * So, we are intercepting the top-most `destroy()` call to check for the flag there.
         * Rationale: `destroy()` must only get called once.
         */
        (0,_util_Function_mjs__WEBPACK_IMPORTED_MODULE_0__.intercept)(me, 'destroy', me.isDestroyedCheck, me);

        me.remote && setTimeout(me.initRemote.bind(me), 1)
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
                Neo.manager.Instance.unregister(oldValue)
            } else {
                delete Neo.idMap[oldValue]
            }
        }

        if (value) {
            if (hasManager) {
                Neo.manager.Instance.register(me);
            } else {
                Neo.idMap = Neo.idMap || {};
                Neo.idMap[me.id] = me
            }
        }
    }

    /**
     * Adjusts all methods inside static delayable
     */
    applyDelayable() {
        let me            = this,
            ctorDelayable = me.constructor.delayable,
            delayable     = me.delayable ? Neo.merge({}, me.delayable, ctorDelayable) : ctorDelayable;

        Object.entries(delayable).forEach(([key, value]) => {
            if (value) {
                let map = {
                    buffer()   {me[key] = new _util_Function_mjs__WEBPACK_IMPORTED_MODULE_0__.buffer(me[key],   me, value.timer)},
                    debounce() {me[key] = new _util_Function_mjs__WEBPACK_IMPORTED_MODULE_0__.debounce(me[key], me, value.timer)},
                    throttle() {me[key] = new _util_Function_mjs__WEBPACK_IMPORTED_MODULE_0__.throttle(me[key], me, value.timer)}
                };

                map[value.type]?.()
            }
        })
    }

    /**
     * Applying overwrites and adding overwrittenMethods to the class constructors
     * @param {Object} cfg
     * @protected
     */
    static applyOverwrites(cfg) {
        let overwrites = Neo.ns(cfg.className, false, Neo.overwrites),
            cls, item;

        if (overwrites) {
            // Apply all methods
            for (item in overwrites) {
                if (Neo.isFunction(overwrites[item])) {
                    // Already existing ones
                    cls = this.prototype;

                    if (cls[item]) {
                        // add to overwrittenMethods
                        cls.constructor.overwrittenMethods[item] = cls[item]
                    }
                }
            }

            // Apply configs to prototype
            Object.assign(cfg, overwrites)
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
            console.error(`Supported values for ${name} are:`, ...values, this);
            return oldValue
        }

        return value
    }

    /**
     * @param {String} fn               The name of a function to find in the passed scope object.
     * @param {Object} originName       The name of the method inside the originScope.
     * @param {Object} scope            The scope to find the function in if it is specified as a string.
     * @param {Object} originScope=this The scope where the function is located.
     */
    bindCallback(fn, originName, scope=this, originScope=this) {
        if (fn && Neo.isString(fn)) {
            const handler = (0,_util_Function_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveCallback)(fn, scope);
            originScope[originName] = handler.fn.bind(handler.scope)
        }
    }

    /**
     * From within an overwrite, a method can call a parent method, by using callOverwritten.
     *
     * @example
     *    afterSetHeight(value, oldValue) {
     *        // do the standard
     *        this.callOverwritten(...arguments);
     *        // do you own stuff
     *    }
     *
     * We create an error to get the caller.name and then run that method on the constructor.
     * This is based on the following error structure, e.g. afterSetHeight.
     *
     *     Error
     *         at Base.callOverwritten (Base.mjs:176:21)
     *         at Base.afterSetHeight (Overrides.mjs:19:26)
     *
     * @param args
     */
    callOverwritten(...args) {
        let stack      = new Error().stack,
            methodName = stack.match(Base.methodNameRegex)[1];

        this.__proto__.constructor.overwrittenMethods[methodName].call(this, ...args)
    }

    /**
     * Uses the IdGenerator to create an id if a static one is not explicitly set.
     * Registers the instance to manager.Instance if this one is already created,
     * otherwise stores it inside a tmp map.
     * @param {String} id
     */
    createId(id) {
        this.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getId(this.getIdKey())
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        me.#timeoutIds.forEach(id => {
            clearTimeout(id)
        });

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me)
        } else if (Neo.idMap) {
            delete Neo.idMap[me.id]
        }

        Object.keys(me).forEach(key => {
            if (Object.getOwnPropertyDescriptor(me, key).writable) {
                // We must not delete the custom destroy() interceptor
                if (key !== 'destroy' && key !== '_id') {
                    delete me[key]
                }
            }
        });

        // We do want to prevent delayed event calls after an observable instance got destroyed.
        if (Neo.isFunction(me.fire)) {
            me.fire = Neo.emptyFn
        }

        me.isDestroyed = true
    }

    /**
     * Used inside createId() as the default value passed to the IdGenerator.
     * Override this method as needed.
     * @returns {String}
     */
    getIdKey() {
        return this.ntype
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        return this.constructor[key]
    }

    /**
     * Check if a given ntype exists inside the proto chain, including the top level class
     * @param {String} ntype
     * @returns {Boolean}
     */
    hasNtype(ntype) {
        return this.constructor.ntypeChain.includes(ntype)
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
     * @protected
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        me.isConfiguring = true;
        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
        me.isConfiguring = false;
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     * @protected
     */
    initRemote() {
        let me                  = this,
            {className, remote} = me,
            {currentWorker}     = Neo;

        if (!me.singleton && !me.isMainThreadAddon) {
            throw new Error('Remote method access is only functional for Singleton classes ' + className)
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            if (Neo.workerId !== 'main' && currentWorker.isSharedWorker && !currentWorker.isConnected) {
                currentWorker.on('connected', () => {
                    Base.sendRemotes(className, remote)
                }, me, {once: true})
            } else {
                Base.sendRemotes(className, remote)
            }
        }
    }

    /**
     * Intercepts destroy() calls to ensure they will only get called once
     * @returns {Boolean}
     */
    isDestroyedCheck() {
        return !this.isDestroyed
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     * @protected
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className)
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true)
        }

        return {...ctor.config, ...config}
    }

    /**
     *
     */
    onAfterConstructed() {
        let me = this;

        me.isConstructed = true;

        // We can only fire the event in case the Observable mixin is included.
        me.getStaticConfig('observable') && me.fire('constructed', me)
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
        let me = this,
            ns, nsArray, nsKey, symbolNs;

        if (items) {
            if (!Array.isArray(items)) {
                items = [items]
            }

            items.forEach(item => {
                item && Object.entries(item).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        me.parseItemConfigs(value);
                    } else if (typeof value === 'string' && value.startsWith('@config:')) {
                        nsArray = value.substring(8).trim().split('.');
                        nsKey   = nsArray.pop();
                        ns      = Neo.ns(nsArray, false, me);

                        if (ns[nsKey] === undefined) {
                            console.error('The used @config does not exist:', nsKey, nsArray.join('.'))
                        } else {
                            symbolNs = Neo.ns(nsArray, false, me[configSymbol]);

                            // The config might not be processed yet, especially for configs
                            // not ending with an underscore, so we need to check the configSymbol first.
                            if (symbolNs && Object.hasOwn(symbolNs, nsKey)) {
                                item[key] = symbolNs[nsKey]
                            } else {
                                item[key] = ns[nsKey]
                            }
                        }
                    }
                })
            })
        }
    }

    /**
     * When using set(), configs without a trailing underscore can already be assigned,
     * so the hasOwnProperty() check will return true
     * @param {Boolean} [forceAssign=false]
     * @protected
     */
    processConfigs(forceAssign=false) {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        me[forceAssignConfigs] = forceAssign;

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already have been assigned inside an afterSet-method
            if (forceAssign || !me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]]
            }

            // there is a delete-call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs(forceAssign)
        }
    }

    /**
     * @param {String} className
     * @param {Object} remote
     * @protected
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
                })
            }
        })
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
            me.processConfigs()
        }

        Object.assign(me[configSymbol], values);

        me.processConfigs(true)
    }

    /**
     * We want to assign class fields first and remove them from the config object,
     * so that afterSet(), beforeGet() and beforeSet() methods can get the new values right away
     * @param {Object} config
     * @returns {Object}
     * @protected
     */
    setFields(config) {
        let me          = this,
            configNames = me.constructor.config;

        Object.entries(config).forEach(([key, value]) => {
            if (!configNames.hasOwnProperty(key) && !Neo.hasPropertySetter(me, key)) {
                me[key] = value;
                delete config[key]
            }
        })

        return config
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
            return true
        }

        return false
    }

    /**
     * Stores timeoutIds internally, so that destroy() can clear them if needed
     * @param {Number} time in milliseconds
     * @returns {Promise<any>}
     */
    timeout(time) {
        return new Promise(resolve => {
            let timeoutIds = this.#timeoutIds,
                timeoutId  = setTimeout(() => {timeoutIds.splice(timeoutIds.indexOf(timeoutId), 1); resolve()}, time);

            timeoutIds.push(timeoutId)
        })
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.button.Base').toString() => "[object Neo.button.Base (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return `${this.className} (id: ${this.id})`
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
            return false
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Base));


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
    static config = {
        /**
         * @member {String} className='Neo.core.Compare'
         * @protected
         */
        className: 'Neo.core.Compare'
    }

    /**
     * Storing the comparison method names by data type
     * @member {Object} map
     */
    static map = {
        Array      : 'compareArrays',
        Date       : 'compareDates',
        Function   : 'compareFunctions',
        Map        : 'compareMaps',
        NeoInstance: 'compareNeoInstances',
        Object     : 'compareObjects',
        RegExp     : 'compareRegExps',
        Set        : 'compareSets'
    }

    /**
     * @param {Array} item1
     * @param {Array} item2
     * @returns {Boolean}
     */
    static compareArrays(item1, item2) {
        if (item1.length !== item2.length) {
            return false
        }

        for (const [i, v] of item1.entries()) {
            if (!Compare.isEqual(v, item2[i])) {
                return false
            }
        }

        return true
    }

    /**
     * @param {Date} item1
     * @param {Date} item2
     * @returns {Boolean}
     */
    static compareDates(item1, item2) {
        return item1.valueOf() === item2.valueOf()
    }

    /**
     * @param {Function} item1
     * @param {Function} item2
     * @returns {Boolean}
     */
    static compareFunctions(item1, item2) {
        if (item1.name !== item2.name) {
            return false
        }

        return item1.toString() === item2.toString()
    }

    /**
     * @param {Map} item1
     * @param {Map} item2
     * @returns {Boolean}
     */
    static compareMaps(item1, item2) {
        if (item1.size !== item2.size) {
            return false
        }

        let val2;

        for (const [key, val] of item1) {
            val2 = item2.get(key);

            if (val2 !== val || val2 === undefined && !item2.has(key)) {
                return false
            }
        }

        return true
    }

    /**
     * @param {Neo.core.Base} item1
     * @param {Neo.core.Base} item2
     * @returns {Boolean}
     */
    static compareNeoInstances(item1, item2) {
        return item1.id === item2.id
    }

    /**
     * @param {Object} item1
     * @param {Object} item2
     * @returns {Boolean}
     */
    static compareObjects(item1, item2) {
        if (Object.keys(item1).length !== Object.keys(item2).length) {
            return false
        }

        for (let key in item1) {
            if (!Compare.isEqual(item1[key], item2[key])) {
                return false
            }
        }

        return true
    }

    /**
     * @param {RegExp} item1
     * @param {RegExp} item2
     * @returns {Boolean}
     */
    static compareRegExps(item1, item2) {
        return item1.toString() === item2.toString()
    }

    /**
     * @param {Set} item1
     * @param {Set} item2
     * @returns {Boolean}
     */
    static compareSets(item1, item2) {
        if (item1.size !== item2.size) {
            return false
        }

        for (let key of item1) {
            if (!item2.has(key)) {
                return false
            }
        }

        return true
    }

    /**
     * @param {*} item1
     * @param {*} item2
     * @returns {Boolean}
     */
    static isEqual(item1, item2) {
        if (item1 === item2) {
            return true
        }

        let type1 = Neo.typeOf(item1),
            type2 = Neo.typeOf(item2);

        if (type1 !== type2) {
            return false
        }

        if (Compare.map[type1]) {
            return Compare[Compare.map[type1]](item1, item2)
        }

        // all other types
        return item1 === item2
    }
}

Compare = Neo.setupClass(Compare);

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
    static config = {
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
    }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(IdGenerator));


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
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_Function_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Function.mjs */ "./node_modules/neo.mjs/src/util/Function.mjs");




/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

    /**
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number|String} [order]
     * @returns {String|null} eventId null in case an object gets passed as the name (multiple ids)
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me            = this,
            delay         = 0,
            eventIdObject = typeof eventId === 'object',
            nameObject    = typeof name    === 'object',
            once          = false,
            optsType      = typeof opts,
            listener, existing, eventConfig;

        /*
         * let us support the following format too:
         *
         * currentWorker.on('connected', () => {
         *     Base.sendRemotes(className, remote)
         * }, me, {once: true})
         */
        if (eventIdObject && optsType === 'function') {
            eventId.fn = opts;
            opts     = eventId;
            optsType = 'object';
            eventId  = null;
        }

        if (nameObject) {
            if (name.hasOwnProperty('delay')) {
                delay = name.delay;
                delete name.delay
            }

            if (name.hasOwnProperty('once')) {
                once = name.once;
                delete name.once
            }

            if (name.hasOwnProperty('order')) {
                order = name.order;
                delete name.order
            }

            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope
            }

            Object.entries(name).forEach(([key, value]) => {
                if (Neo.isObject(value)) {
                    me.addListener(key, {delay, once, order, scope, ...value})
                } else {
                    me.addListener(key, {delay, fn: value, once, order, scope})
                }
            })
        } else if (optsType === 'object') {
            delay    = delay   || opts.delay;
            eventId  = eventId || opts.eventId;
            listener = opts.fn;
            once     = once    || opts.once;
            order    = order   || opts.order;
            scope    = scope   || opts.scope
        } else if (optsType === 'function') {
            listener = opts
        } else if (optsType === 'string') {
            listener = opts // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name)
        }

        if (!nameObject) {
            eventConfig = {fn: listener, id: eventId || Neo.getId('event')};

            if (data)      {eventConfig.data   = data}
            if (delay > 0) {eventConfig.delay  = delay}
            if (once)      {eventConfig.once   = once}
            if (scope)     {eventConfig.scope  = scope}

            if (existing = me.listeners?.[name]) {
                existing.forEach(cfg => {
                    if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                        console.error('Duplicate event handler attached:', name, me)
                    }
                });

                if (typeof order === 'number') {
                    existing.splice(order, 0, eventConfig)
                } else if (order === 'before') {
                    existing.unshift(eventConfig)
                } else {
                    existing.push(eventConfig)
                }
            } else {
                me.listeners[name] = [eventConfig]
            }

            return eventConfig.id
        }

        return null
    }

    /**
     * Call the passed function, or a function by *name* which exists in the passed scope's
     * or this component's ownership chain.
     * @param {Function|String} fn A function, or the name of a function to find in the passed scope object.
     * @param {Object} scope       The scope to find the function in if it is specified as a string.
     * @param {Array} args         Arguments to pass to the callback.
     */
    callback(fn, scope=this, args) {
        if (fn) {
            const handler = (0,_util_Function_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveCallback)(fn, scope);
            handler.fn.apply(handler.scope, args)
        }
    }

    /**
     * Internal helper method for events which use the delay option
     * @param {Object} cb
     * @param {Array} args
     * @param {Number} delay
     */
    delayedCallback(cb, args, delay) {
        this.timeout(delay).then(() => {
            cb.fn.apply(cb.scope, args)
        })
    }

    /**
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            delay, handler, handlers, i, len;

        if (listeners && listeners[name]) {
            handlers = [...listeners[name]];
            len      = handlers.length;

            for (i = 0; i < len; i++) {
                handler = handlers[i];
                delay   = handler.delay;

                // Resolve function name on the scope (or me), or, if it starts with 'up.'
                // look in the ownership hierarchy from me.
                const cb = (0,_util_Function_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveCallback)(handler.fn, handler.scope || me);

                // remove the listener if the scope no longer exists
                if (cb.scope && !cb.scope.id) {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(listeners[name], handler)
                } else {
                    if (!me.suspendEvents) {
                        // Object event format. Inject firer reference in as 'source'
                        if (args.length === 1 && Neo.isObject(args[0])) {
                            args[0].source = me.id
                        }

                        // remove the listener if it has the once flag
                        handler.once && _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(listeners[name], handler);

                        if (Neo.isNumber(delay) && delay > 0) {
                            me.delayedCallback(cb, handler.data ? args.concat(handler.data) : args, delay)
                        } else {
                            cb.fn.apply(cb.scope, handler.data ? args.concat(handler.data) : args)
                        }
                    }
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
            ctor  = proto.constructor,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            if (Neo.isObject(listeners)) {
                listeners = {...listeners}
            }

            me.addListener(listeners);
        }

        while (proto?.constructor.isClass) {
            ctor = proto.constructor;

            if (ctor.observable && !ctor.listeners) {
                Object.assign(ctor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                })
            }

            proto = proto.__proto__
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
        return this.addListener(...args)
    }

    /**
     * There are different syntax's how you can use this method.
     * Using the eventId:
     * ```
     * this.removeListener('change', 'neo-event-7');
     * ```
     * Passing the handler method:
     * ```
     * this.removeListener('change', this.onChange, this);
     * ```
     * Passing an object:
     * ```
     * me.field.un({
     *     change                    : me.onFieldChange,
     *     changeClearToOriginalValue: me.onFieldChange,
     *     scope                     : me
     * });
     * ```
     * @param {Object|String} name
     * @param {Function|String} [eventId]
     * @param {Neo.core.Base} [scope]
     */
    removeListener(name, eventId, scope) {
        let me = this,
            i, len, listener, listeners, match;

        if (Neo.isFunction(eventId)) {
            me.removeListener({[name]: eventId, scope});
            return
        }

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
                        break
                    }
                }
            });
        } else if (Neo.isString(eventId)) {
            listeners = me.listeners[name];
            match     = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx
                }
            });

            if (match !== false) {
                listeners.splice(match, 1)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Observable));


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
    /**
     * A regex to remove camel case syntax
     * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
     * @protected
     * @static
     */
    static decamelRegEx = /([a-z])([A-Z])/g

    static config = {
        /**
         * @member {String} className='Neo.core.Util'
         * @protected
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @protected
         */
        ntype: 'core-util'
    }

    /**
     * @param {Object} scope
     * @param {String[]} values
     */
    static bindMethods(scope, values) {
        values.forEach(value => {
            scope[value] = scope[value].bind(scope)
        })
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim()
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase()
                });

                obj[parts[0]] = parts[1]
            }
            return obj
        }, {})
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
                style += Util.decamel(key) + ':' + value + ';'
            }
        });

        return style
    }

    /**
     * Transforms all uppercase characters of a string into -lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase()
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
        return typeof value === 'boolean'
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined'
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (value === null || value === undefined) {
            return true
        }

        if (Array.isArray(value)) {
            return value.length === 0
        }

        if (value instanceof Date) {
            return false
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0
        }

        if (Util.isString(value)) {
            return value === ''
        }

        return false
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function'
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value)
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value?.constructor?.name === 'Object' || false
    }

    /**
     * Returns true if the passed value is a neo data record
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isRecord(value) {
        return value?.constructor?.name === 'Record' || false
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string'
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
            return []
        }

        if (typeof iterable === 'string') {
            return iterable.split('')
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len)
    }
}

Util = Neo.setupClass(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    bindMethods      : 'bindMethods',
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isRecord         : 'isRecord',
    isString         : 'isString',
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
/* harmony export */   Base: () => (/* reexport safe */ _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Compare: () => (/* reexport safe */ _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   IdGenerator: () => (/* reexport safe */ _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Observable: () => (/* reexport safe */ _Observable_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Util: () => (/* reexport safe */ _Util_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])
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
class Manager extends _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]{
    static config = {
        /**
         * @member {String} className='Neo.manager.Base'
         * @protected
         */
        className: 'Neo.manager.Base'
    }

    /**
     * @param {Number|String} id
     * @returns {Object}
     */
    getById(id) {
        return id && this.get(id) || null
    }

    /**
     * @param {Object} item
     */
    register(item) {
        let me = this;

        if (me.get(item.id)) {
            Neo.logError('Trying to create an item with an already existing id', item, me.get(item.id))
        } else {
            me.push(item)
        }
    }

    /**
     * Removes a collection item passed by reference or key
     * @param {Object|String} item
     */
    unregister(item) {
        this.remove(item)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Manager));


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
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");




/**
 * @class Neo.manager.Component
 * @extends Neo.manager.Base
 * @singleton
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

    /**
     * @member {Map} wrapperNodes=new Map()
     */
    wrapperNodes = new Map()

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        Neo.first        = me.getFirst.bind(me); // alias
        Neo.getComponent = me.get     .bind(me)  // alias
    }

    /**
     * Flattens a given vnode tree by replacing component based subtrees with componentId based references
     * @param {Object} vnode
     * @param {String} ownerId We do not want to replace the own id => wrapped items
     * @returns {Object}
     */
    addVnodeComponentReferences(vnode, ownerId) {
        vnode = {...vnode}; // shallow copy

        let me         = this,
            childNodes = vnode?.childNodes ? [...vnode.childNodes] : [],
            childNodeId, component, componentId, parentRef, referenceNode;

        vnode.childNodes = childNodes;

        childNodes.forEach((childNode, index) => {
            childNodeId = childNode.id;

            if (!childNode.componentId && childNodeId !== ownerId) {
                component = me.get(childNodeId);

                if (!component) {
                    // searching for wrapped components as a fallback
                    component = me.wrapperNodes.get(childNodeId);

                    if (component) {
                        // update the parent component reference => assign the wrapper id
                        componentId = component.id;
                        parentRef   = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].find(component.parent.vdom, {componentId}, false);

                        if (parentRef) {
                            parentRef.vdom.id = childNodeId
                        }
                    }
                }

                if (component) {
                    componentId   = component.id;
                    referenceNode = {componentId};

                    if (componentId !== childNodeId) {
                        referenceNode.id = childNodeId
                    }
                }
            }

            childNodes[index] = component ? referenceNode : me.addVnodeComponentReferences(childNode, ownerId)
        });

        return vnode
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
            }
        } else if (!config) {
            config = {}
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        configArray.forEach(([key, value]) => {
            if ((component[key] === value)
                || (key === 'ntype' && me.hasPrototypePropertyValue(component, key, value)))
            {
                matchArray.push(true)
            }
        });

        if (matchArray.length === configLength) {
            if (returnFirstMatch) {
                return component
            }

            returnArray.push(component)
        }

        childItems = me.find({parentId: component.id});
        len        = childItems.length;

        for (; i < len; i++) {
            returnValue = me.down(childItems[i], config, returnFirstMatch);

            if (returnFirstMatch) {
                if (returnValue !== null) {
                    return returnValue
                }
            } else if (returnValue.length > 0) {
                returnArray.push(...returnValue)
            }
        }

        return returnFirstMatch ? null: returnArray
    }

    /**
     * @param {Object[]} path
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
                return id
            }
        }

        return null
    }

    /**
     * Returns the object associated to the key, or null if there is none.
     * @param {Number|String} key
     * @param {Boolean}       [includeWrapperNodes=true]
     * @returns {Neo.component.Base|null}
     */
    get(key, includeWrapperNodes=true) {
        if (includeWrapperNodes) {
            let wrapperNode = this.wrapperNodes.get(key);

            if (wrapperNode) {
                return wrapperNode
            }
        }

        return super.get(key)
    }

    /**
     * Returns all child components which are recursively matched via their parentId
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} childComponents
     */
    getChildComponents(component) {
        let me             = this,
            directChildren = me.find('parentId', component.id) || [],
            components     = [],
            childComponents;

        directChildren.forEach(item => {
            components.push(item);

            childComponents = me.getChildComponents(item);

            childComponents && components.push(...childComponents)
        });

        return components
    }

    /**
     * todo: replace all calls of this method to calls using the util.VNode class
     * Get the ids of all child nodes of the given vnode
     * @param {Object} vnode
     * @param {String[]} childIds=[]
     * @returns {String[]} childIds
     */
    getChildIds(vnode, childIds=[]) {
        return _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(vnode, childIds)
    }

    /**
     * Returns all child components found inside the vnode tree
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} childComponents
     */
    getChildren(component) {
        let childComponents = [],
            childNodes      = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(component.vnode),
            childComponent;

        childNodes.forEach(node => {
            childComponent = this.get(node);

            if (childComponent) {
                childComponents.push(childComponent)
            }
        });

        return childComponents
    }

    /**
     * !! For debugging purposes only !!
     *
     * Get the first component based on the ntype or other properties
     *
     * @param {String|Object|Array} componentDescription
     * @param {Boolean} returnFirstMatch=true
     * @returns {Neo.component.Base|null|Neo.component.Base[]}
     *
     * @example
     // as String: ntype[comma separated propterties]
     Neo.first('toolbar button[text=Try me,icon=people]')
     // as Object: Add properties. ntype is optional
     Neo.first({
                icon: 'people'
            })
     // as Array: An Array of Objects. No Strings allowed
     Neo.first([{
                ntype: 'toolbar'
            },{
                ntype: 'button', text: 'Try me', icon: 'people
            }])

     * The returnFirstMatch flag allows to return all items and
     * not stop after the first result.
     *
     * @example
     Neo.first('button', false) // => [Button, Button, Button]
     */
    getFirst(componentDescription, returnFirstMatch = true) {
        let objects = [],
            app     = Neo.apps[Object.keys(Neo.apps)[0]],
            root    = app.mainView;

        /* create an array of objects from string */
        if (Neo.isString(componentDescription)) {
            const regex = /(\w*)(\[[^\]]*\])|(\w*)/g;
            let match;

            /* generate objects which contain the information */
            while (match = regex.exec(componentDescription)) {
                let [, ntype, pairs, ntypeOnly] = match, obj;

                ntype = ntype || ntypeOnly;
                obj = {ntype};

                if (pairs) {
                    const pairsRegex = /\[(.*?)\]/,
                          pairsMatch = pairs.match(pairsRegex);

                    if (pairsMatch) {
                        const pairs = pairsMatch[1].split(',');
                        pairs.forEach((pair) => {
                            const [key, value] = pair.split('=');
                            obj[key] = value.replace(/"/g, '')
                        });
                    }
                }
                objects.push(obj);

                regex.lastIndex++
            }
        } else if (Neo.isObject(componentDescription)){
            objects.push(componentDescription)
        } else if (Neo.isArray(componentDescription)) {
            objects = componentDescription
        }

        /* find the correct child using down() */
        const result = objects.reduce((acc, key) => {
            if (acc) {
                let child = acc.down(key, returnFirstMatch);

                if (!!child) {
                    return child
                }
            }

            return null
        }, root);

        return result
    }

    /**
     * Returns an Array containing the ids of all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {String[]} parentIds
     */
    getParentIds(component) {
        let parentIds = [];

        while (component?.parentId) {
            component = this.get(component.parentId);

            if (component) {
                parentIds.push(component.id)
            }
        }

        return parentIds
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
            if (me.has(path[i]) || me.wrapperNodes.get(path[i])) {
                componentPath.push(path[i])
            }
        }

        return componentPath
    }

    /**
     * Returns an Array containing all parent components for a given component or component id
     * @param {Neo.component.Base|String} component
     * @returns {Neo.component.Base[]} parents
     */
    getParents(component) {
        if (Neo.isString(component)) {
            component = this.get(component)
        }

        let parents = [];

        while (component?.parentId) {
            component = this.get(component.parentId);

            if (component) {
                parents.push(component)
            }
        }

        return parents
    }

    /**
     * Copies a given vdom tree and replaces child component references with the vdom of their matching components
     * @param {Object} vdom
     * @param {Number} depth=-1
     *     The component replacement depth.
     *     -1 will parse the full tree, 1 top level only, 2 include children, 3 include grandchildren
     * @returns {Object}
     */
    getVdomTree(vdom, depth=-1) {
        let output = {...vdom}, // shallow copy
            childDepth;

        if (vdom.cn) {
            output.cn = [];

            vdom.cn.forEach(item => {
                childDepth = depth;

                if (item.componentId) {
                    childDepth = depth === -1 ? -1 : depth > 1 ? depth-1 : 1;

                    if (depth === -1 || depth > 1) {
                        item = this.get(item.componentId).vdom
                    }
                }

                output.cn.push(this.getVdomTree(item, childDepth))
            })
        }

        return output
    }

    /**
     * Copies a given vnode tree and replaces child component references with the vnode of their matching components
     * @param {Object} vnode
     * @param {Number} depth=-1
     *     The component replacement depth.
     *     -1 will parse the full tree, 1 top level only, 2 include children, 3 include grandchildren
     * @returns {Object}
     */
    getVnodeTree(vnode, depth=-1) {
        let output = {...vnode}, // shallow copy
            childDepth, component;

        if (vnode.childNodes) {
            output.childNodes = [];

            vnode.childNodes.forEach(item => {
                childDepth = depth;

                if (item.componentId) {
                    childDepth = depth === -1 ? -1 : depth > 1 ? depth-1 : 1;

                    if (depth === -1 || depth > 1) {
                        component = this.get(item.componentId);

                        // keep references in case there is no vnode (cmp not mounted)
                        if (component?.vnode) {
                            item = component.vnode
                        }
                    }
                }

                output.childNodes.push(this.getVnodeTree(item, childDepth))
            })
        }

        return output
    }

    /**
     * Check if the component had a property of any value somewhere in the Prototype chain
     *
     * @param {Neo.component.Base} component
     * @param {String} property
     * @param {*} value
     * @returns {boolean}
     */
    hasPrototypePropertyValue(component, property, value) {
        while (component !== null) {
            if (component.hasOwnProperty(property) && component[property] === value) {
                return true
            }

            component = component.__proto__
        }

        return false
    }

    /**
     * @param {String} wrapperId
     * @param {Neo.component.Base} component
     */
    registerWrapperNode(wrapperId, component) {
        this.wrapperNodes.set(wrapperId, component)
    }

    /**
     * @param {Neo.component.Base|String} item
     */
    unregister(item) {
        if (item) {
            if (Neo.isString(item)) {
                this.wrapperNodes.delete(item)
            } else if (item.id !== item.vdom.id) {
                this.wrapperNodes.delete(item.vdom.id)
            }
        }

        super.unregister(item)
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
        let component   = this.get(componentId),
            returnArray = [],
            configArray, configLength, matchArray;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            }
        } else if (!config) {
            config = {}
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        while (component?.parentId) {
            component = this.get(component.parentId);

            if (!component) {
                return returnFirstMatch ? null : returnArray
            }

            matchArray = [];

            configArray.forEach(([key, value]) => {
                if (component[key] === value) {
                    matchArray.push(true)
                }
            });

            if (matchArray.length === configLength) {
                if (returnFirstMatch) {
                    return component
                }

                returnArray.push(component)
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Component));


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
    'intersect',
    'keydown',
    'keyup',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mouseup',
    'neonavigate',
    'scroll',
    'selectionchange',
    'touchmove',
    'wheel'
];

/**
 * @class Neo.manager.DomEvent
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvent extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

    /**
     *
     * @param {Neo.component.Base} component
     * @param {data} event
     */
    addResizeObserver(component, event) {
        if (!Neo.main.addon.ResizeObserver) {
            console.error('For using resize domListeners, you must include main.addon.ResizeObserver.', event)
        }

        let {id, windowId} = component;

        Neo.main.addon.ResizeObserver.register({id, windowId})
    }

    /**
     * @param {Object} event
     * @protected
     */
    fire(event) {
        let me          = this,
            bubble      = true,
            data        = event.data || {},
            {eventName} = event,
            i           = 0,
            listeners   = null,
            pathIds     = data.path.map(e => e.id),
            path        = _Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentPath(pathIds),
            len         = path.length,
            component, delegationTargetId, id, preventFire;

        for (; i < len; i++) {
            id        = path[i];
            component = Neo.getComponent(id);

            if (!component || component.disabled) {
                break
            }

            listeners = me.items[id]?.[eventName];

            if (listeners) {
                if (Array.isArray(listeners)) {
                    // Stop iteration if a handler returns false
                    listeners.every(listener => {
                        let result;

                        if (listener && listener.fn) {
                            if (eventName === 'resize') {
                                // we do not want delegation for custom main.addon.ResizeObserver events
                                delegationTargetId = data.id === component.id ? data.id : false
                            } else {
                                delegationTargetId = me.verifyDelegationPath(listener, data.path)
                            }

                            if (delegationTargetId !== false) {
                                preventFire = false;

                                // we only want mouseenter & leave to fire on their top level nodes, not for children
                                if (eventName === 'mouseenter' || eventName === 'mouseleave') {
                                    preventFire = !DomEvent.verifyMouseEnterLeave(component, data, delegationTargetId, eventName)
                                }

                                if (!preventFire) {
                                    // multiple listeners would change the reference of data.component
                                    data = Neo.clone(data, true, true);

                                    data.component = component;

                                    // Handler needs to know which actual target matched the delegate
                                    data.currentTarget = delegationTargetId;

                                    if (Neo.isString(listener.fn)) {
                                        me.bindCallback(listener.fn, 'fn', listener.scope, listener)
                                    }

                                    result = listener.fn.apply(listener.scope || globalThis, [data]);

                                    if (!listener.bubble) {
                                        bubble = false
                                    }
                                }
                            }
                        }
                        // If a listener returns false, we stop iterating the listeners
                        return result !== false
                    })
                }
            }

            // we do want to trigger the FocusManager after normal domListeners on these events got executed
            if (eventName === 'focusin' || eventName === 'focusout') {
                _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]['on' + Neo.capitalize(eventName)]({
                    componentPath: path,
                    data
                });

                break
            }

            // Honor the Event cancelBubble property
            if (!bubble || data.cancelBubble) {
                break
            }
        }

        if (eventName === 'contextmenu' && data.ctrlKey) {
            Neo.util?.Logger?.onContextMenu(data)
        } else if (eventName.startsWith('drop')) {
            let dragZone = data.dragZoneId && Neo.get(data.dragZoneId);

            if (dragZone) {
                dragZone.fire(eventName, data);
                dragZone[{
                    'drop'      : 'onDrop',
                    'drop:enter': 'onDropEnter',
                    'drop:leave': 'onDropLeave',
                }[eventName]].call(dragZone, data)
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
            bubble   : config.bubble,
            delegate : config.delegate,
            eventName: config.eventName,
            id       : scope.id,
            opts     : config,
            priority : config.priority,
            scope    : config.scope   || scope,
            vnodeId  : config.vnodeId || scope.vdom.id
        };
    }

    getEventName(config) {
        let eventName = null;

        if (Neo.isObject(config)) {
            Object.keys(config).forEach(key => {
                if (!eventConfigKeys.includes(key)) {
                    eventName = key
                }
            })
        }

        return eventName
    }

    /**
     * @param {Object} config
     * @param {Boolean} config.bubble
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

            return event || null
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

                    if (eventName === 'resize') {
                        this.addResizeObserver(component, event)
                    } else if (eventName && (event.local || !globalDomEvents.includes(eventName))) {
                        localEvents.push({
                            name   : eventName,
                            handler: 'domEventListener',
                            vnodeId: event.vnodeId
                        })
                    }
                })
            });

            if (localEvents.length > 0) {
                Neo.worker.App.promiseMessage('main', {
                    action  : 'addDomListener',
                    appName : component.appName,
                    events  : localEvents,
                    windowId: component.windowId
                }).then(data => {
                    // console.log('added domListener', data);
                }).catch(err => {
                    console.log('App: Got error attempting to add a domListener', err)
                })
            }
        }
    }

    /**
     * @param {Object}  config
     * @param {Boolean} config.bubble
     * @param {String}  config.delegate
     * @param {String}  config.eventName
     * @param {String}  config.id
     * @param {Boolean} config.local
     * @param {Number}  config.opts
     * @param {Number}  config.originalConfig
     * @param {String}  config.ownerId
     * @param {Number}  config.priority=1
     * @param {Object}  config.scope
     * @param {String}  config.vnodeId
     * @returns {Boolean} true if the listener got registered successfully (false in case it was already there)
     */
    register(config) {
        let me                           = this,
            alreadyRegistered            = false,
            {eventName, id, opts, scope} = config,
            listeners                    = me.items,
            fnType                       = typeof opts,
            fn, listener, listenerConfig, listenerId;

        if (fnType === 'function' || fnType === 'string') {
            fn = opts
        } else {
            fn    = opts.fn;
            scope = opts.scope || scope
        }

        if (!listeners[id]) {
            listeners[id] = {}
        }

        if (listeners[id][eventName]) {
            listener = listeners[id][eventName];

            Object.keys(listener).forEach(key => {
                if (
                    listener[key].fn.toString() === fn.toString() && // todo: add a better check
                    listener[key].scope         === scope &&
                    listener[key].delegate      === config.delegate
                ) {
                    alreadyRegistered = true
                }
            })
        } else {
            listeners[id][eventName] = []
        }

        if (alreadyRegistered === true) {
            return false
        }

        // console.log('manager.DomEvent register', eventName, config);

        listenerId = Neo.getId('dom-event');

        config.listenerId = listenerId;

        listenerConfig = {
            bubble        : config.hasOwnProperty('bubble') ? config.bubble : opts.hasOwnProperty('bubble') ? opts.bubble : true,
            delegate      : config.delegate,
            eventName,
            fn,
            id            : listenerId,
            mounted       : !config.local && globalDomEvents.includes(eventName),
            originalConfig: config.originalConfig,
            ownerId       : config.ownerId,
            priority      : config.priority || opts.priority || 1,
            scope,
            vnodeId       : config.vnodeId
        };

        me.map[listenerId] = listenerConfig;

        listeners[id][eventName].push(listenerConfig);

        listeners[id][eventName].sort((a, b) => b.priority - a.priority);

        return true
    }

    /**
     * @param {Object} config
     * @param {Boolean} config.bubble
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

        // removed by dead control flow
{}

        // removed by dead control flow
{}
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
                                break
                            }
                        }
                    }
                })
            }

            // add new listeners
            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    if (!eventConfigKeys.includes(key)) {
                        me.register({
                            bubble        : domListener.bubble   || value.bubble,
                            delegate      : domListener.delegate || value.delegate || '#' + (component.vdom.id || component.id),
                            eventName     : key,
                            id            : component.vdom.id || component.id, // honor wrapper nodes
                            opts          : value,
                            originalConfig: domListener,
                            ownerId       : component.id,
                            priority      : domListener.priority || value.priority || 1,
                            scope         : domListener.scope    || component,
                            vnodeId       : domListener.vnodeId  || value.vnodeId  || component.vdom.id
                        })
                    }
                })
            });

            if (component.mounted && domListeners?.length > 0) {
                me.timeout(100).then(() => {
                    me.mountDomListeners(component)
                })
            }
        } else {
            _util_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Component.domListeners have to be an array', component)
        }
    }

    /**
     * @param {Object} listener
     * @param {Array} path
     * @returns {Boolean|String} true in case the delegation string matches the event path
     */
    verifyDelegationPath(listener, path) {
        let {delegate} = listener,
            j          = 0,
            pathLen    = path.length,
            targetId;

        if (typeof delegate === 'function') {
            j = delegate(path);

            if (j != null) {
                targetId = path[j].id
            }
        } else {
            let delegationArray = delegate.split(' '),
                len             = delegationArray.length,
                hasMatch, i, item, isId;

            for (i=len-1; i >= 0; i--) {
                hasMatch = false;
                item     = delegationArray[i];
                isId     = item.startsWith('#');

                if (isId || item.startsWith('.')) {
                    item = item.substr(1)
                }

                for (; j < pathLen; j++) {
                    if (
                        (isId && path[j].id === item) ||
                        path[j].cls.includes(item)
                    ) {
                        hasMatch = true;
                        targetId = path[j].id;
                        break
                    }
                }

                if (!hasMatch) {
                    return false
                }
            }
        }

        // ensure the delegation path is a child of the owner components root node
        for (; j < pathLen; j++) {
            if (path[j].id === listener.vnodeId) {
                return targetId
            }
        }

        return false
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
            delegationVdom = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].find(component.vdom, delegationTargetId);

            // delegationVdom can be undefined when dragging a proxy over the node.
            // see issues/1137 for details.
            if (!delegationVdom || delegationVdom.vdom && _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].find(delegationVdom.vdom, targetId)) {
                return false
            }
        }

        return true
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(DomEvent));


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
    static config = {
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
         * @member {Number} maxFocusInOutGap=50
         */
        maxFocusInOutGap: 50,
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
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    addToHistory(opts) {
        let history = this.history;

        history.unshift(opts);
        history.length >= this.maxHistoryLength && history.pop()
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusEnter(opts) {
        this.setComponentFocus(opts, true);
        this.addToHistory(opts)
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusLeave(opts) {
        this.setComponentFocus(opts, false)
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
     */
    focusMove(opts) {
        let me               = this,
            {history}        = me,
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
                    component,
                    path   : opts.data.path,
                    oldPath: history[0].data.path
                };

                component.onFocusMove?.(data);
                component.fire('focusMove', data);

                component.onFocusChange?.(data);
                component.fire('focusChange', data)
            }
        });

        me.addToHistory(opts)
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
            me.focusMove(opts)
        } else {
            me.focusEnter(opts)
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

        me.timeout(me.maxFocusInOutGap).then(() => {
            if (me.lastFocusOutDate > me.lastFocusInDate) {
                me.focusLeave(opts)
            }
        })
    }

    /**
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @param {Boolean} containsFocus
     * @protected
     */
    setComponentFocus(opts, containsFocus) {
        let data = {
                relatedTarget: opts.data.relatedTarget
            },
            components = opts.componentPath.map(id => Neo.getComponent(id)),
            handler;

        components.forEach(component => {
            if (component) {
                component.containsFocus = containsFocus
            }
        });

        components.forEach(component => {
            if (component) {
                data.component = component;

                data[containsFocus ? 'path' : 'oldPath'] = opts.data.path

                handler = containsFocus ? 'onFocusEnter' : 'onFocusLeave';
                component[handler]?.(data);

                component.fire(containsFocus ? 'focusEnter' : 'focusLeave', data);

                component.onFocusChange?.(data);
                component.fire('focusChange', data)
            }
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Focus));


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
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");



/**
 * @class Neo.manager.Instance
 * @extends Neo.manager.Base
 * @singleton
 */
class Instance extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static config = {
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
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].instanceManagerAvailable = true;

        me.consumeNeoIdMap();

        Neo.find      = me.find     .bind(me); // alias
        Neo.findFirst = me.findFirst.bind(me); // alias
        Neo.get       = me.get      .bind(me); // alias
    }

    /**
     * Register all ids which got applied to the Neo namespace before this instance got created
     * @protected
     */
    consumeNeoIdMap() {
        if (Neo.idMap) {
            this.add(Object.values(Neo.idMap));
            delete Neo.idMap
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Instance));


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
    static config = {
        /**
         * @member {String} className='Neo.util.Array'
         * @protected
         */
        className: 'Neo.util.Array'
    }

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     * @returns {Array}
     */
    static add(arr, items) {
        if (!Array.isArray(items)) {
            items = [items]
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        });

        return arr
    }

    /**
     * Returns an array of items which are present in array1, but not in array2
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static difference(array1=[], array2=[]) {
        return array1.filter(item => !array2.includes(item))
    }

    /**
     * Checks if the item is included by reference inside the array
     * @param {Array} arr
     * @param {*} item
     */
    static hasItem(arr, item) {
        return arr.includes(item)
    }

    /**
     * Inserts an item or Array of items to an array in case it does not already exist.
     * Duplicates will only get matched by reference.
     * @param {Array} arr
     * @param {Number} index
     * @param {*} items
     * @returns {Array}
     */
    static insert(arr, index, items) {
        if (!Array.isArray(items)) {
            items = [items]
        }

        let len = items.length -1,
            i   = len,
            currentIndex, item;

        // Iterate backwards
        for (; i > -1; i--) {
            item = items[i];

            currentIndex = arr.indexOf(item);

            if (index !== currentIndex) {
                if (currentIndex > -1) {
                    this.move(arr, currentIndex, index)
                } else {
                    arr.splice(index, 0, item)
                }
            }
        }

        return arr
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static intersection(array1=[], array2=[]) {
        return array1.filter(item => array2.includes(item))
    }

    /**
     * Moves an item inside arr from fromIndex to toIndex
     * @param {Array} arr
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    static move(arr, fromIndex, toIndex) {
        if (fromIndex === toIndex) {
            return arr
        }

        if (fromIndex >= arr.length) {
            fromIndex = arr.length - 1
        }

        arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
        return arr
    }

    /**
     * Removes an item or array of items from an array. Only primitive items will get found
     * @param {Array} arr
     * @param {*} items
     */
    static remove(arr, items) {
        let index;

        if (!Array.isArray(items)) {
            items = [items]
        }

        items.forEach(item => {
            index = arr.indexOf(item);

            index > -1 && arr.splice(index, 1)
        });

        return arr
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
        return this.add(arr, addItems)
    }

    /**
     * Removes an item from an array in case it does exist, otherwise adds it
     * @param {Array} arr
     * @param {*} item
     * @param {Boolean} [add]
     */
    static toggle(arr, item, add = !this.hasItem(arr, item)) {
        return this[add ? 'add' : 'remove'](arr, item);
    }

    /**
     * Returns an array of items which are present in the passed arrays.
     * Multiple arrays may be passed.
     * Only supports primitive items
     * @returns {Array}
     */
    static union() {
        return [...new Set(Array.prototype.concat(...arguments))]
    }

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static unshift(arr, items) {
        if (!Array.isArray(items)) {
            items = [items]
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.unshift(item)
            }
        });

        return arr
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(NeoArray));


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
    static config = {
        /**
         * @member {String} className='Neo.util.ClassSystem'
         * @protected
         */
        className: 'Neo.util.ClassSystem'
    }

    /**
     * can get used inside beforeSet methods in case you want to create instances like stores
     * @param {Object|Neo.core.Base|null} config
     * @param {Neo.core.Base|String} [DefaultClass=null]
     * @param {Object} [defaultValues={}]
     * @returns {Neo.core.Base} instance
     */
    static beforeSetInstance(config, DefaultClass=null, defaultValues={}) {
        let configType = Neo.typeOf(config);

        if (Neo.isString(DefaultClass)) {
            DefaultClass = Neo.ns(DefaultClass)
        }

        if (!config && DefaultClass) {
            config = Neo.create(DefaultClass, defaultValues)
        } else if (configType === 'NeoClass') {
            config = Neo.create(config, defaultValues)
        } else if (configType === 'Object') {
            if (config.ntype) {
                config = Neo.ntype({
                    ...defaultValues,
                    ...config
                })
            } else {
                let newConfig = {};

                if (DefaultClass) {
                    newConfig.module = DefaultClass
                }

                Object.assign(newConfig, {
                    ...defaultValues,
                    ...config
                });

                config = Neo.create(newConfig)
            }
        } else if (configType === 'NeoInstance') {
            if (defaultValues?.listeners) {
                config.on(defaultValues.listeners)
            }
        }

        return config
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(ClassSystem));


/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Function.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Function.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindAppend: () => (/* binding */ bindAppend),
/* harmony export */   buffer: () => (/* binding */ buffer),
/* harmony export */   createInterceptor: () => (/* binding */ createInterceptor),
/* harmony export */   createSequence: () => (/* binding */ createSequence),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   intercept: () => (/* binding */ intercept),
/* harmony export */   resolveCallback: () => (/* binding */ resolveCallback),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/**
 * Append args instead of prepending them
 * @param {Function} fn
 * @param {Object} scope
 * @returns {Function}
 */
function bindAppend(fn, scope) {
    const args = [].slice.call(arguments).slice(2);

    return function() {
        return fn.apply(scope, [].slice.call(arguments).concat(args))
    }
}

/**
 * @param {Function} callback
 * @param {Neo.core.Base} scope
 * @param {Number} delay=300
 * @returns {Function}
 */
function buffer(callback, scope, delay=300) {
    let timeoutId;

    const wrapper = function(...args) {
        // callback invocation comes "delay" ms after the last call to wrapper
        // so cancel any pending invocation.
        clearTimeout(timeoutId);

        wrapper.isPending = true;

        timeoutId = setTimeout(() => {
            timeoutId = 0;
            wrapper.isPending = false;
            callback.apply(scope, args)
        }, delay)
    };

    wrapper.cancel = () => {
        wrapper.isPending = false;
        clearTimeout(timeoutId)
    };

    return wrapper
}

/**
 * Intended for functions with 1 param where the interceptor can change the value
 * @param {Object} target
 * @param {String} targetMethodName
 * @param {Function} interceptFunction
 * @param {Object} scope=target
 * @returns {Function}
 */
function createInterceptor(target, targetMethodName, interceptFunction, scope) {
    let targetMethod = target[targetMethodName];

    return (target[targetMethodName] = function(value) {
        return targetMethod.call(target, interceptFunction.call(scope || target, value))
    })
}

/**
 * @param {Neo.core.Base} target
 * @param {String} methodName
 * @param {Function} fn
 * @param {Object} scope
 * @returns {Function}
 */
function createSequence(target, methodName, fn, scope) {
    let method = target[methodName] || Neo.emptyFn;

    return (target[methodName] = function() {
        method.apply(this, arguments);
        return fn.apply(scope || this, arguments)
    })
}

/**
 * @param {Function} callback
 * @param {Neo.core.Base} scope
 * @param {Number} delay=300
 * @returns {Function}
 */
function debounce(callback, scope, delay=300) {
    let debounceTimer;

    return function(...args) {
        // leading edge => trigger the first call right away
        if (!Neo.isNumber(debounceTimer)) {
            // we need to check if the scope (instance) did not get destroyed yet
            scope?.id && callback.apply(scope, args);

            // we still want to start a timer to delay the 2nd+ update
            debounceTimer = setTimeout(() => {debounceTimer = null},  delay)
        } else {
            clearTimeout(debounceTimer);

            debounceTimer = setTimeout(() => {
                // we need to check if the scope (instance) did not get destroyed yet
                scope?.id && callback.apply(scope, args);
                debounceTimer = setTimeout(() => {debounceTimer = null},  delay)
            },  delay)
        }
    }
}

/**
 * The interceptor can prevent the targetMethod from getting executed in case it returns false.
 * @param {Object} target
 * @param {String} targetMethodName
 * @param {Function} interceptFunction
 * @param {Object} scope=target
 * @param {*} preventedReturnValue=null The value to return in case the interceptFunction returns false
 * @returns {Function}
 */
function intercept(target, targetMethodName, interceptFunction, scope, preventedReturnValue=null) {
    let targetMethod = target[targetMethodName];

    return (target[targetMethodName] = function() {
        return (interceptFunction.apply(scope || target, arguments) === false)
            ? preventedReturnValue
            : targetMethod.apply(target, arguments)
    })
}

/**
 * Locate a callable function by name in the passed scope.
 *
 * If the name starts with 'up.', the parent Component chain is searched.
 *
 * This is used by manager.DomEvents & core.Observable.fire and by 'handler' function calls to resolve
 * string function names in the Component's own hierarchy.
 * @param {Function|String} fn A function, or the name of a function to find in the passed scope object/
 * @param {Object} scope=this The scope to find the function in if it is specified as a string.
 * @returns {Object}
 */
function resolveCallback(fn, scope=this) {
    if (Neo.isString(fn)) {
        if (!scope[fn] && fn.startsWith('up.')) {
            fn = fn.slice(3);
            while (!scope[fn] && (scope = scope.parent));
        } else {
            scope = scope.getController?.()?.getHandlerScope(fn, null) || scope
        }

        fn = scope[fn]
    }

    return {fn, scope}
}

/**
 * @param {Function} callback
 * @param {Neo.core.Base} scope
 * @param {Number} delay=300
 * @returns {Function}
 */
function throttle(callback, scope, delay=300) {
    let lastRanDate, timeoutId;

    return function(...args) {
        if (!lastRanDate) {
            // we need to check if the scope (instance) did not get destroyed yet
            scope?.id && callback.apply(scope, args);

            lastRanDate = Date.now()
        } else {
            clearTimeout(timeoutId)

            timeoutId = setTimeout(function() {
                if ((Date.now() - lastRanDate) >= delay) {
                    // we need to check if the scope (instance) did not get destroyed yet
                    scope?.id && callback.apply(scope, args);

                    lastRanDate = Date.now()
                }
            }, delay - (Date.now() - lastRanDate))
        }
    }
}


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
    /**
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true

    static config = {
        /**
         * @member {String} className='Neo.util.HashHistory'
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
         * Storing one stack per windowId
         * @member {Object} stacks={}
         * @protected
         */
        stacks: {}
    }

    /**
     * Convenience shortcut
     * @param {Number} [windowId]
     * @returns {Object}
     */
    first(windowId) {
        return this.getAt(0, windowId)
    }

    /**
     * @param {Number} index
     * @param {Number} [windowId]
     * @returns {Number}
     */
    getAt(index, windowId) {
        return this.getStack(windowId)[index]
    }

    /**
     * @param {Number} [windowId]
     * @returns {Number}
     */
    getCount(windowId) {
        return this.getStack(windowId).length
    }

    /**
     * @param {Number} [windowId]
     * @returns {Number}
     */
    getStack(windowId) {
        let me       = this,
            {stacks} = me,
            stackId  = windowId || Object.keys(stacks)[0],
            stack    = stacks[stackId];

        if (!stack) {
            stacks[stackId] = stack = []
        }

        return stack
    }

    /**
     * @param {Object} data
     * @param {String} data.appName
     * @param {Object} data.hash
     * @param {String} data.hashString
     * @param {Number} data.windowId
     */
    push(data) {
        let me         = this,
            {windowId} = data,
            stack      = me.getStack(windowId);

        if (stack[0]?.hashString !== data.hashString) {
            delete data[windowId];
            stack.unshift(data);

            if (stack.length > me.maxItems) {
                stack.pop()
            }

            me.fire('change', data, stack[1] || null)
        }
    }

    /**
     * Convenience shortcut
     * @param {Number} [windowId]
     * @returns {Object}
     */
    second(windowId) {
        return this.getAt(0, windowId)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(HashHistory));


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
    static config = {
        /**
         * @member {String} className='Neo.util.Logger'
         * @protected
         */
        className: 'Neo.util.Logger',
        /**
         * Set the minimum level, which you want to output.
         * Change this at any time using a value of logLevels: ['info', 'log', 'warn', 'error']
         *
         *     Neo.util.Logger.level = 'error'
         *
         * @member {String} level='info'
         * @protected
         */
        level_: 'info',
        /**
         * @member {Boolean} enableLogs=true
         * @protected
         */
        singleton: true
    }

    /**
     * @member {Object} logChar
     */
    logChars  = {
        error: 'E',
        info : 'I',
        log  : 'L',
        warn : 'W'
    }
    /**
     * @member {Object} colors
     */
    logColors = {
        error: 'indianred',
        info : '#acacac',
        log  : '#448888',
        warn : '#6d6d00'
    }
    /**
     * LogLevels
     * @member {String[]} logLevels
     */
    logLevels = ['info', 'log', 'warn', 'error']

    /**
     * @param config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        // aliases
        Neo.applyFromNs(Neo, me, {
            error   : 'error',
            info    : 'info',
            log     : 'log',
            logError: 'logError',
            warn    : 'warn'
        }, true);

        me.timeout(50).then(() => {
            if (!Neo.config.enableLogsInProduction && Neo.config.environment === 'dist/production') {
                me.write = Neo.emptyFn
            }
        })
    }

    /**
     * Set level to number based on position in logLevels
     * @param {String} value
     * @param {String|Number} oldValue
     * @returns {Number}
     */
    beforeSetLevel(value, oldValue) {
        return this.logLevels.indexOf(value)
    }

    /**
     * @param {String} value
     */
    error(value) {
        throw new Error(value)
    }

    /**
     * internal helper to catch caller
     * no known native way in modern JS to know what file that triggered the current method
     * therefore we use Error, we can get the caller file from the stack trace string.
     * @protected
     * @returns {String}
     */
    getCaller() {
        let caller_path = undefined,
            err         = new Error(),
            stack_lines = err.stack.split('\n'),
            found_this  = false,
            i, line;

        for (i in stack_lines) {
            line = stack_lines[i];

            if (!found_this && /Logger\.mjs/.test(line)) {
                found_this = true
            } else if (found_this) {
                if (!/Logger\.mjs/.test(line)) {
                    // remove the closing )
                    line        = line.replace(')', '');
                    // get the part after the last /
                    caller_path = line.match(/([^\/]+)$/)[1].match(/([^ ]+)$/)[1];

                    break
                }
            }
        }

        return caller_path
    }

    /**
     * @param args
     */
    info(...args) {
        args = this.resolveArgs(...args);
        this.write(args, 'info')
    }

    /**
     * @param args
     */
    log(...args) {
        args = this.resolveArgs(...args);
        this.write(args, 'log')
    }

    /**
     * @param args
     */
    logError(...args) {
        args = this.resolveArgs(...args);
        this.write(args, 'error')
    }

    /**
     * @param {Object} data
     */
    onContextMenu(data) {
        let {config} = Neo;

        if (config.enableComponentLogger && !(config.env === 'dist/production' && config.enableLogsInProduction)) {
            let isGroupSet = false,
                component;

            data.path.forEach(item => {
                component = Neo.getComponent(item.id, false);

                if (component) {
                    if (!isGroupSet) {
                        isGroupSet = true;
                        console.group(item.id)
                    }

                    console.log(component)
                }
            });

            isGroupSet && console.groupEnd()
        }
    }

    /**
     * Internal helper for args
     * @param {Array} args
     * @returns {Object}
     * @protected
     */
    resolveArgs(...args) {
        let identifier = args[0],
            argsObject = {};

        if (args.length === 1) {
            if (Neo.isString(identifier)) {
                argsObject.msg = args[0]
            } else if (Neo.isObject(identifier)) {
                argsObject = identifier
            }
        } else if (args.length > 2) {
            argsObject.msg  = args[0];
            argsObject.data = args.slice(1)
        }

        return argsObject
    }

    /**
     * @param args
     */
    warn(...args) {
        args = this.resolveArgs(...args);
        this.write(args, 'warn')
    }

    /**
     * Output method
     * @param {Object} args
     * @param {String} level
     * @protected
     */
    write(args, level) {
        let me = this;

        if (me.beforeSetLevel(level) < me.level) {
            return
        }

        console.log('#', args.msg, level);

        let logColor = me.logColors[level],
            logChar  = me.logChars[level],
            bg       = `background-color:${logColor}; color: white; font-weight: 900;`,
            color    = `color:${logColor};`,
            msg      = `[${me.getCaller()}] ${args.msg}`;

        if (args.data) {
            console.groupCollapsed(`%c ${logChar} %c ${msg}`, bg, color)
            console.log(args.data);
            console.groupEnd()
        } else {
            console.log(`%c ${logChar} %c ${msg}`, bg, color)
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Logger));


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
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");



/**
 * @class Neo.util.VDom
 * @extends Neo.core.Base
 */
class VDom extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.util.VDom'
         * @protected
         */
        className: 'Neo.util.VDom'
    }

    /**
     * @param {Object} vdom
     * @param {Boolean} removeIds=true
     * @returns {Object} cloned vdom
     */
    static clone(vdom, removeIds=true) {
        let clone = Neo.clone(vdom, true);

        if (removeIds) {
            delete clone.id
        }

        if (clone.cn) {
            clone.cn.forEach((item, index) => {
                clone.cn[index] = VDom.clone(item, removeIds)
            })
        }

        return clone
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} vdom
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Boolean} replaceComponentRefs=true
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vdom
     */
    static find(vdom, opts, replaceComponentRefs=true, index, parentNode) {
        index = index || 0;
        opts  = !Neo.isString(opts) ? opts : {id: opts};

        if (replaceComponentRefs) {
            vdom = VDom.getVdom(vdom)
        }

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
                                matchArray.push(true)
                            }
                        } else if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true)
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vdom[key])) {
                            // todo: either search the vdom array for all keys or compare if the arrays are equal.
                            throw new Error('find: cls matching not supported for target & source types of Arrays')
                        }
                        break
                    case 'style':
                        if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true)
                            }
                        } else if (Neo.isObject(value) && Neo.isObject(vdom[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vdom[key].hasOwnProperty(styleKey) && vdom[key][styleKey] === styleValue)) {
                                    styleMatch = false
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true)
                            }
                        } else {
                            throw new Error('find: style matching not supported for mixed target & source types (Object VS String)')
                        }
                        break
                    default:
                        if (vdom[key] === value) {
                            matchArray.push(true)
                        }
                        break
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {index, parentNode, vdom}
        }

        if (vdom.cn) {
            for (; i < len; i++) {
                if (vdom.cn[i]) {
                    subChild = VDom.find(vdom.cn[i], opts, replaceComponentRefs, i, vdom);

                    if (subChild) {
                        child = {
                            index     : subChild.index,
                            parentNode: subChild.parentNode,
                            vdom      : subChild.vdom
                        };
                        break
                    }
                }
            }
        }

        return child
    }

    /**
     * Convenience shortcut for find(vdom, {flag: flag});
     * @param {Object} vdom
     * @param {String} flag The flag reference specified on the target vdom child node
     * @returns {Object} vdom
     */
    static getByFlag(vdom, flag) {
        return VDom.find(vdom, {flag})?.vdom
    }

    /**
     * Get the ids of all child nodes of the given vdom tree
     * @param vdom
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vdom, childIds=[]) {
        vdom = VDom.getVdom(vdom);

        let childNodes = vdom?.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id)
            }

            childIds = VDom.getChildIds(childNode, childIds)
        });

        return childIds
    }

    /**
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodes(vdom, index) {
        vdom = VDom.getVdom(vdom);

        let columnNodes = [];

        vdom.cn?.forEach(row => {
            if (row.cn?.[index]) {
                columnNodes.push(row.cn[index])
            }
        })

        return columnNodes
    }

    /**
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodesIds(vdom, index) {
        return VDom.getColumnNodes(vdom, index).map(e => e.id)
    }

    /**
     * @param {Object} vdom
     * @param {String} flag
     * @param {Array} [matchArray]
     * @returns {Array} an array of vdom nodes which match the flag
     */
    static getFlags(vdom, flag, matchArray) {
        vdom = VDom.getVdom(vdom);

        if (!matchArray) {
            matchArray = [];

            if (vdom.flag === flag) {
                matchArray.push(vdom)
            }
        }

        (vdom?.cn || []).forEach(childNode => {
            if (childNode.flag === flag) {
                matchArray.push(childNode)
            }

            matchArray = VDom.getFlags(childNode, flag, matchArray)
        });

        return matchArray
    }

    /**
     * @param {Object} vdom
     * @param {String} id
     * @param {Boolean} topLevel=true Internal flag, do not use it
     * @returns {Array}
     */
    static getParentNodes(vdom, id, topLevel=true) {
        vdom = VDom.getVdom(vdom);

        let parents = null,
            i       = 0,
            len     = vdom.cn?.length || 0;

        if (vdom.id === id) {
            return []
        }

        for (; i < len; i++) {
            parents = VDom.getParentNodes(vdom.cn[i], id, false);

            if (parents) {
                parents.push(vdom.cn[i]);
                break
            }
        }

        if (topLevel && parents) {
            parents.push(vdom)
        }

        return parents
    }

    /**
     * Convenience shortcut using manager.Component to replace vdom references if needed
     * @param {Object} vdom
     * @returns {Object}
     */
    static getVdom(vdom) {
        if (vdom.componentId) {
            vdom = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].get(vdom.componentId).vdom
        }

        return vdom
    }

    /**
     * Insert a given nodeToInsert after a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertAfterNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, false)
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertBeforeNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, true)
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
            targetNodeId = targetNodeId.id
        }

        let targetNode = VDom.find(vdom, targetNodeId),
            index;

        if (targetNode) {
            index = insertBefore ? targetNode.index : targetNode.index + 1;
            targetNode.parentNode.cn.splice(index, 0, nodeToInsert);
            return true
        }

        return false
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} [vdom]
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @returns {Boolean} true in case the node was found & removed
     */
    static removeVdomChild(vdom, opts) {
        let child = VDom.find(vdom, opts);

        if (child) {
            child.parentNode.cn.splice(child.index, 1);
            return true
        }

        return false
    }

    /**
     * Replaces a child node inside a vdom tree by a given id
     * @param {Object} vdom
     * @param {String} id
     * @param {Object} newChildNode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceVdomChild(vdom, id, newChildNode) {
        vdom = VDom.getVdom(vdom);

        let cn  = vdom.cn || [],
            i   = 0,
            len = cn.length,
            childNode;

        if (vdom.id === id) {
            throw new Error('replaceVdomChild: target id matches the root vnode id: ' + id)
        }

        for (; i < len; i++) {
            childNode = cn[i];

            if (childNode.id === id) {
                cn[i] = newChildNode;
                return true
            }

            if (VDom.replaceVdomChild(childNode, id, newChildNode)) {
                return true
            }
        }

        return false;
    }

    /**
     * Neo.vdom.Helper will create ids for each vnode which does not already have one,
     * so we need to sync them into the vdom.
     * @param {Neo.vdom.VNode} vnode
     * @param {Object} vdom
     * @param {Boolean} force=false The force param will enforce overwriting different ids
     */
    static syncVdomIds(vnode, vdom, force=false) {
        if (vnode && vdom) {
            vdom = VDom.getVdom(vdom);

            let childNodes = vdom.cn,
                cn, i, len;

            if (force) {
                if (vnode.id && vdom.id !== vnode.id) {
                    vdom.id = vnode.id
                }
            } else {
                // we only want to change vdom ids in case there is not already an own id
                // (think of adding & removing nodes in parallel)
                if (!vdom.id && vnode.id) {
                    vdom.id = vnode.id
                }
            }

            if (childNodes) {
                cn  = childNodes.map(item => VDom.getVdom(item));
                cn  = cn.filter(item => item.removeDom !== true);
                i   = 0;
                len = cn?.length || 0;

                for (; i < len; i++) {
                    if (vnode.childNodes) {
                        VDom.syncVdomIds(vnode.childNodes[i], cn[i], force)
                    }
                }
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(VDom));


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
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");



/**
 * @class Neo.util.VNode
 * @extends Neo.core.Base
 */
class VNode extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.util.VNode'
         * @protected
         */
        className: 'Neo.util.VNode'
    }

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
    static find(vnode, opts, index, parentNode) {
        vnode = VNode.getVnode(vnode);

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
                                    attrMatch = false
                                }
                            });

                            if (attrMatch) {
                                matchArray.push(true)
                            }
                        }
                        break
                    case 'className':
                        if (typeof value === 'string' && Neo.isArray(vnode[key])) {
                            if (vnode[key].includes(value)) {
                                matchArray.push(true)
                            }
                        } else if (typeof value === 'string' && typeof vnode[key] === 'string') {
                            if (vnode[key] === value) {
                                matchArray.push(true)
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vnode[key])) {
                            // todo: either search the vnode array for all keys or compare if the arrays are equal.
                            throw new Error('find: cls matching not supported for target & source types of Arrays')
                        }
                        break
                    case 'style':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vnode[key].hasOwnProperty(styleKey) && vnode[key][styleKey] === styleValue)) {
                                    styleMatch = false
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true)
                            }
                        }
                        break
                    default:
                        if (vnode[key] === value) {
                            matchArray.push(true)
                        }
                        break
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {index, parentNode, vnode}
        }

        for (; i < len; i++) {
            subChild = VNode.find(vnode.childNodes[i], opts, i, vnode);

            if (subChild) {
                return subChild
            }
        }

        return null
    }

    /**
     * Finds a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String|null} id
     * @returns {Object|null} child vnode or null
     */
    static getById(vnode, id) {
        vnode = VNode.getVnode(vnode);

        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            return vnode
        }

        for (; i < len; i++) {
            childNode = VNode.getVnode(childNodes[i]);

            if (childNode.id === id) {
                return childNode
            }

            childNode = VNode.getById(childNode, id);

            if (childNode) {
                return childNode
            }
        }

        return null
    }

    /**
     * Get the ids of all child nodes of the given vnode, excluding component references
     * @param {Object} vnode
     * @param {String[]} childIds=[]
     * @returns {String[]} childIds
     */
    static getChildIds(vnode, childIds=[]) {
        vnode?.childNodes?.forEach(childNode => {
            if (childNode.id && !childNode.componentId) {
                childIds.push(childNode.id)
            }

            VNode.getChildIds(childNode, childIds)
        });

        return childIds
    }

    /**
     * Convenience shortcut using manager.Component to replace vnode references if needed
     * @param {Object} vnode
     * @returns {Object}
     */
    static getVnode(vnode) {
        if (vnode.componentId) {
            vnode = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].get(vnode.componentId).vnode
        }

        return vnode
    }

    /**
     * Removes a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @returns {Boolean} true in case the node was found and removed
     */
    static removeChildVnode(vnode, id) {
        vnode = VNode.getVnode(vnode);

        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('removeChildVnode: target id matches the root vnode id: ' + id)
        }

        for (; i < len; i++) {
            childNode = VNode.getVnode(childNodes[i]);

            if (childNode.id === id) {
                childNodes.splice(i, 1);
                return true
            }

            if (VNode.removeChildVnode(childNode, id)) {
                return true
            }
        }

        return false
    }

    /**
     * Replaces a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @param {Object} newChildVnode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceChildVnode(vnode, id, newChildVnode) {
        vnode = VNode.getVnode(vnode);

        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('replaceChildVnode: target id matches the root vnode id: ' + id)
        }

        for (; i < len; i++) {
            childNode = VNode.getVnode(childNodes[i]);

            if (childNode.id === id) {
                childNodes[i] = newChildVnode;
                return true
            }

            if (VNode.replaceChildVnode(childNode, id, newChildVnode)) {
                return true
            }
        }

        return false
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(VNode));


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
class Worker extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

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
            gt.onconnect = me.onConnected.bind(me)
        } else {
            gt.onmessage = me.onMessage.bind(me)
        }

        Neo.currentWorker = me;
        Neo.workerId      = me.workerId
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
                    hasMatch = false
                }
            });

            if (hasMatch) {
                returnPort = port
            }
        });

        return returnPort
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} data
     */
    async onConnect(data) {
        // short delay to ensure app VCs are in place
        await this.timeout(10);

        let {appName, windowId} = data;
        this.fire('connect', {appName, windowId})
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
            appName : null,
            id,
            port    : e.ports[0],
            windowId: null
        });

        me.ports[me.ports.length - 1].port.onmessage = me.onMessage.bind(me);

        // core.Base: initRemote() subscribes to this event for the SharedWorkers context
        me.fire('connected');

        me.sendMessage('main', {action: 'workerConstructed', port: id});

        me.afterConnect()
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        if (!me.isSharedWorker) {
            me.sendMessage('main', {action: 'workerConstructed'});
            me.afterConnect()
        }
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} data
     */
    onDisconnect(data) {
        let {appName, windowId} = data;
        this.fire('disconnect', {appName, windowId})
    }

    /**
     * @param {Object} e
     */
    onMessage(e) {
        let me                = this,
            {data}            = e,
            {action, replyId} = data,
            promise;

        if (!action) {
            throw new Error('Message action is missing: ' + data.id)
        }

        if (action !== 'reply') {
            me['on' + Neo.capitalize(action)](data);
        } else if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.reject) {
                promise.reject(data.data)
            } else {
                promise.resolve(data.data)
            }

            delete me.promises[replyId]
        }
    }

    /**
     * @param {Object} msg
     */
    onPing(msg) {
        this.resolve(msg, {originMsg: msg})
    }

    /**
     * Only relevant for SharedWorkers
     * @param {Object} msg
     * @param {String} msg.appName
     */
    onRegisterApp(msg) {
        let me        = this,
            {appName} = msg,
            port;

        for (port of me.ports) {
            if (!port.appName) {
                port.appName = appName;
                me.onConnect({appName, windowId: port.windowId});
                break
            }
        }
    }

    /**
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        Neo.config = Neo.config || {};

        let me         = this,
            {windowId} = msg.data,
            port;

        for (port of me.ports) {
            if (!port.windowId) {
                port.windowId = windowId;
                break
            }
        }

        Object.assign(Neo.config, msg.data)
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
                msgId   = message?.id;

            if (!msgId) {
                // a window got closed and the message port no longer exist (SharedWorkers)
                reject()
            } else {
                me.promises[msgId] = {reject, resolve}
            }
        })
    }

    /**
     * @param {String} dest app, canvas, data, main or vdom (excluding the current worker)
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
            port = me.channelPorts[dest]
        } else if (!me.isSharedWorker) {
            port = globalThis
        } else {
            if (opts.port) {
                port = me.getPort({id: opts.port}).port
            } else if (opts.windowId) {
                portObject = me.getPort({windowId: opts.windowId});
                port       = portObject?.port;

                opts.port = portObject?.id
            }  else if (opts.appName) {
                portObject = me.getPort({appName: opts.appName});
                port       = portObject?.port;

                opts.port = portObject?.id
            } else {
                port = me.ports[0].port
            }
        }

        if (port) {
            message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_2__["default"](opts);
            port.postMessage(message, transfer);
        }

        return message
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Worker));


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

        Object.assign(this, config)
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
    static config = {
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
    }

    /**
     * @param {Object} source
     * @param {Object} target
     */
    assignPort(source, target) {
        if (source) {
            const {appName, port, windowId} = source;
            Object.assign(target, {appName, port, windowId})
        }
    }

    /**
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me       = this,
            {origin} = remote;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };

            me.isSharedWorker && me.assignPort(data, opts);

            return me.promiseMessage(origin, opts, buffer)
        }
    }

    /**
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me                   = this,
                {className, methods} = remote,
                pkg                  = Neo.ns(className, true);

            methods.forEach(method => {
                if (remote.origin !== 'main' && pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method)
                }

                pkg[method] ??= me.generateRemote(remote, method)
            })
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
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"')
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"')
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data)
        } else {
            out = method.call(pkg, msg.data)
        }

        if (out instanceof Promise) {
            out
                .catch(err => {me.reject(msg, err)})
                .then(data => {me.resolve(msg, data)})
        } else {
            me.resolve(msg, out)
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        let me = this,

        opts = {
            action : 'reply',
            data,
            reject : true,
            replyId: msg.id
        };

        me.isSharedWorker && me.assignPort(msg, opts);
        me.sendMessage(msg.origin, opts)
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        let me = this,

        opts = {
            action : 'reply',
            data,
            replyId: msg.id
        };

        me.isSharedWorker && me.assignPort(msg, opts);
        me.sendMessage(msg.origin, opts)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(RemoteMethodAccess));


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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkneo_offscreen_canvas_demo"] = self["webpackChunkneo_offscreen_canvas_demo"] || [];
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
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
    static config = {
        /**
         * @member {String} className='Neo.worker.App'
         * @protected
         */
        className: 'Neo.worker.App',
        /**
         * @member {Number} countLoadingThemeFiles_=0
         */
        countLoadingThemeFiles_: 0,
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            main: [
                'createNeoInstance',
                'destroyNeoInstance',
                'fireEvent',
                'getConfigs',
                'setConfigs'
            ]
        },
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
    }

    /**
     * @member {Object|null} data=null
     * @protected
     */
    data = null
    /**
     * @member {Boolean} isUsingStateProviders=false
     * @protected
     */
    isUsingStateProviders = false
    /**
     * We are storing the params of insertThemeFiles() calls here, in case the method does get triggered
     * before the json theme structure got loaded.
     * @member {Array[]} themeFilesCache=[]
     * @protected
     */
    themeFilesCache = []

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        // convenience shortcuts
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyDeltas    = me.applyDeltas   .bind(me);
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].setCssVariable = me.setCssVariable.bind(me)
    }

    /**
     * Triggered after the countLoadingThemeFiles config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetCountLoadingThemeFiles(value, oldValue) {
        if (value === 0 && oldValue !== undefined) {
            this.fire('themeFilesLoaded')
        }
    }

    /**
     * @param {String} appName
     * @param {Array|Object} deltas
     * @returns {Promise<*>}
     */
    applyDeltas(appName, deltas) {
         return this.promiseMessage('main', {action: 'updateDom', appName, deltas})
    }

    /**
     * Remote method to use inside main threads for creating neo based class instances.
     * Be aware that you can only pass configs which can get converted into pure JSON.
     *
     * Rendering a component into the document.body
     * @example:
     *     Neo.worker.App.createNeoInstance({
     *         ntype     : 'button',
     *         autoMount : true,
     *         autoRender: true
     *         text      : 'Hi Nige!'
     *     }).then(id => console.log(id))
     *
     * Inserting a component into a container
     * @example:
     *     Neo.worker.App.createNeoInstance({
     *         ntype      : 'button',
     *         parentId   : 'neo-container-3',
     *         parentIndex: 0
     *         text       : 'Hi Nige!'
     *     }).then(id => console.log(id))
     *
     * @param {Object} config
     * @param {String} [config.importPath] you can lazy load missing classes via this config. dev mode only.
     * @param {String} [config.parentId] passing a parentId will put your instance into a container
     * @param {Number} [config.parentIndex] if a parentId is passed, but no index, neo will use add()
     * @returns {String} the instance id
     */
    async createNeoInstance(config) {
        if (config.importPath) {
            await import(/* webpackIgnore: true */ config.importPath);
            delete config.importPath
        }

        let appName   = Object.keys(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].apps)[0], // fallback in case no appName was provided
            Container = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].container?.Base,
            index, instance, parent;

        config = {appName, ...config};

        if (config.parentId) {
            parent = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getComponent(config.parentId);

            if (Container && parent && parent instanceof Container) {
                index = config.parentIndex;

                delete config.parentId;
                delete config.parentIndex;

                if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(index)) {
                    instance = parent.insert(index, config)
                } else {
                    instance = parent.add(config)
                }
            }
        } else {
            // default parentId='document.body' => we want it to get shown
            config.autoMount  = true;
            config.autoRender = true;

            instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"][config.ntype ? 'ntype' : 'create'](config)
        }

        return instance.id
    }

    /**
     * @param {Object} data
     */
    createThemeMap(data) {
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns('Neo.cssMap.fileInfo', true);
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].cssMap.fileInfo = data;
        this.resolveThemeFilesCache()
    }

    /**
     * Remote method to use inside main threads for destroying neo based class instances.
     *
     * @example:
     *     Neo.worker.App.destroyNeoInstance('neo-button-3').then(success => console.log(success))
     *
     * @param {String} id
     * @returns {Boolean} returns true, in case the instance was found
     */
    destroyNeoInstance(id) {
        let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].get(id),
            parent;

        if (instance) {
            if (instance.parentId) {
                parent = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getComponent(instance.parentId);

                if (parent) {
                    parent.remove(instance);
                    return true
                }
            }

            instance.destroy(true, true);
            return true
        }

        return false
    }

    /**
     * Fires a custom event based on core.Observable on any app realm based Neo instance from main
     * @param {Object} data
     * @param {String} data.id
     * @param {String} data.name
     */
    fireEvent(data) {
        let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].get(data.id),
            name;

        if (instance) {
            name = data.name;

            delete data.id;
            delete data.name;

            instance.fire(name, data);

            return true
        }

        return false
    }

    /**
     * Only needed for the SharedWorkers context
     * @param {String} eventName
     * @param {Object} data
     */
    fireMainViewsEvent(eventName, data) {
        this.ports.forEach(port => {
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].apps[port.appName].mainView.fire(eventName, data)
        })
    }

    /**
     * Convenience shortcut to lazy-load main thread addons, in case they are not imported yet
     * @param {String} name
     * @param {Number} windowId
     * @returns {Promise<Neo.main.addon.Base>} The namespace of the addon to use via remote method access
     */
    async getAddon(name, windowId) {
        let addon = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].main?.addon?.[name];

        if (!addon) {
            await _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].Main.importAddon({name, windowId});
            addon = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].main.addon[name]
        }

        return addon
    }

    /**
     * Get configs of any app realm based Neo instance from main
     * @param {Object} data
     * @param {String} data.id
     * @param {String|String[]} data.keys
     * Returns an array of configs if a keys array was passed.
     * Returns the value of a given config directly, in case no array was passed
     * Returns false, in case no instance got found.
     * @returns {*}
     */
    getConfigs(data) {
        let instance    = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].get(data.id),
            {keys}      = data,
            returnArray = [];

        if (instance) {
            if (!Array.isArray(keys)) {
                return instance[keys]
            }

            keys.forEach(key => {
                returnArray.push(instance[key])
            });

            return returnArray
        }

        return false
    }

    /**
     * @param {String} path
     * @returns {Promise}
     */
    importApp(path) {
        if (path.endsWith('.mjs')) {
            path = path.slice(0, -4)
        }

        return __webpack_require__("./. lazy recursive ^\\.\\/.*\\.mjs$ include: (?:\\/%7C\\\\)app.mjs$ exclude: (?:\\/%7C\\\\)(dist%7Cnode_modules)")(`./${path}.mjs`)
    }

    /**
     * In case you don't want to include prototype based CSS files, use the className param instead
     * @param {Number} windowId
     * @param {Neo.core.Base} [proto]
     * @param {String} [className]
     */
    insertThemeFiles(windowId, proto, className) {
        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.themes.length > 0) {
            className = className || proto.className;

            let me     = this,
                cssMap = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].cssMap,
                parent = proto?.__proto__,
                classPath, classRoot, fileName, lClassRoot, mapClassName, ns, themeFolders;

            if (!cssMap) {
                me.themeFilesCache.push([windowId, proto])
            } else {
                // we need to modify app related class names
                if (!className.startsWith('Neo.')) {
                    className  = className.split('.');
                    classRoot  = className.shift();
                    lClassRoot = classRoot.toLowerCase();

                    className[0] === 'view' && className.shift();

                    mapClassName = `apps.${_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].apps[classRoot]?.appThemeFolder || lClassRoot}.${className.join('.')}`;
                    className    = `apps.${lClassRoot}.${className.join('.')}`;
                }

                if (parent && parent !== _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].core.Base.prototype) {
                    if (!_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(`${windowId}.${parent.className}`, false, cssMap)) {
                        me.insertThemeFiles(windowId, parent)
                    }
                }

                themeFolders = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(mapClassName || className, false, cssMap.fileInfo);

                if (themeFolders && !_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(`${windowId}.${className}`, false, cssMap)) {
                    classPath = className.split('.');
                    fileName  = classPath.pop();
                    classPath = classPath.join('.');
                    ns        = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(`${windowId}.${classPath}`, true, cssMap);

                    ns[fileName] = true;

                    me.countLoadingThemeFiles++;

                    _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].main.addon.Stylesheet.addThemeFiles({
                        className: mapClassName || className,
                        folders  : themeFolders,
                        windowId
                    }).then(() => {
                        me.countLoadingThemeFiles--
                    })
                }
            }
        }
    }

    /**
     * Every dom event will get forwarded as a worker message from main and ends up here first
     * @param {Object} data useful event properties, differs for different event types. See Neo.main.DomEvents.
     */
    onDomEvent(data) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].fire(data)
    }

    /**
     * Every URL hash-change will create a post message in main and end up here first.
     * @param {Object} data parsed key-value pairs for each hash value
     */
    onHashChange(data) {
        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(data.data)
    }

    /**
     * The starting point for apps
     * @param {Object} data
     */
    onLoadApplication(data) {
        let me       = this,
            {config} = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            app, path;

        if (data) {
            me.data = data;
            config.resourcesPath = data.resourcesPath
        }

        path = me.data.path;

        if (config.environment !== 'development') {
            path = path.startsWith('/') ? path.substring(1) : path
        }

        me.importApp(path).then(module => {
            app = module.onStart();

            // short delay to ensure Component Controllers are ready
            config.hash && me.timeout(5).then(() => {
                _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(config.hash);
                // apps which will get created later must not use outdated hash values
                delete config.hash
            })
        })
    }

    /**
     * Fire event on all apps
     * @param {Object} data
     * @param {Number} data.angle
     * @param {String} data.layout landscape|portrait
     * @param {String} data.type landscape-primary|landscape-secondary|portrait-primary|portrait-secondary
     */
    onOrientationChange(data) {
        Object.values(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].apps).forEach(app => {
            app.fire('orientationchange', data.data)
        })
    }

    /**
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        super.onRegisterNeoConfig(msg);

        let {config} = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            {data}   = msg,
            url      = 'resources/theme-map.json';

        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].windowConfigs = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].windowConfigs || {};

        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].windowConfigs[data.windowId] = data;

        if (config.environment === 'development' || config.environment === 'dist/esm') {
            url = `../../${url}`
        }

        if (config.workerBasePath?.includes('node_modules')) {
            url = `../../${url}`
        }

        if (url[0] !== '.') {
            url = `./${url}`
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {this.createThemeMap(data)});

        config.remotesApiUrl  && __webpack_require__.e(/*! import() */ "node_modules_neo_mjs_src_remotes_Api_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ../remotes/Api.mjs */ "./node_modules/neo.mjs/src/remotes/Api.mjs")).then(module => module.default.load());
        !config.useVdomWorker && __webpack_require__.e(/*! import() */ "vendors-node_modules_neo_mjs_src_vdom_Helper_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ../vdom/Helper.mjs */ "./node_modules/neo.mjs/src/vdom/Helper.mjs"))
    }

    /**
     * @param {Object} msg
     */
    onRegisterPort(msg) {
        let me   = this,
            port = msg.transfer;

        port.onmessage = me.onMessage.bind(me);

        me.channelPorts[msg.origin] = port
    }

    /**
     * @param {Object} data
     */
    onWindowPositionChange(data) {
        this.fireMainViewsEvent('windowPositionChange', data.data)
    }

    /**
     * Only needed for SharedWorkers
     * @param {String} appName
     */
    registerApp(appName) {
        // register the name as fast as possible
        this.onRegisterApp({ appName });
        this.sendMessage('main', {action: 'registerAppName', appName})
    }

    /**
     * Unregister the app from the CSS map
     * Only needed for SharedWorkers
     * @param {String} appName
     */
    removeAppFromThemeMap(appName) {
        delete _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].cssMap[appName.toLowerCase()]
    }

    /**
     * @private
     */
    resolveThemeFilesCache() {
        let me = this;

        me.themeFilesCache.forEach(item => {
            me.insertThemeFiles(...item)
        });

        me.themeFilesCache = []
    }

    /**
     * Set configs of any app realm based Neo instance from main
     * @param {Object} data
     * @param {String} data.id
     */
    setConfigs(data) {
        let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].get(data.id);

        if (instance) {
            delete data.id;
            instance.set(data);

            return true
        }

        return false
    }

    /**
     * @param {Object} data
     * @param {String} data.key
     * @param {String} [data.priority] optionally pass 'important'
     * @param {String} data.theme=Neo.config.themes[0]
     * @param {String} data.value
     * @param {Number} data.windowId
     * @returns {Promise<any>}
     */
    async setCssVariable(data) {
        let Stylesheet = await this.getAddon('Stylesheet', data.windowId),
            theme      = data.theme || _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.themes?.[0];

        if (theme.startsWith('neo-')) {
            theme = theme.substring(4)
        }

        return Stylesheet.setCssVariable({theme, ...data})
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].setupClass(App));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwd29ya2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhDQUE4QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBOEM7QUFDckUsQ0FBQzs7QUFFRCxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclNtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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XC5cXC8uKlxcLm1qcyQgaW5jbHVkZTogKCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvTmVvLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0ZpbHRlci5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL1NvcnRlci5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0FwcGxpY2F0aW9uLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0Jhc2UubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9Db21wYXJlLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvSWRHZW5lcmF0b3IubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9PYnNlcnZhYmxlLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvVXRpbC5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL19leHBvcnQubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvRG9tRXZlbnQubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9Gb2N1cy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0luc3RhbmNlLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9DbGFzc1N5c3RlbS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0Z1bmN0aW9uLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvSGFzaEhpc3RvcnkubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9Mb2dnZXIubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9WRG9tLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVk5vZGUubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL0Jhc2UubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01lc3NhZ2UubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvQXBwLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwcy9teWFwcC9hcHAubWpzXCI6IFtcblx0XHRcIi4vYXBwcy9teWFwcC9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19jb250YWluZXJfVmlld3BvcnRfbWpzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY190b29sYmFyX0Jhc2VfbWpzXCIsXG5cdFx0XCJhcHBzX215YXBwX2FwcF9tanNcIlxuXHRdLFxuXHRcIi4vZG9jcy9hcHAubWpzXCI6IFtcblx0XHRcIi4vZG9jcy9hcHAubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19jb250YWluZXJfVmlld3BvcnRfbWpzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY190b29sYmFyX0Jhc2VfbWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19saXN0X0Jhc2VfbWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19jb250YWluZXJfUGFuZWxfbWpzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19jb250cm9sbGVyX0NvbXAtNWQ0YmYxXCIsXG5cdFx0XCJkb2NzX2FwcF9tanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vLiBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5tanMkIGluY2x1ZGU6ICg/OlxcXFwvJTdDXFxcXFxcXFwpYXBwLm1qcyQgZXhjbHVkZTogKD86XFxcXC8lN0NcXFxcXFxcXCkoZGlzdCU3Q25vZGVfbW9kdWxlcylcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJjb25zdCBOZW8gPSBnbG9iYWxUaGlzLk5lbyB8fCB7fTtcblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbi8qKlxuICogQ29uZmlnIG9iamVjdCBmb3IgdGhlIG5lby5tanMgZnJhbWV3b3JrIHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCB0byBhbGwgd29ya2Vyc1xuICogWW91IGNhbiBjaGFuZ2UgdGhlIGNvbmZpZ3MsIGUuZy4gaW5zaWRlIHRoZSBpbmRleC5odG1sIG9mIHlvdXIgYXBwXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICogQG5hbWUgY29uZmlnXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuY29uc3QgRGVmYXVsdENvbmZpZyA9IHtcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGFwcGx5ICdwb3NpdGlvbjogZml4ZWQnIHRvIHRoZSBodG1sIHRhZyBpdHNlbGZcbiAgICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy82NDI5XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBseUZpeGVkUG9zaXRpb25Ub0h0bWxUYWdcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgYXBwbHlGaXhlZFBvc2l0aW9uVG9IdG1sVGFnOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8geW91ciBhcHAubWpzIGZpbGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGFwcHMgdGhlcmUgaWYgbmVlZGVkLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgYXBwUGF0aDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSBuZW8ubWpzIGRpcmVjdG9yeVxuICAgICAqIEBkZWZhdWx0ICcuLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYmFzZVBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBiYXNlUGF0aDogJy4vJyxcbiAgICAvKipcbiAgICAgKiBQYXNzIGEgdG9rZW4gaW4gY2FzZSB5b3UgYXJlIHVzaW5nIHRoZSBDZXNpdW1KUyBtYWluIHRocmVhZCBhZGRvblxuICAgICAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vYmxvYi9kZXYvc3JjL21haW4vYWRkb24vQ2VzaXVtSlMubWpzXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmNlc2l1bUpzVG9rZW5cbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGNvbXBvbmVudCBsb2dnaW5nIHVzaW5nIEN0cmwtUmlnaHQtQ2xpY2tcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVuYWJsZUNvbXBvbmVudExvZ2dlclxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBlbmFibGVDb21wb25lbnRMb2dnZXI6IHRydWUsXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgY29uZmlnIHRvIHRydWUgdG8gZW5hYmxlIHV0aWwuTG9nZ2VyIChOZW8ubG9nKCkpIGJhc2VkIGxvZ3MgaW4gcHJvZHVjdGlvblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVuYWJsZUxvZ3NJblByb2R1Y3Rpb25cbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgZW5hYmxlTG9nc0luUHJvZHVjdGlvbjogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuIFZhbGlkIHZhbHVlczogJ2RldmVsb3BtZW50JywgJ2Rpc3QvZGV2ZWxvcG1lbnQnLCAnZGlzdC9wcm9kdWN0aW9uJ1xuICAgICAqIFRoaXMgY29uZmlnIHdpbGwgZ2V0IGF1dG8tZ2VuZXJhdGVkXG4gICAgICogQGRlZmF1bHQgJ2Rpc3QvcHJvZHVjdGlvbidcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZW52aXJvbm1lbnRcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBlbnZpcm9ubWVudDogJ2Rpc3QvcHJvZHVjdGlvbicsXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB5b3UgYXJlIHVzaW5nIHRoZSBHb29nbGVNYXBzIG1haW4gdGhyZWFkIGFkZG9uLCB5b3UgY2FuIHBhc3MgdGhlIEFQSSBrZXkgaGVyZS5cbiAgICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZ29vZ2xlTWFwc0FwaUtleVxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB5b3UgYXJlIHVzaW5nIHRoZSBHb29nbGVBbmFseXRpY3MgbWFpbiB0aHJlYWQgYWRkb24gb3IgdXNlR29vZ2xlQW5hbHl0aWNzOiB0cnVlLFxuICAgICAqIHlvdSBjYW4gY2hhbmdlIHRoZSBndGFnIGlkIGhlcmUuIFJlcXVpcmVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIChnaCBwYWdlcylcbiAgICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZ3RhZ0lkXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIG9uIGh0dHBzOi8vbmVvbWpzLmdpdGh1Yi5pby9wYWdlcy9cbiAgICAgKiA9PiB0byB1c2UgbG9jYWwgaW1hZ2VzIHBhdGhzIGluc3RlYWQgb2YgcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzR2l0SHViUGFnZXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNHaXRIdWJQYWdlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyB0aGUgTmVvIG1haW4gdGhyZWFkIGluc2lkZSBhbiBpZnJhbWUgKFNpZXN0YSBCcm93c2VyIEhhcm5lc3MpXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNJbnNpZGVTaWVzdGFcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNJbnNpZGVTaWVzdGE6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIGRlbGF5IGluIG1zIGZvciB0aGUgd29ya2VyLk1hbmFnZXI6bG9hZEFwcGxpY2F0aW9uKCkgY2FsbFxuICAgICAqIEBkZWZhdWx0IDIwXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvYWRBcHBsaWNhdGlvbkRlbGF5XG4gICAgICogQHR5cGUgTnVtYmVyXG4gICAgICovXG4gICAgbG9hZEFwcGxpY2F0aW9uRGVsYXk6IDIwLFxuICAgIC8qKlxuICAgICAqIFVzZWQgYnkgSW50bC5EYXRlVGltZUZvcm1hdCwgZm9yIGRldGFpbHMgdGFrZSBhIGxvb2sgYXQ6XG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9jYWxlXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGxvZyB0aGUgZGVsdGEgdXBkYXRlcyBpbnNpZGUgdGhlIG1haW4gdGhyZWFkKHMpIGFzIHdlbGwgYXMgdGhlIHJlcXVlc3RBbmltYXRpb24gZnJhbWVzXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9nRGVsdGFVcGRhdGVzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGxvZ0RlbHRhVXBkYXRlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGxvZyBjb25zb2xlIHdhcm5pbmdzLCBpbiBjYXNlIGEgY29tcG9uZW50IHRyaWVzIHRvIHVwZGF0ZSgpIHdoaWxlIGEgcGFyZW50IHVwZGF0ZSBpcyBydW5uaW5nLlxuICAgICAqIEEgcGFyZW50IHVwZGF0ZSByZXN1bHRzIGluIGEgc2hvcnQgZGVsYXksIHNvIHlvdSBtaWdodCB3YW50IHRvIHJlc29sdmUgdGhlc2UgY29sbGlzaW9ucy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2dWZG9tVXBkYXRlQ29sbGlzaW9uc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBsb2dWZG9tVXBkYXRlQ29sbGlzaW9uczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIGFkZG9ucyBmb3IgdGhlIG1haW4gdGhyZWFkXG4gICAgICogLi9zcmMvbWFpbi9hZGRvbi8gY29udGFpbnMgYWxsIGZyYW1ld29yayByZWxhdGVkIG9wdGlvbnMuXG4gICAgICogWW91IGNhbiBhbHNvIGNyZWF0ZSB5b3VyIG93biBhZGRvbnMgd2l0aGluIHlvdXIgd29ya3NwYWNlIHNjb3BlLiBNYWtlIHN1cmUgdG8gcHV0IHRoZW0gaW5zaWRlICdzcmMvbWFpbi9hZGRvbi8nXG4gICAgICogYW5kIHByZWZpeCB0aGVtIHdpdGggJ1dTLycgaW5zaWRlIHlvdXIgbmVvLWNvbmZpZy5qc29uIGZpbGUuXG4gICAgICogRXhhbXBsZTogWydEcmFnRHJvcCcsICdTdHlsZXNoZWV0JywgJ1dTL015QWRkb24nXVxuICAgICAqIEBkZWZhdWx0IFsnRHJhZ0Ryb3AnLCAnTmF2aWdhdG9yJywgJ1N0eWxlc2hlZXQnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5tYWluVGhyZWFkQWRkb25zXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICBtYWluVGhyZWFkQWRkb25zOiBbJ0RyYWdEcm9wJywgJ05hdmlnYXRvcicsICdTdHlsZXNoZWV0J10sXG4gICAgLyoqXG4gICAgICogUGFzcyB0aGUgVVJMIG9mIGEgSlNPTi1maWxlLCB3aGljaCBjb250YWlucyB0aGUgc2VydmljZXMgYW5kIG1ldGhvZHMgZnJvbSB5b3VyIGJhY2tlbmQsXG4gICAgICogd2hpY2ggeW91IHdhbnQgdG8gZXhwb3NlIHRvIHRoZSBjbGllbnQuXG4gICAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9wcm9qZWN0cy8zMlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVtb3Rlc0FwaVVybFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgcmVtb3Rlc0FwaVVybDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIHZpc3VhbGx5IHNob3cgdGhlIGFtb3VudCBvZiBkZWx0YSB1cGRhdGVzIHBlciBzZWNvbmQgdXNpbmcgdGhpcyBjb25maWcuXG4gICAgICogSXQgZXhwZWN0cyBhIGRvbSBub2RlIHdpdGggdGhlIGlkIFwibmVvLWRlbHRhLXVwZGF0ZXNcIiBhcyB0aGUgcmVuZGVyaW5nIHRhcmdldC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZW5kZXJDb3VudERlbHRhc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICByZW5kZXJDb3VudERlbHRhczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIHRoZW1lcyB5b3Ugd2FudCB0byB1c2UgaGVyZS4gVGhlIGZpcnN0IHRoZW1lIHdpbGwgZ2V0IGFwcGxpZWQuXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCduZW8tdGhlbWUtZGFyaycsJ25lby10aGVtZS1uZW8tbGlnaHQnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy50aGVtZXNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIHRoZW1lczogWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnLCAnbmVvLXRoZW1lLW5lby1saWdodCddLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEV4cGVyaW1lbnRhbCBmbGFnIGlmIGFuIG9mZnNjcmVlbiBjYW52YXMgd29ya2VyIHNob3VsZCBnZXQgY3JlYXRlZC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDYW52YXNXb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlQ2FudmFzV29ya2VyOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIHZkb20gaWRzIHNob3VsZCBnZXQgbWFwcGVkIGludG8gRE9NIGVsZW1lbnQgaWRzLlxuICAgICAqIGZhbHNlIHdpbGwgY29udmVydCB0aGVtIGludG8gYSBcImRhdGEtbmVvLWlkXCIgYXR0cmlidXRlLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRG9tSWRzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZURvbUlkczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBUcnVlIHdpbGwgYXV0b21hdGljYWxseSBpbmNsdWRlIHRoZSBzdHlsZXNoZWV0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VGb250QXdlc29tZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VGb250QXdlc29tZTogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbnRlbmRlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyB3aGVyZSB3ZSBuZWVkIGFuIGVhc3kgd2F5IHRvIGFkZCBHQSB0byBldmVyeSBnZW5lcmF0ZWQgYXBwXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlR29vZ2xlQW5hbHl0aWNzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUdvb2dsZUFuYWx5dGljczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGFkZCB0aGUgU2VydmljZVdvcmtlciBtYWluIHRocmVhZCBhZGRvbiB0byBzdXBwb3J0IGNhY2hpbmcgb2YgYXNzZXRzIChQV0EpXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZV9Xb3JrZXJfQVBJXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGFsc28gdXNlIGEgc3RyaW5nIHRvIHNwZWNpZnkgdGhlIHRhcmdldCBlbnZpcm9ubWVudCA9PiAnZGlzdC9wcm9kdWN0aW9uJy5cbiAgICAgKiBVc2luZyAnZGlzdC9wcm9kdWN0aW9uJyB3aWxsIGFsc28gdXNlIHRoZSBzZXJ2aWNlIHdvcmtlciBmb3IgJ2Rpc3QvZXNtJ1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVNlcnZpY2VXb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFufFN0cmluZ1xuICAgICAqL1xuICAgIHVzZVNlcnZpY2VXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgQXBwLCBEYXRhICYgVkRvbSBhcyBTaGFyZWRXb3JrZXJzLlxuICAgICAqIFNldCB0aGlzIG9uZSB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gY29ubmVjdCBtdWx0aXBsZSBtYWluIHRocmVhZHMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlU2hhcmVkV29ya2Vyc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VTaGFyZWRXb3JrZXJzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBUcnVlIHdpbGwgZ2VuZXJhdGUgYSBuZXcgdGFzayB3b3JrZXIsIHdoaWNoIGNhbiBnZXQgZmlsbGVkIHdpdGggb3duIGV4cGVuc2l2ZSByZW1vdGUgbWV0aG9kc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVRhc2tXb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVGFza1dvcmtlcjogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmFsc2Ugd2lsbCBjcmVhdGUgdGhlIHZkb20uSGVscGVyIHdpdGhpbiB0aGUgQXBwIHdvcmtlciAoZXhwZXJpbWVudGFsISlcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVZkb21Xb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVmRvbVdvcmtlcjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBidWlsZFNjcmlwdHMvaW5qZWN0UGFja2FnZVZlcnNpb24ubWpzIHdpbGwgdXBkYXRlIHRoaXMgdmFsdWVcbiAgICAgKiBAZGVmYXVsdCAnOS4xMC4yJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy52ZXJzaW9uXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgdmVyc2lvbjogJzkuMTAuMidcbn07XG5cbk9iamVjdC5hc3NpZ24oRGVmYXVsdENvbmZpZywge1xuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIHRvcCBsZXZlbCBuZW8ubWpzIHJlc291cmNlcyBmb2xkZXJcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3Jlc291cmNlcy8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlc291cmNlc1BhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICByZXNvdXJjZXNQYXRoOiBgJHtOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGh9cmVzb3VyY2VzL2AsXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYmFzZSBVUkwgZm9yIHdlYiB3b3JrZXIgZW50cnkgcG9pbnRzIChBcHAsIERhdGEsIFZkb20pXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdzcmMvd29ya2VyLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcud29ya2VyQmFzZVBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICB3b3JrZXJCYXNlUGF0aDogYCR7TmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRofXNyYy93b3JrZXIvYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0Q29uZmlnO1xuIiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XG5cbmNvbnN0XG4gICAgY2FtZWxSZWdleCAgID0gLy0uL2csXG4gICAgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpLFxuICAgIHR5cGVEZXRlY3RvciA9IHtcbiAgICAgICAgZnVuY3Rpb246IGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucHJvdG90eXBlPy5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdOZW9DbGFzcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2JqZWN0OiBpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yLmlzQ2xhc3MgJiYgaXRlbSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05lb0luc3RhbmNlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuLyoqXG4gKiBUaGUgYmFzZSBtb2R1bGUgdG8gZW5oYW5jZSBjbGFzc2VzLCBjcmVhdGUgaW5zdGFuY2VzIGFuZCB0aGUgTmVvIG5hbWVzcGFjZVxuICogQG1vZHVsZSBOZW9cbiAqIEBzaW5nbGV0b25cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuYmluZE1ldGhvZHMgICAgICAgYXMgYmluZE1ldGhvZHNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY2FwaXRhbGl6ZSAgICAgICAgYXMgY2FwaXRhbGl6ZVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdCBhcyBjcmVhdGVTdHlsZU9iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZXMgICAgICBhcyBjcmVhdGVTdHlsZXNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuZGVjYW1lbCAgICAgICAgICAgYXMgZGVjYW1lbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0FycmF5ICAgICAgICAgICBhcyBpc0FycmF5XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQm9vbGVhbiAgICAgICAgIGFzIGlzQm9vbGVhblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0RlZmluZWQgICAgICAgICBhcyBpc0RlZmluZWRcbiAqIEBib3Jyb3dzIE5lby5jb3JlLkNvbXBhcmUuaXNFcXVhbCAgICAgICAgYXMgaXNFcXVhbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc051bWJlciAgICAgICAgICBhcyBpc051bWJlclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc09iamVjdCAgICAgICAgICBhcyBpc09iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC50b0FycmF5ICAgICAgICAgICBhcyB0b0FycmF5XG4gKiBAdHV0b3JpYWwgMDFfQ29uY2VwdFxuICovXG5sZXQgTmVvID0gZ2xvYmFsVGhpcy5OZW8gfHwge307XG5cbk5lbyA9IGdsb2JhbFRoaXMuTmVvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgLyoqXG4gICAgICogQSBtYXAgY29udGFpbmluZyBudHlwZXMgYXMga2V5IGFuZCBOZW8gY2xhc3NlcyBvciBzaW5nbGV0b25zIGFzIHZhbHVlc1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBudHlwZU1hcDoge30sXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBOZW8uY3JlYXRlLiBGYWxzZSBmb3IgdGhlIG1haW4gdGhyZWFkLCB0cnVlIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGluc2lkZVdvcmtlcjogdHlwZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnLFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBtZXRob2RzIGZyb20gb25lIG5hbWVzcGFjZSB0byBhbm90aGVyIG9uZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gYWxpYXNlc1xuICAgICAqIE5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgICogICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICAgKiAgICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJ1xuICAgICAqIH0sIHRydWUpO1xuICAgICAqXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0ICAgIFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gICAgIG5hbWVzcGFjZSBUaGUgY2xhc3MgY29udGFpbmluZyB0aGUgbWV0aG9kc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICAgIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gICAgICAgICAgIFtiaW5kXSAgICBzZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gYmluZCBtZXRob2RzIHRvIHRoZSBcImZyb21cIiBuYW1lc3BhY2VcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKi9cbiAgICBhcHBseUZyb21Ocyh0YXJnZXQsIG5hbWVzcGFjZSwgY29uZmlnLCBiaW5kKSB7XG4gICAgICAgIGxldCBmbk5hbWU7XG5cbiAgICAgICAgaWYgKHRhcmdldCAmJiBOZW8udHlwZU9mKGNvbmZpZykgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGZuTmFtZSA9IG5hbWVzcGFjZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBiaW5kID8gZm5OYW1lLmJpbmQobmFtZXNwYWNlKSA6IGZuTmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2UuXG4gICAgICogQ2FuIGdldCBjYWxsZWQgZm9yIGNsYXNzZXMgYW5kIHNpbmdsZXRvbiBpbnN0YW5jZXNcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzXG4gICAgICovXG4gICAgYXBwbHlUb0dsb2JhbE5zKGNscykge1xuICAgICAgICBsZXQgcHJvdG8gICAgID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGUgOiBjbHMsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIG5zQXJyYXkgICA9IGNsYXNzTmFtZS5zcGxpdCgnLicpLFxuICAgICAgICAgICAga2V5ICAgICAgID0gbnNBcnJheS5wb3AoKSxcbiAgICAgICAgICAgIG5zICAgICAgICA9IE5lby5ucyhuc0FycmF5LCB0cnVlKTtcblxuICAgICAgICBuc1trZXldID0gY2xzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbGwga2V5cyBvZiBkZWZhdWx0cyBpbnRvIHRhcmdldCwgaW4gY2FzZSB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgICBUaGUgdGFyZ2V0IG9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleXMgeW91IHdhbnQgdG8gY29weVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFzc2lnbkRlZmF1bHRzKHRhcmdldCwgZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKHRhcmdldCAmJiBOZW8udHlwZU9mKGRlZmF1bHRzKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5oYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ25zIGEgbmV3IHZhbHVlIHRvIGEgZ2l2ZW4gbmVzdGVkIG9iamVjdHMgcGF0aC5cbiAgICAgKiBJdCB3aWxsIGNyZWF0ZSB0aGUgcGF0aCBzdHJ1Y3R1cmUgb3IgcGFydHMgb2YgaXQsIGluIGNhc2UgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uYXNzaWduVG9OcygnYW5ub3RhdGlvbnMuc2VsZWN0ZWQnLCBmYWxzZSwgcmVjb3JkKVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfFN0cmluZ30gcGF0aCAgICAgICAgICAgICBUaGUgcGF0aCBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0geyp9ICAgICAgICAgICAgICAgdmFsdWUgICAgICAgICAgICBUaGUgbmV3IHZhbHVlIHRvIGFzc2lnbiB0byB0aGUgbGVhZiBub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIHNjb3BlPWdsb2JhbFRoaXMgU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgICAgZm9yY2U9dHJ1ZSAgICAgICBmYWxzZSB3aWxsIG9ubHkgYXNzaWduIGRlZmF1bHQgdmFsdWVzIChhc3NpZ24gaWYgb2xkIHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICovXG4gICAgYXNzaWduVG9OcyhwYXRoLCB2YWx1ZSwgc2NvcGU9Z2xvYmFsVGhpcywgZm9yY2U9dHJ1ZSkge1xuICAgICAgICBwYXRoID0gQXJyYXkuaXNBcnJheShwYXRoKSA/IHBhdGggOiBwYXRoLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgbGV0IGtleTtcblxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBrZXkgICA9IHBhdGgucG9wKCk7XG4gICAgICAgICAgICBzY29wZSA9IE5lby5ucyhwYXRoLCB0cnVlLCBzY29wZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IHBhdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JjZSB8fCBzY29wZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjb3BlW2tleV0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGtlYmFiLWNhc2Ugc3RyaW5ncyBpbnRvIGNhbWVsLWNhc2VcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdGFyZ2V0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgY2FtZWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoY2FtZWxSZWdleCwgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyB1cHBlcmNhc2VcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gUmV0dXJucyBmYWxzZSBmb3Igbm9uIHN0cmluZyBpbnB1dHNcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdHxBcnJheXwqfSBvYmpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRlZXA9ZmFsc2UgICAgICAgICAgICAgICBTZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gY2xvbmUgbmVzdGVkIG9iamVjdHMgYXMgd2VsbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XG4gICAgICovXG4gICAgY2xvbmUob2JqLCBkZWVwPWZhbHNlLCBpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG91dDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgQXJyYXkgICAgICA6ICgpID0+ICFkZWVwID8gWy4uLm9ial0gOiBbLi4ub2JqLm1hcCh2YWwgPT4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSldLFxuICAgICAgICAgICAgRGF0ZSAgICAgICA6ICgpID0+IG5ldyBEYXRlKG9iai52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgTWFwICAgICAgICA6ICgpID0+IG5ldyBNYXAob2JqKSwgLy8gc2hhbGxvdyBjb3B5XG4gICAgICAgICAgICBOZW9JbnN0YW5jZTogKCkgPT4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaiksXG4gICAgICAgICAgICBTZXQgICAgICAgIDogKCkgPT4gbmV3IFNldChvYmopLFxuXG4gICAgICAgICAgICBPYmplY3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvdXQgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gIWRlZXAgPyB2YWx1ZSA6IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dFxuICAgICAgICAgICAgfVxuICAgICAgICB9W05lby50eXBlT2Yob2JqKV0/LigpIHx8IG9ialxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbENvbmZpZyB3aXRob3V0IHRoZSBpZFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSB0aGUgY2xvbmVkIGluc3RhbmNlXG4gICAgICovXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcblxuICAgICAgICBkZWxldGUgY29uZmlnLl9pZDtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShpbnN0YW5jZS5jbGFzc05hbWUsIGNvbmZpZylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlIE5lby5jcmVhdGUoKSBpbnN0ZWFkIG9mIFwibmV3XCIgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhbGwgTmVvIGNsYXNzZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0Jhc2UubWpzJztcbiAgICAgKlxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgY2xhc3NOYW1lOiAnTmVvLmJ1dHRvbi5CYXNlJyxcbiAgICAgKiAgICAgaWNvbkNscyAgOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8TmVvLmNvcmUuQmFzZX0gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V8bnVsbH0gVGhlIG5ldyBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZykge1xuICAgICAgICBsZXQgdHlwZSA9IE5lby50eXBlT2YoY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdOZW9DbGFzcycpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWcuY2xhc3NOYW1lICYmICFjb25maWcubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVzaW5nIGNvbnNvbGUuZXJyb3IgaW5zdGVhZCBvZiB0aHJvdyB0byBzaG93IHRoZSBjb25maWcgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsYXNzIGNyZWF0ZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIGNsYXNzTmFtZSBvciBtb2R1bGUgcHJvcGVydHknLCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbmZpZy5jbGFzc05hbWUgfHwgY29uZmlnLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyAnICsgY2xhc3NOYW1lICsgJyBkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZSA9IG5ldyBjbHMoKTtcblxuICAgICAgICBpbnN0YW5jZS5jb25zdHJ1Y3QoY29uZmlnKTtcbiAgICAgICAgaW5zdGFuY2Uub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICBpbnN0YW5jZS5vbkFmdGVyQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGVtcHR5Rm4oKSB7fSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gICAgICAgIGtleSAgIFRoZSBwcm9wZXJ0eSBrZXkgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3I7XG5cbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRlc2NyaXB0b3Iuc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX19cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZWVwLW1lcmdlcyBhIHNvdXJjZSBvYmplY3QgaW50byBhIHRhcmdldCBvYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmIChkZWZhdWx0cykge1xuICAgICAgICAgICAgcmV0dXJuIE5lby5tZXJnZShOZW8ubWVyZ2UodGFyZ2V0LCBkZWZhdWx0cyksIHNvdXJjZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICAgICAgaWYgKE5lby50eXBlT2YodmFsdWUpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gTmVvLm1lcmdlKHRhcmdldFtrZXldIHx8IHt9LCB2YWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgY2xhc3NOYW1lIHN0cmluZyBpbnRvIGEgZ2l2ZW4gb3IgZ2xvYmFsIG5hbWVzcGFjZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm5zKCdOZW8uYnV0dG9uLkJhc2UnLCB0cnVlKTtcbiAgICAgKiAvLyA9PlxuICAgICAqIC8vIGdsb2JhbFRoaXMuTmVvICAgICAgICAgICAgID0gZ2xvYmFsVGhpcy5OZW8gICAgICAgICAgICAgfHwge307XG4gICAgICogLy8gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uICAgICAgPSBnbG9iYWxUaGlzLk5lby5idXR0b24gICAgICB8fCB7fTtcbiAgICAgKiAvLyBnbG9iYWxUaGlzLk5lby5idXR0b24uQmFzZSA9IGdsb2JhbFRoaXMuTmVvLmJ1dHRvbi5CYXNlIHx8IHt9O1xuICAgICAqIC8vIHJldHVybiBnbG9iYWxUaGlzLk5lby5idXR0b24uQmFzZTtcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxTdHJpbmd9IG5hbWVzICAgICAgICBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgICAgY3JlYXRlPWZhbHNlIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uLWV4aXN0aW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIFtzY29wZV0gICAgICBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgZ2xvYmFsVGhpc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlZmVyZW5jZSB0byB0aGUgdG9wbGV2ZWwgbmFtZXNwYWNlXG4gICAgICovXG4gICAgbnMobmFtZXMsIGNyZWF0ZT1mYWxzZSwgc2NvcGUpIHtcbiAgICAgICAgbmFtZXMgPSBBcnJheS5pc0FycmF5KG5hbWVzKSA/IG5hbWVzIDogbmFtZXMuc3BsaXQoJy4nKTtcblxuICAgICAgICByZXR1cm4gbmFtZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3JlYXRlICYmICFwcmV2W2N1cnJlbnRdKSB7XG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUgfHwgZ2xvYmFsVGhpcylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kZWQgdmVyc2lvbiBvZiBOZW8ubnMoKSB3aGljaCBzdXBwb3J0cyBtYXBwaW5nIGludG8gYXJyYXlzLlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IG5hbWVzICAgICAgICBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgY3JlYXRlPWZhbHNlIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uLWV4aXN0aW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgIFtzY29wZV0gICAgICBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgZ2xvYmFsVGhpc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlZmVyZW5jZSB0byB0aGUgdG9wbGV2ZWwgbmFtZXNwYWNlXG4gICAgICovXG4gICAgbnNXaXRoQXJyYXlzKG5hbWVzLCBjcmVhdGU9ZmFsc2UsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFycmF5TnModHJ1ZSwgY3VycmVudCwgcHJldilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcmV2W2N1cnJlbnRdID0ge31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBcnJheU5zKGZhbHNlLCBjdXJyZW50LCBwcmV2KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IGdsb2JhbFRoaXMpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIE5lbyBjbGFzc2VzIHVzaW5nIHRoZWlyIG50eXBlIGluc3RlYWQgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5udHlwZSgnYnV0dG9uJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoe1xuICAgICAqICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbnR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgIFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XG4gICAgICogQHNlZSB7QGxpbmsgbW9kdWxlOk5lby5jcmVhdGUgY3JlYXRlfVxuICAgICAqL1xuICAgIG50eXBlKG50eXBlLCBjb25maWcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xuXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5udHlwZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgZGVmaW5lZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgbnR5cGUgcHJvcGVydHkuICcgKyBjb25maWcubnR5cGUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG50eXBlID0gY29uZmlnLm50eXBlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gTmVvLm50eXBlTWFwW250eXBlXTtcblxuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudHlwZSAnICsgbnR5cGUgKyAnIGRvZXMgbm90IGV4aXN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbGx5IHVzZWQgYXQgdGhlIGVuZCBvZiBlYWNoIGNsYXNzIC8gbW9kdWxlIGRlZmluaXRpb25cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEB0ZW1wbGF0ZSBUXG4gICAgICogQHBhcmFtIHtUfSBjbHNcbiAgICAgKiBAcmV0dXJucyB7VH1cbiAgICAgKi9cbiAgICBzZXR1cENsYXNzKGNscykge1xuICAgICAgICBsZXQgYmFzZUNmZyAgICA9IG51bGwsXG4gICAgICAgICAgICBudHlwZUNoYWluID0gW10sXG4gICAgICAgICAgICB7bnR5cGVNYXB9ID0gTmVvLFxuICAgICAgICAgICAgcHJvdG8gICAgICA9IGNscy5wcm90b3R5cGUgfHwgY2xzLFxuICAgICAgICAgICAgbnMgICAgICAgICA9IE5lby5ucyhwcm90by5jb25zdHJ1Y3Rvci5jb25maWcuY2xhc3NOYW1lLCBmYWxzZSksXG4gICAgICAgICAgICBwcm90b3MgICAgID0gW10sXG4gICAgICAgICAgICBjZmcsIGNvbmZpZywgY3RvciwgbnR5cGU7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogSWYgdGhlIG5hbWVzcGFjZSBhbHJlYWR5IGV4aXN0cywgZGlyZWN0bHkgcmV0dXJuIGl0LlxuICAgICAgICAgKiBUaGlzIGNhbiBoYXBwZW4gd2hlbiB1c2luZyBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgbmVvLm1qc1xuICAgICAgICAgKiA9PiBFc3BlY2lhbGx5IHNpbmdsZXRvbnMgKElkR2VuZXJhdG9yKSBtdXN0IHN0YXkgdW5pcXVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGNhbiBhbHNvIGhhcHBlbiB3aGVuIHVzaW5nIGRpZmZlcmVudCBlbnZpcm9ubWVudHMgb2YgbmVvLm1qcyBpbiBwYXJhbGxlbC5cbiAgICAgICAgICogRXhhbXBsZTogY29kZS5MaXZlUHJldmlldyBydW5uaW5nIGluc2lkZSBhIGRpc3QvcHJvZHVjdGlvbiBhcHAuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAobnMpIHtcbiAgICAgICAgICAgIHJldHVybiBuc1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICAgICAgY3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093bihjdG9yLCAnY2xhc3NDb25maWdBcHBsaWVkJykpIHtcbiAgICAgICAgICAgICAgICBiYXNlQ2ZnICAgID0gTmVvLmNsb25lKGN0b3IuY29uZmlnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBudHlwZUNoYWluID0gWy4uLmN0b3IubnR5cGVDaGFpbl07XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdG9zLnVuc2hpZnQocHJvdG8pO1xuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX19cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZyA9IGJhc2VDZmcgfHwge307XG5cbiAgICAgICAgcHJvdG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgbWl4aW5zO1xuXG4gICAgICAgICAgICBjdG9yID0gZWxlbWVudC5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgY2ZnID0gY3Rvci5jb25maWcgfHwge307XG5cbiAgICAgICAgICAgIGlmIChOZW8ub3ZlcndyaXRlcykge1xuICAgICAgICAgICAgICAgIGN0b3IuYXBwbHlPdmVyd3JpdGVzPy4oY2ZnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjZmcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNmZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICBjZmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBhdXRvR2VuZXJhdGVHZXRTZXQoZWxlbWVudCwga2V5KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgICAgICAgICAgLy8gdGhvc2Ugd2lsbCBnZXQgYXBwbGllZCBvbiBjcmVhdGUgKE5lby5jb3JlLkJhc2UgLT4gaW5pdENvbmZpZylcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghTmVvLmhhc1Byb3BlcnR5U2V0dGVyKGVsZW1lbnQsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGUgIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093bihjZmcsICdudHlwZScpKSB7XG4gICAgICAgICAgICAgICAgbnR5cGUgPSBjZmcubnR5cGU7XG5cbiAgICAgICAgICAgICAgICBudHlwZUNoYWluLnVuc2hpZnQobnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gUnVubmluZyB0aGUgZG9jcyBhcHAgaW5zaWRlIGEgd29ya3NwYWNlIGNhbiBwdWxsIGluIHRoZSBzYW1lIGNsYXNzZXMgZnJvbSBkaWZmZXJlbnQgcm9vdHMsXG4gICAgICAgICAgICAgICAgLy8gc28gd2Ugd2FudCB0byBjaGVjayBmb3IgZGlmZmVyZW50IGNsYXNzIG5hbWVzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093bihudHlwZU1hcCwgbnR5cGUpICYmIGNmZy5jbGFzc05hbWUgIT09IG50eXBlTWFwW250eXBlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYG50eXBlIGNvbmZsaWN0IGZvciAnJHtudHlwZX0nIGluc2lkZSB0aGUgY2xhc3NlczpcXG4ke250eXBlTWFwW250eXBlXX1cXG4ke2NmZy5jbGFzc05hbWV9YClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBudHlwZU1hcFtudHlwZV0gPSBjZmcuY2xhc3NOYW1lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IE9iamVjdC5oYXNPd24oY29uZmlnLCAnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKGN0b3Iub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY2ZnLCAnbWl4aW5zJykgJiYgQXJyYXkuaXNBcnJheShjZmcubWl4aW5zKSAmJiBjZmcubWl4aW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCguLi5jZmcubWl4aW5zKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWl4aW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhcHBseU1peGlucyhjdG9yLCBtaXhpbnMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKE5lby5ucygnTmVvLmNvcmUuT2JzZXJ2YWJsZScsIGZhbHNlLCBjdG9yLnByb3RvdHlwZS5taXhpbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0b3Iub2JzZXJ2YWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBjZmcubWl4aW5zO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5taXhpbnM7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBjZmcpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHtcbiAgICAgICAgICAgICAgICBjbGFzc0NvbmZpZ0FwcGxpZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlnICAgICAgICAgICAgOiBOZW8uY2xvbmUoY29uZmlnLCB0cnVlKSxcbiAgICAgICAgICAgICAgICBpc0NsYXNzICAgICAgICAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgbnR5cGVDaGFpblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICFjb25maWcuc2luZ2xldG9uICYmIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvdG8gPSBjbHMucHJvdG90eXBlIHx8IGNscztcblxuICAgICAgICBudHlwZUNoYWluLmZvckVhY2gobnR5cGUgPT4ge1xuICAgICAgICAgICAgcHJvdG9bYGlzJHtOZW8uY2FwaXRhbGl6ZShOZW8uY2FtZWwobnR5cGUpKX1gXSA9IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3RvLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgY2xzID0gTmVvLmNyZWF0ZShjbHMpO1xuICAgICAgICAgICAgTmVvLmFwcGx5VG9HbG9iYWxOcyhjbHMpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0eXBlT2YoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZURldGVjdG9yW3R5cGVvZiBpdGVtXT8uKGl0ZW0pIHx8IGl0ZW0uY29uc3RydWN0b3IubmFtZVxuICAgIH1cbn0sIE5lbyk7XG5cbi8qKlxuICogTGlzdCBvZiBjbGFzcyBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBub3Qgc3VwcG9zZWQgdG8gZ2V0IG1peGVkIGludG8gb3RoZXIgY2xhc3Nlc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWdub3JlTWl4aW4gPSBbXG4gICAgJ19uYW1lJyxcbiAgICAnY2xhc3NDb25maWdBcHBsaWVkJyxcbiAgICAnY2xhc3NOYW1lJyxcbiAgICAnY29uc3RydWN0b3InLFxuICAgICdpc0NsYXNzJyxcbiAgICAnbWl4aW4nLFxuICAgICdudHlwZScsXG4gICAgJ29ic2VydmFibGUnXG5dLFxuXG4gICAgY2hhcnNSZWdleCAgICAgICAgID0gL1xcZCsvZyxcbiAgICBleHRyYWN0QXJyYXlzUmVnZXggPSAvXihcXHcrKVxccyooKD86XFxbXFxzKlxcZCtcXHMqXFxdXFxzKikqKSQvO1xuXG4vKipcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzXG4gKiBAcGFyYW0ge0FycmF5fSAgICAgICAgIG1peGluc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYXBwbHlNaXhpbnMoY2xzLCBtaXhpbnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICB9XG5cbiAgICBsZXQgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgbGVuICAgICAgICAgID0gbWl4aW5zLmxlbmd0aCxcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXG4gICAgICAgIG1peGluLCBtaXhpbkNscywgbWl4aW5Qcm90bztcblxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XG4gICAgICAgIG1peGluID0gbWl4aW5zW2ldO1xuXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW4ucHJvdG90eXBlO1xuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpblByb3RvLmNsYXNzTmFtZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKG1peGluKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBtaXhpbiBhbiB1bmRlZmluZWQgY2xhc3M6ICcgKyBtaXhpbiArICcsICcgKyBjbHMucHJvdG90eXBlLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpbik7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW5DbHMucHJvdG90eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UobWl4UmVkdWNlKG1peGluQ2xzKSwgbWl4aW5DbGFzc2VzKTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpblByb3RvKS5mb3JFYWNoKG1peGluUHJvcGVydHkoY2xzLnByb3RvdHlwZSwgbWl4aW5Qcm90bykpXG4gICAgfVxuXG4gICAgY2xzLnByb3RvdHlwZS5taXhpbnMgPSBtaXhpbkNsYXNzZXMgLy8gdG9kbzogd2Ugc2hvdWxkIGRvIGEgZGVlcCBtZXJnZVxufVxuXG4vKipcbiAqIENyZWF0ZXMgZ2V0IC8gc2V0IG1ldGhvZHMgZm9yIGNsYXNzIGNvbmZpZ3MgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZVxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtTdHJpbmd9ICAgICAgICBrZXlcbiAqIEBwcml2YXRlXG4gKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAqL1xuZnVuY3Rpb24gYXV0b0dlbmVyYXRlR2V0U2V0KHByb3RvLCBrZXkpIHtcbiAgICBpZiAoTmVvLmhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpKSB7XG4gICAgICAgIHRocm93KCdDb25maWcgJyArIGtleSArICdfICgnICsgcHJvdG8uY2xhc3NOYW1lICsgJykgYWxyZWFkeSBoYXMgYSBzZXQgbWV0aG9kLCB1c2UgYmVmb3JlR2V0LCBiZWZvcmVTZXQgJiBhZnRlclNldCBpbnN0ZWFkJylcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9XG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXVtrZXldID0ge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVHZXQgPSBgYmVmb3JlR2V0JHtrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKX1gLFxuICAgICAgICAgICAgICAgICAgICBoYXNOZXdLZXkgPSBPYmplY3QuaGFzT3duKG1lW2NvbmZpZ1N5bWJvbF0sIGtleSksXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleSAgICA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgID0gaGFzTmV3S2V5ID8gbmV3S2V5IDogbWVbJ18nICsga2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUudmFsdWVPZigpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlOyAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIHNldHRlciA9PiBiZWZvcmVTZXQsIGFmdGVyU2V0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlR2V0XSh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHVLZXkgICAgICA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZXQgPSAnYmVmb3JlU2V0JyArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2V0ICA9ICdhZnRlclNldCcgICsgdUtleSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgID0gbWVbX2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyBldmVyeSBzZXQgY2FsbCBoYXMgdG8gZGVsZXRlIHRoZSBtYXRjaGluZyBzeW1ib2xcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJyAmJiBrZXkgIT09ICd2bm9kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOZW8uY2xvbmUodmFsdWUsIHRydWUsIHRydWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2UgZG8gd2FudCB0byBzdG9yZSB0aGUgdmFsdWUgYmVmb3JlIHRoZSBiZWZvcmVTZXQgbW9kaWZpY2F0aW9uIGFzIHdlbGwsXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgY291bGQgZ2V0IHB1bGxlZCBieSBvdGhlciBiZWZvcmVTZXQgbWV0aG9kcyBvZiBkaWZmZXJlbnQgY29uZmlnc1xuICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lW2JlZm9yZVNldF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVTZXRdKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhleSBkb24ndCByZXR1cm4gYSB2YWx1ZSwgdGhhdCBtZWFucyBubyBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gb2xkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoa2V5ID09PSAndm5vZGUnICYmIHZhbHVlICE9PSBvbGRWYWx1ZSkgfHwgLy8gdm5vZGUgdHJlZXMgY2FuIGJlIGh1Z2UsIGF2b2lkIGEgZGVlcCBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgICAgICFOZW8uaXNFcXVhbCh2YWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2FmdGVyU2V0XT8uKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFmdGVyU2V0Q29uZmlnPy4oa2V5LCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9ICBjdXJyZW50XG4gKiBAcGFyYW0ge09iamVjdH0gIHByZXZcbiAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiBjcmVhdGVBcnJheU5zKGNyZWF0ZSwgY3VycmVudCwgcHJldikge1xuICAgIGxldCBhcnJEZXRhaWxzID0gcGFyc2VBcnJheUZyb21TdHJpbmcoY3VycmVudCksXG4gICAgICAgIGkgICAgICAgICAgPSAxLFxuICAgICAgICBsZW4gICAgICAgID0gYXJyRGV0YWlscy5sZW5ndGgsXG4gICAgICAgIGFyckl0ZW0sIGFyclJvb3Q7XG5cbiAgICBpZiAoY3JlYXRlKSB7XG4gICAgICAgIHByZXZbYXJyRGV0YWlsc1swXV0gPSBhcnJSb290ID0gcHJldlthcnJEZXRhaWxzWzBdXSB8fCBbXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFyclJvb3QgPSBwcmV2W2FyckRldGFpbHNbMF1dXG4gICAgfVxuXG4gICAgaWYgKCFhcnJSb290KSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgYXJySXRlbSA9IHBhcnNlSW50KGFyckRldGFpbHNbaV0pO1xuXG4gICAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgICAgIGFyclJvb3RbYXJySXRlbV0gPSBhcnJSb290W2Fyckl0ZW1dIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICBhcnJSb290ID0gYXJyUm9vdFthcnJJdGVtXVxuICAgIH1cblxuICAgIHJldHVybiBhcnJSb290XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjbGFzcyBuYW1lIGV4aXN0cyBpbnNpZGUgdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4aXN0cyhjbGFzc05hbWUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gISFjbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdXG4gICAgICAgIH0sIGdsb2JhbFRoaXMpXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IG1peGluUHJvdG9cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peGluUHJvcGVydHkocHJvdG8sIG1peGluUHJvdG8pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICh+aWdub3JlTWl4aW4uaW5kZXhPZihrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm90b1trZXldPy5fZnJvbSkge1xuICAgICAgICAgICAgaWYgKG1peGluUHJvdG8uY2xhc3NOYW1lID09PSBwcm90b1trZXldLl9mcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNaXhpbiBzZXQgbXVsdGlwbGUgdGltZXMgb3IgYWxyZWFkeSBkZWZpbmVkIG9uIGEgQmFzZSBDbGFzcycsIHByb3RvLmNsYXNzTmFtZSwgbWl4aW5Qcm90by5jbGFzc05hbWUsIGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgJHtwcm90by5jbGFzc05hbWV9OiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJHttaXhpblByb3RvLmNsYXNzTmFtZX0sICR7cHJvdG9ba2V5XS5fZnJvbX0pID0+ICR7a2V5fWBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RvW2tleV0gPSBtaXhpblByb3RvW2tleV07XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KS5fZnJvbSA9IG1peGluUHJvdG8uY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9ba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcHJvdG9ba2V5XS5fbmFtZSA9IGtleVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBtaXhpbkNsc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWl4UmVkdWNlKG1peGluQ2xzKSB7XG4gICAgcmV0dXJuIChwcmV2LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XSA9IGlkeCAhPT0gYXJyLmxlbmd0aCAtMSA/IHByZXZbY3VycmVudF0gfHwge30gOiBtaXhpbkNsc1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwYXJzZUFycmF5RnJvbVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gKGV4dHJhY3RBcnJheXNSZWdleC5leGVjKHN0cikgfHwgW251bGxdKS5zbGljZSgxKS5yZWR1Y2UoXG4gICAgICAgIChmdW4sIGFyZ3MpID0+IFtmdW5dLmNvbmNhdChhcmdzLm1hdGNoKGNoYXJzUmVnZXgpKVxuICAgIClcbn1cblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbk5lby5hc3NpZ25EZWZhdWx0cyhOZW8uY29uZmlnLCBEZWZhdWx0Q29uZmlnKTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRmlsdGVyICAgICBmcm9tICcuL0ZpbHRlci5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgZnJvbSAnLi4vdXRpbC9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFNvcnRlciAgICAgZnJvbSAnLi9Tb3J0ZXIubWpzJztcblxuY29uc3QgY291bnRNdXRhdGlvbnMgICA9IFN5bWJvbCgnY291bnRNdXRhdGlvbnMnKSxcbiAgICAgIGlzRmlsdGVyZWQgICAgICAgPSBTeW1ib2woJ2lzRmlsdGVyZWQnKSxcbiAgICAgIGlzU29ydGVkICAgICAgICAgPSBTeW1ib2woJ2lzU29ydGVkJyksXG4gICAgICBzaWxlbnRVcGRhdGVNb2RlID0gU3ltYm9sKCdzaWxlbnRVcGRhdGVNb2RlJyksXG4gICAgICB0b0FkZEFycmF5ICAgICAgID0gU3ltYm9sKCd0b0FkZEFycmF5JyksXG4gICAgICB0b1JlbW92ZUFycmF5ICAgID0gU3ltYm9sKCd0b1JlbW92ZUFycmF5JyksXG4gICAgICB1cGRhdGluZ0luZGV4ICAgID0gU3ltYm9sKCd1cGRhdGluZ0luZGV4Jyk7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQ29sbGVjdGlvbiBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG9ic2VydmFibGUgPSB0cnVlXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29sbGVjdGlvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gZmlsdGVyaW5nIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgZmlyc3QgdGltZSwgYWxsSXRlbXMgd2lsbCBiZWNvbWUgYSBuZXcgY29sbGVjdGlvbiBmb3IgdGhlIHVuZmlsdGVyZWRcbiAgICAgICAgICogc3RhdGUsIHVzaW5nIHRoaXMgaWQgYXMgdGhlIHNvdXJjZUNvbGxlY3Rpb25JZFxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfG51bGx9IGFsbEl0ZW1zPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgYWxsSXRlbXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNvcnQgdGhlIGNvbGxlY3Rpb24gaXRlbXMgd2hlbiBhZGRpbmcgLyBpbnNlcnRpbmcgbmV3IG9uZXNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b1NvcnQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1NvcnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2UgJ3ByaW1pdGl2ZScgZm9yIGRlZmF1bHQgZmlsdGVycywgdXNlICdhZHZhbmNlZCcgZm9yIGZpbHRlcnMgdXNpbmcgYSBmaWx0ZXJCeSBtZXRob2RcbiAgICAgICAgICogd2hpY2ggbmVlZCB0byBpdGVyYXRlIG92ZXIgb3RoZXIgY29sbGVjdGlvbiBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGZpbHRlck1vZGU9J3ByaW1pdGl2ZSdcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlck1vZGU6ICdwcmltaXRpdmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gQXJyYXkgY29udGFpbmluZyBOZW8udXRpbC5GaWx0ZXIgY29uZmlnIG9iamVjdHMgb3IgaW5zdGFuY2VzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBmaWx0ZXJzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gaXRlbXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUoISkga2V5IHByb3BlcnR5IG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpbmcgbmV3IGl0ZW1zIHdpdGhvdXQgYW4gaWQgKGtleVByb3BlcnR5KSB3aWxsIHVzZSBhIG5lZ2F0aXZlIGluZGV4LCB3aGljaCB3aWxsIGRlY3JlYXNlIGJ5IC0xXG4gICAgICAgICAqIGZvciBlYWNoIG5ldyBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0ga2V5UHJvcGVydHlJbmRleD0tMVxuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHlJbmRleDogLTEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG1hcCBjb250YWluaW5nIHRoZSBrZXkgJiByZWZlcmVuY2Ugb2YgZWFjaCBjb2xsZWN0aW9uIGl0ZW0gZm9yIGZhc3RlciBhY2Nlc3NcbiAgICAgICAgICogQG1lbWJlciB7TWFwfSBtYXBfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWFwXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGludGVybmFsIEFycmF5IG9mIHRoZSBzb3J0IGRpcmVjdGlvbnMgZm9yIGZhc3RlciBhY2Nlc3NcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHNvcnREaXJlY3Rpb25zPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc29ydERpcmVjdGlvbnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBwcm9wZXJ0aWVzIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0UHJvcGVydGllcz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRQcm9wZXJ0aWVzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gQXJyYXkgY29udGFpbmluZyBOZW8udXRpbC5Tb3J0ZXIgY29uZmlnIG9iamVjdHMgb3IgaW5zdGFuY2VzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0ZXJzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgc29ydGVyc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIG9mIGFub3RoZXIgY29sbGVjdGlvbiBpbnN0YW5jZSB0byB1c2UgYXMgdGhpcyBkYXRhIHNvdXJjZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gc291cmNlSWRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNvdXJjZUlkXzogbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgc3ltYm9sQ29uZmlnID0ge2VudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX07XG5cbiAgICAgICAgbWUuaXRlbXMgPSBtZS5pdGVtcyB8fCBbXTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvdW50TXV0YXRpb25zXSAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzRmlsdGVyZWRdICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzU29ydGVkXSAgICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3NpbGVudFVwZGF0ZU1vZGVdOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3RvQWRkQXJyYXldICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3RvUmVtb3ZlQXJyYXldICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3VwZGF0aW5nSW5kZXhdICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogMH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLmF1dG9Tb3J0ICYmIG1lLl9zb3J0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLmRvU29ydCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIGFkZGVkIGl0ZW1zXG4gICAgICovXG4gICAgYWRkKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKG51bGwsIG51bGwsIGl0ZW0pLmFkZGVkSXRlbXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmlsdGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyLmxpc3RlbmVyQXBwbGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIub24oJ2NoYW5nZScsIG1lLm9uRmlsdGVyQ2hhbmdlLCBtZSk7XG4gICAgICAgICAgICAgICAgZmlsdGVyLmxpc3RlbmVyQXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2xkVmFsdWUgJiYgbWUuZmlsdGVyKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SXRlbXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHtrZXlQcm9wZXJ0eX0gPSBtZSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gICAgICAgICAgID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGl0ZW07XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdmFsdWVbaV07XG4gICAgICAgICAgICAgICAgbWUubWFwLnNldChpdGVtW2tleVByb3BlcnR5XSwgaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFwcGx5U29ydGVyQ29uZmlncygpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goc29ydGVyID0+IHtcbiAgICAgICAgICAgIGlmIChzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNvcnRlci5vbignY2hhbmdlJywgbWUub25Tb3J0ZXJDaGFuZ2UsIG1lKTtcbiAgICAgICAgICAgICAgICBzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBvbGRWYWx1ZSAmJiBtZS5hdXRvU29ydCAmJiBtZS5kb1NvcnQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U291cmNlSWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIG1lLl9pdGVtcyA9IFsuLi5zb3VyY2UuX2l0ZW1zXTtcbiAgICAgICAgICAgIG1lLm1hcCAgICA9IG5ldyBNYXAoc291cmNlLm1hcCk7IC8vIGNyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgb3JpZ2luYWwgbWFwXG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyc0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtdXRhdGU6IG1lLm9uTXV0YXRlLFxuICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNvdXJjZS5vbihsaXN0ZW5lcnNDb25maWcpO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBOZW8uZ2V0KG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICBzb3VyY2UudW4obGlzdGVuZXJzQ29uZmlnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgdGhlIHNvcnQgcHJvcGVydHkgJiBkaXJlY3Rpb24gbXVsdGlwbGllciBvZiBlYWNoIHNvcnRlciBpbnNpZGUgMiBhcnJheXMgZm9yIGZhc3RlciBhY2Nlc3Mgd2hlbiBzb3J0aW5nXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFwcGx5U29ydGVyQ29uZmlncygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zb3J0RGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICBtZS5zb3J0UHJvcGVydGllcyA9IFtdO1xuXG4gICAgICAgIG1lLnNvcnRlcnMuZm9yRWFjaChzb3J0ZXIgPT4ge1xuICAgICAgICAgICAgbWUuc29ydERpcmVjdGlvbnMucHVzaChzb3J0ZXIuZGlyZWN0aW9uTXVsdGlwbGllcik7XG4gICAgICAgICAgICBtZS5zb3J0UHJvcGVydGllcy5wdXNoKHNvcnRlci5wcm9wZXJ0eSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldEZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBbdmFsdWVdIDogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZS5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc01hdGNoLCBpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaSAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWVbaV0gPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0uc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjoga2V5Lm9wZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBrZXkucHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IGtleS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5vcGVyYXRvciA9PT0gKGtleS5vcGVyYXRvciB8fCAnPT09JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBrZXkucHJvcGVydHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnZhbHVlICAgID09PSBrZXkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShGaWx0ZXIsIGtleSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGxlbi0tXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGtleS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNYXB8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge01hcHxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRNYXAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhdmFsdWUgPyBuZXcgTWFwKCkgOiB2YWx1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U29ydGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IG9sZFZhbHVlPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc01hdGNoLCBpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaSAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgbGV0IHtkaXJlY3Rpb24sIHByb3BlcnR5fSA9IGtleTtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnNldCh7ZGlyZWN0aW9uLCBwcm9wZXJ0eX0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBwcm9wZXJ0eSAmJiBvbGRWYWx1ZVtpXS5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IE5lby5jcmVhdGUoU29ydGVyLCBrZXkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IG9sZFZhbHVlW2ldO1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBsZW4tLVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBvbGRWYWx1ZT8uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAga2V5LmRlc3Ryb3koKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjYWNoZVVwZGF0ZShvcHRzKSB7XG4gICAgICAgIC8vIGRpc2FibGVkIGZvciBub3dcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhY2hlVXBkYXRlJywgb3B0cywgdGhpc1t0b0FkZEFycmF5XSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7a2V5UHJvcGVydHl9ID0gbWUsXG4gICAgICAgICAgICBpbmRleCwgdG9BZGRNYXAsIHRvUmVtb3ZlTWFwO1xuXG4gICAgICAgIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcbiAgICAgICAgICAgIHRvQWRkTWFwICAgID0gbWVbdG9BZGRBcnJheV0gICAubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgdG9SZW1vdmVNYXAgPSBtZVt0b1JlbW92ZUFycmF5XS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG5cbiAgICAgICAgICAgIG9wdHMuYWRkZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvUmVtb3ZlTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b0FkZEFycmF5XS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG9wdHMucmVtb3ZlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID0gdG9BZGRNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZW1vdmVNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnB1c2goaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgaXRlbXMgYW5kIGNsZWFycyB0aGUgbWFwXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIHRoaXMuZ2V0Q291bnQoKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgZmlsdGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzPWZhbHNlXVxuICAgICAqL1xuICAgIGNsZWFyRmlsdGVycyhyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHJlc3RvcmVPcmlnaW5hbEZpbHRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5maWx0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBhbmQgY2xlYXJzIHRoZSBtYXAsIHdpdGhvdXQgZmlyaW5nIGEgbXV0YXRlIGV2ZW50XG4gICAgICovXG4gICAgY2xlYXJTaWxlbnQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuX2l0ZW1zLnNwbGljZSgwLCBtZS5nZXRDb3VudCgpKTtcbiAgICAgICAgbWUubWFwLmNsZWFyKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgc29ydGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cbiAgICAgKiBXaXRob3V0IHJlc3RvcmVJbml0aWFsU3RhdGUgYXMgdHJ1ZSB0aGlzIHdpbGwgbm90IGFmZmVjdCB0aGUgY3VycmVudCBzb3J0aW5nIG9mIHRoaXMgY29sbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzPWZhbHNlXVxuICAgICAqL1xuICAgIGNsZWFyU29ydGVycyhyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzKSB7XG4gICAgICAgIHRoaXMuc29ydGVycyA9IHJlc3RvcmVPcmlnaW5hbFNvcnRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5zb3J0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gVGhlIGNsb25lZCBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbmZpZyAgPSBOZW8uY2xvbmUobWUub3JpZ2luYWxDb25maWcsIHRydWUpLFxuICAgICAgICAgICAgZmlsdGVycyA9IG1lLl9maWx0ZXJzIHx8IFtdLFxuICAgICAgICAgICAgc29ydGVycyA9IG1lLl9zb3J0ZXJzIHx8IFtdO1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5zb3J0ZXJzO1xuXG4gICAgICAgIGlmIChtZS5faXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uZmlnLml0ZW1zID0gWy4uLm1lLl9pdGVtc11cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5maWx0ZXJzID0gW107XG4gICAgICAgIGNvbmZpZy5zb3J0ZXJzID0gW107XG5cbiAgICAgICAgLy8gdG9kbzogZmlsdGVycyAmIHNvcnRlcnMgc2hvdWxkIHB1c2ggdGhlaXIgY3VycmVudCBzdGF0ZSBhbmQgbm90IHRoZSBvcmlnaW5hbCBvbmVcblxuICAgICAgICBmaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25maWcuZmlsdGVycy5wdXNoKGZpbHRlci5vcmlnaW5hbENvbmZpZylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ydGVycy5mb3JFYWNoKGZ1bmN0aW9uKHNvcnRlcikge1xuICAgICAgICAgICAgY29uZmlnLnNvcnRlcnMucHVzaChzb3J0ZXIub3JpZ2luYWxDb25maWcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKENvbGxlY3Rpb24sIGNvbmZpZylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIG1hcCAmIGl0ZW1zIGFycmF5IGJlZm9yZSB0aGUgc3VwZXIgY2FsbFxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuX2l0ZW1zLnNwbGljZSgwLCBtZS5faXRlbXMubGVuZ3RoKTtcbiAgICAgICAgbWUubWFwLmNsZWFyKCk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBpdGVtcz10aGlzLl9pdGVtc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50PWZhbHNlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGRvU29ydChpdGVtcz10aGlzLl9pdGVtcywgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBwcmV2aW91c0l0ZW1zICAgICA9IFsuLi5pdGVtc10sXG4gICAgICAgICAgICB7c29ydGVycywgc29ydERpcmVjdGlvbnMsIHNvcnRQcm9wZXJ0aWVzfSA9IG1lLFxuICAgICAgICAgICAgY291bnRTb3J0ZXJzICAgICAgPSBzb3J0UHJvcGVydGllcy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc1NvcnRCeU1ldGhvZCAgID0gZmFsc2UsXG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm1WYWx1ZSA9IGZhbHNlLFxuICAgICAgICAgICAgaSwgbWFwcGVkSXRlbXMsIG9iaiwgc29ydGVyLCBzb3J0UHJvcGVydHksIHNvcnRWYWx1ZTtcblxuICAgICAgICBpZiAoY291bnRTb3J0ZXJzID4gMCkge1xuICAgICAgICAgICAgc29ydGVycy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zb3J0QnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChrZXkudXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtVmFsdWUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNTb3J0QnlNZXRob2QpIHtcbiAgICAgICAgICAgICAgICBtZS5faXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0ZXIgICAgPSBzb3J0ZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlID0gc29ydGVyW3NvcnRlci5zb3J0QnkgPyAnc29ydEJ5JyA6ICdkZWZhdWx0U29ydEJ5J10oYSwgYik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3J0VmFsdWUgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ydFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChoYXNUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0I1NvcnRpbmdfd2l0aF9tYXBcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmogPSB7aW5kZXh9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAgID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZXJzW2ldLnVzZVRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBzb3J0ZXJzW2ldLnRyYW5zZm9ybVZhbHVlKGl0ZW1bc29ydFByb3BlcnRpZXNbaV1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcyA9IGl0ZW1zXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0UHJvcGVydHkgPSBzb3J0UHJvcGVydGllc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFbc29ydFByb3BlcnR5XSA+IGJbc29ydFByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxICogc29ydERpcmVjdGlvbnNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFbc29ydFByb3BlcnR5XSA8IGJbc29ydFByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSAqIHNvcnREaXJlY3Rpb25zW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IG1hcHBlZEl0ZW1zLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbZWwuaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVbaXNTb3J0ZWRdID0gY291bnRTb3J0ZXJzID4gMDtcblxuICAgICAgICBpZiAoIXNpbGVudCAmJiBtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnc29ydCcsIHtcbiAgICAgICAgICAgICAgICBpdGVtczogbWUuX2l0ZW1zLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzSXRlbXMsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lcyB0aGUgY29sbGVjdGlvbiBldmVudHMuXG4gICAgICogSWYgeW91IHN0YXJ0ZWQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgZmxhZyxcbiAgICAgKiB5b3UgbXVzdCB1c2UgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gZm9yIHRoaXMgY2FsbC5cbiAgICAgKiBVc2luZyB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSB3aWxsIG5vdCBmaXJlIGEgbXV0YXRpb24gZXZlbnQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZW5kU2lsZW50VXBkYXRlTW9kZV1cbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI3N0YXJ0VXBkYXRlIHN0YXJ0VXBkYXRlfVxuICAgICAqL1xuICAgIGVuZFVwZGF0ZShlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPiAwKSB7XG4gICAgICAgICAgICBtZVt1cGRhdGluZ0luZGV4XS0tXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kU2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICAgICAgbWVbc2lsZW50VXBkYXRlTW9kZV0gPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZmlyZSgnbXV0YXRlJywge1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogbWVbdG9BZGRBcnJheV0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiBtZVt0b1JlbW92ZUFycmF5XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldICAgLnNwbGljZSgwLCBtZVt0b0FkZEFycmF5XSAgIC5sZW5ndGgpO1xuICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0uc3BsaWNlKDAsIG1lW3RvUmVtb3ZlQXJyYXldLmxlbmd0aClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgcmVtb3RlIGZpbHRlcmluZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICBleHBvcnRGaWx0ZXJzKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJzID0gW10sXG4gICAgICAgICAgICBmaWx0ZXI7XG5cbiAgICAgICAgbWUuZmlsdGVycz8uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZmlsdGVyID0ga2V5LmV4cG9ydCgpO1xuXG4gICAgICAgICAgICBmaWx0ZXIgJiYgZmlsdGVycy5wdXNoKGZpbHRlcilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlcnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgZm9yIHJlbW90ZSBzb3J0aW5nXG4gICAgICogQHJldHVybnMge09iamVjdFtdfVxuICAgICAqL1xuICAgIGV4cG9ydFNvcnRlcnMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHNvcnRlcnMgPSBbXSxcbiAgICAgICAgICAgIHNvcnRlcjtcblxuICAgICAgICBtZS5zb3J0ZXJzPy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBzb3J0ZXIgPSBrZXkuZXhwb3J0KCk7XG5cbiAgICAgICAgICAgIHNvcnRlciAmJiBzb3J0ZXJzLnB1c2goc29ydGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc29ydGVyc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmaWx0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVycyAgICAgICAgID0gbWUuX2ZpbHRlcnMsXG4gICAgICAgICAgICBjb3VudEFsbEZpbHRlcnMgPSBmaWx0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGNvdW50RmlsdGVycyAgICA9IDAsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgPSBtZS5hbGxJdGVtcz8uX2l0ZW1zIHx8IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBjb3VudEl0ZW1zICAgICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zICAgPSBbXSxcbiAgICAgICAgICAgIG5lZWRzU29ydGluZyAgICA9IGZhbHNlLFxuICAgICAgICAgICAgb2xkSXRlbXMgICAgICAgID0gWy4uLm1lLl9pdGVtc10sXG4gICAgICAgICAgICBjb25maWcsIGlzSW5jbHVkZWQsIGl0ZW0sIGosIHRtcEl0ZW1zO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnRBbGxGaWx0ZXJzOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghZmlsdGVyc1tpXS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGNvdW50RmlsdGVycysrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRGaWx0ZXJzID09PSAwICYmIG1lLmFsbEl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAobWUuc29ydGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbmVlZHNTb3J0aW5nID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5jbGVhclNpbGVudCgpO1xuXG4gICAgICAgICAgICBtZS5pdGVtcyA9IFsuLi5tZS5hbGxJdGVtcy5faXRlbXNdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIW1lLmFsbEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gey4uLm1lLm9yaWdpbmFsQ29uZmlnfTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLml0ZW1zO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuc29ydGVycztcblxuICAgICAgICAgICAgICAgIG1lLmFsbEl0ZW1zID0gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIC4uLk5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBrZXlQcm9wZXJ0eTogbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUlkICAgOiBtZS5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLm1hcC5jbGVhcigpO1xuXG4gICAgICAgICAgICBpZiAobWUuZmlsdGVyTW9kZSA9PT0gJ3ByaW1pdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBmb3IgbG9vcHMgb24gcHVycG9zZSAtPiBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudEl0ZW1zOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gICAgICAgPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaiAgICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGogPCBjb3VudEFsbEZpbHRlcnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlcnNbal0uaXNGaWx0ZXJlZChpdGVtLCBpdGVtcywgaXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmNsdWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbmNsdWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUubWFwLnNldChpdGVtW21lLmtleVByb3BlcnR5XSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGZpbHRlcmVkSXRlbXMgLy8gc2lsZW50IHVwZGF0ZSwgdGhlIG1hcCBpcyBhbHJlYWR5IGluIHBsYWNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSBbLi4uaXRlbXNdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqPTA7IGogPCBjb3VudEFsbEZpbHRlcnM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb3VudEl0ZW1zOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsdGVyc1tqXS5pc0ZpbHRlcmVkKGZpbHRlcmVkSXRlbXNbaV0sIGZpbHRlcmVkSXRlbXMsIGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEl0ZW1zLnB1c2goZmlsdGVyZWRJdGVtc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSBbLi4udG1wSXRlbXNdO1xuICAgICAgICAgICAgICAgICAgICBjb3VudEl0ZW1zICAgID0gZmlsdGVyZWRJdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5pdGVtcyA9IGZpbHRlcmVkSXRlbXMgLy8gdXBkYXRlIHRoZSBtYXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lW2lzRmlsdGVyZWRdID0gY291bnRGaWx0ZXJzICE9PSAwO1xuXG4gICAgICAgIGlmIChuZWVkc1NvcnRpbmcpIHtcbiAgICAgICAgICAgIG1lLmRvU29ydChtZS5pdGVtcywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmZpcmUoJ2ZpbHRlcicsIHtcbiAgICAgICAgICAgIGlzRmlsdGVyZWQ6IG1lW2lzRmlsdGVyZWRdLFxuICAgICAgICAgICAgaXRlbXMgICAgIDogbWUuaXRlbXMsXG4gICAgICAgICAgICBvbGRJdGVtcyxcbiAgICAgICAgICAgIHNjb3BlICAgICA6IG1lXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpdGVtcyB3aGljaCBtYXRjaCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlLlxuICAgICAqIFByb3BlcnRpZXMgY2FuIGNvbnRhaW4gZG90cyBmb3IgbmFtZXNwYWNlcyA9PiBmaW5kKCd2ZG9tLmlkJywgJ25lby12bm9kZS0xJylcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBbdmFsdWVdIE9ubHkgcmVxdWlyZWQgaW4gY2FzZSB0aGUgZmlyc3QgcGFyYW0gaXMgYSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJldHVybkZpcnN0TWF0Y2g9ZmFsc2VcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fE9iamVjdFtdfVxuICAgICAqICAgICByZXR1cm5GaXJzdE1hdGNoPWZhbHNlOiBSZXR1cm5zIGFuIGVtcHR5IEFycmF5IGluIGNhc2Ugbm8gaXRlbXMgYXJlIGZvdW5kXG4gICAgICogICAgIHJldHVybkZpcnN0TWF0Y2g9dHJ1ZTogIFJldHVybnMgdGhlIGZpcnN0IGZvdW5kIGl0ZW0gb3IgbnVsbFxuICAgICAqL1xuICAgIGZpbmQocHJvcGVydHksIHZhbHVlLCByZXR1cm5GaXJzdE1hdGNoPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGlzT2JqZWN0UHJvcGVydHkgPSBtZS5pc0l0ZW0ocHJvcGVydHkpLFxuICAgICAgICAgICAgaXRlbSwgbWF0Y2hBcnJheSwgcHJvcGVydGllc0FycmF5LCBwcm9wZXJ0aWVzTGVuZ3RoO1xuXG4gICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMocHJvcGVydHkpO1xuICAgICAgICAgICAgcHJvcGVydGllc0xlbmd0aCA9IHByb3BlcnRpZXNBcnJheS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGl0ZW0gb2YgbWUuaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLm5zKGtleSwgZmFsc2UsIGl0ZW0pID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gcHJvcGVydGllc0xlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuRmlyc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5ucyhwcm9wZXJ0eSwgZmFsc2UsIGl0ZW0pID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5GaXJzdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVybkZpcnN0TWF0Y2ggPyBudWxsIDogaXRlbXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbiBmb3Igd2hpY2ggdGhlIHBhc3NlZCBmdW5jdGlvbiByZXR1cm5zIHRydWVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIGl0ZW0gaW5zaWRlIHRoZSBzdGFydC1lbmQgcmFuZ2UuIFJldHVybiB0cnVlIGZvciBhIG1hdGNoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmbi5pdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZT10aGlzIFRoZSBzY29wZSBpbiB3aGljaCB0aGUgcGFzc2VkIGZ1bmN0aW9uIGdldHMgZXhlY3V0ZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhcnQ9MCBUaGUgc3RhcnQgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZW5kPXRoaXMuZ2V0Q291bnQoKSBUaGUgZW5kIGluZGV4ICh1cCB0bywgbGFzdCB2YWx1ZSBleGNsdWRlZClcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcbiAgICAgKi9cbiAgICBmaW5kQnkoZm4sIHNjb3BlPXRoaXMsIHN0YXJ0PTAsIGVuZD10aGlzLmdldENvdW50KCkpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zID0gW10sXG4gICAgICAgICAgICBpICAgICA9IHN0YXJ0O1xuXG4gICAgICAgIGZvciAoOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmbi5jYWxsKHNjb3BlLCBtZS5pdGVtc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG1lLml0ZW1zW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgaXRlbSB3aGljaCBtYXRjaGVzIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbdmFsdWVdIE9ubHkgcmVxdWlyZWQgaW4gY2FzZSB0aGUgZmlyc3QgcGFyYW0gaXMgYSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBmaXJzdCBmb3VuZCBpdGVtIG9yIG51bGxcbiAgICAgKi9cbiAgICBmaW5kRmlyc3QocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmQocHJvcGVydHksIHZhbHVlLCB0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGl0ZW0gaW5zaWRlIHRoZSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zWzBdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb2JqZWN0IGFzc29jaWF0ZWQgdG8gdGhlIGtleSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBub25lLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpIHx8IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpdGVtIGZvciBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0QXQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2luZGV4XVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgaW50ZXJuYWwgaXRlbXMgYXJyYXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMubGVuZ3RoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRDb3VudE11dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbY291bnRNdXRhdGlvbnNdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgbWF0Y2hpbmcgZmlsdGVyIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkZpbHRlcnxudWxsfVxuICAgICAqL1xuICAgIGdldEZpbHRlcihwcm9wZXJ0eSkge1xuICAgICAgICBsZXQgZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICA9IGZpbHRlcnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLnByb3BlcnR5ID09PSBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGtleSBmb3IgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXRLZXlBdChpbmRleCkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIGl0ZW0/Llt0aGlzLmtleVByb3BlcnR5XVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzaGFsbG93IGNvcHkgb2YgYSBwb3J0aW9uIG9mIHRoZSBpdGVtcyBhcnJheVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIFplcm8tYmFzZWQgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gZXh0cmFjdGlvbi5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZF0gWmVyby1iYXNlZCBpbmRleCBiZWZvcmUgd2hpY2ggdG8gZW5kIGV4dHJhY3Rpb24gKGV4dHJhY3RzIHVwIHRvIGJ1dCBub3QgaW5jbHVkaW5nIGVuZCkuXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NsaWNlXG4gICAgICovXG4gICAgZ2V0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuc2xpY2Uoc3RhcnQsIGVuZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBTb3VyY2UgQ29sbGVjdGlvbiBpbiBjYXNlIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWQgY29uZmlnIHdhcyBzZXRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uQmFzZXx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0U291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VJZCAmJiBOZW8uZ2V0KHRoaXMuc291cmNlSWQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gYXNzZXJ0aW5nIHdoZXRoZXIgYSB2YWx1ZSBoYXMgYmVlbiBhc3NvY2lhdGVkIHRvIHRoZSBrZXkgaW4gdGhlIENvbGxlY3Rpb24gb3Igbm90XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGFuIGl0ZW0gZXhpc3RzIGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzSXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoaXRlbVt0aGlzLmtleVByb3BlcnR5XSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXkgb3IgaXRlbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxuICAgICAqL1xuICAgIGluZGV4T2Yoa2V5KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBtZS5faXRlbXMuaW5kZXhPZihtZS5pc0l0ZW0oa2V5KSA/IGtleSA6IG1lLm1hcC5nZXQoa2V5KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBpdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mSXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGl0ZW0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4ga2V5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mS2V5KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZih0aGlzLm1hcC5nZXQoa2V5KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge09iamVjdFtdfSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBhZGRlZCBpdGVtc1xuICAgICAqL1xuICAgIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pLmFkZGVkSXRlbXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb2xsZWN0aW9uIGlzIGZpbHRlcmVkXG4gICAgICovXG4gICAgaXNGaWx0ZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbaXNGaWx0ZXJlZF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpc0ZpbHRlcmVkSXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgPSBtZS5fZmlsdGVycyxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IGZpbHRlcnMubGVuZ3RoLFxuICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLmlzRmlsdGVyZWQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpc0ZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRmlsdGVyZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGNoZWNrIGlmIGEgZ2l2ZW4gaW5wdXQgaXMgZWl0aGVyIG9iamVjdC1saWtlIG9yIGEga2V5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSByZXR1cm5zIHRydWUgZm9yIG9iamVjdC1saWtlIHZhbHVlc1xuICAgICAqL1xuICAgIGlzSXRlbSh2YWx1ZSkge1xuICAgICAgICAvLyBXZSBjYW4gbm90IHVzZSBOZW8uaXNPYmplY3QoKSB8fCBOZW8uaXNSZWNvcmQoKSwgc2luY2UgY29sbGVjdGlvbnMgY2FuIHN0b3JlIG5lbyBpbnN0YW5jZXMgdG9vLlxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbGxlY3Rpb24gaXMgc29ydGVkXG4gICAgICovXG4gICAgaXNTb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2lzU29ydGVkXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgaXRlbSBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1t0aGlzLmdldENvdW50KCkgLTFdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYW4gaXRlbSBmcm9tIGZyb21JbmRleCB0byB0b0luZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAgICovXG4gICAgbW92ZShmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQge2l0ZW1zfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZyb21JbmRleCA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZyb21JbmRleCA9IGl0ZW1zLmxlbmd0aCAtIDFcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLnNwbGljZSh0b0luZGV4LCAwLCBpdGVtcy5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZpbHRlckNoYW5nZShvcHRzKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbk11dGF0ZShvcHRzKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gdG9kbzogaW5zcGVjdCB0aGUgYnViYmxpbmcgY2hhaW5cbiAgICAgICAgLyppZiAob3B0cy5wcmV2ZW50QnViYmxlVXApIHtcbiAgICAgICAgICAgIG1lLnByZXZlbnRCdWJibGVVcCA9IHRydWVcbiAgICAgICAgfSovXG5cbiAgICAgICAgbWUucHJldmVudEJ1YmJsZVVwID0gdHJ1ZTtcblxuICAgICAgICBtZS5zcGxpY2UobnVsbCwgb3B0cy5yZW1vdmVkSXRlbXMsIG9wdHMuYWRkZWRJdGVtcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblNvcnRlckNoYW5nZShvcHRzKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTb3J0ZXJDb25maWdzKCk7XG4gICAgICAgIHRoaXMuZG9Tb3J0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgaXRlbXMgYXJyYXkgYW5kIHJldHVybnMgdGhpcyBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UodGhpcy5nZXRDb3VudCgpIC0xLCAxKTtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLnJlbW92ZWRJdGVtc1swXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgb25lIG9yIG1vcmUgaXRlbXMgdG8gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgbmV3IGl0ZW1zIGNvdW50XG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW0gVGhlIGl0ZW0ocykgdG8gYWRkXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcbiAgICAgKi9cbiAgICBwdXNoKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGl0ZW0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGdpdmVuIGtleSwgaXRlbSBvciBBcnJheSBjb250YWluaW5nIGtleXN8aXRlbXNcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fEFycmF5fSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgQXJyYXkuaXNBcnJheShrZXkpID8ga2V5IDogW2tleV0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldmVyc2VzIHRoZSBpdGVtcyBhcnJheSBpbiBwbGFjZS5cbiAgICAgKiBJbnRlbmRlZCBmb3IgY29sbGVjdGlvbnMgd2l0aG91dCBzb3J0ZXJzLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICByZXZlcnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMucmV2ZXJzZSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBpdGVtcyBhcnJheSBhbmQgcmV0dXJucyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlbW92ZWQgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uOyB1bmRlZmluZWQgaWYgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG4gICAgICovXG4gICAgc2hpZnQoKSB7XG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICByZXR1cm4gbXV0YXRpb24uYWRkZWRJdGVtc1swXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIHRlc3QgZm9yIGVhY2ggaXRlbSwgdGFraW5nIHRocmVlIHBhcmFtZXRlcnM6XG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY2FsbGJhY2suaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9ICBbY2FsbGJhY2suaW5kZXhdIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICAgW2NhbGxiYWNrLml0ZW1zXSBUaGUgaXRlbXMgYXJyYXkgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFZhbHVlIHRvIHVzZSBhcyBcInRoaXNcIiB3aGVuIGV4ZWN1dGluZyB0aGUgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSBmb3IgYW55IGNvbGxlY3Rpb24gaXRlbSwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgc29tZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zb21lKC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBpdGVtcyBmcm9tIGFuZC9vciBhZGRzIGl0ZW1zIHRvIHRoaXMgY29sbGVjdGlvblxuICAgICAqIElmIHRoZSB0b1JlbW92ZUFycmF5IGlzIHVzZWQsIHRoZW4gdGhlIGluZGV4IGlzIG5vdCB1c2VkIGZvciByZW1vdmluZywgdGhlIGVudHJpZXMgYXJlIGZvdW5kIGJ5IGtleSBhbmQgcmVtb3ZlZCBmcm9tIHdoZXJlIHRoZXkgYXJlLlxuICAgICAqIElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHRvQWRkQXJyYXkgaXMgYXBwZW5kZWQgdG8gdGhlIENvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3RbXX0gW3JlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE9iamVjdFtdfSBbdG9BZGRBcnJheV1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgYWRkZWRJdGVtcyAmIHJlbW92ZWRJdGVtcyBhcnJheXNcbiAgICAgKi9cbiAgICBzcGxpY2UoaW5kZXgsIHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5LCB0b0FkZEFycmF5KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2tleVByb3BlcnR5LCBtYXB9ID0gbWUsXG4gICAgICAgICAgICBzb3VyY2UgICAgICAgICAgICAgPSBtZS5nZXRTb3VyY2UoKSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zICAgICAgID0gW10sXG4gICAgICAgICAgICByZW1vdmVDb3VudEF0SW5kZXggPSBOZW8uaXNOdW1iZXIocmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkpID8gcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkgOiBudWxsLFxuICAgICAgICAgICAgdG9SZW1vdmVBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheShyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXG4gICAgICAgICAgICBpLCBpdGVtLCBrZXksIGxlbiwgdG9BZGRNYXA7XG5cbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIoaW5kZXgpICYmIHJlbW92ZUNvdW50QXRJbmRleCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKG1lLmlkICsgJzogSWYgaW5kZXggaXMgbm90IHBhc3NlZCwgcmVtb3ZlQ291bnRBdEluZGV4IGNhbm5vdCBiZSB1c2VkJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRvQWRkQXJyYXkgPSB0b0FkZEFycmF5ICYmICFBcnJheS5pc0FycmF5KHRvQWRkQXJyYXkpID8gW3RvQWRkQXJyYXldIDogdG9BZGRBcnJheTtcblxuICAgICAgICBpZiAodG9SZW1vdmVBcnJheSAmJiAobGVuID0gdG9SZW1vdmVBcnJheS5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgaWYgKHRvQWRkQXJyYXkgJiYgdG9BZGRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdG9BZGRNYXAgPSB0b0FkZEFycmF5Lm1hcChlID0+IGVba2V5UHJvcGVydHldKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGk9MDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHRvUmVtb3ZlQXJyYXlbaV07XG4gICAgICAgICAgICAgICAga2V5ICA9IG1lLmlzSXRlbShpdGVtKSA/IGl0ZW1ba2V5UHJvcGVydHldIDogaXRlbTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b0FkZE1hcCB8fCAodG9BZGRNYXAgJiYgdG9BZGRNYXAuaW5kZXhPZihrZXkpIDwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGl0ZW1zLnNwbGljZShtZS5pbmRleE9mS2V5KGtleSksIDEpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlbW92ZUNvdW50QXRJbmRleCAmJiByZW1vdmVDb3VudEF0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaCguLi5pdGVtcy5zcGxpY2UoaW5kZXgsIHJlbW92ZUNvdW50QXRJbmRleCkpO1xuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwLmRlbGV0ZShlW2tleVByb3BlcnR5XSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9BZGRBcnJheSAmJiAobGVuID0gdG9BZGRBcnJheS5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b0FkZEFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGtleSAgPSBpdGVtW2tleVByb3BlcnR5XTtcblxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5UHJvcGVydHldID0ga2V5ID0gbWUua2V5UHJvcGVydHlJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgbWUua2V5UHJvcGVydHlJbmRleC0tXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGtleSkgJiYgIW1lLmlzRmlsdGVyZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnNldChrZXksIGl0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWRkZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtYW5jZSBpbXByb3ZlbWVudCBmb3IgU2FmYXJpLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy82MjI4XG4gICAgICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGFkZGVkSXRlbXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoTmVvLmlzTnVtYmVyKGluZGV4KSA/IGluZGV4IDogaXRlbXMubGVuZ3RoLCAwLCAuLi5hZGRlZEl0ZW1zKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmRvU29ydCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKCFzb3VyY2UuZ2V0U291cmNlKCkpIHtcbiAgICAgICAgICAgICAgICBzb3VyY2UucHJldmVudEJ1YmJsZVVwID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1lLnByZXZlbnRCdWJibGVVcCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VyY2Ugc3BsaWNlJywgc291cmNlLmlkLCAnYWRkZWQ6JywgLi4udG9BZGRBcnJheSwgJ3JlbW92ZWQ6JywgLi4ucmVtb3ZlZEl0ZW1zKTtcbiAgICAgICAgICAgICAgICBtZS5zdGFydFVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKG51bGwsIHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zLCB0b0FkZEFycmF5KTtcbiAgICAgICAgICAgICAgICBtZS5lbmRVcGRhdGUodHJ1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHNvdXJjZS5wcmV2ZW50QnViYmxlVXBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZGRlZEl0ZW1zLmxlbmd0aCA+IDAgfHwgcmVtb3ZlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lW2NvdW50TXV0YXRpb25zXSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ211dGF0ZScsIHtcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zICAgICA6IHRvQWRkQXJyYXksXG4gICAgICAgICAgICAgICAgcHJldmVudEJ1YmJsZVVwOiBtZS5wcmV2ZW50QnViYmxlVXAsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zICAgOiB0b1JlbW92ZUFycmF5IHx8IHJlbW92ZWRJdGVtc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcbiAgICAgICAgICAgIG1lLmNhY2hlVXBkYXRlKHtcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIG1lLnByZXZlbnRCdWJibGVVcFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHthZGRlZEl0ZW1zLCByZW1vdmVkSXRlbXN9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJldmVudHMgdGhlIGNvbGxlY3Rpb24gZnJvbSBmaXJpbmcgZXZlbnRzIHVudGlsIGVuZFVwZGF0ZSBnZXRzIGNhbGxlZC5cbiAgICAgKiBJZiB5b3Ugc3RhcnQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0sXG4gICAgICogdGhlIG11dGF0aW9uIGV2ZW50IHdpbGwgbm90IGZpcmUgYWZ0ZXIgdXNpbmcgZW5kVXBkYXRlKClcbiAgICAgKiAoeW91IG11c3QgdXNlIHRoZSBlbmRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtIGZvciB0aGUgZW5kVXBkYXRlIGNhbGwgaW4gY2FzZSB5b3UgdXNlZFxuICAgICAqIHN0YXJ0U2lsZW50VXBkYXRlTW9kZSBoZXJlKVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3N0YXJ0U2lsZW50VXBkYXRlTW9kZV1cbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI2VuZFVwZGF0ZSBlbmRVcGRhdGV9XG4gICAgICovXG4gICAgc3RhcnRVcGRhdGUoc3RhcnRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgIGlmIChzdGFydFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIHRoaXNbc2lsZW50VXBkYXRlTW9kZV0gPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW3VwZGF0aW5nSW5kZXhdKytcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgdW5zaGlmdChpdGVtKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpXG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBtdXRhdGUgZXZlbnQgZmlyZXMgYWZ0ZXIgZXZlcnkgc3BsaWNlIGNhbGwgKGludm9rZWQgYnkgYWxsIG1ldGhvZHMgd2hpY2ggY2hhbmdlIHRoZSBjb250ZW50IG9mIHRoZSBpdGVtcyBhcnJheSkuXG4gKiBAZXZlbnQgbXV0YXRlXG4gKiBAcGFyYW0ge09iamVjdFtdfSBhZGRlZEl0ZW1zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHByZXZlbnRCdWJibGVVcCBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdFtdfSByZW1vdmVkSXRlbXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoQ29sbGVjdGlvbik7XG4iLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5GaWx0ZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUuT2JzZXJ2YWJsZSBtaXhpblxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IHRydWVcbiAgICAvKipcbiAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBvcGVyYXRvciBjb25maWc6PGJyPlxuICAgICAqIFsnPT0nLCc9PT0nLCchPScsJyE9PScsJzwnLCc8PScsJz4nLCc+PScsJ2VuZHNXaXRoJywnZXhjbHVkZWQnLCdpbmNsdWRlZCcsJ2lzRGVmaW5lZCcsJ2lzVW5kZWZpbmVkJywnbGlrZScsJ3N0YXJ0c1dpdGgnXVxuICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBvcGVyYXRvcnNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBvcGVyYXRvcnMgPSBbXG4gICAgICAgICc9PScsICc9PT0nLCAnIT0nLCAnIT09JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdlbmRzV2l0aCcsICdleGNsdWRlZCcsICdpbmNsdWRlZCcsXG4gICAgICAgICdpc0RlZmluZWQnLCAnaXNVbmRlZmluZWQnLCAnbGlrZScsICdzdGFydHNXaXRoJ1xuICAgIF1cblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbGxlY3Rpb24uRmlsdGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5GaWx0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZmlsdGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2ZpbHRlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXR0aW5nIGRpc2FibGVkIHRvIHRydWUgd2lsbCBleGNsdWRlIHRoaXMgZmlsdGVyIGZyb20gdGhlIGNvbGxlY3Rpb24gZmlsdGVyaW5nIGxvZ2ljXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRpc2FibGVkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3ZpZGUgYSBjdXN0b20gZmlsdGVyaW5nIGZ1bmN0aW9uIHdoaWNoIGhhcyBhIGhpZ2hlciBwcmlvcml0eSB0aGFuIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IGZpbHRlckJ5Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJCeV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIG1lYW5zIG5vdCBmaWx0ZXJpbmcgb3V0IGl0ZW1zIGluIGNhc2UgdGhlIHZhbHVlIGlzICcnLCBudWxsLCBbXSBvciB7fVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpbmNsdWRlRW1wdHlWYWx1ZXM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgaW5jbHVkZUVtcHR5VmFsdWVzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgZmxhZyB0byB0cnVlIGJlZm9yZSBzdGFydGluZyBidWxrIHVwZGF0ZXMgKGUuZy4gY2hhbmdpbmcgcHJvcGVydHkgJiB2YWx1ZSlcbiAgICAgICAgICogdG8gcHJldmVudCBtdWx0aXBsZSBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzVXBkYXRpbmdfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBpc1VwZGF0aW5nXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbGlzdGVuZXJBcHBsaWVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3BlcmF0b3IgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICAgICAqXG4gICAgICAgICAqID09IChub3QgcmVjb21tZW5kZWQpXG4gICAgICAgICAqID09PVxuICAgICAgICAgKiAhPSAobm90IHJlY29tbWVuZGVkKVxuICAgICAgICAgKiAhPT1cbiAgICAgICAgICogPFxuICAgICAgICAgKiA+PVxuICAgICAgICAgKiA+XG4gICAgICAgICAqID49XG4gICAgICAgICAqIGxpa2UgKGNvbGxlY3Rpb25WYWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSlcbiAgICAgICAgICogaW5jbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXG4gICAgICAgICAqIGV4Y2x1ZGVkIChleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5KVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9wZXJhdG9yPSc9PT0nXG4gICAgICAgICAqL1xuICAgICAgICBvcGVyYXRvcl86ICc9PT0nLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BlcnR5IHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNjb3BlIHRvIHVzZSBmb3IgdGhlIGZpbHRlckJ5IG1ldGhvZCwgaW4gY2FzZSBpdCBpcyBwcm92aWRlZC4gRGVmYXVsdHMgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHNjb3BlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjb3BlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2YWx1ZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVfOiBudWxsXG4gICAgfVxuXG4gICAgYWZ0ZXJTZXREaXNhYmxlZCguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRGaWx0ZXJCeSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgLy8gdG9kb1xuICAgIH1cblxuICAgIGFmdGVyU2V0SXNVcGRhdGluZyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPT09IGZhbHNlICYmIHRoaXMuZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9XG5cbiAgICBhZnRlclNldE9wZXJhdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncylcbiAgICB9XG5cbiAgICBhZnRlclNldFByb3BlcnR5KC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncylcbiAgICB9XG5cbiAgICBhZnRlclNldFZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncylcbiAgICB9XG5cbiAgICBiZWZvcmVTZXRGaWx0ZXJCeSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdmaWx0ZXJCeSBoYXMgdG8gYmUgYSBmdW5jdGlvbicsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBvcGVyYXRvciBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0T3BlcmF0b3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdvcGVyYXRvcicpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciByZW1vdGUgZmlsdGVyaW5nXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIGV4cG9ydCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7b3BlcmF0b3IsIHByb3BlcnR5LCB2YWx1ZX0gPSBtZTtcblxuICAgICAgICBpZiAoIW1lLmZpbHRlckJ5KSB7XG4gICAgICAgICAgICByZXR1cm4ge29wZXJhdG9yLCBwcm9wZXJ0eSwgdmFsdWV9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGZpcmVDaGFuZ2VFdmVudCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBtZS5pc1VwZGF0aW5nICE9PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQge29wZXJhdG9yLCBwcm9wZXJ0eSwgdmFsdWV9ID0gbWU7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7b3BlcmF0b3IsIHByb3BlcnR5LCB2YWx1ZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBjb2xsZWN0aW9uIGl0ZW0gbWF0Y2hlcyB0aGlzIGZpbHRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmVkSXRlbXMgSWYgdGhlIGNvbGxlY3Rpb24gZmlsdGVyTW9kZSBpcyBub3QgcHJpbWl0aXZlIGNvbnRhaW5zIHRoZSBpdGVtcyB3aGljaCBwYXNzZWRcbiAgICAgKiB0aGUgcHJldmlvdXMgZmlsdGVycywgb3RoZXJ3aXNlIGFsbCBjb2xsZWN0aW9uIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYWxsSXRlbXMgYWxsIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ZpbHRlcmVkKGl0ZW0sIGZpbHRlcmVkSXRlbXMsIGFsbEl0ZW1zKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJWYWx1ZSwgcmVjb3JkVmFsdWU7XG5cbiAgICAgICAgaWYgKG1lLl9kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuX2ZpbHRlckJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuZmlsdGVyQnkuY2FsbChtZS5zY29wZSB8fCBtZSwge1xuICAgICAgICAgICAgICAgIGFsbEl0ZW1zLFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMsXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbWUuX3ZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmluY2x1ZGVFbXB0eVZhbHVlcyAmJiAobWUuX3ZhbHVlID09PSBudWxsIHx8IE5lby5pc0VtcHR5KG1lLl92YWx1ZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlclZhbHVlID0gbWUuX3ZhbHVlO1xuICAgICAgICByZWNvcmRWYWx1ZSA9IGl0ZW1bbWUuX3Byb3BlcnR5XTtcblxuICAgICAgICBpZiAoZmlsdGVyVmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmIHJlY29yZFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICByZWNvcmRWYWx1ZSA9IHJlY29yZFZhbHVlLnZhbHVlT2YoKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFGaWx0ZXJbbWUuX29wZXJhdG9yXShyZWNvcmRWYWx1ZSwgZmlsdGVyVmFsdWUpXG4gICAgfVxuXG4gICAgc3RhdGljIFsnPT0nXSAoYSwgYikge3JldHVybiBhID09IGJ9XG4gICAgc3RhdGljIFsnPT09J10oYSwgYikge3JldHVybiBhID09PSBifVxuICAgIHN0YXRpYyBbJyE9J10gKGEsIGIpIHtyZXR1cm4gYSAhPSBifVxuICAgIHN0YXRpYyBbJyE9PSddKGEsIGIpIHtyZXR1cm4gYSAhPT0gYn1cbiAgICBzdGF0aWMgWyc8J10gIChhLCBiKSB7cmV0dXJuIGEgPCBifVxuICAgIHN0YXRpYyBbJzw9J10gKGEsIGIpIHtyZXR1cm4gYSA8PSBifVxuICAgIHN0YXRpYyBbJz4nXSAgKGEsIGIpIHtyZXR1cm4gYSA+IGJ9XG4gICAgc3RhdGljIFsnPj0nXSAoYSwgYikge3JldHVybiBhID49IGJ9XG5cbiAgICBzdGF0aWMgWydlbmRzV2l0aCddKGEsIGIpIHtcbiAgICAgICAgaWYgKCFOZW8uaXNTdHJpbmcoYSkpIHthID0gU3RyaW5nKGEpfVxuICAgICAgICBpZiAoIU5lby5pc1N0cmluZyhiKSkge2IgPSBTdHJpbmcoYil9XG5cbiAgICAgICAgcmV0dXJuIGE/LnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoYj8udG9Mb3dlckNhc2UoKSkgfHwgZmFsc2VcbiAgICB9XG5cbiAgICBzdGF0aWMgWydleGNsdWRlZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA8IDBcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpbmNsdWRlZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA+IC0xXG4gICAgfVxuXG4gICAgc3RhdGljIFsnaXNEZWZpbmVkJ10oYSwgYikge1xuICAgICAgICByZXR1cm4gYSAhPT0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgc3RhdGljIFsnaXNVbmRlZmluZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBzdGF0aWMgWydsaWtlJ10oYSwgYikge1xuICAgICAgICBpZiAoIU5lby5pc1N0cmluZyhhKSkge2EgPSBTdHJpbmcoYSl9XG4gICAgICAgIGlmICghTmVvLmlzU3RyaW5nKGIpKSB7YiA9IFN0cmluZyhiKX1cblxuICAgICAgICByZXR1cm4gYT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhiPy50b0xvd2VyQ2FzZSgpKSB8fCBmYWxzZVxuICAgIH1cblxuICAgIHN0YXRpYyBbJ3N0YXJ0c1dpdGgnXShhLCBiKSB7XG4gICAgICAgIGlmICghTmVvLmlzU3RyaW5nKGEpKSB7YSA9IFN0cmluZyhhKX1cbiAgICAgICAgaWYgKCFOZW8uaXNTdHJpbmcoYikpIHtiID0gU3RyaW5nKGIpfVxuXG4gICAgICAgIHJldHVybiBhPy50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYj8udG9Mb3dlckNhc2UoKSkgfHwgZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEZpbHRlcik7XG4iLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5Tb3J0ZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgU29ydGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUuT2JzZXJ2YWJsZSBtaXhpblxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IHRydWVcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbGxlY3Rpb24uU29ydGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5Tb3J0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc29ydGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NvcnRlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBjb25maWcgd2hpY2ggbWFwcyB0aGUgZGlyZWN0aW9uIEFTQyB0byAxLCAtMSBvdGhlcndpc2VcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaXJlY3Rpb25NdWx0aXBsaWVyPTFcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uTXVsdGlwbGllcjogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzb3J0IGRpcmVjdGlvbiB3aGVuIHVzaW5nIGEgcHJvcGVydHkuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uXz0nQVNDJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uXzogJ0FTQycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gbGlzdGVuZXJBcHBsaWVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gc29ydCBieS5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdmlkZSBhIGN1c3RvbSBzb3J0aW5nIGZ1bmN0aW9uLCBoYXMgYSBoaWdoZXIgcHJpb3JpdHkgdGhhbiBwcm9wZXJ0eSAmIGRpcmVjdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBzb3J0Qnk9bnVsbFxuICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0NvbGxhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHVzZSB0aGUgdHJhbnNmb3JtVmFsdWUgbWV0aG9kIGZvciBlYWNoIGl0ZW0gKHRoZSBtZXRob2QgY2FuIGdldCBvdmVycmlkZGVuKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VUcmFuc2Zvcm1WYWx1ZT10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHVzZVRyYW5zZm9ybVZhbHVlOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZGlyZWN0aW9uTXVsdGlwbGllciA9IHZhbHVlID09PSAnQVNDJyA/IDEgOiAtMTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0UHJvcGVydHkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBtZS5kaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgOiBtZS5wcm9wZXJ0eVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHNvcnRlciBmdW5jdGlvbiB3aGljaCBnZXRzIHVzZWQgYnkgY29sbGVjdGlvbnMgaW4gY2FzZSBhdCBsZWFzdCBvbmUgc29ydGVyIGhhcyBhIHJlYWwgc29ydEJ5IG1ldGhvZFxuICAgICAqIEBwYXJhbSBhXG4gICAgICogQHBhcmFtIGJcbiAgICAgKi9cbiAgICBkZWZhdWx0U29ydEJ5KGEsIGIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBhID0gYVttZS5wcm9wZXJ0eV07XG4gICAgICAgIGIgPSBiW21lLnByb3BlcnR5XTtcblxuICAgICAgICBpZiAobWUudXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgIGEgPSBtZS50cmFuc2Zvcm1WYWx1ZShhKTtcbiAgICAgICAgICAgIGIgPSBtZS50cmFuc2Zvcm1WYWx1ZShiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhID4gYikge1xuICAgICAgICAgICAgcmV0dXJuIDEgKiBtZS5kaXJlY3Rpb25NdWx0aXBsaWVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gLTEgKiBtZS5kaXJlY3Rpb25NdWx0aXBsaWVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciByZW1vdGUgc29ydGluZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBleHBvcnQoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2RpcmVjdGlvbiwgcHJvcGVydHl9ID0gbWU7XG5cbiAgICAgICAgaWYgKCFtZS5zb3J0QnkgJiYgZGlyZWN0aW9uICYmIHByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4ge2RpcmVjdGlvbiwgcHJvcGVydHl9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn0gdmFsdWVcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFNvcnRlcik7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENsYXNzU3lzdGVtVXRpbCBmcm9tICcuLi91dGlsL0NsYXNzU3lzdGVtLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250cm9sbGVyLkFwcGxpY2F0aW9uXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5CYXNlXG4gKi9cbmNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUuT2JzZXJ2YWJsZSBtaXhpblxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IHRydWVcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkFwcGxpY2F0aW9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2FwcGxpY2F0aW9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2FwcGxpY2F0aW9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhcHBUaGVtZUZvbGRlcj1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhcHBUaGVtZUZvbGRlcjogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuQmFzZX0gbWFpblZpZXdfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1haW5WaWV3XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdW50ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG5hbWU9J015QXBwJ1xuICAgICAgICAgKi9cbiAgICAgICAgbmFtZTogJ015QXBwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGFyZW50SWQ9J2RvY3VtZW50LmJvZHknXG4gICAgICAgICAqL1xuICAgICAgICBwYXJlbnRJZDogJ2RvY3VtZW50LmJvZHknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gd2luZG93SWQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgd2luZG93SWQ6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICAvLyB0byBndWFyYW50ZWUgdGhhdCB0aGUgbWFpbiB2aWV3IGNhbiBhY2Nlc3MgTmVvLmFwcHMgYXQgYW55IHBvaW50LFxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHRyaWdnZXIgaXRzIGFzc2lnbm1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgY3Rvci5cbiAgICAgICAgbGV0IG1haW5WaWV3ID0gY29uZmlnLm1haW5WaWV3O1xuICAgICAgICBkZWxldGUgY29uZmlnLm1haW5WaWV3O1xuXG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUud2luZG93SWQgPSBOZW8uY29uZmlnLndpbmRvd0lkO1xuXG4gICAgICAgIE5lby5hcHBzID0gTmVvLmFwcHMgfHwge307XG5cbiAgICAgICAgTmVvLmFwcHNbbWUubmFtZV0gPSBtZTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5yZWdpc3RlckFwcChtZS5uYW1lKTtcblxuICAgICAgICBpZiAobWFpblZpZXcpIHtcbiAgICAgICAgICAgIG1lLm1haW5WaWV3ID0gbWFpblZpZXdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWFpblZpZXcgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXN5bmMgYWZ0ZXJTZXRNYWluVmlldyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBzaG9ydCBkZWxheSB0byBlbnN1cmUgY2hhbmdlcyBmcm9tIG9uSGFzaENoYW5nZSgpIGdvdCBhcHBsaWVkXG4gICAgICAgICAgICBhd2FpdCBtZS50aW1lb3V0KE5lby5jb25maWcuaGFzaCA/IDIwMCA6IDEwKTtcblxuICAgICAgICAgICAgYXdhaXQgdmFsdWUucmVuZGVyKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBtYWluVmlldyBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0TWFpblZpZXcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGFwcE5hbWUgOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQ6IHRoaXMucGFyZW50SWQsXG4gICAgICAgICAgICAgICAgd2luZG93SWQ6IE5lby5jb25maWcud2luZG93SWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgdGhlIGFwcCBmcm9tIHRoZSBDU1MgbWFwXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBkZXN0cm95KC4uLmFyZ3MpIHtcbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucmVtb3ZlQXBwRnJvbVRoZW1lTWFwKHRoaXMubmFtZSk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koLi4uYXJncylcbiAgICB9XG59XG5cbkFwcGxpY2F0aW9uID0gTmVvLnNldHVwQ2xhc3MoQXBwbGljYXRpb24pO1xuXG4vLyBjb252ZW5pZW5jZSBzaG9ydGN1dFxuTmVvLmFwcCA9IGNvbmZpZyA9PiBOZW8uY3JlYXRlKHtcbiAgICBtb2R1bGU6IEFwcGxpY2F0aW9uLFxuICAgIC4uLmNvbmZpZ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IEhhc2hIaXN0b3J5IGZyb20gJy4uL3V0aWwvSGFzaEhpc3RvcnkubWpzJztcblxuY29uc3RcbiAgICBhbW91bnRTbGFzaGVzUmVnZXggPSAvXFwvL2csXG4gICAgcm91dGVQYXJhbVJlZ2V4ICAgID0gL3tbXlxccy9dK30vZ1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udHJvbGxlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250cm9sbGVyLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250cm9sbGVyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBVUkwgZG9lcyBub3QgY29udGFpbiBhIGhhc2ggdmFsdWUgd2hlbiBjcmVhdGluZyB0aGlzIGNvbnRyb2xsZXIgaW5zdGFuY2UsXG4gICAgICAgICAqIG5lbyB3aWxsIHNldCB0aGlzIGhhc2ggdmFsdWUgZm9yIHVzLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZGVmYXVsdEhhc2g9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdEhhc2g6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZGVmYXVsdFJvdXRlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRSb3V0ZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaGFuZGxlUm91dGVzPXt9XG4gICAgICAgICAqL1xuICAgICAgICBoYW5kbGVSb3V0ZXM6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogcm91dGVzOiB7XG4gICAgICAgICAqICAgICAnL2hvbWUnICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hhbmRsZUhvbWVSb3V0ZScsXG4gICAgICAgICAqICAgICAnL3VzZXJzL3t1c2VySWR9JyAgICAgICAgICAgICAgIDoge2hhbmRsZXI6ICdoYW5kbGVVc2VyUm91dGUnLCBwcmVIYW5kbGVyOiAncHJlSGFuZGxlVXNlclJvdXRlJ30sXG4gICAgICAgICAqICAgICAnL3VzZXJzL3t1c2VySWR9L3Bvc3RzL3twb3N0SWR9JzogJ2hhbmRsZVBvc3RSb3V0ZScsXG4gICAgICAgICAqICAgICAnZGVmYXVsdCcgICAgICAgICAgICAgICAgICAgICAgIDogJ2hhbmRsZU90aGVyUm91dGVzJ1xuICAgICAgICAgKiB9XG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcm91dGVzXz17fVxuICAgICAgICAgKi9cbiAgICAgICAgcm91dGVzXzoge31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBIYXNoSGlzdG9yeS5vbignY2hhbmdlJywgdGhpcy5vbkhhc2hDaGFuZ2UsIHRoaXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSByb3V0ZXMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Um91dGVzKHZhbHVlLCBvbGRWYWx1ZSl7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcm91dGVLZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICAgICBtZS5yb3V0ZXMgPSByb3V0ZUtleXMuc29ydChtZS4jc29ydFJvdXRlcykucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgbWUuaGFuZGxlUm91dGVzID0ge307XG5cbiAgICAgICAgcm91dGVLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2RlZmF1bHQnKXtcbiAgICAgICAgICAgICAgICBtZS5kZWZhdWx0Um91dGUgPSB2YWx1ZVtrZXldXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmhhbmRsZVJvdXRlc1trZXldID0gbmV3IFJlZ0V4cChrZXkucmVwbGFjZShyb3V0ZVBhcmFtUmVnZXgsICcoW1xcXFx3LS5dKyknKSsnJCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBkZXN0cm95KC4uLmFyZ3MpIHtcbiAgICAgICAgSGFzaEhpc3RvcnkudW4oJ2NoYW5nZScsIHRoaXMub25IYXNoQ2hhbmdlLCB0aGlzKTtcblxuICAgICAgICBzdXBlci5kZXN0cm95KC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhc3luYyBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2RlZmF1bHRIYXNoLCB3aW5kb3dJZH0gPSBtZSxcbiAgICAgICAgICAgIGN1cnJlbnRIYXNoICAgICAgICAgICAgID0gSGFzaEhpc3RvcnkuZmlyc3Qod2luZG93SWQpO1xuXG4gICAgICAgIC8vIGdldCBvdXRzaWRlIHRoZSBjb25zdHJ1Y3Rpb24gY2hhaW4gPT4gYSByZWxhdGVkIGNtcCAmIHZtIGhhcyB0byBiZSBjb25zdHJ1Y3RlZCB0b29cbiAgICAgICAgYXdhaXQgbWUudGltZW91dCgxKTtcblxuICAgICAgICBpZiAoY3VycmVudEhhc2gpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50SGFzaC53aW5kb3dJZCA9PT0gd2luZG93SWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBtZS5vbkhhc2hDaGFuZ2UoY3VycmVudEhhc2gsIG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogd29ya2VyLkFwcDogb25Mb2FkQXBwbGljYXRpb24oKSB3aWxsIHB1c2ggY29uZmlnLmhhc2ggaW50byB0aGUgSGFzaEhpc3Rvcnkgd2l0aCBhIDVtcyBkZWxheS5cbiAgICAgICAgICAgICAqIFdlIG9ubHkgd2FudCB0byBzZXQgYSBkZWZhdWx0IHJvdXRlLCBpbiBjYXNlIHRoZSBIYXNoSGlzdG9yeSBpcyBlbXB0eSBhbmQgdGhlcmUgaXMgbm8gaW5pdGlhbFxuICAgICAgICAgICAgICogdmFsdWUgdGhhdCB3aWxsIGdldCBjb25zdW1lZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgIU5lby5jb25maWcuaGFzaCAmJiBkZWZhdWx0SGFzaCAmJiBOZW8uTWFpbi5zZXRSb3V0ZSh7dmFsdWU6IGRlZmF1bHRIYXNoLCB3aW5kb3dJZH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBtZXRob2Qgd2hpY2ggZ2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgaGFzaCBpbnNpZGUgdGhlIGJyb3dzZXIgdXJsIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhc3luYyBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byB0cmlnZ2VyIGhhc2ggY2hhbmdlcyBmb3IgdGhlIHNhbWUgYnJvd3NlciB3aW5kb3cgKFNoYXJlZFdvcmtlciBjb250ZXh0KVxuICAgICAgICBpZiAodmFsdWUud2luZG93SWQgIT09IHRoaXMud2luZG93SWQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRlciAgICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBoYXNSb3V0ZUJlZW5Gb3VuZCAgICAgID0gZmFsc2UsXG4gICAgICAgICAgICB7aGFuZGxlUm91dGVzLCByb3V0ZXN9ID0gbWUsXG4gICAgICAgICAgICByb3V0ZUtleXMgICAgICAgICAgICAgID0gT2JqZWN0LmtleXMoaGFuZGxlUm91dGVzKSxcbiAgICAgICAgICAgIHJvdXRlS2V5c0xlbmd0aCAgICAgICAgPSByb3V0ZUtleXMubGVuZ3RoLFxuICAgICAgICAgICAgYXJyYXlQYXJhbUlkcywgYXJyYXlQYXJhbVZhbHVlcywgaGFuZGxlciwga2V5LCBwYXJhbU9iamVjdCwgcHJlSGFuZGxlciwgcmVzcG9uc2VQcmVIYW5kbGVyLCByZXN1bHQsIHJvdXRlO1xuXG4gICAgICAgIHdoaWxlIChyb3V0ZUtleXNMZW5ndGggPiAwICYmIGNvdW50ZXIgPCByb3V0ZUtleXNMZW5ndGggJiYgIWhhc1JvdXRlQmVlbkZvdW5kKSB7XG4gICAgICAgICAgICBrZXkgICAgICAgICAgICAgICAgPSByb3V0ZUtleXNbY291bnRlcl07XG4gICAgICAgICAgICBoYW5kbGVyICAgICAgICAgICAgPSBudWxsO1xuICAgICAgICAgICAgcHJlSGFuZGxlciAgICAgICAgID0gbnVsbDtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJlSGFuZGxlciA9IG51bGw7XG4gICAgICAgICAgICBwYXJhbU9iamVjdCAgICAgICAgPSB7fTtcbiAgICAgICAgICAgIHJlc3VsdCAgICAgICAgICAgICA9IHZhbHVlLmhhc2hTdHJpbmcubWF0Y2goaGFuZGxlUm91dGVzW2tleV0pO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgYXJyYXlQYXJhbUlkcyAgICA9IGtleS5tYXRjaChyb3V0ZVBhcmFtUmVnZXgpO1xuICAgICAgICAgICAgICAgIGFycmF5UGFyYW1WYWx1ZXMgPSByZXN1bHQuc3BsaWNlKDEsIHJlc3VsdC5sZW5ndGggLSAxKTtcblxuICAgICAgICAgICAgICAgIGlmIChhcnJheVBhcmFtSWRzICYmIGFycmF5UGFyYW1JZHMubGVuZ3RoICE9PSBhcnJheVBhcmFtVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnTnVtYmVyIG9mIElEcyBhbmQgbnVtYmVyIG9mIFZhbHVlcyBkbyBub3QgbWF0Y2gnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGFycmF5UGFyYW1JZHMgJiYgaSA8IGFycmF5UGFyYW1JZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1PYmplY3RbYXJyYXlQYXJhbUlkc1tpXS5zdWJzdHJpbmcoMSwgYXJyYXlQYXJhbUlkc1tpXS5sZW5ndGggLSAxKV0gPSBhcnJheVBhcmFtVmFsdWVzW2ldXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZXNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgICAgICAgICA9IHJvdXRlO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVByZUhhbmRsZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3Qocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgPSByb3V0ZS5oYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICBwcmVIYW5kbGVyID0gcm91dGUucHJlSGFuZGxlclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGhhc1JvdXRlQmVlbkZvdW5kID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGV4ZWN1dGVcbiAgICAgICAgaWYgKGhhc1JvdXRlQmVlbkZvdW5kKSB7XG4gICAgICAgICAgICBpZiAocHJlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlUHJlSGFuZGxlciA9IGF3YWl0IG1lW3ByZUhhbmRsZXJdPy5jYWxsKG1lLCBwYXJhbU9iamVjdCwgdmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVByZUhhbmRsZXIgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZVByZUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBtZVtoYW5kbGVyXT8uY2FsbChtZSwgcGFyYW1PYmplY3QsIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb3V0ZUtleXMubGVuZ3RoID4gMCAmJiAhaGFzUm91dGVCZWVuRm91bmQpIHtcbiAgICAgICAgICAgIGlmIChtZS5kZWZhdWx0Um91dGUpIHtcbiAgICAgICAgICAgICAgICBtZVttZS5kZWZhdWx0Um91dGVdPy4odmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5vbk5vUm91dGVGb3VuZCh2YWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBtZXRob2Qgd2hpY2ggZ2V0cyB0cmlnZ2VyZWQgd2hlbiBhbiBpbnZhbGlkIHJvdXRlIGlzIGNhbGxlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIG9uTm9Sb3V0ZUZvdW5kKHZhbHVlLCBvbGRWYWx1ZSkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaGVscGVyIG1ldGhvZCB0byBzb3J0IHJvdXRlcyBieSB0aGVpciBhbW91bnQgb2Ygc2xhc2hlc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByb3V0ZTFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcm91dGUyXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICAjc29ydFJvdXRlcyhyb3V0ZTEsIHJvdXRlMikge1xuICAgICAgICByZXR1cm4gKHJvdXRlMS5tYXRjaChhbW91bnRTbGFzaGVzUmVnZXgpIHx8IFtdKS5sZW5ndGggLSAocm91dGUyLm1hdGNoKGFtb3VudFNsYXNoZXNSZWdleCl8fCBbXSkubGVuZ3RoXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhDb250cm9sbGVyKTtcbiIsImltcG9ydCB7YnVmZmVyLCBkZWJvdW5jZSwgaW50ZXJjZXB0LCByZXNvbHZlQ2FsbGJhY2ssIHRocm90dGxlfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9uLm1qcyc7XG5pbXBvcnQgSWRHZW5lcmF0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9JZEdlbmVyYXRvci5tanMnXG5cbmNvbnN0IGNvbmZpZ1N5bWJvbCAgICAgICA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgICAgZm9yY2VBc3NpZ25Db25maWdzID0gU3ltYm9sKCdmb3JjZUFzc2lnbkNvbmZpZ3MnKSxcbiAgICAgIGlzSW5zdGFuY2UgICAgICAgICA9IFN5bWJvbCgnaXNJbnN0YW5jZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciAoYWxtb3N0KSBhbGwgY2xhc3NlcyBpbnNpZGUgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEV4Y2VwdGlvbnMgYXJlIGUuZy4gY29yZS5JZEdlbmVyYXRvciwgdmRvbS5WTm9kZVxuICogQGNsYXNzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSB7XG4gICAgLyoqXG4gICAgICogWW91IGNhbiBkZWZpbmUgbWV0aG9kcyB3aGljaCBzaG91bGQgZ2V0IGRlbGF5ZWQuXG4gICAgICogVHlwZXMgYXJlIGJ1ZmZlciwgZGVib3VuY2UgJiB0aHJvdHRsZS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICBkZWxheWFibGU6IHtcbiAgICAgKiAgICAgIGZpcmVDaGFuZ2VFdmVudDoge1xuICAgICAqICAgICAgICAgIHR5cGUgOiAnZGVib3VuY2UnLFxuICAgICAqICAgICAgICAgIHRpbWVyOiAzMDBcbiAgICAgKiAgICAgIH1cbiAgICAgKiAgfVxuICAgICAqIEBtZW1iZXIge09iamVjdH0gZGVsYXlhYmxlPXt9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVsYXlhYmxlID0ge31cbiAgICAvKipcbiAgICAgKiBGbGFnIHdoaWNoIHdpbGwgZ2V0IHNldCB0byB0cnVlIG9uY2UgbWFuYWdlci5JbnN0YW5jZSBnb3QgY3JlYXRlZFxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluc3RhbmNlTWFuYWdlckF2YWlsYWJsZT1mYWxzZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2VcbiAgICAvKipcbiAgICAgKiBSZWdleCB0byBncmFiIHRoZSBNZXRob2ROYW1lIGZyb20gYW4gZXJyb3JcbiAgICAgKiB3aGljaCBpcyBhIHNlY29uZCBnZW5lcmF0aW9uIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlciB7UmVnRXhwfSBtZXRob2ROYW1lUmVnZXhcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG1ldGhvZE5hbWVSZWdleCA9IC9cXG4uKlxcblxccythdFxccysuKlxcLihcXHcrKVxccysuKi9cbiAgICAvKipcbiAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS5PYnNlcnZhYmxlIG1peGluXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT1mYWxzZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogS2VlcCB0aGUgb3ZlcndyaXR0ZW4gbWV0aG9kc1xuICAgICAqIEBtZW1iZXIge09iamVjdH0gb3ZlcndyaXR0ZW5NZXRob2RzPXt9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb3ZlcndyaXR0ZW5NZXRob2RzID0ge31cbiAgICAvKipcbiAgICAgKiBDb25maWdzIHdpbGwgZ2V0IG1lcmdlZCB0aHJvdWdob3V0IHRoZSBjbGFzcyBoaWVyYXJjaHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBzaG9ydGN1dC1uYW1lIHRvIHVzZSBmb3IgZS5nLiBjcmVhdGluZyBjaGlsZCBjb21wb25lbnRzIGluc2lkZSBhIEpTT04tZm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGlsZSBpdCBpcyByZWNvbW1lbmRlZCB0byBjaGFuZ2UgdGhlIHN0YXRpYyBkZWxheWFibGUgY29uZmlncyBvbiBjbGFzcyBsZXZlbCxcbiAgICAgICAgICogeW91IGNhbiBjaGFuZ2UgaXQgb24gaW5zdGFuY2UgbGV2ZWwgdG9vLiBJZiBub3QgbnVsbCwgd2Ugd2lsbCBkbyBhIGRlZXAgbWVyZ2UuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZGVsYXlhYmxlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5YWJsZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgY29tcG9uZW50IGlkXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaWRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogTmVvLmNyZWF0ZSgpIHdpbGwgY2hhbmdlIHRoaXMgZmxhZyB0byB0cnVlIGFmdGVyIHRoZSBvbkNvbnN0cnVjdGVkKCkgY2hhaW4gaXMgZG9uZS5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNDb25zdHJ1Y3RlZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc0NvbnN0cnVjdGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBtaXhpbnMgYXMgYW4gYXJyYXkgb2YgY2xhc3NOYW1lcywgaW1wb3J0ZWQgbW9kdWxlcyBvciBhIG1peGVkIHZlcnNpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBieSBwYXNzaW5nIGFuIGltcG9ydGVkIGNsYXNzIChKUyBtb2R1bGUgZGVmYXVsdCBleHBvcnQpXG4gICAgICAgICAqIEBtZW1iZXIge0NsYXNzfSBtb2R1bGU9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtb2R1bGU6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBjYWNoZSBmb3IgYWxsIHRpbWVvdXQgaWRzIHdoZW4gdXNpbmcgdGhpcy50aW1lb3V0KClcbiAgICAgKiBAbWVtYmVyIHtOdW1iZXJbXX0gdGltZW91dElkcz1bXVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgI3RpbWVvdXRJZHMgPSBbXVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnPXt9XG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XG4gICAgICAgICAgICBbY29uZmlnU3ltYm9sXToge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgIDoge30sXG4gICAgICAgICAgICAgICAgd3JpdGFibGUgICAgOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW2lzSW5zdGFuY2VdOiB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5jcmVhdGVJZChjb25maWcuaWQgfHwgbWUuaWQpO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5jb25zdHJ1Y3Rvci5jb25maWcuaWRcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpICYmIG1lLmluaXRPYnNlcnZhYmxlKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gYXNzaWduIGNsYXNzIGZpZWxkIHZhbHVlcyBwcmlvciB0byBjb25maWdzXG4gICAgICAgIGNvbmZpZyA9IG1lLnNldEZpZWxkcyhjb25maWcpO1xuXG4gICAgICAgIG1lLmluaXRDb25maWcoY29uZmlnKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5hcHBseURlbGF5YWJsZSgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIFdlIGRvIG5vdCB3YW50IHRvIGZvcmNlIGRldnMgdG8gY2hlY2sgZm9yIHRoZSBgaXNEZXN0cm95ZWRgIGZsYWcgaW4gZXZlcnkgcG9zc2libGUgY2xhc3MgZXh0ZW5zaW9uLlxuICAgICAgICAgKiBTbywgd2UgYXJlIGludGVyY2VwdGluZyB0aGUgdG9wLW1vc3QgYGRlc3Ryb3koKWAgY2FsbCB0byBjaGVjayBmb3IgdGhlIGZsYWcgdGhlcmUuXG4gICAgICAgICAqIFJhdGlvbmFsZTogYGRlc3Ryb3koKWAgbXVzdCBvbmx5IGdldCBjYWxsZWQgb25jZS5cbiAgICAgICAgICovXG4gICAgICAgIGludGVyY2VwdChtZSwgJ2Rlc3Ryb3knLCBtZS5pc0Rlc3Ryb3llZENoZWNrLCBtZSk7XG5cbiAgICAgICAgbWUucmVtb3RlICYmIHNldFRpbWVvdXQobWUuaW5pdFJlbW90ZS5iaW5kKG1lKSwgMSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlkIGNvbmZpZyBnb3QgY2hhbmdlZC5cbiAgICAgKiBZb3UgY2FuIGR5bmFtaWNhbGx5IGNoYW5nZSBpbnN0YW5jZSBpZHMgaWYgbmVlZGVkLiBUaGV5IG5lZWQgdG8gc3RheSB1bmlxdWUgYXQgYW55IGdpdmVuIHBvaW50LlxuICAgICAqIFVzZSBjYXNlOiBlLmcuIGNvbXBvbmVudCBiYXNlZCBsaXN0cywgd2hlcmUgeW91IHdhbnQgdG8gcmUtdXNlIGl0ZW0gaW5zdGFuY2VzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWFuYWdlciA9IEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGhhc01hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG9sZFZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwW29sZFZhbHVlXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaGFzTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0gTmVvLmlkTWFwIHx8IHt9O1xuICAgICAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRqdXN0cyBhbGwgbWV0aG9kcyBpbnNpZGUgc3RhdGljIGRlbGF5YWJsZVxuICAgICAqL1xuICAgIGFwcGx5RGVsYXlhYmxlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yRGVsYXlhYmxlID0gbWUuY29uc3RydWN0b3IuZGVsYXlhYmxlLFxuICAgICAgICAgICAgZGVsYXlhYmxlICAgICA9IG1lLmRlbGF5YWJsZSA/IE5lby5tZXJnZSh7fSwgbWUuZGVsYXlhYmxlLCBjdG9yRGVsYXlhYmxlKSA6IGN0b3JEZWxheWFibGU7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVsYXlhYmxlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtYXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcigpICAge21lW2tleV0gPSBuZXcgYnVmZmVyKG1lW2tleV0sICAgbWUsIHZhbHVlLnRpbWVyKX0sXG4gICAgICAgICAgICAgICAgICAgIGRlYm91bmNlKCkge21lW2tleV0gPSBuZXcgZGVib3VuY2UobWVba2V5XSwgbWUsIHZhbHVlLnRpbWVyKX0sXG4gICAgICAgICAgICAgICAgICAgIHRocm90dGxlKCkge21lW2tleV0gPSBuZXcgdGhyb3R0bGUobWVba2V5XSwgbWUsIHZhbHVlLnRpbWVyKX1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbWFwW3ZhbHVlLnR5cGVdPy4oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5aW5nIG92ZXJ3cml0ZXMgYW5kIGFkZGluZyBvdmVyd3JpdHRlbk1ldGhvZHMgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIGFwcGx5T3ZlcndyaXRlcyhjZmcpIHtcbiAgICAgICAgbGV0IG92ZXJ3cml0ZXMgPSBOZW8ubnMoY2ZnLmNsYXNzTmFtZSwgZmFsc2UsIE5lby5vdmVyd3JpdGVzKSxcbiAgICAgICAgICAgIGNscywgaXRlbTtcblxuICAgICAgICBpZiAob3ZlcndyaXRlcykge1xuICAgICAgICAgICAgLy8gQXBwbHkgYWxsIG1ldGhvZHNcbiAgICAgICAgICAgIGZvciAoaXRlbSBpbiBvdmVyd3JpdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc0Z1bmN0aW9uKG92ZXJ3cml0ZXNbaXRlbV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFscmVhZHkgZXhpc3Rpbmcgb25lc1xuICAgICAgICAgICAgICAgICAgICBjbHMgPSB0aGlzLnByb3RvdHlwZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xzW2l0ZW1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gb3ZlcndyaXR0ZW5NZXRob2RzXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMuY29uc3RydWN0b3Iub3ZlcndyaXR0ZW5NZXRob2RzW2l0ZW1dID0gY2xzW2l0ZW1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZ3MgdG8gcHJvdG90eXBlXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNmZywgb3ZlcndyaXRlcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IHZhbHVlIG9yIG9sZFZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGljTmFtZSkgPyBzdGF0aWNOYW1lIDogdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTdXBwb3J0ZWQgdmFsdWVzIGZvciAke25hbWV9IGFyZTpgLCAuLi52YWx1ZXMsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZm4gICAgICAgICAgICAgICBUaGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9yaWdpbk5hbWUgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCBpbnNpZGUgdGhlIG9yaWdpblNjb3BlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZSAgICAgICAgICAgIFRoZSBzY29wZSB0byBmaW5kIHRoZSBmdW5jdGlvbiBpbiBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9yaWdpblNjb3BlPXRoaXMgVGhlIHNjb3BlIHdoZXJlIHRoZSBmdW5jdGlvbiBpcyBsb2NhdGVkLlxuICAgICAqL1xuICAgIGJpbmRDYWxsYmFjayhmbiwgb3JpZ2luTmFtZSwgc2NvcGU9dGhpcywgb3JpZ2luU2NvcGU9dGhpcykge1xuICAgICAgICBpZiAoZm4gJiYgTmVvLmlzU3RyaW5nKGZuKSkge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHJlc29sdmVDYWxsYmFjayhmbiwgc2NvcGUpO1xuICAgICAgICAgICAgb3JpZ2luU2NvcGVbb3JpZ2luTmFtZV0gPSBoYW5kbGVyLmZuLmJpbmQoaGFuZGxlci5zY29wZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZyb20gd2l0aGluIGFuIG92ZXJ3cml0ZSwgYSBtZXRob2QgY2FuIGNhbGwgYSBwYXJlbnQgbWV0aG9kLCBieSB1c2luZyBjYWxsT3ZlcndyaXR0ZW4uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIGFmdGVyU2V0SGVpZ2h0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAqICAgICAgICAvLyBkbyB0aGUgc3RhbmRhcmRcbiAgICAgKiAgICAgICAgdGhpcy5jYWxsT3ZlcndyaXR0ZW4oLi4uYXJndW1lbnRzKTtcbiAgICAgKiAgICAgICAgLy8gZG8geW91IG93biBzdHVmZlxuICAgICAqICAgIH1cbiAgICAgKlxuICAgICAqIFdlIGNyZWF0ZSBhbiBlcnJvciB0byBnZXQgdGhlIGNhbGxlci5uYW1lIGFuZCB0aGVuIHJ1biB0aGF0IG1ldGhvZCBvbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICogVGhpcyBpcyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIGVycm9yIHN0cnVjdHVyZSwgZS5nLiBhZnRlclNldEhlaWdodC5cbiAgICAgKlxuICAgICAqICAgICBFcnJvclxuICAgICAqICAgICAgICAgYXQgQmFzZS5jYWxsT3ZlcndyaXR0ZW4gKEJhc2UubWpzOjE3NjoyMSlcbiAgICAgKiAgICAgICAgIGF0IEJhc2UuYWZ0ZXJTZXRIZWlnaHQgKE92ZXJyaWRlcy5tanM6MTk6MjYpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGNhbGxPdmVyd3JpdHRlbiguLi5hcmdzKSB7XG4gICAgICAgIGxldCBzdGFjayAgICAgID0gbmV3IEVycm9yKCkuc3RhY2ssXG4gICAgICAgICAgICBtZXRob2ROYW1lID0gc3RhY2subWF0Y2goQmFzZS5tZXRob2ROYW1lUmVnZXgpWzFdO1xuXG4gICAgICAgIHRoaXMuX19wcm90b19fLmNvbnN0cnVjdG9yLm92ZXJ3cml0dGVuTWV0aG9kc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgSWRHZW5lcmF0b3IgdG8gY3JlYXRlIGFuIGlkIGlmIGEgc3RhdGljIG9uZSBpcyBub3QgZXhwbGljaXRseSBzZXQuXG4gICAgICogUmVnaXN0ZXJzIHRoZSBpbnN0YW5jZSB0byBtYW5hZ2VyLkluc3RhbmNlIGlmIHRoaXMgb25lIGlzIGFscmVhZHkgY3JlYXRlZCxcbiAgICAgKiBvdGhlcndpc2Ugc3RvcmVzIGl0IGluc2lkZSBhIHRtcCBtYXAuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgY3JlYXRlSWQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IElkR2VuZXJhdG9yLmdldElkKHRoaXMuZ2V0SWRLZXkoKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcbiAgICAgKiBhbmQgcmVtb3ZlcyBhbGwgb2JqZWN0IGVudHJpZXMgZnJvbSB0aGlzIGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS4jdGltZW91dElkcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG1lKVxuICAgICAgICB9IGVsc2UgaWYgKE5lby5pZE1hcCkge1xuICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFttZS5pZF1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtZSwga2V5KS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIG11c3Qgbm90IGRlbGV0ZSB0aGUgY3VzdG9tIGRlc3Ryb3koKSBpbnRlcmNlcHRvclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdkZXN0cm95JyAmJiBrZXkgIT09ICdfaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtrZXldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXZSBkbyB3YW50IHRvIHByZXZlbnQgZGVsYXllZCBldmVudCBjYWxscyBhZnRlciBhbiBvYnNlcnZhYmxlIGluc3RhbmNlIGdvdCBkZXN0cm95ZWQuXG4gICAgICAgIGlmIChOZW8uaXNGdW5jdGlvbihtZS5maXJlKSkge1xuICAgICAgICAgICAgbWUuZmlyZSA9IE5lby5lbXB0eUZuXG4gICAgICAgIH1cblxuICAgICAgICBtZS5pc0Rlc3Ryb3llZCA9IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGluc2lkZSBjcmVhdGVJZCgpIGFzIHRoZSBkZWZhdWx0IHZhbHVlIHBhc3NlZCB0byB0aGUgSWRHZW5lcmF0b3IuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgYXMgbmVlZGVkLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm50eXBlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGtleSBvciB0aGUgc3RhdGljQ29uZmlnIG9iamVjdCBpdHNlbGYgaW4gY2FzZSBubyB2YWx1ZSBpcyBzZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Jba2V5XVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgZ2l2ZW4gbnR5cGUgZXhpc3RzIGluc2lkZSB0aGUgcHJvdG8gY2hhaW4sIGluY2x1ZGluZyB0aGUgdG9wIGxldmVsIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG50eXBlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzTnR5cGUobnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubnR5cGVDaGFpbi5pbmNsdWRlcyhudHlwZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBvbkNvbnN0cnVjdGVkKCkgaXMgZG9uZVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb3JlLkJhc2Ujb25Db25zdHJ1Y3RlZCBvbkNvbnN0cnVjdGVkfVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhbGwgY2xhc3MgY29uZmlncyB0byB0aGlzIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGluaXRDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pc0NvbmZpZ3VyaW5nID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCBtZS5tZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykpO1xuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgICAgICBtZS5pc0NvbmZpZ3VyaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG9lcyBnZXQgdHJpZ2dlcmVkIHdpdGggYSBkZWxheSB0byBlbnN1cmUgdGhhdCBOZW8ud29ya2VySWQgJiBOZW8ud29ya2VyLk1hbmFnZXIgYXJlIGRlZmluZWRcbiAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyB2aWEgcHJvbWlzZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2NsYXNzTmFtZSwgcmVtb3RlfSA9IG1lLFxuICAgICAgICAgICAge2N1cnJlbnRXb3JrZXJ9ICAgICA9IE5lbztcblxuICAgICAgICBpZiAoIW1lLnNpbmdsZXRvbiAmJiAhbWUuaXNNYWluVGhyZWFkQWRkb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIG1ldGhvZCBhY2Nlc3MgaXMgb25seSBmdW5jdGlvbmFsIGZvciBTaW5nbGV0b24gY2xhc3NlcyAnICsgY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nICYmIGN1cnJlbnRXb3JrZXIuaXNTaGFyZWRXb3JrZXIgJiYgIWN1cnJlbnRXb3JrZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpXG4gICAgICAgICAgICAgICAgfSwgbWUsIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVyY2VwdHMgZGVzdHJveSgpIGNhbGxzIHRvIGVuc3VyZSB0aGV5IHdpbGwgb25seSBnZXQgY2FsbGVkIG9uY2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0Rlc3Ryb3llZENoZWNrKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNEZXN0cm95ZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgY3RvciA9IG1lLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVvLmFwcGx5Q2xhc3NDb25maWcgaGFzIG5vdCBiZWVuIHJ1biBvbiAnICsgbWUuY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgICAgIG1lLm9yaWdpbmFsQ29uZmlnID0gTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Li4uY3Rvci5jb25maWcsIC4uLmNvbmZpZ31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pc0NvbnN0cnVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBXZSBjYW4gb25seSBmaXJlIHRoZSBldmVudCBpbiBjYXNlIHRoZSBPYnNlcnZhYmxlIG1peGluIGlzIGluY2x1ZGVkLlxuICAgICAgICBtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSAmJiBtZS5maXJlKCdjb25zdHJ1Y3RlZCcsIG1lKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVwbGFjZSBzdHJpbmcgYmFzZWQgdmFsdWVzIGNvbnRhaW5pbmcgXCJAY29uZmlnOlwiIHdpdGggdGhlIG1hdGNoaW5nIGNvbmZpZyB2YWx1ZVxuICAgICAqIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGl0ZW1zXG4gICAgICovXG4gICAgcGFyc2VJdGVtQ29uZmlncyhpdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbnMsIG5zQXJyYXksIG5zS2V5LCBzeW1ib2xOcztcblxuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFtpdGVtc11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtICYmIE9iamVjdC5lbnRyaWVzKGl0ZW0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3ModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnNBcnJheSA9IHZhbHVlLnN1YnN0cmluZyg4KS50cmltKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zS2V5ICAgPSBuc0FycmF5LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnMgICAgICA9IE5lby5ucyhuc0FycmF5LCBmYWxzZSwgbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnNbbnNLZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIG5zS2V5LCBuc0FycmF5LmpvaW4oJy4nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sTnMgPSBOZW8ubnMobnNBcnJheSwgZmFsc2UsIG1lW2NvbmZpZ1N5bWJvbF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGNvbmZpZyBtaWdodCBub3QgYmUgcHJvY2Vzc2VkIHlldCwgZXNwZWNpYWxseSBmb3IgY29uZmlnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBlbmRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBjb25maWdTeW1ib2wgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbE5zICYmIE9iamVjdC5oYXNPd24oc3ltYm9sTnMsIG5zS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBzeW1ib2xOc1tuc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBuc1tuc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgc2V0KCksIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmUgY2FuIGFscmVhZHkgYmUgYXNzaWduZWQsXG4gICAgICogc28gdGhlIGhhc093blByb3BlcnR5KCkgY2hlY2sgd2lsbCByZXR1cm4gdHJ1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlQXNzaWduPWZhbHNlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbj1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgbWVbZm9yY2VBc3NpZ25Db25maWdzXSA9IGZvcmNlQXNzaWduO1xuXG4gICAgICAgIC8vIFdlIGRvIG5vdCB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgMSBjb25maWcgY2FuIHJlbW92ZSBtb3JlIHRoYW4gMSBrZXkgKGJlZm9yZVNldFgsIGFmdGVyU2V0WClcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gVGhlIGhhc093blByb3BlcnR5IGNoZWNrIGlzIGludGVuZGVkIGZvciBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlXG4gICAgICAgICAgICAvLyA9PiB0aGV5IGNvdWxkIGFscmVhZHkgaGF2ZSBiZWVuIGFzc2lnbmVkIGluc2lkZSBhbiBhZnRlclNldC1tZXRob2RcbiAgICAgICAgICAgIGlmIChmb3JjZUFzc2lnbiB8fCAhbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXlzWzBdXSA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUtY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8ga2VlcCB0aGlzIG9uZSBmb3IgY29uZmlncywgd2hpY2ggZG8gbm90IHVzZSBnZXR0ZXJzIChubyB0cmFpbGluZyB1bmRlcnNjb3JlKVxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG5cbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIHNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKSB7XG4gICAgICAgIGxldCBvcmlnaW47XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVtb3RlKS5mb3JFYWNoKChbd29ya2VyLCBtZXRob2RzXSkgPT4ge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luID0gTmVvLndvcmtlcklkID09PSAnbWFpbicgPyBOZW8ud29ya2VyLk1hbmFnZXIgOiBOZW8uY3VycmVudFdvcmtlcjtcblxuICAgICAgICAgICAgICAgIG9yaWdpbi5zZW5kTWVzc2FnZSh3b3JrZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJSZW1vdGUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtdWx0aXBsZSBjb25maWdzIGF0IG9uY2UsIGVuc3VyaW5nIHRoYXQgYWxsIGFmdGVyU2V0IG1ldGhvZHMgZ2V0IGFsbCBuZXcgYXNzaWduZWQgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxuICAgICAqL1xuICAgIHNldCh2YWx1ZXM9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZXMgPSBtZS5zZXRGaWVsZHModmFsdWVzKTtcblxuICAgICAgICAvLyBJZiB0aGUgaW5pdGlhbCBjb25maWcgcHJvY2Vzc2luZyBpcyBzdGlsbCBydW5uaW5nLFxuICAgICAgICAvLyBmaW5pc2ggdGhpcyBvbmUgZmlyc3QgYmVmb3JlIGRyb3BwaW5nIG5ldyB2YWx1ZXMgaW50byB0aGUgY29uZmlnU3ltYm9sLlxuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy8yMjAxXG4gICAgICAgIGlmIChtZVtmb3JjZUFzc2lnbkNvbmZpZ3NdICE9PSB0cnVlICYmIE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKClcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgdmFsdWVzKTtcblxuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncyh0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHdhbnQgdG8gYXNzaWduIGNsYXNzIGZpZWxkcyBmaXJzdCBhbmQgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgY29uZmlnIG9iamVjdCxcbiAgICAgKiBzbyB0aGF0IGFmdGVyU2V0KCksIGJlZm9yZUdldCgpIGFuZCBiZWZvcmVTZXQoKSBtZXRob2RzIGNhbiBnZXQgdGhlIG5ldyB2YWx1ZXMgcmlnaHQgYXdheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZXRGaWVsZHMoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWdOYW1lcyA9IG1lLmNvbnN0cnVjdG9yLmNvbmZpZztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb25maWdOYW1lcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICFOZW8uaGFzUHJvcGVydHlTZXR0ZXIobWUsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZ1trZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBieSBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbmZpZyBleGlzdHMgYW5kIGdvdCBjaGFuZ2VkXG4gICAgICovXG4gICAgc2V0U3RhdGljQ29uZmlnKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHN0YXRpY0NvbmZpZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIGlmIChzdGF0aWNDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgc3RhdGljQ29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgdGltZW91dElkcyBpbnRlcm5hbGx5LCBzbyB0aGF0IGRlc3Ryb3koKSBjYW4gY2xlYXIgdGhlbSBpZiBuZWVkZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHRpbWVvdXQodGltZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBsZXQgdGltZW91dElkcyA9IHRoaXMuI3RpbWVvdXRJZHMsXG4gICAgICAgICAgICAgICAgdGltZW91dElkICA9IHNldFRpbWVvdXQoKCkgPT4ge3RpbWVvdXRJZHMuc3BsaWNlKHRpbWVvdXRJZHMuaW5kZXhPZih0aW1lb3V0SWQpLCAxKTsgcmVzb2x2ZSgpfSwgdGltZSk7XG5cbiAgICAgICAgICAgIHRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cbiAgICAgKiBgTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmJ1dHRvbi5CYXNlIChuZW8tYnV0dG9uLTEpXVwiYFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGFzc05hbWV9IChpZDogJHt0aGlzLmlkfSlgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIDxwPldpdGggdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxuICAgICAqIGBOZW8uY3JlYXRlKE5lby5jb2xsZWN0aW9uLkJhc2UpIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkge1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEJhc2UpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLkNvbXBhcmVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQ29tcGFyZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQ29tcGFyZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQ29tcGFyZSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yaW5nIHRoZSBjb21wYXJpc29uIG1ldGhvZCBuYW1lcyBieSBkYXRhIHR5cGVcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcFxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAgPSB7XG4gICAgICAgIEFycmF5ICAgICAgOiAnY29tcGFyZUFycmF5cycsXG4gICAgICAgIERhdGUgICAgICAgOiAnY29tcGFyZURhdGVzJyxcbiAgICAgICAgRnVuY3Rpb24gICA6ICdjb21wYXJlRnVuY3Rpb25zJyxcbiAgICAgICAgTWFwICAgICAgICA6ICdjb21wYXJlTWFwcycsXG4gICAgICAgIE5lb0luc3RhbmNlOiAnY29tcGFyZU5lb0luc3RhbmNlcycsXG4gICAgICAgIE9iamVjdCAgICAgOiAnY29tcGFyZU9iamVjdHMnLFxuICAgICAgICBSZWdFeHAgICAgIDogJ2NvbXBhcmVSZWdFeHBzJyxcbiAgICAgICAgU2V0ICAgICAgICA6ICdjb21wYXJlU2V0cydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVBcnJheXMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMS5sZW5ndGggIT09IGl0ZW0yLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IFtpLCB2XSBvZiBpdGVtMS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKHYsIGl0ZW0yW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtEYXRlfSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlRGF0ZXMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIHJldHVybiBpdGVtMS52YWx1ZU9mKCkgPT09IGl0ZW0yLnZhbHVlT2YoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZW0xXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZUZ1bmN0aW9ucyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xLm5hbWUgIT09IGl0ZW0yLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW0xLnRvU3RyaW5nKCkgPT09IGl0ZW0yLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01hcH0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge01hcH0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZU1hcHMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMS5zaXplICE9PSBpdGVtMi5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwyO1xuXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBpdGVtMSkge1xuICAgICAgICAgICAgdmFsMiA9IGl0ZW0yLmdldChrZXkpO1xuXG4gICAgICAgICAgICBpZiAodmFsMiAhPT0gdmFsIHx8IHZhbDIgPT09IHVuZGVmaW5lZCAmJiAhaXRlbTIuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZU5lb0luc3RhbmNlcyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0xLmlkID09PSBpdGVtMi5pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtMVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlT2JqZWN0cyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0xKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGl0ZW0yKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0xKSB7XG4gICAgICAgICAgICBpZiAoIUNvbXBhcmUuaXNFcXVhbChpdGVtMVtrZXldLCBpdGVtMltrZXldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZVJlZ0V4cHMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIHJldHVybiBpdGVtMS50b1N0cmluZygpID09PSBpdGVtMi50b1N0cmluZygpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZXR9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtTZXR9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVTZXRzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgaXRlbTEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbTIuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFcXVhbChpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xID09PSBpdGVtMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlMSA9IE5lby50eXBlT2YoaXRlbTEpLFxuICAgICAgICAgICAgdHlwZTIgPSBOZW8udHlwZU9mKGl0ZW0yKTtcblxuICAgICAgICBpZiAodHlwZTEgIT09IHR5cGUyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wYXJlLm1hcFt0eXBlMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBDb21wYXJlW0NvbXBhcmUubWFwW3R5cGUxXV0oaXRlbTEsIGl0ZW0yKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIG90aGVyIHR5cGVzXG4gICAgICAgIHJldHVybiBpdGVtMSA9PT0gaXRlbTJcbiAgICB9XG59XG5cbkNvbXBhcmUgPSBOZW8uc2V0dXBDbGFzcyhDb21wYXJlKTtcblxuLy8gYWxpYXNcbk5lby5pc0VxdWFsID0gQ29tcGFyZS5pc0VxdWFsO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlO1xuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdldHMgdXNlZCBieSBjb3JlLkJhc2UsIHNvIGl0IGNhbiBub3QgZXh0ZW5kIGl0LlxuICogSXQgY291bGQgZ2V0IHNpbXBsaWZpZWQgdG8ganVzdCBiZWluZyBhbiBvYmplY3QgKG5lZWRzIHRvIG1hbnVhbGx5IGdldCBwdXQgaW50byB0aGUgTmVvIG5hbWVzcGFjZSBpbiB0aGlzIGNhc2UpLlxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIElkR2VuZXJhdG9yIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLklkR2VuZXJhdG9yJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaWQtZ2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhc2U9J25lby0nXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlOiAnbmVvLScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249J3RydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcblxuICAgICAgICAvLyBhbGlhc1xuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoSWRHZW5lcmF0b3IpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCB7cmVzb2x2ZUNhbGxiYWNrfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9uLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLk9ic2VydmFibGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuT2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSBldmVudElkIG51bGwgaW4gY2FzZSBhbiBvYmplY3QgZ2V0cyBwYXNzZWQgYXMgdGhlIG5hbWUgKG11bHRpcGxlIGlkcylcbiAgICAgKi9cbiAgICBhZGRMaXN0ZW5lcihuYW1lLCBvcHRzLCBzY29wZSwgZXZlbnRJZCwgZGF0YSwgb3JkZXIpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsYXkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBldmVudElkT2JqZWN0ID0gdHlwZW9mIGV2ZW50SWQgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgbmFtZU9iamVjdCAgICA9IHR5cGVvZiBuYW1lICAgID09PSAnb2JqZWN0JyxcbiAgICAgICAgICAgIG9uY2UgICAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIG9wdHNUeXBlICAgICAgPSB0eXBlb2Ygb3B0cyxcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogbGV0IHVzIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBmb3JtYXQgdG9vOlxuICAgICAgICAgKlxuICAgICAgICAgKiBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAqICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKVxuICAgICAgICAgKiB9LCBtZSwge29uY2U6IHRydWV9KVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGV2ZW50SWRPYmplY3QgJiYgb3B0c1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50SWQuZm4gPSBvcHRzO1xuICAgICAgICAgICAgb3B0cyAgICAgPSBldmVudElkO1xuICAgICAgICAgICAgb3B0c1R5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICAgIGV2ZW50SWQgID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnZGVsYXknKSkge1xuICAgICAgICAgICAgICAgIGRlbGF5ID0gbmFtZS5kZWxheTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5kZWxheVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnb25jZScpKSB7XG4gICAgICAgICAgICAgICAgb25jZSA9IG5hbWUub25jZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5vbmNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdvcmRlcicpKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIgPSBuYW1lLm9yZGVyO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLm9yZGVyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdzY29wZScpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwge2RlbGF5LCBvbmNlLCBvcmRlciwgc2NvcGUsIC4uLnZhbHVlfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihrZXksIHtkZWxheSwgZm46IHZhbHVlLCBvbmNlLCBvcmRlciwgc2NvcGV9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAob3B0c1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkZWxheSAgICA9IGRlbGF5ICAgfHwgb3B0cy5kZWxheTtcbiAgICAgICAgICAgIGV2ZW50SWQgID0gZXZlbnRJZCB8fCBvcHRzLmV2ZW50SWQ7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHMuZm47XG4gICAgICAgICAgICBvbmNlICAgICA9IG9uY2UgICAgfHwgb3B0cy5vbmNlO1xuICAgICAgICAgICAgb3JkZXIgICAgPSBvcmRlciAgIHx8IG9wdHMub3JkZXI7XG4gICAgICAgICAgICBzY29wZSAgICA9IHNjb3BlICAgfHwgb3B0cy5zY29wZVxuICAgICAgICB9IGVsc2UgaWYgKG9wdHNUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHNcbiAgICAgICAgfSBlbHNlIGlmIChvcHRzVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkTGlzdGVuZXIgY2FsbDogJyArIG5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnID0ge2ZuOiBsaXN0ZW5lciwgaWQ6IGV2ZW50SWQgfHwgTmVvLmdldElkKCdldmVudCcpfTtcblxuICAgICAgICAgICAgaWYgKGRhdGEpICAgICAge2V2ZW50Q29uZmlnLmRhdGEgICA9IGRhdGF9XG4gICAgICAgICAgICBpZiAoZGVsYXkgPiAwKSB7ZXZlbnRDb25maWcuZGVsYXkgID0gZGVsYXl9XG4gICAgICAgICAgICBpZiAob25jZSkgICAgICB7ZXZlbnRDb25maWcub25jZSAgID0gb25jZX1cbiAgICAgICAgICAgIGlmIChzY29wZSkgICAgIHtldmVudENvbmZpZy5zY29wZSAgPSBzY29wZX1cblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzPy5bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcuaWQgPT09IGV2ZW50SWQgfHwgKGNmZy5mbiA9PT0gbGlzdGVuZXIgJiYgY2ZnLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOicsIG5hbWUsIG1lKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yZGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50Q29uZmlnLmlkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhlIHBhc3NlZCBmdW5jdGlvbiwgb3IgYSBmdW5jdGlvbiBieSAqbmFtZSogd2hpY2ggZXhpc3RzIGluIHRoZSBwYXNzZWQgc2NvcGUnc1xuICAgICAqIG9yIHRoaXMgY29tcG9uZW50J3Mgb3duZXJzaGlwIGNoYWluLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBBIGZ1bmN0aW9uLCBvciB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlICAgICAgIFRoZSBzY29wZSB0byBmaW5kIHRoZSBmdW5jdGlvbiBpbiBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyAgICAgICAgIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBjYWxsYmFjayhmbiwgc2NvcGU9dGhpcywgYXJncykge1xuICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSByZXNvbHZlQ2FsbGJhY2soZm4sIHNjb3BlKTtcbiAgICAgICAgICAgIGhhbmRsZXIuZm4uYXBwbHkoaGFuZGxlci5zY29wZSwgYXJncylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGhlbHBlciBtZXRob2QgZm9yIGV2ZW50cyB3aGljaCB1c2UgdGhlIGRlbGF5IG9wdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAgICAgKi9cbiAgICBkZWxheWVkQ2FsbGJhY2soY2IsIGFyZ3MsIGRlbGF5KSB7XG4gICAgICAgIHRoaXMudGltZW91dChkZWxheSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjYi5mbi5hcHBseShjYi5zY29wZSwgYXJncylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIGZpcmUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcbiAgICAgICAgICAgIGRlbGF5LCBoYW5kbGVyLCBoYW5kbGVycywgaSwgbGVuO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IFsuLi5saXN0ZW5lcnNbbmFtZV1dO1xuICAgICAgICAgICAgbGVuICAgICAgPSBoYW5kbGVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcbiAgICAgICAgICAgICAgICBkZWxheSAgID0gaGFuZGxlci5kZWxheTtcblxuICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgZnVuY3Rpb24gbmFtZSBvbiB0aGUgc2NvcGUgKG9yIG1lKSwgb3IsIGlmIGl0IHN0YXJ0cyB3aXRoICd1cC4nXG4gICAgICAgICAgICAgICAgLy8gbG9vayBpbiB0aGUgb3duZXJzaGlwIGhpZXJhcmNoeSBmcm9tIG1lLlxuICAgICAgICAgICAgICAgIGNvbnN0IGNiID0gcmVzb2x2ZUNhbGxiYWNrKGhhbmRsZXIuZm4sIGhhbmRsZXIuc2NvcGUgfHwgbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBsaXN0ZW5lciBpZiB0aGUgc2NvcGUgbm8gbG9uZ2VyIGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmIChjYi5zY29wZSAmJiAhY2Iuc2NvcGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGxpc3RlbmVyc1tuYW1lXSwgaGFuZGxlcilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lLnN1c3BlbmRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdCBldmVudCBmb3JtYXQuIEluamVjdCBmaXJlciByZWZlcmVuY2UgaW4gYXMgJ3NvdXJjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBOZW8uaXNPYmplY3QoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzWzBdLnNvdXJjZSA9IG1lLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGlzdGVuZXIgaWYgaXQgaGFzIHRoZSBvbmNlIGZsYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIub25jZSAmJiBOZW9BcnJheS5yZW1vdmUobGlzdGVuZXJzW25hbWVdLCBoYW5kbGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc051bWJlcihkZWxheSkgJiYgZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuZGVsYXllZENhbGxiYWNrKGNiLCBoYW5kbGVyLmRhdGEgPyBhcmdzLmNvbmNhdChoYW5kbGVyLmRhdGEpIDogYXJncywgZGVsYXkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiLmZuLmFwcGx5KGNiLnNjb3BlLCBoYW5kbGVyLmRhdGEgPyBhcmdzLmNvbmNhdChoYW5kbGVyLmRhdGEpIDogYXJncylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHByb3RvID0gbWUuX19wcm90b19fLFxuICAgICAgICAgICAgY3RvciAgPSBwcm90by5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzID0gY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzXG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnM7XG5cbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChsaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gey4uLmxpc3RlbmVyc31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90bz8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgY3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICBpZiAoY3Rvci5vYnNlcnZhYmxlICYmICFjdG9yLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvciwge1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lciAgIDogbWUuYWRkTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIGZpcmUgICAgICAgICAgOiBtZS5maXJlLFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge30sXG4gICAgICAgICAgICAgICAgICAgIG9uICAgICAgICAgICAgOiBtZS5vbixcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IG1lLnJlbW92ZUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICB1biAgICAgICAgICAgIDogbWUudW5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fX1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGFkZExpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29yZGVyXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGV2ZW50SWRcbiAgICAgKi9cbiAgICBvbiguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlcmUgYXJlIGRpZmZlcmVudCBzeW50YXgncyBob3cgeW91IGNhbiB1c2UgdGhpcyBtZXRob2QuXG4gICAgICogVXNpbmcgdGhlIGV2ZW50SWQ6XG4gICAgICogYGBgXG4gICAgICogdGhpcy5yZW1vdmVMaXN0ZW5lcignY2hhbmdlJywgJ25lby1ldmVudC03Jyk7XG4gICAgICogYGBgXG4gICAgICogUGFzc2luZyB0aGUgaGFuZGxlciBtZXRob2Q6XG4gICAgICogYGBgXG4gICAgICogdGhpcy5yZW1vdmVMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkNoYW5nZSwgdGhpcyk7XG4gICAgICogYGBgXG4gICAgICogUGFzc2luZyBhbiBvYmplY3Q6XG4gICAgICogYGBgXG4gICAgICogbWUuZmllbGQudW4oe1xuICAgICAqICAgICBjaGFuZ2UgICAgICAgICAgICAgICAgICAgIDogbWUub25GaWVsZENoYW5nZSxcbiAgICAgKiAgICAgY2hhbmdlQ2xlYXJUb09yaWdpbmFsVmFsdWU6IG1lLm9uRmllbGRDaGFuZ2UsXG4gICAgICogICAgIHNjb3BlICAgICAgICAgICAgICAgICAgICAgOiBtZVxuICAgICAqIH0pO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IFtzY29wZV1cbiAgICAgKi9cbiAgICByZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudElkLCBzY29wZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lciwgbGlzdGVuZXJzLCBtYXRjaDtcblxuICAgICAgICBpZiAoTmVvLmlzRnVuY3Rpb24oZXZlbnRJZCkpIHtcbiAgICAgICAgICAgIG1lLnJlbW92ZUxpc3RlbmVyKHtbbmFtZV06IGV2ZW50SWQsIHNjb3BlfSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QobmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLnNjb3BlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnNba2V5XSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpICAgICAgICAgPSAwO1xuICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmZuLm5hbWUgPT09IChOZW8uaXNTdHJpbmcodmFsdWUpID8gdmFsdWUgOiB2YWx1ZS5uYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuc2NvcGUgICA9PT0gc2NvcGVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgbWF0Y2ggICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChldmVudENvbmZpZywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA9IGlkeFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHN1c3BlbmRMaXN0ZW5lcnM6IGZ1bmN0aW9uKHF1ZXVlKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gcmVzdW1lTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciByZW1vdmVMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKi9cbiAgICB1biguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhPYnNlcnZhYmxlKTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5VdGlsXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFV0aWwgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZ2V4IHRvIHJlbW92ZSBjYW1lbCBjYXNlIHN5bnRheFxuICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZGVjYW1lbFJlZ0V4PS8oW2Etel0pKFtBLVpdKS9nXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjYW1lbFJlZ0V4ID0gLyhbYS16XSkoW0EtWl0pL2dcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuVXRpbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3JlLXV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlc1xuICAgICAqL1xuICAgIHN0YXRpYyBiaW5kTWV0aG9kcyhzY29wZSwgdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNjb3BlW3ZhbHVlXSA9IHNjb3BlW3ZhbHVlXS5iaW5kKHNjb3BlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHlsZXMgc3RyaW5nIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlT2JqZWN0KHN0cmluZykge1xuICAgICAgICBsZXQgcGFydHM7XG5cbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXG5cbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgYnkgdGhlIGZpcnN0IGNvbG9uIG9ubHlcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlRmxvYXQoeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG9ialtwYXJ0c1swXV0gPSBwYXJ0c1sxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9LCB7fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0eWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3R5bGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIC1sb3dlcmNhc2UuXG4gICAgICogRG9lcyBub3QgdG91Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBsb3dlcmNhc2Ugb3V0cHV0XG4gICAgICovXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoVXRpbC5kZWNhbWVsUmVnRXgsICckMS0kMicpLnRvTG93ZXJDYXNlKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgbm90IHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fFN0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci4gUmV0dXJucyBmYWxzZSBmb3Igbm9uLWZpbml0ZSBudW1iZXJzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8uY29uc3RydWN0b3I/Lm5hbWUgPT09ICdPYmplY3QnIHx8IGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBuZW8gZGF0YSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNSZWNvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gJ1JlY29yZCcgfHwgZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZXJhYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBsZW47XG5cbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYWJsZS5zcGxpdCgnJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbilcbiAgICB9XG59XG5cblV0aWwgPSBOZW8uc2V0dXBDbGFzcyhVdGlsKTtcblxuLy8gYWxpYXNlc1xuTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgIGJpbmRNZXRob2RzICAgICAgOiAnYmluZE1ldGhvZHMnLFxuICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXG4gICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICBpc0VtcHR5ICAgICAgICAgIDogJ2lzRW1wdHknLFxuICAgIGlzRnVuY3Rpb24gICAgICAgOiAnaXNGdW5jdGlvbicsXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXG4gICAgaXNSZWNvcmQgICAgICAgICA6ICdpc1JlY29yZCcsXG4gICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xufSwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcGFyZSAgICAgZnJvbSAnLi9Db21wYXJlLm1qcyc7XG5pbXBvcnQgSWRHZW5lcmF0b3IgZnJvbSAnLi9JZEdlbmVyYXRvci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgIGZyb20gJy4vVXRpbC5tanMnO1xuXG5leHBvcnQge0Jhc2UsIENvbXBhcmUsIElkR2VuZXJhdG9yLCBPYnNlcnZhYmxlLCBVdGlsfTtcbiIsImltcG9ydCBDb2xsZWN0aW9uIGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIHRoZSBvdGhlciBtYW5hZ2VyIGNsYXNzZXNcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29sbGVjdGlvbi5CYXNlXG4gKi9cbmNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBDb2xsZWN0aW9ue1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuQmFzZSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiBpZCAmJiB0aGlzLmdldChpZCkgfHwgbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgcmVnaXN0ZXIoaXRlbSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5nZXQoaXRlbS5pZCkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignVHJ5aW5nIHRvIGNyZWF0ZSBhbiBpdGVtIHdpdGggYW4gYWxyZWFkeSBleGlzdGluZyBpZCcsIGl0ZW0sIG1lLmdldChpdGVtLmlkKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnB1c2goaXRlbSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb2xsZWN0aW9uIGl0ZW0gcGFzc2VkIGJ5IHJlZmVyZW5jZSBvciBrZXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZW1cbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoaXRlbSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKE1hbmFnZXIpO1xuIiwiaW1wb3J0IE1hbmFnZXIgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgZnJvbSAnLi4vdXRpbC9WRG9tLm1qcyc7XG5pbXBvcnQgVk5vZGVVdGlsIGZyb20gJy4uL3V0aWwvVk5vZGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8ubWFuYWdlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIE1hbmFnZXIge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TWFwfSB3cmFwcGVyTm9kZXM9bmV3IE1hcCgpXG4gICAgICovXG4gICAgd3JhcHBlck5vZGVzID0gbmV3IE1hcCgpXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5maXJzdCAgICAgICAgPSBtZS5nZXRGaXJzdC5iaW5kKG1lKTsgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldENvbXBvbmVudCA9IG1lLmdldCAgICAgLmJpbmQobWUpICAvLyBhbGlhc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZsYXR0ZW5zIGEgZ2l2ZW4gdm5vZGUgdHJlZSBieSByZXBsYWNpbmcgY29tcG9uZW50IGJhc2VkIHN1YnRyZWVzIHdpdGggY29tcG9uZW50SWQgYmFzZWQgcmVmZXJlbmNlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvd25lcklkIFdlIGRvIG5vdCB3YW50IHRvIHJlcGxhY2UgdGhlIG93biBpZCA9PiB3cmFwcGVkIGl0ZW1zXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBhZGRWbm9kZUNvbXBvbmVudFJlZmVyZW5jZXModm5vZGUsIG93bmVySWQpIHtcbiAgICAgICAgdm5vZGUgPSB7Li4udm5vZGV9OyAvLyBzaGFsbG93IGNvcHlcblxuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gdm5vZGU/LmNoaWxkTm9kZXMgPyBbLi4udm5vZGUuY2hpbGROb2Rlc10gOiBbXSxcbiAgICAgICAgICAgIGNoaWxkTm9kZUlkLCBjb21wb25lbnQsIGNvbXBvbmVudElkLCBwYXJlbnRSZWYsIHJlZmVyZW5jZU5vZGU7XG5cbiAgICAgICAgdm5vZGUuY2hpbGROb2RlcyA9IGNoaWxkTm9kZXM7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjaGlsZE5vZGVJZCA9IGNoaWxkTm9kZS5pZDtcblxuICAgICAgICAgICAgaWYgKCFjaGlsZE5vZGUuY29tcG9uZW50SWQgJiYgY2hpbGROb2RlSWQgIT09IG93bmVySWQpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBtZS5nZXQoY2hpbGROb2RlSWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VhcmNoaW5nIGZvciB3cmFwcGVkIGNvbXBvbmVudHMgYXMgYSBmYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBtZS53cmFwcGVyTm9kZXMuZ2V0KGNoaWxkTm9kZUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHBhcmVudCBjb21wb25lbnQgcmVmZXJlbmNlID0+IGFzc2lnbiB0aGUgd3JhcHBlciBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50SWQgPSBjb21wb25lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRSZWYgICA9IFZEb21VdGlsLmZpbmQoY29tcG9uZW50LnBhcmVudC52ZG9tLCB7Y29tcG9uZW50SWR9LCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRSZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRSZWYudmRvbS5pZCA9IGNoaWxkTm9kZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudElkICAgPSBjb21wb25lbnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSB7Y29tcG9uZW50SWR9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRJZCAhPT0gY2hpbGROb2RlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUuaWQgPSBjaGlsZE5vZGVJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZE5vZGVzW2luZGV4XSA9IGNvbXBvbmVudCA/IHJlZmVyZW5jZU5vZGUgOiBtZS5hZGRWbm9kZUNvbXBvbmVudFJlZmVyZW5jZXMoY2hpbGROb2RlLCBvd25lcklkKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdm5vZGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBjb21wb25lbnQgd2hpY2ggbWF0Y2hlcyB0aGUgY29uZmlnLXNlbGVjdG9yIG1vdmluZyBkb3duIHRoZSBjb21wb25lbnQgaXRlbXMgdHJlZS5cbiAgICAgKiBVc2UgcmV0dXJuRmlyc3RNYXRjaD1mYWxzZSB0byBnZXQgYW4gYXJyYXkgb2YgYWxsIG1hdGNoaW5nIGl0ZW1zIGluc3RlYWQuXG4gICAgICogSWYgbm8gbWF0Y2ggaXMgZm91bmQsIHJldHVybnMgbnVsbCBpbiBjYXNlIHJldHVybkZpcnN0TWF0Y2ggPT09IHRydWUsIG90aGVyd2lzZSBhbiBlbXB0eSBBcnJheS5cbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZXxTdHJpbmd9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ3xudWxsfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJldHVybkZpcnN0TWF0Y2g9dHJ1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8TmVvLmNvbXBvbmVudC5CYXNlW118bnVsbH1cbiAgICAgKi9cbiAgICBkb3duKGNvbXBvbmVudCwgY29uZmlnLCByZXR1cm5GaXJzdE1hdGNoPXRydWUpIHtcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBtYXRjaEFycmF5ICA9IFtdLFxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBudWxsLFxuICAgICAgICAgICAgaSAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSBbXSxcbiAgICAgICAgICAgIGNoaWxkSXRlbXMsIGNvbmZpZ0FycmF5LCBjb25maWdMZW5ndGgsIGxlbjtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnID0ge31cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKGNvbmZpZyk7XG4gICAgICAgIGNvbmZpZ0xlbmd0aCA9IGNvbmZpZ0FycmF5Lmxlbmd0aDtcblxuICAgICAgICBjb25maWdBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICgoY29tcG9uZW50W2tleV0gPT09IHZhbHVlKVxuICAgICAgICAgICAgICAgIHx8IChrZXkgPT09ICdudHlwZScgJiYgbWUuaGFzUHJvdG90eXBlUHJvcGVydHlWYWx1ZShjb21wb25lbnQsIGtleSwgdmFsdWUpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBjb25maWdMZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChyZXR1cm5GaXJzdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGNvbXBvbmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkSXRlbXMgPSBtZS5maW5kKHtwYXJlbnRJZDogY29tcG9uZW50LmlkfSk7XG4gICAgICAgIGxlbiAgICAgICAgPSBjaGlsZEl0ZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG1lLmRvd24oY2hpbGRJdGVtc1tpXSwgY29uZmlnLCByZXR1cm5GaXJzdE1hdGNoKTtcblxuICAgICAgICAgICAgaWYgKHJldHVybkZpcnN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXR1cm5WYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCguLi5yZXR1cm5WYWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5GaXJzdE1hdGNoID8gbnVsbDogcmV0dXJuQXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBwYXRoXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB0aGUgY29tcG9uZW50IGlkIGluIGNhc2UgdGhlcmUgaXMgYSBtYXRjaFxuICAgICAqL1xuICAgIGZpbmRQYXJlbnRDb21wb25lbnQocGF0aCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBwYXRoPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGlkO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlkID0gcGF0aFtpXTtcblxuICAgICAgICAgICAgaWYgKGlkICYmIG1lLmhhcyhpZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb2JqZWN0IGFzc29jaWF0ZWQgdG8gdGhlIGtleSwgb3IgbnVsbCBpZiB0aGVyZSBpcyBub25lLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgICBbaW5jbHVkZVdyYXBwZXJOb2Rlcz10cnVlXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICBnZXQoa2V5LCBpbmNsdWRlV3JhcHBlck5vZGVzPXRydWUpIHtcbiAgICAgICAgaWYgKGluY2x1ZGVXcmFwcGVyTm9kZXMpIHtcbiAgICAgICAgICAgIGxldCB3cmFwcGVyTm9kZSA9IHRoaXMud3JhcHBlck5vZGVzLmdldChrZXkpO1xuXG4gICAgICAgICAgICBpZiAod3JhcHBlck5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlck5vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNoaWxkIGNvbXBvbmVudHMgd2hpY2ggYXJlIHJlY3Vyc2l2ZWx5IG1hdGNoZWQgdmlhIHRoZWlyIHBhcmVudElkXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2VbXX0gY2hpbGRDb21wb25lbnRzXG4gICAgICovXG4gICAgZ2V0Q2hpbGRDb21wb25lbnRzKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGlyZWN0Q2hpbGRyZW4gPSBtZS5maW5kKCdwYXJlbnRJZCcsIGNvbXBvbmVudC5pZCkgfHwgW10sXG4gICAgICAgICAgICBjb21wb25lbnRzICAgICA9IFtdLFxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnRzO1xuXG4gICAgICAgIGRpcmVjdENoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2goaXRlbSk7XG5cbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50cyA9IG1lLmdldENoaWxkQ29tcG9uZW50cyhpdGVtKTtcblxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnRzICYmIGNvbXBvbmVudHMucHVzaCguLi5jaGlsZENvbXBvbmVudHMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9kbzogcmVwbGFjZSBhbGwgY2FsbHMgb2YgdGhpcyBtZXRob2QgdG8gY2FsbHMgdXNpbmcgdGhlIHV0aWwuVk5vZGUgY2xhc3NcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gY2hpbGRJZHM9W11cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nW119IGNoaWxkSWRzXG4gICAgICovXG4gICAgZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzPVtdKSB7XG4gICAgICAgIHJldHVybiBWTm9kZVV0aWwuZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNoaWxkIGNvbXBvbmVudHMgZm91bmQgaW5zaWRlIHRoZSB2bm9kZSB0cmVlXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2VbXX0gY2hpbGRDb21wb25lbnRzXG4gICAgICovXG4gICAgZ2V0Q2hpbGRyZW4oY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBjaGlsZENvbXBvbmVudHMgPSBbXSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgICAgICA9IFZOb2RlVXRpbC5nZXRDaGlsZElkcyhjb21wb25lbnQudm5vZGUpLFxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQ7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQgPSB0aGlzLmdldChub2RlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRDb21wb25lbnRzLnB1c2goY2hpbGRDb21wb25lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZENvbXBvbmVudHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAhISBGb3IgZGVidWdnaW5nIHB1cnBvc2VzIG9ubHkgISFcbiAgICAgKlxuICAgICAqIEdldCB0aGUgZmlyc3QgY29tcG9uZW50IGJhc2VkIG9uIHRoZSBudHlwZSBvciBvdGhlciBwcm9wZXJ0aWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8QXJyYXl9IGNvbXBvbmVudERlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZXR1cm5GaXJzdE1hdGNoPXRydWVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx8TmVvLmNvbXBvbmVudC5CYXNlW119XG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAvLyBhcyBTdHJpbmc6IG50eXBlW2NvbW1hIHNlcGFyYXRlZCBwcm9wdGVydGllc11cbiAgICAgTmVvLmZpcnN0KCd0b29sYmFyIGJ1dHRvblt0ZXh0PVRyeSBtZSxpY29uPXBlb3BsZV0nKVxuICAgICAvLyBhcyBPYmplY3Q6IEFkZCBwcm9wZXJ0aWVzLiBudHlwZSBpcyBvcHRpb25hbFxuICAgICBOZW8uZmlyc3Qoe1xuICAgICAgICAgICAgICAgIGljb246ICdwZW9wbGUnXG4gICAgICAgICAgICB9KVxuICAgICAvLyBhcyBBcnJheTogQW4gQXJyYXkgb2YgT2JqZWN0cy4gTm8gU3RyaW5ncyBhbGxvd2VkXG4gICAgIE5lby5maXJzdChbe1xuICAgICAgICAgICAgICAgIG50eXBlOiAndG9vbGJhcidcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJywgdGV4dDogJ1RyeSBtZScsIGljb246ICdwZW9wbGVcbiAgICAgICAgICAgIH1dKVxuXG4gICAgICogVGhlIHJldHVybkZpcnN0TWF0Y2ggZmxhZyBhbGxvd3MgdG8gcmV0dXJuIGFsbCBpdGVtcyBhbmRcbiAgICAgKiBub3Qgc3RvcCBhZnRlciB0aGUgZmlyc3QgcmVzdWx0LlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgTmVvLmZpcnN0KCdidXR0b24nLCBmYWxzZSkgLy8gPT4gW0J1dHRvbiwgQnV0dG9uLCBCdXR0b25dXG4gICAgICovXG4gICAgZ2V0Rmlyc3QoY29tcG9uZW50RGVzY3JpcHRpb24sIHJldHVybkZpcnN0TWF0Y2ggPSB0cnVlKSB7XG4gICAgICAgIGxldCBvYmplY3RzID0gW10sXG4gICAgICAgICAgICBhcHAgICAgID0gTmVvLmFwcHNbT2JqZWN0LmtleXMoTmVvLmFwcHMpWzBdXSxcbiAgICAgICAgICAgIHJvb3QgICAgPSBhcHAubWFpblZpZXc7XG5cbiAgICAgICAgLyogY3JlYXRlIGFuIGFycmF5IG9mIG9iamVjdHMgZnJvbSBzdHJpbmcgKi9cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb21wb25lbnREZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gLyhcXHcqKShcXFtbXlxcXV0qXFxdKXwoXFx3KikvZztcbiAgICAgICAgICAgIGxldCBtYXRjaDtcblxuICAgICAgICAgICAgLyogZ2VuZXJhdGUgb2JqZWN0cyB3aGljaCBjb250YWluIHRoZSBpbmZvcm1hdGlvbiAqL1xuICAgICAgICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXguZXhlYyhjb21wb25lbnREZXNjcmlwdGlvbikpIHtcbiAgICAgICAgICAgICAgICBsZXQgWywgbnR5cGUsIHBhaXJzLCBudHlwZU9ubHldID0gbWF0Y2gsIG9iajtcblxuICAgICAgICAgICAgICAgIG50eXBlID0gbnR5cGUgfHwgbnR5cGVPbmx5O1xuICAgICAgICAgICAgICAgIG9iaiA9IHtudHlwZX07XG5cbiAgICAgICAgICAgICAgICBpZiAocGFpcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFpcnNSZWdleCA9IC9cXFsoLio/KVxcXS8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhaXJzTWF0Y2ggPSBwYWlycy5tYXRjaChwYWlyc1JlZ2V4KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFpcnNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFpcnMgPSBwYWlyc01hdGNoWzFdLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWlycy5mb3JFYWNoKChwYWlyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gcGFpci5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWUucmVwbGFjZSgvXCIvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3RzLnB1c2gob2JqKTtcblxuICAgICAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KGNvbXBvbmVudERlc2NyaXB0aW9uKSl7XG4gICAgICAgICAgICBvYmplY3RzLnB1c2goY29tcG9uZW50RGVzY3JpcHRpb24pXG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzQXJyYXkoY29tcG9uZW50RGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICBvYmplY3RzID0gY29tcG9uZW50RGVzY3JpcHRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGZpbmQgdGhlIGNvcnJlY3QgY2hpbGQgdXNpbmcgZG93bigpICovXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9iamVjdHMucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjYykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGFjYy5kb3duKGtleSwgcmV0dXJuRmlyc3RNYXRjaCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISFjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH0sIHJvb3QpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIEFycmF5IGNvbnRhaW5pbmcgdGhlIGlkcyBvZiBhbGwgcGFyZW50IGNvbXBvbmVudHMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmdbXX0gcGFyZW50SWRzXG4gICAgICovXG4gICAgZ2V0UGFyZW50SWRzKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgcGFyZW50SWRzID0gW107XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudD8ucGFyZW50SWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0KGNvbXBvbmVudC5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRJZHMucHVzaChjb21wb25lbnQuaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50SWRzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBnZXRQYXJlbnRQYXRoKHBhdGgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29tcG9uZW50UGF0aCA9IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgID0gcGF0aD8ubGVuZ3RoIHx8IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKG1lLmhhcyhwYXRoW2ldKSB8fCBtZS53cmFwcGVyTm9kZXMuZ2V0KHBhdGhbaV0pKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50UGF0aC5wdXNoKHBhdGhbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50UGF0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gQXJyYXkgY29udGFpbmluZyBhbGwgcGFyZW50IGNvbXBvbmVudHMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50IG9yIGNvbXBvbmVudCBpZFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfFN0cmluZ30gY29tcG9uZW50XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfSBwYXJlbnRzXG4gICAgICovXG4gICAgZ2V0UGFyZW50cyhjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldChjb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQ/LnBhcmVudElkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldChjb21wb25lbnQucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGNvbXBvbmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29waWVzIGEgZ2l2ZW4gdmRvbSB0cmVlIGFuZCByZXBsYWNlcyBjaGlsZCBjb21wb25lbnQgcmVmZXJlbmNlcyB3aXRoIHRoZSB2ZG9tIG9mIHRoZWlyIG1hdGNoaW5nIGNvbXBvbmVudHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkZXB0aD0tMVxuICAgICAqICAgICBUaGUgY29tcG9uZW50IHJlcGxhY2VtZW50IGRlcHRoLlxuICAgICAqICAgICAtMSB3aWxsIHBhcnNlIHRoZSBmdWxsIHRyZWUsIDEgdG9wIGxldmVsIG9ubHksIDIgaW5jbHVkZSBjaGlsZHJlbiwgMyBpbmNsdWRlIGdyYW5kY2hpbGRyZW5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFZkb21UcmVlKHZkb20sIGRlcHRoPS0xKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSB7Li4udmRvbX0sIC8vIHNoYWxsb3cgY29weVxuICAgICAgICAgICAgY2hpbGREZXB0aDtcblxuICAgICAgICBpZiAodmRvbS5jbikge1xuICAgICAgICAgICAgb3V0cHV0LmNuID0gW107XG5cbiAgICAgICAgICAgIHZkb20uY24uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZERlcHRoID0gZGVwdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb21wb25lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZERlcHRoID0gZGVwdGggPT09IC0xID8gLTEgOiBkZXB0aCA+IDEgPyBkZXB0aC0xIDogMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IC0xIHx8IGRlcHRoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuZ2V0KGl0ZW0uY29tcG9uZW50SWQpLnZkb21cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG91dHB1dC5jbi5wdXNoKHRoaXMuZ2V0VmRvbVRyZWUoaXRlbSwgY2hpbGREZXB0aCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhIGdpdmVuIHZub2RlIHRyZWUgYW5kIHJlcGxhY2VzIGNoaWxkIGNvbXBvbmVudCByZWZlcmVuY2VzIHdpdGggdGhlIHZub2RlIG9mIHRoZWlyIG1hdGNoaW5nIGNvbXBvbmVudHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGVwdGg9LTFcbiAgICAgKiAgICAgVGhlIGNvbXBvbmVudCByZXBsYWNlbWVudCBkZXB0aC5cbiAgICAgKiAgICAgLTEgd2lsbCBwYXJzZSB0aGUgZnVsbCB0cmVlLCAxIHRvcCBsZXZlbCBvbmx5LCAyIGluY2x1ZGUgY2hpbGRyZW4sIDMgaW5jbHVkZSBncmFuZGNoaWxkcmVuXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRWbm9kZVRyZWUodm5vZGUsIGRlcHRoPS0xKSB7XG4gICAgICAgIGxldCBvdXRwdXQgPSB7Li4udm5vZGV9LCAvLyBzaGFsbG93IGNvcHlcbiAgICAgICAgICAgIGNoaWxkRGVwdGgsIGNvbXBvbmVudDtcblxuICAgICAgICBpZiAodm5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgb3V0cHV0LmNoaWxkTm9kZXMgPSBbXTtcblxuICAgICAgICAgICAgdm5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkRGVwdGggPSBkZXB0aDtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvbXBvbmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRGVwdGggPSBkZXB0aCA9PT0gLTEgPyAtMSA6IGRlcHRoID4gMSA/IGRlcHRoLTEgOiAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gLTEgfHwgZGVwdGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldChpdGVtLmNvbXBvbmVudElkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCByZWZlcmVuY2VzIGluIGNhc2UgdGhlcmUgaXMgbm8gdm5vZGUgKGNtcCBub3QgbW91bnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQ/LnZub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGNvbXBvbmVudC52bm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb3V0cHV0LmNoaWxkTm9kZXMucHVzaCh0aGlzLmdldFZub2RlVHJlZShpdGVtLCBjaGlsZERlcHRoKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGNvbXBvbmVudCBoYWQgYSBwcm9wZXJ0eSBvZiBhbnkgdmFsdWUgc29tZXdoZXJlIGluIHRoZSBQcm90b3R5cGUgY2hhaW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzUHJvdG90eXBlUHJvcGVydHlWYWx1ZShjb21wb25lbnQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICB3aGlsZSAoY29tcG9uZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBjb21wb25lbnRbcHJvcGVydHldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5fX3Byb3RvX19cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB3cmFwcGVySWRcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXJXcmFwcGVyTm9kZSh3cmFwcGVySWQsIGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLndyYXBwZXJOb2Rlcy5zZXQod3JhcHBlcklkLCBjb21wb25lbnQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V8U3RyaW5nfSBpdGVtXG4gICAgICovXG4gICAgdW5yZWdpc3RlcihpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyTm9kZXMuZGVsZXRlKGl0ZW0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaWQgIT09IGl0ZW0udmRvbS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlck5vZGVzLmRlbGV0ZShpdGVtLnZkb20uaWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51bnJlZ2lzdGVyKGl0ZW0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgY29tcG9uZW50IHdoaWNoIG1hdGNoZXMgdGhlIGNvbmZpZy1zZWxlY3Rvci5cbiAgICAgKiBVc2UgcmV0dXJuRmlyc3RNYXRjaD1mYWxzZSB0byBnZXQgYW4gYXJyYXkgb2YgYWxsIG1hdGNoaW5nIGl0ZW1zIGluc3RlYWQuXG4gICAgICogSWYgbm8gbWF0Y2ggaXMgZm91bmQsIHJldHVybnMgbnVsbCBpbiBjYXNlIHJldHVybkZpcnN0TWF0Y2ggPT09IHRydWUsIG90aGVyd2lzZSBhbiBlbXB0eSBBcnJheS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd8bnVsbH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZXR1cm5GaXJzdE1hdGNoPXRydWVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfG51bGx9XG4gICAgICovXG4gICAgdXAoY29tcG9uZW50SWQsIGNvbmZpZywgcmV0dXJuRmlyc3RNYXRjaD10cnVlKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgICA9IHRoaXMuZ2V0KGNvbXBvbmVudElkKSxcbiAgICAgICAgICAgIHJldHVybkFycmF5ID0gW10sXG4gICAgICAgICAgICBjb25maWdBcnJheSwgY29uZmlnTGVuZ3RoLCBtYXRjaEFycmF5O1xuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlOiBjb25maWdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnQXJyYXkgID0gT2JqZWN0LmVudHJpZXMoY29uZmlnKTtcbiAgICAgICAgY29uZmlnTGVuZ3RoID0gY29uZmlnQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQ/LnBhcmVudElkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldChjb21wb25lbnQucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5GaXJzdE1hdGNoID8gbnVsbCA6IHJldHVybkFycmF5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgY29uZmlnQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBjb25maWdMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuRmlyc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChjb21wb25lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKENvbXBvbmVudCk7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4vQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgRm9jdXNNYW5hZ2VyICAgICBmcm9tICcuL0ZvY3VzLm1qcyc7XG5pbXBvcnQgTG9nZ2VyICAgICAgICAgICBmcm9tICcuLi91dGlsL0xvZ2dlci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICAgZnJvbSAnLi4vdXRpbC9WRG9tLm1qcyc7XG5cbmNvbnN0IGV2ZW50Q29uZmlnS2V5cyA9IFtcbiAgICAnYnViYmxlJyxcbiAgICAnZGVsZWdhdGUnLFxuICAgICdsb2NhbCcsXG4gICAgJ3Njb3BlJyxcbiAgICAndm5vZGVJZCdcbl07XG5cbmNvbnN0IGdsb2JhbERvbUV2ZW50cyA9IFtcbiAgICAnY2hhbmdlJyxcbiAgICAnY2xpY2snLFxuICAgICdjb250ZXh0bWVudScsXG4gICAgJ2RibGNsaWNrJyxcbiAgICAnZHJhZzplbmQnLFxuICAgICdkcmFnOm1vdmUnLFxuICAgICdkcmFnOnN0YXJ0JyxcbiAgICAnZm9jdXNpbicsXG4gICAgJ2ZvY3Vzb3V0JyxcbiAgICAnaW5wdXQnLFxuICAgICdpbnRlcnNlY3QnLFxuICAgICdrZXlkb3duJyxcbiAgICAna2V5dXAnLFxuICAgICdtb3VzZWRvd24nLFxuICAgICdtb3VzZWVudGVyJyxcbiAgICAnbW91c2VsZWF2ZScsXG4gICAgJ21vdXNldXAnLFxuICAgICduZW9uYXZpZ2F0ZScsXG4gICAgJ3Njcm9sbCcsXG4gICAgJ3NlbGVjdGlvbmNoYW5nZScsXG4gICAgJ3RvdWNobW92ZScsXG4gICAgJ3doZWVsJ1xuXTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuRG9tRXZlbnRcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRG9tRXZlbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkRvbUV2ZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Eb21FdmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1zPXt9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbWFwPXt9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1hcDoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge2RhdGF9IGV2ZW50XG4gICAgICovXG4gICAgYWRkUmVzaXplT2JzZXJ2ZXIoY29tcG9uZW50LCBldmVudCkge1xuICAgICAgICBpZiAoIU5lby5tYWluLmFkZG9uLlJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3IgdXNpbmcgcmVzaXplIGRvbUxpc3RlbmVycywgeW91IG11c3QgaW5jbHVkZSBtYWluLmFkZG9uLlJlc2l6ZU9ic2VydmVyLicsIGV2ZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHtpZCwgd2luZG93SWR9ID0gY29tcG9uZW50O1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLlJlc2l6ZU9ic2VydmVyLnJlZ2lzdGVyKHtpZCwgd2luZG93SWR9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmaXJlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidWJibGUgICAgICA9IHRydWUsXG4gICAgICAgICAgICBkYXRhICAgICAgICA9IGV2ZW50LmRhdGEgfHwge30sXG4gICAgICAgICAgICB7ZXZlbnROYW1lfSA9IGV2ZW50LFxuICAgICAgICAgICAgaSAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgPSBudWxsLFxuICAgICAgICAgICAgcGF0aElkcyAgICAgPSBkYXRhLnBhdGgubWFwKGUgPT4gZS5pZCksXG4gICAgICAgICAgICBwYXRoICAgICAgICA9IENvbXBvbmVudE1hbmFnZXIuZ2V0UGFyZW50UGF0aChwYXRoSWRzKSxcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBjb21wb25lbnQsIGRlbGVnYXRpb25UYXJnZXRJZCwgaWQsIHByZXZlbnRGaXJlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlkICAgICAgICA9IHBhdGhbaV07XG4gICAgICAgICAgICBjb21wb25lbnQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnQgfHwgY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUuaXRlbXNbaWRdPy5bZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCBpdGVyYXRpb24gaWYgYSBoYW5kbGVyIHJldHVybnMgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmV2ZXJ5KGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciAmJiBsaXN0ZW5lci5mbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdyZXNpemUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvIG5vdCB3YW50IGRlbGVnYXRpb24gZm9yIGN1c3RvbSBtYWluLmFkZG9uLlJlc2l6ZU9ic2VydmVyIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0aW9uVGFyZ2V0SWQgPSBkYXRhLmlkID09PSBjb21wb25lbnQuaWQgPyBkYXRhLmlkIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0aW9uVGFyZ2V0SWQgPSBtZS52ZXJpZnlEZWxlZ2F0aW9uUGF0aChsaXN0ZW5lciwgZGF0YS5wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0aW9uVGFyZ2V0SWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRGaXJlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugb25seSB3YW50IG1vdXNlZW50ZXIgJiBsZWF2ZSB0byBmaXJlIG9uIHRoZWlyIHRvcCBsZXZlbCBub2Rlcywgbm90IGZvciBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnbW91c2VlbnRlcicgfHwgZXZlbnROYW1lID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRGaXJlID0gIURvbUV2ZW50LnZlcmlmeU1vdXNlRW50ZXJMZWF2ZShjb21wb25lbnQsIGRhdGEsIGRlbGVnYXRpb25UYXJnZXRJZCwgZXZlbnROYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50RmlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwbGUgbGlzdGVuZXJzIHdvdWxkIGNoYW5nZSB0aGUgcmVmZXJlbmNlIG9mIGRhdGEuY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gTmVvLmNsb25lKGRhdGEsIHRydWUsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlciBuZWVkcyB0byBrbm93IHdoaWNoIGFjdHVhbCB0YXJnZXQgbWF0Y2hlZCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY3VycmVudFRhcmdldCA9IGRlbGVnYXRpb25UYXJnZXRJZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc1N0cmluZyhsaXN0ZW5lci5mbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5iaW5kQ2FsbGJhY2sobGlzdGVuZXIuZm4sICdmbicsIGxpc3RlbmVyLnNjb3BlLCBsaXN0ZW5lcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIuZm4uYXBwbHkobGlzdGVuZXIuc2NvcGUgfHwgZ2xvYmFsVGhpcywgW2RhdGFdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lci5idWJibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWJibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBsaXN0ZW5lciByZXR1cm5zIGZhbHNlLCB3ZSBzdG9wIGl0ZXJhdGluZyB0aGUgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBGb2N1c01hbmFnZXIgYWZ0ZXIgbm9ybWFsIGRvbUxpc3RlbmVycyBvbiB0aGVzZSBldmVudHMgZ290IGV4ZWN1dGVkXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnZm9jdXNpbicgfHwgZXZlbnROYW1lID09PSAnZm9jdXNvdXQnKSB7XG4gICAgICAgICAgICAgICAgRm9jdXNNYW5hZ2VyWydvbicgKyBOZW8uY2FwaXRhbGl6ZShldmVudE5hbWUpXSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEhvbm9yIHRoZSBFdmVudCBjYW5jZWxCdWJibGUgcHJvcGVydHlcbiAgICAgICAgICAgIGlmICghYnViYmxlIHx8IGRhdGEuY2FuY2VsQnViYmxlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdjb250ZXh0bWVudScgJiYgZGF0YS5jdHJsS2V5KSB7XG4gICAgICAgICAgICBOZW8udXRpbD8uTG9nZ2VyPy5vbkNvbnRleHRNZW51KGRhdGEpXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lLnN0YXJ0c1dpdGgoJ2Ryb3AnKSkge1xuICAgICAgICAgICAgbGV0IGRyYWdab25lID0gZGF0YS5kcmFnWm9uZUlkICYmIE5lby5nZXQoZGF0YS5kcmFnWm9uZUlkKTtcblxuICAgICAgICAgICAgaWYgKGRyYWdab25lKSB7XG4gICAgICAgICAgICAgICAgZHJhZ1pvbmUuZmlyZShldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGRyYWdab25lW3tcbiAgICAgICAgICAgICAgICAgICAgJ2Ryb3AnICAgICAgOiAnb25Ecm9wJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Ryb3A6ZW50ZXInOiAnb25Ecm9wRW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAnZHJvcDpsZWF2ZSc6ICdvbkRyb3BMZWF2ZScsXG4gICAgICAgICAgICAgICAgfVtldmVudE5hbWVdXS5jYWxsKGRyYWdab25lLCBkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqIEBwYXJhbSBzY29wZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2VuZXJhdGVMaXN0ZW5lckNvbmZpZyhjb25maWcsIHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidWJibGUgICA6IGNvbmZpZy5idWJibGUsXG4gICAgICAgICAgICBkZWxlZ2F0ZSA6IGNvbmZpZy5kZWxlZ2F0ZSxcbiAgICAgICAgICAgIGV2ZW50TmFtZTogY29uZmlnLmV2ZW50TmFtZSxcbiAgICAgICAgICAgIGlkICAgICAgIDogc2NvcGUuaWQsXG4gICAgICAgICAgICBvcHRzICAgICA6IGNvbmZpZyxcbiAgICAgICAgICAgIHByaW9yaXR5IDogY29uZmlnLnByaW9yaXR5LFxuICAgICAgICAgICAgc2NvcGUgICAgOiBjb25maWcuc2NvcGUgICB8fCBzY29wZSxcbiAgICAgICAgICAgIHZub2RlSWQgIDogY29uZmlnLnZub2RlSWQgfHwgc2NvcGUudmRvbS5pZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEV2ZW50TmFtZShjb25maWcpIHtcbiAgICAgICAgbGV0IGV2ZW50TmFtZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKE5lby5pc09iamVjdChjb25maWcpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Q29uZmlnS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IGtleVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnROYW1lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLmJ1YmJsZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZGVsZWdhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm9wdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy52bm9kZUlkXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRMaXN0ZW5lcihjb25maWcpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICBldmVudDtcblxuICAgICAgICBpZiAobGlzdGVuZXJzPy5bY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgZXZlbnQgPSBsaXN0ZW5lcnNbY29uZmlnLmlkXVtjb25maWcuZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50IHx8IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdW50cyBsb2NhbCBkb21FdmVudCBsaXN0ZW5lcnMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBtb3VudERvbUxpc3RlbmVycyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVycyAgID0gdGhpcy5pdGVtc1tjb21wb25lbnQuaWRdLFxuICAgICAgICAgICAgbG9jYWxFdmVudHMgPSBbXTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhsaXN0ZW5lcnMpLmZvckVhY2goKFtldmVudE5hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBldmVudC5ldmVudE5hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3Jlc2l6ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkUmVzaXplT2JzZXJ2ZXIoY29tcG9uZW50LCBldmVudClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudE5hbWUgJiYgKGV2ZW50LmxvY2FsIHx8ICFnbG9iYWxEb21FdmVudHMuaW5jbHVkZXMoZXZlbnROYW1lKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgICA6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAnZG9tRXZlbnRMaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGVJZDogZXZlbnQudm5vZGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGxvY2FsRXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBOZW8ud29ya2VyLkFwcC5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uICA6ICdhZGREb21MaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgOiBjb21wb25lbnQuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzICA6IGxvY2FsRXZlbnRzLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dJZDogY29tcG9uZW50LndpbmRvd0lkXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZGVkIGRvbUxpc3RlbmVyJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcDogR290IGVycm9yIGF0dGVtcHRpbmcgdG8gYWRkIGEgZG9tTGlzdGVuZXInLCBlcnIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcuYnViYmxlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICBjb25maWcuZGVsZWdhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gIGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gIGNvbmZpZy5pZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLmxvY2FsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9ICBjb25maWcub3B0c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSAgY29uZmlnLm9yaWdpbmFsQ29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICBjb25maWcub3duZXJJZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSAgY29uZmlnLnByaW9yaXR5PTFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gIGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgY29uZmlnLnZub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgbGlzdGVuZXIgZ290IHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IChmYWxzZSBpbiBjYXNlIGl0IHdhcyBhbHJlYWR5IHRoZXJlKVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhbHJlYWR5UmVnaXN0ZXJlZCAgICAgICAgICAgID0gZmFsc2UsXG4gICAgICAgICAgICB7ZXZlbnROYW1lLCBpZCwgb3B0cywgc2NvcGV9ID0gY29uZmlnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgICAgICAgICAgICAgICA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgZm5UeXBlICAgICAgICAgICAgICAgICAgICAgICA9IHR5cGVvZiBvcHRzLFxuICAgICAgICAgICAgZm4sIGxpc3RlbmVyLCBsaXN0ZW5lckNvbmZpZywgbGlzdGVuZXJJZDtcblxuICAgICAgICBpZiAoZm5UeXBlID09PSAnZnVuY3Rpb24nIHx8IGZuVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGZuID0gb3B0c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm4gICAgPSBvcHRzLmZuO1xuICAgICAgICAgICAgc2NvcGUgPSBvcHRzLnNjb3BlIHx8IHNjb3BlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxpc3RlbmVyc1tpZF0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpZF0gPSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RlbmVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLmZuLnRvU3RyaW5nKCkgPT09IGZuLnRvU3RyaW5nKCkgJiYgLy8gdG9kbzogYWRkIGEgYmV0dGVyIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uc2NvcGUgICAgICAgICA9PT0gc2NvcGUgJiZcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5kZWxlZ2F0ZSAgICAgID09PSBjb25maWcuZGVsZWdhdGVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeVJlZ2lzdGVyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWxyZWFkeVJlZ2lzdGVyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21hbmFnZXIuRG9tRXZlbnQgcmVnaXN0ZXInLCBldmVudE5hbWUsIGNvbmZpZyk7XG5cbiAgICAgICAgbGlzdGVuZXJJZCA9IE5lby5nZXRJZCgnZG9tLWV2ZW50Jyk7XG5cbiAgICAgICAgY29uZmlnLmxpc3RlbmVySWQgPSBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGxpc3RlbmVyQ29uZmlnID0ge1xuICAgICAgICAgICAgYnViYmxlICAgICAgICA6IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnYnViYmxlJykgPyBjb25maWcuYnViYmxlIDogb3B0cy5oYXNPd25Qcm9wZXJ0eSgnYnViYmxlJykgPyBvcHRzLmJ1YmJsZSA6IHRydWUsXG4gICAgICAgICAgICBkZWxlZ2F0ZSAgICAgIDogY29uZmlnLmRlbGVnYXRlLFxuICAgICAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICAgICAgZm4sXG4gICAgICAgICAgICBpZCAgICAgICAgICAgIDogbGlzdGVuZXJJZCxcbiAgICAgICAgICAgIG1vdW50ZWQgICAgICAgOiAhY29uZmlnLmxvY2FsICYmIGdsb2JhbERvbUV2ZW50cy5pbmNsdWRlcyhldmVudE5hbWUpLFxuICAgICAgICAgICAgb3JpZ2luYWxDb25maWc6IGNvbmZpZy5vcmlnaW5hbENvbmZpZyxcbiAgICAgICAgICAgIG93bmVySWQgICAgICAgOiBjb25maWcub3duZXJJZCxcbiAgICAgICAgICAgIHByaW9yaXR5ICAgICAgOiBjb25maWcucHJpb3JpdHkgfHwgb3B0cy5wcmlvcml0eSB8fCAxLFxuICAgICAgICAgICAgc2NvcGUsXG4gICAgICAgICAgICB2bm9kZUlkICAgICAgIDogY29uZmlnLnZub2RlSWRcbiAgICAgICAgfTtcblxuICAgICAgICBtZS5tYXBbbGlzdGVuZXJJZF0gPSBsaXN0ZW5lckNvbmZpZztcblxuICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0ucHVzaChsaXN0ZW5lckNvbmZpZyk7XG5cbiAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5idWJibGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm9wdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy52bm9kZUlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbGlzdGVuZXIgZGlkIGV4aXN0IGFuZCBnb3QgcmVtb3ZlZFxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoY29uZmlnLCBzY29wZSkge1xuICAgICAgICAvLyB0b2RvXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bnJlZ2lzdGVyJywgY29uZmlnKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZW5lcmF0ZUxpc3RlbmVyQ29uZmlnKGNvbmZpZywgc2NvcGUpKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIoY29uZmlnKTtcblxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0ZW5lciBmb3VuZCcsIGxpc3RlbmVyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRvbUxpc3RlbmVyc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IG9sZERvbUxpc3RlbmVyc1xuICAgICAqL1xuICAgIHVwZGF0ZURvbUxpc3RlbmVycyhjb21wb25lbnQsIGRvbUxpc3RlbmVycywgb2xkRG9tTGlzdGVuZXJzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRMaXN0ZW5lcnMgPSBtZS5pdGVtc1tjb21wb25lbnQuaWRdIHx8IHt9LFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9tTGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2xkRG9tTGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIG9sZERvbUxpc3RlbmVycy5mb3JFYWNoKG9sZERvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCAmIHJlbW92ZSBubyBsb25nZXIgZXhpc3RpbmcgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9tTGlzdGVuZXJzLmluY2x1ZGVzKG9sZERvbUxpc3RlbmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gcmVnaXN0ZXJlZExpc3RlbmVyc1ttZS5nZXRFdmVudE5hbWUob2xkRG9tTGlzdGVuZXIpXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgICAgICAgICA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vcmlnaW5hbENvbmZpZyA9PT0gb2xkRG9tTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGxpc3RlbmVycywgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgbmV3IGxpc3RlbmVyc1xuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLmZvckVhY2goZG9tTGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRvbUxpc3RlbmVyKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudENvbmZpZ0tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVnaXN0ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZSAgICAgICAgOiBkb21MaXN0ZW5lci5idWJibGUgICB8fCB2YWx1ZS5idWJibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGUgICAgICA6IGRvbUxpc3RlbmVyLmRlbGVnYXRlIHx8IHZhbHVlLmRlbGVnYXRlIHx8ICcjJyArIChjb21wb25lbnQudmRvbS5pZCB8fCBjb21wb25lbnQuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICAgICA6IGNvbXBvbmVudC52ZG9tLmlkIHx8IGNvbXBvbmVudC5pZCwgLy8gaG9ub3Igd3JhcHBlciBub2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMgICAgICAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbENvbmZpZzogZG9tTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJJZCAgICAgICA6IGNvbXBvbmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eSAgICAgIDogZG9tTGlzdGVuZXIucHJpb3JpdHkgfHwgdmFsdWUucHJpb3JpdHkgfHwgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgIDogZG9tTGlzdGVuZXIuc2NvcGUgICAgfHwgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlSWQgICAgICAgOiBkb21MaXN0ZW5lci52bm9kZUlkICB8fCB2YWx1ZS52bm9kZUlkICB8fCBjb21wb25lbnQudmRvbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5tb3VudGVkICYmIGRvbUxpc3RlbmVycz8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG1lLnRpbWVvdXQoMTAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUubW91bnREb21MaXN0ZW5lcnMoY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ0NvbXBvbmVudC5kb21MaXN0ZW5lcnMgaGF2ZSB0byBiZSBhbiBhcnJheScsIGNvbXBvbmVudClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IHRydWUgaW4gY2FzZSB0aGUgZGVsZWdhdGlvbiBzdHJpbmcgbWF0Y2hlcyB0aGUgZXZlbnQgcGF0aFxuICAgICAqL1xuICAgIHZlcmlmeURlbGVnYXRpb25QYXRoKGxpc3RlbmVyLCBwYXRoKSB7XG4gICAgICAgIGxldCB7ZGVsZWdhdGV9ID0gbGlzdGVuZXIsXG4gICAgICAgICAgICBqICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIHBhdGhMZW4gICAgPSBwYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIHRhcmdldElkO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGogPSBkZWxlZ2F0ZShwYXRoKTtcblxuICAgICAgICAgICAgaWYgKGogIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldElkID0gcGF0aFtqXS5pZFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRlbGVnYXRpb25BcnJheSA9IGRlbGVnYXRlLnNwbGl0KCcgJyksXG4gICAgICAgICAgICAgICAgbGVuICAgICAgICAgICAgID0gZGVsZWdhdGlvbkFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICBoYXNNYXRjaCwgaSwgaXRlbSwgaXNJZDtcblxuICAgICAgICAgICAgZm9yIChpPWxlbi0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaXRlbSAgICAgPSBkZWxlZ2F0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgaXNJZCAgICAgPSBpdGVtLnN0YXJ0c1dpdGgoJyMnKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0lkIHx8IGl0ZW0uc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtLnN1YnN0cigxKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgcGF0aExlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIChpc0lkICYmIHBhdGhbal0uaWQgPT09IGl0ZW0pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoW2pdLmNscy5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gcGF0aFtqXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuc3VyZSB0aGUgZGVsZWdhdGlvbiBwYXRoIGlzIGEgY2hpbGQgb2YgdGhlIG93bmVyIGNvbXBvbmVudHMgcm9vdCBub2RlXG4gICAgICAgIGZvciAoOyBqIDwgcGF0aExlbjsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGF0aFtqXS5pZCA9PT0gbGlzdGVuZXIudm5vZGVJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbGVnYXRpb25UYXJnZXRJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgdmVyaWZ5TW91c2VFbnRlckxlYXZlKGNvbXBvbmVudCwgZGF0YSwgZGVsZWdhdGlvblRhcmdldElkLCBldmVudE5hbWUpIHtcbiAgICAgICAgbGV0IHRhcmdldElkID0gZXZlbnROYW1lID09PSAnbW91c2VlbnRlcicgPyBkYXRhLmZyb21FbGVtZW50SWQgOiBkYXRhLnRvRWxlbWVudElkLFxuICAgICAgICAgICAgZGVsZWdhdGlvblZkb207XG5cbiAgICAgICAgaWYgKHRhcmdldElkICYmIHRhcmdldElkICE9PSBkZWxlZ2F0aW9uVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgIGRlbGVnYXRpb25WZG9tID0gVkRvbVV0aWwuZmluZChjb21wb25lbnQudmRvbSwgZGVsZWdhdGlvblRhcmdldElkKTtcblxuICAgICAgICAgICAgLy8gZGVsZWdhdGlvblZkb20gY2FuIGJlIHVuZGVmaW5lZCB3aGVuIGRyYWdnaW5nIGEgcHJveHkgb3ZlciB0aGUgbm9kZS5cbiAgICAgICAgICAgIC8vIHNlZSBpc3N1ZXMvMTEzNyBmb3IgZGV0YWlscy5cbiAgICAgICAgICAgIGlmICghZGVsZWdhdGlvblZkb20gfHwgZGVsZWdhdGlvblZkb20udmRvbSAmJiBWRG9tVXRpbC5maW5kKGRlbGVnYXRpb25WZG9tLnZkb20sIHRhcmdldElkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKERvbUV2ZW50KTtcbiIsImltcG9ydCBDb3JlQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkZvY3VzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEZvY3VzIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuRm9jdXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkZvY3VzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgb3B0cyBvYmplY3RzLlxuICAgICAgICAgKiBvcHRzLmNvbXBvbmVudFBhdGhcbiAgICAgICAgICogb3B0cy5kYXRhXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBoaXN0b3J5PVtdXG4gICAgICAgICAqL1xuICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBEYXRlIG9iamVjdCB3aGVuIHRoZSBsYXN0IGZvY3VzaW4gZXZlbnQgaGFzIG9jY3VycmVkXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdEZvY3VzSW5EYXRlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERhdGUgb2JqZWN0IHdoZW4gdGhlIGxhc3QgZm9jdXNvdXQgZXZlbnQgaGFzIG9jY3VycmVkXG4gICAgICAgICAqIEBtZW1iZXIge0RhdGV8bnVsbH0gbGFzdEZvY3VzSW5EYXRlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdEZvY3VzT3V0RGF0ZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSBmb3IgYSBmb2N1c0luIHRvIG9jY3VyIGFmdGVyIHRoZSBsYXN0IGZvY3VzT3V0XG4gICAgICAgICAqIHRvIGdldCBjb21iaW5lZCBpbnRvIGEgZm9jdXNtb3ZlIGV2ZW50LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEZvY3VzSW5PdXRHYXA9NTBcbiAgICAgICAgICovXG4gICAgICAgIG1heEZvY3VzSW5PdXRHYXA6IDUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gYW1vdW50IG9mIGl0ZW1zIHN0b3JlZCBpbnNpZGUgdGhlIGhpc3RvcnkgYXJyYXlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhIaXN0b3J5TGVuZ3RoPTIwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhIaXN0b3J5TGVuZ3RoOiAyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZGRUb0hpc3Rvcnkob3B0cykge1xuICAgICAgICBsZXQgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcblxuICAgICAgICBoaXN0b3J5LnVuc2hpZnQob3B0cyk7XG4gICAgICAgIGhpc3RvcnkubGVuZ3RoID49IHRoaXMubWF4SGlzdG9yeUxlbmd0aCAmJiBoaXN0b3J5LnBvcCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGZvY3VzRW50ZXIob3B0cykge1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEZvY3VzKG9wdHMsIHRydWUpO1xuICAgICAgICB0aGlzLmFkZFRvSGlzdG9yeShvcHRzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmb2N1c0xlYXZlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRGb2N1cyhvcHRzLCBmYWxzZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZm9jdXNNb3ZlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2hpc3Rvcnl9ICAgICAgICA9IG1lLFxuICAgICAgICAgICAgbmV3Q29tcG9uZW50UGF0aCA9IG9wdHMuY29tcG9uZW50UGF0aCxcbiAgICAgICAgICAgIG9sZENvbXBvbmVudFBhdGggPSBoaXN0b3J5WzBdLmNvbXBvbmVudFBhdGgsXG4gICAgICAgICAgICBmb2N1c0VudGVyICAgICAgID0gTmVvQXJyYXkuZGlmZmVyZW5jZShuZXdDb21wb25lbnRQYXRoLCBvbGRDb21wb25lbnRQYXRoKSxcbiAgICAgICAgICAgIGZvY3VzTGVhdmUgICAgICAgPSBOZW9BcnJheS5kaWZmZXJlbmNlKG9sZENvbXBvbmVudFBhdGgsIG5ld0NvbXBvbmVudFBhdGgpLFxuICAgICAgICAgICAgZm9jdXNNb3ZlICAgICAgICA9IE5lb0FycmF5LmludGVyc2VjdGlvbihuZXdDb21wb25lbnRQYXRoLCBvbGRDb21wb25lbnRQYXRoKSxcbiAgICAgICAgICAgIGNvbXBvbmVudCwgZGF0YTtcblxuICAgICAgICBtZS5zZXRDb21wb25lbnRGb2N1cyh7Y29tcG9uZW50UGF0aDogZm9jdXNMZWF2ZSwgZGF0YTogb3B0cy5kYXRhfSwgZmFsc2UpO1xuICAgICAgICBtZS5zZXRDb21wb25lbnRGb2N1cyh7Y29tcG9uZW50UGF0aDogZm9jdXNFbnRlciwgZGF0YTogb3B0cy5kYXRhfSwgdHJ1ZSk7XG5cbiAgICAgICAgZm9jdXNNb3ZlLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGggICA6IG9wdHMuZGF0YS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBvbGRQYXRoOiBoaXN0b3J5WzBdLmRhdGEucGF0aFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQub25Gb2N1c01vdmU/LihkYXRhKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZSgnZm9jdXNNb3ZlJywgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQub25Gb2N1c0NoYW5nZT8uKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5maXJlKCdmb2N1c0NoYW5nZScsIGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmFkZFRvSGlzdG9yeShvcHRzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZvY3VzaW4ob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmxhc3RGb2N1c0luRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKG1lLmxhc3RGb2N1c091dERhdGUgJiYgbWUubGFzdEZvY3VzSW5EYXRlIC0gbWUubGFzdEZvY3VzT3V0RGF0ZSA8IG1lLm1heEZvY3VzSW5PdXRHYXApIHtcbiAgICAgICAgICAgIG1lLmZvY3VzTW92ZShvcHRzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZm9jdXNFbnRlcihvcHRzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRm9jdXNvdXQob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmxhc3RGb2N1c091dERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIG1lLnRpbWVvdXQobWUubWF4Rm9jdXNJbk91dEdhcCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWUubGFzdEZvY3VzT3V0RGF0ZSA+IG1lLmxhc3RGb2N1c0luRGF0ZSkge1xuICAgICAgICAgICAgICAgIG1lLmZvY3VzTGVhdmUob3B0cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnRhaW5zRm9jdXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgY29udGFpbnNGb2N1cykge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBvcHRzLmRhdGEucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHMgPSBvcHRzLmNvbXBvbmVudFBhdGgubWFwKGlkID0+IE5lby5nZXRDb21wb25lbnQoaWQpKSxcbiAgICAgICAgICAgIGhhbmRsZXI7XG5cbiAgICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmNvbnRhaW5zRm9jdXMgPSBjb250YWluc0ZvY3VzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGRhdGEuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG4gICAgICAgICAgICAgICAgZGF0YVtjb250YWluc0ZvY3VzID8gJ3BhdGgnIDogJ29sZFBhdGgnXSA9IG9wdHMuZGF0YS5wYXRoXG5cbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gY29udGFpbnNGb2N1cyA/ICdvbkZvY3VzRW50ZXInIDogJ29uRm9jdXNMZWF2ZSc7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50W2hhbmRsZXJdPy4oZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZShjb250YWluc0ZvY3VzID8gJ2ZvY3VzRW50ZXInIDogJ2ZvY3VzTGVhdmUnLCBkYXRhKTtcblxuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5vbkZvY3VzQ2hhbmdlPy4oZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoJ2ZvY3VzQ2hhbmdlJywgZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEZvY3VzKTtcbiIsImltcG9ydCBCYXNlICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkluc3RhbmNlXG4gKiBAZXh0ZW5kcyBOZW8ubWFuYWdlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgTWFuYWdlciB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5JbnN0YW5jZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuSW5zdGFuY2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9IHRydWU7XG5cbiAgICAgICAgbWUuY29uc3VtZU5lb0lkTWFwKCk7XG5cbiAgICAgICAgTmVvLmZpbmQgICAgICA9IG1lLmZpbmQgICAgIC5iaW5kKG1lKTsgLy8gYWxpYXNcbiAgICAgICAgTmVvLmZpbmRGaXJzdCA9IG1lLmZpbmRGaXJzdC5iaW5kKG1lKTsgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldCAgICAgICA9IG1lLmdldCAgICAgIC5iaW5kKG1lKTsgLy8gYWxpYXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbGwgaWRzIHdoaWNoIGdvdCBhcHBsaWVkIHRvIHRoZSBOZW8gbmFtZXNwYWNlIGJlZm9yZSB0aGlzIGluc3RhbmNlIGdvdCBjcmVhdGVkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNvbnN1bWVOZW9JZE1hcCgpIHtcbiAgICAgICAgaWYgKE5lby5pZE1hcCkge1xuICAgICAgICAgICAgdGhpcy5hZGQoT2JqZWN0LnZhbHVlcyhOZW8uaWRNYXApKTtcbiAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoSW5zdGFuY2UpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkFycmF5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0FycmF5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5BcnJheSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuQXJyYXknXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKGFyciwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxLCBidXQgbm90IGluIGFycmF5MlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MT1bXVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5Mj1bXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZGlmZmVyZW5jZShhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+ICFhcnJheTIuaW5jbHVkZXMoaXRlbSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBpdGVtIGlzIGluY2x1ZGVkIGJ5IHJlZmVyZW5jZSBpbnNpZGUgdGhlIGFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIGhhc0l0ZW0oYXJyLCBpdGVtKSB7XG4gICAgICAgIHJldHVybiBhcnIuaW5jbHVkZXMoaXRlbSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgQXJyYXkgb2YgaXRlbXMgdG8gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxuICAgICAqIER1cGxpY2F0ZXMgd2lsbCBvbmx5IGdldCBtYXRjaGVkIGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnQoYXJyLCBpbmRleCwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVuID0gaXRlbXMubGVuZ3RoIC0xLFxuICAgICAgICAgICAgaSAgID0gbGVuLFxuICAgICAgICAgICAgY3VycmVudEluZGV4LCBpdGVtO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgYmFja3dhcmRzXG4gICAgICAgIGZvciAoOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xuXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGFyciwgY3VycmVudEluZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAwLCBpdGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGludGVyc2VjdGlvbihhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+IGFycmF5Mi5pbmNsdWRlcyhpdGVtKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhbiBpdGVtIGluc2lkZSBhcnIgZnJvbSBmcm9tSW5kZXggdG8gdG9JbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgICAqL1xuICAgIHN0YXRpYyBtb3ZlKGFyciwgZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPT09IHRvSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tSW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgZnJvbUluZGV4ID0gYXJyLmxlbmd0aCAtIDFcbiAgICAgICAgfVxuXG4gICAgICAgIGFyci5zcGxpY2UodG9JbmRleCwgMCwgYXJyLnNwbGljZShmcm9tSW5kZXgsIDEpWzBdKTtcbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBmcm9tIGFuIGFycmF5LiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlKGFyciwgaXRlbXMpIHtcbiAgICAgICAgbGV0IGluZGV4O1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGluZGV4ID4gLTEgJiYgYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBjb21iaW5lIGFkZCAmIHJlbW92ZSBpbiBvbmUgY2FsbC5cbiAgICAgKiBZb3UgY2FuIHBhc3Mgc2luZ2xlIGl0ZW1zIG9yIGFuIGFycmF5IG9mIGl0ZW1zIHRvIGFkZCBvciB0byByZW1vdmUuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSByZW1vdmVJdGVtc1xuICAgICAqIEBwYXJhbSB7Kn0gYWRkSXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlQWRkKGFyciwgcmVtb3ZlSXRlbXMsIGFkZEl0ZW1zKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGFyciwgcmVtb3ZlSXRlbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoYXJyLCBhZGRJdGVtcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgZXhpc3QsIG90aGVyd2lzZSBhZGRzIGl0XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYWRkXVxuICAgICAqL1xuICAgIHN0YXRpYyB0b2dnbGUoYXJyLCBpdGVtLCBhZGQgPSAhdGhpcy5oYXNJdGVtKGFyciwgaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbYWRkID8gJ2FkZCcgOiAncmVtb3ZlJ10oYXJyLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIHRoZSBwYXNzZWQgYXJyYXlzLlxuICAgICAqIE11bHRpcGxlIGFycmF5cyBtYXkgYmUgcGFzc2VkLlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB1bmlvbigpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KEFycmF5LnByb3RvdHlwZS5jb25jYXQoLi4uYXJndW1lbnRzKSldXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyB1bnNoaWZ0KGFyciwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIudW5zaGlmdChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhOZW9BcnJheSk7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuQ2xhc3NTeXN0ZW1cbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQ2xhc3NTeXN0ZW0gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkNsYXNzU3lzdGVtJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5DbGFzc1N5c3RlbSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjYW4gZ2V0IHVzZWQgaW5zaWRlIGJlZm9yZVNldCBtZXRob2RzIGluIGNhc2UgeW91IHdhbnQgdG8gY3JlYXRlIGluc3RhbmNlcyBsaWtlIHN0b3Jlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5lby5jb3JlLkJhc2V8bnVsbH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfFN0cmluZ30gW0RlZmF1bHRDbGFzcz1udWxsXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmYXVsdFZhbHVlcz17fV1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgYmVmb3JlU2V0SW5zdGFuY2UoY29uZmlnLCBEZWZhdWx0Q2xhc3M9bnVsbCwgZGVmYXVsdFZhbHVlcz17fSkge1xuICAgICAgICBsZXQgY29uZmlnVHlwZSA9IE5lby50eXBlT2YoY29uZmlnKTtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKERlZmF1bHRDbGFzcykpIHtcbiAgICAgICAgICAgIERlZmF1bHRDbGFzcyA9IE5lby5ucyhEZWZhdWx0Q2xhc3MpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbmZpZyAmJiBEZWZhdWx0Q2xhc3MpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IE5lby5jcmVhdGUoRGVmYXVsdENsYXNzLCBkZWZhdWx0VmFsdWVzKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZ1R5cGUgPT09ICdOZW9DbGFzcycpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IE5lby5jcmVhdGUoY29uZmlnLCBkZWZhdWx0VmFsdWVzKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZ1R5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLm50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gTmVvLm50eXBlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0NvbmZpZyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKERlZmF1bHRDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDb25maWcubW9kdWxlID0gRGVmYXVsdENsYXNzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihuZXdDb25maWcsIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25maWcgPSBOZW8uY3JlYXRlKG5ld0NvbmZpZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb25maWdUeXBlID09PSAnTmVvSW5zdGFuY2UnKSB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlcz8ubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm9uKGRlZmF1bHRWYWx1ZXMubGlzdGVuZXJzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoQ2xhc3NTeXN0ZW0pO1xuIiwiLyoqXG4gKiBBcHBlbmQgYXJncyBpbnN0ZWFkIG9mIHByZXBlbmRpbmcgdGhlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEFwcGVuZChmbiwgc2NvcGUpIHtcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5jb25jYXQoYXJncykpXG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHNjb3BlXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXk9MzAwXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXIoY2FsbGJhY2ssIHNjb3BlLCBkZWxheT0zMDApIHtcbiAgICBsZXQgdGltZW91dElkO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gY2FsbGJhY2sgaW52b2NhdGlvbiBjb21lcyBcImRlbGF5XCIgbXMgYWZ0ZXIgdGhlIGxhc3QgY2FsbCB0byB3cmFwcGVyXG4gICAgICAgIC8vIHNvIGNhbmNlbCBhbnkgcGVuZGluZyBpbnZvY2F0aW9uLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuICAgICAgICB3cmFwcGVyLmlzUGVuZGluZyA9IHRydWU7XG5cbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSAwO1xuICAgICAgICAgICAgd3JhcHBlci5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKVxuICAgICAgICB9LCBkZWxheSlcbiAgICB9O1xuXG4gICAgd3JhcHBlci5jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHdyYXBwZXIuaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwcGVyXG59XG5cbi8qKlxuICogSW50ZW5kZWQgZm9yIGZ1bmN0aW9ucyB3aXRoIDEgcGFyYW0gd2hlcmUgdGhlIGludGVyY2VwdG9yIGNhbiBjaGFuZ2UgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0TWV0aG9kTmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW50ZXJjZXB0RnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZT10YXJnZXRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludGVyY2VwdG9yKHRhcmdldCwgdGFyZ2V0TWV0aG9kTmFtZSwgaW50ZXJjZXB0RnVuY3Rpb24sIHNjb3BlKSB7XG4gICAgbGV0IHRhcmdldE1ldGhvZCA9IHRhcmdldFt0YXJnZXRNZXRob2ROYW1lXTtcblxuICAgIHJldHVybiAodGFyZ2V0W3RhcmdldE1ldGhvZE5hbWVdID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldE1ldGhvZC5jYWxsKHRhcmdldCwgaW50ZXJjZXB0RnVuY3Rpb24uY2FsbChzY29wZSB8fCB0YXJnZXQsIHZhbHVlKSlcbiAgICB9KVxufVxuXG4vKipcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VxdWVuY2UodGFyZ2V0LCBtZXRob2ROYW1lLCBmbiwgc2NvcGUpIHtcbiAgICBsZXQgbWV0aG9kID0gdGFyZ2V0W21ldGhvZE5hbWVdIHx8IE5lby5lbXB0eUZuO1xuXG4gICAgcmV0dXJuICh0YXJnZXRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSB8fCB0aGlzLCBhcmd1bWVudHMpXG4gICAgfSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBzY29wZVxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5PTMwMFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHNjb3BlLCBkZWxheT0zMDApIHtcbiAgICBsZXQgZGVib3VuY2VUaW1lcjtcblxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIC8vIGxlYWRpbmcgZWRnZSA9PiB0cmlnZ2VyIHRoZSBmaXJzdCBjYWxsIHJpZ2h0IGF3YXlcbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIoZGVib3VuY2VUaW1lcikpIHtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHNjb3BlIChpbnN0YW5jZSkgZGlkIG5vdCBnZXQgZGVzdHJveWVkIHlldFxuICAgICAgICAgICAgc2NvcGU/LmlkICYmIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcblxuICAgICAgICAgICAgLy8gd2Ugc3RpbGwgd2FudCB0byBzdGFydCBhIHRpbWVyIHRvIGRlbGF5IHRoZSAybmQrIHVwZGF0ZVxuICAgICAgICAgICAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge2RlYm91bmNlVGltZXIgPSBudWxsfSwgIGRlbGF5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgc2NvcGUgKGluc3RhbmNlKSBkaWQgbm90IGdldCBkZXN0cm95ZWQgeWV0XG4gICAgICAgICAgICAgICAgc2NvcGU/LmlkICYmIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7ZGVib3VuY2VUaW1lciA9IG51bGx9LCAgZGVsYXkpXG4gICAgICAgICAgICB9LCAgZGVsYXkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGludGVyY2VwdG9yIGNhbiBwcmV2ZW50IHRoZSB0YXJnZXRNZXRob2QgZnJvbSBnZXR0aW5nIGV4ZWN1dGVkIGluIGNhc2UgaXQgcmV0dXJucyBmYWxzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRNZXRob2ROYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnRlcmNlcHRGdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlPXRhcmdldFxuICogQHBhcmFtIHsqfSBwcmV2ZW50ZWRSZXR1cm5WYWx1ZT1udWxsIFRoZSB2YWx1ZSB0byByZXR1cm4gaW4gY2FzZSB0aGUgaW50ZXJjZXB0RnVuY3Rpb24gcmV0dXJucyBmYWxzZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0KHRhcmdldCwgdGFyZ2V0TWV0aG9kTmFtZSwgaW50ZXJjZXB0RnVuY3Rpb24sIHNjb3BlLCBwcmV2ZW50ZWRSZXR1cm5WYWx1ZT1udWxsKSB7XG4gICAgbGV0IHRhcmdldE1ldGhvZCA9IHRhcmdldFt0YXJnZXRNZXRob2ROYW1lXTtcblxuICAgIHJldHVybiAodGFyZ2V0W3RhcmdldE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoaW50ZXJjZXB0RnVuY3Rpb24uYXBwbHkoc2NvcGUgfHwgdGFyZ2V0LCBhcmd1bWVudHMpID09PSBmYWxzZSlcbiAgICAgICAgICAgID8gcHJldmVudGVkUmV0dXJuVmFsdWVcbiAgICAgICAgICAgIDogdGFyZ2V0TWV0aG9kLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKVxuICAgIH0pXG59XG5cbi8qKlxuICogTG9jYXRlIGEgY2FsbGFibGUgZnVuY3Rpb24gYnkgbmFtZSBpbiB0aGUgcGFzc2VkIHNjb3BlLlxuICpcbiAqIElmIHRoZSBuYW1lIHN0YXJ0cyB3aXRoICd1cC4nLCB0aGUgcGFyZW50IENvbXBvbmVudCBjaGFpbiBpcyBzZWFyY2hlZC5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgYnkgbWFuYWdlci5Eb21FdmVudHMgJiBjb3JlLk9ic2VydmFibGUuZmlyZSBhbmQgYnkgJ2hhbmRsZXInIGZ1bmN0aW9uIGNhbGxzIHRvIHJlc29sdmVcbiAqIHN0cmluZyBmdW5jdGlvbiBuYW1lcyBpbiB0aGUgQ29tcG9uZW50J3Mgb3duIGhpZXJhcmNoeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBBIGZ1bmN0aW9uLCBvciB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QvXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGU9dGhpcyBUaGUgc2NvcGUgdG8gZmluZCB0aGUgZnVuY3Rpb24gaW4gaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nLlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDYWxsYmFjayhmbiwgc2NvcGU9dGhpcykge1xuICAgIGlmIChOZW8uaXNTdHJpbmcoZm4pKSB7XG4gICAgICAgIGlmICghc2NvcGVbZm5dICYmIGZuLnN0YXJ0c1dpdGgoJ3VwLicpKSB7XG4gICAgICAgICAgICBmbiA9IGZuLnNsaWNlKDMpO1xuICAgICAgICAgICAgd2hpbGUgKCFzY29wZVtmbl0gJiYgKHNjb3BlID0gc2NvcGUucGFyZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29wZSA9IHNjb3BlLmdldENvbnRyb2xsZXI/LigpPy5nZXRIYW5kbGVyU2NvcGUoZm4sIG51bGwpIHx8IHNjb3BlXG4gICAgICAgIH1cblxuICAgICAgICBmbiA9IHNjb3BlW2ZuXVxuICAgIH1cblxuICAgIHJldHVybiB7Zm4sIHNjb3BlfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHNjb3BlXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXk9MzAwXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgc2NvcGUsIGRlbGF5PTMwMCkge1xuICAgIGxldCBsYXN0UmFuRGF0ZSwgdGltZW91dElkO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCFsYXN0UmFuRGF0ZSkge1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgc2NvcGUgKGluc3RhbmNlKSBkaWQgbm90IGdldCBkZXN0cm95ZWQgeWV0XG4gICAgICAgICAgICBzY29wZT8uaWQgJiYgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpO1xuXG4gICAgICAgICAgICBsYXN0UmFuRGF0ZSA9IERhdGUubm93KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG5cbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbkRhdGUpID49IGRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHNjb3BlIChpbnN0YW5jZSkgZGlkIG5vdCBnZXQgZGVzdHJveWVkIHlldFxuICAgICAgICAgICAgICAgICAgICBzY29wZT8uaWQgJiYgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxhc3RSYW5EYXRlID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0UmFuRGF0ZSkpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5IYXNoSGlzdG9yeVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBIYXNoSGlzdG9yeSBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IHRydWVcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuSGFzaEhpc3RvcnknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkhhc2hIaXN0b3J5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4SXRlbXM9NTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4SXRlbXM6IDUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmluZyBvbmUgc3RhY2sgcGVyIHdpbmRvd0lkXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3RhY2tzPXt9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0YWNrczoge31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbd2luZG93SWRdXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBmaXJzdCh3aW5kb3dJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdCgwLCB3aW5kb3dJZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3dpbmRvd0lkXVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0QXQoaW5kZXgsIHdpbmRvd0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YWNrKHdpbmRvd0lkKVtpbmRleF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3dpbmRvd0lkXVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQod2luZG93SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhY2sod2luZG93SWQpLmxlbmd0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbd2luZG93SWRdXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRTdGFjayh3aW5kb3dJZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge3N0YWNrc30gPSBtZSxcbiAgICAgICAgICAgIHN0YWNrSWQgID0gd2luZG93SWQgfHwgT2JqZWN0LmtleXMoc3RhY2tzKVswXSxcbiAgICAgICAgICAgIHN0YWNrICAgID0gc3RhY2tzW3N0YWNrSWRdO1xuXG4gICAgICAgIGlmICghc3RhY2spIHtcbiAgICAgICAgICAgIHN0YWNrc1tzdGFja0lkXSA9IHN0YWNrID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFja1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYXBwTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLmhhc2hcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5oYXNoU3RyaW5nXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEud2luZG93SWRcbiAgICAgKi9cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge3dpbmRvd0lkfSA9IGRhdGEsXG4gICAgICAgICAgICBzdGFjayAgICAgID0gbWUuZ2V0U3RhY2sod2luZG93SWQpO1xuXG4gICAgICAgIGlmIChzdGFja1swXT8uaGFzaFN0cmluZyAhPT0gZGF0YS5oYXNoU3RyaW5nKSB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YVt3aW5kb3dJZF07XG4gICAgICAgICAgICBzdGFjay51bnNoaWZ0KGRhdGEpO1xuXG4gICAgICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gbWUubWF4SXRlbXMpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCBkYXRhLCBzdGFja1sxXSB8fCBudWxsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3dpbmRvd0lkXVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc2Vjb25kKHdpbmRvd0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0KDAsIHdpbmRvd0lkKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoSGFzaEhpc3RvcnkpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkxvZ2dlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkxvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuTG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgbWluaW11bSBsZXZlbCwgd2hpY2ggeW91IHdhbnQgdG8gb3V0cHV0LlxuICAgICAgICAgKiBDaGFuZ2UgdGhpcyBhdCBhbnkgdGltZSB1c2luZyBhIHZhbHVlIG9mIGxvZ0xldmVsczogWydpbmZvJywgJ2xvZycsICd3YXJuJywgJ2Vycm9yJ11cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIE5lby51dGlsLkxvZ2dlci5sZXZlbCA9ICdlcnJvcidcbiAgICAgICAgICpcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0naW5mbydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGV2ZWxfOiAnaW5mbycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBlbmFibGVMb2dzPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T2JqZWN0fSBsb2dDaGFyXG4gICAgICovXG4gICAgbG9nQ2hhcnMgID0ge1xuICAgICAgICBlcnJvcjogJ0UnLFxuICAgICAgICBpbmZvIDogJ0knLFxuICAgICAgICBsb2cgIDogJ0wnLFxuICAgICAgICB3YXJuIDogJ1cnXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09iamVjdH0gY29sb3JzXG4gICAgICovXG4gICAgbG9nQ29sb3JzID0ge1xuICAgICAgICBlcnJvcjogJ2luZGlhbnJlZCcsXG4gICAgICAgIGluZm8gOiAnI2FjYWNhYycsXG4gICAgICAgIGxvZyAgOiAnIzQ0ODg4OCcsXG4gICAgICAgIHdhcm4gOiAnIzZkNmQwMCdcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9nTGV2ZWxzXG4gICAgICogQG1lbWJlciB7U3RyaW5nW119IGxvZ0xldmVsc1xuICAgICAqL1xuICAgIGxvZ0xldmVscyA9IFsnaW5mbycsICdsb2cnLCAnd2FybicsICdlcnJvciddXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGFsaWFzZXNcbiAgICAgICAgTmVvLmFwcGx5RnJvbU5zKE5lbywgbWUsIHtcbiAgICAgICAgICAgIGVycm9yICAgOiAnZXJyb3InLFxuICAgICAgICAgICAgaW5mbyAgICA6ICdpbmZvJyxcbiAgICAgICAgICAgIGxvZyAgICAgOiAnbG9nJyxcbiAgICAgICAgICAgIGxvZ0Vycm9yOiAnbG9nRXJyb3InLFxuICAgICAgICAgICAgd2FybiAgICA6ICd3YXJuJ1xuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICBtZS50aW1lb3V0KDUwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghTmVvLmNvbmZpZy5lbmFibGVMb2dzSW5Qcm9kdWN0aW9uICYmIE5lby5jb25maWcuZW52aXJvbm1lbnQgPT09ICdkaXN0L3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbWUud3JpdGUgPSBOZW8uZW1wdHlGblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBsZXZlbCB0byBudW1iZXIgYmFzZWQgb24gcG9zaXRpb24gaW4gbG9nTGV2ZWxzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgYmVmb3JlU2V0TGV2ZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ0xldmVscy5pbmRleE9mKHZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIGVycm9yKHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcih2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbnRlcm5hbCBoZWxwZXIgdG8gY2F0Y2ggY2FsbGVyXG4gICAgICogbm8ga25vd24gbmF0aXZlIHdheSBpbiBtb2Rlcm4gSlMgdG8ga25vdyB3aGF0IGZpbGUgdGhhdCB0cmlnZ2VyZWQgdGhlIGN1cnJlbnQgbWV0aG9kXG4gICAgICogdGhlcmVmb3JlIHdlIHVzZSBFcnJvciwgd2UgY2FuIGdldCB0aGUgY2FsbGVyIGZpbGUgZnJvbSB0aGUgc3RhY2sgdHJhY2Ugc3RyaW5nLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldENhbGxlcigpIHtcbiAgICAgICAgbGV0IGNhbGxlcl9wYXRoID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgZXJyICAgICAgICAgPSBuZXcgRXJyb3IoKSxcbiAgICAgICAgICAgIHN0YWNrX2xpbmVzID0gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKSxcbiAgICAgICAgICAgIGZvdW5kX3RoaXMgID0gZmFsc2UsXG4gICAgICAgICAgICBpLCBsaW5lO1xuXG4gICAgICAgIGZvciAoaSBpbiBzdGFja19saW5lcykge1xuICAgICAgICAgICAgbGluZSA9IHN0YWNrX2xpbmVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWZvdW5kX3RoaXMgJiYgL0xvZ2dlclxcLm1qcy8udGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIGZvdW5kX3RoaXMgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvdW5kX3RoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIS9Mb2dnZXJcXC5tanMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjbG9zaW5nIClcbiAgICAgICAgICAgICAgICAgICAgbGluZSAgICAgICAgPSBsaW5lLnJlcGxhY2UoJyknLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgcGFydCBhZnRlciB0aGUgbGFzdCAvXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlcl9wYXRoID0gbGluZS5tYXRjaCgvKFteXFwvXSspJC8pWzFdLm1hdGNoKC8oW14gXSspJC8pWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGxlcl9wYXRoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBpbmZvKC4uLmFyZ3MpIHtcbiAgICAgICAgYXJncyA9IHRoaXMucmVzb2x2ZUFyZ3MoLi4uYXJncyk7XG4gICAgICAgIHRoaXMud3JpdGUoYXJncywgJ2luZm8nKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgYXJncyA9IHRoaXMucmVzb2x2ZUFyZ3MoLi4uYXJncyk7XG4gICAgICAgIHRoaXMud3JpdGUoYXJncywgJ2xvZycpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBsb2dFcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MgPSB0aGlzLnJlc29sdmVBcmdzKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLndyaXRlKGFyZ3MsICdlcnJvcicpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbnRleHRNZW51KGRhdGEpIHtcbiAgICAgICAgbGV0IHtjb25maWd9ID0gTmVvO1xuXG4gICAgICAgIGlmIChjb25maWcuZW5hYmxlQ29tcG9uZW50TG9nZ2VyICYmICEoY29uZmlnLmVudiA9PT0gJ2Rpc3QvcHJvZHVjdGlvbicgJiYgY29uZmlnLmVuYWJsZUxvZ3NJblByb2R1Y3Rpb24pKSB7XG4gICAgICAgICAgICBsZXQgaXNHcm91cFNldCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDtcblxuICAgICAgICAgICAgZGF0YS5wYXRoLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpdGVtLmlkLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNHcm91cFNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcm91cFNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wb25lbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlzR3JvdXBTZXQgJiYgY29uc29sZS5ncm91cEVuZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBoZWxwZXIgZm9yIGFyZ3NcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVzb2x2ZUFyZ3MoLi4uYXJncykge1xuICAgICAgICBsZXQgaWRlbnRpZmllciA9IGFyZ3NbMF0sXG4gICAgICAgICAgICBhcmdzT2JqZWN0ID0ge307XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICAgICAgYXJnc09iamVjdC5tc2cgPSBhcmdzWzBdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdChpZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgICAgIGFyZ3NPYmplY3QgPSBpZGVudGlmaWVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBhcmdzT2JqZWN0Lm1zZyAgPSBhcmdzWzBdO1xuICAgICAgICAgICAgYXJnc09iamVjdC5kYXRhID0gYXJncy5zbGljZSgxKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFyZ3NPYmplY3RcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIHdhcm4oLi4uYXJncykge1xuICAgICAgICBhcmdzID0gdGhpcy5yZXNvbHZlQXJncyguLi5hcmdzKTtcbiAgICAgICAgdGhpcy53cml0ZShhcmdzLCAnd2FybicpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3V0cHV0IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGxldmVsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHdyaXRlKGFyZ3MsIGxldmVsKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmJlZm9yZVNldExldmVsKGxldmVsKSA8IG1lLmxldmVsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCcjJywgYXJncy5tc2csIGxldmVsKTtcblxuICAgICAgICBsZXQgbG9nQ29sb3IgPSBtZS5sb2dDb2xvcnNbbGV2ZWxdLFxuICAgICAgICAgICAgbG9nQ2hhciAgPSBtZS5sb2dDaGFyc1tsZXZlbF0sXG4gICAgICAgICAgICBiZyAgICAgICA9IGBiYWNrZ3JvdW5kLWNvbG9yOiR7bG9nQ29sb3J9OyBjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OiA5MDA7YCxcbiAgICAgICAgICAgIGNvbG9yICAgID0gYGNvbG9yOiR7bG9nQ29sb3J9O2AsXG4gICAgICAgICAgICBtc2cgICAgICA9IGBbJHttZS5nZXRDYWxsZXIoKX1dICR7YXJncy5tc2d9YDtcblxuICAgICAgICBpZiAoYXJncy5kYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGAlYyAke2xvZ0NoYXJ9ICVjICR7bXNnfWAsIGJnLCBjb2xvcilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuZGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyAke2xvZ0NoYXJ9ICVjICR7bXNnfWAsIGJnLCBjb2xvcilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoTG9nZ2VyKTtcbiIsImltcG9ydCBCYXNlICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuVkRvbVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBWRG9tIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5WRG9tJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WRG9tJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZW1vdmVJZHM9dHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNsb25lZCB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIGNsb25lKHZkb20sIHJlbW92ZUlkcz10cnVlKSB7XG4gICAgICAgIGxldCBjbG9uZSA9IE5lby5jbG9uZSh2ZG9tLCB0cnVlKTtcblxuICAgICAgICBpZiAocmVtb3ZlSWRzKSB7XG4gICAgICAgICAgICBkZWxldGUgY2xvbmUuaWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbG9uZS5jbikge1xuICAgICAgICAgICAgY2xvbmUuY24uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjbG9uZS5jbltpbmRleF0gPSBWRG9tLmNsb25lKGl0ZW0sIHJlbW92ZUlkcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xvbmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdmRvbSBjaGlsZCBub2RlcyBieSBpZCBvciBvcHRzIG9iamVjdCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlcGxhY2VDb21wb25lbnRSZWZzPXRydWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJlbnROb2RlXSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKiAgICAge051bWJlcn0gaW5kZXhcbiAgICAgKiAgICAge1N0cmluZ30gcGFyZW50SWRcbiAgICAgKiAgICAge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kKHZkb20sIG9wdHMsIHJlcGxhY2VDb21wb25lbnRSZWZzPXRydWUsIGluZGV4LCBwYXJlbnROb2RlKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcbiAgICAgICAgb3B0cyAgPSAhTmVvLmlzU3RyaW5nKG9wdHMpID8gb3B0cyA6IHtpZDogb3B0c307XG5cbiAgICAgICAgaWYgKHJlcGxhY2VDb21wb25lbnRSZWZzKSB7XG4gICAgICAgICAgICB2ZG9tID0gVkRvbS5nZXRWZG9tKHZkb20pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXG4gICAgICAgICAgICBzdHlsZU1hdGNoID0gdHJ1ZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZkb20uY24/Lmxlbmd0aCxcbiAgICAgICAgICAgIG9wdHNBcnJheSAgPSBPYmplY3QuZW50cmllcyhvcHRzKSxcbiAgICAgICAgICAgIG9wdHNMZW5ndGggPSBvcHRzQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgc3ViQ2hpbGQ7XG5cbiAgICAgICAgb3B0c0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZkb20uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE5lby5pc0FycmF5KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZkb21ba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc0FycmF5KHZhbHVlKSAmJiBOZW8uaXNBcnJheSh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogZWl0aGVyIHNlYXJjaCB0aGUgdmRvbSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmQ6IGNscyBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgb2YgQXJyYXlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2ZG9tW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtzdHlsZUtleSwgc3R5bGVWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodmRvbVtrZXldLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSAmJiB2ZG9tW2tleV1bc3R5bGVLZXldID09PSBzdHlsZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaW5kOiBzdHlsZSBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciBtaXhlZCB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgKE9iamVjdCBWUyBTdHJpbmcpJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbmRleCwgcGFyZW50Tm9kZSwgdmRvbX1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZG9tLmNuKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZkb20uY25baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQgPSBWRG9tLmZpbmQodmRvbS5jbltpXSwgb3B0cywgcmVwbGFjZUNvbXBvbmVudFJlZnMsIGksIHZkb20pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggICAgIDogc3ViQ2hpbGQuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogc3ViQ2hpbGQucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZG9tICAgICAgOiBzdWJDaGlsZC52ZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0IGZvciBmaW5kKHZkb20sIHtmbGFnOiBmbGFnfSk7XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmxhZyBUaGUgZmxhZyByZWZlcmVuY2Ugc3BlY2lmaWVkIG9uIHRoZSB0YXJnZXQgdmRvbSBjaGlsZCBub2RlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRCeUZsYWcodmRvbSwgZmxhZykge1xuICAgICAgICByZXR1cm4gVkRvbS5maW5kKHZkb20sIHtmbGFnfSk/LnZkb21cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB2ZG9tXG4gICAgICogQHBhcmFtIFtjaGlsZElkcz1bXV1cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXG4gICAgICovXG4gICAgc3RhdGljIGdldENoaWxkSWRzKHZkb20sIGNoaWxkSWRzPVtdKSB7XG4gICAgICAgIHZkb20gPSBWRG9tLmdldFZkb20odmRvbSk7XG5cbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2ZG9tPy5jbiB8fCBbXTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkTm9kZS5pZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRJZHMgPSBWRG9tLmdldENoaWxkSWRzKGNoaWxkTm9kZSwgY2hpbGRJZHMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZElkc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb2x1bW5Ob2Rlcyh2ZG9tLCBpbmRleCkge1xuICAgICAgICB2ZG9tID0gVkRvbS5nZXRWZG9tKHZkb20pO1xuXG4gICAgICAgIGxldCBjb2x1bW5Ob2RlcyA9IFtdO1xuXG4gICAgICAgIHZkb20uY24/LmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGlmIChyb3cuY24/LltpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5Ob2Rlcy5wdXNoKHJvdy5jbltpbmRleF0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNvbHVtbk5vZGVzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGdldENvbHVtbk5vZGVzSWRzKHZkb20sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBWRG9tLmdldENvbHVtbk5vZGVzKHZkb20sIGluZGV4KS5tYXAoZSA9PiBlLmlkKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZsYWdcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbbWF0Y2hBcnJheV1cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFuIGFycmF5IG9mIHZkb20gbm9kZXMgd2hpY2ggbWF0Y2ggdGhlIGZsYWdcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0RmxhZ3ModmRvbSwgZmxhZywgbWF0Y2hBcnJheSkge1xuICAgICAgICB2ZG9tID0gVkRvbS5nZXRWZG9tKHZkb20pO1xuXG4gICAgICAgIGlmICghbWF0Y2hBcnJheSkge1xuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodmRvbS5mbGFnID09PSBmbGFnKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHZkb20pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAodmRvbT8uY24gfHwgW10pLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuZmxhZyA9PT0gZmxhZykge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaChjaGlsZE5vZGUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBWRG9tLmdldEZsYWdzKGNoaWxkTm9kZSwgZmxhZywgbWF0Y2hBcnJheSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoQXJyYXlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdG9wTGV2ZWw9dHJ1ZSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQYXJlbnROb2Rlcyh2ZG9tLCBpZCwgdG9wTGV2ZWw9dHJ1ZSkge1xuICAgICAgICB2ZG9tID0gVkRvbS5nZXRWZG9tKHZkb20pO1xuXG4gICAgICAgIGxldCBwYXJlbnRzID0gbnVsbCxcbiAgICAgICAgICAgIGkgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICA9IHZkb20uY24/Lmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGlmICh2ZG9tLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBwYXJlbnRzID0gVkRvbS5nZXRQYXJlbnROb2Rlcyh2ZG9tLmNuW2ldLCBpZCwgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50cykge1xuICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCh2ZG9tLmNuW2ldKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcExldmVsICYmIHBhcmVudHMpIHtcbiAgICAgICAgICAgIHBhcmVudHMucHVzaCh2ZG9tKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCB1c2luZyBtYW5hZ2VyLkNvbXBvbmVudCB0byByZXBsYWNlIHZkb20gcmVmZXJlbmNlcyBpZiBuZWVkZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGdldFZkb20odmRvbSkge1xuICAgICAgICBpZiAodmRvbS5jb21wb25lbnRJZCkge1xuICAgICAgICAgICAgdmRvbSA9IENvbXBvbmVudE1hbmFnZXIuZ2V0KHZkb20uY29tcG9uZW50SWQpLnZkb21cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZG9tXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgZ2l2ZW4gbm9kZVRvSW5zZXJ0IGFmdGVyIGEgdGFyZ2V0Tm9kZSBpbnNpZGUgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbSBUaGUgdmRvbSB0cmVlIGNvbnRhaW5pbmcgdGhlIHRhcmdldE5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZVRvSW5zZXJ0IFRoZSBuZXcgdmRvbSB0byBpbnNlcnRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHRhcmdldE5vZGVJZCBFaXRoZXIgYSB2ZG9tIG5vZGUgb3IgYSB2ZG9tIG5vZGUgaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0QWZ0ZXJOb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBWRG9tLmluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIGZhbHNlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBiZWZvcmUgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnRCZWZvcmVOb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBWRG9tLmluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIHRydWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgZ2l2ZW4gbm9kZVRvSW5zZXJ0IGJlZm9yZSBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBpbnNlcnRCZWZvcmUgdHJ1ZSBpbnNlcnRzIHRoZSBuZXcgbm9kZSBhdCB0aGUgc2FtZSBpbmRleCwgaW5kZXgrMSBvdGhlcndpc2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0Tm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCwgaW5zZXJ0QmVmb3JlKSB7XG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QodGFyZ2V0Tm9kZUlkKSkge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZUlkID0gdGFyZ2V0Tm9kZUlkLmlkXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IFZEb20uZmluZCh2ZG9tLCB0YXJnZXROb2RlSWQpLFxuICAgICAgICAgICAgaW5kZXg7XG5cbiAgICAgICAgaWYgKHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgIGluZGV4ID0gaW5zZXJ0QmVmb3JlID8gdGFyZ2V0Tm9kZS5pbmRleCA6IHRhcmdldE5vZGUuaW5kZXggKyAxO1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5wYXJlbnROb2RlLmNuLnNwbGljZShpbmRleCwgMCwgbm9kZVRvSW5zZXJ0KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdmRvbSBjaGlsZCBub2RlcyBieSBpZCBvciBvcHRzIG9iamVjdCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb21dXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kICYgcmVtb3ZlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVWZG9tQ2hpbGQodmRvbSwgb3B0cykge1xuICAgICAgICBsZXQgY2hpbGQgPSBWRG9tLmZpbmQodmRvbSwgb3B0cyk7XG5cbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLmNuLnNwbGljZShjaGlsZC5pbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBjaGlsZCBub2RlIGluc2lkZSBhIHZkb20gdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Q2hpbGROb2RlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlcGxhY2VkXG4gICAgICovXG4gICAgc3RhdGljIHJlcGxhY2VWZG9tQ2hpbGQodmRvbSwgaWQsIG5ld0NoaWxkTm9kZSkge1xuICAgICAgICB2ZG9tID0gVkRvbS5nZXRWZG9tKHZkb20pO1xuXG4gICAgICAgIGxldCBjbiAgPSB2ZG9tLmNuIHx8IFtdLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IGNuLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodmRvbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVwbGFjZVZkb21DaGlsZDogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZClcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNuW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNuW2ldID0gbmV3Q2hpbGROb2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWRG9tLnJlcGxhY2VWZG9tQ2hpbGQoY2hpbGROb2RlLCBpZCwgbmV3Q2hpbGROb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmVvLnZkb20uSGVscGVyIHdpbGwgY3JlYXRlIGlkcyBmb3IgZWFjaCB2bm9kZSB3aGljaCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgb25lLFxuICAgICAqIHNvIHdlIG5lZWQgdG8gc3luYyB0aGVtIGludG8gdGhlIHZkb20uXG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yY2U9ZmFsc2UgVGhlIGZvcmNlIHBhcmFtIHdpbGwgZW5mb3JjZSBvdmVyd3JpdGluZyBkaWZmZXJlbnQgaWRzXG4gICAgICovXG4gICAgc3RhdGljIHN5bmNWZG9tSWRzKHZub2RlLCB2ZG9tLCBmb3JjZT1mYWxzZSkge1xuICAgICAgICBpZiAodm5vZGUgJiYgdmRvbSkge1xuICAgICAgICAgICAgdmRvbSA9IFZEb20uZ2V0VmRvbSh2ZG9tKTtcblxuICAgICAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2ZG9tLmNuLFxuICAgICAgICAgICAgICAgIGNuLCBpLCBsZW47XG5cbiAgICAgICAgICAgIGlmIChmb3JjZSkge1xuICAgICAgICAgICAgICAgIGlmICh2bm9kZS5pZCAmJiB2ZG9tLmlkICE9PSB2bm9kZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICB2ZG9tLmlkID0gdm5vZGUuaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlIG9ubHkgd2FudCB0byBjaGFuZ2UgdmRvbSBpZHMgaW4gY2FzZSB0aGVyZSBpcyBub3QgYWxyZWFkeSBhbiBvd24gaWRcbiAgICAgICAgICAgICAgICAvLyAodGhpbmsgb2YgYWRkaW5nICYgcmVtb3Zpbmcgbm9kZXMgaW4gcGFyYWxsZWwpXG4gICAgICAgICAgICAgICAgaWYgKCF2ZG9tLmlkICYmIHZub2RlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZkb20uaWQgPSB2bm9kZS5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjbiAgPSBjaGlsZE5vZGVzLm1hcChpdGVtID0+IFZEb20uZ2V0VmRvbShpdGVtKSk7XG4gICAgICAgICAgICAgICAgY24gID0gY24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZW1vdmVEb20gIT09IHRydWUpO1xuICAgICAgICAgICAgICAgIGkgICA9IDA7XG4gICAgICAgICAgICAgICAgbGVuID0gY24/Lmxlbmd0aCB8fCAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVkRvbS5zeW5jVmRvbUlkcyh2bm9kZS5jaGlsZE5vZGVzW2ldLCBjbltpXSwgZm9yY2UpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFZEb20pO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL0NvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5WTm9kZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBWTm9kZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVk5vZGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlZOb2RlJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB2bm9kZSBjaGlsZCBub2RlcyBieSBpZCBvciBvcHRzIG9iamVjdCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyZW50Tm9kZV0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICogICAgIHtOdW1iZXJ9IGluZGV4XG4gICAgICogICAgIHtTdHJpbmd9IHBhcmVudElkXG4gICAgICogICAgIHtPYmplY3R9IHZub2RlXG4gICAgICovXG4gICAgc3RhdGljIGZpbmQodm5vZGUsIG9wdHMsIGluZGV4LCBwYXJlbnROb2RlKSB7XG4gICAgICAgIHZub2RlID0gVk5vZGUuZ2V0Vm5vZGUodm5vZGUpO1xuXG4gICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcbiAgICAgICAgb3B0cyAgPSB0eXBlb2Ygb3B0cyAhPT0gJ3N0cmluZycgPyBvcHRzIDoge2lkOiBvcHRzfTtcblxuICAgICAgICBsZXQgYXR0ck1hdGNoICA9IHRydWUsXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXG4gICAgICAgICAgICBzdHlsZU1hdGNoID0gdHJ1ZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZub2RlLmNoaWxkTm9kZXM/Lmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgb3B0c0FycmF5LCBvcHRzTGVuZ3RoLCBzdWJDaGlsZDtcblxuICAgICAgICBvcHRzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMob3B0cyk7XG4gICAgICAgIG9wdHNMZW5ndGggPSBvcHRzQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIG9wdHNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2bm9kZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbYXR0cktleSwgYXR0clZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2bm9kZVtrZXldLmhhc093blByb3BlcnR5KGF0dHJLZXkpICYmIHZub2RlW2tleV1bYXR0cktleV0gPT09IGF0dHJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJNYXRjaCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xhc3NOYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE5lby5pc0FycmF5KHZub2RlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlW2tleV0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygdm5vZGVba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2bm9kZSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmQ6IGNscyBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgb2YgQXJyYXlzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbc3R5bGVLZXksIHN0eWxlVmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZub2RlW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZub2RlW2tleV1bc3R5bGVLZXldID09PSBzdHlsZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IG9wdHNMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW5kZXgsIHBhcmVudE5vZGUsIHZub2RlfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgc3ViQ2hpbGQgPSBWTm9kZS5maW5kKHZub2RlLmNoaWxkTm9kZXNbaV0sIG9wdHMsIGksIHZub2RlKTtcblxuICAgICAgICAgICAgaWYgKHN1YkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YkNoaWxkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gaWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IGNoaWxkIHZub2RlIG9yIG51bGxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QnlJZCh2bm9kZSwgaWQpIHtcbiAgICAgICAgdm5vZGUgPSBWTm9kZS5nZXRWbm9kZSh2bm9kZSk7XG5cbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBWTm9kZS5nZXRWbm9kZShjaGlsZE5vZGVzW2ldKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IFZOb2RlLmdldEJ5SWQoY2hpbGROb2RlLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWRzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiB0aGUgZ2l2ZW4gdm5vZGUsIGV4Y2x1ZGluZyBjb21wb25lbnQgcmVmZXJlbmNlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGNoaWxkSWRzPVtdXG4gICAgICogQHJldHVybnMge1N0cmluZ1tdfSBjaGlsZElkc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHM9W10pIHtcbiAgICAgICAgdm5vZGU/LmNoaWxkTm9kZXM/LmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgJiYgIWNoaWxkTm9kZS5jb21wb25lbnRJZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkSWRzLnB1c2goY2hpbGROb2RlLmlkKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBWTm9kZS5nZXRDaGlsZElkcyhjaGlsZE5vZGUsIGNoaWxkSWRzKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRJZHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCB1c2luZyBtYW5hZ2VyLkNvbXBvbmVudCB0byByZXBsYWNlIHZub2RlIHJlZmVyZW5jZXMgaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Vm5vZGUodm5vZGUpIHtcbiAgICAgICAgaWYgKHZub2RlLmNvbXBvbmVudElkKSB7XG4gICAgICAgICAgICB2bm9kZSA9IENvbXBvbmVudE1hbmFnZXIuZ2V0KHZub2RlLmNvbXBvbmVudElkKS52bm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZW1vdmVkXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZUNoaWxkVm5vZGUodm5vZGUsIGlkKSB7XG4gICAgICAgIHZub2RlID0gVk5vZGUuZ2V0Vm5vZGUodm5vZGUpO1xuXG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUuY2hpbGROb2RlcyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgY2hpbGROb2RlO1xuXG4gICAgICAgIGlmICh2bm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVtb3ZlQ2hpbGRWbm9kZTogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZClcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IFZOb2RlLmdldFZub2RlKGNoaWxkTm9kZXNbaV0pO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWTm9kZS5yZW1vdmVDaGlsZFZub2RlKGNoaWxkTm9kZSwgaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGEgY2hpbGQgdm5vZGUgaW5zaWRlIGEgdm5vZGUgdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5ld0NoaWxkVm5vZGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCBhbmQgcmVwbGFjZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVwbGFjZUNoaWxkVm5vZGUodm5vZGUsIGlkLCBuZXdDaGlsZFZub2RlKSB7XG4gICAgICAgIHZub2RlID0gVk5vZGUuZ2V0Vm5vZGUodm5vZGUpO1xuXG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUuY2hpbGROb2RlcyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgY2hpbGROb2RlO1xuXG4gICAgICAgIGlmICh2bm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVwbGFjZUNoaWxkVm5vZGU6IHRhcmdldCBpZCBtYXRjaGVzIHRoZSByb290IHZub2RlIGlkOiAnICsgaWQpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBWTm9kZS5nZXRWbm9kZShjaGlsZE5vZGVzW2ldKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzW2ldID0gbmV3Q2hpbGRWbm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVk5vZGUucmVwbGFjZUNoaWxkVm5vZGUoY2hpbGROb2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhWTm9kZSk7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBNZXNzYWdlICAgICAgICAgICAgZnJvbSAnLi9NZXNzYWdlLm1qcyc7XG5pbXBvcnQgUmVtb3RlTWV0aG9kQWNjZXNzIGZyb20gJy4vbWl4aW4vUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyc7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIHRoZSBBcHAsIERhdGEgJiBWRG9tIHdvcmtlclxuICogQGNsYXNzIE5lby53b3JrZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIFdvcmtlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1bT2JzZXJ2YWJsZSxSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHdvcmtlcklkPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gY2hhbm5lbFBvcnRzPW51bGxcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY2hhbm5lbFBvcnRzID0gbnVsbFxuICAgIC8qKlxuICAgICAqIE9ubHkgbmVlZGVkIGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNDb25uZWN0ZWQ9ZmFsc2VcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaXNDb25uZWN0ZWQgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzU2hhcmVkV29ya2VyPWZhbHNlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGlzU2hhcmVkV29ya2VyID0gZmFsc2VcbiAgICAvKipcbiAgICAgKiBPbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IHBvcnRzPW51bGxcbiAgICAgKi9cbiAgICBwb3J0cyA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBndCA9IGdsb2JhbFRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgY2hhbm5lbFBvcnRzICA6IHt9LFxuICAgICAgICAgICAgaXNTaGFyZWRXb3JrZXI6IGd0LnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IFNoYXJlZFdvcmtlckdsb2JhbFNjb3BlXScsXG4gICAgICAgICAgICBwb3J0cyAgICAgICAgIDogW10sXG4gICAgICAgICAgICBwcm9taXNlcyAgICAgIDoge31cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICBndC5vbmNvbm5lY3QgPSBtZS5vbkNvbm5lY3RlZC5iaW5kKG1lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3Qub25tZXNzYWdlID0gbWUub25NZXNzYWdlLmJpbmQobWUpXG4gICAgICAgIH1cblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlciA9IG1lO1xuICAgICAgICBOZW8ud29ya2VySWQgICAgICA9IG1lLndvcmtlcklkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW50cnkgcG9pbnQgZm9yIGRlZGljYXRlZCBhbmQgc2hhcmVkIHdvcmtlcnNcbiAgICAgKi9cbiAgICBhZnRlckNvbm5lY3QoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgZ2V0UG9ydChvcHRzKSB7XG4gICAgICAgIGxldCByZXR1cm5Qb3J0ID0gbnVsbCxcbiAgICAgICAgICAgIGhhc01hdGNoO1xuXG4gICAgICAgIHRoaXMucG9ydHMuZm9yRWFjaChwb3J0ID0+IHtcbiAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMob3B0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBwb3J0W2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Qb3J0ID0gcG9ydFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmV0dXJuUG9ydFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgcmVsZXZhbnQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFzeW5jIG9uQ29ubmVjdChkYXRhKSB7XG4gICAgICAgIC8vIHNob3J0IGRlbGF5IHRvIGVuc3VyZSBhcHAgVkNzIGFyZSBpbiBwbGFjZVxuICAgICAgICBhd2FpdCB0aGlzLnRpbWVvdXQoMTApO1xuXG4gICAgICAgIGxldCB7YXBwTmFtZSwgd2luZG93SWR9ID0gZGF0YTtcbiAgICAgICAgdGhpcy5maXJlKCdjb25uZWN0Jywge2FwcE5hbWUsIHdpbmRvd0lkfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBvbkNvbm5lY3RlZChlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpZCA9IE5lby5nZXRJZCgncG9ydCcpO1xuXG4gICAgICAgIG1lLmlzQ29ubmVjdGVkID0gdHJ1ZTtcblxuICAgICAgICBtZS5wb3J0cy5wdXNoKHtcbiAgICAgICAgICAgIGFwcE5hbWUgOiBudWxsLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBwb3J0ICAgIDogZS5wb3J0c1swXSxcbiAgICAgICAgICAgIHdpbmRvd0lkOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnBvcnRzW21lLnBvcnRzLmxlbmd0aCAtIDFdLnBvcnQub25tZXNzYWdlID0gbWUub25NZXNzYWdlLmJpbmQobWUpO1xuXG4gICAgICAgIC8vIGNvcmUuQmFzZTogaW5pdFJlbW90ZSgpIHN1YnNjcmliZXMgdG8gdGhpcyBldmVudCBmb3IgdGhlIFNoYXJlZFdvcmtlcnMgY29udGV4dFxuICAgICAgICBtZS5maXJlKCdjb25uZWN0ZWQnKTtcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZSgnbWFpbicsIHthY3Rpb246ICd3b3JrZXJDb25zdHJ1Y3RlZCcsIHBvcnQ6IGlkfSk7XG5cbiAgICAgICAgbWUuYWZ0ZXJDb25uZWN0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG1lLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3dvcmtlckNvbnN0cnVjdGVkJ30pO1xuICAgICAgICAgICAgbWUuYWZ0ZXJDb25uZWN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgcmVsZXZhbnQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGlzY29ubmVjdChkYXRhKSB7XG4gICAgICAgIGxldCB7YXBwTmFtZSwgd2luZG93SWR9ID0gZGF0YTtcbiAgICAgICAgdGhpcy5maXJlKCdkaXNjb25uZWN0Jywge2FwcE5hbWUsIHdpbmRvd0lkfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgICAqL1xuICAgIG9uTWVzc2FnZShlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7ZGF0YX0gICAgICAgICAgICA9IGUsXG4gICAgICAgICAgICB7YWN0aW9uLCByZXBseUlkfSA9IGRhdGEsXG4gICAgICAgICAgICBwcm9taXNlO1xuXG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgYWN0aW9uIGlzIG1pc3Npbmc6ICcgKyBkYXRhLmlkKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gJ3JlcGx5Jykge1xuICAgICAgICAgICAgbWVbJ29uJyArIE5lby5jYXBpdGFsaXplKGFjdGlvbildKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb21pc2UgPSBhY3Rpb24gPT09ICdyZXBseScgJiYgbWUucHJvbWlzZXNbcmVwbHlJZF0pIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlamVjdCkge1xuICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGRhdGEuZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIG1lLnByb21pc2VzW3JlcGx5SWRdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25QaW5nKG1zZykge1xuICAgICAgICB0aGlzLnJlc29sdmUobXNnLCB7b3JpZ2luTXNnOiBtc2d9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgcmVsZXZhbnQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1zZy5hcHBOYW1lXG4gICAgICovXG4gICAgb25SZWdpc3RlckFwcChtc2cpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7YXBwTmFtZX0gPSBtc2csXG4gICAgICAgICAgICBwb3J0O1xuXG4gICAgICAgIGZvciAocG9ydCBvZiBtZS5wb3J0cykge1xuICAgICAgICAgICAgaWYgKCFwb3J0LmFwcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwb3J0LmFwcE5hbWUgPSBhcHBOYW1lO1xuICAgICAgICAgICAgICAgIG1lLm9uQ29ubmVjdCh7YXBwTmFtZSwgd2luZG93SWQ6IHBvcnQud2luZG93SWR9KTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJOZW9Db25maWcobXNnKSB7XG4gICAgICAgIE5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHt3aW5kb3dJZH0gPSBtc2cuZGF0YSxcbiAgICAgICAgICAgIHBvcnQ7XG5cbiAgICAgICAgZm9yIChwb3J0IG9mIG1lLnBvcnRzKSB7XG4gICAgICAgICAgICBpZiAoIXBvcnQud2luZG93SWQpIHtcbiAgICAgICAgICAgICAgICBwb3J0LndpbmRvd0lkID0gd2luZG93SWQ7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oTmVvLmNvbmZpZywgbXNnLmRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHByb21pc2VNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXG4gICAgICAgICAgICAgICAgbXNnSWQgICA9IG1lc3NhZ2U/LmlkO1xuXG4gICAgICAgICAgICBpZiAoIW1zZ0lkKSB7XG4gICAgICAgICAgICAgICAgLy8gYSB3aW5kb3cgZ290IGNsb3NlZCBhbmQgdGhlIG1lc3NhZ2UgcG9ydCBubyBsb25nZXIgZXhpc3QgKFNoYXJlZFdvcmtlcnMpXG4gICAgICAgICAgICAgICAgcmVqZWN0KClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUucHJvbWlzZXNbbXNnSWRdID0ge3JlamVjdCwgcmVzb2x2ZX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGNhbnZhcywgZGF0YSwgbWFpbiBvciB2ZG9tIChleGNsdWRpbmcgdGhlIGN1cnJlbnQgd29ya2VyKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXG4gICAgICogQHJldHVybnMge05lby53b3JrZXIuTWVzc2FnZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgb3B0cy5kZXN0aW5hdGlvbiA9IGRlc3Q7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsIHBvcnQsIHBvcnRPYmplY3Q7XG5cbiAgICAgICAgaWYgKG1lLmNoYW5uZWxQb3J0c1tkZXN0XSkge1xuICAgICAgICAgICAgcG9ydCA9IG1lLmNoYW5uZWxQb3J0c1tkZXN0XVxuICAgICAgICB9IGVsc2UgaWYgKCFtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgcG9ydCA9IGdsb2JhbFRoaXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvcHRzLnBvcnQpIHtcbiAgICAgICAgICAgICAgICBwb3J0ID0gbWUuZ2V0UG9ydCh7aWQ6IG9wdHMucG9ydH0pLnBvcnRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0cy53aW5kb3dJZCkge1xuICAgICAgICAgICAgICAgIHBvcnRPYmplY3QgPSBtZS5nZXRQb3J0KHt3aW5kb3dJZDogb3B0cy53aW5kb3dJZH0pO1xuICAgICAgICAgICAgICAgIHBvcnQgICAgICAgPSBwb3J0T2JqZWN0Py5wb3J0O1xuXG4gICAgICAgICAgICAgICAgb3B0cy5wb3J0ID0gcG9ydE9iamVjdD8uaWRcbiAgICAgICAgICAgIH0gIGVsc2UgaWYgKG9wdHMuYXBwTmFtZSkge1xuICAgICAgICAgICAgICAgIHBvcnRPYmplY3QgPSBtZS5nZXRQb3J0KHthcHBOYW1lOiBvcHRzLmFwcE5hbWV9KTtcbiAgICAgICAgICAgICAgICBwb3J0ICAgICAgID0gcG9ydE9iamVjdD8ucG9ydDtcblxuICAgICAgICAgICAgICAgIG9wdHMucG9ydCA9IHBvcnRPYmplY3Q/LmlkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcnQgPSBtZS5wb3J0c1swXS5wb3J0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9ydCkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpO1xuICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoV29ya2VyKTtcbiIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuLi9jb3JlL0lkR2VuZXJhdG9yLm1qcyc7XG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB3b3JrZXIgcG9zdCBtZXNzYWdlcyBzZW50IGJldHdlZW4gdGhlIEFwcCwgRGF0YSwgVkRvbSB3b3JrZXIgJiB0aGUgbWFpbiB0aHJlYWQuXG4gKiBZb3UgY2FuIGFkZCBvcHRpb25hbCBwYXJhbXMgYXMgbmVlZGVkLlxuICogQGNsYXNzIE5lby53b3JrZXIuTWVzc2FnZVxuICovXG5jbGFzcyBNZXNzYWdlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFjdGlvblxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZXN0aW5hdGlvbj0nbWFpbidcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWQ9SWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvcmlnaW49TmVvLndvcmtlcklkXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbmZpZy5kZXN0aW5hdGlvbiA9IGNvbmZpZy5kZXN0aW5hdGlvbiB8fCAnbWFpbic7XG4gICAgICAgIGNvbmZpZy5pZCAgICAgICAgICA9IGNvbmZpZy5pZCAgICAgICAgICB8fCBJZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpO1xuICAgICAgICBjb25maWcub3JpZ2luICAgICAgPSBjb25maWcub3JpZ2luICAgICAgfHwgTmVvLndvcmtlcklkO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKVxuICAgIH1cbn1cblxuY29uc3QgbnMgPSBOZW8ubnMoJ05lby53b3JrZXInLCB0cnVlKTtcbm5zWydNZXNzYWdlJ10gPSBNZXNzYWdlO1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFJlbW90ZU1ldGhvZEFjY2VzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFzc2lnblBvcnQoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3Qge2FwcE5hbWUsIHBvcnQsIHdpbmRvd0lkfSA9IHNvdXJjZTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7YXBwTmFtZSwgcG9ydCwgd2luZG93SWR9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0sICo9KTogUHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7b3JpZ2lufSA9IHJlbW90ZTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgYnVmZmVyKSB7XG4gICAgICAgICAgICBsZXQgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgICAgICA6ICdyZW1vdGVNZXRob2QnLFxuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24gICAgOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2xhc3NOYW1lOiByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHJlbW90ZU1ldGhvZCAgIDogbWV0aG9kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtZS5pc1NoYXJlZFdvcmtlciAmJiBtZS5hc3NpZ25Qb3J0KGRhdGEsIG9wdHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICovXG4gICAgb25SZWdpc3RlclJlbW90ZShyZW1vdGUpIHtcbiAgICAgICAgaWYgKHJlbW90ZS5kZXN0aW5hdGlvbiA9PT0gTmVvLndvcmtlcklkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWUsIG1ldGhvZHN9ID0gcmVtb3RlLFxuICAgICAgICAgICAgICAgIHBrZyAgICAgICAgICAgICAgICAgID0gTmVvLm5zKGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChtZXRob2QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGUub3JpZ2luICE9PSAnbWFpbicgJiYgcGtnW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGtnW21ldGhvZF0gPz89IG1lLmdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcblxuICAgICAgICBpZiAoIXBrZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2QgPSBwa2dbbXNnLnJlbW90ZU1ldGhvZF07XG5cbiAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbWV0aG9kIG5hbWUgXCInICsgbXNnLnJlbW90ZU1ldGhvZCArICdcIicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cuZGF0YSkpIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgLi4ubXNnLmRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG91dFxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge21lLnJlamVjdChtc2csIGVycil9KVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge21lLnJlc29sdmUobXNnLCBkYXRhKX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgb3V0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlamVjdGVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgcmVqZWN0KG1zZywgZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBtZS5pc1NoYXJlZFdvcmtlciAmJiBtZS5hc3NpZ25Qb3J0KG1zZywgb3B0cyk7XG4gICAgICAgIG1lLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIG9wdHMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlc29sdmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgcmVzb2x2ZShtc2csIGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcblxuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBtZS5pc1NoYXJlZFdvcmtlciAmJiBtZS5hc3NpZ25Qb3J0KG1zZywgb3B0cyk7XG4gICAgICAgIG1lLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIG9wdHMpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiY2h1bmtzL2FwcC9cIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4vLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDFcbn07XG5cbi8vIGltcG9ydFNjcmlwdHMgY2h1bmsgbG9hZGluZ1xudmFyIGluc3RhbGxDaHVuayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaSA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcblx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRpbXBvcnRTY3JpcHRzKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSk7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua25lb19vZmZzY3JlZW5fY2FudmFzX2RlbW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5rbmVvX29mZnNjcmVlbl9jYW52YXNfZGVtb1wiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gaW5zdGFsbENodW5rO1xuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0IiwiaW1wb3J0IE5lbyAgICAgICAgICAgICBmcm9tICcuLi9OZW8ubWpzJztcbmltcG9ydCBCYXNlICAgICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgKiBhcyBjb3JlICAgICAgIGZyb20gJy4uL2NvcmUvX2V4cG9ydC5tanMnO1xuaW1wb3J0IEFwcGxpY2F0aW9uICAgICBmcm9tICcuLi9jb250cm9sbGVyL0FwcGxpY2F0aW9uLm1qcyc7XG5pbXBvcnQgSW5zdGFuY2UgICAgICAgIGZyb20gJy4uL21hbmFnZXIvSW5zdGFuY2UubWpzJztcbmltcG9ydCBEb21FdmVudE1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlci9Eb21FdmVudC5tanMnO1xuaW1wb3J0IEhhc2hIaXN0b3J5ICAgICBmcm9tICcuLi91dGlsL0hhc2hIaXN0b3J5Lm1qcyc7XG5cbi8qKlxuICogVGhlIEFwcCB3b3JrZXIgY29udGFpbnMgbW9zdCBwYXJ0cyBvZiB0aGUgZnJhbWV3b3JrIGFzIHdlbGwgYXMgYWxsIGFwcHMgd2hpY2ggZ2V0IGNyZWF0ZWQuXG4gKiBTZWUgdGhlIHR1dG9yaWFscyBmb3IgZnVydGhlciBpbmZvcy5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLkFwcFxuICogQGV4dGVuZHMgTmVvLndvcmtlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEFwcCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5BcHAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuQXBwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnRMb2FkaW5nVGhlbWVGaWxlc189MFxuICAgICAgICAgKi9cbiAgICAgICAgY291bnRMb2FkaW5nVGhlbWVGaWxlc186IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIG1haW46IFtcbiAgICAgICAgICAgICAgICAnY3JlYXRlTmVvSW5zdGFuY2UnLFxuICAgICAgICAgICAgICAgICdkZXN0cm95TmVvSW5zdGFuY2UnLFxuICAgICAgICAgICAgICAgICdmaXJlRXZlbnQnLFxuICAgICAgICAgICAgICAgICdnZXRDb25maWdzJyxcbiAgICAgICAgICAgICAgICAnc2V0Q29uZmlncydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gd29ya2VySWQ9J2FwcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6ICdhcHAnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGRhdGE9bnVsbFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBkYXRhID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzVXNpbmdTdGF0ZVByb3ZpZGVycz1mYWxzZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpc1VzaW5nU3RhdGVQcm92aWRlcnMgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIFdlIGFyZSBzdG9yaW5nIHRoZSBwYXJhbXMgb2YgaW5zZXJ0VGhlbWVGaWxlcygpIGNhbGxzIGhlcmUsIGluIGNhc2UgdGhlIG1ldGhvZCBkb2VzIGdldCB0cmlnZ2VyZWRcbiAgICAgKiBiZWZvcmUgdGhlIGpzb24gdGhlbWUgc3RydWN0dXJlIGdvdCBsb2FkZWQuXG4gICAgICogQG1lbWJlciB7QXJyYXlbXX0gdGhlbWVGaWxlc0NhY2hlPVtdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHRoZW1lRmlsZXNDYWNoZSA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGNvbnZlbmllbmNlIHNob3J0Y3V0c1xuICAgICAgICBOZW8uYXBwbHlEZWx0YXMgICAgPSBtZS5hcHBseURlbHRhcyAgIC5iaW5kKG1lKTtcbiAgICAgICAgTmVvLnNldENzc1ZhcmlhYmxlID0gbWUuc2V0Q3NzVmFyaWFibGUuYmluZChtZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNvdW50TG9hZGluZ1RoZW1lRmlsZXMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q291bnRMb2FkaW5nVGhlbWVGaWxlcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAwICYmIG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZSgndGhlbWVGaWxlc0xvYWRlZCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXBwTmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBkZWx0YXNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTwqPn1cbiAgICAgKi9cbiAgICBhcHBseURlbHRhcyhhcHBOYW1lLCBkZWx0YXMpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2VNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3VwZGF0ZURvbScsIGFwcE5hbWUsIGRlbHRhc30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3RlIG1ldGhvZCB0byB1c2UgaW5zaWRlIG1haW4gdGhyZWFkcyBmb3IgY3JlYXRpbmcgbmVvIGJhc2VkIGNsYXNzIGluc3RhbmNlcy5cbiAgICAgKiBCZSBhd2FyZSB0aGF0IHlvdSBjYW4gb25seSBwYXNzIGNvbmZpZ3Mgd2hpY2ggY2FuIGdldCBjb252ZXJ0ZWQgaW50byBwdXJlIEpTT04uXG4gICAgICpcbiAgICAgKiBSZW5kZXJpbmcgYSBjb21wb25lbnQgaW50byB0aGUgZG9jdW1lbnQuYm9keVxuICAgICAqIEBleGFtcGxlOlxuICAgICAqICAgICBOZW8ud29ya2VyLkFwcC5jcmVhdGVOZW9JbnN0YW5jZSh7XG4gICAgICogICAgICAgICBudHlwZSAgICAgOiAnYnV0dG9uJyxcbiAgICAgKiAgICAgICAgIGF1dG9Nb3VudCA6IHRydWUsXG4gICAgICogICAgICAgICBhdXRvUmVuZGVyOiB0cnVlXG4gICAgICogICAgICAgICB0ZXh0ICAgICAgOiAnSGkgTmlnZSEnXG4gICAgICogICAgIH0pLnRoZW4oaWQgPT4gY29uc29sZS5sb2coaWQpKVxuICAgICAqXG4gICAgICogSW5zZXJ0aW5nIGEgY29tcG9uZW50IGludG8gYSBjb250YWluZXJcbiAgICAgKiBAZXhhbXBsZTpcbiAgICAgKiAgICAgTmVvLndvcmtlci5BcHAuY3JlYXRlTmVvSW5zdGFuY2Uoe1xuICAgICAqICAgICAgICAgbnR5cGUgICAgICA6ICdidXR0b24nLFxuICAgICAqICAgICAgICAgcGFyZW50SWQgICA6ICduZW8tY29udGFpbmVyLTMnLFxuICAgICAqICAgICAgICAgcGFyZW50SW5kZXg6IDBcbiAgICAgKiAgICAgICAgIHRleHQgICAgICAgOiAnSGkgTmlnZSEnXG4gICAgICogICAgIH0pLnRoZW4oaWQgPT4gY29uc29sZS5sb2coaWQpKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbY29uZmlnLmltcG9ydFBhdGhdIHlvdSBjYW4gbGF6eSBsb2FkIG1pc3NpbmcgY2xhc3NlcyB2aWEgdGhpcyBjb25maWcuIGRldiBtb2RlIG9ubHkuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcucGFyZW50SWRdIHBhc3NpbmcgYSBwYXJlbnRJZCB3aWxsIHB1dCB5b3VyIGluc3RhbmNlIGludG8gYSBjb250YWluZXJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2NvbmZpZy5wYXJlbnRJbmRleF0gaWYgYSBwYXJlbnRJZCBpcyBwYXNzZWQsIGJ1dCBubyBpbmRleCwgbmVvIHdpbGwgdXNlIGFkZCgpXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIGluc3RhbmNlIGlkXG4gICAgICovXG4gICAgYXN5bmMgY3JlYXRlTmVvSW5zdGFuY2UoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcuaW1wb3J0UGF0aCkge1xuICAgICAgICAgICAgYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gY29uZmlnLmltcG9ydFBhdGgpO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pbXBvcnRQYXRoXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXBwTmFtZSAgID0gT2JqZWN0LmtleXMoTmVvLmFwcHMpWzBdLCAvLyBmYWxsYmFjayBpbiBjYXNlIG5vIGFwcE5hbWUgd2FzIHByb3ZpZGVkXG4gICAgICAgICAgICBDb250YWluZXIgPSBOZW8uY29udGFpbmVyPy5CYXNlLFxuICAgICAgICAgICAgaW5kZXgsIGluc3RhbmNlLCBwYXJlbnQ7XG5cbiAgICAgICAgY29uZmlnID0ge2FwcE5hbWUsIC4uLmNvbmZpZ307XG5cbiAgICAgICAgaWYgKGNvbmZpZy5wYXJlbnRJZCkge1xuICAgICAgICAgICAgcGFyZW50ID0gTmVvLmdldENvbXBvbmVudChjb25maWcucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoQ29udGFpbmVyICYmIHBhcmVudCAmJiBwYXJlbnQgaW5zdGFuY2VvZiBDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGNvbmZpZy5wYXJlbnRJbmRleDtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcucGFyZW50SWQ7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5wYXJlbnRJbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNOdW1iZXIoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcGFyZW50Lmluc2VydChpbmRleCwgY29uZmlnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcGFyZW50LmFkZChjb25maWcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBwYXJlbnRJZD0nZG9jdW1lbnQuYm9keScgPT4gd2Ugd2FudCBpdCB0byBnZXQgc2hvd25cbiAgICAgICAgICAgIGNvbmZpZy5hdXRvTW91bnQgID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbmZpZy5hdXRvUmVuZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgaW5zdGFuY2UgPSBOZW9bY29uZmlnLm50eXBlID8gJ250eXBlJyA6ICdjcmVhdGUnXShjb25maWcpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNyZWF0ZVRoZW1lTWFwKGRhdGEpIHtcbiAgICAgICAgTmVvLm5zKCdOZW8uY3NzTWFwLmZpbGVJbmZvJywgdHJ1ZSk7XG4gICAgICAgIE5lby5jc3NNYXAuZmlsZUluZm8gPSBkYXRhO1xuICAgICAgICB0aGlzLnJlc29sdmVUaGVtZUZpbGVzQ2FjaGUoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW90ZSBtZXRob2QgdG8gdXNlIGluc2lkZSBtYWluIHRocmVhZHMgZm9yIGRlc3Ryb3lpbmcgbmVvIGJhc2VkIGNsYXNzIGluc3RhbmNlcy5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlOlxuICAgICAqICAgICBOZW8ud29ya2VyLkFwcC5kZXN0cm95TmVvSW5zdGFuY2UoJ25lby1idXR0b24tMycpLnRoZW4oc3VjY2VzcyA9PiBjb25zb2xlLmxvZyhzdWNjZXNzKSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSByZXR1cm5zIHRydWUsIGluIGNhc2UgdGhlIGluc3RhbmNlIHdhcyBmb3VuZFxuICAgICAqL1xuICAgIGRlc3Ryb3lOZW9JbnN0YW5jZShpZCkge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSBOZW8uZ2V0KGlkKSxcbiAgICAgICAgICAgIHBhcmVudDtcblxuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5wYXJlbnRJZCkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IE5lby5nZXRDb21wb25lbnQoaW5zdGFuY2UucGFyZW50SWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluc3RhbmNlLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgYSBjdXN0b20gZXZlbnQgYmFzZWQgb24gY29yZS5PYnNlcnZhYmxlIG9uIGFueSBhcHAgcmVhbG0gYmFzZWQgTmVvIGluc3RhbmNlIGZyb20gbWFpblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5uYW1lXG4gICAgICovXG4gICAgZmlyZUV2ZW50KGRhdGEpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gTmVvLmdldChkYXRhLmlkKSxcbiAgICAgICAgICAgIG5hbWU7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBuYW1lID0gZGF0YS5uYW1lO1xuXG4gICAgICAgICAgICBkZWxldGUgZGF0YS5pZDtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLm5hbWU7XG5cbiAgICAgICAgICAgIGluc3RhbmNlLmZpcmUobmFtZSwgZGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IG5lZWRlZCBmb3IgdGhlIFNoYXJlZFdvcmtlcnMgY29udGV4dFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGZpcmVNYWluVmlld3NFdmVudChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5wb3J0cy5mb3JFYWNoKHBvcnQgPT4ge1xuICAgICAgICAgICAgTmVvLmFwcHNbcG9ydC5hcHBOYW1lXS5tYWluVmlldy5maXJlKGV2ZW50TmFtZSwgZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCB0byBsYXp5LWxvYWQgbWFpbiB0aHJlYWQgYWRkb25zLCBpbiBjYXNlIHRoZXkgYXJlIG5vdCBpbXBvcnRlZCB5ZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3aW5kb3dJZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE5lby5tYWluLmFkZG9uLkJhc2U+fSBUaGUgbmFtZXNwYWNlIG9mIHRoZSBhZGRvbiB0byB1c2UgdmlhIHJlbW90ZSBtZXRob2QgYWNjZXNzXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWRkb24obmFtZSwgd2luZG93SWQpIHtcbiAgICAgICAgbGV0IGFkZG9uID0gTmVvLm1haW4/LmFkZG9uPy5bbmFtZV07XG5cbiAgICAgICAgaWYgKCFhZGRvbikge1xuICAgICAgICAgICAgYXdhaXQgTmVvLk1haW4uaW1wb3J0QWRkb24oe25hbWUsIHdpbmRvd0lkfSk7XG4gICAgICAgICAgICBhZGRvbiA9IE5lby5tYWluLmFkZG9uW25hbWVdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRkb25cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29uZmlncyBvZiBhbnkgYXBwIHJlYWxtIGJhc2VkIE5lbyBpbnN0YW5jZSBmcm9tIG1haW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IGRhdGEua2V5c1xuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY29uZmlncyBpZiBhIGtleXMgYXJyYXkgd2FzIHBhc3NlZC5cbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIGNvbmZpZyBkaXJlY3RseSwgaW4gY2FzZSBubyBhcnJheSB3YXMgcGFzc2VkXG4gICAgICogUmV0dXJucyBmYWxzZSwgaW4gY2FzZSBubyBpbnN0YW5jZSBnb3QgZm91bmQuXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0Q29uZmlncyhkYXRhKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZSAgICA9IE5lby5nZXQoZGF0YS5pZCksXG4gICAgICAgICAgICB7a2V5c30gICAgICA9IGRhdGEsXG4gICAgICAgICAgICByZXR1cm5BcnJheSA9IFtdO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW2tleXNdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goaW5zdGFuY2Vba2V5XSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgaW1wb3J0QXBwKHBhdGgpIHtcbiAgICAgICAgaWYgKHBhdGguZW5kc1dpdGgoJy5tanMnKSkge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgLTQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAgICAgLyogd2VicGFja0luY2x1ZGU6IC8oPzpcXC98XFxcXClhcHAubWpzJC8gKi9cbiAgICAgICAgICAgIC8qIHdlYnBhY2tFeGNsdWRlOiAvKD86XFwvfFxcXFwpKGRpc3R8bm9kZV9tb2R1bGVzKS8gKi9cbiAgICAgICAgICAgIC8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL1xuICAgICAgICAgICAgYC4uLy4uLyR7cGF0aH0ubWpzYFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBpbmNsdWRlIHByb3RvdHlwZSBiYXNlZCBDU1MgZmlsZXMsIHVzZSB0aGUgY2xhc3NOYW1lIHBhcmFtIGluc3RlYWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gd2luZG93SWRcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IFtwcm90b11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2NsYXNzTmFtZV1cbiAgICAgKi9cbiAgICBpbnNlcnRUaGVtZUZpbGVzKHdpbmRvd0lkLCBwcm90bywgY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmIChOZW8uY29uZmlnLnRoZW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUgfHwgcHJvdG8uY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjc3NNYXAgPSBOZW8uY3NzTWFwLFxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHByb3RvPy5fX3Byb3RvX18sXG4gICAgICAgICAgICAgICAgY2xhc3NQYXRoLCBjbGFzc1Jvb3QsIGZpbGVOYW1lLCBsQ2xhc3NSb290LCBtYXBDbGFzc05hbWUsIG5zLCB0aGVtZUZvbGRlcnM7XG5cbiAgICAgICAgICAgIGlmICghY3NzTWFwKSB7XG4gICAgICAgICAgICAgICAgbWUudGhlbWVGaWxlc0NhY2hlLnB1c2goW3dpbmRvd0lkLCBwcm90b10pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbW9kaWZ5IGFwcCByZWxhdGVkIGNsYXNzIG5hbWVzXG4gICAgICAgICAgICAgICAgaWYgKCFjbGFzc05hbWUuc3RhcnRzV2l0aCgnTmVvLicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSAgPSBjbGFzc05hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NSb290ICA9IGNsYXNzTmFtZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBsQ2xhc3NSb290ID0gY2xhc3NSb290LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lWzBdID09PSAndmlldycgJiYgY2xhc3NOYW1lLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWFwQ2xhc3NOYW1lID0gYGFwcHMuJHtOZW8uYXBwc1tjbGFzc1Jvb3RdPy5hcHBUaGVtZUZvbGRlciB8fCBsQ2xhc3NSb290fS4ke2NsYXNzTmFtZS5qb2luKCcuJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICAgID0gYGFwcHMuJHtsQ2xhc3NSb290fS4ke2NsYXNzTmFtZS5qb2luKCcuJyl9YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudCAhPT0gTmVvLmNvcmUuQmFzZS5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFOZW8ubnMoYCR7d2luZG93SWR9LiR7cGFyZW50LmNsYXNzTmFtZX1gLCBmYWxzZSwgY3NzTWFwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuaW5zZXJ0VGhlbWVGaWxlcyh3aW5kb3dJZCwgcGFyZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhlbWVGb2xkZXJzID0gTmVvLm5zKG1hcENsYXNzTmFtZSB8fCBjbGFzc05hbWUsIGZhbHNlLCBjc3NNYXAuZmlsZUluZm8pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoZW1lRm9sZGVycyAmJiAhTmVvLm5zKGAke3dpbmRvd0lkfS4ke2NsYXNzTmFtZX1gLCBmYWxzZSwgY3NzTWFwKSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc1BhdGggPSBjbGFzc05hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUgID0gY2xhc3NQYXRoLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjbGFzc1BhdGggPSBjbGFzc1BhdGguam9pbignLicpO1xuICAgICAgICAgICAgICAgICAgICBucyAgICAgICAgPSBOZW8ubnMoYCR7d2luZG93SWR9LiR7Y2xhc3NQYXRofWAsIHRydWUsIGNzc01hcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbnNbZmlsZU5hbWVdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBtZS5jb3VudExvYWRpbmdUaGVtZUZpbGVzKys7XG5cbiAgICAgICAgICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldC5hZGRUaGVtZUZpbGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogbWFwQ2xhc3NOYW1lIHx8IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcnMgIDogdGhlbWVGb2xkZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93SWRcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jb3VudExvYWRpbmdUaGVtZUZpbGVzLS1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVyeSBkb20gZXZlbnQgd2lsbCBnZXQgZm9yd2FyZGVkIGFzIGEgd29ya2VyIG1lc3NhZ2UgZnJvbSBtYWluIGFuZCBlbmRzIHVwIGhlcmUgZmlyc3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB1c2VmdWwgZXZlbnQgcHJvcGVydGllcywgZGlmZmVycyBmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzLiBTZWUgTmVvLm1haW4uRG9tRXZlbnRzLlxuICAgICAqL1xuICAgIG9uRG9tRXZlbnQoZGF0YSkge1xuICAgICAgICBEb21FdmVudE1hbmFnZXIuZmlyZShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZXJ5IFVSTCBoYXNoLWNoYW5nZSB3aWxsIGNyZWF0ZSBhIHBvc3QgbWVzc2FnZSBpbiBtYWluIGFuZCBlbmQgdXAgaGVyZSBmaXJzdC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBwYXJzZWQga2V5LXZhbHVlIHBhaXJzIGZvciBlYWNoIGhhc2ggdmFsdWVcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UoZGF0YSkge1xuICAgICAgICBIYXNoSGlzdG9yeS5wdXNoKGRhdGEuZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIGFwcHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTG9hZEFwcGxpY2F0aW9uKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtjb25maWd9ID0gTmVvLFxuICAgICAgICAgICAgYXBwLCBwYXRoO1xuXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBtZS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgIGNvbmZpZy5yZXNvdXJjZXNQYXRoID0gZGF0YS5yZXNvdXJjZXNQYXRoXG4gICAgICAgIH1cblxuICAgICAgICBwYXRoID0gbWUuZGF0YS5wYXRoO1xuXG4gICAgICAgIGlmIChjb25maWcuZW52aXJvbm1lbnQgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aFxuICAgICAgICB9XG5cbiAgICAgICAgbWUuaW1wb3J0QXBwKHBhdGgpLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgICAgIGFwcCA9IG1vZHVsZS5vblN0YXJ0KCk7XG5cbiAgICAgICAgICAgIC8vIHNob3J0IGRlbGF5IHRvIGVuc3VyZSBDb21wb25lbnQgQ29udHJvbGxlcnMgYXJlIHJlYWR5XG4gICAgICAgICAgICBjb25maWcuaGFzaCAmJiBtZS50aW1lb3V0KDUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIEhhc2hIaXN0b3J5LnB1c2goY29uZmlnLmhhc2gpO1xuICAgICAgICAgICAgICAgIC8vIGFwcHMgd2hpY2ggd2lsbCBnZXQgY3JlYXRlZCBsYXRlciBtdXN0IG5vdCB1c2Ugb3V0ZGF0ZWQgaGFzaCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmhhc2hcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZSBldmVudCBvbiBhbGwgYXBwc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuYW5nbGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5sYXlvdXQgbGFuZHNjYXBlfHBvcnRyYWl0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudHlwZSBsYW5kc2NhcGUtcHJpbWFyeXxsYW5kc2NhcGUtc2Vjb25kYXJ5fHBvcnRyYWl0LXByaW1hcnl8cG9ydHJhaXQtc2Vjb25kYXJ5XG4gICAgICovXG4gICAgb25PcmllbnRhdGlvbkNoYW5nZShkYXRhKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoTmVvLmFwcHMpLmZvckVhY2goYXBwID0+IHtcbiAgICAgICAgICAgIGFwcC5maXJlKCdvcmllbnRhdGlvbmNoYW5nZScsIGRhdGEuZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25SZWdpc3Rlck5lb0NvbmZpZyhtc2cpIHtcbiAgICAgICAgc3VwZXIub25SZWdpc3Rlck5lb0NvbmZpZyhtc2cpO1xuXG4gICAgICAgIGxldCB7Y29uZmlnfSA9IE5lbyxcbiAgICAgICAgICAgIHtkYXRhfSAgID0gbXNnLFxuICAgICAgICAgICAgdXJsICAgICAgPSAncmVzb3VyY2VzL3RoZW1lLW1hcC5qc29uJztcblxuICAgICAgICBOZW8ud2luZG93Q29uZmlncyA9IE5lby53aW5kb3dDb25maWdzIHx8IHt9O1xuXG4gICAgICAgIE5lby53aW5kb3dDb25maWdzW2RhdGEud2luZG93SWRdID0gZGF0YTtcblxuICAgICAgICBpZiAoY29uZmlnLmVudmlyb25tZW50ID09PSAnZGV2ZWxvcG1lbnQnIHx8IGNvbmZpZy5lbnZpcm9ubWVudCA9PT0gJ2Rpc3QvZXNtJykge1xuICAgICAgICAgICAgdXJsID0gYC4uLy4uLyR7dXJsfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcud29ya2VyQmFzZVBhdGg/LmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgdXJsID0gYC4uLy4uLyR7dXJsfWBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmxbMF0gIT09ICcuJykge1xuICAgICAgICAgICAgdXJsID0gYC4vJHt1cmx9YFxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7dGhpcy5jcmVhdGVUaGVtZU1hcChkYXRhKX0pO1xuXG4gICAgICAgIGNvbmZpZy5yZW1vdGVzQXBpVXJsICAmJiBpbXBvcnQoJy4uL3JlbW90ZXMvQXBpLm1qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0LmxvYWQoKSk7XG4gICAgICAgICFjb25maWcudXNlVmRvbVdvcmtlciAmJiBpbXBvcnQoJy4uL3Zkb20vSGVscGVyLm1qcycpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJQb3J0KG1zZykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBwb3J0ID0gbXNnLnRyYW5zZmVyO1xuXG4gICAgICAgIHBvcnQub25tZXNzYWdlID0gbWUub25NZXNzYWdlLmJpbmQobWUpO1xuXG4gICAgICAgIG1lLmNoYW5uZWxQb3J0c1ttc2cub3JpZ2luXSA9IHBvcnRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uV2luZG93UG9zaXRpb25DaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmZpcmVNYWluVmlld3NFdmVudCgnd2luZG93UG9zaXRpb25DaGFuZ2UnLCBkYXRhLmRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXBwTmFtZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyQXBwKGFwcE5hbWUpIHtcbiAgICAgICAgLy8gcmVnaXN0ZXIgdGhlIG5hbWUgYXMgZmFzdCBhcyBwb3NzaWJsZVxuICAgICAgICB0aGlzLm9uUmVnaXN0ZXJBcHAoeyBhcHBOYW1lIH0pO1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3JlZ2lzdGVyQXBwTmFtZScsIGFwcE5hbWV9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgdGhlIGFwcCBmcm9tIHRoZSBDU1MgbWFwXG4gICAgICogT25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXBwTmFtZVxuICAgICAqL1xuICAgIHJlbW92ZUFwcEZyb21UaGVtZU1hcChhcHBOYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBOZW8uY3NzTWFwW2FwcE5hbWUudG9Mb3dlckNhc2UoKV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlc29sdmVUaGVtZUZpbGVzQ2FjaGUoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUudGhlbWVGaWxlc0NhY2hlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBtZS5pbnNlcnRUaGVtZUZpbGVzKC4uLml0ZW0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnRoZW1lRmlsZXNDYWNoZSA9IFtdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNvbmZpZ3Mgb2YgYW55IGFwcCByZWFsbSBiYXNlZCBOZW8gaW5zdGFuY2UgZnJvbSBtYWluXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqL1xuICAgIHNldENvbmZpZ3MoZGF0YSkge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSBOZW8uZ2V0KGRhdGEuaWQpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGEuaWQ7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXQoZGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5wcmlvcml0eV0gb3B0aW9uYWxseSBwYXNzICdpbXBvcnRhbnQnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudGhlbWU9TmVvLmNvbmZpZy50aGVtZXNbMF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLndpbmRvd0lkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXRDc3NWYXJpYWJsZShkYXRhKSB7XG4gICAgICAgIGxldCBTdHlsZXNoZWV0ID0gYXdhaXQgdGhpcy5nZXRBZGRvbignU3R5bGVzaGVldCcsIGRhdGEud2luZG93SWQpLFxuICAgICAgICAgICAgdGhlbWUgICAgICA9IGRhdGEudGhlbWUgfHwgTmVvLmNvbmZpZy50aGVtZXM/LlswXTtcblxuICAgICAgICBpZiAodGhlbWUuc3RhcnRzV2l0aCgnbmVvLScpKSB7XG4gICAgICAgICAgICB0aGVtZSA9IHRoZW1lLnN1YnN0cmluZyg0KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFN0eWxlc2hlZXQuc2V0Q3NzVmFyaWFibGUoe3RoZW1lLCAuLi5kYXRhfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEFwcCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=