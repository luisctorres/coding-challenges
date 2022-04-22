//[1,2,4,6], [3,4,5,7,8], 5 -> [1,2,3,4,5] 
//[1], [3,4,5,7,8], 3-> [1,3,4]
//[],[] -> false
//always ascending

function mergeArrays(a, b, num) {

	if (a.length == 0 && b.length == 0) {
    	return false;
  	} 
  	
    let c = []
	let count = 0
	let length = Math.min(a.length + b.length, num) // (this value or num)
	let LeftPointer = 0 
	let RightPointer = 0

	while(count < length){
		if(a[LeftPointer] < b[RightPointer]){ 
			c.push(a[LeftPointer])
			LeftPointer++
			count++
		}else{ 
			c.push(b[RightPointer])
			RightPointer++
			count++
		}
	}

	return c 

}

console.log(mergeArrays([2,4,6,8], [1,3,5,7,9], 20))