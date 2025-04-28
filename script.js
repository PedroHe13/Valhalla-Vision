// Dados para os deuses
const godsData = {
    odin: {
        name: 'Odin',
        title: 'Pai de Todos, Deus da Sabedoria e Guerra',
        icon: 'https://imgs.search.brave.com/8fHEX6_GnlX1l0qx6MVhbNDLUkgkdMgy_S_HeNR30hs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTEv/R29kLW9mLVdhci1S/YWduYXJvay1PZGlu/LmpwZw',
        image: 'https://imgs.search.brave.com/dHRFa79RgXRHNKVTYXA4_NUX-eVEA9bhO2be0h0YmZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hvLXdvdWxkLXdp/bi1pbi1hLWZpZ2h0/LXYwLWlheGFyMGx3/aWF3ZTEucG5nP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPThjMzVl/NDZhYjQzYWViZTA1/MGRiODZkYjUzY2Rj/MzUzMGIzMDNmMjE',
        description: `
            <h3>O Senhor de Asgard</h3>
            <p>Odin, também conhecido como Wotan, Woden ou Allfather (Pai de Todos), é o deus supremo na mitologia nórdica. Filho de Bor e Bestla, ele governa em Asgard junto com seus irmãos Vili e Vé, com quem criou o mundo a partir do corpo do gigante primordial Ymir.</p>
            
            <h3>Sabedoria e Magia</h3>
            <p>Em sua busca incessante por conhecimento, Odin sacrificou um de seus olhos para beber da fonte da sabedoria de Mímir. Ele também se enforcou na árvore Yggdrasil por nove dias e nove noites, ferindo-se com sua própria lança, Gungnir, para descobrir as runas e sua magia. Este sacrifício é um dos muitos exemplos do quanto Odin estava disposto a sofrer pela sabedoria.</p>
            
            <h3>Atributos e Companheiros</h3>
            <p>Odin possui dois corvos, Huginn (pensamento) e Muninn (memória), que voam pelo mundo todos os dias e retornam para contar a Odin tudo o que viram. Ele também tem dois lobos, Geri e Freki, e cavalga Sleipnir, um cavalo de oito patas nascido de Loki.</p>
            
            <h3>O Valhalla</h3>
            <p>Como deus da guerra, Odin preside o Valhalla, o salão onde metade dos guerreiros mortos em batalha são levados pelas Valquírias. Lá, estes guerreiros escolhidos (Einherjar) festejam e lutam diariamente, preparando-se para o Ragnarök, quando ajudarão Odin na batalha final.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Odin é conhecido por muitos nomes diferentes (mais de 200), refletindo seus diversos aspectos e funções.</li>
                <li>Ele frequentemente viajava pelo mundo disfarçado como um velho de um olho só, usando um chapéu de aba larga e uma capa azul.</li>
                <li>A quarta-feira (Wednesday em inglês) é nomeada em sua homenagem (Woden's day).</li>
                <li>Durante o Ragnarök, Odin será devorado pelo lobo Fenrir, mas será vingado por seu filho Vidar.</li>
            </ul>
        `
    },
    thor: {
        name: 'Thor',
        title: 'Deus do Trovão e Protetor',
        icon: 'https://imgs.search.brave.com/JfgzTmRsttvFBbdSTnaLbcRYubJm_oe3CWAYItwU3ok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA1L0dvZC1v/Zi1XYXItVGhvci5q/cGc',
        image: 'https://imgs.search.brave.com/7qX4jbqNitHYaGwRZHz-rgcHputB53UlBlkxM3GJuHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2Zi/NmEwMGI0LTljZGMt/NDAxZC05YTYxLTQx/ZmRiZTlkMDljZS9k/Zm4zMGJrLTkxOWMz/MzlkLWFlMmMtNDY3/NC05MDI3LTQxYTg0/ZmI5MDczMS5wbmcv/djEvZmlsbC93XzEy/ODAsaF8xNjczL3Ro/b3JfX2dvZF9vZl93/YXJfX19yZW5kZXJf/X2J5X3llc3Npbmdf/ZGZuMzBiay1mdWxs/dmlldy5wbmc_dG9r/ZW49ZXlKMGVYQWlP/aUpLVjFRaUxDSmhi/R2NpT2lKSVV6STFO/aUo5LmV5SnpkV0lp/T2lKMWNtNDZZWEJ3/T2pkbE1HUXhPRGc1/T0RJeU5qUXpOek5o/TldZd1pEUXhOV1Zo/TUdReU5tVXdJaXdp/YVhOeklqb2lkWEp1/T21Gd2NEbzNaVEJr/TVRnNE9UZ3lNalkw/TXpjellUVm1NR1Ew/TVRWbFlUQmtNalps/TUNJc0ltOWlhaUk2/VzF0N0ltaGxhV2Rv/ZENJNklqdzlNVFkz/TXlJc0luQmhkR2dp/T2lKY0wyWmNMMlpp/Tm1Fd01HSTBMVGxq/WkdNdE5EQXhaQzA1/WVRZeExUUXhabVJp/WlRsa01EbGpaVnd2/WkdadU16QmlheTA1/TVRsak16TTVaQzFo/WlRKakxUUTJOelF0/T1RBeU55MDBNV0U0/TkdaaU9UQTNNekV1/Y0c1bklpd2lkMmxr/ZEdnaU9pSThQVEV5/T0RBaWZWMWRMQ0po/ZFdRaU9sc2lkWEp1/T25ObGNuWnBZMlU2/YVcxaFoyVXViM0Js/Y21GMGFXOXVjeUpk/ZlEuZ2RBOHpTZ0JH/blZ4eXotYWJpYUV1/bVY0bVhHbjhYclB5/WUtGMnVpSjNyNA',
        description: `
            <h3>O Filho Poderoso de Odin</h3>
            <p>Thor é filho de Odin e da deusa da Terra Jord (ou Fjörgyn). Conhecido por sua imensa força, Thor é o protetor dos deuses e humanos contra as forças do caos, principalmente os jötnar (gigantes).</p>
            
            <h3>Mjölnir, o Martelo</h3>
            <p>A arma característica de Thor é Mjölnir, um martelo mágico feito pelos anões, que sempre retorna à sua mão após ser lançado. Thor também possui um cinto de força, Megingjörd, que duplica seu poder já imenso, e luvas de ferro para empunhar o martelo, que tem o cabo curto devido a uma travessura de Loki durante sua forja.</p>
            
            <h3>Defensor Incansável</h3>
            <p>Diferente de Odin, que é complexo e às vezes enganador, Thor é direto e confiável. Ele continuamente viaja para Jotunheim para lutar contra gigantes que ameaçam Asgard e Midgard. Suas histórias frequentemente envolvem aventuras para proteger os reinos dos deuses e dos humanos.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Thor viaja em uma carruagem puxada por dois bodes mágicos, Tanngrisnir e Tanngnjóstr, que podem ser mortos e comidos e depois ressuscitados se seus ossos forem preservados.</li>
                <li>O trovão era explicado como o som da carruagem de Thor atravessando o céu.</li>
                <li>Thor era especialmente venerado pelos camponeses e pela classe comum, enquanto Odin era mais associado à nobreza e aos guerreiros.</li>
                <li>A quinta-feira (Thursday em inglês) é nomeada em sua homenagem (Thor's day).</li>
                <li>No Ragnarök, Thor matará a Serpente de Midgard, Jörmungandr, mas morrerá logo depois devido ao veneno da serpente.</li>
            </ul>
        `
    },
    freya: {
        name: 'Freya',
        title: 'Deusa do Amor, Beleza e Guerra',
        icon: 'https://imgs.search.brave.com/ful-055Z3FisY4BT7sa7IYT5wWMVMc0QieXFluvNM0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDcvZnJleWEtZ29k/LW9mLXdhci0uanBn',
        image: 'src/freyaa.png',
        description: `
            <h3>A Mais Bela das Deusas</h3>
            <p>Freya é uma deusa Vanir, filha de Njörd e irmã de Freyr. Após a guerra entre os Æsir e os Vanir, ela veio para Asgard como refém e se tornou a mais proeminente das deusas. Seu nome significa "Senhora" e ela é associada ao amor, beleza, fertilidade, guerra e morte.</p>
            
            <h3>Feiticeira e Guerreira</h3>
            <p>Freya é mestra da magia Seiðr, uma forma de feitiçaria que permite ver e influenciar o futuro. Foi ela quem ensinou esta arte a Odin. Além disso, como deusa da guerra, Freya tem direito à metade dos guerreiros mortos em batalha, que vão para seu salão Fólkvangr, enquanto a outra metade vai para o Valhalla de Odin.</p>
            
            <h3>Ornamentos e Associações</h3>
            <p>Freya possui o magnífico colar Brísingamen, obtido dos anões, e uma capa de penas de falcão que permite a transformação em um pássaro. Ela viaja em uma carruagem puxada por dois gatos gigantes e às vezes é acompanhada por um javali dourado chamado Hildisvíni.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Freya chorava lágrimas de ouro vermelho (âmbar) quando seu marido Óðr estava ausente em suas longas viagens.</li>
                <li>Muitos especialistas acreditam que Freya e Frigg (esposa de Odin) podem ter sido originalmente a mesma deusa, que posteriormente se diferenciou em duas figuras distintas.</li>
                <li>A sexta-feira (Friday em inglês) pode estar relacionada tanto a Freya quanto a Frigg (Frigg's day ou Freya's day).</li>
                <li>Freya era frequentemente desejada pelos gigantes, e em várias histórias, os deuses tiveram que protegê-la ou resgatá-la de tentativas de rapto.</li>
            </ul>
        `
    },
    loki: {
        name: 'Loki',
        title: 'Deus da Trapaça e do Caos',
        icon: 'https://imgs.search.brave.com/kgKDsky39u_NzfmFLf7_DbD9rpj67KjqZRlHZxo1HV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzQzLzcwLzkx/LzM2MF9GXzY0Mzcw/OTEwOF9ldmN4YnJM/Y0ZLM0ZQUTlWZWVL/T1d2TlRxekF5MHcw/Qy5qcGc',
        image: 'https://imgs.search.brave.com/hfZUllPOwTjjMdDUyywiL7zcoBeEYoFrPd3U49cxB8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9sb2tpLTM0LTcw/OXgxMDI0LnBuZw',
        description: `
            <h3>O Enganador Divino</h3>
            <p>Loki é uma das figuras mais complexas e controversas da mitologia nórdica. Filho de gigantes, Loki tornou-se um companheiro de Odin e foi aceito entre os Æsir após fazer um pacto de irmandade de sangue com Odin, embora não seja tecnicamente um deus. Sua natureza ambígua o coloca simultaneamente como aliado e antagonista dos deuses.</p>
            
            <h3>O Agente do Caos</h3>
            <p>Loki é frequentemente a fonte de problemas para os deuses, mas também ajuda a resolvê-los. Sua natureza enganadora e seu talento para travessuras o tornam imprevisível. Ele geralmente se mete em problemas devido à sua língua afiada e seu comportamento impulsivo, mas sua astúcia muitas vezes o tira dessas situações.</p>
            
            <h3>Metamorfo e Pai de Monstros</h3>
            <p>Loki tem o poder de mudar de forma. Com a giganta Angrboda, ele é pai de três monstros que desempenharão papéis cruciais no Ragnarök: o lobo Fenrir, a serpente de Midgard Jörmungandr e Hel, governante do mundo dos mortos. De forma peculiar, Loki também se transformou em uma égua para distrair o cavalo Svaðilfari, e dessa união nasceu Sleipnir, o cavalo de oito patas de Odin.</p>
            
            <h3>A Punição e o Ragnarök</h3>
            <p>Após orquestrar a morte de Baldr, o querido filho de Odin, Loki é punido pelos deuses: ele é amarrado com as entranhas de seu próprio filho e uma serpente é posicionada acima dele, gotejando veneno em seu rosto. Sua esposa leal, Sigyn, usa uma tigela para coletar o veneno, mas quando ela precisa esvaziá-la, as gotas que caem no rosto de Loki o fazem se contorcer de dor, causando terremotos. No Ragnarök, Loki se libertará e liderará os gigantes e monstros contra os deuses.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Loki é muitas vezes considerado um "trickster", uma figura mitológica que quebra regras e convenções sociais, comum em várias mitologias ao redor do mundo.</li>
                <li>Apesar de ser frequentemente retratado como vilão, muitas das ações de Loki beneficiaram os deuses, como quando ajudou Thor a recuperar seu martelo roubado.</li>
                <li>Ele é responsável por muitos dos tesouros dos deuses, geralmente primeiro causando problemas e depois sendo forçado a encontrar soluções brilhantes.</li>
                <li>Na cultura popular moderna, Loki tornou-se um dos personagens mais reconhecíveis da mitologia nórdica.</li>
            </ul>
        `
    },
    heimdall: {
        name: 'Heimdall',
        title: 'Guardião de Bifröst',
        icon: 'https://imgs.search.brave.com/BERfhH3cqwwYezspTvX5CeU5diR8EGIMIyLUh_FZMSI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM1L2Zj/L2ZlLzM1ZmNmZWNh/ZmJlMTI3MzQ5OTI3/ZGU1ZjRhNDAyN2Rk/LmpwZw',
        image: 'https://imgs.search.brave.com/klh0q_JWw6SL7XtLEEZyzxRt23PIgI1YSuMUZDuGw1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Fu/aW1ldmVyc28vaW1h/Z2VzL2IvYjEvSGVp/bWRhbGwucG5nL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzMw/OD9jYj0yMDIzMDIw/MjE5MTM0OSZwYXRo/LXByZWZpeD1wdC1i/cg',
        description: `
            <h3>O Vigilante de Asgard</h3>
            <p>Heimdall é o guardião da ponte Bifröst, o arco-íris que conecta Asgard e Midgard. Filho de nove mães (possivelmente as nove ondas do mar), ele é descrito como "o deus branco" e é conhecido por sua visão e audição extraordinárias.</p>
            
            <h3>Sentidos Sobrenaturais</h3>
            <p>Heimdall pode ver a cem léguas de distância, tanto de dia quanto de noite. Ele pode ouvir a grama crescendo na terra e a lã crescendo nas ovelhas. Ele raramente dorme e está sempre vigilante, protegendo Asgard contra invasores, especialmente os gigantes.</p>
            
            <h3>Gjallarhorn</h3>
            <p>Heimdall possui o chifre Gjallarhorn, cujo som pode ser ouvido em todos os mundos. No Ragnarök, ele soará o Gjallarhorn para alertar os deuses da batalha final que se aproxima. Segundo as profecias, Heimdall e Loki se matarão mutuamente durante o conflito.</p>
            
            <h3>Criador da Sociedade Humana</h3>
            <p>Em um mito fascinante, Heimdall, sob o nome de Ríg, visitou três casas diferentes e dormiu três noites com três casais diferentes, gerando filhos que se tornariam os ancestrais das três classes sociais nórdicas: Thrall (escravos), Karl (camponeses livres) e Jarl (nobres).</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>A espada de Heimdall é chamada "cabeça" (höfuð), o que criou uma intrigante metáfora poética na antiga poesia nórdica.</li>
                <li>Ele é descrito como tendo dentes de ouro, o que lhe rendeu o apelido de "Gulltanni" (Dentes Dourados).</li>
                <li>Heimdall pode ser o antagonista natural de Loki, já que eles representam opostos: vigilância vs. engano, ordem vs. caos.</li>
                <li>Alguns estudiosos sugerem que o colar Brísingamen de Freya ficava sob a guarda de Heimdall.</li>
            </ul>
        `
    },
    frigg: {
        name: 'Frigg',
        title: 'Deusa do Casamento e Maternidade',
        icon: 'https://imgs.search.brave.com/xveQuafgn_BG9mWTCOql8XhWgKkvUiHP68jwVvIiDR8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Jw/Zy1yaXNlLW9mLXRo/ZS10aXRhbnMvaW1h/Z2VzL2MvYzcvRnJp/Z2cuanBnL3Jldmlz/aW9uL2xhdGVzdC9z/Y2FsZS10by13aWR0/aC1kb3duLzQwMD9j/Yj0yMDE5MTEyNTE4/Mzc1MCZwYXRoLXBy/ZWZpeD1wdC1icg',
        image: 'https://imgs.search.brave.com/kCG7SXhK11PRZxz4cNVCc1QtP7ZEQMnwtBiadfrshRk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzEw/NTkyN2YzLWFmZTct/NDQ3MC1hZjljLWRh/YTlhNWY2MWJjMy9k/ajR4ZWxtLWNlZDBj/YzE3LWFlODctNDNk/Zi1iN2E1LTg0MmJl/N2Y5Njg4Zi5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/ekV3TlRreU4yWXpM/V0ZtWlRjdE5EUTNN/QzFoWmpsakxXUmhZ/VGxoTldZMk1XSmpN/MXd2WkdvMGVHVnNi/UzFqWldRd1kyTXhO/eTFoWlRnM0xUUXpa/R1l0WWpkaE5TMDRO/REppWlRkbU9UWTRP/R1l1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAucHJ6cy1qZHRF/cGRXeEJSOHdYeVRs/REVLSGdEeXBCYTVy/OWYyeTNuMDdyUQ',
        description: `
            <h3>A Rainha de Asgard</h3>
            <p>Frigg é a esposa de Odin e a rainha dos deuses Æsir. Deusa da maternidade, do casamento e da sabedoria doméstica, ela é uma poderosa figura materna que protege as famílias e os lares.</p>
            
            <h3>Profetisa e Conhecedora do Destino</h3>
            <p>Frigg possui o dom da profecia e conhece o destino de todos os seres, embora raramente revele esse conhecimento. Em um dos mitos mais conhecidos, ela tenta proteger seu amado filho Baldr após prever sua morte, pedindo a todas as coisas do mundo que jurem não machucá-lo. Apenas o visco é esquecido, o que eventualmente leva à morte de Baldr através de um plano de Loki.</p>
            
            <h3>Senhora de Fensalir</h3>
            <p>Frigg habita em Fensalir ("Salões do Pântano"), de onde supervisiona assuntos domésticos e familiares. Ela é frequentemente retratada fiando nuvens com sua roca, simbolizando seu papel na tecelagem do destino.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Frigg tinha várias servas que auxiliavam nas tarefas divinas, incluindo Fulla, sua confidente que carregava seu estojo de joias.</li>
                <li>A constelação conhecida como "Roca de Frigg" (o cinturão de Órion) foi nomeada em sua homenagem.</li>
                <li>Alguns estudiosos acreditam que Frigg e Freya podem ter sido originalmente a mesma deusa, depois divididas em duas figuras distintas.</li>
                <li>A sexta-feira (Friday em inglês) é potencialmente nomeada em sua homenagem (Frigg's day).</li>
                <li>Frigg é a mãe de Baldr, Hödr e possivelmente Hermod, embora as genealogias sejam inconsistentes nas fontes originais.</li>
            </ul>
        `
    },
    tyr: {
        name: 'Tyr',
        title: 'Deus da Justiça e da Lei',
        icon : 'https://imgs.search.brave.com/W0sosMMxctnywf4ZIFJ9pHMEnd6GrkkFZ9uezS5kTjY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdlL2Y4/L2Q2LzdlZjhkNmRi/MzY2ODFlNDdjYzY4/OGYxMWMyZDczZjk1/LmpwZw',
        image: 'src/tyr.png',
        description: `
            <h3>O Deus da Justiça</h3>
            <p>Tyr é o deus nórdico da justiça, da lei, das assembleias e da glória na batalha. Embora nas fontes tardias ele seja retratado como filho de Odin, algumas evidências sugerem que ele pode ter sido anteriormente o deus principal do panteão germânico, antes da ascensão do culto de Odin.</p>
            
            <h3>O Sacrifício Heroico</h3>
            <p>Tyr é mais conhecido por seu grande sacrifício. Quando os deuses decidiram amarrar o perigoso lobo Fenrir, o lobo concordou em ser amarrado apenas se um dos deuses colocasse a mão em sua boca como garantia de que seria libertado se não conseguisse se soltar. Apenas Tyr teve coragem de fazê-lo, e quando os deuses traíram Fenrir e o mantiveram acorrentado, o lobo arrancou a mão direita de Tyr.</p>
            
            <h3>Guardião dos Juramentos</h3>
            <p>Como deus da justiça e das assembleias legais (things), Tyr era invocado para supervisionar juramentos e contratos. Sua disposição em sacrificar sua própria mão pelo bem comum simboliza o compromisso com a justiça acima do interesse próprio.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>A terça-feira (Tuesday em inglês) é nomeada em sua homenagem, derivando de "Tyr's day" (em nórdico antigo: Týsdagr).</li>
                <li>A runa Tiwaz (↑) é associada a Tyr e representa justiça, honra e liderança.</li>
                <li>Tyr é frequentemente representado como um guerreiro de uma só mão, portando uma espada com a mão esquerda.</li>
                <li>No Ragnarök, Tyr lutará contra o cão infernal Garm e ambos se matarão mutuamente.</li>
                <li>Seu equivalente na mitologia romana é Marte, não apenas como deus da guerra, mas também como guardião da lei e da justiça.</li>
            </ul>
        `
    },
    baldr: {
        name: 'Baldr',
        title: 'Deus da Luz e Pureza',
        icon: 'https://imgs.search.brave.com/MifxiXrt_lDleF4Tifd9b77NuAMbE7Wr1w6BFtipYQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDMv/YmFsZHVyLmpwZw',
        image: 'src/baldur.png',
        description: `
            <h3>O Deus Amado</h3>
            <p>Baldr, filho de Odin e Frigg, é descrito como o mais belo e amado dos deuses, radiante como o sol. Conhecido por sua bondade, sabedoria e justiça, ele simboliza a luz, a pureza e a inocência no panteão nórdico.</p>
            
            <h3>A Morte Trágica</h3>
            <p>O mito mais importante sobre Baldr envolve sua morte. Após ter sonhos premonitórios sobre sua própria morte, sua mãe Frigg extraiu promessas de todas as coisas do mundo para não machucarem seu filho, esquecendo apenas do visco, que parecia inofensivo. Loki descobriu esta vulnerabilidade e enganou o irmão cego de Baldr, Höðr, fazendo-o atirar uma flecha feita de visco em Baldr, matando-o instantaneamente.</p>
            
            <h3>A Tentativa de Resgate</h3>
            <p>Após a morte de Baldr, os deuses ficaram devastados. Hermod, outro filho de Odin, cavalgou até Helheim para tentar resgatar seu irmão. A governante do mundo dos mortos, Hel, concordou em liberar Baldr se todas as coisas no mundo chorassem por ele. Todos choraram, exceto uma giganta chamada Þökk (que muitos acreditam ser Loki disfarçado), o que significa que Baldr teve que permanecer em Helheim até o Ragnarök.</p>
            
            <h3>O Retorno Após o Ragnarök</h3>
            <p>De acordo com as profecias, após o Ragnarök, quando um novo mundo ressurgir das águas, Baldr retornará dos mortos para governar em um reino de paz e harmonia, simbolizando o renascimento da luz após a destruição.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>O nome de Baldr pode estar relacionado a palavras que significam "senhor" ou "príncipe".</li>
                <li>Sua mansão em Asgard era chamada Breidablik ("amplo esplendor"), descrita como o lugar mais belo, onde nada impuro podia entrar.</li>
                <li>A morte de Baldr marca o início da cadeia de eventos que levará ao Ragnarök.</li>
                <li>Alguns estudiosos interpretam o mito de Baldr como tendo influências cristãs, vendo paralelos entre Baldr e Cristo.</li>
                <li>Baldr era casado com Nanna, que morreu de tristeza durante seu funeral e foi cremada junto com ele em seu navio funerário.</li>
            </ul>
        `
    },
    freyr: {
        name: 'Freyr',
        title: 'Deus da Fertilidade e Prosperidade',
        icon: 'https://imgs.search.brave.com/uq8xHbghVKefG6E-rtppqziZ_R0P6fGVbwxfY0SD6Ow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4LzIx/LzU1LzQ4MjE1NTRh/NTNhOWI1Mzg3ZDAy/ODljNDZjODU1NDVj/LmpwZw',
        image: 'src/feir.png',
        description: `
            <h3>O Senhor da Abundância</h3>
            <p>Freyr, um dos Vanir e filho de Njörd, é o deus da fertilidade, chuva, sol e colheitas abundantes. Associado à paz e prosperidade, ele é amado por mortais e deuses, sendo um símbolo de fartura e alegria no panteão nórdico.</p>
            
            <h3>O Amor por Gerðr</h3>
            <p>Um dos mitos mais conhecidos de Freyr é seu amor por Gerðr, uma bela jotun (giganta). Apaixonado, Freyr entregou sua espada mágica, que lutava sozinha, ao seu servo Skírnir para convencer Gerðr a se casar com ele. Apesar da relutância inicial, Gerðr aceitou, e o casamento simboliza a união entre a fertilidade da terra e o céu.</p>
            
            <h3>A Perda da Espada</h3>
            <p>A entrega de sua espada mágica teve consequências trágicas. No Ragnarök, Freyr enfrentará o gigante de fogo Surtr sem sua arma principal, o que o levará à derrota. Esse sacrifício por amor destaca a dualidade entre paixão e dever em sua história.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Freyr possui um javali dourado chamado Gullinbursti, que brilha no escuro e corre mais rápido que qualquer cavalo.</li>
                <li>Seu navio, Skíðblaðnir, é mágico, podendo ser dobrado e guardado no bolso, mas grande o suficiente para carregar todos os deuses.</li>
                <li>Freyr era adorado em rituais de fertilidade, especialmente na Suécia, onde era um dos deuses mais venerados.</li>
                <li>Como um Vanir, Freyr representa a harmonia com a natureza, em contraste com os Æsir, mais ligados à guerra.</li>
                <li>Seu nome significa "senhor" em nórdico antigo, refletindo sua posição de liderança.</li>
            </ul>
        `
    },
    njord: {
        name: 'Njörd',
        title: 'Deus do Mar e dos Ventos',
        icon: 'https://imgs.search.brave.com/j6keD6evdwgnyC-lsnis3goC0oDEeGFx_vjd6wBvA7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXRv/bG9naWEtbm9yZGlj/YS5uZXQvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDIvZGV1/cy1Oam9yZC1uYS1t/aXRvbG9naWEtbm9y/ZGljYS5qcGc',
        image: 'https://i.pinimg.com/736x/43/af/4a/43af4a62cc02a85c457e2b8fb54219e0.jpg',
        description: `
            <h3>O Guardião dos Mares</h3>
            <p>Njörd, um dos Vanir, é o deus associado ao mar, aos ventos favoráveis, à pesca e à riqueza. Ele é conhecido por sua capacidade de acalmar tempestades e garantir viagens seguras para marinheiros, sendo um dos deuses mais reverenciados por comunidades costeiras.</p>
            
            <h3>A Troca de Reféns</h3>
            <p>Após a guerra entre os Æsir e os Vanir, Njörd foi enviado aos Æsir como parte de um acordo de paz, junto com seus filhos, Freyr e Freyja. Em Asgard, ele se adaptou, mas sentia saudades do mar e dos sons das ondas, contrastando com a vida montanhosa dos Æsir.</p>
            
            <h3>O Casamento com Skaði</h3>
            <p>Njörd se casou com a jotun Skaði, mas o casamento foi marcado por desentendimentos. Skaði preferia as montanhas, enquanto Njörd amava o l  inhabit the coasts and the seas. Eles tentaram viver juntos, alternando entre a casa de Njörd no mar e a casa de Skaði nas montanhas, mas acabaram se separando devido às diferenças.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Njörd é pai de Freyr e Freyja, os deuses da fertilidade, o que reforça sua conexão com a abundância.</li>
                <li>Seu lar em Asgard é chamado Nóatún, que significa "lugar dos barcos".</li>
                <li>Ele era especialmente venerado em áreas costeiras da Escandinávia, onde oferendas eram feitas para garantir boas pescarias.</li>
                <li>Apesar de ser um Vanir, Njörd foi bem integrado ao panteão Æsir após a guerra.</li>
                <li>Seu nome está relacionado à palavra nórdica para "norte" ou "força".</li>
            </ul>
        `
    },
    idunn: {
        name: 'Idunn',
        title: 'Deusa da Juventude e Renovação',
        icon: 'https://imgs.search.brave.com/4Cgi6u7usLNnQwANGH_-hnVYufrMhWQBV_53m-vhyx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaWNv/b3AuYi1jZG4ubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzAzL0lkdW5uLWdv/ZGRlc3MuanBn',
        image: 'https://i.pinimg.com/736x/8a/33/7d/8a337d8fde717ccd0e1564ca473ed96b.jpg',
        description: `
            <h3>A Guardiã da Juventude</h3>
            <p>Idunn é a deusa da juventude e da renovação, conhecida por cuidar das maçãs douradas que garantem a eterna juventude dos deuses Æsir. Sua presença é essencial para a imortalidade e vitalidade do panteão nórdico.</p>
            
            <h3>O Rapto de Idunn</h3>
            <p>Em um mito famoso, Idunn foi enganada por Loki e capturada pelo gigante Þjazi. Sem suas maçãs, os deuses começaram a envelhecer rapidamente. Loki, sob pressão, resgatou Idunn, transformando-a em uma noz para escapar. Þjazi, perseguindo-os, foi morto pelos deuses, e Idunn restaurou a juventude dos Æsir.</p>
            
            <h3>A Importância das Maçãs</h3>
            <p>As maçãs de Idunn não apenas previnem o envelhecimento, mas simbolizam a renovação e a continuidade da vida divina. Sua perda teria consequências catastróficas para os deuses, destacando sua importância no panteão.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Idunn é casada com Bragi, o deus da poesia, sugerindo uma conexão entre juventude e inspiração criativa.</li>
                <li>Seu nome significa "aquela que renova" ou "sempre jovem" em nórdico antigo.</li>
                <li>As maçãs de Idunn têm paralelos em outros mitos, como as maçãs das Hespérides na mitologia grega.</li>
                <li>Ela é frequentemente retratada com uma cesta ou caixa onde guarda suas maçãs mágicas.</li>
                <li>Apesar de seu papel crucial, Idunn tem poucos mitos próprios, sendo mais uma figura de suporte no panteão.</li>
            </ul>
        `
    },
    bragi: {
        name: 'Bragi',
        title: 'Deus da Poesia e Eloquência',
        icon: 'https://imgs.search.brave.com/4Do_7lqid7s5igVCsMnv0BfRFB-4u7ohkp972UlTSp4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxZ2dBdForUHhM/LmpwZw',
        image: 'https://i.pinimg.com/736x/19/61/f0/1961f008a8a6b50158f3e1a79406291b.jpg',
        description: `
            <h3>O Mestre das Palavras</h3>
            <p>Bragi é o deus da poesia, música e eloquência, conhecido por sua habilidade de criar versos inspiradores e encantar os deuses com suas histórias. Ele é o patrono dos skalds (poetas nórdicos) e um símbolo da arte verbal no panteão nórdico.</p>
            
            <h3>O Poeta de Asgard</h3>
            <p>Bragi é frequentemente descrito como o responsável por receber os guerreiros no Valhalla, saudando-os com poemas que celebram suas façanhas. Sua presença em Asgard é marcada por banquetes onde ele recita versos, elevando o espírito dos deuses e heróis.</p>
            
            <h3>A Conexão com Idunn</h3>
            <p>Bragi é casado com Idunn, a deusa da juventude, o que sugere uma relação simbólica entre a eterna renovação da inspiração poética e a juventude. Juntos, eles representam a vitalidade da criatividade e da expressão artística.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>Alguns estudiosos acreditam que Bragi pode ter sido inspirado em um poeta histórico, Bragi Boddason, que foi divinizado.</li>
                <li>Ele é descrito como tendo runas gravadas na língua, simbolizando seu domínio sobre as palavras.</li>
                <li>Bragi é frequentemente associado a harpas ou outros instrumentos musicais em representações artísticas.</li>
                <li>Seu nome está relacionado à palavra nórdica "bragr", que significa "poesia" ou "eloquência".</li>
                <li>Apesar de seu papel cultural, Bragi não tem muitos mitos próprios, sendo mais uma figura de apoio em Asgard.</li>
            </ul>
        `
    },
    Jörmungandr: {
        name: 'Jörmungandr',
        title: 'A Serpente do Mundo',
        icon: 'https://imgs.search.brave.com/uI68ZVF8awA88kNUxFmujxrdB3peP1UwUjemLS4cU6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDEv/R29kLW9mLVdhci0y/MDE4LUpvcm11bmdh/bmRyLmpwZw',
        image: 'https://imgs.search.brave.com/yy9oKEI9SH98YIvKkbOV6pkxl5ZGv8G69eLkxOnFMK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzI5/NWZiNzZjLTcxNzkt/NGM3MC1hNTA4LWEx/Y2NlNjFhODc2Zi9k/ZW9iNWY3LTk5MDE4/OWUzLWFjZWEtNDZh/OC1hODNlLTlkM2Ez/ZjQwMmQ4Ny5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/ekk1TldaaU56WmpM/VGN4TnprdE5HTTNN/QzFoTlRBNExXRXhZ/Mk5sTmpGaE9EYzJa/bHd2WkdWdllqVm1O/eTA1T1RBeE9EbGxN/eTFoWTJWaExUUTJZ/VGd0WVRnelpTMDVa/RE5oTTJZME1ESmtP/RGN1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAubS1ITV91TFRJ/bURnTmMtMWxkWW03/MHBfelU4bGVQT1RB/dzM0akZ3S2p4Zw',
        description: `
            <h3>A Serpente Gigante</h3>
            <p>Jörmungandr, também chamada de Serpente de Midgard, é um monstro colossal da mitologia nórdica, filho de Loki e da giganta Angrboða. Tão grande que circunda Midgard (o mundo dos homens), mordendo a própria cauda, Jörmungandr é um símbolo do caos e da destruição.</p>
            
            <h3>Inimigo de Thor</h3>
            <p>Jörmungandr é o arqui-inimigo de Thor, o deus do trovão. Em um mito, Thor tenta pescar a serpente com uma cabeça de boi como isca, quase trazendo-a à superfície, mas o gigante Hymir corta a linha. No Ragnarök, Thor e Jörmungandr se enfrentarão em uma batalha final, onde Thor matará a serpente, mas morrerá envenenado por seu veneno.</p>
            
            <h3>Curiosidades</h3>
            <ul class="facts-list">
                <li>O nome Jörmungandr significa "grande monstro" ou "serpente gigantesca" em nórdico antigo.</li>
                <li>Sua imagem como uma serpente mordendo a própria cauda é semelhante ao símbolo do Ouroboros, representando ciclos e eternidade.</li>
                <li>Jörmungandr é irmão de Fenrir e Hel, todos filhos de Loki e Angrboða.</li>
                <li>Seu tamanho é tão vasto que, segundo os mitos, ele pode causar terremotos ao se mover.</li>
            </ul>
        `
},
        
fenrir: {
name: 'Fenrir',
title: 'O Lobo Monstruoso',
icon: 'https://imgs.search.brave.com/vBGJosdcMa1W9xEQMb0CFONhO2GlIChufR7qTaDkzc0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JmL0ZlbnJpcl8o/TWFudWFsX29mX015/dGhvbG9neSkuanBn',
image: 'https://imgs.search.brave.com/QerYtS9qwAo6n_2RqqEs0WiUUYy6TwF1fx_B6rHIyj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzI5/NWZiNzZjLTcxNzkt/NGM3MC1hNTA4LWEx/Y2NlNjFhODc2Zi9k/YnIweDBoLTNiM2Vh/NjlkLTE5NDEtNDA5/Ni05MjJlLTRlNjZi/YzA2NTU4NS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/ekk1TldaaU56WmpM/VGN4TnprdE5HTTNN/QzFoTlRBNExXRXhZ/Mk5sTmpGaE9EYzJa/bHd2WkdKeU1IZ3dh/QzB6WWpObFlUWTVa/QzB4T1RReExUUXdP/VFl0T1RJeVpTMDBa/VFkyWW1Nd05qVTFP/RFV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuRFFoM3Z1MmlQ/OFdOUzlIaUVxaldO/bUhZVzhtU2RtV0RX/aVFyUzhtZTUyVQ',
description: `
    <h3>O Lobo do Caos</h3>
    <p>Fenrir é um lobo gigante da mitologia nórdica, filho de Loki e da giganta Angrboða. Conhecido por sua força descomunal e natureza feroz, ele é uma ameaça aos deuses, especialmente por sua profecia de destruição no Ragnarök.</p>
    
    <h3>A Prisão de Fenrir</h3>
    <p>Os deuses, temendo seu poder, tentaram aprisionar Fenrir. Após quebrar duas correntes, ele foi enganado para ser preso pela corrente mágica Gleipnir, feita pelos anões com materiais impossíveis (como o som de um gato e a barba de uma mulher). Fenrir mordeu a mão do deus Týr durante o processo, deixando-o maneta.</p>
    
    <h3>O Ragnarök</h3>
    <p>No Ragnarök, Fenrir se libertará e enfrentará Odin, devorando-o. Ele será vingado por Vidar, filho de Odin, que matará o lobo pisando em sua mandíbula e rasgando-o ao meio.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Fenrir é pai de dois lobos, Sköll e Hati, que perseguem o sol e a lua, respectivamente.</li>
        <li>Seu nome significa "lobo do pântano" ou simplesmente "lobo" em nórdico antigo.</li>
        <li>A corrente Gleipnir é um exemplo da habilidade dos anões em criar artefatos mágicos.</li>
        <li>Fenrir simboliza a força bruta e o caos inevitável que nem os deuses podem controlar.</li>
    </ul>
`
},

Nidhogg: {
    name: 'Nidhogg',
    title: 'O Devorador das Raízes',
    icon: 'https://i.pinimg.com/736x/06/8d/79/068d79feac8c49790433464d90c40682.jpg',
    image: 'https://i.pinimg.com/736x/95/8d/47/958d472846d007da87b57729114257e6.jpg',
    description: `
      <h3>O Dragão de Niflheim</h3>
      <p>Nidhogg é um dragão sombrio e serpentino que habita as profundezas de Niflheim, roendo incessantemente as raízes da árvore do mundo, Yggdrasil. Sua existência simboliza o ciclo eterno de destruição e renovação na cosmologia nórdica.</p>
      
      <h3>Inimigo do Cosmos</h3>
      <p>Ele representa as forças do caos e da corrupção. Enquanto os deuses lutam para manter a ordem no cosmos, Nidhogg lentamente enfraquece a base do universo ao corroer Yggdrasil. Seu ódio se estende até os deuses, os humanos e as próprias leis da existência.</p>
      
      <h3>Curiosidades</h3>
      <ul class="facts-list">
          <li>O nome "Nidhogg" pode ser traduzido como "Aquele que golpeia com ódio" ou "O Malicioso".</li>
          <li>Ele interage com a águia que vive no topo de Yggdrasil através do esquilo Ratatöskr, que leva insultos de um para o outro.</li>
          <li>Nidhogg também devora as almas dos mortos desonrados, no lugar chamado Náströnd.</li>
          <li>Durante o Ragnarök, Nidhogg aparece voando com cadáveres nas asas, representando a destruição final do mundo.</li>
      </ul>
    `
  },

valval: {
name: 'Valquíria',
title: 'As Escolhedoras dos Mortos',
icon: 'https://imgs.search.brave.com/rdU5adIXT5A_H7GNljMkSxW_6FH3FOaEfWK-2GKoD_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcml0/aWNhbGhpdHMuY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzExL1ZhbGt5/cmllXy1fQ291bmNp/bF9vZl9WYWxreXJp/ZXNfLV9TaWdydW5f/MWMtOTEweDUxMi53/ZWJw',
image: 'https://i.pinimg.com/736x/4d/57/5b/4d575b1794ea3c8b030ce140231a1279.jpg',
description: `
    <h3>As Guerreiras de Odin</h3>
    <p>As Valquírias são espíritos femininos que servem Odin, decidindo o destino dos guerreiros em batalha. Elas escolhem os mais valentes mortos para levá-los ao Valhalla, onde se tornarão Einherjar, guerreiros que lutarão ao lado de Odin no Ragnarök.</p>
    
    <h3>Papel nas Batalhas</h3>
    <p>Além de escolher os mortos, as Valquírias servem hidromel no Valhalla e, em alguns mitos, influenciam o resultado das batalhas, guiadas pelas ordens de Odin. Algumas, como Brynhildr, também têm histórias de amor trágicas com heróis mortais.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>O nome "Valquíria" significa "escolhedora dos mortos" em nórdico antigo.</li>
        <li>Elas são frequentemente retratadas como guerreiras montadas em cavalos alados ou voando com armaduras brilhantes.</li>
        <li>Brynhildr, uma Valquíria famosa, aparece na saga dos Volsungos e no ciclo do Anel do Nibelungo.</li>
        <li>Algumas Valquírias, como Sigrún, são descritas como filhas de reis humanos que se tornaram divinas.</li>
    </ul>
`
},
Dvergar: {
name: 'Dvergar (Anões)',
title: 'Mestres Artesãos',
icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxU04W7invhLghWBCLu7rI_yIlDgBSVM-xMg&s',
image: 'https://i.redd.it/atreus-and-his-three-companions-vs-heimdall-who-wins-v0-npu00b1vvy9d1.png?width=360&format=png&auto=webp&s=3b44dc2c18f547972b366b4f2d593256a6c6c22a',
description: `
    <h3>Os Criadores de Tesouros</h3>
    <p>Os Dvergar, ou anões, são seres da mitologia nórdica conhecidos por sua habilidade em forjar objetos mágicos. Vivendo em cavernas e montanhas, frequentemente em Svartalfheim, eles criaram muitos dos artefatos mais poderosos dos deuses.</p>
    
    <h3>Obras Famosas</h3>
    <p>Os anões forjaram o martelo de Thor (Mjolnir), a lança de Odin (Gungnir), o navio de Freyr (Skíðblaðnir) e a corrente Gleipnir, que prendeu Fenrir. Sua habilidade é tão valorizada que os deuses frequentemente recorrem a eles para criar ou reparar itens mágicos.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Os anões são descritos como pequenos, barbudos e habilidosos, vivendo sob a terra.</li>
        <li>Alguns mitos sugerem que os anões foram criados a partir dos vermes que roíam o corpo de Ymir.</li>
        <li>Os irmãos anões Brokkr e Eitri competiram com os filhos de Ivaldi para criar tesouros para os deuses.</li>
        <li>Em alguns contos, anões são gananciosos ou vingativos, como no caso do anão Andvari e seu anel amaldiçoado.</li>
    </ul>
`
},
Sleipnir: {
name: 'Sleipnir',
title: 'O Cavalo de Oito Patas',
icon: 'https://usekahla.com/cdn/shop/articles/1477558_564739076954055_60878515_n_81da4b83-f513-4ed4-9836-b5ae3d33e2a8.jpg?v=1699552215&width=600',
image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ddab06e-67f8-4587-bbf4-d35bc026f214/d4u4sa3-a1a3d302-245c-4e30-8d6f-0b4c0bca0502.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkZGFiMDZlLTY3ZjgtNDU4Ny1iYmY0LWQzNWJjMDI2ZjIxNFwvZDR1NHNhMy1hMWEzZDMwMi0yNDVjLTRlMzAtOGQ2Zi0wYjRjMGJjYTA1MDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VALKXTrTTRVLoS_qDZ1zvn09E4bt67twlkqJHB6ywVk',
description: `
    <h3>O Corcel Divino</h3>
    <p>Sleipnir é o cavalo mágico de Odin, conhecido por suas oito patas, que o tornam o mais rápido e ágil de todos os cavalos. Filho de Loki (transformado em égua) e do cavalo gigante Svaðilfari, Sleipnir é um símbolo de velocidade e conexão entre os mundos.</p>
    
    <h3>Viagens de Odin</h3>
    <p>Odin cavalga Sleipnir para viajar entre os nove mundos, incluindo jornadas a Helheim e Jotunheim. Sua capacidade de atravessar terra, mar e ar o torna indispensável para o Pai de Todos.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Sleipnir é descrito como cinzento e capaz de correr mais rápido que o vento.</li>
        <li>Seu nascimento é resultado de um plano de Loki para impedir a construção de uma muralha em Asgard por um gigante.</li>
        <li>Ele é frequentemente associado ao xamanismo, representando a jornada espiritual entre mundos.</li>
        <li>Estelas nórdicas, como a Pedra de Tjängvide, retratam um cavalo de oito patas que pode ser Sleipnir.</li>
    </ul>
`
},
Ratatoskr: {
name: 'Ratatoskr',
title: 'O Mensageiro da Yggdrasil',
icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGOsN6OCZaNi3GaWYPVla48bs38u65_VICQ&s',
image: 'https://i.psnprofiles.com/guides/15509/96ba28.png',
description: `
    <h3>O Esquilo Falante</h3>
    <p>Ratatoskr é um esquilo que vive na árvore do mundo, Yggdrasil, correndo entre suas raízes e copa para levar mensagens. Ele é conhecido por sua agilidade e por seu papel como um provocador entre os habitantes da árvore.</p>
    
    <h3>Conflito na Yggdrasil</h3>
    <p>Ratatoskr carrega insultos entre a águia que vive na copa da Yggdrasil e a serpente Níðhöggr, que rói suas raízes. Esse comportamento mantém uma tensão constante entre os dois, simbolizando o equilíbrio entre ordem e caos.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>O nome Ratatoskr significa "dente de broca" ou "dente viajante", referindo-se à sua agilidade.</li>
        <li>Ele é um dos poucos animais com um papel ativo na mitologia nórdica, além de corvos e lobos.</li>
        <li>Alguns interpretam Ratatoskr como um símbolo da fofoca ou da comunicação maliciosa.</li>
        <li>Sua presença na Yggdrasil reforça a ideia da árvore como um microcosmo dos nove mundos.</li>
    </ul>
`
},
corvosfdp: {
name: 'Huginn e Muninn',
title: 'Os Corvos de Odin',
icon: 'src/coco.jpg',
image: 'src/coco2.png',
description: `
    <h3>Os Olhos de Odin</h3>
    <p>Huginn (pensamento) e Muninn (memória) são os dois corvos de Odin, que voam pelos nove mundos todos os dias para coletar informações. Ao retornar, eles sussurram tudo o que viram e ouviram ao Pai de Todos.</p>
    
    <h3>Vigilância e Sabedoria</h3>
    <p>Os corvos permitem que Odin mantenha sua onisciência, sabendo dos eventos em Midgard, Asgard e além. Sua presença reforça a conexão de Odin com a sabedoria e a vigilância, mas ele teme que um dia eles não retornem.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Os nomes Huginn e Muninn derivam de palavras nórdicas para "pensamento" e "memória".</li>
        <li>Corvos são símbolos de inteligência e mistério em muitas culturas, incluindo a nórdica.</li>
        <li>Eles são frequentemente retratados pousados nos ombros de Odin em arte viking.</li>
        <li>Alguns mitos sugerem que Odin envia Huginn e Muninn para vigiar seus inimigos, como Loki.</li>
    </ul>
`
},
Hel: {
name: 'Hel',
title: 'Rainha do Mundo dos Mortos',
icon: 'https://i.pinimg.com/736x/35/49/85/3549852de40297363121009174d928cb.jpg',
image: 'src/hel.png',
description: `
    <h3>A Governante de Helheim</h3>
    <p>Hel é a deusa que preside Helheim, o reino dos mortos que não morreram em batalha. Filha de Loki e da giganta Angrboða, ela é descrita como metade viva e metade morta, com um rosto dividido entre beleza e decomposição.</p>
    
    <h3>O Destino de Baldr</h3>
    <p>Após a morte de Baldr, Hermod viajou a Helheim para pedir que Hel o libertasse. Hel concordou, desde que todas as coisas do mundo chorassem por Baldr. Quando a giganta Þökk (provavelmente Loki disfarçado) recusou, Baldr permaneceu em Helheim.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>O nome Hel significa "oculta" ou "escondida", refletindo seu papel no submundo.</li>
        <li>Ela é irmã de Fenrir e Jörmungandr, formando o trio de filhos monstruosos de Loki.</li>
        <li>Helheim, seu reino, é descrito como frio, escuro e cercado pelo rio Gjöll.</li>
        <li>Alguns estudiosos veem paralelos entre Hel e divindades do submundo, como Hades ou Perséfone.</li>
    </ul>
`
}

}
const reinos = {
asgard: {
name: 'Asgard',
title: 'Reino dos Deuses Æsir',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://i.pinimg.com/736x/07/fb/ce/07fbced0633591b91a646dca811fbfbb.jpg',
description: `
    <h3>A Morada Divina</h3>
    <p>Asgard é o reino celestial dos deuses Æsir, liderados por Odin. Localizado no topo da Yggdrasil, é um lugar de salões dourados, como o Valhalla, e muralhas fortificadas, construídas por um gigante enganado por Loki.</p>
    
    <h3>Estrutura e Acesso</h3>
    <p>Asgard é conectado a Midgard pela ponte arco-íris Bifröst, guardada por Heimdall. Seus salões incluem Gladsheim (para reuniões dos deuses) e Vingólf (para as deusas). O reino é um símbolo de ordem e poder divino.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Asgard será destruído no Ragnarök, mas um novo mundo surgirá após a batalha.</li>
        <li>O Valhalla, salão de Odin em Asgard, abriga os guerreiros escolhidos pelas Valquírias.</li>
        <li>A muralha de Asgard foi construída com a ajuda de Sleipnir, o cavalo de Loki.</li>
        <li>Asgard é frequentemente retratado como uma cidade brilhante flutuando no céu.</li>
    </ul>
`
},
vanaheim: {
name: 'Vanaheim',
title: 'Reino dos Deuses Vanir',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://imgs.search.brave.com/AKEk2woDxQPmtJhhUJdJ942q0dRu8FPRGFerGhAkuUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWtp/bmdyLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMi8x/LVZhbmFoZWltLmpw/Zw',
description: `
    <h3>O Lar dos Vanir</h3>
    <p>Vanaheim é o reino dos deuses Vanir, associados à fertilidade, natureza e magia. Deuses como Njörd, Freyr e Freyja são originários de Vanaheim, que é descrito como um lugar de abundância e beleza natural.</p>
    
    <h3>A Guerra Æsir-Vanir</h3>
    <p>Vanaheim foi o centro de uma guerra contra os Æsir, que terminou com um tratado de paz e a troca de reféns, como Njörd e seus filhos, que se mudaram para Asgard. A guerra simboliza o conflito entre ordem e natureza.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Vanaheim é menos descrito nos mitos, mas é associado a florestas e campos férteis.</li>
        <li>Os Vanir são mestres da magia seiðr, uma prática ensinada por Freyja aos Æsir.</li>
        <li>Após a guerra, Vanaheim e Asgard mantiveram uma relação de cooperação.</li>
        <li>O nome Vanaheim significa "lar dos Vanir" em nórdico antigo.</li>
    </ul>
`
},
midgard: {
name: 'Midgard',
title: 'Mundo dos Homens',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://i.pinimg.com/736x/e6/2d/ec/e62dec52391c240aeeccd1053bef0e31.jpg',
description: `
    <h3>O Reino Humano</h3>
    <p>Midgard é o mundo dos homens, criado pelos deuses Odin, Vili e Vé a partir do corpo do gigante Ymir. Cercado pela serpente Jörmungandr, é o centro dos nove mundos, conectado a Asgard pela ponte Bifröst.</p>
    
    <h3>Criação e Proteção</h3>
    <p>Os primeiros humanos, Ask e Embla, foram criados por Odin a partir de troncos de árvores. Midgard é protegido por Thor, que frequentemente enfrenta gigantes para defender os mortais.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Midgard significa "recinto do meio" ou "terra do meio" em nórdico antigo.</li>
        <li>A ponte Bifröst será destruída no Ragnarök, isolando Midgard dos outros mundos.</li>
        <li>Midgard é descrito como cercado por um grande oceano onde Jörmungandr reside.</li>
        <li>Os mitos sugerem que Midgard será reconstruído após o Ragnarök, com novos habitantes.</li>
    </ul>
`
},
jotunheim: {
name: 'Jotunheim',
title: 'Terra dos Gigantes',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://i.pinimg.com/736x/cc/79/6d/cc796d4aa43d0b9161511582d9ff0dbb.jpg',
description: `
    <h3>O Reino dos Jötnar</h3>
    <p>Jotunheim é o mundo dos gigantes (Jötnar), inimigos frequentes dos deuses Æsir. Localizado além de Midgard, é um lugar selvagem, com montanhas, florestas densas e cavernas, habitado por seres como Þrym e Skaði.</p>
    
    <h3>Conflitos com os Deuses</h3>
    <p>Os gigantes de Jotunheim frequentemente desafiam os deuses, como no roubo do martelo de Thor por Þrym ou nas tentativas de invadir Asgard. Apesar disso, alguns gigantes, como Skaði, se aliam aos deuses por casamento ou acordos.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Jotunheim significa "lar dos gigantes" em nórdico antigo.</li>
        <li>Utgarðr, uma fortaleza em Jotunheim, é palco de desafios entre Thor e o gigante Utgarða-Loki.</li>
        <li>Muitos deuses, como Odin e Thor, têm ascendência gigante, mostrando a complexidade das relações com Jotunheim.</li>
        <li>O reino é descrito como caótico e hostil, contrastando com a ordem de Asgard.</li>
    </ul>
`
},
niflheim: {
name: 'Niflheim',
title: 'Mundo do Gelo e da Névoa',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://i.pinimg.com/736x/b8/73/2a/b8732a4e94657928a92389691e396cc2.jpg',
description: `
    <h3>O Reino Gelado</h3>
    <p>Niflheim é um dos mundos primordiais, um lugar de gelo, névoa e escuridão. Junto com Muspelheim, contribuiu para a criação do universo, quando seus rios gelados encontraram as chamas de Muspelheim, dando origem a Ymir.</p>
    
    <h3>Helheim e Niflheim</h3>
    <p>Niflheim é às vezes associado a Helheim, o reino dos mortos governado por Hel. Seus rios congelados, como Élivágar, são fontes de frio eterno que alimentam a Yggdrasil.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Niflheim significa "mundo da névoa" ou "lar da escuridão" em nórdico antigo.</li>
        <li>É descrito como um dos primeiros mundos, existindo antes da criação de Midgard.</li>
        <li>Os rios Élivágar são considerados a origem de toda a matéria no cosmos nórdico.</li>
        <li>Niflheim contrasta com Muspelheim, representando o equilíbrio entre frio e calor.</li>
    </ul>
`
},
muspelheim: {
name: 'Muspelheim',
title: 'Mundo do Fogo',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://i.pinimg.com/736x/06/41/52/06415277ebbf89ca71d77f02deec4b76.jpg',
description: `
    <h3>O Reino Flamejante</h3>
    <p>Muspelheim é o mundo do fogo, lar de chamas eternas e do gigante de fogo Surtr. Junto com Niflheim, foi essencial para a criação do universo, quando o calor de Muspelheim derreteu o gelo de Niflheim, formando Ymir.</p>
    
    <h3>Surtr e o Ragnarök</h3>
    <p>Surtr, o governante de Muspelheim, desempenha um papel crucial no Ragnarök. Com sua espada flamejante, ele incendiará os nove mundos, destruindo Asgard e matando Freyr, antes de perecer na batalha final.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Muspelheim significa "lar do fogo" ou "mundo das chamas" em nórdico antigo.</li>
        <li>É descrito como um lugar inóspito, acessível apenas por seres resistentes ao calor extremo.</li>
        <li>Surtr é um dos poucos habitantes nomeados de Muspelheim nos mitos.</li>
        <li>O contraste entre Muspelheim e Niflheim simboliza a dualidade cósmica nórdica.</li>
    </ul>
`
},
alfheim: {
name: 'Alfheim',
title: 'Mundo dos Elfos Luminosos',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://i.pinimg.com/736x/06/56/a4/0656a44be8210d000d1fc95e4cf6629a.jpg',
description: `
    <h3>O Reino da Luz</h3>
    <p>Alfheim é o mundo dos elfos luminosos (Ljósálfar), seres associados à beleza, luz e natureza. Governado por Freyr, Alfheim é descrito como um lugar de brilho etéreo e harmonia.</p>
    
    <h3>Os Elfos Luminosos</h3>
    <p>Os elfos de Alfheim são espíritos benevolentes, contrastando com os elfos negros de Svartalfheim. Pouco se sabe sobre suas ações, mas eles são aliados dos deuses Vanir, especialmente Freyr.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Alfheim significa "lar dos elfos" em nórdico antigo.</li>
        <li>Freyr recebeu Alfheim como presente quando era jovem, reforçando sua conexão com a fertilidade.</li>
        <li>Os elfos luminosos são às vezes comparados a anjos ou espíritos da natureza.</li>
        <li>Alfheim é raramente mencionado nos mitos, sendo um dos mundos menos explorados.</li>
    </ul>
`
},
svartalfheim: {
name: 'Svartalfheim',
title: 'Mundo dos Elfos Negros e Anões',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://imgs.search.brave.com/WOL5_6qveLz49AWDIo1Zyi8t9VTBi6gx71FD-6MfYQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlraW5nY2VsdGlj/LmZyL2Nkbi9zaG9w/L2FydGljbGVzL1N2/YXJ0YWxmaGVpbV9t/b25kZV9kZXNfbmFp/bnNfMTAyNHgxMDI0/LmpwZz92PTE2MTU5/Njg3MzQ',
description: `
    <h3>O Reino Subterrâneo</h3>
    <p>Svartalfheim é o mundo dos elfos negros (Dökkálfar) e, em algumas interpretações, dos anões. Um lugar sombrio e subterrâneo, é conhecido pela habilidade de seus habitantes em forjar objetos mágicos.</p>
    
    <h3>Os Elfos Negros e Anões</h3>
    <p>Os elfos negros são seres misteriosos, possivelmente malévolos, enquanto os anões de Svartalfheim criaram artefatos como Mjolnir e Gungnir. A distinção entre elfos negros e anões nem sempre é clara nos mitos.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Svartalfheim significa "lar dos elfos negros" em nórdico antigo.</li>
        <li>Os anões de Svartalfheim são frequentemente confundidos com os Dvergar de outros mitos.</li>
        <li>O reino é descrito como um labirinto de cavernas escuras e ricas em minérios.</li>
        <li>Os elfos negros contrastam com os elfos luminosos de Alfheim, representando trevas contra luz.</li>
    </ul>
`
},
helheim: {
name: 'Helheim',
title: 'Reino dos Mortos',
icon: 'https://imgs.search.brave.com/e9jWQ3tEN2QyxgfvxJ7DMzCDGdY4D4Zej6tGwvGsNV8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNDAt/MzQwOTExMF95Z2dk/cmFzaWwtZ2FtaW5n/LWxvZ28tcG5nLXRy/YW5zcGFyZW50LXBu/Zy5wbmc',
image: 'https://i.pinimg.com/736x/c5/6a/ad/c56aad68fbc78f6b197f55f28c41b5ec.jpg',
description: `
    <h3>O Mundo dos Mortos</h3>
    <p>Helheim é o reino dos mortos que não morreram em batalha, governado pela deusa Hel. Um lugar frio, escuro e triste, é separado dos outros mundos pelo rio Gjöll e guardado pelo cão Garm.</p>
    
    <h3>A Jornada a Helheim</h3>
    <p>Os mortos em Helheim levam vidas sombrias, sem a glória do Valhalla. Hermod viajou a Helheim para tentar resgatar Baldr, mas falhou devido à recusa da giganta Þökk em chorar por ele.</p>
    
    <h3>Curiosidades</h3>
    <ul class="facts-list">
        <li>Helheim significa "lar de Hel" ou "mundo oculto" em nórdico antigo.</li>
        <li>O cão Garm, que guarda a entrada, enfrentará Týr no Ragnarök, com ambos morrendo.</li>
        <li>Helheim é às vezes confundido com Niflheim, mas é um reino distinto nos mitos.</li>
        <li>Os mortos em Helheim são descritos como sombras, sem força ou alegria.</li>
    </ul>
`
}
};

