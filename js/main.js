(function ($) // début du pluggin
{


    $.fn.game4 = function () //function game du pluggin
    {
        var grid = new Array(6);

        for (var i = 0; i < grid.length; i++) {
            grid[i] = new Array(7);
            for (var j = 0; j < grid[i].length; j++) {
                grid[i][j] = 0;
            }
        }

        window.onload = function () {
            var minusBtn = document.getElementById("minus"),
                plusBtn = document.getElementById("plus"),
                numberPlace = document.getElementById("numberPlace"),
                number = 0, /// number value
                min = 0, /// min number
                max = 5; /// max number

            var minus2Btn = document.getElementById("minus2"),
                plus2Btn = document.getElementById("plus2"),
                numberPlace2 = document.getElementById("numberPlace2"),
                number2 = 0, /// number value
                min = 0, /// min number
                max = 5; /// max number
            minusBtn.onclick = function () {
                if (number > min) {
                    number = number - 1; /// Minus 1 of the number
                    numberPlace.innerText = number; /// Display the value in place of the number

                }
                if (number == min) {
                    numberPlace.style.color = "red";
                    setTimeout(function () { numberPlace.style.color = "black" }, 500)
                }
                else {
                    numberPlace.style.color = "black";
                }

            }
            plusBtn.onclick = function () {
                if (number < max) {
                    number = number + 1;
                    numberPlace.innerText = number; /// Display the value in place of the number
                }
                if (number == max) {
                    numberPlace.style.color = "red";
                    setTimeout(function () { numberPlace.style.color = "black" }, 500)
                }

                else {
                    numberPlace.style.color = "black";
                }


            }
            minus2Btn.onclick = function () {
                if (number2 > min) {
                    number2 = number2 - 1; /// Minus 1 of the number
                    numberPlace2.innerText = number2; /// Display the value in place of the number

                }
                if (number2 == min) {
                    numberPlace2.style.color = "red";
                    setTimeout(function () { numberPlace2.style.color = "black" }, 500)
                }
                else {
                    numberPlace2.style.color = "black";
                }

            }
            plus2Btn.onclick = function () {
                if (number2 < max) {
                    number2 = number2 + 1;
                    numberPlace2.innerText = number2; /// Display the value in place of the number
                }
                if (number2 == max) {
                    numberPlace2.style.color = "red";
                    setTimeout(function () { numberPlace2.style.color = "black" }, 500)
                }

                else {
                    numberPlace2.style.color = "black";
                }


            }

        }




        // génération du tableau (table, tr, td) vide (rempli de zéros)
        function generate_map() {

            var table = $('<table></table>');
            for (var y = 0; y < 6; y++) {
                var ligne = $('<tr></tr>');
                for (var x = 0; x < 7; x++) {

                    if (grid[y][x] === 0) {
                        var classCase = "empty"
                    }
                    else if (grid[y][x] === 1) {
                        var classCase = "yellow"
                    }
                    else if (grid[y][x] === 2) {
                        var classCase = "red"
                    }

                    var mydiv = $('<div class="' + classCase + '" x=' + x + ' y=' + y + ' " ></div>').on("click", function () {
                        console.log(player)
                        // $(this).addClass(player).removeClass("empty")
                        player = switchplayer(player)
                        console.log(mydiv)
                        // mydiv.attr("x")
                        console.log(mydiv.attr("x"))



                        for (var j = 5; j >= 0; j--) {
                            x = $(this).attr("x")
                            console.log(classCase)
                            var cases = $('div').filter('[x="' + x + '"][y="' + j + '"]');
                            console.log(cases, cases.attr('class'))
                            if ("empty" == cases.attr('class')) {
                                cases.addClass(player).removeClass("empty")
                                console.log(cases)
                                break;
                            }
                        }

                    })
                    var mycase = $('<td></td>').attr('x', x).attr('y', y).append(mydiv);
                    ligne.append(mycase);
                }
                table.append(ligne);
            }

            return table;
        }

        function switchplayer(player) {
            if (player == "red") {
                document.getElementById("currentPlayer").innerHTML = "<h2>red</h2>"
                player = "yellow"
            }
            else {
                player = "red"
                document.getElementById("currentPlayer").innerHTML = "<h2>yellow</h2>"
            }
            return player
        }

        function checkEndgame() {

            //vérif si joueur a gagné horizontalement
            for (var r = 0; r < 6 - 3; x++) {
                for (var t = 0; t < 7; t++) {
                    if (this.board[t][r] == player && this.board[t][r + 1] == player && this.board[t][r + 2] == player && this.board[t][r + 3] == player) {
                        return true;

                    }
                } console.log(1)
            }
        }



        function gameIsRunning() {
            return true;
        }

        player = "red"

        while (gameIsRunning) {
            //switch joueurs



            // player = "empty"
            // player = (player === 'red') ? 'yellow' : 'red';

            // var player = 1;
            // var winner = 0;
            // var colors = {};
            // colors[-1] = "yellow";
            // colors[1] = "red";
            // var count = 0;

            // $(".empty").each(function () {
            //     $(this).attr("id", count);
            //     $(this).attr("")
            // })





            // début du code lancé
            $(this).html(generate_map()); // génération du tableau vide
            // verif jeu non terminé
            if (checkEndgame()) {




                gameIsRunning = false;
            }
        }
    }
})(jQuery); // fin du pluggin


// test code 
    //     $(document).ready(function () {
    //         $("Games.td").hover(
    //             function () {
    //                 $(this).addClass("yellow");
    //             },
    //             function () {
    //                 $(this).removeClass("yellow")
    //             }
    //         )
    //     })


        // var player = 1;
        // var winner = 0;
        // var colors = {};
        // colors[-1] = "yellow";
        // colors[1] = "red";
        // var count = 0;

        // $(".empty").each(function () {
        //     this.attr("id", count);
        //     this.attr("data-player", 0);
        //     count++;

        //     $(this).click(function () {
        //         if (isValid($(this).attr("id"))) {
        //             $(this).css("background-color", colors[player])
        //             $this.attr("data-player", player)

        //             player *= -1
        //         }
        //     })
        // })
