var name = "lol";
   
while (name != "ohmygod") {
	name = window.prompt("Enter your name: ");
	if (name == "ohmygod") {
		break;
	} else {
		continue;
	}
}
