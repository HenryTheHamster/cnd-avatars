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

$( document ).ready(function() {
  console.log("loaded");
  s = Snap("#svg");
  Snap.load("personas.svg", onSVGLoaded ) ;
  function onSVGLoaded( data ){ 
      // data2 = data.slice();
      node = data.node.cloneNode('svg');
      hairNodes = node.querySelectorAll('.hair');
      glassesNodes = node.querySelectorAll('.glasses');
      hairList = $('#hairList')[0];
      colourList = $('#colourList')[0];
      glassesList = $('#glassesList')[0];
      Object.keys(colours).forEach(function(c, i) {
        option = `
        <div class="list-item">
          <li>
            <a href="#" onclick="guybrush(${i})">
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
      hairNodes.forEach(function(hn, i) {
        option = `
        <div class="list-item">
          <li>
            <a href="#" onclick="guybrush(${i})">
              <div class="list-svg-container">
                <svg width="100%" height="100%" class="list-svg" viewBox="0 0 250 250">
                  ${ hn.outerHTML }
                </svg>
              </div>
              Hair #${ i }
            </a>
          </li>
        </div>
        `;
        // debugger;
        hairList.append($(option)[0]);
      });
      glassesNodes.forEach(function(g, i) {
        option = `
        <div class="list-item">
          <li>
            <a href="#" onclick="guybrush(${i})">
              <div class="list-svg-container">
                <svg width="100%" height="100%" class="list-svg" viewBox="0 0 250 250">
                  ${ g.outerHTML }
                </svg>
              </div>
              Hair #${ i }
            </a>
          </li>
        </div>
        `;
        // debugger;
        glassesList.append($(option)[0]);
      });
      // node.sel


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
      changeColor({value: 'blue'});
      changeHair({value: '1'});
      changeGlasses({value: 'none'});
      changeFacialHair({value: 'none'});
      changeHeadgear({value: 'none'});
  }

});

function changeFacialHair(selected) {
  $('#svg > svg > .facial_hair').css('visibility', 'hidden', 'important');
  $('#svg > svg > .facial_hair.style' + selected.value).css('visibility', 'visible', 'important');
}

function changeGlasses(selected) {
  // console.log('.glasses.style' + selected.value);
  $('#svg > svg > .glasses').css('visibility', 'hidden', 'important');
  $('#svg > svg > .glasses.style' + selected.value).css('visibility', 'visible', 'important');
}
// $('#svg').parentElement.replaceChild(e.contentDocument.documentElement.cloneNode(true), e);
function changeHair(selected) {
  $('#svg > svg > .hair').css('visibility', 'hidden', 'important');
  $('#svg > svg > .hair.style' + selected.value).css('visibility', 'visible', 'important');
}

function changeHeadgear(selected) {
  if(selected.value)
  $('#svg > svg > .headgear').css('visibility', 'hidden', 'important');
  $('#svg > svg > .headgear.' + selected.value).css('visibility', 'visible', 'important');
}

function changeColor(selected) {
  $('#svg > svg > .face').css('fill', colours[selected.value].high, 'important');
  $('#svg > svg > .hair').css('fill', colours[selected.value].low, 'important');
  $('#svg > svg > .facial_hair').css('fill', colours[selected.value].low, 'important');
  $('#svg > svg > .stubble').css('fill', colours[selected.value].mid, 'important');
  $('#svg > svg > .accessory').css('fill', colours[selected.value].high, 'important');
  $('#svg > svg > .text').css('fill', colours[selected.value].low, 'important');
}