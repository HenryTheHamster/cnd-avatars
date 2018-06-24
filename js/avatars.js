var colours = {
  green: {
    low: '11332d',
    mid: '80a843',
    high: 'aed13f'
  }, 
  blue: {
    low: '0f4f68',
    mid: '1e7b9a',
    high: '1ebbef'
  },
  orange: {
    low: 'd7181f',
    mid: 'bb582b',
    high: 'f16e1d'
  },
  pink: {
    low: '422627',
    mid: 'c53b77',
    high: 'ed517e'
  },
  brown: {
    low: '82503a',
    mid: '8f7a61',
    high: 'bca27d'
  },
};

var wearingHat = false;

function saveAvatar() {
  var s = Snap("#svg");
  downloadFile(s.toString(), 'cnd_avatar.svg', 'image/svg+xml');
}

function guybrush(i) {
  console.log(i);
}

function exportPNG() {
  saveSvgAsPng(document.getElementById("svg"), "svg.png");
  // var ctx = canvas.getContext("2d");
  
  // var img = new Image();
  // img.onload = function() {
  //     ctx.drawImage(img, 0, 0);
  // }
  // img.src = 
  // var DOMURL = self.URL || self.webkitURL || self;
  // var img = new Image();
  // var svg = new Blob([s], {type: "image/svg+xml;charset=utf-8"});
  // var url = DOMURL.createObjectURL(svg);
  // // img.onload = function() {
  // img.src = url;
  // ctx.drawImage(img, 0, 0);
  // var png = canvas.toDataURL("image/png");
  // // a = document.createElement('a');
  // // a.download = "image.png";
  // // a.href = png;
  // console.log(png);
  // // document.body.appendChild(a);
  // // a.click();
  // document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
  // DOMURL.revokeObjectURL(png);
  // };
  // var image = new Image();
  // image.onload = function () {
  // ctx.drawImage(img, 250,250);
  // // }
  // // image.src = 

  // // debugger;
  // // context = canvas.getContext('2d');
  // // context.drawImage(s, 0, 0);
 
  // a = document.createElement('a');
  // a.download = "image.png";
  // a.href = canvas.toDataURL('image/png');
  // console.log(a.href);
  // document.body.appendChild(a);
  // a.click();
}

