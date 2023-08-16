const butInstall = document.getElementById('buttonInstall');
let deferedPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferedPrompt = event;
    butInstall.style.display = 'block'
});

// TODO: Implement a click event handler on the `butInstall` element
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

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Application installed');
    butInstall.style.display = 'none'
});