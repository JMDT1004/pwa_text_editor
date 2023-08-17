const butInstall = document.getElementById('buttonInstall');
let deferedPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferedPrompt = event;
    butInstall.style.display = 'block'
});

butInstall.addEventListener('click', async () => {
    if (!deferedPrompt) return;

    deferedPrompt.prompt();

    const { outcome } = await deferedPrompt.userChoice;
    if (outcome === 'accepted') {
        console.log('Install prompt accepted')
    }
    else { console.log('Install prompt rejected') }
    deferedPrompt = null;
}
);

window.addEventListener('appinstalled', (event) => {
    console.log('Application installed');
    butInstall.style.display = 'none'
});