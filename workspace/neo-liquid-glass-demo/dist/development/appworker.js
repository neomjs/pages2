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
		"vendors-node_modules_neo_mjs_src_container_Viewport_mjs",
		"apps_myapp_app_mjs"
	],
	"./docs/app.mjs": [
		"./docs/app.mjs",
		"vendors-node_modules_neo_mjs_src_container_Viewport_mjs",
		"vendors-node_modules_neo_mjs_src_component_Splitter_mjs-node_modules_neo_mjs_src_container_Pa-16298b",
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
     * @default '9.13.1'
     * @memberOf! module:Neo
     * @name config.version
     * @type String
     */
    version: '9.13.1'
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
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]]
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
     * @member {String|null} workerId=null
     * @protected
     */
    workerId = null

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
/******/ 		var chunkLoadingGlobal = self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || [];
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
        singleton: true
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
     * @member {String} workerId='app'
     * @protected
     */
    workerId = 'app'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwd29ya2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBOEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQThDO0FBQ3JFLENBQUM7O0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JTbUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7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QWlCLGdEQUFHOztBQUUvQixRQUFRLGdEQUFHOztBQUVYO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0I7O0FBRUE7QUFDQSwyQkFBMkIsSUFBSTtBQUMvQjs7QUFFQTtBQUNBLHVCQUF1QixJQUFJO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsMEJBQTBCOztBQUVyRCxpQ0FBaUMsNk1BQTRCO0FBQzdELGlDQUFpQyxxTkFBNEI7QUFDN0Q7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDLGtDQUFrQyxtQ0FBbUM7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSxlQUFlLGdEQUFHO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFHOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnREFBRzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxlQUFlO0FBQ3pEO0FBQ0E7O0FBRUEsaUVBQWUsZ0RBQUcsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uLy4vIGxhenkgXlxcLlxcLy4qXFwubWpzJCBpbmNsdWRlOiAoIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL05lby5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0ZpbHRlci5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9Tb3J0ZXIubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQXBwbGljYXRpb24ubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0NvbXBhcmUubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvSWRHZW5lcmF0b3IubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9VdGlsLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL19leHBvcnQubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9Db21wb25lbnQubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvRG9tRXZlbnQubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvRm9jdXMubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvSW5zdGFuY2UubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvRnVuY3Rpb24ubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvSGFzaEhpc3RvcnkubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvTG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVk5vZGUubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvTWVzc2FnZS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215YXBwL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL215YXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215YXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215YXBwL3dlYnBhY2svcnVudGltZS9pbXBvcnRTY3JpcHRzIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL0FwcC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcHMvbXlhcHAvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL2FwcHMvbXlhcHAvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfY29udGFpbmVyX1ZpZXdwb3J0X21qc1wiLFxuXHRcdFwiYXBwc19teWFwcF9hcHBfbWpzXCJcblx0XSxcblx0XCIuL2RvY3MvYXBwLm1qc1wiOiBbXG5cdFx0XCIuL2RvY3MvYXBwLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfY29udGFpbmVyX1ZpZXdwb3J0X21qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfY29tcG9uZW50X1NwbGl0dGVyX21qcy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfY29udGFpbmVyX1BhLTE2Mjk4YlwiLFxuXHRcdFwiZG9jc19hcHBfbWpzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuLy4gbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwubWpzJCBpbmNsdWRlOiAoPzpcXFxcLyU3Q1xcXFxcXFxcKWFwcC5tanMkIGV4Y2x1ZGU6ICg/OlxcXFwvJTdDXFxcXFxcXFwpKGRpc3QlN0Nub2RlX21vZHVsZXMpXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiY29uc3QgTmVvID0gZ2xvYmFsVGhpcy5OZW8gfHwge307XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG4vKipcbiAqIENvbmZpZyBvYmplY3QgZm9yIHRoZSBuZW8ubWpzIGZyYW1ld29yayB3aGljaCB3aWxsIGdldCBwYXNzZWQgdG8gYWxsIHdvcmtlcnNcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxuICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAqIEBuYW1lIGNvbmZpZ1xuICogQHR5cGUgT2JqZWN0XG4gKi9cbmNvbnN0IERlZmF1bHRDb25maWcgPSB7XG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGFwcGx5ICduZW8tYm9keScgdG8gdGhlIGRvY3VtZW50LmJvZHkgY2xhc3NMaXN0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBseUJvZHlDbHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBhcHBseSAncG9zaXRpb246IGZpeGVkJyB0byB0aGUgaHRtbCB0YWcgaXRzZWxmXG4gICAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvNjQyOVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwbHlGaXhlZFBvc2l0aW9uVG9IdG1sVGFnXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGFwcGx5Rml4ZWRQb3NpdGlvblRvSHRtbFRhZzogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHlvdXIgYXBwLm1qcyBmaWxlLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBhcHBzIHRoZXJlIGlmIG5lZWRlZC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcFBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIGFwcFBhdGg6IG51bGwsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcbiAgICAgKiBAZGVmYXVsdCAnLi8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgYmFzZVBhdGg6ICcuLycsXG4gICAgLyoqXG4gICAgICogUGFzcyBhIHRva2VuIGluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgQ2VzaXVtSlMgbWFpbiB0aHJlYWQgYWRkb25cbiAgICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2Jsb2IvZGV2L3NyYy9tYWluL2FkZG9uL0Nlc2l1bUpTLm1qc1xuICAgICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5jZXNpdW1Kc1Rva2VuXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBjb21wb25lbnQgbG9nZ2luZyB1c2luZyBDdHJsLVJpZ2h0LUNsaWNrXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbmFibGVDb21wb25lbnRMb2dnZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgZW5hYmxlQ29tcG9uZW50TG9nZ2VyOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byB0cnVlIHRvIGVuYWJsZSB1dGlsLkxvZ2dlciAoTmVvLmxvZygpKSBiYXNlZCBsb2dzIGluIHByb2R1Y3Rpb25cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbmFibGVMb2dzSW5Qcm9kdWN0aW9uXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGVuYWJsZUxvZ3NJblByb2R1Y3Rpb246IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdkaXN0L2RldmVsb3BtZW50JywgJ2Rpc3QvcHJvZHVjdGlvbidcbiAgICAgKiBUaGlzIGNvbmZpZyB3aWxsIGdldCBhdXRvLWdlbmVyYXRlZFxuICAgICAqIEBkZWZhdWx0ICdkaXN0L3Byb2R1Y3Rpb24nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZW52aXJvbm1lbnQ6ICdkaXN0L3Byb2R1Y3Rpb24nLFxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgR29vZ2xlTWFwcyBtYWluIHRocmVhZCBhZGRvbiwgeW91IGNhbiBwYXNzIHRoZSBBUEkga2V5IGhlcmUuXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmdvb2dsZU1hcHNBcGlLZXlcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgR29vZ2xlQW5hbHl0aWNzIG1haW4gdGhyZWFkIGFkZG9uIG9yIHVzZUdvb2dsZUFuYWx5dGljczogdHJ1ZSxcbiAgICAgKiB5b3UgY2FuIGNoYW5nZSB0aGUgZ3RhZyBpZCBoZXJlLiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyAoZ2ggcGFnZXMpXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmd0YWdJZFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyBvbiBodHRwczovL25lb21qcy5naXRodWIuaW8vcGFnZXMvXG4gICAgICogPT4gdG8gdXNlIGxvY2FsIGltYWdlcyBwYXRocyBpbnN0ZWFkIG9mIHJhdy5naXRodWJ1c2VyY29udGVudC5jb21cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0dpdEh1YlBhZ2VzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzR2l0SHViUGFnZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBkZWxheSBpbiBtcyBmb3IgdGhlIHdvcmtlci5NYW5hZ2VyOmxvYWRBcHBsaWNhdGlvbigpIGNhbGxcbiAgICAgKiBAZGVmYXVsdCAyMFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2FkQXBwbGljYXRpb25EZWxheVxuICAgICAqIEB0eXBlIE51bWJlclxuICAgICAqL1xuICAgIGxvYWRBcHBsaWNhdGlvbkRlbGF5OiAyMCxcbiAgICAvKipcbiAgICAgKiBVc2VkIGJ5IEludGwuRGF0ZVRpbWVGb3JtYXQsIGZvciBkZXRhaWxzIHRha2UgYSBsb29rIGF0OlxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBsb2cgdGhlIGRlbHRhIHVwZGF0ZXMgaW5zaWRlIHRoZSBtYWluIHRocmVhZChzKSBhcyB3ZWxsIGFzIHRoZSByZXF1ZXN0QW5pbWF0aW9uIGZyYW1lc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvZ0RlbHRhVXBkYXRlc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBsb2dEZWx0YVVwZGF0ZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBsb2cgY29uc29sZSB3YXJuaW5ncywgaW4gY2FzZSBhIGNvbXBvbmVudCB0cmllcyB0byB1cGRhdGUoKSB3aGlsZSBhIHBhcmVudCB1cGRhdGUgaXMgcnVubmluZy5cbiAgICAgKiBBIHBhcmVudCB1cGRhdGUgcmVzdWx0cyBpbiBhIHNob3J0IGRlbGF5LCBzbyB5b3UgbWlnaHQgd2FudCB0byByZXNvbHZlIHRoZXNlIGNvbGxpc2lvbnMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9nVmRvbVVwZGF0ZUNvbGxpc2lvbnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgbG9nVmRvbVVwZGF0ZUNvbGxpc2lvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZCBhZGRvbnMgZm9yIHRoZSBtYWluIHRocmVhZFxuICAgICAqIC4vc3JjL21haW4vYWRkb24vIGNvbnRhaW5zIGFsbCBmcmFtZXdvcmsgcmVsYXRlZCBvcHRpb25zLlxuICAgICAqIFlvdSBjYW4gYWxzbyBjcmVhdGUgeW91ciBvd24gYWRkb25zIHdpdGhpbiB5b3VyIHdvcmtzcGFjZSBzY29wZS4gTWFrZSBzdXJlIHRvIHB1dCB0aGVtIGluc2lkZSAnc3JjL21haW4vYWRkb24vJ1xuICAgICAqIGFuZCBwcmVmaXggdGhlbSB3aXRoICdXUy8nIGluc2lkZSB5b3VyIG5lby1jb25maWcuanNvbiBmaWxlLlxuICAgICAqIEV4YW1wbGU6IFsnRHJhZ0Ryb3AnLCAnU3R5bGVzaGVldCcsICdXUy9NeUFkZG9uJ11cbiAgICAgKiBAZGVmYXVsdCBbJ0RyYWdEcm9wJywgJ05hdmlnYXRvcicsICdTdHlsZXNoZWV0J11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubWFpblRocmVhZEFkZG9uc1xuICAgICAqIEB0eXBlIFN0cmluZ1tdXG4gICAgICovXG4gICAgbWFpblRocmVhZEFkZG9uczogWydEcmFnRHJvcCcsICdOYXZpZ2F0b3InLCAnU3R5bGVzaGVldCddLFxuICAgIC8qKlxuICAgICAqIFBhc3MgdGhlIFVSTCBvZiBhIEpTT04tZmlsZSwgd2hpY2ggY29udGFpbnMgdGhlIHNlcnZpY2VzIGFuZCBtZXRob2RzIGZyb20geW91ciBiYWNrZW5kLFxuICAgICAqIHdoaWNoIHlvdSB3YW50IHRvIGV4cG9zZSB0byB0aGUgY2xpZW50LlxuICAgICAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vcHJvamVjdHMvMzJcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlbW90ZXNBcGlVcmxcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHJlbW90ZXNBcGlVcmw6IG51bGwsXG4gICAgLyoqXG4gICAgICogWW91IGNhbiB2aXN1YWxseSBzaG93IHRoZSBhbW91bnQgb2YgZGVsdGEgdXBkYXRlcyBwZXIgc2Vjb25kIHVzaW5nIHRoaXMgY29uZmlnLlxuICAgICAqIEl0IGV4cGVjdHMgYSBkb20gbm9kZSB3aXRoIHRoZSBpZCBcIm5lby1kZWx0YS11cGRhdGVzXCIgYXMgdGhlIHJlbmRlcmluZyB0YXJnZXQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVuZGVyQ291bnREZWx0YXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgcmVuZGVyQ291bnREZWx0YXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZCB0aGVtZXMgeW91IHdhbnQgdG8gdXNlIGhlcmUuIFRoZSBmaXJzdCB0aGVtZSB3aWxsIGdldCBhcHBsaWVkLlxuICAgICAqIEBkZWZhdWx0IFsnbmVvLXRoZW1lLWxpZ2h0JywnbmVvLXRoZW1lLWRhcmsnLCduZW8tdGhlbWUtbmVvLWxpZ2h0J11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJywgJ25lby10aGVtZS1uZW8tbGlnaHQnXSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBzdGFuZGFsb25lIFNpZXN0YSBtb2R1bGUgdGVzdHMgPT4gcHJldmVudCByZWdpc3RlclJlbW90ZSB3b3JrZXIgbWVzc2FnZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51bml0VGVzdE1vZGVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdW5pdFRlc3RNb2RlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBFeHBlcmltZW50YWwgZmxhZyBpZiBhbiBvZmZzY3JlZW4gY2FudmFzIHdvcmtlciBzaG91bGQgZ2V0IGNyZWF0ZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlQ2FudmFzV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNhbnZhc1dvcmtlcjogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBpZiB2ZG9tIGlkcyBzaG91bGQgZ2V0IG1hcHBlZCBpbnRvIERPTSBlbGVtZW50IGlkcy5cbiAgICAgKiBmYWxzZSB3aWxsIGNvbnZlcnQgdGhlbSBpbnRvIGEgXCJkYXRhLW5lby1pZFwiIGF0dHJpYnV0ZS5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZURvbUlkc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VEb21JZHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgaW5jbHVkZSB0aGUgc3R5bGVzaGVldFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRm9udEF3ZXNvbWVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRm9udEF3ZXNvbWU6IHRydWUsXG4gICAgLyoqXG4gICAgICogSW50ZW5kZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgd2hlcmUgd2UgbmVlZCBhbiBlYXN5IHdheSB0byBhZGQgR0EgdG8gZXZlcnkgZ2VuZXJhdGVkIGFwcFxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VHb29nbGVBbmFseXRpY3M6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRydWUgd2lsbCBhZGQgdGhlIFNlcnZpY2VXb3JrZXIgbWFpbiB0aHJlYWQgYWRkb24gdG8gc3VwcG9ydCBjYWNoaW5nIG9mIGFzc2V0cyAoUFdBKVxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VfV29ya2VyX0FQSVxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIHVzZSBhIHN0cmluZyB0byBzcGVjaWZ5IHRoZSB0YXJnZXQgZW52aXJvbm1lbnQgPT4gJ2Rpc3QvcHJvZHVjdGlvbicuXG4gICAgICogVXNpbmcgJ2Rpc3QvcHJvZHVjdGlvbicgd2lsbCBhbHNvIHVzZSB0aGUgc2VydmljZSB3b3JrZXIgZm9yICdkaXN0L2VzbSdcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VTZXJ2aWNlV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhbnxTdHJpbmdcbiAgICAgKi9cbiAgICB1c2VTZXJ2aWNlV29ya2VyOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIEFwcCwgRGF0YSAmIFZEb20gYXMgU2hhcmVkV29ya2Vycy5cbiAgICAgKiBTZXQgdGhpcyBvbmUgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNvbm5lY3QgbXVsdGlwbGUgbWFpbiB0aHJlYWRzLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVNoYXJlZFdvcmtlcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlU2hhcmVkV29ya2VyczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGdlbmVyYXRlIGEgbmV3IHRhc2sgd29ya2VyLCB3aGljaCBjYW4gZ2V0IGZpbGxlZCB3aXRoIG93biBleHBlbnNpdmUgcmVtb3RlIG1ldGhvZHNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VUYXNrV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVRhc2tXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZhbHNlIHdpbGwgY3JlYXRlIHRoZSB2ZG9tLkhlbHBlciB3aXRoaW4gdGhlIEFwcCB3b3JrZXIgKGV4cGVyaW1lbnRhbCEpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VWZG9tV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVZkb21Xb3JrZXI6IHRydWUsXG4gICAgLyoqXG4gICAgICogYnVpbGRTY3JpcHRzL2luamVjdFBhY2thZ2VWZXJzaW9uLm1qcyB3aWxsIHVwZGF0ZSB0aGlzIHZhbHVlXG4gICAgICogQGRlZmF1bHQgJzkuMTMuMSdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudmVyc2lvblxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHZlcnNpb246ICc5LjEzLjEnXG59O1xuXG5PYmplY3QuYXNzaWduKERlZmF1bHRDb25maWcsIHtcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSB0b3AgbGV2ZWwgbmVvLm1qcyByZXNvdXJjZXMgZm9sZGVyXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdyZXNvdXJjZXMvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZXNvdXJjZXNQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgcmVzb3VyY2VzUGF0aDogYCR7TmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRofXJlc291cmNlcy9gLFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJhc2UgVVJMIGZvciB3ZWIgd29ya2VyIGVudHJ5IHBvaW50cyAoQXBwLCBEYXRhLCBWZG9tKVxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLndvcmtlckJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgd29ya2VyQmFzZVBhdGg6IGAke05lby5jb25maWcuYmFzZVBhdGggfHwgRGVmYXVsdENvbmZpZy5iYXNlUGF0aH1zcmMvd29ya2VyL2AsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdENvbmZpZztcbiIsImltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4vRGVmYXVsdENvbmZpZy5tanMnO1xuXG5jb25zdFxuICAgIGNhbWVsUmVnZXggICA9IC8tLi9nLFxuICAgIGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgIGdldFNldENhY2hlICA9IFN5bWJvbCgnZ2V0U2V0Q2FjaGUnKSxcbiAgICB0eXBlRGV0ZWN0b3IgPSB7XG4gICAgICAgIGZ1bmN0aW9uOiBpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnByb3RvdHlwZT8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnTmVvQ2xhc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9iamVjdDogaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIGl0ZW0gaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdOZW9JbnN0YW5jZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbi8qKlxuICogVGhlIGJhc2UgbW9kdWxlIHRvIGVuaGFuY2UgY2xhc3NlcywgY3JlYXRlIGluc3RhbmNlcyBhbmQgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEBtb2R1bGUgTmVvXG4gKiBAc2luZ2xldG9uXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmJpbmRNZXRob2RzICAgICAgIGFzIGJpbmRNZXRob2RzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNhcGl0YWxpemUgICAgICAgIGFzIGNhcGl0YWxpemVcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVzICAgICAgYXMgY3JlYXRlU3R5bGVzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmRlY2FtZWwgICAgICAgICAgIGFzIGRlY2FtZWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0Jvb2xlYW4gICAgICAgICBhcyBpc0Jvb2xlYW5cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNEZWZpbmVkICAgICAgICAgYXMgaXNEZWZpbmVkXG4gKiBAYm9ycm93cyBOZW8uY29yZS5Db21wYXJlLmlzRXF1YWwgICAgICAgIGFzIGlzRXF1YWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNOdW1iZXIgICAgICAgICAgYXMgaXNOdW1iZXJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgICAgICAgICAgYXMgaXNPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNTdHJpbmcgICAgICAgICAgYXMgaXNTdHJpbmdcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwudG9BcnJheSAgICAgICAgICAgYXMgdG9BcnJheVxuICogQHR1dG9yaWFsIDAxX0NvbmNlcHRcbiAqL1xubGV0IE5lbyA9IGdsb2JhbFRoaXMuTmVvIHx8IHt9O1xuXG5OZW8gPSBnbG9iYWxUaGlzLk5lbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIC8qKlxuICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgbnR5cGVzIGFzIGtleSBhbmQgTmVvIGNsYXNzZXMgb3Igc2luZ2xldG9ucyBhcyB2YWx1ZXNcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgbnR5cGVNYXA6IHt9LFxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgbWV0aG9kcyBmcm9tIG9uZSBuYW1lc3BhY2UgdG8gYW5vdGhlciBvbmVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIC8vIGFsaWFzZXNcbiAgICAgKiBOZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgICogICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgICAqICAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXG4gICAgICogICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZSdcbiAgICAgKiB9LCB0cnVlKTtcbiAgICAgKlxuICAgICAqIC8vIGUuZy4gTmVvLmNvcmUuVXRpbC5pc09iamVjdCA9PiBOZW8uaXNPYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvfE5lby5jb3JlLkJhc2V9IHRhcmdldCAgICBUaGUgdGFyZ2V0IGNsYXNzIG9yIHNpbmdsZXRvbiBJbnN0YW5jZSBvciBOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9ICAgICBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgICAgICBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgICAgICBbYmluZF0gICAgc2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGJpbmQgbWV0aG9kcyB0byB0aGUgXCJmcm9tXCIgbmFtZXNwYWNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHlGcm9tTnModGFyZ2V0LCBuYW1lc3BhY2UsIGNvbmZpZywgYmluZCkge1xuICAgICAgICBsZXQgZm5OYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihjb25maWcpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvICAgICA9IHR5cGVvZiBjbHMgPT09ICdmdW5jdGlvbicgPyBjbHMucHJvdG90eXBlIDogY2xzLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvdG8uaXNDbGFzcyA/IHByb3RvLmNvbmZpZy5jbGFzc05hbWUgOiBwcm90by5jbGFzc05hbWUsXG4gICAgICAgICAgICBuc0FycmF5ICAgPSBjbGFzc05hbWUuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGtleSAgICAgICA9IG5zQXJyYXkucG9wKCksXG4gICAgICAgICAgICBucyAgICAgICAgPSBOZW8ubnMobnNBcnJheSwgdHJ1ZSk7XG5cbiAgICAgICAgbnNba2V5XSA9IGNsc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0ICAgVGhlIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgVGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXlzIHlvdSB3YW50IHRvIGNvcHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKi9cbiAgICBhc3NpZ25EZWZhdWx0cyh0YXJnZXQsIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihkZWZhdWx0cykgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QuaGFzT3duKHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBhIG5ldyB2YWx1ZSB0byBhIGdpdmVuIG5lc3RlZCBvYmplY3RzIHBhdGguXG4gICAgICogSXQgd2lsbCBjcmVhdGUgdGhlIHBhdGggc3RydWN0dXJlIG9yIHBhcnRzIG9mIGl0LCBpbiBjYXNlIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmFzc2lnblRvTnMoJ2Fubm90YXRpb25zLnNlbGVjdGVkJywgZmFsc2UsIHJlY29yZClcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxTdHJpbmd9IHBhdGggICAgICAgICAgICAgVGhlIHBhdGggc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHsqfSAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgVGhlIG5ldyB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIGxlYWYgbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBzY29wZT1nbG9iYWxUaGlzIFNldCBhIGRpZmZlcmVudCBzdGFydGluZyBwb2ludCBhcyBnbG9iYWxUaGlzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgICAgIGZvcmNlPXRydWUgICAgICAgZmFsc2Ugd2lsbCBvbmx5IGFzc2lnbiBkZWZhdWx0IHZhbHVlcyAoYXNzaWduIGlmIG9sZCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAqL1xuICAgIGFzc2lnblRvTnMocGF0aCwgdmFsdWUsIHNjb3BlPWdsb2JhbFRoaXMsIGZvcmNlPXRydWUpIHtcbiAgICAgICAgcGF0aCA9IEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogcGF0aC5zcGxpdCgnLicpO1xuXG4gICAgICAgIGxldCBrZXk7XG5cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAga2V5ICAgPSBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgc2NvcGUgPSBOZW8ubnMocGF0aCwgdHJ1ZSwgc2NvcGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBwYXRoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9yY2UgfHwgc2NvcGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzY29wZVtrZXldID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBrZWJhYi1jYXNlIHN0cmluZ3MgaW50byBjYW1lbC1jYXNlXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGNhbWVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGNhbWVsUmVnZXgsIG1hdGNoID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVbMF0udG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkZWVwPWZhbHNlICAgICAgICAgICAgICAgU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNsb25lIG5lc3RlZCBvYmplY3RzIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlnbm9yZU5lb0luc3RhbmNlcz1mYWxzZSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl8Kn0gdGhlIGNsb25lZCBpbnB1dFxuICAgICAqL1xuICAgIGNsb25lKG9iaiwgZGVlcD1mYWxzZSwgaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlKSB7XG4gICAgICAgIGxldCBvdXQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEFycmF5ICAgICAgOiAoKSA9PiAhZGVlcCA/IFsuLi5vYmpdIDogWy4uLm9iai5tYXAodmFsID0+IE5lby5jbG9uZSh2YWwsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcykpXSxcbiAgICAgICAgICAgIERhdGUgICAgICAgOiAoKSA9PiBuZXcgRGF0ZShvYmoudmFsdWVPZigpKSxcbiAgICAgICAgICAgIE1hcCAgICAgICAgOiAoKSA9PiBuZXcgTWFwKG9iaiksIC8vIHNoYWxsb3cgY29weVxuICAgICAgICAgICAgTmVvSW5zdGFuY2U6ICgpID0+IGlnbm9yZU5lb0luc3RhbmNlcyA/IG9iaiA6IHRoaXMuY2xvbmVOZW9JbnN0YW5jZShvYmopLFxuICAgICAgICAgICAgU2V0ICAgICAgICA6ICgpID0+IG5ldyBTZXQob2JqKSxcblxuICAgICAgICAgICAgT2JqZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0ID0ge307XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9ICFkZWVwID8gdmFsdWUgOiBOZW8uY2xvbmUodmFsdWUsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVtOZW8udHlwZU9mKG9iaildPy4oKSB8fCBvYmpcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSB1c2luZyB0aGUgb3JpZ2luYWxDb25maWcgd2l0aG91dCB0aGUgaWRcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gdGhlIGNsb25lZCBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsb25lTmVvSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHsuLi5pbnN0YW5jZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoaW5zdGFuY2UuY2xhc3NOYW1lLCBjb25maWcpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuICAgICAqXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5idXR0b24uQmFzZScsXG4gICAgICogICAgIGljb25DbHMgIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfG51bGx9IFRoZSBuZXcgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpIHtcbiAgICAgICAgbGV0IHR5cGUgPSBOZW8udHlwZU9mKGNsYXNzTmFtZSksXG4gICAgICAgICAgICBjbHMsIGluc3RhbmNlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnTmVvQ2xhc3MnKSB7XG4gICAgICAgICAgICBjbHMgPSBjbGFzc05hbWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBjb25maWcuY2xhc3NOYW1lIHx8IGNvbmZpZy5tb2R1bGUucHJvdG90eXBlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFleGlzdHMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgJyArIGNsYXNzTmFtZSArICcgZG9lcyBub3QgZXhpc3QnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbHMgPSBOZW8ubnMoY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKCk7XG5cbiAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0KGNvbmZpZyk7XG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2Uub25BZnRlckNvbnN0cnVjdGVkKCk7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBlbXB0eUZuKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBzZXQgbWV0aG9kIGZvciBhIGdpdmVuIHByb3BlcnR5IGtleSBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90byBUaGUgdG9wIGxldmVsIHByb3RvdHlwZSBvZiBhIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICAgICAgICBrZXkgICBUaGUgcHJvcGVydHkga2V5IHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yO1xuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkZXNjcmlwdG9yLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVlcC1tZXJnZXMgYSBzb3VyY2Ugb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIG1lcmdlKHRhcmdldCwgc291cmNlLCBkZWZhdWx0cykge1xuICAgICAgICBpZiAoZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBOZW8ubWVyZ2UoTmVvLm1lcmdlKHRhcmdldCwgZGVmYXVsdHMpLCBzb3VyY2UpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChOZW8udHlwZU9mKHZhbHVlKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IE5lby5tZXJnZSh0YXJnZXRba2V5XSB8fCB7fSwgdmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdpdmVuIG9yIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5ucygnTmVvLmJ1dHRvbi5CYXNlJywgdHJ1ZSk7XG4gICAgICogLy8gPT5cbiAgICAgKiAvLyBnbG9iYWxUaGlzLk5lbyAgICAgICAgICAgICA9IGdsb2JhbFRoaXMuTmVvICAgICAgICAgICAgIHx8IHt9O1xuICAgICAqIC8vIGdsb2JhbFRoaXMuTmVvLmJ1dHRvbiAgICAgID0gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uICAgICAgfHwge307XG4gICAgICogLy8gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uLkJhc2UgPSBnbG9iYWxUaGlzLk5lby5idXR0b24uQmFzZSB8fCB7fTtcbiAgICAgKiAvLyByZXR1cm4gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uLkJhc2U7XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nW118U3RyaW5nfSBuYW1lcyAgICAgICAgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgICAgIGNyZWF0ZT1mYWxzZSBTZXQgY3JlYXRlIHRvIHRydWUgdG8gY3JlYXRlIGVtcHR5IG9iamVjdHMgZm9yIG5vbi1leGlzdGluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBbc2NvcGVdICAgICAgU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zKG5hbWVzLCBjcmVhdGU9ZmFsc2UsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IGdsb2JhbFRoaXMpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEV4dGVuZGVkIHZlcnNpb24gb2YgTmVvLm5zKCkgd2hpY2ggc3VwcG9ydHMgbWFwcGluZyBpbnRvIGFycmF5cy5cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyAgICAgICAgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgIGNyZWF0ZT1mYWxzZSBTZXQgY3JlYXRlIHRvIHRydWUgdG8gY3JlYXRlIGVtcHR5IG9iamVjdHMgZm9yIG5vbi1leGlzdGluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICBbc2NvcGVdICAgICAgU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zV2l0aEFycmF5cyhuYW1lcywgY3JlYXRlPWZhbHNlLCBzY29wZSkge1xuICAgICAgICBuYW1lcyA9IEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXMgOiBuYW1lcy5zcGxpdCgnLicpO1xuXG4gICAgICAgIHJldHVybiBuYW1lcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjcmVhdGUgJiYgIXByZXZbY3VycmVudF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBcnJheU5zKHRydWUsIGN1cnJlbnQsIHByZXYpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQXJyYXlOcyhmYWxzZSwgY3VycmVudCwgcHJldilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSB8fCBnbG9iYWxUaGlzKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKHtcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG50eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfVxuICAgICAqIEBzZWUge0BsaW5rIG1vZHVsZTpOZW8uY3JlYXRlIGNyZWF0ZX1cbiAgICAgKi9cbiAgICBudHlwZShudHlwZSwgY29uZmlnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBudHlwZTtcblxuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIGRlZmluZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIG50eXBlIHByb3BlcnR5LiAnICsgY29uZmlnLm50eXBlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBudHlwZSA9IGNvbmZpZy5udHlwZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XG5cbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAdGVtcGxhdGUgVFxuICAgICAqIEBwYXJhbSB7VH0gY2xzXG4gICAgICogQHJldHVybnMge1R9XG4gICAgICovXG4gICAgc2V0dXBDbGFzcyhjbHMpIHtcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgPSBudWxsLFxuICAgICAgICAgICAgbnR5cGVDaGFpbiA9IFtdLFxuICAgICAgICAgICAge250eXBlTWFwfSA9IE5lbyxcbiAgICAgICAgICAgIHByb3RvICAgICAgPSBjbHMucHJvdG90eXBlIHx8IGNscyxcbiAgICAgICAgICAgIG5zICAgICAgICAgPSBOZW8ubnMocHJvdG8uY29uc3RydWN0b3IuY29uZmlnLmNsYXNzTmFtZSwgZmFsc2UpLFxuICAgICAgICAgICAgcHJvdG9zICAgICA9IFtdLFxuICAgICAgICAgICAgY2ZnLCBjb25maWcsIGN0b3IsIG50eXBlO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIElmIHRoZSBuYW1lc3BhY2UgYWxyZWFkeSBleGlzdHMsIGRpcmVjdGx5IHJldHVybiBpdC5cbiAgICAgICAgICogVGhpcyBjYW4gaGFwcGVuIHdoZW4gdXNpbmcgZGlmZmVyZW50IHZlcnNpb25zIG9mIG5lby5tanNcbiAgICAgICAgICogPT4gRXNwZWNpYWxseSBzaW5nbGV0b25zIChJZEdlbmVyYXRvcikgbXVzdCBzdGF5IHVuaXF1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBjYW4gYWxzbyBoYXBwZW4gd2hlbiB1c2luZyBkaWZmZXJlbnQgZW52aXJvbm1lbnRzIG9mIG5lby5tanMgaW4gcGFyYWxsZWwuXG4gICAgICAgICAqIEV4YW1wbGU6IGNvZGUuTGl2ZVByZXZpZXcgcnVubmluZyBpbnNpZGUgYSBkaXN0L3Byb2R1Y3Rpb24gYXBwLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgICByZXR1cm4gbnNcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY3RvciwgJ2NsYXNzQ29uZmlnQXBwbGllZCcpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbnR5cGVDaGFpbiA9IFsuLi5jdG9yLm50eXBlQ2hhaW5dO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3Rvcy51bnNoaWZ0KHByb3RvKTtcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fXG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcgPSBiYXNlQ2ZnIHx8IHt9O1xuXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IG1peGlucztcblxuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XG5cbiAgICAgICAgICAgIGNmZyA9IGN0b3IuY29uZmlnIHx8IHt9O1xuXG4gICAgICAgICAgICBpZiAoTmVvLm92ZXJ3cml0ZXMpIHtcbiAgICAgICAgICAgICAgICBjdG9yLmFwcGx5T3ZlcndyaXRlcz8uKGNmZylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKC0xKSA9PT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgY2ZnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBhcHBseSBwcm9wZXJ0aWVzIHdoaWNoIGhhdmUgbm8gc2V0dGVycyBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIU5lby5oYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlICA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY2ZnLCAnbnR5cGUnKSkge1xuICAgICAgICAgICAgICAgIG50eXBlID0gY2ZnLm50eXBlO1xuXG4gICAgICAgICAgICAgICAgbnR5cGVDaGFpbi51bnNoaWZ0KG50eXBlKTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1bm5pbmcgdGhlIGRvY3MgYXBwIGluc2lkZSBhIHdvcmtzcGFjZSBjYW4gcHVsbCBpbiB0aGUgc2FtZSBjbGFzc2VzIGZyb20gZGlmZmVyZW50IHJvb3RzLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIHdhbnQgdG8gY2hlY2sgZm9yIGRpZmZlcmVudCBjbGFzcyBuYW1lcyBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24obnR5cGVNYXAsIG50eXBlKSAmJiBjZmcuY2xhc3NOYW1lICE9PSBudHlwZU1hcFtudHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBudHlwZSBjb25mbGljdCBmb3IgJyR7bnR5cGV9JyBpbnNpZGUgdGhlIGNsYXNzZXM6XFxuJHtudHlwZU1hcFtudHlwZV19XFxuJHtjZmcuY2xhc3NOYW1lfWApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbnR5cGVNYXBbbnR5cGVdID0gY2ZnLmNsYXNzTmFtZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaXhpbnMgPSBPYmplY3QuaGFzT3duKGNvbmZpZywgJ21peGlucycpICYmIGNvbmZpZy5taXhpbnMgfHwgW107XG5cbiAgICAgICAgICAgIGlmIChjdG9yLm9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCgnTmVvLmNvcmUuT2JzZXJ2YWJsZScpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duKGNmZywgJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlNaXhpbnMoY3RvciwgbWl4aW5zKTtcblxuICAgICAgICAgICAgICAgIGlmIChOZW8ubnMoJ05lby5jb3JlLk9ic2VydmFibGUnLCBmYWxzZSwgY3Rvci5wcm90b3R5cGUubWl4aW5zKSkge1xuICAgICAgICAgICAgICAgICAgICBjdG9yLm9ic2VydmFibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY2ZnLm1peGlucztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubWl4aW5zO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgY2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIG50eXBlQ2hhaW5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAhY29uZmlnLnNpbmdsZXRvbiAmJiB0aGlzLmFwcGx5VG9HbG9iYWxOcyhjbHMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb3RvID0gY2xzLnByb3RvdHlwZSB8fCBjbHM7XG5cbiAgICAgICAgbnR5cGVDaGFpbi5mb3JFYWNoKG50eXBlID0+IHtcbiAgICAgICAgICAgIHByb3RvW2BpcyR7TmVvLmNhcGl0YWxpemUoTmVvLmNhbWVsKG50eXBlKSl9YF0gPSB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm90by5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgIGNscyA9IE5lby5jcmVhdGUoY2xzKTtcbiAgICAgICAgICAgIE5lby5hcHBseVRvR2xvYmFsTnMoY2xzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdHlwZU9mKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVEZXRlY3Rvclt0eXBlb2YgaXRlbV0/LihpdGVtKSB8fCBpdGVtLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB9XG59LCBOZW8pO1xuXG4vKipcbiAqIExpc3Qgb2YgY2xhc3MgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHN1cHBvc2VkIHRvIGdldCBtaXhlZCBpbnRvIG90aGVyIGNsYXNzZXNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGlnbm9yZU1peGluID0gW1xuICAgICdfbmFtZScsXG4gICAgJ2NsYXNzQ29uZmlnQXBwbGllZCcsXG4gICAgJ2NsYXNzTmFtZScsXG4gICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAnaXNDbGFzcycsXG4gICAgJ21peGluJyxcbiAgICAnbnR5cGUnLFxuICAgICdvYnNlcnZhYmxlJ1xuXSxcblxuICAgIGNoYXJzUmVnZXggICAgICAgICA9IC9cXGQrL2csXG4gICAgZXh0cmFjdEFycmF5c1JlZ2V4ID0gL14oXFx3KylcXHMqKCg/OlxcW1xccypcXGQrXFxzKlxcXVxccyopKikkLztcblxuLyoqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICogQHBhcmFtIHtBcnJheX0gICAgICAgICBtaXhpbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1peGlucykpIHtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgfVxuXG4gICAgbGV0IGkgICAgICAgICAgICA9IDAsXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXG4gICAgICAgIG1peGluQ2xhc3NlcyA9IHt9LFxuICAgICAgICBtaXhpbiwgbWl4aW5DbHMsIG1peGluUHJvdG87XG5cbiAgICBmb3IgKDtpIDwgbGVuO2krKykge1xuICAgICAgICBtaXhpbiA9IG1peGluc1tpXTtcblxuICAgICAgICBpZiAobWl4aW4uaXNDbGFzcykge1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluLnByb3RvdHlwZTtcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gbWl4aW4gYW4gdW5kZWZpbmVkIGNsYXNzOiAnICsgbWl4aW4gKyAnLCAnICsgY2xzLnByb3RvdHlwZS5jbGFzc05hbWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW4pO1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWl4aW5Qcm90bykuZm9yRWFjaChtaXhpblByb3BlcnR5KGNscy5wcm90b3R5cGUsIG1peGluUHJvdG8pKVxuICAgIH1cblxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzIC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2Vcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSAgICAgICAga2V5XG4gKiBAcHJpdmF0ZVxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGF1dG9HZW5lcmF0ZUdldFNldChwcm90bywga2V5KSB7XG4gICAgaWYgKE5lby5oYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSkge1xuICAgICAgICB0aHJvdygnQ29uZmlnICcgKyBrZXkgKyAnXyAoJyArIHByb3RvLmNsYXNzTmFtZSArICcpIGFscmVhZHkgaGFzIGEgc2V0IG1ldGhvZCwgdXNlIGJlZm9yZUdldCwgYmVmb3JlU2V0ICYgYWZ0ZXJTZXQgaW5zdGVhZCcpXG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV0gPSB7fVxuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlR2V0ID0gYGJlZm9yZUdldCR7a2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YCxcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gT2JqZWN0Lmhhc093bihtZVtjb25maWdTeW1ib2xdLCBrZXkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgICAgPSBtZVtjb25maWdTeW1ib2xdW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTmV3S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lWydfJyArIGtleV07IC8vIHJldHVybiB0aGUgdmFsdWUgcGFyc2VkIGJ5IHRoZSBzZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZUdldF0odmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgX2tleSAgICAgID0gJ18nICsga2V5LFxuICAgICAgICAgICAgICAgICAgICB1S2V5ICAgICAgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2V0ID0gJ2JlZm9yZVNldCcgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycgJiYga2V5ICE9PSAndm5vZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcbiAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgZG9uJ3QgcmV0dXJuIGEgdmFsdWUsIHRoYXQgbWVhbnMgbm8gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKGtleSA9PT0gJ3Zub2RlJyAmJiB2YWx1ZSAhPT0gb2xkVmFsdWUpIHx8IC8vIHZub2RlIHRyZWVzIGNhbiBiZSBodWdlLCBhdm9pZCBhIGRlZXAgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgICAhTmVvLmlzRXF1YWwodmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBtZVthZnRlclNldF0/Lih2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBtZS5hZnRlclNldENvbmZpZz8uKGtleSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywga2V5LCBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pXG59XG5cbi8qKlxuICogQHBhcmFtIHtCb29sZWFufSBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSAgY3VycmVudFxuICogQHBhcmFtIHtPYmplY3R9ICBwcmV2XG4gKiBAcmV0dXJucyB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlOcyhjcmVhdGUsIGN1cnJlbnQsIHByZXYpIHtcbiAgICBsZXQgYXJyRGV0YWlscyA9IHBhcnNlQXJyYXlGcm9tU3RyaW5nKGN1cnJlbnQpLFxuICAgICAgICBpICAgICAgICAgID0gMSxcbiAgICAgICAgbGVuICAgICAgICA9IGFyckRldGFpbHMubGVuZ3RoLFxuICAgICAgICBhcnJJdGVtLCBhcnJSb290O1xuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgICBwcmV2W2FyckRldGFpbHNbMF1dID0gYXJyUm9vdCA9IHByZXZbYXJyRGV0YWlsc1swXV0gfHwgW11cbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJSb290ID0gcHJldlthcnJEZXRhaWxzWzBdXVxuICAgIH1cblxuICAgIGlmICghYXJyUm9vdCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFyckl0ZW0gPSBwYXJzZUludChhcnJEZXRhaWxzW2ldKTtcblxuICAgICAgICBpZiAoY3JlYXRlKSB7XG4gICAgICAgICAgICBhcnJSb290W2Fyckl0ZW1dID0gYXJyUm9vdFthcnJJdGVtXSB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgYXJyUm9vdCA9IGFyclJvb3RbYXJySXRlbV1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyUm9vdFxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleGlzdHMoY2xhc3NOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XVxuICAgICAgICB9LCBnbG9iYWxUaGlzKVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvdG9ba2V5XT8uX2Zyb20pIHtcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWl4aW4gc2V0IG11bHRpcGxlIHRpbWVzIG9yIGFscmVhZHkgZGVmaW5lZCBvbiBhIEJhc2UgQ2xhc3MnLCBwcm90by5jbGFzc05hbWUsIG1peGluUHJvdG8uY2xhc3NOYW1lLCBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7cHJvdG8uY2xhc3NOYW1lfTogTXVsdGlwbGUgbWl4aW5zIGRlZmluaW5nIHNhbWUgcHJvcGVydHkgKCR7bWl4aW5Qcm90by5jbGFzc05hbWV9LCAke3Byb3RvW2tleV0uX2Zyb219KSA9PiAke2tleX1gXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBwcm90b1trZXldID0gbWl4aW5Qcm90b1trZXldO1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSkuX2Zyb20gPSBtaXhpblByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAodHlwZW9mIHByb3RvW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHByb3RvW2tleV0uX25hbWUgPSBrZXlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gbWl4aW5DbHNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peFJlZHVjZShtaXhpbkNscykge1xuICAgIHJldHVybiAocHJldiwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF0gPSBpZHggIT09IGFyci5sZW5ndGggLTEgPyBwcmV2W2N1cnJlbnRdIHx8IHt9IDogbWl4aW5DbHNcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcnJheUZyb21TdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIChleHRyYWN0QXJyYXlzUmVnZXguZXhlYyhzdHIpIHx8IFtudWxsXSkuc2xpY2UoMSkucmVkdWNlKFxuICAgICAgICAoZnVuLCBhcmdzKSA9PiBbZnVuXS5jb25jYXQoYXJncy5tYXRjaChjaGFyc1JlZ2V4KSlcbiAgICApXG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IE5lbztcbiIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IEZpbHRlciAgICAgZnJvbSAnLi9GaWx0ZXIubWpzJztcbmltcG9ydCBMb2dnZXIgICAgIGZyb20gJy4uL3V0aWwvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBTb3J0ZXIgICAgIGZyb20gJy4vU29ydGVyLm1qcyc7XG5cbmNvbnN0IGNvdW50TXV0YXRpb25zICAgPSBTeW1ib2woJ2NvdW50TXV0YXRpb25zJyksXG4gICAgICBpc0ZpbHRlcmVkICAgICAgID0gU3ltYm9sKCdpc0ZpbHRlcmVkJyksXG4gICAgICBpc1NvcnRlZCAgICAgICAgID0gU3ltYm9sKCdpc1NvcnRlZCcpLFxuICAgICAgc2lsZW50VXBkYXRlTW9kZSA9IFN5bWJvbCgnc2lsZW50VXBkYXRlTW9kZScpLFxuICAgICAgdG9BZGRBcnJheSAgICAgICA9IFN5bWJvbCgndG9BZGRBcnJheScpLFxuICAgICAgdG9SZW1vdmVBcnJheSAgICA9IFN5bWJvbCgndG9SZW1vdmVBcnJheScpLFxuICAgICAgdXBkYXRpbmdJbmRleCAgICA9IFN5bWJvbCgndXBkYXRpbmdJbmRleCcpO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIENvbGxlY3Rpb24gZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS5PYnNlcnZhYmxlIG1peGluXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBvYnNlcnZhYmxlID0gdHJ1ZVxuXG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvbGxlY3Rpb24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGZpbHRlcmluZyB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUsIGFsbEl0ZW1zIHdpbGwgYmVjb21lIGEgbmV3IGNvbGxlY3Rpb24gZm9yIHRoZSB1bmZpbHRlcmVkXG4gICAgICAgICAqIHN0YXRlLCB1c2luZyB0aGlzIGlkIGFzIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZXxudWxsfSBhbGxJdGVtcz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGFsbEl0ZW1zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzb3J0IHRoZSBjb2xsZWN0aW9uIGl0ZW1zIHdoZW4gYWRkaW5nIC8gaW5zZXJ0aW5nIG5ldyBvbmVzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Tb3J0PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Tb3J0OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlICdwcmltaXRpdmUnIGZvciBkZWZhdWx0IGZpbHRlcnMsIHVzZSAnYWR2YW5jZWQnIGZvciBmaWx0ZXJzIHVzaW5nIGEgZmlsdGVyQnkgbWV0aG9kXG4gICAgICAgICAqIHdoaWNoIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBmaWx0ZXJNb2RlPSdwcmltaXRpdmUnXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJNb2RlOiAncHJpbWl0aXZlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuRmlsdGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gZmlsdGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGl0ZW1zXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlKCEpIGtleSBwcm9wZXJ0eSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaW5nIG5ldyBpdGVtcyB3aXRob3V0IGFuIGlkIChrZXlQcm9wZXJ0eSkgd2lsbCB1c2UgYSBuZWdhdGl2ZSBpbmRleCwgd2hpY2ggd2lsbCBkZWNyZWFzZSBieSAtMVxuICAgICAgICAgKiBmb3IgZWFjaCBuZXcgaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGtleVByb3BlcnR5SW5kZXg9LTFcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5SW5kZXg6IC0xLFxuICAgICAgICAvKipcbiAgICAgICAgICogQSBtYXAgY29udGFpbmluZyB0aGUga2V5ICYgcmVmZXJlbmNlIG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge01hcH0gbWFwXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1hcF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBkaXJlY3Rpb25zIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0RGlyZWN0aW9ucz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNvcnREaXJlY3Rpb25zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZXJuYWwgQXJyYXkgb2YgdGhlIHNvcnQgcHJvcGVydGllcyBmb3IgZmFzdGVyIGFjY2Vzc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydFByb3BlcnRpZXM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0UHJvcGVydGllczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuU29ydGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIHNvcnRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiBhbm90aGVyIGNvbGxlY3Rpb24gaW5zdGFuY2UgdG8gdXNlIGFzIHRoaXMgZGF0YSBzb3VyY2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNvdXJjZUlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VJZF86IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHN5bWJvbENvbmZpZyA9IHtlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWV9O1xuXG4gICAgICAgIG1lLml0ZW1zID0gbWUuaXRlbXMgfHwgW107XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcbiAgICAgICAgICAgIFtjb3VudE11dGF0aW9uc10gIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcbiAgICAgICAgICAgIFtpc0ZpbHRlcmVkXSAgICAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcbiAgICAgICAgICAgIFtpc1NvcnRlZF0gICAgICAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcbiAgICAgICAgICAgIFtzaWxlbnRVcGRhdGVNb2RlXTogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IGZhbHNlfSxcbiAgICAgICAgICAgIFt0b0FkZEFycmF5XSAgICAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IFtdfSxcbiAgICAgICAgICAgIFt0b1JlbW92ZUFycmF5XSAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IFtdfSxcbiAgICAgICAgICAgIFt1cGRhdGluZ0luZGV4XSAgIDogey4uLnN5bWJvbENvbmZpZywgdmFsdWU6IDB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZS5kb1NvcnQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW0gVGhlIGl0ZW0ocykgdG8gYWRkXG4gICAgICogQHJldHVybnMge09iamVjdFtdfSBhbiBhcnJheSBjb250YWluaW5nIGFsbCBhZGRlZCBpdGVtc1xuICAgICAqL1xuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZShudWxsLCBudWxsLCBpdGVtKS5hZGRlZEl0ZW1zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLm9uKCdjaGFuZ2UnLCBtZS5vbkZpbHRlckNoYW5nZSwgbWUpO1xuICAgICAgICAgICAgICAgIGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9sZFZhbHVlICYmIG1lLmZpbHRlcigpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB7a2V5UHJvcGVydHl9ID0gbWUsXG4gICAgICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICAgICAgbGVuICAgICAgICAgICA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpdGVtO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgICAgIG1lLm1hcC5zZXQoaXRlbVtrZXlQcm9wZXJ0eV0sIGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U29ydGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5hcHBseVNvcnRlckNvbmZpZ3MoKTtcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKHNvcnRlciA9PiB7XG4gICAgICAgICAgICBpZiAoc29ydGVyLmxpc3RlbmVyQXBwbGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzb3J0ZXIub24oJ2NoYW5nZScsIG1lLm9uU29ydGVyQ2hhbmdlLCBtZSk7XG4gICAgICAgICAgICAgICAgc29ydGVyLmxpc3RlbmVyQXBwbGllZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2xkVmFsdWUgJiYgbWUuYXV0b1NvcnQgJiYgbWUuZG9Tb3J0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNvdXJjZUlkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE5lby5nZXQodmFsdWUpO1xuXG4gICAgICAgICAgICBtZS5faXRlbXMgPSBbLi4uc291cmNlLl9pdGVtc107XG4gICAgICAgICAgICBtZS5tYXAgICAgPSBuZXcgTWFwKHNvdXJjZS5tYXApOyAvLyBjcmVhdGVzIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIG1hcFxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnNDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbXV0YXRlOiBtZS5vbk11dGF0ZSxcbiAgICAgICAgICAgICAgICBzY29wZSA6IG1lXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzb3VyY2Uub24obGlzdGVuZXJzQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldChvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnVuKGxpc3RlbmVyc0NvbmZpZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmVzIHRoZSBzb3J0IHByb3BlcnR5ICYgZGlyZWN0aW9uIG11bHRpcGxpZXIgb2YgZWFjaCBzb3J0ZXIgaW5zaWRlIDIgYXJyYXlzIGZvciBmYXN0ZXIgYWNjZXNzIHdoZW4gc29ydGluZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhcHBseVNvcnRlckNvbmZpZ3MoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc29ydERpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgbWUuc29ydFByb3BlcnRpZXMgPSBbXTtcblxuICAgICAgICBtZS5zb3J0ZXJzLmZvckVhY2goc29ydGVyID0+IHtcbiAgICAgICAgICAgIG1lLnNvcnREaXJlY3Rpb25zLnB1c2goc29ydGVyLmRpcmVjdGlvbk11bHRpcGxpZXIpO1xuICAgICAgICAgICAgbWUuc29ydFByb3BlcnRpZXMucHVzaChzb3J0ZXIucHJvcGVydHkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gW3ZhbHVlXSA6IFtdXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVuID0gb2xkVmFsdWUgJiYgb2xkVmFsdWUubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBoYXNNYXRjaCwgaTtcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGkgICAgICAgID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IGtleS5vcGVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eToga2V5LnByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiBrZXkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0ub3BlcmF0b3IgPT09IChrZXkub3BlcmF0b3IgfHwgJz09PScpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0ga2V5LnByb3BlcnR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS52YWx1ZSAgICA9PT0ga2V5LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IE5lby5jcmVhdGUoRmlsdGVyLCBrZXkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IG9sZFZhbHVlW2ldO1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBsZW4tLVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBrZXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TWFwfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtNYXB8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0TWFwKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gIXZhbHVlID8gbmV3IE1hcCgpIDogdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNvcnRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBbdmFsdWVdIDogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZT8ubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBoYXNNYXRjaCwgaTtcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGkgICAgICAgID0gMDtcblxuICAgICAgICAgICAgICAgIGxldCB7ZGlyZWN0aW9uLCBwcm9wZXJ0eX0gPSBrZXk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5zZXQoe2RpcmVjdGlvbiwgcHJvcGVydHl9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0gcHJvcGVydHkgJiYgb2xkVmFsdWVbaV0uZGlyZWN0aW9uID09PSBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBOZW8uY3JlYXRlKFNvcnRlciwga2V5KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBvbGRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgbGVuLS1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2xkVmFsdWU/LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGtleS5kZXN0cm95KClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY2FjaGVVcGRhdGUob3B0cykge1xuICAgICAgICAvLyBkaXNhYmxlZCBmb3Igbm93XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYWNoZVVwZGF0ZScsIG9wdHMsIHRoaXNbdG9BZGRBcnJheV0pO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2tleVByb3BlcnR5fSA9IG1lLFxuICAgICAgICAgICAgaW5kZXgsIHRvQWRkTWFwLCB0b1JlbW92ZU1hcDtcblxuICAgICAgICBpZiAoIW1lW3NpbGVudFVwZGF0ZU1vZGVdKSB7XG4gICAgICAgICAgICB0b0FkZE1hcCAgICA9IG1lW3RvQWRkQXJyYXldICAgLm1hcChlID0+IGVba2V5UHJvcGVydHldKTtcbiAgICAgICAgICAgIHRvUmVtb3ZlTWFwID0gbWVbdG9SZW1vdmVBcnJheV0ubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgICAgICBvcHRzLmFkZGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPSB0b1JlbW92ZU1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA+IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b0FkZE1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0ucHVzaChpdGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBvcHRzLnJlbW92ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvUmVtb3ZlTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGFuZCBjbGVhcnMgdGhlIG1hcFxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNwbGljZSgwLCB0aGlzLmdldENvdW50KCkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjdXJyZW50IGZpbHRlcnMgYW5kIG9wdGlvbmFsbHkgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIG9uZXMgaW4gY2FzZSB0aGV5IGV4aXN0ZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmVzdG9yZU9yaWdpbmFsRmlsdGVycz1mYWxzZV1cbiAgICAgKi9cbiAgICBjbGVhckZpbHRlcnMocmVzdG9yZU9yaWdpbmFsRmlsdGVycykge1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSByZXN0b3JlT3JpZ2luYWxGaWx0ZXJzID8gTmVvLmNsb25lKHRoaXMub3JpZ2luYWxDb25maWcuZmlsdGVycywgdHJ1ZSwgdHJ1ZSkgOiBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgaXRlbXMgYW5kIGNsZWFycyB0aGUgbWFwLCB3aXRob3V0IGZpcmluZyBhIG11dGF0ZSBldmVudFxuICAgICAqL1xuICAgIGNsZWFyU2lsZW50KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLl9pdGVtcy5zcGxpY2UoMCwgbWUuZ2V0Q291bnQoKSk7XG4gICAgICAgIG1lLm1hcC5jbGVhcigpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjdXJyZW50IHNvcnRlcnMgYW5kIG9wdGlvbmFsbHkgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIG9uZXMgaW4gY2FzZSB0aGV5IGV4aXN0ZWQuXG4gICAgICogV2l0aG91dCByZXN0b3JlSW5pdGlhbFN0YXRlIGFzIHRydWUgdGhpcyB3aWxsIG5vdCBhZmZlY3QgdGhlIGN1cnJlbnQgc29ydGluZyBvZiB0aGlzIGNvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmVzdG9yZU9yaWdpbmFsU29ydGVycz1mYWxzZV1cbiAgICAgKi9cbiAgICBjbGVhclNvcnRlcnMocmVzdG9yZU9yaWdpbmFsU29ydGVycykge1xuICAgICAgICB0aGlzLnNvcnRlcnMgPSByZXN0b3JlT3JpZ2luYWxTb3J0ZXJzID8gTmVvLmNsb25lKHRoaXMub3JpZ2luYWxDb25maWcuc29ydGVycywgdHJ1ZSwgdHJ1ZSkgOiBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V9IFRoZSBjbG9uZWQgY29sbGVjdGlvblxuICAgICAqL1xuICAgIGNsb25lKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgID0gTmVvLmNsb25lKG1lLm9yaWdpbmFsQ29uZmlnLCB0cnVlKSxcbiAgICAgICAgICAgIGZpbHRlcnMgPSBtZS5fZmlsdGVycyB8fCBbXSxcbiAgICAgICAgICAgIHNvcnRlcnMgPSBtZS5fc29ydGVycyB8fCBbXTtcblxuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaXRlbXM7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuc29ydGVycztcblxuICAgICAgICBpZiAobWUuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbmZpZy5pdGVtcyA9IFsuLi5tZS5faXRlbXNdXG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuZmlsdGVycyA9IFtdO1xuICAgICAgICBjb25maWcuc29ydGVycyA9IFtdO1xuXG4gICAgICAgIC8vIHRvZG86IGZpbHRlcnMgJiBzb3J0ZXJzIHNob3VsZCBwdXNoIHRoZWlyIGN1cnJlbnQgc3RhdGUgYW5kIG5vdCB0aGUgb3JpZ2luYWwgb25lXG5cbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcikge1xuICAgICAgICAgICAgY29uZmlnLmZpbHRlcnMucHVzaChmaWx0ZXIub3JpZ2luYWxDb25maWcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvcnRlcnMuZm9yRWFjaChmdW5jdGlvbihzb3J0ZXIpIHtcbiAgICAgICAgICAgIGNvbmZpZy5zb3J0ZXJzLnB1c2goc29ydGVyLm9yaWdpbmFsQ29uZmlnKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCBjb25maWcpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBtYXAgJiBpdGVtcyBhcnJheSBiZWZvcmUgdGhlIHN1cGVyIGNhbGxcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLl9pdGVtcy5zcGxpY2UoMCwgbWUuX2l0ZW1zLmxlbmd0aCk7XG4gICAgICAgIG1lLm1hcC5jbGVhcigpO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gaXRlbXM9dGhpcy5faXRlbXNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHNpbGVudD1mYWxzZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBkb1NvcnQoaXRlbXM9dGhpcy5faXRlbXMsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcHJldmlvdXNJdGVtcyAgICAgPSBbLi4uaXRlbXNdLFxuICAgICAgICAgICAge3NvcnRlcnMsIHNvcnREaXJlY3Rpb25zLCBzb3J0UHJvcGVydGllc30gPSBtZSxcbiAgICAgICAgICAgIGNvdW50U29ydGVycyAgICAgID0gc29ydFByb3BlcnRpZXMubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBoYXNTb3J0QnlNZXRob2QgICA9IGZhbHNlLFxuICAgICAgICAgICAgaGFzVHJhbnNmb3JtVmFsdWUgPSBmYWxzZSxcbiAgICAgICAgICAgIGksIG1hcHBlZEl0ZW1zLCBvYmosIHNvcnRlciwgc29ydFByb3BlcnR5LCBzb3J0VmFsdWU7XG5cbiAgICAgICAgaWYgKGNvdW50U29ydGVycyA+IDApIHtcbiAgICAgICAgICAgIHNvcnRlcnMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc29ydEJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1NvcnRCeU1ldGhvZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnVzZVRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybVZhbHVlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzU29ydEJ5TWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWUuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyICAgID0gc29ydGVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZSA9IHNvcnRlcltzb3J0ZXIuc29ydEJ5ID8gJ3NvcnRCeScgOiAnZGVmYXVsdFNvcnRCeSddKGEsIGIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydFZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCNTb3J0aW5nX3dpdGhfbWFwXG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge2luZGV4fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgICA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnRTb3J0ZXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydGVyc1tpXS51c2VUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbc29ydFByb3BlcnRpZXNbaV1dID0gc29ydGVyc1tpXS50cmFuc2Zvcm1WYWx1ZShpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbc29ydFByb3BlcnRpZXNbaV1dID0gaXRlbVtzb3J0UHJvcGVydGllc1tpXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMgPSBpdGVtc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFByb3BlcnR5ID0gc29ydFByb3BlcnRpZXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPiBiW3NvcnRQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMSAqIHNvcnREaXJlY3Rpb25zW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPCBiW3NvcnRQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiBzb3J0RGlyZWN0aW9uc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5faXRlbXMgPSBtYXBwZWRJdGVtcy5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2VsLmluZGV4XVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lW2lzU29ydGVkXSA9IGNvdW50U29ydGVycyA+IDA7XG5cbiAgICAgICAgaWYgKCFzaWxlbnQgJiYgbWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ3NvcnQnLCB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IG1lLl9pdGVtcyxcbiAgICAgICAgICAgICAgICBwcmV2aW91c0l0ZW1zLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3VtZXMgdGhlIGNvbGxlY3Rpb24gZXZlbnRzLlxuICAgICAqIElmIHlvdSBzdGFydGVkIGFuIHVwZGF0ZSB1c2luZyB0aGUgc3RhcnRTaWxlbnRVcGRhdGVNb2RlIGZsYWcsXG4gICAgICogeW91IG11c3QgdXNlIHRoZSBlbmRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtIGZvciB0aGlzIGNhbGwuXG4gICAgICogVXNpbmcgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gd2lsbCBub3QgZmlyZSBhIG11dGF0aW9uIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VuZFNpbGVudFVwZGF0ZU1vZGVdXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbGxlY3Rpb24uQmFzZSNzdGFydFVwZGF0ZSBzdGFydFVwZGF0ZX1cbiAgICAgKi9cbiAgICBlbmRVcGRhdGUoZW5kU2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lW3VwZGF0aW5nSW5kZXhdID4gMCkge1xuICAgICAgICAgICAgbWVbdXBkYXRpbmdJbmRleF0tLVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIG1lW3NpbGVudFVwZGF0ZU1vZGVdID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ211dGF0ZScsIHtcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zICA6IG1lW3RvQWRkQXJyYXldLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtczogbWVbdG9SZW1vdmVBcnJheV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZVt0b0FkZEFycmF5XSAgIC5zcGxpY2UoMCwgbWVbdG9BZGRBcnJheV0gICAubGVuZ3RoKTtcbiAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZSgwLCBtZVt0b1JlbW92ZUFycmF5XS5sZW5ndGgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgZm9yIHJlbW90ZSBmaWx0ZXJpbmdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgZXhwb3J0RmlsdGVycygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVycyA9IFtdLFxuICAgICAgICAgICAgZmlsdGVyO1xuXG4gICAgICAgIG1lLmZpbHRlcnM/LmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGZpbHRlciA9IGtleS5leHBvcnQoKTtcblxuICAgICAgICAgICAgZmlsdGVyICYmIGZpbHRlcnMucHVzaChmaWx0ZXIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmaWx0ZXJzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciByZW1vdGUgc29ydGluZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICBleHBvcnRTb3J0ZXJzKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzb3J0ZXJzID0gW10sXG4gICAgICAgICAgICBzb3J0ZXI7XG5cbiAgICAgICAgbWUuc29ydGVycz8uZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgc29ydGVyID0ga2V5LmV4cG9ydCgpO1xuXG4gICAgICAgICAgICBzb3J0ZXIgJiYgc29ydGVycy5wdXNoKHNvcnRlcilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNvcnRlcnNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZmlsdGVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgICAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgY291bnRBbGxGaWx0ZXJzID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBjb3VudEZpbHRlcnMgICAgPSAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgID0gbWUuYWxsSXRlbXM/Ll9pdGVtcyB8fCBtZS5faXRlbXMsXG4gICAgICAgICAgICBpICAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgY291bnRJdGVtcyAgICAgID0gaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyAgID0gW10sXG4gICAgICAgICAgICBuZWVkc1NvcnRpbmcgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIG9sZEl0ZW1zICAgICAgICA9IFsuLi5tZS5faXRlbXNdLFxuICAgICAgICAgICAgY29uZmlnLCBpc0luY2x1ZGVkLCBpdGVtLCBqLCB0bXBJdGVtcztcblxuICAgICAgICBmb3IgKDsgaSA8IGNvdW50QWxsRmlsdGVyczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcnNbaV0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBjb3VudEZpbHRlcnMrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50RmlsdGVycyA9PT0gMCAmJiBtZS5hbGxJdGVtcykge1xuICAgICAgICAgICAgaWYgKG1lLnNvcnRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG5lZWRzU29ydGluZyA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuY2xlYXJTaWxlbnQoKTtcblxuICAgICAgICAgICAgbWUuaXRlbXMgPSBbLi4ubWUuYWxsSXRlbXMuX2l0ZW1zXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFtZS5hbGxJdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHsuLi5tZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XG5cbiAgICAgICAgICAgICAgICBtZS5hbGxJdGVtcyA9IE5lby5jcmVhdGUoQ29sbGVjdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICAuLi5OZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydHk6IG1lLmtleVByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZCAgIDogbWUuaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5tYXAuY2xlYXIoKTtcblxuICAgICAgICAgICAgaWYgKG1lLmZpbHRlck1vZGUgPT09ICdwcmltaXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgZm9yIGxvb3BzIG9uIHB1cnBvc2UgLT4gcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGogICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoaXRlbSwgaXRlbXMsIGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5jbHVkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLm1hcC5zZXQoaXRlbVttZS5rZXlQcm9wZXJ0eV0sIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5faXRlbXMgPSBmaWx0ZXJlZEl0ZW1zIC8vIHNpbGVudCB1cGRhdGUsIHRoZSBtYXAgaXMgYWxyZWFkeSBpbiBwbGFjZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLml0ZW1zXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcnNbal0uaXNGaWx0ZXJlZChmaWx0ZXJlZEl0ZW1zW2ldLCBmaWx0ZXJlZEl0ZW1zLCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGZpbHRlcmVkSXRlbXNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLnRtcEl0ZW1zXTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRJdGVtcyAgICA9IGZpbHRlcmVkSXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUuaXRlbXMgPSBmaWx0ZXJlZEl0ZW1zIC8vIHVwZGF0ZSB0aGUgbWFwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc0ZpbHRlcmVkXSA9IGNvdW50RmlsdGVycyAhPT0gMDtcblxuICAgICAgICBpZiAobmVlZHNTb3J0aW5nKSB7XG4gICAgICAgICAgICBtZS5kb1NvcnQobWUuaXRlbXMsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBtZS5maXJlKCdmaWx0ZXInLCB7XG4gICAgICAgICAgICBpc0ZpbHRlcmVkOiBtZVtpc0ZpbHRlcmVkXSxcbiAgICAgICAgICAgIGl0ZW1zICAgICA6IG1lLml0ZW1zLFxuICAgICAgICAgICAgb2xkSXRlbXMsXG4gICAgICAgICAgICBzY29wZSAgICAgOiBtZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaXRlbXMgd2hpY2ggbWF0Y2ggdGhlIHByb3BlcnR5IGFuZCB2YWx1ZS5cbiAgICAgKiBQcm9wZXJ0aWVzIGNhbiBjb250YWluIGRvdHMgZm9yIG5hbWVzcGFjZXMgPT4gZmluZCgndmRvbS5pZCcsICduZW8tdm5vZGUtMScpXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gW3ZhbHVlXSBPbmx5IHJlcXVpcmVkIGluIGNhc2UgdGhlIGZpcnN0IHBhcmFtIGlzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZXR1cm5GaXJzdE1hdGNoPWZhbHNlXG4gICAgICogQHJldHVybnMge09iamVjdHxPYmplY3RbXX1cbiAgICAgKiAgICAgcmV0dXJuRmlyc3RNYXRjaD1mYWxzZTogUmV0dXJucyBhbiBlbXB0eSBBcnJheSBpbiBjYXNlIG5vIGl0ZW1zIGFyZSBmb3VuZFxuICAgICAqICAgICByZXR1cm5GaXJzdE1hdGNoPXRydWU6ICBSZXR1cm5zIHRoZSBmaXJzdCBmb3VuZCBpdGVtIG9yIG51bGxcbiAgICAgKi9cbiAgICBmaW5kKHByb3BlcnR5LCB2YWx1ZSwgcmV0dXJuRmlyc3RNYXRjaD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpc09iamVjdFByb3BlcnR5ID0gbWUuaXNJdGVtKHByb3BlcnR5KSxcbiAgICAgICAgICAgIGl0ZW0sIG1hdGNoQXJyYXksIHByb3BlcnRpZXNBcnJheSwgcHJvcGVydGllc0xlbmd0aDtcblxuICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcHJvcGVydGllc0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKHByb3BlcnR5KTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNMZW5ndGggPSBwcm9wZXJ0aWVzQXJyYXkubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpdGVtIG9mIG1lLml0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5ucyhrZXksIGZhbHNlLCBpdGVtKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IHByb3BlcnRpZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVybkZpcnN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8ubnMocHJvcGVydHksIGZhbHNlLCBpdGVtKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuRmlyc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5GaXJzdE1hdGNoID8gbnVsbCA6IGl0ZW1zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBpdGVtIGluc2lkZSB0aGUgc3RhcnQtZW5kIHJhbmdlLiBSZXR1cm4gdHJ1ZSBmb3IgYSBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZm4uaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGU9dGhpcyBUaGUgc2NvcGUgaW4gd2hpY2ggdGhlIHBhc3NlZCBmdW5jdGlvbiBnZXRzIGV4ZWN1dGVkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0PTAgVGhlIHN0YXJ0IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGVuZD10aGlzLmdldENvdW50KCkgVGhlIGVuZCBpbmRleCAodXAgdG8sIGxhc3QgdmFsdWUgZXhjbHVkZWQpXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGVtcHR5IEFycmF5IGluIGNhc2Ugbm8gaXRlbXMgYXJlIGZvdW5kXG4gICAgICovXG4gICAgZmluZEJ5KGZuLCBzY29wZT10aGlzLCBzdGFydD0wLCBlbmQ9dGhpcy5nZXRDb3VudCgpKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyA9IFtdLFxuICAgICAgICAgICAgaSAgICAgPSBzdGFydDtcblxuICAgICAgICBmb3IgKDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZm4uY2FsbChzY29wZSwgbWUuaXRlbXNbaV0pKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChtZS5pdGVtc1tpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGl0ZW0gd2hpY2ggbWF0Y2hlcyB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW3ZhbHVlXSBPbmx5IHJlcXVpcmVkIGluIGNhc2UgdGhlIGZpcnN0IHBhcmFtIGlzIGEgc3RyaW5nXG4gICAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgZmlyc3QgZm91bmQgaXRlbSBvciBudWxsXG4gICAgICovXG4gICAgZmluZEZpcnN0KHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kKHByb3BlcnR5LCB2YWx1ZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1swXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHRvIHRoZSBrZXksIG9yIG51bGwgaWYgdGhlcmUgaXMgbm9uZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaXRlbSBmb3IgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEF0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGludGVybmFsIGl0ZW1zIGFycmF5XG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnRNdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2NvdW50TXV0YXRpb25zXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IG1hdGNoaW5nIGZpbHRlciBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29sbGVjdGlvbi5GaWx0ZXJ8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRGaWx0ZXIocHJvcGVydHkpIHtcbiAgICAgICAgbGV0IGZpbHRlcnMgPSB0aGlzLmZpbHRlcnMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSBmaWx0ZXJzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyc1tpXS5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyc1tpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBrZXkgZm9yIGEgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ3x1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0S2V5QXQoaW5kZXgpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtc1tpbmRleF07XG4gICAgICAgIHJldHVybiBpdGVtPy5bdGhpcy5rZXlQcm9wZXJ0eV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2hhbGxvdyBjb3B5IG9mIGEgcG9ydGlvbiBvZiB0aGUgaXRlbXMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSBaZXJvLWJhc2VkIGluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIGV4dHJhY3Rpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmRdIFplcm8tYmFzZWQgaW5kZXggYmVmb3JlIHdoaWNoIHRvIGVuZCBleHRyYWN0aW9uIChleHRyYWN0cyB1cCB0byBidXQgbm90IGluY2x1ZGluZyBlbmQpLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zbGljZVxuICAgICAqL1xuICAgIGdldFJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgU291cmNlIENvbGxlY3Rpb24gaW4gY2FzZSB0aGUgc291cmNlQ29sbGVjdGlvbklkIGNvbmZpZyB3YXMgc2V0XG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldFNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlSWQgJiYgTmVvLmdldCh0aGlzLnNvdXJjZUlkKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGEgdmFsdWUgaGFzIGJlZW4gYXNzb2NpYXRlZCB0byB0aGUga2V5IGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBhc3NlcnRpbmcgd2hldGhlciBhbiBpdGVtIGV4aXN0cyBpbiB0aGUgQ29sbGVjdGlvbiBvciBub3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc0l0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGl0ZW1bdGhpcy5rZXlQcm9wZXJ0eV0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4ga2V5IG9yIGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mKGtleSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbWUuX2l0ZW1zLmluZGV4T2YobWUuaXNJdGVtKGtleSkgPyBrZXkgOiBtZS5tYXAuZ2V0KGtleSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4gaXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXG4gICAgICovXG4gICAgaW5kZXhPZkl0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihpdGVtKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IGZvciBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXG4gICAgICovXG4gICAgaW5kZXhPZktleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YodGhpcy5tYXAuZ2V0KGtleSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGFuIGFycmF5IG9mIGl0ZW1zIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX0gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgYWRkZWQgaXRlbXNcbiAgICAgKi9cbiAgICBpbnNlcnQoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKS5hZGRlZEl0ZW1zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBmaWx0ZXJlZFxuICAgICAqL1xuICAgIGlzRmlsdGVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2lzRmlsdGVyZWRdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaXNGaWx0ZXJlZEl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJzICAgID0gbWUuX2ZpbHRlcnMsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBmaWx0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGlzRmlsdGVyZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyc1tpXS5pc0ZpbHRlcmVkKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0ZpbHRlcmVkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBjaGVjayBpZiBhIGdpdmVuIGlucHV0IGlzIGVpdGhlciBvYmplY3QtbGlrZSBvciBhIGtleVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gcmV0dXJucyB0cnVlIGZvciBvYmplY3QtbGlrZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBpc0l0ZW0odmFsdWUpIHtcbiAgICAgICAgLy8gV2UgY2FuIG5vdCB1c2UgTmVvLmlzT2JqZWN0KCkgfHwgTmVvLmlzUmVjb3JkKCksIHNpbmNlIGNvbGxlY3Rpb25zIGNhbiBzdG9yZSBuZW8gaW5zdGFuY2VzIHRvby5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb2xsZWN0aW9uIGlzIHNvcnRlZFxuICAgICAqL1xuICAgIGlzU29ydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tpc1NvcnRlZF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXN0IGl0ZW0gaW5zaWRlIHRoZSBjb2xsZWN0aW9uXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNbdGhpcy5nZXRDb3VudCgpIC0xXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIGFuIGl0ZW0gZnJvbSBmcm9tSW5kZXggdG8gdG9JbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgICAqL1xuICAgIG1vdmUoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPT09IHRvSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHtpdGVtc30gPSB0aGlzO1xuXG4gICAgICAgIGlmIChmcm9tSW5kZXggPj0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmcm9tSW5kZXggPSBpdGVtcy5sZW5ndGggLSAxXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5zcGxpY2UodG9JbmRleCwgMCwgaXRlbXMuc3BsaWNlKGZyb21JbmRleCwgMSlbMF0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25GaWx0ZXJDaGFuZ2Uob3B0cykge1xuICAgICAgICB0aGlzLmZpbHRlcigpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25NdXRhdGUob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIHRvZG86IGluc3BlY3QgdGhlIGJ1YmJsaW5nIGNoYWluXG4gICAgICAgIC8qaWYgKG9wdHMucHJldmVudEJ1YmJsZVVwKSB7XG4gICAgICAgICAgICBtZS5wcmV2ZW50QnViYmxlVXAgPSB0cnVlXG4gICAgICAgIH0qL1xuXG4gICAgICAgIG1lLnByZXZlbnRCdWJibGVVcCA9IHRydWU7XG5cbiAgICAgICAgbWUuc3BsaWNlKG51bGwsIG9wdHMucmVtb3ZlZEl0ZW1zLCBvcHRzLmFkZGVkSXRlbXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Tb3J0ZXJDaGFuZ2Uob3B0cykge1xuICAgICAgICB0aGlzLmFwcGx5U29ydGVyQ29uZmlncygpO1xuICAgICAgICB0aGlzLmRvU29ydCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBwb3AoKSB7XG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKHRoaXMuZ2V0Q291bnQoKSAtMSwgMSk7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5yZW1vdmVkSXRlbXNbMF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcHVzaChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpdGVtKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBnaXZlbiBrZXksIGl0ZW0gb3IgQXJyYXkgY29udGFpbmluZyBrZXlzfGl0ZW1zXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdHxBcnJheX0ga2V5XG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcbiAgICAgKi9cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIEFycmF5LmlzQXJyYXkoa2V5KSA/IGtleSA6IFtrZXldKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcbiAgICAgKi9cbiAgICByZW1vdmVBdChpbmRleCkge1xuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGUgaXRlbXMgYXJyYXkgaW4gcGxhY2UuXG4gICAgICogSW50ZW5kZWQgZm9yIGNvbGxlY3Rpb25zIHdpdGhvdXQgc29ydGVycy5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnJldmVyc2UoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGZpcnN0IGVsZW1lbnQgZnJvbSB0aGUgaXRlbXMgYXJyYXkgYW5kIHJldHVybnMgdGhpcyBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHNoaWZ0KCkge1xuICAgICAgICBsZXQgbXV0YXRpb24gPSB0aGlzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLmFkZGVkSXRlbXNbMF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBGdW5jdGlvbiB0byB0ZXN0IGZvciBlYWNoIGl0ZW0sIHRha2luZyB0aHJlZSBwYXJhbWV0ZXJzOlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgIGNhbGxiYWNrLml0ZW0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSAgW2NhbGxiYWNrLmluZGV4XSBUaGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgIFtjYWxsYmFjay5pdGVtc10gVGhlIGl0ZW1zIGFycmF5IG9mIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSBWYWx1ZSB0byB1c2UgYXMgXCJ0aGlzXCIgd2hlbiBleGVjdXRpbmcgdGhlIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHJldHVybnMgYSB0cnV0aHkgdmFsdWUgZm9yIGFueSBjb2xsZWN0aW9uIGl0ZW0sIG90aGVyd2lzZSBmYWxzZVxuICAgICAqL1xuICAgIHNvbWUoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuc29tZSguLi5hcmdzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgaXRlbXMgZnJvbSBhbmQvb3IgYWRkcyBpdGVtcyB0byB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBJZiB0aGUgdG9SZW1vdmVBcnJheSBpcyB1c2VkLCB0aGVuIHRoZSBpbmRleCBpcyBub3QgdXNlZCBmb3IgcmVtb3ZpbmcsIHRoZSBlbnRyaWVzIGFyZSBmb3VuZCBieSBrZXkgYW5kIHJlbW92ZWQgZnJvbSB3aGVyZSB0aGV5IGFyZS5cbiAgICAgKiBJZiBpbmRleCBpcyBub3QgcGFzc2VkLCB0b0FkZEFycmF5IGlzIGFwcGVuZGVkIHRvIHRoZSBDb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0W119IFtyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheV1cbiAgICAgKiBAcGFyYW0ge09iamVjdHxPYmplY3RbXX0gW3RvQWRkQXJyYXldXG4gICAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkZGVkSXRlbXMgJiByZW1vdmVkSXRlbXMgYXJyYXlzXG4gICAgICovXG4gICAgc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSwgdG9BZGRBcnJheSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtrZXlQcm9wZXJ0eSwgbWFwfSA9IG1lLFxuICAgICAgICAgICAgc291cmNlICAgICAgICAgICAgID0gbWUuZ2V0U291cmNlKCksXG4gICAgICAgICAgICBhZGRlZEl0ZW1zICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgICA9IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnRBdEluZGV4ID0gTmVvLmlzTnVtYmVyKHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5KSA/IHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5IDogbnVsbCxcbiAgICAgICAgICAgIHRvUmVtb3ZlQXJyYXkgICAgICA9IEFycmF5LmlzQXJyYXkocmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkpID8gcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkgOiBudWxsLFxuICAgICAgICAgICAgaSwgaXRlbSwga2V5LCBsZW4sIHRvQWRkTWFwO1xuXG4gICAgICAgIGlmICghTmVvLmlzTnVtYmVyKGluZGV4KSAmJiByZW1vdmVDb3VudEF0SW5kZXgpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihtZS5pZCArICc6IElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHJlbW92ZUNvdW50QXRJbmRleCBjYW5ub3QgYmUgdXNlZCcpXG4gICAgICAgIH1cblxuICAgICAgICB0b0FkZEFycmF5ID0gdG9BZGRBcnJheSAmJiAhQXJyYXkuaXNBcnJheSh0b0FkZEFycmF5KSA/IFt0b0FkZEFycmF5XSA6IHRvQWRkQXJyYXk7XG5cbiAgICAgICAgaWYgKHRvUmVtb3ZlQXJyYXkgJiYgKGxlbiA9IHRvUmVtb3ZlQXJyYXkubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGlmICh0b0FkZEFycmF5ICYmIHRvQWRkQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRvQWRkTWFwID0gdG9BZGRBcnJheS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b1JlbW92ZUFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGtleSAgPSBtZS5pc0l0ZW0oaXRlbSkgPyBpdGVtW2tleVByb3BlcnR5XSA6IGl0ZW07XG5cbiAgICAgICAgICAgICAgICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdG9BZGRNYXAgfHwgKHRvQWRkTWFwICYmIHRvQWRkTWFwLmluZGV4T2Yoa2V5KSA8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaChpdGVtcy5zcGxpY2UobWUuaW5kZXhPZktleShrZXkpLCAxKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGtleSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1vdmVDb3VudEF0SW5kZXggJiYgcmVtb3ZlQ291bnRBdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLnB1c2goLi4uaXRlbXMuc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudEF0SW5kZXgpKTtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoZVtrZXlQcm9wZXJ0eV0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvQWRkQXJyYXkgJiYgKGxlbiA9IHRvQWRkQXJyYXkubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9BZGRBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBrZXkgID0gaXRlbVtrZXlQcm9wZXJ0eV07XG5cbiAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtW2tleVByb3BlcnR5XSA9IGtleSA9IG1lLmtleVByb3BlcnR5SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIG1lLmtleVByb3BlcnR5SW5kZXgtLVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXkpICYmICFtZS5pc0ZpbHRlcmVkSXRlbShpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBpdGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQgZm9yIFNhZmFyaSwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvNjIyOFxuICAgICAgICAgICAgICAgICAgICBtZS5faXRlbXMgPSBhZGRlZEl0ZW1zXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMuc3BsaWNlKE5lby5pc051bWJlcihpbmRleCkgPyBpbmRleCA6IGl0ZW1zLmxlbmd0aCwgMCwgLi4uYWRkZWRJdGVtcylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuYXV0b1NvcnQgJiYgbWUuX3NvcnRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZS5kb1NvcnQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICghc291cmNlLmdldFNvdXJjZSgpKSB7XG4gICAgICAgICAgICAgICAgc291cmNlLnByZXZlbnRCdWJibGVVcCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFtZS5wcmV2ZW50QnViYmxlVXApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291cmNlIHNwbGljZScsIHNvdXJjZS5pZCwgJ2FkZGVkOicsIC4uLnRvQWRkQXJyYXksICdyZW1vdmVkOicsIC4uLnJlbW92ZWRJdGVtcyk7XG4gICAgICAgICAgICAgICAgbWUuc3RhcnRVcGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnNwbGljZShudWxsLCB0b1JlbW92ZUFycmF5IHx8IHJlbW92ZWRJdGVtcywgdG9BZGRBcnJheSk7XG4gICAgICAgICAgICAgICAgbWUuZW5kVXBkYXRlKHRydWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2UucHJldmVudEJ1YmJsZVVwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRkZWRJdGVtcy5sZW5ndGggPiAwIHx8IHJlbW92ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZVtjb3VudE11dGF0aW9uc10rK1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lW3VwZGF0aW5nSW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdtdXRhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgOiB0b0FkZEFycmF5LFxuICAgICAgICAgICAgICAgIHByZXZlbnRCdWJibGVVcDogbWUucHJldmVudEJ1YmJsZVVwLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgIDogdG9SZW1vdmVBcnJheSB8fCByZW1vdmVkSXRlbXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAoIW1lW3NpbGVudFVwZGF0ZU1vZGVdKSB7XG4gICAgICAgICAgICBtZS5jYWNoZVVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5wcmV2ZW50QnViYmxlVXBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7YWRkZWRJdGVtcywgcmVtb3ZlZEl0ZW1zfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIHRoZSBjb2xsZWN0aW9uIGZyb20gZmlyaW5nIGV2ZW50cyB1bnRpbCBlbmRVcGRhdGUgZ2V0cyBjYWxsZWQuXG4gICAgICogSWYgeW91IHN0YXJ0IGFuIHVwZGF0ZSB1c2luZyB0aGUgc3RhcnRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtLFxuICAgICAqIHRoZSBtdXRhdGlvbiBldmVudCB3aWxsIG5vdCBmaXJlIGFmdGVyIHVzaW5nIGVuZFVwZGF0ZSgpXG4gICAgICogKHlvdSBtdXN0IHVzZSB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSBmb3IgdGhlIGVuZFVwZGF0ZSBjYWxsIGluIGNhc2UgeW91IHVzZWRcbiAgICAgKiBzdGFydFNpbGVudFVwZGF0ZU1vZGUgaGVyZSlcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFydFNpbGVudFVwZGF0ZU1vZGVdXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbGxlY3Rpb24uQmFzZSNlbmRVcGRhdGUgZW5kVXBkYXRlfVxuICAgICAqL1xuICAgIHN0YXJ0VXBkYXRlKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICBpZiAoc3RhcnRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzW3NpbGVudFVwZGF0ZU1vZGVdID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1t1cGRhdGluZ0luZGV4XSsrXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgaXRlbXMgY291bnRcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHVuc2hpZnQoaXRlbSkge1xuICAgICAgICB0aGlzLnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKVxuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgbXV0YXRlIGV2ZW50IGZpcmVzIGFmdGVyIGV2ZXJ5IHNwbGljZSBjYWxsIChpbnZva2VkIGJ5IGFsbCBtZXRob2RzIHdoaWNoIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgaXRlbXMgYXJyYXkpLlxuICogQGV2ZW50IG11dGF0ZVxuICogQHBhcmFtIHtPYmplY3RbXX0gYWRkZWRJdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBwcmV2ZW50QnViYmxlVXAgcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3RbXX0gcmVtb3ZlZEl0ZW1zXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKENvbGxlY3Rpb24pO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uRmlsdGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEZpbHRlciBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG9ic2VydmFibGUgPSB0cnVlXG4gICAgLyoqXG4gICAgICogVmFsaWQgdmFsdWVzIGZvciB0aGUgb3BlcmF0b3IgY29uZmlnOjxicj5cbiAgICAgKiBbJz09JywnPT09JywnIT0nLCchPT0nLCc8JywnPD0nLCc+JywnPj0nLCdlbmRzV2l0aCcsJ2V4Y2x1ZGVkJywnaW5jbHVkZWQnLCdpc0RlZmluZWQnLCdpc1VuZGVmaW5lZCcsJ2xpa2UnLCdzdGFydHNXaXRoJ11cbiAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gb3BlcmF0b3JzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb3BlcmF0b3JzID0gW1xuICAgICAgICAnPT0nLCAnPT09JywgJyE9JywgJyE9PScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnZW5kc1dpdGgnLCAnZXhjbHVkZWQnLCAnaW5jbHVkZWQnLFxuICAgICAgICAnaXNEZWZpbmVkJywgJ2lzVW5kZWZpbmVkJywgJ2xpa2UnLCAnc3RhcnRzV2l0aCdcbiAgICBdXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLkZpbHRlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uRmlsdGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZpbHRlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdmaWx0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0dGluZyBkaXNhYmxlZCB0byB0cnVlIHdpbGwgZXhjbHVkZSB0aGlzIGZpbHRlciBmcm9tIHRoZSBjb2xsZWN0aW9uIGZpbHRlcmluZyBsb2dpY1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvbiB3aGljaCBoYXMgYSBoaWdoZXIgcHJpb3JpdHkgdGhhbiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZVxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBmaWx0ZXJCeV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyQnlfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBtZWFucyBub3QgZmlsdGVyaW5nIG91dCBpdGVtcyBpbiBjYXNlIHRoZSB2YWx1ZSBpcyAnJywgbnVsbCwgW10gb3Ige31cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaW5jbHVkZUVtcHR5VmFsdWVzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGluY2x1ZGVFbXB0eVZhbHVlczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIGZsYWcgdG8gdHJ1ZSBiZWZvcmUgc3RhcnRpbmcgYnVsayB1cGRhdGVzIChlLmcuIGNoYW5naW5nIHByb3BlcnR5ICYgdmFsdWUpXG4gICAgICAgICAqIHRvIHByZXZlbnQgbXVsdGlwbGUgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1VwZGF0aW5nXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNVcGRhdGluZ186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG93bmVyIHV0aWwuQ29sbGVjdGlvbiBuZWVkcyB0byBhcHBseSBhbiBvbkNoYW5nZSBsaXN0ZW5lciBvbmNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsaXN0ZW5lckFwcGxpZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG9wZXJhdG9yIHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOlxuICAgICAgICAgKlxuICAgICAgICAgKiA9PSAobm90IHJlY29tbWVuZGVkKVxuICAgICAgICAgKiA9PT1cbiAgICAgICAgICogIT0gKG5vdCByZWNvbW1lbmRlZClcbiAgICAgICAgICogIT09XG4gICAgICAgICAqIDxcbiAgICAgICAgICogPj1cbiAgICAgICAgICogPlxuICAgICAgICAgKiA+PVxuICAgICAgICAgKiBsaWtlIChjb2xsZWN0aW9uVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpXG4gICAgICAgICAqIGluY2x1ZGVkIChleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5KVxuICAgICAgICAgKiBleGNsdWRlZCAoZXhwZWN0cyB2YWx1ZSB0byBiZSBhbiBhcnJheSlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvcGVyYXRvcj0nPT09J1xuICAgICAgICAgKi9cbiAgICAgICAgb3BlcmF0b3JfOiAnPT09JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wZXJ0eSB0byBmaWx0ZXIgYnkgKHVzZSB0aGUgY29tYmluYXRpb24gb2YgcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWUpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcHJvcGVydHlfPSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIHByb3BlcnR5XzogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzY29wZSB0byB1c2UgZm9yIHRoZSBmaWx0ZXJCeSBtZXRob2QsIGluIGNhc2UgaXQgaXMgcHJvdmlkZWQuIERlZmF1bHRzIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzY29wZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzY29wZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSB0byBmaWx0ZXIgYnkgKHVzZSB0aGUgY29tYmluYXRpb24gb2YgcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWUpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdmFsdWVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlXzogbnVsbFxuICAgIH1cblxuICAgIGFmdGVyU2V0RGlzYWJsZWQoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKVxuICAgIH1cblxuICAgIGFmdGVyU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHRvZG9cbiAgICB9XG5cbiAgICBhZnRlclNldElzVXBkYXRpbmcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHZhbHVlID09PSBmYWxzZSAmJiB0aGlzLmZpcmVDaGFuZ2VFdmVudCh2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRPcGVyYXRvciguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRWYWx1ZSguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgYmVmb3JlU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignZmlsdGVyQnkgaGFzIHRvIGJlIGEgZnVuY3Rpb24nLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgb3BlcmF0b3IgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldE9wZXJhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnb3BlcmF0b3InKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgcmVtb3RlIGZpbHRlcmluZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBleHBvcnQoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge29wZXJhdG9yLCBwcm9wZXJ0eSwgdmFsdWV9ID0gbWU7XG5cbiAgICAgICAgaWYgKCFtZS5maWx0ZXJCeSkge1xuICAgICAgICAgICAgcmV0dXJuIHtvcGVyYXRvciwgcHJvcGVydHksIHZhbHVlfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBmaXJlQ2hhbmdlRXZlbnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgbWUuaXNVcGRhdGluZyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IHtvcGVyYXRvciwgcHJvcGVydHksIHZhbHVlfSA9IG1lO1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge29wZXJhdG9yLCBwcm9wZXJ0eSwgdmFsdWV9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGEgY29sbGVjdGlvbiBpdGVtIG1hdGNoZXMgdGhpcyBmaWx0ZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBmaWx0ZXJlZEl0ZW1zIElmIHRoZSBjb2xsZWN0aW9uIGZpbHRlck1vZGUgaXMgbm90IHByaW1pdGl2ZSBjb250YWlucyB0aGUgaXRlbXMgd2hpY2ggcGFzc2VkXG4gICAgICogdGhlIHByZXZpb3VzIGZpbHRlcnMsIG90aGVyd2lzZSBhbGwgY29sbGVjdGlvbiBpdGVtc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFsbEl0ZW1zIGFsbCBjb2xsZWN0aW9uIGl0ZW1zXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGaWx0ZXJlZChpdGVtLCBmaWx0ZXJlZEl0ZW1zLCBhbGxJdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVyVmFsdWUsIHJlY29yZFZhbHVlO1xuXG4gICAgICAgIGlmIChtZS5fZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLl9maWx0ZXJCeSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lLmZpbHRlckJ5LmNhbGwobWUuc2NvcGUgfHwgbWUsIHtcbiAgICAgICAgICAgICAgICBhbGxJdGVtcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLFxuICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IG1lLl92YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5pbmNsdWRlRW1wdHlWYWx1ZXMgJiYgKG1lLl92YWx1ZSA9PT0gbnVsbCB8fCBOZW8uaXNFbXB0eShtZS5fdmFsdWUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJWYWx1ZSA9IG1lLl92YWx1ZTtcbiAgICAgICAgcmVjb3JkVmFsdWUgPSBpdGVtW21lLl9wcm9wZXJ0eV07XG5cbiAgICAgICAgaWYgKGZpbHRlclZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiByZWNvcmRWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWUudmFsdWVPZigpO1xuICAgICAgICAgICAgcmVjb3JkVmFsdWUgPSByZWNvcmRWYWx1ZS52YWx1ZU9mKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhRmlsdGVyW21lLl9vcGVyYXRvcl0ocmVjb3JkVmFsdWUsIGZpbHRlclZhbHVlKVxuICAgIH1cblxuICAgIHN0YXRpYyBbJz09J10gKGEsIGIpIHtyZXR1cm4gYSA9PSBifVxuICAgIHN0YXRpYyBbJz09PSddKGEsIGIpIHtyZXR1cm4gYSA9PT0gYn1cbiAgICBzdGF0aWMgWychPSddIChhLCBiKSB7cmV0dXJuIGEgIT0gYn1cbiAgICBzdGF0aWMgWychPT0nXShhLCBiKSB7cmV0dXJuIGEgIT09IGJ9XG4gICAgc3RhdGljIFsnPCddICAoYSwgYikge3JldHVybiBhIDwgYn1cbiAgICBzdGF0aWMgWyc8PSddIChhLCBiKSB7cmV0dXJuIGEgPD0gYn1cbiAgICBzdGF0aWMgWyc+J10gIChhLCBiKSB7cmV0dXJuIGEgPiBifVxuICAgIHN0YXRpYyBbJz49J10gKGEsIGIpIHtyZXR1cm4gYSA+PSBifVxuXG4gICAgc3RhdGljIFsnZW5kc1dpdGgnXShhLCBiKSB7XG4gICAgICAgIGlmICghTmVvLmlzU3RyaW5nKGEpKSB7YSA9IFN0cmluZyhhKX1cbiAgICAgICAgaWYgKCFOZW8uaXNTdHJpbmcoYikpIHtiID0gU3RyaW5nKGIpfVxuXG4gICAgICAgIHJldHVybiBhPy50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKGI/LnRvTG93ZXJDYXNlKCkpIHx8IGZhbHNlXG4gICAgfVxuXG4gICAgc3RhdGljIFsnZXhjbHVkZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPCAwXG4gICAgfVxuXG4gICAgc3RhdGljIFsnaW5jbHVkZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPiAtMVxuICAgIH1cblxuICAgIHN0YXRpYyBbJ2lzRGVmaW5lZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT09IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHN0YXRpYyBbJ2lzVW5kZWZpbmVkJ10oYSwgYikge1xuICAgICAgICByZXR1cm4gYSA9PT0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgc3RhdGljIFsnbGlrZSddKGEsIGIpIHtcbiAgICAgICAgaWYgKCFOZW8uaXNTdHJpbmcoYSkpIHthID0gU3RyaW5nKGEpfVxuICAgICAgICBpZiAoIU5lby5pc1N0cmluZyhiKSkge2IgPSBTdHJpbmcoYil9XG5cbiAgICAgICAgcmV0dXJuIGE/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYj8udG9Mb3dlckNhc2UoKSkgfHwgZmFsc2VcbiAgICB9XG5cbiAgICBzdGF0aWMgWydzdGFydHNXaXRoJ10oYSwgYikge1xuICAgICAgICBpZiAoIU5lby5pc1N0cmluZyhhKSkge2EgPSBTdHJpbmcoYSl9XG4gICAgICAgIGlmICghTmVvLmlzU3RyaW5nKGIpKSB7YiA9IFN0cmluZyhiKX1cblxuICAgICAgICByZXR1cm4gYT8udG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGI/LnRvTG93ZXJDYXNlKCkpIHx8IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhGaWx0ZXIpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uU29ydGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFNvcnRlciBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG9ic2VydmFibGUgPSB0cnVlXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb2xsZWN0aW9uLlNvcnRlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uU29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NvcnRlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzb3J0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgY29uZmlnIHdoaWNoIG1hcHMgdGhlIGRpcmVjdGlvbiBBU0MgdG8gMSwgLTEgb3RoZXJ3aXNlXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGlyZWN0aW9uTXVsdGlwbGllcj0xXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbk11bHRpcGxpZXI6IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc29ydCBkaXJlY3Rpb24gd2hlbiB1c2luZyBhIHByb3BlcnR5LlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbl89J0FTQydcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbl86ICdBU0MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG93bmVyIHV0aWwuQ29sbGVjdGlvbiBuZWVkcyB0byBhcHBseSBhbiBvbkNoYW5nZSBsaXN0ZW5lciBvbmNlXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsaXN0ZW5lckFwcGxpZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BlcnR5IHRvIHNvcnQgYnkuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcHJvcGVydHlfPSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIHByb3BlcnR5XzogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb3ZpZGUgYSBjdXN0b20gc29ydGluZyBmdW5jdGlvbiwgaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHkgJiBkaXJlY3Rpb25cbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258bnVsbH0gc29ydEJ5PW51bGxcbiAgICAgICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9Db2xsYXRvclxuICAgICAgICAgKi9cbiAgICAgICAgc29ydEJ5OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byB1c2UgdGhlIHRyYW5zZm9ybVZhbHVlIG1ldGhvZCBmb3IgZWFjaCBpdGVtICh0aGUgbWV0aG9kIGNhbiBnZXQgb3ZlcnJpZGRlbilcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlVHJhbnNmb3JtVmFsdWU9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB1c2VUcmFuc2Zvcm1WYWx1ZTogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0RGlyZWN0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmRpcmVjdGlvbk11bHRpcGxpZXIgPSB2YWx1ZSA9PT0gJ0FTQycgPyAxIDogLTE7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBtZS5kaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgOiBtZS5wcm9wZXJ0eVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldFByb3BlcnR5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbWUuZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5IDogbWUucHJvcGVydHlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBzb3J0ZXIgZnVuY3Rpb24gd2hpY2ggZ2V0cyB1c2VkIGJ5IGNvbGxlY3Rpb25zIGluIGNhc2UgYXQgbGVhc3Qgb25lIHNvcnRlciBoYXMgYSByZWFsIHNvcnRCeSBtZXRob2RcbiAgICAgKiBAcGFyYW0gYVxuICAgICAqIEBwYXJhbSBiXG4gICAgICovXG4gICAgZGVmYXVsdFNvcnRCeShhLCBiKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgYSA9IGFbbWUucHJvcGVydHldO1xuICAgICAgICBiID0gYlttZS5wcm9wZXJ0eV07XG5cbiAgICAgICAgaWYgKG1lLnVzZVRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICBhID0gbWUudHJhbnNmb3JtVmFsdWUoYSk7XG4gICAgICAgICAgICBiID0gbWUudHJhbnNmb3JtVmFsdWUoYik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAxICogbWUuZGlyZWN0aW9uTXVsdGlwbGllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhIDwgYikge1xuICAgICAgICAgICAgcmV0dXJuIC0xICogbWUuZGlyZWN0aW9uTXVsdGlwbGllcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgcmVtb3RlIHNvcnRpbmdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgZXhwb3J0KCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtkaXJlY3Rpb24sIHByb3BlcnR5fSA9IG1lO1xuXG4gICAgICAgIGlmICghbWUuc29ydEJ5ICYmIGRpcmVjdGlvbiAmJiBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHtkaXJlY3Rpb24sIHByb3BlcnR5fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMgeyp9IHZhbHVlXG4gICAgICovXG4gICAgdHJhbnNmb3JtVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhTb3J0ZXIpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udHJvbGxlci5BcHBsaWNhdGlvblxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQmFzZVxuICovXG5jbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG9ic2VydmFibGUgPSB0cnVlXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250cm9sbGVyLkFwcGxpY2F0aW9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udHJvbGxlci5BcHBsaWNhdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdhcHBsaWNhdGlvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdhcHBsaWNhdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYXBwVGhlbWVGb2xkZXI9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYXBwVGhlbWVGb2xkZXI6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkJhc2V9IG1haW5WaWV3Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYWluVmlld186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3VudGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vdW50ZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBuYW1lPSdNeUFwcCdcbiAgICAgICAgICovXG4gICAgICAgIG5hbWU6ICdNeUFwcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHBhcmVudElkPSdkb2N1bWVudC5ib2R5J1xuICAgICAgICAgKi9cbiAgICAgICAgcGFyZW50SWQ6ICdkb2N1bWVudC5ib2R5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbmRlcmVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbmRlcmluZz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJpbmc6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHdpbmRvd0lkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHdpbmRvd0lkOiBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgLy8gdG8gZ3VhcmFudGVlIHRoYXQgdGhlIG1haW4gdmlldyBjYW4gYWNjZXNzIE5lby5hcHBzIGF0IGFueSBwb2ludCxcbiAgICAgICAgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIGl0cyBhc3NpZ25tZW50IGF0IHRoZSBlbmQgb2YgdGhlIGN0b3IuXG4gICAgICAgIGxldCBtYWluVmlldyA9IGNvbmZpZy5tYWluVmlldztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5tYWluVmlldztcblxuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLndpbmRvd0lkID0gTmVvLmNvbmZpZy53aW5kb3dJZDtcblxuICAgICAgICBOZW8uYXBwcyA9IE5lby5hcHBzIHx8IHt9O1xuXG4gICAgICAgIE5lby5hcHBzW21lLm5hbWVdID0gbWU7XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucmVnaXN0ZXJBcHAobWUubmFtZSk7XG5cbiAgICAgICAgaWYgKG1haW5WaWV3KSB7XG4gICAgICAgICAgICBtZS5tYWluVmlldyA9IG1haW5WaWV3XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1haW5WaWV3IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFzeW5jIGFmdGVyU2V0TWFpblZpZXcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgLy8gc2hvcnQgZGVsYXkgdG8gZW5zdXJlIGNoYW5nZXMgZnJvbSBvbkhhc2hDaGFuZ2UoKSBnb3QgYXBwbGllZFxuICAgICAgICAgICAgYXdhaXQgbWUudGltZW91dChOZW8uY29uZmlnLmhhc2ggPyAyMDAgOiAxMCk7XG5cbiAgICAgICAgICAgIGF3YWl0IHZhbHVlLnJlbmRlcih0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgbWFpblZpZXcgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldE1haW5WaWV3KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIG51bGwsIHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lIDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIHBhcmVudElkOiB0aGlzLnBhcmVudElkLFxuICAgICAgICAgICAgICAgIHdpbmRvd0lkOiBOZW8uY29uZmlnLndpbmRvd0lkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVyIHRoZSBhcHAgZnJvbSB0aGUgQ1NTIG1hcFxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnJlbW92ZUFwcEZyb21UaGVtZU1hcCh0aGlzLm5hbWUpO1xuICAgICAgICBzdXBlci5kZXN0cm95KC4uLmFyZ3MpXG4gICAgfVxufVxuXG5BcHBsaWNhdGlvbiA9IE5lby5zZXR1cENsYXNzKEFwcGxpY2F0aW9uKTtcblxuLy8gY29udmVuaWVuY2Ugc2hvcnRjdXRcbk5lby5hcHAgPSBjb25maWcgPT4gTmVvLmNyZWF0ZSh7XG4gICAgbW9kdWxlOiBBcHBsaWNhdGlvbixcbiAgICAuLi5jb25maWdcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbjtcbiIsImltcG9ydCBCYXNlICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBIYXNoSGlzdG9yeSBmcm9tICcuLi91dGlsL0hhc2hIaXN0b3J5Lm1qcyc7XG5cbmNvbnN0XG4gICAgYW1vdW50U2xhc2hlc1JlZ2V4ID0gL1xcLy9nLFxuICAgIHJvdXRlUGFyYW1SZWdleCAgICA9IC97W15cXHMvXSt9L2dcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRyb2xsZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udHJvbGxlci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udHJvbGxlci5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgVVJMIGRvZXMgbm90IGNvbnRhaW4gYSBoYXNoIHZhbHVlIHdoZW4gY3JlYXRpbmcgdGhpcyBjb250cm9sbGVyIGluc3RhbmNlLFxuICAgICAgICAgKiBuZW8gd2lsbCBzZXQgdGhpcyBoYXNoIHZhbHVlIGZvciB1cy5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRlZmF1bHRIYXNoPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRIYXNoOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRlZmF1bHRSb3V0ZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0Um91dGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGhhbmRsZVJvdXRlcz17fVxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlUm91dGVzOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIHJvdXRlczoge1xuICAgICAgICAgKiAgICAgJy9ob21lJyAgICAgICAgICAgICAgICAgICAgICAgICA6ICdoYW5kbGVIb21lUm91dGUnLFxuICAgICAgICAgKiAgICAgJy91c2Vycy97dXNlcklkfScgICAgICAgICAgICAgICA6IHtoYW5kbGVyOiAnaGFuZGxlVXNlclJvdXRlJywgcHJlSGFuZGxlcjogJ3ByZUhhbmRsZVVzZXJSb3V0ZSd9LFxuICAgICAgICAgKiAgICAgJy91c2Vycy97dXNlcklkfS9wb3N0cy97cG9zdElkfSc6ICdoYW5kbGVQb3N0Um91dGUnLFxuICAgICAgICAgKiAgICAgJ2RlZmF1bHQnICAgICAgICAgICAgICAgICAgICAgICA6ICdoYW5kbGVPdGhlclJvdXRlcydcbiAgICAgICAgICogfVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJvdXRlc189e31cbiAgICAgICAgICovXG4gICAgICAgIHJvdXRlc186IHt9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgSGFzaEhpc3Rvcnkub24oJ2NoYW5nZScsIHRoaXMub25IYXNoQ2hhbmdlLCB0aGlzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcm91dGVzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJvdXRlcyh2YWx1ZSwgb2xkVmFsdWUpe1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJvdXRlS2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgICAgICAgbWUucm91dGVzID0gcm91dGVLZXlzLnNvcnQobWUuI3NvcnRSb3V0ZXMpLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgfSwge30pO1xuXG4gICAgICAgIG1lLmhhbmRsZVJvdXRlcyA9IHt9O1xuXG4gICAgICAgIHJvdXRlS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5LnRvTG93ZXJDYXNlKCkgPT09ICdkZWZhdWx0Jyl7XG4gICAgICAgICAgICAgICAgbWUuZGVmYXVsdFJvdXRlID0gdmFsdWVba2V5XVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5oYW5kbGVSb3V0ZXNba2V5XSA9IG5ldyBSZWdFeHAoa2V5LnJlcGxhY2Uocm91dGVQYXJhbVJlZ2V4LCAnKFtcXFxcdy0uXSspJykrJyQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgZGVzdHJveSguLi5hcmdzKSB7XG4gICAgICAgIEhhc2hIaXN0b3J5LnVuKCdjaGFuZ2UnLCB0aGlzLm9uSGFzaENoYW5nZSwgdGhpcyk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSguLi5hcmdzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYXN5bmMgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtkZWZhdWx0SGFzaCwgd2luZG93SWR9ID0gbWUsXG4gICAgICAgICAgICBjdXJyZW50SGFzaCAgICAgICAgICAgICA9IEhhc2hIaXN0b3J5LmZpcnN0KHdpbmRvd0lkKTtcblxuICAgICAgICAvLyBnZXQgb3V0c2lkZSB0aGUgY29uc3RydWN0aW9uIGNoYWluID0+IGEgcmVsYXRlZCBjbXAgJiB2bSBoYXMgdG8gYmUgY29uc3RydWN0ZWQgdG9vXG4gICAgICAgIGF3YWl0IG1lLnRpbWVvdXQoMSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRIYXNoKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEhhc2gud2luZG93SWQgPT09IHdpbmRvd0lkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgbWUub25IYXNoQ2hhbmdlKGN1cnJlbnRIYXNoLCBudWxsKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIHdvcmtlci5BcHA6IG9uTG9hZEFwcGxpY2F0aW9uKCkgd2lsbCBwdXNoIGNvbmZpZy5oYXNoIGludG8gdGhlIEhhc2hIaXN0b3J5IHdpdGggYSA1bXMgZGVsYXkuXG4gICAgICAgICAgICAgKiBXZSBvbmx5IHdhbnQgdG8gc2V0IGEgZGVmYXVsdCByb3V0ZSwgaW4gY2FzZSB0aGUgSGFzaEhpc3RvcnkgaXMgZW1wdHkgYW5kIHRoZXJlIGlzIG5vIGluaXRpYWxcbiAgICAgICAgICAgICAqIHZhbHVlIHRoYXQgd2lsbCBnZXQgY29uc3VtZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICFOZW8uY29uZmlnLmhhc2ggJiYgZGVmYXVsdEhhc2ggJiYgTmVvLk1haW4uc2V0Um91dGUoe3ZhbHVlOiBkZWZhdWx0SGFzaCwgd2luZG93SWR9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIHdoaWNoIGdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGhhc2ggaW5zaWRlIHRoZSBicm93c2VyIHVybCBjaGFuZ2VzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYXN5bmMgb25IYXNoQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gdHJpZ2dlciBoYXNoIGNoYW5nZXMgZm9yIHRoZSBzYW1lIGJyb3dzZXIgd2luZG93IChTaGFyZWRXb3JrZXIgY29udGV4dClcbiAgICAgICAgaWYgKHZhbHVlLndpbmRvd0lkICE9PSB0aGlzLndpbmRvd0lkKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvdW50ZXIgICAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgaGFzUm91dGVCZWVuRm91bmQgICAgICA9IGZhbHNlLFxuICAgICAgICAgICAge2hhbmRsZVJvdXRlcywgcm91dGVzfSA9IG1lLFxuICAgICAgICAgICAgcm91dGVLZXlzICAgICAgICAgICAgICA9IE9iamVjdC5rZXlzKGhhbmRsZVJvdXRlcyksXG4gICAgICAgICAgICByb3V0ZUtleXNMZW5ndGggICAgICAgID0gcm91dGVLZXlzLmxlbmd0aCxcbiAgICAgICAgICAgIGFycmF5UGFyYW1JZHMsIGFycmF5UGFyYW1WYWx1ZXMsIGhhbmRsZXIsIGtleSwgcGFyYW1PYmplY3QsIHByZUhhbmRsZXIsIHJlc3BvbnNlUHJlSGFuZGxlciwgcmVzdWx0LCByb3V0ZTtcblxuICAgICAgICB3aGlsZSAocm91dGVLZXlzTGVuZ3RoID4gMCAmJiBjb3VudGVyIDwgcm91dGVLZXlzTGVuZ3RoICYmICFoYXNSb3V0ZUJlZW5Gb3VuZCkge1xuICAgICAgICAgICAga2V5ICAgICAgICAgICAgICAgID0gcm91dGVLZXlzW2NvdW50ZXJdO1xuICAgICAgICAgICAgaGFuZGxlciAgICAgICAgICAgID0gbnVsbDtcbiAgICAgICAgICAgIHByZUhhbmRsZXIgICAgICAgICA9IG51bGw7XG4gICAgICAgICAgICByZXNwb25zZVByZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICAgICAgcGFyYW1PYmplY3QgICAgICAgID0ge307XG4gICAgICAgICAgICByZXN1bHQgICAgICAgICAgICAgPSB2YWx1ZS5oYXNoU3RyaW5nLm1hdGNoKGhhbmRsZVJvdXRlc1trZXldKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGFycmF5UGFyYW1JZHMgICAgPSBrZXkubWF0Y2gocm91dGVQYXJhbVJlZ2V4KTtcbiAgICAgICAgICAgICAgICBhcnJheVBhcmFtVmFsdWVzID0gcmVzdWx0LnNwbGljZSgxLCByZXN1bHQubGVuZ3RoIC0gMSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlQYXJhbUlkcyAmJiBhcnJheVBhcmFtSWRzLmxlbmd0aCAhPT0gYXJyYXlQYXJhbVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ051bWJlciBvZiBJRHMgYW5kIG51bWJlciBvZiBWYWx1ZXMgZG8gbm90IG1hdGNoJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBhcnJheVBhcmFtSWRzICYmIGkgPCBhcnJheVBhcmFtSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtT2JqZWN0W2FycmF5UGFyYW1JZHNbaV0uc3Vic3RyaW5nKDEsIGFycmF5UGFyYW1JZHNbaV0ubGVuZ3RoIC0gMSldID0gYXJyYXlQYXJhbVZhbHVlc1tpXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGVzW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICAgICAgICAgICAgPSByb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VQcmVIYW5kbGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KHJvdXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICAgID0gcm91dGUuaGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgcHJlSGFuZGxlciA9IHJvdXRlLnByZUhhbmRsZXJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoYXNSb3V0ZUJlZW5Gb3VuZCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBleGVjdXRlXG4gICAgICAgIGlmIChoYXNSb3V0ZUJlZW5Gb3VuZCkge1xuICAgICAgICAgICAgaWYgKHByZUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVByZUhhbmRsZXIgPSBhd2FpdCBtZVtwcmVIYW5kbGVyXT8uY2FsbChtZSwgcGFyYW1PYmplY3QsIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VQcmVIYW5kbGVyID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VQcmVIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgbWVbaGFuZGxlcl0/LmNhbGwobWUsIHBhcmFtT2JqZWN0LCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm91dGVLZXlzLmxlbmd0aCA+IDAgJiYgIWhhc1JvdXRlQmVlbkZvdW5kKSB7XG4gICAgICAgICAgICBpZiAobWUuZGVmYXVsdFJvdXRlKSB7XG4gICAgICAgICAgICAgICAgbWVbbWUuZGVmYXVsdFJvdXRlXT8uKHZhbHVlLCBvbGRWYWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUub25Ob1JvdXRlRm91bmQodmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIHdoaWNoIGdldHMgdHJpZ2dlcmVkIHdoZW4gYW4gaW52YWxpZCByb3V0ZSBpcyBjYWxsZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvbk5vUm91dGVGb3VuZCh2YWx1ZSwgb2xkVmFsdWUpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGhlbHBlciBtZXRob2QgdG8gc29ydCByb3V0ZXMgYnkgdGhlaXIgYW1vdW50IG9mIHNsYXNoZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcm91dGUxXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJvdXRlMlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgI3NvcnRSb3V0ZXMocm91dGUxLCByb3V0ZTIpIHtcbiAgICAgICAgcmV0dXJuIChyb3V0ZTEubWF0Y2goYW1vdW50U2xhc2hlc1JlZ2V4KSB8fCBbXSkubGVuZ3RoIC0gKHJvdXRlMi5tYXRjaChhbW91bnRTbGFzaGVzUmVnZXgpfHwgW10pLmxlbmd0aFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoQ29udHJvbGxlcik7XG4iLCJpbXBvcnQge2J1ZmZlciwgZGVib3VuY2UsIGludGVyY2VwdCwgcmVzb2x2ZUNhbGxiYWNrLCB0aHJvdHRsZX0gZnJvbSAnLi4vdXRpbC9GdW5jdGlvbi5tanMnO1xuaW1wb3J0IElkR2VuZXJhdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJ1xuXG5jb25zdCBjb25maWdTeW1ib2wgICAgICAgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGZvcmNlQXNzaWduQ29uZmlncyA9IFN5bWJvbCgnZm9yY2VBc3NpZ25Db25maWdzJyksXG4gICAgICBpc0luc3RhbmNlICAgICAgICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgKGFsbW9zdCkgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBFeGNlcHRpb25zIGFyZSBlLmcuIGNvcmUuSWRHZW5lcmF0b3IsIHZkb20uVk5vZGVcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gZGVmaW5lIG1ldGhvZHMgd2hpY2ggc2hvdWxkIGdldCBkZWxheWVkLlxuICAgICAqIFR5cGVzIGFyZSBidWZmZXIsIGRlYm91bmNlICYgdGhyb3R0bGUuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgZGVsYXlhYmxlOiB7XG4gICAgICogICAgICBmaXJlQ2hhbmdlRXZlbnQ6IHtcbiAgICAgKiAgICAgICAgICB0eXBlIDogJ2RlYm91bmNlJyxcbiAgICAgKiAgICAgICAgICB0aW1lcjogMzAwXG4gICAgICogICAgICB9XG4gICAgICogIH1cbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGRlbGF5YWJsZT17fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGRlbGF5YWJsZSA9IHt9XG4gICAgLyoqXG4gICAgICogRmxhZyB3aGljaCB3aWxsIGdldCBzZXQgdG8gdHJ1ZSBvbmNlIG1hbmFnZXIuSW5zdGFuY2UgZ290IGNyZWF0ZWRcbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpbnN0YW5jZU1hbmFnZXJBdmFpbGFibGU9ZmFsc2VcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogUmVnZXggdG8gZ3JhYiB0aGUgTWV0aG9kTmFtZSBmcm9tIGFuIGVycm9yXG4gICAgICogd2hpY2ggaXMgYSBzZWNvbmQgZ2VuZXJhdGlvbiBmdW5jdGlvblxuICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gbWV0aG9kTmFtZVJlZ2V4XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBtZXRob2ROYW1lUmVnZXggPSAvXFxuLipcXG5cXHMrYXRcXHMrLipcXC4oXFx3KylcXHMrLiovXG4gICAgLyoqXG4gICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUuT2JzZXJ2YWJsZSBtaXhpblxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9ZmFsc2VcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG9ic2VydmFibGUgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIEtlZXAgdGhlIG92ZXJ3cml0dGVuIG1ldGhvZHNcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG92ZXJ3cml0dGVuTWV0aG9kcz17fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG92ZXJ3cml0dGVuTWV0aG9kcyA9IHt9XG4gICAgLyoqXG4gICAgICogQ29uZmlncyB3aWxsIGdldCBtZXJnZWQgdGhyb3VnaG91dCB0aGUgY2xhc3MgaGllcmFyY2h5XG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIHdoaWNoIHdpbGwgZ2V0IG1hcHBlZCBpbnRvIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3Mgc2hvcnRjdXQtbmFtZSB0byB1c2UgZm9yIGUuZy4gY3JlYXRpbmcgY2hpbGQgY29tcG9uZW50cyBpbnNpZGUgYSBKU09OLWZvcm1hdFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2Jhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2hpbGUgaXQgaXMgcmVjb21tZW5kZWQgdG8gY2hhbmdlIHRoZSBzdGF0aWMgZGVsYXlhYmxlIGNvbmZpZ3Mgb24gY2xhc3MgbGV2ZWwsXG4gICAgICAgICAqIHlvdSBjYW4gY2hhbmdlIGl0IG9uIGluc3RhbmNlIGxldmVsIHRvby4gSWYgbm90IG51bGwsIHdlIHdpbGwgZG8gYSBkZWVwIG1lcmdlLlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGRlbGF5YWJsZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkZWxheWFibGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIGNvbXBvbmVudCBpZFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGlkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lby5jcmVhdGUoKSB3aWxsIGNoYW5nZSB0aGlzIGZsYWcgdG8gdHJ1ZSBhZnRlciB0aGUgb25Db25zdHJ1Y3RlZCgpIGNoYWluIGlzIGRvbmUuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzQ29uc3RydWN0ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb25zdHJ1Y3RlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogWW91IGNhbiBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYnkgcGFzc2luZyBhbiBpbXBvcnRlZCBjbGFzcyAoSlMgbW9kdWxlIGRlZmF1bHQgZXhwb3J0KVxuICAgICAgICAgKiBAbWVtYmVyIHtDbGFzc30gbW9kdWxlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kdWxlOiBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgY2FjaGUgZm9yIGFsbCB0aW1lb3V0IGlkcyB3aGVuIHVzaW5nIHRoaXMudGltZW91dCgpXG4gICAgICogQG1lbWJlciB7TnVtYmVyW119IHRpbWVvdXRJZHM9W11cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgICN0aW1lb3V0SWRzID0gW11cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIG9ic2VydmFibGUgbWl4aW4gaWYgbmVlZGVkLCBncmFudHMgcmVtb3RlIGFjY2VzcyBpZiBuZWVkZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZz17fVxuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWc9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvbmZpZ1N5bWJvbF06IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICA6IHt9LFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtpc0luc3RhbmNlXToge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuY3JlYXRlSWQoY29uZmlnLmlkIHx8IG1lLmlkKTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICBpZiAobWUuY29uc3RydWN0b3IuY29uZmlnKSB7XG4gICAgICAgICAgICBkZWxldGUgbWUuY29uc3RydWN0b3IuY29uZmlnLmlkXG4gICAgICAgIH1cblxuICAgICAgICBtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSAmJiBtZS5pbml0T2JzZXJ2YWJsZShjb25maWcpO1xuXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzcyBmaWVsZCB2YWx1ZXMgcHJpb3IgdG8gY29uZmlnc1xuICAgICAgICBjb25maWcgPSBtZS5zZXRGaWVsZHMoY29uZmlnKTtcblxuICAgICAgICBtZS5pbml0Q29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnY29uZmlnc0FwcGxpZWQnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuYXBwbHlEZWxheWFibGUoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgKiBXZSBkbyBub3Qgd2FudCB0byBmb3JjZSBkZXZzIHRvIGNoZWNrIGZvciB0aGUgYGlzRGVzdHJveWVkYCBmbGFnIGluIGV2ZXJ5IHBvc3NpYmxlIGNsYXNzIGV4dGVuc2lvbi5cbiAgICAgICAgICogU28sIHdlIGFyZSBpbnRlcmNlcHRpbmcgdGhlIHRvcC1tb3N0IGBkZXN0cm95KClgIGNhbGwgdG8gY2hlY2sgZm9yIHRoZSBmbGFnIHRoZXJlLlxuICAgICAgICAgKiBSYXRpb25hbGU6IGBkZXN0cm95KClgIG11c3Qgb25seSBnZXQgY2FsbGVkIG9uY2UuXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcmNlcHQobWUsICdkZXN0cm95JywgbWUuaXNEZXN0cm95ZWRDaGVjaywgbWUpO1xuXG4gICAgICAgIG1lLnJlbW90ZSAmJiBzZXRUaW1lb3V0KG1lLmluaXRSZW1vdGUuYmluZChtZSksIDEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpZCBjb25maWcgZ290IGNoYW5nZWQuXG4gICAgICogWW91IGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgaW5zdGFuY2UgaWRzIGlmIG5lZWRlZC4gVGhleSBuZWVkIHRvIHN0YXkgdW5pcXVlIGF0IGFueSBnaXZlbiBwb2ludC5cbiAgICAgKiBVc2UgY2FzZTogZS5nLiBjb21wb25lbnQgYmFzZWQgbGlzdHMsIHdoZXJlIHlvdSB3YW50IHRvIHJlLXVzZSBpdGVtIGluc3RhbmNlcy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhhc01hbmFnZXIgPSBCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChoYXNNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihvbGRWYWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFtvbGRWYWx1ZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGhhc01hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS5yZWdpc3RlcihtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5lby5pZE1hcCA9IE5lby5pZE1hcCB8fCB7fTtcbiAgICAgICAgICAgICAgICBOZW8uaWRNYXBbbWUuaWRdID0gbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkanVzdHMgYWxsIG1ldGhvZHMgaW5zaWRlIHN0YXRpYyBkZWxheWFibGVcbiAgICAgKi9cbiAgICBhcHBseURlbGF5YWJsZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3RvckRlbGF5YWJsZSA9IG1lLmNvbnN0cnVjdG9yLmRlbGF5YWJsZSxcbiAgICAgICAgICAgIGRlbGF5YWJsZSAgICAgPSBtZS5kZWxheWFibGUgPyBOZW8ubWVyZ2Uoe30sIG1lLmRlbGF5YWJsZSwgY3RvckRlbGF5YWJsZSkgOiBjdG9yRGVsYXlhYmxlO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRlbGF5YWJsZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWFwID0ge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIoKSAgIHttZVtrZXldID0gbmV3IGJ1ZmZlcihtZVtrZXldLCAgIG1lLCB2YWx1ZS50aW1lcil9LFxuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZSgpIHttZVtrZXldID0gbmV3IGRlYm91bmNlKG1lW2tleV0sIG1lLCB2YWx1ZS50aW1lcil9LFxuICAgICAgICAgICAgICAgICAgICB0aHJvdHRsZSgpIHttZVtrZXldID0gbmV3IHRocm90dGxlKG1lW2tleV0sIG1lLCB2YWx1ZS50aW1lcil9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG1hcFt2YWx1ZS50eXBlXT8uKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseWluZyBvdmVyd3JpdGVzIGFuZCBhZGRpbmcgb3ZlcndyaXR0ZW5NZXRob2RzIHRvIHRoZSBjbGFzcyBjb25zdHJ1Y3RvcnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBhcHBseU92ZXJ3cml0ZXMoY2ZnKSB7XG4gICAgICAgIGxldCBvdmVyd3JpdGVzID0gTmVvLm5zKGNmZy5jbGFzc05hbWUsIGZhbHNlLCBOZW8ub3ZlcndyaXRlcyksXG4gICAgICAgICAgICBjbHMsIGl0ZW07XG5cbiAgICAgICAgaWYgKG92ZXJ3cml0ZXMpIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IGFsbCBtZXRob2RzXG4gICAgICAgICAgICBmb3IgKGl0ZW0gaW4gb3ZlcndyaXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNGdW5jdGlvbihvdmVyd3JpdGVzW2l0ZW1dKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbHJlYWR5IGV4aXN0aW5nIG9uZXNcbiAgICAgICAgICAgICAgICAgICAgY2xzID0gdGhpcy5wcm90b3R5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsc1tpdGVtXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIG92ZXJ3cml0dGVuTWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzLmNvbnN0cnVjdG9yLm92ZXJ3cml0dGVuTWV0aG9kc1tpdGVtXSA9IGNsc1tpdGVtXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBjb25maWdzIHRvIHByb3RvdHlwZVxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjZmcsIG92ZXJ3cml0ZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGJlZm9yZVNldCBmdW5jdGlvbnMgd2hpY2ggdGVzdCBpZiBhIGdpdmVuIHZhbHVlIGlzIGluc2lkZSBhIHN0YXRpYyBhcnJheVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgY29uZmlnIG5hbWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gW3N0YXRpY05hbWU9bmFtZSArICdzJ10gbmFtZSBvZiB0aGUgc3RhdGljIGNvbmZpZyBhcnJheVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZSBvciBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIG5hbWUsIHN0YXRpY05hbWUgPSBuYW1lICsgJ3MnKSB7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHN0YXRpY05hbWUpID8gc3RhdGljTmFtZSA6IHRoaXMuZ2V0U3RhdGljQ29uZmlnKHN0YXRpY05hbWUpO1xuXG4gICAgICAgIGlmICghdmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU3VwcG9ydGVkIHZhbHVlcyBmb3IgJHtuYW1lfSBhcmU6YCwgLi4udmFsdWVzLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZuICAgICAgICAgICAgICAgVGhlIG5hbWUgb2YgYSBmdW5jdGlvbiB0byBmaW5kIGluIHRoZSBwYXNzZWQgc2NvcGUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcmlnaW5OYW1lICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2QgaW5zaWRlIHRoZSBvcmlnaW5TY29wZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGUgICAgICAgICAgICBUaGUgc2NvcGUgdG8gZmluZCB0aGUgZnVuY3Rpb24gaW4gaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcmlnaW5TY29wZT10aGlzIFRoZSBzY29wZSB3aGVyZSB0aGUgZnVuY3Rpb24gaXMgbG9jYXRlZC5cbiAgICAgKi9cbiAgICBiaW5kQ2FsbGJhY2soZm4sIG9yaWdpbk5hbWUsIHNjb3BlPXRoaXMsIG9yaWdpblNjb3BlPXRoaXMpIHtcbiAgICAgICAgaWYgKGZuICYmIE5lby5pc1N0cmluZyhmbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSByZXNvbHZlQ2FsbGJhY2soZm4sIHNjb3BlKTtcbiAgICAgICAgICAgIG9yaWdpblNjb3BlW29yaWdpbk5hbWVdID0gaGFuZGxlci5mbi5iaW5kKGhhbmRsZXIuc2NvcGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGcm9tIHdpdGhpbiBhbiBvdmVyd3JpdGUsIGEgbWV0aG9kIGNhbiBjYWxsIGEgcGFyZW50IG1ldGhvZCwgYnkgdXNpbmcgY2FsbE92ZXJ3cml0dGVuLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAgICBhZnRlclNldEhlaWdodCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgKiAgICAgICAgLy8gZG8gdGhlIHN0YW5kYXJkXG4gICAgICogICAgICAgIHRoaXMuY2FsbE92ZXJ3cml0dGVuKC4uLmFyZ3VtZW50cyk7XG4gICAgICogICAgICAgIC8vIGRvIHlvdSBvd24gc3R1ZmZcbiAgICAgKiAgICB9XG4gICAgICpcbiAgICAgKiBXZSBjcmVhdGUgYW4gZXJyb3IgdG8gZ2V0IHRoZSBjYWxsZXIubmFtZSBhbmQgdGhlbiBydW4gdGhhdCBtZXRob2Qgb24gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAqIFRoaXMgaXMgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBlcnJvciBzdHJ1Y3R1cmUsIGUuZy4gYWZ0ZXJTZXRIZWlnaHQuXG4gICAgICpcbiAgICAgKiAgICAgRXJyb3JcbiAgICAgKiAgICAgICAgIGF0IEJhc2UuY2FsbE92ZXJ3cml0dGVuIChCYXNlLm1qczoxNzY6MjEpXG4gICAgICogICAgICAgICBhdCBCYXNlLmFmdGVyU2V0SGVpZ2h0IChPdmVycmlkZXMubWpzOjE5OjI2KVxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBjYWxsT3ZlcndyaXR0ZW4oLi4uYXJncykge1xuICAgICAgICBsZXQgc3RhY2sgICAgICA9IG5ldyBFcnJvcigpLnN0YWNrLFxuICAgICAgICAgICAgbWV0aG9kTmFtZSA9IHN0YWNrLm1hdGNoKEJhc2UubWV0aG9kTmFtZVJlZ2V4KVsxXTtcblxuICAgICAgICB0aGlzLl9fcHJvdG9fXy5jb25zdHJ1Y3Rvci5vdmVyd3JpdHRlbk1ldGhvZHNbbWV0aG9kTmFtZV0uY2FsbCh0aGlzLCAuLi5hcmdzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIElkR2VuZXJhdG9yIHRvIGNyZWF0ZSBhbiBpZCBpZiBhIHN0YXRpYyBvbmUgaXMgbm90IGV4cGxpY2l0bHkgc2V0LlxuICAgICAqIFJlZ2lzdGVycyB0aGUgaW5zdGFuY2UgdG8gbWFuYWdlci5JbnN0YW5jZSBpZiB0aGlzIG9uZSBpcyBhbHJlYWR5IGNyZWF0ZWQsXG4gICAgICogb3RoZXJ3aXNlIHN0b3JlcyBpdCBpbnNpZGUgYSB0bXAgbWFwLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIGNyZWF0ZUlkKGlkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZCB8fCBJZEdlbmVyYXRvci5nZXRJZCh0aGlzLmdldElkS2V5KCkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgdGhpcyBpbnN0YW5jZSBmcm9tIE5lby5tYW5hZ2VyLkluc3RhbmNlXG4gICAgICogYW5kIHJlbW92ZXMgYWxsIG9iamVjdCBlbnRyaWVzIGZyb20gdGhpcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuI3RpbWVvdXRJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSlcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaWRNYXApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXBbbWUuaWRdXG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhtZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobWUsIGtleSkud3JpdGFibGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBtdXN0IG5vdCBkZWxldGUgdGhlIGN1c3RvbSBkZXN0cm95KCkgaW50ZXJjZXB0b3JcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnZGVzdHJveScgJiYga2V5ICE9PSAnX2lkJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gV2UgZG8gd2FudCB0byBwcmV2ZW50IGRlbGF5ZWQgZXZlbnQgY2FsbHMgYWZ0ZXIgYW4gb2JzZXJ2YWJsZSBpbnN0YW5jZSBnb3QgZGVzdHJveWVkLlxuICAgICAgICBpZiAoTmVvLmlzRnVuY3Rpb24obWUuZmlyZSkpIHtcbiAgICAgICAgICAgIG1lLmZpcmUgPSBOZW8uZW1wdHlGblxuICAgICAgICB9XG5cbiAgICAgICAgbWUuaXNEZXN0cm95ZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBpbnNpZGUgY3JlYXRlSWQoKSBhcyB0aGUgZGVmYXVsdCB2YWx1ZSBwYXNzZWQgdG8gdGhlIElkR2VuZXJhdG9yLlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIGFzIG5lZWRlZC5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldElkS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udHlwZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBrZXkgb3IgdGhlIHN0YXRpY0NvbmZpZyBvYmplY3QgaXRzZWxmIGluIGNhc2Ugbm8gdmFsdWUgaXMgc2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRTdGF0aWNDb25maWcoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yW2tleV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIGdpdmVuIG50eXBlIGV4aXN0cyBpbnNpZGUgdGhlIHByb3RvIGNoYWluLCBpbmNsdWRpbmcgdGhlIHRvcCBsZXZlbCBjbGFzc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBudHlwZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc050eXBlKG50eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm50eXBlQ2hhaW4uaW5jbHVkZXMobnR5cGUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCgpIGlzIGRvbmVcbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29yZS5CYXNlI29uQ29uc3RydWN0ZWQgb25Db25zdHJ1Y3RlZH1cbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBpbml0KCkge31cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYWxsIGNsYXNzIGNvbmZpZ3MgdG8gdGhpcyBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0Q29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaXNDb25maWd1cmluZyA9IHRydWU7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgbWUubWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpKTtcbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcbiAgICAgICAgbWUuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvZXMgZ2V0IHRyaWdnZXJlZCB3aXRoIGEgZGVsYXkgdG8gZW5zdXJlIHRoYXQgTmVvLndvcmtlcklkICYgTmVvLndvcmtlci5NYW5hZ2VyIGFyZSBkZWZpbmVkXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGluaXRSZW1vdGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtjbGFzc05hbWUsIHJlbW90ZX0gPSBtZSxcbiAgICAgICAgICAgIHtjdXJyZW50V29ya2VyfSAgICAgPSBOZW87XG5cbiAgICAgICAgaWYgKCFtZS5zaW5nbGV0b24gJiYgIW1lLmlzTWFpblRocmVhZEFkZG9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW90ZSBtZXRob2QgYWNjZXNzIGlzIG9ubHkgZnVuY3Rpb25hbCBmb3IgU2luZ2xldG9uIGNsYXNzZXMgJyArIGNsYXNzTmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghTmVvLmNvbmZpZy51bml0VGVzdE1vZGUgJiYgTmVvLmlzT2JqZWN0KHJlbW90ZSkpIHtcbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09ICdtYWluJyAmJiBjdXJyZW50V29ya2VyLmlzU2hhcmVkV29ya2VyICYmICFjdXJyZW50V29ya2VyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFdvcmtlci5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKVxuICAgICAgICAgICAgICAgIH0sIG1lLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcmNlcHRzIGRlc3Ryb3koKSBjYWxscyB0byBlbnN1cmUgdGhleSB3aWxsIG9ubHkgZ2V0IGNhbGxlZCBvbmNlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEZXN0cm95ZWRDaGVjaygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRGVzdHJveWVkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGN0b3IgPSBtZS5jb25zdHJ1Y3RvcjtcblxuICAgICAgICBpZiAoIWN0b3IuY29uZmlnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lby5hcHBseUNsYXNzQ29uZmlnIGhhcyBub3QgYmVlbiBydW4gb24gJyArIG1lLmNsYXNzTmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgICAgICBtZS5vcmlnaW5hbENvbmZpZyA9IE5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gey4uLmN0b3IuY29uZmlnLCAuLi5jb25maWd9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkFmdGVyQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaXNDb25zdHJ1Y3RlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gV2UgY2FuIG9ubHkgZmlyZSB0aGUgZXZlbnQgaW4gY2FzZSB0aGUgT2JzZXJ2YWJsZSBtaXhpbiBpcyBpbmNsdWRlZC5cbiAgICAgICAgbWUuZ2V0U3RhdGljQ29uZmlnKCdvYnNlcnZhYmxlJykgJiYgbWUuZmlyZSgnY29uc3RydWN0ZWQnLCBtZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBhbGwgY29uc3RydWN0b3JzIGFyZSBkb25lXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJlcGxhY2Ugc3RyaW5nIGJhc2VkIHZhbHVlcyBjb250YWluaW5nIFwiQGNvbmZpZzpcIiB3aXRoIHRoZSBtYXRjaGluZyBjb25maWcgdmFsdWVcbiAgICAgKiBvZiB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE9iamVjdFtdfSBpdGVtc1xuICAgICAqL1xuICAgIHBhcnNlSXRlbUNvbmZpZ3MoaXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG5zLCBuc0FycmF5LCBuc0tleSwgc3ltYm9sTnM7XG5cbiAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbSAmJiBPYmplY3QuZW50cmllcyhpdGVtKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUl0ZW1Db25maWdzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnN0YXJ0c1dpdGgoJ0Bjb25maWc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zQXJyYXkgPSB2YWx1ZS5zdWJzdHJpbmcoOCkudHJpbSgpLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuc0tleSAgID0gbnNBcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zICAgICAgPSBOZW8ubnMobnNBcnJheSwgZmFsc2UsIG1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5zW25zS2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHVzZWQgQGNvbmZpZyBkb2VzIG5vdCBleGlzdDonLCBuc0tleSwgbnNBcnJheS5qb2luKCcuJykpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbE5zID0gTmVvLm5zKG5zQXJyYXksIGZhbHNlLCBtZVtjb25maWdTeW1ib2xdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBjb25maWcgbWlnaHQgbm90IGJlIHByb2Nlc3NlZCB5ZXQsIGVzcGVjaWFsbHkgZm9yIGNvbmZpZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZSwgc28gd2UgbmVlZCB0byBjaGVjayB0aGUgY29uZmlnU3ltYm9sIGZpcnN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2xOcyAmJiBPYmplY3QuaGFzT3duKHN5bWJvbE5zLCBuc0tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtrZXldID0gc3ltYm9sTnNbbnNLZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtrZXldID0gbnNbbnNLZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIHNldCgpLCBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlIGNhbiBhbHJlYWR5IGJlIGFzc2lnbmVkLFxuICAgICAqIHNvIHRoZSBoYXNPd25Qcm9wZXJ0eSgpIGNoZWNrIHdpbGwgcmV0dXJuIHRydWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtmb3JjZUFzc2lnbj1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvY2Vzc0NvbmZpZ3MoZm9yY2VBc3NpZ249ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pO1xuXG4gICAgICAgIG1lW2ZvcmNlQXNzaWduQ29uZmlnc10gPSBmb3JjZUFzc2lnbjtcblxuICAgICAgICAvLyBXZSBkbyBub3Qgd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIDEgY29uZmlnIGNhbiByZW1vdmUgbW9yZSB0aGFuIDEga2V5IChiZWZvcmVTZXRYLCBhZnRlclNldFgpXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBpcyBpbnRlbmRlZCBmb3IgY29uZmlncyB3aXRob3V0IGEgdHJhaWxpbmcgdW5kZXJzY29yZVxuICAgICAgICAgICAgLy8gPT4gdGhleSBjb3VsZCBhbHJlYWR5IGhhdmUgYmVlbiBhc3NpZ25lZCBpbnNpZGUgYW4gYWZ0ZXJTZXQtbWV0aG9kXG4gICAgICAgICAgICBpZiAoZm9yY2VBc3NpZ24gfHwgIW1lLmhhc093blByb3BlcnR5KGtleXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgbWVba2V5c1swXV0gPSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgZGVsZXRlLWNhbGwgaW5zaWRlIHRoZSBjb25maWcgZ2V0dGVyIGFzIHdlbGwgKE5lby5tanMgPT4gYXV0b0dlbmVyYXRlR2V0U2V0KCkpXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBvbmUgZm9yIGNvbmZpZ3MsIHdoaWNoIGRvIG5vdCB1c2UgZ2V0dGVycyAobm8gdHJhaWxpbmcgdW5kZXJzY29yZSlcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xuXG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHN0YXRpYyBzZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSkge1xuICAgICAgICBsZXQgb3JpZ2luO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlbW90ZSkuZm9yRWFjaCgoW3dvcmtlciwgbWV0aG9kc10pID0+IHtcbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09IHdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9yaWdpbiA9IE5lby53b3JrZXJJZCA9PT0gJ21haW4nID8gTmVvLndvcmtlci5NYW5hZ2VyIDogTmVvLmN1cnJlbnRXb3JrZXI7XG5cbiAgICAgICAgICAgICAgICBvcmlnaW4uc2VuZE1lc3NhZ2Uod29ya2VyLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlZ2lzdGVyUmVtb3RlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKi9cbiAgICBzZXQodmFsdWVzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWVzID0gbWUuc2V0RmllbGRzKHZhbHVlcyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGluaXRpYWwgY29uZmlnIHByb2Nlc3NpbmcgaXMgc3RpbGwgcnVubmluZyxcbiAgICAgICAgLy8gZmluaXNoIHRoaXMgb25lIGZpcnN0IGJlZm9yZSBkcm9wcGluZyBuZXcgdmFsdWVzIGludG8gdGhlIGNvbmZpZ1N5bWJvbC5cbiAgICAgICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvMjIwMVxuICAgICAgICBpZiAobWVbZm9yY2VBc3NpZ25Db25maWdzXSAhPT0gdHJ1ZSAmJiBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpXG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIHZhbHVlcyk7XG5cbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3ModHJ1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB3YW50IHRvIGFzc2lnbiBjbGFzcyBmaWVsZHMgZmlyc3QgYW5kIHJlbW92ZSB0aGVtIGZyb20gdGhlIGNvbmZpZyBvYmplY3QsXG4gICAgICogc28gdGhhdCBhZnRlclNldCgpLCBiZWZvcmVHZXQoKSBhbmQgYmVmb3JlU2V0KCkgbWV0aG9kcyBjYW4gZ2V0IHRoZSBuZXcgdmFsdWVzIHJpZ2h0IGF3YXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2V0RmllbGRzKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29uZmlnTmFtZXMgPSBtZS5jb25zdHJ1Y3Rvci5jb25maWc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICghY29uZmlnTmFtZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhTmVvLmhhc1Byb3BlcnR5U2V0dGVyKG1lLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWdba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcgYnkgYSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb25maWcgZXhpc3RzIGFuZCBnb3QgY2hhbmdlZFxuICAgICAqL1xuICAgIHNldFN0YXRpY0NvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcblxuICAgICAgICBpZiAoc3RhdGljQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcmVzIHRpbWVvdXRJZHMgaW50ZXJuYWxseSwgc28gdGhhdCBkZXN0cm95KCkgY2FuIGNsZWFyIHRoZW0gaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICB0aW1lb3V0KHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgbGV0IHRpbWVvdXRJZHMgPSB0aGlzLiN0aW1lb3V0SWRzLFxuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCAgPSBzZXRUaW1lb3V0KCgpID0+IHt0aW1lb3V0SWRzLnNwbGljZSh0aW1lb3V0SWRzLmluZGV4T2YodGltZW91dElkKSwgMSk7IHJlc29sdmUoKX0sIHRpbWUpO1xuXG4gICAgICAgICAgICB0aW1lb3V0SWRzLnB1c2godGltZW91dElkKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgdG9TdHJpbmcoKSBtZXRob2QsIGUuZy48L3A+XG4gICAgICogYE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScpLnRvU3RyaW5nKCkgPT4gXCJbb2JqZWN0IE5lby5idXR0b24uQmFzZSAobmVvLWJ1dHRvbi0xKV1cImBcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xhc3NOYW1lfSAoaWQ6ICR7dGhpcy5pZH0pYFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgaW5zdGFuY2VvZiBtZXRob2QuIFdpdGhvdXQgdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiA8cD5XaXRoIHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IGZhbHNlYDxicj5cbiAgICAgKiBgTmVvLmNyZWF0ZShOZW8uY29sbGVjdGlvbi5CYXNlKSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2VbaXNJbnN0YW5jZV0gPT09IHRydWUgPyBzdXBlcltTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSA6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhCYXNlKTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5Db21wYXJlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIENvbXBhcmUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkNvbXBhcmUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLkNvbXBhcmUnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcmluZyB0aGUgY29tcGFyaXNvbiBtZXRob2QgbmFtZXMgYnkgZGF0YSB0eXBlXG4gICAgICogQG1lbWJlciB7T2JqZWN0fSBtYXBcbiAgICAgKi9cbiAgICBzdGF0aWMgbWFwID0ge1xuICAgICAgICBBcnJheSAgICAgIDogJ2NvbXBhcmVBcnJheXMnLFxuICAgICAgICBEYXRlICAgICAgIDogJ2NvbXBhcmVEYXRlcycsXG4gICAgICAgIEZ1bmN0aW9uICAgOiAnY29tcGFyZUZ1bmN0aW9ucycsXG4gICAgICAgIE1hcCAgICAgICAgOiAnY29tcGFyZU1hcHMnLFxuICAgICAgICBOZW9JbnN0YW5jZTogJ2NvbXBhcmVOZW9JbnN0YW5jZXMnLFxuICAgICAgICBPYmplY3QgICAgIDogJ2NvbXBhcmVPYmplY3RzJyxcbiAgICAgICAgUmVnRXhwICAgICA6ICdjb21wYXJlUmVnRXhwcycsXG4gICAgICAgIFNldCAgICAgICAgOiAnY29tcGFyZVNldHMnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlQXJyYXlzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoaXRlbTEubGVuZ3RoICE9PSBpdGVtMi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBbaSwgdl0gb2YgaXRlbTEuZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAoIUNvbXBhcmUuaXNFcXVhbCh2LCBpdGVtMltpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtEYXRlfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7RGF0ZX0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZURhdGVzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICByZXR1cm4gaXRlbTEudmFsdWVPZigpID09PSBpdGVtMi52YWx1ZU9mKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVtMVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVGdW5jdGlvbnMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMS5uYW1lICE9PSBpdGVtMi5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtMS50b1N0cmluZygpID09PSBpdGVtMi50b1N0cmluZygpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNYXB9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtNYXB9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVNYXBzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsMjtcblxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgaXRlbTEpIHtcbiAgICAgICAgICAgIHZhbDIgPSBpdGVtMi5nZXQoa2V5KTtcblxuICAgICAgICAgICAgaWYgKHZhbDIgIT09IHZhbCB8fCB2YWwyID09PSB1bmRlZmluZWQgJiYgIWl0ZW0yLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVOZW9JbnN0YW5jZXMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIHJldHVybiBpdGVtMS5pZCA9PT0gaXRlbTIuaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZU9iamVjdHMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhpdGVtMSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhpdGVtMikubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBpdGVtMSkge1xuICAgICAgICAgICAgaWYgKCFDb21wYXJlLmlzRXF1YWwoaXRlbTFba2V5XSwgaXRlbTJba2V5XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtSZWdFeHB9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtSZWdFeHB9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVSZWdFeHBzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICByZXR1cm4gaXRlbTEudG9TdHJpbmcoKSA9PT0gaXRlbTIudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2V0fSBpdGVtMVxuICAgICAqIEBwYXJhbSB7U2V0fSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlU2V0cyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xLnNpemUgIT09IGl0ZW0yLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGl0ZW0xKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0yLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbTFcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRXF1YWwoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdHlwZTEgPSBOZW8udHlwZU9mKGl0ZW0xKSxcbiAgICAgICAgICAgIHR5cGUyID0gTmVvLnR5cGVPZihpdGVtMik7XG5cbiAgICAgICAgaWYgKHR5cGUxICE9PSB0eXBlMikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcGFyZS5tYXBbdHlwZTFdKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29tcGFyZVtDb21wYXJlLm1hcFt0eXBlMV1dKGl0ZW0xLCBpdGVtMilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFsbCBvdGhlciB0eXBlc1xuICAgICAgICByZXR1cm4gaXRlbTEgPT09IGl0ZW0yXG4gICAgfVxufVxuXG5Db21wYXJlID0gTmVvLnNldHVwQ2xhc3MoQ29tcGFyZSk7XG5cbi8vIGFsaWFzXG5OZW8uaXNFcXVhbCA9IENvbXBhcmUuaXNFcXVhbDtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZTtcbiIsIi8qKlxuICogVGhpcyBjbGFzcyBnZXRzIHVzZWQgYnkgY29yZS5CYXNlLCBzbyBpdCBjYW4gbm90IGV4dGVuZCBpdC5cbiAqIEl0IGNvdWxkIGdldCBzaW1wbGlmaWVkIHRvIGp1c3QgYmVpbmcgYW4gb2JqZWN0IChuZWVkcyB0byBtYW51YWxseSBnZXQgcHV0IGludG8gdGhlIE5lbyBuYW1lc3BhY2UgaW4gdGhpcyBjYXNlKS5cbiAqIEBjbGFzcyBOZW8uY29yZS5JZEdlbmVyYXRvclxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBJZEdlbmVyYXRvciB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5JZEdlbmVyYXRvcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuSWRHZW5lcmF0b3InLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naWQtZ2VuZXJhdG9yJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2lkLWdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCBwcmVmaXggZm9yIG5lbyBpbnN0YW5jZSBpZHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBiYXNlPSduZW8tJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFzZTogJ25lby0nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPSd0cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaWRDb3VudGVyID0ge307XG5cbiAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldElkID0gbWUuZ2V0SWQuYmluZChtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldElkKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgJ25lbyc7XG5cbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRlciA9IG1lLmlkQ291bnRlcixcbiAgICAgICAgICAgIGNvdW50ICAgPSBjb3VudGVyW25hbWVdIHx8IDA7XG5cbiAgICAgICAgY291bnRlcltuYW1lXSA9ICsrY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIG1lLmJhc2UgKyAobmFtZSA9PT0gJ25lbycgPyAnJyA6IG5hbWUgKyAnLScpICsgY291bnQ7XG4gICAgfVxuXG4gICAgaW5pdCgpIHt9XG5cbiAgICBvbkFmdGVyQ29uc3RydWN0ZWQoKSB7fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKElkR2VuZXJhdG9yKTtcbiIsImltcG9ydCBCYXNlICAgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQge3Jlc29sdmVDYWxsYmFja30gZnJvbSAnLi4vdXRpbC9GdW5jdGlvbi5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5PYnNlcnZhYmxlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLk9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLk9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWl4aW4tb2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtaXhpbi1vYnNlcnZhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gW29yZGVyXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gZXZlbnRJZCBudWxsIGluIGNhc2UgYW4gb2JqZWN0IGdldHMgcGFzc2VkIGFzIHRoZSBuYW1lIChtdWx0aXBsZSBpZHMpXG4gICAgICovXG4gICAgYWRkTGlzdGVuZXIobmFtZSwgb3B0cywgc2NvcGUsIGV2ZW50SWQsIGRhdGEsIG9yZGVyKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbGF5ICAgICAgICAgPSAwLFxuICAgICAgICAgICAgZXZlbnRJZE9iamVjdCA9IHR5cGVvZiBldmVudElkID09PSAnb2JqZWN0JyxcbiAgICAgICAgICAgIG5hbWVPYmplY3QgICAgPSB0eXBlb2YgbmFtZSAgICA9PT0gJ29iamVjdCcsXG4gICAgICAgICAgICBvbmNlICAgICAgICAgID0gZmFsc2UsXG4gICAgICAgICAgICBvcHRzVHlwZSAgICAgID0gdHlwZW9mIG9wdHMsXG4gICAgICAgICAgICBsaXN0ZW5lciwgZXhpc3RpbmcsIGV2ZW50Q29uZmlnO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIGxldCB1cyBzdXBwb3J0IHRoZSBmb2xsb3dpbmcgZm9ybWF0IHRvbzpcbiAgICAgICAgICpcbiAgICAgICAgICogY3VycmVudFdvcmtlci5vbignY29ubmVjdGVkJywgKCkgPT4ge1xuICAgICAgICAgKiAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSlcbiAgICAgICAgICogfSwgbWUsIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICovXG4gICAgICAgIGlmIChldmVudElkT2JqZWN0ICYmIG9wdHNUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldmVudElkLmZuID0gb3B0cztcbiAgICAgICAgICAgIG9wdHMgICAgID0gZXZlbnRJZDtcbiAgICAgICAgICAgIG9wdHNUeXBlID0gJ29iamVjdCc7XG4gICAgICAgICAgICBldmVudElkICA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ2RlbGF5JykpIHtcbiAgICAgICAgICAgICAgICBkZWxheSA9IG5hbWUuZGVsYXk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuZGVsYXlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ29uY2UnKSkge1xuICAgICAgICAgICAgICAgIG9uY2UgPSBuYW1lLm9uY2U7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUub25jZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnb3JkZXInKSkge1xuICAgICAgICAgICAgICAgIG9yZGVyID0gbmFtZS5vcmRlcjtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5vcmRlclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnc2NvcGUnKSkge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gbmFtZS5zY29wZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5zY29wZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihrZXksIHtkZWxheSwgb25jZSwgb3JkZXIsIHNjb3BlLCAuLi52YWx1ZX0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIoa2V5LCB7ZGVsYXksIGZuOiB2YWx1ZSwgb25jZSwgb3JkZXIsIHNjb3BlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgaWYgKG9wdHNUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGVsYXkgICAgPSBkZWxheSAgIHx8IG9wdHMuZGVsYXk7XG4gICAgICAgICAgICBldmVudElkICA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzLmZuO1xuICAgICAgICAgICAgb25jZSAgICAgPSBvbmNlICAgIHx8IG9wdHMub25jZTtcbiAgICAgICAgICAgIG9yZGVyICAgID0gb3JkZXIgICB8fCBvcHRzLm9yZGVyO1xuICAgICAgICAgICAgc2NvcGUgICAgPSBzY29wZSAgIHx8IG9wdHMuc2NvcGVcbiAgICAgICAgfSBlbHNlIGlmIChvcHRzVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzXG4gICAgICAgIH0gZWxzZSBpZiAob3B0c1R5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHMgLy8gVkMgaG9vaywgY2FuIGdldCBwYXJzZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCBpbiBjYXNlIHRoZSB2aWV3IHVzZXMgdGhlIHBhcmVudCBWQ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFkZExpc3RlbmVyIGNhbGw6ICcgKyBuYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBldmVudENvbmZpZyA9IHtmbjogbGlzdGVuZXIsIGlkOiBldmVudElkIHx8IE5lby5nZXRJZCgnZXZlbnQnKX07XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSAgICAgIHtldmVudENvbmZpZy5kYXRhICAgPSBkYXRhfVxuICAgICAgICAgICAgaWYgKGRlbGF5ID4gMCkge2V2ZW50Q29uZmlnLmRlbGF5ICA9IGRlbGF5fVxuICAgICAgICAgICAgaWYgKG9uY2UpICAgICAge2V2ZW50Q29uZmlnLm9uY2UgICA9IG9uY2V9XG4gICAgICAgICAgICBpZiAoc2NvcGUpICAgICB7ZXZlbnRDb25maWcuc2NvcGUgID0gc2NvcGV9XG5cbiAgICAgICAgICAgIGlmIChleGlzdGluZyA9IG1lLmxpc3RlbmVycz8uW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmcuZm9yRWFjaChjZmcgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLmlkID09PSBldmVudElkIHx8IChjZmcuZm4gPT09IGxpc3RlbmVyICYmIGNmZy5zY29wZSA9PT0gc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdEdXBsaWNhdGUgZXZlbnQgaGFuZGxlciBhdHRhY2hlZDonLCBuYW1lLCBtZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcuc3BsaWNlKG9yZGVyLCAwLCBldmVudENvbmZpZylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnYmVmb3JlJykge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy51bnNoaWZ0KGV2ZW50Q29uZmlnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnB1c2goZXZlbnRDb25maWcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5saXN0ZW5lcnNbbmFtZV0gPSBbZXZlbnRDb25maWddXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBldmVudENvbmZpZy5pZFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoZSBwYXNzZWQgZnVuY3Rpb24sIG9yIGEgZnVuY3Rpb24gYnkgKm5hbWUqIHdoaWNoIGV4aXN0cyBpbiB0aGUgcGFzc2VkIHNjb3BlJ3NcbiAgICAgKiBvciB0aGlzIGNvbXBvbmVudCdzIG93bmVyc2hpcCBjaGFpbi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gZm4gQSBmdW5jdGlvbiwgb3IgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiB0byBmaW5kIGluIHRoZSBwYXNzZWQgc2NvcGUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZSAgICAgICBUaGUgc2NvcGUgdG8gZmluZCB0aGUgZnVuY3Rpb24gaW4gaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgICAgICAgICBBcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICovXG4gICAgY2FsbGJhY2soZm4sIHNjb3BlPXRoaXMsIGFyZ3MpIHtcbiAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gcmVzb2x2ZUNhbGxiYWNrKGZuLCBzY29wZSk7XG4gICAgICAgICAgICBoYW5kbGVyLmZuLmFwcGx5KGhhbmRsZXIuc2NvcGUsIGFyZ3MpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBoZWxwZXIgbWV0aG9kIGZvciBldmVudHMgd2hpY2ggdXNlIHRoZSBkZWxheSBvcHRpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2JcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gICAgICovXG4gICAgZGVsYXllZENhbGxiYWNrKGNiLCBhcmdzLCBkZWxheSkge1xuICAgICAgICB0aGlzLnRpbWVvdXQoZGVsYXkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY2IuZm4uYXBwbHkoY2Iuc2NvcGUsIGFyZ3MpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICBmaXJlKG5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcmdzICAgICAgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnMsXG4gICAgICAgICAgICBkZWxheSwgaGFuZGxlciwgaGFuZGxlcnMsIGksIGxlbjtcblxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgaGFuZGxlcnMgPSBbLi4ubGlzdGVuZXJzW25hbWVdXTtcbiAgICAgICAgICAgIGxlbiAgICAgID0gaGFuZGxlcnMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gaGFuZGxlcnNbaV07XG4gICAgICAgICAgICAgICAgZGVsYXkgICA9IGhhbmRsZXIuZGVsYXk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIGZ1bmN0aW9uIG5hbWUgb24gdGhlIHNjb3BlIChvciBtZSksIG9yLCBpZiBpdCBzdGFydHMgd2l0aCAndXAuJ1xuICAgICAgICAgICAgICAgIC8vIGxvb2sgaW4gdGhlIG93bmVyc2hpcCBoaWVyYXJjaHkgZnJvbSBtZS5cbiAgICAgICAgICAgICAgICBjb25zdCBjYiA9IHJlc29sdmVDYWxsYmFjayhoYW5kbGVyLmZuLCBoYW5kbGVyLnNjb3BlIHx8IG1lKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGlzdGVuZXIgaWYgdGhlIHNjb3BlIG5vIGxvbmdlciBleGlzdHNcbiAgICAgICAgICAgICAgICBpZiAoY2Iuc2NvcGUgJiYgIWNiLnNjb3BlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShsaXN0ZW5lcnNbbmFtZV0sIGhhbmRsZXIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZS5zdXNwZW5kRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPYmplY3QgZXZlbnQgZm9ybWF0LiBJbmplY3QgZmlyZXIgcmVmZXJlbmNlIGluIGFzICdzb3VyY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgTmVvLmlzT2JqZWN0KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1swXS5zb3VyY2UgPSBtZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGxpc3RlbmVyIGlmIGl0IGhhcyB0aGUgb25jZSBmbGFnXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLm9uY2UgJiYgTmVvQXJyYXkucmVtb3ZlKGxpc3RlbmVyc1tuYW1lXSwgaGFuZGxlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNOdW1iZXIoZGVsYXkpICYmIGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmRlbGF5ZWRDYWxsYmFjayhjYiwgaGFuZGxlci5kYXRhID8gYXJncy5jb25jYXQoaGFuZGxlci5kYXRhKSA6IGFyZ3MsIGRlbGF5KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYi5mbi5hcHBseShjYi5zY29wZSwgaGFuZGxlci5kYXRhID8gYXJncy5jb25jYXQoaGFuZGxlci5kYXRhKSA6IGFyZ3MpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgaW5pdE9ic2VydmFibGUoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcbiAgICAgICAgICAgIGN0b3IgID0gcHJvdG8uY29uc3RydWN0b3IsXG4gICAgICAgICAgICBsaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIG1lLmxpc3RlbmVycyA9IGNvbmZpZy5saXN0ZW5lcnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmxpc3RlbmVyc1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLmxpc3RlbmVycyA9IHt9O1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QobGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IHsuLi5saXN0ZW5lcnN9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGxpc3RlbmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAocHJvdG8/LmNvbnN0cnVjdG9yLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKGN0b3Iub2JzZXJ2YWJsZSAmJiAhY3Rvci5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICBmaXJlICAgICAgICAgIDogbWUuZmlyZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBtZS5yZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgdW4gICAgICAgICAgICA6IG1lLnVuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX19cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBhZGRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgb24oLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lciguLi5hcmdzKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZXJlIGFyZSBkaWZmZXJlbnQgc3ludGF4J3MgaG93IHlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kLlxuICAgICAqIFVzaW5nIHRoZSBldmVudElkOlxuICAgICAqIGBgYFxuICAgICAqIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2NoYW5nZScsICduZW8tZXZlbnQtNycpO1xuICAgICAqIGBgYFxuICAgICAqIFBhc3NpbmcgdGhlIGhhbmRsZXIgbWV0aG9kOlxuICAgICAqIGBgYFxuICAgICAqIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25DaGFuZ2UsIHRoaXMpO1xuICAgICAqIGBgYFxuICAgICAqIFBhc3NpbmcgYW4gb2JqZWN0OlxuICAgICAqIGBgYFxuICAgICAqIG1lLmZpZWxkLnVuKHtcbiAgICAgKiAgICAgY2hhbmdlICAgICAgICAgICAgICAgICAgICA6IG1lLm9uRmllbGRDaGFuZ2UsXG4gICAgICogICAgIGNoYW5nZUNsZWFyVG9PcmlnaW5hbFZhbHVlOiBtZS5vbkZpZWxkQ2hhbmdlLFxuICAgICAqICAgICBzY29wZSAgICAgICAgICAgICAgICAgICAgIDogbWVcbiAgICAgKiB9KTtcbiAgICAgKiBgYGBcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBbc2NvcGVdXG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRJZCwgc2NvcGUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGksIGxlbiwgbGlzdGVuZXIsIGxpc3RlbmVycywgbWF0Y2g7XG5cbiAgICAgICAgaWYgKE5lby5pc0Z1bmN0aW9uKGV2ZW50SWQpKSB7XG4gICAgICAgICAgICBtZS5yZW1vdmVMaXN0ZW5lcih7W25hbWVdOiBldmVudElkLCBzY29wZX0pO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgICAgICBpZiAobmFtZS5zY29wZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gbmFtZS5zY29wZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5zY29wZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobmFtZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW2tleV0gfHwgW107XG4gICAgICAgICAgICAgICAgaSAgICAgICAgID0gMDtcbiAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5mbi5uYW1lID09PSAoTmVvLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlIDogdmFsdWUubmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLnNjb3BlICAgPT09IHNjb3BlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNTdHJpbmcoZXZlbnRJZCkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVyc1tuYW1lXTtcbiAgICAgICAgICAgIG1hdGNoICAgICA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRDb25maWcsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudENvbmZpZy5pZCA9PT0gZXZlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPSBpZHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UobWF0Y2gsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyBzdXNwZW5kTGlzdGVuZXJzOiBmdW5jdGlvbihxdWV1ZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICovXG4gICAgdW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoT2JzZXJ2YWJsZSk7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuVXRpbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogQSByZWdleCB0byByZW1vdmUgY2FtZWwgY2FzZSBzeW50YXhcbiAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGRlY2FtZWxSZWdFeD0vKFthLXpdKShbQS1aXSkvZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGRlY2FtZWxSZWdFeCA9IC8oW2Etel0pKFtBLVpdKS9nXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLlV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLlV0aWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29yZS11dGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvcmUtdXRpbCdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSB2YWx1ZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgYmluZE1ldGhvZHMoc2NvcGUsIHZhbHVlcykge1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzY29wZVt2YWx1ZV0gPSBzY29wZVt2YWx1ZV0uYmluZChzY29wZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGEgc3R5bGVzIHN0cmluZyBpbnRvIGEgc3R5bGVzIG9iamVjdCB1c2luZyBjYW1lbGNhc2Ugc3ludGF4XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgc3R5bGVzIHN0cmluZyB0byBwYXJzZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjYW1lbGNhc2Ugc3R5bGVzIG9iamVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTdHlsZU9iamVjdChzdHJpbmcpIHtcbiAgICAgICAgbGV0IHBhcnRzO1xuXG4gICAgICAgIC8vIHNwbGl0KCc7JykgZG9lcyBmZXRjaCBzZW1pY29sb25zIGluc2lkZSBicmFja2V0c1xuICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiBcInVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LC4uLlxuXG4gICAgICAgIC8vIFRPRE86IENhY2hlIGFsbCByZWdleFxuICAgICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KC87KD89W15cXCldKig/OlxcKHwkKSkvZykucmVkdWNlKChvYmosIGVsKSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IGJ5IHRoZSBmaXJzdCBjb2xvbiBvbmx5XG4gICAgICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmcnKVxuICAgICAgICAgICAgcGFydHMgPSBlbC5zcGxpdCgoLzooLispLykpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUZsb2F0KHgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHggPT0gbnVtID8gbnVtIDogeC50cmltKClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoc3RyLCBsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBvYmpbcGFydHNbMF1dID0gcGFydHNbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgfSwge30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBzdHlsZXMgb2JqZWN0IHdoaWNoIGNhbiB1c2UgY2FtZWxjYXNlIHN5bnRheCBpbnRvIGEgc3R5bGVzIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgVGhlIHN0eWxlcyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc3R5bGVzIHN0cmluZyAoRE9NIHJlYWR5KVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGxldCBzdHlsZSA9ICcnO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0eWxlICs9IFV0aWwuZGVjYW1lbChrZXkpICsgJzonICsgdmFsdWUgKyAnOydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhbGwgdXBwZXJjYXNlIGNoYXJhY3RlcnMgb2YgYSBzdHJpbmcgaW50byAtbG93ZXJjYXNlLlxuICAgICAqIERvZXMgbm90IHRvdWNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIGlucHV0IGNvbnRhaW5pbmcgdXBwZXJjYXNlIGNoYXJhY3RlcnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbG93ZXJjYXNlIG91dHB1dFxuICAgICAqL1xuICAgIHN0YXRpYyBkZWNhbWVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFV0aWwuZGVjYW1lbFJlZ0V4LCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gZW1wdHkgQXJyYXksIE9iamVjdCBvciBTdHJpbmdcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU/LmNvbnN0cnVjdG9yPy5uYW1lID09PSAnT2JqZWN0JyB8fCBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgbmVvIGRhdGEgcmVjb3JkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzUmVjb3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8uY29uc3RydWN0b3I/Lm5hbWUgPT09ICdSZWNvcmQnIHx8IGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhbnkgaXRlcmFibGUgKHN0cmluZ3MsIG51bWVyaWMgaW5kaWNlcyBhbmQgYSBsZW5ndGggcHJvcGVydHkpIGludG8gYSB0cnVlIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBpdGVyYWJsZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gc3RhcnQgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZD1pdGVyYWJsZS5sZW5ndGhdIGVuZCBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9BcnJheShpdGVyYWJsZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbGVuO1xuXG4gICAgICAgIGlmICghaXRlcmFibGUgfHwgIShsZW4gPSBpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGUuc3BsaXQoJycpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlcmFibGUsIHN0YXJ0IHx8IDAsIGVuZCB8fCBsZW4pXG4gICAgfVxufVxuXG5VdGlsID0gTmVvLnNldHVwQ2xhc3MoVXRpbCk7XG5cbi8vIGFsaWFzZXNcbk5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcbiAgICBiaW5kTWV0aG9kcyAgICAgIDogJ2JpbmRNZXRob2RzJyxcbiAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXG4gICAgZGVjYW1lbCAgICAgICAgICA6ICdkZWNhbWVsJyxcbiAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcbiAgICBpc0RlZmluZWQgICAgICAgIDogJ2lzRGVmaW5lZCcsXG4gICAgaXNFbXB0eSAgICAgICAgICA6ICdpc0VtcHR5JyxcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxuICAgIGlzTnVtYmVyICAgICAgICAgOiAnaXNOdW1iZXInLFxuICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgIGlzUmVjb3JkICAgICAgICAgOiAnaXNSZWNvcmQnLFxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxuICAgIHRvQXJyYXkgICAgICAgICAgOiAndG9BcnJheSdcbn0sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvbXBhcmUgICAgIGZyb20gJy4vQ29tcGFyZS5tanMnO1xuaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICBmcm9tICcuL09ic2VydmFibGUubWpzJztcbmltcG9ydCBVdGlsICAgICAgICBmcm9tICcuL1V0aWwubWpzJztcblxuZXhwb3J0IHtCYXNlLCBDb21wYXJlLCBJZEdlbmVyYXRvciwgT2JzZXJ2YWJsZSwgVXRpbH07XG4iLCJpbXBvcnQgQ29sbGVjdGlvbiBmcm9tICcuLi9jb2xsZWN0aW9uL0Jhc2UubWpzJztcblxuLyoqXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB0aGUgb3RoZXIgbWFuYWdlciBjbGFzc2VzXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvbGxlY3Rpb24uQmFzZVxuICovXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgQ29sbGVjdGlvbntcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkJhc2UnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0QnlJZChpZCkge1xuICAgICAgICByZXR1cm4gaWQgJiYgdGhpcy5nZXQoaWQpIHx8IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZ2V0KGl0ZW0uaWQpKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYW4gaXRlbSB3aXRoIGFuIGFscmVhZHkgZXhpc3RpbmcgaWQnLCBpdGVtLCBtZS5nZXQoaXRlbS5pZCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29sbGVjdGlvbiBpdGVtIHBhc3NlZCBieSByZWZlcmVuY2Ugb3Iga2V5XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBpdGVtXG4gICAgICovXG4gICAgdW5yZWdpc3RlcihpdGVtKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhNYW5hZ2VyKTtcbiIsImltcG9ydCBNYW5hZ2VyICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgIGZyb20gJy4uL3V0aWwvVkRvbS5tanMnO1xuaW1wb3J0IFZOb2RlVXRpbCBmcm9tICcuLi91dGlsL1ZOb2RlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLm1hbmFnZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBNYW5hZ2VyIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge01hcH0gd3JhcHBlck5vZGVzPW5ldyBNYXAoKVxuICAgICAqL1xuICAgIHdyYXBwZXJOb2RlcyA9IG5ldyBNYXAoKVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uZmlyc3QgICAgICAgID0gbWUuZ2V0Rmlyc3QuYmluZChtZSk7IC8vIGFsaWFzXG4gICAgICAgIE5lby5nZXRDb21wb25lbnQgPSBtZS5nZXQgICAgIC5iaW5kKG1lKSAgLy8gYWxpYXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGbGF0dGVucyBhIGdpdmVuIHZub2RlIHRyZWUgYnkgcmVwbGFjaW5nIGNvbXBvbmVudCBiYXNlZCBzdWJ0cmVlcyB3aXRoIGNvbXBvbmVudElkIGJhc2VkIHJlZmVyZW5jZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3duZXJJZCBXZSBkbyBub3Qgd2FudCB0byByZXBsYWNlIHRoZSBvd24gaWQgPT4gd3JhcHBlZCBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgYWRkVm5vZGVDb21wb25lbnRSZWZlcmVuY2VzKHZub2RlLCBvd25lcklkKSB7XG4gICAgICAgIHZub2RlID0gey4uLnZub2RlfTsgLy8gc2hhbGxvdyBjb3B5XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGROb2RlcyA9IHZub2RlPy5jaGlsZE5vZGVzID8gWy4uLnZub2RlLmNoaWxkTm9kZXNdIDogW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVJZCwgY29tcG9uZW50LCBjb21wb25lbnRJZCwgcGFyZW50UmVmLCByZWZlcmVuY2VOb2RlO1xuXG4gICAgICAgIHZub2RlLmNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2RlSWQgPSBjaGlsZE5vZGUuaWQ7XG5cbiAgICAgICAgICAgIGlmICghY2hpbGROb2RlLmNvbXBvbmVudElkICYmIGNoaWxkTm9kZUlkICE9PSBvd25lcklkKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbWUuZ2V0KGNoaWxkTm9kZUlkKTtcblxuICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaGluZyBmb3Igd3JhcHBlZCBjb21wb25lbnRzIGFzIGEgZmFsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbWUud3JhcHBlck5vZGVzLmdldChjaGlsZE5vZGVJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlZmVyZW5jZSA9PiBhc3NpZ24gdGhlIHdyYXBwZXIgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudElkID0gY29tcG9uZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UmVmICAgPSBWRG9tVXRpbC5maW5kKGNvbXBvbmVudC5wYXJlbnQudmRvbSwge2NvbXBvbmVudElkfSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50UmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UmVmLnZkb20uaWQgPSBjaGlsZE5vZGVJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRJZCAgID0gY29tcG9uZW50LmlkO1xuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VOb2RlID0ge2NvbXBvbmVudElkfTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50SWQgIT09IGNoaWxkTm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VOb2RlLmlkID0gY2hpbGROb2RlSWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGROb2Rlc1tpbmRleF0gPSBjb21wb25lbnQgPyByZWZlcmVuY2VOb2RlIDogbWUuYWRkVm5vZGVDb21wb25lbnRSZWZlcmVuY2VzKGNoaWxkTm9kZSwgb3duZXJJZClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgY29tcG9uZW50IHdoaWNoIG1hdGNoZXMgdGhlIGNvbmZpZy1zZWxlY3RvciBtb3ZpbmcgZG93biB0aGUgY29tcG9uZW50IGl0ZW1zIHRyZWUuXG4gICAgICogVXNlIHJldHVybkZpcnN0TWF0Y2g9ZmFsc2UgdG8gZ2V0IGFuIGFycmF5IG9mIGFsbCBtYXRjaGluZyBpdGVtcyBpbnN0ZWFkLlxuICAgICAqIElmIG5vIG1hdGNoIGlzIGZvdW5kLCByZXR1cm5zIG51bGwgaW4gY2FzZSByZXR1cm5GaXJzdE1hdGNoID09PSB0cnVlLCBvdGhlcndpc2UgYW4gZW1wdHkgQXJyYXkuXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V8U3RyaW5nfSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd8bnVsbH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZXR1cm5GaXJzdE1hdGNoPXRydWVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfG51bGx9XG4gICAgICovXG4gICAgZG93bihjb21wb25lbnQsIGNvbmZpZywgcmV0dXJuRmlyc3RNYXRjaD10cnVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSAgPSBbXSxcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gbnVsbCxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIHJldHVybkFycmF5ID0gW10sXG4gICAgICAgICAgICBjaGlsZEl0ZW1zLCBjb25maWdBcnJheSwgY29uZmlnTGVuZ3RoLCBsZW47XG5cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFjb25maWcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHt9XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdBcnJheSAgPSBPYmplY3QuZW50cmllcyhjb25maWcpO1xuICAgICAgICBjb25maWdMZW5ndGggPSBjb25maWdBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgY29uZmlnQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAoKGNvbXBvbmVudFtrZXldID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgICB8fCAoa2V5ID09PSAnbnR5cGUnICYmIG1lLmhhc1Byb3RvdHlwZVByb3BlcnR5VmFsdWUoY29tcG9uZW50LCBrZXksIHZhbHVlKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gY29uZmlnTGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAocmV0dXJuRmlyc3RNYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChjb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZEl0ZW1zID0gbWUuZmluZCh7cGFyZW50SWQ6IGNvbXBvbmVudC5pZH0pO1xuICAgICAgICBsZW4gICAgICAgID0gY2hpbGRJdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBtZS5kb3duKGNoaWxkSXRlbXNbaV0sIGNvbmZpZywgcmV0dXJuRmlyc3RNYXRjaCk7XG5cbiAgICAgICAgICAgIGlmIChyZXR1cm5GaXJzdE1hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmV0dXJuVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goLi4ucmV0dXJuVmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuRmlyc3RNYXRjaCA/IG51bGw6IHJldHVybkFycmF5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdGhlIGNvbXBvbmVudCBpZCBpbiBjYXNlIHRoZXJlIGlzIGEgbWF0Y2hcbiAgICAgKi9cbiAgICBmaW5kUGFyZW50Q29tcG9uZW50KHBhdGgpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBpICAgPSAwLFxuICAgICAgICAgICAgbGVuID0gcGF0aD8ubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZCA9IHBhdGhbaV07XG5cbiAgICAgICAgICAgIGlmIChpZCAmJiBtZS5oYXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9iamVjdCBhc3NvY2lhdGVkIHRvIHRoZSBrZXksIG9yIG51bGwgaWYgdGhlcmUgaXMgbm9uZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gICAgICAgW2luY2x1ZGVXcmFwcGVyTm9kZXM9dHJ1ZV1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9XG4gICAgICovXG4gICAgZ2V0KGtleSwgaW5jbHVkZVdyYXBwZXJOb2Rlcz10cnVlKSB7XG4gICAgICAgIGlmIChpbmNsdWRlV3JhcHBlck5vZGVzKSB7XG4gICAgICAgICAgICBsZXQgd3JhcHBlck5vZGUgPSB0aGlzLndyYXBwZXJOb2Rlcy5nZXQoa2V5KTtcblxuICAgICAgICAgICAgaWYgKHdyYXBwZXJOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXJOb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjaGlsZCBjb21wb25lbnRzIHdoaWNoIGFyZSByZWN1cnNpdmVseSBtYXRjaGVkIHZpYSB0aGVpciBwYXJlbnRJZFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlW119IGNoaWxkQ29tcG9uZW50c1xuICAgICAqL1xuICAgIGdldENoaWxkQ29tcG9uZW50cyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRpcmVjdENoaWxkcmVuID0gbWUuZmluZCgncGFyZW50SWQnLCBjb21wb25lbnQuaWQpIHx8IFtdLFxuICAgICAgICAgICAgY29tcG9uZW50cyAgICAgPSBbXSxcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50cztcblxuICAgICAgICBkaXJlY3RDaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudHMgPSBtZS5nZXRDaGlsZENvbXBvbmVudHMoaXRlbSk7XG5cbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50cyAmJiBjb21wb25lbnRzLnB1c2goLi4uY2hpbGRDb21wb25lbnRzKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50c1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IHJlcGxhY2UgYWxsIGNhbGxzIG9mIHRoaXMgbWV0aG9kIHRvIGNhbGxzIHVzaW5nIHRoZSB1dGlsLlZOb2RlIGNsYXNzXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2bm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGNoaWxkSWRzPVtdXG4gICAgICogQHJldHVybnMge1N0cmluZ1tdfSBjaGlsZElkc1xuICAgICAqL1xuICAgIGdldENoaWxkSWRzKHZub2RlLCBjaGlsZElkcz1bXSkge1xuICAgICAgICByZXR1cm4gVk5vZGVVdGlsLmdldENoaWxkSWRzKHZub2RlLCBjaGlsZElkcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjaGlsZCBjb21wb25lbnRzIGZvdW5kIGluc2lkZSB0aGUgdm5vZGUgdHJlZVxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlW119IGNoaWxkQ29tcG9uZW50c1xuICAgICAqL1xuICAgIGdldENoaWxkcmVuKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgY2hpbGRDb21wb25lbnRzID0gW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVzICAgICAgPSBWTm9kZVV0aWwuZ2V0Q2hpbGRJZHMoY29tcG9uZW50LnZub2RlKSxcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50O1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50ID0gdGhpcy5nZXQobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50cy5wdXNoKGNoaWxkQ29tcG9uZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRDb21wb25lbnRzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogISEgRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBvbmx5ICEhXG4gICAgICpcbiAgICAgKiBHZXQgdGhlIGZpcnN0IGNvbXBvbmVudCBiYXNlZCBvbiB0aGUgbnR5cGUgb3Igb3RoZXIgcHJvcGVydGllc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fEFycmF5fSBjb21wb25lbnREZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmV0dXJuRmlyc3RNYXRjaD10cnVlXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxudWxsfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgLy8gYXMgU3RyaW5nOiBudHlwZVtjb21tYSBzZXBhcmF0ZWQgcHJvcHRlcnRpZXNdXG4gICAgIE5lby5maXJzdCgndG9vbGJhciBidXR0b25bdGV4dD1UcnkgbWUsaWNvbj1wZW9wbGVdJylcbiAgICAgLy8gYXMgT2JqZWN0OiBBZGQgcHJvcGVydGllcy4gbnR5cGUgaXMgb3B0aW9uYWxcbiAgICAgTmVvLmZpcnN0KHtcbiAgICAgICAgICAgICAgICBpY29uOiAncGVvcGxlJ1xuICAgICAgICAgICAgfSlcbiAgICAgLy8gYXMgQXJyYXk6IEFuIEFycmF5IG9mIE9iamVjdHMuIE5vIFN0cmluZ3MgYWxsb3dlZFxuICAgICBOZW8uZmlyc3QoW3tcbiAgICAgICAgICAgICAgICBudHlwZTogJ3Rvb2xiYXInXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2J1dHRvbicsIHRleHQ6ICdUcnkgbWUnLCBpY29uOiAncGVvcGxlXG4gICAgICAgICAgICB9XSlcblxuICAgICAqIFRoZSByZXR1cm5GaXJzdE1hdGNoIGZsYWcgYWxsb3dzIHRvIHJldHVybiBhbGwgaXRlbXMgYW5kXG4gICAgICogbm90IHN0b3AgYWZ0ZXIgdGhlIGZpcnN0IHJlc3VsdC5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgIE5lby5maXJzdCgnYnV0dG9uJywgZmFsc2UpIC8vID0+IFtCdXR0b24sIEJ1dHRvbiwgQnV0dG9uXVxuICAgICAqL1xuICAgIGdldEZpcnN0KGNvbXBvbmVudERlc2NyaXB0aW9uLCByZXR1cm5GaXJzdE1hdGNoID0gdHJ1ZSkge1xuICAgICAgICBsZXQgb2JqZWN0cyA9IFtdLFxuICAgICAgICAgICAgYXBwICAgICA9IE5lby5hcHBzW09iamVjdC5rZXlzKE5lby5hcHBzKVswXV0sXG4gICAgICAgICAgICByb290ICAgID0gYXBwLm1haW5WaWV3O1xuXG4gICAgICAgIC8qIGNyZWF0ZSBhbiBhcnJheSBvZiBvYmplY3RzIGZyb20gc3RyaW5nICovXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29tcG9uZW50RGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICBjb25zdCByZWdleCA9IC8oXFx3KikoXFxbW15cXF1dKlxcXSl8KFxcdyopL2c7XG4gICAgICAgICAgICBsZXQgbWF0Y2g7XG5cbiAgICAgICAgICAgIC8qIGdlbmVyYXRlIG9iamVjdHMgd2hpY2ggY29udGFpbiB0aGUgaW5mb3JtYXRpb24gKi9cbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4LmV4ZWMoY29tcG9uZW50RGVzY3JpcHRpb24pKSB7XG4gICAgICAgICAgICAgICAgbGV0IFssIG50eXBlLCBwYWlycywgbnR5cGVPbmx5XSA9IG1hdGNoLCBvYmo7XG5cbiAgICAgICAgICAgICAgICBudHlwZSA9IG50eXBlIHx8IG50eXBlT25seTtcbiAgICAgICAgICAgICAgICBvYmogPSB7bnR5cGV9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhaXJzUmVnZXggPSAvXFxbKC4qPylcXF0vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWlyc01hdGNoID0gcGFpcnMubWF0Y2gocGFpcnNSZWdleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhaXJzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhaXJzID0gcGFpcnNNYXRjaFsxXS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFpcnMuZm9yRWFjaCgocGFpcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlLnJlcGxhY2UoL1wiL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKG9iaik7XG5cbiAgICAgICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdChjb21wb25lbnREZXNjcmlwdGlvbikpe1xuICAgICAgICAgICAgb2JqZWN0cy5wdXNoKGNvbXBvbmVudERlc2NyaXB0aW9uKVxuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc0FycmF5KGNvbXBvbmVudERlc2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgb2JqZWN0cyA9IGNvbXBvbmVudERlc2NyaXB0aW9uXG4gICAgICAgIH1cblxuICAgICAgICAvKiBmaW5kIHRoZSBjb3JyZWN0IGNoaWxkIHVzaW5nIGRvd24oKSAqL1xuICAgICAgICBjb25zdCByZXN1bHQgPSBvYmplY3RzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChhY2MpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBhY2MuZG93bihrZXksIHJldHVybkZpcnN0TWF0Y2gpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEhY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9LCByb290KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBBcnJheSBjb250YWluaW5nIHRoZSBpZHMgb2YgYWxsIHBhcmVudCBjb21wb25lbnRzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nW119IHBhcmVudElkc1xuICAgICAqL1xuICAgIGdldFBhcmVudElkcyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHBhcmVudElkcyA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQ/LnBhcmVudElkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldChjb21wb25lbnQucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50SWRzLnB1c2goY29tcG9uZW50LmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudElkc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0UGFyZW50UGF0aChwYXRoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbXBvbmVudFBhdGggPSBbXSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICA9IHBhdGg/Lmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZS5oYXMocGF0aFtpXSkgfHwgbWUud3JhcHBlck5vZGVzLmdldChwYXRoW2ldKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudFBhdGgucHVzaChwYXRoW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFBhdGhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIEFycmF5IGNvbnRhaW5pbmcgYWxsIHBhcmVudCBjb21wb25lbnRzIGZvciBhIGdpdmVuIGNvbXBvbmVudCBvciBjb21wb25lbnQgaWRcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZXxTdHJpbmd9IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2VbXX0gcGFyZW50c1xuICAgICAqL1xuICAgIGdldFBhcmVudHMoY29tcG9uZW50KSB7XG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXQoY29tcG9uZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50Py5wYXJlbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXQoY29tcG9uZW50LnBhcmVudElkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjb21wb25lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50c1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhIGdpdmVuIHZkb20gdHJlZSBhbmQgcmVwbGFjZXMgY2hpbGQgY29tcG9uZW50IHJlZmVyZW5jZXMgd2l0aCB0aGUgdmRvbSBvZiB0aGVpciBtYXRjaGluZyBjb21wb25lbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGVwdGg9LTFcbiAgICAgKiAgICAgVGhlIGNvbXBvbmVudCByZXBsYWNlbWVudCBkZXB0aC5cbiAgICAgKiAgICAgLTEgd2lsbCBwYXJzZSB0aGUgZnVsbCB0cmVlLCAxIHRvcCBsZXZlbCBvbmx5LCAyIGluY2x1ZGUgY2hpbGRyZW4sIDMgaW5jbHVkZSBncmFuZGNoaWxkcmVuXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRWZG9tVHJlZSh2ZG9tLCBkZXB0aD0tMSkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gey4uLnZkb219LCAvLyBzaGFsbG93IGNvcHlcbiAgICAgICAgICAgIGNoaWxkRGVwdGg7XG5cbiAgICAgICAgaWYgKHZkb20uY24pIHtcbiAgICAgICAgICAgIG91dHB1dC5jbiA9IFtdO1xuXG4gICAgICAgICAgICB2ZG9tLmNuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGREZXB0aCA9IGRlcHRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGREZXB0aCA9IGRlcHRoID09PSAtMSA/IC0xIDogZGVwdGggPiAxID8gZGVwdGgtMSA6IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoID09PSAtMSB8fCBkZXB0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmdldChpdGVtLmNvbXBvbmVudElkKS52ZG9tXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBvdXRwdXQuY24ucHVzaCh0aGlzLmdldFZkb21UcmVlKGl0ZW0sIGNoaWxkRGVwdGgpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYSBnaXZlbiB2bm9kZSB0cmVlIGFuZCByZXBsYWNlcyBjaGlsZCBjb21wb25lbnQgcmVmZXJlbmNlcyB3aXRoIHRoZSB2bm9kZSBvZiB0aGVpciBtYXRjaGluZyBjb21wb25lbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRlcHRoPS0xXG4gICAgICogICAgIFRoZSBjb21wb25lbnQgcmVwbGFjZW1lbnQgZGVwdGguXG4gICAgICogICAgIC0xIHdpbGwgcGFyc2UgdGhlIGZ1bGwgdHJlZSwgMSB0b3AgbGV2ZWwgb25seSwgMiBpbmNsdWRlIGNoaWxkcmVuLCAzIGluY2x1ZGUgZ3JhbmRjaGlsZHJlblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0Vm5vZGVUcmVlKHZub2RlLCBkZXB0aD0tMSkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gey4uLnZub2RlfSwgLy8gc2hhbGxvdyBjb3B5XG4gICAgICAgICAgICBjaGlsZERlcHRoLCBjb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIG91dHB1dC5jaGlsZE5vZGVzID0gW107XG5cbiAgICAgICAgICAgIHZub2RlLmNoaWxkTm9kZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZERlcHRoID0gZGVwdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb21wb25lbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZERlcHRoID0gZGVwdGggPT09IC0xID8gLTEgOiBkZXB0aCA+IDEgPyBkZXB0aC0xIDogMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGggPT09IC0xIHx8IGRlcHRoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXQoaXRlbS5jb21wb25lbnRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgcmVmZXJlbmNlcyBpbiBjYXNlIHRoZXJlIGlzIG5vIHZub2RlIChjbXAgbm90IG1vdW50ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50Py52bm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBjb21wb25lbnQudm5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG91dHB1dC5jaGlsZE5vZGVzLnB1c2godGhpcy5nZXRWbm9kZVRyZWUoaXRlbSwgY2hpbGREZXB0aCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBjb21wb25lbnQgaGFkIGEgcHJvcGVydHkgb2YgYW55IHZhbHVlIHNvbWV3aGVyZSBpbiB0aGUgUHJvdG90eXBlIGNoYWluXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc1Byb3RvdHlwZVByb3BlcnR5VmFsdWUoY29tcG9uZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgY29tcG9uZW50W3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnQgPSBjb21wb25lbnQuX19wcm90b19fXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gd3JhcHBlcklkXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyV3JhcHBlck5vZGUod3JhcHBlcklkLCBjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyTm9kZXMuc2V0KHdyYXBwZXJJZCwgY29tcG9uZW50KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfFN0cmluZ30gaXRlbVxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgaWYgKE5lby5pc1N0cmluZyhpdGVtKSkge1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlck5vZGVzLmRlbGV0ZShpdGVtKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlkICE9PSBpdGVtLnZkb20uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXJOb2Rlcy5kZWxldGUoaXRlbS52ZG9tLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcihpdGVtKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGNvbXBvbmVudCB3aGljaCBtYXRjaGVzIHRoZSBjb25maWctc2VsZWN0b3IuXG4gICAgICogVXNlIHJldHVybkZpcnN0TWF0Y2g9ZmFsc2UgdG8gZ2V0IGFuIGFycmF5IG9mIGFsbCBtYXRjaGluZyBpdGVtcyBpbnN0ZWFkLlxuICAgICAqIElmIG5vIG1hdGNoIGlzIGZvdW5kLCByZXR1cm5zIG51bGwgaW4gY2FzZSByZXR1cm5GaXJzdE1hdGNoID09PSB0cnVlLCBvdGhlcndpc2UgYW4gZW1wdHkgQXJyYXkuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfG51bGx9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmV0dXJuRmlyc3RNYXRjaD10cnVlXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXXxudWxsfVxuICAgICAqL1xuICAgIHVwKGNvbXBvbmVudElkLCBjb25maWcsIHJldHVybkZpcnN0TWF0Y2g9dHJ1ZSkge1xuICAgICAgICBsZXQgY29tcG9uZW50ICAgPSB0aGlzLmdldChjb21wb25lbnRJZCksXG4gICAgICAgICAgICByZXR1cm5BcnJheSA9IFtdLFxuICAgICAgICAgICAgY29uZmlnQXJyYXksIGNvbmZpZ0xlbmd0aCwgbWF0Y2hBcnJheTtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWNvbmZpZykge1xuICAgICAgICAgICAgY29uZmlnID0ge31cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKGNvbmZpZyk7XG4gICAgICAgIGNvbmZpZ0xlbmd0aCA9IGNvbmZpZ0FycmF5Lmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50Py5wYXJlbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXQoY29tcG9uZW50LnBhcmVudElkKTtcblxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuRmlyc3RNYXRjaCA/IG51bGwgOiByZXR1cm5BcnJheVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XG5cbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gY29uZmlnTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVybkZpcnN0TWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goY29tcG9uZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhDb21wb25lbnQpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IEZvY3VzTWFuYWdlciAgICAgZnJvbSAnLi9Gb2N1cy5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgICAgIGZyb20gJy4uL3V0aWwvVkRvbS5tanMnO1xuXG5jb25zdCBldmVudENvbmZpZ0tleXMgPSBbXG4gICAgJ2J1YmJsZScsXG4gICAgJ2RlbGVnYXRlJyxcbiAgICAnbG9jYWwnLFxuICAgICdzY29wZScsXG4gICAgJ3Zub2RlSWQnXG5dO1xuXG5jb25zdCBnbG9iYWxEb21FdmVudHMgPSBbXG4gICAgJ2NoYW5nZScsXG4gICAgJ2NsaWNrJyxcbiAgICAnY29udGV4dG1lbnUnLFxuICAgICdkYmxjbGljaycsXG4gICAgJ2RyYWc6ZW5kJyxcbiAgICAnZHJhZzptb3ZlJyxcbiAgICAnZHJhZzpzdGFydCcsXG4gICAgJ2ZvY3VzaW4nLFxuICAgICdmb2N1c291dCcsXG4gICAgJ2lucHV0JyxcbiAgICAnaW50ZXJzZWN0JyxcbiAgICAna2V5ZG93bicsXG4gICAgJ2tleXVwJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VlbnRlcicsXG4gICAgJ21vdXNlbGVhdmUnLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbmVvbmF2aWdhdGUnLFxuICAgICdzY3JvbGwnLFxuICAgICdzZWxlY3Rpb25jaGFuZ2UnLFxuICAgICd0b3VjaG1vdmUnLFxuICAgICd3aGVlbCdcbl07XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkRvbUV2ZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIERvbUV2ZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Eb21FdmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuRG9tRXZlbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtcz17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcD17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtYXA6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtkYXRhfSBldmVudFxuICAgICAqL1xuICAgIGFkZFJlc2l6ZU9ic2VydmVyKGNvbXBvbmVudCwgZXZlbnQpIHtcbiAgICAgICAgaWYgKCFOZW8ubWFpbi5hZGRvbi5SZXNpemVPYnNlcnZlcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9yIHVzaW5nIHJlc2l6ZSBkb21MaXN0ZW5lcnMsIHlvdSBtdXN0IGluY2x1ZGUgbWFpbi5hZGRvbi5SZXNpemVPYnNlcnZlci4nLCBldmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB7aWQsIHdpbmRvd0lkfSA9IGNvbXBvbmVudDtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5SZXNpemVPYnNlcnZlci5yZWdpc3Rlcih7aWQsIHdpbmRvd0lkfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZmlyZShldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnViYmxlICAgICAgPSB0cnVlLFxuICAgICAgICAgICAgZGF0YSAgICAgICAgPSBldmVudC5kYXRhIHx8IHt9LFxuICAgICAgICAgICAge2V2ZW50TmFtZX0gPSBldmVudCxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgID0gbnVsbCxcbiAgICAgICAgICAgIHBhdGhJZHMgICAgID0gZGF0YS5wYXRoLm1hcChlID0+IGUuaWQpLFxuICAgICAgICAgICAgcGF0aCAgICAgICAgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudFBhdGgocGF0aElkcyksXG4gICAgICAgICAgICBsZW4gICAgICAgICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgY29tcG9uZW50LCBkZWxlZ2F0aW9uVGFyZ2V0SWQsIGlkLCBwcmV2ZW50RmlyZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZCAgICAgICAgPSBwYXRoW2ldO1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgIGlmICghY29tcG9uZW50IHx8IGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLml0ZW1zW2lkXT8uW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgaXRlcmF0aW9uIGlmIGEgaGFuZGxlciByZXR1cm5zIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5ldmVyeShsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgbGlzdGVuZXIuZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAncmVzaXplJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkbyBub3Qgd2FudCBkZWxlZ2F0aW9uIGZvciBjdXN0b20gbWFpbi5hZGRvbi5SZXNpemVPYnNlcnZlciBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGlvblRhcmdldElkID0gZGF0YS5pZCA9PT0gY29tcG9uZW50LmlkID8gZGF0YS5pZCA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGlvblRhcmdldElkID0gbWUudmVyaWZ5RGVsZWdhdGlvblBhdGgobGlzdGVuZXIsIGRhdGEucGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGlvblRhcmdldElkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RmlyZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG9ubHkgd2FudCBtb3VzZWVudGVyICYgbGVhdmUgdG8gZmlyZSBvbiB0aGVpciB0b3AgbGV2ZWwgbm9kZXMsIG5vdCBmb3IgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ21vdXNlZW50ZXInIHx8IGV2ZW50TmFtZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RmlyZSA9ICFEb21FdmVudC52ZXJpZnlNb3VzZUVudGVyTGVhdmUoY29tcG9uZW50LCBkYXRhLCBkZWxlZ2F0aW9uVGFyZ2V0SWQsIGV2ZW50TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudEZpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11bHRpcGxlIGxpc3RlbmVycyB3b3VsZCBjaGFuZ2UgdGhlIHJlZmVyZW5jZSBvZiBkYXRhLmNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IE5lby5jbG9uZShkYXRhLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZXIgbmVlZHMgdG8ga25vdyB3aGljaCBhY3R1YWwgdGFyZ2V0IG1hdGNoZWQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmN1cnJlbnRUYXJnZXQgPSBkZWxlZ2F0aW9uVGFyZ2V0SWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcobGlzdGVuZXIuZm4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuYmluZENhbGxiYWNrKGxpc3RlbmVyLmZuLCAnZm4nLCBsaXN0ZW5lci5zY29wZSwgbGlzdGVuZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyLmZuLmFwcGx5KGxpc3RlbmVyLnNjb3BlIHx8IGdsb2JhbFRoaXMsIFtkYXRhXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGlzdGVuZXIuYnViYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGEgbGlzdGVuZXIgcmV0dXJucyBmYWxzZSwgd2Ugc3RvcCBpdGVyYXRpbmcgdGhlIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAhPT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gdHJpZ2dlciB0aGUgRm9jdXNNYW5hZ2VyIGFmdGVyIG5vcm1hbCBkb21MaXN0ZW5lcnMgb24gdGhlc2UgZXZlbnRzIGdvdCBleGVjdXRlZFxuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ2ZvY3VzaW4nIHx8IGV2ZW50TmFtZSA9PT0gJ2ZvY3Vzb3V0Jykge1xuICAgICAgICAgICAgICAgIEZvY3VzTWFuYWdlclsnb24nICsgTmVvLmNhcGl0YWxpemUoZXZlbnROYW1lKV0oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRQYXRoOiBwYXRoLFxuICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIb25vciB0aGUgRXZlbnQgY2FuY2VsQnViYmxlIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAoIWJ1YmJsZSB8fCBkYXRhLmNhbmNlbEJ1YmJsZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnY29udGV4dG1lbnUnICYmIGRhdGEuY3RybEtleSkge1xuICAgICAgICAgICAgTmVvLnV0aWw/LkxvZ2dlcj8ub25Db250ZXh0TWVudShkYXRhKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50TmFtZS5zdGFydHNXaXRoKCdkcm9wJykpIHtcbiAgICAgICAgICAgIGxldCBkcmFnWm9uZSA9IGRhdGEuZHJhZ1pvbmVJZCAmJiBOZW8uZ2V0KGRhdGEuZHJhZ1pvbmVJZCk7XG5cbiAgICAgICAgICAgIGlmIChkcmFnWm9uZSkge1xuICAgICAgICAgICAgICAgIGRyYWdab25lLmZpcmUoZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBkcmFnWm9uZVt7XG4gICAgICAgICAgICAgICAgICAgICdkcm9wJyAgICAgIDogJ29uRHJvcCcsXG4gICAgICAgICAgICAgICAgICAgICdkcm9wOmVudGVyJzogJ29uRHJvcEVudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Ryb3A6bGVhdmUnOiAnb25Ecm9wTGVhdmUnLFxuICAgICAgICAgICAgICAgIH1bZXZlbnROYW1lXV0uY2FsbChkcmFnWm9uZSwgZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdlbmVyYXRlTGlzdGVuZXJDb25maWcoY29uZmlnLCBzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnViYmxlICAgOiBjb25maWcuYnViYmxlLFxuICAgICAgICAgICAgZGVsZWdhdGUgOiBjb25maWcuZGVsZWdhdGUsXG4gICAgICAgICAgICBldmVudE5hbWU6IGNvbmZpZy5ldmVudE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgICA6IHNjb3BlLmlkLFxuICAgICAgICAgICAgb3B0cyAgICAgOiBjb25maWcsXG4gICAgICAgICAgICBwcmlvcml0eSA6IGNvbmZpZy5wcmlvcml0eSxcbiAgICAgICAgICAgIHNjb3BlICAgIDogY29uZmlnLnNjb3BlICAgfHwgc2NvcGUsXG4gICAgICAgICAgICB2bm9kZUlkICA6IGNvbmZpZy52bm9kZUlkIHx8IHNjb3BlLnZkb20uaWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRFdmVudE5hbWUoY29uZmlnKSB7XG4gICAgICAgIGxldCBldmVudE5hbWUgPSBudWxsO1xuXG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QoY29uZmlnKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudENvbmZpZ0tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBrZXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZW50TmFtZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5idWJibGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmRlbGVnYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vcHRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TGlzdGVuZXIoY29uZmlnKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgZXZlbnQ7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycz8uW2NvbmZpZy5pZF0pIHtcbiAgICAgICAgICAgIGV2ZW50ID0gbGlzdGVuZXJzW2NvbmZpZy5pZF1bY29uZmlnLmV2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIHJldHVybiBldmVudCB8fCBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3VudHMgbG9jYWwgZG9tRXZlbnQgbGlzdGVuZXJzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgbW91bnREb21MaXN0ZW5lcnMoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcnMgICA9IHRoaXMuaXRlbXNbY29tcG9uZW50LmlkXSxcbiAgICAgICAgICAgIGxvY2FsRXZlbnRzID0gW107XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobGlzdGVuZXJzKS5mb3JFYWNoKChbZXZlbnROYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gZXZlbnQuZXZlbnROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdyZXNpemUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFJlc2l6ZU9ic2VydmVyKGNvbXBvbmVudCwgZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnROYW1lICYmIChldmVudC5sb2NhbCB8fCAhZ2xvYmFsRG9tRXZlbnRzLmluY2x1ZGVzKGV2ZW50TmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbEV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICAgOiBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ2RvbUV2ZW50TGlzdGVuZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlSWQ6IGV2ZW50LnZub2RlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbEV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgTmVvLndvcmtlci5BcHAucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgOiAnYWRkRG9tTGlzdGVuZXInLFxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lIDogY29tcG9uZW50LmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cyAgOiBsb2NhbEV2ZW50cyxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93SWQ6IGNvbXBvbmVudC53aW5kb3dJZFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRlZCBkb21MaXN0ZW5lcicsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHA6IEdvdCBlcnJvciBhdHRlbXB0aW5nIHRvIGFkZCBhIGRvbUxpc3RlbmVyJywgZXJyKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLmJ1YmJsZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgY29uZmlnLmRlbGVnYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICBjb25maWcuZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICBjb25maWcuaWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5sb2NhbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSAgY29uZmlnLm9wdHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gIGNvbmZpZy5vcmlnaW5hbENvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSAgY29uZmlnLm93bmVySWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gIGNvbmZpZy5wcmlvcml0eT0xXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBjb25maWcuc2NvcGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gIGNvbmZpZy52bm9kZUlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGxpc3RlbmVyIGdvdCByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSAoZmFsc2UgaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSB0aGVyZSlcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYWxyZWFkeVJlZ2lzdGVyZWQgICAgICAgICAgICA9IGZhbHNlLFxuICAgICAgICAgICAge2V2ZW50TmFtZSwgaWQsIG9wdHMsIHNjb3BlfSA9IGNvbmZpZyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgICAgICAgICAgICAgICAgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIGZuVHlwZSAgICAgICAgICAgICAgICAgICAgICAgPSB0eXBlb2Ygb3B0cyxcbiAgICAgICAgICAgIGZuLCBsaXN0ZW5lciwgbGlzdGVuZXJDb25maWcsIGxpc3RlbmVySWQ7XG5cbiAgICAgICAgaWYgKGZuVHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCBmblR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBmbiA9IG9wdHNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZuICAgID0gb3B0cy5mbjtcbiAgICAgICAgICAgIHNjb3BlID0gb3B0cy5zY29wZSB8fCBzY29wZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaWRdKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaWRdID0ge31cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0ZW5lcikuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5mbi50b1N0cmluZygpID09PSBmbi50b1N0cmluZygpICYmIC8vIHRvZG86IGFkZCBhIGJldHRlciBjaGVja1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLnNjb3BlICAgICAgICAgPT09IHNjb3BlICYmXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uZGVsZWdhdGUgICAgICA9PT0gY29uZmlnLmRlbGVnYXRlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFscmVhZHlSZWdpc3RlcmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0gPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFscmVhZHlSZWdpc3RlcmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYW5hZ2VyLkRvbUV2ZW50IHJlZ2lzdGVyJywgZXZlbnROYW1lLCBjb25maWcpO1xuXG4gICAgICAgIGxpc3RlbmVySWQgPSBOZW8uZ2V0SWQoJ2RvbS1ldmVudCcpO1xuXG4gICAgICAgIGNvbmZpZy5saXN0ZW5lcklkID0gbGlzdGVuZXJJZDtcblxuICAgICAgICBsaXN0ZW5lckNvbmZpZyA9IHtcbiAgICAgICAgICAgIGJ1YmJsZSAgICAgICAgOiBjb25maWcuaGFzT3duUHJvcGVydHkoJ2J1YmJsZScpID8gY29uZmlnLmJ1YmJsZSA6IG9wdHMuaGFzT3duUHJvcGVydHkoJ2J1YmJsZScpID8gb3B0cy5idWJibGUgOiB0cnVlLFxuICAgICAgICAgICAgZGVsZWdhdGUgICAgICA6IGNvbmZpZy5kZWxlZ2F0ZSxcbiAgICAgICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgICAgIGZuLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICA6IGxpc3RlbmVySWQsXG4gICAgICAgICAgICBtb3VudGVkICAgICAgIDogIWNvbmZpZy5sb2NhbCAmJiBnbG9iYWxEb21FdmVudHMuaW5jbHVkZXMoZXZlbnROYW1lKSxcbiAgICAgICAgICAgIG9yaWdpbmFsQ29uZmlnOiBjb25maWcub3JpZ2luYWxDb25maWcsXG4gICAgICAgICAgICBvd25lcklkICAgICAgIDogY29uZmlnLm93bmVySWQsXG4gICAgICAgICAgICBwcmlvcml0eSAgICAgIDogY29uZmlnLnByaW9yaXR5IHx8IG9wdHMucHJpb3JpdHkgfHwgMSxcbiAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgICAgdm5vZGVJZCAgICAgICA6IGNvbmZpZy52bm9kZUlkXG4gICAgICAgIH07XG5cbiAgICAgICAgbWUubWFwW2xpc3RlbmVySWRdID0gbGlzdGVuZXJDb25maWc7XG5cbiAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdLnB1c2gobGlzdGVuZXJDb25maWcpO1xuXG4gICAgICAgIGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXS5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjb25maWcuYnViYmxlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vcHRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGxpc3RlbmVyIGRpZCBleGlzdCBhbmQgZ290IHJlbW92ZWRcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKGNvbmZpZywgc2NvcGUpIHtcbiAgICAgICAgLy8gdG9kb1xuICAgICAgICBjb25zb2xlLmxvZygndW5yZWdpc3RlcicsIGNvbmZpZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2VuZXJhdGVMaXN0ZW5lckNvbmZpZyhjb25maWcsIHNjb3BlKSk7XG4gICAgICAgIHJldHVybjtcblxuICAgICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdGVuZXIgZm91bmQnLCBsaXN0ZW5lcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBkb21MaXN0ZW5lcnNcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBvbGREb21MaXN0ZW5lcnNcbiAgICAgKi9cbiAgICB1cGRhdGVEb21MaXN0ZW5lcnMoY29tcG9uZW50LCBkb21MaXN0ZW5lcnMsIG9sZERvbUxpc3RlbmVycykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICByZWdpc3RlcmVkTGlzdGVuZXJzID0gbWUuaXRlbXNbY29tcG9uZW50LmlkXSB8fCB7fSxcbiAgICAgICAgICAgIGksIGxlbiwgbGlzdGVuZXJzO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRvbUxpc3RlbmVycykpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZERvbUxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICBvbGREb21MaXN0ZW5lcnMuZm9yRWFjaChvbGREb21MaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgJiByZW1vdmUgbm8gbG9uZ2VyIGV4aXN0aW5nIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvbUxpc3RlbmVycy5pbmNsdWRlcyhvbGREb21MaXN0ZW5lcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IHJlZ2lzdGVyZWRMaXN0ZW5lcnNbbWUuZ2V0RXZlbnROYW1lKG9sZERvbUxpc3RlbmVyKV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpICAgICAgICAgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVuICAgICAgID0gbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub3JpZ2luYWxDb25maWcgPT09IG9sZERvbUxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShsaXN0ZW5lcnMsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIG5ldyBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5mb3JFYWNoKGRvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkb21MaXN0ZW5lcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRDb25maWdLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWJibGUgICAgICAgIDogZG9tTGlzdGVuZXIuYnViYmxlICAgfHwgdmFsdWUuYnViYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlICAgICAgOiBkb21MaXN0ZW5lci5kZWxlZ2F0ZSB8fCB2YWx1ZS5kZWxlZ2F0ZSB8fCAnIycgKyAoY29tcG9uZW50LnZkb20uaWQgfHwgY29tcG9uZW50LmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgICAgIDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgOiBjb21wb25lbnQudmRvbS5pZCB8fCBjb21wb25lbnQuaWQsIC8vIGhvbm9yIHdyYXBwZXIgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxDb25maWc6IGRvbUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVySWQgICAgICAgOiBjb21wb25lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHkgICAgICA6IGRvbUxpc3RlbmVyLnByaW9yaXR5IHx8IHZhbHVlLnByaW9yaXR5IHx8IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IGRvbUxpc3RlbmVyLnNjb3BlICAgIHx8IGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bm9kZUlkICAgICAgIDogZG9tTGlzdGVuZXIudm5vZGVJZCAgfHwgdmFsdWUudm5vZGVJZCAgfHwgY29tcG9uZW50LnZkb20uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQubW91bnRlZCAmJiBkb21MaXN0ZW5lcnM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtZS50aW1lb3V0KDEwMCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm1vdW50RG9tTGlzdGVuZXJzKGNvbXBvbmVudClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdDb21wb25lbnQuZG9tTGlzdGVuZXJzIGhhdmUgdG8gYmUgYW4gYXJyYXknLCBjb21wb25lbnQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58U3RyaW5nfSB0cnVlIGluIGNhc2UgdGhlIGRlbGVnYXRpb24gc3RyaW5nIG1hdGNoZXMgdGhlIGV2ZW50IHBhdGhcbiAgICAgKi9cbiAgICB2ZXJpZnlEZWxlZ2F0aW9uUGF0aChsaXN0ZW5lciwgcGF0aCkge1xuICAgICAgICBsZXQge2RlbGVnYXRlfSA9IGxpc3RlbmVyLFxuICAgICAgICAgICAgaiAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBwYXRoTGVuICAgID0gcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICB0YXJnZXRJZDtcblxuICAgICAgICBpZiAodHlwZW9mIGRlbGVnYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBqID0gZGVsZWdhdGUocGF0aCk7XG5cbiAgICAgICAgICAgIGlmIChqICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHBhdGhbal0uaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkZWxlZ2F0aW9uQXJyYXkgPSBkZWxlZ2F0ZS5zcGxpdCgnICcpLFxuICAgICAgICAgICAgICAgIGxlbiAgICAgICAgICAgICA9IGRlbGVnYXRpb25BcnJheS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgaGFzTWF0Y2gsIGksIGl0ZW0sIGlzSWQ7XG5cbiAgICAgICAgICAgIGZvciAoaT1sZW4tMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGl0ZW0gICAgID0gZGVsZWdhdGlvbkFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGlzSWQgICAgID0gaXRlbS5zdGFydHNXaXRoKCcjJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNJZCB8fCBpdGVtLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5zdWJzdHIoMSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaiA8IHBhdGhMZW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXNJZCAmJiBwYXRoW2pdLmlkID09PSBpdGVtKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFtqXS5jbHMuaW5jbHVkZXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZCA9IHBhdGhbal0uaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbnN1cmUgdGhlIGRlbGVnYXRpb24gcGF0aCBpcyBhIGNoaWxkIG9mIHRoZSBvd25lciBjb21wb25lbnRzIHJvb3Qgbm9kZVxuICAgICAgICBmb3IgKDsgaiA8IHBhdGhMZW47IGorKykge1xuICAgICAgICAgICAgaWYgKHBhdGhbal0uaWQgPT09IGxpc3RlbmVyLnZub2RlSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0SWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWxlZ2F0aW9uVGFyZ2V0SWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIHZlcmlmeU1vdXNlRW50ZXJMZWF2ZShjb21wb25lbnQsIGRhdGEsIGRlbGVnYXRpb25UYXJnZXRJZCwgZXZlbnROYW1lKSB7XG4gICAgICAgIGxldCB0YXJnZXRJZCA9IGV2ZW50TmFtZSA9PT0gJ21vdXNlZW50ZXInID8gZGF0YS5mcm9tRWxlbWVudElkIDogZGF0YS50b0VsZW1lbnRJZCxcbiAgICAgICAgICAgIGRlbGVnYXRpb25WZG9tO1xuXG4gICAgICAgIGlmICh0YXJnZXRJZCAmJiB0YXJnZXRJZCAhPT0gZGVsZWdhdGlvblRhcmdldElkKSB7XG4gICAgICAgICAgICBkZWxlZ2F0aW9uVmRvbSA9IFZEb21VdGlsLmZpbmQoY29tcG9uZW50LnZkb20sIGRlbGVnYXRpb25UYXJnZXRJZCk7XG5cbiAgICAgICAgICAgIC8vIGRlbGVnYXRpb25WZG9tIGNhbiBiZSB1bmRlZmluZWQgd2hlbiBkcmFnZ2luZyBhIHByb3h5IG92ZXIgdGhlIG5vZGUuXG4gICAgICAgICAgICAvLyBzZWUgaXNzdWVzLzExMzcgZm9yIGRldGFpbHMuXG4gICAgICAgICAgICBpZiAoIWRlbGVnYXRpb25WZG9tIHx8IGRlbGVnYXRpb25WZG9tLnZkb20gJiYgVkRvbVV0aWwuZmluZChkZWxlZ2F0aW9uVmRvbS52ZG9tLCB0YXJnZXRJZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhEb21FdmVudCk7XG4iLCJpbXBvcnQgQ29yZUJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Gb2N1c1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBGb2N1cyBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkZvY3VzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Gb2N1cycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBjb250YWluaW5nIG9wdHMgb2JqZWN0cy5cbiAgICAgICAgICogb3B0cy5jb21wb25lbnRQYXRoXG4gICAgICAgICAqIG9wdHMuZGF0YVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gaGlzdG9yeT1bXVxuICAgICAgICAgKi9cbiAgICAgICAgaGlzdG9yeTogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRGF0ZSBvYmplY3Qgd2hlbiB0aGUgbGFzdCBmb2N1c2luIGV2ZW50IGhhcyBvY2N1cnJlZFxuICAgICAgICAgKiBAbWVtYmVyIHtEYXRlfG51bGx9IGxhc3RGb2N1c0luRGF0ZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxhc3RGb2N1c0luRGF0ZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBEYXRlIG9iamVjdCB3aGVuIHRoZSBsYXN0IGZvY3Vzb3V0IGV2ZW50IGhhcyBvY2N1cnJlZFxuICAgICAgICAgKiBAbWVtYmVyIHtEYXRlfG51bGx9IGxhc3RGb2N1c0luRGF0ZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxhc3RGb2N1c091dERhdGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgZm9yIGEgZm9jdXNJbiB0byBvY2N1ciBhZnRlciB0aGUgbGFzdCBmb2N1c091dFxuICAgICAgICAgKiB0byBnZXQgY29tYmluZWQgaW50byBhIGZvY3VzbW92ZSBldmVudC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhGb2N1c0luT3V0R2FwPTUwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhGb2N1c0luT3V0R2FwOiA1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIGFtb3VudCBvZiBpdGVtcyBzdG9yZWQgaW5zaWRlIHRoZSBoaXN0b3J5IGFycmF5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4SGlzdG9yeUxlbmd0aD0yMFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4SGlzdG9yeUxlbmd0aDogMjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWRkVG9IaXN0b3J5KG9wdHMpIHtcbiAgICAgICAgbGV0IGhpc3RvcnkgPSB0aGlzLmhpc3Rvcnk7XG5cbiAgICAgICAgaGlzdG9yeS51bnNoaWZ0KG9wdHMpO1xuICAgICAgICBoaXN0b3J5Lmxlbmd0aCA+PSB0aGlzLm1heEhpc3RvcnlMZW5ndGggJiYgaGlzdG9yeS5wb3AoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmb2N1c0VudGVyKG9wdHMpIHtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRGb2N1cyhvcHRzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hZGRUb0hpc3Rvcnkob3B0cylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZm9jdXNMZWF2ZShvcHRzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50Rm9jdXMob3B0cywgZmFsc2UpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGZvY3VzTW92ZShvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtoaXN0b3J5fSAgICAgICAgPSBtZSxcbiAgICAgICAgICAgIG5ld0NvbXBvbmVudFBhdGggPSBvcHRzLmNvbXBvbmVudFBhdGgsXG4gICAgICAgICAgICBvbGRDb21wb25lbnRQYXRoID0gaGlzdG9yeVswXS5jb21wb25lbnRQYXRoLFxuICAgICAgICAgICAgZm9jdXNFbnRlciAgICAgICA9IE5lb0FycmF5LmRpZmZlcmVuY2UobmV3Q29tcG9uZW50UGF0aCwgb2xkQ29tcG9uZW50UGF0aCksXG4gICAgICAgICAgICBmb2N1c0xlYXZlICAgICAgID0gTmVvQXJyYXkuZGlmZmVyZW5jZShvbGRDb21wb25lbnRQYXRoLCBuZXdDb21wb25lbnRQYXRoKSxcbiAgICAgICAgICAgIGZvY3VzTW92ZSAgICAgICAgPSBOZW9BcnJheS5pbnRlcnNlY3Rpb24obmV3Q29tcG9uZW50UGF0aCwgb2xkQ29tcG9uZW50UGF0aCksXG4gICAgICAgICAgICBjb21wb25lbnQsIGRhdGE7XG5cbiAgICAgICAgbWUuc2V0Q29tcG9uZW50Rm9jdXMoe2NvbXBvbmVudFBhdGg6IGZvY3VzTGVhdmUsIGRhdGE6IG9wdHMuZGF0YX0sIGZhbHNlKTtcbiAgICAgICAgbWUuc2V0Q29tcG9uZW50Rm9jdXMoe2NvbXBvbmVudFBhdGg6IGZvY3VzRW50ZXIsIGRhdGE6IG9wdHMuZGF0YX0sIHRydWUpO1xuXG4gICAgICAgIGZvY3VzTW92ZS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBwYXRoICAgOiBvcHRzLmRhdGEucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgb2xkUGF0aDogaGlzdG9yeVswXS5kYXRhLnBhdGhcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50Lm9uRm9jdXNNb3ZlPy4oZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoJ2ZvY3VzTW92ZScsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50Lm9uRm9jdXNDaGFuZ2U/LihkYXRhKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuZmlyZSgnZm9jdXNDaGFuZ2UnLCBkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5hZGRUb0hpc3Rvcnkob3B0cylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Gb2N1c2luKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5sYXN0Rm9jdXNJbkRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGlmIChtZS5sYXN0Rm9jdXNPdXREYXRlICYmIG1lLmxhc3RGb2N1c0luRGF0ZSAtIG1lLmxhc3RGb2N1c091dERhdGUgPCBtZS5tYXhGb2N1c0luT3V0R2FwKSB7XG4gICAgICAgICAgICBtZS5mb2N1c01vdmUob3B0cylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmZvY3VzRW50ZXIob3B0cylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZvY3Vzb3V0KG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5sYXN0Rm9jdXNPdXREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBtZS50aW1lb3V0KG1lLm1heEZvY3VzSW5PdXRHYXApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1lLmxhc3RGb2N1c091dERhdGUgPiBtZS5sYXN0Rm9jdXNJbkRhdGUpIHtcbiAgICAgICAgICAgICAgICBtZS5mb2N1c0xlYXZlKG9wdHMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjb250YWluc0ZvY3VzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHNldENvbXBvbmVudEZvY3VzKG9wdHMsIGNvbnRhaW5zRm9jdXMpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogb3B0cy5kYXRhLnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRzID0gb3B0cy5jb21wb25lbnRQYXRoLm1hcChpZCA9PiBOZW8uZ2V0Q29tcG9uZW50KGlkKSksXG4gICAgICAgICAgICBoYW5kbGVyO1xuXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5jb250YWluc0ZvY3VzID0gY29udGFpbnNGb2N1c1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnRzLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuICAgICAgICAgICAgICAgIGRhdGFbY29udGFpbnNGb2N1cyA/ICdwYXRoJyA6ICdvbGRQYXRoJ10gPSBvcHRzLmRhdGEucGF0aFxuXG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGNvbnRhaW5zRm9jdXMgPyAnb25Gb2N1c0VudGVyJyA6ICdvbkZvY3VzTGVhdmUnO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudFtoYW5kbGVyXT8uKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoY29udGFpbnNGb2N1cyA/ICdmb2N1c0VudGVyJyA6ICdmb2N1c0xlYXZlJywgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQub25Gb2N1c0NoYW5nZT8uKGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5maXJlKCdmb2N1c0NoYW5nZScsIGRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhGb2N1cyk7XG4iLCJpbXBvcnQgQmFzZSAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBNYW5hZ2VyIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICogQGV4dGVuZHMgTmVvLm1hbmFnZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBJbnN0YW5jZSBleHRlbmRzIE1hbmFnZXIge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuSW5zdGFuY2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkluc3RhbmNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSB0cnVlO1xuXG4gICAgICAgIG1lLmNvbnN1bWVOZW9JZE1hcCgpO1xuXG4gICAgICAgIE5lby5maW5kICAgICAgPSBtZS5maW5kICAgICAuYmluZChtZSk7IC8vIGFsaWFzXG4gICAgICAgIE5lby5maW5kRmlyc3QgPSBtZS5maW5kRmlyc3QuYmluZChtZSk7IC8vIGFsaWFzXG4gICAgICAgIE5lby5nZXQgICAgICAgPSBtZS5nZXQgICAgICAuYmluZChtZSk7IC8vIGFsaWFzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYWxsIGlkcyB3aGljaCBnb3QgYXBwbGllZCB0byB0aGUgTmVvIG5hbWVzcGFjZSBiZWZvcmUgdGhpcyBpbnN0YW5jZSBnb3QgY3JlYXRlZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjb25zdW1lTmVvSWRNYXAoKSB7XG4gICAgICAgIGlmIChOZW8uaWRNYXApIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKE9iamVjdC52YWx1ZXMoTmVvLmlkTWFwKSk7XG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEluc3RhbmNlKTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5BcnJheVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBOZW9BcnJheSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuQXJyYXknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkFycmF5J1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGFkZChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSwgYnV0IG5vdCBpbiBhcnJheTJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGRpZmZlcmVuY2UoYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiAhYXJyYXkyLmluY2x1ZGVzKGl0ZW0pKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaXRlbSBpcyBpbmNsdWRlZCBieSByZWZlcmVuY2UgaW5zaWRlIHRoZSBhcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNJdGVtKGFyciwgaXRlbSkge1xuICAgICAgICByZXR1cm4gYXJyLmluY2x1ZGVzKGl0ZW0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBEdXBsaWNhdGVzIHdpbGwgb25seSBnZXQgbWF0Y2hlZCBieSByZWZlcmVuY2UuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0KGFyciwgaW5kZXgsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IGl0ZW1zLmxlbmd0aCAtMSxcbiAgICAgICAgICAgIGkgICA9IGxlbixcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCwgaXRlbTtcblxuICAgICAgICAvLyBJdGVyYXRlIGJhY2t3YXJkc1xuICAgICAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcblxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZShhcnIsIGN1cnJlbnRJbmRleCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMCwgaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnRlcnNlY3Rpb24oYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiBhcnJheTIuaW5jbHVkZXMoaXRlbSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYW4gaXRlbSBpbnNpZGUgYXJyIGZyb20gZnJvbUluZGV4IHRvIHRvSW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvSW5kZXhcbiAgICAgKi9cbiAgICBzdGF0aWMgbW92ZShhcnIsIGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgICAgICBpZiAoZnJvbUluZGV4ID09PSB0b0luZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUluZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZyb21JbmRleCA9IGFyci5sZW5ndGggLSAxXG4gICAgICAgIH1cblxuICAgICAgICBhcnIuc3BsaWNlKHRvSW5kZXgsIDAsIGFyci5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSk7XG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gb3IgYXJyYXkgb2YgaXRlbXMgZnJvbSBhbiBhcnJheS4gT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZShhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGxldCBpbmRleDtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc11cbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICAgICAgICBpbmRleCA+IC0xICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gY29tYmluZSBhZGQgJiByZW1vdmUgaW4gb25lIGNhbGwuXG4gICAgICogWW91IGNhbiBwYXNzIHNpbmdsZSBpdGVtcyBvciBhbiBhcnJheSBvZiBpdGVtcyB0byBhZGQgb3IgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gcmVtb3ZlSXRlbXNcbiAgICAgKiBAcGFyYW0geyp9IGFkZEl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZUFkZChhcnIsIHJlbW92ZUl0ZW1zLCBhZGRJdGVtcykge1xuICAgICAgICB0aGlzLnJlbW92ZShhcnIsIHJlbW92ZUl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGFyciwgYWRkSXRlbXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIGV4aXN0LCBvdGhlcndpc2UgYWRkcyBpdFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FkZF1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9nZ2xlKGFyciwgaXRlbSwgYWRkID0gIXRoaXMuaGFzSXRlbShhcnIsIGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2FkZCA/ICdhZGQnIDogJ3JlbW92ZSddKGFyciwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiB0aGUgcGFzc2VkIGFycmF5cy5cbiAgICAgKiBNdWx0aXBsZSBhcnJheXMgbWF5IGJlIHBhc3NlZC5cbiAgICAgKiBPbmx5IHN1cHBvcnRzIHByaW1pdGl2ZSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdW5pb24oKSB7XG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldChBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmFyZ3VtZW50cykpXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgdW5zaGlmdChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnVuc2hpZnQoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoTmVvQXJyYXkpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkNsYXNzU3lzdGVtXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIENsYXNzU3lzdGVtIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5DbGFzc1N5c3RlbSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuQ2xhc3NTeXN0ZW0nXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2FuIGdldCB1c2VkIGluc2lkZSBiZWZvcmVTZXQgbWV0aG9kcyBpbiBjYXNlIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnN0YW5jZXMgbGlrZSBzdG9yZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOZW8uY29yZS5CYXNlfG51bGx9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZXxTdHJpbmd9IFtEZWZhdWx0Q2xhc3M9bnVsbF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RlZmF1bHRWYWx1ZXM9e31dXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IGluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGJlZm9yZVNldEluc3RhbmNlKGNvbmZpZywgRGVmYXVsdENsYXNzPW51bGwsIGRlZmF1bHRWYWx1ZXM9e30pIHtcbiAgICAgICAgbGV0IGNvbmZpZ1R5cGUgPSBOZW8udHlwZU9mKGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhEZWZhdWx0Q2xhc3MpKSB7XG4gICAgICAgICAgICBEZWZhdWx0Q2xhc3MgPSBOZW8ubnMoRGVmYXVsdENsYXNzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb25maWcgJiYgRGVmYXVsdENsYXNzKSB7XG4gICAgICAgICAgICBjb25maWcgPSBOZW8uY3JlYXRlKERlZmF1bHRDbGFzcywgZGVmYXVsdFZhbHVlcylcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWdUeXBlID09PSAnTmVvQ2xhc3MnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBOZW8uY3JlYXRlKGNvbmZpZywgZGVmYXVsdFZhbHVlcylcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWdUeXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5udHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IE5lby5udHlwZSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdDb25maWcgPSB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChEZWZhdWx0Q2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29uZmlnLm1vZHVsZSA9IERlZmF1bHRDbGFzc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3Q29uZmlnLCB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uZmlnID0gTmVvLmNyZWF0ZShuZXdDb25maWcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnVHlwZSA9PT0gJ05lb0luc3RhbmNlJykge1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZXM/Lmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vbihkZWZhdWx0VmFsdWVzLmxpc3RlbmVycylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWdcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKENsYXNzU3lzdGVtKTtcbiIsIi8qKlxuICogQXBwZW5kIGFyZ3MgaW5zdGVhZCBvZiBwcmVwZW5kaW5nIHRoZW1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRBcHBlbmQoZm4sIHNjb3BlKSB7XG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zbGljZSgyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuY29uY2F0KGFyZ3MpKVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBzY29wZVxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5PTMwMFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyKGNhbGxiYWNrLCBzY29wZSwgZGVsYXk9MzAwKSB7XG4gICAgbGV0IHRpbWVvdXRJZDtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIC8vIGNhbGxiYWNrIGludm9jYXRpb24gY29tZXMgXCJkZWxheVwiIG1zIGFmdGVyIHRoZSBsYXN0IGNhbGwgdG8gd3JhcHBlclxuICAgICAgICAvLyBzbyBjYW5jZWwgYW55IHBlbmRpbmcgaW52b2NhdGlvbi5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG5cbiAgICAgICAgd3JhcHBlci5pc1BlbmRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGltZW91dElkID0gMDtcbiAgICAgICAgICAgIHdyYXBwZXIuaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShzY29wZSwgYXJncylcbiAgICAgICAgfSwgZGVsYXkpXG4gICAgfTtcblxuICAgIHdyYXBwZXIuY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICB3cmFwcGVyLmlzUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKVxuICAgIH07XG5cbiAgICByZXR1cm4gd3JhcHBlclxufVxuXG4vKipcbiAqIEludGVuZGVkIGZvciBmdW5jdGlvbnMgd2l0aCAxIHBhcmFtIHdoZXJlIHRoZSBpbnRlcmNlcHRvciBjYW4gY2hhbmdlIHRoZSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtTdHJpbmd9IHRhcmdldE1ldGhvZE5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGludGVyY2VwdEZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGU9dGFyZ2V0XG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnRlcmNlcHRvcih0YXJnZXQsIHRhcmdldE1ldGhvZE5hbWUsIGludGVyY2VwdEZ1bmN0aW9uLCBzY29wZSkge1xuICAgIGxldCB0YXJnZXRNZXRob2QgPSB0YXJnZXRbdGFyZ2V0TWV0aG9kTmFtZV07XG5cbiAgICByZXR1cm4gKHRhcmdldFt0YXJnZXRNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRNZXRob2QuY2FsbCh0YXJnZXQsIGludGVyY2VwdEZ1bmN0aW9uLmNhbGwoc2NvcGUgfHwgdGFyZ2V0LCB2YWx1ZSkpXG4gICAgfSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHRhcmdldFxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlcXVlbmNlKHRhcmdldCwgbWV0aG9kTmFtZSwgZm4sIHNjb3BlKSB7XG4gICAgbGV0IG1ldGhvZCA9IHRhcmdldFttZXRob2ROYW1lXSB8fCBOZW8uZW1wdHlGbjtcblxuICAgIHJldHVybiAodGFyZ2V0W21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIG1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUgfHwgdGhpcywgYXJndW1lbnRzKVxuICAgIH0pXG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gc2NvcGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheT0zMDBcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGNhbGxiYWNrLCBzY29wZSwgZGVsYXk9MzAwKSB7XG4gICAgbGV0IGRlYm91bmNlVGltZXI7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICAvLyBsZWFkaW5nIGVkZ2UgPT4gdHJpZ2dlciB0aGUgZmlyc3QgY2FsbCByaWdodCBhd2F5XG4gICAgICAgIGlmICghTmVvLmlzTnVtYmVyKGRlYm91bmNlVGltZXIpKSB7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBzY29wZSAoaW5zdGFuY2UpIGRpZCBub3QgZ2V0IGRlc3Ryb3llZCB5ZXRcbiAgICAgICAgICAgIHNjb3BlPy5pZCAmJiBjYWxsYmFjay5hcHBseShzY29wZSwgYXJncyk7XG5cbiAgICAgICAgICAgIC8vIHdlIHN0aWxsIHdhbnQgdG8gc3RhcnQgYSB0aW1lciB0byBkZWxheSB0aGUgMm5kKyB1cGRhdGVcbiAgICAgICAgICAgIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtkZWJvdW5jZVRpbWVyID0gbnVsbH0sICBkZWxheSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVyKTtcblxuICAgICAgICAgICAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHNjb3BlIChpbnN0YW5jZSkgZGlkIG5vdCBnZXQgZGVzdHJveWVkIHlldFxuICAgICAgICAgICAgICAgIHNjb3BlPy5pZCAmJiBjYWxsYmFjay5hcHBseShzY29wZSwgYXJncyk7XG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge2RlYm91bmNlVGltZXIgPSBudWxsfSwgIGRlbGF5KVxuICAgICAgICAgICAgfSwgIGRlbGF5KVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBpbnRlcmNlcHRvciBjYW4gcHJldmVudCB0aGUgdGFyZ2V0TWV0aG9kIGZyb20gZ2V0dGluZyBleGVjdXRlZCBpbiBjYXNlIGl0IHJldHVybnMgZmFsc2UuXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0TWV0aG9kTmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW50ZXJjZXB0RnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZT10YXJnZXRcbiAqIEBwYXJhbSB7Kn0gcHJldmVudGVkUmV0dXJuVmFsdWU9bnVsbCBUaGUgdmFsdWUgdG8gcmV0dXJuIGluIGNhc2UgdGhlIGludGVyY2VwdEZ1bmN0aW9uIHJldHVybnMgZmFsc2VcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyY2VwdCh0YXJnZXQsIHRhcmdldE1ldGhvZE5hbWUsIGludGVyY2VwdEZ1bmN0aW9uLCBzY29wZSwgcHJldmVudGVkUmV0dXJuVmFsdWU9bnVsbCkge1xuICAgIGxldCB0YXJnZXRNZXRob2QgPSB0YXJnZXRbdGFyZ2V0TWV0aG9kTmFtZV07XG5cbiAgICByZXR1cm4gKHRhcmdldFt0YXJnZXRNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKGludGVyY2VwdEZ1bmN0aW9uLmFwcGx5KHNjb3BlIHx8IHRhcmdldCwgYXJndW1lbnRzKSA9PT0gZmFsc2UpXG4gICAgICAgICAgICA/IHByZXZlbnRlZFJldHVyblZhbHVlXG4gICAgICAgICAgICA6IHRhcmdldE1ldGhvZC5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cylcbiAgICB9KVxufVxuXG4vKipcbiAqIExvY2F0ZSBhIGNhbGxhYmxlIGZ1bmN0aW9uIGJ5IG5hbWUgaW4gdGhlIHBhc3NlZCBzY29wZS5cbiAqXG4gKiBJZiB0aGUgbmFtZSBzdGFydHMgd2l0aCAndXAuJywgdGhlIHBhcmVudCBDb21wb25lbnQgY2hhaW4gaXMgc2VhcmNoZWQuXG4gKlxuICogVGhpcyBpcyB1c2VkIGJ5IG1hbmFnZXIuRG9tRXZlbnRzICYgY29yZS5PYnNlcnZhYmxlLmZpcmUgYW5kIGJ5ICdoYW5kbGVyJyBmdW5jdGlvbiBjYWxscyB0byByZXNvbHZlXG4gKiBzdHJpbmcgZnVuY3Rpb24gbmFtZXMgaW4gdGhlIENvbXBvbmVudCdzIG93biBoaWVyYXJjaHkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gZm4gQSBmdW5jdGlvbiwgb3IgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiB0byBmaW5kIGluIHRoZSBwYXNzZWQgc2NvcGUgb2JqZWN0L1xuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlPXRoaXMgVGhlIHNjb3BlIHRvIGZpbmQgdGhlIGZ1bmN0aW9uIGluIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZy5cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQ2FsbGJhY2soZm4sIHNjb3BlPXRoaXMpIHtcbiAgICBpZiAoTmVvLmlzU3RyaW5nKGZuKSkge1xuICAgICAgICBpZiAoIXNjb3BlW2ZuXSAmJiBmbi5zdGFydHNXaXRoKCd1cC4nKSkge1xuICAgICAgICAgICAgZm4gPSBmbi5zbGljZSgzKTtcbiAgICAgICAgICAgIHdoaWxlICghc2NvcGVbZm5dICYmIChzY29wZSA9IHNjb3BlLnBhcmVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2NvcGUgPSBzY29wZS5nZXRDb250cm9sbGVyPy4oKT8uZ2V0SGFuZGxlclNjb3BlKGZuLCBudWxsKSB8fCBzY29wZVxuICAgICAgICB9XG5cbiAgICAgICAgZm4gPSBzY29wZVtmbl1cbiAgICB9XG5cbiAgICByZXR1cm4ge2ZuLCBzY29wZX1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBzY29wZVxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5PTMwMFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIHNjb3BlLCBkZWxheT0zMDApIHtcbiAgICBsZXQgbGFzdFJhbkRhdGUsIHRpbWVvdXRJZDtcblxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIGlmICghbGFzdFJhbkRhdGUpIHtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHNjb3BlIChpbnN0YW5jZSkgZGlkIG5vdCBnZXQgZGVzdHJveWVkIHlldFxuICAgICAgICAgICAgc2NvcGU/LmlkICYmIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcblxuICAgICAgICAgICAgbGFzdFJhbkRhdGUgPSBEYXRlLm5vdygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKVxuXG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIGxhc3RSYW5EYXRlKSA+PSBkZWxheSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBzY29wZSAoaW5zdGFuY2UpIGRpZCBub3QgZ2V0IGRlc3Ryb3llZCB5ZXRcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU/LmlkICYmIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcblxuICAgICAgICAgICAgICAgICAgICBsYXN0UmFuRGF0ZSA9IERhdGUubm93KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheSAtIChEYXRlLm5vdygpIC0gbGFzdFJhbkRhdGUpKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuSGFzaEhpc3RvcnlcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSGFzaEhpc3RvcnkgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG9ic2VydmFibGUgPSB0cnVlXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkhhc2hIaXN0b3J5J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5IYXNoSGlzdG9yeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEl0ZW1zPTUwXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1heEl0ZW1zOiA1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3Jpbmcgb25lIHN0YWNrIHBlciB3aW5kb3dJZFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0YWNrcz17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdGFja3M6IHt9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3dpbmRvd0lkXVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZmlyc3Qod2luZG93SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXQoMCwgd2luZG93SWQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt3aW5kb3dJZF1cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldEF0KGluZGV4LCB3aW5kb3dJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGFjayh3aW5kb3dJZClbaW5kZXhdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt3aW5kb3dJZF1cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldENvdW50KHdpbmRvd0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YWNrKHdpbmRvd0lkKS5sZW5ndGhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3dpbmRvd0lkXVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0U3RhY2sod2luZG93SWQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtzdGFja3N9ID0gbWUsXG4gICAgICAgICAgICBzdGFja0lkICA9IHdpbmRvd0lkIHx8IE9iamVjdC5rZXlzKHN0YWNrcylbMF0sXG4gICAgICAgICAgICBzdGFjayAgICA9IHN0YWNrc1tzdGFja0lkXTtcblxuICAgICAgICBpZiAoIXN0YWNrKSB7XG4gICAgICAgICAgICBzdGFja3Nbc3RhY2tJZF0gPSBzdGFjayA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhY2tcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmFwcE5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5oYXNoXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaGFzaFN0cmluZ1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLndpbmRvd0lkXG4gICAgICovXG4gICAgcHVzaChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHt3aW5kb3dJZH0gPSBkYXRhLFxuICAgICAgICAgICAgc3RhY2sgICAgICA9IG1lLmdldFN0YWNrKHdpbmRvd0lkKTtcblxuICAgICAgICBpZiAoc3RhY2tbMF0/Lmhhc2hTdHJpbmcgIT09IGRhdGEuaGFzaFN0cmluZykge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFbd2luZG93SWRdO1xuICAgICAgICAgICAgc3RhY2sudW5zaGlmdChkYXRhKTtcblxuICAgICAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+IG1lLm1heEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywgZGF0YSwgc3RhY2tbMV0gfHwgbnVsbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt3aW5kb3dJZF1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNlY29uZCh3aW5kb3dJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdCgwLCB3aW5kb3dJZClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEhhc2hIaXN0b3J5KTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5Mb2dnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5Mb2dnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkxvZ2dlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIG1pbmltdW0gbGV2ZWwsIHdoaWNoIHlvdSB3YW50IHRvIG91dHB1dC5cbiAgICAgICAgICogQ2hhbmdlIHRoaXMgYXQgYW55IHRpbWUgdXNpbmcgYSB2YWx1ZSBvZiBsb2dMZXZlbHM6IFsnaW5mbycsICdsb2cnLCAnd2FybicsICdlcnJvciddXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBOZW8udXRpbC5Mb2dnZXIubGV2ZWwgPSAnZXJyb3InXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGV2ZWw9J2luZm8nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxldmVsXzogJ2luZm8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09iamVjdH0gbG9nQ2hhclxuICAgICAqL1xuICAgIGxvZ0NoYXJzICA9IHtcbiAgICAgICAgZXJyb3I6ICdFJyxcbiAgICAgICAgaW5mbyA6ICdJJyxcbiAgICAgICAgbG9nICA6ICdMJyxcbiAgICAgICAgd2FybiA6ICdXJ1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbG9yc1xuICAgICAqL1xuICAgIGxvZ0NvbG9ycyA9IHtcbiAgICAgICAgZXJyb3I6ICdpbmRpYW5yZWQnLFxuICAgICAgICBpbmZvIDogJyNhY2FjYWMnLFxuICAgICAgICBsb2cgIDogJyM0NDg4ODgnLFxuICAgICAgICB3YXJuIDogJyM2ZDZkMDAnXG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvZ0xldmVsc1xuICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBsb2dMZXZlbHNcbiAgICAgKi9cbiAgICBsb2dMZXZlbHMgPSBbJ2luZm8nLCAnbG9nJywgJ3dhcm4nLCAnZXJyb3InXVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBhbGlhc2VzXG4gICAgICAgIE5lby5hcHBseUZyb21OcyhOZW8sIG1lLCB7XG4gICAgICAgICAgICBlcnJvciAgIDogJ2Vycm9yJyxcbiAgICAgICAgICAgIGluZm8gICAgOiAnaW5mbycsXG4gICAgICAgICAgICBsb2cgICAgIDogJ2xvZycsXG4gICAgICAgICAgICBsb2dFcnJvcjogJ2xvZ0Vycm9yJyxcbiAgICAgICAgICAgIHdhcm4gICAgOiAnd2FybidcbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgbWUudGltZW91dCg1MCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIU5lby5jb25maWcuZW5hYmxlTG9nc0luUHJvZHVjdGlvbiAmJiBOZW8uY29uZmlnLmVudmlyb25tZW50ID09PSAnZGlzdC9wcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIG1lLndyaXRlID0gTmVvLmVtcHR5Rm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbGV2ZWwgdG8gbnVtYmVyIGJhc2VkIG9uIHBvc2l0aW9uIGluIGxvZ0xldmVsc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGJlZm9yZVNldExldmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dMZXZlbHMuaW5kZXhPZih2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBlcnJvcih2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW50ZXJuYWwgaGVscGVyIHRvIGNhdGNoIGNhbGxlclxuICAgICAqIG5vIGtub3duIG5hdGl2ZSB3YXkgaW4gbW9kZXJuIEpTIHRvIGtub3cgd2hhdCBmaWxlIHRoYXQgdHJpZ2dlcmVkIHRoZSBjdXJyZW50IG1ldGhvZFxuICAgICAqIHRoZXJlZm9yZSB3ZSB1c2UgRXJyb3IsIHdlIGNhbiBnZXQgdGhlIGNhbGxlciBmaWxlIGZyb20gdGhlIHN0YWNrIHRyYWNlIHN0cmluZy5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDYWxsZXIoKSB7XG4gICAgICAgIGxldCBjYWxsZXJfcGF0aCA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGVyciAgICAgICAgID0gbmV3IEVycm9yKCksXG4gICAgICAgICAgICBzdGFja19saW5lcyA9IGVyci5zdGFjay5zcGxpdCgnXFxuJyksXG4gICAgICAgICAgICBmb3VuZF90aGlzICA9IGZhbHNlLFxuICAgICAgICAgICAgaSwgbGluZTtcblxuICAgICAgICBmb3IgKGkgaW4gc3RhY2tfbGluZXMpIHtcbiAgICAgICAgICAgIGxpbmUgPSBzdGFja19saW5lc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFmb3VuZF90aGlzICYmIC9Mb2dnZXJcXC5tanMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZF90aGlzID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmb3VuZF90aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEvTG9nZ2VyXFwubWpzLy50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY2xvc2luZyApXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgICAgICAgID0gbGluZS5yZXBsYWNlKCcpJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHBhcnQgYWZ0ZXIgdGhlIGxhc3QgL1xuICAgICAgICAgICAgICAgICAgICBjYWxsZXJfcGF0aCA9IGxpbmUubWF0Y2goLyhbXlxcL10rKSQvKVsxXS5tYXRjaCgvKFteIF0rKSQvKVsxXTtcblxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsZXJfcGF0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MgPSB0aGlzLnJlc29sdmVBcmdzKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLndyaXRlKGFyZ3MsICdpbmZvJylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGFyZ3MgPSB0aGlzLnJlc29sdmVBcmdzKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLndyaXRlKGFyZ3MsICdsb2cnKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nRXJyb3IoLi4uYXJncykge1xuICAgICAgICBhcmdzID0gdGhpcy5yZXNvbHZlQXJncyguLi5hcmdzKTtcbiAgICAgICAgdGhpcy53cml0ZShhcmdzLCAnZXJyb3InKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db250ZXh0TWVudShkYXRhKSB7XG4gICAgICAgIGxldCB7Y29uZmlnfSA9IE5lbztcblxuICAgICAgICBpZiAoY29uZmlnLmVuYWJsZUNvbXBvbmVudExvZ2dlciAmJiAhKGNvbmZpZy5lbnYgPT09ICdkaXN0L3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5lbmFibGVMb2dzSW5Qcm9kdWN0aW9uKSkge1xuICAgICAgICAgICAgbGV0IGlzR3JvdXBTZXQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ7XG5cbiAgICAgICAgICAgIGRhdGEucGF0aC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoaXRlbS5pZCwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzR3JvdXBTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzR3JvdXBTZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cChpdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcG9uZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpc0dyb3VwU2V0ICYmIGNvbnNvbGUuZ3JvdXBFbmQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaGVscGVyIGZvciBhcmdzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlc29sdmVBcmdzKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IGlkZW50aWZpZXIgPSBhcmdzWzBdLFxuICAgICAgICAgICAgYXJnc09iamVjdCA9IHt9O1xuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKE5lby5pc1N0cmluZyhpZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgICAgIGFyZ3NPYmplY3QubXNnID0gYXJnc1swXVxuICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QoaWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICBhcmdzT2JqZWN0ID0gaWRlbnRpZmllclxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgYXJnc09iamVjdC5tc2cgID0gYXJnc1swXTtcbiAgICAgICAgICAgIGFyZ3NPYmplY3QuZGF0YSA9IGFyZ3Muc2xpY2UoMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcmdzT2JqZWN0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICB3YXJuKC4uLmFyZ3MpIHtcbiAgICAgICAgYXJncyA9IHRoaXMucmVzb2x2ZUFyZ3MoLi4uYXJncyk7XG4gICAgICAgIHRoaXMud3JpdGUoYXJncywgJ3dhcm4nKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE91dHB1dCBtZXRob2RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXJnc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBsZXZlbFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3cml0ZShhcmdzLCBsZXZlbCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5iZWZvcmVTZXRMZXZlbChsZXZlbCkgPCBtZS5sZXZlbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnIycsIGFyZ3MubXNnLCBsZXZlbCk7XG5cbiAgICAgICAgbGV0IGxvZ0NvbG9yID0gbWUubG9nQ29sb3JzW2xldmVsXSxcbiAgICAgICAgICAgIGxvZ0NoYXIgID0gbWUubG9nQ2hhcnNbbGV2ZWxdLFxuICAgICAgICAgICAgYmcgICAgICAgPSBgYmFja2dyb3VuZC1jb2xvcjoke2xvZ0NvbG9yfTsgY29sb3I6IHdoaXRlOyBmb250LXdlaWdodDogOTAwO2AsXG4gICAgICAgICAgICBjb2xvciAgICA9IGBjb2xvcjoke2xvZ0NvbG9yfTtgLFxuICAgICAgICAgICAgbXNnICAgICAgPSBgWyR7bWUuZ2V0Q2FsbGVyKCl9XSAke2FyZ3MubXNnfWA7XG5cbiAgICAgICAgaWYgKGFyZ3MuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgJWMgJHtsb2dDaGFyfSAlYyAke21zZ31gLCBiZywgY29sb3IpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmRhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgJHtsb2dDaGFyfSAlYyAke21zZ31gLCBiZywgY29sb3IpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKExvZ2dlcik7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uL21hbmFnZXIvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLlZEb21cbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVkRvbSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVkRvbSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuVkRvbSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVtb3ZlSWRzPXRydWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjbG9uZWQgdmRvbVxuICAgICAqL1xuICAgIHN0YXRpYyBjbG9uZSh2ZG9tLCByZW1vdmVJZHM9dHJ1ZSkge1xuICAgICAgICBsZXQgY2xvbmUgPSBOZW8uY2xvbmUodmRvbSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUlkcykge1xuICAgICAgICAgICAgZGVsZXRlIGNsb25lLmlkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xvbmUuY24pIHtcbiAgICAgICAgICAgIGNsb25lLmNuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvbmUuY25baW5kZXhdID0gVkRvbS5jbG9uZShpdGVtLCByZW1vdmVJZHMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsb25lXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZXBsYWNlQ29tcG9uZW50UmVmcz10cnVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyZW50Tm9kZV0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICogICAgIHtOdW1iZXJ9IGluZGV4XG4gICAgICogICAgIHtTdHJpbmd9IHBhcmVudElkXG4gICAgICogICAgIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZCh2ZG9tLCBvcHRzLCByZXBsYWNlQ29tcG9uZW50UmVmcz10cnVlLCBpbmRleCwgcGFyZW50Tm9kZSkge1xuICAgICAgICBpbmRleCA9IGluZGV4IHx8IDA7XG4gICAgICAgIG9wdHMgID0gIU5lby5pc1N0cmluZyhvcHRzKSA/IG9wdHMgOiB7aWQ6IG9wdHN9O1xuXG4gICAgICAgIGlmIChyZXBsYWNlQ29tcG9uZW50UmVmcykge1xuICAgICAgICAgICAgdmRvbSA9IFZEb20uZ2V0VmRvbSh2ZG9tKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoaWxkICAgICAgPSBudWxsLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdLFxuICAgICAgICAgICAgc3R5bGVNYXRjaCA9IHRydWUsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSB2ZG9tLmNuPy5sZW5ndGgsXG4gICAgICAgICAgICBvcHRzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMob3B0cyksXG4gICAgICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgIHN1YkNoaWxkO1xuXG4gICAgICAgIG9wdHNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2ZG9tLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nscyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2ZG9tW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodmRvbVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IGVpdGhlciBzZWFyY2ggdGhlIHZkb20gYXJyYXkgZm9yIGFsbCBrZXlzIG9yIGNvbXBhcmUgaWYgdGhlIGFycmF5cyBhcmUgZXF1YWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaW5kOiBjbHMgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgdGFyZ2V0ICYgc291cmNlIHR5cGVzIG9mIEFycmF5cycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmRvbVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZG9tW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3QodmRvbVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbc3R5bGVLZXksIHN0eWxlVmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZkb21ba2V5XS5oYXNPd25Qcm9wZXJ0eShzdHlsZUtleSkgJiYgdmRvbVtrZXldW3N0eWxlS2V5XSA9PT0gc3R5bGVWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZDogc3R5bGUgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgbWl4ZWQgdGFyZ2V0ICYgc291cmNlIHR5cGVzIChPYmplY3QgVlMgU3RyaW5nKScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IG9wdHNMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW5kZXgsIHBhcmVudE5vZGUsIHZkb219XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmRvbS5jbikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2ZG9tLmNuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YkNoaWxkID0gVkRvbS5maW5kKHZkb20uY25baV0sIG9wdHMsIHJlcGxhY2VDb21wb25lbnRSZWZzLCBpLCB2ZG9tKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IHN1YkNoaWxkLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IHN1YkNoaWxkLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmRvbSAgICAgIDogc3ViQ2hpbGQudmRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCBmb3IgZmluZCh2ZG9tLCB7ZmxhZzogZmxhZ30pO1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZsYWcgVGhlIGZsYWcgcmVmZXJlbmNlIHNwZWNpZmllZCBvbiB0aGUgdGFyZ2V0IHZkb20gY2hpbGQgbm9kZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QnlGbGFnKHZkb20sIGZsYWcpIHtcbiAgICAgICAgcmV0dXJuIFZEb20uZmluZCh2ZG9tLCB7ZmxhZ30pPy52ZG9tXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0gdmRvbVxuICAgICAqIEBwYXJhbSBbY2hpbGRJZHM9W11dXG4gICAgICogQHJldHVybnMge0FycmF5fSBjaGlsZElkc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDaGlsZElkcyh2ZG9tLCBjaGlsZElkcz1bXSkge1xuICAgICAgICB2ZG9tID0gVkRvbS5nZXRWZG9tKHZkb20pO1xuXG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdmRvbT8uY24gfHwgW107XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRJZHMucHVzaChjaGlsZE5vZGUuaWQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkSWRzID0gVkRvbS5nZXRDaGlsZElkcyhjaGlsZE5vZGUsIGNoaWxkSWRzKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRJZHNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29sdW1uTm9kZXModmRvbSwgaW5kZXgpIHtcbiAgICAgICAgdmRvbSA9IFZEb20uZ2V0VmRvbSh2ZG9tKTtcblxuICAgICAgICBsZXQgY29sdW1uTm9kZXMgPSBbXTtcblxuICAgICAgICB2ZG9tLmNuPy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBpZiAocm93LmNuPy5baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uTm9kZXMucHVzaChyb3cuY25baW5kZXhdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBjb2x1bW5Ob2Rlc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb2x1bW5Ob2Rlc0lkcyh2ZG9tLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gVkRvbS5nZXRDb2x1bW5Ob2Rlcyh2ZG9tLCBpbmRleCkubWFwKGUgPT4gZS5pZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmbGFnXG4gICAgICogQHBhcmFtIHtBcnJheX0gW21hdGNoQXJyYXldXG4gICAgICogQHJldHVybnMge0FycmF5fSBhbiBhcnJheSBvZiB2ZG9tIG5vZGVzIHdoaWNoIG1hdGNoIHRoZSBmbGFnXG4gICAgICovXG4gICAgc3RhdGljIGdldEZsYWdzKHZkb20sIGZsYWcsIG1hdGNoQXJyYXkpIHtcbiAgICAgICAgdmRvbSA9IFZEb20uZ2V0VmRvbSh2ZG9tKTtcblxuICAgICAgICBpZiAoIW1hdGNoQXJyYXkpIHtcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHZkb20uZmxhZyA9PT0gZmxhZykge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh2ZG9tKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgKHZkb20/LmNuIHx8IFtdKS5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmZsYWcgPT09IGZsYWcpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2goY2hpbGROb2RlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gVkRvbS5nZXRGbGFncyhjaGlsZE5vZGUsIGZsYWcsIG1hdGNoQXJyYXkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtYXRjaEFycmF5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRvcExldmVsPXRydWUgSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UGFyZW50Tm9kZXModmRvbSwgaWQsIHRvcExldmVsPXRydWUpIHtcbiAgICAgICAgdmRvbSA9IFZEb20uZ2V0VmRvbSh2ZG9tKTtcblxuICAgICAgICBsZXQgcGFyZW50cyA9IG51bGwsXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSB2ZG9tLmNuPy5sZW5ndGggfHwgMDtcblxuICAgICAgICBpZiAodmRvbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcGFyZW50cyA9IFZEb20uZ2V0UGFyZW50Tm9kZXModmRvbS5jbltpXSwgaWQsIGZhbHNlKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudHMpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2godmRvbS5jbltpXSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3BMZXZlbCAmJiBwYXJlbnRzKSB7XG4gICAgICAgICAgICBwYXJlbnRzLnB1c2godmRvbSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXQgdXNpbmcgbWFuYWdlci5Db21wb25lbnQgdG8gcmVwbGFjZSB2ZG9tIHJlZmVyZW5jZXMgaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRWZG9tKHZkb20pIHtcbiAgICAgICAgaWYgKHZkb20uY29tcG9uZW50SWQpIHtcbiAgICAgICAgICAgIHZkb20gPSBDb21wb25lbnRNYW5hZ2VyLmdldCh2ZG9tLmNvbXBvbmVudElkKS52ZG9tXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBhZnRlciBhIHRhcmdldE5vZGUgaW5zaWRlIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb20gVGhlIHZkb20gdHJlZSBjb250YWluaW5nIHRoZSB0YXJnZXROb2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVUb0luc2VydCBUaGUgbmV3IHZkb20gdG8gaW5zZXJ0XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB0YXJnZXROb2RlSWQgRWl0aGVyIGEgdmRvbSBub2RlIG9yIGEgdmRvbSBub2RlIGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluc2VydEFmdGVyTm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCkge1xuICAgICAgICByZXR1cm4gVkRvbS5pbnNlcnROb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkLCBmYWxzZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYSBnaXZlbiBub2RlVG9JbnNlcnQgYmVmb3JlIGEgdGFyZ2V0Tm9kZSBpbnNpZGUgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbSBUaGUgdmRvbSB0cmVlIGNvbnRhaW5pbmcgdGhlIHRhcmdldE5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZVRvSW5zZXJ0IFRoZSBuZXcgdmRvbSB0byBpbnNlcnRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHRhcmdldE5vZGVJZCBFaXRoZXIgYSB2ZG9tIG5vZGUgb3IgYSB2ZG9tIG5vZGUgaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0QmVmb3JlTm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCkge1xuICAgICAgICByZXR1cm4gVkRvbS5pbnNlcnROb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkLCB0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBiZWZvcmUgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zZXJ0QmVmb3JlIHRydWUgaW5zZXJ0cyB0aGUgbmV3IG5vZGUgYXQgdGhlIHNhbWUgaW5kZXgsIGluZGV4KzEgb3RoZXJ3aXNlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIGluc2VydEJlZm9yZSkge1xuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHRhcmdldE5vZGVJZCkpIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGVJZCA9IHRhcmdldE5vZGVJZC5pZFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSBWRG9tLmZpbmQodmRvbSwgdGFyZ2V0Tm9kZUlkKSxcbiAgICAgICAgICAgIGluZGV4O1xuXG4gICAgICAgIGlmICh0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICBpbmRleCA9IGluc2VydEJlZm9yZSA/IHRhcmdldE5vZGUuaW5kZXggOiB0YXJnZXROb2RlLmluZGV4ICsgMTtcbiAgICAgICAgICAgIHRhcmdldE5vZGUucGFyZW50Tm9kZS5jbi5zcGxpY2UoaW5kZXgsIDAsIG5vZGVUb0luc2VydCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCAmIHJlbW92ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlVmRvbUNoaWxkKHZkb20sIG9wdHMpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gVkRvbS5maW5kKHZkb20sIG9wdHMpO1xuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5jbi5zcGxpY2UoY2hpbGQuaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGEgY2hpbGQgbm9kZSBpbnNpZGUgYSB2ZG9tIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5ld0NoaWxkTm9kZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZXBsYWNlVmRvbUNoaWxkKHZkb20sIGlkLCBuZXdDaGlsZE5vZGUpIHtcbiAgICAgICAgdmRvbSA9IFZEb20uZ2V0VmRvbSh2ZG9tKTtcblxuICAgICAgICBsZXQgY24gID0gdmRvbS5jbiB8fCBbXSxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBjbi5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZkb20uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcGxhY2VWZG9tQ2hpbGQ6IHRhcmdldCBpZCBtYXRjaGVzIHRoZSByb290IHZub2RlIGlkOiAnICsgaWQpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjbltpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjbltpXSA9IG5ld0NoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVkRvbS5yZXBsYWNlVmRvbUNoaWxkKGNoaWxkTm9kZSwgaWQsIG5ld0NoaWxkTm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lby52ZG9tLkhlbHBlciB3aWxsIGNyZWF0ZSBpZHMgZm9yIGVhY2ggdm5vZGUgd2hpY2ggZG9lcyBub3QgYWxyZWFkeSBoYXZlIG9uZSxcbiAgICAgKiBzbyB3ZSBuZWVkIHRvIHN5bmMgdGhlbSBpbnRvIHRoZSB2ZG9tLlxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IHZub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlPWZhbHNlIFRoZSBmb3JjZSBwYXJhbSB3aWxsIGVuZm9yY2Ugb3ZlcndyaXRpbmcgZGlmZmVyZW50IGlkc1xuICAgICAqL1xuICAgIHN0YXRpYyBzeW5jVmRvbUlkcyh2bm9kZSwgdmRvbSwgZm9yY2U9ZmFsc2UpIHtcbiAgICAgICAgaWYgKHZub2RlICYmIHZkb20pIHtcbiAgICAgICAgICAgIHZkb20gPSBWRG9tLmdldFZkb20odmRvbSk7XG5cbiAgICAgICAgICAgIGxldCBjaGlsZE5vZGVzID0gdmRvbS5jbixcbiAgICAgICAgICAgICAgICBjbiwgaSwgbGVuO1xuXG4gICAgICAgICAgICBpZiAoZm9yY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodm5vZGUuaWQgJiYgdmRvbS5pZCAhPT0gdm5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmRvbS5pZCA9IHZub2RlLmlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gY2hhbmdlIHZkb20gaWRzIGluIGNhc2UgdGhlcmUgaXMgbm90IGFscmVhZHkgYW4gb3duIGlkXG4gICAgICAgICAgICAgICAgLy8gKHRoaW5rIG9mIGFkZGluZyAmIHJlbW92aW5nIG5vZGVzIGluIHBhcmFsbGVsKVxuICAgICAgICAgICAgICAgIGlmICghdmRvbS5pZCAmJiB2bm9kZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICB2ZG9tLmlkID0gdm5vZGUuaWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgY24gID0gY2hpbGROb2Rlcy5tYXAoaXRlbSA9PiBWRG9tLmdldFZkb20oaXRlbSkpO1xuICAgICAgICAgICAgICAgIGNuICA9IGNuLmZpbHRlcihpdGVtID0+IGl0ZW0ucmVtb3ZlRG9tICE9PSB0cnVlKTtcbiAgICAgICAgICAgICAgICBpICAgPSAwO1xuICAgICAgICAgICAgICAgIGxlbiA9IGNuPy5sZW5ndGggfHwgMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZEb20uc3luY1Zkb21JZHModm5vZGUuY2hpbGROb2Rlc1tpXSwgY25baV0sIGZvcmNlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhWRG9tKTtcbiIsImltcG9ydCBCYXNlICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlci9Db21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuVk5vZGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVk5vZGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLlZOb2RlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WTm9kZSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdm5vZGUgY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmVudE5vZGVdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqICAgICB7TnVtYmVyfSBpbmRleFxuICAgICAqICAgICB7U3RyaW5nfSBwYXJlbnRJZFxuICAgICAqICAgICB7T2JqZWN0fSB2bm9kZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kKHZub2RlLCBvcHRzLCBpbmRleCwgcGFyZW50Tm9kZSkge1xuICAgICAgICB2bm9kZSA9IFZOb2RlLmdldFZub2RlKHZub2RlKTtcblxuICAgICAgICBpbmRleCA9IGluZGV4IHx8IDA7XG4gICAgICAgIG9wdHMgID0gdHlwZW9mIG9wdHMgIT09ICdzdHJpbmcnID8gb3B0cyA6IHtpZDogb3B0c307XG5cbiAgICAgICAgbGV0IGF0dHJNYXRjaCAgPSB0cnVlLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdLFxuICAgICAgICAgICAgc3R5bGVNYXRjaCA9IHRydWUsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSB2bm9kZS5jaGlsZE5vZGVzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIG9wdHNBcnJheSwgb3B0c0xlbmd0aCwgc3ViQ2hpbGQ7XG5cbiAgICAgICAgb3B0c0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKG9wdHMpO1xuICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aDtcblxuICAgICAgICBvcHRzQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodm5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2F0dHJLZXksIGF0dHJWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodm5vZGVba2V5XS5oYXNPd25Qcm9wZXJ0eShhdHRyS2V5KSAmJiB2bm9kZVtrZXldW2F0dHJLZXldID09PSBhdHRyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2ggPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZub2RlW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzQXJyYXkodmFsdWUpICYmIE5lby5pc0FycmF5KHZub2RlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogZWl0aGVyIHNlYXJjaCB0aGUgdm5vZGUgYXJyYXkgZm9yIGFsbCBrZXlzIG9yIGNvbXBhcmUgaWYgdGhlIGFycmF5cyBhcmUgZXF1YWwuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaW5kOiBjbHMgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgdGFyZ2V0ICYgc291cmNlIHR5cGVzIG9mIEFycmF5cycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3N0eWxlS2V5LCBzdHlsZVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2bm9kZVtrZXldLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSAmJiB2bm9kZVtrZXldW3N0eWxlS2V5XSA9PT0gc3R5bGVWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBvcHRzTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge2luZGV4LCBwYXJlbnROb2RlLCB2bm9kZX1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHN1YkNoaWxkID0gVk5vZGUuZmluZCh2bm9kZS5jaGlsZE5vZGVzW2ldLCBvcHRzLCBpLCB2bm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJDaGlsZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IGlkXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSBjaGlsZCB2bm9kZSBvciBudWxsXG4gICAgICovXG4gICAgc3RhdGljIGdldEJ5SWQodm5vZGUsIGlkKSB7XG4gICAgICAgIHZub2RlID0gVk5vZGUuZ2V0Vm5vZGUodm5vZGUpO1xuXG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUuY2hpbGROb2RlcyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgY2hpbGROb2RlO1xuXG4gICAgICAgIGlmICh2bm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2bm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gVk5vZGUuZ2V0Vm5vZGUoY2hpbGROb2Rlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBWTm9kZS5nZXRCeUlkKGNoaWxkTm9kZSwgaWQpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZub2RlLCBleGNsdWRpbmcgY29tcG9uZW50IHJlZmVyZW5jZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBjaGlsZElkcz1bXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmdbXX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzPVtdKSB7XG4gICAgICAgIHZub2RlPy5jaGlsZE5vZGVzPy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkICYmICFjaGlsZE5vZGUuY29tcG9uZW50SWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZElkcy5wdXNoKGNoaWxkTm9kZS5pZClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVk5vZGUuZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSWRzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXQgdXNpbmcgbWFuYWdlci5Db21wb25lbnQgdG8gcmVwbGFjZSB2bm9kZSByZWZlcmVuY2VzIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGdldFZub2RlKHZub2RlKSB7XG4gICAgICAgIGlmICh2bm9kZS5jb21wb25lbnRJZCkge1xuICAgICAgICAgICAgdm5vZGUgPSBDb21wb25lbnRNYW5hZ2VyLmdldCh2bm9kZS5jb21wb25lbnRJZCkudm5vZGVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2bm9kZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjaGlsZCB2bm9kZSBpbnNpZGUgYSB2bm9kZSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVDaGlsZFZub2RlKHZub2RlLCBpZCkge1xuICAgICAgICB2bm9kZSA9IFZOb2RlLmdldFZub2RlKHZub2RlKTtcblxuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkTm9kZXMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92ZUNoaWxkVm5vZGU6IHRhcmdldCBpZCBtYXRjaGVzIHRoZSByb290IHZub2RlIGlkOiAnICsgaWQpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBWTm9kZS5nZXRWbm9kZShjaGlsZE5vZGVzW2ldKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVk5vZGUucmVtb3ZlQ2hpbGRWbm9kZShjaGlsZE5vZGUsIGlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdDaGlsZFZub2RlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlcGxhY2VkXG4gICAgICovXG4gICAgc3RhdGljIHJlcGxhY2VDaGlsZFZub2RlKHZub2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkge1xuICAgICAgICB2bm9kZSA9IFZOb2RlLmdldFZub2RlKHZub2RlKTtcblxuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkTm9kZXMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcGxhY2VDaGlsZFZub2RlOiB0YXJnZXQgaWQgbWF0Y2hlcyB0aGUgcm9vdCB2bm9kZSBpZDogJyArIGlkKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gVk5vZGUuZ2V0Vm5vZGUoY2hpbGROb2Rlc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1tpXSA9IG5ld0NoaWxkVm5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFZOb2RlLnJlcGxhY2VDaGlsZFZub2RlKGNoaWxkTm9kZSwgaWQsIG5ld0NoaWxkVm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoVk5vZGUpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyBmcm9tICcuL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMnO1xuXG4vKipcbiAqIFRoZSBhYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB0aGUgQXBwLCBEYXRhICYgVkRvbSB3b3JrZXJcbiAqIEBjbGFzcyBOZW8ud29ya2VyLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBhYnN0cmFjdFxuICovXG5jbGFzcyBXb3JrZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9W09ic2VydmFibGUsUmVtb3RlTWV0aG9kQWNjZXNzXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBjaGFubmVsUG9ydHM9bnVsbFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjaGFubmVsUG9ydHMgPSBudWxsXG4gICAgLyoqXG4gICAgICogT25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0Nvbm5lY3RlZD1mYWxzZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpc0Nvbm5lY3RlZCA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNTaGFyZWRXb3JrZXI9ZmFsc2VcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaXNTaGFyZWRXb3JrZXIgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIE9ubHkgbmVlZGVkIGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gcG9ydHM9bnVsbFxuICAgICAqL1xuICAgIHBvcnRzID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB3b3JrZXJJZD1udWxsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHdvcmtlcklkID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGd0ID0gZ2xvYmFsVGhpcztcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7XG4gICAgICAgICAgICBjaGFubmVsUG9ydHMgIDoge30sXG4gICAgICAgICAgICBpc1NoYXJlZFdvcmtlcjogZ3QudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgU2hhcmVkV29ya2VyR2xvYmFsU2NvcGVdJyxcbiAgICAgICAgICAgIHBvcnRzICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgIHByb21pc2VzICAgICAgOiB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIGd0Lm9uY29ubmVjdCA9IG1lLm9uQ29ubmVjdGVkLmJpbmQobWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBndC5vbm1lc3NhZ2UgPSBtZS5vbk1lc3NhZ2UuYmluZChtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyID0gbWU7XG4gICAgICAgIE5lby53b3JrZXJJZCAgICAgID0gbWUud29ya2VySWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbnRyeSBwb2ludCBmb3IgZGVkaWNhdGVkIGFuZCBzaGFyZWQgd29ya2Vyc1xuICAgICAqL1xuICAgIGFmdGVyQ29ubmVjdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQb3J0KG9wdHMpIHtcbiAgICAgICAgbGV0IHJldHVyblBvcnQgPSBudWxsLFxuICAgICAgICAgICAgaGFzTWF0Y2g7XG5cbiAgICAgICAgdGhpcy5wb3J0cy5mb3JFYWNoKHBvcnQgPT4ge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHBvcnRba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVyblBvcnQgPSBwb3J0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXR1cm5Qb3J0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSByZWxldmFudCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYXN5bmMgb25Db25uZWN0KGRhdGEpIHtcbiAgICAgICAgLy8gc2hvcnQgZGVsYXkgdG8gZW5zdXJlIGFwcCBWQ3MgYXJlIGluIHBsYWNlXG4gICAgICAgIGF3YWl0IHRoaXMudGltZW91dCgxMCk7XG5cbiAgICAgICAgbGV0IHthcHBOYW1lLCB3aW5kb3dJZH0gPSBkYXRhO1xuICAgICAgICB0aGlzLmZpcmUoJ2Nvbm5lY3QnLCB7YXBwTmFtZSwgd2luZG93SWR9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgcmVsZXZhbnQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgICAqL1xuICAgIG9uQ29ubmVjdGVkKGUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGlkID0gTmVvLmdldElkKCdwb3J0Jyk7XG5cbiAgICAgICAgbWUuaXNDb25uZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIG1lLnBvcnRzLnB1c2goe1xuICAgICAgICAgICAgYXBwTmFtZSA6IG51bGwsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHBvcnQgICAgOiBlLnBvcnRzWzBdLFxuICAgICAgICAgICAgd2luZG93SWQ6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucG9ydHNbbWUucG9ydHMubGVuZ3RoIC0gMV0ucG9ydC5vbm1lc3NhZ2UgPSBtZS5vbk1lc3NhZ2UuYmluZChtZSk7XG5cbiAgICAgICAgLy8gY29yZS5CYXNlOiBpbml0UmVtb3RlKCkgc3Vic2NyaWJlcyB0byB0aGlzIGV2ZW50IGZvciB0aGUgU2hhcmVkV29ya2VycyBjb250ZXh0XG4gICAgICAgIG1lLmZpcmUoJ2Nvbm5lY3RlZCcpO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3dvcmtlckNvbnN0cnVjdGVkJywgcG9ydDogaWR9KTtcblxuICAgICAgICBtZS5hZnRlckNvbm5lY3QoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2UoJ21haW4nLCB7YWN0aW9uOiAnd29ya2VyQ29uc3RydWN0ZWQnfSk7XG4gICAgICAgICAgICBtZS5hZnRlckNvbm5lY3QoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSByZWxldmFudCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25EaXNjb25uZWN0KGRhdGEpIHtcbiAgICAgICAgbGV0IHthcHBOYW1lLCB3aW5kb3dJZH0gPSBkYXRhO1xuICAgICAgICB0aGlzLmZpcmUoJ2Rpc2Nvbm5lY3QnLCB7YXBwTmFtZSwgd2luZG93SWR9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25NZXNzYWdlKGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtkYXRhfSAgICAgICAgICAgID0gZSxcbiAgICAgICAgICAgIHthY3Rpb24sIHJlcGx5SWR9ID0gZGF0YSxcbiAgICAgICAgICAgIHByb21pc2U7XG5cbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBhY3Rpb24gaXMgbWlzc2luZzogJyArIGRhdGEuaWQpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uICE9PSAncmVwbHknKSB7XG4gICAgICAgICAgICBtZVsnb24nICsgTmVvLmNhcGl0YWxpemUoYWN0aW9uKV0oZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvbWlzZSA9IGFjdGlvbiA9PT0gJ3JlcGx5JyAmJiBtZS5wcm9taXNlc1tyZXBseUlkXSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZGF0YS5kYXRhKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YS5kYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgbWUucHJvbWlzZXNbcmVwbHlJZF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblBpbmcobXNnKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZShtc2csIHtvcmlnaW5Nc2c6IG1zZ30pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSByZWxldmFudCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbXNnLmFwcE5hbWVcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyQXBwKG1zZykge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHthcHBOYW1lfSA9IG1zZyxcbiAgICAgICAgICAgIHBvcnQ7XG5cbiAgICAgICAgZm9yIChwb3J0IG9mIG1lLnBvcnRzKSB7XG4gICAgICAgICAgICBpZiAoIXBvcnQuYXBwTmFtZSkge1xuICAgICAgICAgICAgICAgIHBvcnQuYXBwTmFtZSA9IGFwcE5hbWU7XG4gICAgICAgICAgICAgICAgbWUub25Db25uZWN0KHthcHBOYW1lLCB3aW5kb3dJZDogcG9ydC53aW5kb3dJZH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25SZWdpc3Rlck5lb0NvbmZpZyhtc2cpIHtcbiAgICAgICAgTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge3dpbmRvd0lkfSA9IG1zZy5kYXRhLFxuICAgICAgICAgICAgcG9ydDtcblxuICAgICAgICBmb3IgKHBvcnQgb2YgbWUucG9ydHMpIHtcbiAgICAgICAgICAgIGlmICghcG9ydC53aW5kb3dJZCkge1xuICAgICAgICAgICAgICAgIHBvcnQud2luZG93SWQgPSB3aW5kb3dJZDtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihOZW8uY29uZmlnLCBtc2cuZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lLnNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSxcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZT8uaWQ7XG5cbiAgICAgICAgICAgIGlmICghbXNnSWQpIHtcbiAgICAgICAgICAgICAgICAvLyBhIHdpbmRvdyBnb3QgY2xvc2VkIGFuZCB0aGUgbWVzc2FnZSBwb3J0IG5vIGxvbmdlciBleGlzdCAoU2hhcmVkV29ya2VycylcbiAgICAgICAgICAgICAgICByZWplY3QoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5wcm9taXNlc1ttc2dJZF0gPSB7cmVqZWN0LCByZXNvbHZlfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgY2FudmFzLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7TmVvLndvcmtlci5NZXNzYWdlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xuICAgICAgICBvcHRzLmRlc3RpbmF0aW9uID0gZGVzdDtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbWVzc2FnZSwgcG9ydCwgcG9ydE9iamVjdDtcblxuICAgICAgICBpZiAobWUuY2hhbm5lbFBvcnRzW2Rlc3RdKSB7XG4gICAgICAgICAgICBwb3J0ID0gbWUuY2hhbm5lbFBvcnRzW2Rlc3RdXG4gICAgICAgIH0gZWxzZSBpZiAoIW1lLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICBwb3J0ID0gZ2xvYmFsVGhpc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdHMucG9ydCkge1xuICAgICAgICAgICAgICAgIHBvcnQgPSBtZS5nZXRQb3J0KHtpZDogb3B0cy5wb3J0fSkucG9ydFxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRzLndpbmRvd0lkKSB7XG4gICAgICAgICAgICAgICAgcG9ydE9iamVjdCA9IG1lLmdldFBvcnQoe3dpbmRvd0lkOiBvcHRzLndpbmRvd0lkfSk7XG4gICAgICAgICAgICAgICAgcG9ydCAgICAgICA9IHBvcnRPYmplY3Q/LnBvcnQ7XG5cbiAgICAgICAgICAgICAgICBvcHRzLnBvcnQgPSBwb3J0T2JqZWN0Py5pZFxuICAgICAgICAgICAgfSAgZWxzZSBpZiAob3B0cy5hcHBOYW1lKSB7XG4gICAgICAgICAgICAgICAgcG9ydE9iamVjdCA9IG1lLmdldFBvcnQoe2FwcE5hbWU6IG9wdHMuYXBwTmFtZX0pO1xuICAgICAgICAgICAgICAgIHBvcnQgICAgICAgPSBwb3J0T2JqZWN0Py5wb3J0O1xuXG4gICAgICAgICAgICAgICAgb3B0cy5wb3J0ID0gcG9ydE9iamVjdD8uaWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9IG1lLnBvcnRzWzBdLnBvcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3J0KSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uob3B0cyk7XG4gICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhXb3JrZXIpO1xuIiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cbiAqIFlvdSBjYW4gYWRkIG9wdGlvbmFsIHBhcmFtcyBhcyBuZWVkZWQuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXG4gKi9cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWN0aW9uXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRlc3RpbmF0aW9uPSdtYWluJ1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpZD1JZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9yaWdpbj1OZW8ud29ya2VySWRcbiAgICAgICAgICovXG5cbiAgICAgICAgY29uZmlnLmRlc3RpbmF0aW9uID0gY29uZmlnLmRlc3RpbmF0aW9uIHx8ICdtYWluJztcbiAgICAgICAgY29uZmlnLmlkICAgICAgICAgID0gY29uZmlnLmlkICAgICAgICAgIHx8IElkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZCk7XG4gICAgICAgIGNvbmZpZy5vcmlnaW4gICAgICA9IGNvbmZpZy5vcmlnaW4gICAgICB8fCBOZW8ud29ya2VySWQ7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXG4gICAgfVxufVxuXG5jb25zdCBucyA9IE5lby5ucygnTmVvLndvcmtlcicsIHRydWUpO1xubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3NcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgUmVtb3RlTWV0aG9kQWNjZXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduUG9ydChzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBjb25zdCB7YXBwTmFtZSwgcG9ydCwgd2luZG93SWR9ID0gc291cmNlO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHthcHBOYW1lLCBwb3J0LCB3aW5kb3dJZH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiBQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtvcmlnaW59ID0gcmVtb3RlO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCBidWZmZXIpIHtcbiAgICAgICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgICAgIDogJ3JlbW90ZU1ldGhvZCcsXG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQoZGF0YSwgb3B0cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlTWVzc2FnZShvcmlnaW4sIG9wdHMsIGJ1ZmZlcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyUmVtb3RlKHJlbW90ZSkge1xuICAgICAgICBpZiAocmVtb3RlLmRlc3RpbmF0aW9uID09PSBOZW8ud29ya2VySWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAge2NsYXNzTmFtZSwgbWV0aG9kc30gPSByZW1vdGUsXG4gICAgICAgICAgICAgICAgcGtnICAgICAgICAgICAgICAgICAgPSBOZW8ubnMoY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKG1ldGhvZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZS5vcmlnaW4gIT09ICdtYWluJyAmJiBwa2dbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByZW1vdGUgbWV0aG9kIGRlZmluaXRpb24gJyArIGNsYXNzTmFtZSArICcuJyArIG1ldGhvZClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwa2dbbWV0aG9kXSA/Pz0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVtb3RlTWV0aG9kKG1zZykge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHBrZyA9IE5lby5ucyhtc2cucmVtb3RlQ2xhc3NOYW1lKSxcbiAgICAgICAgICAgIG91dCwgbWV0aG9kO1xuXG4gICAgICAgIGlmICghcGtnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG5hbWVzcGFjZSBcIicgKyBtc2cucmVtb3RlQ2xhc3NOYW1lICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZCA9IHBrZ1ttc2cucmVtb3RlTWV0aG9kXTtcblxuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBtZXRob2QgbmFtZSBcIicgKyBtc2cucmVtb3RlTWV0aG9kICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgbXNnLmRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgb3V0XG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7bWUucmVqZWN0KG1zZywgZXJyKX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7bWUucmVzb2x2ZShtc2csIGRhdGEpfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBvdXQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG5cbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcmVqZWN0IDogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQobXNnLCBvcHRzKTtcbiAgICAgICAgbWUuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVzb2x2ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZXNvbHZlKG1zZywgZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQobXNnLCBvcHRzKTtcbiAgICAgICAgbWUuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFJlbW90ZU1ldGhvZEFjY2Vzcyk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJjaHVua3MvYXBwL1wiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMVxufTtcblxuLy8gaW1wb3J0U2NyaXB0cyBjaHVuayBsb2FkaW5nXG52YXIgaW5zdGFsbENodW5rID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xufTtcbl9fd2VicGFja19yZXF1aXJlX18uZi5pID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuXHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdGltcG9ydFNjcmlwdHMoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKTtcblx0XHR9XG5cdH1cbn07XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbXlhcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbXlhcHBcIl0gfHwgW107XG52YXIgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24gPSBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IGluc3RhbGxDaHVuaztcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsImltcG9ydCBOZW8gICAgICAgICAgICAgZnJvbSAnLi4vTmVvLm1qcyc7XG5pbXBvcnQgQmFzZSAgICAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0ICogYXMgY29yZSAgICAgICBmcm9tICcuLi9jb3JlL19leHBvcnQubWpzJztcbmltcG9ydCBBcHBsaWNhdGlvbiAgICAgZnJvbSAnLi4vY29udHJvbGxlci9BcHBsaWNhdGlvbi5tanMnO1xuaW1wb3J0IEluc3RhbmNlICAgICAgICBmcm9tICcuLi9tYW5hZ2VyL0luc3RhbmNlLm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRNYW5hZ2VyIGZyb20gJy4uL21hbmFnZXIvRG9tRXZlbnQubWpzJztcbmltcG9ydCBIYXNoSGlzdG9yeSAgICAgZnJvbSAnLi4vdXRpbC9IYXNoSGlzdG9yeS5tanMnO1xuXG4vKipcbiAqIFRoZSBBcHAgd29ya2VyIGNvbnRhaW5zIG1vc3QgcGFydHMgb2YgdGhlIGZyYW1ld29yayBhcyB3ZWxsIGFzIGFsbCBhcHBzIHdoaWNoIGdldCBjcmVhdGVkLlxuICogU2VlIHRoZSB0dXRvcmlhbHMgZm9yIGZ1cnRoZXIgaW5mb3MuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5BcHBcbiAqIEBleHRlbmRzIE5lby53b3JrZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBBcHAgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuQXBwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLkFwcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50TG9hZGluZ1RoZW1lRmlsZXNfPTBcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50TG9hZGluZ1RoZW1lRmlsZXNfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBtYWluOiBbXG4gICAgICAgICAgICAgICAgJ2NyZWF0ZU5lb0luc3RhbmNlJyxcbiAgICAgICAgICAgICAgICAnZGVzdHJveU5lb0luc3RhbmNlJyxcbiAgICAgICAgICAgICAgICAnZmlyZUV2ZW50JyxcbiAgICAgICAgICAgICAgICAnZ2V0Q29uZmlncycsXG4gICAgICAgICAgICAgICAgJ3NldENvbmZpZ3MnXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZGF0YT1udWxsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGRhdGEgPSBudWxsXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNVc2luZ1N0YXRlUHJvdmlkZXJzPWZhbHNlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGlzVXNpbmdTdGF0ZVByb3ZpZGVycyA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogV2UgYXJlIHN0b3JpbmcgdGhlIHBhcmFtcyBvZiBpbnNlcnRUaGVtZUZpbGVzKCkgY2FsbHMgaGVyZSwgaW4gY2FzZSB0aGUgbWV0aG9kIGRvZXMgZ2V0IHRyaWdnZXJlZFxuICAgICAqIGJlZm9yZSB0aGUganNvbiB0aGVtZSBzdHJ1Y3R1cmUgZ290IGxvYWRlZC5cbiAgICAgKiBAbWVtYmVyIHtBcnJheVtdfSB0aGVtZUZpbGVzQ2FjaGU9W11cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdGhlbWVGaWxlc0NhY2hlID0gW11cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHdvcmtlcklkPSdhcHAnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHdvcmtlcklkID0gJ2FwcCdcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gY29udmVuaWVuY2Ugc2hvcnRjdXRzXG4gICAgICAgIE5lby5hcHBseURlbHRhcyAgICA9IG1lLmFwcGx5RGVsdGFzICAgLmJpbmQobWUpO1xuICAgICAgICBOZW8uc2V0Q3NzVmFyaWFibGUgPSBtZS5zZXRDc3NWYXJpYWJsZS5iaW5kKG1lKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY291bnRMb2FkaW5nVGhlbWVGaWxlcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDb3VudExvYWRpbmdUaGVtZUZpbGVzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IDAgJiYgb2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maXJlKCd0aGVtZUZpbGVzTG9hZGVkJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhcHBOYW1lXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGRlbHRhc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPCo+fVxuICAgICAqL1xuICAgIGFwcGx5RGVsdGFzKGFwcE5hbWUsIGRlbHRhcykge1xuICAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7YWN0aW9uOiAndXBkYXRlRG9tJywgYXBwTmFtZSwgZGVsdGFzfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdGUgbWV0aG9kIHRvIHVzZSBpbnNpZGUgbWFpbiB0aHJlYWRzIGZvciBjcmVhdGluZyBuZW8gYmFzZWQgY2xhc3MgaW5zdGFuY2VzLlxuICAgICAqIEJlIGF3YXJlIHRoYXQgeW91IGNhbiBvbmx5IHBhc3MgY29uZmlncyB3aGljaCBjYW4gZ2V0IGNvbnZlcnRlZCBpbnRvIHB1cmUgSlNPTi5cbiAgICAgKlxuICAgICAqIFJlbmRlcmluZyBhIGNvbXBvbmVudCBpbnRvIHRoZSBkb2N1bWVudC5ib2R5XG4gICAgICogQGV4YW1wbGU6XG4gICAgICogICAgIE5lby53b3JrZXIuQXBwLmNyZWF0ZU5lb0luc3RhbmNlKHtcbiAgICAgKiAgICAgICAgIG50eXBlICAgICA6ICdidXR0b24nLFxuICAgICAqICAgICAgICAgYXV0b01vdW50IDogdHJ1ZSxcbiAgICAgKiAgICAgICAgIGF1dG9SZW5kZXI6IHRydWVcbiAgICAgKiAgICAgICAgIHRleHQgICAgICA6ICdIaSBOaWdlISdcbiAgICAgKiAgICAgfSkudGhlbihpZCA9PiBjb25zb2xlLmxvZyhpZCkpXG4gICAgICpcbiAgICAgKiBJbnNlcnRpbmcgYSBjb21wb25lbnQgaW50byBhIGNvbnRhaW5lclxuICAgICAqIEBleGFtcGxlOlxuICAgICAqICAgICBOZW8ud29ya2VyLkFwcC5jcmVhdGVOZW9JbnN0YW5jZSh7XG4gICAgICogICAgICAgICBudHlwZSAgICAgIDogJ2J1dHRvbicsXG4gICAgICogICAgICAgICBwYXJlbnRJZCAgIDogJ25lby1jb250YWluZXItMycsXG4gICAgICogICAgICAgICBwYXJlbnRJbmRleDogMFxuICAgICAqICAgICAgICAgdGV4dCAgICAgICA6ICdIaSBOaWdlISdcbiAgICAgKiAgICAgfSkudGhlbihpZCA9PiBjb25zb2xlLmxvZyhpZCkpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtjb25maWcuaW1wb3J0UGF0aF0geW91IGNhbiBsYXp5IGxvYWQgbWlzc2luZyBjbGFzc2VzIHZpYSB0aGlzIGNvbmZpZy4gZGV2IG1vZGUgb25seS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2NvbmZpZy5wYXJlbnRJZF0gcGFzc2luZyBhIHBhcmVudElkIHdpbGwgcHV0IHlvdXIgaW5zdGFuY2UgaW50byBhIGNvbnRhaW5lclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbY29uZmlnLnBhcmVudEluZGV4XSBpZiBhIHBhcmVudElkIGlzIHBhc3NlZCwgYnV0IG5vIGluZGV4LCBuZW8gd2lsbCB1c2UgYWRkKClcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgaW5zdGFuY2UgaWRcbiAgICAgKi9cbiAgICBhc3luYyBjcmVhdGVOZW9JbnN0YW5jZShjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5pbXBvcnRQYXRoKSB7XG4gICAgICAgICAgICBhd2FpdCBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyBjb25maWcuaW1wb3J0UGF0aCk7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmltcG9ydFBhdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcHBOYW1lICAgPSBPYmplY3Qua2V5cyhOZW8uYXBwcylbMF0sIC8vIGZhbGxiYWNrIGluIGNhc2Ugbm8gYXBwTmFtZSB3YXMgcHJvdmlkZWRcbiAgICAgICAgICAgIENvbnRhaW5lciA9IE5lby5jb250YWluZXI/LkJhc2UsXG4gICAgICAgICAgICBpbmRleCwgaW5zdGFuY2UsIHBhcmVudDtcblxuICAgICAgICBjb25maWcgPSB7YXBwTmFtZSwgLi4uY29uZmlnfTtcblxuICAgICAgICBpZiAoY29uZmlnLnBhcmVudElkKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBOZW8uZ2V0Q29tcG9uZW50KGNvbmZpZy5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChDb250YWluZXIgJiYgcGFyZW50ICYmIHBhcmVudCBpbnN0YW5jZW9mIENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gY29uZmlnLnBhcmVudEluZGV4O1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5wYXJlbnRJZDtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnBhcmVudEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc051bWJlcihpbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBwYXJlbnQuaW5zZXJ0KGluZGV4LCBjb25maWcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBwYXJlbnQuYWRkKGNvbmZpZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkZWZhdWx0IHBhcmVudElkPSdkb2N1bWVudC5ib2R5JyA9PiB3ZSB3YW50IGl0IHRvIGdldCBzaG93blxuICAgICAgICAgICAgY29uZmlnLmF1dG9Nb3VudCAgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLmF1dG9SZW5kZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBpbnN0YW5jZSA9IE5lb1tjb25maWcubnR5cGUgPyAnbnR5cGUnIDogJ2NyZWF0ZSddKGNvbmZpZylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgY3JlYXRlVGhlbWVNYXAoZGF0YSkge1xuICAgICAgICBOZW8ubnMoJ05lby5jc3NNYXAuZmlsZUluZm8nLCB0cnVlKTtcbiAgICAgICAgTmVvLmNzc01hcC5maWxlSW5mbyA9IGRhdGE7XG4gICAgICAgIHRoaXMucmVzb2x2ZVRoZW1lRmlsZXNDYWNoZSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3RlIG1ldGhvZCB0byB1c2UgaW5zaWRlIG1haW4gdGhyZWFkcyBmb3IgZGVzdHJveWluZyBuZW8gYmFzZWQgY2xhc3MgaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogQGV4YW1wbGU6XG4gICAgICogICAgIE5lby53b3JrZXIuQXBwLmRlc3Ryb3lOZW9JbnN0YW5jZSgnbmVvLWJ1dHRvbi0zJykudGhlbihzdWNjZXNzID0+IGNvbnNvbGUubG9nKHN1Y2Nlc3MpKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHJldHVybnMgdHJ1ZSwgaW4gY2FzZSB0aGUgaW5zdGFuY2Ugd2FzIGZvdW5kXG4gICAgICovXG4gICAgZGVzdHJveU5lb0luc3RhbmNlKGlkKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IE5lby5nZXQoaWQpLFxuICAgICAgICAgICAgcGFyZW50O1xuXG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLnBhcmVudElkKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gTmVvLmdldENvbXBvbmVudChpbnN0YW5jZS5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5zdGFuY2UuZGVzdHJveSh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlcyBhIGN1c3RvbSBldmVudCBiYXNlZCBvbiBjb3JlLk9ic2VydmFibGUgb24gYW55IGFwcCByZWFsbSBiYXNlZCBOZW8gaW5zdGFuY2UgZnJvbSBtYWluXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm5hbWVcbiAgICAgKi9cbiAgICBmaXJlRXZlbnQoZGF0YSkge1xuICAgICAgICBsZXQgaW5zdGFuY2UgPSBOZW8uZ2V0KGRhdGEuaWQpLFxuICAgICAgICAgICAgbmFtZTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIG5hbWUgPSBkYXRhLm5hbWU7XG5cbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLmlkO1xuICAgICAgICAgICAgZGVsZXRlIGRhdGEubmFtZTtcblxuICAgICAgICAgICAgaW5zdGFuY2UuZmlyZShuYW1lLCBkYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgbmVlZGVkIGZvciB0aGUgU2hhcmVkV29ya2VycyBjb250ZXh0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZmlyZU1haW5WaWV3c0V2ZW50KGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICB0aGlzLnBvcnRzLmZvckVhY2gocG9ydCA9PiB7XG4gICAgICAgICAgICBOZW8uYXBwc1twb3J0LmFwcE5hbWVdLm1haW5WaWV3LmZpcmUoZXZlbnROYW1lLCBkYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0IHRvIGxhenktbG9hZCBtYWluIHRocmVhZCBhZGRvbnMsIGluIGNhc2UgdGhleSBhcmUgbm90IGltcG9ydGVkIHlldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdpbmRvd0lkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8TmVvLm1haW4uYWRkb24uQmFzZT59IFRoZSBuYW1lc3BhY2Ugb2YgdGhlIGFkZG9uIHRvIHVzZSB2aWEgcmVtb3RlIG1ldGhvZCBhY2Nlc3NcbiAgICAgKi9cbiAgICBhc3luYyBnZXRBZGRvbihuYW1lLCB3aW5kb3dJZCkge1xuICAgICAgICBsZXQgYWRkb24gPSBOZW8ubWFpbj8uYWRkb24/LltuYW1lXTtcblxuICAgICAgICBpZiAoIWFkZG9uKSB7XG4gICAgICAgICAgICBhd2FpdCBOZW8uTWFpbi5pbXBvcnRBZGRvbih7bmFtZSwgd2luZG93SWR9KTtcbiAgICAgICAgICAgIGFkZG9uID0gTmVvLm1haW4uYWRkb25bbmFtZV1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhZGRvblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjb25maWdzIG9mIGFueSBhcHAgcmVhbG0gYmFzZWQgTmVvIGluc3RhbmNlIGZyb20gbWFpblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xTdHJpbmdbXX0gZGF0YS5rZXlzXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjb25maWdzIGlmIGEga2V5cyBhcnJheSB3YXMgcGFzc2VkLlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgZ2l2ZW4gY29uZmlnIGRpcmVjdGx5LCBpbiBjYXNlIG5vIGFycmF5IHdhcyBwYXNzZWRcbiAgICAgKiBSZXR1cm5zIGZhbHNlLCBpbiBjYXNlIG5vIGluc3RhbmNlIGdvdCBmb3VuZC5cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRDb25maWdzKGRhdGEpIHtcbiAgICAgICAgbGV0IGluc3RhbmNlICAgID0gTmVvLmdldChkYXRhLmlkKSxcbiAgICAgICAgICAgIHtrZXlzfSAgICAgID0gZGF0YSxcbiAgICAgICAgICAgIHJldHVybkFycmF5ID0gW107XG5cbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2Vba2V5c11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChpbnN0YW5jZVtrZXldKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXR1cm5BcnJheVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBpbXBvcnRBcHAocGF0aCkge1xuICAgICAgICBpZiAocGF0aC5lbmRzV2l0aCgnLm1qcycpKSB7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5zbGljZSgwLCAtNClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgICAgICAvKiB3ZWJwYWNrSW5jbHVkZTogLyg/OlxcL3xcXFxcKWFwcC5tanMkLyAqL1xuICAgICAgICAgICAgLyogd2VicGFja0V4Y2x1ZGU6IC8oPzpcXC98XFxcXCkoZGlzdHxub2RlX21vZHVsZXMpLyAqL1xuICAgICAgICAgICAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gICAgICAgICAgICBgLi4vLi4vJHtwYXRofS5tanNgXG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIGluY2x1ZGUgcHJvdG90eXBlIGJhc2VkIENTUyBmaWxlcywgdXNlIHRoZSBjbGFzc05hbWUgcGFyYW0gaW5zdGVhZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB3aW5kb3dJZFxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gW3Byb3RvXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbY2xhc3NOYW1lXVxuICAgICAqL1xuICAgIGluc2VydFRoZW1lRmlsZXMod2luZG93SWQsIHByb3RvLCBjbGFzc05hbWUpIHtcbiAgICAgICAgaWYgKE5lby5jb25maWcudGhlbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBwcm90by5jbGFzc05hbWU7XG5cbiAgICAgICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNzc01hcCA9IE5lby5jc3NNYXAsXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcHJvdG8/Ll9fcHJvdG9fXyxcbiAgICAgICAgICAgICAgICBjbGFzc1BhdGgsIGNsYXNzUm9vdCwgZmlsZU5hbWUsIGxDbGFzc1Jvb3QsIG1hcENsYXNzTmFtZSwgbnMsIHRoZW1lRm9sZGVycztcblxuICAgICAgICAgICAgaWYgKCFjc3NNYXApIHtcbiAgICAgICAgICAgICAgICBtZS50aGVtZUZpbGVzQ2FjaGUucHVzaChbd2luZG93SWQsIHByb3RvXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtb2RpZnkgYXBwIHJlbGF0ZWQgY2xhc3MgbmFtZXNcbiAgICAgICAgICAgICAgICBpZiAoIWNsYXNzTmFtZS5zdGFydHNXaXRoKCdOZW8uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lICA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBjbGFzc1Jvb3QgID0gY2xhc3NOYW1lLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxDbGFzc1Jvb3QgPSBjbGFzc1Jvb3QudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVbMF0gPT09ICd2aWV3JyAmJiBjbGFzc05hbWUuc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBtYXBDbGFzc05hbWUgPSBgYXBwcy4ke05lby5hcHBzW2NsYXNzUm9vdF0/LmFwcFRoZW1lRm9sZGVyIHx8IGxDbGFzc1Jvb3R9LiR7Y2xhc3NOYW1lLmpvaW4oJy4nKX1gO1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgICAgPSBgYXBwcy4ke2xDbGFzc1Jvb3R9LiR7Y2xhc3NOYW1lLmpvaW4oJy4nKX1gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50ICE9PSBOZW8uY29yZS5CYXNlLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIU5lby5ucyhgJHt3aW5kb3dJZH0uJHtwYXJlbnQuY2xhc3NOYW1lfWAsIGZhbHNlLCBjc3NNYXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5pbnNlcnRUaGVtZUZpbGVzKHdpbmRvd0lkLCBwYXJlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGVtZUZvbGRlcnMgPSBOZW8ubnMobWFwQ2xhc3NOYW1lIHx8IGNsYXNzTmFtZSwgZmFsc2UsIGNzc01hcC5maWxlSW5mbyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhlbWVGb2xkZXJzICYmICFOZW8ubnMoYCR7d2luZG93SWR9LiR7Y2xhc3NOYW1lfWAsIGZhbHNlLCBjc3NNYXApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzUGF0aCA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZSAgPSBjbGFzc1BhdGgucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzUGF0aCA9IGNsYXNzUGF0aC5qb2luKCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIG5zICAgICAgICA9IE5lby5ucyhgJHt3aW5kb3dJZH0uJHtjbGFzc1BhdGh9YCwgdHJ1ZSwgY3NzTWFwKTtcblxuICAgICAgICAgICAgICAgICAgICBuc1tmaWxlTmFtZV0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lLmNvdW50TG9hZGluZ1RoZW1lRmlsZXMrKztcblxuICAgICAgICAgICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0LmFkZFRoZW1lRmlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBtYXBDbGFzc05hbWUgfHwgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVycyAgOiB0aGVtZUZvbGRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dJZFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNvdW50TG9hZGluZ1RoZW1lRmlsZXMtLVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV2ZXJ5IGRvbSBldmVudCB3aWxsIGdldCBmb3J3YXJkZWQgYXMgYSB3b3JrZXIgbWVzc2FnZSBmcm9tIG1haW4gYW5kIGVuZHMgdXAgaGVyZSBmaXJzdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHVzZWZ1bCBldmVudCBwcm9wZXJ0aWVzLCBkaWZmZXJzIGZvciBkaWZmZXJlbnQgZXZlbnQgdHlwZXMuIFNlZSBOZW8ubWFpbi5Eb21FdmVudHMuXG4gICAgICovXG4gICAgb25Eb21FdmVudChkYXRhKSB7XG4gICAgICAgIERvbUV2ZW50TWFuYWdlci5maXJlKGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXZlcnkgVVJMIGhhc2gtY2hhbmdlIHdpbGwgY3JlYXRlIGEgcG9zdCBtZXNzYWdlIGluIG1haW4gYW5kIGVuZCB1cCBoZXJlIGZpcnN0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHBhcnNlZCBrZXktdmFsdWUgcGFpcnMgZm9yIGVhY2ggaGFzaCB2YWx1ZVxuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZShkYXRhKSB7XG4gICAgICAgIEhhc2hIaXN0b3J5LnB1c2goZGF0YS5kYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydGluZyBwb2ludCBmb3IgYXBwc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Mb2FkQXBwbGljYXRpb24oZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2NvbmZpZ30gPSBOZW8sXG4gICAgICAgICAgICBhcHAsIHBhdGg7XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIG1lLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgY29uZmlnLnJlc291cmNlc1BhdGggPSBkYXRhLnJlc291cmNlc1BhdGhcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGggPSBtZS5kYXRhLnBhdGg7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5lbnZpcm9ubWVudCAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRoXG4gICAgICAgIH1cblxuICAgICAgICBtZS5pbXBvcnRBcHAocGF0aCkudGhlbihtb2R1bGUgPT4ge1xuICAgICAgICAgICAgYXBwID0gbW9kdWxlLm9uU3RhcnQoKTtcblxuICAgICAgICAgICAgLy8gc2hvcnQgZGVsYXkgdG8gZW5zdXJlIENvbXBvbmVudCBDb250cm9sbGVycyBhcmUgcmVhZHlcbiAgICAgICAgICAgIGNvbmZpZy5oYXNoICYmIG1lLnRpbWVvdXQoNSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgSGFzaEhpc3RvcnkucHVzaChjb25maWcuaGFzaCk7XG4gICAgICAgICAgICAgICAgLy8gYXBwcyB3aGljaCB3aWxsIGdldCBjcmVhdGVkIGxhdGVyIG11c3Qgbm90IHVzZSBvdXRkYXRlZCBoYXNoIHZhbHVlc1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuaGFzaFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJlIGV2ZW50IG9uIGFsbCBhcHBzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5hbmdsZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmxheW91dCBsYW5kc2NhcGV8cG9ydHJhaXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS50eXBlIGxhbmRzY2FwZS1wcmltYXJ5fGxhbmRzY2FwZS1zZWNvbmRhcnl8cG9ydHJhaXQtcHJpbWFyeXxwb3J0cmFpdC1zZWNvbmRhcnlcbiAgICAgKi9cbiAgICBvbk9yaWVudGF0aW9uQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhOZW8uYXBwcykuZm9yRWFjaChhcHAgPT4ge1xuICAgICAgICAgICAgYXBwLmZpcmUoJ29yaWVudGF0aW9uY2hhbmdlJywgZGF0YS5kYXRhKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyTmVvQ29uZmlnKG1zZykge1xuICAgICAgICBzdXBlci5vblJlZ2lzdGVyTmVvQ29uZmlnKG1zZyk7XG5cbiAgICAgICAgbGV0IHtjb25maWd9ID0gTmVvLFxuICAgICAgICAgICAge2RhdGF9ICAgPSBtc2csXG4gICAgICAgICAgICB1cmwgICAgICA9ICdyZXNvdXJjZXMvdGhlbWUtbWFwLmpzb24nO1xuXG4gICAgICAgIE5lby53aW5kb3dDb25maWdzID0gTmVvLndpbmRvd0NvbmZpZ3MgfHwge307XG5cbiAgICAgICAgTmVvLndpbmRvd0NvbmZpZ3NbZGF0YS53aW5kb3dJZF0gPSBkYXRhO1xuXG4gICAgICAgIGlmIChjb25maWcuZW52aXJvbm1lbnQgPT09ICdkZXZlbG9wbWVudCcgfHwgY29uZmlnLmVudmlyb25tZW50ID09PSAnZGlzdC9lc20nKSB7XG4gICAgICAgICAgICB1cmwgPSBgLi4vLi4vJHt1cmx9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy53b3JrZXJCYXNlUGF0aD8uaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICB1cmwgPSBgLi4vLi4vJHt1cmx9YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybFswXSAhPT0gJy4nKSB7XG4gICAgICAgICAgICB1cmwgPSBgLi8ke3VybH1gXG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHt0aGlzLmNyZWF0ZVRoZW1lTWFwKGRhdGEpfSk7XG5cbiAgICAgICAgY29uZmlnLnJlbW90ZXNBcGlVcmwgICYmIGltcG9ydCgnLi4vcmVtb3Rlcy9BcGkubWpzJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQubG9hZCgpKTtcbiAgICAgICAgIWNvbmZpZy51c2VWZG9tV29ya2VyICYmIGltcG9ydCgnLi4vdmRvbS9IZWxwZXIubWpzJylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25SZWdpc3RlclBvcnQobXNnKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHBvcnQgPSBtc2cudHJhbnNmZXI7XG5cbiAgICAgICAgcG9ydC5vbm1lc3NhZ2UgPSBtZS5vbk1lc3NhZ2UuYmluZChtZSk7XG5cbiAgICAgICAgbWUuY2hhbm5lbFBvcnRzW21zZy5vcmlnaW5dID0gcG9ydFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25XaW5kb3dQb3NpdGlvbkNoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZU1haW5WaWV3c0V2ZW50KCd3aW5kb3dQb3NpdGlvbkNoYW5nZScsIGRhdGEuZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhcHBOYW1lXG4gICAgICovXG4gICAgcmVnaXN0ZXJBcHAoYXBwTmFtZSkge1xuICAgICAgICAvLyByZWdpc3RlciB0aGUgbmFtZSBhcyBmYXN0IGFzIHBvc3NpYmxlXG4gICAgICAgIHRoaXMub25SZWdpc3RlckFwcCh7IGFwcE5hbWUgfSk7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoJ21haW4nLCB7YWN0aW9uOiAncmVnaXN0ZXJBcHBOYW1lJywgYXBwTmFtZX0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlciB0aGUgYXBwIGZyb20gdGhlIENTUyBtYXBcbiAgICAgKiBPbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhcHBOYW1lXG4gICAgICovXG4gICAgcmVtb3ZlQXBwRnJvbVRoZW1lTWFwKGFwcE5hbWUpIHtcbiAgICAgICAgZGVsZXRlIE5lby5jc3NNYXBbYXBwTmFtZS50b0xvd2VyQ2FzZSgpXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVzb2x2ZVRoZW1lRmlsZXNDYWNoZSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS50aGVtZUZpbGVzQ2FjaGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIG1lLmluc2VydFRoZW1lRmlsZXMoLi4uaXRlbSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudGhlbWVGaWxlc0NhY2hlID0gW11cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY29uZmlncyBvZiBhbnkgYXBwIHJlYWxtIGJhc2VkIE5lbyBpbnN0YW5jZSBmcm9tIG1haW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICovXG4gICAgc2V0Q29uZmlncyhkYXRhKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IE5lby5nZXQoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YS5pZDtcbiAgICAgICAgICAgIGluc3RhbmNlLnNldChkYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEua2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLnByaW9yaXR5XSBvcHRpb25hbGx5IHBhc3MgJ2ltcG9ydGFudCdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS50aGVtZT1OZW8uY29uZmlnLnRoZW1lc1swXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEud2luZG93SWRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldENzc1ZhcmlhYmxlKGRhdGEpIHtcbiAgICAgICAgbGV0IFN0eWxlc2hlZXQgPSBhd2FpdCB0aGlzLmdldEFkZG9uKCdTdHlsZXNoZWV0JywgZGF0YS53aW5kb3dJZCksXG4gICAgICAgICAgICB0aGVtZSAgICAgID0gZGF0YS50aGVtZSB8fCBOZW8uY29uZmlnLnRoZW1lcz8uWzBdO1xuXG4gICAgICAgIGlmICh0aGVtZS5zdGFydHNXaXRoKCduZW8tJykpIHtcbiAgICAgICAgICAgIHRoZW1lID0gdGhlbWUuc3Vic3RyaW5nKDQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU3R5bGVzaGVldC5zZXRDc3NWYXJpYWJsZSh7dGhlbWUsIC4uLmRhdGF9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoQXBwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==