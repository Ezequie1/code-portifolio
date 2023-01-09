var expSelected = document.getElementById('inmetrics');
var experiencias = ['<div class="flex maxWidth"><p class="textoLocal">Trainee Tecnico l</p><p class="dataJob">Abr 2022 - Atual</p></div><div class="maxWidth"><p class="empresaNome">Inmetrics</p><p class="textoInfos">Atuo na parte de engenharia de software, em específico no back-end, entregando ao cliente soluções tecnológicas e eficientes conforme suas prioridades e requisitos.</p></div>', '<div class="flex maxWidth"><p class="textoLocal">Balconista de padaria</p><p class="dataJob">Fev 2021 - Abr 2022</p></div><div class="maxWidth"><p class="empresaNome">Delícias do Balneario</p><p class="textoInfos">Atendia clientes e auxiliava nos afazeres da padaria.</p></div>', '<div class="flex maxWidth"><p class="textoLocal">Vendedor</p><p class="dataJob">Out 2016 - Fev 2021</p></div><div class="maxWidth"><p class="empresaNome">Alpha Magazzine</p><p class="textoInfos">Atuava como vendedor, auxiliando clientes mostrando mercadorias conforme suas preferências. Controlava a entrada e saída de cédulas do caixa, fazia a reposição de mercadorias, etc. </p></div>']
var divExperiencia = document.getElementById('divExperiencia');

