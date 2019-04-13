 
    var oDiv = document.getElementById('div1');
    var oUl1 = oDiv.getElementsByTagName('ul')[0];
    var aLi1 = oUl1.getElementsByTagName('li');
    var aImg = oUl1.getElementsByTagName('img');
    
    var oBtn = document.getElementById('btn');
    var aA = oBtn.getElementsByTagName('a');
    
    var imgWidth = 2600;
    var iNow1 = 0;//建立一个变量
    var iNow2 = 0;//无缝连接的循环标示
    
    oUl1.style.width = aImg.length * imgWidth + 'px';
    
    function toReSize(){
        
        var veiwWidth = document.documentElement.clientWidth;
        
        if(veiwWidth>1000){
            for(var i=0;i<aImg.length;i++){
                aImg[i].style.left = - (imgWidth - veiwWidth)/2 + 'px';
            }
        }
    
    }
    
    toReSize();
    
    window.onresize = function(){
        toReSize();
    };
    
    
    for(var i=0;i<aA.length;i++){
        aA[i].index = i;//索引
        aA[i].onclick = function(){
        
            for(var i=0;i<aA.length;i++){
                aA[i].className = '';
            }
            this.className = 'active';
            
            startMove(oUl1,{left : - this.index * imgWidth});//当索引为0的时候，显示第一个图片
        
        };
    }
    
    
    setInterval(toRun,3000);//自动播放
    
    function toRun(){
    
        if(iNow1 == aLi1.length-1){
            aLi1[0].style.position = 'relative';//
            aLi1[0].style.left = aLi1.length * imgWidth + 'px';
            iNow1 = 0;
        }//当到最后一个的时候 再回到0
        else{
            iNow1++;
        }
        
        iNow2++;
        
        for(var i=0;i<aA.length;i++){
            aA[i].className = '';
        }
        
        aA[iNow1].className = 'active';
        
        startMove(oUl1,{left : - iNow2 * imgWidth},function(){
        
            if(iNow1==0){
                aLi1[0].style.position = 'static';
                oUl1.style.left = 0;
                iNow2 = 0;
            }
        
        });//当走完最后一个，第一个定位改成static， 把所有元素还原回去
        
    }
