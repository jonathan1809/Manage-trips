import React, { Component } from 'react';
import { connect } from 'react-redux';
import UtilUserData from '../../config/config';
import { Row, Col, Form } from 'reactstrap'
import './Login.scss'
import InputText from '../../components/UI/InputText';
import InputPassword from '../../components/UI/InputPassword';
import MainButton from '../../components/UI/Button';
import Loading from '../../components/UI/Loading';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
import * as actions from '../../services/redux/login'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: { adminID: 'jonathanmedina1809@hotmail.com', password: 'WannaCry1809.' },
            showPassword: false,
            showProgress: false,
            isInvalidPassword: false,
            isInvalidEmail: false,
            messageErrorPassword: '',
            messageErrorAdminID: ''
        };
        console.log(this.props)
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

    validateData() {
        if (!validator.isEmail(this.state.user.adminID)) {
            this.setState({ messageErrorAdminID: 'El correo no es valido.', isInvalidEmail: true })
            return false
        }
        if (validator.isEmpty(this.state.user.adminID)) {
            this.setState({ messageErrorAdminID: 'Ingresa un correo.', isInvalidEmail: true })
            return false
        }
        if (validator.isEmpty(this.state.user.password)) {
            this.setState({ messageErrorPassword: 'Ingresa una contraseña', isInvalidPassword: true })
            return false
        }
        if (!validator.isLength(this.state.user.password, { min: 8, max: 15 })) {
            this.setState({ messageErrorPassword: 'La contraseña es muy corta.', isInvalidPassword: true })
            return false
        }
        if (this.state.messageErrorAdminID.length > 0 || this.state.messageErrorPassword.length > 0)
            return false
        return true
    }
    SubmitHandler = async (event) => {

        event.preventDefault();
        this.setState({
            showProgress: true,
            isInvalidPassword: false,
            isInvalidEmail: false,
            messageErrorPassword: '',
            messageErrorAdminID: ''
        })
        if (!this.validateData()) {
            return;
        }
        await this.props.loginUser(this.state.user)

    }

    render() {

        let redirect = null;
        if (this.props.isLogged)
            redirect = <Redirect to={this.props.match.url + 'Hoteles'} />
        return (
            <div className='MainLogin'>
                {redirect}
                <Row>
                    <Col className='Banner' md={6} lg={7}></Col>
                    <Col md={6} lg={5} className='Login d-flex flex-column justify-content-center align-items-center'>
                        <section className='message'>
                            <h3>Excursiones Lola</h3>
                            <p className='welcome-message'>¡Bienvenido de nuevo! Por favor inicia sesión con tu cuenta.</p>
                        </section>
                        <Form onSubmit={this.SubmitHandler}>
                            <InputText
                                value={this.state.user.adminID}
                                handle={this.setDataHandler}
                                isInvalid={this.state.isInvalidEmail}
                                name='adminID'
                                messageError={this.state.messageErrorAdminID}
                                label='Correo'
                            />
                            <InputPassword
                                value={this.state.user.password}
                                handle={this.setDataHandler}
                                handleShowPassword={this.handleClickShowPassword}
                                isInvalid={this.state.isInvalidPassword}
                                name='password'
                                label='Contraseña'
                                messageError={this.state.messageErrorPassword}
                                showPassword={this.state.showPassword}
                            />
                            <div className='form-group'>
                                <a href='/'>¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className='form-group'>
                                <MainButton color='info' >
                                    {this.props.loading ? <Loading /> : 'Iniciar sesión'}
                                </MainButton>
                            </div>
                        </Form>
                    </Col>

                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.login.loading,
        isLogged: state.login.isLogged,
        user: state.login.user,
        isError: state.login.error !== null ? false : true,
        error: state.login.error
    };
}

const mapDispatchToProps = {
    loginUser: (user) => actions.login(user)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
