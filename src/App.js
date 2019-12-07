import React, { Component } from 'react'
import './App.css'

import { css } from 'glamor'

const circleCount = 15
const circles = Array.from(Array(circleCount + 1).keys())
  .map((_, i) => 360 / circleCount * i)
  .map(phi =>
    css.keyframes('explosion', {
      '0%': {
        transform: `translate(0px, 0px) scale(0)`
      },
      '100%': {
        transform: `translate(${Math.cos(phi * Math.PI / 180) *
          40}px, ${Math.sin(phi * Math.PI / 180) * 40}px) scale(1)`
      }
    })
  )
class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 100 100">
          <g transform="translate(50, 50)">
            {circles.map((rule, i) => (
              <text
                textAnchor="middle"
                alignmentBaseline="middle"
                key={i}
                {...css({
                  animation: `${rule} 1s`,
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                  fontSize: 5
                })}
                x="0"
                y="0"
              >
                🔥
              </text>
            ))}

            <text
              x="0"
              y="0"
              textAnchor="middle"
              alignmentBaseline="middle"
              style={{ fontSize: 50 }}
            >
              Explosion
            </text>
          </g>
        </svg>
      </div>
    )
  }
}

export default App
