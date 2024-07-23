const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate({
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL'],
        defaultLocale: 'en-US',
        pages: {
            'reg:^/posts/[slug]': ['post'],
            '/data': ['post']
        }
    }
});
