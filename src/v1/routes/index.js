const AnswerRouter = require("./AnswerRouter");
const AuthRouter = require("./AuthRouter");
const BookmarkRouter = require("./BookmarkRouter");
const CommentRouter = require("./CommentRouter");
const ImageRouter = require("./ImageRouter");
const QuestionRouter = require("./QuestionRouter");
const SpaceRouter = require("./SpaceRouter");
const ThreadRouter = require("./ThreadRouter");
const UserRouter = require("./UserRouter");
const VoteRouter = require("./VoteRouter");

const routes = [
    AnswerRouter,
    AuthRouter,
    BookmarkRouter,
    CommentRouter,
    ImageRouter,
    QuestionRouter,
    SpaceRouter,
    ThreadRouter,
    UserRouter,
    VoteRouter,
];

module.exports = routes;
