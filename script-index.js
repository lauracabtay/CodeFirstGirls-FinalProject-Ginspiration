   var ageCheck = prompt("How old are you?")
    if (ageCheck >= 18) {
        alert("Welcome to Ginspiration!");
    }
    else {
      alert("You must be at least 18 years old to be allowed on this website. You will be redirected.")
        window.location.href="https://www.drinkaware.co.uk/advice/underage-drinking";
    }