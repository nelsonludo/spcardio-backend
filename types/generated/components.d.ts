import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEnseignants extends Struct.ComponentSchema {
  collectionName: 'components_shared_enseignants';
  info: {
    description: '';
    displayName: 'enseignants';
    icon: 'emotionHappy';
  };
  attributes: {
    enseignant: Schema.Attribute.Component<'shared.person', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPerson extends Struct.ComponentSchema {
  collectionName: 'components_shared_people';
  info: {
    displayName: 'Person';
    icon: 'walk';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedResidents extends Struct.ComponentSchema {
  collectionName: 'components_shared_residents';
  info: {
    description: '';
    displayName: 'residents';
    icon: 'alien';
  };
  attributes: {
    resident: Schema.Attribute.Component<'shared.person', true>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.enseignants': SharedEnseignants;
      'shared.media': SharedMedia;
      'shared.person': SharedPerson;
      'shared.quote': SharedQuote;
      'shared.residents': SharedResidents;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
