const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");


  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = "アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤャユュヨョラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

  const fontSize = 16;
  const columns = canvas.width / fontSize;

  const drops = [];
  for (let x = 0; x < columns; x++) drops[x] = 1;

  function draw() {
  
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; // neon green
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  setInterval(draw, 33);
  window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });

  // Opgave 1
  function changeText() {
    document.getElementById("changeTextP").textContent = "Teksten er nu ændret!";
  }

  // Opgave 2
  function changeBgColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }

  // Opgave 3
  function toggleParagraph() {
    const p = document.getElementById("toggleP");
    if (p.style.display === "none") {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  }

  // Opgave 4
  let count = 0;
  function changeCount(val) {
    count += val;
    document.getElementById("counter").textContent = count;
  }

  // Opgave 5
  function countChars() {
    const input = document.getElementById("charInput");
    document.getElementById("charCount").textContent = input.value.length;
  }

  // Opgave 6
  function showInputText() {
    const val = document.getElementById("showInput").value;
    document.getElementById("showOutput").textContent = val;
  }


    async function getJoke() {
      try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any?format=json");
        const data = await res.json();

        let jokeText = "";
        if (data.type === "single") {
          jokeText = data.joke;
        } else if (data.type === "twopart") {
          jokeText = `${data.setup} — ${data.delivery}`;
        }

        document.getElementById("joke").textContent = jokeText;
      } catch (err) {
        document.getElementById("joke").textContent = "Error fetching joke 😢";
        console.error(err);
      }
    }

    getJoke();
