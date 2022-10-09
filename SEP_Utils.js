//=============================================================================
// Schnitwagon Engine Plugins - Utils
// SEP_Utils.js
//=============================================================================

/*: 
* @plugindesc Miscellaneous utility functions
* @author Schnitwagon 
* @param bootynice
* @desc make da booty nice???
* yes, i'm winner - true | no, i'm loser - false
* @type boolean
* @on yes, i'm winner
* @off no, i'm loser - false
* @default true
* @help
* ============================================================================
* Introduction
* ============================================================================
* Just personal utility functions. Waddya want from me!?!? 
*
*
* Parameter does nothing: I just want your promise to make the booty nice.
* 
* ============================================================================
* Changelog
* 
*  * Version fuk.u (0.01)
*  - Initialized.
* ============================================================================
*/    

SEP.Parameters = PluginManager.parameters('SEP_Utils');

/*
// YEP_PatchNotes.js
Yanfly.getPatchFileUrl = function() {
  var url = Yanfly.Param.PatchNotesFilename;
  if (url.match(/http/i)) {
    return url;
  } else {
    var path = window.location.pathname.replace(/(\/www|)\/[^\/]*$/,
    '/' + Yanfly.Param.PatchNotesFilename);
    if (path.match(/^\/([A-Z]\:)/)) path = path.slice(1);
    path = decodeURI(path);
    return path;
  }
}
*/

var get_file = function(file) {
	
	xmlhttp = new XMLHttpRequest();
	
    xmlhttp.open("GET",file,false);
	
    xmlhttp.send(null); 
	
    var file_contents = xmlhttp.responseText;
	
    var file_contents = file_contents.split(/[\n]/i);
	
	return file_contents
	
}

var filepath = "patch_notes.txt"

get_file(filepath)

//=============================================================================
// END FILE
//=============================================================================