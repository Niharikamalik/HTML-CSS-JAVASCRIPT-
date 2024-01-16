const colr = document.getElementById("color")
        document.getElementById("mybtn").onclick = displaydate;
        //onclick
        function displaydate(){
            const a = colr.value;
            // createElement()
            const para = document.createElement("p");
            para.innerText="element is created";
            document.body.appendChild(para);
            // display date
            document.getElementById("demo").innerHTML = Date();
            // change backgroud color 
            document.body.style.backgroundColor = a;
        }
        // oninput
        function uppercase(){
          const x = document.getElementById("color");
           x.value = x.value.toUpperCase();
        }
        //onchange
        function uppercase2(){
            const a = document.getElementById("onchng");
            a.value = a.value.toUpperCase();
        }
        //OnMouseOver
        function MouOver(obj){
            obj.innerHTML = "thank you"
        }
        // onMouseOut
        function MouOut(obj){
            obj.innerHTML="Mouse Over me"
        }
        // onMouseDown
        function mDown(obj){
            obj.innerHTML = "release Me"
            obj.style.backgroundColor = "red"
        }
        //onMouseUp
        function mUp(obj){
            obj.innerHTML = "thank you"
        }
        // onload 
        function Mymsg(){
                alert("onload event")
        }
        //onfocus
        function myFunction(x) {
            x.style.background = "yellow";
          }