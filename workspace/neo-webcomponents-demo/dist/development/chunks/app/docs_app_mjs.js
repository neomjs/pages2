"use strict";
(self["webpackChunkneo_webcomponents_demo"] = self["webpackChunkneo_webcomponents_demo"] || []).push([["docs_app_mjs"],{

/***/ "./docs/app.mjs":
/*!**********************!*\
  !*** ./docs/app.mjs ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/view/MainContainer.mjs */ "./docs/app/view/MainContainer.mjs");


const onStart = () => Neo.app({
    mainView: _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
    name    : 'Docs'
});




/***/ }),

/***/ "./docs/app/model/Api.mjs":
/*!********************************!*\
  !*** ./docs/app/model/Api.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Api
 * @extends Neo.data.Model
 */
class Api extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.model.Api'
         * @protected
         */
        className: 'Docs.app.model.Api',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'className',
            type: 'String'
        }, {
            name: 'collapsed',
            type: 'Boolean'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'path',
            type: 'String'
        }, {
            name: 'singleton',
            type: 'Boolean'
        }, {
            name: 'srcPath',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Api);



/***/ }),

/***/ "./docs/app/model/Example.mjs":
/*!************************************!*\
  !*** ./docs/app/model/Example.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Example
 * @extends Neo.data.Model
 */
class Example extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.model.Example'
         * @protected
         */
        className: 'Docs.app.model.Example',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'collapsed', // optional, only needed for collapsed non leaf items
            type: 'Boolean'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'path',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Example);



/***/ }),

/***/ "./docs/app/model/Tutorial.mjs":
/*!*************************************!*\
  !*** ./docs/app/model/Tutorial.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tutorial)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Tutorial
 * @extends Neo.data.Model
 */
class Tutorial extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.model.Tutorial'
         * @protected
         */
        className: 'Docs.app.model.Tutorial',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'fileName',
            type: 'String'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'type',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Tutorial);



/***/ }),

/***/ "./docs/app/store/Api.mjs":
/*!********************************!*\
  !*** ./docs/app/store/Api.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _model_Api_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Api.mjs */ "./docs/app/model/Api.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Docs.app.store.Api
 * @extends Neo.data.Store
 */
class Api extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.store.Api'
         * @protected
         */
        className: 'Docs.app.store.Api',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=ApiModel
         */
        model: _model_Api_mjs__WEBPACK_IMPORTED_MODULE_0__.default
    }}
}

Neo.applyClassConfig(Api);



/***/ }),

/***/ "./docs/app/store/Examples.mjs":
/*!*************************************!*\
  !*** ./docs/app/store/Examples.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Examples)
/* harmony export */ });
/* harmony import */ var _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Example.mjs */ "./docs/app/model/Example.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Docs.app.store.Examples
 * @extends Neo.data.Store
 */
class Examples extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.store.Examples'
         * @protected
         */
        className: 'Docs.app.store.Examples',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=Example
         */
        model: _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__.default
    }}
}

Neo.applyClassConfig(Examples);



/***/ }),

/***/ "./docs/app/store/Tutorials.mjs":
/*!**************************************!*\
  !*** ./docs/app/store/Tutorials.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tutorials)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _model_Tutorial_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Tutorial.mjs */ "./docs/app/model/Tutorial.mjs");



/**
 * @class Docs.app.store.Tutorials
 * @extends Neo.data.Store
 */
class Tutorials extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.store.Tutorials'
         * @protected
         */
        className: 'Docs.app.store.Tutorials',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=Tutorial
         */
        model: _model_Tutorial_mjs__WEBPACK_IMPORTED_MODULE_1__.default
    }}
}

Neo.applyClassConfig(Tutorials);



/***/ }),

/***/ "./docs/app/view/ApiTreeList.mjs":
/*!***************************************!*\
  !*** ./docs/app/view/ApiTreeList.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiTreeList)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _store_Api_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Api.mjs */ "./docs/app/store/Api.mjs");



/**
 * @class Docs.view.ApiTreeList
 * @extends Neo.tree.List
 */
class ApiTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.ApiTreeList'
         * @protected
         */
        className: 'Docs.view.ApiTreeList',
        /**
         * @member {String} ntype='api-treelist'
         * @protected
         */
        ntype: 'api-treelist',
        /**
         * @member {Neo.data.Store|null} store=ApiStore
         * @protected
         */
        store: _store_Api_mjs__WEBPACK_IMPORTED_MODULE_1__.default
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/structure.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.data = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(ApiTreeList);




/***/ }),

/***/ "./docs/app/view/ContentTabContainer.mjs":
/*!***********************************************!*\
  !*** ./docs/app/view/ContentTabContainer.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentTabContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/header/Button.mjs */ "./node_modules/neo.mjs/src/tab/header/Button.mjs");



/**
 * @class Docs.view.ContentTabContainer
 * @extends Neo.tab.Container
 */
class ContentTabContainer extends _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.ContentTabContainer'
         * @protected
         */
        className: 'Docs.view.ContentTabContainer',
        /**
         * @member {String} ntype='docs-content-tabcontainer'
         * @protected
         */
        ntype: 'docs-content-tabcontainer',
        /**
         * @member {Boolean} activateInsertedTabs=true
         */
        activateInsertedTabs: true,
        /**
         * @member {Object} contentContainerDefaults={cls:[//...]}
         */
        contentContainerDefaults: {
            cls: [
                'neo-docs-tab-content-container',
                'neo-tab-content-container',
                'neo-container'
            ]
        },
        /**
         * @member {Object} headerToolbarDefaults={cls:[//...]}
         */
        headerToolbarDefaults: {
            cls: [
                'docs-tab-header-toolbar',
                'neo-tab-header-toolbar',
                'neo-toolbar'
            ]
        },
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype: 'component',
            html : 'Welcome to the neo.mjs docs!',
            style: {padding: '20px'},

            tabButtonConfig: {
                iconCls: 'fa fa-users',
                text   : 'Welcome!'
            }
        }],
        /**
         * @member {Boolean} sortable=true
         */
        sortable: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me  = this,
            cls = me.cls;

        cls.unshift('docs-content-tabcontainer');
        me.cls = cls;
    }

    /**
     * Overriding the button click listener to allow closing tabs on icon click
     * @param {Object} config
     * @param {Number} index
     * @returns {Object} The merged config
     * @protected
     * @override
     */
    getTabButtonConfig(config, index) {
        let me = this,
            defaultConfig = {
                module : _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
                flex   : 'none',
                index  : index,
                pressed: me.activeIndex === index,

                domListeners: [{
                    click: function(data) {
                        let path = data.path.map(e => e.id);

                        if (path[0].indexOf('neo-tab-header-button-') === 0) {
                            me.activeIndex = data.component.index;
                        } else {
                            me.removeAt(Neo.getComponent(me.tabBarId).indexOf(path[1]))
                        }
                    },
                    scope: me
                }]
            };

        return {...defaultConfig, ...config};
    }
}

Neo.applyClassConfig(ContentTabContainer);




/***/ }),

/***/ "./docs/app/view/ExamplesTreeList.mjs":
/*!********************************************!*\
  !*** ./docs/app/view/ExamplesTreeList.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExamplesTreeList)
/* harmony export */ });
/* harmony import */ var _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Examples.mjs */ "./docs/app/store/Examples.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");



/**
 * @class Docs.view.ExamplesTreeList
 * @extends Neo.tree.List
 */
class ExamplesTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_1__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.ExamplesTreeList'
         * @protected
         */
        className: 'Docs.view.ExamplesTreeList',
        /**
         * @member {String} ntype='examples-treelist'
         * @protected
         */
        ntype: 'examples-treelist',
        /**
         * @member {String[]} cls=['docs-examples-treelist', 'neo-tree-list', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-examples-treelist',
            'neo-tree-list',
            'neo-list-container',
            'neo-list'
        ],
        /**
         * @member {Neo.data.Store|null} store=ExamplesStore
         * @protected
         */
        store: _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_0__.default
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/examples.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.data = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(ExamplesTreeList);




/***/ }),

/***/ "./docs/app/view/HeaderContainer.mjs":
/*!*******************************************!*\
  !*** ./docs/app/view/HeaderContainer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");




/**
 * @class Docs.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.HeaderContainer'
         * @protected
         */
        className: 'Docs.view.HeaderContainer',
        /**
         * @member {String} ntype='header-container'
         * @protected
         */
        ntype: 'neo-docs-header-container',
        /**
         * @member {String[]} cls=['neo-docs-header-container']
         */
        cls: ['neo-docs-header-container'],
        /**
         * @member {Number} height=55
         */
        height: 55,
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Array} items=[//...]
         */
        items: [{
            module         : _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
            listeners      : {change: 'onNavigationSearchFieldChange'},
            placeholderText: 'Filter Navigation',
            style          : {padding: '10px'},
            width          : 240
        }, {
            module      : _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
            domListeners: {click: 'onSwitchThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'theme-button',
            style       : {marginTop: '5px'},
            text        : 'Theme Dark'
        }, {
            module      : _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
            domListeners: {click: 'onSwitchSourceViewThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'source-view-theme-button',
            style       : {marginLeft: '10px', marginTop: '5px'},
            text        : 'Source View Theme Dark'
        }, {
            ntype: 'component',
            flex : 1
        }, {
            ntype: 'component',
            cls  : ['neo-logo-text'],
            html : 'neo.mjs docs',
            width: 210
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);




/***/ }),

/***/ "./docs/app/view/MainContainer.mjs":
/*!*****************************************!*\
  !*** ./docs/app/view/MainContainer.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainer)
/* harmony export */ });
/* harmony import */ var _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiTreeList.mjs */ "./docs/app/view/ApiTreeList.mjs");
/* harmony import */ var _classdetails_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classdetails/MainContainer.mjs */ "./docs/app/view/classdetails/MainContainer.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentTabContainer.mjs */ "./docs/app/view/ContentTabContainer.mjs");
/* harmony import */ var _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExamplesTreeList.mjs */ "./docs/app/view/ExamplesTreeList.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./docs/app/view/HeaderContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./docs/app/view/MainContainerController.mjs");
/* harmony import */ var _classdetails_SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classdetails/SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");
/* harmony import */ var _classdetails_TutorialComponent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classdetails/TutorialComponent.mjs */ "./docs/app/view/classdetails/TutorialComponent.mjs");
/* harmony import */ var _TutorialsTreeList_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TutorialsTreeList.mjs */ "./docs/app/view/TutorialsTreeList.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");












