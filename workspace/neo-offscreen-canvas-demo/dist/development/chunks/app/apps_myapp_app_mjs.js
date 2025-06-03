"use strict";
(self["webpackChunkneo_offscreen_canvas_demo"] = self["webpackChunkneo_offscreen_canvas_demo"] || []).push([["apps_myapp_app_mjs"],{

/***/ "./apps/myapp/app.mjs":
/*!****************************!*\
  !*** ./apps/myapp/app.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onStart: () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/myapp/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/myapp/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'MyApp'
})


/***/ }),

/***/ "./apps/myapp/view/MainContainer.mjs":
/*!*******************************************!*\
  !*** ./apps/myapp/view/MainContainer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Label_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_toolbar_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/toolbar/Base.mjs */ "./node_modules/neo.mjs/src/toolbar/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");
/* harmony import */ var _WebGlComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebGlComponent.mjs */ "./apps/myapp/view/WebGlComponent.mjs");





/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static config = {
        /**
         * @member {String} className='MyApp.view.MainContainer'
         * @protected
         */
        className: 'MyApp.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         * @protected
         */
        autoMount: true,
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.items = [{
            ntype : 'container',
            flex  : 1,
            items : [_WebGlComponent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]],
            layout: {ntype: 'fit'},
            vdom  : {tag: 'd3fc-group', 'auto-resize': true, cn: []}
        }, {
            module: _node_modules_neo_mjs_src_toolbar_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            flex  : 'none',
            items : [{
                handler: me.onStopAnimationButtonClick.bind(me),
                text   : 'Stop Animation'
            }, {
                handler: me.onStopMainButtonClick.bind(me),
                style  : {marginLeft: '.2em'},
                text   : 'Stop Main'
            }, {
                handler    : me.changeItemAmount.bind(me, 10000),
                pressed    : true,
                style      : {marginLeft: '2em'},
                text       : `${(10000).toLocaleString()} items`,
                toggleGroup: 'itemAmount',
                value      : 10000
            }, {
                handler    : me.changeItemAmount.bind(me, 100000),
                style      : {marginLeft: '.2em'},
                text       : `${(100000).toLocaleString()} items`,
                toggleGroup: 'itemAmount',
                value      : 100000
            }, {
                handler    : me.changeItemAmount.bind(me, 1000000),
                style      : {marginLeft: '.2em'},
                text       : `${(1000000).toLocaleString()} items`,
                toggleGroup: 'itemAmount',
                value      : 1000000
            }, {
                module   : _node_modules_neo_mjs_src_component_Label_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                reference: 'time-label',
                style    : {marginLeft: '2em'},
                text     : `Time: ${me.getTime()}`
            }]
        }]
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        if (value) {
            setInterval(() => {
                this.down({reference: 'time-label'}).text = `Time: ${this.getTime()}`
            }, 1000)
        }
    }

    /**
     * @param {Number} count
     */
    changeItemAmount(count) {
        let me = this;

        MyApp.canvas.Helper.changeItemsAmount(count);

        me.items[1].items.forEach(item => {
            if (item.toggleGroup === 'itemAmount') {
                item.pressed = item.value === count
            }
        })
    }

    getTime() {
        return new Date().toLocaleString(Neo.config.locale, {
            hour  : '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    /**
     * @param {Object} data
     */
    onStopAnimationButtonClick(data) {
        let enableAnimation = true,
            buttonText;

        if (data.component.text === 'Stop Animation') {
            buttonText      = 'Start Animation';
            enableAnimation = false
        } else {
            buttonText = 'Stop Animation'
        }

        data.component.text = buttonText;

        MyApp.canvas.Helper.enableAnimation(enableAnimation)
    }

    /**
     * @param {Object} data
     */
    onStopMainButtonClick(data) {
        Neo.Main.alert([
            'This alert pauses the JS main thread.\n\n',
            'Notice that the time inside the bottom toolbar has stopped updating.\n\n',
            'Closing this alert will resume the main thread.'
        ].join(''))
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(MainContainer));


/***/ }),

/***/ "./apps/myapp/view/WebGlComponent.mjs":
/*!********************************************!*\
  !*** ./apps/myapp/view/WebGlComponent.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Canvas_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Canvas.mjs */ "./node_modules/neo.mjs/src/component/Canvas.mjs");


