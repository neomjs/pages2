/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./node_modules/neo.mjs/src/main/DomAccess.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/DomAccess.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _mixin_DeltaUpdates_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixin/DeltaUpdates.mjs */ "./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs");
/* harmony import */ var _DomUtils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomUtils.mjs */ "./node_modules/neo.mjs/src/main/DomUtils.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _util_Rectangle_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Rectangle.mjs */ "./node_modules/neo.mjs/src/util/Rectangle.mjs");
/* harmony import */ var _util_String_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/String.mjs */ "./node_modules/neo.mjs/src/util/String.mjs");







const
    doPreventDefault = e => e.preventDefault(),
    filterTabbable   = e => !e.classList.contains('neo-focus-trap') && _DomUtils_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].isTabbable(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    lengthRE         = /^\d+\w+$/,

    capturePassive = {
        capture: true,
        passive: true
    },

    fontSizeProps = [
        'font-family',
        'font-kerning',
        'font-size',
        'font-size-adjust',
        'font-stretch',
        'font-style',
        'font-weight',
        'letter-spacing',
        'line-height',
        'text-decoration',
        'text-transform',
        'word-break'
    ],

    modifierKeys = {
        Shift   : 1,
        Alt     : 1,
        Meta    : 1,
        Control : 1
    };

/**
 * @class Neo.main.DomAccess
 * @extends Neo.core.Base
 * @singleton
 */
class DomAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.main.DomAccess'
         * @protected
         */
        className: 'Neo.main.DomAccess',
        /**
         * @member {Number} countDeltas=0
         * @protected
         */
        countDeltas: 0,
        /**
         * @member {Number} countDeltasPer250ms=0
         * @protected
         */
        countDeltasPer250ms: 0,
        /**
         * @member {Number} countUpdates=0
         * @protected
         */
        countUpdates: 0,
        /**
         * @member {Array} mixins=[DeltaUpdates, Observable]
         */
        mixins: [
            _mixin_DeltaUpdates_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]
        ],
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'addScript',
                'align',
                'applyBodyCls',
                'blur',
                'execCommand',
                'focus',
                'getAttributes',
                'getBoundingClientRect',
                'getScrollingDimensions',
                'measure',
                'monitorAutoGrow',
                'monitorAutoGrowHandler',
                'navigate',
                'navigateTo',
                'scrollBy',
                'scrollIntoView',
                'scrollTo',
                'scrollToTableRow',
                'selectNode',
                'setBodyCls',
                'setStyle',
                'syncModalMask',
                'trapFocus',
                'windowScrollTo'
            ]
        },
        /**
         * @member {Boolean} renderCountDeltas_=false
         * @protected
         */
        renderCountDeltas_: false,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * Void attributes inside html tags
         * @member {String[]} voidAttributes
         * @protected
         */
        voidAttributes: [
            'checked',
            'required'
        ]
    }

    /**
     * @member {Number} logDeltasIntervalId=0
     * @protected
     */
    logDeltasIntervalId = 0

    /**
     * @returns {HTMLElement}
     */
    get modalMask() {
        let me = this;

        if (!me._modalMask) {
            me._modalMask = document.createElement('div');
            me._modalMask.className = 'neo-dialog-modal-mask';
            me._modalMask.addEventListener('mousedown', doPreventDefault, {capture : true})
        }

        return me._modalMask
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        if (Neo.config.renderCountDeltas) {
            me.renderCountDeltas = true
        }

        me.initGlobalListeners();

        // Set up our aligning callback which is called when things change which may
        // mean that alignments need to be updated.
        me.syncAligns = me.syncAligns.bind(me)
    }

    /**
     * @param {Object} alignSpec
     */
    addAligned(alignSpec) {
        const
            me                   = this,
            {id}                 = alignSpec,
            aligns               = me._aligns || (me._aligns = new Map()),
            resizeObserver       = me._alignResizeObserver || (me._alignResizeObserver = new ResizeObserver(me.syncAligns)),
            {constrainToElement} = alignSpec;

        // Set up listeners which monitor for changes
        if (!aligns.has(id)) {
            // Realign when target's layout-controlling element changes size
            resizeObserver.observe(alignSpec.offsetParent);

            // Realign when align to target changes size
            resizeObserver.observe(alignSpec.targetElement);

            // Realign when constraining element changes size
            if (constrainToElement) {
                resizeObserver.observe(constrainToElement)
            }
        }

        if (!me.hasDocumentScrollListener) {
            document.addEventListener('scroll', me.syncAligns, {
                capture: true,
                passive: true
            });

            me.hasDocumentScrollListener = true
        }

        if (!me.documentMutationObserver) {
            me.documentMutationObserver = new MutationObserver(me.onDocumentMutation.bind(me));

            me.documentMutationObserver.observe(document.body, {
                childList: true,
                subtree  : true
            })
        }

        aligns.set(id, alignSpec)
    }

    /**
     * @param {Object} data
     * @param {Boolean} data.async
     * @param {Boolean} [data.defer=false]
     * @param {String} [data.src=true]
     */
    addScript(data) {
        let script = document.createElement('script');

        if (!data.hasOwnProperty('async')) {
            data.async = true
        }

        Object.assign(script, data);

        document.head.appendChild(script)
    }

    /**
     * Triggered after the renderCountDeltas config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetRenderCountDeltas(value, oldValue) {
        let me                    = this,
            {logDeltasIntervalId} = me,
            node;

        if (value) {
            if (logDeltasIntervalId === 0) {
                me.logDeltasIntervalId = setInterval(() => {
                    node = document.getElementById('neo-delta-updates');

                    if (node) {
                        node.innerHTML = String(me.countDeltasPer250ms * 4)
                    }

                    me.countDeltasPer250ms = 0
                }, 250)
            }
        } else {
            logDeltasIntervalId && clearInterval(logDeltasIntervalId);
            me.logDeltasInterval = 0
        }
    }

    /**
     * @param {Object} data
     * @returns {Promise<void>}
     */
    async align(data) {
        const
            me            = this,
            {constrainTo} = data,
            subject       = data.subject = me.getElement(data.id),
            {style}       = subject,
            align         = {...data},
            lastAlign     = me._aligns?.get(data.id);

        if (lastAlign) {
            subject.classList.remove(`neo-aligned-${lastAlign.result.position}`)
        }

        // Release any constrainTo or matchSize sizing which may have been imposed
        // by a previous align call.
        me.resetDimensions(align);

        // The Rectangle's align spec target and constrainTo must be Rectangles
        align.target = me.getClippedRect({id : data.targetElement = me.getElementOrBody(data.target)});

        if (!align.target) {
            // Set the Component with id data.id to hidden : true
            return Neo.worker.App.setConfigs({id: data.id, hidden: true})
        }

        data.offsetParent = data.targetElement.offsetParent;

        if (constrainTo) {
            align.constrainTo = me.getBoundingClientRect({id : data.constrainToElement = me.getElementOrBody(constrainTo)})
        }

        // Get an aligned clone of myRect aligned according to the align object
        const
            myRect = me.getBoundingClientRect(data),
            result = data.result = myRect.alignTo(align);

        Object.assign(style, {
            top       : 0,
            left      : 0,
            transform : `translate(${result.x}px,${result.y}px)`
        });

        if (result.width !== myRect.width) {
            style.width = `${result.width}px`
        }

        if (result.height !== myRect.height) {
            style.height = `${result.height}px`
        }

        // Place box shadow at correct edge
        subject.classList.add(`neo-aligned-${result.position}`);

        // Register an alignment to be kept in sync
        me.addAligned(data)
    }

    /**
     * @param {Object} data
     * @param {String[]} data.cls
     */
    applyBodyCls(data) {
        let cls = data.cls || [];
        document.body.classList.add(...cls)
    }

    /**
     * Calls blur() on a node for a given dom node id
     * @param {Object} data
     * @returns {Object} obj.id => the passed id
     */
    blur(data) {
        this.getElement(data.id)?.blur();
        return {id: data.id}
    }

    /**
     * @param {Object} data
     * @param {String} data.command
     * @returns {Object} data
     */
    execCommand(data) {
        document.execCommand(data.command);
        return data
    }

    /**
     * Calls focus() on a node for a given dom node id
     * @param {Object} data
     * @param {Boolean} data.children
     * @param {String} data.id
     * @returns {Object} obj.id => the passed id
     */
    focus({children, id}) {
        let node = this.getElement(id);

        if (node) {
            // The children property means focus inner elements if possible.
            if (!_DomUtils_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].isFocusable(node) && children) {
                // query for the first focusable descendent
                node = _DomUtils_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].query(node, _DomUtils_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].isFocusable)
            }

            if (node) {
                node.focus();

                if (Neo.isNumber(node.selectionStart)) {
                    node.selectionStart = node.selectionEnd = node.value.length
                }
            }
        }

        return {id}
    }

    /**
     * Returns the attributes for a given dom node id
     * @param {Object}          data
     * @param {String|String[]} data.attributes either an attribute or an array of attributes
     * @param {String|String[]} data.id either an id or an array of ids
     * @returns {Array|Object} In case id is an array, an array of attribute objects is returned, otherwise an object
     */
    getAttributes({attributes, id}) {
        let returnData;

        if (Array.isArray(id)) {
            returnData = [];

            id.forEach(id => {
                returnData.push(this.getAttributes({attributes, id}))
            })
        } else {
            let node = this.getElementOrBody(id);

            returnData = {};

            if (node) {
                if (!Array.isArray(attributes)) {
                    attributes = [attributes]
                }

                attributes.forEach(attribute => {
                    returnData[attribute] = node[attribute]
                })
            }
        }

        return returnData
    }

    /**
     * Returns node.getBoundingClientRect() for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @returns {DOMRect|DOMRect[]} In case id is an array, an array of DomRects is returned, otherwise an DomRect object
     */
    getBoundingClientRect(data) {
        let me = this,
            returnData;

        if (Array.isArray(data.id)) {
            return data.id.map(id => me.getBoundingClientRect({id}))
        } else {
            let node = me.getElementOrBody(data.nodeType ? data : data.id),
                rect = {},
                minWidth, minHeight, style;

            returnData = {};

            if (node) {
                rect      = node.getBoundingClientRect();
                style     = node.ownerDocument.defaultView.getComputedStyle(node);
                minWidth  = style.getPropertyValue('min-width');
                minHeight = style.getPropertyValue('min-height');

                // DomRect does not support spreading => {...DomRect} => {}
                returnData = _util_Rectangle_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].clone(rect);

                // Measure minWidth/minHeight in other units like em/rem etc
                // Note that 0px is what the DOM reports if no minWidth is specified
                // so we do not report a minimum in these cases.
                if (lengthRE.test(minWidth) && minWidth !== '0px') {
                    returnData.minWidth = me.measure({value: minWidth, id: node})
                }
                if (lengthRE.test(minHeight) && minHeight !== '0px') {
                    returnData.minHeight = me.measure({value: minHeight, id: node})
                }
            }
        }

        return returnData
    }

    /**
     * @param {Object|String} data
     * @returns {Neo.util.Rectangle}
     */
    getClippedRect(data) {
        let me            = this,
            node          = me.getElement(typeof data === 'object' ? data.id : data),
            {defaultView} = node.ownerDocument,
            rect          = me.getBoundingClientRect(node);

        for (let parentElement = node.offsetParent; parentElement && rect && parentElement !== document.documentElement; parentElement = parentElement.parentElement) {
            if (defaultView.getComputedStyle(parentElement).getPropertyValue('overflow') !== 'visible') {
                rect = rect.intersects(this.getBoundingClientRect(parentElement))
            }
        }

        return rect
    }

    /**
     * @param {String|HTMLElement} nodeId
     * @returns {HTMLElement|null}
     * @protected
     */
    getElement(nodeId) {
        let node = nodeId?.nodeType ?
            nodeId : Neo.config.useDomIds ?
                document.getElementById(nodeId) :
                document.querySelector(`[data-neo-id='${nodeId}']`);

        return node || null
    }

    /**
     * @param {String|HTMLElement} nodeId='document.body'
     * @returns {HTMLElement|null}
     * @protected
     */
    getElementOrBody(nodeId='document.body') {
        if (!nodeId) {
            return null
        }

        return nodeId.nodeType ? nodeId : (nodeId === 'body' || nodeId === 'document.body') ? document.body : this.getElement(nodeId)
    }

    /**
     * @param {HTMLElement|Object} data
     * @param {String|String[]} data.id
     * @returns {Object}
     */
    getScrollingDimensions(data) {
        let me = this;

        if (Array.isArray(data.id)) {
            return data.id.map(id => me.getScrollingDimensions({id}))
        } else {
            let node = data.nodeType ? data : me.getElementOrBody(data.id);

            return {
                clientHeight: node?.clientHeight,
                clientWidth : node?.clientWidth,
                scrollHeight: node?.scrollHeight,
                scrollWidth : node?.scrollWidth
            }
        }
    }

    /**
     *
     */
    initGlobalListeners() {
        let me = this;

        document.addEventListener('blur',      me.onDocumentBlur     .bind(me), capturePassive);
        document.addEventListener('keydown',   me.onDocumentKeyDown  .bind(me), capturePassive);
        document.addEventListener('keyup',     me.onDocumentKeyUp    .bind(me), capturePassive);
        document.addEventListener('mousedown', me.onDocumentMouseDown.bind(me), {capture : true})
    }

    /**
     * @param {HTMLElement} el
     * @returns {Boolean}
     */
    isAlignSubject(el) {
        return [...this._aligns?.values()].some(align => align.subject === el)
    }

    /**
     * Include a script into the document.head
     * You can add more attributes if needed. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
     * @param {String} src
     * @param {Object} opts={defer:true}
     * @param {Boolean} [opts.async]
     * @param {Boolean} [opts.defer]
     * @returns {Promise<unknown>}
     */
    loadScript(src, opts={defer:true}) {
        let script;

        return new Promise((resolve, reject) => {
            script = document.createElement('script');

            Object.assign(script, {
                ...opts,
                onerror: reject,
                onload : resolve,
                src
            });

            document.head.appendChild(script)
        })
    }

    /**
     * Include a link into the document.head
     * @param {String} href
     * @param {Object} dataset=null
     * @returns {Promise<unknown>}
     */
    loadStylesheet(href, dataset=null) {
        let link;

        return new Promise((resolve, reject) => {
            link = document.createElement('link');

            Object.assign(link, {
                href,
                onerror: reject,
                onload : resolve,
                rel    : 'stylesheet',
                type   : 'text/css'
            });

            if (dataset) {
                Object.assign(link.dataset, dataset)
            }

            document.head.appendChild(link)
        })
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     * @param {Number|String} data.value
     * @returns {Number|String}
     */
    measure({ value, id }) {
        const node = id.nodeType === 1 ? id : this.getElement(id);

        if (value.endsWith('%')) {
            const fraction = parseFloat(value) / 100;

            return (node.offsetParent?.getBoundingClientRect().height || 0) * fraction
        }
        // If it's any other CSS unit than px, it needs to be measured using the DOM
        else if (isNaN(value) && !value.endsWith('px')) {
            const elStyle = node.ownerDocument.defaultView.getComputedStyle(node);

            let d = this._measuringDiv;

            if (!d) {
                d = this._measuringDiv = document.createElement('div');
                d.style = 'position:fixed;top:-10000px;left:-10000px'
            }

            // In case a DOM update cleared it out
            document.body.appendChild(d);

            // Set all the font-size, font-weight etc style properties so that
            // em/ex/rem etc units will match
            fontSizeProps.forEach(prop => {
                d.style[prop] = elStyle[prop];
            });
            d.className = node.className;
            d.style.width = value;

            // Read back the resulting computed pixel width
            value = elStyle.width;

        }
        // If it's a number, or ends with px, use the numeric value.
        else {
            value = parseFloat(value)
        }

        return value
    }

    /**
     * Checks the overflow status of a TextAreaField's &lt;textarea> element and updates the
     * height so that there is never a vertical scrollbar.
     * @param {Object} data
     */
    async monitorAutoGrow(data) {
        const
            me     = this,
            target = data.subject = me.getElement(data.id);

        // We need to update the height on every input event is autoGrow is truthy.
        target[data.autoGrow ? 'addEventListener' : 'removeEventListener']('input', me.monitorAutoGrowHandler);

        // Fix the height up immediately too
        data.autoGrow && me.monitorAutoGrowHandler({
            target
        })
    }

    /**
     *
     * @param {Event|Object} data
     * @param {String} [data.id]
     * @param {HTMLElement} [data.target]
     */
    monitorAutoGrowHandler(data) {
        const target = data.target || this.getElement(data.id);

        if (target) {
            const
                { style }              = target,
                { style : inputStyle } = target.closest('.neo-textarea');

            // Measure the scrollHeight when forced to overflow, then set height to encompass the scrollHeight
            style.height = style.minHeight = 0;
            inputStyle.setProperty('--textfield-input-height', `${target.scrollHeight + 5}px`);
            inputStyle.setProperty('height', '');
            style.height = style.minHeight = ''
        }
    }

    /**
     *
     */
    onDocumentBlur() {
        Neo.altKeyDown = Neo.controlKeyDown = Neo.metaKeyDown = Neo.shiftKeyDown = false
    }

    /**
     * @param {KeyboardEvent} keyEvent
     */
    onDocumentKeyDown(keyEvent) {
        if (modifierKeys[keyEvent.key]) {
            // e.g. Neo.isShiftKeyDown = true or Neo.isControlKeyDown = true.
            // Selection can consult this value
            Neo[`${_util_String_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].uncapitalize(keyEvent.key)}KeyDown`] = true
        }
    }

    /**
     * @param {KeyboardEvent} keyEvent
     */
    onDocumentKeyUp(keyEvent) {
        if (modifierKeys[keyEvent.key]) {
            Neo[`${_util_String_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].uncapitalize(keyEvent.key)}KeyDown`] = false
        }
    }

    /**
     * @param {Array} mutations
     */
    onDocumentMutation(mutations) {
        const me = this;

        // If the mutations are purely align subjects being added or removed, take no action.
        if (!mutations.every(({ type, addedNodes, removedNodes }) => {
            if (type === 'childList') {
                const nodes = [...Array.from(addedNodes), ...Array.from(removedNodes)];

                return nodes.every(a => me.isAlignSubject(a))
            }
        })) {
            me.syncAligns()
        }
    }

    /**
     * @param {MouseEvent} e
     */
    onDocumentMouseDown(e) {
        let focusController = e.target?.closest('[data-focus]');

        // data-focus on an element means reject mousedown gestures, and move focus
        // to the referenced element.
        if (focusController) {
            e.preventDefault();
            document.getElementById(focusController.dataset.focus)?.focus()
        }
    }

    /**
     *
     */
    onDomContentLoaded() {
        Neo.config.applyBodyCls && this.applyBodyCls({cls: ['neo-body']});
        Neo.config.applyFixedPositionToHtmlTag && document.documentElement.style.setProperty('position', 'fixed')
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     * @param {String} data.nodeId
     */
    onGetOffscreenCanvas(data) {
        let me        = this,
            node      = me.getElement(data.nodeId),
            offscreen = node.transferControlToOffscreen();

        data.offscreen = offscreen;

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data,
            replyId: data.id,
            success: true
        }, [offscreen])
    }

    /**
     * @param {Object} data
     * @param {String[]} data.attributes
     * @param {Array} data.functions An array containing strings and/or objects
     * @param {String[]} data.styles
     * @param {String} data.vnodeId
     * @protected
     */
    onReadDom(data) {
        let attributes    = data.attributes || [],
            functions     = data.functions  || [],
            styles        = data.styles     || [],
            {vnodeId}     = data,
            retAttributes = {},
            retFunctions  = {},
            retStyles     = {},
            element       = vnodeId ? this.getElement(vnodeId) : null,
            fnName, scope;

        attributes.forEach(key => {
            retAttributes[key] = element[key]
        });

        functions.forEach((key, index) => {
            if (Neo.isObject(key)) {
                key.params         = key.params         || [];
                key.paramIsDomNode = key.paramIsDomNode || [];

                scope = key.scope ? document[key.scope] : element;

                key.params.forEach((param, paramIndex) => {
                    if (key.paramIsDomNode[paramIndex] === true) {
                        key.params[paramIndex] = this.getElement(key.params[paramIndex])
                    }
                });

                fnName = key.returnFnName ? key.returnFnName : index;
                retFunctions[fnName] = scope[key.fn](...key.params);

                if (key.returnValue) {
                    retFunctions[fnName] = retFunctions[fnName][key.returnValue]
                }
            } else {
                retFunctions[key] = element[key]()
            }
        });

        styles.forEach(key => {
            retStyles[key] = element.style[key]
        });

        Object.assign(data, {
            attributes: retAttributes,
            functions : retFunctions,
            styles    : retStyles
        });

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data,
            replyId: data.id,
            success: true
        })
    }

    /**
     * @param data
     * @param data.target
     * @param data.relatedTarget
     */
    onTrappedFocusMovement({ target, relatedTarget }) {
        const backwards = relatedTarget && (target.compareDocumentPosition(relatedTarget) & 4);

        if (target.matches('.neo-focus-trap')) {
            const
                containingEement = target.parentElement,
                treeWalker       = containingEement.$treeWalker,
                topFocusTrap     = containingEement.$topFocusTrap,
                bottomFocusTrap  = containingEement.$bottomFocusTrap;

            treeWalker.currentNode = backwards ? bottomFocusTrap : topFocusTrap;
            treeWalker[backwards ? 'previousNode' : 'nextNode']();

            requestAnimationFrame(() => treeWalker.currentNode.focus())
        }
    }

    /**
     * @param {Object} data
     * @protected
     */
    read(data) {
        typeof data === 'function' && data()
    }

    /**
     * Resets any DOM sizing configs to the last externally configured value.
     *
     * This is used during aligning to release any constraints applied by a previous alignment.
     * @param {Object} align
     * @protected
     */
    resetDimensions(align) {
        Object.assign(this.getElement(align.id).style, {
            flex     : align.configuredFlex,
            height   : align.configuredHeight,
            maxHeight: align.configuredMaxHeight,
            maxWidth : align.configuredMaxWidth,
            minHeight: align.configuredMinHeight,
            minWidth : align.configuredMinWidth,
            width    : align.configuredWidth
        })
    }

    /**
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy
     * @param {Object} data
     * @param {String} data.behavior='auto' auto, instant, smooth
     * @param {String} data.direction='top' left, top
     * @param {String} data.id
     * @param {Number} data.value
     * @returns {Object} obj.id => the passed id
     */
    scrollBy({behavior='auto', direction='top', id, value}) {
        this.getElement(id)?.scrollBy({behavior, [direction]: value});
        return {id}
    }

    /**
     * You can either pass the id or a querySelector
     * @param {Object} data
     * @param {String} [data.id]
     * @param {String} data.behavior='smooth'
     * @param {String} data.block='start'
     * @param {Number} data.delay=500
     * @param {String} data.inline='nearest'
     * @param {String} [data.querySelector]
     * @returns {Promise<any>}
     */
    scrollIntoView({id, behavior='smooth', block='start', delay=500, inline='nearest', querySelector}) {
        let node = id ? this.getElement(id) : document.querySelector(querySelector),
            opts = {behavior, block, inline};

        if (behavior !== 'smooth') {
            node.scrollIntoView(opts)
        } else {
            // scrollIntoView() does not provide a callback yet.
            // See: https://github.com/w3c/csswg-drafts/issues/3744
            return new Promise(resolve => {
                if (node) {
                    let hasListener = 'scrollend' in window;

                    hasListener && document.addEventListener('scrollend', () => resolve(), {capture: true, once: true});

                    node.scrollIntoView(opts);

                    !hasListener && this.timeout(delay).then(() => {resolve()})
                } else {
                    resolve()
                }
            })
        }
    }

    /**
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
     * @param {Object} data
     * @param {String} data.behavior='auto' auto, instant, smooth
     * @param {String} data.direction='top' left, top
     * @param {String} data.id
     * @param {Number} data.value
     * @returns {Object} obj.id => the passed id
     */
    scrollTo({behavior='auto', direction='top', id, value}) {
        this.getElement(id)?.scrollTo({behavior, [direction]: value});
        return {id}
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     * @param {String} data.behavior='smooth'
     * @param {Number} data.offset=34
     * @returns {Object} obj.id => the passed id
     */
    scrollToTableRow({id, behavior='smooth', offset=34}) {
        let node = this.getElement(id); // tr tag

        if (node) {
            let tableNode   = node.parentNode.parentNode,
                wrapperNode = tableNode.parentNode,
                tableTop    = tableNode.getBoundingClientRect().top,
                top         = node.getBoundingClientRect().top;

            wrapperNode.scrollTo({
                behavior,
                top: top - tableTop - offset
            })
        }

        return {id}
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     * @param {Number} [data.start=0]
     * @param {Number} [data.end=99999]
     * @returns {Object} obj.id => the passed id
     */
    selectNode(data) {
        let node  = this.getElement(data.id),
            start = Neo.isNumber(data.start) ? data.start : 0,
            end   = Neo.isNumber(data.end)   ? data.end   : 99999;

        if (node) {
            node.select();
            node.setSelectionRange(start, end)
        }

        return {id: data.id}
    }

    /**
     * @param {Object} data
     * @param {String[]} data.add
     * @param {Object[]} data.remove
     */
    setBodyCls(data) {
        document.body.classList.remove(...data.remove || []);
        document.body.classList.add(...data.add || [])
    }

    /**
     * Not recommended to use => stick to vdom updates.
     * Can be handy for custom CSS based animations though.
     * @param {Object} data
     * @param {String} data.id A node id or 'document.body'
     * @param {Object} data.style
     * @returns {Object} obj.id => the passed id
     */
    setStyle(data) {
        let node = this.getElementOrBody(data.id);

        if (node) {
            Object.entries(data.style).forEach(([key, value]) => {
                if (Neo.isString(value) && value.includes('!important')) {
                    value = value.replace('!important', '').trim();
                    node.style.setProperty(Neo.decamel(key), value, 'important')
                } else {
                    node.style[Neo.decamel(key)] = value
                }
            })
        }

        return {id: data.id}
    }

    /**
     *
     */
    syncAligns() {
        const
            me        = this,
            {_aligns} = me;

        // Keep all registered aligns aligned on any detected change
        _aligns?.forEach(align => {
            const targetPresent = document.contains(align.targetElement);

            // Align subject and target still in the DOM - correct its alignment
            if (document.contains(align.subject) && targetPresent) {
                me.align(align)
            }
            // Align subject or target no longer in the DOM - remove it.
            else {
                // If target is no longer in the DOM, hide the subject component
                if (!targetPresent) {
                    Neo.worker.App.setConfigs({ id: align.id, hidden: true })
                }

                const
                    {_alignResizeObserver} = me,
                    {constrainToElement}   = align;

                // Stop observing the align elements
                _alignResizeObserver.unobserve(align.subject);
                _alignResizeObserver.unobserve(align.offsetParent);
                _alignResizeObserver.unobserve(align.targetElement);
                if (constrainToElement) {
                    _alignResizeObserver.unobserve(constrainToElement)
                }

                // Clear the last aligned class.
                align.subject.classList.remove(`neo-aligned-${align.result?.position}`);

                _aligns.delete(align.id)
            }
        })
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     * @param {Boolean} data.modal
     */
    syncModalMask({ id, modal }) {
        const el = id && this.getElement(id);

        // If we are visible and modal, the mask needs to be just below this element.
        if (el && modal && el.ownerDocument.contains(el) && el.ownerDocument.defaultView.getComputedStyle(el).getPropertyValue('display') !== 'none') {
            document.body.insertBefore(this.modalMask, el)
        }
        // Otherwise, the mask needs to be below the next topmost modal dialog if possible, or hidden
        else {
            const
                modals       = document.querySelectorAll('.neo-modal'),
                topmostModal = modals[modals.length - 1];

            // Move the mask under the next topmost modal now modal "id" is gone.
            if (topmostModal) {
                this.syncModalMask({ id: topmostModal.id, modal: true })
            } else {
                this._modalMask?.remove()
            }
        }
    }

    /**
     * Traps (or stops trapping) focus within a Component
     * @param {Object} data
     * @param {String} data.id The Component to trap focus within.
     * @param {Boolean} [data.trap=true] Pass `false` to stop trapping focus inside the Component.
     */
    async trapFocus(data) {
        const
            me                     = this,
            onTrappedFocusMovement = me.$boundOnTrappedFocusMovement || (me.$boundOnTrappedFocusMovement = me.onTrappedFocusMovement.bind(me)),
            subject                = data.subject = me.getElement(data.id),
            { trap = true }        = data;

        // Called before DOM has been created.
        if (!subject) {
            return
        }

        let topFocusTrap    = subject.$topFocusTrap,
            bottomFocusTrap = subject.$bottomFocusTrap;

        if (trap) {
            if (!subject.$treeWalker) {
                subject.$treeWalker = document.createTreeWalker(subject, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: filterTabbable
                });
                topFocusTrap = subject.$topFocusTrap = document.createElement('div');
                bottomFocusTrap = subject.$bottomFocusTrap = document.createElement('div');

                // The two focus trapping elements must be invisible but tabbable.
                topFocusTrap.className = bottomFocusTrap.className = 'neo-focus-trap';
                topFocusTrap.setAttribute('tabIndex', 0);
                bottomFocusTrap.setAttribute('tabIndex', 0);

                // Listen for when they gain focus and wrap focus within the encapsulating element
                subject.addEventListener('focusin', onTrappedFocusMovement)
            }

            // Ensure content is encapsulated by the focus trap elements
            subject.insertBefore(topFocusTrap, subject.firstChild);
            subject.appendChild(bottomFocusTrap)
        } else {
            subject.removeEventListener('focusin', onTrappedFocusMovement)
        }
    }

    /**
     * @param {Object} data
     * @param {String} [data.behavior='smooth'] // auto or smooth
     * @param {String} [data.left=0]
     * @param {String} [data.top=0]
     */
    windowScrollTo(data) {
        window.scrollTo({
            behavior: data.behavior || 'smooth',
            left    : data.left     || 0,
            top     : data.top      || 0
        })
    }

    /**
     * @param {Object} data
     * @protected
     */
    write(data) {
        this.du_insertNode({
            index    : data.parentIndex,
            outerHTML: data.html || data.outerHTML,
            parentId : data.parentId
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(DomAccess));


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/DomEvents.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/DomEvents.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _util_String_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/String.mjs */ "./node_modules/neo.mjs/src/util/String.mjs");
/* harmony import */ var _mixin_TouchDomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixin/TouchDomEvents.mjs */ "./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs");





const globalDomEvents = [
    {name: 'change',      handler: 'onChange'},
    {name: 'click',       handler: 'onClick'},
    {name: 'contextmenu', handler: 'onContextMenu'},
    {name: 'dblclick',    handler: 'onDoubleClick'},
    {name: 'focusin',     handler: 'onFocusIn'},
    {name: 'focusout',    handler: 'onFocusOut'},
    {name: 'input',       handler: 'onChange'},
    {name: 'keydown',     handler: 'onKeyDown'},
    {name: 'keyup',       handler: 'onKeyUp'},
    {name: 'mousedown',   handler: 'onMouseDown'},
    {name: 'mouseenter',  handler: 'onMouseEnter', options: {capture: true}},
    {name: 'mouseleave',  handler: 'onMouseLeave', options: {capture: true}},
    {name: 'mouseup',     handler: 'onMouseUp'},
    {name: 'scroll',      handler: 'onScroll',     options: {capture: true}},
    {name: 'wheel',       handler: 'onWheel',      options: {passive: false}}
];

// Will get applied to the document.body in case Neo.config.hasTouchEvents === true
const touchEvents = [
    {name: 'touchcancel', handler: 'onTouchCancel'},
    {name: 'touchend',    handler: 'onTouchEnd'},
    {name: 'touchenter',  handler: 'onTouchEnter'},
    {name: 'touchleave',  handler: 'onTouchLeave'},
    {name: 'touchmove',   handler: 'onTouchMove', options: {passive: false}},
    {name: 'touchstart',  handler: 'onTouchStart'}
];

// wheel events fire very often, so we limit the targets to avoid unnecessary post messages from main to the app worker
const globalWheelTargets = [
    'neo-c-m-scrollcontainer',
    'neo-c-w-scrollcontainer',
    'neo-calendar-yearcomponent',
    'neo-circle-component',
    'neo-dateselector',
    'neo-gallery',
    'neo-helix'
];

// separated from globalWheelTargets => performance
// buffer in ms
const globalWheelTargetsBuffer = {
    'neo-c-m-scrollcontainer'   : 100,
    'neo-c-w-scrollcontainer'   : 100,
    'neo-calendar-yearcomponent': 300,
    'neo-dateselector'          : 300
};

// separated from globalWheelTargets => performance
const globalWheelTargetsKeepEvent = [
    'neo-c-m-scrollcontainer',
    'neo-c-w-scrollcontainer'
];

const lastWheelEvent = {
    date  : null,
    target: null
};

const
    disabledInputKeys         = {},
    preventClickTargets       = [],
    preventContextmenuTargets = [];

/**
 * @class Neo.main.DomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true

    static config = {
        /**
         * @member {String} className='Neo.main.DomEvents'
         * @protected
         */
        className: 'Neo.main.DomEvents',
        /**
         * todo: conditional dynamic import once the build processes can handle it
         * @member {Array} mixins=[TouchDomEvents]
         */
        mixins: [_mixin_TouchDomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]],
        /**
         * @member {boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'addDomListener',
                'registerDisabledInputChars',
                'registerPreventDefaultTargets',
                'unregisterDisabledInputChars'
            ]
        }
    }

    /**
     *
     * @member {Object} touch
     */
    lastTouch = null

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        document.addEventListener('DOMContentLoaded',  me.onDomContentLoaded .bind(me));
        document.addEventListener('selectionchange',   me.onSelectionChange  .bind(me));
        window  .addEventListener('orientationchange', me.onOrientationChange.bind(me));
        window  .addEventListener('hashchange',        me.onHashChange       .bind(me));

        if (Neo.config.useSharedWorkers) {
            window.addEventListener('beforeunload', me.onBeforeUnload.bind(me))
        }
    }

    /**
     * @param {Object} data
     */
    addDomListener(data) {
        let me       = this,
            i        = 0,
            len      = data.events.length,
            failedId = null,
            event, id, targetNode;

        for (; i < len; i++) {
            event = data.events[i];

            if (!me[event.handler]) {
                me[event.handler] = Neo.emptyFn
            }

            id = event.vnodeId || data.vnodeId;

            if (id === 'document.body') {
                targetNode = document.body
            } else if (Neo.config.useDomIds) {
                targetNode = document.getElementById(id)
            } else {
                targetNode = document.querySelector(`[data-neo-id='${id}']`)
            }

            if (targetNode) {
                targetNode.addEventListener(event.name, me[event.handler].bind(me))
            } else {
                failedId = id
            }
        }

        if (failedId && Neo.config.environment === 'development') {
            console.warn('DomEvents:addDomListener() => target node not found:', failedId)
        }

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data,
            replyId: data.id,
            success: !failedId
        })
    }

    /**
     *
     */
    addGlobalDomListeners() {
        let me = this;

        [...globalDomEvents].concat(Neo.config.hasTouchEvents ? touchEvents : []).forEach(event => {
            document.body.addEventListener(event.name, me[event.handler].bind(me), event.options)
        });
    }

    /**
     * Local domEvent listener
     * @param {Event} event
     */
    domEventListener(event) {
        let me       = this,
            {target} = event,

            config = {
                action   : 'domEvent',
                eventName: event.type,

                data: {
                    ...me.getEventData(event),
                    id   : target.id,
                    value: target.value
                }
            };

        switch (event.type) {
            case 'mousemove':
                Object.assign(config.data, me.getMouseEventData(event));
                break
            default:
                event.preventDefault();
                break
        }

        Neo.worker.Manager.sendMessage('app', config)
    }

    /**
     *
     * @param {HTMLElement} node
     * @returns {Object}
     */
    geAriaAttributes(node) {
        let ariaAttributes = {},
            {attributes}   = node,
            i              = 0,
            len            = attributes?.length || 0,
            attribute;

        for (; i < len; i++) {
            attribute = attributes[i];

            if (attribute.name.startsWith('aria-')) {
                ariaAttributes[attribute.name.substring(5)] = attribute.value
            }
        }

        return ariaAttributes
    }

    /**
     * Returns the distance between two points
     * @param  {Number} x1 The X position of the first point
     * @param  {Number} y1 The Y position of the first point
     * @param  {Number} x2 The X position of the second point
     * @param  {Number} y2 The Y position of the second point
     * @returns {Number}
     */
    getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    }

    /**
     * @param {Event} event
     * @returns {Object}
     */
    getEventData(event) {
        let path = event.composedPath();

        if (path.length < 1) {
            // our draggable implementation will generate paths, so we do need to check for them
            path = event.path;
        }

        const result = {
            path     : path.map(e => this.getTargetData(e)),
            target   : this.getTargetData(event.target),
            timeStamp: event.timeStamp,
            type     : event.type,
            data     : {...event.target.dataset}
        };

        if (event.relatedTarget) {
            result.relatedTarget = this.getTargetData(event.relatedTarget)
        }

        return result
    }

    /**
     * @param {KeyboardEvent} event
     * @returns {Object}
     */
    getKeyboardEventData(event) {
        let {altKey, code, ctrlKey, key, keyCode, metaKey, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey,
            code,
            ctrlKey,
            key,
            keyCode,
            metaKey,
            shiftKey
        }
    }

    /**
     * @param {MouseEvent} event
     * @returns {Object}
     */
    getMouseEventData(event) {
        let {altKey, clientX, clientY, ctrlKey, detail, metaKey, offsetX, offsetY, pageX, pageY, screenX, screenY, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey,
            clientX,
            clientY,
            ctrlKey,
            detail,
            metaKey,
            offsetX,
            offsetY,
            pageX,
            pageY,
            screenX,
            screenY,
            shiftKey
        }
    }

    /**
     * @param {Element} element
     * @returns {Element[]}
     */
    getPathFromElement(element) {
        let path = [];

        if (element) {
            path.push(element);

            while (element.parentNode) {
                path.push(element.parentNode);
                element = element.parentNode
            }
        }

        return path
    }

    /**
     * @param {Object[]} path
     * @param {HTMLElement} target
     * @returns {Object[]}
     */
    getSelectionPath(path, target) {
        if (target.parentNode && target.id.split('__').length > 1) {
            path = this.getSelectionPath(path, target.parentNode);
        }

        path.push(this.getTargetData(target));

        return path
    }

    /**
     * @param {HTMLElement} node
     * @returns {Object}
     */
    getTargetData(node) {
        let r    = node.getBoundingClientRect?.(),
            rect = r && this.parseDomRect(r) || {};

        return {
            aria             : this.geAriaAttributes(node),
            checked          : node.checked,
            childElementCount: node.childElementCount,
            clientHeight     : node.clientHeight,
            clientLeft       : node.clientLeft,
            clientTop        : node.clientTop,
            clientWidth      : node.clientWidth,
            cls              : node.classList ? [...node.classList] : [],
            data             : {...node.dataset},
            draggable        : node.draggable,
            hidden           : node.hidden,
            id               : Neo.config.useDomIds ? node.id : node.dataset?.['neoId'],
            inert            : node.inert,
            isConnected      : node.isConnected,
            isContentEditable: node.isContentEditable,
            nodeType         : node.nodeType,
            offsetHeight     : node.offsetHeight,
            offsetLeft       : node.offsetLeft,
            offsetTop        : node.offsetTop,
            offsetWidth      : node.offsetWidth,
            rect,
            role             : node.role,
            scrollHeight     : node.scrollHeight,
            scrollLeft       : node.scrollLeft,
            scrollTop        : node.scrollTop,
            scrollWidth      : node.scrollWidth,
            style            : node.style?.cssText,
            tabIndex         : node.getAttribute?.('tabindex') ? node.tabIndex : null,
            tagName          : node.tagName?.toLowerCase()
        }
    }

    /**
     * Returns the first touch event found in touches or changedTouches of a TouchEvent
     * @param {TouchEvent} event
     * @returns {Touch}
     */
    getTouchCoords(event) {
        let {touches, changedTouches} = event;
        return touches?.[0] || changedTouches?.[0]
    }

    /**
     * Only in use if Neo.config.useSharedWorkers = true
     * @param {Object} event
     */
    onBeforeUnload(event) {
        let {Manager} = Neo.worker;

        Manager.appNames.forEach(appName => {
            Manager.broadcast({action: 'disconnect', appName, windowId: Manager.windowId})
        })
    }

    /**
     * @param {InputEvent} event
     */
    onChange(event) {
        let me       = this,
            {target} = event,

            data = {
                ...me.getEventData(event),
                valid: target.checkValidity?.(),
                value: target.value
            };

        // input and change events can pass a FileList for input type file
        if (target.files) {
            data.files = target.files
        }

        me.sendMessageToApp(data)
    }

    /**
     * @param {MouseEvent} event
     */
    onClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        me.testPathInclusion(event, preventClickTargets) && event.preventDefault()
    }

    /**
     * @param {MouseEvent} event
     */
    onContextMenu(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (event.ctrlKey || me.testPathInclusion(event, preventContextmenuTargets)) {
            event.preventDefault()
        }
    }

    /**
     *
     */
    onDomContentLoaded() {
        this.addGlobalDomListeners();
        this.fire('domContentLoaded')
    }

    /**
     * @param {MouseEvent} event
     */
    onDoubleClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        me.testPathInclusion(event, preventClickTargets) && event.preventDefault()
    }

    /**
     * @param {FocusEvent} event
     */
    onFocusIn(event) {
        this.sendMessageToApp(this.getEventData(event))
    }

    /**
     * @param {FocusEvent} event
     */
    onFocusOut(event) {
        this.sendMessageToApp(this.getEventData(event))
    }

    /**
     *
     */
    onHashChange() {
        let {Manager}  = Neo.worker,
            hashString = location.hash.substring(1);

        Manager.sendMessage('app', {
            action: 'hashChange',
            data  : {
                appNames: Manager.appNames,
                hash    : this.parseHash(hashString),
                hashString,
                windowId: Manager.windowId
            }
        })
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyDown(event) {
        let me        = this,
            {target}  = event,
            {tagName} = target,
            isInput   = tagName === 'INPUT' || tagName === 'TEXTAREA';

        if (isInput && disabledInputKeys[target.id]?.includes(event.key)) {
            event.preventDefault()
        } else {
            me.sendMessageToApp(me.getKeyboardEventData(event));

            if (
                isInput &&
                event.key === 'Tab' &&
                me.testPathInclusion(event, ['neo-grid-editor', 'neo-table-editor'], true)
            ) {
                event.preventDefault()
            }

            if (
                !isInput &&
                ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(event.key) &&
                me.testPathInclusion(event, ['neo-selection'], true)
            ) {
                event.preventDefault()
            }
        }
    }

    /**
     * @param {KeyboardEvent} event
     */
    onKeyUp(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event))
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        this.sendMessageToApp(this.getMouseEventData(event))
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseEnter(event) {
        let me       = this,
            appEvent = {...me.getMouseEventData(event), fromElementId: event.fromElement?.id || null, toElementId: event.toElement?.id || null};

        me.sendMessageToApp(appEvent);
        me.fire('mouseEnter', appEvent)
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseLeave(event) {
        let me       = this,
            appEvent = {...me.getMouseEventData(event), fromElementId: event.fromElement?.id || null, toElementId: event.toElement?.id || null};

        me.sendMessageToApp(appEvent);
        me.fire('mouseLeave', appEvent)
    }

    /**
     * @param {MouseEvent} event
     */
    onMouseUp(event) {
        this.sendMessageToApp(this.getMouseEventData(event))
    }

    /**
     * @param {Event} event
     */
    onOrientationChange(event) {
        let {orientation} = screen,
            {angle, type} = orientation,
            layout        = angle === 0 || angle === 180 ? 'portrait' : 'landscape';

        Neo.worker.Manager.sendMessage('app', {
            action: 'orientationChange',
            data  : {angle, layout, type}
        })
    }

    /**
     * @param {Event} event
     */
    onScroll(event) {
        let me = this,
            {firstTouch, lastTouch} = me,
            {clientHeight, clientWidth, scrollLeft, scrollTop} = event.target,
            data;

        event.preventDefault();

        data = {
            ...me.getEventData(event),
            clientHeight,
            clientWidth,
            scrollLeft,
            scrollTop
        };

        if (firstTouch) {
            data.touches = {
                firstTouch: {clientX: firstTouch.clientX, clientY: firstTouch.clientY},
                lastTouch : {clientX: lastTouch .clientX, clientY: lastTouch .clientY}
            }
        }

        me.sendMessageToApp(data)
    }

    /**
     * @param {Event} event
     */
    onSelectionChange(event) {
        let me       = this,
            {target} = event,
            element  = target.type ? target : target.activeElement,
            path, targetData;

        if (target.tagName === 'BODY') {
            return
        }

        path       = me.getSelectionPath([], element);
        targetData = me.getTargetData(element);

        me.sendMessageToApp({
            path,
            selection: {direction: element.selectionDirection, end: element.selectionEnd, start: element.selectionStart},
            target   : targetData,
            timeStamp: event.timeStamp,
            type     : 'selectionchange'
        })
    }

    /**
     * @param {Event} event
     */
    onWheel(event) {
        let target        = this.testPathInclusion(event, globalWheelTargets),
            preventUpdate = false,
            targetCls;

        if (target) {
            targetCls = target.cls;

            if (globalWheelTargetsBuffer[target.cls]) {
                let date = new Date();

                if (lastWheelEvent.date && lastWheelEvent.target === targetCls && date - lastWheelEvent.date < globalWheelTargetsBuffer[targetCls]) {
                    preventUpdate = true
                } else {
                    Object.assign(lastWheelEvent, {
                        date,
                        target: targetCls
                    })
                }
            }

            if (!preventUpdate) {
                let {deltaX, deltaY, deltaZ} = event;

                this.sendMessageToApp({
                    ...this.getEventData(event),
                    clientHeight: target.node.clientHeight,
                    clientWidth : target.node.clientWidth,
                    deltaX,
                    deltaY,
                    deltaZ,
                    scrollLeft  : target.node.scrollLeft,
                    scrollTop   : target.node.scrollTop
                })
            }

            if (!globalWheelTargetsKeepEvent.includes(targetCls)) {
                event.preventDefault()
            }
        }
    }

    /**
     * DOMRects are not spreadable => {...DOMRect} => {}
     * @param {DOMRect} rect
     * @returns {Object}
     */
    parseDomRect(rect) {
        let {bottom, height, left, right, top, width, x, y} = rect;

        return {bottom, height, left, right, top, width, x, y}
    }

    /**
     * Example for Array values: "categories[]=test1&categories[]=test2"
     * @param {String} str
     * @returns {Object}
     */
    parseHash(str) {
        if (str === '') {
            return {}
        }

        let pieces = str.split('&'),
            data   = {},
            i, key, parts, value;

        for (i = 0; i < pieces.length; i++) {
            parts = pieces[i].split('=');

            if (parts.length < 2) {
                parts.push('')
            }

            key   = decodeURIComponent(parts[0]);
            value = decodeURIComponent(parts[1]);

            if (key.indexOf('[]') !== -1) {
                key = key.substring(0, key.indexOf('[]'));

                if (typeof data[key] === 'undefined') {
                    data[key] = [];
                }

                data[key].push(this.parseValue(value))
            } else {
                data[key] = this.parseValue(value)
            }
        }

        return data
    }

    /**
     * used by parseHash to convert tokens into boolean or number types if needed
     * @param {String} value
     * @returns {Boolean|Number|String}
     * @protected
     */
    parseValue(value) {
        if (value == parseInt(value)) {
            value = parseInt(value)
        } else if (value === 'false') {
            value = false
        } else if (value === 'true') {
            value = true
        }

        return value
    }

    /**
     * @param {Object} data
     * @param {String[]} data.chars
     * @param {String} data.id
     */
    registerDisabledInputChars(data) {
        disabledInputKeys[data.id] = data.chars
    }

    /**
     * @param {Object} data
     * @param {Array|String} data.cls
     * @param {String} data.name
     */
    registerPreventDefaultTargets(data) {
        let preventArray;

        if (!Array.isArray(data.cls)) {
            data.cls = [data.cls];
        }

        switch (data.name) {
            case 'click':
                preventArray = preventClickTargets;
                break;
            case 'contextmenu':
                preventArray = preventContextmenuTargets;
                break;
        }

        data.cls.forEach(cls => {
            !preventArray.includes(cls) && preventArray.push(cls)
        })
    }

    /**
     * Sends the parsed event data to the app worker
     * @param {Object} data
     * @protected
     */
    sendMessageToApp(data) {
        Neo.worker.Manager.sendMessage('app', {
            action   : 'domEvent',
            eventName: data.type,
            data
        })
    }

    /**
     * hello <foo>world thorsten! 3 < 4 and 5 > 3
     * @param {String} value
     * @returns {String}
     */
    stripHtml(value) {
        let doc = new DOMParser().parseFromString(value, 'text/html');

        return doc.body.textContent || ''
    }

    /**
     * @param {Object} event
     * @param {Object} targetArray
     * @param {Object} testSubstring=false
     * @returns {Object|Boolean} target cls & node if found, false otherwise
     */
    testPathInclusion(event, targetArray, testSubstring=false) {
        let countTargets = targetArray.length,
            path         = event.path || event.composedPath(),
            i            = 0,
            len          = path.length,
            j, node;

        for (; i < len; i++) {
            node = path[i];

            for (j = 0; j < countTargets; j++) {
                if (
                    testSubstring && node.classList?.value?.includes(targetArray[j]) ||
                    node.classList?.contains(targetArray[j])
                ) {
                    return {cls: targetArray[j], node}
                }
            }
        }

        return false
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     */
    unregisterDisabledInputChars(data) {
        delete disabledInputKeys[data.id]
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(DomEvents));


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/DomUtils.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/DomUtils.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


const focusableTags = {
    BODY    : 1,
    BUTTON  : 1,
    EMBED   : 1,
    IFRAME  : 1,
    INPUT   : 1,
    OBJECT  : 1,
    SELECT  : 1,
    TEXTAREA: 1
};

/**
 * @class Neo.main.DomUtils
 * @extends Neo.core.Base
 * @singleton
 */
class DomUtils extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.main.DomUtils'
         * @protected
         */
        className: 'Neo.main.DomUtils'
    }

    /**
     * Analogous to the `HTMLElement` `closest` method. Searches starting at the passed element for
     * an element for which the passed `filterFn` returns `true`
     * @param {HTMLElement} el The element to start from.
     * @param {Function} filterFn A function which returns `true` when the desired element is reached.
     * @param {HTMLElement} [limit] The element to stop at. This is *not* considered for matching.
     * @returns {HTMLElement}
     */
    static closest(el, filterFn, limit = document.body) {
        while (el?.nodeType === Node.ELEMENT_NODE && el !== limit) {
            if (filterFn(el)) {
                return el
            }

            el = el.parentNode
        }
    }

    static isFocusable(e) {
        // May be used as a scopeless callback, so use "DomUtils", not "this"
        return DomUtils.isTabbable(e) || Number(e.getAttribute('tabIndex')) < 0
    }

    static isTabbable(e) {
        const
            { nodeName } = e,
            style        = getComputedStyle(e),
            tabIndex     = e.getAttribute('tabIndex');

        // Hidden elements are not tabbable.
        // Negative tabIndex also means not tabbable (Though still focusable)
        if (!e.isConnected || !e.offsetParent || style.getPropertyValue('visibility') === 'hidden' || Number(tabIndex) < 0) {
            return false
        }

        return focusableTags[nodeName] ||
            ((nodeName === 'A' || nodeName === 'LINK') && !!e.href) ||
            (tabIndex != null && Number(tabIndex) >= 0) ||
            e.contentEditable === 'true'
    }

    /**
     * Analogous to the `HTMLElement` `querySelector` method. Searches the passed element
     * and all descendants for the first element for which the passed `filterFn` returns `true`.
     * @param {HTMLElement} el The element to start from.
     * @param {Function} filterFn A function which returns `true` when the desired element is reached.
     * @returns {HTMLElement} The first matching element
     */
    static query(el, filterFn) {
        return [el, ...el.querySelectorAll('*')].find(filterFn);
    }

    /**
     * Analogous to the `HTMLElement` `querySelectorAll` method. Searches the passed element
     * and all descendants for all elements for which the passed `filterFn` returns `true`.
     * @param {HTMLElement} el The element to start from.
     * @param {Function} filterFn A function which returns `true` when a desired element is reached.
     * @returns {HTMLElement[]} An array of matching elements
     */
    static queryAll(el, filterFn) {
        return [el, ...el.querySelectorAll('*')].filter(filterFn)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(DomUtils));


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$":
/*!*****************************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/ lazy ^\.\/.*\.mjs$ strict namespace object ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AmCharts.mjs": [
		"./node_modules/neo.mjs/src/main/addon/AmCharts.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_AmCharts_mjs"
	],
	"./AnalyticsByGoogle.mjs": [
		"./node_modules/neo.mjs/src/main/addon/AnalyticsByGoogle.mjs",
		"node_modules_neo_mjs_src_main_addon_AnalyticsByGoogle_mjs"
	],
	"./Base.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Base.mjs",
		"node_modules_neo_mjs_src_main_addon_Base_mjs"
	],
	"./CesiumJS.mjs": [
		"./node_modules/neo.mjs/src/main/addon/CesiumJS.mjs",
		"node_modules_neo_mjs_src_main_addon_CesiumJS_mjs"
	],
	"./CloneNode.mjs": [
		"./node_modules/neo.mjs/src/main/addon/CloneNode.mjs",
		"node_modules_neo_mjs_src_main_addon_CloneNode_mjs"
	],
	"./Cookie.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Cookie.mjs",
		"node_modules_neo_mjs_src_main_addon_Cookie_mjs"
	],
	"./DragDrop.mjs": [
		"./node_modules/neo.mjs/src/main/addon/DragDrop.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_DragDrop_mjs"
	],
	"./FileSystemAccess.mjs": [
		"./node_modules/neo.mjs/src/main/addon/FileSystemAccess.mjs",
		"node_modules_neo_mjs_src_main_addon_FileSystemAccess_mjs"
	],
	"./GoogleMaps.mjs": [
		"./node_modules/neo.mjs/src/main/addon/GoogleMaps.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_GoogleMaps_mjs"
	],
	"./HighlightJS.mjs": [
		"./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs",
		"node_modules_neo_mjs_src_main_addon_HighlightJS_mjs"
	],
	"./IntersectionObserver.mjs": [
		"./node_modules/neo.mjs/src/main/addon/IntersectionObserver.mjs",
		"node_modules_neo_mjs_src_main_addon_IntersectionObserver_mjs"
	],
	"./LocalStorage.mjs": [
		"./node_modules/neo.mjs/src/main/addon/LocalStorage.mjs",
		"node_modules_neo_mjs_src_main_addon_LocalStorage_mjs"
	],
	"./MapboxGL.mjs": [
		"./node_modules/neo.mjs/src/main/addon/MapboxGL.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_MapboxGL_mjs"
	],
	"./Markdown.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Markdown.mjs",
		"node_modules_neo_mjs_src_main_addon_Markdown_mjs"
	],
	"./MonacoEditor.mjs": [
		"./node_modules/neo.mjs/src/main/addon/MonacoEditor.mjs",
		"node_modules_neo_mjs_src_main_addon_MonacoEditor_mjs"
	],
	"./Mwc.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Mwc.mjs",
		"node_modules_neo_mjs_src_main_addon_Mwc_mjs"
	],
	"./Navigator.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Navigator.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_Navigator_mjs"
	],
	"./Popover.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Popover.mjs",
		"node_modules_neo_mjs_src_main_addon_Popover_mjs"
	],
	"./PrefixField.mjs": [
		"./node_modules/neo.mjs/src/main/addon/PrefixField.mjs",
		"node_modules_neo_mjs_src_main_addon_PrefixField_mjs"
	],
	"./ResizeObserver.mjs": [
		"./node_modules/neo.mjs/src/main/addon/ResizeObserver.mjs",
		"node_modules_neo_mjs_src_main_addon_ResizeObserver_mjs"
	],
	"./ScrollSync.mjs": [
		"./node_modules/neo.mjs/src/main/addon/ScrollSync.mjs",
		"node_modules_neo_mjs_src_main_addon_ScrollSync_mjs"
	],
	"./ServiceWorker.mjs": [
		"./node_modules/neo.mjs/src/main/addon/ServiceWorker.mjs",
		"node_modules_neo_mjs_src_main_addon_ServiceWorker_mjs"
	],
	"./Siesta.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Siesta.mjs",
		"node_modules_neo_mjs_src_main_addon_Siesta_mjs"
	],
	"./Stylesheet.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_Stylesheet_mjs"
	],
	"./WebComponent.mjs": [
		"./node_modules/neo.mjs/src/main/addon/WebComponent.mjs",
		"node_modules_neo_mjs_src_main_addon_WebComponent_mjs"
	],
	"./WindowPosition.mjs": [
		"./node_modules/neo.mjs/src/main/addon/WindowPosition.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_WindowPosition_mjs"
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
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Logic to apply the deltas generated by vdom.Helper to the real DOM
 * @class Neo.main.mixin.DeltaUpdates
 * @extends Neo.core.Base
 * @singleton
 */
class DeltaUpdates extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.main.mixin.DeltaUpdates'
         * @protected
         */
        className: 'Neo.main.mixin.DeltaUpdates'
    }

    /**
     * @param {HTMLElement} node
     * @param {String} nodeName
     */
    du_changeNodeName(node, nodeName) {
        let {attributes} = node,
            clone        = document.createElement(nodeName),
            i            = 0,
            len          = attributes.length,
            attribute;

        if (node) {
            for (; i < len; i++) {
                attribute = attributes.item(i);
                clone.setAttribute(attribute.nodeName, attribute.nodeValue)
            }

            clone.innerHTML= node.innerHTML;

            node.parentNode.replaceChild(clone, node)
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.id
     */
    du_focusNode(delta) {
        this.getElement(delta.id)?.focus()
    }

    /**
     * node.children contains the "real" nodes (tags)
     * node.childNodes contains texts & comments as nodes too
     * since every vtype:'text' is wrapped inside a comment block (as an id),
     * we need the amount of nodes which are not comments to get the "realIndex".
     * insertAdjacentHTML() is faster than creating a node (template), but only available
     * for children and not for childNodes.
     * In case there are no comments (=> vtype: 'text' nodes), we stick to it for performance reasons.
     *
     * @param {Object} delta
     * @param {String} delta.index
     * @param {String} delta.outerHTML
     * @param {String} delta.parentId
     */
    du_insertNode(delta) {
        let {index}       = delta,
            parentNode    = this.getElementOrBody(delta.parentId),
            countChildren = parentNode?.childNodes.length,
            i             = 0,
            realIndex     = index,
            hasComments   = false,
            node;

        if (parentNode) {
            // console.log('insertNode', index, countChildren, delta.parentId);

            if (countChildren <= 20 && parentNode.nodeName !== 'TBODY') {
                for (; i < countChildren; i++) {
                    if (parentNode.childNodes[i].nodeType === 8) { // ignore comments
                        if (i < realIndex) {
                            realIndex++
                        }

                        hasComments = true
                    }
                }
            }

            if (!hasComments) {
                countChildren = parentNode.children.length;

                if (index > 0 && index >= countChildren) {
                    parentNode.insertAdjacentHTML('beforeend', delta.outerHTML);
                    return
                }

                if (countChildren > 0 && countChildren > index) {
                    parentNode.children[index].insertAdjacentHTML('beforebegin', delta.outerHTML)
                } else if (countChildren > 0) {
                    parentNode.children[countChildren - 1].insertAdjacentHTML('afterend', delta.outerHTML)
                } else {
                    parentNode.insertAdjacentHTML('beforeend', delta.outerHTML)
                }
            } else {
                node = this.htmlStringToElement(delta.outerHTML);

                if (countChildren > 0 && countChildren > realIndex) {
                    parentNode.insertBefore(node, parentNode.childNodes[realIndex])
                } else {
                    parentNode.appendChild(node)
                }
            }
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.index
     * @param {String} delta.parentId
     */
    du_moveNode({id, index, parentId}) {
        let node       = this.getElement(id),
            parentNode = this.getElement(parentId),
            currentNode;

        if (node && parentNode) {
            if (index >= parentNode.children.length) {
                parentNode.appendChild(node)
            } else {
                currentNode = parentNode.children[index];

                if (node && currentNode.id !== id) {
                    // Check for a direct swap OP
                    if (node === currentNode.nextElementSibling) {
                        node.replaceWith(currentNode)
                    }

                    parentNode.insertBefore(node, currentNode)
                }
            }
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.parentId
     */
    du_removeAll(delta) {
        let node = this.getElement(delta.parentId);

        if (node) {
            node.innerHTML = ''
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.parentId
     */
    du_removeNode(delta) {
        let node = this.getElement(delta.id),
            reg, startTag;

        if (!node) { // could be a vtype: text
            node = delta.parentId && this.getElementOrBody(delta.parentId);

            if (node) {
                startTag = `<!-- ${delta.id} -->`;
                reg      = new RegExp(startTag + '[\\s\\S]*?<!-- \/neo-vtext -->');

                node.innerHTML = node.innerHTML.replace(reg, '')
            }
        } else {
            node.remove()
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.fromId
     * @param {String} delta.parentId
     * @param {String} delta.toId
     */
    du_replaceChild(delta) {
        let me   = this,
            node = me.getElement(delta.parentId);

        node?.replaceChild(me.getElement(delta.toId), me.getElement(delta.fromId))
    }

    /**
     * @param {Object} delta
     * @param {String} [delta.id]
     * @param {String} [delta.value
     */
    du_setTextContent(delta) {
        let me   = this,
            node = me.getElement(delta.id);

        if (node) {
            node.textContent = delta.value
        }
    }

    /**
     * @param {Object} delta
     * @param {Object} [delta.attributes]
     * @param {String} [delta.cls]
     * @param {String} [delta.id]
     * @param {String} [delta.innerHTML]
     * @param {String} [delta.outerHTML]
     * @param {Object} [delta.style]
     */
    du_updateNode(delta) {
        let me   = this,
            node = me.getElementOrBody(delta.id);

        if (node) {
            Object.entries(delta).forEach(([prop, value]) => {
                switch(prop) {
                    case 'attributes':
                        Object.entries(value).forEach(([key, val]) => {
                            if (me.voidAttributes.includes(key)) {
                                node[key] = val === 'true' // vnode attribute values get converted into strings
                            } else if (val === null || val === '') {
                                if (key === 'value') {
                                    node[key] = '' // input fields => pseudo attribute can not be removed
                                } else {
                                    node.removeAttribute(key)
                                }
                            } else if (key === 'id') {
                                node[Neo.config.useDomIds ? 'id' : 'data-neo-id'] = val
                            } else if (key === 'spellcheck' && val === 'false') {
                                // see https://github.com/neomjs/neo/issues/1922
                                node[key] = false
                            } else {
                                if (key === 'value') {
                                    node[key] = val
                                } else {
                                    node.setAttribute(key, val)
                                }
                            }
                        });
                        break
                    case 'cls':
                        value.add    && node.classList.add(...value.add);
                        value.remove && node.classList.remove(...value.remove);
                        break
                    case 'innerHTML':
                        node.innerHTML = value || '';
                        break
                    case 'nodeName':
                        me.du_changeNodeName(node, value);
                        break
                    case 'outerHTML':
                        node.outerHTML = value || '';
                        break
                    case 'style':
                        if (Neo.isObject(value)) {
                            Object.entries(value).forEach(([key, val]) => {
                                let important;

                                if (Neo.isString(val) && val.includes('!important')) {
                                    val = val.replace('!important', '').trim();
                                    important = 'important'
                                }

                                node.style.setProperty(Neo.decamel(key), val, important)
                            })
                        }
                        break
                }
            })
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.parentId
     * @param {String} delta.value
     */
    du_updateVtext(delta) {
        let me        = this,
            node      = me.getElement(delta.parentId),
            innerHTML = node.innerHTML,
            startTag  = `<!-- ${delta.id} -->`,
            reg       = new RegExp(startTag + '[\\s\\S]*?<!-- \/neo-vtext -->');

        node.innerHTML = innerHTML.replace(reg, delta.value)
    }

    /**
     * @param {String} html representing a single element
     * @returns {ChildNode}
     */
    htmlStringToElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content
    }

    /**
     * @param {Object} data
     * @param {Object|Object[]} data.deltas
     * @param {String} data.id
     * @param {String} [data.origin='app']
     */
    update(data) {
        let me       = this,
            {deltas} = data,
            i        = 0,
            len, map;

        deltas = Array.isArray(deltas) ? deltas : [deltas];
        len    = deltas.length;

        if (Neo.config.logDeltaUpdates && len > 0) {
            me.countDeltas += len;
            me.countUpdates++;
            console.log('update ' + me.countUpdates, 'total deltas ', me.countDeltas, Neo.clone(data, true))
        }

        if (Neo.config.renderCountDeltas && len > 0) {
            me.countDeltasPer250ms += len
        }

        map = {
            focusNode     : me.du_focusNode,
            insertNode    : me.du_insertNode,
            moveNode      : me.du_moveNode,
            removeAll     : me.du_removeAll,
            removeNode    : me.du_removeNode,
            replaceChild  : me.du_replaceChild,
            setTextContent: me.du_setTextContent,
            updateVtext   : me.du_updateVtext,
            default       : me.du_updateNode
        };

        for (; i < len; i++) {
            (map[deltas[i].action] || map['default']).call(me, deltas[i])
        }

        Neo.worker.Manager.sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(DeltaUpdates));


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Will get imported in case Neo.config.hasTouchEvents === true
 * @class Neo.main.mixin.TouchDomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class TouchDomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.main.mixin.TouchDomEvents'
         * @protected
         */
        className: 'Neo.main.mixin.TouchDomEvents'
    }

    /**
     * @param {Object} event
     */
    onTouchCancel(event) {
        let me = this;

        me.sendMessageToApp(me.getEventData(event));
        me.firstTouch = null;
        me.lastTouch  = null
    }

    /**
     * @param {Object} event
     */
    onTouchEnd(event) {
        let me = this;

        me.sendMessageToApp(me.getEventData(event));
        me.firstTouch = null;
        me.lastTouch  = null
    }

    /**
     * @param {Object} event
     */
    onTouchEnter(event) {
        this.sendMessageToApp(this.getEventData(event))
    }

    /**
     * @param {Object} event
     */
    onTouchLeave(event) {
        this.sendMessageToApp(this.getEventData(event))
    }

    /**
     * @param {Object} event
     */
    onTouchMove(event) {
        let me          = this,
            data        = me.getEventData(event),
            touch       = event.touches[0],
            {lastTouch} = me;

        if (lastTouch) {
            Object.assign(data, {
                deltaX: touch.clientX - lastTouch.clientX,
                deltaY: touch.clientY - lastTouch.clientY
            })
        }

        me.sendMessageToApp(data);

        me.lastTouch = touch;

        if (me.testPathInclusion(event, ['neo-helix'])) {
            event.preventDefault()
        }
    }

    /**
     * @param {Object} event
     */
    onTouchStart(event) {
        let me = this;

        me.firstTouch = event.touches[0];
        me.lastTouch  = event.touches[0];

        me.sendMessageToApp(me.getEventData(event))
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(TouchDomEvents));


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

/***/ "./node_modules/neo.mjs/src/util/Rectangle.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Rectangle.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rectangle)
/* harmony export */ });
/**
 * The class contains utility methods for working with DOMRect Objects
 * @class Neo.util.Rectangle
 * @extends DOMRect
 */

const
    emptyArray = Object.freeze([]),
    // Convert edge array values into the [T,R,B,L] form.
    parseEdgeValue = (e = 0) => {
        if (!Array.isArray(e)) {
            e = [e];
        }
        switch (e.length) {
            case 1:
                e.length = 4;
                return e.fill(e[0], 1, 4);
            case 2:// top&bottom, left&right
                return [e[0], e[1], e[0], e[1]];
            case 3:// top, left&right, bottom
                return [e[0], e[1], e[2], e[1]];
        }
        return e;
    },
    parseEdgeAlign = edgeAlign => {
        const
            edgeParts     = edgeAlignRE.exec(edgeAlign),
            ourEdgeZone   = edgeZone[edgeParts[1]],
            theirEdgeZone = edgeZone[edgeParts[4]];

        return {
            ourEdge         : edgeParts[1],
            ourEdgeOffset   : parseInt(edgeParts[2] || 50),
            ourEdgeUnit     : edgeParts[3] || '%',
            ourEdgeZone,
            theirEdge       : edgeParts[4],
            theirEdgeOffset : parseInt(edgeParts[5] || 50),
            theirEdgeUnit   : edgeParts[6] || '%',
            theirEdgeZone,

            // Aligned to an edge, *outside* of the target.
            // A normal align as a combo dropdown might request
            edgeAligned     : (ourEdgeZone & 1) === (theirEdgeZone & 1) && ourEdgeZone !== theirEdgeZone
        }
    },
    // The opposite of parseEdgeAlign, and it has to flip the edges
    createReversedEdgeAlign = edges => {
        const
            ourEdge   = oppositeEdge[edges.ourEdge],
            theirEdge = oppositeEdge[edges.theirEdge];

        // reconstitute a rule string with the edges flipped to the opposite sides
        return `${ourEdge}${edges.ourEdgeOffset}${edges.ourEdgeUnit}-${theirEdge}${edges.theirEdgeOffset}${edges.theirEdgeUnit}`

    },
    getElRect = el => {
        const r = el instanceof DOMRect ? el : (el?.nodeType === 1 ? el : typeof el === 'string' ? document.getElementById(el) : null)?.getBoundingClientRect();

        // Convert DOMRect into Rectangle
        return r && new Rectangle(r.x, r.y, r.width, r.height);
    },
    oppositeEdge = {
        t : 'b',
        r : 'l',
        b : 't',
        l : 'r'
    },
    edgeZone = {
        t : 0,
        r : 1,
        b : 2,
        l : 3
    },
    zoneNames = ['top', 'right', 'bottom', 'left'],
    zoneEdges = ['t', 'r', 'b', 'l'],
    zoneDimension = ['width', 'height'],
    zoneCoord = [0, 1, 0, 1],
    zeroMargins = [0, 0, 0, 0],
    edgeAlignRE = /^([trblc])(\d*)(%|px)?-([trblc])(\d*)(%|px)?$/;

class Rectangle extends DOMRect {
    static config = {
        /**
         * @member {String} className='Neo.util.Rectangle'
         * @protected
         */
        className: 'Neo.util.Rectangle'
    }

    /**
     * @member {Number|null} minHeight=null
     */
    minHeight = null
    /**
     * @member {Number|null} minWidth=null
     */
    minWidth = null

    /**
     * Checks if rect1 does not have an intersection with rect2
     * !includes() is true for intersections as well
     * @param {Object} rect1
     * @param {Object} rect2
     * @returns {Boolean}
     */
    static excludes(rect1, rect2) {
        return rect1.bottom < rect2.top     // rect2 is below rect1
            || rect1.left   > rect2.right   // rect2 is left of rect1
            || rect1.right  < rect2.left    // rect2 is right of rect1
            || rect1.top    > rect2.bottom; // rect2 is above rect1
    }

    /**
     * Returns the overlapping area of rect1 & rect2 as a new Rectangle
     * @param {DOMRect|Neo.util.Rectangle} rect1
     * @param {DOMRect|Neo.util.Rectangle} rect2
     * @returns {Neo.util.Rectangle|null} The intersecting rect
     */
    static getIntersection(rect1, rect2) {
        let x      = Math.max(rect1.x,      rect2.x),
            y      = Math.max(rect1.y,      rect2.y),
            right  = Math.min(rect1.right,  rect2.right),
            bottom = Math.min(rect1.bottom, rect2.bottom),
            width  = Math.max(0, right  - x),
            height = Math.max(0, bottom - y);

        if (height < 1 || width < 1) {
            return null
        }

        return new Rectangle(x, y, width, height)
    }

    /**
     * Checks if rect2 is fully contained inside rect1
     * @param {Object} rect1
     * @param {Object} rect2
     * @returns {Boolean}
     */
    static includes(rect1, rect2) {
        return rect1.bottom >= rect2.bottom
            && rect1.left   <= rect2.left
            && rect1.right  >= rect2.right
            && rect1.top    <= rect2.top;
    }

    /**
     * Checks if rect2 is not contained inside rect1.
     * This could be an intersection or being fully excluded.
     * @param {Object} rect1
     * @param {Object} rect2
     * @param {String} side bottom, left, right or top
     * @returns {Boolean}
     */
    static leavesSide(rect1, rect2, side) {
        if (Rectangle.includes(rect1, rect2)) {
            return false;
        }

        if (side === 'bottom') {
            return rect1.bottom < rect2.bottom;
        }

        if (side === 'left') {
            return rect1.left > rect2.left;
        }

        if (side === 'right') {
            return rect1.right < rect2.right;
        }

        if (side === 'top') {
            return rect1.top > rect2.top;
        }
    }

    /**
     * Adjusts a DOMRect object to a new position
     * @param {Object} rect
     * @param {Number|null} [x=null]
     * @param {Number|null} [y=null]
     * @returns {Object} movedRect
     */
    static moveBy(rect, x=null, y=null) {
        let movedRect = {...rect};

        if (Neo.isNumber(x)) {
            movedRect.left  += x;
            movedRect.right += x;
            movedRect.x     += x;
        }

        if (Neo.isNumber(y)) {
            movedRect.bottom += y;
            movedRect.top    += y;
            movedRect.y      += y;
        }

        return movedRect;
    }

    /**
     * Adjusts a DOMRect object to a new position
     * @param {Object} rect
     * @param {Number|null} [x=null]
     * @param {Number|null} [y=null]
     * @returns {Object} movedRect
     */
    static moveTo(rect, x=null, y=null) {
        let movedRect = {...rect};

        if (Neo.isNumber(x)) {
            movedRect.left  = x;
            movedRect.right = x + movedRect.width;
            movedRect.x     = x;
        }

        if (Neo.isNumber(y)) {
            movedRect.bottom = y + movedRect.height;
            movedRect.top    = y;
            movedRect.y      = y;
        }

        return movedRect;
    }

    set bottom(b) {
        this.height += b - this.bottom;
    }
    get bottom() {
        return super.bottom;
    }

    set right(r) {
        this.width += r - this.right;
    }
    get right() {
        return super.right;
    }

    // Change the x without moving the Rectangle. The left side moves and the right side doesn't
    changeX(x) {
        const widthDelta = this.x - x;

        this.x = x;
        this.width += widthDelta;
    }

    // Change the y without moving the Rectangle. The top side moves and the bottom side doesn't
    changeY(y) {
        const heightDelta = this.y - y;

        this.y = y;
        this.height += heightDelta;
    }

    clone() {
        return Rectangle.clone(this);
    }

    static clone(r) {
        const result = new Rectangle(r.x, r.y, r.width, r.height);

        result.minWidth = r.minWidth;
        result.minHeight = r.minHeight;

        return result;
    }

    intersects(other) {
        const me = this;

        if (other.height && other.width) {
            const
                left   = Math.max(me.x, other.x),
                top    = Math.max(me.y, other.y),
                right  = Math.min(me.x + me.width, other.x + other.width),
                bottom = Math.min(me.y + me.height, other.y + other.height);

            if (left >= right || top >= bottom) {
                return false;
            }

            return new Rectangle(left, top, right - left, bottom - top);
        }
        // We're dealing with a point here - zero dimensions
        else {
            return (other.x >= me.x && other.y >= me.y && other.right <= me.right && other.bottom <= me.bottom);
        }
    }

    /**
     * Checks if the other Rectangle is fully contained inside this Rectangle
     * @param {Object} other
     * @returns {Boolean}
     */
    contains(other) {
        return this.bottom >= other.bottom
            && this.left   <= other.left
            && this.right  >= other.right
            && this.top    <= other.top;
    }

    /**
     * Returns a clone of this Rectangle expanded according to the edges array.
     * @param {Number[]} edges
     * @returns {Rectangle}
     */
    expand(edges) {
        edges = parseEdgeValue(edges);

        return new this.constructor(this.x - edges[3], this.y - edges[0], this.width + edges[1] + edges[3], this.height + edges[0] + edges[2]);
    }

    moveBy(x = 0, y = 0) {
        const result = this.clone();

        if (Array.isArray(x)) {
            y = x[1];
            x = x[0];
        }
        result.x += x;
        result.y += y;
        return result;
    }

    /**
     * Returns `true` if this Rectangle completely contains the other Rectangle
     * @param {Rectangle} other
     */
    contains(other) {
        return this.constructor.includes(this, other);
    }

    /**
     * Returns a copy of this Rectangle constrained to fit within the passed Rectangle
     * @param {Rectangle} constrainTo
     * @returns {Rectangle|Boolean} A new Rectangle constrained to te passed Rectangle, or false if it could not be constrained.
     */
    constrainTo(constrainTo) {
        const
            me        = this,
            minWidth  = me.minWidth  || me.width,
            minHeight = me.minHeight || me.height;

        // Not possible, even when shrunk to minima
        if (minHeight > constrainTo.height || minWidth > constrainTo.width) {
            return false;
        }

        // We do not mutate this Rectangle, but return a constrained version
        const result = me.clone();

        // Translate result so that the top and left are visible
        result.x = Math.max(me.x + Math.min(constrainTo.right  - result.right,  0), constrainTo.x);
        result.y = Math.max(me.y + Math.min(constrainTo.bottom - result.bottom, 0), constrainTo.y);

        // Pull in any resulting overflow
        result.bottom = Math.min(result.bottom, constrainTo.bottom);
        result.right = Math.min(result.right, constrainTo.right);

        return result;
    }

    alignTo(align) {
        const
            me             = this,
            {
                constrainTo,    // Element or Rectangle result must fit into
                target,         // Element or Rectangle to align to
                edgeAlign,      // t50-b50 type string
                axisLock,       // true for flip, 'flexible' for flip, then try the other edges
                offset,         // Final [x, y] vector to move the result by.
                matchSize
            }              = align,
            targetMargin   = align.targetMargin ? parseEdgeValue(align.targetMargin) : zeroMargins,
            targetRect     = getElRect(target),
            constrainRect  = getElRect(constrainTo),
            edges          = parseEdgeAlign(edgeAlign),
            matchDimension = zoneDimension[edges.theirEdgeZone & 1];

        let result = me.clone();

        if (matchSize) {
            result[matchDimension] = targetRect[matchDimension];
        }

        // Must do the calculations after the aligned side has been matched in size if requested.
        const
            myPoint     = result.getAnchorPoint(edges.ourEdgeZone, edges.ourEdgeOffset, edges.ourEdgeUnit),
            targetPoint = targetRect.getAnchorPoint(edges.theirEdgeZone, edges.theirEdgeOffset, edges.theirEdgeUnit, targetMargin),
            vector      = [targetPoint[0] - myPoint[0], targetPoint[1] - myPoint[1]];

        result = result.moveBy(vector);

        // A useful property in the resulting rectangle which specifies which zone of the target
        // It is being places in, T,R,B or L - 0, 1, 2, 3
        // Some code may want to treat DOM elements differently depending on the zone
        result.zone = edges.theirEdgeZone;
        result.position = zoneNames[result.zone];

        // Now we create the four Rectangles around the target, into which we may be constrained
        // Zones T,R,B,L 0 9, 1, 2, 3:
        // +-----------------------------------------------------------------------------------+
        // | +-------------------------+------------------------+----------------------------+ |
        // | |          ^              |                        |             ^              | |
        // | |          |              |                        |             |              | |
        // | |  <-------+--------------+---------Zone 0---------+-------------+---------->   | |
        // | |          |              |                        |             |              | |
        // | |          |              |                        |             |              | |
        // | +----------+--------------+------------------------+-------------+--------------+ |
        // | |          |              | +--------------------+ |             |              | |
        // | |          |              | |                    | |             |              | |
        // | |          |              | |                    | |             |              | |
        // | |       Zone 3            | |                    | |          Zone 1            | |
        // | |          |              | |                    | |             |              | |
        // | |          |              | |                    | |             |              | |
        // | |          |              | +--------------------+ |             |              | |
        // | ++---------+--------------+------------------------+-------------+--------------+ |
        // | |          |              |                        |             |              | |
        // | |          |              |                        |             |              | |
        // | |          |              |                        |             |              | |
        // | |  <-------+--------------+--------Zone 2----------+-------------+------------> | |
        // | |          |              |                        |             |              | |
        // | |          v              |                        |             v              | |
        // | ++------------------------+------------------------+----------------------------+ |
        // +-----------------------------------------------------------------------------------+
        if (constrainRect && !constrainRect.contains(result)) {
            // They asked to overlap the target, for example t0-t0
            // In these cases, we just return the result
            if (targetRect.intersects(result)) {
                return result;
            }

            // This is the zone we try to fit into first, the one that was asked for
            let zone = edges.theirEdgeZone;

            // We create an array of four rectangles into which we try to fit with appropriate align specs.
            // We must start with the requested zone, whatever that is.
            const zonesToTry = [{
                zone,
                edgeAlign
            }];

            if (axisLock) {
                // Flip to the opposite side for the second try.
                // The alignment string has to be reversed
                // so r20-l30 has to become l20-r30.
                // The other two zones revert to centered so are easier
                zonesToTry[1] = {
                    zone      : zone = (zone + 2) % 4,
                    edgeAlign : createReversedEdgeAlign(edges)
                }

                // Fall back to the other two zones.
                zonesToTry.push({
                    zone      : zone = (edges.theirEdgeZone + 1) % 4,
                    edgeAlign : `${oppositeEdge[zoneEdges[zone]]}-${zoneEdges[zone]}`
                });
                zonesToTry.push({
                    zone      : zone = (edges.theirEdgeZone + 3) % 4,
                    edgeAlign : `${oppositeEdge[zoneEdges[zone]]}-${zoneEdges[zone]}`
                });
            }
            else {
                // go through the other zones in order
                for (let i = 1; i < 4; i++) {
                    zonesToTry.push({
                        zone      : zone = (zone + 1) % 4,
                        edgeAlign : `${oppositeEdge[zoneEdges[zone]]}-${zoneEdges[zone]}`
                    });
                }
            }

            // Calculate the constraint Rectangle for each zone
            for (let i = 0; i < zonesToTry.length; i++) {
                // We clone the outer constraining rectangle
                // and move it into position
                const c = constrainRect.clone();

                switch (zonesToTry[i].zone) {
                    case 0:
                        // The zone i2 above the target - zone 0/T
                        c.bottom = targetRect.y - targetMargin[0];
                        break;
                    case 1:
                        // The zone is to the right of the target - zone 1/R
                        c.changeX(targetRect.right + targetMargin[1]);
                        break;
                    case 2:
                        // The zone is below the target - zone 2/B
                        c.changeY(targetRect.bottom + targetMargin[2]);
                        break;
                    case 3:
                        // The zone is to the left of the target - zone 3/L
                        c.right = targetRect.x - targetMargin[3];
                        break;
                }
                zonesToTry[i].constrainRect = c;
            }

            // Now try to constrain our result into each zone's constraintZone
            for (let i = 0; i < zonesToTry.length; i++) {
                const
                    {
                        zone,
                        edgeAlign,
                        constrainRect
                    }    = zonesToTry[i],
                    edge = zoneEdges[zone];

                if (matchSize) {
                    // If we are aligning to the requested edge, or it's opposite edge then
                    // match that edge size, else revert it to our own size
                    result[matchDimension] = edge === edges.theirEdge || edge == oppositeEdge[edges.theirEdge] ? targetRect[matchDimension] : me[matchDimension];
                }

                // Do a simple align to the current edge
                result = result.alignTo({
                    target : targetRect,
                    edgeAlign,
                    targetMargin
                });

                let solution = result.constrainTo(constrainRect);

                // As soon as we find a zone into which the result is willing to be constrained. return it
                if (solution) {
                    solution.zone = zone;
                    solution.position = zoneNames[zone];
                    return solution;
                }
            }
        }

        // Add the configurable finishing touch.
        if (offset) {
            result.moveBy(offset);
        }

        return result;
    }

    getAnchorPoint(edgeZone, edgeOffset, edgeUnit, margin = emptyArray) {
        const me = this;

        let result;

        // Edge zones go top, right, bottom, left
        // Each one calculates the start point of that edge then moves along it by
        // the edgeOffset, then moves *away* from it by the margin for that edge if there's a margin.
        switch (edgeZone) {
            case 0:
                result = [me.x, me.y - (margin[0] || 0), me.width, 0];
                break;
            case 1:
                result = [me.x + me.width + (margin[1] || 0), me.y, me.height, 1];
                break;
            case 2:
                result = [me.x, me.y + me.height + (margin[2] || 0), me.width, 0];
                break;
            case 3:
                result = [me.x - (margin[3] || 0), me.y, me.height, 1];
        }
        result[result[3]] += edgeUnit === '%' ? result[2] / 100 * edgeOffset : edgeOffset;
        result.length = 2;
        return result;
    }

    equals(other) {
        return other instanceof DOMRect &&
            other.x === this.x &&
            other.y === this.y &&
            other.height === this.height &&
            other.width === this.width;
    }

    // For debugging purposes only
    show(color = 'red') {
        const div = document.createElement('div');

        div.style = `
            position:absolute;
            transform:translate3d(${this.x}px, ${this.y}px, 0);
            height:${this.height}px;
            width:${this.width}px;
            background-color:${color}
        `;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 30000);
        return div;
    }

    /**
     * When using JSON.stringify(this), we want to add minHeight & minWidth to the output.
     * @returns {Object}
     */
    toJSON() {
        const {bottom, height, left, minHeight, minWidth, right, top, width, x, y} = this;
        return {bottom, height, left, minHeight, minWidth, right, top, width, x, y}
    }
}


/***/ }),

/***/ "./node_modules/neo.mjs/src/util/String.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/String.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.String
 * @extends Neo.core.Base
 */
class StringUtil extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @member {Object} charEntityMap
     * @static
     */
    static charEntityMap = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        '\'': '&apos;',
        '$' : '&dollar;',
        '\\': '&bsol;',
        '/' : '&sol;'
    }
    /**
     * @member {RegExp} charPattern
     * @static
     */
    static charPattern = /[&<>"'$\\]/g
    /**
     * @member {RegExp} entityPattern
     * @static
     */
    static entityPattern = /(&amp;)|(&lt;)|(&gt;)|(&quot;)|(&apos;)|(&dollar;)|(&bsol;)|(&sol;)/g

    static config = {
        /**
         * @member {String} className='Neo.util.String'
         * @protected
         */
        className: 'Neo.util.String'
    }

    /**
     * Escape HTML special characters
     * @param {String} value
     */
    static escapeHtml(value) {
        let me = this; // inside a static method, we are pointing to the class prototype

        if (!Neo.isString(value)) {
            return value
        }

        return value.replace(me.charPattern, me.getEntityFromChar.bind(me))
    }

    /**
     * Get char equivalent of a mapped entity
     * @param {String} entity
     */
    static getCharFromEntity(entity) {
        let mappedChar = Object.keys(this.charEntityMap).find(key => this.charEntityMap[key] === entity);
        return mappedChar || entity
    }

    /**
     * Get entity equivalent of a mapped char
     * @param {String} char
     */
    static getEntityFromChar(char) {
        return this.charEntityMap[char] || char
    }

    /**
     * Unescape HTML special characters
     * @param {String} value
     */
    static unescapeHtml(value) {
        let me = this; // inside a static method, we are pointing to the class prototype

        if (!Neo.isString(value)) {
            return value
        }

        return value.replace(me.entityPattern, me.getCharFromEntity.bind(me))
    }

    /**
     * Returns the passed string with the first letter uncapitalized.
     * @param {String} value
     * @returns  {String}
     */
    static uncapitalize(value) {
        return value && value[0].toLowerCase() + value.substring(1)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(StringUtil));


/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Manager.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Manager.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixin/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs");







const NeoConfig    = Neo.config,
      hasJsModules = NeoConfig.environment === 'development' || NeoConfig.environment === 'dist/esm';

// Using ?. since SWs do not exist for http (only https)
navigator.serviceWorker?.addEventListener('controllerchange', function() {
    window.location.reload()
}, {once: true});

/**
 * The worker manager lives inside the main thread and creates the App, Data & VDom worker.
 * Also, responsible for sending messages from the main thread to the different workers.
 * @class Neo.worker.Manager
 * @extends Neo.core.Base
 * @singleton
 */
class Manager extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Neo.worker.Manager'
         * @protected
         */
        className: 'Neo.worker.Manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} activeWorkers=0
         * @protected
         */
        activeWorkers: 0,
        /**
         * @member {String[]} appNames=[]
         * @protected
         */
        appNames: [],
        /**
         * @member {Number} constructedThreads=0
         * @protected
         */
        constructedThreads: 0,
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]],
        /**
         * True in case the current browser supports window.SharedWorker.
         * @member {Boolean} sharedWorkersEnabled=false
         * @protected
         */
        sharedWorkersEnabled: false,
        /**
         * Internal flag to stop the worker communication in case their creation fails
         * @member {Boolean} stopCommunication=false
         * @protected
         */
        stopCommunication: false,
        /**
         * True in case the current browser supports window.Worker.
         * The neo.mjs framework is not able to run without web workers.
         * @member {Boolean} sharedWorkersEnabled=false
         * @protected
         */
        webWorkersEnabled: false,
        /**
         * Using the current timestamp as an unique window identifier
         * @member {Number} windowId=new Date().getTime()
         * @protected
         */
        windowId: new Date().getTime(),
        /**
         * Contains the fileNames for the App, Data & Vdom workers
         * @member {Object} workers
         * @protected
         */
        workers: {
            app: {
                fileName: hasJsModules ? 'App.mjs'    : 'appworker.js'
            },
            canvas: {
                fileName: hasJsModules ? 'Canvas.mjs' : 'canvasworker.js'
            },
            data: {
                fileName: hasJsModules ? 'Data.mjs'   : 'dataworker.js'
            },
            task: {
                fileName: hasJsModules ? 'Task.mjs'   : 'taskworker.js'
            },
            vdom: {
                fileName: hasJsModules ? 'VDom.mjs'   : 'vdomworker.js'
            }
        }
    }

    /**
     * navigator.serviceWorker.controller can be null in case we load a page for the first time
     * or in case of a force refresh.
     * See: https://www.w3.org/TR/service-workers/#navigator-service-worker-controller
     * Only in this case main.addon.ServiceWorker will store the active registration once ready here.
     * @member {ServiceWorker|null} serviceWorker=null
     */
    serviceWorker = null

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.detectFeatures();

        !Neo.insideWorker && me.createWorkers();

        Neo.workerId = 'main';

        me.promises = {};

        me.on({
            'message:addDomListener'    : {fn: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].addDomListener,       scope: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]},
            'message:getOffscreenCanvas': {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onGetOffscreenCanvas, scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:readDom'           : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onReadDom,            scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:registerRemote'    : {fn: me.onRegisterRemote,            scope: me},
            'message:workerConstructed' : {fn: me.onWorkerConstructed,         scope: me}
        })
    }

    /**
     * Sends a message to each worker defined inside the this.workers config.
     * @param {Object} msg
     */
    broadcast(msg) {
        Object.keys(this.workers).forEach(name => {
            if (!(
                name === 'canvas' && !NeoConfig.useCanvasWorker ||
                name === 'task'   && !NeoConfig.useTaskWorker   ||
                name === 'vdom'   && !NeoConfig.useVdomWorker
            )) {
                this.sendMessage(name, msg)
            }
        });
    }

    /**
     * Creates a web worker using the passed options as well as adding error & message event listeners.
     * @param {Object} opts
     * @returns {SharedWorker|Worker}
     */
    createWorker(opts) {
        let me         = this,
            {fileName} = opts,
            filePath   = (opts.basePath || Neo.config.workerBasePath) + fileName,
            name       = `neomjs-${fileName.substring(0, fileName.indexOf('.')).toLowerCase()}-worker`,
            isShared   = me.sharedWorkersEnabled && NeoConfig.useSharedWorkers,
            cls        = isShared ? SharedWorker : Worker,
            worker     = hasJsModules
                ? new cls(filePath, {name, type: 'module'})
                : new cls(filePath, {name});

        (isShared ? worker.port : worker).onmessage = me.onWorkerMessage.bind(me);
        (isShared ? worker.port : worker).onerror   = me.onWorkerError  .bind(me);

        me.activeWorkers++;

        return worker
    }

    /**
     * Calls createWorker for each worker inside the this.workers config.
     */
    createWorkers() {
        let me                   = this,
            config               = Neo.clone(NeoConfig, true),
            {hash, href, search} = location,
            {windowId}           = me,
            key, value;

        // remove configs which are not relevant for the workers scope
        delete config.cesiumJsToken;

        // pass the initial hash value as Neo.configs
        if (hash) {
            config.hash = {
                hash      : _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parseHash(hash.substring(1)),
                hashString: hash.substring(1),
                windowId
            }
        }

        config.url = {href, search};

        for ([key, value] of Object.entries(me.workers)) {
            if (key === 'canvas' && !config.useCanvasWorker ||
                key === 'task'   && !config.useTaskWorker   ||
                key === 'vdom'   && !config.useVdomWorker
            ) {
                continue
            }

            try {
                value.worker = me.createWorker(value)
            } catch (e) {
                document.body.innerHTML = e;
                me.stopCommunication = true;
                break
            }

            me.sendMessage(key, {
                action: 'registerNeoConfig',
                data  : {...config, windowId}
            })
        }
    }

    /**
     *
     */
    detectFeatures() {
        let me = this;

        NeoConfig.hasMouseEvents = matchMedia('(pointer:fine)').matches;
        NeoConfig.hasTouchEvents = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        // Useful for styling
        document.body.classList.add(NeoConfig.hasMouseEvents ? 'neo-mouse' : 'neo-no-mouse');

        if (window.Worker) {
            me.webWorkersEnabled = true
        } else {
            throw new Error('Your browser does not support Web Workers')
        }

        if (window.SharedWorker) {
            me.sharedWorkersEnabled = true
        }
    }

    /**
     * @param {String|Worker} name
     * @returns {Worker}
     */
    getWorker(name) {
        if (name === 'service') {
            return navigator.serviceWorker?.controller || this.serviceWorker
        }

        return name instanceof Worker ? name : this.workers[name].worker
    }

    /**
     * @param {String} path
     */
    loadApplication(path) {
        this.sendMessage('app', {
            action       : 'loadApplication',
            path,
            resourcesPath: NeoConfig.resourcesPath
        })
    }

    /**
     * @param {Object} data
     */
    onWorkerConstructed(data) {
        let me = this;

        me.constructedThreads++;

        if (me.constructedThreads === me.activeWorkers) {
            // better safe than sorry => all remotes need to be registered
            NeoConfig.appPath && me.timeout(NeoConfig.loadApplicationDelay).then(() => {
                me.loadApplication(NeoConfig.appPath)
            })
        }
    }

    /**
     * Handler method for worker error events
     * @param {Object} e
     */
    onWorkerError(e) {
        // starting a worker from a JS module will show JS errors in a correct way
        !hasJsModules && console.log('Worker Error:', e)
    }

    /**
     * Handler method for worker message events
     * @param {Object} event
     */
    onWorkerMessage(event) {
        let me       = this,
            {data}   = event,
            transfer = null,
            promise;

        const {action, destination: dest, replyId} = data;

        me.fire('message:'+action, data);

        if (action === 'reply') {
            promise = me.promises[replyId];

            if (!promise) {
                if (data.data) {
                    data.data.autoMount  && me.fire('automount',  data);
                    data.data.updateVdom && me.fire('updateVdom', data);

                    // We want to delay the message until the rendering queue has processed it
                    // See: https://github.com/neomjs/neo/issues/2864
                    me.promiseForwardMessage(data).then(msgData => {
                        me.sendMessage(msgData.destination, msgData)
                    })
                }
            } else {
                if (dest === 'main') {
                    data = data.data
                }

                promise[data.reject ? 'reject' : 'resolve'](data);
                delete me.promises[replyId]
            }
        }

        if (dest !== 'main' && action !== 'reply') {
            if (data.transfer) {
                transfer = [data.transfer]
            }

            me.promiseMessage(dest, data, transfer).then(response => {
                me.sendMessage(response.destination, response)
            }).catch(err => {
                me.sendMessage(data.origin, {
                    action : 'reply',
                    reject : true,
                    replyId: data.id,
                    error  : err.message
                })
            })
        }

        // only needed for SharedWorkers
        else if (dest === 'main' && action === 'registerAppName') {
            let {appName} = data;

            me.appNames.push(appName);

            me.broadcast({action: 'registerApp', appName})
        }

        else if (dest === 'main' && action === 'remoteMethod') {
            me.onRemoteMethod(data)
        }
    }

    /**
     * @param {Object} data
     * @param {String} data.replyId
     * @returns {Promise<any>}
     */
    promiseForwardMessage(data) {
        return new Promise((resolve, reject) => {
            this.promises[data.replyId] = {data, reject, resolve}
        })
    }

    /**
     * @param {String} dest app, canvas, data or vdom
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise((resolve, reject) => {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {reject, resolve}
        })
    }

    /**
     * @param {String} replyId
     */
    resolveDomOperationPromise(replyId) {
        if (replyId) {
            let {promises} = this,
                promise    = promises[replyId];

            if (promise) {
                promise.resolve(promise.data);
                delete promises[replyId]
            }
        }
    }

    /**
     * @param {String} dest app, canvas, data or vdom
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @protected
     */
    sendMessage(dest, opts, transfer) {
        let me = this,
            message, worker;

        if (!me.stopCommunication) {
            if (opts.channelPort) {
                worker = opts.channelPort;
                delete opts.channelPort
            } else {
                worker = me.getWorker(dest)
            }

            if (!worker) {
                throw new Error('Called sendMessage for a worker that does not exist: ' + dest)
            }

            opts.destination = dest;

            message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_3__["default"](opts);

            (worker.port ? worker.port : worker).postMessage(message, transfer);
            return message
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Manager));


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


/***/ }),

/***/ "./src/main/addon lazy recursive ^\\.\\/.*\\.mjs$":
/*!********************************************************************!*\
  !*** ./src/main/addon/ lazy ^\.\/.*\.mjs$ strict namespace object ***!
  \********************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/main/addon lazy recursive ^\\.\\/.*\\.mjs$";
module.exports = webpackEmptyAsyncContext;

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
/******/ 			return "chunks/main/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "neo-offscreen-canvas-demo:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkneo_offscreen_canvas_demo"] = self["webpackChunkneo_offscreen_canvas_demo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./node_modules/neo.mjs/src/Main.mjs ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worker/Manager.mjs */ "./node_modules/neo.mjs/src/worker/Manager.mjs");







/**
 * @class Neo.Main
 * @extends Neo.core.Base
 * @singleton
 */
class Main extends _core_export_mjs__WEBPACK_IMPORTED_MODULE_1__.Base {
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true

    static config = {
        /**
         * @member {String} className='Neo.Main'
         * @protected
         */
        className: 'Neo.Main',
        /**
         * @member {String} mode='read'
         * @protected
         */
        mode: 'read',
        /**
         * @member {Object} openWindows={}
         * @protected
         */
        openWindows: {},
        /**
         * @member {Array} readQueue=[]
         * @protected
         */
        readQueue: [],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'alert',
                'editRoute',
                'getByPath',
                'getWindowData',
                'importAddon',
                'log',
                'redirectTo',
                'reloadWindow',
                'setNeoConfig',
                'setRoute',
                'windowClose',
                'windowCloseAll',
                'windowMoveTo',
                'windowOpen',
                'windowResizeTo'
            ]
        },
        /**
         * @member {Boolean} running=false
         * @protected
         */
        running: false,
        /**
         * @member {Boolean} showFps=false
         */
        showFps: false,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} timeLimit=15
         */
        timeLimit: 15,
        /**
         * should be dev only
         * @member {Number} totalFrameCount=0
         * @protected
         */
        totalFrameCount: 0,
        /**
         * @member {Array} updateQueue=[]
         * @protected
         */
        updateQueue: [],
        /**
         * @member {Array} writeQueue=[]
         * @protected
         */
        writeQueue: []
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].on({
            'automount'        : me.onRender,
            'message:mountDom' : me.onMountDom,
            'message:updateDom': me.onUpdateDom,
            'updateVdom'       : me.onUpdateVdom,
            scope              : me
        });

        _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].on('domContentLoaded', me.onDomContentLoaded, me);

        if (document.readyState !== 'loading') {
            _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].onDomContentLoaded()
        }
    }

    /**
     * Workers can not trigger alert(), so we need remote method access.
     * @param {Object} data
     * @param {String} data.message
     */
    alert(data) {
        alert(data.message)
    }

    /**
     * Edit the location.hash value
     * A value of null will remove the given key.
     * @param {Object} data
     */
    editRoute(data) {
        let hashObj = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].parseHash(window.location.hash.substr(1)),
            hashArr = [];

        if (typeof data === 'string') {
            data = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].parseHash(data)
        }

        Object.assign(hashObj, data);

        Object.entries(hashObj).forEach(([key, value]) => {
            if (value !== null) {
                hashArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
            }
        });

        window.location.hash = hashArr.join('&')
    }

    /**
     * Request specific accessible window attributes by path into the app worker.
     * Keep in mind that this excludes anything DOM related or instances.
     * In case your path matches a method, you can also pass params for it.
     * @example:
     *     Neo.Main.getByPath({path: 'navigator.language'}).then(data => {})
     * @example:
     *     Neo.Main.getByPath({path: 'CSS.supports', params: ['display: flex']}).then(data => {})
     * @param {Object} data
     * @param {Array}  data.params=[]
     * @param {String} data.path
     * @returns {*}
     */
    getByPath({params=[], path}) {
        let target = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].nsWithArrays(path);
        return _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(target) ? target(...params) : target
    }

    /**
     * window.screen is not spreadable
     * @returns {Object}
     */
    getWindowData() {
        let win      = window,
            {screen} = win;

        return {
            innerHeight: win.innerHeight,
            innerWidth : win.innerWidth,
            outerHeight: win.outerHeight,
            outerWidth : win.outerWidth,
            screen: {
                availHeight: screen.availHeight,
                availLeft  : screen.availLeft,
                availTop   : screen.availTop,
                availWidth : screen.availWidth,
                colorDepth : screen.colorDepth,
                height     : screen.height,
                orientation: {angle: screen.orientation?.angle, type: screen.orientation?.type},
                pixelDepth : screen.pixelDepth,
                width      : screen.width
            },
            screenLeft: win.screenLeft,
            screenTop : win.screenTop
        }
    }

    /**
     * Import main thread addons at run-time from within the app worker
     * @param {Object} data
     * @param {String} data.name
     * @returns {Boolean}
     */
    async importAddon(data) {
        let {name} = data,
            module;

        if (name.startsWith('WS/')) {
            module = await __webpack_require__("./src/main/addon lazy recursive ^\\.\\/.*\\.mjs$")(`./${name.substring(3)}.mjs`)
        } else {
            module = await __webpack_require__("./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$")(`./${name}.mjs`)
        }

        this.registerAddon(module.default);
        await this.timeout(20); // Wait until remotes are registered

        return true
    }

    /**
     * Remote console access to main threads.
     * You can use appName or windowId to target specific windows.
     * @param {Object} data
     * @param {String} [data.appName]
     * @param {String} data.value
     * @param {String} [data.method] defaults to 'log'
     * @param {Number} [data.windowId]
     * @returns {Boolean}
     */
    log(data) {
        console[data.method || 'log'](data.value);
        return true
    }

    /**
     *
     */
    async onDomContentLoaded() {
        let me       = this,
            {config} = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            imports  = [],
            {environment, mainThreadAddons, useServiceWorker} = config,
            modules;

        _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].onDomContentLoaded();

        // We need different publicPath values for the main thread inside the webpack based dist envs,
        // depending on the hierarchy level of the app entry point
        if (environment === 'dist/development' || environment === 'dist/production') {
            __webpack_require__.p = config.basePath.substring(6)
        }

        // Intended for the online examples where we need an easy way to add GA to every generated app
        if (config.useGoogleAnalytics && !mainThreadAddons.includes('AnalyticsByGoogle')) {
            mainThreadAddons.push('AnalyticsByGoogle')
        }

        if ((
                useServiceWorker === true ||
                useServiceWorker === environment ||
                (useServiceWorker === 'dist/production' && environment === 'dist/esm')
            ) &&
            !mainThreadAddons.includes('ServiceWorker')
        ) {
            mainThreadAddons.push('ServiceWorker')
        }

        mainThreadAddons.forEach(addon => {
            if (addon.startsWith('WS/')) {
                imports.push(__webpack_require__("./src/main/addon lazy recursive ^\\.\\/.*\\.mjs$")(`./${addon.substring(3)}.mjs`))
            } else {
                imports.push(__webpack_require__("./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$")(`./${addon}.mjs`))
            }
        });

        modules = await Promise.all(imports);

        me.addon = {};

        modules.forEach(module => {
            me.registerAddon(module.default)
        });

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].onWorkerConstructed({
            origin: 'main'
        })
    }

    /**
     * @param {Object} data
     */
    onMountDom(data) {
        this.queueWrite(data);

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        })
    }

    /**
     * @param {Object} data
     */
    onRender(data) {
        data.data.replyId = data.replyId;
        this.queueWrite(data.data)
    }

    /**
     * @param {Object} data
     */
    onUpdateDom(data) {
        this.queueUpdate(data)
    }

    /**
     * @param {Object} data
     */
    onUpdateVdom(data) {
        data.data.replyId = data.replyId;
        this.queueUpdate(data.data)
    }

    /**
     * @param {Object[]} queue
     * @param {Date} start
     * @returns {Number}
     * @protected
     */
    processQueue(queue, start) {
        let me    = this,
            limit = me.timeLimit,
            operation;

        while (operation = queue.shift()) {
            if (new Date() - start > limit) {
                queue.unshift(operation);
                return requestAnimationFrame(me.renderFrame.bind(me))
            } else {
                _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][me.mode](operation);
                _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].resolveDomOperationPromise(operation.replyId)
            }
        }
    }

    /**
     * @param {Object} data
     * @protected
     */
    queueRead(data) {
        let me = this;
        me.readQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me))
        }
    }

    /**
     * @param {Object} data
     * @protected
     */
    queueUpdate(data) {
        let me = this;
        me.updateQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me))
        }
    }

    /**
     * @param data
     * @protected
     */
    queueWrite(data) {
        let me = this;
        me.writeQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me))
        }
    }

    /**
     * @param {Object} data
     * @param {String} data.url
     */
    redirectTo(data) {
        window.location.href = data.url
    }

    /**
     * Helper method to register main thread addons
     * @param {Neo.core.Base} addon Can either be a neo class or instance
     */
    registerAddon(addon) {
        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].typeOf(addon) === 'NeoClass') {
            // Addons could get imported multiple times. Ensure to only create an instance once.
            if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].typeOf(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].ns(addon.prototype.className)) !== 'NeoInstance') {
                addon = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(addon)
            }

            // Main thread addons need to get registered as singletons inside the neo namespace
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(addon)
        }

        this.addon[addon.constructor.name] = addon
    }

    /**
     * @param {Object} data
     */
    reloadWindow(data) {
        location.reload()
    }

    /**
     * Triggers the different DOM operation queues
     * @protected
     */
    renderFrame() {
        let me      = this,
            read    = me.readQueue,
            update  = me.updateQueue,
            write   = me.writeQueue,
            reading = me.mode === 'read',
            start   = new Date();

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.logDeltaUpdates) {
            me.totalFrameCount++;
            console.log('Total Frames: ' + me.totalFrameCount)
        }

        if (reading || !write.length) {
            me.mode = 'read';
            if (me.processQueue(read, start)) {
                return
            }
        }

        if (update.length) {
            me.mode = 'update';
            if (me.processQueue(update, start)) {
                return
            }
        }

        if (write.length) {
            me.mode = 'write';
            if (me.processQueue(write, start)) {
                return
            }
        }

        me.running = false
    }

    /**
     * Change a Neo.config from the app worker
     * @param {Object} data
     * @param {String} data.key
     * @param {*} data.value
     */
    setNeoConfig(data) {
        let {key, value} = data;

        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config[key] = data.value;

        key === 'renderCountDeltas' && _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].set({[key]: value})
    }

    /**
     * Change the location.hash value
     * @param {Object} data
     * @param {String} data.value
     */
    setRoute(data) {
        window.location.hash = data.value
    }

    /**
     * Closes popup windows
     * @param {Object} data
     * @param {String|String[]} data.names
     */
    windowClose(data) {
        if (!Array.isArray(data.names)) {
            data.names = [data.names]
        }

        data.names.forEach(name => {
            this.openWindows[name]?.close();
            delete this.openWindows[name]
        })
    }

    /**
     * Closes all popup windows
     * @param {Object} data
     */
    windowCloseAll(data) {
        Object.values(this.openWindows).forEach(value => {
            console.log(value);
            value.close()
        });

        this.openWindows = {}
    }

    /**
     * Move a popup window
     * @param {Object} data
     * @param {String} data.windowName
     * @param {String} data.x
     * @param {String} data.y
     */
    windowMoveTo(data) {
        this.openWindows[data.windowName]?.moveTo(data.x, data.y)
    }

    /**
     * Open a new popup window and return if successfull
     * @param {Object} data
     * @param {String} data.url
     * @param {String} data.windowFeatures
     * @param {String} data.windowName
     * @return {Boolean}
     */
    windowOpen(data) {
        let openedWindow = window.open(data.url, data.windowName, data.windowFeatures),
            success      = !!openedWindow;

        if (success) {
            this.openWindows[data.windowName] = openedWindow
        }

        return success
    }

    /**
     * Move a popup window
     * @param {Object} data
     * @param {Number} [data.height]
     * @param {Number} [data.width]
     * @param {String} data.windowName
     */
    windowResizeTo(data) {
        let win    = this.openWindows[data.windowName],
            height = data.height || win.outerHeight,
            width  = data.width  || win.outerWidth;

        win.resizeTo(width, height)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].setupClass(Main));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBOEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQThDO0FBQ3JFLENBQUM7O0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JTbUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0RBQUcsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvTmVvLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0NvbXBhcmUubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9JZEdlbmVyYXRvci5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL09ic2VydmFibGUubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9VdGlsLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvX2V4cG9ydC5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL0RvbUFjY2Vzcy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL0RvbUV2ZW50cy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL0RvbVV0aWxzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vIGxhenkgXlxcLlxcLy4qXFwubWpzJCBzdHJpY3QgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vbWl4aW4vRGVsdGFVcGRhdGVzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vbWl4aW4vVG91Y2hEb21FdmVudHMubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0Z1bmN0aW9uLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvUmVjdGFuZ2xlLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvU3RyaW5nLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9NYW5hZ2VyLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9NZXNzYWdlLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9taXhpbi9SZW1vdGVNZXRob2RBY2Nlc3MubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9zcmMvbWFpbi9hZGRvbi8gbGF6eSBeXFwuXFwvLipcXC5tanMkIHN0cmljdCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvTWFpbi5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmVvID0gZ2xvYmFsVGhpcy5OZW8gfHwge307XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG4vKipcbiAqIENvbmZpZyBvYmplY3QgZm9yIHRoZSBuZW8ubWpzIGZyYW1ld29yayB3aGljaCB3aWxsIGdldCBwYXNzZWQgdG8gYWxsIHdvcmtlcnNcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxuICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAqIEBuYW1lIGNvbmZpZ1xuICogQHR5cGUgT2JqZWN0XG4gKi9cbmNvbnN0IERlZmF1bHRDb25maWcgPSB7XG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGFwcGx5ICduZW8tYm9keScgdG8gdGhlIGRvY3VtZW50LmJvZHkgY2xhc3NMaXN0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBseUJvZHlDbHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBhcHBseSAncG9zaXRpb246IGZpeGVkJyB0byB0aGUgaHRtbCB0YWcgaXRzZWxmXG4gICAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvNjQyOVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwbHlGaXhlZFBvc2l0aW9uVG9IdG1sVGFnXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGFwcGx5Rml4ZWRQb3NpdGlvblRvSHRtbFRhZzogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHlvdXIgYXBwLm1qcyBmaWxlLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBhcHBzIHRoZXJlIGlmIG5lZWRlZC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcFBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIGFwcFBhdGg6IG51bGwsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcbiAgICAgKiBAZGVmYXVsdCAnLi8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgYmFzZVBhdGg6ICcuLycsXG4gICAgLyoqXG4gICAgICogUGFzcyBhIHRva2VuIGluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgQ2VzaXVtSlMgbWFpbiB0aHJlYWQgYWRkb25cbiAgICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2Jsb2IvZGV2L3NyYy9tYWluL2FkZG9uL0Nlc2l1bUpTLm1qc1xuICAgICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5jZXNpdW1Kc1Rva2VuXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBjb21wb25lbnQgbG9nZ2luZyB1c2luZyBDdHJsLVJpZ2h0LUNsaWNrXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbmFibGVDb21wb25lbnRMb2dnZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgZW5hYmxlQ29tcG9uZW50TG9nZ2VyOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byB0cnVlIHRvIGVuYWJsZSB1dGlsLkxvZ2dlciAoTmVvLmxvZygpKSBiYXNlZCBsb2dzIGluIHByb2R1Y3Rpb25cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbmFibGVMb2dzSW5Qcm9kdWN0aW9uXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGVuYWJsZUxvZ3NJblByb2R1Y3Rpb246IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdkaXN0L2RldmVsb3BtZW50JywgJ2Rpc3QvcHJvZHVjdGlvbidcbiAgICAgKiBUaGlzIGNvbmZpZyB3aWxsIGdldCBhdXRvLWdlbmVyYXRlZFxuICAgICAqIEBkZWZhdWx0ICdkaXN0L3Byb2R1Y3Rpb24nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZW52aXJvbm1lbnQ6ICdkaXN0L3Byb2R1Y3Rpb24nLFxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgR29vZ2xlTWFwcyBtYWluIHRocmVhZCBhZGRvbiwgeW91IGNhbiBwYXNzIHRoZSBBUEkga2V5IGhlcmUuXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmdvb2dsZU1hcHNBcGlLZXlcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgR29vZ2xlQW5hbHl0aWNzIG1haW4gdGhyZWFkIGFkZG9uIG9yIHVzZUdvb2dsZUFuYWx5dGljczogdHJ1ZSxcbiAgICAgKiB5b3UgY2FuIGNoYW5nZSB0aGUgZ3RhZyBpZCBoZXJlLiBSZXF1aXJlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyAoZ2ggcGFnZXMpXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmd0YWdJZFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyBvbiBodHRwczovL25lb21qcy5naXRodWIuaW8vcGFnZXMvXG4gICAgICogPT4gdG8gdXNlIGxvY2FsIGltYWdlcyBwYXRocyBpbnN0ZWFkIG9mIHJhdy5naXRodWJ1c2VyY29udGVudC5jb21cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0dpdEh1YlBhZ2VzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzR2l0SHViUGFnZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBkZWxheSBpbiBtcyBmb3IgdGhlIHdvcmtlci5NYW5hZ2VyOmxvYWRBcHBsaWNhdGlvbigpIGNhbGxcbiAgICAgKiBAZGVmYXVsdCAyMFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2FkQXBwbGljYXRpb25EZWxheVxuICAgICAqIEB0eXBlIE51bWJlclxuICAgICAqL1xuICAgIGxvYWRBcHBsaWNhdGlvbkRlbGF5OiAyMCxcbiAgICAvKipcbiAgICAgKiBVc2VkIGJ5IEludGwuRGF0ZVRpbWVGb3JtYXQsIGZvciBkZXRhaWxzIHRha2UgYSBsb29rIGF0OlxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBsb2cgdGhlIGRlbHRhIHVwZGF0ZXMgaW5zaWRlIHRoZSBtYWluIHRocmVhZChzKSBhcyB3ZWxsIGFzIHRoZSByZXF1ZXN0QW5pbWF0aW9uIGZyYW1lc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvZ0RlbHRhVXBkYXRlc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBsb2dEZWx0YVVwZGF0ZXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBsb2cgY29uc29sZSB3YXJuaW5ncywgaW4gY2FzZSBhIGNvbXBvbmVudCB0cmllcyB0byB1cGRhdGUoKSB3aGlsZSBhIHBhcmVudCB1cGRhdGUgaXMgcnVubmluZy5cbiAgICAgKiBBIHBhcmVudCB1cGRhdGUgcmVzdWx0cyBpbiBhIHNob3J0IGRlbGF5LCBzbyB5b3UgbWlnaHQgd2FudCB0byByZXNvbHZlIHRoZXNlIGNvbGxpc2lvbnMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9nVmRvbVVwZGF0ZUNvbGxpc2lvbnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgbG9nVmRvbVVwZGF0ZUNvbGxpc2lvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZCBhZGRvbnMgZm9yIHRoZSBtYWluIHRocmVhZFxuICAgICAqIC4vc3JjL21haW4vYWRkb24vIGNvbnRhaW5zIGFsbCBmcmFtZXdvcmsgcmVsYXRlZCBvcHRpb25zLlxuICAgICAqIFlvdSBjYW4gYWxzbyBjcmVhdGUgeW91ciBvd24gYWRkb25zIHdpdGhpbiB5b3VyIHdvcmtzcGFjZSBzY29wZS4gTWFrZSBzdXJlIHRvIHB1dCB0aGVtIGluc2lkZSAnc3JjL21haW4vYWRkb24vJ1xuICAgICAqIGFuZCBwcmVmaXggdGhlbSB3aXRoICdXUy8nIGluc2lkZSB5b3VyIG5lby1jb25maWcuanNvbiBmaWxlLlxuICAgICAqIEV4YW1wbGU6IFsnRHJhZ0Ryb3AnLCAnU3R5bGVzaGVldCcsICdXUy9NeUFkZG9uJ11cbiAgICAgKiBAZGVmYXVsdCBbJ0RyYWdEcm9wJywgJ05hdmlnYXRvcicsICdTdHlsZXNoZWV0J11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubWFpblRocmVhZEFkZG9uc1xuICAgICAqIEB0eXBlIFN0cmluZ1tdXG4gICAgICovXG4gICAgbWFpblRocmVhZEFkZG9uczogWydEcmFnRHJvcCcsICdOYXZpZ2F0b3InLCAnU3R5bGVzaGVldCddLFxuICAgIC8qKlxuICAgICAqIFBhc3MgdGhlIFVSTCBvZiBhIEpTT04tZmlsZSwgd2hpY2ggY29udGFpbnMgdGhlIHNlcnZpY2VzIGFuZCBtZXRob2RzIGZyb20geW91ciBiYWNrZW5kLFxuICAgICAqIHdoaWNoIHlvdSB3YW50IHRvIGV4cG9zZSB0byB0aGUgY2xpZW50LlxuICAgICAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vcHJvamVjdHMvMzJcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlbW90ZXNBcGlVcmxcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHJlbW90ZXNBcGlVcmw6IG51bGwsXG4gICAgLyoqXG4gICAgICogWW91IGNhbiB2aXN1YWxseSBzaG93IHRoZSBhbW91bnQgb2YgZGVsdGEgdXBkYXRlcyBwZXIgc2Vjb25kIHVzaW5nIHRoaXMgY29uZmlnLlxuICAgICAqIEl0IGV4cGVjdHMgYSBkb20gbm9kZSB3aXRoIHRoZSBpZCBcIm5lby1kZWx0YS11cGRhdGVzXCIgYXMgdGhlIHJlbmRlcmluZyB0YXJnZXQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVuZGVyQ291bnREZWx0YXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgcmVuZGVyQ291bnREZWx0YXM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZCB0aGVtZXMgeW91IHdhbnQgdG8gdXNlIGhlcmUuIFRoZSBmaXJzdCB0aGVtZSB3aWxsIGdldCBhcHBsaWVkLlxuICAgICAqIEBkZWZhdWx0IFsnbmVvLXRoZW1lLWxpZ2h0JywnbmVvLXRoZW1lLWRhcmsnLCduZW8tdGhlbWUtbmVvLWxpZ2h0J11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJywgJ25lby10aGVtZS1uZW8tbGlnaHQnXSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBzdGFuZGFsb25lIFNpZXN0YSBtb2R1bGUgdGVzdHMgPT4gcHJldmVudCByZWdpc3RlclJlbW90ZSB3b3JrZXIgbWVzc2FnZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51bml0VGVzdE1vZGVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdW5pdFRlc3RNb2RlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBFeHBlcmltZW50YWwgZmxhZyBpZiBhbiBvZmZzY3JlZW4gY2FudmFzIHdvcmtlciBzaG91bGQgZ2V0IGNyZWF0ZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlQ2FudmFzV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNhbnZhc1dvcmtlcjogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBpZiB2ZG9tIGlkcyBzaG91bGQgZ2V0IG1hcHBlZCBpbnRvIERPTSBlbGVtZW50IGlkcy5cbiAgICAgKiBmYWxzZSB3aWxsIGNvbnZlcnQgdGhlbSBpbnRvIGEgXCJkYXRhLW5lby1pZFwiIGF0dHJpYnV0ZS5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZURvbUlkc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VEb21JZHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgaW5jbHVkZSB0aGUgc3R5bGVzaGVldFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRm9udEF3ZXNvbWVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRm9udEF3ZXNvbWU6IHRydWUsXG4gICAgLyoqXG4gICAgICogSW50ZW5kZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgd2hlcmUgd2UgbmVlZCBhbiBlYXN5IHdheSB0byBhZGQgR0EgdG8gZXZlcnkgZ2VuZXJhdGVkIGFwcFxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VHb29nbGVBbmFseXRpY3M6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFRydWUgd2lsbCBhZGQgdGhlIFNlcnZpY2VXb3JrZXIgbWFpbiB0aHJlYWQgYWRkb24gdG8gc3VwcG9ydCBjYWNoaW5nIG9mIGFzc2V0cyAoUFdBKVxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1NlcnZpY2VfV29ya2VyX0FQSVxuICAgICAqXG4gICAgICogWW91IGNhbiBhbHNvIHVzZSBhIHN0cmluZyB0byBzcGVjaWZ5IHRoZSB0YXJnZXQgZW52aXJvbm1lbnQgPT4gJ2Rpc3QvcHJvZHVjdGlvbicuXG4gICAgICogVXNpbmcgJ2Rpc3QvcHJvZHVjdGlvbicgd2lsbCBhbHNvIHVzZSB0aGUgc2VydmljZSB3b3JrZXIgZm9yICdkaXN0L2VzbSdcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VTZXJ2aWNlV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhbnxTdHJpbmdcbiAgICAgKi9cbiAgICB1c2VTZXJ2aWNlV29ya2VyOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIEFwcCwgRGF0YSAmIFZEb20gYXMgU2hhcmVkV29ya2Vycy5cbiAgICAgKiBTZXQgdGhpcyBvbmUgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNvbm5lY3QgbXVsdGlwbGUgbWFpbiB0aHJlYWRzLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVNoYXJlZFdvcmtlcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlU2hhcmVkV29ya2VyczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGdlbmVyYXRlIGEgbmV3IHRhc2sgd29ya2VyLCB3aGljaCBjYW4gZ2V0IGZpbGxlZCB3aXRoIG93biBleHBlbnNpdmUgcmVtb3RlIG1ldGhvZHNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VUYXNrV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVRhc2tXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZhbHNlIHdpbGwgY3JlYXRlIHRoZSB2ZG9tLkhlbHBlciB3aXRoaW4gdGhlIEFwcCB3b3JrZXIgKGV4cGVyaW1lbnRhbCEpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VWZG9tV29ya2VyXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVZkb21Xb3JrZXI6IHRydWUsXG4gICAgLyoqXG4gICAgICogYnVpbGRTY3JpcHRzL2luamVjdFBhY2thZ2VWZXJzaW9uLm1qcyB3aWxsIHVwZGF0ZSB0aGlzIHZhbHVlXG4gICAgICogQGRlZmF1bHQgJzkuMTAuMidcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudmVyc2lvblxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHZlcnNpb246ICc5LjEwLjInXG59O1xuXG5PYmplY3QuYXNzaWduKERlZmF1bHRDb25maWcsIHtcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSB0b3AgbGV2ZWwgbmVvLm1qcyByZXNvdXJjZXMgZm9sZGVyXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdyZXNvdXJjZXMvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZXNvdXJjZXNQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgcmVzb3VyY2VzUGF0aDogYCR7TmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRofXJlc291cmNlcy9gLFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJhc2UgVVJMIGZvciB3ZWIgd29ya2VyIGVudHJ5IHBvaW50cyAoQXBwLCBEYXRhLCBWZG9tKVxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLndvcmtlckJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgd29ya2VyQmFzZVBhdGg6IGAke05lby5jb25maWcuYmFzZVBhdGggfHwgRGVmYXVsdENvbmZpZy5iYXNlUGF0aH1zcmMvd29ya2VyL2AsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdENvbmZpZztcbiIsImltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4vRGVmYXVsdENvbmZpZy5tanMnO1xuXG5jb25zdFxuICAgIGNhbWVsUmVnZXggICA9IC8tLi9nLFxuICAgIGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgIGdldFNldENhY2hlICA9IFN5bWJvbCgnZ2V0U2V0Q2FjaGUnKSxcbiAgICB0eXBlRGV0ZWN0b3IgPSB7XG4gICAgICAgIGZ1bmN0aW9uOiBpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnByb3RvdHlwZT8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnTmVvQ2xhc3MnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9iamVjdDogaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIGl0ZW0gaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdOZW9JbnN0YW5jZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbi8qKlxuICogVGhlIGJhc2UgbW9kdWxlIHRvIGVuaGFuY2UgY2xhc3NlcywgY3JlYXRlIGluc3RhbmNlcyBhbmQgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEBtb2R1bGUgTmVvXG4gKiBAc2luZ2xldG9uXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmJpbmRNZXRob2RzICAgICAgIGFzIGJpbmRNZXRob2RzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNhcGl0YWxpemUgICAgICAgIGFzIGNhcGl0YWxpemVcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVzICAgICAgYXMgY3JlYXRlU3R5bGVzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmRlY2FtZWwgICAgICAgICAgIGFzIGRlY2FtZWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0Jvb2xlYW4gICAgICAgICBhcyBpc0Jvb2xlYW5cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNEZWZpbmVkICAgICAgICAgYXMgaXNEZWZpbmVkXG4gKiBAYm9ycm93cyBOZW8uY29yZS5Db21wYXJlLmlzRXF1YWwgICAgICAgIGFzIGlzRXF1YWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNOdW1iZXIgICAgICAgICAgYXMgaXNOdW1iZXJcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgICAgICAgICAgYXMgaXNPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNTdHJpbmcgICAgICAgICAgYXMgaXNTdHJpbmdcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwudG9BcnJheSAgICAgICAgICAgYXMgdG9BcnJheVxuICogQHR1dG9yaWFsIDAxX0NvbmNlcHRcbiAqL1xubGV0IE5lbyA9IGdsb2JhbFRoaXMuTmVvIHx8IHt9O1xuXG5OZW8gPSBnbG9iYWxUaGlzLk5lbyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIC8qKlxuICAgICAqIEEgbWFwIGNvbnRhaW5pbmcgbnR5cGVzIGFzIGtleSBhbmQgTmVvIGNsYXNzZXMgb3Igc2luZ2xldG9ucyBhcyB2YWx1ZXNcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgbnR5cGVNYXA6IHt9LFxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBmb3IgTmVvLmNyZWF0ZS4gRmFsc2UgZm9yIHRoZSBtYWluIHRocmVhZCwgdHJ1ZSBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2VyXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgbWV0aG9kcyBmcm9tIG9uZSBuYW1lc3BhY2UgdG8gYW5vdGhlciBvbmVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIC8vIGFsaWFzZXNcbiAgICAgKiBOZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgICogICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgICAqICAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXG4gICAgICogICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZSdcbiAgICAgKiB9LCB0cnVlKTtcbiAgICAgKlxuICAgICAqIC8vIGUuZy4gTmVvLmNvcmUuVXRpbC5pc09iamVjdCA9PiBOZW8uaXNPYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvfE5lby5jb3JlLkJhc2V9IHRhcmdldCAgICBUaGUgdGFyZ2V0IGNsYXNzIG9yIHNpbmdsZXRvbiBJbnN0YW5jZSBvciBOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9ICAgICBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgICAgICBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgICAgICBbYmluZF0gICAgc2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGJpbmQgbWV0aG9kcyB0byB0aGUgXCJmcm9tXCIgbmFtZXNwYWNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHlGcm9tTnModGFyZ2V0LCBuYW1lc3BhY2UsIGNvbmZpZywgYmluZCkge1xuICAgICAgICBsZXQgZm5OYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihjb25maWcpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvICAgICA9IHR5cGVvZiBjbHMgPT09ICdmdW5jdGlvbicgPyBjbHMucHJvdG90eXBlIDogY2xzLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvdG8uaXNDbGFzcyA/IHByb3RvLmNvbmZpZy5jbGFzc05hbWUgOiBwcm90by5jbGFzc05hbWUsXG4gICAgICAgICAgICBuc0FycmF5ICAgPSBjbGFzc05hbWUuc3BsaXQoJy4nKSxcbiAgICAgICAgICAgIGtleSAgICAgICA9IG5zQXJyYXkucG9wKCksXG4gICAgICAgICAgICBucyAgICAgICAgPSBOZW8ubnMobnNBcnJheSwgdHJ1ZSk7XG5cbiAgICAgICAgbnNba2V5XSA9IGNsc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0ICAgVGhlIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgVGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXlzIHlvdSB3YW50IHRvIGNvcHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKi9cbiAgICBhc3NpZ25EZWZhdWx0cyh0YXJnZXQsIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihkZWZhdWx0cykgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QuaGFzT3duKHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXNzaWducyBhIG5ldyB2YWx1ZSB0byBhIGdpdmVuIG5lc3RlZCBvYmplY3RzIHBhdGguXG4gICAgICogSXQgd2lsbCBjcmVhdGUgdGhlIHBhdGggc3RydWN0dXJlIG9yIHBhcnRzIG9mIGl0LCBpbiBjYXNlIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmFzc2lnblRvTnMoJ2Fubm90YXRpb25zLnNlbGVjdGVkJywgZmFsc2UsIHJlY29yZClcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxTdHJpbmd9IHBhdGggICAgICAgICAgICAgVGhlIHBhdGggc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHsqfSAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgVGhlIG5ldyB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIGxlYWYgbm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBzY29wZT1nbG9iYWxUaGlzIFNldCBhIGRpZmZlcmVudCBzdGFydGluZyBwb2ludCBhcyBnbG9iYWxUaGlzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgICAgIGZvcmNlPXRydWUgICAgICAgZmFsc2Ugd2lsbCBvbmx5IGFzc2lnbiBkZWZhdWx0IHZhbHVlcyAoYXNzaWduIGlmIG9sZCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAqL1xuICAgIGFzc2lnblRvTnMocGF0aCwgdmFsdWUsIHNjb3BlPWdsb2JhbFRoaXMsIGZvcmNlPXRydWUpIHtcbiAgICAgICAgcGF0aCA9IEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogcGF0aC5zcGxpdCgnLicpO1xuXG4gICAgICAgIGxldCBrZXk7XG5cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAga2V5ICAgPSBwYXRoLnBvcCgpO1xuICAgICAgICAgICAgc2NvcGUgPSBOZW8ubnMocGF0aCwgdHJ1ZSwgc2NvcGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBwYXRoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9yY2UgfHwgc2NvcGVba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzY29wZVtrZXldID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBrZWJhYi1jYXNlIHN0cmluZ3MgaW50byBjYW1lbC1jYXNlXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGNhbWVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGNhbWVsUmVnZXgsIG1hdGNoID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXG4gICAgICovXG4gICAgY2FwaXRhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVbMF0udG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkZWVwPWZhbHNlICAgICAgICAgICAgICAgU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNsb25lIG5lc3RlZCBvYmplY3RzIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlnbm9yZU5lb0luc3RhbmNlcz1mYWxzZSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl8Kn0gdGhlIGNsb25lZCBpbnB1dFxuICAgICAqL1xuICAgIGNsb25lKG9iaiwgZGVlcD1mYWxzZSwgaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlKSB7XG4gICAgICAgIGxldCBvdXQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEFycmF5ICAgICAgOiAoKSA9PiAhZGVlcCA/IFsuLi5vYmpdIDogWy4uLm9iai5tYXAodmFsID0+IE5lby5jbG9uZSh2YWwsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcykpXSxcbiAgICAgICAgICAgIERhdGUgICAgICAgOiAoKSA9PiBuZXcgRGF0ZShvYmoudmFsdWVPZigpKSxcbiAgICAgICAgICAgIE1hcCAgICAgICAgOiAoKSA9PiBuZXcgTWFwKG9iaiksIC8vIHNoYWxsb3cgY29weVxuICAgICAgICAgICAgTmVvSW5zdGFuY2U6ICgpID0+IGlnbm9yZU5lb0luc3RhbmNlcyA/IG9iaiA6IHRoaXMuY2xvbmVOZW9JbnN0YW5jZShvYmopLFxuICAgICAgICAgICAgU2V0ICAgICAgICA6ICgpID0+IG5ldyBTZXQob2JqKSxcblxuICAgICAgICAgICAgT2JqZWN0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3V0ID0ge307XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9ICFkZWVwID8gdmFsdWUgOiBOZW8uY2xvbmUodmFsdWUsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcylcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVtOZW8udHlwZU9mKG9iaildPy4oKSB8fCBvYmpcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSB1c2luZyB0aGUgb3JpZ2luYWxDb25maWcgd2l0aG91dCB0aGUgaWRcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gdGhlIGNsb25lZCBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNsb25lTmVvSW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHsuLi5pbnN0YW5jZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoaW5zdGFuY2UuY2xhc3NOYW1lLCBjb25maWcpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFVzZSBOZW8uY3JlYXRlKCkgaW5zdGVhZCBvZiBcIm5ld1wiIHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2YgYWxsIE5lbyBjbGFzc2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuICAgICAqXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIG1vZHVsZSA6IEJ1dHRvbixcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSh7XG4gICAgICogICAgIGNsYXNzTmFtZTogJ05lby5idXR0b24uQmFzZScsXG4gICAgICogICAgIGljb25DbHMgIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfG51bGx9IFRoZSBuZXcgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpIHtcbiAgICAgICAgbGV0IHR5cGUgPSBOZW8udHlwZU9mKGNsYXNzTmFtZSksXG4gICAgICAgICAgICBjbHMsIGluc3RhbmNlO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnTmVvQ2xhc3MnKSB7XG4gICAgICAgICAgICBjbHMgPSBjbGFzc05hbWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBjb25maWcuY2xhc3NOYW1lIHx8IGNvbmZpZy5tb2R1bGUucHJvdG90eXBlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFleGlzdHMoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgJyArIGNsYXNzTmFtZSArICcgZG9lcyBub3QgZXhpc3QnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbHMgPSBOZW8ubnMoY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKCk7XG5cbiAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0KGNvbmZpZyk7XG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2Uub25BZnRlckNvbnN0cnVjdGVkKCk7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBlbXB0eUZuKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlcmUgaXMgYSBzZXQgbWV0aG9kIGZvciBhIGdpdmVuIHByb3BlcnR5IGtleSBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90byBUaGUgdG9wIGxldmVsIHByb3RvdHlwZSBvZiBhIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9ICAgICAgICBrZXkgICBUaGUgcHJvcGVydHkga2V5IHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSB7XG4gICAgICAgIGxldCBkZXNjcmlwdG9yO1xuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkZXNjcmlwdG9yLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVlcC1tZXJnZXMgYSBzb3VyY2Ugb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIG1lcmdlKHRhcmdldCwgc291cmNlLCBkZWZhdWx0cykge1xuICAgICAgICBpZiAoZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBOZW8ubWVyZ2UoTmVvLm1lcmdlKHRhcmdldCwgZGVmYXVsdHMpLCBzb3VyY2UpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChOZW8udHlwZU9mKHZhbHVlKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IE5lby5tZXJnZSh0YXJnZXRba2V5XSB8fCB7fSwgdmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdpdmVuIG9yIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5ucygnTmVvLmJ1dHRvbi5CYXNlJywgdHJ1ZSk7XG4gICAgICogLy8gPT5cbiAgICAgKiAvLyBnbG9iYWxUaGlzLk5lbyAgICAgICAgICAgICA9IGdsb2JhbFRoaXMuTmVvICAgICAgICAgICAgIHx8IHt9O1xuICAgICAqIC8vIGdsb2JhbFRoaXMuTmVvLmJ1dHRvbiAgICAgID0gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uICAgICAgfHwge307XG4gICAgICogLy8gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uLkJhc2UgPSBnbG9iYWxUaGlzLk5lby5idXR0b24uQmFzZSB8fCB7fTtcbiAgICAgKiAvLyByZXR1cm4gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uLkJhc2U7XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nW118U3RyaW5nfSBuYW1lcyAgICAgICAgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgICAgIGNyZWF0ZT1mYWxzZSBTZXQgY3JlYXRlIHRvIHRydWUgdG8gY3JlYXRlIGVtcHR5IG9iamVjdHMgZm9yIG5vbi1leGlzdGluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBbc2NvcGVdICAgICAgU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zKG5hbWVzLCBjcmVhdGU9ZmFsc2UsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IGdsb2JhbFRoaXMpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEV4dGVuZGVkIHZlcnNpb24gb2YgTmVvLm5zKCkgd2hpY2ggc3VwcG9ydHMgbWFwcGluZyBpbnRvIGFycmF5cy5cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyAgICAgICAgVGhlIGNsYXNzIG5hbWUgc3RyaW5nIGNvbnRhaW5pbmcgZG90cyBvciBhbiBBcnJheSBvZiB0aGUgc3RyaW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtCb29sZWFufSAgICAgIGNyZWF0ZT1mYWxzZSBTZXQgY3JlYXRlIHRvIHRydWUgdG8gY3JlYXRlIGVtcHR5IG9iamVjdHMgZm9yIG5vbi1leGlzdGluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICBbc2NvcGVdICAgICAgU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zV2l0aEFycmF5cyhuYW1lcywgY3JlYXRlPWZhbHNlLCBzY29wZSkge1xuICAgICAgICBuYW1lcyA9IEFycmF5LmlzQXJyYXkobmFtZXMpID8gbmFtZXMgOiBuYW1lcy5zcGxpdCgnLicpO1xuXG4gICAgICAgIHJldHVybiBuYW1lcy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjcmVhdGUgJiYgIXByZXZbY3VycmVudF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBcnJheU5zKHRydWUsIGN1cnJlbnQsIHByZXYpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQXJyYXlOcyhmYWxzZSwgY3VycmVudCwgcHJldilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSB8fCBnbG9iYWxUaGlzKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKHtcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG50eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfVxuICAgICAqIEBzZWUge0BsaW5rIG1vZHVsZTpOZW8uY3JlYXRlIGNyZWF0ZX1cbiAgICAgKi9cbiAgICBudHlwZShudHlwZSwgY29uZmlnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBudHlwZTtcblxuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIGRlZmluZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIG50eXBlIHByb3BlcnR5LiAnICsgY29uZmlnLm50eXBlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBudHlwZSA9IGNvbmZpZy5udHlwZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XG5cbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAdGVtcGxhdGUgVFxuICAgICAqIEBwYXJhbSB7VH0gY2xzXG4gICAgICogQHJldHVybnMge1R9XG4gICAgICovXG4gICAgc2V0dXBDbGFzcyhjbHMpIHtcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgPSBudWxsLFxuICAgICAgICAgICAgbnR5cGVDaGFpbiA9IFtdLFxuICAgICAgICAgICAge250eXBlTWFwfSA9IE5lbyxcbiAgICAgICAgICAgIHByb3RvICAgICAgPSBjbHMucHJvdG90eXBlIHx8IGNscyxcbiAgICAgICAgICAgIG5zICAgICAgICAgPSBOZW8ubnMocHJvdG8uY29uc3RydWN0b3IuY29uZmlnLmNsYXNzTmFtZSwgZmFsc2UpLFxuICAgICAgICAgICAgcHJvdG9zICAgICA9IFtdLFxuICAgICAgICAgICAgY2ZnLCBjb25maWcsIGN0b3IsIG50eXBlO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIElmIHRoZSBuYW1lc3BhY2UgYWxyZWFkeSBleGlzdHMsIGRpcmVjdGx5IHJldHVybiBpdC5cbiAgICAgICAgICogVGhpcyBjYW4gaGFwcGVuIHdoZW4gdXNpbmcgZGlmZmVyZW50IHZlcnNpb25zIG9mIG5lby5tanNcbiAgICAgICAgICogPT4gRXNwZWNpYWxseSBzaW5nbGV0b25zIChJZEdlbmVyYXRvcikgbXVzdCBzdGF5IHVuaXF1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBjYW4gYWxzbyBoYXBwZW4gd2hlbiB1c2luZyBkaWZmZXJlbnQgZW52aXJvbm1lbnRzIG9mIG5lby5tanMgaW4gcGFyYWxsZWwuXG4gICAgICAgICAqIEV4YW1wbGU6IGNvZGUuTGl2ZVByZXZpZXcgcnVubmluZyBpbnNpZGUgYSBkaXN0L3Byb2R1Y3Rpb24gYXBwLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgICByZXR1cm4gbnNcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY3RvciwgJ2NsYXNzQ29uZmlnQXBwbGllZCcpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbnR5cGVDaGFpbiA9IFsuLi5jdG9yLm50eXBlQ2hhaW5dO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3Rvcy51bnNoaWZ0KHByb3RvKTtcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fXG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcgPSBiYXNlQ2ZnIHx8IHt9O1xuXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IG1peGlucztcblxuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XG5cbiAgICAgICAgICAgIGNmZyA9IGN0b3IuY29uZmlnIHx8IHt9O1xuXG4gICAgICAgICAgICBpZiAoTmVvLm92ZXJ3cml0ZXMpIHtcbiAgICAgICAgICAgICAgICBjdG9yLmFwcGx5T3ZlcndyaXRlcz8uKGNmZylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNsaWNlKC0xKSA9PT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgY2ZnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSBhcHBseSBwcm9wZXJ0aWVzIHdoaWNoIGhhdmUgbm8gc2V0dGVycyBpbnNpZGUgdGhlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIU5lby5oYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlICA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY2ZnLCAnbnR5cGUnKSkge1xuICAgICAgICAgICAgICAgIG50eXBlID0gY2ZnLm50eXBlO1xuXG4gICAgICAgICAgICAgICAgbnR5cGVDaGFpbi51bnNoaWZ0KG50eXBlKTtcblxuICAgICAgICAgICAgICAgIC8vIFJ1bm5pbmcgdGhlIGRvY3MgYXBwIGluc2lkZSBhIHdvcmtzcGFjZSBjYW4gcHVsbCBpbiB0aGUgc2FtZSBjbGFzc2VzIGZyb20gZGlmZmVyZW50IHJvb3RzLFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIHdhbnQgdG8gY2hlY2sgZm9yIGRpZmZlcmVudCBjbGFzcyBuYW1lcyBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24obnR5cGVNYXAsIG50eXBlKSAmJiBjZmcuY2xhc3NOYW1lICE9PSBudHlwZU1hcFtudHlwZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBudHlwZSBjb25mbGljdCBmb3IgJyR7bnR5cGV9JyBpbnNpZGUgdGhlIGNsYXNzZXM6XFxuJHtudHlwZU1hcFtudHlwZV19XFxuJHtjZmcuY2xhc3NOYW1lfWApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbnR5cGVNYXBbbnR5cGVdID0gY2ZnLmNsYXNzTmFtZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtaXhpbnMgPSBPYmplY3QuaGFzT3duKGNvbmZpZywgJ21peGlucycpICYmIGNvbmZpZy5taXhpbnMgfHwgW107XG5cbiAgICAgICAgICAgIGlmIChjdG9yLm9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCgnTmVvLmNvcmUuT2JzZXJ2YWJsZScpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duKGNmZywgJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlNaXhpbnMoY3RvciwgbWl4aW5zKTtcblxuICAgICAgICAgICAgICAgIGlmIChOZW8ubnMoJ05lby5jb3JlLk9ic2VydmFibGUnLCBmYWxzZSwgY3Rvci5wcm90b3R5cGUubWl4aW5zKSkge1xuICAgICAgICAgICAgICAgICAgICBjdG9yLm9ic2VydmFibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY2ZnLm1peGlucztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubWl4aW5zO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgY2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIG50eXBlQ2hhaW5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAhY29uZmlnLnNpbmdsZXRvbiAmJiB0aGlzLmFwcGx5VG9HbG9iYWxOcyhjbHMpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb3RvID0gY2xzLnByb3RvdHlwZSB8fCBjbHM7XG5cbiAgICAgICAgbnR5cGVDaGFpbi5mb3JFYWNoKG50eXBlID0+IHtcbiAgICAgICAgICAgIHByb3RvW2BpcyR7TmVvLmNhcGl0YWxpemUoTmVvLmNhbWVsKG50eXBlKSl9YF0gPSB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm90by5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgIGNscyA9IE5lby5jcmVhdGUoY2xzKTtcbiAgICAgICAgICAgIE5lby5hcHBseVRvR2xvYmFsTnMoY2xzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdHlwZU9mKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGVEZXRlY3Rvclt0eXBlb2YgaXRlbV0/LihpdGVtKSB8fCBpdGVtLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB9XG59LCBOZW8pO1xuXG4vKipcbiAqIExpc3Qgb2YgY2xhc3MgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHN1cHBvc2VkIHRvIGdldCBtaXhlZCBpbnRvIG90aGVyIGNsYXNzZXNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGlnbm9yZU1peGluID0gW1xuICAgICdfbmFtZScsXG4gICAgJ2NsYXNzQ29uZmlnQXBwbGllZCcsXG4gICAgJ2NsYXNzTmFtZScsXG4gICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAnaXNDbGFzcycsXG4gICAgJ21peGluJyxcbiAgICAnbnR5cGUnLFxuICAgICdvYnNlcnZhYmxlJ1xuXSxcblxuICAgIGNoYXJzUmVnZXggICAgICAgICA9IC9cXGQrL2csXG4gICAgZXh0cmFjdEFycmF5c1JlZ2V4ID0gL14oXFx3KylcXHMqKCg/OlxcW1xccypcXGQrXFxzKlxcXVxccyopKikkLztcblxuLyoqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICogQHBhcmFtIHtBcnJheX0gICAgICAgICBtaXhpbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1peGlucykpIHtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgfVxuXG4gICAgbGV0IGkgICAgICAgICAgICA9IDAsXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXG4gICAgICAgIG1peGluQ2xhc3NlcyA9IHt9LFxuICAgICAgICBtaXhpbiwgbWl4aW5DbHMsIG1peGluUHJvdG87XG5cbiAgICBmb3IgKDtpIDwgbGVuO2krKykge1xuICAgICAgICBtaXhpbiA9IG1peGluc1tpXTtcblxuICAgICAgICBpZiAobWl4aW4uaXNDbGFzcykge1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluLnByb3RvdHlwZTtcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gbWl4aW4gYW4gdW5kZWZpbmVkIGNsYXNzOiAnICsgbWl4aW4gKyAnLCAnICsgY2xzLnByb3RvdHlwZS5jbGFzc05hbWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW4pO1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWl4aW5Qcm90bykuZm9yRWFjaChtaXhpblByb3BlcnR5KGNscy5wcm90b3R5cGUsIG1peGluUHJvdG8pKVxuICAgIH1cblxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzIC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2Vcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSAgICAgICAga2V5XG4gKiBAcHJpdmF0ZVxuICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gKi9cbmZ1bmN0aW9uIGF1dG9HZW5lcmF0ZUdldFNldChwcm90bywga2V5KSB7XG4gICAgaWYgKE5lby5oYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSkge1xuICAgICAgICB0aHJvdygnQ29uZmlnICcgKyBrZXkgKyAnXyAoJyArIHByb3RvLmNsYXNzTmFtZSArICcpIGFscmVhZHkgaGFzIGEgc2V0IG1ldGhvZCwgdXNlIGJlZm9yZUdldCwgYmVmb3JlU2V0ICYgYWZ0ZXJTZXQgaW5zdGVhZCcpXG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV0gPSB7fVxuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlR2V0ID0gYGJlZm9yZUdldCR7a2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YCxcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gT2JqZWN0Lmhhc093bihtZVtjb25maWdTeW1ib2xdLCBrZXkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgICAgPSBtZVtjb25maWdTeW1ib2xdW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlLnZhbHVlT2YoKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTmV3S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lWydfJyArIGtleV07IC8vIHJldHVybiB0aGUgdmFsdWUgcGFyc2VkIGJ5IHRoZSBzZXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZUdldF0odmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgX2tleSAgICAgID0gJ18nICsga2V5LFxuICAgICAgICAgICAgICAgICAgICB1S2V5ICAgICAgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2V0ID0gJ2JlZm9yZVNldCcgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycgJiYga2V5ICE9PSAndm5vZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcbiAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgZG9uJ3QgcmV0dXJuIGEgdmFsdWUsIHRoYXQgbWVhbnMgbm8gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKGtleSA9PT0gJ3Zub2RlJyAmJiB2YWx1ZSAhPT0gb2xkVmFsdWUpIHx8IC8vIHZub2RlIHRyZWVzIGNhbiBiZSBodWdlLCBhdm9pZCBhIGRlZXAgY29tcGFyaXNvblxuICAgICAgICAgICAgICAgICAgICAhTmVvLmlzRXF1YWwodmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBtZVthZnRlclNldF0/Lih2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBtZS5hZnRlclNldENvbmZpZz8uKGtleSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywga2V5LCBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pXG59XG5cbi8qKlxuICogQHBhcmFtIHtCb29sZWFufSBjcmVhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSAgY3VycmVudFxuICogQHBhcmFtIHtPYmplY3R9ICBwcmV2XG4gKiBAcmV0dXJucyB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlOcyhjcmVhdGUsIGN1cnJlbnQsIHByZXYpIHtcbiAgICBsZXQgYXJyRGV0YWlscyA9IHBhcnNlQXJyYXlGcm9tU3RyaW5nKGN1cnJlbnQpLFxuICAgICAgICBpICAgICAgICAgID0gMSxcbiAgICAgICAgbGVuICAgICAgICA9IGFyckRldGFpbHMubGVuZ3RoLFxuICAgICAgICBhcnJJdGVtLCBhcnJSb290O1xuXG4gICAgaWYgKGNyZWF0ZSkge1xuICAgICAgICBwcmV2W2FyckRldGFpbHNbMF1dID0gYXJyUm9vdCA9IHByZXZbYXJyRGV0YWlsc1swXV0gfHwgW11cbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJSb290ID0gcHJldlthcnJEZXRhaWxzWzBdXVxuICAgIH1cblxuICAgIGlmICghYXJyUm9vdCkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFyckl0ZW0gPSBwYXJzZUludChhcnJEZXRhaWxzW2ldKTtcblxuICAgICAgICBpZiAoY3JlYXRlKSB7XG4gICAgICAgICAgICBhcnJSb290W2Fyckl0ZW1dID0gYXJyUm9vdFthcnJJdGVtXSB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgYXJyUm9vdCA9IGFyclJvb3RbYXJySXRlbV1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyUm9vdFxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleGlzdHMoY2xhc3NOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XVxuICAgICAgICB9LCBnbG9iYWxUaGlzKVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvdG9ba2V5XT8uX2Zyb20pIHtcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWl4aW4gc2V0IG11bHRpcGxlIHRpbWVzIG9yIGFscmVhZHkgZGVmaW5lZCBvbiBhIEJhc2UgQ2xhc3MnLCBwcm90by5jbGFzc05hbWUsIG1peGluUHJvdG8uY2xhc3NOYW1lLCBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7cHJvdG8uY2xhc3NOYW1lfTogTXVsdGlwbGUgbWl4aW5zIGRlZmluaW5nIHNhbWUgcHJvcGVydHkgKCR7bWl4aW5Qcm90by5jbGFzc05hbWV9LCAke3Byb3RvW2tleV0uX2Zyb219KSA9PiAke2tleX1gXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBwcm90b1trZXldID0gbWl4aW5Qcm90b1trZXldO1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSkuX2Zyb20gPSBtaXhpblByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICBpZiAodHlwZW9mIHByb3RvW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHByb3RvW2tleV0uX25hbWUgPSBrZXlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gbWl4aW5DbHNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peFJlZHVjZShtaXhpbkNscykge1xuICAgIHJldHVybiAocHJldiwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF0gPSBpZHggIT09IGFyci5sZW5ndGggLTEgPyBwcmV2W2N1cnJlbnRdIHx8IHt9IDogbWl4aW5DbHNcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcGFyc2VBcnJheUZyb21TdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIChleHRyYWN0QXJyYXlzUmVnZXguZXhlYyhzdHIpIHx8IFtudWxsXSkuc2xpY2UoMSkucmVkdWNlKFxuICAgICAgICAoZnVuLCBhcmdzKSA9PiBbZnVuXS5jb25jYXQoYXJncy5tYXRjaChjaGFyc1JlZ2V4KSlcbiAgICApXG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IE5lbztcbiIsImltcG9ydCB7YnVmZmVyLCBkZWJvdW5jZSwgaW50ZXJjZXB0LCByZXNvbHZlQ2FsbGJhY2ssIHRocm90dGxlfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9uLm1qcyc7XG5pbXBvcnQgSWRHZW5lcmF0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9JZEdlbmVyYXRvci5tanMnXG5cbmNvbnN0IGNvbmZpZ1N5bWJvbCAgICAgICA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgICAgZm9yY2VBc3NpZ25Db25maWdzID0gU3ltYm9sKCdmb3JjZUFzc2lnbkNvbmZpZ3MnKSxcbiAgICAgIGlzSW5zdGFuY2UgICAgICAgICA9IFN5bWJvbCgnaXNJbnN0YW5jZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciAoYWxtb3N0KSBhbGwgY2xhc3NlcyBpbnNpZGUgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEV4Y2VwdGlvbnMgYXJlIGUuZy4gY29yZS5JZEdlbmVyYXRvciwgdmRvbS5WTm9kZVxuICogQGNsYXNzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSB7XG4gICAgLyoqXG4gICAgICogWW91IGNhbiBkZWZpbmUgbWV0aG9kcyB3aGljaCBzaG91bGQgZ2V0IGRlbGF5ZWQuXG4gICAgICogVHlwZXMgYXJlIGJ1ZmZlciwgZGVib3VuY2UgJiB0aHJvdHRsZS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICBkZWxheWFibGU6IHtcbiAgICAgKiAgICAgIGZpcmVDaGFuZ2VFdmVudDoge1xuICAgICAqICAgICAgICAgIHR5cGUgOiAnZGVib3VuY2UnLFxuICAgICAqICAgICAgICAgIHRpbWVyOiAzMDBcbiAgICAgKiAgICAgIH1cbiAgICAgKiAgfVxuICAgICAqIEBtZW1iZXIge09iamVjdH0gZGVsYXlhYmxlPXt9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVsYXlhYmxlID0ge31cbiAgICAvKipcbiAgICAgKiBGbGFnIHdoaWNoIHdpbGwgZ2V0IHNldCB0byB0cnVlIG9uY2UgbWFuYWdlci5JbnN0YW5jZSBnb3QgY3JlYXRlZFxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluc3RhbmNlTWFuYWdlckF2YWlsYWJsZT1mYWxzZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2VcbiAgICAvKipcbiAgICAgKiBSZWdleCB0byBncmFiIHRoZSBNZXRob2ROYW1lIGZyb20gYW4gZXJyb3JcbiAgICAgKiB3aGljaCBpcyBhIHNlY29uZCBnZW5lcmF0aW9uIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlciB7UmVnRXhwfSBtZXRob2ROYW1lUmVnZXhcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG1ldGhvZE5hbWVSZWdleCA9IC9cXG4uKlxcblxccythdFxccysuKlxcLihcXHcrKVxccysuKi9cbiAgICAvKipcbiAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS5PYnNlcnZhYmxlIG1peGluXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT1mYWxzZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogS2VlcCB0aGUgb3ZlcndyaXR0ZW4gbWV0aG9kc1xuICAgICAqIEBtZW1iZXIge09iamVjdH0gb3ZlcndyaXR0ZW5NZXRob2RzPXt9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb3ZlcndyaXR0ZW5NZXRob2RzID0ge31cbiAgICAvKipcbiAgICAgKiBDb25maWdzIHdpbGwgZ2V0IG1lcmdlZCB0aHJvdWdob3V0IHRoZSBjbGFzcyBoaWVyYXJjaHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBzaG9ydGN1dC1uYW1lIHRvIHVzZSBmb3IgZS5nLiBjcmVhdGluZyBjaGlsZCBjb21wb25lbnRzIGluc2lkZSBhIEpTT04tZm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGlsZSBpdCBpcyByZWNvbW1lbmRlZCB0byBjaGFuZ2UgdGhlIHN0YXRpYyBkZWxheWFibGUgY29uZmlncyBvbiBjbGFzcyBsZXZlbCxcbiAgICAgICAgICogeW91IGNhbiBjaGFuZ2UgaXQgb24gaW5zdGFuY2UgbGV2ZWwgdG9vLiBJZiBub3QgbnVsbCwgd2Ugd2lsbCBkbyBhIGRlZXAgbWVyZ2UuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZGVsYXlhYmxlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5YWJsZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgY29tcG9uZW50IGlkXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaWRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogTmVvLmNyZWF0ZSgpIHdpbGwgY2hhbmdlIHRoaXMgZmxhZyB0byB0cnVlIGFmdGVyIHRoZSBvbkNvbnN0cnVjdGVkKCkgY2hhaW4gaXMgZG9uZS5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNDb25zdHJ1Y3RlZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc0NvbnN0cnVjdGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBtaXhpbnMgYXMgYW4gYXJyYXkgb2YgY2xhc3NOYW1lcywgaW1wb3J0ZWQgbW9kdWxlcyBvciBhIG1peGVkIHZlcnNpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBieSBwYXNzaW5nIGFuIGltcG9ydGVkIGNsYXNzIChKUyBtb2R1bGUgZGVmYXVsdCBleHBvcnQpXG4gICAgICAgICAqIEBtZW1iZXIge0NsYXNzfSBtb2R1bGU9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtb2R1bGU6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBjYWNoZSBmb3IgYWxsIHRpbWVvdXQgaWRzIHdoZW4gdXNpbmcgdGhpcy50aW1lb3V0KClcbiAgICAgKiBAbWVtYmVyIHtOdW1iZXJbXX0gdGltZW91dElkcz1bXVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgI3RpbWVvdXRJZHMgPSBbXVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnPXt9XG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XG4gICAgICAgICAgICBbY29uZmlnU3ltYm9sXToge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgIDoge30sXG4gICAgICAgICAgICAgICAgd3JpdGFibGUgICAgOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW2lzSW5zdGFuY2VdOiB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5jcmVhdGVJZChjb25maWcuaWQgfHwgbWUuaWQpO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5jb25zdHJ1Y3Rvci5jb25maWcuaWRcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpICYmIG1lLmluaXRPYnNlcnZhYmxlKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gYXNzaWduIGNsYXNzIGZpZWxkIHZhbHVlcyBwcmlvciB0byBjb25maWdzXG4gICAgICAgIGNvbmZpZyA9IG1lLnNldEZpZWxkcyhjb25maWcpO1xuXG4gICAgICAgIG1lLmluaXRDb25maWcoY29uZmlnKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5hcHBseURlbGF5YWJsZSgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIFdlIGRvIG5vdCB3YW50IHRvIGZvcmNlIGRldnMgdG8gY2hlY2sgZm9yIHRoZSBgaXNEZXN0cm95ZWRgIGZsYWcgaW4gZXZlcnkgcG9zc2libGUgY2xhc3MgZXh0ZW5zaW9uLlxuICAgICAgICAgKiBTbywgd2UgYXJlIGludGVyY2VwdGluZyB0aGUgdG9wLW1vc3QgYGRlc3Ryb3koKWAgY2FsbCB0byBjaGVjayBmb3IgdGhlIGZsYWcgdGhlcmUuXG4gICAgICAgICAqIFJhdGlvbmFsZTogYGRlc3Ryb3koKWAgbXVzdCBvbmx5IGdldCBjYWxsZWQgb25jZS5cbiAgICAgICAgICovXG4gICAgICAgIGludGVyY2VwdChtZSwgJ2Rlc3Ryb3knLCBtZS5pc0Rlc3Ryb3llZENoZWNrLCBtZSk7XG5cbiAgICAgICAgbWUucmVtb3RlICYmIHNldFRpbWVvdXQobWUuaW5pdFJlbW90ZS5iaW5kKG1lKSwgMSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlkIGNvbmZpZyBnb3QgY2hhbmdlZC5cbiAgICAgKiBZb3UgY2FuIGR5bmFtaWNhbGx5IGNoYW5nZSBpbnN0YW5jZSBpZHMgaWYgbmVlZGVkLiBUaGV5IG5lZWQgdG8gc3RheSB1bmlxdWUgYXQgYW55IGdpdmVuIHBvaW50LlxuICAgICAqIFVzZSBjYXNlOiBlLmcuIGNvbXBvbmVudCBiYXNlZCBsaXN0cywgd2hlcmUgeW91IHdhbnQgdG8gcmUtdXNlIGl0ZW0gaW5zdGFuY2VzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWFuYWdlciA9IEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGhhc01hbmFnZXIpIHtcbiAgICAgICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG9sZFZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwW29sZFZhbHVlXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaGFzTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0gTmVvLmlkTWFwIHx8IHt9O1xuICAgICAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRqdXN0cyBhbGwgbWV0aG9kcyBpbnNpZGUgc3RhdGljIGRlbGF5YWJsZVxuICAgICAqL1xuICAgIGFwcGx5RGVsYXlhYmxlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yRGVsYXlhYmxlID0gbWUuY29uc3RydWN0b3IuZGVsYXlhYmxlLFxuICAgICAgICAgICAgZGVsYXlhYmxlICAgICA9IG1lLmRlbGF5YWJsZSA/IE5lby5tZXJnZSh7fSwgbWUuZGVsYXlhYmxlLCBjdG9yRGVsYXlhYmxlKSA6IGN0b3JEZWxheWFibGU7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVsYXlhYmxlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtYXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlcigpICAge21lW2tleV0gPSBuZXcgYnVmZmVyKG1lW2tleV0sICAgbWUsIHZhbHVlLnRpbWVyKX0sXG4gICAgICAgICAgICAgICAgICAgIGRlYm91bmNlKCkge21lW2tleV0gPSBuZXcgZGVib3VuY2UobWVba2V5XSwgbWUsIHZhbHVlLnRpbWVyKX0sXG4gICAgICAgICAgICAgICAgICAgIHRocm90dGxlKCkge21lW2tleV0gPSBuZXcgdGhyb3R0bGUobWVba2V5XSwgbWUsIHZhbHVlLnRpbWVyKX1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbWFwW3ZhbHVlLnR5cGVdPy4oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5aW5nIG92ZXJ3cml0ZXMgYW5kIGFkZGluZyBvdmVyd3JpdHRlbk1ldGhvZHMgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIGFwcGx5T3ZlcndyaXRlcyhjZmcpIHtcbiAgICAgICAgbGV0IG92ZXJ3cml0ZXMgPSBOZW8ubnMoY2ZnLmNsYXNzTmFtZSwgZmFsc2UsIE5lby5vdmVyd3JpdGVzKSxcbiAgICAgICAgICAgIGNscywgaXRlbTtcblxuICAgICAgICBpZiAob3ZlcndyaXRlcykge1xuICAgICAgICAgICAgLy8gQXBwbHkgYWxsIG1ldGhvZHNcbiAgICAgICAgICAgIGZvciAoaXRlbSBpbiBvdmVyd3JpdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc0Z1bmN0aW9uKG92ZXJ3cml0ZXNbaXRlbV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFscmVhZHkgZXhpc3Rpbmcgb25lc1xuICAgICAgICAgICAgICAgICAgICBjbHMgPSB0aGlzLnByb3RvdHlwZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xzW2l0ZW1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gb3ZlcndyaXR0ZW5NZXRob2RzXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMuY29uc3RydWN0b3Iub3ZlcndyaXR0ZW5NZXRob2RzW2l0ZW1dID0gY2xzW2l0ZW1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZ3MgdG8gcHJvdG90eXBlXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNmZywgb3ZlcndyaXRlcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IHZhbHVlIG9yIG9sZFZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGljTmFtZSkgPyBzdGF0aWNOYW1lIDogdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTdXBwb3J0ZWQgdmFsdWVzIGZvciAke25hbWV9IGFyZTpgLCAuLi52YWx1ZXMsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZm4gICAgICAgICAgICAgICBUaGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9yaWdpbk5hbWUgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCBpbnNpZGUgdGhlIG9yaWdpblNjb3BlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZSAgICAgICAgICAgIFRoZSBzY29wZSB0byBmaW5kIHRoZSBmdW5jdGlvbiBpbiBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9yaWdpblNjb3BlPXRoaXMgVGhlIHNjb3BlIHdoZXJlIHRoZSBmdW5jdGlvbiBpcyBsb2NhdGVkLlxuICAgICAqL1xuICAgIGJpbmRDYWxsYmFjayhmbiwgb3JpZ2luTmFtZSwgc2NvcGU9dGhpcywgb3JpZ2luU2NvcGU9dGhpcykge1xuICAgICAgICBpZiAoZm4gJiYgTmVvLmlzU3RyaW5nKGZuKSkge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHJlc29sdmVDYWxsYmFjayhmbiwgc2NvcGUpO1xuICAgICAgICAgICAgb3JpZ2luU2NvcGVbb3JpZ2luTmFtZV0gPSBoYW5kbGVyLmZuLmJpbmQoaGFuZGxlci5zY29wZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZyb20gd2l0aGluIGFuIG92ZXJ3cml0ZSwgYSBtZXRob2QgY2FuIGNhbGwgYSBwYXJlbnQgbWV0aG9kLCBieSB1c2luZyBjYWxsT3ZlcndyaXR0ZW4uXG4gICAgICpcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgIGFmdGVyU2V0SGVpZ2h0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAqICAgICAgICAvLyBkbyB0aGUgc3RhbmRhcmRcbiAgICAgKiAgICAgICAgdGhpcy5jYWxsT3ZlcndyaXR0ZW4oLi4uYXJndW1lbnRzKTtcbiAgICAgKiAgICAgICAgLy8gZG8geW91IG93biBzdHVmZlxuICAgICAqICAgIH1cbiAgICAgKlxuICAgICAqIFdlIGNyZWF0ZSBhbiBlcnJvciB0byBnZXQgdGhlIGNhbGxlci5uYW1lIGFuZCB0aGVuIHJ1biB0aGF0IG1ldGhvZCBvbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICogVGhpcyBpcyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIGVycm9yIHN0cnVjdHVyZSwgZS5nLiBhZnRlclNldEhlaWdodC5cbiAgICAgKlxuICAgICAqICAgICBFcnJvclxuICAgICAqICAgICAgICAgYXQgQmFzZS5jYWxsT3ZlcndyaXR0ZW4gKEJhc2UubWpzOjE3NjoyMSlcbiAgICAgKiAgICAgICAgIGF0IEJhc2UuYWZ0ZXJTZXRIZWlnaHQgKE92ZXJyaWRlcy5tanM6MTk6MjYpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGNhbGxPdmVyd3JpdHRlbiguLi5hcmdzKSB7XG4gICAgICAgIGxldCBzdGFjayAgICAgID0gbmV3IEVycm9yKCkuc3RhY2ssXG4gICAgICAgICAgICBtZXRob2ROYW1lID0gc3RhY2subWF0Y2goQmFzZS5tZXRob2ROYW1lUmVnZXgpWzFdO1xuXG4gICAgICAgIHRoaXMuX19wcm90b19fLmNvbnN0cnVjdG9yLm92ZXJ3cml0dGVuTWV0aG9kc1ttZXRob2ROYW1lXS5jYWxsKHRoaXMsIC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgSWRHZW5lcmF0b3IgdG8gY3JlYXRlIGFuIGlkIGlmIGEgc3RhdGljIG9uZSBpcyBub3QgZXhwbGljaXRseSBzZXQuXG4gICAgICogUmVnaXN0ZXJzIHRoZSBpbnN0YW5jZSB0byBtYW5hZ2VyLkluc3RhbmNlIGlmIHRoaXMgb25lIGlzIGFscmVhZHkgY3JlYXRlZCxcbiAgICAgKiBvdGhlcndpc2Ugc3RvcmVzIGl0IGluc2lkZSBhIHRtcCBtYXAuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgY3JlYXRlSWQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IElkR2VuZXJhdG9yLmdldElkKHRoaXMuZ2V0SWRLZXkoKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcbiAgICAgKiBhbmQgcmVtb3ZlcyBhbGwgb2JqZWN0IGVudHJpZXMgZnJvbSB0aGlzIGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS4jdGltZW91dElkcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpZClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG1lKVxuICAgICAgICB9IGVsc2UgaWYgKE5lby5pZE1hcCkge1xuICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFttZS5pZF1cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtZSwga2V5KS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIG11c3Qgbm90IGRlbGV0ZSB0aGUgY3VzdG9tIGRlc3Ryb3koKSBpbnRlcmNlcHRvclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdkZXN0cm95JyAmJiBrZXkgIT09ICdfaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtrZXldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXZSBkbyB3YW50IHRvIHByZXZlbnQgZGVsYXllZCBldmVudCBjYWxscyBhZnRlciBhbiBvYnNlcnZhYmxlIGluc3RhbmNlIGdvdCBkZXN0cm95ZWQuXG4gICAgICAgIGlmIChOZW8uaXNGdW5jdGlvbihtZS5maXJlKSkge1xuICAgICAgICAgICAgbWUuZmlyZSA9IE5lby5lbXB0eUZuXG4gICAgICAgIH1cblxuICAgICAgICBtZS5pc0Rlc3Ryb3llZCA9IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGluc2lkZSBjcmVhdGVJZCgpIGFzIHRoZSBkZWZhdWx0IHZhbHVlIHBhc3NlZCB0byB0aGUgSWRHZW5lcmF0b3IuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgYXMgbmVlZGVkLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm50eXBlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGtleSBvciB0aGUgc3RhdGljQ29uZmlnIG9iamVjdCBpdHNlbGYgaW4gY2FzZSBubyB2YWx1ZSBpcyBzZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Jba2V5XVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgZ2l2ZW4gbnR5cGUgZXhpc3RzIGluc2lkZSB0aGUgcHJvdG8gY2hhaW4sIGluY2x1ZGluZyB0aGUgdG9wIGxldmVsIGNsYXNzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG50eXBlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzTnR5cGUobnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubnR5cGVDaGFpbi5pbmNsdWRlcyhudHlwZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBvbkNvbnN0cnVjdGVkKCkgaXMgZG9uZVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb3JlLkJhc2Ujb25Db25zdHJ1Y3RlZCBvbkNvbnN0cnVjdGVkfVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhbGwgY2xhc3MgY29uZmlncyB0byB0aGlzIGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGluaXRDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pc0NvbmZpZ3VyaW5nID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCBtZS5tZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykpO1xuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgICAgICBtZS5pc0NvbmZpZ3VyaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG9lcyBnZXQgdHJpZ2dlcmVkIHdpdGggYSBkZWxheSB0byBlbnN1cmUgdGhhdCBOZW8ud29ya2VySWQgJiBOZW8ud29ya2VyLk1hbmFnZXIgYXJlIGRlZmluZWRcbiAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyB2aWEgcHJvbWlzZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2NsYXNzTmFtZSwgcmVtb3RlfSA9IG1lLFxuICAgICAgICAgICAge2N1cnJlbnRXb3JrZXJ9ICAgICA9IE5lbztcblxuICAgICAgICBpZiAoIW1lLnNpbmdsZXRvbiAmJiAhbWUuaXNNYWluVGhyZWFkQWRkb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIG1ldGhvZCBhY2Nlc3MgaXMgb25seSBmdW5jdGlvbmFsIGZvciBTaW5nbGV0b24gY2xhc3NlcyAnICsgY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nICYmIGN1cnJlbnRXb3JrZXIuaXNTaGFyZWRXb3JrZXIgJiYgIWN1cnJlbnRXb3JrZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpXG4gICAgICAgICAgICAgICAgfSwgbWUsIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVyY2VwdHMgZGVzdHJveSgpIGNhbGxzIHRvIGVuc3VyZSB0aGV5IHdpbGwgb25seSBnZXQgY2FsbGVkIG9uY2VcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0Rlc3Ryb3llZENoZWNrKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNEZXN0cm95ZWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgY3RvciA9IG1lLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVvLmFwcGx5Q2xhc3NDb25maWcgaGFzIG5vdCBiZWVuIHJ1biBvbiAnICsgbWUuY2xhc3NOYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgICAgIG1lLm9yaWdpbmFsQ29uZmlnID0gTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Li4uY3Rvci5jb25maWcsIC4uLmNvbmZpZ31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pc0NvbnN0cnVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBXZSBjYW4gb25seSBmaXJlIHRoZSBldmVudCBpbiBjYXNlIHRoZSBPYnNlcnZhYmxlIG1peGluIGlzIGluY2x1ZGVkLlxuICAgICAgICBtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSAmJiBtZS5maXJlKCdjb25zdHJ1Y3RlZCcsIG1lKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVwbGFjZSBzdHJpbmcgYmFzZWQgdmFsdWVzIGNvbnRhaW5pbmcgXCJAY29uZmlnOlwiIHdpdGggdGhlIG1hdGNoaW5nIGNvbmZpZyB2YWx1ZVxuICAgICAqIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGl0ZW1zXG4gICAgICovXG4gICAgcGFyc2VJdGVtQ29uZmlncyhpdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbnMsIG5zQXJyYXksIG5zS2V5LCBzeW1ib2xOcztcblxuICAgICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcyA9IFtpdGVtc11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtICYmIE9iamVjdC5lbnRyaWVzKGl0ZW0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3ModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnNBcnJheSA9IHZhbHVlLnN1YnN0cmluZyg4KS50cmltKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zS2V5ICAgPSBuc0FycmF5LnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnMgICAgICA9IE5lby5ucyhuc0FycmF5LCBmYWxzZSwgbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnNbbnNLZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIG5zS2V5LCBuc0FycmF5LmpvaW4oJy4nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sTnMgPSBOZW8ubnMobnNBcnJheSwgZmFsc2UsIG1lW2NvbmZpZ1N5bWJvbF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGNvbmZpZyBtaWdodCBub3QgYmUgcHJvY2Vzc2VkIHlldCwgZXNwZWNpYWxseSBmb3IgY29uZmlnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBlbmRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBjb25maWdTeW1ib2wgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbE5zICYmIE9iamVjdC5oYXNPd24oc3ltYm9sTnMsIG5zS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBzeW1ib2xOc1tuc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBuc1tuc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgc2V0KCksIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmUgY2FuIGFscmVhZHkgYmUgYXNzaWduZWQsXG4gICAgICogc28gdGhlIGhhc093blByb3BlcnR5KCkgY2hlY2sgd2lsbCByZXR1cm4gdHJ1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlQXNzaWduPWZhbHNlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlncyhmb3JjZUFzc2lnbj1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgbWVbZm9yY2VBc3NpZ25Db25maWdzXSA9IGZvcmNlQXNzaWduO1xuXG4gICAgICAgIC8vIFdlIGRvIG5vdCB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgMSBjb25maWcgY2FuIHJlbW92ZSBtb3JlIHRoYW4gMSBrZXkgKGJlZm9yZVNldFgsIGFmdGVyU2V0WClcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gVGhlIGhhc093blByb3BlcnR5IGNoZWNrIGlzIGludGVuZGVkIGZvciBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlXG4gICAgICAgICAgICAvLyA9PiB0aGV5IGNvdWxkIGFscmVhZHkgaGF2ZSBiZWVuIGFzc2lnbmVkIGluc2lkZSBhbiBhZnRlclNldC1tZXRob2RcbiAgICAgICAgICAgIGlmIChmb3JjZUFzc2lnbiB8fCAhbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXlzWzBdXSA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUtY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8ga2VlcCB0aGlzIG9uZSBmb3IgY29uZmlncywgd2hpY2ggZG8gbm90IHVzZSBnZXR0ZXJzIChubyB0cmFpbGluZyB1bmRlcnNjb3JlKVxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG5cbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIHNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKSB7XG4gICAgICAgIGxldCBvcmlnaW47XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMocmVtb3RlKS5mb3JFYWNoKChbd29ya2VyLCBtZXRob2RzXSkgPT4ge1xuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luID0gTmVvLndvcmtlcklkID09PSAnbWFpbicgPyBOZW8ud29ya2VyLk1hbmFnZXIgOiBOZW8uY3VycmVudFdvcmtlcjtcblxuICAgICAgICAgICAgICAgIG9yaWdpbi5zZW5kTWVzc2FnZSh3b3JrZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJSZW1vdGUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBtdWx0aXBsZSBjb25maWdzIGF0IG9uY2UsIGVuc3VyaW5nIHRoYXQgYWxsIGFmdGVyU2V0IG1ldGhvZHMgZ2V0IGFsbCBuZXcgYXNzaWduZWQgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcz17fVxuICAgICAqL1xuICAgIHNldCh2YWx1ZXM9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZXMgPSBtZS5zZXRGaWVsZHModmFsdWVzKTtcblxuICAgICAgICAvLyBJZiB0aGUgaW5pdGlhbCBjb25maWcgcHJvY2Vzc2luZyBpcyBzdGlsbCBydW5uaW5nLFxuICAgICAgICAvLyBmaW5pc2ggdGhpcyBvbmUgZmlyc3QgYmVmb3JlIGRyb3BwaW5nIG5ldyB2YWx1ZXMgaW50byB0aGUgY29uZmlnU3ltYm9sLlxuICAgICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy8yMjAxXG4gICAgICAgIGlmIChtZVtmb3JjZUFzc2lnbkNvbmZpZ3NdICE9PSB0cnVlICYmIE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKClcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgdmFsdWVzKTtcblxuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncyh0cnVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHdhbnQgdG8gYXNzaWduIGNsYXNzIGZpZWxkcyBmaXJzdCBhbmQgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgY29uZmlnIG9iamVjdCxcbiAgICAgKiBzbyB0aGF0IGFmdGVyU2V0KCksIGJlZm9yZUdldCgpIGFuZCBiZWZvcmVTZXQoKSBtZXRob2RzIGNhbiBnZXQgdGhlIG5ldyB2YWx1ZXMgcmlnaHQgYXdheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZXRGaWVsZHMoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWdOYW1lcyA9IG1lLmNvbnN0cnVjdG9yLmNvbmZpZztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjb25maWdOYW1lcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICFOZW8uaGFzUHJvcGVydHlTZXR0ZXIobWUsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZ1trZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBieSBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbmZpZyBleGlzdHMgYW5kIGdvdCBjaGFuZ2VkXG4gICAgICovXG4gICAgc2V0U3RhdGljQ29uZmlnKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHN0YXRpY0NvbmZpZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIGlmIChzdGF0aWNDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgc3RhdGljQ29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgdGltZW91dElkcyBpbnRlcm5hbGx5LCBzbyB0aGF0IGRlc3Ryb3koKSBjYW4gY2xlYXIgdGhlbSBpZiBuZWVkZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHRpbWVvdXQodGltZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBsZXQgdGltZW91dElkcyA9IHRoaXMuI3RpbWVvdXRJZHMsXG4gICAgICAgICAgICAgICAgdGltZW91dElkICA9IHNldFRpbWVvdXQoKCkgPT4ge3RpbWVvdXRJZHMuc3BsaWNlKHRpbWVvdXRJZHMuaW5kZXhPZih0aW1lb3V0SWQpLCAxKTsgcmVzb2x2ZSgpfSwgdGltZSk7XG5cbiAgICAgICAgICAgIHRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cbiAgICAgKiBgTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmJ1dHRvbi5CYXNlIChuZW8tYnV0dG9uLTEpXVwiYFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGFzc05hbWV9IChpZDogJHt0aGlzLmlkfSlgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIDxwPldpdGggdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxuICAgICAqIGBOZW8uY3JlYXRlKE5lby5jb2xsZWN0aW9uLkJhc2UpIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkge1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEJhc2UpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLkNvbXBhcmVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQ29tcGFyZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQ29tcGFyZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQ29tcGFyZSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yaW5nIHRoZSBjb21wYXJpc29uIG1ldGhvZCBuYW1lcyBieSBkYXRhIHR5cGVcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcFxuICAgICAqL1xuICAgIHN0YXRpYyBtYXAgPSB7XG4gICAgICAgIEFycmF5ICAgICAgOiAnY29tcGFyZUFycmF5cycsXG4gICAgICAgIERhdGUgICAgICAgOiAnY29tcGFyZURhdGVzJyxcbiAgICAgICAgRnVuY3Rpb24gICA6ICdjb21wYXJlRnVuY3Rpb25zJyxcbiAgICAgICAgTWFwICAgICAgICA6ICdjb21wYXJlTWFwcycsXG4gICAgICAgIE5lb0luc3RhbmNlOiAnY29tcGFyZU5lb0luc3RhbmNlcycsXG4gICAgICAgIE9iamVjdCAgICAgOiAnY29tcGFyZU9iamVjdHMnLFxuICAgICAgICBSZWdFeHAgICAgIDogJ2NvbXBhcmVSZWdFeHBzJyxcbiAgICAgICAgU2V0ICAgICAgICA6ICdjb21wYXJlU2V0cydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVBcnJheXMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMS5sZW5ndGggIT09IGl0ZW0yLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IFtpLCB2XSBvZiBpdGVtMS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKHYsIGl0ZW0yW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtEYXRlfSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlRGF0ZXMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIHJldHVybiBpdGVtMS52YWx1ZU9mKCkgPT09IGl0ZW0yLnZhbHVlT2YoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZW0xXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZUZ1bmN0aW9ucyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xLm5hbWUgIT09IGl0ZW0yLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW0xLnRvU3RyaW5nKCkgPT09IGl0ZW0yLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01hcH0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge01hcH0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZU1hcHMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMS5zaXplICE9PSBpdGVtMi5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwyO1xuXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBpdGVtMSkge1xuICAgICAgICAgICAgdmFsMiA9IGl0ZW0yLmdldChrZXkpO1xuXG4gICAgICAgICAgICBpZiAodmFsMiAhPT0gdmFsIHx8IHZhbDIgPT09IHVuZGVmaW5lZCAmJiAhaXRlbTIuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZU5lb0luc3RhbmNlcyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0xLmlkID09PSBpdGVtMi5pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtMVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlT2JqZWN0cyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0xKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGl0ZW0yKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGl0ZW0xKSB7XG4gICAgICAgICAgICBpZiAoIUNvbXBhcmUuaXNFcXVhbChpdGVtMVtrZXldLCBpdGVtMltrZXldKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZVJlZ0V4cHMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIHJldHVybiBpdGVtMS50b1N0cmluZygpID09PSBpdGVtMi50b1N0cmluZygpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZXR9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtTZXR9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVTZXRzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgaXRlbTEpIHtcbiAgICAgICAgICAgIGlmICghaXRlbTIuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFcXVhbChpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xID09PSBpdGVtMikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlMSA9IE5lby50eXBlT2YoaXRlbTEpLFxuICAgICAgICAgICAgdHlwZTIgPSBOZW8udHlwZU9mKGl0ZW0yKTtcblxuICAgICAgICBpZiAodHlwZTEgIT09IHR5cGUyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wYXJlLm1hcFt0eXBlMV0pIHtcbiAgICAgICAgICAgIHJldHVybiBDb21wYXJlW0NvbXBhcmUubWFwW3R5cGUxXV0oaXRlbTEsIGl0ZW0yKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWxsIG90aGVyIHR5cGVzXG4gICAgICAgIHJldHVybiBpdGVtMSA9PT0gaXRlbTJcbiAgICB9XG59XG5cbkNvbXBhcmUgPSBOZW8uc2V0dXBDbGFzcyhDb21wYXJlKTtcblxuLy8gYWxpYXNcbk5lby5pc0VxdWFsID0gQ29tcGFyZS5pc0VxdWFsO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlO1xuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdldHMgdXNlZCBieSBjb3JlLkJhc2UsIHNvIGl0IGNhbiBub3QgZXh0ZW5kIGl0LlxuICogSXQgY291bGQgZ2V0IHNpbXBsaWZpZWQgdG8ganVzdCBiZWluZyBhbiBvYmplY3QgKG5lZWRzIHRvIG1hbnVhbGx5IGdldCBwdXQgaW50byB0aGUgTmVvIG5hbWVzcGFjZSBpbiB0aGlzIGNhc2UpLlxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIElkR2VuZXJhdG9yIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLklkR2VuZXJhdG9yJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaWQtZ2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhc2U9J25lby0nXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlOiAnbmVvLScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249J3RydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcblxuICAgICAgICAvLyBhbGlhc1xuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoSWRHZW5lcmF0b3IpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCB7cmVzb2x2ZUNhbGxiYWNrfSBmcm9tICcuLi91dGlsL0Z1bmN0aW9uLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLk9ic2VydmFibGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuT2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSBldmVudElkIG51bGwgaW4gY2FzZSBhbiBvYmplY3QgZ2V0cyBwYXNzZWQgYXMgdGhlIG5hbWUgKG11bHRpcGxlIGlkcylcbiAgICAgKi9cbiAgICBhZGRMaXN0ZW5lcihuYW1lLCBvcHRzLCBzY29wZSwgZXZlbnRJZCwgZGF0YSwgb3JkZXIpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsYXkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBldmVudElkT2JqZWN0ID0gdHlwZW9mIGV2ZW50SWQgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgbmFtZU9iamVjdCAgICA9IHR5cGVvZiBuYW1lICAgID09PSAnb2JqZWN0JyxcbiAgICAgICAgICAgIG9uY2UgICAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIG9wdHNUeXBlICAgICAgPSB0eXBlb2Ygb3B0cyxcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogbGV0IHVzIHN1cHBvcnQgdGhlIGZvbGxvd2luZyBmb3JtYXQgdG9vOlxuICAgICAgICAgKlxuICAgICAgICAgKiBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAqICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKVxuICAgICAgICAgKiB9LCBtZSwge29uY2U6IHRydWV9KVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGV2ZW50SWRPYmplY3QgJiYgb3B0c1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2ZW50SWQuZm4gPSBvcHRzO1xuICAgICAgICAgICAgb3B0cyAgICAgPSBldmVudElkO1xuICAgICAgICAgICAgb3B0c1R5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICAgIGV2ZW50SWQgID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnZGVsYXknKSkge1xuICAgICAgICAgICAgICAgIGRlbGF5ID0gbmFtZS5kZWxheTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5kZWxheVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eSgnb25jZScpKSB7XG4gICAgICAgICAgICAgICAgb25jZSA9IG5hbWUub25jZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5vbmNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdvcmRlcicpKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIgPSBuYW1lLm9yZGVyO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLm9yZGVyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdzY29wZScpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwge2RlbGF5LCBvbmNlLCBvcmRlciwgc2NvcGUsIC4uLnZhbHVlfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihrZXksIHtkZWxheSwgZm46IHZhbHVlLCBvbmNlLCBvcmRlciwgc2NvcGV9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAob3B0c1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkZWxheSAgICA9IGRlbGF5ICAgfHwgb3B0cy5kZWxheTtcbiAgICAgICAgICAgIGV2ZW50SWQgID0gZXZlbnRJZCB8fCBvcHRzLmV2ZW50SWQ7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHMuZm47XG4gICAgICAgICAgICBvbmNlICAgICA9IG9uY2UgICAgfHwgb3B0cy5vbmNlO1xuICAgICAgICAgICAgb3JkZXIgICAgPSBvcmRlciAgIHx8IG9wdHMub3JkZXI7XG4gICAgICAgICAgICBzY29wZSAgICA9IHNjb3BlICAgfHwgb3B0cy5zY29wZVxuICAgICAgICB9IGVsc2UgaWYgKG9wdHNUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHNcbiAgICAgICAgfSBlbHNlIGlmIChvcHRzVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkTGlzdGVuZXIgY2FsbDogJyArIG5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnID0ge2ZuOiBsaXN0ZW5lciwgaWQ6IGV2ZW50SWQgfHwgTmVvLmdldElkKCdldmVudCcpfTtcblxuICAgICAgICAgICAgaWYgKGRhdGEpICAgICAge2V2ZW50Q29uZmlnLmRhdGEgICA9IGRhdGF9XG4gICAgICAgICAgICBpZiAoZGVsYXkgPiAwKSB7ZXZlbnRDb25maWcuZGVsYXkgID0gZGVsYXl9XG4gICAgICAgICAgICBpZiAob25jZSkgICAgICB7ZXZlbnRDb25maWcub25jZSAgID0gb25jZX1cbiAgICAgICAgICAgIGlmIChzY29wZSkgICAgIHtldmVudENvbmZpZy5zY29wZSAgPSBzY29wZX1cblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzPy5bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcuaWQgPT09IGV2ZW50SWQgfHwgKGNmZy5mbiA9PT0gbGlzdGVuZXIgJiYgY2ZnLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOicsIG5hbWUsIG1lKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yZGVyID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50Q29uZmlnLmlkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhlIHBhc3NlZCBmdW5jdGlvbiwgb3IgYSBmdW5jdGlvbiBieSAqbmFtZSogd2hpY2ggZXhpc3RzIGluIHRoZSBwYXNzZWQgc2NvcGUnc1xuICAgICAqIG9yIHRoaXMgY29tcG9uZW50J3Mgb3duZXJzaGlwIGNoYWluLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBBIGZ1bmN0aW9uLCBvciB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlICAgICAgIFRoZSBzY29wZSB0byBmaW5kIHRoZSBmdW5jdGlvbiBpbiBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyAgICAgICAgIEFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBjYWxsYmFjayhmbiwgc2NvcGU9dGhpcywgYXJncykge1xuICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSByZXNvbHZlQ2FsbGJhY2soZm4sIHNjb3BlKTtcbiAgICAgICAgICAgIGhhbmRsZXIuZm4uYXBwbHkoaGFuZGxlci5zY29wZSwgYXJncylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGhlbHBlciBtZXRob2QgZm9yIGV2ZW50cyB3aGljaCB1c2UgdGhlIGRlbGF5IG9wdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAgICAgKi9cbiAgICBkZWxheWVkQ2FsbGJhY2soY2IsIGFyZ3MsIGRlbGF5KSB7XG4gICAgICAgIHRoaXMudGltZW91dChkZWxheSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjYi5mbi5hcHBseShjYi5zY29wZSwgYXJncylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIGZpcmUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcbiAgICAgICAgICAgIGRlbGF5LCBoYW5kbGVyLCBoYW5kbGVycywgaSwgbGVuO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBoYW5kbGVycyA9IFsuLi5saXN0ZW5lcnNbbmFtZV1dO1xuICAgICAgICAgICAgbGVuICAgICAgPSBoYW5kbGVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcbiAgICAgICAgICAgICAgICBkZWxheSAgID0gaGFuZGxlci5kZWxheTtcblxuICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgZnVuY3Rpb24gbmFtZSBvbiB0aGUgc2NvcGUgKG9yIG1lKSwgb3IsIGlmIGl0IHN0YXJ0cyB3aXRoICd1cC4nXG4gICAgICAgICAgICAgICAgLy8gbG9vayBpbiB0aGUgb3duZXJzaGlwIGhpZXJhcmNoeSBmcm9tIG1lLlxuICAgICAgICAgICAgICAgIGNvbnN0IGNiID0gcmVzb2x2ZUNhbGxiYWNrKGhhbmRsZXIuZm4sIGhhbmRsZXIuc2NvcGUgfHwgbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBsaXN0ZW5lciBpZiB0aGUgc2NvcGUgbm8gbG9uZ2VyIGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmIChjYi5zY29wZSAmJiAhY2Iuc2NvcGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGxpc3RlbmVyc1tuYW1lXSwgaGFuZGxlcilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lLnN1c3BlbmRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdCBldmVudCBmb3JtYXQuIEluamVjdCBmaXJlciByZWZlcmVuY2UgaW4gYXMgJ3NvdXJjZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBOZW8uaXNPYmplY3QoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzWzBdLnNvdXJjZSA9IG1lLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbGlzdGVuZXIgaWYgaXQgaGFzIHRoZSBvbmNlIGZsYWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIub25jZSAmJiBOZW9BcnJheS5yZW1vdmUobGlzdGVuZXJzW25hbWVdLCBoYW5kbGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc051bWJlcihkZWxheSkgJiYgZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuZGVsYXllZENhbGxiYWNrKGNiLCBoYW5kbGVyLmRhdGEgPyBhcmdzLmNvbmNhdChoYW5kbGVyLmRhdGEpIDogYXJncywgZGVsYXkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiLmZuLmFwcGx5KGNiLnNjb3BlLCBoYW5kbGVyLmRhdGEgPyBhcmdzLmNvbmNhdChoYW5kbGVyLmRhdGEpIDogYXJncylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHByb3RvID0gbWUuX19wcm90b19fLFxuICAgICAgICAgICAgY3RvciAgPSBwcm90by5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzID0gY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzXG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnM7XG5cbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChsaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gey4uLmxpc3RlbmVyc31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90bz8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgY3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICBpZiAoY3Rvci5vYnNlcnZhYmxlICYmICFjdG9yLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvciwge1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lciAgIDogbWUuYWRkTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIGZpcmUgICAgICAgICAgOiBtZS5maXJlLFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge30sXG4gICAgICAgICAgICAgICAgICAgIG9uICAgICAgICAgICAgOiBtZS5vbixcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IG1lLnJlbW92ZUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICB1biAgICAgICAgICAgIDogbWUudW5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fX1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIGFkZExpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29yZGVyXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGV2ZW50SWRcbiAgICAgKi9cbiAgICBvbiguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKC4uLmFyZ3MpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlcmUgYXJlIGRpZmZlcmVudCBzeW50YXgncyBob3cgeW91IGNhbiB1c2UgdGhpcyBtZXRob2QuXG4gICAgICogVXNpbmcgdGhlIGV2ZW50SWQ6XG4gICAgICogYGBgXG4gICAgICogdGhpcy5yZW1vdmVMaXN0ZW5lcignY2hhbmdlJywgJ25lby1ldmVudC03Jyk7XG4gICAgICogYGBgXG4gICAgICogUGFzc2luZyB0aGUgaGFuZGxlciBtZXRob2Q6XG4gICAgICogYGBgXG4gICAgICogdGhpcy5yZW1vdmVMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkNoYW5nZSwgdGhpcyk7XG4gICAgICogYGBgXG4gICAgICogUGFzc2luZyBhbiBvYmplY3Q6XG4gICAgICogYGBgXG4gICAgICogbWUuZmllbGQudW4oe1xuICAgICAqICAgICBjaGFuZ2UgICAgICAgICAgICAgICAgICAgIDogbWUub25GaWVsZENoYW5nZSxcbiAgICAgKiAgICAgY2hhbmdlQ2xlYXJUb09yaWdpbmFsVmFsdWU6IG1lLm9uRmllbGRDaGFuZ2UsXG4gICAgICogICAgIHNjb3BlICAgICAgICAgICAgICAgICAgICAgOiBtZVxuICAgICAqIH0pO1xuICAgICAqIGBgYFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IFtzY29wZV1cbiAgICAgKi9cbiAgICByZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudElkLCBzY29wZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lciwgbGlzdGVuZXJzLCBtYXRjaDtcblxuICAgICAgICBpZiAoTmVvLmlzRnVuY3Rpb24oZXZlbnRJZCkpIHtcbiAgICAgICAgICAgIG1lLnJlbW92ZUxpc3RlbmVyKHtbbmFtZV06IGV2ZW50SWQsIHNjb3BlfSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QobmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLnNjb3BlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnNba2V5XSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpICAgICAgICAgPSAwO1xuICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmZuLm5hbWUgPT09IChOZW8uaXNTdHJpbmcodmFsdWUpID8gdmFsdWUgOiB2YWx1ZS5uYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuc2NvcGUgICA9PT0gc2NvcGVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgbWF0Y2ggICAgID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChldmVudENvbmZpZywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Q29uZmlnLmlkID09PSBldmVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA9IGlkeFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHN1c3BlbmRMaXN0ZW5lcnM6IGZ1bmN0aW9uKHF1ZXVlKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gcmVzdW1lTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciByZW1vdmVMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKi9cbiAgICB1biguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhPYnNlcnZhYmxlKTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5VdGlsXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFV0aWwgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZ2V4IHRvIHJlbW92ZSBjYW1lbCBjYXNlIHN5bnRheFxuICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZGVjYW1lbFJlZ0V4PS8oW2Etel0pKFtBLVpdKS9nXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjYW1lbFJlZ0V4ID0gLyhbYS16XSkoW0EtWl0pL2dcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuVXRpbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3JlLXV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlc1xuICAgICAqL1xuICAgIHN0YXRpYyBiaW5kTWV0aG9kcyhzY29wZSwgdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNjb3BlW3ZhbHVlXSA9IHNjb3BlW3ZhbHVlXS5iaW5kKHNjb3BlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHlsZXMgc3RyaW5nIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlT2JqZWN0KHN0cmluZykge1xuICAgICAgICBsZXQgcGFydHM7XG5cbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXG5cbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgYnkgdGhlIGZpcnN0IGNvbG9uIG9ubHlcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlRmxvYXQoeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG9ialtwYXJ0c1swXV0gPSBwYXJ0c1sxXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9LCB7fSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0eWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3R5bGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIC1sb3dlcmNhc2UuXG4gICAgICogRG9lcyBub3QgdG91Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBsb3dlcmNhc2Ugb3V0cHV0XG4gICAgICovXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoVXRpbC5kZWNhbWVsUmVnRXgsICckMS0kMicpLnRvTG93ZXJDYXNlKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgbm90IHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fFN0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbidcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci4gUmV0dXJucyBmYWxzZSBmb3Igbm9uLWZpbml0ZSBudW1iZXJzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8uY29uc3RydWN0b3I/Lm5hbWUgPT09ICdPYmplY3QnIHx8IGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBuZW8gZGF0YSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNSZWNvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gJ1JlY29yZCcgfHwgZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZXJhYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBsZW47XG5cbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYWJsZS5zcGxpdCgnJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbilcbiAgICB9XG59XG5cblV0aWwgPSBOZW8uc2V0dXBDbGFzcyhVdGlsKTtcblxuLy8gYWxpYXNlc1xuTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgIGJpbmRNZXRob2RzICAgICAgOiAnYmluZE1ldGhvZHMnLFxuICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXG4gICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICBpc0VtcHR5ICAgICAgICAgIDogJ2lzRW1wdHknLFxuICAgIGlzRnVuY3Rpb24gICAgICAgOiAnaXNGdW5jdGlvbicsXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXG4gICAgaXNSZWNvcmQgICAgICAgICA6ICdpc1JlY29yZCcsXG4gICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xufSwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcGFyZSAgICAgZnJvbSAnLi9Db21wYXJlLm1qcyc7XG5pbXBvcnQgSWRHZW5lcmF0b3IgZnJvbSAnLi9JZEdlbmVyYXRvci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgIGZyb20gJy4vVXRpbC5tanMnO1xuXG5leHBvcnQge0Jhc2UsIENvbXBhcmUsIElkR2VuZXJhdG9yLCBPYnNlcnZhYmxlLCBVdGlsfTtcbiIsImltcG9ydCBCYXNlICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRGVsdGFVcGRhdGVzIGZyb20gJy4vbWl4aW4vRGVsdGFVcGRhdGVzLm1qcyc7XG5pbXBvcnQgRG9tVXRpbHMgICAgIGZyb20gJy4vRG9tVXRpbHMubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgUmVjdGFuZ2xlICAgIGZyb20gJy4uL3V0aWwvUmVjdGFuZ2xlLm1qcyc7XG5pbXBvcnQgU3RyaW5nVXRpbCAgIGZyb20gJy4uL3V0aWwvU3RyaW5nLm1qcyc7XG5cbmNvbnN0XG4gICAgZG9QcmV2ZW50RGVmYXVsdCA9IGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpLFxuICAgIGZpbHRlclRhYmJhYmxlICAgPSBlID0+ICFlLmNsYXNzTGlzdC5jb250YWlucygnbmVvLWZvY3VzLXRyYXAnKSAmJiBEb21VdGlscy5pc1RhYmJhYmxlKGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfU0tJUCxcbiAgICBsZW5ndGhSRSAgICAgICAgID0gL15cXGQrXFx3KyQvLFxuXG4gICAgY2FwdHVyZVBhc3NpdmUgPSB7XG4gICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9LFxuXG4gICAgZm9udFNpemVQcm9wcyA9IFtcbiAgICAgICAgJ2ZvbnQtZmFtaWx5JyxcbiAgICAgICAgJ2ZvbnQta2VybmluZycsXG4gICAgICAgICdmb250LXNpemUnLFxuICAgICAgICAnZm9udC1zaXplLWFkanVzdCcsXG4gICAgICAgICdmb250LXN0cmV0Y2gnLFxuICAgICAgICAnZm9udC1zdHlsZScsXG4gICAgICAgICdmb250LXdlaWdodCcsXG4gICAgICAgICdsZXR0ZXItc3BhY2luZycsXG4gICAgICAgICdsaW5lLWhlaWdodCcsXG4gICAgICAgICd0ZXh0LWRlY29yYXRpb24nLFxuICAgICAgICAndGV4dC10cmFuc2Zvcm0nLFxuICAgICAgICAnd29yZC1icmVhaydcbiAgICBdLFxuXG4gICAgbW9kaWZpZXJLZXlzID0ge1xuICAgICAgICBTaGlmdCAgIDogMSxcbiAgICAgICAgQWx0ICAgICA6IDEsXG4gICAgICAgIE1ldGEgICAgOiAxLFxuICAgICAgICBDb250cm9sIDogMVxuICAgIH07XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYWluLkRvbUFjY2Vzc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBEb21BY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLkRvbUFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4uRG9tQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnREZWx0YXM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudERlbHRhczogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnREZWx0YXNQZXIyNTBtcz0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50RGVsdGFzUGVyMjUwbXM6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50VXBkYXRlcz0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50VXBkYXRlczogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBtaXhpbnM9W0RlbHRhVXBkYXRlcywgT2JzZXJ2YWJsZV1cbiAgICAgICAgICovXG4gICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgRGVsdGFVcGRhdGVzLFxuICAgICAgICAgICAgT2JzZXJ2YWJsZVxuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAnYWRkU2NyaXB0JyxcbiAgICAgICAgICAgICAgICAnYWxpZ24nLFxuICAgICAgICAgICAgICAgICdhcHBseUJvZHlDbHMnLFxuICAgICAgICAgICAgICAgICdibHVyJyxcbiAgICAgICAgICAgICAgICAnZXhlY0NvbW1hbmQnLFxuICAgICAgICAgICAgICAgICdmb2N1cycsXG4gICAgICAgICAgICAgICAgJ2dldEF0dHJpYnV0ZXMnLFxuICAgICAgICAgICAgICAgICdnZXRCb3VuZGluZ0NsaWVudFJlY3QnLFxuICAgICAgICAgICAgICAgICdnZXRTY3JvbGxpbmdEaW1lbnNpb25zJyxcbiAgICAgICAgICAgICAgICAnbWVhc3VyZScsXG4gICAgICAgICAgICAgICAgJ21vbml0b3JBdXRvR3JvdycsXG4gICAgICAgICAgICAgICAgJ21vbml0b3JBdXRvR3Jvd0hhbmRsZXInLFxuICAgICAgICAgICAgICAgICduYXZpZ2F0ZScsXG4gICAgICAgICAgICAgICAgJ25hdmlnYXRlVG8nLFxuICAgICAgICAgICAgICAgICdzY3JvbGxCeScsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbEludG9WaWV3JyxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsVG8nLFxuICAgICAgICAgICAgICAgICdzY3JvbGxUb1RhYmxlUm93JyxcbiAgICAgICAgICAgICAgICAnc2VsZWN0Tm9kZScsXG4gICAgICAgICAgICAgICAgJ3NldEJvZHlDbHMnLFxuICAgICAgICAgICAgICAgICdzZXRTdHlsZScsXG4gICAgICAgICAgICAgICAgJ3N5bmNNb2RhbE1hc2snLFxuICAgICAgICAgICAgICAgICd0cmFwRm9jdXMnLFxuICAgICAgICAgICAgICAgICd3aW5kb3dTY3JvbGxUbydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbmRlckNvdW50RGVsdGFzXz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJDb3VudERlbHRhc186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVm9pZCBhdHRyaWJ1dGVzIGluc2lkZSBodG1sIHRhZ3NcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHZvaWRBdHRyaWJ1dGVzXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHZvaWRBdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICAgICAncmVxdWlyZWQnXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGxvZ0RlbHRhc0ludGVydmFsSWQ9MFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBsb2dEZWx0YXNJbnRlcnZhbElkID0gMFxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGdldCBtb2RhbE1hc2soKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5fbW9kYWxNYXNrKSB7XG4gICAgICAgICAgICBtZS5fbW9kYWxNYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtZS5fbW9kYWxNYXNrLmNsYXNzTmFtZSA9ICduZW8tZGlhbG9nLW1vZGFsLW1hc2snO1xuICAgICAgICAgICAgbWUuX21vZGFsTWFzay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb1ByZXZlbnREZWZhdWx0LCB7Y2FwdHVyZSA6IHRydWV9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lLl9tb2RhbE1hc2tcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnJlbmRlckNvdW50RGVsdGFzKSB7XG4gICAgICAgICAgICBtZS5yZW5kZXJDb3VudERlbHRhcyA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmluaXRHbG9iYWxMaXN0ZW5lcnMoKTtcblxuICAgICAgICAvLyBTZXQgdXAgb3VyIGFsaWduaW5nIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoaW5ncyBjaGFuZ2Ugd2hpY2ggbWF5XG4gICAgICAgIC8vIG1lYW4gdGhhdCBhbGlnbm1lbnRzIG5lZWQgdG8gYmUgdXBkYXRlZC5cbiAgICAgICAgbWUuc3luY0FsaWducyA9IG1lLnN5bmNBbGlnbnMuYmluZChtZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYWxpZ25TcGVjXG4gICAgICovXG4gICAgYWRkQWxpZ25lZChhbGlnblNwZWMpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG1lICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtpZH0gICAgICAgICAgICAgICAgID0gYWxpZ25TcGVjLFxuICAgICAgICAgICAgYWxpZ25zICAgICAgICAgICAgICAgPSBtZS5fYWxpZ25zIHx8IChtZS5fYWxpZ25zID0gbmV3IE1hcCgpKSxcbiAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyICAgICAgID0gbWUuX2FsaWduUmVzaXplT2JzZXJ2ZXIgfHwgKG1lLl9hbGlnblJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKG1lLnN5bmNBbGlnbnMpKSxcbiAgICAgICAgICAgIHtjb25zdHJhaW5Ub0VsZW1lbnR9ID0gYWxpZ25TcGVjO1xuXG4gICAgICAgIC8vIFNldCB1cCBsaXN0ZW5lcnMgd2hpY2ggbW9uaXRvciBmb3IgY2hhbmdlc1xuICAgICAgICBpZiAoIWFsaWducy5oYXMoaWQpKSB7XG4gICAgICAgICAgICAvLyBSZWFsaWduIHdoZW4gdGFyZ2V0J3MgbGF5b3V0LWNvbnRyb2xsaW5nIGVsZW1lbnQgY2hhbmdlcyBzaXplXG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGFsaWduU3BlYy5vZmZzZXRQYXJlbnQpO1xuXG4gICAgICAgICAgICAvLyBSZWFsaWduIHdoZW4gYWxpZ24gdG8gdGFyZ2V0IGNoYW5nZXMgc2l6ZVxuICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShhbGlnblNwZWMudGFyZ2V0RWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIFJlYWxpZ24gd2hlbiBjb25zdHJhaW5pbmcgZWxlbWVudCBjaGFuZ2VzIHNpemVcbiAgICAgICAgICAgIGlmIChjb25zdHJhaW5Ub0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGNvbnN0cmFpblRvRWxlbWVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWUuaGFzRG9jdW1lbnRTY3JvbGxMaXN0ZW5lcikge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgbWUuc3luY0FsaWducywge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmhhc0RvY3VtZW50U2Nyb2xsTGlzdGVuZXIgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLmRvY3VtZW50TXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgbWUuZG9jdW1lbnRNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobWUub25Eb2N1bWVudE11dGF0aW9uLmJpbmQobWUpKTtcblxuICAgICAgICAgICAgbWUuZG9jdW1lbnRNdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlICA6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBhbGlnbnMuc2V0KGlkLCBhbGlnblNwZWMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEuYXN5bmNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkYXRhLmRlZmVyPWZhbHNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5zcmM9dHJ1ZV1cbiAgICAgKi9cbiAgICBhZGRTY3JpcHQoZGF0YSkge1xuICAgICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KCdhc3luYycpKSB7XG4gICAgICAgICAgICBkYXRhLmFzeW5jID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihzY3JpcHQsIGRhdGEpO1xuXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcmVuZGVyQ291bnREZWx0YXMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRSZW5kZXJDb3VudERlbHRhcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7bG9nRGVsdGFzSW50ZXJ2YWxJZH0gPSBtZSxcbiAgICAgICAgICAgIG5vZGU7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobG9nRGVsdGFzSW50ZXJ2YWxJZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG1lLmxvZ0RlbHRhc0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmVvLWRlbHRhLXVwZGF0ZXMnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcobWUuY291bnREZWx0YXNQZXIyNTBtcyAqIDQpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS5jb3VudERlbHRhc1BlcjI1MG1zID0gMFxuICAgICAgICAgICAgICAgIH0sIDI1MClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZ0RlbHRhc0ludGVydmFsSWQgJiYgY2xlYXJJbnRlcnZhbChsb2dEZWx0YXNJbnRlcnZhbElkKTtcbiAgICAgICAgICAgIG1lLmxvZ0RlbHRhc0ludGVydmFsID0gMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBhbGlnbihkYXRhKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtjb25zdHJhaW5Ub30gPSBkYXRhLFxuICAgICAgICAgICAgc3ViamVjdCAgICAgICA9IGRhdGEuc3ViamVjdCA9IG1lLmdldEVsZW1lbnQoZGF0YS5pZCksXG4gICAgICAgICAgICB7c3R5bGV9ICAgICAgID0gc3ViamVjdCxcbiAgICAgICAgICAgIGFsaWduICAgICAgICAgPSB7Li4uZGF0YX0sXG4gICAgICAgICAgICBsYXN0QWxpZ24gICAgID0gbWUuX2FsaWducz8uZ2V0KGRhdGEuaWQpO1xuXG4gICAgICAgIGlmIChsYXN0QWxpZ24pIHtcbiAgICAgICAgICAgIHN1YmplY3QuY2xhc3NMaXN0LnJlbW92ZShgbmVvLWFsaWduZWQtJHtsYXN0QWxpZ24ucmVzdWx0LnBvc2l0aW9ufWApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWxlYXNlIGFueSBjb25zdHJhaW5UbyBvciBtYXRjaFNpemUgc2l6aW5nIHdoaWNoIG1heSBoYXZlIGJlZW4gaW1wb3NlZFxuICAgICAgICAvLyBieSBhIHByZXZpb3VzIGFsaWduIGNhbGwuXG4gICAgICAgIG1lLnJlc2V0RGltZW5zaW9ucyhhbGlnbik7XG5cbiAgICAgICAgLy8gVGhlIFJlY3RhbmdsZSdzIGFsaWduIHNwZWMgdGFyZ2V0IGFuZCBjb25zdHJhaW5UbyBtdXN0IGJlIFJlY3RhbmdsZXNcbiAgICAgICAgYWxpZ24udGFyZ2V0ID0gbWUuZ2V0Q2xpcHBlZFJlY3Qoe2lkIDogZGF0YS50YXJnZXRFbGVtZW50ID0gbWUuZ2V0RWxlbWVudE9yQm9keShkYXRhLnRhcmdldCl9KTtcblxuICAgICAgICBpZiAoIWFsaWduLnRhcmdldCkge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSBDb21wb25lbnQgd2l0aCBpZCBkYXRhLmlkIHRvIGhpZGRlbiA6IHRydWVcbiAgICAgICAgICAgIHJldHVybiBOZW8ud29ya2VyLkFwcC5zZXRDb25maWdzKHtpZDogZGF0YS5pZCwgaGlkZGVuOiB0cnVlfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEub2Zmc2V0UGFyZW50ID0gZGF0YS50YXJnZXRFbGVtZW50Lm9mZnNldFBhcmVudDtcblxuICAgICAgICBpZiAoY29uc3RyYWluVG8pIHtcbiAgICAgICAgICAgIGFsaWduLmNvbnN0cmFpblRvID0gbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHtpZCA6IGRhdGEuY29uc3RyYWluVG9FbGVtZW50ID0gbWUuZ2V0RWxlbWVudE9yQm9keShjb25zdHJhaW5Ubyl9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGFuIGFsaWduZWQgY2xvbmUgb2YgbXlSZWN0IGFsaWduZWQgYWNjb3JkaW5nIHRvIHRoZSBhbGlnbiBvYmplY3RcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG15UmVjdCA9IG1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdChkYXRhKSxcbiAgICAgICAgICAgIHJlc3VsdCA9IGRhdGEucmVzdWx0ID0gbXlSZWN0LmFsaWduVG8oYWxpZ24pO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgIHRvcCAgICAgICA6IDAsXG4gICAgICAgICAgICBsZWZ0ICAgICAgOiAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtIDogYHRyYW5zbGF0ZSgke3Jlc3VsdC54fXB4LCR7cmVzdWx0Lnl9cHgpYFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0LndpZHRoICE9PSBteVJlY3Qud2lkdGgpIHtcbiAgICAgICAgICAgIHN0eWxlLndpZHRoID0gYCR7cmVzdWx0LndpZHRofXB4YFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5oZWlnaHQgIT09IG15UmVjdC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHN0eWxlLmhlaWdodCA9IGAke3Jlc3VsdC5oZWlnaHR9cHhgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBQbGFjZSBib3ggc2hhZG93IGF0IGNvcnJlY3QgZWRnZVxuICAgICAgICBzdWJqZWN0LmNsYXNzTGlzdC5hZGQoYG5lby1hbGlnbmVkLSR7cmVzdWx0LnBvc2l0aW9ufWApO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIGFuIGFsaWdubWVudCB0byBiZSBrZXB0IGluIHN5bmNcbiAgICAgICAgbWUuYWRkQWxpZ25lZChkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5jbHNcbiAgICAgKi9cbiAgICBhcHBseUJvZHlDbHMoZGF0YSkge1xuICAgICAgICBsZXQgY2xzID0gZGF0YS5jbHMgfHwgW107XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCguLi5jbHMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYmx1cigpIG9uIGEgbm9kZSBmb3IgYSBnaXZlbiBkb20gbm9kZSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBibHVyKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KGRhdGEuaWQpPy5ibHVyKCk7XG4gICAgICAgIHJldHVybiB7aWQ6IGRhdGEuaWR9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5jb21tYW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGV4ZWNDb21tYW5kKGRhdGEpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoZGF0YS5jb21tYW5kKTtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBmb2N1cygpIG9uIGEgbm9kZSBmb3IgYSBnaXZlbiBkb20gbm9kZSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLmNoaWxkcmVuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIGZvY3VzKHtjaGlsZHJlbiwgaWR9KSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50KGlkKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgLy8gVGhlIGNoaWxkcmVuIHByb3BlcnR5IG1lYW5zIGZvY3VzIGlubmVyIGVsZW1lbnRzIGlmIHBvc3NpYmxlLlxuICAgICAgICAgICAgaWYgKCFEb21VdGlscy5pc0ZvY3VzYWJsZShub2RlKSAmJiBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIC8vIHF1ZXJ5IGZvciB0aGUgZmlyc3QgZm9jdXNhYmxlIGRlc2NlbmRlbnRcbiAgICAgICAgICAgICAgICBub2RlID0gRG9tVXRpbHMucXVlcnkobm9kZSwgRG9tVXRpbHMuaXNGb2N1c2FibGUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5mb2N1cygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc051bWJlcihub2RlLnNlbGVjdGlvblN0YXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNlbGVjdGlvblN0YXJ0ID0gbm9kZS5zZWxlY3Rpb25FbmQgPSBub2RlLnZhbHVlLmxlbmd0aFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aWR9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXR0cmlidXRlcyBmb3IgYSBnaXZlbiBkb20gbm9kZSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IGRhdGEuYXR0cmlidXRlcyBlaXRoZXIgYW4gYXR0cmlidXRlIG9yIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xTdHJpbmdbXX0gZGF0YS5pZCBlaXRoZXIgYW4gaWQgb3IgYW4gYXJyYXkgb2YgaWRzXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH0gSW4gY2FzZSBpZCBpcyBhbiBhcnJheSwgYW4gYXJyYXkgb2YgYXR0cmlidXRlIG9iamVjdHMgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSBhbiBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRBdHRyaWJ1dGVzKHthdHRyaWJ1dGVzLCBpZH0pIHtcbiAgICAgICAgbGV0IHJldHVybkRhdGE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm5EYXRhID0gW107XG5cbiAgICAgICAgICAgIGlkLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybkRhdGEucHVzaCh0aGlzLmdldEF0dHJpYnV0ZXMoe2F0dHJpYnV0ZXMsIGlkfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoaWQpO1xuXG4gICAgICAgICAgICByZXR1cm5EYXRhID0ge307XG5cbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBbYXR0cmlidXRlc11cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuRGF0YVthdHRyaWJ1dGVdID0gbm9kZVthdHRyaWJ1dGVdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5pZCBlaXRoZXIgYW4gaWQgb3IgYW4gYXJyYXkgb2YgaWRzXG4gICAgICogQHJldHVybnMge0RPTVJlY3R8RE9NUmVjdFtdfSBJbiBjYXNlIGlkIGlzIGFuIGFycmF5LCBhbiBhcnJheSBvZiBEb21SZWN0cyBpcyByZXR1cm5lZCwgb3RoZXJ3aXNlIGFuIERvbVJlY3Qgb2JqZWN0XG4gICAgICovXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHJldHVybkRhdGE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmlkLm1hcChpZCA9PiBtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe2lkfSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IG1lLmdldEVsZW1lbnRPckJvZHkoZGF0YS5ub2RlVHlwZSA/IGRhdGEgOiBkYXRhLmlkKSxcbiAgICAgICAgICAgICAgICByZWN0ID0ge30sXG4gICAgICAgICAgICAgICAgbWluV2lkdGgsIG1pbkhlaWdodCwgc3R5bGU7XG5cbiAgICAgICAgICAgIHJldHVybkRhdGEgPSB7fTtcblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZWN0ICAgICAgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHN0eWxlICAgICA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICAgICAgICAgIG1pbldpZHRoICA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21pbi13aWR0aCcpO1xuICAgICAgICAgICAgICAgIG1pbkhlaWdodCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21pbi1oZWlnaHQnKTtcblxuICAgICAgICAgICAgICAgIC8vIERvbVJlY3QgZG9lcyBub3Qgc3VwcG9ydCBzcHJlYWRpbmcgPT4gey4uLkRvbVJlY3R9ID0+IHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YSA9IFJlY3RhbmdsZS5jbG9uZShyZWN0KTtcblxuICAgICAgICAgICAgICAgIC8vIE1lYXN1cmUgbWluV2lkdGgvbWluSGVpZ2h0IGluIG90aGVyIHVuaXRzIGxpa2UgZW0vcmVtIGV0Y1xuICAgICAgICAgICAgICAgIC8vIE5vdGUgdGhhdCAwcHggaXMgd2hhdCB0aGUgRE9NIHJlcG9ydHMgaWYgbm8gbWluV2lkdGggaXMgc3BlY2lmaWVkXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgZG8gbm90IHJlcG9ydCBhIG1pbmltdW0gaW4gdGhlc2UgY2FzZXMuXG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aFJFLnRlc3QobWluV2lkdGgpICYmIG1pbldpZHRoICE9PSAnMHB4Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhLm1pbldpZHRoID0gbWUubWVhc3VyZSh7dmFsdWU6IG1pbldpZHRoLCBpZDogbm9kZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsZW5ndGhSRS50ZXN0KG1pbkhlaWdodCkgJiYgbWluSGVpZ2h0ICE9PSAnMHB4Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhLm1pbkhlaWdodCA9IG1lLm1lYXN1cmUoe3ZhbHVlOiBtaW5IZWlnaHQsIGlkOiBub2RlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0YVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YVxuICAgICAqIEByZXR1cm5zIHtOZW8udXRpbC5SZWN0YW5nbGV9XG4gICAgICovXG4gICAgZ2V0Q2xpcHBlZFJlY3QoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlICAgICAgICAgID0gbWUuZ2V0RWxlbWVudCh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgPyBkYXRhLmlkIDogZGF0YSksXG4gICAgICAgICAgICB7ZGVmYXVsdFZpZXd9ID0gbm9kZS5vd25lckRvY3VtZW50LFxuICAgICAgICAgICAgcmVjdCAgICAgICAgICA9IG1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdChub2RlKTtcblxuICAgICAgICBmb3IgKGxldCBwYXJlbnRFbGVtZW50ID0gbm9kZS5vZmZzZXRQYXJlbnQ7IHBhcmVudEVsZW1lbnQgJiYgcmVjdCAmJiBwYXJlbnRFbGVtZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgICAgICAgICAgIHJlY3QgPSByZWN0LmludGVyc2VjdHModGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50RWxlbWVudCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVjdFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fSBub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZ2V0RWxlbWVudChub2RlSWQpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBub2RlSWQ/Lm5vZGVUeXBlID9cbiAgICAgICAgICAgIG5vZGVJZCA6IE5lby5jb25maWcudXNlRG9tSWRzID9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChub2RlSWQpIDpcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uZW8taWQ9JyR7bm9kZUlkfSddYCk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGUgfHwgbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fSBub2RlSWQ9J2RvY3VtZW50LmJvZHknXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fG51bGx9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGdldEVsZW1lbnRPckJvZHkobm9kZUlkPSdkb2N1bWVudC5ib2R5Jykge1xuICAgICAgICBpZiAoIW5vZGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlSWQubm9kZVR5cGUgPyBub2RlSWQgOiAobm9kZUlkID09PSAnYm9keScgfHwgbm9kZUlkID09PSAnZG9jdW1lbnQuYm9keScpID8gZG9jdW1lbnQuYm9keSA6IHRoaXMuZ2V0RWxlbWVudChub2RlSWQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xTdHJpbmdbXX0gZGF0YS5pZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0U2Nyb2xsaW5nRGltZW5zaW9ucyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmlkLm1hcChpZCA9PiBtZS5nZXRTY3JvbGxpbmdEaW1lbnNpb25zKHtpZH0pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBkYXRhLm5vZGVUeXBlID8gZGF0YSA6IG1lLmdldEVsZW1lbnRPckJvZHkoZGF0YS5pZCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2xpZW50SGVpZ2h0OiBub2RlPy5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICAgICAgY2xpZW50V2lkdGggOiBub2RlPy5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IG5vZGU/LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgICAgICBzY3JvbGxXaWR0aCA6IG5vZGU/LnNjcm9sbFdpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGluaXRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICAgICAgbWUub25Eb2N1bWVudEJsdXIgICAgIC5iaW5kKG1lKSwgY2FwdHVyZVBhc3NpdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgICBtZS5vbkRvY3VtZW50S2V5RG93biAgLmJpbmQobWUpLCBjYXB0dXJlUGFzc2l2ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgICAgIG1lLm9uRG9jdW1lbnRLZXlVcCAgICAuYmluZChtZSksIGNhcHR1cmVQYXNzaXZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbWUub25Eb2N1bWVudE1vdXNlRG93bi5iaW5kKG1lKSwge2NhcHR1cmUgOiB0cnVlfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzQWxpZ25TdWJqZWN0KGVsKSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5fYWxpZ25zPy52YWx1ZXMoKV0uc29tZShhbGlnbiA9PiBhbGlnbi5zdWJqZWN0ID09PSBlbClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNsdWRlIGEgc2NyaXB0IGludG8gdGhlIGRvY3VtZW50LmhlYWRcbiAgICAgKiBZb3UgY2FuIGFkZCBtb3JlIGF0dHJpYnV0ZXMgaWYgbmVlZGVkLiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9zY3JpcHRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3JjXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHM9e2RlZmVyOnRydWV9XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0cy5hc3luY11cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRzLmRlZmVyXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGxvYWRTY3JpcHQoc3JjLCBvcHRzPXtkZWZlcjp0cnVlfSkge1xuICAgICAgICBsZXQgc2NyaXB0O1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzY3JpcHQsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgICAgICBvbmxvYWQgOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHNyY1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY2x1ZGUgYSBsaW5rIGludG8gdGhlIGRvY3VtZW50LmhlYWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaHJlZlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0PW51bGxcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmtub3duPn1cbiAgICAgKi9cbiAgICBsb2FkU3R5bGVzaGVldChocmVmLCBkYXRhc2V0PW51bGwpIHtcbiAgICAgICAgbGV0IGxpbms7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obGluaywge1xuICAgICAgICAgICAgICAgIGhyZWYsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgICAgIG9ubG9hZCA6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVsICAgIDogJ3N0eWxlc2hlZXQnLFxuICAgICAgICAgICAgICAgIHR5cGUgICA6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZGF0YXNldCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obGluay5kYXRhc2V0LCBkYXRhc2V0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICAgICAqL1xuICAgIG1lYXN1cmUoeyB2YWx1ZSwgaWQgfSkge1xuICAgICAgICBjb25zdCBub2RlID0gaWQubm9kZVR5cGUgPT09IDEgPyBpZCA6IHRoaXMuZ2V0RWxlbWVudChpZCk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmVuZHNXaXRoKCclJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYWN0aW9uID0gcGFyc2VGbG9hdCh2YWx1ZSkgLyAxMDA7XG5cbiAgICAgICAgICAgIHJldHVybiAobm9kZS5vZmZzZXRQYXJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCB8fCAwKSAqIGZyYWN0aW9uXG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaXQncyBhbnkgb3RoZXIgQ1NTIHVuaXQgdGhhbiBweCwgaXQgbmVlZHMgdG8gYmUgbWVhc3VyZWQgdXNpbmcgdGhlIERPTVxuICAgICAgICBlbHNlIGlmIChpc05hTih2YWx1ZSkgJiYgIXZhbHVlLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgICAgICBjb25zdCBlbFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG5cbiAgICAgICAgICAgIGxldCBkID0gdGhpcy5fbWVhc3VyaW5nRGl2O1xuXG4gICAgICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgICAgICBkID0gdGhpcy5fbWVhc3VyaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZC5zdHlsZSA9ICdwb3NpdGlvbjpmaXhlZDt0b3A6LTEwMDAwcHg7bGVmdDotMTAwMDBweCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW4gY2FzZSBhIERPTSB1cGRhdGUgY2xlYXJlZCBpdCBvdXRcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZCk7XG5cbiAgICAgICAgICAgIC8vIFNldCBhbGwgdGhlIGZvbnQtc2l6ZSwgZm9udC13ZWlnaHQgZXRjIHN0eWxlIHByb3BlcnRpZXMgc28gdGhhdFxuICAgICAgICAgICAgLy8gZW0vZXgvcmVtIGV0YyB1bml0cyB3aWxsIG1hdGNoXG4gICAgICAgICAgICBmb250U2l6ZVByb3BzLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICAgICAgZC5zdHlsZVtwcm9wXSA9IGVsU3R5bGVbcHJvcF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGQuY2xhc3NOYW1lID0gbm9kZS5jbGFzc05hbWU7XG4gICAgICAgICAgICBkLnN0eWxlLndpZHRoID0gdmFsdWU7XG5cbiAgICAgICAgICAgIC8vIFJlYWQgYmFjayB0aGUgcmVzdWx0aW5nIGNvbXB1dGVkIHBpeGVsIHdpZHRoXG4gICAgICAgICAgICB2YWx1ZSA9IGVsU3R5bGUud2lkdGg7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpdCdzIGEgbnVtYmVyLCBvciBlbmRzIHdpdGggcHgsIHVzZSB0aGUgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdGhlIG92ZXJmbG93IHN0YXR1cyBvZiBhIFRleHRBcmVhRmllbGQncyAmbHQ7dGV4dGFyZWE+IGVsZW1lbnQgYW5kIHVwZGF0ZXMgdGhlXG4gICAgICogaGVpZ2h0IHNvIHRoYXQgdGhlcmUgaXMgbmV2ZXIgYSB2ZXJ0aWNhbCBzY3JvbGxiYXIuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhc3luYyBtb25pdG9yQXV0b0dyb3coZGF0YSkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldCA9IGRhdGEuc3ViamVjdCA9IG1lLmdldEVsZW1lbnQoZGF0YS5pZCk7XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgdGhlIGhlaWdodCBvbiBldmVyeSBpbnB1dCBldmVudCBpcyBhdXRvR3JvdyBpcyB0cnV0aHkuXG4gICAgICAgIHRhcmdldFtkYXRhLmF1dG9Hcm93ID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInXSgnaW5wdXQnLCBtZS5tb25pdG9yQXV0b0dyb3dIYW5kbGVyKTtcblxuICAgICAgICAvLyBGaXggdGhlIGhlaWdodCB1cCBpbW1lZGlhdGVseSB0b29cbiAgICAgICAgZGF0YS5hdXRvR3JvdyAmJiBtZS5tb25pdG9yQXV0b0dyb3dIYW5kbGVyKHtcbiAgICAgICAgICAgIHRhcmdldFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudHxPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuaWRdXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2RhdGEudGFyZ2V0XVxuICAgICAqL1xuICAgIG1vbml0b3JBdXRvR3Jvd0hhbmRsZXIoZGF0YSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkYXRhLnRhcmdldCB8fCB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICB7IHN0eWxlIH0gICAgICAgICAgICAgID0gdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHsgc3R5bGUgOiBpbnB1dFN0eWxlIH0gPSB0YXJnZXQuY2xvc2VzdCgnLm5lby10ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICAvLyBNZWFzdXJlIHRoZSBzY3JvbGxIZWlnaHQgd2hlbiBmb3JjZWQgdG8gb3ZlcmZsb3csIHRoZW4gc2V0IGhlaWdodCB0byBlbmNvbXBhc3MgdGhlIHNjcm9sbEhlaWdodFxuICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gc3R5bGUubWluSGVpZ2h0ID0gMDtcbiAgICAgICAgICAgIGlucHV0U3R5bGUuc2V0UHJvcGVydHkoJy0tdGV4dGZpZWxkLWlucHV0LWhlaWdodCcsIGAke3RhcmdldC5zY3JvbGxIZWlnaHQgKyA1fXB4YCk7XG4gICAgICAgICAgICBpbnB1dFN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCAnJyk7XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHQgPSBzdHlsZS5taW5IZWlnaHQgPSAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkRvY3VtZW50Qmx1cigpIHtcbiAgICAgICAgTmVvLmFsdEtleURvd24gPSBOZW8uY29udHJvbEtleURvd24gPSBOZW8ubWV0YUtleURvd24gPSBOZW8uc2hpZnRLZXlEb3duID0gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGtleUV2ZW50XG4gICAgICovXG4gICAgb25Eb2N1bWVudEtleURvd24oa2V5RXZlbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVyS2V5c1trZXlFdmVudC5rZXldKSB7XG4gICAgICAgICAgICAvLyBlLmcuIE5lby5pc1NoaWZ0S2V5RG93biA9IHRydWUgb3IgTmVvLmlzQ29udHJvbEtleURvd24gPSB0cnVlLlxuICAgICAgICAgICAgLy8gU2VsZWN0aW9uIGNhbiBjb25zdWx0IHRoaXMgdmFsdWVcbiAgICAgICAgICAgIE5lb1tgJHtTdHJpbmdVdGlsLnVuY2FwaXRhbGl6ZShrZXlFdmVudC5rZXkpfUtleURvd25gXSA9IHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0ga2V5RXZlbnRcbiAgICAgKi9cbiAgICBvbkRvY3VtZW50S2V5VXAoa2V5RXZlbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVyS2V5c1trZXlFdmVudC5rZXldKSB7XG4gICAgICAgICAgICBOZW9bYCR7U3RyaW5nVXRpbC51bmNhcGl0YWxpemUoa2V5RXZlbnQua2V5KX1LZXlEb3duYF0gPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbXV0YXRpb25zXG4gICAgICovXG4gICAgb25Eb2N1bWVudE11dGF0aW9uKG11dGF0aW9ucykge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gSWYgdGhlIG11dGF0aW9ucyBhcmUgcHVyZWx5IGFsaWduIHN1YmplY3RzIGJlaW5nIGFkZGVkIG9yIHJlbW92ZWQsIHRha2Ugbm8gYWN0aW9uLlxuICAgICAgICBpZiAoIW11dGF0aW9ucy5ldmVyeSgoeyB0eXBlLCBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXMgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBbLi4uQXJyYXkuZnJvbShhZGRlZE5vZGVzKSwgLi4uQXJyYXkuZnJvbShyZW1vdmVkTm9kZXMpXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBub2Rlcy5ldmVyeShhID0+IG1lLmlzQWxpZ25TdWJqZWN0KGEpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkge1xuICAgICAgICAgICAgbWUuc3luY0FsaWducygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkRvY3VtZW50TW91c2VEb3duKGUpIHtcbiAgICAgICAgbGV0IGZvY3VzQ29udHJvbGxlciA9IGUudGFyZ2V0Py5jbG9zZXN0KCdbZGF0YS1mb2N1c10nKTtcblxuICAgICAgICAvLyBkYXRhLWZvY3VzIG9uIGFuIGVsZW1lbnQgbWVhbnMgcmVqZWN0IG1vdXNlZG93biBnZXN0dXJlcywgYW5kIG1vdmUgZm9jdXNcbiAgICAgICAgLy8gdG8gdGhlIHJlZmVyZW5jZWQgZWxlbWVudC5cbiAgICAgICAgaWYgKGZvY3VzQ29udHJvbGxlcikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9jdXNDb250cm9sbGVyLmRhdGFzZXQuZm9jdXMpPy5mb2N1cygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uRG9tQ29udGVudExvYWRlZCgpIHtcbiAgICAgICAgTmVvLmNvbmZpZy5hcHBseUJvZHlDbHMgJiYgdGhpcy5hcHBseUJvZHlDbHMoe2NsczogWyduZW8tYm9keSddfSk7XG4gICAgICAgIE5lby5jb25maWcuYXBwbHlGaXhlZFBvc2l0aW9uVG9IdG1sVGFnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnZml4ZWQnKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5ub2RlSWRcbiAgICAgKi9cbiAgICBvbkdldE9mZnNjcmVlbkNhbnZhcyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSAgICAgID0gbWUuZ2V0RWxlbWVudChkYXRhLm5vZGVJZCksXG4gICAgICAgICAgICBvZmZzY3JlZW4gPSBub2RlLnRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuKCk7XG5cbiAgICAgICAgZGF0YS5vZmZzY3JlZW4gPSBvZmZzY3JlZW47XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0sIFtvZmZzY3JlZW5dKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5hdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YS5mdW5jdGlvbnMgQW4gYXJyYXkgY29udGFpbmluZyBzdHJpbmdzIGFuZC9vciBvYmplY3RzXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5zdHlsZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52bm9kZUlkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uUmVhZERvbShkYXRhKSB7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVzICAgID0gZGF0YS5hdHRyaWJ1dGVzIHx8IFtdLFxuICAgICAgICAgICAgZnVuY3Rpb25zICAgICA9IGRhdGEuZnVuY3Rpb25zICB8fCBbXSxcbiAgICAgICAgICAgIHN0eWxlcyAgICAgICAgPSBkYXRhLnN0eWxlcyAgICAgfHwgW10sXG4gICAgICAgICAgICB7dm5vZGVJZH0gICAgID0gZGF0YSxcbiAgICAgICAgICAgIHJldEF0dHJpYnV0ZXMgPSB7fSxcbiAgICAgICAgICAgIHJldEZ1bmN0aW9ucyAgPSB7fSxcbiAgICAgICAgICAgIHJldFN0eWxlcyAgICAgPSB7fSxcbiAgICAgICAgICAgIGVsZW1lbnQgICAgICAgPSB2bm9kZUlkID8gdGhpcy5nZXRFbGVtZW50KHZub2RlSWQpIDogbnVsbCxcbiAgICAgICAgICAgIGZuTmFtZSwgc2NvcGU7XG5cbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICByZXRBdHRyaWJ1dGVzW2tleV0gPSBlbGVtZW50W2tleV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb25zLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleS5wYXJhbXMgICAgICAgICA9IGtleS5wYXJhbXMgICAgICAgICB8fCBbXTtcbiAgICAgICAgICAgICAgICBrZXkucGFyYW1Jc0RvbU5vZGUgPSBrZXkucGFyYW1Jc0RvbU5vZGUgfHwgW107XG5cbiAgICAgICAgICAgICAgICBzY29wZSA9IGtleS5zY29wZSA/IGRvY3VtZW50W2tleS5zY29wZV0gOiBlbGVtZW50O1xuXG4gICAgICAgICAgICAgICAga2V5LnBhcmFtcy5mb3JFYWNoKChwYXJhbSwgcGFyYW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnBhcmFtSXNEb21Ob2RlW3BhcmFtSW5kZXhdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkucGFyYW1zW3BhcmFtSW5kZXhdID0gdGhpcy5nZXRFbGVtZW50KGtleS5wYXJhbXNbcGFyYW1JbmRleF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZuTmFtZSA9IGtleS5yZXR1cm5Gbk5hbWUgPyBrZXkucmV0dXJuRm5OYW1lIDogaW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0RnVuY3Rpb25zW2ZuTmFtZV0gPSBzY29wZVtrZXkuZm5dKC4uLmtleS5wYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5yZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXRGdW5jdGlvbnNbZm5OYW1lXSA9IHJldEZ1bmN0aW9uc1tmbk5hbWVdW2tleS5yZXR1cm5WYWx1ZV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldEZ1bmN0aW9uc1trZXldID0gZWxlbWVudFtrZXldKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3R5bGVzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHJldFN0eWxlc1trZXldID0gZWxlbWVudC5zdHlsZVtrZXldXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogcmV0QXR0cmlidXRlcyxcbiAgICAgICAgICAgIGZ1bmN0aW9ucyA6IHJldEZ1bmN0aW9ucyxcbiAgICAgICAgICAgIHN0eWxlcyAgICA6IHJldFN0eWxlc1xuICAgICAgICB9KTtcblxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4sIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBkYXRhLnRhcmdldFxuICAgICAqIEBwYXJhbSBkYXRhLnJlbGF0ZWRUYXJnZXRcbiAgICAgKi9cbiAgICBvblRyYXBwZWRGb2N1c01vdmVtZW50KHsgdGFyZ2V0LCByZWxhdGVkVGFyZ2V0IH0pIHtcbiAgICAgICAgY29uc3QgYmFja3dhcmRzID0gcmVsYXRlZFRhcmdldCAmJiAodGFyZ2V0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHJlbGF0ZWRUYXJnZXQpICYgNCk7XG5cbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCcubmVvLWZvY3VzLXRyYXAnKSkge1xuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICBjb250YWluaW5nRWVtZW50ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdHJlZVdhbGtlciAgICAgICA9IGNvbnRhaW5pbmdFZW1lbnQuJHRyZWVXYWxrZXIsXG4gICAgICAgICAgICAgICAgdG9wRm9jdXNUcmFwICAgICA9IGNvbnRhaW5pbmdFZW1lbnQuJHRvcEZvY3VzVHJhcCxcbiAgICAgICAgICAgICAgICBib3R0b21Gb2N1c1RyYXAgID0gY29udGFpbmluZ0VlbWVudC4kYm90dG9tRm9jdXNUcmFwO1xuXG4gICAgICAgICAgICB0cmVlV2Fsa2VyLmN1cnJlbnROb2RlID0gYmFja3dhcmRzID8gYm90dG9tRm9jdXNUcmFwIDogdG9wRm9jdXNUcmFwO1xuICAgICAgICAgICAgdHJlZVdhbGtlcltiYWNrd2FyZHMgPyAncHJldmlvdXNOb2RlJyA6ICduZXh0Tm9kZSddKCk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0cmVlV2Fsa2VyLmN1cnJlbnROb2RlLmZvY3VzKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZWFkKGRhdGEpIHtcbiAgICAgICAgdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicgJiYgZGF0YSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIGFueSBET00gc2l6aW5nIGNvbmZpZ3MgdG8gdGhlIGxhc3QgZXh0ZXJuYWxseSBjb25maWd1cmVkIHZhbHVlLlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VkIGR1cmluZyBhbGlnbmluZyB0byByZWxlYXNlIGFueSBjb25zdHJhaW50cyBhcHBsaWVkIGJ5IGEgcHJldmlvdXMgYWxpZ25tZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhbGlnblxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZXNldERpbWVuc2lvbnMoYWxpZ24pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmdldEVsZW1lbnQoYWxpZ24uaWQpLnN0eWxlLCB7XG4gICAgICAgICAgICBmbGV4ICAgICA6IGFsaWduLmNvbmZpZ3VyZWRGbGV4LFxuICAgICAgICAgICAgaGVpZ2h0ICAgOiBhbGlnbi5jb25maWd1cmVkSGVpZ2h0LFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBhbGlnbi5jb25maWd1cmVkTWF4SGVpZ2h0LFxuICAgICAgICAgICAgbWF4V2lkdGggOiBhbGlnbi5jb25maWd1cmVkTWF4V2lkdGgsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGFsaWduLmNvbmZpZ3VyZWRNaW5IZWlnaHQsXG4gICAgICAgICAgICBtaW5XaWR0aCA6IGFsaWduLmNvbmZpZ3VyZWRNaW5XaWR0aCxcbiAgICAgICAgICAgIHdpZHRoICAgIDogYWxpZ24uY29uZmlndXJlZFdpZHRoXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9zY3JvbGxCeVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYmVoYXZpb3I9J2F1dG8nIGF1dG8sIGluc3RhbnQsIHNtb290aFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmRpcmVjdGlvbj0ndG9wJyBsZWZ0LCB0b3BcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzY3JvbGxCeSh7YmVoYXZpb3I9J2F1dG8nLCBkaXJlY3Rpb249J3RvcCcsIGlkLCB2YWx1ZX0pIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KGlkKT8uc2Nyb2xsQnkoe2JlaGF2aW9yLCBbZGlyZWN0aW9uXTogdmFsdWV9KTtcbiAgICAgICAgcmV0dXJuIHtpZH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIGVpdGhlciBwYXNzIHRoZSBpZCBvciBhIHF1ZXJ5U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5pZF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5iZWhhdmlvcj0nc21vb3RoJ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmJsb2NrPSdzdGFydCdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5kZWxheT01MDBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pbmxpbmU9J25lYXJlc3QnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLnF1ZXJ5U2VsZWN0b3JdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBzY3JvbGxJbnRvVmlldyh7aWQsIGJlaGF2aW9yPSdzbW9vdGgnLCBibG9jaz0nc3RhcnQnLCBkZWxheT01MDAsIGlubGluZT0nbmVhcmVzdCcsIHF1ZXJ5U2VsZWN0b3J9KSB7XG4gICAgICAgIGxldCBub2RlID0gaWQgPyB0aGlzLmdldEVsZW1lbnQoaWQpIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKSxcbiAgICAgICAgICAgIG9wdHMgPSB7YmVoYXZpb3IsIGJsb2NrLCBpbmxpbmV9O1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ3Ntb290aCcpIHtcbiAgICAgICAgICAgIG5vZGUuc2Nyb2xsSW50b1ZpZXcob3B0cylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNjcm9sbEludG9WaWV3KCkgZG9lcyBub3QgcHJvdmlkZSBhIGNhbGxiYWNrIHlldC5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3czYy9jc3N3Zy1kcmFmdHMvaXNzdWVzLzM3NDRcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFzTGlzdGVuZXIgPSAnc2Nyb2xsZW5kJyBpbiB3aW5kb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgaGFzTGlzdGVuZXIgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsZW5kJywgKCkgPT4gcmVzb2x2ZSgpLCB7Y2FwdHVyZTogdHJ1ZSwgb25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2Nyb2xsSW50b1ZpZXcob3B0cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgIWhhc0xpc3RlbmVyICYmIHRoaXMudGltZW91dChkZWxheSkudGhlbigoKSA9PiB7cmVzb2x2ZSgpfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9zY3JvbGxUb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYmVoYXZpb3I9J2F1dG8nIGF1dG8sIGluc3RhbnQsIHNtb290aFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmRpcmVjdGlvbj0ndG9wJyBsZWZ0LCB0b3BcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzY3JvbGxUbyh7YmVoYXZpb3I9J2F1dG8nLCBkaXJlY3Rpb249J3RvcCcsIGlkLCB2YWx1ZX0pIHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KGlkKT8uc2Nyb2xsVG8oe2JlaGF2aW9yLCBbZGlyZWN0aW9uXTogdmFsdWV9KTtcbiAgICAgICAgcmV0dXJuIHtpZH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYmVoYXZpb3I9J3Ntb290aCdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5vZmZzZXQ9MzRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNjcm9sbFRvVGFibGVSb3coe2lkLCBiZWhhdmlvcj0nc21vb3RoJywgb2Zmc2V0PTM0fSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChpZCk7IC8vIHRyIHRhZ1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVOb2RlICAgPSBub2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICB3cmFwcGVyTm9kZSA9IHRhYmxlTm9kZS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHRhYmxlVG9wICAgID0gdGFibGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgICAgICAgICAgICB0b3AgICAgICAgICA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgICAgICAgICB3cmFwcGVyTm9kZS5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3IsXG4gICAgICAgICAgICAgICAgdG9wOiB0b3AgLSB0YWJsZVRvcCAtIG9mZnNldFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aWR9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGF0YS5zdGFydD0wXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGF0YS5lbmQ9OTk5OTldXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzZWxlY3ROb2RlKGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgID0gdGhpcy5nZXRFbGVtZW50KGRhdGEuaWQpLFxuICAgICAgICAgICAgc3RhcnQgPSBOZW8uaXNOdW1iZXIoZGF0YS5zdGFydCkgPyBkYXRhLnN0YXJ0IDogMCxcbiAgICAgICAgICAgIGVuZCAgID0gTmVvLmlzTnVtYmVyKGRhdGEuZW5kKSAgID8gZGF0YS5lbmQgICA6IDk5OTk5O1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLnNlbGVjdCgpO1xuICAgICAgICAgICAgbm9kZS5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGRhdGEuYWRkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YS5yZW1vdmVcbiAgICAgKi9cbiAgICBzZXRCb2R5Q2xzKGRhdGEpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRhdGEucmVtb3ZlIHx8IFtdKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKC4uLmRhdGEuYWRkIHx8IFtdKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5vdCByZWNvbW1lbmRlZCB0byB1c2UgPT4gc3RpY2sgdG8gdmRvbSB1cGRhdGVzLlxuICAgICAqIENhbiBiZSBoYW5keSBmb3IgY3VzdG9tIENTUyBiYXNlZCBhbmltYXRpb25zIHRob3VnaC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkIEEgbm9kZSBpZCBvciAnZG9jdW1lbnQuYm9keSdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5zdHlsZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXG4gICAgICovXG4gICAgc2V0U3R5bGUoZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudE9yQm9keShkYXRhLmlkKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YS5zdHlsZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUuaW5jbHVkZXMoJyFpbXBvcnRhbnQnKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJyFpbXBvcnRhbnQnLCAnJykudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KE5lby5kZWNhbWVsKGtleSksIHZhbHVlLCAnaW1wb3J0YW50JylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW05lby5kZWNhbWVsKGtleSldID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHN5bmNBbGlnbnMoKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge19hbGlnbnN9ID0gbWU7XG5cbiAgICAgICAgLy8gS2VlcCBhbGwgcmVnaXN0ZXJlZCBhbGlnbnMgYWxpZ25lZCBvbiBhbnkgZGV0ZWN0ZWQgY2hhbmdlXG4gICAgICAgIF9hbGlnbnM/LmZvckVhY2goYWxpZ24gPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UHJlc2VudCA9IGRvY3VtZW50LmNvbnRhaW5zKGFsaWduLnRhcmdldEVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBBbGlnbiBzdWJqZWN0IGFuZCB0YXJnZXQgc3RpbGwgaW4gdGhlIERPTSAtIGNvcnJlY3QgaXRzIGFsaWdubWVudFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNvbnRhaW5zKGFsaWduLnN1YmplY3QpICYmIHRhcmdldFByZXNlbnQpIHtcbiAgICAgICAgICAgICAgICBtZS5hbGlnbihhbGlnbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFsaWduIHN1YmplY3Qgb3IgdGFyZ2V0IG5vIGxvbmdlciBpbiB0aGUgRE9NIC0gcmVtb3ZlIGl0LlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vIGxvbmdlciBpbiB0aGUgRE9NLCBoaWRlIHRoZSBzdWJqZWN0IGNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0UHJlc2VudCkge1xuICAgICAgICAgICAgICAgICAgICBOZW8ud29ya2VyLkFwcC5zZXRDb25maWdzKHsgaWQ6IGFsaWduLmlkLCBoaWRkZW46IHRydWUgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgICAgICB7X2FsaWduUmVzaXplT2JzZXJ2ZXJ9ID0gbWUsXG4gICAgICAgICAgICAgICAgICAgIHtjb25zdHJhaW5Ub0VsZW1lbnR9ICAgPSBhbGlnbjtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3Agb2JzZXJ2aW5nIHRoZSBhbGlnbiBlbGVtZW50c1xuICAgICAgICAgICAgICAgIF9hbGlnblJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShhbGlnbi5zdWJqZWN0KTtcbiAgICAgICAgICAgICAgICBfYWxpZ25SZXNpemVPYnNlcnZlci51bm9ic2VydmUoYWxpZ24ub2Zmc2V0UGFyZW50KTtcbiAgICAgICAgICAgICAgICBfYWxpZ25SZXNpemVPYnNlcnZlci51bm9ic2VydmUoYWxpZ24udGFyZ2V0RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cmFpblRvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBfYWxpZ25SZXNpemVPYnNlcnZlci51bm9ic2VydmUoY29uc3RyYWluVG9FbGVtZW50KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBsYXN0IGFsaWduZWQgY2xhc3MuXG4gICAgICAgICAgICAgICAgYWxpZ24uc3ViamVjdC5jbGFzc0xpc3QucmVtb3ZlKGBuZW8tYWxpZ25lZC0ke2FsaWduLnJlc3VsdD8ucG9zaXRpb259YCk7XG5cbiAgICAgICAgICAgICAgICBfYWxpZ25zLmRlbGV0ZShhbGlnbi5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLm1vZGFsXG4gICAgICovXG4gICAgc3luY01vZGFsTWFzayh7IGlkLCBtb2RhbCB9KSB7XG4gICAgICAgIGNvbnN0IGVsID0gaWQgJiYgdGhpcy5nZXRFbGVtZW50KGlkKTtcblxuICAgICAgICAvLyBJZiB3ZSBhcmUgdmlzaWJsZSBhbmQgbW9kYWwsIHRoZSBtYXNrIG5lZWRzIHRvIGJlIGp1c3QgYmVsb3cgdGhpcyBlbGVtZW50LlxuICAgICAgICBpZiAoZWwgJiYgbW9kYWwgJiYgZWwub3duZXJEb2N1bWVudC5jb250YWlucyhlbCkgJiYgZWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgIT09ICdub25lJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUodGhpcy5tb2RhbE1hc2ssIGVsKVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhlIG1hc2sgbmVlZHMgdG8gYmUgYmVsb3cgdGhlIG5leHQgdG9wbW9zdCBtb2RhbCBkaWFsb2cgaWYgcG9zc2libGUsIG9yIGhpZGRlblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgICAgbW9kYWxzICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5lby1tb2RhbCcpLFxuICAgICAgICAgICAgICAgIHRvcG1vc3RNb2RhbCA9IG1vZGFsc1ttb2RhbHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIG1hc2sgdW5kZXIgdGhlIG5leHQgdG9wbW9zdCBtb2RhbCBub3cgbW9kYWwgXCJpZFwiIGlzIGdvbmUuXG4gICAgICAgICAgICBpZiAodG9wbW9zdE1vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jTW9kYWxNYXNrKHsgaWQ6IHRvcG1vc3RNb2RhbC5pZCwgbW9kYWw6IHRydWUgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxNYXNrPy5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhcHMgKG9yIHN0b3BzIHRyYXBwaW5nKSBmb2N1cyB3aXRoaW4gYSBDb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkIFRoZSBDb21wb25lbnQgdG8gdHJhcCBmb2N1cyB3aXRoaW4uXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGF0YS50cmFwPXRydWVdIFBhc3MgYGZhbHNlYCB0byBzdG9wIHRyYXBwaW5nIGZvY3VzIGluc2lkZSB0aGUgQ29tcG9uZW50LlxuICAgICAqL1xuICAgIGFzeW5jIHRyYXBGb2N1cyhkYXRhKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBtZSAgICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9uVHJhcHBlZEZvY3VzTW92ZW1lbnQgPSBtZS4kYm91bmRPblRyYXBwZWRGb2N1c01vdmVtZW50IHx8IChtZS4kYm91bmRPblRyYXBwZWRGb2N1c01vdmVtZW50ID0gbWUub25UcmFwcGVkRm9jdXNNb3ZlbWVudC5iaW5kKG1lKSksXG4gICAgICAgICAgICBzdWJqZWN0ICAgICAgICAgICAgICAgID0gZGF0YS5zdWJqZWN0ID0gbWUuZ2V0RWxlbWVudChkYXRhLmlkKSxcbiAgICAgICAgICAgIHsgdHJhcCA9IHRydWUgfSAgICAgICAgPSBkYXRhO1xuXG4gICAgICAgIC8vIENhbGxlZCBiZWZvcmUgRE9NIGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICAgIGlmICghc3ViamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9wRm9jdXNUcmFwICAgID0gc3ViamVjdC4kdG9wRm9jdXNUcmFwLFxuICAgICAgICAgICAgYm90dG9tRm9jdXNUcmFwID0gc3ViamVjdC4kYm90dG9tRm9jdXNUcmFwO1xuXG4gICAgICAgIGlmICh0cmFwKSB7XG4gICAgICAgICAgICBpZiAoIXN1YmplY3QuJHRyZWVXYWxrZXIpIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0LiR0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihzdWJqZWN0LCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwge1xuICAgICAgICAgICAgICAgICAgICBhY2NlcHROb2RlOiBmaWx0ZXJUYWJiYWJsZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRvcEZvY3VzVHJhcCA9IHN1YmplY3QuJHRvcEZvY3VzVHJhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGJvdHRvbUZvY3VzVHJhcCA9IHN1YmplY3QuJGJvdHRvbUZvY3VzVHJhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgLy8gVGhlIHR3byBmb2N1cyB0cmFwcGluZyBlbGVtZW50cyBtdXN0IGJlIGludmlzaWJsZSBidXQgdGFiYmFibGUuXG4gICAgICAgICAgICAgICAgdG9wRm9jdXNUcmFwLmNsYXNzTmFtZSA9IGJvdHRvbUZvY3VzVHJhcC5jbGFzc05hbWUgPSAnbmVvLWZvY3VzLXRyYXAnO1xuICAgICAgICAgICAgICAgIHRvcEZvY3VzVHJhcC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgMCk7XG4gICAgICAgICAgICAgICAgYm90dG9tRm9jdXNUcmFwLnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAwKTtcblxuICAgICAgICAgICAgICAgIC8vIExpc3RlbiBmb3Igd2hlbiB0aGV5IGdhaW4gZm9jdXMgYW5kIHdyYXAgZm9jdXMgd2l0aGluIHRoZSBlbmNhcHN1bGF0aW5nIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBzdWJqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvblRyYXBwZWRGb2N1c01vdmVtZW50KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFbnN1cmUgY29udGVudCBpcyBlbmNhcHN1bGF0ZWQgYnkgdGhlIGZvY3VzIHRyYXAgZWxlbWVudHNcbiAgICAgICAgICAgIHN1YmplY3QuaW5zZXJ0QmVmb3JlKHRvcEZvY3VzVHJhcCwgc3ViamVjdC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIHN1YmplY3QuYXBwZW5kQ2hpbGQoYm90dG9tRm9jdXNUcmFwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3ViamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25UcmFwcGVkRm9jdXNNb3ZlbWVudClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmJlaGF2aW9yPSdzbW9vdGgnXSAvLyBhdXRvIG9yIHNtb290aFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5sZWZ0PTBdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLnRvcD0wXVxuICAgICAqL1xuICAgIHdpbmRvd1Njcm9sbFRvKGRhdGEpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiBkYXRhLmJlaGF2aW9yIHx8ICdzbW9vdGgnLFxuICAgICAgICAgICAgbGVmdCAgICA6IGRhdGEubGVmdCAgICAgfHwgMCxcbiAgICAgICAgICAgIHRvcCAgICAgOiBkYXRhLnRvcCAgICAgIHx8IDBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3cml0ZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZHVfaW5zZXJ0Tm9kZSh7XG4gICAgICAgICAgICBpbmRleCAgICA6IGRhdGEucGFyZW50SW5kZXgsXG4gICAgICAgICAgICBvdXRlckhUTUw6IGRhdGEuaHRtbCB8fCBkYXRhLm91dGVySFRNTCxcbiAgICAgICAgICAgIHBhcmVudElkIDogZGF0YS5wYXJlbnRJZFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoRG9tQWNjZXNzKTtcbiIsImltcG9ydCBCYXNlICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBTdHJpbmdVdGlsICAgICBmcm9tICcuLi91dGlsL1N0cmluZy5tanMnO1xuaW1wb3J0IFRvdWNoRG9tRXZlbnRzIGZyb20gJy4vbWl4aW4vVG91Y2hEb21FdmVudHMubWpzJztcblxuY29uc3QgZ2xvYmFsRG9tRXZlbnRzID0gW1xuICAgIHtuYW1lOiAnY2hhbmdlJywgICAgICBoYW5kbGVyOiAnb25DaGFuZ2UnfSxcbiAgICB7bmFtZTogJ2NsaWNrJywgICAgICAgaGFuZGxlcjogJ29uQ2xpY2snfSxcbiAgICB7bmFtZTogJ2NvbnRleHRtZW51JywgaGFuZGxlcjogJ29uQ29udGV4dE1lbnUnfSxcbiAgICB7bmFtZTogJ2RibGNsaWNrJywgICAgaGFuZGxlcjogJ29uRG91YmxlQ2xpY2snfSxcbiAgICB7bmFtZTogJ2ZvY3VzaW4nLCAgICAgaGFuZGxlcjogJ29uRm9jdXNJbid9LFxuICAgIHtuYW1lOiAnZm9jdXNvdXQnLCAgICBoYW5kbGVyOiAnb25Gb2N1c091dCd9LFxuICAgIHtuYW1lOiAnaW5wdXQnLCAgICAgICBoYW5kbGVyOiAnb25DaGFuZ2UnfSxcbiAgICB7bmFtZTogJ2tleWRvd24nLCAgICAgaGFuZGxlcjogJ29uS2V5RG93bid9LFxuICAgIHtuYW1lOiAna2V5dXAnLCAgICAgICBoYW5kbGVyOiAnb25LZXlVcCd9LFxuICAgIHtuYW1lOiAnbW91c2Vkb3duJywgICBoYW5kbGVyOiAnb25Nb3VzZURvd24nfSxcbiAgICB7bmFtZTogJ21vdXNlZW50ZXInLCAgaGFuZGxlcjogJ29uTW91c2VFbnRlcicsIG9wdGlvbnM6IHtjYXB0dXJlOiB0cnVlfX0sXG4gICAge25hbWU6ICdtb3VzZWxlYXZlJywgIGhhbmRsZXI6ICdvbk1vdXNlTGVhdmUnLCBvcHRpb25zOiB7Y2FwdHVyZTogdHJ1ZX19LFxuICAgIHtuYW1lOiAnbW91c2V1cCcsICAgICBoYW5kbGVyOiAnb25Nb3VzZVVwJ30sXG4gICAge25hbWU6ICdzY3JvbGwnLCAgICAgIGhhbmRsZXI6ICdvblNjcm9sbCcsICAgICBvcHRpb25zOiB7Y2FwdHVyZTogdHJ1ZX19LFxuICAgIHtuYW1lOiAnd2hlZWwnLCAgICAgICBoYW5kbGVyOiAnb25XaGVlbCcsICAgICAgb3B0aW9uczoge3Bhc3NpdmU6IGZhbHNlfX1cbl07XG5cbi8vIFdpbGwgZ2V0IGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50LmJvZHkgaW4gY2FzZSBOZW8uY29uZmlnLmhhc1RvdWNoRXZlbnRzID09PSB0cnVlXG5jb25zdCB0b3VjaEV2ZW50cyA9IFtcbiAgICB7bmFtZTogJ3RvdWNoY2FuY2VsJywgaGFuZGxlcjogJ29uVG91Y2hDYW5jZWwnfSxcbiAgICB7bmFtZTogJ3RvdWNoZW5kJywgICAgaGFuZGxlcjogJ29uVG91Y2hFbmQnfSxcbiAgICB7bmFtZTogJ3RvdWNoZW50ZXInLCAgaGFuZGxlcjogJ29uVG91Y2hFbnRlcid9LFxuICAgIHtuYW1lOiAndG91Y2hsZWF2ZScsICBoYW5kbGVyOiAnb25Ub3VjaExlYXZlJ30sXG4gICAge25hbWU6ICd0b3VjaG1vdmUnLCAgIGhhbmRsZXI6ICdvblRvdWNoTW92ZScsIG9wdGlvbnM6IHtwYXNzaXZlOiBmYWxzZX19LFxuICAgIHtuYW1lOiAndG91Y2hzdGFydCcsICBoYW5kbGVyOiAnb25Ub3VjaFN0YXJ0J31cbl07XG5cbi8vIHdoZWVsIGV2ZW50cyBmaXJlIHZlcnkgb2Z0ZW4sIHNvIHdlIGxpbWl0IHRoZSB0YXJnZXRzIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHBvc3QgbWVzc2FnZXMgZnJvbSBtYWluIHRvIHRoZSBhcHAgd29ya2VyXG5jb25zdCBnbG9iYWxXaGVlbFRhcmdldHMgPSBbXG4gICAgJ25lby1jLW0tc2Nyb2xsY29udGFpbmVyJyxcbiAgICAnbmVvLWMtdy1zY3JvbGxjb250YWluZXInLFxuICAgICduZW8tY2FsZW5kYXIteWVhcmNvbXBvbmVudCcsXG4gICAgJ25lby1jaXJjbGUtY29tcG9uZW50JyxcbiAgICAnbmVvLWRhdGVzZWxlY3RvcicsXG4gICAgJ25lby1nYWxsZXJ5JyxcbiAgICAnbmVvLWhlbGl4J1xuXTtcblxuLy8gc2VwYXJhdGVkIGZyb20gZ2xvYmFsV2hlZWxUYXJnZXRzID0+IHBlcmZvcm1hbmNlXG4vLyBidWZmZXIgaW4gbXNcbmNvbnN0IGdsb2JhbFdoZWVsVGFyZ2V0c0J1ZmZlciA9IHtcbiAgICAnbmVvLWMtbS1zY3JvbGxjb250YWluZXInICAgOiAxMDAsXG4gICAgJ25lby1jLXctc2Nyb2xsY29udGFpbmVyJyAgIDogMTAwLFxuICAgICduZW8tY2FsZW5kYXIteWVhcmNvbXBvbmVudCc6IDMwMCxcbiAgICAnbmVvLWRhdGVzZWxlY3RvcicgICAgICAgICAgOiAzMDBcbn07XG5cbi8vIHNlcGFyYXRlZCBmcm9tIGdsb2JhbFdoZWVsVGFyZ2V0cyA9PiBwZXJmb3JtYW5jZVxuY29uc3QgZ2xvYmFsV2hlZWxUYXJnZXRzS2VlcEV2ZW50ID0gW1xuICAgICduZW8tYy1tLXNjcm9sbGNvbnRhaW5lcicsXG4gICAgJ25lby1jLXctc2Nyb2xsY29udGFpbmVyJ1xuXTtcblxuY29uc3QgbGFzdFdoZWVsRXZlbnQgPSB7XG4gICAgZGF0ZSAgOiBudWxsLFxuICAgIHRhcmdldDogbnVsbFxufTtcblxuY29uc3RcbiAgICBkaXNhYmxlZElucHV0S2V5cyAgICAgICAgID0ge30sXG4gICAgcHJldmVudENsaWNrVGFyZ2V0cyAgICAgICA9IFtdLFxuICAgIHByZXZlbnRDb250ZXh0bWVudVRhcmdldHMgPSBbXTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1haW4uRG9tRXZlbnRzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIERvbUV2ZW50cyBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG9ic2VydmFibGUgPSB0cnVlXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLkRvbUV2ZW50cydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4uRG9tRXZlbnRzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvZG86IGNvbmRpdGlvbmFsIGR5bmFtaWMgaW1wb3J0IG9uY2UgdGhlIGJ1aWxkIHByb2Nlc3NlcyBjYW4gaGFuZGxlIGl0XG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBtaXhpbnM9W1RvdWNoRG9tRXZlbnRzXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbVG91Y2hEb21FdmVudHNdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAnYWRkRG9tTGlzdGVuZXInLFxuICAgICAgICAgICAgICAgICdyZWdpc3RlckRpc2FibGVkSW5wdXRDaGFycycsXG4gICAgICAgICAgICAgICAgJ3JlZ2lzdGVyUHJldmVudERlZmF1bHRUYXJnZXRzJyxcbiAgICAgICAgICAgICAgICAndW5yZWdpc3RlckRpc2FibGVkSW5wdXRDaGFycydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQG1lbWJlciB7T2JqZWN0fSB0b3VjaFxuICAgICAqL1xuICAgIGxhc3RUb3VjaCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICBtZS5vbkRvbUNvbnRlbnRMb2FkZWQgLmJpbmQobWUpKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0aW9uY2hhbmdlJywgICBtZS5vblNlbGVjdGlvbkNoYW5nZSAgLmJpbmQobWUpKTtcbiAgICAgICAgd2luZG93ICAuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBtZS5vbk9yaWVudGF0aW9uQ2hhbmdlLmJpbmQobWUpKTtcbiAgICAgICAgd2luZG93ICAuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICAgICAgICBtZS5vbkhhc2hDaGFuZ2UgICAgICAgLmJpbmQobWUpKTtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VTaGFyZWRXb3JrZXJzKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgbWUub25CZWZvcmVVbmxvYWQuYmluZChtZSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgID0gZGF0YS5ldmVudHMubGVuZ3RoLFxuICAgICAgICAgICAgZmFpbGVkSWQgPSBudWxsLFxuICAgICAgICAgICAgZXZlbnQsIGlkLCB0YXJnZXROb2RlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGV2ZW50ID0gZGF0YS5ldmVudHNbaV07XG5cbiAgICAgICAgICAgIGlmICghbWVbZXZlbnQuaGFuZGxlcl0pIHtcbiAgICAgICAgICAgICAgICBtZVtldmVudC5oYW5kbGVyXSA9IE5lby5lbXB0eUZuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlkID0gZXZlbnQudm5vZGVJZCB8fCBkYXRhLnZub2RlSWQ7XG5cbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ2RvY3VtZW50LmJvZHknKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmJvZHlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmNvbmZpZy51c2VEb21JZHMpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uZW8taWQ9JyR7aWR9J11gKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudC5uYW1lLCBtZVtldmVudC5oYW5kbGVyXS5iaW5kKG1lKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmFpbGVkSWQgPSBpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZhaWxlZElkICYmIE5lby5jb25maWcuZW52aXJvbm1lbnQgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRG9tRXZlbnRzOmFkZERvbUxpc3RlbmVyKCkgPT4gdGFyZ2V0IG5vZGUgbm90IGZvdW5kOicsIGZhaWxlZElkKVxuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiAhZmFpbGVkSWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZEdsb2JhbERvbUxpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBbLi4uZ2xvYmFsRG9tRXZlbnRzXS5jb25jYXQoTmVvLmNvbmZpZy5oYXNUb3VjaEV2ZW50cyA/IHRvdWNoRXZlbnRzIDogW10pLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50Lm5hbWUsIG1lW2V2ZW50LmhhbmRsZXJdLmJpbmQobWUpLCBldmVudC5vcHRpb25zKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2NhbCBkb21FdmVudCBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgZG9tRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge3RhcmdldH0gPSBldmVudCxcblxuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgIDogJ2RvbUV2ZW50JyxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50LnR5cGUsXG5cbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiB0YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbW91c2Vtb3ZlJzpcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbmZpZy5kYXRhLCBtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywgY29uZmlnKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2VBcmlhQXR0cmlidXRlcyhub2RlKSB7XG4gICAgICAgIGxldCBhcmlhQXR0cmlidXRlcyA9IHt9LFxuICAgICAgICAgICAge2F0dHJpYnV0ZXN9ICAgPSBub2RlLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgPSBhdHRyaWJ1dGVzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlLm5hbWUuc3RhcnRzV2l0aCgnYXJpYS0nKSkge1xuICAgICAgICAgICAgICAgIGFyaWFBdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lLnN1YnN0cmluZyg1KV0gPSBhdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcmlhQXR0cmlidXRlc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAqIEBwYXJhbSAge051bWJlcn0geDEgVGhlIFggcG9zaXRpb24gb2YgdGhlIGZpcnN0IHBvaW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB5MSBUaGUgWSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHgyIFRoZSBYIHBvc2l0aW9uIG9mIHRoZSBzZWNvbmQgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkyIFRoZSBZIHBvc2l0aW9uIG9mIHRoZSBzZWNvbmQgcG9pbnRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldERpc3RhbmNlKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHgyIC0geDEpICoqIDIgKyAoeTIgLSB5MSkgKiogMilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0RXZlbnREYXRhKGV2ZW50KSB7XG4gICAgICAgIGxldCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG5cbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgLy8gb3VyIGRyYWdnYWJsZSBpbXBsZW1lbnRhdGlvbiB3aWxsIGdlbmVyYXRlIHBhdGhzLCBzbyB3ZSBkbyBuZWVkIHRvIGNoZWNrIGZvciB0aGVtXG4gICAgICAgICAgICBwYXRoID0gZXZlbnQucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHBhdGggICAgIDogcGF0aC5tYXAoZSA9PiB0aGlzLmdldFRhcmdldERhdGEoZSkpLFxuICAgICAgICAgICAgdGFyZ2V0ICAgOiB0aGlzLmdldFRhcmdldERhdGEoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wLFxuICAgICAgICAgICAgdHlwZSAgICAgOiBldmVudC50eXBlLFxuICAgICAgICAgICAgZGF0YSAgICAgOiB7Li4uZXZlbnQudGFyZ2V0LmRhdGFzZXR9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5yZWxhdGVkVGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXREYXRhKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0S2V5Ym9hcmRFdmVudERhdGEoZXZlbnQpIHtcbiAgICAgICAgbGV0IHthbHRLZXksIGNvZGUsIGN0cmxLZXksIGtleSwga2V5Q29kZSwgbWV0YUtleSwgc2hpZnRLZXl9ID0gZXZlbnQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgIGFsdEtleSxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICBjdHJsS2V5LFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAga2V5Q29kZSxcbiAgICAgICAgICAgIG1ldGFLZXksXG4gICAgICAgICAgICBzaGlmdEtleVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpIHtcbiAgICAgICAgbGV0IHthbHRLZXksIGNsaWVudFgsIGNsaWVudFksIGN0cmxLZXksIGRldGFpbCwgbWV0YUtleSwgb2Zmc2V0WCwgb2Zmc2V0WSwgcGFnZVgsIHBhZ2VZLCBzY3JlZW5YLCBzY3JlZW5ZLCBzaGlmdEtleX0gPSBldmVudDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGhpcy5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgYWx0S2V5LFxuICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICBjdHJsS2V5LFxuICAgICAgICAgICAgZGV0YWlsLFxuICAgICAgICAgICAgbWV0YUtleSxcbiAgICAgICAgICAgIG9mZnNldFgsXG4gICAgICAgICAgICBvZmZzZXRZLFxuICAgICAgICAgICAgcGFnZVgsXG4gICAgICAgICAgICBwYWdlWSxcbiAgICAgICAgICAgIHNjcmVlblgsXG4gICAgICAgICAgICBzY3JlZW5ZLFxuICAgICAgICAgICAgc2hpZnRLZXlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0UGF0aEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHBhdGggPSBbXTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcGF0aC5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBwYXRoXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAgICogQHJldHVybnMge09iamVjdFtdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGlvblBhdGgocGF0aCwgdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQucGFyZW50Tm9kZSAmJiB0YXJnZXQuaWQuc3BsaXQoJ19fJykubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcGF0aCA9IHRoaXMuZ2V0U2VsZWN0aW9uUGF0aChwYXRoLCB0YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXRoLnB1c2godGhpcy5nZXRUYXJnZXREYXRhKHRhcmdldCkpO1xuXG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0VGFyZ2V0RGF0YShub2RlKSB7XG4gICAgICAgIGxldCByICAgID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3Q/LigpLFxuICAgICAgICAgICAgcmVjdCA9IHIgJiYgdGhpcy5wYXJzZURvbVJlY3QocikgfHwge307XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFyaWEgICAgICAgICAgICAgOiB0aGlzLmdlQXJpYUF0dHJpYnV0ZXMobm9kZSksXG4gICAgICAgICAgICBjaGVja2VkICAgICAgICAgIDogbm9kZS5jaGVja2VkLFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50Q291bnQ6IG5vZGUuY2hpbGRFbGVtZW50Q291bnQsXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQgICAgIDogbm9kZS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICBjbGllbnRMZWZ0ICAgICAgIDogbm9kZS5jbGllbnRMZWZ0LFxuICAgICAgICAgICAgY2xpZW50VG9wICAgICAgICA6IG5vZGUuY2xpZW50VG9wLFxuICAgICAgICAgICAgY2xpZW50V2lkdGggICAgICA6IG5vZGUuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBjbHMgICAgICAgICAgICAgIDogbm9kZS5jbGFzc0xpc3QgPyBbLi4ubm9kZS5jbGFzc0xpc3RdIDogW10sXG4gICAgICAgICAgICBkYXRhICAgICAgICAgICAgIDogey4uLm5vZGUuZGF0YXNldH0sXG4gICAgICAgICAgICBkcmFnZ2FibGUgICAgICAgIDogbm9kZS5kcmFnZ2FibGUsXG4gICAgICAgICAgICBoaWRkZW4gICAgICAgICAgIDogbm9kZS5oaWRkZW4sXG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgIDogTmVvLmNvbmZpZy51c2VEb21JZHMgPyBub2RlLmlkIDogbm9kZS5kYXRhc2V0Py5bJ25lb0lkJ10sXG4gICAgICAgICAgICBpbmVydCAgICAgICAgICAgIDogbm9kZS5pbmVydCxcbiAgICAgICAgICAgIGlzQ29ubmVjdGVkICAgICAgOiBub2RlLmlzQ29ubmVjdGVkLFxuICAgICAgICAgICAgaXNDb250ZW50RWRpdGFibGU6IG5vZGUuaXNDb250ZW50RWRpdGFibGUsXG4gICAgICAgICAgICBub2RlVHlwZSAgICAgICAgIDogbm9kZS5ub2RlVHlwZSxcbiAgICAgICAgICAgIG9mZnNldEhlaWdodCAgICAgOiBub2RlLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIG9mZnNldExlZnQgICAgICAgOiBub2RlLm9mZnNldExlZnQsXG4gICAgICAgICAgICBvZmZzZXRUb3AgICAgICAgIDogbm9kZS5vZmZzZXRUb3AsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aCAgICAgIDogbm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIHJlY3QsXG4gICAgICAgICAgICByb2xlICAgICAgICAgICAgIDogbm9kZS5yb2xlLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ICAgICA6IG5vZGUuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCAgICAgICA6IG5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFRvcCAgICAgICAgOiBub2RlLnNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbFdpZHRoICAgICAgOiBub2RlLnNjcm9sbFdpZHRoLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICAgICA6IG5vZGUuc3R5bGU/LmNzc1RleHQsXG4gICAgICAgICAgICB0YWJJbmRleCAgICAgICAgIDogbm9kZS5nZXRBdHRyaWJ1dGU/LigndGFiaW5kZXgnKSA/IG5vZGUudGFiSW5kZXggOiBudWxsLFxuICAgICAgICAgICAgdGFnTmFtZSAgICAgICAgICA6IG5vZGUudGFnTmFtZT8udG9Mb3dlckNhc2UoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgdG91Y2ggZXZlbnQgZm91bmQgaW4gdG91Y2hlcyBvciBjaGFuZ2VkVG91Y2hlcyBvZiBhIFRvdWNoRXZlbnRcbiAgICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybnMge1RvdWNofVxuICAgICAqL1xuICAgIGdldFRvdWNoQ29vcmRzKGV2ZW50KSB7XG4gICAgICAgIGxldCB7dG91Y2hlcywgY2hhbmdlZFRvdWNoZXN9ID0gZXZlbnQ7XG4gICAgICAgIHJldHVybiB0b3VjaGVzPy5bMF0gfHwgY2hhbmdlZFRvdWNoZXM/LlswXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgaW4gdXNlIGlmIE5lby5jb25maWcudXNlU2hhcmVkV29ya2VycyA9IHRydWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkJlZm9yZVVubG9hZChldmVudCkge1xuICAgICAgICBsZXQge01hbmFnZXJ9ID0gTmVvLndvcmtlcjtcblxuICAgICAgICBNYW5hZ2VyLmFwcE5hbWVzLmZvckVhY2goYXBwTmFtZSA9PiB7XG4gICAgICAgICAgICBNYW5hZ2VyLmJyb2FkY2FzdCh7YWN0aW9uOiAnZGlzY29ubmVjdCcsIGFwcE5hbWUsIHdpbmRvd0lkOiBNYW5hZ2VyLndpbmRvd0lkfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0lucHV0RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHt0YXJnZXR9ID0gZXZlbnQsXG5cbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgLi4ubWUuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgICAgICB2YWxpZDogdGFyZ2V0LmNoZWNrVmFsaWRpdHk/LigpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy8gaW5wdXQgYW5kIGNoYW5nZSBldmVudHMgY2FuIHBhc3MgYSBGaWxlTGlzdCBmb3IgaW5wdXQgdHlwZSBmaWxlXG4gICAgICAgIGlmICh0YXJnZXQuZmlsZXMpIHtcbiAgICAgICAgICAgIGRhdGEuZmlsZXMgPSB0YXJnZXQuZmlsZXNcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgICBtZS50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgcHJldmVudENsaWNrVGFyZ2V0cykgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IG1lLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBwcmV2ZW50Q29udGV4dG1lbnVUYXJnZXRzKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkRvbUNvbnRlbnRMb2FkZWQoKSB7XG4gICAgICAgIHRoaXMuYWRkR2xvYmFsRG9tTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuZmlyZSgnZG9tQ29udGVudExvYWRlZCcpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uRG91YmxlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZVRvQXBwKG1lLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSk7XG5cbiAgICAgICAgbWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHByZXZlbnRDbGlja1RhcmdldHMpICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Gb2N1c0luKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGb2N1c0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uRm9jdXNPdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZSgpIHtcbiAgICAgICAgbGV0IHtNYW5hZ2VyfSAgPSBOZW8ud29ya2VyLFxuICAgICAgICAgICAgaGFzaFN0cmluZyA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuXG4gICAgICAgIE1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2hhc2hDaGFuZ2UnLFxuICAgICAgICAgICAgZGF0YSAgOiB7XG4gICAgICAgICAgICAgICAgYXBwTmFtZXM6IE1hbmFnZXIuYXBwTmFtZXMsXG4gICAgICAgICAgICAgICAgaGFzaCAgICA6IHRoaXMucGFyc2VIYXNoKGhhc2hTdHJpbmcpLFxuICAgICAgICAgICAgICAgIGhhc2hTdHJpbmcsXG4gICAgICAgICAgICAgICAgd2luZG93SWQ6IE1hbmFnZXIud2luZG93SWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge3RhcmdldH0gID0gZXZlbnQsXG4gICAgICAgICAgICB7dGFnTmFtZX0gPSB0YXJnZXQsXG4gICAgICAgICAgICBpc0lucHV0ICAgPSB0YWdOYW1lID09PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT09ICdURVhUQVJFQSc7XG5cbiAgICAgICAgaWYgKGlzSW5wdXQgJiYgZGlzYWJsZWRJbnB1dEtleXNbdGFyZ2V0LmlkXT8uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRLZXlib2FyZEV2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaXNJbnB1dCAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gJ1RhYicgJiZcbiAgICAgICAgICAgICAgICBtZS50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgWyduZW8tZ3JpZC1lZGl0b3InLCAnbmVvLXRhYmxlLWVkaXRvciddLCB0cnVlKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIWlzSW5wdXQgJiZcbiAgICAgICAgICAgICAgICBbJ0Fycm93RG93bicsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJ10uaW5jbHVkZXMoZXZlbnQua2V5KSAmJlxuICAgICAgICAgICAgICAgIG1lLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBbJ25lby1zZWxlY3Rpb24nXSwgdHJ1ZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleVVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEtleWJvYXJkRXZlbnREYXRhKGV2ZW50KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vdXNlRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFwcEV2ZW50ID0gey4uLm1lLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSwgZnJvbUVsZW1lbnRJZDogZXZlbnQuZnJvbUVsZW1lbnQ/LmlkIHx8IG51bGwsIHRvRWxlbWVudElkOiBldmVudC50b0VsZW1lbnQ/LmlkIHx8IG51bGx9O1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAoYXBwRXZlbnQpO1xuICAgICAgICBtZS5maXJlKCdtb3VzZUVudGVyJywgYXBwRXZlbnQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwRXZlbnQgPSB7Li4ubWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpLCBmcm9tRWxlbWVudElkOiBldmVudC5mcm9tRWxlbWVudD8uaWQgfHwgbnVsbCwgdG9FbGVtZW50SWQ6IGV2ZW50LnRvRWxlbWVudD8uaWQgfHwgbnVsbH07XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChhcHBFdmVudCk7XG4gICAgICAgIG1lLmZpcmUoJ21vdXNlTGVhdmUnLCBhcHBFdmVudClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uT3JpZW50YXRpb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IHtvcmllbnRhdGlvbn0gPSBzY3JlZW4sXG4gICAgICAgICAgICB7YW5nbGUsIHR5cGV9ID0gb3JpZW50YXRpb24sXG4gICAgICAgICAgICBsYXlvdXQgICAgICAgID0gYW5nbGUgPT09IDAgfHwgYW5nbGUgPT09IDE4MCA/ICdwb3J0cmFpdCcgOiAnbGFuZHNjYXBlJztcblxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ29yaWVudGF0aW9uQ2hhbmdlJyxcbiAgICAgICAgICAgIGRhdGEgIDoge2FuZ2xlLCBsYXlvdXQsIHR5cGV9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblNjcm9sbChldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAge2ZpcnN0VG91Y2gsIGxhc3RUb3VjaH0gPSBtZSxcbiAgICAgICAgICAgIHtjbGllbnRIZWlnaHQsIGNsaWVudFdpZHRoLCBzY3JvbGxMZWZ0LCBzY3JvbGxUb3B9ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgZGF0YTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAuLi5tZS5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBzY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsVG9wXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGZpcnN0VG91Y2gpIHtcbiAgICAgICAgICAgIGRhdGEudG91Y2hlcyA9IHtcbiAgICAgICAgICAgICAgICBmaXJzdFRvdWNoOiB7Y2xpZW50WDogZmlyc3RUb3VjaC5jbGllbnRYLCBjbGllbnRZOiBmaXJzdFRvdWNoLmNsaWVudFl9LFxuICAgICAgICAgICAgICAgIGxhc3RUb3VjaCA6IHtjbGllbnRYOiBsYXN0VG91Y2ggLmNsaWVudFgsIGNsaWVudFk6IGxhc3RUb3VjaCAuY2xpZW50WX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAoZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7dGFyZ2V0fSA9IGV2ZW50LFxuICAgICAgICAgICAgZWxlbWVudCAgPSB0YXJnZXQudHlwZSA/IHRhcmdldCA6IHRhcmdldC5hY3RpdmVFbGVtZW50LFxuICAgICAgICAgICAgcGF0aCwgdGFyZ2V0RGF0YTtcblxuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBwYXRoICAgICAgID0gbWUuZ2V0U2VsZWN0aW9uUGF0aChbXSwgZWxlbWVudCk7XG4gICAgICAgIHRhcmdldERhdGEgPSBtZS5nZXRUYXJnZXREYXRhKGVsZW1lbnQpO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAoe1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHNlbGVjdGlvbjoge2RpcmVjdGlvbjogZWxlbWVudC5zZWxlY3Rpb25EaXJlY3Rpb24sIGVuZDogZWxlbWVudC5zZWxlY3Rpb25FbmQsIHN0YXJ0OiBlbGVtZW50LnNlbGVjdGlvblN0YXJ0fSxcbiAgICAgICAgICAgIHRhcmdldCAgIDogdGFyZ2V0RGF0YSxcbiAgICAgICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wLFxuICAgICAgICAgICAgdHlwZSAgICAgOiAnc2VsZWN0aW9uY2hhbmdlJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25XaGVlbChldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0ICAgICAgICA9IHRoaXMudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIGdsb2JhbFdoZWVsVGFyZ2V0cyksXG4gICAgICAgICAgICBwcmV2ZW50VXBkYXRlID0gZmFsc2UsXG4gICAgICAgICAgICB0YXJnZXRDbHM7XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgdGFyZ2V0Q2xzID0gdGFyZ2V0LmNscztcblxuICAgICAgICAgICAgaWYgKGdsb2JhbFdoZWVsVGFyZ2V0c0J1ZmZlclt0YXJnZXQuY2xzXSkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChsYXN0V2hlZWxFdmVudC5kYXRlICYmIGxhc3RXaGVlbEV2ZW50LnRhcmdldCA9PT0gdGFyZ2V0Q2xzICYmIGRhdGUgLSBsYXN0V2hlZWxFdmVudC5kYXRlIDwgZ2xvYmFsV2hlZWxUYXJnZXRzQnVmZmVyW3RhcmdldENsc10pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudFVwZGF0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGxhc3RXaGVlbEV2ZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRDbHNcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghcHJldmVudFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGxldCB7ZGVsdGFYLCBkZWx0YVksIGRlbHRhWn0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SGVpZ2h0OiB0YXJnZXQubm9kZS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFdpZHRoIDogdGFyZ2V0Lm5vZGUuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWCxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFZLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVosXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgIDogdGFyZ2V0Lm5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wICAgOiB0YXJnZXQubm9kZS5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWdsb2JhbFdoZWVsVGFyZ2V0c0tlZXBFdmVudC5pbmNsdWRlcyh0YXJnZXRDbHMpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRE9NUmVjdHMgYXJlIG5vdCBzcHJlYWRhYmxlID0+IHsuLi5ET01SZWN0fSA9PiB7fVxuICAgICAqIEBwYXJhbSB7RE9NUmVjdH0gcmVjdFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgcGFyc2VEb21SZWN0KHJlY3QpIHtcbiAgICAgICAgbGV0IHtib3R0b20sIGhlaWdodCwgbGVmdCwgcmlnaHQsIHRvcCwgd2lkdGgsIHgsIHl9ID0gcmVjdDtcblxuICAgICAgICByZXR1cm4ge2JvdHRvbSwgaGVpZ2h0LCBsZWZ0LCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGFtcGxlIGZvciBBcnJheSB2YWx1ZXM6IFwiY2F0ZWdvcmllc1tdPXRlc3QxJmNhdGVnb3JpZXNbXT10ZXN0MlwiXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgcGFyc2VIYXNoKHN0cikge1xuICAgICAgICBpZiAoc3RyID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGllY2VzID0gc3RyLnNwbGl0KCcmJyksXG4gICAgICAgICAgICBkYXRhICAgPSB7fSxcbiAgICAgICAgICAgIGksIGtleSwgcGFydHMsIHZhbHVlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcnRzID0gcGllY2VzW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaCgnJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ICAgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1tdJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cmluZygwLCBrZXkuaW5kZXhPZignW10nKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0YVtrZXldLnB1c2godGhpcy5wYXJzZVZhbHVlKHZhbHVlKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdGhpcy5wYXJzZVZhbHVlKHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB1c2VkIGJ5IHBhcnNlSGFzaCB0byBjb252ZXJ0IHRva2VucyBpbnRvIGJvb2xlYW4gb3IgbnVtYmVyIHR5cGVzIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufE51bWJlcnxTdHJpbmd9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHBhcnNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IHBhcnNlSW50KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSlcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgdmFsdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLmNoYXJzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKi9cbiAgICByZWdpc3RlckRpc2FibGVkSW5wdXRDaGFycyhkYXRhKSB7XG4gICAgICAgIGRpc2FibGVkSW5wdXRLZXlzW2RhdGEuaWRdID0gZGF0YS5jaGFyc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGRhdGEuY2xzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubmFtZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyUHJldmVudERlZmF1bHRUYXJnZXRzKGRhdGEpIHtcbiAgICAgICAgbGV0IHByZXZlbnRBcnJheTtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5jbHMpKSB7XG4gICAgICAgICAgICBkYXRhLmNscyA9IFtkYXRhLmNsc107XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGRhdGEubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgIHByZXZlbnRBcnJheSA9IHByZXZlbnRDbGlja1RhcmdldHM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XG4gICAgICAgICAgICAgICAgcHJldmVudEFycmF5ID0gcHJldmVudENvbnRleHRtZW51VGFyZ2V0cztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuY2xzLmZvckVhY2goY2xzID0+IHtcbiAgICAgICAgICAgICFwcmV2ZW50QXJyYXkuaW5jbHVkZXMoY2xzKSAmJiBwcmV2ZW50QXJyYXkucHVzaChjbHMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgdGhlIHBhcnNlZCBldmVudCBkYXRhIHRvIHRoZSBhcHAgd29ya2VyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2VuZE1lc3NhZ2VUb0FwcChkYXRhKSB7XG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywge1xuICAgICAgICAgICAgYWN0aW9uICAgOiAnZG9tRXZlbnQnLFxuICAgICAgICAgICAgZXZlbnROYW1lOiBkYXRhLnR5cGUsXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaGVsbG8gPGZvbz53b3JsZCB0aG9yc3RlbiEgMyA8IDQgYW5kIDUgPiAzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBzdHJpcEh0bWwodmFsdWUpIHtcbiAgICAgICAgbGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodmFsdWUsICd0ZXh0L2h0bWwnKTtcblxuICAgICAgICByZXR1cm4gZG9jLmJvZHkudGV4dENvbnRlbnQgfHwgJydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0QXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGVzdFN1YnN0cmluZz1mYWxzZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8Qm9vbGVhbn0gdGFyZ2V0IGNscyAmIG5vZGUgaWYgZm91bmQsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIHRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCB0YXJnZXRBcnJheSwgdGVzdFN1YnN0cmluZz1mYWxzZSkge1xuICAgICAgICBsZXQgY291bnRUYXJnZXRzID0gdGFyZ2V0QXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgcGF0aCAgICAgICAgID0gZXZlbnQucGF0aCB8fCBldmVudC5jb21wb3NlZFBhdGgoKSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgPSBwYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIGosIG5vZGU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbm9kZSA9IHBhdGhbaV07XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudFRhcmdldHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGVzdFN1YnN0cmluZyAmJiBub2RlLmNsYXNzTGlzdD8udmFsdWU/LmluY2x1ZGVzKHRhcmdldEFycmF5W2pdKSB8fFxuICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdD8uY29udGFpbnModGFyZ2V0QXJyYXlbal0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Y2xzOiB0YXJnZXRBcnJheVtqXSwgbm9kZX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICovXG4gICAgdW5yZWdpc3RlckRpc2FibGVkSW5wdXRDaGFycyhkYXRhKSB7XG4gICAgICAgIGRlbGV0ZSBkaXNhYmxlZElucHV0S2V5c1tkYXRhLmlkXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoRG9tRXZlbnRzKTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG5jb25zdCBmb2N1c2FibGVUYWdzID0ge1xuICAgIEJPRFkgICAgOiAxLFxuICAgIEJVVFRPTiAgOiAxLFxuICAgIEVNQkVEICAgOiAxLFxuICAgIElGUkFNRSAgOiAxLFxuICAgIElOUFVUICAgOiAxLFxuICAgIE9CSkVDVCAgOiAxLFxuICAgIFNFTEVDVCAgOiAxLFxuICAgIFRFWFRBUkVBOiAxXG59O1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFpbi5Eb21VdGlsc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBEb21VdGlscyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uRG9tVXRpbHMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLkRvbVV0aWxzJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuYWxvZ291cyB0byB0aGUgYEhUTUxFbGVtZW50YCBgY2xvc2VzdGAgbWV0aG9kLiBTZWFyY2hlcyBzdGFydGluZyBhdCB0aGUgcGFzc2VkIGVsZW1lbnQgZm9yXG4gICAgICogYW4gZWxlbWVudCBmb3Igd2hpY2ggdGhlIHBhc3NlZCBgZmlsdGVyRm5gIHJldHVybnMgYHRydWVgXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgdG8gc3RhcnQgZnJvbS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaWx0ZXJGbiBBIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYHRydWVgIHdoZW4gdGhlIGRlc2lyZWQgZWxlbWVudCBpcyByZWFjaGVkLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtsaW1pdF0gVGhlIGVsZW1lbnQgdG8gc3RvcCBhdC4gVGhpcyBpcyAqbm90KiBjb25zaWRlcmVkIGZvciBtYXRjaGluZy5cbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgc3RhdGljIGNsb3Nlc3QoZWwsIGZpbHRlckZuLCBsaW1pdCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgd2hpbGUgKGVsPy5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgZWwgIT09IGxpbWl0KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyRm4oZWwpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGlzRm9jdXNhYmxlKGUpIHtcbiAgICAgICAgLy8gTWF5IGJlIHVzZWQgYXMgYSBzY29wZWxlc3MgY2FsbGJhY2ssIHNvIHVzZSBcIkRvbVV0aWxzXCIsIG5vdCBcInRoaXNcIlxuICAgICAgICByZXR1cm4gRG9tVXRpbHMuaXNUYWJiYWJsZShlKSB8fCBOdW1iZXIoZS5nZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JykpIDwgMFxuICAgIH1cblxuICAgIHN0YXRpYyBpc1RhYmJhYmxlKGUpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHsgbm9kZU5hbWUgfSA9IGUsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgPSBnZXRDb21wdXRlZFN0eWxlKGUpLFxuICAgICAgICAgICAgdGFiSW5kZXggICAgID0gZS5nZXRBdHRyaWJ1dGUoJ3RhYkluZGV4Jyk7XG5cbiAgICAgICAgLy8gSGlkZGVuIGVsZW1lbnRzIGFyZSBub3QgdGFiYmFibGUuXG4gICAgICAgIC8vIE5lZ2F0aXZlIHRhYkluZGV4IGFsc28gbWVhbnMgbm90IHRhYmJhYmxlIChUaG91Z2ggc3RpbGwgZm9jdXNhYmxlKVxuICAgICAgICBpZiAoIWUuaXNDb25uZWN0ZWQgfHwgIWUub2Zmc2V0UGFyZW50IHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3Zpc2liaWxpdHknKSA9PT0gJ2hpZGRlbicgfHwgTnVtYmVyKHRhYkluZGV4KSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvY3VzYWJsZVRhZ3Nbbm9kZU5hbWVdIHx8XG4gICAgICAgICAgICAoKG5vZGVOYW1lID09PSAnQScgfHwgbm9kZU5hbWUgPT09ICdMSU5LJykgJiYgISFlLmhyZWYpIHx8XG4gICAgICAgICAgICAodGFiSW5kZXggIT0gbnVsbCAmJiBOdW1iZXIodGFiSW5kZXgpID49IDApIHx8XG4gICAgICAgICAgICBlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW5hbG9nb3VzIHRvIHRoZSBgSFRNTEVsZW1lbnRgIGBxdWVyeVNlbGVjdG9yYCBtZXRob2QuIFNlYXJjaGVzIHRoZSBwYXNzZWQgZWxlbWVudFxuICAgICAqIGFuZCBhbGwgZGVzY2VuZGFudHMgZm9yIHRoZSBmaXJzdCBlbGVtZW50IGZvciB3aGljaCB0aGUgcGFzc2VkIGBmaWx0ZXJGbmAgcmV0dXJucyBgdHJ1ZWAuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgdG8gc3RhcnQgZnJvbS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaWx0ZXJGbiBBIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYHRydWVgIHdoZW4gdGhlIGRlc2lyZWQgZWxlbWVudCBpcyByZWFjaGVkLlxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGZpcnN0IG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgKi9cbiAgICBzdGF0aWMgcXVlcnkoZWwsIGZpbHRlckZuKSB7XG4gICAgICAgIHJldHVybiBbZWwsIC4uLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKV0uZmluZChmaWx0ZXJGbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW5hbG9nb3VzIHRvIHRoZSBgSFRNTEVsZW1lbnRgIGBxdWVyeVNlbGVjdG9yQWxsYCBtZXRob2QuIFNlYXJjaGVzIHRoZSBwYXNzZWQgZWxlbWVudFxuICAgICAqIGFuZCBhbGwgZGVzY2VuZGFudHMgZm9yIGFsbCBlbGVtZW50cyBmb3Igd2hpY2ggdGhlIHBhc3NlZCBgZmlsdGVyRm5gIHJldHVybnMgYHRydWVgLlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIFRoZSBlbGVtZW50IHRvIHN0YXJ0IGZyb20uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZmlsdGVyRm4gQSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGB0cnVlYCB3aGVuIGEgZGVzaXJlZCBlbGVtZW50IGlzIHJlYWNoZWQuXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50W119IEFuIGFycmF5IG9mIG1hdGNoaW5nIGVsZW1lbnRzXG4gICAgICovXG4gICAgc3RhdGljIHF1ZXJ5QWxsKGVsLCBmaWx0ZXJGbikge1xuICAgICAgICByZXR1cm4gW2VsLCAuLi5lbC5xdWVyeVNlbGVjdG9yQWxsKCcqJyldLmZpbHRlcihmaWx0ZXJGbilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKERvbVV0aWxzKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9BbUNoYXJ0cy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9BbUNoYXJ0cy5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fQW1DaGFydHNfbWpzXCJcblx0XSxcblx0XCIuL0FuYWx5dGljc0J5R29vZ2xlLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0FuYWx5dGljc0J5R29vZ2xlLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fQW5hbHl0aWNzQnlHb29nbGVfbWpzXCJcblx0XSxcblx0XCIuL0Jhc2UubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vQmFzZS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0Jhc2VfbWpzXCJcblx0XSxcblx0XCIuL0Nlc2l1bUpTLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0Nlc2l1bUpTLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fQ2VzaXVtSlNfbWpzXCJcblx0XSxcblx0XCIuL0Nsb25lTm9kZS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9DbG9uZU5vZGUubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9DbG9uZU5vZGVfbWpzXCJcblx0XSxcblx0XCIuL0Nvb2tpZS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Db29raWUubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Db29raWVfbWpzXCJcblx0XSxcblx0XCIuL0RyYWdEcm9wLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0RyYWdEcm9wLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9EcmFnRHJvcF9tanNcIlxuXHRdLFxuXHRcIi4vRmlsZVN5c3RlbUFjY2Vzcy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9GaWxlU3lzdGVtQWNjZXNzLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fRmlsZVN5c3RlbUFjY2Vzc19tanNcIlxuXHRdLFxuXHRcIi4vR29vZ2xlTWFwcy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Hb29nbGVNYXBzLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Hb29nbGVNYXBzX21qc1wiXG5cdF0sXG5cdFwiLi9IaWdobGlnaHRKUy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9IaWdobGlnaHRKUy5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0hpZ2hsaWdodEpTX21qc1wiXG5cdF0sXG5cdFwiLi9JbnRlcnNlY3Rpb25PYnNlcnZlci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9JbnRlcnNlY3Rpb25PYnNlcnZlci5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0ludGVyc2VjdGlvbk9ic2VydmVyX21qc1wiXG5cdF0sXG5cdFwiLi9Mb2NhbFN0b3JhZ2UubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vTG9jYWxTdG9yYWdlLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTG9jYWxTdG9yYWdlX21qc1wiXG5cdF0sXG5cdFwiLi9NYXBib3hHTC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9NYXBib3hHTC5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTWFwYm94R0xfbWpzXCJcblx0XSxcblx0XCIuL01hcmtkb3duLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL01hcmtkb3duLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTWFya2Rvd25fbWpzXCJcblx0XSxcblx0XCIuL01vbmFjb0VkaXRvci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Nb25hY29FZGl0b3IubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Nb25hY29FZGl0b3JfbWpzXCJcblx0XSxcblx0XCIuL013Yy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Nd2MubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Nd2NfbWpzXCJcblx0XSxcblx0XCIuL05hdmlnYXRvci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9OYXZpZ2F0b3IubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX05hdmlnYXRvcl9tanNcIlxuXHRdLFxuXHRcIi4vUG9wb3Zlci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Qb3BvdmVyLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fUG9wb3Zlcl9tanNcIlxuXHRdLFxuXHRcIi4vUHJlZml4RmllbGQubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vUHJlZml4RmllbGQubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9QcmVmaXhGaWVsZF9tanNcIlxuXHRdLFxuXHRcIi4vUmVzaXplT2JzZXJ2ZXIubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vUmVzaXplT2JzZXJ2ZXIubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9SZXNpemVPYnNlcnZlcl9tanNcIlxuXHRdLFxuXHRcIi4vU2Nyb2xsU3luYy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TY3JvbGxTeW5jLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fU2Nyb2xsU3luY19tanNcIlxuXHRdLFxuXHRcIi4vU2VydmljZVdvcmtlci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TZXJ2aWNlV29ya2VyLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fU2VydmljZVdvcmtlcl9tanNcIlxuXHRdLFxuXHRcIi4vU2llc3RhLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1NpZXN0YS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX1NpZXN0YV9tanNcIlxuXHRdLFxuXHRcIi4vU3R5bGVzaGVldC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TdHlsZXNoZWV0Lm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9TdHlsZXNoZWV0X21qc1wiXG5cdF0sXG5cdFwiLi9XZWJDb21wb25lbnQubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vV2ViQ29tcG9uZW50Lm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fV2ViQ29tcG9uZW50X21qc1wiXG5cdF0sXG5cdFwiLi9XaW5kb3dQb3NpdGlvbi5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9XaW5kb3dQb3NpdGlvbi5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fV2luZG93UG9zaXRpb25fbWpzXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKCgpID0+IHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbiBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5tanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogTG9naWMgdG8gYXBwbHkgdGhlIGRlbHRhcyBnZW5lcmF0ZWQgYnkgdmRvbS5IZWxwZXIgdG8gdGhlIHJlYWwgRE9NXG4gKiBAY2xhc3MgTmVvLm1haW4ubWl4aW4uRGVsdGFVcGRhdGVzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIERlbHRhVXBkYXRlcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4ubWl4aW4uRGVsdGFVcGRhdGVzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5taXhpbi5EZWx0YVVwZGF0ZXMnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlTmFtZVxuICAgICAqL1xuICAgIGR1X2NoYW5nZU5vZGVOYW1lKG5vZGUsIG5vZGVOYW1lKSB7XG4gICAgICAgIGxldCB7YXR0cmlidXRlc30gPSBub2RlLFxuICAgICAgICAgICAgY2xvbmUgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSksXG4gICAgICAgICAgICBpICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgID0gYXR0cmlidXRlcy5sZW5ndGgsXG4gICAgICAgICAgICBhdHRyaWJ1dGU7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5ub2RlTmFtZSwgYXR0cmlidXRlLm5vZGVWYWx1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xvbmUuaW5uZXJIVE1MPSBub2RlLmlubmVySFRNTDtcblxuICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZSwgbm9kZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqL1xuICAgIGR1X2ZvY3VzTm9kZShkZWx0YSkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoZGVsdGEuaWQpPy5mb2N1cygpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbm9kZS5jaGlsZHJlbiBjb250YWlucyB0aGUgXCJyZWFsXCIgbm9kZXMgKHRhZ3MpXG4gICAgICogbm9kZS5jaGlsZE5vZGVzIGNvbnRhaW5zIHRleHRzICYgY29tbWVudHMgYXMgbm9kZXMgdG9vXG4gICAgICogc2luY2UgZXZlcnkgdnR5cGU6J3RleHQnIGlzIHdyYXBwZWQgaW5zaWRlIGEgY29tbWVudCBibG9jayAoYXMgYW4gaWQpLFxuICAgICAqIHdlIG5lZWQgdGhlIGFtb3VudCBvZiBub2RlcyB3aGljaCBhcmUgbm90IGNvbW1lbnRzIHRvIGdldCB0aGUgXCJyZWFsSW5kZXhcIi5cbiAgICAgKiBpbnNlcnRBZGphY2VudEhUTUwoKSBpcyBmYXN0ZXIgdGhhbiBjcmVhdGluZyBhIG5vZGUgKHRlbXBsYXRlKSwgYnV0IG9ubHkgYXZhaWxhYmxlXG4gICAgICogZm9yIGNoaWxkcmVuIGFuZCBub3QgZm9yIGNoaWxkTm9kZXMuXG4gICAgICogSW4gY2FzZSB0aGVyZSBhcmUgbm8gY29tbWVudHMgKD0+IHZ0eXBlOiAndGV4dCcgbm9kZXMpLCB3ZSBzdGljayB0byBpdCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5vdXRlckhUTUxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKi9cbiAgICBkdV9pbnNlcnROb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCB7aW5kZXh9ICAgICAgID0gZGVsdGEsXG4gICAgICAgICAgICBwYXJlbnROb2RlICAgID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRlbHRhLnBhcmVudElkKSxcbiAgICAgICAgICAgIGNvdW50Q2hpbGRyZW4gPSBwYXJlbnROb2RlPy5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgcmVhbEluZGV4ICAgICA9IGluZGV4LFxuICAgICAgICAgICAgaGFzQ29tbWVudHMgICA9IGZhbHNlLFxuICAgICAgICAgICAgbm9kZTtcblxuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2luc2VydE5vZGUnLCBpbmRleCwgY291bnRDaGlsZHJlbiwgZGVsdGEucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoY291bnRDaGlsZHJlbiA8PSAyMCAmJiBwYXJlbnROb2RlLm5vZGVOYW1lICE9PSAnVEJPRFknKSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudENoaWxkcmVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUuY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PT0gOCkgeyAvLyBpZ25vcmUgY29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgcmVhbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhbEluZGV4KytcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ29tbWVudHMgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzQ29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb3VudENoaWxkcmVuID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwICYmIGluZGV4ID49IGNvdW50Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRlbHRhLm91dGVySFRNTCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjb3VudENoaWxkcmVuID4gMCAmJiBjb3VudENoaWxkcmVuID4gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIGRlbHRhLm91dGVySFRNTClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50Q2hpbGRyZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5bY291bnRDaGlsZHJlbiAtIDFdLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBkZWx0YS5vdXRlckhUTUwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRlbHRhLm91dGVySFRNTClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB0aGlzLmh0bWxTdHJpbmdUb0VsZW1lbnQoZGVsdGEub3V0ZXJIVE1MKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb3VudENoaWxkcmVuID4gMCAmJiBjb3VudENoaWxkcmVuID4gcmVhbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHBhcmVudE5vZGUuY2hpbGROb2Rlc1tyZWFsSW5kZXhdKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuaW5kZXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKi9cbiAgICBkdV9tb3ZlTm9kZSh7aWQsIGluZGV4LCBwYXJlbnRJZH0pIHtcbiAgICAgICAgbGV0IG5vZGUgICAgICAgPSB0aGlzLmdldEVsZW1lbnQoaWQpLFxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZ2V0RWxlbWVudChwYXJlbnRJZCksXG4gICAgICAgICAgICBjdXJyZW50Tm9kZTtcblxuICAgICAgICBpZiAobm9kZSAmJiBwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5vZGUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnROb2RlID0gcGFyZW50Tm9kZS5jaGlsZHJlbltpbmRleF07XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZSAmJiBjdXJyZW50Tm9kZS5pZCAhPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGEgZGlyZWN0IHN3YXAgT1BcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IGN1cnJlbnROb2RlLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZXBsYWNlV2l0aChjdXJyZW50Tm9kZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIGN1cnJlbnROb2RlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxuICAgICAqL1xuICAgIGR1X3JlbW92ZUFsbChkZWx0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkZWx0YS5wYXJlbnRJZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxuICAgICAqL1xuICAgIGR1X3JlbW92ZU5vZGUoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGVsdGEuaWQpLFxuICAgICAgICAgICAgcmVnLCBzdGFydFRhZztcblxuICAgICAgICBpZiAoIW5vZGUpIHsgLy8gY291bGQgYmUgYSB2dHlwZTogdGV4dFxuICAgICAgICAgICAgbm9kZSA9IGRlbHRhLnBhcmVudElkICYmIHRoaXMuZ2V0RWxlbWVudE9yQm9keShkZWx0YS5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRUYWcgPSBgPCEtLSAke2RlbHRhLmlkfSAtLT5gO1xuICAgICAgICAgICAgICAgIHJlZyAgICAgID0gbmV3IFJlZ0V4cChzdGFydFRhZyArICdbXFxcXHNcXFxcU10qPzwhLS0gXFwvbmVvLXZ0ZXh0IC0tPicpO1xuXG4gICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBub2RlLmlubmVySFRNTC5yZXBsYWNlKHJlZywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuZnJvbUlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnBhcmVudElkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnRvSWRcbiAgICAgKi9cbiAgICBkdV9yZXBsYWNlQ2hpbGQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSA9IG1lLmdldEVsZW1lbnQoZGVsdGEucGFyZW50SWQpO1xuXG4gICAgICAgIG5vZGU/LnJlcGxhY2VDaGlsZChtZS5nZXRFbGVtZW50KGRlbHRhLnRvSWQpLCBtZS5nZXRFbGVtZW50KGRlbHRhLmZyb21JZCkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5pZF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLnZhbHVlXG4gICAgICovXG4gICAgZHVfc2V0VGV4dENvbnRlbnQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSA9IG1lLmdldEVsZW1lbnQoZGVsdGEuaWQpO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gZGVsdGEudmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVsdGEuYXR0cmlidXRlc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmNsc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmlkXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEuaW5uZXJIVE1MXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEub3V0ZXJIVE1MXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVsdGEuc3R5bGVdXG4gICAgICovXG4gICAgZHVfdXBkYXRlTm9kZShkZWx0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gbWUuZ2V0RWxlbWVudE9yQm9keShkZWx0YS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlbHRhKS5mb3JFYWNoKChbcHJvcCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZS52b2lkQXR0cmlidXRlcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IHZhbCA9PT0gJ3RydWUnIC8vIHZub2RlIGF0dHJpYnV0ZSB2YWx1ZXMgZ2V0IGNvbnZlcnRlZCBpbnRvIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9ICcnIC8vIGlucHV0IGZpZWxkcyA9PiBwc2V1ZG8gYXR0cmlidXRlIGNhbiBub3QgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtOZW8uY29uZmlnLnVzZURvbUlkcyA/ICdpZCcgOiAnZGF0YS1uZW8taWQnXSA9IHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3BlbGxjaGVjaycgJiYgdmFsID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvMTkyMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW2tleV0gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nscyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5hZGQgICAgJiYgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLnZhbHVlLmFkZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5yZW1vdmUgJiYgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnZhbHVlLnJlbW92ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbm5lckhUTUwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSB2YWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vZGVOYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmR1X2NoYW5nZU5vZGVOYW1lKG5vZGUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ291dGVySFRNTCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLm91dGVySFRNTCA9IHZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsKSAmJiB2YWwuaW5jbHVkZXMoJyFpbXBvcnRhbnQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UoJyFpbXBvcnRhbnQnLCAnJykudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50ID0gJ2ltcG9ydGFudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoTmVvLmRlY2FtZWwoa2V5KSwgdmFsLCBpbXBvcnRhbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS52YWx1ZVxuICAgICAqL1xuICAgIGR1X3VwZGF0ZVZ0ZXh0KGRlbHRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSAgICAgID0gbWUuZ2V0RWxlbWVudChkZWx0YS5wYXJlbnRJZCksXG4gICAgICAgICAgICBpbm5lckhUTUwgPSBub2RlLmlubmVySFRNTCxcbiAgICAgICAgICAgIHN0YXJ0VGFnICA9IGA8IS0tICR7ZGVsdGEuaWR9IC0tPmAsXG4gICAgICAgICAgICByZWcgICAgICAgPSBuZXcgUmVnRXhwKHN0YXJ0VGFnICsgJ1tcXFxcc1xcXFxTXSo/PCEtLSBcXC9uZW8tdnRleHQgLS0+Jyk7XG5cbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckhUTUwucmVwbGFjZShyZWcsIGRlbHRhLnZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIHJlcHJlc2VudGluZyBhIHNpbmdsZSBlbGVtZW50XG4gICAgICogQHJldHVybnMge0NoaWxkTm9kZX1cbiAgICAgKi9cbiAgICBodG1sU3RyaW5nVG9FbGVtZW50KGh0bWwpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGRhdGEuZGVsdGFzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEub3JpZ2luPSdhcHAnXVxuICAgICAqL1xuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7ZGVsdGFzfSA9IGRhdGEsXG4gICAgICAgICAgICBpICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4sIG1hcDtcblxuICAgICAgICBkZWx0YXMgPSBBcnJheS5pc0FycmF5KGRlbHRhcykgPyBkZWx0YXMgOiBbZGVsdGFzXTtcbiAgICAgICAgbGVuICAgID0gZGVsdGFzLmxlbmd0aDtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5sb2dEZWx0YVVwZGF0ZXMgJiYgbGVuID4gMCkge1xuICAgICAgICAgICAgbWUuY291bnREZWx0YXMgKz0gbGVuO1xuICAgICAgICAgICAgbWUuY291bnRVcGRhdGVzKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlICcgKyBtZS5jb3VudFVwZGF0ZXMsICd0b3RhbCBkZWx0YXMgJywgbWUuY291bnREZWx0YXMsIE5lby5jbG9uZShkYXRhLCB0cnVlKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnJlbmRlckNvdW50RGVsdGFzICYmIGxlbiA+IDApIHtcbiAgICAgICAgICAgIG1lLmNvdW50RGVsdGFzUGVyMjUwbXMgKz0gbGVuXG4gICAgICAgIH1cblxuICAgICAgICBtYXAgPSB7XG4gICAgICAgICAgICBmb2N1c05vZGUgICAgIDogbWUuZHVfZm9jdXNOb2RlLFxuICAgICAgICAgICAgaW5zZXJ0Tm9kZSAgICA6IG1lLmR1X2luc2VydE5vZGUsXG4gICAgICAgICAgICBtb3ZlTm9kZSAgICAgIDogbWUuZHVfbW92ZU5vZGUsXG4gICAgICAgICAgICByZW1vdmVBbGwgICAgIDogbWUuZHVfcmVtb3ZlQWxsLFxuICAgICAgICAgICAgcmVtb3ZlTm9kZSAgICA6IG1lLmR1X3JlbW92ZU5vZGUsXG4gICAgICAgICAgICByZXBsYWNlQ2hpbGQgIDogbWUuZHVfcmVwbGFjZUNoaWxkLFxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQ6IG1lLmR1X3NldFRleHRDb250ZW50LFxuICAgICAgICAgICAgdXBkYXRlVnRleHQgICA6IG1lLmR1X3VwZGF0ZVZ0ZXh0LFxuICAgICAgICAgICAgZGVmYXVsdCAgICAgICA6IG1lLmR1X3VwZGF0ZU5vZGVcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAobWFwW2RlbHRhc1tpXS5hY3Rpb25dIHx8IG1hcFsnZGVmYXVsdCddKS5jYWxsKG1lLCBkZWx0YXNbaV0pXG4gICAgICAgIH1cblxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4gfHwgJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoRGVsdGFVcGRhdGVzKTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFdpbGwgZ2V0IGltcG9ydGVkIGluIGNhc2UgTmVvLmNvbmZpZy5oYXNUb3VjaEV2ZW50cyA9PT0gdHJ1ZVxuICogQGNsYXNzIE5lby5tYWluLm1peGluLlRvdWNoRG9tRXZlbnRzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFRvdWNoRG9tRXZlbnRzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFpbi5taXhpbi5Ub3VjaERvbUV2ZW50cydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4ubWl4aW4uVG91Y2hEb21FdmVudHMnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaENhbmNlbChldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0RXZlbnREYXRhKGV2ZW50KSk7XG4gICAgICAgIG1lLmZpcnN0VG91Y2ggPSBudWxsO1xuICAgICAgICBtZS5sYXN0VG91Y2ggID0gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZVRvQXBwKG1lLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgICAgICBtZS5maXJzdFRvdWNoID0gbnVsbDtcbiAgICAgICAgbWUubGFzdFRvdWNoICA9IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoTW92ZShldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0YSAgICAgICAgPSBtZS5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgdG91Y2ggICAgICAgPSBldmVudC50b3VjaGVzWzBdLFxuICAgICAgICAgICAge2xhc3RUb3VjaH0gPSBtZTtcblxuICAgICAgICBpZiAobGFzdFRvdWNoKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBkZWx0YVg6IHRvdWNoLmNsaWVudFggLSBsYXN0VG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICBkZWx0YVk6IHRvdWNoLmNsaWVudFkgLSBsYXN0VG91Y2guY2xpZW50WVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAoZGF0YSk7XG5cbiAgICAgICAgbWUubGFzdFRvdWNoID0gdG91Y2g7XG5cbiAgICAgICAgaWYgKG1lLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBbJ25lby1oZWxpeCddKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZmlyc3RUb3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIG1lLmxhc3RUb3VjaCAgPSBldmVudC50b3VjaGVzWzBdO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0RXZlbnREYXRhKGV2ZW50KSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFRvdWNoRG9tRXZlbnRzKTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5BcnJheVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBOZW9BcnJheSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuQXJyYXknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLkFycmF5J1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGFkZChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSwgYnV0IG5vdCBpbiBhcnJheTJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGRpZmZlcmVuY2UoYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiAhYXJyYXkyLmluY2x1ZGVzKGl0ZW0pKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaXRlbSBpcyBpbmNsdWRlZCBieSByZWZlcmVuY2UgaW5zaWRlIHRoZSBhcnJheVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNJdGVtKGFyciwgaXRlbSkge1xuICAgICAgICByZXR1cm4gYXJyLmluY2x1ZGVzKGl0ZW0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBEdXBsaWNhdGVzIHdpbGwgb25seSBnZXQgbWF0Y2hlZCBieSByZWZlcmVuY2UuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0KGFyciwgaW5kZXgsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IGl0ZW1zLmxlbmd0aCAtMSxcbiAgICAgICAgICAgIGkgICA9IGxlbixcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCwgaXRlbTtcblxuICAgICAgICAvLyBJdGVyYXRlIGJhY2t3YXJkc1xuICAgICAgICBmb3IgKDsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXTtcblxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZShhcnIsIGN1cnJlbnRJbmRleCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMCwgaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnRlcnNlY3Rpb24oYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiBhcnJheTIuaW5jbHVkZXMoaXRlbSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYW4gaXRlbSBpbnNpZGUgYXJyIGZyb20gZnJvbUluZGV4IHRvIHRvSW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvSW5kZXhcbiAgICAgKi9cbiAgICBzdGF0aWMgbW92ZShhcnIsIGZyb21JbmRleCwgdG9JbmRleCkge1xuICAgICAgICBpZiAoZnJvbUluZGV4ID09PSB0b0luZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUluZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZyb21JbmRleCA9IGFyci5sZW5ndGggLSAxXG4gICAgICAgIH1cblxuICAgICAgICBhcnIuc3BsaWNlKHRvSW5kZXgsIDAsIGFyci5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSk7XG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gb3IgYXJyYXkgb2YgaXRlbXMgZnJvbSBhbiBhcnJheS4gT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZShhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGxldCBpbmRleDtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc11cbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICAgICAgICBpbmRleCA+IC0xICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gY29tYmluZSBhZGQgJiByZW1vdmUgaW4gb25lIGNhbGwuXG4gICAgICogWW91IGNhbiBwYXNzIHNpbmdsZSBpdGVtcyBvciBhbiBhcnJheSBvZiBpdGVtcyB0byBhZGQgb3IgdG8gcmVtb3ZlLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gcmVtb3ZlSXRlbXNcbiAgICAgKiBAcGFyYW0geyp9IGFkZEl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZUFkZChhcnIsIHJlbW92ZUl0ZW1zLCBhZGRJdGVtcykge1xuICAgICAgICB0aGlzLnJlbW92ZShhcnIsIHJlbW92ZUl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGFyciwgYWRkSXRlbXMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIGZyb20gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIGV4aXN0LCBvdGhlcndpc2UgYWRkcyBpdFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FkZF1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9nZ2xlKGFyciwgaXRlbSwgYWRkID0gIXRoaXMuaGFzSXRlbShhcnIsIGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2FkZCA/ICdhZGQnIDogJ3JlbW92ZSddKGFyciwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiB0aGUgcGFzc2VkIGFycmF5cy5cbiAgICAgKiBNdWx0aXBsZSBhcnJheXMgbWF5IGJlIHBhc3NlZC5cbiAgICAgKiBPbmx5IHN1cHBvcnRzIHByaW1pdGl2ZSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdW5pb24oKSB7XG4gICAgICAgIHJldHVybiBbLi4ubmV3IFNldChBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmFyZ3VtZW50cykpXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgdW5zaGlmdChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnVuc2hpZnQoaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoTmVvQXJyYXkpO1xuIiwiLyoqXG4gKiBBcHBlbmQgYXJncyBpbnN0ZWFkIG9mIHByZXBlbmRpbmcgdGhlbVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEFwcGVuZChmbiwgc2NvcGUpIHtcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLnNsaWNlKDIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5jb25jYXQoYXJncykpXG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHNjb3BlXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXk9MzAwXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXIoY2FsbGJhY2ssIHNjb3BlLCBkZWxheT0zMDApIHtcbiAgICBsZXQgdGltZW91dElkO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gY2FsbGJhY2sgaW52b2NhdGlvbiBjb21lcyBcImRlbGF5XCIgbXMgYWZ0ZXIgdGhlIGxhc3QgY2FsbCB0byB3cmFwcGVyXG4gICAgICAgIC8vIHNvIGNhbmNlbCBhbnkgcGVuZGluZyBpbnZvY2F0aW9uLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcblxuICAgICAgICB3cmFwcGVyLmlzUGVuZGluZyA9IHRydWU7XG5cbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSAwO1xuICAgICAgICAgICAgd3JhcHBlci5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKVxuICAgICAgICB9LCBkZWxheSlcbiAgICB9O1xuXG4gICAgd3JhcHBlci5jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgIHdyYXBwZXIuaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwcGVyXG59XG5cbi8qKlxuICogSW50ZW5kZWQgZm9yIGZ1bmN0aW9ucyB3aXRoIDEgcGFyYW0gd2hlcmUgdGhlIGludGVyY2VwdG9yIGNhbiBjaGFuZ2UgdGhlIHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0TWV0aG9kTmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaW50ZXJjZXB0RnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZT10YXJnZXRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludGVyY2VwdG9yKHRhcmdldCwgdGFyZ2V0TWV0aG9kTmFtZSwgaW50ZXJjZXB0RnVuY3Rpb24sIHNjb3BlKSB7XG4gICAgbGV0IHRhcmdldE1ldGhvZCA9IHRhcmdldFt0YXJnZXRNZXRob2ROYW1lXTtcblxuICAgIHJldHVybiAodGFyZ2V0W3RhcmdldE1ldGhvZE5hbWVdID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldE1ldGhvZC5jYWxsKHRhcmdldCwgaW50ZXJjZXB0RnVuY3Rpb24uY2FsbChzY29wZSB8fCB0YXJnZXQsIHZhbHVlKSlcbiAgICB9KVxufVxuXG4vKipcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VxdWVuY2UodGFyZ2V0LCBtZXRob2ROYW1lLCBmbiwgc2NvcGUpIHtcbiAgICBsZXQgbWV0aG9kID0gdGFyZ2V0W21ldGhvZE5hbWVdIHx8IE5lby5lbXB0eUZuO1xuXG4gICAgcmV0dXJuICh0YXJnZXRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSB8fCB0aGlzLCBhcmd1bWVudHMpXG4gICAgfSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBzY29wZVxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5PTMwMFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoY2FsbGJhY2ssIHNjb3BlLCBkZWxheT0zMDApIHtcbiAgICBsZXQgZGVib3VuY2VUaW1lcjtcblxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIC8vIGxlYWRpbmcgZWRnZSA9PiB0cmlnZ2VyIHRoZSBmaXJzdCBjYWxsIHJpZ2h0IGF3YXlcbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIoZGVib3VuY2VUaW1lcikpIHtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHNjb3BlIChpbnN0YW5jZSkgZGlkIG5vdCBnZXQgZGVzdHJveWVkIHlldFxuICAgICAgICAgICAgc2NvcGU/LmlkICYmIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcblxuICAgICAgICAgICAgLy8gd2Ugc3RpbGwgd2FudCB0byBzdGFydCBhIHRpbWVyIHRvIGRlbGF5IHRoZSAybmQrIHVwZGF0ZVxuICAgICAgICAgICAgZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge2RlYm91bmNlVGltZXIgPSBudWxsfSwgIGRlbGF5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGRlYm91bmNlVGltZXIpO1xuXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgc2NvcGUgKGluc3RhbmNlKSBkaWQgbm90IGdldCBkZXN0cm95ZWQgeWV0XG4gICAgICAgICAgICAgICAgc2NvcGU/LmlkICYmIGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7ZGVib3VuY2VUaW1lciA9IG51bGx9LCAgZGVsYXkpXG4gICAgICAgICAgICB9LCAgZGVsYXkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGludGVyY2VwdG9yIGNhbiBwcmV2ZW50IHRoZSB0YXJnZXRNZXRob2QgZnJvbSBnZXR0aW5nIGV4ZWN1dGVkIGluIGNhc2UgaXQgcmV0dXJucyBmYWxzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRNZXRob2ROYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnRlcmNlcHRGdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlPXRhcmdldFxuICogQHBhcmFtIHsqfSBwcmV2ZW50ZWRSZXR1cm5WYWx1ZT1udWxsIFRoZSB2YWx1ZSB0byByZXR1cm4gaW4gY2FzZSB0aGUgaW50ZXJjZXB0RnVuY3Rpb24gcmV0dXJucyBmYWxzZVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJjZXB0KHRhcmdldCwgdGFyZ2V0TWV0aG9kTmFtZSwgaW50ZXJjZXB0RnVuY3Rpb24sIHNjb3BlLCBwcmV2ZW50ZWRSZXR1cm5WYWx1ZT1udWxsKSB7XG4gICAgbGV0IHRhcmdldE1ldGhvZCA9IHRhcmdldFt0YXJnZXRNZXRob2ROYW1lXTtcblxuICAgIHJldHVybiAodGFyZ2V0W3RhcmdldE1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoaW50ZXJjZXB0RnVuY3Rpb24uYXBwbHkoc2NvcGUgfHwgdGFyZ2V0LCBhcmd1bWVudHMpID09PSBmYWxzZSlcbiAgICAgICAgICAgID8gcHJldmVudGVkUmV0dXJuVmFsdWVcbiAgICAgICAgICAgIDogdGFyZ2V0TWV0aG9kLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKVxuICAgIH0pXG59XG5cbi8qKlxuICogTG9jYXRlIGEgY2FsbGFibGUgZnVuY3Rpb24gYnkgbmFtZSBpbiB0aGUgcGFzc2VkIHNjb3BlLlxuICpcbiAqIElmIHRoZSBuYW1lIHN0YXJ0cyB3aXRoICd1cC4nLCB0aGUgcGFyZW50IENvbXBvbmVudCBjaGFpbiBpcyBzZWFyY2hlZC5cbiAqXG4gKiBUaGlzIGlzIHVzZWQgYnkgbWFuYWdlci5Eb21FdmVudHMgJiBjb3JlLk9ic2VydmFibGUuZmlyZSBhbmQgYnkgJ2hhbmRsZXInIGZ1bmN0aW9uIGNhbGxzIHRvIHJlc29sdmVcbiAqIHN0cmluZyBmdW5jdGlvbiBuYW1lcyBpbiB0aGUgQ29tcG9uZW50J3Mgb3duIGhpZXJhcmNoeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBmbiBBIGZ1bmN0aW9uLCBvciB0aGUgbmFtZSBvZiBhIGZ1bmN0aW9uIHRvIGZpbmQgaW4gdGhlIHBhc3NlZCBzY29wZSBvYmplY3QvXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGU9dGhpcyBUaGUgc2NvcGUgdG8gZmluZCB0aGUgZnVuY3Rpb24gaW4gaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nLlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDYWxsYmFjayhmbiwgc2NvcGU9dGhpcykge1xuICAgIGlmIChOZW8uaXNTdHJpbmcoZm4pKSB7XG4gICAgICAgIGlmICghc2NvcGVbZm5dICYmIGZuLnN0YXJ0c1dpdGgoJ3VwLicpKSB7XG4gICAgICAgICAgICBmbiA9IGZuLnNsaWNlKDMpO1xuICAgICAgICAgICAgd2hpbGUgKCFzY29wZVtmbl0gJiYgKHNjb3BlID0gc2NvcGUucGFyZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY29wZSA9IHNjb3BlLmdldENvbnRyb2xsZXI/LigpPy5nZXRIYW5kbGVyU2NvcGUoZm4sIG51bGwpIHx8IHNjb3BlXG4gICAgICAgIH1cblxuICAgICAgICBmbiA9IHNjb3BlW2ZuXVxuICAgIH1cblxuICAgIHJldHVybiB7Zm4sIHNjb3BlfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHNjb3BlXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXk9MzAwXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgc2NvcGUsIGRlbGF5PTMwMCkge1xuICAgIGxldCBsYXN0UmFuRGF0ZSwgdGltZW91dElkO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKCFsYXN0UmFuRGF0ZSkge1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgc2NvcGUgKGluc3RhbmNlKSBkaWQgbm90IGdldCBkZXN0cm95ZWQgeWV0XG4gICAgICAgICAgICBzY29wZT8uaWQgJiYgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpO1xuXG4gICAgICAgICAgICBsYXN0UmFuRGF0ZSA9IERhdGUubm93KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpXG5cbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbkRhdGUpID49IGRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHNjb3BlIChpbnN0YW5jZSkgZGlkIG5vdCBnZXQgZGVzdHJveWVkIHlldFxuICAgICAgICAgICAgICAgICAgICBzY29wZT8uaWQgJiYgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxhc3RSYW5EYXRlID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGRlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0UmFuRGF0ZSkpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIFRoZSBjbGFzcyBjb250YWlucyB1dGlsaXR5IG1ldGhvZHMgZm9yIHdvcmtpbmcgd2l0aCBET01SZWN0IE9iamVjdHNcbiAqIEBjbGFzcyBOZW8udXRpbC5SZWN0YW5nbGVcbiAqIEBleHRlbmRzIERPTVJlY3RcbiAqL1xuXG5jb25zdFxuICAgIGVtcHR5QXJyYXkgPSBPYmplY3QuZnJlZXplKFtdKSxcbiAgICAvLyBDb252ZXJ0IGVkZ2UgYXJyYXkgdmFsdWVzIGludG8gdGhlIFtULFIsQixMXSBmb3JtLlxuICAgIHBhcnNlRWRnZVZhbHVlID0gKGUgPSAwKSA9PiB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgICAgICAgZSA9IFtlXTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZS5sZW5ndGggPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBlLmZpbGwoZVswXSwgMSwgNCk7XG4gICAgICAgICAgICBjYXNlIDI6Ly8gdG9wJmJvdHRvbSwgbGVmdCZyaWdodFxuICAgICAgICAgICAgICAgIHJldHVybiBbZVswXSwgZVsxXSwgZVswXSwgZVsxXV07XG4gICAgICAgICAgICBjYXNlIDM6Ly8gdG9wLCBsZWZ0JnJpZ2h0LCBib3R0b21cbiAgICAgICAgICAgICAgICByZXR1cm4gW2VbMF0sIGVbMV0sIGVbMl0sIGVbMV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH0sXG4gICAgcGFyc2VFZGdlQWxpZ24gPSBlZGdlQWxpZ24gPT4ge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgZWRnZVBhcnRzICAgICA9IGVkZ2VBbGlnblJFLmV4ZWMoZWRnZUFsaWduKSxcbiAgICAgICAgICAgIG91ckVkZ2Vab25lICAgPSBlZGdlWm9uZVtlZGdlUGFydHNbMV1dLFxuICAgICAgICAgICAgdGhlaXJFZGdlWm9uZSA9IGVkZ2Vab25lW2VkZ2VQYXJ0c1s0XV07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91ckVkZ2UgICAgICAgICA6IGVkZ2VQYXJ0c1sxXSxcbiAgICAgICAgICAgIG91ckVkZ2VPZmZzZXQgICA6IHBhcnNlSW50KGVkZ2VQYXJ0c1syXSB8fCA1MCksXG4gICAgICAgICAgICBvdXJFZGdlVW5pdCAgICAgOiBlZGdlUGFydHNbM10gfHwgJyUnLFxuICAgICAgICAgICAgb3VyRWRnZVpvbmUsXG4gICAgICAgICAgICB0aGVpckVkZ2UgICAgICAgOiBlZGdlUGFydHNbNF0sXG4gICAgICAgICAgICB0aGVpckVkZ2VPZmZzZXQgOiBwYXJzZUludChlZGdlUGFydHNbNV0gfHwgNTApLFxuICAgICAgICAgICAgdGhlaXJFZGdlVW5pdCAgIDogZWRnZVBhcnRzWzZdIHx8ICclJyxcbiAgICAgICAgICAgIHRoZWlyRWRnZVpvbmUsXG5cbiAgICAgICAgICAgIC8vIEFsaWduZWQgdG8gYW4gZWRnZSwgKm91dHNpZGUqIG9mIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICAvLyBBIG5vcm1hbCBhbGlnbiBhcyBhIGNvbWJvIGRyb3Bkb3duIG1pZ2h0IHJlcXVlc3RcbiAgICAgICAgICAgIGVkZ2VBbGlnbmVkICAgICA6IChvdXJFZGdlWm9uZSAmIDEpID09PSAodGhlaXJFZGdlWm9uZSAmIDEpICYmIG91ckVkZ2Vab25lICE9PSB0aGVpckVkZ2Vab25lXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIFRoZSBvcHBvc2l0ZSBvZiBwYXJzZUVkZ2VBbGlnbiwgYW5kIGl0IGhhcyB0byBmbGlwIHRoZSBlZGdlc1xuICAgIGNyZWF0ZVJldmVyc2VkRWRnZUFsaWduID0gZWRnZXMgPT4ge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgb3VyRWRnZSAgID0gb3Bwb3NpdGVFZGdlW2VkZ2VzLm91ckVkZ2VdLFxuICAgICAgICAgICAgdGhlaXJFZGdlID0gb3Bwb3NpdGVFZGdlW2VkZ2VzLnRoZWlyRWRnZV07XG5cbiAgICAgICAgLy8gcmVjb25zdGl0dXRlIGEgcnVsZSBzdHJpbmcgd2l0aCB0aGUgZWRnZXMgZmxpcHBlZCB0byB0aGUgb3Bwb3NpdGUgc2lkZXNcbiAgICAgICAgcmV0dXJuIGAke291ckVkZ2V9JHtlZGdlcy5vdXJFZGdlT2Zmc2V0fSR7ZWRnZXMub3VyRWRnZVVuaXR9LSR7dGhlaXJFZGdlfSR7ZWRnZXMudGhlaXJFZGdlT2Zmc2V0fSR7ZWRnZXMudGhlaXJFZGdlVW5pdH1gXG5cbiAgICB9LFxuICAgIGdldEVsUmVjdCA9IGVsID0+IHtcbiAgICAgICAgY29uc3QgciA9IGVsIGluc3RhbmNlb2YgRE9NUmVjdCA/IGVsIDogKGVsPy5ub2RlVHlwZSA9PT0gMSA/IGVsIDogdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKSA6IG51bGwpPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAvLyBDb252ZXJ0IERPTVJlY3QgaW50byBSZWN0YW5nbGVcbiAgICAgICAgcmV0dXJuIHIgJiYgbmV3IFJlY3RhbmdsZShyLngsIHIueSwgci53aWR0aCwgci5oZWlnaHQpO1xuICAgIH0sXG4gICAgb3Bwb3NpdGVFZGdlID0ge1xuICAgICAgICB0IDogJ2InLFxuICAgICAgICByIDogJ2wnLFxuICAgICAgICBiIDogJ3QnLFxuICAgICAgICBsIDogJ3InXG4gICAgfSxcbiAgICBlZGdlWm9uZSA9IHtcbiAgICAgICAgdCA6IDAsXG4gICAgICAgIHIgOiAxLFxuICAgICAgICBiIDogMixcbiAgICAgICAgbCA6IDNcbiAgICB9LFxuICAgIHpvbmVOYW1lcyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gICAgem9uZUVkZ2VzID0gWyd0JywgJ3InLCAnYicsICdsJ10sXG4gICAgem9uZURpbWVuc2lvbiA9IFsnd2lkdGgnLCAnaGVpZ2h0J10sXG4gICAgem9uZUNvb3JkID0gWzAsIDEsIDAsIDFdLFxuICAgIHplcm9NYXJnaW5zID0gWzAsIDAsIDAsIDBdLFxuICAgIGVkZ2VBbGlnblJFID0gL14oW3RyYmxjXSkoXFxkKikoJXxweCk/LShbdHJibGNdKShcXGQqKSglfHB4KT8kLztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgRE9NUmVjdCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5SZWN0YW5nbGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlJlY3RhbmdsZSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gbWluSGVpZ2h0PW51bGxcbiAgICAgKi9cbiAgICBtaW5IZWlnaHQgPSBudWxsXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IG1pbldpZHRoPW51bGxcbiAgICAgKi9cbiAgICBtaW5XaWR0aCA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiByZWN0MSBkb2VzIG5vdCBoYXZlIGFuIGludGVyc2VjdGlvbiB3aXRoIHJlY3QyXG4gICAgICogIWluY2x1ZGVzKCkgaXMgdHJ1ZSBmb3IgaW50ZXJzZWN0aW9ucyBhcyB3ZWxsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QxXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGV4Y2x1ZGVzKHJlY3QxLCByZWN0Mikge1xuICAgICAgICByZXR1cm4gcmVjdDEuYm90dG9tIDwgcmVjdDIudG9wICAgICAvLyByZWN0MiBpcyBiZWxvdyByZWN0MVxuICAgICAgICAgICAgfHwgcmVjdDEubGVmdCAgID4gcmVjdDIucmlnaHQgICAvLyByZWN0MiBpcyBsZWZ0IG9mIHJlY3QxXG4gICAgICAgICAgICB8fCByZWN0MS5yaWdodCAgPCByZWN0Mi5sZWZ0ICAgIC8vIHJlY3QyIGlzIHJpZ2h0IG9mIHJlY3QxXG4gICAgICAgICAgICB8fCByZWN0MS50b3AgICAgPiByZWN0Mi5ib3R0b207IC8vIHJlY3QyIGlzIGFib3ZlIHJlY3QxXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgb3ZlcmxhcHBpbmcgYXJlYSBvZiByZWN0MSAmIHJlY3QyIGFzIGEgbmV3IFJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSB7RE9NUmVjdHxOZW8udXRpbC5SZWN0YW5nbGV9IHJlY3QxXG4gICAgICogQHBhcmFtIHtET01SZWN0fE5lby51dGlsLlJlY3RhbmdsZX0gcmVjdDJcbiAgICAgKiBAcmV0dXJucyB7TmVvLnV0aWwuUmVjdGFuZ2xlfG51bGx9IFRoZSBpbnRlcnNlY3RpbmcgcmVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnRlcnNlY3Rpb24ocmVjdDEsIHJlY3QyKSB7XG4gICAgICAgIGxldCB4ICAgICAgPSBNYXRoLm1heChyZWN0MS54LCAgICAgIHJlY3QyLngpLFxuICAgICAgICAgICAgeSAgICAgID0gTWF0aC5tYXgocmVjdDEueSwgICAgICByZWN0Mi55KSxcbiAgICAgICAgICAgIHJpZ2h0ICA9IE1hdGgubWluKHJlY3QxLnJpZ2h0LCAgcmVjdDIucmlnaHQpLFxuICAgICAgICAgICAgYm90dG9tID0gTWF0aC5taW4ocmVjdDEuYm90dG9tLCByZWN0Mi5ib3R0b20pLFxuICAgICAgICAgICAgd2lkdGggID0gTWF0aC5tYXgoMCwgcmlnaHQgIC0geCksXG4gICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heCgwLCBib3R0b20gLSB5KTtcblxuICAgICAgICBpZiAoaGVpZ2h0IDwgMSB8fCB3aWR0aCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiByZWN0MiBpcyBmdWxseSBjb250YWluZWQgaW5zaWRlIHJlY3QxXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QxXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluY2x1ZGVzKHJlY3QxLCByZWN0Mikge1xuICAgICAgICByZXR1cm4gcmVjdDEuYm90dG9tID49IHJlY3QyLmJvdHRvbVxuICAgICAgICAgICAgJiYgcmVjdDEubGVmdCAgIDw9IHJlY3QyLmxlZnRcbiAgICAgICAgICAgICYmIHJlY3QxLnJpZ2h0ICA+PSByZWN0Mi5yaWdodFxuICAgICAgICAgICAgJiYgcmVjdDEudG9wICAgIDw9IHJlY3QyLnRvcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgcmVjdDIgaXMgbm90IGNvbnRhaW5lZCBpbnNpZGUgcmVjdDEuXG4gICAgICogVGhpcyBjb3VsZCBiZSBhbiBpbnRlcnNlY3Rpb24gb3IgYmVpbmcgZnVsbHkgZXhjbHVkZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QxXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY3QyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNpZGUgYm90dG9tLCBsZWZ0LCByaWdodCBvciB0b3BcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgbGVhdmVzU2lkZShyZWN0MSwgcmVjdDIsIHNpZGUpIHtcbiAgICAgICAgaWYgKFJlY3RhbmdsZS5pbmNsdWRlcyhyZWN0MSwgcmVjdDIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lkZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN0MS5ib3R0b20gPCByZWN0Mi5ib3R0b207XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdDEubGVmdCA+IHJlY3QyLmxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3QxLnJpZ2h0IDwgcmVjdDIucmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lkZSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN0MS50b3AgPiByZWN0Mi50b3A7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIGEgRE9NUmVjdCBvYmplY3QgdG8gYSBuZXcgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IFt4PW51bGxdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gW3k9bnVsbF1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtb3ZlZFJlY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgbW92ZUJ5KHJlY3QsIHg9bnVsbCwgeT1udWxsKSB7XG4gICAgICAgIGxldCBtb3ZlZFJlY3QgPSB7Li4ucmVjdH07XG5cbiAgICAgICAgaWYgKE5lby5pc051bWJlcih4KSkge1xuICAgICAgICAgICAgbW92ZWRSZWN0LmxlZnQgICs9IHg7XG4gICAgICAgICAgICBtb3ZlZFJlY3QucmlnaHQgKz0geDtcbiAgICAgICAgICAgIG1vdmVkUmVjdC54ICAgICArPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5pc051bWJlcih5KSkge1xuICAgICAgICAgICAgbW92ZWRSZWN0LmJvdHRvbSArPSB5O1xuICAgICAgICAgICAgbW92ZWRSZWN0LnRvcCAgICArPSB5O1xuICAgICAgICAgICAgbW92ZWRSZWN0LnkgICAgICArPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vdmVkUmVjdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIGEgRE9NUmVjdCBvYmplY3QgdG8gYSBuZXcgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IFt4PW51bGxdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gW3k9bnVsbF1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtb3ZlZFJlY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgbW92ZVRvKHJlY3QsIHg9bnVsbCwgeT1udWxsKSB7XG4gICAgICAgIGxldCBtb3ZlZFJlY3QgPSB7Li4ucmVjdH07XG5cbiAgICAgICAgaWYgKE5lby5pc051bWJlcih4KSkge1xuICAgICAgICAgICAgbW92ZWRSZWN0LmxlZnQgID0geDtcbiAgICAgICAgICAgIG1vdmVkUmVjdC5yaWdodCA9IHggKyBtb3ZlZFJlY3Qud2lkdGg7XG4gICAgICAgICAgICBtb3ZlZFJlY3QueCAgICAgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5pc051bWJlcih5KSkge1xuICAgICAgICAgICAgbW92ZWRSZWN0LmJvdHRvbSA9IHkgKyBtb3ZlZFJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgbW92ZWRSZWN0LnRvcCAgICA9IHk7XG4gICAgICAgICAgICBtb3ZlZFJlY3QueSAgICAgID0geTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3ZlZFJlY3Q7XG4gICAgfVxuXG4gICAgc2V0IGJvdHRvbShiKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ICs9IGIgLSB0aGlzLmJvdHRvbTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmJvdHRvbTtcbiAgICB9XG5cbiAgICBzZXQgcmlnaHQocikge1xuICAgICAgICB0aGlzLndpZHRoICs9IHIgLSB0aGlzLnJpZ2h0O1xuICAgIH1cbiAgICBnZXQgcmlnaHQoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5yaWdodDtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHggd2l0aG91dCBtb3ZpbmcgdGhlIFJlY3RhbmdsZS4gVGhlIGxlZnQgc2lkZSBtb3ZlcyBhbmQgdGhlIHJpZ2h0IHNpZGUgZG9lc24ndFxuICAgIGNoYW5nZVgoeCkge1xuICAgICAgICBjb25zdCB3aWR0aERlbHRhID0gdGhpcy54IC0geDtcblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLndpZHRoICs9IHdpZHRoRGVsdGE7XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSB5IHdpdGhvdXQgbW92aW5nIHRoZSBSZWN0YW5nbGUuIFRoZSB0b3Agc2lkZSBtb3ZlcyBhbmQgdGhlIGJvdHRvbSBzaWRlIGRvZXNuJ3RcbiAgICBjaGFuZ2VZKHkpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0RGVsdGEgPSB0aGlzLnkgLSB5O1xuXG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ICs9IGhlaWdodERlbHRhO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gUmVjdGFuZ2xlLmNsb25lKHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbG9uZShyKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWN0YW5nbGUoci54LCByLnksIHIud2lkdGgsIHIuaGVpZ2h0KTtcblxuICAgICAgICByZXN1bHQubWluV2lkdGggPSByLm1pbldpZHRoO1xuICAgICAgICByZXN1bHQubWluSGVpZ2h0ID0gci5taW5IZWlnaHQ7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpbnRlcnNlY3RzKG90aGVyKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob3RoZXIuaGVpZ2h0ICYmIG90aGVyLndpZHRoKSB7XG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIGxlZnQgICA9IE1hdGgubWF4KG1lLngsIG90aGVyLngpLFxuICAgICAgICAgICAgICAgIHRvcCAgICA9IE1hdGgubWF4KG1lLnksIG90aGVyLnkpLFxuICAgICAgICAgICAgICAgIHJpZ2h0ICA9IE1hdGgubWluKG1lLnggKyBtZS53aWR0aCwgb3RoZXIueCArIG90aGVyLndpZHRoKSxcbiAgICAgICAgICAgICAgICBib3R0b20gPSBNYXRoLm1pbihtZS55ICsgbWUuaGVpZ2h0LCBvdGhlci55ICsgb3RoZXIuaGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKGxlZnQgPj0gcmlnaHQgfHwgdG9wID49IGJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UncmUgZGVhbGluZyB3aXRoIGEgcG9pbnQgaGVyZSAtIHplcm8gZGltZW5zaW9uc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAob3RoZXIueCA+PSBtZS54ICYmIG90aGVyLnkgPj0gbWUueSAmJiBvdGhlci5yaWdodCA8PSBtZS5yaWdodCAmJiBvdGhlci5ib3R0b20gPD0gbWUuYm90dG9tKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgb3RoZXIgUmVjdGFuZ2xlIGlzIGZ1bGx5IGNvbnRhaW5lZCBpbnNpZGUgdGhpcyBSZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3RoZXJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBjb250YWlucyhvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5ib3R0b20gPj0gb3RoZXIuYm90dG9tXG4gICAgICAgICAgICAmJiB0aGlzLmxlZnQgICA8PSBvdGhlci5sZWZ0XG4gICAgICAgICAgICAmJiB0aGlzLnJpZ2h0ICA+PSBvdGhlci5yaWdodFxuICAgICAgICAgICAgJiYgdGhpcy50b3AgICAgPD0gb3RoZXIudG9wO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBjbG9uZSBvZiB0aGlzIFJlY3RhbmdsZSBleHBhbmRlZCBhY2NvcmRpbmcgdG8gdGhlIGVkZ2VzIGFycmF5LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyW119IGVkZ2VzXG4gICAgICogQHJldHVybnMge1JlY3RhbmdsZX1cbiAgICAgKi9cbiAgICBleHBhbmQoZWRnZXMpIHtcbiAgICAgICAgZWRnZXMgPSBwYXJzZUVkZ2VWYWx1ZShlZGdlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMueCAtIGVkZ2VzWzNdLCB0aGlzLnkgLSBlZGdlc1swXSwgdGhpcy53aWR0aCArIGVkZ2VzWzFdICsgZWRnZXNbM10sIHRoaXMuaGVpZ2h0ICsgZWRnZXNbMF0gKyBlZGdlc1syXSk7XG4gICAgfVxuXG4gICAgbW92ZUJ5KHggPSAwLCB5ID0gMCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNsb25lKCk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnggKz0geDtcbiAgICAgICAgcmVzdWx0LnkgKz0geTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGlzIFJlY3RhbmdsZSBjb21wbGV0ZWx5IGNvbnRhaW5zIHRoZSBvdGhlciBSZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0ge1JlY3RhbmdsZX0gb3RoZXJcbiAgICAgKi9cbiAgICBjb250YWlucyhvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5pbmNsdWRlcyh0aGlzLCBvdGhlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNvcHkgb2YgdGhpcyBSZWN0YW5nbGUgY29uc3RyYWluZWQgdG8gZml0IHdpdGhpbiB0aGUgcGFzc2VkIFJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBjb25zdHJhaW5Ub1xuICAgICAqIEByZXR1cm5zIHtSZWN0YW5nbGV8Qm9vbGVhbn0gQSBuZXcgUmVjdGFuZ2xlIGNvbnN0cmFpbmVkIHRvIHRlIHBhc3NlZCBSZWN0YW5nbGUsIG9yIGZhbHNlIGlmIGl0IGNvdWxkIG5vdCBiZSBjb25zdHJhaW5lZC5cbiAgICAgKi9cbiAgICBjb25zdHJhaW5Ubyhjb25zdHJhaW5Ubykge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG1pbldpZHRoICA9IG1lLm1pbldpZHRoICB8fCBtZS53aWR0aCxcbiAgICAgICAgICAgIG1pbkhlaWdodCA9IG1lLm1pbkhlaWdodCB8fCBtZS5oZWlnaHQ7XG5cbiAgICAgICAgLy8gTm90IHBvc3NpYmxlLCBldmVuIHdoZW4gc2hydW5rIHRvIG1pbmltYVxuICAgICAgICBpZiAobWluSGVpZ2h0ID4gY29uc3RyYWluVG8uaGVpZ2h0IHx8IG1pbldpZHRoID4gY29uc3RyYWluVG8ud2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGRvIG5vdCBtdXRhdGUgdGhpcyBSZWN0YW5nbGUsIGJ1dCByZXR1cm4gYSBjb25zdHJhaW5lZCB2ZXJzaW9uXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG1lLmNsb25lKCk7XG5cbiAgICAgICAgLy8gVHJhbnNsYXRlIHJlc3VsdCBzbyB0aGF0IHRoZSB0b3AgYW5kIGxlZnQgYXJlIHZpc2libGVcbiAgICAgICAgcmVzdWx0LnggPSBNYXRoLm1heChtZS54ICsgTWF0aC5taW4oY29uc3RyYWluVG8ucmlnaHQgIC0gcmVzdWx0LnJpZ2h0LCAgMCksIGNvbnN0cmFpblRvLngpO1xuICAgICAgICByZXN1bHQueSA9IE1hdGgubWF4KG1lLnkgKyBNYXRoLm1pbihjb25zdHJhaW5Uby5ib3R0b20gLSByZXN1bHQuYm90dG9tLCAwKSwgY29uc3RyYWluVG8ueSk7XG5cbiAgICAgICAgLy8gUHVsbCBpbiBhbnkgcmVzdWx0aW5nIG92ZXJmbG93XG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBNYXRoLm1pbihyZXN1bHQuYm90dG9tLCBjb25zdHJhaW5Uby5ib3R0b20pO1xuICAgICAgICByZXN1bHQucmlnaHQgPSBNYXRoLm1pbihyZXN1bHQucmlnaHQsIGNvbnN0cmFpblRvLnJpZ2h0KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFsaWduVG8oYWxpZ24pIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdHJhaW5UbywgICAgLy8gRWxlbWVudCBvciBSZWN0YW5nbGUgcmVzdWx0IG11c3QgZml0IGludG9cbiAgICAgICAgICAgICAgICB0YXJnZXQsICAgICAgICAgLy8gRWxlbWVudCBvciBSZWN0YW5nbGUgdG8gYWxpZ24gdG9cbiAgICAgICAgICAgICAgICBlZGdlQWxpZ24sICAgICAgLy8gdDUwLWI1MCB0eXBlIHN0cmluZ1xuICAgICAgICAgICAgICAgIGF4aXNMb2NrLCAgICAgICAvLyB0cnVlIGZvciBmbGlwLCAnZmxleGlibGUnIGZvciBmbGlwLCB0aGVuIHRyeSB0aGUgb3RoZXIgZWRnZXNcbiAgICAgICAgICAgICAgICBvZmZzZXQsICAgICAgICAgLy8gRmluYWwgW3gsIHldIHZlY3RvciB0byBtb3ZlIHRoZSByZXN1bHQgYnkuXG4gICAgICAgICAgICAgICAgbWF0Y2hTaXplXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICA9IGFsaWduLFxuICAgICAgICAgICAgdGFyZ2V0TWFyZ2luICAgPSBhbGlnbi50YXJnZXRNYXJnaW4gPyBwYXJzZUVkZ2VWYWx1ZShhbGlnbi50YXJnZXRNYXJnaW4pIDogemVyb01hcmdpbnMsXG4gICAgICAgICAgICB0YXJnZXRSZWN0ICAgICA9IGdldEVsUmVjdCh0YXJnZXQpLFxuICAgICAgICAgICAgY29uc3RyYWluUmVjdCAgPSBnZXRFbFJlY3QoY29uc3RyYWluVG8pLFxuICAgICAgICAgICAgZWRnZXMgICAgICAgICAgPSBwYXJzZUVkZ2VBbGlnbihlZGdlQWxpZ24pLFxuICAgICAgICAgICAgbWF0Y2hEaW1lbnNpb24gPSB6b25lRGltZW5zaW9uW2VkZ2VzLnRoZWlyRWRnZVpvbmUgJiAxXTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gbWUuY2xvbmUoKTtcblxuICAgICAgICBpZiAobWF0Y2hTaXplKSB7XG4gICAgICAgICAgICByZXN1bHRbbWF0Y2hEaW1lbnNpb25dID0gdGFyZ2V0UmVjdFttYXRjaERpbWVuc2lvbl07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNdXN0IGRvIHRoZSBjYWxjdWxhdGlvbnMgYWZ0ZXIgdGhlIGFsaWduZWQgc2lkZSBoYXMgYmVlbiBtYXRjaGVkIGluIHNpemUgaWYgcmVxdWVzdGVkLlxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgbXlQb2ludCAgICAgPSByZXN1bHQuZ2V0QW5jaG9yUG9pbnQoZWRnZXMub3VyRWRnZVpvbmUsIGVkZ2VzLm91ckVkZ2VPZmZzZXQsIGVkZ2VzLm91ckVkZ2VVbml0KSxcbiAgICAgICAgICAgIHRhcmdldFBvaW50ID0gdGFyZ2V0UmVjdC5nZXRBbmNob3JQb2ludChlZGdlcy50aGVpckVkZ2Vab25lLCBlZGdlcy50aGVpckVkZ2VPZmZzZXQsIGVkZ2VzLnRoZWlyRWRnZVVuaXQsIHRhcmdldE1hcmdpbiksXG4gICAgICAgICAgICB2ZWN0b3IgICAgICA9IFt0YXJnZXRQb2ludFswXSAtIG15UG9pbnRbMF0sIHRhcmdldFBvaW50WzFdIC0gbXlQb2ludFsxXV07XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1vdmVCeSh2ZWN0b3IpO1xuXG4gICAgICAgIC8vIEEgdXNlZnVsIHByb3BlcnR5IGluIHRoZSByZXN1bHRpbmcgcmVjdGFuZ2xlIHdoaWNoIHNwZWNpZmllcyB3aGljaCB6b25lIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgLy8gSXQgaXMgYmVpbmcgcGxhY2VzIGluLCBULFIsQiBvciBMIC0gMCwgMSwgMiwgM1xuICAgICAgICAvLyBTb21lIGNvZGUgbWF5IHdhbnQgdG8gdHJlYXQgRE9NIGVsZW1lbnRzIGRpZmZlcmVudGx5IGRlcGVuZGluZyBvbiB0aGUgem9uZVxuICAgICAgICByZXN1bHQuem9uZSA9IGVkZ2VzLnRoZWlyRWRnZVpvbmU7XG4gICAgICAgIHJlc3VsdC5wb3NpdGlvbiA9IHpvbmVOYW1lc1tyZXN1bHQuem9uZV07XG5cbiAgICAgICAgLy8gTm93IHdlIGNyZWF0ZSB0aGUgZm91ciBSZWN0YW5nbGVzIGFyb3VuZCB0aGUgdGFyZ2V0LCBpbnRvIHdoaWNoIHdlIG1heSBiZSBjb25zdHJhaW5lZFxuICAgICAgICAvLyBab25lcyBULFIsQixMIDAgOSwgMSwgMiwgMzpcbiAgICAgICAgLy8gKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAgICAvLyB8ICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICBeICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICBeICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgIDwtLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLVpvbmUgMC0tLS0tLS0tLSstLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0+ICAgfCB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8ICstLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKyB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICB8ICstLS0tLS0tLS0tLS0tLS0tLS0tLSsgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgfCB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICB8IHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgfCAgICAgICBab25lIDMgICAgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgIHwgfCAgICAgICAgICBab25lIDEgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgfCB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICB8IHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICB8ICstLS0tLS0tLS0tLS0tLS0tLS0tLSsgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCArKy0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLSsgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgIDwtLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tWm9uZSAyLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLT4gfCB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHYgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgIHYgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8ICsrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyB8XG4gICAgICAgIC8vICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgICAgaWYgKGNvbnN0cmFpblJlY3QgJiYgIWNvbnN0cmFpblJlY3QuY29udGFpbnMocmVzdWx0KSkge1xuICAgICAgICAgICAgLy8gVGhleSBhc2tlZCB0byBvdmVybGFwIHRoZSB0YXJnZXQsIGZvciBleGFtcGxlIHQwLXQwXG4gICAgICAgICAgICAvLyBJbiB0aGVzZSBjYXNlcywgd2UganVzdCByZXR1cm4gdGhlIHJlc3VsdFxuICAgICAgICAgICAgaWYgKHRhcmdldFJlY3QuaW50ZXJzZWN0cyhyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgem9uZSB3ZSB0cnkgdG8gZml0IGludG8gZmlyc3QsIHRoZSBvbmUgdGhhdCB3YXMgYXNrZWQgZm9yXG4gICAgICAgICAgICBsZXQgem9uZSA9IGVkZ2VzLnRoZWlyRWRnZVpvbmU7XG5cbiAgICAgICAgICAgIC8vIFdlIGNyZWF0ZSBhbiBhcnJheSBvZiBmb3VyIHJlY3RhbmdsZXMgaW50byB3aGljaCB3ZSB0cnkgdG8gZml0IHdpdGggYXBwcm9wcmlhdGUgYWxpZ24gc3BlY3MuXG4gICAgICAgICAgICAvLyBXZSBtdXN0IHN0YXJ0IHdpdGggdGhlIHJlcXVlc3RlZCB6b25lLCB3aGF0ZXZlciB0aGF0IGlzLlxuICAgICAgICAgICAgY29uc3Qgem9uZXNUb1RyeSA9IFt7XG4gICAgICAgICAgICAgICAgem9uZSxcbiAgICAgICAgICAgICAgICBlZGdlQWxpZ25cbiAgICAgICAgICAgIH1dO1xuXG4gICAgICAgICAgICBpZiAoYXhpc0xvY2spIHtcbiAgICAgICAgICAgICAgICAvLyBGbGlwIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIGZvciB0aGUgc2Vjb25kIHRyeS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgYWxpZ25tZW50IHN0cmluZyBoYXMgdG8gYmUgcmV2ZXJzZWRcbiAgICAgICAgICAgICAgICAvLyBzbyByMjAtbDMwIGhhcyB0byBiZWNvbWUgbDIwLXIzMC5cbiAgICAgICAgICAgICAgICAvLyBUaGUgb3RoZXIgdHdvIHpvbmVzIHJldmVydCB0byBjZW50ZXJlZCBzbyBhcmUgZWFzaWVyXG4gICAgICAgICAgICAgICAgem9uZXNUb1RyeVsxXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgem9uZSAgICAgIDogem9uZSA9ICh6b25lICsgMikgJSA0LFxuICAgICAgICAgICAgICAgICAgICBlZGdlQWxpZ24gOiBjcmVhdGVSZXZlcnNlZEVkZ2VBbGlnbihlZGdlcylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBGYWxsIGJhY2sgdG8gdGhlIG90aGVyIHR3byB6b25lcy5cbiAgICAgICAgICAgICAgICB6b25lc1RvVHJ5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB6b25lICAgICAgOiB6b25lID0gKGVkZ2VzLnRoZWlyRWRnZVpvbmUgKyAxKSAlIDQsXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VBbGlnbiA6IGAke29wcG9zaXRlRWRnZVt6b25lRWRnZXNbem9uZV1dfS0ke3pvbmVFZGdlc1t6b25lXX1gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgem9uZXNUb1RyeS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgem9uZSAgICAgIDogem9uZSA9IChlZGdlcy50aGVpckVkZ2Vab25lICsgMykgJSA0LFxuICAgICAgICAgICAgICAgICAgICBlZGdlQWxpZ24gOiBgJHtvcHBvc2l0ZUVkZ2Vbem9uZUVkZ2VzW3pvbmVdXX0tJHt6b25lRWRnZXNbem9uZV19YFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgb3RoZXIgem9uZXMgaW4gb3JkZXJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB6b25lc1RvVHJ5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgem9uZSAgICAgIDogem9uZSA9ICh6b25lICsgMSkgJSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZUFsaWduIDogYCR7b3Bwb3NpdGVFZGdlW3pvbmVFZGdlc1t6b25lXV19LSR7em9uZUVkZ2VzW3pvbmVdfWBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGNvbnN0cmFpbnQgUmVjdGFuZ2xlIGZvciBlYWNoIHpvbmVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgem9uZXNUb1RyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIFdlIGNsb25lIHRoZSBvdXRlciBjb25zdHJhaW5pbmcgcmVjdGFuZ2xlXG4gICAgICAgICAgICAgICAgLy8gYW5kIG1vdmUgaXQgaW50byBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBjb25zdHJhaW5SZWN0LmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHpvbmVzVG9UcnlbaV0uem9uZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgem9uZSBpMiBhYm92ZSB0aGUgdGFyZ2V0IC0gem9uZSAwL1RcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYm90dG9tID0gdGFyZ2V0UmVjdC55IC0gdGFyZ2V0TWFyZ2luWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB6b25lIGlzIHRvIHRoZSByaWdodCBvZiB0aGUgdGFyZ2V0IC0gem9uZSAxL1JcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuY2hhbmdlWCh0YXJnZXRSZWN0LnJpZ2h0ICsgdGFyZ2V0TWFyZ2luWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgem9uZSBpcyBiZWxvdyB0aGUgdGFyZ2V0IC0gem9uZSAyL0JcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuY2hhbmdlWSh0YXJnZXRSZWN0LmJvdHRvbSArIHRhcmdldE1hcmdpblsyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHpvbmUgaXMgdG8gdGhlIGxlZnQgb2YgdGhlIHRhcmdldCAtIHpvbmUgMy9MXG4gICAgICAgICAgICAgICAgICAgICAgICBjLnJpZ2h0ID0gdGFyZ2V0UmVjdC54IC0gdGFyZ2V0TWFyZ2luWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHpvbmVzVG9UcnlbaV0uY29uc3RyYWluUmVjdCA9IGM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE5vdyB0cnkgdG8gY29uc3RyYWluIG91ciByZXN1bHQgaW50byBlYWNoIHpvbmUncyBjb25zdHJhaW50Wm9uZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB6b25lc1RvVHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgem9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VBbGlnbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpblJlY3RcbiAgICAgICAgICAgICAgICAgICAgfSAgICA9IHpvbmVzVG9UcnlbaV0sXG4gICAgICAgICAgICAgICAgICAgIGVkZ2UgPSB6b25lRWRnZXNbem9uZV07XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhbGlnbmluZyB0byB0aGUgcmVxdWVzdGVkIGVkZ2UsIG9yIGl0J3Mgb3Bwb3NpdGUgZWRnZSB0aGVuXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoIHRoYXQgZWRnZSBzaXplLCBlbHNlIHJldmVydCBpdCB0byBvdXIgb3duIHNpemVcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W21hdGNoRGltZW5zaW9uXSA9IGVkZ2UgPT09IGVkZ2VzLnRoZWlyRWRnZSB8fCBlZGdlID09IG9wcG9zaXRlRWRnZVtlZGdlcy50aGVpckVkZ2VdID8gdGFyZ2V0UmVjdFttYXRjaERpbWVuc2lvbl0gOiBtZVttYXRjaERpbWVuc2lvbl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRG8gYSBzaW1wbGUgYWxpZ24gdG8gdGhlIGN1cnJlbnQgZWRnZVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5hbGlnblRvKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IDogdGFyZ2V0UmVjdCxcbiAgICAgICAgICAgICAgICAgICAgZWRnZUFsaWduLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRNYXJnaW5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxldCBzb2x1dGlvbiA9IHJlc3VsdC5jb25zdHJhaW5Ubyhjb25zdHJhaW5SZWN0KTtcblxuICAgICAgICAgICAgICAgIC8vIEFzIHNvb24gYXMgd2UgZmluZCBhIHpvbmUgaW50byB3aGljaCB0aGUgcmVzdWx0IGlzIHdpbGxpbmcgdG8gYmUgY29uc3RyYWluZWQuIHJldHVybiBpdFxuICAgICAgICAgICAgICAgIGlmIChzb2x1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbi56b25lID0gem9uZTtcbiAgICAgICAgICAgICAgICAgICAgc29sdXRpb24ucG9zaXRpb24gPSB6b25lTmFtZXNbem9uZV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2x1dGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdGhlIGNvbmZpZ3VyYWJsZSBmaW5pc2hpbmcgdG91Y2guXG4gICAgICAgIGlmIChvZmZzZXQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5tb3ZlQnkob2Zmc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0QW5jaG9yUG9pbnQoZWRnZVpvbmUsIGVkZ2VPZmZzZXQsIGVkZ2VVbml0LCBtYXJnaW4gPSBlbXB0eUFycmF5KSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgIC8vIEVkZ2Ugem9uZXMgZ28gdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XG4gICAgICAgIC8vIEVhY2ggb25lIGNhbGN1bGF0ZXMgdGhlIHN0YXJ0IHBvaW50IG9mIHRoYXQgZWRnZSB0aGVuIG1vdmVzIGFsb25nIGl0IGJ5XG4gICAgICAgIC8vIHRoZSBlZGdlT2Zmc2V0LCB0aGVuIG1vdmVzICphd2F5KiBmcm9tIGl0IGJ5IHRoZSBtYXJnaW4gZm9yIHRoYXQgZWRnZSBpZiB0aGVyZSdzIGEgbWFyZ2luLlxuICAgICAgICBzd2l0Y2ggKGVkZ2Vab25lKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW21lLngsIG1lLnkgLSAobWFyZ2luWzBdIHx8IDApLCBtZS53aWR0aCwgMF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW21lLnggKyBtZS53aWR0aCArIChtYXJnaW5bMV0gfHwgMCksIG1lLnksIG1lLmhlaWdodCwgMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW21lLngsIG1lLnkgKyBtZS5oZWlnaHQgKyAobWFyZ2luWzJdIHx8IDApLCBtZS53aWR0aCwgMF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gW21lLnggLSAobWFyZ2luWzNdIHx8IDApLCBtZS55LCBtZS5oZWlnaHQsIDFdO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtyZXN1bHRbM11dICs9IGVkZ2VVbml0ID09PSAnJScgPyByZXN1bHRbMl0gLyAxMDAgKiBlZGdlT2Zmc2V0IDogZWRnZU9mZnNldDtcbiAgICAgICAgcmVzdWx0Lmxlbmd0aCA9IDI7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXF1YWxzKG90aGVyKSB7XG4gICAgICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIERPTVJlY3QgJiZcbiAgICAgICAgICAgIG90aGVyLnggPT09IHRoaXMueCAmJlxuICAgICAgICAgICAgb3RoZXIueSA9PT0gdGhpcy55ICYmXG4gICAgICAgICAgICBvdGhlci5oZWlnaHQgPT09IHRoaXMuaGVpZ2h0ICYmXG4gICAgICAgICAgICBvdGhlci53aWR0aCA9PT0gdGhpcy53aWR0aDtcbiAgICB9XG5cbiAgICAvLyBGb3IgZGVidWdnaW5nIHB1cnBvc2VzIG9ubHlcbiAgICBzaG93KGNvbG9yID0gJ3JlZCcpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZGl2LnN0eWxlID0gYFxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlM2QoJHt0aGlzLnh9cHgsICR7dGhpcy55fXB4LCAwKTtcbiAgICAgICAgICAgIGhlaWdodDoke3RoaXMuaGVpZ2h0fXB4O1xuICAgICAgICAgICAgd2lkdGg6JHt0aGlzLndpZHRofXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke2NvbG9yfVxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGl2LnJlbW92ZSgpLCAzMDAwMCk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB1c2luZyBKU09OLnN0cmluZ2lmeSh0aGlzKSwgd2Ugd2FudCB0byBhZGQgbWluSGVpZ2h0ICYgbWluV2lkdGggdG8gdGhlIG91dHB1dC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3Qge2JvdHRvbSwgaGVpZ2h0LCBsZWZ0LCBtaW5IZWlnaHQsIG1pbldpZHRoLCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeX0gPSB0aGlzO1xuICAgICAgICByZXR1cm4ge2JvdHRvbSwgaGVpZ2h0LCBsZWZ0LCBtaW5IZWlnaHQsIG1pbldpZHRoLCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeX1cbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuU3RyaW5nXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFN0cmluZ1V0aWwgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJFbnRpdHlNYXBcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGNoYXJFbnRpdHlNYXAgPSB7XG4gICAgICAgICcmJyA6ICcmYW1wOycsXG4gICAgICAgICc8JyA6ICcmbHQ7JyxcbiAgICAgICAgJz4nIDogJyZndDsnLFxuICAgICAgICAnXCInIDogJyZxdW90OycsXG4gICAgICAgICdcXCcnOiAnJmFwb3M7JyxcbiAgICAgICAgJyQnIDogJyZkb2xsYXI7JyxcbiAgICAgICAgJ1xcXFwnOiAnJmJzb2w7JyxcbiAgICAgICAgJy8nIDogJyZzb2w7J1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGNoYXJQYXR0ZXJuXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBjaGFyUGF0dGVybiA9IC9bJjw+XCInJFxcXFxdL2dcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGVudGl0eVBhdHRlcm5cbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGVudGl0eVBhdHRlcm4gPSAvKCZhbXA7KXwoJmx0Oyl8KCZndDspfCgmcXVvdDspfCgmYXBvczspfCgmZG9sbGFyOyl8KCZic29sOyl8KCZzb2w7KS9nXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLlN0cmluZydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuU3RyaW5nJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVzY2FwZSBIVE1MIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyBlc2NhcGVIdG1sKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7IC8vIGluc2lkZSBhIHN0YXRpYyBtZXRob2QsIHdlIGFyZSBwb2ludGluZyB0byB0aGUgY2xhc3MgcHJvdG90eXBlXG5cbiAgICAgICAgaWYgKCFOZW8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKG1lLmNoYXJQYXR0ZXJuLCBtZS5nZXRFbnRpdHlGcm9tQ2hhci5iaW5kKG1lKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY2hhciBlcXVpdmFsZW50IG9mIGEgbWFwcGVkIGVudGl0eVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBlbnRpdHlcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2hhckZyb21FbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIGxldCBtYXBwZWRDaGFyID0gT2JqZWN0LmtleXModGhpcy5jaGFyRW50aXR5TWFwKS5maW5kKGtleSA9PiB0aGlzLmNoYXJFbnRpdHlNYXBba2V5XSA9PT0gZW50aXR5KTtcbiAgICAgICAgcmV0dXJuIG1hcHBlZENoYXIgfHwgZW50aXR5XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGVudGl0eSBlcXVpdmFsZW50IG9mIGEgbWFwcGVkIGNoYXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2hhclxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRFbnRpdHlGcm9tQ2hhcihjaGFyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJFbnRpdHlNYXBbY2hhcl0gfHwgY2hhclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVuZXNjYXBlIEhUTUwgc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHVuZXNjYXBlSHRtbCh2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzOyAvLyBpbnNpZGUgYSBzdGF0aWMgbWV0aG9kLCB3ZSBhcmUgcG9pbnRpbmcgdG8gdGhlIGNsYXNzIHByb3RvdHlwZVxuXG4gICAgICAgIGlmICghTmVvLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShtZS5lbnRpdHlQYXR0ZXJuLCBtZS5nZXRDaGFyRnJvbUVudGl0eS5iaW5kKG1lKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXNzZWQgc3RyaW5nIHdpdGggdGhlIGZpcnN0IGxldHRlciB1bmNhcGl0YWxpemVkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zICB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyB1bmNhcGl0YWxpemUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlWzBdLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHJpbmcoMSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFN0cmluZ1V0aWwpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBEb21BY2Nlc3MgICAgICAgICAgZnJvbSAnLi4vbWFpbi9Eb21BY2Nlc3MubWpzJztcbmltcG9ydCBEb21FdmVudHMgICAgICAgICAgZnJvbSAnLi4vbWFpbi9Eb21FdmVudHMubWpzJztcbmltcG9ydCBNZXNzYWdlICAgICAgICAgICAgZnJvbSAnLi9NZXNzYWdlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyBmcm9tICcuL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMnO1xuXG5jb25zdCBOZW9Db25maWcgICAgPSBOZW8uY29uZmlnLFxuICAgICAgaGFzSnNNb2R1bGVzID0gTmVvQ29uZmlnLmVudmlyb25tZW50ID09PSAnZGV2ZWxvcG1lbnQnIHx8IE5lb0NvbmZpZy5lbnZpcm9ubWVudCA9PT0gJ2Rpc3QvZXNtJztcblxuLy8gVXNpbmcgPy4gc2luY2UgU1dzIGRvIG5vdCBleGlzdCBmb3IgaHR0cCAob25seSBodHRwcylcbm5hdmlnYXRvci5zZXJ2aWNlV29ya2VyPy5hZGRFdmVudExpc3RlbmVyKCdjb250cm9sbGVyY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG59LCB7b25jZTogdHJ1ZX0pO1xuXG4vKipcbiAqIFRoZSB3b3JrZXIgbWFuYWdlciBsaXZlcyBpbnNpZGUgdGhlIG1haW4gdGhyZWFkIGFuZCBjcmVhdGVzIHRoZSBBcHAsIERhdGEgJiBWRG9tIHdvcmtlci5cbiAqIEFsc28sIHJlc3BvbnNpYmxlIGZvciBzZW5kaW5nIG1lc3NhZ2VzIGZyb20gdGhlIG1haW4gdGhyZWFkIHRvIHRoZSBkaWZmZXJlbnQgd29ya2Vycy5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLk1hbmFnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5NYW5hZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLk1hbmFnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBhY3RpdmVXb3JrZXJzPTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlV29ya2VyczogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBhcHBOYW1lcz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBhcHBOYW1lczogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvbnN0cnVjdGVkVGhyZWFkcz0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdGVkVGhyZWFkczogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9W09ic2VydmFibGUsIFJlbW90ZU1ldGhvZEFjY2Vzc11cbiAgICAgICAgICovXG4gICAgICAgIG1peGluczogW09ic2VydmFibGUsIFJlbW90ZU1ldGhvZEFjY2Vzc10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGluIGNhc2UgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyB3aW5kb3cuU2hhcmVkV29ya2VyLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaGFyZWRXb3JrZXJzRW5hYmxlZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaGFyZWRXb3JrZXJzRW5hYmxlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHRvIHN0b3AgdGhlIHdvcmtlciBjb21tdW5pY2F0aW9uIGluIGNhc2UgdGhlaXIgY3JlYXRpb24gZmFpbHNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc3RvcENvbW11bmljYXRpb249ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcENvbW11bmljYXRpb246IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgd2luZG93Lldvcmtlci5cbiAgICAgICAgICogVGhlIG5lby5tanMgZnJhbWV3b3JrIGlzIG5vdCBhYmxlIHRvIHJ1biB3aXRob3V0IHdlYiB3b3JrZXJzLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaGFyZWRXb3JrZXJzRW5hYmxlZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3ZWJXb3JrZXJzRW5hYmxlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2luZyB0aGUgY3VycmVudCB0aW1lc3RhbXAgYXMgYW4gdW5pcXVlIHdpbmRvdyBpZGVudGlmaWVyXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gd2luZG93SWQ9bmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd2luZG93SWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGFpbnMgdGhlIGZpbGVOYW1lcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHdvcmtlcnNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2Vyczoge1xuICAgICAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGhhc0pzTW9kdWxlcyA/ICdBcHAubWpzJyAgICA6ICdhcHB3b3JrZXIuanMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGhhc0pzTW9kdWxlcyA/ICdDYW52YXMubWpzJyA6ICdjYW52YXN3b3JrZXIuanMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBoYXNKc01vZHVsZXMgPyAnRGF0YS5tanMnICAgOiAnZGF0YXdvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YXNrOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGhhc0pzTW9kdWxlcyA/ICdUYXNrLm1qcycgICA6ICd0YXNrd29ya2VyLmpzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogaGFzSnNNb2R1bGVzID8gJ1ZEb20ubWpzJyAgIDogJ3Zkb213b3JrZXIuanMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyIGNhbiBiZSBudWxsIGluIGNhc2Ugd2UgbG9hZCBhIHBhZ2UgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICogb3IgaW4gY2FzZSBvZiBhIGZvcmNlIHJlZnJlc2guXG4gICAgICogU2VlOiBodHRwczovL3d3dy53My5vcmcvVFIvc2VydmljZS13b3JrZXJzLyNuYXZpZ2F0b3Itc2VydmljZS13b3JrZXItY29udHJvbGxlclxuICAgICAqIE9ubHkgaW4gdGhpcyBjYXNlIG1haW4uYWRkb24uU2VydmljZVdvcmtlciB3aWxsIHN0b3JlIHRoZSBhY3RpdmUgcmVnaXN0cmF0aW9uIG9uY2UgcmVhZHkgaGVyZS5cbiAgICAgKiBAbWVtYmVyIHtTZXJ2aWNlV29ya2VyfG51bGx9IHNlcnZpY2VXb3JrZXI9bnVsbFxuICAgICAqL1xuICAgIHNlcnZpY2VXb3JrZXIgPSBudWxsXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmRldGVjdEZlYXR1cmVzKCk7XG5cbiAgICAgICAgIU5lby5pbnNpZGVXb3JrZXIgJiYgbWUuY3JlYXRlV29ya2VycygpO1xuXG4gICAgICAgIE5lby53b3JrZXJJZCA9ICdtYWluJztcblxuICAgICAgICBtZS5wcm9taXNlcyA9IHt9O1xuXG4gICAgICAgIG1lLm9uKHtcbiAgICAgICAgICAgICdtZXNzYWdlOmFkZERvbUxpc3RlbmVyJyAgICA6IHtmbjogRG9tRXZlbnRzLmFkZERvbUxpc3RlbmVyLCAgICAgICBzY29wZTogRG9tRXZlbnRzfSxcbiAgICAgICAgICAgICdtZXNzYWdlOmdldE9mZnNjcmVlbkNhbnZhcyc6IHtmbjogRG9tQWNjZXNzLm9uR2V0T2Zmc2NyZWVuQ2FudmFzLCBzY29wZTogRG9tQWNjZXNzfSxcbiAgICAgICAgICAgICdtZXNzYWdlOnJlYWREb20nICAgICAgICAgICA6IHtmbjogRG9tQWNjZXNzLm9uUmVhZERvbSwgICAgICAgICAgICBzY29wZTogRG9tQWNjZXNzfSxcbiAgICAgICAgICAgICdtZXNzYWdlOnJlZ2lzdGVyUmVtb3RlJyAgICA6IHtmbjogbWUub25SZWdpc3RlclJlbW90ZSwgICAgICAgICAgICBzY29wZTogbWV9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6d29ya2VyQ29uc3RydWN0ZWQnIDoge2ZuOiBtZS5vbldvcmtlckNvbnN0cnVjdGVkLCAgICAgICAgIHNjb3BlOiBtZX1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gZWFjaCB3b3JrZXIgZGVmaW5lZCBpbnNpZGUgdGhlIHRoaXMud29ya2VycyBjb25maWcuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIGJyb2FkY2FzdChtc2cpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy53b3JrZXJzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCEoXG4gICAgICAgICAgICAgICAgbmFtZSA9PT0gJ2NhbnZhcycgJiYgIU5lb0NvbmZpZy51c2VDYW52YXNXb3JrZXIgfHxcbiAgICAgICAgICAgICAgICBuYW1lID09PSAndGFzaycgICAmJiAhTmVvQ29uZmlnLnVzZVRhc2tXb3JrZXIgICB8fFxuICAgICAgICAgICAgICAgIG5hbWUgPT09ICd2ZG9tJyAgICYmICFOZW9Db25maWcudXNlVmRvbVdvcmtlclxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobmFtZSwgbXNnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd2ViIHdvcmtlciB1c2luZyB0aGUgcGFzc2VkIG9wdGlvbnMgYXMgd2VsbCBhcyBhZGRpbmcgZXJyb3IgJiBtZXNzYWdlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtTaGFyZWRXb3JrZXJ8V29ya2VyfVxuICAgICAqL1xuICAgIGNyZWF0ZVdvcmtlcihvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtmaWxlTmFtZX0gPSBvcHRzLFxuICAgICAgICAgICAgZmlsZVBhdGggICA9IChvcHRzLmJhc2VQYXRoIHx8IE5lby5jb25maWcud29ya2VyQmFzZVBhdGgpICsgZmlsZU5hbWUsXG4gICAgICAgICAgICBuYW1lICAgICAgID0gYG5lb21qcy0ke2ZpbGVOYW1lLnN1YnN0cmluZygwLCBmaWxlTmFtZS5pbmRleE9mKCcuJykpLnRvTG93ZXJDYXNlKCl9LXdvcmtlcmAsXG4gICAgICAgICAgICBpc1NoYXJlZCAgID0gbWUuc2hhcmVkV29ya2Vyc0VuYWJsZWQgJiYgTmVvQ29uZmlnLnVzZVNoYXJlZFdvcmtlcnMsXG4gICAgICAgICAgICBjbHMgICAgICAgID0gaXNTaGFyZWQgPyBTaGFyZWRXb3JrZXIgOiBXb3JrZXIsXG4gICAgICAgICAgICB3b3JrZXIgICAgID0gaGFzSnNNb2R1bGVzXG4gICAgICAgICAgICAgICAgPyBuZXcgY2xzKGZpbGVQYXRoLCB7bmFtZSwgdHlwZTogJ21vZHVsZSd9KVxuICAgICAgICAgICAgICAgIDogbmV3IGNscyhmaWxlUGF0aCwge25hbWV9KTtcblxuICAgICAgICAoaXNTaGFyZWQgPyB3b3JrZXIucG9ydCA6IHdvcmtlcikub25tZXNzYWdlID0gbWUub25Xb3JrZXJNZXNzYWdlLmJpbmQobWUpO1xuICAgICAgICAoaXNTaGFyZWQgPyB3b3JrZXIucG9ydCA6IHdvcmtlcikub25lcnJvciAgID0gbWUub25Xb3JrZXJFcnJvciAgLmJpbmQobWUpO1xuXG4gICAgICAgIG1lLmFjdGl2ZVdvcmtlcnMrKztcblxuICAgICAgICByZXR1cm4gd29ya2VyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgY3JlYXRlV29ya2VyIGZvciBlYWNoIHdvcmtlciBpbnNpZGUgdGhlIHRoaXMud29ya2VycyBjb25maWcuXG4gICAgICovXG4gICAgY3JlYXRlV29ya2VycygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgICAgID0gTmVvLmNsb25lKE5lb0NvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICB7aGFzaCwgaHJlZiwgc2VhcmNofSA9IGxvY2F0aW9uLFxuICAgICAgICAgICAge3dpbmRvd0lkfSAgICAgICAgICAgPSBtZSxcbiAgICAgICAgICAgIGtleSwgdmFsdWU7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGNvbmZpZ3Mgd2hpY2ggYXJlIG5vdCByZWxldmFudCBmb3IgdGhlIHdvcmtlcnMgc2NvcGVcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5jZXNpdW1Kc1Rva2VuO1xuXG4gICAgICAgIC8vIHBhc3MgdGhlIGluaXRpYWwgaGFzaCB2YWx1ZSBhcyBOZW8uY29uZmlnc1xuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgY29uZmlnLmhhc2ggPSB7XG4gICAgICAgICAgICAgICAgaGFzaCAgICAgIDogRG9tRXZlbnRzLnBhcnNlSGFzaChoYXNoLnN1YnN0cmluZygxKSksXG4gICAgICAgICAgICAgICAgaGFzaFN0cmluZzogaGFzaC5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgICAgICAgd2luZG93SWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy51cmwgPSB7aHJlZiwgc2VhcmNofTtcblxuICAgICAgICBmb3IgKFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZS53b3JrZXJzKSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NhbnZhcycgJiYgIWNvbmZpZy51c2VDYW52YXNXb3JrZXIgfHxcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd0YXNrJyAgICYmICFjb25maWcudXNlVGFza1dvcmtlciAgIHx8XG4gICAgICAgICAgICAgICAga2V5ID09PSAndmRvbScgICAmJiAhY29uZmlnLnVzZVZkb21Xb3JrZXJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFsdWUud29ya2VyID0gbWUuY3JlYXRlV29ya2VyKHZhbHVlKVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgICAgICAgICBtZS5zdG9wQ29tbXVuaWNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2Uoa2V5LCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJOZW9Db25maWcnLFxuICAgICAgICAgICAgICAgIGRhdGEgIDogey4uLmNvbmZpZywgd2luZG93SWR9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXRlY3RGZWF0dXJlcygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW9Db25maWcuaGFzTW91c2VFdmVudHMgPSBtYXRjaE1lZGlhKCcocG9pbnRlcjpmaW5lKScpLm1hdGNoZXM7XG4gICAgICAgIE5lb0NvbmZpZy5oYXNUb3VjaEV2ZW50cyA9ICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IChuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwKTtcblxuICAgICAgICAvLyBVc2VmdWwgZm9yIHN0eWxpbmdcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKE5lb0NvbmZpZy5oYXNNb3VzZUV2ZW50cyA/ICduZW8tbW91c2UnIDogJ25lby1uby1tb3VzZScpO1xuXG4gICAgICAgIGlmICh3aW5kb3cuV29ya2VyKSB7XG4gICAgICAgICAgICBtZS53ZWJXb3JrZXJzRW5hYmxlZCA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViIFdvcmtlcnMnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG1lLnNoYXJlZFdvcmtlcnNFbmFibGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8V29ya2VyfSBuYW1lXG4gICAgICogQHJldHVybnMge1dvcmtlcn1cbiAgICAgKi9cbiAgICBnZXRXb3JrZXIobmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3NlcnZpY2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXI/LmNvbnRyb2xsZXIgfHwgdGhpcy5zZXJ2aWNlV29ya2VyXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmFtZSBpbnN0YW5jZW9mIFdvcmtlciA/IG5hbWUgOiB0aGlzLndvcmtlcnNbbmFtZV0ud29ya2VyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICAgKi9cbiAgICBsb2FkQXBwbGljYXRpb24ocGF0aCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCdhcHAnLCB7XG4gICAgICAgICAgICBhY3Rpb24gICAgICAgOiAnbG9hZEFwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICByZXNvdXJjZXNQYXRoOiBOZW9Db25maWcucmVzb3VyY2VzUGF0aFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Xb3JrZXJDb25zdHJ1Y3RlZChkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuY29uc3RydWN0ZWRUaHJlYWRzKys7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdGVkVGhyZWFkcyA9PT0gbWUuYWN0aXZlV29ya2Vycykge1xuICAgICAgICAgICAgLy8gYmV0dGVyIHNhZmUgdGhhbiBzb3JyeSA9PiBhbGwgcmVtb3RlcyBuZWVkIHRvIGJlIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgIE5lb0NvbmZpZy5hcHBQYXRoICYmIG1lLnRpbWVvdXQoTmVvQ29uZmlnLmxvYWRBcHBsaWNhdGlvbkRlbGF5KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5sb2FkQXBwbGljYXRpb24oTmVvQ29uZmlnLmFwcFBhdGgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBtZXRob2QgZm9yIHdvcmtlciBlcnJvciBldmVudHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgICAqL1xuICAgIG9uV29ya2VyRXJyb3IoZSkge1xuICAgICAgICAvLyBzdGFydGluZyBhIHdvcmtlciBmcm9tIGEgSlMgbW9kdWxlIHdpbGwgc2hvdyBKUyBlcnJvcnMgaW4gYSBjb3JyZWN0IHdheVxuICAgICAgICAhaGFzSnNNb2R1bGVzICYmIGNvbnNvbGUubG9nKCdXb3JrZXIgRXJyb3I6JywgZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIG1ldGhvZCBmb3Igd29ya2VyIG1lc3NhZ2UgZXZlbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Xb3JrZXJNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7ZGF0YX0gICA9IGV2ZW50LFxuICAgICAgICAgICAgdHJhbnNmZXIgPSBudWxsLFxuICAgICAgICAgICAgcHJvbWlzZTtcblxuICAgICAgICBjb25zdCB7YWN0aW9uLCBkZXN0aW5hdGlvbjogZGVzdCwgcmVwbHlJZH0gPSBkYXRhO1xuXG4gICAgICAgIG1lLmZpcmUoJ21lc3NhZ2U6JythY3Rpb24sIGRhdGEpO1xuXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdyZXBseScpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBtZS5wcm9taXNlc1tyZXBseUlkXTtcblxuICAgICAgICAgICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEuYXV0b01vdW50ICAmJiBtZS5maXJlKCdhdXRvbW91bnQnLCAgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YS51cGRhdGVWZG9tICYmIG1lLmZpcmUoJ3VwZGF0ZVZkb20nLCBkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBXZSB3YW50IHRvIGRlbGF5IHRoZSBtZXNzYWdlIHVudGlsIHRoZSByZW5kZXJpbmcgcXVldWUgaGFzIHByb2Nlc3NlZCBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy8yODY0XG4gICAgICAgICAgICAgICAgICAgIG1lLnByb21pc2VGb3J3YXJkTWVzc2FnZShkYXRhKS50aGVuKG1zZ0RhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2UobXNnRGF0YS5kZXN0aW5hdGlvbiwgbXNnRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkZXN0ID09PSAnbWFpbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb21pc2VbZGF0YS5yZWplY3QgPyAncmVqZWN0JyA6ICdyZXNvbHZlJ10oZGF0YSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lLnByb21pc2VzW3JlcGx5SWRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVzdCAhPT0gJ21haW4nICYmIGFjdGlvbiAhPT0gJ3JlcGx5Jykge1xuICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNmZXIpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2ZlciA9IFtkYXRhLnRyYW5zZmVyXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5wcm9taXNlTWVzc2FnZShkZXN0LCBkYXRhLCB0cmFuc2ZlcikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2UocmVzcG9uc2UuZGVzdGluYXRpb24sIHJlc3BvbnNlKVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciAgOiBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgICAgZWxzZSBpZiAoZGVzdCA9PT0gJ21haW4nICYmIGFjdGlvbiA9PT0gJ3JlZ2lzdGVyQXBwTmFtZScpIHtcbiAgICAgICAgICAgIGxldCB7YXBwTmFtZX0gPSBkYXRhO1xuXG4gICAgICAgICAgICBtZS5hcHBOYW1lcy5wdXNoKGFwcE5hbWUpO1xuXG4gICAgICAgICAgICBtZS5icm9hZGNhc3Qoe2FjdGlvbjogJ3JlZ2lzdGVyQXBwJywgYXBwTmFtZX0pXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChkZXN0ID09PSAnbWFpbicgJiYgYWN0aW9uID09PSAncmVtb3RlTWV0aG9kJykge1xuICAgICAgICAgICAgbWUub25SZW1vdGVNZXRob2QoZGF0YSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEucmVwbHlJZFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZUZvcndhcmRNZXNzYWdlKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZXNbZGF0YS5yZXBseUlkXSA9IHtkYXRhLCByZWplY3QsIHJlc29sdmV9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBjYW52YXMsIGRhdGEgb3IgdmRvbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBwcm9taXNlTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lLnNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSxcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZS5pZDtcblxuICAgICAgICAgICAgbWUucHJvbWlzZXNbbXNnSWRdID0ge3JlamVjdCwgcmVzb2x2ZX1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcmVwbHlJZFxuICAgICAqL1xuICAgIHJlc29sdmVEb21PcGVyYXRpb25Qcm9taXNlKHJlcGx5SWQpIHtcbiAgICAgICAgaWYgKHJlcGx5SWQpIHtcbiAgICAgICAgICAgIGxldCB7cHJvbWlzZXN9ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBwcm9taXNlICAgID0gcHJvbWlzZXNbcmVwbHlJZF07XG5cbiAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHByb21pc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByb21pc2VzW3JlcGx5SWRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGNhbnZhcywgZGF0YSBvciB2ZG9tXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7TmVvLndvcmtlci5NZXNzYWdlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbWVzc2FnZSwgd29ya2VyO1xuXG4gICAgICAgIGlmICghbWUuc3RvcENvbW11bmljYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChvcHRzLmNoYW5uZWxQb3J0KSB7XG4gICAgICAgICAgICAgICAgd29ya2VyID0gb3B0cy5jaGFubmVsUG9ydDtcbiAgICAgICAgICAgICAgICBkZWxldGUgb3B0cy5jaGFubmVsUG9ydFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3b3JrZXIgPSBtZS5nZXRXb3JrZXIoZGVzdClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCBzZW5kTWVzc2FnZSBmb3IgYSB3b3JrZXIgdGhhdCBkb2VzIG5vdCBleGlzdDogJyArIGRlc3QpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wdHMuZGVzdGluYXRpb24gPSBkZXN0O1xuXG4gICAgICAgICAgICBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uob3B0cyk7XG5cbiAgICAgICAgICAgICh3b3JrZXIucG9ydCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5wb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2Zlcik7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhNYW5hZ2VyKTtcbiIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuLi9jb3JlL0lkR2VuZXJhdG9yLm1qcyc7XG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB3b3JrZXIgcG9zdCBtZXNzYWdlcyBzZW50IGJldHdlZW4gdGhlIEFwcCwgRGF0YSwgVkRvbSB3b3JrZXIgJiB0aGUgbWFpbiB0aHJlYWQuXG4gKiBZb3UgY2FuIGFkZCBvcHRpb25hbCBwYXJhbXMgYXMgbmVlZGVkLlxuICogQGNsYXNzIE5lby53b3JrZXIuTWVzc2FnZVxuICovXG5jbGFzcyBNZXNzYWdlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFjdGlvblxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZXN0aW5hdGlvbj0nbWFpbidcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWQ9SWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvcmlnaW49TmVvLndvcmtlcklkXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbmZpZy5kZXN0aW5hdGlvbiA9IGNvbmZpZy5kZXN0aW5hdGlvbiB8fCAnbWFpbic7XG4gICAgICAgIGNvbmZpZy5pZCAgICAgICAgICA9IGNvbmZpZy5pZCAgICAgICAgICB8fCBJZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpO1xuICAgICAgICBjb25maWcub3JpZ2luICAgICAgPSBjb25maWcub3JpZ2luICAgICAgfHwgTmVvLndvcmtlcklkO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKVxuICAgIH1cbn1cblxuY29uc3QgbnMgPSBOZW8ubnMoJ05lby53b3JrZXInLCB0cnVlKTtcbm5zWydNZXNzYWdlJ10gPSBNZXNzYWdlO1xuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFJlbW90ZU1ldGhvZEFjY2VzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFzc2lnblBvcnQoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3Qge2FwcE5hbWUsIHBvcnQsIHdpbmRvd0lkfSA9IHNvdXJjZTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7YXBwTmFtZSwgcG9ydCwgd2luZG93SWR9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0sICo9KTogUHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7b3JpZ2lufSA9IHJlbW90ZTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgYnVmZmVyKSB7XG4gICAgICAgICAgICBsZXQgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgICAgICA6ICdyZW1vdGVNZXRob2QnLFxuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24gICAgOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2xhc3NOYW1lOiByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHJlbW90ZU1ldGhvZCAgIDogbWV0aG9kXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtZS5pc1NoYXJlZFdvcmtlciAmJiBtZS5hc3NpZ25Qb3J0KGRhdGEsIG9wdHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICovXG4gICAgb25SZWdpc3RlclJlbW90ZShyZW1vdGUpIHtcbiAgICAgICAgaWYgKHJlbW90ZS5kZXN0aW5hdGlvbiA9PT0gTmVvLndvcmtlcklkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHtjbGFzc05hbWUsIG1ldGhvZHN9ID0gcmVtb3RlLFxuICAgICAgICAgICAgICAgIHBrZyAgICAgICAgICAgICAgICAgID0gTmVvLm5zKGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChtZXRob2QgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGUub3JpZ2luICE9PSAnbWFpbicgJiYgcGtnW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGtnW21ldGhvZF0gPz89IG1lLmdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcblxuICAgICAgICBpZiAoIXBrZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2QgPSBwa2dbbXNnLnJlbW90ZU1ldGhvZF07XG5cbiAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbWV0aG9kIG5hbWUgXCInICsgbXNnLnJlbW90ZU1ldGhvZCArICdcIicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cuZGF0YSkpIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgLi4ubXNnLmRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG91dFxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge21lLnJlamVjdChtc2csIGVycil9KVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge21lLnJlc29sdmUobXNnLCBkYXRhKX0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgb3V0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlamVjdGVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgcmVqZWN0KG1zZywgZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBtZS5pc1NoYXJlZFdvcmtlciAmJiBtZS5hc3NpZ25Qb3J0KG1zZywgb3B0cyk7XG4gICAgICAgIG1lLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIG9wdHMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlc29sdmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgcmVzb2x2ZShtc2csIGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcblxuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBtZS5pc1NoYXJlZFdvcmtlciAmJiBtZS5hc3NpZ25Qb3J0KG1zZywgb3B0cyk7XG4gICAgICAgIG1lLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIG9wdHMpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL21haW4vYWRkb24gbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwubWpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiY2h1bmtzL21haW4vXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIm5lby1vZmZzY3JlZW4tY2FudmFzLWRlbW86XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtuZW9fb2Zmc2NyZWVuX2NhbnZhc19kZW1vXCJdID0gc2VsZltcIndlYnBhY2tDaHVua25lb19vZmZzY3JlZW5fY2FudmFzX2RlbW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCBOZW8gICAgICAgICAgIGZyb20gJy4vTmVvLm1qcyc7XG5pbXBvcnQgKiBhcyBjb3JlICAgICBmcm9tICcuL2NvcmUvX2V4cG9ydC5tanMnO1xuaW1wb3J0IERvbUFjY2VzcyAgICAgZnJvbSAnLi9tYWluL0RvbUFjY2Vzcy5tanMnO1xuaW1wb3J0IERvbUV2ZW50cyAgICAgZnJvbSAnLi9tYWluL0RvbUV2ZW50cy5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgZnJvbSAnLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBXb3JrZXJNYW5hZ2VyIGZyb20gJy4vd29ya2VyL01hbmFnZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLk1haW5cbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTWFpbiBleHRlbmRzIGNvcmUuQmFzZSB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUuT2JzZXJ2YWJsZSBtaXhpblxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IHRydWVcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLk1haW4nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5NYWluJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbW9kZT0ncmVhZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZTogJ3JlYWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBvcGVuV2luZG93cz17fVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBvcGVuV2luZG93czoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gcmVhZFF1ZXVlPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRRdWV1ZTogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbLy8uLi5dfVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdhbGVydCcsXG4gICAgICAgICAgICAgICAgJ2VkaXRSb3V0ZScsXG4gICAgICAgICAgICAgICAgJ2dldEJ5UGF0aCcsXG4gICAgICAgICAgICAgICAgJ2dldFdpbmRvd0RhdGEnLFxuICAgICAgICAgICAgICAgICdpbXBvcnRBZGRvbicsXG4gICAgICAgICAgICAgICAgJ2xvZycsXG4gICAgICAgICAgICAgICAgJ3JlZGlyZWN0VG8nLFxuICAgICAgICAgICAgICAgICdyZWxvYWRXaW5kb3cnLFxuICAgICAgICAgICAgICAgICdzZXROZW9Db25maWcnLFxuICAgICAgICAgICAgICAgICdzZXRSb3V0ZScsXG4gICAgICAgICAgICAgICAgJ3dpbmRvd0Nsb3NlJyxcbiAgICAgICAgICAgICAgICAnd2luZG93Q2xvc2VBbGwnLFxuICAgICAgICAgICAgICAgICd3aW5kb3dNb3ZlVG8nLFxuICAgICAgICAgICAgICAgICd3aW5kb3dPcGVuJyxcbiAgICAgICAgICAgICAgICAnd2luZG93UmVzaXplVG8nXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBydW5uaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0Zwcz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0ZwczogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRpbWVMaW1pdD0xNVxuICAgICAgICAgKi9cbiAgICAgICAgdGltZUxpbWl0OiAxNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNob3VsZCBiZSBkZXYgb25seVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRvdGFsRnJhbWVDb3VudD0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRvdGFsRnJhbWVDb3VudDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB1cGRhdGVRdWV1ZT1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVRdWV1ZTogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gd3JpdGVRdWV1ZT1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3cml0ZVF1ZXVlOiBbXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5vbih7XG4gICAgICAgICAgICAnYXV0b21vdW50JyAgICAgICAgOiBtZS5vblJlbmRlcixcbiAgICAgICAgICAgICdtZXNzYWdlOm1vdW50RG9tJyA6IG1lLm9uTW91bnREb20sXG4gICAgICAgICAgICAnbWVzc2FnZTp1cGRhdGVEb20nOiBtZS5vblVwZGF0ZURvbSxcbiAgICAgICAgICAgICd1cGRhdGVWZG9tJyAgICAgICA6IG1lLm9uVXBkYXRlVmRvbSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERvbUV2ZW50cy5vbignZG9tQ29udGVudExvYWRlZCcsIG1lLm9uRG9tQ29udGVudExvYWRlZCwgbWUpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgICAgIERvbUV2ZW50cy5vbkRvbUNvbnRlbnRMb2FkZWQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV29ya2VycyBjYW4gbm90IHRyaWdnZXIgYWxlcnQoKSwgc28gd2UgbmVlZCByZW1vdGUgbWV0aG9kIGFjY2Vzcy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm1lc3NhZ2VcbiAgICAgKi9cbiAgICBhbGVydChkYXRhKSB7XG4gICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFZGl0IHRoZSBsb2NhdGlvbi5oYXNoIHZhbHVlXG4gICAgICogQSB2YWx1ZSBvZiBudWxsIHdpbGwgcmVtb3ZlIHRoZSBnaXZlbiBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBlZGl0Um91dGUoZGF0YSkge1xuICAgICAgICBsZXQgaGFzaE9iaiA9IERvbUV2ZW50cy5wYXJzZUhhc2god2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKSxcbiAgICAgICAgICAgIGhhc2hBcnIgPSBbXTtcblxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkYXRhID0gRG9tRXZlbnRzLnBhcnNlSGFzaChkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihoYXNoT2JqLCBkYXRhKTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhoYXNoT2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhhc2hBcnIucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaEFyci5qb2luKCcmJylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IHNwZWNpZmljIGFjY2Vzc2libGUgd2luZG93IGF0dHJpYnV0ZXMgYnkgcGF0aCBpbnRvIHRoZSBhcHAgd29ya2VyLlxuICAgICAqIEtlZXAgaW4gbWluZCB0aGF0IHRoaXMgZXhjbHVkZXMgYW55dGhpbmcgRE9NIHJlbGF0ZWQgb3IgaW5zdGFuY2VzLlxuICAgICAqIEluIGNhc2UgeW91ciBwYXRoIG1hdGNoZXMgYSBtZXRob2QsIHlvdSBjYW4gYWxzbyBwYXNzIHBhcmFtcyBmb3IgaXQuXG4gICAgICogQGV4YW1wbGU6XG4gICAgICogICAgIE5lby5NYWluLmdldEJ5UGF0aCh7cGF0aDogJ25hdmlnYXRvci5sYW5ndWFnZSd9KS50aGVuKGRhdGEgPT4ge30pXG4gICAgICogQGV4YW1wbGU6XG4gICAgICogICAgIE5lby5NYWluLmdldEJ5UGF0aCh7cGF0aDogJ0NTUy5zdXBwb3J0cycsIHBhcmFtczogWydkaXNwbGF5OiBmbGV4J119KS50aGVuKGRhdGEgPT4ge30pXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgZGF0YS5wYXJhbXM9W11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5wYXRoXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0QnlQYXRoKHtwYXJhbXM9W10sIHBhdGh9KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBOZW8ubnNXaXRoQXJyYXlzKHBhdGgpO1xuICAgICAgICByZXR1cm4gTmVvLmlzRnVuY3Rpb24odGFyZ2V0KSA/IHRhcmdldCguLi5wYXJhbXMpIDogdGFyZ2V0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd2luZG93LnNjcmVlbiBpcyBub3Qgc3ByZWFkYWJsZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0V2luZG93RGF0YSgpIHtcbiAgICAgICAgbGV0IHdpbiAgICAgID0gd2luZG93LFxuICAgICAgICAgICAge3NjcmVlbn0gPSB3aW47XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlubmVySGVpZ2h0OiB3aW4uaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICBpbm5lcldpZHRoIDogd2luLmlubmVyV2lkdGgsXG4gICAgICAgICAgICBvdXRlckhlaWdodDogd2luLm91dGVySGVpZ2h0LFxuICAgICAgICAgICAgb3V0ZXJXaWR0aCA6IHdpbi5vdXRlcldpZHRoLFxuICAgICAgICAgICAgc2NyZWVuOiB7XG4gICAgICAgICAgICAgICAgYXZhaWxIZWlnaHQ6IHNjcmVlbi5hdmFpbEhlaWdodCxcbiAgICAgICAgICAgICAgICBhdmFpbExlZnQgIDogc2NyZWVuLmF2YWlsTGVmdCxcbiAgICAgICAgICAgICAgICBhdmFpbFRvcCAgIDogc2NyZWVuLmF2YWlsVG9wLFxuICAgICAgICAgICAgICAgIGF2YWlsV2lkdGggOiBzY3JlZW4uYXZhaWxXaWR0aCxcbiAgICAgICAgICAgICAgICBjb2xvckRlcHRoIDogc2NyZWVuLmNvbG9yRGVwdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICAgICA6IHNjcmVlbi5oZWlnaHQsXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246IHthbmdsZTogc2NyZWVuLm9yaWVudGF0aW9uPy5hbmdsZSwgdHlwZTogc2NyZWVuLm9yaWVudGF0aW9uPy50eXBlfSxcbiAgICAgICAgICAgICAgICBwaXhlbERlcHRoIDogc2NyZWVuLnBpeGVsRGVwdGgsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICA6IHNjcmVlbi53aWR0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcmVlbkxlZnQ6IHdpbi5zY3JlZW5MZWZ0LFxuICAgICAgICAgICAgc2NyZWVuVG9wIDogd2luLnNjcmVlblRvcFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wb3J0IG1haW4gdGhyZWFkIGFkZG9ucyBhdCBydW4tdGltZSBmcm9tIHdpdGhpbiB0aGUgYXBwIHdvcmtlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubmFtZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGFzeW5jIGltcG9ydEFkZG9uKGRhdGEpIHtcbiAgICAgICAgbGV0IHtuYW1lfSA9IGRhdGEsXG4gICAgICAgICAgICBtb2R1bGU7XG5cbiAgICAgICAgaWYgKG5hbWUuc3RhcnRzV2l0aCgnV1MvJykpIHtcbiAgICAgICAgICAgIG1vZHVsZSA9IGF3YWl0IGltcG9ydChgLi4vLi4vLi4vc3JjL21haW4vYWRkb24vJHtuYW1lLnN1YnN0cmluZygzKX0ubWpzYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZSA9IGF3YWl0IGltcG9ydChgLi9tYWluL2FkZG9uLyR7bmFtZX0ubWpzYClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJBZGRvbihtb2R1bGUuZGVmYXVsdCk7XG4gICAgICAgIGF3YWl0IHRoaXMudGltZW91dCgyMCk7IC8vIFdhaXQgdW50aWwgcmVtb3RlcyBhcmUgcmVnaXN0ZXJlZFxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3RlIGNvbnNvbGUgYWNjZXNzIHRvIG1haW4gdGhyZWFkcy5cbiAgICAgKiBZb3UgY2FuIHVzZSBhcHBOYW1lIG9yIHdpbmRvd0lkIHRvIHRhcmdldCBzcGVjaWZpYyB3aW5kb3dzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmFwcE5hbWVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEubWV0aG9kXSBkZWZhdWx0cyB0byAnbG9nJ1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGF0YS53aW5kb3dJZF1cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBsb2coZGF0YSkge1xuICAgICAgICBjb25zb2xlW2RhdGEubWV0aG9kIHx8ICdsb2cnXShkYXRhLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFzeW5jIG9uRG9tQ29udGVudExvYWRlZCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtjb25maWd9ID0gTmVvLFxuICAgICAgICAgICAgaW1wb3J0cyAgPSBbXSxcbiAgICAgICAgICAgIHtlbnZpcm9ubWVudCwgbWFpblRocmVhZEFkZG9ucywgdXNlU2VydmljZVdvcmtlcn0gPSBjb25maWcsXG4gICAgICAgICAgICBtb2R1bGVzO1xuXG4gICAgICAgIERvbUFjY2Vzcy5vbkRvbUNvbnRlbnRMb2FkZWQoKTtcblxuICAgICAgICAvLyBXZSBuZWVkIGRpZmZlcmVudCBwdWJsaWNQYXRoIHZhbHVlcyBmb3IgdGhlIG1haW4gdGhyZWFkIGluc2lkZSB0aGUgd2VicGFjayBiYXNlZCBkaXN0IGVudnMsXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgaGllcmFyY2h5IGxldmVsIG9mIHRoZSBhcHAgZW50cnkgcG9pbnRcbiAgICAgICAgaWYgKGVudmlyb25tZW50ID09PSAnZGlzdC9kZXZlbG9wbWVudCcgfHwgZW52aXJvbm1lbnQgPT09ICdkaXN0L3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBjb25maWcuYmFzZVBhdGguc3Vic3RyaW5nKDYpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnRlbmRlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyB3aGVyZSB3ZSBuZWVkIGFuIGVhc3kgd2F5IHRvIGFkZCBHQSB0byBldmVyeSBnZW5lcmF0ZWQgYXBwXG4gICAgICAgIGlmIChjb25maWcudXNlR29vZ2xlQW5hbHl0aWNzICYmICFtYWluVGhyZWFkQWRkb25zLmluY2x1ZGVzKCdBbmFseXRpY3NCeUdvb2dsZScpKSB7XG4gICAgICAgICAgICBtYWluVGhyZWFkQWRkb25zLnB1c2goJ0FuYWx5dGljc0J5R29vZ2xlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoXG4gICAgICAgICAgICAgICAgdXNlU2VydmljZVdvcmtlciA9PT0gdHJ1ZSB8fFxuICAgICAgICAgICAgICAgIHVzZVNlcnZpY2VXb3JrZXIgPT09IGVudmlyb25tZW50IHx8XG4gICAgICAgICAgICAgICAgKHVzZVNlcnZpY2VXb3JrZXIgPT09ICdkaXN0L3Byb2R1Y3Rpb24nICYmIGVudmlyb25tZW50ID09PSAnZGlzdC9lc20nKVxuICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgIW1haW5UaHJlYWRBZGRvbnMuaW5jbHVkZXMoJ1NlcnZpY2VXb3JrZXInKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIG1haW5UaHJlYWRBZGRvbnMucHVzaCgnU2VydmljZVdvcmtlcicpXG4gICAgICAgIH1cblxuICAgICAgICBtYWluVGhyZWFkQWRkb25zLmZvckVhY2goYWRkb24gPT4ge1xuICAgICAgICAgICAgaWYgKGFkZG9uLnN0YXJ0c1dpdGgoJ1dTLycpKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydChgLi4vLi4vLi4vc3JjL21haW4vYWRkb24vJHthZGRvbi5zdWJzdHJpbmcoMyl9Lm1qc2ApKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRzLnB1c2goaW1wb3J0KGAuL21haW4vYWRkb24vJHthZGRvbn0ubWpzYCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZHVsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChpbXBvcnRzKTtcblxuICAgICAgICBtZS5hZGRvbiA9IHt9O1xuXG4gICAgICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgbWUucmVnaXN0ZXJBZGRvbihtb2R1bGUuZGVmYXVsdClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5vbldvcmtlckNvbnN0cnVjdGVkKHtcbiAgICAgICAgICAgIG9yaWdpbjogJ21haW4nXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk1vdW50RG9tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVdyaXRlKGRhdGEpO1xuXG4gICAgICAgIFdvcmtlck1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4gfHwgJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SZW5kZXIoZGF0YSkge1xuICAgICAgICBkYXRhLmRhdGEucmVwbHlJZCA9IGRhdGEucmVwbHlJZDtcbiAgICAgICAgdGhpcy5xdWV1ZVdyaXRlKGRhdGEuZGF0YSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVXBkYXRlRG9tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVVwZGF0ZShkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25VcGRhdGVWZG9tKGRhdGEpIHtcbiAgICAgICAgZGF0YS5kYXRhLnJlcGx5SWQgPSBkYXRhLnJlcGx5SWQ7XG4gICAgICAgIHRoaXMucXVldWVVcGRhdGUoZGF0YS5kYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IHF1ZXVlXG4gICAgICogQHBhcmFtIHtEYXRlfSBzdGFydFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb2Nlc3NRdWV1ZShxdWV1ZSwgc3RhcnQpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGxpbWl0ID0gbWUudGltZUxpbWl0LFxuICAgICAgICAgICAgb3BlcmF0aW9uO1xuXG4gICAgICAgIHdoaWxlIChvcGVyYXRpb24gPSBxdWV1ZS5zaGlmdCgpKSB7XG4gICAgICAgICAgICBpZiAobmV3IERhdGUoKSAtIHN0YXJ0ID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS51bnNoaWZ0KG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXJGcmFtZS5iaW5kKG1lKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tQWNjZXNzW21lLm1vZGVdKG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgV29ya2VyTWFuYWdlci5yZXNvbHZlRG9tT3BlcmF0aW9uUHJvbWlzZShvcGVyYXRpb24ucmVwbHlJZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHF1ZXVlUmVhZChkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnJlYWRRdWV1ZS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIGlmICghbWUucnVubmluZykge1xuICAgICAgICAgICAgbWUucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucmVuZGVyRnJhbWUuYmluZChtZSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBxdWV1ZVVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnVwZGF0ZVF1ZXVlLnB1c2goZGF0YSk7XG5cbiAgICAgICAgaWYgKCFtZS5ydW5uaW5nKSB7XG4gICAgICAgICAgICBtZS5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXJGcmFtZS5iaW5kKG1lKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHF1ZXVlV3JpdGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBtZS53cml0ZVF1ZXVlLnB1c2goZGF0YSk7XG5cbiAgICAgICAgaWYgKCFtZS5ydW5uaW5nKSB7XG4gICAgICAgICAgICBtZS5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXJGcmFtZS5iaW5kKG1lKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudXJsXG4gICAgICovXG4gICAgcmVkaXJlY3RUbyhkYXRhKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS51cmxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJlZ2lzdGVyIG1haW4gdGhyZWFkIGFkZG9uc1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gYWRkb24gQ2FuIGVpdGhlciBiZSBhIG5lbyBjbGFzcyBvciBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyQWRkb24oYWRkb24pIHtcbiAgICAgICAgaWYgKE5lby50eXBlT2YoYWRkb24pID09PSAnTmVvQ2xhc3MnKSB7XG4gICAgICAgICAgICAvLyBBZGRvbnMgY291bGQgZ2V0IGltcG9ydGVkIG11bHRpcGxlIHRpbWVzLiBFbnN1cmUgdG8gb25seSBjcmVhdGUgYW4gaW5zdGFuY2Ugb25jZS5cbiAgICAgICAgICAgIGlmIChOZW8udHlwZU9mKE5lby5ucyhhZGRvbi5wcm90b3R5cGUuY2xhc3NOYW1lKSkgIT09ICdOZW9JbnN0YW5jZScpIHtcbiAgICAgICAgICAgICAgICBhZGRvbiA9IE5lby5jcmVhdGUoYWRkb24pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1haW4gdGhyZWFkIGFkZG9ucyBuZWVkIHRvIGdldCByZWdpc3RlcmVkIGFzIHNpbmdsZXRvbnMgaW5zaWRlIHRoZSBuZW8gbmFtZXNwYWNlXG4gICAgICAgICAgICBOZW8uYXBwbHlUb0dsb2JhbE5zKGFkZG9uKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGRvblthZGRvbi5jb25zdHJ1Y3Rvci5uYW1lXSA9IGFkZG9uXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWxvYWRXaW5kb3coZGF0YSkge1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHRoZSBkaWZmZXJlbnQgRE9NIG9wZXJhdGlvbiBxdWV1ZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVuZGVyRnJhbWUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlYWQgICAgPSBtZS5yZWFkUXVldWUsXG4gICAgICAgICAgICB1cGRhdGUgID0gbWUudXBkYXRlUXVldWUsXG4gICAgICAgICAgICB3cml0ZSAgID0gbWUud3JpdGVRdWV1ZSxcbiAgICAgICAgICAgIHJlYWRpbmcgPSBtZS5tb2RlID09PSAncmVhZCcsXG4gICAgICAgICAgICBzdGFydCAgID0gbmV3IERhdGUoKTtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5sb2dEZWx0YVVwZGF0ZXMpIHtcbiAgICAgICAgICAgIG1lLnRvdGFsRnJhbWVDb3VudCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RvdGFsIEZyYW1lczogJyArIG1lLnRvdGFsRnJhbWVDb3VudClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWFkaW5nIHx8ICF3cml0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLm1vZGUgPSAncmVhZCc7XG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHJlYWQsIHN0YXJ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVwZGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLm1vZGUgPSAndXBkYXRlJztcbiAgICAgICAgICAgIGlmIChtZS5wcm9jZXNzUXVldWUodXBkYXRlLCBzdGFydCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3cml0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLm1vZGUgPSAnd3JpdGUnO1xuICAgICAgICAgICAgaWYgKG1lLnByb2Nlc3NRdWV1ZSh3cml0ZSwgc3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS5ydW5uaW5nID0gZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgYSBOZW8uY29uZmlnIGZyb20gdGhlIGFwcCB3b3JrZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmtleVxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldE5lb0NvbmZpZyhkYXRhKSB7XG4gICAgICAgIGxldCB7a2V5LCB2YWx1ZX0gPSBkYXRhO1xuXG4gICAgICAgIE5lby5jb25maWdba2V5XSA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAga2V5ID09PSAncmVuZGVyQ291bnREZWx0YXMnICYmIERvbUFjY2Vzcy5zZXQoe1trZXldOiB2YWx1ZX0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBsb2NhdGlvbi5oYXNoIHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldFJvdXRlKGRhdGEpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBkYXRhLnZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHBvcHVwIHdpbmRvd3NcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBkYXRhLm5hbWVzXG4gICAgICovXG4gICAgd2luZG93Q2xvc2UoZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5uYW1lcykpIHtcbiAgICAgICAgICAgIGRhdGEubmFtZXMgPSBbZGF0YS5uYW1lc11cbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEubmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbldpbmRvd3NbbmFtZV0/LmNsb3NlKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5vcGVuV2luZG93c1tuYW1lXVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbGwgcG9wdXAgd2luZG93c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgd2luZG93Q2xvc2VBbGwoZGF0YSkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMub3BlbldpbmRvd3MpLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgdmFsdWUuY2xvc2UoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9wZW5XaW5kb3dzID0ge31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgcG9wdXAgd2luZG93XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS53aW5kb3dOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEueFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnlcbiAgICAgKi9cbiAgICB3aW5kb3dNb3ZlVG8oZGF0YSkge1xuICAgICAgICB0aGlzLm9wZW5XaW5kb3dzW2RhdGEud2luZG93TmFtZV0/Lm1vdmVUbyhkYXRhLngsIGRhdGEueSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGEgbmV3IHBvcHVwIHdpbmRvdyBhbmQgcmV0dXJuIGlmIHN1Y2Nlc3NmdWxsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS51cmxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS53aW5kb3dGZWF0dXJlc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLndpbmRvd05hbWVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIHdpbmRvd09wZW4oZGF0YSkge1xuICAgICAgICBsZXQgb3BlbmVkV2luZG93ID0gd2luZG93Lm9wZW4oZGF0YS51cmwsIGRhdGEud2luZG93TmFtZSwgZGF0YS53aW5kb3dGZWF0dXJlcyksXG4gICAgICAgICAgICBzdWNjZXNzICAgICAgPSAhIW9wZW5lZFdpbmRvdztcblxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5vcGVuV2luZG93c1tkYXRhLndpbmRvd05hbWVdID0gb3BlbmVkV2luZG93XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2Vzc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYSBwb3B1cCB3aW5kb3dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGF0YS5oZWlnaHRdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLndpZHRoXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLndpbmRvd05hbWVcbiAgICAgKi9cbiAgICB3aW5kb3dSZXNpemVUbyhkYXRhKSB7XG4gICAgICAgIGxldCB3aW4gICAgPSB0aGlzLm9wZW5XaW5kb3dzW2RhdGEud2luZG93TmFtZV0sXG4gICAgICAgICAgICBoZWlnaHQgPSBkYXRhLmhlaWdodCB8fCB3aW4ub3V0ZXJIZWlnaHQsXG4gICAgICAgICAgICB3aWR0aCAgPSBkYXRhLndpZHRoICB8fCB3aW4ub3V0ZXJXaWR0aDtcblxuICAgICAgICB3aW4ucmVzaXplVG8od2lkdGgsIGhlaWdodClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKE1haW4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9