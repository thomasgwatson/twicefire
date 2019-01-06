import { Link } from 'gatsby';
import * as _ from 'lodash';
import * as React from 'react';
import styled from '@emotion/styled'

import { colors } from '../styles/colors';

const CreativeCommonsSection = styled.section`
  display: flex;
`;

const CreativeCommonsContent = styled.section`
  p {
    margin: 0;
    color: ${colors.midgrey};
    font-size: 12px;
    line-height: 1.3em;
    width: 80%;
  }
`;

const CreativeCommonsText: React.FunctionComponent<{}> = () => {
  return (
    <CreativeCommonsSection>
      <CreativeCommonsContent>
        <p>
          This work is licensed under a{' '}
          <Link to={'https://creativecommons.org/licenses/by-nc/3.0/deed.en_GB'}>Creative Commons Attribution-NonCommercial 3.0 Unported
            License</Link>{' '}
          This means you're free to copy, share, and build
          on this essay (with attribution), but not to sell it. </p>
      </CreativeCommonsContent>
    </CreativeCommonsSection>
  );
};

export default CreativeCommonsText;
