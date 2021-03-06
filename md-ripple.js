;(function() {
    const device = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    const showEvent = device ? 'touchstart' : 'mousedown';
    const hideEvent = device ? 'touchend' : 'mouseup';
    $(document).on(showEvent, '[ripple]', function(e){
        if (e.button == 2){
            return false
        }
    	$ripple = $('<span class="ripple-effect" />'),
    	$button = $(this),
    	$offset = $button.offset(),
    	xPos = device && 'touches' in e ? ( e.touches[0].pageX - $offset.left ) : (e.pageX - $offset.left),
    	yPos = device && 'touches' in e ? ( e.touches[0].pageY - $offset.top ) : (e.pageY - $offset.top),
    	$color = $button.data('ripple-color') || $button.css('color'),
    	scaledSize = Math.max( $button.width() , $button.height()) * Math.PI * 1.5;
    	$ripple.css({
    		'top': yPos,
    		'left': xPos,
    		'background-color': $color
    	}).appendTo( $button ).animate({
    		'height': scaledSize,
    		'width': scaledSize,
    	}, 700/3*2)
        $(document).on(hideEvent, $button, function (e) {
            $ripple.animate({
                'opacity': 0
            }, 700/3, function () {
                $(this).remove()
            })
        })
    })
}());
