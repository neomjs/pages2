"use strict";
(self["webpackChunkmainapp"] = self["webpackChunkmainapp"] || []).push([["apps_mainapp_app_mjs"],{

/***/ "./apps/mainapp/app.mjs":
/*!******************************!*\
  !*** ./apps/mainapp/app.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/mainapp/view/MainContainer.mjs");


const onStart = () => Neo.app({
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'MainApp'
});

/***/ }),

/***/ "./apps/mainapp/view/MainContainer.mjs":
/*!*********************************************!*\
  !*** ./apps/mainapp/view/MainContainer.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Label_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./apps/mainapp/view/MainContainerController.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_toolbar_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/toolbar/Base.mjs */ "./node_modules/neo.mjs/src/toolbar/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");
/* harmony import */ var _WebGlComponent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WebGlComponent.mjs */ "./apps/mainapp/view/WebGlComponent.mjs");






/**
 * @class MainApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='MainApp.view.MainContainer'
         * @protected
         */
        className: 'MainApp.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         * @protected
         */
        autoMount: true,
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
        /**
         * @member {Object[]} items
         */
        items: [{
            ntype    : 'container',
            flex     : 1,
            items    : [{module: _WebGlComponent_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], reference: 'webgl-component'}],
            layout   : {ntype: 'fit'},
            reference: 'webgl-container',
            vdom     : {tag: 'd3fc-group', 'auto-resize': true, cn: []}
        }, {
            module: _node_modules_neo_mjs_src_toolbar_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            flex  : 'none',
            items : [{
                handler: 'onStopAnimationButtonClick',
                text   : 'Stop Animation'
            }, {
                handler: 'onStopMainButtonClick',
                style  : {marginLeft: '.2em'},
                text   : 'Stop Main'
            }, {
                handler    : 'changeItemAmount',
                pressed    : true,
                style      : {marginLeft: '2em'},
                text       : `${(10000).toLocaleString()} items`,
                toggleGroup: 'itemAmount',
                value      : 10000
            }, {
                handler    : 'changeItemAmount',
                style      : {marginLeft: '.2em'},
                text       : `${(100000).toLocaleString()} items`,
                toggleGroup: 'itemAmount',
                value      : 100000
            }, {
                handler    : 'changeItemAmount',
                style      : {marginLeft: '.2em'},
                text       : `${(1000000).toLocaleString()} items`,
                toggleGroup: 'itemAmount',
                value      : 1000000
            }, {
                module   : _node_modules_neo_mjs_src_component_Label_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                reference: 'time-label',
                style    : {marginLeft: '2em'}
            }, {
                handler: 'moveCanvas',
                style  : {marginLeft: 'auto'},
                text   : 'Move Canvas',
            }]
        }],
        /**
         * @member {Object} layout={ntype:'vbox',align:'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'}
    }}

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
                this.down({reference: 'time-label'}).text = `Time: ${this.getTime()}`;
            }, 1000);
        }
    }

    /**
     * @returns {String}
     */
    getTime() {
        return new Date().toLocaleString(Neo.config.locale, {
            hour  : '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./apps/mainapp/view/MainContainerController.mjs":
/*!*******************************************************!*\
  !*** ./apps/mainapp/view/MainContainerController.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class MainApp.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @member {String[]} connectedApps=[]
     */
    connectedApps = []

    static getConfig() {return {
        /*
         * @member {String} className='MainApp.view.MainContainerController'
         * @protected
         */
        className: 'MainApp.view.MainContainerController'
    }}

    /**
     * @param {Object} data
     */
    changeItemAmount(data) {
        let count = data.component.value;

        MainApp.canvas.Helper.changeItemsAmount(count);

        this.component.items[1].items.forEach(item => {
            if (item.toggleGroup === 'itemAmount') {
                item.pressed = item.value === count;
            }
        });
    }

    /**
     * @param {String} containerReference
     * @param {String} url
     * @param {String} windowName
     */
    createPopupWindow(containerReference, url, windowName) {
        let me = this;

        Neo.Main.getWindowData().then(winData => {
            me.component.getDomRect(me.getReference(containerReference).id).then(data => {
                let {height, left, top, width} = data;

                height -= 50; // popup header in Chrome
                left   += winData.screenLeft;
                top    += (winData.outerHeight - winData.innerHeight + winData.screenTop);

                Neo.Main.windowOpen({
                    url           : `../${url}/index.html`,
                    windowFeatures: `height=${height},left=${left},top=${top},width=${width}`,
                    windowName
                });
            });
        });
    }

    /**
     * @param {String} [appName]
     * @returns {Neo.component.Base}
     */
    getMainView(appName) {
        if (!appName || appName === 'MainApp') {
            return this.component;
        }

        return Neo.apps[appName].mainView;
    }

    /**
     * @param {Object} data
     */
    moveCanvas(data) {
        this.createPopupWindow('webgl-component', 'childapp', 'ChildApp');
    }

    /**
     * @param {Object} data
     * @param {String} data.appName
     */
    onAppConnect(data) {
        let me         = this,
            appName    = data.appName,
            canvasNode = me.getReference('webgl-component');

        console.log('onAppConnect', appName);

        switch(appName) {
            case 'ChildApp': {
                me.getReference('webgl-container').remove(canvasNode, false);

                _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(me.connectedApps, appName);

                Neo.apps[appName].on('render', () => {
                    setTimeout(() => {
                        me.getMainView(appName).add(canvasNode);
                    }, 100);
                });
                break;
            }
        }
    }

    /**
     * @param {Object} data
     * @param {String} data.appName
     */
    onAppDisconnect(data) {
        let me         = this,
            appName    = data.appName,
            canvasNode = me.getReference('webgl-component');

        console.log('onAppDisconnect', appName);

        switch(appName) {
            case 'ChildApp': {
                _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me.connectedApps, appName);

                me.getMainView(appName).remove(canvasNode, false);

                me.getReference('webgl-container').add(canvasNode);
                break;
            }

            case 'MainApp': {
                Neo.Main.windowClose({
                    appName,
                    names: me.connectedApps
                });
                break;
            }
        }

        Neo.apps[appName].destroy();
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.currentWorker.on({
            connect   : me.onAppConnect,
            disconnect: me.onAppDisconnect,
            scope     : me
        });
    }

    /**
     * @param {Object} data
     */
    onStopAnimationButtonClick(data) {
        let enableAnimation = true,
            buttonText;

        if (data.component.text === 'Stop Animation') {
            buttonText      = 'Start Animation';
            enableAnimation = false;
        } else {
            buttonText = 'Stop Animation';
        }

        data.component.text = buttonText;

        MainApp.canvas.Helper.enableAnimation(enableAnimation);
    }

    /**
     * @param {Object} data
     */
    onStopMainButtonClick(data) {
        Neo.Main.alert({
            appName: this.getReference('webgl-component').appName,
            message: [
                'This alert pauses the JS main thread.\n\n',
                'Notice that the time inside the bottom toolbar has stopped updating.\n\n',
                'Closing this alert will resume the main thread.'
            ].join('')
        });
    }
}

Neo.applyClassConfig(MainContainerController);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainerController);


