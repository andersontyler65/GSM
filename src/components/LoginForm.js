import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password })
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText= {this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth

  return { email, password, error, loading }
}

export default connect(mapStateToProps, { emailChanged,
passwordChanged, loginUser })(LoginForm);








// class LoginForm extends Component {
//   state = { email: '', password: '', error: '', loading: false };
//
//   onButtonPress() {
//     const { email, password } = this.state;
//
//     this.setState({ error: '', loading: true });
//
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(this.onLoginSuccess.bind(this))
//       .catch(() => {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(this.onLoginSuccess.bind(this))
//           .catch(this.onLoginFail.bind(this));
//       });
//   }
//
//   onLoginFail() {
//     this.setState({ error: 'Authentication Failed', loading: false });
//   }
//
//   onLoginSuccess() {
//     this.setState({
//       email: '',
//       password: '',
//       loading: false,
//       error: ''
//     });
//   }
//
//   renderButton() {
//     if (this.state.loading) {
//       return <Spinner size="large" />;
//     }
//
//     return (
//       <Button onPress={this.onButtonPress.bind(this)}>
//         Log in
//       </Button>
//     );
//   }
//
//   render() {
//     return (
//       <Card>
//         <CardSection>
//           <Input
//             placeholder="user@gmail.com"
//             label="Email"
//             value={this.state.email}
//             onChangeText={email => this.setState({ email })}
//           />
//         </CardSection>
//
//         <CardSection>
//           <Input
//             secureTextEntry
//             placeholder="password"
//             label="Password"
//             value={this.state.password}
//             onChangeText={password => this.setState({ password })}
//           />
//         </CardSection>
//
//         <Text style={styles.errorTextStyle}>
//           {this.state.error}
//         </Text>
//
//         <CardSection>
//           {this.renderButton()}
//         </CardSection>
//       </Card>
//     );
//   }
// }
//
// const styles = {
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   },
//   thumbnailStyle: {
//     width: 80,
//     height: 60,
//     borderRadius: 60,
//     borderWidth: 60,
//   },
//   thumbnailContainerStyle: {
//     flex: 1,
//   }
// };

// export default LoginForm;
