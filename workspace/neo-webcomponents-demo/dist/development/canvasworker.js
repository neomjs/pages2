/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ lazy recursive ^\\.\\/.*\\/canvas\\.mjs$ include: \\/canvas.mjs$ exclude: \\/node_modules":
/*!*************************************************************************************************************!*\
  !*** .// lazy ^\.\/.*\/canvas\.mjs$ include: \/canvas.mjs$ exclude: \/node_modules strict namespace object ***!
  \*************************************************************************************************************/
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
webpackEmptyAsyncContext.id = "./ lazy recursive ^\\.\\/.*\\/canvas\\.mjs$ include: \\/canvas.mjs$ exclude: \\/node_modules";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultConfig)
/* harmony export */ });
const Neo = self.Neo || {};

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
     * The current environment. Valid values: 'development', 'dist/development', 'dist/production'
     * This config will get auto-generated
     * @default 'dist/production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'dist/production',
    /**
     * In case you are using the GoogleAnalytics mainThreadAddon or useGoogleAnalytics: true,
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
     * (src/main/addon)
     * @default ['DragDrop','Stylesheet']
     * @memberOf! module:Neo
     * @name config.mainThreadAddons
     * @type String[]
     */
    mainThreadAddons: ['DragDrop', 'Stylesheet'],
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
     * @name config.useCssVars
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




/***/ }),

/***/ "./node_modules/neo.mjs/src/Neo.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Neo.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Neo)
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
let Neo = self.Neo || {};

