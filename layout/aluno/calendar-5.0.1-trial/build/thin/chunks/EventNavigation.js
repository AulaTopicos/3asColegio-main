/*!
 *
 * Bryntum Calendar 5.0.1 (TRIAL VERSION)
 *
 * Copyright(c) 2022 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(y,w){function W(y,w){return c(w-0x3b0,y);}const B=y();while(!![]){try{const l=-parseInt(W(0x620,0x6b9))/0x1*(-parseInt(W(0x548,0x5e6))/0x2)+parseInt(W(0x774,0x6b1))/0x3*(-parseInt(W(0x5be,0x596))/0x4)+parseInt(W(0x560,0x59b))/0x5*(-parseInt(W(0x5d3,0x66d))/0x6)+-parseInt(W(0x54d,0x60a))/0x7+parseInt(W(0x65e,0x668))/0x8+-parseInt(W(0x77d,0x6f0))/0x9+-parseInt(W(0x664,0x659))/0xa*(-parseInt(W(0x601,0x58c))/0xb);if(l===w)break;else B['push'](B['shift']());}catch(f){B['push'](B['shift']());}}}(U,0x65d18));import{Base,StringHelper,_objectSpread2,DateHelper,ContextMenuBase,Popup,DomHelper,Objects,ObjectHelper,LocaleHelper,LocaleManagerSingleton,Delayable,Navigator}from'./Editor.js';import{ProjectModel}from'./ProjectModel.js';import{GridFeatureManager,locale as A,Location}from'./GridBase.js';var ProjectConsumer=y=>class w extends(y||Base){static get[x(-0x1b4,-0x126)](){return'ProjectConsumer';}static get['declarable'](){return['projectStores'];}static get[x(-0xf4,-0x106)](){return{'projectModelClass':ProjectModel,'project':{},'destroyStores':null,'projectSubscribers':[]};}[x(0x8f,-0x33)](B){function g(y,w){return x(w,y-0x5f8);}this[g(0x5d6,0x57d)](g(0x562,0x621)),super[g(0x5c5,0x62e)](B);}['changeProject'](B,l){function Z(y,w){return x(w,y-0x4db);}const f=this,{projectStoreNames:q,projectDataNames:M}=f[Z(0x411,0x3ed)];f[Z(0x461,0x510)]=new Set();if(B){f[Z(0x3fe,0x4ab)]=!![];if(!B[Z(0x38b,0x375)]){if(f[Z(0x43f,0x46f)]){f[Z(0x470,0x43a)]=B;const {crudManager:p}=f;if(p){const {isCrudManager:I}=p;for(const P of q){p[P]&&(f[P]=p[P],!I&&delete p[P]);}}f[Z(0x4b9,0x519)](Z(0x369,0x2f6));for(const S of M){f[Z(0x4b9,0x552)](S);}}const {eventStore:E}=B;E&&!E[Z(0x380,0x36a)]&&E[Z(0x3de,0x3c6)]&&!E[Z(0x34c,0x3b3)]&&(E[Z(0x3de,0x455)]=![],f[Z(0x3e8,0x379)]=!![]),B=f['_sharedProject']||new f[(Z(0x421,0x411))](B),delete f[Z(0x470,0x3ba)];}f[Z(0x3fe,0x4b1)]=![];}return B;}[x(-0x126,-0x199)](B,l){const f=this,{projectListeners:q,crudManager:M}=f;f[K(-0xe1,-0x12b)](K(-0x86,-0x116)),delete f['_crudManager'];if(B){q['thisObj']=f,B['on'](q);if(B[K(-0xd9,-0xe2)])f[K(-0xb2,-0x34)]=B;else M&&(M[K(0x39,-0x3a)]=B,f['crudManager']=M);f[K(-0x2,-0x64)]['forEach'](E=>E[K(-0xe3,-0x10d)](B));for(const E of f[K(0x5,0xd)]['projectStoreNames']){f[E]=B[E];}f[K(-0x24,-0x90)]&&(B[K(0x9,0x12)][K(-0x2e,-0x56)]=!![],B[K(0x9,0x56)][K(-0xb1,-0x16d)]());}function K(y,w){return x(w,y-0xcf);}f[K(0x54,0xfa)]('projectChange',{'project':B});}['changeCrudManager'](B){function a(y,w){return x(y,w-0x2d8);}if(this[a(0x2a2,0x1fb)])this['_crudManager']=B[a(0x16e,0x130)]?B:Object['assign']({},B);else return super['changeCrudManager'](B);}[x(-0x6b,-0xf1)](){function F(y,w){return x(w,y-0x12a);}this['projectCallbacks'][F(0xe2,0x114)]&&(this['projectCallbacks'][F(0xde,0x1a5)](B=>B()),this[F(0xb0,0x7a)][F(0xb8,0x10d)]());}[x(-0x1fb,-0x19d)](B){function e(y,w){return x(w,y-0xba);}this['isEngineReady']?B():this[e(0x40,-0x5a)][e(0x91,0x8b)](B);}get[x(0x25,-0x84)](){function D(y,w){return x(w,y-0x6a2);}var B,l;return Boolean((B=(l=this[D(0x60c,0x612)])[D(0x61e,0x57e)])===null||B===void 0x0?void 0x0:B[D(0x5f4,0x5e4)](l));}['doDestroy'](){function m(y,w){return x(y,w-0x187);}super[m(0x101,0x7f)](),this['destroyStores']&&(!this[m(0xcf,0xf1)][m(0x8a,0x13e)]&&this['project'][m(0x103,0x66)]());}get[x(-0xe7,-0x172)](){const {projectStoreNames:B}=this[h(0x50a,0x5c5)];function h(y,w){return x(y,w-0x68f);}return B[h(0x4d7,0x509)](l=>this[l]);}static get[x(-0x70,-0x87)](){function u(y,w){return x(y,w-0x13);}return Object[u(-0x68,-0xf6)](this[u(-0xfb,-0x15f)]);}static get['projectDataNames'](){function G(y,w){return x(y,w-0x3fb);}return this[G(0x32f,0x374)][G(0x376,0x398)]((B,l)=>{function s(y,w){return G(w,y-0x17f);}const {dataName:f}=this[s(0x408,0x345)][l];return f&&B[s(0x431,0x370)](f),B;},[]);}static[x(-0x123,-0x13f)](B,l){const {projectStores:f}=B;function C(y,w){return x(y,w-0x415);}if(f){const q={'name':C(0x35e,0x2c0),'dataReady':C(0x2f6,0x324),'change':C(0x351,0x3e4)},M={'projectListeners':q};for(const E in f){const {dataName:p}=f[E];M[E]=null,p&&Object[C(0x2b4,0x2da)](l[C(0x341,0x3dd)][C(0x372,0x2ea)],p,{'get'(){var I;return(I=this['project'][E])===null||I===void 0x0?void 0x0:I['records'];},'set'(I){const {project:P}=this;function t(y,w){return C(y,w- -0x1c2);}this[t(0x14c,0x176)]?P[p+t(0x96,0xe3)]=I:P[E]['data']=I;}}),this[C(0x467,0x3ce)](l,E,f[E],q);}this[C(0x47b,0x3e0)](l,M);}}static[x(-0xd4,-0x47)](B,l,{listeners:f},q){const {prototype:M}=B['class'],E=StringHelper[N(-0x1f3,-0x14a)](l);q[l+N(-0x110,-0xa3)]=function({store:p}){this[l]=p;};function N(y,w){return x(y,w-0x5);}M[N(-0xa5,-0x65)+E]=function(p,I){var P;const S=this,{project:L}=S,X=(P=p)===null||P===void 0x0?void 0x0:P['project'];function j(y,w){return N(w,y-0x40);}if(S['buildingProjectConfig']){X&&X[j(-0xc,0xb1)]&&(S[j(-0x4d,0x48)]=X);L[l]=p;return;}return!S['initializingProject']&&(L[l]!==p&&(L[j(0x0,-0xc4)+E](p),p=L[l])),p!==I&&(f&&(f['thisObj']=S,f[j(-0xd8,-0xec)]=l+j(0x8,0x68),S[j(-0x16b,-0x13e)](f['name']),p['on'](f)),S[j(-0x8c,-0xb7)][j(-0x7,-0x2b)](J=>{var R;function H(y,w){return j(y-0x109,w);}(R=J[H(0x73,0x8f)+E])===null||R===void 0x0?void 0x0:R[H(0xa0,0x64)](J,p);})),p;};}[x(-0xa7,-0x31)](B){function T(y,w){return x(w,y- -0x16);}return this[T(-0x91,0x20)]('dataChange',_objectSpread2(_objectSpread2({'project':B[T(-0x127,-0x1e3)]},B),{},{'source':this}));}get[x(-0xa5,-0x11f)](){}};class ClockTemplate extends Base{static get[x(-0x10c,-0x7f)](){function Q(y,w){return x(y,w-0x60e);}return{'minuteHeight':0x8,'minuteTop':0x2,'hourHeight':0x8,'hourTop':0x2,'handLeft':0xa,'div':document[Q(0x4f5,0x4f2)]('div'),'scheduler':null,'template'(y){function V(y,w){return Q(w,y- -0x2df);}return V(0x1bc,0x1bc)+(y[V(0x26e,0x28e)]||this['mode'])+'\x20'+(y[V(0x1c4,0x18b)]||'')+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22b-sch-clock\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22b-sch-hour-indicator\x22>'+DateHelper[V(0x1cd,0x205)](y[V(0x2a7,0x344)],V(0x24c,0x20f))+V(0x1cf,0x19b)+DateHelper['format'](y['date'],'D')+V(0x2f5,0x2ac)+StringHelper[V(0x236,0x1a6)](y['text'])+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';}};}[x(-0x1a,-0xd8)](y){const w=this,B=y[v(0x5d,-0x49)],l=w[v(-0x95,-0x1)](y),f=w[v(-0x7e,-0xb9)];f[v(-0x1e,-0x2)]=l,w['updateDateIndicator'](f,B);function v(y,w){return x(w,y-0xe5);}return f[v(-0x1e,-0xda)];}['updateDateIndicator'](y,w){const B=y===null||y===void 0x0?void 0x0:y[z(0x470,0x4d2)]('.b-sch-hour-indicator'),l=y===null||y===void 0x0?void 0x0:y[z(0x501,0x4d2)](z(0x4da,0x411));function z(y,w){return x(y,w-0x57d);}w&&B&&l&&(this['mode']==='hour'?(B[z(0x42a,0x4d7)][z(0x5ab,0x53c)]=z(0x470,0x52f)+w[z(0x4da,0x50c)]()%0xc*0x1e+z(0x49a,0x45b),l[z(0x43b,0x4d7)][z(0x47e,0x53c)]=z(0x5c4,0x52f)+w[z(0x4da,0x459)]()*0x6+z(0x406,0x45b)):(B['style'][z(0x53c,0x53c)]=z(0x529,0x4e4),l[z(0x59c,0x4d7)][z(0x568,0x53c)]=z(0x4b8,0x4e4)));}set[x(-0x183,-0xc1)](y){function O(y,w){return x(w,y-0x396);}this[O(0x306,0x395)]=y;}get[x(-0x22,-0xc1)](){if(this[d(0x30d,0x367)])return this[d(0x2c2,0x367)];function d(y,w){return x(y,w-0x3f7);}const y=DateHelper[d(0x305,0x256)](this[d(0x423,0x3b7)][d(0x328,0x359)][d(0x263,0x29a)][d(0x338,0x308)],'day')<0x0,w=DateHelper[d(0x307,0x296)](this['scheduler'][d(0x25e,0x259)]);return y&&w?d(0x411,0x36e):d(0x2a5,0x2c7);}set[x(-0x189,-0x17a)](y){this['_template']=y;}get[x(-0x153,-0x17a)](){function k(y,w){return x(w,y-0x454);}return this[k(0x3e0,0x379)];}}ClockTemplate[x(-0x1a7,-0x189)]=x(-0xf5,-0x3b);class TimeSpanMenuBase extends ContextMenuBase{}TimeSpanMenuBase[x(-0xfb,-0x189)]=x(-0x11d,-0x19b);function x(y,w){return c(w- -0x36e,y);}class RecurrenceConfirmationPopup extends Popup{static get[x(-0x1d2,-0x126)](){function r(y,w){return x(w,y-0x715);}return r(0x587,0x537);}static get['type'](){function i(y,w){return x(y,w-0x6dd);}return i(0x5b6,0x5ce);}static get[x(-0xd,-0x7f)](){function n(y,w){return x(w,y-0x2f0);}return{'localizableProperties':[],'align':n(0x279,0x29e),'autoShow':![],'autoClose':![],'closeAction':n(0x19c,0x251),'modal':!![],'centered':!![],'scrollAction':n(0x282,0x1e9),'constrainTo':globalThis,'draggable':!![],'closable':!![],'floating':!![],'eventRecord':null,'cls':n(0x220,0x1c5),'bbar':{'defaults':{'localeClass':this},'items':{'changeMultipleButton':{'weight':0x64,'color':'b-green','text':n(0x2cf,0x2ab),'onClick':'up.onChangeMultipleButtonClick'},'changeSingleButton':{'weight':0xc8,'color':'b-gray','text':n(0x235,0x1b6),'onClick':n(0x2be,0x37e)},'cancelButton':{'weight':0x12c,'color':'b-gray','text':n(0x216,0x183),'onClick':n(0x1b3,0x14c)}}}};}get[x(-0x149,-0x187)](){function o(y,w){return x(y,w-0x582);}return this[o(0x4ab,0x409)]['changeMultipleButton'];}get[x(-0x10,-0xbc)](){function b(y,w){return x(y,w-0xe0);}return this[b(-0x24,-0x99)][b(0x38,0x24)];}get[x(-0x57,-0xb0)](){return this['widgetMap']['cancelButton'];}['onChangeMultipleButtonClick'](){function Y(y,w){return x(y,w-0x31a);}this[Y(0x1f5,0x222)](),this[Y(0x1bd,0x1da)]();}[x(-0x129,-0x8a)](){function U0(y,w){return x(y,w-0x69c);}this['processSingleRecord'](),this[U0(0x594,0x55c)]();}[x(-0xfa,-0xc0)](){this[U1(0x2ff,0x2f3)]&&this[U1(0x2ff,0x326)][U1(0x33f,0x3ee)](this[U1(0x277,0x22e)]);function U1(y,w){return x(w,y-0x3ed);}this[U1(0x2ad,0x2c2)]();}[x(-0x113,-0x154)](){function U2(y,w){return x(y,w-0x5e7);}this['cancelFn']&&this[U2(0x54b,0x4f9)][U2(0x58c,0x539)](this[U2(0x3d8,0x471)]),this['hide']();}['confirm'](y={}){function U3(y,w){return x(w,y-0x2dd);}const w=this;return['actionType','eventRecord',U3(0x201,0x1c7),U3(0x1d2,0x161),U3(0x252,0x280),U3(0x1ef,0x1f7),'thisObj']['forEach'](B=>{if(B in y)w[B]=y[B];}),w[U3(0x23e,0x199)](),super[U3(0x14a,0x164)](y);}['updatePopupContent'](){const y=this,{changeMultipleButton:w,changeSingleButton:B,cancelButton:l}=y[U4(0x194,0x128)],{eventRecord:f,actionType:actionType=U4(0x242,0x2c9)}=y,q=f&&f['isRecurring'];q?(w[U4(0x206,0x1d9)]=y['L'](U4(0x2ec,0x2cd)),y[U4(0x202,0x156)]=y['L'](actionType+U4(0x1d7,0x1ba))):(w['text']=y['L'](actionType+U4(0x201,0x1c4)),y[U4(0x202,0x165)]=y['L'](actionType+'-further-message'));B['text']=y['L'](actionType+'-only-this-btn-text');function U4(y,w){return x(w,y-0x30d);}l[U4(0x206,0x192)]=y['L'](U4(0x233,0x18d)),q?B[U4(0x1cd,0x22a)]():B['show'](),y[U4(0x234,0x1a5)]=y['L'](U4(0x24b,0x1ef)),y[U4(0x231,0x1ae)]=y['L'](actionType+U4(0x254,0x2dc));}[x(-0x88,-0xf8)](){function U5(y,w){return x(y,w-0x56f);}const {eventRecord:y,changerFn:w,thisObj:B}=this;y[U5(0x47b,0x4bb)](),this[U5(0x3a3,0x3db)](w,B,[y]),y[U5(0x555,0x49b)]();}[x(-0x68,-0xe2)](){const {eventRecord:y,changerFn:w,thisObj:B}=this;y[U6(-0xb2,-0xdb)](),y['recurrence']=null;function U6(y,w){return x(w,y-0x2);}this[U6(-0x192,-0x1bb)](w,B,[y]),y[U6(-0x6d,-0xe)]=null,y[U6(-0xd2,-0x1b)]();}[x(-0x18a,-0x134)](){function U7(y,w){return x(y,w-0x472);}this[U7(0x3f7,0x3d3)](),super[U7(0x38e,0x33e)]();}}RecurrenceConfirmationPopup[x(0x1b,-0x59)](),RecurrenceConfirmationPopup[x(-0x1b4,-0x189)]='RecurrenceConfirmationPopup';class EventMenu extends TimeSpanMenuBase{static get[x(-0x136,-0x126)](){return'EventMenu';}static get[x(-0x141,-0x106)](){function U8(y,w){return x(w,y-0x3ab);}return{'processItems':null,'type':U8(0x2b9,0x2af)};}static get['pluginConfig'](){const y=super[U9(0x460,0x50c)];y[U9(0x429,0x3d8)][U9(0x45e,0x42b)](U9(0x473,0x462));function U9(y,w){return x(y,w-0x574);}return y;}[x(-0x13c,-0x13c)](y){function UU(y,w){return x(y,w-0x184);}!y[UU(0xa0,0x101)]&&y['target'][UU(0x87,0xed)](this[UU(0x54,0xd2)]['eventSelector'])&&(y[UU(0xbf,0x142)]==='\x20'&&this[UU(-0x5,0xb1)](this[UU(0x2,-0x1c)](y[UU(0x1a6,0xf7)])));}['getDataFromEvent'](y){const w=super[Uc(0x388,0x2f0)](y),B=w[Uc(0x404,0x350)],{client:l}=this,f=l[Uc(0x325,0x31a)](B),q=f&&(l['resolveResourceRecord'](B)||l[Uc(0x372,0x2c1)][Uc(0x341,0x3dc)]),M=f&&l[Uc(0x24c,0x29a)](B);function Uc(y,w){return x(y,w-0x427);}return Object[Uc(0x2fc,0x355)](w,{'eventElement':B,'eventRecord':f,'resourceRecord':q,'assignmentRecord':M});}['getTargetElementFromEvent']({target:y}){function UA(y,w){return x(y,w-0x519);}return DomHelper['up'](y,this[UA(0x48c,0x467)][UA(0x2d8,0x368)])||y;}[x(-0x11f,-0x79)](y){function Uy(y,w){return x(w,y- -0x36);}return y[Uy(-0x167,-0x148)];}[x(-0x77,-0xa1)](y,{targetElement:w,event:B}={}){if(this[Uw(0x4d6,0x4f3)])return;if(!w){w=this['getElementFromRecord'](y);if(!w)return;}function Uw(y,w){return x(w,y-0x553);}B=B||this['createContextMenuEventForElement'](w),this[Uw(0x480,0x418)](B);}['getElementFromRecord'](y){return this['client']['getElementsFromEventRecord'](y)[0x0];}[x(-0x7c,-0x112)]({items:y,eventRecord:w,assignmentRecord:B}){const {client:l}=this;function UB(y,w){return x(w,y-0x27d);}y[UB(0x1e0,0x26f)]={'disabled':w['readOnly']||(B===null||B===void 0x0?void 0x0:B[UB(0x1f1,0x228)]),'hidden':l['readOnly']},y[UB(0x190,0x1f1)]={'disabled':w[UB(0x1f1,0x20e)]||(B===null||B===void 0x0?void 0x0:B['readOnly']),'hidden':l[UB(0x1f1,0x2b4)]||l[UB(0x1b7,0x202)]['usesSingleAssignment']};}[x(-0x144,-0x135)](y){const {client:w}=this;function Ul(y,w){return x(y,w-0x3d8);}return Objects[Ul(0x3ac,0x2e8)]({'deleteEvent':{'text':Ul(0x2e0,0x254),'icon':Ul(0x3ab,0x321),'weight':0xc8,'onItem'({menu:B,eventRecord:l}){function Uf(y,w){return Ul(w,y- -0x97);}var f;const q=(f=B['focusInEvent'])===null||f===void 0x0?void 0x0:f['relatedTarget'];q&&(q[Uf(0x1aa,0x262)](),w[Uf(0x26b,0x314)][Uf(0x2df,0x388)]=q),w[Uf(0x1f7,0x23f)](w['isEventSelected'](l)?w['selectedEvents']:[l]);}},'unassignEvent':{'text':Ul(0x1cd,0x293),'icon':Ul(0x284,0x273),'weight':0x12c,'onItem'({menu:B,eventRecord:l,resourceRecord:f}){function Uq(y,w){return Ul(y,w-0xca);}var q;const M=(q=B[Uq(0x495,0x482)])===null||q===void 0x0?void 0x0:q['relatedTarget'];M&&(M[Uq(0x2b3,0x30b)](),w[Uq(0x46d,0x3cc)]['activeItem']=M),l[Uq(0x3a0,0x3bc)](f);}}},y);}}EventMenu['featureClass']='',EventMenu[x(-0x193,-0x189)]='EventMenu',GridFeatureManager[x(-0x12d,-0xc7)](EventMenu,!![],x(-0xc1,-0x5d)),GridFeatureManager[x(-0xb6,-0xc7)](EventMenu,![],x(-0x171,-0x132));class ScheduleMenu extends TimeSpanMenuBase{static get[x(-0x6b,-0x126)](){function UM(y,w){return x(y,w-0x210);}return UM(0x152,0x1bd);}static get['defaultConfig'](){function UE(y,w){return x(y,w-0x2f);}return{'type':UE(-0xdf,-0x8f),'items':null,'processItems':null};}static get['pluginConfig'](){const y=super['pluginConfig'];function Up(y,w){return x(w,y-0x550);}return y[Up(0x3b4,0x463)][Up(0x407,0x37b)](Up(0x40a,0x448)),y;}[x(-0xc2,-0x79)](y){function UI(y,w){return x(w,y-0x4ad);}const {client:w}=this,{column:B,targetElement:l,resourceRecord:f}=y,q=B?B===w[UI(0x331,0x2c1)]:w[UI(0x3c5,0x3fb)][UI(0x323,0x2ae)]===l;return q&&!(f&&f[UI(0x3c2,0x3d3)]);}[x(-0x16c,-0x137)](y){if(DomHelper['isDOMEvent'](y)){const {client:w}=this,B=w[UP(0x105,0x54)](y),l=w[UP(0x179,0x123)](y,UP(0x28,0xca)),f=w[UP(0x24,0xf)](y)||w[UP(-0x91,-0x40)]&&w['resourceStore'][UP(0x119,0x117)];return ObjectHelper[UP(-0x31,0x90)](super[UP(-0x38,0x2b)](y),B,{'date':l,'resourceRecord':f});}function UP(y,w){return x(y,w-0x162);}return y;}['populateScheduleMenu']({items:y,resourceRecord:w,date:B}){const {client:l}=this;function US(y,w){return x(w,y-0x753);}!l['readOnly']&&l[US(0x68d,0x5ce)]&&(y[US(0x630,0x56f)]={'text':US(0x723,0x6fd),'icon':US(0x6a9,0x6ef),'disabled':!w||w[US(0x6c7,0x6b8)]||!w[US(0x72f,0x695)](B),'weight':0x64,'onItem'(){l['internalAddEvent'](B,w,l['getRowFor'](w));}});}}ScheduleMenu[x(-0x128,-0xa5)]='',ScheduleMenu[x(-0x1b3,-0x189)]=x(-0x76,-0x53),GridFeatureManager['registerFeature'](ScheduleMenu,!![],x(-0x61,-0x5d));function U(){const Ur=['doGridNavigation','Only\x20This\x20Event','Do\x20you\x20want\x20to\x20delete\x20this\x20and\x20all\x20future\x20occurrences\x20of\x20this\x20event,\x20or\x20only\x20the\x20selected\x20occurrence?','onEventEnterKey','isActionableLocation','Date\x20range','some','isCrudManager','Summary\x20for\x20','Daily','\x20weeks\x20on\x20','the\x20second','navigatePreviousBuffer','isVertical','compareUnits','createContextMenuEventForElement','navigateTo','displayDateFormat','whenProjectReady','chain','TimeSpanMenuBase','Every\x20','updateProject','Complete\x20schedule\x20(for\x20all\x20events)','focus','EventNavigation','.b-dragging','callback','show','11JWGhLt','Cut\x20event','data','count','RecurrenceConfirmationPopup','resolveAssignmentRecord','filter','Edit\x20dependency','element','_$name','44pIARcb','changeMultipleButton','map','Every','L{SchedulerBase.Delete\x20event}','5sGduCu','Delete','crudManager','load','Name','getAssignmentForEventAndResource','focusedCell','timeAxisColumn','Start','template','widgetMap','fourth','\x20days','thisObj','timeAxis','Weekly','<div\x20class=\x22b-sch-clockwrap\x20b-sch-clock-','projectStores','instanceMeta','Data','On\x20date','resourceTimeRanges','getComposedKeyName','.b-sch-minute-indicator','cls','Finish-to-Start','Duration','scrollAssignmentIntoView','dependencies','resourceStore','b-icon\x20b-icon-unassign','ddd\x20MM/DD','div','format','formatContainsHourInfo','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22b-sch-minute-indicator\x22>','resourceMap','focusableSelector','timeResolution','Visible\x20schedule','isEventStoreMixin','renderData','Repeat\x20event','Add\x20event','ctrlKey','Yearly','projectConsumer','onRecurrenceClose','resolveResourceRecord','No\x20resource\x20assigned','You\x20are\x20deleting\x20an\x20event','isModel','capitalize','previousActiveEvent','events','getRow','length','removeEvents','push','type','resourceRecord','populateScheduleMenu','L{SchedulerBase.Unassign\x20event}','isInTimeAxis','b-active','rowMap','time(s)','hide','setupProjectStores','None','up.onCancelButtonClick','onElementKeyDown','defineProperty','\x20of\x20','Today','712xTEpld','getDataFromEvent','-all-message','changeItems','updateLocalization','Paste\x20event','ResourceHistogram','eventRecord','day','beforeAssignmentDelete','ll\x20LTS','skipScrollIntoView','sort','prototype','getCurrentConfig','values','isOccurrenceAssignment','focusCls','$name','navigateNext','getMinutes','addEvent','deg)','destroy','onGridBodyFocusIn','widgetClass','throttle','name','createElement','closest','ddd\x20MM/DD,\x20hA','Zoom','Save','onTab','registerLocale','getAt','147812ovMyGd','navigatePrevious','populateEventMenu','source','weekend\x20day','recurrenceconfirmation','getCellDataFromEvent','resolveEventRecord','-further-btn-text','html','onEscapeKey','keys','doDestroy','text','configurable','Delete\x20All\x20Future\x20Events','onArrowDownKey','innerHTML','getEvents','the\x20third','Yearly\x20on\x20','week(s)','mousedown','autoLoad','Event\x20overlaps\x20existing\x20event\x20for\x20this\x20resource','By\x20name','isAvailable','encodeHtml','processMultipleRecords','remove','Start-to-Start','LST','Delete\x20event','delayAutoLoad','event','onProjectDataReady','merge','unit','cancelFn','unassignEvent','bind','isSpecialRow','End\x20to\x20Start','End\x20to\x20End','timeAxisSubGrid','Copy\x20event','unassign','construct','taskStore','MMM','processSingleRecord','accessibleFocusCell','After','English','Edit\x20event','buildingProjectConfig','title','attachTo','L{Object.Cancel}','width','generateContent','targetElement','navigator','Never','endBatch','internalShowContextMenu','assign','projectSubscribers','b-sch-recurrenceconfirmation','getFirstVisibleAssignment','Lag','columnId','From','update','constructor','processEvent','isTimeSpanInAxis','registerFeature','eventStore','19199330UMxSTG','fifth','day(s)','L{width}','mode','onCancelButtonClick','normalizeCellContext','schedule','Start-to-Finish','changeSingleButton','L{update-only-this-btn-text}','projectModelClass','-title','onShiftTab','b-icon\x20b-icon-trash','2767368asoktu','assignmentStore','beginBatch','isOccurrence','client','1581366xleMEo','cancelButton','onDeleteKeyBuffer','call','the\x20first','month(s)','querySelector','b-icon\x20b-icon-add','indexOf','Change','isHorizontal','style','featureClass','Invalid','clearEventSelection','assignmentRecord','showContextMenuFor','freeze','updatePopupContent','timeAxisViewModel','deleteEvent','isConfiguring','CurrentConfig','excluded','none','floor','matches','project','finalize','getElementFromAssignmentRecord','selectedAssignments','_sharedProject','Enter','_mode','End','Custom...','target','readOnly','changerFn','onChangeSingleButtonClick','hour','date','projectStoreNames','timeAxisSubGridElement','itemSelector','isEngineReady','handled','Complete\x20schedule','Frequency','navigateNextBuffer','defaultConfig','the\x20fifth','disabled','first','trigger','projectCallbacks','shouldShowMenu','year(s)','b-t','\x20and\x20','\x20years\x20on\x20','_template','\x20months\x20on\x20','clear','getHours','All\x20Future\x20Events','recurrenceRule','realign','226569DyYAAJ','Finish-to-Finish','_project','change','Do\x20you\x20want\x20to\x20change\x20only\x20this\x20occurrence\x20of\x20the\x20event,\x20or\x20this\x20and\x20all\x20future\x20occurrences?','pluginConfig','normalizeTarget','ll\x20LST','46TPOxVI','On\x20the','reduce','activeItem','the\x20fourth','isNavigationKey','isAssignment','getNext','Scheduler','activeAssignment','Server\x20response:','onDeleteKey','initClass','the\x20last','tasks','Event\x20may\x20not\x20be\x20dropped\x20completely\x20outside\x20the\x20timeline','focusCell','Resource','ScheduleMenu','resource','isProjectModel','contains','navigate','rotate(','Do\x20you\x20want\x20to\x20change\x20all\x20occurrences\x20of\x20this\x20event?','forEach','last','onEventSpaceKey','isDestroyed','size','createStoreDescriptor','Yes','set','Cancel','rowIndex','key','transform','scheduler','getDateFromDomEvent','Unassign\x20event','Listeners','Show\x20current\x20timeline','ClockTemplate','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22b-sch-clock-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22b-sch-clock-text\x22>','getPrevious','class','Delete\x20Only\x20This\x20Event','get','setupConfigs','timeRanges','startConfigure','up.onChangeSingleButtonClick','relayProjectDataChange','L{SchedulerBase.Add\x20event}','second','6747768BiqsRm','elementData','Repeat','preventDefault','weekday','add','Filter\x20tasks','preProcessCurrentConfigs','End\x20repeat','subGridConfigs','isWorkingTime','Each','getConfig','L{Object.Yes}','focusInEvent','resources','attachToProject','eventSelector','detachListeners'];U=function(){return Ur;};return U();}const locale=LocaleHelper['mergeLocales'](A,{'Object':{'newEvent':'New\x20event'},'ResourceInfoColumn':{'eventCountText':function(y){return y+'\x20event'+(y!==0x1?'s':'');}},'Dependencies':{'from':x(-0x18f,-0xcc),'to':'To','valid':'Valid','invalid':x(-0xc2,-0xa4)},'DependencyType':{'SS':'SS','SF':'SF','FS':'FS','FF':'FF','StartToStart':x(-0x143,-0xf6),'StartToEnd':x(-0x121,-0xbd),'EndToStart':x(-0x134,-0x16a),'EndToEnd':x(-0x45,-0x6c),'short':['SS','SF','FS','FF'],'long':['Start-to-Start',x(-0x31,-0xbd),'Finish-to-Start','Finish-to-Finish']},'DependencyEdit':{'From':'From','To':'To','Type':'Type','Lag':x(-0x1f,-0xce),'Edit\x20dependency':x(-0x1ac,-0x18b),'Save':'Save','Delete':'Delete','Cancel':x(0x16,-0x44),'StartToStart':'Start\x20to\x20Start','StartToEnd':'Start\x20to\x20End','EndToStart':x(-0xf2,-0xea),'EndToEnd':x(-0xb2,-0xe9)},'EventEdit':{'Name':x(-0x171,-0x17f),'Resource':x(0x39,-0x54),'Start':x(-0x16a,-0x17b),'End':x(-0x20,-0x8f),'Save':x(-0x144,-0x118),'Delete':x(-0xd6,-0x182),'Cancel':x(0x3c,-0x44),'Edit\x20event':x(-0x9a,-0xde),'Repeat':x(-0xd1,-0x2c)},'EventDrag':{'eventOverlapsExisting':x(-0x41,-0xfc),'noDropOutsideTimeline':x(0x15,-0x56)},'SchedulerBase':{'Add\x20event':x(-0x182,-0x158),'Delete\x20event':x(-0x10e,-0xf4),'Unassign\x20event':x(0x79,-0x3e)},'TimeAxisHeaderMenu':{'pickZoomLevel':x(-0x5e,-0x119),'activeDateRange':x(-0x1b9,-0x1aa),'startText':'Start\x20date','endText':'End\x20date','todayText':x(-0x1f2,-0x139)},'EventCopyPaste':{'copyEvent':x(-0xfc,-0xe7),'cutEvent':x(-0x237,-0x191),'pasteEvent':x(-0x6f,-0x133)},'EventFilter':{'filterEvents':x(-0x6a,-0x28),'byName':x(-0xfd,-0xfb)},'TimeRanges':{'showCurrentTimeLine':x(-0x101,-0x3c)},'PresetManager':{'secondAndMinute':{'displayDateFormat':x(-0xb4,-0x12e)},'minuteAndHour':{'topDateFormat':x(-0x156,-0x11a),'displayDateFormat':x(-0xa5,-0x66)},'hourAndDay':{'topDateFormat':x(-0xcd,-0x164),'middleDateFormat':x(-0x86,-0xf5),'displayDateFormat':x(-0x55,-0x66)},'weekAndDay':{'displayDateFormat':'ll\x20LST'},'dayAndWeek':{'displayDateFormat':x(0x55,-0x66)}},'RecurrenceConfirmationPopup':{'delete-title':x(-0x172,-0x151),'delete-all-message':'Do\x20you\x20want\x20to\x20delete\x20all\x20occurrences\x20of\x20this\x20event?','delete-further-message':x(-0xf1,-0x1ad),'delete-further-btn-text':x(-0x54,-0x105),'delete-only-this-btn-text':x(0x64,-0x37),'update-title':'You\x20are\x20changing\x20a\x20repeating\x20event','update-all-message':x(-0x76,-0x4d),'update-further-message':x(-0x12,-0x69),'update-further-btn-text':x(0x11,-0x70),'update-only-this-btn-text':x(-0x274,-0x1ae),'Yes':x(-0x78,-0x46),'Cancel':'Cancel','width':0x258},'RecurrenceLegend':{'\x20and\x20':x(0x3b,-0x76),'Daily':x(-0x1e2,-0x1a6),'Weekly\x20on\x20{1}':({days:y})=>'Weekly\x20on\x20'+y,'Monthly\x20on\x20{1}':({days:y})=>'Monthly\x20on\x20'+y,'Yearly\x20on\x20{1}\x20of\x20{2}':({days:y,months:w})=>x(-0x81,-0x100)+y+'\x20of\x20'+w,'Every\x20{0}\x20days':({interval:y})=>x(-0x15e,-0x19a)+y+x(-0xba,-0x177),'Every\x20{0}\x20weeks\x20on\x20{1}':({interval:y,days:w})=>x(-0x225,-0x19a)+y+x(-0x18d,-0x1a5)+w,'Every\x20{0}\x20months\x20on\x20{1}':({interval:y,days:w})=>x(-0x200,-0x19a)+y+x(0x31,-0x73)+w,'Every\x20{0}\x20years\x20on\x20{1}\x20of\x20{2}':({interval:y,days:w,months:B})=>x(-0x14d,-0x19a)+y+x(-0x5f,-0x75)+w+x(-0x1e9,-0x13a)+B,'position1':x(-0x12f,-0xad),'position2':x(-0x174,-0x1a4),'position3':x(-0x13e,-0x101),'position4':x(-0x11d,-0x61),'position5':x(-0x145,-0x7e),'position-1':x(-0xf6,-0x58),'day':x(-0x6f,-0x130),'weekday':x(-0x13,-0x2a),'weekend\x20day':x(-0x1ba,-0x110),'daysFormat':({position:y,days:w})=>y+'\x20'+w},'RecurrenceEditor':{'Repeat\x20event':x(-0x215,-0x159),'Cancel':x(-0x6d,-0x44),'Save':x(-0x18e,-0x118),'Frequency':x(0x30,-0x81),'Every':x(-0x1b2,-0x185),'DAILYintervalUnit':x(-0xc,-0xc3),'WEEKLYintervalUnit':x(-0x9e,-0xff),'MONTHLYintervalUnit':x(-0x95,-0xac),'YEARLYintervalUnit':x(-0x57,-0x78),'Each':x(-0x98,-0x23),'On\x20the':x(-0x84,-0x64),'End\x20repeat':x(-0xc,-0x26),'time(s)':x(-0x197,-0x141)},'RecurrenceDaysCombo':{'day':'day','weekday':'weekday','weekend\x20day':'weekend\x20day'},'RecurrencePositionsCombo':{'position1':x(-0x10e,-0x7c),'position2':x(-0x9b,-0x2f),'position3':'third','position4':x(-0x23e,-0x178),'position5':x(-0x78,-0xc4),'position-1':'last'},'RecurrenceStopConditionCombo':{'Never':x(-0xcd,-0xd5),'After':x(-0x13d,-0xe0),'On\x20date':x(-0xa7,-0x16f)},'RecurrenceFrequencyCombo':{'Daily':'Daily','Weekly':x(-0x13c,-0x174),'Monthly':'Monthly','Yearly':x(-0x134,-0x156)},'RecurrenceCombo':{'None':x(-0x175,-0x13e),'Custom':x(-0x7,-0x8e)},'Summary':{'Summary\x20for':y=>x(-0x1db,-0x1a7)+y},'ScheduleRangeCombo':{'completeview':x(-0xb,-0x82),'currentview':x(-0xd8,-0x15c),'daterange':x(-0x1da,-0x1aa),'completedata':x(-0x255,-0x198)},'SchedulerExportDialog':{'Schedule\x20range':'Schedule\x20range','Export\x20from':x(-0x2e,-0xcc),'Export\x20to':'To'},'ExcelExporter':{'No\x20resource\x20assigned':x(-0x199,-0x152)},'CrudManagerView':{'serverResponseLabel':x(-0x34,-0x5b)},'DurationColumn':{'Duration':x(-0x16e,-0x169)}});LocaleManagerSingleton[x(-0xde,-0x116)]('En',{'desc':x(-0x16f,-0xdf),'locale':locale});const stores=[x(-0x28,-0xc6),x(-0x114,-0xe4),'assignmentStore',x(-0x118,-0x166),'dependencyStore','timeRangeStore','resourceTimeRangeStore'],inlineProperties=[x(-0x169,-0x14d),x(-0x42,-0x57),x(-0x86,-0x1f),'assignments',x(-0x13c,-0x167),x(-0xbc,-0x34),x(-0x16c,-0x16e)];var CurrentConfig=y=>class w extends y{static get[x(-0x199,-0x126)](){function UL(y,w){return x(y,w-0x2ad);}return UL(0x2a1,0x212);}[x(0x91,-0x27)](B){for(const l of inlineProperties){delete B[l];}super['preProcessCurrentConfigs'](B);}[x(-0x1b9,-0x12a)](B){const l=this[UX(0x366,0x3ee)]['getCurrentConfig'](B),f=super[UX(0x2d2,0x20f)](B);if(l){f[UX(0x366,0x3d8)]=l;const {crudManager:q}=f;if(q)for(const M of stores){q[M]&&(l[M]=q[M]);}Object[UX(0x2f3,0x282)](l)[UX(0x2b1,0x276)]===0x0&&delete f['project'];}delete f[UX(0x26c,0x2da)];function UX(y,w){return x(w,y-0x3fc);}return delete f[UX(0x27b,0x2b7)],f;}};const preventDefault=y=>y[x(0x1d,-0x2b)](),isArrowKey={'ArrowRight':0x1,'ArrowLeft':0x1,'ArrowUp':0x1,'ArrowDown':0x1},animate100={'animate':0x64},emptyObject=Object[x(0x1c,-0xa0)]({});function c(A,y){const w=U();return c=function(B,l){B=B-0x1bc;let f=w[B];return f;},c(A,y);}var SchedulerEventNavigation=y=>class w extends Delayable(y||Base){static get[x(-0x1a1,-0x126)](){function UJ(y,w){return x(w,y-0x39e);}return UJ(0x208,0x158);}static get[x(-0x13e,-0x106)](){function UR(y,w){return x(w,y-0x47d);}return{'navigator':{'allowCtrlKey':!![],'scrollSilently':!![],'keys':{'Space':UR(0x433,0x412),'Enter':'onEventEnterKey','Delete':UR(0x423,0x3fe),'Backspace':UR(0x423,0x3d1),'ArrowUp':'onArrowUpKey','ArrowDown':UR(0x379,0x2ec),'Escape':UR(0x373,0x406),'Tab':UR(0x366,0x31d),'SHIFT+Tab':UR(0x3c5,0x415)}},'isNavigationKey':{'ArrowDown':0x1,'ArrowUp':0x1,'ArrowLeft':0x1,'ArrowRight':0x1}};}static get[x(-0x59,-0x7f)](){function UW(y,w){return x(w,y-0x364);}return{'focusCls':UW(0x221,0x1e2),'enableDeleteKey':!![],'onDeleteKeyBuffer':0x1f4,'navigatePreviousBuffer':0xc8,'navigateNextBuffer':0xc8,'testConfig':{'onDeleteKeyBuffer':0x1}};}[x(-0x170,-0xe5)](B){const l=this;l[Ux(0x5d8,0x673)]=l[Ux(0x5d8,0x5a9)][Ux(0x630,0x674)](l);function Ux(y,w){return x(w,y-0x71c);}l[Ux(0x6c2,0x690)]=l[Ux(0x5fe,0x628)](l[Ux(0x6c2,0x6af)],l[Ux(0x66d,0x728)],l),super[Ux(0x637,0x665)](B);}['changeNavigator'](B){function Ug(y,w){return x(w,y-0x57c);}const l=this;return l[Ug(0x55a,0x54d)](Ug(0x557,0x4d8)),new Navigator(l['constructor']['mergeConfigs']({'ownerCmp':l,'target':l[Ug(0x4f6,0x452)],'processEvent':l[Ug(0x4b3,0x47a)],'itemSelector':'.'+l['eventCls']+'-wrap','focusCls':l[Ug(0x455,0x3b8)],'navigatePrevious':l['throttle'](l[Ug(0x469,0x457)],{'delay':l[Ug(0x3d9,0x3d4)],'throttled':preventDefault}),'navigateNext':l[Ug(0x45e,0x418)](l[Ug(0x457,0x44d)],{'delay':l[Ug(0x4fc,0x453)],'throttled':preventDefault})},B));}[x(-0x1d2,-0x108)](){function UZ(y,w){return x(y,w-0x71d);}this[UZ(0x5e0,0x647)][UZ(0x584,0x5fc)](),super[UZ(0x57e,0x615)]();}[x(-0x12c,-0x144)](B){function UK(y,w){return x(y,w-0x578);}return!B[UK(0x394,0x407)](this)[UK(0x475,0x4de)]&&this[UK(0x3db,0x403)][UK(0x4fc,0x4b0)](B);}['onElementKeyDown'](B){var l,f;function Ua(y,w){return x(y,w-0x19);}const q=this,{navigator:M}=q,E=M['constructor'][Ua(-0x16e,-0x154)](B);if(((l=q[Ua(-0x1f5,-0x164)])===null||l===void 0x0?void 0x0:l[Ua(-0x59,-0x2a)])!==-0x1&&((f=q['focusedCell'])===null||f===void 0x0?void 0x0:f['column'])===q['timeAxisColumn']&&!B['target']['closest'](M['itemSelector'])&&B[Ua(-0xc5,-0x29)]===Ua(-0x3e,-0x78)){const I=q[Ua(-0xfd,-0xb6)]();if(I)return q[Ua(-0x206,-0x186)](I,{'uiEvent':B}),![];}else{if(!q[Ua(0x6f,-0x47)][E]||!B[Ua(-0x13a,-0x74)][Ua(-0x2d,-0x7e)](q[Ua(-0x6b,-0xbd)]['itemSelector'])){var p;return(p=super['onElementKeyDown'])===null||p===void 0x0?void 0x0:p[Ua(-0x40,-0x95)](this,B);}}}['getFirstVisibleAssignment'](B=this[x(-0xb8,-0x17d)]){const l=this,{currentOrientation:f,rowManager:q,eventStore:M}=l;function UF(y,w){return x(w,y-0xad);}if(l[UF(0x6,0x7d)]){var E;let L=f[UF(-0x95,-0x104)][UF(0x77,-0x35)](q[UF(-0x9f,-0x83)](B['rowIndex']));if((E=L)!==null&&E!==void 0x0&&E[UF(-0x9e,-0xf2)]){var p;return(p=L[0x0])===null||p===void 0x0?void 0x0:p[UF(0x80,-0x48)][UF(0xb,-0x93)];}else{var I,P;L=(I=f['resourceMap']['get'](B['id']))===null||I===void 0x0?void 0x0:I['eventsData'];if((P=L)!==null&&P!==void 0x0&&P[UF(-0x9e,-0x131)]){var S;return(S=L[UF(-0xdf,-0xd9)](X=>M[UF(-0x4d,-0x69)](X[UF(-0x84,0x34)]))[0x0])===null||S===void 0x0?void 0x0:S[UF(0xb,0x28)];}}}else{const X=[...f[UF(-0xb2,0x12)][UF(-0x7c,-0xdf)]()][0x0],J=X&&Object[UF(-0x7c,-0xab)](X);if(J!==null&&J!==void 0x0&&J['length'])return J[UF(-0xdf,-0xc7)](R=>M['isAvailable'](R[UF(-0xad,-0xf4)][UF(-0x84,0x22)]))[0x0]['renderData']['assignmentRecord'];}}[x(-0xc0,-0x120)](B){const l=B['target']['closest'](this[Ue(0x45b,0x3a8)]);function Ue(y,w){return x(w,y-0x5b9);}if(this['timeAxisSubGridElement'][Ue(0x569,0x538)](B['target'])){const q=this,{navigationEvent:M}=q,{target:E}=B,p=E[Ue(0x49e,0x4fb)](q[Ue(0x4e3,0x428)][Ue(0x534,0x4ca)]),I=p?q[Ue(0x4fa,0x4a1)]({'rowIndex':q[Ue(0x417,0x3b2)]?0x0:q[Ue(0x453,0x3e6)][Ue(0x510,0x5a6)](q['resolveResourceRecord'](E)),'column':q['timeAxisColumn'],'target':E}):new Location(E);if(p){var f;const {_focusedCell:P}=q;q['_focusedCell']=I,(f=q['onCellNavigate'])===null||f===void 0x0?void 0x0:f[Ue(0x50b,0x56a)](q,q,P,I,M,!![]);return;}if(l&&(!M||isArrowKey[M[Ue(0x577,0x517)]])){const S=q[Ue(0x4ea,0x5ac)](I);if(S){q['navigateTo'](S,{'scrollIntoView':Boolean((M===null||M===void 0x0?void 0x0:M[Ue(0x471,0x3ff)])!==Ue(0x4bb,0x47c)),'uiEvent':M||B});return;}}}l&&super[Ue(0x499,0x4b0)](B);}[x(-0x13c,-0xe1)](B,l){const f=this;B=f['normalizeCellContext'](B);function UD(y,w){return x(y,w-0x1e3);}if(B[UD(0x1cc,0x116)]===f[UD(0xaf,0x67)]['id']);else return super[UD(0x16f,0x18e)](B,l);}[x(-0x6c,-0x67)](B){function Um(y,w){return x(y,w-0x393);}return B[Um(0x2b3,0x2f1)];}[x(0x67,-0x39)](B,l){const f=this,{resourceStore:q}=f,{eventSorter:M}=f['currentOrientation'],{startDate:E,endDate:p}=f[Uh(-0x118,-0x66)],I=B[Uh(-0x60,0x1d)],P=f['eventStore'][Uh(-0x68,0xd)]({'resourceRecord':B[Uh(0x105,0xbd)],'startDate':E,'endDate':p})[Uh(0x12,-0x7d)](this[Uh(0x9,-0x35)])[Uh(-0x98,-0x1d)](M);let S=B[Uh(0x15c,0xbd)],L=P[P[Uh(-0x4a,0x66)](I)-0x1];if(!L)for(let X=q['indexOf'](S)-0x1;(!L||l&&L===I)&&X>=0x0;X--){S=q[Uh(-0x13,-0x6)](X);const J=f[Uh(0xd8,0x49)][Uh(-0x9b,0xd)]({'resourceRecord':S,'startDate':E,'endDate':p})['filter'](f[Uh(0x32,-0x35)])[Uh(0x47,-0x1d)](M);L=J['length']&&J[J[Uh(-0x3d,-0x3c)]-0x1];}function Uh(y,w){return x(y,w-0x10f);}return f[Uh(-0x1b,0x5a)]['getAssignmentForEventAndResource'](L,S);}[x(-0x61,-0x113)](B){const l=this,f=l[Uu(0x27a,0x28d)](l[Uu(0x1fa,0x25f)](B));B[Uu(0x287,0x29b)]();function Uu(y,w){return x(y,w-0x2c6);}if(f)return!B[Uu(0x1d4,0x16f)]&&l['clearEventSelection'](),l['navigateTo'](f,{'uiEvent':B});return l[Uu(0x175,0x117)](B);}[x(-0x36,-0x5e)](B,l){function UG(y,w){return x(y,w-0x616);}const f=this,{resourceStore:q}=f,{eventSorter:M}=f['currentOrientation'],{startDate:E,endDate:p}=f[UG(0x48d,0x4a1)],I=B[UG(0x4ca,0x524)],P=f[UG(0x575,0x550)][UG(0x5d3,0x514)]({'resourceRecord':B[UG(0x5ed,0x5c4)],'startDate':E,'endDate':p})[UG(0x525,0x48a)](this[UG(0x455,0x4d2)])[UG(0x49b,0x4ea)](M);let S=B[UG(0x5af,0x5c4)],L=P[P[UG(0x545,0x56d)](I)+0x1];if(!L)for(let X=q[UG(0x56e,0x56d)](S)+0x1;(!L||l&&L===I)&&X<q[UG(0x510,0x487)];X++){S=q[UG(0x5b0,0x501)](X);const J=f[UG(0x5f2,0x550)][UG(0x4d6,0x514)]({'resourceRecord':S,'startDate':E,'endDate':p})[UG(0x407,0x48a)](f[UG(0x594,0x4d2)])[UG(0x580,0x4ea)](M);L=J[0x0];}return f[UG(0x4ef,0x561)][UG(0x477,0x498)](L,S);}[x(-0xf7,-0x125)](B){function Us(y,w){return x(w,y-0xdd);}const l=this,f=l[Us(0x7f,0x8d)](l[Us(0x76,0xad)](B));B[Us(0xb2,0xd4)]();if(f)return!B[Us(-0x7a,-0x39)]&&l[Us(0x3a,0xbe)](),l[Us(-0xc2,0x5)](f,{'uiEvent':B});return l[Us(-0xd2,-0x1f)](B);}async[x(-0x13c,-0x19f)](B,{scrollIntoView:scrollIntoView=!![],uiEvent:uiEvent={}}=emptyObject){function UC(y,w){return x(w,y-0x509);}const l=this,{navigator:f}=l,{skipScrollIntoView:q}=f;B&&(scrollIntoView?(l[UC(0x433,0x42c)]['disabled']=!![],await l[UC(0x3a1,0x374)](B,null,animate100),l['navigator'][UC(0x48c,0x3c8)]=![]):f[UC(0x3dc,0x44a)]=!![],!l['isDestroyed']&&this[UC(0x475,0x483)](B)&&(l[UC(0x4ad,0x3e6)]=B,f[UC(0x3dc,0x44b)]=q,l[UC(0x433,0x455)]['trigger'](UC(0x4ba,0x43a),{'event':uiEvent,'item':DomHelper['up'](l[UC(0x475,0x444)](B),l['navigator'][UC(0x484,0x538)])})));}set['activeAssignment'](B){const l=this['getElementFromAssignmentRecord'](B,!![]);function Ut(y,w){return x(y,w-0x1c1);}l&&(this[Ut(0x1af,0xeb)][Ut(0x110,0x15f)]=l);}get['activeAssignment'](){function UN(y,w){return x(y,w-0x20e);}const {activeItem:B}=this[UN(0x1de,0x138)];if(B)return this['resolveAssignmentRecord'](B);}get[x(-0x1b9,-0x14e)](){function Uj(y,w){return x(y,w- -0x2f);}const {previousActiveItem:B}=this[Uj(-0x1a1,-0x105)];if(B)return this[Uj(-0x1e2,-0x13c)](B);}[x(-0x100,-0xc9)](B){function UH(y,w){return x(w,y-0x222);}const l=this,f=DomHelper['up'](B[UH(0x195,0x133)],l[UH(0x71,0x12a)]);return!l[UH(0x14c,0x88)]['disabled']&&f&&(B[UH(0x180,0x237)]=l[UH(0x95,0x13e)](f),B[UH(0xf1,0x1a5)]=l[UH(0x115,0xc2)](f),B[UH(0xdb,0x171)]=l[UH(0xcf,0xf)](f)),B;}['onDeleteKey'](B){const l=this;function UT(y,w){return x(y,w-0x673);}if(!l[UT(0x688,0x5e7)]&&l['enableDeleteKey']){const f=l[UT(0x5b3,0x5ad)]['usesSingleAssignment']?l['selectedEvents']:l[UT(0x5d3,0x5e0)];l[UT(0x52a,0x529)](f['filter'](q=>!q[UT(0x63e,0x5e7)]));}}['onArrowUpKey'](B){function UQ(y,w){return x(w,y-0x36a);}this[UQ(0x315,0x3b7)]({'rowIndex':this['focusedCell'][UQ(0x327,0x357)]-0x1,'column':this[UQ(0x1ee,0x22e)]});}['onArrowDownKey'](B){function UV(y,w){return x(y,w-0x30d);}this[UV(0x107,0x190)][UV(0x285,0x2ca)]<this['resourceStore'][UV(0x182,0x17e)]-0x1&&this[UV(0x32f,0x2b8)]({'rowIndex':this[UV(0xdf,0x190)][UV(0x29f,0x2ca)]+0x1,'column':this[UV(0x145,0x191)]});}['onEscapeKey'](B){function Uv(y,w){return x(y,w-0x21b);}!B[Uv(0x1df,0x18e)][Uv(0x1a2,0x100)](Uv(0x21,0x86))&&this['focusCell']({'rowIndex':this[Uv(0x35,0x9e)]['rowIndex'],'column':this[Uv(0xfb,0x9f)]});}[x(-0x109,-0x14a)](B,l=null){const f=this;if(!f[Uz(0x5e8,0x591)]&&B['length']){const q={'finalize'(E=!![]){l&&l(E);function UO(y,w){return Uz(w,y- -0x30f);}if(E!==![]){if(B[UO(0x165,0x146)](p=>{var I;function Ud(y,w){return UO(y- -0x2df,w);}return p[Ud(-0x84,-0x35)]||((I=p[Ud(-0xc3,-0x17c)])===null||I===void 0x0?void 0x0:I['isOccurrence']);}))B[UO(0x2c2,0x254)](p=>p[UO(0x1e6,0x257)]?p[UO(0x21c,0x17b)]['remove']():p[UO(0x217,0x276)]());else{const p=B[0x0][UO(0x2af,0x211)]?f[UO(0x259,0x28d)]:f[UO(0x248,0x1e1)];p[UO(0x217,0x14e)](B);}}}};let M;B[0x0][Uz(0x515,0x5be)]?M=f[Uz(0x60f,0x5a2)](Uz(0x4ed,0x4ee),{'assignmentRecords':B,'context':q}):M=f[Uz(0x5dd,0x5a2)]('beforeEventDelete',{'eventRecords':B,'context':q});if(M!==![])return q[Uz(0x4d7,0x588)](),!![];}function Uz(y,w){return x(y,w-0x61d);}return![];}[x(-0x62,-0x4a)](B){}[x(-0x1c3,-0x1ac)](B){}get['isActionableLocation'](){function Uk(y,w){return x(y,w-0x257);}if(!this[Uk(0x100,0x181)][Uk(0x142,0x1f5)])return super[Uk(0x96,0xac)];}get[x(-0x1b6,-0x11f)](){}};export{ClockTemplate,CurrentConfig,EventMenu,ProjectConsumer,RecurrenceConfirmationPopup,ScheduleMenu,SchedulerEventNavigation,TimeSpanMenuBase,locale};