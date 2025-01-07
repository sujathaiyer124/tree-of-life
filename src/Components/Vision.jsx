import React, { useState } from 'react';

const VisionTree = () => {
  const [hoveredBlossom, setHoveredBlossom] = useState(null);

  const isVisible = true; // Temporarily set to true for testing visibility

  const styles = {
    container: {
      minHeight: '100vh',
      padding: '20px',
      position: 'relative',
      backgroundColor: '#D8F3CC',
    },
    tooltip: {
      position: 'absolute',
      background: '#333',
      color: 'white',
      padding: '8px 12px',
      borderRadius: '4px',
      fontSize: '14px',
      whiteSpace: 'nowrap',
      zIndex: 1000,
      transition: 'opacity 0.2s ease',
      pointerEvents: 'none'
    },
    blossom: {
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    missionText: {
      textAlign: 'center',
      fontSize: '20px',
      marginTop: '20px',
      color: '#333'
    }
  };

  const blossoms = [
    { x: 200, y: 100, text: "Authentic Connections" },
    { x: 400, y: 50, text: "Mindful Interactions" },
    { x: 600, y: 100, text: "Personal Growth" },
    { x: 300, y: 150, text: "Community Support" },
    { x: 500, y: 150, text: "Sustainable Engagement" }
  ];

  return (
    <div style={styles.container}>
       <style>
        {`
          @media (max-width: 768px) {
            svg {
              width: 90%;
              height: auto;
            }
            text {
              font-size: 20px;
            }
            circle {
              r: 8;
            }
            p {
              font-size: 18px;
            }
          }

          @media (max-width: 600px) {
            svg {
              width: 80%;
              height: auto;
            }
            text {
              font-size: 18px;
            }
            circle {
              r: 7;
            }
            p {
              font-size: 16px;
            }
          }

          @media (max-width: 400px) {
            svg {
              width: 70%;
              height: auto;
            }
            text {
              font-size: 16px;
            }
            circle {
              r: 6;
            }
            p {
              font-size: 14px;
            }
          }

          @media (max-width: 300px) {
            svg {
              width: 60%;
              height: auto;
            }
            text {
              font-size: 14px;
            }
            circle {
              r: 5;
            }
            p {
              font-size: 12px;
            }
          }
        `}
      </style>
      <svg viewBox="0 0 800 600" width="100%" height="600" style={{ backgroundColor: '#D8F3DC' }}>
        {/* Tree Trunk */}
        <path
          d="M400 500 L400 200"
          stroke="#4caf50"
          strokeWidth="20"
          fill="none"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease',
            transformOrigin: 'bottom',
            backgroundColor: '#D8F3DC',
          }}
        />

        {/* Branches */}
        {[
          { path: "M400 200 L200 100", text: "Connection", x: 160, y: 90 },
          { path: "M400 200 L400 50", text: "Inspiration", x: 350, y: 40 },
          { path: "M400 200 L600 100", text: "Alignment", x: 540, y: 90 }
        ].map((branch, index) => (
          <g
            key={index}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 0.2}s`
            }}
          >
            <path
              d={branch.path}
              stroke="#4caf50"
              strokeWidth="15"
              fill="none"
            />
            <text
              x={branch.x}
              y={branch.y}
              fill="#4caf50"
              fontSize="24"
              fontWeight="bold"
            >
              {branch.text}
            </text>
          </g>
        ))}

        {/* Blossoms with Tooltips */}
        {blossoms.map((blossom, index) => (
          <g
            key={index}
            onMouseEnter={() => setHoveredBlossom(index)}
            onMouseLeave={() => setHoveredBlossom(null)}
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 0.1 + 0.6}s`
            }}
          >
            <circle
              cx={blossom.x}
              cy={blossom.y}
              r={hoveredBlossom === index ? "12" : "10"}
              fill="#ff4081"
              style={{
                transition: 'all 0.2s ease',
                cursor: 'pointer',stroke: '#fff',  // Add a stroke for better visibility
                strokeWidth: '2' // Make the stroke width noticeable
              }}
            />
            {hoveredBlossom === index && (
              <foreignObject
                x={blossom.x - 75}
                y={blossom.y - 40}
                width="150"
                height="40"
              >
                <div style={{
                  ...styles.tooltip,
                  transform: 'translateX(-50%)',
                  left: '50%',
                  zIndex: 1000
                }}>
                  {blossom.text}
                </div>
              </foreignObject>
            )}
          </g>
        ))}
      </svg>

      <p style={{
        ...styles.missionText,
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
        transition: 'all 0.5s ease 1s'
      }}>
        Bloom is a digital garden where every interaction plants seeds for growth.
      </p>
    </div>
  );
};

export default VisionTree;
