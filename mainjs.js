
/*ページ内でサーバーのファイル読み込みってChromeでは禁止されてたりする?*/
function LoadHeader(rootdir)
{
    let el = document.getElementById("headermain");
    el.innerHTML = `
    <button id="hbbutton" class="blborder" onclick="ClickHB()">
      <span class="hbline" id="hbline1"></span>
      <span class="hbline" id="hbline2_1"></span>
      <span class="hbline" id="hbline2_2"></span>
      <span class="hbline " id="hbline3"></span>
    </button>
    <a href="./index.html">
    <button class="none blborder">
      <img src="./images/AS-MadeIconProt_small.png" width="40px">
      <span id="headertxt" class="CGf">
        kitihi20
      </span>
    </button>
    </a>
    <div id="hmenu">
      <hr class="clear">
      <a href="./index.html"><button class="hmenubox blborder">Home</button></a>
      <a href="./About.html"><button class="hmenubox blborder">About</button></a>
      <hr class="clear">
      
      <h1>Works</h1>
      
      <a href="./Voidlase.html"><button class="hmenubox blborder">VOIDLASE</button></a>
      <hr class="clear">
      <a href="./GTMech3.html"><button class="hmenubox blborder">GravityTechnologyMech v3.0(仮)</button></a>
      <a href="./NonameMech.html"><button class="hmenubox blborder">NonameMech v2</button></a>
      <a href="./AnomalyCorrector.html"><button class="hmenubox blborder">AnomalyCorrector</button></a>
      <a href="./Escape.html"><button class="hmenubox blborder">〜からの脱出</button></a>
      <a href="./Crack.html"><button class="hmenubox blborder">欠けた世界、駆ける</button></a>
      <a href="./Other.html"><button class="hmenubox blborder">その他</button></a>
      
      <hr class="clear">
    </div>
    `;
}

let OpenHB = false;

function ClickHB(){
    
    let element = document.getElementById("headermain");
    OpenHB = !OpenHB;
    if(OpenHB)
    {
        element.classList.add("op");
        element.classList.remove("cl");
    }else{
        element.classList.remove("op");
        element.classList.add("cl");
    }
}
