function register(cv)
{
    setTimeout(() => {
        console.log("register end");
        cv();
    },2000);
    
}
function sendemail(cv)
{
     setTimeout(() => {
        console.log("sendemail end");
        //  cv();
    },2000);
   
}
function login(cv)
{
    setTimeout(() => {
        console.log("login end");
        cv();
    },2000);
    
}
function getData(cv)
{
     setTimeout(() => {
        console.log("data end");
        cv();
    },2000);
    
}
function displayData(cv)
{
    setTimeout(() => {
        console.log("displayData end");
        cv();
    },2000);
    
}
register(()=>{
    sendemail(()=>{
        login(()=>{
            getData((cv)=>{
                displayData(()=>{
                    console.log("all done");
                });
            } );
        });
    });
});
sendemail();
login();
getData();
displayData();
console.log("other Application")