/**
 * @class MyApp.view.WebGlComponent
 * @extends Neo.component.Canvas
 */
class WebGlComponent extends _node_modules_neo_mjs_src_component_Canvas_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='MyApp.view.WebGlComponent'
         * @protected
         */
        className: 'MyApp.view.WebGlComponent',
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'd3fc-canvas', cn: [
            {tag: 'canvas'}
        ]}
    }

    /**
     * Triggered after the id config got changed
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetId(value, oldValue) {
        let me = this;

        me.vdom.cn[0].id = `${value}__canvas`;

        super.afterSetId(value, oldValue)
    }

    /**
     * Triggered after the offscreenRegistered config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetOffscreenRegistered(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners;

            domListeners.push(
                {measure: me.onMeasure, scope: me} // custom d3fc dom event
            );

            me.domListeners = domListeners;

            // We need a short delay to ensure our app based remote methods got registered
            // inside the dist envs
            setTimeout(() => {
                // remote method access to the canvas worker
                MyApp.canvas.Helper.renderSeries(this.getCanvasId());

                Neo.main.DomAccess.getBoundingClientRect({id: me.id}).then(rect => {
                    me.updateSize(rect.height, rect.width);
                })
            }, 50)
        }
    }

    /**
     * Override this method when using wrappers (e.g. D3)
     * @returns {String}
     */
    getCanvasId() {
        return this.vdom.cn[0].id
    }

    /**
     * @param {Object} data
     */
    onMeasure(data) {
        let node = data.path[0];
        this.updateSize(node.clientHeight, node.clientWidth)
    }

    /**
     * @param {Number} height
     * @param {Number} width
     */
    updateSize(height, width) {
        MyApp.canvas.Helper.updateSize({ height, width })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(WebGlComponent));


/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Canvas.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Canvas.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.component.Canvas
 * @extends Neo.component.Base
 */
class Canvas extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Canvas'
         * @protected
         */
        className: 'Neo.component.Canvas',
        /**
         * @member {String} ntype='canvas'
         * @protected
         */
        ntype: 'canvas',
        /**
         * @member {Boolean} offscreen=true
         */
        offscreen: true,
        /**
         * Only applicable if offscreen === true.
         * true once the ownership of the canvas node got transferred to worker.Canvas.
         * @member {Boolean} offscreenRegistered_=false
         */
        offscreenRegistered_: false,
        /**
         * @member {Object} _vdom={tag: 'canvas'}
         */
        _vdom:
        {tag: 'canvas'}
    }}

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        let me     = this,
            id     = me.getCanvasId(),
            worker = Neo.currentWorker;

        if (value && me.offscreen) {
            worker.promiseMessage('main', {
                action: 'getOffscreenCanvas',
                nodeId: id
            }).then(data => {
                worker.promiseMessage('canvas', {
                    action: 'registerCanvas',
                    node  : data.offscreen,
                    nodeId: id
                }, [data.offscreen]).then(() => {
                    me.offscreenRegistered = true;
                });
            });
        }
    }

    /**
     * Override this method when using wrappers (e.g. D3)
     * @returns {String}
     */
    getCanvasId() {
        return this.id;
    }
}

Neo.applyClassConfig(Canvas);




/***/ }),

/***/ "./node_modules/neo.mjs/src/toolbar/Base.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/toolbar/Base.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _component_Label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");






/**
 * @class Neo.toolbar.Base
 * @extends Neo.container.Base
 */
