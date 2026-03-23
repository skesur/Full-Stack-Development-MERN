function hello(cd){
    setTimeout(()=>{
        console.log("Hello")
        cd()
    },3000);
}
function bye(){
    console.log("Goodbye");
}
hello(bye);
