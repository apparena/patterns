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
		'aa-icon-browser': '&#xe900;',
		'aa-icon-bullhorn': '&#x1f4ef;',
		'aa-icon-chart': '&#x1f4c9;',
		'aa-icon-check': '&#x2714;',
		'aa-icon-chevron-down': '&#x2304;',
		'aa-icon-chevron-left': '&#x2039;',
		'aa-icon-chevron-right': '&#x203a;',
		'aa-icon-chevron-up': '&#x2c4;',
		'aa-icon-circle': '&#x20dd;',
		'aa-icon-close': '&#x2297;',
		'aa-icon-cloud-upload': '&#x2601;',
		'aa-icon-cog': '&#x2699;',
		'aa-icon-comment-chart': '&#xe90c;',
		'aa-icon-digital-chart': '&#xe90d;',
		'aa-icon-download': '&#xe90e;',
		'aa-icon-exclamation-circle': '&#xfe57;',
		'aa-icon-external-link': '&#x1f517;',
		'aa-icon-eye': '&#x1f440;',
		'aa-icon-file-pdf': '&#x1f4c2;',
		'aa-icon-file': '&#x1f4c1;',
		'aa-icon-flag': '&#x2691;',
		'aa-icon-grid-full': '&#xa81f;',
		'aa-icon-grid-two': '&#x25e8;',
		'aa-icon-heart-filled': '&#x2665;',
		'aa-icon-heart': '&#x2661;',
		'aa-icon-info-circle': '&#x2139;',
		'aa-icon-label': '&#xe0023;',
		'aa-icon-line-chart': '&#x1f4b9;',
		'aa-icon-lock': '&#x1f512;',
		'aa-icon-log-in': '&#x20ef;',
		'aa-icon-log-out': '&#x20ee;',
		'aa-icon-menu-circle': '&#xe91f;',
		'aa-icon-minus': '&#x208b;',
		'aa-icon-mouse-click': '&#x298;',
		'aa-icon-pencil-circle': '&#x2710;',
		'aa-icon-pencil': '&#x270e;',
		'aa-icon-play-circle': '&#xe924;',
		'aa-icon-plus': '&#x2295;',
		'aa-icon-responsive': '&#x1f4bb;',
		'aa-icon-search-circle': '&#x1f50e;',
		'aa-icon-search': '&#x1f50d;',
		'aa-icon-shield': '&#x101db;',
		'aa-icon-sort-amount-asc': '&#xe92a;',
		'aa-icon-sort-amount-desc': '&#xe92b;',
		'aa-icon-star': '&#x2605;',
		'aa-icon-time': '&#x1f553;',
		'aa-icon-upload': '&#xe92e;',
		'aa-icon-user-circle': '&#x1f471;',
		'aa-icon-user': '&#x1f64e;',
		'aa-icon-users': '&#xe931;',
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
