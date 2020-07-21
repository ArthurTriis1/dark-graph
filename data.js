let g = {
    nodes: [
      {
        id: "jonas",
        label: "Jonas Kahnwald (Adam)",
        url: "img/jonas.jpg",
      },
      {
        id: "martha2",
        label: "Martha Nilsen ",
        url: "img/martha.jpeg",
      },
      {
        id: "infinito",
        label: "Trio do Infinito",
        url: "img/infinito.jpeg",
      },
      {
        id: "agnes",
        label: "Agnes Nilsen",
        url: "img/agnes.jpg",
      },
      {
        id: "tronte",
        label: "Tronte Nilsen",
        url: "img/tronte.jpg",
      },
      {
        id: "jana",
        label: "Jana",
        url: "img/jana.jpg"
      },
      {
        id: "mads",
        label: "Mads Nilsen",
        url: "img/mads.jpg"
      },
      {
        id: "ulrich",
        label: "Ulrich Nilsen",
        url: "img/ulrich.jpeg"
      },
      {
        id: "katharina",
        label: "Katharina Albers",
        url: "img/katharina.jpg"
      },
      {
        id: "hannah",
        label: "Hannah Kahnwald",
        url: "img/hanna.jpg"
      },
      {
        id: "mikkel",
        label: "Mikkel Nilsen / Michael Kahnwald",
        url: "img/mikkel.jpeg"
      },
      {
        id: "magnus",
        label: "Magnus Nilsen",
        url: "img/magnus.jpg"
      },
      {
        id: "martha1",
        label: "Martha Nilsen",
        url: "img/martha1.jpg"
      },
      {
        id: "egon",
        label: "Egon Tiedemann",
        url: "img/egon.jpg"
      },
      {
        id: "bartosz",
        label: "Bartosz Tiedemann",
        url: "img/bartosz.jpg"
      },
      {
        id: "silja",
        label: "Silja Tiedemann",
        url: "img/silja.jpg"
      },
      {
        id: "helene",
        label: "Helene Albers",
        url: "img/helene.png"

      },
      {
        id: "hermann",
        label: "Hermann Albers",
        url: "img/hermann.jpg"
      },
      {
        id: "noah",
        label: "Noah/Hanno Tauber",
        url: "img/noah.jpg"
      },
      {
        id: "elisabeth",
        label: "Elisabeth Doppler",
        url: "img/elisabeth.jpg"

      },
      {
        id: "charlotte",
        label: "Charlotte Doppler",
        url: "img/charlotte.jpg"
      },
      {
        id: "hg",
        label: "H.G. Tannhaus",
        url: "img/hg.jpg"
      },
      {
        id: "peter",
        label: "Peter Doppler",
        url: "img/peter.jpg"

      },
      {
        id: "franziska",
        label: "Franziska Doppler",
        url: "img/franziska.jpg"

      },
      {
        id: "greta",
        label: "Greta Doppler",
        url: "img/greta.jpg"

      },
      {
        id: "helge",
        label: "Helge Doppler",
        url: "img/helge.jpg"
      },
      {
        id: "claudia",
        label: "Claudia Tiedemann",
        url: "img/claudia.jpg"
      },
      {
        id: "doris",
        label: "Doris",
        url: "img/doris.jpg"
      },
      {
        id: "gretchen",
        label: "Gretchen Tiedemann",
        url: "img/gretchen.jpg"
      },
      {
        id: "bernd",
        label: "Bernd Doppler",
        url: "img/bernd.jpg"
      },
      {
        id: "regina",
        label: "Regina Tiedemann",
        url: "img/regina.jpg"
      },
      {
        id: "boris",
        label: "Boris/Aleksander",
        url: "img/boris.jpg"
      }

    ],
    edges: [
      {
        source: "regina",
        target: "bartosz"
      },
      {
        source: "boris",
        target: "bartosz"
      },
      {
        source: "bernd",
        target: "regina"
      },
      {
        source: "claudia",
        target: "regina"
      },
      {
        source: "claudia",
        target: "gretchen",
        type: "dotted"
      },
      {
        source: "doris",
        target: "claudia"
      },
      {
        source: "egon",
        target: "claudia"
      },
      {
        source: "helge",
        target: "peter"
      },
      {
        source: "greta",
        target: "helge"
      },

      {
        source: "jonas",
        target: "infinito",
      },
      {
        source: "martha2",
        target: "infinito",
      },
      {
        source: "agnes",
        target: "tronte",
      },
      {
        source: "infinito",
        target: "tronte"
      },
      {
        source: "tronte",
        target: "mads"
      },
      {
        source: "jana",
        target: "mads"
      },
      {
        source: "tronte",
        target: "ulrich"
      },
      {
        source: "jana",
        target: "ulrich"
      },
      {
        source: "ulrich",
        target: "mikkel"
      },
      {
        source: "ulrich",
        target: "magnus"
      },
      {        
        source: "ulrich",
        target: "martha1"
      },
      {        
        source: "katharina",
        target: "mikkel"
      },
      {        
        source: "katharina",
        target: "magnus"
      },
      {        
        source: "katharina",
        target: "martha1"
      },
      {        
        source: "mikkel",
        target: "jonas"
      },
      {        
        source: "hannah",
        target: "jonas",
      },
      {        
        source: "egon",
        target: "silja"
      },
      {        
        source: "hannah",
        target: "silja"
      },
      {        
        source: "bartosz",
        target: "agnes"
      },
      {
        source: "silja",
        target: "agnes"
      },
      {        
        source: "bartosz",
        target: "noah"
      },
      {
        source: "silja",
        target: "noah"
      },
      {
        source: "helene",
        target: "katharina"
      },
      {
        source: "hermann",
        target: "katharina"
      },
      {
        source: "noah",
        target: "charlotte"
      },
      {
        source: "elisabeth",
        target: "charlotte"
      },
      {
        source: "hg",
        target: "charlotte",
        type: "dotted"
      },
      {
        source: "peter",
        target: "franziska"
      },
      {
        source: "peter",
        target: "elisabeth"
      },
      {
        source: "charlotte",
        target: "franziska"
      },
      {
        source: "charlotte",
        target: "elisabeth"
      },
      
    
    
    
    ]
  }