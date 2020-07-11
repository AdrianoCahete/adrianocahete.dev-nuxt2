# adrianocahete.dev
> My Portfolio

## Deploy
[![Netlify Status](https://api.netlify.com/api/v1/badges/bffddeca-83de-4641-807a-ac12aa617fae/deploy-status)](https://app.netlify.com/sites/adrianocahete-dev/deploys)

All the changes are automatically deployed to Netlify.  
You can see that live portfolio [here](https://adrianocahete.dev/).


### Lighthouse Performance
[![Lighthouse Performance Badge](https://adrianocahete.dev/performance/lighthouse_performance.svg)](https://adrianocahete.dev/)
[![Lighthouse Accessibility Badge](https://adrianocahete.dev/performance/lighthouse_accessibility.svg)](https://adrianocahete.dev/)
[![Lighthouse Best Practices Badge](https://adrianocahete.dev/performance/lighthouse_best-practices.svg)](https://adrianocahete.dev/)
[![Lighthouse SEO Badge](https://adrianocahete.dev/performance/lighthouse_seo.svg)](https://adrianocahete.dev/)
[![Lighthouse PWA Badge](https://adrianocahete.dev/performance/lighthouse_pwa.svg)](https://adrianocahete.dev/)

You can see the latest performance state with artifacts on [Github Actions](https://github.com/AdrianoCahete/adrianocahete.dev/actions).



## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

## Test SW Locally
You need to make localhost trustable on Firefox/Chrome: https://stackoverflow.com/a/34161385


## ToDo

- ~~Move to PWA to accommodate better the content~~ *[Implemented on 2020-05-16]*
- ~~Add animations to page loading~~  *[Implemented on 2020-05-16]*
- ~~Add an offline mode~~  *[Implemented on 2020-05-16]*
- ~~Add Hotjar to know the user~~ *[Implemented on 2020-05-28]*
- ~~Fix Navbar on Mobile~~ *[Fixed on 2020-06-26]*
- ~~Move `isMobile` function/feature to more global scope instead of on `page` scope~~ *[Fixed on 2020-06-29]*
- Add micro animations to entire portfolio *[In Progress]*
- Move to latest [Nuxt available](https://nuxtjs.org/guide/release-notes)
- Change every `div` to `section`
- Move to i18n instead of hardcoded text
- Customize Nuxt loading page (up to v2.13)
- Create specific page for every project/interface
- Add all licenses to project page "This portfolio"
- Create a blog to explain the steps of each project
- Try modern mode from latest Nuxt
- Make a better error/not found page
- Move CSS to SASS instead of Stylus ([stylus seems to be deprecated or, at least, stagnated](https://github.com/stylus/stylus/issues/2282))
- Create a changelog
- Generate Lighthouse badges from Github Actions and update the correct files in repository
- Add a `build date`/`last updated on` string on page
- Add a toggle to show different information to different industries
- Add proper favicons (to increase Lighthouse Audit score on PWA)
- Add a switch to change themes
- Add more themes than just light/dark theme
- Add custom themes (add the ability to user modify the theme on-the-fly)
- Make styles documentation (using [SassDoc](http://sassdoc.com/) and maybe Docusaurus?)
- Add CSS regression tests (BackstopJS or Helpscout Barista?)
- Add Vue code tests
- Add CSS to mock IE users :)

# Icons
- [Behance](https://www.flaticon.com/free-icon/behance_254383) icon made by RoundIcons
- [PDF](https://www.flaticon.com/free-icon/pdf_1839630) and [Home](https://www.flaticon.com/free-icon/home_846551) icons made by Freepik
- [Codepen](https://www.flaticon.com/free-icon/codepen_2111262) and [OpenSource](https://www.flaticon.com/free-icon/open-source_732090) icons made by Pixel Perfect

All icons are from [FlatIcons](https://www.flaticon.com/)
