window.addEventListener('load', function () {

    // **************************************
    // ****** Example 2 - Rectangles ********
    // **************************************
    var example2 = document.getElementById('canvas2');

    // Check if canvas element exists and if it has a context
    if (example2 && example2.getContext) {

        // Sets the context of the canvas element to 2D
        var context2 = example2.getContext('2d');

        if (context2) {

            // ReCtangle with just a stroke:
            
            context2.strokeStyle = 'pink'; // Style to use on object strokes - can be a color, gradient or pattern
            context2.lineWidth = 5; // Width of line drawn in pixels
            context2.strokeRect(25, 25, 100, 125); // Draw the rectangle stroke (starting point x, starting point y, width, height)
            
            // Rectange with just a fill
            
            context2.fillStyle = 'skyblue'; // Style to use when filling objects - can be a color, gradient or pattern
            context2.fillRect(175, 25, 100, 125); // Draw the rectange fill (starting point x, starting point y, width, height)
            
            // Rectangle with both stroke and fill
            
            context2.strokeStyle = 'darkcyan';
            context2.fillStyle = 'yellow';
            context2.lineWidth = 10;
            context2.fillRect(325, 25, 100, 125);
            context2.strokeRect(325, 25, 100, 125);
            
            // Clear the area in this rectange 
            // context2.clearRect(15, 75, 450, 50);

        }
    }


    // **************************************
    // ****** Example 3 - Lines ********
    // **************************************
    var example3 = document.getElementById('canvas3');

    if (example3 && example3.getContext) {

        var context3 = example3.getContext('2d');

        if (context3) {

            // Basic line
        
            context3.strokeStyle = 'darkcyan';
            context3.lineWidth = 10;
            // context3.setLineDash([10, 5]);   // Makes the line dashed (takes an array of numbers that specifies the distances to alternately draw a line and a gap)
            context3.beginPath(); // Begins a new set of drawing commands as a single path
            context3.moveTo(50, 50); // Starting point (x co-ord, y co-ord)
            context3.lineTo(450, 50); // Draw line to this point (x co-ord, y co-ord)
            context3.stroke(); // Collects all the commands and draws them, ending this set of drawing commands
            
        }

    }

    // Different types of line caps:
    var example3_1 = document.getElementById('canvas3_1');

    if (example3_1 && example3_1.getContext) {
        var context3_1 = example3_1.getContext('2d');
        if (context3_1) {

            context3_1.lineWidth = 25;
            context3_1.strokeStyle = 'darkmagenta';

            // Butt
            
            context3_1.lineCap = 'butt';
            context3_1.beginPath();
            context3_1.moveTo(50, 50);
            context3_1.lineTo(450, 50);
            context3_1.stroke();
            
            // Round
            
            context3_1.lineCap = 'round';
            context3_1.beginPath();
            context3_1.moveTo(50, 100);
            context3_1.lineTo(450, 100);
            context3_1.stroke();
            
            // Square
            
            context3_1.lineCap = 'square';
            context3_1.beginPath();
            context3_1.moveTo(50, 150);
            context3_1.lineTo(450, 150);
            context3_1.stroke();
            
        }

    }

    // Different types of line joins:
    var example3_2 = document.getElementById('canvas3_2');

    if (example3_2 && example3_2.getContext) {
        var context3_2 = example3_2.getContext('2d');
        if (context3_2) {

            context3_2.lineWidth = 15;
            context3_2.strokeStyle = 'navy';

            // Round
            
            context3_2.lineJoin = 'round';
            context3_2.beginPath();
            context3_2.moveTo(25, 150);
            context3_2.lineTo(75, 50);
            context3_2.lineTo(125, 150);    // Second line to draws another line to another point (you can have as many lineTo's as you want while in a set of drawing commands)
            context3_2.stroke();
            
            // Bevel
            
            context3_2.lineJoin = 'bevel';
            context3_2.beginPath();
            context3_2.moveTo(175, 150);
            context3_2.lineTo(225, 50);
            context3_2.lineTo(275, 150);
            context3_2.stroke();
            
            // Miter
            
            context3_2.lineJoin = 'miter';
            context3_2.beginPath();
            context3_2.moveTo(325, 150);
            context3_2.lineTo(375, 50);
            context3_2.lineTo(425, 150);
            context3_2.stroke();
            
        }
    }


    // **************************************
    // ** Example 4 - Using loops to draw ***
    // **************************************
    var example4 = document.getElementById('canvas4');

    if (example4 && example4.getContext) {

        var context4 = example4.getContext('2d');
        if (context4) {

            // TO DO: Use a loop to draw multiple things
            for (var i = 0; i < 15; i++) {
                context4.beginPath();
                context4.lineWidth = i + 1;
                context4.lineCap = 'round';
                context4.moveTo(25, 25 + i * 15);
                context4.lineTo(475, 25 + i * 15);
                context4.stroke();
            }

        }

    }


    // **************************************
    // ******** Example 5 - Paths **********
    // **************************************
    var example5 = document.getElementById('canvas5');

    if (example5 && example5.getContext) {

        var context5 = example5.getContext('2d');
        if (context5) {

            context5.strokeStyle = 'crimson';
            context5.fillStyle = 'darkslategrey';
            context5.lineWidth = 5;

            // Draw an open path
            
            context5.beginPath();
            context5.moveTo(25, 175);
            context5.lineTo(50, 25);
            context5.lineTo(125, 50);
            context5.lineTo(175, 175);
            context5.stroke();
            
            // Draw a closed path
            
            context5.beginPath();
            context5.moveTo(225, 175);
            context5.lineTo(250, 25);
            context5.lineTo(325, 50);
            context5.lineTo(375, 175);
            // This closes the path by connecting the end point (last lineTo) with the start point (the moveTo)
            context5.closePath();    // Notice that the path is not filled       
            context5.stroke();
            
            // Draw and fill an open path
            
            context5.beginPath();
            context5.moveTo(425, 175);
            context5.lineTo(450, 25);
            context5.lineTo(525, 50);
            context5.lineTo(575, 175);
            context5.fill();        // Fill the inside of this object
            context5.stroke();            
            
        }

    }


    // **************************************
    // ******** Example 6 - Arcs ************
    // **************************************
    var example6 = document.getElementById('canvas6');

    if (example6 && example6.getContext) {

        var context6 = example6.getContext('2d');
        if (context6) {

            context6.strokeStyle = 'teal';
            context6.fillStyle = 'maroon';
            context6.lineWidth = 5;

            // Quarter arc (half of Pi) going clockwise
            
            context6.beginPath();
            context6.arc(150, 150, 100, 0, 0.5 * Math.PI, false);   // Draw an arc (x co-ord, y co-ord, radius, start angle, end angle, anti-clockwise?)
            context6.stroke();
            
            // Quarter arc (half of Pi) going anti-clockwise
            
            context6.beginPath();
            context6.arc(400, 150, 100, 0, 0.5 * Math.PI, true);
            context6.stroke();
            
            // Half circle (Pi)
            
            context6.beginPath();
            context6.arc(150, 400, 100, 0, Math.PI);
            context6.stroke();
            
            // Full circle (2Pi)
            
            context6.beginPath();
            context6.arc(400, 400, 100, 0, 2 * Math.PI);
            context6.fill();
            context6.stroke();

        }

    }


    // **************************************
    // ******** Example 7 - Text ************
    // **************************************
    var example7 = document.getElementById('canvas7');

    if (example7 && example7.getContext) {

        var context7 = example7.getContext('2d');
        if (context7) {

            var theString = 'Hello World';

            // draw the string with some font information
            
            context7.font = '35px Verdana'
            context7.fillText(theString, 60, 60);
            
            // draw the string with a fillStyle color
            
            context7.fillStyle = 'darkgreen';
            context7.fillText(theString, 60, 100);
            
            // draw the string with both a stroke and a fill with some opacity setting
            
            context7.font = '35px Cambria'
            context7.fillStyle = 'orange';
            context7.strokeStyle = 'black';
            context7.fillText(theString, 60, 160);
            context7.strokeText(theString, 60, 160);
            
        }

    }


});