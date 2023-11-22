import React from 'react';

function Profile() {

    const [username, setUsername] = useState("")
    const [newUsername, setnewUsername] = useState("");

    const getUsername = async (id) => {
        const response = await fetch("https://recipe-app-api-six.vercel.app/recipe-app/api/v1/user/getName/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id }),
            credentials: "include"
        });

        const json = await response.json();
        if (json.user) {
            setUsername(json.user.name);
        }
    }

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    }

    useEffect(() => {
        const userID = window.localStorage.getItem("userID");
        if (userID) {
            getUsername(userID);
        }
    });

    return (
        <div className='text-start outerDiv bg-dark min-vh-100 w-100 pe-5'>
            <div className=" ms-2 text-light inner-div" >
                <h1 className='mb-3'>Profile</h1>
                <h6 className='mb-3'>Your username:   {username}</h6>
                <h6 >Change username</h6>
                <input placeholder='Please enter your new username' name="name" className='form-control mb-2 mt-2 w-100' onChange={handleInputChange} value={newUsername} ></input>
                <div>
                    <button onClick={handleSubmit} className='btn btn-block btn-success mt-4 mb-2 w-100' style={{ width: "500px" }}>Change username</button>
                </div>
                <div>
                    <button onClick={handleSubmit} className='btn btn-block btn-warning mt-4 mb-2 w-100' style={{ width: "500px" }}>Delete account</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;