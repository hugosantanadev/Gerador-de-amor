const btnEl = document.getElementById("btn");
const mensagemEl = document.querySelector("p");

function getLove() {
  var mensagensAmor = [
    "Eu te amo mais do que tudo!",
    "Você é a pessoa mais especial da minha vida!",
    "Meu amor por você é infinito!",
    "Você é o meu raio de sol!",
    "Com você, meu coração é completo!","Se eu fosse um astronauta eu viajaria em todas os planetas até me encontrar com você de novo",
    "Se eu fosse uma abelha eu tomaria o pólen da sua flor todos os dias",
    "Se eu fosse um cachorro eu cheraria seu cu todo dia",
    "Se você fosse um peido eu nunca te soltaria",
    "Se você fosse cocô eu nunca daria descarga",
    "Se você é a mulher mais linda do mundo você seria exatamente a mulher que você é hoje e nada mudaria",
    "Se você fosse um prêmio da lotérica, eu compraria todos os bilhetes só pra ter você",
    "Se você fosse o sol e eu fosse a lua, eu esperaria ansiosamente todos os dias pelo nosso eclipse",
    "Se você fosse o mar eu queria ser a areia pra ter você comigo pra sempre",
    "Se eu fosse um peixe eu queria que você fosse o mar por que eu não vivo sem você",
    "Se você fosse uma planta, eu queria ser o solo pra ficar com você todos os dias",
    "Se eu fosse uma planta, com ctz vc seria o sol que me dá luz e vida e me ajuda a levantar todos os dias",
    "Apenas uma foto sua faria com que os anjos questionassem a própria perfeição",
     "Um dia você vai me perguntar o que é mais importante? Minha vida ou a sua? Eu direi a minha e você vai embora sem saber que você é minha vida",
    "Eu sempre gostei do universo, as estrelas e astronomia por que sempre achei lindo mas o dia em que olhei nos seus olhos eu percebi que a beleza de toda galáxia é insignificante perto da sua lindeza",
     "Se você morresse eu teria ciúmes da terra por ter você por perto pro resto da eternidade",
    "Se um dia eu me perder, eu vou procurar você, por que é em você que eu me encontro",
    "VOCE É LINDA",
    "EU TE AMO LINDA","VOCE É LINDA",
    "EU TE AMO","VOCE É LINDA",
    "EU TE AMO LINDA","VOCE É LINDA",
    "EU TE AMO BEM MUITÃO", "XODADI","XODADI","XODADI","XODADI","SEI LÁ","SEI LÁ","SEI LÁ","SEI LÁ",
    "Não há ninguém, mesmo sem cultura, que não se torne poeta quando o amor toma conta dele."
    ,"O que a memória ama, fica eterno. Te amo com a memória, imperecível.","Eu te amo para amar-te e não para ser amado, pois nada me dá tanta felicidade como te ver feliz.","QUERO CASAR SÓ PARA OLHAR NOS TEUS OLHOS TODOS OS DIAS DA MINHA VIDA","se van gogh olhasse a beleza que vejo em teus olhos amaria a vida como ninguém.(ele se matou)", "VOCE ACAB DE ENCONTRAR UMA MOPA, VOCE ESTA DEVENDO 50 BEIJINHOS", "VOCE ACABA DE ENCONTRAR UMA MOPA E ESTA DEVENDO UMA FOTO TEMPORARIA", "VOCE ACABDE ENCONTRAR UMA MOPA E ESTA DEVENDO UM ABRAÇO BEM APERTADO","Você é a luz que ilumina todos os meus dias.",
    "Meu amor por você é como um oceano infinito, profundo e cheio de ternura.",
    "Nosso amor é uma dança perfeita, onde nossos corações seguem o ritmo um do outro.",
    "Cada momento ao seu lado é um tesouro que guardo no meu coração.",
    "Seu sorriso é a minha fonte de felicidade e inspiração.",
    "Você transforma a simplicidade em magia, apenas com sua presença.",
    "O mundo ganha cores mais vibrantes quando estou nos seus braços.",
    "Em você, encontrei não apenas um amor verdadeiro, mas também minha melhor versão.",
    "Seu abraço é o meu refúgio seguro, onde encontro paz e calor.",
    "Seu sorriso é capaz de curar qualquer tristeza que exista em mim.",
    "Estar com você é como viver em um eterno conto de fadas, cheio de amor e encantamento.",
    "Você é o motivo pelo qual eu acordo todas as manhãs com um sorriso no rosto.",
    "Seu amor é um bálsamo que acalma todas as minhas dores e aflições.",
    "Meu coração bate no ritmo da sua presença, e cada batida é uma declaração de amor.",
    "Você é a razão pela qual eu acredito no poder do destino e no encontro de almas gêmeas.",
    "Seu amor é como uma chama eterna, que aquece meu coração mesmo nos dias mais frios.",
    "Com você ao meu lado, sinto que posso conquistar o mundo e enfrentar qualquer desafio.",
    "Seu sorriso é uma obra de arte que ilumina até mesmo os dias mais nublados.",
    "Nenhum poema ou canção seria capaz de descrever toda a profundidade do meu amor por você.",
    "Você é minha fortaleza, meu porto seguro, minha inspiração constante.",
    "Seu olhar é capaz de derreter meu coração e me fazer sentir único e especial.",
    "Estar ao seu lado é como mergulhar em um mar de felicidade e plenitude.",
    "Sua voz é a melodia perfeita que embala meus sonhos todas as noites.",
    "Em cada gesto seu, encontro uma prova concreta do amor puro e verdadeiro.",
    "Você é a essência de todos os meus sonhos e a realidade mais bonita que já vivi.",
    "Só de pensar em você, meu coração se enche de alegria e meu rosto se ilumina com um sorriso.",
    "Seu amor é um tesouro que eu valorizo mais do que qualquer riqueza material.",
    "Amar você é como respirar, é algo natural e indispensável para minha existência.",
    "Você é o presente mais precioso que a vida poderia me dar, e sou grato(a) todos os dias por tê-lo(a).",
    "Cada segundo ao seu lado é um pedacinho do paraíso que encontrei aqui na Terra.",
    "Seu amor é o combustível que me impulsiona a ser uma versão melhor de mim mesmo(a) a cada dia.",
    "Quando estou com você, o tempo parece parar, e apenas nosso amor preenche o espaço.",
    "Seu sorriso é uma canção suave que embala meus pensamentos e acalma minha alma.",
    "Amar você é como viver em um sonho do qual eu nunca quero acordar.",
    "Você é o motivo pelo qual minha vida ganhou um novo sentido e uma felicidade sem igual.",
    "Seu abraço é meu porto seguro, onde encontro paz, conforto e todo o amor que preciso.",
    "Quando olho nos seus olhos, encontro um universo inteiro de amor e compreensão.",
    "Você é a chave que abre as portas do meu coração, revelando um amor eterno e verdadeiro.",
    "Em cada gesto seu, encontro uma razão a mais para amar você incondicionalmente.",
    "Seu amor é como um farol, que me guia nas noites escuras e me mostra o caminho da felicidade.",
    "Você é a razão pela qual acredito na beleza do amor e no poder de cura que ele traz.",
    "Com você, descobri o verdadeiro significado da palavra felicidade e entendi como é amar intensamente.",
    "Você é a peça que faltava no quebra-cabeça da minha vida, completando-me de forma única e perfeita.",
    "Seu sorriso é como um raio de sol, iluminando meu mundo e trazendo calor ao meu coração.",
    "Você é o sonho que nunca desejo acordar, a realidade mais bonita que já vivi.",
    "Com você, cada dia é uma nova oportunidade de criar memórias incríveis e compartilhar um amor inabalável.",
    "Seu amor me dá asas para voar e a segurança de um porto seguro para sempre retornar.",
    "Você é a personificação do amor em sua forma mais pura e bela, e sou grato(a) por tê-lo(a) em minha vida.",
    "Com você, sinto que sou capaz de superar qualquer obstáculo e enfrentar qualquer tempestade que a vida possa trazer.",
    "Meu amor por você é eterno, infinito e imensurável, e sorrir ao seu lado é a maior alegria que já conheci.","SE A VIDA FOSSE UM FILME VOCE SERIA A MELHOR PARTE","Cause you're amazing just the way you are - Bruno Mars, Just the Way You Are",
    "I think I wanna marry you - Bruno Mars, Marry You",
    "You're the best thing I never knew I needed - Bruno Mars, Never Knew I Needed",
    "Cause, darling, I'm a nightmare dressed like a daydream- Taylor Swift, Blank Space",
    "You're beautiful, it's true - James Blunt, You're Beautiful",
    "You're the reason I come home - Ron Pope, A Drop in the Ocean",
    "When I see your face, there's not a thing that I would change - Bruno Mars, Just the Way You Are",
    "I'm yours, you're mine, you're what I've been waiting for - Jason Mraz, I'm Yours",
    "Cause all of me loves all of you - John Legend, All of Me",
    "You're still the one I run to, the one that I belong to - Shania Twain, You're Still the One",
    "You're the reason I believe in love - Daniel Caesar, Best Part",
    "And darling, I will be loving you 'til we're 70 - Ed Sheeran, Thinking Out Loud",
    "You're my sunshine on a rainy day - Bruno Mars, Count on Me",
    "You make me feel like I'm living a teenage dream - Katy Perry, Teenage Dream",
    "You're the closest to heaven that I'll ever be - The Goo Goo Dolls, Iris",
    "I wanna love you inside out - The Chainsmokers, Inside Out",
    "Cause all I need is a beauty and a beat - Justin Bieber ft. Nicki Minaj, Beauty and a Beat",
    "You are the best thing that's ever been mine - Taylor Swift, Mine",
    "When I see your smile, the whole world stops and stares for a while - Bruno Mars, Just the Way You Are",
    
  ];

  var indice = Math.floor(Math.random() * mensagensAmor.length);
  var mensagem = mensagensAmor[indice];

  mensagemEl.textContent = mensagem;
}

btnEl.addEventListener("click", getLove);
