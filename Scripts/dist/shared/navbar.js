﻿"use strict";(function(){var n=function(n,t){for(var r=document.querySelectorAll(n),i=0;i<r.length;i++)t(r[i])},t=function(){var t=this.getAttribute("data-target"),i=this.getAttribute("data-toggle");n(t,function(n){n.classList.toggle(i)})},i=function(){n(".navbar-toggle",function(n){n.addEventListener("click",t)})};i()})();