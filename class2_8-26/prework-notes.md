
HTTP- hypertext transfer protocol

CRUD app - Create, Read, Update, Delete / uses the four methods below

-------------------------------------------------------------------------------------------------------------------------

get - tells an application that we are requesting some sort of information
    - it contains no body
    -example

    axios.get('/user?ID=12345')
        .then(function (response) {
         // handle success
         console.log(response);
        })
----------------------------------------------------------------------------------------------------------------------------
post - tells an application that it need so create something
    - it sends along a payload in the HTTP request and the applicaion can read that to determine
        what need to be inserted into a database, saved to a file, ect....

    - example

    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
----------------------------------------------------------------------------------------------------------------------------

put - is an update
    - this methid tells the application/server that something need to be changed or updated
    - also sends alson a body to help the application deide what needs to be altered

    - example

    axios.put('/user?ID=12345', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })

-----------------------------------------------------------------------------------------------------------------------

delete - its purpose is to remove something from a n application
        - may or may not have a body

        - example

        axios.delete('/user?ID=12345')
            .then(function (response) {
            // handle success
             console.log(response);
        })

----------------------------------------------------------------------------------------------------------------------

HTTP status codes

200 - There are multiple variations of the 200 status code including 201 and 204, but generally anything in the 200 range indicates a successful response. Things went according to plan.

300 - Status codes in the 300s are used for caching, proxy or SEO purposes. The main one is a 301 redirect which means a resource was "moved permanently". We won't run into these codes much in this class. In fact, you won't run into them that often in your career unless you do a lot of networking related tasks.

400 - 400 status codes mean something went wrong with the request. There are lots of variations of these so we will cover a few. The main ones are:

400 - Bad Request_: This is a generic "something is wrong" status code. You will need to change your request and try again.

401 - Unauthorized_: You've likely forgotten an API key or some other Authorization header required to complete the request. This is usually temporary.

403 - Forbidden_: Similar to a 401, this indicates that the server understands the request but is going to block it anyway. This is more permanent. For example: incorrect access rights.

404 - Not Found_: You may have seen this one before! This means that the requested resource could not be found.

500 - Status codes in the 500s mean something is really wrong. A 500 (Internal Server Error) could be an uncaught exception in your code. A 502 (Bad Gateway) or a 503 (Service Unavailable) may indicate an infrastructure problem. Perhaps your server is down.

