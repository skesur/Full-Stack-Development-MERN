function hello(bye){
    setTimeout(()=>{
        console.log("Hello");
        bye()
    },2000);
}

function bye(){
    console.log("Goodbye");
}

hello(bye)