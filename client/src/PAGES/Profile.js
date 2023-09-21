
const Profile = () => {
    return (
     <header style={{width:"100%",height:1000,display:"flex",flexDirection:"column",gap:"40px",alignItems:"center"}}>
      <h1>Hello, User!</h1>
      <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" alt=" Profilepicture" style={{width:500,height:500}}/>
      <p className="decoration">Welcome to our website.</p>
     </header>
    );
}
 
export default Profile;