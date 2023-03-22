function get_result() {
	var user_inputs = []
	$("input[name='results']").each(function() {
		user_inputs.push(this.value);
	});
	let total = user_inputs.length;
	// console.log(user_inputs.length);
	var right_num = 0;
	for (let j = 0; j < total; j++) { //循环length次
	// console.log(user_inputs[j], (ans_formula[j]["ans"]))
		if (user_inputs[j] == (ans_formula[j]["ans"]))
			right_num += 1;
	}
	console.log("score score:   ", right_num)
	localStorage.setItem("bing",JSON.stringify({"right":right_num,"wrong":total - right_num}));
	localStorage.setItem("zhexian",JSON.stringify({"jia":app.report.addcnt,"jian":app.report.subcnt}));
}
