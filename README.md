# AppStore-Playstore-Redirect-Script
 A small script to redirect users to the AppStore or PlayStore based on the users mobile device.
 
 ```javascript
 
const RedirectScript = () => {
    function getMobileOperatingSystem(){
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
          // Windows Phone must come first because its UA also contains "Android"
          if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }
    
        if (/android/i.test(userAgent)) {
            return "Android";
        }
    
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }
    
        return "unknown";
    }
    
    function DetectAndServe(){
        let os = getMobileOperatingSystem();
        if (os === "Android") {
            window.location.href = "PlayStore link here"; 
        } else if (os === "iOS") {
            window.location.href = "AppStore link here";
        } else {
            window.location.href = "Not a Android or iOS device";
        }
    }
        
        return (
            <div>
                {DetectAndServe()}
            </div>
        )
    }

export default RedirectScript;
 
 ```