// Dados para o quiz
// Dados do quiz
const quizData = [
    {
        question: "Quem é considerado o 'Pai de Todos' na mitologia nórdica?",
        options: ["Thor", "Loki", "Odin", "Freyr"],
        correct: 2
    },
    {
        question: "Qual é a arma característica de Thor?",
        options: ["Gungnir (lança)", "Mjölnir (martelo)", "Gram (espada)", "Laevateinn (espada mágica)"],
        correct: 1
    },
    {
        question: "Qual criatura envolve o mundo de Midgard, mordendo sua própria cauda?",
        options: ["Fenrir", "Hati", "Jörmungandr", "Níðhöggr"],
        correct: 2
    },
    {
        question: "Como se chama a ponte arco-íris que conecta Asgard e Midgard?",
        options: ["Yggdrasil", "Bifröst", "Gjallarbru", "Gjallarhorn"],
        correct: 1
    },
    {
        question: "Quais são os corvos de Odin?",
        options: ["Geri e Freki", "Sleipnir e Svadilfari", "Huginn e Muninn", "Skoll e Hati"],
        correct: 2
    },
    {
        question: "O que acontecerá no evento apocalíptico chamado Ragnarök?",
        options: ["Os gigantes vencerão e governarão os nove mundos", "O mundo será destruído e renascerá", "Odin se tornará o único deus", "Os humanos se tornarão imortais"],
        correct: 1
    },
    {
        question: "Qual deus perdeu sua mão direita ao acorrentar o lobo Fenrir?",
        options: ["Thor", "Tyr", "Heimdall", "Baldr"],
        correct: 1
    },
    {
        question: "Qual era o colar precioso de Freya?",
        options: ["Draupnir", "Brísingamen", "Gleipnir", "Gungnir"],
        correct: 1
    },
    {
        question: "Qual era o único objeto que poderia matar Baldr?",
        options: ["Uma espada forjada por anões", "Fogo das terras de Muspelheim", "Um ramo de visco", "Veneno da serpente de Midgard"],
        correct: 2
    },
    {
        question: "Qual é o nome da árvore cósmica que sustenta os nove mundos?",
        options: ["Yggdrasil", "Bifröst", "Asgard", "Gjallarhorn"],
        correct: 0
    },
    // Novas perguntas adicionadas
    {
        question: "Quem é considerado o guardião de Bifröst?",
        options: ["Heimdall", "Freyr", "Bragi", "Hodr"],
        correct: 0
    },
    {
        question: "Qual é o nome do salão de Odin onde os guerreiros mortos em batalha são recebidos?",
        options: ["Folkvangr", "Sessrúmnir", "Valhalla", "Helheim"],
        correct: 2
    },
    {
        question: "Quem são as mulheres guerreiras que escolhem os mortos em batalha?",
        options: ["Nornas", "Valquírias", "Dísir", "Fylgjur"],
        correct: 1
    },
    {
        question: "Qual é o nome do lobo que persegue o Sol?",
        options: ["Fenrir", "Garm", "Skoll", "Hati"],
        correct: 2
    },
    {
        question: "O que Ymir representa na mitologia nórdica?",
        options: ["O primeiro anão", "O primeiro gigante", "O primeiro deus", "O primeiro humano"],
        correct: 1
    },
    {
        question: "Quais são os nomes dos dois primeiros humanos criados pelos deuses?",
        options: ["Audhumbla e Buri", "Fjalar e Galar", "Ask e Embla", "Magni e Modi"],
        correct: 2
    },
    {
        question: "Qual é o animal de estimação associado a Freya?",
        options: ["Um javali", "Um gato", "Um corvo", "Um lobo"],
        correct: 1
    },
    {
        question: "Quem matou Baldr segundo a mitologia?",
        options: ["Thor", "Loki", "Hodr", "Tyr"],
        correct: 2
    },
    {
        question: "Qual é o nome do barco feito das unhas dos mortos que será usado no Ragnarök?",
        options: ["Skidbladnir", "Naglfar", "Hringhorni", "Sessrúmnir"],
        correct: 1
    },
    {
        question: "O que são as Nornas na mitologia nórdica?",
        options: ["Deusas da guerra", "Tecelãs do destino", "Gigantes do gelo", "Espíritos da floresta"],
        correct: 1
    }
];

