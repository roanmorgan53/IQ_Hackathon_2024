
function doThis() {
    document.addEventListener("DOMContentLoaded",
        function () {
            setTimeout(function () {
                document.getElementById("preloader")
                .style.display = "none";
                setTimeout(function ()
            {
                document.getElementById("splash")
                .style.display = "none";
                document.getElementById("content")
                .style.display = "block";
                addLiveAnimations();
            }, 3000);
        }, 1000);
    })
};
