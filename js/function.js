window.onload= function() {

    var modal = document.getElementById('modal');

    document.getElementById('corse_registr').onclick = openModal;

    document.onclick = function() {

        if ( event.target.className === 'modal' || event.target.className === 'registr_close') {

            document = closeModal();

        };

    };

};


function openModal() {

    modal.style.display = 'flex';

}

function closeModal() {

    modal.style.display = 'none';

}