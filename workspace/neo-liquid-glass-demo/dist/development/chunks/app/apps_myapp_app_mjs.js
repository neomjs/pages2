"use strict";
(self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || []).push([["apps_myapp_app_mjs"],{

/***/ "./apps/myapp/app.mjs":
/*!****************************!*\
  !*** ./apps/myapp/app.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onStart: () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _view_Viewport_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/Viewport.mjs */ "./apps/myapp/view/Viewport.mjs");


const onStart = () => Neo.app({
    mainView: _view_Viewport_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'MyApp'
});

/***/ }),

/***/ "./apps/myapp/view/GlassComponent.mjs":
/*!********************************************!*\
  !*** ./apps/myapp/view/GlassComponent.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



// Could get moved as static configs into the class
const
    MASK_WIDTH            = 720,
    MASK_HEIGHT           = 400,
    MASK_RADIUS           = 28,
    VIEWBOX_WIDTH         = 1920,
    VIEWBOX_HEIGHT        = 1080,
    SPEED_X               = 75, // Speed in pixels per second
    SPEED_Y               = 75,
    OUTER_SHADOW_BLUR     = 32,
    BACKGROUND_IMAGE_PATH = './resources/images/room.jpg';

/**
 * @class MyApp.view.GlassComponent
 * @extends Neo.component.Base
 */
class GlassComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='MyApp.view.GlassComponent'
         * @protected
         */
        className: 'MyApp.view.GlassComponent',
        /**
         * @member {String[]} baseCls=['neo-svg-glass']
         * @protected
         */
        baseCls: ['neo-svg-glass'],
        /**
         * The position of the mask.
         * @member {Object} maskPosition_={x:0,y:0}
         */
        maskPosition_: {x: 0, y: 0},

        /**
         * @property {Object} _vdom
         */
        vdom:
        {tag: 'svg', viewBox: '0 0 1920 1080', preserveAspectRatio: 'xMidYMid meet', cn: [
            {tag: 'defs', cn: [
                // Glass distortion filter
                {tag: 'filter', id: 'glass-distortion', x: '0', y: '0', width: '100%', height: '100%', cn: [
                    {tag: 'feTurbulence', type: 'fractalNoise', numOctaves: '2', seed: '92', result: 'noise', cn: [
                        {tag: 'animate', id: 'noiseAnimate', attributeName: 'baseFrequency', values: '0.002;.008;0.002', from: '0', to: '8', dur: '10s', repeatCount: 'indefinite'}
                    ]},
                    {tag: 'feGaussianBlur', in: 'noise', stdDeviation: '2', result: 'blurred'},
                    {tag: 'feDisplacementMap', in: 'SourceGraphic', in2: 'blurred', scale: '77', xChannelSelector: 'R', yChannelSelector: 'G'}
                ]},
                // Shadow filter
                {tag: 'filter', id: 'shadow', x: '-50%', y: '-50%', width: '200%', height: '200%', cn: [
                    {tag: 'feDropShadow', dx: '-6', dy: '-6', stdDeviation: OUTER_SHADOW_BLUR / 8, floodColor: 'rgba(255,255,255,1)'},
                    {tag: 'feDropShadow', dx: '6',  dy: '6',  stdDeviation: OUTER_SHADOW_BLUR / 8, floodColor: 'rgba(0,0,0,0.2)'}
                ]},
                // Animated rectangular mask with border radius
                {tag: 'mask', id: 'glass-mask', cn: [
                    {tag: 'rect', flag: 'mask-rect', width: MASK_WIDTH, height: MASK_HEIGHT, rx: MASK_RADIUS, ry: MASK_RADIUS, fill: 'white'}
                ]}
            ]},
            // Background image 1
            {tag: 'image', href: BACKGROUND_IMAGE_PATH, width: '1920', height: '1080', preserveAspectRatio: 'xMidYMid meet'},
            // Example foreignObject with a button
            {tag: 'foreignObject', x: '600', y: '200', width: '720', height: '400', cn: [
                {tag: 'button', html: 'Click Me'}
            ]},
            // Masked background image
            {tag: 'image', href: BACKGROUND_IMAGE_PATH, width: '1920', height: '1080', preserveAspectRatio: 'xMidYMid meet', filter: 'url(#glass-distortion)', mask: 'url(#glass-mask)'},
            // Masked foreignObject with a button
            {tag: 'foreignObject', x: '600', y: '200', width: '720', height: '400', filter: 'url(#glass-distortion)', mask: 'url(#glass-mask)', cn: [
                {tag: 'button', cls: ['custom-button'], html: 'Click Me'}
            ]},
            // Shadow rectangle behind the glass area
            {tag: 'rect', flag: 'shadow-rect', width: MASK_WIDTH, height: MASK_HEIGHT, rx: MASK_RADIUS, ry: MASK_RADIUS, fill: 'white', opacity: '0.2', filter: 'url(#shadow)'}
        ]}
    }

    // Private instance properties for animation state
    #animationFrameId = 0;
    #animationPos     = { x: 0, y: 0, dx: SPEED_X, dy: SPEED_Y };
    #lastTime         = performance.now();

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.addDomListeners({
            click   : me.onCustomButtonClick,
            delegate: 'custom-button',
            scope   : me
        })
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        let me = this;

        if (oldValue !== undefined) {
            if (value) {
                me.#animationFrameId = globalThis.requestAnimationFrame(me.animate.bind(me))
            } else if (this.#animationFrameId) {
                globalThis.cancelAnimationFrame(me.#animationFrameId)
            }
        }
    }

    /**
     * Triggered after the maskPosition config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMaskPosition(value, oldValue) {
        let me         = this,
            {vdom}     = me,
            maskRect   = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'mask-rect'),
            shadowRect = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'shadow-rect');

        Object.assign(maskRect,   value);
        Object.assign(shadowRect, value);

        me.update()
    }

    /**
     * The animation loop method.
     * @param {Number} now
     */
    animate(now) {
        const
            me      = this,
            elapsed = (now - me.#lastTime) / 1000; // seconds

        me.#lastTime = now;

        let { x, y, dx, dy } = me.#animationPos;
        x += dx * elapsed;
        y += dy * elapsed;

        // Bounce off edges
        if (x < 0) {
            x = 0;
            dx *= -1;
        }
        if (x > VIEWBOX_WIDTH - MASK_WIDTH) {
            x = VIEWBOX_WIDTH - MASK_WIDTH;
            dx *= -1;
        }
        if (y < 0) {
            y = 0;
            dy *= -1;
        }
        if (y > VIEWBOX_HEIGHT - MASK_HEIGHT) {
            y = VIEWBOX_HEIGHT - MASK_HEIGHT;
            dy *= -1;
        }

        me.#animationPos = { x, y, dx, dy };

        me.maskPosition= { x, y };

        me.#animationFrameId = self.requestAnimationFrame(me.animate.bind(me))
    }

    /**
     * @param {Object} data
     */
    onCustomButtonClick(data) {
        Neo.Main.alert({message: 'Button clicked!'})
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(GlassComponent));


/***/ }),

