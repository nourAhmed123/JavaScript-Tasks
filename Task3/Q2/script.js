
var narr=[];
var z;
var sum=0;

while(z!=0 && sum<=100){
 
    z=prompt("enter the number");
    if(isNaN(z))
    {
        alert("please enter a number");
    }
    else
    narr.push(z);
    
for(var j = 0; j< narr.length; j++)     
{   
    sum += +narr[j];   
}  

}
alert("sum="+sum+"");




