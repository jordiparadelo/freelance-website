import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectDetailsDetails extends Struct.ComponentSchema {
  collectionName: 'components_project_details_details';
  info: {
    displayName: 'details';
    icon: 'bulletList';
  };
  attributes: {
    blob: Schema.Attribute.Blocks;
    brief: Schema.Attribute.Text & Schema.Attribute.Required;
    client: Schema.Attribute.String;
    collaboration: Schema.Attribute.Component<'shared.category', true>;
    industries: Schema.Attribute.Component<'shared.category', true>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    preview: Schema.Attribute.String;
    roles: Schema.Attribute.Component<'shared.category', true>;
    type: Schema.Attribute.Component<'shared.category', true>;
    year: Schema.Attribute.String;
  };
}

export interface SharedCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_categories';
  info: {
    displayName: 'category';
    icon: 'priceTag';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SharedImageData extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_data';
  info: {
    displayName: 'image-data';
    icon: 'landscape';
  };
  attributes: {
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

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
      'project-details.details': ProjectDetailsDetails;
      'shared.category': SharedCategory;
      'shared.image-data': SharedImageData;
      'shared.social-link': SharedSocialLink;
    }
  }
}
