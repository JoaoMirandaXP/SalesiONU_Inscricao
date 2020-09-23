//É obrigatório sempre importar o react nas aplicações
import React from 'react';
//importando estilização da página 
import './style/Global.css'
import './style/App.css'
import './style/Main.css'
import './style/Comite.css'
import './style/Footer.css'
import './style/Form.css'
import './style/Secretariado.css'
import './style/Header.css'

//Importando componentes da página 
import Header from './Header'
import Form from './Form'
import Comite from './Comite'
import Secretariado from './Secretariado'
import Footer from './Footer'


function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Secretariado className="secretariado" name="Secretariado">
        <p id="intro">
        Prezados delegados e jornalistas, sejam bem-vindos à SALESIONU 2020!
        </p>
        <p>
        Com o lema: "Somando a partir da diferença" nesta segunda edição, os senhores irão trabalhar com problemáticas de âmbito mundial, observando as diferenças visões e interpretações que cada delegação possui, chegando juntos à conclusões e métodos para intervir e resolver o problema central.
        </p>
        <br/>
        <p>
        É através da delegação escolhida ou do jornal escolhido, que será desenvolvido o pensamento crítico, a argumentação e o trabalho em equipe, com ganho individual de expansão de visão de mundo, um maior conhecimento sobre geopolítica, diplomacia e retórica.  
        </p>
        <br/>
        <p>
        Durante o evento, espera-se que os senhores passem a ver o debate e o diálogo como poderosas ferramentas no mundo moderno, e como estes podem criar mudanças e ações positivas para a comunidade, desde uma escala interpessoal até uma escala nacional ou global.
        </p>
        <br/>
        <p>
        Esperamos que visualizem os diálogos nos debates como importantes ferramentas para o crescimento individual, interpessoal e do grupo. Estando ciente de que ações como essas podem originar ações positivas para o meio em que vive, ao país e ao mundo… Almejando assim, um futuro leve, positivo e mais igualitário.
        </p>
        <br/>
        <p>
        Aos senhores delegados, jornalistas e equipe organizadora da SALESIONU, desejamos uma ótima simulação e uma experiência inesquecível! 
        </p>
        <br/>
        <ul>
          <li id="assin">
            <p id="nome_da_pessoa">Giovana Borges Cursino Bianconi</p>
            <p id="cargo">(Secretária Geral)</p>
          </li>
          <br/>
          <li id="assin">
            <p id="nome_da_pessoa">Mariana Soares Moreira</p>
            <p id="cargo">(Vice-Secretária Geral)</p>
          </li>
          <br/>
          <li id="assin">
            <p id="nome_da_pessoa">Beatriz Dias Beolchi Adami</p>
            <p id="cargo">(Secretária de Logística)</p>
          </li>
        </ul>
        <iframe title="video-secretariado-1"  src="https://www.youtube.com/embed/OcclenRW8HA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <br/>
        <iframe title="video-secretariado-2"  src="https://www.youtube.com/embed/fsg7hZeVnzU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <br/>
        <span>Email para contato: <a href="mailto:salesionu@gmail.com">salesionu@gmail.com</a></span>
        </Secretariado>
        
        <Comite id="acnur" className="comites" loc_image="/UI/acnur.png">
        <p id="intro">
        Prezados delegados 
        </p>
        <p>
        Sendo o Alto Comissariado das Nações Unidas (ACNUR) ligado ao atendimento de pessoas que, por necessidades e risco de vida, tiveram de deixar seus países de origem, auxiliando os indivíduos nestas condições a estabelecerem-se em um local onde estejam a salvo, o foco da discussão do comitê deste ano será o continente africano e seus emigrados. Além do sofrimento com a xenofobia, o racismo é uma realidade a ser mudada pela qual refugiados provenientes do Sudão, Nigéria e Congo, por exemplo, passam, especialmente em países ocidentais. A discussão para que a repatriação sem preconceito ocorra é extremamente necessária, uma vez que o histórico de cada parte da África faz com que as conseqüências para o local sejam tão complexas. Assim, o comitê fica feliz em anunciar o tema “África: Histórico, Consequências e Refugiados” a ser debatido na Salesionu 2020.  
        </p>
        <p id="end">Atenciosamente</p>
        <ul>
          <li>Juliana Lima</li>
          <li>Nara Araujo</li>
          <li>Sara Teixeira</li>
        </ul>
        <iframe title ="acnur-video-1"src="https://www.youtube.com/embed/D22SL9awSHM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <br/>
        <iframe title  ="acnur-video-2"src="https://www.youtube.com/embed/X1wFLifH14Y" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <br/>
        <div className="roteiros">
          <p><a href="/files/Guia de Estudos - Imprensa.pdf" download><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>Clique aqui para baixar o Roteiro de Estudos da Acnur</p>
        </div>
        <span>Email para contato: <a href="mailto:acnursalesionu2020@gmail.com">acnursalesionu2020@gmail.com</a></span>
        
        </Comite>
        
        <Comite className="comites" id="csnu" loc_image="/UI/csnu.png">
        <p id="intro">Prezados delegados,</p>
        <p>O Conselho de Segurança das Nações Unidas (CSNU), um órgão com papel extremamente importante em todo o mundo, que é o de zelar pela manutenção da paz e segurança internacional. Tendo em mãos tamanha responsabilidade, gerenciando-a de forma justa e eficaz.</p>
        <br/>
        <p>A partir disso o comitê irá abordar temas que afetam o mundo de uma forma muito negativa, principalmente na região do oriente médio. Portanto o tema escolhido foi "Guerra na Síria", visando gerar uma discussão abrangente e atual, todos os dias batalhas são travadas no território Sírio e milhares de pessoas perdem suas vidas por conflitos religiosos.</p>
        <br/>
        <p>Contamos com sua participação nos debates para juntos criarmos uma proposta de solução para esse conflito que tira vida de milhares de pessoas todos os dias.</p>
        <br/>
        <p id="end">Sejam muito bem vindos à CSNU 2020</p>
        <ul>
          <li>Laura Tralli</li>
          <li>Nicole de Faria Palmieri Adriano</li>
          <li>Pedro Mangeon Meirelles Laurentino</li>
        </ul>
        <br/>
        <div className="roteiros">
          <p><a href="/files/Guia de Estudos - Imprensa.pdf" download><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>Clique aqui para baixar o Roteiro de Estudos da Csnu</p>
        </div>
        <span>Email para contato: <a href="mailto:csnu2020@gmail.com">csnu2020@gmail.com</a></span>
        </Comite>
        
        <Comite className="comites"  id="oms" loc_image="/UI/oms.png">
        <p id="intro">Prezados delegados,</p>
        <br/>
        <p>O papel da Organização Mundial da Saúde (OMS) envolve dogmas que estimulam o debate entre as nações sobre o ambiente de saúde de cada respectiva delegação, visando uma discussão da condição da saúde atual num contexto globalizado e de auxílio entre seus Estados-membros. De acordo com os documentos fundadores da Organização em 1947, saúde seria um estado de completo bem-estar físico, mental e social e não apenas a ausência de doença ou enfermidade, o que torna ainda mais amplo o campo de atuação da OMS.</p>
        <br/>
        <p>Pensando no Artigo 1°, 3° e 25° dos Direitos Humanos somados aos tópicos 1,2,3,6,10 e 16 dos Objetivos de Desenvolvimento Sustentável (Agenda ONU2030), o tema da reunião deste ano é sobre <b>“A saúde em áreas de conflito e fragilidade”</b>, a fim de refletir as questões de saúde básica nas diferentes Nações. </p>
        <br/>
        <p>O que é saúde universal e quais aqueles ainda privados de assistência? Quais as medidas mais eficientes de se melhorar as condições de saúde em países frágeis? Como se comportar diante os problemas de saúde dos Estados vizinhos?</p>
        <br/>
        <p>Contamos com a sua participação neste debate para que este tema seja um catalizador sobre o senso e auxílio a respeito da saúde global.</p>
        <p id="end">Sejam bem-vindos(as) à OMS 2020!</p>
        <ul>
          <li>Beatriz Petri</li>
          <li>Gustavo Oliveira</li>
          <li>Tainara Araújo</li>
        </ul>
        <iframe title="oms-video-1"src="https://www.youtube.com/embed/RkpOkkZWJbw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <br/>
        <iframe title="oms-video-2"src="https://www.youtube.com/embed/q5DXMr5v48k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <br/>
        <div className="roteiros">
          <p><a href="/files/Guia de Estudos - Imprensa.pdf" download><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>Clique aqui para baixar o Roteiro de Estudos da Oms</p>
        </div>
        <span>Email para contato: <a href="mailto:salesionuoms2020@gmail.com">salesionuoms2020@gmail.com</a></span>


        </Comite>
        
        <Comite className="comites"  id="imprensa" loc_image="/UI/imprensa.png">
        <p id="intro">Estimados Redatores e Fotojornalistas,</p>
        <br/>
        <p>O comitê da imprensa é o mais abrangente dentro do diversos assuntos nos variados comitês presentes, somos compostos por 2 diretores, 9 redatores e 3 fotojornalistas, todos em função de fazer as informações as mais acessíveis possíveis para os futuros espectadores. É por este que vos fala que as notícias correm e que as informações são divulgadas, temos um compromisso com a verdade e é assim fazemos com que esta chegue ao público da melhor maneira, não só transmitimos a imagem da ética, como realmente trabalhamos de acordo com tal, afinal, é nesta fonte em que as pessoas depositam suas confianças. De tudo um pouco e sem restrições ao compartilhar o que deve chegar aos outros, é por meio da imprensa que se dá o acesso mais rápido e confiável com os demais indivíduos, a verdadeira ponte entre os dois mundos, que passa pela mais pura verdade e transparência.É por essa voz que irão ter as divulgações de maneira imparcial</p>  
        <br/>
        <p>De acordo com a Lei 5057/67,</p> 
        <p>“Art. 1º É livre a manifestação do pensamento e a procura, o recebimento e a difusão de informações ou idéias, por qualquer meio, e sem dependência de censura, respondendo cada um, nos têrmos da lei, pelos abusos que cometer.” </p>
        <ul>
          <li>João Victor Cavalcante Miranda</li>
          <li>Juliana Bernardes Cunha</li>
        </ul>
        <div className="roteiros">
          <p><a href="/files/Guia de Estudos - Imprensa.pdf" download><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>Clique aqui para baixar o Roteiro de Estudos da Imprensa</p>
        </div>
        <span>Email para contato: <a href="mailto:imprensaonu2020@gmail.com">imprensaonu2020@gmail.com</a></span>

        </Comite>    
        
        <Form />
        </main>
      <Footer />
    </div>
  );
}

export default App;