/**
 * @class Docs.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.MainContainer'
         * @protected
         */
        className: 'Docs.view.MainContainer',
        /**
         * @member {String} ntype='main-container'
         * @protected
         */
        ntype: 'main-container',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount : true,
        /**
         * @member {String[]} cls=['neo-docs-maincontainer', 'neo-viewport']
         */
        cls: ['neo-docs-maincontainer', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__.default,
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Neo.collection.Base|null} store_=null
         */
        store_: null,
        /**
         * @member {Array} items=[//...]
         */
        items: [_HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__.default, {
            ntype : 'container',
            flex  : 1,
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                ntype   : 'tab-container',
                cls     : ['neo-docs-navigation-tab-container', 'neo-tab-container'],
                minWidth: 290,
                sortable: true,
                width   : 290,

                items: [{
                    module   : _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__.default,
                    listeners: {leafItemClick: 'onApiListLeafClick'},
                    reference: 'api-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-code',
                        text   : 'API'
                    }
                }, {
                    module   : _TutorialsTreeList_mjs__WEBPACK_IMPORTED_MODULE_9__.default,
                    listeners: {leafItemClick: 'onTutorialListLeafClick'},
                    reference: 'tutorials-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-hands-helping',
                        text   : 'Tutorials'
                    }
                }, {
                    module   : _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__.default,
                    listeners: {leafItemClick: 'onExamplesListLeafClick'},
                    reference: 'examples-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-desktop',
                        text   : 'Examples'
                    }
                }]
            }, {
                module   : _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__.default,
                flex     : 1,
                reference: 'content-tabcontainer'
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        if (!me.store) {
            me.store = Neo.create(_node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__.default, {
                keyProperty: 'id'
            });
        }

        // Disable the examples Tab for dist versions until the webpack builds can handle this (see: #140)
        me.items[1].items[0].items[2].tabButtonConfig.disabled = Neo.config.environment !== 'development';
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/all.json'
        }).then(data => {
            me.store.items = data.json;
        });
    }
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./docs/app/view/MainContainerController.mjs":
/*!***************************************************!*\
  !*** ./docs/app/view/MainContainerController.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.MainContainerController'
         * @protected
         */
        className: 'Docs.view.MainContainerController',
        /**
         * @member {String} ntype='docs-maincontainer-controller'
         * @protected
         */
        ntype: 'docs-maincontainer-controller'
    }}

    /**
     *
     * @param {Object} record
     */
    onApiListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype        : 'classdetails-maincontainer',
            id           : record.className,
            structureData: record,

            tabButtonConfig: {
                iconCls: record.singleton ? 'fa fa-arrow-alt-circle-right' : 'fa fa-copyright',
                text   : record.name
            }
        });
    }

    /**
     *
     * @param {Object} record
     */
    onExamplesListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer'),
            name                = record.name,
            pathArray           = [],
            store               = me.getReference('examples-treelist').store,
            tmpRecord           = record,
            tabButtonConfig;

        while (tmpRecord.parentId !== null) {
            tmpRecord = store.get(tmpRecord.parentId);
            name      = tmpRecord.name + '.' + name;
        }

        name = 'examples_' + name;

        tabButtonConfig = {
            iconCls: 'fa fa-desktop',
            text   : record.name
        };

        if (!Array.isArray(record.path)) {
            import(
                /* webpackIgnore: true */
                record.path).then((module) => {
                    contentTabContainer.add({
                        module         : module.default,
                        id             : name,
                        tabButtonConfig: tabButtonConfig
                    });
                }
            );
        } else {
            record.path.forEach(path => {
                pathArray.push(import(/* webpackIgnore: true */ path));
            });

            Promise.all(pathArray).then(function(modules) {
                let items = [];

                modules.forEach(module => {
                    items.push({
                        module: module.default
                    });
                });

                contentTabContainer.add({
                    ntype          : 'container',
                    id             : name,
                    items          : items,
                    style          : {padding: '10px'},
                    tabButtonConfig: tabButtonConfig
                });
            })
        }
    }

    /**
     *
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {
        let me                  = this,
            hash                = value?.hash,
            contentTabContainer = me.getReference('content-tabcontainer'),
            structureStore      = me.getReference('api-treelist').store,
            record, tab;

        if (hash?.hasOwnProperty('viewSource')) {
            record = structureStore.find('className', hash.viewSource)[0];

            if (record) {
                tab = contentTabContainer.add({
                    ntype        : 'classdetails-sourceviewcomponent',
                    id           : hash.viewSource + '__source',
                    line         : hash.line,
                    structureData: record,

                    tabButtonConfig: {
                        iconCls: 'fa fa-code',
                        text   : record.name
                    }
                });

                // adjust the highlighted line for already added source view tabs
                tab.line = hash.line;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    onNavigationSearchFieldChange(data) {
        let me    = this,
            value = data.value;

        me.getReference('examples-treelist') .filter('name', value, null);
        me.getReference('api-treelist')      .filter('name', value, null);
        me.getReference('tutorials-treelist').filter('name', value, null);
    }

    /**
     *
     */
    onSwitchSourceViewThemeButtonClick() {
        let me     = this,
            button = me.getReference('source-view-theme-button'),
            buttonText, href;

        if (button.text === 'Source View Theme Light') {
            buttonText = 'Source View Theme Dark';
            href       = './resources/highlightjs-custom-github-theme.css';
        } else {
            buttonText = 'Source View Theme Light';
            href       = './resources/highlightjs-custom-dark-theme.css';
        }

        Neo.main.addon.Stylesheet.swapStyleSheet({
            href: href,
            id  : 'hljs-theme'
        }).then(data => {
            button.text = buttonText;
        });
    }

    /**
     *
     */
    onSwitchThemeButtonClick() {
        let me     = this,
            button = me.getReference('theme-button'),
            view   = me.component,
            buttonText, cls, theme;

        if (button.text === 'Theme Light') {
            buttonText = 'Theme Dark';
            theme      = 'neo-theme-light';
        } else {
            buttonText = 'Theme Light';
            theme      = 'neo-theme-dark';
        }

        if (Neo.config.useCssVars) {
            cls = [...view.cls];

            view.cls.forEach((item, index) => {
                if (item.includes('neo-theme')) {
                    _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default.remove(cls, item);
                }
            });

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default.add(cls, theme);
            view.cls = cls;

            button.text = buttonText;
        }
    }

    /**
     *
     * @param {Object} record
     */
    onTutorialListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype   : 'classdetails-tutorialcomponent',
            fileName: record.fileName,
            fileType: record.type,
            id      : record.name,

            tabButtonConfig: {
                iconCls: 'fa fa-hands-helping',
                text   : record.name
            }
        });
    }
}

Neo.applyClassConfig(MainContainerController);




/***/ }),

/***/ "./docs/app/view/TutorialsTreeList.mjs":
/*!*********************************************!*\
  !*** ./docs/app/view/TutorialsTreeList.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TutorialsTreeList)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _store_Tutorials_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Tutorials.mjs */ "./docs/app/store/Tutorials.mjs");



/**
 * @class Docs.view.TutorialsTreeList
 * @extends Neo.tree.List
 */
class TutorialsTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.TutorialsTreeList'
         * @protected
         */
        className: 'Docs.view.TutorialsTreeList',
        /**
         * @member {String} ntype='tutorials-treelist'
         * @protected
         */
        ntype: 'tutorials-treelist',
        /**
         * @member {String[]} cls=['docs-tutorials-treelist', 'neo-tree-list', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-tutorials-treelist',
            'neo-tree-list',
            'neo-list-container',
            'neo-list'
        ],
        /**
         * @member {Neo.data.Store|null} store=TutorialsStore
         * @protected
         */
        store: _store_Tutorials_mjs__WEBPACK_IMPORTED_MODULE_1__.default
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/tutorials/tutorials.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.data = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(TutorialsTreeList);




/***/ }),

/***/ "./docs/app/view/classdetails/HeaderComponent.mjs":
/*!********************************************************!*\
  !*** ./docs/app/view/classdetails/HeaderComponent.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.view.classdetails.HeaderComponent
 * @extends Neo.component.Base
 */
class HeaderComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.HeaderComponent'
         * @protected
         */
        className: 'Docs.view.classdetails.HeaderComponent',
        /**
         * @member {String} ntype='classdetails-headercomponent'
         * @protected
         */
        ntype: 'classdetails-headercomponent',
        /**
         * @member {String[]} cls=['neo-docs-classdetails-headercomponent']
         */
        cls: ['neo-docs-classdetails-headercomponent'],
        /**
         * @member {Object|null} record_=null
         */
        record_: null,
        /**
         * @member {Object} domListeners
         */
        domListeners: {
            click: {
                fn      : 'onHeaderClick', // Docs.app.view.MainContainerController
                delegate: '.neo-docs-header-text'
            }
        },
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {tag: 'span', cls: ['neo-docs-header-text']}
        ]}
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me         = this,
            vdom      = me.vdom,
            className = me.record.className,
            store     = me.up('main-container').store,
            record    = store.find({$kind: className === 'Neo' ? 'module' : 'class', neoClassName: className})[0],
            i         = 0,
            len       = record?.tags?.length || 0,
            singleton = false;

        for (; i < len; i++) {
            if (record.tags[i].title === 'singleton') {
                singleton = true;
                break;
            }
        }

        vdom.cn[0].innerHTML = singleton ? (className + ' → Singleton') : className;

        if (record.description) {
            vdom.cn.push({
                cls      : ['neo-docs-header-description'],
                innerHTML: record.description
            });
        }

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(HeaderComponent);




/***/ }),

/***/ "./docs/app/view/classdetails/HierarchyTreeList.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/HierarchyTreeList.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HierarchyTreeList)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.view.classdetails.HierarchyTreeList
 * @extends Neo.tree.List
 */
class HierarchyTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.HierarchyTreeList'
         * @protected
         */
        className: 'Docs.view.classdetails.HierarchyTreeList',
        /**
         * @member {String} ntype='classdetails-treelist'
         * @protected
         */
        ntype: 'classhierarchy-treelist',
        /**
         * @member {String[]} cls=['docs-classhierarchy-treelist', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-classhierarchy-treelist',
            'neo-list-container',
            'neo-tree-list',
            'neo-list'
        ],
        /**
         * @member {Boolean} showCollapseExpandAllIcons=false
         */
        showCollapseExpandAllIcons: false,
        /**
         * @member {Object|null} structureData=null
         */
        structureData: null
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.createStoreItems();
        me.createItems(null, me.getListItemsRoot(), 0);
    }

    /**
     *
     */
    createStoreItems() {
        let me            = this,
            className     = me.structureData.className,
            mainContainer = me.up('main-container'),
            mainStore     = mainContainer.store,
            storeItems    = [],
            tmpItems      = [],
            item, parentId;

        item = mainStore.find({
            $kind       : className === 'Neo' ? 'module' : 'class',
            neoClassName: me.structureData.className
        })[0];

        tmpItems.unshift(item);

        while (item?.hasOwnProperty('augments')) {
            item = mainStore.find({
                $kind       : 'class',
                neoClassName: item.augments[0]
            })[0];

            tmpItems.unshift(item);
        }

        tmpItems.forEach((key, index) => {
            if (key) {
                parentId = tmpItems[index - 1] ? tmpItems[index - 1].id : null;

                storeItems.push({
                    checked : true,
                    id      : key.id,
                    isLeaf  : true,
                    name    : key.neoClassName,
                    parentId: parentId
                });
            }
        });

        me.store.items = storeItems;
    }

    /**
     *
     * @param {Object} record
     */
    onLeafItemClick(record) {
        let me       = this,
            vnodeId  = me.getItemId(record.id),
            vdom     = me.vdom,
            vdomNode = me.getVdomChild(vnodeId);

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__.default[record.checked ? 'add' : 'remove'](vdomNode.cls, 'unchecked');

        record.checked = !record.checked;

        me.vdom = vdom;

        me.fire('refreshClassMembers');
    }
}

Neo.applyClassConfig(HierarchyTreeList);




/***/ }),

/***/ "./docs/app/view/classdetails/MainContainer.mjs":
/*!******************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainer.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.mjs */ "./docs/app/view/classdetails/HeaderComponent.mjs");
/* harmony import */ var _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyTreeList.mjs */ "./docs/app/view/classdetails/HierarchyTreeList.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./docs/app/view/classdetails/MainContainerController.mjs");
/* harmony import */ var _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MembersList.mjs */ "./docs/app/view/classdetails/MembersList.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");








/**
 * @class Docs.view.classdetails.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.MainContainer'
         * @protected
         */
        className: 'Docs.view.classdetails.MainContainer',
        /**
         * @member {String} ntype='classdetails-maincontainer'
         * @protected
         */
        ntype: 'classdetails-maincontainer',
        /**
         * @member {String[]} cls=['neo-docs-classdetails-maincontainer', 'neo-container']
         */
        cls: ['neo-docs-classdetails-maincontainer', 'neo-container'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__.default,
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Object|null} structureData=null
         */
        structureData: null,
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype : 'container',
            _cls  : ['neo-docs-classdetails-headercontainer'],
            flex  : '0 1 auto',
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                module : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__.default,
                cls    : ['neo-docs-classdetails-headerpanel', 'neo-panel', 'neo-container'],
                headers: [{
                    dock : 'bottom',
                    style: {borderWidth: 0},
                    items: [{
                        handler  : 'onScrollIntoView',
                        reference: 'showConfigs',
                        style    : {marginRight: '5px'},
                        text     : 'Configs'
                    }, {
                        handler  : 'onScrollIntoView',
                        reference: 'showMethods',
                        style    : {marginRight: '5px'},
                        text     : 'Methods'
                    }, {
                        handler  : 'onScrollIntoView',
                        reference: 'showEvents',
                        text     : 'Events'
                    }, {
                        ntype: 'component',
                        flex : 1
                    }, {
                        module         : _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__.default,
                        listeners      : {change: 'onSearchFieldChange'},
                        placeholderText: 'Filter Members',
                        width          : 160,

                        style: {
                            margin     : 0,
                            marginRight: '5px',
                            paddingTop : '2px'
                        }
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showPrivateMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Private',
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showProtectedMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Protected',
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showStaticMembers',
                        text     : 'Static'
                    }]
                }],

                items: [{
                    module: _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
                    flex  : 1,
                    record: '@config:structureData'
                }]
            }, {
                module       : _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__.default,
                flex         : '0 0 auto',
                minWidth     : 330,
                structureData: '@config:structureData'
            }]
        }, {
            module   : _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__.default,
            flex     : 1,
            listeners: {mutateItems: 'onMutateItems'},
            reference: 'classdetails-memberslist'
        }]
    }}
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./docs/app/view/classdetails/MainContainerController.mjs":
/*!****************************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainerController.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.view.classdetails.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.MainContainerController'
         * @protected
         */
        className: 'Docs.view.classdetails.MainContainerController'
    }}

    /**
     *
     * @param {Object} data
     */
    onHeaderClick(data) {
        let me                  = this,
            record              = me.component.structureData,
            mainContainer       = me.component.up('main-container'),
            contentTabContainer = mainContainer.down('docs-content-tabcontainer'),
            className           = (record.path ? record.path + '.' : '') + record.name;

        contentTabContainer.add({
            module       : _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__.default,
            id           : className + '__source',
            structureData: record,

            tabButtonConfig: {
                iconCls: 'fa fa-code',
                text   : className
            }
        });
    }

    /**
     *
     * @param {Neo.collection.Base} store
     */
    onMutateItems(store) {
        let me              = this,
            countConfigs    = 0,
            countEvents     = 0,
            countMethods    = 0,
            countPrivates   = 0,
            countProtecteds = 0,
            countStatics    = 0;

        store.items.forEach(item => {
            if (item.kind === 'function') {
                countMethods++;
            } else if (item.kind === 'member') {
                countConfigs++;
            } else {
                countEvents++;
            }

            if (item.access === 'private') {
                countPrivates++;
            } else if (item.access === 'protected') {
                countProtecteds++;
            }

            if (item.scope === 'static') {
                countStatics++;
            }
        });

        me.getReference('showConfigs')         .text = 'Configs '   + countConfigs;
        me.getReference('showMethods')         .text = 'Methods '   + countMethods;
        me.getReference('showEvents')          .text = 'Events '    + countEvents;
        me.getReference('showPrivateMembers')  .text = 'Private '   + countPrivates;
        me.getReference('showProtectedMembers').text = 'Protected ' + countProtecteds;
        me.getReference('showStaticMembers')   .text = 'Static '    + countStatics;
    }

    /**
     *
     * @param {Object} data
     */
    onScrollIntoView(data) {
        let me     = this,
            button = Neo.getComponent(data.target.id);

        Neo.main.addon.HighlightJS.scrollIntoView({
            text   : button.reference.substr(4),
            vnodeId: me.component.vdom.id
        });
    }

    /**
     *
     * @param {Object} data
     */
    onSearchFieldChange(data) {
        this.getReference('classdetails-memberslist').filterMembersQuery = data.value;
    }

    /**
     *
     * @param {Object} data
     */
    onToggleMembers(data) {
        let button      = Neo.getComponent(data.target.id),
            membersList = this.getReference('classdetails-memberslist');

        button.iconCls = button.checked ? 'fa fa-square' : 'fa fa-check-square';
        button.checked = !button.checked;

        membersList[button.reference] = button.checked;
    }
}