var divCerti = document.getElementById('divCertificacao');
var certificacaoSelecionada = document.getElementById('institutoProa');
var certificacoes = ['<div class="flex maxWidth"><p class="textoLocal">Proprofissão 4.0</p><p class="dataJob">Mar 2021 - Jul 2021</p></div><div class="maxWidth"><p class="empresaNome">Instituto Proa</p><p class="textoInfos">Participei do curso proprofissão 4.0 do Instituto Proa, o qual me preparou com conhecimentos em Java, HTML, CSS e JavaScript, para assim poder se inserir no mercado de trabalho. Desde então venho aprimorando os conhecimentos obtidos durante o curso, e os aplicando no dia a dia de trabalho.</p></div><div class="flex end"><p class="space">Veja no meu</p><a href="https://linkedin.com/in/ezequielamoura/details/education/"><div class="divbutton1"><button class="botoes"><img class="icones buttons2" src="svg/linkedin.svg"><span class="buttons2">LinkedIn</span></button></div></a></div>','<div class="flex maxWidth"><p class="textoLocal">AWS Week</p><p class="dataJob">Emitido em Jul 2022</p></div><div class="maxWidth"><p class="empresaNome">Ka Solution</p><p class="textoInfos">Curso da Ka Solution com ênfase em AWS e os principais serviços disponibilizados por ela, no curso foi apresentado os serviços mais utilizados da AWS, além de dicas para quem quer tirar a certificação de Cloud Pratictioner oferecido pela AWS.</p></div><div class="flex end"><p class="space">Veja no meu</p><a href="https://www.linkedin.com/in/ezequielamoura/details/certifications/"><div class="divbutton1"><button class="botoes"><img class="icones buttons2" src="svg/linkedin.svg"><span class="buttons2">LinkedIn</span></button></div></a></div>', '<div class="flex maxWidth"><p class="textoLocal">LGPD</p><p class="dataJob">Emitido em Jul 2022</p></div><div class="maxWidth"><p class="empresaNome">Inmetrics</p><p class="textoInfos">    Curso proposto pela Inmetrics á fim de que os colaboradores tenham conhecimento sobre a LGPD(Lei geral de proteção de dados). O curso aborda a lei e mostra a importancia de seu conhecimento para a proteção dos dados mais que sensíveis de clientes.</p></div><div class="flex end"><p class="space">Veja no meu</p><a href="https://www.linkedin.com/in/ezequielamoura/details/certifications/">    <div class="divbutton1">        <button class="botoes"><img class="icones buttons2" src="svg/linkedin.svg"><span class="buttons2">LinkedIn</span></button>    </div>  </a></div>', `<div class="flex maxWidth"><p class="textoLocal">Cursos e formações Alura</p><p class="dataJob">Emitido em Mai 2022</p></div><div class="maxWidth"><p class="empresaNome">Alura</p><p class="textoInfos">    Aqui está os cursos que fiz na plataforma de estudos Alura. Os cursos abrangem tecnologias como Java, Node, HTML5, AWS(Cloud), Docker e Git.</p></div><div class="flex end"><p class="space">Veja na plataforma</p><a href="https://cursos.alura.com.br/user/ezequiel-moura/fullCertificate/3a981e0a0be70561f380fd0d9da79480">    <div class="divbutton1">        <button class="botoes"><img class="icones buttons2" src="svg/link.svg"><span class="buttons2">Alura</span></button>    </div>  </a></div>`, `<div class="flex maxWidth"><p class="textoLocal">Introdução ás OKR's</p><p class="dataJob">Emitido em Mai 2022</p></div><div class="maxWidth"><p class="empresaNome">Qulture.Rocks</p><p class="textoInfos">    O curso traz á tona OKR's, comumente utilizado para rastrear o progresso de uma equipe à medida que o time se move em direção a objetivos alinhados com as necessidades da empresa. Curso mais que necessário para o desenvolvimento coletivo dos colaboradores da empresa.</p></div><div class="flex end"><p class="space">Veja no meu</p><a href="https://www.linkedin.com/in/ezequielamoura/details/certifications/">    <div class="divbutton1">        <button class="botoes"><img class="icones buttons2" src="svg/linkedin.svg"><span class="buttons2">LinkedIn</span></button>    </div>  </a></div>`, `<div class="flex maxWidth"><p class="textoLocal">Educação Financeira</p><p class="dataJob">Emitido em Jun 2021</p></div><div class="maxWidth"><p class="empresaNome">C6 Bank</p><p class="textoInfos">    A fim da estabilidade financeira independente do salário da pessoa, o curso mostra estratégias mais que eficientes para administrar o dinheiro ganho, e até mesmo possíveis fontes de rendas alternativas.</p></div><div class="flex end"><p class="space">Veja no meu</p><a href="https://www.linkedin.com/in/ezequielamoura/details/certifications/">    <div class="divbutton1">        <button class="botoes"><img class="icones buttons2" src="svg/linkedin.svg"><span class="buttons2">LinkedIn</span></button>    </div>  </a></div>`, `<div class="flex maxWidth"><p class="textoLocal">Oracle Analytics</p><p class="dataJob">Emitido em Jun 2021</p></div><div class="maxWidth"><p class="empresaNome">Oracle</p><p class="textoInfos">    Curso feito pela Oracle em parceria com o Instituto Proa para o desenvolvimento da capacidade de analizar dados, e a partir destes dados, propor soluções para problemas encontrados.</p></div><div class="flex end"><p class="space">Veja no meu</p><a href="https://www.linkedin.com/in/ezequielamoura/details/certifications/">    <div class="divbutton1">        <button class="botoes"><img class="icones buttons2" src="svg/linkedin.svg"><span class="buttons2">LinkedIn</span></button>    </div>  </a></div>`];

function expSelecionada(elemento, index){
    expSelected.classList.remove('itensExpSelected')

    if(window.screen.width <= 550){
        expSelected.classList.remove('itensExpSelectedHorizontal')
        expSelected = elemento;
        expSelected.classList.add('itensExpSelectedHorizontal')
        divExperiencia.innerHTML = experiencias[index];
    }else{   
        expSelected = elemento;
        expSelected.classList.add('itensExpSelected')
        divExperiencia.innerHTML = experiencias[index];
    }
}

function certSelecionada(elemento, index){
    certificacaoSelecionada.classList.remove('itensExpSelected');

    if(window.screen.width <= 550){
        certificacaoSelecionada.classList.remove('itensExpSelectedHorizontal')
        certificacaoSelecionada = elemento;
        certificacaoSelecionada.classList.add('itensExpSelectedHorizontal');
        divCerti.innerHTML = certificacoes[index];
    }else{
        certificacaoSelecionada = elemento;
        certificacaoSelecionada.classList.add('itensExpSelected');
        divCerti.innerHTML = certificacoes[index];
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

