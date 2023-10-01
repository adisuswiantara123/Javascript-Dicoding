const greeting = function(name, language) {
    if(language === "English") {
      return "Good Morning " + name + "!";
    } else if (language === "French") {
      return "Bonjour " + name + "!";
    } else {
      return "Selamat Pagi " + name + "!";
    }
  }
  
  console.log(greeting('Ron', 'English'));
  
  /* output
  Good Morning Ron!
   */


  function multiply(a, b) {
    return a * b;
  }
  
  let result = multiply(10, 2)
  console.log(result)
  
  /* output
  20
  */


  function salam(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
  }
  
  salam("Harry", "French");
  
  /* output
  Bonjour Harry!
  */