const raining = false;

const cold = false;

const temperature = -51;

if(raining){
  console.log("Don't forget your unbrella!");  
}

if(!raining){
  console.log("Leave your umbrella at home!");
}

if(temperature < 0){
  console.log("Make sure you pick out a scraf!");  
} else if(temperature < 15){
  console.log("Short sleeves won't cut it!");
} else{
  console.log("Short sleeves are fine.");
}

if(temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a agood idea...");
}

console.log("Now you're ready to go outside!");