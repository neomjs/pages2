"use strict";(self.webpackChunkmainapp=self.webpackChunkmainapp||[]).push([[668],{683:(e,t,o)=>{o.d(t,{Z:()=>y});var n=o(66),r=o(634),s=o(74),i=o(978),a=o(565);class d extends s.Z{static getConfig(){return{className:"Neo.util.KeyNavigation",ntype:"keynav",component_:null,keyDownEventBubble:!1,keys_:null}}add(e){this._keys.push(...this.parseKeys(e))}beforeGetComponent(){return Neo.getComponent(this._component)}beforeSetComponent(e){return e?.id}destroy(){this.unregister(),super.destroy()}onKeyDown(e){if(e.key){let t,o=this,n=e.key.toUpperCase();n=o.parseUpperCaseKey(n),o.keys.forEach((o=>{t=Neo.get(o.scope),o.key.toUpperCase()===n&&t[o.fn]?.apply(t,[e])}))}}parseKeys(e){if(!Array.isArray(e)){let t=this._component,o=[];t&&(Object.entries(e).forEach((([e,n])=>{o.push({fn:n,key:e,scope:t})})),e=o)}return e}parseUpperCaseKey(e){switch(e){case" ":e="SPACE";break;case"ARROWDOWN":e="DOWN";break;case"ARROWLEFT":e="LEFT";break;case"ARROWRIGHT":e="RIGHT";break;case"ARROWUP":e="UP"}return e}register(e){let t=this,o=e.domListeners;t.component=e,t.keys=t.parseKeys(t.keys),o&&(o.push({keydown:{fn:t.onKeyDown,bubble:t.keyDownEventBubble,scope:t}}),e.domListeners=o)}removeKey(e){let t,o=this._keys,n=0,r=o.length;for(;n<r;n++)if(t=o[n],Neo.isEqual(t,e)){a.Z.remove(o,t);break}}removeKeys(e){Array.isArray(e)&&e.forEach((e=>this.removeKey(e)))}unregister(){}}Neo.applyClassConfig(d);const l=d;var m=o(936),p=(o(622),o(993)),c=o(181),u=o(892),h=o(562);class g extends s.Z{static getStaticConfig(){return{hideModes:["removeDom","visibility"],observable:!0}}static getConfig(){return{className:"Neo.component.Base",ntype:"component",appName_:null,autoMount:!1,autoRender:!1,bind:null,containsFocus_:!1,controller_:null,data_:null,disabled_:!1,domListeners_:null,droppable_:!1,dropZone:null,dropZoneConfig:null,hasBeenMounted:!1,hasRenderingListener:!1,hasUnmountedVdomChanges_:!1,height_:null,hidden_:!1,hideMode_:"removeDom",html_:null,isVdomUpdating:!1,keys_:null,maxHeight_:null,maxWidth_:null,minHeight_:null,minWidth_:null,model_:null,modelData:null,mounted_:!1,needsVdomUpdate:!1,parentId:"document.body",plugins_:null,rendering_:!1,silentVdomUpdate:!1,style:{},tooltips_:null,vnode_:null,width_:null,wrapperStyle_:null,_vdom:{}}}get cls(){return this._cls?Neo.clone(this._cls):[]}set cls(e){e=e||[];let t,o=this,n=o.vdom,r=o.getVdomRoot();"string"==typeof e&&(e=e.split("")),o.mounted&&(t=Neo.clone(o._cls)),o._cls=e,r&&(r.cls=[...e]),o._vdom=n,o.silentVdomUpdate?o.needsVdomUpdate=!0:o.mounted&&o.updateCls(e,t)}get listeners(){return this._listeners||{}}set listeners(e){this._listeners=e}get rendered(){return this._rendered||!1}set rendered(e){let t=this;t._rendered=e,!0===e&&t.fire("rendered",t.id)}get style(){return Neo.clone(this._style||{})}set style(e){let t=this,o=t.style;t._style=e,t.updateStyle(e,o)}get vdom(){return this._vdom}set vdom(e){let t,o=this,n=Neo.apps[o.appName],r=e,s=o.getVdomRoot();s&&o.cls&&(s.cls=o.cls),o._vdom!==r?(m.Z.warn("vdom got replaced for: "+o.id+". Copying the content into the reference holder object"),Object.keys(o._vdom).forEach((e=>{delete o._vdom[e]})),Object.assign(o._vdom,r)):o._vdom=r,o.silentVdomUpdate?o.needsVdomUpdate=!0:(o.mounted||!o.isConstructed||o.hasRenderingListener||!0!==n?.rendering?o.mounted&&o.vnode&&o.updateVdom(r,o.vnode):(o.hasRenderingListener=!0,t=n.on("mounted",(()=>{n.un("mounted",t),setTimeout((()=>{o.vnode&&o.updateVdom(o.vdom,o.vnode)}),50)}))),o.hasUnmountedVdomChanges=!o.mounted&&o.hasBeenMounted)}addCls(e){let t=this.cls;a.Z.add(t,e),this.cls=t}addStyle(e){return"string"==typeof e&&(e=c.Z.createStyleObject(e)),this.style=Object.assign(this.style,e)}afterSetAppName(e,t){e&&Neo.currentWorker.insertThemeFiles(e,this.__proto__)}afterSetConfig(e,t,o){Neo.currentWorker.isUsingViewModels&&this.bind?.[e]?.twoWay&&this.getModel()?.setData(e,t)}afterSetDisabled(e,t){let o=this.cls;a.Z[e?"add":"remove"](o,"neo-disabled"),this.cls=o}afterSetDomListeners(e,t){i.Z.updateDomListeners(this,e,t)}afterSetDroppable(e,t){let n=this;e&&!n.dropZone&&o.e(862).then(o.bind(o,862)).then((e=>{n.dropZone=Neo.create({module:e.default,appName:n.appName,owner:n,...n.dropZoneConfig})}))}afterSetHasUnmountedVdomChanges(e,t){if(e||!e&&t){let t,o=r.Z.getParentIds(this),n=0,s=o.length;for(;n<s;n++)t=Neo.getComponent(o[n]),t&&(t._hasUnmountedVdomChanges=e)}}afterSetHeight(e,t){this.changeVdomRootKey("height",e)}afterSetHidden(e,t){(e||void 0!==t)&&this[e?"hide":"show"]()}afterSetHtml(e,t){this.changeVdomRootKey("html",e)}afterSetId(e,t){super.afterSetId(e,t),this.changeVdomRootKey("id",e),t&&r.Z.unregister(t),r.Z.register(this)}afterSetMaxHeight(e,t){this.changeVdomRootKey("maxHeight",e)}afterSetMaxWidth(e,t){this.changeVdomRootKey("maxWidth",e)}afterSetMinHeight(e,t){this.changeVdomRootKey("minHeight",e)}afterSetMinWidth(e,t){this.changeVdomRootKey("minWidth",e)}afterSetMounted(e,t){if(void 0!==t){let t=this;e&&(t.hasBeenMounted=!0,t.domListeners?.length>0&&setTimeout((()=>{i.Z.mountDomListeners(t)}),100),t.fire("mounted",t.id))}}afterSetTooltips(e,t){if(e){let t=this;Neo.ns("Neo.tooltip.Base")?t.createTooltips(e):o.e(213).then(o.bind(o,213)).then((o=>{t.createTooltips(e)}))}}afterSetVnode(e,t){void 0!==t&&this.syncVnodeTree()}afterSetWidth(e,t){this.changeVdomRootKey("width",e)}afterSetWrapperStyle(e,t){if(e||void 0!==t){let o=this,n=o.vdom;o.vdom.id?o.updateStyle(e,t,o.vdom.id):(n.style=e,o.vdom=n)}}beforeGetData(e){return this.getModel().getHierarchyData()}beforeGetWrapperStyle(e){return{...Object.assign(this.vdom.style||{},e)}}beforeSetController(e,t){return t?.destroy(),e?n.Z.beforeSetInstance(e,null,{component:this}):e}beforeSetDomListeners(e,t){return Neo.isObject(e)&&(e=[e]),e||[]}beforeSetHideMode(e,t){return this.beforeSetEnumValue(e,t,"hideMode")}beforeSetKeys(e,t){return t?.destroy(),e&&(e=n.Z.beforeSetInstance(e,l,{keys:e})),e}beforeSetModel(e,t){if(t?.destroy(),e){let t=this,o={component:t};return t.modelData&&(o.data=t.modelData),n.Z.beforeSetInstance(e,"Neo.model.Component",o)}return null}beforeSetPlugins(e,t){return Array.isArray(e)&&e.forEach(((t,o)=>{e[o]=n.Z.beforeSetInstance(t,null,{owner:this})})),e}changeVdomRootKey(e,t){let o=this,n=o.getVdomRoot(),r=o.vdom;t?n[e]=t:delete n[e],o.vdom=r}createTooltips(e){Array.isArray(e)||(e=[e]);let t,o=this,n=[];e.forEach((e=>{t=Neo.create("Neo.tooltip.Base",{appName:o.appName,componentId:o.id,...e}),n.push(t)})),o._tooltips=n}destroy(e=!1,t=!1){let o,n=this,s=n.parentId,i=Neo.getComponent(s),a=i?.getModel();n.domListeners=[],n.controller=null,n.reference&&n.getController()?.removeReference(n),n.model=null,n.bind&&a?.removeBindings(n.id),n.plugins?.forEach((e=>{e.destroy()})),e&&s&&("document.body"===s?Neo.applyDeltas(n.appName,{action:"removeNode",id:n.vdom.id}):(o=i.vdom,u.Z.removeVdomChild(o,n.vdom.id),i[t?"_vdom":"vdom"]=o)),r.Z.unregister(n),super.destroy()}down(e,t=!0){return r.Z.down(this,e,t)}focus(e=this.id){let t=this;Neo.main.DomAccess.focus({id:e||t.id}).catch((e=>{console.log("Error attempting to receive focus for component",e,t)}))}getApp(){return Neo.apps[this.appName]}getConfigInstanceByNtype(e,t){let o,n=this,r=n[e];return!r||t&&t!==r.ntype?n.parentId&&(o=Neo.getComponent(n.parentId)||Neo.get(n.parentId),o)?o.getConfigInstanceByNtype(e,t):null:r}getController(e){return this.getConfigInstanceByNtype("controller",e)}getDomRect(e=this.id,t=this.appName){return Neo.main.DomAccess.getBoundingClientRect({appName:t,id:e})}getModel(e){return Neo.currentWorker.isUsingViewModels?this.getConfigInstanceByNtype("model",e):null}getPlugin(e){e="string"!=typeof e?e:{id:e};let t,o=this;for(const n of o.plugins||[]){t=!0;for(const o in e)if(n[o]!==e[o]){t=!1;break}if(t)return n}return null}getTheme(){let e,t,o,n=this,r="neo-theme-";for(const e of n.cls||[])if(e.startsWith(r))return e;if(e=Neo.apps[n.appName],t=e?.mainView,t){o=u.Z.getParentNodes(t.vdom,n.id);for(const e of o||[])for(const t of e.cls||[])if(t.startsWith(r))return t}return Neo.config.themes?.[0]}getVdomChild(e,t){return u.Z.findVdomChild(t||this.vdom,e)?.vdom}getVdomRoot(){return this.vdom}getVnodeRoot(){return this.vnode}hide(e){let t=this;if("visibility"!==t.hideMode){let o=function(){let e=t.vdom;e.removeDom=!0,t.vdom=e};e?setTimeout(o,e):o()}else{let e=t.style;e.visibility="hidden",t.style=e}t._hidden=!0}init(){this.autoRender&&this.render()}initConfig(e,t){super.initConfig(e,t);let o=this;o.getController()?.parseConfig(o),o.getModel()?.parseConfig(o)}mergeConfig(...e){let t=this,o=super.mergeConfig(...e),n={...t._vdom||{},...o.vdom||{}};return t._vdom=Neo.clone(n,!0,!0),t.cls=o.cls,t[Neo.isEmpty(o.style)?"_style":"style"]=o.style,t.wrapperStyle=Neo.clone(o.wrapperStyle,!1),delete o.cls,delete o.style,delete o._vdom,delete o.vdom,delete o.wrapperStyle,o}async mount(){let e,t,o=this;if(!o.vnode)throw new Error("Component vnode must be generated before mounting, use Component.render()");o.hasUnmountedVdomChanges?(o.hasUnmountedVdomChanges=!1,t=r.Z.getChildIds(o.vnode),t.forEach((t=>{e=Neo.getComponent(t),e&&(e._hasUnmountedVdomChanges=!1)})),o.render(!0)):(await Neo.currentWorker.promiseMessage("main",{action:"mountDom",appName:o.appName,id:o.id,html:o.vnode.outerHTML,parentId:o.parentId,parentIndex:o.parentIndex}),await Neo.timeout(2e3),o.mounted=!0)}onConstructed(){super.onConstructed(),this.keys?.register(this)}onRender(e,t){let o=this,n=Neo.apps[o.appName];if(o.rendering=!1,n){n.rendered||(n.rendering=!1,n.rendered=!0,n.fire("render")),o.vnode=e;let s,i=r.Z.getChildIds(e),a=0,d=i.length;for(;a<d;a++)s=Neo.getComponent(i[a]),s&&(s.rendered=!0);o._rendered=!0,o.fire("rendered",o.id),t&&(o.mounted=!0,n.mounted||(n.mounted=!0,n.fire("mounted")))}}promiseVdomUpdate(e=this.vdom,t=this.vnode){let o=this;return o._vdom!==e?(m.Z.warn("vdom got replaced for: "+o.id+". Copying the content into the reference holder object"),Object.keys(o._vdom).forEach((e=>{delete o._vdom[e]})),Object.assign(o._vdom,e)):o._vdom=e,o.silentVdomUpdate?(o._vdom=e,Promise.resolve()):new Promise(((n,r)=>{o.mounted?o.updateVdom(e,t,n,r):(o.vdom=e,n())}))}removeCls(e){let t=this.cls;a.Z.remove(t,e),this.cls=t}removeDomListeners(e){Array.isArray(e)||(e=[e]);let t,o,n=this.domListeners;e.forEach((e=>{for(t=0,o=n.length;t<o;t++)if(Neo.isEqual(e,n[t])){n.splice(t,1);break}})),this.domListeners=n}removeStyle(e){"string"==typeof e&&(e=[e]);let t=this.style,o=!1;return Object.entries(t).forEach((n=>{e.indexOf(n)>-1&&(delete t[n],o=!0)})),o&&(this.style=t),t}render(e){let t=this,o=e||t.autoMount,n=Neo.apps[t.appName],r=Neo.config.useVdomWorker;t.rendering=!0,n.rendered||(n.rendering=!0),t.vdom&&(t.isVdomUpdating=!0,Neo.vdom.Helper.create({appName:t.appName,autoMount:o,parentId:o?t.parentId:void 0,parentIndex:o?t.parentIndex:void 0,...t.vdom}).then((e=>{t.onRender(e,!!r&&o),t.isVdomUpdating=!1,o&&!r&&t.mount()})))}set(e={},t=!1){let o=this,n=o.vdom;return o.silentVdomUpdate=!0,super.set(e),o.silentVdomUpdate=!1,t||!o.needsVdomUpdate?(o._vdom=n,Promise.resolve()):o.promiseVdomUpdate()}setSilent(e={}){return this.set(e,!0)}show(){let e=this;if("visibility"!==e.hideMode){let t=e.vdom;t.removeDom=!1,e.vdom=t}else{let t=e.style;t.visibility="visible",e.style=t}e._hidden=!1}syncVdomIds(e=this.vnode,t=this.vdom){u.Z.syncVdomIds(e,t)}syncVnodeTree(e=this.vnode){let t,o=this;o.syncVdomIds(),r.Z.getChildren(o).forEach((e=>{t=h.Z.findChildVnode(o.vnode,e.vdom.id),t?(e._vnode=t.vnode,e.rendered||(e._rendered=!0,e.fire("rendered",e.id)),e.mounted=!0):console.warn("syncVnodeTree: Could not replace the child vnode for",e.id)})),r.Z.getParents(o).forEach(((e,t)=>{o.vnode?0===t&&o.vnode.outerHTML?e.vnode.childNodes.splice(o.parentIndex||0,0,o.vnode):h.Z.replaceChildVnode(e.vnode,o.vnode.id,o.vnode):0===t&&h.Z.removeChildVnode(e.vnode,o.id)}))}toggleCls(e){let t=this.cls;a.Z.toggle(t,e),this.cls=t}unmount(){let e=this;e.mounted=!1,Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:e.appName,deltas:[{action:"removeNode",id:e.vdom.id}]}).catch((t=>{console.log("Error attempting to unmount component",t,e)}))}up(e){return r.Z.up(this.id,e)}updateCls(e,t){let o,n=this,r=n.vnode;Neo.isEqual(e,t)||(r&&(r.className=e,n.vnode=r),o={action:"updateDom",deltas:[{id:n.id,cls:{add:Neo.util.Array.difference(e,t),remove:Neo.util.Array.difference(t,e)}}]},Neo.currentWorker.isSharedWorker&&(o.appName=n.appName),Neo.currentWorker.promiseMessage("main",o).then((()=>{})).catch((e=>{console.log("Error attempting to update Component cls",e,n)})))}updateStyle(e,t,o=this.id){let n,r,s=this,i=p.Z.compareStyles(e,t),a=u.Z.findVdomChild(s.vdom,o),d=s.vnode&&h.Z.findChildVnode(s.vnode,o);i&&(s.hasUnmountedVdomChanges||(s.hasUnmountedVdomChanges=!s.mounted&&s.hasBeenMounted),a.vdom.style=e,s.silentVdomUpdate?s.needsVdomUpdate=!0:s.mounted&&(r=d.vnode.style,Object.entries(i).forEach((([e,t])=>{null===t?delete d.vnode.style[e]:r[e]=t})),n={action:"updateDom",deltas:[{id:o,style:i}]},Neo.currentWorker.isSharedWorker&&(n.appName=s.appName),Neo.currentWorker.sendMessage("main",n)))}updateVdom(e,t,o,n){let r,s,i=this;i.isVdomUpdating?i.needsVdomUpdate=!0:(i.isVdomUpdating=!0,s={vdom:e,vnode:t},Neo.currentWorker.isSharedWorker&&(s.appName=i.appName),Neo.vdom.Helper.update(s).then((e=>{i.vnode=e.vnode,i.isVdomUpdating=!1,r=e.deltas,!Neo.config.useVdomWorker&&r.length>0?Neo.applyDeltas(i.appName,r).then((()=>{o?.(),i.needsVdomUpdate&&(i.needsVdomUpdate=!1,i.vdom=i.vdom)})):(o?.(),i.needsVdomUpdate&&(i.needsVdomUpdate=!1,i.vdom=i.vdom))})).catch((e=>{console.log("Error attempting to update component dom",e,i),i.isVdomUpdating=!1,n?.()})))}}Neo.applyClassConfig(g);const y=g},981:(e,t,o)=>{o.d(t,{Z:()=>p});var n=o(683),r=o(74);class s extends r.Z{static getConfig(){return{className:"Neo.layout.Base",ntype:"layout-base",appName_:null,containerId:null,isLayout:!0}}afterSetAppName(e,t){e&&Neo.currentWorker.insertThemeFiles(e,this.__proto__)}applyChildAttributes(e){}applyRenderAttributes(){}removeChildAttributes(e){}removeRenderAttributes(){}}Neo.applyClassConfig(s);const i=s;var a=o(565);Neo.applyClassConfig(class extends i{static getStaticConfig(){return{activeItemCls:"active-item",inactiveItemCls:"inactive-item",itemCls:"neo-layout-card-item"}}static getConfig(){return{className:"Neo.layout.Card",ntype:"layout-card",activeIndex_:0,removeInactiveCards:!0}}async afterSetActiveIndex(e,t){let o,n,r,s,i,d,l,m,p,c=this,u=c.containerId,h=Neo.getComponent(u)||Neo.get(u),g=c.getStaticConfig(),y=!1,f=c.removeInactiveCards;if(Neo.isNumber(e)&&h){for(i=h.items,p=h.vdom,d=i.length,i[e]||Neo.error("Trying to activate a non existing card",e,i),n=0;n<d;n++)if(l=i[n].module,n===e&&!l?.isClass&&Neo.isFunction(l)){y=!0;break}for(n=0;n<d;n++)r=n===e,s=i[n],l=s.module,r&&!l?.isClass&&Neo.isFunction(l)&&(l=await l(),l=l.default,m=l.prototype,o=s.cls||m.constructor.config.cls||[],s.className=m.className,s.cls=[...o,g.itemCls],s.module=l,delete s.vdom,i[n]=s=Neo.create(s),h.fire("cardLoaded",{item:s}),p.cn[n]=s.vdom),s instanceof Neo.core.Base&&(o=s.cls,a.Z.remove(o,r?g.inactiveItemCls:g.activeItemCls),a.Z.add(o,r?g.activeItemCls:g.inactiveItemCls),f||y?(s._cls=o,s.getVdomRoot().cls=o,r?(delete s.vdom.removeDom,s.activate?.()):f&&(s.mounted=!1,s.vdom.removeDom=!0)):s.cls=o);(f||y)&&(h.vdom=p)}}applyChildAttributes(e,t,o=!1){let n=this,r=n.activeIndex===t,s=n.getStaticConfig(),i=e.cls,d=e.vdom;a.Z.add(i,s.itemCls),a.Z.add(i,r?s.activeItemCls:s.inactiveItemCls),!o&&n.removeInactiveCards?(e._cls=i,d.removeDom=!r,e.vdom=d):e.cls=i}applyRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e?.cls||[];e||Neo.logError("layout.Card: applyRenderAttributes -> container not yet created",this.containerId),a.Z.add(t,"neo-layout-card"),e.cls=t}removeRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e?.cls||[];e||Neo.logError("layout.Card: removeRenderAttributes -> container not yet created",this.containerId),a.Z.remove(t,"neo-layout-card"),e.cls=t}});Neo.applyClassConfig(class extends i{static getConfig(){return{className:"Neo.layout.Fit",ntype:"layout-fit"}}applyChildAttributes(e,t){e.ignoreLayout||(e.cls=a.Z.union(e.cls,"neo-layout-fit-item"))}applyRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e?.cls||[];e||Neo.logError("layout.Fit: applyRenderAttributes -> container not yet created",this.containerId),a.Z.add(t,"neo-layout-fit"),e.cls=t}removeRenderAttributes(){let e=Neo.getComponent(this.containerId),t=e?.cls||[];e||Neo.logError("layout.Fit: removeRenderAttributes -> container not yet created",this.containerId),a.Z.remove(t,"neo-layout-fit"),e.cls=t}});class d extends i{static getStaticConfig(){return{alignValues:["center","end","start","stretch",null],directionValues:["column","column-reverse","row","row-reverse",null],packValues:["center","end","start",null],wrapValues:["nowrap","wrap","wrap-reverse"]}}static getConfig(){return{className:"Neo.layout.Flexbox",ntype:"layout-flexbox",align_:null,direction_:null,pack_:null,prefix:"neo-flex-",wrap_:"nowrap"}}afterSetAlign(e,t){this.updateInputValue(e,t,"align")}afterSetDirection(e,t){this.updateInputValue(e,t,"direction")}afterSetPack(e,t){this.updateInputValue(e,t,"pack")}afterSetWrap(e,t){this.updateInputValue(e,t,"wrap")}applyChildAttributes(e){let t=e.wrapperStyle;t.flex=t.flex||e.flex||("stretch"===this.align?1:"0 1 auto"),e.wrapperStyle=t}applyRenderAttributes(){let e=this,t=Neo.getComponent(e.containerId),o=e.prefix,n=t?.cls||[];t||Neo.logError("layout.Flexbox: applyRenderAttributes -> container not yet created",e.containerId),a.Z.add(n,o+"container"),e.align&&a.Z.add(n,o+"align-"+e.align),e.direction&&a.Z.add(n,o+"direction-"+e.direction),e.pack&&a.Z.add(n,o+"pack-"+e.pack),e.wrap&&a.Z.add(n,o+"wrap-"+e.wrap),t.cls=n}beforeSetAlign(e,t){return this.testInputValue(e,t,"alignValues","align")}beforeSetDirection(e,t){return this.testInputValue(e,t,"directionValues","direction")}beforeSetPack(e,t){return this.testInputValue(e,t,"packValues","pack")}beforeSetWrap(e,t){return this.testInputValue(e,t,"wrapValues","wrap")}removeChildAttributes(e){let t=e.wrapperStyle||{};t.flex=e.flex||null,e.wrapperStyle=t}removeRenderAttributes(){let e=this,t=Neo.getComponent(e.containerId),o=e.prefix,n=t?.cls||[];t||Neo.logError("layout.Flexbox: removeRenderAttributes -> container not yet created",e.containerId),a.Z.remove(n,o+"container"),e.align&&a.Z.remove(n,o+"align-"+e.align),e.direction&&a.Z.remove(n,o+"direction-"+e.direction),e.pack&&a.Z.remove(n,o+"pack-"+e.pack),e.wrap&&a.Z.remove(n,o+"wrap-"+e.wrap),t.cls=n}testInputValue(e,t,o,n){const r=this.getStaticConfig(o);return a.Z.hasItem(r,e)?e:(Neo.logError(this.containerId,'-> layout: supported values for "'+n+'" are',r),t)}updateInputValue(e,t,o){let n=Neo.getComponent(this.containerId),r=this.prefix,s=n?.cls;n?.rendered&&(a.Z.remove(s,r+o+"-"+t),null!==e&&a.Z.add(s,r+o+"-"+e),n.cls=s)}}Neo.applyClassConfig(d);const l=d;Neo.applyClassConfig(class extends l{static getConfig(){return{className:"Neo.layout.HBox",ntype:"layout-hbox",direction:"row"}}applyChildAttributes(e){!e.width&&super.applyChildAttributes(e)}});Neo.applyClassConfig(class extends l{static getConfig(){return{className:"Neo.layout.VBox",ntype:"layout-vbox",direction:"column"}}applyChildAttributes(e){!e.height&&super.applyChildAttributes(e)}}),o(936);class m extends n.Z{static getConfig(){return{className:"Neo.container.Base",ntype:"container",cls:["neo-container"],itemDefaults_:null,items_:[],layout_:{ntype:"vbox",align:"stretch"},_vdom:{cn:[]}}}add(e){let t=this;return t.insert(t.items?t.items.length:0,e)}afterSetAppName(e,t){let o=this;super.afterSetAppName(e,t),e&&o.items&&o.items.forEach((t=>{Neo.isObject(t)&&(t.appName=e)})),e&&o.layout&&(o.layout.appName=e)}afterSetLayout(e,t){this.rendered&&(t.removeRenderAttributes(),e.applyRenderAttributes(),this.items.forEach(((o,n)=>{t.removeChildAttributes(o,n),e.applyChildAttributes(o,n)})))}afterSetMounted(e,t){if(super.afterSetMounted(e,t),void 0!==t){let t=this.items,o=0,n=t.length;for(;o<n;o++)t[o].vdom.removeDom||(t[o].mounted=e)}}afterSetRendering(e,t){if(void 0!==t){let t=this.items,o=0,n=t.length;for(;o<n;o++)t[o].vdom.removeDom||(t[o].rendering=e)}}beforeSetLayout(e){return this.createLayout(e)}createItem(e,t){let o,r,s=this,i={appName:s.appName,parentId:s.id,parentIndex:t},a=s.itemDefaults;switch(Neo.typeOf(e)){case"NeoClass":e=Neo.create({...a,module:e,...i});break;case"NeoInstance":e.set(i);break;case"Object":a&&Neo.assignDefaults(e,a),r=e.module,o=r&&!r.isClass&&Neo.isFunction(r),r&&!o&&(e.className=r.prototype.className),"this"===e.handlerScope&&(e.handlerScope=s,"String"===Neo.typeOf(e.handler)&&"Function"===Neo.typeOf(s[e.handler])&&(e.handler=s[e.handler])),Object.assign(e,i),o?e.vdom=Object.assign(e.vdom||{},{removeDom:!0}):e=Neo[e.className?"create":"ntype"](e);break;case"String":e=Neo.create({module:n.Z,vdom:{innerHTML:e},...i})}return e}createItems(){let e=this,t=e._items,o=e.getVdomItemsRoot(),n=e.layout,r=e.vdom;o.cn=[],t.forEach(((r,s)=>{t[s]=r=e.createItem(r,s),r instanceof Neo.core.Base&&n.applyChildAttributes(r,s),o.cn.push(r.vdom)})),e.vdom=r}createLayout(e){let t=this;return e&&(e instanceof i&&e.isLayout?(e.appName=t.appName,e.containerId=t.id):((e=t.parseLayoutClass(e)).appName=t.appName,e.containerId=t.id,e=Neo.ntype(e))),e}destroy(e=!1,t=!1){this.items.forEach((e=>{e.destroy?.(!1,!0)})),super.destroy(e,t)}getVdomItemsRoot(){return this.getVdomRoot()}indexOf(e){let t=this,o=0,n=t.items?.length||0;for(Neo.isString(e)||(e=e.id);o<n;o++)if(t.items[o].id===e)return o;return-1}insert(e,t,o=!1){let n,r,s,i=this,a=i.items,d=i.vdom;if("Array"===Neo.typeOf(t)){for(n=0,r=t.length,s=[];n<r;n++)s.unshift(i.insert(e,t[r-1-n],!0));t=s}else t=i.createItem(t,e),i.layout.applyChildAttributes(t,e,!0),a.splice(e,0,t),i.items=a,i.getVdomItemsRoot().cn.splice(e,0,t.vdom);return o?i._vdom=d:i.promiseVdomUpdate().then((()=>{i.fire("insert",{index:e,item:t})})),t}mergeConfig(...e){let t=super.mergeConfig(...e);return t.itemDefaults&&(this._itemDefaults=Neo.clone(t.itemDefaults,!0,!0),delete t.itemDefaults),t.items&&(this._items=Neo.clone(t.items,!0,!0),delete t.items),t}moveTo(e,t){let o=this.items[e];return e!==t&&this.switchItems(t,e),o}onConstructed(){let e=this;e._layout=e.createLayout(e.layout),e._layout.applyRenderAttributes(),super.onConstructed(),e.parseItemConfigs(e.items),e.createItems()}parseLayoutClass(e){return Neo.isObject(e)?e.ntype.indexOf("layout-")<0&&(e.ntype="layout-"+e.ntype):e=e.indexOf("layout-")<0?{ntype:"layout-"+e}:{ntype:e},e}remove(e,t=!0,o=!1){let n=[...this.items],r=0,s=n.length;for(;r<s;r++)n[r].id===e.id&&this.removeAt(r,t,o)}removeAt(e,t=!0,o=!1){let n,r=this,s=r.items,i=r.vdom;e>=s.length?Neo.warn("Container.removeAt: index >= items.length. "+r.id):(n=s[e],s.splice(e,1),r.getVdomItemsRoot().cn.splice(e,1),r[o&&!t?"_vdom":"vdom"]=i,t?n.destroy(!0):n.mounted=!1)}removeLast(e=!0,t=!1){this.removeAt(this.items.length-1,e,t)}switchItems(e,t){let o=this,n=Neo.isNumber(e)?e:o.indexOf(e),r=Neo.isNumber(t)?t:o.indexOf(t),s=o.vdom;a.Z.move(o.items,r,n),a.Z.move(o.getVdomItemsRoot().cn,r,n),o.vdom=s}}Neo.applyClassConfig(m);const p=m},668:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(981);class r extends n.Z{static getConfig(){return{className:"Neo.container.Viewport",ntype:"viewport",applyBodyCls:!0,cls:["neo-viewport"]}}onConstructed(){super.onConstructed(),this.applyBodyCls&&Neo.main.DomAccess.applyBodyCls({appName:this.appName,cls:["neo-body-viewport"]})}}Neo.applyClassConfig(r);const s=r},993:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(74);class r extends n.Z{static getConfig(){return{className:"Neo.util.Style"}}static compareStyles(e,t){let o={};return Neo.isString(e)&&(e=Neo.core.Util.createStyleObject(e)),Neo.isString(t)&&(t=Neo.core.Util.createStyleObject(t)),e||t?t?e?(Object.keys(e).forEach((function(n){t.hasOwnProperty(n)&&t[n]===e[n]||(o[n]=e[n])})),Object.keys(t).forEach((function(t){e.hasOwnProperty(t)||(o[t]=null)})),Object.keys(o).length>0?o:null):void Object.keys(t).forEach((function(e){o[e]=null})):Neo.clone(e):null}}Neo.applyClassConfig(r);const s=r}}]);