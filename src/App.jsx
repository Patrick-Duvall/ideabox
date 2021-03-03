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
    this.state = { ideas: [] }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] })
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id != id);
    this.setState({ ideas: filteredIdeas })
  }

  render() {
    return (
      <main className='App'>
        <h1>Ideabox</h1>
        <Form addIdea={this.addIdea}/>
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </main>
    )
  }
}

export default App