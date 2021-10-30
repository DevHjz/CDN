function watermark(t1,t2,t3){
    var space = 1;
    var columnExtra = 0;
    var maxWidth = document.documentElement.clientWidth;
    var maxHeight = document.documentElement.clientHeight;
    var intervalWidth = 320 * space;    //间隔宽度
    var intervalheight = 160 * space;   //间隔高度
    var rowNumber = (maxWidth - 40 -200) / intervalWidth + columnExtra;    //横向个数
    var coumnNumber = (maxHeight - 40-80) / intervalheight;   //纵向个数
    
    //默认设置
    var defaultSettings = {
        watermark_color: '#aaa', //水印字体颜色
        watermark_alpha: 0.3, //水印透明度
        watermark_fontsize: '16px', //水印字体大小
        watermark_font: '宋体', //水印字体
        watermark_width: 200, //水印宽度
        watermark_height: 80, //水印长度
        watermark_angle: 15, //水印倾斜度数
        watermark_offset: 100 //水印offset
    };
        
    var _temp = document.createDocumentFragment();
    var _waterDiv = document.createElement('div');
  //   _waterDiv.setAttribute("style","width: 100%; height: 100%; overflow: hidden; position: relative;") ;
  //   _waterDiv.style.cssText = "width: 100%; height: 100%; overflow: hidden; position: relative;";
    for(var i = 0; i < rowNumber; i++){
        for(var j = 0; j < coumnNumber; j++){
            var x = intervalWidth*i + 20;
            var y = intervalheight*j + 30;
            var mark_div = document.createElement('div');
            mark_div.id = 'mark_div' + i + j;
            mark_div.className = 'mark_div';
            ///三个节点
            var span0 = document.createElement('div');
            span0.appendChild(document.createTextNode(t1));
            var span1 = document.createElement('div');
            span1.appendChild(document.createTextNode(t2));
            var span2 = document.createElement('div');
            span2.appendChild(document.createTextNode(t3));
            mark_div.appendChild(span0);
            mark_div.appendChild(span1);
            mark_div.appendChild(span2);
            //设置水印div倾斜显示
            mark_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mark_div.style.visibility = "";
            mark_div.style.position = "absolute";
            mark_div.style.left = defaultSettings.watermark_offset + x + 'px';
            mark_div.style.top = y + 'px';
            mark_div.style.overflow = "hidden";
            mark_div.style.zIndex = "9999";
            mark_div.style.pointerEvents = 'none'; //pointer-events:none  让水印不阻止交互事件
            mark_div.style.opacity = defaultSettings.watermark_alpha;
            mark_div.style.fontSize = defaultSettings.watermark_fontsize;
            mark_div.style.fontFamily = defaultSettings.watermark_font;
            mark_div.style.color = defaultSettings.watermark_color;
            mark_div.style.textAlign = "center";
            mark_div.style.width = defaultSettings.watermark_width + 'px';
            mark_div.style.height = defaultSettings.watermark_height + 'px';
            mark_div.style.display = "block";
            
            _waterDiv.appendChild(mark_div);
        }
    }
    _temp.appendChild(_waterDiv);
    
    document.body.appendChild(_temp);
  }

function getNow() {
    var d = new Date();
    var year = d.getFullYear();
    var month = change(d.getMonth() + 1);
    var day = change(d.getDate());
    var hour = change(d.getHours());
    var minute = change(d.getMinutes());
    var second = change(d.getSeconds());

    function change(t) {
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
    }
    var time = year + '-' + month + '-' + day;
    return time;
}