Neo.applyClassConfig(MainContainerController);




/***/ }),

/***/ "./docs/app/view/classdetails/MembersList.mjs":
/*!****************************************************!*\
  !*** ./docs/app/view/classdetails/MembersList.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MembersList)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");



/**
 * @class Docs.view.classdetails.MembersList
 * @extends Neo.list.Base
 */
class MembersList extends _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.MembersList'
         * @protected
         */
        className: 'Docs.view.classdetails.MembersList',
        /**
         * @member {String} ntype='classdetails-memberslist'
         * @protected
         */
        ntype: 'classdetails-memberslist',
        /**
         * @member {String[]} cls=['docs-classhierarchy-memberslist']
         */
        cls: ['docs-classhierarchy-memberslist'],
        /**
         * @member {String} filterMembersQuery_=''
         * @protected
         */
        filterMembersQuery_: '',
        /**
         * @member {Boolean} showPrivateMembers_=true
         */
        showPrivateMembers_: true,
        /**
         * @member {Boolean} showProtectedMembers_=true
         */
        showProtectedMembers_: true,
        /**
         * @member {Boolean} showStaticMembers_=true
         */
        showStaticMembers_: true,
        /**
         * @member {Neo.collection.Base} store=null
         */
        store: null,
        /**
         * @member {String|null} targetClassName=null
         */
        targetClassName: null,
        /**
         * @member {Object} _vdom={cn: []}
         */
        _vdom:
        {cn: []}
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me            = this,
            hierarchyView = me.up('classdetails-maincontainer').down('classhierarchy-treelist'),
            mainStore     = me.up('main-container').store;

        hierarchyView.on({
            refreshClassMembers: me.onRefreshClassMembers,
            scope              : me
        });

        me.store = Neo.create(_node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__.default, {
            filterMode: 'advanced',
            sourceId  : mainStore.id
        });

        me.onRefreshClassMembers();
    }

    /**
     * Triggered after the filterMembersQuery config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetFilterMembersQuery(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showProtectedMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowProtectedMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showPrivateMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowPrivateMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showStaticMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowStaticMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     *
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyConfigsHeader(store, vdom) {
        if (store.items[0]?.kind === 'member') {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Configs',
                'data-list-header': 'Configs'
            });
        }

        return vdom;
    }

    /**
     *
     * @param {Object} item
     * @param {Number} index
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyEventsHeader(item, index, store, vdom) {
        if (
            item.kind === 'event' &&
            store.items[index -1]?.kind !== 'event'
        ) {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Events',
                style    : {zIndex: 3},
                'data-list-header': 'Events'
            });
        }

        return vdom;
    }

    /**
     *
     * @param {Object} item
     * @param {Number} index
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyMethodsHeader(item, index, store, vdom) {
        if (
            item.kind === 'function' &&
            (
                !store.items[index -1] || (
                    store.items[index -1]?.kind !== 'function'
                )
            )
        ) {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Methods',
                style    : {zIndex: 2},
                'data-list-header': 'Methods'
            });
        }

        return vdom;
    }

    /**
     *
     */
    createItems() {
        let me                 = this,
            filterMembersRegEx = new RegExp(me.filterMembersQuery || '', 'gi'),
            hasExamples        = false,
            targetClassName    = me.targetClassName,
            vdom               = me.vdom,
            headerText, itemAttributes, itemConfig, path;

        vdom.cn = [];
        vdom = me.applyConfigsHeader(me.store, vdom);

        me.store.items.forEach((item, index) => {
            vdom = me.applyEventsHeader( item, index, me.store, vdom);
            vdom = me.applyMethodsHeader(item, index, me.store, vdom);

            itemAttributes = [];

            if (item.name.substr(-1) === '_') {
                item.name = item.name.slice(0, -1) ;
                itemAttributes.push('GS');
            }

            if (item.neoClassName !== targetClassName) {
                itemAttributes.push('inherited');
            }

            if (item.access === 'private' || item.access === 'protected') {
                itemAttributes.push(item.access);
            }

            if (item.scope === 'static') {
                itemAttributes.push('static');
            }

            headerText = item.name;

            if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
                headerText = headerText.replace(filterMembersRegEx, match => `<span class="neo-highlight-search">${match}</span>`);
            }

            // configs
            if (item.type?.names) {
                headerText += (': {' + MembersList.escapeHtml(item.type.names.join('|')) + '}');
            }

            if (item.hasOwnProperty('defaultvalue')) {
                headerText += (' = ' + item.defaultvalue);
            }

            // methods
            if (item.params && item.kind !== 'event') {
                headerText += ('(' + item.params.reduce((result, param) => {
                    if (param.name.indexOf('.') < 0) {
                        if (param.optional) {
                            result.push('[' + param.name + ']');
                        } else {
                            result.push(param.name);
                        }
                    }
                    return result;
                }, []).join(', ') + ')');
            }

            if (item.returns) {
                headerText += (' → {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '}'));
            }

            path = item.meta.path;

            if (path.includes('/neo.mjs/')) {
                path = path.substr(path.indexOf('/neo.mjs/') + 9);
            } else if (path.includes('/neomjs/')) {
                path = path.substr(path.indexOf('/neomjs/')  + 8);
            } else if (path.includes('/neo/')) {
                path = path.substr(path.indexOf('/neo/')     + 5);
            }

            itemConfig = {
                cls: ['neo-list-item'],
                cn : [{
                    cls: ['neo-list-item-header-container'],
                    cn : [{
                        cls      : ['neo-list-item-header'],
                        innerHTML: headerText
                    }, {
                        style: {
                            flex: 1
                        }
                    }, {
                        cls      : ['neo-list-item-header'],
                        innerHTML: itemAttributes.join(', ')
                    }]
                }, {
                    cls: 'neo-docs-view-source-link-container',
                    cn :[{
                        tag      : 'a',
                        cls      : ['neo-docs-view-source-link'],
                        href     : '#viewSource=' + item.neoClassName + '&line=' + item.meta.lineno,
                        innerHTML: 'Source: ' + path + '/' + item.meta.filename + ' (Line ' + item.meta.lineno + ')'
                    }]
                }, {
                    innerHTML: item.description
                }]
            };

            if (item.examples?.length > 0) {
                hasExamples = true;

                item.examples.forEach(example => {
                    itemConfig.cn.push({
                        tag: 'pre',
                        cn : [{
                            tag : 'code',
                            html: example
                        }]
                    });
                });
            }

            if (item.params?.length > 0) {
                itemConfig.cn.push(MembersList.createParametersTable(item.params));
            }

            if (item.returns && item.kind !== 'event') {
                itemConfig.cn.push({
                    innerHTML: 'Returns {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '} ') + (item.returns[0].description || '')
                });
            }

            vdom.cn.push(itemConfig);
        });

        me.vdom = vdom;

        if (hasExamples) {
            setTimeout(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightInit();
            }, 100);
        }
    }

    /**
     *
     * @param {Object} params
     * @returns {Object} vdom
     */
    static createParametersTable(params) {
        let hasDefaultValues  = false,
            hasOptionalParams = false,
            description, nestedParams, paramTable;

        params.forEach(param => {
            if (param.hasOwnProperty('defaultvalue')) {
                hasDefaultValues = true;
            }

            if (param.hasOwnProperty('optional')) {
                hasOptionalParams = true;
            }
        });

        paramTable = {
            tag: 'table',
            cls: 'docs-param-table',
            cn : [{
                tag: 'thead',
                cn : [{
                    tag      : 'th',
                    innerHTML: 'Name'
                }, {
                    tag      : 'th',
                    innerHTML: 'Type'
                }, {
                    tag      : 'th',
                    innerHTML: 'Description'
                }]
            }]
        };

        if (hasDefaultValues) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Default'
            });
        }

        if (hasOptionalParams) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Optional'
            });
        }

        params.forEach(param => {
            if (param.name.indexOf('.') < 0) { // ignore nested params
                description = {
                    tag      : 'td',
                    innerHTML: param.description
                };
                nestedParams = [];

                params.forEach(p => {
                    if (p.name.indexOf(param.name + '.') === 0) {
                        p = Neo.clone(p, true);

                        p.name = p.name.split('.');
                        p.name.shift();
                        p.name = p.name.join('.');

                        nestedParams.push(p);
                    }
                });

                if (nestedParams.length > 0) {
                    description = {
                        tag: 'td',
                        cn : [{
                            innerHTML: description.innerHTML
                        },
                        MembersList.createParametersTable(nestedParams)]
                    }
                }

                paramTable.cn.push({
                    tag: 'tr',
                    cn : [{
                        tag      : 'td',
                        innerHTML: param.name
                    }, {
                        tag      : 'td',
                        innerHTML: param.type ? MembersList.escapeHtml(param.type.names.join(' | ')) : ''
                    },
                    description]
                });

                if (hasDefaultValues) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.defaultvalue === undefined ? '' : (param.defaultvalue + '')
                    });
                }

                if (hasOptionalParams) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.optional
                    });
                }
            }
        });

        return paramTable;
    }

    /**
     * Replaces '<' & '>'
     * @param {String} value
     * @returns {String}
     */
    static escapeHtml(value) {
        return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    /**
     *
     */
    filterAndSortItems() {
        let me             = this,
            hierarchyMap   = {},
            hierarchyStore = me.up('classdetails-maincontainer').down('classhierarchy-treelist').store,
            hierarchyItems = hierarchyStore.items,
            i              = 0,
            tmpItems       = [],
            filters, tmpItemsLen;

        hierarchyItems.forEach(cls => {
            if (cls.checked === true) {
                tmpItems.push(cls.name);
            }
        });

        tmpItemsLen = tmpItems.length;

        for (; i < tmpItemsLen; i++) {
            hierarchyMap[tmpItems[i]] = i;
        }

        me.targetClassName = hierarchyItems[hierarchyItems.length -1].name;

        filters = [{
            operator: 'included',
            property: 'neoClassName',
            value   : tmpItems
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'class'
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'constant' // todo?
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'module'
        }, {
            operator: 'isUndefined',
            property: 'inherited'
        }];

        if (!me.showPrivateMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'private'
            });
        }

        if (!me.showProtectedMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'protected'
            });
        }

        if (!me.showStaticMembers) {
            filters.push({
                operator: '!==',
                property: 'scope',
                value   : 'static'
            });
        }

        if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
            filters.push({
                operator: 'like',
                property: 'name',
                value   : me.filterMembersQuery
            });
        }

        filters.push({
            scope   : me,
            filterBy: function(item, filteredItems, allItems) {
                let me              = this,
                    targetClassName = me.targetClassName,
                    filteredItem, i, len;

                // always exclude inherited className & ntype configs
                if (item.name === 'ntype' && item.neoClassName !== targetClassName
                ) {
                    return true;
                }

                if (item.neoClassName !== targetClassName) {
                    i   = 0;
                    len = filteredItems.length;

                    for (; i < len; i++) {
                        filteredItem = filteredItems[i];

                        if (item.id !== filteredItem.id) {
                            if (
                                item.name  === filteredItem.name  &&
                                item.scope === filteredItem.scope && // static VS instance members
                                hierarchyMap[item.neoClassName] < hierarchyMap[filteredItem.neoClassName]
                            ) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            }
        });

        me.store.filters = filters;

        me.store.sorters = [{
            // Configs => Methods => Events
            sortBy: function(a, b) {
                a = a.kind === 'member' ? 0 : a.kind === 'function' ? 1 : 2;
                b = b.kind === 'member' ? 0 : b.kind === 'function' ? 1 : 2;

                return a > b ? 1 : a < b ? -1 : 0;
            }
        }, {
            direction: 'ASC',
            property : 'name'
        }];

        me.fire('mutateItems', me.store);
    }

    /**
     * Override to not call createItems() at this point => onRefreshClassMembers()
     */
    onStoreFilter() {}

    /**
     *
     */
    onRefreshClassMembers() {
        this.filterAndSortItems();
        this.createItems();
    }
}

Neo.applyClassConfig(MembersList);




/***/ }),

