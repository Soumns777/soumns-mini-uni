(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/SoumnsNavbar"],{197:function(n,e,t){"use strict";t.r(e);var o=t(198),r=t(200);for(var u in r)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t(202);var i,c=t(31),a=Object(c["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"504fbaf8",null,!1,o["components"],i);a.options.__file="components/SoumnsNavbar.vue",e["default"]=a.exports},198:function(n,e,t){"use strict";t.r(e);var o=t(199);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},199:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return o}));try{o={uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,181))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement;n._self._c},u=!1,i=[];r._withStripped=!0},200:function(n,e,t){"use strict";t.r(e);var o=t(201),r=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=r.a},201:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"soumnsNavbar",props:{imgSrc:{type:String,required:!0},imgHeight:{type:String,required:!0},isShowBack:{type:Boolean,required:!0,default:!0},size:{type:String,required:!0,default:"24"}},data:function(){return{menuInfo:{statusBarHeight:"",menuTop:"",menuRight:"",menuWidth:"",menuHeight:""}}},mounted:function(){this.initNavBar()},methods:{initNavBar:function(){Object.keys(n.getStorageSync("menuInfo")).length&&n.getStorageSync("menuInfo")?this.menuInfo=n.getStorageSync("menuInfo"):n.getSystemInfo({success:function(e){var t=e.statusBarHeight+"px",o=n.getMenuButtonBoundingClientRect(),r=o.width+"px",u=o.height+"px",i=o.height/2+"px",c=e.screenWidth-o.right+10+"px",a=o.top+"px",s=e.statusBarHeight+44+"px",f={statusBarHeight:t,menuWidth:r,menuHeight:u,menuBorderRadius:i,menuRight:c,menuTop:a,contentTop:s};console.log(f,"💙💛 menuInfo"),n.setStorageSync("menuInfo",f)},fail:function(n){console.log(n)}}),console.log("💛💙 menuInfo:",this.menuInfo)}}};e.default=t}).call(this,t(1)["default"])},202:function(n,e,t){"use strict";t.r(e);var o=t(203),r=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=r.a},203:function(n,e,t){}}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/SoumnsNavbar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/SoumnsNavbar-create-component',
    {
        'components/SoumnsNavbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(197))
        })
    },
    [['components/SoumnsNavbar-create-component']]
]);