/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/neo.mjs/src/util/Array.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Array.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/neo.mjs/src/util/Function.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Function.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/neo.mjs/src/worker/ServiceBase.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/ServiceBase.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs");




/**
 * @class Neo.worker.ServiceBase
 * @extends Neo.core.Base
 * @abstract
 */
class ServiceBase extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.worker.ServiceBase'
         * @protected
         */
        className: 'Neo.worker.ServiceBase',
        /**
         * @member {String} cacheName_='neo-runtime'
         */
        cacheName_: 'neo-runtime',
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[RemoteMethodAccess]
         */
        mixins: [_mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'clearCache',
                'clearCaches',
                'preloadAssets',
                'removeAssets'
            ]
        }
    }

    /**
     * @member {String[]} cachePaths
     */
    cachePaths = [
        'raw.githubusercontent.com/',
        '/dist/esm/',
        '/dist/production/',
        '/fontawesome',
        '/node_modules',
        '/resources/'
    ]
    /**
     * @member {Object[]|null} channelPorts=null
     * @protected
     */
    channelPorts = null
    /**
     * @member {Client|null} lastClient=null
     * @protected
     */
    lastClient = null
    /**
     * @member {Object[]} promises=[]
     * @protected
     */
    promises = []
    /**
     * @member {String[]} remotes=[]
     * @protected
     */
    remotes = []
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

        let me   = this,
            bind = name => me[name].bind(me);

        me.channelPorts = [];

        Object.assign(globalThis, {
            onactivate: bind('onActivate'),
            onfetch   : bind('onFetch'),
            oninstall : bind('onInstall'),
            onmessage : bind('onMessage')
        });

        Neo.currentWorker = me;
        Neo.workerId      = me.workerId
    }

    /**
     * Triggered when accessing the cacheName config
     * @param {String} value
     * @protected
     */
    beforeGetCacheName(value) {
        return value + '-' + this.version
    }

    /**
     * @param {String} name=this.cacheName
     * @returns {Promise<Object>}
     */
    async clearCache(name=this.cacheName) {
        await caches.delete(name);
        return {success: true}
    }

    /**
     * @returns {Promise<Object>}
     */
    async clearCaches() {
        let keys = await caches.keys();
        await Promise.all(keys.map(name => caches.delete(name)));
        return {success: true}
    }

    /**
     * @param {Client} client
     */
    createMessageChannel(client) {
        let me             = this,
            channel        = new MessageChannel(),
            {port1, port2} = channel;

        port1.onmessage = me.onMessage.bind(me);

        me.sendMessage('app', {action: 'registerPort', transfer: port2}, [port2]);

        me.channelPorts.push({
            clientId   : client.id,
            destination: 'app',
            port       : port1
        })
    }

    /**
     *
     * @param {String} destination
     * @param {String} clientId=this.lastClient.id
     * @returns {MessagePort|null}
     */
    getPort(destination, clientId=this.lastClient?.id) {
        for (let port of this.channelPorts) {
            if (clientId === port.clientId && destination === port.destination) {
                return port.port
            }
        }

        return null
    }

    /**
     * Ignore the call in case there is no connected client in place yet
     */
    initRemote() {
        let me           = this,
            lastClientId = me.lastClient?.id;

        if (lastClientId && !me.remotes.includes(lastClientId)) {
            me.remotes.push(lastClientId);
            super.initRemote()
        }
    }

    /**
     * @param {ExtendableMessageEvent} event
     */
    async onActivate(event) {
        console.log('onActivate', event);

        let me   = this,
            keys = await caches.keys(),
            key;

        for (key of keys) {
            // Clear caches for prior SW versions, without touching non-related caches
            if (key.startsWith(me._cacheName) && key !== me.cacheName) {
                // No need to await the method execution
                me.clearCache(key)
            }
        }
    }

    /**
     * @param {Client} source
     */
    async onConnect(source) {
        console.log('onConnect', source);

        this.createMessageChannel(source);
        this.initRemote()
    }

    /**
     * @param {ExtendableMessageEvent} event
     */
    onFetch(event) {
        let hasMatch  = false,
            {request} = event,
            key;

        for (key of this.cachePaths) {
            if (request.url.includes(key)) {
                hasMatch = true;
                break
            }
        }

        hasMatch && request.method === 'GET' && event.respondWith(
            caches.match(request)
                .then(cachedResponse => cachedResponse || caches.open(this.cacheName)
                .then(cache          => fetch(request)
                .then(response       => cache.put(request, response.clone())
                .then(()             => response)
            )))
        )
    }

    /**
     * @param {ExtendableMessageEvent} event
     */
    onInstall(event) {
        console.log('onInstall', event)
    }

    /**
     * For a client based message we receive an ExtendableMessageEvent,
     * for a MessageChannel based message a MessageEvent
     * @param {ExtendableMessageEvent|MessageEvent} event
     */
    onMessage(event) {
        let me                = this,
            {data}            = event,
            {action, replyId} = data,
            promise;

        if (event.source) { // ExtendableMessageEvent
            me.lastClient = event.source
        }

        if (!action) {
            throw new Error('Message action is missing: ' + data.id)
        }

        if (action !== 'reply') {
            me['on' + Neo.capitalize(action)](data, event);
        } else if (promise = action === 'reply' && me.promises[replyId]) {
            promise[data.reject ? 'reject' : 'resolve'](data.data);
            delete me.promises[replyId]
        }
    }

    /**
     * @param {Object} msg
     * @param {ExtendableMessageEvent} event
     */
    onPing(msg, event) {
        this.resolve(msg, {originMsg: msg})
    }

    /**
     * @param {Object} msg
     * @param {ExtendableMessageEvent} event
     */
    async onRegisterNeoConfig(msg, event) {
        this.onConnect(event.source)
    }

    /**
     * @param {Object} msg
     * @param {ExtendableMessageEvent} event
     */
    async onSkipWaiting(msg, event) {
        await globalThis.skipWaiting()
    }

    /**
     * @param {Object} msg
     * @param {ExtendableMessageEvent} event
     */
    onUnregisterPort(msg, event) {
        for (let [index, value] of this.channelPorts.entries()) {
            if (value.clientId === event.source.id) {
                this.channelPorts.splice(index, 1);
                break
            }
        }
    }

    /**
     * @param {Object} data
     * @param {String} [data.cacheName=this.cacheName]
     * @param {String[]|String} data.files
     * @param {Boolean} [data.foreReload=false]
     * @returns {Promise<Object>}
     */
    async preloadAssets(data) {
        let cacheName = data.cacheName || this.cacheName,
            cache     = await caches.open(cacheName),
            {files}   = data,
            items     = [],
            asset, hasMatch, item;

        if (!Array.isArray(files)) {
            files = [files]
        }

        for (item of files) {
            hasMatch = false;

            if (!data.forceReload) {
                asset    = await cache.match(item);
                hasMatch = !!asset
            }

            !hasMatch && items.push(item)
        }

        if (items.length > 0) {
            await cache.addAll(items)
        }

        return {success: true}
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

            me.promises[msgId] = {reject, resolve}
        })
    }

    /**
     * You can either pass an url, an array of urls or an object with additional options
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete
     * @param {String|String[]|Object} data
     * @param {String|String[]} data.assets
     * @param {String} data.cacheName=this.cacheName
     * @param {Object} data.options
     * @param {Boolean} data.options.ignoreMethod=false
     * @param {Boolean} data.options.ignoreSearch=false
     * @param {Boolean} data.options.ignoreVary=false
     * @returns {Promise<Object>}
     */
    async removeAssets(data) {
        if (!Neo.isObject(data)) {
            data = {assets: data}
        }

        let {assets, options={}} = data,
            cacheName            = data.cacheName || this.cacheName,
            cache                = await caches.open(cacheName),
            promises             = [];

        if (!Array.isArray(assets)) {
            assets = [assets]
        }

        assets.forEach(asset => {
            promises.push(cache.delete(asset, options))
        });

        await Promise.all(promises);

        return {success: true}
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

        let message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](opts),
            port    = this.getPort(dest) || this.lastClient;

        port.postMessage(message, transfer);
        return message
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(ServiceBase));


/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./ServiceWorker.mjs ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/neo.mjs/src/Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_core_export_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/neo.mjs/src/core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_worker_ServiceBase_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/neo.mjs/src/worker/ServiceBase.mjs */ "./node_modules/neo.mjs/src/worker/ServiceBase.mjs");




/**
 * @class Neo.ServiceWorker
 * @extends Neo.worker.ServiceBase
 * @singleton
 */
