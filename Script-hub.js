/* Script-hub.js - Global Logic Engine for Ritesh's Website */

// 1. CONTENT DATABASE (Rotates Daily Based on Calendar Day)
const dailyDatabase = {
  quotes: [
    { text: "Your limit is not what you know; it is what you are willing to learn.", challenge: "Learn one new keyboard shortcut today." },
    { text: "Automation is not about making humans obsolete. It's about making humans superhuman.", challenge: "Draft a workflow that automates your email replies." },
    { text: "The best way to predict the future is to automate it.", challenge: "Set up a Tasker task to mute phone when flipped down." },
    { text: "Don't write twice what you can script once.", challenge: "Write a simple script to clean up your Desktop folder." },
    { text: "In the era of AI, prompt engineering is the vocabulary of creation.", challenge: "Experiment with a role-prompting persona today." },
    { text: "Simplicity is the ultimate sophistication in automation.", challenge: "Audit your daily routine and find 1 task to delegate to AI." },
    { text: "Code is poetry. Automation is the rhythm of productivity.", challenge: "Read one short summary on MCP (Model Context Protocol)." }
  ],
  prompts: [
    // Array of sets of prompts. Each set has 3 prompts (Work, Image, Trend)
    [
      {
        category: "Daily Life Work Automation",
        title: "Personal PDF Summarizer & Action-Item Extractor",
        prompt: "You are a professional executive assistant. I will upload a text output or document details. Please read the content, write a 3-bullet summary of the core message, and list any actionable tasks, deadlines, or owners in a neat Markdown table. Use columns: [Task Name, Owner, Deadline, Priority]. Here is the text:\n\n[INSERT TEXT HERE]"
      },
      {
        category: "AI Trending Image Generator",
        title: "Glassmorphic Holographic Interface (Midjourney)",
        prompt: "A close-up of an interactive glowing holographic dashboard, glassmorphism UI elements floating in mid-air, hands typing on a neon virtual keyboard, dark ambient tech room background, vibrant cyan and magenta lights, octane render, 8k resolution, raytracing details, hyper-realistic --ar 16:9 --style raw --v 6.0"
      },
      {
        category: "New Trending Technology / MCP",
        title: "MCP Client Implementation Planner",
        prompt: "Explain how to build a basic Model Context Protocol (MCP) client using Node.js. Provide a step-by-step checklist of what packages to install, how to establish a transport connection using Stdio, and how to query the available tools from a host server. Include a brief code snippet demonstrating the query sequence."
      }
    ],
    [
      {
        category: "Daily Life Work Automation",
        title: "Email Inbox Auto-Categorizer & Reply Drafter",
        prompt: "Categorize the following email into one of these buckets: [Urgent Client, General Inquiry, Internal, Spam/Newsletter]. Underneath the category, write a polite, concise professional reply draft in the active voice based on this instruction: '[INSERT REPLY INSTRUCTION HERE]'.\n\nEmail Content:\n[INSERT EMAIL HERE]"
      },
      {
        category: "AI Trending Image Generator",
        title: "Futuristic Cyberpunk Workspace (Midjourney)",
        prompt: "A cozy cyberpunk desk setup, multiple vertical glowing monitors displaying lines of green terminal code, a warm mechanical keyboard glowing with RGB, a tiny steaming holographic tea cup next to the keyboard, rain trickling down a neon-lit window overlooking Neo-Tokyo, cozy cinematic lighting, architectural digest style, --ar 16:9 --v 6.0"
      },
      {
        category: "New Trending Technology / MCP",
        title: "DeepSeek R1 Integration & Reasoning Optimizations",
        prompt: "I want to deploy a local DeepSeek R1 model via Ollama. Detail the hardware requirements for the 8B and 14B parameter versions. Show the terminal commands to download, run, and benchmark the inference speed. Additionally, suggest system prompt rules that encourage the model to output logical chain-of-thought blocks."
      }
    ]
  ],
  summaries: [
    [
      { title: "What is Model Context Protocol (MCP)?", text: "Model Context Protocol (MCP) is an open standard introduced by Anthropic that allows AI models to connect securely to local or remote data sources and developer tools (like file systems, databases, and APIs). Instead of building custom integrations for every model, MCP creates a universal plug-and-play connector, allowing an agent to read files, run terminal commands, or edit database rows safely with user permission." },
      { title: "AI Agents vs. LLMs", text: "A Large Language Model (LLM) is like a smart brain that answers questions when prompted. An AI Agent is that same brain equipped with planning abilities, memory, and tools (actions). An agent can break a complex request into smaller tasks, execute them sequentially, read the results, correct its mistakes, and run operations in a loop until the goal is accomplished." }
    ],
    [
      { title: "How Retrieval-Augmented Generation (RAG) Works", text: "RAG solves LLM memory issues by connecting the AI to an external directory. When you ask a question, a search system fetches relevant text documents from your library, injects them into the prompt as reference material, and asks the LLM to write the final answer. This prevents hallucination and allows models to answer questions about private data without retraining." },
      { title: "Introduction to Tasker and Android Automation", text: "Tasker is an Android application that uses triggers (like time, location, Wi-Fi connections, or sensor data) to run tasks automatically. It lets non-coders build automated rules—like turning off notifications when at work, backing up photos to a private server at night, or auto-replying to SMS messages when connected to the car's Bluetooth." }
    ]
  ],
  macros: [
    {
      pc: {
        title: "AutoHotkey: Instant AI Template Inserter",
        desc: "Presses Ctrl+Shift+G to paste a pre-formatted Gemini engineering prompt template anywhere.",
        code: `^+g::
SendInput, You are an expert programmer. Act as my Senior Tech Lead. I will give you a code file. Refactor it for readability, add robust docstrings, and write unit tests:\`n\`n
return`,
        difficulty: 2
      },
      android: {
        title: "Tasker: Face-Down Mute & DND",
        desc: "Automatically turns on Do Not Disturb and silences your phone when you place it screen-down on a desk.",
        code: `Profile: Screen Down Mute
State: Orientation [ Is: Face Down ]
Enter: Silence Phone
  1. Do Not Disturb [ Mode: Priority ]
  2. Sound Volume [ Level: 0 ]
Exit: Restore Audio
  1. Do Not Disturb [ Mode: All ]
  2. Sound Volume [ Level: 7 ]`,
        difficulty: 3
      }
    },
    {
      pc: {
        title: "Python: Daily Wallpaper & Quote Setter",
        desc: "A script that downloads a stunning Unsplash image daily and updates your Windows desktop wallpaper.",
        code: `import urllib.request
import ctypes
import os

url = "https://source.unsplash.com/random/1920x1080/?nature,minimalist"
path = os.path.expanduser("~/daily_wallpaper.jpg")
urllib.request.urlretrieve(url, path)

# Set Windows wallpaper
ctypes.windll.user32.SystemParametersInfoW(20, 0, path, 3)`,
        difficulty: 3
      },
      android: {
        title: "Tasker: Auto Battery Saver at 25%",
        desc: "Triggers power saver, dims the screen, and sends a notification to charge when battery drops below 25%.",
        code: `Profile: Battery Low
State: Battery Level [ From: 0 To: 25 ]
Enter: Engage Battery Saver
  1. Battery Saver [ Set: On ]
  2. Display Brightness [ Level: 30 ]
  3. Notify [ Title: "Battery Low" Text: "Charging Recommended" ]`,
        difficulty: 2
      }
    }
  ]
};

// 2. DAILY ROTATION ALGORITHM
function getDailyData() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Modulo indexes to rotate through database arrays
  const quoteIdx = dayOfYear % dailyDatabase.quotes.length;
  const promptIdx = dayOfYear % dailyDatabase.prompts.length;
  const summaryIdx = dayOfYear % dailyDatabase.summaries.length;
  const macroIdx = dayOfYear % dailyDatabase.macros.length;

  return {
    quote: dailyDatabase.quotes[quoteIdx],
    prompts: dailyDatabase.prompts[promptIdx],
    summaries: dailyDatabase.summaries[summaryIdx],
    macros: dailyDatabase.macros[macroIdx]
  };
}

// 3. SYNTHETIC SOUND ENGINE (Web Audio API)
class AudioSynth {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('sound_muted') === 'true';
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('sound_muted', this.muted);
    this.playTone(600, 0.05, 'sine'); // feedback beep
    return this.muted;
  }

  playTone(frequency, duration, type = 'sine', volume = 0.1) {
    if (this.muted) return;
    this.init();
    
    // Resume context if suspended (browser security)
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    try {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      
      gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio Context blocked or failed to trigger:", e);
    }
  }

  playClick() {
    this.playTone(900, 0.04, 'sine', 0.08);
  }

  playHover() {
    this.playTone(1500, 0.015, 'triangle', 0.03);
  }

  playBeep() {
    this.playTone(523.25, 0.15, 'sine', 0.05); // High C note
  }

  playThemeChange() {
    if (this.muted) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.35);
      
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.4);
    } catch (e) {}
  }
}

const synth = new AudioSynth();

// 4. COMMAND PALETTE (Ctrl+K Launcher)
class CommandPalette {
  constructor() {
    this.overlay = null;
    this.palette = null;
    this.input = null;
    this.results = null;
    this.isOpen = false;
    this.commands = [
      { id: 'go-home', label: 'Go to Home (Dashboard)', icon: 'fa-home', action: () => window.location.href = './index.html' },
      { id: 'go-hub', label: 'Go to AI & Automation Hub', icon: 'fa-robot', action: () => window.location.href = './automation-hub.html' },
      { id: 'go-playground', label: 'Go to AI Playground', icon: 'fa-gamepad', action: () => window.location.href = './ai-playground.html' },
      { id: 'go-portfolio', label: 'Go to Portfolio (My Info)', icon: 'fa-user', action: () => window.location.href = './portfolio.html' },
      { id: 'toggle-term', label: 'Toggle Hacker Terminal', icon: 'fa-terminal', action: () => toggleTerminal() },
      { id: 'theme-mid', label: 'Theme: Midnight Cyan', icon: 'fa-palette', action: () => globalSetTheme('midnight') },
      { id: 'theme-cyb', label: 'Theme: Cyberpunk Pink', icon: 'fa-palette', action: () => globalSetTheme('cyberpunk') },
      { id: 'theme-eme', label: 'Theme: Neon Emerald', icon: 'fa-palette', action: () => globalSetTheme('emerald') },
      { id: 'theme-sun', label: 'Theme: Sunset Rose', icon: 'fa-palette', action: () => globalSetTheme('sunset') },
      { id: 'theme-spa', label: 'Theme: Aura Blue', icon: 'fa-palette', action: () => globalSetTheme('space') },
      { id: 'theme-obs', label: 'Theme: Obsidian Gold', icon: 'fa-palette', action: () => globalSetTheme('obsidian') },
      { id: 'toggle-mute', label: 'Mute/Unmute Sounds', icon: 'fa-volume-high', action: () => toggleGlobalMute() }
    ];
    this.selectedIndex = 0;
  }

