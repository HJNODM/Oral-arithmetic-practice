function setPage() {
	var str = '';
	var num = 0;
	$.getJSON("test.json",function(aarr) {
			var arr = aarr['test']
			console.log(arr);
			arr.forEach(function(item, key) {
				num += 1;
				if (key % 2 === 0) {
					str += `
						    <tr style="background-color: aliceblue;">
						        <td style="vertical-align: middle;font-size:20px">${item.userName}</td>
						        <td style="vertical-align: middle;font-size:20px">${item.rightNum}</td>
						        <td style="vertical-align: middle;font-size:20px">${item.totalNum}</td>
						        <td style="vertical-align: middle;font-size:20px">${item.rightRatio}</td>
						        <td style="vertical-align: middle;font-size:20px">${item.rank}</td> 
						    </tr>
						`;
					console.log('str', str);
				} else {
					str += `
						    <tr >
						        <td style="vertical-align: middle;font-size:20px">${item.userName}</td>
						        <td style="vertical-align: middle;font-size:20px">${item.rightNum}</td>
						        <td style="vertical-align: middle;font-size:20px">${item.totalNum}</td>
						        <td style="vertical-align: middle;font-size:20px">${item.rightRatio}</td>
						        <td style="vertical-align: middle;font-size:20px">${item.rank}</td>
						    </tr>
						`;
				}


			})
			for (; num < 10; num++) {
				if (num % 2 == 0) {
					str += `
				 	    <tr style="background-color: aliceblue;">
				 	        <td style="vertical-align: middle;font-size:20px">-</td>
				 	        <td style="vertical-align: middle;font-size:20px">-</td>
				 	        <td style="vertical-align: middle;font-size:20px">-</td>
				 	        <td style="vertical-align: middle;font-size:20px">-</td>
				 	        <td style="vertical-align: middle;font-size:20px">-</td> 
				 	    </tr>
				 	`;
				} else {
					str += `
				 	    <tr >
				 	        <td style="vertical-align: middle;font-size:20px">-</td>
				 	        <td style="vertical-align: middle;font-size:20px">-</td>
				 	        <td style="vertical-align: middle;font-size:20px">-</td>
				 	        <td style="vertical-align: middle;font-size:20px">-</td>
				 	        <td style="vertical-align: middle;font-size:20px">-</td> 
				 	    </tr>
				 	`;
				}
			}
			var oTbody = document.querySelector('tbody');
			oTbody.innerHTML = str;
		})
	};

	// $.getJSON("http://49.232.143.117:8080/pic/test.json", function(aarr) {
	// 	var arr=aarr['test']
	// 	console.log(arr);
	// 	arr.forEach(function(item, key) {
	// 		num += 1;
	// 		if (key % 2 === 0) {
	// 			str += `
	// 					    <tr style="background-color: aliceblue;">
	// 					        <td style="vertical-align: middle;font-size:20px">${item.userName}</td>
	// 					        <td style="vertical-align: middle;font-size:20px">${item.rightNum}</td>
	// 					        <td style="vertical-align: middle;font-size:20px">${item.totalNum}</td>
	// 					        <td style="vertical-align: middle;font-size:20px">${item.rightRatio}</td>
	// 					        <td style="vertical-align: middle;font-size:20px">${item.rank}</td> 
	// 					    </tr>
	// 					`;
	// 						console.log('str', str);
	// 		} else {
	// 			str += `
	// 					    <tr >
	// 					        <td style="vertical-align: middle;font-size:20px">${item.userName}</td>
	// 					        <td style="vertical-align: middle;font-size:20px">${item.rightNum}</td>
	// 					        <td style="vertical-align: middle;font-size:20px">${item.totalNum}</td>
	// 					        <td style="vertical-align: middle;font-size:20px">${item.rightRatio}</td>
	// 					        <td style="vertical-align: middle;font-size:20px">${item.rank}</td>
	// 					    </tr>
	// 					`;
	// 		}


	// 	})
	// 	for (; num < 10; num++) {
	// 		if (num % 2 == 0) {
	// 			str += `
	// 			 	    <tr style="background-color: aliceblue;">
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td>
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td>
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td>
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td>
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td> 
	// 			 	    </tr>
	// 			 	`;
	// 		} else {
	// 			str += `
	// 			 	    <tr >
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td>
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td>
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td>
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td>
	// 			 	        <td style="vertical-align: middle;font-size:20px">-</td> 
	// 			 	    </tr>
	// 			 	`;
	// 		}
	// 	}
	// 	var oTbody = document.querySelector('tbody');
	// 	oTbody.innerHTML = str;
	// })
	// // 循环遍历 数组 每一个数组单元存储数据 生成一个对应的 tr>td
	// // item 就是 存储数据的对象
	// key 存储 对象的索引下标



	// 将字符串写入到标签对象中

setPage();
