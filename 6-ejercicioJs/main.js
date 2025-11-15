$(document).ready(function() {
    $('#searchButton').click(function() {
        var query = $('#searchInput').val().trim();

        if(query === '') {
            $('#resultsList').html('<li style="color: red;">Por favor, introduzca un nombre.</li>');
            return;
        }

        $.ajax({
            url: `https://api.github.com/search/users?q=${query}`,
            method: 'GET',
            success: function(data) {
                if(data.items.length > 0) {
                    $('#resultsList').empty(); // limpiar resultados anteriores

                    // recorrer todos los usuarios encontrados
                    data.items.forEach(function(user) {
                        $('#resultsList').append(`
                            <li>
                                <img src="${user.avatar_url}" width="80" style="border-radius:50%">
                                <strong>${user.login}</strong><br>
                                <a href="${user.html_url}" target="_blank">Ver perfil</a>
                            </li>
                        `);
                    });
                } else {
                    $('#resultsList').html('<li style="color:red">No se encontraron usuarios</li>');
                }
            },
            error: function() {
                $('#resultsList').html('<li style="color: red;">Error en la búsqueda.</li>');
            }
        });
    });
});