  buildUI() {
    if (document.getElementById('palette-overlay')) return;

    // Create Elements
    this.overlay = document.createElement('div');
    this.overlay.id = 'palette-overlay';
    this.overlay.className = 'palette-overlay';

    this.palette = document.createElement('div');
    this.palette.className = 'command-palette';

    this.palette.innerHTML = `
      <div class="palette-input-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="palette-search" class="palette-input" placeholder="Type a command or page name..." autocomplete="off">
      </div>
      <div id="palette-results" class="palette-results"></div>
    `;

    this.overlay.appendChild(this.palette);
    document.body.appendChild(this.overlay);

    this.input = document.getElementById('palette-search');
    this.results = document.getElementById('palette-results');

    // Bind event listeners
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    this.input.addEventListener('input', () => this.filterCommands());
    this.input.addEventListener('keydown', (e) => this.handleKeys(e));
  }

  open() {
    this.buildUI();
    synth.playBeep();
    this.isOpen = true;
    this.overlay.classList.add('open');
    this.input.value = '';
    this.selectedIndex = 0;
    this.filterCommands();
    setTimeout(() => this.input.focus(), 50);
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay.classList.remove('open');
    this.input.blur();
    synth.playClick();
  }

  filterCommands() {
    const query = this.input.value.toLowerCase().trim();
    const filtered = this.commands.filter(cmd => 
      cmd.label.toLowerCase().includes(query)
    );

    this.results.innerHTML = '';
    if (filtered.length === 0) {
      this.results.innerHTML = `<div class="palette-item" style="cursor:default;color:rgba(255,255,255,0.4)">No commands found.</div>`;
      return;
    }

    filtered.forEach((cmd, idx) => {
      const row = document.createElement('div');
      row.className = `palette-item ${idx === this.selectedIndex ? 'selected' : ''}`;
      row.innerHTML = `
        <div class="palette-item-content">
          <i class="fa-solid ${cmd.icon} palette-item-icon"></i>
          <span class="palette-item-label">${cmd.label}</span>
        </div>
        <span class="palette-item-shortcut">Enter</span>
      `;
      row.addEventListener('mouseenter', () => {
        this.selectedIndex = idx;
        this.updateSelection();
        synth.playHover();
      });
      row.addEventListener('click', () => {
        cmd.action();
        this.close();
      });
      this.results.appendChild(row);
    });
  }

