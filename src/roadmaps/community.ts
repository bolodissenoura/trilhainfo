import { Level, LinkType, LinkContentType, RoadmapItem } from "../entity/RoadmapItem";

export const data: Level[] = [
  {
    label: "Participe de diversas comunidades de desenvolvedores!",
    description:
      "Conectar-se com outros devs vai acelerar sua jornada do aprendizado, seja para tirar/responder dúvidas ou conversar com pessoas mais e menos experiêntes que você.",
    items: [
      {
        label: "Discord",
        description:
          "Discord é uma ferramente de comunidades incrível que facilita a comunicação e aprendizado de diversas pessoas, e é onde muitos desenvolvedores utilizam de canais de texto e voz para trocarem informações e experiência. Escolha uma ( ou todas ) comunidades para entrar e conectar-se com diversos devs:",
        children: [
          {
            label: "Comunidades",
            links: [
              {
                url: "https://discord.gg/EFdpWdnE",
                label: "CollabCode",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://discord.gg/wNCWTVuxyz",
                label: "Codelândia",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://discord.gg/MSr8SJfR4H",
                label: "Codify Community",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://discord.gg/wagxzStdcR",
                label: "Ballerini",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://discord.gg/he4rt",
                label: "He4rt Developers",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.VISIT
              },
              {
                url: "http://bitly.com/montano-server",
                label: "Montano",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://discord.gg/uYFJ5VJ",
                label: "Rocketseat",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.VISIT
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Bolha Dev",
        description:
          "Se curte usar twitter e quer ter a sua timeline cheio de devs com opniões fortes, notícias e dúvidas sobre tech/desenvolvimento, siga essas pessoas e hashtags:",
        children: [
          {
            label: "Twitter",
            links: [
              {
                url: "https://twitter.com/flaviojmendes",
                label: "@flaviojmendes",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://twitter.com/marcobrunodev",
                label: "@marcobrunodev",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://twitter.com/AkitaOnRails",
                label: "@AkitaOnRails",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://twitter.com/sseraphini",
                label: "@sseraphini",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://twitter.com/BolhaTech",
                label: "#BolhaTech",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://twitter.com/danielhe4rt",
                label: "@danielhe4rt",
                votes: 0,
                contentType: LinkContentType.VISIT
              },

              {
                url: "https://twitter.com/paulo_caelum",
                label: "@paulo_caelum",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
            ],
          },
        ],
      },
      {
        label: "Vídeo e Lives",
        description:
          "Se curte usar twitter e quer ter a sua timeline cheio de devs com opniões fortes, notícias e dúvidas sobre tech/desenvolvimento, siga essas pessoas e hashtags:",
        children: [
          {
            label: "Youtube",
            links: [
              {
                url: "https://www.youtube.com/c/MarcoBrunoDev",
                label: "marcobrunodev",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://www.youtube.com/c/FabioAkita1990",
                label: "Fabio Akita",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://www.youtube.com/c/Programadorbr",
                label: "Programador BR",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://www.youtube.com/c/FilipeDeschamps",
                label: "FilipeDeschamps",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://www.youtube.com/c/codigofontetv",
                label: "Código Fonte TV",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
            ],
          },
          {
            label: "Twitch",
            links: [
              {
                url: "https://www.twitch.tv/marcobrunodev",
                label: "marcobrunodev",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "twitch.tv/flaviojmendes",
                label: "flaviojmendes",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Desafios para Praticar",
        description:
          "Se curte usar twitter e quer ter a sua timeline cheio de devs com opniões fortes, notícias e dúvidas sobre tech/desenvolvimento, siga essas pessoas e hashtags:",
        children: [
          {
            label: "Aprenda/Pratique Javascript",
            links: [
              {
                url: "https://learnjavascript.online/app.html",
                label: "Learn Javascript",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
            ],
          },
          {
            label: "Code Challenges ( Desafios )",
            links: [
              {
                url: "https://www.figma.com/file/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---Codelândia?node-id=0%3A1",
                label: "Desafios Codelândia ( Frontend )",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://www.hackerrank.com/",
                label: "Hackerrank",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
              {
                url: "https://www.beecrowd.com.br/",
                label: "Beecrowd",
                votes: 0,
                contentType: LinkContentType.VISIT
              },
            ],
          },
        ],
      },
    ],
  },
];
