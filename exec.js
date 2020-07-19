let loaded = 0,
    L = 8,
    N = g.nodes.length,
    s,
    clicked = false,
    animationStep = 0;
    state = 0,
    labelsButton = ["Estabilizar Partícula", "Analisar", "Árvore Genelógica", "Oscilar"],
    selectedId = "";

const urls = g.nodes.filter(node => node.url).map(node => node.url);

sigma.canvas.nodes.image = (function () {
var _cache = {},
    _loading = {},
    _callbacks = {};

// Return the renderer itself:
var renderer = function (node, context, settings) {
    var args = arguments,
    prefix = settings("prefix") || "",
    size = node[prefix + "size"],
    color = node.color || settings("defaultNodeColor"),
    url = node.url;

    if (_cache[url]) {
    context.save();

    // Draw the clipping disc:
    context.beginPath();
    context.arc(
        node[prefix + "x"],
        node[prefix + "y"],
        node[prefix + "size"],
        0,
        Math.PI * 2,
        true
    );
    context.closePath();
    context.clip();

    // Draw the image
    context.drawImage(
        _cache[url],
        node[prefix + "x"] - size,
        node[prefix + "y"] - size,
        2 * size,
        2 * size
    );

    // Quit the "clipping mode":
    context.restore();

    // Draw the border:
    context.beginPath();
    context.arc(
        node[prefix + "x"],
        node[prefix + "y"],
        node[prefix + "size"],
        0,
        Math.PI * 2,
        true
    );
    context.lineWidth = size / 10;
    context.strokeStyle = node.color || settings("defaultNodeColor");
    context.stroke();
    } else {
    sigma.canvas.nodes.image.cache(url);
    sigma.canvas.nodes.def.apply(sigma.canvas.nodes, args);
    }
};

// Let's add a public method to cache images, to make it possible to
// preload images before the initial rendering:
renderer.cache = function (url, callback) {
    if (callback) _callbacks[url] = callback;

    if (_loading[url]) return;

    var img = new Image();

    img.onload = function () {
    _loading[url] = false;
    _cache[url] = img;

    if (_callbacks[url]) {
        _callbacks[url].call(this, img);
        delete _callbacks[url];
    }
    };

    _loading[url] = true;
    img.src = url;
};

return renderer;
})();

function shuffle(array) {
var currentIndex = array.length,
    temporaryValue,
    randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}

return array;
}

let animeGrafo = () => {  
    if(sigma.plugins.animate){
        let prefix = [
            'random1_', 'random2_',
            'random3_','random4_',
            'random5_', 'random6_',
            'random7_','random8_'
        ][animationStep++];
        sigma.plugins.animate(
        s,
        {
            x: prefix + 'x',
            y: prefix + 'y',
            type: prefix + 'type',
        }
        );
        animationStep = animationStep > 7 ? 0 : animationStep;
    }
}

let intervalAnimeGrafo = setInterval(animeGrafo, 500);

function inverter() {
    clearInterval(intervalAnimeGrafo)
    s.killForceAtlas2()
    state++;

    document.getElementById("btState").innerText = labelsButton[state]
    if(state == 0){
        
        animeGrafo();
        intervalAnimeGrafo = setInterval(animeGrafo, 500);
        clicked = false;
        s.graph.edges().forEach((ed) => (ed.color = "#000"));
        s.refresh();

    }
    else if(state == 3){

        s.startForceAtlas2();
    }
    else{
        let prefix = ["circular_", "grid_"][state - 1];
        sigma.plugins.animate(s, {
            x: prefix + "x",
            y: prefix + "y",
            type: prefix + "type"
        });
    }

    let container = document.getElementById("container");
    setInterval(()=>{
        if(!state == 0){
            container.classList.remove("apagado");
            container.classList.add("aceso")
        }else{
            container.classList.add("apagado");
            container.classList.remove("aceso")
        }
    }, 1500)
    
    state = state >= 3 ? -1 : state
    
}



