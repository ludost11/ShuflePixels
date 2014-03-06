window.onload = function() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        // resize the canvas to occupy the full page
        var W = window.innerWidth;
        var H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
        // some variables
        var col = 0;
        var row = 0;
        var w = 20;
        var numPixels = Math.ceil((W * H) / (w*w))+(Math.max(W,H));
        init();
        function rainbow(n) {
          n = n * 255 / (numPixels-Math.max(W,H)); // could be 255
          var p = Math.floor(Math.random()*255)
          var q = Math.floor(Math.random()*255)
          var r = Math.floor(Math.random()*10)
          var s = 1
          console.log(n); 
          return 'rgba('+ p +', '+ q +', '+ r +', '+ s +')';
        }
        function init() {
                // filling the canvas white
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, W, H);
                var colors = []
                for (var i = 1; i <= numPixels; i++) { colors.push(i); }
                col = 0; row = 0;
                shuffle(colors);
                colors.forEach(function(c) { printPixel(c); })
                setTimeout(init, 50);
        }
        function printPixel(c) {
                ctx.beginPath();
                if (row*w > H) {
                  col++;
                  row = 0;
                }
                ctx.rect(col*w, row*w, w, w);
                ctx.fillStyle = rainbow(c);
                ctx.fill();
                row++;
        }
        

    function shuffle(array) {

      var currentIndex = array.length , temporaryValue , randomIndex ;

      // While there remain elements to shuffle...

      while (0 !== currentIndex) {

        // Pick a remaining element...

        randomIndex = Math.floor(Math.random() * currentIndex);

        currentIndex -= 1;

        // And swap it with the current element.

        temporaryValue = array[currentIndex];

        array[currentIndex] = array[randomIndex];

        array[randomIndex] = temporaryValue;

      }

      return array;

    }

    function onmouseup ( e ) {

       alert()

    }

}

