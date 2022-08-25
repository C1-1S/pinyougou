window.addEventListener('load', function() {
        var pyg = document.querySelector('.mypyg');
        var secondMenu = document.querySelector('.secondMenu');
        var follow = document.querySelector('.follow');
        var thirdMenu =document.querySelector('.thirdMenu');
        var dd = document.querySelector('.dd');
        var navigation = document.querySelector('.navigation');
        var goBack = document.querySelector('.goBack');
        var btn_l = document.querySelector('.btn_l');
        var btn_r = document.querySelector('.btn_r');
        var main_p = document.querySelector('.main_p');
        var ddTop =dd.offsetTop;
        document.addEventListener('scroll', function(){
            // console.log(window.pageYOffset); 184
            if(window.pageYOffset >= ddTop){
                navigation.style.position='fixed';
                goBack.style.display='block';
                navigation.style.top = 110+ 'px';
            }else{
                navigation.style.position ='absolute';
                goBack.style.display='none';
                navigation.style.top = 210 + 'px';
            }
        })
        pyg.addEventListener('mouseenter', function(){
            secondMenu.style.display='block'
        });
        pyg.addEventListener('mouseleave', function(){
            secondMenu.style.display='none'
        });
        follow.addEventListener('mouseenter', function(){
            thirdMenu.style.display='block'
        });
        follow.addEventListener('mouseleave', function(){
            thirdMenu.style.display='none'
        });
        main_p.addEventListener('mouseenter' , function(){
            btn_l.style.display='block';
            btn_r.style.display='block';
        });
        main_p.addEventListener('mouseleave' , function(){
            btn_l.style.display='none';
            btn_r.style.display='none';
        });
        var ul = main_p.querySelector('ul');
        var ol = main_p.querySelector('.corust');
        var mainWidth = main_p.offsetWidth;
        for(var i = 0; i < ul.children.length; i++){
            var li = document.createElement('li');
            li.setAttribute('index',i)
            ol.appendChild(li);
            li.addEventListener('click', function(){
                for(var i = 0; i < ol.children.length; i++){
                    ol.children[i].className='';
                }
                this.className='active';
                var index = this.getAttribute('index');
                num = cicy = index;
                animate(ul, -index * mainWidth)
            })
        }
        ol.children[0].className='active';
        var first = ul.children[0].cloneNode(true);
        ul.appendChild(first);
        var num = 0;
        var cicy = 0;
        btn_r.addEventListener('click',function(){
            if(num == ul.children.length - 1){
                ul.style.left=0;
                num = 0 ;
            }
            num++;
            animate(ul, -num * mainWidth);
            cicy++;
            if(cicy == ol.children.length){
                cicy = 0;
            };
            cicyChange();
        });
        
        btn_l.addEventListener('click',function(){
            if(num == 0){
                num =  ul.children.length - 1;
                ul.style.left= num * mainWidth;
            };
            num--;
            animate(ul, -num * mainWidth);
            cicy--;
            if(cicy < 0){
                cicy = ol.children.length - 1;
            };  
            cicyChange();
});
    function cicyChange() {
        for(var i = 0; i < ol.children.length; i++){
            ol.children[i].className='';
        };
        ol.children[cicy].className='active';
    }
})
