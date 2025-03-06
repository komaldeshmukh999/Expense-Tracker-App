// import { useEffect, useState } from 'react';
// import { getUserProfile, updateUserProfile } from '../../Firebase/authFun';
// import classes from "./profile.module.css"
// // import { FaGithub } from "react-icons/fa";
// // import { IoMdLink } from 'react-icons/io';

// export default function Profile() {
//     const [fName, setFName] = useState('');
//     const [imgUrl, setImgUrl] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         fetchUserProfile()
//     }, [])

//     async function fetchUserProfile() {
//         setIsLoading(true);

//         try {
//             const { displayName, photoURL } = await getUserProfile()

//             setFName(displayName || "");
//             setImgUrl(photoURL || "");

//         } catch (error) {
//             console.error(error.message)
//         }

//         setIsLoading(false);
//     }


//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // console.log({ fName, imgUrl });

//         if (!fName || !imgUrl)
//             return alert('Please enter all fields')

//         await updateUserProfile(fName, imgUrl);

//         alert("Profile updated successfully!")


//         // setFName('');
//         // setImgUrl('');
//     };

//     return (
//         <div>
//             <div className={classes.profileData}>
//                 <h6>{fName}</h6>
//                 <img src={imgUrl}/>
//             </div>
//             <section className={classes.container}>
//             <h3>Contact Details</h3>
//             {isLoading ? <p>Please wait...</p> :

//                 <form className={classes.formGroup} onSubmit={handleSubmit}>
//                     <div className={classes.formControl}>

//                         {/* <FaGithub /> */}
//                         <label htmlFor="fName"> Full Name: </label>
//                         <input
//                             type="text"
//                             id="fName"
//                             name="fName"
//                             value={fName}
//                             onChange={(e) => setFName(e.target.value)}
//                         />
//                         {/* <IoMdLink /> */}
//                         <label htmlFor="imgUrl"> Profile Photo URL: </label>
//                         <input
//                             type="text"
//                             id="imgUrl"
//                             name="imgUrl"
//                             value={imgUrl}
//                             onChange={(e) => setImgUrl(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit">Update</button>
                    
//                 </form>
//             }

//             <hr />

//         </section>
//         </div>
        
//     );
// }
import { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../../Firebase/authFun';
import classes from "./profile.module.css";

export default function Profile() {
  const [fName, setFName] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    try {
      const { displayName, photoURL } = await getUserProfile();
      setFName(displayName || "");
      setImgUrl(photoURL || "");
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!localFName || !localImgUrl) { // Use local state for validation
      return alert('Please enter all fields');
    }
    try {
      await updateUserProfile(localFName, localImgUrl); // Use local state for update
      alert("Profile updated successfully!");
      fetchUserProfile(); // Refetch after update
    } catch (error) {
      console.error(error.message);
      alert("Failed to update profile.");
    }
  };

  // Create local state for form inputs to avoid direct state updates on typing
  const [localFName, setLocalFName] = useState('');
  const [localImgUrl, setLocalImgUrl] = useState('');

  useEffect(() => {
    setLocalFName(fName);
    setLocalImgUrl(imgUrl);
  }, [fName, imgUrl]);

  const handleLocalFNameChange = (e) => {
    setLocalFName(e.target.value);
  };

  const handleLocalImgUrlChange = (e) => {
    setLocalImgUrl(e.target.value);
  };

  return (
    <div>
      <div className={classes.profileData}>
        <h6>{fName}</h6>
        <img src={imgUrl} alt="Profile" />
      </div>
      <section className={classes.container}>
        <h3>Contact Details</h3>
        <form className={classes.formGroup} onSubmit={handleSubmit}>
          <div className={classes.formControl}>
            <label htmlFor="fName">Full Name:</label>
            <input
              type="text"
              id="fName"
              name="fName"
              value={localFName}
              onChange={handleLocalFNameChange}
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="imgUrl">Profile Photo URL:</label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              value={localImgUrl}
              onChange={handleLocalImgUrlChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
        <hr />
      </section>
    </div>
  );
}