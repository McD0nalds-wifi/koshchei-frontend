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
        >
            <Form.Item<IField> name='email' rules={[{ message: 'Введите вашу почту', required: true }]}>
                <Input placeholder='E-mail' prefix={<MailOutlined style={{ color: '#d9d9d9' }} />} size='large' />
            </Form.Item>

            <Form.Item<IField> name='password' rules={[{ message: 'Введите ваш пароль', required: true }]}>
                <Input.Password
                    placeholder='Пароль'
                    prefix={<LockOutlined style={{ color: '#d9d9d9' }} />}
                    size='large'
                    type='password'
                />
            </Form.Item>

            <Form.Item>
                <Button block htmlType='submit' size='large' type='primary'>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}
