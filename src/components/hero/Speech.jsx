import { TypeAnimation } from 'react-type-animation';

const Speech = () => {
  return (
    <div className="bubbleContainer">
        <div className="bubble">
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Sr. Software Engineer with nearly a decade of experience.',
        1000,
        'Specialize in cloud automation and full-stack developement.',
        1000,
        'Currently learning mobile IOS development and 3D animation!',
        1000,

      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={60}
      repeat={Infinity}
    />
        </div>
        <img src="/man.png" alt="" />
    </div>
  )
}

export default Speech