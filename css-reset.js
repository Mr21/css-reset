$(function() {

	function btngrp() {
		var	btnThis = this,
			jq_a = $(this).children(),
			jq_oldA = jq_a.filter(".css-selected");
		jq_a.click(function() {
			var jq_this = $(this);
			if (!jq_this.hasClass("css-selected")) {
				jq_oldA.removeClass("css-selected");
				jq_this.addClass("css-selected");
				jq_oldA = jq_this;
				if (btnThis.cssBtngrpCallback)
					btnThis.cssBtngrpCallback.call(jq_this);
			}
		});
		if (!jq_oldA[0])
			jq_a.eq(0).click();
	}

	$(".css-btngrp").each(btngrp);

	$(document.body).on('DOMNodeInserted', function(e) {
		var jq_target = $(e.target);
		if (!jq_target.hasClass(".css-btngrp"))
			jq_target = jq_target.find(".css-btngrp");
		jq_target.each(btngrp);
	});

});
