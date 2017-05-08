var counter;

var scrollListener = function () {
    $(window).one("scroll", function () { //unbinds itself every time it fires
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
            switch (counter) {
                case 1:
                    addSecondColumn();
                    break;
                case 2:
                    counter = 0;
                    addRow(3);
                    addColumnWithElement(3, 3, 1, "HP 17",
                        "Procesor: Intel Core i5-7200U\n" +
                        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
                        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/hp11.jpg", "images/hp12.jpg");
                    addColumnWithElement(3, 3, 2, "HP 15",
                        "Procesor: Intel Core i3-6100U\n" +
                        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
                        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/hp21.jpg");
                    addColumnWithElement(3, 3, 3, "Dell Inspiron 5767",
                        "Procesor: Intel Core i5-7200U\n" +
                        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
                        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/dell11.jpg", "images/dell12.jpg", "images/dell13.jpg",
                        "images/dell14.jpg");
                    addColumnWithElement(3, 3, 4, "MSI GL62",
                        "Procesor: Intel Core i5-7200U\n" +
                        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
                        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/msi11.jpg");
                    counter = 3;
                    checkRow(3, 1, 4);
                    break;
                case 3:
                    counter = 0;
                    addRow(4);
                    addColumnWithElement(3, 4, 1, "MacBook Pro",
                        "Procesor: Intel Core i5-7200U\n" +
                        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
                        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/macbook-pro.jpg", "images/macbookpro.png",
                        "images/pro.jpg");
                    counter = 4;
                    checkRow(4, 1, 1);
                    break;
                default:
                    break;
            }
            console.log("Loaded " + counter);
        }
        setTimeout(scrollListener, 100); //rebinds itself after 200ms
    });
};

addSecondColumn = function () {
    counter = 0;
    addRow(2);
    addColumnWithElement(3, 2, 1, "ASUS R540SA",
        "Procesor: Intel Celeron N3050\n" +
        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/asus51.jpg");
    addColumnWithElement(3, 2, 2, "ASUS R558UQ",
        "Procesor: Intel Core i5-7200U\n" +
        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/asus41.jpg");
    addColumnWithElement(3, 2, 3, "Lenovo V110-15",
        "Procesor: Intel Celeron N3450\n" +
        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/lenovo11.jpg", "images/lenovo12.jpg");
    addColumnWithElement(3, 2, 4, "Lenovo V111-15",
        "Procesor: Intel Core i5-7200U\n" +
        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/lenovo21.jpg");
    counter = 2;
    checkRow(2, 1, 4);
    return false;
};

$(document).ready(function () {
    console.log("in ready");
    scrollListener();

    addRow(1);
    addColumnWithElement(3, 1, 1, "Macbook Air", "Procesor: Intel Core i5-5250U\n" +
        "Pamięć: 8 GB (SO-DIMM DDR3, 1600 MHz)\nDysk: 128 GB SSD M.2 PCIe\n" +
        "Grafika: Intel HD Graphics 600\n" +
        "Typ ekranu: Błyszczący, LED\n" +
        "OS X El Capitan",350, 228, 1, "images/macbookair.png", "images/macbook-air.jpg");

    addColumnWithElement(3, 1, 2, "ASUS R558UA",
        "Procesor: Intel Core i5-7200U\n" +
        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
        "Dysk: 256 GB SSD SATA III",350, 228, 1, "images/asus11.jpg");

    addColumnWithElement(3, 1, 3, "ASUS R540SA",
        "Procesor: Intel Celeron N3050\n" +
        "Pamięć: 4 GB \n" +
        "Dysk: 1000 GB SATA 5400",350, 228, 1, "images/asus21.jpg", "images/asus22.jpg", "images/asus23.jpg");

    addColumnWithElement(3, 1, 4, "ASUS R540LJ",
        "Procesor: Intel Core i3-5005U\n" +
        "Pamięć: 8 GB (SO-DIMM DDR4, 2133MHz)\n" +
        "Dysk: 1000 GB SATA 5400",350, 228, 1, "images/asus41.jpg");

    checkRow(1, 1, 4);
    counter = 1;

    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
        addSecondColumn();
    }

    $('.carousel').carousel({
        interval: false
    });
});