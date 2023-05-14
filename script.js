
// get input 
$(document).ready(function() {
    $("#result").hide()
    $(".modal-xiaoyi").hide();
    $("#btn-get").click(function(){
        let link=$("#txt-input").val()
        let api="https://convert2mp3s.com/api/widgetv2?url="
        if(link !== ""){
            $("#widgetv2Api").prop({
                "width":"100%",
                "height":"100%",
                "min-height":"800px",
                "scrolling":"no",
                "src":api+link,
            })
            iFrameResize({ log: false, minHeight: 400 }, '#widgetv2Api')
            $("#result").show()
        } else {
            $("#result").hide()
            $(".xiaoyi-container").addClass("faded-xiaoyi")
            $(".modal-xiaoyi").show();
        }
    });

    $("#btn-ok").click(function(){
        $("#txt-input").focus()
        $(".xiaoyi-container").removeClass("faded-xiaoyi")
        $(".modal-xiaoyi").hide();
    });
});
