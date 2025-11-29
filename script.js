function mincost(arr)
{ 
//write your code here
// return the min cost
	 if (arr.length <= 1) return 0;
  let cost = 0;
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    let first = arr[0];
    let second = arr[1];
    let newRope = first + second;
    cost += newRope;
    arr.splice(0, 2, newRope);
  }
  return cost;
  
}

module.exports=mincost;
