//=============================================================================
// Schnitwagon Engine Plugins - SysMsg
// SEP_SysMsg.js
//=============================================================================

/*: 
* @plugindesc Text codes for System data names.
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
* Extract names from System data via text codes ala YEP_MessageCore. Intended
* for text boxes, skill descriptions, and related.
*
* Parameter does nothing: I just want your promise to make the booty nice.
*
* ============================================================================
* System Data Text Codes
* ============================================================================
* Where n is an integer,
*
*  Code:     Effect:
*  \el[n]    - Write Element name.
*  \st[n]    - Write Skill Type name.
*  \so[n]    - Write Sound name.
*
* ============================================================================
* Functions
* ============================================================================
* pluck(arr, depth = 0)
* - Extracts array element at base level by default. Set depth to any integer
*   if the array has a nested element with a key called "name".
*
*
* ============================================================================
* Links
* ============================================================================
* YEP_MessageCore: http://www.yanfly.moe/wiki/Message_Core_(YEP)
*
* GitHub: https://www.github.com/schnitwagon
*
* Twitter: https://www.twitter.com/schnitwagon
*
* SoundCloud: https://www.soundcloud.com/schnitwagon
*
* ============================================================================
* Changelog
* ============================================================================
* * Version fuk.u (0.01)
*  - Added \el, \st, \so, pluck().
*
* ============================================================================
*/    

SEP.Parameters = PluginManager.parameters('SEP_SysMsg');

// Elements are in data/System.JSON as an Array
var $elements   = $dataSystem.elements
var $skilltypes = $dataSystem.skillTypes
var $sounds     = $dataSystem.sounds

// No keys in $dataElements -> Add keys to Elements array for easier reference?
// https://stackoverflow.com/questions/40455972/how-to-add-key-on-existing-array-javascript#40456075

var $elements = Object.keys($elements).map(function (key) { 

    var output = {};
	
    output[key] = $elements[key];

    return output;
	
});

var $skilltypes = Object.keys($skilltypes).map(function (key) { 

    var output = {};
	
    output[key] = $skilltypes[key];

    return output;
	
});

var $sounds = Object.keys($sounds).map(function (key) { 

    var output = {};
	
    output[key] = $sounds[key];

    return output;
	
});

/* Generalize text.replace subroutine below??
tr = function(cmd, data, depth = 0) {
	
    text = text.replace(/\x1b...cmd....\[(\d+)\]/gi, function() {
		
		if (depth = 0) {
			
			output = data[parseInt(arguments[1])];	
			
		} else {
			
			output = data[parseInt(arguments[1])].name;
			
		}
		
        return output;
		
    }.bind(this));
	
	return text;	
	
}
*/

pluck = function(arr, depth = 0) {
	
	if (depth = 0) {

	output = arr[parseInt(arguments[1])];	
	
	} else {
		
	output = arr[parseInt(arguments[1])].name;
		
	}
		
	return output;	
	
}

// Based on YEP_MessageCore.js
Window_Base.prototype.convertExtraEscapeCharacters = function(text) {    

    // \EL[n] = get element name based on id
    text = text.replace(/\x1bEL\[(\d+)\]/gi, function() {
		
        //return $elements[parseInt(arguments[1])];
		pluck($elements, 0);
		
    }.bind(this));

    // \ST[n] = get Skill Type name based on id
    text = text.replace(/\x1bst\[(\d+)\]/gi, function() {
		
        //return $skilltypes[parseInt(arguments[1])];
		pluck($skilltypes, 0);
		
    }.bind(this));
	
	// \SO[n] = get Sound by id
    text = text.replace(/\x1bso\[(\d+)\]/gi, function() {
		
        //return $sounds[parseInt(arguments[1])].name
		pluck($sounds, 1);
		
    }.bind(this));
		
    // Finish
    return text;
	
};

//=============================================================================
// END FILE
//=============================================================================