/***/ }),

/***/ "./apps/mainapp/view/WebGlComponent.mjs":
/*!**********************************************!*\
  !*** ./apps/mainapp/view/WebGlComponent.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebGlComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Canvas_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Canvas.mjs */ "./node_modules/neo.mjs/src/component/Canvas.mjs");


/**
 * @class MainApp.view.WebGlComponent
 * @extends Neo.component.Canvas
 */
class WebGlComponent extends _node_modules_neo_mjs_src_component_Canvas_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='MainApp.view.WebGlComponent'
         * @protected
         */
        className: 'MainApp.view.WebGlComponent',
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'd3fc-canvas', cn: [
            {tag: 'canvas'}
        ]}
    }}

    /**
     * Triggered after the id config got changed
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetId(value, oldValue) {
        let me = this;

        me.vdom.cn[0].id = `${value}__canvas`;

        super.afterSetId(value, oldValue);
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
                MainApp.canvas.Helper.renderSeries(this.getCanvasId());

                Neo.main.DomAccess.getBoundingClientRect({appName: me.appName, id: me.id}).then(rect => {
                    me.updateSize(rect.height, rect.width);
                });
            }, 50);
        }
    }

    /**
     * Override this method when using wrappers (e.g. D3)
     * @returns {String}
     */
    getCanvasId() {
        return this.vdom.cn[0].id;
    }

    /**
     * @param {Object} data
     */
    onMeasure(data) {
        let node = data.path[0];
        this.updateSize(node.clientHeight, node.clientWidth);
    }

    /**
     * @param {Number} height
     * @param {Number} width
     */
    updateSize(height, width) {
        MainApp.canvas.Helper.updateSize({ height, width });
    }
}

