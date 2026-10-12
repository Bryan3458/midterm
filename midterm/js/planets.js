
$(function() {
 
    //Write your code below
    async function planets(){
        let planets = await fetch("https://science.nasa.gov/solar-system/planets/");
        let data = await planets.json();
        console.log(data);
    }

});
