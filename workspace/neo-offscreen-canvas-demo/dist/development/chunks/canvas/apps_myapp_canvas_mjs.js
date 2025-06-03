"use strict";
(self["webpackChunkneo_offscreen_canvas_demo"] = self["webpackChunkneo_offscreen_canvas_demo"] || []).push([["apps_myapp_canvas_mjs"],{

/***/ "./apps/myapp/canvas.mjs":
/*!*******************************!*\
  !*** ./apps/myapp/canvas.mjs ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onStart: () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _canvas_Helper_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/Helper.mjs */ "./apps/myapp/canvas/Helper.mjs");


const onStart = () => {
    console.log(_canvas_Helper_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);
}


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
class Helper extends _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

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
                me.updateSize(me.canvasSize)
            }
        })
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

            me.stopAnimation = false
        }
    }

    /**
     * Triggered after the stopAnimation config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     */
    afterSetStopAnimation(value, oldValue) {
        if (!value && Neo.isBoolean(oldValue)) {
            this.render()
        }
    }

    /**
     * @param {Number} count
     */
    changeItemsAmount(count) {
        this.itemsAmount = count
    }

    /**
     * @param {Boolean} enable
     */
    enableAnimation(enable) {
        this.stopAnimation = !enable
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
        }))
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

        me.series = series
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
            })
        }

        return Promise.resolve()
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

            requestAnimationFrame(me.render.bind(me))
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
            !silent && me.render()
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

            webGl.viewport(0, 0, webGl.canvas.width, webGl.canvas.height)
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Helper));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NhbnZhcy9hcHBzX215YXBwX2NhbnZhc19tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7O0FBRWxDO0FBQ1AsZ0JBQWdCLDBEQUFNO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7O0FDSm1FOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtFQUFJO0FBQ3pCO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhPQUF5RDtBQUMzRSxrQkFBa0IsOE9BQXlEO0FBQzNFLGtCQUFrQixvUEFBMkQ7QUFDN0Usa0JBQWtCLGtSQUFxRTtBQUN2RixrQkFBa0IsMFNBQTZFO0FBQy9GLGtCQUFrQiw0T0FBMkQ7QUFDN0Usa0JBQWtCLDhPQUF5RDtBQUMzRSxrQkFBa0IsOE9BQXlEO0FBQzNFLGtCQUFrQixrUkFBcUU7QUFDdkYsa0JBQWtCLHNoQkFBc0U7QUFDeEYsa0JBQWtCLGliQUFnRjtBQUNsRyxrQkFBa0Isa1JBQXNFO0FBQ3hGLGtCQUFrQiwrckJBQXNFO0FBQ3hGLGtCQUFrQixvbkJBQW9FO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxzQkFBc0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9hcHBzL215YXBwL2NhbnZhcy5tanMiLCJ3ZWJwYWNrOi8vbmVvLW9mZnNjcmVlbi1jYW52YXMtZGVtby8uL2FwcHMvbXlhcHAvY2FudmFzL0hlbHBlci5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlbHBlciBmcm9tICcuL2NhbnZhcy9IZWxwZXIubWpzJztcblxuZXhwb3J0IGNvbnN0IG9uU3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coSGVscGVyKTtcbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTXlBcHAuY2FudmFzLkhlbHBlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBIZWxwZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J015QXBwLmNhbnZhcy5IZWxwZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ015QXBwLmNhbnZhcy5IZWxwZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpdGVtc0Ftb3VudF89MTAwMDBcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zQW1vdW50XzogMTAwMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdjaGFuZ2VJdGVtc0Ftb3VudCcsXG4gICAgICAgICAgICAgICAgJ2VuYWJsZUFuaW1hdGlvbicsXG4gICAgICAgICAgICAgICAgJ3JlbmRlclNlcmllcycsXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZVNpemUnXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzdG9wQW5pbWF0aW9uXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcEFuaW1hdGlvbl86IGZhbHNlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGNhbnZhc0lkPW51bGxcbiAgICAgKi9cbiAgICBjYW52YXNJZCA9IG51bGxcbiAgICAvKipcbiAgICAgKiBDb250YWlucyBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXNcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNhbnZhc1NpemU9bnVsbFxuICAgICAqL1xuICAgIGNhbnZhc1NpemUgPSBudWxsXG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gZGF0YT1udWxsXG4gICAgICovXG4gICAgZGF0YSA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBzZXJpZXM9bnVsbFxuICAgICAqL1xuICAgIHNlcmllcyA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSB4U2NhbGU9bnVsbFxuICAgICAqL1xuICAgIHhTY2FsZSA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSB5U2NhbGU9bnVsbFxuICAgICAqL1xuICAgIHlTY2FsZSA9IG51bGxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUucHJvbWlzZUltcG9ydEQzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS54U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTUsIDVdKTtcbiAgICAgICAgICAgIG1lLnlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFstNSwgNV0pO1xuXG4gICAgICAgICAgICBtZS5nZW5lcmF0ZURhdGEoKTtcbiAgICAgICAgICAgIG1lLmdlbmVyYXRlU2VyaWVzKCk7XG5cbiAgICAgICAgICAgIC8vIEluIGNhc2UgdGhlIGQzIHNjcmlwdHMgZ2V0IGxvYWRlZCBhZnRlciB0aGUgY2FudmFzIG93bmVyc2hpcCBnb3QgdHJhbnNmZXJyZWQsXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHRyaWdnZXIgdGhlIHByZXZpb3VzbHkgcHJldmVudGVkIGxvZ2ljXG4gICAgICAgICAgICBpZiAobWUuY2FudmFzSWQpIHtcbiAgICAgICAgICAgICAgICBtZS5yZW5kZXJTZXJpZXMobWUuY2FudmFzSWQpO1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVNpemUobWUuY2FudmFzU2l6ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGl0ZW1zQW1vdW50IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SXRlbXNBbW91bnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiBOZW8uaXNOdW1iZXIob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS5zdG9wQW5pbWF0aW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgbWUuZ2VuZXJhdGVEYXRhKCk7XG4gICAgICAgICAgICBtZS5nZW5lcmF0ZVNlcmllcygpO1xuICAgICAgICAgICAgbWUucmVuZGVyU2VyaWVzKG1lLmNhbnZhc0lkLCB0cnVlKTtcblxuICAgICAgICAgICAgbWUuc3RvcEFuaW1hdGlvbiA9IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHN0b3BBbmltYXRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldFN0b3BBbmltYXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgTmVvLmlzQm9vbGVhbihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICAgICAqL1xuICAgIGNoYW5nZUl0ZW1zQW1vdW50KGNvdW50KSB7XG4gICAgICAgIHRoaXMuaXRlbXNBbW91bnQgPSBjb3VudFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5hYmxlXG4gICAgICovXG4gICAgZW5hYmxlQW5pbWF0aW9uKGVuYWJsZSkge1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSAhZW5hYmxlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZW5lcmF0ZURhdGEoKSB7XG4gICAgICAgIGxldCByYW5kb21Ob3JtYWwgICAgPSBkMy5yYW5kb21Ob3JtYWwoMCwgMSksXG4gICAgICAgICAgICByYW5kb21Mb2dOb3JtYWwgPSBkMy5yYW5kb21Mb2dOb3JtYWwoKTtcblxuICAgICAgICB0aGlzLmRhdGEgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLml0ZW1zQW1vdW50IH0sICgpID0+ICh7XG4gICAgICAgICAgICB4ICAgOiByYW5kb21Ob3JtYWwoKSxcbiAgICAgICAgICAgIHkgICA6IHJhbmRvbU5vcm1hbCgpLFxuICAgICAgICAgICAgc2l6ZTogcmFuZG9tTG9nTm9ybWFsKCkgKiAxMFxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdlbmVyYXRlU2VyaWVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb2xvclNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUFjY2VudCksXG5cbiAgICAgICAgc2VyaWVzID0gZmNcbiAgICAgICAgICAgIC5zZXJpZXNXZWJnbFBvaW50KClcbiAgICAgICAgICAgIC54U2NhbGUobWUueFNjYWxlKVxuICAgICAgICAgICAgLnlTY2FsZShtZS55U2NhbGUpXG4gICAgICAgICAgICAuY3Jvc3NWYWx1ZShkID0+IGQueClcbiAgICAgICAgICAgIC5tYWluVmFsdWUoZCA9PiBkLnkpXG4gICAgICAgICAgICAuc2l6ZShkID0+IGQuc2l6ZSlcbiAgICAgICAgICAgIC5lcXVhbHMocHJldmlvdXNEYXRhID0+IHByZXZpb3VzRGF0YS5sZW5ndGggPiAwKSxcblxuICAgICAgICB3ZWJnbENvbG9yID0gY29sb3IgPT4ge1xuICAgICAgICAgICAgbGV0IHsgciwgZywgYiwgb3BhY2l0eSB9ID0gZDMuY29sb3IoY29sb3IpLnJnYigpO1xuICAgICAgICAgICAgcmV0dXJuIFtyIC8gMjU1LCBnIC8gMjU1LCBiIC8gMjU1LCBvcGFjaXR5XTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaWxsQ29sb3IgPSBmY1xuICAgICAgICAgICAgLndlYmdsRmlsbENvbG9yKClcbiAgICAgICAgICAgIC52YWx1ZSgoZCwgaSkgPT4gd2ViZ2xDb2xvcihjb2xvclNjYWxlKGkpKSlcbiAgICAgICAgICAgIC5kYXRhKG1lLmRhdGEpO1xuXG4gICAgICAgIHNlcmllcy5kZWNvcmF0ZShwcm9ncmFtID0+IGZpbGxDb2xvcihwcm9ncmFtKSk7XG5cbiAgICAgICAgbWUuc2VyaWVzID0gc2VyaWVzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHluYW1pY2FsbHkgaW1wb3J0IGFsbCBkMyByZWxhdGVkIGRlcGVuZGVuY2llc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHJlc29sdmU+fVxuICAgICAqL1xuICAgIGFzeW5jIHByb21pc2VJbXBvcnREMygpIHtcbiAgICAgICAgbGV0IGltcG9ydHMgPSBbXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9kaXN0L2QzLWFycmF5LmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9kaXN0L2QzLWNvbG9yLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvZGlzdC9kMy1mb3JtYXQuanMnKSxcbiAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL2Rpc3QvZDMtaW50ZXJwb2xhdGUuanMnKSxcbiAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlLWNocm9tYXRpYy9kaXN0L2QzLXNjYWxlLWNocm9tYXRpYy5qcycpLFxuICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtcmFuZG9tL2Rpc3QvZDMtcmFuZG9tLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9kaXN0L2QzLXNjYWxlLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9kaXN0L2QzLXNoYXBlLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9kaXN0L2QzLXRpbWUtZm9ybWF0LmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZDNmYy9kM2ZjLWV4dGVudC9idWlsZC9kM2ZjLWV4dGVudC5qcycpLFxuICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGQzZmMvZDNmYy1yYW5kb20tZGF0YS9idWlsZC9kM2ZjLXJhbmRvbS1kYXRhLmpzJyksXG4gICAgICAgICAgICAoKSA9PiBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZDNmYy9kM2ZjLXJlYmluZC9idWlsZC9kM2ZjLXJlYmluZC5qcycpLFxuICAgICAgICAgICAgKCkgPT4gaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGQzZmMvZDNmYy1zZXJpZXMvYnVpbGQvZDNmYy1zZXJpZXMuanMnKSxcbiAgICAgICAgICAgICgpID0+IGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkM2ZjL2QzZmMtd2ViZ2wvYnVpbGQvZDNmYy13ZWJnbC5qcycpXG4gICAgICAgIF0sXG5cbiAgICAgICAgbW9kdWxlcyA9IFtdLFxuICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgbGVuICAgICA9IGltcG9ydHMubGVuZ3RoLFxuICAgICAgICBpdGVtO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW0gPSBhd2FpdCBpbXBvcnRzW2ldKCk7XG4gICAgICAgICAgICBtb2R1bGVzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCdWc6IEluc2lkZSB0aGUgd2VicGFjayBiYXNlZCBkaXN0IGVudnMsIGQzZmMgd2lsbCBjb3B5IGl0cyBmdW5jdGlvbiB0byB0aGUgbW9kdWxlLFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHB1dHRpbmcgdGhlbSBpbnRvIHRoZSBnbG9iYWwgZmMgbmFtZXNwYWNlLlxuICAgICAgICAvLyBUaGlzIGhhY2sgcmVzb2x2ZXMgaXQuXG4gICAgICAgIGlmICghc2VsZi5mYykge1xuICAgICAgICAgICAgc2VsZi5mYyA9IHt9O1xuXG4gICAgICAgICAgICBtb2R1bGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihzZWxmLmZjLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGVhc2UgPSA1ICogKDAuNTEgKyAwLjQ5ICogTWF0aC5zaW4oRGF0ZS5ub3coKSAvIDFlMykpO1xuXG4gICAgICAgIGlmICghbWUuc3RvcEFuaW1hdGlvbikge1xuICAgICAgICAgICAgbWUueFNjYWxlLmRvbWFpbihbLWVhc2UsIGVhc2VdKTtcbiAgICAgICAgICAgIG1lLnlTY2FsZS5kb21haW4oWy1lYXNlLCBlYXNlXSk7XG5cbiAgICAgICAgICAgIG1lLnNlcmllcyhtZS5kYXRhKTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlci5iaW5kKG1lKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYW52YXNJZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50PWZhbHNlXG4gICAgICovXG4gICAgcmVuZGVyU2VyaWVzKGNhbnZhc0lkLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHdlYkdsO1xuXG4gICAgICAgIG1lLmNhbnZhc0lkID0gY2FudmFzSWQ7XG5cbiAgICAgICAgaWYgKG1lLnNlcmllcykge1xuICAgICAgICAgICAgd2ViR2wgPSBOZW8uY3VycmVudFdvcmtlci5tYXBbY2FudmFzSWRdLmdldENvbnRleHQoJ3dlYmdsJyk7XG5cbiAgICAgICAgICAgIG1lLnNlcmllcy5jb250ZXh0KHdlYkdsKTtcbiAgICAgICAgICAgICFzaWxlbnQgJiYgbWUucmVuZGVyKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuaGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEud2lkdGhcbiAgICAgKi9cbiAgICB1cGRhdGVTaXplKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5jYW52YXNTaXplID0gZGF0YTtcblxuICAgICAgICBpZiAobWUuc2VyaWVzKSB7XG4gICAgICAgICAgICBsZXQgd2ViR2wgPSBtZS5zZXJpZXMuY29udGV4dCgpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHdlYkdsLmNhbnZhcywge1xuICAgICAgICAgICAgICAgIGhlaWdodDogZGF0YS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGggOiBkYXRhLndpZHRoXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd2ViR2wudmlld3BvcnQoMCwgMCwgd2ViR2wuY2FudmFzLndpZHRoLCB3ZWJHbC5jYW52YXMuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhIZWxwZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9