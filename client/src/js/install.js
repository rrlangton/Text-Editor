const butInstall = document.getElementById('buttonInstall');

window.addEventLIsterner('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});