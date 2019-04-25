import * as constants from 'utils/Constants.jsx'

const FormatUrl = (url) => {
    let python_url = constants.URL;
    let port = parseInt(window.location.port);
    if (port === 3000){
      url = python_url + url; 
    }
    return url
}

export default FormatUrl