"use strict";(self.webpackChunkmainapp=self.webpackChunkmainapp||[]).push([[519],{519:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(74);class n extends s.Z{static getConfig(){return{className:"Neo.main.addon.WebComponent",singleton:!0}}construct(e){super.construct(e),this.registerElementLoader()}registerElementLoader(){customElements.define("element-loader",class extends HTMLElement{async connectedCallback(){let e,t=this,a=await(await fetch(t.getAttribute("src"))).text();t.attachShadow({mode:"open"}).innerHTML=a,e=t.querySelector("style"),e&&t.shadowRoot.append(e)}})}}Neo.applyClassConfig(n);let o=Neo.create(n);Neo.applyToGlobalNs(o);const l=o}}]);