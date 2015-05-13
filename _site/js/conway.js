 $(document).ready(function() {

     Number.prototype.mod = function(n) {
         return ((this%n)+n)%n;
     };
     
    // Canvas stuff.
    var width;
    var height;
    
    const cellSize = 25;

    var canvas = $("#left")[0];
    var ctx = canvas.getContext("2d");
    $('#left').css('background-color', '#ebdbb2');

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
        setTimeout(function() {
            window.requestAnimationFrame(animate);
        }, 60);
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
        ctx.shadowColor = "#282828";
        drawCells(dead, "#282828");
        ctx.shadowColor = "#689d6a";
        drawCells(live, "#689d6a");
        live = nextLive;
        nextLive = {};
    }
    
    function setup() {
        //for (var i = 0; i < boardWidth - 0; i++) {
        //    live[new Coord(i, Math.round(boardHeight / 2))] = new Coord(i, Math.round(boardHeight / 2));
        //    //live.push(new Coord(i, Math.round(boardHeight / 2)));
        //}
        var toAdd = [
            new Coord(21, 20),
            new Coord(20, 22),
            new Coord(21, 22),
            new Coord(24, 22),
            new Coord(25, 22),
            new Coord(26, 22),
            new Coord(23, 21),
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