class Toolbar extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * Valid values for dock
     * @member {String[]} dockPositions=['top','right','bottom','left', null]
     * @static
     */
    static dockPositions = ['top', 'right', 'bottom', 'left', null]

    static config = {
        /**
         * @member {String} className='Neo.toolbar.Base'
         * @protected
         */
        className: 'Neo.toolbar.Base',
        /**
         * @member {String} ntype='toolbar'
         * @protected
         */
        ntype: 'toolbar',
        /**
         * @member {String[]} baseCls=['neo-toolbar']
         */
        baseCls: ['neo-toolbar'],
        /**
         * @member {String|null} dock_=null
         */
        dock_: null,
        /**
         * @member {Object} itemDefaults={ntype:'button'}
         */
        itemDefaults: {
            ntype: 'button'
        },
        /**
         * @member {Object} layout={ntype:'flexbox',align:'center',direction: 'row', pack:'start'}
         */
        layout: {
            ntype    : 'flexbox',
            align    : 'center',
            direction: 'row',
            pack     : 'start'
        },
        /**
         * @member {Boolean} sortable_=false
         */
        sortable_: false,
        /**
         * @member {Neo.draggable.toolbar.SortZone|null} sortZone=null
         */
        sortZone: null,
        /**
         * @member {Object} sortZoneConfig=null
         */
        sortZoneConfig: null
    }

    /**
     * Triggered after the appName config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetAppName(value, oldValue) {
        super.afterSetAppName(value, oldValue);

        if (this.sortZone) {
            this.sortZone.appName = value
        }
    }

    /**
     * Triggered after the dock config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetDock(value, oldValue) {
        if (!value && !oldValue) {
            return
        }

        let me            = this,
            {cls}         = me,
            dockPositions = me.getStaticConfig('dockPositions'),
            layoutConfig  = me.getLayoutConfig();

        dockPositions.forEach(key => {
            key !== null && _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].toggle(cls, 'neo-dock-' + key, key === value)
        });

        if (!me.layout) {
            layoutConfig.ntype = 'flexbox';
            me.set({cls, layout: layoutConfig})
        } else {
            me.layout.set(layoutConfig);
            me.cls = cls;
        }
    }

    /**
     * Triggered after the sortable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetSortable(value, oldValue) {
        let me = this;

        if (value && !me.sortZone) {
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_neo_mjs_src_draggable_DragZone_mjs"), __webpack_require__.e("vendors-node_modules_neo_mjs_src_draggable_toolbar_SortZone_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! ../draggable/toolbar/SortZone.mjs */ "./node_modules/neo.mjs/src/draggable/toolbar/SortZone.mjs")).then(module => {
                me.sortZone = Neo.create({
                    module             : module.default,
                    appName            : me.appName,
                    boundaryContainerId: me.id,
                    owner              : me,
                    windowId           : me.windowId,
                    ...me.sortZoneConfig
                })
            })
        }
    }

    /**
     * Triggered after the windowId config got changed
     * @param {Number|null} value
     * @param {Number|null} oldValue
     * @protected
     */
    afterSetWindowId(value, oldValue) {
        super.afterSetWindowId(value, oldValue);

        if (this.sortZone) {
            this.sortZone.windowId = value
        }
    }

    /**
     * Checks if the new dock position matches a value of the static dockPositions config
     * @param {String} value
     * @param {String} oldValue
     * @returns {String} value
     * @protected
     */
    beforeSetDock(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'dock', 'dockPositions')
    }

    /**
     *
     */
    createItems() {
        let items = this._items;

        if (Array.isArray(items)) {
            this._items = items.map(item => this.replaceSpacer(item))
        }

        return super.createItems()
    }

    /**
     * Creates a layout config depending on this.dock
     * @returns {Object} layoutConfig
     */
    getLayoutConfig() {
        let me = this,
            layoutConfig;

        if (me.dock) {
            switch(me.dock) {
                case 'bottom':
                case 'top':
                    layoutConfig = {
                        align    : 'center',
                        direction: 'row',
                        pack     : 'start'
                    };
                    break
                case 'left':
                    layoutConfig = {
                        align    : 'center',
                        direction: 'column-reverse',
                        pack     : 'start'
                    };
                    break
                case 'right':
                    layoutConfig = {
                        align    : 'center',
                        direction: 'column',
                        pack     : 'start'
                    };
                    break
            }
        }

        return layoutConfig || me.layout
    }

    /**
     * Inserts an item or array of items at a specific index
     * @param {Number} index
     * @param {Array|Object} item
     * @param {Boolean} [silent=false]
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    insert(index, item, silent=false) {
        if (Array.isArray(item)) {
            item = item.map(item => this.replaceSpacer(item))
        } else {
            item = this.replaceSpacer(item)
        }

        return super.insert(index, item, silent)
    }

    /**
     * @param {Array|Object|String} item
     * @returns {Array|Object}
     */
    replaceSpacer(item) {
        return item === '->' ? {module: _component_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], flex: 1} : item
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Toolbar));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsY0FBYztBQUM3QixlQUFlLFNBQVM7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVEsMkRBQVMsV0FBVztBQUM1RDtBQUNBOztBQUVBLGlFQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL2FwcHMvbXlhcHAvYXBwLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vYXBwcy9teWFwcC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9hcHBzL215YXBwL3ZpZXcvV2ViR2xDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0NhbnZhcy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90b29sYmFyL0Jhc2UubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vdmlldy9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmV4cG9ydCBjb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdhcHBzL215YXBwLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdNeUFwcCdcbn0pXG4iLCJpbXBvcnQgTGFiZWwgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9MYWJlbC5tanMnO1xuaW1wb3J0IFRvb2xiYXIgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90b29sYmFyL0Jhc2UubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgV2ViR2xDb21wb25lbnQgZnJvbSAnLi9XZWJHbENvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBNeUFwcC52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J015QXBwLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTXlBcHAudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTondmJveCcsYWxpZ246J3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLml0ZW1zID0gW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBpdGVtcyA6IFtXZWJHbENvbXBvbmVudF0sXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2ZpdCd9LFxuICAgICAgICAgICAgdmRvbSAgOiB7dGFnOiAnZDNmYy1ncm91cCcsICdhdXRvLXJlc2l6ZSc6IHRydWUsIGNuOiBbXX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlOiBUb29sYmFyLFxuICAgICAgICAgICAgZmxleCAgOiAnbm9uZScsXG4gICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogbWUub25TdG9wQW5pbWF0aW9uQnV0dG9uQ2xpY2suYmluZChtZSksXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1N0b3AgQW5pbWF0aW9uJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IG1lLm9uU3RvcE1haW5CdXR0b25DbGljay5iaW5kKG1lKSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJy4yZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnU3RvcCBNYWluJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgOiBtZS5jaGFuZ2VJdGVtQW1vdW50LmJpbmQobWUsIDEwMDAwKSxcbiAgICAgICAgICAgICAgICBwcmVzc2VkICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDoge21hcmdpbkxlZnQ6ICcyZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgIDogYCR7KDEwMDAwKS50b0xvY2FsZVN0cmluZygpfSBpdGVtc2AsXG4gICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXA6ICdpdGVtQW1vdW50JyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgIDogMTAwMDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyICAgIDogbWUuY2hhbmdlSXRlbUFtb3VudC5iaW5kKG1lLCAxMDAwMDApLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgOiB7bWFyZ2luTGVmdDogJy4yZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgIDogYCR7KDEwMDAwMCkudG9Mb2NhbGVTdHJpbmcoKX0gaXRlbXNgLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUdyb3VwOiAnaXRlbUFtb3VudCcsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICA6IDEwMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgOiBtZS5jaGFuZ2VJdGVtQW1vdW50LmJpbmQobWUsIDEwMDAwMDApLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgOiB7bWFyZ2luTGVmdDogJy4yZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgIDogYCR7KDEwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCl9IGl0ZW1zYCxcbiAgICAgICAgICAgICAgICB0b2dnbGVHcm91cDogJ2l0ZW1BbW91bnQnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgOiAxMDAwMDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBMYWJlbCxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICd0aW1lLWxhYmVsJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5MZWZ0OiAnMmVtJ30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiBgVGltZTogJHttZS5nZXRUaW1lKCl9YFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24oe3JlZmVyZW5jZTogJ3RpbWUtbGFiZWwnfSkudGV4dCA9IGBUaW1lOiAke3RoaXMuZ2V0VGltZSgpfWBcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY291bnRcbiAgICAgKi9cbiAgICBjaGFuZ2VJdGVtQW1vdW50KGNvdW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTXlBcHAuY2FudmFzLkhlbHBlci5jaGFuZ2VJdGVtc0Ftb3VudChjb3VudCk7XG5cbiAgICAgICAgbWUuaXRlbXNbMV0uaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnRvZ2dsZUdyb3VwID09PSAnaXRlbUFtb3VudCcpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnByZXNzZWQgPSBpdGVtLnZhbHVlID09PSBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKE5lby5jb25maWcubG9jYWxlLCB7XG4gICAgICAgICAgICBob3VyICA6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgc2Vjb25kOiAnMi1kaWdpdCdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3RvcEFuaW1hdGlvbkJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IGVuYWJsZUFuaW1hdGlvbiA9IHRydWUsXG4gICAgICAgICAgICBidXR0b25UZXh0O1xuXG4gICAgICAgIGlmIChkYXRhLmNvbXBvbmVudC50ZXh0ID09PSAnU3RvcCBBbmltYXRpb24nKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ICAgICAgPSAnU3RhcnQgQW5pbWF0aW9uJztcbiAgICAgICAgICAgIGVuYWJsZUFuaW1hdGlvbiA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1N0b3AgQW5pbWF0aW9uJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQudGV4dCA9IGJ1dHRvblRleHQ7XG5cbiAgICAgICAgTXlBcHAuY2FudmFzLkhlbHBlci5lbmFibGVBbmltYXRpb24oZW5hYmxlQW5pbWF0aW9uKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TdG9wTWFpbkJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgTmVvLk1haW4uYWxlcnQoW1xuICAgICAgICAgICAgJ1RoaXMgYWxlcnQgcGF1c2VzIHRoZSBKUyBtYWluIHRocmVhZC5cXG5cXG4nLFxuICAgICAgICAgICAgJ05vdGljZSB0aGF0IHRoZSB0aW1lIGluc2lkZSB0aGUgYm90dG9tIHRvb2xiYXIgaGFzIHN0b3BwZWQgdXBkYXRpbmcuXFxuXFxuJyxcbiAgICAgICAgICAgICdDbG9zaW5nIHRoaXMgYWxlcnQgd2lsbCByZXN1bWUgdGhlIG1haW4gdGhyZWFkLidcbiAgICAgICAgXS5qb2luKCcnKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKE1haW5Db250YWluZXIpO1xuIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0NhbnZhcy5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBNeUFwcC52aWV3LldlYkdsQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkNhbnZhc1xuICovXG5jbGFzcyBXZWJHbENvbXBvbmVudCBleHRlbmRzIENhbnZhcyB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdNeUFwcC52aWV3LldlYkdsQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdNeUFwcC52aWV3LldlYkdsQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7dGFnOiAnZDNmYy1jYW52YXMnLCBjbjogW1xuICAgICAgICAgICAge3RhZzogJ2NhbnZhcyd9XG4gICAgICAgIF19XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldElkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnZkb20uY25bMF0uaWQgPSBgJHt2YWx1ZX1fX2NhbnZhc2A7XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRJZCh2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBvZmZzY3JlZW5SZWdpc3RlcmVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0T2Zmc2NyZWVuUmVnaXN0ZXJlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKFxuICAgICAgICAgICAgICAgIHttZWFzdXJlOiBtZS5vbk1lYXN1cmUsIHNjb3BlOiBtZX0gLy8gY3VzdG9tIGQzZmMgZG9tIGV2ZW50XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgICAgIC8vIFdlIG5lZWQgYSBzaG9ydCBkZWxheSB0byBlbnN1cmUgb3VyIGFwcCBiYXNlZCByZW1vdGUgbWV0aG9kcyBnb3QgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgLy8gaW5zaWRlIHRoZSBkaXN0IGVudnNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJlbW90ZSBtZXRob2QgYWNjZXNzIHRvIHRoZSBjYW52YXMgd29ya2VyXG4gICAgICAgICAgICAgICAgTXlBcHAuY2FudmFzLkhlbHBlci5yZW5kZXJTZXJpZXModGhpcy5nZXRDYW52YXNJZCgpKTtcblxuICAgICAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe2lkOiBtZS5pZH0pLnRoZW4ocmVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVNpemUocmVjdC5oZWlnaHQsIHJlY3Qud2lkdGgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCA1MClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHdoZW4gdXNpbmcgd3JhcHBlcnMgKGUuZy4gRDMpXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDYW52YXNJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25NZWFzdXJlKGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBkYXRhLnBhdGhbMF07XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZShub2RlLmNsaWVudEhlaWdodCwgbm9kZS5jbGllbnRXaWR0aClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAgICovXG4gICAgdXBkYXRlU2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIE15QXBwLmNhbnZhcy5IZWxwZXIudXBkYXRlU2l6ZSh7IGhlaWdodCwgd2lkdGggfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFdlYkdsQ29tcG9uZW50KTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb21wb25lbnQuQ2FudmFzXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5DYW52YXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuQ2FudmFzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NhbnZhcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjYW52YXMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2Zmc2NyZWVuPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNjcmVlbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ubHkgYXBwbGljYWJsZSBpZiBvZmZzY3JlZW4gPT09IHRydWUuXG4gICAgICAgICAqIHRydWUgb25jZSB0aGUgb3duZXJzaGlwIG9mIHRoZSBjYW52YXMgbm9kZSBnb3QgdHJhbnNmZXJyZWQgdG8gd29ya2VyLkNhbnZhcy5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2Zmc2NyZWVuUmVnaXN0ZXJlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNjcmVlblJlZ2lzdGVyZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e3RhZzogJ2NhbnZhcyd9XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge3RhZzogJ2NhbnZhcyd9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICAgID0gbWUuZ2V0Q2FudmFzSWQoKSxcbiAgICAgICAgICAgIHdvcmtlciA9IE5lby5jdXJyZW50V29ya2VyO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiBtZS5vZmZzY3JlZW4pIHtcbiAgICAgICAgICAgIHdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdnZXRPZmZzY3JlZW5DYW52YXMnLFxuICAgICAgICAgICAgICAgIG5vZGVJZDogaWRcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgd29ya2VyLnByb21pc2VNZXNzYWdlKCdjYW52YXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlZ2lzdGVyQ2FudmFzJyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZSAgOiBkYXRhLm9mZnNjcmVlbixcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBpZFxuICAgICAgICAgICAgICAgIH0sIFtkYXRhLm9mZnNjcmVlbl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5vZmZzY3JlZW5SZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2Qgd2hlbiB1c2luZyB3cmFwcGVycyAoZS5nLiBEMylcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldENhbnZhc0lkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENhbnZhcyk7XG5cbmV4cG9ydCB7Q2FudmFzIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEJ1dHRvbiAgICBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IExhYmVsICAgICBmcm9tICcuLi9jb21wb25lbnQvTGFiZWwubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udG9vbGJhci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgVG9vbGJhciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgLyoqXG4gICAgICogVmFsaWQgdmFsdWVzIGZvciBkb2NrXG4gICAgICogQG1lbWJlciB7U3RyaW5nW119IGRvY2tQb3NpdGlvbnM9Wyd0b3AnLCdyaWdodCcsJ2JvdHRvbScsJ2xlZnQnLCBudWxsXVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgZG9ja1Bvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0JywgbnVsbF1cblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRvb2xiYXIuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRvb2xiYXIuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0b29sYmFyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGJhc2VDbHM9WyduZW8tdG9vbGJhciddXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlQ2xzOiBbJ25lby10b29sYmFyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZG9ja189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZG9ja186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0cz17bnR5cGU6J2J1dHRvbid9XG4gICAgICAgICAqL1xuICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOidmbGV4Ym94JyxhbGlnbjonY2VudGVyJyxkaXJlY3Rpb246ICdyb3cnLCBwYWNrOidzdGFydCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgIG50eXBlICAgIDogJ2ZsZXhib3gnLFxuICAgICAgICAgICAgYWxpZ24gICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNvcnRhYmxlXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc29ydGFibGVfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kcmFnZ2FibGUudG9vbGJhci5Tb3J0Wm9uZXxudWxsfSBzb3J0Wm9uZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Wm9uZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc29ydFpvbmVDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc29ydFpvbmVDb25maWc6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGFwcE5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEFwcE5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0QXBwTmFtZSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICh0aGlzLnNvcnRab25lKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRab25lLmFwcE5hbWUgPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkb2NrIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERvY2sodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgIW9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHtjbHN9ICAgICAgICAgPSBtZSxcbiAgICAgICAgICAgIGRvY2tQb3NpdGlvbnMgPSBtZS5nZXRTdGF0aWNDb25maWcoJ2RvY2tQb3NpdGlvbnMnKSxcbiAgICAgICAgICAgIGxheW91dENvbmZpZyAgPSBtZS5nZXRMYXlvdXRDb25maWcoKTtcblxuICAgICAgICBkb2NrUG9zaXRpb25zLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGtleSAhPT0gbnVsbCAmJiBOZW9BcnJheS50b2dnbGUoY2xzLCAnbmVvLWRvY2stJyArIGtleSwga2V5ID09PSB2YWx1ZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFtZS5sYXlvdXQpIHtcbiAgICAgICAgICAgIGxheW91dENvbmZpZy5udHlwZSA9ICdmbGV4Ym94JztcbiAgICAgICAgICAgIG1lLnNldCh7Y2xzLCBsYXlvdXQ6IGxheW91dENvbmZpZ30pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5sYXlvdXQuc2V0KGxheW91dENvbmZpZyk7XG4gICAgICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNvcnRhYmxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U29ydGFibGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICFtZS5zb3J0Wm9uZSkge1xuICAgICAgICAgICAgaW1wb3J0KCcuLi9kcmFnZ2FibGUvdG9vbGJhci9Tb3J0Wm9uZS5tanMnKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuc29ydFpvbmUgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgICAgIDogbW9kdWxlLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgICAgICAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kYXJ5Q29udGFpbmVySWQ6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBvd25lciAgICAgICAgICAgICAgOiBtZSxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93SWQgICAgICAgICAgIDogbWUud2luZG93SWQsXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLnNvcnRab25lQ29uZmlnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdpbmRvd0lkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXaW5kb3dJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRXaW5kb3dJZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICh0aGlzLnNvcnRab25lKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRab25lLndpbmRvd0lkID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IGRvY2sgcG9zaXRpb24gbWF0Y2hlcyBhIHZhbHVlIG9mIHRoZSBzdGF0aWMgZG9ja1Bvc2l0aW9ucyBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREb2NrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZG9jaycsICdkb2NrUG9zaXRpb25zJylcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLl9pdGVtcztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMubWFwKGl0ZW0gPT4gdGhpcy5yZXBsYWNlU3BhY2VyKGl0ZW0pKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUl0ZW1zKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbGF5b3V0IGNvbmZpZyBkZXBlbmRpbmcgb24gdGhpcy5kb2NrXG4gICAgICogQHJldHVybnMge09iamVjdH0gbGF5b3V0Q29uZmlnXG4gICAgICovXG4gICAgZ2V0TGF5b3V0Q29uZmlnKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbGF5b3V0Q29uZmlnO1xuXG4gICAgICAgIGlmIChtZS5kb2NrKSB7XG4gICAgICAgICAgICBzd2l0Y2gobWUuZG9jaykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhY2sgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYXlvdXRDb25maWcgfHwgbWUubGF5b3V0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGF0IGEgc3BlY2lmaWMgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGluc2VydChpbmRleCwgaXRlbSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICBpdGVtID0gaXRlbS5tYXAoaXRlbSA9PiB0aGlzLnJlcGxhY2VTcGFjZXIoaXRlbSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtID0gdGhpcy5yZXBsYWNlU3BhY2VyKGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuaW5zZXJ0KGluZGV4LCBpdGVtLCBzaWxlbnQpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8U3RyaW5nfSBpdGVtXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH1cbiAgICAgKi9cbiAgICByZXBsYWNlU3BhY2VyKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09ICctPicgPyB7bW9kdWxlOiBDb21wb25lbnQsIGZsZXg6IDF9IDogaXRlbVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoVG9vbGJhcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=