"use strict";
(self["webpackChunkneo_offscreen_canvas_demo"] = self["webpackChunkneo_offscreen_canvas_demo"] || []).push([["apps_myapp_app_mjs"],{

/***/ "./apps/myapp/app.mjs":
/*!****************************!*\
  !*** ./apps/myapp/app.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/myapp/view/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'apps/myapp/',
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
    name    : 'MyApp'
});



/***/ }),

/***/ "./apps/myapp/view/MainContainer.mjs":
/*!*******************************************!*\
  !*** ./apps/myapp/view/MainContainer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Label_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");
/* harmony import */ var _WebGlComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WebGlComponent.mjs */ "./apps/myapp/view/WebGlComponent.mjs");





/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__.default {
    static getConfig() {return {
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
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.items = [{
            ntype : 'container',
            flex  : 1,
            items : [_WebGlComponent_mjs__WEBPACK_IMPORTED_MODULE_3__.default],
            layout: {ntype: 'fit'},
            vdom  : {tag: 'd3fc-group', 'auto-resize': true, cn: []}
        }, {
            module: _node_modules_neo_mjs_src_container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
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
                module   : _node_modules_neo_mjs_src_component_Label_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
                reference: 'time-label',
                style    : {marginLeft: '2em'},
                text     : `Time: ${me.getTime()}`
            }]
        }];
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
                this.down({reference: 'time-label'}).text = `Time: ${this.getTime()}`;
            }, 1000);
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
                item.pressed = item.value === count;
            }
        });
    }

    getTime() {
        return new Date().toLocaleString(Neo.config.locale, {
            hour  : '2-digit',
            minute: '2-digit',
            second: '2-digit'
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

        MyApp.canvas.Helper.enableAnimation(enableAnimation);
    }

    /**
     * @param {Object} data
     */
    onStopMainButtonClick(data) {
        Neo.Main.alert([
            'This alert pauses the JS main thread.\n\n',
            'Notice that the time inside the bottom toolbar has stopped updating.\n\n',
            'Closing this alert will resume the main thread.'
        ].join(''));
    }
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./apps/myapp/view/WebGlComponent.mjs":
/*!********************************************!*\
  !*** ./apps/myapp/view/WebGlComponent.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebGlComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Canvas_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Canvas.mjs */ "./node_modules/neo.mjs/src/component/Canvas.mjs");


/**
 * @class MyApp.view.WebGlComponent
 * @extends Neo.component.Canvas
 */
class WebGlComponent extends _node_modules_neo_mjs_src_component_Canvas_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
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
                MyApp.canvas.Helper.renderSeries(this.getCanvasId());

                Neo.main.DomAccess.getBoundingClientRect({id: me.id}).then(rect => {
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
        MyApp.canvas.Helper.updateSize({ height, width });
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
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.component.Canvas
 * @extends Neo.component.Base
 */
class Canvas extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBOztBQUVBOztBQUVtQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOENBQVM7QUFDOUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxPQUFPO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vYXBwcy9teWFwcC9hcHAubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9hcHBzL215YXBwL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL2FwcHMvbXlhcHAvdmlldy9XZWJHbENvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQ2FudmFzLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdhcHBzL215YXBwLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdNeUFwcCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IExhYmVsICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvTGFiZWwubWpzJztcbmltcG9ydCBUb29sYmFyICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1Rvb2xiYXIubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgV2ViR2xDb21wb25lbnQgZnJvbSAnLi9XZWJHbENvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBNeUFwcC52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTXlBcHAudmlldy5NYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdNeUFwcC52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOid2Ym94JyxhbGlnbjonc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pdGVtcyA9IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgaXRlbXMgOiBbV2ViR2xDb21wb25lbnRdLFxuICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdmaXQnfSxcbiAgICAgICAgICAgIHZkb20gIDoge3RhZzogJ2QzZmMtZ3JvdXAnLCAnYXV0by1yZXNpemUnOiB0cnVlLCBjbjogW119XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZTogVG9vbGJhcixcbiAgICAgICAgICAgIGZsZXggIDogJ25vbmUnLFxuICAgICAgICAgICAgaXRlbXMgOiBbe1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IG1lLm9uU3RvcEFuaW1hdGlvbkJ1dHRvbkNsaWNrLmJpbmQobWUpLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdTdG9wIEFuaW1hdGlvbidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBtZS5vblN0b3BNYWluQnV0dG9uQ2xpY2suYmluZChtZSksXG4gICAgICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpbkxlZnQ6ICcuMmVtJ30sXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1N0b3AgTWFpbidcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyICAgIDogbWUuY2hhbmdlSXRlbUFtb3VudC5iaW5kKG1lLCAxMDAwMCksXG4gICAgICAgICAgICAgICAgcHJlc3NlZCAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICA6IHttYXJnaW5MZWZ0OiAnMmVtJ30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICA6IGAkeygxMDAwMCkudG9Mb2NhbGVTdHJpbmcoKX0gaXRlbXNgLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUdyb3VwOiAnaXRlbUFtb3VudCcsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICA6IDEwMDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciAgICA6IG1lLmNoYW5nZUl0ZW1BbW91bnQuYmluZChtZSwgMTAwMDAwKSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDoge21hcmdpbkxlZnQ6ICcuMmVtJ30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICA6IGAkeygxMDAwMDApLnRvTG9jYWxlU3RyaW5nKCl9IGl0ZW1zYCxcbiAgICAgICAgICAgICAgICB0b2dnbGVHcm91cDogJ2l0ZW1BbW91bnQnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgOiAxMDAwMDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyICAgIDogbWUuY2hhbmdlSXRlbUFtb3VudC5iaW5kKG1lLCAxMDAwMDAwKSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDoge21hcmdpbkxlZnQ6ICcuMmVtJ30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICA6IGAkeygxMDAwMDAwKS50b0xvY2FsZVN0cmluZygpfSBpdGVtc2AsXG4gICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXA6ICdpdGVtQW1vdW50JyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgIDogMTAwMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogTGFiZWwsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAndGltZS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luTGVmdDogJzJlbSd9LFxuICAgICAgICAgICAgICAgIHRleHQgICAgIDogYFRpbWU6ICR7bWUuZ2V0VGltZSgpfWBcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZG93bih7cmVmZXJlbmNlOiAndGltZS1sYWJlbCd9KS50ZXh0ID0gYFRpbWU6ICR7dGhpcy5nZXRUaW1lKCl9YDtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50XG4gICAgICovXG4gICAgY2hhbmdlSXRlbUFtb3VudChjb3VudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE15QXBwLmNhbnZhcy5IZWxwZXIuY2hhbmdlSXRlbXNBbW91bnQoY291bnQpO1xuXG4gICAgICAgIG1lLml0ZW1zWzFdLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS50b2dnbGVHcm91cCA9PT0gJ2l0ZW1BbW91bnQnKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5wcmVzc2VkID0gaXRlbS52YWx1ZSA9PT0gY291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKE5lby5jb25maWcubG9jYWxlLCB7XG4gICAgICAgICAgICBob3VyICA6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgc2Vjb25kOiAnMi1kaWdpdCdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN0b3BBbmltYXRpb25CdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBlbmFibGVBbmltYXRpb24gPSB0cnVlLFxuICAgICAgICAgICAgYnV0dG9uVGV4dDtcblxuICAgICAgICBpZiAoZGF0YS5jb21wb25lbnQudGV4dCA9PT0gJ1N0b3AgQW5pbWF0aW9uJykge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCAgICAgID0gJ1N0YXJ0IEFuaW1hdGlvbic7XG4gICAgICAgICAgICBlbmFibGVBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnU3RvcCBBbmltYXRpb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQudGV4dCA9IGJ1dHRvblRleHQ7XG5cbiAgICAgICAgTXlBcHAuY2FudmFzLkhlbHBlci5lbmFibGVBbmltYXRpb24oZW5hYmxlQW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3RvcE1haW5CdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIE5lby5NYWluLmFsZXJ0KFtcbiAgICAgICAgICAgICdUaGlzIGFsZXJ0IHBhdXNlcyB0aGUgSlMgbWFpbiB0aHJlYWQuXFxuXFxuJyxcbiAgICAgICAgICAgICdOb3RpY2UgdGhhdCB0aGUgdGltZSBpbnNpZGUgdGhlIGJvdHRvbSB0b29sYmFyIGhhcyBzdG9wcGVkIHVwZGF0aW5nLlxcblxcbicsXG4gICAgICAgICAgICAnQ2xvc2luZyB0aGlzIGFsZXJ0IHdpbGwgcmVzdW1lIHRoZSBtYWluIHRocmVhZC4nXG4gICAgICAgIF0uam9pbignJykpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDYW52YXMgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9DYW52YXMubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTXlBcHAudmlldy5XZWJHbENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5DYW52YXNcbiAqL1xuY2xhc3MgV2ViR2xDb21wb25lbnQgZXh0ZW5kcyBDYW52YXMge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdNeUFwcC52aWV3LldlYkdsQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdNeUFwcC52aWV3LldlYkdsQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7dGFnOiAnZDNmYy1jYW52YXMnLCBjbjogW1xuICAgICAgICAgICAge3RhZzogJ2NhbnZhcyd9XG4gICAgICAgIF19XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS52ZG9tLmNuWzBdLmlkID0gYCR7dmFsdWV9X19jYW52YXNgO1xuXG4gICAgICAgIHN1cGVyLmFmdGVyU2V0SWQodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG9mZnNjcmVlblJlZ2lzdGVyZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRPZmZzY3JlZW5SZWdpc3RlcmVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICAgICAge21lYXN1cmU6IG1lLm9uTWVhc3VyZSwgc2NvcGU6IG1lfSAvLyBjdXN0b20gZDNmYyBkb20gZXZlbnRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcblxuICAgICAgICAgICAgLy8gV2UgbmVlZCBhIHNob3J0IGRlbGF5IHRvIGVuc3VyZSBvdXIgYXBwIGJhc2VkIHJlbW90ZSBtZXRob2RzIGdvdCByZWdpc3RlcmVkXG4gICAgICAgICAgICAvLyBpbnNpZGUgdGhlIGRpc3QgZW52c1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3RlIG1ldGhvZCBhY2Nlc3MgdG8gdGhlIGNhbnZhcyB3b3JrZXJcbiAgICAgICAgICAgICAgICBNeUFwcC5jYW52YXMuSGVscGVyLnJlbmRlclNlcmllcyh0aGlzLmdldENhbnZhc0lkKCkpO1xuXG4gICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7aWQ6IG1lLmlkfSkudGhlbihyZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUudXBkYXRlU2l6ZShyZWN0LmhlaWdodCwgcmVjdC53aWR0aCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB3aGVuIHVzaW5nIHdyYXBwZXJzIChlLmcuIEQzKVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2FudmFzSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk1lYXN1cmUoZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IGRhdGEucGF0aFswXTtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKG5vZGUuY2xpZW50SGVpZ2h0LCBub2RlLmNsaWVudFdpZHRoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAgICovXG4gICAgdXBkYXRlU2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIE15QXBwLmNhbnZhcy5IZWxwZXIudXBkYXRlU2l6ZSh7IGhlaWdodCwgd2lkdGggfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhXZWJHbENvbXBvbmVudCk7XG5cbmV4cG9ydCB7V2ViR2xDb21wb25lbnQgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LkNhbnZhc1xuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuQ2FudmFzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkNhbnZhcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjYW52YXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2FudmFzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9mZnNjcmVlbj10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzY3JlZW46IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGFwcGxpY2FibGUgaWYgb2Zmc2NyZWVuID09PSB0cnVlLlxuICAgICAgICAgKiB0cnVlIG9uY2UgdGhlIG93bmVyc2hpcCBvZiB0aGUgY2FudmFzIG5vZGUgZ290IHRyYW5zZmVycmVkIHRvIHdvcmtlci5DYW52YXMuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9mZnNjcmVlblJlZ2lzdGVyZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzY3JlZW5SZWdpc3RlcmVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWc6ICdjYW52YXMnfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHt0YWc6ICdjYW52YXMnfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgICA9IG1lLmdldENhbnZhc0lkKCksXG4gICAgICAgICAgICB3b3JrZXIgPSBOZW8uY3VycmVudFdvcmtlcjtcblxuICAgICAgICBpZiAodmFsdWUgJiYgbWUub2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICB3b3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnZ2V0T2Zmc2NyZWVuQ2FudmFzJyxcbiAgICAgICAgICAgICAgICBub2RlSWQ6IGlkXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHdvcmtlci5wcm9taXNlTWVzc2FnZSgnY2FudmFzJywge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3RlckNhbnZhcycsXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgIDogZGF0YS5vZmZzY3JlZW4sXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZDogaWRcbiAgICAgICAgICAgICAgICB9LCBbZGF0YS5vZmZzY3JlZW5dKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUub2Zmc2NyZWVuUmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHdoZW4gdXNpbmcgd3JhcHBlcnMgKGUuZy4gRDMpXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDYW52YXNJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDYW52YXMpO1xuXG5leHBvcnQge0NhbnZhcyBhcyBkZWZhdWx0fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==