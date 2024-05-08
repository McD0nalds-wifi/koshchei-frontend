import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Form, FormProps, Input } from 'antd'

interface IField {
    email?: string
    password?: string
}

interface ILoginFormProps {
    onSubmit?: FormProps<IField>['onFinish']
    onSubmitFailed?: FormProps<IField>['onFinishFailed']
}

export const LoginForm = ({ onSubmit, onSubmitFailed }: ILoginFormProps) => {
    return (
        <Form
            autoComplete='off'
            initialValues={{ remember: true }}
            name='login'
            onFinish={onSubmit}
            onFinishFailed={onSubmitFailed}
            size='large'
        >
            <Form.Item<IField>
                hasFeedback
                name='email'
                rules={[
                    {
                        message: 'Вы ввели невалидный E-mail',
                        type: 'email',
                    },
                    { message: 'Введите вашу почту', required: true },
                ]}
            >
                <Input placeholder='E-mail' prefix={<MailOutlined style={{ color: '#d9d9d9' }} />} type='email' />
            </Form.Item>

            <Form.Item<IField>
                hasFeedback
                name='password'
                rules={[
                    { message: 'Введите ваш пароль', required: true },
                    { message: 'Минимальная длина пароля 6 символов', min: 6 },
                ]}
            >
                <Input.Password
                    placeholder='Пароль'
                    prefix={<LockOutlined style={{ color: '#d9d9d9' }} />}
                    type='password'
                />
            </Form.Item>

            <Form.Item>
                <Button block htmlType='submit' type='primary'>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}
