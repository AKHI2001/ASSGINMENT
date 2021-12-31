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
          alert("var n: is prime"); 
        }   
        else
        {
          alert("var n:is not prime"); 
        } 
        alert(n);