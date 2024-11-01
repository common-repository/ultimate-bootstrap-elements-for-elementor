(function ($) {
	function UbeFlipBoxHandler() {
		if (elementorFrontend.isEditMode()) {
			elementor.channels.editor.on('section:activated', function (sectionName, editor) {
				var editedElement = editor.getOption('editedElementView');

				if ('ube-flip-box' !== editedElement.model.get('widgetType')) {
					return;
				}
				var isSideBSection = -1 !== ['flip_box_section_back', 'flip_box_section_back_style'].indexOf(sectionName);
				editedElement.$el.toggleClass('ube-flip-box-flipped', isSideBSection);
				var $backLayer = editedElement.$el.find('.ube-flip-box-back');

				if (isSideBSection) {
					$backLayer.css('transition', 'none');
				}
				if (!isSideBSection) {
					setTimeout(function () {
						$backLayer.css('transition', '');
					}, 10);
				}
			});
		}
	}

	 window.addEventListener( 'elementor/frontend/init', () => {
		elementorFrontend.hooks.addAction("frontend/element_ready/ube-flip-box.default", UbeFlipBoxHandler);
	});

})(jQuery);
