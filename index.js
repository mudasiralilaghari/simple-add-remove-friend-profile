let btn = document.querySelector("#btn");
let isStatus = document.querySelector(".heading");
let head1 = 0;
btn.addEventListener("click", () => {
  if (head1 === 0) {
    isStatus.innerHTML = "Friend";
     isStatus.style.color = 'red'
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = 'green'
   head1 = 1
   
    
    
  }else{
    btn.innerHTML = "Add friend";
    isStatus.style.color = 'green'
    isStatus.innerHTML = "Stranger";
    head1 = 0
    btn.style.backgroundColor = 'cornflowerblue'
  }
});
