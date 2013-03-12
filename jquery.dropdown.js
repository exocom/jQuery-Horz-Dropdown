(function($,document){
	$.dropdown = function(context,settings){
		var t = this,
			$menuItem = $(context), // Store the indviual menu item
			$dropdown = null,
			$parent = null,
			collision = null,
			s = $.extend(true,{}, {
				dropdown: '> ul',
				collision: {
					enable: true,
					side: 'right',
					parent: '.menu',
					ignoreBorder: true
				},
				transition: {
					speed: 500, //
					duration: 500,
					delay: 190
				},
				afterReveal: function(){
					//console.log('revealed dropdown!');
				},
				afterConceal: function() {
					//console.log('concealed the dropdown');
				}
			}, settings);

		t.external = {
			'hide': function(){
				$dropdown.hide();  // You could add a class instead of using .hide()
			},
			'reveal': function(){
				$dropdown.stop(true, true).delay(s.transition.delay).slideDown({
					progress: function() { $menuItem.data('dropdown').adjustPosition(); },
					duration: s.transition.duration,
					complete: s.afterReveal
				}); // You could create your own effect instead of using slideDown
			},
			'conceal': function(){
				$dropdown.stop(true, true).delay(s.transition.delay).slideUp(s.transition.duration,s.afterConceal); // You could create your own effect instead of using slideUp;
			},
			'adjustPosition': function(){
				if(s.collision.enable && (collision = t.internal.collision($dropdown,$parent,s.collision.side)).hasCollision){ // Check if collision is enabled and if a position change needs to happen
					switch(s.collision.side){
					case 'left':
						break;
					case 'right':
					default:	
						$dropdown.css('left',collision.adjustment);
						break;
					};
				}
			},
			revealProcess: function(e){
				t.external.reveal();
				t.external.adjustPosition();
				
			},
			concealProcess: function(){
				//t.external.adjustPosition();
				t.external.conceal();				
			},
			bindEvents: function(){
				$menuItem.bind('mouseenter.dropdown',$menuItem.data('dropdown').revealProcess);
				$menuItem.bind('mouseleave.dropdown',$menuItem.data('dropdown').concealProcess);
			}
		}
		
		t.internal = {
			'collision': function($a,$b,side){
				var a = $a.offset(), b = $b.offset();
				// TODO : add ignoreborder logic on left
				switch(side){
				case 'left':
					var c = (a.left < b.left) ? true : false;
					break;
				case 'right':
				default:
					a = (s.collision.ignoreBorder) ? a.left + $a.innerWidth() + parseInt($a.css('border-left-width')) : a.left + $a.outerWidth();
					b = b.left + $b.width();
					adj = (b - a);
					var c = (a > b) ? true : false;
					break;
				}
				return {'hasCollision':c,'adjustedOffsetLeft':{0:a,1:b},'adjustment':adj};
			},'init': function(){
				$dropdown = $menuItem.find(s.dropdown);
				if($dropdown.length != 1){
					// TODO : Throw warning.  Ie no drop down found, or multiple triggers, skipping
					return;
				}
				$menuItem.data('dropdown',t.external); // set the dropdown object on the menu item. This allows it to be manipulated on the fly

				// Hide the dropdown
				t.external.hide();
				// Setup the events
				t.external.bindEvents();
				if(s.collision.enable){
					// Set up collision detection
					$parent = $menuItem.parents(s.collision.parent); // TODO : make it so you can pass the jQuery object or parent selector
					if($parent.length != 1){
						s.collision.enable = false;
						// TODO : Throw warning that one item was not found for parent.  Currenlty only one collision element is supported
					}
				}
			}
		};
		// Call the init method
		t.internal.init();
	}
	$.fn.dropdown = function(settings) {
		return this.each(function() { // Make this chainable, so all of the matched elements are returned.
			new $.dropdown(this,settings); // Apply dropdown to each of the matched elements
		});
	};
	
})(jQuery,document)