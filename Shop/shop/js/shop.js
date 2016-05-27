function hideInactiveCatalogItems() {

    setTimeout(function() { 

        var x = document.getElementsByClassName('catalog-item');
        var n = x.length;
        for (var i = 0; i < n; i++) {
            if (x[i].classList.contains("catalog-item-active")) {
                x[i].style.display = "block";
            } else {
                x[i].style.display = "none";
            }
        }

    }, 500);
    
}

function section_click(sender, classTag) {
    
    // disable all section headers
    var x = $('.section-active');
    x.removeClass('section-active');
    x.addClass('section-inactive');
    
    // highlight the clicked section header
    x = sender.classList;
    x.remove('section-inactive');     
    x.add('section-active');     

    $('.catalog-item').removeClass("catalog-item-active");
    $('.'+ classTag).addClass("catalog-item-active");
    
    hideInactiveCatalogItems();
    
}

/*

    if (classTag === "catalog-item") {

        $('.catalog-item').css({"opacity":"1", "display":"visible"});
        
    } else {
        
        var onSaleOpacity = "0";
        var onSaleDisplay = "none";
        var staffPicksOpacity = "0";
        var staffPicksDisplay = "none";
        var newReleasesOpacity = "0";
        var newReleasesDisplay = "none";
        
        if (classTag === 'tagged-new-releases') { newReleasesOpacity = "1"; newReleasesDisplay = "visible"};
        if (classTag === 'tagged-on-sale') { onSaleOpacity = "1"; onSaleDisplay = "visible"};
        if (classTag === 'tagged-staff-picks') { staffPicksOpacity = "1"; staffPicksDisplay = "visible"};
    
        $('.tagged-new-releases').css({"opacity":newReleasesOpacity, "display":newReleasesDisplay});
        $('.tagged-on-sale').css({"opacity":onSaleOpacity, "display":onSaleDisplay});
        $('.tagged-staff-picks').css({"opacity":staffPicksOpacity, "display":staffPicksDisplay});
        $('.tagged-other').css({"opacity":"0", "display":"none"});

    }    
*/
