window.onload = function(){
    var json = {
        title :[
            '<p>&nbsp;&nbsp;&nbsp;&nbsp;中华美食展现了食物给中国人生活带来的仪式,蕴含了中国美食特有的气质元素，体现了中国文化的精致和源远流长。</p>',
            '<img width="200px" height="200px" src="images/1.png">',
            '<img width="200px" height="200px" src="images/2.png">',
            '<img width="200px" height="200px" src="images/3.png">',
            '<img width="200px" height="200px" src="images/4.png">',
            '<img width="200px" height="200px" src="images/5.png">',
            '<img width="200px" height="200px" src="images/6.png">',
            '<p>&nbsp;&nbsp;&nbsp;&nbsp;读懂中国这个古老的东方国度，可以以食为天窗，从美食中感知中国人的文化传统、家族观念、生活态度与故土难离。</p>',
            '<img width="200px" height="200px" src="images/8.png">',
            '<img width="200px" height="200px" src="images/9.png">',
            '<img width="200px" height="200px" src="images/10.png">',
            '<img width="200px" height="200px" src="images/11.png">',
            '<img width="200px" height="200px" src="images/12.png">',  
            '<p>&nbsp;&nbsp;&nbsp;&nbsp;人们收获、保存、烹饪美食，并在其过程中传承食物所承载的味觉记忆、饮食习俗、文化样态与家常情感。</p>',
            '<img width="200px" height="200px" src="images/13.png">',
            '<p>&nbsp;&nbsp;&nbsp;&nbsp;春耕、夏耘、秋收、冬藏，天人合一的东方哲学让中国饮食依时而变,把心意和家的味道端上我们的餐桌。</p>',
            '<img width="200px" height="200px" src="images/14.png">',
            '<img width="200px" height="200px" src="images/15.png">',
            '<img width="200px" height="200px" src="images/16.png">',
            '<img width="200px" height="200px" src="images/17.png">',
            '<img width="200px" height="200px" src="images/18.png">',
            '<p>&nbsp;&nbsp;&nbsp;&nbsp;淘洗历史，中医营养摄生学说创造了食材运用的新天地，糅合时光，一代又一代的中国人升起烟火，用心意烹制食物。</p>',    
            '<img width="200px" height="200px" src="images/19.png">',
            '<img width="200px" height="200px" src="images/20.png">',
            '<img width="200px" height="200px" src="images/21.png">',
            '<img width="200px" height="200px" src="images/22.png">',
            '<img width="200px" height="200px" src="images/23.png">',
            '<img width="200px" height="200px" src="images/24.png">',
            '<p>&nbsp;&nbsp;&nbsp;&nbsp;用至精至诚的心意烹制食物，一餐一食之间，中国人展示个性，确认归属，构建文明，理解和把握着世界的奥妙。</p>',
            '<img width="200px" height="200px" src="images/25.png">',
            '<img width="200px" height="200px" src="images/26.png">',
            '<img width="200px" height="200px" src="images/27.png">',
            '<img width="200px" height="200px" src="images/28.png">',
            '<img width="200px" height="200px" src="images/29.png">',
            '<img width="200px" height="200px" src="images/31.png">',
            '<p>&nbsp;&nbsp;&nbsp;&nbsp;中国饮食生长于传统文化的沃土，在宽广的时空中，以感恩之心去领悟食物给予我们珍贵的滋养远眺中华文化的魂魄。</p>',
            '<img width="200px" height="200px" src="images/32.png">',
            '<img width="200px" height="200px" src="images/33.png">'
            ]
        };

        var arr=[];
        var iNow = 9;
        page({
            id : 'div2',
            nowNum : 1,
            allNum : Math.ceil(json.title.length/10),
            callBack : function(now,all){
            //alert('当前页:' + now +',总共页:'+all);
            //动态添加
            var num = now*10 < json.title.length ? 10:json.title.length-(now-1)*10;
            var oUl = document.getElementById('ul2');
            var aLi = oUl.getElementsByTagName('li');
            //alert(oUl.innerText);
            if(oUl.innerText==''){
                //alert("1");
                for (var i = 0; i < num; i++) {
                    var oLi = document.createElement('li');
                    oLi.innerHTML = json.title[(now-1)*10+i];
                    oUl.appendChild(oLi);
                }

                for (var i = 0; i < aLi.length; i++) {
                    arr.push([aLi[i].offsetLeft,aLi[i].offsetTop]);
                }

                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].style.position = 'absolute';
                    aLi[i].style.left = arr[i][0]+'px';
                    aLi[i].style.top = arr[i][1]+'px';
                    aLi[i].style.margin = 0;
                }
            }else{
                //一个一个往下掉
                //改成定位布局
                var timer = setInterval(function(){
                //缩回来
                    startMove(aLi[iNow],{left:200,top:250,opacity:0});
                    if (iNow ==0) {
                        clearInterval(timer);
                        iNow = num-1;
                        for (var i = 0; i < num; i++) {
                            aLi[i].innerHTML = json.title[(now-1)*10+i];
                        }
                        var timer2 = setInterval(function(){
                            startMove(aLi[iNow],{left:arr[iNow][0],top:arr[ iNow][1],opacity:100});
                            if (iNow ==0 ) {
                                clearInterval(timer2);
                                iNow = num -1;
                            }
                            else{
                                iNow--;
                            }
                        },100);
                    }else
                    {
                        iNow--;
                    }       
                },100)

            }
        }
    
    })

