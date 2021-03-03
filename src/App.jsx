import React, {Component} from 'react';
import Ideas from './Ideas'
import './App.css'

class App extends Component {



  constructor() {
    const ideas = [
      { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
      { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
      { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
    super();
    this.state = { ideas: ideas }
  }

  render() {
    return (
      <main className='App'>
        <h1>Ideabox</h1>
        <Ideas ideas={this.state.ideas}/>
      </main>
    )
  }
}

export default App