  updateSelection() {
    const items = this.results.querySelectorAll('.palette-item');
    items.forEach((item, idx) => {
      if (idx === this.selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  handleKeys(e) {
    const items = this.results.querySelectorAll('.palette-item');
    if (e.key === 'Escape') {
      this.close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.selectedIndex = (this.selectedIndex + 1) % items.length;
      this.updateSelection();
      synth.playHover();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.selectedIndex = (this.selectedIndex - 1 + items.length) % items.length;
      this.updateSelection();
      synth.playHover();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selectedItem = items[this.selectedIndex];
      if (selectedItem) selectedItem.click();
    }
  }
}

const palette = new CommandPalette();

// --- Interactive Mini-Games for Hacker Terminal ---

class MemoryGame {
  constructor(terminal) {
    this.terminal = terminal;
    this.sequence = [];
    this.round = 0;
    this.timerId = null;
  }

  start() {
    this.terminal.write("=== MEMORY SEQUENCE GAME ===", 'sys-welcome');
    this.terminal.write("A sequence of numbers will flash. Memorize them!", 'sys-welcome');
    this.terminal.write("Type 'help' for rules, or 'exit'/'back' to quit.", 'sys-welcome');
    this.timerId = setTimeout(() => this.nextRound(), 1500);
  }

  cleanup() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  showHelp() {
    this.terminal.write("--- MEMORY GAME HELP ---");
    this.terminal.write("Goal: Memorize the flashing digit sequence.");
    this.terminal.write("Rules:\n" +
                        "  1. A sequence of numbers will appear for 1.5 seconds, then the screen will clear.\n" +
                        "  2. Type the numbers in the exact order (no spaces) and press Enter.\n" +
                        "  3. Correct inputs prepare the next longer round. Incorrect inputs end the game.");
    this.terminal.write("Controls:\n" +
                        "  - Type 'exit', 'quit', 'back', or 'menu' to return to the console prompt.");
  }

  nextRound() {
    if (this.terminal.activeGame !== this) return; // if exited
    this.round++;
    this.sequence.push(Math.floor(Math.random() * 10));
    
    const logs = document.getElementById('terminal-logs');
    logs.innerHTML = '';
    
    this.terminal.write(`=== ROUND ${this.round} ===`, 'sys-welcome');
    this.terminal.write(`Memorize: ${this.sequence.join(' ')}`);
    synth.playBeep();

    const displayTime = 1500 + (this.sequence.length * 350);
    this.timerId = setTimeout(() => {
      if (this.terminal.activeGame !== this) return; // if exited
      logs.innerHTML = '';
      this.terminal.write(`=== ROUND ${this.round} ===`, 'sys-welcome');
      this.terminal.write("Enter the number sequence (no spaces):");
    }, displayTime);
  }

  processInput(cmd) {
    const guess = cmd.replace(/\s+/g, '');
    const target = this.sequence.join('');

    if (guess === target) {
      this.terminal.write("✓ Correct! Preparing next round...", 'success-msg');
      synth.playTone(800, 0.1, 'sine', 0.1);
      this.timerId = setTimeout(() => this.nextRound(), 1000);
    } else {
      this.terminal.write("✗ Incorrect! Game Over.", 'fail-msg');
      this.terminal.write(`Correct sequence was: ${this.sequence.join(' ')}`);
      this.terminal.write(`Final Score: ${this.round - 1}`);
      synth.playTone(150, 0.35, 'sawtooth', 0.1);
      this.terminal.setActiveGame(null);
    }
  }
}

class MathQuiz {
  constructor(terminal) {
    this.terminal = terminal;
    this.correctCount = 0;
    this.totalCount = 0;
    this.startTime = 0;
    this.totalTime = 0;
    this.currentAnswer = 0;
  }

  start() {
    this.terminal.write("=== MENTAL MATH SPEED QUIZ ===", 'sys-welcome');
    this.terminal.write("Type the correct answer and press Enter.", 'sys-welcome');
    this.terminal.write("Type 'help' for rules, or 'exit'/'back' to quit.", 'sys-welcome');
    this.nextQuestion();
  }

  cleanup() {
    this.terminal.write("=== QUIZ STATS ===", 'sys-welcome');
    this.terminal.write(`Total Questions: ${this.totalCount}`);
    this.terminal.write(`Correct: ${this.correctCount}`);
    if (this.correctCount > 0) {
      this.terminal.write(`Average Time: ${(this.totalTime / this.correctCount / 1000).toFixed(2)}s`);
    }
  }

  showHelp() {
    this.terminal.write("--- MATH QUIZ HELP ---");
    this.terminal.write("Goal: Solve as many arithmetic equations as possible as fast as you can.");
    this.terminal.write("Rules:\n" +
                        "  - Enter the integer answer to the equation and press Enter.\n" +
                        "  - Correct answers are logged with the response time. Incorrect answers show the solution.\n" +
                        "  - Game runs infinitely until you exit, displaying stats upon completion.");
    this.terminal.write("Controls:\n" +
                        "  - Type 'exit', 'quit', 'back', or 'menu' to stop playing and view your score stats.");
  }

  nextQuestion() {
    const ops = ['+', '-', '*'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let n1, n2;

    if (op === '+') {
      n1 = Math.floor(Math.random() * 90) + 10;
      n2 = Math.floor(Math.random() * 90) + 10;
      this.currentAnswer = n1 + n2;
    } else if (op === '-') {
      n1 = Math.floor(Math.random() * 90) + 10;
      n2 = Math.floor(Math.random() * (n1 - 9)) + 10;
      this.currentAnswer = n1 - n2;
    } else {
      n1 = Math.floor(Math.random() * 11) + 2;
      n2 = Math.floor(Math.random() * 11) + 2;
      this.currentAnswer = n1 * n2;
    }

    this.terminal.write(`Solve: ${n1} ${op} ${n2} = ?`);
    this.startTime = Date.now();
  }

  processInput(cmd) {
    const guess = parseInt(cmd, 10);
    this.totalCount++;

    if (guess === this.currentAnswer) {
      const elapsed = Date.now() - this.startTime;
      this.correctCount++;
      this.totalTime += elapsed;
      this.terminal.write(`✓ Correct! (Time: ${(elapsed/1000).toFixed(2)}s)`, 'success-msg');
      synth.playTone(900, 0.08, 'sine', 0.08);
      this.nextQuestion();
    } else {
      this.terminal.write(`✗ Incorrect! Correct answer was: ${this.currentAnswer}`, 'fail-msg');
      synth.playTone(200, 0.15, 'triangle', 0.1);
      this.nextQuestion();
    }
  }
}

class WhackAMole {
  constructor(terminal) {
    this.terminal = terminal;
    this.score = 0;
    this.molePosition = 0;
    this.timerId = null;
    this.speed = 3500; // Slower starting speed (3.5s) for better playability
  }

  start() {
    this.terminal.write("=== WHACK-A-MOLE TERMINAL ===", 'sys-welcome');
    this.terminal.write("A mole [M] will pop up in a grid. Type its number (1-9) & Enter!", 'sys-welcome');
    this.terminal.write("Type 'help' for rules, or 'exit'/'back' to quit.", 'sys-welcome');
    this.nextMole();
  }

  cleanup() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  showHelp() {
    this.terminal.write("--- WHACK-A-MOLE HELP ---");
    this.terminal.write("Goal: Hit the mole [M] in the 3x3 grid before the timer expires.");
    this.terminal.write("Rules:\n" +
                        "  - Look at the grid cells (numbered 1-9) and locate '[M]'.\n" +
                        "  - Type the corresponding number key (1-9) and press Enter to whack it.\n" +
                        "  - If you hit correctly, your score increases. Speed decreases by 150ms per level (minimum 1200ms).\n" +
                        "  - A wrong number or timer expiry ends the game.");
    this.terminal.write("Controls:\n" +
                        "  - Type 'exit', 'quit', 'back', or 'menu' to quit.");
  }

  nextMole() {
    if (this.timerId) clearTimeout(this.timerId);
    if (this.terminal.activeGame !== this) return; // if exited
    
    this.molePosition = Math.floor(Math.random() * 9) + 1;
    
    this.terminal.write("Grid:");
    for (let r = 0; r < 3; r++) {
      let row = '';
      for (let c = 1; c <= 3; c++) {
        let idx = r * 3 + c;
        if (idx === this.molePosition) {
          row += '[M] ';
        } else {
          row += `[${idx}] `;
        }
      }
      this.terminal.write(row.trim());
    }

    this.timerId = setTimeout(() => {
      this.terminal.write("✗ Too slow! Timer expired.", 'fail-msg');
      this.terminal.write(`Final Score: ${this.score}`);
      synth.playTone(180, 0.3, 'sawtooth', 0.08);
      this.terminal.setActiveGame(null);
    }, this.speed);
  }

  processInput(cmd) {
    if (this.timerId) clearTimeout(this.timerId);

    const guess = parseInt(cmd, 10);
    if (guess === this.molePosition) {
      this.score++;
      this.terminal.write(`✓ HIT! (+1) Speeding up...`, 'success-msg');
      synth.playTone(1000, 0.05, 'sine', 0.06);
      this.speed = Math.max(1200, this.speed - 150); // Minimum 1.2s
      this.nextMole();
    } else {
      this.terminal.write(`✗ MISS! You whacked cell ${guess || 'nothing'}. Mole was at ${this.molePosition}`, 'fail-msg');
      this.terminal.write(`Final Score: ${this.score}`);
      synth.playTone(180, 0.3, 'sawtooth', 0.08);
      this.terminal.setActiveGame(null);
    }
  }
}

class HangmanGame {
  constructor(terminal) {
    this.terminal = terminal;
    this.categories = {
      animal: [
        { w: "ELEPHANT", c: "Largest land mammal with a long trunk" },
        { w: "KANGAROO", c: "Pouched mammal native to Australia that leaps" },
        { w: "DOLPHIN", c: "Highly intelligent aquatic mammal known for playfulness" },
        { w: "TIGER", c: "Striped big cat hunter with orange and black fur" },
        { w: "GIRAFFE", c: "Tallest land animal with a very long neck" },
        { w: "PENGUIN", c: "Flightless bird dressed in a natural tuxedo" }
      ],
      computer: [
        { w: "KEYBOARD", c: "Input device with letter and number keys" },
        { w: "PROCESSOR", c: "The brain of the computer (CPU)" },
        { w: "DATABASE", c: "Structured set of data held in a computer" },
        { w: "INTERNET", c: "Global computer network linking billions of devices" },
        { w: "MONITOR", c: "Output screen device displaying visual feedback" },
        { w: "SOFTWARE", c: "Programs and operating information used by computers" }
      ],
      country: [
        { w: "INDIA", c: "Land of diversity, tigers, and rich spice culture" },
        { w: "AUSTRALIA", c: "Island continent and country in the Southern Hemisphere" },
        { w: "CANADA", c: "Second largest country in the world, maple leaf flag" },
        { w: "JAPAN", c: "Island nation in East Asia known as the Land of the Rising Sun" },
        { w: "FRANCE", c: "European country famous for the Eiffel Tower and art" },
        { w: "BRAZIL", c: "Largest South American country, famous for carnival" }
      ],
      flowers: [
        { w: "SUNFLOWER", c: "Tall yellow flower that turns toward the sun" },
        { w: "ROSE", c: "Classic romantic red flower with thorny stems" },
        { w: "ORCHID", c: "Exotic, delicate flower with complex colorful petals" },
        { w: "LAVENDER", c: "Fragrant purple flower used for calming scents" },
        { w: "TULIP", c: "Cup-shaped spring flower famous in Holland" },
        { w: "JASMINE", c: "Sweetly scented white flower often used in tea" }
      ],
      space: [
        { w: "ASTRONAUT", c: "Person trained to travel and work in a spacecraft" },
        { w: "GALAXY", c: "Gravitationally bound system of stars, gas, and dust" },
        { w: "GRAVITY", c: "Invisible force that pulls objects toward each other" },
        { w: "PLANET", c: "Large spherical body orbiting a star like our Sun" },
        { w: "METEOR", c: "Streak of light caused by a space rock burning in the atmosphere" },
        { w: "TELESCOPE", c: "Optical instrument used to view distant stars and planets" }
      ]
    };
    this.stages = [
      `  +---+\n  |   |\n      |\n      |\n      |\n      |\n========`,
      `  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n========`,
      `  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n========`,
      `  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n========`,
      `  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n========`,
      `  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n========`,
      `  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========`
    ];
    this.word = "";
    this.clue = "";
    this.guessed = new Set();
    this.wrong = 0;
    this.maxWrong = 6;
    this.state = 'choose_category';
  }

  start() {
    this.state = 'choose_category';
    this.terminal.write("=== HANGMAN VOCAB TESTER ===", 'sys-welcome');
    this.terminal.write("Type 'help' for rules, or 'exit'/'back' to quit.", 'sys-welcome');
    this.terminal.write("\nChoose a subject category:\n" +
                        "  [1] Animal\n" +
                        "  [2] Computer\n" +
                        "  [3] Country\n" +
                        "  [4] Flowers\n" +
                        "  [5] Space");
    this.terminal.write("Enter choice (1-5):");
  }

  cleanup() {
    // No timers to clean up
  }

  showHelp() {
    this.terminal.write("--- HANGMAN HELP ---");
    this.terminal.write("Goal: Guess the secret vocabulary word from your chosen category.");
    this.terminal.write("Rules:\n" +
                        "  1. Choose a category from 1 to 5 to start the game.\n" +
                        "  2. The game will reveal starting letters (already filled) to help you.\n" +
                        "  3. Guess letters one by one, or guess the full word if you know it.\n" +
                        "  4. You have 6 incorrect guesses allowed before the game ends.");
    this.terminal.write("Controls:\n" +
                        "  - Type 'exit', 'quit', 'back', or 'menu' to return to console prompt.");
  }

  setupWord(categoryKey) {
    const list = this.categories[categoryKey];
    const chosen = list[Math.floor(Math.random() * list.length)];
    this.word = chosen.w;
    this.clue = chosen.c;
    this.guessed.clear();
    this.wrong = 0;
    this.state = 'playing';

    // Reveal starting letters: first letter and any occurrences
    const firstChar = this.word[0];
    this.guessed.add(firstChar);

    // If word is longer than 5 letters, reveal last character
    if (this.word.length > 5) {
      const lastChar = this.word[this.word.length - 1];
      this.guessed.add(lastChar);
    }
    
    // If word is longer than 8 letters, reveal a middle character too
    if (this.word.length > 8) {
      const midChar = this.word[Math.floor(this.word.length / 2)];
      this.guessed.add(midChar);
    }

    this.terminal.write(`\nCategory selected: ${categoryKey.toUpperCase()}`);
    this.terminal.write(`Clue: ${this.clue}`);
    this.terminal.setPrompt("[Hangman] Guess: ");
    this.displayState();
  }

  displayState() {
    this.stages[this.wrong].split('\n').forEach(line => this.terminal.write(line));

    let blanks = '';
    for (let char of this.word) {
      if (this.guessed.has(char)) {
        blanks += `${char} `;
      } else {
        blanks += '_ ';
      }
    }
    this.terminal.write(`Word: ${blanks.trim()}`);

    const incorrect = Array.from(this.guessed).filter(l => !this.word.includes(l));
    if (incorrect.length > 0) {
      this.terminal.write(`Incorrect Guesses: ${incorrect.join(', ')}`);
    }

    this.terminal.write("Enter guess (letter or full word):");
  }

  processInput(cmd) {
    const input = cmd.trim();
    if (this.state === 'choose_category') {
      const idx = parseInt(input, 10);
      let catKey = "";
      if (idx === 1) catKey = "animal";
      else if (idx === 2) catKey = "computer";
      else if (idx === 3) catKey = "country";
      else if (idx === 4) catKey = "flowers";
      else if (idx === 5) catKey = "space";
      else {
        this.terminal.write("Invalid choice! Choose a number between 1 and 5.");
        this.start();
        return;
      }
      this.setupWord(catKey);
      return;
    }

    const guess = input.toUpperCase();
    if (guess.length === 0) return;

    if (guess.length > 1) {
      if (guess === this.word) {
        this.terminal.write(`🎉 CORRECT! Word: ${this.word}`, 'success-msg');
        synth.playTone(880, 0.2, 'sine', 0.1);
        this.terminal.setActiveGame(null);
      } else {
        this.wrong++;
        this.terminal.write("✗ Incorrect full word!", 'fail-msg');
        synth.playTone(220, 0.2, 'triangle', 0.1);
        if (this.wrong >= this.maxWrong) {
          this.stages[this.wrong].split('\n').forEach(line => this.terminal.write(line));
          this.terminal.write(`💀 GAME OVER! Word was: ${this.word}`, 'fail-msg');
          this.terminal.setActiveGame(null);
        } else {
          this.displayState();
        }
      }
    } else {
      if (this.guessed.has(guess)) {
        this.terminal.write(`You already guessed '${guess}'!`);
        this.displayState();
        return;
      }

      this.guessed.add(guess);
      if (this.word.includes(guess)) {
        this.terminal.write("✓ Correct letter!");
        synth.playTone(950, 0.05, 'sine', 0.08);
        
        let won = true;
        for (let char of this.word) {
          if (!this.guessed.has(char)) won = false;
        }
        
        if (won) {
          this.terminal.write(`🎉 CORRECT! Word: ${this.word}`, 'success-msg');
          synth.playTone(880, 0.2, 'sine', 0.1);
          this.terminal.setActiveGame(null);
        } else {
          this.displayState();
        }
      } else {
        this.wrong++;
        this.terminal.write("✗ Incorrect letter!", 'fail-msg');
        synth.playTone(220, 0.2, 'triangle', 0.1);
        
        if (this.wrong >= this.maxWrong) {
          this.stages[this.wrong].split('\n').forEach(line => this.terminal.write(line));
          this.terminal.write(`💀 GAME OVER! Word was: ${this.word}`, 'fail-msg');
          this.terminal.setActiveGame(null);
        } else {
          this.displayState();
        }
      }
    }
  }
}

class RakshitLettersConsoleMenu {
  constructor(terminal) {
    this.terminal = terminal;
    this.reading = false;
  }

  start() {
    this.showMenu();
  }

  cleanup() {
    this.reading = false;
  }

  showHelp() {
    this.terminal.write("--- PAPA'S LETTERS MENU HELP ---");
    this.terminal.write("Select a number from 1 to 9 to display the heartfelt letter from Papa to Rakshit.");
    this.terminal.write("  1-7: Month 5 to 11 letters");
    this.terminal.write("  8: 1st Birthday letter Milestone 🎂");
    this.terminal.write("  9: Generate a new unique dynamic letter from Papa");
    this.terminal.write("Type 'exit' or 'back' to exit this menu and return to terminal.");
  }

  showMenu() {
    this.terminal.write("=== LETTERS FROM PAPA TO RAKSHIT ===", 'sys-welcome');
    this.terminal.write("Select a letter from the archive to print:\n" +
                        "  [1] 5th Month - Lullabies & Tiny Voices\n" +
                        "  [2] 6th Month - Rolling Over & Flowering Smiles\n" +
                        "  [3] 7th Month - Finger Holds & Soft Laughter\n" +
                        "  [4] 8th Month - Footsteps & Greatest Blessing (Completed Today!)\n" +
                        "  [5] 9th Month - First Words & Future Promise\n" +
                        "  [6] 10th Month - Crawling & Shirt Tugs\n" +
                        "  [7] 11th Month - The Emotional Milestone\n" +
                        "  [8] 1st Birthday Celebration Milestone 🎂\n" +
                        "  [9] Generate a Unique Dynamic Note\n" +
                        "  [exit] Return to Console Command Prompt");
    this.terminal.write("Enter choice (1-9):");
  }

  processInput(cmd) {
    if (this.reading) {
      this.reading = false;
      this.showMenu();
      return;
    }

    const choice = cmd.trim();
    if (choice.toLowerCase() === 'exit' || choice.toLowerCase() === 'quit' || choice.toLowerCase() === 'back') {
      this.terminal.write("Exited Letters Menu.");
      this.terminal.setActiveGame(null);
      return;
    }

    const idx = parseInt(choice, 10);
    if (idx >= 1 && idx <= 8) {
      const letter = rakshitLetters[idx - 1];
      this.terminal.write(`\n=== ${letter.title.toUpperCase()} ===\n`, 'sys-welcome');
      letter.text.split('\n').forEach(line => {
        this.terminal.write(line);
      });
      this.terminal.write("\n-------------------------------------------");
      this.terminal.write("Press Enter to show menu again, or type 'exit' to quit.");
      this.reading = true;
    } else if (idx === 9) {
      const note = generateUniqueLetter();
      this.terminal.write("\n=== DYNAMIC NOTE FROM PAPA'S HEART ===\n", 'sys-welcome');
      note.split('\n').forEach(line => {
        this.terminal.write(line);
      });
      this.terminal.write("\n-------------------------------------------");
      this.terminal.write("Press Enter to show menu again, or type 'exit' to quit.");
      this.reading = true;
    } else {
      this.terminal.write("Invalid selection! Please enter a number between 1 and 9.");
      this.showMenu();
    }
  }
}

// 5. HACKER TERMINAL MODULE
class HackerTerminal {
  constructor() {
    this.overlay = null;
    this.body = null;
    this.input = null;
    this.isOpen = false;
    this.history = [];
    this.historyIndex = -1;
    this.activeGame = null;
  }

  buildUI() {
    if (document.getElementById('terminal-overlay')) return;

    this.overlay = document.createElement('div');
    this.overlay.id = 'terminal-overlay';
    this.overlay.className = 'terminal-overlay';
    this.overlay.innerHTML = `
      <div class="terminal-header">
        <div class="terminal-title-container">
          <div class="terminal-dots">
            <span class="terminal-dot red"></span>
            <span class="terminal-dot yellow"></span>
            <span class="terminal-dot green"></span>
          </div>
          <span class="terminal-title">Ritesh_System: ~/terminal</span>
        </div>
        <button class="terminal-close-btn" onclick="toggleTerminal()">&times;</button>
      </div>
      <div id="terminal-body" class="terminal-body">
        <div class="terminal-welcome">
          === RITESH INTERACTIVE HACKER TERMINAL ===
          Type 'help' to print list of available command directives.
          Press Esc to close.
        </div>
        <div id="terminal-logs"></div>
        <div class="terminal-input-row">
          <span class="terminal-prompt">ritesh@client:~$</span>
          <input type="text" id="terminal-cmd-input" class="terminal-input" autocomplete="off" autofocus>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    this.body = document.getElementById('terminal-body');
    this.input = document.getElementById('terminal-cmd-input');

    this.input.addEventListener('keydown', (e) => this.handleKeys(e));
    this.overlay.addEventListener('click', () => this.input.focus());
  }

  open() {
    this.buildUI();
    this.isOpen = true;
    this.overlay.classList.add('open');
    synth.playBeep();
    setTimeout(() => this.input.focus(), 100);
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlay.classList.remove('open');
    synth.playClick();
  }

  write(text, type = '') {
    const logs = document.getElementById('terminal-logs');
    const row = document.createElement('div');
    row.className = `terminal-log-row ${type}`;
    row.textContent = text;
    logs.appendChild(row);
    this.body.scrollTop = this.body.scrollHeight;
  }

  setPrompt(text) {
    const prompt = this.overlay ? this.overlay.querySelector('.terminal-prompt') : null;
    if (prompt) {
      prompt.textContent = text;
      // Change color/style based on active game
      if (text.includes('ritesh@client')) {
        prompt.style.color = '#27c93f'; // default green
      } else {
        prompt.style.color = 'var(--theme-accent)'; // theme matching color
      }
    }
  }

  setActiveGame(game) {
    this.activeGame = game;
    if (game) {
      if (game instanceof MemoryGame) this.setPrompt("[Memory] Sequence: ");
      else if (game instanceof MathQuiz) this.setPrompt("[MathQuiz] Answer: ");
      else if (game instanceof WhackAMole) this.setPrompt("[WhackAMole] (1-9): ");
      else if (game instanceof HangmanGame) this.setPrompt("[Hangman] Guess: ");
      else if (game instanceof RakshitLettersConsoleMenu) this.setPrompt("[Letters] Option (1-9): ");
    } else {
      this.setPrompt("ritesh@client:~$");
    }
  }

  handleKeys(e) {
    if (e.key === 'Escape') {
      toggleTerminal();
    } else if (e.key === 'Enter') {
      const cmd = this.input.value.trim();
      this.input.value = '';
      if (cmd) {
        if (this.activeGame) {
          const lowerCmd = cmd.toLowerCase().trim();
          if (['exit', 'quit', 'back', 'menu'].includes(lowerCmd)) {
            this.write(`ritesh@client:~$ ${cmd}`, 'user-cmd');
            this.write(`[SYSTEM] Exiting ${this.activeGame.constructor.name}. Returning to main console prompt.`, 'sys-welcome');
            if (typeof this.activeGame.cleanup === 'function') {
              this.activeGame.cleanup();
            }
            this.setActiveGame(null);
            return;
          }
          if (lowerCmd === 'help') {
            this.write(`ritesh@client:~$ ${cmd}`, 'user-cmd');
            if (typeof this.activeGame.showHelp === 'function') {
              this.activeGame.showHelp();
            } else {
              this.write("No specific help available for this game.");
            }
            return;
          }
          this.activeGame.processInput(cmd);
        } else {
          this.history.push(cmd);
          this.historyIndex = this.history.length;
          this.executeCommand(cmd);
        }
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!this.activeGame && this.historyIndex > 0) {
        this.historyIndex--;
        this.input.value = this.history[this.historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!this.activeGame && this.historyIndex < this.history.length - 1) {
        this.historyIndex++;
        this.input.value = this.history[this.historyIndex];
      } else if (!this.activeGame) {
        this.historyIndex = this.history.length;
        this.input.value = '';
      }
    } else {
      synth.playTone(300 + Math.random() * 200, 0.012, 'sawtooth', 0.015);
    }
  }

  executeCommand(cmd) {
    this.write(`ritesh@client:~$ ${cmd}`, 'user-cmd');
    const tokens = cmd.toLowerCase().split(' ');
    const baseCmd = tokens[0];
    const arg = tokens[1];

    switch (baseCmd) {
      case 'help':
        this.write("Available Commands:\n" +
                   "  help             Show this help screen\n" +
                   "  about            Print Ritesh's background bio\n" +
                   "  projects         List highlighted code applications\n" +
                   "  theme [name]     Switch page theme (midnight, cyberpunk, emerald, sunset, space, obsidian)\n" +
                   "  nav [page]       Navigate to: home, portfolio, hub\n" +
                   "  clear            Clear terminal screen\n" +
                   "  history          Show terminal command history list\n" +
                   "  rakshit          Open menu of letters from Papa to Rakshit (including birthday message)\n" +
                   "  memory           Start interactive pattern memory game\n" +
                   "  brain            Start mental speed math trainer\n" +
                   "  mole             Start text reaction whack-a-mole game\n" +
                   "  hangman          Start AI/tech vocab guesser game\n" +
                   "  hack             Run simulation script\n" +
                   "  exit             Close the terminal console");
        break;
      case 'about':
        this.write("Ritesh Pandey - AI & Tech Automation Consultant.\n" +
                   "Dedicated to optimizing workflows, developing AI agents, constructing Model Context Protocol integrations, and designing Android Tasker macros.");
        break;
      case 'projects':
        this.write("1. NEW JARVIS - Local agent server scheduler.\n" +
                   "2. Superhuman Daily - Desktop dashboard task planner.\n" +
                   "3. Ritesh Website - Current glassmorphic custom site.");
        break;
      case 'theme':
        if (!arg) {
          this.write("Please specify a theme name. Example: theme cyberpunk");
        } else if (['midnight', 'cyberpunk', 'emerald', 'sunset', 'space', 'obsidian'].includes(arg)) {
          globalSetTheme(arg);
          this.write(`Applying theme: ${arg}`);
        } else {
          this.write("Unknown theme name. Choose from: midnight, cyberpunk, emerald, sunset, space, obsidian");
        }
        break;
      case 'nav':
        if (arg === 'home' || arg === 'index') {
          this.write("Navigating to Home...");
          setTimeout(() => window.location.href = './index.html', 500);
        } else if (arg === 'portfolio' || arg === 'about') {
          this.write("Navigating to Portfolio...");
          setTimeout(() => window.location.href = './portfolio.html', 500);
        } else if (arg === 'hub' || arg === 'learning') {
          this.write("Navigating to AI & Automation Hub...");
          setTimeout(() => window.location.href = './automation-hub.html', 500);
        } else {
          this.write("Unknown navigation target. Use: home, portfolio, hub");
        }
        break;
      case 'clear':
        document.getElementById('terminal-logs').innerHTML = '';
        break;
      case 'history':
        if (this.history.length === 0) {
          this.write("No command history recorded.");
        } else {
          this.write("Command History:");
          this.history.forEach((h, idx) => {
            this.write(`  ${idx + 1}. ${h}`);
          });
        }
        break;
      case 'memory':
        this.setActiveGame(new MemoryGame(this));
        this.activeGame.start();
        break;
      case 'brain':
        this.setActiveGame(new MathQuiz(this));
        this.activeGame.start();
        break;
      case 'mole':
        this.setActiveGame(new WhackAMole(this));
        this.activeGame.start();
        break;
      case 'hangman':
        this.setActiveGame(new HangmanGame(this));
        this.activeGame.start();
        break;
      case 'rakshit':
      case 'birthday':
        this.setActiveGame(new RakshitLettersConsoleMenu(this));
        this.activeGame.start();
        break;
      case 'hack':
        this.write("Starting decrypter sequence...");
        let lines = [
          "[CONNECTING] Localhost:8080...",
          "[INTRUSION] Bypassing mainframe database hooks...",
          "[SUCCESS] Accessing Ritesh JARVIS agent configurations...",
          "[COMPLETED] SYSTEM ACCESS SECURED. Welcome, User."
        ];
        lines.forEach((line, idx) => {
          setTimeout(() => {
            this.write(line);
            synth.playTone(200 * (idx + 1), 0.1, 'sine', 0.05);
          }, (idx + 1) * 350);
        });
        break;
      case 'exit':
        toggleTerminal();
        break;
      default:
        this.write(`Command not found: '${baseCmd}'. Type 'help' for options.`);
    }
  }
}

const terminal = new HackerTerminal();

// Expose toggle functions globally
window.toggleTerminal = function() {
  if (terminal.isOpen) {
    terminal.close();
  } else {
    terminal.open();
  }
};

// 6. AUDIO & NAVIGATION EVENTS AND HANDLERS
window.toggleGlobalMute = function() {
  const isMuted = synth.toggleMute();
  const audioIcons = document.querySelectorAll('.floating-audio-btn i');
  audioIcons.forEach(icon => {
    if (isMuted) {
      icon.className = 'fa-solid fa-volume-xmark';
    } else {
      icon.className = 'fa-solid fa-volume-high';
    }
  });
};

// Global Theme Handler
window.globalSetTheme = function(themeName) {
  document.body.setAttribute('data-theme', themeName);
  localStorage.setItem('theme', themeName);
  synth.playThemeChange();

  // Sync theme active selector borders if on dashboard homepage
  const themeButtons = document.querySelectorAll('.theme-btn');
  themeButtons.forEach(btn => {
    if (btn.getAttribute('data-theme') === themeName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

// Dynamic Clipboard Copies
window.copyPromptToClipboard = function(elementId, btn) {
  const codeBox = document.getElementById(elementId);
  const text = codeBox.textContent || codeBox.value;
  navigator.clipboard.writeText(text).then(() => {
    synth.playBeep();
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied`;
    btn.classList.add('copy-active');
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('copy-active');
    }, 2000);
  });
};

// Init triggers
document.addEventListener('keydown', (e) => {
  // Ctrl + K triggers Palette
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (palette.isOpen) {
      palette.close();
    } else {
      palette.open();
    }
  }
  // Esc closes overlays
  if (e.key === 'Escape') {
    palette.close();
    terminal.close();
  }
});

// Create and insert floating navigation dock at the bottom of the body
function insertFloatingNavigation() {
  const currentPath = window.location.pathname;
  const isIndex = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
  
  if (isIndex) return; // Do not show floating bottom nav on homepage
  if (document.querySelector('.floating-nav')) return;

  const isPortfolio = currentPath.includes('portfolio.html');
  const isHub = currentPath.includes('automation-hub.html');
  const isPlayground = currentPath.includes('ai-playground.html');

  const nav = document.createElement('div');
  nav.className = 'floating-nav';

  const soundIcon = synth.muted ? 'fa-volume-xmark' : 'fa-volume-high';

  nav.innerHTML = `
    <a href="./index.html" class="floating-nav-item ${isIndex ? 'active' : ''}">
      <i class="fa-solid fa-home"></i> <span>Home</span>
    </a>
    <a href="./automation-hub.html" class="floating-nav-item ${isHub ? 'active' : ''}">
      <i class="fa-solid fa-robot"></i> <span>Automation Hub</span>
    </a>
    <a href="./ai-playground.html" class="floating-nav-item ${isPlayground ? 'active' : ''}">
      <i class="fa-solid fa-gamepad"></i> <span>Playground</span>
    </a>
    <a href="./portfolio.html" class="floating-nav-item ${isPortfolio ? 'active' : ''}">
      <i class="fa-solid fa-user"></i> <span>My Info</span>
    </a>
    <div class="floating-nav-divider"></div>
    <button class="floating-nav-item" onclick="toggleTerminal()" title="Toggle Terminal">
      <i class="fa-solid fa-terminal"></i>
    </button>
    <button class="floating-nav-item" onclick="window.dispatchEvent(new Event('palette-trigger'))" title="Open Command Palette (Ctrl+K)">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
    <button class="floating-audio-btn" onclick="toggleGlobalMute()" title="Mute/Unmute Sounds">
      <i class="fa-solid ${soundIcon}"></i>
    </button>
  `;

  // Attach hover sounds to navigation items
  nav.querySelectorAll('.floating-nav-item, .floating-audio-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => synth.playHover());
    btn.addEventListener('click', () => synth.playClick());
  });

