function ShowTalenReken() {

	/* hide */
	document.getElementById('ContainerInfoProgrameren').style.display = 'none';
	document.getElementById('ContainerInfoBeheer').style.display = 'none';

	/* show */
	document.getElementById('ContainerInfoTalenRekenen').style.display = 'block';

	ChangeFooter();
}

function ShowProgrameren() {

	/* hide */
	document.getElementById('ContainerInfoTalenRekenen').style.display = 'none';
	document.getElementById('ContainerInfoBeheer').style.display = 'none';

	/* show */
	document.getElementById('ContainerInfoProgrameren').style.display = 'block';

	ChangeFooter();
}

function ShowTalenBeheer() {

	/* hide */
	document.getElementById('ContainerInfoProgrameren').style.display = 'none';
	document.getElementById('ContainerInfoTalenRekenen').style.display = 'none';

	/* show */
	document.getElementById('ContainerInfoBeheer').style.display = 'block';

	ChangeFooter();
}

function ShowMoreAboutMe() {

	/* hide */
	document.getElementById('ContainerCV').style.display = 'none';

	/* show */
	document.getElementById('ShowMoreAboutMe').style.display = 'block';

	ChangeFooter();
}

function ShowCV() {

	/* hide */
	document.getElementById('ShowMoreAboutMe').style.display = 'none';

	/* show */
	document.getElementById('ContainerCV').style.display = 'block';

	ChangeFooter();
}

function ShowProgrammeur() {

	/* hide */
	document.getElementById('ContainerInfoToekomst').style.display = 'none';

	/* show */
	document.getElementById('ContainerInfoProgrammeur').style.display = 'block';

	ChangeFooter();
}

function ShowToekomst() {

	/* hide */
	document.getElementById('ContainerInfoProgrammeur').style.display = 'none';

	/* show */
	document.getElementById('ContainerInfoToekomst').style.display = 'block';

	ChangeFooter();

}

function ChangeFooter() {

	/* footer */
	document.getElementById('Footer').style.background = '#fff';
	document.getElementById('Footer').style.color = 'grey';

	/* opdrachten VAK title */
	document.getElementById('Title').style.background = '#232937';
	document.getElementById('Title').style.color = '#fff';

}

