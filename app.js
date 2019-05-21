// Assignment 1
/**
	Given a string of odd length, return the middle 3 characters from the string,
	so the string <b>"Monitor"</b> yields <b>"nit"</b>.
	If the string length is less than 3, return the string as is. <br> <br>

	<b>EXPECTATIONS:</b><br>
	middleThree("bunny") <b>---></b> "unn" <br>
	middleThree("peter") <b>---></b> "ete" <br>
	middleThree("Jamaica") <b>---></b>"mai" <br>
	 */

middleThree = string => {};

// Assignment 2
/**
	 * You are driving a little too fast, and a police officer stops you.
	 * Write code to compute the fine you would have to pay.
	 * If your speed is 60 or less, the result is 0 since there is no fine.
	 * If speed is between 61 and 80 inclusive, the fine is 100 dollars.
	 * If speed is 81 or more, the result is 200.
	 * Unless it is a holiday -- on that day, your speed can be 5 higher in all cases. <br>
	 * <br>
	 *
	 * <b>EXPECTATIONS:</b><br>
		speedingFine(60, false)  <b>---></b> 0 <br>
		speedingFine (65, false)   <b>---></b> 100 <br>
		speedingFine (65, true) <b>---></b> 0 <br>
	 */

speedingFine = (speed, fine) => {};
// Assignmet 3
/**

	Given 3 int arguments - a, b, c, return their sum. However, if one of the arguments
	is the same as any of the other ones, that number should not count towards the sum.
	So basically you only sum unique numbers, not duplicates
	<br>
	<br>

	 * <b>EXPECTATIONS:</b><br>
		sumUnique(1, 2, 3)   <b>---></b> 6 <br>
		sumUnique(3, 2, 3)    <b>---></b> 2 <br>
		sumUnique(3, 3, 3) <b>---></b> 0 <br>
	 */

sumUnique = (a, b, c) => {};
// Assigment 4
/**
	 *
	Return a version of the given string, where for every star (*)
	in the string the star and the chars immediately to its left and right are gone.
	So "ab*cd" yields "ad" and "ab**cd" also yields "ad". 	<br>
	<br>

	 * <b>EXPECTATIONS:</b><br>
		starKill("cd*zq")  <b>---></b>"cq"<br>
		starKill("ab**cd")    <b>---></b> "ad" <br>
		starKill("wacy*xko") <b>---></b> "wacko" <br>
	 */
starKill = string => {};

// Assignment 5
/**
      Create  a method which takes an age params and then determines whether the person
      is over 18 or not. If the age is over 18, it then consoles "Over 18" otherwise "Under 18"
       * <b>EXPECTATIONS:</b><br>
		calculateAge(21) // Over 18
		calculateAge(7) // Under 18
	  Hint: Use Javascript ternary operation
      */
calculateAge = age => {};
// Assignment 6
/**
      Write a method which takes person Object as an argument and theen return the person's
      firstName .If firstname is undefined or null it retruns lastname. If lastname is
      undefined it returns email.
      const person = {firstName: null, lastName: "Ali", email: ""}
      Example: printObject(person) // Ali
      // Hint: Use Javascript elvis operator
      */
printObject = obj => {};
// Assignmet 7
/*
      Write a method which takes list of person as an argument and then filters and return
      all persons which over 25.
      const people = [{name: "Ali", born: 1993, {name: "Zara", born: "1998"}]
      // Example: printOver25(people) // {name: "Ali", born: 1993}
    */
printOver25 = list => {};
// Assignmet 8
/*
     Write a method which takes a list of people objects and returns the list by adding
     a new age property by calculating the age form born year.
    const people = [{name: "Ali", born: 1993, {name: "Zara", born: "1998"}]
      // Example: generateAge(people) // [{name: "Ali", born: 1993, age= 26},
      {name: "Zara", born: 1998, age= 21}
    */
generateAge = list => {};
