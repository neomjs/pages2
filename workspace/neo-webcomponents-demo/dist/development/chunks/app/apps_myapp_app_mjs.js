"use strict";
(self["webpackChunkneo_webcomponents_demo"] = self["webpackChunkneo_webcomponents_demo"] || []).push([["apps_myapp_app_mjs"],{

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
/* harmony import */ var _src_component_mwc_Button_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/mwc/Button.mjs */ "./src/component/mwc/Button.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");




/**
 * @class MyApp.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__.default {
    static getConfig() {return {
        className: 'MyApp.view.MainContainer',
        autoMount: true,
        layout   : {ntype: 'fit'},

        items: [{
            module: _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
            height: 400,
            width : 600,
            style : {flex: 'none', margin: '20px'},

            items: [{
                ntype : 'container',
                layout: {ntype: 'vbox', align: 'start'},
                style : {margin: '1em'},

                itemDefaults: {
                    module : _src_component_mwc_Button_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
                    handler: data => console.log('click', data.component.id),
                    style  : {marginTop: '1em'}
                },

                items: [{
                    label: 'standard',
                    style: null
                }, {
                    label   : 'outlined',
                    outlined: true
                }, {
                    label : 'raised',
                    raised: true
                }, {
                    label     : 'unelevated',
                    unelevated: true
                }, {
                    dense: true,
                    label: 'dense'
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                }
            }, {
                ntype : 'container',
                layout: {ntype: 'vbox', align: 'start'},
                style : {margin: '1em'},

                itemDefaults: {
                    module : _src_component_mwc_Button_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
                    handler: data => console.log('click', data.component.id),
                    icon   : 'code',
                    style  : {marginTop: '1em'}
                },

                items: [{
                    label: 'standard',
                    style: null
                }, {
                    label   : 'outlined',
                    outlined: true
                }, {
                    label : 'raised',
                    raised: true
                }, {
                    label     : 'unelevated',
                    unelevated: true
                }, {
                    dense: true,
                    label: 'dense'
                }],

                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                }
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./src/component/mwc/Button.mjs":
/*!**************************************!*\
  !*** ./src/component/mwc/Button.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.component.mwc.Button
 * @extends Neo.component.Base
 */
class Button extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.mwc.Button'
         * @protected
         */
        className: 'Neo.component.mwc.Button',
        /**
         * @member {String} ntype='mwc-button'
         * @protected
         */
        ntype: 'mwc-button',
        /**
         * @member {Boolean} dense_=false
         */
        dense_: false,
        /**
         * Shortcut for domListeners={click:handler}
         * A string based value assumes that the handlerFn lives inside a ComponentController
         * @member {Function|String|null} handler_=null
         */
        handler_: null,
        /**
         * @member {String} icon_=''
         */
        icon_: '',
        /**
         * @member {String} label_=''
         */
        label_: '',
        /**
         * @member {Boolean} outlined_=false
         */
        outlined_: false,
        /**
         * @member {Boolean} raised_=false
         */
        raised_: false,
        /**
         * @member {Boolean} unelevated_=false
         */
        unelevated_: false,
        /**
         * @member {Object} _vdom={tag:'mwc-button'}
         */
        _vdom:
        {tag: 'mwc-button'}
    }}

    /**
     * Triggered after the dense config got changed.
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDense(value, oldValue) {
        this.vdom.dense = value;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the handler config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHandler(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners;

            domListeners.push({click: value, scope: me});
            me.domListeners = domListeners;
        }
    }

    /**
     * Triggered after the icon config got changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetIcon(value, oldValue) {
        this.vdom.icon = value;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the label config got changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabel(value, oldValue) {
        this.vdom.label = value;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the outlined config got changed.
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetOutlined(value, oldValue) {
        this.vdom.outlined = value || null;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the raised config got changed.
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetRaised(value, oldValue) {
        this.vdom.raised = value || null;
        this.promiseVdomUpdate();
    }

    /**
     * Triggered after the unelevated config got changed.
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUnelevated(value, oldValue) {
        this.vdom.unelevated = value || null;
        this.promiseVdomUpdate();
    }
}

Neo.applyClassConfig(Button);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vYXBwcy9teWFwcC9hcHAubWpzIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9hcHBzL215YXBwL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL3NyYy9jb21wb25lbnQvbXdjL0J1dHRvbi5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnYXBwcy9teWFwcC8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnTXlBcHAnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBNd2NCdXR0b24gICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9td2MvQnV0dG9uLm1qcyc7XG5pbXBvcnQgVGFiQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTXlBcHAudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdNeUFwcC52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIGxheW91dCAgIDoge250eXBlOiAnZml0J30sXG5cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFRhYkNvbnRhaW5lcixcbiAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgd2lkdGggOiA2MDAsXG4gICAgICAgICAgICBzdHlsZSA6IHtmbGV4OiAnbm9uZScsIG1hcmdpbjogJzIwcHgnfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0YXJ0J30sXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7bWFyZ2luOiAnMWVtJ30sXG5cbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlIDogTXdjQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBkYXRhID0+IGNvbnNvbGUubG9nKCdjbGljaycsIGRhdGEuY29tcG9uZW50LmlkKSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgIDoge21hcmdpblRvcDogJzFlbSd9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ3N0YW5kYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IG51bGxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsICAgOiAnb3V0bGluZWQnLFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgOiAncmFpc2VkJyxcbiAgICAgICAgICAgICAgICAgICAgcmFpc2VkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgICAgOiAndW5lbGV2YXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIHVuZWxldmF0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ2RlbnNlJ1xuICAgICAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RhYiAxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RhcnQnfSxcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHttYXJnaW46ICcxZW0nfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgOiBNd2NCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGRhdGEgPT4gY29uc29sZS5sb2coJ2NsaWNrJywgZGF0YS5jb21wb25lbnQuaWQpLFxuICAgICAgICAgICAgICAgICAgICBpY29uICAgOiAnY29kZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICA6IHttYXJnaW5Ub3A6ICcxZW0nfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdzdGFuZGFyZCcsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBudWxsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbCAgIDogJ291dGxpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIDogJ3JhaXNlZCcsXG4gICAgICAgICAgICAgICAgICAgIHJhaXNlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgICAgIDogJ3VuZWxldmF0ZWQnLFxuICAgICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdkZW5zZSdcbiAgICAgICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtcGxheS1jaXJjbGUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFiIDInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5td2MuQnV0dG9uXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5td2MuQnV0dG9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50Lm13Yy5CdXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbXdjLWJ1dHRvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtd2MtYnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRlbnNlXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZGVuc2VfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBkb21MaXN0ZW5lcnM9e2NsaWNrOmhhbmRsZXJ9XG4gICAgICAgICAqIEEgc3RyaW5nIGJhc2VkIHZhbHVlIGFzc3VtZXMgdGhhdCB0aGUgaGFuZGxlckZuIGxpdmVzIGluc2lkZSBhIENvbXBvbmVudENvbnRyb2xsZXJcbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258U3RyaW5nfG51bGx9IGhhbmRsZXJfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhhbmRsZXJfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpY29uXz0nJ1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbl86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYWJlbF89JydcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvdXRsaW5lZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIG91dGxpbmVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByYWlzZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICByYWlzZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVuZWxldmF0ZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB1bmVsZXZhdGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWc6J213Yy1idXR0b24nfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHt0YWc6ICdtd2MtYnV0dG9uJ31cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkZW5zZSBjb25maWcgZ290IGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREZW5zZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy52ZG9tLmRlbnNlID0gdmFsdWU7XG4gICAgICAgIHRoaXMucHJvbWlzZVZkb21VcGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhhbmRsZXIgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGFuZGxlcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtjbGljazogdmFsdWUsIHNjb3BlOiBtZX0pO1xuICAgICAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpY29uIGNvbmZpZyBnb3QgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJY29uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnZkb20uaWNvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLnByb21pc2VWZG9tVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbCBjb25maWcgZ290IGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudmRvbS5sYWJlbCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnByb21pc2VWZG9tVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBvdXRsaW5lZCBjb25maWcgZ290IGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRPdXRsaW5lZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy52ZG9tLm91dGxpbmVkID0gdmFsdWUgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5wcm9taXNlVmRvbVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcmFpc2VkIGNvbmZpZyBnb3QgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJhaXNlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy52ZG9tLnJhaXNlZCA9IHZhbHVlIHx8IG51bGw7XG4gICAgICAgIHRoaXMucHJvbWlzZVZkb21VcGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVuZWxldmF0ZWQgY29uZmlnIGdvdCBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VW5lbGV2YXRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy52ZG9tLnVuZWxldmF0ZWQgPSB2YWx1ZSB8fCBudWxsO1xuICAgICAgICB0aGlzLnByb21pc2VWZG9tVXBkYXRlKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCdXR0b24pO1xuXG5leHBvcnQge0J1dHRvbiBhcyBkZWZhdWx0fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==