import {CogIcon, DocumentTextIcon, LinkIcon} from '@sanity/icons'
import type {StructureBuilder, StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Portfolio')
    .items([
      S.listItem()
        .title('Case Studies')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('caseStudy').title('Case Studies')),
      S.listItem()
        .title('Writing Links')
        .icon(LinkIcon)
        .child(S.documentTypeList('writingLink').title('Writing Links')),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('siteSettings')),
    ])
