import IndexLayout from '../layouts'
import Wrapper from '../components/Wrapper'
import SiteNav from '../components/header/SiteNav'
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared'
import * as React from 'react'
import { css } from 'emotion'

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post'
import { PostFullContent } from '../components/PostContent'
import Footer from '../components/Footer'
import Helmet from 'react-helmet'

const PageTemplate = css`
  .site-main {
    background #fff;
    padding-bottom: 4vw;
  }
`


const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper className={`${PageTemplate}`}>
      <header className={`${SiteHeader} ${outer}`}>
        <div className={`${inner}`}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
        <article className={`${PostFull} post page ${NoImage}`}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                I am Tom Watson, an Australian living on the West coast of the USA. My posts will cut across a range of topics that are dear to me, including dance, rites of passage, software engineering, books reviews, street art and more.
              </p>
              <blockquote>
                <p>
                  My intent is to refine my thinking by practicing my writing, and to centralize some of my creative expression. If folks get something out of these posts, that is just a nice bonus!
                </p>
              </blockquote>
              <p>
                Thanks for your visit and hope you enjoy
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
)

export default About
