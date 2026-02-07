let isEmailVerified = true;
let isLoggedIn = false;
let isCardVerified = true;

//&& return true only if 
//all conditions are true

if(isEmailVerified && isLoggedIn && isCardVerified) {
    console.log('verification successful')
} else {
    console.log('Please check your email, login or card information')
}
