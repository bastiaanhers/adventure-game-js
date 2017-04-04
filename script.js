
var enter1 = 0;
var enter2 = 0;
var enter3 = 0;
var enter4 = 0;

var masterkey = false ;
var enternarnia = 0;
var enterboek = 0;
var pinda = false;
var walter = false;
var legger = false;

var secret = document.getElementById('secret');
var button1 = document.getElementById('but-1');
var button2 = document.getElementById('but-2');
var button3 = document.getElementById('but-3');
var button4 = document.getElementById('but-4');
var button5 = document.getElementById('but-5');
var koptext = document.getElementById('koptext');
var background = document.getElementsByTagName('main');
var info = document.getElementById('info');
var person = null;

//startscherm//
		button1.style.cssText = 'display: block;';
        button1.setAttribute('onclick', "javascript:Slaap01();");
    	button1.innerHTML = "start";
    	koptext.innerHTML = "klik om te starten";

//game over scherm
function gameOver(){
	koptext.innerHTML = "game over";
	koptext.style.cssText = 'text-align: center;';
	button1.style.cssText = 'display: none;';
	button2.style.cssText = 'display: none;';
	button3.style.cssText = 'display: none;';
	button4.style.cssText = 'display: none;';
	document.body.style.backgroundImage = "url('game-over.jpg')";

}

//slaapkamer 1 opbouwen
function Slaap01(){
	document.body.style.backgroundImage = "url('slaap.png')";
		if (enter1 == 0) {
		info.innerHTML = "je wordt wakker in een onbekende slaapkamer met hoofdpijn en duizeligheid.<br>na een tijdje besluit je rond te gaan kijken";
		enter1 ++;
	}
	else{
		info.innerHTML = 'nog steeds een donkere slaapkamer';
	}

	koptext.innerHTML = "Locatie: slaapkamer";
	koptext.style.cssText = 'text-align: left;';
	document.body.style.backgroundColor = "white";


	button1.style.cssText = 'display: none;';

	button2.style.cssText = 'display: block;';
	button2.innerHTML = "naar de hal";
	button2.setAttribute('onclick',"javascript:Hall01()");

	button3.style.cssText = 'display:block;';
	button3.innerHTML = "naar de badkamer";
	button3.setAttribute('onclick',"javascript:Bad()");

	button4.style.cssText = 'display: none;';

	document.body.style.backgroundImage = "url('')";


}

//badkamer opbouwen + pijnstillers vinden
function Bad(){
	koptext.innerHTML = "Locatie: Badkamer";
	info.innerHTML = "deze badkamer komt je bekend vooor";

	button1.style.cssText = 'display:none;';

	button2.style.cssText = 'display:block;';
	button2.innerHTML = "check in het kastje;"
	button2.setAttribute('onclick', "javascript:kastje();");

	button3.style.cssText = 'display:none;';

	button4.style.cssText = 'display:block;';
	button4.innerHTML = "slaapkamer";
	button4.setAttribute('onclick', "javascript:Slaap01()");

	button5.style.cssText = 'display:none;';


}

function kastje(){
		info.innerHTML = "Je ziet een pindakaas liggen";
		button1.style.cssText = 'display:none;';

		button2.style.cssText = 'display:block;';
		button2.innerHTML = "terug";
		button2.setAttribute('onclick', "javascript:Bad();");

		button3.style.cssText = 'display:none;';

		button4.style.cssText = 'display:none;';


		button5.style.cssText = 'display:block; width:100px; height:50px; background-color: white; color:red; bottom:50%;';
		button5.innerHTML = "pindakaas";
		button5.setAttribute('onclick', "javascript:getpinda();");

}

function getpinda(){
	pinda = true;
	console.log = "banaan";

}

//hall 1 opbouwen
function Hall01(){
	if (enter2 == 0) {
		info.innerHTML = "je zit een ouderwetse hal tegenover de slaapkamer zit een deur die er ouder uit ziet als de rest van de deuren";
		enter2 ++;
	}else{
		info.innerHTML = ""
	}
	if (enternarnia > 0 ) {
		button2.innerHTML = "deur op slot";
	}else{
		button2.innerHTML = "naar onbekende kamer"
	}
		koptext.innerHTML = "Locatie: hal links";

	button1.style.cssText = 'display:block;';
	button1.innerHTML = "naar slaapkamer"
	button1.setAttribute('onclick', "javascript:Slaap01()");

	button2.setAttribute('onclick',  "javascript:narnia()");

	button3.style.cssText = 'display: none;';

	button4.style.cssText = 'display:block;';
	button4.innerHTML = "verder lopen in de hal";
	button4.setAttribute('onclick',"javascript:Hall02()");

}

