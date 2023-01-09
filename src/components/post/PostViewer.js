import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Responsive) `
  margin-top: 4rem;
`;
const PostHead = styled.div`
    border-bottom: 1px solid ${palette.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem
    h1 {
        font-size: 3rem;
        lin-height: 1.5;
        margin: 0;
    }
`;

const PostContent = styled.div`
  font-size: 1.3125 rem;
  color: ${palette.gray[8]};
  `;

  const PostViewer = ({ post, error, loading, actionButtons }) => {
      // ㅇㅔ러발생시 
      if (error) {
          if (error.response && error.response.staus === 404 ) {
              return <PostViewerBlock>존재하지 않는 포스트 입니다. </PostViewerBlock>
          }
          return <PostViewerBlock>오류발생 </PostViewerBlock>
      }

      // 로딩중이거나, 아직 포스트 데이터가 없을 시
      if (loading || !post ) {
          return null;
      }

      const { title, body, user, publishedDate } = post;
      return (
          <PostViewerBlock>
              <Helmet>
                  <title>{title} - Coupang </title>
              </Helmet>
              <PostHead>
                  <h1>{title}</h1>
                   <SubInfo
                     username={user.username}
                     publishedDate={publishedDate}
                     hasMarginTop
                   />
              </PostHead>
              {actionButtons}
              <PostContent dangerouslySetInnerHTML={{ __html: body}} />
          </PostViewerBlock>
      );
  };

  export default PostViewer;

