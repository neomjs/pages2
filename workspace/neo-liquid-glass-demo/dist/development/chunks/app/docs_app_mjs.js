"use strict";
(self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || []).push([["docs_app_mjs"],{

/***/ "./docs/app.mjs":
/*!**********************!*\
  !*** ./docs/app.mjs ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onStart: () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/view/MainContainer.mjs */ "./docs/app/view/MainContainer.mjs");


const onStart = () => Neo.app({
    mainView: _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Api
 * @extends Neo.data.Model
 */
class Api extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Api));


/***/ }),

/***/ "./docs/app/model/Example.mjs":
/*!************************************!*\
  !*** ./docs/app/model/Example.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Example
 * @extends Neo.data.Model
 */
class Example extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Example));


/***/ }),

/***/ "./docs/app/store/Api.mjs":
/*!********************************!*\
  !*** ./docs/app/store/Api.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Api_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Api.mjs */ "./docs/app/model/Api.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Docs.app.store.Api
 * @extends Neo.data.Store
 */
class Api extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static config = {
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
        model: _model_Api_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        /**
         * @member {String} url='../../docs/output/structure.json'
         */
        url: '../../docs/output/structure.json'
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Api));


/***/ }),

/***/ "./docs/app/store/Examples.mjs":
/*!*************************************!*\
  !*** ./docs/app/store/Examples.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Example.mjs */ "./docs/app/model/Example.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Docs.app.store.Examples
 * @extends Neo.data.Store
 */
class Examples extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static config = {
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
        model: _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        /**
         * @member {String} url='../../docs/examples.json'
         */
        url: '../../docs/examples.json'
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(Examples));


/***/ }),

/***/ "./docs/app/view/ApiTreeList.mjs":
/*!***************************************!*\
  !*** ./docs/app/view/ApiTreeList.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _store_Api_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Api.mjs */ "./docs/app/store/Api.mjs");



/**
 * @class Docs.view.ApiTreeList
 * @extends Neo.tree.List
 */
class ApiTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
        store: _store_Api_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        this.store.load().then(data => {
            if (!data) {
                this.html = [
                    '<div style="padding: 1em">',
                        'To get the content please use:</br>',
                        '<code>npm run generate-docs-json</code>',
                    '</div>'
                ].join('')
            }
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(ApiTreeList));


/***/ }),

/***/ "./docs/app/view/ContentTabContainer.mjs":
/*!***********************************************!*\
  !*** ./docs/app/view/ContentTabContainer.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/header/Button.mjs */ "./node_modules/neo.mjs/src/tab/header/Button.mjs");



/**
 * @class Docs.view.ContentTabContainer
 * @extends Neo.tab.Container
 */
class ContentTabContainer extends _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {Object} contentContainer
         */
        contentContainer: {
            cls: ['neo-docs-tab-content-container']
        },
        /**
         * @member {Object} headerToolbar
         */
        headerToolbar: {
            cls: ['docs-tab-header-toolbar']
        },
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype: 'component',
            html : 'Welcome to the neo.mjs docs!',
            style: {padding: '20px'},

            header: {
                iconCls: 'fa fa-users',
                text   : 'Welcome!'
            }
        }],
        /**
         * @member {Boolean} sortable=true
         */
        sortable: true
    }

    /**
     *
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me  = this,
            cls = me.cls;

        cls.unshift('docs-content-tabcontainer');
        me.cls = cls
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
                module : _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                flex   : 'none',
                index  : index,
                pressed: me.activeIndex === index,

                domListeners: [{
                    click: function(data) {
                        let path = data.path.map(e => e.id);

                        if (path[0].indexOf('neo-tab-header-button-') === 0) {
                            me.activeIndex = data.component.index
                        } else {
                            me.removeAt(Neo.getComponent(me.tabBarId).indexOf(path[1]))
                        }
                    },
                    scope: me
                }]
            };

        return {...defaultConfig, ...config}
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(ContentTabContainer));


/***/ }),

/***/ "./docs/app/view/ExamplesTreeList.mjs":
/*!********************************************!*\
  !*** ./docs/app/view/ExamplesTreeList.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Examples.mjs */ "./docs/app/store/Examples.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");



/**
 * @class Docs.view.ExamplesTreeList
 * @extends Neo.tree.List
 */
class ExamplesTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static config = {
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
         * @member {String[]} cls=['docs-examples-treelist']
         */
        cls: ['docs-examples-treelist'],
        /**
         * @member {Neo.data.Store|null} store=ExamplesStore
         * @protected
         */
        store: _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();
        this.store.load()
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(ExamplesTreeList));


/***/ }),

/***/ "./docs/app/view/HeaderContainer.mjs":
/*!*******************************************!*\
  !*** ./docs/app/view/HeaderContainer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");




/**
 * @class Docs.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {String[]} baseCls=['neo-docs-header-container']
         */
        baseCls: ['neo-docs-header-container'],
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
            module         : _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            listeners      : {change: 'onNavigationSearchFieldChange'},
            placeholderText: 'Filter Navigation',
            style          : {padding: '10px'},
            width          : 240
        }, {
            module      : _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            domListeners: {click: 'onSwitchThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'theme-button',
            style       : {marginTop: '5px'},
            text        : 'Theme Dark'
        }, {
            module      : _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
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
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(HeaderContainer));


/***/ }),

/***/ "./docs/app/view/MainContainer.mjs":
/*!*****************************************!*\
  !*** ./docs/app/view/MainContainer.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiTreeList.mjs */ "./docs/app/view/ApiTreeList.mjs");
/* harmony import */ var _classdetails_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classdetails/MainContainer.mjs */ "./docs/app/view/classdetails/MainContainer.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentTabContainer.mjs */ "./docs/app/view/ContentTabContainer.mjs");
/* harmony import */ var _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExamplesTreeList.mjs */ "./docs/app/view/ExamplesTreeList.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./docs/app/view/HeaderContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./docs/app/view/MainContainerController.mjs");
/* harmony import */ var _classdetails_SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classdetails/SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Splitter_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Splitter.mjs */ "./node_modules/neo.mjs/src/component/Splitter.mjs");
/* harmony import */ var _classdetails_TutorialComponent_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classdetails/TutorialComponent.mjs */ "./docs/app/view/classdetails/TutorialComponent.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");












/**
 * @class Docs.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__["default"] {
    static config = {
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
         * @member {String[]} baseCls=['neo-docs-maincontainer','neo-viewport']
         */
        baseCls: ['neo-docs-maincontainer', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Neo.collection.Base|null} store_=null
         */
        store_: null,
        /**
         * Important for the Portal App, until the new theme fully supports it
         * @member {String} theme='neo-theme-light'
         */
        theme: 'neo-theme-light',
        /**
         * @member {Array} items=[//...]
         */
        items: [_HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
            ntype : 'container',
            flex  : 1,
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                ntype   : 'tab-container',
                cls     : ['neo-docs-navigation-tab-container', 'neo-tab-container'],
                minWidth: 290,
                sortable: true,
                width   : 290,

                domListeners: {
                    resize: 'onNavTabContainerResize'
                },

                items: [{
                    module   : _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    listeners: {leafItemClick: 'onApiListLeafClick'},
                    reference: 'api-treelist',

                    header: {
                        iconCls: 'fa fa-code',
                        text   : 'API'
                    }
                }, {
                    module   : _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
                    listeners: {leafItemClick: 'onExamplesListLeafClick'},
                    reference: 'examples-treelist',

                    header: {
                        iconCls: 'fa fa-desktop',
                        text   : 'Examples'
                    }
                }]
            }, {
                module      : _node_modules_neo_mjs_src_component_Splitter_mjs__WEBPACK_IMPORTED_MODULE_8__["default"],
                resizeTarget: 'previous',
                size        : 5,

                style: {
                    borderTop: 'var(--tab-strip-height) solid var(--tab-strip-background-color)',
                    marginTop: 'var(--tab-button-height)'
                }
            }, {
                module   : _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                flex     : 1,
                reference: 'content-tabcontainer'
            }]
        }]
    }

    /**
     *
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        if (!me.store) {
            me.store = Neo.create(_node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
                keyProperty: 'id'
            })
        }

        // Disable the examples Tab for dist versions until the webpack builds can handle this (see: #140)
        me.items[1].items[0].items[1].header.disabled = Neo.config.environment !== 'development'
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me  = this,
            url = '../../docs/output/all.json';

        Neo.Xhr.promiseJson({url}).catch(err => {
            console.error('Error for Neo.Xhr.request', {id: me.store.id, error: err, url})
        }).then(data => {
            if (data) {
                me.store.items = data.json
            }
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(MainContainer));


/***/ }),

/***/ "./docs/app/view/MainContainerController.mjs":
/*!***************************************************!*\
  !*** ./docs/app/view/MainContainerController.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Docs.view.MainContainerController'
         * @protected
         */
        className: 'Docs.view.MainContainerController',
        /**
         * @member {String} ntype='docs-maincontainer-controller'
         * @protected
         */
        ntype: 'docs-maincontainer-controller',
        /**
         * @member {Object} routes
         * @protected
         */
        routes: {
            '/viewSource/{className}'                  : 'onViewSourceRoute',
            '/viewSource/{className}/line/{lineNumber}': 'onViewSourceRoute'
        }
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me      = this,
            appName = me.component.appName,
            opts    = {appName, windowId: me.component.windowId};

        if (appName === 'Portal') {
            opts.highlightJsPath = '../../docs/resources/lib/highlight/highlight.pack.js';
            opts.themePath       = '../../docs/resources/lib/highlightjs-custom-github-theme.css'
        }

        Neo.main.addon.HighlightJS.loadFiles(opts)
    }

    /**
     * @param {Object} record
     */
    onApiListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype        : 'classdetails-maincontainer',
            id           : record.className,
            structureData: record,

            header: {
                iconCls: record.singleton ? 'fa fa-arrow-alt-circle-right' : 'fa fa-copyright',
                text   : record.name
            }
        })
    }

    /**
     * @param {Object} record
     */
    onExamplesListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer'),
            name                = record.name,
            pathArray           = [],
            store               = me.getReference('examples-treelist').store,
            tmpRecord           = record,
            header;

        while (tmpRecord.parentId !== null) {
            tmpRecord = store.get(tmpRecord.parentId);
            name      = tmpRecord.name + '.' + name
        }

        name = 'examples_' + name;

        header = {
            iconCls: 'fa fa-desktop',
            text   : record.name
        };

        if (!Array.isArray(record.path)) {
            import(
                /* webpackIgnore: true */
                record.path).then((module) => {
                    contentTabContainer.add({
                        module: module.default,
                        header,
                        id    : name
                    })
                }
            )
        } else {
            record.path.forEach(path => {
                pathArray.push(import(/* webpackIgnore: true */ path))
            });

            Promise.all(pathArray).then(function(modules) {
                let items = [];

                modules.forEach(module => {
                    items.push({
                        module: module.default
                    })
                });

                contentTabContainer.add({
                    ntype: 'container',
                    header,
                    id   : name,
                    items,
                    style: {padding: '10px'}
                })
            })
        }
    }

    /**
     * @param {Object} data
     */
    onNavigationSearchFieldChange(data) {
        let me    = this,
            value = data.value;

        me.getReference('examples-treelist') .filter('name', value, null);
        me.getReference('api-treelist')      .filter('name', value, null);
        me.getReference('tutorials-treelist').filter('name', value, null)
    }

    /**
     * @param {Object} data
     */
    onNavTabContainerResize(data) {
        // console.log('onNavTabContainerResize', data)
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
            href       = './resources/lib/highlightjs-custom-github-theme.css'
        } else {
            buttonText = 'Source View Theme Light';
            href       = './resources/lib/highlightjs-custom-dark-theme.css'
        }

        Neo.main.addon.Stylesheet.swapStyleSheet({
            href,
            id      : 'hljs-theme',
            windowId: me.windowId,
        }).then(data => {
            button.text = buttonText
        })
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
            theme      = 'neo-theme-light'
        } else {
            buttonText = 'Theme Light';
            theme      = 'neo-theme-dark'
        }

        cls = [...view.cls];

        view.cls.forEach(item => {
            if (item.includes('neo-theme')) {
                _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item)
            }
        });

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
        view.cls = cls;

        button.text = buttonText
    }

    /**
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

            header: {
                iconCls: 'fa fa-hands-helping',
                text   : record.name
            }
        })
    }

    /**
     * @param {Object} data
     * @param {String} data.className
     * @param {String} data.lineNumber
     */
    onViewSourceRoute(data) {
        let me                  = this,
            className           = data.className,
            lineNumber          = data.lineNumber && parseInt(data.lineNumber) || null,
            contentTabContainer = me.getReference('content-tabcontainer'),
            structureStore      = me.getReference('api-treelist').store,
            record              = structureStore.find('className', className)[0],
            tab;

        if (record) {
            tab = contentTabContainer.add({
                ntype        : 'classdetails-sourceviewcomponent',
                id           : className + '__source',
                line         : lineNumber,
                structureData: record,

                header: {
                    iconCls: 'fa fa-code',
                    text   : record.name
                }
            });


            // adjust the highlighted line for already added source view tabs
            tab.line = lineNumber
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(MainContainerController));


/***/ }),

