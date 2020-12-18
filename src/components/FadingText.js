import {useSpring, animated} from 'react-spring'

function FadingText() {
  const props = useSpring({config: { duration: 1500 }, opacity: 0, from: {opacity: 1}})
  return <animated.div style={props}>copied</animated.div>
}

export default FadingText;