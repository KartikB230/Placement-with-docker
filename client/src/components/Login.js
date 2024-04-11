import { GoogleLogin} from 'react-google-login'

const client_id ="http://128628804087-oo6hdb04efgmpjfg1vm9vce1vq78gqcp.apps.googleusercontent.com";

function Login(){
    const onSuccess=(res) => {
        console.log("Login Success! Current User: " , res.profileObj);

    }

    const onFailure=(res) => {
        console.log("Login Failed");
        
    }

    return(
        <div id="signInButton">
            <GoogleLogin 
                client_id={client_id}
                buttonText="Login"
                onSuccess={onSuccess}
                onFilure={onFailure}
                cookiePolicy={'single-host-origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login