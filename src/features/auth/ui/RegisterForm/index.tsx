import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Form, FormProps, Input } from 'antd'

export interface IRegisterForm {
    email?: string
    password?: string
}

interface IRegisterFormProps {
    loading: boolean
    onSubmit?: FormProps<IRegisterForm>['onFinish']
    onSubmitFailed?: FormProps<IRegisterForm>['onFinishFailed']
}

export const RegisterForm = ({ loading, onSubmit, onSubmitFailed }: IRegisterFormProps) => {
    return (
        <Form
            autoComplete='off'
            initialValues={{ remember: true }}
            name='register'
            onFinish={onSubmit}
            onFinishFailed={onSubmitFailed}
            size='large'
        >
            <Form.Item<IRegisterForm>
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

            <Form.Item<IRegisterForm>
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

            <Form.Item
                dependencies={['password']}
                hasFeedback
                name='confirm'
                rules={[
                    {
                        message: 'Подтвердите ваш пароль',
                        required: true,
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject(new Error('Пароль не соответствует'))
                        },
                    }),
                ]}
            >
                <Input.Password
                    placeholder='Подтвердите пароль'
                    prefix={<LockOutlined style={{ color: '#d9d9d9' }} />}
                    type='password'
                />
            </Form.Item>

            <Form.Item>
                <Button block htmlType='submit' loading={loading} size='large' type='primary'>
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    )
}
