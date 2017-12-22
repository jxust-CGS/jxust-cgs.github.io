/*
*作者木木
*
*http://www.dao-gu.com
*/
//右键菜单
jQuery(document).ready(function ($) {
    $("#xiaoren").mousedown(function (e) {
        if(e.which==3){
        showMessage("秘密通道:<br /> "+
		" <a href=\"http://www.chenguangsong.online/\" title=\"首页\">首页</a> "+
		" <a href=\"http://www.chenguangsong.online/links\" title=\"友情链接\">友情链接</a> "+
		" <a href=\"http://www.chenguangsong.online/atom.xml\" title=\"RSS\">RSS</a>  ",10000);
}
});
$("#xiaoren").bind("contextmenu", function(e) {
    return false;
});
});

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    //$(".lufei").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".lufei").mouseover(function () {
       $(".lufei").fadeTo("300", 0.3);
       msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！","不要点我，我会生气的！","你再点我，我叫主人拉黑你，哼！","你再点我，我就不跟你玩儿了！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".lufei").mouseout(function () {
        $(".lufei").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function ($) {
	if(1==Math.floor(Math.random() * 2)){
		var now = (new Date()).getHours();
		if (now > 0 && now <= 6) {
			showMessage(' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
		} else if (now > 6 && now <= 9) {
			showMessage(' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
		} else if (now > 11 && now <= 14) {
			showMessage(' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！', 6000);
		} else if (now > 14 && now <= 18) {
			showMessage(' 下午的时光真难熬！还好有你在！', 6000);
		} else if (now > 18 && now <= 20) {
			showMessage(' 我要开始加班了，你呢？', 6000);
		} else {
			showMessage(' 我要开始卖萌了！', 6000);
		}
	}else{
		showMessage(' 欢迎来到“极光轨迹”阅读，偶嘞哇凯Zi磕哒   ^_^ ', 6000);
	}
	
    $(".xiaoren").animate({
        top: $(".xiaoren").offset().top + 500,
		left: 160
        //left: document.body.offsetWidth - 160
    },
	{
	    queue: false,
	    duration: 1000
	});
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('h3 a').click(function () {//标题被点击时
        showMessage('正在用吃奶的劲加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》请稍候');
    });
    $('h3 a').mouseover(function () {
		msgs=['要看看《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》这篇文章么？'
		,'要瞅一眼《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》篇文章吧！'
		,'看看《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》里面究竟写了啥？'
		,'对这篇《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》感兴趣？']
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
	$('.tags').mouseover(function () {
		msgs=['你不瞅一眼带有《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》这一标签的其它文章吗？'
		,'再瞅瞅《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》标签的文章吧！'
		,'带有《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》标签的文章还有很多哟！'
		,'查看带有《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》标签的文章列表！'
		,'你猜猜带有《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》标签的文章会有几篇？']
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
	$('.categories').mouseover(function () {
		msgs=['再看看《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》分类的文章吧！'
		,'再瞅瞅《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》分类的文章吧！'
		,'《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》分类的文章还有很多哟！'
		,'查看《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》分类的文章列表！'
		,'你猜猜《<span style=\"color:#0099cc;\">' + $(this).text() + '</span>》分类的文章会有几篇？']
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
	$('.readmore').mouseover(function () {
		msgs=["对这篇文章有兴趣？","想看就赶紧点开","你不点一下吗？","就知道你想看"]
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
    $('.pagination .pull-left').mouseover(function(){
		msgs=["要翻到上一页吗?","还是想回到上一页？","上一页写了什么来着？","还是回到上一页吧！"]
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
    $('.pagination .pull-right').mouseover(function(){
		msgs=["要翻到下一页吗?","下一页更精彩！","下一页会写着什么？","下一页肯定有你想看的","下一页给你好看！"]
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
	$('.icon-github').mouseover(function(){
		msgs=["去我的github逛逛？","github一个神奇的网站","你猜github上都有啥？","我不会告诉你，点一下就进了我的github主页的！","你有注册过github吗？"]
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
	$('.icon-sina-weibo').mouseover(function(){
		msgs=["欢迎关注我的新浪微博？","我的粉丝好少哟！","你要关注我呀！","其实我的微博没什么内容","你也玩微博？"]
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
    $('#intro > div > div.col-md-8.col-md-offset-2 > p > a').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.textareawrap').mouseover(function () {
        showMessage('看完了文章说点什么吧！');
    });
    $('#postsubmit').mouseover(function () {
        showMessage('确认提交了么？');
    });
    $('.logo').mouseover(function () {
        msgs=["点它就可以回到首页了","回到首页","这是哪呀？返回首页","去首页看看","首页是否会有惊喜呢？"]
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
	$('.animsition-link').mouseover(function () {
        msgs=["点它就可以回到首页了","回到首页","这是哪呀？返回首页","去首页看看","首页是否会有惊喜呢？"]
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
	$('#wumiiMainNav > a:nth-child(2)').mouseover(function () {
        msgs=["看看其他文章还有那些有意思的评论","回到首页","这是哪呀？返回首页","去首页看看","首页是否会有惊喜呢？"]
        showMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    });
	
});


//无聊讲点什么
jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = ["爱我，你就点我呀！", "陪我聊天吧！", "好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~","生活不止眼前的苟且，还有诗与远方的田野...","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”","我要睡觉了别打扰我","是不是有我的陪伴读文章有变得好玩了！","你知道你会喜欢我","你看到了什么？","主人好久都没有来了！","我就只会自娱自乐...","你要常来看我哟","我会想念你的！","卖个萌~~","你最近在学习什么内容呀","来我们交个朋友吧","你gg还是mm呀？","你说是java是不是最好的程序语言？","我在上海，你在哪呀？"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 5000);
    }, 10000);
});

//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
        msgs = ["你抓不到我！", "乾坤大挪移！", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~","我轻轻地来，又轻轻的走 ~","来逗我玩儿呀！","我打扰看文章了吗，Oh，sorry！","看我凌波微步！"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".xiaoren").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
        },
			{
			    duration: 2000,
			    complete: showMessage(msgs[i])
			});
    }, 45000);
});

//评论资料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
        $(".xiaoren").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#email").click(function () {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        $(".xiaoren").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#url").click(function () {

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        $(".xiaoren").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    $("#comment").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        $(".xiaoren").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

var xiaoren_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var f = $(".xiaoren").offset().top;
    $(window).scroll(function () {
        $(".xiaoren").animate({
            top: $(window).scrollTop() + f +300
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".lufei").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".xiaoren").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
            },
			{
			    duration: 500,
			    complete: showMessage(msgs[i])
			});
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    $("#xiaoren").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#xiaoren").css("left"));
        _y = e.pageY - parseInt($("#xiaoren").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#xiaoren').width();
            var dy = $(document).height() - $('#xiaoren').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#xiaoren").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});