function downloadFile(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function createColourList() {
  colourList = $('#colourList')[0];
  Object.keys(colours).forEach(function(c, i) {
    option = `
    <div class="list-item">
      <li>
        <a href="#" onclick="changeColour('${c}')">
          <div class="list-svg-container">
            <svg width="100%" height="100%" class="list-svg" viewBox="0 0 250 250">
            <circle cx="125" cy="125" r="100" style="fill: #${ colours[c].high }"/>
            </svg>
          </div>
          ${ c }
        </a>
      </li>
    </div>
    `;
    // debugger;
    colourList.append($(option)[0]);
  });
}

function createGlassesList(node) {
  nodes = node.querySelectorAll('.glasses');
  list = $('#glassesList')[0];
  nodes.forEach(function(n, i) {
    option = `
    <div class="list-item">
      <li>
        <a href="#" onclick="changeGlasses('${n.id}')">
          <div class="list-svg-container">
            <svg width="100%" height="100%" class="list-svg" viewBox="0 0 250 250">
              ${ n.outerHTML }
            </svg>
          </div>
          Hair #${ i }
        </a>
      </li>
    </div>
    `;
    // debugger;
    list.append($(option)[0]);
  });
}


function createHairList(node) {
  nodes = node.querySelectorAll('.hair.primary');
  // debugger;
  list = $('#hairList')[0];
  nodes.forEach(function(n, i) {
    option = `
    <div class="list-item">
      <li>
        <a href="#" onclick="changeHair('${n.id}')">
          <div class="list-svg-container">
            <svg width="100%" height="100%" class="list-svg" viewBox="0 0 250 250">
              ${ n.outerHTML }
            </svg>
          </div>
          Hair #${ i }
        </a>
      </li>
    </div>
    `;
    // debugger;
    list.append($(option)[0]);
  });
}

function createHeadgearList(node) {
  nodes = node.querySelectorAll('.headgear');
  list = $('#headgearList')[0];
  nodes.forEach(function(n, i) {
    option = `
    <div class="list-item">
      <li>
        <a href="#" onclick="changeHeadgear('${n.id}')">
          <div class="list-svg-container">
            <svg width="100%" height="100%" class="list-svg" viewBox="0 0 250 250">
              ${ n.outerHTML }
            </svg>
          </div>
          Hair #${ i }
        </a>
      </li>
    </div>
    `;
    // debugger;
    list.append($(option)[0]);
  });
}

function createFacialHairList(node) {
  nodes = node.querySelectorAll('.facial-hair');
  list = $('#facialHairList')[0];
  nodes.forEach(function(n, i) {
    option = `
    <div class="list-item">
      <li>
        <a href="#" onclick="changeFacialHair('${n.id}')">
          <div class="list-svg-container">
            <svg width="100%" height="100%" class="list-svg" viewBox="0 0 250 250">
              ${ n.outerHTML }
            </svg>
          </div>
          Hair #${ n.id }
        </a>
      </li>
    </div>
    `;
    // debugger;
    list.append($(option)[0]);
  });
}

$( document ).ready(function() {
  console.log("loaded");
  s = Snap("#svg");
  Snap.load("data/avatars.svg", onSVGLoaded ) ;


  function onSVGLoaded( data ){ 
      // data2 = data.slice();
      // node = ;
      
      
      // node.sel
      createHairList(data.node.cloneNode('svg'));
      createColourList(data.node.cloneNode('svg'));
      createGlassesList(data.node.cloneNode('svg'));
      createHeadgearList(data.node.cloneNode('svg'));
      createFacialHairList(data.node.cloneNode('svg'));
      // node1 = data.node.cloneNode('svg');
      // node2 = ;
      s.append( data.node.cloneNode('svg') );
      // // var data2 = data;
      // hs.append(node2.querySelector('.hair'));
      // $('path').css('visibility', 'hidden');
      $('.list-svg > path').css('fill', 'white', 'important');
      $('.list-svg > path').css('visibility', 'visible', 'important');
      $('path').css('stroke', 'none');
      $('circle').css('stroke', 'none');
      // $('#svg > path').css('fill', 'none');
      // $('#svg > path').css('stroke', 'none');
      changeColour('blue');
      changeHair(0);
      changeGlasses(0);
      changeFacialHair(0);
      changeHeadgear(0);
  }

});

function changeFacialHair(id) {
  $('#svg > svg > .facial-hair').css('visibility', 'hidden', 'important');
  $('#svg > svg > .facial-hair#' + id).css('visibility', 'visible', 'important');
}

function changeGlasses(id) {
  // console.log('.glasses.style' + v);
  $('#svg > svg > .glasses').css('visibility', 'hidden', 'important');
  $('#svg > svg > .glasses#' + id).css('visibility', 'visible', 'important');
}
// $('#svg').parentElement.replaceChild(e.contentDocument.documentElement.cloneNode(true), e);
function changeHair(id) {
  console.log(id);
  $('#svg > svg > .hair').css('visibility', 'hidden', 'important');
  $('#svg > svg > .hair#' + id).css('visibility', 'visible', 'important');
}

function changeHeadgear(id) {
  // if(v)
  $('#svg > svg > .headgear').css('visibility', 'hidden', 'important');
  $('#svg > svg > .headgear#' + id).css('visibility', 'visible', 'important');
}

function changeColour(c) {
  $('#svg > svg > .face').css('fill', colours[c].high, 'important');
  $('#svg > svg > .hair').css('fill', colours[c].low, 'important');
  $('#svg > svg > .facial-hair.primary').css('fill', colours[c].low, 'important');
  $('#svg > svg > .facial-hair.secondary').css('fill', colours[c].mid, 'important');
  $('#svg > svg > .accessory').css('fill', colours[c].high, 'important');
  $('#svg > svg > .text').css('fill', colours[c].low, 'important');
}