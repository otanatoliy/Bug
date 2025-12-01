# Bug Animation Project

This project animates a bug moving horizontally across the screen with a sinusoidal (wave-like) vertical motion. The animation is implemented in JavaScript and displayed in a browser using HTML and CSS.

## Features
- The bug moves smoothly from left to right.
- The vertical position of the bug follows a sine wave pattern.
- Animation stops when the bug reaches the edge of the container.

## File Structure
- `index.html`: Main HTML file containing the structure and container for the bug animation.
- `css/style.css`: Styles for the bug and container.
- `js/script.js`: JavaScript logic for animating the bug.

## How It Works
- The bug's horizontal position (`X`) increases at a constant speed.
- The vertical position (`Y`) is calculated using a sine function for smooth wave motion.
- The animation uses `requestAnimationFrame` for smooth rendering.

## Usage
1. Open `index.html` in your browser.
2. Watch the bug move in a wave pattern across the screen.

## Customization
- Adjust `speedX`, `amplitude`, and `frequency` in `js/script.js` to change the bug's movement.

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge, etc.)

## License
MIT License