Neo = self.Neo = Object.assign({
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
                    else if (!hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value     : value,
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

            if (!config.singleton) {
                this.applyToGlobalNs(cls);
            }
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

        instance = new cls(config);

        instance.onConstructed();
        instance.onAfterConstructed();
        instance.init();

        return instance;
    },

    emptyFn() {},

    /**
     * Maps a className string into a global namespace
     * @example
     * Neo.ns('Neo.button.Base', true);
     * // =>
     * // self.Neo = self.Neo || {};
     * // self.Neo.component = self.Neo.component || {};
     * // self.Neo.button.Base = self.Neo.button.Base || {};
     * // return self.Neo.button.Base;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as self
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
        }, scope || self);
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
     *
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
 *
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
    if (hasPropertySetter(proto, key)) {
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
                    uKey = key[0].toUpperCase() + key.slice(1),
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
        }, self);
    } catch(e) {
        return false;
    }
}

/**
 * Checks if there is a set method for a given property key inside the prototype chain
 * @param {Neo.core.Base} proto The top level prototype of a class
 * @param {String} key the property key to test
 * @returns {Boolean}
 * @private
 */
function hasPropertySetter(proto, key) {
    let descriptor;

    while (proto.__proto__) {
        descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
            return true;
        }
        proto = proto.__proto__;
    }

    return false;
}

/**
 *
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
 *
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

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__.default);




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
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
     * @returns {Object} staticConfig
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
    constructor(config={}) {
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
        let me = this;

        if (oldValue) {
            if (Base.instanceManagerAvailable === true) {
                Neo.manager.Instance.unregister(oldValue);
            } else {
                delete Neo.idMap[oldValue];
            }
        }

        if (Base.instanceManagerAvailable === true) {
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
        const values = Array.isArray(staticName) ? staticName : this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            Neo.logError(`Supported values for ${name} are: ${values.join(', ')}`, this);
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
        this.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__.default.getId(this.getIdKey());
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
     *
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
                    methods,
                    className
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
class Compare extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Compare'
         * @protected
         */
        className: 'Neo.core.Compare'
    }}

    /**
     *
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
     *
     * @param config
     */
    constructor(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    /**
     *
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

/***/ "./node_modules/neo.mjs/src/core/Logger.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Logger.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Logger
 * @extends Neo.core.Base
 * @singleton
 */
class Logger extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Logger'
         * @protected
         */
        className: 'Neo.core.Logger',
        /**
         * @member {String} ntype='logger'
         * @protected
         */
        ntype: 'logger',
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
     *
     * @param config
     */
    constructor(config) {
        super(config);

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
     *
     * @param value
     */
    error(value) {
        throw new Error(value);
    }

    /**
     *
     * @param args
     */
    info(...args) {
        this.level = 'info';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    log(...args) {
        this.level = 'log';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    logError(...args) {
        this.level = 'error';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    warn(...args) {
        this.level = 'warn';
        this.write(...args);
    }

    /**
     *
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

/***/ "./node_modules/neo.mjs/src/core/Observable.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Observable.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
     *
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
            scope = scope || opts.scope;
            listener = opts.fn;
            order = order || opts.order;
            eventId = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        if (!nameObject) {
            eventConfig = {
                fn    : listener,
                scope : scope,
                data  : data,
                id    : eventId || Neo.getId('event')
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
     *
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

                eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
            }
        }
    }

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
     *
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
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
     *
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
     * @param {String} string
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(string) {
        return Util.isString(string) && string[0].toUpperCase() + string.slice(1);
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
     * Transforms all uppercase characters of a string into lowercase.
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
/* harmony export */   "Base": () => (/* reexport safe */ _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Compare": () => (/* reexport safe */ _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "IdGenerator": () => (/* reexport safe */ _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Logger": () => (/* reexport safe */ _Logger_mjs__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Observable": () => (/* reexport safe */ _Observable_mjs__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Util": () => (/* reexport safe */ _Util_mjs__WEBPACK_IMPORTED_MODULE_5__.default)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compare.mjs */ "./node_modules/neo.mjs/src/core/Compare.mjs");
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");
/* harmony import */ var _Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");










/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Base.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
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
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__.default, _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__.default],
        /**
         * @member {String|null} workerId=null
         * @protected
         */
        workerId: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        Object.assign(me, {
            channelPorts  : {},
            isSharedWorker: self.toString() === '[object SharedWorkerGlobalScope]',
            ports         : [],
            promises      : {}
        });

        if (me.isSharedWorker) {
            self.onconnect = me.onConnected.bind(me);
        } else {
            self.onmessage = me.onMessage.bind(me);
        }

        Neo.workerId      = me.workerId;
        Neo.currentWorker = me;
    }

    /**
     * Entry point for dedicated and shared workers
     */
    afterConnect() {}

    /**
     *
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
     *
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
     *
     * @param {Object} msg
     */
    onPing(msg) {
        this.resolve(msg, {
            originMsg: msg
        });
    }

    /**
     *
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        Neo.config = Neo.config || {};
        Object.assign(Neo.config, msg.data);
    }

    /**
     *
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

            me.promises[msgId] = {
                resolve,
                reject
            };
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
            port = self;
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

        message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_2__.default(opts);

        port.postMessage(message, transfer);
        return message;
    }
}

Neo.applyClassConfig(Base);




/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     *
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
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__.default.getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;




/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoteMethodAccess)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.worker.mixin.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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
     *
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
                opts.appName = opts.appName || data?.appName;
                opts.port    = opts.port    || data?.port;
            }

            return me.promiseMessage(origin, opts, buffer);
        };
    }

    /**
     *
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                exists    = false,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(function(method) {
                if (remote.origin !== 'main' && pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                if (!pkg[method] ) {
                    pkg[method] = me.generateRemote(remote, method);
                } else {
                    exists = true;
                }
            });

            // todo: inspect if this can get removed
            if (!exists && Neo.workerId !== 'main') {
                me.fire('remoteregistered', remote);
            }
        }
    }

    /**
     *
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Canvas.mjs ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/worker/Base.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");




/**
 * The Canvas worker is responsible for dynamically manipulating offscreen canvas.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas
 * @class Neo.worker.Canvas
 * @extends Neo.worker.Base
 * @singleton
 */
class Canvas extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Canvas'
         * @protected
         */
        className: 'Neo.worker.Canvas',
        /**
         * key: value => canvasId: OffscreenCanvas
         * @member {Object} map={}
         */
        map: {},
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {String} workerId='canvas'
         * @protected
         */
        workerId: 'canvas'
    }}

    /**
     *
     */
    afterConnect() {
        let me      = this,
            channel = new MessageChannel(),
            port    = channel.port2;

        channel.port1.onmessage = me.onMessage.bind(me);

        me.sendMessage('app', {action: 'registerPort', transfer: port}, [port]);

        me.channelPorts.app = channel.port1;
    }

    /**
     *
     * @param {Object} data
     */
    onRegisterCanvas(data) {
        this.map[data.nodeId] = data.node;

        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.currentWorker.sendMessage(data.origin, {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        super.onRegisterNeoConfig(msg);

        let path = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.config.appPath.slice(0, -8); // removing "/app.mjs"

        __webpack_require__("./ lazy recursive ^\\.\\/.*\\/canvas\\.mjs$ include: \\/canvas.mjs$ exclude: \\/node_modules")(`./${path}/canvas.mjs`).then(module => {
            module.onStart();
        });
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.applyClassConfig(Canvas);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.create(Canvas);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__.default.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzd29ya2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUssWUFBWSxDQUM3QjtBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsOERBQW9COztBQUVwQixlQUFlLG9EQUFVOztBQUV6Qiw2REFBbUI7O0FBRW5CLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi4vd2ViY29tcG9uZW50LWRlbW98bGF6eXwvXlxcLlxcLy4qXFwvY2FudmFzXFwubWpzJC98aW5jbHVkZTogL1xcL2NhbnZhcy5tanMkL3xleGNsdWRlOiAvXFwvbm9kZV9tb2R1bGVzL3xncm91cE9wdGlvbnM6IHt9fHN0cmljdCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvRGVmYXVsdENvbmZpZy5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQ29tcGFyZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvTG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL1V0aWwubWpzIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9NZXNzYWdlLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9taXhpbi9SZW1vdGVNZXRob2RBY2Nlc3MubWpzIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9DYW52YXMubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9jYW52YXNcXFxcLm1qcyQgaW5jbHVkZTogXFxcXC9jYW52YXMubWpzJCBleGNsdWRlOiBcXFxcL25vZGVfbW9kdWxlc1wiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7IiwiY29uc3QgTmVvID0gc2VsZi5OZW8gfHwge307XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG4vKipcbiAqIENvbmZpZyBvYmplY3QgZm9yIHRoZSBuZW8ubWpzIGZyYW1ld29yayB3aGljaCB3aWxsIGdldCBwYXNzZWQgdG8gYWxsIHdvcmtlcnNcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSBjb25maWdzLCBlLmcuIGluc2lkZSB0aGUgaW5kZXguaHRtbCBvZiB5b3VyIGFwcFxuICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAqIEBuYW1lIGNvbmZpZ1xuICogQHR5cGUgT2JqZWN0XG4gKi9cbmNvbnN0IERlZmF1bHRDb25maWcgPSB7XG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGFwcGx5ICduZW8tYm9keScgdG8gdGhlIGRvY3VtZW50LmJvZHkgY2xhc3NMaXN0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBseUJvZHlDbHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8geW91ciBhcHAubWpzIGZpbGUuIFlvdSBjYW4gY3JlYXRlIG11bHRpcGxlIGFwcHMgdGhlcmUgaWYgbmVlZGVkLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgYXBwUGF0aDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSBuZW8ubWpzIGRpcmVjdG9yeVxuICAgICAqIEBkZWZhdWx0ICcuLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYmFzZVBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBiYXNlUGF0aDogJy4vJyxcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBlbnZpcm9ubWVudC4gVmFsaWQgdmFsdWVzOiAnZGV2ZWxvcG1lbnQnLCAnZGlzdC9kZXZlbG9wbWVudCcsICdkaXN0L3Byb2R1Y3Rpb24nXG4gICAgICogVGhpcyBjb25maWcgd2lsbCBnZXQgYXV0by1nZW5lcmF0ZWRcbiAgICAgKiBAZGVmYXVsdCAnZGlzdC9wcm9kdWN0aW9uJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbnZpcm9ubWVudFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGVudmlyb25tZW50OiAnZGlzdC9wcm9kdWN0aW9uJyxcbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIHlvdSBhcmUgdXNpbmcgdGhlIEdvb2dsZUFuYWx5dGljcyBtYWluVGhyZWFkQWRkb24gb3IgdXNlR29vZ2xlQW5hbHl0aWNzOiB0cnVlLFxuICAgICAqIHlvdSBjYW4gY2hhbmdlIHRoZSBndGFnIGlkIGhlcmUuIFJlcXVpcmVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIChnaCBwYWdlcylcbiAgICAgKiBAZGVmYXVsdCAnVUEtMTUzNzM0NDA0LTEnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmd0YWdJZFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGd0YWdJZDogJ1VBLTE1MzczNDQwNC0xJyxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIG9uIGh0dHBzOi8vbmVvbWpzLmdpdGh1Yi5pby9wYWdlcy9cbiAgICAgKiA9PiB0byB1c2UgbG9jYWwgaW1hZ2VzIHBhdGhzIGluc3RlYWQgb2YgcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzR2l0SHViUGFnZXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNHaXRIdWJQYWdlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyB0aGUgTmVvIG1haW4gdGhyZWFkIGluc2lkZSBhbiBpZnJhbWUgKFNpZXN0YSBCcm93c2VyIEhhcm5lc3MpXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNJbnNpZGVTaWVzdGFcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNJbnNpZGVTaWVzdGE6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFVzZWQgYnkgSW50bC5EYXRlVGltZUZvcm1hdCwgZm9yIGRldGFpbHMgdGFrZSBhIGxvb2sgYXQ6XG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9jYWxlXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgLyoqXG4gICAgICogdHJ1ZSB3aWxsIGxvZyB0aGUgZGVsdGEgdXBkYXRlcyBpbnNpZGUgdGhlIG1haW4gdGhyZWFkKHMpIGFzIHdlbGwgYXMgdGhlIHJlcXVlc3RBbmltYXRpb24gZnJhbWVzXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9nRGVsdGFVcGRhdGVzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGxvZ0RlbHRhVXBkYXRlczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIGFkZG9ucyBmb3IgdGhlIG1haW4gdGhyZWFkXG4gICAgICogUG9zc2libGUgdmFsdWVzOiBBbUNoYXJ0cywgQW5hbHl0aWNzQnlHb29nbGUsIERyYWdEcm9wLCBIaWdobGlnaHRKUywgTG9jYWxTdG9yYWdlLCBNYXBib3hHTCwgTWFya2Rvd24sIFNpZXN0YSwgU3R5bGVzaGVldCwgV2luZG93UG9zaXRpb25cbiAgICAgKiAoc3JjL21haW4vYWRkb24pXG4gICAgICogQGRlZmF1bHQgWydEcmFnRHJvcCcsJ1N0eWxlc2hlZXQnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5tYWluVGhyZWFkQWRkb25zXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICBtYWluVGhyZWFkQWRkb25zOiBbJ0RyYWdEcm9wJywgJ1N0eWxlc2hlZXQnXSxcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIHZpc3VhbGx5IHNob3cgdGhlIGFtb3VudCBvZiBkZWx0YSB1cGRhdGVzIHBlciBzZWNvbmQgdXNpbmcgdGhpcyBjb25maWcuXG4gICAgICogSXQgZXhwZWN0cyBhIGRvbSBub2RlIHdpdGggdGhlIGlkIFwibmVvLWRlbHRhLXVwZGF0ZXNcIiBhcyB0aGUgcmVuZGVyaW5nIHRhcmdldC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZW5kZXJDb3VudERlbHRhc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICByZW5kZXJDb3VudERlbHRhczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkIHRoZW1lcyB5b3Ugd2FudCB0byB1c2UgaGVyZS4gVGhlIGZpcnN0IHRoZW1lIHdpbGwgZ2V0IGFwcGxpZWQuXG4gICAgICogSWYgY29uZmlnLnVzZUNzc1ZhcnMgPT09IHRydWUsIG90aGVyIHRoZW1lIHZhcmlhYmxlcyB3aWxsIGdldCBpbmNsdWRlZCBhcyB3ZWxsXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy50aGVtZXNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIHRoZW1lczogWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBzdGFuZGFsb25lIFNpZXN0YSBtb2R1bGUgdGVzdHMgPT4gcHJldmVudCByZWdpc3RlclJlbW90ZSB3b3JrZXIgbWVzc2FnZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51bml0VGVzdE1vZGVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdW5pdFRlc3RNb2RlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIENTUyB2YXJpYWJsZSBiYXNlZCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3NWYXJzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNzc1ZhcnM6IHRydWUsXG4gICAgLyoqXG4gICAgICogRXhwZXJpbWVudGFsIGZsYWcgaWYgYW4gb2Zmc2NyZWVuIGNhbnZhcyB3b3JrZXIgc2hvdWxkIGdldCBjcmVhdGVkLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUNzc1ZhcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlQ2FudmFzV29ya2VyOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIHZkb20gaWRzIHNob3VsZCBnZXQgbWFwcGVkIGludG8gRE9NIGVsZW1lbnQgaWRzLlxuICAgICAqIGZhbHNlIHdpbGwgY29udmVydCB0aGVtIGludG8gYSBcImRhdGEtbmVvLWlkXCIgYXR0cmlidXRlLlxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRG9tSWRzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZURvbUlkczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBUcnVlIHdpbGwgYXV0b21hdGljYWxseSBpbmNsdWRlIHRoZSBzdHlsZXNoZWV0XG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VGb250QXdlc29tZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VGb250QXdlc29tZTogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbnRlbmRlZCBmb3IgdGhlIG9ubGluZSBleGFtcGxlcyB3aGVyZSB3ZSBuZWVkIGFuIGVhc3kgd2F5IHRvIGFkZCBHQSB0byBldmVyeSBnZW5lcmF0ZWQgYXBwXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlR29vZ2xlQW5hbHl0aWNzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUdvb2dsZUFuYWx5dGljczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBBcHAsIERhdGEgJiBWRG9tIGFzIFNoYXJlZFdvcmtlcnMuXG4gICAgICogU2V0IHRoaXMgb25lIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjb25uZWN0IG11bHRpcGxlIG1haW4gdGhyZWFkcy5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VTaGFyZWRXb3JrZXJzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZVNoYXJlZFdvcmtlcnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEFkZHMgZ2xvYmFsIGRvbSBldmVudCBsaXN0ZW5lcnMgZm9yIG1vYmlsZSByZWxhdGVkIGV2ZW50cyBsaWtlIHJvdGF0ZSwgc3dpcGUsIHRhcFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlVG91Y2hFdmVudHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVG91Y2hFdmVudHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogRmFsc2Ugd2lsbCBjcmVhdGUgdGhlIHZkb20uSGVscGVyIHdpdGhpbiB0aGUgQXBwIHdvcmtlciAoZXhwZXJpbWVudGFsISlcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVZkb21Xb3JrZXJcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlVmRvbVdvcmtlcjogdHJ1ZVxufTtcblxuT2JqZWN0LmFzc2lnbihEZWZhdWx0Q29uZmlnLCB7XG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAncmVzb3VyY2VzLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHJlc291cmNlc1BhdGg6IGAke05lby5jb25maWcuYmFzZVBhdGggfHwgRGVmYXVsdENvbmZpZy5iYXNlUGF0aH1yZXNvdXJjZXMvYCxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3NyYy93b3JrZXIvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHdvcmtlckJhc2VQYXRoOiBgJHtOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGh9c3JjL3dvcmtlci9gLFxufSk7XG5cbmV4cG9ydCB7RGVmYXVsdENvbmZpZyBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4vRGVmYXVsdENvbmZpZy5tanMnO1xuXG5jb25zdCBjb25maWdTeW1ib2wgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGdldFNldENhY2hlICA9IFN5bWJvbCgnZ2V0U2V0Q2FjaGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBtb2R1bGUgdG8gZW5oYW5jZSBjbGFzc2VzLCBjcmVhdGUgaW5zdGFuY2VzIGFuZCB0aGUgTmVvIG5hbWVzcGFjZVxuICogQG1vZHVsZSBOZW9cbiAqIEBzaW5nbGV0b25cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuYmluZE1ldGhvZHMgICAgICAgYXMgYmluZE1ldGhvZHNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY2FwaXRhbGl6ZSAgICAgICAgYXMgY2FwaXRhbGl6ZVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdCBhcyBjcmVhdGVTdHlsZU9iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZXMgICAgICBhcyBjcmVhdGVTdHlsZXNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuZGVjYW1lbCAgICAgICAgICAgYXMgZGVjYW1lbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0FycmF5ICAgICAgICAgICBhcyBpc0FycmF5XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQm9vbGVhbiAgICAgICAgIGFzIGlzQm9vbGVhblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0RlZmluZWQgICAgICAgICBhcyBpc0RlZmluZWRcbiAqIEBib3Jyb3dzIE5lby5jb3JlLkNvbXBhcmUuaXNFcXVhbCAgICAgICAgYXMgaXNFcXVhbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc051bWJlciAgICAgICAgICBhcyBpc051bWJlclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc09iamVjdCAgICAgICAgICBhcyBpc09iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC50b0FycmF5ICAgICAgICAgICBhcyB0b0FycmF5XG4gKiBAdHV0b3JpYWwgMDFfQ29uY2VwdFxuICovXG5sZXQgTmVvID0gc2VsZi5OZW8gfHwge307XG5cbk5lbyA9IHNlbGYuTmVvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgLyoqXG4gICAgICogQSBtYXAgY29udGFpbmluZyBudHlwZXMgYXMga2V5IGFuZCBOZW8gY2xhc3NlcyBvciBzaW5nbGV0b25zIGFzIHZhbHVlc1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBudHlwZU1hcDoge30sXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBOZW8uY3JlYXRlLiBGYWxzZSBmb3IgdGhlIG1haW4gdGhyZWFkLCB0cnVlIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGluc2lkZVdvcmtlcjogdHlwZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnLFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNscyBUaGUgTmVvIGNsYXNzIHRvIGFwcGx5IGNvbmZpZ3MgdG9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgYXBwbHlDbGFzc0NvbmZpZyhjbHMpIHtcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IG51bGwsXG4gICAgICAgICAgICBwcm90byAgICAgICAgID0gY2xzLnByb3RvdHlwZSB8fCBjbHMsXG4gICAgICAgICAgICBwcm90b3MgICAgICAgID0gW10sXG4gICAgICAgICAgICBjb25maWcsIGN0b3IsIHN0YXRpY0NvbmZpZztcblxuICAgICAgICB3aGlsZSAocHJvdG8uX19wcm90b19fKSB7XG4gICAgICAgICAgICBjdG9yID0gcHJvdG8uY29uc3RydWN0b3I7XG5cbiAgICAgICAgICAgIGlmIChjdG9yLmhhc093blByb3BlcnR5KCdjbGFzc0NvbmZpZ0FwcGxpZWQnKSkge1xuICAgICAgICAgICAgICAgIGJhc2VDZmcgICAgICAgPSBOZW8uY2xvbmUoY3Rvci5jb25maWcsICAgICAgIHRydWUpO1xuICAgICAgICAgICAgICAgIGJhc2VTdGF0aWNDZmcgPSBOZW8uY2xvbmUoY3Rvci5zdGF0aWNDb25maWcsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm90b3MudW5zaGlmdChwcm90byk7XG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZyAgICAgICA9IGJhc2VDZmcgICAgICAgfHwge307XG4gICAgICAgIHN0YXRpY0NvbmZpZyA9IGJhc2VTdGF0aWNDZmcgfHwge307XG5cbiAgICAgICAgcHJvdG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjdG9yID0gZWxlbWVudC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGxldCBjZmcgICAgICAgPSBjdG9yLmdldENvbmZpZyAgICAgID8uKCkgfHwge30sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2ZnID0gY3Rvci5nZXRTdGF0aWNDb25maWc/LigpIHx8IHt9LFxuICAgICAgICAgICAgICAgIG1peGlucztcblxuICAgICAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNmZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFoYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ250eXBlJykpIHtcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRpY0NmZz8ub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFwcGx5TWl4aW5zKGN0b3IsIG1peGlucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgZmFsc2UsIGN0b3IucHJvdG90eXBlLm1peGlucykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2ZnLm9ic2VydmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGNmZy5taXhpbnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNmZyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIG1ldGhvZHMgZnJvbSBvbmUgbmFtZXNwYWNlIHRvIGFub3RoZXIgb25lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBhbGlhc2VzXG4gICAgICogTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgICAqICAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnXG4gICAgICogfSwgdHJ1ZSk7XG4gICAgICpcbiAgICAgKiAvLyBlLmcuIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgPT4gTmVvLmlzT2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lb3xOZW8uY29yZS5CYXNlfSB0YXJnZXQgVGhlIHRhcmdldCBjbGFzcyBvciBzaW5nbGV0b24gSW5zdGFuY2Ugb3IgTmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYmluZF0gc2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGJpbmQgbWV0aG9kcyB0byB0aGUgXCJmcm9tXCIgbmFtZXNwYWNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHlGcm9tTnModGFyZ2V0LCBuYW1lc3BhY2UsIGNvbmZpZywgYmluZCkge1xuICAgICAgICBsZXQgZm5OYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihjb25maWcpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcblxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIHRydWUpO1xuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIE5lby50eXBlT2YoZGVmYXVsdHMpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGVlcD1mYWxzZV0gU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNsb25lIG5lc3RlZCBvYmplY3RzIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2VdIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XG4gICAgICovXG4gICAgY2xvbmUob2JqLCBkZWVwPWZhbHNlLCBpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG91dDtcblxuICAgICAgICBzd2l0Y2ggKE5lby50eXBlT2Yob2JqKSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyYXknOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFkZWVwID8gWy4uLm9ial0gOiBbLi4ub2JqLm1hcCh2YWwgPT4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdEYXRlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShvYmoudmFsdWVPZigpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnTWFwJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTWFwKG9iaik7IC8vIHNoYWxsb3cgY29weVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdOZW9JbnN0YW5jZSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ09iamVjdCc6IHtcbiAgICAgICAgICAgICAgICBvdXQgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gIWRlZXAgPyB2YWx1ZSA6IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1NldCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNldChvYmopOyAvLyBzaGFsbG93IGNvcHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsQ29uZmlnIHdpdGhvdXQgdGhlIGlkXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGluc3RhbmNlXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IHRoZSBjbG9uZWQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbG9uZU5lb0luc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB7Li4uaW5zdGFuY2Uub3JpZ2luYWxDb25maWd9O1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lkO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGluc3RhbmNlLmNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlIE5lby5jcmVhdGUoKSBpbnN0ZWFkIG9mIFwibmV3XCIgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhbGwgTmVvIGNsYXNzZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0Jhc2UubWpzJztcbiAgICAgKlxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgY2xhc3NOYW1lOiAnTmVvLmJ1dHRvbi5CYXNlJyxcbiAgICAgKiAgICAgaWNvbkNscyAgOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8TmVvLmNvcmUuQmFzZX0gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V8bnVsbH0gVGhlIG5ldyBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZykge1xuICAgICAgICBsZXQgdHlwZSA9IE5lby50eXBlT2YoY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdOZW9DbGFzcycpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzTmFtZSB8fCBjb25maWcubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKGNvbmZpZyk7XG5cbiAgICAgICAgaW5zdGFuY2Uub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICBpbnN0YW5jZS5vbkFmdGVyQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuXG4gICAgZW1wdHlGbigpIHt9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5ucygnTmVvLmJ1dHRvbi5CYXNlJywgdHJ1ZSk7XG4gICAgICogLy8gPT5cbiAgICAgKiAvLyBzZWxmLk5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudCA9IHNlbGYuTmVvLmNvbXBvbmVudCB8fCB7fTtcbiAgICAgKiAvLyBzZWxmLk5lby5idXR0b24uQmFzZSA9IHNlbGYuTmVvLmJ1dHRvbi5CYXNlIHx8IHt9O1xuICAgICAqIC8vIHJldHVybiBzZWxmLk5lby5idXR0b24uQmFzZTtcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IG5hbWVzIFRoZSBjbGFzcyBuYW1lIHN0cmluZyBjb250YWluaW5nIGRvdHMgb3IgYW4gQXJyYXkgb2YgdGhlIHN0cmluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZV0gU2V0IGNyZWF0ZSB0byB0cnVlIHRvIGNyZWF0ZSBlbXB0eSBvYmplY3RzIGZvciBub24gZXhpc3RpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgc2VsZlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlZmVyZW5jZSB0byB0aGUgdG9wbGV2ZWwgbmFtZXNwYWNlXG4gICAgICovXG4gICAgbnMobmFtZXMsIGNyZWF0ZSwgc2NvcGUpIHtcbiAgICAgICAgbmFtZXMgPSBBcnJheS5pc0FycmF5KG5hbWVzKSA/IG5hbWVzIDogbmFtZXMuc3BsaXQoJy4nKTtcblxuICAgICAgICByZXR1cm4gbmFtZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3JlYXRlICYmICFwcmV2W2N1cnJlbnRdKSB7XG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUgfHwgc2VsZik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIE5lbyBjbGFzc2VzIHVzaW5nIHRoZWlyIG50eXBlIGluc3RlYWQgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5udHlwZSgnYnV0dG9uJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoe1xuICAgICAqICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbnR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ11cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX1cbiAgICAgKiBAc2VlIHtAbGluayBtb2R1bGU6TmVvLmNyZWF0ZSBjcmVhdGV9XG4gICAgICovXG4gICAgbnR5cGUobnR5cGUsIGNvbmZpZykge1xuICAgICAgICBpZiAodHlwZW9mIG50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uZmlnID0gbnR5cGU7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5udHlwZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgZGVmaW5lZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgbnR5cGUgcHJvcGVydHkuICcgKyBjb25maWcubnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbnR5cGUgPSBjb25maWcubnR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gTmVvLm50eXBlTWFwW250eXBlXTtcblxuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudHlwZSAnICsgbnR5cGUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0eXBlT2YoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgaXRlbSkge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJvdG90eXBlPy5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnTmVvQ2xhc3MnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29uc3RydWN0b3IuaXNDbGFzcyAmJiBpdGVtIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ05lb0luc3RhbmNlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbn0sIE5lbyk7XG5cbi8qKlxuICogTGlzdCBvZiBjbGFzcyBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBub3Qgc3VwcG9zZWQgdG8gZ2V0IG1peGVkIGludG8gb3RoZXIgY2xhc3Nlc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWdub3JlTWl4aW4gPSBbXG4gICAgJ19uYW1lJyxcbiAgICAnY2xhc3NDb25maWdBcHBsaWVkJyxcbiAgICAnY2xhc3NOYW1lJyxcbiAgICAnY29uc3RydWN0b3InLFxuICAgICdpc0NsYXNzJyxcbiAgICAnbWl4aW4nLFxuICAgICdudHlwZScsXG4gICAgJ29ic2VydmFibGUnLFxuICAgICdyZWdpc3RlclRvR2xvYmFsTnMnXG5dO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICogQHBhcmFtIHtBcnJheX0gbWl4aW5zXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhcHBseU1peGlucyhjbHMsIG1peGlucykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtaXhpbnMpKSB7XG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdO1xuICAgIH1cblxuICAgIGxldCBpICAgICAgICAgICAgPSAwLFxuICAgICAgICBsZW4gICAgICAgICAgPSBtaXhpbnMubGVuZ3RoLFxuICAgICAgICBtaXhpbkNsYXNzZXMgPSB7fSxcbiAgICAgICAgbWl4aW4sIG1peGluQ2xzLCBtaXhpblByb3RvO1xuXG4gICAgZm9yICg7aSA8IGxlbjtpKyspIHtcbiAgICAgICAgbWl4aW4gPSBtaXhpbnNbaV07XG5cbiAgICAgICAgaWYgKG1peGluLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbi5wcm90b3R5cGU7XG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluUHJvdG8uY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKG1peGluKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBtaXhpbiBhbiB1bmRlZmluZWQgY2xhc3M6ICcgKyBtaXhpbiArICcsICcgKyBjbHMucHJvdG90eXBlLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluKTtcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbkNscy5wcm90b3R5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZShtaXhSZWR1Y2UobWl4aW5DbHMpLCBtaXhpbkNsYXNzZXMpO1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1peGluUHJvdG8pLmZvckVhY2gobWl4aW5Qcm9wZXJ0eShjbHMucHJvdG90eXBlLCBtaXhpblByb3RvKSk7XG4gICAgfVxuXG4gICAgY2xzLnByb3RvdHlwZS5taXhpbnMgPSBtaXhpbkNsYXNzZXM7IC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2Vcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwcml2YXRlXG4gKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAqL1xuZnVuY3Rpb24gYXV0b0dlbmVyYXRlR2V0U2V0KHByb3RvLCBrZXkpIHtcbiAgICBpZiAoaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkpIHtcbiAgICAgICAgdGhyb3coJ0NvbmZpZyAnICsga2V5ICsgJ18gKCcgKyBwcm90by5jbGFzc05hbWUgKyAnKSBhbHJlYWR5IGhhcyBhIHNldCBtZXRob2QsIHVzZSBiZWZvcmVHZXQsIGJlZm9yZVNldCAmIGFmdGVyU2V0IGluc3RlYWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9O1xuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlR2V0ID0gYGJlZm9yZUdldCR7a2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YCxcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gbWVbY29uZmlnU3ltYm9sXS5oYXNPd25Qcm9wZXJ0eShrZXkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgICAgPSBtZVtjb25maWdTeW1ib2xdW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlOyAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIHNldHRlciA9PiBiZWZvcmVTZXQsIGFmdGVyU2V0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZUdldF0odmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHVLZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2V0ID0gJ2JlZm9yZVNldCcgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOZW8uY2xvbmUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcbiAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgZG9uJ3QgcmV0dXJuIGEgdmFsdWUsIHRoYXQgbWVhbnMgbm8gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIU5lby5pc0VxdWFsKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbYWZ0ZXJTZXRdPy4odmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuYWZ0ZXJTZXRDb25maWc/LihrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywga2V5LCBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleGlzdHMoY2xhc3NOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcbiAgICAgICAgfSwgc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgc2V0IG1ldGhvZCBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBrZXkgaW5zaWRlIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG8gVGhlIHRvcCBsZXZlbCBwcm90b3R5cGUgb2YgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgcHJvcGVydHkga2V5IHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkge1xuICAgIGxldCBkZXNjcmlwdG9yO1xuXG4gICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KTtcblxuICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkZXNjcmlwdG9yLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IG1peGluUHJvdG9cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peGluUHJvcGVydHkocHJvdG8sIG1peGluUHJvdG8pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICh+aWdub3JlTWl4aW4uaW5kZXhPZihrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3RvW2tleV0/Ll9mcm9tKSB7XG4gICAgICAgICAgICBpZiAobWl4aW5Qcm90by5jbGFzc05hbWUgPT09IHByb3RvW2tleV0uX2Zyb20pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01peGluIHNldCBtdWx0aXBsZSB0aW1lcyBvciBhbHJlYWR5IGRlZmluZWQgb24gYSBCYXNlIENsYXNzJywgcHJvdG8uY2xhc3NOYW1lLCBtaXhpblByb3RvLmNsYXNzTmFtZSwga2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7cHJvdG8uY2xhc3NOYW1lfTogTXVsdGlwbGUgbWl4aW5zIGRlZmluaW5nIHNhbWUgcHJvcGVydHkgKCR7bWl4aW5Qcm90by5jbGFzc05hbWV9LCAke3Byb3RvW2tleV0uX2Zyb219KSA9PiAke2tleX1gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdG9ba2V5XSA9IG1peGluUHJvdG9ba2V5XTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpLl9mcm9tID0gbWl4aW5Qcm90by5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm90b1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwcm90b1trZXldLl9uYW1lID0ga2V5O1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG1peGluQ2xzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhSZWR1Y2UobWl4aW5DbHMpIHtcbiAgICByZXR1cm4gKHByZXYsIGN1cnJlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdID0gaWR4ICE9PSBhcnIubGVuZ3RoIC0xID8gcHJldltjdXJyZW50XSB8fCB7fSA6IG1peGluQ2xzO1xuICAgIH07XG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCB7TmVvIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJ1xuXG5jb25zdCBjb25maWdTeW1ib2wgICAgICAgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGZvcmNlQXNzaWduQ29uZmlncyA9IFN5bWJvbCgnZm9yY2VBc3NpZ25Db25maWdzJyksXG4gICAgICBpc0luc3RhbmNlICAgICAgICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgKGFsbW9zdCkgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBFeGNlcHRpb25zIGFyZSBlLmcuIGNvcmUuSWRHZW5lcmF0b3IsIHZkb20uVk5vZGVcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byB0aGUgY2xhc3MgY29uc3RydWN0b3JcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byBlYWNoIGNsYXNzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBzaG9ydGN1dC1uYW1lIHRvIHVzZSBmb3IgZS5nLiBjcmVhdGluZyBjaGlsZCBjb21wb25lbnRzIGluc2lkZSBhIEpTT04tZm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIGNvbXBvbmVudCBpZFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGlkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lby5jcmVhdGUoKSB3aWxsIGNoYW5nZSB0aGlzIGZsYWcgdG8gdHJ1ZSBhZnRlciB0aGUgb25Db25zdHJ1Y3RlZCgpIGNoYWluIGlzIGRvbmUuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzQ29uc3RydWN0ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb25zdHJ1Y3RlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogWW91IGNhbiBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYnkgcGFzc2luZyBhbiBpbXBvcnRlZCBjbGFzcyAoSlMgbW9kdWxlIGRlZmF1bHQgZXhwb3J0KVxuICAgICAgICAgKiBAbWVtYmVyIHtDbGFzc30gbW9kdWxlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kdWxlOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIHRoZSBzdGF0aWMgZ2V0Q29uZmlnKCkgcmV0dXJuIG9iamVjdC5cbiAgICAgKiBBcHBsaWVzIHRoZSBvYnNlcnZhYmxlIG1peGluIGlmIG5lZWRlZCwgZ3JhbnRzIHJlbW90ZSBhY2Nlc3MgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWc9e31cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvbmZpZ1N5bWJvbF06IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICA6IHt9LFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtpc0luc3RhbmNlXToge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuY3JlYXRlSWQoY29uZmlnLmlkIHx8IG1lLmlkKTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICBpZiAobWUuY29uc3RydWN0b3IuY29uZmlnKSB7XG4gICAgICAgICAgICBkZWxldGUgbWUuY29uc3RydWN0b3IuY29uZmlnLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZ2V0U3RhdGljQ29uZmlnKCdvYnNlcnZhYmxlJykgJiYgbWUuaW5pdE9ic2VydmFibGUoY29uZmlnKTtcblxuICAgICAgICBtZS5pbml0Q29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnY29uZmlnc0FwcGxpZWQnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucmVtb3RlICYmIHNldFRpbWVvdXQobWUuaW5pdFJlbW90ZS5iaW5kKG1lKSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpZCBjb25maWcgZ290IGNoYW5nZWQuXG4gICAgICogWW91IGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgaW5zdGFuY2UgaWRzIGlmIG5lZWRlZC4gVGhleSBuZWVkIHRvIHN0YXkgdW5pcXVlIGF0IGFueSBnaXZlbiBwb2ludC5cbiAgICAgKiBVc2UgY2FzZTogZS5nLiBjb21wb25lbnQgYmFzZWQgbGlzdHMsIHdoZXJlIHlvdSB3YW50IHRvIHJlLXVzZSBpdGVtIGluc3RhbmNlcy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFtvbGRWYWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5lby5pZE1hcCA9IE5lby5pZE1hcCB8fCB7fTtcbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IHZhbHVlIG9yIG9sZFZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0aWNOYW1lKSA/IHN0YXRpY05hbWUgOiB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcihgU3VwcG9ydGVkIHZhbHVlcyBmb3IgJHtuYW1lfSBhcmU6ICR7dmFsdWVzLmpvaW4oJywgJyl9YCwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgSWRHZW5lcmF0b3IgdG8gY3JlYXRlIGFuIGlkIGlmIGEgc3RhdGljIG9uZSBpcyBub3QgZXhwbGljaXRseSBzZXQuXG4gICAgICogUmVnaXN0ZXJzIHRoZSBpbnN0YW5jZSB0byBtYW5hZ2VyLkluc3RhbmNlIGlmIHRoaXMgb25lIGlzIGFscmVhZHkgY3JlYXRlZCxcbiAgICAgKiBvdGhlcndpc2Ugc3RvcmVzIGl0IGluc2lkZSBhIHRtcCBtYXAuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgY3JlYXRlSWQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IElkR2VuZXJhdG9yLmdldElkKHRoaXMuZ2V0SWRLZXkoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgdGhpcyBpbnN0YW5jZSBmcm9tIE5lby5tYW5hZ2VyLkluc3RhbmNlXG4gICAgICogYW5kIHJlbW92ZXMgYWxsIG9iamVjdCBlbnRyaWVzIGZyb20gdGhpcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaWRNYXApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXBbbWUuaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG1lLCBrZXkpLndyaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgaW5zaWRlIGNyZWF0ZUlkKCkgYXMgdGhlIGRlZmF1bHQgdmFsdWUgcGFzc2VkIHRvIHRoZSBJZEdlbmVyYXRvci5cbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBhcyBuZWVkZWQuXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJZEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGtleSBvciB0aGUgc3RhdGljQ29uZmlnIG9iamVjdCBpdHNlbGYgaW4gY2FzZSBubyB2YWx1ZSBpcyBzZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0U3RhdGljQ29uZmlnKGtleSkge1xuICAgICAgICBsZXQgY2ZnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG4gICAgICAgIHJldHVybiAoa2V5ID8gY2ZnW2tleV0gOiBjZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQoKSBpcyBkb25lXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgaW5pdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKi9cbiAgICBpbml0Q29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCBtZS5tZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykpO1xuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvZXMgZ2V0IHRyaWdnZXJlZCB3aXRoIGEgZGVsYXkgdG8gZW5zdXJlIHRoYXQgTmVvLndvcmtlcklkICYgTmVvLndvcmtlci5NYW5hZ2VyIGFyZSBkZWZpbmVkXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVtb3RlICAgICAgICA9IG1lLnJlbW90ZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgPSBtZS5jbGFzc05hbWUsXG4gICAgICAgICAgICBjdXJyZW50V29ya2VyID0gTmVvLmN1cnJlbnRXb3JrZXIsXG4gICAgICAgICAgICBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW90ZSBtZXRob2QgYWNjZXNzIGlzIG9ubHkgZnVuY3Rpb25hbCBmb3IgU2luZ2xldG9uIGNsYXNzZXMgJyArIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIU5lby5jb25maWcudW5pdFRlc3RNb2RlICYmIE5lby5pc09iamVjdChyZW1vdGUpKSB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSAnbWFpbicgJiYgY3VycmVudFdvcmtlci5pc1NoYXJlZFdvcmtlciAmJiAhY3VycmVudFdvcmtlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVySWQgPSBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXb3JrZXIudW4oJ2Nvbm5lY3RlZCcsIGxpc3RlbmVySWQpO1xuICAgICAgICAgICAgICAgICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XG5cbiAgICAgICAgaWYgKCFjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgICAgIG1lLm9yaWdpbmFsQ29uZmlnID0gTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gey4uLmN0b3IuY29uZmlnLCAuLi5jb25maWd9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25BZnRlckNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlzQ29uc3RydWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFdlIGNhbiBvbmx5IGZpcmUgdGhlIGV2ZW50IGluIGNhc2UgdGhlIE9ic2VydmFibGUgbWl4aW4gaXMgaW5jbHVkZWQuXG4gICAgICAgIG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpICYmIG1lLmZpcmUoJ2NvbnN0cnVjdGVkJywgbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVwbGFjZSBzdHJpbmcgYmFzZWQgdmFsdWVzIGNvbnRhaW5pbmcgXCJAY29uZmlnOlwiIHdpdGggdGhlIG1hdGNoaW5nIGNvbmZpZyB2YWx1ZVxuICAgICAqIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGl0ZW1zXG4gICAgICovXG4gICAgcGFyc2VJdGVtQ29uZmlncyhpdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhpdGVtKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUl0ZW1Db25maWdzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnN0YXJ0c1dpdGgoJ0Bjb25maWc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDgpLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZVt2YWx1ZV0gJiYgIW1lLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSB1c2VkIEBjb25maWcgZG9lcyBub3QgZXhpc3Q6JywgdmFsdWUsIG1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGNvbmZpZyBtaWdodCBub3QgYmUgcHJvY2Vzc2VkIHlldCwgZXNwZWNpYWxseSBmb3IgY29uZmlnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBlbmRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBjb25maWdTeW1ib2wgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtrZXldID0gbWVbY29uZmlnU3ltYm9sXVt2YWx1ZV0gfHwgbWVbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgc2V0KCksIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmUgY2FuIGFscmVhZHkgYmUgYXNzaWduZWQsXG4gICAgICogc28gdGhlIGhhc093blByb3BlcnR5KCkgY2hlY2sgd2lsbCByZXR1cm4gdHJ1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlQXNzaWduPWZhbHNlXVxuICAgICAqL1xuICAgIHByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKTtcblxuICAgICAgICBtZVtmb3JjZUFzc2lnbkNvbmZpZ3NdID0gZm9yY2VBc3NpZ247XG5cbiAgICAgICAgLy8gV2UgZG8gbm90IHdhbnQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBrZXlzLCBzaW5jZSAxIGNvbmZpZyBjYW4gcmVtb3ZlIG1vcmUgdGhhbiAxIGtleSAoYmVmb3JlU2V0WCwgYWZ0ZXJTZXRYKVxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcbiAgICAgICAgICAgIC8vID0+IHRoZXkgY291bGQgYWxyZWFkeSBnb3QgYXNzaWduZWQgaW5zaWRlIGFuIGFmdGVyU2V0LW1ldGhvZFxuICAgICAgICAgICAgaWYgKGZvcmNlQXNzaWduIHx8ICFtZS5oYXNPd25Qcm9wZXJ0eShrZXlzWzBdKSkge1xuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUgY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8ga2VlcCB0aGlzIG9uZSBmb3IgY29uZmlncywgd2hpY2ggZG8gbm90IHVzZSBnZXR0ZXJzIChubyB0cmFpbGluZyB1bmRlcnNjb3JlKVxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG5cbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpIHtcbiAgICAgICAgbGV0IG9yaWdpbjtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xuXG4gICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3RlclJlbW90ZScsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKi9cbiAgICBzZXQodmFsdWVzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gSWYgdGhlIGluaXRpYWwgY29uZmlnIHByb2Nlc3NpbmcgaXMgc3RpbGwgcnVubmluZyxcbiAgICAgICAgLy8gZmluaXNoIHRoaXMgb25lIGZpcnN0IGJlZm9yZSBkcm9wcGluZyBuZXcgdmFsdWVzIGludG8gdGhlIGNvbmZpZ1N5bWJvbC5cbiAgICAgICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvMjIwMVxuICAgICAgICBpZiAobWVbZm9yY2VBc3NpZ25Db25maWdzXSAhPT0gdHJ1ZSAmJiBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCB2YWx1ZXMpO1xuXG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBieSBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbmZpZyBleGlzdHMgYW5kIGdvdCBjaGFuZ2VkXG4gICAgICovXG4gICAgc2V0U3RhdGljQ29uZmlnKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHN0YXRpY0NvbmZpZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIGlmIChzdGF0aWNDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgc3RhdGljQ29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgdG9TdHJpbmcoKSBtZXRob2QsIGUuZy48L3A+XG4gICAgICogYE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScpLnRvU3RyaW5nKCkgPT4gXCJbb2JqZWN0IE5lby5idXR0b24uQmFzZSAobmVvLWJ1dHRvbi0xKV1cImBcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xhc3NOYW1lfSAoaWQ6ICR7dGhpcy5pZH0pYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIGluc3RhbmNlb2YgbWV0aG9kLiBXaXRob3V0IHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogPHA+V2l0aCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiBmYWxzZWA8YnI+XG4gICAgICogYE5lby5jcmVhdGUoTmVvLmNvbGxlY3Rpb24uQmFzZSkgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSBmYWxzZTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLkNvbXBhcmVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQ29tcGFyZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5Db21wYXJlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5Db21wYXJlJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbTFcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRXF1YWwoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHR5cGUxID0gTmVvLnR5cGVPZihpdGVtMSksXG4gICAgICAgICAgICB0eXBlMiA9IE5lby50eXBlT2YoaXRlbTIpLFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGlmICh0eXBlMSAhPT0gdHlwZTIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHlwZTEpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5sZW5ndGggIT09IGl0ZW0yLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbaSwgdl0gb2YgaXRlbTEuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKHYsIGl0ZW0yW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLnZhbHVlT2YoKSA9PT0gaXRlbTIudmFsdWVPZigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdGdW5jdGlvbic6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEubmFtZSAhPT0gaXRlbTIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLnRvU3RyaW5nKCkgPT09IGl0ZW0yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ01hcCc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHZhbDI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgaXRlbTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IGl0ZW0yLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwyICE9PSB2YWwgfHwgdmFsMiA9PT0gdW5kZWZpbmVkICYmICFpdGVtMi5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ05lb0luc3RhbmNlJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5pZCAhPT0gaXRlbTIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdPYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0xKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGl0ZW0yKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGl0ZW0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKGl0ZW0xW2tleV0sIGl0ZW0yW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS50b1N0cmluZygpICE9PSBpdGVtMi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnU2V0Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5zaXplICE9PSBpdGVtMi5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGtleSBvZiBpdGVtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0yLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtMSA9PT0gaXRlbTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBhcmUpO1xuXG4vLyBhbGlhc1xuTmVvLmlzRXF1YWwgPSBDb21wYXJlLmlzRXF1YWw7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmU7XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXG4gKiBJdCBjb3VsZCBnZXQgc2ltcGxpZmllZCB0byBqdXN0IGJlaW5nIGFuIG9iamVjdCAobmVlZHMgdG8gbWFudWFsbHkgZ2V0IHB1dCBpbnRvIHRoZSBOZW8gbmFtZXNwYWNlIGluIHRoaXMgY2FzZSkuXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSWRHZW5lcmF0b3Ige1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2lkLWdlbmVyYXRvcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcbiAgICAgICAgICovXG4gICAgICAgIGJhc2U6ICduZW8tJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj0ndHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaWRDb3VudGVyID0ge307XG5cbiAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldElkID0gbWUuZ2V0SWQuYmluZChtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKElkR2VuZXJhdG9yKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5Mb2dnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkxvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsb2dnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0nbG9nJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsZXZlbDogJ2xvZycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIC8vIGFsaWFzZXNcbiAgICAgICAgTmVvLmFwcGx5RnJvbU5zKE5lbywgdGhpcywge1xuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxuICAgICAgICAgICAgbG9nICAgICA6ICdsb2cnLFxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgZXJyb3IodmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnaW5mbyc7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnbG9nJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nRXJyb3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgd2FybiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnd2Fybic7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3cml0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUxvZ3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExvZ2dlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTG9nZ2VyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5PYnNlcnZhYmxlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuT2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IGV2ZW50SWQgbnVsbCBpbiBjYXNlIGFuIG9iamVjdCBnZXRzIHBhc3NlZCBhcyB0aGUgbmFtZSAobXVsdGlwbGUgaWRzKVxuICAgICAqL1xuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuYW1lT2JqZWN0ID0gdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgbGlzdGVuZXIsIGV4aXN0aW5nLCBldmVudENvbmZpZztcblxuICAgICAgICBpZiAobmFtZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzLmZuO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7IC8vIFZDIGhvb2ssIGNhbiBnZXQgcGFyc2VkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaW4gY2FzZSB0aGUgdmlldyB1c2VzIHRoZSBwYXJlbnQgVkNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGZuICAgIDogbGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcbiAgICAgICAgICAgICAgICBkYXRhICA6IGRhdGEsXG4gICAgICAgICAgICAgICAgaWQgICAgOiBldmVudElkIHx8IE5lby5nZXRJZCgnZXZlbnQnKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzPy5bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcuaWQgPT09IGV2ZW50SWQgfHwgKGNmZy5mbiA9PT0gbGlzdGVuZXIgJiYgY2ZnLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOicsIG5hbWUsIG1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcuc3BsaWNlKG9yZGVyLCAwLCBldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcudW5zaGlmdChldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5saXN0ZW5lcnNbbmFtZV0gPSBbZXZlbnRDb25maWddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgZmlyZShuYW1lKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyAgICAgID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzLFxuICAgICAgICAgICAgZXZlbnRDb25maWcsIGV2ZW50cywgaSwgbGVuO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBldmVudHMgPSBbLi4ubGlzdGVuZXJzW25hbWVdXTtcbiAgICAgICAgICAgIGxlbiAgICA9IGV2ZW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnID0gZXZlbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcuZm4uYXBwbHkoZXZlbnRDb25maWcuc2NvcGUgfHwgbWUsIGV2ZW50Q29uZmlnLmRhdGEgPyBhcmdzLmNvbmNhdChldmVudENvbmZpZy5kYXRhKSA6IGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdE9ic2VydmFibGUoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcbiAgICAgICAgICAgIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzID0gY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLmxpc3RlbmVycyA9IHt9O1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QobGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IHsuLi5saXN0ZW5lcnN9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHByb3RvPy5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnLm9ic2VydmFibGUgJiYgIXByb3RvLmNvbnN0cnVjdG9yLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvdG8uY29uc3RydWN0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICBmaXJlICAgICAgICAgIDogbWUuZmlyZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBtZS5yZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgdW4gICAgICAgICAgICA6IG1lLnVuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBhZGRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgb24oLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKi9cbiAgICByZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudElkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpLCBsZW4sIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIG1hdGNoLCBzY29wZTtcblxuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgICAgICBpZiAobmFtZS5zY29wZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gbmFtZS5zY29wZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5zY29wZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobmFtZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW2tleV0gfHwgW107XG4gICAgICAgICAgICAgICAgaSAgICAgICAgID0gMDtcbiAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5mbi5uYW1lID09PSAoTmVvLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlIDogdmFsdWUubmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLnNjb3BlICAgPT09IHNjb3BlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzU3RyaW5nKGV2ZW50SWQpKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgICAgICBtYXRjaCAgICAgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGV2ZW50Q29uZmlnLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRDb25maWcuaWQgPT09IGV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyBzdXNwZW5kTGlzdGVuZXJzOiBmdW5jdGlvbihxdWV1ZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICovXG4gICAgdW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoT2JzZXJ2YWJsZSk7XG5cbmV4cG9ydCB7T2JzZXJ2YWJsZSBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5VdGlsXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFV0aWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZ2V4IHRvIHJlbW92ZSBjYW1lbCBjYXNlIHN5bnRheFxuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGRlY2FtZWxSZWdFeD0vKFthLXpdKShbQS1aXSkvZ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGRlY2FtZWxSZWdFeDogLyhbYS16XSkoW0EtWl0pL2dcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLlV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLlV0aWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29yZS11dGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvcmUtdXRpbCcsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdmFsdWVzXG4gICAgICovXG4gICAgc3RhdGljIGJpbmRNZXRob2RzKHNjb3BlLCB2YWx1ZXMpIHtcbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgc2NvcGVbdmFsdWVdID0gc2NvcGVbdmFsdWVdLmJpbmQoc2NvcGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc3RyaW5nIHVwcGVyY2FzZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXG4gICAgICovXG4gICAgc3RhdGljIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVdGlsLmlzU3RyaW5nKHN0cmluZykgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhIHN0eWxlcyBzdHJpbmcgaW50byBhIHN0eWxlcyBvYmplY3QgdXNpbmcgY2FtZWxjYXNlIHN5bnRheFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIHN0eWxlcyBzdHJpbmcgdG8gcGFyc2VcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgY2FtZWxjYXNlIHN0eWxlcyBvYmplY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVPYmplY3Qoc3RyaW5nKSB7XG4gICAgICAgIGlmICghc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJ0cztcblxuICAgICAgICAvLyBzcGxpdCgnOycpIGRvZXMgZmV0Y2ggc2VtaWNvbG9ucyBpbnNpZGUgYnJhY2tldHNcbiAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogXCJ1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwuLi5cblxuICAgICAgICAvLyBUT0RPOiBDYWNoZSBhbGwgcmVnZXhcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgvOyg/PVteXFwpXSooPzpcXCh8JCkpL2cpLnJlZHVjZSgob2JqLCBlbCkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBzcGxpdCBieSB0aGUgZmlyc3QgY29sb24gb25seVxuICAgICAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vZXhhbXBsZS5jb20vaW1hZ2UucG5nJylcbiAgICAgICAgICAgIHBhcnRzID0gZWwuc3BsaXQoKC86KC4rKS8pKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh4KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IG51bSA/IG51bSA6IHgudHJpbSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2JqW3BhcnRzWzBdXSA9IHBhcnRzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3R5bGVzIG9iamVjdCB3aGljaCBjYW4gdXNlIGNhbWVsY2FzZSBzeW50YXggaW50byBhIHN0eWxlcyBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIFRoZSBzdHlsZXMgb2JqZWN0XG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0eWxlcyBzdHJpbmcgKERPTSByZWFkeSlcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBsZXQgc3R5bGUgPSAnJztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhzdHlsZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBVdGlsLmRlY2FtZWwoa2V5KSArICc6JyArIHZhbHVlICsgJzsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhbGwgdXBwZXJjYXNlIGNoYXJhY3RlcnMgb2YgYSBzdHJpbmcgaW50byBsb3dlcmNhc2UuXG4gICAgICogRG9lcyBub3QgdG91Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBsb3dlcmNhc2Ugb3V0cHV0XG4gICAgICovXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoVXRpbC5kZWNhbWVsUmVnRXgsICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fFN0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZXJhYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBsZW47XG5cbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGUuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhYmxlLCBzdGFydCB8fCAwLCBlbmQgfHwgbGVuKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFV0aWwpO1xuXG4vLyBhbGlhc2VzXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgYmluZE1ldGhvZHMgICAgICA6ICdiaW5kTWV0aG9kcycsXG4gICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXG4gICAgZGVjYW1lbCAgICAgICAgICA6ICdkZWNhbWVsJyxcbiAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcbiAgICBpc0RlZmluZWQgICAgICAgIDogJ2lzRGVmaW5lZCcsXG4gICAgaXNFbXB0eSAgICAgICAgICA6ICdpc0VtcHR5JyxcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxuICAgIGlzTnVtYmVyICAgICAgICAgOiAnaXNOdW1iZXInLFxuICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxuICAgIHRvQXJyYXkgICAgICAgICAgOiAndG9BcnJheSdcbn0sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvbXBhcmUgICAgIGZyb20gJy4vQ29tcGFyZS5tanMnO1xuaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJztcbmltcG9ydCBMb2dnZXIgICAgICBmcm9tICcuL0xvZ2dlci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgIGZyb20gJy4vVXRpbC5tanMnO1xuXG5leHBvcnQge0Jhc2UsIENvbXBhcmUsIElkR2VuZXJhdG9yLCBMb2dnZXIsIE9ic2VydmFibGUsIFV0aWx9O1xuIiwiaW1wb3J0IENvcmVCYXNlICAgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyBmcm9tICcuL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMnO1xuXG4vKipcbiAqIFRoZSBhYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB0aGUgQXBwLCBEYXRhICYgVkRvbSB3b3JrZXJcbiAqIEBjbGFzcyBOZW8ud29ya2VyLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBhYnN0cmFjdFxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBjaGFubmVsUG9ydHM9bnVsbFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjaGFubmVsUG9ydHMgPSBudWxsXG4gICAgLyoqXG4gICAgICogT25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0Nvbm5lY3RlZD1mYWxzZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpc0Nvbm5lY3RlZCA9IGZhbHNlXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNTaGFyZWRXb3JrZXI9ZmFsc2VcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaXNTaGFyZWRXb3JrZXIgPSBmYWxzZVxuICAgIC8qKlxuICAgICAqIE9ubHkgbmVlZGVkIGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gcG9ydHM9bnVsbFxuICAgICAqL1xuICAgIHBvcnRzID0gbnVsbFxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby53b3JrZXIuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9W09ic2VydmFibGUsUmVtb3RlTWV0aG9kQWNjZXNzXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbT2JzZXJ2YWJsZSwgUmVtb3RlTWV0aG9kQWNjZXNzXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB3b3JrZXJJZD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHdvcmtlcklkOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZSwge1xuICAgICAgICAgICAgY2hhbm5lbFBvcnRzICA6IHt9LFxuICAgICAgICAgICAgaXNTaGFyZWRXb3JrZXI6IHNlbGYudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgU2hhcmVkV29ya2VyR2xvYmFsU2NvcGVdJyxcbiAgICAgICAgICAgIHBvcnRzICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgIHByb21pc2VzICAgICAgOiB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIHNlbGYub25jb25uZWN0ID0gbWUub25Db25uZWN0ZWQuYmluZChtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm9ubWVzc2FnZSA9IG1lLm9uTWVzc2FnZS5iaW5kKG1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby53b3JrZXJJZCAgICAgID0gbWUud29ya2VySWQ7XG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyID0gbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW50cnkgcG9pbnQgZm9yIGRlZGljYXRlZCBhbmQgc2hhcmVkIHdvcmtlcnNcbiAgICAgKi9cbiAgICBhZnRlckNvbm5lY3QoKSB7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQb3J0KG9wdHMpIHtcbiAgICAgICAgbGV0IHJldHVyblBvcnQgPSBudWxsLFxuICAgICAgICAgICAgaGFzTWF0Y2g7XG5cbiAgICAgICAgdGhpcy5wb3J0cy5mb3JFYWNoKHBvcnQgPT4ge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHBvcnRba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5Qb3J0ID0gcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblBvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSByZWxldmFudCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Db25uZWN0KGRhdGEpIHtcbiAgICAgICAgLy8gc2hvcnQgZGVsYXkgdG8gZW5zdXJlIGFwcCBWQ3MgYXJlIGluIHBsYWNlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlKCdjb25uZWN0Jywge1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IGRhdGEuYXBwTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBvbkNvbm5lY3RlZChlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpZCA9IE5lby5nZXRJZCgncG9ydCcpO1xuXG4gICAgICAgIG1lLmlzQ29ubmVjdGVkID0gdHJ1ZTtcblxuICAgICAgICBtZS5wb3J0cy5wdXNoKHtcbiAgICAgICAgICAgIGFwcE5hbWU6IG51bGwsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHBvcnQgICA6IGUucG9ydHNbMF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucG9ydHNbbWUucG9ydHMubGVuZ3RoIC0gMV0ucG9ydC5vbm1lc3NhZ2UgPSBtZS5vbk1lc3NhZ2UuYmluZChtZSk7XG5cbiAgICAgICAgLy8gY29yZS5CYXNlOiBpbml0UmVtb3RlKCkgc3Vic2NyaWJlcyB0byB0aGlzIGV2ZW50IGZvciB0aGUgU2hhcmVkV29ya2VycyBjb250ZXh0XG4gICAgICAgIG1lLmZpcmUoJ2Nvbm5lY3RlZCcpO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3dvcmtlckNvbnN0cnVjdGVkJywgcG9ydDogaWR9KTtcblxuICAgICAgICBtZS5hZnRlckNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG1lLnNlbmRNZXNzYWdlKCdtYWluJywge2FjdGlvbjogJ3dvcmtlckNvbnN0cnVjdGVkJ30pO1xuICAgICAgICAgICAgbWUuYWZ0ZXJDb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbmx5IHJlbGV2YW50IGZvciBTaGFyZWRXb3JrZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRpc2Nvbm5lY3QoZGF0YSkge1xuICAgICAgICB0aGlzLmZpcmUoJ2Rpc2Nvbm5lY3QnLCB7XG4gICAgICAgICAgICBhcHBOYW1lOiBkYXRhLmFwcE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZVxuICAgICAqL1xuICAgIG9uTWVzc2FnZShlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRhdGEgICAgPSBlLmRhdGEsXG4gICAgICAgICAgICBhY3Rpb24gID0gZGF0YS5hY3Rpb24sXG4gICAgICAgICAgICByZXBseUlkID0gZGF0YS5yZXBseUlkLFxuICAgICAgICAgICAgcHJvbWlzZTtcblxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXNzYWdlIGFjdGlvbiBpcyBtaXNzaW5nOiAnICsgZGF0YS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uICE9PSAncmVwbHknKSB7XG4gICAgICAgICAgICBtZVsnb24nICsgTmVvLmNhcGl0YWxpemUoYWN0aW9uKV0oZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvbWlzZSA9IGFjdGlvbiA9PT0gJ3JlcGx5JyAmJiBtZS5wcm9taXNlc1tyZXBseUlkXSkge1xuICAgICAgICAgICAgaWYgKGRhdGEucmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGRhdGEuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBtZS5wcm9taXNlc1tyZXBseUlkXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUGluZyhtc2cpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlKG1zZywge1xuICAgICAgICAgICAgb3JpZ2luTXNnOiBtc2dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25SZWdpc3Rlck5lb0NvbmZpZyhtc2cpIHtcbiAgICAgICAgTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oTmVvLmNvbmZpZywgbXNnLmRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHByb21pc2VNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXG4gICAgICAgICAgICAgICAgbXNnSWQgICA9IG1lc3NhZ2UuaWQ7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VzW21zZ0lkXSA9IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhLCBtYWluIG9yIHZkb20gKGV4Y2x1ZGluZyB0aGUgY3VycmVudCB3b3JrZXIpXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7TmVvLndvcmtlci5NZXNzYWdlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xuICAgICAgICBvcHRzLmRlc3RpbmF0aW9uID0gZGVzdDtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbWVzc2FnZSwgcG9ydCwgcG9ydE9iamVjdDtcblxuICAgICAgICBpZiAobWUuY2hhbm5lbFBvcnRzW2Rlc3RdKSB7XG4gICAgICAgICAgICBwb3J0ID0gbWUuY2hhbm5lbFBvcnRzW2Rlc3RdO1xuICAgICAgICB9IGVsc2UgaWYgKCFtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgcG9ydCA9IHNlbGY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAob3B0cy5wb3J0KSB7XG4gICAgICAgICAgICAgICAgcG9ydCA9IG1lLmdldFBvcnQoe2lkOiBvcHRzLnBvcnR9KS5wb3J0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRzLmFwcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwb3J0T2JqZWN0ID0gbWUuZ2V0UG9ydCh7YXBwTmFtZTogb3B0cy5hcHBOYW1lfSk7XG4gICAgICAgICAgICAgICAgcG9ydCAgICAgICA9IHBvcnRPYmplY3QucG9ydDtcblxuICAgICAgICAgICAgICAgIG9wdHMucG9ydCA9IHBvcnRPYmplY3QuaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcnQgPSBtZS5wb3J0c1swXS5wb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpO1xuXG4gICAgICAgIHBvcnQucG9zdE1lc3NhZ2UobWVzc2FnZSwgdHJhbnNmZXIpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgSWRHZW5lcmF0b3IgZnJvbSAnLi4vY29yZS9JZEdlbmVyYXRvci5tanMnO1xuXG4vKipcbiAqIEEgd3JhcHBlciBmb3Igd29ya2VyIHBvc3QgbWVzc2FnZXMgc2VudCBiZXR3ZWVuIHRoZSBBcHAsIERhdGEsIFZEb20gd29ya2VyICYgdGhlIG1haW4gdGhyZWFkLlxuICogWW91IGNhbiBhZGQgb3B0aW9uYWwgcGFyYW1zIGFzIG5lZWRlZC5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLk1lc3NhZ2VcbiAqL1xuY2xhc3MgTWVzc2FnZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFjdGlvblxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZXN0aW5hdGlvbj0nbWFpbidcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWQ9SWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvcmlnaW49TmVvLndvcmtlcklkXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbmZpZy5kZXN0aW5hdGlvbiA9IGNvbmZpZy5kZXN0aW5hdGlvbiB8fCAnbWFpbic7XG4gICAgICAgIGNvbmZpZy5pZCAgICAgICAgICA9IGNvbmZpZy5pZCAgICAgICAgICB8fCBJZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpO1xuICAgICAgICBjb25maWcub3JpZ2luICAgICAgPSBjb25maWcub3JpZ2luICAgICAgfHwgTmVvLndvcmtlcklkO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB9XG59XG5cbmNvbnN0IG5zID0gTmVvLm5zKCdOZW8ud29ya2VyJywgdHJ1ZSk7XG5uc1snTWVzc2FnZSddID0gTWVzc2FnZTtcblxuZXhwb3J0IHtNZXNzYWdlIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFJlbW90ZU1ldGhvZEFjY2VzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKCo9LCAqPSk6IFByb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9yaWdpbiA9IHJlbW90ZS5vcmlnaW47XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEsIGJ1ZmZlcikge1xuICAgICAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICAgICAgOiAncmVtb3RlTWV0aG9kJyxcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uICAgIDogb3JpZ2luLFxuICAgICAgICAgICAgICAgIHJlbW90ZUNsYXNzTmFtZTogcmVtb3RlLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICByZW1vdGVNZXRob2QgICA6IG1ldGhvZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG1lLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gb3B0cy5hcHBOYW1lIHx8IGRhdGE/LmFwcE5hbWU7XG4gICAgICAgICAgICAgICAgb3B0cy5wb3J0ICAgID0gb3B0cy5wb3J0ICAgIHx8IGRhdGE/LnBvcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtZS5wcm9taXNlTWVzc2FnZShvcmlnaW4sIG9wdHMsIGJ1ZmZlcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICovXG4gICAgb25SZWdpc3RlclJlbW90ZShyZW1vdGUpIHtcbiAgICAgICAgaWYgKHJlbW90ZS5kZXN0aW5hdGlvbiA9PT0gTmVvLndvcmtlcklkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGV4aXN0cyAgICA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1ldGhvZHMgICA9IHJlbW90ZS5tZXRob2RzLFxuICAgICAgICAgICAgICAgIHBrZyAgICAgICA9IE5lby5ucyhjbGFzc05hbWUsIHRydWUpO1xuXG4gICAgICAgICAgICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW90ZS5vcmlnaW4gIT09ICdtYWluJyAmJiBwa2dbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByZW1vdGUgbWV0aG9kIGRlZmluaXRpb24gJyArIGNsYXNzTmFtZSArICcuJyArIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFwa2dbbWV0aG9kXSApIHtcbiAgICAgICAgICAgICAgICAgICAgcGtnW21ldGhvZF0gPSBtZS5nZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gdG9kbzogaW5zcGVjdCBpZiB0aGlzIGNhbiBnZXQgcmVtb3ZlZFxuICAgICAgICAgICAgaWYgKCFleGlzdHMgJiYgTmVvLndvcmtlcklkICE9PSAnbWFpbicpIHtcbiAgICAgICAgICAgICAgICBtZS5maXJlKCdyZW1vdGVyZWdpc3RlcmVkJywgcmVtb3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVtb3RlTWV0aG9kKG1zZykge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHBrZyA9IE5lby5ucyhtc2cucmVtb3RlQ2xhc3NOYW1lKSxcbiAgICAgICAgICAgIG91dCwgbWV0aG9kO1xuXG4gICAgICAgIGlmICghcGtnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG5hbWVzcGFjZSBcIicgKyBtc2cucmVtb3RlQ2xhc3NOYW1lICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2QgPSBwa2dbbXNnLnJlbW90ZU1ldGhvZF07XG5cbiAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbWV0aG9kIG5hbWUgXCInICsgbXNnLnJlbW90ZU1ldGhvZCArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnLmRhdGEpKSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIC4uLm1zZy5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgbXNnLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG91dC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBtZS5yZWplY3QobXNnLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgb3V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZWplY3RlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlamVjdChtc2csIGRhdGEpIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbXNnLmFwcE5hbWU7XG4gICAgICAgICAgICBvcHRzLnBvcnQgICAgPSBtc2cucG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlc29sdmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgcmVzb2x2ZShtc2csIGRhdGEpIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICBvcHRzLmFwcE5hbWUgPSBtc2cuYXBwTmFtZTtcbiAgICAgICAgICAgIG9wdHMucG9ydCAgICA9IG1zZy5wb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCBvcHRzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJlbW90ZU1ldGhvZEFjY2Vzcyk7XG5cbmV4cG9ydCB7UmVtb3RlTWV0aG9kQWNjZXNzIGFzIGRlZmF1bHR9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTmVvICAgICAgIGZyb20gJy4uL05lby5tanMnO1xuaW1wb3J0IEJhc2UgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCAqIGFzIGNvcmUgZnJvbSAnLi4vY29yZS9fZXhwb3J0Lm1qcyc7XG5cbi8qKlxuICogVGhlIENhbnZhcyB3b3JrZXIgaXMgcmVzcG9uc2libGUgZm9yIGR5bmFtaWNhbGx5IG1hbmlwdWxhdGluZyBvZmZzY3JlZW4gY2FudmFzLlxuICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvT2Zmc2NyZWVuQ2FudmFzXG4gKiBAY2xhc3MgTmVvLndvcmtlci5DYW52YXNcbiAqIEBleHRlbmRzIE5lby53b3JrZXIuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBDYW52YXMgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5DYW52YXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuQ2FudmFzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtleTogdmFsdWUgPT4gY2FudmFzSWQ6IE9mZnNjcmVlbkNhbnZhc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcD17fVxuICAgICAgICAgKi9cbiAgICAgICAgbWFwOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gd29ya2VySWQ9J2NhbnZhcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6ICdjYW52YXMnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYWZ0ZXJDb25uZWN0KCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCksXG4gICAgICAgICAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcblxuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IG1lLm9uTWVzc2FnZS5iaW5kKG1lKTtcblxuICAgICAgICBtZS5zZW5kTWVzc2FnZSgnYXBwJywge2FjdGlvbjogJ3JlZ2lzdGVyUG9ydCcsIHRyYW5zZmVyOiBwb3J0fSwgW3BvcnRdKTtcblxuICAgICAgICBtZS5jaGFubmVsUG9ydHMuYXBwID0gY2hhbm5lbC5wb3J0MTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25SZWdpc3RlckNhbnZhcyhkYXRhKSB7XG4gICAgICAgIHRoaXMubWFwW2RhdGEubm9kZUlkXSA9IGRhdGEubm9kZTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJOZW9Db25maWcobXNnKSB7XG4gICAgICAgIHN1cGVyLm9uUmVnaXN0ZXJOZW9Db25maWcobXNnKTtcblxuICAgICAgICBsZXQgcGF0aCA9IE5lby5jb25maWcuYXBwUGF0aC5zbGljZSgwLCAtOCk7IC8vIHJlbW92aW5nIFwiL2FwcC5tanNcIlxuXG4gICAgICAgIGltcG9ydChcbiAgICAgICAgICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwvY2FudmFzLm1qcyQvICovXG4gICAgICAgICAgICAvKiB3ZWJwYWNrRXhjbHVkZTogL1xcL25vZGVfbW9kdWxlcy8gKi9cbiAgICAgICAgICAgIC8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL1xuICAgICAgICAgICAgYC4uLy4uLyR7cGF0aH0vY2FudmFzLm1qc2BcbiAgICAgICAgKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICBtb2R1bGUub25TdGFydCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENhbnZhcyk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQ2FudmFzKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9