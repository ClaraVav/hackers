$(function(){
    /* Získá všechny záznamy z movies.json prostřednictvím AJAX požadavku */
    function getAll() {
        $.ajax({
            url: 'http://localhost:3000/hackers',
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                $('#list').html('');
                data.forEach(function(guy) {
                    $('#list').append('<tr><td id="idx">'+guy.id
                        +'</td><td><a href="#" data-id="'+guy.id+'">'+guy.name
                        +'</a></td><td>'+guy.what+'</td><td>'+guy.now
                        +'</td><td><button class="btn delete" data-id="'+guy.id
                        +'">Smazat</button></td></tr>');
                });
                $('#list a').on('click', function(){
                    getById($(this).data('id'));
                }); 
                $('.delete').on('click', function(){
                    deleteById($(this).data('id'));
                }); 
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    /* Získá jeden záznam podle id */
    function getById(id) {
        $.ajax({
            url: 'http://localhost:3000/hackers/' + id,
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                $('#id').val(data.id);
                $('#name').val(data.name);
                $('#what').val(data.what);
                $('#now').val(data.now);
                $('#modalId').modal('show');
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    /* Smazat záznam podle id */
    function deleteById(id) {
        $.ajax({
            url: 'http://localhost:3000/hackers/' + id,
            type: 'DELETE',
            dataType: 'json',
            cache: false,
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                getAll();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    /* Vytvořit nový záznam */
    function create(data) {
        $.ajax({
            url: 'http://localhost:3000/hackers',
            type: 'POST',
            data: data,
            dataType: 'json',            
            contentType: 'application/json',
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                getAll();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    /* Editovat záznam */
    function update(id, data) {
        $.ajax({
            url: 'http://localhost:3000/hackers/' + id,
            type: 'PUT',
            data: data,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data, textStatus, xhr) {
                console.log(textStatus);
                console.log(data);
                getAll();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        })
    }

    $('button#submit').on('click', function(){
        var json = {};
        json.name = $('#name').val();
        json.what = $('#what').val();
        json.now = $('#now').val();
        var data = JSON.stringify(json);
        if ($('#id').val()) {
            update($('#id').val(), data);
        } else {
            create(data);
        }
    });

    $('button#create').on('click', function(){
        $('#id').val('');
        $('#name').val('');
        $('#what').val('');
        $('#now').val('');
    });

    getAll();
});
