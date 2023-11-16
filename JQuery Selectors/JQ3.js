function func1()
{
    //$(element name).action()
    //document.getElementByTageName(element name)

    /*
    changes the color to orange:
    $("div").css('background-color','orange');
    */

    /*
    changes the font of first div, p1 to italic)
    $("#p1").css('font-style','italic');
    */

    //changes both of the box p's to itallic
    //$(".para").css("font-style","italic");

    //changes color of div 1 and 2
    //$("#div1,#div2").css('background-color','green');

    //changes color of 1 and 3
   //$("#div1,#div3").css('background-color','green');

    $("#div1, li").css('background-color','purple');
}