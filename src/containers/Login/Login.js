import React, { Component } from 'react'
import UtilUserData from '../../config/config';
import { Row, Col, Form } from 'reactstrap'
import './Login.scss'
import InputText from '../../components/UI/InputText';
import InputPassword from '../../components/UI/InputPassword';
import MainButton from '../../components/UI/Button';
import { Success, Error } from '../../components/UI/Toastify';
import { post } from '../../services/apirequest';
import apiRoutes from '../../config/routes';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: { adminID: 'jonathanmedina1809@hotmail.com', password: 'WannaCry1809.' },
            showPassword: false
        };

    }

    setDataHandler = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const user = { ...this.state.user }
        user[name] = value;
        this.setState({ user: user });
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    SubmitHandler = async () => {
        try {
            post(apiRoutes.login, this.state.user)
                .then(response => {
                    Success('gooood')
                    console.log(response);
                    const user = { ...response.user };
                    const token = response.token;
                    delete user.password;
                    UtilUserData.setUser(user)
                    UtilUserData.setToken(token);
                })
        } catch (error) {
            console.error(error);
            Error('Ha ocurrido un error')
        }
    }

    render() {

        return (
            <div className='MainLogin'>
                <Row>
                    <Col className='Banner' md={6} lg={7}></Col>
                    <Col md={6} lg={5} className='Login d-flex flex-column justify-content-center align-items-center'>
                        <section className='message'>
                            <h3>Excursiones Lola</h3>
                            <p className='welcome-message'>¡Bienvenido de nuevo! Por favor inicia sesión con tu cuenta.</p>
                        </section>
                        <Form >
                            <InputText
                                value={this.state.user.adminID}
                                handle={this.setDataHandler}
                                isInvalid={1 == 1}
                                name='adminID'
                                messageError={'error'}
                                label='Correo'
                            />
                            <InputPassword
                                value={this.state.user.password}
                                handle={this.setDataHandler}
                                handleShowPassword={this.handleClickShowPassword}
                                isInvalid={1 == 1}
                                name='password'
                                label='Contraseña'
                                messageError={'error'}
                                showPassword={this.state.showPassword}
                            />
                            <div className='form-group'>
                                <a href='/'>¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className='form-group'>
                                <MainButton color='info' handle={this.SubmitHandler}>Iniciar sesión</MainButton>
                            </div>
                        </Form>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Login;
