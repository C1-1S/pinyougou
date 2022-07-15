 //获取类.div1节点 div;设置鼠标经过节点mouseover
 $('#my_py').mouseover(function() {
    $('.second_menu').css('display', 'block');

});
//获取类.div1节点 div;设置鼠标离开节点mouseout
$('#my_py').mouseout(function() {
    $('.second_menu').css('display', 'none');
})
