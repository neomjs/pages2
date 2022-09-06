"use strict";
(self["webpackChunkmainapp"] = self["webpackChunkmainapp"] || []).push([["apps_mainapp_canvas_mjs"],{

/***/ "./apps/mainapp/canvas.mjs":
/*!*********************************!*\
  !*** ./apps/mainapp/canvas.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _canvas_Helper_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/Helper.mjs */ "./apps/mainapp/canvas/Helper.mjs");


const onStart = () => {
    console.log(_canvas_Helper_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);
};


/***/ }),

/***/ "./apps/mainapp/canvas/Helper.mjs":
/*!****************************************!*\
  !*** ./apps/mainapp/canvas/Helper.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class MainApp.canvas.Helper
 * @extends Neo.core.Base
 * @singleton
 */
class Helper extends _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
         * @member {String} className='MainApp.canvas.Helper'
         * @protected
         */
        className: 'MainApp.canvas.Helper',
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
                'transferNode',
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
    construct(config) {
        super.construct(config);

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
            () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3-array_src_bisect_js-node_modules_d3-array_src_quantile_js-node_module-0b4c78"), __webpack_require__.e("vendors-node_modules_d3-array_src_index_js"), __webpack_require__.e("node_modules_d3fc_d3fc-extent_build_d3fc-extent_js-node_modules_d3-array_src_bisector_js-node-5c9b40")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-extent/build/d3fc-extent.js */ "./node_modules/@d3fc/d3fc-extent/build/d3fc-extent.js", 19)),
            () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-random-data_build_d3fc-random-data_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-random-data/build/d3fc-random-data.js */ "./node_modules/@d3fc/d3fc-random-data/build/d3fc-random-data.js", 19)),
            () => __webpack_require__.e(/*! import() */ "node_modules_d3fc_d3fc-rebind_build_d3fc-rebind_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-rebind/build/d3fc-rebind.js */ "./node_modules/@d3fc/d3fc-rebind/build/d3fc-rebind.js", 19)),
            () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3-array_src_bisect_js-node_modules_d3-array_src_quantile_js-node_module-0b4c78"), __webpack_require__.e("vendors-node_modules_d3-scale_src_index_js-node_modules_d3-shape_src_index_js"), __webpack_require__.e("vendors-node_modules_d3-array_src_index_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-series_build_d3fc-series_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-series/build/d3fc-series.js */ "./node_modules/@d3fc/d3fc-series/build/d3fc-series.js", 19)),
            () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3-array_src_bisect_js-node_modules_d3-array_src_quantile_js-node_module-0b4c78"), __webpack_require__.e("vendors-node_modules_d3-scale_src_index_js-node_modules_d3-shape_src_index_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-webgl_build_d3fc-webgl_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-webgl/build/d3fc-webgl.js */ "./node_modules/@d3fc/d3fc-webgl/build/d3fc-webgl.js", 19))
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
    render(force=false) {
        let me = this,
        ease;

        if (force || !me.stopAnimation) {
            ease = 5 * (0.51 + 0.49 * Math.sin(Date.now() / 1e3));

            me.xScale.domain([-ease, ease]);
            me.yScale.domain([-ease, ease]);

            me.series(me.data);

            // sadly not available
            // requestAnimationFrame(me.render.bind(me));
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

            // enforced rendering to apply the state when stopAnimation is present
            setTimeout(() => {
                me.render(true);

                // poor hack to fake requestAnimationFrame inside a SharedWorker
                !silent && setInterval(me.render.bind(me), 1000 / 60);
            }, 1000 / 60);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NhbnZhcy9hcHBzX21haW5hcHBfY2FudmFzX21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5Qzs7QUFFbEM7QUFDUCxnQkFBZ0IsMERBQU07QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbUU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0VBQUk7QUFDekI7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhPQUF5RDtBQUMzRSxrQkFBa0IsOE9BQXlEO0FBQzNFLGtCQUFrQixvUEFBMkQ7QUFDN0Usa0JBQWtCLGtSQUFxRTtBQUN2RixrQkFBa0IsMFNBQTZFO0FBQy9GLGtCQUFrQiw0T0FBMkQ7QUFDN0Usa0JBQWtCLDhPQUF5RDtBQUMzRSxrQkFBa0IsOE9BQXlEO0FBQzNFLGtCQUFrQixrUkFBcUU7QUFDdkYsa0JBQWtCLHNoQkFBc0U7QUFDeEYsa0JBQWtCLGliQUFnRjtBQUNsRyxrQkFBa0Isa1JBQXNFO0FBQ3hGLGtCQUFrQiwrckJBQXNFO0FBQ3hGLGtCQUFrQixvbkJBQW9FO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbmFwcC8uL2FwcHMvbWFpbmFwcC9jYW52YXMubWpzIiwid2VicGFjazovL21haW5hcHAvLi9hcHBzL21haW5hcHAvY2FudmFzL0hlbHBlci5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlbHBlciBmcm9tICcuL2NhbnZhcy9IZWxwZXIubWpzJztcblxuZXhwb3J0IGNvbnN0IG9uU3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coSGVscGVyKTtcbn07XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE1haW5BcHAuY2FudmFzLkhlbHBlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBIZWxwZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY2FudmFzSWQ9bnVsbFxuICAgICAqL1xuICAgIGNhbnZhc0lkID0gbnVsbFxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGhlaWdodCBhbmQgd2lkdGggcHJvcGVydGllc1xuICAgICAqIEBtZW1iZXIge09iamVjdH0gY2FudmFzU2l6ZT1udWxsXG4gICAgICovXG4gICAgY2FudmFzU2l6ZSA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBkYXRhPW51bGxcbiAgICAgKi9cbiAgICBkYXRhID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IHNlcmllcz1udWxsXG4gICAgICovXG4gICAgc2VyaWVzID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IHhTY2FsZT1udWxsXG4gICAgICovXG4gICAgeFNjYWxlID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IHlTY2FsZT1udWxsXG4gICAgICovXG4gICAgeVNjYWxlID0gbnVsbFxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J01haW5BcHAuY2FudmFzLkhlbHBlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTWFpbkFwcC5jYW52YXMuSGVscGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaXRlbXNBbW91bnRfPTEwMDAwXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtc0Ftb3VudF86IDEwMDAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAnY2hhbmdlSXRlbXNBbW91bnQnLFxuICAgICAgICAgICAgICAgICdlbmFibGVBbmltYXRpb24nLFxuICAgICAgICAgICAgICAgICdyZW5kZXJTZXJpZXMnLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zlck5vZGUnLFxuICAgICAgICAgICAgICAgICd1cGRhdGVTaXplJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc3RvcEFuaW1hdGlvbl89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHN0b3BBbmltYXRpb25fOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnByb21pc2VJbXBvcnREMygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUueFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWy01LCA1XSk7XG4gICAgICAgICAgICBtZS55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTUsIDVdKTtcblxuICAgICAgICAgICAgbWUuZ2VuZXJhdGVEYXRhKCk7XG4gICAgICAgICAgICBtZS5nZW5lcmF0ZVNlcmllcygpO1xuXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHRoZSBkMyBzY3JpcHRzIGdldCBsb2FkZWQgYWZ0ZXIgdGhlIGNhbnZhcyBvd25lcnNoaXAgZ290IHRyYW5zZmVycmVkLFxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIHRoZSBwcmV2aW91c2x5IHByZXZlbnRlZCBsb2dpY1xuICAgICAgICAgICAgaWYgKG1lLmNhbnZhc0lkKSB7XG4gICAgICAgICAgICAgICAgbWUucmVuZGVyU2VyaWVzKG1lLmNhbnZhc0lkKTtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVTaXplKG1lLmNhbnZhc1NpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGl0ZW1zQW1vdW50IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SXRlbXNBbW91bnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiBOZW8uaXNOdW1iZXIob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS5zdG9wQW5pbWF0aW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgbWUuZ2VuZXJhdGVEYXRhKCk7XG4gICAgICAgICAgICBtZS5nZW5lcmF0ZVNlcmllcygpO1xuICAgICAgICAgICAgbWUucmVuZGVyU2VyaWVzKG1lLmNhbnZhc0lkLCB0cnVlKTtcblxuICAgICAgICAgICAgbWUuc3RvcEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzdG9wQW5pbWF0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTdG9wQW5pbWF0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlICYmIE5lby5pc0Jvb2xlYW4ob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50XG4gICAgICovXG4gICAgY2hhbmdlSXRlbXNBbW91bnQoY291bnQpIHtcbiAgICAgICAgdGhpcy5pdGVtc0Ftb3VudCA9IGNvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5hYmxlXG4gICAgICovXG4gICAgZW5hYmxlQW5pbWF0aW9uKGVuYWJsZSkge1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSAhZW5hYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2VuZXJhdGVEYXRhKCkge1xuICAgICAgICBsZXQgcmFuZG9tTm9ybWFsICAgID0gZDMucmFuZG9tTm9ybWFsKDAsIDEpLFxuICAgICAgICAgICAgcmFuZG9tTG9nTm9ybWFsID0gZDMucmFuZG9tTG9nTm9ybWFsKCk7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5pdGVtc0Ftb3VudCB9LCAoKSA9PiAoe1xuICAgICAgICAgICAgeCAgIDogcmFuZG9tTm9ybWFsKCksXG4gICAgICAgICAgICB5ICAgOiByYW5kb21Ob3JtYWwoKSxcbiAgICAgICAgICAgIHNpemU6IHJhbmRvbUxvZ05vcm1hbCgpICogMTBcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2VuZXJhdGVTZXJpZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbG9yU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQWNjZW50KSxcblxuICAgICAgICBzZXJpZXMgPSBmY1xuICAgICAgICAgICAgLnNlcmllc1dlYmdsUG9pbnQoKVxuICAgICAgICAgICAgLnhTY2FsZShtZS54U2NhbGUpXG4gICAgICAgICAgICAueVNjYWxlKG1lLnlTY2FsZSlcbiAgICAgICAgICAgIC5jcm9zc1ZhbHVlKGQgPT4gZC54KVxuICAgICAgICAgICAgLm1haW5WYWx1ZShkID0+IGQueSlcbiAgICAgICAgICAgIC5zaXplKGQgPT4gZC5zaXplKVxuICAgICAgICAgICAgLmVxdWFscyhwcmV2aW91c0RhdGEgPT4gcHJldmlvdXNEYXRhLmxlbmd0aCA+IDApLFxuXG4gICAgICAgIHdlYmdsQ29sb3IgPSBjb2xvciA9PiB7XG4gICAgICAgICAgICBsZXQgeyByLCBnLCBiLCBvcGFjaXR5IH0gPSBkMy5jb2xvcihjb2xvcikucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTUsIG9wYWNpdHldO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGxDb2xvciA9IGZjXG4gICAgICAgICAgICAud2ViZ2xGaWxsQ29sb3IoKVxuICAgICAgICAgICAgLnZhbHVlKChkLCBpKSA9PiB3ZWJnbENvbG9yKGNvbG9yU2NhbGUoaSkpKVxuICAgICAgICAgICAgLmRhdGEobWUuZGF0YSk7XG5cbiAgICAgICAgc2VyaWVzLmRlY29yYXRlKHByb2dyYW0gPT4gZmlsbENvbG9yKHByb2dyYW0pKTtcblxuICAgICAgICBtZS5zZXJpZXMgPSBzZXJpZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHluYW1pY2FsbHkgaW1wb3J0IGFsbCBkMyByZWxhdGVkIGRlcGVuZGVuY2llc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHJlc29sdmU+fVxuICAgICAqL1xuICAgIGFzeW5jIHByb21pc2VJbXBvcnREMygpIHtcbiAgICAgICAgbGV0IGltcG9ydHMgPSBbXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9kaXN0L2QzLWFycmF5LmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9kaXN0L2QzLWNvbG9yLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvZGlzdC9kMy1mb3JtYXQuanMnKSxcbiAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL2Rpc3QvZDMtaW50ZXJwb2xhdGUuanMnKSxcbiAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlLWNocm9tYXRpYy9kaXN0L2QzLXNjYWxlLWNocm9tYXRpYy5qcycpLFxuICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtcmFuZG9tL2Rpc3QvZDMtcmFuZG9tLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9kaXN0L2QzLXNjYWxlLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9kaXN0L2QzLXNoYXBlLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9kaXN0L2QzLXRpbWUtZm9ybWF0LmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZDNmYy9kM2ZjLWV4dGVudC9idWlsZC9kM2ZjLWV4dGVudC5qcycpLFxuICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGQzZmMvZDNmYy1yYW5kb20tZGF0YS9idWlsZC9kM2ZjLXJhbmRvbS1kYXRhLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZDNmYy9kM2ZjLXJlYmluZC9idWlsZC9kM2ZjLXJlYmluZC5qcycpLFxuICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGQzZmMvZDNmYy1zZXJpZXMvYnVpbGQvZDNmYy1zZXJpZXMuanMnKSxcbiAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkM2ZjL2QzZmMtd2ViZ2wvYnVpbGQvZDNmYy13ZWJnbC5qcycpXG4gICAgICAgIF0sXG5cbiAgICAgICAgbW9kdWxlcyA9IFtdLFxuICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgbGVuICAgICA9IGltcG9ydHMubGVuZ3RoLFxuICAgICAgICBpdGVtO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW0gPSBhd2FpdCBpbXBvcnRzW2ldKCk7XG4gICAgICAgICAgICBtb2R1bGVzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCdWc6IEluc2lkZSB0aGUgd2VicGFjayBiYXNlZCBkaXN0IGVudnMsIGQzZmMgd2lsbCBjb3B5IGl0cyBmdW5jdGlvbiB0byB0aGUgbW9kdWxlLFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHB1dHRpbmcgdGhlbSBpbnRvIHRoZSBnbG9iYWwgZmMgbmFtZXNwYWNlLlxuICAgICAgICAvLyBUaGlzIGhhY2sgcmVzb2x2ZXMgaXQuXG4gICAgICAgIGlmICghc2VsZi5mYykge1xuICAgICAgICAgICAgc2VsZi5mYyA9IHt9O1xuXG4gICAgICAgICAgICBtb2R1bGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmZjLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlbmRlcihmb3JjZT1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICBlYXNlO1xuXG4gICAgICAgIGlmIChmb3JjZSB8fCAhbWUuc3RvcEFuaW1hdGlvbikge1xuICAgICAgICAgICAgZWFzZSA9IDUgKiAoMC41MSArIDAuNDkgKiBNYXRoLnNpbihEYXRlLm5vdygpIC8gMWUzKSk7XG5cbiAgICAgICAgICAgIG1lLnhTY2FsZS5kb21haW4oWy1lYXNlLCBlYXNlXSk7XG4gICAgICAgICAgICBtZS55U2NhbGUuZG9tYWluKFstZWFzZSwgZWFzZV0pO1xuXG4gICAgICAgICAgICBtZS5zZXJpZXMobWUuZGF0YSk7XG5cbiAgICAgICAgICAgIC8vIHNhZGx5IG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXIuYmluZChtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhbnZhc0lkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaWxlbnQ9ZmFsc2VcbiAgICAgKi9cbiAgICByZW5kZXJTZXJpZXMoY2FudmFzSWQsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgd2ViR2w7XG5cbiAgICAgICAgbWUuY2FudmFzSWQgPSBjYW52YXNJZDtcblxuICAgICAgICBpZiAobWUuc2VyaWVzKSB7XG4gICAgICAgICAgICB3ZWJHbCA9IE5lby5jdXJyZW50V29ya2VyLm1hcFtjYW52YXNJZF0uZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgICAgICAgICAgbWUuc2VyaWVzLmNvbnRleHQod2ViR2wpO1xuXG4gICAgICAgICAgICAvLyBlbmZvcmNlZCByZW5kZXJpbmcgdG8gYXBwbHkgdGhlIHN0YXRlIHdoZW4gc3RvcEFuaW1hdGlvbiBpcyBwcmVzZW50XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5yZW5kZXIodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBwb29yIGhhY2sgdG8gZmFrZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaW5zaWRlIGEgU2hhcmVkV29ya2VyXG4gICAgICAgICAgICAgICAgIXNpbGVudCAmJiBzZXRJbnRlcnZhbChtZS5yZW5kZXIuYmluZChtZSksIDEwMDAgLyA2MCk7XG4gICAgICAgICAgICB9LCAxMDAwIC8gNjApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5oZWlnaHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS53aWR0aFxuICAgICAqL1xuICAgIHVwZGF0ZVNpemUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmNhbnZhc1NpemUgPSBkYXRhO1xuXG4gICAgICAgIGlmIChtZS5zZXJpZXMpIHtcbiAgICAgICAgICAgIGxldCB3ZWJHbCA9IG1lLnNlcmllcy5jb250ZXh0KCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24od2ViR2wuY2FudmFzLCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBkYXRhLmhlaWdodCxcbiAgICAgICAgICAgICAgICB3aWR0aCA6IGRhdGEud2lkdGhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB3ZWJHbC52aWV3cG9ydCgwLCAwLCB3ZWJHbC5jYW52YXMud2lkdGgsIHdlYkdsLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxwZXIpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEhlbHBlcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==