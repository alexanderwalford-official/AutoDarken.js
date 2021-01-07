# AutoDarken.js
A simple script that automatically adjusts the relevent CSS classes to a "darkmode" theme when the user's timezone is late. This script can be added to existing projects or even new projects. 

### Website Installation (RSL CDN)
Installation is very simple, just do the following;
1. Add <code><script src="https://renovatesoftware.com:140/js/AutoDarken.js"></script></code> right before your closing body tag.
2. Give the ID of "WhiteText" to the relevent elements you wish to set the text colour to white when dark mode mod is enabled. 

#### Time Triggers
Dark mode will be enabled between 8PM and 7AM.

#### Manually Calling Dark Or Lightmode
1. To call dark mode, simply call <code>ActivateDarkMode();</code> in a script section of your website or on a click event.
2. To call light mode, simply call <code>ActivateLightMode();</code> in a script section of your website or on a click event.
