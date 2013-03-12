<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <title>Neat Template</title>
        <meta name="description" content="Tool">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.0/themes/cupertino/jquery-ui.css">
		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/css/bootstrap-combined.min.css">
		<link rel="stylesheet" href="default.css">
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js" type="text/javascript"></script>
		<script src="jquery.dropdown.js"></script>
		<script type="text/javascript">
			$(document).ready(function() {
				$('.menu > ul > li').dropdown({transition:{duration:100},collision:{ignoreBorder:true}});
			});
		</script>
    </head>
    <body>
		<div class="container">
			<div class="row">
				<div class="span12">
					<nav class="menu">
						<ul class="ui-helper-clearfix">
							<li>
								<span>Menu Option 1 (Not a link)</span>
								<ul>
									<li><a href="#option1">Option 1</a></li>
									<li><a href="#option1">Option 2</a></li>
									<li><a href="#option1">Option 3</a></li>
								</ul>
							</li>
							<li>
								<a href="#menu-option">Menu Option 2 (Is a link)</span>
								<ul>
									<li><a href="#option1">Option 1</a></li>
									<li><a href="#option1">Option 2</a></li>
									<li><a href="#option1">Option 3</a></li>
								</ul>
							</li>
							<li class="full">
								<a href="#menu-option">Menu Option 3 (Is a link, Full Width Drop Down)</span>
								<ul>
									<li><a href="#option1">Option 1</a></li>
									<li><a href="#option1">Option 2</a></li>
									<li><a href="#option1">Option 3</a></li>
								</ul>
							</li>
							<li>
								<a href="#menu-option">Menu Option 4 (Is a link)</span>
								<ul>
									<li><a href="#option1">Option 1</a></li>
									<li><a href="#option1">Option 2</a></li>
									<li><a href="#option1">Option 3</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		<div class="progress progress-striped active ui-helper-hidden">
			<div class="bar" style="width: 100%;"></div>
		</div>
	</body>
</html>