  document.body.appendChild(nav);
}

// Window Event for palette triggers
window.addEventListener('palette-trigger', () => {
  if (palette.isOpen) {
    palette.close();
  } else {
    palette.open();
  }
});

// 7. PAGE INITIALIZATION ENGINE
document.addEventListener('DOMContentLoaded', () => {
  // Load saved theme immediately
  const activeTheme = localStorage.getItem('theme') || 'obsidian';
  document.body.setAttribute('data-theme', activeTheme);
  
  insertFloatingNavigation();

  // Load daily rotation data
  const data = getDailyData();

  // Populate DAILY MOTIVATION BANNER (if banner elements exist in DOM)
  const bannerQuote = document.getElementById('daily-banner-quote');
  const bannerChallenge = document.getElementById('daily-banner-challenge');
  if (bannerQuote && bannerChallenge) {
    bannerQuote.textContent = `"${data.quote.text}"`;
    bannerChallenge.innerHTML = `<strong>Challenge:</strong> ${data.quote.challenge}`;
  }

  // Populate Command Center Featured Macro (homepage widget)
  const ccMacroPlatform = document.getElementById('cc-macro-platform');
  const ccMacroCode = document.getElementById('cc-macro-code');
  if (ccMacroPlatform && ccMacroCode) {
    ccMacroPlatform.textContent = data.macros.pc.title;
    ccMacroCode.textContent = data.macros.pc.code.trim();
  }

  // Populate PROMPTS (if on automation hub page)
  const p1Text = document.getElementById('prompt-1-text');
  const p2Text = document.getElementById('prompt-2-text');
  const p3Text = document.getElementById('prompt-3-text');
  if (p1Text && p2Text && p3Text) {
    p1Text.textContent = data.prompts[0].prompt;
    p2Text.textContent = data.prompts[1].prompt;
    p3Text.textContent = data.prompts[2].prompt;
    
    document.getElementById('prompt-1-title').textContent = data.prompts[0].title;
    document.getElementById('prompt-2-title').textContent = data.prompts[1].title;
    document.getElementById('prompt-3-title').textContent = data.prompts[2].title;
  }

  // Populate SUMMARIES (if on automation hub page)
  const s1Title = document.getElementById('summary-1-title');
  const s1Text = document.getElementById('summary-1-text');
  const s2Title = document.getElementById('summary-2-title');
  const s2Text = document.getElementById('summary-2-text');
  if (s1Title && s1Text && s2Title && s2Text) {
    s1Title.textContent = data.summaries[0].title;
    s1Text.textContent = data.summaries[0].text;
    s2Title.textContent = data.summaries[1].title;
    s2Text.textContent = data.summaries[1].text;
  }

  // Populate MACROS (if on automation hub page)
  const pcTitle = document.getElementById('macro-pc-title');
  const pcDesc = document.getElementById('macro-pc-desc');
  const pcCode = document.getElementById('macro-pc-code');
  const pcDiff = document.getElementById('macro-pc-diff');
  
  const andTitle = document.getElementById('macro-android-title');
  const andDesc = document.getElementById('macro-android-desc');
  const andCode = document.getElementById('macro-android-code');
  const andDiff = document.getElementById('macro-android-diff');

  if (pcTitle && pcDesc && pcCode && andTitle && andDesc && andCode) {
    // Populate PC Macro
    pcTitle.textContent = data.macros.pc.title;
    pcDesc.textContent = data.macros.pc.desc;
    pcCode.textContent = data.macros.pc.code.trim();
    
    let pcStars = '';
    for (let i = 1; i <= 5; i++) {
      pcStars += `<i class="fa-solid fa-star ${i <= data.macros.pc.difficulty ? 'active' : ''}"></i>`;
    }
    pcDiff.innerHTML = pcStars;

    // Populate Android Macro
    andTitle.textContent = data.macros.android.title;
    andDesc.textContent = data.macros.android.desc;
    andCode.textContent = data.macros.android.code.trim();
    
    let andStars = '';
    for (let i = 1; i <= 5; i++) {
      andStars += `<i class="fa-solid fa-star ${i <= data.macros.android.difficulty ? 'active' : ''}"></i>`;
    }
    andDiff.innerHTML = andStars;
  }

  // Sync theme-button active status on index homepage on load
  const themeButtons = document.querySelectorAll('.theme-btn');
  themeButtons.forEach(btn => {
    if (btn.getAttribute('data-theme') === activeTheme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    // Hover sound for theme switch buttons
    btn.addEventListener('mouseenter', () => synth.playHover());
  });

  // Watch for local theme switcher clicks to synchronize audio feedback
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-theme');
      globalSetTheme(selected);
    });
  });

  // Initialize new visual components
  initJarvisHUD();
  initRakshitPortfolio();
  initAIPlayground();
});

