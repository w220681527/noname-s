game.import('extension',{
    name:'朔',
    content:function(config){
		game.save('AI_version',1.0);
		if(config.checkUpdate){
			lib.arenaReady.push(function(){
				setTimeout(function(){
					var script=lib.init.js("http://share.weiyun.com/c1fc94fdfb02bc73246d6e798e006c4d",'update',function(){
						script.remove();
						var version=window.updateVersion;
						game.save('updateVersion',version);
						delete window.updateVersion;
						var log=window.changeLog;
						delete window.changeLog;
						var str='';
						for(var i=0;i<log.length;i++){
							str+=log[i]+'\n';
						}
						if(!lib.storage.s_num) game.save('s_num',0);
						console.log('新版本:'+version);
						console.log('当前版本:'+lib.storage.s_version);
						var num=version-lib.storage.s_version;
						if(num>0&&version!=lib.storage.s_num){
							var next=confirm('发现新版本: '+version+' 是否下载？\n更新内容:\n'+str);
							if(next){
								window.open('http://share.weiyun.com/c1fc94fdfb02bc73246d6e798e006c4d/朔.zip');
							}
							else{
								game.save('s_num',version);
							}
						}
						
					},function(){
						console.log('暂无更新');
					});
				},5000)
			})
}
		get.drawcardPile=function(name){
 			var card;
 			for(var i=0;i<ui.cardPile.childNodes.length;i++){
 				card=ui.cardPile.childNodes[i];
 				if(typeof name=='string'){
 					if(card.name==name){
 						return card;
 					}
 				}
 				else if(typeof name=='function'){
 					if(name(card)){
 						return card;
 					}
 				}
 			}
 			return null;
 		}
 		get.discardPile=function(name){
 			var cards=[];
 			var card;
 			for(var i=0;i<ui.discardPile.childNodes.length;i++){
 				card=ui.discardPile.childNodes[i];
 				if(typeof name=='string'){
 					if(card.name==name){
 						return card;
 					}
 				}
 				else if(typeof name=='function'){
 					if(name(card)){
 						return card;
 					}
 				}
 				else{
 					cards=cards.concat(card);
 				}
 			}
 			if(cards.length) return cards.randomGet(); 			return null;
 		}
        game.addCharacterPack({
            character:{
xm_196:["female","wei",4,["xm_1961","xm_1962","xm_1963"],["zhu"]],
xm_124:["female","wu",4,["xm_1241","xm_1242"]],
xm_182:["female","wei",4,["xm_1821","xm_1822","xm_1823"],["zhu"]],
xm_184:["female","shu",4,["xm_1841","xm_1842","xm_1843"]],
xm_185:["female","wei",3,["xm_1851","xm_1852"],["zhu"]],
xm_166:["female","shu",1,["xm_1661","xm_1662"]],
xm_161:["female","qun",3,["xm_1611","xm_1612","xm_1613"]],
xm_186:["female","wei",4,["xm_1861","xm_1862","xm_1863"]],
xm_157:["female","wei",4,["xm_1571","xm_1572"]],
xm_110:["female","wu",4,["xm_1101","xm_1102"],["zhu"]],
xm_109:["female","shu",4,["xm_1091","xm_1092","xm_1093"],["zhu"]],
xm_190:["female","shu",4,["xm_1901","xm_1902","xm_1903"],["zhu"]],
xm_192:["female","shu",4,["xm_1901","xm_1903","xm_1922","xm_1921"],["zhu"]],
xm_107:["female","wu",4,["xm_1071","xm_1072"],["zhu"]],
xm_193:["female","wu",4,["xm_1931","xm_1932","xm_1933"],["zhu"]],
xm_112:["female","shu",4,["xm_1121","xm_1122","xm_1123"],["zhu"]],
xm_194:["female","qun",4,["xm_1941","xm_1942","xm_1943"]],
xm_195:["female","wei",4,["jgj_skill","xm_1952","xm_1953"]],
xm_197:["female","shu",4,["xm_1971","xm_1972","xm_1973"]],
xm_199:["female","wu",4,["xm_1991","xm_1992","xm_1993"]],
xm_200:["female","wei",4,["xm_2001","xm_2002"]],
xm_201:["female","wu",4,["xm_2011","xm_2012","xm_2013"]],
xm_001:["female","qun",4,["xm_0011","xm_0012"],["zhu"]],
xm_002:["female","qun",4,["xm_0021","xm_0022"]],
xm_st:["female","",3,["xm_st1","xm_god"],["zhu"]],
xm_sp:["female","",3,["xm_sp1","xm_sp2","xm_god"],["zhu"]],
xm_sssss:["female","",3,["xm_sssss1","xm_god"],["zhu"]],
xm_love:["female","",3,["xm_love1","xm_love2","xm_god"],["zhu"]],
xm_ll:["female","",3,["xm_ll1","xm_ll2","xm_god"],["zhu"]],
xm_mz1:["female","",3,["xm_mz11","xm_mz12","xm_god"],["zhu"]],
xm_mz2:["female","",3,["xm_mz21","xm_mz22","xm_god"],["zhu"]],
xm_mz3:["female","",3,["xm_mz31","xm_god"],["zhu"]],
xm_mz4:["female","",3,["xm_mz41","xm_die"],["zhu"]],
xm_mz5:["female","",3,["xm_mz51","xm_god"],["zhu"]],
xmIA:["female","",4,["IA1","xm_god"],["zhu"]],
xm_xiaoy:["female","",3,["xm_xiaoy1","xm_xiaoy2","xm_god"],["zhu"]],
xm_000:["female","",3,["xm_0001","xm_0002"],["zhu"]],
xmjx:["female","",3,["xmjx1","xmjx2"],["zhu"]],
sp_zhangliang:["male","qun",4,["jijun","fangtong"]],
zj_001:["female","wu",4,["zj_0011","zj_0012","zj_0013","zj_0014","zj_0015","zj_0016"],["zhu"]],
xm_003:["female","qun",4,["xm_0031","xm_0032","xm_0033","xm_0034"],["zhu"]],
            },
perfectPair:{
xm_001:['xm_003'],
},
 	skill:{
xm_sp2:{
trigger:{
player:"phaseEnd",
},
init:function (player){
player.storage.xm_sp2=0;
},
filter:function (event,player){
return player.storage.xm_sp2>2&&!player.storage.xm_sp3&&player.isDamaged();
},
forced:true,
content:function (){
player.storage.xm_sp3=true;
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player){
game.players[i].disableSkill('xm_sp2',game.players[i].skills);
game.players[i].skip('phase')
game.players[i].mark('灭',{
name:'创始封印',
content:'技能处于封印状态',
});
player.gain(game.players[i].get('he').randomGets(2))
}
}
player.addSkill('xm_mz11')
player.addSkill('xm_mz12')
}
},
xm_god:{
trigger:{player:"damageBegin"},
forced:true,
priority:-500,
content:function(){
if(trigger.num>1) trigger.num=1
},
group:'xm_god1',
},
xm_god1:{
trigger:{
player:"phaseDiscardBefore",
},
forced:true,
content:function (){
trigger.untrigger();
trigger.finish();
}
},
xm_sssss1:{
audio:8,
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
target.disableSkill('xm_ssssss',target.skills)
target.discard(target.get('e'))
'step 1'
target.damage()
target.damage()
'step 2'
target.skip('dying')
target.damage(8,'fire')
game.delay(3);
'step 3'
target.enableSkill('xm_ssssss')
},
ai:{
basic:{
order:10,
},
result:{
target:-5,
},
},
},
xm_sp1:{
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
'step 0'
player.storage.xm_sp2++
event.target=[];
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player){
event.target.push(game.players[i]);
}
}
'step 1'
var target=event.target.randomGet(player)
target.skip('phase')
}
},
xm_love1:{
trigger:{source:'damageBefore'},
check:function (event,player){
return ai.get.attitude(player,event.player)>=0;
},
content:function (){
trigger.untrigger();
trigger.finish();
trigger.player.recover();
}
},
xm_love2:{
enable:"phaseUse",
usable:1,
selectTarget:[1,2],
filterTarget:true,
content:function (){
target.recover();
},
ai:{
basic:{
order:10,
},
result:{
target:5,
},
},
},
xm_1121:{
audio:true,
enable:"phaseUse",
filter:function (event,player){
return player.storage.xm_xmxm>=200&&!player.storage.xm_1121;
},
content:function (){
player.storage.xm_xmxm-=200
player.syncStorage('xm_xmxm');
player.mark('xm_112111',{
name:'孤军深入',
content:'提升400点闪避及暴击',
});
player.storage.xm_sb+=0.4
player.storage.xm_bj+=0.4
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='xm_112111'){
player.node.marks.childNodes[i].setBackground('xm_112','character');
player.node.marks.childNodes[i].innerHTML='';
}
}	
player.storage.xm_1121=get.time()
},
ai:{
basic:{
order:10,
},
result:{
player:2,
},
},
},
_xm_112111:{
trigger:{
player:['useCardAfter','useCardBefore','phaseBefore','loseEnd','phaseBegin','phaseDradBegin','phaseUseBegin','phaseUseEnd','phaseEnd','phaseDiscardAfter','phaseDiscardBegin','useSkillBefore','judgeBefore','judgeAfter','gainBefore','gainEnd'],
},
forced:true,
filter:function(event,player){
return player.storage.xm_1121;
},
content:function (){
'step 0'
player.storage.xm_112111=get.time()-player.storage.xm_1121;
'step 1'
if(player.storage.xm_112111>=60000){
delete player.storage.xm_1121;
player.storage.xm_sb-=0.4
player.storage.xm_bj-=0.4
player.unmark('xm_112111')
}
}
},
xm_1122:{
init2:function (player){
if(player.storage.xm_sb<0.15) player.storage.xm_sb=0.15
},
},
xm_1123:{
init2:function (player){
if(player.storage.xm_bj<0.15) player.storage.xm_bj=0.15
},
},
_xm_storage:{
trigger:{global:'gameStart'},
forced:true,
filter:function(){
return !_status.connectMode;
},
content:function(){
player.storage.xm_xmxm=0;
player.markSkill('xm_xmxm')
player.storage.xm_bj=0.05
player.storage.xm_hj=0.05
player.storage.xm_fb=0.05
player.storage.xm_fk=0.05
player.storage.xm_fc=0
player.storage.xm_hc=0
player.storage.xm_sb=0.05
if(player.hasSkill('xm_1122')&&0.15>player.storage.xm_sb) player.storage.xm_sb=0.15
if(player.hasSkill('xm_1123')&&0.15>player.storage.xm_bj) player.storage.xm_bj=0.15
if(player.hasSkill('xm_1963')&&0.5>player.storage.xm_fk) player.storage.xm_fk=0.5
if(player.hasSkill('xm_2002')){
if(0.6>player.storage.xm_fk) player.storage.xm_fk=0.6
if(0.6>player.storage.xm_hj) player.storage.xm_hj=0.6
}
if(player.hasSkill('xm_1973')){
if(0.2>player.storage.xm_fc) player.storage.xm_fc=0.2
if(0.2>player.storage.xm_hc) player.storage.xm_hc=0.2
}
}
},
xm_1931:{
audio:2,
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=600;
},
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
player.storage.xm_1931=0
player.storage.xm_xmxm-=600
player.syncStorage('xm_xmxm');
'step 1'
if(Math.random()<=0.5){
target.damage();
}
else{
target.popup('闪避');
}
player.storage.xm_1931++;
'step 2'
if(player.storage.xm_1931<8){
event.goto(1);
}
'step 3'
if(!target.isAlive()){
player.storage.xm_bj+=0.1
player.popup('提升暴击')
}

},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_1932:{
audio:2,
init2:function (player){
player.storage.xm_1932=0.5;
},
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
'step 0'
event.target=[];
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player){
event.target.push(game.players[i]);
}
}
'step 1'
var target=event.target.randomGets(2,player)
if(Math.random()<=player.storage.xm_1932){
for(var j=0;j<target.length;j++){
target[j].damage();
}
player.storage.xm_1932+=0.05
player.popup('提升命中')
}
else{
for(var x=0;x<target.length;x++){
target[x].popup('闪避');
}
}
}
},
xm_1933:{
audio:2,
trigger:{global:"damage"},
forced:true,
content:function(){
if(player.storage.xm_sb<0.85){
player.storage.xm_sb+=0.01
player.popup('提升闪避')
}
}
},
_xm_sss:{
trigger:{player:"damageBefore"},
forced:true,
content:function(){
if(!trigger.nature){
var hj=player.storage.xm_hj
if(trigger.source) hj-=trigger.source.storage.xm_hc
var sb=player.storage.xm_sb
if(player.hasSkill('IA4')) hj+=0.3
if(player.hasSkill('IA6')) sb+=0.3
if(trigger.source&&trigger.source.storage.xm_zm) sb+=0.5
if(Math.random()<=sb){
player.popup('闪避')
trigger.untrigger();
trigger.finish();
}
else if(trigger.source&&Math.random()<=trigger.source.storage.xm_bj){
trigger.source.popup('暴击')
trigger.num+=trigger.num
}
if(Math.random()<=hj){
player.popup('格挡')
trigger.num--
}
}
else{
if(trigger.source) var fb=trigger.source.storage.xm_fb
var fk=player.storage.xm_fk
if(trigger.source) fk-=trigger.source.storage.xm_fc
if(player.hasSkill('IA12')) fb+=0.3
if(player.hasSkill('IA13')) fk+=0.3
if(trigger.source&&Math.random()<=fb){
trigger.source.popup('暴击')
trigger.num+=trigger.num
}
if(Math.random()<=fk){
player.popup('格挡')
trigger.num--
}
}
}
},
xm_1071:{
audio:2,
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=500&&!player.storage.xm_fr;
},
filterTarget:function (card,player,target){
return player!=target&&!target.storage.xm_fr;
},
content:function (){
player.storage.xm_fr=target;
target.disableSkill('xm_fr',target.skills)
target.mark('封印',{
name:'封印',
content:'技能处于封印状态',
});
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
_xm_107111:{
trigger:{
player:"phaseBegin",
},
filter:function (event,player){
return player.storage.xm_fr&&player.storage.xm_fr.isAlive()&&player.hasSkill('xm_1071')
},
forced:true,
content:function (){
if(player.storage.xm_xmxm>=100){
player.storage.xm_xmxm-=100
player.syncStorage('xm_xmxm');
if(player.storage.xm_xmxm<0){
player.storage.xm_xmxm=0
player.syncStorage('xm_xmxm');
}
}
if(player.storage.xm_xmxm<100){
player.storage.xm_fr.enableSkill('xm_fr')
player.storage.xm_fr.unmark('封印')
delete player.storage.xm_fr
if(player.hasSkill('xm_1072')&&player.storage.xm_xmxm<50){
player.logSkill('xm_1072')
var num=0
for(var j=0;j<game.players.length;j++){
num+=game.players[j].num('e');
game.players[j].discard(game.players[j].get('e'));
}
player.draw(num)
}
}
}
},
_xm_fr:{
trigger:{
player:"dieBefore",
},
forced:true,
content:function(){
if(player.storage.xm_fr){
player.storage.xm_fr.enableSkill('xm_fr')
player.storage.xm_fr.unmark('封印')
delete player.storage.xm_fr
}
for(var j=0;j<game.players.length;j++){
if(game.players[j].storage.xm_fr==player){
player.enableSkill('xm_fr')
player.unmark('封印')
delete game.players[j].storage.xm_fr
}
}
}
},
xm_1072:{
audio:2,
},
xm_1901:{
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=700;
},
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
for(var j=0;j<game.players.length;j++){
if(game.players[j]!=player&&!game.players[j].storage.xm_cm){
game.players[j].storage.xm_cm=true;
game.players[j].mark('沉默',{
name:'沉默',
content:'无法造成伤害',
});
}
}
player.storage.xm_1901=0
player.storage.xm_xmxm-=700
player.syncStorage('xm_xmxm');
'step 1'
if(Math.random()<=0.75){
target.damage();
}
else{
target.popup('闪避');
}
player.storage.xm_1901++;
'step 2'
if(player.storage.xm_1901<8){
event.goto(1);
}
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_1902:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
game.swapSeat(player,target.next)
target.damage()
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_1903:{
init2:function (player){
for(var j=0;j<game.players.length;j++){
game.players[j].storage.xm_1903=0
}
},
trigger:{source:'damageEnd'},
forced:true,
filter:function (event,player){
return (player.name=='xm_190'||player.name2=='xm_190')||(player.name=='xm_192'||player.name2=='xm_192')
},
content:function(){
trigger.player.storage.xm_1903++
if(trigger.player.storage.xm_1903>=2){
player.storage._xm_1903=true
trigger.player.storage.xm_1903=0
}
}
},
_xm_1903:{
trigger:{source:'damageBegin'},
forced:true,
filter:function (event,player){
return player.storage._xm_1903
},
content:function(){
trigger.num++
if(!trigger.player.storage.xm_cm){
trigger.player.storage.xm_cm=true;
trigger.player.mark('沉默',{
name:'沉默',
content:'无法造成伤害',
});
}
player.storage._xm_1903=false
player.storage.xm_1921++
}
},
xm_1921:{
init2:function (player){


player.storage.xm_1921=0;
},
},
xm_1922:{
trigger:{
player:"phaseEnd",
},
filter:function (event,player){
return !player.storage.xm_1922&&!player.storage.xm_xiaoy2
},
content:function (){
player.storage.xm_1922=true
player.out()
}
},
_xm_192211:{
trigger:{
player:["phaseEnd","dieBefore"],
},
filter:function (event,player){
return player.next.storage.xm_1922&&player.next.isOut()&&!player.storage.xm_xiaoy2
},
forced:true,
content:function (){
player.next.out()
}
},
jijun:{
skillAnimation:"epic",
animationStr:"我好方",
init2:function (player){
player.storage.jijun=[];
},
mark:true,
marktext:"方",
intro:{
content:"cards",
},
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.num('h');
},
check:function(card){
return (card.name!='tao'&&card.name!='jiu')
},
filterCard:true,
selectCard:[1,Infinity],
discard:false,
content:function (){
player.storage.jijun=player.storage.jijun.concat(cards);
player.syncStorage('jijun');
},
ai:{
basic:{
order:1,
},
result:{
player:1,
},
},
},
fangtong:{
trigger:{
player:"phaseEnd",
},
forced:true,
filter:function (event,player){
return player.storage.jijun&&player.storage.jijun.length>35;
},
content:function (){
if(lib.config.mode=='identity'){
if(player!=game.me&&player.identity!=game.me.identity){
if((player.identity=='zhu'&&game.me.identity!='zhong')||(player.identity=='zhong'&&game.me.identity!='zhu')) game.forceOver(false);
else game.forceOver(true);
}
else{
game.forceOver(true);
}
}
else{
if(player!=game.me&&player.identity!=game.me.identity){
game.forceOver(false);
}
else{
game.forceOver(true);
}
}
}
},
xm_1091:{
audio:true,
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=500&&player.storage.xm_1093>=14;
},
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
target.damage(7,'fire');
player.storage.xm_xmxm-=500
player.syncStorage('xm_xmxm');
player.storage.xm_1093-=14
player.syncStorage('xm_1093');
player.skip('dying')
player.skip('die')
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
group:'xm_109111',
},
xm_109111:{
skillAnimation:"epic",
animationColor:"fire",
audio:true,
enable:"chooseToUse",
filter:function (event,player){
if(event.type!='dying') return false;
if(player!=event.dying) return false;
if(player.storage.xm_1093<7) return false;
},
content:function (){
player.draw(5);
player.recover(2);
player.storage.xm_1093-=7
player.syncStorage('xm_1093');
},
ai:{
order:1,
skillTagFilter:function (player){
if(player.storage.xm_1093<7) return false; if(player.hp>0) return false;
},
save:true,
result:{
player:10,
},
},
},
xm_1092:{
audio:true,
trigger:{source:'damageBegin'},
forced:true,
content:function(){
trigger.nature='fire'
player.storage.xm_1093+=2
player.syncStorage('xm_1093');
}
},
xm_1093:{
init2:function (player){
player.markSkill('xm_1093')
player.storage.xm_1093=0;
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='xm_1093'){
player.node.marks.childNodes[i].setBackground('xm_109','character');
player.node.marks.childNodes[i].innerHTML='';
}
}	
},
mark:true,
intro:{
content:function (storage){
return '当前拥有：'+storage+'层凤凰炽能'
}
},
audio:3,
trigger:{global:'useCard'},
forced:true,
filter:function(event,player){
if(event.player==player) return false;
for(var i=0;i<event.targets.length;i++){
if(event.targets[i]==player&&Math.random()<=0.5) return true;
}
return false;
},
content:function(){
player.storage.xm_1093+=2
player.syncStorage('xm_1093');
trigger.untrigger();
trigger.finish();
}
},
xm_1101:{
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=1000;
},
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
player.say('如果用一发子弹解决不了，那就用十二发！')
player.storage.xm_1101=0
player.storage.xm_xmxm-=1000
player.syncStorage('xm_xmxm');
'step 1'
if(Math.random()<=0.75){
if(Math.random()<=0.5){
target.storage.xm_hj-=0.01
target.damage(2);
}
else target.damage();
}
else{
target.popup('闪避');
}
player.storage.xm_1101++;
'step 2'
if(player.storage.xm_1101<12){
event.goto(1);
}
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_1102:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target&&target.num('e');
},
content:function (){
target.discard(target.get('e'))
player.draw(2)
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_xmxm:{
mark:true,
marktext:"能",
intro:{
content:function (storage){
return '<li>每造成或受到一次伤害，你获得40-60点能量'+'<li>每杀死一名角色，你获得300点能量'+'<li>当前能量值：'+storage
}
},
},
xm_1571:{
audio:6,
enable:"phaseUse",
filter:function (event,player){
return player.storage.xm_xmxm>=600;
},
content:function (){
for(var j=0;j<game.players.length;j++){
if(game.players[j]!=player){
game.players[j].damage()
}
}
player.storage.xm_xmxm-=600
player.syncStorage('xm_xmxm');
},
ai:{
basic:{
order:10,
},
result:{
player:2,
},
},
},
_xm_157111:{
trigger:{
global:"dieAfter",
},
forced:true,
filter:function(event,player){
return event.player.hasSkill('xm_1571');
},
content:function(){
player.damage('nosource')
}
},
_xm_xiaoy212:{
trigger:{
global:"dieAfter",
},
forced:true,
content:function(){
var pl=game.players.concat(game.dead)
for(var i=0;i<pl.length;i++){
if(pl[i].storage.xm_xiaoy2&&pl[i].isOut()) pl[i].classList.remove('out');
delete pl[i].storage.xm_xiaoy3
pl[i].storage.xm_xiaoy=false
pl[i].storage.xm_xiaoy2=false
pl[i].update();
}
}
},
_xm_19900:{
trigger:{
global:"dieAfter",
},
forced:true,
filter:function(event,player){
return event.player.storage.xm_1991;
},
content:function(){
'step 0'
delete trigger.player.storage.xm_1991;
trigger.player.unmark('水柱')
event.target=[];
for(var j=0;j<game.players.length;j++){
event.target.push(game.players[j]);
}
'step 1'
if(event.target.length){
var target=event.target.randomGet(player)
target.mark('水柱')
for(var i=0;i<target.node.marks.childNodes.length;i++){
if(target.node.marks.childNodes[i].name=='水柱'){
target.node.marks.childNodes[i].setBackgroundImage('extension/朔/'+'水'+'.jpg'); 	
target.node.marks.childNodes[i].innerHTML='';
}
}	
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
target.storage.xm_1991=s;
game.log('水柱移动到',target,'的位置')
if(target.name!='xm_199'&&target.name2!='xm_199'){
target.damage('nosource',['thunder','fire'].randomGet());

target.storage.hj-=0.01;
}
else{
target.recover()
target.storage.hj+=0.05;
}
}
}
},
_xm_xmxm2:{
trigger:{
global:"dieAfter",
},
forced:true,
filter:function(event,player){
return player==event.source;
},
content:function(){
game.log(trigger.source,'获得击杀奖励，增加300点能量')
player.storage.xm_xmxm+=300
player.syncStorage('xm_xmxm');
if(player.storage.xm_1922) player.storage.xm_1922=false
var pl=game.players.concat(game.dead)
for(var i=0;i<pl.length;i++){
pl[i].storage.xm_1953=false
}
}
},
_xm_xmxm3:{
trigger:{
source:"damage",
player:"damageAfter",
},
forced:true,
content:function (){
var n=[40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60].randomGet();
if(!player.storage.xm_0032) player.storage.xm_xmxm+=n
player.syncStorage('xm_xmxm');
}
},
xm_1572:{
audio:true,
trigger:{
source:"damageBefore",
},
forced:true,
filter:function(event,player){
return game.players.length<game.dead.length;
},
priority:80,
content:function (){
trigger.num++
},
group:'xm_157211'
},
xm_157211:{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function(event,player){
return game.players.length<game.dead.length;
},
content:function (){
trigger.num--
}
},
xm_1861:{
trigger:{
global:"dieBefore",
},
filter:function(event,player){
return player.storage.xm_186212&& event.player.storage.xm_186211&&game.zhu!=player
},
content:function(){
trigger.player.gainMaxHp();
trigger.player.hp=trigger.player.maxHp
trigger.untrigger();
trigger.finish();
game.removePlayer(player)
}
},
xm_1862:{
enable:"phaseUse",
filter:function (event,player){
return !player.storage.xm_186212;
},
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
player.loseMaxHp(true);
target.storage.xm_186211=true;
target.mark('契约',{
name:'契约',
content:'造成的伤害+1',
});
player.storage.xm_186212=true;
player.mark('契约',{
name:'契约',
content:'受到的伤害-1',
});
},
ai:{
basic:{
order:10,
},
result:{
target:2,
},
},
},
_xm_186211:{
trigger:{
source:"damageBefore",
},
forced:true,
priority:80,
filter:function(event,player){
return player.storage.xm_186211;
},
content:function (){
trigger.num++
}
},
_xm_186212:{
trigger:{
player:"damageBefore",
},
forced:true,
filter:function(event,player){
return player.storage.xm_186212;
},
content:function (){
trigger.num--
}
},
xm_1863:{
enable:"phaseUse",
usable:1,
filterTarget:true,
content:function (){
target.storage.xm_xmxm+=50
target.syncStorage('xm_xmxm');
target.skip('damage')
target.unmark('沉默');
target.storage.xm_cm=false;
target.unmark('诅咒');
target.storage.xm_zz=false;
target.unmark('致盲');
target.storage.xm_zm=false;
for(var j=0;j<game.players.length;j++){
if(game.players[j].storage.xm_fr==target){
target.enableSkill('xm_fr')
target.unmark('封印')
delete game.players[j].storage.xm_fr
}
}
},
ai:{
basic:{
order:10,
},
result:{
target:2,
},
},
},
xm_1611:{
trigger:{
global:"phaseBegin",
},
forced:true,
filter:function (event,player){
for(var i=0;i<game.players.length;i++){
if(game.players[i].hp<event.player.hp) return false;
}
return true;
},
content:function (){
'step 0'
player.chooseControl('造成伤害','回复体力',ui.create.dialog('请选择一项效果对'+get.translation(trigger.player)+'执行','hidden')).ai=function (event,player){
if(ai.get.attitude(player,trigger.player)<0) return '造成伤害';
return '回复体力';
};
'step 1'
if(result.control=='造成伤害') trigger.player.damage()
else trigger.player.recover()
}
},
xm_1612:{
trigger:{
player:"damage",
},
forced:true,
content:function (){
player.storage.xm_1612=true
player.mark('结界',{
name:'结界',
content:'免疫所有伤害',
});
}
},
_xm_161211:{

trigger:{
player:"damageBefore",
},
forced:true,
filter:function(event,player){
return player.storage.xm_1612;
},
content:function (){
trigger.untrigger();
trigger.finish();
}
},
_xm_161212:{
trigger:{
player:"phaseBefore",
},
forced:true,
content:function (){
player.storage.xm_1612=false
player.unmark('结界');
}
},
xm_1613:{
trigger:{player:'changeHp'},
forced:true,
content:function(){
player.draw(2)
}
},
xm_1661:{
audio:5,
trigger:{global:'phaseBegin'},
forced:true,
content:function(){
player.draw(player.storage.xm_1662);
}
},
_xm_166111:{
trigger:{
global:"dieAfter",
},
forced:true,
filter:function(event,player){
return event.player.hasSkill('xm_1661');
},
content:function(){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.xm_1661=get.time();
}
}
},
_xm_166112:{
trigger:{
player:['useCardAfter','useCardBefore','phaseBefore','loseEnd','phaseBegin','phaseDradBegin','phaseUseBegin','phaseUseEnd','phaseEnd','phaseDiscardAfter','phaseDiscardBegin','useSkillBefore','judgeBefore','judgeAfter','gainBefore','gainEnd'],
},
forced:true,
filter:function(event,player){
return player.storage.xm_1661;

},
content:function (){
'step 0'
player.storage.xm_16611=get.time()-player.storage.xm_1661;
'step 1'
if(player.storage.xm_16611>=20000){
for(var j=0;j<game.players.length;j++){
delete game.players[j].storage.xm_1661;
}
for(var i=0;i<game.dead.length;i++){
if(game.dead[i].hasSkill('xm_1661')&&!game.dead[i].storage.xm_xiaoy2){
game.dead[i].logSkill('xm_1661')
game.dead[i].storage.xm_1662++;
game.dead[i].revive(game.dead[i].maxHp);
}
}
}
}
},
xm_1662:{
audio:2,
init:function (player){
player.storage.xm_1662=0;
},
trigger:{
source:"damageBegin",
},
forced:true,
priority:80,
content:function (){
trigger.num+=Math.floor(player.storage.xm_1662/2)
}
},
xm_1841:{
audio:2,
trigger:{player:'shaBegin'},
forced:true,
content:function(){
game.swapSeat(player,trigger.targets[0].next)
trigger.directHit=true;
},
mod:{	targetInRange:function(card,player,target,now){
if(card.name=='sha') return true;
}
}
},
xm_1842:{
audio:true,
trigger:{
source:"damageEnd",
},
forced:true,
content:function (){
'step 0'
var p=[]
if(!trigger.player.storage.xm_cm){
if(trigger.player.num('he')>=4) p.push('弃牌')
p.push('进入沉默')
trigger.player.chooseControl(p,ui.create.dialog('请选择一项','hidden'));
}
else{
result.control='弃牌'
}
'step 1'
if(result.control=='弃牌'){
trigger.player.discard(trigger.player.get('he').randomGets(4));
event.finish();
}
else{
trigger.player.storage.xm_cm=true;
trigger.player.mark('沉默',{
name:'沉默',
content:'无法造成伤害',
});
}
}
},
_xm_184211:{
trigger:{
source:"damageBefore",
},
forced:true,
filter:function(event,player){
return player.storage.xm_cm;
},
content:function (){
trigger.untrigger();
trigger.finish();
}
},
_xm_cmzm:{
trigger:{
player:"phaseEnd",
},
forced:true,
content:function (){
player.unmark('沉默');
player.storage.xm_cm=false;
player.unmark('致盲');
player.storage.xm_zm=false;
}
},
xm_1843:{
group:['xm_184311','xm_184312'],
},
xm_184312:{
audio:true,
trigger:{
source:"damageBegin",
},
forced:true,
filter:function(event,player){
return event.player.hp>player.hp;
},
content:function (){
trigger.num++
}
},
xm_184311:{
audio:true,
trigger:{
player:"damageBegin",
},
forced:true,
filter:function(event,player){
return event.source&&event.source.hp>player.hp;
},
content:function (){
trigger.num--
}
},
xm_1241:{
init2:function (player){
player.storage.xm_1241=[];
},
mark:true,
intro:{
content:"cards",
},
audio:3,
trigger:{
global:"shaMiss",
},
forced:true,
content:function (){
player.storage.xm_1241=player.storage.xm_1241.concat(get.cards(3));
player.syncStorage('xm_1241');
},
group:['xm_124111','xm_124112','xm_124113'],
},
xm_124111:{
trigger:{
player:"phaseBegin",
},
direct:true,
filter:function(event,player){
return player.storage.xm_1241.length;
},
content:function (){
"step 0"
player.chooseButton(['聚能水炮',player.storage.xm_1241],[1,player.storage.xm_1241.length]);
"step 1"
if(result.bool){
player.logSkill('xm_1241');
player.gain(result.links);
player.storage.xm_1241.remove(result.links);
player.syncStorage('xm_1241');
}
}
},
xm_124112:{
trigger:{
player:"phaseEnd",
},
direct:true,
filter:function(event,player){
return player.storage.xm_1241.length;
},
content:function (){
"step 0"
player.chooseTarget('是否发动【聚能水炮】？',function(card,player,target){
return target!=player;
}).ai=function(target){

return -ai.get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
event.target.chooseButton(['聚能水炮',player.storage.xm_1241],true);
}
"step 2"
if(result.bool){
event.card=result.links[0];
player.logSkill('xm_1241',event.target);
event.target.gain(event.card);
event.target.damage(2);
player.storage.xm_1241.remove(event.card);
player.syncStorage('xm_1241');
}
}
},
xm_124113:{
trigger:{
source:"damageBegin",
},
direct:true,
priority:80,
filter:function(event,player){
return event.card&&player.storage.xm_1241.length&&event.card.name=='sha';
},
content:function (){
"step 0"
player.chooseButton(['聚能水炮',player.storage.xm_1241]);
"step 1"
if(result.bool){
player.logSkill('xm_1241');
ui.discardPile.appendChild(result.links[0]);
game.log(player,'将',result.links[0],'置入了弃牌堆');
player.storage.xm_1241.remove(result.links[0]);
player.syncStorage('xm_1241');
trigger.num++;
}
}
},
xm_1242:{
audio:2,
trigger:{
source:"damageEnd",
},
forced:true,
content:function (){
var n=[1,2,4].randomGet();
if(n==1) trigger.player.loseHp();
if(n==2) trigger.player.loseMaxHp();
if(n==4) trigger.player.discard(trigger.player.get('he').randomGet());
}
},
xm_1821:{
init:function(player){
player.storage.xm_1821=[];
},
audio:2,
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.num('h',{type:'basic'});
},
filterCard:function (card){
return get.type(card,'trick')=='basic';
},
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
player.storage.xm_1821=target;
player.addTempSkill('xm_182111',{player:'phaseBefore'});
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_182111:{
audio:2,
trigger:{global:'useCard'},
forced:true,
filter:function(event,player){
return player.storage.xm_1821==event.player&&(event.card.name=='tao'||event.card.name=='jiu');
},
content:function(){
trigger.untrigger();
trigger.finish();
}
},
xm_1822:{
audio:2,
trigger:{
player:"phaseBegin",
},
direct:true,
content:function (){
"step 0"
player.chooseTarget([1,3],'是否发动【鬼焰】？',function(card,player,target){
return target!=player;
}).ai=function(target){
return -ai.get.attitude(player,target);
}
"step 1"
if(result.bool){
player.logSkill('xm_1822',result.targets);
var num=0
for(var i=0;i<result.targets.length;i++){
num+=result.targets[i].num('h',{type:'trick'})
result.targets[i].discard(result.targets[i].get('h',{type:'trick'}));
num+=result.targets[i].num('h',{type:'delay'})
result.targets[i].discard(result.targets[i].get('h',{type:'delay'}));
}
if(num>2) player.recover();
}
}
},
xm_1823:{
audio:2,
trigger:{global:'phaseBegin'},
forced:true,
filter:function(event,player){
return player!=event.player;
},
content:function(){
var num=0
num+=trigger.player.num('h',{type:'basic'})
if(num==2){
trigger.player.skip('phaseDraw')
}
if(num>4){
player.gain(trigger.player.get('h',{type:'basic'}))
}
}
},
xm_1851:{
audio:2,
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.num('he',{type:'equip'});
},
filterCard:function (card){
return get.type(card,'trick')=='equip';
},
position:'he',
filterTarget:function (card,player,target){
return player!=target&&!target.storage.xm_zz;
},
content:function (){
target.storage.xm_zz=true;
target.mark('诅咒');
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_1852:{
audio:2,
trigger:{player:'changeHp'},
forced:true,
content:function(){
for(var i=0;i<game.players.length;i++){
if(game.players[i].storage.xm_zz&&game.players[i]!=player){
player.gain(game.players[i].get('e'))
game.players[i].damage('fire');
}
}
}
},
xm_xiaoy2:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
filter:function (event,player){
return !player.storage.xm_xiaoy;
},
content:function (){
var pl=game.players.concat(game.dead)
pl.remove(player)
for(var i=0;i<pl.length;i++){
if(pl[i]!=player&&pl[i]!=target) pl[i].classList.add('out');
pl[i].update();
pl[i].storage.xm_xiaoy2=true
}
player.storage.xm_xiaoy=true
player.storage.xm_xiaoy3=get.time()
target.storage.xm_xiaoy=true
target.damage()
},
ai:{
basic:{
order:10,
},
result:{
target:-8,
},
},
},
xm_xiaoy1:{
init2:function (player){
player.storage.xm_xiaoy1=0;
},
mark:true,
marktext:'夜',
intro:{
content:function (storage){
return '当前拥有：'+storage+'枚"夜"标记'
}
},
trigger:{
source:"damage",
},
forced:true,

filter:function (event,player){
return player.storage.xm_xiaoy;
},
content:function (){
player.storage.xm_xiaoy1++
player.syncStorage('xm_xiao1');
},
group:'xm_xiaoy111',
},
xm_xiaoy111:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
filter:function (event,player){
return player.storage.xm_xiaoy1&&!player.storage.xm_xiaoy;
},
content:function (){
target.damage(player.storage.xm_xiaoy1)
player.recover(player.storage.xm_xiaoy1)
player.storage.xm_xiaoy1=0
player.syncStorage('xm_xiao1');
},
ai:{
basic:{

order:10,
},
result:{
target:-2,
},
},
},
_xm_xiaoy211:{
trigger:{
global:['useCardAfter','useCardBefore','phaseBefore','loseEnd','phaseBegin','phaseDradBegin','phaseUseBegin','phaseUseEnd','phaseEnd','phaseDiscardAfter','phaseDiscardBegin','useSkillBefore','judgeBefore','judgeAfter','gainBefore','gainEnd'],
},
forced:true,
filter:function(event,player){
return player.storage.xm_xiaoy3
},
content:function (){
'step 0'
player.storage.xm_xiaoy31=get.time()-player.storage.xm_xiaoy3;
'step 1'
if(player.storage.xm_xiaoy31>=10000){
player.storage.xm_xiaoy3=get.time()
player.logSkill('xm_xiaoy2')
player.recover()
}
}
},
xm_ll1:{
enable:"phaseUse",
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
player.chooseControl('交换手牌','交换装备',ui.create.dialog('请选择一项','hidden'));
'step 1'
if(result.control=='交换手牌'){
var c1=player.get('h')
var c2=target.get('h')
player.gain(c2)
target.gain(c1)
}
else{
if(player.num('e')) var c1=player.get('e')
if(target.num('e')) var c2=target.get('e')
if(c2){
target.lose(c2)
for(var i=0;i<c2.length;i++){
player.equip(c2[i])
}
}
if(c1){
player.lose(c1)
for(var i=0;i<c1.length;i++){
if(c1[i]) target.equip(c1[i])
}
}
}
}
},
xm_ll2:{
enable:"phaseUse",
filter:function (event,player){
return game.dead.length>0;
},
direct:true,
notarget:true,
content:function (){
				"step 0"
 				var list=[];
 				for(var i=0;i<game.dead.length;i++){
 					list.push(game.dead[i].name);
 				} 				player.chooseButton(ui.create.dialog('选择1名角色复活',[list,'character']),function(button){
 				for(var i=0;i<game.dead.length&&game.dead[i].name!=button.link;i++);
 					return ai.get.attitude(_status.event.player,game.dead[i]);
 				}); 
				"step 1"
 				if(result.bool){
 					for(var i=0;i<game.dead.length&&game.dead[i].name!=result.buttons[0].link;i++);
 					var dead=game.dead[i];
 					player.logSkill('xm_ll2',dead);
 					dead.revive(dead.maxHp);
 					dead.draw(dead.maxHp);
				}
}
},
xm_mz11:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
target.damage(2)
if(target.next!=player) target.next.damage(2)
if(target.previous!=player) target.previous.damage(2)
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_mz12:{
enable:"phaseUse",
usable:4,
filterTarget:function (card,player,target){
return player!=target&&target.num('h');
},
content:function (){
var c2=target.get('h')
player.gain(c2)
target.draw(c2.length)
target.recover()
},
ai:{
basic:{
order:10,
},
result:{
target:5,
},
},
},
xm_mz21:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
target.skip('phase')
var chat=['主人，请休息吧～','主人，再不好好休息的话，依芙会讨厌你的哟～','主人！门该睡觉了！再不睡，依芙可要生气了！','主人，今天我们一起睡吧～','主人，今晚你想做什么都可以哟～'].randomGet()
player.say(chat)
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_mz22:{
enable:"phaseUse",
filter:function (event,player){
return !player.storage.xm_mz22;
},
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
player.storage.xm_mz22=target;
},
ai:{
basic:{
order:10,
},
result:{
target:-20,
},
},
},
_xm_mz221:{
trigger:{player:'damageBefore'},
forced:true,
filter:function (event,player){
return player.storage.xm_mz22&&player.storage.xm_mz22.isAlive();
},
priority:5555,
content:function (){
trigger.player=player.storage.xm_mz22
}
},
_xm_mz222:{
trigger:{global:'dieBefore'},
forced:true,
filter:function (event,player){
return event.player==player.storage.xm_mz22;
},
content:function (){
'step 0'
player.gain(trigger.player.get('he'))
'step 1'
player.draw(player.num('h'))
}
},
xm_1941:{
audio:true,
enable:"phaseUse",
filter:function (event,player){
return player.storage.xm_xmxm>=200&&!player.storage.xm_1941;
},
content:function (){
player.storage.xm_xmxm-=200
player.syncStorage('xm_xmxm');
player.mark('xm_194111',{
name:'盾立',
content:'提升700点护甲',
});
player.storage.xm_hj+=0.7
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='xm_194111'){
player.node.marks.childNodes[i].setBackground('xm_194','character');
player.node.marks.childNodes[i].innerHTML='';
}
}	
player.storage.xm_1941=get.time()
},
ai:{
basic:{
order:10,
},
result:{
player:2,
},
},
},
_xm_194111:{
trigger:{
player:['useCardAfter','useCardBefore','phaseBefore','loseEnd','phaseBegin','phaseDradBegin','phaseUseBegin','phaseUseEnd','phaseEnd','phaseDiscardAfter','phaseDiscardBegin','useSkillBefore','judgeBefore','judgeAfter','gainBefore','gainEnd'],
},
forced:true,
filter:function(event,player){
return player.storage.xm_1941;
},
content:function (){
'step 0'
player.storage.xm_194111=get.time()-player.storage.xm_1941;
'step 1'
if(player.storage.xm_194111>=60000){
delete player.storage.xm_1941;
player.storage.xm_hj-=0.7
player.unmark('xm_194111')
}
}
},
xm_1943:{
enable:"phaseUse",
usable:1,
filterTarget:true,
content:function (){
target.skip('damage')
},
ai:{
basic:{
order:10,
},
result:{
target:2,
},
},
},
xm_1942:{
trigger:{source:'damageBefore'},
forced:true,
content:function (){
player.storage.xm_bj+=0.01
player.storage.xm_hj+=0.01
}
},
xm_st1:{
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=300;
},
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
target.disableSkill('xm_st',target.get('s'))
player.storage.xm_xmxm-=300
player.syncStorage('xm_xmxm');
'step 1'
target.damage(2,['thunder','fire'].randomGet());
if(target.storage.xm_xmxm){
player.storage.xm_xmxm+=Math.ceil(target.storage.xm_xmxm/2)
player.syncStorage('xm_xmxm');
target.storage.xm_xmxm-=Math.ceil(target.storage.xm_xmxm/2)
target.syncStorage('xm_xmxm');
}
'step 2'
target.enableSkill('xm_st')
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_1952:{
trigger:{source:'damage'},
forced:true,
content:function (){
trigger.player.storage.xm_hj-=0.005
trigger.player.storage.xm_xmxm-=Math.ceil(trigger.player.storage.xm_xmxm*0.4)
trigger.player.syncStorage('xm_xmxm');
}
},
xm_1953:{
trigger:{player:'changeHp'},
forced:true,
filter:function (event,player){
return !player.storage.xm_1953&&player.hp<2;
},
content:function(){
player.storage.xm_hj+=0.1
player.recover(Math.ceil(player.maxHp/2))
player.storage.xm_1953=true
}
},
xm_1963:{
init2:function (player){
if(player.storage.xm_fk<0.5) player.storage.xm_fk=0.5
},
},
xm_1961:{
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=1888;
},
content:function (){
'step 0'
player.storage.xm_xmxm-=1888
player.syncStorage('xm_xmxm');
player.storage.xm_hj+=0.15
event.target=[];
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player){
event.target.push(game.players[i]);
}
}
'step 1'
for(var j=0;j<event.target.length;j++){
var num=(player.maxHp-player.hp)+1
event.target[j].damage(['thunder','fire'].randomGet(),num);
event.target[j].damage(['thunder','fire'].randomGet(),num);
event.target[j].damage(['thunder','fire'].randomGet(),num);
}
},
ai:{
basic:{
order:10,
},
result:{
player:2,
},
},
},
xm_1962:{
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
'step 0'
event.target=[];
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player){
event.target.push(game.players[i]);
}
}
'step 1'
var target=event.target.randomGets(4,player)
for(var j=0;j<target.length;j++){
target[j].damage(['thunder','fire'].randomGet());
}
player.storage.xm_fb+=0.05
}
},
xm_1963:{
init2:function (player){
if(player.storage.xm_fc<0.2) player.storage.xm_fc=0.2
if(player.storage.xm_hc<0.2) player.storage.xm_hc=0.2
},
},
xm_1971:{
audio:3,
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target&&!target.storage.xm_zm;
},
content:function (){
target.storage.xm_zm=true;
target.mark('致盲',{
name:'致盲',
content:'大幅降低命中',
});
for(var i=0;i<target.node.marks.childNodes.length;i++){
if(target.node.marks.childNodes[i].name=='致盲'){
target.node.marks.childNodes[i].setBackground('xm_197','character');
target.node.marks.childNodes[i].innerHTML='';
}
}	
target.damage(['thunder','fire'].randomGet());
},
ai:{
basic:{
order:10,
},
result:{
target:-2,
},
},
},
xm_1972:{
audio:3,
enable:"phaseUse",
usable:1,
filterTarget:true,
content:function (){
target.storage.xm_xmxm+=236
target.syncStorage('xm_xmxm');
},
ai:{
basic:{
order:10,
},
result:{
target:function (player,target){
if(target.storage.xm_xmxm) return target.storage.xm_xmxm;
return 0;
},
},
},
},
xm_mz31:{
trigger:{
player:"phaseBegin",
},
direct:true,
content:function (){
"step 0"
player.chooseTarget('是否发动【血之蔷薇】？',function(card,player,target){
return target!=player;
}).ai=function(target){
if(target.storage.xm_xmxm) return -target.storage.xm_xmxm;
return -ai.get.attitude(player,target)
}
"step 1"
if(result.bool){
player.logSkill('xm_mz31',result.targets);
var target=result.targets[0]
target.damage()
target.damage()
target.storage.xm_xmxm-=Math.ceil(target.storage.xm_xmxm*0.8)
target.syncStorage('xm_xmxm');
if(!target.storage.xm_zm){
target.storage.xm_zm=true;
target.mark('致盲',{
name:'致盲',
content:'大幅降低命中',
});
for(var i=0;i<target.node.marks.childNodes.length;i++){
if(target.node.marks.childNodes[i].name=='致盲'){
target.node.marks.childNodes[i].setBackground('xm_mz3','character');
target.node.marks.childNodes[i].innerHTML='';
}
}	
}
}
}
},
xm_mz41:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
if(Math.random()<=0.95){
if(!target.storage.xm_zm){
target.storage.xm_zm=true;
target.mark('致盲',{
name:'致盲',
content:'大幅降低命中',
});
for(var i=0;i<target.node.marks.childNodes.length;i++){
if(target.node.marks.childNodes[i].name=='致盲'){
target.node.marks.childNodes[i].setBackground('xm_mz4','character');
target.node.marks.childNodes[i].innerHTML='';
}
}	
}
}
else{
var next=game.createEvent('die');
 					next.player=target;
 					next.source=player;
 next.setContent('die');
}
}
},
xm_die:{
trigger:{
source:"damage",
},
forced:true,
content:function (){
if(player.storage.xm_die==trigger.player){
var next=game.createEvent('die');
 					next.player=trigger.player;
 					next.source=player;
 next.setContent('die');
}
player.storage.xm_die=trigger.player
}
},
xm_mz51:{
trigger:{
source:"damageEnd",
},
forced:true,
filter:function (event,player){
return Math.random()<=0.5;
},
content:function (){
'step 0'
trigger.player.damage()._triggered=null;
'step 1'
if(Math.random()<=0.5){
player.logSkill('xm_mz51')
event.goto(0)
}
}
},
_xm_1990:{
trigger:{
global:['useCardAfter','useCardBefore','phaseBefore','loseEnd','phaseBegin','phaseDradBegin','phaseUseBegin','phaseUseEnd','phaseEnd','phaseDiscardAfter','phaseDiscardBegin','useSkillBefore','judgeBefore','judgeAfter','gainBefore','gainEnd'],
},
forced:true,
content:function (){
'step 0'
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
player.storage.xm_1990=s-player.storage.xm_1991;
player.storage.xm_19922=s-player.storage.xm_19921;
'step 1'
if(player.storage.xm_19922>=30){
player.storage.xm_1992++;
player.syncStorage('xm_1992');
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
player.storage.xm_19921=s
}
if(player.storage.xm_1990>=30){
delete player.storage.xm_1991;
player.unmark('水柱')
event.target=[];
for(var i=0;i<game.players.length;i++){
event.target.push(game.players[i]);
}
}
'step 2'
if(event.target){
var target=event.target.randomGet(player)
target.mark('水柱')
for(var i=0;i<target.node.marks.childNodes.length;i++){
if(target.node.marks.childNodes[i].name=='水柱'){
target.node.marks.childNodes[i].setBackgroundImage('extension/朔/'+'水'+'.jpg'); 	
target.node.marks.childNodes[i].innerHTML='';
}
}	
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
target.storage.xm_1991=s;
game.log('水柱移动到',target,'的位置')
if(target.name!='xm_199'&&target.name2!='xm_199'){
target.damage('nosource',['thunder','fire'].randomGet());
target.storage.hj-=0.01;
}
else{
target.recover()
target.storage.hj+=0.05;
}
}
}
},
xm_1991:{
trigger:{global:'gameStart'},
forced:true,
content:function(){
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
player.storage.xm_1991=s;
player.mark('水柱')
for(var i=0;i<player.node.marks.childNodes.length;i++){
if(player.node.marks.childNodes[i].name=='水柱'){
player.node.marks.childNodes[i].setBackgroundImage('extension/朔/'+'水'+'.jpg'); 	
player.node.marks.childNodes[i].innerHTML='';
}
}	
}
},
xm_1992:{
init2:function (player){
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
player.storage.xm_19921=s
player.storage.xm_1992=0
},
mark:true,
intro:{
content:function (storage){
return '当前拥有：'+storage+'个疫苗'
}
},
trigger:{
global:'useCard',
},
forced:true,
filter:function(event,player){
if(!player.storage.xm_1992) return false;
for(var i=0;i<event.targets.length;i++){
if(event.targets[i]!=player) return false;
if(event.player==player) return false;
return true;
}
},
content:function (){
player.storage.xm_1992--;
player.syncStorage('xm_1992');
player.recover();
trigger.untrigger();
trigger.finish();
}
},
xm_2001:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
var n=[1,2,3].randomGet();
target.damage(n)._triggered=null;
player.recover(n);
}
},
xm_2002:{
init2:function (player){
if(player.storage.xm_fk<0.6)
player.storage.xm_fk=0.6
if(player.storage.xm_hj<0.6) player.storage.xm_hj=0.6
},
},
IA1:{
enable:"phaseUse",
usable:1,
content:function (){
'step 0'
event.cards=get.cards(1);
player.gain(event.cards);
'step 1'
if(event.cards[0].number<=1)
player.addTempSkill('IA2',{player:'phaseBefore'});
if(event.cards[0].number==2)
player.addTempSkill('IA3',{player:'phaseBefore'});
if(event.cards[0].number==3)
player.addTempSkill('IA4',{player:'phaseBefore'});
if(event.cards[0].number==4)
player.addTempSkill('IA5',{player:'phaseBefore'});
if(event.cards[0].number==5)
player.addTempSkill('IA6',{player:'phaseBefore'});
if(event.cards[0].number==6)
player.addTempSkill('IA7',{player:'phaseBefore'});
if(event.cards[0].number==7)
player.addTempSkill('IA8',{player:'phaseBefore'});
if(event.cards[0].number==8)
player.addTempSkill('IA9',{player:'phaseBefore'});
if(event.cards[0].number==9)
player.addTempSkill('IA10',{player:'phaseBefore'});
if(event.cards[0].number==10)
player.addTempSkill('IA11',{player:'phaseBefore'});
if(event.cards[0].number==11)
player.addTempSkill('IA12',{player:'phaseBefore'});
if(event.cards[0].number==12)
player.addTempSkill('IA13',{player:'phaseBefore'});
if(event.cards[0].number>=13)
player.addTempSkill('IA14',{player:'phaseBefore'});
}
},
IA2:{
init2:function (player){
player.popup('光')
},
trigger:{
source:"damageEnd",
},
forced:true,
content:function (){
if(!trigger.player.storage.xm_zm){
trigger.player.storage.xm_zm=true;
trigger.player.mark('致盲',{
name:'致盲',
content:'大幅降低命中',
});
}
for(var i=0;i<trigger.player.node.marks.childNodes.length;i++){
if(trigger.player.node.marks.childNodes[i].name=='致盲'){
trigger.player.node.marks.childNodes[i].setBackground('xm_mz4','character');
trigger.player.node.marks.childNodes[i].innerHTML='';
}
}	
}
},
IA3:{
init2:function (player){
player.popup('风')
},
trigger:{
source:"damageBefore",
},
forced:true,
filter:function (event,player){
return event.nature=='fire';
},
content:function (){
trigger.num++;
}
},
IA4:{
init2:function (player){
player.popup('影')
},
},
IA5:{
init2:function (player){
player.popup('星')
},
trigger:{
source:"damageBefore",
},
forced:true,
filter:function (event,player){
return event.nature=='thunder';
},
content:function (){
trigger.num++;
}
},
IA6:{
init2:function (player){
player.popup('翼')
},
},
IA7:{
init2:function (player){
player.popup('键')
},
trigger:{
player:"damageEnd",
},
forced:true,
content:function (){
var cards=get.cards(1);
player.gain(cards);
if(get.suit(cards[0])=='spade') player.recover()
}
},
IA8:{
init2:function (player){
player.popup('梦')
},
trigger:{
source:"damageBefore",
},
forced:true,
content:function (){
player.recover(2)
}
},
IA9:{
init2:function (player){
player.popup('红')
},
trigger:{
global:"phaseDrawBefore",
},
forced:true,
filter:function (event,player){
return event.player!=player;
},
content:function (){
trigger.num--;
}
},
IA10:{
init2:function (player){
player.popup('苍')
},
trigger:{
player:"phaseAfter",
},
forced:true,
content:function (){
player.phase()
}
},
IA11:{
init2:function (player){
player.popup('心')
},
trigger:{player:'chooseToRespondBegin'},
 			filter:function(event,player){
 				if(event.responded) return false;
 				if(!event.filterCard({name:'shan'})) return false;
 				return true;
 			},
forced:true,
			content:function(){
 				'step 0'
 				var targets=[];
 				for(var i=0;i<game.players.length;i++){
if(game.players[i].num('e')){
targets.push(game.players[i]);
 					}
 				}
if(targets.length){
 					player.chooseTarget('选择一名角色弃置其一张装备牌',true,function(card,player,target){
 						return _status.event.targets.contains(target);
 					}).set('ai',function(target){
 						return -ai.get.attitude(_status.event.player,target);
 					}).set('targets',targets);
 				}
 				else{
 					event.finish();
 				}
 				'step 1'
if(result.targets&&result.targets.length){
 					target=result.targets[0];
 				}
 				if(target){
 					player.line(target,'green');
 					player.discardPlayerCard(target,'e',true);
 					trigger.untrigger();
 					trigger.responded=true;
 					trigger.result={bool:true,card:{name:'shan'}}
 				}
 			},
 			ai:{
 				effect:{
 					target:function(card,player,target,current){
 						if(get.tag(card,'respondShan')&&current<0){
 							var nh=player.num('e');
 							for(var i=0;i<game.players.length;i++){
 								if(game.players[i].num('e')>nh) return 0.4;
 							}
 						}
 					}
 				}
 			}
},
IA12:{
init2:function (player){


player.popup('华')
},
},
IA13:{
init2:function (player){
player.popup('雨')
},
},
IA14:{
init2:function (player){
player.popup('刻')
},
trigger:{
source:"damageEnd",
},
forced:true,
content:function (){
trigger.player.loseHp()
}


},
xm_0011:{
audio:4,
trigger:{
player:"useCardAfter",
},
forced:true,
filter:function (event,player){
return get.type(event.card)=='basic';
},
content:function (){
player.useCard(trigger.card,trigger.targets,false)._triggered=null;
},
group:['xm_001111','xm_001112'],
},
xm_001111:{
trigger:{
player:"loseHpBefore",
},
forced:true,
popup:false,
content:function (){
player.logSkill('xm_0011')
trigger.untrigger();
trigger.finish();
}
},
xm_001112:{
trigger:{
player:"damageBefore",
},
forced:true,
popup:false,
filter:function(event,player){
return !event.cards||event.skills;
},
content:function (){
player.logSkill('xm_0011')
trigger.untrigger();
trigger.finish();
}
},
xm_0012:{
audio:4,
trigger:{global:'recoverBefore'},
forced:true,
filter:function(event,player){
return player!=event.player&&Math.random()<=0.5;
},
content:function(){
trigger.untrigger();
trigger.finish();
player.recover();
}
},
xm_0001:{
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
var card=get.cards(5)
var c=[]
player.showCards(card)
if(Math.random()<=0.75){
for(var i=0;i<card.length;i++){
if(get.color(card[i])=='black') c.push(card[i])
}
player.gain(c)
}
else player.gain(card)
}
},
xm_0002:{
init2:function (player){
player.storage.xm_0002=0
},
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
player.storage.xm_0002++
target.disableSkill('xm_0002',target.get('s'))
'step 1'
var num=0
for(var i=0;i<game.players.length;i++){
var c=game.players[i].get('hej',{color:'black'})
game.players[i].lose(game.players[i].get('hej',{color:'black'}))
num+=c.length
}
if(player.storage.xm_0002) target.damage('fire',Math.ceil(num/player.storage.xm_0002))
else target.damage('fire',num)
'step 2'
target.enableSkill('xm_0002')
}
},
xm_2013:{
init2:function (player){
player.storage.xm_201312=0
player.storage.xm_201313=0
player.markSkill('xm_201312')
player.markSkill('xm_201313')
},
trigger:{
player:"phaseEnd",
},
forced:true,
content:function (){
player.storage.xm_201314=false
player.storage.xm_201315=false
if(player.storage.xm_201313>player.storage.xm_201312) player.storage.xm_201314=true
if(player.storage.xm_201313<player.storage.xm_201312) player.storage.xm_201315=true
},
group:'xm_201311',
},
xm_201311:{
trigger:{
global:"damage",
},
forced:true,
content:function (){
if(Math.random()<=0.5){
player.storage.xm_201312++
player.syncStorage('xm_201312');
}
else{
player.storage.xm_201313++
player.syncStorage('xm_201313');
}
}
},
xm_201312:{
mark:true,
marktext:"物",
intro:{
content:function (storage){
return '当前拥有：'+storage+'个物理标记'
}
},
},
xm_201313:{
mark:true,
marktext:"法",
intro:{
content:function (storage){
return '当前拥有：'+storage+'个法术标记'
}
},
},
_xm_201314:{
trigger:{
player:"damageBefore",
},
forced:true,
filter:function (event,player){
return event.nature&&player.storage.xm_201314;
},
content:function (){
trigger.untrigger();
trigger.finish();
}
},
_xm_201315:{
trigger:{
player:"damageBefore",
},
forced:true,
filter:function (event,player){
return !event.nature&&player.storage.xm_201315;
},
content:function (){
trigger.untrigger();
trigger.finish();
}
},
xm_2012:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
var num=target.storage.xm_xmxm
var num2=player.storage.xm_xmxm
if(num2>num) var num3=num2-num
else var num3=num-num2
var num4=Math.ceil(num3/50)
if(num4>Math.ceil(target.maxHp/2)) num4=Math.ceil(target.maxHp/2)
target.damage(num4)._triggered=null
}
},
xm_2011:{
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
var num=0
for(var i=0;i<game.players.length;i++){
for(var j=0;j<game.players[i].num('hej');j++){
num+=game.players[i].get('hej')[j].number
}
}
var num2=Math.floor(num/2)
if(num2+0.5==num/2){
player.popup('回复体力')
player.recover()
}
else{
player.storage.xm_sb+=0.05
player.popup('提升闪避')
}
}
},
xm_0021:{
audio:2,
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=300&&!player.storage.xm_0021;
},
content:function (){
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
player.storage.xm_0021=s
}
},
_xm_002111:{
trigger:{
global:['useCardAfter','useCardBefore','phaseBefore','loseEnd','phaseBegin','phaseDradBegin','phaseUseBegin','phaseUseEnd','phaseEnd','phaseDiscardAfter','phaseDiscardBegin','useSkillBefore','judgeBefore','judgeAfter','gainBefore','gainEnd'],
},
forced:true,
filter:function(event,player){
return player.storage.xm_0021
},
content:function (){
'step 0'
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
player.storage.xm_002111=s-player.storage.xm_0021;
'step 1'
if(player.storage.xm_002111>=10){
var date=new Date();
var d=date.getDate();	
var h=date.getHours();	
var m=date.getMinutes();	
var s=date.getSeconds();	
s+=d*86400
s+=h*3600
s+=m*60
player.storage.xm_xmxm-=50
player.syncStorage('xm_xmxm');
if(player.storage.xm_xmxm<50) delete player.storage.xm_0021
else player.storage.xm_0021=s
player.logSkill('xm_0021')
player.recover()
}
}
},
_xm_002112:{
trigger:{
source:"damageBefore",
},
forced:true,
filter:function (event,player){
return event.nature&&player.storage.xm_0021;
},
content:function (){
trigger.num++
player.logSkill('xm_0021')
}
},
xm_0022:{
audio:3,
trigger:{
source:"damage",
},
forced:true,
content:function (){
player.storage.xm_xmxm+=38
player.syncStorage('xm_xmxm');
}
},
_xm_s2:{
trigger:{
global:['useCardAfter','useCardBefore','phaseBefore','loseEnd','phaseBegin','phaseDradBegin','phaseUseBegin','phaseUseEnd','phaseEnd','phaseDiscardAfter','phaseDiscardBegin','useSkillBefore','judgeBefore','judgeAfter','gainBefore','gainEnd','loseBegin','loseEnd'],
},
forced:true,
content:function (){
if(player.storage.xm_xmxm<0){
player.storage.xm_xmxm=0
player.syncStorage('xm_xmxm');
}
if(player.storage.xm_hj<0) player.storage.xm_hj=0
if(player.storage.xm_sb<0) player.storage.xm_sb=0
if(player.storage.xm_fb<0) player.storage.xm_fb=0
if(player.storage.xm_fk<0) player.storage.xm_fk=0
if(player.storage.xm_hc<0) player.storage.xm_hc=0
if(player.storage.xm_fc<0) player.storage.xm_fc=0
if(player.storage.xm_bj<0) player.storage.xm_bj=0
}
},
zj_0011:{
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i].group=='wu') game.players[i].draw();
}
}
},
zj_0012:{
init2:function (player){
player.storage.zj_0012=[]
},
trigger:{
player:"phaseAfter",
},
forced:true,
content:function (){
player.gain(player.storage.zj_0012)
player.storage.zj_0012=[]
},
group:'zj_001211',
},
zj_001211:{
trigger:{
global:"loseAfter",
},
forced:true,
filter:function(event,player){
return player!=event.player&&_status.currentPhase==player
},
content:function (){
player.storage.zj_0012=player.storage.zj_0012.concat(trigger.cards)
}
},
zj_0013:{
trigger:{
global:"phaseBegin",
},
forced:true,
popup:false,
filter:function(event,player){
return player!=event.player&&(get.translation(event.player.name)=='刘备'||get.translation(event.player.name2)=='刘备');
},
content:function (){
trigger.player.logSkill('zj_0013')
trigger.player.draw()
player.draw()
}
},
zj_0014:{
trigger:{
global:"phaseBegin",
},
forced:true,
popup:false,
filter:function(event,player){
return player!=event.player&&(get.translation(event.player.name)=='曹操'||get.translation(event.player.name2)=='曹操');
},
content:function (){
trigger.player.logSkill('zj_0014')
trigger.player.discard(trigger.player.get('he').randomGet())
}
},
zj_0015:{
trigger:{
global:"phaseBegin",
},
forced:true,
popup:false,
filter:function(event,player){
return player!=event.player&&(get.translation(event.player.name)=='刘协'||get.translation(event.player.name2)=='刘协');
},
content:function (){
trigger.player.logSkill('zj_0015')
player.recover()
}
},
zj_0016:{
trigger:{
global:"phaseBegin",
},
forced:true,
popup:false,
filter:function(event,player){
return player!=event.player&&(get.translation(event.player.name)=='刘禅'||get.translation(event.player.name2)=='刘禅');
},
content:function (){
trigger.player.logSkill('zj_0016')
trigger.player.skip(['phaseJudge','phaseDraw','phaseUse','phaseDiscard'].randomGet())
}
},
xm_0031:{
audio:true,
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
'step 0'
var target=[]
var target2=[]
var targets=[]
for(var i=0;i<game.players.length;i++){
if(ai.get.attitude(game.players[i],player)<=0){
target.push(game.players[i]);
target2.push(game.players[i]);
}
}
if(target.length){
for(var j=0;j<target.length;j++){
for(var x=0;x<target2.length;x++){
if(target[j].hp<=target2[x].hp) targets.push(target[j])
else targets.remove(target[j])
}
}
if(targets.length){
event.target=targets.randomGet(player)
event.target.damage()
}
}
'step 1'
if(event.target&&!event.target.isAlive()){
for(var i=0;i<game.players.length;i++){
if(ai.get.attitude(game.players[i],player)<=0) game.players[i].skip('phase');
}
}
}
},
xm_0032:{
audio:true,
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.storage.xm_xmxm>=500;
},
content:function (){
'step 0'
player.storage.xm_0032=true
event.target=[]
for(var i=0;i<game.players.length;i++){
if(ai.get.attitude(game.players[i],player)<=0) event.target.push(game.players[i]);
}
'step 1'
if(event.target.length){
event.target.randomGet(player).damage()
}
player.storage.xm_xmxm-=100
player.syncStorage('xm_xmxm');
if(player.storage.xm_xmxm>0) event.redo()
else{
player.storage.xm_xmxm=0
player.syncStorage('xm_xmxm');
player.storage.xm_0032=false
}
}
},
xm_0033:{
audio:true,
trigger:{
player:"recoverAfter",
},
forced:true,
content:function (){
player.skip('damage')
}
},
xm_0034:{
audio:true,
trigger:{
source:"damage",
},
forced:true,
content:function (){
trigger.player.storage.xm_sb-=0.005
}
},
xmjx1:{
trigger:{
global:"dying",
},
forced:true,
priority:Infinity,
content:function (){
player.storage.xm_bj+=0.1
}
},
xmjx2:{
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
for(var i=0;i<game.players.length;i++){
if(ai.get.attitude(game.players[i],player)<=0){
game.players[i].damage();
if(Math.random()<=0.25){
game.players[i].damage()._triggered=null;
game.players[i].skip('phase')
}
}
}
}
},
            },
            translate:{
xm_003:'方天画姬',
xm_0031:'刺杀',
xm_0032:'幻影乱舞',
xm_0033:'刺客本能',
xm_0034:'离子刀刃',
xm_0031_info:'准备阶段，对敌方角色中体力最低的其中一名角色造成1点伤害，若成功击杀该角色，所有敌方角色跳过下一个回合',
xm_0032_info:'出牌阶段限一次，若你拥有至少500点能量，你可以消耗所有能量，对敌方角色造成伤害（伤害次数随消耗的能量提升，本技能造成伤害时，你不会增加能量）',
xm_0033_info:'回复体力后，防止受到下一次伤害',
xm_0034_info:'造成伤害后，降低受伤角色的闪避',
zj_001:'庆典·孙权',
zj_0011:'神龙之杖',
zj_0012:'龙之力',
zj_0013:'盟友之谊',
zj_0014:'江东之敌',
zj_0015:'封为吴王',
zj_0016:'亡国之君',
zj_0011_info:'准备阶段，场上的吴国角色摸一张牌',
zj_0012_info:'结束阶段，你获得其他角色本回合失去的牌',
zj_0013_info:'刘备回合开始时，你与其各摸一张牌',
zj_0014_info:'曹操回合开始时，其弃置一张牌',
zj_0015_info:'刘协回合开始时，你回复一点体力',
zj_0016_info:'刘禅回合开始时，其跳过其中一个阶段',
xm_002:'德古拉',
xm_0021:'吸血鬼形态',
xm_0022:'吸血鬼血统',
xm_0021_info:'出牌阶段，若你拥有至少300点能量，你可切换至吸血鬼形态<br>你处于吸血鬼形态时，每10秒回复1点体力并减少50点能量，你造成的法术伤害+1，能量少于50点时解除吸血鬼形态',
xm_0022_info:'德古拉拥有纯正的吸血鬼血统，提升造成伤害时获得的能量',
xm_201:'诸葛瑾',
xm_2011:'程式检测',
xm_2012:'等差程式',
xm_2013:'护盾编译',
xm_201312:'物理',
xm_201313:'法术',
_xm_201314:'法术护盾',
_xm_201315:'物理护盾',
xm_2013_info:'每当一名角色受到伤害，你获得一个物理/法术标记<br>结束阶段，若物理标记大于法术标记，你免疫所有物理伤害，直到下次发动此技能；若法术标记大于物理标记，你免疫所有法术伤害，直到下次发动此技能',
xm_2012_info:'出牌阶段限一次，对一名角色造成x点神圣伤害（x为你与目标能量之差除以50并向上取整，x最低为0，最高为目标体力上限的50%并向上取整）',
xm_2011_info:'准备阶段，按照场上卡牌点数之和执行不同效果：<br>若为单数，你回复一点体力<br>若为双数，提升50点闪避',
xmjx:'金色暗影',
xmjx1:'黑暗降临',
xmjx2:'光刃刺杀',
xmjx1_info:'任意角色进入濒死时，提升物理暴击',
xmjx2_info:'准备阶段，对所有视你为敌人的角色造成伤害，有概率追加1次神圣伤害并令其跳过下一个回合',
xm_000:'斐幽',
xm_0001:'命运之轮',
xm_0002:'幽冥火炮',
xm_0001_info:'准备阶段，展示牌堆顶五张牌并获得当中的黑色牌，25%概率全部获得',
xm_0002_info:'出牌阶段限一次，弃置场上所有黑色牌，暂时封印一名角色的技能并造成火属性伤害（弃置的牌越多，伤害越高；伤害随发动次数降低）',
xm_001:'吕布',
xm_0011:'傲世',
xm_0011_info:'你使用的基本牌均结算两次<br>防止你流失体力或受到直接伤害',
xm_0012:'噬梦',
xm_0012_info:'当一名其他角色回复体力时，50%概率终止回复结算，然后你回复一点体力',
xmIA:'IA',
IA1:'幻音',
IA1_info:'出牌阶段限一次，从牌堆顶获得一张牌，然后按照卡牌点数获得不同技能，直到下回合开始',
IA2:'幻音·光',
IA2_info:'造成伤害后，致盲受伤角色',
IA3:'幻音·风',
IA3_info:'造成的火属性伤害+1',
IA4:'幻音·影',
IA4_info:'拥有此技能时，提升护甲',
IA5:'幻音·星',
IA5_info:'造成的雷属性伤害+1',
IA6:'幻音·翼',
IA6_info:'拥有此技能时，提升闪避',
IA7:'幻音·键',
IA7_info:'受到伤害后，从牌堆顶获得一张牌，若该牌的花色为黑桃，你回复一点体力',
IA8:'幻音·梦',
IA8_info:'造成伤害时，回复两点体力',
IA9:'幻音·红',
IA9_info:'其他角色摸牌数-1',
IA10:'幻音·苍',
IA10_info:'结束阶段，立即进行一个额外的回合',
IA11:'幻音·心',
IA11_info:'当你需要打出一张闪时，你可以弃置至场上一张牌备牌，视为你打出了闪',
IA12:'幻音·华',
IA12_info:'拥有此技能时，提升法术暴击',
IA13:'幻音·雨',
IA13_info:'拥有此技能时，提升法术抗性',
IA14:'幻音·刻',
IA14_info:'造成伤害后，受伤角色失去1点体力',
xm_199:'步骘',
xm_1991:'腐蚀海浪',
xm_1992:'疫苗',
xm_1991_info:'游戏开始时，在场上召唤一个水柱，水柱每30秒移动一次，一名角色死亡后水柱会额外移动一次，当水柱移动到一名角色的位置，削减该角色10点护甲并造成1次法术伤害，若水柱移动到步骘的位置，则步骘回复1点体力并增加50点护甲',
xm_1992_info:'每30秒获得一个疫苗，成为其他角色的卡牌的唯一目标时，使用一个疫苗令该牌无效并回复1点体力',
xm_200:'王双',
xm_2001:'致命爪击',
xm_2001_info:'出牌阶段限一次，对一名角色造成1-3点神圣伤害并回复等量体力',
xm_2002:'抗体',
xm_2002_info:'增加550点预设法术抗性及护甲',
xm_197:'法正',
xm_1971:'圣光闪现',
xm_1972:'祈福',
xm_1973:'指引之光',
xm_1971_info:'出牌阶段限一次，致盲一名角色并造成1点法术伤害',
xm_1972_info:'出牌阶段限一次，令一名角色增加236点能量',
xm_1973_info:'提升200点法术穿透及护甲穿透',
xm_196:'司马懿',
xm_1961:'魔灵附体',
xm_1962:'视网杀界',
xm_1963:'深渊守护',
xm_1961_info:'出牌阶段限一次，消耗1888点能量，对所有其他角色造成3次法术伤害并提升护甲（自身体力越低，伤害越高）',
xm_1962_info:'准备阶段，对四名其他角色各造成1点法术伤害并提升法术暴击',
xm_1963_info:'提升450点预设法术抗性',
xm_195:'曹仁',
xm_1952:'极光斩',
xm_1953:'王之铠甲',
xm_1952_info:'造成伤害后，削减对方5点护甲和一定比例的能量',
xm_1953_info:'当体力降至1或更低时，回复50%最大生命（向上取整）并提升100点护甲，然后直到任意角色死亡前，你不可发动此技能',
xm_mz3:'莉莉',
xm_mz31:'血之蔷薇',
xm_mz31_info:'准备阶段，对一名角色造成2次物理伤害并削减对方80%的能量，然后致盲该角色',
xm_mz4:'冥神',
xm_mz41:'葬魂',
xm_mz41_info:'出牌阶段限一次，致盲一名角色，5%概率直接击杀目标',
xm_die:'咒杀',
xm_die_info:'当你连续对一名角色造成2次伤害，你立即击杀该角色',
xm_mz1:'诗音',
xm_mz2:'依芙',
xm_mz11:'音爆',
xm_mz21:'侍寝',
xm_mz12:'弦歌',
xm_mz22:'诱惑',
_xm_mz221:'诱惑',
_xm_mz222:'诱惑',
xm_mz11_info:'出牌阶段限一次，以一名角色为中心造成范围伤害',
xm_mz21_info:'出牌阶段限一次，令一名角色跳过下一个回合',
xm_mz12_info:'出牌阶段限四次，获得一名角色的手牌，然后令该角色摸等量牌并回复一点体力',
xm_mz22_info:'限定技，出牌阶段，令一名角色代替你受到所有伤害。该角色死亡时，你获得其所有牌，然后将手牌翻倍',
xm_mz5:'霜月',
xm_mz51:'神刃',
xm_mz51_info:'你造成伤害后，一定概率追加1次神圣伤害（可多次触发）',
xm_ll:'琉璃',
xm_ll1:'斗转星移',
xm_ll2:'六道轮回',
xm_ll1_info:'出牌阶段，你可以与任意角色交换手牌或装备',
xm_ll2_info:'出牌阶段，令一名角色复活，然后该角色将手牌补至体力上限',
xm_xiaoy:'小夜',
xm_xiaoy1:'血色之夜',
xm_xiaoy111:'血色之夜',
xm_xiaoy2:'绝对领域',
xm_xiaoy1_info:'你于绝对领域内造成伤害时，你获得一枚"夜"标记<br>出牌阶段限一次，若你不处于绝对领域内，你可以对一名角色造成x点伤害，然后回复x点体力并弃置所有"夜"标记，x为"夜"标记的数量',
xm_xiaoy2_info:'出牌阶段限一次，展开一个绝对领域，你与目标将进入领域（领域外的角色视为离开游戏，你于领域内时持续回复体力），然后你对目标造成1次伤害。当你与该角色其中一名死亡后，解除绝对领域',
xm_sssss:'朔酱',
xm_sssss1:'暴虐',
xm_sssss1_info:'出牌阶段限一次，弃置一名角色装备区的牌并暂时封印该角色的技能，然后对其造成3次伤害（造成第三次伤害时，该伤害获得提升同时防止该角色下一次进入濒死）',
xm_st:'月兔',
xm_st1:'无尽虚空',
xm_st1_info:'出牌阶段限一次，消耗300点能量，暂时封印目标的技能，然后对该角色造成2点伤害并偷取其一定比例的能量',
xm_sp:'小月',
xm_sp1:'沉睡',
xm_sp1_info:'准备阶段，令随机一名其他角色跳过下一回合',
xm_sp2:'始神',
xm_sp2_info:'觉醒技，结束阶段，若你已受伤且【沉睡】发动次数达到至少3次，所有其他角色跳过下一个回合并永久封印技能，然后你从每名角色中获得两张牌并获得技能【音爆】【弦歌】',
xm_love:'玲酱',
xm_love1:'爱心一击',
xm_love2:'爱神之箭',
xm_god:'萌神之力',
xm_god1:'萌神之力',
xm_love1_info:'造成伤害时，你可令受伤角色回复一点体力，然后防止该伤害',
xm_love2_info:'出牌阶段限一次，指定至多两名角色各回复一点体力',
xm_god_info:'你受到的伤害至多为1<br>你始终跳过弃牌阶段',
xm_194:'纪灵',
xm_1941:'盾立',

xm_1942:'盾击',
xm_1943:'盾抛',
xm_1941_info:'出牌阶段，消耗200点能量，1分钟内提升700点护甲',
xm_1942_info:'每造成一次伤害提升10点物理暴击及护甲',
xm_1943_info:'出牌阶段限一次，令一名角色免疫一次伤害',
xm_112:'赵云',
xm_1121:'孤军深入',
xm_1122:'七进七出',
xm_1123:'破甲重击',
xm_1121_info:'出牌阶段，消耗200点能量，1分钟内提升400点闪避及物理暴击',
xm_1122_info:'提升95点预设闪避',
xm_1123_info:'提升95点预设物理暴击',
xm_193:'步练师',
xm_1931:'魂剑乱舞',

xm_1932:'顺劈',


xm_1933:'感知',

xm_1931_info:'出牌阶段限一次，消耗600点能量，对一名角色造成至多8次伤害，若目标死亡，提升100点物理暴击',
xm_1932_info:'准备阶段，对随机两名角色各造成至多1次伤害，每命中一次，提升此技能的命中率',
xm_1933_info:'每当一名角色受到伤害，提升10点闪避',
xm_107:'孙坚',
xm_1071:'禁魔之击',
xm_1072:'恶魔毁灭',
xm_1071_info:'出牌阶段限一次，若你拥有至少500点能量，你可以封印一名角色的技能，然后每当你的回合开始，你失去100点能量。当你死亡或能量不足100时，解除上一名被指定的目标的技能封印',
xm_1072_info:'每当你因【禁魔之击】令能量降至50以下，你弃置场上所有装备牌并摸等量牌',
xm_190:'偃月',
xm_1901:'沉默打击',
xm_1902:'突刺',
xm_1903:'弱点突破',
_xm_1903:'虐杀',
xm_1901_info:'出牌阶段限一次，消耗700点能量，沉默所有其他角色，然后对一名角色造成至多8次伤害',
xm_1902_info:'出牌阶段限一次，与目标的下家交换位置，然后对目标造成一点伤害',
xm_1903_info:'每当偃月对同一名角色累计造成2次伤害，下一次造成的伤害带有虐杀效果',

xm_192:'偃月',
xm_1921_info:'每触发两次虐杀效果，你下一次造成的伤害带有斩杀效果',
xm_1921:'斩杀',
xm_1922:'等离子护盾',
xm_1922_info:'回合结束时，你可以离开游戏。当你的上家阵亡或回合结束时，你回到游戏，然后直到你击杀一名角色，你不可以发动此技能',
sp_zhangliang:'张梁',
jijun:'集军',
fangtong:'方统',
jijun_info:'出牌阶段阶一次，你可以将任意张手牌置于武将上，称为“方”',
fangtong_info:'结束阶段开始时，若你有36张“方”，你的身份赢得本局胜利',
xm_109:'庞统',
xm_1091:'浴火重生',
xm_109111:'浴火重生',
xm_1092:'凤凰冲击',
xm_1093:'永生烈焰',
xm_1091_info:'出牌阶段限一次，消耗500点能量，将十四层凤凰炽能化为一个火球，对一名角色造成巨大的伤害，然后防止你濒死及死亡各一次（此效果不可叠加）<br>濒死时，将七层凤凰炽能转化为生命，回复两点体力并摸五张牌',
xm_1092_info:'造成伤害时，你令伤害转化为火属性并获得两层凤凰炽能',
xm_1093_info:'成为其他角色的卡牌目标时，50%概率令该牌失效，然后获得两层凤凰炽能',
xm_110:'陆逊',
xm_1101:'移动射击',
xm_1102:'照明弹',
xm_1101_info:'出牌阶段限一次，消耗1000点能量，对一名角色发射12发子弹（50%概率发射穿甲弹），造成至多12次伤害',
xm_1102_info:'出牌阶段限一次，弃置一名角色装备区的牌，然后你摸两张牌',
xm_xmxm:'能量值',
xm_157:'曹操',
xm_1571:'无限剑制',
xm_1572:'魔王降临',
xm_157211:'魔王降临',
xm_1571_info:'出牌阶段，消耗600点能量，对所有其他角色各造成一点伤害<br>死亡后，所有存活角色受到一点无来源伤害',
xm_1572_info:'若场上存活人数少于阵亡人数，受到的伤害-1同时造成的伤害+1',
xm_186:'司马师',
xm_1861:'本源交融',
xm_1862:'灵魂契约',
_xm_186211:'灵魂契约',
_xm_186212:'灵魂契约',
xm_1863:'虚灵之盾',
xm_1861_info:'当与你进行契约的角色即将死亡时，若你不为主公，你可以令该角色增加一点体力上限并将体力回复至体力上限，然后防止其死亡并将自己移出游戏',
xm_1862_info:'限定技，出牌阶段，指定一名其他角色，你与该角色进行契约（你受到的受伤-1，该角色造成的伤害+1），然后你失去一点体力上限',
xm_1863_info:'出牌阶段限一次，指定一名角色，防止其受到下一次伤害并令其增加50点能量，然后解除其负面状态',
xm_161:'董卓',
xm_1611:'血祭',
xm_1612:'固有结界',

_xm_161211:'固有结界',
xm_1613:'守护之魂',
xm_1611_info:'全场体力最低的角色（或之一）的回合开始时，选择一项效果对该角色执行：<br>1.令其回复一点体力<br>2.对其造成一点伤害',
xm_1612_info:'受到伤害后，直到你下回合开始，你免疫所有伤害',
xm_1613_info:'当你的体力发生变化，你摸两张牌',

xm_166:'魏延',
xm_1661:'复苏',
xm_1662:'复仇',
xm_1661_info:'自身死亡20秒后复活<br>任意角色回合开始阶段，你摸X张牌，X为发动复苏的次数',
xm_1662_info:'造成的伤害+X，X为发动复苏的次数的一半（向下取整）',
xm_184:'马岱',
xm_1841:'背袭',
xm_1842:'连刺',
_xm_184211:'沉默',
xm_1843:'示敌以弱',
xm_184311:'示敌以弱',
xm_184312:'示敌以弱',
xm_1841_info:'每当你使用【杀】时，你与该【杀】第一名目标的下家交换位置<br>你的【杀】无距离限制，同时不可被【闪】抵消',
xm_1842_info:'造成伤害后，受伤角色选择执行一项<br>1.弃置四张牌<br>2.进入沉默状态',
xm_1843_info:'对体力大于你的角色造成的伤害+1<br>体力大于你的角色对你造成的伤害-1',
xm_124:'丁奉',
xm_1241:'聚能水炮',
xm_1241_info:'每当一名角色的【杀】被【闪】抵消，你将牌堆顶三张牌置于武将上<br>准备阶段，你可以获得武将上任意张牌<br>结束阶段，你可以令一名其他角色获得你武将上一张牌，然后该角色受到两点伤害<br>你使用的【杀】造成伤害时，你可以将武将上一张牌置于弃牌堆，然后该伤害+1',
xm_1242:'腐蚀墨汁',
xm_1242_info:'造成伤害后，受伤角色随机执行一项<br>1.弃置一张牌<br>2.失去一点体力<br>3.失去一点体力上限',
xm_185:'郭嘉',
xm_1851:'诅咒',
xm_1852:'鬼焰',
xm_1851_info:'出牌阶段限一次，弃置一张装备牌并指定一名角色，该角色进入诅咒状态',
xm_1852_info:'每当你的体力发生变化，获得所有处于诅咒状态的其他角色装备区内的牌并对其造成一点火属性伤害',
xm_182:'郭嘉',
xm_1821:'诅咒',
xm_182111:'诅咒',
xm_1822:'鬼焰',

xm_1823:'灵能感应',

xm_1821_info:'出牌阶段限一次，弃置一张基本牌并指定一名角色，直到你下回合开始，每当该角色使用【桃】或【酒】时，你令该牌失效',
xm_1822_info:'准备阶段，你可以指定至多三名其他角色，被指定的角色弃置手牌中的锦囊牌，若以此法弃置了至少三张牌，你回复一点体力',
xm_1823_info:'其他角色回合开始阶段，若该角色手牌中的基本牌数量为2，该角色跳过摸牌阶段；大于4，你获得该角色手牌中的基本牌',
            },
});
        var list=[];
        var n;
        n=parseInt(config.frbf);
        while(n--){
            list.push(['spade',1,'frbf']);
        }
        n=parseInt(config.jgj);
        while(n--){
            list.push(['spade',2,'jgj']);
        }
        n=parseInt(config.cs);
        while(n--){
            list.push(['spade',3,'cs']);
        }
        n=parseInt(config.fssj);
        while(n--){
            list.push(['spade',4,'fssj']);
        }
        n=parseInt(config.cctc);
        while(n--){
            list.push(['spade',5,'cqtc']);
        }
        n=parseInt(config.tb);
        while(n--){
            list.push(['spade',6,'tb']);
        }
        n=parseInt(config.jc);
        while(n--){
            list.push(['spade',7,'jc']);
        }
        n=parseInt(config.tg);
        while(n--){
            list.push(['spade',8,'tg']);
        }
        n=parseInt(config.rqmz);
        while(n--){

            list.push(['spade',9,'rqmz']);
        }
        n=parseInt(config.yxcc);
        while(n--){
            list.push(['spade',10,'yxcc']);
        }
        n=parseInt(config.wdww);
        while(n--){
            list.push(['spade',11,'wdww']);
        }
        n=parseInt(config.lhlj);
        while(n--){
            list.push(['spade',12,'lhlj']);
        }
        n=parseInt(config.yydgj);
        while(n--){
            list.push(['spade',13,'yydgj']);
        }
        n=parseInt(config.yy);
        while(n--){
            list.push(['spade',1,'yy']);
        }
        n=parseInt(config.emgs);
        while(n--){
            list.push(['spade',2,'emgs']);
        }
        n=parseInt(config.Zhìshāngyāzhì);
        while(n--){
            list.push(['spade',3,'Zhìshāngyāzhì']);
        }
        n=parseInt(config.dyzz);
        while(n--){
            list.push(['spade',4,'dyzz']);
        }
        n=parseInt(config.tsyy);
        while(n--){
            list.push(['spade',5,'tsyy']);
        }
        n=parseInt(config.yygsy);
        while(n--){
            list.push(['spade',6,'yygsy']);
        }
        n=parseInt(config.djt);
        while(n--){
            list.push(['spade',7,'djt']);
        }
        n=parseInt(config.Xuèqiángwēizhīqiāng);
        while(n--){
            list.push(['spade',8,'Xuèqiángwēizhīqiāng']);
        }
        n=parseInt(config.gzs);
        while(n--){
            list.push(['spade',9,'gzs']);
        }
        n=parseInt(config.dtszq);
        while(n--){
            list.push(['spade',10,'dtszq']);
        }
        n=parseInt(config.dys);
        while(n--){
            list.push(['spade',11,'dys']);
        }
        n=parseInt(config.cmdj);
        while(n--){
            list.push(['spade',12,'cmdj']);
        }
        n=parseInt(config.zs);
        while(n--){
            list.push(['spade',13,'zs']);
        }
        n=parseInt(config.ghqy);
        while(n--){
            list.push(['spade',1,'ghqy']);
        }
        n=parseInt(config.yyrl);
        while(n--){
            list.push(['spade',2,'yyrl']);
        }
        n=parseInt(config.tc);
        while(n--){
            list.push(['spade',3,'tc']);
        }
        n=parseInt(config.mlzx);
        while(n--){
            list.push(['spade',4,'mlzx']);
        }
        n=parseInt(config.gltd);
        while(n--){
            list.push(['spade',5,'gltd']);
        }
        n=parseInt(config.ydxd);
        while(n--){
            list.push(['spade',6,'ydxd']);
        }
        n=parseInt(config.csdp);
        while(n--){
            list.push(['spade',7,'csdp']);
        }
        n=parseInt(config.emrs);
        while(n--){
            list.push(['spade',8,'emrs']);
        }
        n=parseInt(config.csz);
        while(n--){
            list.push(['spade',9,'csz']);
        }
        n=parseInt(config.sj);
        while(n--){
            list.push(['spade',10,'sj']);
        }
        n=parseInt(config.sll);
        while(n--){
            list.push(['spade',11,'sll']);
        }
        n=parseInt(config.hyjp);
        while(n--){
            list.push(['spade',12,'hyjp']);
        }
        game.addCardPack({
            card:{
                hyjp:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-3},
			skills:['hyjp_skill'],
			ai:{
				basic:{
					equipValue:20.5
				}
			},
                },
                sll:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-3},
			skills:['sll_skill'],
			ai:{
				basic:{
					equipValue:20.5
				}
			},
                },
                sj:{
            fullimage:true,
			type:'equip',
			subtype:'equip5',
			skills:['sj_skill'],
			ai:{
				basic:{
					equipValue:20.5
				}
			},
                },
                csz:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-3},
			skills:['csz_skill'],
			ai:{
				basic:{
					equipValue:20.5
				}
			},
                },
                ydxd:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-3},
			skills:['ydxd_skill','ydxd_skill2'],
			ai:{
				basic:{
					equipValue:18.5
				}
			},
                },
                csdp:{
            fullimage:true,
			type:'equip',
			subtype:'equip2',
			onEquip:function(){
player.storage.hj+=0.28
			},
			onLose:function(){
player.storage.hj-=0.28
			},
			ai:{
				basic:{
					equipValue:18.5
				}
			},
                },
                gltd:{
            fullimage:true,
       enable:function(card,player){
				return (player.name=='xm_182'||player.name2=='xm_182')||(player.name=='xm_185'||player.name2=='xm_185')
			},
			chongzhu:true,
			type:'equip',
			subtype:'equip5',
			skills:['gltd_skill'],
			onEquip:function(){
if(player.name!='xm_182'&&player.name2!='xm_182'&&player.name!='xm_185'&&player.name2!='xm_185') player.discard(player.get('e','5'))
			},
			onLose:function(){
if((player.name=='xm_182'||player.name2=='xm_182')||(player.name=='xm_185'||player.name2=='xm_185')){
event.card=get.discardPile(function(card){ 								return card.name=='gltd'
 							});
if(!event.card){
event.card=get.drawcardPile(function(card){ 								return card.name=='gltd'
 							});
}
if(event.card){
 						 player.equip(event.card);
 				}
else player.say('哪个变态把我的头带全藏起来了！')
}
			},
			ai:{
				basic:{
					equipValue:80.5
				}
			},
                },
                mlzx:{
            fullimage:true,
       enable:function(card,player){
				return player.name=='xm_196'||player.name2=='xm_196'
			},
			onEquip:function(){
if(player.name!='xm_196'&&player.name2!='xm_196'
) player.discard(player.get('e','2'))
			},
			chongzhu:true,
			type:'equip',
			subtype:'equip2',
			skills:['mlzx_skill'],
			ai:{
				basic:{
					equipValue:80.5
				}
			},
                },
                ghqy:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-3},
			skills:['qgyl'],
			ai:{
				basic:{
					equipValue:15
				}
			},
                },
                dys:{
            fullimage:true,
            type:'',
        ai:{
              basic:{
					useful:10,
					value:10,
                         },
               },
                },
                dtszq:{
            fullimage:true,
       enable:function(card,player){
				return player.name=='xm_161'||player.name2=='xm_161'
			},
			onEquip:function(){
if(player.name!='xm_161'&&player.name2!='xm_161'
) player.discard(player.get('e','1'))
			},
			chongzhu:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-4},
			skills:['dtszq_skill'],
			ai:{
				basic:{
					equipValue:14.5
				}
			},
                },
                gzs:{
            fullimage:true,
			type:'equip',
			subtype:'equip5',
			skills:['gzs_skill'],
			ai:{
				basic:{
					equipValue:14
				}
			},
                },
                Xuèqiángwēizhīqiāng:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-4},
			skills:['Xuèqiángwēizhīqiāng_skill'],
			ai:{
				basic:{
					equipValue:12
				}
			},
                },
                djt:{
            fullimage:true,
			type:'equip',
			subtype:'equip2',
			skills:['djt_skill'],
			ai:{
				basic:{
					equipValue:12
				}
			},
                },
                yygsy:{
            fullimage:true,
			type:'equip',
			subtype:'equip2',
			skills:['yygsy_skill'],
			onLose:function(){
				player.loseHp(2);
			},
			ai:{
				basic:{
					equipValue:11
				}
			},
                },
                tsyy:{
            fullimage:true,
			type:'equip',
			subtype:'equip5',
			skills:['tsyy_skill'],
			onLose:function(){
				player.draw(2);
				player.loseHp();
			},
			ai:{
				basic:{
					equipValue:15
				}
			},
                },
                dyzz:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-2},
			skills:['dyzz_skill'],
			ai:{
				basic:{
					equipValue:14
				}
			},
                },
                frbf:{
            fullimage:true,
			type:'equip',
			subtype:'equip2',
			skills:['frbf_skill'],
			ai:{
				basic:{
					equipValue:4
				}
			},
                },
                jgj:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-3},
			skills:['jgj_skill'],
			ai:{
				basic:{
					equipValue:4
				}
			},
                },
                cs:{
            fullimage:true,
			type:'equip',
			subtype:'equip5',
			skills:['cs_skill'],
			ai:{
				basic:{
					equipValue:7
				}
			},
                },
                fssj:{
            fullimage:true,
			type:'equip',
			subtype:'equip1',
			distance:{attackFrom:-3}, 
			skills:['fssj_skill'],
			ai:{
				basic:{
					equipValue:6
				}
			},
                },
                cqtc:{
            fullimage:true,
            enable:true,
            type:'basic',
            selectTarget:-1,
            filterTarget:function (card,player,target){
return player!=target&&get.distance(player,target,'attack')>1;
},
            content:function(){
          player.useCard({name:'sha'},target,false);
            },
        ai:{
              basic:{
                    order:3,
					value:10,
                         },
             result:{
                   target:-2,
                         },
               },
                },
                yy:{
            fullimage:true,
            enable:true,
            type:'basic',
            selectTarget:1,
            filterTarget:function (card,player,target){
return player!=target&&target.num('he');
},
            content:function(){
          target.discard(target.get('he').randomGet());
          player.draw();
            },
        ai:{
              basic:{
                    order:9,
					value:10,
                         },
             result:{
                   target:-1,
                         },
               },
                },
                tb:{
            fullimage:true,
            enable:true,
            type:'trick',
            selectTarget:-1,
            filterTarget:function (card,player,target){
return target.num('e');
},
            content:function(){
           target.discard(target.get('e').randomGets(Infinity));
            },
        ai:{

				order:9,


					value:10,

				result:{

					target:function(player,target){

						if(target.num('e')) return -1;

						return 0;

					}

				},

				tag:{

					multitarget:1,

					multineg:1

				}

			},
                },
                jc:{
            fullimage:true,
            enable:true,
            type:'trick',
            selectTarget:1,
            filterTarget:function (card,player,target){
return player!=target;
},
            content:function(){
'step 0'
target.getStat().card={}
target.getStat().skill={}
'step 1'
          target.phaseDraw();
          target.phaseUse();
            },
        ai:{
              basic:{
                    order:1,
					value:10,
                         },
             result:{
                   target:1,
                         },
               },
                },
                tg:{
            fullimage:true,
            enable:true,
            type:'trick',
            selectTarget:-1,
            filterTarget:function (card,player,target){
return player==target;
},
            content:function(){
          'step 0'
          target.draw();
          'step 1'
          target.showHandcards();
          if(target.num('h',{color:'red'})>target.num('h',{color:'black'})){
             target.recover();
              }
             else{
             target.draw();
                }
            },
        ai:{
              basic:{
                    order:7,
					value:10,
                         },
             result:{
                   player:2,
                         },
               },
                },
                rqmz:{
            fullimage:true,
            enable:true,
            type:'trick',
            filterTarget:function (card,player,target){
return Math.floor(target.num('h')/2)>0;
},
            content:function(){
          target.draw(Math.floor(target.num('h')/2));
            },
        ai:{
              basic:{
                    order:10.5,
					value:10,
                         },
             result:{
                   target:function (player,target){
return Math.floor(target.num('h')/2);
},
                         },
               },
                },
                yxcc:{
            fullimage:true,
            type:'trick',
            content:function(){
          target.damage();
            },
        ai:{
              basic:{
                    order:1,
					value:8,
                         },
             result:{
                   target:-1,
                         },
               },
                },
                wdww:{
            fullimage:true,
            type:'delay',
			enable:function(card,player){
				return (lib.filter.judge(card,player,player));
			},
			filterTarget:function(card,player,target){
				return (lib.filter.judge(card,player,target)&&player!=target);	
		},
			judge:function(card){
				if(get.number(card)>5) return -3;
				return 0;
			},
			effect:function(){
				if(result.judge) player.loseHp();
         },
        ai:{
              basic:{
                    order:1,
					value:10,
                         },
             result:{
                   target:-1,
                         },
               },
                },
                lhlj:{
            fullimage:true,
            enable:true,
            type:'trick',
            filterTarget:function (card,player,target){
return target!=player;
},
            content:function(){
          num=Math.ceil((target.hp+player.hp)/2);
          player.hp=num;
          player.update();
          target.hp=num;
          target.update();
            },
        ai:{
              basic:{
                    order:9.5,
					value:10,
                         },
             result:{
                   target:function (player,target){
if(player.hp>target.hp&&Math.ceil((target.hp+player.hp)/2)>target.hp&&target.isDamaged()) return 5;
if(player.hp<target.hp&&Math.ceil((target.hp+player.hp)/2)<target.hp) return -2;
},
                         },
               },
                },
                yydgj:{
            fullimage:true,
            type:'delay',
			chongzhu:true,
			enable:function(card,player){
				return (lib.filter.judge(card,player,player)&&(lib.config.mode=='guozhan'||lib.config.mode=='identity'));
			},
			filterTarget:function(card,player,target){
				return (lib.filter.judge(card,player,target)&&player!=target&&target.identity!='zhu');	
		},
			judge:function(card){
				if(get.number(card)<5) return -5;
				return 0;
			},
			effect:function(){
				if(result.judge){
if(lib.config.mode=='guozhan'){
if(player.identity!='ye'){
player.identity='ye';
player.setIdentity();
player.identityShown=true;
}
else{
player.discard(player.get('he'));
player.loseHp();
}
}
else{
if(player.identity!='nei'){
player.identity='nei';
player.setIdentity();
player.identityShown=true;
}
else{
player.discard(trigger.player.get('he'));
player.loseHp();
}
}
}
         },
        ai:{
              basic:{
                    order:1,
					value:10,
                         },
             result:{
                   target:-10,
                         },
               },
                },
                Zhìshāngyāzhì:{
            fullimage:true,
            enable:true,
            type:'trick',
            selectTarget:1,
            filterTarget:function (card,player,target){
return player!=target&&target.num('h');
},
            content:function(){
          if(target.num('h',{type:'delay'})||target.num('h',{type:'trick'})){player.gain(target.get('h',{type:'delay'}))
player.gain(target.get('h',{type:'trick'})) }
          else{target.damage()}
            },
        ai:{
              basic:{
                    order:10,
					value:10,
                         },
             result:{
                   target:function (player,target){
return -target.num('h');
},
                         },
               },
                },
                emgs:{
            fullimage:true,
            enable:true,
            type:'trick',
            selectTarget:-1,
            filterTarget:function (card,player,target){
return player==target;
},
            content:function(){
          target.gainMaxHp(2);
          target.recover(2);
          if(Math.random()<=0.05) target.die();
            },
        ai:{
              basic:{
                    order:7,
					value:7,
                         },
             result:{
                   player:1,
                         },
               },
                },
                cmdj:{
            fullimage:true,
            enable:true,
            type:'xm_cm',
            selectTarget:1,
            filterTarget:function (card,player,target){
return player!=target;
},
            content:function(){
if(!target.storage.xm_cm){
target.storage.xm_cm=true;
target.mark('沉默',{
name:'沉默',
content:'无法造成伤害',
});
}
else target.damage()
            },
        ai:{
              basic:{
                    order:10,
					value:11,
                         },
             result:{
                   target:-5,
                         },
               },
                },
                zs:{
            fullimage:true,
       enable:function(card,player){
				return !player.storage.zs
			},
            type:'',
            selectTarget:-1,
            filterTarget:function (card,player,target){
return player==target;
},
            content:function(){
          target.mark(card);
target.storage.zs=true
            },
        ai:{
              basic:{
                    order:10.5,
					value:10,
                         },
             result:{
                   target:10,
                         },
               },
                },
                yyrl:{
            fullimage:true,
            type:'',
            enable:true,
            selectTarget:1,
            filterTarget:true,
            content:function(){
if(target.storage.yhgg){
player.storage.xm_xmxm+=100
player.syncStorage('xm_xmxm');
}
else{
          target.mark(card);
target.storage.yhgg=get.time()
}
            },
        ai:{
              basic:{
                    order:1,
					value:10,
                         },
             result:{
                   target:10,
                         },
               },
                },
		tc:{
			fullimage:true,
			type:'basic',
			enable:true,
			usable:1,
			selectTarget:1,
			filterTarget:function(card,player,target){
return player!=target
},
			content:function(){
target.damage(['thunder','fire'].randomGet())
			},
        ai:{
              basic:{
                    order:11,
					value:10,
                         },
             result:{
                   target:-10,
                         },
               },
		},
                emrs:{
            fullimage:true,
            enable:true,
            type:'trick',
            selectTarget:-1,
            filterTarget:function (card,player,target){
return player==target;
},
            content:function(){
target.storage.xm_hj+=0.05
target.storage.xm_sb+=0.05
target.storage.xm_fb+=0.05
target.storage.xm_fk+=0.05
target.storage.xm_hc+=0.05
target.storage.xm_fc+=0.05
target.storage.xm_bj+=0.05
            },
        ai:{
              basic:{
                    order:12,
					value:10,
                         },
             result:{
                   player:2,
                         },
               },
                },
            },
 	skill:{
		gzs_skill:{
			trigger:{player:"damageBefore",},
			priority:-2,
        forced:true,
			content:function(){
				 trigger.untrigger();
           trigger.finish();
			},
		},
		 Xuèqiángwēizhīqiāng_skill:{
			trigger:{source:"damageBegin",},
			priority:5,
			check:function (event,player){
return (ai.get.attitude(player,event.player)<0)&&player.hp>2;
},
			content:function(){
           'step 0'
				 trigger.num+=2;
           player.loseHp();
			},
		},
		frbf_skill:{
			trigger:{player:"damageEnd",},
			priority:5,
        filter:function(event,player){
        return player.num('h');
        },
			content:function(){
           'step 0'

				 player.chooseToDiscard('h',true)
           'step 1'
           player.recover()
			},
		},
		jgj_skill:{
			trigger:{player:'shaBegin'},
			priority:5,
        forced:true,
			content:function(){
				player.draw(2)
			},
		},
		cs_skill:{
			trigger:{global:"loseEnd",},
			priority:5,
        filter:function(event,player){
        if(event.player!=player&&_status.currentPhase==player) return true;
return false;
        },
        forced:true,
			content:function(){
				 player.draw()
			},
		},
		yygsy_skill:{
			trigger:{player:"damageBefore",},
			priority:-1,
        filter:function(event,player){
        if(event.source!=player&&event.source) return true;
return false;
        },
        forced:true,
			content:function(){
				 trigger.player=trigger.source;
			},
		},
		djt_skill:{
			trigger:{player:"damageEnd",},
			priority:5,
        forced:true,
			content:function(){
				 player.recover();
				 if(trigger.source&&!trigger.source.isTurnedOver()) trigger.source.turnOver();
			},
		},
		dyzz_skill:{
			trigger:{global:"phaseBefore",},
			priority:5,
        filter:function (event,player){
if(event.player==player&&!event.player.skills) return false;
return true;
},
        forced:true,
			content:function(){
				 player.addTempSkill(trigger.player.skills.randomGet(),{player:'phaseAfter'});
			},
		},
		dtszq_skill:{
			trigger:{source:"damageEnd",},
			priority:5,
        forced:true,
			content:function(){
           player.recover();
			},
		},
		fssj_skill:{
			trigger:{source:"damageEnd",},
			priority:5,
        forced:true,
			content:function(){
trigger.player.discard(trigger.player.get('he').randomGet());
			},
		},
		tsyy_skill:{
			trigger:{global:"phaseBegin",},
			priority:5,
       forced:true,
			content:function(){
           'step 0'
				 player.draw();
           'step 1'
           if(player.isDamaged()&&player.num('h')<player.maxHp) player.recover();
			},
		},
_yxcc:{
			trigger:{global:'damageAfter'},
			direct:true,
			filter:function(event,player){
				if(event.player==player) return false;
				if(!event.player.isAlive()) return false;
				if(player.num('h','yxcc')) return true;
				var mn=player.get('e','5');
			 if(mn&&mn.name=='muniu'&&mn.cards&&mn.cards.length){	
				for(var i=0;i<mn.cards.length;i++){
						if(mn.cards[i].name=='yxcc') return true;
					}
				}
				return false;
			},
			content:function(){
				player.chooseToUse('是否对'+get.translation(trigger.player)+'使用野性穿刺？',function(card,player){
					if(card.name!='yxcc') return false;	
				var mod=game.checkMod(card,player,'unchanged','cardEnabled',player.get('s'));
					if(mod!='unchanged') return mod;
					return true;
				},
trigger.player,-1);
			}
		},
_dys:{
mod:{
maxHandcard:function (player,num){
return num+(player.num('h',{name:'dys'})*2);
},
},
},
_dys2:{
trigger:{player:"phaseEnd",},
priority:5,
forced:true,
filter:function (event,player){
return player.num('h',{name:'dys'})>2;
},
content:function (){
player.discard(player.get('h',{name:'dys'}))
player.draw(7);
},
},
_zs:{
trigger:{source:"damageBefore",},
priority:80,
forced:true,
filter:function(event,player){
return (event.card&&player.storage.zs&&event.card.name=='sha')||player.storage.xm_1921==2;
},
content:function(){
player.storage.xm_1921=0
if(Math.random()<=0.65) trigger.num++
else{
var next=game.createEvent('die');
 					next.player=trigger.player;
 					next.source=player;
 next.setContent('die');
}
}
},
_zs2:{
trigger:{player:"shaEnd",},
forced:true,
filter:function(event,player){
return player.storage.zs;
},
content:function(){
player.storage.zs=false
player.unmark('zs')
}
},
qgyl:{
trigger:{source:"damage",},
priority:80,
forced:true,
content:function(){
'step 0'
player.storage.xm_xmxm+=50
player.syncStorage('xm_xmxm');
player.chooseTarget(function(card,player,target){
return target.isDamaged();
}).ai=function(target){
return ai.get.attitude(player,target);
}
'step 1'
if(result.bool){
event.target=result.targets[0];
event.target.recover()
}
}
},
		_yyrl:{
			trigger:{global:"phaseBefore",},
			priority:5,
        filter:function (event,player){
if(!player.storage.yhgg) return false;
return true;
},
        forced:true,
			content:function(){
				 player.recover();
			},
		},
_yhgg1:{
trigger:{
player:['useCardAfter','useCardBefore','phaseBefore','loseEnd','phaseBegin','phaseDradBegin','phaseUseBegin','phaseUseEnd','phaseEnd','phaseDiscardAfter','phaseDiscardBegin','useSkillBefore','judgeBefore','judgeAfter','gainBefore','gainEnd'],
},
forced:true,
filter:function(event,player){
return player.storage.yhgg;
},
content:function (){
'step 0'
player.storage.yhgg1=get.time()-player.storage.yhgg;
'step 1'
if(player.storage.yhgg1>=40000){
delete player.storage.yhgg;
player.unmark('yyrl')
}
}
},
mlzx_skill:{
trigger:{player:"triggerBefore",},
			priority:5,
        filter:function (event,player){
if(event.skill!='xm_1962') return false;
return true;
},
        forced:true,
content:function (){
player.storage.fk+=0.05
}
},
gltd_skill:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
target.addTempSkill('mad','phaseAfter');
for(var i=0;i<target.node.marks.childNodes.length;i++){
if(target.node.marks.childNodes[i].name=='mad'){
target.node.marks.childNodes[i].setBackgroundImage('extension/朔/'+'gltd'+'.jpg'); 	
target.node.marks.childNodes[i].innerHTML='';
}
}	
target.phase()
'step 1'
while(_status.event.name!='phase'){
_status.event=_status.event.parent;
}
_status.event.finish();
_status.event.untrigger(true);
},
ai:{
basic:{
order:0.5,
},
result:{
target:-5,
},
},
},
ydxd_skill:{
trigger:{
source:"damageBefore",
},
forced:true,
filter:function (event,player){
return event.nature;
},
content:function (){
trigger.num++
}
},
ydxd_skill2:{
trigger:{
player:"damageBefore",
source:"damageBefore",
},
forced:true,
filter:function (event,player){
return !event.nature;
},
content:function (){
trigger.untrigger();
trigger.finish();
}
},
csz_skill:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
'step 0'
event.num=0
'step 1'
if(Math.random()<=0.05){
target.damage();
}
else{
target.popup('闪避');
}
event.num++
'step 2'
if(event.num<50) event.goto(1)
}
},
sj_skill:{
trigger:{
global:"dieAfter",
},
forced:true,
content:function(){
player.draw(trigger.player.maxHp)
}
},
sll_skill:{
enable:"phaseUse",
usable:1,
content:function (){
for(var i=0;i<game.players.length;i++){
if(ai.get.attitude(player,game.players[i])>0){
game.players[i].recover()
}
}
}
},
hyjp_skill:{
enable:"phaseUse",
usable:1,
filterTarget:function (card,player,target){
return player!=target;
},
content:function (){
target.damage(2,['thunder','fire'].randomGet());
}
},
            },
            translate:{
csz:'阐释者',
csz_info:'出牌阶段限一次，对一名角色造成50次伤害，命中概率为5%',
csz_skill:'星爆气流斩',
csz_skill_info:'出牌阶段限一次，对一名角色造成50次伤害，命中概率为5%',
sj:'圣经',
sj_skill:'超渡',
sj_info:'其他角色死亡后，你摸x张牌（x为该角色的体力上限）',
sll:'神乐铃',
sll_skill:'神乐舞',
sll_info:'出牌阶段限一次，令友方角色各回复1点体力',
sll_skill_info:'出牌阶段限一次，令友方角色各回复1点体力',
hyjp:'黑岩巨炮',
hyjp_info:'出牌阶段限一次，对一名角色造成2点法术伤害',
hyjp_skill:'黑岩巨炮',
hyjp_skill_info:'出牌阶段限一次，对一名角色造成2点法术伤害',
emrs:'恶魔原石',
emrs_info:'提升50点物理暴击、法术暴击、护甲、法术抗性、护甲穿透、法术穿透、闪避',
csdp:'仓鼠斗篷',
csdp_info:'装备区内拥有此牌时，提升280点护甲',
ydxd:'妖刀心渡',
ydxd_skill:'妖刀心渡',
ydxd_skill2:'妖刀心渡',
ydxd_info:'防止你造成或受到物理伤害<br>造成的法术伤害+1',
                gltd:'鬼灵头带',
		gltd_skill:'附身',
                gltd_info:'【郭嘉专属装备】出牌阶段，附身一名角色，该角色进行一个回合，然后结束你的回合<br>从装备区失去【鬼灵头带】时，你从牌堆中获得并装备一张【鬼灵头带】（主动更换装备时，将与下一张宝物牌同时存在）',
gltd_skill_info:'出牌阶段，附身一名角色，该角色进行一个回合，然后结束你的回合',
                mlzx:'魔灵之心',
		mlzx_skill:'魔灵之心',
                mlzx_info:'【司马懿专属装备】每次发动【视网杀界】时，提升50点法术抗性',
tc:'突刺',
tc_info:'对目标造成一点伤害',
qgyl:'曲顾雅量',
yyrl:'余音绕梁',
ghqy:'古寒琴音',
_yyrl:'余音绕梁',
ghqy_info:'每造成一次伤害，你额外获得50点能量，然后可以令一名角色回复一点体力',
yyrl_info:'令目标获得余音绕梁效果，持续40秒，于持续时间内再次指定该角色时，效果改为该角色获得100点能量',
xm_cm:'沉默',
                cmdj:'沉默打击',
                cmdj_info:'令目标进入沉默，若目标已被沉默则改为造成一点伤害',
zs:'斩杀',
zs_info:'令下一张【杀】带有斩杀效果',
_zs:'斩杀',
                dys:'地狱石',
		_dys2:'地狱石',
                dys_info:'回合结束阶段，若你拥有三张或更多【地狱石】，你弃置所有【地狱石】，然后摸七张牌<br>每拥有一张【地狱石】，你的手牌上限便+2',
                dtszq:'堕天使之枪',
		dtszq_skill:'堕天使之枪',
                dtszq_info:'【董卓专属装备】每造成一次伤害，你回复一点体力',
                gzs:'公主伞',
		gzs_skill:'公主伞',
                gzs_info:'免疫一切伤害',
                frbf:'风刃缚封',
		frbf_skill:'风刃缚封',
                frbf_info:'当你受到伤害后,你可以弃置一张手牌，然后回复一点体力',
                jgj:'极光剑',
		jgj_skill:'极光剑',
                jgj_info:'当你使用杀时，你摸两张牌',
                jgj_skill_info:'你视为拥有【极光剑】的效果',
                cs:'穿线',
		cs_skill:'穿线',
                cs_info:'你的回合内，每当其他角色每失去一次牌，你摸一张牌',
                fssj:'腐蚀试剂',
		fssj_skill:'腐蚀试剂',
                fssj_info:'当你造成伤害后,受伤角色弃置一张牌',
                dyzz:'渡鸦之杖',
		dyzz_skill:'渡鸦之杖',
                dyzz_info:'其他角色回合开始时，你随机获得其一项技能，直到你的回合结束',
                tsyy:'天使羽翼',
		tsyy_skill:'天使羽翼',
                tsyy_info:'每当一名角色回合开始时，你摸一张牌，若此时你的手牌少于体力上限且你已受伤，你回复一点体力；你从装备区失去天使羽翼时，你摸两张牌并失去一点体力',
                yygsy:'阴阳鬼神玉',
		yygsy_skill:'阴阳鬼神玉',
                yygsy_info:'受到伤害时，若伤害来源不为你，改为伤害来源受到伤害；你从装备区失去阴阳鬼神玉时，你失去两点体力',
                djt:'电吉他',
		djt_skill:'电吉他',
                djt_info:'受到伤害后，你回复一点体力，若伤害来源的武将牌正面朝上，伤害来源翻面',
                Xuèqiángwēizhīqiāng:'血蔷薇之枪',
		 Xuèqiángwēizhīqiāng_skill:'血蔷薇之枪',
                Xuèqiángwēizhīqiāng_info:'造成伤害时，你可以失去一点体力并令伤害+2',
                cqtc:'长枪突刺',
                cqtc_info:'视为对攻击范围外所有角色使用杀（不计入使用次数）',
                yy:'圆月',
                yy_info:'随机弃置目标一张牌，然后你摸一张牌',
                tb:'坍塌',
                tb_info:'弃置所有角色装备区内的牌',
                jc:'极速',
                jc_info:'令目标进行额外的摸牌及出牌阶段',
                tg:'祷告',
                tg_info:'你摸一张牌并展示手牌，若红色牌多于黑色牌，你回复一点体力；若黑色牌不少于红色牌，你摸一张牌',
                rqmz:'元气满载',
                rqmz_info:'令目标摸X张牌，X为目标手牌数的一半（向下取整）',
                yxcc:'野性穿刺',
                yxcc_info:'其他角色受伤后，对其造成一点伤害',
                wdww:'巫毒娃娃',
                wdww_info:'出牌阶段，对其他角色使用。该角色判定阶段须进行一次判定，若判定结果点数大于5，该角色失去1点体力',
                lhlj:'灵魂链接',
                lhlj_info:'平衡你与目标的体力（向上取整）',
                yydgj:'永远的孤寂',
                yydgj_info:'出牌阶段，对不为主公的其他角色使用。该角色判定阶段须进行一次判定，若判定结果点数小于5，依照该角色的身份执行效果，若该角色不为内奸，其身份改为内奸；若该角色身份为内奸，其弃置所有牌并失去一点体力（若为国战模式，将内奸改为野心家）',
                Zhìshāngyāzhì:'智商压制',
                Zhìshāngyāzhì_info:'获得目标手牌中的锦囊牌，若获得数量为0，你对其造成一点伤害',
                emgs:'恶魔果实',

                emgs_info:'增加两点体力上限并回复两点体力，5%概率令使用者死亡',
mad:'附身',
mad_bg:'附',
            },
