function evenDigitsOnly(n) {
	/* This is another option to solve the problem with one line of code.
	     - n.toString(10) can also replace (n+"")
	   I'm not convinced this is the best way
	     - It is less readable for beginners
		 - Not sure if the speed is better for v1 or v2
	*/
    return (n+"").replace(/[02468]/g,"").length > 0 ? false : true;
}
