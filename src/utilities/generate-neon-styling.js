import { keyframes } from 'styled-components'

const generateNeonStyling = (mainColor) => {

  const glowAnimation = keyframes`
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px ${mainColor}, 0 0 70px ${mainColor}, 0 0 80px ${mainColor}, 0 0 100px ${mainColor}, 0 0 150px ${mainColor};
      }
      to {
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${mainColor}, 0 0 35px ${mainColor}, 0 0 40px ${mainColor}, 0 0 50px ${mainColor}, 0 0 75px ${mainColor};
      }
  `

  return (
          {
            color: 'white',
            animation: `${glowAnimation} 1.5s ease-in-out infinite alternate`
          }
  )
}

export default generateNeonStyling
