function gen_level_one(num) {
	time_all = num * 1 * 60;
	app.count = num;
	app.itemcount = 2;
	app.isadd = true;
	app.issub = true;
	app.ismul = false;
	app.isdiv = false;
	app.doGen();
}

function gen_level_two(num) {
	time_all = num * 1 * 60;
	app.count = num;
	app.itemcount = 3;
	app.isadd = true;
	app.issub = true;
	app.ismul = false;
	app.isdiv = false;
	app.doGen();
}

function gen_level_three(num) {
	time_all = num * 2 * 60;
	app.count = num;
	app.itemcount = 2;
	app.isadd = false;
	app.issub = false;
	app.ismul = true;
	app.isdiv = true;
	app.doGen();
}

function gen_level_four(num) {
	time_all = num * 2 * 60;
	app.count = num;
	app.itemcount = 3;
	app.isadd = false;
	app.issub = false;
	app.ismul = true;
	app.isdiv = true;
	app.doGen();
}

function gen_level_five(num) {
	time_all = num * 3 * 60;
	app.count = num;
	app.itemcount = 3;
	app.isadd = true;
	app.issub = true;
	app.ismul = true;
	app.isdiv = true;
	app.doGen();
}

function gen_level_six(num) {
	time_all = num * 3 * 60;
	app.count = num;
	app.itemcount = 4;
	app.isadd = true;
	app.issub = true;
	app.ismul = true;
	app.isdiv = true;
	sleep(5).then(() => {
		app.doGen();
	})
}

function sleep(time) { //es6增加的异步操作，此处需要异步来完成睡眠
	return new Promise((resolve) => setTimeout(resolve, time));
}


function time_show() {
	timing = setInterval("showTime()", 1000); // 设置定时器timing，每秒刷新调用一次函数showTime()
	maxtime = time_all;
}
function showTime() {
	if(isvisual === true){
		clearInterval(timing);
	}
	if (maxtime > 0) {
		maxtime--;
		// minutes,seconds为局部变量
		var minutes = Math.floor(maxtime / 60); // 计算出分钟
		var seconds = maxtime % 60; // 计算出秒
		// 时间为个位数时，补零
		if (minutes < 10) {
			minutes = "0" + minutes
		};
		if (seconds < 10) {
			seconds = "0" + seconds
		};
		document.getElementById('timmer').innerHTML = "距离本场考试结束还有" + minutes + "分" + seconds + "秒!";
	} else {
		clearInterval(timing); // 清除定时器timing
		alert("时间到，考试结束!");
	}
}


gen_level_one(24);
time_show()