// --- Dynamic Letters to Rakshit Popups ---

const rakshitLetters = [
  {
    month: "5th Month",
    title: "💙 5th Month - Tiny Voices & Lullabies",
    text: "💙 5th Month\n\nMy Little Rakshit,\n\nRight now you are 5 months old.\nWhen I sing “Tera mujhse hai pehle ka naata koi…” you look at me like you understand everything.\n\nAnd when you reply in your tiny voice — “gugu… gaga… dada…” — I feel like the richest man in the world.\n\nAt night, when you turn toward me in your sleep and come closer for comfort, my heart melts.\nYou don’t know it, but in that moment, you make me feel needed… important… loved.\n\nOne day you will grow up.\nBut I will always remember these nights."
  },
  {
    month: "6th Month",
    title: "💙 6th Month - Rolling Over & Flowering Smiles",
    text: "💙 6th Month\n\nMy Champ,\n\nYou are learning to roll, to laugh louder, to recognize my face.\nWhen you see me after work, your smile bursts like thousands of flowers inside my heart.\n\nI wait for that smile every day.\n\nI sing to you not because my voice is good…\nBut because I want your childhood to remember warmth."
  },
  {
    month: "7th Month",
    title: "💙 7th Month - Finger Holds & Soft Laughter",
    text: "💙 7th Month\n\nMy Little Warrior,\n\nYou hold my finger tightly now.\nLike you’re saying, “Don’t go anywhere, Papa.”\n\nAnd trust me… if love could stop time, I would freeze this moment forever.\n\nYou play with my face, pull my beard, laugh loudly —\nAnd I pretend to lose every time… just to hear you laugh again."
  },
  {
    month: "8th Month",
    title: "💙 8th Month - Footsteps & Peace",
    text: "💙 8th Month\n\nDear Rakshit,\n\nNow you recognize my footsteps.\nThe moment I enter, you start moving excitedly.\n\nWhen you rest your tiny head on my chest,\nI feel peace that no success, no money, no job can ever give me.\n\nRemember this always —\nYou were never a burden.\nYou were always my blessing."
  },
  {
    month: "9th Month",
    title: "💙 9th Month - First Words & Future Promise",
    text: "💙 9th Month\n\nMy Joy,\n\nYour expressions are changing.\nYou try to talk in your language.\nAnd when you say “dada,” I feel like I’ve achieved the biggest award of my life.\n\nIf someday I look strict or tired,\nPlease know — it was never lack of love.\nIt was always responsibility."
  },
  {
    month: "10th Month",
    title: "💙 10th Month - Crawling & Shirt Tugs",
    text: "💙 10th Month\n\nMy Heartbeat,\n\nYou crawl toward me like I am your whole world.\nBut the truth is — you are mine.\n\nWhen you sleep holding my shirt,\nI don’t move… even if my arm hurts.\nBecause your comfort is more important."
  },
  {
    month: "11th Month",
    title: "💙 11th Month - The Emotional Milestone",
    text: "💙 11th Month\n\nMy Happiness,\n\nSoon you will turn one.\nI already feel emotional.\n\nThese “gugu gaga” days will not return.\nYour tiny fingers will grow.\nYour soft cheeks will change.\n\nBut I promise —\nMy love will not change."
  },
  {
    month: "12th Month",
    title: "🎂 12th Month – 1st Birthday",
    text: "🎂 12th Month – 1st Birthday\n\nMy Dear Rakshit,\n\nOne year ago, you entered our life.\nAnd nothing has been the same since — everything became brighter.\n\nWhen I sing “Tera mujhse hai pehle ka naata koi…”\nI truly believe it.\n\nIt feels like we knew each other before this life.\n\nWhen you turn toward me at night for comfort,\nI silently pray —\nMay you always feel safe in this world.\n\nI don’t know what you will become.\nDoctor, businessman, artist, leader…\n\nBut I know one thing —\nBe kind.\nBe confident.\nBe happy.\n\nAnd whenever you read this years later,\nRemember…\n\nYour Papa’s heart bloomed with flowers every time you smiled.\n\nAnd I will miss these days… more than you can imagine.\n\nHappy 1st birthday, my little sunshine.\n\nYou don’t know it yet, but you changed our world forever.\n\nLove beyond words,\nPapa ❤️"
  }
];