Neo.applyClassConfig(WebGlComponent);




/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Canvas.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Canvas.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

        let me        = this,
            id        = me.getCanvasId(),
            offscreen = me.offscreen,
            worker    = Neo.currentWorker;

        if (value && offscreen) {
            worker.promiseMessage('main', {
                action : 'getOffscreenCanvas',
                appName: me.appName,
                nodeId : id
            }).then(data => {
                worker.promiseMessage('canvas', {
                    action: 'registerCanvas',
                    node  : data.offscreen,
                    nodeId: id
                }, [data.offscreen]).then(() => {
                    me.offscreenRegistered = true;
                });
            });
        } else if (offscreen) {
            me.offscreenRegistered = false;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL21haW5hcHAvLi9hcHBzL21haW5hcHAvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9tYWluYXBwLy4vYXBwcy9tYWluYXBwL3ZpZXcvTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovL21haW5hcHAvLi9hcHBzL21haW5hcHAvdmlldy9XZWJHbENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vbWFpbmFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQ2FudmFzLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5leHBvcnQgY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnTWFpbkFwcCdcbn0pOyIsImltcG9ydCBMYWJlbCAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0xhYmVsLm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFRvb2xiYXIgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90b29sYmFyL0Jhc2UubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgV2ViR2xDb21wb25lbnQgICAgICAgICAgZnJvbSAnLi9XZWJHbENvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBNYWluQXBwLnZpZXcuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdNYWluQXBwLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTWFpbkFwcC52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgaXRlbXMgICAgOiBbe21vZHVsZTogV2ViR2xDb21wb25lbnQsIHJlZmVyZW5jZTogJ3dlYmdsLWNvbXBvbmVudCd9XSxcbiAgICAgICAgICAgIGxheW91dCAgIDoge250eXBlOiAnZml0J30sXG4gICAgICAgICAgICByZWZlcmVuY2U6ICd3ZWJnbC1jb250YWluZXInLFxuICAgICAgICAgICAgdmRvbSAgICAgOiB7dGFnOiAnZDNmYy1ncm91cCcsICdhdXRvLXJlc2l6ZSc6IHRydWUsIGNuOiBbXX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlOiBUb29sYmFyLFxuICAgICAgICAgICAgZmxleCAgOiAnbm9uZScsXG4gICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU3RvcEFuaW1hdGlvbkJ1dHRvbkNsaWNrJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnU3RvcCBBbmltYXRpb24nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ29uU3RvcE1haW5CdXR0b25DbGljaycsXG4gICAgICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpbkxlZnQ6ICcuMmVtJ30sXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1N0b3AgTWFpbidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyICAgIDogJ2NoYW5nZUl0ZW1BbW91bnQnLFxuICAgICAgICAgICAgICAgIHByZXNzZWQgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgOiB7bWFyZ2luTGVmdDogJzJlbSd9LFxuICAgICAgICAgICAgICAgIHRleHQgICAgICAgOiBgJHsoMTAwMDApLnRvTG9jYWxlU3RyaW5nKCl9IGl0ZW1zYCxcbiAgICAgICAgICAgICAgICB0b2dnbGVHcm91cDogJ2l0ZW1BbW91bnQnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgOiAxMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgOiAnY2hhbmdlSXRlbUFtb3VudCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICA6IHttYXJnaW5MZWZ0OiAnLjJlbSd9LFxuICAgICAgICAgICAgICAgIHRleHQgICAgICAgOiBgJHsoMTAwMDAwKS50b0xvY2FsZVN0cmluZygpfSBpdGVtc2AsXG4gICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXA6ICdpdGVtQW1vdW50JyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgIDogMTAwMDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciAgICA6ICdjaGFuZ2VJdGVtQW1vdW50JyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDoge21hcmdpbkxlZnQ6ICcuMmVtJ30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICA6IGAkeygxMDAwMDAwKS50b0xvY2FsZVN0cmluZygpfSBpdGVtc2AsXG4gICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXA6ICdpdGVtQW1vdW50JyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgIDogMTAwMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogTGFiZWwsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAndGltZS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luTGVmdDogJzJlbSd9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogJ21vdmVDYW52YXMnLFxuICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5MZWZ0OiAnYXV0byd9LFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdNb3ZlIENhbnZhcycsXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTondmJveCcsYWxpZ246J3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb3duKHtyZWZlcmVuY2U6ICd0aW1lLWxhYmVsJ30pLnRleHQgPSBgVGltZTogJHt0aGlzLmdldFRpbWUoKX1gO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKE5lby5jb25maWcubG9jYWxlLCB7XG4gICAgICAgICAgICBob3VyICA6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgc2Vjb25kOiAnMi1kaWdpdCdcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTWFpbkFwcC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjb25uZWN0ZWRBcHBzPVtdXG4gICAgICovXG4gICAgY29ubmVjdGVkQXBwcyA9IFtdXG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdNYWluQXBwLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ01haW5BcHAudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjaGFuZ2VJdGVtQW1vdW50KGRhdGEpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gZGF0YS5jb21wb25lbnQudmFsdWU7XG5cbiAgICAgICAgTWFpbkFwcC5jYW52YXMuSGVscGVyLmNoYW5nZUl0ZW1zQW1vdW50KGNvdW50KTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudC5pdGVtc1sxXS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0udG9nZ2xlR3JvdXAgPT09ICdpdGVtQW1vdW50Jykge1xuICAgICAgICAgICAgICAgIGl0ZW0ucHJlc3NlZCA9IGl0ZW0udmFsdWUgPT09IGNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29udGFpbmVyUmVmZXJlbmNlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB3aW5kb3dOYW1lXG4gICAgICovXG4gICAgY3JlYXRlUG9wdXBXaW5kb3coY29udGFpbmVyUmVmZXJlbmNlLCB1cmwsIHdpbmRvd05hbWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uTWFpbi5nZXRXaW5kb3dEYXRhKCkudGhlbih3aW5EYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmNvbXBvbmVudC5nZXREb21SZWN0KG1lLmdldFJlZmVyZW5jZShjb250YWluZXJSZWZlcmVuY2UpLmlkKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7aGVpZ2h0LCBsZWZ0LCB0b3AsIHdpZHRofSA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gNTA7IC8vIHBvcHVwIGhlYWRlciBpbiBDaHJvbWVcbiAgICAgICAgICAgICAgICBsZWZ0ICAgKz0gd2luRGF0YS5zY3JlZW5MZWZ0O1xuICAgICAgICAgICAgICAgIHRvcCAgICArPSAod2luRGF0YS5vdXRlckhlaWdodCAtIHdpbkRhdGEuaW5uZXJIZWlnaHQgKyB3aW5EYXRhLnNjcmVlblRvcCk7XG5cbiAgICAgICAgICAgICAgICBOZW8uTWFpbi53aW5kb3dPcGVuKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsICAgICAgICAgICA6IGAuLi8ke3VybH0vaW5kZXguaHRtbGAsXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd0ZlYXR1cmVzOiBgaGVpZ2h0PSR7aGVpZ2h0fSxsZWZ0PSR7bGVmdH0sdG9wPSR7dG9wfSx3aWR0aD0ke3dpZHRofWAsXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd05hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2FwcE5hbWVdXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZX1cbiAgICAgKi9cbiAgICBnZXRNYWluVmlldyhhcHBOYW1lKSB7XG4gICAgICAgIGlmICghYXBwTmFtZSB8fCBhcHBOYW1lID09PSAnTWFpbkFwcCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZW8uYXBwc1thcHBOYW1lXS5tYWluVmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG1vdmVDYW52YXMoZGF0YSkge1xuICAgICAgICB0aGlzLmNyZWF0ZVBvcHVwV2luZG93KCd3ZWJnbC1jb21wb25lbnQnLCAnY2hpbGRhcHAnLCAnQ2hpbGRBcHAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmFwcE5hbWVcbiAgICAgKi9cbiAgICBvbkFwcENvbm5lY3QoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcHBOYW1lICAgID0gZGF0YS5hcHBOYW1lLFxuICAgICAgICAgICAgY2FudmFzTm9kZSA9IG1lLmdldFJlZmVyZW5jZSgnd2ViZ2wtY29tcG9uZW50Jyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ29uQXBwQ29ubmVjdCcsIGFwcE5hbWUpO1xuXG4gICAgICAgIHN3aXRjaChhcHBOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdDaGlsZEFwcCc6IHtcbiAgICAgICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3dlYmdsLWNvbnRhaW5lcicpLnJlbW92ZShjYW52YXNOb2RlLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQobWUuY29ubmVjdGVkQXBwcywgYXBwTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBOZW8uYXBwc1thcHBOYW1lXS5vbigncmVuZGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmdldE1haW5WaWV3KGFwcE5hbWUpLmFkZChjYW52YXNOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuYXBwTmFtZVxuICAgICAqL1xuICAgIG9uQXBwRGlzY29ubmVjdChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFwcE5hbWUgICAgPSBkYXRhLmFwcE5hbWUsXG4gICAgICAgICAgICBjYW52YXNOb2RlID0gbWUuZ2V0UmVmZXJlbmNlKCd3ZWJnbC1jb21wb25lbnQnKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnb25BcHBEaXNjb25uZWN0JywgYXBwTmFtZSk7XG5cbiAgICAgICAgc3dpdGNoKGFwcE5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0NoaWxkQXBwJzoge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShtZS5jb25uZWN0ZWRBcHBzLCBhcHBOYW1lKTtcblxuICAgICAgICAgICAgICAgIG1lLmdldE1haW5WaWV3KGFwcE5hbWUpLnJlbW92ZShjYW52YXNOb2RlLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3dlYmdsLWNvbnRhaW5lcicpLmFkZChjYW52YXNOb2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnTWFpbkFwcCc6IHtcbiAgICAgICAgICAgICAgICBOZW8uTWFpbi53aW5kb3dDbG9zZSh7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzOiBtZS5jb25uZWN0ZWRBcHBzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBOZW8uYXBwc1thcHBOYW1lXS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5vbih7XG4gICAgICAgICAgICBjb25uZWN0ICAgOiBtZS5vbkFwcENvbm5lY3QsXG4gICAgICAgICAgICBkaXNjb25uZWN0OiBtZS5vbkFwcERpc2Nvbm5lY3QsXG4gICAgICAgICAgICBzY29wZSAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3RvcEFuaW1hdGlvbkJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IGVuYWJsZUFuaW1hdGlvbiA9IHRydWUsXG4gICAgICAgICAgICBidXR0b25UZXh0O1xuXG4gICAgICAgIGlmIChkYXRhLmNvbXBvbmVudC50ZXh0ID09PSAnU3RvcCBBbmltYXRpb24nKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ICAgICAgPSAnU3RhcnQgQW5pbWF0aW9uJztcbiAgICAgICAgICAgIGVuYWJsZUFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdTdG9wIEFuaW1hdGlvbic7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmNvbXBvbmVudC50ZXh0ID0gYnV0dG9uVGV4dDtcblxuICAgICAgICBNYWluQXBwLmNhbnZhcy5IZWxwZXIuZW5hYmxlQW5pbWF0aW9uKGVuYWJsZUFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN0b3BNYWluQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBOZW8uTWFpbi5hbGVydCh7XG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmdldFJlZmVyZW5jZSgnd2ViZ2wtY29tcG9uZW50JykuYXBwTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFtcbiAgICAgICAgICAgICAgICAnVGhpcyBhbGVydCBwYXVzZXMgdGhlIEpTIG1haW4gdGhyZWFkLlxcblxcbicsXG4gICAgICAgICAgICAgICAgJ05vdGljZSB0aGF0IHRoZSB0aW1lIGluc2lkZSB0aGUgYm90dG9tIHRvb2xiYXIgaGFzIHN0b3BwZWQgdXBkYXRpbmcuXFxuXFxuJyxcbiAgICAgICAgICAgICAgICAnQ2xvc2luZyB0aGlzIGFsZXJ0IHdpbGwgcmVzdW1lIHRoZSBtYWluIHRocmVhZC4nXG4gICAgICAgICAgICBdLmpvaW4oJycpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyQ29udHJvbGxlcjtcbiIsImltcG9ydCBDYW52YXMgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9DYW52YXMubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTWFpbkFwcC52aWV3LldlYkdsQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkNhbnZhc1xuICovXG5jbGFzcyBXZWJHbENvbXBvbmVudCBleHRlbmRzIENhbnZhcyB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J01haW5BcHAudmlldy5XZWJHbENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTWFpbkFwcC52aWV3LldlYkdsQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7dGFnOiAnZDNmYy1jYW52YXMnLCBjbjogW1xuICAgICAgICAgICAge3RhZzogJ2NhbnZhcyd9XG4gICAgICAgIF19XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS52ZG9tLmNuWzBdLmlkID0gYCR7dmFsdWV9X19jYW52YXNgO1xuXG4gICAgICAgIHN1cGVyLmFmdGVyU2V0SWQodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG9mZnNjcmVlblJlZ2lzdGVyZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRPZmZzY3JlZW5SZWdpc3RlcmVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICAgICAge21lYXN1cmU6IG1lLm9uTWVhc3VyZSwgc2NvcGU6IG1lfSAvLyBjdXN0b20gZDNmYyBkb20gZXZlbnRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcblxuICAgICAgICAgICAgLy8gV2UgbmVlZCBhIHNob3J0IGRlbGF5IHRvIGVuc3VyZSBvdXIgYXBwIGJhc2VkIHJlbW90ZSBtZXRob2RzIGdvdCByZWdpc3RlcmVkXG4gICAgICAgICAgICAvLyBpbnNpZGUgdGhlIGRpc3QgZW52c1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3RlIG1ldGhvZCBhY2Nlc3MgdG8gdGhlIGNhbnZhcyB3b3JrZXJcbiAgICAgICAgICAgICAgICBNYWluQXBwLmNhbnZhcy5IZWxwZXIucmVuZGVyU2VyaWVzKHRoaXMuZ2V0Q2FudmFzSWQoKSk7XG5cbiAgICAgICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHthcHBOYW1lOiBtZS5hcHBOYW1lLCBpZDogbWUuaWR9KS50aGVuKHJlY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS51cGRhdGVTaXplKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHdoZW4gdXNpbmcgd3JhcHBlcnMgKGUuZy4gRDMpXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDYW52YXNJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTWVhc3VyZShkYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gZGF0YS5wYXRoWzBdO1xuICAgICAgICB0aGlzLnVwZGF0ZVNpemUobm9kZS5jbGllbnRIZWlnaHQsIG5vZGUuY2xpZW50V2lkdGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gd2lkdGhcbiAgICAgKi9cbiAgICB1cGRhdGVTaXplKGhlaWdodCwgd2lkdGgpIHtcbiAgICAgICAgTWFpbkFwcC5jYW52YXMuSGVscGVyLnVwZGF0ZVNpemUoeyBoZWlnaHQsIHdpZHRoIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoV2ViR2xDb21wb25lbnQpO1xuXG5leHBvcnQge1dlYkdsQ29tcG9uZW50IGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5DYW52YXNcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29tcG9uZW50LkNhbnZhcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5DYW52YXMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2FudmFzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NhbnZhcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvZmZzY3JlZW49dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2NyZWVuOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBhcHBsaWNhYmxlIGlmIG9mZnNjcmVlbiA9PT0gdHJ1ZS5cbiAgICAgICAgICogdHJ1ZSBvbmNlIHRoZSBvd25lcnNoaXAgb2YgdGhlIGNhbnZhcyBub2RlIGdvdCB0cmFuc2ZlcnJlZCB0byB3b3JrZXIuQ2FudmFzLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvZmZzY3JlZW5SZWdpc3RlcmVkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2NyZWVuUmVnaXN0ZXJlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17dGFnOiAnY2FudmFzJ31cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7dGFnOiAnY2FudmFzJ31cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgICAgICAgPSBtZS5nZXRDYW52YXNJZCgpLFxuICAgICAgICAgICAgb2Zmc2NyZWVuID0gbWUub2Zmc2NyZWVuLFxuICAgICAgICAgICAgd29ya2VyICAgID0gTmVvLmN1cnJlbnRXb3JrZXI7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIG9mZnNjcmVlbikge1xuICAgICAgICAgICAgd29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICdnZXRPZmZzY3JlZW5DYW52YXMnLFxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgbm9kZUlkIDogaWRcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgd29ya2VyLnByb21pc2VNZXNzYWdlKCdjYW52YXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlZ2lzdGVyQ2FudmFzJyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZSAgOiBkYXRhLm9mZnNjcmVlbixcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBpZFxuICAgICAgICAgICAgICAgIH0sIFtkYXRhLm9mZnNjcmVlbl0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5vZmZzY3JlZW5SZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG9mZnNjcmVlbikge1xuICAgICAgICAgICAgbWUub2Zmc2NyZWVuUmVnaXN0ZXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2Qgd2hlbiB1c2luZyB3cmFwcGVycyAoZS5nLiBEMylcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldENhbnZhc0lkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENhbnZhcyk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==