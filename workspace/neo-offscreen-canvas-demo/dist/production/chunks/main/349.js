"use strict";(self.webpackChunkneo_offscreen_canvas_demo=self.webpackChunkneo_offscreen_canvas_demo||[]).push([[349],{349:(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var n=t(74);class o extends n.Z{static getConfig(){return{className:"Neo.main.addon.Stylesheet",remote:{app:["addThemeFiles","createStyleSheet","insertCssRules","swapStyleSheet"]},singleton:!0}}constructor(e){super(e),Neo.config.useFontAwesome&&this.createStyleSheet(null,null,Neo.config.basePath+"node_modules/@fortawesome/fontawesome-free/css/all.min.css"),Neo.config.themes.length>0&&""!==Neo.config.themes[0]&&this.addGlobalCss()}addGlobalCss(){let e=Neo.config,s=e.themes,t=e.useCssVars?["src",...s]:[s[0]],n=e.environment,o=n.startsWith("dist/")?n:"dist/"+n;document.body.classList.add(s[0]),t.forEach((s=>{s.startsWith("neo-")&&(s=s.substring(4)),this.createStyleSheet(null,null,`${e.basePath}${o}/css${e.useCssVars?"":"-no-vars"}/${s}/Global.css`)}))}addThemeFiles(e){let s=e.className,t=Neo.config,n=t.environment,o=n.startsWith("dist/")?n:"dist/"+n;s.startsWith("Neo.")&&(s=s.substring(4)),s=s.split(".").join("/"),e.folders.forEach((e=>{("src"===e&&t.useCssVars||e.includes("theme-")&&(t.useCssVars&&t.themes.includes(`neo-${e}`)||!t.useCssVars&&t.themes[0]===`neo-${e}`))&&this.createStyleSheet(null,null,`${t.basePath}${o}/css${t.useCssVars?"":"-no-vars"}/${e}/${s}.css`)}))}createStyleSheet(e,s,t){if(!e&&!t)throw new Error("createStyleSheet: you need to either pass a name or a href");const n=document.createElement("link"),o=Neo.config.environment,l=o.startsWith("dist/")?o:"dist/"+o,a=t||Neo.config.basePath+l+"/"+e;Object.assign(n,{href:a,rel:"stylesheet",type:"text/css"}),s&&(n.id=s),document.head.appendChild(n)}hasStyleSheet(e){let s,t=0,n=document.styleSheets.length;for(;t<n;t++)if(s=document.styleSheets[t],s.href?.includes(e))return!0;return!1}insertCssRules(e){let s,t=document.getElementById("neoDynamicStyleSheet"),n=0,o=e.rules.length;for(t||(t=document.createElement("style"),t.id="neoDynamicStyleSheet",document.head.appendChild(t)),s=t.sheet;n<o;n++)s.insertRule(e.rules[n],s.cssRules.length)}removeStyleSheets(e){let s,t,n=0,o=document.styleSheets.length,l=e.included||[],a=e.included||[];for(;n<o;n++)s=document.styleSheets[n],t=!0,s.href&&(a.forEach((e=>{s.href.includes(e)&&(t=!1)})),t&&(l.forEach((e=>{s.href.includes(e)||(t=!1)})),t&&s.ownerNode.parentNode.removeChild(s.ownerNode)))}swapStyleSheet(e){document.getElementById(e.id).setAttribute("href",e.href)}}Neo.applyClassConfig(o);let l=Neo.create(o);Neo.applyToGlobalNs(l);const a=l}}]);