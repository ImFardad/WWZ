import { FormField } from '@/components/molecules/FormField';
import { Button } from '@/components/atoms/Button';
import { Checkbox } from '@/components/atoms/Checkbox';

export function LoginForm(onSubmit: (data: any) => void): HTMLFormElement {
    const form = document.createElement('form');
    form.className = 'space-y-6';

    const usernameField = FormField({
        label: 'Username',
        placeholder: 'Enter your username',
        required: true,
    });

    const passwordField = FormField({
        label: 'Password',
        type: 'password',
        placeholder: '••••••••',
        required: true,
    });

    const rememberMe = Checkbox({
        label: 'Remember me',
        id: 'remember-me',
    });

    const submitBtn = Button({
        text: 'Sign In',
        type: 'submit',
        className: 'w-full',
    });

    form.appendChild(usernameField);
    form.appendChild(passwordField);
    form.appendChild(rememberMe);
    form.appendChild(submitBtn);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = (usernameField.querySelector('input') as HTMLInputElement).value;
        const password = (passwordField.querySelector('input') as HTMLInputElement).value;
        onSubmit({ username, password });
    });

    return form;
}