/***/ "./docs/app/view/classdetails/SourceViewComponent.mjs":
/*!************************************************************!*\
  !*** ./docs/app/view/classdetails/SourceViewComponent.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SourceViewComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.view.classdetails.SourceViewComponent
 * @extends Neo.component.Base
 */
class SourceViewComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.SourceViewComponent'
         * @protected
         */
        className: 'Docs.view.classdetails.SourceViewComponent',
        /**
         * @member {String} ntype='classdetails-sourceviewcomponent'
         * @protected
         */
        ntype: 'classdetails-sourceviewcomponent',
        /**
         * @member {Boolean} isHighlighted_=false
         * @protected
         */
        isHighlighted_: false,
        /**
         * @member {Number|null} line_=null
         * @protected
         */
        line_: null,
        /**
         * @member {Number|null} previousLine=null
         * @protected
         */
        previousLine: null,
        /**
         * @member {Object|null} structureData=null
         * @protected
         */
        structureData: null,
        /**
         * @member {Object} style= {overflow: 'auto'}
         */
        style: {
            overflow: 'auto'
        },
        /**
         * @member {Object} _vdom={cn: [//...]}
         */
        _vdom:
        {cn: [
            {tag: 'pre', cn: [
                {tag: 'code', class: 'javascript'}
            ]}
        ]}
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me   = this,
            url  = '../../' + me.structureData.srcPath;

        Neo.Xhr.promiseRequest({
            url: url
        }).then(data => {
            me.applySourceCode(data.response);
        });
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
            setTimeout(() => {
                this.syntaxHighlight();
            }, 50);
        }
    }

    /**
     * Triggered after the isHighlighted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetIsHighlighted(value, oldValue) {
        if (value) {
            let me = this;

            setTimeout(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightLine({
                    addLine   : me.line,
                    removeLine: me.previousLine,
                    vnodeId   : me.vdom.cn[0].id
                });
            }, 50);
        }
    }

    /**
     * Triggered after the line config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetLine(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.previousLine = oldValue;
        }

        if (me.isHighlighted) {
            me.afterSetIsHighlighted(true, false);
        }
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            vdom = me.vdom,
            node = vdom.cn[0]; // pre tag

        node.cn[0].innerHTML = data; // code tag
        me.vdom = vdom;

        if (me.mounted) {
            me.syntaxHighlight();
        }
    }

    /**
     *
     */
    syntaxHighlight() {
        let me = this;

        Neo.main.addon.HighlightJS.syntaxHighlight({
            vnodeId: me.vdom.cn[0].id
        }).then(() => {
            if (!me.isHighlighted) {
                me.isHighlighted = true;
            } else {
                me.afterSetIsHighlighted(true, false);
            }
        });
    }
}

Neo.applyClassConfig(SourceViewComponent);




/***/ }),

/***/ "./docs/app/view/classdetails/TutorialComponent.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/TutorialComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TutorialComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.view.classdetails.TutorialComponent
 * @extends Neo.component.Base
 */
class TutorialComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__.default {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.TutorialComponent'
         * @protected
         */
        className: 'Docs.view.classdetails.TutorialComponent',
        /**
         * @member {String} ntype='classdetails-tutorialcomponent'
         * @protected
         */
        ntype: 'classdetails-tutorialcomponent',
        /**
         * @member {String[]} cls=['neo-classdetails-tutorialcomponent']
         */
        cls: ['neo-classdetails-tutorialcomponent'],
        /**
         * @member {String|null} fileName=null
         */
        fileName: null,
        /**
         * @member {String|null} fileType=null
         */
        fileType: null,
        /**
         * @member {Object} style={overflow: 'auto'}
         */
        style: {
            overflow: 'auto'
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me     = this,
            isJson = me.fileType === 'json',
            url    = '../../docs/tutorials/' + me.fileName;

        Neo.Xhr[isJson ? 'promiseJson' : 'promiseRequest']({
            url: url
        }).then(data => {
            setTimeout(() => { // ensure we are not mounting
                me.applySourceCode(isJson ? data.json : data.response);
            }, 100);
        });
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            vdom = me.vdom;

        if (me.fileType === 'json') {
            vdom.cn = data;
        } else {
            vdom.innerHTML = data;
        }

        me.vdom = vdom;

        setTimeout(() => {
            TutorialComponent.syntaxHighlight();
        }, 50);
    }

    /**
     *
     */
    static syntaxHighlight() {
        Neo.main.addon.HighlightJS.syntaxHighlightInit();
    }
}