// Unique Letter Generation Pools (Inspired by Papa's Letters to Rakshit)
const openingSentences = [
  "My dearest Rakshit, you are the most precious gift I have ever received in my life.",
  "Hey Champ, every single day you make my world a million times brighter and full of hope.",
  "My little warrior Rakshit, watching you grow is the greatest adventure and joy of my life.",
  "My sweet sunshine, you bring a kind of peace to my heart that no success or job could ever match.",
  "To my beautiful boy Rakshit, you are the blessing I never knew my heart was searching for."
];

const reflectionSentences = [
  "When I sing “Tera mujhse hai pehle ka naata koi…” and you look back at me with those wide, understanding eyes, I feel like the richest man in the world.",
  "Hearing your tiny voice go “gugu… gaga… dada…” fills our home with a sweet melody that makes all my work fatigue melt away in an instant.",
  "Every time you roll over, pull my beard, or laugh out loud, I gladly pretend to lose every single time just to hear that pure, beautiful laughter again.",
  "When you rest your tiny head on my chest and fall asleep, I hold my breath and refuse to move, because your comfort is more important than anything else.",
  "Now that you recognize my footsteps and move excitedly the moment I enter, I wait for that beautiful smile of yours every single day."
];

const blessingSentences = [
  "No matter how big you grow, I promise to always carry the warmth of these nights in my soul and guide you with love.",
  "I pray that you grow up to be kind, confident, and incredibly happy, standing tall in a world that is safe and gentle for you.",
  "If someday I look strict or tired, please always know that it is only the weight of responsibility, never a lack of love.",
  "Your soft cheeks will change and your tiny fingers will grow, but my promise to protect and cherish you will remain forever unchanged.",
  "Remember this always: you were never a burden. You are, and will always be, my greatest and most beautiful blessing."
];

const closingSentences = [
  "Keep smiling, my little champion. Papa loves you beyond words. ❤️",
  "You changed my world forever, and I will miss these tiny days more than you can imagine. Love you always, Papa. ❤️",
  "With all my heart and a love that knows no bounds, Papa. ❤️",
  "May your path always be lined with flowers and joy, my son. Yours forever, Papa. ❤️",
  "Sleeping or awake, you are my heart's greatest joy. Love always, Papa. ❤️"
];

function generateUniqueLetter() {
  const opening = openingSentences[Math.floor(Math.random() * openingSentences.length)];
  const reflection = reflectionSentences[Math.floor(Math.random() * reflectionSentences.length)];
  const blessing = blessingSentences[Math.floor(Math.random() * blessingSentences.length)];
  const closing = closingSentences[Math.floor(Math.random() * closingSentences.length)];

  return `✨ Dynamic Note from Papa's Heart\n\n${opening}\n\n${reflection}\n\n${blessing}\n\n${closing}`;
}