class ServiceWorker extends _node_modules_neo_mjs_src_worker_ServiceBase_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.ServiceWorker'
         * @protected
         */
        className: 'Neo.ServiceWorker',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {String} version='1.0.0'
         */
        version: '0.1.0'
    }

    /**
     * @member {String} workerId='service'
     * @protected
     */
    workerId = 'service'
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_neo_mjs_src_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].setupClass(ServiceWorker));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXdvcmtlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBOEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQThDO0FBQ3JFLENBQUM7O0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDclNtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0EsNEJBQTRCLHdGQUFXO0FBQ3ZDO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUseUVBQUcsMEJBQTBCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9EZWZhdWx0Q29uZmlnLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9Db21wYXJlLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL09ic2VydmFibGUubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvVXRpbC5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0Z1bmN0aW9uLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvTWVzc2FnZS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL1NlcnZpY2VCYXNlLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvbWl4aW4vUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215YXBwLy4vU2VydmljZVdvcmtlci5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmVvID0gZ2xvYmFsVGhpcy5OZW8gfHwge307XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG4vKipcbiAqIENvbmZpZyBvYmplY3QgZm9yIHRoZSBuZW8ubWpzIGZyYW1ld29yayB3aGljaCB3aWxsIGdldCBwYXNzZWQgdG8gYWxsIHdvcmtlcnNcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxuICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAqIEBuYW1lIGNvbmZpZ1xuICogQHR5cGUgT2JqZWN0XG4gKi9cbmNvbnN0IERlZmF1bHRDb25maWcgPSB7XG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGFwcGx5ICduZW8tYm9keScgdG8gdGhlIGRvY3VtZW50LmJvZHkgY2xhc3NMaXN0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBseUJvZHlDbHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBhcHBseSAncG9zaXRpb246IGZpeGVkJyB0byB0aGUgaHRtbCB0YWcgaXRzZWxmXG4gICAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvNjQyOVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwbHlGaXhlZFBvc2l0aW9uVG9IdG1sVGFnXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGFwcGx5Rml4ZWRQb3NpdGlvblRvSHRtbFRhZzogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHlvdXIgYXBwLm1qcyBmaWxlLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBhcHBzIHRoZXJlIGlmIG5lZWRlZC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcFBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIGFwcFBhdGg6IG51bGwsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcbiAgICAgKiBAZGVmYXVsdCAnLi8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgYmFzZVBhdGg6ICcuLycsXG4gICAgLyoqXG4gICAgICogUGFzcyBhIHRva2VuIGluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgQ2VzaXVtSlMgbWFpbiB0aHJlYWQgYWRkb25cbiAgICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2Jsb2IvZGV2L3NyYy9tYWluL2FkZG9uL0Nlc2l1bUpTLm1qc1xuICAgICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5jZXNpdW1Kc1Rva2VuXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBjb21wb25lbnQgbG9nZ2luZyB1c2luZyBDdHJsLVJpZ2h0LUNsaWNrXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbmFibGVDb21wb25lbnRMb2dnZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgZW5hYmxlQ29tcG9uZW50TG9nZ2VyOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byB0cnVlIHRvIGVuYWJsZSB1dGlsLkxvZ2dlciAoTmVvLmxvZygpKSBiYXNlZCBsb2dzIGluIHByb2R1Y3Rpb25cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbmFibGVMb2dzSW5Qcm9kdWN0aW9uXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGVuYWJsZUxvZ3NJblByb2R1Y3Rpb246IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdkaXN0L2RldmVsb3BtZW50JywgJ2Rpc3QvcHJvZHVjdGlvbidcbiAgICAgKiBUaGlzIGNvbmZpZyB3aWxsIGdldCBhdXRvLWdlbmVyYXRlZFxuICAgICAqIEBkZWZhdWx0ICdkaXN0L3Byb2R1Y3Rpb24nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZW52aXJvbm1lbnQ6ICdkaXN0L3Byb2R1Y3Rpb24nLFxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgR29vZ2xlTWFwcyBtYWluIHRocmVhZCBhZGRvbiwgeW91IGNhbiBwYXNzIHRoZSBBUEkga2V5IGhlcmUuXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmdvb2dsZU1hcHNBcGlLZXlcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgR29vZ2xlQW5hbHl0aWNzIG1haW4gdGhyZWFkIGFkZG9uIG9yIHVzZUdvb2dsZUFuYWx5dGljczogdHJ1ZSxcbiAgICAgKiB5b3UgY2FuIGNoYW5nZSB0aGUgZ3RhZyBpZCBoZXJlLiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyAoZ2ggcGFnZXMpXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmd0YWdJZFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyBvbiBodHRwczovL25lb21qcy5naXRodWIuaW8vcGFnZXMvXG4gICAgICogPT4gdG8gdXNlIGxvY2FsIGltYWdlcyBwYXRocyBpbnN0ZWFkIG9mIHJhdy5naXRodWJ1c2VyY29udGVudC5jb21cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0dpdEh1YlBhZ2VzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzR2l0SHViUGFnZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBkZWxheSBpbiBtcyBmb3IgdGhlIHdvcmtlci5NYW5hZ2VyOmxvYWRBcHBsaWNhdGlvbigpIGNhbGxcbiAgICAgKiBAZGVmYXVsdCAyMFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2FkQXBwbGljYXRpb25EZWxheVxuICAgICAqIEB0eXBlIE51bWJlclxuICAgICAqL1xuICAgIGxvYWRBcHBsaWNhdGlvbkRlbGF5OiAyMCxcbiAgICAvKipcbiAgICAgKiBVc2VkIGJ5IEludGwuRGF0ZVRpbWVGb3JtYXQsIGZvciBkZXRhaWxzIHRha2UgYSBsb29rIGF0OlxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBsb2cgdGhlIGRlbHRhIHVwZGF0ZXMgaW5zaWRlIHRoZSBtYWluIHRocmVhZChzKSBhcyB3ZWxsIGFzIHRoZSByZXF1ZXN0QW5pbWF0aW9uIGZyYW1lc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvZ0RlbHRhVXBkYXRlc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBsb2dEZWx0YVVwZGF0ZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBsb2cgY29uc29sZSB3YXJuaW5ncywgaW4gY2FzZSBhIGNvbXBvbmVudCB0cmllcyB0byB1cGRhdGUoKSB3aGlsZSBhIHBhcmVudCB1cGRhdGUgaXMgcnVubmluZy5cbiAgICAgKiBBIHBhcmVudCB1cGRhdGUgcmVzdWx0cyBpbiBhIHNob3J0IGRlbGF5LCBzbyB5b3UgbWlnaHQgd2FudCB0byByZXNvbHZlIHRoZXNlIGNvbGxpc2lvbnMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9nVmRvbVVwZGF0ZUNvbGxpc2lvbnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgbG9nVmRvbVVwZGF0ZUNvbGxpc2lvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZCBhZGRvbnMgZm9yIHRoZSBtYWluIHRocmVhZFxuICAgICAqIC4vc3JjL21haW4vYWRkb24vIGNvbnRhaW5zIGFsbCBmcmFtZXdvcmsgcmVsYXRlZCBvcHRpb25zLlxuICAgICAqIFlvdSBjYW4gYWxzbyBjcmVhdGUgeW91ciBvd24gYWRkb25zIHdpdGhpbiB5b3VyIHdvcmtzcGFjZSBzY29wZS4gTWFrZSBzdXJlIHRvIHB1dCB0aGVtIGluc2lkZSAnc3JjL21haW4vYWRkb24vJ1xuICAgICAqIGFuZCBwcmVmaXggdGhlbSB3aXRoICdXUy8nIGluc2lkZSB5b3VyIG5lby1jb25maWcuanNvbiBmaWxlLlxuICAgICAqIEV4YW1wbGU6IFsnRHJhZ0Ryb3AnLCAnU3R5bGVzaGVldCcsICdXUy9NeUFkZG9uJ11cbiAgICAgKiBAZGVmYXVsdCBbJ0RyYWdEcm9wJywgJ05hdmlnYXRvcicsICdTdHlsZXNoZWV0J11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubWFpblRocmVhZEFkZG9uc1xuICAgICAqIEB0eXBlIFN0cmluZ1tdXG4gICAgICovXG4gICAgbWFpblRocmVhZEFkZG9uczogWydEcmFnRHJvcCcsICdOYXZpZ2F0b3InLCAnU3R5bGVzaGVldCddLFxuICAgIC8qKlxuICAgICAqIFBhc3MgdGhlIFVSTCBvZiBhIEpTT04tZmlsZSwgd2hpY2ggY29udGFpbnMgdGhlIHNlcnZpY2VzIGFuZCBtZXRob2RzIGZyb20geW91ciBiYWNrZW5kLFxuICAgICAqIHdoaWNoIHlvdSB3YW50IHRvIGV4cG9zZSB0byB0aGUgY2xpZW50LlxuICAgICAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vcHJvamVjdHMvMzJcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlbW90ZXNBcGlVcmxcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHJlbW90ZXNBcGlVcmw6IG51bGwsXG4gICAgLyoqXG4gICAgICogWW91IGNhbiB2aXN1YWxseSBzaG93IHRoZSBhbW91bnQgb2YgZGVsdGEgdXBkYXRlcyBwZXIgc2Vjb25kIHVzaW5nIHRoaXMgY29uZmlnLlxuICAgICAqIEl0IGV4cGVjdHMgYSBkb20gbm9kZSB3aXRoIHRoZSBpZCBcIm5lby1kZWx0YS11cGRhdGVzXCIgYXMgdGhlIHJlbmRlcmluZyB0YXJnZXQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVuZGVyQ291bnREZWx0YXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgcmVuZGVyQ291bnREZWx0YXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZCB0aGVtZXMgeW91IHdhbnQgdG8gdXNlIGhlcmUuIFRoZSBmaXJzdCB0aGVtZSB3aWxsIGdldCBhcHBsaWVkLlxuICAgICAqIEBkZWZhdWx0IFsnbmVvLXRoZW1lLWxpZ2h0JywnbmVvLXRoZW1lLWRhcmsnLCduZW8tdGhlbWUtbmVvLWxpZ2h0J11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJywgJ25lby10aGVtZS1uZW8tbGlnaHQnXSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBzdGFuZGFsb25lIFNpZXN0YSBtb2R1bGUgdGVzdHMgPT4gcHJldmVudCByZWdpc3RlclJlbW90ZSB3b3JrZXIgbWVzc2FnZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51bml0VGVzdE1vZGVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdW5pdFRlc3RNb2RlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBFeHBlcmltZW50YWwgZmxhZyBpZiBhbiBvZmZzY3JlZW4gY2FudmFzIHdvcmtlciBzaG91bGQgZ2V0IGNyZWF0ZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlQ2FudmFzV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNhbnZhc1dvcmtlcjogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBpZiB2ZG9tIGlkcyBzaG91bGQgZ2V0IG1hcHBlZCBpbnRvIERPTSBlbGVtZW50IGlkcy5cbiAgICAgKiBmYWxzZSB3aWxsIGNvbnZlcnQgdGhlbSBpbnRvIGEgXCJkYXRhLW5lby1pZFwiIGF0dHJpYnV0ZS5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZURvbUlkc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VEb21JZHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgaW5jbHVkZSB0aGUgc3R5bGVzaGVldFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRm9udEF3ZXNvbWVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRm9udEF3ZXNvbWU6IHRydWUsXG4gICAgLyoqXG4gICAgICogSW50ZW5kZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgd2hlcmUgd2UgbmVlZCBhbiBlYXN5IHdheSB0byBhZGQgR0EgdG8gZXZlcnkgZ2VuZXJhdGVkIGFwcFxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VHb29nbGVBbmFseXRpY3M6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRydWUgd2lsbCBhZGQgdGhlIFNlcnZpY2VXb3JrZXIgbWFpbiB0aHJlYWQgYWRkb24gdG8gc3VwcG9ydCBjYWNoaW5nIG9mIGFzc2V0cyAoUFdBKVxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VfV29ya2VyX0FQSVxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIHVzZSBhIHN0cmluZyB0byBzcGVjaWZ5IHRoZSB0YXJnZXQgZW52aXJvbm1lbnQgPT4gJ2Rpc3QvcHJvZHVjdGlvbicuXG4gICAgICogVXNpbmcgJ2Rpc3QvcHJvZHVjdGlvbicgd2lsbCBhbHNvIHVzZSB0aGUgc2VydmljZSB3b3JrZXIgZm9yICdkaXN0L2VzbSdcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VTZXJ2aWNlV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhbnxTdHJpbmdcbiAgICAgKi9cbiAgICB1c2VTZXJ2aWNlV29ya2VyOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIEFwcCwgRGF0YSAmIFZEb20gYXMgU2hhcmVkV29ya2Vycy5cbiAgICAgKiBTZXQgdGhpcyBvbmUgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNvbm5lY3QgbXVsdGlwbGUgbWFpbiB0aHJlYWRzLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVNoYXJlZFdvcmtlcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlU2hhcmVkV29ya2VyczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGdlbmVyYXRlIGEgbmV3IHRhc2sgd29ya2VyLCB3aGljaCBjYW4gZ2V0IGZpbGxlZCB3aXRoIG93biBleHBlbnNpdmUgcmVtb3RlIG1ldGhvZHNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VUYXNrV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVRhc2tXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZhbHNlIHdpbGwgY3JlYXRlIHRoZSB2ZG9tLkhlbHBlciB3aXRoaW4gdGhlIEFwcCB3b3JrZXIgKGV4cGVyaW1lbnRhbCEpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VWZG9tV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVZkb21Xb3JrZXI6IHRydWUsXG4gICAgLyoqXG4gICAgICogYnVpbGRTY3JpcHRzL2luamVjdFBhY2thZ2VWZXJzaW9uLm1qcyB3aWxsIHVwZGF0ZSB0aGlzIHZhbHVlXG4gICAgICogQGRlZmF1bHQgJzkuMTMuMSdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudmVyc2lvblxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHZlcnNpb246ICc5LjEzLjEnXG59O1xuXG5PYmplY3QuYXNzaWduKERlZmF1bHRDb25maWcsIHtcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSB0b3AgbGV2ZWwgbmVvLm1qcyByZXNvdXJjZXMgZm9sZGVyXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdyZXNvdXJjZXMvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZXNvdXJjZXNQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgcmVzb3VyY2VzUGF0aDogYCR7TmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRofXJlc291cmNlcy9gLFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJhc2UgVVJMIGZvciB3ZWIgd29ya2VyIGVudHJ5IHBvaW50cyAoQXBwLCBEYXRhLCBWZG9tKVxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLndvcmtlckJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgd29ya2VyQmFzZVBhdGg6IGAke05lby5jb25maWcuYmFzZVBhdGggfHwgRGVmYXVsdENvbmZpZy5iYXNlUGF0aH1zcmMvd29ya2VyL2AsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdENvbmZpZztcbiIsImltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4vRGVmYXVsdENvbmZpZy5tanMnO1xuXG5jb25zdFxuICAgIGNhbWVsUmVnZXggICA9IC8tLi9nLFxuICAgIGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgIGdldFNldENhY2hlICA9IFN5bWJvbCgnZ2V0U2V0Q2FjaGUnKSxcbiAgICB0eXBlRGV0ZWN0b3IgPSB7XG4gICAgICAgIGZ1bmN0aW9uOiBpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnByb3RvdHlwZT8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnTmVvQ2xhc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9iamVjdDogaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIGl0ZW0gaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdOZW9JbnN0YW5jZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbi8qKlxuICogVGhlIGJhc2UgbW9kdWxlIHRvIGVuaGFuY2UgY2xhc3NlcywgY3JlYXRlIGluc3RhbmNlcyBhbmQgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEBtb2R1bGUgTmVvXG4gKiBAc2luZ2xldG9uXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmJpbmRNZXRob2RzICAgICAgIGFzIGJpbmRNZXRob2RzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNhcGl0YWxpemUgICAgICAgIGFzIGNhcGl0YWxpemVcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVzICAgICAgYXMgY3JlYXRlU3R5bGVzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmRlY2FtZWwgICAgICAgICAgIGFzIGRlY2FtZWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0Jvb2xlYW4gICAgICAgICBhcyBpc0Jvb2xlYW5cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNEZWZpbmVkICAgICAgICAgYXMgaXNEZWZpbmVkXG4gKiBAYm9ycm93cyBOZW8uY29yZS5Db21wYXJlLmlzRXF1YWwgICAgICAgIGFzIGlzRXF1YWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNOdW1iZXIgICAgICAgICAgYXMgaXNOdW1iZXJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgICAgICAgICAgYXMgaXNPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNTdHJpbmcgICAgICAgICAgYXMgaXNTdHJpbmdcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwudG9BcnJheSAgICAgICAgICAgYXMgdG9BcnJheVxuICogQHR1dG9yaWFsIDAxX0NvbmNlcHRcbiAqL1xubGV0IE5lbyA9IGdsb2JhbFRoaXMuTmVvIHx8IHt9O1xuXG5OZW8gPSBnbG9iYWxUaGlzLk5lbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIC8qKlxuICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgbnR5cGVzIGFzIGtleSBhbmQgTmVvIGNsYXNzZXMgb3Igc2luZ2xldG9ucyBhcyB2YWx1ZXNcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgbnR5cGVNYXA6IHt9LFxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgbWV0aG9kcyBmcm9tIG9uZSBuYW1lc3BhY2UgdG8gYW5vdGhlciBvbmVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIC8vIGFsaWFzZXNcbiAgICAgKiBOZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgICogICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgICAqICAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXG4gICAgICogICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZSdcbiAgICAgKiB9LCB0cnVlKTtcbiAgICAgKlxuICAgICAqIC8vIGUuZy4gTmVvLmNvcmUuVXRpbC5pc09iamVjdCA9PiBOZW8uaXNPYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvfE5lby5jb3JlLkJhc2V9IHRhcmdldCAgICBUaGUgdGFyZ2V0IGNsYXNzIG9yIHNpbmdsZXRvbiBJbnN0YW5jZSBvciBOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9ICAgICBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgICAgICBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgICAgICBbYmluZF0gICAgc2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGJpbmQgbWV0aG9kcyB0byB0aGUgXCJmcm9tXCIgbmFtZXNwYWNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHlGcm9tTnModGFyZ2V0LCBuYW1lc3BhY2UsIGNvbmZpZywgYmluZCkge1xuICAgICAgICBsZXQgZm5OYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihjb25maWcpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvICAgICA9IHR5cGVvZiBjbHMgPT09ICdmdW5jdGlvbicgPyBjbHMucHJvdG90eXBlIDogY2xzLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvdG8uaXNDbGFzcyA/IHByb3RvLmNvbmZpZy5jbGFzc05hbWUgOiBwcm90by5jbGFzc05hbWUsXG4gICAgICAgICAgICBuc0FycmF5ICAgPSBjbGFzc05hbWUuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGtleSAgICAgICA9IG5zQXJyYXkucG9wKCksXG4gICAgICAgICAgICBucyAgICAgICAgPSBOZW8ubnMobnNBcnJheSwgdHJ1ZSk7XG5cbiAgICAgICAgbnNba2V5XSA9IGNsc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0ICAgVGhlIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgVGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXlzIHlvdSB3YW50IHRvIGNvcHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKi9cbiAgICBhc3NpZ25EZWZhdWx0cyh0YXJnZXQsIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihkZWZhdWx0cykgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QuaGFzT3duKHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBhIG5ldyB2YWx1ZSB0byBhIGdpdmVuIG5lc3RlZCBvYmplY3RzIHBhdGguXG4gICAgICogSXQgd2lsbCBjcmVhdGUgdGhlIHBhdGggc3RydWN0dXJlIG9yIHBhcnRzIG9mIGl0LCBpbiBjYXNlIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmFzc2lnblRvTnMoJ2Fubm90YXRpb25zLnNlbGVjdGVkJywgZmFsc2UsIHJlY29yZClcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxTdHJpbmd9IHBhdGggICAgICAgICAgICAgVGhlIHBhdGggc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHsqfSAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgVGhlIG5ldyB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIGxlYWYgbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBzY29wZT1nbG9iYWxUaGlzIFNldCBhIGRpZmZlcmVudCBzdGFydGluZyBwb2ludCBhcyBnbG9iYWxUaGlzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgICAgIGZvcmNlPXRydWUgICAgICAgZmFsc2Ugd2lsbCBvbmx5IGFzc2lnbiBkZWZhdWx0IHZhbHVlcyAoYXNzaWduIGlmIG9sZCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAqL1xuICAgIGFzc2lnblRvTnMocGF0aCwgdmFsdWUsIHNjb3BlPWdsb2JhbFRoaXMsIGZvcmNlPXRydWUpIHtcbiAgICAgICAgcGF0aCA9IEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogcGF0aC5zcGxpdCgnLicpO1xuXG4gICAgICAgIGxldCBrZXk7XG5cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAga2V5ICAgPSBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgc2NvcGUgPSBOZW8ubnMocGF0aCwgdHJ1ZSwgc2NvcGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBwYXRoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9yY2UgfHwgc2NvcGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzY29wZVtrZXldID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBrZWJhYi1jYXNlIHN0cmluZ3MgaW50byBjYW1lbC1jYXNlXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGNhbWVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGNhbWVsUmVnZXgsIG1hdGNoID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVbMF0udG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkZWVwPWZhbHNlICAgICAgICAgICAgICAgU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNsb25lIG5lc3RlZCBvYmplY3RzIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlnbm9yZU5lb0luc3RhbmNlcz1mYWxzZSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl8Kn0gdGhlIGNsb25lZCBpbnB1dFxuICAgICAqL1xuICAgIGNsb25lKG9iaiwgZGVlcD1mYWxzZSwgaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlKSB7XG4gICAgICAgIGxldCBvdXQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEFycmF5ICAgICAgOiAoKSA9PiAhZGVlcCA/IFsuLi5vYmpdIDogWy4uLm9iai5tYXAodmFsID0+IE5lby5jbG9uZSh2YWwsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcykpXSxcbiAgICAgICAgICAgIERhdGUgICAgICAgOiAoKSA9PiBuZXcgRGF0ZShvYmoudmFsdWVPZigpKSxcbiAgICAgICAgICAgIE1hcCAgICAgICAgOiAoKSA9PiBuZXcgTWFwKG9iaiksIC8vIHNoYWxsb3cgY29weVxuICAgICAgICAgICAgTmVvSW5zdGFuY2U6ICgpID0+IGlnbm9yZU5lb0luc3RhbmNlcyA/IG9iaiA6IHRoaXMuY2xvbmVOZW9JbnN0YW5jZShvYmopLFxuICAgICAgICAgICAgU2V0ICAgICAgICA6ICgpID0+IG5ldyBTZXQob2JqKSxcblxuICAgICAgICAgICAgT2JqZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0ID0ge307XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9ICFkZWVwID8gdmFsdWUgOiBOZW8uY2xvbmUodmFsdWUsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVtOZW8udHlwZU9mKG9iaildPy4oKSB8fCBvYmpcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSB1c2luZyB0aGUgb3JpZ2luYWxDb25maWcgd2l0aG91dCB0aGUgaWRcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gdGhlIGNsb25lZCBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsb25lTmVvSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHsuLi5pbnN0YW5jZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoaW5zdGFuY2UuY2xhc3NOYW1lLCBjb25maWcpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuICAgICAqXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5idXR0b24uQmFzZScsXG4gICAgICogICAgIGljb25DbHMgIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfG51bGx9IFRoZSBuZXcgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpIHtcbiAgICAgICAgbGV0IHR5cGUgPSBOZW8udHlwZU9mKGNsYXNzTmFtZSksXG4gICAgICAgICAgICBjbHMsIGluc3RhbmNlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnTmVvQ2xhc3MnKSB7XG4gICAgICAgICAgICBjbHMgPSBjbGFzc05hbWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBjb25maWcuY2xhc3NOYW1lIHx8IGNvbmZpZy5tb2R1bGUucHJvdG90eXBlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFleGlzdHMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgJyArIGNsYXNzTmFtZSArICcgZG9lcyBub3QgZXhpc3QnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbHMgPSBOZW8ubnMoY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKCk7XG5cbiAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0KGNvbmZpZyk7XG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2Uub25BZnRlckNvbnN0cnVjdGVkKCk7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBlbXB0eUZuKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBzZXQgbWV0aG9kIGZvciBhIGdpdmVuIHByb3BlcnR5IGtleSBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90byBUaGUgdG9wIGxldmVsIHByb3RvdHlwZSBvZiBhIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICAgICAgICBrZXkgICBUaGUgcHJvcGVydHkga2V5IHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yO1xuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkZXNjcmlwdG9yLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVlcC1tZXJnZXMgYSBzb3VyY2Ugb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIG1lcmdlKHRhcmdldCwgc291cmNlLCBkZWZhdWx0cykge1xuICAgICAgICBpZiAoZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBOZW8ubWVyZ2UoTmVvLm1lcmdlKHRhcmdldCwgZGVmYXVsdHMpLCBzb3VyY2UpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChOZW8udHlwZU9mKHZhbHVlKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IE5lby5tZXJnZSh0YXJnZXRba2V5XSB8fCB7fSwgdmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdpdmVuIG9yIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5ucygnTmVvLmJ1dHRvbi5CYXNlJywgdHJ1ZSk7XG4gICAgICogLy8gPT5cbiAgICAgKiAvLyBnbG9iYWxUaGlzLk5lbyAgICAgICAgICAgICA9IGdsb2JhbFRoaXMuTmVvICAgICAgICAgICAgIHx8IHt9O1xuICAgICAqIC8vIGdsb2JhbFRoaXMuTmVvLmJ1dHRvbiAgICAgID0gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uICAgICAgfHwge307XG4gICAgICogLy8gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uLkJhc2UgPSBnbG9iYWxUaGlzLk5lby5idXR0b24uQmFzZSB8fCB7fTtcbiAgICAgKiAvLyByZXR1cm4gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uLkJhc2U7XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nW118U3RyaW5nfSBuYW1lcyAgICAgICAgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgICAgIGNyZWF0ZT1mYWxzZSBTZXQgY3JlYXRlIHRvIHRydWUgdG8gY3JlYXRlIGVtcHR5IG9iamVjdHMgZm9yIG5vbi1leGlzdGluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBbc2NvcGVdICAgICAgU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zKG5hbWVzLCBjcmVhdGU9ZmFsc2UsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IGdsb2JhbFRoaXMpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEV4dGVuZGVkIHZlcnNpb24gb2YgTmVvLm5zKCkgd2hpY2ggc3VwcG9ydHMgbWFwcGluZyBpbnRvIGFycmF5cy5cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyAgICAgICAgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgIGNyZWF0ZT1mYWxzZSBTZXQgY3JlYXRlIHRvIHRydWUgdG8gY3JlYXRlIGVtcHR5IG9iamVjdHMgZm9yIG5vbi1leGlzdGluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICBbc2NvcGVdICAgICAgU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zV2l0aEFycmF5cyhuYW1lcywgY3JlYXRlPWZhbHNlLCBzY29wZSkge1xuICAgICAgICBuYW1lcyA9IEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXMgOiBuYW1lcy5zcGxpdCgnLicpO1xuXG4gICAgICAgIHJldHVybiBuYW1lcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjcmVhdGUgJiYgIXByZXZbY3VycmVudF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBcnJheU5zKHRydWUsIGN1cnJlbnQsIHByZXYpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQXJyYXlOcyhmYWxzZSwgY3VycmVudCwgcHJldilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSB8fCBnbG9iYWxUaGlzKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKHtcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG50eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfVxuICAgICAqIEBzZWUge0BsaW5rIG1vZHVsZTpOZW8uY3JlYXRlIGNyZWF0ZX1cbiAgICAgKi9cbiAgICBudHlwZShudHlwZSwgY29uZmlnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBudHlwZTtcblxuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIGRlZmluZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIG50eXBlIHByb3BlcnR5LiAnICsgY29uZmlnLm50eXBlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBudHlwZSA9IGNvbmZpZy5udHlwZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XG5cbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAdGVtcGxhdGUgVFxuICAgICAqIEBwYXJhbSB7VH0gY2xzXG4gICAgICogQHJldHVybnMge1R9XG4gICAgICovXG4gICAgc2V0dXBDbGFzcyhjbHMpIHtcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgPSBudWxsLFxuICAgICAgICAgICAgbnR5cGVDaGFpbiA9IFtdLFxuICAgICAgICAgICAge250eXBlTWFwfSA9IE5lbyxcbiAgICAgICAgICAgIHByb3RvICAgICAgPSBjbHMucHJvdG90eXBlIHx8IGNscyxcbiAgICAgICAgICAgIG5zICAgICAgICAgPSBOZW8ubnMocHJvdG8uY29uc3RydWN0b3IuY29uZmlnLmNsYXNzTmFtZSwgZmFsc2UpLFxuICAgICAgICAgICAgcHJvdG9zICAgICA9IFtdLFxuICAgICAgICAgICAgY2ZnLCBjb25maWcsIGN0b3IsIG50eXBlO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIElmIHRoZSBuYW1lc3BhY2UgYWxyZWFkeSBleGlzdHMsIGRpcmVjdGx5IHJldHVybiBpdC5cbiAgICAgICAgICogVGhpcyBjYW4gaGFwcGVuIHdoZW4gdXNpbmcgZGlmZmVyZW50IHZlcnNpb25zIG9mIG5lby5tanNcbiAgICAgICAgICogPT4gRXNwZWNpYWxseSBzaW5nbGV0b25zIChJZEdlbmVyYXRvcikgbXVzdCBzdGF5IHVuaXF1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBjYW4gYWxzbyBoYXBwZW4gd2hlbiB1c2luZyBkaWZmZXJlbnQgZW52aXJvbm1lbnRzIG9mIG5lby5tanMgaW4gcGFyYWxsZWwuXG4gICAgICAgICAqIEV4YW1wbGU6IGNvZGUuTGl2ZVByZXZpZXcgcnVubmluZyBpbnNpZGUgYSBkaXN0L3Byb2R1Y3Rpb24gYXBwLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgICByZXR1cm4gbnNcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY3RvciwgJ2NsYXNzQ29uZmlnQXBwbGllZCcpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbnR5cGVDaGFpbiA9IFsuLi5jdG9yLm50eXBlQ2hhaW5dO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3Rvcy51bnNoaWZ0KHByb3RvKTtcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fXG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcgPSBiYXNlQ2ZnIHx8IHt9O1xuXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IG1peGlucztcblxuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XG5cbiAgICAgICAgICAgIGNmZyA9IGN0b3IuY29uZmlnIHx8IHt9O1xuXG4gICAgICAgICAgICBpZiAoTmVvLm92ZXJ3cml0ZXMpIHtcbiAgICAgICAgICAgICAgICBjdG9yLmFwcGx5T3ZlcndyaXRlcz8uKGNmZylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKC0xKSA9PT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgY2ZnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBhcHBseSBwcm9wZXJ0aWVzIHdoaWNoIGhhdmUgbm8gc2V0dGVycyBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIU5lby5oYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlICA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY2ZnLCAnbnR5cGUnKSkge1xuICAgICAgICAgICAgICAgIG50eXBlID0gY2ZnLm50eXBlO1xuXG4gICAgICAgICAgICAgICAgbnR5cGVDaGFpbi51bnNoaWZ0KG50eXBlKTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1bm5pbmcgdGhlIGRvY3MgYXBwIGluc2lkZSBhIHdvcmtzcGFjZSBjYW4gcHVsbCBpbiB0aGUgc2FtZSBjbGFzc2VzIGZyb20gZGlmZmVyZW50IHJvb3RzLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIHdhbnQgdG8gY2hlY2sgZm9yIGRpZmZlcmVudCBjbGFzcyBuYW1lcyBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24obnR5cGVNYXAsIG50eXBlKSAmJiBjZmcuY2xhc3NOYW1lICE9PSBudHlwZU1hcFtudHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBudHlwZSBjb25mbGljdCBmb3IgJyR7bnR5cGV9JyBpbnNpZGUgdGhlIGNsYXNzZXM6XFxuJHtudHlwZU1hcFtudHlwZV19XFxuJHtjZmcuY2xhc3NOYW1lfWApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbnR5cGVNYXBbbnR5cGVdID0gY2ZnLmNsYXNzTmFtZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaXhpbnMgPSBPYmplY3QuaGFzT3duKGNvbmZpZywgJ21peGlucycpICYmIGNvbmZpZy5taXhpbnMgfHwgW107XG5cbiAgICAgICAgICAgIGlmIChjdG9yLm9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCgnTmVvLmNvcmUuT2JzZXJ2YWJsZScpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duKGNmZywgJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlNaXhpbnMoY3RvciwgbWl4aW5zKTtcblxuICAgICAgICAgICAgICAgIGlmIChOZW8ubnMoJ05lby5jb3JlLk9ic2VydmFibGUnLCBmYWxzZSwgY3Rvci5wcm90b3R5cGUubWl4aW5zKSkge1xuICAgICAgICAgICAgICAgICAgICBjdG9yLm9ic2VydmFibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY2ZnLm1peGlucztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubWl4aW5zO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgY2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIG50eXBlQ2hhaW5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAhY29uZmlnLnNpbmdsZXRvbiAmJiB0aGlzLmFwcGx5VG9HbG9iYWxOcyhjbHMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb3RvID0gY2xzLnByb3RvdHlwZSB8fCBjbHM7XG5cbiAgICAgICAgbnR5cGVDaGFpbi5mb3JFYWNoKG50eXBlID0+IHtcbiAgICAgICAgICAgIHByb3RvW2BpcyR7TmVvLmNhcGl0YWxpemUoTmVvLmNhbWVsKG50eXBlKSl9YF0gPSB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm90by5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgIGNscyA9IE5lby5jcmVhdGUoY2xzKTtcbiAgICAgICAgICAgIE5lby5hcHBseVRvR2xvYmFsTnMoY2xzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdHlwZU9mKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVEZXRlY3Rvclt0eXBlb2YgaXRlbV0/LihpdGVtKSB8fCBpdGVtLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB9XG59LCBOZW8pO1xuXG4vKipcbiAqIExpc3Qgb2YgY2xhc3MgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHN1cHBvc2VkIHRvIGdldCBtaXhlZCBpbnRvIG90aGVyIGNsYXNzZXNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGlnbm9yZU1peGluID0gW1xuICAgICdfbmFtZScsXG4gICAgJ2NsYXNzQ29uZmlnQXBwbGllZCcsXG4gICAgJ2NsYXNzTmFtZScsXG4gICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAnaXNDbGFzcycsXG4gICAgJ21peGluJyxcbiAgICAnbnR5cGUnLFxuICAgICdvYnNlcnZhYmxlJ1xuXSxcblxuICAgIGNoYXJzUmVnZXggICAgICAgICA9IC9cXGQrL2csXG4gICAgZXh0cmFjdEFycmF5c1JlZ2V4ID0gL14oXFx3KylcXHMqKCg/OlxcW1xccypcXGQrXFxzKlxcXVxccyopKikkLztcblxuLyoqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICogQHBhcmFtIHtBcnJheX0gICAgICAgICBtaXhpbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1peGlucykpIHtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgfVxuXG4gICAgbGV0IGkgICAgICAgICAgICA9IDAsXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXG4gICAgICAgIG1peGluQ2xhc3NlcyA9IHt9LFxuICAgICAgICBtaXhpbiwgbWl4aW5DbHMsIG1peGluUHJvdG87XG5cbiAgICBmb3IgKDtpIDwgbGVuO2krKykge1xuICAgICAgICBtaXhpbiA9IG1peGluc1tpXTtcblxuICAgICAgICBpZiAobWl4aW4uaXNDbGFzcykge1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluLnByb3RvdHlwZTtcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gbWl4aW4gYW4gdW5kZWZpbmVkIGNsYXNzOiAnICsgbWl4aW4gKyAnLCAnICsgY2xzLnByb3RvdHlwZS5jbGFzc05hbWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW4pO1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWl4aW5Qcm90bykuZm9yRWFjaChtaXhpblByb3BlcnR5KGNscy5wcm90b3R5cGUsIG1peGluUHJvdG8pKVxuICAgIH1cblxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzIC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2Vcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSAgICAgICAga2V5XG4gKiBAcHJpdmF0ZVxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGF1dG9HZW5lcmF0ZUdldFNldChwcm90bywga2V5KSB7XG4gICAgaWYgKE5lby5oYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSkge1xuICAgICAgICB0aHJvdygnQ29uZmlnICcgKyBrZXkgKyAnXyAoJyArIHByb3RvLmNsYXNzTmFtZSArICcpIGFscmVhZHkgaGFzIGEgc2V0IG1ldGhvZCwgdXNlIGJlZm9yZUdldCwgYmVmb3JlU2V0ICYgYWZ0ZXJTZXQgaW5zdGVhZCcpXG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV0gPSB7fVxuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlR2V0ID0gYGJlZm9yZUdldCR7a2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YCxcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gT2JqZWN0Lmhhc093bihtZVtjb25maWdTeW1ib2xdLCBrZXkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgICAgPSBtZVtjb25maWdTeW1ib2xdW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTmV3S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lWydfJyArIGtleV07IC8vIHJldHVybiB0aGUgdmFsdWUgcGFyc2VkIGJ5IHRoZSBzZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZUdldF0odmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgX2tleSAgICAgID0gJ18nICsga2V5LFxuICAgICAgICAgICAgICAgICAgICB1S2V5ICAgICAgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2V0ID0gJ2JlZm9yZVNldCcgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycgJiYga2V5ICE9PSAndm5vZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcbiAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgZG9uJ3QgcmV0dXJuIGEgdmFsdWUsIHRoYXQgbWVhbnMgbm8gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKGtleSA9PT0gJ3Zub2RlJyAmJiB2YWx1ZSAhPT0gb2xkVmFsdWUpIHx8IC8vIHZub2RlIHRyZWVzIGNhbiBiZSBodWdlLCBhdm9pZCBhIGRlZXAgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgICAhTmVvLmlzRXF1YWwodmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBtZVthZnRlclNldF0/Lih2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBtZS5hZnRlclNldENvbmZpZz8uKGtleSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywga2V5LCBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pXG59XG5cbi8qKlxuICogQHBhcmFtIHtCb29sZWFufSBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSAgY3VycmVudFxuICogQHBhcmFtIHtPYmplY3R9ICBwcmV2XG4gKiBAcmV0dXJucyB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlOcyhjcmVhdGUsIGN1cnJlbnQsIHByZXYpIHtcbiAgICBsZXQgYXJyRGV0YWlscyA9IHBhcnNlQXJyYXlGcm9tU3RyaW5nKGN1cnJlbnQpLFxuICAgICAgICBpICAgICAgICAgID0gMSxcbiAgICAgICAgbGVuICAgICAgICA9IGFyckRldGFpbHMubGVuZ3RoLFxuICAgICAgICBhcnJJdGVtLCBhcnJSb290O1xuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgICBwcmV2W2FyckRldGFpbHNbMF1dID0gYXJyUm9vdCA9IHByZXZbYXJyRGV0YWlsc1swXV0gfHwgW11cbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJSb290ID0gcHJldlthcnJEZXRhaWxzWzBdXVxuICAgIH1cblxuICAgIGlmICghYXJyUm9vdCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFyckl0ZW0gPSBwYXJzZUludChhcnJEZXRhaWxzW2ldKTtcblxuICAgICAgICBpZiAoY3JlYXRlKSB7XG4gICAgICAgICAgICBhcnJSb290W2Fyckl0ZW1dID0gYXJyUm9vdFthcnJJdGVtXSB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgYXJyUm9vdCA9IGFyclJvb3RbYXJySXRlbV1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyUm9vdFxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleGlzdHMoY2xhc3NOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XVxuICAgICAgICB9LCBnbG9iYWxUaGlzKVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvdG9ba2V5XT8uX2Zyb20pIHtcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWl4aW4gc2V0IG11bHRpcGxlIHRpbWVzIG9yIGFscmVhZHkgZGVmaW5lZCBvbiBhIEJhc2UgQ2xhc3MnLCBwcm90by5jbGFzc05hbWUsIG1peGluUHJvdG8uY2xhc3NOYW1lLCBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7cHJvdG8uY2xhc3NOYW1lfTogTXVsdGlwbGUgbWl4aW5zIGRlZmluaW5nIHNhbWUgcHJvcGVydHkgKCR7bWl4aW5Qcm90by5jbGFzc05hbWV9LCAke3Byb3RvW2tleV0uX2Zyb219KSA9PiAke2tleX1gXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBwcm90b1trZXldID0gbWl4aW5Qcm90b1trZXldO1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSkuX2Zyb20gPSBtaXhpblByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAodHlwZW9mIHByb3RvW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHByb3RvW2tleV0uX25hbWUgPSBrZXlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gbWl4aW5DbHNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peFJlZHVjZShtaXhpbkNscykge1xuICAgIHJldHVybiAocHJldiwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF0gPSBpZHggIT09IGFyci5sZW5ndGggLTEgPyBwcmV2W2N1cnJlbnRdIHx8IHt9IDogbWl4aW5DbHNcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcnJheUZyb21TdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIChleHRyYWN0QXJyYXlzUmVnZXguZXhlYyhzdHIpIHx8IFtudWxsXSkuc2xpY2UoMSkucmVkdWNlKFxuICAgICAgICAoZnVuLCBhcmdzKSA9PiBbZnVuXS5jb25jYXQoYXJncy5tYXRjaChjaGFyc1JlZ2V4KSlcbiAgICApXG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IE5lbztcbiIsImltcG9ydCB7YnVmZmVyLCBkZWJvdW5jZSwgaW50ZXJjZXB0LCByZXNvbHZlQ2FsbGJhY2ssIHRocm90dGxlfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9uLm1qcyc7XG5pbXBvcnQgSWRHZW5lcmF0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9JZEdlbmVyYXRvci5tanMnXG5cbmNvbnN0IGNvbmZpZ1N5bWJvbCAgICAgICA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgICAgZm9yY2VBc3NpZ25Db25maWdzID0gU3ltYm9sKCdmb3JjZUFzc2lnbkNvbmZpZ3MnKSxcbiAgICAgIGlzSW5zdGFuY2UgICAgICAgICA9IFN5bWJvbCgnaXNJbnN0YW5jZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciAoYWxtb3N0KSBhbGwgY2xhc3NlcyBpbnNpZGUgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEV4Y2VwdGlvbnMgYXJlIGUuZy4gY29yZS5JZEdlbmVyYXRvciwgdmRvbS5WTm9kZVxuICogQGNsYXNzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSB7XG4gICAgLyoqXG4gICAgICogWW91IGNhbiBkZWZpbmUgbWV0aG9kcyB3aGljaCBzaG91bGQgZ2V0IGRlbGF5ZWQuXG4gICAgICogVHlwZXMgYXJlIGJ1ZmZlciwgZGVib3VuY2UgJiB0aHJvdHRsZS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICBkZWxheWFibGU6IHtcbiAgICAgKiAgICAgIGZpcmVDaGFuZ2VFdmVudDoge1xuICAgICAqICAgICAgICAgIHR5cGUgOiAnZGVib3VuY2UnLFxuICAgICAqICAgICAgICAgIHRpbWVyOiAzMDBcbiAgICAgKiAgICAgIH1cbiAgICAgKiAgfVxuICAgICAqIEBtZW1iZXIge09iamVjdH0gZGVsYXlhYmxlPXt9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVsYXlhYmxlID0ge31cbiAgICAvKipcbiAgICAgKiBGbGFnIHdoaWNoIHdpbGwgZ2V0IHNldCB0byB0cnVlIG9uY2UgbWFuYWdlci5JbnN0YW5jZSBnb3QgY3JlYXRlZFxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluc3RhbmNlTWFuYWdlckF2YWlsYWJsZT1mYWxzZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2VcbiAgICAvKipcbiAgICAgKiBSZWdleCB0byBncmFiIHRoZSBNZXRob2ROYW1lIGZyb20gYW4gZXJyb3JcbiAgICAgKiB3aGljaCBpcyBhIHNlY29uZCBnZW5lcmF0aW9uIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlciB7UmVnRXhwfSBtZXRob2ROYW1lUmVnZXhcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG1ldGhvZE5hbWVSZWdleCA9IC9cXG4uKlxcblxccythdFxccysuKlxcLihcXHcrKVxccysuKi9cbiAgICAvKipcbiAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS5PYnNlcnZhYmxlIG1peGluXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT1mYWxzZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogS2VlcCB0aGUgb3ZlcndyaXR0ZW4gbWV0aG9kc1xuICAgICAqIEBtZW1iZXIge09iamVjdH0gb3ZlcndyaXR0ZW5NZXRob2RzPXt9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb3ZlcndyaXR0ZW5NZXRob2RzID0ge31cbiAgICAvKipcbiAgICAgKiBDb25maWdzIHdpbGwgZ2V0IG1lcmdlZCB0aHJvdWdob3V0IHRoZSBjbGFzcyBoaWVyYXJjaHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBzaG9ydGN1dC1uYW1lIHRvIHVzZSBmb3IgZS5nLiBjcmVhdGluZyBjaGlsZCBjb21wb25lbnRzIGluc2lkZSBhIEpTT04tZm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGlsZSBpdCBpcyByZWNvbW1lbmRlZCB0byBjaGFuZ2UgdGhlIHN0YXRpYyBkZWxheWFibGUgY29uZmlncyBvbiBjbGFzcyBsZXZlbCxcbiAgICAgICAgICogeW91IGNhbiBjaGFuZ2UgaXQgb24gaW5zdGFuY2UgbGV2ZWwgdG9vLiBJZiBub3QgbnVsbCwgd2Ugd2lsbCBkbyBhIGRlZXAgbWVyZ2UuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZGVsYXlhYmxlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5YWJsZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgY29tcG9uZW50IGlkXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaWRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogTmVvLmNyZWF0ZSgpIHdpbGwgY2hhbmdlIHRoaXMgZmxhZyB0byB0cnVlIGFmdGVyIHRoZSBvbkNvbnN0cnVjdGVkKCkgY2hhaW4gaXMgZG9uZS5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNDb25zdHJ1Y3RlZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc0NvbnN0cnVjdGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBtaXhpbnMgYXMgYW4gYXJyYXkgb2YgY2xhc3NOYW1lcywgaW1wb3J0ZWQgbW9kdWxlcyBvciBhIG1peGVkIHZlcnNpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBieSBwYXNzaW5nIGFuIGltcG9ydGVkIGNsYXNzIChKUyBtb2R1bGUgZGVmYXVsdCBleHBvcnQpXG4gICAgICAgICAqIEBtZW1iZXIge0NsYXNzfSBtb2R1bGU9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtb2R1bGU6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBjYWNoZSBmb3IgYWxsIHRpbWVvdXQgaWRzIHdoZW4gdXNpbmcgdGhpcy50aW1lb3V0KClcbiAgICAgKiBAbWVtYmVyIHtOdW1iZXJbXX0gdGltZW91dElkcz1bXVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgI3RpbWVvdXRJZHMgPSBbXVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnPXt9XG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XG4gICAgICAgICAgICBbY29uZmlnU3ltYm9sXToge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgIDoge30sXG4gICAgICAgICAgICAgICAgd3JpdGFibGUgICAgOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW2lzSW5zdGFuY2VdOiB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5jcmVhdGVJZChjb25maWcuaWQgfHwgbWUuaWQpO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5jb25zdHJ1Y3Rvci5jb25maWcuaWRcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpICYmIG1lLmluaXRPYnNlcnZhYmxlKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gYXNzaWduIGNsYXNzIGZpZWxkIHZhbHVlcyBwcmlvciB0byBjb25maWdzXG4gICAgICAgIGNvbmZpZyA9IG1lLnNldEZpZWxkcyhjb25maWcpO1xuXG4gICAgICAgIG1lLmluaXRDb25maWcoY29uZmlnKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5hcHBseURlbGF5YWJsZSgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIFdlIGRvIG5vdCB3YW50IHRvIGZvcmNlIGRldnMgdG8gY2hlY2sgZm9yIHRoZSBgaXNEZXN0cm95ZWRgIGZsYWcgaW4gZXZlcnkgcG9zc2libGUgY2xhc3MgZXh0ZW5zaW9uLlxuICAgICAgICAgKiBTbywgd2UgYXJlIGludGVyY2VwdGluZyB0aGUgdG9wLW1vc3QgYGRlc3Ryb3koKWAgY2FsbCB0byBjaGVjayBmb3IgdGhlIGZsYWcgdGhlcmUuXG4gICAgICAgICAqIFJhdGlvbmFsZTogYGRlc3Ryb3koKWAgbXVzdCBvbmx5IGdldCBjYWxsZWQgb25jZS5cbiAgICAgICAgICovXG4gICAgICAgIGludGVyY2VwdChtZSwgJ2Rlc3Ryb3knLCBtZS5pc0Rlc3Ryb3llZENoZWNrLCBtZSk7XG5cbiAgICAgICAgbWUucmVtb3RlICYmIHNldFRpbWVvdXQobWUuaW5pdFJlbW90ZS5iaW5kKG1lKSwgMSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlkIGNvbmZpZyBnb3QgY2hhbmdlZC5cbiAgICAgKiBZb3UgY2FuIGR5bmFtaWNhbGx5IGNoYW5nZSBpbnN0YW5jZSBpZHMgaWYgbmVlZGVkLiBUaGV5IG5lZWQgdG8gc3RheSB1bmlxdWUgYXQgYW55IGdpdmVuIHBvaW50LlxuICAgICAqIFVzZSBjYXNlOiBlLmcuIGNvbXBvbmVudCBiYXNlZCBsaXN0cywgd2hlcmUgeW91IHdhbnQgdG8gcmUtdXNlIGl0ZW0gaW5zdGFuY2VzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWFuYWdlciA9IEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGhhc01hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG9sZFZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwW29sZFZhbHVlXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaGFzTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0gTmVvLmlkTWFwIHx8IHt9O1xuICAgICAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRqdXN0cyBhbGwgbWV0aG9kcyBpbnNpZGUgc3RhdGljIGRlbGF5YWJsZVxuICAgICAqL1xuICAgIGFwcGx5RGVsYXlhYmxlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yRGVsYXlhYmxlID0gbWUuY29uc3RydWN0b3IuZGVsYXlhYmxlLFxuICAgICAgICAgICAgZGVsYXlhYmxlICAgICA9IG1lLmRlbGF5YWJsZSA/IE5lby5tZXJnZSh7fSwgbWUuZGVsYXlhYmxlLCBjdG9yRGVsYXlhYmxlKSA6IGN0b3JEZWxheWFibGU7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVsYXlhYmxlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtYXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcigpICAge21lW2tleV0gPSBuZXcgYnVmZmVyKG1lW2tleV0sICAgbWUsIHZhbHVlLnRpbWVyKX0sXG4gICAgICAgICAgICAgICAgICAgIGRlYm91bmNlKCkge21lW2tleV0gPSBuZXcgZGVib3VuY2UobWVba2V5XSwgbWUsIHZhbHVlLnRpbWVyKX0sXG4gICAgICAgICAgICAgICAgICAgIHRocm90dGxlKCkge21lW2tleV0gPSBuZXcgdGhyb3R0bGUobWVba2V5XSwgbWUsIHZhbHVlLnRpbWVyKX1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbWFwW3ZhbHVlLnR5cGVdPy4oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5aW5nIG92ZXJ3cml0ZXMgYW5kIGFkZGluZyBvdmVyd3JpdHRlbk1ldGhvZHMgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIGFwcGx5T3ZlcndyaXRlcyhjZmcpIHtcbiAgICAgICAgbGV0IG92ZXJ3cml0ZXMgPSBOZW8ubnMoY2ZnLmNsYXNzTmFtZSwgZmFsc2UsIE5lby5vdmVyd3JpdGVzKSxcbiAgICAgICAgICAgIGNscywgaXRlbTtcblxuICAgICAgICBpZiAob3ZlcndyaXRlcykge1xuICAgICAgICAgICAgLy8gQXBwbHkgYWxsIG1ldGhvZHNcbiAgICAgICAgICAgIGZvciAoaXRlbSBpbiBvdmVyd3JpdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc0Z1bmN0aW9uKG92ZXJ3cml0ZXNbaXRlbV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFscmVhZHkgZXhpc3Rpbmcgb25lc1xuICAgICAgICAgICAgICAgICAgICBjbHMgPSB0aGlzLnByb3RvdHlwZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xzW2l0ZW1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gb3ZlcndyaXR0ZW5NZXRob2RzXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMuY29uc3RydWN0b3Iub3ZlcndyaXR0ZW5NZXRob2RzW2l0ZW1dID0gY2xzW2l0ZW1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZ3MgdG8gcHJvdG90eXBlXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNmZywgb3ZlcndyaXRlcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IHZhbHVlIG9yIG9sZFZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGljTmFtZSkgPyBzdGF0aWNOYW1lIDogdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTdXBwb3J0ZWQgdmFsdWVzIGZvciAke25hbWV9IGFyZTpgLCAuLi52YWx1ZXMsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZm4gICAgICAgICAgICAgICBUaGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9yaWdpbk5hbWUgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCBpbnNpZGUgdGhlIG9yaWdpblNjb3BlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZSAgICAgICAgICAgIFRoZSBzY29wZSB0byBmaW5kIHRoZSBmdW5jdGlvbiBpbiBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9yaWdpblNjb3BlPXRoaXMgVGhlIHNjb3BlIHdoZXJlIHRoZSBmdW5jdGlvbiBpcyBsb2NhdGVkLlxuICAgICAqL1xuICAgIGJpbmRDYWxsYmFjayhmbiwgb3JpZ2luTmFtZSwgc2NvcGU9dGhpcywgb3JpZ2luU2NvcGU9dGhpcykge1xuICAgICAgICBpZiAoZm4gJiYgTmVvLmlzU3RyaW5nKGZuKSkge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHJlc29sdmVDYWxsYmFjayhmbiwgc2NvcGUpO1xuICAgICAgICAgICAgb3JpZ2luU2NvcGVbb3JpZ2luTmFtZV0gPSBoYW5kbGVyLmZuLmJpbmQoaGFuZGxlci5zY29wZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZyb20gd2l0aGluIGFuIG92ZXJ3cml0ZSwgYSBtZXRob2QgY2FuIGNhbGwgYSBwYXJlbnQgbWV0aG9kLCBieSB1c2luZyBjYWxsT3ZlcndyaXR0ZW4uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIGFmdGVyU2V0SGVpZ2h0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAqICAgICAgICAvLyBkbyB0aGUgc3RhbmRhcmRcbiAgICAgKiAgICAgICAgdGhpcy5jYWxsT3ZlcndyaXR0ZW4oLi4uYXJndW1lbnRzKTtcbiAgICAgKiAgICAgICAgLy8gZG8geW91IG93biBzdHVmZlxuICAgICAqICAgIH1cbiAgICAgKlxuICAgICAqIFdlIGNyZWF0ZSBhbiBlcnJvciB0byBnZXQgdGhlIGNhbGxlci5uYW1lIGFuZCB0aGVuIHJ1biB0aGF0IG1ldGhvZCBvbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICogVGhpcyBpcyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIGVycm9yIHN0cnVjdHVyZSwgZS5nLiBhZnRlclNldEhlaWdodC5cbiAgICAgKlxuICAgICAqICAgICBFcnJvclxuICAgICAqICAgICAgICAgYXQgQmFzZS5jYWxsT3ZlcndyaXR0ZW4gKEJhc2UubWpzOjE3NjoyMSlcbiAgICAgKiAgICAgICAgIGF0IEJhc2UuYWZ0ZXJTZXRIZWlnaHQgKE92ZXJyaWRlcy5tanM6MTk6MjYpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGNhbGxPdmVyd3JpdHRlbiguLi5hcmdzKSB7XG4gICAgICAgIGxldCBzdGFjayAgICAgID0gbmV3IEVycm9yKCkuc3RhY2ssXG4gICAgICAgICAgICBtZXRob2ROYW1lID0gc3RhY2subWF0Y2goQmFzZS5tZXRob2ROYW1lUmVnZXgpWzFdO1xuXG4gICAgICAgIHRoaXMuX19wcm90b19fLmNvbnN0cnVjdG9yLm92ZXJ3cml0dGVuTWV0aG9kc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgSWRHZW5lcmF0b3IgdG8gY3JlYXRlIGFuIGlkIGlmIGEgc3RhdGljIG9uZSBpcyBub3QgZXhwbGljaXRseSBzZXQuXG4gICAgICogUmVnaXN0ZXJzIHRoZSBpbnN0YW5jZSB0byBtYW5hZ2VyLkluc3RhbmNlIGlmIHRoaXMgb25lIGlzIGFscmVhZHkgY3JlYXRlZCxcbiAgICAgKiBvdGhlcndpc2Ugc3RvcmVzIGl0IGluc2lkZSBhIHRtcCBtYXAuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgY3JlYXRlSWQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IElkR2VuZXJhdG9yLmdldElkKHRoaXMuZ2V0SWRLZXkoKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcbiAgICAgKiBhbmQgcmVtb3ZlcyBhbGwgb2JqZWN0IGVudHJpZXMgZnJvbSB0aGlzIGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS4jdGltZW91dElkcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG1lKVxuICAgICAgICB9IGVsc2UgaWYgKE5lby5pZE1hcCkge1xuICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFttZS5pZF1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtZSwga2V5KS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIG11c3Qgbm90IGRlbGV0ZSB0aGUgY3VzdG9tIGRlc3Ryb3koKSBpbnRlcmNlcHRvclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdkZXN0cm95JyAmJiBrZXkgIT09ICdfaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtrZXldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXZSBkbyB3YW50IHRvIHByZXZlbnQgZGVsYXllZCBldmVudCBjYWxscyBhZnRlciBhbiBvYnNlcnZhYmxlIGluc3RhbmNlIGdvdCBkZXN0cm95ZWQuXG4gICAgICAgIGlmIChOZW8uaXNGdW5jdGlvbihtZS5maXJlKSkge1xuICAgICAgICAgICAgbWUuZmlyZSA9IE5lby5lbXB0eUZuXG4gICAgICAgIH1cblxuICAgICAgICBtZS5pc0Rlc3Ryb3llZCA9IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGluc2lkZSBjcmVhdGVJZCgpIGFzIHRoZSBkZWZhdWx0IHZhbHVlIHBhc3NlZCB0byB0aGUgSWRHZW5lcmF0b3IuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgYXMgbmVlZGVkLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm50eXBlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGtleSBvciB0aGUgc3RhdGljQ29uZmlnIG9iamVjdCBpdHNlbGYgaW4gY2FzZSBubyB2YWx1ZSBpcyBzZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Jba2V5XVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgZ2l2ZW4gbnR5cGUgZXhpc3RzIGluc2lkZSB0aGUgcHJvdG8gY2hhaW4sIGluY2x1ZGluZyB0aGUgdG9wIGxldmVsIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG50eXBlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzTnR5cGUobnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubnR5cGVDaGFpbi5pbmNsdWRlcyhudHlwZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBvbkNvbnN0cnVjdGVkKCkgaXMgZG9uZVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb3JlLkJhc2Ujb25Db25zdHJ1Y3RlZCBvbkNvbnN0cnVjdGVkfVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhbGwgY2xhc3MgY29uZmlncyB0byB0aGlzIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGluaXRDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pc0NvbmZpZ3VyaW5nID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCBtZS5tZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykpO1xuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgICAgICBtZS5pc0NvbmZpZ3VyaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG9lcyBnZXQgdHJpZ2dlcmVkIHdpdGggYSBkZWxheSB0byBlbnN1cmUgdGhhdCBOZW8ud29ya2VySWQgJiBOZW8ud29ya2VyLk1hbmFnZXIgYXJlIGRlZmluZWRcbiAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyB2aWEgcHJvbWlzZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2NsYXNzTmFtZSwgcmVtb3RlfSA9IG1lLFxuICAgICAgICAgICAge2N1cnJlbnRXb3JrZXJ9ICAgICA9IE5lbztcblxuICAgICAgICBpZiAoIW1lLnNpbmdsZXRvbiAmJiAhbWUuaXNNYWluVGhyZWFkQWRkb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIG1ldGhvZCBhY2Nlc3MgaXMgb25seSBmdW5jdGlvbmFsIGZvciBTaW5nbGV0b24gY2xhc3NlcyAnICsgY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nICYmIGN1cnJlbnRXb3JrZXIuaXNTaGFyZWRXb3JrZXIgJiYgIWN1cnJlbnRXb3JrZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpXG4gICAgICAgICAgICAgICAgfSwgbWUsIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVyY2VwdHMgZGVzdHJveSgpIGNhbGxzIHRvIGVuc3VyZSB0aGV5IHdpbGwgb25seSBnZXQgY2FsbGVkIG9uY2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0Rlc3Ryb3llZENoZWNrKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNEZXN0cm95ZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgY3RvciA9IG1lLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVvLmFwcGx5Q2xhc3NDb25maWcgaGFzIG5vdCBiZWVuIHJ1biBvbiAnICsgbWUuY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgICAgIG1lLm9yaWdpbmFsQ29uZmlnID0gTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Li4uY3Rvci5jb25maWcsIC4uLmNvbmZpZ31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pc0NvbnN0cnVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBXZSBjYW4gb25seSBmaXJlIHRoZSBldmVudCBpbiBjYXNlIHRoZSBPYnNlcnZhYmxlIG1peGluIGlzIGluY2x1ZGVkLlxuICAgICAgICBtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSAmJiBtZS5maXJlKCdjb25zdHJ1Y3RlZCcsIG1lKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVwbGFjZSBzdHJpbmcgYmFzZWQgdmFsdWVzIGNvbnRhaW5pbmcgXCJAY29uZmlnOlwiIHdpdGggdGhlIG1hdGNoaW5nIGNvbmZpZyB2YWx1ZVxuICAgICAqIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGl0ZW1zXG4gICAgICovXG4gICAgcGFyc2VJdGVtQ29uZmlncyhpdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbnMsIG5zQXJyYXksIG5zS2V5LCBzeW1ib2xOcztcblxuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFtpdGVtc11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtICYmIE9iamVjdC5lbnRyaWVzKGl0ZW0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3ModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnNBcnJheSA9IHZhbHVlLnN1YnN0cmluZyg4KS50cmltKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zS2V5ICAgPSBuc0FycmF5LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnMgICAgICA9IE5lby5ucyhuc0FycmF5LCBmYWxzZSwgbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnNbbnNLZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIG5zS2V5LCBuc0FycmF5LmpvaW4oJy4nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sTnMgPSBOZW8ubnMobnNBcnJheSwgZmFsc2UsIG1lW2NvbmZpZ1N5bWJvbF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGNvbmZpZyBtaWdodCBub3QgYmUgcHJvY2Vzc2VkIHlldCwgZXNwZWNpYWxseSBmb3IgY29uZmlnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBlbmRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBjb25maWdTeW1ib2wgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbE5zICYmIE9iamVjdC5oYXNPd24oc3ltYm9sTnMsIG5zS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBzeW1ib2xOc1tuc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBuc1tuc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgc2V0KCksIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmUgY2FuIGFscmVhZHkgYmUgYXNzaWduZWQsXG4gICAgICogc28gdGhlIGhhc093blByb3BlcnR5KCkgY2hlY2sgd2lsbCByZXR1cm4gdHJ1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlQXNzaWduPWZhbHNlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbj1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgbWVbZm9yY2VBc3NpZ25Db25maWdzXSA9IGZvcmNlQXNzaWduO1xuXG4gICAgICAgIC8vIFdlIGRvIG5vdCB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgMSBjb25maWcgY2FuIHJlbW92ZSBtb3JlIHRoYW4gMSBrZXkgKGJlZm9yZVNldFgsIGFmdGVyU2V0WClcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gVGhlIGhhc093blByb3BlcnR5IGNoZWNrIGlzIGludGVuZGVkIGZvciBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlXG4gICAgICAgICAgICAvLyA9PiB0aGV5IGNvdWxkIGFscmVhZHkgaGF2ZSBiZWVuIGFzc2lnbmVkIGluc2lkZSBhbiBhZnRlclNldC1tZXRob2RcbiAgICAgICAgICAgIGlmIChmb3JjZUFzc2lnbiB8fCAhbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXlzWzBdXSA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUtY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8ga2VlcCB0aGlzIG9uZSBmb3IgY29uZmlncywgd2hpY2ggZG8gbm90IHVzZSBnZXR0ZXJzIChubyB0cmFpbGluZyB1bmRlcnNjb3JlKVxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG5cbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIHNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKSB7XG4gICAgICAgIGxldCBvcmlnaW47XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVtb3RlKS5mb3JFYWNoKChbd29ya2VyLCBtZXRob2RzXSkgPT4ge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luID0gTmVvLndvcmtlcklkID09PSAnbWFpbicgPyBOZW8ud29ya2VyLk1hbmFnZXIgOiBOZW8uY3VycmVudFdvcmtlcjtcblxuICAgICAgICAgICAgICAgIG9yaWdpbi5zZW5kTWVzc2FnZSh3b3JrZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJSZW1vdGUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtdWx0aXBsZSBjb25maWdzIGF0IG9uY2UsIGVuc3VyaW5nIHRoYXQgYWxsIGFmdGVyU2V0IG1ldGhvZHMgZ2V0IGFsbCBuZXcgYXNzaWduZWQgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxuICAgICAqL1xuICAgIHNldCh2YWx1ZXM9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZXMgPSBtZS5zZXRGaWVsZHModmFsdWVzKTtcblxuICAgICAgICAvLyBJZiB0aGUgaW5pdGlhbCBjb25maWcgcHJvY2Vzc2luZyBpcyBzdGlsbCBydW5uaW5nLFxuICAgICAgICAvLyBmaW5pc2ggdGhpcyBvbmUgZmlyc3QgYmVmb3JlIGRyb3BwaW5nIG5ldyB2YWx1ZXMgaW50byB0aGUgY29uZmlnU3ltYm9sLlxuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy8yMjAxXG4gICAgICAgIGlmIChtZVtmb3JjZUFzc2lnbkNvbmZpZ3NdICE9PSB0cnVlICYmIE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKClcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgdmFsdWVzKTtcblxuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncyh0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHdhbnQgdG8gYXNzaWduIGNsYXNzIGZpZWxkcyBmaXJzdCBhbmQgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgY29uZmlnIG9iamVjdCxcbiAgICAgKiBzbyB0aGF0IGFmdGVyU2V0KCksIGJlZm9yZUdldCgpIGFuZCBiZWZvcmVTZXQoKSBtZXRob2RzIGNhbiBnZXQgdGhlIG5ldyB2YWx1ZXMgcmlnaHQgYXdheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZXRGaWVsZHMoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWdOYW1lcyA9IG1lLmNvbnN0cnVjdG9yLmNvbmZpZztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb25maWdOYW1lcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICFOZW8uaGFzUHJvcGVydHlTZXR0ZXIobWUsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZ1trZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBieSBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbmZpZyBleGlzdHMgYW5kIGdvdCBjaGFuZ2VkXG4gICAgICovXG4gICAgc2V0U3RhdGljQ29uZmlnKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHN0YXRpY0NvbmZpZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIGlmIChzdGF0aWNDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgc3RhdGljQ29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgdGltZW91dElkcyBpbnRlcm5hbGx5LCBzbyB0aGF0IGRlc3Ryb3koKSBjYW4gY2xlYXIgdGhlbSBpZiBuZWVkZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHRpbWVvdXQodGltZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBsZXQgdGltZW91dElkcyA9IHRoaXMuI3RpbWVvdXRJZHMsXG4gICAgICAgICAgICAgICAgdGltZW91dElkICA9IHNldFRpbWVvdXQoKCkgPT4ge3RpbWVvdXRJZHMuc3BsaWNlKHRpbWVvdXRJZHMuaW5kZXhPZih0aW1lb3V0SWQpLCAxKTsgcmVzb2x2ZSgpfSwgdGltZSk7XG5cbiAgICAgICAgICAgIHRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cbiAgICAgKiBgTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmJ1dHRvbi5CYXNlIChuZW8tYnV0dG9uLTEpXVwiYFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGFzc05hbWV9IChpZDogJHt0aGlzLmlkfSlgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIDxwPldpdGggdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxuICAgICAqIGBOZW8uY3JlYXRlKE5lby5jb2xsZWN0aW9uLkJhc2UpIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkge1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEJhc2UpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLkNvbXBhcmVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQ29tcGFyZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQ29tcGFyZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQ29tcGFyZSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yaW5nIHRoZSBjb21wYXJpc29uIG1ldGhvZCBuYW1lcyBieSBkYXRhIHR5cGVcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcFxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAgPSB7XG4gICAgICAgIEFycmF5ICAgICAgOiAnY29tcGFyZUFycmF5cycsXG4gICAgICAgIERhdGUgICAgICAgOiAnY29tcGFyZURhdGVzJyxcbiAgICAgICAgRnVuY3Rpb24gICA6ICdjb21wYXJlRnVuY3Rpb25zJyxcbiAgICAgICAgTWFwICAgICAgICA6ICdjb21wYXJlTWFwcycsXG4gICAgICAgIE5lb0luc3RhbmNlOiAnY29tcGFyZU5lb0luc3RhbmNlcycsXG4gICAgICAgIE9iamVjdCAgICAgOiAnY29tcGFyZU9iamVjdHMnLFxuICAgICAgICBSZWdFeHAgICAgIDogJ2NvbXBhcmVSZWdFeHBzJyxcbiAgICAgICAgU2V0ICAgICAgICA6ICdjb21wYXJlU2V0cydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVBcnJheXMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMS5sZW5ndGggIT09IGl0ZW0yLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IFtpLCB2XSBvZiBpdGVtMS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKHYsIGl0ZW0yW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtEYXRlfSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlRGF0ZXMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIHJldHVybiBpdGVtMS52YWx1ZU9mKCkgPT09IGl0ZW0yLnZhbHVlT2YoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZW0xXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZUZ1bmN0aW9ucyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xLm5hbWUgIT09IGl0ZW0yLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW0xLnRvU3RyaW5nKCkgPT09IGl0ZW0yLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01hcH0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge01hcH0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZU1hcHMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMS5zaXplICE9PSBpdGVtMi5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwyO1xuXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBpdGVtMSkge1xuICAgICAgICAgICAgdmFsMiA9IGl0ZW0yLmdldChrZXkpO1xuXG4gICAgICAgICAgICBpZiAodmFsMiAhPT0gdmFsIHx8IHZhbDIgPT09IHVuZGVmaW5lZCAmJiAhaXRlbTIuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZU5lb0luc3RhbmNlcyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0xLmlkID09PSBpdGVtMi5pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtMVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlT2JqZWN0cyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0xKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGl0ZW0yKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0xKSB7XG4gICAgICAgICAgICBpZiAoIUNvbXBhcmUuaXNFcXVhbChpdGVtMVtrZXldLCBpdGVtMltrZXldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZVJlZ0V4cHMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIHJldHVybiBpdGVtMS50b1N0cmluZygpID09PSBpdGVtMi50b1N0cmluZygpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZXR9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtTZXR9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVTZXRzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgaXRlbTEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbTIuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFcXVhbChpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xID09PSBpdGVtMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlMSA9IE5lby50eXBlT2YoaXRlbTEpLFxuICAgICAgICAgICAgdHlwZTIgPSBOZW8udHlwZU9mKGl0ZW0yKTtcblxuICAgICAgICBpZiAodHlwZTEgIT09IHR5cGUyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wYXJlLm1hcFt0eXBlMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBDb21wYXJlW0NvbXBhcmUubWFwW3R5cGUxXV0oaXRlbTEsIGl0ZW0yKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIG90aGVyIHR5cGVzXG4gICAgICAgIHJldHVybiBpdGVtMSA9PT0gaXRlbTJcbiAgICB9XG59XG5cbkNvbXBhcmUgPSBOZW8uc2V0dXBDbGFzcyhDb21wYXJlKTtcblxuLy8gYWxpYXNcbk5lby5pc0VxdWFsID0gQ29tcGFyZS5pc0VxdWFsO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlO1xuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdldHMgdXNlZCBieSBjb3JlLkJhc2UsIHNvIGl0IGNhbiBub3QgZXh0ZW5kIGl0LlxuICogSXQgY291bGQgZ2V0IHNpbXBsaWZpZWQgdG8ganVzdCBiZWluZyBhbiBvYmplY3QgKG5lZWRzIHRvIG1hbnVhbGx5IGdldCBwdXQgaW50byB0aGUgTmVvIG5hbWVzcGFjZSBpbiB0aGlzIGNhc2UpLlxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIElkR2VuZXJhdG9yIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLklkR2VuZXJhdG9yJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaWQtZ2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhc2U9J25lby0nXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlOiAnbmVvLScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249J3RydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcblxuICAgICAgICAvLyBhbGlhc1xuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoSWRHZW5lcmF0b3IpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCB7cmVzb2x2ZUNhbGxiYWNrfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9uLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLk9ic2VydmFibGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuT2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSBldmVudElkIG51bGwgaW4gY2FzZSBhbiBvYmplY3QgZ2V0cyBwYXNzZWQgYXMgdGhlIG5hbWUgKG11bHRpcGxlIGlkcylcbiAgICAgKi9cbiAgICBhZGRMaXN0ZW5lcihuYW1lLCBvcHRzLCBzY29wZSwgZXZlbnRJZCwgZGF0YSwgb3JkZXIpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsYXkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBldmVudElkT2JqZWN0ID0gdHlwZW9mIGV2ZW50SWQgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgbmFtZU9iamVjdCAgICA9IHR5cGVvZiBuYW1lICAgID09PSAnb2JqZWN0JyxcbiAgICAgICAgICAgIG9uY2UgICAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIG9wdHNUeXBlICAgICAgPSB0eXBlb2Ygb3B0cyxcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogbGV0IHVzIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBmb3JtYXQgdG9vOlxuICAgICAgICAgKlxuICAgICAgICAgKiBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAqICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKVxuICAgICAgICAgKiB9LCBtZSwge29uY2U6IHRydWV9KVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGV2ZW50SWRPYmplY3QgJiYgb3B0c1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50SWQuZm4gPSBvcHRzO1xuICAgICAgICAgICAgb3B0cyAgICAgPSBldmVudElkO1xuICAgICAgICAgICAgb3B0c1R5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICAgIGV2ZW50SWQgID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnZGVsYXknKSkge1xuICAgICAgICAgICAgICAgIGRlbGF5ID0gbmFtZS5kZWxheTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5kZWxheVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnb25jZScpKSB7XG4gICAgICAgICAgICAgICAgb25jZSA9IG5hbWUub25jZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5vbmNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdvcmRlcicpKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIgPSBuYW1lLm9yZGVyO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLm9yZGVyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdzY29wZScpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwge2RlbGF5LCBvbmNlLCBvcmRlciwgc2NvcGUsIC4uLnZhbHVlfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihrZXksIHtkZWxheSwgZm46IHZhbHVlLCBvbmNlLCBvcmRlciwgc2NvcGV9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAob3B0c1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkZWxheSAgICA9IGRlbGF5ICAgfHwgb3B0cy5kZWxheTtcbiAgICAgICAgICAgIGV2ZW50SWQgID0gZXZlbnRJZCB8fCBvcHRzLmV2ZW50SWQ7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHMuZm47XG4gICAgICAgICAgICBvbmNlICAgICA9IG9uY2UgICAgfHwgb3B0cy5vbmNlO1xuICAgICAgICAgICAgb3JkZXIgICAgPSBvcmRlciAgIHx8IG9wdHMub3JkZXI7XG4gICAgICAgICAgICBzY29wZSAgICA9IHNjb3BlICAgfHwgb3B0cy5zY29wZVxuICAgICAgICB9IGVsc2UgaWYgKG9wdHNUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHNcbiAgICAgICAgfSBlbHNlIGlmIChvcHRzVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkTGlzdGVuZXIgY2FsbDogJyArIG5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnID0ge2ZuOiBsaXN0ZW5lciwgaWQ6IGV2ZW50SWQgfHwgTmVvLmdldElkKCdldmVudCcpfTtcblxuICAgICAgICAgICAgaWYgKGRhdGEpICAgICAge2V2ZW50Q29uZmlnLmRhdGEgICA9IGRhdGF9XG4gICAgICAgICAgICBpZiAoZGVsYXkgPiAwKSB7ZXZlbnRDb25maWcuZGVsYXkgID0gZGVsYXl9XG4gICAgICAgICAgICBpZiAob25jZSkgICAgICB7ZXZlbnRDb25maWcub25jZSAgID0gb25jZX1cbiAgICAgICAgICAgIGlmIChzY29wZSkgICAgIHtldmVudENvbmZpZy5zY29wZSAgPSBzY29wZX1cblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzPy5bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcuaWQgPT09IGV2ZW50SWQgfHwgKGNmZy5mbiA9PT0gbGlzdGVuZXIgJiYgY2ZnLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOicsIG5hbWUsIG1lKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yZGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50Q29uZmlnLmlkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhlIHBhc3NlZCBmdW5jdGlvbiwgb3IgYSBmdW5jdGlvbiBieSAqbmFtZSogd2hpY2ggZXhpc3RzIGluIHRoZSBwYXNzZWQgc2NvcGUnc1xuICAgICAqIG9yIHRoaXMgY29tcG9uZW50J3Mgb3duZXJzaGlwIGNoYWluLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBBIGZ1bmN0aW9uLCBvciB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlICAgICAgIFRoZSBzY29wZSB0byBmaW5kIHRoZSBmdW5jdGlvbiBpbiBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyAgICAgICAgIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBjYWxsYmFjayhmbiwgc2NvcGU9dGhpcywgYXJncykge1xuICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSByZXNvbHZlQ2FsbGJhY2soZm4sIHNjb3BlKTtcbiAgICAgICAgICAgIGhhbmRsZXIuZm4uYXBwbHkoaGFuZGxlci5zY29wZSwgYXJncylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGhlbHBlciBtZXRob2QgZm9yIGV2ZW50cyB3aGljaCB1c2UgdGhlIGRlbGF5IG9wdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAgICAgKi9cbiAgICBkZWxheWVkQ2FsbGJhY2soY2IsIGFyZ3MsIGRlbGF5KSB7XG4gICAgICAgIHRoaXMudGltZW91dChkZWxheSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjYi5mbi5hcHBseShjYi5zY29wZSwgYXJncylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIGZpcmUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcbiAgICAgICAgICAgIGRlbGF5LCBoYW5kbGVyLCBoYW5kbGVycywgaSwgbGVuO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IFsuLi5saXN0ZW5lcnNbbmFtZV1dO1xuICAgICAgICAgICAgbGVuICAgICAgPSBoYW5kbGVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcbiAgICAgICAgICAgICAgICBkZWxheSAgID0gaGFuZGxlci5kZWxheTtcblxuICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgZnVuY3Rpb24gbmFtZSBvbiB0aGUgc2NvcGUgKG9yIG1lKSwgb3IsIGlmIGl0IHN0YXJ0cyB3aXRoICd1cC4nXG4gICAgICAgICAgICAgICAgLy8gbG9vayBpbiB0aGUgb3duZXJzaGlwIGhpZXJhcmNoeSBmcm9tIG1lLlxuICAgICAgICAgICAgICAgIGNvbnN0IGNiID0gcmVzb2x2ZUNhbGxiYWNrKGhhbmRsZXIuZm4sIGhhbmRsZXIuc2NvcGUgfHwgbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBsaXN0ZW5lciBpZiB0aGUgc2NvcGUgbm8gbG9uZ2VyIGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmIChjYi5zY29wZSAmJiAhY2Iuc2NvcGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGxpc3RlbmVyc1tuYW1lXSwgaGFuZGxlcilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lLnN1c3BlbmRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdCBldmVudCBmb3JtYXQuIEluamVjdCBmaXJlciByZWZlcmVuY2UgaW4gYXMgJ3NvdXJjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBOZW8uaXNPYmplY3QoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzWzBdLnNvdXJjZSA9IG1lLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGlzdGVuZXIgaWYgaXQgaGFzIHRoZSBvbmNlIGZsYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIub25jZSAmJiBOZW9BcnJheS5yZW1vdmUobGlzdGVuZXJzW25hbWVdLCBoYW5kbGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc051bWJlcihkZWxheSkgJiYgZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuZGVsYXllZENhbGxiYWNrKGNiLCBoYW5kbGVyLmRhdGEgPyBhcmdzLmNvbmNhdChoYW5kbGVyLmRhdGEpIDogYXJncywgZGVsYXkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiLmZuLmFwcGx5KGNiLnNjb3BlLCBoYW5kbGVyLmRhdGEgPyBhcmdzLmNvbmNhdChoYW5kbGVyLmRhdGEpIDogYXJncylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHByb3RvID0gbWUuX19wcm90b19fLFxuICAgICAgICAgICAgY3RvciAgPSBwcm90by5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzID0gY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzXG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnM7XG5cbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChsaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gey4uLmxpc3RlbmVyc31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90bz8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgY3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICBpZiAoY3Rvci5vYnNlcnZhYmxlICYmICFjdG9yLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvciwge1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lciAgIDogbWUuYWRkTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIGZpcmUgICAgICAgICAgOiBtZS5maXJlLFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge30sXG4gICAgICAgICAgICAgICAgICAgIG9uICAgICAgICAgICAgOiBtZS5vbixcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IG1lLnJlbW92ZUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICB1biAgICAgICAgICAgIDogbWUudW5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fX1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGFkZExpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29yZGVyXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGV2ZW50SWRcbiAgICAgKi9cbiAgICBvbiguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlcmUgYXJlIGRpZmZlcmVudCBzeW50YXgncyBob3cgeW91IGNhbiB1c2UgdGhpcyBtZXRob2QuXG4gICAgICogVXNpbmcgdGhlIGV2ZW50SWQ6XG4gICAgICogYGBgXG4gICAgICogdGhpcy5yZW1vdmVMaXN0ZW5lcignY2hhbmdlJywgJ25lby1ldmVudC03Jyk7XG4gICAgICogYGBgXG4gICAgICogUGFzc2luZyB0aGUgaGFuZGxlciBtZXRob2Q6XG4gICAgICogYGBgXG4gICAgICogdGhpcy5yZW1vdmVMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkNoYW5nZSwgdGhpcyk7XG4gICAgICogYGBgXG4gICAgICogUGFzc2luZyBhbiBvYmplY3Q6XG4gICAgICogYGBgXG4gICAgICogbWUuZmllbGQudW4oe1xuICAgICAqICAgICBjaGFuZ2UgICAgICAgICAgICAgICAgICAgIDogbWUub25GaWVsZENoYW5nZSxcbiAgICAgKiAgICAgY2hhbmdlQ2xlYXJUb09yaWdpbmFsVmFsdWU6IG1lLm9uRmllbGRDaGFuZ2UsXG4gICAgICogICAgIHNjb3BlICAgICAgICAgICAgICAgICAgICAgOiBtZVxuICAgICAqIH0pO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IFtzY29wZV1cbiAgICAgKi9cbiAgICByZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudElkLCBzY29wZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lciwgbGlzdGVuZXJzLCBtYXRjaDtcblxuICAgICAgICBpZiAoTmVvLmlzRnVuY3Rpb24oZXZlbnRJZCkpIHtcbiAgICAgICAgICAgIG1lLnJlbW92ZUxpc3RlbmVyKHtbbmFtZV06IGV2ZW50SWQsIHNjb3BlfSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QobmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLnNjb3BlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnNba2V5XSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpICAgICAgICAgPSAwO1xuICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmZuLm5hbWUgPT09IChOZW8uaXNTdHJpbmcodmFsdWUpID8gdmFsdWUgOiB2YWx1ZS5uYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuc2NvcGUgICA9PT0gc2NvcGVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgbWF0Y2ggICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChldmVudENvbmZpZywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA9IGlkeFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHN1c3BlbmRMaXN0ZW5lcnM6IGZ1bmN0aW9uKHF1ZXVlKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gcmVzdW1lTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciByZW1vdmVMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKi9cbiAgICB1biguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhPYnNlcnZhYmxlKTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5VdGlsXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFV0aWwgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZ2V4IHRvIHJlbW92ZSBjYW1lbCBjYXNlIHN5bnRheFxuICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZGVjYW1lbFJlZ0V4PS8oW2Etel0pKFtBLVpdKS9nXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjYW1lbFJlZ0V4ID0gLyhbYS16XSkoW0EtWl0pL2dcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuVXRpbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3JlLXV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlc1xuICAgICAqL1xuICAgIHN0YXRpYyBiaW5kTWV0aG9kcyhzY29wZSwgdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNjb3BlW3ZhbHVlXSA9IHNjb3BlW3ZhbHVlXS5iaW5kKHNjb3BlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHlsZXMgc3RyaW5nIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlT2JqZWN0KHN0cmluZykge1xuICAgICAgICBsZXQgcGFydHM7XG5cbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXG5cbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgYnkgdGhlIGZpcnN0IGNvbG9uIG9ubHlcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlRmxvYXQoeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG9ialtwYXJ0c1swXV0gPSBwYXJ0c1sxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9LCB7fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0eWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3R5bGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIC1sb3dlcmNhc2UuXG4gICAgICogRG9lcyBub3QgdG91Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBsb3dlcmNhc2Ugb3V0cHV0XG4gICAgICovXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoVXRpbC5kZWNhbWVsUmVnRXgsICckMS0kMicpLnRvTG93ZXJDYXNlKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgbm90IHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fFN0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci4gUmV0dXJucyBmYWxzZSBmb3Igbm9uLWZpbml0ZSBudW1iZXJzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8uY29uc3RydWN0b3I/Lm5hbWUgPT09ICdPYmplY3QnIHx8IGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBuZW8gZGF0YSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNSZWNvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gJ1JlY29yZCcgfHwgZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZXJhYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBsZW47XG5cbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYWJsZS5zcGxpdCgnJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbilcbiAgICB9XG59XG5cblV0aWwgPSBOZW8uc2V0dXBDbGFzcyhVdGlsKTtcblxuLy8gYWxpYXNlc1xuTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgIGJpbmRNZXRob2RzICAgICAgOiAnYmluZE1ldGhvZHMnLFxuICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXG4gICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICBpc0VtcHR5ICAgICAgICAgIDogJ2lzRW1wdHknLFxuICAgIGlzRnVuY3Rpb24gICAgICAgOiAnaXNGdW5jdGlvbicsXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXG4gICAgaXNSZWNvcmQgICAgICAgICA6ICdpc1JlY29yZCcsXG4gICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xufSwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcGFyZSAgICAgZnJvbSAnLi9Db21wYXJlLm1qcyc7XG5pbXBvcnQgSWRHZW5lcmF0b3IgZnJvbSAnLi9JZEdlbmVyYXRvci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgIGZyb20gJy4vVXRpbC5tanMnO1xuXG5leHBvcnQge0Jhc2UsIENvbXBhcmUsIElkR2VuZXJhdG9yLCBPYnNlcnZhYmxlLCBVdGlsfTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5BcnJheVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBOZW9BcnJheSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuQXJyYXknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkFycmF5J1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGFkZChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSwgYnV0IG5vdCBpbiBhcnJheTJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGRpZmZlcmVuY2UoYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiAhYXJyYXkyLmluY2x1ZGVzKGl0ZW0pKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaXRlbSBpcyBpbmNsdWRlZCBieSByZWZlcmVuY2UgaW5zaWRlIHRoZSBhcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNJdGVtKGFyciwgaXRlbSkge1xuICAgICAgICByZXR1cm4gYXJyLmluY2x1ZGVzKGl0ZW0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBEdXBsaWNhdGVzIHdpbGwgb25seSBnZXQgbWF0Y2hlZCBieSByZWZlcmVuY2UuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0KGFyciwgaW5kZXgsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IGl0ZW1zLmxlbmd0aCAtMSxcbiAgICAgICAgICAgIGkgICA9IGxlbixcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCwgaXRlbTtcblxuICAgICAgICAvLyBJdGVyYXRlIGJhY2t3YXJkc1xuICAgICAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcblxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZShhcnIsIGN1cnJlbnRJbmRleCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMCwgaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnRlcnNlY3Rpb24oYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiBhcnJheTIuaW5jbHVkZXMoaXRlbSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYW4gaXRlbSBpbnNpZGUgYXJyIGZyb20gZnJvbUluZGV4IHRvIHRvSW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvSW5kZXhcbiAgICAgKi9cbiAgICBzdGF0aWMgbW92ZShhcnIsIGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgICAgICBpZiAoZnJvbUluZGV4ID09PSB0b0luZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUluZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZyb21JbmRleCA9IGFyci5sZW5ndGggLSAxXG4gICAgICAgIH1cblxuICAgICAgICBhcnIuc3BsaWNlKHRvSW5kZXgsIDAsIGFyci5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSk7XG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gb3IgYXJyYXkgb2YgaXRlbXMgZnJvbSBhbiBhcnJheS4gT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZShhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGxldCBpbmRleDtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc11cbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICAgICAgICBpbmRleCA+IC0xICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gY29tYmluZSBhZGQgJiByZW1vdmUgaW4gb25lIGNhbGwuXG4gICAgICogWW91IGNhbiBwYXNzIHNpbmdsZSBpdGVtcyBvciBhbiBhcnJheSBvZiBpdGVtcyB0byBhZGQgb3IgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gcmVtb3ZlSXRlbXNcbiAgICAgKiBAcGFyYW0geyp9IGFkZEl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZUFkZChhcnIsIHJlbW92ZUl0ZW1zLCBhZGRJdGVtcykge1xuICAgICAgICB0aGlzLnJlbW92ZShhcnIsIHJlbW92ZUl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGFyciwgYWRkSXRlbXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIGV4aXN0LCBvdGhlcndpc2UgYWRkcyBpdFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FkZF1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9nZ2xlKGFyciwgaXRlbSwgYWRkID0gIXRoaXMuaGFzSXRlbShhcnIsIGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2FkZCA/ICdhZGQnIDogJ3JlbW92ZSddKGFyciwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiB0aGUgcGFzc2VkIGFycmF5cy5cbiAgICAgKiBNdWx0aXBsZSBhcnJheXMgbWF5IGJlIHBhc3NlZC5cbiAgICAgKiBPbmx5IHN1cHBvcnRzIHByaW1pdGl2ZSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdW5pb24oKSB7XG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldChBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmFyZ3VtZW50cykpXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgdW5zaGlmdChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnVuc2hpZnQoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoTmVvQXJyYXkpO1xuIiwiLyoqXG4gKiBBcHBlbmQgYXJncyBpbnN0ZWFkIG9mIHByZXBlbmRpbmcgdGhlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEFwcGVuZChmbiwgc2NvcGUpIHtcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5jb25jYXQoYXJncykpXG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHNjb3BlXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXk9MzAwXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXIoY2FsbGJhY2ssIHNjb3BlLCBkZWxheT0zMDApIHtcbiAgICBsZXQgdGltZW91dElkO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gY2FsbGJhY2sgaW52b2NhdGlvbiBjb21lcyBcImRlbGF5XCIgbXMgYWZ0ZXIgdGhlIGxhc3QgY2FsbCB0byB3cmFwcGVyXG4gICAgICAgIC8vIHNvIGNhbmNlbCBhbnkgcGVuZGluZyBpbnZvY2F0aW9uLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuICAgICAgICB3cmFwcGVyLmlzUGVuZGluZyA9IHRydWU7XG5cbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSAwO1xuICAgICAgICAgICAgd3JhcHBlci5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKVxuICAgICAgICB9LCBkZWxheSlcbiAgICB9O1xuXG4gICAgd3JhcHBlci5jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHdyYXBwZXIuaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwcGVyXG59XG5cbi8qKlxuICogSW50ZW5kZWQgZm9yIGZ1bmN0aW9ucyB3aXRoIDEgcGFyYW0gd2hlcmUgdGhlIGludGVyY2VwdG9yIGNhbiBjaGFuZ2UgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0TWV0aG9kTmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW50ZXJjZXB0RnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZT10YXJnZXRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludGVyY2VwdG9yKHRhcmdldCwgdGFyZ2V0TWV0aG9kTmFtZSwgaW50ZXJjZXB0RnVuY3Rpb24sIHNjb3BlKSB7XG4gICAgbGV0IHRhcmdldE1ldGhvZCA9IHRhcmdldFt0YXJnZXRNZXRob2ROYW1lXTtcblxuICAgIHJldHVybiAodGFyZ2V0W3RhcmdldE1ldGhvZE5hbWVdID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldE1ldGhvZC5jYWxsKHRhcmdldCwgaW50ZXJjZXB0RnVuY3Rpb24uY2FsbChzY29wZSB8fCB0YXJnZXQsIHZhbHVlKSlcbiAgICB9KVxufVxuXG4vKipcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VxdWVuY2UodGFyZ2V0LCBtZXRob2ROYW1lLCBmbiwgc2NvcGUpIHtcbiAgICBsZXQgbWV0aG9kID0gdGFyZ2V0W21ldGhvZE5hbWVdIHx8IE5lby5lbXB0eUZuO1xuXG4gICAgcmV0dXJuICh0YXJnZXRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSB8fCB0aGlzLCBhcmd1bWVudHMpXG4gICAgfSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBzY29wZVxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5PTMwMFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHNjb3BlLCBkZWxheT0zMDApIHtcbiAgICBsZXQgZGVib3VuY2VUaW1lcjtcblxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIC8vIGxlYWRpbmcgZWRnZSA9PiB0cmlnZ2VyIHRoZSBmaXJzdCBjYWxsIHJpZ2h0IGF3YXlcbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIoZGVib3VuY2VUaW1lcikpIHtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHNjb3BlIChpbnN0YW5jZSkgZGlkIG5vdCBnZXQgZGVzdHJveWVkIHlldFxuICAgICAgICAgICAgc2NvcGU/LmlkICYmIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcblxuICAgICAgICAgICAgLy8gd2Ugc3RpbGwgd2FudCB0byBzdGFydCBhIHRpbWVyIHRvIGRlbGF5IHRoZSAybmQrIHVwZGF0ZVxuICAgICAgICAgICAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge2RlYm91bmNlVGltZXIgPSBudWxsfSwgIGRlbGF5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgc2NvcGUgKGluc3RhbmNlKSBkaWQgbm90IGdldCBkZXN0cm95ZWQgeWV0XG4gICAgICAgICAgICAgICAgc2NvcGU/LmlkICYmIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7ZGVib3VuY2VUaW1lciA9IG51bGx9LCAgZGVsYXkpXG4gICAgICAgICAgICB9LCAgZGVsYXkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGludGVyY2VwdG9yIGNhbiBwcmV2ZW50IHRoZSB0YXJnZXRNZXRob2QgZnJvbSBnZXR0aW5nIGV4ZWN1dGVkIGluIGNhc2UgaXQgcmV0dXJucyBmYWxzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRNZXRob2ROYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnRlcmNlcHRGdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlPXRhcmdldFxuICogQHBhcmFtIHsqfSBwcmV2ZW50ZWRSZXR1cm5WYWx1ZT1udWxsIFRoZSB2YWx1ZSB0byByZXR1cm4gaW4gY2FzZSB0aGUgaW50ZXJjZXB0RnVuY3Rpb24gcmV0dXJucyBmYWxzZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0KHRhcmdldCwgdGFyZ2V0TWV0aG9kTmFtZSwgaW50ZXJjZXB0RnVuY3Rpb24sIHNjb3BlLCBwcmV2ZW50ZWRSZXR1cm5WYWx1ZT1udWxsKSB7XG4gICAgbGV0IHRhcmdldE1ldGhvZCA9IHRhcmdldFt0YXJnZXRNZXRob2ROYW1lXTtcblxuICAgIHJldHVybiAodGFyZ2V0W3RhcmdldE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoaW50ZXJjZXB0RnVuY3Rpb24uYXBwbHkoc2NvcGUgfHwgdGFyZ2V0LCBhcmd1bWVudHMpID09PSBmYWxzZSlcbiAgICAgICAgICAgID8gcHJldmVudGVkUmV0dXJuVmFsdWVcbiAgICAgICAgICAgIDogdGFyZ2V0TWV0aG9kLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKVxuICAgIH0pXG59XG5cbi8qKlxuICogTG9jYXRlIGEgY2FsbGFibGUgZnVuY3Rpb24gYnkgbmFtZSBpbiB0aGUgcGFzc2VkIHNjb3BlLlxuICpcbiAqIElmIHRoZSBuYW1lIHN0YXJ0cyB3aXRoICd1cC4nLCB0aGUgcGFyZW50IENvbXBvbmVudCBjaGFpbiBpcyBzZWFyY2hlZC5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgYnkgbWFuYWdlci5Eb21FdmVudHMgJiBjb3JlLk9ic2VydmFibGUuZmlyZSBhbmQgYnkgJ2hhbmRsZXInIGZ1bmN0aW9uIGNhbGxzIHRvIHJlc29sdmVcbiAqIHN0cmluZyBmdW5jdGlvbiBuYW1lcyBpbiB0aGUgQ29tcG9uZW50J3Mgb3duIGhpZXJhcmNoeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBBIGZ1bmN0aW9uLCBvciB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QvXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGU9dGhpcyBUaGUgc2NvcGUgdG8gZmluZCB0aGUgZnVuY3Rpb24gaW4gaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nLlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDYWxsYmFjayhmbiwgc2NvcGU9dGhpcykge1xuICAgIGlmIChOZW8uaXNTdHJpbmcoZm4pKSB7XG4gICAgICAgIGlmICghc2NvcGVbZm5dICYmIGZuLnN0YXJ0c1dpdGgoJ3VwLicpKSB7XG4gICAgICAgICAgICBmbiA9IGZuLnNsaWNlKDMpO1xuICAgICAgICAgICAgd2hpbGUgKCFzY29wZVtmbl0gJiYgKHNjb3BlID0gc2NvcGUucGFyZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29wZSA9IHNjb3BlLmdldENvbnRyb2xsZXI/LigpPy5nZXRIYW5kbGVyU2NvcGUoZm4sIG51bGwpIHx8IHNjb3BlXG4gICAgICAgIH1cblxuICAgICAgICBmbiA9IHNjb3BlW2ZuXVxuICAgIH1cblxuICAgIHJldHVybiB7Zm4sIHNjb3BlfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHNjb3BlXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXk9MzAwXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgc2NvcGUsIGRlbGF5PTMwMCkge1xuICAgIGxldCBsYXN0UmFuRGF0ZSwgdGltZW91dElkO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCFsYXN0UmFuRGF0ZSkge1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgc2NvcGUgKGluc3RhbmNlKSBkaWQgbm90IGdldCBkZXN0cm95ZWQgeWV0XG4gICAgICAgICAgICBzY29wZT8uaWQgJiYgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpO1xuXG4gICAgICAgICAgICBsYXN0UmFuRGF0ZSA9IERhdGUubm93KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG5cbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbkRhdGUpID49IGRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHNjb3BlIChpbnN0YW5jZSkgZGlkIG5vdCBnZXQgZGVzdHJveWVkIHlldFxuICAgICAgICAgICAgICAgICAgICBzY29wZT8uaWQgJiYgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxhc3RSYW5EYXRlID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0UmFuRGF0ZSkpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgSWRHZW5lcmF0b3IgZnJvbSAnLi4vY29yZS9JZEdlbmVyYXRvci5tanMnO1xuXG4vKipcbiAqIEEgd3JhcHBlciBmb3Igd29ya2VyIHBvc3QgbWVzc2FnZXMgc2VudCBiZXR3ZWVuIHRoZSBBcHAsIERhdGEsIFZEb20gd29ya2VyICYgdGhlIG1haW4gdGhyZWFkLlxuICogWW91IGNhbiBhZGQgb3B0aW9uYWwgcGFyYW1zIGFzIG5lZWRlZC5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLk1lc3NhZ2VcbiAqL1xuY2xhc3MgTWVzc2FnZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3Rpb25cbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzdGluYXRpb249J21haW4nXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlkPUlkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZClcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3JpZ2luPU5lby53b3JrZXJJZFxuICAgICAgICAgKi9cblxuICAgICAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuZGVzdGluYXRpb24gfHwgJ21haW4nO1xuICAgICAgICBjb25maWcuaWQgICAgICAgICAgPSBjb25maWcuaWQgICAgICAgICAgfHwgSWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKTtcbiAgICAgICAgY29uZmlnLm9yaWdpbiAgICAgID0gY29uZmlnLm9yaWdpbiAgICAgIHx8IE5lby53b3JrZXJJZDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZylcbiAgICB9XG59XG5cbmNvbnN0IG5zID0gTmVvLm5zKCdOZW8ud29ya2VyJywgdHJ1ZSk7XG5uc1snTWVzc2FnZSddID0gTWVzc2FnZTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiIsImltcG9ydCBCYXNlICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyBmcm9tICcuL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ud29ya2VyLlNlcnZpY2VCYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgU2VydmljZUJhc2UgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuU2VydmljZUJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuU2VydmljZUJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjYWNoZU5hbWVfPSduZW8tcnVudGltZSdcbiAgICAgICAgICovXG4gICAgICAgIGNhY2hlTmFtZV86ICduZW8tcnVudGltZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWy8vLi4uXX1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAnY2xlYXJDYWNoZScsXG4gICAgICAgICAgICAgICAgJ2NsZWFyQ2FjaGVzJyxcbiAgICAgICAgICAgICAgICAncHJlbG9hZEFzc2V0cycsXG4gICAgICAgICAgICAgICAgJ3JlbW92ZUFzc2V0cydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjYWNoZVBhdGhzXG4gICAgICovXG4gICAgY2FjaGVQYXRocyA9IFtcbiAgICAgICAgJ3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vJyxcbiAgICAgICAgJy9kaXN0L2VzbS8nLFxuICAgICAgICAnL2Rpc3QvcHJvZHVjdGlvbi8nLFxuICAgICAgICAnL2ZvbnRhd2Vzb21lJyxcbiAgICAgICAgJy9ub2RlX21vZHVsZXMnLFxuICAgICAgICAnL3Jlc291cmNlcy8nXG4gICAgXVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGNoYW5uZWxQb3J0cz1udWxsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNoYW5uZWxQb3J0cyA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDbGllbnR8bnVsbH0gbGFzdENsaWVudD1udWxsXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGxhc3RDbGllbnQgPSBudWxsXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T2JqZWN0W119IHByb21pc2VzPVtdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb21pc2VzID0gW11cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gcmVtb3Rlcz1bXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW1vdGVzID0gW11cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gd29ya2VySWQ9bnVsbFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3b3JrZXJJZCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGJpbmQgPSBuYW1lID0+IG1lW25hbWVdLmJpbmQobWUpO1xuXG4gICAgICAgIG1lLmNoYW5uZWxQb3J0cyA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICAgICAgICAgICAgb25hY3RpdmF0ZTogYmluZCgnb25BY3RpdmF0ZScpLFxuICAgICAgICAgICAgb25mZXRjaCAgIDogYmluZCgnb25GZXRjaCcpLFxuICAgICAgICAgICAgb25pbnN0YWxsIDogYmluZCgnb25JbnN0YWxsJyksXG4gICAgICAgICAgICBvbm1lc3NhZ2UgOiBiaW5kKCdvbk1lc3NhZ2UnKVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlciA9IG1lO1xuICAgICAgICBOZW8ud29ya2VySWQgICAgICA9IG1lLndvcmtlcklkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSBjYWNoZU5hbWUgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZUdldENhY2hlTmFtZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgKyAnLScgKyB0aGlzLnZlcnNpb25cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZT10aGlzLmNhY2hlTmFtZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59XG4gICAgICovXG4gICAgYXN5bmMgY2xlYXJDYWNoZShuYW1lPXRoaXMuY2FjaGVOYW1lKSB7XG4gICAgICAgIGF3YWl0IGNhY2hlcy5kZWxldGUobmFtZSk7XG4gICAgICAgIHJldHVybiB7c3VjY2VzczogdHJ1ZX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fVxuICAgICAqL1xuICAgIGFzeW5jIGNsZWFyQ2FjaGVzKCkge1xuICAgICAgICBsZXQga2V5cyA9IGF3YWl0IGNhY2hlcy5rZXlzKCk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGtleXMubWFwKG5hbWUgPT4gY2FjaGVzLmRlbGV0ZShuYW1lKSkpO1xuICAgICAgICByZXR1cm4ge3N1Y2Nlc3M6IHRydWV9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICAgICAqL1xuICAgIGNyZWF0ZU1lc3NhZ2VDaGFubmVsKGNsaWVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2hhbm5lbCAgICAgICAgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKSxcbiAgICAgICAgICAgIHtwb3J0MSwgcG9ydDJ9ID0gY2hhbm5lbDtcblxuICAgICAgICBwb3J0MS5vbm1lc3NhZ2UgPSBtZS5vbk1lc3NhZ2UuYmluZChtZSk7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2UoJ2FwcCcsIHthY3Rpb246ICdyZWdpc3RlclBvcnQnLCB0cmFuc2ZlcjogcG9ydDJ9LCBbcG9ydDJdKTtcblxuICAgICAgICBtZS5jaGFubmVsUG9ydHMucHVzaCh7XG4gICAgICAgICAgICBjbGllbnRJZCAgIDogY2xpZW50LmlkLFxuICAgICAgICAgICAgZGVzdGluYXRpb246ICdhcHAnLFxuICAgICAgICAgICAgcG9ydCAgICAgICA6IHBvcnQxXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdGluYXRpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xpZW50SWQ9dGhpcy5sYXN0Q2xpZW50LmlkXG4gICAgICogQHJldHVybnMge01lc3NhZ2VQb3J0fG51bGx9XG4gICAgICovXG4gICAgZ2V0UG9ydChkZXN0aW5hdGlvbiwgY2xpZW50SWQ9dGhpcy5sYXN0Q2xpZW50Py5pZCkge1xuICAgICAgICBmb3IgKGxldCBwb3J0IG9mIHRoaXMuY2hhbm5lbFBvcnRzKSB7XG4gICAgICAgICAgICBpZiAoY2xpZW50SWQgPT09IHBvcnQuY2xpZW50SWQgJiYgZGVzdGluYXRpb24gPT09IHBvcnQuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9ydC5wb3J0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElnbm9yZSB0aGUgY2FsbCBpbiBjYXNlIHRoZXJlIGlzIG5vIGNvbm5lY3RlZCBjbGllbnQgaW4gcGxhY2UgeWV0XG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBsYXN0Q2xpZW50SWQgPSBtZS5sYXN0Q2xpZW50Py5pZDtcblxuICAgICAgICBpZiAobGFzdENsaWVudElkICYmICFtZS5yZW1vdGVzLmluY2x1ZGVzKGxhc3RDbGllbnRJZCkpIHtcbiAgICAgICAgICAgIG1lLnJlbW90ZXMucHVzaChsYXN0Q2xpZW50SWQpO1xuICAgICAgICAgICAgc3VwZXIuaW5pdFJlbW90ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVNZXNzYWdlRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgYXN5bmMgb25BY3RpdmF0ZShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25BY3RpdmF0ZScsIGV2ZW50KTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gYXdhaXQgY2FjaGVzLmtleXMoKSxcbiAgICAgICAgICAgIGtleTtcblxuICAgICAgICBmb3IgKGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAvLyBDbGVhciBjYWNoZXMgZm9yIHByaW9yIFNXIHZlcnNpb25zLCB3aXRob3V0IHRvdWNoaW5nIG5vbi1yZWxhdGVkIGNhY2hlc1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKG1lLl9jYWNoZU5hbWUpICYmIGtleSAhPT0gbWUuY2FjaGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBhd2FpdCB0aGUgbWV0aG9kIGV4ZWN1dGlvblxuICAgICAgICAgICAgICAgIG1lLmNsZWFyQ2FjaGUoa2V5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDbGllbnR9IHNvdXJjZVxuICAgICAqL1xuICAgIGFzeW5jIG9uQ29ubmVjdChzb3VyY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uQ29ubmVjdCcsIHNvdXJjZSk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVNZXNzYWdlQ2hhbm5lbChzb3VyY2UpO1xuICAgICAgICB0aGlzLmluaXRSZW1vdGUoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZU1lc3NhZ2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkZldGNoKGV2ZW50KSB7XG4gICAgICAgIGxldCBoYXNNYXRjaCAgPSBmYWxzZSxcbiAgICAgICAgICAgIHtyZXF1ZXN0fSA9IGV2ZW50LFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IG9mIHRoaXMuY2FjaGVQYXRocykge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3QudXJsLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhhc01hdGNoICYmIHJlcXVlc3QubWV0aG9kID09PSAnR0VUJyAmJiBldmVudC5yZXNwb25kV2l0aChcbiAgICAgICAgICAgIGNhY2hlcy5tYXRjaChyZXF1ZXN0KVxuICAgICAgICAgICAgICAgIC50aGVuKGNhY2hlZFJlc3BvbnNlID0+IGNhY2hlZFJlc3BvbnNlIHx8IGNhY2hlcy5vcGVuKHRoaXMuY2FjaGVOYW1lKVxuICAgICAgICAgICAgICAgIC50aGVuKGNhY2hlICAgICAgICAgID0+IGZldGNoKHJlcXVlc3QpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgICAgICAgPT4gY2FjaGUucHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgICAgICAgICAgICAgPT4gcmVzcG9uc2UpXG4gICAgICAgICAgICApKSlcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZU1lc3NhZ2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkluc3RhbGwoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uSW5zdGFsbCcsIGV2ZW50KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZvciBhIGNsaWVudCBiYXNlZCBtZXNzYWdlIHdlIHJlY2VpdmUgYW4gRXh0ZW5kYWJsZU1lc3NhZ2VFdmVudCxcbiAgICAgKiBmb3IgYSBNZXNzYWdlQ2hhbm5lbCBiYXNlZCBtZXNzYWdlIGEgTWVzc2FnZUV2ZW50XG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlTWVzc2FnZUV2ZW50fE1lc3NhZ2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtkYXRhfSAgICAgICAgICAgID0gZXZlbnQsXG4gICAgICAgICAgICB7YWN0aW9uLCByZXBseUlkfSA9IGRhdGEsXG4gICAgICAgICAgICBwcm9taXNlO1xuXG4gICAgICAgIGlmIChldmVudC5zb3VyY2UpIHsgLy8gRXh0ZW5kYWJsZU1lc3NhZ2VFdmVudFxuICAgICAgICAgICAgbWUubGFzdENsaWVudCA9IGV2ZW50LnNvdXJjZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWVzc2FnZSBhY3Rpb24gaXMgbWlzc2luZzogJyArIGRhdGEuaWQpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uICE9PSAncmVwbHknKSB7XG4gICAgICAgICAgICBtZVsnb24nICsgTmVvLmNhcGl0YWxpemUoYWN0aW9uKV0oZGF0YSwgZXZlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb21pc2UgPSBhY3Rpb24gPT09ICdyZXBseScgJiYgbWUucHJvbWlzZXNbcmVwbHlJZF0pIHtcbiAgICAgICAgICAgIHByb21pc2VbZGF0YS5yZWplY3QgPyAncmVqZWN0JyA6ICdyZXNvbHZlJ10oZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5wcm9taXNlc1tyZXBseUlkXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZU1lc3NhZ2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblBpbmcobXNnLCBldmVudCkge1xuICAgICAgICB0aGlzLnJlc29sdmUobXNnLCB7b3JpZ2luTXNnOiBtc2d9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVNZXNzYWdlRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgYXN5bmMgb25SZWdpc3Rlck5lb0NvbmZpZyhtc2csIGV2ZW50KSB7XG4gICAgICAgIHRoaXMub25Db25uZWN0KGV2ZW50LnNvdXJjZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlTWVzc2FnZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGFzeW5jIG9uU2tpcFdhaXRpbmcobXNnLCBldmVudCkge1xuICAgICAgICBhd2FpdCBnbG9iYWxUaGlzLnNraXBXYWl0aW5nKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlTWVzc2FnZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uVW5yZWdpc3RlclBvcnQobXNnLCBldmVudCkge1xuICAgICAgICBmb3IgKGxldCBbaW5kZXgsIHZhbHVlXSBvZiB0aGlzLmNoYW5uZWxQb3J0cy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jbGllbnRJZCA9PT0gZXZlbnQuc291cmNlLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsUG9ydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuY2FjaGVOYW1lPXRoaXMuY2FjaGVOYW1lXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW118U3RyaW5nfSBkYXRhLmZpbGVzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGF0YS5mb3JlUmVsb2FkPWZhbHNlXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59XG4gICAgICovXG4gICAgYXN5bmMgcHJlbG9hZEFzc2V0cyhkYXRhKSB7XG4gICAgICAgIGxldCBjYWNoZU5hbWUgPSBkYXRhLmNhY2hlTmFtZSB8fCB0aGlzLmNhY2hlTmFtZSxcbiAgICAgICAgICAgIGNhY2hlICAgICA9IGF3YWl0IGNhY2hlcy5vcGVuKGNhY2hlTmFtZSksXG4gICAgICAgICAgICB7ZmlsZXN9ICAgPSBkYXRhLFxuICAgICAgICAgICAgaXRlbXMgICAgID0gW10sXG4gICAgICAgICAgICBhc3NldCwgaGFzTWF0Y2gsIGl0ZW07XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZpbGVzKSkge1xuICAgICAgICAgICAgZmlsZXMgPSBbZmlsZXNdXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGl0ZW0gb2YgZmlsZXMpIHtcbiAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICghZGF0YS5mb3JjZVJlbG9hZCkge1xuICAgICAgICAgICAgICAgIGFzc2V0ICAgID0gYXdhaXQgY2FjaGUubWF0Y2goaXRlbSk7XG4gICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSAhIWFzc2V0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICFoYXNNYXRjaCAmJiBpdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgY2FjaGUuYWRkQWxsKGl0ZW1zKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtzdWNjZXNzOiB0cnVlfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgZGF0YSwgbWFpbiBvciB2ZG9tIChleGNsdWRpbmcgdGhlIGN1cnJlbnQgd29ya2VyKVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBwcm9taXNlTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbWUuc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpLFxuICAgICAgICAgICAgICAgIG1zZ0lkICAgPSBtZXNzYWdlLmlkO1xuXG4gICAgICAgICAgICBtZS5wcm9taXNlc1ttc2dJZF0gPSB7cmVqZWN0LCByZXNvbHZlfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gZWl0aGVyIHBhc3MgYW4gdXJsLCBhbiBhcnJheSBvZiB1cmxzIG9yIGFuIG9iamVjdCB3aXRoIGFkZGl0aW9uYWwgb3B0aW9uc1xuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlL2RlbGV0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfE9iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBkYXRhLmFzc2V0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmNhY2hlTmFtZT10aGlzLmNhY2hlTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLm9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEub3B0aW9ucy5pZ25vcmVNZXRob2Q9ZmFsc2VcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEub3B0aW9ucy5pZ25vcmVTZWFyY2g9ZmFsc2VcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEub3B0aW9ucy5pZ25vcmVWYXJ5PWZhbHNlXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICBhc3luYyByZW1vdmVBc3NldHMoZGF0YSkge1xuICAgICAgICBpZiAoIU5lby5pc09iamVjdChkYXRhKSkge1xuICAgICAgICAgICAgZGF0YSA9IHthc3NldHM6IGRhdGF9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge2Fzc2V0cywgb3B0aW9ucz17fX0gPSBkYXRhLFxuICAgICAgICAgICAgY2FjaGVOYW1lICAgICAgICAgICAgPSBkYXRhLmNhY2hlTmFtZSB8fCB0aGlzLmNhY2hlTmFtZSxcbiAgICAgICAgICAgIGNhY2hlICAgICAgICAgICAgICAgID0gYXdhaXQgY2FjaGVzLm9wZW4oY2FjaGVOYW1lKSxcbiAgICAgICAgICAgIHByb21pc2VzICAgICAgICAgICAgID0gW107XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFzc2V0cykpIHtcbiAgICAgICAgICAgIGFzc2V0cyA9IFthc3NldHNdXG4gICAgICAgIH1cblxuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKGNhY2hlLmRlbGV0ZShhc3NldCwgb3B0aW9ucykpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICByZXR1cm4ge3N1Y2Nlc3M6IHRydWV9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7TmVvLndvcmtlci5NZXNzYWdlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xuICAgICAgICBvcHRzLmRlc3RpbmF0aW9uID0gZGVzdDtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpLFxuICAgICAgICAgICAgcG9ydCAgICA9IHRoaXMuZ2V0UG9ydChkZXN0KSB8fCB0aGlzLmxhc3RDbGllbnQ7XG5cbiAgICAgICAgcG9ydC5wb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2Zlcik7XG4gICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhTZXJ2aWNlQmFzZSk7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3NcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgUmVtb3RlTWV0aG9kQWNjZXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduUG9ydChzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBjb25zdCB7YXBwTmFtZSwgcG9ydCwgd2luZG93SWR9ID0gc291cmNlO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHthcHBOYW1lLCBwb3J0LCB3aW5kb3dJZH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiBQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtvcmlnaW59ID0gcmVtb3RlO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCBidWZmZXIpIHtcbiAgICAgICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgICAgIDogJ3JlbW90ZU1ldGhvZCcsXG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQoZGF0YSwgb3B0cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlTWVzc2FnZShvcmlnaW4sIG9wdHMsIGJ1ZmZlcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyUmVtb3RlKHJlbW90ZSkge1xuICAgICAgICBpZiAocmVtb3RlLmRlc3RpbmF0aW9uID09PSBOZW8ud29ya2VySWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAge2NsYXNzTmFtZSwgbWV0aG9kc30gPSByZW1vdGUsXG4gICAgICAgICAgICAgICAgcGtnICAgICAgICAgICAgICAgICAgPSBOZW8ubnMoY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKG1ldGhvZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZS5vcmlnaW4gIT09ICdtYWluJyAmJiBwa2dbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByZW1vdGUgbWV0aG9kIGRlZmluaXRpb24gJyArIGNsYXNzTmFtZSArICcuJyArIG1ldGhvZClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwa2dbbWV0aG9kXSA/Pz0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVtb3RlTWV0aG9kKG1zZykge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHBrZyA9IE5lby5ucyhtc2cucmVtb3RlQ2xhc3NOYW1lKSxcbiAgICAgICAgICAgIG91dCwgbWV0aG9kO1xuXG4gICAgICAgIGlmICghcGtnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG5hbWVzcGFjZSBcIicgKyBtc2cucmVtb3RlQ2xhc3NOYW1lICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZCA9IHBrZ1ttc2cucmVtb3RlTWV0aG9kXTtcblxuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBtZXRob2QgbmFtZSBcIicgKyBtc2cucmVtb3RlTWV0aG9kICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgbXNnLmRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgb3V0XG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7bWUucmVqZWN0KG1zZywgZXJyKX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7bWUucmVzb2x2ZShtc2csIGRhdGEpfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBvdXQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG5cbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcmVqZWN0IDogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQobXNnLCBvcHRzKTtcbiAgICAgICAgbWUuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVzb2x2ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZXNvbHZlKG1zZywgZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQobXNnLCBvcHRzKTtcbiAgICAgICAgbWUuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFJlbW90ZU1ldGhvZEFjY2Vzcyk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBOZW8gICAgICAgICBmcm9tICcuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzJztcbmltcG9ydCAqIGFzIGNvcmUgICBmcm9tICcuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL19leHBvcnQubWpzJztcbmltcG9ydCBTZXJ2aWNlQmFzZSBmcm9tICcuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvU2VydmljZUJhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLlNlcnZpY2VXb3JrZXJcbiAqIEBleHRlbmRzIE5lby53b3JrZXIuU2VydmljZUJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgU2VydmljZVdvcmtlciBleHRlbmRzIFNlcnZpY2VCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5TZXJ2aWNlV29ya2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uU2VydmljZVdvcmtlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZlcnNpb249JzEuMC4wJ1xuICAgICAgICAgKi9cbiAgICAgICAgdmVyc2lvbjogJzAuMS4wJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0cmluZ30gd29ya2VySWQ9J3NlcnZpY2UnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHdvcmtlcklkID0gJ3NlcnZpY2UnXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFNlcnZpY2VXb3JrZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==