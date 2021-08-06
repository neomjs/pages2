"use strict";
(self["webpackChunkneo_offscreen_canvas_demo"] = self["webpackChunkneo_offscreen_canvas_demo"] || []).push([["apps_myapp_canvas_mjs"],{

/***/ "./apps/myapp/canvas.mjs":
/*!*******************************!*\
  !*** ./apps/myapp/canvas.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _canvas_Helper_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/Helper.mjs */ "./apps/myapp/canvas/Helper.mjs");


const onStart = () => {
    console.log(_canvas_Helper_mjs__WEBPACK_IMPORTED_MODULE_0__.default);
};




/***/ }),

/***/ "./apps/myapp/canvas/Helper.mjs":
/*!**************************************!*\
  !*** ./apps/myapp/canvas/Helper.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class MyApp.canvas.Helper
 * @extends Neo.core.Base
 * @singleton
 */
class Helper extends _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    /**
     * @member {String|null} canvasId=null
     */
    canvasId = null
    /**
     * Contains height and width properties
     * @member {Object} canvasSize=null
     */
    canvasSize = null
    /**
     * @member {Object[]|null} data=null
     */
    data = null
    /**
     * @member {Function|null} series=null
     */
    series = null
    /**
     * @member {Function|null} xScale=null
     */
    xScale = null
    /**
     * @member {Function|null} yScale=null
     */
    yScale = null

    static getConfig() {return {
        /**
         * @member {String} className='MyApp.canvas.Helper'
         * @protected
         */
        className: 'MyApp.canvas.Helper',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} itemsAmount_=10000
         */
        itemsAmount_: 10000,
        /**
         * Remote method access for other workers
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'changeItemsAmount',
                'enableAnimation',
                'renderSeries',
                'updateSize'
            ]
        },
        /**
         * @member {Boolean} stopAnimation_=false
         */
        stopAnimation_: false
    }}

    /**
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.promiseImportD3().then(() => {
            me.xScale = d3.scaleLinear().domain([-5, 5]);
            me.yScale = d3.scaleLinear().domain([-5, 5]);

            me.generateData();
            me.generateSeries();

            // In case the d3 scripts get loaded after the canvas ownership got transferred,
            // we need to trigger the previously prevented logic
            if (me.canvasId) {
                me.renderSeries(me.canvasId);
                me.updateSize(me.canvasSize);
            }
        });
    }

    /**
     * Triggered after the itemsAmount config got changed
     * @param {Number} value
     * @param {Number} oldValue
     */
    afterSetItemsAmount(value, oldValue) {
        if (value && Neo.isNumber(oldValue)) {
            let me = this;

            me.stopAnimation = true;

            me.generateData();
            me.generateSeries();
            me.renderSeries(me.canvasId, true);

            me.stopAnimation = false;
        }
    }

    /**
     * Triggered after the stopAnimation config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     */
    afterSetStopAnimation(value, oldValue) {
        if (!value && Neo.isBoolean(oldValue)) {
            this.render();
        }
    }

    /**
     * @param {Number} count
     */
    changeItemsAmount(count) {
        this.itemsAmount = count;
    }

    /**
     * @param {Boolean} enable
     */
    enableAnimation(enable) {
        this.stopAnimation = !enable;
    }

    /**
     *
     */
    generateData() {
        let randomNormal    = d3.randomNormal(0, 1),
            randomLogNormal = d3.randomLogNormal();

        this.data = Array.from({ length: this.itemsAmount }, () => ({
            x   : randomNormal(),
            y   : randomNormal(),
            size: randomLogNormal() * 10
        }));
    }

    /**
     *
     */
    generateSeries() {
        let me         = this,
            colorScale = d3.scaleOrdinal(d3.schemeAccent),

            series = fc
                .seriesWebglPoint()
                .xScale(me.xScale)
                .yScale(me.yScale)
                .crossValue(d => d.x)
                .mainValue(d => d.y)
                .size(d => d.size)
                .equals(previousData => previousData.length > 0),

            webglColor = color => {
                let { r, g, b, opacity } = d3.color(color).rgb();
                return [r / 255, g / 255, b / 255, opacity];
            },

            fillColor = fc
                .webglFillColor()
                .value((d, i) => webglColor(colorScale(i)))
                .data(me.data);

        series.decorate(program => fillColor(program));

        me.series = series;
    }

    /**
     * Dynamically import all d3 related dependencies
     * @returns {Promise<resolve>}
     */
    async promiseImportD3() {
        let imports = [
                () => __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-array_dist_d3-array_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-array/dist/d3-array.js */ "./node_modules/d3-array/dist/d3-array.js")),
                () => __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-color_dist_d3-color_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-color/dist/d3-color.js */ "./node_modules/d3-color/dist/d3-color.js")),
                () => __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-format_dist_d3-format_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-format/dist/d3-format.js */ "./node_modules/d3-format/dist/d3-format.js")),
                () => __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-interpolate_dist_d3-interpolate_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-interpolate/dist/d3-interpolate.js */ "./node_modules/d3-interpolate/dist/d3-interpolate.js")),
                () => __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-scale-chromatic_dist_d3-scale-chromatic_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.js */ "./node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.js")),
                () => __webpack_require__.e(/*! import() */ "node_modules_d3-random_dist_d3-random_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-random/dist/d3-random.js */ "./node_modules/d3-random/dist/d3-random.js")),
                () => __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-scale_dist_d3-scale_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-scale/dist/d3-scale.js */ "./node_modules/d3-scale/dist/d3-scale.js")),
                () => __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-shape_dist_d3-shape_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-shape/dist/d3-shape.js */ "./node_modules/d3-shape/dist/d3-shape.js")),
                () => __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-time-format_dist_d3-time-format_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-time-format/dist/d3-time-format.js */ "./node_modules/d3-time-format/dist/d3-time-format.js")),
                () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3-array_src_index_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-extent_build_d3fc-extent_js-node_modules_d3-array_src_bisect_j-dbc016")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-extent/build/d3fc-extent.js */ "./node_modules/@d3fc/d3fc-extent/build/d3fc-extent.js", 19)),
                () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-random-data_build_d3fc-random-data_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-random-data/build/d3fc-random-data.js */ "./node_modules/@d3fc/d3fc-random-data/build/d3fc-random-data.js", 19)),
                () => __webpack_require__.e(/*! import() */ "node_modules_d3fc_d3fc-rebind_build_d3fc-rebind_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-rebind/build/d3fc-rebind.js */ "./node_modules/@d3fc/d3fc-rebind/build/d3fc-rebind.js", 19)),
                () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3-scale_src_index_js-node_modules_d3-shape_src_index_js"), __webpack_require__.e("vendors-node_modules_d3-array_src_index_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-series_build_d3fc-series_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-series/build/d3fc-series.js */ "./node_modules/@d3fc/d3fc-series/build/d3fc-series.js", 19)),
                () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3-scale_src_index_js-node_modules_d3-shape_src_index_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-webgl_build_d3fc-webgl_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-webgl/build/d3fc-webgl.js */ "./node_modules/@d3fc/d3fc-webgl/build/d3fc-webgl.js", 19))
            ],

            modules = [],
            i       = 0,
            len     = imports.length,
            item;

        for (; i < len; i++) {
            item = await imports[i]();
            modules.push(item);
        }

        // Bug: Inside the webpack based dist envs, d3fc will copy its function to the module,
        // instead of putting them into the global fc namespace.
        // This hack resolves it.
        if (!self.fc) {
            self.fc = {};

            modules.forEach(item => {
                if (Object.keys(item).length > 0) {
                    Object.assign(self.fc, item);
                }
            });
        }

        return Promise.resolve();
    }

    /**
     *
     */
    render() {
        let me   = this,
            ease = 5 * (0.51 + 0.49 * Math.sin(Date.now() / 1e3));

        if (!me.stopAnimation) {
            me.xScale.domain([-ease, ease]);
            me.yScale.domain([-ease, ease]);

            me.series(me.data);

            requestAnimationFrame(me.render.bind(me));
        }
    }

    /**
     * @param {String} canvasId
     * @param {Boolean} silent=false
     */
    renderSeries(canvasId, silent=false) {
        let me = this,
            webGl;

        me.canvasId = canvasId;

        if (me.series) {
            webGl = Neo.currentWorker.map[canvasId].getContext('webgl');

            me.series.context(webGl);
            !silent && me.render();
        }
    }

    /**
     * @param {Object} data
     * @param {Number} data.height
     * @param {Number} data.width
     */
    updateSize(data) {
        let me = this;

        me.canvasSize = data;

        if (me.series) {
            let webGl = me.series.context();

            Object.assign(webGl.canvas, {
                height: data.height,
                width : data.width
            });

            webGl.viewport(0, 0, webGl.canvas.width, webGl.canvas.height);
        }
    }
}

