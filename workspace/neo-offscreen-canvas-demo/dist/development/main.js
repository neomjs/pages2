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
    useTouchEvents: true
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

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);




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
class Compare extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
class Logger extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
/* harmony export */   Base: () => (/* reexport safe */ _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Compare: () => (/* reexport safe */ _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   IdGenerator: () => (/* reexport safe */ _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Logger: () => (/* reexport safe */ _Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Observable: () => (/* reexport safe */ _Observable_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Util: () => (/* reexport safe */ _Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compare.mjs */ "./node_modules/neo.mjs/src/core/Compare.mjs");
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");
/* harmony import */ var _Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");










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
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");




/**
 * @class Neo.main.DomAccess
 * @extends Neo.core.Base
 * @singleton
 */
class DomAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
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
            _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]
        ],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'addScript',
                'applyBodyCls',
                'execCommand',
                'focus',
                'getAttributes',
                'getBoundingClientRect',
                'scrollBy',
                'scrollIntoView',
                'scrollTo',
                'scrollToTableRow',
                'selectNode',
                'setBodyCls',
                'setStyle',
                'windowScrollTo'
            ]
        },
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
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this,
            node;

        if (Neo.config.renderCountDeltas) {
            setInterval(() => {
                node = document.getElementById('neo-delta-updates');

                if (node) {
                   node.innerHTML = String(me.countDeltasPer250ms * 4);
                }

                me.countDeltasPer250ms = 0;
            }, 250);
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Boolean} data.async
     * @param {Boolean} [data.defer=false]
     * @param {String} [data.src=true]
     */
    addScript(data) {
        const script = document.createElement('script');

        if (!data.hasOwnProperty('async')) {
            data.async = true;
        }

        Object.assign(script, data);

        document.head.appendChild(script);
    }

    /**
     *
     * @param {Object} data
     * @param {String[]} data.cls
     */
    applyBodyCls(data) {
        const cls = data.cls || [];
        document.body.classList.add(...cls);
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.command
     * @returns {Object} data
     */
    execCommand(data) {
        document.execCommand(data.command);
        return data;
    }

    /**
     * Calls focus on a node for a given dom node id
     * @param {Object} data
     * @returns {Object} obj.id => the passed id
     */
    focus(data) {
        let node = this.getElement(data.id);

        if (node) {
            node.focus();

            if (Neo.isNumber(node.selectionStart)) {
                node.selectionStart = node.selectionEnd = node.value.length;
            }
        }

        return {id: data.id};
    }

    /**
     * Returns the attributes for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @param {Array|String} data.attributes either an attribute or an array of attributes
     * @returns {Array|Object} In case id is an array, an array of atrrbute objects is returned, otherwise an object
     */
    getAttributes(data) {
        let returnData;

        if (Array.isArray(data.id)) {
            returnData = [];

            data.id.forEach(id => {
                returnData.push(this.getAttributes({
                    attributes: data.attributes,
                    id        : id
                }));
            });
        } else {
            let node = this.getElementOrBody(data.id);

            returnData = {};

            if (node) {
                if (!Array.isArray(data.attributes)) {
                    data.attributes = [data.attributes];

                    data.attributes.forEach(attribute => {
                        returnData[attribute] = node[attribute];
                    })
                }
            }
        }

        return returnData;
    }

    /**
     * Returns node.getBoundingClientRect() for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @returns {Array|Object} In case id is an array, an array of DomRects is returned, otherwise an DomRect object
     */
    getBoundingClientRect(data) {
        let returnData;

        if (Array.isArray(data.id)) {
            returnData = [];

            data.id.forEach(id => {
                returnData.push(this.getBoundingClientRect({id: id}));
            });
        } else {
            let node = this.getElementOrBody(data.id),
                rect = {};

            returnData = {};

            if (node) {
                rect = node.getBoundingClientRect();

                // DomRect does not support spreading => {...DomRect} => {}
                Object.assign(returnData, {
                    bottom: rect.bottom,
                    height: rect.height,
                    left  : rect.left,
                    right : rect.right,
                    top   : rect.top,
                    width : rect.width,
                    x     : rect.x,
                    y     : rect.y
                });
            }
        }

        return returnData;
    }

    /**
     *
     * @param {String} nodeId
     * @returns {HTMLElement}
     * @protected
     */
    getElement(nodeId) {
        if (Neo.config.useDomIds) {
            return document.getElementById(nodeId);
        }

        return document.querySelector(`[data-neo-id='${nodeId}']`);
    }

    /**
     *
     * @param {String} [nodeId='document.body']
     * @returns {HTMLElement}
     * @protected
     */
    getElementOrBody(nodeId='document.body') {
        if (nodeId === 'body' || nodeId === 'document.body') {
            return document.body;
        }

        return this.getElement(nodeId);
    }

    /**
     * Include a script into the document.head
     * @param {String} src
     * @param {Boolean} [async=true]
     * @returns {Promise<unknown>}
     */
    loadScript(src, async=true) {
        let script;

        return new Promise((resolve, reject) => {
            script = document.createElement('script');

            Object.assign(script, {
                async  : async,
                onerror: reject,
                onload : resolve,
                src    : src
            });

            document.head.appendChild(script);
        });
    }

    /**
     * Include a link into the document.head
     * @param {String} href
     * @returns {Promise<unknown>}
     */
    loadStylesheet(href) {
        let link;

        return new Promise((resolve, reject) => {
            link = document.createElement('link');

            Object.assign(link, {
                href   : href,
                onerror: reject,
                onload : resolve,
                rel    : 'stylesheet',
                type   : 'text/css'
            });

            document.head.appendChild(link);
        });
    }

    /**
     *
     */
    onDomContentLoaded() {
        if (Neo.config.applyBodyCls) {
            this.applyBodyCls({cls: ['neo-body']});
        }
    }

    /**
     * @param {Object} data
     * @param {String} data.nodeId
     */
    onGetOffscreenCanvas(data) {
        let me        = this,
            node      = me.getElement(data.nodeId),
            offscreen = node.transferControlToOffscreen();

        data.offscreen = offscreen;

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        }, [offscreen]);
    }

    /**
     *
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
            vnodeId       = data.vnodeId,
            retAttributes = {},
            retFunctions  = {},
            retStyles     = {},
            element       = vnodeId ? this.getElement(vnodeId) : null,
            fnName, scope;

        attributes.forEach(key => {
            retAttributes[key] = element[key];
        });

        functions.forEach((key, index) => {
            if (Neo.isObject(key)) {
                key.params         = key.params         || [];
                key.paramIsDomNode = key.paramIsDomNode || [];

                scope = key.scope ? document[key.scope] : element;

                key.params.forEach((param, paramIndex) => {
                    if (key.paramIsDomNode[paramIndex] === true) {
                        key.params[paramIndex] = this.getElement(key.params[paramIndex]);
                    }
                });

                fnName = key.returnFnName ? key.returnFnName : index;
                retFunctions[fnName] = scope[key.fn](...key.params);

                if (key.returnValue) {
                    retFunctions[fnName] = retFunctions[fnName][key.returnValue];
                }
            } else {
                retFunctions[key] = element[key]();
            }
        });

        styles.forEach(key => {
            retStyles[key] = element.style[key];
        });

        Object.assign(data, {
            attributes: retAttributes,
            functions : retFunctions,
            styles    : retStyles
        });

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    read(data) {
        if (typeof data === 'function') {
            data();
        }
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.direction left, top
     * @param {String} data.id
     * @param {Number} data.value
     * @returns {Object} obj.id => the passed id
     */
    scrollBy(data) {
        let node = this.getElement(data.id);

        if (node) {
            node[`scroll${Neo.capitalize(data.direction)}`] += data.value;
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {String} [data.behavior='smooth']
     * @param {String} [data.block='start']
     * @param {String} [data.inline='nearest']
     * @returns {Object} obj.id => the passed id
     */
    scrollIntoView(data) {
        let node = this.getElement(data.id);

        if (node) {
            node.scrollIntoView({
                behavior: data.behavior || 'smooth',
                block   : data.block    || 'start',
                inline  : data.inline   || 'nearest'
            });
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.direction left, top
     * @param {String} data.id
     * @param {Number} data.value
     * @returns {Object} obj.id => the passed id
     */
    scrollTo(data) {
        let node = this.getElement(data.id);

        if (node) {
            node[`scroll${Neo.capitalize(data.direction)}`] = data.value;
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {String} [data.behavior='smooth']
     * @param {String} [data.offset=34]
     * @returns {Object} obj.id => the passed id
     */
    scrollToTableRow(data) {
        let node = this.getElement(data.id); // tr tag

        if (node) {
            let tableNode   = node.parentNode.parentNode,
                wrapperNode = tableNode.parentNode,
                tableTop    = tableNode.getBoundingClientRect().top,
                top         = node.getBoundingClientRect().top;

            wrapperNode.scrollTo({
                top     : top - tableTop - (data.hasOwnProperty('offset') ? data.offset : 34),
                behavior: data.behavior || 'smooth'
            });
        }

        return {id: data.id};
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.id
     * @param {Number} [data.start=0]
     * @param {Number} [data.end=99999]
     * @returns {Object} obj.id => the passed id
     */
    selectNode(data) {
        let node  = this.getElement(data.id),
            start = Neo.isNumber(data.start) || 0,
            end   = Neo.isNumber(data.end)   || 99999;

        if (node) {
            node.select();
            node.setSelectionRange(start, end);
        }

        return {id: data.id};
    }

    /**
     * @param {Object} data
     * @param {String[]} data.add
     * @param {Object[]} data.remove
     */
    setBodyCls(data) {
        document.body.classList.remove(...data.remove || []);
        document.body.classList.add(...data.add || []);
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
                    node.style.setProperty(Neo.decamel(key), value, 'important');
                } else {
                    node.style[Neo.decamel(key)] = value;
                }
            });
        }

        return {id: data.id};
    }

    /**
     *
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
        });
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    write(data) {
        this.du_insertNode({
            index    : data.parentIndex,
            outerHTML: data.html || data.outerHTML,
            parentId : data.parentId
        });
    }
}

Neo.applyClassConfig(DomAccess);

let instance = Neo.create(DomAccess);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


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
/* harmony import */ var _mixin_TouchDomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin/TouchDomEvents.mjs */ "./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs");




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
    {name: 'wheel',       handler: 'onWheel',      options: {passive: false}}
];

// Will get applied to the document.body in case Neo.config.useTouchEvents === true (default value)
const touchEvents = [
    {name: 'touchcancel', handler: 'onTouchCancel'},
    {name: 'touchend',    handler: 'onTouchEnd'},
    {name: 'touchenter',  handler: 'onTouchEnter'},
    {name: 'touchleave',  handler: 'onTouchLeave'},
    {name: 'touchmove',   handler: 'onTouchMove'},
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

const preventClickTargets       = [],
      preventContextmenuTargets = [];

/**
 * @class Neo.main.DomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
         * @member {String} className='Neo.main.DomEvents'
         * @protected
         */
        className: 'Neo.main.DomEvents',
        /**
         * todo: conditional dynamic import once the build processes can handle it
         * @member {Array} mixins=[TouchDomEvents]
         */
        mixins: [_mixin_TouchDomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]],
        /**
         * @member {boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: ['addDomListener']}
         * @protected
         */
        remote: {
            app: [
                'addDomListener',
                'registerPreventDefaultTargets'
            ]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        document.addEventListener('DOMContentLoaded', me.onDomContentLoaded.bind(me));
        window  .addEventListener('hashchange',       me.onHashChange      .bind(me));

        if (Neo.config.useSharedWorkers) {
            window.addEventListener('beforeunload', me.onBeforeUnload.bind(me));
        }
    }

    /**
     *
     * @param {Object} data
     */
    addDomListener(data) {
        let me  = this,
            i   = 0,
            len = data.events.length,
            event, id, targetNode;

        for (; i < len; i++) {
            event = data.events[i];

            if (!me[event.handler]) {
                me[event.handler] = Neo.emptyFn;
            }

            id = event.vnodeId || data.vnodeId;

            if (id === 'document.body') {
                targetNode = document.body;
            } else if (Neo.config.useDomIds) {
                targetNode = document.getElementById(id);
            } else {
                targetNode = document.querySelector(`[data-neo-id='${id}']`);
            }

            targetNode.addEventListener(event.name, me[event.handler].bind(me));
        }

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data   : data,
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     */
    addGlobalDomListeners() {
        let me = this;

        [...globalDomEvents].concat(Neo.config.useTouchEvents ? touchEvents : []).forEach(event => {
            document.body.addEventListener(event.name, me[event.handler].bind(me), event.options);
        });
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
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    /**
     * Local domEvent listener
     * @param {Object} event
     */
    domEventListener(event) {
        let me     = this,
            target = event.target,
            config = {
                action   : 'domEvent',
                eventName: event.type,

                data: {
                    ...me.getEventData(event),
                    id   : target.id,
                    value: target.value
                }
            };

        // console.log('domEventListener', event.type, target.id, target.value, event);

        switch (event.type) {
            case 'dragend':
                me.dragElementId = null;
                break;
            case 'dragenter':
                if (me.dragElementId === target.id) {
                    return; // ignore target and source to be the same
                }
                break;
            case 'dragleave':
                if (me.dragElementId === target.id) {
                    return; // ignore target and source to be the same
                }
                break;
            case 'dragover':
                me.onDragOver(event);
                event.preventDefault();
                break;
            case 'dragstart':
                me.dragElementId = target.id;
                break;
            case 'drop':
                if (!me.dragElementId || me.dragElementId === target.id) {
                    return; // drop fires twice by default & drop should not trigger on the drag element
                }
                if (event.stopPropagation) {
                    event.stopPropagation(); // stops the browser from redirecting.
                }
                event.preventDefault();
                config.data.srcId = me.dragElementId;
                me.dragElementId = null;
                break;
            case 'mousemove':
                Object.assign(config.data, me.getMouseEventData(event));
                break;
            default:
                event.preventDefault();
                break;
        }

        Neo.worker.Manager.sendMessage('app', config);
    }

    /**
     *
     * @param {Object} event
     * @returns {Object}
     */
    getEventData(event) {
        let path = event.path || event.composedPath(); // FF does not support path

        return {
            path     : path.map(e => this.getTargetData(e)),
            target   : this.getTargetData(event.target),
            timeStamp: event.timeStamp,
            type     : event.type
        };
    }

    /**
     *
     * @param {Object} event
     * @returns {Object}
     */
    getKeyboardEventData(event) {
        const {altKey, code, ctrlKey, key, keyCode, metaKey, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey  : altKey,
            code    : code,
            ctrlKey : ctrlKey,
            key     : key,
            keyCode : keyCode,
            metaKey : metaKey,
            shiftKey: shiftKey
        };
    }

    /**
     *
     * @param {Object} event
     * @returns {Object}
     */
    getMouseEventData(event) {
        const {altKey, clientX, clientY, ctrlKey, metaKey, offsetX, offsetY, pageX, pageY, screenX, screenY, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey  : altKey,
            clientX : clientX,
            clientY : clientY,
            ctrlKey : ctrlKey,
            metaKey : metaKey,
            offsetX : offsetX,
            offsetY : offsetY,
            pageX   : pageX,
            pageY   : pageY,
            screenX : screenX,
            screenY : screenY,
            shiftKey: shiftKey
        };
    }

    /**
     *
     * @param {Element} element
     * @returns {Element[]}
     */
    getPathFromElement(element) {
        let path = [];

        if (element) {
            path.push(element);

            while (element.parentNode) {
                path.push(element.parentNode);
                element = element.parentNode;
            }
        }

        return path;
    }

    /**
     *
     * @param {Object} node
     * @returns {Object}
     */
    getTargetData(node) {
        let r    = node.getBoundingClientRect?.(),
            rect = {};

        if (r) {
            Object.assign(rect, {
                bottom: r.bottom,
                height: r.height,
                left  : r.left,
                right : r.right,
                top   : r.top,
                width : r.width,
                x     : r.x,
                y     : r.y
            });
        }

        return {
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
            scrollHeight     : node.scrollHeight,
            scrollLeft       : node.scrollLeft,
            scrollTop        : node.scrollTop,
            scrollWidth      : node.scrollWidth,
            style            : node.style?.cssText,
            tabIndex         : node.tabIndex,
            tagName          : node.tagName?.toLowerCase()
        };
    }

    /**
     * Returns the first touch event found in touches or changedTouches of a TouchEvent
     * @param {TouchEvent} event
     * @returns {Touch}
     */
    getTouchCoords(event) {
        const {touches, changedTouches} = event;
        return touches?.[0] || changedTouches?.[0];
    }

    /**
     * Only in use if Neo.config.useSharedWorkers = true
     * @param {Object} event
     */
    onBeforeUnload(event) {
        let M = Neo.worker.Manager;

        M.appNames.forEach(appName => {
            M.broadcast({
                action : 'disconnect',
                appName: appName
            });
        })
    }

    /**
     *
     * @param {Object} event
     */
    onChange(event) {
        this.sendMessageToApp({
            ...this.getEventData(event),
            valid: event.target.checkValidity(),
            value: event.target.value
        });
    }

    /**
     *
     * @param {Object} event
     */
    onClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (me.testPathInclusion(event, preventClickTargets)) {
            event.preventDefault();
        }
    }

    /**
     *
     * @param {Object} event
     */
    onContextMenu(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (me.testPathInclusion(event, preventContextmenuTargets)) {
            event.preventDefault();
        }
    }

    /**
     *
     */
    onDomContentLoaded() {
        this.addGlobalDomListeners();
        this.fire('domContentLoaded');
    }

    /**
     *
     * @param {Object} event
     */
    onDoubleClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        if (me.testPathInclusion(event, preventClickTargets)) {
            event.preventDefault();
        }
    }

    /**
     *
     * @param {Object} event
     */
    onDragOver(event) {
        event.dataTransfer.dropEffect = 'move';
        //console.log('onDragOver', event);
    }

    /**
     *
     * @param {Object} event
     */
    onFocusIn(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onFocusOut(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     */
    onHashChange() {
        const Manager    = Neo.worker.Manager,
              hashString = location.hash.substr(1);

        Manager.sendMessage('app', {
            action: 'hashChange',
            data  : {
                appNames  : Manager.appNames,
                hash      : this.parseHash(hashString),
                hashString: hashString
            }
        });
    }

    /**
     *
     * @param {Object} event
     */
    onKeyDown(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event));

        if (event.target.nodeName !== 'INPUT') { // see: https://github.com/neomjs/neo/issues/1729
            if (['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(event.key)) {
                event.preventDefault();
            }
        }
    }

    /**
     *
     * @param {Object} event
     */
    onKeyUp(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onMouseDown(event) {
        this.sendMessageToApp(this.getMouseEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onMouseEnter(event) {
        let me       = this,
            appEvent = {...me.getMouseEventData(event), fromElementId: event.fromElement?.id || null};

        me.sendMessageToApp(appEvent);
        me.fire('mouseEnter', appEvent);
    }

    /**
     *
     * @param {Object} event
     */
    onMouseLeave(event) {
        let me       = this,
            appEvent = {...me.getMouseEventData(event), toElementId: event.toElement?.id || null};

        me.sendMessageToApp(appEvent);
        me.fire('mouseLeave', appEvent);
    }

    /**
     *
     * @param {Object} event
     */
    onMouseUp(event) {
        this.sendMessageToApp(this.getMouseEventData(event));
    }

    /**
     *
     * @param {Object} event
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
                    preventUpdate = true;
                } else {
                    Object.assign(lastWheelEvent, {
                        date  : date,
                        target: targetCls
                    });
                }
            }

             if (!preventUpdate) {
                const {deltaX, deltaY, deltaZ} = event;

                this.sendMessageToApp({
                    ...this.getEventData(event),
                    clientHeight: target.node.clientHeight,
                    clientWidth : target.node.clientWidth,
                    deltaX      : deltaX,
                    deltaY      : deltaY,
                    deltaZ      : deltaZ,
                    scrollLeft  : target.node.scrollLeft,
                    scrollTop   : target.node.scrollTop
                });
            }

            if (!globalWheelTargetsKeepEvent.includes(targetCls)) {
                event.preventDefault();
            }
        }
    }

    /**
     * Example for Array values: "categories[]=test1&categories[]=test2"
     * @param {String} str
     * @returns {Object}
     */
    parseHash(str) {
        if (str === '') {
            return {};
        }

        let pieces = str.split('&'),
            data   = {},
            i, key, parts, value;

        for (i = 0; i < pieces.length; i++) {
            parts = pieces[i].split('=');

            if (parts.length < 2) {
                parts.push('');
            }

            key   = decodeURIComponent(parts[0]);
            value = decodeURIComponent(parts[1]);

            if (key.indexOf('[]') !== -1) {
                key = key.substring(0, key.indexOf('[]'));

                if (typeof data[key] === 'undefined') {
                    data[key] = [];
                }

                data[key].push(this.parseValue(value));
            } else {
                data[key] = this.parseValue(value);
            }
        }

        return data;
    }

    /**
     * used by parseHash to convert tokens into boolean or number types if needed
     * @param {String} value
     * @returns {Boolean|Number|String}
     * @protected
     */
    parseValue(value) {
        if (value == parseInt(value)) {
            value = parseInt(value);
        } else if (value === 'false') {
            value = false;
        } else if (value === 'true') {
            value = true;
        }

        return value;
    }

    /**
     *
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
            if (!preventArray.includes(cls)) {
                preventArray.push(cls);
            }
        });
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
            data     : data
        });
    }



    /**
     *
     * @param {Object} event
     * @param {Object} targetArray
     * @returns {Object|Boolean} target cls & node if found, false otherwise
     */
    testPathInclusion(event, targetArray) {
        let countTargets = targetArray.length,
            path         = event.path || event.composedPath(),
            i            = 0,
            len          = path.length,
            j, node;

        for (; i < len; i++) {
            node = path[i];

            for (j=0; j < countTargets; j++) {
                if (node.classList?.contains(targetArray[j])) {
                    return {
                        cls : targetArray[j],
                        node: node
                    };
                }
            }
        }

        return false;
    }
}

Neo.applyClassConfig(DomEvents);

let instance = Neo.create(DomEvents);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$":
/*!*****************************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/ lazy ^\.\/.*\.mjs$ strict namespace object ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AmCharts.mjs": [
		"./node_modules/neo.mjs/src/main/addon/AmCharts.mjs",
		"node_modules_neo_mjs_src_main_addon_AmCharts_mjs"
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
		"vendors-node_modules_neo_mjs_src_main_addon_HighlightJS_mjs"
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
		"node_modules_neo_mjs_src_main_addon_Stylesheet_mjs"
	],
	"./WebComponent.mjs": [
		"./node_modules/neo.mjs/src/main/addon/WebComponent.mjs",
		"node_modules_neo_mjs_src_main_addon_WebComponent_mjs"
	],
	"./WindowPosition.mjs": [
		"./node_modules/neo.mjs/src/main/addon/WindowPosition.mjs",
		"node_modules_neo_mjs_src_main_addon_WindowPosition_mjs"
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
/* harmony export */   "default": () => (/* binding */ DeltaUpdates)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Logic to apply the deltas generated by vdom.Helper to the real DOM
 * @class Neo.main.mixin.DeltaUpdates
 * @extends Neo.core.Base
 * @singleton
 */
class DeltaUpdates extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.mixin.DeltaUpdates'
         * @protected
         */
        className: 'Neo.main.mixin.DeltaUpdates'
    }}

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     */
    du_focusNode(delta) {
        this.getElement(delta.id).focus();
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
        let index         = delta.index,
            parentNode    = this.getElementOrBody(delta.parentId),
            countChildren = parentNode.childNodes.length,
            i             = 0,
            realIndex     = index,
            hasComments   = false,
            node;

        // console.log('insertNode', index, countChildren, delta.parentId);

        if (countChildren <= 20 && parentNode.nodeName !== 'TBODY') {
            for (; i < countChildren; i++) {
                if (parentNode.childNodes[i].nodeType === 8) { // ignore comments
                    if (i < realIndex) {
                        realIndex++;
                    }

                    hasComments = true;
                }
            }
        }

        if (!hasComments) {
            countChildren = parentNode.children.length;

            if (index > 0 && index >= countChildren) {
                parentNode.insertAdjacentHTML('beforeend', delta.outerHTML);
                return;
            }

            if (countChildren > 0 && countChildren > index) {
                parentNode.children[index].insertAdjacentHTML('beforebegin', delta.outerHTML);
            } else if (countChildren > 0) {
                parentNode.children[countChildren - 1].insertAdjacentHTML('afterend', delta.outerHTML);
            } else {
                parentNode.insertAdjacentHTML('beforeend', delta.outerHTML);
            }
        } else {
            node = this.htmlStringToElement(delta.outerHTML);

            if (countChildren > 0 && countChildren > realIndex) {
                parentNode.insertBefore(node, parentNode.childNodes[realIndex]);
            } else {
                parentNode.appendChild(node);
            }
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.index
     * @param {String} delta.parentId
     */
    du_moveNode(delta) {
        let index      = delta.index,
            node       = this.getElement(delta.id),
            parentNode = this.getElement(delta.parentId);

        if (index >= parentNode.children.length) {
            parentNode.appendChild(node);
        } else {
            //index++; // todo?: increase the index in case same parent, oldIndex < newIndex, direct swap
            if (node && parentNode.children[index].id !== delta.id) {
                parentNode.insertBefore(node, parentNode.children[index]);
            }
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.parentId
     */
    du_removeNode(delta) {
        let node = this.getElement(delta.id),
            reg, startTag;

        if (!node) { // could be a vtype: text
            node = this.getElementOrBody(delta.parentId);

            if (node) {
                startTag  = `<!-- ${delta.id} -->`;
                reg       = new RegExp(startTag + '[\\s\\S]*?<!-- \/neo-vtext -->');

                node.innerHTML = node.innerHTML.replace(reg, '');
            } else {
                // console.warn('du_removeNode: dom node not found for id', delta.id);
            }
        } else {
            node.parentNode.removeChild(node);
        }
    }

    /**
     *
     * @param {Object} delta
     * @param {String} delta.fromId
     * @param {String} delta.parentId
     * @param {String} delta.toId
     */
    du_replaceChild(delta) {
        let me   = this,
            node = me.getElement(delta.parentId);

        node.replaceChild(me.getElement(delta.toId), me.getElement(delta.fromId));
    }

    /**
     *
     * @param {Object} delta
     * @param {String} [delta.id]
     * @param {String} [delta.value
     */
    du_setTextContent(delta) {
        let me   = this,
            node = me.getElement(delta.id);

        node.textContent = delta.value;
    }

    /**
     *
     * @param {Object} delta
     * @param {Object} [delta.attributes]
     * @param {String} [delta.cls]
     * @param {String} [delta.id]
     * @param {String} [delta.innerHTML]
     * @param {String} [delta.outerHTML]
     * @param {Object} [delta.style]
     */
    du_updateNode(delta) {
        let node = this.getElementOrBody(delta.id);

        if (!node) {
            console.warn('du_updateNode: node not found for id', delta.id);
        } else {
            Object.entries(delta).forEach(([prop, value]) => {
                switch(prop) {
                    case 'attributes':
                        Object.entries(value).forEach(([key, val]) => {
                            if (this.voidAttributes.includes(key)) {
                                node[key] = val === 'true'; // vnode attribute values get converted into strings
                            } else if (val === null || val === '') {
                                if (key === 'value') {
                                    node[key] = ''; // input fields => pseudo attribute can not be removed
                                } else {
                                    node.removeAttribute(key);
                                }
                            } else if (key === 'id') {
                                node[Neo.config.useDomIds ? 'id' : 'data-neo-id'] = val;
                            }else if (key === 'spellcheck' && val === 'false') {
                                // see https://github.com/neomjs/neo/issues/1922
                                node[key] = false;
                            } else {
                                node[key] = val;
                            }
                        });
                        break;
                    case 'cls':
                        node.classList.add(...value.add || []);
                        node.classList.remove(...value.remove || []);
                        break;
                    case 'innerHTML':
                        node.innerHTML = value || '';
                        break;
                    case 'outerHTML':
                        node.outerHTML = value || '';
                        break;
                    case 'style':
                        if (Neo.isObject(value)) {
                            Object.entries(value).forEach(([key, val]) => {
                                if (Neo.isString(val) && val.includes('!important')) {
                                    val = val.replace('!important', '').trim();
                                    node.style.setProperty(Neo.decamel(key), val, 'important');
                                } else {
                                    node.style[Neo.decamel(key)] = val;
                                }
                            });
                        }
                        break;
                }
            });
        }
    }

    /**
     *
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

        node.innerHTML = innerHTML.replace(reg, delta.value);
    }

    /**
     * @param {String} html representing a single element
     * @returns {ChildNode}
     */
    htmlStringToElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }

    /**
     *
     * @param {Object} data
     * @param {Object|Object[]} data.deltas
     * @param {String} data.id
     * @param {String} [data.origin='app']
     */
    update(data) {
        let me     = this,
            deltas = data.deltas,
            i      = 0,
            len;

        deltas = Array.isArray(deltas) ? deltas : [deltas];
        len    = deltas.length;

        if (Neo.config.logDeltaUpdates && len > 0) {
            me.countDeltas += len;
            me.countUpdates++;
            console.log('update ' + me.countUpdates, 'total deltas ', me.countDeltas, Neo.clone(data, true));
        }

        if (Neo.config.renderCountDeltas && len > 0) {
            me.countDeltasPer250ms += len;
        }

        const map = {
            focusNode     : me.du_focusNode,
            insertNode    : me.du_insertNode,
            moveNode      : me.du_moveNode,
            removeNode    : me.du_removeNode,
            replaceChild  : me.du_replaceChild,
            setTextContent: me.du_setTextContent,
            updateVtext   : me.du_updateVtext,
            default       : me.du_updateNode
        };

        for (; i < len; i++) {
            (map[deltas[i].action] || map['default']).call(me, deltas[i]);
        }

        Neo.worker.Manager.sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }
}

Neo.applyClassConfig(DeltaUpdates);




/***/ }),

/***/ "./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TouchDomEvents)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Will get imported in case Neo.config.useTouchEvents === true
 * @class Neo.main.mixin.TouchDomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class TouchDomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.mixin.TouchDomEvents'
         * @protected
         */
        className: 'Neo.main.mixin.TouchDomEvents'
    }}

    /**
     *
     * @param {Object} event
     */
    onTouchCancel(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchEnd(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchEnter(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchLeave(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchMove(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     * @param {Object} event
     */
    onTouchStart(event) {
        console.log('onTouchStart', event);
        this.sendMessageToApp(this.getEventData(event));
    }
}

Neo.applyClassConfig(TouchDomEvents);



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







const NeoConfig = Neo.config,
      devMode   = NeoConfig.environment === 'development';

/**
 * The worker manager lives inside the main thread and creates the App, Data & VDom worker.
 * Also responsible for sending messages from the main thread to the different workers.
 * @class Neo.worker.Manager
 * @extends Neo.core.Base
 * @singleton
 */
class Manager extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
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
         * The base path for the worker file URLs, can e.g. get set inside the index.html.
         * @member {String|null} basePath=Neo.config.workerBasePath || 'worker/'
         * @protected
         */
        basePath: NeoConfig.workerBasePath || 'worker/',
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
         * Contains the fileNames for the App, Data & Vdom workers
         * @member {Object} workers
         * @protected
         */
        workers: {
            app: {
                fileName: devMode ? 'App.mjs'    : 'appworker.js'
            },
            canvas: {
                fileName: devMode ? 'Canvas.mjs' : 'canvasworker.js'
            },
            data: {
                fileName: devMode ? 'Data.mjs'   : 'dataworker.js'
            },
            vdom: {
                fileName: devMode ? 'VDom.mjs'   : 'vdomworker.js'
            }
        }
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.detectFeatures();

        if (!Neo.insideWorker) {
            me.createWorkers();
        }

        Neo.workerId = 'main';

        me.promises = {};

        me.on({
            'message:addDomListener'    : {fn: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].addDomListener,       scope: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]},
            'message:getOffscreenCanvas': {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onGetOffscreenCanvas, scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:readDom'           : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onReadDom,            scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:registerRemote'    : {fn: me.onRegisterRemote,            scope: me},
            'message:workerConstructed' : {fn: me.onWorkerConstructed,         scope: me}
        });
    }

    /**
     * Sends a message to each worker defined inside the this.workers config.
     * @param {String} msg
     */
    broadcast(msg) {
        Object.keys(this.workers).forEach(name => {
            this.sendMessage(name, msg);
        });
    }

    /**
     * Creates a web worker using the passed options as well as adding error & message event listeners.
     * @param {Object} opts
     * @returns {SharedWorker|Worker}
     */
    createWorker(opts) {
        let me       = this,
            fileName = opts.fileName,
            filePath = (opts.basePath || me.basePath) + fileName,
            name     = `neomjs-${fileName.substring(0, fileName.indexOf('.')).toLowerCase()}-worker`,
            isShared = me.sharedWorkersEnabled && NeoConfig.useSharedWorkers,
            cls      = isShared ? SharedWorker : Worker,
            worker   = devMode  // todo: switch to the new syntax to create a worker from a JS module once browsers are ready
                ? new cls(filePath, {name: name, type: 'module'})
                : new cls(filePath, {name: name});

        (isShared ? worker.port : worker).onmessage = me.onWorkerMessage.bind(me);
        (isShared ? worker.port : worker).onerror   = me.onWorkerError  .bind(me);

        me.activeWorkers++;

        return worker;
    }

    /**
     * Calls createWorker for each worker inside the this.workers config.
     */
    createWorkers() {
        let me   = this,
            hash = location.hash,
            key, value;

        // pass the initial hash value as Neo.configs
        if (hash) {
            NeoConfig.hash = {
                hash      : _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parseHash(hash.substr(1)),
                hashString: hash.substr(1)
            };
        }

        for ([key, value] of Object.entries(me.workers)) {
            if (key === 'canvas' && !NeoConfig.useCanvasWorker) {
                continue;
            }

            try {
                value.worker = me.createWorker(value);
            } catch (e) {
                document.body.innerHTML = e;
                me.stopCommunication = true;
                break;
            }

            me.sendMessage(key, {
                action: 'registerNeoConfig',
                data  : NeoConfig
            });
        }
    }

    /**
     *
     */
    detectFeatures() {
        let me = this;

        NeoConfig.hasTouchEvents = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        if (window.Worker) {
            me.webWorkersEnabled = true;
        } else {
            throw new Error('Your browser does not support Web Workers');
        }

        if (window.SharedWorker) {
            me.sharedWorkersEnabled = true;
        }
    }

    /**
     * @param {String|Worker} name
     * @returns {Worker}
     */
    getWorker(name) {
        return name instanceof Worker ? name : this.workers[name].worker;
    }

    /**
     * @param {String} path
     */
    loadApplication(path) {
        this.sendMessage('app', {
            action       : 'loadApplication',
            path,
            resourcesPath: NeoConfig.resourcesPath
        });
    }

    /**
     * @param {Object} data
     */
    onWorkerConstructed(data) {
        let me = this;

        me.constructedThreads++;

        if (me.constructedThreads === me.activeWorkers) {
            NeoConfig.appPath && setTimeout(() => { // better save than sorry => all remotes need to be registered
                me.loadApplication(NeoConfig.appPath);
            }, 20);
        }
    }

    /**
     * Handler method for worker error events
     * @param {Object} e
     */
    onWorkerError(e) {
        // starting a worker from a JS module will show JS errors in a correct way
        !devMode && console.log('Worker Error:', e);
    }

    /**
     * Handler method for worker message events
     * @param {Object} e
     */
    onWorkerMessage(e) {
        let me           = this,
            data         = e.data,
            delayPromise = false,
            transfer     = null,
            promise;

        const {action, destination: dest, replyId} = data;

        // console.log('Main: Incoming Worker message: ' + data.origin + ':' + action, data);

        me.fire('message:'+action, data);

        if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.destination === 'main') {
                data = data.data;
            }

            if (data.reject) {
                promise.reject(data);
            } else {
                if (data.data) {
                    if (data.data.autoMount) {
                        me.fire('automount', data);
                        delayPromise = true;
                    }
                    if (data.data.updateVdom) {
                        me.fire('updateVdom', data);
                        delayPromise = true;
                    }
                }

                if (!delayPromise) {
                    promise.resolve(data);
                } else {
                    me.promises[replyId].data = data;
                }
            }

            if (!delayPromise) {
                delete me.promises[replyId];
            }
        }

        if (dest !== 'main' && action !== 'reply') {
            if (data.transfer) {
                transfer = [data.transfer];
            }

            me.promiseMessage(dest, data, transfer).then(response => {
                me.sendMessage(response.destination, response);
            }).catch(err => {
                me.sendMessage(data.origin, {
                    action : 'reply',
                    reject : true,
                    replyId: data.id,
                    error  : err.message
                });
            });
        }

        // only needed for SharedWorkers
        else if (dest === 'main' && action === 'registerAppName') {
            me.appNames.push(data.appName);
        }

        else if (dest === 'main' && action === 'remoteMethod') {
            me.onRemoteMethod(data);
        }
    }

    /**
     * @param {String} dest app, data or vdom
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

            me.promises[msgId] = {
                reject,
                resolve
            };
        });
    }

    /**
     * @param {String} replyId
     */
    resolveDomOperationPromise(replyId) {
        if (replyId) {
            let promise = this.promises[replyId];

            if (promise) {
                promise.resolve(promise.data);
                delete this.promises[replyId];
            }
        }
    }

    /**
     * @param {String} dest app, data or vdom
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
            worker = me.getWorker(dest);

            if (!worker) {
                throw new Error('Called sendMessage for a worker that does not exist: ' + dest);
            }

            opts.destination = dest;

            message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_3__["default"](opts);

            (me.sharedWorkersEnabled && NeoConfig.useSharedWorkers ? worker.port : worker).postMessage(message, transfer);
            return message;
        }
    }
}

Neo.applyClassConfig(Manager);

let instance = Neo.create(Manager);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


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
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(Neo.workerId);
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
                'getWindowData',
                'setNeoConfig',
                'setRoute',
                'windowClose',
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
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.environment === 'development' && typeof window.webkitConvertPointFromNodeToPage === 'function') {
            document.body.innerHTML = [
                'Please use Chrome for the development mode.</br>',
                'For details, see the open Ticket: ',
                '<a style="color:red;" href="https://github.com/neomjs/neo/issues/191">Safari: Worker should support ES6 modules</a>'
            ].join('');
        }

        super(config);

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
            _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].onDomContentLoaded();
        }
    }

    /**
     * Workers can not trigger alert(), so we need remote method access.
     * @param {String} value
     */
    alert(value) {
        alert(value);
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
            data = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].parseHash(data);
        }

        Object.assign(hashObj, data);

        Object.entries(hashObj).forEach(([key, value]) => {
            if (value !== null) {
                hashArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
            }
        });

        window.location.hash = hashArr.join('&');
    }

    /**
     * window.screen is not spreadable
     * @returns {Object}
     */
    getWindowData() {
        const win    = window,
              screen = win.screen;

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
                orientation: {angle: screen.orientation.angle, type: screen.orientation.type},
                pixelDepth : screen.pixelDepth,
                width      : screen.width
            },
            screenLeft: win.screenLeft,
            screenTop : win.screenTop,
        };
    }

    // todo: https://developer.mozilla.org/en-US/docs/Web/Events/resize
    globalResizeListener(event) {
        console.log('globalResizeListener', event);
    }

    /**
     *
     */
    async onDomContentLoaded() {
        let me      = this,
            config  = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config,
            imports = [];

        _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].onDomContentLoaded();

        // not in use right now
        // window.addEventListener('resize', me.globalResizeListener.bind(me));

        // we need different publicPath values for the main thread inside the webpack based dist envs,
        // depending on the hierarchy level of the app entry point
        if (config.environment !== 'development') {
            __webpack_require__.p = config.basePath.substring(6);
        }

        config.mainThreadAddons.forEach(addon => {
            if (addon !== 'AnalyticsByGoogle') {
                imports.push(__webpack_require__("./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$")(`./${addon}.mjs`));
            }
        });

        // intended for the online examples where we need an easy way to add GA to every generated app
        if (config.useGoogleAnalytics || config.mainThreadAddons.includes('AnalyticsByGoogle')) {
            imports.push(__webpack_require__.e(/*! import() */ "node_modules_neo_mjs_src_main_addon_AnalyticsByGoogle_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./main/addon/AnalyticsByGoogle.mjs */ "./node_modules/neo.mjs/src/main/addon/AnalyticsByGoogle.mjs")));
        }

        const modules = await Promise.all(imports);

        me.addon = {};

        modules.forEach(module => {
            me.addon[module.default.constructor.name] = module.default;
        });

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].onWorkerConstructed({
            origin: 'main'
        });
    }

    /**
     *
     * @param data
     */
    onMountDom(data) {
        this.queueWrite(data);

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     * @param data
     */
    onRender(data) {
        data.data.replyId = data.replyId;
        this.queueWrite(data.data);
    }

    /**
     *
     * @param data
     */
    onUpdateDom(data) {
        this.queueUpdate(data);
    }

    /**
     *
     * @param data
     */
    onUpdateVdom(data) {
        data.data.replyId = data.replyId;
        this.queueUpdate(data.data);
    }

    /**
     *
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
                return requestAnimationFrame(me.renderFrame.bind(me));
            } else {
                _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][me.mode](operation);
                _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].resolveDomOperationPromise(operation.replyId);
            }
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    queueRead(data) {
        let me = this;
        me.readQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    queueUpdate(data) {
        let me = this;
        me.updateQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     *
     * @param data
     * @protected
     */
    queueWrite(data) {
        let me = this;
        me.writeQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
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
            console.log('Total Frames: ' + me.totalFrameCount);
        }

        if (reading || !write.length) {
            me.mode = 'read';
            if (me.processQueue(read, start)) {
                return;
            }
        }

        if (update.length) {
            me.mode = 'update';
            if (me.processQueue(update, start)) {
                return;
            }
        }

        if (write.length) {
            me.mode = 'write';
            if (me.processQueue(write, start)) {
                return;
            }
        }

        me.running = false;
    }

    /**
     * Change the location.hash value
     * @param {Object} data
     * @param {String} data.value
     */
    setRoute(data) {
        window.location.hash = data.value;
    }

    /**
     * Change the location.hash value
     * @param {Object} data
     * @param {String} data.key
     * @param {*} data.value
     */
    setNeoConfig(data) {
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config[data.key] = data.value;
    }

    /**
     * Closes popup windows
     * @param {Object} data
     * @param {Array|String} data.names
     */
    windowClose(data) {
        if (!Array.isArray(data.names)) {
            data.names = [data.names];
        }

        data.names.forEach(name => {
            this.openWindows[name].close();
            delete this.openWindows[name];
        })
    }

    /**
     * Move a popup window
     * @param {Object} data
     * @param {String} data.windowName
     * @param {String} data.x
     * @param {String} data.y
     */
    windowMoveTo(data) {
        this.openWindows[data.windowName].moveTo(data.x, data.y);
    }

    /**
     * Open a new popup window
     * @param {Object} data
     * @param {String} data.url
     * @param {String} data.windowFeatures
     * @param {String} data.windowName
     */
    windowOpen(data) {
        this.openWindows[data.windowName] = window.open(data.url, data.windowName, data.windowFeatures);
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

        win.resizeTo(width, height);
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(Main);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(Main);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFB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LFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFHOztBQUVILGVBQWUsZ0RBQUc7O0FBRWxCLGdEQUFHOztBQUVILGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvRGVmYXVsdENvbmZpZy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQ29tcGFyZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvTG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvT2JzZXJ2YWJsZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL1V0aWwubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vRG9tQWNjZXNzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vRG9tRXZlbnRzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vIGxhenkgXlxcLlxcLy4qXFwubWpzJCBzdHJpY3QgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vbWl4aW4vRGVsdGFVcGRhdGVzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vbWl4aW4vVG91Y2hEb21FdmVudHMubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01hbmFnZXIubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01lc3NhZ2UubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL21peGluL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9NYWluLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbi8qKlxuICogQ29uZmlnIG9iamVjdCBmb3IgdGhlIG5lby5tanMgZnJhbWV3b3JrIHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCB0byBhbGwgd29ya2Vyc1xuICogWW91IGNhbiBjaGFuZ2UgdGhlIGNvbmZpZ3MsIGUuZy4gaW5zaWRlIHRoZSBpbmRleC5odG1sIG9mIHlvdXIgYXBwXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICogQG5hbWUgY29uZmlnXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuY29uc3QgRGVmYXVsdENvbmZpZyA9IHtcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB5b3VyIGFwcC5tanMgZmlsZS4gWW91IGNhbiBjcmVhdGUgbXVsdGlwbGUgYXBwcyB0aGVyZSBpZiBuZWVkZWQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBhcHBQYXRoOiBudWxsLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgZGlyZWN0b3J5XG4gICAgICogQGRlZmF1bHQgJy4vJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5iYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGJhc2VQYXRoOiAnLi8nLFxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdkaXN0L2RldmVsb3BtZW50JywgJ2Rpc3QvcHJvZHVjdGlvbidcbiAgICAgKiBUaGlzIGNvbmZpZyB3aWxsIGdldCBhdXRvLWdlbmVyYXRlZFxuICAgICAqIEBkZWZhdWx0ICdkaXN0L3Byb2R1Y3Rpb24nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZW52aXJvbm1lbnQ6ICdkaXN0L3Byb2R1Y3Rpb24nLFxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgR29vZ2xlQW5hbHl0aWNzIG1haW5UaHJlYWRBZGRvbiBvciB1c2VHb29nbGVBbmFseXRpY3M6IHRydWUsXG4gICAgICogeW91IGNhbiBjaGFuZ2UgdGhlIGd0YWcgaWQgaGVyZS4gUmVxdWlyZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgKGdoIHBhZ2VzKVxuICAgICAqIEBkZWZhdWx0ICdVQS0xNTM3MzQ0MDQtMSdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZ3RhZ0lkXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZ3RhZ0lkOiAnVUEtMTUzNzM0NDA0LTEnLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgb24gaHR0cHM6Ly9uZW9tanMuZ2l0aHViLmlvL3BhZ2VzL1xuICAgICAqID0+IHRvIHVzZSBsb2NhbCBpbWFnZXMgcGF0aHMgaW5zdGVhZCBvZiByYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNHaXRIdWJQYWdlc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0dpdEh1YlBhZ2VzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIHRoZSBOZW8gbWFpbiB0aHJlYWQgaW5zaWRlIGFuIGlmcmFtZSAoU2llc3RhIEJyb3dzZXIgSGFybmVzcylcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0luc2lkZVNpZXN0YVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0luc2lkZVNpZXN0YTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVXNlZCBieSBJbnRsLkRhdGVUaW1lRm9ybWF0LCBmb3IgZGV0YWlscyB0YWtlIGEgbG9vayBhdDpcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgICAqIEBkZWZhdWx0ICdkZWZhdWx0J1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2NhbGVcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBsb2NhbGU6ICdkZWZhdWx0JyxcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgbG9nIHRoZSBkZWx0YSB1cGRhdGVzIGluc2lkZSB0aGUgbWFpbiB0aHJlYWQocykgYXMgd2VsbCBhcyB0aGUgcmVxdWVzdEFuaW1hdGlvbiBmcmFtZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2dEZWx0YVVwZGF0ZXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgbG9nRGVsdGFVcGRhdGVzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBBZGQgYWRkb25zIGZvciB0aGUgbWFpbiB0aHJlYWRcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXM6IEFtQ2hhcnRzLCBBbmFseXRpY3NCeUdvb2dsZSwgRHJhZ0Ryb3AsIEhpZ2hsaWdodEpTLCBMb2NhbFN0b3JhZ2UsIE1hcGJveEdMLCBNYXJrZG93biwgU2llc3RhLCBTdHlsZXNoZWV0LCBXaW5kb3dQb3NpdGlvblxuICAgICAqIChzcmMvbWFpbi9hZGRvbilcbiAgICAgKiBAZGVmYXVsdCBbJ0RyYWdEcm9wJywnU3R5bGVzaGVldCddXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLm1haW5UaHJlYWRBZGRvbnNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIG1haW5UaHJlYWRBZGRvbnM6IFsnRHJhZ0Ryb3AnLCAnU3R5bGVzaGVldCddLFxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gdmlzdWFsbHkgc2hvdyB0aGUgYW1vdW50IG9mIGRlbHRhIHVwZGF0ZXMgcGVyIHNlY29uZCB1c2luZyB0aGlzIGNvbmZpZy5cbiAgICAgKiBJdCBleHBlY3RzIGEgZG9tIG5vZGUgd2l0aCB0aGUgaWQgXCJuZW8tZGVsdGEtdXBkYXRlc1wiIGFzIHRoZSByZW5kZXJpbmcgdGFyZ2V0LlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlbmRlckNvdW50RGVsdGFzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHJlbmRlckNvdW50RGVsdGFzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlbWVzIHlvdSB3YW50IHRvIHVzZSBoZXJlLiBUaGUgZmlyc3QgdGhlbWUgd2lsbCBnZXQgYXBwbGllZC5cbiAgICAgKiBJZiBjb25maWcudXNlQ3NzVmFycyA9PT0gdHJ1ZSwgb3RoZXIgdGhlbWUgdmFyaWFibGVzIHdpbGwgZ2V0IGluY2x1ZGVkIGFzIHdlbGxcbiAgICAgKiBAZGVmYXVsdCBbJ25lby10aGVtZS1saWdodCcsICduZW8tdGhlbWUtZGFyayddXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnRoZW1lc1xuICAgICAqIEB0eXBlIFN0cmluZ1tdXG4gICAgICovXG4gICAgdGhlbWVzOiBbJ25lby10aGVtZS1saWdodCcsICduZW8tdGhlbWUtZGFyayddLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgaWYgQ1NTIHZhcmlhYmxlIGJhc2VkIHN0eWxlc2hlZXRzIGFyZSBpbiB1c2UgKGltcG9ydGFudCBmb3Igc3dpdGNoaW5nIHRoZW1lcylcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUNzc1ZhcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlQ3NzVmFyczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBFeHBlcmltZW50YWwgZmxhZyBpZiBhbiBvZmZzY3JlZW4gY2FudmFzIHdvcmtlciBzaG91bGQgZ2V0IGNyZWF0ZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlQ3NzVmFyc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VDYW52YXNXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgaWYgdmRvbSBpZHMgc2hvdWxkIGdldCBtYXBwZWQgaW50byBET00gZWxlbWVudCBpZHMuXG4gICAgICogZmFsc2Ugd2lsbCBjb252ZXJ0IHRoZW0gaW50byBhIFwiZGF0YS1uZW8taWRcIiBhdHRyaWJ1dGUuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VEb21JZHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRG9tSWRzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFRydWUgd2lsbCBhdXRvbWF0aWNhbGx5IGluY2x1ZGUgdGhlIHN0eWxlc2hlZXRcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUZvbnRBd2Vzb21lXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUZvbnRBd2Vzb21lOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEludGVuZGVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIHdoZXJlIHdlIG5lZWQgYW4gZWFzeSB3YXkgdG8gYWRkIEdBIHRvIGV2ZXJ5IGdlbmVyYXRlZCBhcHBcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VHb29nbGVBbmFseXRpY3NcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlR29vZ2xlQW5hbHl0aWNzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIEFwcCwgRGF0YSAmIFZEb20gYXMgU2hhcmVkV29ya2Vycy5cbiAgICAgKiBTZXQgdGhpcyBvbmUgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNvbm5lY3QgbXVsdGlwbGUgbWFpbiB0aHJlYWRzLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVNoYXJlZFdvcmtlcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlU2hhcmVkV29ya2VyczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkcyBnbG9iYWwgZG9tIGV2ZW50IGxpc3RlbmVycyBmb3IgbW9iaWxlIHJlbGF0ZWQgZXZlbnRzIGxpa2Ugcm90YXRlLCBzd2lwZSwgdGFwXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VUb3VjaEV2ZW50c1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VUb3VjaEV2ZW50czogdHJ1ZVxufTtcblxuT2JqZWN0LmFzc2lnbihEZWZhdWx0Q29uZmlnLCB7XG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAncmVzb3VyY2VzLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHJlc291cmNlc1BhdGg6IGAke05lby5jb25maWcuYmFzZVBhdGggfHwgRGVmYXVsdENvbmZpZy5iYXNlUGF0aH1yZXNvdXJjZXMvYCxcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBiYXNlIFVSTCBmb3Igd2ViIHdvcmtlciBlbnRyeSBwb2ludHMgKEFwcCwgRGF0YSwgVmRvbSlcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ3NyYy93b3JrZXIvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy53b3JrZXJCYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHdvcmtlckJhc2VQYXRoOiBgJHtOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGh9c3JjL3dvcmtlci9gLFxufSk7XG5cbmV4cG9ydCB7RGVmYXVsdENvbmZpZyBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBEZWZhdWx0Q29uZmlnIGZyb20gJy4vRGVmYXVsdENvbmZpZy5tanMnO1xuXG5jb25zdCBjb25maWdTeW1ib2wgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGdldFNldENhY2hlICA9IFN5bWJvbCgnZ2V0U2V0Q2FjaGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBtb2R1bGUgdG8gZW5oYW5jZSBjbGFzc2VzLCBjcmVhdGUgaW5zdGFuY2VzIGFuZCB0aGUgTmVvIG5hbWVzcGFjZVxuICogQG1vZHVsZSBOZW9cbiAqIEBzaW5nbGV0b25cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuYmluZE1ldGhvZHMgICAgICAgYXMgYmluZE1ldGhvZHNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY2FwaXRhbGl6ZSAgICAgICAgYXMgY2FwaXRhbGl6ZVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdCBhcyBjcmVhdGVTdHlsZU9iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZXMgICAgICBhcyBjcmVhdGVTdHlsZXNcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuZGVjYW1lbCAgICAgICAgICAgYXMgZGVjYW1lbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0FycmF5ICAgICAgICAgICBhcyBpc0FycmF5XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQm9vbGVhbiAgICAgICAgIGFzIGlzQm9vbGVhblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0RlZmluZWQgICAgICAgICBhcyBpc0RlZmluZWRcbiAqIEBib3Jyb3dzIE5lby5jb3JlLkNvbXBhcmUuaXNFcXVhbCAgICAgICAgYXMgaXNFcXVhbFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc051bWJlciAgICAgICAgICBhcyBpc051bWJlclxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc09iamVjdCAgICAgICAgICBhcyBpc09iamVjdFxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc1N0cmluZyAgICAgICAgICBhcyBpc1N0cmluZ1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC50b0FycmF5ICAgICAgICAgICBhcyB0b0FycmF5XG4gKiBAdHV0b3JpYWwgMDFfQ29uY2VwdFxuICovXG5sZXQgTmVvID0gc2VsZi5OZW8gfHwge307XG5cbk5lbyA9IHNlbGYuTmVvID0gT2JqZWN0LmFzc2lnbih7XG4gICAgLyoqXG4gICAgICogQSBtYXAgY29udGFpbmluZyBudHlwZXMgYXMga2V5IGFuZCBOZW8gY2xhc3NlcyBvciBzaW5nbGV0b25zIGFzIHZhbHVlc1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBudHlwZU1hcDoge30sXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBOZW8uY3JlYXRlLiBGYWxzZSBmb3IgdGhlIG1haW4gdGhyZWFkLCB0cnVlIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGluc2lkZVdvcmtlcjogdHlwZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnLFxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWxseSB1c2VkIGF0IHRoZSBlbmQgb2YgZWFjaCBjbGFzcyAvIG1vZHVsZSBkZWZpbml0aW9uXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNscyBUaGUgTmVvIGNsYXNzIHRvIGFwcGx5IGNvbmZpZ3MgdG9cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgYXBwbHlDbGFzc0NvbmZpZyhjbHMpIHtcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IG51bGwsXG4gICAgICAgICAgICBwcm90byAgICAgICAgID0gY2xzLnByb3RvdHlwZSB8fCBjbHMsXG4gICAgICAgICAgICBwcm90b3MgICAgICAgID0gW10sXG4gICAgICAgICAgICBjb25maWcsIGN0b3IsIHN0YXRpY0NvbmZpZztcblxuICAgICAgICB3aGlsZSAocHJvdG8uX19wcm90b19fKSB7XG4gICAgICAgICAgICBjdG9yID0gcHJvdG8uY29uc3RydWN0b3I7XG5cbiAgICAgICAgICAgIGlmIChjdG9yLmhhc093blByb3BlcnR5KCdjbGFzc0NvbmZpZ0FwcGxpZWQnKSkge1xuICAgICAgICAgICAgICAgIGJhc2VDZmcgICAgICAgPSBOZW8uY2xvbmUoY3Rvci5jb25maWcsICAgICAgIHRydWUpO1xuICAgICAgICAgICAgICAgIGJhc2VTdGF0aWNDZmcgPSBOZW8uY2xvbmUoY3Rvci5zdGF0aWNDb25maWcsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm90b3MudW5zaGlmdChwcm90byk7XG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZyAgICAgICA9IGJhc2VDZmcgICAgICAgfHwge307XG4gICAgICAgIHN0YXRpY0NvbmZpZyA9IGJhc2VTdGF0aWNDZmcgfHwge307XG5cbiAgICAgICAgcHJvdG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjdG9yID0gZWxlbWVudC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGxldCBjZmcgICAgICAgPSBjdG9yLmdldENvbmZpZyAgICAgID8uKCkgfHwge30sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2ZnID0gY3Rvci5nZXRTdGF0aWNDb25maWc/LigpIHx8IHt9LFxuICAgICAgICAgICAgICAgIG1peGlucztcblxuICAgICAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNmZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFoYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ250eXBlJykpIHtcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRpY0NmZz8ub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFwcGx5TWl4aW5zKGN0b3IsIG1peGlucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgZmFsc2UsIGN0b3IucHJvdG90eXBlLm1peGlucykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2ZnLm9ic2VydmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGNmZy5taXhpbnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNmZyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIG1ldGhvZHMgZnJvbSBvbmUgbmFtZXNwYWNlIHRvIGFub3RoZXIgb25lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBhbGlhc2VzXG4gICAgICogTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgICAqICAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnXG4gICAgICogfSwgdHJ1ZSk7XG4gICAgICpcbiAgICAgKiAvLyBlLmcuIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgPT4gTmVvLmlzT2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lb3xOZW8uY29yZS5CYXNlfSB0YXJnZXQgVGhlIHRhcmdldCBjbGFzcyBvciBzaW5nbGV0b24gSW5zdGFuY2Ugb3IgTmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYmluZF0gc2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGJpbmQgbWV0aG9kcyB0byB0aGUgXCJmcm9tXCIgbmFtZXNwYWNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHlGcm9tTnModGFyZ2V0LCBuYW1lc3BhY2UsIGNvbmZpZywgYmluZCkge1xuICAgICAgICBsZXQgZm5OYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihjb25maWcpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcblxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIHRydWUpO1xuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIE5lby50eXBlT2YoZGVmYXVsdHMpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGVlcD1mYWxzZV0gU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNsb25lIG5lc3RlZCBvYmplY3RzIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2VdIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XG4gICAgICovXG4gICAgY2xvbmUob2JqLCBkZWVwPWZhbHNlLCBpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG91dDtcblxuICAgICAgICBzd2l0Y2ggKE5lby50eXBlT2Yob2JqKSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyYXknOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFkZWVwID8gWy4uLm9ial0gOiBbLi4ub2JqLm1hcCh2YWwgPT4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdEYXRlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShvYmoudmFsdWVPZigpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnTWFwJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTWFwKG9iaik7IC8vIHNoYWxsb3cgY29weVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdOZW9JbnN0YW5jZSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ09iamVjdCc6IHtcbiAgICAgICAgICAgICAgICBvdXQgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gIWRlZXAgPyB2YWx1ZSA6IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1NldCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNldChvYmopOyAvLyBzaGFsbG93IGNvcHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsQ29uZmlnIHdpdGhvdXQgdGhlIGlkXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGluc3RhbmNlXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IHRoZSBjbG9uZWQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbG9uZU5lb0luc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB7Li4uaW5zdGFuY2Uub3JpZ2luYWxDb25maWd9O1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lkO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGluc3RhbmNlLmNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlIE5lby5jcmVhdGUoKSBpbnN0ZWFkIG9mIFwibmV3XCIgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhbGwgTmVvIGNsYXNzZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0Jhc2UubWpzJztcbiAgICAgKlxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgY2xhc3NOYW1lOiAnTmVvLmJ1dHRvbi5CYXNlJyxcbiAgICAgKiAgICAgaWNvbkNscyAgOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8TmVvLmNvcmUuQmFzZX0gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V8bnVsbH0gVGhlIG5ldyBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZykge1xuICAgICAgICBsZXQgdHlwZSA9IE5lby50eXBlT2YoY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdOZW9DbGFzcycpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzTmFtZSB8fCBjb25maWcubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKGNvbmZpZyk7XG5cbiAgICAgICAgaW5zdGFuY2Uub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICBpbnN0YW5jZS5vbkFmdGVyQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuXG4gICAgZW1wdHlGbigpIHt9LFxuXG4gICAgLyoqXG4gICAgICogTWFwcyBhIGNsYXNzTmFtZSBzdHJpbmcgaW50byBhIGdsb2JhbCBuYW1lc3BhY2VcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5ucygnTmVvLmJ1dHRvbi5CYXNlJywgdHJ1ZSk7XG4gICAgICogLy8gPT5cbiAgICAgKiAvLyBzZWxmLk5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudCA9IHNlbGYuTmVvLmNvbXBvbmVudCB8fCB7fTtcbiAgICAgKiAvLyBzZWxmLk5lby5idXR0b24uQmFzZSA9IHNlbGYuTmVvLmJ1dHRvbi5CYXNlIHx8IHt9O1xuICAgICAqIC8vIHJldHVybiBzZWxmLk5lby5idXR0b24uQmFzZTtcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IG5hbWVzIFRoZSBjbGFzcyBuYW1lIHN0cmluZyBjb250YWluaW5nIGRvdHMgb3IgYW4gQXJyYXkgb2YgdGhlIHN0cmluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZV0gU2V0IGNyZWF0ZSB0byB0cnVlIHRvIGNyZWF0ZSBlbXB0eSBvYmplY3RzIGZvciBub24gZXhpc3RpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgc2VsZlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlZmVyZW5jZSB0byB0aGUgdG9wbGV2ZWwgbmFtZXNwYWNlXG4gICAgICovXG4gICAgbnMobmFtZXMsIGNyZWF0ZSwgc2NvcGUpIHtcbiAgICAgICAgbmFtZXMgPSBBcnJheS5pc0FycmF5KG5hbWVzKSA/IG5hbWVzIDogbmFtZXMuc3BsaXQoJy4nKTtcblxuICAgICAgICByZXR1cm4gbmFtZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3JlYXRlICYmICFwcmV2W2N1cnJlbnRdKSB7XG4gICAgICAgICAgICAgICAgcHJldltjdXJyZW50XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUgfHwgc2VsZik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgaW5zdGFuY2VzIG9mIE5lbyBjbGFzc2VzIHVzaW5nIHRoZWlyIG50eXBlIGluc3RlYWQgb2YgdGhlIGNsYXNzIG5hbWVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5udHlwZSgnYnV0dG9uJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoe1xuICAgICAqICAgICBudHlwZSAgOiAnYnV0dG9uJyxcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gbnR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ11cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX1cbiAgICAgKiBAc2VlIHtAbGluayBtb2R1bGU6TmVvLmNyZWF0ZSBjcmVhdGV9XG4gICAgICovXG4gICAgbnR5cGUobnR5cGUsIGNvbmZpZykge1xuICAgICAgICBpZiAodHlwZW9mIG50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uZmlnID0gbnR5cGU7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5udHlwZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xhc3MgZGVmaW5lZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgbnR5cGUgcHJvcGVydHkuICcgKyBjb25maWcubnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbnR5cGUgPSBjb25maWcubnR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gTmVvLm50eXBlTWFwW250eXBlXTtcblxuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdudHlwZSAnICsgbnR5cGUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0eXBlT2YoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgaXRlbSkge1xuICAgICAgICAgICAgY2FzZSAnZnVuY3Rpb24nOiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJvdG90eXBlPy5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnTmVvQ2xhc3MnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29uc3RydWN0b3IuaXNDbGFzcyAmJiBpdGVtIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ05lb0luc3RhbmNlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbn0sIE5lbyk7XG5cbi8qKlxuICogTGlzdCBvZiBjbGFzcyBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBub3Qgc3VwcG9zZWQgdG8gZ2V0IG1peGVkIGludG8gb3RoZXIgY2xhc3Nlc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWdub3JlTWl4aW4gPSBbXG4gICAgJ19uYW1lJyxcbiAgICAnY2xhc3NDb25maWdBcHBsaWVkJyxcbiAgICAnY2xhc3NOYW1lJyxcbiAgICAnY29uc3RydWN0b3InLFxuICAgICdpc0NsYXNzJyxcbiAgICAnbWl4aW4nLFxuICAgICdudHlwZScsXG4gICAgJ29ic2VydmFibGUnLFxuICAgICdyZWdpc3RlclRvR2xvYmFsTnMnXG5dO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICogQHBhcmFtIHtBcnJheX0gbWl4aW5zXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBhcHBseU1peGlucyhjbHMsIG1peGlucykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtaXhpbnMpKSB7XG4gICAgICAgIG1peGlucyA9IFttaXhpbnNdO1xuICAgIH1cblxuICAgIGxldCBpICAgICAgICAgICAgPSAwLFxuICAgICAgICBsZW4gICAgICAgICAgPSBtaXhpbnMubGVuZ3RoLFxuICAgICAgICBtaXhpbkNsYXNzZXMgPSB7fSxcbiAgICAgICAgbWl4aW4sIG1peGluQ2xzLCBtaXhpblByb3RvO1xuXG4gICAgZm9yICg7aSA8IGxlbjtpKyspIHtcbiAgICAgICAgbWl4aW4gPSBtaXhpbnNbaV07XG5cbiAgICAgICAgaWYgKG1peGluLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbi5wcm90b3R5cGU7XG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluUHJvdG8uY2xhc3NOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKG1peGluKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGluZyB0byBtaXhpbiBhbiB1bmRlZmluZWQgY2xhc3M6ICcgKyBtaXhpbiArICcsICcgKyBjbHMucHJvdG90eXBlLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtaXhpbkNscyAgID0gTmVvLm5zKG1peGluKTtcbiAgICAgICAgICAgIG1peGluUHJvdG8gPSBtaXhpbkNscy5wcm90b3R5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBtaXhpblByb3RvLmNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZShtaXhSZWR1Y2UobWl4aW5DbHMpLCBtaXhpbkNsYXNzZXMpO1xuXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1peGluUHJvdG8pLmZvckVhY2gobWl4aW5Qcm9wZXJ0eShjbHMucHJvdG90eXBlLCBtaXhpblByb3RvKSk7XG4gICAgfVxuXG4gICAgY2xzLnByb3RvdHlwZS5taXhpbnMgPSBtaXhpbkNsYXNzZXM7IC8vIHRvZG86IHdlIHNob3VsZCBkbyBhIGRlZXAgbWVyZ2Vcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwcml2YXRlXG4gKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAqL1xuZnVuY3Rpb24gYXV0b0dlbmVyYXRlR2V0U2V0KHByb3RvLCBrZXkpIHtcbiAgICBpZiAoaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkpIHtcbiAgICAgICAgdGhyb3coJ0NvbmZpZyAnICsga2V5ICsgJ18gKCcgKyBwcm90by5jbGFzc05hbWUgKyAnKSBhbHJlYWR5IGhhcyBhIHNldCBtZXRob2QsIHVzZSBiZWZvcmVHZXQsIGJlZm9yZVNldCAmIGFmdGVyU2V0IGluc3RlYWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9O1xuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlR2V0ID0gYGJlZm9yZUdldCR7a2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YCxcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gbWVbY29uZmlnU3ltYm9sXS5oYXNPd25Qcm9wZXJ0eShrZXkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgICAgPSBtZVtjb25maWdTeW1ib2xdW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlOyAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIHNldHRlciA9PiBiZWZvcmVTZXQsIGFmdGVyU2V0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZUdldF0odmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHVLZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlU2V0ID0gJ2JlZm9yZVNldCcgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBhZnRlclNldCAgPSAnYWZ0ZXJTZXQnICArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlICA9IG1lW19rZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgc2V0IGNhbGwgaGFzIHRvIGRlbGV0ZSB0aGUgbWF0Y2hpbmcgc3ltYm9sXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOZW8uY2xvbmUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlIGRvIHdhbnQgdG8gc3RvcmUgdGhlIHZhbHVlIGJlZm9yZSB0aGUgYmVmb3JlU2V0IG1vZGlmaWNhdGlvbiBhcyB3ZWxsLFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGNvdWxkIGdldCBwdWxsZWQgYnkgb3RoZXIgYmVmb3JlU2V0IG1ldGhvZHMgb2YgZGlmZmVyZW50IGNvbmZpZ3NcbiAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZVtiZWZvcmVTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgZG9uJ3QgcmV0dXJuIGEgdmFsdWUsIHRoYXQgbWVhbnMgbm8gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIU5lby5pc0VxdWFsKHZhbHVlLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbYWZ0ZXJTZXRdPy4odmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuYWZ0ZXJTZXRDb25maWc/LihrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywga2V5LCBOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleGlzdHMoY2xhc3NOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcbiAgICAgICAgfSwgc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgc2V0IG1ldGhvZCBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBrZXkgaW5zaWRlIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG8gVGhlIHRvcCBsZXZlbCBwcm90b3R5cGUgb2YgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgcHJvcGVydHkga2V5IHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkge1xuICAgIGxldCBkZXNjcmlwdG9yO1xuXG4gICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KTtcblxuICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkZXNjcmlwdG9yLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IG1peGluUHJvdG9cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIG1peGluUHJvcGVydHkocHJvdG8sIG1peGluUHJvdG8pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICh+aWdub3JlTWl4aW4uaW5kZXhPZihrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3RvW2tleV0/Ll9mcm9tKSB7XG4gICAgICAgICAgICBpZiAobWl4aW5Qcm90by5jbGFzc05hbWUgPT09IHByb3RvW2tleV0uX2Zyb20pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01peGluIHNldCBtdWx0aXBsZSB0aW1lcyBvciBhbHJlYWR5IGRlZmluZWQgb24gYSBCYXNlIENsYXNzJywgcHJvdG8uY2xhc3NOYW1lLCBtaXhpblByb3RvLmNsYXNzTmFtZSwga2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYCR7cHJvdG8uY2xhc3NOYW1lfTogTXVsdGlwbGUgbWl4aW5zIGRlZmluaW5nIHNhbWUgcHJvcGVydHkgKCR7bWl4aW5Qcm90by5jbGFzc05hbWV9LCAke3Byb3RvW2tleV0uX2Zyb219KSA9PiAke2tleX1gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdG9ba2V5XSA9IG1peGluUHJvdG9ba2V5XTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpLl9mcm9tID0gbWl4aW5Qcm90by5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm90b1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwcm90b1trZXldLl9uYW1lID0ga2V5O1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG1peGluQ2xzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhSZWR1Y2UobWl4aW5DbHMpIHtcbiAgICByZXR1cm4gKHByZXYsIGN1cnJlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdID0gaWR4ICE9PSBhcnIubGVuZ3RoIC0xID8gcHJldltjdXJyZW50XSB8fCB7fSA6IG1peGluQ2xzO1xuICAgIH07XG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCB7TmVvIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJ1xuXG5jb25zdCBjb25maWdTeW1ib2wgICAgICAgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGZvcmNlQXNzaWduQ29uZmlncyA9IFN5bWJvbCgnZm9yY2VBc3NpZ25Db25maWdzJyksXG4gICAgICBpc0luc3RhbmNlICAgICAgICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgKGFsbW9zdCkgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBFeGNlcHRpb25zIGFyZSBlLmcuIGNvcmUuSWRHZW5lcmF0b3IsIHZkb20uVk5vZGVcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byB0aGUgY2xhc3MgY29uc3RydWN0b3JcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byBlYWNoIGNsYXNzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBzaG9ydGN1dC1uYW1lIHRvIHVzZSBmb3IgZS5nLiBjcmVhdGluZyBjaGlsZCBjb21wb25lbnRzIGluc2lkZSBhIEpTT04tZm9ybWF0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIGNvbXBvbmVudCBpZFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGlkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5lby5jcmVhdGUoKSB3aWxsIGNoYW5nZSB0aGlzIGZsYWcgdG8gdHJ1ZSBhZnRlciB0aGUgb25Db25zdHJ1Y3RlZCgpIGNoYWluIGlzIGRvbmUuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzQ29uc3RydWN0ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNDb25zdHJ1Y3RlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogWW91IGNhbiBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYnkgcGFzc2luZyBhbiBpbXBvcnRlZCBjbGFzcyAoSlMgbW9kdWxlIGRlZmF1bHQgZXhwb3J0KVxuICAgICAgICAgKiBAbWVtYmVyIHtDbGFzc30gbW9kdWxlPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kdWxlOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIHRoZSBzdGF0aWMgZ2V0Q29uZmlnKCkgcmV0dXJuIG9iamVjdC5cbiAgICAgKiBBcHBsaWVzIHRoZSBvYnNlcnZhYmxlIG1peGluIGlmIG5lZWRlZCwgZ3JhbnRzIHJlbW90ZSBhY2Nlc3MgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWc9e31cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvbmZpZ1N5bWJvbF06IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICA6IHt9LFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtpc0luc3RhbmNlXToge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuY3JlYXRlSWQoY29uZmlnLmlkIHx8IG1lLmlkKTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICBpZiAobWUuY29uc3RydWN0b3IuY29uZmlnKSB7XG4gICAgICAgICAgICBkZWxldGUgbWUuY29uc3RydWN0b3IuY29uZmlnLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZ2V0U3RhdGljQ29uZmlnKCdvYnNlcnZhYmxlJykgJiYgbWUuaW5pdE9ic2VydmFibGUoY29uZmlnKTtcblxuICAgICAgICBtZS5pbml0Q29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnY29uZmlnc0FwcGxpZWQnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucmVtb3RlICYmIHNldFRpbWVvdXQobWUuaW5pdFJlbW90ZS5iaW5kKG1lKSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpZCBjb25maWcgZ290IGNoYW5nZWQuXG4gICAgICogWW91IGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgaW5zdGFuY2UgaWRzIGlmIG5lZWRlZC4gVGhleSBuZWVkIHRvIHN0YXkgdW5pcXVlIGF0IGFueSBnaXZlbiBwb2ludC5cbiAgICAgKiBVc2UgY2FzZTogZS5nLiBjb21wb25lbnQgYmFzZWQgbGlzdHMsIHdoZXJlIHlvdSB3YW50IHRvIHJlLXVzZSBpdGVtIGluc3RhbmNlcy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFtvbGRWYWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5lby5pZE1hcCA9IE5lby5pZE1hcCB8fCB7fTtcbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IHZhbHVlIG9yIG9sZFZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gQXJyYXkuaXNBcnJheShzdGF0aWNOYW1lKSA/IHN0YXRpY05hbWUgOiB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcihgU3VwcG9ydGVkIHZhbHVlcyBmb3IgJHtuYW1lfSBhcmU6ICR7dmFsdWVzLmpvaW4oJywgJyl9YCwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgSWRHZW5lcmF0b3IgdG8gY3JlYXRlIGFuIGlkIGlmIGEgc3RhdGljIG9uZSBpcyBub3QgZXhwbGljaXRseSBzZXQuXG4gICAgICogUmVnaXN0ZXJzIHRoZSBpbnN0YW5jZSB0byBtYW5hZ2VyLkluc3RhbmNlIGlmIHRoaXMgb25lIGlzIGFscmVhZHkgY3JlYXRlZCxcbiAgICAgKiBvdGhlcndpc2Ugc3RvcmVzIGl0IGluc2lkZSBhIHRtcCBtYXAuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgY3JlYXRlSWQoaWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkIHx8IElkR2VuZXJhdG9yLmdldElkKHRoaXMuZ2V0SWRLZXkoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVW5yZWdpc3RlcnMgdGhpcyBpbnN0YW5jZSBmcm9tIE5lby5tYW5hZ2VyLkluc3RhbmNlXG4gICAgICogYW5kIHJlbW92ZXMgYWxsIG9iamVjdCBlbnRyaWVzIGZyb20gdGhpcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaWRNYXApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXBbbWUuaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMobWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG1lLCBrZXkpLndyaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgaW5zaWRlIGNyZWF0ZUlkKCkgYXMgdGhlIGRlZmF1bHQgdmFsdWUgcGFzc2VkIHRvIHRoZSBJZEdlbmVyYXRvci5cbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBhcyBuZWVkZWQuXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJZEtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGtleSBvciB0aGUgc3RhdGljQ29uZmlnIG9iamVjdCBpdHNlbGYgaW4gY2FzZSBubyB2YWx1ZSBpcyBzZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0U3RhdGljQ29uZmlnKGtleSkge1xuICAgICAgICBsZXQgY2ZnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG4gICAgICAgIHJldHVybiAoa2V5ID8gY2ZnW2tleV0gOiBjZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQoKSBpcyBkb25lXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgaW5pdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKi9cbiAgICBpbml0Q29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCBtZS5tZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykpO1xuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvZXMgZ2V0IHRyaWdnZXJlZCB3aXRoIGEgZGVsYXkgdG8gZW5zdXJlIHRoYXQgTmVvLndvcmtlcklkICYgTmVvLndvcmtlci5NYW5hZ2VyIGFyZSBkZWZpbmVkXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVtb3RlICAgICAgICA9IG1lLnJlbW90ZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgPSBtZS5jbGFzc05hbWUsXG4gICAgICAgICAgICBjdXJyZW50V29ya2VyID0gTmVvLmN1cnJlbnRXb3JrZXIsXG4gICAgICAgICAgICBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW90ZSBtZXRob2QgYWNjZXNzIGlzIG9ubHkgZnVuY3Rpb25hbCBmb3IgU2luZ2xldG9uIGNsYXNzZXMgJyArIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIU5lby5jb25maWcudW5pdFRlc3RNb2RlICYmIE5lby5pc09iamVjdChyZW1vdGUpKSB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSAnbWFpbicgJiYgY3VycmVudFdvcmtlci5pc1NoYXJlZFdvcmtlciAmJiAhY3VycmVudFdvcmtlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVySWQgPSBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXb3JrZXIudW4oJ2Nvbm5lY3RlZCcsIGxpc3RlbmVySWQpO1xuICAgICAgICAgICAgICAgICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XG5cbiAgICAgICAgaWYgKCFjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgICAgIG1lLm9yaWdpbmFsQ29uZmlnID0gTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gey4uLmN0b3IuY29uZmlnLCAuLi5jb25maWd9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25BZnRlckNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmlzQ29uc3RydWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFdlIGNhbiBvbmx5IGZpcmUgdGhlIGV2ZW50IGluIGNhc2UgdGhlIE9ic2VydmFibGUgbWl4aW4gaXMgaW5jbHVkZWQuXG4gICAgICAgIG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpICYmIG1lLmZpcmUoJ2NvbnN0cnVjdGVkJywgbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVwbGFjZSBzdHJpbmcgYmFzZWQgdmFsdWVzIGNvbnRhaW5pbmcgXCJAY29uZmlnOlwiIHdpdGggdGhlIG1hdGNoaW5nIGNvbmZpZyB2YWx1ZVxuICAgICAqIG9mIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGl0ZW1zXG4gICAgICovXG4gICAgcGFyc2VJdGVtQ29uZmlncyhpdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChpdGVtcykge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhpdGVtKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUl0ZW1Db25maWdzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnN0YXJ0c1dpdGgoJ0Bjb25maWc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDgpLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZVt2YWx1ZV0gJiYgIW1lLmhhc093blByb3BlcnR5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSB1c2VkIEBjb25maWcgZG9lcyBub3QgZXhpc3Q6JywgdmFsdWUsIG1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGNvbmZpZyBtaWdodCBub3QgYmUgcHJvY2Vzc2VkIHlldCwgZXNwZWNpYWxseSBmb3IgY29uZmlnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBlbmRpbmcgd2l0aCBhbiB1bmRlcnNjb3JlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBjb25maWdTeW1ib2wgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtrZXldID0gbWVbY29uZmlnU3ltYm9sXVt2YWx1ZV0gfHwgbWVbdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgc2V0KCksIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmUgY2FuIGFscmVhZHkgYmUgYXNzaWduZWQsXG4gICAgICogc28gdGhlIGhhc093blByb3BlcnR5KCkgY2hlY2sgd2lsbCByZXR1cm4gdHJ1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlQXNzaWduPWZhbHNlXVxuICAgICAqL1xuICAgIHByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKTtcblxuICAgICAgICBtZVtmb3JjZUFzc2lnbkNvbmZpZ3NdID0gZm9yY2VBc3NpZ247XG5cbiAgICAgICAgLy8gV2UgZG8gbm90IHdhbnQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBrZXlzLCBzaW5jZSAxIGNvbmZpZyBjYW4gcmVtb3ZlIG1vcmUgdGhhbiAxIGtleSAoYmVmb3JlU2V0WCwgYWZ0ZXJTZXRYKVxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBUaGUgaGFzT3duUHJvcGVydHkgY2hlY2sgaXMgaW50ZW5kZWQgZm9yIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmVcbiAgICAgICAgICAgIC8vID0+IHRoZXkgY291bGQgYWxyZWFkeSBnb3QgYXNzaWduZWQgaW5zaWRlIGFuIGFmdGVyU2V0LW1ldGhvZFxuICAgICAgICAgICAgaWYgKGZvcmNlQXNzaWduIHx8ICFtZS5oYXNPd25Qcm9wZXJ0eShrZXlzWzBdKSkge1xuICAgICAgICAgICAgICAgIG1lW2tleXNbMF1dID0gbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBkZWxldGUgY2FsbCBpbnNpZGUgdGhlIGNvbmZpZyBnZXR0ZXIgYXMgd2VsbCAoTmVvLm1qcyA9PiBhdXRvR2VuZXJhdGVHZXRTZXQoKSlcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8ga2VlcCB0aGlzIG9uZSBmb3IgY29uZmlncywgd2hpY2ggZG8gbm90IHVzZSBnZXR0ZXJzIChubyB0cmFpbGluZyB1bmRlcnNjb3JlKVxuICAgICAgICAgICAgZGVsZXRlIG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG5cbiAgICAgICAgICAgIG1lLnByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpIHtcbiAgICAgICAgbGV0IG9yaWdpbjtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xuXG4gICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3RlclJlbW90ZScsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHMsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKi9cbiAgICBzZXQodmFsdWVzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gSWYgdGhlIGluaXRpYWwgY29uZmlnIHByb2Nlc3NpbmcgaXMgc3RpbGwgcnVubmluZyxcbiAgICAgICAgLy8gZmluaXNoIHRoaXMgb25lIGZpcnN0IGJlZm9yZSBkcm9wcGluZyBuZXcgdmFsdWVzIGludG8gdGhlIGNvbmZpZ1N5bWJvbC5cbiAgICAgICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvMjIwMVxuICAgICAgICBpZiAobWVbZm9yY2VBc3NpZ25Db25maWdzXSAhPT0gdHJ1ZSAmJiBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCB2YWx1ZXMpO1xuXG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBieSBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbmZpZyBleGlzdHMgYW5kIGdvdCBjaGFuZ2VkXG4gICAgICovXG4gICAgc2V0U3RhdGljQ29uZmlnKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHN0YXRpY0NvbmZpZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIGlmIChzdGF0aWNDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgc3RhdGljQ29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgdG9TdHJpbmcoKSBtZXRob2QsIGUuZy48L3A+XG4gICAgICogYE5lby5jcmVhdGUoJ05lby5idXR0b24uQmFzZScpLnRvU3RyaW5nKCkgPT4gXCJbb2JqZWN0IE5lby5idXR0b24uQmFzZSAobmVvLWJ1dHRvbi0xKV1cImBcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xhc3NOYW1lfSAoaWQ6ICR7dGhpcy5pZH0pYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIGluc3RhbmNlb2YgbWV0aG9kLiBXaXRob3V0IHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogPHA+V2l0aCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiBmYWxzZWA8YnI+XG4gICAgICogYE5lby5jcmVhdGUoTmVvLmNvbGxlY3Rpb24uQmFzZSkgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSBmYWxzZTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLkNvbXBhcmVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQ29tcGFyZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5Db21wYXJlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5Db21wYXJlJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbTFcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRXF1YWwoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHR5cGUxID0gTmVvLnR5cGVPZihpdGVtMSksXG4gICAgICAgICAgICB0eXBlMiA9IE5lby50eXBlT2YoaXRlbTIpLFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGlmICh0eXBlMSAhPT0gdHlwZTIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHlwZTEpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5sZW5ndGggIT09IGl0ZW0yLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbaSwgdl0gb2YgaXRlbTEuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKHYsIGl0ZW0yW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLnZhbHVlT2YoKSA9PT0gaXRlbTIudmFsdWVPZigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdGdW5jdGlvbic6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEubmFtZSAhPT0gaXRlbTIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLnRvU3RyaW5nKCkgPT09IGl0ZW0yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ01hcCc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHZhbDI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgaXRlbTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IGl0ZW0yLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwyICE9PSB2YWwgfHwgdmFsMiA9PT0gdW5kZWZpbmVkICYmICFpdGVtMi5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ05lb0luc3RhbmNlJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5pZCAhPT0gaXRlbTIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdPYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0xKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGl0ZW0yKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGl0ZW0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKGl0ZW0xW2tleV0sIGl0ZW0yW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS50b1N0cmluZygpICE9PSBpdGVtMi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnU2V0Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5zaXplICE9PSBpdGVtMi5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGtleSBvZiBpdGVtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0yLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtMSA9PT0gaXRlbTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBhcmUpO1xuXG4vLyBhbGlhc1xuTmVvLmlzRXF1YWwgPSBDb21wYXJlLmlzRXF1YWw7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmU7XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXG4gKiBJdCBjb3VsZCBnZXQgc2ltcGxpZmllZCB0byBqdXN0IGJlaW5nIGFuIG9iamVjdCAobmVlZHMgdG8gbWFudWFsbHkgZ2V0IHB1dCBpbnRvIHRoZSBOZW8gbmFtZXNwYWNlIGluIHRoaXMgY2FzZSkuXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSWRHZW5lcmF0b3Ige1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2lkLWdlbmVyYXRvcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcbiAgICAgICAgICovXG4gICAgICAgIGJhc2U6ICduZW8tJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj0ndHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaWRDb3VudGVyID0ge307XG5cbiAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldElkID0gbWUuZ2V0SWQuYmluZChtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKElkR2VuZXJhdG9yKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5Mb2dnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTG9nZ2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkxvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xvZ2dlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsb2dnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0nbG9nJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsZXZlbDogJ2xvZycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIC8vIGFsaWFzZXNcbiAgICAgICAgTmVvLmFwcGx5RnJvbU5zKE5lbywgdGhpcywge1xuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxuICAgICAgICAgICAgbG9nICAgICA6ICdsb2cnLFxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgZXJyb3IodmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnaW5mbyc7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnbG9nJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nRXJyb3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgd2FybiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnd2Fybic7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB3cml0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUxvZ3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExvZ2dlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTG9nZ2VyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5PYnNlcnZhYmxlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuT2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtaXhpbi1vYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IGV2ZW50SWQgbnVsbCBpbiBjYXNlIGFuIG9iamVjdCBnZXRzIHBhc3NlZCBhcyB0aGUgbmFtZSAobXVsdGlwbGUgaWRzKVxuICAgICAqL1xuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuYW1lT2JqZWN0ID0gdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgbGlzdGVuZXIsIGV4aXN0aW5nLCBldmVudENvbmZpZztcblxuICAgICAgICBpZiAobmFtZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzLmZuO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7IC8vIFZDIGhvb2ssIGNhbiBnZXQgcGFyc2VkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaW4gY2FzZSB0aGUgdmlldyB1c2VzIHRoZSBwYXJlbnQgVkNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGZuICAgIDogbGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcbiAgICAgICAgICAgICAgICBkYXRhICA6IGRhdGEsXG4gICAgICAgICAgICAgICAgaWQgICAgOiBldmVudElkIHx8IE5lby5nZXRJZCgnZXZlbnQnKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzPy5bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcuaWQgPT09IGV2ZW50SWQgfHwgKGNmZy5mbiA9PT0gbGlzdGVuZXIgJiYgY2ZnLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOicsIG5hbWUsIG1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcuc3BsaWNlKG9yZGVyLCAwLCBldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcudW5zaGlmdChldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5saXN0ZW5lcnNbbmFtZV0gPSBbZXZlbnRDb25maWddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgZmlyZShuYW1lKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyAgICAgID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzLFxuICAgICAgICAgICAgZXZlbnRDb25maWcsIGV2ZW50cywgaSwgbGVuO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBldmVudHMgPSBbLi4ubGlzdGVuZXJzW25hbWVdXTtcbiAgICAgICAgICAgIGxlbiAgICA9IGV2ZW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnID0gZXZlbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcuZm4uYXBwbHkoZXZlbnRDb25maWcuc2NvcGUgfHwgbWUsIGV2ZW50Q29uZmlnLmRhdGEgPyBhcmdzLmNvbmNhdChldmVudENvbmZpZy5kYXRhKSA6IGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdE9ic2VydmFibGUoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcbiAgICAgICAgICAgIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzID0gY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLmxpc3RlbmVycyA9IHt9O1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QobGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IHsuLi5saXN0ZW5lcnN9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihsaXN0ZW5lcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHByb3RvPy5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnLm9ic2VydmFibGUgJiYgIXByb3RvLmNvbnN0cnVjdG9yLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvdG8uY29uc3RydWN0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICBmaXJlICAgICAgICAgIDogbWUuZmlyZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBtZS5yZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgdW4gICAgICAgICAgICA6IG1lLnVuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBhZGRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgb24oLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKi9cbiAgICByZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudElkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpLCBsZW4sIGxpc3RlbmVyLCBsaXN0ZW5lcnMsIG1hdGNoLCBzY29wZTtcblxuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgICAgICBpZiAobmFtZS5zY29wZSkge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gbmFtZS5zY29wZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmFtZS5zY29wZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobmFtZSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzW2tleV0gfHwgW107XG4gICAgICAgICAgICAgICAgaSAgICAgICAgID0gMDtcbiAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5mbi5uYW1lID09PSAoTmVvLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlIDogdmFsdWUubmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLnNjb3BlICAgPT09IHNjb3BlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzU3RyaW5nKGV2ZW50SWQpKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgICAgICBtYXRjaCAgICAgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGV2ZW50Q29uZmlnLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRDb25maWcuaWQgPT09IGV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyBzdXNwZW5kTGlzdGVuZXJzOiBmdW5jdGlvbihxdWV1ZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICovXG4gICAgdW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoT2JzZXJ2YWJsZSk7XG5cbmV4cG9ydCB7T2JzZXJ2YWJsZSBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5VdGlsXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFV0aWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlZ2V4IHRvIHJlbW92ZSBjYW1lbCBjYXNlIHN5bnRheFxuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IGRlY2FtZWxSZWdFeD0vKFthLXpdKShbQS1aXSkvZ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGRlY2FtZWxSZWdFeDogLyhbYS16XSkoW0EtWl0pL2dcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLlV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLlV0aWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29yZS11dGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvcmUtdXRpbCcsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdmFsdWVzXG4gICAgICovXG4gICAgc3RhdGljIGJpbmRNZXRob2RzKHNjb3BlLCB2YWx1ZXMpIHtcbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgc2NvcGVbdmFsdWVdID0gc2NvcGVbdmFsdWVdLmJpbmQoc2NvcGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc3RyaW5nIHVwcGVyY2FzZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXG4gICAgICovXG4gICAgc3RhdGljIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVdGlsLmlzU3RyaW5nKHN0cmluZykgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhIHN0eWxlcyBzdHJpbmcgaW50byBhIHN0eWxlcyBvYmplY3QgdXNpbmcgY2FtZWxjYXNlIHN5bnRheFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIHN0eWxlcyBzdHJpbmcgdG8gcGFyc2VcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgY2FtZWxjYXNlIHN0eWxlcyBvYmplY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVPYmplY3Qoc3RyaW5nKSB7XG4gICAgICAgIGlmICghc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJ0cztcblxuICAgICAgICAvLyBzcGxpdCgnOycpIGRvZXMgZmV0Y2ggc2VtaWNvbG9ucyBpbnNpZGUgYnJhY2tldHNcbiAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogXCJ1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwuLi5cblxuICAgICAgICAvLyBUT0RPOiBDYWNoZSBhbGwgcmVnZXhcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgvOyg/PVteXFwpXSooPzpcXCh8JCkpL2cpLnJlZHVjZSgob2JqLCBlbCkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBzcGxpdCBieSB0aGUgZmlyc3QgY29sb24gb25seVxuICAgICAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vZXhhbXBsZS5jb20vaW1hZ2UucG5nJylcbiAgICAgICAgICAgIHBhcnRzID0gZWwuc3BsaXQoKC86KC4rKS8pKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh4KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IG51bSA/IG51bSA6IHgudHJpbSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2JqW3BhcnRzWzBdXSA9IHBhcnRzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3R5bGVzIG9iamVjdCB3aGljaCBjYW4gdXNlIGNhbWVsY2FzZSBzeW50YXggaW50byBhIHN0eWxlcyBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIFRoZSBzdHlsZXMgb2JqZWN0XG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0eWxlcyBzdHJpbmcgKERPTSByZWFkeSlcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBsZXQgc3R5bGUgPSAnJztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhzdHlsZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBVdGlsLmRlY2FtZWwoa2V5KSArICc6JyArIHZhbHVlICsgJzsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhbGwgdXBwZXJjYXNlIGNoYXJhY3RlcnMgb2YgYSBzdHJpbmcgaW50byBsb3dlcmNhc2UuXG4gICAgICogRG9lcyBub3QgdG91Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBsb3dlcmNhc2Ugb3V0cHV0XG4gICAgICovXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoVXRpbC5kZWNhbWVsUmVnRXgsICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fFN0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZXJhYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBsZW47XG5cbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGUuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhYmxlLCBzdGFydCB8fCAwLCBlbmQgfHwgbGVuKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFV0aWwpO1xuXG4vLyBhbGlhc2VzXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgYmluZE1ldGhvZHMgICAgICA6ICdiaW5kTWV0aG9kcycsXG4gICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXG4gICAgZGVjYW1lbCAgICAgICAgICA6ICdkZWNhbWVsJyxcbiAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcbiAgICBpc0RlZmluZWQgICAgICAgIDogJ2lzRGVmaW5lZCcsXG4gICAgaXNFbXB0eSAgICAgICAgICA6ICdpc0VtcHR5JyxcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxuICAgIGlzTnVtYmVyICAgICAgICAgOiAnaXNOdW1iZXInLFxuICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxuICAgIHRvQXJyYXkgICAgICAgICAgOiAndG9BcnJheSdcbn0sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvbXBhcmUgICAgIGZyb20gJy4vQ29tcGFyZS5tanMnO1xuaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJztcbmltcG9ydCBMb2dnZXIgICAgICBmcm9tICcuL0xvZ2dlci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgIGZyb20gJy4vVXRpbC5tanMnO1xuXG5leHBvcnQge0Jhc2UsIENvbXBhcmUsIElkR2VuZXJhdG9yLCBMb2dnZXIsIE9ic2VydmFibGUsIFV0aWx9O1xuIiwiaW1wb3J0IEJhc2UgICAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBEZWx0YVVwZGF0ZXMgZnJvbSAnLi9taXhpbi9EZWx0YVVwZGF0ZXMubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYWluLkRvbUFjY2Vzc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBEb21BY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uRG9tQWNjZXNzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5Eb21BY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudERlbHRhcz0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50RGVsdGFzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudERlbHRhc1BlcjI1MG1zPTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY291bnREZWx0YXNQZXIyNTBtczogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnRVcGRhdGVzPTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY291bnRVcGRhdGVzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IG1peGlucz1bRGVsdGFVcGRhdGVzLCBPYnNlcnZhYmxlXVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICBEZWx0YVVwZGF0ZXMsXG4gICAgICAgICAgICBPYnNlcnZhYmxlXG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbLy8uLi5dfVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdhZGRTY3JpcHQnLFxuICAgICAgICAgICAgICAgICdhcHBseUJvZHlDbHMnLFxuICAgICAgICAgICAgICAgICdleGVjQ29tbWFuZCcsXG4gICAgICAgICAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgICAgICAgICAnZ2V0QXR0cmlidXRlcycsXG4gICAgICAgICAgICAgICAgJ2dldEJvdW5kaW5nQ2xpZW50UmVjdCcsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbEJ5JyxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICdzY3JvbGxUbycsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFRvVGFibGVSb3cnLFxuICAgICAgICAgICAgICAgICdzZWxlY3ROb2RlJyxcbiAgICAgICAgICAgICAgICAnc2V0Qm9keUNscycsXG4gICAgICAgICAgICAgICAgJ3NldFN0eWxlJyxcbiAgICAgICAgICAgICAgICAnd2luZG93U2Nyb2xsVG8nXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWb2lkIGF0dHJpYnV0ZXMgaW5zaWRlIGh0bWwgdGFnc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdm9pZEF0dHJpYnV0ZXNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdm9pZEF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgICAgICdyZXF1aXJlZCdcbiAgICAgICAgXVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZTtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5yZW5kZXJDb3VudERlbHRhcykge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmVvLWRlbHRhLXVwZGF0ZXMnKTtcblxuICAgICAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBTdHJpbmcobWUuY291bnREZWx0YXNQZXIyNTBtcyAqIDQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLmNvdW50RGVsdGFzUGVyMjUwbXMgPSAwO1xuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEuYXN5bmNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkYXRhLmRlZmVyPWZhbHNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5zcmM9dHJ1ZV1cbiAgICAgKi9cbiAgICBhZGRTY3JpcHQoZGF0YSkge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoJ2FzeW5jJykpIHtcbiAgICAgICAgICAgIGRhdGEuYXN5bmMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihzY3JpcHQsIGRhdGEpO1xuXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5jbHNcbiAgICAgKi9cbiAgICBhcHBseUJvZHlDbHMoZGF0YSkge1xuICAgICAgICBjb25zdCBjbHMgPSBkYXRhLmNscyB8fCBbXTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKC4uLmNscyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmNvbW1hbmRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgZXhlY0NvbW1hbmQoZGF0YSkge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChkYXRhLmNvbW1hbmQpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBmb2N1cyBvbiBhIG5vZGUgZm9yIGEgZ2l2ZW4gZG9tIG5vZGUgaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXG4gICAgICovXG4gICAgZm9jdXMoZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5mb2N1cygpO1xuXG4gICAgICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKG5vZGUuc2VsZWN0aW9uU3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZWxlY3Rpb25TdGFydCA9IG5vZGUuc2VsZWN0aW9uRW5kID0gbm9kZS52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGVzIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5pZCBlaXRoZXIgYW4gaWQgb3IgYW4gYXJyYXkgb2YgaWRzXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGRhdGEuYXR0cmlidXRlcyBlaXRoZXIgYW4gYXR0cmlidXRlIG9yIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBJbiBjYXNlIGlkIGlzIGFuIGFycmF5LCBhbiBhcnJheSBvZiBhdHJyYnV0ZSBvYmplY3RzIGlzIHJldHVybmVkLCBvdGhlcndpc2UgYW4gb2JqZWN0XG4gICAgICovXG4gICAgZ2V0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGxldCByZXR1cm5EYXRhO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm5EYXRhID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuaWQuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuZ2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGRhdGEuYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgIDogaWRcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRhdGEuaWQpO1xuXG4gICAgICAgICAgICByZXR1cm5EYXRhID0ge307XG5cbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzID0gW2RhdGEuYXR0cmlidXRlc107XG5cbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkRhdGFbYXR0cmlidXRlXSA9IG5vZGVbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgZm9yIGEgZ2l2ZW4gZG9tIG5vZGUgaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBkYXRhLmlkIGVpdGhlciBhbiBpZCBvciBhbiBhcnJheSBvZiBpZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBJbiBjYXNlIGlkIGlzIGFuIGFycmF5LCBhbiBhcnJheSBvZiBEb21SZWN0cyBpcyByZXR1cm5lZCwgb3RoZXJ3aXNlIGFuIERvbVJlY3Qgb2JqZWN0XG4gICAgICovXG4gICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGRhdGEpIHtcbiAgICAgICAgbGV0IHJldHVybkRhdGE7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybkRhdGEgPSBbXTtcblxuICAgICAgICAgICAgZGF0YS5pZC5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm5EYXRhLnB1c2godGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe2lkOiBpZH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoZGF0YS5pZCksXG4gICAgICAgICAgICAgICAgcmVjdCA9IHt9O1xuXG4gICAgICAgICAgICByZXR1cm5EYXRhID0ge307XG5cbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBEb21SZWN0IGRvZXMgbm90IHN1cHBvcnQgc3ByZWFkaW5nID0+IHsuLi5Eb21SZWN0fSA9PiB7fVxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmV0dXJuRGF0YSwge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBsZWZ0ICA6IHJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQgOiByZWN0LnJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b3AgICA6IHJlY3QudG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IHJlY3Qud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHggICAgIDogcmVjdC54LFxuICAgICAgICAgICAgICAgICAgICB5ICAgICA6IHJlY3QueVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZUlkXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50KG5vZGVJZCkge1xuICAgICAgICBpZiAoTmVvLmNvbmZpZy51c2VEb21JZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChub2RlSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5lby1pZD0nJHtub2RlSWR9J11gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbm9kZUlkPSdkb2N1bWVudC5ib2R5J11cbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGdldEVsZW1lbnRPckJvZHkobm9kZUlkPSdkb2N1bWVudC5ib2R5Jykge1xuICAgICAgICBpZiAobm9kZUlkID09PSAnYm9keScgfHwgbm9kZUlkID09PSAnZG9jdW1lbnQuYm9keScpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudChub2RlSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY2x1ZGUgYSBzY3JpcHQgaW50byB0aGUgZG9jdW1lbnQuaGVhZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzcmNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFthc3luYz10cnVlXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGxvYWRTY3JpcHQoc3JjLCBhc3luYz10cnVlKSB7XG4gICAgICAgIGxldCBzY3JpcHQ7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNjcmlwdCwge1xuICAgICAgICAgICAgICAgIGFzeW5jICA6IGFzeW5jLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgICAgICBvbmxvYWQgOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHNyYyAgICA6IHNyY1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jbHVkZSBhIGxpbmsgaW50byB0aGUgZG9jdW1lbnQuaGVhZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBocmVmXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgbG9hZFN0eWxlc2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgbGluaztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihsaW5rLCB7XG4gICAgICAgICAgICAgICAgaHJlZiAgIDogaHJlZixcbiAgICAgICAgICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgICAgICAgICAgb25sb2FkIDogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWwgICAgOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICAgICAgdHlwZSAgIDogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Eb21Db250ZW50TG9hZGVkKCkge1xuICAgICAgICBpZiAoTmVvLmNvbmZpZy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlCb2R5Q2xzKHtjbHM6IFsnbmVvLWJvZHknXX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5ub2RlSWRcbiAgICAgKi9cbiAgICBvbkdldE9mZnNjcmVlbkNhbnZhcyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSAgICAgID0gbWUuZ2V0RWxlbWVudChkYXRhLm5vZGVJZCksXG4gICAgICAgICAgICBvZmZzY3JlZW4gPSBub2RlLnRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuKCk7XG5cbiAgICAgICAgZGF0YS5vZmZzY3JlZW4gPSBvZmZzY3JlZW47XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0sIFtvZmZzY3JlZW5dKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5hdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YS5mdW5jdGlvbnMgQW4gYXJyYXkgY29udGFpbmluZyBzdHJpbmdzIGFuZC9vciBvYmplY3RzXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZGF0YS5zdHlsZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52bm9kZUlkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uUmVhZERvbShkYXRhKSB7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVzICAgID0gZGF0YS5hdHRyaWJ1dGVzIHx8IFtdLFxuICAgICAgICAgICAgZnVuY3Rpb25zICAgICA9IGRhdGEuZnVuY3Rpb25zICB8fCBbXSxcbiAgICAgICAgICAgIHN0eWxlcyAgICAgICAgPSBkYXRhLnN0eWxlcyAgICAgfHwgW10sXG4gICAgICAgICAgICB2bm9kZUlkICAgICAgID0gZGF0YS52bm9kZUlkLFxuICAgICAgICAgICAgcmV0QXR0cmlidXRlcyA9IHt9LFxuICAgICAgICAgICAgcmV0RnVuY3Rpb25zICA9IHt9LFxuICAgICAgICAgICAgcmV0U3R5bGVzICAgICA9IHt9LFxuICAgICAgICAgICAgZWxlbWVudCAgICAgICA9IHZub2RlSWQgPyB0aGlzLmdldEVsZW1lbnQodm5vZGVJZCkgOiBudWxsLFxuICAgICAgICAgICAgZm5OYW1lLCBzY29wZTtcblxuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHJldEF0dHJpYnV0ZXNba2V5XSA9IGVsZW1lbnRba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb25zLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIGtleS5wYXJhbXMgICAgICAgICA9IGtleS5wYXJhbXMgICAgICAgICB8fCBbXTtcbiAgICAgICAgICAgICAgICBrZXkucGFyYW1Jc0RvbU5vZGUgPSBrZXkucGFyYW1Jc0RvbU5vZGUgfHwgW107XG5cbiAgICAgICAgICAgICAgICBzY29wZSA9IGtleS5zY29wZSA/IGRvY3VtZW50W2tleS5zY29wZV0gOiBlbGVtZW50O1xuXG4gICAgICAgICAgICAgICAga2V5LnBhcmFtcy5mb3JFYWNoKChwYXJhbSwgcGFyYW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LnBhcmFtSXNEb21Ob2RlW3BhcmFtSW5kZXhdID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkucGFyYW1zW3BhcmFtSW5kZXhdID0gdGhpcy5nZXRFbGVtZW50KGtleS5wYXJhbXNbcGFyYW1JbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBrZXkucmV0dXJuRm5OYW1lID8ga2V5LnJldHVybkZuTmFtZSA6IGluZGV4O1xuICAgICAgICAgICAgICAgIHJldEZ1bmN0aW9uc1tmbk5hbWVdID0gc2NvcGVba2V5LmZuXSguLi5rZXkucGFyYW1zKTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkucmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0RnVuY3Rpb25zW2ZuTmFtZV0gPSByZXRGdW5jdGlvbnNbZm5OYW1lXVtrZXkucmV0dXJuVmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0RnVuY3Rpb25zW2tleV0gPSBlbGVtZW50W2tleV0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3R5bGVzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHJldFN0eWxlc1trZXldID0gZWxlbWVudC5zdHlsZVtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHJldEF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBmdW5jdGlvbnMgOiByZXRGdW5jdGlvbnMsXG4gICAgICAgICAgICBzdHlsZXMgICAgOiByZXRTdHlsZXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVhZChkYXRhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmRpcmVjdGlvbiBsZWZ0LCB0b3BcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzY3JvbGxCeShkYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50KGRhdGEuaWQpO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlW2BzY3JvbGwke05lby5jYXBpdGFsaXplKGRhdGEuZGlyZWN0aW9uKX1gXSArPSBkYXRhLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmJlaGF2aW9yPSdzbW9vdGgnXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5ibG9jaz0nc3RhcnQnXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5pbmxpbmU9J25lYXJlc3QnXVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXG4gICAgICovXG4gICAgc2Nyb2xsSW50b1ZpZXcoZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6IGRhdGEuYmVoYXZpb3IgfHwgJ3Ntb290aCcsXG4gICAgICAgICAgICAgICAgYmxvY2sgICA6IGRhdGEuYmxvY2sgICAgfHwgJ3N0YXJ0JyxcbiAgICAgICAgICAgICAgICBpbmxpbmUgIDogZGF0YS5pbmxpbmUgICB8fCAnbmVhcmVzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmRpcmVjdGlvbiBsZWZ0LCB0b3BcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzY3JvbGxUbyhkYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50KGRhdGEuaWQpO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlW2BzY3JvbGwke05lby5jYXBpdGFsaXplKGRhdGEuZGlyZWN0aW9uKX1gXSA9IGRhdGEudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuYmVoYXZpb3I9J3Ntb290aCddXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLm9mZnNldD0zNF1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNjcm9sbFRvVGFibGVSb3coZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTsgLy8gdHIgdGFnXG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGxldCB0YWJsZU5vZGUgICA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJOb2RlID0gdGFibGVOb2RlLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgdGFibGVUb3AgICAgPSB0YWJsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgIHRvcCAgICAgICAgID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgICAgICAgIHdyYXBwZXJOb2RlLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3AgICAgIDogdG9wIC0gdGFibGVUb3AgLSAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnb2Zmc2V0JykgPyBkYXRhLm9mZnNldCA6IDM0KSxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogZGF0YS5iZWhhdmlvciB8fCAnc21vb3RoJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2RhdGEuc3RhcnQ9MF1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2RhdGEuZW5kPTk5OTk5XVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IG9iai5pZCA9PiB0aGUgcGFzc2VkIGlkXG4gICAgICovXG4gICAgc2VsZWN0Tm9kZShkYXRhKSB7XG4gICAgICAgIGxldCBub2RlICA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKSxcbiAgICAgICAgICAgIHN0YXJ0ID0gTmVvLmlzTnVtYmVyKGRhdGEuc3RhcnQpIHx8IDAsXG4gICAgICAgICAgICBlbmQgICA9IE5lby5pc051bWJlcihkYXRhLmVuZCkgICB8fCA5OTk5OTtcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICAgICAgICAgIG5vZGUuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGRhdGEuYWRkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YS5yZW1vdmVcbiAgICAgKi9cbiAgICBzZXRCb2R5Q2xzKGRhdGEpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRhdGEucmVtb3ZlIHx8IFtdKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKC4uLmRhdGEuYWRkIHx8IFtdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3QgcmVjb21tZW5kZWQgdG8gdXNlID0+IHN0aWNrIHRvIHZkb20gdXBkYXRlcy5cbiAgICAgKiBDYW4gYmUgaGFuZHkgZm9yIGN1c3RvbSBDU1MgYmFzZWQgYW5pbWF0aW9ucyB0aG91Z2guXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZCBBIG5vZGUgaWQgb3IgJ2RvY3VtZW50LmJvZHknXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEuc3R5bGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNldFN0eWxlKGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuc3R5bGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsdWUpICYmIHZhbHVlLmluY2x1ZGVzKCchaW1wb3J0YW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCchaW1wb3J0YW50JywgJycpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShOZW8uZGVjYW1lbChrZXkpLCB2YWx1ZSwgJ2ltcG9ydGFudCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbTmVvLmRlY2FtZWwoa2V5KV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aWQ6IGRhdGEuaWR9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuYmVoYXZpb3I9J3Ntb290aCddIC8vIGF1dG8gb3Igc21vb3RoXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLmxlZnQ9MF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEudG9wPTBdXG4gICAgICovXG4gICAgd2luZG93U2Nyb2xsVG8oZGF0YSkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgYmVoYXZpb3I6IGRhdGEuYmVoYXZpb3IgfHwgJ3Ntb290aCcsXG4gICAgICAgICAgICBsZWZ0ICAgIDogZGF0YS5sZWZ0ICAgICB8fCAwLFxuICAgICAgICAgICAgdG9wICAgICA6IGRhdGEudG9wICAgICAgfHwgMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHdyaXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kdV9pbnNlcnROb2RlKHtcbiAgICAgICAgICAgIGluZGV4ICAgIDogZGF0YS5wYXJlbnRJbmRleCxcbiAgICAgICAgICAgIG91dGVySFRNTDogZGF0YS5odG1sIHx8IGRhdGEub3V0ZXJIVE1MLFxuICAgICAgICAgICAgcGFyZW50SWQgOiBkYXRhLnBhcmVudElkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRG9tQWNjZXNzKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShEb21BY2Nlc3MpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgVG91Y2hEb21FdmVudHMgZnJvbSAnLi9taXhpbi9Ub3VjaERvbUV2ZW50cy5tanMnO1xuXG5jb25zdCBnbG9iYWxEb21FdmVudHMgPSBbXG4gICAge25hbWU6ICdjaGFuZ2UnLCAgICAgIGhhbmRsZXI6ICdvbkNoYW5nZSd9LFxuICAgIHtuYW1lOiAnY2xpY2snLCAgICAgICBoYW5kbGVyOiAnb25DbGljayd9LFxuICAgIHtuYW1lOiAnY29udGV4dG1lbnUnLCBoYW5kbGVyOiAnb25Db250ZXh0TWVudSd9LFxuICAgIHtuYW1lOiAnZGJsY2xpY2snLCAgICBoYW5kbGVyOiAnb25Eb3VibGVDbGljayd9LFxuICAgIHtuYW1lOiAnZm9jdXNpbicsICAgICBoYW5kbGVyOiAnb25Gb2N1c0luJ30sXG4gICAge25hbWU6ICdmb2N1c291dCcsICAgIGhhbmRsZXI6ICdvbkZvY3VzT3V0J30sXG4gICAge25hbWU6ICdpbnB1dCcsICAgICAgIGhhbmRsZXI6ICdvbkNoYW5nZSd9LFxuICAgIHtuYW1lOiAna2V5ZG93bicsICAgICBoYW5kbGVyOiAnb25LZXlEb3duJ30sXG4gICAge25hbWU6ICdrZXl1cCcsICAgICAgIGhhbmRsZXI6ICdvbktleVVwJ30sXG4gICAge25hbWU6ICdtb3VzZWRvd24nLCAgIGhhbmRsZXI6ICdvbk1vdXNlRG93bid9LFxuICAgIHtuYW1lOiAnbW91c2VlbnRlcicsICBoYW5kbGVyOiAnb25Nb3VzZUVudGVyJywgb3B0aW9uczoge2NhcHR1cmU6IHRydWV9fSxcbiAgICB7bmFtZTogJ21vdXNlbGVhdmUnLCAgaGFuZGxlcjogJ29uTW91c2VMZWF2ZScsIG9wdGlvbnM6IHtjYXB0dXJlOiB0cnVlfX0sXG4gICAge25hbWU6ICdtb3VzZXVwJywgICAgIGhhbmRsZXI6ICdvbk1vdXNlVXAnfSxcbiAgICB7bmFtZTogJ3doZWVsJywgICAgICAgaGFuZGxlcjogJ29uV2hlZWwnLCAgICAgIG9wdGlvbnM6IHtwYXNzaXZlOiBmYWxzZX19XG5dO1xuXG4vLyBXaWxsIGdldCBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudC5ib2R5IGluIGNhc2UgTmVvLmNvbmZpZy51c2VUb3VjaEV2ZW50cyA9PT0gdHJ1ZSAoZGVmYXVsdCB2YWx1ZSlcbmNvbnN0IHRvdWNoRXZlbnRzID0gW1xuICAgIHtuYW1lOiAndG91Y2hjYW5jZWwnLCBoYW5kbGVyOiAnb25Ub3VjaENhbmNlbCd9LFxuICAgIHtuYW1lOiAndG91Y2hlbmQnLCAgICBoYW5kbGVyOiAnb25Ub3VjaEVuZCd9LFxuICAgIHtuYW1lOiAndG91Y2hlbnRlcicsICBoYW5kbGVyOiAnb25Ub3VjaEVudGVyJ30sXG4gICAge25hbWU6ICd0b3VjaGxlYXZlJywgIGhhbmRsZXI6ICdvblRvdWNoTGVhdmUnfSxcbiAgICB7bmFtZTogJ3RvdWNobW92ZScsICAgaGFuZGxlcjogJ29uVG91Y2hNb3ZlJ30sXG4gICAge25hbWU6ICd0b3VjaHN0YXJ0JywgIGhhbmRsZXI6ICdvblRvdWNoU3RhcnQnfVxuXTtcblxuLy8gd2hlZWwgZXZlbnRzIGZpcmUgdmVyeSBvZnRlbiwgc28gd2UgbGltaXQgdGhlIHRhcmdldHMgdG8gYXZvaWQgdW5uZWNlc3NhcnkgcG9zdCBtZXNzYWdlcyBmcm9tIG1haW4gdG8gdGhlIGFwcCB3b3JrZXJcbmNvbnN0IGdsb2JhbFdoZWVsVGFyZ2V0cyA9IFtcbiAgICAnbmVvLWMtbS1zY3JvbGxjb250YWluZXInLFxuICAgICduZW8tYy13LXNjcm9sbGNvbnRhaW5lcicsXG4gICAgJ25lby1jYWxlbmRhci15ZWFyY29tcG9uZW50JyxcbiAgICAnbmVvLWNpcmNsZS1jb21wb25lbnQnLFxuICAgICduZW8tZGF0ZXNlbGVjdG9yJyxcbiAgICAnbmVvLWdhbGxlcnknLFxuICAgICduZW8taGVsaXgnXG5dO1xuXG4vLyBzZXBhcmF0ZWQgZnJvbSBnbG9iYWxXaGVlbFRhcmdldHMgPT4gcGVyZm9ybWFuY2Vcbi8vIGJ1ZmZlciBpbiBtc1xuY29uc3QgZ2xvYmFsV2hlZWxUYXJnZXRzQnVmZmVyID0ge1xuICAgICduZW8tYy1tLXNjcm9sbGNvbnRhaW5lcicgICA6IDEwMCxcbiAgICAnbmVvLWMtdy1zY3JvbGxjb250YWluZXInICAgOiAxMDAsXG4gICAgJ25lby1jYWxlbmRhci15ZWFyY29tcG9uZW50JzogMzAwLFxuICAgICduZW8tZGF0ZXNlbGVjdG9yJyAgICAgICAgICA6IDMwMFxufTtcblxuLy8gc2VwYXJhdGVkIGZyb20gZ2xvYmFsV2hlZWxUYXJnZXRzID0+IHBlcmZvcm1hbmNlXG5jb25zdCBnbG9iYWxXaGVlbFRhcmdldHNLZWVwRXZlbnQgPSBbXG4gICAgJ25lby1jLW0tc2Nyb2xsY29udGFpbmVyJyxcbiAgICAnbmVvLWMtdy1zY3JvbGxjb250YWluZXInXG5dO1xuXG5jb25zdCBsYXN0V2hlZWxFdmVudCA9IHtcbiAgICBkYXRlICA6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsXG59O1xuXG5jb25zdCBwcmV2ZW50Q2xpY2tUYXJnZXRzICAgICAgID0gW10sXG4gICAgICBwcmV2ZW50Q29udGV4dG1lbnVUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYWluLkRvbUV2ZW50c1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBEb21FdmVudHMgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uRG9tRXZlbnRzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5Eb21FdmVudHMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogY29uZGl0aW9uYWwgZHluYW1pYyBpbXBvcnQgb25jZSB0aGUgYnVpbGQgcHJvY2Vzc2VzIGNhbiBoYW5kbGUgaXRcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IG1peGlucz1bVG91Y2hEb21FdmVudHNdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtUb3VjaERvbUV2ZW50c10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbJ2FkZERvbUxpc3RlbmVyJ119XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ2FkZERvbUxpc3RlbmVyJyxcbiAgICAgICAgICAgICAgICAncmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMnXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbWUub25Eb21Db250ZW50TG9hZGVkLmJpbmQobWUpKTtcbiAgICAgICAgd2luZG93ICAuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICAgICAgIG1lLm9uSGFzaENoYW5nZSAgICAgIC5iaW5kKG1lKSk7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlU2hhcmVkV29ya2Vycykge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIG1lLm9uQmVmb3JlVW5sb2FkLmJpbmQobWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhZGREb21MaXN0ZW5lcihkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IGRhdGEuZXZlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGV2ZW50LCBpZCwgdGFyZ2V0Tm9kZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBldmVudCA9IGRhdGEuZXZlbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIW1lW2V2ZW50LmhhbmRsZXJdKSB7XG4gICAgICAgICAgICAgICAgbWVbZXZlbnQuaGFuZGxlcl0gPSBOZW8uZW1wdHlGbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWQgPSBldmVudC52bm9kZUlkIHx8IGRhdGEudm5vZGVJZDtcblxuICAgICAgICAgICAgaWYgKGlkID09PSAnZG9jdW1lbnQuYm9keScpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmNvbmZpZy51c2VEb21JZHMpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmVvLWlkPScke2lkfSddYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudC5uYW1lLCBtZVtldmVudC5oYW5kbGVyXS5iaW5kKG1lKSk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4sIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICBkYXRhICAgOiBkYXRhLFxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhZGRHbG9iYWxEb21MaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgWy4uLmdsb2JhbERvbUV2ZW50c10uY29uY2F0KE5lby5jb25maWcudXNlVG91Y2hFdmVudHMgPyB0b3VjaEV2ZW50cyA6IFtdKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudC5uYW1lLCBtZVtldmVudC5oYW5kbGVyXS5iaW5kKG1lKSwgZXZlbnQub3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAqIEBwYXJhbSAge051bWJlcn0geDEgVGhlIFggcG9zaXRpb24gb2YgdGhlIGZpcnN0IHBvaW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB5MSBUaGUgWSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHgyIFRoZSBYIHBvc2l0aW9uIG9mIHRoZSBzZWNvbmQgcG9pbnRcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkyIFRoZSBZIHBvc2l0aW9uIG9mIHRoZSBzZWNvbmQgcG9pbnRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldERpc3RhbmNlKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHgyIC0geDEpICoqIDIgKyAoeTIgLSB5MSkgKiogMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9jYWwgZG9tRXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBkb21FdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgIDogJ2RvbUV2ZW50JyxcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50LnR5cGUsXG5cbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiB0YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkb21FdmVudExpc3RlbmVyJywgZXZlbnQudHlwZSwgdGFyZ2V0LmlkLCB0YXJnZXQudmFsdWUsIGV2ZW50KTtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RyYWdlbmQnOlxuICAgICAgICAgICAgICAgIG1lLmRyYWdFbGVtZW50SWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgICAgICAgICAgICBpZiAobWUuZHJhZ0VsZW1lbnRJZCA9PT0gdGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gaWdub3JlIHRhcmdldCBhbmQgc291cmNlIHRvIGJlIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcbiAgICAgICAgICAgICAgICBpZiAobWUuZHJhZ0VsZW1lbnRJZCA9PT0gdGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gaWdub3JlIHRhcmdldCBhbmQgc291cmNlIHRvIGJlIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZHJhZ292ZXInOlxuICAgICAgICAgICAgICAgIG1lLm9uRHJhZ092ZXIoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkcmFnc3RhcnQnOlxuICAgICAgICAgICAgICAgIG1lLmRyYWdFbGVtZW50SWQgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkcm9wJzpcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmRyYWdFbGVtZW50SWQgfHwgbWUuZHJhZ0VsZW1lbnRJZCA9PT0gdGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gZHJvcCBmaXJlcyB0d2ljZSBieSBkZWZhdWx0ICYgZHJvcCBzaG91bGQgbm90IHRyaWdnZXIgb24gdGhlIGRyYWcgZWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBzdG9wcyB0aGUgYnJvd3NlciBmcm9tIHJlZGlyZWN0aW5nLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbmZpZy5kYXRhLnNyY0lkID0gbWUuZHJhZ0VsZW1lbnRJZDtcbiAgICAgICAgICAgICAgICBtZS5kcmFnRWxlbWVudElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vdXNlbW92ZSc6XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcuZGF0YSwgbWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0RXZlbnREYXRhKGV2ZW50KSB7XG4gICAgICAgIGxldCBwYXRoID0gZXZlbnQucGF0aCB8fCBldmVudC5jb21wb3NlZFBhdGgoKTsgLy8gRkYgZG9lcyBub3Qgc3VwcG9ydCBwYXRoXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGggICAgIDogcGF0aC5tYXAoZSA9PiB0aGlzLmdldFRhcmdldERhdGEoZSkpLFxuICAgICAgICAgICAgdGFyZ2V0ICAgOiB0aGlzLmdldFRhcmdldERhdGEoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wLFxuICAgICAgICAgICAgdHlwZSAgICAgOiBldmVudC50eXBlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldEtleWJvYXJkRXZlbnREYXRhKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHthbHRLZXksIGNvZGUsIGN0cmxLZXksIGtleSwga2V5Q29kZSwgbWV0YUtleSwgc2hpZnRLZXl9ID0gZXZlbnQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgIGFsdEtleSAgOiBhbHRLZXksXG4gICAgICAgICAgICBjb2RlICAgIDogY29kZSxcbiAgICAgICAgICAgIGN0cmxLZXkgOiBjdHJsS2V5LFxuICAgICAgICAgICAga2V5ICAgICA6IGtleSxcbiAgICAgICAgICAgIGtleUNvZGUgOiBrZXlDb2RlLFxuICAgICAgICAgICAgbWV0YUtleSA6IG1ldGFLZXksXG4gICAgICAgICAgICBzaGlmdEtleTogc2hpZnRLZXlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qge2FsdEtleSwgY2xpZW50WCwgY2xpZW50WSwgY3RybEtleSwgbWV0YUtleSwgb2Zmc2V0WCwgb2Zmc2V0WSwgcGFnZVgsIHBhZ2VZLCBzY3JlZW5YLCBzY3JlZW5ZLCBzaGlmdEtleX0gPSBldmVudDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGhpcy5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgYWx0S2V5ICA6IGFsdEtleSxcbiAgICAgICAgICAgIGNsaWVudFggOiBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WSA6IGNsaWVudFksXG4gICAgICAgICAgICBjdHJsS2V5IDogY3RybEtleSxcbiAgICAgICAgICAgIG1ldGFLZXkgOiBtZXRhS2V5LFxuICAgICAgICAgICAgb2Zmc2V0WCA6IG9mZnNldFgsXG4gICAgICAgICAgICBvZmZzZXRZIDogb2Zmc2V0WSxcbiAgICAgICAgICAgIHBhZ2VYICAgOiBwYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZICAgOiBwYWdlWSxcbiAgICAgICAgICAgIHNjcmVlblggOiBzY3JlZW5YLFxuICAgICAgICAgICAgc2NyZWVuWSA6IHNjcmVlblksXG4gICAgICAgICAgICBzaGlmdEtleTogc2hpZnRLZXlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0UGF0aEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHBhdGggPSBbXTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcGF0aC5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFRhcmdldERhdGEobm9kZSkge1xuICAgICAgICBsZXQgciAgICA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0Py4oKSxcbiAgICAgICAgICAgIHJlY3QgPSB7fTtcblxuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZWN0LCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiByLmJvdHRvbSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHIuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGxlZnQgIDogci5sZWZ0LFxuICAgICAgICAgICAgICAgIHJpZ2h0IDogci5yaWdodCxcbiAgICAgICAgICAgICAgICB0b3AgICA6IHIudG9wLFxuICAgICAgICAgICAgICAgIHdpZHRoIDogci53aWR0aCxcbiAgICAgICAgICAgICAgICB4ICAgICA6IHIueCxcbiAgICAgICAgICAgICAgICB5ICAgICA6IHIueVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hlY2tlZCAgICAgICAgICA6IG5vZGUuY2hlY2tlZCxcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudENvdW50OiBub2RlLmNoaWxkRWxlbWVudENvdW50LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0ICAgICA6IG5vZGUuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50TGVmdCAgICAgICA6IG5vZGUuY2xpZW50TGVmdCxcbiAgICAgICAgICAgIGNsaWVudFRvcCAgICAgICAgOiBub2RlLmNsaWVudFRvcCxcbiAgICAgICAgICAgIGNsaWVudFdpZHRoICAgICAgOiBub2RlLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgY2xzICAgICAgICAgICAgICA6IG5vZGUuY2xhc3NMaXN0ID8gWy4uLm5vZGUuY2xhc3NMaXN0XSA6IFtdLFxuICAgICAgICAgICAgZGF0YSAgICAgICAgICAgICA6IHsuLi5ub2RlLmRhdGFzZXR9LFxuICAgICAgICAgICAgZHJhZ2dhYmxlICAgICAgICA6IG5vZGUuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgaGlkZGVuICAgICAgICAgICA6IG5vZGUuaGlkZGVuLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICA6IE5lby5jb25maWcudXNlRG9tSWRzID8gbm9kZS5pZCA6IG5vZGUuZGF0YXNldD8uWyduZW9JZCddLFxuICAgICAgICAgICAgaW5lcnQgICAgICAgICAgICA6IG5vZGUuaW5lcnQsXG4gICAgICAgICAgICBpc0Nvbm5lY3RlZCAgICAgIDogbm9kZS5pc0Nvbm5lY3RlZCxcbiAgICAgICAgICAgIGlzQ29udGVudEVkaXRhYmxlOiBub2RlLmlzQ29udGVudEVkaXRhYmxlLFxuICAgICAgICAgICAgbm9kZVR5cGUgICAgICAgICA6IG5vZGUubm9kZVR5cGUsXG4gICAgICAgICAgICBvZmZzZXRIZWlnaHQgICAgIDogbm9kZS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXRMZWZ0ICAgICAgIDogbm9kZS5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgb2Zmc2V0VG9wICAgICAgICA6IG5vZGUub2Zmc2V0VG9wLFxuICAgICAgICAgICAgb2Zmc2V0V2lkdGggICAgICA6IG5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICByZWN0LFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ICAgICA6IG5vZGUuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCAgICAgICA6IG5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFRvcCAgICAgICAgOiBub2RlLnNjcm9sbFRvcCxcbiAgICAgICAgICAgIHNjcm9sbFdpZHRoICAgICAgOiBub2RlLnNjcm9sbFdpZHRoLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICAgICA6IG5vZGUuc3R5bGU/LmNzc1RleHQsXG4gICAgICAgICAgICB0YWJJbmRleCAgICAgICAgIDogbm9kZS50YWJJbmRleCxcbiAgICAgICAgICAgIHRhZ05hbWUgICAgICAgICAgOiBub2RlLnRhZ05hbWU/LnRvTG93ZXJDYXNlKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB0b3VjaCBldmVudCBmb3VuZCBpbiB0b3VjaGVzIG9yIGNoYW5nZWRUb3VjaGVzIG9mIGEgVG91Y2hFdmVudFxuICAgICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7VG91Y2h9XG4gICAgICovXG4gICAgZ2V0VG91Y2hDb29yZHMoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qge3RvdWNoZXMsIGNoYW5nZWRUb3VjaGVzfSA9IGV2ZW50O1xuICAgICAgICByZXR1cm4gdG91Y2hlcz8uWzBdIHx8IGNoYW5nZWRUb3VjaGVzPy5bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT25seSBpbiB1c2UgaWYgTmVvLmNvbmZpZy51c2VTaGFyZWRXb3JrZXJzID0gdHJ1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uQmVmb3JlVW5sb2FkKGV2ZW50KSB7XG4gICAgICAgIGxldCBNID0gTmVvLndvcmtlci5NYW5hZ2VyO1xuXG4gICAgICAgIE0uYXBwTmFtZXMuZm9yRWFjaChhcHBOYW1lID0+IHtcbiAgICAgICAgICAgIE0uYnJvYWRjYXN0KHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gOiAnZGlzY29ubmVjdCcsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogYXBwTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAoe1xuICAgICAgICAgICAgLi4udGhpcy5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgdmFsaWQ6IGV2ZW50LnRhcmdldC5jaGVja1ZhbGlkaXR5KCksXG4gICAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgICBpZiAobWUudGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHByZXZlbnRDbGlja1RhcmdldHMpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICAgIGlmIChtZS50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgcHJldmVudENvbnRleHRtZW51VGFyZ2V0cykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uRG9tQ29udGVudExvYWRlZCgpIHtcbiAgICAgICAgdGhpcy5hZGRHbG9iYWxEb21MaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5maXJlKCdkb21Db250ZW50TG9hZGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRvdWJsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICAgIGlmIChtZS50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgcHJldmVudENsaWNrVGFyZ2V0cykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ29uRHJhZ092ZXInLCBldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkZvY3VzSW4oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkZvY3VzT3V0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25IYXNoQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCBNYW5hZ2VyICAgID0gTmVvLndvcmtlci5NYW5hZ2VyLFxuICAgICAgICAgICAgICBoYXNoU3RyaW5nID0gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSk7XG5cbiAgICAgICAgTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnaGFzaENoYW5nZScsXG4gICAgICAgICAgICBkYXRhICA6IHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lcyAgOiBNYW5hZ2VyLmFwcE5hbWVzLFxuICAgICAgICAgICAgICAgIGhhc2ggICAgICA6IHRoaXMucGFyc2VIYXNoKGhhc2hTdHJpbmcpLFxuICAgICAgICAgICAgICAgIGhhc2hTdHJpbmc6IGhhc2hTdHJpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0S2V5Ym9hcmRFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm5vZGVOYW1lICE9PSAnSU5QVVQnKSB7IC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzE3MjlcbiAgICAgICAgICAgIGlmIChbJ0Fycm93RG93bicsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCcsICdBcnJvd1VwJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0S2V5Ym9hcmRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vdXNlRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFwcEV2ZW50ID0gey4uLm1lLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSwgZnJvbUVsZW1lbnRJZDogZXZlbnQuZnJvbUVsZW1lbnQ/LmlkIHx8IG51bGx9O1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAoYXBwRXZlbnQpO1xuICAgICAgICBtZS5maXJlKCdtb3VzZUVudGVyJywgYXBwRXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZUxlYXZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcHBFdmVudCA9IHsuLi5tZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCksIHRvRWxlbWVudElkOiBldmVudC50b0VsZW1lbnQ/LmlkIHx8IG51bGx9O1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAoYXBwRXZlbnQpO1xuICAgICAgICBtZS5maXJlKCdtb3VzZUxlYXZlJywgYXBwRXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbldoZWVsKGV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgICAgICAgID0gdGhpcy50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgZ2xvYmFsV2hlZWxUYXJnZXRzKSxcbiAgICAgICAgICAgIHByZXZlbnRVcGRhdGUgPSBmYWxzZSxcbiAgICAgICAgICAgIHRhcmdldENscztcblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXRDbHMgPSB0YXJnZXQuY2xzO1xuXG4gICAgICAgICAgICBpZiAoZ2xvYmFsV2hlZWxUYXJnZXRzQnVmZmVyW3RhcmdldC5jbHNdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RXaGVlbEV2ZW50LmRhdGUgJiYgbGFzdFdoZWVsRXZlbnQudGFyZ2V0ID09PSB0YXJnZXRDbHMgJiYgZGF0ZSAtIGxhc3RXaGVlbEV2ZW50LmRhdGUgPCBnbG9iYWxXaGVlbFRhcmdldHNCdWZmZXJbdGFyZ2V0Q2xzXSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2ZW50VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGxhc3RXaGVlbEV2ZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlICA6IGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldENsc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBpZiAoIXByZXZlbnRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7ZGVsdGFYLCBkZWx0YVksIGRlbHRhWn0gPSBldmVudDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SGVpZ2h0OiB0YXJnZXQubm9kZS5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFdpZHRoIDogdGFyZ2V0Lm5vZGUuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWCAgICAgIDogZGVsdGFYLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVkgICAgICA6IGRlbHRhWSxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFaICAgICAgOiBkZWx0YVosXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgIDogdGFyZ2V0Lm5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wICAgOiB0YXJnZXQubm9kZS5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFnbG9iYWxXaGVlbFRhcmdldHNLZWVwRXZlbnQuaW5jbHVkZXModGFyZ2V0Q2xzKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGFtcGxlIGZvciBBcnJheSB2YWx1ZXM6IFwiY2F0ZWdvcmllc1tdPXRlc3QxJmNhdGVnb3JpZXNbXT10ZXN0MlwiXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgcGFyc2VIYXNoKHN0cikge1xuICAgICAgICBpZiAoc3RyID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBpZWNlcyA9IHN0ci5zcGxpdCgnJicpLFxuICAgICAgICAgICAgZGF0YSAgID0ge30sXG4gICAgICAgICAgICBpLCBrZXksIHBhcnRzLCB2YWx1ZTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJ0cyA9IHBpZWNlc1tpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgICA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1swXSk7XG4gICAgICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0c1sxXSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignW10nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKDAsIGtleS5pbmRleE9mKCdbXScpKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkYXRhW2tleV0ucHVzaCh0aGlzLnBhcnNlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdGhpcy5wYXJzZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHVzZWQgYnkgcGFyc2VIYXNoIHRvIGNvbnZlcnQgdG9rZW5zIGludG8gYm9vbGVhbiBvciBudW1iZXIgdHlwZXMgaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58TnVtYmVyfFN0cmluZ31cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gcGFyc2VJbnQodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBkYXRhLmNsc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLm5hbWVcbiAgICAgKi9cbiAgICByZWdpc3RlclByZXZlbnREZWZhdWx0VGFyZ2V0cyhkYXRhKSB7XG4gICAgICAgIGxldCBwcmV2ZW50QXJyYXk7XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEuY2xzKSkge1xuICAgICAgICAgICAgZGF0YS5jbHMgPSBbZGF0YS5jbHNdO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChkYXRhLm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgICAgICBwcmV2ZW50QXJyYXkgPSBwcmV2ZW50Q2xpY2tUYXJnZXRzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29udGV4dG1lbnUnOlxuICAgICAgICAgICAgICAgIHByZXZlbnRBcnJheSA9IHByZXZlbnRDb250ZXh0bWVudVRhcmdldHM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmNscy5mb3JFYWNoKGNscyA9PiB7XG4gICAgICAgICAgICBpZiAoIXByZXZlbnRBcnJheS5pbmNsdWRlcyhjbHMpKSB7XG4gICAgICAgICAgICAgICAgcHJldmVudEFycmF5LnB1c2goY2xzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgdGhlIHBhcnNlZCBldmVudCBkYXRhIHRvIHRoZSBhcHAgd29ya2VyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2VuZE1lc3NhZ2VUb0FwcChkYXRhKSB7XG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZSgnYXBwJywge1xuICAgICAgICAgICAgYWN0aW9uICAgOiAnZG9tRXZlbnQnLFxuICAgICAgICAgICAgZXZlbnROYW1lOiBkYXRhLnR5cGUsXG4gICAgICAgICAgICBkYXRhICAgICA6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldEFycmF5XG4gICAgICogQHJldHVybnMge09iamVjdHxCb29sZWFufSB0YXJnZXQgY2xzICYgbm9kZSBpZiBmb3VuZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgdGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHRhcmdldEFycmF5KSB7XG4gICAgICAgIGxldCBjb3VudFRhcmdldHMgPSB0YXJnZXRBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICBwYXRoICAgICAgICAgPSBldmVudC5wYXRoIHx8IGV2ZW50LmNvbXBvc2VkUGF0aCgpLFxuICAgICAgICAgICAgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgaiwgbm9kZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBub2RlID0gcGF0aFtpXTtcblxuICAgICAgICAgICAgZm9yIChqPTA7IGogPCBjb3VudFRhcmdldHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdD8uY29udGFpbnModGFyZ2V0QXJyYXlbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiB0YXJnZXRBcnJheVtqXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEb21FdmVudHMpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKERvbUV2ZW50cyk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9BbUNoYXJ0cy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9BbUNoYXJ0cy5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0FtQ2hhcnRzX21qc1wiXG5cdF0sXG5cdFwiLi9BbmFseXRpY3NCeUdvb2dsZS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9BbmFseXRpY3NCeUdvb2dsZS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0FuYWx5dGljc0J5R29vZ2xlX21qc1wiXG5cdF0sXG5cdFwiLi9CYXNlLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0Jhc2UubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9CYXNlX21qc1wiXG5cdF0sXG5cdFwiLi9DZXNpdW1KUy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9DZXNpdW1KUy5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0Nlc2l1bUpTX21qc1wiXG5cdF0sXG5cdFwiLi9DbG9uZU5vZGUubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vQ2xvbmVOb2RlLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fQ2xvbmVOb2RlX21qc1wiXG5cdF0sXG5cdFwiLi9Db29raWUubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vQ29va2llLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fQ29va2llX21qc1wiXG5cdF0sXG5cdFwiLi9EcmFnRHJvcC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9EcmFnRHJvcC5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fRHJhZ0Ryb3BfbWpzXCJcblx0XSxcblx0XCIuL0ZpbGVTeXN0ZW1BY2Nlc3MubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vRmlsZVN5c3RlbUFjY2Vzcy5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0ZpbGVTeXN0ZW1BY2Nlc3NfbWpzXCJcblx0XSxcblx0XCIuL0dvb2dsZU1hcHMubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vR29vZ2xlTWFwcy5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fR29vZ2xlTWFwc19tanNcIlxuXHRdLFxuXHRcIi4vSGlnaGxpZ2h0SlMubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vSGlnaGxpZ2h0SlMubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0hpZ2hsaWdodEpTX21qc1wiXG5cdF0sXG5cdFwiLi9JbnRlcnNlY3Rpb25PYnNlcnZlci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9JbnRlcnNlY3Rpb25PYnNlcnZlci5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0ludGVyc2VjdGlvbk9ic2VydmVyX21qc1wiXG5cdF0sXG5cdFwiLi9Mb2NhbFN0b3JhZ2UubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vTG9jYWxTdG9yYWdlLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTG9jYWxTdG9yYWdlX21qc1wiXG5cdF0sXG5cdFwiLi9NYXBib3hHTC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9NYXBib3hHTC5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTWFwYm94R0xfbWpzXCJcblx0XSxcblx0XCIuL01hcmtkb3duLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL01hcmtkb3duLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fTWFya2Rvd25fbWpzXCJcblx0XSxcblx0XCIuL01vbmFjb0VkaXRvci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Nb25hY29FZGl0b3IubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Nb25hY29FZGl0b3JfbWpzXCJcblx0XSxcblx0XCIuL013Yy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Nd2MubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Nd2NfbWpzXCJcblx0XSxcblx0XCIuL05hdmlnYXRvci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9OYXZpZ2F0b3IubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX05hdmlnYXRvcl9tanNcIlxuXHRdLFxuXHRcIi4vUG9wb3Zlci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Qb3BvdmVyLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fUG9wb3Zlcl9tanNcIlxuXHRdLFxuXHRcIi4vUHJlZml4RmllbGQubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vUHJlZml4RmllbGQubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9QcmVmaXhGaWVsZF9tanNcIlxuXHRdLFxuXHRcIi4vUmVzaXplT2JzZXJ2ZXIubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vUmVzaXplT2JzZXJ2ZXIubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9SZXNpemVPYnNlcnZlcl9tanNcIlxuXHRdLFxuXHRcIi4vU2Nyb2xsU3luYy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TY3JvbGxTeW5jLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fU2Nyb2xsU3luY19tanNcIlxuXHRdLFxuXHRcIi4vU2VydmljZVdvcmtlci5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TZXJ2aWNlV29ya2VyLm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fU2VydmljZVdvcmtlcl9tanNcIlxuXHRdLFxuXHRcIi4vU2llc3RhLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1NpZXN0YS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX1NpZXN0YV9tanNcIlxuXHRdLFxuXHRcIi4vU3R5bGVzaGVldC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TdHlsZXNoZWV0Lm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fU3R5bGVzaGVldF9tanNcIlxuXHRdLFxuXHRcIi4vV2ViQ29tcG9uZW50Lm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1dlYkNvbXBvbmVudC5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX1dlYkNvbXBvbmVudF9tanNcIlxuXHRdLFxuXHRcIi4vV2luZG93UG9zaXRpb24ubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vV2luZG93UG9zaXRpb24ubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9XaW5kb3dQb3NpdGlvbl9tanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLm1qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBMb2dpYyB0byBhcHBseSB0aGUgZGVsdGFzIGdlbmVyYXRlZCBieSB2ZG9tLkhlbHBlciB0byB0aGUgcmVhbCBET01cbiAqIEBjbGFzcyBOZW8ubWFpbi5taXhpbi5EZWx0YVVwZGF0ZXNcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRGVsdGFVcGRhdGVzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLm1peGluLkRlbHRhVXBkYXRlcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4ubWl4aW4uRGVsdGFVcGRhdGVzJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqL1xuICAgIGR1X2ZvY3VzTm9kZShkZWx0YSkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoZGVsdGEuaWQpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbm9kZS5jaGlsZHJlbiBjb250YWlucyB0aGUgXCJyZWFsXCIgbm9kZXMgKHRhZ3MpXG4gICAgICogbm9kZS5jaGlsZE5vZGVzIGNvbnRhaW5zIHRleHRzICYgY29tbWVudHMgYXMgbm9kZXMgdG9vXG4gICAgICogc2luY2UgZXZlcnkgdnR5cGU6J3RleHQnIGlzIHdyYXBwZWQgaW5zaWRlIGEgY29tbWVudCBibG9jayAoYXMgYW4gaWQpLFxuICAgICAqIHdlIG5lZWQgdGhlIGFtb3VudCBvZiBub2RlcyB3aGljaCBhcmUgbm90IGNvbW1lbnRzIHRvIGdldCB0aGUgXCJyZWFsSW5kZXhcIi5cbiAgICAgKiBpbnNlcnRBZGphY2VudEhUTUwoKSBpcyBmYXN0ZXIgdGhhbiBjcmVhdGluZyBhIG5vZGUgKHRlbXBsYXRlKSwgYnV0IG9ubHkgYXZhaWxhYmxlXG4gICAgICogZm9yIGNoaWxkcmVuIGFuZCBub3QgZm9yIGNoaWxkTm9kZXMuXG4gICAgICogSW4gY2FzZSB0aGVyZSBhcmUgbm8gY29tbWVudHMgKD0+IHZ0eXBlOiAndGV4dCcgbm9kZXMpLCB3ZSBzdGljayB0byBpdCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5vdXRlckhUTUxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKi9cbiAgICBkdV9pbnNlcnROb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCBpbmRleCAgICAgICAgID0gZGVsdGEuaW5kZXgsXG4gICAgICAgICAgICBwYXJlbnROb2RlICAgID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRlbHRhLnBhcmVudElkKSxcbiAgICAgICAgICAgIGNvdW50Q2hpbGRyZW4gPSBwYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICByZWFsSW5kZXggICAgID0gaW5kZXgsXG4gICAgICAgICAgICBoYXNDb21tZW50cyAgID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnNlcnROb2RlJywgaW5kZXgsIGNvdW50Q2hpbGRyZW4sIGRlbHRhLnBhcmVudElkKTtcblxuICAgICAgICBpZiAoY291bnRDaGlsZHJlbiA8PSAyMCAmJiBwYXJlbnROb2RlLm5vZGVOYW1lICE9PSAnVEJPRFknKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50Q2hpbGRyZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IDgpIHsgLy8gaWdub3JlIGNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgcmVhbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbW1lbnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc0NvbW1lbnRzKSB7XG4gICAgICAgICAgICBjb3VudENoaWxkcmVuID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPj0gY291bnRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiBpbmRleCkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudENoaWxkcmVuID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5bY291bnRDaGlsZHJlbiAtIDFdLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGVsdGEub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmh0bWxTdHJpbmdUb0VsZW1lbnQoZGVsdGEub3V0ZXJIVE1MKTtcblxuICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiByZWFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBwYXJlbnROb2RlLmNoaWxkTm9kZXNbcmVhbEluZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxuICAgICAqL1xuICAgIGR1X21vdmVOb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCBpbmRleCAgICAgID0gZGVsdGEuaW5kZXgsXG4gICAgICAgICAgICBub2RlICAgICAgID0gdGhpcy5nZXRFbGVtZW50KGRlbHRhLmlkKSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGVsdGEucGFyZW50SWQpO1xuXG4gICAgICAgIGlmIChpbmRleCA+PSBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vaW5kZXgrKzsgLy8gdG9kbz86IGluY3JlYXNlIHRoZSBpbmRleCBpbiBjYXNlIHNhbWUgcGFyZW50LCBvbGRJbmRleCA8IG5ld0luZGV4LCBkaXJlY3Qgc3dhcFxuICAgICAgICAgICAgaWYgKG5vZGUgJiYgcGFyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0uaWQgIT09IGRlbHRhLmlkKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgcGFyZW50Tm9kZS5jaGlsZHJlbltpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKi9cbiAgICBkdV9yZW1vdmVOb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50KGRlbHRhLmlkKSxcbiAgICAgICAgICAgIHJlZywgc3RhcnRUYWc7XG5cbiAgICAgICAgaWYgKCFub2RlKSB7IC8vIGNvdWxkIGJlIGEgdnR5cGU6IHRleHRcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoZGVsdGEucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0VGFnICA9IGA8IS0tICR7ZGVsdGEuaWR9IC0tPmA7XG4gICAgICAgICAgICAgICAgcmVnICAgICAgID0gbmV3IFJlZ0V4cChzdGFydFRhZyArICdbXFxcXHNcXFxcU10qPzwhLS0gXFwvbmVvLXZ0ZXh0IC0tPicpO1xuXG4gICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBub2RlLmlubmVySFRNTC5yZXBsYWNlKHJlZywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2R1X3JlbW92ZU5vZGU6IGRvbSBub2RlIG5vdCBmb3VuZCBmb3IgaWQnLCBkZWx0YS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5mcm9tSWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEudG9JZFxuICAgICAqL1xuICAgIGR1X3JlcGxhY2VDaGlsZChkZWx0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gbWUuZ2V0RWxlbWVudChkZWx0YS5wYXJlbnRJZCk7XG5cbiAgICAgICAgbm9kZS5yZXBsYWNlQ2hpbGQobWUuZ2V0RWxlbWVudChkZWx0YS50b0lkKSwgbWUuZ2V0RWxlbWVudChkZWx0YS5mcm9tSWQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEuaWRdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS52YWx1ZVxuICAgICAqL1xuICAgIGR1X3NldFRleHRDb250ZW50KGRlbHRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgPSBtZS5nZXRFbGVtZW50KGRlbHRhLmlkKTtcblxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gZGVsdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RlbHRhLmF0dHJpYnV0ZXNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5jbHNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkZWx0YS5pZF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmlubmVySFRNTF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLm91dGVySFRNTF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RlbHRhLnN0eWxlXVxuICAgICAqL1xuICAgIGR1X3VwZGF0ZU5vZGUoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnRPckJvZHkoZGVsdGEuaWQpO1xuXG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdkdV91cGRhdGVOb2RlOiBub2RlIG5vdCBmb3VuZCBmb3IgaWQnLCBkZWx0YS5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkZWx0YSkuZm9yRWFjaCgoW3Byb3AsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52b2lkQXR0cmlidXRlcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IHZhbCA9PT0gJ3RydWUnOyAvLyB2bm9kZSBhdHRyaWJ1dGUgdmFsdWVzIGdldCBjb252ZXJ0ZWQgaW50byBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAndmFsdWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW2tleV0gPSAnJzsgLy8gaW5wdXQgZmllbGRzID0+IHBzZXVkbyBhdHRyaWJ1dGUgY2FuIG5vdCBiZSByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtOZW8uY29uZmlnLnVzZURvbUlkcyA/ICdpZCcgOiAnZGF0YS1uZW8taWQnXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoa2V5ID09PSAnc3BlbGxjaGVjaycgJiYgdmFsID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvMTkyMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW2tleV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW2tleV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCguLi52YWx1ZS5hZGQgfHwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKC4uLnZhbHVlLnJlbW92ZSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5uZXJIVE1MJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gdmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb3V0ZXJIVE1MJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub3V0ZXJIVE1MID0gdmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKHZhbCkgJiYgdmFsLmluY2x1ZGVzKCchaW1wb3J0YW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKCchaW1wb3J0YW50JywgJycpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoTmVvLmRlY2FtZWwoa2V5KSwgdmFsLCAnaW1wb3J0YW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW05lby5kZWNhbWVsKGtleSldID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnBhcmVudElkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnZhbHVlXG4gICAgICovXG4gICAgZHVfdXBkYXRlVnRleHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlICAgICAgPSBtZS5nZXRFbGVtZW50KGRlbHRhLnBhcmVudElkKSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IG5vZGUuaW5uZXJIVE1MLFxuICAgICAgICAgICAgc3RhcnRUYWcgID0gYDwhLS0gJHtkZWx0YS5pZH0gLS0+YCxcbiAgICAgICAgICAgIHJlZyAgICAgICA9IG5ldyBSZWdFeHAoc3RhcnRUYWcgKyAnW1xcXFxzXFxcXFNdKj88IS0tIFxcL25lby12dGV4dCAtLT4nKTtcblxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVySFRNTC5yZXBsYWNlKHJlZywgZGVsdGEudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIHJlcHJlc2VudGluZyBhIHNpbmdsZSBlbGVtZW50XG4gICAgICogQHJldHVybnMge0NoaWxkTm9kZX1cbiAgICAgKi9cbiAgICBodG1sU3RyaW5nVG9FbGVtZW50KGh0bWwpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGRhdGEuZGVsdGFzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEub3JpZ2luPSdhcHAnXVxuICAgICAqL1xuICAgIHVwZGF0ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFzID0gZGF0YS5kZWx0YXMsXG4gICAgICAgICAgICBpICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuO1xuXG4gICAgICAgIGRlbHRhcyA9IEFycmF5LmlzQXJyYXkoZGVsdGFzKSA/IGRlbHRhcyA6IFtkZWx0YXNdO1xuICAgICAgICBsZW4gICAgPSBkZWx0YXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmxvZ0RlbHRhVXBkYXRlcyAmJiBsZW4gPiAwKSB7XG4gICAgICAgICAgICBtZS5jb3VudERlbHRhcyArPSBsZW47XG4gICAgICAgICAgICBtZS5jb3VudFVwZGF0ZXMrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUgJyArIG1lLmNvdW50VXBkYXRlcywgJ3RvdGFsIGRlbHRhcyAnLCBtZS5jb3VudERlbHRhcywgTmVvLmNsb25lKGRhdGEsIHRydWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnJlbmRlckNvdW50RGVsdGFzICYmIGxlbiA+IDApIHtcbiAgICAgICAgICAgIG1lLmNvdW50RGVsdGFzUGVyMjUwbXMgKz0gbGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFwID0ge1xuICAgICAgICAgICAgZm9jdXNOb2RlICAgICA6IG1lLmR1X2ZvY3VzTm9kZSxcbiAgICAgICAgICAgIGluc2VydE5vZGUgICAgOiBtZS5kdV9pbnNlcnROb2RlLFxuICAgICAgICAgICAgbW92ZU5vZGUgICAgICA6IG1lLmR1X21vdmVOb2RlLFxuICAgICAgICAgICAgcmVtb3ZlTm9kZSAgICA6IG1lLmR1X3JlbW92ZU5vZGUsXG4gICAgICAgICAgICByZXBsYWNlQ2hpbGQgIDogbWUuZHVfcmVwbGFjZUNoaWxkLFxuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQ6IG1lLmR1X3NldFRleHRDb250ZW50LFxuICAgICAgICAgICAgdXBkYXRlVnRleHQgICA6IG1lLmR1X3VwZGF0ZVZ0ZXh0LFxuICAgICAgICAgICAgZGVmYXVsdCAgICAgICA6IG1lLmR1X3VwZGF0ZU5vZGVcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAobWFwW2RlbHRhc1tpXS5hY3Rpb25dIHx8IG1hcFsnZGVmYXVsdCddKS5jYWxsKG1lLCBkZWx0YXNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luIHx8ICdhcHAnLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEZWx0YVVwZGF0ZXMpO1xuXG5leHBvcnQge0RlbHRhVXBkYXRlcyBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFdpbGwgZ2V0IGltcG9ydGVkIGluIGNhc2UgTmVvLmNvbmZpZy51c2VUb3VjaEV2ZW50cyA9PT0gdHJ1ZVxuICogQGNsYXNzIE5lby5tYWluLm1peGluLlRvdWNoRG9tRXZlbnRzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFRvdWNoRG9tRXZlbnRzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYWluLm1peGluLlRvdWNoRG9tRXZlbnRzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5taXhpbi5Ub3VjaERvbUV2ZW50cydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoQ2FuY2VsKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hFbnRlcihldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hMZWF2ZShldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblRvdWNoU3RhcnQnLCBldmVudCk7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVG91Y2hEb21FdmVudHMpO1xuXG5leHBvcnQge1RvdWNoRG9tRXZlbnRzIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRG9tQWNjZXNzICAgICAgICAgIGZyb20gJy4uL21haW4vRG9tQWNjZXNzLm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRzICAgICAgICAgIGZyb20gJy4uL21haW4vRG9tRXZlbnRzLm1qcyc7XG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBSZW1vdGVNZXRob2RBY2Nlc3MgZnJvbSAnLi9taXhpbi9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcblxuY29uc3QgTmVvQ29uZmlnID0gTmVvLmNvbmZpZyxcbiAgICAgIGRldk1vZGUgICA9IE5lb0NvbmZpZy5lbnZpcm9ubWVudCA9PT0gJ2RldmVsb3BtZW50JztcblxuLyoqXG4gKiBUaGUgd29ya2VyIG1hbmFnZXIgbGl2ZXMgaW5zaWRlIHRoZSBtYWluIHRocmVhZCBhbmQgY3JlYXRlcyB0aGUgQXBwLCBEYXRhICYgVkRvbSB3b3JrZXIuXG4gKiBBbHNvIHJlc3BvbnNpYmxlIGZvciBzZW5kaW5nIG1lc3NhZ2VzIGZyb20gdGhlIG1haW4gdGhyZWFkIHRvIHRoZSBkaWZmZXJlbnQgd29ya2Vycy5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLk1hbmFnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLk1hbmFnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuTWFuYWdlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFjdGl2ZVdvcmtlcnM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVXb3JrZXJzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGFwcE5hbWVzPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGFwcE5hbWVzOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYXNlIHBhdGggZm9yIHRoZSB3b3JrZXIgZmlsZSBVUkxzLCBjYW4gZS5nLiBnZXQgc2V0IGluc2lkZSB0aGUgaW5kZXguaHRtbC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJhc2VQYXRoPU5lby5jb25maWcud29ya2VyQmFzZVBhdGggfHwgJ3dvcmtlci8nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGJhc2VQYXRoOiBOZW9Db25maWcud29ya2VyQmFzZVBhdGggfHwgJ3dvcmtlci8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb25zdHJ1Y3RlZFRocmVhZHM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3RlZFRocmVhZHM6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgd2luZG93LlNoYXJlZFdvcmtlci5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hhcmVkV29ya2Vyc0VuYWJsZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2hhcmVkV29ya2Vyc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB0byBzdG9wIHRoZSB3b3JrZXIgY29tbXVuaWNhdGlvbiBpbiBjYXNlIHRoZWlyIGNyZWF0aW9uIGZhaWxzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHN0b3BDb21tdW5pY2F0aW9uPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0b3BDb21tdW5pY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaW4gY2FzZSB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHdpbmRvdy5Xb3JrZXIuXG4gICAgICAgICAqIFRoZSBuZW8ubWpzIGZyYW1ld29yayBpcyBub3QgYWJsZSB0byBydW4gd2l0aG91dCB3ZWIgd29ya2Vycy5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hhcmVkV29ya2Vyc0VuYWJsZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd2ViV29ya2Vyc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGFpbnMgdGhlIGZpbGVOYW1lcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHdvcmtlcnNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2Vyczoge1xuICAgICAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnQXBwLm1qcycgICAgOiAnYXBwd29ya2VyLmpzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbnZhczoge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBkZXZNb2RlID8gJ0NhbnZhcy5tanMnIDogJ2NhbnZhc3dvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnRGF0YS5tanMnICAgOiAnZGF0YXdvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnVkRvbS5tanMnICAgOiAndmRvbXdvcmtlci5qcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5kZXRlY3RGZWF0dXJlcygpO1xuXG4gICAgICAgIGlmICghTmVvLmluc2lkZVdvcmtlcikge1xuICAgICAgICAgICAgbWUuY3JlYXRlV29ya2VycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlcklkID0gJ21haW4nO1xuXG4gICAgICAgIG1lLnByb21pc2VzID0ge307XG5cbiAgICAgICAgbWUub24oe1xuICAgICAgICAgICAgJ21lc3NhZ2U6YWRkRG9tTGlzdGVuZXInICAgIDoge2ZuOiBEb21FdmVudHMuYWRkRG9tTGlzdGVuZXIsICAgICAgIHNjb3BlOiBEb21FdmVudHN9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6Z2V0T2Zmc2NyZWVuQ2FudmFzJzoge2ZuOiBEb21BY2Nlc3Mub25HZXRPZmZzY3JlZW5DYW52YXMsIHNjb3BlOiBEb21BY2Nlc3N9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6cmVhZERvbScgICAgICAgICAgIDoge2ZuOiBEb21BY2Nlc3Mub25SZWFkRG9tLCAgICAgICAgICAgIHNjb3BlOiBEb21BY2Nlc3N9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6cmVnaXN0ZXJSZW1vdGUnICAgIDoge2ZuOiBtZS5vblJlZ2lzdGVyUmVtb3RlLCAgICAgICAgICAgIHNjb3BlOiBtZX0sXG4gICAgICAgICAgICAnbWVzc2FnZTp3b3JrZXJDb25zdHJ1Y3RlZCcgOiB7Zm46IG1lLm9uV29ya2VyQ29uc3RydWN0ZWQsICAgICAgICAgc2NvcGU6IG1lfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gZWFjaCB3b3JrZXIgZGVmaW5lZCBpbnNpZGUgdGhlIHRoaXMud29ya2VycyBjb25maWcuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICAgICAqL1xuICAgIGJyb2FkY2FzdChtc2cpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy53b3JrZXJzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShuYW1lLCBtc2cpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd2ViIHdvcmtlciB1c2luZyB0aGUgcGFzc2VkIG9wdGlvbnMgYXMgd2VsbCBhcyBhZGRpbmcgZXJyb3IgJiBtZXNzYWdlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtTaGFyZWRXb3JrZXJ8V29ya2VyfVxuICAgICAqL1xuICAgIGNyZWF0ZVdvcmtlcihvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWxlTmFtZSA9IG9wdHMuZmlsZU5hbWUsXG4gICAgICAgICAgICBmaWxlUGF0aCA9IChvcHRzLmJhc2VQYXRoIHx8IG1lLmJhc2VQYXRoKSArIGZpbGVOYW1lLFxuICAgICAgICAgICAgbmFtZSAgICAgPSBgbmVvbWpzLSR7ZmlsZU5hbWUuc3Vic3RyaW5nKDAsIGZpbGVOYW1lLmluZGV4T2YoJy4nKSkudG9Mb3dlckNhc2UoKX0td29ya2VyYCxcbiAgICAgICAgICAgIGlzU2hhcmVkID0gbWUuc2hhcmVkV29ya2Vyc0VuYWJsZWQgJiYgTmVvQ29uZmlnLnVzZVNoYXJlZFdvcmtlcnMsXG4gICAgICAgICAgICBjbHMgICAgICA9IGlzU2hhcmVkID8gU2hhcmVkV29ya2VyIDogV29ya2VyLFxuICAgICAgICAgICAgd29ya2VyICAgPSBkZXZNb2RlICAvLyB0b2RvOiBzd2l0Y2ggdG8gdGhlIG5ldyBzeW50YXggdG8gY3JlYXRlIGEgd29ya2VyIGZyb20gYSBKUyBtb2R1bGUgb25jZSBicm93c2VycyBhcmUgcmVhZHlcbiAgICAgICAgICAgICAgICA/IG5ldyBjbHMoZmlsZVBhdGgsIHtuYW1lOiBuYW1lLCB0eXBlOiAnbW9kdWxlJ30pXG4gICAgICAgICAgICAgICAgOiBuZXcgY2xzKGZpbGVQYXRoLCB7bmFtZTogbmFtZX0pO1xuXG4gICAgICAgIChpc1NoYXJlZCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5vbm1lc3NhZ2UgPSBtZS5vbldvcmtlck1lc3NhZ2UuYmluZChtZSk7XG4gICAgICAgIChpc1NoYXJlZCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5vbmVycm9yICAgPSBtZS5vbldvcmtlckVycm9yICAuYmluZChtZSk7XG5cbiAgICAgICAgbWUuYWN0aXZlV29ya2VycysrO1xuXG4gICAgICAgIHJldHVybiB3b3JrZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgY3JlYXRlV29ya2VyIGZvciBlYWNoIHdvcmtlciBpbnNpZGUgdGhlIHRoaXMud29ya2VycyBjb25maWcuXG4gICAgICovXG4gICAgY3JlYXRlV29ya2VycygpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2gsXG4gICAgICAgICAgICBrZXksIHZhbHVlO1xuXG4gICAgICAgIC8vIHBhc3MgdGhlIGluaXRpYWwgaGFzaCB2YWx1ZSBhcyBOZW8uY29uZmlnc1xuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgTmVvQ29uZmlnLmhhc2ggPSB7XG4gICAgICAgICAgICAgICAgaGFzaCAgICAgIDogRG9tRXZlbnRzLnBhcnNlSGFzaChoYXNoLnN1YnN0cigxKSksXG4gICAgICAgICAgICAgICAgaGFzaFN0cmluZzogaGFzaC5zdWJzdHIoMSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZS53b3JrZXJzKSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NhbnZhcycgJiYgIU5lb0NvbmZpZy51c2VDYW52YXNXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS53b3JrZXIgPSBtZS5jcmVhdGVXb3JrZXIodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gZTtcbiAgICAgICAgICAgICAgICBtZS5zdG9wQ29tbXVuaWNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnNlbmRNZXNzYWdlKGtleSwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlZ2lzdGVyTmVvQ29uZmlnJyxcbiAgICAgICAgICAgICAgICBkYXRhICA6IE5lb0NvbmZpZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRldGVjdEZlYXR1cmVzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lb0NvbmZpZy5oYXNUb3VjaEV2ZW50cyA9ICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IChuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwKTtcblxuICAgICAgICBpZiAod2luZG93Lldvcmtlcikge1xuICAgICAgICAgICAgbWUud2ViV29ya2Vyc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBXZWIgV29ya2VycycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5TaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG1lLnNoYXJlZFdvcmtlcnNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFdvcmtlcn0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtXb3JrZXJ9XG4gICAgICovXG4gICAgZ2V0V29ya2VyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW5zdGFuY2VvZiBXb3JrZXIgPyBuYW1lIDogdGhpcy53b3JrZXJzW25hbWVdLndvcmtlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqL1xuICAgIGxvYWRBcHBsaWNhdGlvbihwYXRoKSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbiAgICAgICA6ICdsb2FkQXBwbGljYXRpb24nLFxuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHJlc291cmNlc1BhdGg6IE5lb0NvbmZpZy5yZXNvdXJjZXNQYXRoXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Xb3JrZXJDb25zdHJ1Y3RlZChkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuY29uc3RydWN0ZWRUaHJlYWRzKys7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdGVkVGhyZWFkcyA9PT0gbWUuYWN0aXZlV29ya2Vycykge1xuICAgICAgICAgICAgTmVvQ29uZmlnLmFwcFBhdGggJiYgc2V0VGltZW91dCgoKSA9PiB7IC8vIGJldHRlciBzYXZlIHRoYW4gc29ycnkgPT4gYWxsIHJlbW90ZXMgbmVlZCB0byBiZSByZWdpc3RlcmVkXG4gICAgICAgICAgICAgICAgbWUubG9hZEFwcGxpY2F0aW9uKE5lb0NvbmZpZy5hcHBQYXRoKTtcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgbWV0aG9kIGZvciB3b3JrZXIgZXJyb3IgZXZlbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBvbldvcmtlckVycm9yKGUpIHtcbiAgICAgICAgLy8gc3RhcnRpbmcgYSB3b3JrZXIgZnJvbSBhIEpTIG1vZHVsZSB3aWxsIHNob3cgSlMgZXJyb3JzIGluIGEgY29ycmVjdCB3YXlcbiAgICAgICAgIWRldk1vZGUgJiYgY29uc29sZS5sb2coJ1dvcmtlciBFcnJvcjonLCBlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIG1ldGhvZCBmb3Igd29ya2VyIG1lc3NhZ2UgZXZlbnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVcbiAgICAgKi9cbiAgICBvbldvcmtlck1lc3NhZ2UoZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRhdGEgICAgICAgICA9IGUuZGF0YSxcbiAgICAgICAgICAgIGRlbGF5UHJvbWlzZSA9IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNmZXIgICAgID0gbnVsbCxcbiAgICAgICAgICAgIHByb21pc2U7XG5cbiAgICAgICAgY29uc3Qge2FjdGlvbiwgZGVzdGluYXRpb246IGRlc3QsIHJlcGx5SWR9ID0gZGF0YTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFpbjogSW5jb21pbmcgV29ya2VyIG1lc3NhZ2U6ICcgKyBkYXRhLm9yaWdpbiArICc6JyArIGFjdGlvbiwgZGF0YSk7XG5cbiAgICAgICAgbWUuZmlyZSgnbWVzc2FnZTonK2FjdGlvbiwgZGF0YSk7XG5cbiAgICAgICAgaWYgKHByb21pc2UgPSBhY3Rpb24gPT09ICdyZXBseScgJiYgbWUucHJvbWlzZXNbcmVwbHlJZF0pIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmRlc3RpbmF0aW9uID09PSAnbWFpbicpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5yZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmF1dG9Nb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZmlyZSgnYXV0b21vdW50JywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheVByb21pc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEudXBkYXRlVmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZmlyZSgndXBkYXRlVmRvbScsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXlQcm9taXNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGVsYXlQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5wcm9taXNlc1tyZXBseUlkXS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZGVsYXlQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lLnByb21pc2VzW3JlcGx5SWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlc3QgIT09ICdtYWluJyAmJiBhY3Rpb24gIT09ICdyZXBseScpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmZXIgPSBbZGF0YS50cmFuc2Zlcl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VNZXNzYWdlKGRlc3QsIGRhdGEsIHRyYW5zZmVyKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShyZXNwb25zZS5kZXN0aW5hdGlvbiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgICAgICBlcnJvciAgOiBlcnIubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbmx5IG5lZWRlZCBmb3IgU2hhcmVkV29ya2Vyc1xuICAgICAgICBlbHNlIGlmIChkZXN0ID09PSAnbWFpbicgJiYgYWN0aW9uID09PSAncmVnaXN0ZXJBcHBOYW1lJykge1xuICAgICAgICAgICAgbWUuYXBwTmFtZXMucHVzaChkYXRhLmFwcE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAoZGVzdCA9PT0gJ21haW4nICYmIGFjdGlvbiA9PT0gJ3JlbW90ZU1ldGhvZCcpIHtcbiAgICAgICAgICAgIG1lLm9uUmVtb3RlTWV0aG9kKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhIG9yIHZkb21cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtZS5zZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2ZlciksXG4gICAgICAgICAgICAgICAgbXNnSWQgICA9IG1lc3NhZ2UuaWQ7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VzW21zZ0lkXSA9IHtcbiAgICAgICAgICAgICAgICByZWplY3QsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcGx5SWRcbiAgICAgKi9cbiAgICByZXNvbHZlRG9tT3BlcmF0aW9uUHJvbWlzZShyZXBseUlkKSB7XG4gICAgICAgIGlmIChyZXBseUlkKSB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMucHJvbWlzZXNbcmVwbHlJZF07XG5cbiAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHByb21pc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucHJvbWlzZXNbcmVwbHlJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEgb3IgdmRvbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIGNvbmZpZ3MgZm9yIE5lby53b3JrZXIuTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFt0cmFuc2Zlcl0gQW4gb3B0aW9uYWwgYXJyYXkgb2YgVHJhbnNmZXJhYmxlIG9iamVjdHMgdG8gdHJhbnNmZXIgb3duZXJzaGlwIG9mLlxuICAgICAqIElmIHRoZSBvd25lcnNoaXAgb2YgYW4gb2JqZWN0IGlzIHRyYW5zZmVycmVkLCBpdCBiZWNvbWVzIHVudXNhYmxlIChuZXV0ZXJlZCkgaW4gdGhlIGNvbnRleHQgaXQgd2FzIHNlbnQgZnJvbVxuICAgICAqIGFuZCBiZWNvbWVzIGF2YWlsYWJsZSBvbmx5IHRvIHRoZSB3b3JrZXIgaXQgd2FzIHNlbnQgdG8uXG4gICAgICogQHJldHVybnMge05lby53b3JrZXIuTWVzc2FnZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsIHdvcmtlcjtcblxuICAgICAgICBpZiAoIW1lLnN0b3BDb21tdW5pY2F0aW9uKSB7XG4gICAgICAgICAgICB3b3JrZXIgPSBtZS5nZXRXb3JrZXIoZGVzdCk7XG5cbiAgICAgICAgICAgIGlmICghd29ya2VyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgc2VuZE1lc3NhZ2UgZm9yIGEgd29ya2VyIHRoYXQgZG9lcyBub3QgZXhpc3Q6ICcgKyBkZXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3B0cy5kZXN0aW5hdGlvbiA9IGRlc3Q7XG5cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShvcHRzKTtcblxuICAgICAgICAgICAgKG1lLnNoYXJlZFdvcmtlcnNFbmFibGVkICYmIE5lb0NvbmZpZy51c2VTaGFyZWRXb3JrZXJzID8gd29ya2VyLnBvcnQgOiB3b3JrZXIpLnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyKTtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYW5hZ2VyKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShNYW5hZ2VyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cbiAqIFlvdSBjYW4gYWRkIG9wdGlvbmFsIHBhcmFtcyBhcyBuZWVkZWQuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXG4gKi9cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3Rpb25cbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzdGluYXRpb249J21haW4nXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlkPUlkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZClcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3JpZ2luPU5lby53b3JrZXJJZFxuICAgICAgICAgKi9cblxuICAgICAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuZGVzdGluYXRpb24gfHwgJ21haW4nO1xuICAgICAgICBjb25maWcuaWQgICAgICAgICAgPSBjb25maWcuaWQgICAgICAgICAgfHwgSWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKTtcbiAgICAgICAgY29uZmlnLm9yaWdpbiAgICAgID0gY29uZmlnLm9yaWdpbiAgICAgIHx8IE5lby53b3JrZXJJZDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgfVxufVxuXG5jb25zdCBucyA9IE5lby5ucygnTmVvLndvcmtlcicsIHRydWUpO1xubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XG5cbmV4cG9ydCB7TWVzc2FnZSBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2Vzc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBSZW1vdGVNZXRob2RBY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiBQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBvcmlnaW4gPSByZW1vdGUub3JpZ2luO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCBidWZmZXIpIHtcbiAgICAgICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgICAgIDogJ3JlbW90ZU1ldGhvZCcsXG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG9wdHMuYXBwTmFtZSB8fCBkYXRhPy5hcHBOYW1lO1xuICAgICAgICAgICAgICAgIG9wdHMucG9ydCAgICA9IG9wdHMucG9ydCAgICB8fCBkYXRhPy5wb3J0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJSZW1vdGUocmVtb3RlKSB7XG4gICAgICAgIGlmIChyZW1vdGUuZGVzdGluYXRpb24gPT09IE5lby53b3JrZXJJZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcmVtb3RlLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBleGlzdHMgICAgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXRob2RzICAgPSByZW1vdGUubWV0aG9kcyxcbiAgICAgICAgICAgICAgICBwa2cgICAgICAgPSBOZW8ubnMoY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGUub3JpZ2luICE9PSAnbWFpbicgJiYgcGtnW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghcGtnW21ldGhvZF0gKSB7XG4gICAgICAgICAgICAgICAgICAgIHBrZ1ttZXRob2RdID0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHRvZG86IGluc3BlY3QgaWYgdGhpcyBjYW4gZ2V0IHJlbW92ZWRcbiAgICAgICAgICAgIGlmICghZXhpc3RzICYmIE5lby53b3JrZXJJZCAhPT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgbWUuZmlyZSgncmVtb3RlcmVnaXN0ZXJlZCcsIHJlbW90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcblxuICAgICAgICBpZiAoIXBrZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kID0gcGtnW21zZy5yZW1vdGVNZXRob2RdO1xuXG4gICAgICAgIGlmICghbWV0aG9kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG1ldGhvZCBuYW1lIFwiJyArIG1zZy5yZW1vdGVNZXRob2QgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBvdXQudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgbWUucmVqZWN0KG1zZywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIG91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG1zZy5hcHBOYW1lO1xuICAgICAgICAgICAgb3B0cy5wb3J0ICAgID0gbXNnLnBvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKG1zZy5vcmlnaW4sIG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZXNvbHZlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc29sdmUobXNnLCBkYXRhKSB7XG4gICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbXNnLmFwcE5hbWU7XG4gICAgICAgICAgICBvcHRzLnBvcnQgICAgPSBtc2cucG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xuXG5leHBvcnQge1JlbW90ZU1ldGhvZEFjY2VzcyBhcyBkZWZhdWx0fTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcImNodW5rcy9tYWluL1wiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJuZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbmVvX29mZnNjcmVlbl9jYW52YXNfZGVtb1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtuZW9fb2Zmc2NyZWVuX2NhbnZhc19kZW1vXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQgTmVvICAgICAgICAgICBmcm9tICcuL05lby5tanMnO1xuaW1wb3J0ICogYXMgY29yZSAgICAgZnJvbSAnLi9jb3JlL19leHBvcnQubWpzJztcbmltcG9ydCBEb21BY2Nlc3MgICAgIGZyb20gJy4vbWFpbi9Eb21BY2Nlc3MubWpzJztcbmltcG9ydCBEb21FdmVudHMgICAgIGZyb20gJy4vbWFpbi9Eb21FdmVudHMubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgIGZyb20gJy4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgV29ya2VyTWFuYWdlciBmcm9tICcuL3dvcmtlci9NYW5hZ2VyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5NYWluXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIE1haW4gZXh0ZW5kcyBjb3JlLkJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uTWFpbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLk1haW4nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBtb2RlPSdyZWFkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtb2RlOiAncmVhZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG9wZW5XaW5kb3dzPXt9XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG9wZW5XaW5kb3dzOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSByZWFkUXVldWU9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZFF1ZXVlOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6IFsvLy4uLl19XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ2FsZXJ0JyxcbiAgICAgICAgICAgICAgICAnZWRpdFJvdXRlJyxcbiAgICAgICAgICAgICAgICAnZ2V0V2luZG93RGF0YScsXG4gICAgICAgICAgICAgICAgJ3NldE5lb0NvbmZpZycsXG4gICAgICAgICAgICAgICAgJ3NldFJvdXRlJyxcbiAgICAgICAgICAgICAgICAnd2luZG93Q2xvc2UnLFxuICAgICAgICAgICAgICAgICd3aW5kb3dNb3ZlVG8nLFxuICAgICAgICAgICAgICAgICd3aW5kb3dPcGVuJyxcbiAgICAgICAgICAgICAgICAnd2luZG93UmVzaXplVG8nXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBydW5uaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJ1bm5pbmc6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0Zwcz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0ZwczogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRpbWVMaW1pdD0xNVxuICAgICAgICAgKi9cbiAgICAgICAgdGltZUxpbWl0OiAxNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNob3VsZCBiZSBkZXYgb25seVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRvdGFsRnJhbWVDb3VudD0wXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRvdGFsRnJhbWVDb3VudDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB1cGRhdGVRdWV1ZT1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVRdWV1ZTogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gd3JpdGVRdWV1ZT1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB3cml0ZVF1ZXVlOiBbXVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgaWYgKE5lby5jb25maWcuZW52aXJvbm1lbnQgPT09ICdkZXZlbG9wbWVudCcgJiYgdHlwZW9mIHdpbmRvdy53ZWJraXRDb252ZXJ0UG9pbnRGcm9tTm9kZVRvUGFnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBbXG4gICAgICAgICAgICAgICAgJ1BsZWFzZSB1c2UgQ2hyb21lIGZvciB0aGUgZGV2ZWxvcG1lbnQgbW9kZS48L2JyPicsXG4gICAgICAgICAgICAgICAgJ0ZvciBkZXRhaWxzLCBzZWUgdGhlIG9wZW4gVGlja2V0OiAnLFxuICAgICAgICAgICAgICAgICc8YSBzdHlsZT1cImNvbG9yOnJlZDtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25lb21qcy9uZW8vaXNzdWVzLzE5MVwiPlNhZmFyaTogV29ya2VyIHNob3VsZCBzdXBwb3J0IEVTNiBtb2R1bGVzPC9hPidcbiAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5vbih7XG4gICAgICAgICAgICAnYXV0b21vdW50JyAgICAgICAgOiBtZS5vblJlbmRlcixcbiAgICAgICAgICAgICdtZXNzYWdlOm1vdW50RG9tJyA6IG1lLm9uTW91bnREb20sXG4gICAgICAgICAgICAnbWVzc2FnZTp1cGRhdGVEb20nOiBtZS5vblVwZGF0ZURvbSxcbiAgICAgICAgICAgICd1cGRhdGVWZG9tJyAgICAgICA6IG1lLm9uVXBkYXRlVmRvbSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERvbUV2ZW50cy5vbignZG9tQ29udGVudExvYWRlZCcsIG1lLm9uRG9tQ29udGVudExvYWRlZCwgbWUpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgICAgIERvbUV2ZW50cy5vbkRvbUNvbnRlbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdvcmtlcnMgY2FuIG5vdCB0cmlnZ2VyIGFsZXJ0KCksIHNvIHdlIG5lZWQgcmVtb3RlIG1ldGhvZCBhY2Nlc3MuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgYWxlcnQodmFsdWUpIHtcbiAgICAgICAgYWxlcnQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVkaXQgdGhlIGxvY2F0aW9uLmhhc2ggdmFsdWVcbiAgICAgKiBBIHZhbHVlIG9mIG51bGwgd2lsbCByZW1vdmUgdGhlIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGVkaXRSb3V0ZShkYXRhKSB7XG4gICAgICAgIGxldCBoYXNoT2JqID0gRG9tRXZlbnRzLnBhcnNlSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpLFxuICAgICAgICAgICAgaGFzaEFyciA9IFtdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGEgPSBEb21FdmVudHMucGFyc2VIYXNoKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihoYXNoT2JqLCBkYXRhKTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhoYXNoT2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhhc2hBcnIucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hBcnIuam9pbignJicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHdpbmRvdy5zY3JlZW4gaXMgbm90IHNwcmVhZGFibGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFdpbmRvd0RhdGEoKSB7XG4gICAgICAgIGNvbnN0IHdpbiAgICA9IHdpbmRvdyxcbiAgICAgICAgICAgICAgc2NyZWVuID0gd2luLnNjcmVlbjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5uZXJIZWlnaHQ6IHdpbi5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIGlubmVyV2lkdGggOiB3aW4uaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIG91dGVySGVpZ2h0OiB3aW4ub3V0ZXJIZWlnaHQsXG4gICAgICAgICAgICBvdXRlcldpZHRoIDogd2luLm91dGVyV2lkdGgsXG4gICAgICAgICAgICBzY3JlZW46IHtcbiAgICAgICAgICAgICAgICBhdmFpbEhlaWdodDogc2NyZWVuLmF2YWlsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGF2YWlsTGVmdCAgOiBzY3JlZW4uYXZhaWxMZWZ0LFxuICAgICAgICAgICAgICAgIGF2YWlsVG9wICAgOiBzY3JlZW4uYXZhaWxUb3AsXG4gICAgICAgICAgICAgICAgYXZhaWxXaWR0aCA6IHNjcmVlbi5hdmFpbFdpZHRoLFxuICAgICAgICAgICAgICAgIGNvbG9yRGVwdGggOiBzY3JlZW4uY29sb3JEZXB0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgIDogc2NyZWVuLmhlaWdodCxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjoge2FuZ2xlOiBzY3JlZW4ub3JpZW50YXRpb24uYW5nbGUsIHR5cGU6IHNjcmVlbi5vcmllbnRhdGlvbi50eXBlfSxcbiAgICAgICAgICAgICAgICBwaXhlbERlcHRoIDogc2NyZWVuLnBpeGVsRGVwdGgsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICA6IHNjcmVlbi53aWR0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcmVlbkxlZnQ6IHdpbi5zY3JlZW5MZWZ0LFxuICAgICAgICAgICAgc2NyZWVuVG9wIDogd2luLnNjcmVlblRvcCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB0b2RvOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvcmVzaXplXG4gICAgZ2xvYmFsUmVzaXplTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbFJlc2l6ZUxpc3RlbmVyJywgZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYXN5bmMgb25Eb21Db250ZW50TG9hZGVkKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgID0gTmVvLmNvbmZpZyxcbiAgICAgICAgICAgIGltcG9ydHMgPSBbXTtcblxuICAgICAgICBEb21BY2Nlc3Mub25Eb21Db250ZW50TG9hZGVkKCk7XG5cbiAgICAgICAgLy8gbm90IGluIHVzZSByaWdodCBub3dcbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG1lLmdsb2JhbFJlc2l6ZUxpc3RlbmVyLmJpbmQobWUpKTtcblxuICAgICAgICAvLyB3ZSBuZWVkIGRpZmZlcmVudCBwdWJsaWNQYXRoIHZhbHVlcyBmb3IgdGhlIG1haW4gdGhyZWFkIGluc2lkZSB0aGUgd2VicGFjayBiYXNlZCBkaXN0IGVudnMsXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgaGllcmFyY2h5IGxldmVsIG9mIHRoZSBhcHAgZW50cnkgcG9pbnRcbiAgICAgICAgaWYgKGNvbmZpZy5lbnZpcm9ubWVudCAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gY29uZmlnLmJhc2VQYXRoLnN1YnN0cmluZyg2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5tYWluVGhyZWFkQWRkb25zLmZvckVhY2goYWRkb24gPT4ge1xuICAgICAgICAgICAgaWYgKGFkZG9uICE9PSAnQW5hbHl0aWNzQnlHb29nbGUnKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydChgLi9tYWluL2FkZG9uLyR7YWRkb259Lm1qc2ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW50ZW5kZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgd2hlcmUgd2UgbmVlZCBhbiBlYXN5IHdheSB0byBhZGQgR0EgdG8gZXZlcnkgZ2VuZXJhdGVkIGFwcFxuICAgICAgICBpZiAoY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljcyB8fCBjb25maWcubWFpblRocmVhZEFkZG9ucy5pbmNsdWRlcygnQW5hbHl0aWNzQnlHb29nbGUnKSkge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydCgnLi9tYWluL2FkZG9uL0FuYWx5dGljc0J5R29vZ2xlLm1qcycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChpbXBvcnRzKTtcblxuICAgICAgICBtZS5hZGRvbiA9IHt9O1xuXG4gICAgICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgbWUuYWRkb25bbW9kdWxlLmRlZmF1bHQuY29uc3RydWN0b3IubmFtZV0gPSBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5vbldvcmtlckNvbnN0cnVjdGVkKHtcbiAgICAgICAgICAgIG9yaWdpbjogJ21haW4nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBvbk1vdW50RG9tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVdyaXRlKGRhdGEpO1xuXG4gICAgICAgIFdvcmtlck1hbmFnZXIuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4gfHwgJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICdyZXBseScsXG4gICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgb25SZW5kZXIoZGF0YSkge1xuICAgICAgICBkYXRhLmRhdGEucmVwbHlJZCA9IGRhdGEucmVwbHlJZDtcbiAgICAgICAgdGhpcy5xdWV1ZVdyaXRlKGRhdGEuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIG9uVXBkYXRlRG9tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVVwZGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgb25VcGRhdGVWZG9tKGRhdGEpIHtcbiAgICAgICAgZGF0YS5kYXRhLnJlcGx5SWQgPSBkYXRhLnJlcGx5SWQ7XG4gICAgICAgIHRoaXMucXVldWVVcGRhdGUoZGF0YS5kYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IHF1ZXVlXG4gICAgICogQHBhcmFtIHtEYXRlfSBzdGFydFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb2Nlc3NRdWV1ZShxdWV1ZSwgc3RhcnQpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGxpbWl0ID0gbWUudGltZUxpbWl0LFxuICAgICAgICAgICAgb3BlcmF0aW9uO1xuXG4gICAgICAgIHdoaWxlIChvcGVyYXRpb24gPSBxdWV1ZS5zaGlmdCgpKSB7XG4gICAgICAgICAgICBpZiAobmV3IERhdGUoKSAtIHN0YXJ0ID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS51bnNoaWZ0KG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXJGcmFtZS5iaW5kKG1lKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIERvbUFjY2Vzc1ttZS5tb2RlXShvcGVyYXRpb24pO1xuICAgICAgICAgICAgICAgIFdvcmtlck1hbmFnZXIucmVzb2x2ZURvbU9wZXJhdGlvblByb21pc2Uob3BlcmF0aW9uLnJlcGx5SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBxdWV1ZVJlYWQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBtZS5yZWFkUXVldWUucHVzaChkYXRhKTtcblxuICAgICAgICBpZiAoIW1lLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIG1lLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcXVldWVVcGRhdGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBtZS51cGRhdGVRdWV1ZS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIGlmICghbWUucnVubmluZykge1xuICAgICAgICAgICAgbWUucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucmVuZGVyRnJhbWUuYmluZChtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBxdWV1ZVdyaXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgbWUud3JpdGVRdWV1ZS5wdXNoKGRhdGEpO1xuXG4gICAgICAgIGlmICghbWUucnVubmluZykge1xuICAgICAgICAgICAgbWUucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucmVuZGVyRnJhbWUuYmluZChtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIGRpZmZlcmVudCBET00gb3BlcmF0aW9uIHF1ZXVlc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW5kZXJGcmFtZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVhZCAgICA9IG1lLnJlYWRRdWV1ZSxcbiAgICAgICAgICAgIHVwZGF0ZSAgPSBtZS51cGRhdGVRdWV1ZSxcbiAgICAgICAgICAgIHdyaXRlICAgPSBtZS53cml0ZVF1ZXVlLFxuICAgICAgICAgICAgcmVhZGluZyA9IG1lLm1vZGUgPT09ICdyZWFkJyxcbiAgICAgICAgICAgIHN0YXJ0ICAgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLmxvZ0RlbHRhVXBkYXRlcykge1xuICAgICAgICAgICAgbWUudG90YWxGcmFtZUNvdW50Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG90YWwgRnJhbWVzOiAnICsgbWUudG90YWxGcmFtZUNvdW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWFkaW5nIHx8ICF3cml0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLm1vZGUgPSAncmVhZCc7XG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHJlYWQsIHN0YXJ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cGRhdGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBtZS5tb2RlID0gJ3VwZGF0ZSc7XG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHVwZGF0ZSwgc3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdyaXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUubW9kZSA9ICd3cml0ZSc7XG4gICAgICAgICAgICBpZiAobWUucHJvY2Vzc1F1ZXVlKHdyaXRlLCBzdGFydCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS5ydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBsb2NhdGlvbi5oYXNoIHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldFJvdXRlKGRhdGEpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBkYXRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgbG9jYXRpb24uaGFzaCB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEua2V5XG4gICAgICogQHBhcmFtIHsqfSBkYXRhLnZhbHVlXG4gICAgICovXG4gICAgc2V0TmVvQ29uZmlnKGRhdGEpIHtcbiAgICAgICAgTmVvLmNvbmZpZ1tkYXRhLmtleV0gPSBkYXRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBwb3B1cCB3aW5kb3dzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5uYW1lc1xuICAgICAqL1xuICAgIHdpbmRvd0Nsb3NlKGRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEubmFtZXMpKSB7XG4gICAgICAgICAgICBkYXRhLm5hbWVzID0gW2RhdGEubmFtZXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5uYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuV2luZG93c1tuYW1lXS5jbG9zZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub3BlbldpbmRvd3NbbmFtZV07XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBhIHBvcHVwIHdpbmRvd1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2luZG93TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS55XG4gICAgICovXG4gICAgd2luZG93TW92ZVRvKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vcGVuV2luZG93c1tkYXRhLndpbmRvd05hbWVdLm1vdmVUbyhkYXRhLngsIGRhdGEueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBhIG5ldyBwb3B1cCB3aW5kb3dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnVybFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLndpbmRvd0ZlYXR1cmVzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2luZG93TmFtZVxuICAgICAqL1xuICAgIHdpbmRvd09wZW4oZGF0YSkge1xuICAgICAgICB0aGlzLm9wZW5XaW5kb3dzW2RhdGEud2luZG93TmFtZV0gPSB3aW5kb3cub3BlbihkYXRhLnVybCwgZGF0YS53aW5kb3dOYW1lLCBkYXRhLndpbmRvd0ZlYXR1cmVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgcG9wdXAgd2luZG93XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2RhdGEuaGVpZ2h0XVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGF0YS53aWR0aF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS53aW5kb3dOYW1lXG4gICAgICovXG4gICAgd2luZG93UmVzaXplVG8oZGF0YSkge1xuICAgICAgICBsZXQgd2luICAgID0gdGhpcy5vcGVuV2luZG93c1tkYXRhLndpbmRvd05hbWVdLFxuICAgICAgICAgICAgaGVpZ2h0ID0gZGF0YS5oZWlnaHQgfHwgd2luLm91dGVySGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGggID0gZGF0YS53aWR0aCAgfHwgd2luLm91dGVyV2lkdGg7XG5cbiAgICAgICAgd2luLnJlc2l6ZVRvKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTWFpbik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==