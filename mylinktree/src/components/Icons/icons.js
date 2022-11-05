import slack from '../assets/slack-icon.png'
import github from '../assets/github-icon.png'

export default function Icons() {
    return (
      <>
        <div className='footicons'>
          <img src={slack} alt="" />
          <img src={github} alt="" />
        </div>
      </>
    );
};