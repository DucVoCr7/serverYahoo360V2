import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import checkConnectDatabase from './config/connectDatabase'
import initAuthenticationRoutes from './routes/authentication';
import initAPIPagesRoutes from './routes/apiPages';
import initAPIPostsRoutes from './routes/apiPosts';
import initRefreshTokenRoutes from './routes/refreshToken';
import initAPIPhotosRoutes from './routes/apiPhotos';
import initAPIMusicsRoutes from './routes/apiMusics';
import initAPICommentsRoutes from './routes/apiComments';
import initAPIRepliesRoutes from './routes/apiReplies';
import initAPILikesRoutes from './routes/apiLikes';
import initAPIFriendsRoutes from './routes/apiFriends';

const app = express()
let port = process.env.PORT || 3000;

 // Enable All CORS Requests
app.use(cors())

// Cấu hình Express gửi POST request, hỗ trợ lấy tham số trên URL
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Check connect with database
checkConnectDatabase();

// Set up view engine
viewEngine(app);

// Init web route
initWebRoutes(app)

// Init refreshToken route
initRefreshTokenRoutes(app)

// Init authentication
initAuthenticationRoutes(app)

// Init APIPages route
initAPIPagesRoutes(app)

// Init APIPosts route
initAPIPostsRoutes(app)

// Init APIPhotos route
initAPIPhotosRoutes(app)

// Init APIMusics route
initAPIMusicsRoutes(app)

// Init APIComments route
initAPICommentsRoutes(app)

// Init APIReplies route
initAPIRepliesRoutes(app)

// Init APILikes route
initAPILikesRoutes(app)

// Init APIFriends route
initAPIFriendsRoutes(app)

app.listen(port, () => {
  console.log(`Backend Yahoo360 is running on port ${port}`)
})