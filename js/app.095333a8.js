(function(){"use strict";var t={3535:function(t,e,a){var r=a(144),o=a(998),s=a(3675),n=a(6190),i=a(4324),l=a(3687),c=a(7953),u=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.Z,[e("div",{staticStyle:{}},[e(s.Z,{staticClass:"px-0",attrs:{elevation:"4",color:"blue-grey darken-2",dark:"",width:""}},[e(c.qW,[e(n.Z,{staticClass:"px-2",attrs:{to:"/",dark:"",text:""}},[e(i.Z,[t._v("mdi-home-outline")]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.sm&&!t.$vuetify.breakpoint.xs,expression:"!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"}],staticClass:"pl-2"},[t._v(" Phil Hüffer ")])],1)],1),e(l.Z),t._l(t.navItems,(function(a){return e("div",{key:a.route},[e(n.Z,{staticClass:"px-2",attrs:{to:a.route,dark:"",text:""}},[e(i.Z,[t._v(t._s(a.icon))]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.sm&&!t.$vuetify.breakpoint.xs,expression:"!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"}],staticClass:"pl-2"},[t._v(" "+t._s(a.name)+" ")])],1)],1)}))],2)],1),e("router-view")],1)},p=[],m=r.ZP.extend({name:"App",data:()=>({navItems:[{route:"/publications",name:"Publications",icon:"mdi-book"},{route:"/cv",name:"Academic Career",icon:"mdi-school-outline"},{route:"/workexperience",name:"Work Experience",icon:"mdi-briefcase-outline"},{route:"/skills",name:"Skills",icon:"mdi-tools"}]})}),d=m,h=a(1001),v=(0,h.Z)(d,u,p,!1,null,null,null),g=v.exports,f=a(8345),y=a(2118),_=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(y.Z,[e("home-page")],1)],1)},Z=[],b=a(8107),x=a(4886),w=a(266),k=a(5808),C=a(4525),P=a(1713),S=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{src:"../assets/Resume picture.png"}},[e(y.Z,[e(P.Z,[e(w.Z,{staticClass:"d-flex flex-shrink-1 flex-grow-1 .align-stretch pr-0",attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"6",xs:"12"}},[e(b.Z,{attrs:{heigth:"100%",width:"100%"}},[e("img",{attrs:{center:"","max-width":"100px",width:"100%",alt:"Avatar",src:a(3377)}}),e(k.Z,[e(C.Z,[e("div",[t._v("Phil Hüffer ("+t._s(t.getAge("2000-04-13"))+")")])]),e(C.Z,[t._v(" M.Sc. Student of Geoinformatics and Spatial Data Science")]),e(x.ZB,[e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker")]),t._v(" Münster, Germany "),e("br"),e(n.Z,{attrs:{icon:"",href:"mailto:phil.hueffer@gmail.com"}},[e(i.Z,[t._v("mdi-email")])],1),e(n.Z,{attrs:{icon:"",href:"https://www.linkedin.com/in/phil-hüffer"}},[e(i.Z,[t._v("mdi-linkedin")])],1),e(n.Z,{attrs:{icon:"",href:"https://www.instagram.com/hufferphil/"}},[e(i.Z,[t._v("mdi-instagram")])],1),e(n.Z,{attrs:{icon:"",href:"https://github.com/phuef/"}},[e(i.Z,[t._v("mdi-github")])],1)],1)],1)],1)],1),e(w.Z,{attrs:{cols:"12",xl:"8",lg:"8",md:"8",sm:"6",xs:"12"}},[e(b.Z,{staticClass:"mb-2"},[e(x.EB,[t._v("About me")]),e(x.ZB,{staticClass:"text-h6"},[t._v("When I was young, I used to be the curious kid that always annoyed people by asking why. Why does this work this way, why can't this be different. If something didn't work the way I wanted it to, I tried to find a way to make it work. Even today I'm still eager to figure out everything and solve problems out there. Let us solve problems together :) ")])],1),e(l.Z),e(b.Z,[e(x.EB,[t._v("My motto")]),e(x.ZB,{staticClass:"text-h6"},[t._v(' "Be the change you want to see" ')])],1)],1)],1)],1)],1)},T=[],B=r.ZP.extend({name:"HomeView",methods:{getAge:function(t){var e=new Date,a=new Date(t),r=e.getFullYear()-a.getFullYear(),o=e.getMonth()-a.getMonth();return(o<0||0===o&&e.getDate()<a.getDate())&&r--,r}}}),H=B,D=(0,h.Z)(H,S,T,!1,null,null,null),j=D.exports,A=r.ZP.extend({name:"home-view",components:{HomePage:j},data(){return{bugClicked:!1}}}),G=A,E=(0,h.Z)(G,_,Z,!1,null,"712a3ed2",null),M=E.exports,I=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"about"},[e("about-page")],1)},R=[],W=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"about"},[t._v(" todo ")])},O=[],N=r.ZP.extend({name:"AboutPage"}),L=N,q=(0,h.Z)(L,W,O,!1,null,null,null),F=q.exports,z=r.ZP.extend({name:"about-view",components:{AboutPage:F}}),$=z,U=(0,h.Z)($,I,R,!1,null,null,null),V=U.exports,J=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"me"},[e("me-page")],1)},K=[],Q=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t._v(" Welcome on the Me page ")])},X=[],Y=r.ZP.extend({name:"MePage"}),tt=Y,et=(0,h.Z)(tt,Q,X,!1,null,null,null),at=et.exports,rt=r.ZP.extend({name:"me-view",components:{MePage:at}}),ot=rt,st=(0,h.Z)(ot,J,K,!1,null,null,null),nt=st.exports,it=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"random-picture"},[e("random-picture-page")],1)},lt=[],ct=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(y.Z,[e("h3",{attrs:{"text-align":"center"}},[t._v("Click on the picture to get another picture")]),e("img",{staticClass:"picsumpicture",attrs:{src:"https://picsum.photos/800/500",onclick:"location.reload()"}})])],1)},ut=[],pt=r.ZP.extend({name:"RandomPicturePage"}),mt=pt,dt=(0,h.Z)(mt,ct,ut,!1,null,null,null),ht=dt.exports,vt=r.ZP.extend({name:"random-picture-view",components:{RandomPicturePage:ht}}),gt=vt,ft=(0,h.Z)(gt,it,lt,!1,null,null,null),yt=ft.exports,_t=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"dicover"},[e("discover-page")],1)},Zt=[],bt=a(9654),xt=a(6760),wt=a(9223),kt=a(5495),Ct=a(7423),Pt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"discover"},[e(y.Z,[e(P.Z,[e(w.Z,{attrs:{cols:"6"}},[e(b.Z,[e(x.EB,[t._v("Congrats on finding this secret page!")]),e(x.ZB,[t._v("It bugs me a bit that it was this easy for you to find this page. Here you can find different stuff, e.g. my favorite music and projects. Have fun exploring :) ")])],1)],1),e(bt.Z,{model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[e(xt.Z,{staticClass:"catHeadphonesCursor"},[e(Ct.Z,{attrs:{color:"cyan darken-3",height:"100%",tile:""}},[e(y.Z,{attrs:{cyan:"","lighten-3":""}},[e(P.Z,[e(w.Z,{attrs:{cols:"12"}},[e("div",{staticClass:"text-h2",attrs:{align:"center"}},[t._v("some of my favorite playlists:")])]),e(b.Z,{attrs:{cols:"2",color:"cyan lighten-2"}},[e(x.EB,[e("a",{attrs:{href:"https://open.spotify.com/playlist/6W0bXilSfcpwPhFXaAUPWo?si=73eb4f7532694a8b",target:"_blank"}},[t._v("All time favorites")])]),e(x.Qq,[t._v("Songs I can listen to no matter the location or occasion.")])],1),e(b.Z,{attrs:{cols:"2",color:"cyan lighten-1"}},[e(x.EB,[e("a",{attrs:{href:"https://open.spotify.com/playlist/4z7zV4bahNaXcq2mBlvmaO?si=ebdbfc6701db44d8"}},[t._v(" Sounddesign")])]),e(x.Qq,[t._v(" Songs with an interesting sounddesign. ")])],1),e(b.Z,{attrs:{cols:"2",color:"cyan"}},[e(x.EB,[e("a",{attrs:{href:"https://open.spotify.com/playlist/5qEXYNSb8plAK1JyYzwUwR?si=0b4933d2a0ee4226",target:"_blank"}},[t._v("Endance")])]),e(x.Qq,[t._v(" To enhance your mood and make you dance")])],1)],1)],1)],1)],1),t._e(),e(xt.Z,[e(Ct.Z,{attrs:{color:"light-green darken-3",height:"100%",tile:""}},[e(P.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e(w.Z,[e("div",{staticClass:"text-h2",attrs:{align:"center"}},[e(kt.Z,{attrs:{height:"100px",width:"100px",src:a(7386)}}),t._v(" "),e("a",{attrs:{red:"",href:"https://rad-oder-regen.netlify.app/"}},[t._v(" Rad oder Regen?")])],1),t._v(" "),e("br"),e(wt.Z),t._v(" "),e("br"),e("div",{staticClass:"text-h4",attrs:{align:"center"}},[t._v(" A project developed during the two-day "),e("i",[t._v("ifgihack 2022")]),t._v(" (a Hackathon from ifgi). ")])],1)],1)],1)],1),e(xt.Z,[e(Ct.Z,{attrs:{color:"cyan darken-3",height:"100%",tile:""}},[e(P.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e(w.Z,[e("div",{staticClass:"text-h2",attrs:{align:"center"}},[t._v(" To be continued... ")])])],1)],1)],1)],1)],1)],1)],1)},St=[],Tt=r.ZP.extend({components:{RandomPicturePage:ht},name:"DiscoverPage",data(){return{model:0,colors:["cyan darken-3","deep-orange lighten-3"]}}}),Bt=Tt,Ht=(0,h.Z)(Bt,Pt,St,!1,null,null,null),Dt=Ht.exports,jt=r.ZP.extend({name:"discover-view",components:{DiscoverPage:Dt}}),At=jt,Gt=(0,h.Z)(At,_t,Zt,!1,null,null,null),Et=Gt.exports,Mt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"cv"},[e("c-v-page")],1)},It=[],Rt=a(3423),Wt=a(8893),Ot=a(2082),Nt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"cv"},[e(Wt.Z,{attrs:{"align-top":"",dense:""}},[e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e(kt.Z,{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=RaisedExcitedNatural&mouthType=ScreamOpen&skinColor=Pale"}})],1)]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("13th April 2000")])]),e(w.Z,[e("strong",[t._v("Birth")]),t._v(" "),e(i.Z,[t._v("mdi-cake")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-message-outline")]),e("i",[t._v(' "wow he has big feet"')]),t._v(" - midwife quote, right after my birth "),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),t._v(" Gütersloh ")],1)],1)],1)],1),e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Disbelief&skinColor=Pale"}})])]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("2006 - 2009")])]),e(w.Z,[e("strong",[t._v("Elementary School")]),t._v(" "),e(i.Z,[t._v("mdi-school")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-message-outline")]),e("i",[t._v(' "poet and thinker"')]),t._v(" - my class teacher's prediction of what I become "),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),e("a",{attrs:{href:"https://brueder-grimm-schule-wd.de/"}},[t._v("Brüdergrimmschule")]),t._v(", Rheda-Wiedenbrück ")],1)],1)],1)],1),e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"}})])]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("2009 - 2017")])]),e(w.Z,[e("strong",[t._v("High School")]),t._v(" "),e(i.Z,[t._v("mdi-school")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-notebook-multiple")]),e("i",[t._v(" Math, Geography, Informatics and German")]),t._v(" - my graduation subjects"),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),e("a",{attrs:{href:"https://www.ratsgymnasium.com/"}},[t._v("Ratsgymnasium")]),t._v(", Rheda-Wiedenbrück ")],1)],1)],1)],1),e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"}})])]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("2017 - 2022")])]),e(w.Z,[e("strong",[t._v("B.Sc. in Geoinformatics")]),t._v(" "),e(i.Z,[t._v("mdi-school")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-notebook-multiple")]),e("i",[t._v(" A search engine for web-based interactive visualizations")]),t._v(" - the topic of my bachelor thesis "),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-information")]),e("a",{attrs:{href:"https://bachelor-geoinformatik.de/"}},[t._v(" more information")]),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),t._v(" University Münster ")],1)],1)],1)],1),e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"}})])]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("2022 - today")])]),e(w.Z,[e("strong",[t._v("M.Sc. in Geoinformatics and Spatial Data Science")]),e(i.Z,[t._v("mdi-school-outline")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-information")]),e("a",{attrs:{href:"https://master-geoinformatics.com/"}},[t._v(" more information")]),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),t._v(" University Münster ")],1)],1)],1)],1),e(Ot.Z,{scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"}})])]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("2023")])]),e(w.Z,[e("strong",[t._v("First paper publication")]),e(i.Z,[t._v("mdi-book")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-information")]),e("a",{attrs:{href:"/publications"}},[t._v(" more information")])],1)],1)],1)],1)],1)],1)},Lt=[],qt=r.ZP.extend({name:"CVPage"}),Ft=qt,zt=(0,h.Z)(Ft,Nt,Lt,!1,null,null,null),$t=zt.exports,Ut=r.ZP.extend({name:"c-v-view",components:{CVPage:$t}}),Vt=Ut,Jt=(0,h.Z)(Vt,Mt,It,!1,null,null,null),Kt=Jt.exports,Qt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"workexperience"},[e("work-experience-page")],1)},Xt=[],Yt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"cv"},[e(Wt.Z,{attrs:{"align-top":"",dense:""}},[e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e("img",{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"}})])]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("two weeks during 9th class")])]),e(w.Z,[e("strong",[t._v("Internship ")]),t._v("at district administration of geoinformation, cadastre and surveying "),e(i.Z,[t._v("mdi-city")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-information-outline")]),t._v(" Assistance in various areas. E.g. field work with surveyors and working with GIS programs. "),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),e("a",{attrs:{href:"https://www.kreis-guetersloh.de/themen/geoinformation-kataster-und-vermessung/"}},[t._v(" Kreisverwaltung Gütersloh")]),t._v(", Gütersloh ")],1)],1)],1)],1),e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e(kt.Z,{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"}})],1)]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("08.2018 - 09.2018")])]),e(w.Z,[e("strong",[t._v("Factory Worker")]),t._v(" "),e(i.Z,[t._v("mdi-factory")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-information-outline")]),t._v(" Doing supporting work in a factory, during my semester break. "),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),e("a",{attrs:{href:"https://www.nielsen-design.de/"}},[t._v(" Nielsen Design GmbH")]),t._v(", Rheda-Wiedenbrück ")],1)],1)],1)],1),e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e(kt.Z,{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"}})],1)]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("05.2019 - 04.2022")])]),e(w.Z,[e("strong",[t._v("Student Assistant ")]),t._v("as software developer "),e(i.Z,[t._v("mdi-code-not-equal-variant")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-information-outline")]),t._v(" Assisting in scrum-based projects with the main activity of a software developer. Developing features and adjusting already existing ones for customers. As well as presenting the developed results for the customers."),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-code-tags")]),t._v(" JavaScript/TypeScript, Vuejs, HTML, CSS "),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-information-outline")]),t._v(" Using and developing components for map.apps, which is built on the ArcGIS API for JavaScript. "),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),e("a",{attrs:{href:"https://www.con-terra.com/"}},[t._v("con terra GmbH")]),t._v(", Münster ")],1)],1)],1)],1),e(Ot.Z,{attrs:{color:"blue"},scopedSlots:t._u([{key:"icon",fn:function(){return[e(Rt.Z,[e(kt.Z,{attrs:{src:"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Gray02&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale"}})],1)]},proxy:!0}])},[e(P.Z,{staticClass:"pt-1"},[e(w.Z,{attrs:{cols:"3"}},[e("strong",[t._v("05.2023 - 09.2023")])]),e(w.Z,[e("strong",[t._v("Tutor ")]),t._v("for the lecture geosoftware "),e(i.Z,[t._v("mdi-account-group")]),e("div",{staticClass:"text-caption mb-2"},[e(i.Z,{attrs:{small:""}},[t._v("mdi-information-outline")]),t._v(" Correcting and evaluating students' submissions, as well as advising and assisting them"),e("br"),e(i.Z,{attrs:{small:""}},[t._v("mdi-map-marker-outline")]),e("a",{attrs:{href:"https://www.uni-muenster.de/en/"}},[t._v("University Münster")]),t._v(", Münster ")],1)],1)],1)],1)],1)],1)},te=[],ee=r.ZP.extend({name:"WorkExperiencePage"}),ae=ee,re=(0,h.Z)(ae,Yt,te,!1,null,null,null),oe=re.exports,se=r.ZP.extend({name:"work-experience-view",components:{WorkExperiencePage:oe}}),ne=se,ie=(0,h.Z)(ne,Qt,Xt,!1,null,null,null),le=ie.exports,ce=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"skills"},[e("skills-page")],1)},ue=[],pe=a(4127),me=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(y.Z,[e(P.Z,[e(w.Z,{attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"6",xs:"12"}},[e(b.Z,{attrs:{color:"grey lighten-4"}},[e(x.EB,[t._v("Programming:")]),t._l(t.programmingLanguages,(function(a,r){return e(pe.Z,{key:r,staticClass:"ma-2",attrs:{outlined:"",color:a.color,"text-color":a.color,label:""}},[e(i.Z,{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "+t._s(a.name)+" ")],1)}))],2)],1),e(w.Z,{attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"6",xs:"12"}},[e(b.Z,{attrs:{color:"green lighten-5"}},[e(x.EB,[t._v("Human languages:")]),t._l(t.humanLanguages,(function(a,r){return e("div",{key:r},[e(pe.Z,{staticClass:"ma-2",attrs:{color:a.color,label:"","text-color":a.text}},[e("strong",[t._v(t._s(a.name))]),t._v(": "+t._s(a.level)+" ")])],1)}))],2)],1),e(w.Z,{attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"6",xs:"12"}},[e(b.Z,{attrs:{color:"cyan lighten-5"}},[e(x.EB,[t._v("Working in Projects:")]),t._l(t.projectManaging,(function(a,r){return e(pe.Z,{key:r,staticClass:"ma-2",attrs:{color:a.color,label:"","text-color":"white"}},[e(i.Z,{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "+t._s(a.name)+" ")],1)}))],2)],1),e(w.Z,{attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"6",xs:"12"}},[e(b.Z,{attrs:{color:"grey lighten-4",height:"100%"}},[e(x.EB,[t._v("Analytical:")]),t._l(t.analyticals,(function(a,r){return e(pe.Z,{key:r,staticClass:"ma-2",attrs:{outlined:"",color:a.color,label:""}},[e(i.Z,{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "+t._s(a.name)+" ")],1)}))],2)],1),e(w.Z,{attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"6",xs:"12"}},[e(b.Z,{attrs:{color:"indigo lighten-5"}},[e(x.EB,[t._v("Uncategorised:")]),t._l(t.uncategoriseds,(function(a,r){return e(pe.Z,{key:r,staticClass:"ma-2",attrs:{color:a.color,label:"","text-color":"white"}},[e(i.Z,{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "+t._s(a.name)+" ")],1)}))],2)],1),e(w.Z,{attrs:{cols:"12",xl:"2",lg:"3",md:"3",sm:"6",xs:"12"}},[e(b.Z,{attrs:{color:"teal lighten-5"}},[e(x.EB,[t._v("Other:")]),t._l(t.others,(function(a,r){return e(pe.Z,{key:r,staticClass:"ma-2",attrs:{color:a.color,label:"","text-color":"white"}},[e(i.Z,{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v(" "+t._s(a.name)+" ")],1)})),e(x.Qq,[t._v("to be continued, because I'm always eager to learn new skills")])],2)],1)],1)],1)},de=[],he=r.ZP.extend({name:"SkillsPage",data(){return{programmingLanguages:[{name:"javascript",color:"green",icon:"mdi-language-javascript"},{name:"typescript",color:"blue",icon:"mdi-language-typescript"},{name:"python",color:"pink",icon:"mdi-snake"},{name:"R",color:"red",icon:"mdi-alpha-r"},{name:"java",color:"grey",icon:"mdi-language-java"},{name:"html",color:"orange",icon:"mdi-language-html5"},{name:"css",color:"blue",icon:"mdi-language-css3"},{name:"sql",color:"purple",icon:"mdi-database"}],humanLanguages:[{name:"german",level:"mother tongue",color:"orange lighten-2",text:"white"},{name:"english",level:"fluent",color:"red lighten-2",text:"white"},{name:"dutch",level:"basics",color:"blue lighten-2",text:"white"}],projectManaging:[{name:"git",color:"cyan darken",icon:"mdi-git"},{name:"github",color:"cyan darken-1",icon:"mdi-github"},{name:"scrum",color:"cyan darken-2",icon:"mdi-sync-alert"},{name:"continuous development",color:"cyan darken-3",icon:"mdi-autorenew"},{name:"teamplayer",color:"cyan darken-4",icon:"mdi-account-group"}],analyticals:[{name:"critical thinking",color:"",icon:"mdi-head-dots-horizontal-outline"},{name:"data analysis",color:"",icon:"mdi-database-search-outline"},{name:"(geo)statistics",color:"",icon:"mdi-chart-bar-stacked"},{name:"problem solving",color:"",icon:"mdi-lightbulb-outline"}],others:[{name:"drivers license (B1)",color:"teal darken-3",icon:"mdi-car"},{name:"music production",color:"teal darken-3",icon:"mdi-music"},{name:"video editing",color:"teal darken-3",icon:"mdi-movie-open-edit"},{name:"",color:"",icon:"mdi-"}],uncategoriseds:[{name:"Machine learning",color:"indigo darken-3",icon:"mdi-state-machine"},{name:"Spatial optimisation",color:"indigo darken-3",icon:"mdi-vector-selection"},{name:"Remote sensing",color:"indigo darken-3",icon:"mdi-satellite"},{name:"",color:"",icon:"mdi-"}]}}}),ve=he,ge=(0,h.Z)(ve,me,de,!1,null,null,null),fe=ge.exports,ye=r.ZP.extend({name:"skills-view",components:{SkillsPage:fe}}),_e=ye,Ze=(0,h.Z)(_e,ce,ue,!1,null,null,null),be=Ze.exports,xe=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"projects"},[e("projects-page")],1)},we=[],ke=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"projects"},[e(y.Z,[e(bt.Z,{attrs:{"show-arrows-on-hover":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[t._e(),e(xt.Z,[e(Ct.Z,{attrs:{color:"#313641",height:"100%",tile:""}},[e(P.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e(w.Z,[e("div",{staticClass:"text-h2 mb-2",attrs:{align:"center"}},[e("p",{staticClass:"grey--text"},[t._v("Find your Spot")])]),e("br"),e(wt.Z,{attrs:{color:"grey"}}),t._v(" "),e("br"),e("div",{staticClass:"text-h4 grey mb-4",attrs:{align:"center","text-color":"white"}},[t._v(" A webapp that helps citizens of Münster find their spot in the city. ")]),e(wt.Z),e("div",{staticClass:"text-h5 grey--text",attrs:{align:"center"}},[t._v(" Developed in a course during my masters studies "),e(n.Z,{attrs:{icon:"",href:"https://github.com/phuef/Geoinformation-in-Society-22"}},[e(i.Z,{attrs:{color:"grey"}},[t._v("mdi-github")])],1)],1)],1)],1)],1)],1),e(xt.Z,[e(Ct.Z,{attrs:{color:"yellow lighten-4",height:"100%",tile:""}},[e(P.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e(w.Z,[e("div",{staticClass:"text-h2 mb-2",attrs:{align:"center"}},[e("p",{staticClass:"yellow--text text--darken-3"},[t._v(" Reality as a basemap ")])]),e("br"),e(wt.Z,{staticClass:"yellow darken-3"}),t._v(" "),e("br"),e("div",{staticClass:"text-h4 yellow darken-3 mb-4",attrs:{align:"center","text-color":"white"}},[t._v(" Implementation of typical basemap features and functionalities, in augmented reality (AR). ")]),e("div",{staticClass:"text-h5 yellow--text text--darken-3",attrs:{align:"center"}},[t._v(" During a study project during my bachelor "),e(n.Z,{attrs:{icon:"",href:"https://github.com/phuef/reality-as-a-basemap"}},[e(i.Z,{attrs:{color:"yellow darken-3"}},[t._v("mdi-github")])],1)],1)],1)],1)],1)],1),e(xt.Z,[e(Ct.Z,{attrs:{color:"teal darken-3",height:"100%",tile:""}},[e(P.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e(w.Z,[e("div",{staticClass:"text-h2 mb-2",attrs:{align:"center"}},[e("a",{staticClass:"deep-purple--text text--lighten-3",attrs:{href:"https://rad-oder-regen.netlify.app/"}},[t._v(" Rad oder Regen?")])]),e("br"),e(wt.Z,{staticClass:"deep-purple lighten-3"}),e("br"),e("div",{staticClass:"text-h4 deep-purple lighten-3 mb-4 teal--text darken-3--text",attrs:{align:"center"}},[t._v(" A website that tells you whether you should take the bike or not, with random creative sayings ")]),e("div",{staticClass:"text-h5 deep-purple--text text--lighten-3",attrs:{align:"center"}},[t._v(" A project developed during the two-day "),e("i",[t._v("ifgihack 2022")]),t._v(" (a Hackathon from ifgi). ")])],1)],1)],1)],1),e(xt.Z,[e(Ct.Z,{attrs:{color:"cyan darken-3",height:"100%",tile:""}},[e(P.Z,{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e(w.Z,[e("div",{staticClass:"text-h2",attrs:{align:"center"}},[t._v("To be continued...")])])],1)],1)],1)],1)],1)],1)},Ce=[],Pe=r.ZP.extend({name:"ProjectsPage",data(){return{model:0,colors:["cyan darken-3","deep-orange lighten-3"]}}}),Se=Pe,Te=(0,h.Z)(Se,ke,Ce,!1,null,null,null),Be=Te.exports,He=r.ZP.extend({name:"projects-view",components:{ProjectsPage:Be}}),De=He,je=(0,h.Z)(De,xe,we,!1,null,null,null),Ae=je.exports,Ge=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("three-d-page")],1)},Ee=[],Me=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("canvas",{ref:"experie nce"})},Ie=[],Re=a(9477),We=r.ZP.extend({name:"ThreeDPage",mounted(){const t=(0,r.iH)(null),e=new Re.cPb(70,window.innerWidth/window.innerHeight,.01,10);e.position.z=1;const a=new Re.xsS,o=new Re.DvJ(.2,.2,.2),s=new Re.RSm,n=new Re.Kj0(o,s);a.add(n);const i=new Re.CP7({canvas:t.value,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.render(a,e)}}),Oe=We,Ne=(0,h.Z)(Oe,Me,Ie,!1,null,null,null),Le=Ne.exports,qe=r.ZP.extend({name:"three-d-view",components:{threeDPage:Le}}),Fe=qe,ze=(0,h.Z)(Fe,Ge,Ee,!1,null,null,null),$e=ze.exports,Ue=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"publications"},[e("publications-page")],1)},Ve=[],Je=a(8266),Ke=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"publications"},[e(y.Z,[e(C.Z,{attrs:{"two-line":""}},[e(Je.km,[e(Je.V9,{staticClass:"text-wrap"},[t._v("Designing Search Engines for Interactive Web-based Geovisualizations (2023) ")]),e(Je.oZ,{staticClass:"text-wrap"},[e("strong",[t._v("Hüffer, P.")]),t._v(", Degbelo, A., and Koukouraki, E.: AGILE GIScience Ser., 4, 27, "),e("a",{attrs:{href:"https://doi.org/10.5194/agile-giss-4-27-2023"}},[t._v("https://doi.org/10.5194/agile-giss-4-27-2023")])])],1)],1)],1)],1)},Qe=[],Xe=r.ZP.extend({name:"PublicationsPage"}),Ye=Xe,ta=(0,h.Z)(Ye,Ke,Qe,!1,null,null,null),ea=ta.exports,aa=r.ZP.extend({name:"publications-view",components:{PublicationsPage:ea}}),ra=aa,oa=(0,h.Z)(ra,Ue,Ve,!1,null,null,null),sa=oa.exports;r.ZP.use(f.ZP);const na=[{path:"/",name:"home-view",component:M},{path:"/home",redirect:"/"},{path:"/about",name:"about-view",component:V},{path:"/me",name:"me-view",component:nt},{path:"/randompicture",name:"random-picture-view",component:yt},{path:"/discover",name:"discover-view",component:Et},{path:"/cv",name:"c-v-view",component:Kt},{path:"/workexperience",name:"work-experience-view",component:le},{path:"/publications",name:"publlications-view",component:sa},{path:"/skills",name:"skills-view",component:be},{path:"/projects",name:"projects-view",component:Ae},{path:"/3d",name:"three-d-view",component:$e}],ia=new f.ZP({mode:"history",base:"/",routes:na});var la=ia,ca=a(8864);r.ZP.use(ca.Z);var ua=new ca.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:la,vuetify:ua,render:t=>t(g)}).$mount("#app")},3377:function(t,e,a){t.exports=a.p+"img/Resume picture.1a9699f4.png"},7386:function(t,e,a){t.exports=a.p+"img/rad_oder_regen_logo.13d65544.png"}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,s){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],s=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(i=!1,s<n&&(n=s));if(i){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,s,n=r[0],i=r[1],l=r[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var u=l(a)}for(e&&e(r);c<n.length;c++)s=n[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},r=self["webpackChunkmain"]=self["webpackChunkmain"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3535)}));r=a.O(r)})();
//# sourceMappingURL=app.095333a8.js.map