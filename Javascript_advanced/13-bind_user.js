const user = {
    hobby: "Calligraphy",
    favotiteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Aliyu",
    loacation: "Palistine",
    occupation: "Engineering"
}

function logWelcomeUser(welcomeString){
    console.log(welcomeString + " " + user.firstName + " " + "Your occupation is " + user.occupation);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);

bindLogWelcomeUser("Hello");
