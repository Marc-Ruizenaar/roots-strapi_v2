import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutTitleSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_title_sections';
  info: {
    displayName: 'Title Section';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    BackgroundImage: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files'>;
    linkToSection: Schema.Attribute.String;
  };
}

export interface LayoutTextImageSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_text_image_sections';
  info: {
    displayName: 'Text Image Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    leftImageRightText: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    heading: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isNewBanner: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    linkToSection: Schema.Attribute.String;
  };
}

export interface LayoutSubLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_sub_links';
  info: {
    displayName: 'subLink';
    icon: 'arrowDown';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'componant.link', true>;
    linkToSection: Schema.Attribute.String;
  };
}

export interface ComponantLink extends Struct.ComponentSchema {
  collectionName: 'components_componant_links';
  info: {
    displayName: 'Link';
    icon: 'archive';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    dropdownMenu: Schema.Attribute.Boolean;
    subLinks: Schema.Attribute.Component<'layout.sub-link', true>;
  };
}

export interface ComponantHeader extends Struct.ComponentSchema {
  collectionName: 'components_componant_headers';
  info: {
    displayName: 'Header';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Link: Schema.Attribute.Component<'componant.link', true>;
  };
}

export interface ComponantFooter extends Struct.ComponentSchema {
  collectionName: 'components_componant_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    number: Schema.Attribute.String;
    email: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.title-section': LayoutTitleSection;
      'layout.text-image-section': LayoutTextImageSection;
      'layout.sub-link': LayoutSubLink;
      'layout.hero-section': LayoutHeroSection;
      'componant.link': ComponantLink;
      'componant.header': ComponantHeader;
      'componant.footer': ComponantFooter;
    }
  }
}