/***/ "./docs/app/view/classdetails/HeaderComponent.mjs":
/*!********************************************************!*\
  !*** ./docs/app/view/classdetails/HeaderComponent.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.view.classdetails.HeaderComponent
 * @extends Neo.component.Base
 */
class HeaderComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {String[]} baseCls=['neo-docs-classdetails-headercomponent']
         */
        baseCls: ['neo-docs-classdetails-headercomponent'],
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
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me         = this,
            className = me.record.className,
            store     = me.up('main-container').store,
            record    = store.find({$kind: className === 'Neo' ? 'module' : 'class', neoClassName: className})[0],
            i         = 0,
            len       = record?.tags?.length || 0,
            singleton = false;

        for (; i < len; i++) {
            if (record.tags[i].title === 'singleton') {
                singleton = true;
                break
            }
        }

        me.vdom.cn[0].innerHTML = singleton ? (className + ' → Singleton') : className;

        if (record.description) {
            me.vdom.cn.push({
                cls      : ['neo-docs-header-description'],
                innerHTML: record.description
            })
        }

        me.update()
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(HeaderComponent));


/***/ }),

/***/ "./docs/app/view/classdetails/HierarchyTreeList.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/HierarchyTreeList.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.view.classdetails.HierarchyTreeList
 * @extends Neo.tree.List
 */
class HierarchyTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {String[]} baseCls=['docs-classhierarchy-treelist','neo-list-container','neo-tree-list','neo-list']
         */
        baseCls: [
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
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.createStoreItems();
        me.createItems(null, me.getListItemsRoot(), 0)
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

            tmpItems.unshift(item)
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
                })
            }
        });

        me.store.items = storeItems
    }

    /**
     *
     * @param {Object} record
     */
    onLeafItemClick(record) {
        let me       = this,
            vnodeId  = me.getItemId(record.id),
            vdomNode = me.getVdomChild(vnodeId);

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][record.checked ? 'add' : 'remove'](vdomNode.cls, 'unchecked');

        record.checked = !record.checked;

        me.update();

        me.fire('refreshClassMembers')
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(HierarchyTreeList));


/***/ }),

/***/ "./docs/app/view/classdetails/MainContainer.mjs":
/*!******************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainer.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.mjs */ "./docs/app/view/classdetails/HeaderComponent.mjs");
/* harmony import */ var _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyTreeList.mjs */ "./docs/app/view/classdetails/HierarchyTreeList.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./docs/app/view/classdetails/MainContainerController.mjs");
/* harmony import */ var _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MembersList.mjs */ "./docs/app/view/classdetails/MembersList.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_component_Splitter_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Splitter.mjs */ "./node_modules/neo.mjs/src/component/Splitter.mjs");









/**
 * @class Docs.view.classdetails.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {String[]} baseCls=['neo-docs-classdetails-maincontainer','neo-container']
         */
        baseCls: ['neo-docs-classdetails-maincontainer', 'neo-container'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
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
            ntype    : 'container',
            cls      : ['neo-docs-classdetails-headercontainer'],
            flex     : '1 1 auto',
            layout   : {ntype: 'hbox', align: 'stretch'},
            minHeight: 200,

            items: [{
                module : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
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
                        module         : _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
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
                        text     : 'Private'
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showProtectedMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Protected'
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showStaticMembers',
                        text     : 'Static'
                    }]
                }],

                items: [{
                    module: _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                    flex  : 1,
                    record: '@config:structureData'
                }]
            }, {
                module: _node_modules_neo_mjs_src_component_Splitter_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
                size  : 5
            }, {
                module       : _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                flex         : '0 0 auto',
                minWidth     : 330,
                structureData: '@config:structureData'
            }]
        }, {
            module      : _node_modules_neo_mjs_src_component_Splitter_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
            direction   : 'horizontal',
            resizeTarget: 'previous',
            size        : 5
        }, {
            module   : _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            flex     : 1,
            listeners: {mutateItems: 'onMutateItems'},
            reference: 'classdetails-memberslist'
        }]
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(MainContainer));


/***/ }),

/***/ "./docs/app/view/classdetails/MainContainerController.mjs":
/*!****************************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainerController.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.view.classdetails.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Docs.view.classdetails.MainContainerController'
         * @protected
         */
        className: 'Docs.view.classdetails.MainContainerController'
    }

    /**
     *
     * @param {Object} data
     */
    onHeaderClick(data) {
        Neo.Main.setRoute({
            value: `/viewSource/${this.component.structureData.className}`
        })
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
                countMethods++
            } else if (item.kind === 'member') {
                countConfigs++
            } else {
                countEvents++
            }

            if (item.access === 'private') {
                countPrivates++
            } else if (item.access === 'protected') {
                countProtecteds++
            }

            if (item.scope === 'static') {
                countStatics++
            }
        });

        me.getReference('showConfigs')         .text = 'Configs '   + countConfigs;
        me.getReference('showMethods')         .text = 'Methods '   + countMethods;
        me.getReference('showEvents')          .text = 'Events '    + countEvents;
        me.getReference('showPrivateMembers')  .text = 'Private '   + countPrivates;
        me.getReference('showProtectedMembers').text = 'Protected ' + countProtecteds;
        me.getReference('showStaticMembers')   .text = 'Static '    + countStatics
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
        })
    }

    /**
     *
     * @param {Object} data
     */
    onSearchFieldChange(data) {
        this.getReference('classdetails-memberslist').filterMembersQuery = data.value
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

        membersList[button.reference] = button.checked
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(MainContainerController));


/***/ }),

/***/ "./docs/app/view/classdetails/MembersList.mjs":
/*!****************************************************!*\
  !*** ./docs/app/view/classdetails/MembersList.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");



/**
 * @class Docs.view.classdetails.MembersList
 * @extends Neo.list.Base
 */
class MembersList extends _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {String[]} baseCls=['docs-classhierarchy-memberslist']
         */
        baseCls: ['docs-classhierarchy-memberslist'],
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
    }

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

        me.store = Neo.create(_node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            filterMode: 'advanced',
            sourceId  : mainStore.id
        });

        me.onRefreshClassMembers()
    }

    /**
     * Triggered after the filterMembersQuery config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetFilterMembersQuery(value, oldValue) {
        oldValue !== undefined && this.onRefreshClassMembers()
    }

    /**
     * Triggered after the showProtectedMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowProtectedMembers(value, oldValue) {
        oldValue !== undefined && this.onRefreshClassMembers()
    }

    /**
     * Triggered after the showPrivateMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowPrivateMembers(value, oldValue) {
        oldValue !== undefined && this.onRefreshClassMembers()
    }

    /**
     * Triggered after the showStaticMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowStaticMembers(value, oldValue) {
        oldValue !== undefined && this.onRefreshClassMembers()
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
            })
        }

        return vdom
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
            })
        }

        return vdom
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
            })
        }

        return vdom
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
                itemAttributes.push('GS')
            }

            if (item.neoClassName !== targetClassName) {
                itemAttributes.push('inherited')
            }

            if (item.access === 'private' || item.access === 'protected') {
                itemAttributes.push(item.access)
            }

            if (item.scope === 'static') {
                itemAttributes.push('static')
            }

            headerText = item.name;

            if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
                headerText = headerText.replace(filterMembersRegEx, match => `<span class="neo-highlight-search">${match}</span>`)
            }

            // configs
            if (item.type?.names) {
                headerText += (': {' + MembersList.escapeHtml(item.type.names.join('|')) + '}')
            }

            if (item.hasOwnProperty('defaultvalue')) {
                headerText += (' = ' + item.defaultvalue)
            }

            // methods
            if (item.params && item.kind !== 'event') {
                if (item.$kind === 'property') {
                    headerText = 'get ' + headerText
                }

                headerText += ('(' + item.params.reduce((result, param) => {
                    if (param.name.indexOf('.') < 0) {
                        if (param.optional) {
                            result.push('[' + param.name + ']')
                        } else {
                            result.push(param.name)
                        }
                    }
                    return result
                }, []).join(', ') + ')')
            }

            if (item.returns?.[0].type) {
                headerText += (' → {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '}'))
            }

            path = item.meta.path;

            if (path.includes('/neo.mjs/')) {
                path = path.substr(path.indexOf('/neo.mjs/') + 9)
            } else if (path.includes('/neomjs/')) {
                path = path.substr(path.indexOf('/neomjs/')  + 8)
            } else if (path.includes('/neo/')) {
                path = path.substr(path.indexOf('/neo/')     + 5)
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
                        href     : `#/viewSource/${item.neoClassName}/line/${item.meta.lineno}`,
                        innerHTML: `Source: ${path}/${item.meta.filename} (Line ${item.meta.lineno})`
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
                        cls: ['hljs'],
                        cn : [{
                            tag : 'code',
                            html: example
                        }]
                    })
                })
            }

            if (item.params?.length > 0) {
                itemConfig.cn.push(MembersList.createParametersTable(item.params))
            }

            if (item.returns?.[0].type && item.kind !== 'event') {
                itemConfig.cn.push({
                    innerHTML: 'Returns {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '} ') + (item.returns[0].description || '')
                })
            }

            vdom.cn.push(itemConfig)
        });

        me.update();

        me.timeout(100).then(() => {
            Neo.main.addon.HighlightJS.syntaxHighlightInit()
        })
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
                hasDefaultValues = true
            }

            if (param.hasOwnProperty('optional')) {
                hasOptionalParams = true
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
            })
        }

        if (hasOptionalParams) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Optional'
            })
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
                    })
                }

                if (hasOptionalParams) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.optional
                    })
                }
            }
        });

        return paramTable
    }

    /**
     * Replaces '<' & '>'
     * @param {String} value
     * @returns {String}
     */
    static escapeHtml(value) {
        return value.replace(/</g, '&lt;').replace(/>/g, '&gt;')
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
                tmpItems.push(cls.name)
            }
        });

        tmpItemsLen = tmpItems.length;

        for (; i < tmpItemsLen; i++) {
            hierarchyMap[tmpItems[i]] = i
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
            })
        }

        if (!me.showProtectedMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'protected'
            })
        }

        if (!me.showStaticMembers) {
            filters.push({
                operator: '!==',
                property: 'scope',
                value   : 'static'
            })
        }

        if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
            filters.push({
                operator: 'like',
                property: 'name',
                value   : me.filterMembersQuery
            })
        }

        filters.push({
            scope   : me,
            filterBy: function(opts) {
                let me              = this,
                    filteredItems   = opts.filteredItems,
                    item            = opts.item,
                    targetClassName = me.targetClassName,
                    filteredItem, i, len;

                // always exclude inherited className & ntype configs
                if (item.name === 'ntype' && item.neoClassName !== targetClassName
                ) {
                    return true
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
                                return true
                            }
                        }
                    }
                }

                return false
            }
        });

        me.store.filters = filters;

        me.store.sorters = [{
            // Configs => Methods => Events
            sortBy: function(a, b) {
                a = a.kind === 'member' ? 0 : a.kind === 'function' ? 1 : 2;
                b = b.kind === 'member' ? 0 : b.kind === 'function' ? 1 : 2;

                return a > b ? 1 : a < b ? -1 : 0
            }
        }, {
            direction: 'ASC',
            property : 'name'
        }];

        me.fire('mutateItems', me.store)
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
        this.createItems()
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(MembersList));


