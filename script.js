

var selBtn_b = document.querySelector(".beginner button");
var selBtn_i = document.querySelector(".intermediate button");
var selBtn_a = document.querySelector(".advanced button");

selBtn_b.addEventListener("click", function(){

    if(selBtn_b.innerHTML == "Choose Plan"){
        selBtn_b.innerHTML = "Selected";
        
        
    }else{
        selBtn_b.innerHTML = "Choose Plan";
        
        
    }
    
    selBtn_b.classList.toggle("selectedPlan");
    
    
    
    
});


selBtn_i.addEventListener("click", function(){

    if(selBtn_i.innerHTML == "Choose Plan"){
        selBtn_i.innerHTML = "Selected";
        
        
    }else{
        selBtn_i.innerHTML = "Choose Plan";
        
        
    }
    
    selBtn_i.classList.toggle("selectedPlan");
    
    
});


selBtn_a.addEventListener("click", function(){

    if(selBtn_a.innerHTML == "Choose Plan"){
        selBtn_a.innerHTML = "Selected";
        
        
    }else{
        selBtn_a.innerHTML = "Choose Plan";
    }
    
    selBtn_a.classList.toggle("selectedPlan");
    
});

var chosen_Plan = document.querySelector(".sendMail button");
chosen_Plan.addEventListener("click", function(){
    beginnerPrompt();
});

function beginnerPrompt() {
    
    var plan_Beginner = document.querySelector(".beginner button").innerHTML;
    var plan_Intermediate = document.querySelector(".intermediate button").innerHTML;
    var plan_Advanced = document.querySelector(".advanced button").innerHTML;

    
        if (plan_Beginner == "Selected") {
            if(confirm("Are you sure to take up the BEGINNER level training?")){
                window.open('mailto:getskilledwitharavinth@gmail.com?subject=Online Training - Java&body=I wish to takup BEGINNER level training.');
            }else {alert("Please take you time!")}
            
        }else if(plan_Intermediate == "Selected"){
            if(confirm("Are you sure to take up the INTERMEDIATE level training?")){
                window.open('mailto:getskilledwitharavinth@gmail.com?subject=Online Training - Java&body=I wish to takup INTERMEDIATE level training.');
            }else {alert("Please take you time!")}
        }else if(plan_Advanced == "Selected"){
            if(confirm("Are you sure to take up the ADVANCED level training?")){
                window.open('mailto:getskilledwitharavinth@gmail.com?subject=Online Training - Java&body=I wish to takup ADVANCED level training.');
            }else {alert("Please take you time!")}
        }else{
            alert("Please choose atleast one level!");
        }

        
        
}

//For Modal popups

var beginnerSyllabus = document.querySelector(".beginner a");
beginnerSyllabus.addEventListener("click", function(){
    //alert("sda");

document.getElementById("beginnerSyllabus").style.display = "block";





});

var advancedSyllabus = document.querySelector(".intermediate a");
    advancedSyllabus.addEventListener("click", function(){
        //alert("sda");
    
    document.getElementById("intermediateSyllabus").style.display = "block";
    




    });

var advancedSyllabus = document.querySelector(".advanced a");
    advancedSyllabus.addEventListener("click", function(){
        //alert("sda");
    
    document.getElementById("advancedSyllabus").style.display = "block";
    




    });

var modalClose = document.querySelector("#beginnerSyllabus .close");
    modalClose.addEventListener("click", function(){
    document.getElementById("beginnerSyllabus").style.display = "none";
    });
var modalClose = document.querySelector("#intermediateSyllabus .close");
    modalClose.addEventListener("click", function(){
    document.getElementById("intermediateSyllabus").style.display = "none";
    });
var modalClose = document.querySelector("#advancedSyllabus .close");
    modalClose.addEventListener("click", function(){
    document.getElementById("advancedSyllabus").style.display = "none";
    });


    


