 $(document).ready(function() {

     Number.prototype.mod = function(n) {
         return ((this%n)+n)%n;
     };
     
    // Canvas stuff.
    var width;
    var height;
    
    const cellSize = 25;

    var paused = true;

    var canvas = $("#left")[0];
    var ctx = canvas.getContext("2d");
    $('#left').css('background-color', '#ebdbb2');

    $(".pause").click(function () {
        if (paused) {
            paused = false;
            animate();
            $(".pause").text("Pause background");
        } else { 
            paused = true;
            $(".pause").text("Unpause background");
        }
    });

    (function() {
        window.addEventListener("resize", resizeCanvas, false);
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            width = window.innerWidth;
            height = window.innerHeight;
            boardHeight = Math.floor(height / cellSize);
            boardWidth = Math.floor(width / cellSize);
        }
        resizeCanvas();

    })();

    // Game stuff.
    var boardHeight = Math.floor(height / cellSize);
    var boardWidth = Math.floor(width / cellSize);

    function animate() {
        ctx.clearRect(0, 0, width, height);
        go();
        if (!paused) {
            setTimeout(function() {
                window.requestAnimationFrame(animate);
            }, 120);
        }
    }

    function Coord(x, y) {
        this.x = x;
        this.y = y;
    }

    Coord.prototype.toString = function coordToString() {
        return this.x + ", " + this.y;
    }
 
    var live = {};
    var nextLive = {};
    var dead = {};
    var wasAlive = {};

    function contains(arr, c) {
        return arr.hasOwnProperty(c);
    }

    function decideFate(c) {
        var fate = countLiveNeighbors(c);
        if (fate == 3) {
            wasAlive[c] = c;
            nextLive[c] = c;
        } else if (fate == 4) {
            if (live.hasOwnProperty(c)) {
                nextLive[c] = c;
            }
        } else {
            if (wasAlive.hasOwnProperty(c)) {
                dead[c] = c;
            }
        }
    }

    function drawCells(cells, color) {
        ctx.fillStyle = color;
        for (var key in cells) {
            if (cells.hasOwnProperty(key)) {
                var c = cells[key];
                ctx.fillRect(c.x * cellSize, c.y * cellSize, cellSize, cellSize);
            }
        }
    }

    function go() {
        for (var x = 0; x < boardWidth; x++) {
            for (var y = 0; y < boardHeight; y++) {
                decideFate(new Coord(x, y));
            }
        }
        ctx.shadowBlur = 20;
        ctx.shadowColor = "darkgray";
        drawCells(dead, "darkgray");
        ctx.shadowColor = "#5f819d";
        drawCells(live, "#5f819d");
        live = nextLive;
        nextLive = {};
    }
    
    function setup() {
        //for (var i = 0; i < boardWidth - 0; i++) {
        //    live[new Coord(i, Math.round(boardHeight / 2))] = new Coord(i, Math.round(boardHeight / 2));
        //    //live.push(new Coord(i, Math.round(boardHeight / 2)));
        //}
        var toAdd = [
            new Coord(11, 10),
            new Coord(10, 12),
            new Coord(11, 12),
            new Coord(14, 12),
            new Coord(15, 12),
            new Coord(16, 12),
            new Coord(13, 11),
            ];
        toAdd.forEach(function(c) {
            live[c] = c;
        });
    }

    function countLiveNeighbors(c) {
        var count = 0;
        for (var x = c.x - 1; x <= c.x + 1; x++) {
            for (var y = c.y - 1; y <= c.y + 1; y++) {
                if (live.hasOwnProperty(new Coord(x.mod(boardWidth), y.mod(boardHeight)))) {
                    count++;
                }
            }
        }
        return count;
    }

    function coordEq(a, b) {
        return a.x == b.x && a.y == b.y;
    }

    setup();
    animate();
});
