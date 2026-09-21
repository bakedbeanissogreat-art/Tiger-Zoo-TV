const loginForm = document.querySelector('#login-form');
const passwordInput = document.querySelector('#password');
const togglePassword = document.querySelector('#toggle-password');
const formMessage = document.querySelector('#form-message');
const loginPage = document.querySelector('#login-page');
const homePage = document.querySelector('#home-page');
const signInButton = document.querySelector('#sign-in');

const showLogin = () => {
    if (!loginPage || !homePage) return;
    homePage.hidden = true;
    loginPage.hidden = false;
    document.title = 'Sign in | Tiger Zoo TV';
    document.querySelector('#email')?.focus();
};

if (window.location.hash === '#sign-in') showLogin();
const episodeDialog = document.querySelector('#episode-dialog');
const episodeVideo = document.querySelector('#episode-video');

const openEpisode = () => {
    episodeDialog?.showModal();
    episodeVideo?.play().catch(() => {});
};

document.querySelector('#hero-watch')?.addEventListener('click', openEpisode);
document.querySelector('[data-episode="Episode 01"]')?.addEventListener('click', openEpisode);
document.querySelector('#close-episode')?.addEventListener('click', () => {
    episodeVideo?.pause();
    if (episodeDialog?.open) episodeDialog.close();
});

episodeDialog?.addEventListener('click', (event) => {
    if (event.target === episodeDialog) {
        episodeVideo?.pause();
        episodeDialog.close();
    }
});

togglePassword?.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.textContent = isPassword ? 'Hide' : 'Show';
    togglePassword.setAttribute('aria-label', `${isPassword ? 'Hide' : 'Show'} password`);
});

loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    loginPage.hidden = true;
    homePage.hidden = false;
    document.title = 'Home | Tiger Zoo TV';
});

signInButton?.addEventListener('click', () => {
    showLogin();
});

document.querySelector('#forgot-password')?.addEventListener('click', () => {
    formMessage.textContent = 'Password reset instructions are on their way.';
});

document.querySelector('#signup-button')?.addEventListener('click', () => {
    formMessage.textContent = 'Account creation is coming soon.';
});
