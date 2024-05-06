// GETUI 
const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel)=>{
    // console.log(panel);
    panel.addEventListener('click',function(e){
        // console.log(e.target);

        // design1 
        // e.target.classList.toggle("active");
        removeactive();

        panel.classList.add("active");


    });
});

function removeactive(){
    panels.forEach((panel)=>{
        // console.log(panel);

        panel.classList.remove('active');
    });
}