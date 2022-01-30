var password = "lol";
   
while (password != "ohmygod") {
	password = window.prompt("Enter password: ");
	if (password == "ohmygod") {
		break;
	} else {
		continue;
	}
}
