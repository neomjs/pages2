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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.component.Canvas
 * @extends Neo.component.Base
 */
class Canvas extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        let me          = this,
            id          = me.getCanvasId(),
            {offscreen} = me,
            worker      = Neo.currentWorker;

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
                    me.offscreenRegistered = true
                })
            })
        } else if (offscreen) {
            me.offscreenRegistered = false
        }
    }

    /**
     * Override this method when using wrappers (e.g. D3)
     * @returns {String}
     */
    getCanvasId() {
        return this.id
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Canvas));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQSx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBOztBQUVBLGlFQUFlLDhCQUE4QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZYOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBUztBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxPQUFPO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxzQkFBc0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9hcHBzL215YXBwL2FwcC5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL2FwcHMvbXlhcHAvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vYXBwcy9teWFwcC92aWV3L1dlYkdsQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9DYW52YXMubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vdmlldy9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmV4cG9ydCBjb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdhcHBzL215YXBwLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdNeUFwcCdcbn0pXG4iLCJpbXBvcnQgTGFiZWwgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9MYWJlbC5tanMnO1xuaW1wb3J0IFRvb2xiYXIgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90b29sYmFyL0Jhc2UubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgV2ViR2xDb21wb25lbnQgZnJvbSAnLi9XZWJHbENvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBNeUFwcC52aWV3Lk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIFZpZXdwb3J0IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J015QXBwLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTXlBcHAudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTondmJveCcsYWxpZ246J3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLml0ZW1zID0gW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBpdGVtcyA6IFtXZWJHbENvbXBvbmVudF0sXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2ZpdCd9LFxuICAgICAgICAgICAgdmRvbSAgOiB7dGFnOiAnZDNmYy1ncm91cCcsICdhdXRvLXJlc2l6ZSc6IHRydWUsIGNuOiBbXX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlOiBUb29sYmFyLFxuICAgICAgICAgICAgZmxleCAgOiAnbm9uZScsXG4gICAgICAgICAgICBpdGVtcyA6IFt7XG4gICAgICAgICAgICAgICAgaGFuZGxlcjogbWUub25TdG9wQW5pbWF0aW9uQnV0dG9uQ2xpY2suYmluZChtZSksXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1N0b3AgQW5pbWF0aW9uJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXI6IG1lLm9uU3RvcE1haW5CdXR0b25DbGljay5iaW5kKG1lKSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luTGVmdDogJy4yZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnU3RvcCBNYWluJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgOiBtZS5jaGFuZ2VJdGVtQW1vdW50LmJpbmQobWUsIDEwMDAwKSxcbiAgICAgICAgICAgICAgICBwcmVzc2VkICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDoge21hcmdpbkxlZnQ6ICcyZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgIDogYCR7KDEwMDAwKS50b0xvY2FsZVN0cmluZygpfSBpdGVtc2AsXG4gICAgICAgICAgICAgICAgdG9nZ2xlR3JvdXA6ICdpdGVtQW1vdW50JyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgIDogMTAwMDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyICAgIDogbWUuY2hhbmdlSXRlbUFtb3VudC5iaW5kKG1lLCAxMDAwMDApLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgOiB7bWFyZ2luTGVmdDogJy4yZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgIDogYCR7KDEwMDAwMCkudG9Mb2NhbGVTdHJpbmcoKX0gaXRlbXNgLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUdyb3VwOiAnaXRlbUFtb3VudCcsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICA6IDEwMDAwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgICAgOiBtZS5jaGFuZ2VJdGVtQW1vdW50LmJpbmQobWUsIDEwMDAwMDApLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgOiB7bWFyZ2luTGVmdDogJy4yZW0nfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgIDogYCR7KDEwMDAwMDApLnRvTG9jYWxlU3RyaW5nKCl9IGl0ZW1zYCxcbiAgICAgICAgICAgICAgICB0b2dnbGVHcm91cDogJ2l0ZW1BbW91bnQnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgOiAxMDAwMDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBMYWJlbCxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICd0aW1lLWxhYmVsJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5MZWZ0OiAnMmVtJ30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiBgVGltZTogJHttZS5nZXRUaW1lKCl9YFxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24oe3JlZmVyZW5jZTogJ3RpbWUtbGFiZWwnfSkudGV4dCA9IGBUaW1lOiAke3RoaXMuZ2V0VGltZSgpfWBcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY291bnRcbiAgICAgKi9cbiAgICBjaGFuZ2VJdGVtQW1vdW50KGNvdW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTXlBcHAuY2FudmFzLkhlbHBlci5jaGFuZ2VJdGVtc0Ftb3VudChjb3VudCk7XG5cbiAgICAgICAgbWUuaXRlbXNbMV0uaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnRvZ2dsZUdyb3VwID09PSAnaXRlbUFtb3VudCcpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnByZXNzZWQgPSBpdGVtLnZhbHVlID09PSBjb3VudFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKE5lby5jb25maWcubG9jYWxlLCB7XG4gICAgICAgICAgICBob3VyICA6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICAgICAgc2Vjb25kOiAnMi1kaWdpdCdcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3RvcEFuaW1hdGlvbkJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IGVuYWJsZUFuaW1hdGlvbiA9IHRydWUsXG4gICAgICAgICAgICBidXR0b25UZXh0O1xuXG4gICAgICAgIGlmIChkYXRhLmNvbXBvbmVudC50ZXh0ID09PSAnU3RvcCBBbmltYXRpb24nKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ICAgICAgPSAnU3RhcnQgQW5pbWF0aW9uJztcbiAgICAgICAgICAgIGVuYWJsZUFuaW1hdGlvbiA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1N0b3AgQW5pbWF0aW9uJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQudGV4dCA9IGJ1dHRvblRleHQ7XG5cbiAgICAgICAgTXlBcHAuY2FudmFzLkhlbHBlci5lbmFibGVBbmltYXRpb24oZW5hYmxlQW5pbWF0aW9uKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TdG9wTWFpbkJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgTmVvLk1haW4uYWxlcnQoW1xuICAgICAgICAgICAgJ1RoaXMgYWxlcnQgcGF1c2VzIHRoZSBKUyBtYWluIHRocmVhZC5cXG5cXG4nLFxuICAgICAgICAgICAgJ05vdGljZSB0aGF0IHRoZSB0aW1lIGluc2lkZSB0aGUgYm90dG9tIHRvb2xiYXIgaGFzIHN0b3BwZWQgdXBkYXRpbmcuXFxuXFxuJyxcbiAgICAgICAgICAgICdDbG9zaW5nIHRoaXMgYWxlcnQgd2lsbCByZXN1bWUgdGhlIG1haW4gdGhyZWFkLidcbiAgICAgICAgXS5qb2luKCcnKSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKE1haW5Db250YWluZXIpO1xuIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0NhbnZhcy5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBNeUFwcC52aWV3LldlYkdsQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkNhbnZhc1xuICovXG5jbGFzcyBXZWJHbENvbXBvbmVudCBleHRlbmRzIENhbnZhcyB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdNeUFwcC52aWV3LldlYkdsQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdNeUFwcC52aWV3LldlYkdsQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7dGFnOiAnZDNmYy1jYW52YXMnLCBjbjogW1xuICAgICAgICAgICAge3RhZzogJ2NhbnZhcyd9XG4gICAgICAgIF19XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldElkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnZkb20uY25bMF0uaWQgPSBgJHt2YWx1ZX1fX2NhbnZhc2A7XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRJZCh2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBvZmZzY3JlZW5SZWdpc3RlcmVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0T2Zmc2NyZWVuUmVnaXN0ZXJlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKFxuICAgICAgICAgICAgICAgIHttZWFzdXJlOiBtZS5vbk1lYXN1cmUsIHNjb3BlOiBtZX0gLy8gY3VzdG9tIGQzZmMgZG9tIGV2ZW50XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgICAgIC8vIFdlIG5lZWQgYSBzaG9ydCBkZWxheSB0byBlbnN1cmUgb3VyIGFwcCBiYXNlZCByZW1vdGUgbWV0aG9kcyBnb3QgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgLy8gaW5zaWRlIHRoZSBkaXN0IGVudnNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJlbW90ZSBtZXRob2QgYWNjZXNzIHRvIHRoZSBjYW52YXMgd29ya2VyXG4gICAgICAgICAgICAgICAgTXlBcHAuY2FudmFzLkhlbHBlci5yZW5kZXJTZXJpZXModGhpcy5nZXRDYW52YXNJZCgpKTtcblxuICAgICAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe2lkOiBtZS5pZH0pLnRoZW4ocmVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVNpemUocmVjdC5oZWlnaHQsIHJlY3Qud2lkdGgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCA1MClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHdoZW4gdXNpbmcgd3JhcHBlcnMgKGUuZy4gRDMpXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDYW52YXNJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5pZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25NZWFzdXJlKGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBkYXRhLnBhdGhbMF07XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZShub2RlLmNsaWVudEhlaWdodCwgbm9kZS5jbGllbnRXaWR0aClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHdpZHRoXG4gICAgICovXG4gICAgdXBkYXRlU2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIE15QXBwLmNhbnZhcy5IZWxwZXIudXBkYXRlU2l6ZSh7IGhlaWdodCwgd2lkdGggfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFdlYkdsQ29tcG9uZW50KTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb21wb25lbnQuQ2FudmFzXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuQ2FudmFzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkNhbnZhcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjYW52YXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2FudmFzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9mZnNjcmVlbj10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzY3JlZW46IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmx5IGFwcGxpY2FibGUgaWYgb2Zmc2NyZWVuID09PSB0cnVlLlxuICAgICAgICAgKiB0cnVlIG9uY2UgdGhlIG93bmVyc2hpcCBvZiB0aGUgY2FudmFzIG5vZGUgZ290IHRyYW5zZmVycmVkIHRvIHdvcmtlci5DYW52YXMuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9mZnNjcmVlblJlZ2lzdGVyZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzY3JlZW5SZWdpc3RlcmVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWc6ICdjYW52YXMnfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHt0YWc6ICdjYW52YXMnfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgICAgICAgICA9IG1lLmdldENhbnZhc0lkKCksXG4gICAgICAgICAgICB7b2Zmc2NyZWVufSA9IG1lLFxuICAgICAgICAgICAgd29ya2VyICAgICAgPSBOZW8uY3VycmVudFdvcmtlcjtcblxuICAgICAgICBpZiAodmFsdWUgJiYgb2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICB3b3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ2dldE9mZnNjcmVlbkNhbnZhcycsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBub2RlSWQgOiBpZFxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB3b3JrZXIucHJvbWlzZU1lc3NhZ2UoJ2NhbnZhcycsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVnaXN0ZXJDYW52YXMnLFxuICAgICAgICAgICAgICAgICAgICBub2RlICA6IGRhdGEub2Zmc2NyZWVuLFxuICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IGlkXG4gICAgICAgICAgICAgICAgfSwgW2RhdGEub2Zmc2NyZWVuXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9mZnNjcmVlblJlZ2lzdGVyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2NyZWVuKSB7XG4gICAgICAgICAgICBtZS5vZmZzY3JlZW5SZWdpc3RlcmVkID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHdoZW4gdXNpbmcgd3JhcHBlcnMgKGUuZy4gRDMpXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDYW52YXNJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKENhbnZhcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=