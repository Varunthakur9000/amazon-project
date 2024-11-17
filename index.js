
    
       let startslide = 0;
        const slidewidth = 100;
        const left = document.getElementById('btn1');
        const right = document.getElementById("btn2");
        const allslide = document.querySelectorAll(".img-list");
        const slidelength = allslide.length-1;

         left.addEventListener("click",handleleftbutton)
        
         function handleleftbutton(){
            startslide -= slidewidth
            if(startslide>=-500 && startslide<=0){
                allslide.forEach(element => {
                    element.style.transform = `translatex(${startslide}%)`;
            });
           };
        };
        right.addEventListener("click",handlerightbutton)
        function handlerightbutton(){
           startslide += slidewidth
            if(startslide<=0 && startslide>=-500){
                allslide.forEach(element => {
                    element.style.transform = `translatex(${startslide}%)`;
            });
            };
        
    };
     //  auto 
     function autoslide(){
        if(startslide>=-500 && startslide<=0){
        handleleftbutton()}
        else{
            startslide = 0 
        }
     };
    setInterval(autoslide,2000);
    //
   /* console.log(slidelength);
    function update() {
        allslide.forEach(element => {
            element.style.transform = `translatex(${startslide}%)`;
    });
        
     
    }
    
    left.addEventListener("click",()=>{
        startslide -= slidewidth
        if(startslide>=-500 && startslide<=0){
        update();
        console.log(startslide)};
    });
    right.addEventListener("click",()=>{
       startslide += slidewidth
        if(startslide<=0 && startslide>=-500){
        update();
        console.log(startslide)};*/
    //  IDV  
   