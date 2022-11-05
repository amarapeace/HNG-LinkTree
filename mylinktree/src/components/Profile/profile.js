import myProfile from '../assets/profile_pic.jpg'

export default function Profile() {
  return (
    <div className='myprofile'>
      <img src={myProfile} id="profile_img" className='myprofilepics' alt="my profile pics"/>
      <h4 id="twitter">onwunzoamara</h4>
      <h3 id="slack">Onwunzo Amara</h3>
    </div>
  );
}
