import { LoginForm } from '../components/organisms/LoginForm';
import { SignupForm } from '../components/organisms/SignupForm';
import { authApi } from '../lib/api';

export function AuthPage(onAuthenticated: (token: string) => void): HTMLDivElement {
    const container = document.createElement('div');
    container.className = 'min-h-screen flex items-center justify-center p-4';

    const card = document.createElement('div');
    card.className = 'w-full max-w-md bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-2xl';

    const header = document.createElement('div');
    header.className = 'text-center mb-8';
    header.innerHTML = `
    <h1 class="text-3xl font-bold text-white mb-2">WWZ Strategy</h1>
    <p class="text-slate-400" id="auth-subtitle">Welcome back! Please login to your account.</p>
  `;

    const formContainer = document.createElement('div');
    let isLogin = true;

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mt-6 w-full text-sm text-slate-400 hover:text-white transition-colors underline decoration-dotted';
    toggleBtn.innerText = "Don't have an account? Sign up";

    const renderForm = () => {
        formContainer.innerHTML = '';
        const subtitle = header.querySelector('#auth-subtitle') as HTMLElement;

        if (isLogin) {
            subtitle.innerText = 'Welcome back! Please login to your account.';
            toggleBtn.innerText = "Don't have an account? Sign up";
            const loginForm = LoginForm(async (data) => {
                try {
                    const res = await authApi.login(data);
                    onAuthenticated(res.access_token);
                } catch (err: any) {
                    alert(err.message);
                }
            });
            formContainer.appendChild(loginForm);
        } else {
            subtitle.innerText = 'Join the battle! Create your account today.';
            toggleBtn.innerText = 'Already have an account? Sign in';
            const signupForm = SignupForm(async (data) => {
                try {
                    const res = await authApi.signup(data);
                    onAuthenticated(res.access_token);
                } catch (err: any) {
                    alert(err.message);
                }
            });
            formContainer.appendChild(signupForm);
        }
    };

    toggleBtn.addEventListener('click', () => {
        isLogin = !isLogin;
        renderForm();
    });

    card.appendChild(header);
    card.appendChild(formContainer);
    card.appendChild(toggleBtn);
    container.appendChild(card);

    renderForm();

    return container;
}
