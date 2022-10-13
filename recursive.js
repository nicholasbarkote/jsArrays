function even(n){

    if(n == 0)return;
   
    if((n%3 == 0)&&(n%5 == 0) ){
        console.log("Fizz Buzz");
        even(n - 1);
    }
    else if(n % 5 == 0){
        console.log("Buzz");
        even(n -1);
    }
    else if(n % 3 == 0){
        console.log("Fizz");
        even(n -1);
    }
    else {
        even(n-1);
    }
}

even(100)