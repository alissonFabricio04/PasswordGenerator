import geradorSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdC = document.querySelector('.qtd-c');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

console.log(
    qtdC.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked,
)

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
        
    })
}

function gera() {
    const senha = geradorSenha(
        qtdC.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked,
    );

    return senha || 'Nada selecionado';
}

