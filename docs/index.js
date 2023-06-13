click = 1;

function changeContent(){
    document.getElementById("instruction").innerHTML = ""
    const content = document.getElementById("content");
    let count = click++;
    console.log(count);
    
    if(count == 1){
        content.innerHTML = "1. Manual Memory Management with pointers and malloc and delete<br> <br> <img class='images' srcset='C++Example1.png 2500w'> <br>"
    } else if(count == 2){
        content.innerHTML = "2. Create high performace Object Oriented Programs with methods <br> <br> <img src='C++OOPExample.png'> <br>"
    } else if(count == 3){
        content.innerHTML = "3. Compiled and checked language, ensuring program safety along with zero-tolerances <br> <br> <img src='segfault.png'> <br>"
    } else if(count == 4){
        content.innerHTML = "4. Strongly typed, and great for directly contacting the hardware and building embedded systems <br> <br> <img src='data-types.png'>"
    } else if(count == 5){
        content.innerHTML = "5. Low level programming is great for knowing more about other languages so you can be slowly introduced into easier languages"
    } else if(count >= 6){
        click = 2;
        content.innerHTML = "1. Manual Memory Management with pointers and malloc and delete<br> <br> <img class='images' srcset='C++Example1.png 2500w'> <br>"
    }
}

function showAll(){
    click = 1;
    document.getElementById("instruction").innerHTML = ""
    const content = document.getElementById("content");
    content.innerHTML = "1. Manual Memory Management with pointers and malloc and delete<br> <br> 2. Create high performace Object Oriented Programs with methods <br> <br> 3. Compiled and checked language, ensuring program safety along with zero-tolerances <br> <br> 4. Strongly typed, and great for directly contacting the hardware and building embedded systems <br> <br> 5. Low level programming is great for knowing more about other languages so you can be slowly introduced into easier languages"
    console.log("lol");
}