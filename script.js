const btnEL=document.getElementById("btn");
const apiKey="D3kRkvqGM24XNNfhYkTf7dlpubmBMtG3BZTTzMiw";
const options={
    method:'GET',
    headers: {
        'X-Api-Key':apiKey,
    },
};
 const apiURL='https://api.api-ninjas.com/v1/jokes?limit=1';
async function getJoke(){

    try {
     jokeEL.innerText="Updating....";
    btnEL.disabled=true;
    btnEL.innerText="Wait";


    const response=await fetch(apiURL,options);
    const data = await response.json();


    btnEL.disabled=false;
    btnEL.innerText="Tell me a joke";


    jokeEL.innerText=data[0].joke;
    } catch (error) {
        jokeEL.innerText="An Error happened,try again later";
        btnEL.innerText="Tell me a joke"
    }
    
}
btnEL.addEventListener("click",getJoke);
