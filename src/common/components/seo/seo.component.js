import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import defaultSeo from './seo.config';

class Seo extends PureComponent {
  render() {
    const {
      title = defaultSeo.title,
      description = defaultSeo.description,
      keywords = defaultSeo.keywords,
      image = defaultSeo.image
    } = this.props;
    return (
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title}/>
        <meta name="description" content={description}/>
        <meta property="og:description" content={description}/>
        {image && <meta property="og:image" content={image}/>}
        <meta name="keywords" content={keywords}/>
      </Helmet>
    );
  }
}

export default Seo;
