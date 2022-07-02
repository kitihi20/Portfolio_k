
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
  <button class="none blborder" onclick="location.href='./index.html'">
    <img src="./images/AS-MadeIconProt_small.png" width="40px">
    <span id="headertxt" class="CGf">
      Portfolio_k
    </span>
  </button>
  <div id="hmenu">
    <button class="hmenubox blborder" onclick="location.href='./index.html'">Home</button>
    <button class="hmenubox blborder" onclick="location.href='./index.html'">About</button>
    <h1>Works</h1>
    <button class="hmenubox blborder" onclick="location.href='./NonameMech.html'">NonameMech v2</button>
    <button class="hmenubox blborder" onclick="location.href='./index.html'">Voidgazer</button>
    <button class="hmenubox blborder" onclick="location.href='./index.html'">~からの脱出</button>
    <button class="hmenubox blborder" onclick="location.href='./index.html'">欠けた世界、駆ける</button>
    <button class="hmenubox blborder" onclick="location.href='./index.html'">オンラインゲーム擬き</button>
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