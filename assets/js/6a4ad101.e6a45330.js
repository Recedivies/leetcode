"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.createContext({}),p=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(m.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,b=c["".concat(m,".").concat(d)]||c[d]||s[d]||o;return n?i.createElement(b,a(a({ref:t},u),{},{components:n})):i.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={description:"Author: @Recedivies | https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/"},a="1318 - Minimum Flips to Make a OR b Equal to c (Medium)",l={unversionedId:"2000/minimum-flips-to-make-a-or-b-equal-to-c-medium",id:"2000/minimum-flips-to-make-a-or-b-equal-to-c-medium",title:"1318 - Minimum Flips to Make a OR b Equal to c (Medium)",description:"Author: @Recedivies | https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/",source:"@site/solutions/1001 - 2000/1318-minimum-flips-to-make-a-or-b-equal-to-c-medium.md",sourceDirName:"1001 - 2000",slug:"/2000/minimum-flips-to-make-a-or-b-equal-to-c-medium",permalink:"/leetcode/solutions/2000/minimum-flips-to-make-a-or-b-equal-to-c-medium",draft:!1,editUrl:"https://github.com/Recedivies/leetcode/solutions/1001 - 2000/1318-minimum-flips-to-make-a-or-b-equal-to-c-medium.md",tags:[],version:"current",sidebarPosition:1318,frontMatter:{description:"Author: @Recedivies | https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/"},sidebar:"tutorialSidebar",previous:{title:"1001 - 2000",permalink:"/leetcode/solutions/category/1001---2000"},next:{title:"2644 - Find the Maximum Divisibility Score (Easy)",permalink:"/leetcode/solutions/2000/find-the-maximum-divisibility-score-easy"}},m={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Tabs"),s=u("TabItem"),d=u("SolutionAuthor"),b={toc:p},k="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,i.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1318---minimum-flips-to-make-a-or-b-equal-to-c-medium"},"1318 - Minimum Flips to Make a OR b Equal to c (Medium)"),(0,r.kt)("h2",{id:"problem-link"},"Problem Link"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/"},"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/")),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"Given 3 positives numbers ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),". Return the minimum flips required in some bits of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," to make (\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"a")," OR ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," == ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),"\xa0). (bitwise OR operation). Flip operation\xa0consists of change\xa0",(0,r.kt)("strong",{parentName:"p"},"any"),"\xa0single bit 1 to 0 or change the bit 0 to 1\xa0in their binary representation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/01/06/sample_3_1676.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: a = 2, b = 6, c = 5\nOutput: 3\nExplanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: a = 4, b = 2, c = 7\nOutput: 1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 3:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Input: a = 1, b = 2, c = 3\nOutput: 0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= a <= 10^9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= b <= 10^9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1 <= c <= 10^9"))),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(s,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)(d,{name:"@Recedivies",link:"https://github.com/Recedivies",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minFlips(int a, int b, int c) {\n        int ans = 0;\n        for (int i = 0; i <= 30; i++) {\n            bool aa = a & (1<<i) ? 1 : 0;\n            bool bb = b & (1<<i) ? 1 : 0;\n            bool cc = c & (1<<i) ? 1 : 0;\n            if (cc){\n                if (!(aa|bb)) ans++;\n            }\n            if (!cc){\n                if (aa) ans++;\n                if (bb) ans++;\n            }\n        }\n        return ans;\n    }\n};\n")))))}f.isMDXComponent=!0}}]);