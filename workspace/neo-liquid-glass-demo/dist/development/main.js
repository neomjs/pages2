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
/******/ 		var dataWebpackPrefix = "myapp:";
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBOEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQThDO0FBQ3JFLENBQUM7O0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JTbUI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZ0RBQUcsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9EZWZhdWx0Q29uZmlnLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9Db21wYXJlLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL09ic2VydmFibGUubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvVXRpbC5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL0RvbUFjY2Vzcy5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9Eb21FdmVudHMubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vRG9tVXRpbHMubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vIGxhenkgXlxcLlxcLy4qXFwubWpzJCBzdHJpY3QgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL21peGluL0RlbHRhVXBkYXRlcy5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9taXhpbi9Ub3VjaERvbUV2ZW50cy5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9GdW5jdGlvbi5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9SZWN0YW5nbGUubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvU3RyaW5nLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvTWFuYWdlci5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01lc3NhZ2UubWpzIiwid2VicGFjazovL215YXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9taXhpbi9SZW1vdGVNZXRob2RBY2Nlc3MubWpzIiwid2VicGFjazovL215YXBwLy4vc3JjL21haW4vYWRkb24vIGxhenkgXlxcLlxcLy4qXFwubWpzJCBzdHJpY3QgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vbXlhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9NYWluLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOZW8gPSBnbG9iYWxUaGlzLk5lbyB8fCB7fTtcblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbi8qKlxuICogQ29uZmlnIG9iamVjdCBmb3IgdGhlIG5lby5tanMgZnJhbWV3b3JrIHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCB0byBhbGwgd29ya2Vyc1xuICogWW91IGNhbiBjaGFuZ2UgdGhlIGNvbmZpZ3MsIGUuZy4gaW5zaWRlIHRoZSBpbmRleC5odG1sIG9mIHlvdXIgYXBwXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICogQG5hbWUgY29uZmlnXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuY29uc3QgRGVmYXVsdENvbmZpZyA9IHtcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGFwcGx5ICdwb3NpdGlvbjogZml4ZWQnIHRvIHRoZSBodG1sIHRhZyBpdHNlbGZcbiAgICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy82NDI5XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBseUZpeGVkUG9zaXRpb25Ub0h0bWxUYWdcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgYXBwbHlGaXhlZFBvc2l0aW9uVG9IdG1sVGFnOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8geW91ciBhcHAubWpzIGZpbGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGFwcHMgdGhlcmUgaWYgbmVlZGVkLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgYXBwUGF0aDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSBuZW8ubWpzIGRpcmVjdG9yeVxuICAgICAqIEBkZWZhdWx0ICcuLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYmFzZVBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBiYXNlUGF0aDogJy4vJyxcbiAgICAvKipcbiAgICAgKiBQYXNzIGEgdG9rZW4gaW4gY2FzZSB5b3UgYXJlIHVzaW5nIHRoZSBDZXNpdW1KUyBtYWluIHRocmVhZCBhZGRvblxuICAgICAqIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vYmxvYi9kZXYvc3JjL21haW4vYWRkb24vQ2VzaXVtSlMubWpzXG4gICAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmNlc2l1bUpzVG9rZW5cbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGNvbXBvbmVudCBsb2dnaW5nIHVzaW5nIEN0cmwtUmlnaHQtQ2xpY2tcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVuYWJsZUNvbXBvbmVudExvZ2dlclxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBlbmFibGVDb21wb25lbnRMb2dnZXI6IHRydWUsXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgY29uZmlnIHRvIHRydWUgdG8gZW5hYmxlIHV0aWwuTG9nZ2VyIChOZW8ubG9nKCkpIGJhc2VkIGxvZ3MgaW4gcHJvZHVjdGlvblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVuYWJsZUxvZ3NJblByb2R1Y3Rpb25cbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgZW5hYmxlTG9nc0luUHJvZHVjdGlvbjogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuIFZhbGlkIHZhbHVlczogJ2RldmVsb3BtZW50JywgJ2Rpc3QvZGV2ZWxvcG1lbnQnLCAnZGlzdC9wcm9kdWN0aW9uJ1xuICAgICAqIFRoaXMgY29uZmlnIHdpbGwgZ2V0IGF1dG8tZ2VuZXJhdGVkXG4gICAgICogQGRlZmF1bHQgJ2Rpc3QvcHJvZHVjdGlvbidcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZW52aXJvbm1lbnRcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBlbnZpcm9ubWVudDogJ2Rpc3QvcHJvZHVjdGlvbicsXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB5b3UgYXJlIHVzaW5nIHRoZSBHb29nbGVNYXBzIG1haW4gdGhyZWFkIGFkZG9uLCB5b3UgY2FuIHBhc3MgdGhlIEFQSSBrZXkgaGVyZS5cbiAgICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZ29vZ2xlTWFwc0FwaUtleVxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB5b3UgYXJlIHVzaW5nIHRoZSBHb29nbGVBbmFseXRpY3MgbWFpbiB0aHJlYWQgYWRkb24gb3IgdXNlR29vZ2xlQW5hbHl0aWNzOiB0cnVlLFxuICAgICAqIHlvdSBjYW4gY2hhbmdlIHRoZSBndGFnIGlkIGhlcmUuIFJlcXVpcmVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIChnaCBwYWdlcylcbiAgICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZ3RhZ0lkXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIG9uIGh0dHBzOi8vbmVvbWpzLmdpdGh1Yi5pby9wYWdlcy9cbiAgICAgKiA9PiB0byB1c2UgbG9jYWwgaW1hZ2VzIHBhdGhzIGluc3RlYWQgb2YgcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzR2l0SHViUGFnZXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNHaXRIdWJQYWdlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyB0aGUgTmVvIG1haW4gdGhyZWFkIGluc2lkZSBhbiBpZnJhbWUgKFNpZXN0YSBCcm93c2VyIEhhcm5lc3MpXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNJbnNpZGVTaWVzdGFcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNJbnNpZGVTaWVzdGE6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIGRlbGF5IGluIG1zIGZvciB0aGUgd29ya2VyLk1hbmFnZXI6bG9hZEFwcGxpY2F0aW9uKCkgY2FsbFxuICAgICAqIEBkZWZhdWx0IDIwXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvYWRBcHBsaWNhdGlvbkRlbGF5XG4gICAgICogQHR5cGUgTnVtYmVyXG4gICAgICovXG4gICAgbG9hZEFwcGxpY2F0aW9uRGVsYXk6IDIwLFxuICAgIC8qKlxuICAgICAqIFVzZWQgYnkgSW50bC5EYXRlVGltZUZvcm1hdCwgZm9yIGRldGFpbHMgdGFrZSBhIGxvb2sgYXQ6XG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9jYWxlXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGxvZyB0aGUgZGVsdGEgdXBkYXRlcyBpbnNpZGUgdGhlIG1haW4gdGhyZWFkKHMpIGFzIHdlbGwgYXMgdGhlIHJlcXVlc3RBbmltYXRpb24gZnJhbWVzXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9nRGVsdGFVcGRhdGVzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGxvZ0RlbHRhVXBkYXRlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGxvZyBjb25zb2xlIHdhcm5pbmdzLCBpbiBjYXNlIGEgY29tcG9uZW50IHRyaWVzIHRvIHVwZGF0ZSgpIHdoaWxlIGEgcGFyZW50IHVwZGF0ZSBpcyBydW5uaW5nLlxuICAgICAqIEEgcGFyZW50IHVwZGF0ZSByZXN1bHRzIGluIGEgc2hvcnQgZGVsYXksIHNvIHlvdSBtaWdodCB3YW50IHRvIHJlc29sdmUgdGhlc2UgY29sbGlzaW9ucy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2dWZG9tVXBkYXRlQ29sbGlzaW9uc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBsb2dWZG9tVXBkYXRlQ29sbGlzaW9uczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIGFkZG9ucyBmb3IgdGhlIG1haW4gdGhyZWFkXG4gICAgICogLi9zcmMvbWFpbi9hZGRvbi8gY29udGFpbnMgYWxsIGZyYW1ld29yayByZWxhdGVkIG9wdGlvbnMuXG4gICAgICogWW91IGNhbiBhbHNvIGNyZWF0ZSB5b3VyIG93biBhZGRvbnMgd2l0aGluIHlvdXIgd29ya3NwYWNlIHNjb3BlLiBNYWtlIHN1cmUgdG8gcHV0IHRoZW0gaW5zaWRlICdzcmMvbWFpbi9hZGRvbi8nXG4gICAgICogYW5kIHByZWZpeCB0aGVtIHdpdGggJ1dTLycgaW5zaWRlIHlvdXIgbmVvLWNvbmZpZy5qc29uIGZpbGUuXG4gICAgICogRXhhbXBsZTogWydEcmFnRHJvcCcsICdTdHlsZXNoZWV0JywgJ1dTL015QWRkb24nXVxuICAgICAqIEBkZWZhdWx0IFsnRHJhZ0Ryb3AnLCAnTmF2aWdhdG9yJywgJ1N0eWxlc2hlZXQnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5tYWluVGhyZWFkQWRkb25zXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICBtYWluVGhyZWFkQWRkb25zOiBbJ0RyYWdEcm9wJywgJ05hdmlnYXRvcicsICdTdHlsZXNoZWV0J10sXG4gICAgLyoqXG4gICAgICogUGFzcyB0aGUgVVJMIG9mIGEgSlNPTi1maWxlLCB3aGljaCBjb250YWlucyB0aGUgc2VydmljZXMgYW5kIG1ldGhvZHMgZnJvbSB5b3VyIGJhY2tlbmQsXG4gICAgICogd2hpY2ggeW91IHdhbnQgdG8gZXhwb3NlIHRvIHRoZSBjbGllbnQuXG4gICAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9wcm9qZWN0cy8zMlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVtb3Rlc0FwaVVybFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgcmVtb3Rlc0FwaVVybDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIHZpc3VhbGx5IHNob3cgdGhlIGFtb3VudCBvZiBkZWx0YSB1cGRhdGVzIHBlciBzZWNvbmQgdXNpbmcgdGhpcyBjb25maWcuXG4gICAgICogSXQgZXhwZWN0cyBhIGRvbSBub2RlIHdpdGggdGhlIGlkIFwibmVvLWRlbHRhLXVwZGF0ZXNcIiBhcyB0aGUgcmVuZGVyaW5nIHRhcmdldC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZW5kZXJDb3VudERlbHRhc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICByZW5kZXJDb3VudERlbHRhczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIHRoZW1lcyB5b3Ugd2FudCB0byB1c2UgaGVyZS4gVGhlIGZpcnN0IHRoZW1lIHdpbGwgZ2V0IGFwcGxpZWQuXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCduZW8tdGhlbWUtZGFyaycsJ25lby10aGVtZS1uZW8tbGlnaHQnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy50aGVtZXNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIHRoZW1lczogWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnLCAnbmVvLXRoZW1lLW5lby1saWdodCddLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEV4cGVyaW1lbnRhbCBmbGFnIGlmIGFuIG9mZnNjcmVlbiBjYW52YXMgd29ya2VyIHNob3VsZCBnZXQgY3JlYXRlZC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDYW52YXNXb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlQ2FudmFzV29ya2VyOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIHZkb20gaWRzIHNob3VsZCBnZXQgbWFwcGVkIGludG8gRE9NIGVsZW1lbnQgaWRzLlxuICAgICAqIGZhbHNlIHdpbGwgY29udmVydCB0aGVtIGludG8gYSBcImRhdGEtbmVvLWlkXCIgYXR0cmlidXRlLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRG9tSWRzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZURvbUlkczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBUcnVlIHdpbGwgYXV0b21hdGljYWxseSBpbmNsdWRlIHRoZSBzdHlsZXNoZWV0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VGb250QXdlc29tZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VGb250QXdlc29tZTogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbnRlbmRlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyB3aGVyZSB3ZSBuZWVkIGFuIGVhc3kgd2F5IHRvIGFkZCBHQSB0byBldmVyeSBnZW5lcmF0ZWQgYXBwXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlR29vZ2xlQW5hbHl0aWNzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUdvb2dsZUFuYWx5dGljczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGFkZCB0aGUgU2VydmljZVdvcmtlciBtYWluIHRocmVhZCBhZGRvbiB0byBzdXBwb3J0IGNhY2hpbmcgb2YgYXNzZXRzIChQV0EpXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZV9Xb3JrZXJfQVBJXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGFsc28gdXNlIGEgc3RyaW5nIHRvIHNwZWNpZnkgdGhlIHRhcmdldCBlbnZpcm9ubWVudCA9PiAnZGlzdC9wcm9kdWN0aW9uJy5cbiAgICAgKiBVc2luZyAnZGlzdC9wcm9kdWN0aW9uJyB3aWxsIGFsc28gdXNlIHRoZSBzZXJ2aWNlIHdvcmtlciBmb3IgJ2Rpc3QvZXNtJ1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVNlcnZpY2VXb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFufFN0cmluZ1xuICAgICAqL1xuICAgIHVzZVNlcnZpY2VXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgQXBwLCBEYXRhICYgVkRvbSBhcyBTaGFyZWRXb3JrZXJzLlxuICAgICAqIFNldCB0aGlzIG9uZSB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gY29ubmVjdCBtdWx0aXBsZSBtYWluIHRocmVhZHMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlU2hhcmVkV29ya2Vyc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VTaGFyZWRXb3JrZXJzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBUcnVlIHdpbGwgZ2VuZXJhdGUgYSBuZXcgdGFzayB3b3JrZXIsIHdoaWNoIGNhbiBnZXQgZmlsbGVkIHdpdGggb3duIGV4cGVuc2l2ZSByZW1vdGUgbWV0aG9kc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVRhc2tXb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVGFza1dvcmtlcjogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmFsc2Ugd2lsbCBjcmVhdGUgdGhlIHZkb20uSGVscGVyIHdpdGhpbiB0aGUgQXBwIHdvcmtlciAoZXhwZXJpbWVudGFsISlcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVZkb21Xb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVmRvbVdvcmtlcjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBidWlsZFNjcmlwdHMvaW5qZWN0UGFja2FnZVZlcnNpb24ubWpzIHdpbGwgdXBkYXRlIHRoaXMgdmFsdWVcbiAgICAgKiBAZGVmYXVsdCAnOS4xMy4xJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy52ZXJzaW9uXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgdmVyc2lvbjogJzkuMTMuMSdcbn07XG5cbk9iamVjdC5hc3NpZ24oRGVmYXVsdENvbmZpZywge1xuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIHRvcCBsZXZlbCBuZW8ubWpzIHJlc291cmNlcyBmb2xkZXJcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3Jlc291cmNlcy8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlc291cmNlc1BhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICByZXNvdXJjZXNQYXRoOiBgJHtOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGh9cmVzb3VyY2VzL2AsXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgYmFzZSBVUkwgZm9yIHdlYiB3b3JrZXIgZW50cnkgcG9pbnRzIChBcHAsIERhdGEsIFZkb20pXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdzcmMvd29ya2VyLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcud29ya2VyQmFzZVBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICB3b3JrZXJCYXNlUGF0aDogYCR7TmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRofXNyYy93b3JrZXIvYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0Q29uZmlnO1xuIiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XG5cbmNvbnN0XG4gICAgY2FtZWxSZWdleCAgID0gLy0uL2csXG4gICAgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpLFxuICAgIHR5cGVEZXRlY3RvciA9IHtcbiAgICAgICAgZnVuY3Rpb246IGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ucHJvdG90eXBlPy5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdOZW9DbGFzcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2JqZWN0OiBpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yLmlzQ2xhc3MgJiYgaXRlbSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05lb0luc3RhbmNlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuLyoqXG4gKiBUaGUgYmFzZSBtb2R1bGUgdG8gZW5oYW5jZSBjbGFzc2VzLCBjcmVhdGUgaW5zdGFuY2VzIGFuZCB0aGUgTmVvIG5hbWVzcGFjZVxuICogQG1vZHVsZSBOZW9cbiAqIEBzaW5nbGV0b25cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuYmluZE1ldGhvZHMgICAgICAgYXMgYmluZE1ldGhvZHNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY2FwaXRhbGl6ZSAgICAgICAgYXMgY2FwaXRhbGl6ZVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdCBhcyBjcmVhdGVTdHlsZU9iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZXMgICAgICBhcyBjcmVhdGVTdHlsZXNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuZGVjYW1lbCAgICAgICAgICAgYXMgZGVjYW1lbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0FycmF5ICAgICAgICAgICBhcyBpc0FycmF5XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQm9vbGVhbiAgICAgICAgIGFzIGlzQm9vbGVhblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0RlZmluZWQgICAgICAgICBhcyBpc0RlZmluZWRcbiAqIEBib3Jyb3dzIE5lby5jb3JlLkNvbXBhcmUuaXNFcXVhbCAgICAgICAgYXMgaXNFcXVhbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc051bWJlciAgICAgICAgICBhcyBpc051bWJlclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc09iamVjdCAgICAgICAgICBhcyBpc09iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC50b0FycmF5ICAgICAgICAgICBhcyB0b0FycmF5XG4gKiBAdHV0b3JpYWwgMDFfQ29uY2VwdFxuICovXG5sZXQgTmVvID0gZ2xvYmFsVGhpcy5OZW8gfHwge307XG5cbk5lbyA9IGdsb2JhbFRoaXMuTmVvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgLyoqXG4gICAgICogQSBtYXAgY29udGFpbmluZyBudHlwZXMgYXMga2V5IGFuZCBOZW8gY2xhc3NlcyBvciBzaW5nbGV0b25zIGFzIHZhbHVlc1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBudHlwZU1hcDoge30sXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBOZW8uY3JlYXRlLiBGYWxzZSBmb3IgdGhlIG1haW4gdGhyZWFkLCB0cnVlIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGluc2lkZVdvcmtlcjogdHlwZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnLFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBtZXRob2RzIGZyb20gb25lIG5hbWVzcGFjZSB0byBhbm90aGVyIG9uZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogLy8gYWxpYXNlc1xuICAgICAqIE5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgICogICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICAgKiAgICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJ1xuICAgICAqIH0sIHRydWUpO1xuICAgICAqXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0ICAgIFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gICAgIG5hbWVzcGFjZSBUaGUgY2xhc3MgY29udGFpbmluZyB0aGUgbWV0aG9kc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICAgIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gICAgICAgICAgIFtiaW5kXSAgICBzZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gYmluZCBtZXRob2RzIHRvIHRoZSBcImZyb21cIiBuYW1lc3BhY2VcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKi9cbiAgICBhcHBseUZyb21Ocyh0YXJnZXQsIG5hbWVzcGFjZSwgY29uZmlnLCBiaW5kKSB7XG4gICAgICAgIGxldCBmbk5hbWU7XG5cbiAgICAgICAgaWYgKHRhcmdldCAmJiBOZW8udHlwZU9mKGNvbmZpZykgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGZuTmFtZSA9IG5hbWVzcGFjZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBiaW5kID8gZm5OYW1lLmJpbmQobmFtZXNwYWNlKSA6IGZuTmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2UuXG4gICAgICogQ2FuIGdldCBjYWxsZWQgZm9yIGNsYXNzZXMgYW5kIHNpbmdsZXRvbiBpbnN0YW5jZXNcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzXG4gICAgICovXG4gICAgYXBwbHlUb0dsb2JhbE5zKGNscykge1xuICAgICAgICBsZXQgcHJvdG8gICAgID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGUgOiBjbHMsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIG5zQXJyYXkgICA9IGNsYXNzTmFtZS5zcGxpdCgnLicpLFxuICAgICAgICAgICAga2V5ICAgICAgID0gbnNBcnJheS5wb3AoKSxcbiAgICAgICAgICAgIG5zICAgICAgICA9IE5lby5ucyhuc0FycmF5LCB0cnVlKTtcblxuICAgICAgICBuc1trZXldID0gY2xzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbGwga2V5cyBvZiBkZWZhdWx0cyBpbnRvIHRhcmdldCwgaW4gY2FzZSB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgICBUaGUgdGFyZ2V0IG9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleXMgeW91IHdhbnQgdG8gY29weVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFzc2lnbkRlZmF1bHRzKHRhcmdldCwgZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKHRhcmdldCAmJiBOZW8udHlwZU9mKGRlZmF1bHRzKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5oYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ25zIGEgbmV3IHZhbHVlIHRvIGEgZ2l2ZW4gbmVzdGVkIG9iamVjdHMgcGF0aC5cbiAgICAgKiBJdCB3aWxsIGNyZWF0ZSB0aGUgcGF0aCBzdHJ1Y3R1cmUgb3IgcGFydHMgb2YgaXQsIGluIGNhc2UgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uYXNzaWduVG9OcygnYW5ub3RhdGlvbnMuc2VsZWN0ZWQnLCBmYWxzZSwgcmVjb3JkKVxuICAgICAqXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfFN0cmluZ30gcGF0aCAgICAgICAgICAgICBUaGUgcGF0aCBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0geyp9ICAgICAgICAgICAgICAgdmFsdWUgICAgICAgICAgICBUaGUgbmV3IHZhbHVlIHRvIGFzc2lnbiB0byB0aGUgbGVhZiBub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIHNjb3BlPWdsb2JhbFRoaXMgU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIGdsb2JhbFRoaXNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgICAgZm9yY2U9dHJ1ZSAgICAgICBmYWxzZSB3aWxsIG9ubHkgYXNzaWduIGRlZmF1bHQgdmFsdWVzIChhc3NpZ24gaWYgb2xkIHZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICovXG4gICAgYXNzaWduVG9OcyhwYXRoLCB2YWx1ZSwgc2NvcGU9Z2xvYmFsVGhpcywgZm9yY2U9dHJ1ZSkge1xuICAgICAgICBwYXRoID0gQXJyYXkuaXNBcnJheShwYXRoKSA/IHBhdGggOiBwYXRoLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgbGV0IGtleTtcblxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBrZXkgICA9IHBhdGgucG9wKCk7XG4gICAgICAgICAgICBzY29wZSA9IE5lby5ucyhwYXRoLCB0cnVlLCBzY29wZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IHBhdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmb3JjZSB8fCBzY29wZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNjb3BlW2tleV0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGtlYmFiLWNhc2Ugc3RyaW5ncyBpbnRvIGNhbWVsLWNhc2VcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdGFyZ2V0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgY2FtZWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoY2FtZWxSZWdleCwgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyB1cHBlcmNhc2VcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gUmV0dXJucyBmYWxzZSBmb3Igbm9uIHN0cmluZyBpbnB1dHNcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVswXS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdHxBcnJheXwqfSBvYmpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRlZXA9ZmFsc2UgICAgICAgICAgICAgICBTZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gY2xvbmUgbmVzdGVkIG9iamVjdHMgYXMgd2VsbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XG4gICAgICovXG4gICAgY2xvbmUob2JqLCBkZWVwPWZhbHNlLCBpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG91dDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgQXJyYXkgICAgICA6ICgpID0+ICFkZWVwID8gWy4uLm9ial0gOiBbLi4ub2JqLm1hcCh2YWwgPT4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSldLFxuICAgICAgICAgICAgRGF0ZSAgICAgICA6ICgpID0+IG5ldyBEYXRlKG9iai52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgTWFwICAgICAgICA6ICgpID0+IG5ldyBNYXAob2JqKSwgLy8gc2hhbGxvdyBjb3B5XG4gICAgICAgICAgICBOZW9JbnN0YW5jZTogKCkgPT4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaiksXG4gICAgICAgICAgICBTZXQgICAgICAgIDogKCkgPT4gbmV3IFNldChvYmopLFxuXG4gICAgICAgICAgICBPYmplY3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBvdXQgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gIWRlZXAgPyB2YWx1ZSA6IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dFxuICAgICAgICAgICAgfVxuICAgICAgICB9W05lby50eXBlT2Yob2JqKV0/LigpIHx8IG9ialxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbENvbmZpZyB3aXRob3V0IHRoZSBpZFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSB0aGUgY2xvbmVkIGluc3RhbmNlXG4gICAgICovXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcblxuICAgICAgICBkZWxldGUgY29uZmlnLl9pZDtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShpbnN0YW5jZS5jbGFzc05hbWUsIGNvbmZpZylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlIE5lby5jcmVhdGUoKSBpbnN0ZWFkIG9mIFwibmV3XCIgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhbGwgTmVvIGNsYXNzZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0Jhc2UubWpzJztcbiAgICAgKlxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgY2xhc3NOYW1lOiAnTmVvLmJ1dHRvbi5CYXNlJyxcbiAgICAgKiAgICAgaWNvbkNscyAgOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8TmVvLmNvcmUuQmFzZX0gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V8bnVsbH0gVGhlIG5ldyBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZykge1xuICAgICAgICBsZXQgdHlwZSA9IE5lby50eXBlT2YoY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdOZW9DbGFzcycpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maWcuY2xhc3NOYW1lICYmICFjb25maWcubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVzaW5nIGNvbnNvbGUuZXJyb3IgaW5zdGVhZCBvZiB0aHJvdyB0byBzaG93IHRoZSBjb25maWcgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NsYXNzIGNyZWF0ZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIGNsYXNzTmFtZSBvciBtb2R1bGUgcHJvcGVydHknLCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbmZpZy5jbGFzc05hbWUgfHwgY29uZmlnLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyAnICsgY2xhc3NOYW1lICsgJyBkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZSA9IG5ldyBjbHMoKTtcblxuICAgICAgICBpbnN0YW5jZS5jb25zdHJ1Y3QoY29uZmlnKTtcbiAgICAgICAgaW5zdGFuY2Uub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICBpbnN0YW5jZS5vbkFmdGVyQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGVtcHR5Rm4oKSB7fSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gICAgICAgIGtleSAgIFRoZSBwcm9wZXJ0eSBrZXkgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3I7XG5cbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRlc2NyaXB0b3Iuc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX19cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZWVwLW1lcmdlcyBhIHNvdXJjZSBvYmplY3QgaW50byBhIHRhcmdldCBvYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmIChkZWZhdWx0cykge1xuICAgICAgICAgICAgcmV0dXJuIE5lby5tZXJnZShOZW8ubWVyZ2UodGFyZ2V0LCBkZWZhdWx0cyksIHNvdXJjZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICAgICAgaWYgKE5lby50eXBlT2YodmFsdWUpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gTmVvLm1lcmdlKHRhcmdldFtrZXldIHx8IHt9LCB2YWx1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgY2xhc3NOYW1lIHN0cmluZyBpbnRvIGEgZ2l2ZW4gb3IgZ2xvYmFsIG5hbWVzcGFjZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm5zKCdOZW8uYnV0dG9uLkJhc2UnLCB0cnVlKTtcbiAgICAgKiAvLyA9PlxuICAgICAqIC8vIGdsb2JhbFRoaXMuTmVvICAgICAgICAgICAgID0gZ2xvYmFsVGhpcy5OZW8gICAgICAgICAgICAgfHwge307XG4gICAgICogLy8gZ2xvYmFsVGhpcy5OZW8uYnV0dG9uICAgICAgPSBnbG9iYWxUaGlzLk5lby5idXR0b24gICAgICB8fCB7fTtcbiAgICAgKiAvLyBnbG9iYWxUaGlzLk5lby5idXR0b24uQmFzZSA9IGdsb2JhbFRoaXMuTmVvLmJ1dHRvbi5CYXNlIHx8IHt9O1xuICAgICAqIC8vIHJldHVybiBnbG9iYWxUaGlzLk5lby5idXR0b24uQmFzZTtcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxTdHJpbmd9IG5hbWVzICAgICAgICBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgICAgY3JlYXRlPWZhbHNlIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uLWV4aXN0aW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIFtzY29wZV0gICAgICBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgZ2xvYmFsVGhpc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlZmVyZW5jZSB0byB0aGUgdG9wbGV2ZWwgbmFtZXNwYWNlXG4gICAgICovXG4gICAgbnMobmFtZXMsIGNyZWF0ZT1mYWxzZSwgc2NvcGUpIHtcbiAgICAgICAgbmFtZXMgPSBBcnJheS5pc0FycmF5KG5hbWVzKSA/IG5hbWVzIDogbmFtZXMuc3BsaXQoJy4nKTtcblxuICAgICAgICByZXR1cm4gbmFtZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3JlYXRlICYmICFwcmV2W2N1cnJlbnRdKSB7XG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUgfHwgZ2xvYmFsVGhpcylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRXh0ZW5kZWQgdmVyc2lvbiBvZiBOZW8ubnMoKSB3aGljaCBzdXBwb3J0cyBtYXBwaW5nIGludG8gYXJyYXlzLlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IG5hbWVzICAgICAgICBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59ICAgICAgY3JlYXRlPWZhbHNlIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uLWV4aXN0aW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgIFtzY29wZV0gICAgICBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgZ2xvYmFsVGhpc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlZmVyZW5jZSB0byB0aGUgdG9wbGV2ZWwgbmFtZXNwYWNlXG4gICAgICovXG4gICAgbnNXaXRoQXJyYXlzKG5hbWVzLCBjcmVhdGU9ZmFsc2UsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFycmF5TnModHJ1ZSwgY3VycmVudCwgcHJldilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcmV2W2N1cnJlbnRdID0ge31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBcnJheU5zKGZhbHNlLCBjdXJyZW50LCBwcmV2KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IGdsb2JhbFRoaXMpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIE5lbyBjbGFzc2VzIHVzaW5nIHRoZWlyIG50eXBlIGluc3RlYWQgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5udHlwZSgnYnV0dG9uJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoe1xuICAgICAqICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbnR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICAgICAgIFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XG4gICAgICogQHNlZSB7QGxpbmsgbW9kdWxlOk5lby5jcmVhdGUgY3JlYXRlfVxuICAgICAqL1xuICAgIG50eXBlKG50eXBlLCBjb25maWcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xuXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5udHlwZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgZGVmaW5lZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgbnR5cGUgcHJvcGVydHkuICcgKyBjb25maWcubnR5cGUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG50eXBlID0gY29uZmlnLm50eXBlXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gTmVvLm50eXBlTWFwW250eXBlXTtcblxuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudHlwZSAnICsgbnR5cGUgKyAnIGRvZXMgbm90IGV4aXN0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbGx5IHVzZWQgYXQgdGhlIGVuZCBvZiBlYWNoIGNsYXNzIC8gbW9kdWxlIGRlZmluaXRpb25cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEB0ZW1wbGF0ZSBUXG4gICAgICogQHBhcmFtIHtUfSBjbHNcbiAgICAgKiBAcmV0dXJucyB7VH1cbiAgICAgKi9cbiAgICBzZXR1cENsYXNzKGNscykge1xuICAgICAgICBsZXQgYmFzZUNmZyAgICA9IG51bGwsXG4gICAgICAgICAgICBudHlwZUNoYWluID0gW10sXG4gICAgICAgICAgICB7bnR5cGVNYXB9ID0gTmVvLFxuICAgICAgICAgICAgcHJvdG8gICAgICA9IGNscy5wcm90b3R5cGUgfHwgY2xzLFxuICAgICAgICAgICAgbnMgICAgICAgICA9IE5lby5ucyhwcm90by5jb25zdHJ1Y3Rvci5jb25maWcuY2xhc3NOYW1lLCBmYWxzZSksXG4gICAgICAgICAgICBwcm90b3MgICAgID0gW10sXG4gICAgICAgICAgICBjZmcsIGNvbmZpZywgY3RvciwgbnR5cGU7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogSWYgdGhlIG5hbWVzcGFjZSBhbHJlYWR5IGV4aXN0cywgZGlyZWN0bHkgcmV0dXJuIGl0LlxuICAgICAgICAgKiBUaGlzIGNhbiBoYXBwZW4gd2hlbiB1c2luZyBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgbmVvLm1qc1xuICAgICAgICAgKiA9PiBFc3BlY2lhbGx5IHNpbmdsZXRvbnMgKElkR2VuZXJhdG9yKSBtdXN0IHN0YXkgdW5pcXVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGNhbiBhbHNvIGhhcHBlbiB3aGVuIHVzaW5nIGRpZmZlcmVudCBlbnZpcm9ubWVudHMgb2YgbmVvLm1qcyBpbiBwYXJhbGxlbC5cbiAgICAgICAgICogRXhhbXBsZTogY29kZS5MaXZlUHJldmlldyBydW5uaW5nIGluc2lkZSBhIGRpc3QvcHJvZHVjdGlvbiBhcHAuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAobnMpIHtcbiAgICAgICAgICAgIHJldHVybiBuc1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICAgICAgY3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093bihjdG9yLCAnY2xhc3NDb25maWdBcHBsaWVkJykpIHtcbiAgICAgICAgICAgICAgICBiYXNlQ2ZnICAgID0gTmVvLmNsb25lKGN0b3IuY29uZmlnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBudHlwZUNoYWluID0gWy4uLmN0b3IubnR5cGVDaGFpbl07XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdG9zLnVuc2hpZnQocHJvdG8pO1xuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX19cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZyA9IGJhc2VDZmcgfHwge307XG5cbiAgICAgICAgcHJvdG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgbWl4aW5zO1xuXG4gICAgICAgICAgICBjdG9yID0gZWxlbWVudC5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgY2ZnID0gY3Rvci5jb25maWcgfHwge307XG5cbiAgICAgICAgICAgIGlmIChOZW8ub3ZlcndyaXRlcykge1xuICAgICAgICAgICAgICAgIGN0b3IuYXBwbHlPdmVyd3JpdGVzPy4oY2ZnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjZmcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNmZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgICAgICBjZmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBhdXRvR2VuZXJhdGVHZXRTZXQoZWxlbWVudCwga2V5KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgICAgICAgICAgLy8gdGhvc2Ugd2lsbCBnZXQgYXBwbGllZCBvbiBjcmVhdGUgKE5lby5jb3JlLkJhc2UgLT4gaW5pdENvbmZpZylcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghTmVvLmhhc1Byb3BlcnR5U2V0dGVyKGVsZW1lbnQsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGUgIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093bihjZmcsICdudHlwZScpKSB7XG4gICAgICAgICAgICAgICAgbnR5cGUgPSBjZmcubnR5cGU7XG5cbiAgICAgICAgICAgICAgICBudHlwZUNoYWluLnVuc2hpZnQobnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgLy8gUnVubmluZyB0aGUgZG9jcyBhcHAgaW5zaWRlIGEgd29ya3NwYWNlIGNhbiBwdWxsIGluIHRoZSBzYW1lIGNsYXNzZXMgZnJvbSBkaWZmZXJlbnQgcm9vdHMsXG4gICAgICAgICAgICAgICAgLy8gc28gd2Ugd2FudCB0byBjaGVjayBmb3IgZGlmZmVyZW50IGNsYXNzIG5hbWVzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093bihudHlwZU1hcCwgbnR5cGUpICYmIGNmZy5jbGFzc05hbWUgIT09IG50eXBlTWFwW250eXBlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYG50eXBlIGNvbmZsaWN0IGZvciAnJHtudHlwZX0nIGluc2lkZSB0aGUgY2xhc3NlczpcXG4ke250eXBlTWFwW250eXBlXX1cXG4ke2NmZy5jbGFzc05hbWV9YClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBudHlwZU1hcFtudHlwZV0gPSBjZmcuY2xhc3NOYW1lXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IE9iamVjdC5oYXNPd24oY29uZmlnLCAnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKGN0b3Iub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY2ZnLCAnbWl4aW5zJykgJiYgQXJyYXkuaXNBcnJheShjZmcubWl4aW5zKSAmJiBjZmcubWl4aW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCguLi5jZmcubWl4aW5zKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWl4aW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhcHBseU1peGlucyhjdG9yLCBtaXhpbnMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKE5lby5ucygnTmVvLmNvcmUuT2JzZXJ2YWJsZScsIGZhbHNlLCBjdG9yLnByb3RvdHlwZS5taXhpbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0b3Iub2JzZXJ2YWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBjZmcubWl4aW5zO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5taXhpbnM7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLCBjZmcpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHtcbiAgICAgICAgICAgICAgICBjbGFzc0NvbmZpZ0FwcGxpZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlnICAgICAgICAgICAgOiBOZW8uY2xvbmUoY29uZmlnLCB0cnVlKSxcbiAgICAgICAgICAgICAgICBpc0NsYXNzICAgICAgICAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgbnR5cGVDaGFpblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICFjb25maWcuc2luZ2xldG9uICYmIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvdG8gPSBjbHMucHJvdG90eXBlIHx8IGNscztcblxuICAgICAgICBudHlwZUNoYWluLmZvckVhY2gobnR5cGUgPT4ge1xuICAgICAgICAgICAgcHJvdG9bYGlzJHtOZW8uY2FwaXRhbGl6ZShOZW8uY2FtZWwobnR5cGUpKX1gXSA9IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHByb3RvLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgY2xzID0gTmVvLmNyZWF0ZShjbHMpO1xuICAgICAgICAgICAgTmVvLmFwcGx5VG9HbG9iYWxOcyhjbHMpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0eXBlT2YoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZURldGVjdG9yW3R5cGVvZiBpdGVtXT8uKGl0ZW0pIHx8IGl0ZW0uY29uc3RydWN0b3IubmFtZVxuICAgIH1cbn0sIE5lbyk7XG5cbi8qKlxuICogTGlzdCBvZiBjbGFzcyBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBub3Qgc3VwcG9zZWQgdG8gZ2V0IG1peGVkIGludG8gb3RoZXIgY2xhc3Nlc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWdub3JlTWl4aW4gPSBbXG4gICAgJ19uYW1lJyxcbiAgICAnY2xhc3NDb25maWdBcHBsaWVkJyxcbiAgICAnY2xhc3NOYW1lJyxcbiAgICAnY29uc3RydWN0b3InLFxuICAgICdpc0NsYXNzJyxcbiAgICAnbWl4aW4nLFxuICAgICdudHlwZScsXG4gICAgJ29ic2VydmFibGUnXG5dLFxuXG4gICAgY2hhcnNSZWdleCAgICAgICAgID0gL1xcZCsvZyxcbiAgICBleHRyYWN0QXJyYXlzUmVnZXggPSAvXihcXHcrKVxccyooKD86XFxbXFxzKlxcZCtcXHMqXFxdXFxzKikqKSQvO1xuXG4vKipcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzXG4gKiBAcGFyYW0ge0FycmF5fSAgICAgICAgIG1peGluc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYXBwbHlNaXhpbnMoY2xzLCBtaXhpbnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICB9XG5cbiAgICBsZXQgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgbGVuICAgICAgICAgID0gbWl4aW5zLmxlbmd0aCxcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXG4gICAgICAgIG1peGluLCBtaXhpbkNscywgbWl4aW5Qcm90bztcblxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XG4gICAgICAgIG1peGluID0gbWl4aW5zW2ldO1xuXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW4ucHJvdG90eXBlO1xuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpblByb3RvLmNsYXNzTmFtZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKG1peGluKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBtaXhpbiBhbiB1bmRlZmluZWQgY2xhc3M6ICcgKyBtaXhpbiArICcsICcgKyBjbHMucHJvdG90eXBlLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpbik7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW5DbHMucHJvdG90eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UobWl4UmVkdWNlKG1peGluQ2xzKSwgbWl4aW5DbGFzc2VzKTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpblByb3RvKS5mb3JFYWNoKG1peGluUHJvcGVydHkoY2xzLnByb3RvdHlwZSwgbWl4aW5Qcm90bykpXG4gICAgfVxuXG4gICAgY2xzLnByb3RvdHlwZS5taXhpbnMgPSBtaXhpbkNsYXNzZXMgLy8gdG9kbzogd2Ugc2hvdWxkIGRvIGEgZGVlcCBtZXJnZVxufVxuXG4vKipcbiAqIENyZWF0ZXMgZ2V0IC8gc2V0IG1ldGhvZHMgZm9yIGNsYXNzIGNvbmZpZ3MgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZVxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtTdHJpbmd9ICAgICAgICBrZXlcbiAqIEBwcml2YXRlXG4gKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAqL1xuZnVuY3Rpb24gYXV0b0dlbmVyYXRlR2V0U2V0KHByb3RvLCBrZXkpIHtcbiAgICBpZiAoTmVvLmhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpKSB7XG4gICAgICAgIHRocm93KCdDb25maWcgJyArIGtleSArICdfICgnICsgcHJvdG8uY2xhc3NOYW1lICsgJykgYWxyZWFkeSBoYXMgYSBzZXQgbWV0aG9kLCB1c2UgYmVmb3JlR2V0LCBiZWZvcmVTZXQgJiBhZnRlclNldCBpbnN0ZWFkJylcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9XG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXVtrZXldID0ge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVHZXQgPSBgYmVmb3JlR2V0JHtrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKX1gLFxuICAgICAgICAgICAgICAgICAgICBoYXNOZXdLZXkgPSBPYmplY3QuaGFzT3duKG1lW2NvbmZpZ1N5bWJvbF0sIGtleSksXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleSAgICA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgID0gaGFzTmV3S2V5ID8gbmV3S2V5IDogbWVbJ18nICsga2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFsuLi52YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUudmFsdWVPZigpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlOyAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIHNldHRlciA9PiBiZWZvcmVTZXQsIGFmdGVyU2V0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlR2V0XSh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHVLZXkgICAgICA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZXQgPSAnYmVmb3JlU2V0JyArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2V0ICA9ICdhZnRlclNldCcgICsgdUtleSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgID0gbWVbX2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyBldmVyeSBzZXQgY2FsbCBoYXMgdG8gZGVsZXRlIHRoZSBtYXRjaGluZyBzeW1ib2xcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJyAmJiBrZXkgIT09ICd2bm9kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOZW8uY2xvbmUodmFsdWUsIHRydWUsIHRydWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2UgZG8gd2FudCB0byBzdG9yZSB0aGUgdmFsdWUgYmVmb3JlIHRoZSBiZWZvcmVTZXQgbW9kaWZpY2F0aW9uIGFzIHdlbGwsXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgY291bGQgZ2V0IHB1bGxlZCBieSBvdGhlciBiZWZvcmVTZXQgbWV0aG9kcyBvZiBkaWZmZXJlbnQgY29uZmlnc1xuICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lW2JlZm9yZVNldF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVTZXRdKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhleSBkb24ndCByZXR1cm4gYSB2YWx1ZSwgdGhhdCBtZWFucyBubyBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gb2xkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoa2V5ID09PSAndm5vZGUnICYmIHZhbHVlICE9PSBvbGRWYWx1ZSkgfHwgLy8gdm5vZGUgdHJlZXMgY2FuIGJlIGh1Z2UsIGF2b2lkIGEgZGVlcCBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgICAgICFOZW8uaXNFcXVhbCh2YWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2FmdGVyU2V0XT8uKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFmdGVyU2V0Q29uZmlnPy4oa2V5LCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNyZWF0ZVxuICogQHBhcmFtIHtPYmplY3R9ICBjdXJyZW50XG4gKiBAcGFyYW0ge09iamVjdH0gIHByZXZcbiAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiBjcmVhdGVBcnJheU5zKGNyZWF0ZSwgY3VycmVudCwgcHJldikge1xuICAgIGxldCBhcnJEZXRhaWxzID0gcGFyc2VBcnJheUZyb21TdHJpbmcoY3VycmVudCksXG4gICAgICAgIGkgICAgICAgICAgPSAxLFxuICAgICAgICBsZW4gICAgICAgID0gYXJyRGV0YWlscy5sZW5ndGgsXG4gICAgICAgIGFyckl0ZW0sIGFyclJvb3Q7XG5cbiAgICBpZiAoY3JlYXRlKSB7XG4gICAgICAgIHByZXZbYXJyRGV0YWlsc1swXV0gPSBhcnJSb290ID0gcHJldlthcnJEZXRhaWxzWzBdXSB8fCBbXVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFyclJvb3QgPSBwcmV2W2FyckRldGFpbHNbMF1dXG4gICAgfVxuXG4gICAgaWYgKCFhcnJSb290KSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgYXJySXRlbSA9IHBhcnNlSW50KGFyckRldGFpbHNbaV0pO1xuXG4gICAgICAgIGlmIChjcmVhdGUpIHtcbiAgICAgICAgICAgIGFyclJvb3RbYXJySXRlbV0gPSBhcnJSb290W2Fyckl0ZW1dIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICBhcnJSb290ID0gYXJyUm9vdFthcnJJdGVtXVxuICAgIH1cblxuICAgIHJldHVybiBhcnJSb290XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjbGFzcyBuYW1lIGV4aXN0cyBpbnNpZGUgdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4aXN0cyhjbGFzc05hbWUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gISFjbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdXG4gICAgICAgIH0sIGdsb2JhbFRoaXMpXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IG1peGluUHJvdG9cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peGluUHJvcGVydHkocHJvdG8sIG1peGluUHJvdG8pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICh+aWdub3JlTWl4aW4uaW5kZXhPZihrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm90b1trZXldPy5fZnJvbSkge1xuICAgICAgICAgICAgaWYgKG1peGluUHJvdG8uY2xhc3NOYW1lID09PSBwcm90b1trZXldLl9mcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNaXhpbiBzZXQgbXVsdGlwbGUgdGltZXMgb3IgYWxyZWFkeSBkZWZpbmVkIG9uIGEgQmFzZSBDbGFzcycsIHByb3RvLmNsYXNzTmFtZSwgbWl4aW5Qcm90by5jbGFzc05hbWUsIGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgJHtwcm90by5jbGFzc05hbWV9OiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJHttaXhpblByb3RvLmNsYXNzTmFtZX0sICR7cHJvdG9ba2V5XS5fZnJvbX0pID0+ICR7a2V5fWBcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RvW2tleV0gPSBtaXhpblByb3RvW2tleV07XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KS5fZnJvbSA9IG1peGluUHJvdG8uY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9ba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcHJvdG9ba2V5XS5fbmFtZSA9IGtleVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSBtaXhpbkNsc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWl4UmVkdWNlKG1peGluQ2xzKSB7XG4gICAgcmV0dXJuIChwcmV2LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XSA9IGlkeCAhPT0gYXJyLmxlbmd0aCAtMSA/IHByZXZbY3VycmVudF0gfHwge30gOiBtaXhpbkNsc1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBwYXJzZUFycmF5RnJvbVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gKGV4dHJhY3RBcnJheXNSZWdleC5leGVjKHN0cikgfHwgW251bGxdKS5zbGljZSgxKS5yZWR1Y2UoXG4gICAgICAgIChmdW4sIGFyZ3MpID0+IFtmdW5dLmNvbmNhdChhcmdzLm1hdGNoKGNoYXJzUmVnZXgpKVxuICAgIClcbn1cblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbk5lby5hc3NpZ25EZWZhdWx0cyhOZW8uY29uZmlnLCBEZWZhdWx0Q29uZmlnKTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvO1xuIiwiaW1wb3J0IHtidWZmZXIsIGRlYm91bmNlLCBpbnRlcmNlcHQsIHJlc29sdmVDYWxsYmFjaywgdGhyb3R0bGV9IGZyb20gJy4uL3V0aWwvRnVuY3Rpb24ubWpzJztcbmltcG9ydCBJZEdlbmVyYXRvciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcblxuY29uc3QgY29uZmlnU3ltYm9sICAgICAgID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBmb3JjZUFzc2lnbkNvbmZpZ3MgPSBTeW1ib2woJ2ZvcmNlQXNzaWduQ29uZmlncycpLFxuICAgICAgaXNJbnN0YW5jZSAgICAgICAgID0gU3ltYm9sKCdpc0luc3RhbmNlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIChhbG1vc3QpIGFsbCBjbGFzc2VzIGluc2lkZSB0aGUgTmVvIG5hbWVzcGFjZVxuICogRXhjZXB0aW9ucyBhcmUgZS5nLiBjb3JlLklkR2VuZXJhdG9yLCB2ZG9tLlZOb2RlXG4gKiBAY2xhc3MgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIGRlZmluZSBtZXRob2RzIHdoaWNoIHNob3VsZCBnZXQgZGVsYXllZC5cbiAgICAgKiBUeXBlcyBhcmUgYnVmZmVyLCBkZWJvdW5jZSAmIHRocm90dGxlLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogIGRlbGF5YWJsZToge1xuICAgICAqICAgICAgZmlyZUNoYW5nZUV2ZW50OiB7XG4gICAgICogICAgICAgICAgdHlwZSA6ICdkZWJvdW5jZScsXG4gICAgICogICAgICAgICAgdGltZXI6IDMwMFxuICAgICAqICAgICAgfVxuICAgICAqICB9XG4gICAgICogQG1lbWJlciB7T2JqZWN0fSBkZWxheWFibGU9e31cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWxheWFibGUgPSB7fVxuICAgIC8qKlxuICAgICAqIEZsYWcgd2hpY2ggd2lsbCBnZXQgc2V0IHRvIHRydWUgb25jZSBtYW5hZ2VyLkluc3RhbmNlIGdvdCBjcmVhdGVkXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlPWZhbHNlXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBpbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIFJlZ2V4IHRvIGdyYWIgdGhlIE1ldGhvZE5hbWUgZnJvbSBhbiBlcnJvclxuICAgICAqIHdoaWNoIGlzIGEgc2Vjb25kIGdlbmVyYXRpb24gZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IG1ldGhvZE5hbWVSZWdleFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgbWV0aG9kTmFtZVJlZ2V4ID0gL1xcbi4qXFxuXFxzK2F0XFxzKy4qXFwuKFxcdyspXFxzKy4qL1xuICAgIC8qKlxuICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPWZhbHNlXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBvYnNlcnZhYmxlID0gZmFsc2VcbiAgICAvKipcbiAgICAgKiBLZWVwIHRoZSBvdmVyd3JpdHRlbiBtZXRob2RzXG4gICAgICogQG1lbWJlciB7T2JqZWN0fSBvdmVyd3JpdHRlbk1ldGhvZHM9e31cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBvdmVyd3JpdHRlbk1ldGhvZHMgPSB7fVxuICAgIC8qKlxuICAgICAqIENvbmZpZ3Mgd2lsbCBnZXQgbWVyZ2VkIHRocm91Z2hvdXQgdGhlIGNsYXNzIGhpZXJhcmNoeVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgbmFtZSB3aGljaCB3aWxsIGdldCBtYXBwZWQgaW50byB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIHNob3J0Y3V0LW5hbWUgdG8gdXNlIGZvciBlLmcuIGNyZWF0aW5nIGNoaWxkIGNvbXBvbmVudHMgaW5zaWRlIGEgSlNPTi1mb3JtYXRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdiYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoaWxlIGl0IGlzIHJlY29tbWVuZGVkIHRvIGNoYW5nZSB0aGUgc3RhdGljIGRlbGF5YWJsZSBjb25maWdzIG9uIGNsYXNzIGxldmVsLFxuICAgICAgICAgKiB5b3UgY2FuIGNoYW5nZSBpdCBvbiBpbnN0YW5jZSBsZXZlbCB0b28uIElmIG5vdCBudWxsLCB3ZSB3aWxsIGRvIGEgZGVlcCBtZXJnZS5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBkZWxheWFibGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGVsYXlhYmxlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSBjb21wb25lbnQgaWRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOZW8uY3JlYXRlKCkgd2lsbCBjaGFuZ2UgdGhpcyBmbGFnIHRvIHRydWUgYWZ0ZXIgdGhlIG9uQ29uc3RydWN0ZWQoKSBjaGFpbiBpcyBkb25lLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0NvbnN0cnVjdGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzQ29uc3RydWN0ZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIG1peGlucyBhcyBhbiBhcnJheSBvZiBjbGFzc05hbWVzLCBpbXBvcnRlZCBtb2R1bGVzIG9yIGEgbWl4ZWQgdmVyc2lvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1peGluczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGluc3RhbmNlIGJ5IHBhc3NpbmcgYW4gaW1wb3J0ZWQgY2xhc3MgKEpTIG1vZHVsZSBkZWZhdWx0IGV4cG9ydClcbiAgICAgICAgICogQG1lbWJlciB7Q2xhc3N9IG1vZHVsZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZHVsZTogbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGNhY2hlIGZvciBhbGwgdGltZW91dCBpZHMgd2hlbiB1c2luZyB0aGlzLnRpbWVvdXQoKVxuICAgICAqIEBtZW1iZXIge051bWJlcltdfSB0aW1lb3V0SWRzPVtdXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICAjdGltZW91dElkcyA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBvYnNlcnZhYmxlIG1peGluIGlmIG5lZWRlZCwgZ3JhbnRzIHJlbW90ZSBhY2Nlc3MgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWc9e31cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcbiAgICAgICAgICAgIFtjb25maWdTeW1ib2xdOiB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbaXNJbnN0YW5jZV06IHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmNyZWF0ZUlkKGNvbmZpZy5pZCB8fCBtZS5pZCk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZFxuICAgICAgICB9XG5cbiAgICAgICAgbWUuZ2V0U3RhdGljQ29uZmlnKCdvYnNlcnZhYmxlJykgJiYgbWUuaW5pdE9ic2VydmFibGUoY29uZmlnKTtcblxuICAgICAgICAvLyBhc3NpZ24gY2xhc3MgZmllbGQgdmFsdWVzIHByaW9yIHRvIGNvbmZpZ3NcbiAgICAgICAgY29uZmlnID0gbWUuc2V0RmllbGRzKGNvbmZpZyk7XG5cbiAgICAgICAgbWUuaW5pdENvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZSwgJ2NvbmZpZ3NBcHBsaWVkJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZSAgICAgOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmFwcGx5RGVsYXlhYmxlKCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogV2UgZG8gbm90IHdhbnQgdG8gZm9yY2UgZGV2cyB0byBjaGVjayBmb3IgdGhlIGBpc0Rlc3Ryb3llZGAgZmxhZyBpbiBldmVyeSBwb3NzaWJsZSBjbGFzcyBleHRlbnNpb24uXG4gICAgICAgICAqIFNvLCB3ZSBhcmUgaW50ZXJjZXB0aW5nIHRoZSB0b3AtbW9zdCBgZGVzdHJveSgpYCBjYWxsIHRvIGNoZWNrIGZvciB0aGUgZmxhZyB0aGVyZS5cbiAgICAgICAgICogUmF0aW9uYWxlOiBgZGVzdHJveSgpYCBtdXN0IG9ubHkgZ2V0IGNhbGxlZCBvbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaW50ZXJjZXB0KG1lLCAnZGVzdHJveScsIG1lLmlzRGVzdHJveWVkQ2hlY2ssIG1lKTtcblxuICAgICAgICBtZS5yZW1vdGUgJiYgc2V0VGltZW91dChtZS5pbml0UmVtb3RlLmJpbmQobWUpLCAxKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWQgY29uZmlnIGdvdCBjaGFuZ2VkLlxuICAgICAqIFlvdSBjYW4gZHluYW1pY2FsbHkgY2hhbmdlIGluc3RhbmNlIGlkcyBpZiBuZWVkZWQuIFRoZXkgbmVlZCB0byBzdGF5IHVuaXF1ZSBhdCBhbnkgZ2l2ZW4gcG9pbnQuXG4gICAgICogVXNlIGNhc2U6IGUuZy4gY29tcG9uZW50IGJhc2VkIGxpc3RzLCB3aGVyZSB5b3Ugd2FudCB0byByZS11c2UgaXRlbSBpbnN0YW5jZXMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoYXNNYW5hZ2VyID0gQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWU7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaGFzTWFuYWdlcikge1xuICAgICAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnVucmVnaXN0ZXIob2xkVmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXBbb2xkVmFsdWVdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChoYXNNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UucmVnaXN0ZXIobWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOZW8uaWRNYXAgPSBOZW8uaWRNYXAgfHwge307XG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwW21lLmlkXSA9IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGp1c3RzIGFsbCBtZXRob2RzIGluc2lkZSBzdGF0aWMgZGVsYXlhYmxlXG4gICAgICovXG4gICAgYXBwbHlEZWxheWFibGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGN0b3JEZWxheWFibGUgPSBtZS5jb25zdHJ1Y3Rvci5kZWxheWFibGUsXG4gICAgICAgICAgICBkZWxheWFibGUgICAgID0gbWUuZGVsYXlhYmxlID8gTmVvLm1lcmdlKHt9LCBtZS5kZWxheWFibGUsIGN0b3JEZWxheWFibGUpIDogY3RvckRlbGF5YWJsZTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhkZWxheWFibGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1hcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyKCkgICB7bWVba2V5XSA9IG5ldyBidWZmZXIobWVba2V5XSwgICBtZSwgdmFsdWUudGltZXIpfSxcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2UoKSB7bWVba2V5XSA9IG5ldyBkZWJvdW5jZShtZVtrZXldLCBtZSwgdmFsdWUudGltZXIpfSxcbiAgICAgICAgICAgICAgICAgICAgdGhyb3R0bGUoKSB7bWVba2V5XSA9IG5ldyB0aHJvdHRsZShtZVtrZXldLCBtZSwgdmFsdWUudGltZXIpfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBtYXBbdmFsdWUudHlwZV0/LigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHlpbmcgb3ZlcndyaXRlcyBhbmQgYWRkaW5nIG92ZXJ3cml0dGVuTWV0aG9kcyB0byB0aGUgY2xhc3MgY29uc3RydWN0b3JzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNmZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgYXBwbHlPdmVyd3JpdGVzKGNmZykge1xuICAgICAgICBsZXQgb3ZlcndyaXRlcyA9IE5lby5ucyhjZmcuY2xhc3NOYW1lLCBmYWxzZSwgTmVvLm92ZXJ3cml0ZXMpLFxuICAgICAgICAgICAgY2xzLCBpdGVtO1xuXG4gICAgICAgIGlmIChvdmVyd3JpdGVzKSB7XG4gICAgICAgICAgICAvLyBBcHBseSBhbGwgbWV0aG9kc1xuICAgICAgICAgICAgZm9yIChpdGVtIGluIG92ZXJ3cml0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzRnVuY3Rpb24ob3ZlcndyaXRlc1tpdGVtXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxyZWFkeSBleGlzdGluZyBvbmVzXG4gICAgICAgICAgICAgICAgICAgIGNscyA9IHRoaXMucHJvdG90eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbHNbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBvdmVyd3JpdHRlbk1ldGhvZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscy5jb25zdHJ1Y3Rvci5vdmVyd3JpdHRlbk1ldGhvZHNbaXRlbV0gPSBjbHNbaXRlbV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlncyB0byBwcm90b3R5cGVcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2ZnLCBvdmVyd3JpdGVzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBiZWZvcmVTZXQgZnVuY3Rpb25zIHdoaWNoIHRlc3QgaWYgYSBnaXZlbiB2YWx1ZSBpcyBpbnNpZGUgYSBzdGF0aWMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGNvbmZpZyBuYW1lXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IFtzdGF0aWNOYW1lPW5hbWUgKyAncyddIG5hbWUgb2YgdGhlIHN0YXRpYyBjb25maWcgYXJyYXlcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfE51bWJlcn0gdmFsdWUgb3Igb2xkVmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCBuYW1lLCBzdGF0aWNOYW1lID0gbmFtZSArICdzJykge1xuICAgICAgICBsZXQgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0aWNOYW1lKSA/IHN0YXRpY05hbWUgOiB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFN1cHBvcnRlZCB2YWx1ZXMgZm9yICR7bmFtZX0gYXJlOmAsIC4uLnZhbHVlcywgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmbiAgICAgICAgICAgICAgIFRoZSBuYW1lIG9mIGEgZnVuY3Rpb24gdG8gZmluZCBpbiB0aGUgcGFzc2VkIHNjb3BlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3JpZ2luTmFtZSAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIGluc2lkZSB0aGUgb3JpZ2luU2NvcGUuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlICAgICAgICAgICAgVGhlIHNjb3BlIHRvIGZpbmQgdGhlIGZ1bmN0aW9uIGluIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3JpZ2luU2NvcGU9dGhpcyBUaGUgc2NvcGUgd2hlcmUgdGhlIGZ1bmN0aW9uIGlzIGxvY2F0ZWQuXG4gICAgICovXG4gICAgYmluZENhbGxiYWNrKGZuLCBvcmlnaW5OYW1lLCBzY29wZT10aGlzLCBvcmlnaW5TY29wZT10aGlzKSB7XG4gICAgICAgIGlmIChmbiAmJiBOZW8uaXNTdHJpbmcoZm4pKSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gcmVzb2x2ZUNhbGxiYWNrKGZuLCBzY29wZSk7XG4gICAgICAgICAgICBvcmlnaW5TY29wZVtvcmlnaW5OYW1lXSA9IGhhbmRsZXIuZm4uYmluZChoYW5kbGVyLnNjb3BlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRnJvbSB3aXRoaW4gYW4gb3ZlcndyaXRlLCBhIG1ldGhvZCBjYW4gY2FsbCBhIHBhcmVudCBtZXRob2QsIGJ5IHVzaW5nIGNhbGxPdmVyd3JpdHRlbi5cbiAgICAgKlxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgYWZ0ZXJTZXRIZWlnaHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICogICAgICAgIC8vIGRvIHRoZSBzdGFuZGFyZFxuICAgICAqICAgICAgICB0aGlzLmNhbGxPdmVyd3JpdHRlbiguLi5hcmd1bWVudHMpO1xuICAgICAqICAgICAgICAvLyBkbyB5b3Ugb3duIHN0dWZmXG4gICAgICogICAgfVxuICAgICAqXG4gICAgICogV2UgY3JlYXRlIGFuIGVycm9yIHRvIGdldCB0aGUgY2FsbGVyLm5hbWUgYW5kIHRoZW4gcnVuIHRoYXQgbWV0aG9kIG9uIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBUaGlzIGlzIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgZXJyb3Igc3RydWN0dXJlLCBlLmcuIGFmdGVyU2V0SGVpZ2h0LlxuICAgICAqXG4gICAgICogICAgIEVycm9yXG4gICAgICogICAgICAgICBhdCBCYXNlLmNhbGxPdmVyd3JpdHRlbiAoQmFzZS5tanM6MTc2OjIxKVxuICAgICAqICAgICAgICAgYXQgQmFzZS5hZnRlclNldEhlaWdodCAoT3ZlcnJpZGVzLm1qczoxOToyNilcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgY2FsbE92ZXJ3cml0dGVuKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHN0YWNrICAgICAgPSBuZXcgRXJyb3IoKS5zdGFjayxcbiAgICAgICAgICAgIG1ldGhvZE5hbWUgPSBzdGFjay5tYXRjaChCYXNlLm1ldGhvZE5hbWVSZWdleClbMV07XG5cbiAgICAgICAgdGhpcy5fX3Byb3RvX18uY29uc3RydWN0b3Iub3ZlcndyaXR0ZW5NZXRob2RzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgLi4uYXJncylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBJZEdlbmVyYXRvciB0byBjcmVhdGUgYW4gaWQgaWYgYSBzdGF0aWMgb25lIGlzIG5vdCBleHBsaWNpdGx5IHNldC5cbiAgICAgKiBSZWdpc3RlcnMgdGhlIGluc3RhbmNlIHRvIG1hbmFnZXIuSW5zdGFuY2UgaWYgdGhpcyBvbmUgaXMgYWxyZWFkeSBjcmVhdGVkLFxuICAgICAqIG90aGVyd2lzZSBzdG9yZXMgaXQgaW5zaWRlIGEgdG1wIG1hcC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKi9cbiAgICBjcmVhdGVJZChpZCkge1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgSWRHZW5lcmF0b3IuZ2V0SWQodGhpcy5nZXRJZEtleSgpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLiN0aW1lb3V0SWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnVucmVnaXN0ZXIobWUpXG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwW21lLmlkXVxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG1lLCBrZXkpLndyaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgbXVzdCBub3QgZGVsZXRlIHRoZSBjdXN0b20gZGVzdHJveSgpIGludGVyY2VwdG9yXG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2Rlc3Ryb3knICYmIGtleSAhPT0gJ19pZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFdlIGRvIHdhbnQgdG8gcHJldmVudCBkZWxheWVkIGV2ZW50IGNhbGxzIGFmdGVyIGFuIG9ic2VydmFibGUgaW5zdGFuY2UgZ290IGRlc3Ryb3llZC5cbiAgICAgICAgaWYgKE5lby5pc0Z1bmN0aW9uKG1lLmZpcmUpKSB7XG4gICAgICAgICAgICBtZS5maXJlID0gTmVvLmVtcHR5Rm5cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmlzRGVzdHJveWVkID0gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgaW5zaWRlIGNyZWF0ZUlkKCkgYXMgdGhlIGRlZmF1bHQgdmFsdWUgcGFzc2VkIHRvIHRoZSBJZEdlbmVyYXRvci5cbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBhcyBuZWVkZWQuXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJZEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnR5cGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcga2V5IG9yIHRoZSBzdGF0aWNDb25maWcgb2JqZWN0IGl0c2VsZiBpbiBjYXNlIG5vIHZhbHVlIGlzIHNldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0U3RhdGljQ29uZmlnKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcltrZXldXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBnaXZlbiBudHlwZSBleGlzdHMgaW5zaWRlIHRoZSBwcm90byBjaGFpbiwgaW5jbHVkaW5nIHRoZSB0b3AgbGV2ZWwgY2xhc3NcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbnR5cGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNOdHlwZShudHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5udHlwZUNoYWluLmluY2x1ZGVzKG50eXBlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQoKSBpcyBkb25lXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgaW5pdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaW5pdENvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlzQ29uZmlndXJpbmcgPSB0cnVlO1xuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIG1lLm1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSk7XG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XG4gICAgICAgIG1lLmlzQ29uZmlndXJpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb2VzIGdldCB0cmlnZ2VyZWQgd2l0aCBhIGRlbGF5IHRvIGVuc3VyZSB0aGF0IE5lby53b3JrZXJJZCAmIE5lby53b3JrZXIuTWFuYWdlciBhcmUgZGVmaW5lZFxuICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIHZpYSBwcm9taXNlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmVtb3RlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7Y2xhc3NOYW1lLCByZW1vdGV9ID0gbWUsXG4gICAgICAgICAgICB7Y3VycmVudFdvcmtlcn0gICAgID0gTmVvO1xuXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uICYmICFtZS5pc01haW5UaHJlYWRBZGRvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdGUgbWV0aG9kIGFjY2VzcyBpcyBvbmx5IGZ1bmN0aW9uYWwgZm9yIFNpbmdsZXRvbiBjbGFzc2VzICcgKyBjbGFzc05hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIU5lby5jb25maWcudW5pdFRlc3RNb2RlICYmIE5lby5pc09iamVjdChyZW1vdGUpKSB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSAnbWFpbicgJiYgY3VycmVudFdvcmtlci5pc1NoYXJlZFdvcmtlciAmJiAhY3VycmVudFdvcmtlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRXb3JrZXIub24oJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSlcbiAgICAgICAgICAgICAgICB9LCBtZSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJjZXB0cyBkZXN0cm95KCkgY2FsbHMgdG8gZW5zdXJlIHRoZXkgd2lsbCBvbmx5IGdldCBjYWxsZWQgb25jZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzRGVzdHJveWVkQ2hlY2soKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0Rlc3Ryb3llZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgb3JkZXIgY29uZmlncyBhcmUgYXBwbGllZCB0byB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XG5cbiAgICAgICAgaWYgKCFjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICAgICAgbWUub3JpZ2luYWxDb25maWcgPSBOZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsuLi5jdG9yLmNvbmZpZywgLi4uY29uZmlnfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25BZnRlckNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlzQ29uc3RydWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFdlIGNhbiBvbmx5IGZpcmUgdGhlIGV2ZW50IGluIGNhc2UgdGhlIE9ic2VydmFibGUgbWl4aW4gaXMgaW5jbHVkZWQuXG4gICAgICAgIG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpICYmIG1lLmZpcmUoJ2NvbnN0cnVjdGVkJywgbWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgYWxsIGNvbnN0cnVjdG9ycyBhcmUgZG9uZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byByZXBsYWNlIHN0cmluZyBiYXNlZCB2YWx1ZXMgY29udGFpbmluZyBcIkBjb25maWc6XCIgd2l0aCB0aGUgbWF0Y2hpbmcgY29uZmlnIHZhbHVlXG4gICAgICogb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdHxPYmplY3RbXX0gaXRlbXNcbiAgICAgKi9cbiAgICBwYXJzZUl0ZW1Db25maWdzKGl0ZW1zKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBucywgbnNBcnJheSwgbnNLZXksIHN5bWJvbE5zO1xuXG4gICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0gJiYgT2JqZWN0LmVudHJpZXMoaXRlbSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUucGFyc2VJdGVtQ29uZmlncyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5zdGFydHNXaXRoKCdAY29uZmlnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuc0FycmF5ID0gdmFsdWUuc3Vic3RyaW5nKDgpLnRyaW0oKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbnNLZXkgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIGZhbHNlLCBtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuc1tuc0tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSB1c2VkIEBjb25maWcgZG9lcyBub3QgZXhpc3Q6JywgbnNLZXksIG5zQXJyYXkuam9pbignLicpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xOcyA9IE5lby5ucyhuc0FycmF5LCBmYWxzZSwgbWVbY29uZmlnU3ltYm9sXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgY29uZmlnIG1pZ2h0IG5vdCBiZSBwcm9jZXNzZWQgeWV0LCBlc3BlY2lhbGx5IGZvciBjb25maWdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmUsIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGhlIGNvbmZpZ1N5bWJvbCBmaXJzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sTnMgJiYgT2JqZWN0Lmhhc093bihzeW1ib2xOcywgbnNLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5XSA9IHN5bWJvbE5zW25zS2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5XSA9IG5zW25zS2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB1c2luZyBzZXQoKSwgY29uZmlncyB3aXRob3V0IGEgdHJhaWxpbmcgdW5kZXJzY29yZSBjYW4gYWxyZWFkeSBiZSBhc3NpZ25lZCxcbiAgICAgKiBzbyB0aGUgaGFzT3duUHJvcGVydHkoKSBjaGVjayB3aWxsIHJldHVybiB0cnVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZm9yY2VBc3NpZ249ZmFsc2VdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKTtcblxuICAgICAgICBtZVtmb3JjZUFzc2lnbkNvbmZpZ3NdID0gZm9yY2VBc3NpZ247XG5cbiAgICAgICAgLy8gV2UgZG8gbm90IHdhbnQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBrZXlzLCBzaW5jZSAxIGNvbmZpZyBjYW4gcmVtb3ZlIG1vcmUgdGhhbiAxIGtleSAoYmVmb3JlU2V0WCwgYWZ0ZXJTZXRYKVxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcbiAgICAgICAgICAgIC8vID0+IHRoZXkgY291bGQgYWxyZWFkeSBoYXZlIGJlZW4gYXNzaWduZWQgaW5zaWRlIGFuIGFmdGVyU2V0LW1ldGhvZFxuICAgICAgICAgICAgaWYgKGZvcmNlQXNzaWduIHx8ICFtZS5oYXNPd25Qcm9wZXJ0eShrZXlzWzBdKSkge1xuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIGRlbGV0ZS1jYWxsIGluc2lkZSB0aGUgY29uZmlnIGdldHRlciBhcyB3ZWxsIChOZW8ubWpzID0+IGF1dG9HZW5lcmF0ZUdldFNldCgpKVxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBrZWVwIHRoaXMgb25lIGZvciBjb25maWdzLCB3aGljaCBkbyBub3QgdXNlIGdldHRlcnMgKG5vIHRyYWlsaW5nIHVuZGVyc2NvcmUpXG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcblxuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoZm9yY2VBc3NpZ24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpIHtcbiAgICAgICAgbGV0IG9yaWdpbjtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xuXG4gICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3RlclJlbW90ZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG11bHRpcGxlIGNvbmZpZ3MgYXQgb25jZSwgZW5zdXJpbmcgdGhhdCBhbGwgYWZ0ZXJTZXQgbWV0aG9kcyBnZXQgYWxsIG5ldyBhc3NpZ25lZCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XG4gICAgICovXG4gICAgc2V0KHZhbHVlcz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHZhbHVlcyA9IG1lLnNldEZpZWxkcyh2YWx1ZXMpO1xuXG4gICAgICAgIC8vIElmIHRoZSBpbml0aWFsIGNvbmZpZyBwcm9jZXNzaW5nIGlzIHN0aWxsIHJ1bm5pbmcsXG4gICAgICAgIC8vIGZpbmlzaCB0aGlzIG9uZSBmaXJzdCBiZWZvcmUgZHJvcHBpbmcgbmV3IHZhbHVlcyBpbnRvIHRoZSBjb25maWdTeW1ib2wuXG4gICAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzIyMDFcbiAgICAgICAgaWYgKG1lW2ZvcmNlQXNzaWduQ29uZmlnc10gIT09IHRydWUgJiYgT2JqZWN0LmtleXMobWVbY29uZmlnU3ltYm9sXSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKVxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCB2YWx1ZXMpO1xuXG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKHRydWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2Ugd2FudCB0byBhc3NpZ24gY2xhc3MgZmllbGRzIGZpcnN0IGFuZCByZW1vdmUgdGhlbSBmcm9tIHRoZSBjb25maWcgb2JqZWN0LFxuICAgICAqIHNvIHRoYXQgYWZ0ZXJTZXQoKSwgYmVmb3JlR2V0KCkgYW5kIGJlZm9yZVNldCgpIG1ldGhvZHMgY2FuIGdldCB0aGUgbmV3IHZhbHVlcyByaWdodCBhd2F5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHNldEZpZWxkcyhjb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbmZpZ05hbWVzID0gbWUuY29uc3RydWN0b3IuY29uZmlnO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbmZpZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZ05hbWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIU5lby5oYXNQcm9wZXJ0eVNldHRlcihtZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gY29uZmlnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGJ5IGEgZ2l2ZW4ga2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29uZmlnIGV4aXN0cyBhbmQgZ290IGNoYW5nZWRcbiAgICAgKi9cbiAgICBzZXRTdGF0aWNDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgc3RhdGljQ29uZmlnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG5cbiAgICAgICAgaWYgKHN0YXRpY0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBzdGF0aWNDb25maWdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyB0aW1lb3V0SWRzIGludGVybmFsbHksIHNvIHRoYXQgZGVzdHJveSgpIGNhbiBjbGVhciB0aGVtIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lIGluIG1pbGxpc2Vjb25kc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgdGltZW91dCh0aW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGxldCB0aW1lb3V0SWRzID0gdGhpcy4jdGltZW91dElkcyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0SWQgID0gc2V0VGltZW91dCgoKSA9PiB7dGltZW91dElkcy5zcGxpY2UodGltZW91dElkcy5pbmRleE9mKHRpbWVvdXRJZCksIDEpOyByZXNvbHZlKCl9LCB0aW1lKTtcblxuICAgICAgICAgICAgdGltZW91dElkcy5wdXNoKHRpbWVvdXRJZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kLCBlLmcuPC9wPlxuICAgICAqIGBOZW8uY3JlYXRlKCdOZW8uYnV0dG9uLkJhc2UnKS50b1N0cmluZygpID0+IFwiW29iamVjdCBOZW8uYnV0dG9uLkJhc2UgKG5lby1idXR0b24tMSldXCJgXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNsYXNzTmFtZX0gKGlkOiAke3RoaXMuaWR9KWBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIGluc3RhbmNlb2YgbWV0aG9kLiBXaXRob3V0IHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogPHA+V2l0aCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiBmYWxzZWA8YnI+XG4gICAgICogYE5lby5jcmVhdGUoTmVvLmNvbGxlY3Rpb24uQmFzZSkgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlW2lzSW5zdGFuY2VdID09PSB0cnVlID8gc3VwZXJbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkgOiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoQmFzZSk7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuQ29tcGFyZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBDb21wYXJlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5Db21wYXJlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5Db21wYXJlJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JpbmcgdGhlIGNvbXBhcmlzb24gbWV0aG9kIG5hbWVzIGJ5IGRhdGEgdHlwZVxuICAgICAqIEBtZW1iZXIge09iamVjdH0gbWFwXG4gICAgICovXG4gICAgc3RhdGljIG1hcCA9IHtcbiAgICAgICAgQXJyYXkgICAgICA6ICdjb21wYXJlQXJyYXlzJyxcbiAgICAgICAgRGF0ZSAgICAgICA6ICdjb21wYXJlRGF0ZXMnLFxuICAgICAgICBGdW5jdGlvbiAgIDogJ2NvbXBhcmVGdW5jdGlvbnMnLFxuICAgICAgICBNYXAgICAgICAgIDogJ2NvbXBhcmVNYXBzJyxcbiAgICAgICAgTmVvSW5zdGFuY2U6ICdjb21wYXJlTmVvSW5zdGFuY2VzJyxcbiAgICAgICAgT2JqZWN0ICAgICA6ICdjb21wYXJlT2JqZWN0cycsXG4gICAgICAgIFJlZ0V4cCAgICAgOiAnY29tcGFyZVJlZ0V4cHMnLFxuICAgICAgICBTZXQgICAgICAgIDogJ2NvbXBhcmVTZXRzJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZUFycmF5cyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xLmxlbmd0aCAhPT0gaXRlbTIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgW2ksIHZdIG9mIGl0ZW0xLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgaWYgKCFDb21wYXJlLmlzRXF1YWwodiwgaXRlbTJbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RGF0ZX0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVEYXRlcyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0xLnZhbHVlT2YoKSA9PT0gaXRlbTIudmFsdWVPZigpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlRnVuY3Rpb25zKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoaXRlbTEubmFtZSAhPT0gaXRlbTIubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTEudG9TdHJpbmcoKSA9PT0gaXRlbTIudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TWFwfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7TWFwfSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlTWFwcyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgaWYgKGl0ZW0xLnNpemUgIT09IGl0ZW0yLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbDI7XG5cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGl0ZW0xKSB7XG4gICAgICAgICAgICB2YWwyID0gaXRlbTIuZ2V0KGtleSk7XG5cbiAgICAgICAgICAgIGlmICh2YWwyICE9PSB2YWwgfHwgdmFsMiA9PT0gdW5kZWZpbmVkICYmICFpdGVtMi5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlTmVvSW5zdGFuY2VzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICByZXR1cm4gaXRlbTEuaWQgPT09IGl0ZW0yLmlkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0xXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVPYmplY3RzKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoaXRlbTEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoaXRlbTIpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaXRlbTEpIHtcbiAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKGl0ZW0xW2tleV0sIGl0ZW0yW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UmVnRXhwfSBpdGVtMVxuICAgICAqIEBwYXJhbSB7UmVnRXhwfSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wYXJlUmVnRXhwcyhpdGVtMSwgaXRlbTIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0xLnRvU3RyaW5nKCkgPT09IGl0ZW0yLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NldH0gaXRlbTFcbiAgICAgKiBAcGFyYW0ge1NldH0gaXRlbTJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZVNldHMoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMS5zaXplICE9PSBpdGVtMi5zaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBpdGVtMSkge1xuICAgICAgICAgICAgaWYgKCFpdGVtMi5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW0xXG4gICAgICogQHBhcmFtIHsqfSBpdGVtMlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VxdWFsKGl0ZW0xLCBpdGVtMikge1xuICAgICAgICBpZiAoaXRlbTEgPT09IGl0ZW0yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHR5cGUxID0gTmVvLnR5cGVPZihpdGVtMSksXG4gICAgICAgICAgICB0eXBlMiA9IE5lby50eXBlT2YoaXRlbTIpO1xuXG4gICAgICAgIGlmICh0eXBlMSAhPT0gdHlwZTIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbXBhcmUubWFwW3R5cGUxXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBhcmVbQ29tcGFyZS5tYXBbdHlwZTFdXShpdGVtMSwgaXRlbTIpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbGwgb3RoZXIgdHlwZXNcbiAgICAgICAgcmV0dXJuIGl0ZW0xID09PSBpdGVtMlxuICAgIH1cbn1cblxuQ29tcGFyZSA9IE5lby5zZXR1cENsYXNzKENvbXBhcmUpO1xuXG4vLyBhbGlhc1xuTmVvLmlzRXF1YWwgPSBDb21wYXJlLmlzRXF1YWw7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmU7XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXG4gKiBJdCBjb3VsZCBnZXQgc2ltcGxpZmllZCB0byBqdXN0IGJlaW5nIGFuIG9iamVjdCAobmVlZHMgdG8gbWFudWFsbHkgZ2V0IHB1dCBpbnRvIHRoZSBOZW8gbmFtZXNwYWNlIGluIHRoaXMgY2FzZSkuXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSWRHZW5lcmF0b3Ige1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2lkLWdlbmVyYXRvcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcbiAgICAgICAgICovXG4gICAgICAgIGJhc2U6ICduZW8tJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj0ndHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlkQ291bnRlciA9IHt9O1xuXG4gICAgICAgIC8vIGFsaWFzXG4gICAgICAgIE5lby5nZXRJZCA9IG1lLmdldElkLmJpbmQobWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJZChuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lIHx8ICduZW8nO1xuXG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvdW50ZXIgPSBtZS5pZENvdW50ZXIsXG4gICAgICAgICAgICBjb3VudCAgID0gY291bnRlcltuYW1lXSB8fCAwO1xuXG4gICAgICAgIGNvdW50ZXJbbmFtZV0gPSArK2NvdW50O1xuXG4gICAgICAgIHJldHVybiBtZS5iYXNlICsgKG5hbWUgPT09ICduZW8nID8gJycgOiBuYW1lICsgJy0nKSArIGNvdW50O1xuICAgIH1cblxuICAgIGluaXQoKSB7fVxuXG4gICAgb25BZnRlckNvbnN0cnVjdGVkKCkge31cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhJZEdlbmVyYXRvcik7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IHtyZXNvbHZlQ2FsbGJhY2t9IGZyb20gJy4uL3V0aWwvRnVuY3Rpb24ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuT2JzZXJ2YWJsZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5PYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLW9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWl4aW4tb2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1peGluOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IGV2ZW50SWQgbnVsbCBpbiBjYXNlIGFuIG9iamVjdCBnZXRzIHBhc3NlZCBhcyB0aGUgbmFtZSAobXVsdGlwbGUgaWRzKVxuICAgICAqL1xuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWxheSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGV2ZW50SWRPYmplY3QgPSB0eXBlb2YgZXZlbnRJZCA9PT0gJ29iamVjdCcsXG4gICAgICAgICAgICBuYW1lT2JqZWN0ICAgID0gdHlwZW9mIG5hbWUgICAgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgb25jZSAgICAgICAgICA9IGZhbHNlLFxuICAgICAgICAgICAgb3B0c1R5cGUgICAgICA9IHR5cGVvZiBvcHRzLFxuICAgICAgICAgICAgbGlzdGVuZXIsIGV4aXN0aW5nLCBldmVudENvbmZpZztcblxuICAgICAgICAvKlxuICAgICAgICAgKiBsZXQgdXMgc3VwcG9ydCB0aGUgZm9sbG93aW5nIGZvcm1hdCB0b286XG4gICAgICAgICAqXG4gICAgICAgICAqIGN1cnJlbnRXb3JrZXIub24oJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgICAgICogICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpXG4gICAgICAgICAqIH0sIG1lLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZXZlbnRJZE9iamVjdCAmJiBvcHRzVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZlbnRJZC5mbiA9IG9wdHM7XG4gICAgICAgICAgICBvcHRzICAgICA9IGV2ZW50SWQ7XG4gICAgICAgICAgICBvcHRzVHlwZSA9ICdvYmplY3QnO1xuICAgICAgICAgICAgZXZlbnRJZCAgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdkZWxheScpKSB7XG4gICAgICAgICAgICAgICAgZGVsYXkgPSBuYW1lLmRlbGF5O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLmRlbGF5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdvbmNlJykpIHtcbiAgICAgICAgICAgICAgICBvbmNlID0gbmFtZS5vbmNlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLm9uY2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ29yZGVyJykpIHtcbiAgICAgICAgICAgICAgICBvcmRlciA9IG5hbWUub3JkZXI7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUub3JkZXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobmFtZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIoa2V5LCB7ZGVsYXksIG9uY2UsIG9yZGVyLCBzY29wZSwgLi4udmFsdWV9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwge2RlbGF5LCBmbjogdmFsdWUsIG9uY2UsIG9yZGVyLCBzY29wZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChvcHRzVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGRlbGF5ICAgID0gZGVsYXkgICB8fCBvcHRzLmRlbGF5O1xuICAgICAgICAgICAgZXZlbnRJZCAgPSBldmVudElkIHx8IG9wdHMuZXZlbnRJZDtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cy5mbjtcbiAgICAgICAgICAgIG9uY2UgICAgID0gb25jZSAgICB8fCBvcHRzLm9uY2U7XG4gICAgICAgICAgICBvcmRlciAgICA9IG9yZGVyICAgfHwgb3B0cy5vcmRlcjtcbiAgICAgICAgICAgIHNjb3BlICAgID0gc2NvcGUgICB8fCBvcHRzLnNjb3BlXG4gICAgICAgIH0gZWxzZSBpZiAob3B0c1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0c1xuICAgICAgICB9IGVsc2UgaWYgKG9wdHNUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzIC8vIFZDIGhvb2ssIGNhbiBnZXQgcGFyc2VkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaW4gY2FzZSB0aGUgdmlldyB1c2VzIHRoZSBwYXJlbnQgVkNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmFtZU9iamVjdCkge1xuICAgICAgICAgICAgZXZlbnRDb25maWcgPSB7Zm46IGxpc3RlbmVyLCBpZDogZXZlbnRJZCB8fCBOZW8uZ2V0SWQoJ2V2ZW50Jyl9O1xuXG4gICAgICAgICAgICBpZiAoZGF0YSkgICAgICB7ZXZlbnRDb25maWcuZGF0YSAgID0gZGF0YX1cbiAgICAgICAgICAgIGlmIChkZWxheSA+IDApIHtldmVudENvbmZpZy5kZWxheSAgPSBkZWxheX1cbiAgICAgICAgICAgIGlmIChvbmNlKSAgICAgIHtldmVudENvbmZpZy5vbmNlICAgPSBvbmNlfVxuICAgICAgICAgICAgaWYgKHNjb3BlKSAgICAge2V2ZW50Q29uZmlnLnNjb3BlICA9IHNjb3BlfVxuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcgPSBtZS5saXN0ZW5lcnM/LltuYW1lXSkge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nLmZvckVhY2goY2ZnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNmZy5pZCA9PT0gZXZlbnRJZCB8fCAoY2ZnLmZuID09PSBsaXN0ZW5lciAmJiBjZmcuc2NvcGUgPT09IHNjb3BlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRHVwbGljYXRlIGV2ZW50IGhhbmRsZXIgYXR0YWNoZWQ6JywgbmFtZSwgbWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLnNwbGljZShvcmRlciwgMCwgZXZlbnRDb25maWcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcudW5zaGlmdChldmVudENvbmZpZylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5wdXNoKGV2ZW50Q29uZmlnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUubGlzdGVuZXJzW25hbWVdID0gW2V2ZW50Q29uZmlnXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbCB0aGUgcGFzc2VkIGZ1bmN0aW9uLCBvciBhIGZ1bmN0aW9uIGJ5ICpuYW1lKiB3aGljaCBleGlzdHMgaW4gdGhlIHBhc3NlZCBzY29wZSdzXG4gICAgICogb3IgdGhpcyBjb21wb25lbnQncyBvd25lcnNoaXAgY2hhaW4uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGZuIEEgZnVuY3Rpb24sIG9yIHRoZSBuYW1lIG9mIGEgZnVuY3Rpb24gdG8gZmluZCBpbiB0aGUgcGFzc2VkIHNjb3BlIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGUgICAgICAgVGhlIHNjb3BlIHRvIGZpbmQgdGhlIGZ1bmN0aW9uIGluIGlmIGl0IGlzIHNwZWNpZmllZCBhcyBhIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcmdzICAgICAgICAgQXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIGNhbGxiYWNrKGZuLCBzY29wZT10aGlzLCBhcmdzKSB7XG4gICAgICAgIGlmIChmbikge1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHJlc29sdmVDYWxsYmFjayhmbiwgc2NvcGUpO1xuICAgICAgICAgICAgaGFuZGxlci5mbi5hcHBseShoYW5kbGVyLnNjb3BlLCBhcmdzKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaGVscGVyIG1ldGhvZCBmb3IgZXZlbnRzIHdoaWNoIHVzZSB0aGUgZGVsYXkgb3B0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNiXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheVxuICAgICAqL1xuICAgIGRlbGF5ZWRDYWxsYmFjayhjYiwgYXJncywgZGVsYXkpIHtcbiAgICAgICAgdGhpcy50aW1lb3V0KGRlbGF5KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNiLmZuLmFwcGx5KGNiLnNjb3BlLCBhcmdzKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgZmlyZShuYW1lKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyAgICAgID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzLFxuICAgICAgICAgICAgZGVsYXksIGhhbmRsZXIsIGhhbmRsZXJzLCBpLCBsZW47XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIGhhbmRsZXJzID0gWy4uLmxpc3RlbmVyc1tuYW1lXV07XG4gICAgICAgICAgICBsZW4gICAgICA9IGhhbmRsZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGhhbmRsZXJzW2ldO1xuICAgICAgICAgICAgICAgIGRlbGF5ICAgPSBoYW5kbGVyLmRlbGF5O1xuXG4gICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBmdW5jdGlvbiBuYW1lIG9uIHRoZSBzY29wZSAob3IgbWUpLCBvciwgaWYgaXQgc3RhcnRzIHdpdGggJ3VwLidcbiAgICAgICAgICAgICAgICAvLyBsb29rIGluIHRoZSBvd25lcnNoaXAgaGllcmFyY2h5IGZyb20gbWUuXG4gICAgICAgICAgICAgICAgY29uc3QgY2IgPSByZXNvbHZlQ2FsbGJhY2soaGFuZGxlci5mbiwgaGFuZGxlci5zY29wZSB8fCBtZSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGxpc3RlbmVyIGlmIHRoZSBzY29wZSBubyBsb25nZXIgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKGNiLnNjb3BlICYmICFjYi5zY29wZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobGlzdGVuZXJzW25hbWVdLCBoYW5kbGVyKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWUuc3VzcGVuZEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0IGV2ZW50IGZvcm1hdC4gSW5qZWN0IGZpcmVyIHJlZmVyZW5jZSBpbiBhcyAnc291cmNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIE5lby5pc09iamVjdChhcmdzWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0uc291cmNlID0gbWUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBsaXN0ZW5lciBpZiBpdCBoYXMgdGhlIG9uY2UgZmxhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5vbmNlICYmIE5lb0FycmF5LnJlbW92ZShsaXN0ZW5lcnNbbmFtZV0sIGhhbmRsZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKGRlbGF5KSAmJiBkZWxheSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5kZWxheWVkQ2FsbGJhY2soY2IsIGhhbmRsZXIuZGF0YSA/IGFyZ3MuY29uY2F0KGhhbmRsZXIuZGF0YSkgOiBhcmdzLCBkZWxheSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IuZm4uYXBwbHkoY2Iuc2NvcGUsIGhhbmRsZXIuZGF0YSA/IGFyZ3MuY29uY2F0KGhhbmRsZXIuZGF0YSkgOiBhcmdzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGluaXRPYnNlcnZhYmxlKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcHJvdG8gPSBtZS5fX3Byb3RvX18sXG4gICAgICAgICAgICBjdG9yICA9IHByb3RvLmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgbGlzdGVuZXJzO1xuXG4gICAgICAgIGlmIChjb25maWcubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBtZS5saXN0ZW5lcnMgPSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5saXN0ZW5lcnNcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycztcblxuICAgICAgICBtZS5saXN0ZW5lcnMgPSB7fTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSB7Li4ubGlzdGVuZXJzfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHByb3RvPy5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICBjdG9yID0gcHJvdG8uY29uc3RydWN0b3I7XG5cbiAgICAgICAgICAgIGlmIChjdG9yLm9ic2VydmFibGUgJiYgIWN0b3IubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyICAgOiBtZS5hZGRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb24gICAgICAgICAgICA6IG1lLm9uLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxuICAgICAqL1xuICAgIG9uKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGVyZSBhcmUgZGlmZmVyZW50IHN5bnRheCdzIGhvdyB5b3UgY2FuIHVzZSB0aGlzIG1ldGhvZC5cbiAgICAgKiBVc2luZyB0aGUgZXZlbnRJZDpcbiAgICAgKiBgYGBcbiAgICAgKiB0aGlzLnJlbW92ZUxpc3RlbmVyKCdjaGFuZ2UnLCAnbmVvLWV2ZW50LTcnKTtcbiAgICAgKiBgYGBcbiAgICAgKiBQYXNzaW5nIHRoZSBoYW5kbGVyIG1ldGhvZDpcbiAgICAgKiBgYGBcbiAgICAgKiB0aGlzLnJlbW92ZUxpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlLCB0aGlzKTtcbiAgICAgKiBgYGBcbiAgICAgKiBQYXNzaW5nIGFuIG9iamVjdDpcbiAgICAgKiBgYGBcbiAgICAgKiBtZS5maWVsZC51bih7XG4gICAgICogICAgIGNoYW5nZSAgICAgICAgICAgICAgICAgICAgOiBtZS5vbkZpZWxkQ2hhbmdlLFxuICAgICAqICAgICBjaGFuZ2VDbGVhclRvT3JpZ2luYWxWYWx1ZTogbWUub25GaWVsZENoYW5nZSxcbiAgICAgKiAgICAgc2NvcGUgICAgICAgICAgICAgICAgICAgICA6IG1lXG4gICAgICogfSk7XG4gICAgICogYGBgXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IFtldmVudElkXVxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gW3Njb3BlXVxuICAgICAqL1xuICAgIHJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50SWQsIHNjb3BlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpLCBsZW4sIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIG1hdGNoO1xuXG4gICAgICAgIGlmIChOZW8uaXNGdW5jdGlvbihldmVudElkKSkge1xuICAgICAgICAgICAgbWUucmVtb3ZlTGlzdGVuZXIoe1tuYW1lXTogZXZlbnRJZCwgc2NvcGV9KTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5pc09iamVjdChuYW1lKSkge1xuICAgICAgICAgICAgaWYgKG5hbWUuc2NvcGUpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVyc1trZXldIHx8IFtdO1xuICAgICAgICAgICAgICAgIGkgICAgICAgICA9IDA7XG4gICAgICAgICAgICAgICAgbGVuICAgICAgID0gbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4ubmFtZSA9PT0gKE5lby5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlLm5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5zY29wZSAgID09PSBzY29wZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzU3RyaW5nKGV2ZW50SWQpKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgICAgICBtYXRjaCAgICAgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGV2ZW50Q29uZmlnLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRDb25maWcuaWQgPT09IGV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKG1hdGNoLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlQWxsTGlzdGVuZXJzOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gc3VzcGVuZExpc3RlbmVyczogZnVuY3Rpb24ocXVldWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyByZXN1bWVMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIHJlbW92ZUxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqL1xuICAgIHVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKE9ic2VydmFibGUpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XG4gICAgICogQG1lbWJlciB7UmVnRXhwfSBkZWNhbWVsUmVnRXg9LyhbYS16XSkoW0EtWl0pL2dcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBkZWNhbWVsUmVnRXggPSAvKFthLXpdKShbQS1aXSkvZ1xuXG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5VdGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5VdGlsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb3JlLXV0aWwnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdmFsdWVzXG4gICAgICovXG4gICAgc3RhdGljIGJpbmRNZXRob2RzKHNjb3BlLCB2YWx1ZXMpIHtcbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgc2NvcGVbdmFsdWVdID0gc2NvcGVbdmFsdWVdLmJpbmQoc2NvcGUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhIHN0eWxlcyBzdHJpbmcgaW50byBhIHN0eWxlcyBvYmplY3QgdXNpbmcgY2FtZWxjYXNlIHN5bnRheFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIHN0eWxlcyBzdHJpbmcgdG8gcGFyc2VcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgY2FtZWxjYXNlIHN0eWxlcyBvYmplY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVPYmplY3Qoc3RyaW5nKSB7XG4gICAgICAgIGxldCBwYXJ0cztcblxuICAgICAgICAvLyBzcGxpdCgnOycpIGRvZXMgZmV0Y2ggc2VtaWNvbG9ucyBpbnNpZGUgYnJhY2tldHNcbiAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogXCJ1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwuLi5cblxuICAgICAgICAvLyBUT0RPOiBDYWNoZSBhbGwgcmVnZXhcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgvOyg/PVteXFwpXSooPzpcXCh8JCkpL2cpLnJlZHVjZSgob2JqLCBlbCkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBzcGxpdCBieSB0aGUgZmlyc3QgY29sb24gb25seVxuICAgICAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vZXhhbXBsZS5jb20vaW1hZ2UucG5nJylcbiAgICAgICAgICAgIHBhcnRzID0gZWwuc3BsaXQoKC86KC4rKS8pKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh4KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IG51bSA/IG51bSA6IHgudHJpbSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzWzBdICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvLShbYS16XSkvZywgKHN0ciwgbGV0dGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgb2JqW3BhcnRzWzBdXSA9IHBhcnRzWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIH0sIHt9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3R5bGVzIG9iamVjdCB3aGljaCBjYW4gdXNlIGNhbWVsY2FzZSBzeW50YXggaW50byBhIHN0eWxlcyBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIFRoZSBzdHlsZXMgb2JqZWN0XG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0eWxlcyBzdHJpbmcgKERPTSByZWFkeSlcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBsZXQgc3R5bGUgPSAnJztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhzdHlsZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBVdGlsLmRlY2FtZWwoa2V5KSArICc6JyArIHZhbHVlICsgJzsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdHlsZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYWxsIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIG9mIGEgc3RyaW5nIGludG8gLWxvd2VyY2FzZS5cbiAgICAgKiBEb2VzIG5vdCB0b3VjaCBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSBpbnB1dCBjb250YWluaW5nIHVwcGVyY2FzZSBjaGFyYWN0ZXJzXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxvd2VyY2FzZSBvdXRwdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjYW1lbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShVdGlsLmRlY2FtZWxSZWdFeCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGVtcHR5IEFycmF5LCBPYmplY3Qgb3IgU3RyaW5nXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgbnVtYmVyLiBSZXR1cm5zIGZhbHNlIGZvciBub24tZmluaXRlIG51bWJlcnNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPy5jb25zdHJ1Y3Rvcj8ubmFtZSA9PT0gJ09iamVjdCcgfHwgZmFsc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG5lbyBkYXRhIHJlY29yZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc1JlY29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU/LmNvbnN0cnVjdG9yPy5uYW1lID09PSAnUmVjb3JkJyB8fCBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW55IGl0ZXJhYmxlIChzdHJpbmdzLCBudW1lcmljIGluZGljZXMgYW5kIGEgbGVuZ3RoIHByb3BlcnR5KSBpbnRvIGEgdHJ1ZSBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gaXRlcmFibGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIHN0YXJ0IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmQ9aXRlcmFibGUubGVuZ3RoXSBlbmQgaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIHRvQXJyYXkoaXRlcmFibGUsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IGxlbjtcblxuICAgICAgICBpZiAoIWl0ZXJhYmxlIHx8ICEobGVuID0gaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlLnNwbGl0KCcnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhYmxlLCBzdGFydCB8fCAwLCBlbmQgfHwgbGVuKVxuICAgIH1cbn1cblxuVXRpbCA9IE5lby5zZXR1cENsYXNzKFV0aWwpO1xuXG4vLyBhbGlhc2VzXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgYmluZE1ldGhvZHMgICAgICA6ICdiaW5kTWV0aG9kcycsXG4gICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgIGRlY2FtZWwgICAgICAgICAgOiAnZGVjYW1lbCcsXG4gICAgaXNBcnJheSAgICAgICAgICA6ICdpc0FycmF5JyxcbiAgICBpc0Jvb2xlYW4gICAgICAgIDogJ2lzQm9vbGVhbicsXG4gICAgaXNEZWZpbmVkICAgICAgICA6ICdpc0RlZmluZWQnLFxuICAgIGlzRW1wdHkgICAgICAgICAgOiAnaXNFbXB0eScsXG4gICAgaXNGdW5jdGlvbiAgICAgICA6ICdpc0Z1bmN0aW9uJyxcbiAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcbiAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcbiAgICBpc1JlY29yZCAgICAgICAgIDogJ2lzUmVjb3JkJyxcbiAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcbiAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXG59LCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDtcbiIsImltcG9ydCBCYXNlICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBDb21wYXJlICAgICBmcm9tICcuL0NvbXBhcmUubWpzJztcbmltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgZnJvbSAnLi9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgZnJvbSAnLi9VdGlsLm1qcyc7XG5cbmV4cG9ydCB7QmFzZSwgQ29tcGFyZSwgSWRHZW5lcmF0b3IsIE9ic2VydmFibGUsIFV0aWx9O1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBEZWx0YVVwZGF0ZXMgZnJvbSAnLi9taXhpbi9EZWx0YVVwZGF0ZXMubWpzJztcbmltcG9ydCBEb21VdGlscyAgICAgZnJvbSAnLi9Eb21VdGlscy5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBSZWN0YW5nbGUgICAgZnJvbSAnLi4vdXRpbC9SZWN0YW5nbGUubWpzJztcbmltcG9ydCBTdHJpbmdVdGlsICAgZnJvbSAnLi4vdXRpbC9TdHJpbmcubWpzJztcblxuY29uc3RcbiAgICBkb1ByZXZlbnREZWZhdWx0ID0gZSA9PiBlLnByZXZlbnREZWZhdWx0KCksXG4gICAgZmlsdGVyVGFiYmFibGUgICA9IGUgPT4gIWUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZW8tZm9jdXMtdHJhcCcpICYmIERvbVV0aWxzLmlzVGFiYmFibGUoZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQLFxuICAgIGxlbmd0aFJFICAgICAgICAgPSAvXlxcZCtcXHcrJC8sXG5cbiAgICBjYXB0dXJlUGFzc2l2ZSA9IHtcbiAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBmb250U2l6ZVByb3BzID0gW1xuICAgICAgICAnZm9udC1mYW1pbHknLFxuICAgICAgICAnZm9udC1rZXJuaW5nJyxcbiAgICAgICAgJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdmb250LXNpemUtYWRqdXN0JyxcbiAgICAgICAgJ2ZvbnQtc3RyZXRjaCcsXG4gICAgICAgICdmb250LXN0eWxlJyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0JyxcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nJyxcbiAgICAgICAgJ2xpbmUtaGVpZ2h0JyxcbiAgICAgICAgJ3RleHQtZGVjb3JhdGlvbicsXG4gICAgICAgICd0ZXh0LXRyYW5zZm9ybScsXG4gICAgICAgICd3b3JkLWJyZWFrJ1xuICAgIF0sXG5cbiAgICBtb2RpZmllcktleXMgPSB7XG4gICAgICAgIFNoaWZ0ICAgOiAxLFxuICAgICAgICBBbHQgICAgIDogMSxcbiAgICAgICAgTWV0YSAgICA6IDEsXG4gICAgICAgIENvbnRyb2wgOiAxXG4gICAgfTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1haW4uRG9tQWNjZXNzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIERvbUFjY2VzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uRG9tQWNjZXNzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5Eb21BY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudERlbHRhcz0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50RGVsdGFzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudERlbHRhc1BlcjI1MG1zPTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY291bnREZWx0YXNQZXIyNTBtczogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnRVcGRhdGVzPTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY291bnRVcGRhdGVzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IG1peGlucz1bRGVsdGFVcGRhdGVzLCBPYnNlcnZhYmxlXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICBEZWx0YVVwZGF0ZXMsXG4gICAgICAgICAgICBPYnNlcnZhYmxlXG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdhZGRTY3JpcHQnLFxuICAgICAgICAgICAgICAgICdhbGlnbicsXG4gICAgICAgICAgICAgICAgJ2FwcGx5Qm9keUNscycsXG4gICAgICAgICAgICAgICAgJ2JsdXInLFxuICAgICAgICAgICAgICAgICdleGVjQ29tbWFuZCcsXG4gICAgICAgICAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgICAgICAgICAnZ2V0QXR0cmlidXRlcycsXG4gICAgICAgICAgICAgICAgJ2dldEJvdW5kaW5nQ2xpZW50UmVjdCcsXG4gICAgICAgICAgICAgICAgJ2dldFNjcm9sbGluZ0RpbWVuc2lvbnMnLFxuICAgICAgICAgICAgICAgICdtZWFzdXJlJyxcbiAgICAgICAgICAgICAgICAnbW9uaXRvckF1dG9Hcm93JyxcbiAgICAgICAgICAgICAgICAnbW9uaXRvckF1dG9Hcm93SGFuZGxlcicsXG4gICAgICAgICAgICAgICAgJ25hdmlnYXRlJyxcbiAgICAgICAgICAgICAgICAnbmF2aWdhdGVUbycsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbEJ5JyxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICdzY3JvbGxUbycsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFRvVGFibGVSb3cnLFxuICAgICAgICAgICAgICAgICdzZWxlY3ROb2RlJyxcbiAgICAgICAgICAgICAgICAnc2V0Qm9keUNscycsXG4gICAgICAgICAgICAgICAgJ3NldFN0eWxlJyxcbiAgICAgICAgICAgICAgICAnc3luY01vZGFsTWFzaycsXG4gICAgICAgICAgICAgICAgJ3RyYXBGb2N1cycsXG4gICAgICAgICAgICAgICAgJ3dpbmRvd1Njcm9sbFRvJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyQ291bnREZWx0YXNfPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlckNvdW50RGVsdGFzXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWb2lkIGF0dHJpYnV0ZXMgaW5zaWRlIGh0bWwgdGFnc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdm9pZEF0dHJpYnV0ZXNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdm9pZEF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCdcbiAgICAgICAgXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge051bWJlcn0gbG9nRGVsdGFzSW50ZXJ2YWxJZD0wXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGxvZ0RlbHRhc0ludGVydmFsSWQgPSAwXG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0IG1vZGFsTWFzaygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLl9tb2RhbE1hc2spIHtcbiAgICAgICAgICAgIG1lLl9tb2RhbE1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lLl9tb2RhbE1hc2suY2xhc3NOYW1lID0gJ25lby1kaWFsb2ctbW9kYWwtbWFzayc7XG4gICAgICAgICAgICBtZS5fbW9kYWxNYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvUHJldmVudERlZmF1bHQsIHtjYXB0dXJlIDogdHJ1ZX0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWUuX21vZGFsTWFza1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcucmVuZGVyQ291bnREZWx0YXMpIHtcbiAgICAgICAgICAgIG1lLnJlbmRlckNvdW50RGVsdGFzID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgbWUuaW5pdEdsb2JhbExpc3RlbmVycygpO1xuXG4gICAgICAgIC8vIFNldCB1cCBvdXIgYWxpZ25pbmcgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhpbmdzIGNoYW5nZSB3aGljaCBtYXlcbiAgICAgICAgLy8gbWVhbiB0aGF0IGFsaWdubWVudHMgbmVlZCB0byBiZSB1cGRhdGVkLlxuICAgICAgICBtZS5zeW5jQWxpZ25zID0gbWUuc3luY0FsaWducy5iaW5kKG1lKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhbGlnblNwZWNcbiAgICAgKi9cbiAgICBhZGRBbGlnbmVkKGFsaWduU3BlYykge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgbWUgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2lkfSAgICAgICAgICAgICAgICAgPSBhbGlnblNwZWMsXG4gICAgICAgICAgICBhbGlnbnMgICAgICAgICAgICAgICA9IG1lLl9hbGlnbnMgfHwgKG1lLl9hbGlnbnMgPSBuZXcgTWFwKCkpLFxuICAgICAgICAgICAgcmVzaXplT2JzZXJ2ZXIgICAgICAgPSBtZS5fYWxpZ25SZXNpemVPYnNlcnZlciB8fCAobWUuX2FsaWduUmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIobWUuc3luY0FsaWducykpLFxuICAgICAgICAgICAge2NvbnN0cmFpblRvRWxlbWVudH0gPSBhbGlnblNwZWM7XG5cbiAgICAgICAgLy8gU2V0IHVwIGxpc3RlbmVycyB3aGljaCBtb25pdG9yIGZvciBjaGFuZ2VzXG4gICAgICAgIGlmICghYWxpZ25zLmhhcyhpZCkpIHtcbiAgICAgICAgICAgIC8vIFJlYWxpZ24gd2hlbiB0YXJnZXQncyBsYXlvdXQtY29udHJvbGxpbmcgZWxlbWVudCBjaGFuZ2VzIHNpemVcbiAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoYWxpZ25TcGVjLm9mZnNldFBhcmVudCk7XG5cbiAgICAgICAgICAgIC8vIFJlYWxpZ24gd2hlbiBhbGlnbiB0byB0YXJnZXQgY2hhbmdlcyBzaXplXG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGFsaWduU3BlYy50YXJnZXRFbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gUmVhbGlnbiB3aGVuIGNvbnN0cmFpbmluZyBlbGVtZW50IGNoYW5nZXMgc2l6ZVxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpblRvRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoY29uc3RyYWluVG9FbGVtZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZS5oYXNEb2N1bWVudFNjcm9sbExpc3RlbmVyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBtZS5zeW5jQWxpZ25zLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuaGFzRG9jdW1lbnRTY3JvbGxMaXN0ZW5lciA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWUuZG9jdW1lbnRNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBtZS5kb2N1bWVudE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtZS5vbkRvY3VtZW50TXV0YXRpb24uYmluZChtZSkpO1xuXG4gICAgICAgICAgICBtZS5kb2N1bWVudE11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWUgIDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFsaWducy5zZXQoaWQsIGFsaWduU3BlYylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGF0YS5hc3luY1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RhdGEuZGVmZXI9ZmFsc2VdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLnNyYz10cnVlXVxuICAgICAqL1xuICAgIGFkZFNjcmlwdChkYXRhKSB7XG4gICAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoJ2FzeW5jJykpIHtcbiAgICAgICAgICAgIGRhdGEuYXN5bmMgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuYXNzaWduKHNjcmlwdCwgZGF0YSk7XG5cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSByZW5kZXJDb3VudERlbHRhcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJlbmRlckNvdW50RGVsdGFzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtsb2dEZWx0YXNJbnRlcnZhbElkfSA9IG1lLFxuICAgICAgICAgICAgbm9kZTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChsb2dEZWx0YXNJbnRlcnZhbElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbWUubG9nRGVsdGFzSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZW8tZGVsdGEtdXBkYXRlcycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IFN0cmluZyhtZS5jb3VudERlbHRhc1BlcjI1MG1zICogNClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLmNvdW50RGVsdGFzUGVyMjUwbXMgPSAwXG4gICAgICAgICAgICAgICAgfSwgMjUwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nRGVsdGFzSW50ZXJ2YWxJZCAmJiBjbGVhckludGVydmFsKGxvZ0RlbHRhc0ludGVydmFsSWQpO1xuICAgICAgICAgICAgbWUubG9nRGVsdGFzSW50ZXJ2YWwgPSAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGFsaWduKGRhdGEpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2NvbnN0cmFpblRvfSA9IGRhdGEsXG4gICAgICAgICAgICBzdWJqZWN0ICAgICAgID0gZGF0YS5zdWJqZWN0ID0gbWUuZ2V0RWxlbWVudChkYXRhLmlkKSxcbiAgICAgICAgICAgIHtzdHlsZX0gICAgICAgPSBzdWJqZWN0LFxuICAgICAgICAgICAgYWxpZ24gICAgICAgICA9IHsuLi5kYXRhfSxcbiAgICAgICAgICAgIGxhc3RBbGlnbiAgICAgPSBtZS5fYWxpZ25zPy5nZXQoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKGxhc3RBbGlnbikge1xuICAgICAgICAgICAgc3ViamVjdC5jbGFzc0xpc3QucmVtb3ZlKGBuZW8tYWxpZ25lZC0ke2xhc3RBbGlnbi5yZXN1bHQucG9zaXRpb259YClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbGVhc2UgYW55IGNvbnN0cmFpblRvIG9yIG1hdGNoU2l6ZSBzaXppbmcgd2hpY2ggbWF5IGhhdmUgYmVlbiBpbXBvc2VkXG4gICAgICAgIC8vIGJ5IGEgcHJldmlvdXMgYWxpZ24gY2FsbC5cbiAgICAgICAgbWUucmVzZXREaW1lbnNpb25zKGFsaWduKTtcblxuICAgICAgICAvLyBUaGUgUmVjdGFuZ2xlJ3MgYWxpZ24gc3BlYyB0YXJnZXQgYW5kIGNvbnN0cmFpblRvIG11c3QgYmUgUmVjdGFuZ2xlc1xuICAgICAgICBhbGlnbi50YXJnZXQgPSBtZS5nZXRDbGlwcGVkUmVjdCh7aWQgOiBkYXRhLnRhcmdldEVsZW1lbnQgPSBtZS5nZXRFbGVtZW50T3JCb2R5KGRhdGEudGFyZ2V0KX0pO1xuXG4gICAgICAgIGlmICghYWxpZ24udGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIENvbXBvbmVudCB3aXRoIGlkIGRhdGEuaWQgdG8gaGlkZGVuIDogdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIE5lby53b3JrZXIuQXBwLnNldENvbmZpZ3Moe2lkOiBkYXRhLmlkLCBoaWRkZW46IHRydWV9KVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5vZmZzZXRQYXJlbnQgPSBkYXRhLnRhcmdldEVsZW1lbnQub2Zmc2V0UGFyZW50O1xuXG4gICAgICAgIGlmIChjb25zdHJhaW5Ubykge1xuICAgICAgICAgICAgYWxpZ24uY29uc3RyYWluVG8gPSBtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe2lkIDogZGF0YS5jb25zdHJhaW5Ub0VsZW1lbnQgPSBtZS5nZXRFbGVtZW50T3JCb2R5KGNvbnN0cmFpblRvKX0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgYW4gYWxpZ25lZCBjbG9uZSBvZiBteVJlY3QgYWxpZ25lZCBhY2NvcmRpbmcgdG8gdGhlIGFsaWduIG9iamVjdFxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgbXlSZWN0ID0gbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGRhdGEpLFxuICAgICAgICAgICAgcmVzdWx0ID0gZGF0YS5yZXN1bHQgPSBteVJlY3QuYWxpZ25UbyhhbGlnbik7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgdG9wICAgICAgIDogMCxcbiAgICAgICAgICAgIGxlZnQgICAgICA6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm0gOiBgdHJhbnNsYXRlKCR7cmVzdWx0Lnh9cHgsJHtyZXN1bHQueX1weClgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQud2lkdGggIT09IG15UmVjdC53aWR0aCkge1xuICAgICAgICAgICAgc3R5bGUud2lkdGggPSBgJHtyZXN1bHQud2lkdGh9cHhgXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmhlaWdodCAhPT0gbXlSZWN0LmhlaWdodCkge1xuICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7cmVzdWx0LmhlaWdodH1weGBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBsYWNlIGJveCBzaGFkb3cgYXQgY29ycmVjdCBlZGdlXG4gICAgICAgIHN1YmplY3QuY2xhc3NMaXN0LmFkZChgbmVvLWFsaWduZWQtJHtyZXN1bHQucG9zaXRpb259YCk7XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgYW4gYWxpZ25tZW50IHRvIGJlIGtlcHQgaW4gc3luY1xuICAgICAgICBtZS5hZGRBbGlnbmVkKGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLmNsc1xuICAgICAqL1xuICAgIGFwcGx5Qm9keUNscyhkYXRhKSB7XG4gICAgICAgIGxldCBjbHMgPSBkYXRhLmNscyB8fCBbXTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKC4uLmNscylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBibHVyKCkgb24gYSBub2RlIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIGJsdXIoZGF0YSkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCk/LmJsdXIoKTtcbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmNvbW1hbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZXhlY0NvbW1hbmQoZGF0YSkge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChkYXRhLmNvbW1hbmQpO1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGZvY3VzKCkgb24gYSBub2RlIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEuY2hpbGRyZW5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXG4gICAgICovXG4gICAgZm9jdXMoe2NoaWxkcmVuLCBpZH0pIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoaWQpO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAvLyBUaGUgY2hpbGRyZW4gcHJvcGVydHkgbWVhbnMgZm9jdXMgaW5uZXIgZWxlbWVudHMgaWYgcG9zc2libGUuXG4gICAgICAgICAgICBpZiAoIURvbVV0aWxzLmlzRm9jdXNhYmxlKG5vZGUpICYmIGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgLy8gcXVlcnkgZm9yIHRoZSBmaXJzdCBmb2N1c2FibGUgZGVzY2VuZGVudFxuICAgICAgICAgICAgICAgIG5vZGUgPSBEb21VdGlscy5xdWVyeShub2RlLCBEb21VdGlscy5pc0ZvY3VzYWJsZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLmZvY3VzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKG5vZGUuc2VsZWN0aW9uU3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2VsZWN0aW9uU3RhcnQgPSBub2RlLnNlbGVjdGlvbkVuZCA9IG5vZGUudmFsdWUubGVuZ3RoXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGVzIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgICAgICAgIGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xTdHJpbmdbXX0gZGF0YS5hdHRyaWJ1dGVzIGVpdGhlciBhbiBhdHRyaWJ1dGUgb3IgYW4gYXJyYXkgb2YgYXR0cmlidXRlc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBkYXRhLmlkIGVpdGhlciBhbiBpZCBvciBhbiBhcnJheSBvZiBpZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBJbiBjYXNlIGlkIGlzIGFuIGFycmF5LCBhbiBhcnJheSBvZiBhdHRyaWJ1dGUgb2JqZWN0cyBpcyByZXR1cm5lZCwgb3RoZXJ3aXNlIGFuIG9iamVjdFxuICAgICAqL1xuICAgIGdldEF0dHJpYnV0ZXMoe2F0dHJpYnV0ZXMsIGlkfSkge1xuICAgICAgICBsZXQgcmV0dXJuRGF0YTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpZCkpIHtcbiAgICAgICAgICAgIHJldHVybkRhdGEgPSBbXTtcblxuICAgICAgICAgICAgaWQuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuZ2V0QXR0cmlidXRlcyh7YXR0cmlidXRlcywgaWR9KSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudE9yQm9keShpZCk7XG5cbiAgICAgICAgICAgIHJldHVybkRhdGEgPSB7fTtcblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IFthdHRyaWJ1dGVzXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhW2F0dHJpYnV0ZV0gPSBub2RlW2F0dHJpYnV0ZV1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgZm9yIGEgZ2l2ZW4gZG9tIG5vZGUgaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBkYXRhLmlkIGVpdGhlciBhbiBpZCBvciBhbiBhcnJheSBvZiBpZHNcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdHxET01SZWN0W119IEluIGNhc2UgaWQgaXMgYW4gYXJyYXksIGFuIGFycmF5IG9mIERvbVJlY3RzIGlzIHJldHVybmVkLCBvdGhlcndpc2UgYW4gRG9tUmVjdCBvYmplY3RcbiAgICAgKi9cbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcmV0dXJuRGF0YTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaWQubWFwKGlkID0+IG1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7aWR9KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gbWUuZ2V0RWxlbWVudE9yQm9keShkYXRhLm5vZGVUeXBlID8gZGF0YSA6IGRhdGEuaWQpLFxuICAgICAgICAgICAgICAgIHJlY3QgPSB7fSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aCwgbWluSGVpZ2h0LCBzdHlsZTtcblxuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJlY3QgICAgICA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgc3R5bGUgICAgID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgICAgICAgICAgbWluV2lkdGggID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWluLXdpZHRoJyk7XG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWluLWhlaWdodCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gRG9tUmVjdCBkb2VzIG5vdCBzdXBwb3J0IHNwcmVhZGluZyA9PiB7Li4uRG9tUmVjdH0gPT4ge31cbiAgICAgICAgICAgICAgICByZXR1cm5EYXRhID0gUmVjdGFuZ2xlLmNsb25lKHJlY3QpO1xuXG4gICAgICAgICAgICAgICAgLy8gTWVhc3VyZSBtaW5XaWR0aC9taW5IZWlnaHQgaW4gb3RoZXIgdW5pdHMgbGlrZSBlbS9yZW0gZXRjXG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IDBweCBpcyB3aGF0IHRoZSBET00gcmVwb3J0cyBpZiBubyBtaW5XaWR0aCBpcyBzcGVjaWZpZWRcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkbyBub3QgcmVwb3J0IGEgbWluaW11bSBpbiB0aGVzZSBjYXNlcy5cbiAgICAgICAgICAgICAgICBpZiAobGVuZ3RoUkUudGVzdChtaW5XaWR0aCkgJiYgbWluV2lkdGggIT09ICcwcHgnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkRhdGEubWluV2lkdGggPSBtZS5tZWFzdXJlKHt2YWx1ZTogbWluV2lkdGgsIGlkOiBub2RlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aFJFLnRlc3QobWluSGVpZ2h0KSAmJiBtaW5IZWlnaHQgIT09ICcwcHgnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkRhdGEubWluSGVpZ2h0ID0gbWUubWVhc3VyZSh7dmFsdWU6IG1pbkhlaWdodCwgaWQ6IG5vZGV9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhXG4gICAgICogQHJldHVybnMge05lby51dGlsLlJlY3RhbmdsZX1cbiAgICAgKi9cbiAgICBnZXRDbGlwcGVkUmVjdChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgICAgICAgICAgPSBtZS5nZXRFbGVtZW50KHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IGRhdGEuaWQgOiBkYXRhKSxcbiAgICAgICAgICAgIHtkZWZhdWx0Vmlld30gPSBub2RlLm93bmVyRG9jdW1lbnQsXG4gICAgICAgICAgICByZWN0ICAgICAgICAgID0gbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG5vZGUpO1xuXG4gICAgICAgIGZvciAobGV0IHBhcmVudEVsZW1lbnQgPSBub2RlLm9mZnNldFBhcmVudDsgcGFyZW50RWxlbWVudCAmJiByZWN0ICYmIHBhcmVudEVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUocGFyZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICAgICAgcmVjdCA9IHJlY3QuaW50ZXJzZWN0cyh0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnRFbGVtZW50KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWN0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IG5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxudWxsfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50KG5vZGVJZCkge1xuICAgICAgICBsZXQgbm9kZSA9IG5vZGVJZD8ubm9kZVR5cGUgP1xuICAgICAgICAgICAgbm9kZUlkIDogTmVvLmNvbmZpZy51c2VEb21JZHMgP1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5vZGVJZCkgOlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5lby1pZD0nJHtub2RlSWR9J11gKTtcblxuICAgICAgICByZXR1cm4gbm9kZSB8fCBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IG5vZGVJZD0nZG9jdW1lbnQuYm9keSdcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZ2V0RWxlbWVudE9yQm9keShub2RlSWQ9J2RvY3VtZW50LmJvZHknKSB7XG4gICAgICAgIGlmICghbm9kZUlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGVJZC5ub2RlVHlwZSA/IG5vZGVJZCA6IChub2RlSWQgPT09ICdib2R5JyB8fCBub2RlSWQgPT09ICdkb2N1bWVudC5ib2R5JykgPyBkb2N1bWVudC5ib2R5IDogdGhpcy5nZXRFbGVtZW50KG5vZGVJZClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fE9iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFN0cmluZ1tdfSBkYXRhLmlkXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRTY3JvbGxpbmdEaW1lbnNpb25zKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaWQubWFwKGlkID0+IG1lLmdldFNjcm9sbGluZ0RpbWVuc2lvbnMoe2lkfSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGRhdGEubm9kZVR5cGUgPyBkYXRhIDogbWUuZ2V0RWxlbWVudE9yQm9keShkYXRhLmlkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjbGllbnRIZWlnaHQ6IG5vZGU/LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgICAgICBjbGllbnRXaWR0aCA6IG5vZGU/LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodDogbm9kZT8uc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoIDogbm9kZT8uc2Nyb2xsV2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgaW5pdEdsb2JhbExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgICAgICBtZS5vbkRvY3VtZW50Qmx1ciAgICAgLmJpbmQobWUpLCBjYXB0dXJlUGFzc2l2ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAgIG1lLm9uRG9jdW1lbnRLZXlEb3duICAuYmluZChtZSksIGNhcHR1cmVQYXNzaXZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAgICAgbWUub25Eb2N1bWVudEtleVVwICAgIC5iaW5kKG1lKSwgY2FwdHVyZVBhc3NpdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtZS5vbkRvY3VtZW50TW91c2VEb3duLmJpbmQobWUpLCB7Y2FwdHVyZSA6IHRydWV9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNBbGlnblN1YmplY3QoZWwpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl9hbGlnbnM/LnZhbHVlcygpXS5zb21lKGFsaWduID0+IGFsaWduLnN1YmplY3QgPT09IGVsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY2x1ZGUgYSBzY3JpcHQgaW50byB0aGUgZG9jdW1lbnQuaGVhZFxuICAgICAqIFlvdSBjYW4gYWRkIG1vcmUgYXR0cmlidXRlcyBpZiBuZWVkZWQuIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L3NjcmlwdFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzcmNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cz17ZGVmZXI6dHJ1ZX1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRzLmFzeW5jXVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdHMuZGVmZXJdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgbG9hZFNjcmlwdChzcmMsIG9wdHM9e2RlZmVyOnRydWV9KSB7XG4gICAgICAgIGxldCBzY3JpcHQ7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNjcmlwdCwge1xuICAgICAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgICAgIG9ubG9hZCA6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgc3JjXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jbHVkZSBhIGxpbmsgaW50byB0aGUgZG9jdW1lbnQuaGVhZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBocmVmXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFzZXQ9bnVsbFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGxvYWRTdHlsZXNoZWV0KGhyZWYsIGRhdGFzZXQ9bnVsbCkge1xuICAgICAgICBsZXQgbGluaztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihsaW5rLCB7XG4gICAgICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgICAgICAgICAgb25sb2FkIDogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWwgICAgOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICAgICAgdHlwZSAgIDogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihsaW5rLmRhdGFzZXQsIGRhdGFzZXQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMge051bWJlcnxTdHJpbmd9XG4gICAgICovXG4gICAgbWVhc3VyZSh7IHZhbHVlLCBpZCB9KSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpZC5ub2RlVHlwZSA9PT0gMSA/IGlkIDogdGhpcy5nZXRFbGVtZW50KGlkKTtcblxuICAgICAgICBpZiAodmFsdWUuZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICAgICAgY29uc3QgZnJhY3Rpb24gPSBwYXJzZUZsb2F0KHZhbHVlKSAvIDEwMDtcblxuICAgICAgICAgICAgcmV0dXJuIChub2RlLm9mZnNldFBhcmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8IDApICogZnJhY3Rpb25cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBpdCdzIGFueSBvdGhlciBDU1MgdW5pdCB0aGFuIHB4LCBpdCBuZWVkcyB0byBiZSBtZWFzdXJlZCB1c2luZyB0aGUgRE9NXG4gICAgICAgIGVsc2UgaWYgKGlzTmFOKHZhbHVlKSAmJiAhdmFsdWUuZW5kc1dpdGgoJ3B4JykpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcblxuICAgICAgICAgICAgbGV0IGQgPSB0aGlzLl9tZWFzdXJpbmdEaXY7XG5cbiAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICAgIGQgPSB0aGlzLl9tZWFzdXJpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkLnN0eWxlID0gJ3Bvc2l0aW9uOmZpeGVkO3RvcDotMTAwMDBweDtsZWZ0Oi0xMDAwMHB4J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbiBjYXNlIGEgRE9NIHVwZGF0ZSBjbGVhcmVkIGl0IG91dFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkKTtcblxuICAgICAgICAgICAgLy8gU2V0IGFsbCB0aGUgZm9udC1zaXplLCBmb250LXdlaWdodCBldGMgc3R5bGUgcHJvcGVydGllcyBzbyB0aGF0XG4gICAgICAgICAgICAvLyBlbS9leC9yZW0gZXRjIHVuaXRzIHdpbGwgbWF0Y2hcbiAgICAgICAgICAgIGZvbnRTaXplUHJvcHMuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBkLnN0eWxlW3Byb3BdID0gZWxTdHlsZVtwcm9wXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZC5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGQuc3R5bGUud2lkdGggPSB2YWx1ZTtcblxuICAgICAgICAgICAgLy8gUmVhZCBiYWNrIHRoZSByZXN1bHRpbmcgY29tcHV0ZWQgcGl4ZWwgd2lkdGhcbiAgICAgICAgICAgIHZhbHVlID0gZWxTdHlsZS53aWR0aDtcblxuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0J3MgYSBudW1iZXIsIG9yIGVuZHMgd2l0aCBweCwgdXNlIHRoZSBudW1lcmljIHZhbHVlLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgb3ZlcmZsb3cgc3RhdHVzIG9mIGEgVGV4dEFyZWFGaWVsZCdzICZsdDt0ZXh0YXJlYT4gZWxlbWVudCBhbmQgdXBkYXRlcyB0aGVcbiAgICAgKiBoZWlnaHQgc28gdGhhdCB0aGVyZSBpcyBuZXZlciBhIHZlcnRpY2FsIHNjcm9sbGJhci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFzeW5jIG1vbml0b3JBdXRvR3JvdyhkYXRhKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0ID0gZGF0YS5zdWJqZWN0ID0gbWUuZ2V0RWxlbWVudChkYXRhLmlkKTtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaGVpZ2h0IG9uIGV2ZXJ5IGlucHV0IGV2ZW50IGlzIGF1dG9Hcm93IGlzIHRydXRoeS5cbiAgICAgICAgdGFyZ2V0W2RhdGEuYXV0b0dyb3cgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lciddKCdpbnB1dCcsIG1lLm1vbml0b3JBdXRvR3Jvd0hhbmRsZXIpO1xuXG4gICAgICAgIC8vIEZpeCB0aGUgaGVpZ2h0IHVwIGltbWVkaWF0ZWx5IHRvb1xuICAgICAgICBkYXRhLmF1dG9Hcm93ICYmIG1lLm1vbml0b3JBdXRvR3Jvd0hhbmRsZXIoe1xuICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fE9iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5pZF1cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbZGF0YS50YXJnZXRdXG4gICAgICovXG4gICAgbW9uaXRvckF1dG9Hcm93SGFuZGxlcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRhdGEudGFyZ2V0IHx8IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTtcblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIHsgc3R5bGUgfSAgICAgICAgICAgICAgPSB0YXJnZXQsXG4gICAgICAgICAgICAgICAgeyBzdHlsZSA6IGlucHV0U3R5bGUgfSA9IHRhcmdldC5jbG9zZXN0KCcubmVvLXRleHRhcmVhJyk7XG5cbiAgICAgICAgICAgIC8vIE1lYXN1cmUgdGhlIHNjcm9sbEhlaWdodCB3aGVuIGZvcmNlZCB0byBvdmVyZmxvdywgdGhlbiBzZXQgaGVpZ2h0IHRvIGVuY29tcGFzcyB0aGUgc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHQgPSBzdHlsZS5taW5IZWlnaHQgPSAwO1xuICAgICAgICAgICAgaW5wdXRTdHlsZS5zZXRQcm9wZXJ0eSgnLS10ZXh0ZmllbGQtaW5wdXQtaGVpZ2h0JywgYCR7dGFyZ2V0LnNjcm9sbEhlaWdodCArIDV9cHhgKTtcbiAgICAgICAgICAgIGlucHV0U3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsICcnKTtcbiAgICAgICAgICAgIHN0eWxlLmhlaWdodCA9IHN0eWxlLm1pbkhlaWdodCA9ICcnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uRG9jdW1lbnRCbHVyKCkge1xuICAgICAgICBOZW8uYWx0S2V5RG93biA9IE5lby5jb250cm9sS2V5RG93biA9IE5lby5tZXRhS2V5RG93biA9IE5lby5zaGlmdEtleURvd24gPSBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0ga2V5RXZlbnRcbiAgICAgKi9cbiAgICBvbkRvY3VtZW50S2V5RG93bihrZXlFdmVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJLZXlzW2tleUV2ZW50LmtleV0pIHtcbiAgICAgICAgICAgIC8vIGUuZy4gTmVvLmlzU2hpZnRLZXlEb3duID0gdHJ1ZSBvciBOZW8uaXNDb250cm9sS2V5RG93biA9IHRydWUuXG4gICAgICAgICAgICAvLyBTZWxlY3Rpb24gY2FuIGNvbnN1bHQgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgTmVvW2Ake1N0cmluZ1V0aWwudW5jYXBpdGFsaXplKGtleUV2ZW50LmtleSl9S2V5RG93bmBdID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBrZXlFdmVudFxuICAgICAqL1xuICAgIG9uRG9jdW1lbnRLZXlVcChrZXlFdmVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJLZXlzW2tleUV2ZW50LmtleV0pIHtcbiAgICAgICAgICAgIE5lb1tgJHtTdHJpbmdVdGlsLnVuY2FwaXRhbGl6ZShrZXlFdmVudC5rZXkpfUtleURvd25gXSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtdXRhdGlvbnNcbiAgICAgKi9cbiAgICBvbkRvY3VtZW50TXV0YXRpb24obXV0YXRpb25zKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBJZiB0aGUgbXV0YXRpb25zIGFyZSBwdXJlbHkgYWxpZ24gc3ViamVjdHMgYmVpbmcgYWRkZWQgb3IgcmVtb3ZlZCwgdGFrZSBubyBhY3Rpb24uXG4gICAgICAgIGlmICghbXV0YXRpb25zLmV2ZXJ5KCh7IHR5cGUsIGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IFsuLi5BcnJheS5mcm9tKGFkZGVkTm9kZXMpLCAuLi5BcnJheS5mcm9tKHJlbW92ZWROb2RlcyldO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzLmV2ZXJ5KGEgPT4gbWUuaXNBbGlnblN1YmplY3QoYSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgICBtZS5zeW5jQWxpZ25zKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZVxuICAgICAqL1xuICAgIG9uRG9jdW1lbnRNb3VzZURvd24oZSkge1xuICAgICAgICBsZXQgZm9jdXNDb250cm9sbGVyID0gZS50YXJnZXQ/LmNsb3Nlc3QoJ1tkYXRhLWZvY3VzXScpO1xuXG4gICAgICAgIC8vIGRhdGEtZm9jdXMgb24gYW4gZWxlbWVudCBtZWFucyByZWplY3QgbW91c2Vkb3duIGdlc3R1cmVzLCBhbmQgbW92ZSBmb2N1c1xuICAgICAgICAvLyB0byB0aGUgcmVmZXJlbmNlZCBlbGVtZW50LlxuICAgICAgICBpZiAoZm9jdXNDb250cm9sbGVyKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb2N1c0NvbnRyb2xsZXIuZGF0YXNldC5mb2N1cyk/LmZvY3VzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Eb21Db250ZW50TG9hZGVkKCkge1xuICAgICAgICBOZW8uY29uZmlnLmFwcGx5Qm9keUNscyAmJiB0aGlzLmFwcGx5Qm9keUNscyh7Y2xzOiBbJ25lby1ib2R5J119KTtcbiAgICAgICAgTmVvLmNvbmZpZy5hcHBseUZpeGVkUG9zaXRpb25Ub0h0bWxUYWcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm5vZGVJZFxuICAgICAqL1xuICAgIG9uR2V0T2Zmc2NyZWVuQ2FudmFzKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlICAgICAgPSBtZS5nZXRFbGVtZW50KGRhdGEubm9kZUlkKSxcbiAgICAgICAgICAgIG9mZnNjcmVlbiA9IG5vZGUudHJhbnNmZXJDb250cm9sVG9PZmZzY3JlZW4oKTtcblxuICAgICAgICBkYXRhLm9mZnNjcmVlbiA9IG9mZnNjcmVlbjtcblxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4sIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfSwgW29mZnNjcmVlbl0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLmF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhLmZ1bmN0aW9ucyBBbiBhcnJheSBjb250YWluaW5nIHN0cmluZ3MgYW5kL29yIG9iamVjdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLnN0eWxlc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnZub2RlSWRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25SZWFkRG9tKGRhdGEpIHtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZXMgICAgPSBkYXRhLmF0dHJpYnV0ZXMgfHwgW10sXG4gICAgICAgICAgICBmdW5jdGlvbnMgICAgID0gZGF0YS5mdW5jdGlvbnMgIHx8IFtdLFxuICAgICAgICAgICAgc3R5bGVzICAgICAgICA9IGRhdGEuc3R5bGVzICAgICB8fCBbXSxcbiAgICAgICAgICAgIHt2bm9kZUlkfSAgICAgPSBkYXRhLFxuICAgICAgICAgICAgcmV0QXR0cmlidXRlcyA9IHt9LFxuICAgICAgICAgICAgcmV0RnVuY3Rpb25zICA9IHt9LFxuICAgICAgICAgICAgcmV0U3R5bGVzICAgICA9IHt9LFxuICAgICAgICAgICAgZWxlbWVudCAgICAgICA9IHZub2RlSWQgPyB0aGlzLmdldEVsZW1lbnQodm5vZGVJZCkgOiBudWxsLFxuICAgICAgICAgICAgZm5OYW1lLCBzY29wZTtcblxuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHJldEF0dHJpYnV0ZXNba2V5XSA9IGVsZW1lbnRba2V5XVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbnMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChrZXkpKSB7XG4gICAgICAgICAgICAgICAga2V5LnBhcmFtcyAgICAgICAgID0ga2V5LnBhcmFtcyAgICAgICAgIHx8IFtdO1xuICAgICAgICAgICAgICAgIGtleS5wYXJhbUlzRG9tTm9kZSA9IGtleS5wYXJhbUlzRG9tTm9kZSB8fCBbXTtcblxuICAgICAgICAgICAgICAgIHNjb3BlID0ga2V5LnNjb3BlID8gZG9jdW1lbnRba2V5LnNjb3BlXSA6IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBrZXkucGFyYW1zLmZvckVhY2goKHBhcmFtLCBwYXJhbUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkucGFyYW1Jc0RvbU5vZGVbcGFyYW1JbmRleF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleS5wYXJhbXNbcGFyYW1JbmRleF0gPSB0aGlzLmdldEVsZW1lbnQoa2V5LnBhcmFtc1twYXJhbUluZGV4XSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm5OYW1lID0ga2V5LnJldHVybkZuTmFtZSA/IGtleS5yZXR1cm5Gbk5hbWUgOiBpbmRleDtcbiAgICAgICAgICAgICAgICByZXRGdW5jdGlvbnNbZm5OYW1lXSA9IHNjb3BlW2tleS5mbl0oLi4ua2V5LnBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldEZ1bmN0aW9uc1tmbk5hbWVdID0gcmV0RnVuY3Rpb25zW2ZuTmFtZV1ba2V5LnJldHVyblZhbHVlXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0RnVuY3Rpb25zW2tleV0gPSBlbGVtZW50W2tleV0oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzdHlsZXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgcmV0U3R5bGVzW2tleV0gPSBlbGVtZW50LnN0eWxlW2tleV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiByZXRBdHRyaWJ1dGVzLFxuICAgICAgICAgICAgZnVuY3Rpb25zIDogcmV0RnVuY3Rpb25zLFxuICAgICAgICAgICAgc3R5bGVzICAgIDogcmV0U3R5bGVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIGRhdGEudGFyZ2V0XG4gICAgICogQHBhcmFtIGRhdGEucmVsYXRlZFRhcmdldFxuICAgICAqL1xuICAgIG9uVHJhcHBlZEZvY3VzTW92ZW1lbnQoeyB0YXJnZXQsIHJlbGF0ZWRUYXJnZXQgfSkge1xuICAgICAgICBjb25zdCBiYWNrd2FyZHMgPSByZWxhdGVkVGFyZ2V0ICYmICh0YXJnZXQuY29tcGFyZURvY3VtZW50UG9zaXRpb24ocmVsYXRlZFRhcmdldCkgJiA0KTtcblxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5uZW8tZm9jdXMtdHJhcCcpKSB7XG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIGNvbnRhaW5pbmdFZW1lbnQgPSB0YXJnZXQucGFyZW50RWxlbWVudCxcbiAgICAgICAgICAgICAgICB0cmVlV2Fsa2VyICAgICAgID0gY29udGFpbmluZ0VlbWVudC4kdHJlZVdhbGtlcixcbiAgICAgICAgICAgICAgICB0b3BGb2N1c1RyYXAgICAgID0gY29udGFpbmluZ0VlbWVudC4kdG9wRm9jdXNUcmFwLFxuICAgICAgICAgICAgICAgIGJvdHRvbUZvY3VzVHJhcCAgPSBjb250YWluaW5nRWVtZW50LiRib3R0b21Gb2N1c1RyYXA7XG5cbiAgICAgICAgICAgIHRyZWVXYWxrZXIuY3VycmVudE5vZGUgPSBiYWNrd2FyZHMgPyBib3R0b21Gb2N1c1RyYXAgOiB0b3BGb2N1c1RyYXA7XG4gICAgICAgICAgICB0cmVlV2Fsa2VyW2JhY2t3YXJkcyA/ICdwcmV2aW91c05vZGUnIDogJ25leHROb2RlJ10oKTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRyZWVXYWxrZXIuY3VycmVudE5vZGUuZm9jdXMoKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlYWQoZGF0YSkge1xuICAgICAgICB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJyAmJiBkYXRhKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgYW55IERPTSBzaXppbmcgY29uZmlncyB0byB0aGUgbGFzdCBleHRlcm5hbGx5IGNvbmZpZ3VyZWQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIHVzZWQgZHVyaW5nIGFsaWduaW5nIHRvIHJlbGVhc2UgYW55IGNvbnN0cmFpbnRzIGFwcGxpZWQgYnkgYSBwcmV2aW91cyBhbGlnbm1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFsaWduXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlc2V0RGltZW5zaW9ucyhhbGlnbikge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZ2V0RWxlbWVudChhbGlnbi5pZCkuc3R5bGUsIHtcbiAgICAgICAgICAgIGZsZXggICAgIDogYWxpZ24uY29uZmlndXJlZEZsZXgsXG4gICAgICAgICAgICBoZWlnaHQgICA6IGFsaWduLmNvbmZpZ3VyZWRIZWlnaHQsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IGFsaWduLmNvbmZpZ3VyZWRNYXhIZWlnaHQsXG4gICAgICAgICAgICBtYXhXaWR0aCA6IGFsaWduLmNvbmZpZ3VyZWRNYXhXaWR0aCxcbiAgICAgICAgICAgIG1pbkhlaWdodDogYWxpZ24uY29uZmlndXJlZE1pbkhlaWdodCxcbiAgICAgICAgICAgIG1pbldpZHRoIDogYWxpZ24uY29uZmlndXJlZE1pbldpZHRoLFxuICAgICAgICAgICAgd2lkdGggICAgOiBhbGlnbi5jb25maWd1cmVkV2lkdGhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3Njcm9sbEJ5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5iZWhhdmlvcj0nYXV0bycgYXV0bywgaW5zdGFudCwgc21vb3RoXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuZGlyZWN0aW9uPSd0b3AnIGxlZnQsIHRvcFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudmFsdWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNjcm9sbEJ5KHtiZWhhdmlvcj0nYXV0bycsIGRpcmVjdGlvbj0ndG9wJywgaWQsIHZhbHVlfSkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoaWQpPy5zY3JvbGxCeSh7YmVoYXZpb3IsIFtkaXJlY3Rpb25dOiB2YWx1ZX0pO1xuICAgICAgICByZXR1cm4ge2lkfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gZWl0aGVyIHBhc3MgdGhlIGlkIG9yIGEgcXVlcnlTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmlkXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmJlaGF2aW9yPSdzbW9vdGgnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYmxvY2s9J3N0YXJ0J1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmRlbGF5PTUwMFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlubGluZT0nbmVhcmVzdCdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEucXVlcnlTZWxlY3Rvcl1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KHtpZCwgYmVoYXZpb3I9J3Ntb290aCcsIGJsb2NrPSdzdGFydCcsIGRlbGF5PTUwMCwgaW5saW5lPSduZWFyZXN0JywgcXVlcnlTZWxlY3Rvcn0pIHtcbiAgICAgICAgbGV0IG5vZGUgPSBpZCA/IHRoaXMuZ2V0RWxlbWVudChpZCkgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U2VsZWN0b3IpLFxuICAgICAgICAgICAgb3B0cyA9IHtiZWhhdmlvciwgYmxvY2ssIGlubGluZX07XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnc21vb3RoJykge1xuICAgICAgICAgICAgbm9kZS5zY3JvbGxJbnRvVmlldyhvcHRzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2Nyb2xsSW50b1ZpZXcoKSBkb2VzIG5vdCBwcm92aWRlIGEgY2FsbGJhY2sgeWV0LlxuICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdzNjL2Nzc3dnLWRyYWZ0cy9pc3N1ZXMvMzc0NFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNMaXN0ZW5lciA9ICdzY3JvbGxlbmQnIGluIHdpbmRvdztcblxuICAgICAgICAgICAgICAgICAgICBoYXNMaXN0ZW5lciAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGxlbmQnLCAoKSA9PiByZXNvbHZlKCksIHtjYXB0dXJlOiB0cnVlLCBvbmNlOiB0cnVlfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zY3JvbGxJbnRvVmlldyhvcHRzKTtcblxuICAgICAgICAgICAgICAgICAgICAhaGFzTGlzdGVuZXIgJiYgdGhpcy50aW1lb3V0KGRlbGF5KS50aGVuKCgpID0+IHtyZXNvbHZlKCl9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3Njcm9sbFRvXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5iZWhhdmlvcj0nYXV0bycgYXV0bywgaW5zdGFudCwgc21vb3RoXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuZGlyZWN0aW9uPSd0b3AnIGxlZnQsIHRvcFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudmFsdWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNjcm9sbFRvKHtiZWhhdmlvcj0nYXV0bycsIGRpcmVjdGlvbj0ndG9wJywgaWQsIHZhbHVlfSkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoaWQpPy5zY3JvbGxUbyh7YmVoYXZpb3IsIFtkaXJlY3Rpb25dOiB2YWx1ZX0pO1xuICAgICAgICByZXR1cm4ge2lkfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5iZWhhdmlvcj0nc21vb3RoJ1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLm9mZnNldD0zNFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXG4gICAgICovXG4gICAgc2Nyb2xsVG9UYWJsZVJvdyh7aWQsIGJlaGF2aW9yPSdzbW9vdGgnLCBvZmZzZXQ9MzR9KSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50KGlkKTsgLy8gdHIgdGFnXG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGxldCB0YWJsZU5vZGUgICA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJOb2RlID0gdGFibGVOb2RlLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgdGFibGVUb3AgICAgPSB0YWJsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgIHRvcCAgICAgICAgID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgICAgICAgIHdyYXBwZXJOb2RlLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcixcbiAgICAgICAgICAgICAgICB0b3A6IHRvcCAtIHRhYmxlVG9wIC0gb2Zmc2V0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLnN0YXJ0PTBdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLmVuZD05OTk5OV1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNlbGVjdE5vZGUoZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSAgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCksXG4gICAgICAgICAgICBzdGFydCA9IE5lby5pc051bWJlcihkYXRhLnN0YXJ0KSA/IGRhdGEuc3RhcnQgOiAwLFxuICAgICAgICAgICAgZW5kICAgPSBOZW8uaXNOdW1iZXIoZGF0YS5lbmQpICAgPyBkYXRhLmVuZCAgIDogOTk5OTk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgICAgICAgICBub2RlLnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5hZGRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhLnJlbW92ZVxuICAgICAqL1xuICAgIHNldEJvZHlDbHMoZGF0YSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoLi4uZGF0YS5yZW1vdmUgfHwgW10pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoLi4uZGF0YS5hZGQgfHwgW10pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90IHJlY29tbWVuZGVkIHRvIHVzZSA9PiBzdGljayB0byB2ZG9tIHVwZGF0ZXMuXG4gICAgICogQ2FuIGJlIGhhbmR5IGZvciBjdXN0b20gQ1NTIGJhc2VkIGFuaW1hdGlvbnMgdGhvdWdoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWQgQSBub2RlIGlkIG9yICdkb2N1bWVudC5ib2R5J1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLnN0eWxlXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzZXRTdHlsZShkYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRhdGEuaWQpO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLnN0eWxlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5pbmNsdWRlcygnIWltcG9ydGFudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnIWltcG9ydGFudCcsICcnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoTmVvLmRlY2FtZWwoa2V5KSwgdmFsdWUsICdpbXBvcnRhbnQnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbTmVvLmRlY2FtZWwoa2V5KV0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc3luY0FsaWducygpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7X2FsaWduc30gPSBtZTtcblxuICAgICAgICAvLyBLZWVwIGFsbCByZWdpc3RlcmVkIGFsaWducyBhbGlnbmVkIG9uIGFueSBkZXRlY3RlZCBjaGFuZ2VcbiAgICAgICAgX2FsaWducz8uZm9yRWFjaChhbGlnbiA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQcmVzZW50ID0gZG9jdW1lbnQuY29udGFpbnMoYWxpZ24udGFyZ2V0RWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEFsaWduIHN1YmplY3QgYW5kIHRhcmdldCBzdGlsbCBpbiB0aGUgRE9NIC0gY29ycmVjdCBpdHMgYWxpZ25tZW50XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuY29udGFpbnMoYWxpZ24uc3ViamVjdCkgJiYgdGFyZ2V0UHJlc2VudCkge1xuICAgICAgICAgICAgICAgIG1lLmFsaWduKGFsaWduKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWxpZ24gc3ViamVjdCBvciB0YXJnZXQgbm8gbG9uZ2VyIGluIHRoZSBET00gLSByZW1vdmUgaXQuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm8gbG9uZ2VyIGluIHRoZSBET00sIGhpZGUgdGhlIHN1YmplY3QgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRQcmVzZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIE5lby53b3JrZXIuQXBwLnNldENvbmZpZ3MoeyBpZDogYWxpZ24uaWQsIGhpZGRlbjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgICAgICAgIHtfYWxpZ25SZXNpemVPYnNlcnZlcn0gPSBtZSxcbiAgICAgICAgICAgICAgICAgICAge2NvbnN0cmFpblRvRWxlbWVudH0gICA9IGFsaWduO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcCBvYnNlcnZpbmcgdGhlIGFsaWduIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgX2FsaWduUmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGFsaWduLnN1YmplY3QpO1xuICAgICAgICAgICAgICAgIF9hbGlnblJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShhbGlnbi5vZmZzZXRQYXJlbnQpO1xuICAgICAgICAgICAgICAgIF9hbGlnblJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShhbGlnbi50YXJnZXRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoY29uc3RyYWluVG9FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF9hbGlnblJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShjb25zdHJhaW5Ub0VsZW1lbnQpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGxhc3QgYWxpZ25lZCBjbGFzcy5cbiAgICAgICAgICAgICAgICBhbGlnbi5zdWJqZWN0LmNsYXNzTGlzdC5yZW1vdmUoYG5lby1hbGlnbmVkLSR7YWxpZ24ucmVzdWx0Py5wb3NpdGlvbn1gKTtcblxuICAgICAgICAgICAgICAgIF9hbGlnbnMuZGVsZXRlKGFsaWduLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEubW9kYWxcbiAgICAgKi9cbiAgICBzeW5jTW9kYWxNYXNrKHsgaWQsIG1vZGFsIH0pIHtcbiAgICAgICAgY29uc3QgZWwgPSBpZCAmJiB0aGlzLmdldEVsZW1lbnQoaWQpO1xuXG4gICAgICAgIC8vIElmIHdlIGFyZSB2aXNpYmxlIGFuZCBtb2RhbCwgdGhlIG1hc2sgbmVlZHMgdG8gYmUganVzdCBiZWxvdyB0aGlzIGVsZW1lbnQuXG4gICAgICAgIGlmIChlbCAmJiBtb2RhbCAmJiBlbC5vd25lckRvY3VtZW50LmNvbnRhaW5zKGVsKSAmJiBlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSh0aGlzLm1vZGFsTWFzaywgZWwpXG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgbWFzayBuZWVkcyB0byBiZSBiZWxvdyB0aGUgbmV4dCB0b3Btb3N0IG1vZGFsIGRpYWxvZyBpZiBwb3NzaWJsZSwgb3IgaGlkZGVuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICBtb2RhbHMgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmVvLW1vZGFsJyksXG4gICAgICAgICAgICAgICAgdG9wbW9zdE1vZGFsID0gbW9kYWxzW21vZGFscy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgLy8gTW92ZSB0aGUgbWFzayB1bmRlciB0aGUgbmV4dCB0b3Btb3N0IG1vZGFsIG5vdyBtb2RhbCBcImlkXCIgaXMgZ29uZS5cbiAgICAgICAgICAgIGlmICh0b3Btb3N0TW9kYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNNb2RhbE1hc2soeyBpZDogdG9wbW9zdE1vZGFsLmlkLCBtb2RhbDogdHJ1ZSB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbE1hc2s/LnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFwcyAob3Igc3RvcHMgdHJhcHBpbmcpIGZvY3VzIHdpdGhpbiBhIENvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWQgVGhlIENvbXBvbmVudCB0byB0cmFwIGZvY3VzIHdpdGhpbi5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkYXRhLnRyYXA9dHJ1ZV0gUGFzcyBgZmFsc2VgIHRvIHN0b3AgdHJhcHBpbmcgZm9jdXMgaW5zaWRlIHRoZSBDb21wb25lbnQuXG4gICAgICovXG4gICAgYXN5bmMgdHJhcEZvY3VzKGRhdGEpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICAgIG1lICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb25UcmFwcGVkRm9jdXNNb3ZlbWVudCA9IG1lLiRib3VuZE9uVHJhcHBlZEZvY3VzTW92ZW1lbnQgfHwgKG1lLiRib3VuZE9uVHJhcHBlZEZvY3VzTW92ZW1lbnQgPSBtZS5vblRyYXBwZWRGb2N1c01vdmVtZW50LmJpbmQobWUpKSxcbiAgICAgICAgICAgIHN1YmplY3QgICAgICAgICAgICAgICAgPSBkYXRhLnN1YmplY3QgPSBtZS5nZXRFbGVtZW50KGRhdGEuaWQpLFxuICAgICAgICAgICAgeyB0cmFwID0gdHJ1ZSB9ICAgICAgICA9IGRhdGE7XG5cbiAgICAgICAgLy8gQ2FsbGVkIGJlZm9yZSBET00gaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b3BGb2N1c1RyYXAgICAgPSBzdWJqZWN0LiR0b3BGb2N1c1RyYXAsXG4gICAgICAgICAgICBib3R0b21Gb2N1c1RyYXAgPSBzdWJqZWN0LiRib3R0b21Gb2N1c1RyYXA7XG5cbiAgICAgICAgaWYgKHRyYXApIHtcbiAgICAgICAgICAgIGlmICghc3ViamVjdC4kdHJlZVdhbGtlcikge1xuICAgICAgICAgICAgICAgIHN1YmplY3QuJHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKHN1YmplY3QsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCB7XG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdE5vZGU6IGZpbHRlclRhYmJhYmxlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdG9wRm9jdXNUcmFwID0gc3ViamVjdC4kdG9wRm9jdXNUcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYm90dG9tRm9jdXNUcmFwID0gc3ViamVjdC4kYm90dG9tRm9jdXNUcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgdHdvIGZvY3VzIHRyYXBwaW5nIGVsZW1lbnRzIG11c3QgYmUgaW52aXNpYmxlIGJ1dCB0YWJiYWJsZS5cbiAgICAgICAgICAgICAgICB0b3BGb2N1c1RyYXAuY2xhc3NOYW1lID0gYm90dG9tRm9jdXNUcmFwLmNsYXNzTmFtZSA9ICduZW8tZm9jdXMtdHJhcCc7XG4gICAgICAgICAgICAgICAgdG9wRm9jdXNUcmFwLnNldEF0dHJpYnV0ZSgndGFiSW5kZXgnLCAwKTtcbiAgICAgICAgICAgICAgICBib3R0b21Gb2N1c1RyYXAuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsIDApO1xuXG4gICAgICAgICAgICAgICAgLy8gTGlzdGVuIGZvciB3aGVuIHRoZXkgZ2FpbiBmb2N1cyBhbmQgd3JhcCBmb2N1cyB3aXRoaW4gdGhlIGVuY2Fwc3VsYXRpbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgIHN1YmplY3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uVHJhcHBlZEZvY3VzTW92ZW1lbnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBjb250ZW50IGlzIGVuY2Fwc3VsYXRlZCBieSB0aGUgZm9jdXMgdHJhcCBlbGVtZW50c1xuICAgICAgICAgICAgc3ViamVjdC5pbnNlcnRCZWZvcmUodG9wRm9jdXNUcmFwLCBzdWJqZWN0LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgc3ViamVjdC5hcHBlbmRDaGlsZChib3R0b21Gb2N1c1RyYXApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWJqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvblRyYXBwZWRGb2N1c01vdmVtZW50KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuYmVoYXZpb3I9J3Ntb290aCddIC8vIGF1dG8gb3Igc21vb3RoXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmxlZnQ9MF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEudG9wPTBdXG4gICAgICovXG4gICAgd2luZG93U2Nyb2xsVG8oZGF0YSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgYmVoYXZpb3I6IGRhdGEuYmVoYXZpb3IgfHwgJ3Ntb290aCcsXG4gICAgICAgICAgICBsZWZ0ICAgIDogZGF0YS5sZWZ0ICAgICB8fCAwLFxuICAgICAgICAgICAgdG9wICAgICA6IGRhdGEudG9wICAgICAgfHwgMFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHdyaXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kdV9pbnNlcnROb2RlKHtcbiAgICAgICAgICAgIGluZGV4ICAgIDogZGF0YS5wYXJlbnRJbmRleCxcbiAgICAgICAgICAgIG91dGVySFRNTDogZGF0YS5odG1sIHx8IGRhdGEub3V0ZXJIVE1MLFxuICAgICAgICAgICAgcGFyZW50SWQgOiBkYXRhLnBhcmVudElkXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhEb21BY2Nlc3MpO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFN0cmluZ1V0aWwgICAgIGZyb20gJy4uL3V0aWwvU3RyaW5nLm1qcyc7XG5pbXBvcnQgVG91Y2hEb21FdmVudHMgZnJvbSAnLi9taXhpbi9Ub3VjaERvbUV2ZW50cy5tanMnO1xuXG5jb25zdCBnbG9iYWxEb21FdmVudHMgPSBbXG4gICAge25hbWU6ICdjaGFuZ2UnLCAgICAgIGhhbmRsZXI6ICdvbkNoYW5nZSd9LFxuICAgIHtuYW1lOiAnY2xpY2snLCAgICAgICBoYW5kbGVyOiAnb25DbGljayd9LFxuICAgIHtuYW1lOiAnY29udGV4dG1lbnUnLCBoYW5kbGVyOiAnb25Db250ZXh0TWVudSd9LFxuICAgIHtuYW1lOiAnZGJsY2xpY2snLCAgICBoYW5kbGVyOiAnb25Eb3VibGVDbGljayd9LFxuICAgIHtuYW1lOiAnZm9jdXNpbicsICAgICBoYW5kbGVyOiAnb25Gb2N1c0luJ30sXG4gICAge25hbWU6ICdmb2N1c291dCcsICAgIGhhbmRsZXI6ICdvbkZvY3VzT3V0J30sXG4gICAge25hbWU6ICdpbnB1dCcsICAgICAgIGhhbmRsZXI6ICdvbkNoYW5nZSd9LFxuICAgIHtuYW1lOiAna2V5ZG93bicsICAgICBoYW5kbGVyOiAnb25LZXlEb3duJ30sXG4gICAge25hbWU6ICdrZXl1cCcsICAgICAgIGhhbmRsZXI6ICdvbktleVVwJ30sXG4gICAge25hbWU6ICdtb3VzZWRvd24nLCAgIGhhbmRsZXI6ICdvbk1vdXNlRG93bid9LFxuICAgIHtuYW1lOiAnbW91c2VlbnRlcicsICBoYW5kbGVyOiAnb25Nb3VzZUVudGVyJywgb3B0aW9uczoge2NhcHR1cmU6IHRydWV9fSxcbiAgICB7bmFtZTogJ21vdXNlbGVhdmUnLCAgaGFuZGxlcjogJ29uTW91c2VMZWF2ZScsIG9wdGlvbnM6IHtjYXB0dXJlOiB0cnVlfX0sXG4gICAge25hbWU6ICdtb3VzZXVwJywgICAgIGhhbmRsZXI6ICdvbk1vdXNlVXAnfSxcbiAgICB7bmFtZTogJ3Njcm9sbCcsICAgICAgaGFuZGxlcjogJ29uU2Nyb2xsJywgICAgIG9wdGlvbnM6IHtjYXB0dXJlOiB0cnVlfX0sXG4gICAge25hbWU6ICd3aGVlbCcsICAgICAgIGhhbmRsZXI6ICdvbldoZWVsJywgICAgICBvcHRpb25zOiB7cGFzc2l2ZTogZmFsc2V9fVxuXTtcblxuLy8gV2lsbCBnZXQgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQuYm9keSBpbiBjYXNlIE5lby5jb25maWcuaGFzVG91Y2hFdmVudHMgPT09IHRydWVcbmNvbnN0IHRvdWNoRXZlbnRzID0gW1xuICAgIHtuYW1lOiAndG91Y2hjYW5jZWwnLCBoYW5kbGVyOiAnb25Ub3VjaENhbmNlbCd9LFxuICAgIHtuYW1lOiAndG91Y2hlbmQnLCAgICBoYW5kbGVyOiAnb25Ub3VjaEVuZCd9LFxuICAgIHtuYW1lOiAndG91Y2hlbnRlcicsICBoYW5kbGVyOiAnb25Ub3VjaEVudGVyJ30sXG4gICAge25hbWU6ICd0b3VjaGxlYXZlJywgIGhhbmRsZXI6ICdvblRvdWNoTGVhdmUnfSxcbiAgICB7bmFtZTogJ3RvdWNobW92ZScsICAgaGFuZGxlcjogJ29uVG91Y2hNb3ZlJywgb3B0aW9uczoge3Bhc3NpdmU6IGZhbHNlfX0sXG4gICAge25hbWU6ICd0b3VjaHN0YXJ0JywgIGhhbmRsZXI6ICdvblRvdWNoU3RhcnQnfVxuXTtcblxuLy8gd2hlZWwgZXZlbnRzIGZpcmUgdmVyeSBvZnRlbiwgc28gd2UgbGltaXQgdGhlIHRhcmdldHMgdG8gYXZvaWQgdW5uZWNlc3NhcnkgcG9zdCBtZXNzYWdlcyBmcm9tIG1haW4gdG8gdGhlIGFwcCB3b3JrZXJcbmNvbnN0IGdsb2JhbFdoZWVsVGFyZ2V0cyA9IFtcbiAgICAnbmVvLWMtbS1zY3JvbGxjb250YWluZXInLFxuICAgICduZW8tYy13LXNjcm9sbGNvbnRhaW5lcicsXG4gICAgJ25lby1jYWxlbmRhci15ZWFyY29tcG9uZW50JyxcbiAgICAnbmVvLWNpcmNsZS1jb21wb25lbnQnLFxuICAgICduZW8tZGF0ZXNlbGVjdG9yJyxcbiAgICAnbmVvLWdhbGxlcnknLFxuICAgICduZW8taGVsaXgnXG5dO1xuXG4vLyBzZXBhcmF0ZWQgZnJvbSBnbG9iYWxXaGVlbFRhcmdldHMgPT4gcGVyZm9ybWFuY2Vcbi8vIGJ1ZmZlciBpbiBtc1xuY29uc3QgZ2xvYmFsV2hlZWxUYXJnZXRzQnVmZmVyID0ge1xuICAgICduZW8tYy1tLXNjcm9sbGNvbnRhaW5lcicgICA6IDEwMCxcbiAgICAnbmVvLWMtdy1zY3JvbGxjb250YWluZXInICAgOiAxMDAsXG4gICAgJ25lby1jYWxlbmRhci15ZWFyY29tcG9uZW50JzogMzAwLFxuICAgICduZW8tZGF0ZXNlbGVjdG9yJyAgICAgICAgICA6IDMwMFxufTtcblxuLy8gc2VwYXJhdGVkIGZyb20gZ2xvYmFsV2hlZWxUYXJnZXRzID0+IHBlcmZvcm1hbmNlXG5jb25zdCBnbG9iYWxXaGVlbFRhcmdldHNLZWVwRXZlbnQgPSBbXG4gICAgJ25lby1jLW0tc2Nyb2xsY29udGFpbmVyJyxcbiAgICAnbmVvLWMtdy1zY3JvbGxjb250YWluZXInXG5dO1xuXG5jb25zdCBsYXN0V2hlZWxFdmVudCA9IHtcbiAgICBkYXRlICA6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsXG59O1xuXG5jb25zdFxuICAgIGRpc2FibGVkSW5wdXRLZXlzICAgICAgICAgPSB7fSxcbiAgICBwcmV2ZW50Q2xpY2tUYXJnZXRzICAgICAgID0gW10sXG4gICAgcHJldmVudENvbnRleHRtZW51VGFyZ2V0cyA9IFtdO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFpbi5Eb21FdmVudHNcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRG9tRXZlbnRzIGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUuT2JzZXJ2YWJsZSBtaXhpblxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IHRydWVcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uRG9tRXZlbnRzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5Eb21FdmVudHMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogY29uZGl0aW9uYWwgZHluYW1pYyBpbXBvcnQgb25jZSB0aGUgYnVpbGQgcHJvY2Vzc2VzIGNhbiBoYW5kbGUgaXRcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IG1peGlucz1bVG91Y2hEb21FdmVudHNdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtUb3VjaERvbUV2ZW50c10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdhZGREb21MaXN0ZW5lcicsXG4gICAgICAgICAgICAgICAgJ3JlZ2lzdGVyRGlzYWJsZWRJbnB1dENoYXJzJyxcbiAgICAgICAgICAgICAgICAncmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMnLFxuICAgICAgICAgICAgICAgICd1bnJlZ2lzdGVyRGlzYWJsZWRJbnB1dENoYXJzJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHRvdWNoXG4gICAgICovXG4gICAgbGFzdFRvdWNoID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgIG1lLm9uRG9tQ29udGVudExvYWRlZCAuYmluZChtZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb25jaGFuZ2UnLCAgIG1lLm9uU2VsZWN0aW9uQ2hhbmdlICAuYmluZChtZSkpO1xuICAgICAgICB3aW5kb3cgIC5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIG1lLm9uT3JpZW50YXRpb25DaGFuZ2UuYmluZChtZSkpO1xuICAgICAgICB3aW5kb3cgIC5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgICAgICAgIG1lLm9uSGFzaENoYW5nZSAgICAgICAuYmluZChtZSkpO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnVzZVNoYXJlZFdvcmtlcnMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBtZS5vbkJlZm9yZVVubG9hZC5iaW5kKG1lKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaSAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgPSBkYXRhLmV2ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBmYWlsZWRJZCA9IG51bGwsXG4gICAgICAgICAgICBldmVudCwgaWQsIHRhcmdldE5vZGU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZXZlbnQgPSBkYXRhLmV2ZW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKCFtZVtldmVudC5oYW5kbGVyXSkge1xuICAgICAgICAgICAgICAgIG1lW2V2ZW50LmhhbmRsZXJdID0gTmVvLmVtcHR5Rm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWQgPSBldmVudC52bm9kZUlkIHx8IGRhdGEudm5vZGVJZDtcblxuICAgICAgICAgICAgaWYgKGlkID09PSAnZG9jdW1lbnQuYm9keScpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQuYm9keVxuICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uY29uZmlnLnVzZURvbUlkcykge1xuICAgICAgICAgICAgICAgIHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5lby1pZD0nJHtpZH0nXWApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50Lm5hbWUsIG1lW2V2ZW50LmhhbmRsZXJdLmJpbmQobWUpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmYWlsZWRJZCA9IGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmFpbGVkSWQgJiYgTmVvLmNvbmZpZy5lbnZpcm9ubWVudCA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdEb21FdmVudHM6YWRkRG9tTGlzdGVuZXIoKSA9PiB0YXJnZXQgbm9kZSBub3QgZm91bmQ6JywgZmFpbGVkSWQpXG4gICAgICAgIH1cblxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4sIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICFmYWlsZWRJZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYWRkR2xvYmFsRG9tTGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIFsuLi5nbG9iYWxEb21FdmVudHNdLmNvbmNhdChOZW8uY29uZmlnLmhhc1RvdWNoRXZlbnRzID8gdG91Y2hFdmVudHMgOiBbXSkuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQubmFtZSwgbWVbZXZlbnQuaGFuZGxlcl0uYmluZChtZSksIGV2ZW50Lm9wdGlvbnMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2FsIGRvbUV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBkb21FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7dGFyZ2V0fSA9IGV2ZW50LFxuXG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgOiAnZG9tRXZlbnQnLFxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnQudHlwZSxcblxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWUuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgICAgICAgICAgaWQgICA6IHRhcmdldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdtb3VzZW1vdmUnOlxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLmRhdGEsIG1lLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKCdhcHAnLCBjb25maWcpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZUFyaWFBdHRyaWJ1dGVzKG5vZGUpIHtcbiAgICAgICAgbGV0IGFyaWFBdHRyaWJ1dGVzID0ge30sXG4gICAgICAgICAgICB7YXR0cmlidXRlc30gICA9IG5vZGUsXG4gICAgICAgICAgICBpICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICA9IGF0dHJpYnV0ZXM/Lmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgYXR0cmlidXRlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUubmFtZS5zdGFydHNXaXRoKCdhcmlhLScpKSB7XG4gICAgICAgICAgICAgICAgYXJpYUF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWUuc3Vic3RyaW5nKDUpXSA9IGF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFyaWFBdHRyaWJ1dGVzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gcG9pbnRzXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB4MSBUaGUgWCBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkxIFRoZSBZIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBwb2ludFxuICAgICAqIEBwYXJhbSAge051bWJlcn0geDIgVGhlIFggcG9zaXRpb24gb2YgdGhlIHNlY29uZCBwb2ludFxuICAgICAqIEBwYXJhbSAge051bWJlcn0geTIgVGhlIFkgcG9zaXRpb24gb2YgdGhlIHNlY29uZCBwb2ludFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0RGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgoeDIgLSB4MSkgKiogMiArICh5MiAtIHkxKSAqKiAyKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRFdmVudERhdGEoZXZlbnQpIHtcbiAgICAgICAgbGV0IHBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcblxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAvLyBvdXIgZHJhZ2dhYmxlIGltcGxlbWVudGF0aW9uIHdpbGwgZ2VuZXJhdGUgcGF0aHMsIHNvIHdlIGRvIG5lZWQgdG8gY2hlY2sgZm9yIHRoZW1cbiAgICAgICAgICAgIHBhdGggPSBldmVudC5wYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgcGF0aCAgICAgOiBwYXRoLm1hcChlID0+IHRoaXMuZ2V0VGFyZ2V0RGF0YShlKSksXG4gICAgICAgICAgICB0YXJnZXQgICA6IHRoaXMuZ2V0VGFyZ2V0RGF0YShldmVudC50YXJnZXQpLFxuICAgICAgICAgICAgdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXAsXG4gICAgICAgICAgICB0eXBlICAgICA6IGV2ZW50LnR5cGUsXG4gICAgICAgICAgICBkYXRhICAgICA6IHsuLi5ldmVudC50YXJnZXQuZGF0YXNldH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCkge1xuICAgICAgICAgICAgcmVzdWx0LnJlbGF0ZWRUYXJnZXQgPSB0aGlzLmdldFRhcmdldERhdGEoZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRLZXlib2FyZEV2ZW50RGF0YShldmVudCkge1xuICAgICAgICBsZXQge2FsdEtleSwgY29kZSwgY3RybEtleSwga2V5LCBrZXlDb2RlLCBtZXRhS2V5LCBzaGlmdEtleX0gPSBldmVudDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGhpcy5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgYWx0S2V5LFxuICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIGN0cmxLZXksXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBrZXlDb2RlLFxuICAgICAgICAgICAgbWV0YUtleSxcbiAgICAgICAgICAgIHNoaWZ0S2V5XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRNb3VzZUV2ZW50RGF0YShldmVudCkge1xuICAgICAgICBsZXQge2FsdEtleSwgY2xpZW50WCwgY2xpZW50WSwgY3RybEtleSwgZGV0YWlsLCBtZXRhS2V5LCBvZmZzZXRYLCBvZmZzZXRZLCBwYWdlWCwgcGFnZVksIHNjcmVlblgsIHNjcmVlblksIHNoaWZ0S2V5fSA9IGV2ZW50O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICBhbHRLZXksXG4gICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgIGN0cmxLZXksXG4gICAgICAgICAgICBkZXRhaWwsXG4gICAgICAgICAgICBtZXRhS2V5LFxuICAgICAgICAgICAgb2Zmc2V0WCxcbiAgICAgICAgICAgIG9mZnNldFksXG4gICAgICAgICAgICBwYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZLFxuICAgICAgICAgICAgc2NyZWVuWCxcbiAgICAgICAgICAgIHNjcmVlblksXG4gICAgICAgICAgICBzaGlmdEtleVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHJldHVybnMge0VsZW1lbnRbXX1cbiAgICAgKi9cbiAgICBnZXRQYXRoRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBsZXQgcGF0aCA9IFtdO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBwYXRoLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IHBhdGhcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgZ2V0U2VsZWN0aW9uUGF0aChwYXRoLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldC5wYXJlbnROb2RlICYmIHRhcmdldC5pZC5zcGxpdCgnX18nKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBwYXRoID0gdGhpcy5nZXRTZWxlY3Rpb25QYXRoKHBhdGgsIHRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGgucHVzaCh0aGlzLmdldFRhcmdldERhdGEodGFyZ2V0KSk7XG5cbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRUYXJnZXREYXRhKG5vZGUpIHtcbiAgICAgICAgbGV0IHIgICAgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCksXG4gICAgICAgICAgICByZWN0ID0gciAmJiB0aGlzLnBhcnNlRG9tUmVjdChyKSB8fCB7fTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXJpYSAgICAgICAgICAgICA6IHRoaXMuZ2VBcmlhQXR0cmlidXRlcyhub2RlKSxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgICAgOiBub2RlLmNoZWNrZWQsXG4gICAgICAgICAgICBjaGlsZEVsZW1lbnRDb3VudDogbm9kZS5jaGlsZEVsZW1lbnRDb3VudCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCAgICAgOiBub2RlLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudExlZnQgICAgICAgOiBub2RlLmNsaWVudExlZnQsXG4gICAgICAgICAgICBjbGllbnRUb3AgICAgICAgIDogbm9kZS5jbGllbnRUb3AsXG4gICAgICAgICAgICBjbGllbnRXaWR0aCAgICAgIDogbm9kZS5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgOiBub2RlLmNsYXNzTGlzdCA/IFsuLi5ub2RlLmNsYXNzTGlzdF0gOiBbXSxcbiAgICAgICAgICAgIGRhdGEgICAgICAgICAgICAgOiB7Li4ubm9kZS5kYXRhc2V0fSxcbiAgICAgICAgICAgIGRyYWdnYWJsZSAgICAgICAgOiBub2RlLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIGhpZGRlbiAgICAgICAgICAgOiBub2RlLmhpZGRlbixcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgOiBOZW8uY29uZmlnLnVzZURvbUlkcyA/IG5vZGUuaWQgOiBub2RlLmRhdGFzZXQ/LlsnbmVvSWQnXSxcbiAgICAgICAgICAgIGluZXJ0ICAgICAgICAgICAgOiBub2RlLmluZXJ0LFxuICAgICAgICAgICAgaXNDb25uZWN0ZWQgICAgICA6IG5vZGUuaXNDb25uZWN0ZWQsXG4gICAgICAgICAgICBpc0NvbnRlbnRFZGl0YWJsZTogbm9kZS5pc0NvbnRlbnRFZGl0YWJsZSxcbiAgICAgICAgICAgIG5vZGVUeXBlICAgICAgICAgOiBub2RlLm5vZGVUeXBlLFxuICAgICAgICAgICAgb2Zmc2V0SGVpZ2h0ICAgICA6IG5vZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0TGVmdCAgICAgICA6IG5vZGUub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIG9mZnNldFRvcCAgICAgICAgOiBub2RlLm9mZnNldFRvcCxcbiAgICAgICAgICAgIG9mZnNldFdpZHRoICAgICAgOiBub2RlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgcmVjdCxcbiAgICAgICAgICAgIHJvbGUgICAgICAgICAgICAgOiBub2RlLnJvbGUsXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgICAgIDogbm9kZS5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBzY3JvbGxMZWZ0ICAgICAgIDogbm9kZS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsVG9wICAgICAgICA6IG5vZGUuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsV2lkdGggICAgICA6IG5vZGUuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgICAgIDogbm9kZS5zdHlsZT8uY3NzVGV4dCxcbiAgICAgICAgICAgIHRhYkluZGV4ICAgICAgICAgOiBub2RlLmdldEF0dHJpYnV0ZT8uKCd0YWJpbmRleCcpID8gbm9kZS50YWJJbmRleCA6IG51bGwsXG4gICAgICAgICAgICB0YWdOYW1lICAgICAgICAgIDogbm9kZS50YWdOYW1lPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB0b3VjaCBldmVudCBmb3VuZCBpbiB0b3VjaGVzIG9yIGNoYW5nZWRUb3VjaGVzIG9mIGEgVG91Y2hFdmVudFxuICAgICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7VG91Y2h9XG4gICAgICovXG4gICAgZ2V0VG91Y2hDb29yZHMoZXZlbnQpIHtcbiAgICAgICAgbGV0IHt0b3VjaGVzLCBjaGFuZ2VkVG91Y2hlc30gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRvdWNoZXM/LlswXSB8fCBjaGFuZ2VkVG91Y2hlcz8uWzBdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSBpbiB1c2UgaWYgTmVvLmNvbmZpZy51c2VTaGFyZWRXb3JrZXJzID0gdHJ1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uQmVmb3JlVW5sb2FkKGV2ZW50KSB7XG4gICAgICAgIGxldCB7TWFuYWdlcn0gPSBOZW8ud29ya2VyO1xuXG4gICAgICAgIE1hbmFnZXIuYXBwTmFtZXMuZm9yRWFjaChhcHBOYW1lID0+IHtcbiAgICAgICAgICAgIE1hbmFnZXIuYnJvYWRjYXN0KHthY3Rpb246ICdkaXNjb25uZWN0JywgYXBwTmFtZSwgd2luZG93SWQ6IE1hbmFnZXIud2luZG93SWR9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SW5wdXRFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge3RhcmdldH0gPSBldmVudCxcblxuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAuLi5tZS5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgICAgIHZhbGlkOiB0YXJnZXQuY2hlY2tWYWxpZGl0eT8uKCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAvLyBpbnB1dCBhbmQgY2hhbmdlIGV2ZW50cyBjYW4gcGFzcyBhIEZpbGVMaXN0IGZvciBpbnB1dCB0eXBlIGZpbGVcbiAgICAgICAgaWYgKHRhcmdldC5maWxlcykge1xuICAgICAgICAgICAgZGF0YS5maWxlcyA9IHRhcmdldC5maWxlc1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICAgIG1lLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBwcmV2ZW50Q2xpY2tUYXJnZXRzKSAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZVRvQXBwKG1lLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgbWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHByZXZlbnRDb250ZXh0bWVudVRhcmdldHMpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uRG9tQ29udGVudExvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5hZGRHbG9iYWxEb21MaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5maXJlKCdkb21Db250ZW50TG9hZGVkJylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Eb3VibGVDbGljayhldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgICBtZS50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgcHJldmVudENsaWNrVGFyZ2V0cykgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Rm9jdXNFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkZvY3VzSW4oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Gb2N1c091dChldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25IYXNoQ2hhbmdlKCkge1xuICAgICAgICBsZXQge01hbmFnZXJ9ICA9IE5lby53b3JrZXIsXG4gICAgICAgICAgICBoYXNoU3RyaW5nID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG5cbiAgICAgICAgTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnaGFzaENoYW5nZScsXG4gICAgICAgICAgICBkYXRhICA6IHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lczogTWFuYWdlci5hcHBOYW1lcyxcbiAgICAgICAgICAgICAgICBoYXNoICAgIDogdGhpcy5wYXJzZUhhc2goaGFzaFN0cmluZyksXG4gICAgICAgICAgICAgICAgaGFzaFN0cmluZyxcbiAgICAgICAgICAgICAgICB3aW5kb3dJZDogTWFuYWdlci53aW5kb3dJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB7dGFyZ2V0fSAgPSBldmVudCxcbiAgICAgICAgICAgIHt0YWdOYW1lfSA9IHRhcmdldCxcbiAgICAgICAgICAgIGlzSW5wdXQgICA9IHRhZ05hbWUgPT09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PT0gJ1RFWFRBUkVBJztcblxuICAgICAgICBpZiAoaXNJbnB1dCAmJiBkaXNhYmxlZElucHV0S2V5c1t0YXJnZXQuaWRdPy5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5zZW5kTWVzc2FnZVRvQXBwKG1lLmdldEtleWJvYXJkRXZlbnREYXRhKGV2ZW50KSk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpc0lucHV0ICYmXG4gICAgICAgICAgICAgICAgZXZlbnQua2V5ID09PSAnVGFiJyAmJlxuICAgICAgICAgICAgICAgIG1lLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBbJ25lby1ncmlkLWVkaXRvcicsICduZW8tdGFibGUtZWRpdG9yJ10sIHRydWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhaXNJbnB1dCAmJlxuICAgICAgICAgICAgICAgIFsnQXJyb3dEb3duJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnXS5pbmNsdWRlcyhldmVudC5rZXkpICYmXG4gICAgICAgICAgICAgICAgbWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIFsnbmVvLXNlbGVjdGlvbiddLCB0cnVlKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0S2V5Ym9hcmRFdmVudERhdGEoZXZlbnQpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VFbnRlcihldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwRXZlbnQgPSB7Li4ubWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpLCBmcm9tRWxlbWVudElkOiBldmVudC5mcm9tRWxlbWVudD8uaWQgfHwgbnVsbCwgdG9FbGVtZW50SWQ6IGV2ZW50LnRvRWxlbWVudD8uaWQgfHwgbnVsbH07XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChhcHBFdmVudCk7XG4gICAgICAgIG1lLmZpcmUoJ21vdXNlRW50ZXInLCBhcHBFdmVudClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZUxlYXZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcHBFdmVudCA9IHsuLi5tZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCksIGZyb21FbGVtZW50SWQ6IGV2ZW50LmZyb21FbGVtZW50Py5pZCB8fCBudWxsLCB0b0VsZW1lbnRJZDogZXZlbnQudG9FbGVtZW50Py5pZCB8fCBudWxsfTtcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZVRvQXBwKGFwcEV2ZW50KTtcbiAgICAgICAgbWUuZmlyZSgnbW91c2VMZWF2ZScsIGFwcEV2ZW50KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25PcmllbnRhdGlvbkNoYW5nZShldmVudCkge1xuICAgICAgICBsZXQge29yaWVudGF0aW9ufSA9IHNjcmVlbixcbiAgICAgICAgICAgIHthbmdsZSwgdHlwZX0gPSBvcmllbnRhdGlvbixcbiAgICAgICAgICAgIGxheW91dCAgICAgICAgPSBhbmdsZSA9PT0gMCB8fCBhbmdsZSA9PT0gMTgwID8gJ3BvcnRyYWl0JyA6ICdsYW5kc2NhcGUnO1xuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnb3JpZW50YXRpb25DaGFuZ2UnLFxuICAgICAgICAgICAgZGF0YSAgOiB7YW5nbGUsIGxheW91dCwgdHlwZX1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIG9uU2Nyb2xsKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICB7Zmlyc3RUb3VjaCwgbGFzdFRvdWNofSA9IG1lLFxuICAgICAgICAgICAge2NsaWVudEhlaWdodCwgY2xpZW50V2lkdGgsIHNjcm9sbExlZnQsIHNjcm9sbFRvcH0gPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICBkYXRhO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIC4uLm1lLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICBjbGllbnRIZWlnaHQsXG4gICAgICAgICAgICBjbGllbnRXaWR0aCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxUb3BcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZmlyc3RUb3VjaCkge1xuICAgICAgICAgICAgZGF0YS50b3VjaGVzID0ge1xuICAgICAgICAgICAgICAgIGZpcnN0VG91Y2g6IHtjbGllbnRYOiBmaXJzdFRvdWNoLmNsaWVudFgsIGNsaWVudFk6IGZpcnN0VG91Y2guY2xpZW50WX0sXG4gICAgICAgICAgICAgICAgbGFzdFRvdWNoIDoge2NsaWVudFg6IGxhc3RUb3VjaCAuY2xpZW50WCwgY2xpZW50WTogbGFzdFRvdWNoIC5jbGllbnRZfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChkYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHt0YXJnZXR9ID0gZXZlbnQsXG4gICAgICAgICAgICBlbGVtZW50ICA9IHRhcmdldC50eXBlID8gdGFyZ2V0IDogdGFyZ2V0LmFjdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBwYXRoLCB0YXJnZXREYXRhO1xuXG4gICAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGggICAgICAgPSBtZS5nZXRTZWxlY3Rpb25QYXRoKFtdLCBlbGVtZW50KTtcbiAgICAgICAgdGFyZ2V0RGF0YSA9IG1lLmdldFRhcmdldERhdGEoZWxlbWVudCk7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiB7ZGlyZWN0aW9uOiBlbGVtZW50LnNlbGVjdGlvbkRpcmVjdGlvbiwgZW5kOiBlbGVtZW50LnNlbGVjdGlvbkVuZCwgc3RhcnQ6IGVsZW1lbnQuc2VsZWN0aW9uU3RhcnR9LFxuICAgICAgICAgICAgdGFyZ2V0ICAgOiB0YXJnZXREYXRhLFxuICAgICAgICAgICAgdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXAsXG4gICAgICAgICAgICB0eXBlICAgICA6ICdzZWxlY3Rpb25jaGFuZ2UnXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbldoZWVsKGV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgICAgICAgID0gdGhpcy50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgZ2xvYmFsV2hlZWxUYXJnZXRzKSxcbiAgICAgICAgICAgIHByZXZlbnRVcGRhdGUgPSBmYWxzZSxcbiAgICAgICAgICAgIHRhcmdldENscztcblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXRDbHMgPSB0YXJnZXQuY2xzO1xuXG4gICAgICAgICAgICBpZiAoZ2xvYmFsV2hlZWxUYXJnZXRzQnVmZmVyW3RhcmdldC5jbHNdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RXaGVlbEV2ZW50LmRhdGUgJiYgbGFzdFdoZWVsRXZlbnQudGFyZ2V0ID09PSB0YXJnZXRDbHMgJiYgZGF0ZSAtIGxhc3RXaGVlbEV2ZW50LmRhdGUgPCBnbG9iYWxXaGVlbFRhcmdldHNCdWZmZXJbdGFyZ2V0Q2xzXSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50VXBkYXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obGFzdFdoZWVsRXZlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldENsc1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFwcmV2ZW50VXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHtkZWx0YVgsIGRlbHRhWSwgZGVsdGFafSA9IGV2ZW50O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgICAgICAgICBjbGllbnRIZWlnaHQ6IHRhcmdldC5ub2RlLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50V2lkdGggOiB0YXJnZXQubm9kZS5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFYLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVksXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWixcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCAgOiB0YXJnZXQubm9kZS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3AgICA6IHRhcmdldC5ub2RlLnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZ2xvYmFsV2hlZWxUYXJnZXRzS2VlcEV2ZW50LmluY2x1ZGVzKHRhcmdldENscykpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBET01SZWN0cyBhcmUgbm90IHNwcmVhZGFibGUgPT4gey4uLkRPTVJlY3R9ID0+IHt9XG4gICAgICogQHBhcmFtIHtET01SZWN0fSByZWN0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBwYXJzZURvbVJlY3QocmVjdCkge1xuICAgICAgICBsZXQge2JvdHRvbSwgaGVpZ2h0LCBsZWZ0LCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeX0gPSByZWN0O1xuXG4gICAgICAgIHJldHVybiB7Ym90dG9tLCBoZWlnaHQsIGxlZnQsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4YW1wbGUgZm9yIEFycmF5IHZhbHVlczogXCJjYXRlZ29yaWVzW109dGVzdDEmY2F0ZWdvcmllc1tdPXRlc3QyXCJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBwYXJzZUhhc2goc3RyKSB7XG4gICAgICAgIGlmIChzdHIgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwaWVjZXMgPSBzdHIuc3BsaXQoJyYnKSxcbiAgICAgICAgICAgIGRhdGEgICA9IHt9LFxuICAgICAgICAgICAgaSwga2V5LCBwYXJ0cywgdmFsdWU7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHMgPSBwaWVjZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCcnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgICA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSk7XG4gICAgICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignW10nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKDAsIGtleS5pbmRleE9mKCdbXScpKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkYXRhW2tleV0ucHVzaCh0aGlzLnBhcnNlVmFsdWUodmFsdWUpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB0aGlzLnBhcnNlVmFsdWUodmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHVzZWQgYnkgcGFyc2VIYXNoIHRvIGNvbnZlcnQgdG9rZW5zIGludG8gYm9vbGVhbiBvciBudW1iZXIgdHlwZXMgaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58TnVtYmVyfFN0cmluZ31cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gcGFyc2VJbnQodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgdmFsdWUgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGRhdGEuY2hhcnNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqL1xuICAgIHJlZ2lzdGVyRGlzYWJsZWRJbnB1dENoYXJzKGRhdGEpIHtcbiAgICAgICAgZGlzYWJsZWRJbnB1dEtleXNbZGF0YS5pZF0gPSBkYXRhLmNoYXJzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5jbHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5uYW1lXG4gICAgICovXG4gICAgcmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMoZGF0YSkge1xuICAgICAgICBsZXQgcHJldmVudEFycmF5O1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmNscykpIHtcbiAgICAgICAgICAgIGRhdGEuY2xzID0gW2RhdGEuY2xzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgICAgICAgcHJldmVudEFycmF5ID0gcHJldmVudENsaWNrVGFyZ2V0cztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnRleHRtZW51JzpcbiAgICAgICAgICAgICAgICBwcmV2ZW50QXJyYXkgPSBwcmV2ZW50Q29udGV4dG1lbnVUYXJnZXRzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jbHMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgICAgICAgIXByZXZlbnRBcnJheS5pbmNsdWRlcyhjbHMpICYmIHByZXZlbnRBcnJheS5wdXNoKGNscylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgcGFyc2VkIGV2ZW50IGRhdGEgdG8gdGhlIGFwcCB3b3JrZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZW5kTWVzc2FnZVRvQXBwKGRhdGEpIHtcbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKCdhcHAnLCB7XG4gICAgICAgICAgICBhY3Rpb24gICA6ICdkb21FdmVudCcsXG4gICAgICAgICAgICBldmVudE5hbWU6IGRhdGEudHlwZSxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBoZWxsbyA8Zm9vPndvcmxkIHRob3JzdGVuISAzIDwgNCBhbmQgNSA+IDNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0cmlwSHRtbCh2YWx1ZSkge1xuICAgICAgICBsZXQgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgJ3RleHQvaHRtbCcpO1xuXG4gICAgICAgIHJldHVybiBkb2MuYm9keS50ZXh0Q29udGVudCB8fCAnJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRBcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0ZXN0U3Vic3RyaW5nPWZhbHNlXG4gICAgICogQHJldHVybnMge09iamVjdHxCb29sZWFufSB0YXJnZXQgY2xzICYgbm9kZSBpZiBmb3VuZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgdGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHRhcmdldEFycmF5LCB0ZXN0U3Vic3RyaW5nPWZhbHNlKSB7XG4gICAgICAgIGxldCBjb3VudFRhcmdldHMgPSB0YXJnZXRBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICBwYXRoICAgICAgICAgPSBldmVudC5wYXRoIHx8IGV2ZW50LmNvbXBvc2VkUGF0aCgpLFxuICAgICAgICAgICAgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgaiwgbm9kZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBub2RlID0gcGF0aFtpXTtcblxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50VGFyZ2V0czsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0ZXN0U3Vic3RyaW5nICYmIG5vZGUuY2xhc3NMaXN0Py52YWx1ZT8uaW5jbHVkZXModGFyZ2V0QXJyYXlbal0pIHx8XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0Py5jb250YWlucyh0YXJnZXRBcnJheVtqXSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtjbHM6IHRhcmdldEFycmF5W2pdLCBub2RlfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyRGlzYWJsZWRJbnB1dENoYXJzKGRhdGEpIHtcbiAgICAgICAgZGVsZXRlIGRpc2FibGVkSW5wdXRLZXlzW2RhdGEuaWRdXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhEb21FdmVudHMpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbmNvbnN0IGZvY3VzYWJsZVRhZ3MgPSB7XG4gICAgQk9EWSAgICA6IDEsXG4gICAgQlVUVE9OICA6IDEsXG4gICAgRU1CRUQgICA6IDEsXG4gICAgSUZSQU1FICA6IDEsXG4gICAgSU5QVVQgICA6IDEsXG4gICAgT0JKRUNUICA6IDEsXG4gICAgU0VMRUNUICA6IDEsXG4gICAgVEVYVEFSRUE6IDFcbn07XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYWluLkRvbVV0aWxzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIERvbVV0aWxzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFpbi5Eb21VdGlscydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4uRG9tVXRpbHMnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW5hbG9nb3VzIHRvIHRoZSBgSFRNTEVsZW1lbnRgIGBjbG9zZXN0YCBtZXRob2QuIFNlYXJjaGVzIHN0YXJ0aW5nIGF0IHRoZSBwYXNzZWQgZWxlbWVudCBmb3JcbiAgICAgKiBhbiBlbGVtZW50IGZvciB3aGljaCB0aGUgcGFzc2VkIGBmaWx0ZXJGbmAgcmV0dXJucyBgdHJ1ZWBcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB0byBzdGFydCBmcm9tLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZpbHRlckZuIEEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGUgZGVzaXJlZCBlbGVtZW50IGlzIHJlYWNoZWQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2xpbWl0XSBUaGUgZWxlbWVudCB0byBzdG9wIGF0LiBUaGlzIGlzICpub3QqIGNvbnNpZGVyZWQgZm9yIG1hdGNoaW5nLlxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBzdGF0aWMgY2xvc2VzdChlbCwgZmlsdGVyRm4sIGxpbWl0ID0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICB3aGlsZSAoZWw/Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiBlbCAhPT0gbGltaXQpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJGbihlbCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNGb2N1c2FibGUoZSkge1xuICAgICAgICAvLyBNYXkgYmUgdXNlZCBhcyBhIHNjb3BlbGVzcyBjYWxsYmFjaywgc28gdXNlIFwiRG9tVXRpbHNcIiwgbm90IFwidGhpc1wiXG4gICAgICAgIHJldHVybiBEb21VdGlscy5pc1RhYmJhYmxlKGUpIHx8IE51bWJlcihlLmdldEF0dHJpYnV0ZSgndGFiSW5kZXgnKSkgPCAwXG4gICAgfVxuXG4gICAgc3RhdGljIGlzVGFiYmFibGUoZSkge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgeyBub2RlTmFtZSB9ID0gZSxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICA9IGdldENvbXB1dGVkU3R5bGUoZSksXG4gICAgICAgICAgICB0YWJJbmRleCAgICAgPSBlLmdldEF0dHJpYnV0ZSgndGFiSW5kZXgnKTtcblxuICAgICAgICAvLyBIaWRkZW4gZWxlbWVudHMgYXJlIG5vdCB0YWJiYWJsZS5cbiAgICAgICAgLy8gTmVnYXRpdmUgdGFiSW5kZXggYWxzbyBtZWFucyBub3QgdGFiYmFibGUgKFRob3VnaCBzdGlsbCBmb2N1c2FibGUpXG4gICAgICAgIGlmICghZS5pc0Nvbm5lY3RlZCB8fCAhZS5vZmZzZXRQYXJlbnQgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAnaGlkZGVuJyB8fCBOdW1iZXIodGFiSW5kZXgpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9jdXNhYmxlVGFnc1tub2RlTmFtZV0gfHxcbiAgICAgICAgICAgICgobm9kZU5hbWUgPT09ICdBJyB8fCBub2RlTmFtZSA9PT0gJ0xJTksnKSAmJiAhIWUuaHJlZikgfHxcbiAgICAgICAgICAgICh0YWJJbmRleCAhPSBudWxsICYmIE51bWJlcih0YWJJbmRleCkgPj0gMCkgfHxcbiAgICAgICAgICAgIGUuY29udGVudEVkaXRhYmxlID09PSAndHJ1ZSdcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmFsb2dvdXMgdG8gdGhlIGBIVE1MRWxlbWVudGAgYHF1ZXJ5U2VsZWN0b3JgIG1ldGhvZC4gU2VhcmNoZXMgdGhlIHBhc3NlZCBlbGVtZW50XG4gICAgICogYW5kIGFsbCBkZXNjZW5kYW50cyBmb3IgdGhlIGZpcnN0IGVsZW1lbnQgZm9yIHdoaWNoIHRoZSBwYXNzZWQgYGZpbHRlckZuYCByZXR1cm5zIGB0cnVlYC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB0byBzdGFydCBmcm9tLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZpbHRlckZuIEEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBgdHJ1ZWAgd2hlbiB0aGUgZGVzaXJlZCBlbGVtZW50IGlzIHJlYWNoZWQuXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgZmlyc3QgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAqL1xuICAgIHN0YXRpYyBxdWVyeShlbCwgZmlsdGVyRm4pIHtcbiAgICAgICAgcmV0dXJuIFtlbCwgLi4uZWwucXVlcnlTZWxlY3RvckFsbCgnKicpXS5maW5kKGZpbHRlckZuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmFsb2dvdXMgdG8gdGhlIGBIVE1MRWxlbWVudGAgYHF1ZXJ5U2VsZWN0b3JBbGxgIG1ldGhvZC4gU2VhcmNoZXMgdGhlIHBhc3NlZCBlbGVtZW50XG4gICAgICogYW5kIGFsbCBkZXNjZW5kYW50cyBmb3IgYWxsIGVsZW1lbnRzIGZvciB3aGljaCB0aGUgcGFzc2VkIGBmaWx0ZXJGbmAgcmV0dXJucyBgdHJ1ZWAuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgdG8gc3RhcnQgZnJvbS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaWx0ZXJGbiBBIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYHRydWVgIHdoZW4gYSBkZXNpcmVkIGVsZW1lbnQgaXMgcmVhY2hlZC5cbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX0gQW4gYXJyYXkgb2YgbWF0Y2hpbmcgZWxlbWVudHNcbiAgICAgKi9cbiAgICBzdGF0aWMgcXVlcnlBbGwoZWwsIGZpbHRlckZuKSB7XG4gICAgICAgIHJldHVybiBbZWwsIC4uLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKV0uZmlsdGVyKGZpbHRlckZuKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoRG9tVXRpbHMpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL0FtQ2hhcnRzLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0FtQ2hhcnRzLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9BbUNoYXJ0c19tanNcIlxuXHRdLFxuXHRcIi4vQW5hbHl0aWNzQnlHb29nbGUubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vQW5hbHl0aWNzQnlHb29nbGUubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9BbmFseXRpY3NCeUdvb2dsZV9tanNcIlxuXHRdLFxuXHRcIi4vQmFzZS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9CYXNlLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fQmFzZV9tanNcIlxuXHRdLFxuXHRcIi4vQ2VzaXVtSlMubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vQ2VzaXVtSlMubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9DZXNpdW1KU19tanNcIlxuXHRdLFxuXHRcIi4vQ2xvbmVOb2RlLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0Nsb25lTm9kZS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0Nsb25lTm9kZV9tanNcIlxuXHRdLFxuXHRcIi4vQ29va2llLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0Nvb2tpZS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0Nvb2tpZV9tanNcIlxuXHRdLFxuXHRcIi4vRHJhZ0Ryb3AubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vRHJhZ0Ryb3AubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0RyYWdEcm9wX21qc1wiXG5cdF0sXG5cdFwiLi9GaWxlU3lzdGVtQWNjZXNzLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0ZpbGVTeXN0ZW1BY2Nlc3MubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9GaWxlU3lzdGVtQWNjZXNzX21qc1wiXG5cdF0sXG5cdFwiLi9Hb29nbGVNYXBzLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0dvb2dsZU1hcHMubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0dvb2dsZU1hcHNfbWpzXCJcblx0XSxcblx0XCIuL0hpZ2hsaWdodEpTLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0hpZ2hsaWdodEpTLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fSGlnaGxpZ2h0SlNfbWpzXCJcblx0XSxcblx0XCIuL0ludGVyc2VjdGlvbk9ic2VydmVyLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0ludGVyc2VjdGlvbk9ic2VydmVyLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fSW50ZXJzZWN0aW9uT2JzZXJ2ZXJfbWpzXCJcblx0XSxcblx0XCIuL0xvY2FsU3RvcmFnZS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Mb2NhbFN0b3JhZ2UubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Mb2NhbFN0b3JhZ2VfbWpzXCJcblx0XSxcblx0XCIuL01hcGJveEdMLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL01hcGJveEdMLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9NYXBib3hHTF9tanNcIlxuXHRdLFxuXHRcIi4vTWFya2Rvd24ubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vTWFya2Rvd24ubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9NYXJrZG93bl9tanNcIlxuXHRdLFxuXHRcIi4vTW9uYWNvRWRpdG9yLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL01vbmFjb0VkaXRvci5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX01vbmFjb0VkaXRvcl9tanNcIlxuXHRdLFxuXHRcIi4vTXdjLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL013Yy5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX013Y19tanNcIlxuXHRdLFxuXHRcIi4vTmF2aWdhdG9yLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL05hdmlnYXRvci5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTmF2aWdhdG9yX21qc1wiXG5cdF0sXG5cdFwiLi9Qb3BvdmVyLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1BvcG92ZXIubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Qb3BvdmVyX21qc1wiXG5cdF0sXG5cdFwiLi9QcmVmaXhGaWVsZC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9QcmVmaXhGaWVsZC5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX1ByZWZpeEZpZWxkX21qc1wiXG5cdF0sXG5cdFwiLi9SZXNpemVPYnNlcnZlci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9SZXNpemVPYnNlcnZlci5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX1Jlc2l6ZU9ic2VydmVyX21qc1wiXG5cdF0sXG5cdFwiLi9TY3JvbGxTeW5jLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1Njcm9sbFN5bmMubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9TY3JvbGxTeW5jX21qc1wiXG5cdF0sXG5cdFwiLi9TZXJ2aWNlV29ya2VyLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1NlcnZpY2VXb3JrZXIubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9TZXJ2aWNlV29ya2VyX21qc1wiXG5cdF0sXG5cdFwiLi9TaWVzdGEubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vU2llc3RhLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fU2llc3RhX21qc1wiXG5cdF0sXG5cdFwiLi9TdHlsZXNoZWV0Lm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1N0eWxlc2hlZXQubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX1N0eWxlc2hlZXRfbWpzXCJcblx0XSxcblx0XCIuL1dlYkNvbXBvbmVudC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9XZWJDb21wb25lbnQubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9XZWJDb21wb25lbnRfbWpzXCJcblx0XSxcblx0XCIuL1dpbmRvd1Bvc2l0aW9uLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1dpbmRvd1Bvc2l0aW9uLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9XaW5kb3dQb3NpdGlvbl9tanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLm1qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBMb2dpYyB0byBhcHBseSB0aGUgZGVsdGFzIGdlbmVyYXRlZCBieSB2ZG9tLkhlbHBlciB0byB0aGUgcmVhbCBET01cbiAqIEBjbGFzcyBOZW8ubWFpbi5taXhpbi5EZWx0YVVwZGF0ZXNcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRGVsdGFVcGRhdGVzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFpbi5taXhpbi5EZWx0YVVwZGF0ZXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLm1peGluLkRlbHRhVXBkYXRlcydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVOYW1lXG4gICAgICovXG4gICAgZHVfY2hhbmdlTm9kZU5hbWUobm9kZSwgbm9kZU5hbWUpIHtcbiAgICAgICAgbGV0IHthdHRyaWJ1dGVzfSA9IG5vZGUsXG4gICAgICAgICAgICBjbG9uZSAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgPSBhdHRyaWJ1dGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXMuaXRlbShpKTtcbiAgICAgICAgICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5vZGVOYW1lLCBhdHRyaWJ1dGUubm9kZVZhbHVlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbG9uZS5pbm5lckhUTUw9IG5vZGUuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBub2RlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLmlkXG4gICAgICovXG4gICAgZHVfZm9jdXNOb2RlKGRlbHRhKSB7XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudChkZWx0YS5pZCk/LmZvY3VzKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBub2RlLmNoaWxkcmVuIGNvbnRhaW5zIHRoZSBcInJlYWxcIiBub2RlcyAodGFncylcbiAgICAgKiBub2RlLmNoaWxkTm9kZXMgY29udGFpbnMgdGV4dHMgJiBjb21tZW50cyBhcyBub2RlcyB0b29cbiAgICAgKiBzaW5jZSBldmVyeSB2dHlwZTondGV4dCcgaXMgd3JhcHBlZCBpbnNpZGUgYSBjb21tZW50IGJsb2NrIChhcyBhbiBpZCksXG4gICAgICogd2UgbmVlZCB0aGUgYW1vdW50IG9mIG5vZGVzIHdoaWNoIGFyZSBub3QgY29tbWVudHMgdG8gZ2V0IHRoZSBcInJlYWxJbmRleFwiLlxuICAgICAqIGluc2VydEFkamFjZW50SFRNTCgpIGlzIGZhc3RlciB0aGFuIGNyZWF0aW5nIGEgbm9kZSAodGVtcGxhdGUpLCBidXQgb25seSBhdmFpbGFibGVcbiAgICAgKiBmb3IgY2hpbGRyZW4gYW5kIG5vdCBmb3IgY2hpbGROb2Rlcy5cbiAgICAgKiBJbiBjYXNlIHRoZXJlIGFyZSBubyBjb21tZW50cyAoPT4gdnR5cGU6ICd0ZXh0JyBub2RlcyksIHdlIHN0aWNrIHRvIGl0IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLmluZGV4XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLm91dGVySFRNTFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxuICAgICAqL1xuICAgIGR1X2luc2VydE5vZGUoZGVsdGEpIHtcbiAgICAgICAgbGV0IHtpbmRleH0gICAgICAgPSBkZWx0YSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgICAgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoZGVsdGEucGFyZW50SWQpLFxuICAgICAgICAgICAgY291bnRDaGlsZHJlbiA9IHBhcmVudE5vZGU/LmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICByZWFsSW5kZXggICAgID0gaW5kZXgsXG4gICAgICAgICAgICBoYXNDb21tZW50cyAgID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5zZXJ0Tm9kZScsIGluZGV4LCBjb3VudENoaWxkcmVuLCBkZWx0YS5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChjb3VudENoaWxkcmVuIDw9IDIwICYmIHBhcmVudE5vZGUubm9kZU5hbWUgIT09ICdUQk9EWScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50Q2hpbGRyZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZS5jaGlsZE5vZGVzW2ldLm5vZGVUeXBlID09PSA4KSB7IC8vIGlnbm9yZSBjb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCByZWFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXgrK1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNDb21tZW50cyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNDb21tZW50cykge1xuICAgICAgICAgICAgICAgIGNvdW50Q2hpbGRyZW4gPSBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPj0gY291bnRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGVsdGEub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmNoaWxkcmVuW2luZGV4XS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWJlZ2luJywgZGVsdGEub3V0ZXJIVE1MKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRDaGlsZHJlbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbltjb3VudENoaWxkcmVuIC0gMV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGRlbHRhLm91dGVySFRNTClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGVsdGEub3V0ZXJIVE1MKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuaHRtbFN0cmluZ1RvRWxlbWVudChkZWx0YS5vdXRlckhUTUwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiByZWFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgcGFyZW50Tm9kZS5jaGlsZE5vZGVzW3JlYWxJbmRleF0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxuICAgICAqL1xuICAgIGR1X21vdmVOb2RlKHtpZCwgaW5kZXgsIHBhcmVudElkfSkge1xuICAgICAgICBsZXQgbm9kZSAgICAgICA9IHRoaXMuZ2V0RWxlbWVudChpZCksXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5nZXRFbGVtZW50KHBhcmVudElkKSxcbiAgICAgICAgICAgIGN1cnJlbnROb2RlO1xuXG4gICAgICAgIGlmIChub2RlICYmIHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudE5vZGUgPSBwYXJlbnROb2RlLmNoaWxkcmVuW2luZGV4XTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlICYmIGN1cnJlbnROb2RlLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgYSBkaXJlY3Qgc3dhcCBPUFxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gY3VycmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlcGxhY2VXaXRoKGN1cnJlbnROb2RlKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgY3VycmVudE5vZGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnBhcmVudElkXG4gICAgICovXG4gICAgZHVfcmVtb3ZlQWxsKGRlbHRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50KGRlbHRhLnBhcmVudElkKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnBhcmVudElkXG4gICAgICovXG4gICAgZHVfcmVtb3ZlTm9kZShkZWx0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkZWx0YS5pZCksXG4gICAgICAgICAgICByZWcsIHN0YXJ0VGFnO1xuXG4gICAgICAgIGlmICghbm9kZSkgeyAvLyBjb3VsZCBiZSBhIHZ0eXBlOiB0ZXh0XG4gICAgICAgICAgICBub2RlID0gZGVsdGEucGFyZW50SWQgJiYgdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRlbHRhLnBhcmVudElkKTtcblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBzdGFydFRhZyA9IGA8IS0tICR7ZGVsdGEuaWR9IC0tPmA7XG4gICAgICAgICAgICAgICAgcmVnICAgICAgPSBuZXcgUmVnRXhwKHN0YXJ0VGFnICsgJ1tcXFxcc1xcXFxTXSo/PCEtLSBcXC9uZW8tdnRleHQgLS0+Jyk7XG5cbiAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IG5vZGUuaW5uZXJIVE1MLnJlcGxhY2UocmVnLCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5mcm9tSWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEudG9JZFxuICAgICAqL1xuICAgIGR1X3JlcGxhY2VDaGlsZChkZWx0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gbWUuZ2V0RWxlbWVudChkZWx0YS5wYXJlbnRJZCk7XG5cbiAgICAgICAgbm9kZT8ucmVwbGFjZUNoaWxkKG1lLmdldEVsZW1lbnQoZGVsdGEudG9JZCksIG1lLmdldEVsZW1lbnQoZGVsdGEuZnJvbUlkKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmlkXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEudmFsdWVcbiAgICAgKi9cbiAgICBkdV9zZXRUZXh0Q29udGVudChkZWx0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gbWUuZ2V0RWxlbWVudChkZWx0YS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBkZWx0YS52YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkZWx0YS5hdHRyaWJ1dGVzXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEuY2xzXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEuaWRdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5pbm5lckhUTUxdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5vdXRlckhUTUxdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkZWx0YS5zdHlsZV1cbiAgICAgKi9cbiAgICBkdV91cGRhdGVOb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgPSBtZS5nZXRFbGVtZW50T3JCb2R5KGRlbHRhLmlkKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVsdGEpLmZvckVhY2goKFtwcm9wLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2gocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lLnZvaWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtrZXldID0gdmFsID09PSAndHJ1ZScgLy8gdm5vZGUgYXR0cmlidXRlIHZhbHVlcyBnZXQgY29udmVydGVkIGludG8gc3RyaW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtrZXldID0gJycgLy8gaW5wdXQgZmllbGRzID0+IHBzZXVkbyBhdHRyaWJ1dGUgY2FuIG5vdCBiZSByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW05lby5jb25maWcudXNlRG9tSWRzID8gJ2lkJyA6ICdkYXRhLW5lby1pZCddID0gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdzcGVsbGNoZWNrJyAmJiB2YWwgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy8xOTIyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3ZhbHVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtrZXldID0gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmFkZCAgICAmJiBub2RlLmNsYXNzTGlzdC5hZGQoLi4udmFsdWUuYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnJlbW92ZSAmJiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoLi4udmFsdWUucmVtb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lubmVySFRNTCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IHZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9kZU5hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZHVfY2hhbmdlTm9kZU5hbWUobm9kZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3V0ZXJIVE1MJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub3V0ZXJIVE1MID0gdmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc1N0cmluZyh2YWwpICYmIHZhbC5pbmNsdWRlcygnIWltcG9ydGFudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWwucmVwbGFjZSgnIWltcG9ydGFudCcsICcnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQgPSAnaW1wb3J0YW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShOZW8uZGVjYW1lbChrZXkpLCB2YWwsIGltcG9ydGFudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnBhcmVudElkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnZhbHVlXG4gICAgICovXG4gICAgZHVfdXBkYXRlVnRleHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlICAgICAgPSBtZS5nZXRFbGVtZW50KGRlbHRhLnBhcmVudElkKSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IG5vZGUuaW5uZXJIVE1MLFxuICAgICAgICAgICAgc3RhcnRUYWcgID0gYDwhLS0gJHtkZWx0YS5pZH0gLS0+YCxcbiAgICAgICAgICAgIHJlZyAgICAgICA9IG5ldyBSZWdFeHAoc3RhcnRUYWcgKyAnW1xcXFxzXFxcXFNdKj88IS0tIFxcL25lby12dGV4dCAtLT4nKTtcblxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVySFRNTC5yZXBsYWNlKHJlZywgZGVsdGEudmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgcmVwcmVzZW50aW5nIGEgc2luZ2xlIGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7Q2hpbGROb2RlfVxuICAgICAqL1xuICAgIGh0bWxTdHJpbmdUb0VsZW1lbnQoaHRtbCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge09iamVjdHxPYmplY3RbXX0gZGF0YS5kZWx0YXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5vcmlnaW49J2FwcCddXG4gICAgICovXG4gICAgdXBkYXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtkZWx0YXN9ID0gZGF0YSxcbiAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiwgbWFwO1xuXG4gICAgICAgIGRlbHRhcyA9IEFycmF5LmlzQXJyYXkoZGVsdGFzKSA/IGRlbHRhcyA6IFtkZWx0YXNdO1xuICAgICAgICBsZW4gICAgPSBkZWx0YXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmxvZ0RlbHRhVXBkYXRlcyAmJiBsZW4gPiAwKSB7XG4gICAgICAgICAgICBtZS5jb3VudERlbHRhcyArPSBsZW47XG4gICAgICAgICAgICBtZS5jb3VudFVwZGF0ZXMrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgJyArIG1lLmNvdW50VXBkYXRlcywgJ3RvdGFsIGRlbHRhcyAnLCBtZS5jb3VudERlbHRhcywgTmVvLmNsb25lKGRhdGEsIHRydWUpKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcucmVuZGVyQ291bnREZWx0YXMgJiYgbGVuID4gMCkge1xuICAgICAgICAgICAgbWUuY291bnREZWx0YXNQZXIyNTBtcyArPSBsZW5cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcCA9IHtcbiAgICAgICAgICAgIGZvY3VzTm9kZSAgICAgOiBtZS5kdV9mb2N1c05vZGUsXG4gICAgICAgICAgICBpbnNlcnROb2RlICAgIDogbWUuZHVfaW5zZXJ0Tm9kZSxcbiAgICAgICAgICAgIG1vdmVOb2RlICAgICAgOiBtZS5kdV9tb3ZlTm9kZSxcbiAgICAgICAgICAgIHJlbW92ZUFsbCAgICAgOiBtZS5kdV9yZW1vdmVBbGwsXG4gICAgICAgICAgICByZW1vdmVOb2RlICAgIDogbWUuZHVfcmVtb3ZlTm9kZSxcbiAgICAgICAgICAgIHJlcGxhY2VDaGlsZCAgOiBtZS5kdV9yZXBsYWNlQ2hpbGQsXG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudDogbWUuZHVfc2V0VGV4dENvbnRlbnQsXG4gICAgICAgICAgICB1cGRhdGVWdGV4dCAgIDogbWUuZHVfdXBkYXRlVnRleHQsXG4gICAgICAgICAgICBkZWZhdWx0ICAgICAgIDogbWUuZHVfdXBkYXRlTm9kZVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIChtYXBbZGVsdGFzW2ldLmFjdGlvbl0gfHwgbWFwWydkZWZhdWx0J10pLmNhbGwobWUsIGRlbHRhc1tpXSlcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiB8fCAnYXBwJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhEZWx0YVVwZGF0ZXMpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogV2lsbCBnZXQgaW1wb3J0ZWQgaW4gY2FzZSBOZW8uY29uZmlnLmhhc1RvdWNoRXZlbnRzID09PSB0cnVlXG4gKiBAY2xhc3MgTmVvLm1haW4ubWl4aW4uVG91Y2hEb21FdmVudHNcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgVG91Y2hEb21FdmVudHMgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLm1peGluLlRvdWNoRG9tRXZlbnRzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5taXhpbi5Ub3VjaERvbUV2ZW50cydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoQ2FuY2VsKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICAgICAgbWUuZmlyc3RUb3VjaCA9IG51bGw7XG4gICAgICAgIG1lLmxhc3RUb3VjaCAgPSBudWxsXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0RXZlbnREYXRhKGV2ZW50KSk7XG4gICAgICAgIG1lLmZpcnN0VG91Y2ggPSBudWxsO1xuICAgICAgICBtZS5sYXN0VG91Y2ggID0gbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hFbnRlcihldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hMZWF2ZShldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkYXRhICAgICAgICA9IG1lLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICB0b3VjaCAgICAgICA9IGV2ZW50LnRvdWNoZXNbMF0sXG4gICAgICAgICAgICB7bGFzdFRvdWNofSA9IG1lO1xuXG4gICAgICAgIGlmIChsYXN0VG91Y2gpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICAgICAgIGRlbHRhWDogdG91Y2guY2xpZW50WCAtIGxhc3RUb3VjaC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGRlbHRhWTogdG91Y2guY2xpZW50WSAtIGxhc3RUb3VjaC5jbGllbnRZXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChkYXRhKTtcblxuICAgICAgICBtZS5sYXN0VG91Y2ggPSB0b3VjaDtcblxuICAgICAgICBpZiAobWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIFsnbmVvLWhlbGl4J10pKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5maXJzdFRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgbWUubGFzdFRvdWNoICA9IGV2ZW50LnRvdWNoZXNbMF07XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRFdmVudERhdGEoZXZlbnQpKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoVG91Y2hEb21FdmVudHMpO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkFycmF5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0FycmF5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5BcnJheSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuQXJyYXknXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKGFyciwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxLCBidXQgbm90IGluIGFycmF5MlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MT1bXVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5Mj1bXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZGlmZmVyZW5jZShhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+ICFhcnJheTIuaW5jbHVkZXMoaXRlbSkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBpdGVtIGlzIGluY2x1ZGVkIGJ5IHJlZmVyZW5jZSBpbnNpZGUgdGhlIGFycmF5XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIGhhc0l0ZW0oYXJyLCBpdGVtKSB7XG4gICAgICAgIHJldHVybiBhcnIuaW5jbHVkZXMoaXRlbSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgQXJyYXkgb2YgaXRlbXMgdG8gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxuICAgICAqIER1cGxpY2F0ZXMgd2lsbCBvbmx5IGdldCBtYXRjaGVkIGJ5IHJlZmVyZW5jZS5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnQoYXJyLCBpbmRleCwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGVuID0gaXRlbXMubGVuZ3RoIC0xLFxuICAgICAgICAgICAgaSAgID0gbGVuLFxuICAgICAgICAgICAgY3VycmVudEluZGV4LCBpdGVtO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgYmFja3dhcmRzXG4gICAgICAgIGZvciAoOyBpID4gLTE7IGktLSkge1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldO1xuXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGFyciwgY3VycmVudEluZGV4LCBpbmRleClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAwLCBpdGVtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGludGVyc2VjdGlvbihhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+IGFycmF5Mi5pbmNsdWRlcyhpdGVtKSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhbiBpdGVtIGluc2lkZSBhcnIgZnJvbSBmcm9tSW5kZXggdG8gdG9JbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgICAqL1xuICAgIHN0YXRpYyBtb3ZlKGFyciwgZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPT09IHRvSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tSW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgZnJvbUluZGV4ID0gYXJyLmxlbmd0aCAtIDFcbiAgICAgICAgfVxuXG4gICAgICAgIGFyci5zcGxpY2UodG9JbmRleCwgMCwgYXJyLnNwbGljZShmcm9tSW5kZXgsIDEpWzBdKTtcbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBmcm9tIGFuIGFycmF5LiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlKGFyciwgaXRlbXMpIHtcbiAgICAgICAgbGV0IGluZGV4O1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXVxuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGluZGV4ID4gLTEgJiYgYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFyclxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBjb21iaW5lIGFkZCAmIHJlbW92ZSBpbiBvbmUgY2FsbC5cbiAgICAgKiBZb3UgY2FuIHBhc3Mgc2luZ2xlIGl0ZW1zIG9yIGFuIGFycmF5IG9mIGl0ZW1zIHRvIGFkZCBvciB0byByZW1vdmUuXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSByZW1vdmVJdGVtc1xuICAgICAqIEBwYXJhbSB7Kn0gYWRkSXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlQWRkKGFyciwgcmVtb3ZlSXRlbXMsIGFkZEl0ZW1zKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKGFyciwgcmVtb3ZlSXRlbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoYXJyLCBhZGRJdGVtcylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgZXhpc3QsIG90aGVyd2lzZSBhZGRzIGl0XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYWRkXVxuICAgICAqL1xuICAgIHN0YXRpYyB0b2dnbGUoYXJyLCBpdGVtLCBhZGQgPSAhdGhpcy5oYXNJdGVtKGFyciwgaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbYWRkID8gJ2FkZCcgOiAncmVtb3ZlJ10oYXJyLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIHRoZSBwYXNzZWQgYXJyYXlzLlxuICAgICAqIE11bHRpcGxlIGFycmF5cyBtYXkgYmUgcGFzc2VkLlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB1bmlvbigpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KEFycmF5LnByb3RvdHlwZS5jb25jYXQoLi4uYXJndW1lbnRzKSldXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyB1bnNoaWZ0KGFyciwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIudW5zaGlmdChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXJyXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhOZW9BcnJheSk7XG4iLCIvKipcbiAqIEFwcGVuZCBhcmdzIGluc3RlYWQgb2YgcHJlcGVuZGluZyB0aGVtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kQXBwZW5kKGZuLCBzY29wZSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc2xpY2UoMik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLmNvbmNhdChhcmdzKSlcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gc2NvcGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheT0zMDBcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1ZmZlcihjYWxsYmFjaywgc2NvcGUsIGRlbGF5PTMwMCkge1xuICAgIGxldCB0aW1lb3V0SWQ7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICAvLyBjYWxsYmFjayBpbnZvY2F0aW9uIGNvbWVzIFwiZGVsYXlcIiBtcyBhZnRlciB0aGUgbGFzdCBjYWxsIHRvIHdyYXBwZXJcbiAgICAgICAgLy8gc28gY2FuY2VsIGFueSBwZW5kaW5nIGludm9jYXRpb24uXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuXG4gICAgICAgIHdyYXBwZXIuaXNQZW5kaW5nID0gdHJ1ZTtcblxuICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRpbWVvdXRJZCA9IDA7XG4gICAgICAgICAgICB3cmFwcGVyLmlzUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpXG4gICAgICAgIH0sIGRlbGF5KVxuICAgIH07XG5cbiAgICB3cmFwcGVyLmNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgd3JhcHBlci5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdyYXBwZXJcbn1cblxuLyoqXG4gKiBJbnRlbmRlZCBmb3IgZnVuY3Rpb25zIHdpdGggMSBwYXJhbSB3aGVyZSB0aGUgaW50ZXJjZXB0b3IgY2FuIGNoYW5nZSB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRNZXRob2ROYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpbnRlcmNlcHRGdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlPXRhcmdldFxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW50ZXJjZXB0b3IodGFyZ2V0LCB0YXJnZXRNZXRob2ROYW1lLCBpbnRlcmNlcHRGdW5jdGlvbiwgc2NvcGUpIHtcbiAgICBsZXQgdGFyZ2V0TWV0aG9kID0gdGFyZ2V0W3RhcmdldE1ldGhvZE5hbWVdO1xuXG4gICAgcmV0dXJuICh0YXJnZXRbdGFyZ2V0TWV0aG9kTmFtZV0gPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0TWV0aG9kLmNhbGwodGFyZ2V0LCBpbnRlcmNlcHRGdW5jdGlvbi5jYWxsKHNjb3BlIHx8IHRhcmdldCwgdmFsdWUpKVxuICAgIH0pXG59XG5cbi8qKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSB0YXJnZXRcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZXF1ZW5jZSh0YXJnZXQsIG1ldGhvZE5hbWUsIGZuLCBzY29wZSkge1xuICAgIGxldCBtZXRob2QgPSB0YXJnZXRbbWV0aG9kTmFtZV0gfHwgTmVvLmVtcHR5Rm47XG5cbiAgICByZXR1cm4gKHRhcmdldFttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlIHx8IHRoaXMsIGFyZ3VtZW50cylcbiAgICB9KVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHNjb3BlXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXk9MzAwXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShjYWxsYmFjaywgc2NvcGUsIGRlbGF5PTMwMCkge1xuICAgIGxldCBkZWJvdW5jZVRpbWVyO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gbGVhZGluZyBlZGdlID0+IHRyaWdnZXIgdGhlIGZpcnN0IGNhbGwgcmlnaHQgYXdheVxuICAgICAgICBpZiAoIU5lby5pc051bWJlcihkZWJvdW5jZVRpbWVyKSkge1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgc2NvcGUgKGluc3RhbmNlKSBkaWQgbm90IGdldCBkZXN0cm95ZWQgeWV0XG4gICAgICAgICAgICBzY29wZT8uaWQgJiYgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpO1xuXG4gICAgICAgICAgICAvLyB3ZSBzdGlsbCB3YW50IHRvIHN0YXJ0IGEgdGltZXIgdG8gZGVsYXkgdGhlIDJuZCsgdXBkYXRlXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7ZGVib3VuY2VUaW1lciA9IG51bGx9LCAgZGVsYXkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lcik7XG5cbiAgICAgICAgICAgIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBzY29wZSAoaW5zdGFuY2UpIGRpZCBub3QgZ2V0IGRlc3Ryb3llZCB5ZXRcbiAgICAgICAgICAgICAgICBzY29wZT8uaWQgJiYgY2FsbGJhY2suYXBwbHkoc2NvcGUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGRlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtkZWJvdW5jZVRpbWVyID0gbnVsbH0sICBkZWxheSlcbiAgICAgICAgICAgIH0sICBkZWxheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50ZXJjZXB0b3IgY2FuIHByZXZlbnQgdGhlIHRhcmdldE1ldGhvZCBmcm9tIGdldHRpbmcgZXhlY3V0ZWQgaW4gY2FzZSBpdCByZXR1cm5zIGZhbHNlLlxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtTdHJpbmd9IHRhcmdldE1ldGhvZE5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGludGVyY2VwdEZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGU9dGFyZ2V0XG4gKiBAcGFyYW0geyp9IHByZXZlbnRlZFJldHVyblZhbHVlPW51bGwgVGhlIHZhbHVlIHRvIHJldHVybiBpbiBjYXNlIHRoZSBpbnRlcmNlcHRGdW5jdGlvbiByZXR1cm5zIGZhbHNlXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHQodGFyZ2V0LCB0YXJnZXRNZXRob2ROYW1lLCBpbnRlcmNlcHRGdW5jdGlvbiwgc2NvcGUsIHByZXZlbnRlZFJldHVyblZhbHVlPW51bGwpIHtcbiAgICBsZXQgdGFyZ2V0TWV0aG9kID0gdGFyZ2V0W3RhcmdldE1ldGhvZE5hbWVdO1xuXG4gICAgcmV0dXJuICh0YXJnZXRbdGFyZ2V0TWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChpbnRlcmNlcHRGdW5jdGlvbi5hcHBseShzY29wZSB8fCB0YXJnZXQsIGFyZ3VtZW50cykgPT09IGZhbHNlKVxuICAgICAgICAgICAgPyBwcmV2ZW50ZWRSZXR1cm5WYWx1ZVxuICAgICAgICAgICAgOiB0YXJnZXRNZXRob2QuYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpXG4gICAgfSlcbn1cblxuLyoqXG4gKiBMb2NhdGUgYSBjYWxsYWJsZSBmdW5jdGlvbiBieSBuYW1lIGluIHRoZSBwYXNzZWQgc2NvcGUuXG4gKlxuICogSWYgdGhlIG5hbWUgc3RhcnRzIHdpdGggJ3VwLicsIHRoZSBwYXJlbnQgQ29tcG9uZW50IGNoYWluIGlzIHNlYXJjaGVkLlxuICpcbiAqIFRoaXMgaXMgdXNlZCBieSBtYW5hZ2VyLkRvbUV2ZW50cyAmIGNvcmUuT2JzZXJ2YWJsZS5maXJlIGFuZCBieSAnaGFuZGxlcicgZnVuY3Rpb24gY2FsbHMgdG8gcmVzb2x2ZVxuICogc3RyaW5nIGZ1bmN0aW9uIG5hbWVzIGluIHRoZSBDb21wb25lbnQncyBvd24gaGllcmFyY2h5LlxuICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGZuIEEgZnVuY3Rpb24sIG9yIHRoZSBuYW1lIG9mIGEgZnVuY3Rpb24gdG8gZmluZCBpbiB0aGUgcGFzc2VkIHNjb3BlIG9iamVjdC9cbiAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZT10aGlzIFRoZSBzY29wZSB0byBmaW5kIHRoZSBmdW5jdGlvbiBpbiBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUNhbGxiYWNrKGZuLCBzY29wZT10aGlzKSB7XG4gICAgaWYgKE5lby5pc1N0cmluZyhmbikpIHtcbiAgICAgICAgaWYgKCFzY29wZVtmbl0gJiYgZm4uc3RhcnRzV2l0aCgndXAuJykpIHtcbiAgICAgICAgICAgIGZuID0gZm4uc2xpY2UoMyk7XG4gICAgICAgICAgICB3aGlsZSAoIXNjb3BlW2ZuXSAmJiAoc2NvcGUgPSBzY29wZS5wYXJlbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNjb3BlID0gc2NvcGUuZ2V0Q29udHJvbGxlcj8uKCk/LmdldEhhbmRsZXJTY29wZShmbiwgbnVsbCkgfHwgc2NvcGVcbiAgICAgICAgfVxuXG4gICAgICAgIGZuID0gc2NvcGVbZm5dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtmbiwgc2NvcGV9XG59XG5cbi8qKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gc2NvcGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheT0zMDBcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBzY29wZSwgZGVsYXk9MzAwKSB7XG4gICAgbGV0IGxhc3RSYW5EYXRlLCB0aW1lb3V0SWQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICBpZiAoIWxhc3RSYW5EYXRlKSB7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBzY29wZSAoaW5zdGFuY2UpIGRpZCBub3QgZ2V0IGRlc3Ryb3llZCB5ZXRcbiAgICAgICAgICAgIHNjb3BlPy5pZCAmJiBjYWxsYmFjay5hcHBseShzY29wZSwgYXJncyk7XG5cbiAgICAgICAgICAgIGxhc3RSYW5EYXRlID0gRGF0ZS5ub3coKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcblxuICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoKERhdGUubm93KCkgLSBsYXN0UmFuRGF0ZSkgPj0gZGVsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjaGVjayBpZiB0aGUgc2NvcGUgKGluc3RhbmNlKSBkaWQgbm90IGdldCBkZXN0cm95ZWQgeWV0XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPy5pZCAmJiBjYWxsYmFjay5hcHBseShzY29wZSwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGFzdFJhbkRhdGUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXkgLSAoRGF0ZS5ub3coKSAtIGxhc3RSYW5EYXRlKSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qKlxuICogVGhlIGNsYXNzIGNvbnRhaW5zIHV0aWxpdHkgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIERPTVJlY3QgT2JqZWN0c1xuICogQGNsYXNzIE5lby51dGlsLlJlY3RhbmdsZVxuICogQGV4dGVuZHMgRE9NUmVjdFxuICovXG5cbmNvbnN0XG4gICAgZW1wdHlBcnJheSA9IE9iamVjdC5mcmVlemUoW10pLFxuICAgIC8vIENvbnZlcnQgZWRnZSBhcnJheSB2YWx1ZXMgaW50byB0aGUgW1QsUixCLExdIGZvcm0uXG4gICAgcGFyc2VFZGdlVmFsdWUgPSAoZSA9IDApID0+IHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICAgICAgICBlID0gW2VdO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBlLmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZmlsbChlWzBdLCAxLCA0KTtcbiAgICAgICAgICAgIGNhc2UgMjovLyB0b3AmYm90dG9tLCBsZWZ0JnJpZ2h0XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtlWzBdLCBlWzFdLCBlWzBdLCBlWzFdXTtcbiAgICAgICAgICAgIGNhc2UgMzovLyB0b3AsIGxlZnQmcmlnaHQsIGJvdHRvbVxuICAgICAgICAgICAgICAgIHJldHVybiBbZVswXSwgZVsxXSwgZVsyXSwgZVsxXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfSxcbiAgICBwYXJzZUVkZ2VBbGlnbiA9IGVkZ2VBbGlnbiA9PiB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBlZGdlUGFydHMgICAgID0gZWRnZUFsaWduUkUuZXhlYyhlZGdlQWxpZ24pLFxuICAgICAgICAgICAgb3VyRWRnZVpvbmUgICA9IGVkZ2Vab25lW2VkZ2VQYXJ0c1sxXV0sXG4gICAgICAgICAgICB0aGVpckVkZ2Vab25lID0gZWRnZVpvbmVbZWRnZVBhcnRzWzRdXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3VyRWRnZSAgICAgICAgIDogZWRnZVBhcnRzWzFdLFxuICAgICAgICAgICAgb3VyRWRnZU9mZnNldCAgIDogcGFyc2VJbnQoZWRnZVBhcnRzWzJdIHx8IDUwKSxcbiAgICAgICAgICAgIG91ckVkZ2VVbml0ICAgICA6IGVkZ2VQYXJ0c1szXSB8fCAnJScsXG4gICAgICAgICAgICBvdXJFZGdlWm9uZSxcbiAgICAgICAgICAgIHRoZWlyRWRnZSAgICAgICA6IGVkZ2VQYXJ0c1s0XSxcbiAgICAgICAgICAgIHRoZWlyRWRnZU9mZnNldCA6IHBhcnNlSW50KGVkZ2VQYXJ0c1s1XSB8fCA1MCksXG4gICAgICAgICAgICB0aGVpckVkZ2VVbml0ICAgOiBlZGdlUGFydHNbNl0gfHwgJyUnLFxuICAgICAgICAgICAgdGhlaXJFZGdlWm9uZSxcblxuICAgICAgICAgICAgLy8gQWxpZ25lZCB0byBhbiBlZGdlLCAqb3V0c2lkZSogb2YgdGhlIHRhcmdldC5cbiAgICAgICAgICAgIC8vIEEgbm9ybWFsIGFsaWduIGFzIGEgY29tYm8gZHJvcGRvd24gbWlnaHQgcmVxdWVzdFxuICAgICAgICAgICAgZWRnZUFsaWduZWQgICAgIDogKG91ckVkZ2Vab25lICYgMSkgPT09ICh0aGVpckVkZ2Vab25lICYgMSkgJiYgb3VyRWRnZVpvbmUgIT09IHRoZWlyRWRnZVpvbmVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gVGhlIG9wcG9zaXRlIG9mIHBhcnNlRWRnZUFsaWduLCBhbmQgaXQgaGFzIHRvIGZsaXAgdGhlIGVkZ2VzXG4gICAgY3JlYXRlUmV2ZXJzZWRFZGdlQWxpZ24gPSBlZGdlcyA9PiB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBvdXJFZGdlICAgPSBvcHBvc2l0ZUVkZ2VbZWRnZXMub3VyRWRnZV0sXG4gICAgICAgICAgICB0aGVpckVkZ2UgPSBvcHBvc2l0ZUVkZ2VbZWRnZXMudGhlaXJFZGdlXTtcblxuICAgICAgICAvLyByZWNvbnN0aXR1dGUgYSBydWxlIHN0cmluZyB3aXRoIHRoZSBlZGdlcyBmbGlwcGVkIHRvIHRoZSBvcHBvc2l0ZSBzaWRlc1xuICAgICAgICByZXR1cm4gYCR7b3VyRWRnZX0ke2VkZ2VzLm91ckVkZ2VPZmZzZXR9JHtlZGdlcy5vdXJFZGdlVW5pdH0tJHt0aGVpckVkZ2V9JHtlZGdlcy50aGVpckVkZ2VPZmZzZXR9JHtlZGdlcy50aGVpckVkZ2VVbml0fWBcblxuICAgIH0sXG4gICAgZ2V0RWxSZWN0ID0gZWwgPT4ge1xuICAgICAgICBjb25zdCByID0gZWwgaW5zdGFuY2VvZiBET01SZWN0ID8gZWwgOiAoZWw/Lm5vZGVUeXBlID09PSAxID8gZWwgOiB0eXBlb2YgZWwgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwpIDogbnVsbCk/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIC8vIENvbnZlcnQgRE9NUmVjdCBpbnRvIFJlY3RhbmdsZVxuICAgICAgICByZXR1cm4gciAmJiBuZXcgUmVjdGFuZ2xlKHIueCwgci55LCByLndpZHRoLCByLmhlaWdodCk7XG4gICAgfSxcbiAgICBvcHBvc2l0ZUVkZ2UgPSB7XG4gICAgICAgIHQgOiAnYicsXG4gICAgICAgIHIgOiAnbCcsXG4gICAgICAgIGIgOiAndCcsXG4gICAgICAgIGwgOiAncidcbiAgICB9LFxuICAgIGVkZ2Vab25lID0ge1xuICAgICAgICB0IDogMCxcbiAgICAgICAgciA6IDEsXG4gICAgICAgIGIgOiAyLFxuICAgICAgICBsIDogM1xuICAgIH0sXG4gICAgem9uZU5hbWVzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgICB6b25lRWRnZXMgPSBbJ3QnLCAncicsICdiJywgJ2wnXSxcbiAgICB6b25lRGltZW5zaW9uID0gWyd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICB6b25lQ29vcmQgPSBbMCwgMSwgMCwgMV0sXG4gICAgemVyb01hcmdpbnMgPSBbMCwgMCwgMCwgMF0sXG4gICAgZWRnZUFsaWduUkUgPSAvXihbdHJibGNdKShcXGQqKSglfHB4KT8tKFt0cmJsY10pKFxcZCopKCV8cHgpPyQvO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBET01SZWN0IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLlJlY3RhbmdsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuUmVjdGFuZ2xlJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBtaW5IZWlnaHQ9bnVsbFxuICAgICAqL1xuICAgIG1pbkhlaWdodCA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gbWluV2lkdGg9bnVsbFxuICAgICAqL1xuICAgIG1pbldpZHRoID0gbnVsbFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHJlY3QxIGRvZXMgbm90IGhhdmUgYW4gaW50ZXJzZWN0aW9uIHdpdGggcmVjdDJcbiAgICAgKiAhaW5jbHVkZXMoKSBpcyB0cnVlIGZvciBpbnRlcnNlY3Rpb25zIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZXhjbHVkZXMocmVjdDEsIHJlY3QyKSB7XG4gICAgICAgIHJldHVybiByZWN0MS5ib3R0b20gPCByZWN0Mi50b3AgICAgIC8vIHJlY3QyIGlzIGJlbG93IHJlY3QxXG4gICAgICAgICAgICB8fCByZWN0MS5sZWZ0ICAgPiByZWN0Mi5yaWdodCAgIC8vIHJlY3QyIGlzIGxlZnQgb2YgcmVjdDFcbiAgICAgICAgICAgIHx8IHJlY3QxLnJpZ2h0ICA8IHJlY3QyLmxlZnQgICAgLy8gcmVjdDIgaXMgcmlnaHQgb2YgcmVjdDFcbiAgICAgICAgICAgIHx8IHJlY3QxLnRvcCAgICA+IHJlY3QyLmJvdHRvbTsgLy8gcmVjdDIgaXMgYWJvdmUgcmVjdDFcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvdmVybGFwcGluZyBhcmVhIG9mIHJlY3QxICYgcmVjdDIgYXMgYSBuZXcgUmVjdGFuZ2xlXG4gICAgICogQHBhcmFtIHtET01SZWN0fE5lby51dGlsLlJlY3RhbmdsZX0gcmVjdDFcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3R8TmVvLnV0aWwuUmVjdGFuZ2xlfSByZWN0MlxuICAgICAqIEByZXR1cm5zIHtOZW8udXRpbC5SZWN0YW5nbGV8bnVsbH0gVGhlIGludGVyc2VjdGluZyByZWN0XG4gICAgICovXG4gICAgc3RhdGljIGdldEludGVyc2VjdGlvbihyZWN0MSwgcmVjdDIpIHtcbiAgICAgICAgbGV0IHggICAgICA9IE1hdGgubWF4KHJlY3QxLngsICAgICAgcmVjdDIueCksXG4gICAgICAgICAgICB5ICAgICAgPSBNYXRoLm1heChyZWN0MS55LCAgICAgIHJlY3QyLnkpLFxuICAgICAgICAgICAgcmlnaHQgID0gTWF0aC5taW4ocmVjdDEucmlnaHQsICByZWN0Mi5yaWdodCksXG4gICAgICAgICAgICBib3R0b20gPSBNYXRoLm1pbihyZWN0MS5ib3R0b20sIHJlY3QyLmJvdHRvbSksXG4gICAgICAgICAgICB3aWR0aCAgPSBNYXRoLm1heCgwLCByaWdodCAgLSB4KSxcbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KDAsIGJvdHRvbSAtIHkpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCAxIHx8IHdpZHRoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHJlY3QyIGlzIGZ1bGx5IGNvbnRhaW5lZCBpbnNpZGUgcmVjdDFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDJcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW5jbHVkZXMocmVjdDEsIHJlY3QyKSB7XG4gICAgICAgIHJldHVybiByZWN0MS5ib3R0b20gPj0gcmVjdDIuYm90dG9tXG4gICAgICAgICAgICAmJiByZWN0MS5sZWZ0ICAgPD0gcmVjdDIubGVmdFxuICAgICAgICAgICAgJiYgcmVjdDEucmlnaHQgID49IHJlY3QyLnJpZ2h0XG4gICAgICAgICAgICAmJiByZWN0MS50b3AgICAgPD0gcmVjdDIudG9wO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiByZWN0MiBpcyBub3QgY29udGFpbmVkIGluc2lkZSByZWN0MS5cbiAgICAgKiBUaGlzIGNvdWxkIGJlIGFuIGludGVyc2VjdGlvbiBvciBiZWluZyBmdWxseSBleGNsdWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdDJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2lkZSBib3R0b20sIGxlZnQsIHJpZ2h0IG9yIHRvcFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBsZWF2ZXNTaWRlKHJlY3QxLCByZWN0Miwgc2lkZSkge1xuICAgICAgICBpZiAoUmVjdGFuZ2xlLmluY2x1ZGVzKHJlY3QxLCByZWN0MikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWRlID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3QxLmJvdHRvbSA8IHJlY3QyLmJvdHRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWRlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZWN0MS5sZWZ0ID4gcmVjdDIubGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWRlID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdDEucmlnaHQgPCByZWN0Mi5yaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWRlID09PSAndG9wJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3QxLnRvcCA+IHJlY3QyLnRvcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkanVzdHMgYSBET01SZWN0IG9iamVjdCB0byBhIG5ldyBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWN0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gW3g9bnVsbF1cbiAgICAgKiBAcGFyYW0ge051bWJlcnxudWxsfSBbeT1udWxsXVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG1vdmVkUmVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBtb3ZlQnkocmVjdCwgeD1udWxsLCB5PW51bGwpIHtcbiAgICAgICAgbGV0IG1vdmVkUmVjdCA9IHsuLi5yZWN0fTtcblxuICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKHgpKSB7XG4gICAgICAgICAgICBtb3ZlZFJlY3QubGVmdCAgKz0geDtcbiAgICAgICAgICAgIG1vdmVkUmVjdC5yaWdodCArPSB4O1xuICAgICAgICAgICAgbW92ZWRSZWN0LnggICAgICs9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKHkpKSB7XG4gICAgICAgICAgICBtb3ZlZFJlY3QuYm90dG9tICs9IHk7XG4gICAgICAgICAgICBtb3ZlZFJlY3QudG9wICAgICs9IHk7XG4gICAgICAgICAgICBtb3ZlZFJlY3QueSAgICAgICs9IHk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW92ZWRSZWN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkanVzdHMgYSBET01SZWN0IG9iamVjdCB0byBhIG5ldyBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWN0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gW3g9bnVsbF1cbiAgICAgKiBAcGFyYW0ge051bWJlcnxudWxsfSBbeT1udWxsXVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG1vdmVkUmVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBtb3ZlVG8ocmVjdCwgeD1udWxsLCB5PW51bGwpIHtcbiAgICAgICAgbGV0IG1vdmVkUmVjdCA9IHsuLi5yZWN0fTtcblxuICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKHgpKSB7XG4gICAgICAgICAgICBtb3ZlZFJlY3QubGVmdCAgPSB4O1xuICAgICAgICAgICAgbW92ZWRSZWN0LnJpZ2h0ID0geCArIG1vdmVkUmVjdC53aWR0aDtcbiAgICAgICAgICAgIG1vdmVkUmVjdC54ICAgICA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKHkpKSB7XG4gICAgICAgICAgICBtb3ZlZFJlY3QuYm90dG9tID0geSArIG1vdmVkUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICBtb3ZlZFJlY3QudG9wICAgID0geTtcbiAgICAgICAgICAgIG1vdmVkUmVjdC55ICAgICAgPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1vdmVkUmVjdDtcbiAgICB9XG5cbiAgICBzZXQgYm90dG9tKGIpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgKz0gYiAtIHRoaXMuYm90dG9tO1xuICAgIH1cbiAgICBnZXQgYm90dG9tKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuYm90dG9tO1xuICAgIH1cblxuICAgIHNldCByaWdodChyKSB7XG4gICAgICAgIHRoaXMud2lkdGggKz0gciAtIHRoaXMucmlnaHQ7XG4gICAgfVxuICAgIGdldCByaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJpZ2h0O1xuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgeCB3aXRob3V0IG1vdmluZyB0aGUgUmVjdGFuZ2xlLiBUaGUgbGVmdCBzaWRlIG1vdmVzIGFuZCB0aGUgcmlnaHQgc2lkZSBkb2Vzbid0XG4gICAgY2hhbmdlWCh4KSB7XG4gICAgICAgIGNvbnN0IHdpZHRoRGVsdGEgPSB0aGlzLnggLSB4O1xuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMud2lkdGggKz0gd2lkdGhEZWx0YTtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHkgd2l0aG91dCBtb3ZpbmcgdGhlIFJlY3RhbmdsZS4gVGhlIHRvcCBzaWRlIG1vdmVzIGFuZCB0aGUgYm90dG9tIHNpZGUgZG9lc24ndFxuICAgIGNoYW5nZVkoeSkge1xuICAgICAgICBjb25zdCBoZWlnaHREZWx0YSA9IHRoaXMueSAtIHk7XG5cbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5oZWlnaHQgKz0gaGVpZ2h0RGVsdGE7XG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBSZWN0YW5nbGUuY2xvbmUodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb25lKHIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY3RhbmdsZShyLngsIHIueSwgci53aWR0aCwgci5oZWlnaHQpO1xuXG4gICAgICAgIHJlc3VsdC5taW5XaWR0aCA9IHIubWluV2lkdGg7XG4gICAgICAgIHJlc3VsdC5taW5IZWlnaHQgPSByLm1pbkhlaWdodDtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGludGVyc2VjdHMob3RoZXIpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvdGhlci5oZWlnaHQgJiYgb3RoZXIud2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgICAgbGVmdCAgID0gTWF0aC5tYXgobWUueCwgb3RoZXIueCksXG4gICAgICAgICAgICAgICAgdG9wICAgID0gTWF0aC5tYXgobWUueSwgb3RoZXIueSksXG4gICAgICAgICAgICAgICAgcmlnaHQgID0gTWF0aC5taW4obWUueCArIG1lLndpZHRoLCBvdGhlci54ICsgb3RoZXIud2lkdGgpLFxuICAgICAgICAgICAgICAgIGJvdHRvbSA9IE1hdGgubWluKG1lLnkgKyBtZS5oZWlnaHQsIG90aGVyLnkgKyBvdGhlci5oZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAobGVmdCA+PSByaWdodCB8fCB0b3AgPj0gYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSdyZSBkZWFsaW5nIHdpdGggYSBwb2ludCBoZXJlIC0gemVybyBkaW1lbnNpb25zXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChvdGhlci54ID49IG1lLnggJiYgb3RoZXIueSA+PSBtZS55ICYmIG90aGVyLnJpZ2h0IDw9IG1lLnJpZ2h0ICYmIG90aGVyLmJvdHRvbSA8PSBtZS5ib3R0b20pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBvdGhlciBSZWN0YW5nbGUgaXMgZnVsbHkgY29udGFpbmVkIGluc2lkZSB0aGlzIFJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlclxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGNvbnRhaW5zKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA+PSBvdGhlci5ib3R0b21cbiAgICAgICAgICAgICYmIHRoaXMubGVmdCAgIDw9IG90aGVyLmxlZnRcbiAgICAgICAgICAgICYmIHRoaXMucmlnaHQgID49IG90aGVyLnJpZ2h0XG4gICAgICAgICAgICAmJiB0aGlzLnRvcCAgICA8PSBvdGhlci50b3A7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNsb25lIG9mIHRoaXMgUmVjdGFuZ2xlIGV4cGFuZGVkIGFjY29yZGluZyB0byB0aGUgZWRnZXMgYXJyYXkuXG4gICAgICogQHBhcmFtIHtOdW1iZXJbXX0gZWRnZXNcbiAgICAgKiBAcmV0dXJucyB7UmVjdGFuZ2xlfVxuICAgICAqL1xuICAgIGV4cGFuZChlZGdlcykge1xuICAgICAgICBlZGdlcyA9IHBhcnNlRWRnZVZhbHVlKGVkZ2VzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy54IC0gZWRnZXNbM10sIHRoaXMueSAtIGVkZ2VzWzBdLCB0aGlzLndpZHRoICsgZWRnZXNbMV0gKyBlZGdlc1szXSwgdGhpcy5oZWlnaHQgKyBlZGdlc1swXSArIGVkZ2VzWzJdKTtcbiAgICB9XG5cbiAgICBtb3ZlQnkoeCA9IDAsIHkgPSAwKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2xvbmUoKTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQueCArPSB4O1xuICAgICAgICByZXN1bHQueSArPSB5O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoaXMgUmVjdGFuZ2xlIGNvbXBsZXRlbHkgY29udGFpbnMgdGhlIG90aGVyIFJlY3RhbmdsZVxuICAgICAqIEBwYXJhbSB7UmVjdGFuZ2xlfSBvdGhlclxuICAgICAqL1xuICAgIGNvbnRhaW5zKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmluY2x1ZGVzKHRoaXMsIG90aGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGlzIFJlY3RhbmdsZSBjb25zdHJhaW5lZCB0byBmaXQgd2l0aGluIHRoZSBwYXNzZWQgUmVjdGFuZ2xlXG4gICAgICogQHBhcmFtIHtSZWN0YW5nbGV9IGNvbnN0cmFpblRvXG4gICAgICogQHJldHVybnMge1JlY3RhbmdsZXxCb29sZWFufSBBIG5ldyBSZWN0YW5nbGUgY29uc3RyYWluZWQgdG8gdGUgcGFzc2VkIFJlY3RhbmdsZSwgb3IgZmFsc2UgaWYgaXQgY291bGQgbm90IGJlIGNvbnN0cmFpbmVkLlxuICAgICAqL1xuICAgIGNvbnN0cmFpblRvKGNvbnN0cmFpblRvKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbWluV2lkdGggID0gbWUubWluV2lkdGggIHx8IG1lLndpZHRoLFxuICAgICAgICAgICAgbWluSGVpZ2h0ID0gbWUubWluSGVpZ2h0IHx8IG1lLmhlaWdodDtcblxuICAgICAgICAvLyBOb3QgcG9zc2libGUsIGV2ZW4gd2hlbiBzaHJ1bmsgdG8gbWluaW1hXG4gICAgICAgIGlmIChtaW5IZWlnaHQgPiBjb25zdHJhaW5Uby5oZWlnaHQgfHwgbWluV2lkdGggPiBjb25zdHJhaW5Uby53aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgZG8gbm90IG11dGF0ZSB0aGlzIFJlY3RhbmdsZSwgYnV0IHJldHVybiBhIGNvbnN0cmFpbmVkIHZlcnNpb25cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbWUuY2xvbmUoKTtcblxuICAgICAgICAvLyBUcmFuc2xhdGUgcmVzdWx0IHNvIHRoYXQgdGhlIHRvcCBhbmQgbGVmdCBhcmUgdmlzaWJsZVxuICAgICAgICByZXN1bHQueCA9IE1hdGgubWF4KG1lLnggKyBNYXRoLm1pbihjb25zdHJhaW5Uby5yaWdodCAgLSByZXN1bHQucmlnaHQsICAwKSwgY29uc3RyYWluVG8ueCk7XG4gICAgICAgIHJlc3VsdC55ID0gTWF0aC5tYXgobWUueSArIE1hdGgubWluKGNvbnN0cmFpblRvLmJvdHRvbSAtIHJlc3VsdC5ib3R0b20sIDApLCBjb25zdHJhaW5Uby55KTtcblxuICAgICAgICAvLyBQdWxsIGluIGFueSByZXN1bHRpbmcgb3ZlcmZsb3dcbiAgICAgICAgcmVzdWx0LmJvdHRvbSA9IE1hdGgubWluKHJlc3VsdC5ib3R0b20sIGNvbnN0cmFpblRvLmJvdHRvbSk7XG4gICAgICAgIHJlc3VsdC5yaWdodCA9IE1hdGgubWluKHJlc3VsdC5yaWdodCwgY29uc3RyYWluVG8ucmlnaHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYWxpZ25UbyhhbGlnbikge1xuICAgICAgICBjb25zdFxuICAgICAgICAgICAgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0cmFpblRvLCAgICAvLyBFbGVtZW50IG9yIFJlY3RhbmdsZSByZXN1bHQgbXVzdCBmaXQgaW50b1xuICAgICAgICAgICAgICAgIHRhcmdldCwgICAgICAgICAvLyBFbGVtZW50IG9yIFJlY3RhbmdsZSB0byBhbGlnbiB0b1xuICAgICAgICAgICAgICAgIGVkZ2VBbGlnbiwgICAgICAvLyB0NTAtYjUwIHR5cGUgc3RyaW5nXG4gICAgICAgICAgICAgICAgYXhpc0xvY2ssICAgICAgIC8vIHRydWUgZm9yIGZsaXAsICdmbGV4aWJsZScgZm9yIGZsaXAsIHRoZW4gdHJ5IHRoZSBvdGhlciBlZGdlc1xuICAgICAgICAgICAgICAgIG9mZnNldCwgICAgICAgICAvLyBGaW5hbCBbeCwgeV0gdmVjdG9yIHRvIG1vdmUgdGhlIHJlc3VsdCBieS5cbiAgICAgICAgICAgICAgICBtYXRjaFNpemVcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgID0gYWxpZ24sXG4gICAgICAgICAgICB0YXJnZXRNYXJnaW4gICA9IGFsaWduLnRhcmdldE1hcmdpbiA/IHBhcnNlRWRnZVZhbHVlKGFsaWduLnRhcmdldE1hcmdpbikgOiB6ZXJvTWFyZ2lucyxcbiAgICAgICAgICAgIHRhcmdldFJlY3QgICAgID0gZ2V0RWxSZWN0KHRhcmdldCksXG4gICAgICAgICAgICBjb25zdHJhaW5SZWN0ICA9IGdldEVsUmVjdChjb25zdHJhaW5UbyksXG4gICAgICAgICAgICBlZGdlcyAgICAgICAgICA9IHBhcnNlRWRnZUFsaWduKGVkZ2VBbGlnbiksXG4gICAgICAgICAgICBtYXRjaERpbWVuc2lvbiA9IHpvbmVEaW1lbnNpb25bZWRnZXMudGhlaXJFZGdlWm9uZSAmIDFdO1xuXG4gICAgICAgIGxldCByZXN1bHQgPSBtZS5jbG9uZSgpO1xuXG4gICAgICAgIGlmIChtYXRjaFNpemUpIHtcbiAgICAgICAgICAgIHJlc3VsdFttYXRjaERpbWVuc2lvbl0gPSB0YXJnZXRSZWN0W21hdGNoRGltZW5zaW9uXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE11c3QgZG8gdGhlIGNhbGN1bGF0aW9ucyBhZnRlciB0aGUgYWxpZ25lZCBzaWRlIGhhcyBiZWVuIG1hdGNoZWQgaW4gc2l6ZSBpZiByZXF1ZXN0ZWQuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBteVBvaW50ICAgICA9IHJlc3VsdC5nZXRBbmNob3JQb2ludChlZGdlcy5vdXJFZGdlWm9uZSwgZWRnZXMub3VyRWRnZU9mZnNldCwgZWRnZXMub3VyRWRnZVVuaXQpLFxuICAgICAgICAgICAgdGFyZ2V0UG9pbnQgPSB0YXJnZXRSZWN0LmdldEFuY2hvclBvaW50KGVkZ2VzLnRoZWlyRWRnZVpvbmUsIGVkZ2VzLnRoZWlyRWRnZU9mZnNldCwgZWRnZXMudGhlaXJFZGdlVW5pdCwgdGFyZ2V0TWFyZ2luKSxcbiAgICAgICAgICAgIHZlY3RvciAgICAgID0gW3RhcmdldFBvaW50WzBdIC0gbXlQb2ludFswXSwgdGFyZ2V0UG9pbnRbMV0gLSBteVBvaW50WzFdXTtcblxuICAgICAgICByZXN1bHQgPSByZXN1bHQubW92ZUJ5KHZlY3Rvcik7XG5cbiAgICAgICAgLy8gQSB1c2VmdWwgcHJvcGVydHkgaW4gdGhlIHJlc3VsdGluZyByZWN0YW5nbGUgd2hpY2ggc3BlY2lmaWVzIHdoaWNoIHpvbmUgb2YgdGhlIHRhcmdldFxuICAgICAgICAvLyBJdCBpcyBiZWluZyBwbGFjZXMgaW4sIFQsUixCIG9yIEwgLSAwLCAxLCAyLCAzXG4gICAgICAgIC8vIFNvbWUgY29kZSBtYXkgd2FudCB0byB0cmVhdCBET00gZWxlbWVudHMgZGlmZmVyZW50bHkgZGVwZW5kaW5nIG9uIHRoZSB6b25lXG4gICAgICAgIHJlc3VsdC56b25lID0gZWRnZXMudGhlaXJFZGdlWm9uZTtcbiAgICAgICAgcmVzdWx0LnBvc2l0aW9uID0gem9uZU5hbWVzW3Jlc3VsdC56b25lXTtcblxuICAgICAgICAvLyBOb3cgd2UgY3JlYXRlIHRoZSBmb3VyIFJlY3RhbmdsZXMgYXJvdW5kIHRoZSB0YXJnZXQsIGludG8gd2hpY2ggd2UgbWF5IGJlIGNvbnN0cmFpbmVkXG4gICAgICAgIC8vIFpvbmVzIFQsUixCLEwgMCA5LCAxLCAyLCAzOlxuICAgICAgICAvLyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgIC8vIHwgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rIHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIF4gICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgIF4gICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgfCAgPC0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tWm9uZSAwLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLT4gICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgKy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rIHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgKy0tLS0tLS0tLS0tLS0tLS0tLS0tKyB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICB8IHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgIHwgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgIFpvbmUgMyAgICAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgfCB8ICAgICAgICAgIFpvbmUgMSAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICB8IHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgIHwgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgKy0tLS0tLS0tLS0tLS0tLS0tLS0tKyB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8ICsrLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKyB8XG4gICAgICAgIC8vIHwgfCAgICAgICAgICB8ICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgfCAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgfCAgPC0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS1ab25lIDItLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tPiB8IHxcbiAgICAgICAgLy8gfCB8ICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgfFxuICAgICAgICAvLyB8IHwgICAgICAgICAgdiAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgdiAgICAgICAgICAgICAgfCB8XG4gICAgICAgIC8vIHwgKystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rIHxcbiAgICAgICAgLy8gKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgICAgICBpZiAoY29uc3RyYWluUmVjdCAmJiAhY29uc3RyYWluUmVjdC5jb250YWlucyhyZXN1bHQpKSB7XG4gICAgICAgICAgICAvLyBUaGV5IGFza2VkIHRvIG92ZXJsYXAgdGhlIHRhcmdldCwgZm9yIGV4YW1wbGUgdDAtdDBcbiAgICAgICAgICAgIC8vIEluIHRoZXNlIGNhc2VzLCB3ZSBqdXN0IHJldHVybiB0aGUgcmVzdWx0XG4gICAgICAgICAgICBpZiAodGFyZ2V0UmVjdC5pbnRlcnNlY3RzKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSB6b25lIHdlIHRyeSB0byBmaXQgaW50byBmaXJzdCwgdGhlIG9uZSB0aGF0IHdhcyBhc2tlZCBmb3JcbiAgICAgICAgICAgIGxldCB6b25lID0gZWRnZXMudGhlaXJFZGdlWm9uZTtcblxuICAgICAgICAgICAgLy8gV2UgY3JlYXRlIGFuIGFycmF5IG9mIGZvdXIgcmVjdGFuZ2xlcyBpbnRvIHdoaWNoIHdlIHRyeSB0byBmaXQgd2l0aCBhcHByb3ByaWF0ZSBhbGlnbiBzcGVjcy5cbiAgICAgICAgICAgIC8vIFdlIG11c3Qgc3RhcnQgd2l0aCB0aGUgcmVxdWVzdGVkIHpvbmUsIHdoYXRldmVyIHRoYXQgaXMuXG4gICAgICAgICAgICBjb25zdCB6b25lc1RvVHJ5ID0gW3tcbiAgICAgICAgICAgICAgICB6b25lLFxuICAgICAgICAgICAgICAgIGVkZ2VBbGlnblxuICAgICAgICAgICAgfV07XG5cbiAgICAgICAgICAgIGlmIChheGlzTG9jaykge1xuICAgICAgICAgICAgICAgIC8vIEZsaXAgdG8gdGhlIG9wcG9zaXRlIHNpZGUgZm9yIHRoZSBzZWNvbmQgdHJ5LlxuICAgICAgICAgICAgICAgIC8vIFRoZSBhbGlnbm1lbnQgc3RyaW5nIGhhcyB0byBiZSByZXZlcnNlZFxuICAgICAgICAgICAgICAgIC8vIHNvIHIyMC1sMzAgaGFzIHRvIGJlY29tZSBsMjAtcjMwLlxuICAgICAgICAgICAgICAgIC8vIFRoZSBvdGhlciB0d28gem9uZXMgcmV2ZXJ0IHRvIGNlbnRlcmVkIHNvIGFyZSBlYXNpZXJcbiAgICAgICAgICAgICAgICB6b25lc1RvVHJ5WzFdID0ge1xuICAgICAgICAgICAgICAgICAgICB6b25lICAgICAgOiB6b25lID0gKHpvbmUgKyAyKSAlIDQsXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VBbGlnbiA6IGNyZWF0ZVJldmVyc2VkRWRnZUFsaWduKGVkZ2VzKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZhbGwgYmFjayB0byB0aGUgb3RoZXIgdHdvIHpvbmVzLlxuICAgICAgICAgICAgICAgIHpvbmVzVG9UcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHpvbmUgICAgICA6IHpvbmUgPSAoZWRnZXMudGhlaXJFZGdlWm9uZSArIDEpICUgNCxcbiAgICAgICAgICAgICAgICAgICAgZWRnZUFsaWduIDogYCR7b3Bwb3NpdGVFZGdlW3pvbmVFZGdlc1t6b25lXV19LSR7em9uZUVkZ2VzW3pvbmVdfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB6b25lc1RvVHJ5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB6b25lICAgICAgOiB6b25lID0gKGVkZ2VzLnRoZWlyRWRnZVpvbmUgKyAzKSAlIDQsXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VBbGlnbiA6IGAke29wcG9zaXRlRWRnZVt6b25lRWRnZXNbem9uZV1dfS0ke3pvbmVFZGdlc1t6b25lXX1gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBnbyB0aHJvdWdoIHRoZSBvdGhlciB6b25lcyBpbiBvcmRlclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHpvbmVzVG9UcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b25lICAgICAgOiB6b25lID0gKHpvbmUgKyAxKSAlIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlQWxpZ24gOiBgJHtvcHBvc2l0ZUVkZ2Vbem9uZUVkZ2VzW3pvbmVdXX0tJHt6b25lRWRnZXNbem9uZV19YFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29uc3RyYWludCBSZWN0YW5nbGUgZm9yIGVhY2ggem9uZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB6b25lc1RvVHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgY2xvbmUgdGhlIG91dGVyIGNvbnN0cmFpbmluZyByZWN0YW5nbGVcbiAgICAgICAgICAgICAgICAvLyBhbmQgbW92ZSBpdCBpbnRvIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGNvbnN0cmFpblJlY3QuY2xvbmUoKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoem9uZXNUb1RyeVtpXS56b25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB6b25lIGkyIGFib3ZlIHRoZSB0YXJnZXQgLSB6b25lIDAvVFxuICAgICAgICAgICAgICAgICAgICAgICAgYy5ib3R0b20gPSB0YXJnZXRSZWN0LnkgLSB0YXJnZXRNYXJnaW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHpvbmUgaXMgdG8gdGhlIHJpZ2h0IG9mIHRoZSB0YXJnZXQgLSB6b25lIDEvUlxuICAgICAgICAgICAgICAgICAgICAgICAgYy5jaGFuZ2VYKHRhcmdldFJlY3QucmlnaHQgKyB0YXJnZXRNYXJnaW5bMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB6b25lIGlzIGJlbG93IHRoZSB0YXJnZXQgLSB6b25lIDIvQlxuICAgICAgICAgICAgICAgICAgICAgICAgYy5jaGFuZ2VZKHRhcmdldFJlY3QuYm90dG9tICsgdGFyZ2V0TWFyZ2luWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgem9uZSBpcyB0byB0aGUgbGVmdCBvZiB0aGUgdGFyZ2V0IC0gem9uZSAzL0xcbiAgICAgICAgICAgICAgICAgICAgICAgIGMucmlnaHQgPSB0YXJnZXRSZWN0LnggLSB0YXJnZXRNYXJnaW5bM107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgem9uZXNUb1RyeVtpXS5jb25zdHJhaW5SZWN0ID0gYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTm93IHRyeSB0byBjb25zdHJhaW4gb3VyIHJlc3VsdCBpbnRvIGVhY2ggem9uZSdzIGNvbnN0cmFpbnRab25lXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHpvbmVzVG9UcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWRnZUFsaWduLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RyYWluUmVjdFxuICAgICAgICAgICAgICAgICAgICB9ICAgID0gem9uZXNUb1RyeVtpXSxcbiAgICAgICAgICAgICAgICAgICAgZWRnZSA9IHpvbmVFZGdlc1t6b25lXTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXRjaFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGFsaWduaW5nIHRvIHRoZSByZXF1ZXN0ZWQgZWRnZSwgb3IgaXQncyBvcHBvc2l0ZSBlZGdlIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2ggdGhhdCBlZGdlIHNpemUsIGVsc2UgcmV2ZXJ0IGl0IHRvIG91ciBvd24gc2l6ZVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbWF0Y2hEaW1lbnNpb25dID0gZWRnZSA9PT0gZWRnZXMudGhlaXJFZGdlIHx8IGVkZ2UgPT0gb3Bwb3NpdGVFZGdlW2VkZ2VzLnRoZWlyRWRnZV0gPyB0YXJnZXRSZWN0W21hdGNoRGltZW5zaW9uXSA6IG1lW21hdGNoRGltZW5zaW9uXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBEbyBhIHNpbXBsZSBhbGlnbiB0byB0aGUgY3VycmVudCBlZGdlXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmFsaWduVG8oe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgOiB0YXJnZXRSZWN0LFxuICAgICAgICAgICAgICAgICAgICBlZGdlQWxpZ24sXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE1hcmdpblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNvbHV0aW9uID0gcmVzdWx0LmNvbnN0cmFpblRvKGNvbnN0cmFpblJlY3QpO1xuXG4gICAgICAgICAgICAgICAgLy8gQXMgc29vbiBhcyB3ZSBmaW5kIGEgem9uZSBpbnRvIHdoaWNoIHRoZSByZXN1bHQgaXMgd2lsbGluZyB0byBiZSBjb25zdHJhaW5lZC4gcmV0dXJuIGl0XG4gICAgICAgICAgICAgICAgaWYgKHNvbHV0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvbHV0aW9uLnpvbmUgPSB6b25lO1xuICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbi5wb3NpdGlvbiA9IHpvbmVOYW1lc1t6b25lXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvbHV0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgY29uZmlndXJhYmxlIGZpbmlzaGluZyB0b3VjaC5cbiAgICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICAgICAgcmVzdWx0Lm1vdmVCeShvZmZzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXRBbmNob3JQb2ludChlZGdlWm9uZSwgZWRnZU9mZnNldCwgZWRnZVVuaXQsIG1hcmdpbiA9IGVtcHR5QXJyYXkpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgLy8gRWRnZSB6b25lcyBnbyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRcbiAgICAgICAgLy8gRWFjaCBvbmUgY2FsY3VsYXRlcyB0aGUgc3RhcnQgcG9pbnQgb2YgdGhhdCBlZGdlIHRoZW4gbW92ZXMgYWxvbmcgaXQgYnlcbiAgICAgICAgLy8gdGhlIGVkZ2VPZmZzZXQsIHRoZW4gbW92ZXMgKmF3YXkqIGZyb20gaXQgYnkgdGhlIG1hcmdpbiBmb3IgdGhhdCBlZGdlIGlmIHRoZXJlJ3MgYSBtYXJnaW4uXG4gICAgICAgIHN3aXRjaCAoZWRnZVpvbmUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbbWUueCwgbWUueSAtIChtYXJnaW5bMF0gfHwgMCksIG1lLndpZHRoLCAwXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbbWUueCArIG1lLndpZHRoICsgKG1hcmdpblsxXSB8fCAwKSwgbWUueSwgbWUuaGVpZ2h0LCAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbbWUueCwgbWUueSArIG1lLmhlaWdodCArIChtYXJnaW5bMl0gfHwgMCksIG1lLndpZHRoLCAwXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbbWUueCAtIChtYXJnaW5bM10gfHwgMCksIG1lLnksIG1lLmhlaWdodCwgMV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W3Jlc3VsdFszXV0gKz0gZWRnZVVuaXQgPT09ICclJyA/IHJlc3VsdFsyXSAvIDEwMCAqIGVkZ2VPZmZzZXQgOiBlZGdlT2Zmc2V0O1xuICAgICAgICByZXN1bHQubGVuZ3RoID0gMjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIG90aGVyIGluc3RhbmNlb2YgRE9NUmVjdCAmJlxuICAgICAgICAgICAgb3RoZXIueCA9PT0gdGhpcy54ICYmXG4gICAgICAgICAgICBvdGhlci55ID09PSB0aGlzLnkgJiZcbiAgICAgICAgICAgIG90aGVyLmhlaWdodCA9PT0gdGhpcy5oZWlnaHQgJiZcbiAgICAgICAgICAgIG90aGVyLndpZHRoID09PSB0aGlzLndpZHRoO1xuICAgIH1cblxuICAgIC8vIEZvciBkZWJ1Z2dpbmcgcHVycG9zZXMgb25seVxuICAgIHNob3coY29sb3IgPSAncmVkJykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYuc3R5bGUgPSBgXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgke3RoaXMueH1weCwgJHt0aGlzLnl9cHgsIDApO1xuICAgICAgICAgICAgaGVpZ2h0OiR7dGhpcy5oZWlnaHR9cHg7XG4gICAgICAgICAgICB3aWR0aDoke3RoaXMud2lkdGh9cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7Y29sb3J9XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkaXYucmVtb3ZlKCksIDMwMDAwKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIEpTT04uc3RyaW5naWZ5KHRoaXMpLCB3ZSB3YW50IHRvIGFkZCBtaW5IZWlnaHQgJiBtaW5XaWR0aCB0byB0aGUgb3V0cHV0LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCB7Ym90dG9tLCBoZWlnaHQsIGxlZnQsIG1pbkhlaWdodCwgbWluV2lkdGgsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5fSA9IHRoaXM7XG4gICAgICAgIHJldHVybiB7Ym90dG9tLCBoZWlnaHQsIGxlZnQsIG1pbkhlaWdodCwgbWluV2lkdGgsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5fVxuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5TdHJpbmdcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgU3RyaW5nVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09iamVjdH0gY2hhckVudGl0eU1hcFxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgY2hhckVudGl0eU1hcCA9IHtcbiAgICAgICAgJyYnIDogJyZhbXA7JyxcbiAgICAgICAgJzwnIDogJyZsdDsnLFxuICAgICAgICAnPicgOiAnJmd0OycsXG4gICAgICAgICdcIicgOiAnJnF1b3Q7JyxcbiAgICAgICAgJ1xcJyc6ICcmYXBvczsnLFxuICAgICAgICAnJCcgOiAnJmRvbGxhcjsnLFxuICAgICAgICAnXFxcXCc6ICcmYnNvbDsnLFxuICAgICAgICAnLycgOiAnJnNvbDsnXG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gY2hhclBhdHRlcm5cbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIGNoYXJQYXR0ZXJuID0gL1smPD5cIickXFxcXF0vZ1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZW50aXR5UGF0dGVyblxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZW50aXR5UGF0dGVybiA9IC8oJmFtcDspfCgmbHQ7KXwoJmd0Oyl8KCZxdW90Oyl8KCZhcG9zOyl8KCZkb2xsYXI7KXwoJmJzb2w7KXwoJnNvbDspL2dcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuU3RyaW5nJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5TdHJpbmcnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXNjYXBlIEhUTUwgc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIGVzY2FwZUh0bWwodmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpczsgLy8gaW5zaWRlIGEgc3RhdGljIG1ldGhvZCwgd2UgYXJlIHBvaW50aW5nIHRvIHRoZSBjbGFzcyBwcm90b3R5cGVcblxuICAgICAgICBpZiAoIU5lby5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UobWUuY2hhclBhdHRlcm4sIG1lLmdldEVudGl0eUZyb21DaGFyLmJpbmQobWUpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjaGFyIGVxdWl2YWxlbnQgb2YgYSBtYXBwZWQgZW50aXR5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudGl0eVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDaGFyRnJvbUVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgbGV0IG1hcHBlZENoYXIgPSBPYmplY3Qua2V5cyh0aGlzLmNoYXJFbnRpdHlNYXApLmZpbmQoa2V5ID0+IHRoaXMuY2hhckVudGl0eU1hcFtrZXldID09PSBlbnRpdHkpO1xuICAgICAgICByZXR1cm4gbWFwcGVkQ2hhciB8fCBlbnRpdHlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZW50aXR5IGVxdWl2YWxlbnQgb2YgYSBtYXBwZWQgY2hhclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjaGFyXG4gICAgICovXG4gICAgc3RhdGljIGdldEVudGl0eUZyb21DaGFyKGNoYXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhckVudGl0eU1hcFtjaGFyXSB8fCBjaGFyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5lc2NhcGUgSFRNTCBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgdW5lc2NhcGVIdG1sKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7IC8vIGluc2lkZSBhIHN0YXRpYyBtZXRob2QsIHdlIGFyZSBwb2ludGluZyB0byB0aGUgY2xhc3MgcHJvdG90eXBlXG5cbiAgICAgICAgaWYgKCFOZW8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKG1lLmVudGl0eVBhdHRlcm4sIG1lLmdldENoYXJGcm9tRW50aXR5LmJpbmQobWUpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBhc3NlZCBzdHJpbmcgd2l0aCB0aGUgZmlyc3QgbGV0dGVyIHVuY2FwaXRhbGl6ZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMgIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIHVuY2FwaXRhbGl6ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWVbMF0udG9Mb3dlckNhc2UoKSArIHZhbHVlLnN1YnN0cmluZygxKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoU3RyaW5nVXRpbCk7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IERvbUFjY2VzcyAgICAgICAgICBmcm9tICcuLi9tYWluL0RvbUFjY2Vzcy5tanMnO1xuaW1wb3J0IERvbUV2ZW50cyAgICAgICAgICBmcm9tICcuLi9tYWluL0RvbUV2ZW50cy5tanMnO1xuaW1wb3J0IE1lc3NhZ2UgICAgICAgICAgICBmcm9tICcuL01lc3NhZ2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgUmVtb3RlTWV0aG9kQWNjZXNzIGZyb20gJy4vbWl4aW4vUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyc7XG5cbmNvbnN0IE5lb0NvbmZpZyAgICA9IE5lby5jb25maWcsXG4gICAgICBoYXNKc01vZHVsZXMgPSBOZW9Db25maWcuZW52aXJvbm1lbnQgPT09ICdkZXZlbG9wbWVudCcgfHwgTmVvQ29uZmlnLmVudmlyb25tZW50ID09PSAnZGlzdC9lc20nO1xuXG4vLyBVc2luZyA/LiBzaW5jZSBTV3MgZG8gbm90IGV4aXN0IGZvciBodHRwIChvbmx5IGh0dHBzKVxubmF2aWdhdG9yLnNlcnZpY2VXb3JrZXI/LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRyb2xsZXJjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbn0sIHtvbmNlOiB0cnVlfSk7XG5cbi8qKlxuICogVGhlIHdvcmtlciBtYW5hZ2VyIGxpdmVzIGluc2lkZSB0aGUgbWFpbiB0aHJlYWQgYW5kIGNyZWF0ZXMgdGhlIEFwcCwgRGF0YSAmIFZEb20gd29ya2VyLlxuICogQWxzbywgcmVzcG9uc2libGUgZm9yIHNlbmRpbmcgbWVzc2FnZXMgZnJvbSB0aGUgbWFpbiB0aHJlYWQgdG8gdGhlIGRpZmZlcmVudCB3b3JrZXJzLlxuICogQGNsYXNzIE5lby53b3JrZXIuTWFuYWdlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBNYW5hZ2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLk1hbmFnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuTWFuYWdlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFjdGl2ZVdvcmtlcnM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVXb3JrZXJzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGFwcE5hbWVzPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGFwcE5hbWVzOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY29uc3RydWN0ZWRUaHJlYWRzPTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3RydWN0ZWRUaHJlYWRzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1bT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaW4gY2FzZSB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHdpbmRvdy5TaGFyZWRXb3JrZXIuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNoYXJlZFdvcmtlcnNFbmFibGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNoYXJlZFdvcmtlcnNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdG8gc3RvcCB0aGUgd29ya2VyIGNvbW11bmljYXRpb24gaW4gY2FzZSB0aGVpciBjcmVhdGlvbiBmYWlsc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzdG9wQ29tbXVuaWNhdGlvbj1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdG9wQ29tbXVuaWNhdGlvbjogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGluIGNhc2UgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyB3aW5kb3cuV29ya2VyLlxuICAgICAgICAgKiBUaGUgbmVvLm1qcyBmcmFtZXdvcmsgaXMgbm90IGFibGUgdG8gcnVuIHdpdGhvdXQgd2ViIHdvcmtlcnMuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNoYXJlZFdvcmtlcnNFbmFibGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHdlYldvcmtlcnNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVzaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhcyBhbiB1bmlxdWUgd2luZG93IGlkZW50aWZpZXJcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB3aW5kb3dJZD1uZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3aW5kb3dJZDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250YWlucyB0aGUgZmlsZU5hbWVzIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gd29ya2Vyc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3b3JrZXJzOiB7XG4gICAgICAgICAgICBhcHA6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogaGFzSnNNb2R1bGVzID8gJ0FwcC5tanMnICAgIDogJ2FwcHdvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYW52YXM6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogaGFzSnNNb2R1bGVzID8gJ0NhbnZhcy5tanMnIDogJ2NhbnZhc3dvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGhhc0pzTW9kdWxlcyA/ICdEYXRhLm1qcycgICA6ICdkYXRhd29ya2VyLmpzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhc2s6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogaGFzSnNNb2R1bGVzID8gJ1Rhc2subWpzJyAgIDogJ3Rhc2t3b3JrZXIuanMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBoYXNKc01vZHVsZXMgPyAnVkRvbS5tanMnICAgOiAndmRvbXdvcmtlci5qcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIgY2FuIGJlIG51bGwgaW4gY2FzZSB3ZSBsb2FkIGEgcGFnZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgKiBvciBpbiBjYXNlIG9mIGEgZm9yY2UgcmVmcmVzaC5cbiAgICAgKiBTZWU6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zZXJ2aWNlLXdvcmtlcnMvI25hdmlnYXRvci1zZXJ2aWNlLXdvcmtlci1jb250cm9sbGVyXG4gICAgICogT25seSBpbiB0aGlzIGNhc2UgbWFpbi5hZGRvbi5TZXJ2aWNlV29ya2VyIHdpbGwgc3RvcmUgdGhlIGFjdGl2ZSByZWdpc3RyYXRpb24gb25jZSByZWFkeSBoZXJlLlxuICAgICAqIEBtZW1iZXIge1NlcnZpY2VXb3JrZXJ8bnVsbH0gc2VydmljZVdvcmtlcj1udWxsXG4gICAgICovXG4gICAgc2VydmljZVdvcmtlciA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZGV0ZWN0RmVhdHVyZXMoKTtcblxuICAgICAgICAhTmVvLmluc2lkZVdvcmtlciAmJiBtZS5jcmVhdGVXb3JrZXJzKCk7XG5cbiAgICAgICAgTmVvLndvcmtlcklkID0gJ21haW4nO1xuXG4gICAgICAgIG1lLnByb21pc2VzID0ge307XG5cbiAgICAgICAgbWUub24oe1xuICAgICAgICAgICAgJ21lc3NhZ2U6YWRkRG9tTGlzdGVuZXInICAgIDoge2ZuOiBEb21FdmVudHMuYWRkRG9tTGlzdGVuZXIsICAgICAgIHNjb3BlOiBEb21FdmVudHN9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6Z2V0T2Zmc2NyZWVuQ2FudmFzJzoge2ZuOiBEb21BY2Nlc3Mub25HZXRPZmZzY3JlZW5DYW52YXMsIHNjb3BlOiBEb21BY2Nlc3N9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6cmVhZERvbScgICAgICAgICAgIDoge2ZuOiBEb21BY2Nlc3Mub25SZWFkRG9tLCAgICAgICAgICAgIHNjb3BlOiBEb21BY2Nlc3N9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6cmVnaXN0ZXJSZW1vdGUnICAgIDoge2ZuOiBtZS5vblJlZ2lzdGVyUmVtb3RlLCAgICAgICAgICAgIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICAnbWVzc2FnZTp3b3JrZXJDb25zdHJ1Y3RlZCcgOiB7Zm46IG1lLm9uV29ya2VyQ29uc3RydWN0ZWQsICAgICAgICAgc2NvcGU6IG1lfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byBlYWNoIHdvcmtlciBkZWZpbmVkIGluc2lkZSB0aGUgdGhpcy53b3JrZXJzIGNvbmZpZy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgYnJvYWRjYXN0KG1zZykge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLndvcmtlcnMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoIShcbiAgICAgICAgICAgICAgICBuYW1lID09PSAnY2FudmFzJyAmJiAhTmVvQ29uZmlnLnVzZUNhbnZhc1dvcmtlciB8fFxuICAgICAgICAgICAgICAgIG5hbWUgPT09ICd0YXNrJyAgICYmICFOZW9Db25maWcudXNlVGFza1dvcmtlciAgIHx8XG4gICAgICAgICAgICAgICAgbmFtZSA9PT0gJ3Zkb20nICAgJiYgIU5lb0NvbmZpZy51c2VWZG9tV29ya2VyXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShuYW1lLCBtc2cpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB3ZWIgd29ya2VyIHVzaW5nIHRoZSBwYXNzZWQgb3B0aW9ucyBhcyB3ZWxsIGFzIGFkZGluZyBlcnJvciAmIG1lc3NhZ2UgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHJldHVybnMge1NoYXJlZFdvcmtlcnxXb3JrZXJ9XG4gICAgICovXG4gICAgY3JlYXRlV29ya2VyKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2ZpbGVOYW1lfSA9IG9wdHMsXG4gICAgICAgICAgICBmaWxlUGF0aCAgID0gKG9wdHMuYmFzZVBhdGggfHwgTmVvLmNvbmZpZy53b3JrZXJCYXNlUGF0aCkgKyBmaWxlTmFtZSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgPSBgbmVvbWpzLSR7ZmlsZU5hbWUuc3Vic3RyaW5nKDAsIGZpbGVOYW1lLmluZGV4T2YoJy4nKSkudG9Mb3dlckNhc2UoKX0td29ya2VyYCxcbiAgICAgICAgICAgIGlzU2hhcmVkICAgPSBtZS5zaGFyZWRXb3JrZXJzRW5hYmxlZCAmJiBOZW9Db25maWcudXNlU2hhcmVkV29ya2VycyxcbiAgICAgICAgICAgIGNscyAgICAgICAgPSBpc1NoYXJlZCA/IFNoYXJlZFdvcmtlciA6IFdvcmtlcixcbiAgICAgICAgICAgIHdvcmtlciAgICAgPSBoYXNKc01vZHVsZXNcbiAgICAgICAgICAgICAgICA/IG5ldyBjbHMoZmlsZVBhdGgsIHtuYW1lLCB0eXBlOiAnbW9kdWxlJ30pXG4gICAgICAgICAgICAgICAgOiBuZXcgY2xzKGZpbGVQYXRoLCB7bmFtZX0pO1xuXG4gICAgICAgIChpc1NoYXJlZCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5vbm1lc3NhZ2UgPSBtZS5vbldvcmtlck1lc3NhZ2UuYmluZChtZSk7XG4gICAgICAgIChpc1NoYXJlZCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5vbmVycm9yICAgPSBtZS5vbldvcmtlckVycm9yICAuYmluZChtZSk7XG5cbiAgICAgICAgbWUuYWN0aXZlV29ya2VycysrO1xuXG4gICAgICAgIHJldHVybiB3b3JrZXJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBjcmVhdGVXb3JrZXIgZm9yIGVhY2ggd29ya2VyIGluc2lkZSB0aGUgdGhpcy53b3JrZXJzIGNvbmZpZy5cbiAgICAgKi9cbiAgICBjcmVhdGVXb3JrZXJzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29uZmlnICAgICAgICAgICAgICAgPSBOZW8uY2xvbmUoTmVvQ29uZmlnLCB0cnVlKSxcbiAgICAgICAgICAgIHtoYXNoLCBocmVmLCBzZWFyY2h9ID0gbG9jYXRpb24sXG4gICAgICAgICAgICB7d2luZG93SWR9ICAgICAgICAgICA9IG1lLFxuICAgICAgICAgICAga2V5LCB2YWx1ZTtcblxuICAgICAgICAvLyByZW1vdmUgY29uZmlncyB3aGljaCBhcmUgbm90IHJlbGV2YW50IGZvciB0aGUgd29ya2VycyBzY29wZVxuICAgICAgICBkZWxldGUgY29uZmlnLmNlc2l1bUpzVG9rZW47XG5cbiAgICAgICAgLy8gcGFzcyB0aGUgaW5pdGlhbCBoYXNoIHZhbHVlIGFzIE5lby5jb25maWdzXG4gICAgICAgIGlmIChoYXNoKSB7XG4gICAgICAgICAgICBjb25maWcuaGFzaCA9IHtcbiAgICAgICAgICAgICAgICBoYXNoICAgICAgOiBEb21FdmVudHMucGFyc2VIYXNoKGhhc2guc3Vic3RyaW5nKDEpKSxcbiAgICAgICAgICAgICAgICBoYXNoU3RyaW5nOiBoYXNoLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgICAgICB3aW5kb3dJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLnVybCA9IHtocmVmLCBzZWFyY2h9O1xuXG4gICAgICAgIGZvciAoW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1lLndvcmtlcnMpKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnY2FudmFzJyAmJiAhY29uZmlnLnVzZUNhbnZhc1dvcmtlciB8fFxuICAgICAgICAgICAgICAgIGtleSA9PT0gJ3Rhc2snICAgJiYgIWNvbmZpZy51c2VUYXNrV29ya2VyICAgfHxcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd2ZG9tJyAgICYmICFjb25maWcudXNlVmRvbVdvcmtlclxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS53b3JrZXIgPSBtZS5jcmVhdGVXb3JrZXIodmFsdWUpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBlO1xuICAgICAgICAgICAgICAgIG1lLnN0b3BDb21tdW5pY2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShrZXksIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3Rlck5lb0NvbmZpZycsXG4gICAgICAgICAgICAgICAgZGF0YSAgOiB7Li4uY29uZmlnLCB3aW5kb3dJZH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRldGVjdEZlYXR1cmVzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lb0NvbmZpZy5oYXNNb3VzZUV2ZW50cyA9IG1hdGNoTWVkaWEoJyhwb2ludGVyOmZpbmUpJykubWF0Y2hlcztcbiAgICAgICAgTmVvQ29uZmlnLmhhc1RvdWNoRXZlbnRzID0gKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDApO1xuXG4gICAgICAgIC8vIFVzZWZ1bCBmb3Igc3R5bGluZ1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoTmVvQ29uZmlnLmhhc01vdXNlRXZlbnRzID8gJ25lby1tb3VzZScgOiAnbmVvLW5vLW1vdXNlJyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcbiAgICAgICAgICAgIG1lLndlYldvcmtlcnNFbmFibGVkID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBXZWIgV29ya2VycycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LlNoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgbWUuc2hhcmVkV29ya2Vyc0VuYWJsZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xXb3JrZXJ9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7V29ya2VyfVxuICAgICAqL1xuICAgIGdldFdvcmtlcihuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc2VydmljZScpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcj8uY29udHJvbGxlciB8fCB0aGlzLnNlcnZpY2VXb3JrZXJcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYW1lIGluc3RhbmNlb2YgV29ya2VyID8gbmFtZSA6IHRoaXMud29ya2Vyc1tuYW1lXS53b3JrZXJcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqL1xuICAgIGxvYWRBcHBsaWNhdGlvbihwYXRoKSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbiAgICAgICA6ICdsb2FkQXBwbGljYXRpb24nLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHJlc291cmNlc1BhdGg6IE5lb0NvbmZpZy5yZXNvdXJjZXNQYXRoXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbldvcmtlckNvbnN0cnVjdGVkKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5jb25zdHJ1Y3RlZFRocmVhZHMrKztcblxuICAgICAgICBpZiAobWUuY29uc3RydWN0ZWRUaHJlYWRzID09PSBtZS5hY3RpdmVXb3JrZXJzKSB7XG4gICAgICAgICAgICAvLyBiZXR0ZXIgc2FmZSB0aGFuIHNvcnJ5ID0+IGFsbCByZW1vdGVzIG5lZWQgdG8gYmUgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgTmVvQ29uZmlnLmFwcFBhdGggJiYgbWUudGltZW91dChOZW9Db25maWcubG9hZEFwcGxpY2F0aW9uRGVsYXkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmxvYWRBcHBsaWNhdGlvbihOZW9Db25maWcuYXBwUGF0aClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIG1ldGhvZCBmb3Igd29ya2VyIGVycm9yIGV2ZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25Xb3JrZXJFcnJvcihlKSB7XG4gICAgICAgIC8vIHN0YXJ0aW5nIGEgd29ya2VyIGZyb20gYSBKUyBtb2R1bGUgd2lsbCBzaG93IEpTIGVycm9ycyBpbiBhIGNvcnJlY3Qgd2F5XG4gICAgICAgICFoYXNKc01vZHVsZXMgJiYgY29uc29sZS5sb2coJ1dvcmtlciBFcnJvcjonLCBlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgbWV0aG9kIGZvciB3b3JrZXIgbWVzc2FnZSBldmVudHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbldvcmtlck1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtkYXRhfSAgID0gZXZlbnQsXG4gICAgICAgICAgICB0cmFuc2ZlciA9IG51bGwsXG4gICAgICAgICAgICBwcm9taXNlO1xuXG4gICAgICAgIGNvbnN0IHthY3Rpb24sIGRlc3RpbmF0aW9uOiBkZXN0LCByZXBseUlkfSA9IGRhdGE7XG5cbiAgICAgICAgbWUuZmlyZSgnbWVzc2FnZTonK2FjdGlvbiwgZGF0YSk7XG5cbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3JlcGx5Jykge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG1lLnByb21pc2VzW3JlcGx5SWRdO1xuXG4gICAgICAgICAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5hdXRvTW91bnQgICYmIG1lLmZpcmUoJ2F1dG9tb3VudCcsICBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhLnVwZGF0ZVZkb20gJiYgbWUuZmlyZSgndXBkYXRlVmRvbScsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gZGVsYXkgdGhlIG1lc3NhZ2UgdW50aWwgdGhlIHJlbmRlcmluZyBxdWV1ZSBoYXMgcHJvY2Vzc2VkIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzI4NjRcbiAgICAgICAgICAgICAgICAgICAgbWUucHJvbWlzZUZvcndhcmRNZXNzYWdlKGRhdGEpLnRoZW4obXNnRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShtc2dEYXRhLmRlc3RpbmF0aW9uLCBtc2dEYXRhKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc3QgPT09ICdtYWluJykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvbWlzZVtkYXRhLnJlamVjdCA/ICdyZWplY3QnIDogJ3Jlc29sdmUnXShkYXRhKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWUucHJvbWlzZXNbcmVwbHlJZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXN0ICE9PSAnbWFpbicgJiYgYWN0aW9uICE9PSAncmVwbHknKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIHRyYW5zZmVyID0gW2RhdGEudHJhbnNmZXJdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VNZXNzYWdlKGRlc3QsIGRhdGEsIHRyYW5zZmVyKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShyZXNwb25zZS5kZXN0aW5hdGlvbiwgcmVzcG9uc2UpXG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yICA6IGVyci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAgICBlbHNlIGlmIChkZXN0ID09PSAnbWFpbicgJiYgYWN0aW9uID09PSAncmVnaXN0ZXJBcHBOYW1lJykge1xuICAgICAgICAgICAgbGV0IHthcHBOYW1lfSA9IGRhdGE7XG5cbiAgICAgICAgICAgIG1lLmFwcE5hbWVzLnB1c2goYXBwTmFtZSk7XG5cbiAgICAgICAgICAgIG1lLmJyb2FkY2FzdCh7YWN0aW9uOiAncmVnaXN0ZXJBcHAnLCBhcHBOYW1lfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGRlc3QgPT09ICdtYWluJyAmJiBhY3Rpb24gPT09ICdyZW1vdGVNZXRob2QnKSB7XG4gICAgICAgICAgICBtZS5vblJlbW90ZU1ldGhvZChkYXRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5yZXBseUlkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBwcm9taXNlRm9yd2FyZE1lc3NhZ2UoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9taXNlc1tkYXRhLnJlcGx5SWRdID0ge2RhdGEsIHJlamVjdCwgcmVzb2x2ZX1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGNhbnZhcywgZGF0YSBvciB2ZG9tXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHByb21pc2VNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbWUuc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpLFxuICAgICAgICAgICAgICAgIG1zZ0lkICAgPSBtZXNzYWdlLmlkO1xuXG4gICAgICAgICAgICBtZS5wcm9taXNlc1ttc2dJZF0gPSB7cmVqZWN0LCByZXNvbHZlfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXBseUlkXG4gICAgICovXG4gICAgcmVzb2x2ZURvbU9wZXJhdGlvblByb21pc2UocmVwbHlJZCkge1xuICAgICAgICBpZiAocmVwbHlJZCkge1xuICAgICAgICAgICAgbGV0IHtwcm9taXNlc30gPSB0aGlzLFxuICAgICAgICAgICAgICAgIHByb21pc2UgICAgPSBwcm9taXNlc1tyZXBseUlkXTtcblxuICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUocHJvbWlzZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvbWlzZXNbcmVwbHlJZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgY2FudmFzLCBkYXRhIG9yIHZkb21cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtOZW8ud29ya2VyLk1lc3NhZ2V9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBtZXNzYWdlLCB3b3JrZXI7XG5cbiAgICAgICAgaWYgKCFtZS5zdG9wQ29tbXVuaWNhdGlvbikge1xuICAgICAgICAgICAgaWYgKG9wdHMuY2hhbm5lbFBvcnQpIHtcbiAgICAgICAgICAgICAgICB3b3JrZXIgPSBvcHRzLmNoYW5uZWxQb3J0O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvcHRzLmNoYW5uZWxQb3J0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdvcmtlciA9IG1lLmdldFdvcmtlcihkZXN0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXdvcmtlcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIHNlbmRNZXNzYWdlIGZvciBhIHdvcmtlciB0aGF0IGRvZXMgbm90IGV4aXN0OiAnICsgZGVzdClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3B0cy5kZXN0aW5hdGlvbiA9IGRlc3Q7XG5cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShvcHRzKTtcblxuICAgICAgICAgICAgKHdvcmtlci5wb3J0ID8gd29ya2VyLnBvcnQgOiB3b3JrZXIpLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKE1hbmFnZXIpO1xuIiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cbiAqIFlvdSBjYW4gYWRkIG9wdGlvbmFsIHBhcmFtcyBhcyBuZWVkZWQuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXG4gKi9cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWN0aW9uXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRlc3RpbmF0aW9uPSdtYWluJ1xuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpZD1JZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9yaWdpbj1OZW8ud29ya2VySWRcbiAgICAgICAgICovXG5cbiAgICAgICAgY29uZmlnLmRlc3RpbmF0aW9uID0gY29uZmlnLmRlc3RpbmF0aW9uIHx8ICdtYWluJztcbiAgICAgICAgY29uZmlnLmlkICAgICAgICAgID0gY29uZmlnLmlkICAgICAgICAgIHx8IElkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZCk7XG4gICAgICAgIGNvbmZpZy5vcmlnaW4gICAgICA9IGNvbmZpZy5vcmlnaW4gICAgICB8fCBOZW8ud29ya2VySWQ7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXG4gICAgfVxufVxuXG5jb25zdCBucyA9IE5lby5ucygnTmVvLndvcmtlcicsIHRydWUpO1xubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3NcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgUmVtb3RlTWV0aG9kQWNjZXNzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduUG9ydChzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBjb25zdCB7YXBwTmFtZSwgcG9ydCwgd2luZG93SWR9ID0gc291cmNlO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHthcHBOYW1lLCBwb3J0LCB3aW5kb3dJZH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiBQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtvcmlnaW59ID0gcmVtb3RlO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCBidWZmZXIpIHtcbiAgICAgICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgICAgIDogJ3JlbW90ZU1ldGhvZCcsXG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQoZGF0YSwgb3B0cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlTWVzc2FnZShvcmlnaW4sIG9wdHMsIGJ1ZmZlcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyUmVtb3RlKHJlbW90ZSkge1xuICAgICAgICBpZiAocmVtb3RlLmRlc3RpbmF0aW9uID09PSBOZW8ud29ya2VySWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAge2NsYXNzTmFtZSwgbWV0aG9kc30gPSByZW1vdGUsXG4gICAgICAgICAgICAgICAgcGtnICAgICAgICAgICAgICAgICAgPSBOZW8ubnMoY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKG1ldGhvZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZS5vcmlnaW4gIT09ICdtYWluJyAmJiBwa2dbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByZW1vdGUgbWV0aG9kIGRlZmluaXRpb24gJyArIGNsYXNzTmFtZSArICcuJyArIG1ldGhvZClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwa2dbbWV0aG9kXSA/Pz0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVtb3RlTWV0aG9kKG1zZykge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHBrZyA9IE5lby5ucyhtc2cucmVtb3RlQ2xhc3NOYW1lKSxcbiAgICAgICAgICAgIG91dCwgbWV0aG9kO1xuXG4gICAgICAgIGlmICghcGtnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG5hbWVzcGFjZSBcIicgKyBtc2cucmVtb3RlQ2xhc3NOYW1lICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZCA9IHBrZ1ttc2cucmVtb3RlTWV0aG9kXTtcblxuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBtZXRob2QgbmFtZSBcIicgKyBtc2cucmVtb3RlTWV0aG9kICsgJ1wiJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgbXNnLmRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgb3V0XG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7bWUucmVqZWN0KG1zZywgZXJyKX0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7bWUucmVzb2x2ZShtc2csIGRhdGEpfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBvdXQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG5cbiAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgcmVqZWN0IDogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQobXNnLCBvcHRzKTtcbiAgICAgICAgbWUuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVzb2x2ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZXNvbHZlKG1zZywgZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIG1lLmlzU2hhcmVkV29ya2VyICYmIG1lLmFzc2lnblBvcnQobXNnLCBvcHRzKTtcbiAgICAgICAgbWUuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFJlbW90ZU1ldGhvZEFjY2Vzcyk7XG4iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvbWFpbi9hZGRvbiBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5tanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJjaHVua3MvbWFpbi9cIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwibXlhcHA6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteWFwcFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtteWFwcFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiaW1wb3J0IE5lbyAgICAgICAgICAgZnJvbSAnLi9OZW8ubWpzJztcbmltcG9ydCAqIGFzIGNvcmUgICAgIGZyb20gJy4vY29yZS9fZXhwb3J0Lm1qcyc7XG5pbXBvcnQgRG9tQWNjZXNzICAgICBmcm9tICcuL21haW4vRG9tQWNjZXNzLm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRzICAgICBmcm9tICcuL21haW4vRG9tRXZlbnRzLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgICBmcm9tICcuL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFdvcmtlck1hbmFnZXIgZnJvbSAnLi93b3JrZXIvTWFuYWdlci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uTWFpblxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBNYWluIGV4dGVuZHMgY29yZS5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS5PYnNlcnZhYmxlIG1peGluXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBvYnNlcnZhYmxlID0gdHJ1ZVxuXG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uTWFpbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLk1haW4nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBtb2RlPSdyZWFkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtb2RlOiAncmVhZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG9wZW5XaW5kb3dzPXt9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG9wZW5XaW5kb3dzOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSByZWFkUXVldWU9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZFF1ZXVlOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6IFsvLy4uLl19XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ2FsZXJ0JyxcbiAgICAgICAgICAgICAgICAnZWRpdFJvdXRlJyxcbiAgICAgICAgICAgICAgICAnZ2V0QnlQYXRoJyxcbiAgICAgICAgICAgICAgICAnZ2V0V2luZG93RGF0YScsXG4gICAgICAgICAgICAgICAgJ2ltcG9ydEFkZG9uJyxcbiAgICAgICAgICAgICAgICAnbG9nJyxcbiAgICAgICAgICAgICAgICAncmVkaXJlY3RUbycsXG4gICAgICAgICAgICAgICAgJ3JlbG9hZFdpbmRvdycsXG4gICAgICAgICAgICAgICAgJ3NldE5lb0NvbmZpZycsXG4gICAgICAgICAgICAgICAgJ3NldFJvdXRlJyxcbiAgICAgICAgICAgICAgICAnd2luZG93Q2xvc2UnLFxuICAgICAgICAgICAgICAgICd3aW5kb3dDbG9zZUFsbCcsXG4gICAgICAgICAgICAgICAgJ3dpbmRvd01vdmVUbycsXG4gICAgICAgICAgICAgICAgJ3dpbmRvd09wZW4nLFxuICAgICAgICAgICAgICAgICd3aW5kb3dSZXNpemVUbydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJ1bm5pbmc9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93RnBzPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93RnBzOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdGltZUxpbWl0PTE1XG4gICAgICAgICAqL1xuICAgICAgICB0aW1lTGltaXQ6IDE1LFxuICAgICAgICAvKipcbiAgICAgICAgICogc2hvdWxkIGJlIGRldiBvbmx5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdG90YWxGcmFtZUNvdW50PTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdG90YWxGcmFtZUNvdW50OiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHVwZGF0ZVF1ZXVlPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZVF1ZXVlOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB3cml0ZVF1ZXVlPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHdyaXRlUXVldWU6IFtdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBXb3JrZXJNYW5hZ2VyLm9uKHtcbiAgICAgICAgICAgICdhdXRvbW91bnQnICAgICAgICA6IG1lLm9uUmVuZGVyLFxuICAgICAgICAgICAgJ21lc3NhZ2U6bW91bnREb20nIDogbWUub25Nb3VudERvbSxcbiAgICAgICAgICAgICdtZXNzYWdlOnVwZGF0ZURvbSc6IG1lLm9uVXBkYXRlRG9tLFxuICAgICAgICAgICAgJ3VwZGF0ZVZkb20nICAgICAgIDogbWUub25VcGRhdGVWZG9tLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRG9tRXZlbnRzLm9uKCdkb21Db250ZW50TG9hZGVkJywgbWUub25Eb21Db250ZW50TG9hZGVkLCBtZSk7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgICAgICAgICAgRG9tRXZlbnRzLm9uRG9tQ29udGVudExvYWRlZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXb3JrZXJzIGNhbiBub3QgdHJpZ2dlciBhbGVydCgpLCBzbyB3ZSBuZWVkIHJlbW90ZSBtZXRob2QgYWNjZXNzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubWVzc2FnZVxuICAgICAqL1xuICAgIGFsZXJ0KGRhdGEpIHtcbiAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVkaXQgdGhlIGxvY2F0aW9uLmhhc2ggdmFsdWVcbiAgICAgKiBBIHZhbHVlIG9mIG51bGwgd2lsbCByZW1vdmUgdGhlIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGVkaXRSb3V0ZShkYXRhKSB7XG4gICAgICAgIGxldCBoYXNoT2JqID0gRG9tRXZlbnRzLnBhcnNlSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpLFxuICAgICAgICAgICAgaGFzaEFyciA9IFtdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGEgPSBEb21FdmVudHMucGFyc2VIYXNoKGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuYXNzaWduKGhhc2hPYmosIGRhdGEpO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGhhc2hPYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaGFzaEFyci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoQXJyLmpvaW4oJyYnKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3Qgc3BlY2lmaWMgYWNjZXNzaWJsZSB3aW5kb3cgYXR0cmlidXRlcyBieSBwYXRoIGludG8gdGhlIGFwcCB3b3JrZXIuXG4gICAgICogS2VlcCBpbiBtaW5kIHRoYXQgdGhpcyBleGNsdWRlcyBhbnl0aGluZyBET00gcmVsYXRlZCBvciBpbnN0YW5jZXMuXG4gICAgICogSW4gY2FzZSB5b3VyIHBhdGggbWF0Y2hlcyBhIG1ldGhvZCwgeW91IGNhbiBhbHNvIHBhc3MgcGFyYW1zIGZvciBpdC5cbiAgICAgKiBAZXhhbXBsZTpcbiAgICAgKiAgICAgTmVvLk1haW4uZ2V0QnlQYXRoKHtwYXRoOiAnbmF2aWdhdG9yLmxhbmd1YWdlJ30pLnRoZW4oZGF0YSA9PiB7fSlcbiAgICAgKiBAZXhhbXBsZTpcbiAgICAgKiAgICAgTmVvLk1haW4uZ2V0QnlQYXRoKHtwYXRoOiAnQ1NTLnN1cHBvcnRzJywgcGFyYW1zOiBbJ2Rpc3BsYXk6IGZsZXgnXX0pLnRoZW4oZGF0YSA9PiB7fSlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBkYXRhLnBhcmFtcz1bXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnBhdGhcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRCeVBhdGgoe3BhcmFtcz1bXSwgcGF0aH0pIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IE5lby5uc1dpdGhBcnJheXMocGF0aCk7XG4gICAgICAgIHJldHVybiBOZW8uaXNGdW5jdGlvbih0YXJnZXQpID8gdGFyZ2V0KC4uLnBhcmFtcykgOiB0YXJnZXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB3aW5kb3cuc2NyZWVuIGlzIG5vdCBzcHJlYWRhYmxlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRXaW5kb3dEYXRhKCkge1xuICAgICAgICBsZXQgd2luICAgICAgPSB3aW5kb3csXG4gICAgICAgICAgICB7c2NyZWVufSA9IHdpbjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5uZXJIZWlnaHQ6IHdpbi5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIGlubmVyV2lkdGggOiB3aW4uaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIG91dGVySGVpZ2h0OiB3aW4ub3V0ZXJIZWlnaHQsXG4gICAgICAgICAgICBvdXRlcldpZHRoIDogd2luLm91dGVyV2lkdGgsXG4gICAgICAgICAgICBzY3JlZW46IHtcbiAgICAgICAgICAgICAgICBhdmFpbEhlaWdodDogc2NyZWVuLmF2YWlsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGF2YWlsTGVmdCAgOiBzY3JlZW4uYXZhaWxMZWZ0LFxuICAgICAgICAgICAgICAgIGF2YWlsVG9wICAgOiBzY3JlZW4uYXZhaWxUb3AsXG4gICAgICAgICAgICAgICAgYXZhaWxXaWR0aCA6IHNjcmVlbi5hdmFpbFdpZHRoLFxuICAgICAgICAgICAgICAgIGNvbG9yRGVwdGggOiBzY3JlZW4uY29sb3JEZXB0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgIDogc2NyZWVuLmhlaWdodCxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjoge2FuZ2xlOiBzY3JlZW4ub3JpZW50YXRpb24/LmFuZ2xlLCB0eXBlOiBzY3JlZW4ub3JpZW50YXRpb24/LnR5cGV9LFxuICAgICAgICAgICAgICAgIHBpeGVsRGVwdGggOiBzY3JlZW4ucGl4ZWxEZXB0aCxcbiAgICAgICAgICAgICAgICB3aWR0aCAgICAgIDogc2NyZWVuLndpZHRoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NyZWVuTGVmdDogd2luLnNjcmVlbkxlZnQsXG4gICAgICAgICAgICBzY3JlZW5Ub3AgOiB3aW4uc2NyZWVuVG9wXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBvcnQgbWFpbiB0aHJlYWQgYWRkb25zIGF0IHJ1bi10aW1lIGZyb20gd2l0aGluIHRoZSBhcHAgd29ya2VyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5uYW1lXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgYXN5bmMgaW1wb3J0QWRkb24oZGF0YSkge1xuICAgICAgICBsZXQge25hbWV9ID0gZGF0YSxcbiAgICAgICAgICAgIG1vZHVsZTtcblxuICAgICAgICBpZiAobmFtZS5zdGFydHNXaXRoKCdXUy8nKSkge1xuICAgICAgICAgICAgbW9kdWxlID0gYXdhaXQgaW1wb3J0KGAuLi8uLi8uLi9zcmMvbWFpbi9hZGRvbi8ke25hbWUuc3Vic3RyaW5nKDMpfS5tanNgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlID0gYXdhaXQgaW1wb3J0KGAuL21haW4vYWRkb24vJHtuYW1lfS5tanNgKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckFkZG9uKG1vZHVsZS5kZWZhdWx0KTtcbiAgICAgICAgYXdhaXQgdGhpcy50aW1lb3V0KDIwKTsgLy8gV2FpdCB1bnRpbCByZW1vdGVzIGFyZSByZWdpc3RlcmVkXG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdGUgY29uc29sZSBhY2Nlc3MgdG8gbWFpbiB0aHJlYWRzLlxuICAgICAqIFlvdSBjYW4gdXNlIGFwcE5hbWUgb3Igd2luZG93SWQgdG8gdGFyZ2V0IHNwZWNpZmljIHdpbmRvd3MuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuYXBwTmFtZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5tZXRob2RdIGRlZmF1bHRzIHRvICdsb2cnXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLndpbmRvd0lkXVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGxvZyhkYXRhKSB7XG4gICAgICAgIGNvbnNvbGVbZGF0YS5tZXRob2QgfHwgJ2xvZyddKGRhdGEudmFsdWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYXN5bmMgb25Eb21Db250ZW50TG9hZGVkKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge2NvbmZpZ30gPSBOZW8sXG4gICAgICAgICAgICBpbXBvcnRzICA9IFtdLFxuICAgICAgICAgICAge2Vudmlyb25tZW50LCBtYWluVGhyZWFkQWRkb25zLCB1c2VTZXJ2aWNlV29ya2VyfSA9IGNvbmZpZyxcbiAgICAgICAgICAgIG1vZHVsZXM7XG5cbiAgICAgICAgRG9tQWNjZXNzLm9uRG9tQ29udGVudExvYWRlZCgpO1xuXG4gICAgICAgIC8vIFdlIG5lZWQgZGlmZmVyZW50IHB1YmxpY1BhdGggdmFsdWVzIGZvciB0aGUgbWFpbiB0aHJlYWQgaW5zaWRlIHRoZSB3ZWJwYWNrIGJhc2VkIGRpc3QgZW52cyxcbiAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBoaWVyYXJjaHkgbGV2ZWwgb2YgdGhlIGFwcCBlbnRyeSBwb2ludFxuICAgICAgICBpZiAoZW52aXJvbm1lbnQgPT09ICdkaXN0L2RldmVsb3BtZW50JyB8fCBlbnZpcm9ubWVudCA9PT0gJ2Rpc3QvcHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIF9fd2VicGFja19yZXF1aXJlX18ucCA9IGNvbmZpZy5iYXNlUGF0aC5zdWJzdHJpbmcoNilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEludGVuZGVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIHdoZXJlIHdlIG5lZWQgYW4gZWFzeSB3YXkgdG8gYWRkIEdBIHRvIGV2ZXJ5IGdlbmVyYXRlZCBhcHBcbiAgICAgICAgaWYgKGNvbmZpZy51c2VHb29nbGVBbmFseXRpY3MgJiYgIW1haW5UaHJlYWRBZGRvbnMuaW5jbHVkZXMoJ0FuYWx5dGljc0J5R29vZ2xlJykpIHtcbiAgICAgICAgICAgIG1haW5UaHJlYWRBZGRvbnMucHVzaCgnQW5hbHl0aWNzQnlHb29nbGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChcbiAgICAgICAgICAgICAgICB1c2VTZXJ2aWNlV29ya2VyID09PSB0cnVlIHx8XG4gICAgICAgICAgICAgICAgdXNlU2VydmljZVdvcmtlciA9PT0gZW52aXJvbm1lbnQgfHxcbiAgICAgICAgICAgICAgICAodXNlU2VydmljZVdvcmtlciA9PT0gJ2Rpc3QvcHJvZHVjdGlvbicgJiYgZW52aXJvbm1lbnQgPT09ICdkaXN0L2VzbScpXG4gICAgICAgICAgICApICYmXG4gICAgICAgICAgICAhbWFpblRocmVhZEFkZG9ucy5pbmNsdWRlcygnU2VydmljZVdvcmtlcicpXG4gICAgICAgICkge1xuICAgICAgICAgICAgbWFpblRocmVhZEFkZG9ucy5wdXNoKCdTZXJ2aWNlV29ya2VyJylcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW5UaHJlYWRBZGRvbnMuZm9yRWFjaChhZGRvbiA9PiB7XG4gICAgICAgICAgICBpZiAoYWRkb24uc3RhcnRzV2l0aCgnV1MvJykpIHtcbiAgICAgICAgICAgICAgICBpbXBvcnRzLnB1c2goaW1wb3J0KGAuLi8uLi8uLi9zcmMvbWFpbi9hZGRvbi8ke2FkZG9uLnN1YnN0cmluZygzKX0ubWpzYCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltcG9ydHMucHVzaChpbXBvcnQoYC4vbWFpbi9hZGRvbi8ke2FkZG9ufS5tanNgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kdWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGltcG9ydHMpO1xuXG4gICAgICAgIG1lLmFkZG9uID0ge307XG5cbiAgICAgICAgbW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICBtZS5yZWdpc3RlckFkZG9uKG1vZHVsZS5kZWZhdWx0KVxuICAgICAgICB9KTtcblxuICAgICAgICBXb3JrZXJNYW5hZ2VyLm9uV29ya2VyQ29uc3RydWN0ZWQoe1xuICAgICAgICAgICAgb3JpZ2luOiAnbWFpbidcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTW91bnREb20oZGF0YSkge1xuICAgICAgICB0aGlzLnF1ZXVlV3JpdGUoZGF0YSk7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiB8fCAnYXBwJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJlbmRlcihkYXRhKSB7XG4gICAgICAgIGRhdGEuZGF0YS5yZXBseUlkID0gZGF0YS5yZXBseUlkO1xuICAgICAgICB0aGlzLnF1ZXVlV3JpdGUoZGF0YS5kYXRhKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25VcGRhdGVEb20oZGF0YSkge1xuICAgICAgICB0aGlzLnF1ZXVlVXBkYXRlKGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblVwZGF0ZVZkb20oZGF0YSkge1xuICAgICAgICBkYXRhLmRhdGEucmVwbHlJZCA9IGRhdGEucmVwbHlJZDtcbiAgICAgICAgdGhpcy5xdWV1ZVVwZGF0ZShkYXRhLmRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gcXVldWVcbiAgICAgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0XG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvY2Vzc1F1ZXVlKHF1ZXVlLCBzdGFydCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgbGltaXQgPSBtZS50aW1lTGltaXQsXG4gICAgICAgICAgICBvcGVyYXRpb247XG5cbiAgICAgICAgd2hpbGUgKG9wZXJhdGlvbiA9IHF1ZXVlLnNoaWZ0KCkpIHtcbiAgICAgICAgICAgIGlmIChuZXcgRGF0ZSgpIC0gc3RhcnQgPiBsaW1pdCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnVuc2hpZnQob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBEb21BY2Nlc3NbbWUubW9kZV0ob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICBXb3JrZXJNYW5hZ2VyLnJlc29sdmVEb21PcGVyYXRpb25Qcm9taXNlKG9wZXJhdGlvbi5yZXBseUlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcXVldWVSZWFkKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgbWUucmVhZFF1ZXVlLnB1c2goZGF0YSk7XG5cbiAgICAgICAgaWYgKCFtZS5ydW5uaW5nKSB7XG4gICAgICAgICAgICBtZS5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXJGcmFtZS5iaW5kKG1lKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHF1ZXVlVXBkYXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgbWUudXBkYXRlUXVldWUucHVzaChkYXRhKTtcblxuICAgICAgICBpZiAoIW1lLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIG1lLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcXVldWVXcml0ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIG1lLndyaXRlUXVldWUucHVzaChkYXRhKTtcblxuICAgICAgICBpZiAoIW1lLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIG1lLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS51cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKGRhdGEpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnVybFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVnaXN0ZXIgbWFpbiB0aHJlYWQgYWRkb25zXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBhZGRvbiBDYW4gZWl0aGVyIGJlIGEgbmVvIGNsYXNzIG9yIGluc3RhbmNlXG4gICAgICovXG4gICAgcmVnaXN0ZXJBZGRvbihhZGRvbikge1xuICAgICAgICBpZiAoTmVvLnR5cGVPZihhZGRvbikgPT09ICdOZW9DbGFzcycpIHtcbiAgICAgICAgICAgIC8vIEFkZG9ucyBjb3VsZCBnZXQgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMuIEVuc3VyZSB0byBvbmx5IGNyZWF0ZSBhbiBpbnN0YW5jZSBvbmNlLlxuICAgICAgICAgICAgaWYgKE5lby50eXBlT2YoTmVvLm5zKGFkZG9uLnByb3RvdHlwZS5jbGFzc05hbWUpKSAhPT0gJ05lb0luc3RhbmNlJykge1xuICAgICAgICAgICAgICAgIGFkZG9uID0gTmVvLmNyZWF0ZShhZGRvbilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWFpbiB0aHJlYWQgYWRkb25zIG5lZWQgdG8gZ2V0IHJlZ2lzdGVyZWQgYXMgc2luZ2xldG9ucyBpbnNpZGUgdGhlIG5lbyBuYW1lc3BhY2VcbiAgICAgICAgICAgIE5lby5hcHBseVRvR2xvYmFsTnMoYWRkb24pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZG9uW2FkZG9uLmNvbnN0cnVjdG9yLm5hbWVdID0gYWRkb25cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlbG9hZFdpbmRvdyhkYXRhKSB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGRpZmZlcmVudCBET00gb3BlcmF0aW9uIHF1ZXVlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW5kZXJGcmFtZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVhZCAgICA9IG1lLnJlYWRRdWV1ZSxcbiAgICAgICAgICAgIHVwZGF0ZSAgPSBtZS51cGRhdGVRdWV1ZSxcbiAgICAgICAgICAgIHdyaXRlICAgPSBtZS53cml0ZVF1ZXVlLFxuICAgICAgICAgICAgcmVhZGluZyA9IG1lLm1vZGUgPT09ICdyZWFkJyxcbiAgICAgICAgICAgIHN0YXJ0ICAgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmxvZ0RlbHRhVXBkYXRlcykge1xuICAgICAgICAgICAgbWUudG90YWxGcmFtZUNvdW50Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG90YWwgRnJhbWVzOiAnICsgbWUudG90YWxGcmFtZUNvdW50KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlYWRpbmcgfHwgIXdyaXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUubW9kZSA9ICdyZWFkJztcbiAgICAgICAgICAgIGlmIChtZS5wcm9jZXNzUXVldWUocmVhZCwgc3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXBkYXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUubW9kZSA9ICd1cGRhdGUnO1xuICAgICAgICAgICAgaWYgKG1lLnByb2Nlc3NRdWV1ZSh1cGRhdGUsIHN0YXJ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdyaXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUubW9kZSA9ICd3cml0ZSc7XG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHdyaXRlLCBzdGFydCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnJ1bm5pbmcgPSBmYWxzZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBhIE5lby5jb25maWcgZnJvbSB0aGUgYXBwIHdvcmtlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEua2V5XG4gICAgICogQHBhcmFtIHsqfSBkYXRhLnZhbHVlXG4gICAgICovXG4gICAgc2V0TmVvQ29uZmlnKGRhdGEpIHtcbiAgICAgICAgbGV0IHtrZXksIHZhbHVlfSA9IGRhdGE7XG5cbiAgICAgICAgTmVvLmNvbmZpZ1trZXldID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBrZXkgPT09ICdyZW5kZXJDb3VudERlbHRhcycgJiYgRG9tQWNjZXNzLnNldCh7W2tleV06IHZhbHVlfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGxvY2F0aW9uLmhhc2ggdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnZhbHVlXG4gICAgICovXG4gICAgc2V0Um91dGUoZGF0YSkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGRhdGEudmFsdWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgcG9wdXAgd2luZG93c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd8U3RyaW5nW119IGRhdGEubmFtZXNcbiAgICAgKi9cbiAgICB3aW5kb3dDbG9zZShkYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLm5hbWVzKSkge1xuICAgICAgICAgICAgZGF0YS5uYW1lcyA9IFtkYXRhLm5hbWVzXVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5uYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuV2luZG93c1tuYW1lXT8uY2xvc2UoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9wZW5XaW5kb3dzW25hbWVdXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFsbCBwb3B1cCB3aW5kb3dzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICB3aW5kb3dDbG9zZUFsbChkYXRhKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5vcGVuV2luZG93cykuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZS5jbG9zZSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3BlbldpbmRvd3MgPSB7fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYSBwb3B1cCB3aW5kb3dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLndpbmRvd05hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS54XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEueVxuICAgICAqL1xuICAgIHdpbmRvd01vdmVUbyhkYXRhKSB7XG4gICAgICAgIHRoaXMub3BlbldpbmRvd3NbZGF0YS53aW5kb3dOYW1lXT8ubW92ZVRvKGRhdGEueCwgZGF0YS55KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gYSBuZXcgcG9wdXAgd2luZG93IGFuZCByZXR1cm4gaWYgc3VjY2Vzc2Z1bGxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnVybFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLndpbmRvd0ZlYXR1cmVzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2luZG93TmFtZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgd2luZG93T3BlbihkYXRhKSB7XG4gICAgICAgIGxldCBvcGVuZWRXaW5kb3cgPSB3aW5kb3cub3BlbihkYXRhLnVybCwgZGF0YS53aW5kb3dOYW1lLCBkYXRhLndpbmRvd0ZlYXR1cmVzKSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgICAgICA9ICEhb3BlbmVkV2luZG93O1xuXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5XaW5kb3dzW2RhdGEud2luZG93TmFtZV0gPSBvcGVuZWRXaW5kb3dcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhIHBvcHVwIHdpbmRvd1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLmhlaWdodF1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2RhdGEud2lkdGhdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2luZG93TmFtZVxuICAgICAqL1xuICAgIHdpbmRvd1Jlc2l6ZVRvKGRhdGEpIHtcbiAgICAgICAgbGV0IHdpbiAgICA9IHRoaXMub3BlbldpbmRvd3NbZGF0YS53aW5kb3dOYW1lXSxcbiAgICAgICAgICAgIGhlaWdodCA9IGRhdGEuaGVpZ2h0IHx8IHdpbi5vdXRlckhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoICA9IGRhdGEud2lkdGggIHx8IHdpbi5vdXRlcldpZHRoO1xuXG4gICAgICAgIHdpbi5yZXNpemVUbyh3aWR0aCwgaGVpZ2h0KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoTWFpbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=