//hall 2 opbouwen
function Hall02(){
	if (enter2 == 0) {
		info.innerHTML = "lange hal";
		enter2 ++;
	}else {
		info.innerHTML = "er is niet veel te zien door het raam door de mist en de planken voor het raam.";
	}
	koptext.innerHTML = "Locatie: Hal rechts";

	button1.style.cssText = 'display:block;';
	button1.innerHTML = "naar studiekamer";
	button1.setAttribute('onclick', "javascript:Studiekamer();");

	button2.style.cssText = 'display:block;';
	button2.innerHTML = "naar beneden ";
	button2.setAttribute('onclick', "javascript:vallen()");

	button3.style.cssText = 'display:block;';
	button3.innerHTML = "terug lopen in de hal";
	button3.setAttribute('onclick',"javascript:Hall01()");


	button4.style.cssText = 'display: none;';


}

//studiekamer opbouwen + geheime deur
function Studiekamer(){
	if (enterboek == 1) {
			alert(' het geheim is nog niet gevonden');
			enterboek++;
		} else{

		koptext.innerHTML = "Locatie: Studiekamer";
		info.innerHTML = "grote boekenkast hmmm wat moet ik daar toch mee doen";

		button1.style.cssText = 'display:block;';
		button1.innerHTML = "kijk in boekenkast"
		button1.setAttribute('onclick', "javascript:boekenkast();");

		button2.style.cssText = 'display:block;';
		button2.innerHTML = "naar de hal";
		button2.setAttribute('onclick', "javascript:Hall02();");
	
	if (masterkey == true) {
		button3.innerHTML = "sleutel in bezit";
		button3.setAttribute("onclick", "javascript:");
		button3.style.cssText = "display:block;";
	}else{
		button3.style.cssText = 'display:block;';
		button3.innerHTML = "kijken naar mooi vloerkleed";
		button3.setAttribute('onclick', "javascript:kleed();");
	}

		button5.style.cssText = 'display:none;';

	if (walter == false) {
		button4.style.cssText = 'display:block;';
		button4.innerHTML = "kijk naar het gordijnen";
		button4.setAttribute('onclick', "javascript:gordijn();");
		}else{
			button4.style.cssText = "display:block;";
			button4.innerHTML = "walter staat voor je klaar";
			button4.setAttribute("onclick", "javascript:");
		}		
		}

}

function boekenkast(){
		koptext.innerHTML = "Locatie: boekenkast";
		info.innerHTML = "gewoon een fucking mooie boekenkast.... met geheimzinnige boeken.";
		enterboek ++;

		button1.style.cssText = 'display:none;';

		button2.style.cssText = 'display:block;';
		button2.innerHTML = "terug";
		button2.setAttribute('onclick', "javascript:Studiekamer();");

		button3.style.cssText = 'display:none;';

		button4.style.cssText = 'display:none;';
		if (legger == false){

		button5.style.cssText = 'display:block;';
		button5.innerHTML = 'geheim boek';
		button5.setAttribute('onclick', "javascript:boekenlegger();");
		enterboek ++;

		}
		else{
			button5.style.cssText = 'display:none;';
		}
}

//je hebt de boekenlegger ontvangen
function boekenlegger(){
	alert("gefeliciteerd! je hebt een waardelose boekenlegger gevonden!!!");
	legger = true;
}

//je kijkt naar het gordijn/
function gordijn(){
		koptext.innerHTML = "Locatie: spooky gordijn";
		info.innerHTML = "je hoort zacht gemompel achter het gordijn komen";

		button1.style.cssText = 'display:block;';
		button1.innerHTML = "kijk achter de gordijnen";
		button1.setAttribute('onclick', "javascript:achtergordijn();");

		button2.style.cssText = 'display:block;';
		button2.innerHTML = "terug";
		button2.setAttribute('onclick', "javascript:Studiekamer();");

		button3.style.cssText = 'display:none;';

		button4.style.cssText = 'display:none;';
}

//je kijkt achter het gordijn en ziet walter
function achtergordijn(){
		koptext.innerHTML = "Locatie: spooky gordijn";
		info.innerHTML = "het is walter de kabouter!!!!";

		button1.style.cssText = 'display:block;';
		button1.innerHTML = "maak hem los";
		button1.setAttribute('onclick', "javascript:loswalter()");

		button2.style.cssText = 'display:block;';
		button2.innerHTML = "laat kabouter walter achter";

		button3.style.cssText = 'display:none;';

		button4.style.cssText = 'display:none;';
}

