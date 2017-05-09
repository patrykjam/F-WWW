var counter;

var scrollListener = function () {
    $(window).one("scroll", function () { //unbinds itself every time it fires
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
            switch (counter) {
                case 1:
                    addSecondColumn();
                    break;
                case 2:
                    addThirdColumn();
                    break;
                case 3:
                    addLastColumn();
                    break;
                default:
                    break;
            }
            console.log("Loaded " + counter);
        }
        if (counter < 4)
            scrollListener();
    });
};

addFirstColumn = function () {
    addRow(1);
    addColumnWithElement(6, 1, 1, "LG 43UH603V", "Przekątna ekranu 43\"\n" +
        "Rozdzielczość: 3840 x 2160 (UHD 4K)\n" +
        "Smart TV: Tak\n" +
        "Klasa energetyczna: A+\n", 700, 500, 2, "images/tvlg1.jpg");

    addColumnWithElement(6, 1, 2, "Samsung UE55KU6000", "Przekątna ekranu 55\"\n" +
        "Rozdzielczość: 3840 x 2160 (UHD 4K)\n" +
        "Smart TV: Tak\n" +
        "Klasa energetyczna: A+\n", 700, 500, 2, "images/tvsamsung1.jpg", "images/tvsamsung2.jpg");
    counter = 1;
    checkRow(1, 2, 2);
};

addSecondColumn = function () {
    counter = 0;
    addRow(2);
    addColumnWithElement(6, 2, 1, "LG 43LH510V", "Przekątna ekranu 43\"\n" +
        "ozdzielczość: 1920 x 1080\n" +
        "Smart TV: Nie\n" +
        "Klasa energetyczna: A+\n", 700, 500, 2, "images/tvlg2.jpg");
    addColumnWithElement(6, 2, 2, "LG 32LH570U", "Przekątna ekranu 43\"\n" +
        "Rozdzielczość: 1366 x 768 (HD)\n" +
        "Smart TV: Tak\n" +
        "Klasa energetyczna: A+\n", 700, 500, 2, "images/tvlg3.jpg");
    counter = 2;
    checkRow(2, 2, 2);
    return false;
};

addThirdColumn = function () {
    counter = 0;
    addRow(3);
    addColumnWithElement(6, 3, 1, "Sony KDL-40WD650", "Przekątna ekranu 43\"\n" +
        "Rozdzielczość: 1920 x 1080\n" +
        "Smart TV: Tak\n" +
        "Klasa energetyczna: A+", 700, 500, 2, "images/tvsony1.jpg");
    addColumnWithElement(6, 3, 2, "Samsung UE40K5500", "Przekątna ekranu 40\"\n" +
        "Rozdzielczość: 1920 x 1080\n" +
        "Smart TV: Tak\n" +
        "Klasa energetyczna: A", 700, 500, 2, "images/tvsamsung3.jpg");
    counter = 3;
    checkRow(3, 2, 2);
};

addLastColumn = function () {
    counter = 0;
    addRow(4);
    addColumnWithElement(6, 4, 1, "LG 49LH570V", "Przekątna ekranu 49\"\n" +
        "Rozdzielczość: 1920 x 1080\n" +
        "Smart TV: Tak\n" +
        "Klasa energetyczna: A+", 700, 500, 2, "images/tvlg4.jpg");
    addColumnWithElement(6, 4, 2, "Samsung UE49K5500", "Przekątna ekranu 49\"\n" +
        "Rozdzielczość: 1920 x 1080\n" +
        "Smart TV: Tak\n" +
        "Klasa energetyczna: A+", 700, 500, 2, "images/tvsamsung4.jpeg");
    counter = 4;
    checkRow(4, 2, 2);

};

$(document).ready(function () {

    addFirstColumn();

    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
        addSecondColumn();
    }

    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
        addThirdColumn();
    }

    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
        addLastColumn();
    }

    scrollListener();


    $('.carousel').carousel({
        interval: false
    });
});