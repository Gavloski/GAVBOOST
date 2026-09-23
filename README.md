# GavBoost

Site institucional e landing page da GavBoost, uma proposta independente de coaching para jogadores de Valorant.

## Serviços apresentados

- Análise de VOD/partida
- Aula individual em partida personalizada
- Plano de evolução e rotina de treino

O site não oferece acesso à conta do jogador, promessa de elo ou partidas ranqueadas jogadas em nome do cliente.

## Publicar no Render

O repositório inclui `render.yaml` para criar o site estático do Render usando os arquivos da raiz.

1. No Render, escolha **New > Blueprint**.
2. Conecte o repositório **Gavloski/GAVBOOST** e selecione a branch **main**.
3. Revise a configuração do serviço **gavboost** e clique em **Deploy Blueprint**.

Também é possível escolher **New > Static Site**, conectar o mesmo repositório e usar a branch `main`. Configure o diretório publicado como `.` e deixe o comando de build vazio.

## Abrir localmente

Abra `index.html` em um navegador. O projeto usa HTML, CSS e JavaScript sem etapa de build.

## Configurar contato

Em `script.js`, defina `WHATSAPP_NUMBER` com o número oficial em formato internacional, usando apenas dígitos, por exemplo `5511999999999`. Sem essa configuração, o formulário não envia dados e mostra uma orientação para configurá-lo.

## Personalizar antes de publicar

- Atualizar apresentação e experiência do coach na seção “Sobre”.
- Definir preços e disponibilidade, se desejar exibi-los.
- Configurar WhatsApp e testar o formulário.
- Revisar textos, identidade visual e informações de contato.

## Tecnologias

HTML, CSS e JavaScript puro. As fontes DM Sans e Space Grotesk são carregadas do Google Fonts; há fontes sans-serif de fallback.
