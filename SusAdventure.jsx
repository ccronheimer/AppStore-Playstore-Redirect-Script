import React from 'react'
import { Typography } from '@material-ui/core';

const susadventure = () => {
    function getMobileOperatingSystem(){
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
          // Windows Phone must come first because its UA also contains "Android"
          if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }
    
        if (/android/i.test(userAgent)) {
            return "Android";
        }
    
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "iOS";
        }
    
        return "unknown";
    }
    
    function DetectAndServe(){
        let os = getMobileOperatingSystem();
        if (os === "Android") {
            window.location.href = "https://play.google.com/store/apps/details?id=com.cameroncronheimer.susadventure"; 
        } else if (os === "iOS") {
            window.location.href = "https://apps.apple.com/us/app/sus-adventure-2/id1564807026";
        } else if (os === "Windows Phone") {
          //  window.location.href = "http://cameroncronheimer.com/games";
        } else {
            //window.location.href = "http://cameroncronheimer.com/games";
        }
    }
        
        return (
            <div>
                {DetectAndServe()}
                <Typography>Thank you for downloading ❤️ </Typography>
            </div>
        )
    }

export default susadventure
