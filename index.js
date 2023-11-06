
let string =" ";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) => {
         if(e.target.innerHTML == "="){
            string = eval(string);
            document.getElementById("input").value = string;
         }
         else if(e.target.innerHTML == "AC"){
            string = " ";
            document.getElementById("input").value = string;
         }
         else if(e.target.innerHTML == "/"){
          if(string.substr(-1) == "+"){
                string = string.replace("+","/");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "-"){
                string = string.replace("-","/");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "*"){
                string = string.replace("*","/");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "/"){
                string = string.replace("/","/");
                 document.getElementById("input").value = string;
            }
            else if (string == " "){
                document.getElementById("input").value =" ";
                alert("pleasse enter a value first!");
            }
            else{
                string +="/"
                document.getElementById("input").value = string;
            }  
         }
         else if(e.target.innerHTML == "+"){
            if(string.substr(-1) == "+"){
                string = string.replace("+","+");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "-"){
                string = string.replace("-","+");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "*"){
                string = string.replace("*","+");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "/"){
                string = string.replace("/","+");
                 document.getElementById("input").value = string;
            }
            else if (string == " "){
                document.getElementById("input").value =" ";
                alert("pleasse enter a value first!");
            }
            else{
                string +="+"
                document.getElementById("input").value = string;
            }
         }
         else if(e.target.innerHTML == "*"){
            if(string.substr(-1) == "+"){
                string = string.replace("+","*");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "-"){
                string = string.replace("-","*");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "*"){
                string = string.replace("*","*");
                 document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "/"){
                string = string.replace("/","*");
                 document.getElementById("input").value = string;
            }
            else if (string == " "){
                document.getElementById("input").value =" ";
                alert("pleasse enter a value first!");
            }
            else{
                string +="*"
                document.getElementById("input").value = string;
            }
         }
         else if(e.target.innerHTML == "-"){
            if(string.substr(-1) == "+"){
                string = string.replace("+","-");
                document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "-"){
                string = string.replace("-","-");
                document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "*"){
                string = string.replace("*","-");
                document.getElementById("input").value = string;
            }
            else if(string.substr(-1) == "/"){
                string = string.replace("/","-");
                document.getElementById("input").value = string;
            }
            else if (string == " "){
                document.getElementById("input").value =" ";
                alert("pleasse enter a value first!");
            }
            else{
                string +="-"
                document.getElementById("input").value = string;
            }
         }
         else{
        console.log(e.target)
        string = string + e.target.innerHTML;
            document.getElementById("input").value = string;
             }
    })
})