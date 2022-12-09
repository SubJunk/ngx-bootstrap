"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[592],{37999:(u,d,t)=>{t.d(d,{Y:()=>o});var l=t(41571),s=t(37340);const e="400ms cubic-bezier(0.4,0.0,0.2,1)",r=[(0,s.oB)({height:0,visibility:"hidden"}),(0,s.jt)(e,(0,s.oB)({height:"*",visibility:"visible"}))],_=[(0,s.oB)({height:"*",visibility:"visible"}),(0,s.jt)(e,(0,s.oB)({height:0,visibility:"hidden"}))];let o=(()=>{class p{constructor(n,a,h){this._el=n,this._renderer=a,this.collapsed=new l.vpe,this.collapses=new l.vpe,this.expanded=new l.vpe,this.expands=new l.vpe,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=h.build(_),this._factoryExpandAnimation=h.build(r)}set display(n){this._display=n,"none"!==n?this.isAnimated?this.toggle():this.show():this.hide()}set collapse(n){this.collapseNewValue=n,(!this._player||this._isAnimationDone)&&(this.isExpanded=n,this.toggle())}get collapse(){return this.isExpanded}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(n,a){if(!n||!this._stylesLoaded)return i=>i();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const h=a===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.reset(),this._player=h.create(this._el.nativeElement),this._player.play(),i=>this._player?.onDone(i)}}return p.\u0275fac=function(n){return new(n||p)(l.Y36(l.SBq),l.Y36(l.Qsj),l.Y36(s._j))},p.\u0275dir=l.lG2({type:p,selectors:[["","collapse",""]],hostVars:9,hostBindings:function(n,a){2&n&&(l.uIk("aria-hidden",a.isCollapsed),l.ekj("collapse",a.isCollapse)("in",a.isExpanded)("show",a.isExpanded)("collapsing",a.isCollapsing))},inputs:{display:"display",isAnimated:"isAnimated",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]}),p})()},61334:(u,d,t)=>{t.d(d,{f:()=>e}),t(37999);var s=t(41571);let e=(()=>{class r{static forRoot(){return{ngModule:r,providers:[]}}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({}),r})()},8839:(u,d,t)=>{t.d(d,{dl:()=>e.d,UU:()=>s.U}),t(75205);var s=t(71663),e=t(29339);t(34763)},34763:(u,d,t)=>{t.d(d,{K:()=>c});var l=t(70033),s=t(69604),e=t(41571),r=t(29339),_=t(36895);function o(n,a){if(1&n&&(e.TgZ(0,"h3",3),e._uU(1),e.qZA()),2&n){const h=e.oxw();e.xp6(1),e.Oqu(h.title)}}const p=["*"];let c=(()=>{class n{constructor(h){this._placement="top",Object.assign(this,h)}set placement(h){this._placement=this._bsVersions.isBs5?s.Bz[h]:h}get _bsVersions(){return(0,l.Wl)()}checkMarginNecessity(){return(0,s.lx)(this._placement)}}return n.\u0275fac=function(h){return new(h||n)(e.Y36(r.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["popover-container"]],hostAttrs:["role","tooltip",2,"display","block"],hostVars:7,hostBindings:function(h,i){2&h&&(e.uIk("id",i.popoverId),e.Tol("popover in popover-"+i._placement+" bs-popover-"+i._placement+" "+i._placement+" "+i.containerClass+" "+i.checkMarginNecessity()),e.ekj("show",!i._bsVersions.isBs3)("bs3",i._bsVersions.isBs3))},inputs:{placement:"placement",title:"title"},ngContentSelectors:p,decls:4,vars:1,consts:[[1,"popover-arrow","arrow"],["class","popover-title popover-header",4,"ngIf"],[1,"popover-content","popover-body"],[1,"popover-title","popover-header"]],template:function(h,i){1&h&&(e.F$t(),e._UZ(0,"div",0),e.YNc(1,o,2,1,"h3",1),e.TgZ(2,"div",2),e.Hsn(3),e.qZA()),2&h&&(e.xp6(1),e.Q6J("ngIf",i.title))},dependencies:[_.O5],styles:[".bs3.popover-top[_nghost-%COMP%]{margin-bottom:10px}.bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-2px}.bs3.popover.top[_nghost-%COMP%]{margin-bottom:10px}.popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-4px}.bs3.bs-popover-left[_nghost-%COMP%]{margin-right:.5rem}.bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:.3rem 0}"],changeDetection:0}),n})()},29339:(u,d,t)=>{t.d(d,{d:()=>s});var l=t(41571);let s=(()=>{class e{constructor(){this.adaptivePosition=!0,this.placement="top",this.triggers="click",this.outsideClick=!1,this.delay=0}}return e.\u0275fac=function(_){return new(_||e)},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},75205:(u,d,t)=>{t.d(d,{k:()=>n});var l=t(29339),s=t(8281),e=t(34763),r=t(69604),_=t(5963),o=t(70033),p=t(41571);let c=0,n=(()=>{class a{constructor(i,v,m,g,C,f){this._elementRef=v,this._renderer=m,this._positionService=f,this.popoverId=c++,this.adaptivePosition=!0,this.placement="top",this.outsideClick=!1,this.triggers="click",this.containerClass="",this.delay=0,this._isInited=!1,this._popover=C.createLoader(v,g,m).provide({provide:l.d,useValue:i}),Object.assign(this,i),this.onShown=this._popover.onShown,this.onHidden=this._popover.onHidden,typeof window<"u"&&v.nativeElement.addEventListener("click",function(){try{v.nativeElement.focus()}catch{return}})}get isOpen(){return this._popover.isShown}set isOpen(i){i?this.show():this.hide()}setAriaDescribedBy(){this._ariaDescribedby=this.isOpen?`ngx-popover-${this.popoverId}`:void 0,this._ariaDescribedby?(this._popover.instance&&(this._popover.instance.popoverId=this._ariaDescribedby),this._renderer.setAttribute(this._elementRef.nativeElement,"aria-describedby",this._ariaDescribedby)):this._renderer.removeAttribute(this._elementRef.nativeElement,"aria-describedby")}show(){if(this._popover.isShown||!this.popover||this._delayTimeoutId)return;this._positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition},preventOverflow:{enabled:this.adaptivePosition,boundariesElement:this.boundariesElement||"scrollParent"}}});const i=()=>{this._delayTimeoutId&&(this._delayTimeoutId=void 0),this._popover.attach(e.K).to(this.container).position({attachment:this.placement}).show({content:this.popover,context:this.popoverContext,placement:this.placement,title:this.popoverTitle,containerClass:this.containerClass}),!this.adaptivePosition&&this._popover._componentRef&&(this._positionService.calcPosition(),this._positionService.deletePositionElement(this._popover._componentRef.location)),this.isOpen=!0,this.setAriaDescribedBy()},v=()=>{this._popoverCancelShowFn&&this._popoverCancelShowFn()};if(this.delay){const m=(0,_.H)(this.delay).subscribe(()=>{i(),v()});this.triggers&&(0,o.AL)(this.triggers).forEach(g=>{!g.close||(this._popoverCancelShowFn=this._renderer.listen(this._elementRef.nativeElement,g.close,()=>{m.unsubscribe(),v()}))})}else i()}hide(){this._delayTimeoutId&&(clearTimeout(this._delayTimeoutId),this._delayTimeoutId=void 0),this.isOpen&&(this._popover.hide(),this.setAriaDescribedBy(),this.isOpen=!1)}toggle(){if(this.isOpen)return this.hide();this.show()}ngOnInit(){this._isInited||(this._isInited=!0,this._popover.listen({triggers:this.triggers,outsideClick:this.outsideClick,show:()=>this.show(),hide:()=>this.hide()}))}ngOnDestroy(){this._popover.dispose()}}return a.\u0275fac=function(i){return new(i||a)(p.Y36(l.d),p.Y36(p.SBq),p.Y36(p.Qsj),p.Y36(p.s_b),p.Y36(s.oj),p.Y36(r.sA))},a.\u0275dir=p.lG2({type:a,selectors:[["","popover",""]],inputs:{adaptivePosition:"adaptivePosition",boundariesElement:"boundariesElement",popover:"popover",popoverContext:"popoverContext",popoverTitle:"popoverTitle",placement:"placement",outsideClick:"outsideClick",triggers:"triggers",container:"container",containerClass:"containerClass",isOpen:"isOpen",delay:"delay"},outputs:{onShown:"onShown",onHidden:"onHidden"},exportAs:["bs-popover"]}),a})()},71663:(u,d,t)=>{t.d(d,{U:()=>_});var l=t(36895),s=t(8281),e=t(69604),r=t(41571);let _=(()=>{class o{static forRoot(){return{ngModule:o,providers:[s.oj,e.sA]}}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[l.ez]}),o})()},92159:(u,d,t)=>{t.d(d,{DS:()=>r.D,z8:()=>e.z}),t(52069),t(46485);var e=t(77674),r=t(51616)},52069:(u,d,t)=>{t.d(d,{X:()=>o});var l=t(70033),s=t(69604),e=t(41571),r=t(51616);const _=["*"];let o=(()=>{class p{constructor(n){Object.assign(this,n)}get _bsVersions(){return(0,l.Wl)()}ngAfterViewInit(){this.classMap={in:!1,fade:!1},this.placement&&(this._bsVersions.isBs5&&(this.placement=s.Bz[this.placement]),this.classMap[this.placement]=!0),this.classMap[`tooltip-${this.placement}`]=!0,this.classMap.in=!0,this.animation&&(this.classMap.fade=!0),this.containerClass&&(this.classMap[this.containerClass]=!0)}}return p.\u0275fac=function(n){return new(n||p)(e.Y36(r.D))},p.\u0275cmp=e.Xpm({type:p,selectors:[["bs-tooltip-container"]],hostAttrs:["role","tooltip"],hostVars:3,hostBindings:function(n,a){2&n&&(e.uIk("id",a.id),e.Tol("show tooltip in tooltip-"+a.placement+" bs-tooltip-"+a.placement+" "+a.placement+" "+a.containerClass))},ngContentSelectors:_,decls:3,vars:0,consts:[[1,"tooltip-arrow","arrow"],[1,"tooltip-inner"]],template:function(n,a){1&n&&(e.F$t(),e._UZ(0,"div",0),e.TgZ(1,"div",1),e.Hsn(2),e.qZA())},styles:[".tooltip[_nghost-%COMP%]{display:block;pointer-events:none}.bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-2px}.bs3.tooltip.bottom[_nghost-%COMP%]{margin-top:0}.bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{margin:0}.bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:.3rem 0}"],changeDetection:0}),p})()},51616:(u,d,t)=>{t.d(d,{D:()=>s});var l=t(41571);let s=(()=>{class e{constructor(){this.adaptivePosition=!0,this.placement="top",this.triggers="hover focus",this.delay=0}}return e.\u0275fac=function(_){return new(_||e)},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},46485:(u,d,t)=>{t.d(d,{i:()=>a});var l=t(70655),s=t(41571),e=t(52069),r=t(51616),_=t(8281),o=t(70033),p=t(69604),c=t(5963);let n=0;class a{constructor(i,v,m,g,C,f){this._elementRef=g,this._renderer=C,this._positionService=f,this.tooltipId=n++,this.adaptivePosition=!0,this.tooltipChange=new s.vpe,this.placement="top",this.triggers="hover focus",this.containerClass="",this.isDisabled=!1,this.delay=0,this.tooltipAnimation=!0,this.tooltipFadeDuration=150,this.tooltipStateChanged=new s.vpe,this._tooltip=v.createLoader(this._elementRef,i,this._renderer).provide({provide:r.D,useValue:m}),Object.assign(this,m),this.onShown=this._tooltip.onShown,this.onHidden=this._tooltip.onHidden}get isOpen(){return this._tooltip.isShown}set isOpen(i){i?this.show():this.hide()}set htmlContent(i){(0,o.O4)("tooltipHtml was deprecated, please use `tooltip` instead"),this.tooltip=i}set _placement(i){(0,o.O4)("tooltipPlacement was deprecated, please use `placement` instead"),this.placement=i}set _isOpen(i){(0,o.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead"),this.isOpen=i}get _isOpen(){return(0,o.O4)("tooltipIsOpen was deprecated, please use `isOpen` instead"),this.isOpen}set _enable(i){(0,o.O4)("tooltipEnable was deprecated, please use `isDisabled` instead"),this.isDisabled=!i}get _enable(){return(0,o.O4)("tooltipEnable was deprecated, please use `isDisabled` instead"),this.isDisabled}set _appendToBody(i){(0,o.O4)('tooltipAppendToBody was deprecated, please use `container="body"` instead'),this.container=i?"body":this.container}get _appendToBody(){return(0,o.O4)('tooltipAppendToBody was deprecated, please use `container="body"` instead'),"body"===this.container}set _popupClass(i){(0,o.O4)("tooltipClass deprecated")}set _tooltipContext(i){(0,o.O4)("tooltipContext deprecated")}set _tooltipPopupDelay(i){(0,o.O4)("tooltipPopupDelay is deprecated, use `delay` instead"),this.delay=i}get _tooltipTrigger(){return(0,o.O4)("tooltipTrigger was deprecated, please use `triggers` instead"),this.triggers}set _tooltipTrigger(i){(0,o.O4)("tooltipTrigger was deprecated, please use `triggers` instead"),this.triggers=(i||"").toString()}ngOnInit(){this._tooltip.listen({triggers:this.triggers,show:()=>this.show()}),this.tooltipChange.subscribe(i=>{i||this._tooltip.hide()}),this.onShown.subscribe(()=>{this.setAriaDescribedBy()}),this.onHidden.subscribe(()=>{this.setAriaDescribedBy()})}setAriaDescribedBy(){this._ariaDescribedby=this.isOpen?`tooltip-${this.tooltipId}`:void 0,this._ariaDescribedby?this._renderer.setAttribute(this._elementRef.nativeElement,"aria-describedby",this._ariaDescribedby):this._renderer.removeAttribute(this._elementRef.nativeElement,"aria-describedby")}toggle(){if(this.isOpen)return this.hide();this.show()}show(){if(this._positionService.setOptions({modifiers:{flip:{enabled:this.adaptivePosition},preventOverflow:{enabled:this.adaptivePosition,boundariesElement:this.boundariesElement||"scrollParent"}}}),this.isOpen||this.isDisabled||this._delayTimeoutId||!this.tooltip)return;const i=()=>{this._delayTimeoutId&&(this._delayTimeoutId=void 0),this._tooltip.attach(e.X).to(this.container).position({attachment:this.placement}).show({content:this.tooltip,placement:this.placement,containerClass:this.containerClass,id:`tooltip-${this.tooltipId}`})},v=()=>{this._tooltipCancelShowFn&&this._tooltipCancelShowFn()};this.delay?(this._delaySubscription&&this._delaySubscription.unsubscribe(),this._delaySubscription=(0,c.H)(this.delay).subscribe(()=>{i(),v()}),this.triggers&&(0,o.AL)(this.triggers).forEach(m=>{!m.close||(this._tooltipCancelShowFn=this._renderer.listen(this._elementRef.nativeElement,m.close,()=>{this._delaySubscription?.unsubscribe(),v()}))})):i()}hide(){this._delayTimeoutId&&(clearTimeout(this._delayTimeoutId),this._delayTimeoutId=void 0),this._tooltip.isShown&&(this._tooltip.instance?.classMap&&(this._tooltip.instance.classMap.in=!1),setTimeout(()=>{this._tooltip.hide()},this.tooltipFadeDuration))}ngOnDestroy(){this._tooltip.dispose(),this.tooltipChange.unsubscribe(),this._delaySubscription&&this._delaySubscription.unsubscribe(),this.onShown.unsubscribe(),this.onHidden.unsubscribe()}}a.\u0275fac=function(i){return new(i||a)(s.Y36(s.s_b),s.Y36(_.oj),s.Y36(r.D),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(p.sA))},a.\u0275dir=s.lG2({type:a,selectors:[["","tooltip",""],["","tooltipHtml",""]],inputs:{adaptivePosition:"adaptivePosition",tooltip:"tooltip",placement:"placement",triggers:"triggers",container:"container",containerClass:"containerClass",boundariesElement:"boundariesElement",isOpen:"isOpen",isDisabled:"isDisabled",delay:"delay",htmlContent:["tooltipHtml","htmlContent"],_placement:["tooltipPlacement","_placement"],_isOpen:["tooltipIsOpen","_isOpen"],_enable:["tooltipEnable","_enable"],_appendToBody:["tooltipAppendToBody","_appendToBody"],tooltipAnimation:"tooltipAnimation",_popupClass:["tooltipClass","_popupClass"],_tooltipContext:["tooltipContext","_tooltipContext"],_tooltipPopupDelay:["tooltipPopupDelay","_tooltipPopupDelay"],tooltipFadeDuration:"tooltipFadeDuration",_tooltipTrigger:["tooltipTrigger","_tooltipTrigger"]},outputs:{tooltipChange:"tooltipChange",onShown:"onShown",onHidden:"onHidden",tooltipStateChanged:"tooltipStateChanged"},exportAs:["bs-tooltip"]}),(0,l.gn)([(0,o.GU)(),(0,l.w6)("design:type",Object)],a.prototype,"tooltip",void 0)},77674:(u,d,t)=>{t.d(d,{z:()=>_});var l=t(36895),s=t(8281),e=t(69604),r=t(41571);let _=(()=>{class o{static forRoot(){return{ngModule:o,providers:[s.oj,e.sA]}}}return o.\u0275fac=function(c){return new(c||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[l.ez]}),o})()},5963:(u,d,t)=>{t.d(d,{H:()=>_});var l=t(68306),s=t(34986),e=t(93532);function _(o=0,p,c=s.P){let n=-1;return null!=p&&((0,e.K)(p)?c=p:n=p),new l.y(a=>{let h=function r(o){return o instanceof Date&&!isNaN(o)}(o)?+o-c.now():o;h<0&&(h=0);let i=0;return c.schedule(function(){a.closed||(a.next(i++),0<=n?this.schedule(void 0,n):a.complete())},h)})}},34986:(u,d,t)=>{t.d(d,{P:()=>r,z:()=>e});var l=t(84408);const e=new(t(640).v)(l.o),r=e}}]);