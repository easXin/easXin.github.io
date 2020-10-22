$(document).ready(_ => {
    $("ul>li:nth-child(1)").click(_=> {
        $("#aboutMe").attr("href", "#about");
    })
    $("ul>li:nth-child(2)").click(_ => {
        $("#skills").attr("href", "#skillSet");
    });
    $("ul>li:nth-child(3)").click(_ => {
        $("#exp").attr("href", "#experience");
    });
    $("ul>li:nth-child(4)").click(_ => {
        $("#proj").attr("href", "#project");
    });
    $("ul>li:nth-child(5)").click(_ => {
        $("#journey").attr("href", "#millstone");
    });
    $("ul>li:nth-child(6)").click(_ => {
        $("#cv").attr("href", "media/resume.pdf");
    });
})