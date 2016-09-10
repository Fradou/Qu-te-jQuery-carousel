$(document).ready(function() {

	function chgmt(sens){
// On identifie l'image actuelle et la suivante.
		imcur=$(".vis");
		imnex=+imcur.attr("id")+sens;
// On s'assure de ne pas sortir de la banque d'image dans un sens comme dans l'autre
		if (imnex>3) {
			imnex=0;
		}
		else if (imnex <0) {
			imnex=3;
		}
// On effectue les changements de classe menant à l'apparition / disparition.
		imnext= "#"+imnex;
		imcur.addClass("invis").removeClass("vis")
		$(imnext).addClass("vis").removeClass("invis")
	}
// Changement automatique toutes les 3s
	setInterval(function(){chgmt(1)},3000);
// Action des boutons 
	$("#next").click(function(){chgmt(1)})
	$("#prev").click(function(){chgmt(-1)})


});