/***/ "./apps/myapp/view/Viewport.mjs":
/*!**************************************!*\
  !*** ./apps/myapp/view/Viewport.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");
/* harmony import */ var _GlassComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlassComponent.mjs */ "./apps/myapp/view/GlassComponent.mjs");



/**
 * @class MyApp.view.Viewport
 * @extends Neo.container.Viewport
 */
class Viewport extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='MyApp.view.Viewport'
         * @protected
         */
        className: 'MyApp.view.Viewport',
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'},
        /**
         * @member {Object[]} items
         */
        items: [{
            module: _GlassComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
        }]
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Viewport));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX215YXBwX2FwcF9tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRXBDO0FBQ1AsY0FBYywwREFBUTtBQUN0QjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNEU7QUFDTDs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRkFBUztBQUN0QztBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVEsZUFBZTtBQUMzQztBQUNBLHdCQUF3QixXQUFXOztBQUVuQztBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQix5QkFBeUIsbUZBQW1GLEtBQUs7QUFDakgsc0JBQXNCO0FBQ3RCLHFCQUFxQix5RUFBeUU7QUFDOUYscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQjtBQUNBLGlCQUFpQjtBQUNqQixxQkFBcUIsZ0hBQWdIO0FBQ3JJLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEI7QUFDQSxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCO0FBQ0EsY0FBYztBQUNkO0FBQ0EsYUFBYSwrR0FBK0c7QUFDNUg7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBLGFBQWEsMktBQTJLO0FBQ3hMO0FBQ0EsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFVBQVU7QUFDdkIseUJBQXlCLCtFQUFRO0FBQ2pDLHlCQUF5QiwrRUFBUTs7QUFFakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBLGNBQWMsZUFBZTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3QiwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTs7QUFFQSxpRUFBZSw4QkFBOEIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4THdDO0FBQ3BDOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RkFBWTtBQUNuQztBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxRQUFRO0FBQ3BDO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFjO0FBQ2xDLFNBQVM7QUFDVDtBQUNBOztBQUVBLGlFQUFlLHdCQUF3QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlhcHAvLi9hcHBzL215YXBwL2FwcC5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9hcHBzL215YXBwL3ZpZXcvR2xhc3NDb21wb25lbnQubWpzIiwid2VicGFjazovL215YXBwLy4vYXBwcy9teWFwcC92aWV3L1ZpZXdwb3J0Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld3BvcnQgZnJvbSAnLi92aWV3L1ZpZXdwb3J0Lm1qcyc7XG5cbmV4cG9ydCBjb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgbWFpblZpZXc6IFZpZXdwb3J0LFxuICAgIG5hbWUgICAgOiAnTXlBcHAnXG59KTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9WRG9tLm1qcyc7XG5cbi8vIENvdWxkIGdldCBtb3ZlZCBhcyBzdGF0aWMgY29uZmlncyBpbnRvIHRoZSBjbGFzc1xuY29uc3RcbiAgICBNQVNLX1dJRFRIICAgICAgICAgICAgPSA3MjAsXG4gICAgTUFTS19IRUlHSFQgICAgICAgICAgID0gNDAwLFxuICAgIE1BU0tfUkFESVVTICAgICAgICAgICA9IDI4LFxuICAgIFZJRVdCT1hfV0lEVEggICAgICAgICA9IDE5MjAsXG4gICAgVklFV0JPWF9IRUlHSFQgICAgICAgID0gMTA4MCxcbiAgICBTUEVFRF9YICAgICAgICAgICAgICAgPSA3NSwgLy8gU3BlZWQgaW4gcGl4ZWxzIHBlciBzZWNvbmRcbiAgICBTUEVFRF9ZICAgICAgICAgICAgICAgPSA3NSxcbiAgICBPVVRFUl9TSEFET1dfQkxVUiAgICAgPSAzMixcbiAgICBCQUNLR1JPVU5EX0lNQUdFX1BBVEggPSAnLi9yZXNvdXJjZXMvaW1hZ2VzL3Jvb20uanBnJztcblxuLyoqXG4gKiBAY2xhc3MgTXlBcHAudmlldy5HbGFzc0NvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEdsYXNzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J015QXBwLnZpZXcuR2xhc3NDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ015QXBwLnZpZXcuR2xhc3NDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGJhc2VDbHM9WyduZW8tc3ZnLWdsYXNzJ11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWyduZW8tc3ZnLWdsYXNzJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIG1hc2suXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbWFza1Bvc2l0aW9uXz17eDowLHk6MH1cbiAgICAgICAgICovXG4gICAgICAgIG1hc2tQb3NpdGlvbl86IHt4OiAwLCB5OiAwfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHByb3BlcnR5IHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tOlxuICAgICAgICB7dGFnOiAnc3ZnJywgdmlld0JveDogJzAgMCAxOTIwIDEwODAnLCBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsIGNuOiBbXG4gICAgICAgICAgICB7dGFnOiAnZGVmcycsIGNuOiBbXG4gICAgICAgICAgICAgICAgLy8gR2xhc3MgZGlzdG9ydGlvbiBmaWx0ZXJcbiAgICAgICAgICAgICAgICB7dGFnOiAnZmlsdGVyJywgaWQ6ICdnbGFzcy1kaXN0b3J0aW9uJywgeDogJzAnLCB5OiAnMCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmVUdXJidWxlbmNlJywgdHlwZTogJ2ZyYWN0YWxOb2lzZScsIG51bU9jdGF2ZXM6ICcyJywgc2VlZDogJzkyJywgcmVzdWx0OiAnbm9pc2UnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2FuaW1hdGUnLCBpZDogJ25vaXNlQW5pbWF0ZScsIGF0dHJpYnV0ZU5hbWU6ICdiYXNlRnJlcXVlbmN5JywgdmFsdWVzOiAnMC4wMDI7LjAwODswLjAwMicsIGZyb206ICcwJywgdG86ICc4JywgZHVyOiAnMTBzJywgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ31cbiAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdmZUdhdXNzaWFuQmx1cicsIGluOiAnbm9pc2UnLCBzdGREZXZpYXRpb246ICcyJywgcmVzdWx0OiAnYmx1cnJlZCd9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmVEaXNwbGFjZW1lbnRNYXAnLCBpbjogJ1NvdXJjZUdyYXBoaWMnLCBpbjI6ICdibHVycmVkJywgc2NhbGU6ICc3NycsIHhDaGFubmVsU2VsZWN0b3I6ICdSJywgeUNoYW5uZWxTZWxlY3RvcjogJ0cnfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgIC8vIFNoYWRvdyBmaWx0ZXJcbiAgICAgICAgICAgICAgICB7dGFnOiAnZmlsdGVyJywgaWQ6ICdzaGFkb3cnLCB4OiAnLTUwJScsIHk6ICctNTAlJywgd2lkdGg6ICcyMDAlJywgaGVpZ2h0OiAnMjAwJScsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdmZURyb3BTaGFkb3cnLCBkeDogJy02JywgZHk6ICctNicsIHN0ZERldmlhdGlvbjogT1VURVJfU0hBRE9XX0JMVVIgLyA4LCBmbG9vZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKSd9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmVEcm9wU2hhZG93JywgZHg6ICc2JywgIGR5OiAnNicsICBzdGREZXZpYXRpb246IE9VVEVSX1NIQURPV19CTFVSIC8gOCwgZmxvb2RDb2xvcjogJ3JnYmEoMCwwLDAsMC4yKSd9XG4gICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgLy8gQW5pbWF0ZWQgcmVjdGFuZ3VsYXIgbWFzayB3aXRoIGJvcmRlciByYWRpdXNcbiAgICAgICAgICAgICAgICB7dGFnOiAnbWFzaycsIGlkOiAnZ2xhc3MtbWFzaycsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdyZWN0JywgZmxhZzogJ21hc2stcmVjdCcsIHdpZHRoOiBNQVNLX1dJRFRILCBoZWlnaHQ6IE1BU0tfSEVJR0hULCByeDogTUFTS19SQURJVVMsIHJ5OiBNQVNLX1JBRElVUywgZmlsbDogJ3doaXRlJ31cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAvLyBCYWNrZ3JvdW5kIGltYWdlIDFcbiAgICAgICAgICAgIHt0YWc6ICdpbWFnZScsIGhyZWY6IEJBQ0tHUk9VTkRfSU1BR0VfUEFUSCwgd2lkdGg6ICcxOTIwJywgaGVpZ2h0OiAnMTA4MCcsIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0J30sXG4gICAgICAgICAgICAvLyBFeGFtcGxlIGZvcmVpZ25PYmplY3Qgd2l0aCBhIGJ1dHRvblxuICAgICAgICAgICAge3RhZzogJ2ZvcmVpZ25PYmplY3QnLCB4OiAnNjAwJywgeTogJzIwMCcsIHdpZHRoOiAnNzIwJywgaGVpZ2h0OiAnNDAwJywgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgaHRtbDogJ0NsaWNrIE1lJ31cbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgLy8gTWFza2VkIGJhY2tncm91bmQgaW1hZ2VcbiAgICAgICAgICAgIHt0YWc6ICdpbWFnZScsIGhyZWY6IEJBQ0tHUk9VTkRfSU1BR0VfUEFUSCwgd2lkdGg6ICcxOTIwJywgaGVpZ2h0OiAnMTA4MCcsIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JywgZmlsdGVyOiAndXJsKCNnbGFzcy1kaXN0b3J0aW9uKScsIG1hc2s6ICd1cmwoI2dsYXNzLW1hc2spJ30sXG4gICAgICAgICAgICAvLyBNYXNrZWQgZm9yZWlnbk9iamVjdCB3aXRoIGEgYnV0dG9uXG4gICAgICAgICAgICB7dGFnOiAnZm9yZWlnbk9iamVjdCcsIHg6ICc2MDAnLCB5OiAnMjAwJywgd2lkdGg6ICc3MjAnLCBoZWlnaHQ6ICc0MDAnLCBmaWx0ZXI6ICd1cmwoI2dsYXNzLWRpc3RvcnRpb24pJywgbWFzazogJ3VybCgjZ2xhc3MtbWFzayknLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnY3VzdG9tLWJ1dHRvbiddLCBodG1sOiAnQ2xpY2sgTWUnfVxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAvLyBTaGFkb3cgcmVjdGFuZ2xlIGJlaGluZCB0aGUgZ2xhc3MgYXJlYVxuICAgICAgICAgICAge3RhZzogJ3JlY3QnLCBmbGFnOiAnc2hhZG93LXJlY3QnLCB3aWR0aDogTUFTS19XSURUSCwgaGVpZ2h0OiBNQVNLX0hFSUdIVCwgcng6IE1BU0tfUkFESVVTLCByeTogTUFTS19SQURJVVMsIGZpbGw6ICd3aGl0ZScsIG9wYWNpdHk6ICcwLjInLCBmaWx0ZXI6ICd1cmwoI3NoYWRvdyknfVxuICAgICAgICBdfVxuICAgIH1cblxuICAgIC8vIFByaXZhdGUgaW5zdGFuY2UgcHJvcGVydGllcyBmb3IgYW5pbWF0aW9uIHN0YXRlXG4gICAgI2FuaW1hdGlvbkZyYW1lSWQgPSAwO1xuICAgICNhbmltYXRpb25Qb3MgICAgID0geyB4OiAwLCB5OiAwLCBkeDogU1BFRURfWCwgZHk6IFNQRUVEX1kgfTtcbiAgICAjbGFzdFRpbWUgICAgICAgICA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5hZGREb21MaXN0ZW5lcnMoe1xuICAgICAgICAgICAgY2xpY2sgICA6IG1lLm9uQ3VzdG9tQnV0dG9uQ2xpY2ssXG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2N1c3RvbS1idXR0b24nLFxuICAgICAgICAgICAgc2NvcGUgICA6IG1lXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWUuI2FuaW1hdGlvbkZyYW1lSWQgPSBnbG9iYWxUaGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5hbmltYXRlLmJpbmQobWUpKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLiNhbmltYXRpb25GcmFtZUlkKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZShtZS4jYW5pbWF0aW9uRnJhbWVJZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWFza1Bvc2l0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1hc2tQb3NpdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAge3Zkb219ICAgICA9IG1lLFxuICAgICAgICAgICAgbWFza1JlY3QgICA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnbWFzay1yZWN0JyksXG4gICAgICAgICAgICBzaGFkb3dSZWN0ID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdzaGFkb3ctcmVjdCcpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWFza1JlY3QsICAgdmFsdWUpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHNoYWRvd1JlY3QsIHZhbHVlKTtcblxuICAgICAgICBtZS51cGRhdGUoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBhbmltYXRpb24gbG9vcCBtZXRob2QuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG5vd1xuICAgICAqL1xuICAgIGFuaW1hdGUobm93KSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGVsYXBzZWQgPSAobm93IC0gbWUuI2xhc3RUaW1lKSAvIDEwMDA7IC8vIHNlY29uZHNcblxuICAgICAgICBtZS4jbGFzdFRpbWUgPSBub3c7XG5cbiAgICAgICAgbGV0IHsgeCwgeSwgZHgsIGR5IH0gPSBtZS4jYW5pbWF0aW9uUG9zO1xuICAgICAgICB4ICs9IGR4ICogZWxhcHNlZDtcbiAgICAgICAgeSArPSBkeSAqIGVsYXBzZWQ7XG5cbiAgICAgICAgLy8gQm91bmNlIG9mZiBlZGdlc1xuICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgZHggKj0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHggPiBWSUVXQk9YX1dJRFRIIC0gTUFTS19XSURUSCkge1xuICAgICAgICAgICAgeCA9IFZJRVdCT1hfV0lEVEggLSBNQVNLX1dJRFRIO1xuICAgICAgICAgICAgZHggKj0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPCAwKSB7XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIGR5ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5ID4gVklFV0JPWF9IRUlHSFQgLSBNQVNLX0hFSUdIVCkge1xuICAgICAgICAgICAgeSA9IFZJRVdCT1hfSEVJR0hUIC0gTUFTS19IRUlHSFQ7XG4gICAgICAgICAgICBkeSAqPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLiNhbmltYXRpb25Qb3MgPSB7IHgsIHksIGR4LCBkeSB9O1xuXG4gICAgICAgIG1lLm1hc2tQb3NpdGlvbj0geyB4LCB5IH07XG5cbiAgICAgICAgbWUuI2FuaW1hdGlvbkZyYW1lSWQgPSBzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5hbmltYXRlLmJpbmQobWUpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25DdXN0b21CdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIE5lby5NYWluLmFsZXJ0KHttZXNzYWdlOiAnQnV0dG9uIGNsaWNrZWQhJ30pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhHbGFzc0NvbXBvbmVudCk7XG4iLCJpbXBvcnQgQmFzZVZpZXdwb3J0ICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuaW1wb3J0IEdsYXNzQ29tcG9uZW50IGZyb20gJy4vR2xhc3NDb21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTXlBcHAudmlldy5WaWV3cG9ydFxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBWaWV3cG9ydCBleHRlbmRzIEJhc2VWaWV3cG9ydCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdNeUFwcC52aWV3LlZpZXdwb3J0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdNeUFwcC52aWV3LlZpZXdwb3J0JyxcbiAgICAgICAgLypcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOidmaXQnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdmaXQnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBpdGVtc1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IEdsYXNzQ29tcG9uZW50XG4gICAgICAgIH1dXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhWaWV3cG9ydCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=