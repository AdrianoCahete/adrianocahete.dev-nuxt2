# My Portfolio 
> [adrianocahete.dev](https://adrianocahete.dev/?ref=gh)

This Portfolio has [SSR](https://ssr.vuejs.org/#what-is-server-side-rendering-ssr) enabled, so has a pretty fast loading!
### [Try it!](https://adrianocahete.dev) (you can try offline too, after the first visit of course... ;))

## Deploy
[![Netlify Status](https://api.netlify.com/api/v1/badges/bffddeca-83de-4641-807a-ac12aa617fae/deploy-status)](https://app.netlify.com/sites/adrianocahete-dev/deploys)

All the changes are automatically deployed to Netlify.  
You can see that live portfolio [here](https://adrianocahete.dev/?ref=gh).


### Google Lighthouse Performance Audit
You can see the latest performance state with artifacts on [Github Actions](https://github.com/AdrianoCahete/adrianocahete.dev/actions)



## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

## Test ServiceWork (and offline mode) locally
You need to make [localhost trustable on Firefox/Chrome](https://stackoverflow.com/a/34161385).


## ToDo
- Add micro animations to entire portfolio *[In Progress]*
- Create a blog to explain the steps of each project *[In Progress]*
- Add all licenses to project page "This portfolio" *[In Progress]*
- Add an interactable animation on the Main page (home) *[In Progress]*
- Create a Logo
- Use newly created Logo as link to back Home
- Move to i18n instead of hardcoded text
- Add [Nuxt Storybook](https://storybook.nuxtjs.org/) to documentation system
- Customize Nuxt loading page
- Create a specific page for every project/interface
- Make a better error/not found page
- Move CSS to SASS instead of Stylus ([stylus seems to be deprecated or, at least, stagnated](https://github.com/stylus/stylus/issues/2282))
- Create a changelog
- Generate Lighthouse badges from Github Actions and update the correct files in repository
- Add a toggle to show different information to different industries
- Add proper favicons (to increase Lighthouse Audit score on PWA)
- Add a switch to change themes
- Add more themes than just light/dark theme
- Add custom themes (add the ability to user modify the theme on-the-fly)
- Add CSS regression tests (BackstopJS, BrowserStack or Helpscout Barista?)
- Add Vue code tests
- Add CSS to mock IE users :)

## Fixed
- ~~Add a `build date`/`last updated on` string on page~~  *[Fixed on 2020-08-10]*
- ~~Try modern mode from latest Nuxt~~ *[Fixed on 2020-08-05]*
- ~~Move to latest [Nuxt available](https://nuxtjs.org/guide/release-notes)~~  *[Fixed on 2020-08-05]*
- ~~Change every `div` to `section`~~ *[Fixed on 2020-07-11]*
- ~~Move `isMobile` function/feature to more global scope instead of on `page` scope~~ *[Fixed on 2020-06-29]*
- ~~Fix Navbar on Mobile~~ *[Fixed on 2020-06-26]*
- ~~Add Hotjar to know the user~~ *[Implemented on 2020-05-28]*
- ~~Add an offline mode~~  *[Implemented on 2020-05-16]*
- ~~Add animations to page loading~~  *[Implemented on 2020-05-16]*
- ~~Move to PWA to accommodate better the content~~ *[Implemented on 2020-05-16]*

# Font
This project uses [Inter](https://github.com/rsms/inter) as a default typography

# Icons
- [Home](https://www.flaticon.com/free-icon/home_846551) and [PDF](https://www.flaticon.com/free-icon/pdf_1839630) icons made by Freepik
- [Behance](https://www.flaticon.com/free-icon/behance_254383) icon made by RoundIcons
- [Codepen](https://www.flaticon.com/free-icon/codepen_2111262) and [OpenSource](https://www.flaticon.com/free-icon/open-source_732090) icons made by Pixel Perfect
- [Pin Location](https://www.flaticon.com/free-icon/location_2928987) icon made by Good Ware

All icons are from [FlatIcons](https://www.flaticon.com/)
