function ShowTalenReken() {

	/* hide */
	document.getElementById('ContainerInfoProgrameren').style.display = 'none';
	document.getElementById('ContainerInfoBeheer').style.display = 'none';

	/* show */
	document.getElementById('ContainerInfoTalenRekenen').style.display = 'block';

	/* footer */
	document.getElementById('Footer').style.background = '#fff';
	document.getElementById('Footer').style.color = 'grey';

	/* opdrachten VAK title */
	document.getElementById('Title').style.background = '#232937';
	document.getElementById('Title').style.color = '#fff';
}

function ShowProgrameren() {

	/* hide */
	document.getElementById('ContainerInfoTalenRekenen').style.display = 'none';
	document.getElementById('ContainerInfoBeheer').style.display = 'none';

	/* show */
	document.getElementById('ContainerInfoProgrameren').style.display = 'block';

	/* footer */
	document.getElementById('Footer').style.background = '#fff';
	document.getElementById('Footer').style.color = 'grey';

	/* opdrachten VAK title */
	document.getElementById('Title').style.background = '#232937';
	document.getElementById('Title').style.color = '#fff';
}

function ShowTalenBeheer() {

	/* hide */
	document.getElementById('ContainerInfoProgrameren').style.display = 'none';
	document.getElementById('ContainerInfoTalenRekenen').style.display = 'none';

	/* show */
	document.getElementById('ContainerInfoBeheer').style.display = 'block';

	/* footer */
	document.getElementById('Footer').style.background = '#fff';
	document.getElementById('Footer').style.color = 'grey';

	/* opdrachten VAK title */
	document.getElementById('Title').style.background = '#232937';
	document.getElementById('Title').style.color = '#fff';
}

function ShowMoreAboutMe() {

	/* hide */
	document.getElementById('ContainerCV').style.display = 'none';

	/* show */
	document.getElementById('ShowMoreAboutMe').style.display = 'block';

	/* footer */
	document.getElementById('Footer').style.background = '#fff';
	document.getElementById('Footer').style.color = 'grey';

	/* opdrachten VAK title */
	document.getElementById('Title').style.background = '#232937';
	document.getElementById('Title').style.color = '#fff';
}

function ShowCV() {

	/* hide */
	document.getElementById('ShowMoreAboutMe').style.display = 'none';

	/* show */
	document.getElementById('ContainerCV').style.display = 'block';

	/* footer */
	document.getElementById('Footer').styContainerCVackground = '#fff';
	document.getElementById('Footer').style.color = 'grey';

	/* opdrachten VAK title */
	document.getElementById('Title').style.background = '#232937';
	document.getElementById('Title').style.color = '#fff';
}