// Variáveis para o quiz
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// Função para carregar o quiz
function loadQuiz() {
    const questionContainer = document.getElementById('questionContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    const question = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const nextBtn = document.getElementById('nextBtn');
    const restartBtn = document.getElementById('restartBtn');
    
    if (!questionContainer || !resultsContainer || !question || !optionsContainer || !nextBtn || !restartBtn) return;
    
    // Reiniciar quiz
    restartBtn.addEventListener('click', function() {
        currentQuestion = 0;
        score = 0;
        resultsContainer.style.display = 'none';
        questionContainer.style.display = 'block';
        loadQuestion();
    });
    
    // Próxima pergunta ou mostrar resultados
    nextBtn.addEventListener('click', function() {
        // Verificar se alguma opção está selecionada observando a classe 'selected'
        const anySelected = document.querySelector('.quiz-option.selected');
        
        if (anySelected) {
            // Agora usamos o valor armazenado em selectedOption que foi definido quando o usuário clicou na opção
            if (selectedOption === quizData[currentQuestion].correct) {
                score++;
            }
            
            currentQuestion++;
            selectedOption = null;
            
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        } else {
            ('Por favor, selecione uma opção antes de continuar.');
        }
    });
    
    // Carregar a primeira pergunta
    loadQuestion();
    
    // Função para carregar uma pergunta
    function loadQuestion() {
        const currentQuiz = quizData[currentQuestion];
        question.textContent = currentQuiz.question;
        
        optionsContainer.innerHTML = '';
        
        currentQuiz.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('quiz-option');
            optionDiv.textContent = option;
            optionDiv.dataset.index = index;
            
            optionDiv.addEventListener('click', function() {
                const options = document.querySelectorAll('.quiz-option');
                options.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                selectedOption = parseInt(this.dataset.index);
            });
            
            optionsContainer.appendChild(optionDiv);
        });
        
        // Indicador de progresso
        const progressIndicator = document.createElement('div');
        progressIndicator.classList.add('progress-indicator');
        progressIndicator.textContent = `Pergunta ${currentQuestion + 1} de ${quizData.length}`;
        optionsContainer.appendChild(progressIndicator);
        
        nextBtn.textContent = currentQuestion === quizData.length - 1 ? 'Finalizar' : 'Próxima Pergunta';
    }
    
    // Função para mostrar resultados
    function showResults() {
        questionContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        const scoreText = document.getElementById('score');
        const progressBar = document.getElementById('progressBar');
        const feedback = document.getElementById('feedback');
        
        const percentage = Math.round((score / quizData.length) * 100);
        scoreText.textContent = `Você acertou ${score} de ${quizData.length} perguntas (${percentage}%)`;
        
        progressBar.style.width = `${percentage}%`;
        
        // Feedback baseado na pontuação
        if (percentage >= 90) {
            feedback.textContent = 'Impressionante! Você claramente tem o conhecimento digno de um escaldo!';
        } else if (percentage >= 70) {
            feedback.textContent = 'Muito bom! Os deuses estão sorrindo para você!';
        } else if (percentage >= 50) {
            feedback.textContent = 'Bom trabalho! Continue aprendendo sobre os mitos nórdicos.';
        } else {
            feedback.textContent = 'Continue explorando o site para aprender mais sobre a mitologia nórdica!';
        }
        
        // Adicionar detalhamento das respostas
        const detailedResults = document.createElement('div');
        detailedResults.classList.add('detailed-results');
        
        const detailedTitle = document.createElement('h3');
        detailedTitle.textContent = 'Revisão das Perguntas:';
        detailedResults.appendChild(detailedTitle);
        
        const resultsList = document.createElement('ul');
        resultsList.classList.add('results-list');
        
        quizData.forEach((quizItem, index) => {
            const resultItem = document.createElement('li');
            resultItem.classList.add('result-item');
            
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === quizItem.correct;
            
            resultItem.innerHTML = `
                <strong>Pergunta ${index + 1}:</strong> ${quizItem.question}
                <br>
                <span class="${isCorrect ? 'correct' : 'incorrect'}">
                    Sua resposta: ${quizItem.options[userAnswer] || 'Não respondida'}
                    ${isCorrect ? '✓' : '✗'}
                </span>
                <br>
                <span class="correct-answer">
                    Resposta correta: ${quizItem.options[quizItem.correct]}
                </span>
            `;
            
            resultsList.appendChild(resultItem);
        });
        
        detailedResults.appendChild(resultsList);
        resultsContainer.appendChild(detailedResults);
    }
}

