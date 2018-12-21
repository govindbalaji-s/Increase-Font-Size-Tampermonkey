# Increase-Font-Size-Tampermonkey
Tampermonkey Script to increase/decrease font size of every element in the document.
# How to use
Copy the contents of IncreaseFontSize.js and paste it as a new Tampermonkey Script.
1. When the script is enabled, font size of each element increases by 1 as the page loads.
2. To increase or decrease it by a custom value, open up the web console and call `cFS(x);` where `x` is the increase in font size, you need. To decrease , supply a negative value for `x`.
3. Calling `cFS(0)` resets the font sizes to the default font sizes of the document.
