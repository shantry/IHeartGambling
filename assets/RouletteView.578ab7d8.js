import{B as b,T as _}from"./ToastNotification.be7a9522.js";import{_ as m,o as g,c as v,r as d,a as h,n as C,b as l,t as f}from"./index.f83ebe6c.js";import{I as x}from"./InfoComponent.fde068f8.js";const w={data(){return{canvasCtx:void 0,canvas:void 0,spinning:!1,canvasRadius:.5,offset:.05,fieldCount:20,ballSize:.05,initialMoveDelay:10,moveDelayDelta:10}},mounted(){this.canvas=this.$refs.roulette,this.canvasCtx=this.canvas.getContext("2d"),window.addEventListener("resize",this.rescaleCanvas),this.rescaleCanvas();const t=this.canvas.width;this.drawFreshWheel(t,t*this.canvasRadius,t/2,t/2)},methods:{spin(){this.spinning=!0;const t=this.canvas.width;let e=this.canvasRadius*t;const n=t/2,i=t/2;let s=0;const a=this.drawWheelWithBall,o=this.moveDelayDelta,p=Math.floor(Math.random()*101)+200;return new Promise(r=>{function u(c){if(c>=p)return r(s%2===0?"dark-blue":"light-blue");a(t,e,n,i,s++),setTimeout(u,c,c+o*Math.floor(Math.random()*2))}u(this.initialMoveDelay)})},drawWheelWithBall(t,e,n,i,s){this.drawFreshWheel(t,e,n,i),this.canvasCtx.fillStyle="white",this.canvasCtx.beginPath();const a=(e-t*this.ballSize*2)*Math.sin(2*Math.PI*s/this.fieldCount)+n,o=(e-t*this.ballSize*2)*Math.cos(2*Math.PI*s/this.fieldCount)+i;this.canvasCtx.arc(a,o,t*this.ballSize,0,2*Math.PI),this.canvasCtx.fill()},rescaleCanvas(){if(this.spinning)return;this.canvas.width=window.innerHeight/3.5,this.canvas.height=window.innerHeight/3.5;const t=this.canvas.height;this.drawFreshWheel(t,t*this.canvasRadius,t/2,t/2)},drawFreshWheel(t,e,n,i){this.canvasCtx.fillStyle="#191D24",this.canvasCtx.beginPath(),this.canvasCtx.arc(n,i,e,0,2*Math.PI,!1),this.canvasCtx.fill(),e-=t*this.offset;let s=1/this.fieldCount*Math.PI;for(let a=0;a<this.fieldCount;a++){const o=1/this.fieldCount*2*Math.PI;this.canvasCtx.beginPath(),this.canvasCtx.arc(n,i,e,s,s+o),s+=o,this.canvasCtx.lineTo(n,i),a%2===0?this.canvasCtx.fillStyle="#6184D8":this.canvasCtx.fillStyle="#19297C",this.canvasCtx.fill()}}}},S={ref:"roulette"};function R(t,e,n,i,s,a){return g(),v("canvas",S,null,512)}const B=m(w,[["render",R]]),M={props:["points"],data(){return{rouletteBets:[1e5,2e5],autospinning:!1,lastReward:0,spinning:!1,colors:["dark-blue","light-blue"],buttonSound:new Audio("spin.mp3"),end:!1}},components:{BetSelectButton:b,Roulette:B,ToastNotification:_,InfoComponent:x},methods:{spinRoulette(){const t=this.$refs.betSelect.$data.value;if(this.$props.points-t<0){this.autospinning=!1;return}this.spinning=!0,this.$emit("changePoints",-t),this.buttonSound.play();const e=this.$refs.colorSelect.$data.value;this.$refs.roulette.spin().then(n=>{this.end=!0,n===e?(this.$emit("changePoints",t*1.5),this.lastReward=t*1.5):this.lastReward=0,this.spinning=!1,setTimeout(()=>{this.end=!1},3e3)})}},watch:{autospinning:function(){!this.spinning&&this.autospinning&&this.spinRoulette()},spinning:function(){!this.spinning&&this.autospinning&&setTimeout(this.spinRoulette,1e3)}}},y={class:"flex min-h-screen w-screen justify-center items-center transition-all"},P={class:"flex flex-col w-5/6 sm:w-2/3 items-center gap-5"},W={class:"flex flex-col items-center"},D=l("h2",{class:"text-[2em]"},"Roulette",-1),I={id:"lastReward",class:"font-mono"},T={id:"options",class:"flex flex-col items-center justify-center sm:flex-row gap-5 transition-all"},k={class:"btn-group btn-group-horizontal"},z=["disabled"];function N(t,e,n,i,s,a){const o=d("ToastNotification"),p=d("Roulette"),r=d("BetSelectButton"),u=d("InfoComponent");return g(),v("main",y,[h(o,{message:"You earned "+s.lastReward+" points!",class:C(["transition-all",s.end?"translate-x-0":"translate-x-96"])},null,8,["message","class"]),l("div",P,[l("div",W,[D,l("p",I,"Last reward: "+f(s.lastReward),1)]),h(p,{class:"!m-0 p-5",ref:"roulette"},null,512),l("div",T,[h(r,{bets:s.rouletteBets,disabled:s.spinning||s.autospinning,id:"betSelect",ref:"betSelect"},null,8,["bets","disabled"]),l("div",k,[l("button",{class:"btn btn-primary transition-all",onClick:e[0]||(e[0]=c=>a.spinRoulette()),ref:"spinButton",disabled:s.spinning||s.autospinning},f(s.spinning||s.autospinning?"Spinning...":"Spin"),9,z),l("button",{class:"btn",onClick:e[1]||(e[1]=c=>s.autospinning=!s.autospinning),id:"autospinButton"},f(s.autospinning?"Stop":"Autospin"),1)]),h(r,{title:"Choose color",bets:s.colors,disabled:s.spinning||s.autospinning,id:"colorSelect",ref:"colorSelect"},null,8,["bets","disabled"])]),h(u,{elements:[{title:"Light-blue",value:"50%",desc:"Reward: Original bet x 1.5"},{title:"Dark-blue",value:"50%",desc:"Reward: Original bet x 1.5"}]},null,8,["elements"])])])}const V=m(M,[["render",N]]);export{V as default};