g.nodes = shuffle(g.nodes).map((node, i) => {
    return {
        ...node,
        circular_x: L * Math.cos((Math.PI * 2 * i) / N - Math.PI / 2),
        circular_y: L * Math.sin((Math.PI * 2 * i) / N - Math.PI / 2),
        grid_x: (i % L)/1.3,
        grid_y: (Math.floor(i / L)),
        random1_x: Math.random(),
        random1_y: Math.random(),
        random2_x: Math.random(),
        random2_y: Math.random(),
        random3_x: Math.random(),
        random3_y: Math.random(),
        random4_x: Math.random(),
        random4_y: Math.random(),
        random5_x: Math.random(),
        random5_y: Math.random(),
        random6_x: Math.random(),
        random6_y: Math.random(),
        random7_x: Math.random(),
        random7_y: Math.random(),
        random8_x: Math.random(),
        random8_y: Math.random(),

        //type style
        random1_type: "default",
        random2_type: "default",
        random3_type: "default",
        random4_type: "default",
        random5_type: "default",
        random6_type: "default",
        random7_type: "default",
        random8_type: "default",
        circular_type: "image",
        grid_type: "image",
        x: Math.random(),
        y: Math.random(),
        color: "#000",
        size: 1,
        type: "default",
    };
});

g.edges = g.edges.map((edge, index) => {
return {
    ...edge,
    id: "e" + index,
    type: edge.type ? edge.type : "curvedArrow",
    color: edge.color ? edge.color : "#000",
    size: 5,
};
});

urls.forEach(function (url) {
sigma.canvas.nodes.image.cache(url, function () {
    if (++loaded === urls.length) {
    s = new sigma({
        graph: g,
        renderer: {
            container: document.getElementById("container"),
            type: "canvas",
        },
        settings: {
            sideMargin : 0.25,
            defaultZoomingRatio: 2,
            drawLabels: false,
            defaultLabelColor: "#567893",
            animationsTime: 500,
            maxNodeSize: 28,
            maxEdgeSize: 5,
            minArrowSize: 5,
            doubleClickEnabled: false,
            enableEdgeHovering: false,
            defaultHoverFont: 'Grenze Gotisch',
            font: 'Grenze Gotisch',
            defaultHoverLabelBGColor: "#000",
            defaultLabelHoverColor: "#FFF",
            singleHover: true,
            labelSize: "proportional",
            defaultLabelSize: "15",
            labelThreshold: 16,
            //enableCamera: false
    },
    });

    s.bind("outNode", function (e) {
        if(!state){
            return;
        }
        if (!clicked) {
        s.graph.edges().forEach((ed) => (ed.color = "#000"));
        document.getElementById("container").style.cursor = "default";
        s.refresh();
        }
    });

    s.bind("doubleClickStage ", (e) => {
        if(!state){
            return;
        }
        clicked = false;
        s.graph.edges().forEach((ed) => (ed.color = "#000"));
        s.refresh();
        // let container = document.getElementById("container");
        // container.style.cursor = "default";
        // container.classList.remove("showDetails")
        //document.getElementById("details").classList.add("closeDetails")
    });

    s.bind("overNode", function (e) {
        if(!state){
            return;
        }
        if (!clicked) {
        s.graph
            .edges()
            .forEach((ed) => (ed.color = "rgba(122, 150, 189, 0)"));
        s.graph
            .edges()
            .filter((edge) => {
            return edge.source === e.data.node.id;
            })
            .forEach((ed) => (ed.color = "#EFEDED"));

        s.graph
            .edges()
            .filter((edge) => {
            return edge.target === e.data.node.id;
            })
            .forEach((ed) => (ed.color = "rgb(8, 68, 117)"));

        document.getElementById("container").style.cursor = "pointer";
        s.refresh();
        }
    });

    s.bind("clickNode", function (e) {
        
        if( e.data.node.id === selectedId){
            if(!state){
                return;
            }
            clicked = false;
            s.graph.edges().forEach((ed) => (ed.color = "#000"));
        }else{

            if(!state){
                return;
            }
            if (!clicked) {
                clicked = true;
            }
            s.graph
                .edges()
                .forEach((ed) => (ed.color = "rgba(122, 150, 189, 0)"));
            s.graph
                .edges()
                .filter((edge) => {
                return edge.source === e.data.node.id;
                })
                .forEach((ed) => (ed.color = "#EFEDED"));
            s.graph
                .edges()
                .filter((edge) => {
                return edge.target === e.data.node.id;
                })
                .forEach((ed) => (ed.color = "rgb(8, 68, 117)"));
        }

        // let container = document.getElementById("container");
        // container.style.cursor = "pointer";
        // container.classList.add("showDetails");
        // document.getElementById("details").classList.remove("closeDetails")
        
        // let i = 1
        // let timer = setInterval(() => { 
        //     s.refresh();
        //     i++
        //     i > 500 && clearInterval(timer);
        // }, 1)
        selectedId = e.data.node.id;
        s.refresh();
    });

    
    }
});
});