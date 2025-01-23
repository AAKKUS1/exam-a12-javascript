function greetings(isStudent) {
	if (isStudent == true){
      return "Bienvenu cher élève"
    }
  else{
    return "Bienvenue cher parent"
  }
}

console.log(greetings(true)); 
console.log(greetings(false));