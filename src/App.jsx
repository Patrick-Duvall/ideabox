import React, {Component} from 'react';
import Ideas from './Ideas'
import Form from './Form'
import './App.css'

class App extends Component {

  constructor() {
    const ideas = [
      { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
      { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
      { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
    super();
    this.state = { ideas: [], error:'', loading: 'Loading...' }
  }

  componentDidMount = () => {
    // debugger
    fetch('http://localhost:3001/api/v1/ideas')
      .then(response => response.json())
      .then(data => this.setState({ideas: [...data], loading: ''}))
      .catch(error => this.setState({error: error.message, loading: ''}))
  } 

  addIdea = (newIdea) => {
    fetch("http://localhost:3001/api/v1/ideas", 
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: newIdea.id,
        title: newIdea.title,
        description: newIdea.description
      })
    })
    .then(this.setState({ ideas: [...this.state.ideas, newIdea] }))
    .catch(error => alert(error))
  }

  deleteIdea = (id) => {
    fetch(`http://localhost:3001/api/v1/ideas/${id}`, {
      method: "DELETE"
    })
      .then(
        this.setState({ ideas: this.state.ideas.filter(idea => idea.id !== id) })
      )
      .catch((error) => alert(error))
  }

  render() {
    return (
      <main className='App'>
        <h1>Ideabox</h1>
        <Form addIdea={this.addIdea}/>
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.state.loading && <h2>{this.state.loading}</h2>}
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }
}

export default App