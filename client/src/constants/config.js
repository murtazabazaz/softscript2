// api notification messages

export const API_NOTIFICATION_MESSAGES ={
    loading: {
        title: 'loading',
        message: 'Data is being loaded, Please wait'
    },
    success: {
        title: "Success",
        message: "Data successfully loaded "
    },
    responseFailure: {
        title: 'Error',
        message: "An error occured while fetching response from the server, Try again later"
    },
    requestFailure: {
       title: 'Error',
       message: 'An occured while parsing request data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect with the server, Please check internet connectivity'
    }
}

// API SERVICE CALl...


export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST'}
}