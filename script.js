// TODO: add code here
window.addEventListener("load", function() {
    const fetchData = async() => {
        const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        const data = await response.json();
        const container = document.getElementById("container");

        let astronautData = "";
    
        for (let astronaut of data) {
            astronautData += `<div class = "astronaut">
                <div class = "bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <h5>Hours in Space: ${astronaut.hoursInSpace}</h5>
                <h5>Active: ${astronaut.active}</h5>
                <h5>Skills: ${astronaut.skills.join(', ')}</h5>
                </div> <img class="avatar" src="${astronaut.picture}">
                </div>`;
            }
        container.innerHTML += astronautData;
    }
   
    fetchData();
});