// Canvas-based heart shower particle system
function triggerHeartShower() {
  let canvas = document.getElementById('hearts-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'hearts-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000000';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', handleResize);

  const particles = [];
  const colors = ['#ff3366', '#ff50a8', '#ff7bb0', '#ff0055', '#dfc260', '#00aad4', '#00e676'];

  function createParticle(burst = false) {
    const x = Math.random() * width;
    const y = burst ? Math.random() * (height * 0.5) + height * 0.5 : height + 20;
    const size = Math.random() * 15 + 10;
    const speedY = -(Math.random() * 3 + 2);
    const speedX = Math.random() * 2 - 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const opacity = Math.random() * 0.5 + 0.5;
    const type = Math.random() > 0.45 ? 'heart' : 'star';
    const rotation = Math.random() * Math.PI * 2;
    const rotSpeed = Math.random() * 0.02 - 0.01;

    particles.push({ x, y, size, speedX, speedY, color, opacity, type, rotation, rotSpeed });
  }

  // Create initial burst
  for (let i = 0; i < 45; i++) {
    createParticle(true);
  }

  function drawHeart(c, x, y, size, rotation, color, opacity) {
    c.save();
    c.translate(x, y);
    c.rotate(rotation);
    c.beginPath();
    c.fillStyle = color;
    c.globalAlpha = opacity;
    c.moveTo(0, -size / 4);
    c.bezierCurveTo(size / 2, -size, size, -size / 3, 0, size * 0.7);
    c.bezierCurveTo(-size, -size / 3, -size / 2, -size, 0, -size / 4);
    c.fill();
    c.restore();
  }

  function drawStar(c, x, y, size, rotation, color, opacity) {
    c.save();
    c.translate(x, y);
    c.rotate(rotation);
    c.beginPath();
    c.fillStyle = color;
    c.globalAlpha = opacity;
    for (let i = 0; i < 5; i++) {
      c.lineTo(Math.cos(((18 + i * 72) * Math.PI) / 180) * size,
               Math.sin(((18 + i * 72) * Math.PI) / 180) * size);
      c.lineTo(Math.cos(((54 + i * 72) * Math.PI) / 180) * (size / 2),
               Math.sin(((54 + i * 72) * Math.PI) / 180) * (size / 2));
    }
    c.closePath();
    c.fill();
    c.restore();
  }

  let animationFrameId;
  function update() {
    ctx.clearRect(0, 0, width, height);

    if (particles.length < 90 && Math.random() < 0.2) {
      createParticle(false);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.005;

      if (p.type === 'heart') {
        drawHeart(ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
      } else {
        drawStar(ctx, p.x, p.y, p.size, p.rotation, p.color, p.opacity);
      }

      if (p.y < -20 || p.opacity <= 0) {
        particles.splice(i, 1);
      }
    }

    if (particles.length > 0) {
      animationFrameId = requestAnimationFrame(update);
    } else {
      window.removeEventListener('resize', handleResize);
      canvas.remove();
    }
  }

  update();
}

function initRakshitModal() {
  const initialLetter = generateUniqueLetter();

  // Create styles
  const style = document.createElement('style');
  style.innerHTML = `
    .rakshit-modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.78);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
    }
    .rakshit-modal-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }
    .rakshit-modal-card {
      background: rgba(14, 14, 20, 0.93);
      border: 2px solid var(--theme-accent);
      border-radius: 24px;
      padding: 2.2rem 2rem;
      width: 92%;
      max-width: 530px;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(var(--theme-accent-rgb), 0.22);
      transform: scale(0.9) translateY(40px);
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2);
      position: relative;
      color: #ffffff;
      max-height: 88vh;
      display: flex;
      flex-direction: column;
    }
    .rakshit-modal-overlay.open .rakshit-modal-card {
      transform: scale(1) translateY(0);
    }
    .rakshit-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 0.8rem;
      margin-bottom: 1rem;
    }
    .rakshit-modal-title {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--theme-accent);
      display: flex;
      align-items: center;
      gap: 10px;
      text-shadow: 0 0 10px rgba(var(--theme-accent-rgb), 0.25);
    }
    .rakshit-modal-close {
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.5);
      font-size: 1.6rem;
      cursor: pointer;
      line-height: 1;
      transition: color 0.2s ease, transform 0.2s ease;
    }
    .rakshit-modal-close:hover {
      color: #ff5f56;
      transform: scale(1.2);
    }
    .rakshit-milestone-banner {
      background: rgba(var(--theme-accent-rgb), 0.12);
      border: 1px dashed var(--theme-accent);
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 0.82rem;
      font-weight: 700;
      color: #ffffff;
      text-align: center;
      margin-bottom: 1.2rem;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 0 15px rgba(var(--theme-accent-rgb), 0.08);
    }
    .rakshit-modal-body {
      white-space: pre-wrap;
      line-height: 1.65;
      font-size: 0.98rem;
      color: rgba(255, 255, 255, 0.95);
      font-family: inherit;
      overflow-y: auto;
      flex-grow: 1;
      padding-right: 8px;
      margin-bottom: 1.2rem;
      min-height: 180px;
      max-height: 320px;
    }
    .rakshit-modal-body::-webkit-scrollbar {
      width: 4px;
    }
    .rakshit-modal-body::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 2px;
    }
    .rakshit-controls-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .letter-select-wrapper {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .letter-select-label {
      font-size: 0.68rem;
      text-transform: uppercase;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.4);
      letter-spacing: 0.5px;
    }
    .letter-select-dropdown {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: #ffffff;
      padding: 8px 12px;
      font-size: 0.85rem;
      outline: none;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
    }
    .letter-select-dropdown:hover, .letter-select-dropdown:focus {
      border-color: var(--theme-accent);
      background: rgba(255, 255, 255, 0.08);
    }
    .letter-select-dropdown option {
      background: #0e0e14;
      color: #ffffff;
    }
    .rakshit-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: #ffffff;
      padding: 8px 14px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.3s ease;
      height: 38px;
      margin-top: 14px; /* align with dropdown */
    }
    .rakshit-btn:hover {
      background: rgba(var(--theme-accent-rgb), 0.15);
      border-color: var(--theme-accent);
      color: var(--theme-accent);
      transform: translateY(-1px);
    }
    .rakshit-btn--love {
      background: rgba(255, 51, 102, 0.1);
      border-color: rgba(255, 51, 102, 0.3);
      color: #ff3366;
    }
    .rakshit-btn--love:hover {
      background: rgba(255, 51, 102, 0.2);
      border-color: #ff3366;
      color: #ffffff;
      box-shadow: 0 0 15px rgba(255, 51, 102, 0.25);
    }
    .rakshit-modal-footer {
      margin-top: 1rem;
      padding-top: 0.8rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 0.72rem;
      color: rgba(255, 255, 255, 0.4);
      text-align: center;
    }
    @keyframes heartBeat {
      0% { transform: scale(1); }
      14% { transform: scale(1.18); }
      28% { transform: scale(1); }
      42% { transform: scale(1.18); }
      70% { transform: scale(1); }
    }
    .rakshit-heart-pulse {
      display: inline-block;
      animation: heartBeat 1.3s infinite;
      color: #ff3366;
      filter: drop-shadow(0 0 4px #ff3366);
    }
  `;
  document.head.appendChild(style);

  // Build overlay
  const overlay = document.createElement('div');
  overlay.className = 'rakshit-modal-overlay';
  
  overlay.innerHTML = `
    <div class="rakshit-modal-card">
      <div class="rakshit-modal-header">
        <span class="rakshit-modal-title">
          <i class="fa-solid fa-heart rakshit-heart-pulse"></i> Letters to Rakshit
        </span>
        <button class="rakshit-modal-close" title="Close Letter">&times;</button>
      </div>
      <div class="rakshit-milestone-banner">
        <i class="fa-solid fa-cake-candles" style="color: var(--theme-accent);"></i>
        <span>Today completed his 8th month! Milestone Celebrated!</span>
      </div>
      <div class="rakshit-modal-body">${initialLetter}</div>
      <div class="rakshit-controls-row">
        <div class="letter-select-wrapper">
          <span class="letter-select-label">Archive Collection</span>
          <select class="letter-select-dropdown" id="letter-archive-select">
            <option value="unique" selected>✨ Today's Special (Dynamic Note)</option>
            <option value="month5">💙 5th Month - Lullabies</option>
            <option value="month6">💙 6th Month - Champ's Smile</option>
            <option value="month7">💙 7th Month - Warrior's Grip</option>
            <option value="month8">🎉 8th Month Special (Completed Today!)</option>
            <option value="month9">💙 9th Month - First Words</option>
            <option value="month10">💙 10th Month - Crawling World</option>
            <option value="month11">💙 11th Month - Grow Sweetly</option>
            <option value="month12">🎂 1st Birthday Celebration</option>
          </select>
        </div>
        <button class="rakshit-btn" id="rakshit-btn-regen" title="Generate another custom note">
          <i class="fa-solid fa-rotate"></i> New Note
        </button>
        <button class="rakshit-btn rakshit-btn--love" id="rakshit-btn-love" title="Send love and float hearts">
          <i class="fa-solid fa-heart-circle-bolt"></i> Send Love
        </button>
      </div>
      <div class="rakshit-modal-footer">
        A rotating unique note loads on open. Select from archive or generate another message!
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const textBody = overlay.querySelector('.rakshit-modal-body');
  const dropdown = overlay.querySelector('#letter-archive-select');
  const btnRegen = overlay.querySelector('#rakshit-btn-regen');
  const btnLove = overlay.querySelector('#rakshit-btn-love');
  const closeBtn = overlay.querySelector('.rakshit-modal-close');

  // Trigger audio chimes
  setTimeout(() => {
    overlay.classList.add('open');
    synth.playTone(523.25, 0.25, 'sine', 0.04);
    setTimeout(() => {
      synth.playTone(783.99, 0.35, 'sine', 0.05);
    }, 120);
    // Auto-trigger a mini heart shower on load!
    triggerHeartShower();
  }, 300);

  // Dropdown change listener
  dropdown.addEventListener('change', (e) => {
    const val = e.target.value;
    synth.playClick();
    if (val === 'unique') {
      textBody.textContent = generateUniqueLetter();
    } else {
      let monthKey = "";
      if (val === 'month5') monthKey = "5th Month";
      else if (val === 'month6') monthKey = "6th Month";
      else if (val === 'month7') monthKey = "7th Month";
      else if (val === 'month8') monthKey = "8th Month";
      else if (val === 'month9') monthKey = "9th Month";
      else if (val === 'month10') monthKey = "10th Month";
      else if (val === 'month11') monthKey = "11th Month";
      else if (val === 'month12') monthKey = "12th Month";
      
      const found = rakshitLetters.find(l => l.month.includes(monthKey));
      if (found) {
        textBody.textContent = found.text;
      }
    }
    textBody.scrollTop = 0;
  });

  // Regenerate button listener
  btnRegen.addEventListener('click', () => {
    synth.playBeep();
    dropdown.value = 'unique';
    textBody.textContent = generateUniqueLetter();
    textBody.scrollTop = 0;
  });

  // Send Love button listener
  btnLove.addEventListener('click', () => {
    synth.playTone(659.25, 0.15, 'sine', 0.08); // E5 note
    setTimeout(() => synth.playTone(987.77, 0.25, 'sine', 0.08), 80); // B5 note
    triggerHeartShower();
  });

  function closeModal() {
    overlay.classList.remove('open');
    synth.playClick();
    setTimeout(() => {
      overlay.remove();
    }, 450);
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}

// --- Jarvis Command Center Console HUD ---
function initJarvisHUD() {
  const consoleBody = document.getElementById('jarvis-hud-body');
  if (!consoleBody) return;

  const data = getDailyData();
  const currentThemeName = localStorage.getItem('theme') || 'obsidian';

  const lines = [
    { text: "> SECURE SHELL ESTABLISHED ON HOST NODE 127.0.0.1", class: "jarvis-sys" },
    { text: "> LOADED OLLAMA LOCAL WORKFLOW DAEMON [PORT: 11434]", class: "jarvis-sys" },
    { text: "> ACTIVE MODEL: DeepSeek R1 (8B LLM) - STATE: READY", class: "jarvis-ok" },
    { text: "> DIAGNOSTICS: 4 Connected MCP Servers online.", class: "jarvis-ok" },
    { text: `&gt; ENVIRONMENT: Theme set to [${currentThemeName.toUpperCase()}]. Sound Engine initialized.`, class: "jarvis-sys" },
    { text: "> FAMILY ALERT: Rakshit is 8 months old today! Milestone celebrated. ❤️", class: "jarvis-highlight" },
    { text: `&gt; DAILY QUOTE: "${data.quote.text}"`, class: "jarvis-info" },
    { text: `&gt; PROMPT CHALLENGE: ${data.quote.challenge}`, class: "jarvis-info" },
    { text: "> SYSTEM STANDBY. WELCOME BACK, OPERATOR RITESH.", class: "jarvis-ok" }
  ];

  consoleBody.innerHTML = '';
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) return;

    const lineData = lines[lineIndex];
    const div = document.createElement('div');
    div.className = `jarvis-line ${lineData.class || ''}`;
    consoleBody.appendChild(div);

    const fullText = lineData.text;
    let charIndex = 0;

    synth.playTone(600 + (lineIndex * 40), 0.04, 'triangle', 0.02);

    function typeChar() {
      if (charIndex < fullText.length) {
        // Handle escaped HTML like &gt;
        if (fullText.substr(charIndex, 4) === '&gt;') {
          div.innerHTML += '&gt;';
          charIndex += 4;
        } else {
          div.innerHTML += fullText.charAt(charIndex);
          charIndex++;
        }
        setTimeout(typeChar, 6);
      } else {
        lineIndex++;
        consoleBody.scrollTop = consoleBody.scrollHeight;
        setTimeout(typeLine, 120);
      }
    }

    typeChar();
  }

  setTimeout(typeLine, 400);
}

// --- Letters to Rakshit Portfolio Tab Controller ---
function initRakshitPortfolio() {
  const textBody = document.getElementById('rakshit-portfolio-body');
  const dropdown = document.getElementById('letter-portfolio-select');
  const btnRegen = document.getElementById('rakshit-portfolio-regen');
  const btnLove = document.getElementById('rakshit-portfolio-love');

  if (!textBody || !dropdown) return;

  // Initialize with dynamic letter
  textBody.textContent = generateUniqueLetter();

  // Dropdown select change
  dropdown.addEventListener('change', (e) => {
    const val = e.target.value;
    synth.playClick();
    if (val === 'unique') {
      textBody.textContent = generateUniqueLetter();
    } else {
      let monthKey = "";
      if (val === 'month5') monthKey = "5th Month";
      else if (val === 'month6') monthKey = "6th Month";
      else if (val === 'month7') monthKey = "7th Month";
      else if (val === 'month8') monthKey = "8th Month";
      else if (val === 'month9') monthKey = "9th Month";
      else if (val === 'month10') monthKey = "10th Month";
      else if (val === 'month11') monthKey = "11th Month";
      else if (val === 'month12') monthKey = "12th Month";
      
      const found = rakshitLetters.find(l => l.month.includes(monthKey));
      if (found) {
        textBody.textContent = found.text;
      }
    }
    textBody.scrollTop = 0;
  });

  // Regenerate button
  if (btnRegen) {
    btnRegen.addEventListener('click', () => {
      synth.playBeep();
      dropdown.value = 'unique';
      textBody.textContent = generateUniqueLetter();
      textBody.scrollTop = 0;
    });
  }

  // Send Love button
  if (btnLove) {
    btnLove.addEventListener('click', () => {
      synth.playTone(659.25, 0.12, 'sine', 0.05); // E5
      setTimeout(() => synth.playTone(880, 0.15, 'sine', 0.05), 60); // A5
      setTimeout(() => synth.playTone(1318.51, 0.2, 'sine', 0.06), 120); // E6

      // Show heartbeat pulse effect around the card container
      const card = textBody.closest('.portfolio-view');
      if (card) {
        card.classList.add('heart-pulse-glow');
        setTimeout(() => card.classList.remove('heart-pulse-glow'), 1000);
      }
    });
  }
}

// --- Interactive AI Playground Controller ---
const playgroundTemplates = {
  'ahk-dnd': {
    prompt: `Synthesize a Windows AutoHotkey (v1.1) automation hotkey script that:
1. Presses Win+D to clear the screen.
2. Turns on Do Not Disturb / Focus Mode.
3. Automatically opens Windows Terminal (wt.exe) or cmd.
4. Mutes system volume.`,
    code: `; AutoHotkey: DND Focus Mode Launcher
; Press Win + Shift + F to trigger focus sequence
#+f::
  Send, #d ; Minimize all windows to desktop
  Sleep, 200
  
  ; Mute System Volume
  SoundSet, 1, , MUTE
  
  ; Run Terminal
  Run, wt.exe
  Sleep, 500
  
  ; Notification sound chime (ascending beeps)
  SoundPlay, *16 
  MsgBox, 64, System Notification, Focus Mode Activated. Good luck coding!
return`,
    analysis: `Type: Windows Keyboard Macro (AutoHotkey)
Language: AutoHotkey Script (.ahk)
Complexity: Low (2/5)
Execution Instructions:
1. Ensure AutoHotkey is installed on Windows.
2. Copy code block and save as 'DNDFocus.ahk'.
3. Double-click the file to execute.
4. Press Win+Shift+F to initialize focus sequence.`
  },
  'py-scraper': {
    prompt: `Create a Python script that downloads a random high-res image from Unsplash (Source API) matching tags "minimalist, workstation" and set it as your daily desktop wallpaper. Log success to a local logs file.`,
    code: `import urllib.request
import ctypes
import os
import datetime

# Unsplash Source API configuration
unsplash_url = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920"
wallpaper_path = os.path.expanduser("~/unsplash_daily.jpg")
log_path = os.path.expanduser("~/wallpaper_updater.log")

try:
    print("Fetching dynamic source image...")
    urllib.request.urlretrieve(unsplash_url, wallpaper_path)
    
    # Set Windows Desktop Wallpaper using SystemParametersInfo
    ctypes.windll.user32.SystemParametersInfoW(20, 0, wallpaper_path, 3)
    
    # Log script success run timestamp
    with open(log_path, "a") as log:
        log.write(f"[{datetime.datetime.now()}] Success: Desktop updated\\n")
    print("Desktop wallpaper updated successfully!")
    
except Exception as e:
    with open(log_path, "a") as log:
        log.write(f"[{datetime.datetime.now()}] Error: {str(e)}\\n")
    print(f"Update failed. Check log file: {log_path}")`,
    analysis: `Type: Python Desktop Automation Utility
Language: Python 3.x (.py)
Complexity: Medium (3/5)
Dependencies: ctypes (standard), urllib (standard)
Execution Instructions:
1. Copy code block and save as 'set_wallpaper.py'.
2. Run via terminal: python set_wallpaper.py.
3. Check the log file created in your user directory.`
  },
  'tasker-geo': {
    prompt: `Design a Tasker XML block outline that automatically detects connection to SSID "Home_Secure_Net", changes the audio profile to "All Sounds Muted", turns off Bluetooth, and restores state when disconnecting.`,
    code: `<TaskerData sr="tasker_profile_home">
  <Profile sr="prof_1" ve="2">
    <cdate>162389408221</cdate>
    <edate>162389408221</edate>
    <id>1</id>
    <mid>home_ssid_state</mid>
    <name>Wi-Fi SSID Connect Home</name>
    <State sr="con_1" ve="2">
      <code>160</code> <!-- Wifi Connected State -->
      <Str sr="arg0" ve="3">Home_Secure_Net</Str>
    </State>
  </Profile>
  
  <Task sr="task_enter_home">
    <id>10</id>
    <Action sr="act_mute">
      <code>307</code> <!-- Mute Ringtone -->
      <Int sr="arg0" val="0"/>
    </Action>
    <Action sr="act_bt_off">
      <code>294</code> <!-- Bluetooth Switch -->
      <Int sr="arg0" val="0"/> <!-- Turn Off -->
    </Action>
  </Task>
  
  <Task sr="task_exit_home">
    <id>20</id>
    <Action sr="act_unmute">
      <code>307</code> <!-- Restore Ringtone -->
      <Int sr="arg0" val="7"/>
    </Action>
    <Action sr="act_bt_on">
      <code>294</code> <!-- Bluetooth Restore -->
      <Int sr="arg0" val="1"/>
    </Action>
  </Task>
</TaskerData>`,
    analysis: `Type: Android Tasker Automation Profile
Format: Tasker XML Markup (.xml)
Complexity: High (4/5)
Execution Instructions:
1. Copy script code and save as 'HomeWifiState.prj.xml'.
2. Move file to your mobile storage.
3. Open Tasker, press and hold the 'Profiles' tab, select 'Import Profile'.
4. Locate the saved XML file and run permission triggers.`
  },
  'prompt-refactor': {
    prompt: `Write a robust system prompt for an LLM that makes it behave like a strict Senior Tech Lead. It must audit the code for readability, type safety, write comprehensive unit tests, and never output explanations unless requested.`,
    code: `You are an expert Senior Software Engineer and Tech Lead. Your task is to review code submitted by junior developers. Follow these strict rules:

1. **Review Standards**:
   - Verify readability, naming conventions, and code comments.
   - Audit variable names for clarity and structural cleanliness.
   - Enforce static typing and type safety where appropriate.
   
2. **Output Format**:
   - Provide the refactored, optimized version inside a single fenced code block.
   - Prefix the code block with a markdown table summarizing improvements: [File Path, Class/Method, Issue, Action Taken].
   - Provide NO conversational text, apologies, warnings, or explanations outside this format.

3. **Testing Requirement**:
   - Automatically write comprehensive unit tests matching the selected code logic (e.g. using Jest, pytest, or JUnit) in a secondary code block.`,
    analysis: `Type: Large Language Model Prompt Template
Language: Natural Language Markdown (.md)
Complexity: Low (2/5)
Execution Instructions:
1. Copy template and paste it inside the system instructions text box of Google AI Studio or OpenAI Playground.
2. Submit code files directly and trigger generation.`
  }
};

function initAIPlayground() {
  const promptInput = document.getElementById('playground-prompt-input');
  const btnSynth = document.getElementById('playground-btn-synth');
  const logConsole = document.getElementById('playground-log-console');
  const outputCode = document.getElementById('playground-output-code');
  const progressBar = document.getElementById('playground-synth-progress');
  const progressFill = document.getElementById('playground-synth-fill');
  const btnCopy = document.getElementById('playground-btn-copy');
  const btnDownload = document.getElementById('playground-btn-download');

  const tabCode = document.getElementById('btn-tab-code');
  const tabLog = document.getElementById('btn-tab-log');

  if (!promptInput || !btnSynth || !logConsole || !outputCode) return;

  let activeTemplateKey = 'ahk-dnd';
  let activeTab = 'code';

  // Set default prompt value
  promptInput.value = playgroundTemplates[activeTemplateKey].prompt;
  outputCode.innerHTML = `<code>&gt; Ready to synthesize ${activeTemplateKey.toUpperCase()} script... Click Compile above.</code>`;

  // Handle template card clicks
  const cards = document.querySelectorAll('.template-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      activeTemplateKey = card.getAttribute('data-template');
      promptInput.value = playgroundTemplates[activeTemplateKey].prompt;
      logConsole.innerHTML = `&gt; Loaded template blueprint: <strong>${activeTemplateKey.toUpperCase()}</strong>.<br>&gt; Ready for parameter compilation.`;
      
      outputCode.innerHTML = `<code>&gt; Ready to synthesize ${activeTemplateKey.toUpperCase()} script... Click Compile above.</code>`;
      synth.playClick();
    });
  });

  // Switch tabs
  if (tabCode && tabLog) {
    tabCode.addEventListener('click', () => {
      tabCode.classList.add('active');
      tabLog.classList.remove('active');
      activeTab = 'code';
      synth.playClick();
      updateOutputDisplay();
    });

    tabLog.addEventListener('click', () => {
      tabLog.classList.add('active');
      tabCode.classList.remove('active');
      activeTab = 'log';
      synth.playClick();
      updateOutputDisplay();
    });
  }

  function updateOutputDisplay() {
    const data = playgroundTemplates[activeTemplateKey];
    if (!data) return;

    if (activeTab === 'code') {
      outputCode.innerHTML = `<code>${escapeHtml(data.code)}</code>`;
    } else {
      outputCode.innerHTML = `<code>${escapeHtml(data.analysis)}</code>`;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  // Synthesize Code logic
  btnSynth.addEventListener('click', () => {
    synth.playTone(400, 0.1, 'square', 0.05);
    btnSynth.disabled = true;
    progressBar.style.display = 'block';
    progressFill.style.width = '0%';
    logConsole.innerHTML = `&gt; INITIALIZING AI COMPILER CONSOLE...`;

    const logs = [
      { t: 0, text: "&gt; Connecting to local Ollama API endpoint (localhost:11434)..." },
      { t: 800, text: "&gt; API Connection: HTTP 200 OK. Allocating VRAM..." },
      { t: 1500, text: `&gt; Model Loaded: DeepSeek R1 (8B Inference Nodes).` },
      { t: 2200, text: "&gt; Parsing custom context and parameters..." },
      { t: 3000, text: "&gt; Running neural reasoning inference (temperature=0.6)..." },
      { t: 3800, text: "&gt; Reasoning complete! Stream output tokens loaded." },
      { t: 4500, text: "&gt; Compiling output script syntax rules... SUCCESS." }
    ];

    logs.forEach(log => {
      setTimeout(() => {
        logConsole.innerHTML += `<br>${log.text}`;
        logConsole.scrollTop = logConsole.scrollHeight;
        synth.playTone(700 + Math.random() * 200, 0.02, 'sine', 0.03);
      }, log.t);
    });

    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += 2;
      progressFill.style.width = `${progress}%`;
      if (progress >= 100) {
        clearInterval(progressInterval);
      }
    }, 90);

    setTimeout(() => {
      clearInterval(progressInterval);
      progressFill.style.width = '100%';
      
      const targetData = playgroundTemplates[activeTemplateKey];
      const codeText = targetData.code;
      outputCode.innerHTML = '';
      
      const pre = document.createElement('code');
      outputCode.appendChild(pre);

      let charIdx = 0;
      synth.playTone(880, 0.2, 'sine', 0.05);

      function typeCode() {
        if (charIdx < codeText.length) {
          pre.textContent += codeText.charAt(charIdx);
          charIdx += 4;
          outputCode.scrollTop = outputCode.scrollHeight;
          if (charIdx % 24 === 0) {
            synth.playTone(1000 + Math.random() * 500, 0.015, 'triangle', 0.01);
          }
          setTimeout(typeCode, 2);
        } else {
          pre.textContent = codeText;
          btnSynth.disabled = false;
          progressBar.style.display = 'none';
          logConsole.innerHTML += `<br>&gt; COMPILATION PROCESS COMPLETE.`;
          logConsole.scrollTop = logConsole.scrollHeight;
          synth.playTone(1174.66, 0.25, 'sine', 0.06);
        }
      }
      typeCode();

    }, 4600);
  });

  // Copy output button
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const data = playgroundTemplates[activeTemplateKey];
      const txt = activeTab === 'code' ? data.code : data.analysis;
      navigator.clipboard.writeText(txt).then(() => {
        const originalText = btnCopy.innerHTML;
        btnCopy.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        synth.playTone(1000, 0.1, 'sine', 0.08);
        setTimeout(() => {
          btnCopy.innerHTML = originalText;
        }, 1500);
      });
    });
  }

  // Download script button
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      const data = playgroundTemplates[activeTemplateKey];
      const txt = data.code;
      
      let ext = "txt";
      if (activeTemplateKey === 'ahk-dnd') ext = "ahk";
      else if (activeTemplateKey === 'py-scraper') ext = "py";
      else if (activeTemplateKey === 'tasker-geo') ext = "xml";
      else if (activeTemplateKey === 'prompt-refactor') ext = "md";

      const filename = `compiled_automation.${ext}`;
      const blob = new Blob([txt], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      synth.playTone(1200, 0.15, 'sine', 0.08);
    });
  }
}

