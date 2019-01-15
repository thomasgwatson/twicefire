import * as _ from 'lodash'
import * as React from 'react'
import styled from '@emotion/styled'

import { colors } from '../styles/colors'
import Twitter from './icons/twitter';
import { css } from 'emotion';
import lighten from 'polished/lib/color/lighten';

const CommentOnTwitterSection = styled.section`
  display: flex;
`

const CommentOnTwitterContent = styled.section`
  display: grid;
  grid-gap: 8px;
  grid-auto-flow: column;
`

const CommentButton = css`
  display: block;
  padding: 9px 16px;
  /* border: color(var(--midgrey) l(+20%)) 1px solid; */
  border: ${lighten('0.2', colors.purple)} 1px solid;
  color: ${colors.purple};
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 500;
  border-radius: 20px;
  transition: all ease 0.2s;

  :hover {
    border-color: ${colors.blue};
    color: ${colors.blue};
    text-decoration: none;
  }
`;

const IconBox = styled.div`
  height: 30px;
  width: 30px;
`

const CommentOnTwitter: React.FunctionComponent<{postUrl: string}> = ({postUrl}) => {
  return (
    <CommentOnTwitterSection>
      <CommentOnTwitterContent>
        <IconBox><Twitter/></IconBox>
          <a className={`${CommentButton}`} href={`https://mobile.twitter.com/search?q=${postUrl}`}>Discuss on Twitter</a>{' '}
      </CommentOnTwitterContent>
    </CommentOnTwitterSection>
  );
};

export default CommentOnTwitter;
