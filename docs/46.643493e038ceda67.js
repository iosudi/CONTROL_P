"use strict";(self.webpackChunkCONTROL_P=self.webpackChunkCONTROL_P||[]).push([[46],{3046:(N,m,l)=>{l.r(m),l.d(m,{AuthenticationModule:()=>h});var e=l(177),u=l(9417),f=l(3474),d=l(5430),y=l(3887),_=l(668),g=l(7705);const I=[];let O=(()=>{class a{static{this.\u0275fac=function(C){return new(C||a)}}static{this.\u0275mod=g.$C({type:a})}static{this.\u0275inj=g.G2t({imports:[_.iI.forChild(I),_.iI]})}}return a})(),h=(()=>{class a{static{this.\u0275fac=function(C){return new(C||a)}}static{this.\u0275mod=g.$C({type:a})}static{this.\u0275inj=g.G2t({imports:[e.MD,O,u.X1,u.YN,d.q4,y.G,f.Ph]})}}return a})()},3474:(N,m,l)=>{l.d(m,{Ph:()=>x,gj:()=>v});var e=l(7705),u=l(9417),f=l(177),d=l(1413),y=l(6977);function _(s,r){if(1&s&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&s){const t=e.XpG(3);e.R7$(1),e.SpI(" ",t.config.separator," ")}}const g=function(s){return{"error-input":s}};function I(s,r){if(1&s){const t=e.RV6();e.qex(0),e.j41(1,"input",4,5),e.bIt("paste",function(o){e.eBV(t);const i=e.XpG(2);return e.Njj(i.handlePaste(o))})("keyup",function(o){const c=e.eBV(t).index,p=e.XpG(2);return e.Njj(p.onKeyUp(o,c))})("input",function(o){const c=e.eBV(t).index,p=e.XpG(2);return e.Njj(p.onInput(o,c))})("keydown",function(o){const c=e.eBV(t).index,p=e.XpG(2);return e.Njj(p.onKeyDown(o,c))}),e.k0s(),e.DNE(3,_,2,1,"span",6),e.bVm()}if(2&s){const t=r.$implicit,n=r.index,o=r.last,i=e.XpG(2);e.R7$(1),e.ZvI("otp-input ",i.config.inputClass,""),e.Y8G("pattern",i.config.allowNumbersOnly?"\\d*":"")("type",i.inputType)("placeholder",(null==i.config?null:i.config.placeholder)||"")("ngStyle",i.config.inputStyles)("formControl",i.otpForm.controls[t])("id",i.getBoxId(n))("ngClass",e.eq3(11,g,(null==i.config?null:i.config.showError)&&(null==i.formCtrl?null:i.formCtrl.invalid)&&((null==i.formCtrl?null:i.formCtrl.dirty)||(null==i.formCtrl?null:i.formCtrl.touched)))),e.R7$(2),e.Y8G("ngIf",i.config.separator&&!o)}}function O(s,r){if(1&s){const t=e.RV6();e.j41(0,"div",1),e.bIt("focusin",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.onFocusIn())})("focusout",function(){e.eBV(t);const o=e.XpG();return e.Njj(o.onFocusOut())}),e.j41(1,"div",2),e.DNE(2,I,4,13,"ng-container",3),e.k0s()()}if(2&s){const t=e.XpG();e.ZvI("ng-otp-input-wrapper wrapper ",t.config.containerClass,""),e.Mz_("id","c_",t.componentKey,""),e.Y8G("ngStyle",t.config.containerStyles),e.R7$(2),e.Y8G("ngForOf",t.controlKeys)}}class h{static ifTab(r){return this.ifKey(r,"Tab")}static ifDelete(r){return this.ifKey(r,"Delete;Del")}static ifBackspace(r){return this.ifKey(r,"Backspace")}static ifRightArrow(r){return this.ifKey(r,"ArrowRight;Right")}static ifLeftArrow(r){return this.ifKey(r,"ArrowLeft;Left")}static ifSpacebar(r){return this.ifKey(r,"Spacebar; ")}static ifKey(r,t){return t.split(";").some(o=>o===r.key)}}class a{static keys(r){return r?Object.keys(r):[]}}let v=(()=>{class s{set disabled(t){this.setDisabledState(t)}get inputType(){return this.config?.isPasswordInput?"password":this.config?.allowNumbersOnly?"tel":"text"}get controlKeys(){return a.keys(this.otpForm?.controls)}constructor(t){this.document=t,this.config={length:4},this.onBlur=new d.B,this.onInputChange=new d.B,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+(new Date).getTime().toString(36),this.destroy$=new d.B,this.activeFocusCount=0,this.onChange=()=>{},this.onTouched=()=>{},this._isDisabled=!1}ngOnInit(){this.otpForm=new u.gE({});for(let t=0;t<this.config.length;t++)this.otpForm.addControl(this.getControlName(t),new u.MJ);this.otpForm.valueChanges.pipe((0,y.Q)(this.destroy$)).subscribe(t=>{a.keys(this.otpForm.controls).forEach(n=>{var o=this.otpForm.controls[n].value;o&&o.length>1&&(o.length>=this.config.length?this.setValue(o):this.rebuildValue())})})}setDisabledState(t){this._isDisabled=t,this.otpForm&&(t?this.otpForm.disable({emitEvent:!1}):this.otpForm.enable({emitEvent:!1}))}writeValue(t){this.currentVal=t||null,this.otpForm&&this.currentVal&&this.setValue(this.currentVal)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}onFocusIn(){this.onTouched(),this.activeFocusCount++}onFocusOut(){setTimeout(()=>{this.activeFocusCount--,0===this.activeFocusCount&&(this.onTouched(),this.onBlur.next())},0)}ngAfterViewInit(){if(!this.config.disableAutoFocus){const t=this.document.getElementById(`c_${this.componentKey}`);if(t){const n=t.getElementsByClassName("otp-input")[0];n&&n.focus&&n.focus()}}}getControlName(t){return`ctrl_${t}`}onKeyDown(t,n){const o=this.getBoxId(n-1),i=this.getBoxId(n),c=this.getBoxId(n+1);if(h.ifSpacebar(t))return t.preventDefault(),!1;if(h.ifBackspace(t))return t.target.value?this.clearInput(i,n):(this.clearInput(o,n-1),this.setSelected(o)),void this.rebuildValue();if(h.ifDelete(t))return t.target.value?this.clearInput(i,n):(this.clearInput(o,n-1),this.setSelected(o)),void this.rebuildValue();if(this.ifValidKeyCode(t)){t.target.value=t.key;let p=this.getControlName(n);this.otpForm.controls[p]?.setValue(t.key),t.preventDefault(),this.setSelected(c),this.rebuildValue()}}onInput(t,n){if(this.config.allowNumbersOnly&&!this.validateNumber(this.currentVal?`${this.currentVal}${t.target.value}`:t.target.value))return t.target.value=null,t.stopPropagation(),t.preventDefault(),void this.clearInput(null,n)}onKeyUp(t,n){h.ifTab(t)&&(n-=1);const o=this.getBoxId(n+1),i=this.getBoxId(n-1);return h.ifRightArrow(t)?(t.preventDefault(),void this.setSelected(o)):h.ifLeftArrow(t)?(t.preventDefault(),void this.setSelected(i)):void 0}validateNumber(t){return t&&/^[0-9]+$/.test(t)}getBoxId(t){return`otp_${t}_${this.componentKey}`}clearInput(t,n){let o=this.getControlName(n);if(this.otpForm.controls[o]?.setValue(null),t){const i=this.document.getElementById(t);i&&i instanceof HTMLInputElement&&(i.value=null)}}setSelected(t){this.focusTo(t);const n=this.document.getElementById(t);n&&n.setSelectionRange&&setTimeout(()=>{n.setSelectionRange(0,1)},0)}ifValidKeyCode(t){const n=t.key;return this.config?.allowNumbersOnly?this.validateNumber(n):/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/^[a-zA-Z0-9%*_\-@#$!]$/.test(n)&&1==n.length}focusTo(t){const n=this.document.getElementById(t);n&&n.focus()}setValue(t){if(!this.config.allowNumbersOnly||!isNaN(t)){if(this.otpForm.reset(),!t)return void this.rebuildValue();t=t.toString().replace(/\s/g,""),Array.from(t).forEach((n,o)=>{this.otpForm.get(this.getControlName(o))&&this.otpForm.get(this.getControlName(o)).setValue(n)}),this.config.disableAutoFocus||setTimeout(()=>{const n=this.document.getElementById(`c_${this.componentKey}`);var o=t.length<this.config.length?t.length:this.config.length-1;let i=n.getElementsByClassName("otp-input")[o];i&&i.focus&&setTimeout(()=>{i.focus()},1)},0),this.rebuildValue()}}rebuildValue(){let t=null;a.keys(this.otpForm.controls).forEach(n=>{let o=this.otpForm.controls[n].value;if(o){let i=o.length>1,c=!this.config.allowNumbersOnly&&this.config.letterCase&&("upper"==this.config.letterCase.toLocaleLowerCase()||"lower"==this.config.letterCase.toLocaleLowerCase());o=o[0];let p=c?"upper"==this.config.letterCase.toLocaleLowerCase()?o.toUpperCase():o.toLowerCase():o;c&&p==o?c=!1:o=p,null==t?t=o:t+=o,(i||c)&&this.otpForm.controls[n].setValue(o)}}),this.currentVal!=t&&(this.currentVal=t,this.onChange(t),this.formCtrl?.setValue&&this.formCtrl.setValue(t),this.onInputChange.next(t))}handlePaste(t){let n=t.clipboardData||window.clipboardData;if(n)var o=n.getData("Text");t.stopPropagation(),t.preventDefault(),o&&(!this.config.allowNumbersOnly||this.validateNumber(o))&&this.setValue(o)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static{this.\u0275fac=function(n){return new(n||s)(e.rXU(f.qQ))}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["ng-otp-input"],["ngx-otp-input"]],inputs:{config:"config",formCtrl:"formCtrl",disabled:"disabled"},outputs:{onBlur:"onBlur",onInputChange:"onInputChange"},standalone:!0,features:[e.Jv_([{provide:u.kq,useExisting:(0,e.Rfq)(()=>s),multi:!0}]),e.aNF],decls:1,vars:1,consts:[["tabindex","0",3,"class","id","ngStyle","focusin","focusout",4,"ngIf"],["tabindex","0",3,"id","ngStyle","focusin","focusout"],[1,"n-o-c"],[4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"pattern","type","placeholder","ngStyle","formControl","id","ngClass","paste","keyup","input","keydown"],["inp",""],[4,"ngIf"]],template:function(n,o){1&n&&e.DNE(0,O,3,6,"div",0),2&n&&e.Y8G("ngIf",null==o.otpForm?null:o.otpForm.controls)},dependencies:[u.X1,u.me,u.BC,u.R_,u.l_,f.bT,f.pM,f.B3,f.YU],styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]{margin:0 .51rem}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:first-child{margin-left:0}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:last-child{margin-right:0}.n-o-c[_ngcontent-%COMP%]{display:flex;align-items:center}.error-input[_ngcontent-%COMP%]{border-color:red}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]})}}return s})(),x=(()=>{class s{static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275mod=e.$C({type:s})}static{this.\u0275inj=e.G2t({imports:[v]})}}return s})()}}]);