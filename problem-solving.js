




function rotateLeft(value,a){
	let r=a
	let n=value.length
	let x=r%n;
	let newArray=[]
	if(x===0){
		return console.log(value)
	}
	else{
		for(let i=r;i<n;i++){
			newArray.push(value[i])
			
		}
		for(let i=0;i<r;i++){
			newArray.push(value[i])
				
			
		}
		return console.log(newArray)

	}

}
const setOfNumbers=[1,2,3,4,5,6]

rotateLeft(setOfNumbers,2)