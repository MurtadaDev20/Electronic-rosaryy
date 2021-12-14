let myClick = document.getElementById("btn");
let myCount = document.getElementById("con");
let myOpen  = document.getElementById("open");
let myZahra = document.getElementById("zahra");
let myAllah = document.getElementById("allah");
let background = document.getElementById("backgr");
let buttonAgen = document.getElementById("butnEnd");

    myOpen.onclick = function () {

        
        myOpen.classList.add("active")
        myZahra.classList.remove("active")
    
        myClick.onclick = function() {

            myCount.innerHTML = parseInt(myCount.innerHTML) + 1;
        }
    myCount.innerHTML = 0;
    myAllah.innerHTML=" "
    console.log
}

    myZahra.onclick = function () {
    
        myZahra.classList.add("active")
        myOpen.classList.remove("active")
        myAllah.innerHTML=" الله اكبر"
    

        myClick.onclick = function() {
        
            myCount.innerHTML = parseInt(myCount.innerHTML) + 1;
            let  countAct = myCount.innerHTML;

            if(myCount.innerHTML == 34) {
                    myAllah.innerHTML="الحمد لله"
            
                }else if (myCount.innerHTML == 68){
                    myAllah.innerHTML=" سبحان الله"
                }else if (parseInt(countAct) == 102) {
                    myCount.innerHTML = 0;
                    myAllah.innerHTML="الله اكبر";
                    background.style.display="block";
                    buttonAgen.onclick = function() {
                        background.style.display="none";
                    }
                }
            
        
        
            
        
        } 
        myCount.innerHTML = 0;
}

