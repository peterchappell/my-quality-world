(this["webpackJsonpmy-quality-world"]=this["webpackJsonpmy-quality-world"]||[]).push([[0],{153:function(e,t,a){e.exports=a(243)},157:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),c=a(26),l=(a(157),a(51)),s=a(30),m=a(13),u=a(289),d=a(282),p=a(304),f=a(18),h=a(117),g=new h.a("MyQualityWorldDb");g.version(1).stores({items:"++id"});var b=g,v=a(132),E=Object(v.a)({palette:{primary:{main:"#404b78"},secondary:{main:"#999999"}}}),y=a(307),w=a(284),x=a(70),j=a.n(x),O=Object(d.a)((function(e){return Object(y.a)({fab:{bottom:e.spacing(9),color:"white",display:"block",position:"fixed",right:e.spacing(2)}})}));function k(){var e=O();return r.a.createElement(c.b,{to:"/new",className:e.fab},r.a.createElement(w.a,{color:"primary","aria-label":"add"},r.a.createElement(j.a,null)))}var C=a(286),N=a(287),I=a(245),S=Object(d.a)((function(){return{toolbar:{justifyContent:"space-between"},siteNameLink:{color:"white",textDecoration:"none","&:hover, &:link, &:visited, &:active":{color:"white"}}}})),B=function(){var e=S();return r.a.createElement(C.a,{position:"static",component:"header"},r.a.createElement(N.a,{className:e.toolbar},r.a.createElement(c.b,{to:"/",className:e.siteNameLink},r.a.createElement(I.a,{variant:"h6",component:"h1"},"My Quality World"))))},W=a(37),A=a(121),H=a.n(A),M=a(122),T=a(46),R=a(294),L=a(124),D=a.n(L),Y=a(125),F=a.n(Y),z=a(293),_=a(290),q=a(292),X=a(291),P=a(123),U=a.n(P),G=a(288),V=[{name:"Survival",shortName:"Survival",key:"physiology",colour:"#0277BD",description:"Basic physiological needs for food, shelter, safety and health."},{name:"Love and Belonging",shortName:"Love",key:"loveAndBelonging",colour:"#EC407A",description:"Relationships, social connections, to give and receive affection and to feel part of a group."},{name:"Power",shortName:"Power",key:"power",colour:"#263238",description:"Achievement, competence and skill, recognition. To be listened to and have a sense of worth."},{name:"Fun",shortName:"Fun",key:"fun",colour:"#FFA000",description:"To find pleasure, to play, to laugh and to learn."},{name:"Freedom",shortName:"Freedom",key:"freedom",colour:"#00C853",description:"Independence, autonomy and choice and to choose your direction in life."}],Q=Object(d.a)((function(e){return{container:{display:"flex",flexDirection:"column-reverse"},chart:{backgroundColor:e.palette.grey[200],borderRadius:"2px",height:"4px",position:"relative"},bar:{borderRadius:"2px",height:"4px",left:0,position:"absolute",top:0}}})),J=function(e){var t=e.item,a=Q(e);return r.a.createElement(G.a,{container:!0,spacing:1},V.map((function(e){return r.a.createElement(G.a,{item:!0,xs:!0,key:"needs_item_values_".concat(e.key),className:a.container},r.a.createElement(I.a,{variant:"caption",component:"p"},e.shortName),r.a.createElement("div",{className:a.chart},r.a.createElement("div",{className:a.background}),r.a.createElement("div",{className:a.bar,style:{backgroundColor:e.colour,width:(n=t[e.key],"".concat(n/5*100,"%"))}})));var n})))},Z=Object(d.a)((function(e){return{itemImage:{width:"100%"},card:{backgroundColor:"#fff",margin:[[e.spacing(2),"auto"]]},untitled:{color:"#999"},editAction:{flexDirection:"row-reverse"}}})),$=function(e){var t=e.item,a=Z(),n=Object(f.f)();return r.a.createElement(u.a,{maxWidth:"sm"},r.a.createElement(_.a,{className:a.card,raised:!0},t.image&&r.a.createElement("img",{src:t.image,alt:"".concat(t.name),className:a.itemImage}),r.a.createElement(X.a,null,r.a.createElement(I.a,{gutterBottom:!0,variant:"subtitle1",component:"h3",className:t.name?"":a.untitled},t.name||"Untitled"),r.a.createElement(J,{item:t})),r.a.createElement(q.a,{className:a.editAction},r.a.createElement(z.a,{size:"small",color:"primary",onClick:function(){var e;e=t.id,n.push("/edit/".concat(e))},startIcon:r.a.createElement(U.a,null)},"Edit"))))},K=Object(d.a)((function(e){return{previousButton:Object(W.a)({background:"rgba(255,255,255,0.7)",borderRadius:"50%",left:0,position:"absolute",top:"100px",zIndex:10},e.breakpoints.up("sm"),{top:"200px"}),nextButton:Object(W.a)({background:"rgba(255,255,255,0.7)",borderRadius:"50%",position:"absolute",right:0,top:"100px",zIndex:10},e.breakpoints.up("sm"),{top:"200px"}),buttonHide:{display:"none"},noCards:{alignItems:"center",display:"flex",flexBasis:"100%",height:"100%",justifyContent:"center",padding:[[0,e.spacing(2),e.spacing(4)]],textAlign:"center"}}})),ee=Object(M.virtualize)(H.a),te=function(e){var t=e.items,a=e.itemIndex,o=K(),i=Object(n.useState)(a),c=Object(m.a)(i,2),l=c[0],s=c[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),p=d[0],f=d[1];return t.length?r.a.createElement("div",null,r.a.createElement(ee,{index:l,onChangeIndex:function(e){s(e)},enableMouseEvents:!0,disabled:t.length<=1,onSwitching:function(){f(!0)},onTransitionEnd:function(){f(!1)},slideRenderer:function(e){var a=e.key,n=e.index;return r.a.createElement($,{key:"card_".concat(a),item:t[Object(T.mod)(n,t.length)]})}}),t.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p?o.buttonHide:o.previousButton},r.a.createElement(R.a,{"aria-label":"Previous",color:"primary",onClick:function(){s(l-1)}},r.a.createElement(D.a,null))),r.a.createElement("div",{className:p?o.buttonHide:o.nextButton},r.a.createElement(R.a,{"aria-label":"Next",color:"primary",onClick:function(){s(l+1)}},r.a.createElement(F.a,null))))):r.a.createElement("div",{className:o.noCards},r.a.createElement(I.a,{variant:"body1",component:"p"},"Your Quality World images will be shown here as cards that you can swipe through..."))},ae=a(128),ne=a.n(ae),re=a(295),oe=a(296),ie=a(126),ce=a.n(ie),le=a(127),se=a.n(le),me=function(e){var t=e.navValue,a=e.navChangeHandler;return r.a.createElement(re.a,{showLabels:!0,component:"nav",value:t},r.a.createElement(oe.a,{component:c.b,to:"/",label:"Home",value:"home",selected:"home"===t,icon:r.a.createElement(ce.a,null),onClick:function(){return a("home")}}),r.a.createElement(oe.a,{component:c.b,to:"/cards",label:"Cards",value:"cards",selected:"cards"===t,icon:r.a.createElement(se.a,null),onClick:function(){return a("cards")}}),r.a.createElement(oe.a,{component:c.b,to:"/map",label:"Map",value:"map",selected:"map"===t,icon:r.a.createElement(ne.a,null),onClick:function(){return a("map")}}))},ue=a(297),de=Object(d.a)((function(e){return{container:{textAlign:"center"},divider:{margin:[[e.spacing(2),"auto"]],maxWidth:"300px"}}})),pe=function(){var e=de();return r.a.createElement("div",{className:e.container},r.a.createElement(I.a,{variant:"body1",component:"p",gutterBottom:!0},"Let's get started by adding some items to your quality world."),r.a.createElement(I.a,{variant:"body1",component:"p",gutterBottom:!0},"You can add as many as you like, but try and start with at least a few."),r.a.createElement(ue.a,{className:e.divider}),r.a.createElement(I.a,{variant:"body1",component:"p",gutterBottom:!0},"Click the big plus button in the bottom corner to add your first item."))},fe=a(306),he=a(298),ge=Object(d.a)((function(e){return{circleContainer:{position:"relative"},background:{color:e.palette.grey["light"===e.palette.type?200:700]},value:{animationDuration:"550ms",position:"absolute",left:0},valueCircle:{strokeLinecap:"round",color:function(e){return e.colour}},outerContainer:{display:"inline-flex"},label:{display:"block",fontSize:function(e){return"mini"===e.type?"0.6rem":"0.75rem"}}}})),be=function(e){var t=e.value,a=e.label,n=(e.colour,e.type),o=e.hideValue,i=ge(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{position:"relative",className:i.outerContainer},r.a.createElement("div",{className:i.circleContainer},r.a.createElement(he.a,{variant:"static",value:100,size:"mini"===n?20:60,thickness:4,className:i.background}),r.a.createElement(he.a,{variant:"static",value:t,size:"mini"===n?20:60,thickness:4,className:i.value,classes:{circle:i.valueCircle}})),!o&&r.a.createElement(fe.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(I.a,{variant:"caption",component:"div",color:"textSecondary"},"".concat(Math.round(t),"%")))),a&&r.a.createElement(I.a,{variant:"caption",className:i.label},a))},ve=function(e,t){var a=Object(l.a)(t);if(!a.length)return 0;var n=5*a.length*10,r=0;return a.forEach((function(t){r+=(t[e]||0)*t.level})),(r=Math.min(r/n*100,100))<0&&(r=0),r},Ee=Object(d.a)((function(e){return{container:Object(W.a)({display:"flex",flexDirection:"column",height:"calc(100% - ".concat(e.spacing(4),"px)"),margin:[[e.spacing(2),"auto"]],textAlign:"center"},e.breakpoints.up("sm"),{justifyContent:"center"}),needsContainer:{margin:[[e.spacing(2),"auto",0]]}}})),ye=function(e){var t=e.items,a=Ee();return r.a.createElement(u.a,{maxWidth:"md",className:a.container},r.a.createElement(I.a,{variant:"h4",component:"h2",gutterBottom:!0},"Welcome"),t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{variant:"body1",component:"p",gutterBottom:!0},"You have",1===t.length?" 1 item ":" ".concat(t.length," items "),"in your quality world."),r.a.createElement(I.a,{variant:"body1",component:"p",gutterBottom:!0},"Here is an overview of how your quality world is meeting your needs."),r.a.createElement("div",{className:a.needsContainer},r.a.createElement(G.a,{container:!0,spacing:3},V.map((function(e){return r.a.createElement(G.a,{item:!0,xs:!0,key:"need_score_".concat(e.key)},r.a.createElement(be,{value:ve(e.key,t),label:e.name,colour:e.colour}))}))))):r.a.createElement(pe,null))},we=a(50),xe=a.n(we),je=a(71),Oe=a(133),ke=a(246),Ce=a(308),Ne=function(e){return new Promise((function(t,a){var n=new Image;n.addEventListener("load",(function(){return t(n)})),n.addEventListener("error",(function(e){return a(e)})),n.src=e}))};function Ie(e){return e*Math.PI/180}function Se(e,t){return Be.apply(this,arguments)}function Be(){return(Be=Object(je.a)(xe.a.mark((function e(t,a){var n,r,o,i,c,l,s,m,u=arguments;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>2&&void 0!==u[2]?u[2]:0,r=u.length>3?u[3]:void 0,e.next=4,Ne(t);case 4:if(o=e.sent,i=document.createElement("canvas"),c=i.getContext("2d"),l=2*Math.max(o.width,o.height),i.width=l,i.height=l,c.translate(l/2,l/2),c.rotate(Ie(n)),c.translate(-l/2,-l/2),c.drawImage(o,l/2-.5*o.width,l/2-.5*o.height),s=c.getImageData(0,0,l,l),i.width=a.width,i.height=a.height,c.putImageData(s,0-l/2+.5*o.width-a.x,0-l/2+.5*o.height-a.y),!r){e.next=26;break}return e.next=21,Ne(i.toDataURL("image/jpeg"));case 21:(m=e.sent).width=r.width,i.width=r.width,i.height=r.width*(1/r.aspect),c.drawImage(m,0,0,800,600);case 26:return e.abrupt("return",i.toDataURL("image/jpeg"));case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var We=Object(d.a)((function(e){return Object(y.a)({fileInput:{display:"none"},upload:{marginTop:e.spacing(1)},uploadContainer:{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:[[e.spacing(2),0]]},cropContainer:{backgroundColor:"#fff",flex:[[1,0,"220px"]],marginTop:e.spacing(1),position:"relative"},zoomControls:{padding:e.spacing(1)},actions:{padding:e.spacing(1)},loadingBackdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})}));function Ae(e){var t=e.saveHandler,a=We(),o=Object(n.useState)(),i=Object(m.a)(o,2),c=i[0],l=i[1],s=Object(n.useState)(),d=Object(m.a)(s,2),p=d[0],f=d[1],h=Object(n.useState)(!1),g=Object(m.a)(h,2),b=g[0],v=g[1],E=Object(n.useState)({x:0,y:0}),y=Object(m.a)(E,2),w=y[0],x=y[1],j=Object(n.useState)(1),O=Object(m.a)(j,2),k=O[0],C=O[1],N=Object(n.useCallback)((function(e,t){f(t)}),[]),S=function(){var e=Object(je.a)(xe.a.mark((function e(){var a;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,Se(c,p,0,{width:800,aspect:4/3});case 3:a=e.sent,v(!1),t(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{maxWidth:"sm"},r.a.createElement("div",{className:a.uploadContainer},!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{variant:"body1",component:"p",gutterBottom:!0},"Select a photo to add to your quality world."),r.a.createElement("label",{htmlFor:"file_upload",className:a.upload},r.a.createElement(z.a,{variant:"contained",color:"primary",component:"span"},"Select Photo"),r.a.createElement("input",{accept:"image/*",className:a.fileInput,id:"file_upload",type:"file",onChange:function(e){var t=new FileReader,a=e.target.files[0];t.onload=function(e){l(e.target.result)},t.readAsDataURL(a)},encType:"multipart/form-data"}))),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(I.a,{variant:"body1",component:"p",gutterBottom:!0},"Now you can crop and move your photo so that it fits nicely in the box.")),r.a.createElement("div",{className:a.cropContainer},r.a.createElement(Oe.a,{image:c,crop:w,zoom:k,aspect:4/3,onCropChange:x,onCropComplete:N,onZoomChange:C})),r.a.createElement("div",{className:a.zoomControls},r.a.createElement(Ce.a,{value:k,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:function(e,t){return C(t)}})),r.a.createElement("div",{className:a.actions},r.a.createElement(z.a,{variant:"contained",color:"primary",onClick:S},"Okay"),r.a.createElement(z.a,{onClick:function(){l(null)}},"Cancel"))))),r.a.createElement(ke.a,{className:a.loadingBackdrop,open:b},r.a.createElement(he.a,{color:"inherit"})))}var He=a(131),Me=a.n(He),Te=a(130),Re=a.n(Te),Le=a(305),De=a(300),Ye=a(301),Fe=a(302),ze=a(299),_e=function(e){var t=e.deleteHandler,a=e.isOpen,n=e.closeHandler;return r.a.createElement(ze.a,{maxWidth:"xs","aria-labelledby":"confirmation-delete-title",open:a,onClose:n},r.a.createElement(De.a,{id:"confirmation-delete-title"},"Delete this item?"),r.a.createElement(Ye.a,{dividers:!0},r.a.createElement(I.a,{variant:"body2",component:"p",gutterBottom:!0},"Are you sure you want to remove this item from your quality world?"),r.a.createElement(I.a,{variant:"body2",component:"p"},"Deleting an item is permanent... But of course, you can always add it back in as a new item. You can do whatever you want. It is your quality world after all.")),r.a.createElement(Fe.a,null,r.a.createElement(z.a,{autoFocus:!0,onClick:n,color:"primary"},"Cancel"),r.a.createElement(z.a,{onClick:t,color:"primary"},"Ok")))},qe=a(129),Xe=a.n(qe),Pe=Object(d.a)((function(){return{sliderGridItem:{display:"flex",alignItems:"center"}}})),Ue=function(e){var t=e.propertyName,a=e.label,n=e.currentValue,o=e.changeHandler,i=e.colour,c=e.description,l=Pe();return r.a.createElement("div",{style:{marginTop:"1em",marginBottom:"1em"}},r.a.createElement(I.a,{id:"strength-".concat(t)},a),r.a.createElement(I.a,{variant:"caption"},c),r.a.createElement(G.a,{container:!0,spacing:2},r.a.createElement(G.a,{item:!0},r.a.createElement(R.a,{"aria-label":"Less",onClick:function(){n>0&&o(t,n-.1)},disabled:n<=0},r.a.createElement(Xe.a,null))),r.a.createElement(G.a,{item:!0,xs:!0,className:l.sliderGridItem},r.a.createElement(Ce.a,{value:n,min:0,max:5,step:.1,onChange:function(e,a){o(t,a)},style:{color:i},"aria-labelledby":"strength-".concat(t)})),r.a.createElement(G.a,{item:!0},r.a.createElement(R.a,{"aria-label":"More",onClick:function(){n<5&&o(t,n+.1)},disabled:n>=5},r.a.createElement(j.a,null)))))},Ge=Object(d.a)((function(e){return Object(y.a)({root:{"& > *":{margin:e.spacing(1)}},field:{width:"100%"},itemImage:{maxWidth:"100%"},container:Object(W.a)({marginBottom:e.spacing(3),marginTop:e.spacing(3),paddingBottom:e.spacing(3),paddingTop:e.spacing(3)},e.breakpoints.down("xs"),{marginBottom:0,marginTop:0,paddingBottom:e.spacing(2),paddingTop:e.spacing(2)}),imageGrid:{marginBottom:e.spacing(2)},actionDivider:{marginTop:e.spacing(2)},actionArea:{display:"flex",justifyContent:"space-between",marginTop:e.spacing(2)},deleteButton:{color:e.palette.error.dark}})})),Ve=function(e){var t=e.saveHandler,a=e.deleteHandler,o=e.item,i=Ge(),c=Object(f.f)(),l=Object(n.useState)(o),d=Object(m.a)(l,2),p=d[0],h=d[1],g=Object(n.useState)(!1),b=Object(m.a)(g,2),v=b[0],E=b[1],y=function(e,t){var a=Object(s.a)({},p);a[e]=t,h(a)};return Object(n.useEffect)((function(){h(o)}),[o]),r.a.createElement(u.a,{maxWidth:"sm",className:i.container},r.a.createElement(G.a,{container:!0,spacing:2,className:i.imageGrid},r.a.createElement(G.a,{item:!0,sm:4,xs:12},o.image&&r.a.createElement("img",{src:o.image,alt:"".concat(o.name),className:i.itemImage})),r.a.createElement(G.a,{item:!0,sm:8,xs:12},r.a.createElement(Le.a,{label:"Item name",value:p.name,onChange:function(e){h(Object(s.a)(Object(s.a)({},p),{},{name:e.target.value}))},className:i.field,placeholder:"Untitled",variant:"outlined"}))),r.a.createElement(I.a,{variant:"body2",component:"p",gutterBottom:!0},"Use the sliders below to indicate how this quality world image satisfies your needs."),V.map((function(e){return r.a.createElement(Ue,{propertyName:e.key,label:e.name,currentValue:p[e.key],changeHandler:y,key:"slider_".concat(e.key),colour:e.colour,description:e.description})})),r.a.createElement(ue.a,{className:i.actionDivider}),r.a.createElement("div",{className:i.actionArea},r.a.createElement(z.a,{onClick:function(){t(p),c.push("/cards")},color:"primary",startIcon:r.a.createElement(Re.a,null),variant:"contained"},"Save"),r.a.createElement(z.a,{size:"small",className:i.deleteButton,onClick:function(){E(!0)},startIcon:r.a.createElement(Me.a,null)},"Delete")),r.a.createElement(_e,{isOpen:v,deleteHandler:function(){a(o.id),c.push("/cards")},closeHandler:function(){E(!1)}}))};Ve.defaultProps={item:{name:"",physiology:0,loveAndBelonging:0,power:0,fun:0,freedom:0,level:0,id:0}};var Qe=Ve,Je=a(28),Ze=function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},$e=function(){var e=Object(n.useState)(Ze()),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=null,t=function(){clearTimeout(e),e=setTimeout((function(){return r(Ze())}),300)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),a},Ke=function(e){var t=e.numItems,a=Object(n.useState)(!1),o=Object(m.a)(a,2),i=o[0],c=o[1],l=function(){c(!1),localStorage.setItem("mqw_maps","true")};return Object(n.useEffect)((function(){c(!localStorage.getItem("mqw_maps"))}),[]),t?r.a.createElement(ze.a,{maxWidth:"xs","aria-labelledby":"instructions-message",open:i,onClose:l},r.a.createElement(Ye.a,null,r.a.createElement(I.a,{variant:"body2",component:"p",gutterBottom:!0},"Move items closer or further away from the centre depending on how big a part they are playing in your life right now."),r.a.createElement(I.a,{variant:"body2",component:"p"},"Tap on the centre icon to show or hide the needs satisfaction charts.")),r.a.createElement(Fe.a,null,r.a.createElement(z.a,{onClick:l,color:"primary"},"Got it"))):null},et=a(303),tt=Object(d.a)((function(e){return{container:{backgroundColor:"#fff",borderRadius:"5px",bottom:"calc(50% + 40px)",boxShadow:e.shadows[6],left:"calc(50% - 136px)",padding:"10px",position:"absolute",textAlign:"center",transform:"translateX(-50%)",width:"250px"},connector:{bottom:"-10px",display:"block",width:0,height:0,borderLeft:"10px solid transparent",borderRight:"10px solid transparent",borderTop:"10px solid #fff",left:"calc(50% - 10px)",position:"absolute"}}})),at=function(e){var t=e.items,a=e.isShowing,n=tt();return r.a.createElement(et.a,{appear:!0,in:a},r.a.createElement("div",{className:n.container},r.a.createElement(G.a,{container:!0,spacing:1},V.map((function(e){return r.a.createElement(G.a,{item:!0,xs:!0,key:"need_score_".concat(e.key)},r.a.createElement(be,{value:ve(e.key,t),colour:e.colour,type:"mini",label:e.shortName,hideValue:!0}))}))),r.a.createElement("div",{className:n.connector})))},nt=Object(d.a)((function(e){return{mapContainer:{display:"flex",height:"100%",width:"100%"},map:{position:"relative"},noItems:{left:0,padding:[[e.spacing(4),e.spacing(2),e.spacing(2)]],position:"absolute",right:0,textAlign:"center"}}})),rt=function(e){var t=e.items,a=e.handleSaveItem,o=nt(),i=Object(n.useRef)(),c=Object(n.useState)(!0),l=Object(m.a)(c,2),u=l[0],d=l[1],p=Object(n.useState)(!0),f=Object(m.a)(p,2),h=f[0],g=f[1],b=Object(n.useState)(300),v=Object(m.a)(b,2),E=v[0],y=v[1],w=Object(n.useState)(300),x=Object(m.a)(w,2),j=x[0],O=x[1],k=Object(n.useState)(1),C=Object(m.a)(k,2),N=C[0],S=C[1],B=Object(n.useState)(1),W=Object(m.a)(B,2),A=W[0],H=W[1],M=Object(n.useState)(1),T=Object(m.a)(M,2),R=T[0],L=T[1],D=$e(),Y=function(e,t){var a=Math.abs(e),n=Math.abs(t),r=100*N,o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2))*N-r,i=Math.sqrt(2*Math.pow(500,2))*N-2*r;return Math.min(10*(1-o/i),10)},F=function(e){var t=e.x,a=e.y;return e.x-50*A<=0?t=50*A:e.x+50*A>=1e3*A&&(t=1e3*A-50*A),e.y-50*R<=0?a=50*R:e.y+50*R>=1e3*R&&(a=1e3*R-50*R),{x:t,y:a}},z=function(e,t){var n=Object(s.a)(Object(s.a)({},e),{},{posX:t.x,posY:t.y,level:Y(t.x,t.y)});a(n)},_=function(){t.length&&d(!u)},q=function(e){u&&g(!e)},X=function(e){var t=document.createElement("img");t.src=e.image;var a=100*e.imageRatio*A,n=function(e){if(e.posX&&e.posY)return{x:e.posX,y:e.posY};var t=Math.random()*Math.PI*2,a={x:300*Math.cos(t),y:300*Math.sin(t)};return z(e,a),a}(e);return r.a.createElement(r.a.Fragment,{key:"map_item_".concat(e.id)},r.a.createElement(Je.Line,{stroke:"#ccc",strokeWidth:2,points:[0,0,n.x,n.y]}),r.a.createElement(Je.Rect,{cornerRadius:4,x:n.x,y:n.y,offset:{x:48,y:a/2-2},width:96,height:a-4,fill:"#ccc",scaleY:1/R}),r.a.createElement(Je.Group,{draggable:!0,dragBoundFunc:F,onDragStart:function(e){!function(e){e.target.children[0].setAttrs({shadowOffset:{x:15,y:15}})}(e),q(!0)},onDragEnd:function(t){!function(e){e.target.children[0].to({duration:.2,shadowOffsetX:5,shadowOffsetY:5})}(t),z(e,{x:t.currentTarget.attrs.x,y:t.currentTarget.attrs.y}),q(!1)},x:n.x,y:n.y,offset:{x:50,y:a/2},width:100,height:a,scaleY:1/R},r.a.createElement(Je.Rect,{shadowColor:"black",shadowBlur:10,shadowOpacity:.3,width:98,height:a-2,fill:"#000",offset:{x:-1,y:-1}}),r.a.createElement(Je.Image,{image:t,width:100,height:a})))};return Object(n.useEffect)((function(){y(i.current.offsetHeight),O(i.current.offsetWidth),S(Math.min(i.current.offsetWidth/1e3,i.current.offsetHeight/1e3)),H(i.current.offsetWidth/1e3),L(i.current.offsetHeight/1e3)}),[D.width,D.height]),r.a.createElement("div",{className:o.mapContainer,ref:i},r.a.createElement(Je.Stage,{height:E,width:j,className:o.map,scaleX:A,scaleY:R},r.a.createElement(Je.Layer,{offsetX:-500,offsetY:-500},t.map((function(e){return X(e)}))),r.a.createElement(Je.Layer,{offsetX:-500,offsetY:-500},r.a.createElement(Je.Circle,{fill:"#fff",radius:100*N/2,x:0,y:0,shadowColor:"black",shadowBlur:10,shadowOpacity:.3,scaleX:1/A,scaleY:1/R}),r.a.createElement(Je.Circle,{fill:"#333",radius:100*N/6,x:0,y:-30*N,scaleX:1/A,scaleY:1/R}),r.a.createElement(Je.Rect,{cornerRadius:2,width:50*N,height:25*N,fill:"#333",scaleX:1/A,scaleY:1/R,x:0,y:10*N,offsetX:25*N}),r.a.createElement(Je.Circle,{fill:"transparent",radius:100*N/2,x:0,y:0,scaleX:1/A,scaleY:1/R,onMouseUp:_,onTap:_}))),r.a.createElement(Ke,{numItems:t.length}),t.length?r.a.createElement(at,{items:t,isShowing:u&&h}):r.a.createElement("div",{className:o.noItems},r.a.createElement(I.a,{variant:"body1",component:"p"},"Your Quality World images will be shown here as items that you can move around and organise...")))},ot=Object(d.a)((function(){return{appContainer:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},mainContainer:{flexBasis:"100%",overflowY:"auto",position:"relative"},loading:{color:E.palette.grey[500],left:0,position:"absolute",right:0,textAlign:"center",top:"30%"}}})),it={name:"",image:null,physiology:0,loveAndBelonging:0,power:0,fun:0,freedom:0,level:5},ct=function(){var e=ot(),t=Object(n.useState)([]),a=Object(m.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(0),d=Object(m.a)(c,2),h=d[0],g=d[1],v=Object(n.useState)(""),y=Object(m.a)(v,2),w=y[0],x=y[1],j=Object(n.useState)(!1),O=Object(m.a)(j,2),C=O[0],N=O[1],I=Object(f.f)(),S=function(e){var t=Object(l.a)(o),a=t.findIndex((function(t){return t.id===e.id}));t[a]=e,i(t),g(a),b.table("items").update(e.id,e)},W=function(e){var t=Object(l.a)(o),a=t.findIndex((function(t){return t.id===e}));t.splice(a,1),i(t),g(0),b.table("items").delete(e)},A=function(){var e=Object(f.g)().itemId,t=o.find((function(t){return t.id===parseInt(e,10)}));return t?r.a.createElement(Qe,{saveHandler:S,deleteHandler:W,item:t}):r.a.createElement("p",null,"That item does not exist...")};return Object(n.useEffect)((function(){b.table("items").toArray().then((function(e){N(!0),i(e)}))}),[]),r.a.createElement(p.a,{theme:E},r.a.createElement("section",{className:e.appContainer},r.a.createElement(B,null),r.a.createElement(u.a,{component:"main",className:e.mainContainer,maxWidth:!1,disableGutters:!0},C?r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/new"},r.a.createElement(Ae,{saveHandler:function(e){var t=Object(s.a)(Object(s.a)({},it),{},{image:e,imageRatio:3/4,name:""});b.table("items").add(t).then((function(e){i([].concat(Object(l.a)(o),[Object(s.a)(Object(s.a)({},t),{},{id:e})])),g(o.length),I.push("/edit/".concat(e))}))}})),r.a.createElement(f.a,{path:"/edit/:itemId"},r.a.createElement(A,null)),r.a.createElement(f.a,{path:"/map"},r.a.createElement(rt,{items:o,handleSaveItem:S}),r.a.createElement(k,null)),r.a.createElement(f.a,{path:"/cards"},r.a.createElement(te,{items:o,itemIndex:h}),r.a.createElement(k,null)),r.a.createElement(f.a,{path:"/"},r.a.createElement(ye,{items:o}),r.a.createElement(k,null))):r.a.createElement("div",{className:e.loading},"Loading...")),r.a.createElement(me,{navValue:w,navChangeHandler:x})))},lt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function st(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{hashType:"noslash"},r.a.createElement(ct,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");lt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):st(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):st(t,e)}))}}()}},[[153,1,2]]]);
//# sourceMappingURL=main.3cb689aa.chunk.js.map