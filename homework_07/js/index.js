(function ($) {
    let boardArr = [], player = 1, board, row, greet = $('.greet');
    const boardSize = 15;

    function init() {
        greet.hide();
        board = $('.board').on('click', 'div.cell', move);
        $('#turn').addClass(`p${player}`);

        generateBoard();
    }

    function generateBoard() {
        for (let i = 0; i < boardSize; i++) {
            boardArr[i] = new Array(boardSize);
            row = $('<div class="row"></div>');
            board.append(row);

            for (let j = 0; j < boardSize; j++) {
                boardArr[i][j] = 0;
                let cell = $(`<div class="cell" data-i="${i}" data-j="${j}"></div>`);

                row.append(cell);
            }
        }
    }

    function move() {
        let i = $(this).attr('data-i');
        let j = $(this).attr('data-j');

        if (!boardArr[i][j]) {
            boardArr[i][j] = player;
            $(this).addClass(`p${player}`);

            if (checkWin()) {
                getGreet();
                generateBoard();
            }

            $('#turn').removeClass(`p${player}`);

            player = (player === 1) ? 2 : 1;

            $('#turn').addClass(`p${player}`);
        }
    }

    function checkWin() {
        for (let r = 0; r < boardSize; r++) {
            for (let c = 0; c < boardSize; c++) {
                let temp = boardArr[r][c];
                if (temp === 0) {
                    continue;
                }

                if (c + 3 < boardSize &&
                    temp == boardArr[r][c + 1] &&
                    temp == boardArr[r][c + 2] &&
                    temp == boardArr[r][c + 3]) {
                    return temp;
                }
                if (r + 3 < boardSize) {
                    if (temp == boardArr[r + 1][c] &&
                        temp == boardArr[r + 2][c] &&
                        temp == boardArr[r + 3][c]) {
                        return temp;
                    }
                    if (c + 3 < boardSize &&
                        temp == boardArr[r + 1][c + 1] &&
                        temp == boardArr[r + 2][c + 2] &&
                        temp == boardArr[r + 3][c + 3]) {
                        return temp;
                    }
                    if (c - 3 >= 0 &&
                        temp == boardArr[r + 1][c - 1] &&
                        temp == boardArr[r + 2][c - 2] &&
                        temp == boardArr[r + 3][c - 3]) {
                        return temp;
                    }
                }
            }
        }
        return 0;
    }

    function getGreet() {
        let color = (player === 1) ? 'White' : 'Black';
        $('.greet p').empty();
        $('.greet p').append(`${color} won!!!`);
        greet.show();

        $('.close').on('click', function () {
            board.empty();
            generateBoard();
            greet.hide('slow');
        });
    }

    init();

})(jQuery);