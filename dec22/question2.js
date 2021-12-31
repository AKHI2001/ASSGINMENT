var ch=prompt("enter a character"); 
      if(ch=='a' || ch=='e'|| ch=='i' || ch=='o'|| ch=='u')
          document.write("<b>" +ch+  "</b>"  +  "is a vowel");
        else if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
          document.write("<b>"  +ch+  "</b>"  +  "is vowel");
        else
          document.write("<b>" +ch+ "</b>" +  "is consonant");