//je maakt walter los
function loswalter(){
	if (pinda == true) {

		walter = true;
		koptext.innerHTML = "Locatie: walter's gordijn";
		info.innerHTML = "je bied walter je pindakaas aan in ruil voor zijn hulpt, hij verteld je dat hij nu niet kan helpen maar hij klaar staat als je hem roept.";

		button1.style.cssText = 'display:none;';

		button2.style.cssText = 'display:block;';
		button2.innerHTML = "terug";
		button2.setAttribute('onclick', "javascript:Studiekamer();");

		button3.style.cssText = 'display:none;';

		button4.style.cssText = 'display:none;';

	} else {

		koptext.innerHTML = "game over";
		koptext.style.cssText = 'text-align: center;';
		info.innerHTML = "walter is gaat uit zijn dak omdat hij al lange tijd geen pindakaas heeft gegeten en gooit je uit het raam ";

		button1.style.cssText = 'display: none;';

		button2.style.cssText = 'display: none;';

		button3.style.cssText = 'display: none;';

		button4.style.cssText = 'display: none;';

		button5.style.cssText = 'display: none;';

		document.body.style.backgroundImage = "url('game-over.jpg')";
	}
}

//kijk onder het kleed
function kleed(){
	koptext.innerHTML = "Locatie: studiekamer";
	info.innerHTML = "je ziet iets onder het kleed"

	button1.style.cssText = 'display:block;';
	button1.innerHTML = "kijk onder het kleed";
	button1.setAttribute('onclick', "javascript:sleutel();");

	button2.style.cssText = 'display:block;';
	button2.innerHTML = "terug";
	button2.setAttribute('onclick', "javascript:Studiekamer();");

	button3.style.cssText = 'display:none;';

	button4.style.cssText = 'display:none;';
}

//je kan de sleutel proberen op te pakken
function sleutel(){
	button1.style.cssText = "display:none;";
	button2.style.cssText = "display:none;";
	button3.style.cssText = "display:none;";
	button4.style.cssText = "display:none;";

	button5.style.cssText = "display:block;";
	button5.innerHTML = "pak de sleutel op";
	button5.setAttribute('onclick', "javascript:paksleutel();");
}

//je pakt de sleutel op
function paksleutel(){
	if (masterkey >= 10){
		masterkey = true;
		info.innerHTML = "je hebt de sleutel ontvangen";
		button5.style.cssText = 'display:none;';
		alert('je hebt de sleutel');
		button2.style.cssText = "display:block;";
		button2.innerHTML = "terug";
		button2.setAttribute('onclick', "javascript:Studiekamer();");
	}else{
		masterkey ++;
	
	if (masterkey < 2){
		button5.innerHTML = "probeer de sleutel te pakken";
		alert('de sleutel is vast geplakt');
	} 
	}
}

//je valt van de trap
function vallen(){
		koptext.innerHTML = "gameOver";
		info.innerHTML = "je bent van de trap gevallen.";
		button1.style.cssText = 'display:none;';
		button2.style.cssText = 'display:none;';
		button3.style.cssText = 'display:none;';
		button4.style.cssText = 'display:none;';
		button5.style.cssText = 'display:none;';
		document.body.style.backgroundImage = "url('game-over.jpg')";
	}
//je opend de deur naar de kamer met de kast naar narnia
function narnia(){
	if (masterkey == false){
		button2.innerHTML = "deur zit op slot";
	}else{
		alert("deur is geopend met de sleutel")


		koptext.innerHTML = "Locatie: kamer met kledingkast";
		info.innerHTML = "je staat in een grote kamer met in het midden een kledingkast";
		button1.style.cssText = 'display:block;';
		button1.innerHTML = "open de kast";
		button1.setAttribute('onclick', "javascript:fight();");
		button2.style.cssText = 'display:none;';
		button3.style.cssText = 'display:none;';
		button4.style.cssText = 'display:none;';
		button5.style.cssText = 'display:none;';


	}

}

function fight(){
		info.innerHTML = "uit de kast komt een groot monster";

		button1.style.cssText = 'display:block;';
		button1.setAttribute('onclick',"javascript:groet();");
		button1.innerHTML = "Zeg vriendelijk hallo";

		button2.style.cssText = 'display:block;';
		button2.setAttribute('onclick',"javascript:gooi();");
		button2.innerHTML = "gooi sleutel naar zijn hoofd";

		button3.style.cssText = 'display:block;';
		button3.setAttribute('onclick',"javascript:roep();");
		button3.innerHTML = "roep walter";

		button4.style.cssText = 'display:block;';
		button4.setAttribute('onclick',"javascript:ren();");
		button4.innerHTML = "ren weg";

		button5.style.cssText = 'display:none;';

		document.body.style.backgroundImage = "";
}

function groet(){
	alert("Het monster groet je terug");
	button1.setAttribute('onclick',"javascript:");
	button1.style.cssText = 'display: none;';

}

