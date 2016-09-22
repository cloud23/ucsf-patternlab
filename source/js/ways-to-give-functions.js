$(function(){
	var $giveOptionLabel = $('.ways-to-give-option label'),
		$defaultValueObj = $('input[name="give-value"][value="100"]'),
		$giveOtherField = $('#give_value_other_field');


		$giveOtherField.on({
			keydown: function(e) {
				var keyPressed = (e.keyCode) ? e.keyCode : e.which;

				/* LIST OF ALLOWED KEYS
				 * - Select All(Ctrl/Cmd+A) [65]
				 * - Paste (Ctrl/Cmd+V) [86]
				 * - Navigation Keys (Up, Down, Left, Right, Home, End) [35 ~ 40]
				 * - Num Row Keys (Only when shift key is not pressed.) [48 ~ 57]
				 * - Numpad Keys [96 ~ 105]
				 * - Delete [45]
				 * - Insert [46]
				 * - Backspace [8]
				 * - Tab [9]
				 * - Refresh Key [116]
				 */

				if( (( keyPressed == 65 || keyPressed == 86) && ( e.ctrlKey || e.metaKey  ))
					|| (keyPressed >= 35 && keyPressed <= 40)
					|| (keyPressed >= 48 && keyPressed <= 57 && !(e.shiftKey || e.altKey))
					|| (keyPressed >= 96 && keyPressed <= 105)
					|| (keyPressed == 45) || (keyPressed == 46)
					|| (keyPressed == 8) || (keyPressed== 9)
					|| (keyPressed == 116)
					) {
					return true;
				}

				return false;
			},
			change: function(e) {
				var currentValue = $(this).val();
				if(!new RegExp('^[0-9]*$').test(currentValue)) {
					$(this).val(currentValue.replace(/\D/g, ""));
				}
			},
			focusin: function(e) {
				e.preventDefault();
				$(this).prev().prev().prop('checked', true);
				var val = $(this).val(),
				$label = $(this).prev().find('.label-text');
				if( '' != val) {
					 return;
				}
				$label.hide();
			},
			focusout: function(e) {
				e.preventDefault();
				var val = $(this).val(),
				$label = $(this).prev().find('.label-text');
				if( '' != val) {
					 return;
				}
				$(this).prev().prev().prop('checked', false);
				$defaultValueObj.prop('checked', true);
				$label.show();
			}
		});

		$giveOptionLabel.on('click',function(){
			$giveOtherField.val('').prev().find('.label-text').show();
		});

});
