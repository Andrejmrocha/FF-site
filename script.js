document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[confirmacao]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const confirmed = confirm('Deseja acessar o link para o YouTube?');
            if(!confirmed) {
                event.preventDefault();
            }
        })
    })
})
