"use strict";(self.webpackChunkneo_webcomponents_demo=self.webpackChunkneo_webcomponents_demo||[]).push([[223],{223:(e,o,a)=>{a.r(o),a.d(o,{default:()=>c});var t=a(74);class l extends t.Z{static getConfig(){return{className:"Neo.main.addon.LocalStorage",remote:{app:["createLocalStorageItem","destroyLocalStorageItem","readLocalStorageItem","updateLocalStorageItem"]},singleton:!0}}createLocalStorageItem(e){this.updateLocalStorageItem(e)}destroyLocalStorageItem(e){window.localStorage.removeItem(e.key)}readLocalStorageItem(e){return{key:e.key,value:window.localStorage.getItem(e.key)}}updateLocalStorageItem(e){window.localStorage.setItem(e.key,e.value)}}Neo.applyClassConfig(l);let r=Neo.create(l);Neo.applyToGlobalNs(r);const c=r}}]);