list:list
});
lib.skill.mad={
 				mark:true,
 				intro:{
 					content:'角色处于附身状态',
 					name:'附身', 
 				}
 			}
    },
editable:false,
    config:{
		checkUpdate:{
 			name:'自动检查更新',
 			init:true,
 		},
        hyjp:{
            name:'黑岩巨炮',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        sll:{
            name:'神乐铃',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        sj:{
            name:'圣经',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        csz:{
            name:'阐释者',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        emrs:{
            name:'恶魔原石',
            init:'9',
            item:{
                '0':'〇张',
                '9':'九张',
                '18':'十八张',
            }
        },
        ydxd:{
            name:'妖刀心渡',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        csdp:{
            name:'仓鼠斗篷',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        gltd:{
            name:'鬼灵头带',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        mlzx:{
            name:'魔灵之心',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        tc:{
            name:'突刺',
            init:'9',
            item:{
                '0':'〇张',
                '9':'九张',
                '18':'十八张',
            }
        },
        yyrl:{
            name:'余音绕梁',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
        ghqy:{
            name:'古寒琴音',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        zs:{
            name:'斩杀',
            init:'2',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
           cmdj:{
            name:'沉默打击',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
        dys:{
            name:'地狱石',
            init:'9',
            item:{
                '0':'〇张',
                '9':'九张',
                '18':'十八张',
                '2000':'两千张',
            }
        },
        dtszq:{
            name:'堕天使之枪',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
                '3':'三张',
            }
        },
        frbf:{
            name:'风刃缚封',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
        jgj:{
            name:'极光剑',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
        cs:{
            name:'穿线',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
        fssj:{
            name:'腐蚀试剂',
            init:'2',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
        cqtc:{
            name:'长枪突刺',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           yy:{
            name:'圆月',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           tb:{
            name:'坍塌',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',

                '3':'三张',
                '5':'五张',
            }
        },
           jc:{
            name:'极速',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           tg:{
            name:'祷告',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           rqmz:{
            name:'元气满载',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           yxcc:{
            name:'野性穿刺',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           wdww:{
            name:'巫毒娃娃',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           lhlj:{
            name:'灵魂链接',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           yydgj:{
            name:'永远的孤寂',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',


            }
        },
           gzs:{
            name:'公主伞',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
           dyzz:{
            name:'渡鸦之杖',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
           emgs:{
            name:'恶魔果实',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
           tsyy:{
            name:'天使羽翼',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
           djt:{
            name:'电吉他',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
           yygsy:{
            name:'阴阳鬼神玉',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
           Xuèqiángwēizhīqiāng:{
            name:'血蔷薇之枪',
            init:'1',
            item:{
                '0':'〇张',
                '1':'一张',
                '2':'两张',
            }
        },
           Zhìshāngyāzhì:{
            name:'智商压制',
            init:'3',
            item:{
                '0':'〇张',
                '1':'一张',
                '3':'三张',
                '5':'五张',
            }
        },
    }
})
