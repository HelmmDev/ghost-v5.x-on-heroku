/* Minor scripts
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Website : fueko.net
   Author  : fueko
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
   !function() {
    function e(e) {
        e.matches && t && (t.checked = !1);
    }
    
    document.body;  // Not used, but leaving it here as per original code

    const t = document.getElementById("toggle"),
          o = document.querySelector(".is-dropdown"),
          c = document.querySelectorAll(".header-checkbox:checked"),
          n = document.querySelector(".footer-nav-column.is-social li"),
          d = document.querySelector(".footer-nav-column.is-social"),
          z = document.querySelector(".special-section .special-wrap"),
          b = document.querySelector(".special-section");

    if (o) {
        o.addEventListener("click", function() {
            o.classList.toggle("is-active");
        });

        document.addEventListener("click", function(e) {
            if (!e.target.closest(".is-dropdown")) {
                o.classList.remove("is-active");
            }
        });
    }

    if (c.length > 0) {
        const i = window.matchMedia("(min-width: 1024px)");
        i.addListener(e);
        e(i);
    }

    if (d && !n) {
        d.remove();
    }

    if (b && !z) {
        b.remove();
    }
}();

/* Fuse.js
   –––––––––––––––––––––––––––––––––––––––––––––––––––– 
   Version : 3.4.6
   Website : fusejs.io
   Repo    : github.com/krisk/fuse
   Author  : Kirollos Risk
   License : Apache License 2.0
   –––––––––––––––––––––––––––––––––––––––––––––––––––– */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]))}L&&(k+=1)}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m)}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),c&&o(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=S+y,C=1<<(S<=31?S-1:30),I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O)}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])});

/* Search function */
document.addEventListener("DOMContentLoaded",function(){!function(e){"use strict";const t=document.body,n=document.getElementById("search"),s=document.getElementById("search-open"),i=document.getElementById("search-close"),c=document.getElementById("search-input"),a=document.getElementById("search-info"),d=document.getElementById("search-counter"),o=document.getElementById("search-results"),r=document.getElementById("search-counter-results"),l=document.getElementById("search-overlay");if(s){function u(){t.classList.remove("search-is-active"),n.style.display="none",c.value="",o.innerHTML="",d.classList.add("is-hide"),a.classList.remove("is-hide"),window.scrollTo(0,0)} t.addEventListener("keyup",function(e){27==e.keyCode&&u()}),s.addEventListener("click",function(){t.classList.add("search-is-active"),n.style.display="block",c.focus()}),i.addEventListener("click",u),l.addEventListener("click",u),s.addEventListener("click",function e(){if(!1===m){var searchAPI = 'https://www.helmm.com/lifeathelmm/ghost/api/content/posts/?key='+"{{@custom.content_api_key_for_search}}"+'&limit=all&fields=url,title,published_at,custom_excerpt,visibility,html';var t=searchAPI,n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=function(){var e,t;n.status>=200&&n.status<400&&(n.response,e=JSON.parse(n.responseText),t=new Fuse(e.posts,options),c.onkeyup=function(e){if(r.innerHTML="",o.innerHTML="",this.value.length>2&&(a.classList.add("is-hide"),d.classList.remove("is-hide")),this.value.length<3&&(a.classList.remove("is-hide"),d.classList.add("is-hide")),!(this.value.length<=2)){var n=t.search(e.target.value);r.innerHTML=n.length,n.map(function(e){var t=new Date(e.published_at).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}),n=document.createElement("small"),z=document.createElement("h5"),s=document.createElement("a");n.textContent=n.innerHTML+=t,s.textContent=e.title,s.setAttribute("href",e.url),o.appendChild(n),z.appendChild(s),o.appendChild(z)})}})},n.send(),s.removeEventListener("click",e)} m=!0});var m=!1}}(window)});


/* Custom settings for search function */
var options = {
  tokenize: true,
  matchAllTokens: true,
  threshold: 0,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [{name: 'title'}, {name: 'custom_excerpt'}, {name: 'html'}]
};



/* typing animation */
document.addEventListener("DOMContentLoaded", function() {
  const words = ["research", "sweat facts", "science", "stories", "adventures"];
  let currentWordIndex = 0;
  const element = document.getElementById("dynamic-word");

  // Check if the element exists before running the script
  if (!element) {
      //console.warn("Element with ID 'dynamic-word' not found. Typing animation will not run.");
      return;
  }

  let isDeleting = false;
  let text = "";
  let typingSpeed = 75;
  let deletingSpeed = 50;
  let animationPlayed = false;
  let pauseAfterTyping = 1000;
  let pauseAfterDeleting = 500;

  function type() {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
          text = currentWord.substring(0, text.length - 1);
      } else {
          text = currentWord.substring(0, text.length + 1);
      }

      element.textContent = text;

      let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && text === currentWord) {
          if (currentWordIndex === words.length - 1) {
              return; // Stop animation on the last word
          }
          nextDelay = pauseAfterTyping;
          isDeleting = true;
      } else if (isDeleting && text === "") {
          isDeleting = false;
          currentWordIndex++;
          nextDelay = pauseAfterDeleting;
      }

      setTimeout(type, nextDelay);
  }

  function handleScroll() {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight && !animationPlayed) {
          animationPlayed = true;
          type();
          window.removeEventListener("scroll", handleScroll);
      }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check if already in viewport on load
});

/* typing animation hero */
document.addEventListener("DOMContentLoaded", function() {
  const heroWords = ["Rise", "Explore", "Sweat", "Life"];
  let currentHeroWordIndex = 0;
  const heroElement = document.getElementById("dynamic-hero-word");

  // Check if the hero element exists before running the script
  if (!heroElement) {
      // console.warn("Element with ID 'dynamic-hero-word' not found. Typing animation will not run.");
      return;
  }

  let isDeletingHero = false;
  let heroText = "";
  let heroTypingSpeed = 75; // Typing speed in milliseconds
  let heroDeletingSpeed = 50; // Deleting speed in milliseconds
  let heroPauseAfterTyping = 1000; // Pause after typing each word
  let heroPauseAfterDeleting = 500; // Pause after deleting each word
  let heroAnimationPlayed = false;

  function typeHero() {
      const currentHeroWord = heroWords[currentHeroWordIndex];

      if (isDeletingHero) {
          heroText = currentHeroWord.substring(0, heroText.length - 1);
      } else {
          heroText = currentHeroWord.substring(0, heroText.length + 1);
      }

      heroElement.textContent = heroText;

      let nextDelay = isDeletingHero ? heroDeletingSpeed : heroTypingSpeed;

      if (!isDeletingHero && heroText === currentHeroWord) {
          if (currentHeroWordIndex === heroWords.length - 1) {
              return; // Stop animation on the last word
          }
          nextDelay = heroPauseAfterTyping;
          isDeletingHero = true;
      } else if (isDeletingHero && heroText === "") {
          isDeletingHero = false;
          currentHeroWordIndex++;
          if (currentHeroWordIndex === heroWords.length) {
              currentHeroWordIndex = 0; // Reset to cycle through words again
          }
          nextDelay = heroPauseAfterDeleting;
      }

      setTimeout(typeHero, nextDelay);
  }

  function handleScroll() {
      const rect = heroElement.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight && !heroAnimationPlayed) {
          heroAnimationPlayed = true;
          typeHero();
          window.removeEventListener("scroll", handleScroll);
      }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check if already in viewport on load
});
