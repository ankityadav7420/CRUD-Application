# Steps to Test :
1. Run npm install in both apps (server and frontend)
2. Run both frontend: npm start and  server: npm run dev
3. make sure APIURL
4.  data.json file should be in the correct format if you are adding from the outer side
  Ex.
    [
        {
            "userId":13,
            "title":"Updated Title",
            "body":"Updated Body"
        },
        {
            "userId":143,
            "title":" Title",
            "body":"Updated"
        },
    ]

5.  Hit the URL "http://localhost:3000/api/posts"
  * The above URL is from frontend and hit the route /API/posts

6. See the UI and do the CRUD operation
