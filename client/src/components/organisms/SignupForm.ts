import { FormField } from '@/components/molecules/FormField';
import { Button } from '@/components/atoms/Button';

export function SignupForm(onSubmit: (data: any) => void): HTMLFormElement {
    const form = document.createElement('form');
    form.className = 'space-y-6';

    const usernameField = FormField({
        label: 'Username',
        placeholder: 'Choose a username',
        required: true,
    });

    const emailField = FormField({
        label: 'Email',
        type: 'email',
        placeholder: 'you@example.com',
        required: true,
    });

    const passwordField = FormField({
        label: 'Password',
        type: 'password',
        placeholder: '••••••••',
        required: true,
    });

    const submitBtn = Button({
        text: 'Create Account',
        type: 'submit',
        className: 'w-full',
    });

    form.appendChild(usernameField);
    form.appendChild(emailField);
    form.appendChild(passwordField);
    form.appendChild(submitBtn);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = (usernameField.querySelector('input') as HTMLInputElement).value;
        const email = (emailField.querySelector('input') as HTMLInputElement).value;
        const password = (passwordField.querySelector('input') as HTMLInputElement).value;
        onSubmit({ username, email, password });
    });

    return form;
}
