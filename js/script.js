'use strict';

(() => {
  const TEST_MINT = '24GbANeJAPachFLdAqVAwT2hJGHxLSAZ78qvwKhLwYWd';

  const LINKS = {
    discord: 'https://discord.gg/DHVNxAUUx',
    x: 'https://x.com/SolanaBeeGame',
    play: 'https://solanabee.com/jogar',
    discordLogin: 'https://solanabee.com/entrar/discord',
    kast1: './kast1/',
    pump: (ca) => `https://pump.fun/coin/${ca}`,
    solscan: (hash, type = 'tx') => `https://solscan.io/${type}/${hash}`,
  };

  const LOCALES = {
    pt: 'pt-BR',
    en: 'en-US',
    es: 'es-ES',
    tl: 'fil-PH',
  };

  // Real snapshot captured from solanabee.com live token state
  const LIVE_SNAPSHOT = {
    lancamento: 1793613600,
    jogo: null,
    mint: 'BLM4DVkDAKXxi9YJDWPyPsRC9Ao2bqhDU3A8pYVwgHYw',
    simbolo: 'NEC',
    rede: 'mainnet',
    supply: 846406274.515004,
    inicial: 1000000000,
    queimado: 153593725.48499596,
    queimadoPct: 0.15359372548499597,
    precoSol: 0.000001243,
    solUsd: 72.05,
    precoUsd: 0.00008955815,
    pool: { dex: 'pumpswap', par: '6EbQSBTaWcfha1L4L7dQEgWDoCpH2gW6MLgFru3vbbng' },
    mcapSol: 1052.08299922215,
    mcapUsd: 75802.5800939559,
    curva: { progresso: 1, formada: true, solNaCurva: 0 },
    queimas: [
      {
        sig: '3Gnpx4BKGG1f1fGCZK5DH1vyMkk3vhnQyMMAQnzErR1sS4D8st7MABCCH8vcgsJcLLBTUY3Ruf3wtRWw1Rr93D51',
        t: 1794740377,
        valor: 496.624562,
      },
      {
        sig: '38EmWDGBqPE5LDXD6qXewSHzEVX4y7ZZi1nrj7koCfi5mwWLyAreU4PYYrCDT9xjZCqJLGhLxYBE7wFjnxQwtXym',
        t: 1794740301,
        valor: 496.18479,
      },
      {
        sig: '5v1c3tfSeUfnyHJCKZoWnnaP6GqRPaBmgLRw1UZnxcxioS9MFJi5ZBs8qxENEsqLR8wHRHAaA5vVVJ43wwgR3Tjo',
        t: 1794740285,
        valor: 495.581868,
      },
      {
        sig: '5V6p6JwuHDSpifwDnAwkN8U1EqfijeKAteaYYjVQ9kyi1eTU5zewyq1Vv7RwN1xEkZgXnMn7uq4EVBGj4vgsW7LQ',
        t: 1794740194,
        valor: 6000,
      },
      {
        sig: '1L11Vi1y2LrEosn6N2s7GKSyGtqhpqtUTpJhgEhpqYDzS7Eh2QW9z9JYbLiKfNw7duSdEZEUF3skiBdZiuNp3iF',
        t: 1794740073,
        valor: 397.61522,
      },
    ],
  };

  const TRANSLATIONS = {
    pt: {
      'nav.token': 'Token',
      'nav.burn': 'Queima',
      'nav.buy': 'Como comprar',
      'nav.game': 'O jogo',
      'nav.affiliates': 'Afiliados',
      'nav.play': 'Jogar',
      'nav.discord': 'Discord',
      'hero.badgeToken': 'Lançamento do token · pump.fun · Solana',
      'hero.badgeJogo': 'Token no ar · pump.fun · Solana',
      'hero.badgeAberto': 'Token e jogo no ar',
      'hero.titleToken': 'O token nasce em',
      'hero.titleJogo': 'O jogo abre em',
      'hero.titleAberto': 'A colmeia está aberta!',
      'hero.days': 'dias',
      'hero.hours': 'horas',
      'hero.mins': 'min',
      'hero.secs': 'seg',
      'hero.when': '{d} · {h} de Brasília · {u} UTC',
      'stage.token': 'Token',
      'stage.game': 'Jogo',
      'stage.time': '{h} · {u} UTC',
      'btn.buy': 'Conectar carteira',
      'btn.opensAt': 'abre às {h} de Brasília',
      'btn.waitingCa': 'aguardando o contrato oficial',
      'btn.discord': 'Resgatar token',
      'btn.play': 'Jogar',
      'ca.label': 'Contrato oficial',
      'ca.wait': 'revelado aqui às {h} de Brasília',
      'ca.waitAfter': 'aparece aqui em instantes',
      'ca.note': 'Confira sempre: o contrato oficial aparece aqui, no Discord e no X.',
      copy: 'Copiar',
      copied: 'Copiado!',
      'live.badge': 'Token ao vivo · atualiza a cada 20 s',
      'live.title': 'O token, <span class="text-gradient--honey">em tempo real</span>',
      'live.subtitle': 'Lido direto da Solana, sem número de planilha.',
      'live.waitTitle': 'O token ainda não nasceu',
      'live.waitText': 'Preço, market cap, supply e a curva da pump.fun aparecem aqui, lidos direto da Solana, assim que o token oficial for publicado.',
      'live.price': 'Preço',
      'live.mcap': 'Market cap',
      'live.supply': 'Supply circulando',
      'live.supplySub': 'diminui a cada queima',
      'live.hives': 'Colmeias no jogo',
      'live.playersTxt': '{n} jogadores',
      'live.curve': 'Curva da pump.fun → PumpSwap',
      'live.curveTxt': 'Quando a curva enche, o token se forma e vai para a PumpSwap.',
      'live.graduated': 'Formada! O token está na PumpSwap.',
      'live.inCurve': '{s} SOL na curva',
      'burn.badge': 'Queima ao vivo · na rede',
      'burn.title': 'Cada compra <span class="text-gradient--fire">queima token</span>',
      'burn.text': 'Kit, ovos, baús, favo, armas e acessórios: uma parte de tudo o que se compra no jogo vai para o forno. O tesoureiro queima na rede, e qualquer um confere no Solscan.',
      'burn.waitTitle': 'O forno acende com o token',
      'burn.waitText': 'Quando o token oficial nascer, cada queima aparece aqui na hora, com o link para conferir no Solscan.',
      'burn.total': 'Total queimado',
      'burn.tokens': 'tokens queimados para sempre',
      'burn.ofSupply': 'do supply',
      'burn.initial': '1 bilhão no início',
      'burn.remaining': '{n} ainda existem',
      'burn.latest': 'Últimas queimas na rede',
      'burn.loading': 'Lendo a rede…',
      'burn.empty': 'Nenhuma queima na rede ainda. A primeira aparece aqui na hora.',
      'burn.burned': 'queimados',
      'buy.badge': 'Em 4 passos',
      'buy.title': 'Como comprar <span class="text-gradient--honey">no lançamento</span>',
      'buy.alertTitle': 'Só o contrato oficial',
      'buy.alertText': 'Golpistas criam cópias com o mesmo nome e a mesma imagem. Compre só pelo botão desta página ou pelo contrato que aparece aqui e no Discord.',
      'buy.step1Title': 'Carteira Phantom',
      'buy.step1Text': 'Instale a Phantom (ou a Solflare) no celular ou no navegador e guarde a frase de recuperação.',
      'buy.step2Title': 'Tenha SOL',
      'buy.step2Text': 'Compre SOL numa corretora e mande para a sua carteira.',
      'buy.step3Title': 'Conectar carteira',
      'buy.step3Text': 'Use o botão "Conectar carteira" desta página para abrir o KAST 1.',
      'buy.step4Title': 'Entre na colmeia',
      'buy.step4Text': 'Quando o jogo abrir, conecte a mesma carteira, pegue o kit inicial e comece a farmar.',
      'trailer.badge': 'Trailer',
      'trailer.title': 'Veja a colmeia <span class="text-gradient--honey">em ação</span>',
      'game.badge': 'O jogo já está pronto',
      'game.title': 'Sua colmeia, <span class="text-gradient--honey">da primeira abelha à mítica</span>',
      'game.subtitle': 'Um jogo de estratégia de abelhas na Solana, no navegador do computador ou do celular.',
      'game.scene1Title': 'Farm o dia todo',
      'game.scene1Text': 'Suas abelhas farmam néctar, e com o mordomo a colmeia trabalha 24 h, mesmo com você fora.',
      'game.scene2Title': 'Defenda a porta',
      'game.scene2Text': 'Guardas na entrada seguram as vespas, as formigas e os marimbondos que vêm atrás do seu mel.',
      'game.scene3Title': 'Torneio das campeãs',
      'game.scene3Text': 'Todo dia, a campeã de cada colmeia luta na divisão da raridade dela, e as 4 melhores dividem o pote.',
      'species.badge': '3 espécies',
      'species.title': 'Qual abelha é a sua?',
      'species.intro': 'Uma espécie por colmeia, e você escolhe no kit. Cada uma ocupa um tanto do favo, então cabem mais ou menos abelhas.',
      'species.s1Title': 'Europeia',
      'species.s1Role': 'equilibrada',
      'species.s1Desc': 'Cabem 40 num favo de 1.000 células.',
      'species.s2Title': 'Jataí',
      'species.s2Role': 'defensiva',
      'species.s2Desc': 'Pequenina: cabem 66 no mesmo favo.',
      'species.s3Title': 'Mamangava',
      'species.s3Role': 'ofensiva',
      'species.s3Desc': 'Grandona: cabem 20 no mesmo favo.',
      'aff.badge': 'Programa de afiliados',
      'aff.title': 'Traga amigos, <span class="text-gradient--honey">ganhe token e baús</span>',
      'aff.subtitle': 'Comissão no kit de cada amigo e um baú de casas a cada 5 amigos que entrarem no jogo de verdade.',
      'aff.rule1': 'Comissão sobre o kit inicial de cada amigo',
      'aff.rule2': '1 baú de casas a cada 5 amigos validados',
      'aff.rule3': 'Validado = Discord ligado + carteira + kit. Robô não conta.',
      'aff.loginTitle': 'Seu painel de afiliado',
      'aff.loginText': 'Entre com o Discord para pegar o seu link, ver quem entrou por ele e acompanhar os seus baús.',
      'aff.loginBtn': 'Entrar com o Discord',
      'aff.possible': 'Baús possíveis',
      'aff.possibleAnon': 'um a cada 5 cadastros do seu link',
      'aff.validated': 'Baús validados',
      'aff.validatedTxt': '{j} amigos ativos no jogo',
      'aff.warningAnon': 'Só os baús validados são entregues: cada amigo precisa entrar no jogo (Discord ligado, carteira conectada e kit). Robô de Discord não conta.',
      'footerCta.badge': 'Hoje',
      'footerCta.title': 'Nos vemos <span class="text-gradient--honey">na colmeia</span>',
      'footerCta.hours': 'O token nasce às {t} e o jogo abre às {j} (horário de Brasília). A comunidade está no Discord.',
      'footerCta.x': 'Seguir no X',
      'footer.about': 'O jogo de abelhas na Solana. Farm, defesa da colmeia e um token que queima a cada compra.',
      'footer.site': 'Site',
      'footer.community': 'Comunidade',
      'footer.disclaimer': 'Jogo para maiores de 18 anos. Token de jogo, sem promessa de retorno: o preço pode cair até zero. Confira sempre o contrato oficial neste site e no Discord.',
    },
    en: {
      'nav.token': 'Token',
      'nav.burn': 'Burn',
      'nav.buy': 'How to buy',
      'nav.game': 'The game',
      'nav.affiliates': 'Affiliates',
      'nav.play': 'Play',
      'nav.discord': 'Discord',
      'hero.badgeToken': 'Token launch · pump.fun · Solana',
      'hero.badgeJogo': 'Token is live · pump.fun · Solana',
      'hero.badgeAberto': 'Token and game are live',
      'hero.titleToken': 'The token launches in',
      'hero.titleJogo': 'The game opens in',
      'hero.titleAberto': 'The hive is open!',
      'hero.days': 'days',
      'hero.hours': 'hours',
      'hero.mins': 'min',
      'hero.secs': 'sec',
      'hero.when': '{d} · {u} UTC',
      'stage.token': 'Token',
      'stage.game': 'Game',
      'stage.time': '{u} UTC',
      'btn.buy': 'Connect wallet',
      'btn.opensAt': 'opens at {u} UTC',
      'btn.waitingCa': 'waiting for the official contract',
      'btn.discord': 'Claim token',
      'btn.play': 'Play',
      'ca.label': 'Official contract',
      'ca.wait': 'revealed here at {u} UTC',
      'ca.waitAfter': 'shows up here in a moment',
      'ca.note': 'Always check: the official contract shows up here, on Discord and on X.',
      copy: 'Copy',
      copied: 'Copied!',
      'live.badge': 'Live token · updates every 20 s',
      'live.title': 'The token, <span class="text-gradient--honey">in real time</span>',
      'live.subtitle': 'Read straight from Solana, not from a spreadsheet.',
      'live.waitTitle': 'The token is not born yet',
      'live.waitText': 'Price, market cap, supply and the pump.fun curve show up here, read straight from Solana, as soon as the official token is published.',
      'live.price': 'Price',
      'live.mcap': 'Market cap',
      'live.supply': 'Circulating supply',
      'live.supplySub': 'shrinks with every burn',
      'live.hives': 'Hives in the game',
      'live.playersTxt': '{n} players',
      'live.curve': 'pump.fun curve → PumpSwap',
      'live.curveTxt': 'When the curve fills, the token graduates to PumpSwap.',
      'live.graduated': 'Graduated! The token is on PumpSwap.',
      'live.inCurve': '{s} SOL in the curve',
      'burn.badge': 'Live burn · on-chain',
      'burn.title': 'Every purchase <span class="text-gradient--fire">burns tokens</span>',
      'burn.text': 'Starter kit, eggs, chests, comb, weapons and accessories: part of everything bought in the game goes to the furnace. The treasurer burns on-chain, and anyone can check it on Solscan.',
      'burn.waitTitle': 'The furnace lights up with the token',
      'burn.waitText': 'Once the official token is born, every burn shows up here right away, with a link to check it on Solscan.',
      'burn.total': 'Total burned',
      'burn.tokens': 'tokens burned forever',
      'burn.ofSupply': 'of supply',
      'burn.initial': '1 billion at start',
      'burn.remaining': '{n} still exist',
      'burn.latest': 'Latest on-chain burns',
      'burn.loading': 'Reading the chain…',
      'burn.empty': 'No burns on-chain yet. The first one shows up here instantly.',
      'burn.burned': 'burned',
      'buy.badge': 'In 4 steps',
      'buy.title': 'How to buy <span class="text-gradient--honey">at launch</span>',
      'buy.alertTitle': 'Official contract only',
      'buy.alertText': 'Scammers create copies with the same name and image. Only buy through the button on this page or the contract shown here and on Discord.',
      'buy.step1Title': 'Phantom wallet',
      'buy.step1Text': 'Install Phantom (or Solflare) on your phone or browser and keep your recovery phrase safe.',
      'buy.step2Title': 'Get SOL',
      'buy.step2Text': 'Buy SOL on an exchange and send it to your wallet.',
      'buy.step3Title': 'Connect wallet',
      'buy.step3Text': 'Use the "Connect wallet" button on this page to open KAST 1.',
      'buy.step4Title': 'Enter the hive',
      'buy.step4Text': 'When the game opens, connect the same wallet, grab the starter kit and start farming.',
      'trailer.badge': 'Trailer',
      'trailer.title': 'See the hive <span class="text-gradient--honey">in action</span>',
      'game.badge': 'The game is ready',
      'game.title': 'Your hive, <span class="text-gradient--honey">from the first bee to the mythic</span>',
      'game.subtitle': 'A bee strategy game on Solana, in your desktop or phone browser.',
      'game.scene1Title': 'Farm all day',
      'game.scene1Text': 'Your bees farm nectar, and with the butler the hive works 24 h, even while you are away.',
      'game.scene2Title': 'Defend the door',
      'game.scene2Text': 'Guards at the entrance hold off the wasps, ants and hornets that come for your honey.',
      'game.scene3Title': 'Champions tournament',
      'game.scene3Text': 'Every day, the champion of each hive fights in her rarity division, and the top 4 split the pot.',
      'species.badge': '3 species',
      'species.title': 'Which bee is yours?',
      'species.intro': 'One species per hive, and you pick it in the kit. Each one takes up a different amount of comb, so more or fewer bees fit.',
      'species.s1Title': 'European',
      'species.s1Role': 'balanced',
      'species.s1Desc': '40 fit in a 1,000-cell comb.',
      'species.s2Title': 'Jataí',
      'species.s2Role': 'defensive',
      'species.s2Desc': 'Tiny: 66 fit in the same comb.',
      'species.s3Title': 'Bumblebee',
      'species.s3Role': 'offensive',
      'species.s3Desc': 'Big: 20 fit in the same comb.',
      'aff.badge': 'Affiliate program',
      'aff.title': 'Bring friends, <span class="text-gradient--honey">earn tokens and chests</span>',
      'aff.subtitle': "Commission on each friend's starter kit and a house chest for every 5 friends who really join the game.",
      'aff.rule1': "Commission on each friend's starter kit",
      'aff.rule2': '1 house chest for every 5 validated friends',
      'aff.rule3': "Validated = Discord linked + wallet + kit. Bots don't count.",
      'aff.loginTitle': 'Your affiliate panel',
      'aff.loginText': 'Sign in with Discord to get your link, see who joined through it and track your chests.',
      'aff.loginBtn': 'Sign in with Discord',
      'aff.possible': 'Possible chests',
      'aff.possibleAnon': 'one for every 5 sign-ups on your link',
      'aff.validated': 'Validated chests',
      'aff.validatedTxt': '{j} friends active in the game',
      'aff.warningAnon': 'Only validated chests are delivered: each friend must join the game (Discord linked, wallet connected and kit). Discord bots do not count.',
      'footerCta.badge': 'Today',
      'footerCta.title': 'See you <span class="text-gradient--honey">in the hive</span>',
      'footerCta.hours': 'The token launches at {tu} UTC and the game opens at {ju} UTC. The community lives on Discord.',
      'footerCta.x': 'Follow on X',
      'footer.about': 'The bee game on Solana. Farming, hive defense and a token that burns with every purchase.',
      'footer.site': 'Site',
      'footer.community': 'Community',
      'footer.disclaimer': 'Game for ages 18+. Game token with no promise of returns: the price can drop to zero. Always check the official contract on this site and on Discord.',
    },
    es: {
      'nav.token': 'Token',
      'nav.burn': 'Quema',
      'nav.buy': 'Cómo comprar',
      'nav.game': 'El juego',
      'nav.affiliates': 'Afiliados',
      'nav.play': 'Jugar',
      'nav.discord': 'Discord',
      'hero.badgeToken': 'Lanzamiento del token · pump.fun · Solana',
      'hero.badgeJogo': 'Token en vivo · pump.fun · Solana',
      'hero.badgeAberto': 'Token y juego en vivo',
      'hero.titleToken': 'El token nace en',
      'hero.titleJogo': 'El juego abre en',
      'hero.titleAberto': '¡La colmena está abierta!',
      'hero.days': 'días',
      'hero.hours': 'horas',
      'hero.mins': 'min',
      'hero.secs': 'seg',
      'hero.when': '{d} · {u} UTC',
      'stage.token': 'Token',
      'stage.game': 'Juego',
      'stage.time': '{u} UTC',
      'btn.buy': 'Conectar billetera',
      'btn.opensAt': 'abre a las {u} UTC',
      'btn.waitingCa': 'esperando el contrato oficial',
      'btn.discord': 'Reclamar token',
      'btn.play': 'Jugar',
      'ca.label': 'Contrato oficial',
      'ca.wait': 'se revela aquí a las {u} UTC',
      'ca.waitAfter': 'aparece aquí en un momento',
      'ca.note': 'Verifica siempre: el contrato oficial aparece aquí, en Discord y en X.',
      copy: 'Copiar',
      copied: '¡Copiado!',
      'live.badge': 'Token en vivo · cada 20 s',
      'live.title': 'El token, <span class="text-gradient--honey">en tiempo real</span>',
      'live.subtitle': 'Leído directo de Solana.',
      'live.waitTitle': 'El token aún no nació',
      'live.waitText': 'Precio, market cap, supply y la curva de pump.fun aparecen aquí, leídos directo de Solana, en cuanto se publique el token oficial.',
      'live.price': 'Precio',
      'live.mcap': 'Market cap',
      'live.supply': 'Supply circulante',
      'live.supplySub': 'baja con cada quema',
      'live.hives': 'Colmenas en el juego',
      'live.playersTxt': '{n} jugadores',
      'live.curve': 'Curva de pump.fun → PumpSwap',
      'live.curveTxt': 'Cuando la curva se llena, el token se gradúa a PumpSwap.',
      'live.graduated': '¡Graduado! El token está en PumpSwap.',
      'live.inCurve': '{s} SOL en la curva',
      'burn.badge': 'Quema en vivo · en la red',
      'burn.title': 'Cada compra <span class="text-gradient--fire">quema tokens</span>',
      'burn.text': 'Kit, huevos, baúles, panal, armas y accesorios: una parte de todo lo que se compra en el juego va al horno. El tesorero quema en la red y cualquiera lo verifica en Solscan.',
      'burn.waitTitle': 'El horno se enciende con el token',
      'burn.waitText': 'Cuando nazca el token oficial, cada quema aparece aquí al instante, con el enlace para verificarla en Solscan.',
      'burn.total': 'Total quemado',
      'burn.tokens': 'tokens quemados para siempre',
      'burn.ofSupply': 'del supply',
      'burn.initial': '1 billón al inicio',
      'burn.remaining': 'quedan {n}',
      'burn.latest': 'Últimas quemas en la red',
      'burn.loading': 'Leyendo la red…',
      'burn.empty': 'Aún no hay quemas en la red. La primera aparece aquí al instante.',
      'burn.burned': 'quemados',
      'buy.badge': 'En 4 pasos',
      'buy.title': 'Cómo comprar <span class="text-gradient--honey">en el lanzamiento</span>',
      'buy.alertTitle': 'Solo el contrato oficial',
      'buy.alertText': 'Los estafadores crean copias con el mismo nombre e imagen. Compra solo con el botón de esta página o con el contrato que aparece aquí y en Discord.',
      'buy.step1Title': 'Billetera Phantom',
      'buy.step1Text': 'Instala Phantom (o Solflare) y guarda tu frase de recuperación.',
      'buy.step2Title': 'Ten SOL',
      'buy.step2Text': 'Compra SOL en un exchange y envíalo a tu billetera.',
      'buy.step3Title': 'Conectar billetera',
      'buy.step3Text': 'Usa el botón "Conectar billetera" de esta página para abrir KAST 1.',
      'buy.step4Title': 'Entra a la colmena',
      'buy.step4Text': 'Cuando abra el juego, conecta la misma billetera, toma el kit inicial y empieza a recolectar.',
      'trailer.badge': 'Tráiler',
      'trailer.title': 'Mira la colmena <span class="text-gradient--honey">en acción</span>',
      'game.badge': 'El juego ya está listo',
      'game.title': 'Tu colmena, <span class="text-gradient--honey">de la primera abeja a la mítica</span>',
      'game.subtitle': 'Un juego de estrategia de abejas en Solana, en el navegador de la computadora o del celular.',
      'game.scene1Title': 'Farm todo el día',
      'game.scene1Text': 'Tus abejas recolectan néctar, y con el mayordomo la colmena trabaja 24 h, aunque no estés.',
      'game.scene2Title': 'Defiende la puerta',
      'game.scene2Text': 'Guardias en la entrada frenan a las avispas, hormigas y avispones que vienen por tu miel.',
      'game.scene3Title': 'Torneo de campeonas',
      'game.scene3Text': 'Cada día, la campeona de cada colmena lucha en la división de su rareza, y las 4 mejores se reparten el bote.',
      'species.badge': '3 especies',
      'species.title': '¿Cuál abeja es la tuya?',
      'species.intro': 'Una especie por colmena, y la eliges en el kit. Cada una ocupa una parte distinta del panal, así que caben más o menos abejas.',
      'species.s1Title': 'Europea',
      'species.s1Role': 'equilibrada',
      'species.s1Desc': 'Caben 40 en un panal de 1.000 celdas.',
      'species.s2Title': 'Jataí',
      'species.s2Role': 'defensiva',
      'species.s2Desc': 'Pequeñita: caben 66 en el mismo panal.',
      'species.s3Title': 'Mamangava',
      'species.s3Role': 'ofensiva',
      'species.s3Desc': 'Grandota: caben 20 en el mismo panal.',
      'aff.badge': 'Programa de afiliados',
      'aff.title': 'Trae amigos, <span class="text-gradient--honey">gana token y baúles</span>',
      'aff.subtitle': 'Comisión en el kit de cada amigo y un baúl de casas cada 5 amigos que entren de verdad al juego.',
      'aff.rule1': 'Comisión sobre el kit inicial de cada amigo',
      'aff.rule2': '1 baúl de casas cada 5 amigos validados',
      'aff.rule3': 'Validado = Discord + billetera + kit. Los bots no cuentan.',
      'aff.loginTitle': 'Tu panel de afiliado',
      'aff.loginText': 'Entra con Discord para obtener tu enlace, ver quién entró y seguir tus baúles.',
      'aff.loginBtn': 'Entrar con Discord',
      'aff.possible': 'Baúles posibles',
      'aff.possibleAnon': 'uno cada 5 registros de tu enlace',
      'aff.validated': 'Baúles validados',
      'aff.validatedTxt': '{j} amigos activos en el juego',
      'aff.warningAnon': 'Solo se entregan los baúles validados: cada amigo debe entrar al juego (Discord, billetera y kit). Los bots de Discord no cuentan.',
      'footerCta.badge': 'Hoy',
      'footerCta.title': 'Nos vemos <span class="text-gradient--honey">en la colmena</span>',
      'footerCta.hours': 'El token nace a las {tu} UTC y el juego abre a las {ju} UTC. La comunidad está en Discord.',
      'footerCta.x': 'Seguir en X',
      'footer.about': 'El juego de abejas en Solana. Farm, defensa de la colmena y un token que se quema en cada compra.',
      'footer.site': 'Sitio',
      'footer.community': 'Comunidad',
      'footer.disclaimer': 'Juego para mayores de 18 años. Token de juego sin promesa de retorno: el precio puede caer a cero. Verifica siempre el contrato oficial en este sitio y en Discord.',
    },
    tl: {
      'nav.token': 'Token',
      'nav.burn': 'Burn',
      'nav.buy': 'Paano bumili',
      'nav.game': 'Ang laro',
      'nav.affiliates': 'Affiliates',
      'nav.play': 'Maglaro',
      'nav.discord': 'Discord',
      'hero.badgeToken': 'Token launch · pump.fun · Solana',
      'hero.badgeJogo': 'Live na ang token · pump.fun · Solana',
      'hero.badgeAberto': 'Live na ang token at ang laro',
      'hero.titleToken': 'Lalabas ang token sa',
      'hero.titleJogo': 'Magbubukas ang laro sa',
      'hero.titleAberto': 'Bukas na ang hive!',
      'hero.days': 'araw',
      'hero.hours': 'oras',
      'hero.mins': 'min',
      'hero.secs': 'seg',
      'hero.when': '{d} · {u} UTC',
      'stage.token': 'Token',
      'stage.game': 'Laro',
      'stage.time': '{u} UTC',
      'btn.buy': 'I-connect ang wallet',
      'btn.opensAt': 'magbubukas ng {u} UTC',
      'btn.waitingCa': 'hinihintay ang official contract',
      'btn.discord': 'I-claim ang token',
      'btn.play': 'Maglaro',
      'ca.label': 'Official contract',
      'ca.wait': 'ilalabas dito ng {u} UTC',
      'ca.waitAfter': 'lalabas dito maya-maya',
      'ca.note': 'Laging i-check: lumalabas ang official contract dito, sa Discord at sa X.',
      copy: 'Kopyahin',
      copied: 'Nakopya!',
      'live.badge': 'Live na token · nag-a-update kada 20 s',
      'live.title': 'Ang token, <span class="text-gradient--honey">real time</span>',
      'live.subtitle': 'Direktang binabasa mula sa Solana.',
      'live.waitTitle': 'Wala pa ang token',
      'live.waitText': 'Lalabas dito ang presyo, market cap, supply at ang pump.fun curve, direkta mula sa Solana, kapag na-publish na ang official token.',
      'live.price': 'Presyo',
      'live.mcap': 'Market cap',
      'live.supply': 'Circulating supply',
      'live.supplySub': 'lumiliit sa bawat burn',
      'live.hives': 'Mga hive sa laro',
      'live.playersTxt': '{n} players',
      'live.curve': 'pump.fun curve → PumpSwap',
      'live.curveTxt': 'Kapag napuno ang curve, mag-graduate ang token papuntang PumpSwap.',
      'live.graduated': 'Graduated na! Nasa PumpSwap na ang token.',
      'live.inCurve': '{s} SOL sa curve',
      'burn.badge': 'Live na burn · on-chain',
      'burn.title': 'Bawat bili <span class="text-gradient--fire">nagbu-burn ng token</span>',
      'burn.text': 'Starter kit, eggs, chests, comb, armas at accessories: may bahagi ng lahat ng binibili sa laro na napupunta sa pugon. Sinusunog ito ng treasurer on-chain, at kahit sino ay puwedeng mag-check sa Solscan.',
      'burn.waitTitle': 'Sisindi ang pugon kasama ang token',
      'burn.waitText': 'Kapag lumabas na ang official token, lalabas dito agad ang bawat burn, may link para i-check sa Solscan.',
      'burn.total': 'Kabuuang na-burn',
      'burn.tokens': 'token na na-burn habambuhay',
      'burn.ofSupply': 'ng supply',
      'burn.initial': '1 bilyon sa simula',
      'burn.remaining': '{n} pa ang natitira',
      'burn.latest': 'Pinakabagong burns on-chain',
      'burn.loading': 'Binabasa ang chain…',
      'burn.empty': 'Wala pang burn on-chain. Lalabas agad dito ang una.',
      'burn.burned': 'na-burn',
      'buy.badge': 'Sa 4 na hakbang',
      'buy.title': 'Paano bumili <span class="text-gradient--honey">sa launch</span>',
      'buy.alertTitle': 'Official contract lang',
      'buy.alertText': 'Gumagawa ang mga scammer ng kopya na pareho ang pangalan at larawan. Bumili lang gamit ang button sa page na ito o ang contract na lumalabas dito at sa Discord.',
      'buy.step1Title': 'Phantom wallet',
      'buy.step1Text': 'I-install ang Phantom (o Solflare) sa phone o browser at itago nang ligtas ang recovery phrase mo.',
      'buy.step2Title': 'Magkaroon ng SOL',
      'buy.step2Text': 'Bumili ng SOL sa exchange at ipadala sa wallet mo.',
      'buy.step3Title': 'I-connect ang wallet',
      'buy.step3Text': 'Gamitin ang "I-connect ang wallet" button sa page na ito para buksan ang KAST 1.',
      'buy.step4Title': 'Pumasok sa hive',
      'buy.step4Text': 'Pagbukas ng laro, i-connect ang parehong wallet, kunin ang starter kit at magsimulang mag-farm.',
      'trailer.badge': 'Trailer',
      'trailer.title': 'Panoorin ang hive <span class="text-gradient--honey">in action</span>',
      'game.badge': 'Handa na ang laro',
      'game.title': 'Ang hive mo, <span class="text-gradient--honey">mula sa unang bubuyog hanggang mythic</span>',
      'game.subtitle': 'Isang bee strategy game sa Solana, sa browser ng computer o phone mo.',
      'game.scene1Title': 'Farm buong araw',
      'game.scene1Text': 'Nagfa-farm ng nectar ang mga bubuyog mo, at sa butler, 24 oras gumagana ang hive kahit wala ka.',
      'game.scene2Title': 'Ipagtanggol ang pinto',
      'game.scene2Text': 'Pinipigilan ng mga guard sa pinto ang mga wasp, langgam at hornet na kumukuha ng honey mo.',
      'game.scene3Title': 'Champions tournament',
      'game.scene3Text': 'Araw-araw, lumalaban ang champion ng bawat hive sa division ng rarity niya, at hinahati ng top 4 ang pot.',
      'species.badge': '3 species',
      'species.title': 'Aling bubuyog ang sa iyo?',
      'species.intro': 'Isang species bawat hive, at ikaw ang pipili sa kit. Iba-iba ang laki ng comb na nagagamit ng bawat isa, kaya mas marami o mas kaunti ang kasya.',
      'species.s1Title': 'European',
      'species.s1Role': 'balanced',
      'species.s1Desc': '40 ang kasya sa comb na 1,000 cells.',
      'species.s2Title': 'Jataí',
      'species.s2Role': 'defensive',
      'species.s2Desc': 'Maliit: 66 ang kasya sa parehong comb.',
      'species.s3Title': 'Bumblebee',
      'species.s3Role': 'offensive',
      'species.s3Desc': 'Malaki: 20 ang kasya sa parehong comb.',
      'aff.badge': 'Affiliate program',
      'aff.title': 'Mag-imbita ng kaibigan, <span class="text-gradient--honey">kumita ng token at chests</span>',
      'aff.subtitle': 'Commission sa starter kit ng bawat kaibigan at isang house chest sa bawat 5 kaibigan na talagang pumasok sa laro.',
      'aff.rule1': 'Commission sa starter kit ng bawat kaibigan',
      'aff.rule2': '1 house chest sa bawat 5 validated na kaibigan',
      'aff.rule3': 'Validated = naka-link na Discord + wallet + kit. Hindi bilang ang bot.',
      'aff.loginTitle': 'Ang affiliate panel mo',
      'aff.loginText': 'Mag-sign in gamit ang Discord para makuha ang link mo, makita kung sino ang pumasok dito at subaybayan ang chests mo.',
      'aff.loginBtn': 'Mag-sign in gamit ang Discord',
      'aff.possible': 'Posibleng chests',
      'aff.possibleAnon': 'isa sa bawat 5 sign-up ng link mo',
      'aff.validated': 'Validated chests',
      'aff.validatedTxt': '{j} kaibigang aktibo sa laro',
      'aff.warningAnon': 'Validated chests lang ang ibinibigay: kailangang pumasok sa laro ang bawat kaibigan (naka-link ang Discord, may wallet at kit). Hindi bilang ang Discord bots.',
      'footerCta.badge': 'Ngayon',
      'footerCta.title': 'Kita-kits <span class="text-gradient--honey">sa hive</span>',
      'footerCta.hours': 'Lalabas ang token ng {tu} UTC at magbubukas ang laro ng {ju} UTC. Nasa Discord ang community.',
      'footerCta.x': 'I-follow sa X',
      'footer.about': 'Ang bee game sa Solana. Farming, depensa ng hive at token na nabu-burn sa bawat bili.',
      'footer.site': 'Site',
      'footer.community': 'Community',
      'footer.disclaimer': 'Para sa edad 18 pataas. Game token na walang pangakong kita: puwedeng bumagsak ang presyo hanggang zero. Laging i-check ang official contract sa site na ito at sa Discord.',
    },
  };

  // State
  let savedLang = '';
  try {
    savedLang = localStorage.getItem('sbee_lingua') || '';
  } catch {
    savedLang = '';
  }
  const rawLang = String(savedLang || navigator.language || 'en').toLowerCase();
  let currentLang = /^(fil|tl)/.test(rawLang) ? 'tl' : rawLang.slice(0, 2);
  if (!LOCALES[currentLang]) currentLang = 'en';

  const query = new URLSearchParams(location.search);
  let tokenTimestamp = Number(query.get('ate')) || LIVE_SNAPSHOT.lancamento;
  const GAME_OFFSET_SECONDS = 3 * 3600;
  const clockOffset = query.get('t')
    ? Number(query.get('t')) - Date.now() / 1000
    : query.get('lancado') === '1'
      ? tokenTimestamp + 60 - Date.now() / 1000
      : 0;

  const nowSeconds = () => Date.now() / 1000 + clockOffset;
  const gameTimestamp = () => tokenTimestamp + GAME_OFFSET_SECONDS;
  const currentStage = () =>
    nowSeconds() < tokenTimestamp ? 'token' : nowSeconds() < gameTimestamp() ? 'jogo' : 'aberto';

  let tokenData = LIVE_SNAPSHOT;
  let prevCountdown = {};
  let prevStage = '';
  const renderedNumbers = new WeakMap();

  const $ = (id) => document.getElementById(id);

  // Translation helper
  const t = (key, vars = {}) => {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    const fallback = TRANSLATIONS.en;
    const template = String(dict[key] ?? fallback[key] ?? key);
    return template.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
  };

  // Number & date formatters
  const locale = () => LOCALES[currentLang] || 'en-US';
  const fmt = (val, decimals = 0) =>
    val == null || !Number.isFinite(val)
      ? '—'
      : Number(val).toLocaleString(locale(), { maximumFractionDigits: decimals, minimumFractionDigits: 0 });

  const compact = (val, decimals = 2) =>
    val == null || !Number.isFinite(val)
      ? '—'
      : Number(val).toLocaleString(locale(), { notation: 'compact', maximumFractionDigits: decimals });

  const usd = (val) =>
    val == null || !Number.isFinite(val)
      ? '—'
      : '$' + (val >= 1000 ? compact(val, 2) : fmt(val, val < 1 ? 2 : 0));

  const formatTinyPrice = (val, sig = 3) => {
    if (val == null || !Number.isFinite(val) || val <= 0) return '—';
    if (val >= 0.001) return fmt(val, 6);
    const zeros = Math.floor(-Math.log10(val));
    const digits = Math.round(val * 10 ** (zeros + sig))
      .toString()
      .slice(0, sig);
    return `0.0<sub>${zeros}</sub>${digits}`;
  };

  const pct = (val, decimals = 2) => (val == null ? '—' : fmt(val * 100, decimals) + '%');

  const timeAgo = (unixSec) => {
    const diff = Math.max(0, Math.floor(Date.now() / 1000) - unixSec);
    const rtf = new Intl.RelativeTimeFormat(locale(), { numeric: 'auto' });
    if (diff < 60) return rtf.format(-diff, 'second');
    if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
    if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
    return rtf.format(-Math.floor(diff / 86400), 'day');
  };

  const shortHash = (hash) => (hash ? `${hash.slice(0, 4)}…${hash.slice(-4)}` : '');

  const formatTimeInTz = (unixSec, timeZone) =>
    new Intl.DateTimeFormat(locale(), {
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
      timeZone,
    }).format(new Date(unixSec * 1000));

  const formatBr = (unixSec) => formatTimeInTz(unixSec, 'America/Sao_Paulo');
  const formatUtc = (unixSec) => formatTimeInTz(unixSec, 'UTC');

  function animateValue(el, target, formatter, duration = 1200) {
    if (!el) return;
    if (target == null || !Number.isFinite(target)) {
      el.innerHTML = formatter(null);
      return;
    }
    const start = renderedNumbers.get(el) ?? target * 0.72;
    renderedNumbers.set(el, target);
    if (start === target) {
      el.innerHTML = formatter(target);
      return;
    }
    el.classList.remove('num-tabular--flash');
    void el.offsetWidth;
    el.classList.add('num-tabular--flash');

    const t0 = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      el.innerHTML = formatter(start + (target - start) * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function isOfficialMint() {
    return Boolean(tokenData?.mint && tokenData.mint !== TEST_MINT);
  }

  function canBuy() {
    return currentStage() !== 'token' && isOfficialMint();
  }

  function tokenSymbol() {
    return '$' + (tokenData?.simbolo || 'NEC');
  }

  function applyTranslations() {
    document.documentElement.lang = locale();
    for (const el of document.querySelectorAll('[data-i18n]')) {
      el.innerHTML = t(el.dataset.i18n);
    }
    for (const btn of document.querySelectorAll('.header__lang-btn')) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang));
    }
  }

  function renderScheduleTexts() {
    const target = currentStage() === 'jogo' ? gameTimestamp() : tokenTimestamp;
    const dayLabel = new Intl.DateTimeFormat(locale(), {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      timeZone: 'America/Sao_Paulo',
    }).format(new Date(target * 1000));

    $('hero-when').textContent = t('hero.when', { d: dayLabel, h: formatBr(target), u: formatUtc(target) });
    $('stage-token-time').textContent = t('stage.time', { h: formatBr(tokenTimestamp), u: formatUtc(tokenTimestamp) });
    $('stage-game-time').textContent = t('stage.time', { h: formatBr(gameTimestamp()), u: formatUtc(gameTimestamp()) });
    $('community-hours').textContent = t('footerCta.hours', {
      t: formatBr(tokenTimestamp),
      j: formatBr(gameTimestamp()),
      tu: formatUtc(tokenTimestamp),
      ju: formatUtc(gameTimestamp()),
    });
  }

  function renderClock() {
    const stage = currentStage();
    if (stage !== prevStage) {
      prevStage = stage;
      document.body.classList.remove('page--stage-token', 'page--stage-jogo', 'page--stage-aberto');
      const stageClass = stage === 'token' ? 'page--stage-token' : stage === 'jogo' ? 'page--stage-jogo' : 'page--stage-aberto';
      document.body.classList.add(stageClass);
      renderScheduleTexts();
      renderTokenState();
    }

    const suffixMap = { token: 'Token', jogo: 'Jogo', aberto: 'Aberto' };
    const suffix = suffixMap[stage];
    $('hero-title').textContent = t('hero.title' + suffix);
    $('hero-badge').textContent = t('hero.badge' + suffix);

    const tokenStageEl = $('stage-token');
    const gameStageEl = $('stage-game');
    tokenStageEl.className = 'hero__stage ' + (stage === 'token' ? 'hero__stage--current' : 'hero__stage--done');
    gameStageEl.className =
      'hero__stage ' + (stage === 'jogo' ? 'hero__stage--current' : stage === 'aberto' ? 'hero__stage--done' : '');

    const remaining = Math.max(0, (stage === 'jogo' ? gameTimestamp() : tokenTimestamp) - nowSeconds());
    const parts = {
      days: Math.floor(remaining / 86400),
      hours: Math.floor((remaining % 86400) / 3600),
      mins: Math.floor((remaining % 3600) / 60),
      secs: Math.floor(remaining % 60),
    };

    for (const key of ['days', 'hours', 'mins', 'secs']) {
      const el = $('cd-' + key);
      const val = String(parts[key]).padStart(2, '0');
      if (prevCountdown[key] !== val) {
        el.textContent = val;
        el.classList.remove('hero__countdown-num--flip');
        void el.offsetWidth;
        el.classList.add('hero__countdown-num--flip');
        prevCountdown[key] = val;
      }
    }
  }

  function renderTokenState() {
    const buyAllowed = canBuy();
    for (const btn of document.querySelectorAll('.js-buy-btn')) {
      btn.href = LINKS.kast1;
      btn.classList.remove('btn--locked');
      btn.removeAttribute('aria-disabled');
      const sub = btn.querySelector('.btn__sub');
      if (sub) {
        sub.textContent = '';
      }
    }

    for (const prefix of ['hero', 'live']) {
      const box = $(`${prefix}-contract`);
      const code = $(`${prefix}-ca`);
      const explorer = $(`${prefix}-solscan`);
      if (!box || !code || !explorer) continue;

      box.classList.toggle('contract--waiting', !buyAllowed);
      code.textContent = buyAllowed
        ? tokenData.mint
        : currentStage() === 'token'
          ? t('ca.wait', { h: formatBr(tokenTimestamp), u: formatUtc(tokenTimestamp) })
          : t('ca.waitAfter');
      if (buyAllowed) {
        explorer.href = LINKS.solscan(tokenData.mint, 'token');
      }
    }
  }

  function renderLiveMetrics() {
    const x = tokenData;
    animateValue($('live-price'), x.precoUsd, (v) => (v == null ? '—' : '$' + formatTinyPrice(v)));
    $('live-price-sol').innerHTML = x.precoSol != null ? formatTinyPrice(x.precoSol) + ' SOL' : '—';
    animateValue($('live-mcap'), x.mcapUsd, (v) => usd(v));
    $('live-mcap-sol').textContent = x.mcapSol != null ? fmt(x.mcapSol, 2) + ' SOL' : '—';
    animateValue($('live-supply'), x.supply, (v) => compact(v, 3));
    animateValue($('live-hives'), x.jogo?.colmeias ?? null, (v) => fmt(v));
    $('live-players').textContent = x.jogo ? t('live.playersTxt', { n: fmt(x.jogo.jogadores) }) : '—';

    const progress = x.curva?.progresso;
    animateValue($('live-curve'), progress != null ? progress * 100 : null, (v) => (v == null ? '—' : fmt(v, 2) + '%'));
    $('live-curve-bar').style.width = (progress != null ? Math.max(1, progress * 100) : 0) + '%';
    $('live-curve-meter').setAttribute('aria-valuenow', progress != null ? (progress * 100).toFixed(2) : '0');
    $('live-curve-note').textContent = x.curva?.formada
      ? t('live.graduated')
      : x.curva
        ? t('live.inCurve', { s: fmt(x.curva.solNaCurva, 2) }) + ' · ' + t('live.curveTxt')
        : t('live.curveTxt');
  }

  function renderBurnSection() {
    const x = tokenData;
    animateValue($('burn-total'), x.queimado, (v) => fmt(v));
    $('burn-pct').textContent = pct(x.queimadoPct, 3);
    $('burn-bar').style.width = (x.queimadoPct ? Math.max(1.2, x.queimadoPct * 100) : 0) + '%';
    $('burn-meter').setAttribute('aria-valuenow', x.queimadoPct ? (x.queimadoPct * 100).toFixed(3) : '0');
    $('burn-remaining').textContent = x.supply != null ? t('burn.remaining', { n: fmt(x.supply) }) : '—';

    const list = [...(x.queimas || [])].slice(0, 5);
    $('burn-list').innerHTML = list.length
      ? list
          .map(
            (item) => `
            <a class="burn__item" href="${LINKS.solscan(item.sig)}" target="_blank" rel="noopener">
              <span class="burn__item-icon" aria-hidden="true">🔥</span>
              <div class="burn__item-info">
                <b class="burn__item-amount">${fmt(item.valor)} ${tokenSymbol()}</b>
                <small class="burn__item-time">${t('burn.burned')} · ${timeAgo(item.t)}</small>
              </div>
              <code class="burn__item-tx">${shortHash(item.sig)} ↗</code>
            </a>`
          )
          .join('')
      : `<div class="burn__empty">${t('burn.empty')}</div>`;
  }

  function renderAffiliatePanel() {
    const panel = $('affiliate-panel');
    if (!panel) return;
    panel.innerHTML = `
      <h3 class="panel__title">${t('aff.loginTitle')}</h3>
      <p class="panel__desc">${t('aff.loginText')}</p>
      <div class="panel__chests">
        <div class="panel__chest panel__chest--possible">
          <span class="panel__chest-label">${t('aff.possible')}</span>
          <b class="panel__chest-value">?</b>
          <small class="panel__chest-sub">${t('aff.possibleAnon')}</small>
          <img class="panel__chest-img" src="./images/bau.webp" alt="">
        </div>
        <div class="panel__chest panel__chest--validated">
          <span class="panel__chest-label">${t('aff.validated')}</span>
          <b class="panel__chest-value">0</b>
          <small class="panel__chest-sub">${t('aff.validatedTxt', { j: 0 })}</small>
          <img class="panel__chest-img" src="./images/bau.webp" alt="">
        </div>
      </div>
      <p class="panel__warning">⚠ ${t('aff.warningAnon')}</p>
      <p class="panel__cta-wrap">
        <a class="btn btn--large btn--discord" href="${LINKS.discordLogin}" target="_blank" rel="noopener">${t('aff.loginBtn')}</a>
      </p>
    `;
  }

  function updateTrailer() {
    const video = $('trailer-video');
    const srcEl = $('trailer-src');
    if (!video || !srcEl) return;
    const nextSrc = `https://solanabee.com/site/arte/trailer-${currentLang}.mp4`;
    const nextPoster = `./images/trailer-capa-${currentLang}.webp`;
    if (srcEl.getAttribute('src') === nextSrc) return;
    video.poster = nextPoster;
    srcEl.setAttribute('src', nextSrc);
    video.load();
  }

  function copyToClipboard(btn, text) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = t('copied');
      btn.classList.add('contract__copy-btn--copied');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('contract__copy-btn--copied');
      }, 1600);
    });
  }

  function initHeaderScroll() {
    const header = $('site-header');
    if (!header) return;
    const sync = () => header.classList.toggle('header--solid', window.scrollY > 40);
    window.addEventListener('scroll', sync, { passive: true });
    sync();
  }

  function initParticles(canvas) {
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colorTheme = canvas.dataset.color || 'honey';
    const count = Number(canvas.dataset.count) || 70;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const palette =
      colorTheme === 'fire'
        ? ['255,154,77', '255,107,44', '255,211,110', '255,46,99']
        : ['255,211,110', '247,179,43', '255,240,200', '185,168,255'];

    const spawn = (initial) => ({
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + 10,
      r: 0.6 + Math.random() * 2.2,
      v: 0.2 + Math.random() * 0.8,
      phase: Math.random() * 6.28,
      c: palette[(Math.random() * palette.length) | 0],
      a: 0.3 + Math.random() * 0.6,
    });

    const particles = Array.from({ length: count }, () => spawn(true));
    let visible = true;

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const tick = (time) => {
      requestAnimationFrame(tick);
      if (!visible) return;

      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y -= p.v;
        p.x += Math.sin(p.phase + time / 900) * 0.3;
        if (p.y < -10) Object.assign(p, spawn(false));
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `rgba(${p.c},${p.a})`);
        grad.addColorStop(1, `rgba(${p.c},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    requestAnimationFrame(tick);
  }

  function renderAll() {
    document.body.classList.toggle('page--no-token', !tokenData.mint);
    document.body.classList.toggle('page--no-game', !tokenData.jogo);
    document.body.classList.toggle('page--gtest', tokenData.mint === TEST_MINT);

    applyTranslations();
    renderScheduleTexts();
    renderClock();
    renderTokenState();
    renderLiveMetrics();
    renderBurnSection();
    renderAffiliatePanel();
    updateTrailer();
  }

  function init() {
    for (const anchor of document.querySelectorAll('[data-link]')) {
      const target = LINKS[anchor.dataset.link];
      if (target) anchor.href = target;
    }

    for (const btn of document.querySelectorAll('.header__lang-btn')) {
      btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang || 'en';
        try {
          localStorage.setItem('sbee_lingua', currentLang);
        } catch {}
        prevCountdown = {};
        renderAll();
      });
    }

    for (const prefix of ['hero', 'live']) {
      const copyBtn = $(`${prefix}-copy`);
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          if (isOfficialMint()) copyToClipboard(copyBtn, tokenData.mint);
        });
      }
    }

    initHeaderScroll();
    for (const canvas of document.querySelectorAll('.particles-canvas')) {
      initParticles(canvas);
    }

    renderAll();
    window.setInterval(renderClock, 1000);
    window.setInterval(() => {
      renderBurnSection();
    }, 20000);
  }

  init();
})();
