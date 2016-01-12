/*
Ecoute les clicks dans la popup

Si le click n'est pas sur une des beasts, return simplement.

Otherwise, the text content of the node is the name of the beast we want.
Sinon, le texte contenu du noeud est le nom de la beast qu'on veut.

Inject the "beastify.js" content script in the active tab.
Injecte le contenu du script "beastify.js" dans l'onglet actif.

Then get the active tab and send "bestify.js" a message containing the choosen beast's name.
Alors choppe l'onglet actif et envoie à "beastify.js" un message comportant le nom de la beast choisie.
*/
document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("beast")) {
    return;
  }

  var chosenBeast = e.target.textContent;

  chrome.tabs.executeScript(null, {
    file: "../content_scripts/beastify.js"
  });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {beast: chosenBeast});
  });

});
