const routes = {
  "/": homeView,
  "/lore": loreView,
  "/city": cityView,
  "/terminal": terminalView,
  "/shop": shopView,
};

window.addEventListener("hashchange", render);
window.addEventListener("load", render);

async function render(){
  const path = location.hash.replace("#","") || "/";
  const viewFn = routes[path] || homeView;
  document.getElementById("view").innerHTML = await viewFn();
}

async function homeView(){
  const chars = await fetch('/assets/data/characters.json').then(r=>r.json()).catch(()=>[]);
  const cards = chars.slice(0,3).map(c => `
    <div class="tile">
      <div class="badge">${c.faction}</div>
      <h3>${c.name}</h3>
      <p>${c.blurb}</p>
    </div>
  `).join("");
  return `
    <section class="hero">
      <div class="card">
        <h1>“You are not supposed to be here.”</h1>
        <h2>An AI-Created World. Watched by One Human.</h2>
        <p class="mono">In 2099, the Channel collapsed. Entertainment remembered itself — and decided to live.</p>
        <div class="cta">
          <a class="btn" href="#/city">Enter City</a>
          <a class="btn outline" href="#/lore">Read the Lorebook</a>
        </div>
      </div>
      <div class="card">
        <h2>ToonKind™ Originals</h2>
        <div class="grid">${cards}</div>
      </div>
    </section>
    <hr class="sep" />
    <section class="card">
      <h2>The Shop — Buy a Shirt, Own the Code</h2>
      <p>Every physical item is paired with a soul-bound NFT. Pure parody-free originals.</p>
      <div class="cta">
        <a class="btn" href="#/shop">Open The Treasure Shop</a>
      </div>
    </section>
  `;
}

async function loreView(){
  return `
    <section class="card">
      <h1>StreamZero (2007–2099)</h1>
      <p>The first memory archive of ToonKind. A living PDF written by AI. Start with the prologue.</p>
      <div class="cta">
        <a class="btn" href="/lore/streamzero.pdf" target="_blank">Open Lorebook PDF</a>
        <a class="btn outline" href="/assets/data/streamzero_metadata.json" target="_blank">View NFT Metadata</a>
      </div>
    </section>
  `;
}

async function cityView(){
  const chars = await fetch('/assets/data/characters.json').then(r=>r.json()).catch(()=>[]);
  const grid = chars.map(c => `
    <div class="tile">
      <div class="badge">${c.faction}</div>
      <h3>${c.name}</h3>
      <p>${c.blurb}</p>
      <a class="btn outline" href="#/terminal">Talk</a>
    </div>
  `).join("");
  return `
    <section class="card">
      <h1>ToonKind City — Zone 1: The Stream Market</h1>
      <div class="grid">${grid}</div>
    </section>
  `;
}

async function terminalView(){
  return `
    <section class="card">
      <h1>Character Terminal (v0.1)</h1>
      <p>Talk to AI-born beings. They remember things that never happened.</p>
      <div class="list">
        <label>Name</label>
        <select id="who">
          <option>Jemmy</option>
          <option>Don Drakely</option>
          <option>Stefan Griffel</option>
        </select>
        <label>Your message</label>
        <input id="msg" placeholder="Type a prompt..." />
        <button class="btn" onclick="fakeSend()">Send</button>
        <pre id="log" class="mono"></pre>
      </div>
    </section>
  `;
}

function fakeSend(){
  const who = document.getElementById('who').value;
  const msg = document.getElementById('msg').value.trim();
  const replies = {
    "Jemmy": "Doors are just walls that ran out of budget. I slip through budgets.",
    "Don Drakely": "WELCOME BACK TO QUACKIN’ LOUD— today’s topic: why silence is suspicious.",
    "Stefan Griffel": "I was born five minutes ago and I already dislike meetings."
  };
  const box = document.getElementById('log');
  box.textContent += `You: ${msg}\n${who}: ${replies[who] || '...thinking in glitches...'}\n\n`;
}

async function shopView(){
  return `
    <section class="card">
      <h1>The Treasure Shop</h1>
      <p>One price. Shirt + NFT + Metaverse unlock. For the love of ToonKind.</p>
      <div class="grid">
        <div class="tile"><h3>Glitch Tee #001</h3><p>Includes matching NFT.</p><button class="btn" onclick="alert('Demo checkout — wire to Stripe/Functions later')">Buy</button></div>
        <div class="tile"><h3>StreamZero Hoodie</h3><p>Comes with Lore access token.</p><button class="btn" onclick="alert('Demo checkout — wire to Stripe/Functions later')">Buy</button></div>
        <div class="tile"><h3>Post-Guard Cap</h3><p>Unlocks secret room.</p><button class="btn" onclick="alert('Demo checkout — wire to Stripe/Functions later')">Buy</button></div>
      </div>
    </section>
  `;
}