// Array para armazenar as respostas do usuário
const userAnswers = [];

// Função para atualizar a resposta do usuário no array
function updateUserAnswer(questionIndex, selectedOption) {
    userAnswers[questionIndex] = selectedOption;
}

// Inicializar o quiz quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    loadQuiz();
});

// Função para mostrar modal - adaptada para funcionar com deuses, criaturas e reinos
document.addEventListener('DOMContentLoaded', function() {
    // Criar runas de fundo
    if (typeof createRunesBackground === 'function') {
        createRunesBackground();
    }
    
    // Evento de menu mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Animação nas seções quando entrarem no viewport
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Carregando o quiz
    if (typeof loadQuiz === 'function') {
        loadQuiz();
    }
    
    // Identificar seção e adicionar atributos data aos cards que não os têm
    const deusesSection = document.getElementById('deuses');
    const criaturasSection = document.getElementById('criaturas');
    const mundosSection = document.getElementById('mundos');
    
    // Adicionar data-god automaticamente para cards na seção deuses que não têm
    if (deusesSection) {
        const deusCards = deusesSection.querySelectorAll('.god-card:not([data-god])');
        deusCards.forEach(card => {
            const nomeDeus = card.querySelector('h3').textContent.trim().toLowerCase();
            card.setAttribute('data-god', nomeDeus);
        });
    }
    
    // Adicionar data-creature para cards na seção criaturas
    if (criaturasSection) {
        const criaturaCards = criaturasSection.querySelectorAll('.god-card');
        criaturaCards.forEach(card => {
            const nomeCriatura = card.querySelector('h3').textContent.trim().toLowerCase();
            card.setAttribute('data-creature', nomeCriatura);
        });
    }
    
    // Adicionar data-realm para cards na seção mundos
    if (mundosSection) {
        const mundoCards = mundosSection.querySelectorAll('.god-card');
        mundoCards.forEach(card => {
            const nomeMundo = card.querySelector('h3').textContent.trim().toLowerCase();
            card.setAttribute('data-realm', nomeMundo);
        });
    }
    
    // Adicionar eventos para todos os cards
    // Cards de deuses
    const godCards = document.querySelectorAll('.god-card[data-god]');
    godCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('read-more')) return; // Ignorar cliques no link "Saiba mais"
            const godId = this.getAttribute('data-god');
            showEntityModal(godId, 'god');
        });
    });
    
    // Cards de criaturas
    const creatureCards = document.querySelectorAll('.god-card[data-creature]');
    creatureCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('read-more')) return; // Ignorar cliques no link "Saiba mais"
            const creatureId = this.getAttribute('data-creature');
            showEntityModal(creatureId, 'creature');
        });
    });
    
    // Cards de reinos/mundos
    const realmCards = document.querySelectorAll('.god-card[data-realm]');
    realmCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('read-more')) return; // Ignorar cliques no link "Saiba mais"
            const realmId = this.getAttribute('data-realm');
            showEntityModal(realmId, 'realm');
        });
    });
    
    // Adicionar evento para todos os links "Saiba mais"
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Verificar se tem atributo data-entity
            if (this.hasAttribute('data-entity')) {
                const entityId = this.getAttribute('data-entity');
                // Verificar em qual array de dados existe esta entidade
                if (godsData[entityId]) {
                    showEntityModal(entityId, 'god');
                } else if (mythology[entityId]) {
                    showEntityModal(entityId, 'creature');
                } else if (reinos[entityId]) {
                    showEntityModal(entityId, 'realm');
                }
            } else {
                // Buscar pelo card pai para determinar o tipo de entidade
                const card = this.closest('.god-card');
                if (card) {
                    if (card.hasAttribute('data-god')) {
                        showEntityModal(card.getAttribute('data-god'), 'god');
                    } else if (card.hasAttribute('data-creature')) {
                        showEntityModal(card.getAttribute('data-creature'), 'creature');
                    } else if (card.hasAttribute('data-realm')) {
                        showEntityModal(card.getAttribute('data-realm'), 'realm');
                    }
                }
            }
        });
    });
    
    // Evento para fechar modal
    const closeModal = document.getElementById('closeModal');
    const modal = document.getElementById('godModal');
    
    if (closeModal && modal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Evento para fechar modal ao clicar fora
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Botão de tema escuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle && typeof toggleDarkMode === 'function') {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Links de navegação suaves
    const navAnchors = document.querySelectorAll('a[href^="#"]');
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignorar links vazios
            
            e.preventDefault();
            
            // Fechar menu mobile se estiver aberto
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Função para mostrar modal de entidade (deus, criatura ou reino)
function showEntityModal(entityId, entityType) {
    let entityData;
    
    // Determinar qual conjunto de dados usar
    if (entityType === 'god') {
        entityData = godsData[entityId];
    } else if (entityType === 'creature') {
        entityData = mythology[entityId];
    } else if (entityType === 'realm') {
        entityData = reinos[entityId];
    }
    
    // Verificar se os dados existem
    if (!entityData) {
        console.error(`Dados não encontrados para: ${entityId} (tipo: ${entityType})`);
        return;
    }
    
    // Obter elementos do modal
    const modal = document.getElementById('godModal');
    const modalName = document.getElementById('modalGodName');
    const modalTitle = document.getElementById('modalGodTitle');
    const modalIcon = document.getElementById('modalGodIcon');
    const modalImage = document.getElementById('modalGodImage');
    const modalDescription = document.getElementById('modalGodDescription');
    
    if (!modal || !modalName || !modalTitle || !modalIcon || !modalImage || !modalDescription) {
        console.error('Elementos do modal não encontrados');
        return;
    }
    
    // Preencher o modal com os dados
    modalName.textContent = entityData.name;
    modalTitle.textContent = entityData.title;
    
    if (entityData.icon) {
        modalIcon.src = entityData.icon;
        modalIcon.alt = entityData.name;
    }
    
    if (entityData.image) {
        modalImage.src = entityData.image;
        modalImage.alt = entityData.name;
    }
    
    modalDescription.innerHTML = entityData.description;
    
    // Exibir o modal
    modal.style.display = 'block';
}

