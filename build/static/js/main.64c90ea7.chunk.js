(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t){t.exports=[{hero:"https://placeimg.com/640/480/animals",text:"Animals are here.",image:"https://placeimg.com/150/150/animals/sepia",id:0},{hero:"https://placeimg.com/640/480/people",text:"People are here.",image:"https://placeimg.com/150/150/people/sepia",id:1},{hero:"https://placeimg.com/640/480/arch",text:"Arch is here.",image:"https://placeimg.com/150/150/arch/sepia",id:2},{hero:"https://placeimg.com/640/480/tech",text:"Tech is here.",image:"https://placeimg.com/150/150/tech/sepia",id:3},{hero:"https://placeimg.com/640/480/nature",text:"Nature is here.",image:"https://placeimg.com/150/150/nature/sepia",id:4},{hero:"https://placeimg.com/640/480/animals/grayscale",text:"Animals are here.",image:"https://placeimg.com/150/150/animals/sepia",id:5},{hero:"https://placeimg.com/640/480/people/grayscale",text:"People are here.",image:"https://placeimg.com/150/150/people/sepia",id:6},{hero:"https://placeimg.com/640/480/arch/grayscale",text:"Arch is here.",image:"https://placeimg.com/150/150/arch/sepia",id:7},{hero:"https://placeimg.com/640/480/tech/grayscale",text:"Tech is here.",image:"https://placeimg.com/150/150/tech/sepia",id:8},{hero:"https://placeimg.com/640/480/nature/grayscale",text:"Nature is here.",image:"https://placeimg.com/150/150/nature/sepia",id:9}]},20:function(t,e,a){t.exports=a(34)},29:function(t,e,a){},30:function(t,e,a){},31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a.n(s),r=a(12),n=a.n(r),l=a(4),c=a(5),h=a(14),d=a(15),o=a(18),m=a(16),p=a(1),u=a(19),g=(a(29),function(t){return i.a.createElement("div",{className:"".concat(t.cssClassCnt)},t.data.map(function(e){return e.active?i.a.createElement("div",{className:"Item ".concat(t.cssClass),key:e.id,style:{background:"URL(".concat(e.hero,")")}},i.a.createElement("div",null,i.a.createElement("div",{className:"Item__small"},i.a.createElement("img",{src:e.image,alt:e.id}),i.a.createElement("span",null,e.text)))):null}))}),E=(a(30),function(t){return i.a.createElement("div",{className:"VisibleItems"},i.a.createElement(g,{data:t.data,cssClass:t.cssClass,cssClassCnt:t.cssClassCnt}))}),S=(a(31),function(t){return i.a.createElement("div",{className:"SwitchPanel"},i.a.createElement("div",{onClick:t.prevSlider},i.a.createElement("i",{class:"fas fa-backward"})),i.a.createElement("div",null,i.a.createElement("p",null,t.count)),i.a.createElement("div",{onClick:t.nextSlider},i.a.createElement("i",{class:"fas fa-forward"})))}),v=(a(32),function(t){function e(t){var a;return Object(h.a)(this,e),(a=Object(o.a)(this,Object(m.a)(e).call(this,t))).state={idElemFirst:0,idElemSecond:1,idElemThird:2,intervalID:"",mouseInSlider:!1,cssClass:"rotateLeft",cssClassCnt:"cntSliderFirst",countSlider:1},a.timer=a.timer.bind(Object(p.a)(a)),a.nextSlider=a.nextSlider.bind(Object(p.a)(a)),a.prevSlider=a.prevSlider.bind(Object(p.a)(a)),a.clearInt=a.clearInt.bind(Object(p.a)(a)),a.upInt=a.upInt.bind(Object(p.a)(a)),a}return Object(u.a)(e,t),Object(d.a)(e,[{key:"componentWillMount",value:function(){this.props.switchingTask(this.state.idElemFirst,this.state.idElemSecond,this.state.idElemThird)}},{key:"componentDidMount",value:function(){this.upInt()}},{key:"nextSlider",value:function(){var t,e=(t=0===this.state.idElemThird?1:1===this.state.idElemThird?2:2===this.state.idElemThird?3:this.state.idElemThird===this.props.data.length-3?this.props.data.length-2:this.state.idElemThird===this.props.data.length-2?this.props.data.length-1:this.state.idElemFirst+3>=this.props.data.length-1?0:this.state.idElemFirst+3)+1>=this.props.data.length?0:t+1,a=e+1>=this.props.data.length?0:e+1,s="rotateLeft"===this.state.cssClass?"rotateRight":"rotateLeft",i="cntSliderFirst"===this.state.cssClassCnt?"cntSliderTwo":"cntSliderFirst",r=this.state.countSlider+1>Math.ceil(this.props.data.length/3)?1:this.state.countSlider+1;this.setState({idElemFirst:t,idElemSecond:e,idElemThird:a,cssClass:s,cssClassCnt:i,countSlider:r}),this.props.switchingTask(t,e,a)}},{key:"prevSlider",value:function(){var t,e=(t=0===this.state.idElemFirst?this.props.data.length-1:1===this.state.idElemFirst?0:2===this.state.idElemFirst?1:this.state.idElemFirst-1)-1<0?this.props.data.length-1:t-1,a=e-1<0?this.props.data.length-1:e-1,s="rotateLeft"===this.state.cssClass?"rotateRight":"rotateLeft",i="cntSliderFirst"===this.state.cssClassCnt?"cntSliderTwo":"cntSliderFirst",r=this.state.countSlider-1<1?Math.ceil(this.props.data.length/3):this.state.countSlider-1;this.setState({idElemFirst:a,idElemSecond:e,idElemThird:t,cssClass:s,cssClassCnt:i,countSlider:r}),this.props.switchingTask(a,e,t)}},{key:"clearInt",value:function(){this.setState({mouseInSlider:!0}),clearInterval(this.state.intervalID)}},{key:"upInt",value:function(){this.setState({mouseInSlider:!1});var t=setInterval(this.timer,5e3);this.setState({intervalID:t})}},{key:"timer",value:function(){this.nextSlider()}},{key:"render",value:function(){return i.a.createElement("div",{className:"Slider",onMouseOver:this.clearInt,onMouseOut:this.upInt},i.a.createElement(S,{prevSlider:this.prevSlider,nextSlider:this.nextSlider,count:this.state.countSlider}),i.a.createElement(E,{data:this.props.data,cssClass:this.state.cssClass,cssClassCnt:this.state.cssClassCnt}))}}]),e}(i.a.Component));var f=Object(c.b)(function(t){return{data:t.data}},{switchingTask:function(t,e,a){return{type:"SWITCHING_TASK",idElemFirst:t,idElemSecond:e,idElemThird:a}}})(v),C=(a(33),function(){return i.a.createElement(f,null)}),b=a(6),I={data:a(17)};var T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SWITCHING_TASK":return Object(b.a)({},t,{data:t.data.map(function(t){return t.id===e.idElemFirst||t.id===e.idElemSecond||t.id===e.idElemThird?Object(b.a)({},t,{active:!t.active}):Object(b.a)({},t,{active:!1})})});default:return t}},x=Object(l.b)(T);n.a.render(i.a.createElement(c.a,{store:x},i.a.createElement(C,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.64c90ea7.chunk.js.map