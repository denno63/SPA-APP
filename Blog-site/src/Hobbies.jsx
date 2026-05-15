import { Component } from 'react'

// Hobbies component (class-based)
export default class Hobbies extends Component {
  render() {
    const { hobbies } = this.props

    return (
      <section className="hobbies-section">
        <h2>Hobbies</h2>
        <ul className="hobbies-list">
          {hobbies.map((hobby) => {
            const itemStyle = {
              backgroundColor: hobby.favorite ? '#fff3cd' : '#f5f5f5',
              color: hobby.favorite ? '#5f370e' : '#111',
              borderRadius: '14px',
              padding: '12px 16px',
              marginBottom: '10px',
              listStyle: 'none'
            }

            return (
              <li key={hobby.id} style={itemStyle}>
                {hobby.name}
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}
