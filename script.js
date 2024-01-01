const textarea = document.querySelector("#textarea");
const totalCount = document.querySelector(".totalcount");
const remainingCount = document.querySelector(".remainingcount");

textarea.addEventListener("input",()=>{
    const total_val = textarea.value.length;
    totalCount.innerHTML = total_val;
    remainingCount.innerHTML = 150 - total_val;

    if(total_val === 150){
        textarea.disabled = true;
    }
});