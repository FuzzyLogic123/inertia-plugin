const D=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;let u,e,t,F,C,i,n=/(?:\r|\n|\t\t)/g,s=/(?:\s\s+)/g,E=String.fromCharCode(160),l=D=>{u=document,e=window,F=F||D||e.gsap||console.warn("Please gsap.registerPlugin(SplitText)"),F&&(i=F.utils.toArray,C=F.core.context||function(){},t=1)},h=D=>e.getComputedStyle(D),B=D=>"absolute"===D.position||!0===D.absolute,A=(D,u)=>{let e,F=u.length;for(;--F>-1;)if(e=u[F],D.substr(0,e.length)===e)return e.length},f=(D="",u)=>{let e=~D.indexOf("++"),F=1;return e&&(D=D.split("++").join("")),()=>"<"+u+" style='position:relative;display:inline-block;'"+(D?" class='"+D+(e?F++:"")+"'>":">")},c=(D,u,e)=>{let F=D.nodeType;if(1===F||9===F||11===F)for(D=D.firstChild;D;D=D.nextSibling)c(D,u,e);else 3!==F&&4!==F||(D.nodeValue=D.nodeValue.split(u).join(e))},g=(D,u)=>{let e=u.length;for(;--e>-1;)D.push(u[e])},x=(D,u,e)=>{let F;for(;D&&D!==u;){if(F=D._next||D.nextSibling,F)return F.textContent.charAt(0)===e;D=D.parentNode||D._parent}},y=D=>{let u,e,F=i(D.childNodes),t=F.length;for(u=0;u<t;u++)e=F[u],e._isSplit?y(e):u&&e.previousSibling&&3===e.previousSibling.nodeType?(e.previousSibling.nodeValue+=3===e.nodeType?e.nodeValue:e.firstChild.nodeValue,D.removeChild(e)):3!==e.nodeType&&(D.insertBefore(e.firstChild,e),D.removeChild(e))},b=(D,u)=>parseFloat(u[D])||0,_=(D,e,F,t,C,i,E)=>{let s,n,l,r,o,d,p,a,A,f,_,S,m=h(D),N=b("paddingLeft",m),T=-999,v=b("borderBottomWidth",m)+b("borderTopWidth",m),w=b("borderLeftWidth",m)+b("borderRightWidth",m),L=b("paddingTop",m)+b("paddingBottom",m),W=b("paddingLeft",m)+b("paddingRight",m),H=b("fontSize",m)*(e.lineThreshold||.2),V=m.textAlign,O=[],R=[],M=[],k=e.wordDelimiter||" ",j=e.tag?e.tag:e.span?"span":"div",P=e.type||e.split||"chars,words,lines",z=C&&~P.indexOf("lines")?[]:null,q=~P.indexOf("words"),G=~P.indexOf("chars"),I=B(e),J=e.linesClass,K=~(J||"").indexOf("++"),Q=[],U="flex"===m.display,X=D.style.display;for(K&&(J=J.split("++").join("")),U&&(D.style.display="block"),n=D.getElementsByTagName("*"),l=n.length,o=[],s=0;s<l;s++)o[s]=n[s];if(z||I)for(s=0;s<l;s++)r=o[s],d=r.parentNode===D,(d||I||G&&!q)&&(S=r.offsetTop,z&&d&&Math.abs(S-T)>H&&("BR"!==r.nodeName||0===s)&&(p=[],z.push(p),T=S),I&&(r._x=r.offsetLeft,r._y=S,r._w=r.offsetWidth,r._h=r.offsetHeight),z&&((r._isSplit&&d||!G&&d||q&&d||!q&&r.parentNode.parentNode===D&&!r.parentNode._isSplit)&&(p.push(r),r._x-=N,x(r,D,k)&&(r._wordEnd=!0)),"BR"===r.nodeName&&(r.nextSibling&&"BR"===r.nextSibling.nodeName||0===s)&&z.push([])));for(s=0;s<l;s++)if(r=o[s],d=r.parentNode===D,"BR"!==r.nodeName)if(I&&(A=r.style,q||d||(r._x+=r.parentNode._x,r._y+=r.parentNode._y),A.left=r._x+"px",A.top=r._y+"px",A.position="absolute",A.display="block",A.width=r._w+1+"px",A.height=r._h+"px"),!q&&G)if(r._isSplit)for(r._next=n=r.nextSibling,r.parentNode.appendChild(r);n&&3===n.nodeType&&" "===n.textContent;)r._next=n.nextSibling,r.parentNode.appendChild(n),n=n.nextSibling;else r.parentNode._isSplit?(r._parent=r.parentNode,!r.previousSibling&&r.firstChild&&(r.firstChild._isFirst=!0),r.nextSibling&&" "===r.nextSibling.textContent&&!r.nextSibling.nextSibling&&Q.push(r.nextSibling),r._next=r.nextSibling&&r.nextSibling._isFirst?null:r.nextSibling,r.parentNode.removeChild(r),o.splice(s--,1),l--):d||(S=!r.nextSibling&&x(r.parentNode,D,k),r.parentNode._parent&&r.parentNode._parent.appendChild(r),S&&r.parentNode.appendChild(u.createTextNode(" ")),"span"===j&&(r.style.display="inline"),O.push(r));else r.parentNode._isSplit&&!r._isSplit&&""!==r.innerHTML?R.push(r):G&&!r._isSplit&&("span"===j&&(r.style.display="inline"),O.push(r));else z||I?(r.parentNode&&r.parentNode.removeChild(r),o.splice(s--,1),l--):q||D.appendChild(r);for(s=Q.length;--s>-1;)Q[s].parentNode.removeChild(Q[s]);if(z){for(I&&(f=u.createElement(j),D.appendChild(f),_=f.offsetWidth+"px",S=f.offsetParent===D?0:D.offsetLeft,D.removeChild(f)),A=D.style.cssText,D.style.cssText="display:none;";D.firstChild;)D.removeChild(D.firstChild);for(a=" "===k&&(!I||!q&&!G),s=0;s<z.length;s++){for(p=z[s],f=u.createElement(j),f.style.cssText="display:block;text-align:"+V+";position:"+(I?"absolute;":"relative;"),J&&(f.className=J+(K?s+1:"")),M.push(f),l=p.length,n=0;n<l;n++)"BR"!==p[n].nodeName&&(r=p[n],f.appendChild(r),a&&r._wordEnd&&f.appendChild(u.createTextNode(" ")),I&&(0===n&&(f.style.top=r._y+"px",f.style.left=N+S+"px"),r.style.top="0px",S&&(r.style.left=r._x-S+"px")));0===l?f.innerHTML="&nbsp;":q||G||(y(f),c(f,String.fromCharCode(160)," ")),I&&(f.style.width=_,f.style.height=r._h+"px"),D.appendChild(f)}D.style.cssText=A}I&&(E>D.clientHeight&&(D.style.height=E-L+"px",D.clientHeight<E&&(D.style.height=E+v+"px")),i>D.clientWidth&&(D.style.width=i-W+"px",D.clientWidth<i&&(D.style.width=i+w+"px"))),U&&(X?D.style.display=X:D.style.removeProperty("display")),g(F,O),q&&g(t,R),g(C,M)},w=(e,F,t,C)=>{let i,l,r,o,d,p,a,h,f=F.tag?F.tag:F.span?"span":"div",g=~(F.type||F.split||"chars,words,lines").indexOf("chars"),x=B(F),y=F.wordDelimiter||" ",b=D=>D===y||D===E&&" "===y,_=" "!==y?"":x?"&#173; ":" ",S="</"+f+">",m=1,N=F.specialChars?"function"==typeof F.specialChars?F.specialChars:A:null,T=u.createElement("div"),v=e.parentNode;for(v.insertBefore(T,e),T.textContent=e.nodeValue,v.removeChild(e),i=function D(u){let e=u.nodeType,F="";if(1===e||9===e||11===e){if("string"==typeof u.textContent)return u.textContent;for(u=u.firstChild;u;u=u.nextSibling)F+=D(u)}else if(3===e||4===e)return u.nodeValue;return F}(e=T),a=-1!==i.indexOf("<"),!1!==F.reduceWhiteSpace&&(i=i.replace(s," ").replace(n,"")),a&&(i=i.split("<").join("{{LT}}")),d=i.length,l=(" "===i.charAt(0)?_:"")+t(),r=0;r<d;r++)if(p=i.charAt(r),N&&(h=N(i.substr(r),F.specialChars)))p=i.substr(r,h||1),l+=g&&" "!==p?C()+p+"</"+f+">":p,r+=h-1;else if(b(p)&&!b(i.charAt(r-1))&&r){for(l+=m?S:"",m=0;b(i.charAt(r+1));)l+=_,r++;r===d-1?l+=_:")"!==i.charAt(r+1)&&(l+=_+t(),m=1)}else"{"===p&&"{{LT}}"===i.substr(r,6)?(l+=g?C()+"{{LT}}</"+f+">":"{{LT}}",r+=5):p.charCodeAt(0)>=55296&&p.charCodeAt(0)<=56319||i.charCodeAt(r+1)>=65024&&i.charCodeAt(r+1)<=65039?(o=((i.substr(r,12).split(D)||[])[1]||"").length||2,l+=g&&" "!==p?C()+i.substr(r,o)+"</"+f+">":i.substr(r,o),r+=o-1):l+=g&&" "!==p?C()+p+"</"+f+">":p;e.outerHTML=l+(m?S:""),a&&c(v,"{{LT}}","<")},S=(D,u,e,F)=>{let t,C,E=i(D.childNodes),s=E.length,n=B(u);if(3!==D.nodeType||s>1){for(u.absolute=!1,t=0;t<s;t++)C=E[t],C._next=C._isFirst=C._parent=C._wordEnd=null,(3!==C.nodeType||/\S+/.test(C.nodeValue))&&(n&&3!==C.nodeType&&"inline"===h(C).display&&(C.style.display="inline-block",C.style.position="relative"),C._isSplit=!0,S(C,u,e,F));return u.absolute=n,void(D._isSplit=!0)}w(D,u,e,F)};class m{constructor(D,u){t||l(),this.elements=i(D),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=u||{},C(this),this.split(u)}split(D){this.isSplit&&this.revert(),this.vars=D=D||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;let u,e,F,t=this.elements.length,C=D.tag?D.tag:D.span?"span":"div",i=f(D.wordsClass,C),E=f(D.charsClass,C);for(;--t>-1;)F=this.elements[t],this._originals[t]={html:F.innerHTML,style:F.getAttribute("style")},u=F.clientHeight,e=F.clientWidth,S(F,D,i,E),_(F,D,this.chars,this.words,this.lines,e,u);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this}revert(){let D=this._originals;if(!D)throw"revert() call wasn't scoped properly.";return this.elements.forEach(((u,e)=>{u.innerHTML=D[e].html,u.setAttribute("style",D[e].style)})),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this}static create(D,u){return new m(D,u)}}m.version="3.12.5",m.register=l;export default m;export{m as SplitText};