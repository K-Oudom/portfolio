import $ from 'jquery';

$(() => {
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

    const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];
    const url = $(location).attr('href');
    const lastPart = url.substring(url.lastIndexOf('/') + 1) || 'home';
    const activeId = sections.includes(lastPart) ? lastPart : 'home';

    $.each(sections, function(_, id) {
        $('#' + id).toggleClass('active', id === activeId);
    });
});


// const ulLink = () => {
//     document.addEventListener('DOMContentLoaded', function() {
//         const links = document.querySelectorAll('ul li a');
        
//         links.forEach(link => {
//             link.addEventListener('click', function() {
//             links.forEach(l => l.classList.remove('active'));
//             this.classList.add('active');
//             });
//         });
//     });
// }
// export default ulLink