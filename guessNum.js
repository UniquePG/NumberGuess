const number = document.getElementById('number');

const btn = document.getElementById('check');

const e = document.getElementById('level');

const result = document.getElementById('result');

const chance = document.getElementById('chance');

let level;

let computerGuess;

e.addEventListener('change', () => {

    level = e.value;
    // console.log(level);

  let  i=0;

        //! Easy level
if(level == 'easy'){

    result.innerHTML = "";
    number.value = null;

    i =0;

    const level_desc = document.getElementById('level-desc');

    // const chance = document.getElementById('chance');

    chance.innerHTML = `${i}` + '/5';

    level_desc.innerHTML = "Guess the number b/w 1 to 10" 
    level_desc.style.color = 'blue';

    computerGuess = Math.floor(Math.random() * 10);
    
    
    // console.log("computer guess",computerGuess);
    
// let i =0; 


btn.addEventListener('click', () =>{
  
    if(i < 5){
        
        const userGuess = Number(number.value);
        
        // console.log(typeof userGuess);  
        
        if(userGuess === computerGuess){
            result.innerHTML = "Your guess is correct!🎉"
            result.style.color = 'green';
            alert("yehh! Win");
           
        }
        else if(userGuess < computerGuess){
            result.innerHTML = "Incorrect! <br> Your guess is Low, Please guess the bigger number";
        
            result.style.color = 'red';
           
        }
        else if(userGuess > computerGuess){
            result.innerHTML = "Incorrect! <br> Your guess is High, Please guess the smaller number";
        
            result.style.color = 'red'
        
        }
        else{
            result.innerHTML = "Please Guess only numeric value";
        }

        i++;
        chance.innerHTML = `${i}` + '/5';
       
        // console.log(i);
    }
    else{
        result.innerHTML = "Your limit is finished"
        result.style.color = "red";
    
        alert("Your limit has finished");
       }
    
    })

        // btn.addEventListener('click', Easylevel)

}

//! Medium level
else if(level == 'medium'){
    
    result.innerHTML = "";
    number.value = null;
    i=0;
    
    chance.innerHTML = `${i}` + '/3';

    const level_desc = document.getElementById('level-desc');

    level_desc.innerHTML = "Guess the number b/w 1 to 10" 
    level_desc.style.color = '#c9189a';


    computerGuess = Math.floor(Math.random() * 10);
    
    
    // console.log("computer guess",computerGuess);



    btn.addEventListener('click', () =>{
  
        if(i < 3){
            
            const userGuess = Number(number.value);
            
            // console.log(typeof userGuess);  
            
            if(userGuess === computerGuess){
                result.innerHTML = "Your guess is correct!🎉"
                result.style.color = 'green';
                alert("yehh! Win");
               
            }
            else if(userGuess < computerGuess){
                result.innerHTML = "Incorrect! <br> Your guess is Low, Please guess the bigger number";
            
                result.style.color = 'red';
               
            }
            else if(userGuess > computerGuess){
                result.innerHTML = "Incorrect! <br> Your guess is High, Please guess the smaller number";
            
                result.style.color = 'red'
            
            }
            else{
                result.innerHTML = "Please Guess only numeric value";
            }
        
            i++;
            // const chance = document.getElementById('chance');
            chance.innerHTML = `${i}` + '/3';
           
            console.log(i);
        }
        else{
            result.innerHTML = "Your limit is finished"
            result.style.color = "red";
        
           alert("Your limit has finished");
        }
        
    })
    // btn.addEventListener('click', Mediumlevel)
}

        //! Hard level

else if(level == 'hard'){
        
        result.innerHTML = "";
        number.value = null;
        i =0;

        chance.innerHTML = `${i}` + '/5';

        const level_desc = document.getElementById('level-desc');

    level_desc.innerHTML = "Guess the number b/w 1 to 20" 
    level_desc.style.color = 'red';

    computerGuess = Math.floor(Math.random() * 20);
    
    
    // console.log("computer guess",computerGuess);

    btn.addEventListener('click', () =>{
  
        if(i < 5){
            
            const userGuess = Number(number.value);
            
            // console.log(typeof userGuess);  
            
            if(userGuess === computerGuess){
                result.innerHTML = "Your guess is correct!🎉"
                result.style.color = 'green';
                alert("yehh! Win");
                
               
            }
            else if(userGuess < computerGuess){
                result.innerHTML = "Incorrect! <br> Your guess is Low, Please guess the bigger number";
            
                result.style.color = 'red';
               
            }
            else if(userGuess > computerGuess){
                result.innerHTML = "Incorrect! <br> Your guess is High, Please guess the smaller number";
            
                result.style.color = 'red'
            
            }
            else{
                result.innerHTML = "Please Guess only numeric value";
            }
        
            i++;
            // const chance = document.getElementById('chance');
            chance.innerHTML = `${i}` + '/5';
           
            // console.log(i);
        }
        else{
            result.innerHTML = "Your limit is finished"
            result.style.color = "red";
        
           alert("Your limit has finished");
        }
        
    })

    // btn.addEventListener('click', Hardlevel)
}

})


