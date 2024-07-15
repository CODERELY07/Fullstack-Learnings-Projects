const multiStepForm = document.querySelector('[data-multi-step]');

//we add [...] Spread operator to use array methods in the elements
const formSteps = [...multiStepForm.querySelectorAll('[data-step]')];

// find and get the current step 
//find index in the every data-step element that contains class list 'active'
let currentStep = formSteps.findIndex(step =>{
    return step.classList.contains("active");
})


//check if the current step is negatve value or less than 0
//we use this because when there is no active class the current step value will be -1
if(currentStep < 0){
    //set the currentStep to 0 to show the default step
    currentStep = 0;
    showCurremtStep();
}

//add eventListnter in mutlistepform
multiStepForm.addEventListener("click", e=>{
    //e.target is the element you click 
    //matches return true or false which check if the ellement has matches selector in our case is data attribute
    //we can also use class by using '.' or id '#'
    if(e.target.matches('[data-next]')){
        currentStep += 1;
    }else if(e.target.matches('[data-prev]')){
        currentStep -=1;
    }
    showCurremtStep()
    // console.log(currentStep)
})

// create function to showCurrentStep and function the multistepform
function showCurremtStep(){
    // forEach has two paramters the value and index
    formSteps.forEach((step,index) =>{
        // each step check if the index is equal to the current step then make it active
        step.classList.toggle("active", index === currentStep);
    });
}

