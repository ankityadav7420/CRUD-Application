# Steps to Test :
1. Run npm install in both app(server and frontend)
2. Run both frontend : npm start and  server: npm run dev
3. make sure apiURL
4.  data.json file should be in correct format if you are adding from outer side
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

5. # Hit the url "http://localhost:3000/api/posts"
  above url is from frontend and hit the route /api/posts

6. See the UI and do the CRUD operation