!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(n){return n&&n.__esModule?n.default:n}var e=function(n){return n.map((function(n){var t=Object.values(n.languages).join(", ");return console.log(t),'\n    <div class="country_card">\n    <h2 class="country-name"><img src="'.concat(n.flags.svg,'" alt="flag of ').concat(n.name.official,'" class="gallery-img" width=\'40px\'>').concat(n.name.common,'</h2>\n    <ul class="country-info list">\n    <li class="country-info item"><p class="capital">Capital: ').concat(n.capital,'</p></li>\n    <li class="country-info item"><p class="population">Population: ').concat(n.population,'</p></li>\n    <li class="country-info item"><p class="languages">Languages: ').concat(t,"</p></li>\n    </ul></div>")})).join("")},o={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,p=f||s||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return p.Date.now()};function y(n){var e=void 0===n?"undefined":t(i)(n);return!!n&&("object"==e||"function"==e)}function h(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(i)(n))||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==m.call(n)}(n))return NaN;if(y(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=y(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(c,"");var o=r.test(n);return o||u.test(n)?l(n.slice(2),o?2:8):a.test(n)?NaN:+n}o=function(n,t,e){var o,i,c,a,r,u,l=0,f=!1,s=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function m(t){var e=o,c=i;return o=i=void 0,l=t,a=n.apply(c,e)}function b(n){return l=n,r=setTimeout(T,t),f?m(n):a}function j(n){var e=n-u;return void 0===u||e>=t||e<0||s&&n-l>=c}function T(){var n=v();if(j(n))return w(n);r=setTimeout(T,function(n){var e=t-(n-u);return s?g(e,c-(n-l)):e}(n))}function w(n){return r=void 0,p&&o?m(n):(o=i=void 0,a)}function O(){var n=v(),e=j(n);if(o=arguments,i=this,u=n,e){if(void 0===r)return b(u);if(s)return r=setTimeout(T,t),m(u)}return void 0===r&&(r=setTimeout(T,t)),a}return t=h(t)||0,y(e)&&(f=!!e.leading,c=(s="maxWait"in e)?d(h(e.maxWait)||0,t):c,p="trailing"in e?!!e.trailing:p),O.cancel=function(){void 0!==r&&clearTimeout(r),l=0,o=u=i=r=void 0},O.flush=function(){return void 0===r?a:w(v())},O};var b=document.querySelector("#search-box"),j=document.querySelector(".country-list"),T=document.querySelector(".country-info");b.addEventListener("input",o((function(n){console.log(n),n.preventDefault();var t,o=b.value.trim();console.log(o),(t=o,fetch("".concat("https://restcountries.com","/v3.1/name/").concat(t,"?fields=name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){console.log(n),n.length>10&&alert("Too many matches found. Please enter a more specific name."),n.length>1&&n.length<11&&(j.innerHTML=n.map((function(n){return'   \n        <li class="country-list-item">\n        <img src="'.concat(n.flags.svg,'" alt="flag of ').concat(n.name.official,'" class="gallery-img" width=\'40px\'>\n        ').concat(n.name.common,"\n        </li>\n  ")})).join(""),T.innerHTML=""),1===n.length&&(T.innerHTML=e(n),j.innerHTML="")})).catch((function(n){"404"===n.message&&console.log("Oops")}))}),300))}();
//# sourceMappingURL=index.3baf0cfc.js.map