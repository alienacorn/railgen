// ==UserScript==
// @name           PVE Rail Map
// @namespace      https://github.com/leafstorm/railgen
// @description    PVE Rail Map
// @include        *nerd.nu/maps/pve*
// @require            http://github.com/sizzlemctwizzle/GM_config/raw/master/gm_config.js
// ==/UserScript==
//
// The userscript and code for interacting with the dynamic
// map were adapted from http://janitor61.com/mcpoi/
//


GM_config.init(
{
    'railDataURL':
    {
	'label': 'Rail data URL',
	'type': 'text',
	'default': 'http://dl.dropbox.com/u/35326912/railmap/userscript/dynmap.js',
        'size': 100
    }
});
GM_registerMenuCommand("Change rail data URL",function(){GM_config.open()},"c");

var railDataURL = GM_config.get('railDataURL');

window.setTimeout(function() {
    rail_script=window.document.createElement('SCRIPT');
    rail_script.type='text/javascript';
    rail_script.src=railDataURL+'?x='+(Math.random());
    window.document.getElementsByTagName('head')[0].appendChild(rail_script);
}, 10);