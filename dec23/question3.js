var n=prompt("enter number for checking");
var count=0;
for(var i=1;i<=n;i++)
{
  if(n%i==0)
  {
     count++;
     
   }
}
if(count==2)
{
  alert(n+ "is prime");  
}   
else
{
  alert(n+ "is not prime");
}