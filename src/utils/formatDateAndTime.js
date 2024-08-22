const formatDateAndTime=()=>{

    const currentDate = new Date();
    const formatDate = currentDate.toLocaleDateString();
    
    
    
    const currentTime = new Date();
    const formatTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); 
    
    

    return {
       date: formatDate,
        time:formatTime,
    }
}

export default formatDateAndTime;