function gooi(){
	alert("de sleutel stuiterd van zijn hoof op de grond");
	button2.innerHTML = "gooi nog een keer";
	button2.setAttribute('onclick',"javascript:gooi2();");

}
function gooi2(){
	alert("de sleutel kwam in zijn oog")
	info.innerHTML = "je bent opgegeten door het monster";

	koptext.innerHTML = "game over";

	button1.style.cssText = 'display: none;';
	button2.style.cssText = 'display: none;';
	button3.style.cssText = 'display: none;';
	button4.style.cssText = 'display: none;';

	button5.style.cssText = 'display: block; bottom:50px; align-self:center;';
	button5.setAttribute('onclick', "javascript:fight();");
	button5.innerHTML = "probeer het opnieuw";

	document.body.style.backgroundImage = "url('game-over.jpg')";

}

function roep(){
	info.innerHTML = "vol vertrouwen komt walter naast je staan en vraagt wat hij moet doen"

	button1.style.cssText = 'display: none;';

	button2.style.cssText = 'display: block;';
	button2.innerHTML = "slinger walter naar zijn hoofd";
	button2.setAttribute('onclick', "javascript:slinger();");

	button3.style.cssText = 'display: block;';
	button3.innerHTML = "vecht samen zij aan zij";
	button3.setAttribute('onclick', "javascript:zij();");

	button4.style.cssText = 'display: none;';

	button5.style.cssText = 'display: none;';

}

function slinger(){
	info.innerHTML = "walter beland recht in zijn mond en is in 1 hap weg, je ziet geen manier hoe je nu nog kan winnen";
	walter = false;
	button2.style.cssText = 'display: none;';

	button3.innerHTML = "vecht alleen door"
	button3.setAttribute('onclick', "javascript:lonely();");
	if (legger == false) {

		button5.style.cssText = 'display: block; bottom:50px; align-self:center;';
		button5.setAttribute('onclick', "javascript:fight();");
		button5.innerHTML = "probeer het opnieuw";

	}

}
function lonely(){
	info.innerHTML = "je trieste poging om met hem te vecht liep niet goed af voor je";

	koptext.innerHTML = "game over";

	button1.style.cssText = 'display: none;';
	button2.style.cssText = 'display: none;';
	button3.style.cssText = 'display: none;';
	button4.style.cssText = 'display: none;';

	button5.style.cssText = 'display: block; bottom:50px; align-self:center;';
	button5.setAttribute('onclick', "javascript:fight();");
	button5.innerHTML = "probeer het opnieuw";

	document.body.style.backgroundImage = "url('game-over.jpg')";

}

function zij(){
	info.innerHTML = "jullie doen je best maar het monster staat je altijd net een stap voor";

	button1.style.cssText = 'display: block;';
	button1.innerHTML = "neem de tijd om strategy"
	button1.setAttribute('onclick', "javascript:w8();");

	button3.style.cssText = 'display: none;';

	if (legger == true) {
	button2.style.cssText = 'display: block;';
	button2.innerHTML = "pak de boekenlegger en vecht terug";
	button2.setAttribute('onclick', "javascript:leggerfight();");
	}else {
	button2.style.cssText = 'display:none;';
	}
	button4.style.cssText = 'display: none;';

	}


function w8(){
	info.innerHTML = "na 5 minuten wordt het monster ongeduldig en eet je op";

	koptext.innerHTML = "game over";

	button1.style.cssText = 'display: none;';
	button2.style.cssText = 'display: none;';
	button3.style.cssText = 'display: none;';
	button4.style.cssText = 'display: none;';

	button5.style.cssText = 'display: block; bottom:50px; align-self:center;';
	button5.setAttribute('onclick', "javascript:fight();");
	button5.innerHTML = "probeer het opnieuw";

	document.body.style.backgroundImage = "url('game-over.jpg')";


}

function leggerfight(){
	info.innerHTML = "met de kracht van vriendschap en de boekenlegger weten julie het monster te verslaan";

	button1.style.cssText = 'display: block;';
	button1.innerHTML = "ga naar narnia"
	button1.setAttribute('onclick', "javascript:victory();");

	button2.style.cssText = 'display: none;';
	button3.style.cssText = 'display: none;';
	button4.style.cssText = 'display: none;';



}

function ren(){
	info.innerHTML = "het monster grijpt je voor je weg komt";

	koptext.innerHTML = "game over";

	button1.style.cssText = 'display: none;';
	button2.style.cssText = 'display: none;';
	button3.style.cssText = 'display: none;';
	button4.style.cssText = 'display: none;';

	button5.style.cssText = 'display: block; bottom:50px; align-self:center;';
	button5.setAttribute('onclick', "javascript:fight();");
	button5.innerHTML = "probeer het opnieuw";

	document.body.style.backgroundImage = "url('game-over.jpg')";


}
function victory(){
	info.innerHTML = "het is jullie gelukt om in narnia te komen ";

	koptext.innerHTML = "Locatie: narnia";

	button1.style.cssText = 'display: none;';
	button2.style.cssText = 'display: none;';
	button3.style.cssText = 'display: none;';
	button4.style.cssText = 'display: none;';

}