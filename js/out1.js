function exportCsv(obj){
            var title = obj.title;
            var titleForKey = Object.keys(obj.data[0]);
            var data = obj.data;
            var str = [];
            str.push(obj.title.join(",")+"\n");
            for(var i=0;i<data.length;i++){
                var temp = [];
                for(var j=0;j<titleForKey.length;j++){
                    temp.push(data[i][titleForKey[j]]);
             }
             str.push(temp.join(",")+"\n");
         }
		 var blob = new Blob(['\uFEFF' + str.join('')], {
			type: 'text/plain;charset=utf-8',
		});
         var downloadLink = document.createElement("a");
         downloadLink.href = URL.createObjectURL(blob);
         downloadLink.download = "test.csv"; 
         downloadLink.click();
      }