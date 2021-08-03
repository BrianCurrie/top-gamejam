(()=>{"use strict";function e(e,t,n,i,l,d,a){let c=0,s=!1;return{getId:function(){return e},generateHtml:function(){let i=document.createElement("div");i.classList.add("level-select-item"),i.id=`level-select-item-${e}`;let l=document.createElement("div");l.classList.add("level-select-item-title"),l.innerText=t;let d=document.createElement("div");return d.classList.add("level-select-item-topic"),d.innerText=n,i.appendChild(l),i.appendChild(d),s?i.classList.add("level-select-item-completed"):i.onclick=()=>{o.beginLevel(e)},i},begin:function(){document.getElementById("gameplay-container").innerHTML="",i.setLevel(this),document.getElementById("gameplay-container").appendChild(i.generateHtml()),a&&("object"==typeof a?document.getElementById("level-info-content").appendChild(a):"string"==typeof a&&(document.getElementById("level-info-content").innerText=a)),o.setDialogue(d[c])},submit:function(t){s?console.log("This level is already complete."):t==l[c]?(c++,c>l.length-1?(console.log("Level finished."),s=!0,o.setDialogue(`Level ${e} complete, good job!`),o.finishLevel()):o.setDialogue(d[c]),o.setDialogue("Correct answer!",{duration:2e3})):o.setDialogue("Wrong answer!",{duration:2e3})}}}const t=function(){let e=null,t=(()=>{let e=[];for(let t=0;t<8;t++)e.push(0);return e})();function n(){document.getElementById("binary-widget-value-display").innerText=parseInt(t.join(""),2)}return{generateHtml:function(){const i=document.createElement("div");i.id="binary-widget-container";const o=document.createElement("div");o.id="binary-widget-value-display",o.innerText=parseInt(t.join(""),2);const l=document.createElement("div");l.id="binary-widget-toggle-digits";const d=document.createElement("div");d.classList.add("submit-button"),d.innerText="Submit",d.onclick=()=>{!function(){const n=parseInt(t.join(""),2);e.submit(n)}()},i.appendChild(o),i.appendChild(l),i.appendChild(d);for(let e=0;e<8;e++){let i=document.createElement("div"),o=document.createElement("button"),d=document.createElement("div"),a=document.createElement("button");i.classList.add("digit-container"),d.classList.add("digit"),o.innerText="+",d.innerText=t[e],a.innerText="-",i.appendChild(o),i.appendChild(d),i.appendChild(a),l.appendChild(i),o.addEventListener("click",(()=>{"0"===d.innerText&&(t[e]=1,d.innerText="1",n())})),a.addEventListener("click",(()=>{"1"===d.innerText&&(t[e]=0,d.innerText="0",n())}))}return i},setLevel:function(t){e=t}}},n=function(){let e=null;return{generateHtml:function(){const t=document.createElement("div");t.id="convert-widget-container";const n=document.createElement("input");n.id="convert-widget-input",n.placeholder="Text to binary";const i=document.createElement("div");i.id="convert-widget-output";const o=document.createElement("div");return o.classList.add("submit-button"),o.innerText="Submit",o.onclick=()=>{!function(){const t=document.getElementById("convert-widget-input").value;e.submit(t)}()},t.appendChild(n),t.appendChild(i),t.appendChild(o),n.addEventListener("input",(()=>{const e=n.value;i.innerText=function(e){let t="";for(let n=0;n<e.length;n++)t+=e.charCodeAt(n).toString(2)+" ";return t.trim()}(e)})),t},setLevel:function(t){e=t}}},i=function(){let e=null,t=[0,0,0];return{generateHtml:function(){const n=document.createElement("div");n.id="RGB-widget-container";const i=document.createElement("div");i.id="RGB-widget-color-display",i.style.backgroundColor=`rgb(${t[0]}, ${t[1]}, ${t[2]})`;const o=document.createElement("div");o.id="RGB-widget-slider-container";const l=document.createElement("div"),d=document.createElement("div");d.innerText=`Red ${t[0]}`;const a=document.createElement("input");a.id="RGB-widget-red-input",a.classList.add("slider"),a.type="range",a.min="0",a.max="255",a.value=t[0];const c=document.createElement("div"),s=document.createElement("div");s.innerText=`Green ${t[1]}`;const r=document.createElement("input");r.id="RGB-widget-green-input",r.classList.add("slider"),r.type="range",r.min="0",r.max="255",r.value=t[1];const m=document.createElement("div"),u=document.createElement("div");u.innerText=`Blue ${t[2]}`;const g=document.createElement("input");g.id="GB-widget-blue-input",g.classList.add("slider"),g.type="range",g.min="0",g.max="255",g.value=t[2];const p=document.createElement("div");return p.classList.add("submit-button"),p.innerText="Submit",p.onclick=()=>{!function(){const n=`${t[0]}, ${t[1]}, ${t[2]}`;e.submit(n)}()},l.appendChild(d),l.appendChild(a),c.appendChild(s),c.appendChild(r),m.appendChild(u),m.appendChild(g),o.appendChild(l),o.appendChild(c),o.appendChild(m),n.appendChild(i),n.appendChild(o),n.appendChild(p),a.addEventListener("input",(()=>{t[0]=parseInt(a.value),d.innerText=`Red ${t[0]}`,i.style.backgroundColor=`rgb(${t[0]}, ${t[1]}, ${t[2]})`})),r.addEventListener("input",(()=>{t[1]=parseInt(r.value),s.innerText=`Green ${t[1]}`,i.style.backgroundColor=`rgb(${t[0]}, ${t[1]}, ${t[2]})`})),g.addEventListener("input",(()=>{t[2]=parseInt(g.value),u.innerText=`Blue ${t[2]}`,i.style.backgroundColor=`rgb(${t[0]}, ${t[1]}, ${t[2]})`})),n},setLevel:function(t){e=t}}},o=(()=>{const o=e=>document.getElementById(e),l=(o("gameplay-container"),o("level-select-container")),d=o("level-select-items"),a=o("level-info-container"),c=o("dialogue");let s=[],r="";function m(){d.innerHTML="",s.forEach((e=>{d.appendChild(e.generateHtml())}))}function u(){l.className="",l.classList.add("level-select-open-animation"),a.className="",a.classList.add("level-info-hide-animation")}return s=function(){let o=[];return o.push(new e(0,"Binary","How do computers think?",new t,["1","5","198"],["Write 1 in binary","Write 5 in binary","Write 198 in binary"],"LEVEL INFO GOES HERE, IT CAN BE AN HTML ELEMENT OBJECT TOO")),o.push(new e(1,"Binary conversion","How do computers understand English?",new n,["a","A","Hello world!"],['What is "a" in binary?','What is "A" in binary?','What is "Hello world!" in binary?'],"LEVEL INFO GOES HERE, IT CAN BE AN HTML ELEMENT OBJECT TOO")),o.push(new e(2,"Colors","How do computers see color?",new i,["0, 255, 0","255, 0, 0","0, 255, 255"],["Make green (R:0 G:255 B:0)","Make red (R:255 G:0 B:0)","Make cyan (R:0 G:255 B:255)"],"LEVEL INFO GOES HERE, IT CAN BE AN HTML ELEMENT OBJECT TOO")),o}(),m(),document.getElementById("level-select-open-button").onclick=function(){u()},document.getElementById("level-info-open-button").onclick=function(){a.className="",a.classList.add("level-info-open-animation"),l.className="",l.classList.add("level-select-hide-animation")},document.getElementById("level-info-return-button").onclick=function(){a.className="",a.classList.add("level-info-close-animation"),l.className="",l.classList.add("level-select-reveal-animation")},u(),l.classList.remove("level-select-open-animation"),{beginLevel:function(e){s[e].begin(s[e]),l.className="",l.classList.add("level-select-close-animation"),a.className="",a.classList.add("level-info-reveal-animation")},finishLevel:function(){m(),u()},setDialogue:function e(t,n){t||(t="< Dialogue message was not set >"),n||(n={}),n.duration?setTimeout((()=>{e(r)}),n.duration):r=t,c.innerText=t,console.log(`Set dialogue to "${t}"`)}}})(),l=(()=>{const e=document.getElementById("portrait-container");let t=[],n=[],i=[];const o=e=>{for(let t=0;t<9;t++)clearInterval(i[t]),i[t]=setInterval((()=>{l(t)}),e);console.log(`Bone tracking initialized with interval of ${e}`)},l=i=>{n[i].style.transform=getComputedStyle(t[i]).getPropertyValue("transform"),n[i].style.transformOrigin=getComputedStyle(t[i]).getPropertyValue("transformOrigin"),n[i].style.left=t[i].getBoundingClientRect().left-e.getBoundingClientRect().left,n[i].style.top=t[i].getBoundingClientRect().top-e.getBoundingClientRect().top};return t[0]=document.getElementById("bone-wheels"),t[1]=document.getElementById("bone-body-tube"),t[2]=document.getElementById("bone-chest"),t[3]=document.getElementById("bone-right-arm"),t[4]=document.getElementById("bone-right-hand"),t[5]=document.getElementById("bone-left-arm"),t[6]=document.getElementById("bone-left-hand"),t[7]=document.getElementById("bone-head"),t[8]=document.getElementById("bone-face"),n[0]=document.getElementById("img-wheels"),n[1]=document.getElementById("img-body-tube"),n[2]=document.getElementById("img-chest"),n[3]=document.getElementById("img-right-arm"),n[4]=document.getElementById("img-right-hand"),n[5]=document.getElementById("img-left-arm"),n[6]=document.getElementById("img-left-hand"),n[7]=document.getElementById("img-head"),n[8]=document.getElementById("img-face"),o(1e3/60),{initBoneTracking:o,enableAnimations:function(){t.forEach((e=>{e.classList.add("animated")}))},disableAnimations:function(){t.forEach((e=>{e.classList.remove("animated")}))}}})();function d(e){let t=0,n=0,i=1,o=null;function l(o){e.style.transform=`translate(${t}px, ${n}px) scaleX(${i})`,setTimeout((()=>{l()}),o)}function d(){switch(clearInterval(o),Math.round(2*Math.random())){case 0:break;case 1:i=Math.random()<.5?1:-1,o=setInterval((function(){return t<16?(t=16,void clearInterval(o)):t>624?(t=624,void clearInterval(o)):void(t+=i)}),15+10*Math.random());break;case 2:o=setInterval((function(){n>-16?n-=2:(clearInterval(o),o=setInterval((()=>{n<0?n+=2:clearInterval(o)}),1))}),1)}setTimeout((function(){d()}),500+1500*Math.random())}return{commence:function(e){t=Math.round(16+624*Math.random()),l(e),d()}}}(()=>{let e=[];e.push(new d(document.getElementById("robokid"))),e.push(new d(document.getElementById("kid1"))),e.push(new d(document.getElementById("kid2"))),e.push(new d(document.getElementById("kid3"))),e.forEach((e=>{e.commence(1e3/60)}))})(),(()=>{const e="animation-settings-options",t="font-settings-options",n="dialogue-settings-options",i=t=>{switch(t){case 0:l.disableAnimations(),l.initBoneTracking(Number.MAX_SAFE_INTEGER);break;case 1:l.enableAnimations(),l.initBoneTracking(100);break;case 2:l.enableAnimations(),l.initBoneTracking(1e3/30);break;case 3:l.enableAnimations(),l.initBoneTracking(1)}Array.from(document.getElementById(e).children).forEach((e=>{e.classList.remove("selected")})),document.getElementById(e).children[t].classList.add("selected")},o=e=>{switch(e){case 0:document.body.classList.remove("font-standard"),document.body.classList.remove("font-dyslexic"),document.body.classList.add("font-pixel");break;case 1:document.body.classList.remove("font-pixel"),document.body.classList.remove("font-dyslexic"),document.body.classList.add("font-standard");break;case 2:document.body.classList.remove("font-pixel"),document.body.classList.remove("font-standard"),document.body.classList.add("font-dyslexic")}Array.from(document.getElementById(t).children).forEach((e=>{e.classList.remove("selected")})),document.getElementById(t).children[e].classList.add("selected")};!function(){const l=e=>document.getElementById(e);l("open-settings-button").onclick=()=>{document.getElementById("settings-container").style.display=""},l("close-settings-button").onclick=()=>{document.getElementById("settings-container").style.display="none"};for(let t=0;t<4;t++)l(e).children[t].onclick=()=>{i(t)};for(let e=0;e<3;e++)l(t).children[e].onclick=()=>{o(e)};for(let e=0;e<4;e++)l(n).children[e].onclick=()=>{var t;t=e,console.log("Dialogue speed set to "+t),Array.from(document.getElementById(n).children).forEach((e=>{e.classList.remove("selected")})),document.getElementById(n).children[t].classList.add("selected")}}()})()})();