Neo.applyClassConfig(Helper);

let instance = Neo.create(Helper);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NhbnZhcy9hcHBzX215YXBwX2NhbnZhc19tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7O0FBRXpDO0FBQ0EsZ0JBQWdCLHVEQUFNO0FBQ3RCOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0RUFBSTtBQUN6QjtBQUNBLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhPQUF5RDtBQUMvRSxzQkFBc0IsOE9BQXlEO0FBQy9FLHNCQUFzQixvUEFBMkQ7QUFDakYsc0JBQXNCLGtSQUFxRTtBQUMzRixzQkFBc0IsMFNBQTZFO0FBQ25HLHNCQUFzQiw0T0FBMkQ7QUFDakYsc0JBQXNCLDhPQUF5RDtBQUMvRSxzQkFBc0IsOE9BQXlEO0FBQy9FLHNCQUFzQixrUkFBcUU7QUFDM0Ysc0JBQXNCLHVaQUFzRTtBQUM1RixzQkFBc0IsaWJBQWdGO0FBQ3RHLHNCQUFzQixrUkFBc0U7QUFDNUYsc0JBQXNCLGdrQkFBc0U7QUFDNUYsc0JBQXNCLHFmQUFvRTtBQUMxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL2FwcHMvbXlhcHAvY2FudmFzLm1qcyIsIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vYXBwcy9teWFwcC9jYW52YXMvSGVscGVyLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVscGVyIGZyb20gJy4vY2FudmFzL0hlbHBlci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEhlbHBlcik7XG59O1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE15QXBwLmNhbnZhcy5IZWxwZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSGVscGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGNhbnZhc0lkPW51bGxcbiAgICAgKi9cbiAgICBjYW52YXNJZCA9IG51bGxcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXNcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNhbnZhc1NpemU9bnVsbFxuICAgICAqL1xuICAgIGNhbnZhc1NpemUgPSBudWxsXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gZGF0YT1udWxsXG4gICAgICovXG4gICAgZGF0YSA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBzZXJpZXM9bnVsbFxuICAgICAqL1xuICAgIHNlcmllcyA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSB4U2NhbGU9bnVsbFxuICAgICAqL1xuICAgIHhTY2FsZSA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSB5U2NhbGU9bnVsbFxuICAgICAqL1xuICAgIHlTY2FsZSA9IG51bGxcblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdNeUFwcC5jYW52YXMuSGVscGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdNeUFwcC5jYW52YXMuSGVscGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaXRlbXNBbW91bnRfPTEwMDAwXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtc0Ftb3VudF86IDEwMDAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAnY2hhbmdlSXRlbXNBbW91bnQnLFxuICAgICAgICAgICAgICAgICdlbmFibGVBbmltYXRpb24nLFxuICAgICAgICAgICAgICAgICdyZW5kZXJTZXJpZXMnLFxuICAgICAgICAgICAgICAgICd1cGRhdGVTaXplJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc3RvcEFuaW1hdGlvbl89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHN0b3BBbmltYXRpb25fOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5wcm9taXNlSW1wb3J0RDMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLnhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFstNSwgNV0pO1xuICAgICAgICAgICAgbWUueVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWy01LCA1XSk7XG5cbiAgICAgICAgICAgIG1lLmdlbmVyYXRlRGF0YSgpO1xuICAgICAgICAgICAgbWUuZ2VuZXJhdGVTZXJpZXMoKTtcblxuICAgICAgICAgICAgLy8gSW4gY2FzZSB0aGUgZDMgc2NyaXB0cyBnZXQgbG9hZGVkIGFmdGVyIHRoZSBjYW52YXMgb3duZXJzaGlwIGdvdCB0cmFuc2ZlcnJlZCxcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gdHJpZ2dlciB0aGUgcHJldmlvdXNseSBwcmV2ZW50ZWQgbG9naWNcbiAgICAgICAgICAgIGlmIChtZS5jYW52YXNJZCkge1xuICAgICAgICAgICAgICAgIG1lLnJlbmRlclNlcmllcyhtZS5jYW52YXNJZCk7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlU2l6ZShtZS5jYW52YXNTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpdGVtc0Ftb3VudCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldEl0ZW1zQW1vdW50KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgTmVvLmlzTnVtYmVyKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgbWUuc3RvcEFuaW1hdGlvbiA9IHRydWU7XG5cbiAgICAgICAgICAgIG1lLmdlbmVyYXRlRGF0YSgpO1xuICAgICAgICAgICAgbWUuZ2VuZXJhdGVTZXJpZXMoKTtcbiAgICAgICAgICAgIG1lLnJlbmRlclNlcmllcyhtZS5jYW52YXNJZCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIG1lLnN0b3BBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc3RvcEFuaW1hdGlvbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0U3RvcEFuaW1hdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiBOZW8uaXNCb29sZWFuKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICAgICAqL1xuICAgIGNoYW5nZUl0ZW1zQW1vdW50KGNvdW50KSB7XG4gICAgICAgIHRoaXMuaXRlbXNBbW91bnQgPSBjb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGVuYWJsZVxuICAgICAqL1xuICAgIGVuYWJsZUFuaW1hdGlvbihlbmFibGUpIHtcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0aW9uID0gIWVuYWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdlbmVyYXRlRGF0YSgpIHtcbiAgICAgICAgbGV0IHJhbmRvbU5vcm1hbCAgICA9IGQzLnJhbmRvbU5vcm1hbCgwLCAxKSxcbiAgICAgICAgICAgIHJhbmRvbUxvZ05vcm1hbCA9IGQzLnJhbmRvbUxvZ05vcm1hbCgpO1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuaXRlbXNBbW91bnQgfSwgKCkgPT4gKHtcbiAgICAgICAgICAgIHggICA6IHJhbmRvbU5vcm1hbCgpLFxuICAgICAgICAgICAgeSAgIDogcmFuZG9tTm9ybWFsKCksXG4gICAgICAgICAgICBzaXplOiByYW5kb21Mb2dOb3JtYWwoKSAqIDEwXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdlbmVyYXRlU2VyaWVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb2xvclNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUFjY2VudCksXG5cbiAgICAgICAgICAgIHNlcmllcyA9IGZjXG4gICAgICAgICAgICAgICAgLnNlcmllc1dlYmdsUG9pbnQoKVxuICAgICAgICAgICAgICAgIC54U2NhbGUobWUueFNjYWxlKVxuICAgICAgICAgICAgICAgIC55U2NhbGUobWUueVNjYWxlKVxuICAgICAgICAgICAgICAgIC5jcm9zc1ZhbHVlKGQgPT4gZC54KVxuICAgICAgICAgICAgICAgIC5tYWluVmFsdWUoZCA9PiBkLnkpXG4gICAgICAgICAgICAgICAgLnNpemUoZCA9PiBkLnNpemUpXG4gICAgICAgICAgICAgICAgLmVxdWFscyhwcmV2aW91c0RhdGEgPT4gcHJldmlvdXNEYXRhLmxlbmd0aCA+IDApLFxuXG4gICAgICAgICAgICB3ZWJnbENvbG9yID0gY29sb3IgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB7IHIsIGcsIGIsIG9wYWNpdHkgfSA9IGQzLmNvbG9yKGNvbG9yKS5yZ2IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTUsIG9wYWNpdHldO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmlsbENvbG9yID0gZmNcbiAgICAgICAgICAgICAgICAud2ViZ2xGaWxsQ29sb3IoKVxuICAgICAgICAgICAgICAgIC52YWx1ZSgoZCwgaSkgPT4gd2ViZ2xDb2xvcihjb2xvclNjYWxlKGkpKSlcbiAgICAgICAgICAgICAgICAuZGF0YShtZS5kYXRhKTtcblxuICAgICAgICBzZXJpZXMuZGVjb3JhdGUocHJvZ3JhbSA9PiBmaWxsQ29sb3IocHJvZ3JhbSkpO1xuXG4gICAgICAgIG1lLnNlcmllcyA9IHNlcmllcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEeW5hbWljYWxseSBpbXBvcnQgYWxsIGQzIHJlbGF0ZWQgZGVwZW5kZW5jaWVzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8cmVzb2x2ZT59XG4gICAgICovXG4gICAgYXN5bmMgcHJvbWlzZUltcG9ydEQzKCkge1xuICAgICAgICBsZXQgaW1wb3J0cyA9IFtcbiAgICAgICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9kaXN0L2QzLWFycmF5LmpzJyksXG4gICAgICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtY29sb3IvZGlzdC9kMy1jb2xvci5qcycpLFxuICAgICAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9kaXN0L2QzLWZvcm1hdC5qcycpLFxuICAgICAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL2Rpc3QvZDMtaW50ZXJwb2xhdGUuanMnKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS1jaHJvbWF0aWMvZGlzdC9kMy1zY2FsZS1jaHJvbWF0aWMuanMnKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1yYW5kb20vZGlzdC9kMy1yYW5kb20uanMnKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9kaXN0L2QzLXNjYWxlLmpzJyksXG4gICAgICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtc2hhcGUvZGlzdC9kMy1zaGFwZS5qcycpLFxuICAgICAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXRpbWUtZm9ybWF0L2Rpc3QvZDMtdGltZS1mb3JtYXQuanMnKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZDNmYy9kM2ZjLWV4dGVudC9idWlsZC9kM2ZjLWV4dGVudC5qcycpLFxuICAgICAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkM2ZjL2QzZmMtcmFuZG9tLWRhdGEvYnVpbGQvZDNmYy1yYW5kb20tZGF0YS5qcycpLFxuICAgICAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkM2ZjL2QzZmMtcmViaW5kL2J1aWxkL2QzZmMtcmViaW5kLmpzJyksXG4gICAgICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGQzZmMvZDNmYy1zZXJpZXMvYnVpbGQvZDNmYy1zZXJpZXMuanMnKSxcbiAgICAgICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZDNmYy9kM2ZjLXdlYmdsL2J1aWxkL2QzZmMtd2ViZ2wuanMnKVxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgbW9kdWxlcyA9IFtdLFxuICAgICAgICAgICAgaSAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgID0gaW1wb3J0cy5sZW5ndGgsXG4gICAgICAgICAgICBpdGVtO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW0gPSBhd2FpdCBpbXBvcnRzW2ldKCk7XG4gICAgICAgICAgICBtb2R1bGVzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCdWc6IEluc2lkZSB0aGUgd2VicGFjayBiYXNlZCBkaXN0IGVudnMsIGQzZmMgd2lsbCBjb3B5IGl0cyBmdW5jdGlvbiB0byB0aGUgbW9kdWxlLFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHB1dHRpbmcgdGhlbSBpbnRvIHRoZSBnbG9iYWwgZmMgbmFtZXNwYWNlLlxuICAgICAgICAvLyBUaGlzIGhhY2sgcmVzb2x2ZXMgaXQuXG4gICAgICAgIGlmICghc2VsZi5mYykge1xuICAgICAgICAgICAgc2VsZi5mYyA9IHt9O1xuXG4gICAgICAgICAgICBtb2R1bGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmZjLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgZWFzZSA9IDUgKiAoMC41MSArIDAuNDkgKiBNYXRoLnNpbihEYXRlLm5vdygpIC8gMWUzKSk7XG5cbiAgICAgICAgaWYgKCFtZS5zdG9wQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBtZS54U2NhbGUuZG9tYWluKFstZWFzZSwgZWFzZV0pO1xuICAgICAgICAgICAgbWUueVNjYWxlLmRvbWFpbihbLWVhc2UsIGVhc2VdKTtcblxuICAgICAgICAgICAgbWUuc2VyaWVzKG1lLmRhdGEpO1xuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobWUucmVuZGVyLmJpbmQobWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYW52YXNJZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50PWZhbHNlXG4gICAgICovXG4gICAgcmVuZGVyU2VyaWVzKGNhbnZhc0lkLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHdlYkdsO1xuXG4gICAgICAgIG1lLmNhbnZhc0lkID0gY2FudmFzSWQ7XG5cbiAgICAgICAgaWYgKG1lLnNlcmllcykge1xuICAgICAgICAgICAgd2ViR2wgPSBOZW8uY3VycmVudFdvcmtlci5tYXBbY2FudmFzSWRdLmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICAgICAgICAgIG1lLnNlcmllcy5jb250ZXh0KHdlYkdsKTtcbiAgICAgICAgICAgICFzaWxlbnQgJiYgbWUucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmhlaWdodFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLndpZHRoXG4gICAgICovXG4gICAgdXBkYXRlU2l6ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuY2FudmFzU2l6ZSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKG1lLnNlcmllcykge1xuICAgICAgICAgICAgbGV0IHdlYkdsID0gbWUuc2VyaWVzLmNvbnRleHQoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih3ZWJHbC5jYW52YXMsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGRhdGEuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHdpZHRoIDogZGF0YS53aWR0aFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHdlYkdsLnZpZXdwb3J0KDAsIDAsIHdlYkdsLmNhbnZhcy53aWR0aCwgd2ViR2wuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbHBlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSGVscGVyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9