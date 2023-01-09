import React, { useEffect } from 'react';
import qs from 'qs';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/quizzes/QuizList';
import { listQuizzes } from '../../modules/quizzes';

const PostListContainer = ({ location }) => {
    const dispatch = useDispatch();
    const { posts, error, loading, user } = useSelector(
        ({ posts, loading, user }) => ({
            posts: posts.posts,
            error: posts.error,
            loading: loading['posts/LIST_POSTS'],
            user: user.user,
        }),
    ) ;
    useEffect(() => {
        const { tag, username, page } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(listQuizzes({ tag, username, page }));
    }, [dispatch, location.search]) ;

    return (
        <PostList
            loading={loading}
            error={error}
            posts={posts}
            showWriteButton={user}
        />
    );
};

export default PostListContainer;
// export default withRouter(PostListContainer);