function page(opt){

    if(!opt.id){return false};
    
    var obj = document.getElementById(opt.id);
    
    var nowNum = opt.nowNum || 1;
    var allNum = opt.allNum || 5;
    var callBack = opt.callBack || function(){};
    
    if( nowNum>=4 && allNum>=6 ){
    
        var oA = document.createElement('a');
        oA.href = '#1';
        oA.innerHTML = '首页';
        obj.appendChild(oA);
    
    }
    
    if(nowNum>=2){
        var oA = document.createElement('a');
        oA.href = '#' + (nowNum - 1);
        oA.innerHTML = '上一页';
        obj.appendChild(oA);
    }
    
    if(allNum<=5){
        for(var i=1;i<=allNum;i++){
            var oA = document.createElement('a');
            oA.href = '#' + i;
            if(nowNum == i){
                oA.innerHTML = i;
            }
            else{
                oA.innerHTML = '['+ i +']';
            }
            obj.appendChild(oA);
        }   
    }
    else{
    
        for(var i=1;i<=5;i++){
            var oA = document.createElement('a');
            
            
            if(nowNum == 1 || nowNum == 2){
                
                oA.href = '#' + i;
                if(nowNum == i){
                    oA.innerHTML = i;
                }
                else{
                    oA.innerHTML = '['+ i +']';
                }
                
            }
            else if( (allNum - nowNum) == 0 || (allNum - nowNum) == 1 ){
            
                oA.href = '#' + (allNum - 5 + i);
                
                if((allNum - nowNum) == 0 && i==5){
                    oA.innerHTML = (allNum - 5 + i);
                }
                else if((allNum - nowNum) == 1 && i==4){
                    oA.innerHTML = (allNum - 5 + i);
                }
                else{
                    oA.innerHTML = '['+ (allNum - 5 + i) +']';
                }
            
            }
            else{
                oA.href = '#' + (nowNum - 3 + i);
                
                if(i==3){
                    oA.innerHTML = (nowNum - 3 + i);
                }
                else{
                    oA.innerHTML = '['+ (nowNum - 3 + i) +']';
                }
            }
            obj.appendChild(oA);
            
        }
    
    }
    
    if( (allNum - nowNum) >= 1 ){
        var oA = document.createElement('a');
        oA.href = '#' + (nowNum + 1);
        oA.innerHTML = '下一页';
        obj.appendChild(oA);
    }
    
    if( (allNum - nowNum) >= 3 && allNum>=6 ){
    
        var oA = document.createElement('a');
        oA.href = '#' + allNum;
        oA.innerHTML = '尾页';
        obj.appendChild(oA);
    
    }
    
    callBack(nowNum,allNum);
    
    var aA = obj.getElementsByTagName('a');
    
    for(var i=0;i<aA.length;i++){
        aA[i].onclick = function(){
            
            var nowNum = parseInt(this.getAttribute('href').substring(1));
            
            obj.innerHTML = '';
            
            page({
            
                id : opt.id,
                nowNum : nowNum,
                allNum : allNum,
                callBack : callBack
            
            });
            
            return false;
            
        };
    }

}

// 按钮more
var oMore = document.getElementsByClassName('more')[0];
                    var oMoreA = oMore.getElementsByTagName('a')[0];
                    oMore.onmouseover = function(){
                        oMore.style.backgroundColor = "#e25111";
                        oMoreA.style.color='white';
                    }
                    oMore.onmouseout = function(){
                        oMore.style.backgroundColor = "";
                        oMoreA.style.color='';
                    }
};