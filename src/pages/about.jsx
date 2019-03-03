import { graphql } from "gatsby";
import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import MainContent from "../components/MainContent/MainContent";
import PostHeader from "../components/PostHeader/PostHeader";
import PostFormatting from "../components/PostFormatting/PostFormatting";
import PostDate from "../components/PostDate/PostDate";
import PostFooter from "../components/PostFooter/PostFooter";
import AuthorImage from "../components/AuthorImage/AuthorImage";
import AuthorInfo from "../components/AuthorInfo/AuthorInfo";
import PostShare from "../components/PostShare/PostShare";
import Footer from "../components/Footer/Footer";
import AuthorModel from "../models/author-model";
import Layout from "../components/layout";

function parsePost(post, slug) {
  const result = post;
  if (!result.id) {
    result.id = slug;
  }
  if (!result.id) {
    result.category_id = config.postDefaultCategoryID;
  }
  return result;
}

class AboutPage extends Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { location, data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = parsePost(postNode.frontmatter, slug);
    const { cover, title, date, author } = post;
    const className = post.post_class ? post.post_class : "post";
    const authorData = AuthorModel.getAuthor(
      data.authors.edges,
      author,
      config.blogAuthorId
    );

    return (
      <Layout location={location}>
        <Drawer className="post-template" isOpen={this.state.menuOpen}>
          <Helmet>
            <title>{`About | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            <MainHeader className="post-head" cover={cover}>
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
            </MainHeader>
            <MainContent>
              <PostFormatting className={className}>
                <PostHeader>
                  <h1 className="post-title">{title}</h1>
                  <section className="post-meta">
                    <PostDate date={date} />
                  </section>
                </PostHeader>

                <section
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: postNode.html }}
                />

                <PostFooter>
                  <AuthorImage author={authorData} />
                  <AuthorInfo prefix="/author" author={authorData} />
                  <PostShare
                    postNode={postNode}
                    postPath={location.pathname}
                    config={config}
                  />
                </PostFooter>
              </PostFormatting>
            </MainContent>

            {/* The tiny footer at the very bottom */}
            <Footer
              copyright={config.copyright}
              promoteGatsby={config.promoteGatsby}
            />
          </SiteWrapper>
        </Drawer>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPageAbout {
    markdownRemark(fields: { slug: { eq: "/about" } }) {
      html
      timeToRead
      frontmatter {
        title
        cover
        date
        category
        tags
        author
      }
      fields {
        slug
      }
    }
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          uid
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default AboutPage;
