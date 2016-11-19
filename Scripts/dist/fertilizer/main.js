!function(e){"function"==typeof define&&define.amd?define("fertilizercalculator",[],e):FertilizerCalculator=e()}(function(){var e,a,t=function(e){var a=.1,t=[];return e.forEach(function(e,n){var o=2*(Math.random()-.5),r=e*a*o,m=e+r;0>m&&(m=0),t.push(m)}),t},n=function(e,a){var t=[],n=[];return e.forEach(function(e,n){var o=2*(Math.random()-.5);o>0||n>a.length-1?t.push(e):t.push(a[n])}),a.forEach(function(a,t){var o=2*(Math.random()-.5);o>0||t>e.length-1?n.push(a):n.push(e[t])}),[t,n]},o=function(t){var n=0;return e.forEach(function(e,o){var r=0;e.forEach(function(e,a){r+=e*t[a]}),n+=Math.abs(a[o]-r)}),n},r=function(e,a){var t=o(e),n=o(a);return t-n},m=function(e){var a=16;return e.sort(r),e.slice(0,a)},l=function(e,a){for(var o=0;a>o;o++){for(var r=e.length,l=0;r>l;l++)e.push(t(e[l]));e=m(e);for(var i=e.length,l=0;i>l;l+=2){var u=n(e[l],e[l+1]);e=e.concat(u)}}return e},i=function(){for(var t=[],n=e[0].length,o=0;n>o;o++){var r=0;e.forEach(function(e,t){if(e[o]>0){var n=a[t]/e[o];n>r&&(r=n)}}),t.push(r)}return t},u=function(t,n){e=t,a=n;var o=[i()];return o=l(o,250),o.sort(r),o[0]};return{Calculate:u}}),function(e){"function"==typeof define&&define.amd?define("fertilizerdata",[],e):FertilizerData=e()}(function(){return[{name:"Calcium Nitrate",formula:"Ca5(NO3)10NH4NO3(H2O)10"},{name:"Potassium Nitrate",formula:"KNO3"},{name:"Magnesium Sulfate",formula:"MgSO4(H2O)7"},{name:"Potassium Phosphate",formula:"KH2PO4"}]}),function(e){"function"==typeof define&&define.amd?define("molarmass",[],e):MolarMass=e()}(function(){var calculate=function(formula){var atom=new Array;atom.H=1.00794,atom.He=4.0026,atom.Li=6.941,atom.Be=9.01218,atom.B=10.811,atom.C=12.011,atom.N=14.0067,atom.O=15.9994,atom.F=18.9984,atom.Ne=20.1797,atom.Na=22.98977,atom.Mg=24.305,atom.Al=26.98154,atom.Si=28.0855,atom.P=30.97376,atom.S=32.066,atom.Cl=35.4527,atom.Ar=39.948,atom.K=39.0983,atom.Ca=40.078,atom.Sc=44.9559,atom.Ti=47.88,atom.V=50.9415,atom.Cr=51.996,atom.Mn=54.938,atom.Fe=55.847,atom.Co=58.9332,atom.Ni=58.6934,atom.Cu=63.546,atom.Zn=65.39,atom.Ga=69.723,atom.Ge=72.61,atom.As=74.9216,atom.Se=78.96,atom.Br=79.904,atom.Kr=83.8,atom.Rb=85.4678,atom.Sr=87.62,atom.Y=88.9059,atom.Zr=91.224,atom.Nb=92.9064,atom.Mo=95.94,atom.Tc=98,atom.Ru=101.07,atom.Rh=102.9055,atom.Pd=106.42,atom.Ag=107.868,atom.Cd=112.41,atom.In=114.82,atom.Sn=118.71,atom.Sb=121.757,atom.Te=127.6,atom.I=126.9045,atom.Xe=131.29,atom.Cs=132.9054,atom.Ba=137.33,atom.La=138.9055,atom.Hf=178.49,atom.Ta=180.9479,atom.W=183.85,atom.Re=186.207,atom.Os=190.2,atom.Ir=192.22,atom.Pt=195.08,atom.Au=196.9665,atom.Hg=200.59,atom.Tl=204.383,atom.Pb=207.2,atom.Bi=208.9804,atom.Po=209,atom.At=210,atom.Rn=222,atom.Fr=223,atom.Ra=226.0254,atom.Ac=227,atom.Rf=261,atom.Db=262,atom.Sg=263,atom.Bh=262,atom.Hs=265,atom.Mt=266,atom.Uun=269,atom.Uuu=272,atom.Uub=277,atom.Ce=140.12,atom.Pr=140.9077,atom.Nd=144.24,atom.Pm=145,atom.Sm=150.36,atom.Eu=151.965,atom.Gd=157.25,atom.Tb=158.9253,atom.Dy=162.5,atom.Ho=164.9303,atom.Er=167.26,atom.Tm=168.9342,atom.Yb=173.04,atom.Lu=174.967,atom.Th=232.0381,atom.Pa=231.0359,atom.U=238.029,atom.Np=237.0482,atom.Pu=244,atom.Am=243,atom.Cm=247,atom.Bk=247,atom.Cf=251,atom.Es=252,atom.Fm=257,atom.Md=258,atom.No=259,atom.Lr=262;var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ",lowercase="abcdefghijklmnopqrstuvwxyz",number="0123456789",total=new Array,level=0;total[0]=0;var i=0,mass=0,name="",percision=8,elmass=new Array;for(i=0;i<elmass.length;i++)elmass[i]=null;for(elmass[0]=new Array,i=0;i<elmass[0].length;i++)elmass[0][i]=0;for(i=0;""!=formula.charAt(i);){for(-1==(uppercase+lowercase+number+"()").indexOf(formula.charAt(i))&&i++;"("==formula.charAt(i);){level++,i++,total[level]=0,elmass[level]=new Array;for(var h=0;i<elmass[level].length;h++)elmass[level][i]=0}if(")"==formula.charAt(i))mass=total[level],name="",level--;else if(-1!=uppercase.indexOf(formula.charAt(i))){for(name=formula.charAt(i);-1!=lowercase.indexOf(formula.charAt(i+1))&&""!=formula.charAt(i+1);)name+=formula.charAt(++i);mass=atom[name];var massStr=mass+"",masspercis;masspercis=-1!=massStr.indexOf(".")?massStr.substring(massStr.indexOf(".")+1,massStr.length).length:0,percision=8==percision||percision>masspercis?masspercis:percision}for(var amount="";-1!=number.indexOf(formula.charAt(i+1))&&""!=formula.charAt(i+1);)amount+=formula.charAt(++i);if(""==amount&&(amount="1"),total[level]+=mass*parseInt(amount),""==name)for(var ele in elmass[level+1]){var totalnumber=parseInt(elmass[level+1][ele])*amount;null==elmass[level][ele]?elmass[level][ele]=totalnumber:elmass[level][ele]=totalnumber+parseInt(elmass[level][ele])}else null==elmass[level][name]?elmass[level][name]=amount:elmass[level][name]=parseInt(elmass[level][name])+parseInt(amount);i++}var retval={};for(var ele in elmass[0]){var eltotal=eval(elmass[0][ele]*atom[ele]);retval[ele]=eltotal/total[0]}return retval};return{Calculate:calculate}}),function(e){"function"==typeof define&&define.amd?define("fertilizerui",["fertilizercalculator","fertilizerdata","molarmass"],e):FertilizerUI=e(FertilizerCalculator,FertilizerData,MolarMass)}(function(e,a,t){var n=function(e,a,t){for(var n=0;n<e.length;n++)a.call(t,e[n],n,e)},o=function(e){e.innerHTML='<div class="loading">Loading...</div>'},r=function(e){var a=e.querySelector(".loading");e.removeChild(a)},m=function(e,a,t){var n=document.createElement("div");n.className="row";var o=document.createElement("span");o.innerHTML=e+": ",o.className="cell";var r=document.createElement("span");return r.innerHTML=a.toLocaleString()+t,r.className="cell",n.appendChild(o),n.appendChild(r),n},l=function(e,a){var n={name:"",value:""};n.name=e,n.value=t.Calculate(a);var o=document.createElement("button");return o.className="fertilizer active",o.innerHTML=e,o.value=e,o.title="Remove "+e,o.dataset.fertilizer=JSON.stringify(n),o.addEventListener("click",function(){this.classList.toggle("active")}),o},i=function(){var e=document.getElementById("fertilizer-options"),a=document.getElementById("fertilizer-formula").value;if(a){var t=l(a,a);e.appendChild(t)}},u=function(e,a){var t=document.createElement("div");t.className="row goal";var n=document.createElement("label");n.className="cell element active",n.innerHTML=e,n.addEventListener("click",function(){this.classList.toggle("active")});var o=document.createElement("div");o.className="cell";var r=document.createElement("input");r.type="text",r.id="goal"+e,r.value=a,o.appendChild(r);var m=document.createElement("output");m.className="cell",m.id="output"+e;var l=document.createElement("output");return l.className="cell",l.id="error"+e,t.appendChild(n),t.appendChild(o),t.appendChild(m),t.appendChild(l),t},c=function(){var e=document.getElementById("fertilizer-goals"),a=document.getElementById("goal-element").value;if(a){var t=u(a,0);e.appendChild(t)}},s=function(){var e=[];return n(document.querySelectorAll(".fertilizer.active"),function(a){var t=JSON.parse(a.dataset.fertilizer);e.push(t)}),e},f=function(){var e=parseFloat(document.getElementById("volumeInput").value);return e},d=function(){var e=[];return n(document.querySelectorAll(".goal .element.active"),function(a){e.push({name:a.innerHTML})}),e},v=function(e,a){var t=[];return e.forEach(function(e,n){var o=[];a.forEach(function(a){o.push(a.value.hasOwnProperty(e.name)?a.value[e.name]:0)}),t.push(o)}),t},p=function(e,a){var t=[];return e.forEach(function(e,n,o){var r=parseFloat(document.getElementById("goal"+e.name).value)||0;o[n].value=r,t.push(r*a)}),t},h=function(e,a,t,o){n(document.querySelectorAll(".goal output"),function(e){e.innerHTML=0}),e.forEach(function(e,n){var r=0;t.forEach(function(t,n){r+=t*(a[n].value.hasOwnProperty(e.name)?a[n].value[e.name]:0)});var m=r/o;document.getElementById("output"+e.name).innerHTML=Math.round(m),document.getElementById("error"+e.name).innerHTML=Math.round(m-e.value)})},g=function(e,a){var t=document.getElementById("fertilizer-amounts");a.forEach(function(a,n){var o=m(e[n].name,Math.round(a),"mg");t.appendChild(o)})},E=function(e,a,t){var n=document.getElementById("fertilizer-amounts"),o=0;a.forEach(function(e,a){o+=e});var r=m("Total PPM",Math.round(o/t),"ppm");n.appendChild(r)},y=function(){var a=document.getElementById("fertilizer-amounts");o(a);var t=s(),n=f(),m=d(),l=v(m,t),i=p(m,n),u=e.Calculate(l,i);h(m,t,u,n),g(t,u),E(t,u,n),r(a)},C=function(){o(document.getElementById("fertilizer-amounts")),setTimeout(y,100)},I=function(){var e=document.getElementById("fertilizer-options");a.forEach(function(a){var t=l(a.name,a.formula);e.appendChild(t)}),r(e);var t=document.getElementById("fertilizer-goals"),n=[{name:"N",value:211},{name:"P",value:46},{name:"K",value:263},{name:"Ca",value:132},{name:"Mg",value:20},{name:"S",value:13}];n.forEach(function(e){var a=u(e.name,e.value);t.appendChild(a)});var o=document.getElementById("fertilizer-add");o.addEventListener("click",i);var m=document.getElementById("goal-add");m.addEventListener("click",c);var s=document.getElementById("fertilizer-submit");s.addEventListener("click",C)};return{Init:I}}),"function"==typeof define&&define.amd?require(["fertilizerui"],function(e){e.Init()}):FertilizerUI.Init(),define("main",function(){});