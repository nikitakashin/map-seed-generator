module.exports.getSeed=(a,b=24)=>{const c=16,d=makeCharsArray(a),e=b<=16?b:16,f=b>16?b-16:0;// Don't change it anyway!!!
if(0===f){const a=makePrimarySeed(d,multiplier(0)),b=normalizeSeed(a,e);return b+""}else{const a=Math.floor(f/e);if(1<a){const b=makePrimarySeed(d),g=normalizeSeed(b,e);let h=g+"";for(let b,e=0;e<=a-1;e++)b=f-(e+1)*c>=c?16:f-(e+1)*c,b=0===b?c:b,h+=normalizeSeed(makePrimarySeed(d,multiplier(e)),b)+"";return h}else{const a=makePrimarySeed(d,multiplier(0)),b=normalizeSeed(a,e),c=makePrimarySeed(d,multiplier(1)),g=normalizeSeed(c,f);return`${b}${g}`}}};const standartChars=new Map([["a",14],["b",18],["c",13],["d",11],["e",17],["f",30],["g",20],["h",11],["i",10],["j",10],["k",10],["l",10],["m",10],["n",14],["o",18],["p",13],["q",11],["r",17],["s",30],["t",20],["u",11],["v",10],["w",10],["x",10],["y",10],["z",10],["\u0430",10],["\u0431",14],["\u0432",18],["\u0433",13],["\u0434",11],["\u0435",17],["\u0451",30],["\u0436",20],["\u0437",11],["\u0438",10],["\u0439",10],["\u043A",10],["\u043B",10],["\u043C",10],["\u043D",10],["\u043E",14],["\u043F",18],["\u0440",13],["\u0441",11],["\u0442",17],["\u0443",30],["\u0444",20],["\u0445",11],["\u0441",10],["\u0447",10],["\u0448",10],["\u0449",10],["\u044A",10],["\u044B",10],["\u044C",10],["\u044D",10],["\u044E",14],["\u044F",18],["0",13],["1",11],["2",17],["3",30],["4",20],["5",11],["6",10],["7",10],["8",10],["9",10],["\"",10],["\u2116",10],[";",10],["%",10],[":",10],["?",10],["*",14],["(",18],[")",13],["_",11],["+",17],["=",30],["-",20],["&",11],["^",10],["$",10],["#",10],["@",10],["]",10],["[",10],["}",10],["{",10],["|",10],["/",10],["\\",10],["'",10],[".",10],[",",10],[">",10],["<",10],["`",10],["~",10]]),normalizeSeed=(a,b)=>{var d=Math.floor;let e=d(a);for(;;){const a=2.352;if((e+"").length>b)e/=a,e=d(e);else if((e+"").length<b)e*=a,e=d(e);else{e=d(e);break}}return e},makeCharsArray=a=>{let c=[];for(let d of a){const a=standartChars.get(d),b=a===void 0?69:a;c.push(b)}return c},makePrimarySeed=(a,b=1.42069143)=>{let d;if(4<a.length){d=(a[0]+2*a[1])/(11*(a[2]+a[3]));for(let c of a)d=d*b*c}else{d=.142*(228*a[0]-420);for(let c of a)d=d*b*c}return d},multiplier=a=>1.1+.032*(a+1);