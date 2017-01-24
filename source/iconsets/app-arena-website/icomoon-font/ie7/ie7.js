/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'app-arena-website\'">' + entity + '</span>' + html;
	}
	var icons = {
		'aa-icon-slider-arrow-left': '&#x2b9c;',
		'aa-icon-slider-arrow-right': '&#x2b9e;',
		'aa-icon-arrow-right': '&#x2192;',
		'aa-icon-arrow-right-circle': '&#x21e2;',
		'aa-icon-Neue_Nutzerdaten_generieren_fill': '&#x1f4ca;',
		'aa-icon-aa-analytics': '&#x1f4c8;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/aa-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());