
function flatArray(){
	console.log("Hello Flat inside flatArray");
	let inputValue = document.getElementById("input").value
	let inputArray = [...JSON.parse(inputValue)];
	
	var x = document.getElementById('output'); 
    x.value = JSON.stringify(flatttenArray(inputArray)); 

}


function flatttenArray(arr){
	let flattenedArray = [];
	function flatten(subArr){
		for(let i of subArr){
			if(Array.isArray(i)){
				flatten(i);
				continue;
			}
			flattenedArray.push(i);
		}
	}

	flatten(arr);
	return flattenedArray;
}