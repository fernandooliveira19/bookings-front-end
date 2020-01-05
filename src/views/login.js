import React from 'react'
import Card from '../components/cards'
import FormGroup from '../components/form-group'



class Login extends React.Component {

    state={
        email: '',
        password: ''
    
    }
    entrar = () =>{
        console.log('email: ', this.state.email)
        console.log('password: ', this.state.password)
    }
    

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email *" htmlFor="inputEmail">
                                                    <input 
                                                    type="email" 
                                                    className="form-control"
                                                    id="inputEmail" 
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o email"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({email: e.target.value})}/>
                                                </FormGroup>
                                                <FormGroup label="Senha *" htmlFor="inputPassword">
                                                    <input 
                                                    value={this.state.password}
                                                    onChange={e => this.setState({password: e.target.value})}
                                                    type="password" 
                                                    className="form-control"
                                                    id="inputPassword" 
                                                    placeholder="Digite a senha"/>
                                                </FormGroup>
                                                <button onClick={this.entrar} className="btn btn-success" >Entrar</button>
                                                <button className="btn btn-danger" >Cadastrar</button>

                                            </fieldset>


                                        </div>

                                    </div>
                                </div>

                            </Card>

                        </div>
                    </div>
                </div>

            </div>

        )
    }

}


export default Login;