// Function to initialize the header text changing
function initHeaderText() {
    const headerElement = document.querySelector('.header');
    const headerTexts = ["😈 Rg Hacker 😈", "☠️ HAPPY HACKING ☠️ ", "👾 Busy Handling massive terminals 👾"];
    let index = 0;
    let charIndex = 0;
    let direction = 1; // 1 for typing, -1 for deleting

    // Initialize with a placeholder text or set a fixed height to avoid layout jumping
    headerElement.textContent = headerTexts[0]; // Start with the first text

    function typeText() {
        const text = headerTexts[index];
        headerElement.textContent = text.slice(0, charIndex);

        // Adjust speed based on typing or deleting
        let typeSpeed = 150; // Adjust typing speed (milliseconds)
        if (direction === -1) {
            typeSpeed /= 2; // Speed up deleting
        }

        // Move to next character or switch direction
        charIndex += direction;
        if (charIndex > text.length) {
            direction = -1; // Start deleting
            typeSpeed = 800; // Pause before deleting
        } else if (charIndex < 0) {
            direction = 1; // Start typing next text
            index = (index + 1) % headerTexts.length; // Move to next text
            typeSpeed = 400; // Delay before typing next text
        }

        // Repeat recursively
        setTimeout(typeText, typeSpeed);
    }

    // Start typing the first text after a delay
    setTimeout(typeText, 1000); // Delay initial start
}

// Call the function to start changing header text
initHeaderText();

// Function to handle terminal commands (as per previous implementation)
function handleCommand(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        let command = document.getElementById('command-line').innerText.trim();
        let outputElement = document.getElementById('output');

        // Clear previous output
        outputElement.innerHTML = '';

        // Process command
        switch (command) {
            case 'ls':
                outputElement.innerHTML = 'Raman_Kumar_CV.pdf<br>id_rsa<br>password.txt<br>mysql.db<br>root.txt<br>heystalker.txt';
                break;
            case 'clear':
                outputElement.innerHTML = '';
                break;
            case 'ps aux':
                outputElement.innerHTML = `<pre>root       87295  0.0  0.0      0     0 ?        I    15:45   0:00 [Sleeping & snoring .zzz]
root       93863  0.0  0.0      0     0 ?        I    15:59   0:00 [Hacking Hacking Hacking]
root       96415  0.0  0.0      0     0 ?        I    16:04   0:00 [Eating Eating Eating]
root       96916  0.0  0.0      0     0 ?        I    16:05   0:00 [Give my C0ffeeeeee....]
root       98712  0.0  0.0      0     0 ?        I    16:09   0:00 [Pentesting On Something]
root      101394  0.0  0.0      0     0 ?        I    16:14   0:00 [Missing Mamma's Food]
rghacker  102626  0.0  0.0 307604  8052 ?        Sl   16:17   0:00 /hey/bro/hope/you/doing/well
root      103871  0.0  0.0      0     0 ?        I    16:19   0:00 [Keep gathering info you SMARTY...]
rghacker  104225  0.0  0.0  11304  4096 pts/0    R+   16:20   0:00 ps aux
rghacker  104226  0.0  0.0   5944  1664 pts/0    S+   16:20   0:00 tail </pre>`;
                break;
            case 'help':
                outputElement.innerHTML = '~ info : Osint on RAMAN GAUTAM<br>~ ps aux : processes of rghacker<br>~ ls : to list files<br>~ clear : To Clear Screen<br>~ ifconfig : For Numerical Data<br>';
                break;
            case 'ifconfig':
                outputElement.innerHTML = `
                    <pre>
docker0:flags=4099<UP,BROADCAST,MULTICAST> --- --- PHONE NO : 930-609-1955 --- ---
        inet 127.0.0.1  netmask 0.0.0.0  broadcast 0.0.0.0.
        ether 01:42:dd:16:dd:66  txqueuelen 0  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet6 2409:40d6:f:5e92:a00::fe33:v4ec  prefixlen 64  scopeid 0x0<global>
        inet6 2409:40d6:f:5e92:1cdd:qqef:qq95:2da0  prefixlen 64  scopeid 0x0<global>
        inet6 fe80::a00:27ff:fe30:e6ec  prefixlen 64  scopeid 0x20<link>
        ether 08:11:27:40:11:ec  txqueuelen 1000  (Ethernet)
        RX packets 22354  bytes 23284216 (22.2 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 16064  bytes 1988866 (1.8 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 4  bytes 240 (240.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 4  bytes 240 (240.0 B)
        TX errors 0  dropped 0  overruns 0  carrier 0  collisions 0
                    </pre>
                `;
                break;
            case 'info':
                outputElement.innerHTML = '> Name : Raman Gautam<br>> Age : 20 Years Young<br>> Mail : ramangautam0908@gmail.com<br>> Location : Bengaluru , Karnataka<br> >Socials : <br>      ~ <a href="https://app.hackthebox.com/users/735594">Hack The Box</a><br>        ~ <a href="https://www.linkedin.com/in/raman-gautam-ba3908313/">LinkedIn</a><br>        ~ <a href="https://tryhackme.com/p/rghacker">Tryhackme</a><br>        ~ <a href="https://x.com/anonymous_rmn">Twitter (X)</a><br>        ~ <a href="https://github.com/rghackerx">Github</a><br>        ~ <a href="https://haseeenshayar.blogspot.com/">Poetry</a><br>        ~ <a href="https://hackerbloggerr.blogspot.com/"> Tech Blogs</a><br>        ~ <a href="https://rghackerx.github.io/Raman_Kumar_CV.pdf">RGs CV</a>';
                break;
            default:
                outputElement.innerHTML = 'Command not found: ' + command;
        }

        // Clear command line
        document.getElementById('command-line').innerText = '';
    }
}

// Function to focus on command line when clicking anywhere on terminal
function focusTerminal() {
    document.getElementById('command-line').focus();
}