/***/ }),

/***/ "./docs/app/view/classdetails/SourceViewComponent.mjs":
/*!************************************************************!*\
  !*** ./docs/app/view/classdetails/SourceViewComponent.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.view.classdetails.SourceViewComponent
 * @extends Neo.component.Base
 */
class SourceViewComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {tag: 'pre', cls: ['hljs'], cn: [
                {tag: 'code', class: 'language-javascript'}
            ]}
        ]}
    }

    /**
     *
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me  = this,
            url = '../../' + me.structureData.srcPath;

        Neo.Xhr.promiseRequest({
            url
        }).then(data => {
            me.applySourceCode(data.response)
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

        value && this.timeout(50).then(() => {
            this.syntaxHighlight()
        })
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

            me.timeout(50).then(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightLine({
                    addLine   : me.line,
                    appName   : me.appName,
                    removeLine: me.previousLine,
                    vnodeId   : me.vdom.cn[0].cn[0].id
                })
            })
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
            me.previousLine = oldValue
        }

        if (me.isHighlighted) {
            me.afterSetIsHighlighted(true, false)
        }
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            node = me.vdom.cn[0]; // pre tag

        node.cn[0].innerHTML = data; // code tag
        me.update();

        me.mounted && me.syntaxHighlight()
    }

    /**
     *
     */
    syntaxHighlight() {
        let me = this;

        Neo.main.addon.HighlightJS.syntaxHighlight({
            appName: me.appName,
            vnodeId: me.vdom.cn[0].cn[0].id
        }).then(() => {
            if (!me.isHighlighted) {
                me.isHighlighted = true
            } else {
                me.afterSetIsHighlighted(true, false)
            }
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(SourceViewComponent));


/***/ }),

/***/ "./docs/app/view/classdetails/TutorialComponent.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/TutorialComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.view.classdetails.TutorialComponent
 * @extends Neo.component.Base
 */
class TutorialComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {String[]} baseCls=['neo-classdetails-tutorialcomponent']
         */
        baseCls: ['neo-classdetails-tutorialcomponent'],
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
    }

    /**
     *
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me     = this,
            isJson = me.fileType === 'json',
            url    = '../../docs/tutorials/' + me.fileName;

        Neo.Xhr[isJson ? 'promiseJson' : 'promiseRequest']({
            url
        }).then(data => {
            me.timeout(100).then(() => { // ensure we are not mounting
                me.applySourceCode(isJson ? data.json : data.response)
            })
        })
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me = this;

        if (me.fileType === 'json') {
            me.vdom.cn = data
        } else {
            me.vdom.innerHTML = data
        }

        me.update();

        me.timeout(50).then(() => {
            TutorialComponent.syntaxHighlight()
        })
    }

    /**
     *
     */
    static syntaxHighlight() {
        Neo.main.addon.HighlightJS.syntaxHighlightInit()
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neo.setupClass(TutorialComponent));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQyxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxpRUFBZSxtQ0FBbUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlKNkI7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9GQUFTO0FBQ3pDO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVEsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULHlDQUF5QztBQUN6QztBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUNBQWlDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL2RvY3MvYXBwLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2RvY3MvYXBwL21vZGVsL0FwaS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9kb2NzL2FwcC9tb2RlbC9FeGFtcGxlLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2RvY3MvYXBwL3N0b3JlL0FwaS5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9kb2NzL2FwcC9zdG9yZS9FeGFtcGxlcy5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9kb2NzL2FwcC92aWV3L0FwaVRyZWVMaXN0Lm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2RvY3MvYXBwL3ZpZXcvQ29udGVudFRhYkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9kb2NzL2FwcC92aWV3L0V4YW1wbGVzVHJlZUxpc3QubWpzIiwid2VicGFjazovL215YXBwLy4vZG9jcy9hcHAvdmlldy9IZWFkZXJDb250YWluZXIubWpzIiwid2VicGFjazovL215YXBwLy4vZG9jcy9hcHAvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2RvY3MvYXBwL3ZpZXcvTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovL215YXBwLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvSGVhZGVyQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL0hpZXJhcmNoeVRyZWVMaXN0Lm1qcyIsIndlYnBhY2s6Ly9teWFwcC8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovL215YXBwLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovL215YXBwLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvTWVtYmVyc0xpc3QubWpzIiwid2VicGFjazovL215YXBwLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvU291cmNlVmlld0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vbXlhcHAvLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9UdXRvcmlhbENvbXBvbmVudC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9hcHAvdmlldy9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmV4cG9ydCBjb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdEb2NzJ1xufSk7XG5cbiIsImltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5tb2RlbC5BcGlcbiAqIEBleHRlbmRzIE5lby5kYXRhLk1vZGVsXG4gKi9cbmNsYXNzIEFwaSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLm1vZGVsLkFwaSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAubW9kZWwuQXBpJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBmaWVsZHNcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdjbGFzc05hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2NvbGxhcHNlZCcsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaXNMZWFmJyxcbiAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGFyZW50SWQnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYXRoJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzaW5nbGV0b24nLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdzcmNQYXRoJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH1dXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhBcGkpO1xuIiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5tb2RlbC5FeGFtcGxlXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAubW9kZWwuRXhhbXBsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAubW9kZWwuRXhhbXBsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzXG4gICAgICAgICAqL1xuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY29sbGFwc2VkJywgLy8gb3B0aW9uYWwsIG9ubHkgbmVlZGVkIGZvciBjb2xsYXBzZWQgbm9uIGxlYWYgaXRlbXNcbiAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpc0xlYWYnLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYXJlbnRJZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhdGgnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfV1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKEV4YW1wbGUpO1xuIiwiaW1wb3J0IEFwaU1vZGVsIGZyb20gJy4uL21vZGVsL0FwaS5tanMnO1xuaW1wb3J0IFN0b3JlICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL1N0b3JlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnN0b3JlLkFwaVxuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgQXBpIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAuc3RvcmUuQXBpJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLmFwcC5zdG9yZS5BcGknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLk1vZGVsfSBtb2RlbD1BcGlNb2RlbFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWw6IEFwaU1vZGVsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB1cmw9Jy4uLy4uL2RvY3Mvb3V0cHV0L3N0cnVjdHVyZS5qc29uJ1xuICAgICAgICAgKi9cbiAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy9vdXRwdXQvc3RydWN0dXJlLmpzb24nXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhBcGkpO1xuIiwiaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi4vbW9kZWwvRXhhbXBsZS5tanMnO1xuaW1wb3J0IFN0b3JlICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAuc3RvcmUuRXhhbXBsZXNcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEV4YW1wbGVzIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAuc3RvcmUuRXhhbXBsZXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnN0b3JlLkV4YW1wbGVzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWw9RXhhbXBsZVxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWw6IEV4YW1wbGUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHVybD0nLi4vLi4vZG9jcy9leGFtcGxlcy5qc29uJ1xuICAgICAgICAgKi9cbiAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy9leGFtcGxlcy5qc29uJ1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoRXhhbXBsZXMpO1xuIiwiaW1wb3J0IFRyZWVMaXN0IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzJztcbmltcG9ydCBBcGlTdG9yZSBmcm9tICcuLi9zdG9yZS9BcGkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LkFwaVRyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIEFwaVRyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LkFwaVRyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuQXBpVHJlZUxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYXBpLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2FwaS10cmVlbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZT1BcGlTdG9yZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQXBpU3RvcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICB0aGlzLnN0b3JlLmxvYWQoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odG1sID0gW1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBzdHlsZT1cInBhZGRpbmc6IDFlbVwiPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnVG8gZ2V0IHRoZSBjb250ZW50IHBsZWFzZSB1c2U6PC9icj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxjb2RlPm5wbSBydW4gZ2VuZXJhdGUtZG9jcy1qc29uPC9jb2RlPicsXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoQXBpVHJlZUxpc3QpO1xuIiwiaW1wb3J0IENvbnRhaW5lciAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IEhlYWRlckJ1dHRvbiBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL2hlYWRlci9CdXR0b24ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LkNvbnRlbnRUYWJDb250YWluZXJcbiAqIEBleHRlbmRzIE5lby50YWIuQ29udGFpbmVyXG4gKi9cbmNsYXNzIENvbnRlbnRUYWJDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LkNvbnRlbnRUYWJDb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5Db250ZW50VGFiQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RvY3MtY29udGVudC10YWJjb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZG9jcy1jb250ZW50LXRhYmNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhY3RpdmF0ZUluc2VydGVkVGFicz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmF0ZUluc2VydGVkVGFiczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY29udGVudENvbnRhaW5lclxuICAgICAgICAgKi9cbiAgICAgICAgY29udGVudENvbnRhaW5lcjoge1xuICAgICAgICAgICAgY2xzOiBbJ25lby1kb2NzLXRhYi1jb250ZW50LWNvbnRhaW5lciddXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGhlYWRlclRvb2xiYXJcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXI6IHtcbiAgICAgICAgICAgIGNsczogWydkb2NzLXRhYi1oZWFkZXItdG9vbGJhciddXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9Wy8vLi4uXV1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgaHRtbCA6ICdXZWxjb21lIHRvIHRoZSBuZW8ubWpzIGRvY3MhJyxcbiAgICAgICAgICAgIHN0eWxlOiB7cGFkZGluZzogJzIwcHgnfSxcblxuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXVzZXJzJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnV2VsY29tZSEnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc29ydGFibGU9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc29ydGFibGU6IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIGNscy51bnNoaWZ0KCdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJyk7XG4gICAgICAgIG1lLmNscyA9IGNsc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRpbmcgdGhlIGJ1dHRvbiBjbGljayBsaXN0ZW5lciB0byBhbGxvdyBjbG9zaW5nIHRhYnMgb24gaWNvbiBjbGlja1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbWVyZ2VkIGNvbmZpZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBnZXRUYWJCdXR0b25Db25maWcoY29uZmlnLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgOiBIZWFkZXJCdXR0b24sXG4gICAgICAgICAgICAgICAgZmxleCAgIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGluZGV4ICA6IGluZGV4LFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IG1lLmFjdGl2ZUluZGV4ID09PSBpbmRleCxcblxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoID0gZGF0YS5wYXRoLm1hcChlID0+IGUuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aFswXS5pbmRleE9mKCduZW8tdGFiLWhlYWRlci1idXR0b24tJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5hY3RpdmVJbmRleCA9IGRhdGEuY29tcG9uZW50LmluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlbW92ZUF0KE5lby5nZXRDb21wb25lbnQobWUudGFiQmFySWQpLmluZGV4T2YocGF0aFsxXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7Li4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoQ29udGVudFRhYkNvbnRhaW5lcik7XG4iLCJpbXBvcnQgRXhhbXBsZXNTdG9yZSBmcm9tICcuLi9zdG9yZS9FeGFtcGxlcy5tanMnO1xuaW1wb3J0IFRyZWVMaXN0ICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RyZWUvTGlzdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuRXhhbXBsZXNUcmVlTGlzdFxuICogQGV4dGVuZHMgTmVvLnRyZWUuTGlzdFxuICovXG5jbGFzcyBFeGFtcGxlc1RyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LkV4YW1wbGVzVHJlZUxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5FeGFtcGxlc1RyZWVMaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2V4YW1wbGVzLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2V4YW1wbGVzLXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLWV4YW1wbGVzLXRyZWVsaXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydkb2NzLWV4YW1wbGVzLXRyZWVsaXN0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZT1FeGFtcGxlc1N0b3JlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBFeGFtcGxlc1N0b3JlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG4gICAgICAgIHRoaXMuc3RvcmUubG9hZCgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhFeGFtcGxlc1RyZWVMaXN0KTtcbiIsImltcG9ydCBDb250YWluZXIgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBCdXR0b24gICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvYnV0dG9uL0Jhc2UubWpzJztcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWFyY2gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LkhlYWRlckNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuSGVhZGVyQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuSGVhZGVyQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2hlYWRlci1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbmVvLWRvY3MtaGVhZGVyLWNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYmFzZUNscz1bJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWyduZW8tZG9jcy1oZWFkZXItY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGhlaWdodD01NVxuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0OiA1NSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9Wy8vLi4uXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IFNlYXJjaEZpZWxkLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgOiB7Y2hhbmdlOiAnb25OYXZpZ2F0aW9uU2VhcmNoRmllbGRDaGFuZ2UnfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dDogJ0ZpbHRlciBOYXZpZ2F0aW9uJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgIDoge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgICA6IDI0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICA6IEJ1dHRvbixcbiAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge2NsaWNrOiAnb25Td2l0Y2hUaGVtZUJ1dHRvbkNsaWNrJ30sXG4gICAgICAgICAgICBmbGV4ICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGhlaWdodCAgICAgIDogMjcsXG4gICAgICAgICAgICByZWZlcmVuY2UgICA6ICd0aGVtZS1idXR0b24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgOiB7bWFyZ2luVG9wOiAnNXB4J30sXG4gICAgICAgICAgICB0ZXh0ICAgICAgICA6ICdUaGVtZSBEYXJrJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICA6IEJ1dHRvbixcbiAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge2NsaWNrOiAnb25Td2l0Y2hTb3VyY2VWaWV3VGhlbWVCdXR0b25DbGljayd9LFxuICAgICAgICAgICAgZmxleCAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoZWlnaHQgICAgICA6IDI3LFxuICAgICAgICAgICAgcmVmZXJlbmNlICAgOiAnc291cmNlLXZpZXctdGhlbWUtYnV0dG9uJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgIDoge21hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luVG9wOiAnNXB4J30sXG4gICAgICAgICAgICB0ZXh0ICAgICAgICA6ICdTb3VyY2UgVmlldyBUaGVtZSBEYXJrJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBmbGV4IDogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBjbHMgIDogWyduZW8tbG9nby10ZXh0J10sXG4gICAgICAgICAgICBodG1sIDogJ25lby5tanMgZG9jcycsXG4gICAgICAgICAgICB3aWR0aDogMjEwXG4gICAgICAgIH1dXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhIZWFkZXJDb250YWluZXIpO1xuIiwiaW1wb3J0IEFwaVRyZWVMaXN0ICAgICAgICAgICAgIGZyb20gJy4vQXBpVHJlZUxpc3QubWpzJztcbmltcG9ydCBDbGFzc0RldGFpbHNDb250YWluZXIgICBmcm9tICcuL2NsYXNzZGV0YWlscy9NYWluQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuaW1wb3J0IENvbnRlbnRUYWJDb250YWluZXIgICAgIGZyb20gJy4vQ29udGVudFRhYkNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEV4YW1wbGVzVHJlZUxpc3QgICAgICAgIGZyb20gJy4vRXhhbXBsZXNUcmVlTGlzdC5tanMnO1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciAgICAgICAgIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFNvdXJjZVZpZXdDb21wb25lbnQgICAgIGZyb20gJy4vY2xhc3NkZXRhaWxzL1NvdXJjZVZpZXdDb21wb25lbnQubWpzJztcbmltcG9ydCBTcGxpdHRlciAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L1NwbGl0dGVyLm1qcyc7XG5pbXBvcnQgVHV0b3JpYWxDb21wb25lbnQgICAgICAgZnJvbSAnLi9jbGFzc2RldGFpbHMvVHV0b3JpYWxDb21wb25lbnQubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWFpbi1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFpbi1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGJhc2VDbHM9WyduZW8tZG9jcy1tYWluY29udGFpbmVyJywnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGJhc2VDbHM6IFsnbmVvLWRvY3MtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZXxudWxsfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW1wb3J0YW50IGZvciB0aGUgUG9ydGFsIEFwcCwgdW50aWwgdGhlIG5ldyB0aGVtZSBmdWxseSBzdXBwb3J0cyBpdFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRoZW1lPSduZW8tdGhlbWUtbGlnaHQnXG4gICAgICAgICAqL1xuICAgICAgICB0aGVtZTogJ25lby10aGVtZS1saWdodCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9Wy8vLi4uXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtIZWFkZXJDb250YWluZXIsIHtcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbnR5cGUgICA6ICd0YWItY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBjbHMgICAgIDogWyduZW8tZG9jcy1uYXZpZ2F0aW9uLXRhYi1jb250YWluZXInLCAnbmVvLXRhYi1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogMjkwLFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpZHRoICAgOiAyOTAsXG5cbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnb25OYXZUYWJDb250YWluZXJSZXNpemUnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IEFwaVRyZWVMaXN0LFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtsZWFmSXRlbUNsaWNrOiAnb25BcGlMaXN0TGVhZkNsaWNrJ30sXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2FwaS10cmVlbGlzdCcsXG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQVBJJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IEV4YW1wbGVzVHJlZUxpc3QsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge2xlYWZJdGVtQ2xpY2s6ICdvbkV4YW1wbGVzTGlzdExlYWZDbGljayd9LFxuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdleGFtcGxlcy10cmVlbGlzdCcsXG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZGVza3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnRXhhbXBsZXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgIDogU3BsaXR0ZXIsXG4gICAgICAgICAgICAgICAgcmVzaXplVGFyZ2V0OiAncHJldmlvdXMnLFxuICAgICAgICAgICAgICAgIHNpemUgICAgICAgIDogNSxcblxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcDogJ3ZhcigtLXRhYi1zdHJpcC1oZWlnaHQpIHNvbGlkIHZhcigtLXRhYi1zdHJpcC1iYWNrZ3JvdW5kLWNvbG9yKScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJ3ZhcigtLXRhYi1idXR0b24taGVpZ2h0KSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBDb250ZW50VGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdjb250ZW50LXRhYmNvbnRhaW5lcidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuc3RvcmUpIHtcbiAgICAgICAgICAgIG1lLnN0b3JlID0gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICAgICAga2V5UHJvcGVydHk6ICdpZCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBleGFtcGxlcyBUYWIgZm9yIGRpc3QgdmVyc2lvbnMgdW50aWwgdGhlIHdlYnBhY2sgYnVpbGRzIGNhbiBoYW5kbGUgdGhpcyAoc2VlOiAjMTQwKVxuICAgICAgICBtZS5pdGVtc1sxXS5pdGVtc1swXS5pdGVtc1sxXS5oZWFkZXIuZGlzYWJsZWQgPSBOZW8uY29uZmlnLmVudmlyb25tZW50ICE9PSAnZGV2ZWxvcG1lbnQnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICB1cmwgPSAnLi4vLi4vZG9jcy9vdXRwdXQvYWxsLmpzb24nO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe3VybH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmb3IgTmVvLlhoci5yZXF1ZXN0Jywge2lkOiBtZS5zdG9yZS5pZCwgZXJyb3I6IGVyciwgdXJsfSlcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBkYXRhLmpzb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKE1haW5Db250YWluZXIpO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZG9jcy1tYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZG9jcy1tYWluY29udGFpbmVyLWNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByb3V0ZXNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcm91dGVzOiB7XG4gICAgICAgICAgICAnL3ZpZXdTb3VyY2Uve2NsYXNzTmFtZX0nICAgICAgICAgICAgICAgICAgOiAnb25WaWV3U291cmNlUm91dGUnLFxuICAgICAgICAgICAgJy92aWV3U291cmNlL3tjbGFzc05hbWV9L2xpbmUve2xpbmVOdW1iZXJ9JzogJ29uVmlld1NvdXJjZVJvdXRlJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwTmFtZSA9IG1lLmNvbXBvbmVudC5hcHBOYW1lLFxuICAgICAgICAgICAgb3B0cyAgICA9IHthcHBOYW1lLCB3aW5kb3dJZDogbWUuY29tcG9uZW50LndpbmRvd0lkfTtcblxuICAgICAgICBpZiAoYXBwTmFtZSA9PT0gJ1BvcnRhbCcpIHtcbiAgICAgICAgICAgIG9wdHMuaGlnaGxpZ2h0SnNQYXRoID0gJy4uLy4uL2RvY3MvcmVzb3VyY2VzL2xpYi9oaWdobGlnaHQvaGlnaGxpZ2h0LnBhY2suanMnO1xuICAgICAgICAgICAgb3B0cy50aGVtZVBhdGggICAgICAgPSAnLi4vLi4vZG9jcy9yZXNvdXJjZXMvbGliL2hpZ2hsaWdodGpzLWN1c3RvbS1naXRodWItdGhlbWUuY3NzJ1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMubG9hZEZpbGVzKG9wdHMpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uQXBpTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBudHlwZSAgICAgICAgOiAnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLFxuICAgICAgICAgICAgaWQgICAgICAgICAgIDogcmVjb3JkLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogcmVjb3JkLnNpbmdsZXRvbiA/ICdmYSBmYS1hcnJvdy1hbHQtY2lyY2xlLXJpZ2h0JyA6ICdmYSBmYS1jb3B5cmlnaHQnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uRXhhbXBsZXNMaXN0TGVhZkNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCdjb250ZW50LXRhYmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICAgICAgICA9IHJlY29yZC5uYW1lLFxuICAgICAgICAgICAgcGF0aEFycmF5ICAgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICAgICAgICA9IG1lLmdldFJlZmVyZW5jZSgnZXhhbXBsZXMtdHJlZWxpc3QnKS5zdG9yZSxcbiAgICAgICAgICAgIHRtcFJlY29yZCAgICAgICAgICAgPSByZWNvcmQsXG4gICAgICAgICAgICBoZWFkZXI7XG5cbiAgICAgICAgd2hpbGUgKHRtcFJlY29yZC5wYXJlbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdG1wUmVjb3JkID0gc3RvcmUuZ2V0KHRtcFJlY29yZC5wYXJlbnRJZCk7XG4gICAgICAgICAgICBuYW1lICAgICAgPSB0bXBSZWNvcmQubmFtZSArICcuJyArIG5hbWVcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWUgPSAnZXhhbXBsZXNfJyArIG5hbWU7XG5cbiAgICAgICAgaGVhZGVyID0ge1xuICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWRlc2t0b3AnLFxuICAgICAgICAgICAgdGV4dCAgIDogcmVjb3JkLm5hbWVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVjb3JkLnBhdGgpKSB7XG4gICAgICAgICAgICBpbXBvcnQoXG4gICAgICAgICAgICAgICAgLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqL1xuICAgICAgICAgICAgICAgIHJlY29yZC5wYXRoKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBtb2R1bGUuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgIDogbmFtZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlY29yZC5wYXRoLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgICAgICAgICAgcGF0aEFycmF5LnB1c2goaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gcGF0aCkpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocGF0aEFycmF5KS50aGVuKGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogbW9kdWxlLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtwYWRkaW5nOiAnMTBweCd9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTmF2aWdhdGlvblNlYXJjaEZpZWxkQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2V4YW1wbGVzLXRyZWVsaXN0JykgLmZpbHRlcignbmFtZScsIHZhbHVlLCBudWxsKTtcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdhcGktdHJlZWxpc3QnKSAgICAgIC5maWx0ZXIoJ25hbWUnLCB2YWx1ZSwgbnVsbCk7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgndHV0b3JpYWxzLXRyZWVsaXN0JykuZmlsdGVyKCduYW1lJywgdmFsdWUsIG51bGwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk5hdlRhYkNvbnRhaW5lclJlc2l6ZShkYXRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbk5hdlRhYkNvbnRhaW5lclJlc2l6ZScsIGRhdGEpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN3aXRjaFNvdXJjZVZpZXdUaGVtZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiA9IG1lLmdldFJlZmVyZW5jZSgnc291cmNlLXZpZXctdGhlbWUtYnV0dG9uJyksXG4gICAgICAgICAgICBidXR0b25UZXh0LCBocmVmO1xuXG4gICAgICAgIGlmIChidXR0b24udGV4dCA9PT0gJ1NvdXJjZSBWaWV3IFRoZW1lIExpZ2h0Jykge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdTb3VyY2UgVmlldyBUaGVtZSBEYXJrJztcbiAgICAgICAgICAgIGhyZWYgICAgICAgPSAnLi9yZXNvdXJjZXMvbGliL2hpZ2hsaWdodGpzLWN1c3RvbS1naXRodWItdGhlbWUuY3NzJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdTb3VyY2UgVmlldyBUaGVtZSBMaWdodCc7XG4gICAgICAgICAgICBocmVmICAgICAgID0gJy4vcmVzb3VyY2VzL2xpYi9oaWdobGlnaHRqcy1jdXN0b20tZGFyay10aGVtZS5jc3MnXG4gICAgICAgIH1cblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0LnN3YXBTdHlsZVNoZWV0KHtcbiAgICAgICAgICAgIGhyZWYsXG4gICAgICAgICAgICBpZCAgICAgIDogJ2hsanMtdGhlbWUnLFxuICAgICAgICAgICAgd2luZG93SWQ6IG1lLndpbmRvd0lkLFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b25UZXh0XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gbWUuZ2V0UmVmZXJlbmNlKCd0aGVtZS1idXR0b24nKSxcbiAgICAgICAgICAgIHZpZXcgICA9IG1lLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGJ1dHRvblRleHQsIGNscywgdGhlbWU7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1RoZW1lIERhcmsnO1xuICAgICAgICAgICAgdGhlbWUgICAgICA9ICduZW8tdGhlbWUtbGlnaHQnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1RoZW1lIExpZ2h0JztcbiAgICAgICAgICAgIHRoZW1lICAgICAgPSAnbmVvLXRoZW1lLWRhcmsnXG4gICAgICAgIH1cblxuICAgICAgICBjbHMgPSBbLi4udmlldy5jbHNdO1xuXG4gICAgICAgIHZpZXcuY2xzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnbmVvLXRoZW1lJykpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCB0aGVtZSk7XG4gICAgICAgIHZpZXcuY2xzID0gY2xzO1xuXG4gICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uVGV4dFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvblR1dG9yaWFsTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBudHlwZSAgIDogJ2NsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCcsXG4gICAgICAgICAgICBmaWxlTmFtZTogcmVjb3JkLmZpbGVOYW1lLFxuICAgICAgICAgICAgZmlsZVR5cGU6IHJlY29yZC50eXBlLFxuICAgICAgICAgICAgaWQgICAgICA6IHJlY29yZC5uYW1lLFxuXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaGFuZHMtaGVscGluZycsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogcmVjb3JkLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmxpbmVOdW1iZXJcbiAgICAgKi9cbiAgICBvblZpZXdTb3VyY2VSb3V0ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgICAgICAgPSBkYXRhLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXIgICAgICAgICAgPSBkYXRhLmxpbmVOdW1iZXIgJiYgcGFyc2VJbnQoZGF0YS5saW5lTnVtYmVyKSB8fCBudWxsLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKSxcbiAgICAgICAgICAgIHN0cnVjdHVyZVN0b3JlICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2FwaS10cmVlbGlzdCcpLnN0b3JlLFxuICAgICAgICAgICAgcmVjb3JkICAgICAgICAgICAgICA9IHN0cnVjdHVyZVN0b3JlLmZpbmQoJ2NsYXNzTmFtZScsIGNsYXNzTmFtZSlbMF0sXG4gICAgICAgICAgICB0YWI7XG5cbiAgICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICAgICAgdGFiID0gY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgICA6ICdjbGFzc2RldGFpbHMtc291cmNldmlld2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICAgIDogY2xhc3NOYW1lICsgJ19fc291cmNlJyxcbiAgICAgICAgICAgICAgICBsaW5lICAgICAgICAgOiBsaW5lTnVtYmVyLFxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY29kZScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gYWRqdXN0IHRoZSBoaWdobGlnaHRlZCBsaW5lIGZvciBhbHJlYWR5IGFkZGVkIHNvdXJjZSB2aWV3IHRhYnNcbiAgICAgICAgICAgIHRhYi5saW5lID0gbGluZU51bWJlclxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhNYWluQ29udGFpbmVyQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgQ29tcG9uZW50ICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBTb3VyY2VWaWV3Q29tcG9uZW50IGZyb20gJy4vU291cmNlVmlld0NvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLkhlYWRlckNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLkhlYWRlckNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IZWFkZXJDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBiYXNlQ2xzPVsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCddXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlQ2xzOiBbJ25lby1kb2NzLWNsYXNzZGV0YWlscy1oZWFkZXJjb21wb25lbnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSByZWNvcmRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHJlY29yZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGRvbUxpc3RlbmVyc1xuICAgICAgICAgKi9cbiAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgIGZuICAgICAgOiAnb25IZWFkZXJDbGljaycsIC8vIERvY3MuYXBwLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZTogJy5uZW8tZG9jcy1oZWFkZXItdGV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ25lby1kb2NzLWhlYWRlci10ZXh0J119XG4gICAgICAgIF19XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gbWUucmVjb3JkLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0b3JlICAgICA9IG1lLnVwKCdtYWluLWNvbnRhaW5lcicpLnN0b3JlLFxuICAgICAgICAgICAgcmVjb3JkICAgID0gc3RvcmUuZmluZCh7JGtpbmQ6IGNsYXNzTmFtZSA9PT0gJ05lbycgPyAnbW9kdWxlJyA6ICdjbGFzcycsIG5lb0NsYXNzTmFtZTogY2xhc3NOYW1lfSlbMF0sXG4gICAgICAgICAgICBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgID0gcmVjb3JkPy50YWdzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIHNpbmdsZXRvbiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudGFnc1tpXS50aXRsZSA9PT0gJ3NpbmdsZXRvbicpIHtcbiAgICAgICAgICAgICAgICBzaW5nbGV0b24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tLmNuWzBdLmlubmVySFRNTCA9IHNpbmdsZXRvbiA/IChjbGFzc05hbWUgKyAnIOKGkiBTaW5nbGV0b24nKSA6IGNsYXNzTmFtZTtcblxuICAgICAgICBpZiAocmVjb3JkLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBtZS52ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy1oZWFkZXItZGVzY3JpcHRpb24nXSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHJlY29yZC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnVwZGF0ZSgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhIZWFkZXJDb21wb25lbnQpO1xuIiwiaW1wb3J0IFRyZWVMaXN0IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLkhpZXJhcmNoeVRyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIEhpZXJhcmNoeVRyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtdHJlZWxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGJhc2VDbHM9Wydkb2NzLWNsYXNzaGllcmFyY2h5LXRyZWVsaXN0JywnbmVvLWxpc3QtY29udGFpbmVyJywnbmVvLXRyZWUtbGlzdCcsJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGJhc2VDbHM6IFtcbiAgICAgICAgICAgICdkb2NzLWNsYXNzaGllcmFyY2h5LXRyZWVsaXN0JyxcbiAgICAgICAgICAgICduZW8tbGlzdC1jb250YWluZXInLFxuICAgICAgICAgICAgJ25lby10cmVlLWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0J1xuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnM9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzdHJ1Y3R1cmVEYXRhPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0cnVjdHVyZURhdGE6IG51bGxcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmNyZWF0ZVN0b3JlSXRlbXMoKTtcbiAgICAgICAgbWUuY3JlYXRlSXRlbXMobnVsbCwgbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpLCAwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlU3RvcmVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2xhc3NOYW1lICAgICA9IG1lLnN0cnVjdHVyZURhdGEuY2xhc3NOYW1lLFxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lciA9IG1lLnVwKCdtYWluLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgbWFpblN0b3JlICAgICA9IG1haW5Db250YWluZXIuc3RvcmUsXG4gICAgICAgICAgICBzdG9yZUl0ZW1zICAgID0gW10sXG4gICAgICAgICAgICB0bXBJdGVtcyAgICAgID0gW10sXG4gICAgICAgICAgICBpdGVtLCBwYXJlbnRJZDtcblxuICAgICAgICBpdGVtID0gbWFpblN0b3JlLmZpbmQoe1xuICAgICAgICAgICAgJGtpbmQgICAgICAgOiBjbGFzc05hbWUgPT09ICdOZW8nID8gJ21vZHVsZScgOiAnY2xhc3MnLFxuICAgICAgICAgICAgbmVvQ2xhc3NOYW1lOiBtZS5zdHJ1Y3R1cmVEYXRhLmNsYXNzTmFtZVxuICAgICAgICB9KVswXTtcblxuICAgICAgICB0bXBJdGVtcy51bnNoaWZ0KGl0ZW0pO1xuXG4gICAgICAgIHdoaWxlIChpdGVtPy5oYXNPd25Qcm9wZXJ0eSgnYXVnbWVudHMnKSkge1xuICAgICAgICAgICAgaXRlbSA9IG1haW5TdG9yZS5maW5kKHtcbiAgICAgICAgICAgICAgICAka2luZCAgICAgICA6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgbmVvQ2xhc3NOYW1lOiBpdGVtLmF1Z21lbnRzWzBdXG4gICAgICAgICAgICB9KVswXTtcblxuICAgICAgICAgICAgdG1wSXRlbXMudW5zaGlmdChpdGVtKVxuICAgICAgICB9XG5cbiAgICAgICAgdG1wSXRlbXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIHBhcmVudElkID0gdG1wSXRlbXNbaW5kZXggLSAxXSA/IHRtcEl0ZW1zW2luZGV4IC0gMV0uaWQgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgc3RvcmVJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgOiBrZXkuaWQsXG4gICAgICAgICAgICAgICAgICAgIGlzTGVhZiAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lICAgIDoga2V5Lm5lb0NsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBzdG9yZUl0ZW1zXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25MZWFmSXRlbUNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdm5vZGVJZCAgPSBtZS5nZXRJdGVtSWQocmVjb3JkLmlkKSxcbiAgICAgICAgICAgIHZkb21Ob2RlID0gbWUuZ2V0VmRvbUNoaWxkKHZub2RlSWQpO1xuXG4gICAgICAgIE5lb0FycmF5W3JlY29yZC5jaGVja2VkID8gJ2FkZCcgOiAncmVtb3ZlJ10odmRvbU5vZGUuY2xzLCAndW5jaGVja2VkJyk7XG5cbiAgICAgICAgcmVjb3JkLmNoZWNrZWQgPSAhcmVjb3JkLmNoZWNrZWQ7XG5cbiAgICAgICAgbWUudXBkYXRlKCk7XG5cbiAgICAgICAgbWUuZmlyZSgncmVmcmVzaENsYXNzTWVtYmVycycpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhIaWVyYXJjaHlUcmVlTGlzdCk7XG4iLCJpbXBvcnQgQ29udGFpbmVyICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgSGVhZGVyQ29tcG9uZW50ICAgICAgICAgZnJvbSAnLi9IZWFkZXJDb21wb25lbnQubWpzJztcbmltcG9ydCBIaWVyYXJjaHlUcmVlTGlzdCAgICAgICBmcm9tICcuL0hpZXJhcmNoeVRyZWVMaXN0Lm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IE1lbWJlcnNMaXN0ICAgICAgICAgICAgIGZyb20gJy4vTWVtYmVyc0xpc3QubWpzJztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyc7XG5pbXBvcnQgU2VhcmNoRmllbGQgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvU2VhcmNoLm1qcyc7XG5pbXBvcnQgU3BsaXR0ZXIgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9TcGxpdHRlci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBiYXNlQ2xzPVsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLCduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGJhc2VDbHM6IFsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gc3RydWN0dXJlRGF0YT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdHJ1Y3R1cmVEYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVsvLy4uLl1dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLWhlYWRlcmNvbnRhaW5lciddLFxuICAgICAgICAgICAgZmxleCAgICAgOiAnMSAxIGF1dG8nLFxuICAgICAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IDIwMCxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbW9kdWxlIDogUGFuZWwsXG4gICAgICAgICAgICAgICAgY2xzICAgIDogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVycGFuZWwnLCAnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgICAgICBkb2NrIDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7Ym9yZGVyV2lkdGg6IDB9LFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd0NvbmZpZ3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0NvbmZpZ3MnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd01ldGhvZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ01ldGhvZHMnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uU2Nyb2xsSW50b1ZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd0V2ZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdFdmVudHMnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogU2VhcmNoRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgICAgICA6IHtjaGFuZ2U6ICdvblNlYXJjaEZpZWxkQ2hhbmdlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdGaWx0ZXIgTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgICA6IDE2MCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4gICAgIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1RvcCA6ICcycHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uVG9nZ2xlTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd1ByaXZhdGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblJpZ2h0OiAnNXB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdQcml2YXRlJ1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblRvZ2dsZU1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtY2hlY2stc3F1YXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dQcm90ZWN0ZWRNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblJpZ2h0OiAnNXB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdQcm90ZWN0ZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uVG9nZ2xlTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd1N0YXRpY01lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnU3RhdGljJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZDogJ0Bjb25maWc6c3RydWN0dXJlRGF0YSdcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogU3BsaXR0ZXIsXG4gICAgICAgICAgICAgICAgc2l6ZSAgOiA1XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgICAgIDogSGllcmFyY2h5VHJlZUxpc3QsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgIDogJzAgMCBhdXRvJyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aCAgICAgOiAzMzAsXG4gICAgICAgICAgICAgICAgc3RydWN0dXJlRGF0YTogJ0Bjb25maWc6c3RydWN0dXJlRGF0YSdcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogU3BsaXR0ZXIsXG4gICAgICAgICAgICBkaXJlY3Rpb24gICA6ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIHJlc2l6ZVRhcmdldDogJ3ByZXZpb3VzJyxcbiAgICAgICAgICAgIHNpemUgICAgICAgIDogNVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE1lbWJlcnNMaXN0LFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7bXV0YXRlSXRlbXM6ICdvbk11dGF0ZUl0ZW1zJ30sXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnXG4gICAgICAgIH1dXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhNYWluQ29udGFpbmVyKTtcbiIsImltcG9ydCBDb21wb25lbnQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IFNvdXJjZVZpZXdDb21wb25lbnQgZnJvbSBcIi4vU291cmNlVmlld0NvbXBvbmVudC5tanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhZGVyQ2xpY2soZGF0YSkge1xuICAgICAgICBOZW8uTWFpbi5zZXRSb3V0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogYC92aWV3U291cmNlLyR7dGhpcy5jb21wb25lbnQuc3RydWN0dXJlRGF0YS5jbGFzc05hbWV9YFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZVxuICAgICAqL1xuICAgIG9uTXV0YXRlSXRlbXMoc3RvcmUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudENvbmZpZ3MgICAgPSAwLFxuICAgICAgICAgICAgY291bnRFdmVudHMgICAgID0gMCxcbiAgICAgICAgICAgIGNvdW50TWV0aG9kcyAgICA9IDAsXG4gICAgICAgICAgICBjb3VudFByaXZhdGVzICAgPSAwLFxuICAgICAgICAgICAgY291bnRQcm90ZWN0ZWRzID0gMCxcbiAgICAgICAgICAgIGNvdW50U3RhdGljcyAgICA9IDA7XG5cbiAgICAgICAgc3RvcmUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmtpbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb3VudE1ldGhvZHMrK1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmtpbmQgPT09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY291bnRDb25maWdzKytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRFdmVudHMrK1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5hY2Nlc3MgPT09ICdwcml2YXRlJykge1xuICAgICAgICAgICAgICAgIGNvdW50UHJpdmF0ZXMrK1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmFjY2VzcyA9PT0gJ3Byb3RlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICBjb3VudFByb3RlY3RlZHMrK1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5zY29wZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgICBjb3VudFN0YXRpY3MrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dDb25maWdzJykgICAgICAgICAudGV4dCA9ICdDb25maWdzICcgICArIGNvdW50Q29uZmlncztcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93TWV0aG9kcycpICAgICAgICAgLnRleHQgPSAnTWV0aG9kcyAnICAgKyBjb3VudE1ldGhvZHM7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd0V2ZW50cycpICAgICAgICAgIC50ZXh0ID0gJ0V2ZW50cyAnICAgICsgY291bnRFdmVudHM7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd1ByaXZhdGVNZW1iZXJzJykgIC50ZXh0ID0gJ1ByaXZhdGUgJyAgICsgY291bnRQcml2YXRlcztcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93UHJvdGVjdGVkTWVtYmVycycpLnRleHQgPSAnUHJvdGVjdGVkICcgKyBjb3VudFByb3RlY3RlZHM7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd1N0YXRpY01lbWJlcnMnKSAgIC50ZXh0ID0gJ1N0YXRpYyAnICAgICsgY291bnRTdGF0aWNzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2Nyb2xsSW50b1ZpZXcoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiA9IE5lby5nZXRDb21wb25lbnQoZGF0YS50YXJnZXQuaWQpO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgIHRleHQgICA6IGJ1dHRvbi5yZWZlcmVuY2Uuc3Vic3RyKDQpLFxuICAgICAgICAgICAgdm5vZGVJZDogbWUuY29tcG9uZW50LnZkb20uaWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TZWFyY2hGaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0UmVmZXJlbmNlKCdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnKS5maWx0ZXJNZW1iZXJzUXVlcnkgPSBkYXRhLnZhbHVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVG9nZ2xlTWVtYmVycyhkYXRhKSB7XG4gICAgICAgIGxldCBidXR0b24gICAgICA9IE5lby5nZXRDb21wb25lbnQoZGF0YS50YXJnZXQuaWQpLFxuICAgICAgICAgICAgbWVtYmVyc0xpc3QgPSB0aGlzLmdldFJlZmVyZW5jZSgnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0Jyk7XG5cbiAgICAgICAgYnV0dG9uLmljb25DbHMgPSBidXR0b24uY2hlY2tlZCA/ICdmYSBmYS1zcXVhcmUnIDogJ2ZhIGZhLWNoZWNrLXNxdWFyZSc7XG4gICAgICAgIGJ1dHRvbi5jaGVja2VkID0gIWJ1dHRvbi5jaGVja2VkO1xuXG4gICAgICAgIG1lbWJlcnNMaXN0W2J1dHRvbi5yZWZlcmVuY2VdID0gYnV0dG9uLmNoZWNrZWRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcbiIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9saXN0L0Jhc2UubWpzJztcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NZW1iZXJzTGlzdFxuICogQGV4dGVuZHMgTmVvLmxpc3QuQmFzZVxuICovXG5jbGFzcyBNZW1iZXJzTGlzdCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NZW1iZXJzTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NZW1iZXJzTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBiYXNlQ2xzPVsnZG9jcy1jbGFzc2hpZXJhcmNoeS1tZW1iZXJzbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlQ2xzOiBbJ2RvY3MtY2xhc3NoaWVyYXJjaHktbWVtYmVyc2xpc3QnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZmlsdGVyTWVtYmVyc1F1ZXJ5Xz0nJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJNZW1iZXJzUXVlcnlfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dQcml2YXRlTWVtYmVyc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd1ByaXZhdGVNZW1iZXJzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dQcm90ZWN0ZWRNZW1iZXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93UHJvdGVjdGVkTWVtYmVyc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93U3RhdGljTWVtYmVyc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd1N0YXRpY01lbWJlcnNfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdGFyZ2V0Q2xhc3NOYW1lPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldENsYXNzTmFtZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e2NuOiBbXX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICAgICAge2NuOiBbXX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoaWVyYXJjaHlWaWV3ID0gbWUudXAoJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJykuZG93bignY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnKSxcbiAgICAgICAgICAgIG1haW5TdG9yZSAgICAgPSBtZS51cCgnbWFpbi1jb250YWluZXInKS5zdG9yZTtcblxuICAgICAgICBoaWVyYXJjaHlWaWV3Lm9uKHtcbiAgICAgICAgICAgIHJlZnJlc2hDbGFzc01lbWJlcnM6IG1lLm9uUmVmcmVzaENsYXNzTWVtYmVycyxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnN0b3JlID0gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICBmaWx0ZXJNb2RlOiAnYWR2YW5jZWQnLFxuICAgICAgICAgICAgc291cmNlSWQgIDogbWFpblN0b3JlLmlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLm9uUmVmcmVzaENsYXNzTWVtYmVycygpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmaWx0ZXJNZW1iZXJzUXVlcnkgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmlsdGVyTWVtYmVyc1F1ZXJ5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMub25SZWZyZXNoQ2xhc3NNZW1iZXJzKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dQcm90ZWN0ZWRNZW1iZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1Byb3RlY3RlZE1lbWJlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd1ByaXZhdGVNZW1iZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1ByaXZhdGVNZW1iZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMub25SZWZyZXNoQ2xhc3NNZW1iZXJzKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dTdGF0aWNNZW1iZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1N0YXRpY01lbWJlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGFwcGx5Q29uZmlnc0hlYWRlcihzdG9yZSwgdmRvbSkge1xuICAgICAgICBpZiAoc3RvcmUuaXRlbXNbMF0/LmtpbmQgPT09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy1tZW1iZXJsaXN0LWdyb3VwLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ0NvbmZpZ3MnLFxuICAgICAgICAgICAgICAgICdkYXRhLWxpc3QtaGVhZGVyJzogJ0NvbmZpZ3MnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZkb21cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGFwcGx5RXZlbnRzSGVhZGVyKGl0ZW0sIGluZGV4LCBzdG9yZSwgdmRvbSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpdGVtLmtpbmQgPT09ICdldmVudCcgJiZcbiAgICAgICAgICAgIHN0b3JlLml0ZW1zW2luZGV4IC0xXT8ua2luZCAhPT0gJ2V2ZW50J1xuICAgICAgICApIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLW1lbWJlcmxpc3QtZ3JvdXAtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnRXZlbnRzJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHt6SW5kZXg6IDN9LFxuICAgICAgICAgICAgICAgICdkYXRhLWxpc3QtaGVhZGVyJzogJ0V2ZW50cydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgYXBwbHlNZXRob2RzSGVhZGVyKGl0ZW0sIGluZGV4LCBzdG9yZSwgdmRvbSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBpdGVtLmtpbmQgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAhc3RvcmUuaXRlbXNbaW5kZXggLTFdIHx8IChcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuaXRlbXNbaW5kZXggLTFdPy5raW5kICE9PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLW1lbWJlcmxpc3QtZ3JvdXAtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnTWV0aG9kcycsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7ekluZGV4OiAyfSxcbiAgICAgICAgICAgICAgICAnZGF0YS1saXN0LWhlYWRlcic6ICdNZXRob2RzJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZG9tXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJNZW1iZXJzUmVnRXggPSBuZXcgUmVnRXhwKG1lLmZpbHRlck1lbWJlcnNRdWVyeSB8fCAnJywgJ2dpJyksXG4gICAgICAgICAgICBoYXNFeGFtcGxlcyAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIHRhcmdldENsYXNzTmFtZSAgICA9IG1lLnRhcmdldENsYXNzTmFtZSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBoZWFkZXJUZXh0LCBpdGVtQXR0cmlidXRlcywgaXRlbUNvbmZpZywgcGF0aDtcblxuICAgICAgICB2ZG9tLmNuID0gW107XG4gICAgICAgIHZkb20gPSBtZS5hcHBseUNvbmZpZ3NIZWFkZXIobWUuc3RvcmUsIHZkb20pO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2ZG9tID0gbWUuYXBwbHlFdmVudHNIZWFkZXIoIGl0ZW0sIGluZGV4LCBtZS5zdG9yZSwgdmRvbSk7XG4gICAgICAgICAgICB2ZG9tID0gbWUuYXBwbHlNZXRob2RzSGVhZGVyKGl0ZW0sIGluZGV4LCBtZS5zdG9yZSwgdmRvbSk7XG5cbiAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzID0gW107XG5cbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUuc3Vic3RyKC0xKSA9PT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gaXRlbS5uYW1lLnNsaWNlKDAsIC0xKSA7XG4gICAgICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMucHVzaCgnR1MnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goJ2luaGVyaXRlZCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmFjY2VzcyA9PT0gJ3ByaXZhdGUnIHx8IGl0ZW0uYWNjZXNzID09PSAncHJvdGVjdGVkJykge1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goaXRlbS5hY2Nlc3MpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnNjb3BlID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goJ3N0YXRpYycpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhlYWRlclRleHQgPSBpdGVtLm5hbWU7XG5cbiAgICAgICAgICAgIGlmIChtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09ICcnICYmIG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgPSBoZWFkZXJUZXh0LnJlcGxhY2UoZmlsdGVyTWVtYmVyc1JlZ0V4LCBtYXRjaCA9PiBgPHNwYW4gY2xhc3M9XCJuZW8taGlnaGxpZ2h0LXNlYXJjaFwiPiR7bWF0Y2h9PC9zcGFuPmApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbmZpZ3NcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGU/Lm5hbWVzKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dCArPSAoJzogeycgKyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKGl0ZW0udHlwZS5uYW1lcy5qb2luKCd8JykpICsgJ30nKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdHZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnID0gJyArIGl0ZW0uZGVmYXVsdHZhbHVlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBtZXRob2RzXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJhbXMgJiYgaXRlbS5raW5kICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uJGtpbmQgPT09ICdwcm9wZXJ0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyVGV4dCA9ICdnZXQgJyArIGhlYWRlclRleHRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnKCcgKyBpdGVtLnBhcmFtcy5yZWR1Y2UoKHJlc3VsdCwgcGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLm5hbWUuaW5kZXhPZignLicpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goJ1snICsgcGFyYW0ubmFtZSArICddJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW0ubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJywgJykgKyAnKScpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnJldHVybnM/LlswXS50eXBlKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyVGV4dCArPSAoJyDihpIgeycgKyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKGl0ZW0ucmV0dXJuc1swXS50eXBlLm5hbWVzLmpvaW4oJ3wnKSArICd9JykpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhdGggPSBpdGVtLm1ldGEucGF0aDtcblxuICAgICAgICAgICAgaWYgKHBhdGguaW5jbHVkZXMoJy9uZW8ubWpzLycpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKHBhdGguaW5kZXhPZignL25lby5tanMvJykgKyA5KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXRoLmluY2x1ZGVzKCcvbmVvbWpzLycpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKHBhdGguaW5kZXhPZignL25lb21qcy8nKSAgKyA4KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXRoLmluY2x1ZGVzKCcvbmVvLycpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKHBhdGguaW5kZXhPZignL25lby8nKSAgICAgKyA1KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGlzdC1pdGVtJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWxpc3QtaXRlbS1oZWFkZXItY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tbGlzdC1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBoZWFkZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWxpc3QtaXRlbS1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogaXRlbUF0dHJpYnV0ZXMuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiAnbmVvLWRvY3Mtdmlldy1zb3VyY2UtbGluay1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjbiA6W3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLXZpZXctc291cmNlLWxpbmsnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYgICAgIDogYCMvdmlld1NvdXJjZS8ke2l0ZW0ubmVvQ2xhc3NOYW1lfS9saW5lLyR7aXRlbS5tZXRhLmxpbmVub31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBgU291cmNlOiAke3BhdGh9LyR7aXRlbS5tZXRhLmZpbGVuYW1lfSAoTGluZSAke2l0ZW0ubWV0YS5saW5lbm99KWBcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5leGFtcGxlcz8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGhhc0V4YW1wbGVzID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZXhhbXBsZXMuZm9yRWFjaChleGFtcGxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbmZpZy5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IFsnaGxqcyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBleGFtcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmFtcz8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1Db25maWcuY24ucHVzaChNZW1iZXJzTGlzdC5jcmVhdGVQYXJhbWV0ZXJzVGFibGUoaXRlbS5wYXJhbXMpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5yZXR1cm5zPy5bMF0udHlwZSAmJiBpdGVtLmtpbmQgIT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICBpdGVtQ29uZmlnLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdSZXR1cm5zIHsnICsgTWVtYmVyc0xpc3QuZXNjYXBlSHRtbChpdGVtLnJldHVybnNbMF0udHlwZS5uYW1lcy5qb2luKCd8JykgKyAnfSAnKSArIChpdGVtLnJldHVybnNbMF0uZGVzY3JpcHRpb24gfHwgJycpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKGl0ZW1Db25maWcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuXG4gICAgICAgIG1lLnRpbWVvdXQoMTAwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodEluaXQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUGFyYW1ldGVyc1RhYmxlKHBhcmFtcykge1xuICAgICAgICBsZXQgaGFzRGVmYXVsdFZhbHVlcyAgPSBmYWxzZSxcbiAgICAgICAgICAgIGhhc09wdGlvbmFsUGFyYW1zID0gZmFsc2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiwgbmVzdGVkUGFyYW1zLCBwYXJhbVRhYmxlO1xuXG4gICAgICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdHZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICBoYXNEZWZhdWx0VmFsdWVzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyYW0uaGFzT3duUHJvcGVydHkoJ29wdGlvbmFsJykpIHtcbiAgICAgICAgICAgICAgICBoYXNPcHRpb25hbFBhcmFtcyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyYW1UYWJsZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgIGNsczogJ2RvY3MtcGFyYW0tdGFibGUnLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3RoZWFkJyxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnTmFtZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnVHlwZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGhhc0RlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHBhcmFtVGFibGUuY25bMF0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnRGVmYXVsdCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzT3B0aW9uYWxQYXJhbXMpIHtcbiAgICAgICAgICAgIHBhcmFtVGFibGUuY25bMF0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnT3B0aW9uYWwnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmFtLm5hbWUuaW5kZXhPZignLicpIDwgMCkgeyAvLyBpZ25vcmUgbmVzdGVkIHBhcmFtc1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG5lc3RlZFBhcmFtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwLm5hbWUuaW5kZXhPZihwYXJhbS5uYW1lICsgJy4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IE5lby5jbG9uZShwLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcC5uYW1lID0gcC5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLm5hbWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAubmFtZSA9IHAubmFtZS5qb2luKCcuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5lc3RlZFBhcmFtcy5wdXNoKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmVzdGVkUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBkZXNjcmlwdGlvbi5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVtYmVyc0xpc3QuY3JlYXRlUGFyYW1ldGVyc1RhYmxlKG5lc3RlZFBhcmFtcyldXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJhbVRhYmxlLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLnR5cGUgPyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKHBhcmFtLnR5cGUubmFtZXMuam9pbignIHwgJykpIDogJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1UYWJsZS5jbltwYXJhbVRhYmxlLmNuLmxlbmd0aCAtIDFdLmNuLnNwbGljZSgyLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLmRlZmF1bHR2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiAocGFyYW0uZGVmYXVsdHZhbHVlICsgJycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhhc09wdGlvbmFsUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtVGFibGUuY25bcGFyYW1UYWJsZS5jbi5sZW5ndGggLSAxXS5jbi5zcGxpY2UoMiwgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS5vcHRpb25hbFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtVGFibGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyAnPCcgJiAnPidcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBlc2NhcGVIdG1sKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBmaWx0ZXJBbmRTb3J0SXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoaWVyYXJjaHlNYXAgICA9IHt9LFxuICAgICAgICAgICAgaGllcmFyY2h5U3RvcmUgPSBtZS51cCgnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInKS5kb3duKCdjbGFzc2hpZXJhcmNoeS10cmVlbGlzdCcpLnN0b3JlLFxuICAgICAgICAgICAgaGllcmFyY2h5SXRlbXMgPSBoaWVyYXJjaHlTdG9yZS5pdGVtcyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIHRtcEl0ZW1zICAgICAgID0gW10sXG4gICAgICAgICAgICBmaWx0ZXJzLCB0bXBJdGVtc0xlbjtcblxuICAgICAgICBoaWVyYXJjaHlJdGVtcy5mb3JFYWNoKGNscyA9PiB7XG4gICAgICAgICAgICBpZiAoY2xzLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGNscy5uYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0bXBJdGVtc0xlbiA9IHRtcEl0ZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IHRtcEl0ZW1zTGVuOyBpKyspIHtcbiAgICAgICAgICAgIGhpZXJhcmNoeU1hcFt0bXBJdGVtc1tpXV0gPSBpXG4gICAgICAgIH1cblxuICAgICAgICBtZS50YXJnZXRDbGFzc05hbWUgPSBoaWVyYXJjaHlJdGVtc1toaWVyYXJjaHlJdGVtcy5sZW5ndGggLTFdLm5hbWU7XG5cbiAgICAgICAgZmlsdGVycyA9IFt7XG4gICAgICAgICAgICBvcGVyYXRvcjogJ2luY2x1ZGVkJyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAnbmVvQ2xhc3NOYW1lJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiB0bXBJdGVtc1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2tpbmQnLFxuICAgICAgICAgICAgdmFsdWUgICA6ICdjbGFzcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgcHJvcGVydHk6ICdraW5kJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiAnY29uc3RhbnQnIC8vIHRvZG8/XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAna2luZCcsXG4gICAgICAgICAgICB2YWx1ZSAgIDogJ21vZHVsZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICdpc1VuZGVmaW5lZCcsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2luaGVyaXRlZCdcbiAgICAgICAgfV07XG5cbiAgICAgICAgaWYgKCFtZS5zaG93UHJpdmF0ZU1lbWJlcnMpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnYWNjZXNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3ByaXZhdGUnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZS5zaG93UHJvdGVjdGVkTWVtYmVycykge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdhY2Nlc3MnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiAncHJvdGVjdGVkJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWUuc2hvd1N0YXRpY01lbWJlcnMpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnc2NvcGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiAnc3RhdGljJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09ICcnICYmIG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ2xpa2UnLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IG1lLmZpbHRlck1lbWJlcnNRdWVyeVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICBzY29wZSAgIDogbWUsXG4gICAgICAgICAgICBmaWx0ZXJCeTogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zICAgPSBvcHRzLmZpbHRlcmVkSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gICAgICAgICAgICA9IG9wdHMuaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Q2xhc3NOYW1lID0gbWUudGFyZ2V0Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW0sIGksIGxlbjtcblxuICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBleGNsdWRlIGluaGVyaXRlZCBjbGFzc05hbWUgJiBudHlwZSBjb25maWdzXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ250eXBlJyAmJiBpdGVtLm5lb0NsYXNzTmFtZSAhPT0gdGFyZ2V0Q2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmVvQ2xhc3NOYW1lICE9PSB0YXJnZXRDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaSAgID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gZmlsdGVyZWRJdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtID0gZmlsdGVyZWRJdGVtc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IGZpbHRlcmVkSXRlbS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lICA9PT0gZmlsdGVyZWRJdGVtLm5hbWUgICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2NvcGUgPT09IGZpbHRlcmVkSXRlbS5zY29wZSAmJiAvLyBzdGF0aWMgVlMgaW5zdGFuY2UgbWVtYmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWVyYXJjaHlNYXBbaXRlbS5uZW9DbGFzc05hbWVdIDwgaGllcmFyY2h5TWFwW2ZpbHRlcmVkSXRlbS5uZW9DbGFzc05hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnN0b3JlLmZpbHRlcnMgPSBmaWx0ZXJzO1xuXG4gICAgICAgIG1lLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgLy8gQ29uZmlncyA9PiBNZXRob2RzID0+IEV2ZW50c1xuICAgICAgICAgICAgc29ydEJ5OiBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgYSA9IGEua2luZCA9PT0gJ21lbWJlcicgPyAwIDogYS5raW5kID09PSAnZnVuY3Rpb24nID8gMSA6IDI7XG4gICAgICAgICAgICAgICAgYiA9IGIua2luZCA9PT0gJ21lbWJlcicgPyAwIDogYi5raW5kID09PSAnZnVuY3Rpb24nID8gMSA6IDI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYSA+IGIgPyAxIDogYSA8IGIgPyAtMSA6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJyxcbiAgICAgICAgICAgIHByb3BlcnR5IDogJ25hbWUnXG4gICAgICAgIH1dO1xuXG4gICAgICAgIG1lLmZpcmUoJ211dGF0ZUl0ZW1zJywgbWUuc3RvcmUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdG8gbm90IGNhbGwgY3JlYXRlSXRlbXMoKSBhdCB0aGlzIHBvaW50ID0+IG9uUmVmcmVzaENsYXNzTWVtYmVycygpXG4gICAgICovXG4gICAgb25TdG9yZUZpbHRlcigpIHt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uUmVmcmVzaENsYXNzTWVtYmVycygpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJBbmRTb3J0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtcygpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZW8uc2V0dXBDbGFzcyhNZW1iZXJzTGlzdCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlNvdXJjZVZpZXdDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBTb3VyY2VWaWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuU291cmNlVmlld0NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5Tb3VyY2VWaWV3Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1zb3VyY2V2aWV3Y29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1zb3VyY2V2aWV3Y29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzSGlnaGxpZ2h0ZWRfPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzSGlnaGxpZ2h0ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBsaW5lXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpbmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHByZXZpb3VzTGluZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHByZXZpb3VzTGluZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzdHJ1Y3R1cmVEYXRhPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3RydWN0dXJlRGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGU9IHtvdmVyZmxvdzogJ2F1dG8nfVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHt0YWc6ICdwcmUnLCBjbHM6IFsnaGxqcyddLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICdjb2RlJywgY2xhc3M6ICdsYW5ndWFnZS1qYXZhc2NyaXB0J31cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHVybCA9ICcuLi8uLi8nICsgbWUuc3RydWN0dXJlRGF0YS5zcmNQYXRoO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5hcHBseVNvdXJjZUNvZGUoZGF0YS5yZXNwb25zZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICB2YWx1ZSAmJiB0aGlzLnRpbWVvdXQoNTApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zeW50YXhIaWdobGlnaHQoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaXNIaWdobGlnaHRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElzSGlnaGxpZ2h0ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgbWUudGltZW91dCg1MCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc3ludGF4SGlnaGxpZ2h0TGluZSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpbmUgICA6IG1lLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpbmU6IG1lLnByZXZpb3VzTGluZSxcbiAgICAgICAgICAgICAgICAgICAgdm5vZGVJZCAgIDogbWUudmRvbS5jblswXS5jblswXS5pZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsaW5lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExpbmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBtZS5wcmV2aW91c0xpbmUgPSBvbGRWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmlzSGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgIG1lLmFmdGVyU2V0SXNIaWdobGlnaHRlZCh0cnVlLCBmYWxzZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhcHBseVNvdXJjZUNvZGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gbWUudmRvbS5jblswXTsgLy8gcHJlIHRhZ1xuXG4gICAgICAgIG5vZGUuY25bMF0uaW5uZXJIVE1MID0gZGF0YTsgLy8gY29kZSB0YWdcbiAgICAgICAgbWUudXBkYXRlKCk7XG5cbiAgICAgICAgbWUubW91bnRlZCAmJiBtZS5zeW50YXhIaWdobGlnaHQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc3ludGF4SGlnaGxpZ2h0KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodCh7XG4gICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgdm5vZGVJZDogbWUudmRvbS5jblswXS5jblswXS5pZFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghbWUuaXNIaWdobGlnaHRlZCkge1xuICAgICAgICAgICAgICAgIG1lLmlzSGlnaGxpZ2h0ZWQgPSB0cnVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmFmdGVyU2V0SXNIaWdobGlnaHRlZCh0cnVlLCBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5lby5zZXR1cENsYXNzKFNvdXJjZVZpZXdDb21wb25lbnQpO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5UdXRvcmlhbENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFR1dG9yaWFsQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuVHV0b3JpYWxDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5jbGFzc2RldGFpbHMuVHV0b3JpYWxDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLXR1dG9yaWFsY29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYmFzZUNscz1bJ25lby1jbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWyduZW8tY2xhc3NkZXRhaWxzLXR1dG9yaWFsY29tcG9uZW50J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZmlsZU5hbWU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsZU5hbWU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZmlsZVR5cGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsZVR5cGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPXtvdmVyZmxvdzogJ2F1dG8nfVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpc0pzb24gPSBtZS5maWxlVHlwZSA9PT0gJ2pzb24nLFxuICAgICAgICAgICAgdXJsICAgID0gJy4uLy4uL2RvY3MvdHV0b3JpYWxzLycgKyBtZS5maWxlTmFtZTtcblxuICAgICAgICBOZW8uWGhyW2lzSnNvbiA/ICdwcm9taXNlSnNvbicgOiAncHJvbWlzZVJlcXVlc3QnXSh7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLnRpbWVvdXQoMTAwKS50aGVuKCgpID0+IHsgLy8gZW5zdXJlIHdlIGFyZSBub3QgbW91bnRpbmdcbiAgICAgICAgICAgICAgICBtZS5hcHBseVNvdXJjZUNvZGUoaXNKc29uID8gZGF0YS5qc29uIDogZGF0YS5yZXNwb25zZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFwcGx5U291cmNlQ29kZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmZpbGVUeXBlID09PSAnanNvbicpIHtcbiAgICAgICAgICAgIG1lLnZkb20uY24gPSBkYXRhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS52ZG9tLmlubmVySFRNTCA9IGRhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuXG4gICAgICAgIG1lLnRpbWVvdXQoNTApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgVHV0b3JpYWxDb21wb25lbnQuc3ludGF4SGlnaGxpZ2h0KClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHN0YXRpYyBzeW50YXhIaWdobGlnaHQoKSB7XG4gICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodEluaXQoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmVvLnNldHVwQ2xhc3MoVHV0b3JpYWxDb21wb25lbnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9