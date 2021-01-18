import React from 'react';
import Layout from '../../components/layout';
import TitleAndMetaTags from '../../components/TitleAndMetaTags';
import Button from '../../components/Button';
import { Description } from '../../components/Typography';

import {
  ContentBlock,
  Title,
  Subtitle,
  TitleWrapper,
  Wrapper,
  FeaturedImage,
  CTABottom,
} from '../../components/LayoutComponents';

import team from './images/team-settings.png';
import bg from './images/bg.png';
import bg1 from './images/bg1.png';

export default () => (
  <Layout>
    <TitleAndMetaTags title="Knowledge Sharing - Codesandbox" />
    <Wrapper>
      <TitleWrapper>
        <Title>Share knowledge and learn together</Title>
      </TitleWrapper>
      <Description>
        Use code, apps, and templates collectively. Learn from each other and
        bake-in best practice.
      </Description>
      <div
        css={`
          margin: auto;
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        `}
      >
        <Button cta href="https://codesandbox.io/s/">
          Get Started
        </Button>
      </div>
      <div>
        <div>
          <Subtitle as="h2">Collaborative workspaces</Subtitle>
        </div>
        <FeaturedImage bg={bg}>
          <img
            src={team}
            alt=""
            css={`
              width: 1022px;
            `}
          />
        </FeaturedImage>
        <ContentBlock>
          <div>
            <h3>Workspace templates</h3>
            Provide starting points for new projects, pre-configured with
            styles, libraries, and settings to bake in best practice.
          </div>

          <div>
            <h3>Folders</h3>
            Subdivide your workspace, organizing apps, hiring challenges,
            prototypes, and bug repros into folders.
          </div>

          <div>
            <h3>Team member management</h3>
            Control who can view and add comments, or edit sandboxes, so you
            safely share by default.
          </div>
        </ContentBlock>

        <div>
          <div>
            <Subtitle>Embeds</Subtitle>
          </div>
          <iframe
            css={`
              border: 0;
              width: 100%;
              height: 385px;
            `}
            title="embed-example"
            src={`https://codesandbox.io/embed/static-2lqup?fontsize=14&hidenavigation=true&hidedevtools=true`}
          />
          <ContentBlock>
            <div>
              <h3> Show code and previews</h3>
              Show code, the running app, or both at the same time to share an
              idea, or communicate progress.
            </div>

            <div>
              <h3>Lightweight</h3>
              Designed to be lightweight yet powerful, our embeda don’t slow you
              down.
            </div>

            <div>
              <h3>Embed anywhere</h3>
              Embed sandboxes in docs, blog posts, and websites. Or the tools
              you use to get work done.
            </div>
          </ContentBlock>
        </div>
        <div>
          <div>
            <Subtitle>Made to share</Subtitle>
          </div>
          <FeaturedImage bg={bg1}>
            {/* <img
              src={team}
              alt=""
              css={`
                width: 1022px;
              `}
            /> */}
          </FeaturedImage>
          <ContentBlock>
            <div>
              <h3>Secure, shareable links</h3>
              Share code, work together, or get feedback
              with a secure link, that’s ready to share.
            </div>

            <div>
              <h3>Team member invites</h3>
              Invite members via email, or username. Get
              your entire team onboard with an invite link.
            </div>

            <div>
              <h3>No install or downloads</h3>
              With nothing to install or download, folks
              just need a web browser to get involved.
            </div>
          </ContentBlock>
        </div>
        <CTABottom />
      </div>
    </Wrapper>
  </Layout>
);
