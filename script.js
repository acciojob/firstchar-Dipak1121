function firstChar(text) {
  // your code here
	let arr = text.split(" ");
	for ( let i = 0; i < arr.length; i++ ){
		if(arr[i] != ""){
			return arr[i][0];
		}
	}
	return "";
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
