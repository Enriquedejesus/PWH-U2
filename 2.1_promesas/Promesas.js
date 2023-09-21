async function mostrarCardApi() {
    
    const respuesta = await fetch('https://randomuser.me/api/');
    const data = await respuesta.json();
    const usuario = data.results[0];
    agregarNuevoCard(usuario);

  
}
/*  Nuevo card */
function agregarNuevoCard(usuario) {
    const nuevoCard = document.createElement('div');
    nuevoCard.className = 'col-md-4 user-card';
    nuevoCard.innerHTML = `
      <div class="card">
        <img src="${usuario.picture.large}" class="card-img-top" alt="xxx">
        <div class="card-body">
          
        <h5 class="card-title">${usuario.name.first} ${usuario.name.last}</h5>
         
          <p class="card-text">Sexo: ${usuario.gender}</p>

          <p class="card-text">Edad: ${usuario.dob.age}</p>

          <p class="card-text">Correo: ${usuario.email}</p>
          
          </div>
        </div>
      </div>
    `;
   
    const contenedorCards = document.querySelector('.row');
    contenedorCards.appendChild(nuevoCard);
  }
  
  document.getElementById('generar-btn').addEventListener('click', mostrarCardApi);
  