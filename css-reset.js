var cssReset = {
	callback: function(el, fn) {
		el.cssResetCallback = fn;
		if (!el.cssResetInitialised)
			this.btngrp(el);
	},
	btngrp: function(el) {
		var	btnThis = el,
			jq_a = $(el).children(),
			jq_oldA = jq_a.filter(".css-selected");
		el.cssResetInitialised = true;
		jq_a.click(function() {
			var jq_this = $(this);
			if (jq_this.hasClass("css-selected")) {
				return false;
			}
			jq_oldA.removeClass("css-selected");
			jq_this.addClass("css-selected");
			jq_oldA = jq_this;
			if (btnThis.cssResetCallback)
				return btnThis.cssResetCallback.call(jq_this);
		});
		if (!jq_oldA[0])
			jq_a.eq(0).click();
	}
};
