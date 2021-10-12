
class game {

    constructor(element_id, rows = 6, cols = 7) {
        this.rows = rows
        this.cols = cols


        this.tableau = Array(this.rows);
        for (var x = 0; x < this.rows; x++) {
            this.tableau[x] = Array(this.cols).fill(0);
        }

        this.turn = 1

        this.move = 0;
    }



}