Neo.applyClassConfig(TutorialComponent);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlGQUFTO0FBQ3pDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0JBQStCO0FBQy9CO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVzQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9kb2NzL2FwcC5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL21vZGVsL0FwaS5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL21vZGVsL0V4YW1wbGUubWpzIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9kb2NzL2FwcC9tb2RlbC9UdXRvcmlhbC5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3N0b3JlL0FwaS5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3N0b3JlL0V4YW1wbGVzLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vZG9jcy9hcHAvc3RvcmUvVHV0b3JpYWxzLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vZG9jcy9hcHAvdmlldy9BcGlUcmVlTGlzdC5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3ZpZXcvQ29udGVudFRhYkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3ZpZXcvRXhhbXBsZXNUcmVlTGlzdC5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3ZpZXcvSGVhZGVyQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vZG9jcy9hcHAvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vZG9jcy9hcHAvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3ZpZXcvVHV0b3JpYWxzVHJlZUxpc3QubWpzIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9IZWFkZXJDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9IaWVyYXJjaHlUcmVlTGlzdC5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovL25lby13ZWJjb21wb25lbnRzLWRlbW8vLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01lbWJlcnNMaXN0Lm1qcyIsIndlYnBhY2s6Ly9uZW8td2ViY29tcG9uZW50cy1kZW1vLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvU291cmNlVmlld0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vbmVvLXdlYmNvbXBvbmVudHMtZGVtby8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL1R1dG9yaWFsQ29tcG9uZW50Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL2FwcC92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnRG9jcydcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAubW9kZWwuQXBpXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBBcGkgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLm1vZGVsLkFwaSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAubW9kZWwuQXBpJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBmaWVsZHNcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdjbGFzc05hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvbGxhcHNlZCcsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXNMZWFmJyxcbiAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGFyZW50SWQnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYXRoJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzaW5nbGV0b24nLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzcmNQYXRoJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBpKTtcblxuZXhwb3J0IHtBcGkgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5tb2RlbC5FeGFtcGxlXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC5tb2RlbC5FeGFtcGxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC5tb2RlbC5FeGFtcGxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBmaWVsZHNcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdjb2xsYXBzZWQnLCAvLyBvcHRpb25hbCwgb25seSBuZWVkZWQgZm9yIGNvbGxhcHNlZCBub24gbGVhZiBpdGVtc1xuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lzTGVhZicsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhcmVudElkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGF0aCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV4YW1wbGUpO1xuXG5leHBvcnQge0V4YW1wbGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5tb2RlbC5UdXRvcmlhbFxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgVHV0b3JpYWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLm1vZGVsLlR1dG9yaWFsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC5tb2RlbC5UdXRvcmlhbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzXG4gICAgICAgICAqL1xuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnZmlsZU5hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXNMZWFmJyxcbiAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGFyZW50SWQnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHV0b3JpYWwpO1xuXG5leHBvcnQge1R1dG9yaWFsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBBcGlNb2RlbCBmcm9tICcuLi9tb2RlbC9BcGkubWpzJztcbmltcG9ydCBTdG9yZSAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5zdG9yZS5BcGlcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEFwaSBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAuc3RvcmUuQXBpJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC5zdG9yZS5BcGknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLk1vZGVsfSBtb2RlbD1BcGlNb2RlbFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWw6IEFwaU1vZGVsXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBpKTtcblxuZXhwb3J0IHtBcGkgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi4vbW9kZWwvRXhhbXBsZS5tanMnO1xuaW1wb3J0IFN0b3JlICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAuc3RvcmUuRXhhbXBsZXNcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEV4YW1wbGVzIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC5zdG9yZS5FeGFtcGxlcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAuc3RvcmUuRXhhbXBsZXMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLk1vZGVsfSBtb2RlbD1FeGFtcGxlXG4gICAgICAgICAqL1xuICAgICAgICBtb2RlbDogRXhhbXBsZVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV4YW1wbGVzKTtcblxuZXhwb3J0IHtFeGFtcGxlcyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgU3RvcmUgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcbmltcG9ydCBUdXRvcmlhbCBmcm9tICcuLi9tb2RlbC9UdXRvcmlhbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5zdG9yZS5UdXRvcmlhbHNcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIFR1dG9yaWFscyBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAuc3RvcmUuVHV0b3JpYWxzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC5zdG9yZS5UdXRvcmlhbHMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLk1vZGVsfSBtb2RlbD1UdXRvcmlhbFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWw6IFR1dG9yaWFsXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHV0b3JpYWxzKTtcblxuZXhwb3J0IHtUdXRvcmlhbHMgYXMgZGVmYXVsdH07IiwiaW1wb3J0IFRyZWVMaXN0IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzJztcbmltcG9ydCBBcGlTdG9yZSBmcm9tICcuLi9zdG9yZS9BcGkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LkFwaVRyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIEFwaVRyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuQXBpVHJlZUxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5BcGlUcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdhcGktdHJlZWxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYXBpLXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlPUFwaVN0b3JlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBBcGlTdG9yZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy9vdXRwdXQvc3RydWN0dXJlLmpzb24nXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIGl0ZW1Sb290ID0gbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpO1xuXG4gICAgICAgICAgICBtZS5zdG9yZS5kYXRhID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5jcmVhdGVJdGVtcyhudWxsLCBpdGVtUm9vdCwgMCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwaVRyZWVMaXN0KTtcblxuZXhwb3J0IHtBcGlUcmVlTGlzdCBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb250YWluZXIgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBIZWFkZXJCdXR0b24gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYi9oZWFkZXIvQnV0dG9uLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5Db250ZW50VGFiQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8udGFiLkNvbnRhaW5lclxuICovXG5jbGFzcyBDb250ZW50VGFiQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LkNvbnRlbnRUYWJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5Db250ZW50VGFiQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RvY3MtY29udGVudC10YWJjb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZG9jcy1jb250ZW50LXRhYmNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhY3RpdmF0ZUluc2VydGVkVGFicz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmF0ZUluc2VydGVkVGFiczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY29udGVudENvbnRhaW5lckRlZmF1bHRzPXtjbHM6Wy8vLi4uXX1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnRlbnRDb250YWluZXJEZWZhdWx0czoge1xuICAgICAgICAgICAgY2xzOiBbXG4gICAgICAgICAgICAgICAgJ25lby1kb2NzLXRhYi1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgJ25lby10YWItY29udGVudC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICduZW8tY29udGFpbmVyJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBoZWFkZXJUb29sYmFyRGVmYXVsdHM9e2NsczpbLy8uLi5dfVxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyVG9vbGJhckRlZmF1bHRzOiB7XG4gICAgICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICAgICAnZG9jcy10YWItaGVhZGVyLXRvb2xiYXInLFxuICAgICAgICAgICAgICAgICduZW8tdGFiLWhlYWRlci10b29sYmFyJyxcbiAgICAgICAgICAgICAgICAnbmVvLXRvb2xiYXInXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9Wy8vLi4uXV1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgaHRtbCA6ICdXZWxjb21lIHRvIHRoZSBuZW8ubWpzIGRvY3MhJyxcbiAgICAgICAgICAgIHN0eWxlOiB7cGFkZGluZzogJzIwcHgnfSxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXVzZXJzJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnV2VsY29tZSEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc29ydGFibGU9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSBtZS5jbHM7XG5cbiAgICAgICAgY2xzLnVuc2hpZnQoJ2RvY3MtY29udGVudC10YWJjb250YWluZXInKTtcbiAgICAgICAgbWUuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRpbmcgdGhlIGJ1dHRvbiBjbGljayBsaXN0ZW5lciB0byBhbGxvdyBjbG9zaW5nIHRhYnMgb24gaWNvbiBjbGlja1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbWVyZ2VkIGNvbmZpZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBnZXRUYWJCdXR0b25Db25maWcoY29uZmlnLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgOiBIZWFkZXJCdXR0b24sXG4gICAgICAgICAgICAgICAgZmxleCAgIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGluZGV4ICA6IGluZGV4LFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IG1lLmFjdGl2ZUluZGV4ID09PSBpbmRleCxcblxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoID0gZGF0YS5wYXRoLm1hcChlID0+IGUuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aFswXS5pbmRleE9mKCduZW8tdGFiLWhlYWRlci1idXR0b24tJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5hY3RpdmVJbmRleCA9IGRhdGEuY29tcG9uZW50LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5yZW1vdmVBdChOZW8uZ2V0Q29tcG9uZW50KG1lLnRhYkJhcklkKS5pbmRleE9mKHBhdGhbMV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gey4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZ307XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250ZW50VGFiQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDb250ZW50VGFiQ29udGFpbmVyIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEV4YW1wbGVzU3RvcmUgZnJvbSAnLi4vc3RvcmUvRXhhbXBsZXMubWpzJztcbmltcG9ydCBUcmVlTGlzdCAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LkV4YW1wbGVzVHJlZUxpc3RcbiAqIEBleHRlbmRzIE5lby50cmVlLkxpc3RcbiAqL1xuY2xhc3MgRXhhbXBsZXNUcmVlTGlzdCBleHRlbmRzIFRyZWVMaXN0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LkV4YW1wbGVzVHJlZUxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5FeGFtcGxlc1RyZWVMaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2V4YW1wbGVzLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2V4YW1wbGVzLXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLWV4YW1wbGVzLXRyZWVsaXN0JywgJ25lby10cmVlLWxpc3QnLCAnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogW1xuICAgICAgICAgICAgJ2RvY3MtZXhhbXBsZXMtdHJlZWxpc3QnLFxuICAgICAgICAgICAgJ25lby10cmVlLWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAnbmVvLWxpc3QnXG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZT1FeGFtcGxlc1N0b3JlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBFeGFtcGxlc1N0b3JlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICB1cmw6ICcuLi8uLi9kb2NzL2V4YW1wbGVzLmpzb24nXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIGl0ZW1Sb290ID0gbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpO1xuXG4gICAgICAgICAgICBtZS5zdG9yZS5kYXRhID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5jcmVhdGVJdGVtcyhudWxsLCBpdGVtUm9vdCwgMCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV4YW1wbGVzVHJlZUxpc3QpO1xuXG5leHBvcnQge0V4YW1wbGVzVHJlZUxpc3QgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29udGFpbmVyICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgQnV0dG9uICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2J1dHRvbi9CYXNlLm1qcyc7XG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvU2VhcmNoLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5IZWFkZXJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBIZWFkZXJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuSGVhZGVyQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuSGVhZGVyQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2hlYWRlci1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbmVvLWRvY3MtaGVhZGVyLWNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRvY3MtaGVhZGVyLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWRvY3MtaGVhZGVyLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWlnaHQ9NTVcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogNTUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVsvLy4uLl1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBTZWFyY2hGaWVsZCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgIDoge2NoYW5nZTogJ29uTmF2aWdhdGlvblNlYXJjaEZpZWxkQ2hhbmdlJ30sXG4gICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdGaWx0ZXIgTmF2aWdhdGlvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgOiAyNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgOiBCdXR0b24sXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtjbGljazogJ29uU3dpdGNoVGhlbWVCdXR0b25DbGljayd9LFxuICAgICAgICAgICAgZmxleCAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoZWlnaHQgICAgICA6IDI3LFxuICAgICAgICAgICAgcmVmZXJlbmNlICAgOiAndGhlbWUtYnV0dG9uJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgIDoge21hcmdpblRvcDogJzVweCd9LFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnVGhlbWUgRGFyaydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgOiBCdXR0b24sXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtjbGljazogJ29uU3dpdGNoU291cmNlVmlld1RoZW1lQnV0dG9uQ2xpY2snfSxcbiAgICAgICAgICAgIGZsZXggICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgOiAyNyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSAgIDogJ3NvdXJjZS12aWV3LXRoZW1lLWJ1dHRvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICA6IHttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzVweCd9LFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnU291cmNlIFZpZXcgVGhlbWUgRGFyaydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgZmxleCA6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgY2xzICA6IFsnbmVvLWxvZ28tdGV4dCddLFxuICAgICAgICAgICAgaHRtbCA6ICduZW8ubWpzIGRvY3MnLFxuICAgICAgICAgICAgd2lkdGg6IDIxMFxuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlYWRlckNvbnRhaW5lcik7XG5cbmV4cG9ydCB7SGVhZGVyQ29udGFpbmVyIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEFwaVRyZWVMaXN0ICAgICAgICAgICAgIGZyb20gJy4vQXBpVHJlZUxpc3QubWpzJztcbmltcG9ydCBDbGFzc0RldGFpbHNDb250YWluZXIgICBmcm9tICcuL2NsYXNzZGV0YWlscy9NYWluQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuaW1wb3J0IENvbnRlbnRUYWJDb250YWluZXIgICAgIGZyb20gJy4vQ29udGVudFRhYkNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEV4YW1wbGVzVHJlZUxpc3QgICAgICAgIGZyb20gJy4vRXhhbXBsZXNUcmVlTGlzdC5tanMnO1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciAgICAgICAgIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFNvdXJjZVZpZXdDb21wb25lbnQgICAgIGZyb20gJy4vY2xhc3NkZXRhaWxzL1NvdXJjZVZpZXdDb21wb25lbnQubWpzJztcbmltcG9ydCBUdXRvcmlhbENvbXBvbmVudCAgICAgICBmcm9tICcuL2NsYXNzZGV0YWlscy9UdXRvcmlhbENvbXBvbmVudC5tanMnO1xuaW1wb3J0IFR1dG9yaWFsc1RyZWVMaXN0ICAgICAgIGZyb20gJy4vVHV0b3JpYWxzVHJlZUxpc3QubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5NYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtYWluLWNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtYWluLWNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvTW91bnQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b01vdW50IDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZG9jcy1tYWluY29udGFpbmVyJywgJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWRvY3MtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZXxudWxsfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVsvLy4uLl1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbSGVhZGVyQ29udGFpbmVyLCB7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlICAgOiAndGFiLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgY2xzICAgICA6IFsnbmVvLWRvY3MtbmF2aWdhdGlvbi10YWItY29udGFpbmVyJywgJ25lby10YWItY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDI5MCxcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aWR0aCAgIDogMjkwLFxuXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogQXBpVHJlZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2xlYWZJdGVtQ2xpY2s6ICdvbkFwaUxpc3RMZWFmQ2xpY2snfSxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnYXBpLXRyZWVsaXN0JyxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdBUEknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogVHV0b3JpYWxzVHJlZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2xlYWZJdGVtQ2xpY2s6ICdvblR1dG9yaWFsTGlzdExlYWZDbGljayd9LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICd0dXRvcmlhbHMtdHJlZWxpc3QnLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWhhbmRzLWhlbHBpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1R1dG9yaWFscydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgOiBFeGFtcGxlc1RyZWVMaXN0LFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtsZWFmSXRlbUNsaWNrOiAnb25FeGFtcGxlc0xpc3RMZWFmQ2xpY2snfSxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnZXhhbXBsZXMtdHJlZWxpc3QnLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWRlc2t0b3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0V4YW1wbGVzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IENvbnRlbnRUYWJDb250YWluZXIsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2NvbnRlbnQtdGFiY29udGFpbmVyJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLnN0b3JlKSB7XG4gICAgICAgICAgICBtZS5zdG9yZSA9IE5lby5jcmVhdGUoQ29sbGVjdGlvbiwge1xuICAgICAgICAgICAgICAgIGtleVByb3BlcnR5OiAnaWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc2FibGUgdGhlIGV4YW1wbGVzIFRhYiBmb3IgZGlzdCB2ZXJzaW9ucyB1bnRpbCB0aGUgd2VicGFjayBidWlsZHMgY2FuIGhhbmRsZSB0aGlzIChzZWU6ICMxNDApXG4gICAgICAgIG1lLml0ZW1zWzFdLml0ZW1zWzBdLml0ZW1zWzJdLnRhYkJ1dHRvbkNvbmZpZy5kaXNhYmxlZCA9IE5lby5jb25maWcuZW52aXJvbm1lbnQgIT09ICdkZXZlbG9wbWVudCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIHVybDogJy4uLy4uL2RvY3Mvb3V0cHV0L2FsbC5qc29uJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBkYXRhLmpzb247XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZG9jcy1tYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZG9jcy1tYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uQXBpTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBudHlwZSAgICAgICAgOiAnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLFxuICAgICAgICAgICAgaWQgICAgICAgICAgIDogcmVjb3JkLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogcmVjb3JkLnNpbmdsZXRvbiA/ICdmYSBmYS1hcnJvdy1hbHQtY2lyY2xlLXJpZ2h0JyA6ICdmYSBmYS1jb3B5cmlnaHQnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uRXhhbXBsZXNMaXN0TGVhZkNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCdjb250ZW50LXRhYmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICAgICAgICA9IHJlY29yZC5uYW1lLFxuICAgICAgICAgICAgcGF0aEFycmF5ICAgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICAgICAgICA9IG1lLmdldFJlZmVyZW5jZSgnZXhhbXBsZXMtdHJlZWxpc3QnKS5zdG9yZSxcbiAgICAgICAgICAgIHRtcFJlY29yZCAgICAgICAgICAgPSByZWNvcmQsXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc7XG5cbiAgICAgICAgd2hpbGUgKHRtcFJlY29yZC5wYXJlbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdG1wUmVjb3JkID0gc3RvcmUuZ2V0KHRtcFJlY29yZC5wYXJlbnRJZCk7XG4gICAgICAgICAgICBuYW1lICAgICAgPSB0bXBSZWNvcmQubmFtZSArICcuJyArIG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lID0gJ2V4YW1wbGVzXycgKyBuYW1lO1xuXG4gICAgICAgIHRhYkJ1dHRvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1kZXNrdG9wJyxcbiAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlY29yZC5wYXRoKSkge1xuICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgIC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9cbiAgICAgICAgICAgICAgICByZWNvcmQucGF0aCkudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogbW9kdWxlLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICA6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHRhYkJ1dHRvbkNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVjb3JkLnBhdGguZm9yRWFjaChwYXRoID0+IHtcbiAgICAgICAgICAgICAgICBwYXRoQXJyYXkucHVzaChpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyBwYXRoKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocGF0aEFycmF5KS50aGVuKGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogbW9kdWxlLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgICAgICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgIDogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgICAgICAgICAgOiBpdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgICAgICAgOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB0YWJCdXR0b25Db25maWdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzaCAgICAgICAgICAgICAgICA9IHZhbHVlPy5oYXNoLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKSxcbiAgICAgICAgICAgIHN0cnVjdHVyZVN0b3JlICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2FwaS10cmVlbGlzdCcpLnN0b3JlLFxuICAgICAgICAgICAgcmVjb3JkLCB0YWI7XG5cbiAgICAgICAgaWYgKGhhc2g/Lmhhc093blByb3BlcnR5KCd2aWV3U291cmNlJykpIHtcbiAgICAgICAgICAgIHJlY29yZCA9IHN0cnVjdHVyZVN0b3JlLmZpbmQoJ2NsYXNzTmFtZScsIGhhc2gudmlld1NvdXJjZSlbMF07XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICB0YWIgPSBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgICAgICA6ICdjbGFzc2RldGFpbHMtc291cmNldmlld2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICA6IGhhc2gudmlld1NvdXJjZSArICdfX3NvdXJjZScsXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgICAgICAgICA6IGhhc2gubGluZSxcbiAgICAgICAgICAgICAgICAgICAgc3RydWN0dXJlRGF0YTogcmVjb3JkLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogcmVjb3JkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRqdXN0IHRoZSBoaWdobGlnaHRlZCBsaW5lIGZvciBhbHJlYWR5IGFkZGVkIHNvdXJjZSB2aWV3IHRhYnNcbiAgICAgICAgICAgICAgICB0YWIubGluZSA9IGhhc2gubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk5hdmlnYXRpb25TZWFyY2hGaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdleGFtcGxlcy10cmVlbGlzdCcpIC5maWx0ZXIoJ25hbWUnLCB2YWx1ZSwgbnVsbCk7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnYXBpLXRyZWVsaXN0JykgICAgICAuZmlsdGVyKCduYW1lJywgdmFsdWUsIG51bGwpO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3R1dG9yaWFscy10cmVlbGlzdCcpLmZpbHRlcignbmFtZScsIHZhbHVlLCBudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU3dpdGNoU291cmNlVmlld1RoZW1lQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gbWUuZ2V0UmVmZXJlbmNlKCdzb3VyY2Utdmlldy10aGVtZS1idXR0b24nKSxcbiAgICAgICAgICAgIGJ1dHRvblRleHQsIGhyZWY7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnU291cmNlIFZpZXcgVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1NvdXJjZSBWaWV3IFRoZW1lIERhcmsnO1xuICAgICAgICAgICAgaHJlZiAgICAgICA9ICcuL3Jlc291cmNlcy9oaWdobGlnaHRqcy1jdXN0b20tZ2l0aHViLXRoZW1lLmNzcyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1NvdXJjZSBWaWV3IFRoZW1lIExpZ2h0JztcbiAgICAgICAgICAgIGhyZWYgICAgICAgPSAnLi9yZXNvdXJjZXMvaGlnaGxpZ2h0anMtY3VzdG9tLWRhcmstdGhlbWUuY3NzJztcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLlN0eWxlc2hlZXQuc3dhcFN0eWxlU2hlZXQoe1xuICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgIGlkICA6ICdobGpzLXRoZW1lJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b25UZXh0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU3dpdGNoVGhlbWVCdXR0b25DbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidXR0b24gPSBtZS5nZXRSZWZlcmVuY2UoJ3RoZW1lLWJ1dHRvbicpLFxuICAgICAgICAgICAgdmlldyAgID0gbWUuY29tcG9uZW50LFxuICAgICAgICAgICAgYnV0dG9uVGV4dCwgY2xzLCB0aGVtZTtcblxuICAgICAgICBpZiAoYnV0dG9uLnRleHQgPT09ICdUaGVtZSBMaWdodCcpIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnVGhlbWUgRGFyayc7XG4gICAgICAgICAgICB0aGVtZSAgICAgID0gJ25lby10aGVtZS1saWdodCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1RoZW1lIExpZ2h0JztcbiAgICAgICAgICAgIHRoZW1lICAgICAgPSAnbmVvLXRoZW1lLWRhcmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlQ3NzVmFycykge1xuICAgICAgICAgICAgY2xzID0gWy4uLnZpZXcuY2xzXTtcblxuICAgICAgICAgICAgdmlldy5jbHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnbmVvLXRoZW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHRoZW1lKTtcbiAgICAgICAgICAgIHZpZXcuY2xzID0gY2xzO1xuXG4gICAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvblRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvblR1dG9yaWFsTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBudHlwZSAgIDogJ2NsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCcsXG4gICAgICAgICAgICBmaWxlTmFtZTogcmVjb3JkLmZpbGVOYW1lLFxuICAgICAgICAgICAgZmlsZVR5cGU6IHJlY29yZC50eXBlLFxuICAgICAgICAgICAgaWQgICAgICA6IHJlY29yZC5uYW1lLFxuXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaGFuZHMtaGVscGluZycsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogcmVjb3JkLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgVHJlZUxpc3QgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RyZWUvTGlzdC5tanMnO1xuaW1wb3J0IFR1dG9yaWFsc1N0b3JlIGZyb20gJy4uL3N0b3JlL1R1dG9yaWFscy5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuVHV0b3JpYWxzVHJlZUxpc3RcbiAqIEBleHRlbmRzIE5lby50cmVlLkxpc3RcbiAqL1xuY2xhc3MgVHV0b3JpYWxzVHJlZUxpc3QgZXh0ZW5kcyBUcmVlTGlzdCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5UdXRvcmlhbHNUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LlR1dG9yaWFsc1RyZWVMaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3R1dG9yaWFscy10cmVlbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0dXRvcmlhbHMtdHJlZWxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2RvY3MtdHV0b3JpYWxzLXRyZWVsaXN0JywgJ25lby10cmVlLWxpc3QnLCAnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogW1xuICAgICAgICAgICAgJ2RvY3MtdHV0b3JpYWxzLXRyZWVsaXN0JyxcbiAgICAgICAgICAgICduZW8tdHJlZS1saXN0JyxcbiAgICAgICAgICAgICduZW8tbGlzdC1jb250YWluZXInLFxuICAgICAgICAgICAgJ25lby1saXN0J1xuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gc3RvcmU9VHV0b3JpYWxzU3RvcmVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IFR1dG9yaWFsc1N0b3JlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICB1cmw6ICcuLi8uLi9kb2NzL3R1dG9yaWFscy90dXRvcmlhbHMuanNvbidcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxldCB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5nZXRMaXN0SXRlbXNSb290KCk7XG5cbiAgICAgICAgICAgIG1lLnN0b3JlLmRhdGEgPSBkYXRhLmpzb247XG4gICAgICAgICAgICBpdGVtUm9vdCA9IG1lLmNyZWF0ZUl0ZW1zKG51bGwsIGl0ZW1Sb290LCAwKTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHV0b3JpYWxzVHJlZUxpc3QpO1xuXG5leHBvcnQge1R1dG9yaWFsc1RyZWVMaXN0IGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbXBvbmVudCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgU291cmNlVmlld0NvbXBvbmVudCBmcm9tICcuL1NvdXJjZVZpZXdDb21wb25lbnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IZWFkZXJDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLkhlYWRlckNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IZWFkZXJDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gcmVjb3JkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICByZWNvcmRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBkb21MaXN0ZW5lcnNcbiAgICAgICAgICovXG4gICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogJ29uSGVhZGVyQ2xpY2snLCAvLyBEb2NzLmFwcC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAgICAgICAgZGVsZWdhdGU6ICcubmVvLWRvY3MtaGVhZGVyLXRleHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWyduZW8tZG9jcy1oZWFkZXItdGV4dCddfVxuICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gbWUucmVjb3JkLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0b3JlICAgICA9IG1lLnVwKCdtYWluLWNvbnRhaW5lcicpLnN0b3JlLFxuICAgICAgICAgICAgcmVjb3JkICAgID0gc3RvcmUuZmluZCh7JGtpbmQ6IGNsYXNzTmFtZSA9PT0gJ05lbycgPyAnbW9kdWxlJyA6ICdjbGFzcycsIG5lb0NsYXNzTmFtZTogY2xhc3NOYW1lfSlbMF0sXG4gICAgICAgICAgICBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgID0gcmVjb3JkPy50YWdzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIHNpbmdsZXRvbiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudGFnc1tpXS50aXRsZSA9PT0gJ3NpbmdsZXRvbicpIHtcbiAgICAgICAgICAgICAgICBzaW5nbGV0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmRvbS5jblswXS5pbm5lckhUTUwgPSBzaW5nbGV0b24gPyAoY2xhc3NOYW1lICsgJyDihpIgU2luZ2xldG9uJykgOiBjbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHJlY29yZC5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3MtaGVhZGVyLWRlc2NyaXB0aW9uJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiByZWNvcmQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWFkZXJDb21wb25lbnQpO1xuXG5leHBvcnQge0hlYWRlckNvbXBvbmVudCBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBUcmVlTGlzdCBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdHJlZS9MaXN0Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdFxuICogQGV4dGVuZHMgTmVvLnRyZWUuTGlzdFxuICovXG5jbGFzcyBIaWVyYXJjaHlUcmVlTGlzdCBleHRlbmRzIFRyZWVMaXN0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtdHJlZWxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2RvY3MtY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLCAnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogW1xuICAgICAgICAgICAgJ2RvY3MtY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAnbmVvLXRyZWUtbGlzdCcsXG4gICAgICAgICAgICAnbmVvLWxpc3QnXG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93Q29sbGFwc2VFeHBhbmRBbGxJY29ucz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnM6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHN0cnVjdHVyZURhdGE9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RydWN0dXJlRGF0YTogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmNyZWF0ZVN0b3JlSXRlbXMoKTtcbiAgICAgICAgbWUuY3JlYXRlSXRlbXMobnVsbCwgbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZVN0b3JlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgPSBtZS5zdHJ1Y3R1cmVEYXRhLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIG1haW5Db250YWluZXIgPSBtZS51cCgnbWFpbi1jb250YWluZXInKSxcbiAgICAgICAgICAgIG1haW5TdG9yZSAgICAgPSBtYWluQ29udGFpbmVyLnN0b3JlLFxuICAgICAgICAgICAgc3RvcmVJdGVtcyAgICA9IFtdLFxuICAgICAgICAgICAgdG1wSXRlbXMgICAgICA9IFtdLFxuICAgICAgICAgICAgaXRlbSwgcGFyZW50SWQ7XG5cbiAgICAgICAgaXRlbSA9IG1haW5TdG9yZS5maW5kKHtcbiAgICAgICAgICAgICRraW5kICAgICAgIDogY2xhc3NOYW1lID09PSAnTmVvJyA/ICdtb2R1bGUnIDogJ2NsYXNzJyxcbiAgICAgICAgICAgIG5lb0NsYXNzTmFtZTogbWUuc3RydWN0dXJlRGF0YS5jbGFzc05hbWVcbiAgICAgICAgfSlbMF07XG5cbiAgICAgICAgdG1wSXRlbXMudW5zaGlmdChpdGVtKTtcblxuICAgICAgICB3aGlsZSAoaXRlbT8uaGFzT3duUHJvcGVydHkoJ2F1Z21lbnRzJykpIHtcbiAgICAgICAgICAgIGl0ZW0gPSBtYWluU3RvcmUuZmluZCh7XG4gICAgICAgICAgICAgICAgJGtpbmQgICAgICAgOiAnY2xhc3MnLFxuICAgICAgICAgICAgICAgIG5lb0NsYXNzTmFtZTogaXRlbS5hdWdtZW50c1swXVxuICAgICAgICAgICAgfSlbMF07XG5cbiAgICAgICAgICAgIHRtcEl0ZW1zLnVuc2hpZnQoaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0bXBJdGVtcy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcGFyZW50SWQgPSB0bXBJdGVtc1tpbmRleCAtIDFdID8gdG1wSXRlbXNbaW5kZXggLSAxXS5pZCA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICBzdG9yZUl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IGtleS5pZCxcbiAgICAgICAgICAgICAgICAgICAgaXNMZWFmICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgICAgOiBrZXkubmVvQ2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogcGFyZW50SWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBzdG9yZUl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uTGVhZkl0ZW1DbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZub2RlSWQgID0gbWUuZ2V0SXRlbUlkKHJlY29yZC5pZCksXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICB2ZG9tTm9kZSA9IG1lLmdldFZkb21DaGlsZCh2bm9kZUlkKTtcblxuICAgICAgICBOZW9BcnJheVtyZWNvcmQuY2hlY2tlZCA/ICdhZGQnIDogJ3JlbW92ZSddKHZkb21Ob2RlLmNscywgJ3VuY2hlY2tlZCcpO1xuXG4gICAgICAgIHJlY29yZC5jaGVja2VkID0gIXJlY29yZC5jaGVja2VkO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIG1lLmZpcmUoJ3JlZnJlc2hDbGFzc01lbWJlcnMnKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhpZXJhcmNoeVRyZWVMaXN0KTtcblxuZXhwb3J0IHtIaWVyYXJjaHlUcmVlTGlzdCBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgICAgICAgICBmcm9tICcuL0hlYWRlckNvbXBvbmVudC5tanMnO1xuaW1wb3J0IEhpZXJhcmNoeVRyZWVMaXN0ICAgICAgIGZyb20gJy4vSGllcmFyY2h5VHJlZUxpc3QubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgTWVtYmVyc0xpc3QgICAgICAgICAgICAgZnJvbSAnLi9NZW1iZXJzTGlzdC5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBTZWFyY2hGaWVsZCAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWFyY2gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZG9jcy1jbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9TWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IE1haW5Db250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzdHJ1Y3R1cmVEYXRhPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0cnVjdHVyZURhdGE6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9Wy8vLi4uXV1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIF9jbHMgIDogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVyY29udGFpbmVyJ10sXG4gICAgICAgICAgICBmbGV4ICA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlIDogUGFuZWwsXG4gICAgICAgICAgICAgICAgY2xzICAgIDogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVycGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgICAgICBkb2NrIDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Ym9yZGVyV2lkdGg6IDB9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd0NvbmZpZ3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0NvbmZpZ3MnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd01ldGhvZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ01ldGhvZHMnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd0V2ZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdFdmVudHMnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogU2VhcmNoRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICAgICA6IHtjaGFuZ2U6ICdvblNlYXJjaEZpZWxkQ2hhbmdlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdGaWx0ZXIgTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgICA6IDE2MCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcCA6ICcycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uVG9nZ2xlTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd1ByaXZhdGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblJpZ2h0OiAnNXB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdQcml2YXRlJyxcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25Ub2dnbGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLWNoZWNrLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93UHJvdGVjdGVkTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzVweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnUHJvdGVjdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25Ub2dnbGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLWNoZWNrLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93U3RhdGljTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdTdGF0aWMnXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBIZWFkZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkOiAnQGNvbmZpZzpzdHJ1Y3R1cmVEYXRhJ1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgIDogSGllcmFyY2h5VHJlZUxpc3QsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMCBhdXRvJyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aCAgICAgOiAzMzAsXG4gICAgICAgICAgICAgICAgc3RydWN0dXJlRGF0YTogJ0Bjb25maWc6c3RydWN0dXJlRGF0YSdcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTWVtYmVyc0xpc3QsXG4gICAgICAgICAgICBmbGV4ICAgICA6IDEsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHttdXRhdGVJdGVtczogJ29uTXV0YXRlSXRlbXMnfSxcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJ2NsYXNzZGV0YWlscy1tZW1iZXJzbGlzdCdcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbXBvbmVudCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgU291cmNlVmlld0NvbXBvbmVudCBmcm9tIFwiLi9Tb3VyY2VWaWV3Q29tcG9uZW50Lm1qc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXJDb250cm9sbGVyJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25IZWFkZXJDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlY29yZCAgICAgICAgICAgICAgPSBtZS5jb21wb25lbnQuc3RydWN0dXJlRGF0YSxcbiAgICAgICAgICAgIG1haW5Db250YWluZXIgICAgICAgPSBtZS5jb21wb25lbnQudXAoJ21haW4tY29udGFpbmVyJyksXG4gICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyID0gbWFpbkNvbnRhaW5lci5kb3duKCdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJyksXG4gICAgICAgICAgICBjbGFzc05hbWUgICAgICAgICAgID0gKHJlY29yZC5wYXRoID8gcmVjb3JkLnBhdGggKyAnLicgOiAnJykgKyByZWNvcmQubmFtZTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBTb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICAgICAgaWQgICAgICAgICAgIDogY2xhc3NOYW1lICsgJ19fc291cmNlJyxcbiAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvZGUnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IGNsYXNzTmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmVcbiAgICAgKi9cbiAgICBvbk11dGF0ZUl0ZW1zKHN0b3JlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRDb25maWdzICAgID0gMCxcbiAgICAgICAgICAgIGNvdW50RXZlbnRzICAgICA9IDAsXG4gICAgICAgICAgICBjb3VudE1ldGhvZHMgICAgPSAwLFxuICAgICAgICAgICAgY291bnRQcml2YXRlcyAgID0gMCxcbiAgICAgICAgICAgIGNvdW50UHJvdGVjdGVkcyA9IDAsXG4gICAgICAgICAgICBjb3VudFN0YXRpY3MgICAgPSAwO1xuXG4gICAgICAgIHN0b3JlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5raW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY291bnRNZXRob2RzKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ua2luZCA9PT0gJ21lbWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb3VudENvbmZpZ3MrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRFdmVudHMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uYWNjZXNzID09PSAncHJpdmF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb3VudFByaXZhdGVzKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uYWNjZXNzID09PSAncHJvdGVjdGVkJykge1xuICAgICAgICAgICAgICAgIGNvdW50UHJvdGVjdGVkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5zY29wZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgICBjb3VudFN0YXRpY3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93Q29uZmlncycpICAgICAgICAgLnRleHQgPSAnQ29uZmlncyAnICAgKyBjb3VudENvbmZpZ3M7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd01ldGhvZHMnKSAgICAgICAgIC50ZXh0ID0gJ01ldGhvZHMgJyAgICsgY291bnRNZXRob2RzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dFdmVudHMnKSAgICAgICAgICAudGV4dCA9ICdFdmVudHMgJyAgICArIGNvdW50RXZlbnRzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dQcml2YXRlTWVtYmVycycpICAudGV4dCA9ICdQcml2YXRlICcgICArIGNvdW50UHJpdmF0ZXM7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd1Byb3RlY3RlZE1lbWJlcnMnKS50ZXh0ID0gJ1Byb3RlY3RlZCAnICsgY291bnRQcm90ZWN0ZWRzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dTdGF0aWNNZW1iZXJzJykgICAudGV4dCA9ICdTdGF0aWMgJyAgICArIGNvdW50U3RhdGljcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TY3JvbGxJbnRvVmlldyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uLnJlZmVyZW5jZS5zdWJzdHIoNCksXG4gICAgICAgICAgICB2bm9kZUlkOiBtZS5jb21wb25lbnQudmRvbS5pZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TZWFyY2hGaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnKS5maWx0ZXJNZW1iZXJzUXVlcnkgPSBkYXRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblRvZ2dsZU1lbWJlcnMoZGF0YSkge1xuICAgICAgICBsZXQgYnV0dG9uICAgICAgPSBOZW8uZ2V0Q29tcG9uZW50KGRhdGEudGFyZ2V0LmlkKSxcbiAgICAgICAgICAgIG1lbWJlcnNMaXN0ID0gdGhpcy5nZXRSZWZlcmVuY2UoJ2NsYXNzZGV0YWlscy1tZW1iZXJzbGlzdCcpO1xuXG4gICAgICAgIGJ1dHRvbi5pY29uQ2xzID0gYnV0dG9uLmNoZWNrZWQgPyAnZmEgZmEtc3F1YXJlJyA6ICdmYSBmYS1jaGVjay1zcXVhcmUnO1xuICAgICAgICBidXR0b24uY2hlY2tlZCA9ICFidXR0b24uY2hlY2tlZDtcblxuICAgICAgICBtZW1iZXJzTGlzdFtidXR0b24ucmVmZXJlbmNlXSA9IGJ1dHRvbi5jaGVja2VkO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xpc3QvQmFzZS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1lbWJlcnNMaXN0XG4gKiBAZXh0ZW5kcyBOZW8ubGlzdC5CYXNlXG4gKi9cbmNsYXNzIE1lbWJlcnNMaXN0IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWVtYmVyc0xpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWVtYmVyc0xpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1tZW1iZXJzbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnZG9jcy1jbGFzc2hpZXJhcmNoeS1tZW1iZXJzbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnZG9jcy1jbGFzc2hpZXJhcmNoeS1tZW1iZXJzbGlzdCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBmaWx0ZXJNZW1iZXJzUXVlcnlfPScnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlck1lbWJlcnNRdWVyeV86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd1ByaXZhdGVNZW1iZXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93UHJpdmF0ZU1lbWJlcnNfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd1Byb3RlY3RlZE1lbWJlcnNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dQcm90ZWN0ZWRNZW1iZXJzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dTdGF0aWNNZW1iZXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93U3RhdGljTWVtYmVyc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB0YXJnZXRDbGFzc05hbWU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0Q2xhc3NOYW1lOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHtjbjogW119XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhpZXJhcmNoeVZpZXcgPSBtZS51cCgnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInKS5kb3duKCdjbGFzc2hpZXJhcmNoeS10cmVlbGlzdCcpLFxuICAgICAgICAgICAgbWFpblN0b3JlICAgICA9IG1lLnVwKCdtYWluLWNvbnRhaW5lcicpLnN0b3JlO1xuXG4gICAgICAgIGhpZXJhcmNoeVZpZXcub24oe1xuICAgICAgICAgICAgcmVmcmVzaENsYXNzTWVtYmVyczogbWUub25SZWZyZXNoQ2xhc3NNZW1iZXJzLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuc3RvcmUgPSBOZW8uY3JlYXRlKENvbGxlY3Rpb24sIHtcbiAgICAgICAgICAgIGZpbHRlck1vZGU6ICdhZHZhbmNlZCcsXG4gICAgICAgICAgICBzb3VyY2VJZCAgOiBtYWluU3RvcmUuaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUub25SZWZyZXNoQ2xhc3NNZW1iZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmaWx0ZXJNZW1iZXJzUXVlcnkgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmlsdGVyTWVtYmVyc1F1ZXJ5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd1Byb3RlY3RlZE1lbWJlcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93UHJvdGVjdGVkTWVtYmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25SZWZyZXNoQ2xhc3NNZW1iZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dQcml2YXRlTWVtYmVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dQcml2YXRlTWVtYmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25SZWZyZXNoQ2xhc3NNZW1iZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dTdGF0aWNNZW1iZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1N0YXRpY01lbWJlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVmcmVzaENsYXNzTWVtYmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgYXBwbHlDb25maWdzSGVhZGVyKHN0b3JlLCB2ZG9tKSB7XG4gICAgICAgIGlmIChzdG9yZS5pdGVtc1swXT8ua2luZCA9PT0gJ21lbWJlcicpIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLW1lbWJlcmxpc3QtZ3JvdXAtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnQ29uZmlncycsXG4gICAgICAgICAgICAgICAgJ2RhdGEtbGlzdC1oZWFkZXInOiAnQ29uZmlncydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBhcHBseUV2ZW50c0hlYWRlcihpdGVtLCBpbmRleCwgc3RvcmUsIHZkb20pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXRlbS5raW5kID09PSAnZXZlbnQnICYmXG4gICAgICAgICAgICBzdG9yZS5pdGVtc1tpbmRleCAtMV0/LmtpbmQgIT09ICdldmVudCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy1tZW1iZXJsaXN0LWdyb3VwLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ0V2ZW50cycsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7ekluZGV4OiAzfSxcbiAgICAgICAgICAgICAgICAnZGF0YS1saXN0LWhlYWRlcic6ICdFdmVudHMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgYXBwbHlNZXRob2RzSGVhZGVyKGl0ZW0sIGluZGV4LCBzdG9yZSwgdmRvbSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpdGVtLmtpbmQgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhc3RvcmUuaXRlbXNbaW5kZXggLTFdIHx8IChcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuaXRlbXNbaW5kZXggLTFdPy5raW5kICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLW1lbWJlcmxpc3QtZ3JvdXAtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnTWV0aG9kcycsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7ekluZGV4OiAyfSxcbiAgICAgICAgICAgICAgICAnZGF0YS1saXN0LWhlYWRlcic6ICdNZXRob2RzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlck1lbWJlcnNSZWdFeCA9IG5ldyBSZWdFeHAobWUuZmlsdGVyTWVtYmVyc1F1ZXJ5IHx8ICcnLCAnZ2knKSxcbiAgICAgICAgICAgIGhhc0V4YW1wbGVzICAgICAgICA9IGZhbHNlLFxuICAgICAgICAgICAgdGFyZ2V0Q2xhc3NOYW1lICAgID0gbWUudGFyZ2V0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGhlYWRlclRleHQsIGl0ZW1BdHRyaWJ1dGVzLCBpdGVtQ29uZmlnLCBwYXRoO1xuXG4gICAgICAgIHZkb20uY24gPSBbXTtcbiAgICAgICAgdmRvbSA9IG1lLmFwcGx5Q29uZmlnc0hlYWRlcihtZS5zdG9yZSwgdmRvbSk7XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZkb20gPSBtZS5hcHBseUV2ZW50c0hlYWRlciggaXRlbSwgaW5kZXgsIG1lLnN0b3JlLCB2ZG9tKTtcbiAgICAgICAgICAgIHZkb20gPSBtZS5hcHBseU1ldGhvZHNIZWFkZXIoaXRlbSwgaW5kZXgsIG1lLnN0b3JlLCB2ZG9tKTtcblxuICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZS5zdWJzdHIoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBpdGVtLm5hbWUuc2xpY2UoMCwgLTEpIDtcbiAgICAgICAgICAgICAgICBpdGVtQXR0cmlidXRlcy5wdXNoKCdHUycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goJ2luaGVyaXRlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5hY2Nlc3MgPT09ICdwcml2YXRlJyB8fCBpdGVtLmFjY2VzcyA9PT0gJ3Byb3RlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICBpdGVtQXR0cmlidXRlcy5wdXNoKGl0ZW0uYWNjZXNzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uc2NvcGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMucHVzaCgnc3RhdGljJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhlYWRlclRleHQgPSBpdGVtLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09ICcnICYmIG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgPSBoZWFkZXJUZXh0LnJlcGxhY2UoZmlsdGVyTWVtYmVyc1JlZ0V4LCBtYXRjaCA9PiBgPHNwYW4gY2xhc3M9XCJuZW8taGlnaGxpZ2h0LXNlYXJjaFwiPiR7bWF0Y2h9PC9zcGFuPmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25maWdzXG4gICAgICAgICAgICBpZiAoaXRlbS50eXBlPy5uYW1lcykge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgKz0gKCc6IHsnICsgTWVtYmVyc0xpc3QuZXNjYXBlSHRtbChpdGVtLnR5cGUubmFtZXMuam9pbignfCcpKSArICd9Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdkZWZhdWx0dmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgKz0gKCcgPSAnICsgaXRlbS5kZWZhdWx0dmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtZXRob2RzXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJhbXMgJiYgaXRlbS5raW5kICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dCArPSAoJygnICsgaXRlbS5wYXJhbXMucmVkdWNlKChyZXN1bHQsIHBhcmFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5uYW1lLmluZGV4T2YoJy4nKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbS5vcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKCdbJyArIHBhcmFtLm5hbWUgKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJhbS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcsICcpICsgJyknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0ucmV0dXJucykge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgKz0gKCcg4oaSIHsnICsgTWVtYmVyc0xpc3QuZXNjYXBlSHRtbChpdGVtLnJldHVybnNbMF0udHlwZS5uYW1lcy5qb2luKCd8JykgKyAnfScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGF0aCA9IGl0ZW0ubWV0YS5wYXRoO1xuXG4gICAgICAgICAgICBpZiAocGF0aC5pbmNsdWRlcygnL25lby5tanMvJykpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIocGF0aC5pbmRleE9mKCcvbmVvLm1qcy8nKSArIDkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXRoLmluY2x1ZGVzKCcvbmVvbWpzLycpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKHBhdGguaW5kZXhPZignL25lb21qcy8nKSAgKyA4KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0aC5pbmNsdWRlcygnL25lby8nKSkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cihwYXRoLmluZGV4T2YoJy9uZW8vJykgICAgICsgNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1saXN0LWl0ZW0nXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGlzdC1pdGVtLWhlYWRlci1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1saXN0LWl0ZW0taGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGhlYWRlclRleHRcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tbGlzdC1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBpdGVtQXR0cmlidXRlcy5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjbHM6ICduZW8tZG9jcy12aWV3LXNvdXJjZS1saW5rLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGNuIDpbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3Mtdmlldy1zb3VyY2UtbGluayddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZiAgICAgOiAnI3ZpZXdTb3VyY2U9JyArIGl0ZW0ubmVvQ2xhc3NOYW1lICsgJyZsaW5lPScgKyBpdGVtLm1ldGEubGluZW5vLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnU291cmNlOiAnICsgcGF0aCArICcvJyArIGl0ZW0ubWV0YS5maWxlbmFtZSArICcgKExpbmUgJyArIGl0ZW0ubWV0YS5saW5lbm8gKyAnKSdcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5leGFtcGxlcz8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGhhc0V4YW1wbGVzID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZXhhbXBsZXMuZm9yRWFjaChleGFtcGxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbmZpZy5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGV4YW1wbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJhbXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpdGVtQ29uZmlnLmNuLnB1c2goTWVtYmVyc0xpc3QuY3JlYXRlUGFyYW1ldGVyc1RhYmxlKGl0ZW0ucGFyYW1zKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnJldHVybnMgJiYgaXRlbS5raW5kICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgaXRlbUNvbmZpZy5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnUmV0dXJucyB7JyArIE1lbWJlcnNMaXN0LmVzY2FwZUh0bWwoaXRlbS5yZXR1cm5zWzBdLnR5cGUubmFtZXMuam9pbignfCcpICsgJ30gJykgKyAoaXRlbS5yZXR1cm5zWzBdLmRlc2NyaXB0aW9uIHx8ICcnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goaXRlbUNvbmZpZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGlmIChoYXNFeGFtcGxlcykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc3ludGF4SGlnaGxpZ2h0SW5pdCgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUGFyYW1ldGVyc1RhYmxlKHBhcmFtcykge1xuICAgICAgICBsZXQgaGFzRGVmYXVsdFZhbHVlcyAgPSBmYWxzZSxcbiAgICAgICAgICAgIGhhc09wdGlvbmFsUGFyYW1zID0gZmFsc2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiwgbmVzdGVkUGFyYW1zLCBwYXJhbVRhYmxlO1xuXG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdHZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICBoYXNEZWZhdWx0VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcmFtLmhhc093blByb3BlcnR5KCdvcHRpb25hbCcpKSB7XG4gICAgICAgICAgICAgICAgaGFzT3B0aW9uYWxQYXJhbXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwYXJhbVRhYmxlID0ge1xuICAgICAgICAgICAgdGFnOiAndGFibGUnLFxuICAgICAgICAgICAgY2xzOiAnZG9jcy1wYXJhbS10YWJsZScsXG4gICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAndGhlYWQnLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdOYW1lJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdUeXBlJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaGFzRGVmYXVsdFZhbHVlcykge1xuICAgICAgICAgICAgcGFyYW1UYWJsZS5jblswXS5jbi5zcGxpY2UoMiwgMCwge1xuICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdEZWZhdWx0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzT3B0aW9uYWxQYXJhbXMpIHtcbiAgICAgICAgICAgIHBhcmFtVGFibGUuY25bMF0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnT3B0aW9uYWwnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5uYW1lLmluZGV4T2YoJy4nKSA8IDApIHsgLy8gaWdub3JlIG5lc3RlZCBwYXJhbXNcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBuZXN0ZWRQYXJhbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocC5uYW1lLmluZGV4T2YocGFyYW0ubmFtZSArICcuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBOZW8uY2xvbmUocCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHAubmFtZSA9IHAubmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5uYW1lLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLm5hbWUgPSBwLm5hbWUuam9pbignLicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXN0ZWRQYXJhbXMucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5lc3RlZFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogZGVzY3JpcHRpb24uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVtYmVyc0xpc3QuY3JlYXRlUGFyYW1ldGVyc1RhYmxlKG5lc3RlZFBhcmFtcyldXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJhbVRhYmxlLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLnR5cGUgPyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKHBhcmFtLnR5cGUubmFtZXMuam9pbignIHwgJykpIDogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25dXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVRhYmxlLmNuW3BhcmFtVGFibGUuY24ubGVuZ3RoIC0gMV0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0uZGVmYXVsdHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IChwYXJhbS5kZWZhdWx0dmFsdWUgKyAnJylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhhc09wdGlvbmFsUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtVGFibGUuY25bcGFyYW1UYWJsZS5jbi5sZW5ndGggLSAxXS5jbi5zcGxpY2UoMiwgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS5vcHRpb25hbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwYXJhbVRhYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzICc8JyAmICc+J1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGVzY2FwZUh0bWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBmaWx0ZXJBbmRTb3J0SXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoaWVyYXJjaHlNYXAgICA9IHt9LFxuICAgICAgICAgICAgaGllcmFyY2h5U3RvcmUgPSBtZS51cCgnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInKS5kb3duKCdjbGFzc2hpZXJhcmNoeS10cmVlbGlzdCcpLnN0b3JlLFxuICAgICAgICAgICAgaGllcmFyY2h5SXRlbXMgPSBoaWVyYXJjaHlTdG9yZS5pdGVtcyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIHRtcEl0ZW1zICAgICAgID0gW10sXG4gICAgICAgICAgICBmaWx0ZXJzLCB0bXBJdGVtc0xlbjtcblxuICAgICAgICBoaWVyYXJjaHlJdGVtcy5mb3JFYWNoKGNscyA9PiB7XG4gICAgICAgICAgICBpZiAoY2xzLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGNscy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG1wSXRlbXNMZW4gPSB0bXBJdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCB0bXBJdGVtc0xlbjsgaSsrKSB7XG4gICAgICAgICAgICBoaWVyYXJjaHlNYXBbdG1wSXRlbXNbaV1dID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnRhcmdldENsYXNzTmFtZSA9IGhpZXJhcmNoeUl0ZW1zW2hpZXJhcmNoeUl0ZW1zLmxlbmd0aCAtMV0ubmFtZTtcblxuICAgICAgICBmaWx0ZXJzID0gW3tcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnaW5jbHVkZWQnLFxuICAgICAgICAgICAgcHJvcGVydHk6ICduZW9DbGFzc05hbWUnLFxuICAgICAgICAgICAgdmFsdWUgICA6IHRtcEl0ZW1zXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAna2luZCcsXG4gICAgICAgICAgICB2YWx1ZSAgIDogJ2NsYXNzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2tpbmQnLFxuICAgICAgICAgICAgdmFsdWUgICA6ICdjb25zdGFudCcgLy8gdG9kbz9cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgcHJvcGVydHk6ICdraW5kJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiAnbW9kdWxlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvcGVyYXRvcjogJ2lzVW5kZWZpbmVkJyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAnaW5oZXJpdGVkJ1xuICAgICAgICB9XTtcblxuICAgICAgICBpZiAoIW1lLnNob3dQcml2YXRlTWVtYmVycykge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdhY2Nlc3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiAncHJpdmF0ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZS5zaG93UHJvdGVjdGVkTWVtYmVycykge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdhY2Nlc3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiAncHJvdGVjdGVkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLnNob3dTdGF0aWNNZW1iZXJzKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ3Njb3BlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3N0YXRpYydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gJycgJiYgbWUuZmlsdGVyTWVtYmVyc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICduYW1lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogbWUuZmlsdGVyTWVtYmVyc1F1ZXJ5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICBzY29wZSAgIDogbWUsXG4gICAgICAgICAgICBmaWx0ZXJCeTogZnVuY3Rpb24oaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q2xhc3NOYW1lID0gbWUudGFyZ2V0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW0sIGksIGxlbjtcblxuICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBleGNsdWRlIGluaGVyaXRlZCBjbGFzc05hbWUgJiBudHlwZSBjb25maWdzXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ250eXBlJyAmJiBpdGVtLm5lb0NsYXNzTmFtZSAhPT0gdGFyZ2V0Q2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5lb0NsYXNzTmFtZSAhPT0gdGFyZ2V0Q2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgICA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlbiA9IGZpbHRlcmVkSXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbSA9IGZpbHRlcmVkSXRlbXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSBmaWx0ZXJlZEl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSAgPT09IGZpbHRlcmVkSXRlbS5uYW1lICAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNjb3BlID09PSBmaWx0ZXJlZEl0ZW0uc2NvcGUgJiYgLy8gc3RhdGljIFZTIGluc3RhbmNlIG1lbWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGllcmFyY2h5TWFwW2l0ZW0ubmVvQ2xhc3NOYW1lXSA8IGhpZXJhcmNoeU1hcFtmaWx0ZXJlZEl0ZW0ubmVvQ2xhc3NOYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnN0b3JlLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXG4gICAgICAgIG1lLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgLy8gQ29uZmlncyA9PiBNZXRob2RzID0+IEV2ZW50c1xuICAgICAgICAgICAgc29ydEJ5OiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgYSA9IGEua2luZCA9PT0gJ21lbWJlcicgPyAwIDogYS5raW5kID09PSAnZnVuY3Rpb24nID8gMSA6IDI7XG4gICAgICAgICAgICAgICAgYiA9IGIua2luZCA9PT0gJ21lbWJlcicgPyAwIDogYi5raW5kID09PSAnZnVuY3Rpb24nID8gMSA6IDI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQycsXG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICduYW1lJ1xuICAgICAgICB9XTtcblxuICAgICAgICBtZS5maXJlKCdtdXRhdGVJdGVtcycsIG1lLnN0b3JlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0byBub3QgY2FsbCBjcmVhdGVJdGVtcygpIGF0IHRoaXMgcG9pbnQgPT4gb25SZWZyZXNoQ2xhc3NNZW1iZXJzKClcbiAgICAgKi9cbiAgICBvblN0b3JlRmlsdGVyKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25SZWZyZXNoQ2xhc3NNZW1iZXJzKCkge1xuICAgICAgICB0aGlzLmZpbHRlckFuZFNvcnRJdGVtcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNZW1iZXJzTGlzdCk7XG5cbmV4cG9ydCB7TWVtYmVyc0xpc3QgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlNvdXJjZVZpZXdDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBTb3VyY2VWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5Tb3VyY2VWaWV3Q29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlNvdXJjZVZpZXdDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLXNvdXJjZXZpZXdjb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLXNvdXJjZXZpZXdjb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNIaWdobGlnaHRlZF89ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNIaWdobGlnaHRlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGxpbmVfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGluZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcHJldmlvdXNMaW5lPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcHJldmlvdXNMaW5lOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHN0cnVjdHVyZURhdGE9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdHJ1Y3R1cmVEYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZT0ge292ZXJmbG93OiAnYXV0byd9XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFsvLy4uLl19XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7dGFnOiAncHJlJywgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnY29kZScsIGNsYXNzOiAnamF2YXNjcmlwdCd9XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB1cmwgID0gJy4uLy4uLycgKyBtZS5zdHJ1Y3R1cmVEYXRhLnNyY1BhdGg7XG5cbiAgICAgICAgTmVvLlhoci5wcm9taXNlUmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuYXBwbHlTb3VyY2VDb2RlKGRhdGEucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ludGF4SGlnaGxpZ2h0KCk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlzSGlnaGxpZ2h0ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJc0hpZ2hsaWdodGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodExpbmUoe1xuICAgICAgICAgICAgICAgICAgICBhZGRMaW5lICAgOiBtZS5saW5lLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaW5lOiBtZS5wcmV2aW91c0xpbmUsXG4gICAgICAgICAgICAgICAgICAgIHZub2RlSWQgICA6IG1lLnZkb20uY25bMF0uaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGluZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMaW5lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgbWUucHJldmlvdXNMaW5lID0gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuaXNIaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgbWUuYWZ0ZXJTZXRJc0hpZ2hsaWdodGVkKHRydWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhcHBseVNvdXJjZUNvZGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIG5vZGUgPSB2ZG9tLmNuWzBdOyAvLyBwcmUgdGFnXG5cbiAgICAgICAgbm9kZS5jblswXS5pbm5lckhUTUwgPSBkYXRhOyAvLyBjb2RlIHRhZ1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgbWUuc3ludGF4SGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHN5bnRheEhpZ2hsaWdodCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUy5zeW50YXhIaWdobGlnaHQoe1xuICAgICAgICAgICAgdm5vZGVJZDogbWUudmRvbS5jblswXS5pZFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghbWUuaXNIaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgICAgIG1lLmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5hZnRlclNldElzSGlnaGxpZ2h0ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNvdXJjZVZpZXdDb21wb25lbnQpO1xuXG5leHBvcnQge1NvdXJjZVZpZXdDb21wb25lbnQgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgVHV0b3JpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBmaWxlTmFtZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBmaWxlVHlwZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWxlVHlwZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGU9e292ZXJmbG93OiAnYXV0byd9XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXNKc29uID0gbWUuZmlsZVR5cGUgPT09ICdqc29uJyxcbiAgICAgICAgICAgIHVybCAgICA9ICcuLi8uLi9kb2NzL3R1dG9yaWFscy8nICsgbWUuZmlsZU5hbWU7XG5cbiAgICAgICAgTmVvLlhocltpc0pzb24gPyAncHJvbWlzZUpzb24nIDogJ3Byb21pc2VSZXF1ZXN0J10oe1xuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBlbnN1cmUgd2UgYXJlIG5vdCBtb3VudGluZ1xuICAgICAgICAgICAgICAgIG1lLmFwcGx5U291cmNlQ29kZShpc0pzb24gPyBkYXRhLmpzb24gOiBkYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhcHBseVNvdXJjZUNvZGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUuZmlsZVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgdmRvbS5jbiA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZG9tLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFR1dG9yaWFsQ29tcG9uZW50LnN5bnRheEhpZ2hsaWdodCgpO1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgc3ludGF4SGlnaGxpZ2h0KCkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUy5zeW50YXhIaWdobGlnaHRJbml0KCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUdXRvcmlhbENvbXBvbmVudCk7XG5cbmV4cG9ydCB7VHV0b3JpYWxDb21wb25lbnQgYXMgZGVmYXVsdH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=