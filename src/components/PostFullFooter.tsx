import * as React from 'react';
import styled from '@emotion/styled'

const PostFullFoot = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2vw 0 5vw 0;
  max-width: 840px;
`

const PostFullFooter: React.FunctionComponent = props => <PostFullFoot>{props.children}</PostFullFoot>;

export default PostFullFooter;
