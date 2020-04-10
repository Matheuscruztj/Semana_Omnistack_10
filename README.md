# Plataforma 'DevRadar' criado durante a Semana Omnistack 10 da RocketSeat.
## Com o objetivo de desenvolvedores cadastrarem o seu perfil do github juntamente com as suas tecnologias e posições geográficas(latitude e longitude), para que no ambiente web sejam mostrados todos os perfis já cadastrados (com informações de bio e link para o seu perfil) e no ambiente mobile com base na localização geográfica os perfis são exibidos.

## Tecnologias utilizadas
### Backend: Node.Js(API Rest) + Mongodb(database)
### Frontend: React JS
### Mobile: Expo (emulação no aparelho móvel) + React Native (criação do aplicativo)

# Demonstração da Área Web
## É exibido os perfis já cadastrados no sistema e feito um cadastro de usuário utilizando o nome de usuário do github, tecnologias que possui conhecimento, latitude e longitude do local onde mora para que possa ser localizado no aplicativo mobile.
## Se a inclusão for realizada com sucesso, o seu perfil será mostrado no final da listagem, juntamente com sua bio e opção para ir para sua página do Github.

![Demonstrativo area web](https://github.com/Matheuscruztj/Semana_Omnistack_10/blob/master/poc/web.gif)

# Demonstração aplicativo mobile
## Busca: após digitar a tecnologia a ser procurada, clicasse no botão ao lado para realizar a função de busca e é exibida na tela a localização dos desenvolvedores cadastrados no sistemas em um raio de 10 kilômetros.

![Demonstrativo busca](https://github.com/Matheuscruztj/Semana_Omnistack_10/blob/master/poc/busca.gif)

## Novo cadastro durante uma busca: se em tempo real for realizado um novo cadastro na busca atual, onde o desenvolvedor possui a tecnologia já pesquisada e também estiver em um raio de 10 kilômetros do mapa atual, o seu perfil é exibido no mapa.

![Demonstrativo novo cadastro durante a busca atual](https://github.com/Matheuscruztj/Semana_Omnistack_10/blob/master/poc/inscricao_real_time.gif)

## Perfil do desenvolvedor: para verificar o perfil do vendedor, basta clicar sobre sua foto e ao clicar no seu perfil é direcionado para a sua página no Github.

![Demonstrativo perfil e github](https://github.com/Matheuscruztj/Semana_Omnistack_10/blob/master/poc/bio_e_github.gif)

## Busca durante navegação no mapa: durante a interação de navegar no mapa, se possuir desenvolvedores cadastrados no local em questão, são exibidos os seus perfis.

![Demonstrativo interação com o mapa](https://github.com/Matheuscruztj/Semana_Omnistack_10/blob/master/poc/dev_range_out_map.gif)
