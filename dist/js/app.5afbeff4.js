(function(t){function e(e){for(var s,n,l=e[0],c=e[1],o=e[2],p=0,d=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1425:function(t,e,a){t.exports=a.p+"img/p4.ebbb38fa.jpg"},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.88b1619c.svg"},4671:function(t,e,a){t.exports=a.p+"img/logo_dark.39b98ec8.svg"},"4b74":function(t,e,a){t.exports=a.p+"img/p3.cb978f42.jpg"},5404:function(t,e,a){t.exports=a.p+"img/map-point.6a9e11fe.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"page__header-and-content"},[a("header-area"),a("content-area")],1),a("footer-area")],1)},i=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"wrapper wrapper_header"},[s("div",{staticClass:"header__side"},[s("img",{staticClass:"logo logo_header",attrs:{src:a("1ae4"),alt:""}}),s("div",{staticClass:"menu"},[s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("Каталог")]),s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("Доставка")]),s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("Оплата")]),s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("Контакты")]),s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("О галерее")])])]),s("div",{staticClass:"header__side"},[s("div",{staticClass:"header__search"},[s("form",{staticClass:"search-group"},[s("input",{attrs:{type:"text",placeholder:"Поиск по названию картины"}}),s("a",{staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("Найти")])])])])])])}],c={name:"headerArea"},o=c,u=a("2877"),p=Object(u["a"])(o,n,l,!1,null,null,null),d=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"h1 content__title"},[t._v("Картины эпохи Возрождения")]),a("div",{staticClass:"product-list"},[t._l(t.products,(function(t,e){return a("products-list-item",{key:t.name,attrs:{value:{item:t,index:e}}})})),a("div",{staticClass:"product-list__item product-list__item_empty"}),a("div",{staticClass:"product-list__item product-list__item_empty"}),a("div",{staticClass:"product-list__item product-list__item_empty"})],2)])])},_=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"product-list__item product":!0,product_sold:t.isSold}},[a("div",{staticClass:"product__image"},[a("img",{attrs:{src:t.img,alt:""}})]),a("div",{staticClass:"product__content"},[a("div",{staticClass:"product__title"},[t._v(" "+t._s(t.title)+" ")]),a("div",{staticClass:"product__bottom"},[a("div",{staticClass:"product__price"},[t.oldPrice?a("span",{staticClass:"price price_old"},[t._v(t._s(t.oldPrice)+" $")]):t._e(),a("span",{staticClass:"price"},[t._v(t._s(t.currentPrice)+" $")])]),t.loading?a("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.toggleCart()}}},[a("loader")],1):a("a",{class:{btn:!0,"active btn_in-cart":t.inCart},attrs:{href:"javascript:;"},on:{click:function(e){return t.toggleCart()}}},[t._v(t._s(t.inCart?"В корзине":"Купить"))])])])])},m=[],h=(a("b0c0"),a("fc8e")),g=a.n(h),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader"},[t._v(" Загрузка ")])},b=[],j={name:"loader"},x=j,k=(a("f1d8"),Object(u["a"])(x,C,b,!1,null,null,null)),y=k.exports,w={name:"productsListItem",components:{Loader:y},props:["value"],data:function(){return{storageState:null,index:null,title:null,status:null,inCart:!1,oldPrice:!1,currentPrice:null,img:null,isSold:!1,loading:!1}},created:function(){this.storageState=localStorage.getItem(this.index),this.index=this.value.index,this.title=this.value.item.name,this.status=this.value.item.status,this.oldPrice=this.value.item.price.old,this.currentPrice=this.value.item.price.current,this.img=this.value.item.img,"sold"===this.status&&(this.isSold=!0),"null"===localStorage.getItem(this.index)?(localStorage.setItem(this.index,this.inCart),this.inCart=this.value.item.inCart):"false"===localStorage.getItem(this.index)?this.inCart=!1:this.inCart=!0},methods:{toggleCart:function(){var t=this;this.loading=!0,g.a.get("https://jsonplaceholder.typicode.com/posts/1").then((function(e){console.log(e),t.loading=!1,!1===t.inCart?t.inCart=!0:t.inCart=!1,localStorage.setItem(t.index,t.inCart)}))}}},O=w,S=Object(u["a"])(O,v,m,!1,null,null,null),P=S.exports,$=a("f030"),E=a.n($),A=a("e0a1"),I=a.n(A),M=a("4b74"),L=a.n(M),T=a("1425"),F=a.n(T),J={name:"contentArea",components:{ProductsListItem:P},data:function(){return{products:[{name:"«Рождение Венеры» Сандро Боттичелли",status:"sale",inCart:!1,img:E.a,price:{current:"1 000 000",old:"2 000 000"}},{name:"«Тайная вечеря» Леонардо да Винчи",status:"sale",inCart:!1,img:I.a,price:{current:"3 000 000"}},{name:"«Сотворение Адама» Микеланджело",status:"sale",inCart:!0,img:L.a,price:{current:"5 000 000",old:"6 000 000"}},{name:"«Урок анатомии» Рембрандт",status:"sold",inCart:!1,img:F.a,price:{current:"3 000 000"}}]}}},X=J,Z=Object(u["a"])(X,f,_,!1,null,null,null),z=Z.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"wrapper wrapper_footer"},[s("div",{staticClass:"footer__side"},[s("img",{staticClass:"logo logo_footer",attrs:{src:a("4671"),alt:""}}),s("div",{staticClass:"menu"},[s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("Каталог")]),s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("Доставка")]),s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("Оплата")]),s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("Контакты")]),s("a",{staticClass:"link",attrs:{href:"javascript:;"}},[t._v("О галерее")])])]),s("div",{staticClass:"footer__side"},[s("div",{staticClass:"footer__contact"},[s("a",{staticClass:"link link_icon",attrs:{href:"tel:+74955555555"}},[s("img",{attrs:{src:a("5404"),alt:""}}),t._v("+7 (495) 555-55-55")]),s("a",{staticClass:"link link_icon",attrs:{href:"https://yandex.ru/maps/213/moscow/house/ulitsa_raspletina_24/Z04Ycg9kSkcCQFtvfXt4dXljZg==/?ll=37.484325%2C55.794502&utm_source=main_stripe_big&z=17.15",target:"_blank",rel:"nofollow"}},[s("img",{attrs:{src:a("7a08"),alt:""}}),t._v("г. Москва, ул. Расплетина, 24")])])])])])}],Y={name:"footerArea"},q=Y,B=Object(u["a"])(q,H,Q,!1,null,null,null),D=B.exports,G={name:"App",components:{FooterArea:D,ContentArea:z,HeaderArea:d}},K=G,N=(a("5c0b"),Object(u["a"])(K,r,i,!1,null,null,null)),R=N.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(R)}}).$mount("#app")},5910:function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"7a08":function(t,e,a){t.exports=a.p+"img/phone.5f721347.svg"},"9c0c":function(t,e,a){},e0a1:function(t,e,a){t.exports=a.p+"img/p2.8a7be9d6.jpg"},f030:function(t,e,a){t.exports=a.p+"img/p1.c550c078.jpg"},f1d8:function(t,e,a){"use strict";var s=a("5910"),r=a.n(s);r.a}});
//# sourceMappingURL=app.5afbeff4.js.map