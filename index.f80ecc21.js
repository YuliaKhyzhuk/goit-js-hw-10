var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=n=>n.map((n=>{let t=Object.values(n.languages).join(", ");return console.log(t),`\n    <div class="country_card">\n    <h2 class="country-name"><img src="${n.flags.svg}" alt="flag of ${n.name.official}" class="gallery-img" width='40px'>${n.name.common}</h2>\n    <ul class="country-info list">\n    <li class="country-info item"><p class="capital">Capital: ${n.capital}</p></li>\n    <li class="country-info item"><p class="population">Population: ${n.population}</p></li>\n    <li class="country-info item"><p class="languages">Languages: ${t}</p></li>\n    </ul></div>`})).join("");var e={},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=c||u||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,g=function(){return s.Date.now()};function d(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function y(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==f.call(n)}(n))return NaN;if(d(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=d(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=a.test(n);return e||r.test(n)?l(n.slice(2),e?2:8):i.test(n)?NaN:+n}e=function(n,t,e){var o,i,a,r,l,c,u=0,s=!1,f=!1,v=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(t){var e=o,a=i;return o=i=void 0,u=t,r=n.apply(a,e)}function b(n){return u=n,l=setTimeout($,t),s?h(n):r}function j(n){var e=n-c;return void 0===c||e>=t||e<0||f&&n-u>=a}function $(){var n=g();if(j(n))return T(n);l=setTimeout($,function(n){var e=t-(n-c);return f?m(e,a-(n-u)):e}(n))}function T(n){return l=void 0,v&&o?h(n):(o=i=void 0,r)}function w(){var n=g(),e=j(n);if(o=arguments,i=this,c=n,e){if(void 0===l)return b(c);if(f)return l=setTimeout($,t),h(c)}return void 0===l&&(l=setTimeout($,t)),r}return t=y(t)||0,d(e)&&(s=!!e.leading,a=(f="maxWait"in e)?p(y(e.maxWait)||0,t):a,v="trailing"in e?!!e.trailing:v),w.cancel=function(){void 0!==l&&clearTimeout(l),u=0,o=c=i=l=void 0},w.flush=function(){return void 0===l?r:T(g())},w};const v=document.querySelector("#search-box"),h=document.querySelector(".country-list"),b=document.querySelector(".country-info");v.addEventListener("input",e((n=>{console.log(n),n.preventDefault();const e=v.value.trim();var o;console.log(e),(o=e,fetch(`https://restcountries.com/v3.1/name/${o}?fields=name,capital,population,flags,languages`).then((n=>{if(!n.ok)throw new Error(n.status);return n.json()}))).then((n=>{console.log(n),n.length>10&&alert("Too many matches found. Please enter a more specific name."),n.length>1&&n.length<11&&(h.innerHTML=n.map((n=>`   \n        <li class="country-list-item">\n        <img src="${n.flags.svg}" alt="flag of ${n.name.official}" class="gallery-img" width='40px'>\n        ${n.name.common}\n        </li>\n  `)).join(""),b.innerHTML=""),1===n.length&&(b.innerHTML=t(n),h.innerHTML="")})).catch((n=>{"404"===n.message&&console.log("Oops")}))}),300));
//# sourceMappingURL=index.f80ecc21.js.map
