function notInAlphabeticalOrder() {
	let str = "abcd111fjq222p5555n"

	const FORMAT = "abcdefghijklmnopqrstuvwxyz";
  
  let lastValidChar = 0;
  
	for (let i = 1; i < str.length; i++) {

		if (FORMAT.indexOf(str[i]) == -1) {
      continue;
    }
    
    if (FORMAT.indexOf(str[i]) > FORMAT.indexOf(str[lastValidChar])) {
			console.log(str[i], str[lastValidChar])
			lastValidChar = i;
      continue;
		} else {
			console.log(lastValidChar);
			return;
		}

	}
	
	console.log("valid string");
	
}

notInAlphabeticalOrder();
