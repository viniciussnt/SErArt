const frutas = [
    { nome: "maklin bordados", url: "./pages/perfis/bordados/maklinbordados.html" },
    { nome: "sofia mertz", url: "../SErArt/pages/perfis/bordados/sofiamertz.html" },
    { nome: "casa rechiliê", url: "./SErArt/pages/perfis/bordados/casarechilie.html" },
    { nome: "cris musse", url: "/SErArt/pages/perfis/bordados/crismusse.html" },    
    { nome: "sandyalê", url: "../pages/perfis/musica/sandyale.html" },
    { nome: "the baggios", url: "/pages/perfis/musica/thebaggios.html" },
    { nome: "morgana", url: "/pages/perfis/musica/morgana.html" },
    { nome: "cidade dormitório", url: "/pages/perfis/musica/casadormitorio.html" },
    { nome: "eli bolos", url: "/pages/perfis/culinaria/elibolos.html" },
    { nome: "mafeitaria", url: "/pages/perfis/culinaria/mafeitaria.html" },  
    { nome: "terra tupi", url: "/pages/perfis/culinaria/terratupi.html" },  
    { nome: "aloha truf's", url: "/pages/perfis/culinaria/alohatrufs.html" }  
];

const campoBusca = document.getElementById('campoBusca');
const sugestoes = document.getElementById('artistas');

// Mostrar sugestões enquanto digita
campoBusca.addEventListener('input', function () {
    const valor = campoBusca.value.toLowerCase();
    sugestoes.innerHTML = '';
    if (valor) {
        const filtradas = frutas.filter(f => f.nome.includes(valor));
        filtradas.forEach(f => {
            const div = document.createElement('div');
            div.textContent = f.nome;
            div.onclick = function () {
                campoBusca.value = f.nome;
                sugestoes.innerHTML = '';
            };
            sugestoes.appendChild(div);
        });
    }
});

// Função ao clicar no botão pesquisar
function pesquisarFruta() {
    const valor = campoBusca.value.trim().toLowerCase();
    const fruta = frutas.find(f => f.nome === valor);
    if (fruta) {
        // Redireciona para a página da fruta
        window.location.href = fruta.url;
    } else {
        alert('Artista não encontrado!');
    }
}

// Esconde sugestões ao clicar fora
document.addEventListener('click', function (e) {
    if (!sugestoes.contains(e.target) && e.target !== campoBusca) {
        sugestoes.innerHTML = '';
    }
});