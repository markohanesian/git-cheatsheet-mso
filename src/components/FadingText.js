import {useSpring, animated} from 'react-spring'

function FadingText() {
  const props = useSpring({config: { duration: 2000 }, opacity: 0, from: {opacity: 1, padding: '5px', backgroundColor: 'lightgreen', color: 'white'}})
  return <animated.div style={props}>copied</animated.div>
}

export default FadingText;