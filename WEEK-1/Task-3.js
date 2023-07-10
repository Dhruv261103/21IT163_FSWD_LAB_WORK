let n = prompt("Enter Your Age:");
n = Number(n);
if(n>=18 && n<=65){
    document.write("You are an adult.");
}
else if(n<18){
    document.write("You are a minor.");
} 
else{
    document.write("You are a senior citizen.");
}