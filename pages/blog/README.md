# To be add soon (I hope)

## How to print package.json values on Nuxt

In my case I need the version value. You can change to match your needs.

! Just avoid to import you entirely package, for security reasons.

Add the follow in `nuxt.config.js`:
```
publicRuntimeConfig: {
  appVersion: require('./package.json').version
}
```

Remember to not add private info on that method. You can read more about that on Nuxt docs.

After that, the `{{ $config.appVersion }}` will be available to use in your project. You can safely add this to any page, without need to reference anything!


With help of:
- https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config#using-your-config-values
- remarks @ Nuxt's Discord
