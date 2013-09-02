$(function (){	
	//首页焦点图
	var $div=$('aside .container');
	var $ul=$('aside ul');
	var $li=$('aside li');
	var $prev=$('#prev');
	var $next=$('#next');
	var $a=$('aside .move');
	$ul.append($li.clone());
	$ul.width(($li.width()+10)*$('aside li').length);		
	var timer=null;
	
	$prev.mouseover(function (){
		pnScroll(-5);
	});
	$next.mouseover(function (){
		pnScroll(5);
	});
	$a.mouseout(function (){
		clearInterval(timer);
	});
	function pnScroll(speed){
		timer=setInterval(function (){
			$ul.css('left',$ul.position().left+speed+'px');
			if($ul.position().left<-$ul.width()/2){
				$ul.css('left',0);
			}else if($ul.position().left>0){
				$ul.css('left',-$ul.width()/2);
			}
		},30);
	}
	
	//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.541961,39.971038);//定义一个中心点坐标
        map.centerAndZoom(point,10);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_LARGE});
	map.addControl(ctrl_nav);
                //向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
	map.addControl(ctrl_sca);
    }
    
    
    initMap();//创建和初始化地图
});