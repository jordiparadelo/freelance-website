import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'paperPlane';
  };
  attributes: {
    href: Schema.Attribute.String;
    Label: Schema.Attribute.String;
    order: Schema.Attribute.Integer;
    type: Schema.Attribute.Enumeration<['email', 'phone', 'website', 'other']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.social-link': SharedSocialLink;
    }
  }
}
