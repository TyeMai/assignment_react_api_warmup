import React from 'react';
import App from '../components/App';
import serialize from 'form-serialize'

class AppContainer extends React.Component {
  constructor() {
    super()

    // Initialize users in state as an empty array and
    // set isFetching to false.
    this.state = {
      users: [],
      isFetching: false
    }
  }

  componentDidMount() {
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})

    // After component mounts, call the API to get the
    // users, then update state which triggers re-render.
    // Add a delay to the URL and reset isFetching upon
    // completion of the request.
    fetch('https://reqres.in/api/users?delay=3').then((response) => response.json()).then((json) => {
      this.setState({users: json.data, isFetching: false})
    })
  }

  onAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, {hash: true});
    const headers = new Headers()
    headers.append('Content-Type', "application/json")

    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    }
    this.setState({isFetching: true})
    fetch('https://reqres.in/api/users?delay=1', options).then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      return response.json()
    }).then((json) => {
      console.log(json)
      this.setState({ //accepts acappback
        isFetching: false,
        users: [
          ...this.state.users,
          json
        ]
      }, () => {
        form.reset()
      }) //return new bject
      //  console.log(this.state.users)
    }).catch((error) => {
      console.log(error)
    })
  }

  onDeleteUser = (id) => {
    //e.preventDefault()
    const headers = new Headers()
    const body = {
      id: id
    }

    headers.append('Content-Type', "application/json")

    const options = {
      headers,
      method: "DELETE",
      body: JSON.stringify(body)
    }

    this.setState({isFetching: true})

    fetch('https://reqres.in/api/users?delay=1', options).then((response) => {
      console.log(response)
      //console.log(response.json())
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      //console.log(response.json
      //return response.json()
    }).then(() => {
      this.setState({ //accepts acappback
        isFetching: false,
        users: [...this.state.users].filter(user => user.id !== id)
      })
      //console.log(json)
    }).catch((error) => {
      console.log(error)
    })
  }

  onUpdateUser = (id) => {
    const headers = new Headers()
    //const body = serialize(form, {hash: true});
    const body = {
      id: id
    }

    headers.append('Content-Type', "application/json")

    const options = {
      headers,
      method: "PUT",
      body: JSON.stringify(body)
    }

    this.setState({isFetching: true})

    fetch('https://reqres.in/api/users?delay=1', options).then((response) => {
      console.log(response)
      //console.log(response.json())
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      //console.log(response.json
      //return response.json()
    }).then(() => {
      this.setState({ //accepts acappback
        isFetching: false,
        users: [...this.state.users].filter(user => user.id !== id)
      })
      //console.log(json)
    }).catch((error) => {
      console.log(error)
    })
  
  }

  render() {
    return (<App onAddUser={this.onAddUser} onDeleteUser={this.onDeleteUser} onUpdateUser={this.onUpdateUser} {...this.state}/>)

  }
}

export default AppContainer
