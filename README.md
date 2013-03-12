jQuery-Horz-Dropdown
====================

A simple lightweight Horizontal Drop down for primary navigation.

V1.0

Basic functionality, no js dependencies.  Does require css.

What you need to know about the CSS:

Non full width dropdown:
<div>
	<ul>
		<li> (CSS Position Relative)
			<a>Drop Down</a>
			<ul> (CSS Position Absolute with left:0)
				<li>Option One</li>
				<li>Option Two</li>
			<ul>
		</li>
	<ul>
<div>


Full width dropdown:
<div> (CSS  this needs to be the site container IE 960px wide)
	<ul> (CSS Position Relative display block so it inheirts 960px width)
		<li> (CSS Position Static so the drop down does not inheirt the width of this li)
			<a>Drop Down</a>
			<ul> (CSS Position Absolute with left:0 width: 100% = 960px)
				<li>Option One</li>
				<li>Option Two</li>
			<ul>
		</li>
	<ul>
<div>

Both full and non full width:
<div> (CSS  this needs to be the site container IE 960px wide)
	<ul> (CSS Position Relative display block so it inheirts 960px width)
		<li> (CSS Position Static so the drop down does not inheirt the width of this li)
			<a>Drop Down</a>
			<ul> (CSS Position Absolute with left:0 width: 100% = 960px) FULL WIDTH
				<li>Option One</li>
				<li>Option Two</li>
			<ul>
		</li>
		<li> (CSS Position Relative)
			<a>Drop Down</a>
			<ul> (CSS Position Absolute with left:0) NON FULL WIDTH
				<li>Option One</li>
				<li>Option Two</li>
			<ul>
		</li>
	<ul>
<div>