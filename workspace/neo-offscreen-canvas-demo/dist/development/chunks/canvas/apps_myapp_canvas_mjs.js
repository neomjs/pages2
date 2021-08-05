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
            __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-array_dist_d3-array_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-array/dist/d3-array.js */ "./node_modules/d3-array/dist/d3-array.js")),
            __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-color_dist_d3-color_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-color/dist/d3-color.js */ "./node_modules/d3-color/dist/d3-color.js")),
            __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-format_dist_d3-format_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-format/dist/d3-format.js */ "./node_modules/d3-format/dist/d3-format.js")),
            __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-interpolate_dist_d3-interpolate_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-interpolate/dist/d3-interpolate.js */ "./node_modules/d3-interpolate/dist/d3-interpolate.js")),
            __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-scale-chromatic_dist_d3-scale-chromatic_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.js */ "./node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.js")),
            __webpack_require__.e(/*! import() */ "node_modules_d3-random_dist_d3-random_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-random/dist/d3-random.js */ "./node_modules/d3-random/dist/d3-random.js")),
            __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-scale_dist_d3-scale_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-scale/dist/d3-scale.js */ "./node_modules/d3-scale/dist/d3-scale.js")),
            __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-shape_dist_d3-shape_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-shape/dist/d3-shape.js */ "./node_modules/d3-shape/dist/d3-shape.js")),
            __webpack_require__.e(/*! import() */ "vendors-node_modules_d3-time-format_dist_d3-time-format_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../../node_modules/d3-time-format/dist/d3-time-format.js */ "./node_modules/d3-time-format/dist/d3-time-format.js")),
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3-array_src_index_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-extent_build_d3fc-extent_js-node_modules_d3-array_src_bisect_j-dbc016")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-extent/build/d3fc-extent.js */ "./node_modules/@d3fc/d3fc-extent/build/d3fc-extent.js", 19)),
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-random-data_build_d3fc-random-data_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-random-data/build/d3fc-random-data.js */ "./node_modules/@d3fc/d3fc-random-data/build/d3fc-random-data.js", 19)),
            __webpack_require__.e(/*! import() */ "node_modules_d3fc_d3fc-rebind_build_d3fc-rebind_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-rebind/build/d3fc-rebind.js */ "./node_modules/@d3fc/d3fc-rebind/build/d3fc-rebind.js", 19)),
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3-scale_src_index_js-node_modules_d3-shape_src_index_js"), __webpack_require__.e("vendors-node_modules_d3-array_src_index_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-series_build_d3fc-series_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-series/build/d3fc-series.js */ "./node_modules/@d3fc/d3fc-series/build/d3fc-series.js", 19)),
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3fc_d3fc-rebind_index_js-node_modules_d3-time_src_ticks_js"), __webpack_require__.e("vendors-node_modules_d3-scale_src_index_js-node_modules_d3-shape_src_index_js"), __webpack_require__.e("vendors-node_modules_d3fc_d3fc-webgl_build_d3fc-webgl_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! ../../../node_modules/@d3fc/d3fc-webgl/build/d3fc-webgl.js */ "./node_modules/@d3fc/d3fc-webgl/build/d3fc-webgl.js", 19))
        ],

        modules = [],
        item;

        for (const request of imports) {
            item = await request;
            modules.push(item);
        }

        // Bug: Inside the webpack based dist envs, 3dfc will copy its function to the module,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NhbnZhcy9hcHBzX215YXBwX2NhbnZhc19tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7O0FBRXpDO0FBQ0EsZ0JBQWdCLHVEQUFNO0FBQ3RCOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0RUFBSTtBQUN6QjtBQUNBLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLDBCQUEwQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4T0FBeUQ7QUFDckUsWUFBWSw4T0FBeUQ7QUFDckUsWUFBWSxvUEFBMkQ7QUFDdkUsWUFBWSxrUkFBcUU7QUFDakYsWUFBWSwwU0FBNkU7QUFDekYsWUFBWSw0T0FBMkQ7QUFDdkUsWUFBWSw4T0FBeUQ7QUFDckUsWUFBWSw4T0FBeUQ7QUFDckUsWUFBWSxrUkFBcUU7QUFDakYsWUFBWSx1WkFBc0U7QUFDbEYsWUFBWSxpYkFBZ0Y7QUFDNUYsWUFBWSxrUkFBc0U7QUFDbEYsWUFBWSxna0JBQXNFO0FBQ2xGLFlBQVkscWZBQW9FO0FBQ2hGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8tb2Zmc2NyZWVuLWNhbnZhcy1kZW1vLy4vYXBwcy9teWFwcC9jYW52YXMubWpzIiwid2VicGFjazovL25lby1vZmZzY3JlZW4tY2FudmFzLWRlbW8vLi9hcHBzL215YXBwL2NhbnZhcy9IZWxwZXIubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxwZXIgZnJvbSAnLi9jYW52YXMvSGVscGVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coSGVscGVyKTtcbn07XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTXlBcHAuY2FudmFzLkhlbHBlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBIZWxwZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY2FudmFzSWQ9bnVsbFxuICAgICAqL1xuICAgIGNhbnZhc0lkID0gbnVsbFxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGhlaWdodCBhbmQgd2lkdGggcHJvcGVydGllc1xuICAgICAqIEBtZW1iZXIge09iamVjdH0gY2FudmFzU2l6ZT1udWxsXG4gICAgICovXG4gICAgY2FudmFzU2l6ZSA9IG51bGxcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBkYXRhPW51bGxcbiAgICAgKi9cbiAgICBkYXRhID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IHNlcmllcz1udWxsXG4gICAgICovXG4gICAgc2VyaWVzID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IHhTY2FsZT1udWxsXG4gICAgICovXG4gICAgeFNjYWxlID0gbnVsbFxuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IHlTY2FsZT1udWxsXG4gICAgICovXG4gICAgeVNjYWxlID0gbnVsbFxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J015QXBwLmNhbnZhcy5IZWxwZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ015QXBwLmNhbnZhcy5IZWxwZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpdGVtc0Ftb3VudF89MTAwMDBcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zQW1vdW50XzogMTAwMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogW1xuICAgICAgICAgICAgICAgICdjaGFuZ2VJdGVtc0Ftb3VudCcsXG4gICAgICAgICAgICAgICAgJ2VuYWJsZUFuaW1hdGlvbicsXG4gICAgICAgICAgICAgICAgJ3JlbmRlclNlcmllcycsXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZVNpemUnXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzdG9wQW5pbWF0aW9uXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcEFuaW1hdGlvbl86IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnByb21pc2VJbXBvcnREMygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUueFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWy01LCA1XSk7XG4gICAgICAgICAgICBtZS55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbLTUsIDVdKTtcblxuICAgICAgICAgICAgbWUuZ2VuZXJhdGVEYXRhKCk7XG4gICAgICAgICAgICBtZS5nZW5lcmF0ZVNlcmllcygpO1xuXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHRoZSBkMyBzY3JpcHRzIGdldCBsb2FkZWQgYWZ0ZXIgdGhlIGNhbnZhcyBvd25lcnNoaXAgZ290IHRyYW5zZmVycmVkLFxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIHRoZSBwcmV2aW91c2x5IHByZXZlbnRlZCBsb2dpY1xuICAgICAgICAgICAgaWYgKG1lLmNhbnZhc0lkKSB7XG4gICAgICAgICAgICAgICAgbWUucmVuZGVyU2VyaWVzKG1lLmNhbnZhc0lkKTtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVTaXplKG1lLmNhbnZhc1NpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGl0ZW1zQW1vdW50IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0SXRlbXNBbW91bnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiBOZW8uaXNOdW1iZXIob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS5zdG9wQW5pbWF0aW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgbWUuZ2VuZXJhdGVEYXRhKCk7XG4gICAgICAgICAgICBtZS5nZW5lcmF0ZVNlcmllcygpO1xuICAgICAgICAgICAgbWUucmVuZGVyU2VyaWVzKG1lLmNhbnZhc0lkLCB0cnVlKTtcblxuICAgICAgICAgICAgbWUuc3RvcEFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzdG9wQW5pbWF0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTdG9wQW5pbWF0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlICYmIE5lby5pc0Jvb2xlYW4ob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50XG4gICAgICovXG4gICAgY2hhbmdlSXRlbXNBbW91bnQoY291bnQpIHtcbiAgICAgICAgdGhpcy5pdGVtc0Ftb3VudCA9IGNvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5hYmxlXG4gICAgICovXG4gICAgZW5hYmxlQW5pbWF0aW9uKGVuYWJsZSkge1xuICAgICAgICB0aGlzLnN0b3BBbmltYXRpb24gPSAhZW5hYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2VuZXJhdGVEYXRhKCkge1xuICAgICAgICBsZXQgcmFuZG9tTm9ybWFsICAgID0gZDMucmFuZG9tTm9ybWFsKDAsIDEpLFxuICAgICAgICAgICAgcmFuZG9tTG9nTm9ybWFsID0gZDMucmFuZG9tTG9nTm9ybWFsKCk7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5pdGVtc0Ftb3VudCB9LCAoKSA9PiAoe1xuICAgICAgICAgICAgeCAgIDogcmFuZG9tTm9ybWFsKCksXG4gICAgICAgICAgICB5ICAgOiByYW5kb21Ob3JtYWwoKSxcbiAgICAgICAgICAgIHNpemU6IHJhbmRvbUxvZ05vcm1hbCgpICogMTBcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2VuZXJhdGVTZXJpZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbG9yU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQWNjZW50KSxcblxuICAgICAgICBzZXJpZXMgPSBmY1xuICAgICAgICAgICAgLnNlcmllc1dlYmdsUG9pbnQoKVxuICAgICAgICAgICAgLnhTY2FsZShtZS54U2NhbGUpXG4gICAgICAgICAgICAueVNjYWxlKG1lLnlTY2FsZSlcbiAgICAgICAgICAgIC5jcm9zc1ZhbHVlKGQgPT4gZC54KVxuICAgICAgICAgICAgLm1haW5WYWx1ZShkID0+IGQueSlcbiAgICAgICAgICAgIC5zaXplKGQgPT4gZC5zaXplKVxuICAgICAgICAgICAgLmVxdWFscyhwcmV2aW91c0RhdGEgPT4gcHJldmlvdXNEYXRhLmxlbmd0aCA+IDApLFxuXG4gICAgICAgIHdlYmdsQ29sb3IgPSBjb2xvciA9PiB7XG4gICAgICAgICAgICBsZXQgeyByLCBnLCBiLCBvcGFjaXR5IH0gPSBkMy5jb2xvcihjb2xvcikucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTUsIG9wYWNpdHldO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGxDb2xvciA9IGZjXG4gICAgICAgICAgICAud2ViZ2xGaWxsQ29sb3IoKVxuICAgICAgICAgICAgLnZhbHVlKChkLCBpKSA9PiB3ZWJnbENvbG9yKGNvbG9yU2NhbGUoaSkpKVxuICAgICAgICAgICAgLmRhdGEobWUuZGF0YSk7XG5cbiAgICAgICAgc2VyaWVzLmRlY29yYXRlKHByb2dyYW0gPT4gZmlsbENvbG9yKHByb2dyYW0pKTtcblxuICAgICAgICBtZS5zZXJpZXMgPSBzZXJpZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRHluYW1pY2FsbHkgaW1wb3J0IGFsbCBkMyByZWxhdGVkIGRlcGVuZGVuY2llc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHJlc29sdmU+fVxuICAgICAqL1xuICAgIGFzeW5jIHByb21pc2VJbXBvcnREMygpIHtcbiAgICAgICAgbGV0IGltcG9ydHMgPSBbXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9kaXN0L2QzLWFycmF5LmpzJyksXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1jb2xvci9kaXN0L2QzLWNvbG9yLmpzJyksXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvZGlzdC9kMy1mb3JtYXQuanMnKSxcbiAgICAgICAgICAgIGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL2Rpc3QvZDMtaW50ZXJwb2xhdGUuanMnKSxcbiAgICAgICAgICAgIGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2QzLXNjYWxlLWNocm9tYXRpYy9kaXN0L2QzLXNjYWxlLWNocm9tYXRpYy5qcycpLFxuICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvZDMtcmFuZG9tL2Rpc3QvZDMtcmFuZG9tLmpzJyksXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9kaXN0L2QzLXNjYWxlLmpzJyksXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy1zaGFwZS9kaXN0L2QzLXNoYXBlLmpzJyksXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9kaXN0L2QzLXRpbWUtZm9ybWF0LmpzJyksXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZDNmYy9kM2ZjLWV4dGVudC9idWlsZC9kM2ZjLWV4dGVudC5qcycpLFxuICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGQzZmMvZDNmYy1yYW5kb20tZGF0YS9idWlsZC9kM2ZjLXJhbmRvbS1kYXRhLmpzJyksXG4gICAgICAgICAgICBpbXBvcnQoJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZDNmYy9kM2ZjLXJlYmluZC9idWlsZC9kM2ZjLXJlYmluZC5qcycpLFxuICAgICAgICAgICAgaW1wb3J0KCcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGQzZmMvZDNmYy1zZXJpZXMvYnVpbGQvZDNmYy1zZXJpZXMuanMnKSxcbiAgICAgICAgICAgIGltcG9ydCgnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkM2ZjL2QzZmMtd2ViZ2wvYnVpbGQvZDNmYy13ZWJnbC5qcycpXG4gICAgICAgIF0sXG5cbiAgICAgICAgbW9kdWxlcyA9IFtdLFxuICAgICAgICBpdGVtO1xuXG4gICAgICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiBpbXBvcnRzKSB7XG4gICAgICAgICAgICBpdGVtID0gYXdhaXQgcmVxdWVzdDtcbiAgICAgICAgICAgIG1vZHVsZXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJ1ZzogSW5zaWRlIHRoZSB3ZWJwYWNrIGJhc2VkIGRpc3QgZW52cywgM2RmYyB3aWxsIGNvcHkgaXRzIGZ1bmN0aW9uIHRvIHRoZSBtb2R1bGUsXG4gICAgICAgIC8vIGluc3RlYWQgb2YgcHV0dGluZyB0aGVtIGludG8gdGhlIGdsb2JhbCBmYyBuYW1lc3BhY2UuXG4gICAgICAgIC8vIFRoaXMgaGFjayByZXNvbHZlcyBpdC5cbiAgICAgICAgaWYgKCFzZWxmLmZjKSB7XG4gICAgICAgICAgICBzZWxmLmZjID0ge307XG5cbiAgICAgICAgICAgIG1vZHVsZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYuZmMsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBlYXNlID0gNSAqICgwLjUxICsgMC40OSAqIE1hdGguc2luKERhdGUubm93KCkgLyAxZTMpKTtcblxuICAgICAgICBpZiAoIW1lLnN0b3BBbmltYXRpb24pIHtcbiAgICAgICAgICAgIG1lLnhTY2FsZS5kb21haW4oWy1lYXNlLCBlYXNlXSk7XG4gICAgICAgICAgICBtZS55U2NhbGUuZG9tYWluKFstZWFzZSwgZWFzZV0pO1xuXG4gICAgICAgICAgICBtZS5zZXJpZXMobWUuZGF0YSk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXIuYmluZChtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhbnZhc0lkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaWxlbnQ9ZmFsc2VcbiAgICAgKi9cbiAgICByZW5kZXJTZXJpZXMoY2FudmFzSWQsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgd2ViR2w7XG5cbiAgICAgICAgbWUuY2FudmFzSWQgPSBjYW52YXNJZDtcblxuICAgICAgICBpZiAobWUuc2VyaWVzKSB7XG4gICAgICAgICAgICB3ZWJHbCA9IE5lby5jdXJyZW50V29ya2VyLm1hcFtjYW52YXNJZF0uZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxuICAgICAgICAgICAgbWUuc2VyaWVzLmNvbnRleHQod2ViR2wpO1xuICAgICAgICAgICAgIXNpbGVudCAmJiBtZS5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEuaGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEud2lkdGhcbiAgICAgKi9cbiAgICB1cGRhdGVTaXplKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5jYW52YXNTaXplID0gZGF0YTtcblxuICAgICAgICBpZiAobWUuc2VyaWVzKSB7XG4gICAgICAgICAgICBsZXQgd2ViR2wgPSBtZS5zZXJpZXMuY29udGV4dCgpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHdlYkdsLmNhbnZhcywge1xuICAgICAgICAgICAgICAgIGhlaWdodDogZGF0YS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgd2lkdGggOiBkYXRhLndpZHRoXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd2ViR2wudmlld3BvcnQoMCwgMCwgd2ViR2wuY2FudmFzLndpZHRoLCB3ZWJHbC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVscGVyKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShIZWxwZXIpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=