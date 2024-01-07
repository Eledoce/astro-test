import{r as u}from"./index.LFf77hJu.js";var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=u,_=Symbol.for("react.element"),d=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,h=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function f(t,r,a){var e,o={},s=null,p=null;a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)m.call(r,e)&&!x.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:_,type:t,key:s,ref:p,props:o,_owner:h.current}}n.Fragment=d;n.jsx=f;n.jsxs=f;i.exports=n;var c=i.exports;function v({children:t,className:r}){return c.jsx("a",{href:"https://api.whatsapp.com/send?phone=527351280629",className:`hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out ${r}`,"aria-label":"whatsapp",children:t})}export{v as default};
